import { createServer as createHttpServer } from "node:http";
import { createServer as createHttpsServer } from "node:https";
import { readFile, writeFile, mkdir, readdir, chmod } from "node:fs/promises";
import { existsSync, readFileSync } from "node:fs";
import { execFileSync } from "node:child_process";
import path from "node:path";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";
import os from "node:os";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_DIR = path.join(__dirname, ".data");
const STORE_FILE = path.join(DATA_DIR, "gocardless-store.json");
const APP_STATE_FILE = path.join(DATA_DIR, "app-state.json");
const CATEGORY_KNOWLEDGE_FILE = path.join(DATA_DIR, "category-knowledge.json");
const EB_STORE_FILE = path.join(DATA_DIR, "enablebanking-store.json");
const EB_PRIVATE_KEY_FILE = path.join(DATA_DIR, "enablebanking-private.key");
const EB_CERT_FILE = path.join(DATA_DIR, "enablebanking-public.crt");
const GC_BASE_URL = "https://bankaccountdata.gocardless.com/api/v2";
const EB_BASE_URL = "https://api.enablebanking.com";

loadEnvFile(path.join(__dirname, ".env"));

const PORT = Number(process.env.PORT || 5173);
const HTTPS_PORT = Number(process.env.HTTPS_PORT || 5174);
const INSTITUTION_ID = process.env.GOCARDLESS_INSTITUTION_ID || "SPAREKASSEN_KRONJYLLAND_KRONDK22";
const COUNTRY = process.env.GOCARDLESS_COUNTRY || "DK";
const MAX_HISTORICAL_DAYS = Number(process.env.GOCARDLESS_MAX_HISTORICAL_DAYS || 180);
const ACCESS_VALID_FOR_DAYS = Number(process.env.GOCARDLESS_ACCESS_VALID_FOR_DAYS || 180);
const EB_APP_ID = process.env.ENABLEBANKING_APP_ID || "";
const EB_ASPSP_NAME = process.env.ENABLEBANKING_ASPSP_NAME || "Sparekassen Kronjylland";
const EB_COUNTRY = process.env.ENABLEBANKING_COUNTRY || "DK";
const EB_LANGUAGE = process.env.ENABLEBANKING_LANGUAGE || "da";
const EB_PSU_TYPE = process.env.ENABLEBANKING_PSU_TYPE || "personal";
const EB_REDIRECT_URL = process.env.ENABLEBANKING_REDIRECT_URL || "";
const EB_PRIVATE_KEY_PEM = (process.env.ENABLEBANKING_PRIVATE_KEY_PEM || "").replace(/\\n/g, "\n");
const LOCAL_IMPORT_DIR = process.env.LOCAL_IMPORT_DIR || path.join(os.homedir(), "Documents", "Privatøkonomi");
const WEBAPP_SHARED_SECRET = process.env.WEBAPP_SHARED_SECRET || "";
const COOKIE_NAME = "privatoekonomi_session";
const COOKIE_MAX_AGE_SECONDS = Number(process.env.WEBAPP_SESSION_MAX_AGE_SECONDS || 60 * 60 * 24 * 30);
const DATA_BACKEND = (process.env.DATA_BACKEND || "local").toLowerCase();
const SUPABASE_URL = (process.env.SUPABASE_URL || "").replace(/\/+$/, "");
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || "";
const SUPABASE_APP_STATE_ID = process.env.SUPABASE_APP_STATE_ID || "claes";
const CATEGORIZATION_WEB_LOOKUP = process.env.CATEGORIZATION_WEB_LOOKUP === "1";
const PUBLIC_PATHS = new Set(["/login.html", "/privacy.html", "/terms.html", "/icon.svg", "/manifest.webmanifest", "/service-worker.js"]);
const SECURITY_HEADERS = {
  "Content-Security-Policy": "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; connect-src 'self'; manifest-src 'self'; base-uri 'self'; frame-ancestors 'none'; form-action 'self'",
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY",
  "Referrer-Policy": "same-origin",
  "Permissions-Policy": "camera=(), microphone=(), geolocation=(), payment=()",
};

let tokenCache = null;

async function requestHandler(req, res) {
  try {
    const protocol = req.socket.encrypted ? "https" : "http";
    const url = new URL(req.url, `${protocol}://${req.headers.host || "localhost"}`);
    if (url.pathname.startsWith("/api/")) {
      await handleApi(req, res, url);
      return;
    }
    await serveStatic(req, res, url);
  } catch (error) {
    console.error(error);
    sendJson(res, 500, { error: "internal_error", message: error.message || "Ukendt serverfejl" });
  }
}

const server = createHttpServer(requestHandler);

server.listen(PORT, () => {
  console.log(`Claes' privatøkonomi kører på http://localhost:${PORT}`);
  if (!hasEnableBankingConfig()) {
    console.log("Enable Banking mangler Application ID eller lokal nøgle. Gå til Bank-sync for at generere certifikat og gemme Application ID.");
  }
  if (!hasGcKeys()) {
    console.log("GoCardless keys mangler. GoCardless er kun fallback; udfyld GOCARDLESS_SECRET_ID/KEY hvis du vil teste den vej.");
  }
});

if (existsSync(EB_PRIVATE_KEY_FILE) && existsSync(EB_CERT_FILE)) {
  createHttpsServer({ key: readFileSync(EB_PRIVATE_KEY_FILE), cert: readFileSync(EB_CERT_FILE) }, requestHandler).listen(HTTPS_PORT, () => {
    console.log(`HTTPS callback/legal kører på https://localhost:${HTTPS_PORT}`);
  });
}

const SERVER_CATEGORY_RULES = [
  { pattern: /(totalkredit|adm\.service fyn)/i, categoryId: "cat-housing", confidence: 90, reason: "Backend-knowhow: bolig/realkredit." },
  { pattern: /(odsherred kommune|odsherred forsyning|brf sb odden|sommerhuskonto)/i, categoryId: "cat-summerhouse", confidence: 90, reason: "Backend-knowhow: sommerhus." },
  { pattern: /(netto|rema|føtex|foetex|meny|superbrugsen|coop|365|skagenfood|nemlig|lidl|odden fisk|dagli.?brugsen)/i, categoryId: "cat-groceries", confidence: 88, reason: "Backend-knowhow: dagligvarer." },
  { pattern: /(wolt|uber eats|restaurant|bistro|cafe|café|takeaway|bar|kaffe)/i, categoryId: "cat-lifestyle", confidence: 82, reason: "Backend-knowhow: mad ude/fritid." },
  { pattern: /(matas|apotek|læge|laege|tandlæge|fitness|sportinghealthclub)/i, categoryId: "cat-health", confidence: 84, reason: "Backend-knowhow: sundhed." },
  { pattern: /(dsb|rejsekort|easypark|parkering|bilsyn|taxi|molslinjen)/i, categoryId: "cat-transport", confidence: 84, reason: "Backend-knowhow: transport." },
  { pattern: /(forsikring|vandværk|kommune|energi|realkredit|husleje|bolig|ejerforening)/i, categoryId: "cat-housing", confidence: 84, reason: "Backend-knowhow: bolig/regning." },
  { pattern: /(saxo|nordnet|aktier|investering|depot|pension)/i, categoryId: "cat-savings", confidence: 90, reason: "Backend-knowhow: investering/opsparing." },
];

const CRYPTO_PRICE_IDS = {
  BTC: "bitcoin",
  XBT: "bitcoin",
  ETH: "ethereum",
  FTT: "ftx-token",
  "FTT*": "ftx-token",
  YFI: "yearn-finance",
  APY: "apy-finance",
  AAVE: "aave",
  "AAVE*": "aave",
  PAY: "tenx",
  DODO: "dodo",
  TRX: "tron",
  ADA: "cardano",
  LINK: "chainlink",
  BNB: "binancecoin",
  XLM: "stellar",
  MIOTA: "iota",
  IOTA: "iota",
  POWR: "power-ledger",
  MKR: "maker",
  EWT: "energy-web-token",
};

const STOCK_SYMBOL_MAP = {
  "NOVOB.CO": { yahoo: "NOVO-B.CO", currency: "DKK" },
  "NKT.CO": { yahoo: "NKT.CO", currency: "DKK" },
};

let marketPriceCache = { at: 0, key: "", data: null };

async function lookupMarketPrices(holdings) {
  const cleanHoldings = holdings
    .filter((item) => item?.symbol && item?.type)
    .map((item) => ({ symbol: String(item.symbol), type: String(item.type).toUpperCase(), exchange: String(item.exchange || ""), name: String(item.name || "") }));
  const key = JSON.stringify(cleanHoldings.map((item) => `${item.type}:${item.symbol}`).sort());
  if (marketPriceCache.data && marketPriceCache.key === key && Date.now() - marketPriceCache.at < 10 * 60 * 1000) return marketPriceCache.data;

  const fx = await getFxRates();
  const cryptoPrices = await lookupCryptoPrices(cleanHoldings.filter((item) => item.type === "CRYPTO"));
  const quotes = await Promise.all(cleanHoldings.map((holding) => {
    if (holding.type === "CRYPTO") return cryptoPrices[normalizeCryptoSymbol(holding.symbol)] || missingQuote(holding, "Ingen CoinGecko-match.");
    return lookupStockPrice(holding, fx);
  }));
  const result = { ok: true, asOf: new Date().toISOString(), fx, quotes };
  marketPriceCache = { at: Date.now(), key, data: result };
  return result;
}

async function getFxRates() {
  const fallback = { DKK: 1, USD: 6.95, EUR: 7.46, NOK: 0.64, SEK: 0.67, GBP: 8.7 };
  try {
    const response = await fetch("https://api.frankfurter.app/latest?from=DKK&to=USD,EUR,NOK,SEK,GBP", { headers: { Accept: "application/json", "User-Agent": "privatoekonomi/1.0" } });
    const data = await response.json();
    if (!response.ok || !data?.rates) return fallback;
    const rates = { DKK: 1 };
    for (const [currency, dkkToCurrency] of Object.entries(data.rates)) {
      if (Number(dkkToCurrency) > 0) rates[currency] = 1 / Number(dkkToCurrency);
    }
    return { ...fallback, ...rates };
  } catch {
    return fallback;
  }
}

async function lookupCryptoPrices(holdings) {
  const idsBySymbol = new Map();
  for (const holding of holdings) {
    const symbol = normalizeCryptoSymbol(holding.symbol);
    const id = CRYPTO_PRICE_IDS[symbol] || CRYPTO_PRICE_IDS[holding.symbol];
    if (id) idsBySymbol.set(symbol, id);
  }
  if (!idsBySymbol.size) return {};
  const ids = Array.from(new Set(idsBySymbol.values()));
  try {
    const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${encodeURIComponent(ids.join(","))}&vs_currencies=dkk,usd&include_24hr_change=true`, { headers: { Accept: "application/json", "User-Agent": "privatoekonomi/1.0" } });
    const data = await response.json();
    const result = {};
    for (const holding of holdings) {
      const symbol = normalizeCryptoSymbol(holding.symbol);
      const id = idsBySymbol.get(symbol);
      const price = id ? data[id] : null;
      result[symbol] = price?.dkk ? {
        symbol: holding.symbol,
        normalizedSymbol: symbol,
        type: "CRYPTO",
        price: Number(price.usd || 0),
        currency: "USD",
        priceDkk: Number(price.dkk || 0),
        changePct: Number.isFinite(Number(price.dkk_24h_change)) ? Number(price.dkk_24h_change) : null,
        asOf: new Date().toISOString(),
        source: "CoinGecko",
      } : missingQuote(holding, "CoinGecko fandt ikke kursen.");
    }
    return result;
  } catch (error) {
    return Object.fromEntries(holdings.map((holding) => [normalizeCryptoSymbol(holding.symbol), missingQuote(holding, `CoinGecko-fejl: ${error.message}`)]));
  }
}

function normalizeCryptoSymbol(symbol) {
  return String(symbol || "").replace(/\*+$/, "").toUpperCase();
}

async function lookupStockPrice(holding, fx) {
  const stooq = await lookupStooqPrice(holding, fx);
  if (stooq?.priceDkk) return stooq;
  const yahoo = await lookupYahooPrice(holding, fx);
  if (yahoo?.priceDkk) return yahoo;
  return missingQuote(holding, yahoo?.error || stooq?.error || "Ingen gratis kurs fundet.");
}

async function lookupStooqPrice(holding, fx) {
  const symbol = stooqSymbolFor(holding);
  if (!symbol) return null;
  try {
    const response = await fetch(`https://stooq.com/q/l/?s=${encodeURIComponent(symbol)}&f=sd2t2ohlcv&h&e=csv`, { headers: { Accept: "text/csv", "User-Agent": "privatoekonomi/1.0" } });
    const text = await response.text();
    const row = parseSimpleCsv(text)[0];
    const close = Number(row?.Close || 0);
    if (!Number.isFinite(close) || close <= 0) return { error: "Stooq returnerede ikke en kurs." };
    const currency = currencyForStock(holding);
    return {
      symbol: holding.symbol,
      type: holding.type,
      price: close,
      currency,
      priceDkk: close * (fx[currency] || 1),
      asOf: row.Date && row.Date !== "N/D" ? `${row.Date}T${row.Time && row.Time !== "N/D" ? row.Time : "00:00:00"}` : new Date().toISOString(),
      source: "Stooq",
    };
  } catch (error) {
    return { error: error.message };
  }
}

function stooqSymbolFor(holding) {
  const symbol = String(holding.symbol || "").toLowerCase();
  if (!symbol || symbol.includes(".co")) return "";
  if (/nasdaq|new york|nyse/i.test(holding.exchange || "") || !symbol.includes(".")) return `${symbol}.us`;
  return "";
}

async function lookupYahooPrice(holding, fx) {
  const mapped = STOCK_SYMBOL_MAP[holding.symbol] || {};
  const yahooSymbol = mapped.yahoo || holding.symbol;
  if (!yahooSymbol) return null;
  try {
    const response = await fetch(`https://query2.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(yahooSymbol)}?range=5d&interval=1d`, { headers: { Accept: "application/json", "User-Agent": "Mozilla/5.0 privatoekonomi/1.0" } });
    const data = await response.json();
    const result = data?.chart?.result?.[0];
    const meta = result?.meta || {};
    const price = Number(meta.regularMarketPrice || meta.previousClose || 0);
    const currency = String(meta.currency || mapped.currency || currencyForStock(holding));
    if (!Number.isFinite(price) || price <= 0) return { error: data?.chart?.error?.description || "Yahoo returnerede ikke en kurs." };
    return {
      symbol: holding.symbol,
      type: holding.type,
      price,
      currency,
      priceDkk: price * (fx[currency] || 1),
      asOf: meta.regularMarketTime ? new Date(Number(meta.regularMarketTime) * 1000).toISOString() : new Date().toISOString(),
      source: "Yahoo Finance",
    };
  } catch (error) {
    return { error: error.message };
  }
}

function currencyForStock(holding) {
  if (STOCK_SYMBOL_MAP[holding.symbol]?.currency) return STOCK_SYMBOL_MAP[holding.symbol].currency;
  if (/Copenhagen|København|Nasdaq Copenhagen/i.test(holding.exchange || "") || String(holding.symbol || "").endsWith(".CO")) return "DKK";
  if (/Oslo/i.test(holding.exchange || "")) return "NOK";
  if (/Paris|Euronext/i.test(holding.exchange || "")) return "EUR";
  return "USD";
}

function parseSimpleCsv(text) {
  const lines = String(text || "").trim().split(/\r?\n/).filter(Boolean);
  if (lines.length < 2) return [];
  const headers = lines[0].split(",");
  return lines.slice(1).map((line) => {
    const values = line.split(",");
    return Object.fromEntries(headers.map((header, index) => [header, values[index] || ""]));
  });
}

function missingQuote(holding, error) {
  return { symbol: holding.symbol, type: holding.type, price: 0, currency: "", priceDkk: 0, asOf: new Date().toISOString(), source: "", error };
}

async function handleCategorizationApi(req, res, url) {
  if (req.method === "GET" && url.pathname === "/api/categorization/knowledge") {
    sendJson(res, 200, await readCategoryKnowledge());
    return;
  }
  if (req.method === "POST" && url.pathname === "/api/categorization/knowledge") {
    const body = await readJsonBody(req);
    const store = await readCategoryKnowledge();
    store.entries ||= [];
    store.entries.push({ keyword: sanitizeMerchantQuery(body.keyword), categoryId: body.categoryId, reason: body.reason || "Manuelt lært", createdAt: new Date().toISOString() });
    await writeCategoryKnowledge(store);
    sendJson(res, 200, { ok: true, count: store.entries.length });
    return;
  }
  if (req.method === "POST" && url.pathname === "/api/categorization/lookup") {
    const body = await readJsonBody(req);
    const merchant = sanitizeMerchantQuery(body.merchant || body.description || "");
    const suggestion = await lookupMerchantCategory(merchant);
    sendJson(res, 200, { merchant, ...suggestion, webLookupEnabled: CATEGORIZATION_WEB_LOOKUP });
    return;
  }
  sendJson(res, 404, { error: "not_found", message: "Ukendt kategoriserings-endpoint." });
}

async function lookupMerchantCategory(merchant) {
  if (!merchant) return { categoryId: "", confidence: 0, reason: "Tom søgning." };
  const knowledge = await readCategoryKnowledge();
  const learned = (knowledge.entries || []).find((entry) => merchant.toLowerCase().includes(String(entry.keyword || "").toLowerCase()));
  if (learned) return { categoryId: learned.categoryId, confidence: 93, reason: learned.reason || "Lokal knowhow-bank." };
  const rule = SERVER_CATEGORY_RULES.find((item) => item.pattern.test(merchant));
  if (rule) return { categoryId: rule.categoryId, confidence: rule.confidence, reason: rule.reason };
  if (!CATEGORIZATION_WEB_LOOKUP) return { categoryId: "", confidence: 0, reason: "Ingen lokal match. Webopslag er slået fra af hensyn til privatliv." };
  return lookupMerchantCategoryOnWeb(merchant);
}

async function lookupMerchantCategoryOnWeb(merchant) {
  const query = encodeURIComponent(`${merchant} Danmark virksomhed restaurant butik kategori`);
  const response = await fetch(`https://api.duckduckgo.com/?q=${query}&format=json&no_html=1&skip_disambig=1`, { headers: { Accept: "application/json" } });
  const data = await response.json().catch(() => ({}));
  const text = `${data.Heading || ""} ${data.AbstractText || ""} ${(data.RelatedTopics || []).slice(0, 3).map((item) => item.Text || "").join(" ")}`;
  const rule = SERVER_CATEGORY_RULES.find((item) => item.pattern.test(text));
  return rule ? { categoryId: rule.categoryId, confidence: Math.min(rule.confidence, 76), reason: `Webopslag: ${rule.reason}` } : { categoryId: "", confidence: 0, reason: "Webopslag gav ingen sikker kategori." };
}

function sanitizeMerchantQuery(value) {
  return String(value || "")
    .replace(/\b\d{4,}\b/g, "")
    .replace(/\bC\d+\b/gi, "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 100);
}

async function readCategoryKnowledge() {
  try {
    return JSON.parse(await readFile(CATEGORY_KNOWLEDGE_FILE, "utf8"));
  } catch {
    return { entries: [] };
  }
}

async function writeCategoryKnowledge(store) {
  await mkdir(DATA_DIR, { recursive: true });
  await writeFile(CATEGORY_KNOWLEDGE_FILE, JSON.stringify(store, null, 2));
}

async function handleAuthApi(req, res, url) {
  if (req.method === "GET" && url.pathname === "/api/auth/session") {
    sendJson(res, 200, { authenticated: !authEnabled() || isAuthenticated(req), authEnabled: authEnabled() });
    return;
  }

  if (req.method === "POST" && url.pathname === "/api/auth/login") {
    const body = await readJsonBody(req);
    const password = String(body.password || "");
    if (!WEBAPP_SHARED_SECRET || safeEqual(password, WEBAPP_SHARED_SECRET)) {
      setAuthCookie(req, res);
      sendJson(res, 200, { ok: true });
      return;
    }
    sendJson(res, 401, { error: "bad_password", message: "Forkert adgangskode." });
    return;
  }

  if (req.method === "POST" && url.pathname === "/api/auth/logout") {
    clearAuthCookie(res);
    sendJson(res, 200, { ok: true });
    return;
  }

  sendJson(res, 404, { error: "not_found", message: "Ukendt auth-endpoint." });
}

async function handleApi(req, res, url) {
  if (url.pathname.startsWith("/api/auth/")) {
    await handleAuthApi(req, res, url);
    return;
  }

  if (req.method === "GET" && url.pathname === "/api/health") {
    sendJson(res, 200, { ok: true, service: "privatoekonomi", gocardlessConfigured: hasGcKeys(), enableBankingConfigured: hasEnableBankingConfig(), authEnabled: authEnabled(), dataBackend: DATA_BACKEND });
    return;
  }

  if (authEnabled() && !isAuthenticated(req)) {
    sendJson(res, 401, { error: "unauthorized", message: "Log ind for at bruge privatøkonomi-appen." });
    return;
  }

  if (req.method === "GET" && url.pathname === "/api/app-state") {
    sendJson(res, 200, await readAppState());
    return;
  }

  if (req.method === "POST" && url.pathname === "/api/app-state") {
    const body = await readJsonBody(req);
    await writeAppState(body);
    sendJson(res, 200, { ok: true, savedAt: body?.serverSavedAt || new Date().toISOString() });
    return;
  }

  if (req.method === "GET" && url.pathname === "/api/local-csv/files") {
    const files = await readLocalCsvFiles();
    sendJson(res, 200, { directory: LOCAL_IMPORT_DIR, files });
    return;
  }

  if (url.pathname.startsWith("/api/categorization/")) {
    await handleCategorizationApi(req, res, url);
    return;
  }

  if (req.method === "POST" && url.pathname === "/api/market-prices") {
    const body = await readJsonBody(req);
    const prices = await lookupMarketPrices(Array.isArray(body.holdings) ? body.holdings : []);
    sendJson(res, 200, prices);
    return;
  }

  if (url.pathname.startsWith("/api/enablebanking")) {
    await handleEnableBankingApi(req, res, url);
    return;
  }

  if (req.method === "GET" && url.pathname === "/api/gocardless/config") {
    const store = await readStore();
    sendJson(res, 200, {
      configured: hasGcKeys(),
      envFileExists: existsSync(path.join(__dirname, ".env")),
      hasSecretId: Boolean(process.env.GOCARDLESS_SECRET_ID),
      hasSecretKey: Boolean(process.env.GOCARDLESS_SECRET_KEY),
      institutionId: INSTITUTION_ID,
      country: COUNTRY,
      requisitions: store.requisitions || [],
    });
    return;
  }

  if (req.method === "GET" && url.pathname === "/api/gocardless/diagnostics") {
    const diagnostics = await diagnoseGoCardless();
    sendJson(res, 200, diagnostics);
    return;
  }

  if (req.method === "POST" && url.pathname === "/api/gocardless/setup") {
    const body = await readJsonBody(req);
    const secretId = String(body.secretId || "").trim();
    const secretKey = String(body.secretKey || "").trim();
    if (!secretId || !secretKey) {
      sendJson(res, 400, { error: "missing_keys", message: "Både Secret ID og Secret Key skal udfyldes." });
      return;
    }
    await updateEnvFile({
      GOCARDLESS_SECRET_ID: secretId,
      GOCARDLESS_SECRET_KEY: secretKey,
      GOCARDLESS_INSTITUTION_ID: String(body.institutionId || INSTITUTION_ID).trim() || INSTITUTION_ID,
      GOCARDLESS_COUNTRY: String(body.country || COUNTRY).trim() || COUNTRY,
    });
    process.env.GOCARDLESS_SECRET_ID = secretId;
    process.env.GOCARDLESS_SECRET_KEY = secretKey;
    process.env.GOCARDLESS_INSTITUTION_ID = String(body.institutionId || INSTITUTION_ID).trim() || INSTITUTION_ID;
    process.env.GOCARDLESS_COUNTRY = String(body.country || COUNTRY).trim() || COUNTRY;
    tokenCache = null;
    const diagnostics = await diagnoseGoCardless();
    sendJson(res, 200, diagnostics);
    return;
  }

  if (req.method === "POST" && url.pathname === "/api/gocardless/requisitions") {
    requireGcKeys();
    const body = await readJsonBody(req);
    const forwardedProto = req.headers["x-forwarded-proto"] || url.protocol.replace(":", "");
    const origin = req.headers.origin || `${forwardedProto}://${url.host}`;
    const redirect = body.redirect || `${origin}/?bank-sync=connected`;
    const requisition = await createRequisition(redirect);
    const store = await readStore();
    store.requisitions ||= [];
    store.requisitions = [
      {
        id: requisition.id,
        link: requisition.link,
        reference: requisition.reference,
        institutionId: INSTITUTION_ID,
        createdAt: new Date().toISOString(),
      },
      ...store.requisitions.filter((item) => item.id !== requisition.id),
    ].slice(0, 5);
    await writeStore(store);
    sendJson(res, 200, requisition);
    return;
  }

  const requisitionMatch = url.pathname.match(/^\/api\/gocardless\/requisitions\/([^/]+)$/);
  if (req.method === "GET" && requisitionMatch) {
    requireGcKeys();
    const requisition = await gcRequest(`/requisitions/${encodeURIComponent(requisitionMatch[1])}/`);
    sendJson(res, 200, requisition);
    return;
  }

  if (req.method === "GET" && url.pathname === "/api/gocardless/accounts") {
    requireGcKeys();
    const accounts = await getConnectedAccounts();
    sendJson(res, 200, { accounts });
    return;
  }

  if (req.method === "GET" && url.pathname === "/api/gocardless/sync") {
    requireGcKeys();
    const dateFrom = url.searchParams.get("date_from") || firstDayOfMonth();
    const dateTo = url.searchParams.get("date_to") || todayIso();
    const sync = await syncTransactions(dateFrom, dateTo);
    sendJson(res, 200, sync);
    return;
  }

  sendJson(res, 404, { error: "not_found", message: "Ukendt API-endpoint" });
}

async function diagnoseGoCardless() {
  const result = {
    envFileExists: existsSync(path.join(__dirname, ".env")),
    hasSecretId: Boolean(process.env.GOCARDLESS_SECRET_ID),
    hasSecretKey: Boolean(process.env.GOCARDLESS_SECRET_KEY),
    configured: hasGcKeys(),
    institutionId: INSTITUTION_ID,
    country: COUNTRY,
    token: { ok: false, message: "Ikke testet" },
    institution: { ok: false, message: "Ikke testet" },
  };

  if (!hasGcKeys()) {
    result.token.message = "Mangler GOCARDLESS_SECRET_ID eller GOCARDLESS_SECRET_KEY";
    result.institution.message = "Kan først testes når token virker";
    return result;
  }

  try {
    await getAccessToken();
    result.token = { ok: true, message: "Token OK" };
  } catch (error) {
    result.token = { ok: false, message: error.message };
    result.institution.message = "Kan først testes når token virker";
    return result;
  }

  try {
    const institution = await gcRequest(`/institutions/${encodeURIComponent(INSTITUTION_ID)}/`);
    result.institution = { ok: true, message: institution.name || INSTITUTION_ID, data: institution };
  } catch (error) {
    try {
      const institutions = await gcRequest(`/institutions/?country=${encodeURIComponent(COUNTRY)}`);
      const match = Array.isArray(institutions) ? institutions.find((item) => item.id === INSTITUTION_ID) : null;
      result.institution = match
        ? { ok: true, message: match.name || INSTITUTION_ID, data: match }
        : { ok: false, message: `${INSTITUTION_ID} blev ikke fundet i ${COUNTRY}-listen` };
    } catch (fallbackError) {
      result.institution = { ok: false, message: `${error.message}; fallback fejlede: ${fallbackError.message}` };
    }
  }

  return result;
}

async function handleEnableBankingApi(req, res, url) {
  if (req.method === "GET" && url.pathname === "/api/enablebanking/config") {
    const store = await readEbStore();
    sendJson(res, 200, enableBankingConfig(store));
    return;
  }

  if (req.method === "GET" && url.pathname === "/api/enablebanking/diagnostics") {
    sendJson(res, 200, await diagnoseEnableBanking());
    return;
  }

  if (req.method === "POST" && url.pathname === "/api/enablebanking/generate-keys") {
    const generated = await generateEnableBankingKeys();
    sendJson(res, 200, generated);
    return;
  }

  if (req.method === "POST" && url.pathname === "/api/enablebanking/setup") {
    const body = await readJsonBody(req);
    const appId = String(body.appId || "").trim();
    if (!appId) {
      sendJson(res, 400, { error: "missing_app_id", message: "Enable Banking Application ID mangler." });
      return;
    }
    await updateEnvFile({
      ENABLEBANKING_APP_ID: appId,
      ENABLEBANKING_ASPSP_NAME: String(body.aspspName || ebAspspName()).trim() || ebAspspName(),
      ENABLEBANKING_COUNTRY: String(body.country || ebCountry()).trim() || ebCountry(),
      ENABLEBANKING_LANGUAGE: String(body.language || ebLanguage()).trim() || ebLanguage(),
      ENABLEBANKING_PSU_TYPE: String(body.psuType || ebPsuType()).trim() || ebPsuType(),
    });
    process.env.ENABLEBANKING_APP_ID = appId;
    process.env.ENABLEBANKING_ASPSP_NAME = String(body.aspspName || ebAspspName()).trim() || ebAspspName();
    process.env.ENABLEBANKING_COUNTRY = String(body.country || ebCountry()).trim() || ebCountry();
    process.env.ENABLEBANKING_LANGUAGE = String(body.language || ebLanguage()).trim() || ebLanguage();
    process.env.ENABLEBANKING_PSU_TYPE = String(body.psuType || ebPsuType()).trim() || ebPsuType();
    sendJson(res, 200, await diagnoseEnableBanking());
    return;
  }

  if (req.method === "GET" && url.pathname === "/api/enablebanking/aspsps") {
    requireEnableBankingConfig();
    const country = url.searchParams.get("country") || ebCountry();
    const query = new URLSearchParams({ country, psu_type: "personal", service: "AIS" });
    const data = await ebRequest(`/aspsps?${query.toString()}`);
    sendJson(res, 200, data);
    return;
  }

  if (req.method === "POST" && url.pathname === "/api/enablebanking/auth") {
    requireEnableBankingConfig();
    const body = await readJsonBody(req);
    const origin = req.headers.origin || `${req.headers["x-forwarded-proto"] || "http"}://${url.host}`;
    const redirectUrl = body.redirectUrl || ebRedirectUrl() || `${origin}/?enablebanking=connected`;
    const auth = await startEnableBankingAuth(redirectUrl, body);
    const store = await readEbStore();
    store.authorizations ||= [];
    store.authorizations.unshift({
      authorizationId: auth.authorization_id,
      state: auth.state,
      psuIdHash: auth.psu_id_hash,
      url: auth.url,
      redirectUrl,
      createdAt: new Date().toISOString(),
    });
    store.authorizations = store.authorizations.slice(0, 10);
    await writeEbStore(store);
    sendJson(res, 200, auth);
    return;
  }

  if (req.method === "POST" && url.pathname === "/api/enablebanking/session") {
    requireEnableBankingConfig();
    const body = await readJsonBody(req);
    const code = String(body.code || "").trim();
    if (!code) {
      sendJson(res, 400, { error: "missing_code", message: "Callback-koden fra Enable Banking mangler." });
      return;
    }
    const data = await ebRequest("/sessions", { method: "POST", body: { code } });
    const store = await readEbStore();
    store.sessionId = data.session_id;
    store.accounts = Array.isArray(data.accounts) ? data.accounts.map(normalizeEbAccount) : [];
    store.sessionRaw = data;
    store.authorizedAt = new Date().toISOString();
    await writeEbStore(store);
    sendJson(res, 200, { sessionId: store.sessionId, accounts: store.accounts, authorizedAt: store.authorizedAt });
    return;
  }

  if (req.method === "GET" && url.pathname === "/api/enablebanking/accounts") {
    requireEnableBankingConfig();
    const accounts = await getEnableBankingAccounts();
    sendJson(res, 200, { accounts });
    return;
  }

  if (req.method === "GET" && url.pathname === "/api/enablebanking/sync") {
    requireEnableBankingConfig();
    const dateFrom = url.searchParams.get("date_from") || firstDayOfCurrentMonth();
    const dateTo = url.searchParams.get("date_to") || todayIso();
    const accountIds = url.searchParams.getAll("account_id").filter(Boolean);
    const result = await syncEnableBankingTransactions(dateFrom, dateTo, accountIds);
    sendJson(res, 200, result);
    return;
  }

  sendJson(res, 404, { error: "not_found", message: "Ukendt Enable Banking-endpoint." });
}

function ebAppId() {
  return process.env.ENABLEBANKING_APP_ID || EB_APP_ID;
}

function ebAspspName() {
  return process.env.ENABLEBANKING_ASPSP_NAME || EB_ASPSP_NAME;
}

function ebCountry() {
  return process.env.ENABLEBANKING_COUNTRY || EB_COUNTRY;
}

function ebLanguage() {
  return process.env.ENABLEBANKING_LANGUAGE || EB_LANGUAGE;
}

function ebPsuType() {
  return process.env.ENABLEBANKING_PSU_TYPE || EB_PSU_TYPE;
}

function ebRedirectUrl() {
  return process.env.ENABLEBANKING_REDIRECT_URL || EB_REDIRECT_URL || "";
}

function enableBankingConfig(store = {}) {
  return {
    configured: hasEnableBankingConfig(),
    appIdConfigured: Boolean(ebAppId()),
    privateKeyExists: hasEnableBankingPrivateKey(),
    certificateExists: existsSync(EB_CERT_FILE),
    appId: ebAppId() ? `${ebAppId().slice(0, 6)}…` : "",
    aspspName: ebAspspName(),
    country: ebCountry(),
    language: ebLanguage(),
    psuType: ebPsuType(),
    redirectUrl: ebRedirectUrl(),
    hasSession: Boolean(store.sessionId),
    sessionId: store.sessionId || "",
    authorizedAt: store.authorizedAt || "",
    accounts: store.accounts || [],
    keyPath: EB_PRIVATE_KEY_FILE,
    certificatePath: EB_CERT_FILE,
  };
}

async function diagnoseEnableBanking() {
  const store = await readEbStore();
  const result = {
    ...enableBankingConfig(store),
    envFileExists: existsSync(path.join(__dirname, ".env")),
    jwt: { ok: false, message: "Ikke testet" },
    api: { ok: false, message: "Ikke testet" },
  };

  if (!hasEnableBankingPrivateKey()) result.jwt.message = "Privat nøgle mangler — klik ‘Generér nøgle + certifikat’ lokalt eller sæt ENABLEBANKING_PRIVATE_KEY_PEM i webapp-miljøet.";
  else if (!ebAppId()) result.jwt.message = "Application ID mangler — opret app hos Enable Banking og indsæt ID'et.";
  else {
    try {
      createEnableBankingJwt();
      result.jwt = { ok: true, message: "JWT kan signeres lokalt" };
    } catch (error) {
      result.jwt = { ok: false, message: error.message };
    }
  }

  if (result.jwt.ok) {
    try {
      const data = await ebRequest(`/aspsps?country=${encodeURIComponent(ebCountry())}&psu_type=personal&service=AIS`);
      const list = Array.isArray(data) ? data : data.aspsps || data.items || [];
      const match = list.find((item) => JSON.stringify(item).toLowerCase().includes("sparekassen") || JSON.stringify(item).toLowerCase().includes("kronjylland"));
      result.api = { ok: true, message: match ? `API OK — mulig bank fundet: ${match.name || match.id || "Sparekassen"}` : "API OK — ASPSP-liste hentet", sampleAspsp: match || null };
    } catch (error) {
      result.api = { ok: false, message: error.message };
    }
  } else {
    result.api.message = "Kan først testes når JWT virker";
  }

  return result;
}

async function generateEnableBankingKeys() {
  await mkdir(DATA_DIR, { recursive: true });
  if (!existsSync(EB_PRIVATE_KEY_FILE)) {
    execFileSync("openssl", ["genrsa", "-out", EB_PRIVATE_KEY_FILE, "4096"], { stdio: "pipe" });
  }
  await chmod(EB_PRIVATE_KEY_FILE, 0o600).catch(() => {});
  execFileSync("openssl", [
    "req",
    "-new",
    "-x509",
    "-key",
    EB_PRIVATE_KEY_FILE,
    "-out",
    EB_CERT_FILE,
    "-days",
    "3650",
    "-subj",
    "/C=DK/O=Claes' Privatøkonomi/CN=Claes' privatøkonomi",
  ], { stdio: "pipe" });
  await chmod(EB_CERT_FILE, 0o644).catch(() => {});
  return {
    privateKeyPath: EB_PRIVATE_KEY_FILE,
    certificatePath: EB_CERT_FILE,
    certificatePem: await readFile(EB_CERT_FILE, "utf8"),
    message: "Nøgle og self-signed certifikat er klar. Upload certifikatet i Enable Banking, men del aldrig den private nøgle.",
  };
}

async function startEnableBankingAuth(redirectUrl, body = {}) {
  const validDays = Math.max(1, Math.min(180, Number(body.validDays || 90)));
  const state = body.state || `claes-privatoekonomi-eb-${Date.now()}-${crypto.randomBytes(4).toString("hex")}`;
  const aspsp = {
    name: String(body.aspspName || ebAspspName()).trim() || ebAspspName(),
    country: String(body.country || ebCountry()).trim() || ebCountry(),
  };
  const payload = {
    access: { valid_until: new Date(Date.now() + validDays * 24 * 60 * 60 * 1000).toISOString() },
    aspsp,
    state,
    redirect_url: redirectUrl,
    psu_type: String(body.psuType || ebPsuType()).trim() || ebPsuType(),
    language: String(body.language || ebLanguage()).trim() || ebLanguage(),
  };
  if (body.authMethod) payload.auth_method = body.authMethod;
  if (body.psuId) payload.psu_id = body.psuId;
  if (body.credentials && typeof body.credentials === "object") payload.credentials = body.credentials;
  if (body.credentialsAutosubmit !== undefined) payload.credentials_autosubmit = Boolean(body.credentialsAutosubmit);
  const response = await ebRequest("/auth", { method: "POST", body: payload });
  return { ...response, state, request: payload };
}

async function getEnableBankingAccounts() {
  const store = await readEbStore();
  if (!store.sessionId) return [];
  const baseAccounts = store.accounts || [];
  const snapshots = [];
  for (const account of baseAccounts) {
    const [balancesResponse, detailsResponse] = await Promise.allSettled([
      ebRequest(`/accounts/${encodeURIComponent(account.id)}/balances`),
      ebRequest(`/accounts/${encodeURIComponent(account.id)}/details`),
    ]);
    const detailsRaw = detailsResponse.status === "fulfilled" ? detailsResponse.value : account.raw || {};
    const detailed = detailsResponse.status === "fulfilled" ? normalizeEbAccount(detailsRaw) : account;
    snapshots.push({
      ...account,
      ...detailed,
      balances: balancesResponse.status === "fulfilled" ? balancesResponse.value.balances || balancesResponse.value : [],
      details: detailsRaw,
      balanceError: balancesResponse.status === "rejected" ? balancesResponse.reason.message : "",
      detailsError: detailsResponse.status === "rejected" ? detailsResponse.reason.message : "",
    });
  }
  return snapshots;
}

async function syncEnableBankingTransactions(dateFrom, dateTo, accountIds = []) {
  const accounts = await getEnableBankingAccounts();
  const selected = accountIds.length ? accounts.filter((account) => accountIds.includes(account.id)) : accounts;
  const transactions = [];
  const errors = [];

  for (const account of selected) {
    try {
      let continuationKey = "";
      do {
        const query = new URLSearchParams({ date_from: dateFrom, date_to: dateTo });
        if (continuationKey) query.set("continuation_key", continuationKey);
        const response = await ebRequest(`/accounts/${encodeURIComponent(account.id)}/transactions?${query.toString()}`);
        const txs = Array.isArray(response.transactions) ? response.transactions : [];
        for (const tx of txs) transactions.push(normalizeEbTransaction(tx, account));
        continuationKey = response.continuation_key || response.continuationKey || response.next_continuation_key || "";
      } while (continuationKey);
    } catch (error) {
      errors.push({ accountId: account.id, accountName: account.name, message: error.message });
    }
  }

  return { dateFrom, dateTo, accounts: selected, transactions, errors, syncedAt: new Date().toISOString() };
}

function normalizeEbAccount(account) {
  const id = account.uid || account.resource_id || account.id || stableHash(JSON.stringify(account.account_id || account.all_account_ids || account));
  const identifiers = [];
  if (account.account_id?.iban) identifiers.push(account.account_id.iban);
  if (Array.isArray(account.all_account_ids)) {
    for (const item of account.all_account_ids) identifiers.push(item.identification || item.iban || item.bban || item.masked_pan || item.scheme_name);
  }
  const iban = account.account_id?.iban || identifiers.find((value) => String(value).startsWith("DK")) || "";
  const product = account.product || account.details || "";
  const owner = account.name || "";
  const displayBase = product || owner || identifiers.filter(Boolean)[0] || `Enable Banking konto ${String(id).slice(0, 6)}`;
  const displayName = iban ? `${displayBase} · ${maskIban(iban)}` : displayBase;
  return {
    id,
    name: displayName,
    ownerName: owner,
    iban,
    currency: account.currency || "DKK",
    details: product,
    raw: account,
  };
}

function normalizeEbTransaction(tx, account) {
  const rawAmount = Number(tx.transaction_amount?.amount || tx.amount?.amount || tx.amount || 0);
  const indicator = String(tx.credit_debit_indicator || "").toUpperCase();
  const amount = indicator === "DBIT" ? -Math.abs(rawAmount) : indicator === "CRDT" ? Math.abs(rawAmount) : rawAmount;
  const currency = tx.transaction_amount?.currency || tx.amount?.currency || account.currency || "DKK";
  const date = tx.booking_date || tx.value_date || tx.bookingDate || tx.valueDate || todayIso();
  const primaryDescription = [
    tx.remittance_information,
    tx.remittance_information?.unstructured,
    tx.remittance_information_unstructured,
    tx.note,
    tx.reference_number,
  ]
    .flat()
    .filter(Boolean)
    .map((value) => String(value).trim())
    .filter(Boolean);
  const fallbackDescription = [
    tx.creditor?.name,
    tx.debtor?.name,
    tx.creditor_name,
    tx.debtor_name,
    tx.proprietary_bank_transaction_code,
    tx.bank_transaction_code,
    tx.entry_reference,
    tx.additional_information,
  ]
    .flat()
    .filter(Boolean)
    .map((value) => String(value).trim())
    .filter(Boolean);
  const description = (primaryDescription.length ? primaryDescription : fallbackDescription).join(" · ") || "Enable Banking postering";
  const externalId = tx.entry_reference || tx.transaction_id || tx.internal_transaction_id || stableHash(`${account.id}|${date}|${amount}|${description}`);
  const openBanking = extractOpenBankingMeta(tx, amount);
  return {
    id: `eb_${stableHash(`${account.id}|${externalId}`)}`,
    date,
    description,
    amount,
    currency,
    accountId: account.localAccountId || account.id,
    sourceAccountName: account.name,
    categoryId: "uncategorized",
    note: "",
    relationType: inferServerRelationType(description, amount),
    relationKey: openBanking.counterpartyName || "",
    linkedTransactionId: "",
    matchGroup: "",
    excluded: false,
    source: "enablebanking",
    status: tx.status || indicator || "booked",
    sourceStatus: tx.status || indicator || "booked",
    externalId,
    externalAccountId: account.id,
    accountName: account.name,
    merchantCategoryCode: openBanking.merchantCategoryCode,
    bankTransactionCode: openBanking.bankTransactionCode,
    counterpartyName: openBanking.counterpartyName,
    counterpartyAccount: openBanking.counterpartyAccount,
    openBanking,
    raw: tx,
  };
}

function extractOpenBankingMeta(tx, amount) {
  const creditorName = tx.creditor?.name || tx.creditor_name || "";
  const debtorName = tx.debtor?.name || tx.debtor_name || "";
  const creditorAccount = tx.creditor_account?.iban || tx.creditor_account?.other?.identification || "";
  const debtorAccount = tx.debtor_account?.iban || tx.debtor_account?.other?.identification || "";
  const remittance = [tx.remittance_information, tx.remittance_information?.unstructured, tx.remittance_information_unstructured]
    .flat()
    .filter(Boolean)
    .map((value) => String(value).trim())
    .filter(Boolean);
  const isOutgoing = Number(amount || 0) < 0;
  return {
    merchantCategoryCode: tx.merchant_category_code || tx.mcc || "",
    bankTransactionCode: tx.bank_transaction_code || "",
    proprietaryBankTransactionCode: tx.proprietary_bank_transaction_code || "",
    purposeCode: tx.purpose_code || tx.purpose || "",
    entryReference: tx.entry_reference || "",
    referenceNumber: tx.reference_number || "",
    referenceNumberSchema: tx.reference_number_schema || "",
    remittanceText: remittance.join(" · "),
    creditorName,
    debtorName,
    creditorAccount,
    debtorAccount,
    counterpartyName: isOutgoing ? creditorName : debtorName,
    counterpartyAccount: isOutgoing ? creditorAccount : debtorAccount,
  };
}

function maskIban(iban) {
  const text = String(iban || "");
  return text.length > 8 ? `${text.slice(0, 4)}…${text.slice(-4)}` : text;
}

function inferServerRelationType(description, amount = 0) {
  const text = String(description || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  if (/(saxo|nordnet|depot|invester|investering|aktie|aktier|etf|fond|pension)/.test(text)) return "investering";
  if (/(opsparing|sparekonto|nedsparing)/.test(text)) return "opsparing";
  if (/(overforsel|overførsel|kontooverforsel|kontooverførsel|egen konto|mellem konti|fra konto|til konto|straksoverforsel|straksoverførsel)/.test(text)) return "intern";
  if (/(mobilepay|refusion|refunder|tilbagebetalt|tilbagebetaling|lagt ud|udlæg|udlaeg|skylder)/.test(text)) return "udlæg";
  return "";
}

async function ebRequest(endpoint, options = {}) {
  const response = await fetch(`${EB_BASE_URL}${endpoint}`, {
    method: options.method || "GET",
    headers: {
      Accept: "application/json",
      ...(options.body ? { "Content-Type": "application/json" } : {}),
      Authorization: `Bearer ${createEnableBankingJwt()}`,
      ...(options.headers || {}),
    },
    body: options.body ? JSON.stringify(options.body) : undefined,
  });
  const text = await response.text();
  let data = null;
  try {
    data = text ? JSON.parse(text) : null;
  } catch {
    data = null;
  }
  if (!response.ok) {
    const detail = data?.message || data?.detail || data?.error_description || data?.error || text || response.statusText;
    throw new Error(`Enable Banking ${response.status}: ${detail}`);
  }
  return data;
}

function createEnableBankingJwt() {
  const appId = ebAppId();
  if (!appId) throw new Error("ENABLEBANKING_APP_ID mangler i .env.");
  if (!hasEnableBankingPrivateKey()) throw new Error(`Privat nøgle mangler: ${EB_PRIVATE_KEY_FILE} eller ENABLEBANKING_PRIVATE_KEY_PEM`);
  const privateKey = EB_PRIVATE_KEY_PEM || readFileSync(EB_PRIVATE_KEY_FILE, "utf8");
  const now = Math.floor(Date.now() / 1000);
  const header = { alg: "RS256", typ: "JWT", kid: appId };
  const payload = { iss: "enablebanking.com", aud: "api.enablebanking.com", iat: now, exp: now + 3600 };
  const signingInput = `${base64UrlJson(header)}.${base64UrlJson(payload)}`;
  const signature = crypto.sign("RSA-SHA256", Buffer.from(signingInput), privateKey).toString("base64url");
  return `${signingInput}.${signature}`;
}

function base64UrlJson(value) {
  return Buffer.from(JSON.stringify(value)).toString("base64url");
}

function hasEnableBankingPrivateKey() {
  return Boolean(EB_PRIVATE_KEY_PEM) || existsSync(EB_PRIVATE_KEY_FILE);
}

function hasEnableBankingConfig() {
  return Boolean(ebAppId()) && hasEnableBankingPrivateKey();
}

function requireEnableBankingConfig() {
  if (!hasEnableBankingConfig()) {
    throw new Error("Enable Banking mangler opsætning: generér nøgle/certifikat, upload certifikatet hos Enable Banking og indsæt Application ID i .env.");
  }
}

async function readAppState() {
  if (DATA_BACKEND === "supabase") return readSupabaseAppState();
  try {
    return JSON.parse(await readFile(APP_STATE_FILE, "utf8"));
  } catch {
    return { ok: false, state: null, savedAt: "" };
  }
}

async function writeAppState(body) {
  if (DATA_BACKEND === "supabase") return writeSupabaseAppState(body);
  await mkdir(DATA_DIR, { recursive: true });
  const state = body?.state || body;
  const savedAt = new Date().toISOString();
  if (state?.settings) state.settings.serverSavedAt = savedAt;
  await writeFile(APP_STATE_FILE, JSON.stringify({ ok: true, savedAt, state }, null, 2));
}

function requireSupabaseConfig() {
  if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) throw new Error("DATA_BACKEND=supabase kræver SUPABASE_URL og SUPABASE_SERVICE_ROLE_KEY.");
}

async function readSupabaseAppState() {
  requireSupabaseConfig();
  const response = await fetch(`${SUPABASE_URL}/rest/v1/app_state?id=eq.${encodeURIComponent(SUPABASE_APP_STATE_ID)}&select=id,state,updated_at`, {
    headers: supabaseHeaders(),
  });
  const text = await response.text();
  const data = text ? JSON.parse(text) : [];
  if (!response.ok) throw new Error(`Supabase ${response.status}: ${text}`);
  const row = Array.isArray(data) ? data[0] : null;
  return row ? { ok: true, state: row.state, savedAt: row.updated_at } : { ok: false, state: null, savedAt: "" };
}

async function writeSupabaseAppState(body) {
  requireSupabaseConfig();
  const state = body?.state || body;
  const savedAt = new Date().toISOString();
  if (state?.settings) state.settings.serverSavedAt = savedAt;
  const response = await fetch(`${SUPABASE_URL}/rest/v1/app_state`, {
    method: "POST",
    headers: { ...supabaseHeaders(), Prefer: "resolution=merge-duplicates,return=minimal" },
    body: JSON.stringify({ id: SUPABASE_APP_STATE_ID, state, updated_at: savedAt }),
  });
  const text = await response.text();
  if (!response.ok) throw new Error(`Supabase ${response.status}: ${text}`);
}

function supabaseHeaders() {
  return {
    apikey: SUPABASE_SERVICE_ROLE_KEY,
    Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
    "Content-Type": "application/json",
    Accept: "application/json",
  };
}

async function readEbStore() {
  try {
    return JSON.parse(await readFile(EB_STORE_FILE, "utf8"));
  } catch {
    return { authorizations: [], accounts: [] };
  }
}

async function writeEbStore(store) {
  await mkdir(DATA_DIR, { recursive: true });
  await writeFile(EB_STORE_FILE, JSON.stringify(store, null, 2));
}

async function readLocalCsvFiles() {
  const entries = await readdir(LOCAL_IMPORT_DIR, { withFileTypes: true }).catch(() => []);
  const csvEntries = entries
    .filter((entry) => entry.isFile() && entry.name.toLowerCase().endsWith(".csv"))
    .sort((a, b) => a.name.localeCompare(b.name, "da"));
  const files = [];
  for (const entry of csvEntries) {
    const filePath = path.join(LOCAL_IMPORT_DIR, entry.name);
    const content = await readFile(filePath, "utf8");
    files.push({ fileName: entry.name, content });
  }
  return files;
}

async function createRequisition(redirect) {
  const reference = `claes-privatoekonomi-${Date.now()}-${crypto.randomBytes(4).toString("hex")}`;
  let agreementId = null;

  try {
    const agreement = await gcRequest("/agreements/enduser/", {
      method: "POST",
      body: {
        institution_id: INSTITUTION_ID,
        max_historical_days: MAX_HISTORICAL_DAYS,
        access_valid_for_days: ACCESS_VALID_FOR_DAYS,
        access_scope: ["balances", "details", "transactions"],
      },
    });
    agreementId = agreement.id;
  } catch (error) {
    console.warn("Kunne ikke oprette custom agreement; fortsætter med standard consent:", error.message);
  }

  const payload = {
    redirect,
    institution_id: INSTITUTION_ID,
    reference,
    user_language: "DA",
  };
  if (agreementId) payload.agreement = agreementId;

  return gcRequest("/requisitions/", { method: "POST", body: payload });
}

async function getConnectedAccounts() {
  const store = await readStore();
  const requisitions = store.requisitions || [];
  const accounts = [];
  for (const req of requisitions) {
    const requisition = await gcRequest(`/requisitions/${encodeURIComponent(req.id)}/`);
    for (const accountId of requisition.accounts || []) {
      accounts.push(await getAccountSnapshot(accountId, req.id));
    }
  }
  return accounts;
}

async function getAccountSnapshot(accountId, requisitionId) {
  const [detailsResponse, balancesResponse] = await Promise.allSettled([
    gcRequest(`/accounts/${encodeURIComponent(accountId)}/details/`),
    gcRequest(`/accounts/${encodeURIComponent(accountId)}/balances/`),
  ]);
  const details = detailsResponse.status === "fulfilled" ? detailsResponse.value.account || detailsResponse.value : {};
  const balances = balancesResponse.status === "fulfilled" ? balancesResponse.value.balances || [] : [];
  return {
    id: accountId,
    requisitionId,
    name: accountDisplayName(details, accountId),
    iban: details.iban || "",
    currency: details.currency || balances[0]?.balanceAmount?.currency || "DKK",
    details,
    balances,
  };
}

async function syncTransactions(dateFrom, dateTo) {
  const accounts = await getConnectedAccounts();
  const transactions = [];
  const errors = [];

  for (const account of accounts) {
    try {
      const endpoint = `/accounts/${encodeURIComponent(account.id)}/transactions/?date_from=${encodeURIComponent(dateFrom)}&date_to=${encodeURIComponent(dateTo)}`;
      const response = await gcRequest(endpoint);
      const booked = response.transactions?.booked || [];
      const pending = response.transactions?.pending || [];
      for (const tx of booked) transactions.push(normalizeGcTransaction(tx, account, "booked"));
      for (const tx of pending) transactions.push(normalizeGcTransaction(tx, account, "pending"));
    } catch (error) {
      errors.push({ accountId: account.id, accountName: account.name, message: error.message });
    }
  }

  return {
    dateFrom,
    dateTo,
    accounts,
    transactions,
    errors,
    syncedAt: new Date().toISOString(),
  };
}

function normalizeGcTransaction(tx, account, status) {
  const amount = Number(tx.transactionAmount?.amount || 0);
  const date = tx.bookingDate || tx.valueDate || todayIso();
  const description = [
    tx.remittanceInformationUnstructured,
    tx.creditorName,
    tx.debtorName,
    tx.additionalInformation,
    tx.bankTransactionCode,
    tx.proprietaryBankTransactionCode,
  ]
    .filter(Boolean)
    .map((value) => String(value).trim())
    .filter(Boolean)
    .join(" · ") || "GoCardless postering";
  const externalId = tx.transactionId || tx.internalTransactionId || stableHash(`${account.id}|${date}|${amount}|${description}`);
  return {
    id: `gc_${stableHash(`${account.id}|${externalId}`)}`,
    externalId,
    externalAccountId: account.id,
    accountName: account.name,
    date,
    description,
    amount,
    currency: tx.transactionAmount?.currency || account.currency || "DKK",
    status,
    source: "gocardless",
    raw: tx,
  };
}

async function gcRequest(endpoint, options = {}) {
  const token = await getAccessToken();
  const response = await fetch(`${GC_BASE_URL}${endpoint}`, {
    method: options.method || "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: options.body ? JSON.stringify(options.body) : undefined,
  });

  const text = await response.text();
  const data = text ? JSON.parse(text) : null;
  if (!response.ok) {
    const detail = data?.detail || data?.summary || data?.error || text || response.statusText;
    throw new Error(`GoCardless ${response.status}: ${detail}`);
  }
  return data;
}

async function getAccessToken() {
  requireGcKeys();
  if (tokenCache?.access && tokenCache.expiresAt > Date.now() + 60_000) return tokenCache.access;

  const response = await fetch(`${GC_BASE_URL}/token/new/`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      secret_id: process.env.GOCARDLESS_SECRET_ID,
      secret_key: process.env.GOCARDLESS_SECRET_KEY,
    }),
  });
  const text = await response.text();
  const data = text ? JSON.parse(text) : null;
  if (!response.ok) throw new Error(`GoCardless token ${response.status}: ${data?.detail || text}`);
  tokenCache = {
    access: data.access,
    refresh: data.refresh,
    expiresAt: Date.now() + Math.max(60, Number(data.access_expires || 3600) - 30) * 1000,
  };
  return tokenCache.access;
}

async function serveStatic(req, res, url) {
  if (req.method !== "GET" && req.method !== "HEAD") {
    res.writeHead(405);
    res.end("Method not allowed");
    return;
  }
  let pathname = decodeURIComponent(url.pathname);
  if (pathname === "/") pathname = "/index.html";
  if (authEnabled() && !PUBLIC_PATHS.has(pathname) && !isAuthenticated(req)) {
    res.writeHead(302, { ...SECURITY_HEADERS, Location: `/login.html?next=${encodeURIComponent(url.pathname + url.search)}` });
    res.end();
    return;
  }
  const filePath = path.normalize(path.join(__dirname, pathname));
  if (!filePath.startsWith(__dirname)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }
  const finalPath = existsSync(filePath) ? filePath : path.join(__dirname, "index.html");
  const content = await readFile(finalPath);
  res.writeHead(200, {
    ...SECURITY_HEADERS,
    "Content-Type": mimeType(finalPath),
    "Cache-Control": "no-store",
  });
  if (req.method !== "HEAD") res.end(content);
  else res.end();
}

function loadEnvFile(filePath) {
  if (!existsSync(filePath)) return;
  const text = readFileSync(filePath, "utf8");
  for (const line of text.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const index = trimmed.indexOf("=");
    if (index === -1) continue;
    const key = trimmed.slice(0, index).trim();
    let value = trimmed.slice(index + 1).trim();
    value = value.replace(/^['\"]|['\"]$/g, "");
    if (!(key in process.env)) process.env[key] = value;
  }
}

async function readJsonBody(req) {
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  const text = Buffer.concat(chunks).toString("utf8");
  return text ? JSON.parse(text) : {};
}

function authEnabled() {
  return Boolean(WEBAPP_SHARED_SECRET);
}

function parseCookies(req) {
  return Object.fromEntries(String(req.headers.cookie || "").split(";").map((part) => {
    const index = part.indexOf("=");
    if (index === -1) return ["", ""];
    return [part.slice(0, index).trim(), decodeURIComponent(part.slice(index + 1).trim())];
  }).filter(([key]) => key));
}

function safeEqual(left, right) {
  const a = Buffer.from(String(left));
  const b = Buffer.from(String(right));
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}

function signSession(payload) {
  const body = Buffer.from(JSON.stringify(payload)).toString("base64url");
  const signature = crypto.createHmac("sha256", WEBAPP_SHARED_SECRET || "local-dev").update(body).digest("base64url");
  return `${body}.${signature}`;
}

function verifySession(token) {
  if (!authEnabled()) return true;
  const [body, signature] = String(token || "").split(".");
  if (!body || !signature) return false;
  const expected = crypto.createHmac("sha256", WEBAPP_SHARED_SECRET).update(body).digest("base64url");
  if (!safeEqual(signature, expected)) return false;
  try {
    const payload = JSON.parse(Buffer.from(body, "base64url").toString("utf8"));
    return Number(payload.exp || 0) > Math.floor(Date.now() / 1000);
  } catch {
    return false;
  }
}

function isAuthenticated(req) {
  if (!authEnabled()) return true;
  return verifySession(parseCookies(req)[COOKIE_NAME]);
}

function cookieFlags(req) {
  const secure = req.socket.encrypted || process.env.NODE_ENV === "production";
  return `HttpOnly; SameSite=Lax; Path=/; Max-Age=${COOKIE_MAX_AGE_SECONDS}${secure ? "; Secure" : ""}`;
}

function setAuthCookie(req, res) {
  const now = Math.floor(Date.now() / 1000);
  const token = signSession({ iat: now, exp: now + COOKIE_MAX_AGE_SECONDS });
  res.setHeader("Set-Cookie", `${COOKIE_NAME}=${encodeURIComponent(token)}; ${cookieFlags(req)}`);
}

function clearAuthCookie(res) {
  res.setHeader("Set-Cookie", `${COOKIE_NAME}=; HttpOnly; SameSite=Lax; Path=/; Max-Age=0`);
}

async function readStore() {
  try {
    return JSON.parse(await readFile(STORE_FILE, "utf8"));
  } catch {
    return { requisitions: [] };
  }
}

async function writeStore(store) {
  await mkdir(DATA_DIR, { recursive: true });
  await writeFile(STORE_FILE, JSON.stringify(store, null, 2));
}

async function updateEnvFile(updates) {
  const envPath = path.join(__dirname, ".env");
  const existing = existsSync(envPath) ? readFileSync(envPath, "utf8").split(/\r?\n/) : [];
  const keys = new Set(Object.keys(updates));
  const seen = new Set();
  const lines = existing.map((line) => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#") || !line.includes("=")) return line;
    const key = line.split("=", 1)[0].trim();
    if (!keys.has(key)) return line;
    seen.add(key);
    return `${key}=${updates[key]}`;
  });
  for (const [key, value] of Object.entries(updates)) {
    if (!seen.has(key)) lines.push(`${key}=${value}`);
  }
  await writeFile(envPath, `${lines.join("\n").replace(/\n+$/g, "")}\n`);
}

function hasGcKeys() {
  return Boolean(process.env.GOCARDLESS_SECRET_ID && process.env.GOCARDLESS_SECRET_KEY);
}

function requireGcKeys() {
  if (!hasGcKeys()) {
    throw new Error("GoCardless API keys mangler. Kopiér .env.example til .env og udfyld GOCARDLESS_SECRET_ID og GOCARDLESS_SECRET_KEY.");
  }
}

function accountDisplayName(details, fallback) {
  return details.name || details.displayName || details.ownerName || details.iban || `GoCardless konto ${fallback.slice(0, 6)}`;
}

function sendJson(res, status, body) {
  res.writeHead(status, { ...SECURITY_HEADERS, "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" });
  res.end(JSON.stringify(body));
}

function stableHash(value) {
  return crypto.createHash("sha1").update(String(value)).digest("hex").slice(0, 16);
}

function todayIso() {
  return new Date().toISOString().slice(0, 10);
}

function firstDayOfMonth() {
  return `${todayIso().slice(0, 7)}-01`;
}

function mimeType(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  return {
    ".html": "text/html; charset=utf-8",
    ".js": "text/javascript; charset=utf-8",
    ".css": "text/css; charset=utf-8",
    ".json": "application/json; charset=utf-8",
    ".webmanifest": "application/manifest+json; charset=utf-8",
    ".svg": "image/svg+xml; charset=utf-8",
    ".csv": "text/csv; charset=utf-8",
  }[ext] || "application/octet-stream";
}
