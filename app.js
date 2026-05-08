const STORAGE_KEY = "finansblik:v1";
const BRAND_NAME = "Claes' privatøkonomi";
const BRAND_TAGLINE = "Overblik og indsigt i privatøkonomien";

const NAV_ITEMS = [
  { id: "overblik", label: "Overblik", hint: "" },
  { id: "formue", label: "Formue", hint: "" },
  { id: "ny-lejlighed", label: "Ny lejlighed", hint: "" },
  { id: "rapporter", label: "Analyser", hint: "" },
  { id: "oprydning", label: "Ryd op", hint: "" },
  { id: "transaktioner", label: "Posteringer", hint: "" },
  { id: "bank-sync", label: "Bankdata", hint: "" },
  { id: "indstillinger", label: "Backup", hint: "" },
];

const DEFAULT_WEALTH_PROPERTIES = [
  { id: "apartment", name: "Lejlighed", subtitle: "Bolig", estimatedValue: 0, debt: 0 },
  { id: "summerhouse", name: "Sommerhus", subtitle: "", estimatedValue: 0, debt: 0 },
];

const DEFAULT_WEALTH_PENSION = { provider: "PFA", value: 0 };

const MOVING_CATEGORIES = [
  { id: "flytning", label: "Flytning", tone: "sage" },
  { id: "laan", label: "Lån & gebyrer", tone: "deep" },
  { id: "moebler", label: "Møbler", tone: "warm" },
  { id: "lamper", label: "Lamper", tone: "gold" },
  { id: "koekken", label: "Køkken", tone: "mint" },
  { id: "smaating", label: "Småting", tone: "soft" },
  { id: "andet", label: "Andet", tone: "neutral" },
];

const MOVING_PAYERS = [
  { id: "claes", label: "Claes" },
  { id: "laura", label: "Laura" },
  { id: "joint", label: "Fælles konto" },
  { id: "unpaid", label: "Ikke betalt" },
];

const MOVING_SPLITS = [
  { id: "shared", label: "Fælles 50/50" },
  { id: "claes", label: "Claes betaler" },
  { id: "laura", label: "Laura betaler" },
  { id: "custom", label: "Egen fordeling" },
  { id: "undecided", label: "Afklares" },
];

const MOVING_STATUSES = [
  { id: "bought", label: "Købt" },
  { id: "ordered", label: "Bestilt" },
  { id: "planned", label: "Planlagt" },
];

const TOTALKREDIT_LINKS = [
  { label: "Fast rente", url: "https://www.totalkredit.dk/boliglan/valg-af-lan/lantyper/fastforrentet/" },
  { label: "F-kort", url: "https://www.totalkredit.dk/boliglan/valg-af-lan/lantyper/fkort/" },
  { label: "Afdragsfrihed", url: "https://www.totalkredit.dk/boliglan/kob-af-bolig/bliv-klogere-pa-realkredit/laan-med-eller-uden-afdrag/" },
  { label: "Dagens kurser", url: "https://www.totalkredit.dk/boliglan/kurser-og-priser/" },
];

const DEFAULT_MOVING_ADVISOR_NOTES = `Mette-noter:
- Overtagelse 1. juli.
- Nyt realkreditlån skal hjemtages senest 14 dage før overtagelse.
- Følg fast 4% med op til 10 års afdragsfrihed tæt frem mod deadline.
- Hvis fast kurs er attraktiv tæt på deadline, vælges fast. Ellers er F-kort fallback.
- Sammenlign altid med bankens konkrete lånetilbud og bidragssats, før der besluttes.`;

const DEFAULT_MOVING_PROJECT = {
  title: "Ny lejlighed",
  shortTitle: "Ny lejlighed",
  currentAddress: "",
  newAddress: "",
  accessDate: "2026-07-01",
  loanDeadlineDaysBefore: 14,
  loanChoice: "pending",
  purchasePrice: 0,
  downPayment: 0,
  ownershipSharePct: 50,
  futureMonthlyCommonExpenses: 0,
  futureMonthlyPropertyTax: 0,
  futureMonthlyUtilities: 0,
  futureMonthlyOtherHousingCosts: 0,
  futureMonthlyHousingNotes: "",
  loanNeed: 0,
  loanPrincipal: 0,
  monthlyPaymentBeforeTax: 0,
  monthlyPaymentAfterTax: 0,
  bidragRate: 0,
  aopBeforeTax: 0,
  loanCosts: 0,
  courseValue: 0,
  payoutAmount: 0,
  interestOnlyUntil: "",
  loanScenarioName: "",
  loanAmount: 0,
  fixedRateCoupon: 4,
  fixedRateCourse: 0,
  fixedRateCourseTarget: 0,
  fkortRate: 0,
  latestRates: null,
  rateHistory: [],
  advisorNotes: DEFAULT_MOVING_ADVISOR_NOTES,
  items: [],
};

const RECEIPT_MAX_UPLOAD_BYTES = 16 * 1024 * 1024;
const RECEIPT_MAX_STORED_CHARS = 2_800_000;
const RECEIPT_IMAGE_MAX_SIDE = 1800;
const RECEIPT_IMAGE_QUALITY = 0.78;

const RELATION_TYPES = [
  { id: "", label: "Ingen relation" },
  { id: "udlæg", label: "Udlæg / refusion" },
  { id: "intern", label: "Intern overførsel" },
  { id: "opsparing", label: "Opsparing" },
  { id: "investering", label: "Investering" },
  { id: "fælles", label: "Fælles udgift" },
  { id: "andet", label: "Anden sammenhæng" },
];

const SIMPLIFIED_CATEGORIES = [
  { id: "cat-salary", name: "Indkomst", kind: "income", color: "#1f7a4d" },
  { id: "cat-groceries", name: "Husholdning", kind: "expense", color: "#b9752f" },
  { id: "cat-housing", name: "Bolig & regninger", kind: "expense", color: "#245f56" },
  { id: "cat-summerhouse", name: "Sommerhus", kind: "expense", color: "#2f7b7a" },
  { id: "cat-transport", name: "Transport", kind: "expense", color: "#5069a8" },
  { id: "cat-family", name: "Familie", kind: "expense", color: "#b4617b" },
  { id: "cat-lifestyle", name: "Fritid & mad ude", kind: "expense", color: "#c48b40" },
  { id: "cat-shopping", name: "Diverse forbrug", kind: "expense", color: "#8c6f39" },
  { id: "cat-health", name: "Sundhed", kind: "expense", color: "#8f5e55" },
  { id: "cat-transfer", name: "Intern overførsel", kind: "transfer", color: "#6f746c" },
  { id: "cat-savings", name: "Opsparing/investering", kind: "transfer", color: "#00573f" },
  { id: "cat-reimburse", name: "Udlæg/refusion", kind: "transfer", color: "#71806a" },
  { id: "cat-other", name: "Ukendt", kind: "expense", color: "#8a8d84" },
];

const CATEGORY_MERGE_MAP = {
  "cat-insurance": "cat-housing",
  "cat-subscriptions": "cat-housing",
  "cat-fees": "cat-housing",
  "cat-foodout": "cat-lifestyle",
  "cat-travel": "cat-lifestyle",
  "cat-investment": "cat-savings",
  "cat-vacation-home": "cat-summerhouse",
  "cat-summer-house": "cat-summerhouse",
};

const MCC_CATEGORY_RULES = [
  { categoryId: "cat-groceries", codes: ["5411", "5422", "5441", "5451", "5462", "5499"] },
  { categoryId: "cat-lifestyle", ranges: [[5811, 5814], [7011, 7033], [7832, 7999]] },
  { categoryId: "cat-transport", codes: ["4111", "4112", "4121", "4131", "4789", "5541", "5542", "7523"] },
  { categoryId: "cat-housing", codes: ["4812", "4814", "4816", "4821", "4899", "4900", "6300", "6513"] },
  { categoryId: "cat-health", ranges: [[5912, 5912], [8011, 8099]] },
  { categoryId: "cat-family", codes: ["5945", "8211", "8220", "8241", "8244", "8249", "8299", "8351"] },
  { categoryId: "cat-shopping", ranges: [[5200, 5399], [5600, 5735], [5940, 5999]] },
];

const INTELLIGENT_CATEGORY_RULES = [
  { pattern: /(løn|loen|salary|gage|honorar|udbetaling fra arbejdsgiver)/, categoryId: "cat-salary", reason: "Teksten ligner indkomst.", confidence: 96 },
  { pattern: /(totalkredit|realkredit)/, categoryId: "cat-housing", reason: "Ligner realkredit/bolig og fordeles over tre måneder.", confidence: 90 },
  { pattern: /(til faelles|til fælles|fælles forbrugskonto|faelles forbrugskonto|fælles budget|faelles budget|til sommerhuskonto|sommerhuskonto|til dankonto|egen konto|mellem konti|kontooverforsel|kontooverførsel|(^|\s)forbrug(\s|$)|forbrug på mastercard)/, categoryId: "cat-transfer", relationType: "intern", reason: "Ligner intern kontooverførsel.", confidence: 92 },
  { pattern: /(bank norwegian|overfort til lan|overført til lån|laan|lån forfaldsdato|afdrag|kreditkort|forbrugskredit)/, categoryId: "cat-transfer", relationType: "intern", reason: "Ligner betaling til lån/kredit eller intern gældsflytning.", confidence: 82 },
  { pattern: /(pluto|aktier|saxo|nordnet|depot|invester|investering|etf|fond|pension)/, categoryId: "cat-savings", relationType: "investering", reason: "Ligner investering eller formueflytning.", confidence: 95 },
  { pattern: /(opsparing|sparekonto|overfort til indlan|overført til indlån|automatisk saldoflytning|depotkonto)/, categoryId: "cat-savings", relationType: "opsparing", reason: "Ligner opsparing eller flytning mellem egne konti.", confidence: 94 },
  { pattern: /(mobilepay|udlæg|udlaeg|refusion|tilbagebetaling|tilbagebetalt|skylder|vipps)/, categoryId: "cat-reimburse", relationType: "udlæg", reason: "Ligner udlæg, MobilePay eller refusion.", confidence: 88 },
  { pattern: /(netto|rema|foetex|føtex|meny|superbrugsen|brugsen|coop|365 |lundtoftegade|skagenfood|odden fisk|kiosken paa odden|kiosken på odden|dagli.?brugsen|irama|lidl|aldi|bilka|nemlig|aarstiderne|fødevarer|fodevarer)/, categoryId: "cat-groceries", reason: "Ligner dagligvarer eller husholdning.", confidence: 92 },
  { pattern: /(wolt|uber \*eats|uber eats|mealo|restaurant|bistro|cafe|café|pastis|donda|fojetta|polly|silberbauer|fresto|havnebyens kaffebar|20 grams|kaffe|takeaway|bar |vin |bichel|kjær & sommerfeldt|sommerfeldt|lille fugl|spotify|netflix|youtube|google \*youtube|apple\.com\/bill|itunes)/, categoryId: "cat-lifestyle", reason: "Ligner restaurant, abonnement eller fritid.", confidence: 86 },
  { pattern: /(dsb|rejsekort|molslinjen|easypark|parkering|ok |circle k|shell|q8|bilsyn|city bilsyn|taxa|taxi|uber trip|transport|brobizz|ferry|færge|faerge)/, categoryId: "cat-transport", reason: "Ligner transport, parkering, brændstof eller færge.", confidence: 88 },
  { pattern: /(vuggestue|institution|skole|børnehave|bornehave|hemmingsenkids|kids|legetøj|legetoj|faraos|karla)/, categoryId: "cat-family", reason: "Ligner familie, børn eller institution.", confidence: 84 },
  { pattern: /(matas|apotek|læge|laege|tandlæge|tandlaege|sundhed|sportinghealthclub|health club|fitness|medicin)/, categoryId: "cat-health", reason: "Ligner sundhed, apotek eller træning.", confidence: 86 },
  { pattern: /(uniqlo|magasin|normal studios|paloma wool|boss store|danskshop|boxnow|matas\.dk|blizzard|tipster|inmotion|ezanza|lavprisel|shop|webshop|notanr|pas normal|tøj|toej|clothing|design|interiør|interior|bygma)/, categoryId: "cat-shopping", reason: "Ligner køb, shopping eller diverse forbrug.", confidence: 70 },
  { pattern: /(husleje|bolig|brf|ejerforening|vandværk|vandvaerk|kommune|norlys|energi|el |gas|varme|forsikring|letsikring|præmiebetaling|praemiebetaling|realkredit|grundskyld|ejendomsskat|adm\.service fyn)/, categoryId: "cat-housing", reason: "Ligner bolig, regning, forsikring eller kommune.", confidence: 86 },
  { pattern: /(odsherred forsyning|odsherred kommune|sommerhus|sommerhuskonto|brf)/, categoryId: "cat-summerhouse", reason: "Ligner sommerhusrelateret bolig-/ejendomsudgift.", confidence: 84 },
];

const SIMPLIFIED_RULES = [
  ["løn", "cat-salary"],
  ["netto", "cat-groceries"],
  ["rema", "cat-groceries"],
  ["føtex", "cat-groceries"],
  ["coop", "cat-groceries"],
  ["meny", "cat-groceries"],
  ["husleje", "cat-housing"],
  ["bolig", "cat-housing"],
  ["sommerhus", "cat-summerhouse"],
  ["odsherred", "cat-summerhouse"],
  ["norlys", "cat-housing"],
  ["forsikring", "cat-housing"],
  ["dsb", "cat-transport"],
  ["ok", "cat-transport"],
  ["vuggestue", "cat-family"],
  ["institution", "cat-family"],
  ["restaurant", "cat-lifestyle"],
  ["cafe", "cat-lifestyle"],
  ["bistro", "cat-lifestyle"],
  ["spotify", "cat-lifestyle"],
  ["netflix", "cat-lifestyle"],
  ["mobilepay", "cat-reimburse"],
  ["overførsel", "cat-transfer"],
  ["overforsel", "cat-transfer"],
  ["opsparing", "cat-savings"],
  ["saxo", "cat-savings"],
  ["nordnet", "cat-savings"],
  ["depot", "cat-savings"],
].map(([keyword, categoryId], index) => ({ id: `rule-simple-${index}`, keyword, categoryId }));

const VIEW_COPY = {
  overblik: {
    kicker: "Privatøkonomi",
    title: "Overblik",
    lead: "Forbrug, udvikling og oprydning — samlet på én side.",
  },
  formue: {
    kicker: "Formue",
    title: "Formue",
    lead: "Kontanter, bolig, aktier og crypto — samlet uden støj.",
  },
  "ny-lejlighed": {
    kicker: "Flytteprojekt",
    title: "Ny lejlighed",
    lead: "Flytning, lån, møbler og udlæg samlet ét sted.",
  },
  rapporter: {
    kicker: "Analyser",
    title: "Analyser",
    lead: "Færdige rapporter om forbrug, udvikling og mønstre.",
  },
  udgifter: {
    kicker: "Udgifter",
    title: "Udgifter",
    lead: "Største kategorier og dyreste posteringer.",
  },
  oprydning: {
    kicker: "Oprydning",
    title: "Ryd op",
    lead: "Fjern overlap, afstem overførsler og hold forbrugstallene rene.",
  },
  transaktioner: {
    kicker: "Posteringer",
    title: "Posteringer",
    lead: "Søg, ret og kategorisér bankposteringer.",
  },
  "bank-sync": {
    kicker: "Bankdata",
    title: "Bankdata",
    lead: "Hent konti og posteringer fra Enable Banking eller CSV.",
  },
  import: {
    kicker: "CSV",
    title: "CSV-import",
    lead: "Importer kontoudtog fra Sparekassen Kronjylland.",
  },
  konti: {
    kicker: "Konti",
    title: "Konti",
    lead: "Saldi og kontomapping.",
  },
  kategorier: {
    kicker: "Kategorier",
    title: "Kategorier",
    lead: "Få brede kategorier og simple regler.",
  },
  indstillinger: {
    kicker: "Backup",
    title: "Backup",
    lead: "Eksportér, gendan og vedligehold lokale data.",
  },
};

const app = document.querySelector("#app");
let state = loadState();
let noticeTimer = null;
let enableBankingHydrated = false;
let autoSyncStarted = false;
let stateBroadcastChannel = null;
let serverSaveTimer = null;
let hydratingServerState = false;
let serverStateHydrated = false;
let lastPersistedStateFingerprint = "";
let runtimeStatus = { ok: false, dataBackend: "local", authEnabled: false };
let ui = {
  view: "overblik",
  month: state.settings.selectedMonth || currentMonthKey(),
  query: "",
  categoryFilter: "all",
  accountFilter: "all",
  reportMode: "overblik",
  reportAccountFilter: "all",
  periodMode: state.settings.periodMode || "month",
  periodFrom: state.settings.periodFrom || uiMonthStart(state.settings.selectedMonth || currentMonthKey()),
  periodTo: state.settings.periodTo || uiMonthEnd(state.settings.selectedMonth || currentMonthKey()),
  dateBasis: state.settings.dateBasis || "economic",
  privacyMode: Boolean(state.settings.privacyMode),
  drawer: null,
  drawerTxId: null,
  editingId: null,
  importAccountId: state.accounts[0]?.id || "",
  importOnlyMonth: true,
  importMonth: shiftMonth(currentMonthKey(), -1),
  syncDateFrom: `${uiMonthStart(state.settings.selectedMonth || currentMonthKey())}`,
  syncDateTo: todayISO(),
  importDraft: null,
  notice: null,
  transactionsPage: 1,
  transactionsPageSize: 75,
  undo: null,
  movingReceiptDraft: null,
  movingReceiptReading: false,
  movingFormDraft: null,
};

init();

function init() {
  app.addEventListener("click", handleClick);
  app.addEventListener("submit", handleSubmit);
  app.addEventListener("change", handleChange);
  app.addEventListener("input", handleInput);
  setupLiveStateBridge();
  const params = new URLSearchParams(window.location.search);
  const returnedFromEnableBanking = params.get("enablebanking") === "connected" || ((params.has("code") || params.has("error")) && params.get("state")?.includes("claes-privatoekonomi-eb"));
  const returnedFromBank = params.get("bank-sync") === "connected" || params.has("ref") || params.has("ref_id");
  const hashView = window.location.hash?.replace("#", "");
  if (NAV_ITEMS.some((item) => item.id === hashView)) ui.view = hashView;
  if (returnedFromEnableBanking || returnedFromBank) ui.view = "bank-sync";
  registerServiceWorker();
  render();
  window.setTimeout(() => hydrateRuntimeStatus(), 100);
  if (returnedFromEnableBanking) {
    const code = params.get("code") || "";
    const error = params.get("error_description") || params.get("error") || "";
    window.history.replaceState({}, "", window.location.pathname);
    window.setTimeout(() => completeEnableBankingSession(code, error), 250);
  } else if (returnedFromBank) {
    window.history.replaceState({}, "", window.location.pathname);
    notify("Bank-samtykke er modtaget. Jeg henter konti fra GoCardless nu.");
    window.setTimeout(() => refreshGoCardlessAccounts(), 350);
  } else if (state.bankSync?.autoSyncOnOpen && state.bankSync?.accounts?.length) {
    window.setTimeout(() => syncGoCardlessTransactions(true), 650);
  }
  window.setTimeout(() => hydrateStateFromServer(), 200);
  window.setTimeout(() => hydrateEnableBankingFromServer(true), 900);
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return createSeedState();
    const parsed = JSON.parse(raw);
    if (!parsed || parsed.version !== 1) return createSeedState();
    parsed.settings ||= {};
    parsed.accounts ||= [];
    parsed.categories ||= [];
    parsed.rules ||= [];
    parsed.transactions ||= [];
    parsed.bankSync ||= { accounts: [], accountMappings: {}, lastSyncAt: "", config: null };
    parsed.bankSync.enableBanking ||= { accounts: [], config: null, diagnostics: null, lastSyncAt: "", lastImportCount: 0 };
    parsed.transactions = parsed.transactions
      .filter((tx) => tx.source !== "demo")
      .map((tx) => ({ note: "", relationType: "", relationKey: "", linkedTransactionId: "", matchGroupId: "", ...tx, categoryId: simplifyCategoryId(tx.categoryId) }));
    parsed.accounts = removeUnusedDemoAccounts(parsed.accounts, parsed.transactions);
    const defaults = createSeedState();
    parsed.accounts = mergeAccountsByName(parsed.accounts, defaults.accounts);
    if (!parsed.accounts.length) parsed.accounts = defaults.accounts;
    parsed.categories = SIMPLIFIED_CATEGORIES.map((category) => ({ ...category }));
    parsed.rules = mergeRulesByKeyword(parsed.rules, SIMPLIFIED_RULES);
    parsed.settings.householdName = BRAND_NAME;
    parsed.settings.members = !parsed.settings.members || parsed.settings.members === "Claes" ? "Claes" : parsed.settings.members;
    parsed.settings.selectedMonth ||= currentMonthKey();
    parsed.settings.periodMode ||= "month";
    parsed.settings.periodFrom ||= uiMonthStart(parsed.settings.selectedMonth);
    parsed.settings.periodTo ||= uiMonthEnd(parsed.settings.selectedMonth);
    parsed.settings.dateBasis ||= "economic";
    parsed.settings.privacyMode = Boolean(parsed.settings.privacyMode);
    parsed.settings.wealth = normalizeWealthSettings(parsed.settings.wealth);
    parsed.movingProject = normalizeMovingProject(parsed.movingProject);
    return parsed;
  } catch (error) {
    console.warn("Kunne ikke læse gemte data", error);
    return createSeedState();
  }
}

function prepareStateForSave() {
  state.settings.selectedMonth = ui.month;
  state.settings.periodMode = ui.periodMode;
  state.settings.periodFrom = ui.periodFrom;
  state.settings.periodTo = ui.periodTo;
  state.settings.dateBasis = ui.dateBasis;
  state.settings.privacyMode = Boolean(ui.privacyMode);
}

function stateFingerprint(value = state) {
  return JSON.stringify(value, (key, item) => key === "serverSavedAt" ? undefined : item);
}

function markServerStateFingerprint(value = state) {
  lastPersistedStateFingerprint = stateFingerprint(value);
}

function saveState() {
  prepareStateForSave();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  persistStateToServer();
  broadcastStateUpdate("Data er opdateret.");
}

function saveStateQuietly() {
  prepareStateForSave();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  persistStateToServer();
}

function setupLiveStateBridge() {
  window.addEventListener("storage", (event) => {
    if (event.key !== STORAGE_KEY || !event.newValue) return;
    applyExternalStateUpdate("Data blev opdateret i en anden fane.");
  });
  if ("BroadcastChannel" in window) {
    stateBroadcastChannel = new BroadcastChannel("privatoekonomi-state");
    stateBroadcastChannel.addEventListener("message", (event) => {
      if (event.data?.type !== "state-updated") return;
      applyExternalStateUpdate(event.data.message || "Data blev opdateret.");
    });
  }
}

function broadcastStateUpdate(message) {
  stateBroadcastChannel?.postMessage({ type: "state-updated", message, at: new Date().toISOString() });
}

async function hydrateStateFromServer() {
  if (hydratingServerState) return;
  hydratingServerState = true;
  try {
    const data = await apiFetch("/api/app-state");
    const serverState = data?.state;
    if (!serverState?.transactions?.length) return;
    const localCount = state.transactions?.length || 0;
    const serverCount = serverState.transactions?.length || 0;
    const localSaved = new Date(state.settings?.serverSavedAt || state.bankSync?.enableBanking?.lastSyncAt || 0).getTime();
    const serverSaved = new Date(data.savedAt || serverState.settings?.serverSavedAt || 0).getTime();
    if (serverCount < localCount && serverSaved <= localSaved) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(serverState));
    const keepView = ui.view;
    state = loadState();
    ui.view = keepView;
    hydratePeriodUiFromState();
    markServerStateFingerprint(state);
    render();
    notify(`Opdateret med serverdata: ${serverCount} posteringer.`);
  } catch (error) {
    console.warn("Kunne ikke hente server-state", error);
  } finally {
    hydratingServerState = false;
    serverStateHydrated = true;
  }
}

function persistStateToServer() {
  clearTimeout(serverSaveTimer);
  serverSaveTimer = setTimeout(() => {
    if (!serverStateHydrated) {
      persistStateToServer();
      return;
    }
    const fingerprint = stateFingerprint(state);
    if (fingerprint === lastPersistedStateFingerprint) return;
    fetch("/api/app-state", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ state }),
    })
      .then((response) => response.ok ? response.json() : Promise.reject(new Error(`Server-state ${response.status}`)))
      .then((data) => {
        if (data?.savedAt) {
          state.settings.serverSavedAt = data.savedAt;
          localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
        }
        markServerStateFingerprint(state);
      })
      .catch((error) => console.warn("Kunne ikke gemme server-state", error));
  }, 250);
}

function hydratePeriodUiFromState() {
  ui.month = state.settings.selectedMonth || latestTransactionMonth() || ui.month || currentMonthKey();
  ui.periodMode = state.settings.periodMode || "month";
  ui.periodFrom = state.settings.periodFrom || uiMonthStart(ui.month);
  ui.periodTo = state.settings.periodTo || uiMonthEnd(ui.month);
  ui.dateBasis = state.settings.dateBasis || "economic";
  ui.privacyMode = Boolean(state.settings.privacyMode);
  if (ui.periodMode === "month") {
    ui.periodFrom = uiMonthStart(ui.month);
    ui.periodTo = uiMonthEnd(ui.month);
  }
}

function applyExternalStateUpdate(message) {
  const previousView = ui.view;
  try {
    state = loadState();
    ui.view = previousView;
    hydratePeriodUiFromState();
    ui.notice = { text: message, kind: "info" };
    clearTimeout(noticeTimer);
    render();
    noticeTimer = setTimeout(() => {
      ui.notice = null;
      render();
    }, 3200);
  } catch (error) {
    console.warn("Kunne ikke indlæse ekstern dataopdatering", error);
  }
}

function mergeById(current, defaults) {
  const ids = new Set(current.map((item) => item.id));
  return [...current, ...defaults.filter((item) => !ids.has(item.id))];
}

function simplifyCategoryId(categoryId) {
  return CATEGORY_MERGE_MAP[categoryId] || categoryId || "cat-other";
}

function mergeRulesByKeyword(current = [], defaults = []) {
  const validIds = new Set(SIMPLIFIED_CATEGORIES.map((category) => category.id));
  const result = [];
  const seen = new Set();
  for (const rule of [...defaults, ...current]) {
    const keyword = String(rule.keyword || "").trim();
    const categoryId = simplifyCategoryId(rule.categoryId);
    if (!keyword || !validIds.has(categoryId)) continue;
    const key = normalize(keyword);
    if (seen.has(key)) continue;
    seen.add(key);
    result.push({ ...rule, id: rule.id || uid("rule"), keyword, categoryId });
  }
  return result;
}

function mergeAccountsByName(current, defaults) {
  const names = new Set(current.map((account) => normalize(account.name)));
  return [...current, ...defaults.filter((account) => !names.has(normalize(account.name)))];
}

function removeUnusedDemoAccounts(accounts, transactions) {
  const demoIds = new Set(["acc-main", "acc-shared", "acc-savings"]);
  const usedAccountIds = new Set(transactions.map((tx) => tx.accountId));
  return accounts.filter((account) => !demoIds.has(account.id) || usedAccountIds.has(account.id));
}

function createSeedState() {
  const month = currentMonthKey();
  return {
    version: 1,
    settings: {
      householdName: BRAND_NAME,
      members: "Claes",
      selectedMonth: shiftMonth(month, -1),
      createdAt: new Date().toISOString(),
    },
    accounts: [
      { id: "acc-sparekassen", name: "Sparekassen Kronjylland", type: "Bankkonto", balance: 0 },
      { id: "acc-bolig", name: "Boligkonto", type: "Boligkonto", balance: 0 },
      { id: "acc-faelles-forbrug", name: "Fælles forbrugskonto", type: "Fælleskonto", balance: 0 },
      { id: "acc-faelles-sommerhus", name: "Fælles sommerhuskonto", type: "Sommerhus", balance: 0 },
      { id: "acc-faellesbudget", name: "Fællesbudget konto", type: "Budgetkonto", balance: 0 },
    ],
    categories: SIMPLIFIED_CATEGORIES.map((category) => ({ ...category })),
    rules: SIMPLIFIED_RULES.map((rule) => ({ ...rule })),
    transactions: [],
    bankSync: { accounts: [], accountMappings: {}, lastSyncAt: "", config: null, autoSyncOnOpen: false, enableBanking: { accounts: [], config: null, diagnostics: null, lastSyncAt: "", lastImportCount: 0 } },
    movingProject: normalizeMovingProject(),
  };
}

function makeTx(accountId, date, description, amount, categoryId) {
  return {
    id: uid("tx"),
    accountId,
    date,
    description,
    amount,
    categoryId,
    note: "",
    relationType: "",
    relationKey: "",
    linkedTransactionId: "",
    matchGroupId: "",
    source: "demo",
    createdAt: new Date().toISOString(),
  };
}

function uid(prefix = "id") {
  return `${prefix}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 9)}`;
}

function render() {
  const copy = viewCopyFor(ui.view);
  app.innerHTML = `
    <div class="app-shell ${ui.privacyMode ? "privacy-mode" : ""}">
      <aside class="sidebar">
        <div class="brand">
          <div class="brand-mark" aria-hidden="true">C</div>
          <div class="brand-text">
            <strong>${escapeHtml(BRAND_NAME)}</strong>
            <span>${escapeHtml(BRAND_TAGLINE)}</span>
          </div>
        </div>
        <nav class="nav-list" aria-label="Primær navigation">
          ${NAV_ITEMS.map(
            (item) => `
              <button class="nav-button ${ui.view === item.id ? "active" : ""}" type="button" data-nav="${item.id}">
                <span>${escapeHtml(navItemLabel(item))}</span>
                ${item.hint ? `<small>${escapeHtml(item.hint)}</small>` : ""}
              </button>`
          ).join("")}
        </nav>
        <button class="sidebar-sync" type="button" data-action="sync-latest">
          <span>Opdatér bankdata</span>
          <small>${getBankSyncState().enableBanking?.lastSyncAt ? formatDateTime(getBankSyncState().enableBanking.lastSyncAt) : "Hent fra Open Banking"}</small>
        </button>
        <button class="sidebar-mode" type="button" data-action="date-basis" data-basis="${ui.dateBasis === "economic" ? "bank" : "economic"}">
          <span>${ui.dateBasis === "economic" ? "Økonomisk måned" : "Bankdato"}</span>
          <small>Skift datovisning</small>
        </button>
        <button class="sidebar-mode privacy-toggle ${ui.privacyMode ? "active" : ""}" type="button" data-action="privacy-toggle">
          <span>${ui.privacyMode ? "Privat visning" : "Vis beløb"}</span>
          <small>${ui.privacyMode ? "Beløb er skjult" : "Skjul alle tal"}</small>
        </button>
        <div class="sidebar-footer">
          <p class="sidebar-note">Reelt forbrug, bank-sync og oprydning uden støj.</p>
          <p class="sidebar-meta">${escapeHtml(dataLocationLabel())}</p>
        </div>
      </aside>
      <main class="main">
        <header class="topbar">
          <div>
            <p class="eyebrow">${escapeHtml(copy.kicker)}</p>
            <h1>${escapeHtml(copy.title)}</h1>
            <p class="lead">${escapeHtml(copy.lead)}</p>
          </div>
          <div class="actions topbar-actions">
            ${renderPeriodControl()}
          </div>
        </header>
        ${ui.notice ? `<div class="notice ${ui.notice.kind === "danger" ? "danger" : ""}" role="status">${escapeHtml(ui.notice.text)}</div>` : ""}
        <div class="view-panel">
          ${renderView()}
        </div>
      </main>
    </div>
    ${renderDrawer()}
  `;
}

function viewCopyFor(view) {
  if (view === "ny-lejlighed") {
    const project = getMovingProject();
    return {
      kicker: "Flytteprojekt",
      title: project.title || project.shortTitle || "Ny lejlighed",
      lead: "Flytning, lån, møbler og udlæg samlet ét sted.",
    };
  }
  return VIEW_COPY[view] || VIEW_COPY.overblik;
}

function navItemLabel(item) {
  if (item.id !== "ny-lejlighed") return item.label;
  const project = getMovingProject();
  return project.shortTitle || project.title || item.label;
}

function renderView() {
  switch (ui.view) {
    case "formue":
      return renderWealthView();
    case "ny-lejlighed":
      return renderMovingProjectView();
    case "rapporter":
      return renderReportsView();
    case "udgifter":
      return renderExpensesView();
    case "oprydning":
      return renderCleanupView();
    case "transaktioner":
      return renderTransactionsView();
    case "bank-sync":
      return renderBankSyncView();
    case "import":
      return renderImportView();
    case "konti":
      return renderAccountsView();
    case "kategorier":
      return renderCategoriesView();
    case "indstillinger":
      return renderSettingsView();
    case "overblik":
    default:
      return renderDashboard();
  }
}

function renderDashboard() {
  const periodRows = getPeriodTransactions();
  const reportingRows = getPeriodReportingTransactions();
  const summary = getPeriodSummary();
  const cleanup = getCleanupStatusForRows(periodRows);
  const comparison = getPeriodComparison();
  const recent = periodRows.slice(0, 7);
  const topCategories = getPeriodCategoryReportRows().slice(0, 5);
  const label = activePeriodLabel();
  const liquid = getLiquidAssetsSummary();
  const cleanupChecklistCount = getCleanupChecklistItems(periodRows).length;
  const cleanupCount = cleanupChecklistCount;
  const headline = getPeriodHeadlineInsight(summary, cleanup, topCategories, comparison);
  const periodization = getPeriodizationSummaryForRows(periodRows);
  return `
    <section class="finance-cockpit" aria-label="Finansielt cockpit for ${escapeHtml(label)}">
      <div class="cockpit-primary">
        <p class="cockpit-kicker">Dagligt cockpit · ${escapeHtml(label)}</p>
        <h2>${escapeHtml(headline.title)}</h2>
        <div class="cockpit-balance ${headline.kind === "negative" ? "negative" : ""}">${escapeHtml(headline.value)}</div>
        <p class="cockpit-copy">${escapeHtml(headline.text)}</p>
        <div class="cockpit-status-row">
          <span class="status-dot ${headline.kind === "negative" ? "negative" : "positive"}">${escapeHtml(headline.badge)}</span>
          <span>${getBankSyncState().enableBanking?.lastSyncAt ? `Opdateret ${formatDateTime(getBankSyncState().enableBanking.lastSyncAt)}` : "Bankdata ikke opdateret"}</span>
          <span>${ui.dateBasis === "economic" ? `${periodization.moved} periodiseret fra bankdato` : "Rå bankdato"}</span>
        </div>
      </div>
      <div class="cockpit-grid">
        ${renderCockpitTile("Cashflow", summary.savings, summary.income ? `${formatPercent(summary.savingsRate)} af indtægt` : "Indtægt mangler", { kind: summary.savings >= 0 ? "positive" : "negative", action: "open-report", report: "overfoersler" })}
        ${renderCockpitTile("Ind", summary.income, comparison.incomeCountLabel, { kind: "positive", action: "open-report", report: "konti" })}
        ${renderCockpitTile("Forbrug", summary.expenses, comparison.previous.expenses ? `${comparison.momExpenseDelta >= 0 ? "+" : ""}${formatCurrency(comparison.momExpenseDelta)} mod før` : "Ingen sammenligning", { kind: "expense", action: "open-report", report: "udgifter" })}
        ${renderCockpitTile("Ryd op", cleanupCount, cleanupCount ? `${cleanupChecklistCount} ting at krydse af` : "Ingen akutte ting", { kind: cleanupCount ? "attention" : "positive", nav: "oprydning" })}
      </div>
    </section>

    ${renderExecutiveDashboard(periodRows, reportingRows, topCategories, summary, cleanup, comparison, recent, liquid, label)}
  `;
}

function renderExecutiveDashboard(periodRows, reportingRows, topCategories, summary, cleanup, comparison, recent, liquid, label) {
  return `
    <section class="exec-dashboard-grid section" aria-label="Dashboard-paneler">
      <article class="exec-panel exec-panel-wide">
        <div class="exec-panel-header">
          <div><span>Performance</span><h2>Retning og pengestrøm</h2><p>Trend, ind/ud og sammenligning i samme panel.</p></div>
          <button class="button ghost" type="button" data-action="open-report" data-report="udvikling">Åbn trend</button>
        </div>
        <div class="exec-performance">
          <div class="exec-chart">${renderDashboardTrend(ui.month)}</div>
          <div class="exec-side">
            ${renderCashflowVisual(summary)}
            <div class="mini-delta-row compact-deltas">
              ${renderDeltaPill(ui.periodMode === "month" ? "MoM" : "Forrige periode", comparison.momExpenseDelta, comparison.previous.expenses)}
              ${renderDeltaPill("YoY", comparison.yoyExpenseDelta, comparison.lastYear.expenses)}
            </div>
          </div>
        </div>
      </article>

      <article class="exec-panel">
        <div class="exec-panel-header compact">
          <div><span>Forbrug</span><h2>Kategorier</h2><p>Klik for drilldown i perioden.</p></div>
          <button class="button ghost" type="button" data-action="open-report" data-report="udgifter">Dyk ned</button>
        </div>
        ${renderCategoryBreakdownCompact(topCategories)}
      </article>

      <article class="exec-panel">
        <div class="exec-panel-header compact">
          <div><span>Fokus</span><h2>Tjek dette først</h2><p>De få ting der gør tallene bedre.</p></div>
          <button class="button ghost" type="button" data-nav="oprydning">Ryd op</button>
        </div>
        ${renderExecutiveActionQueue(periodRows, reportingRows, cleanup)}
      </article>

      <article class="exec-panel exec-panel-wide">
        <div class="exec-panel-header">
          <div><span>Aktivitet</span><h2>Seneste posteringer og konti</h2><p>${recent.length} nyeste i ${escapeHtml(label)} · ${liquid.count} konti.</p></div>
          <button class="button ghost" type="button" data-nav="transaktioner">Alle posteringer</button>
        </div>
        <div class="exec-activity-split">
          ${renderRecentActivityList(recent.slice(0, 6))}
          ${renderCompactAccountSnapshot(liquid)}
        </div>
      </article>
    </section>
  `;
}

function renderExecutiveActionQueue(periodRows, reportingRows, cleanup) {
  const periodization = getPeriodizationSummaryForRows(periodRows);
  const uncertainGroups = getUncertainCategoryGroupsForRows(periodRows).length;
  const movers = getCategoryMoverRows(reportingRows).slice(0, 2);
  const items = [
    { title: "Usikre kategorier", value: uncertainGroups, text: uncertainGroups ? "Validér de største grupper" : "Ser fint ud", nav: "oprydning", tone: uncertainGroups ? "attention" : "positive" },
    { title: "Månedsskifte", value: periodization.pending, text: periodization.pending ? "Mangler afkrydsning" : (periodization.moved ? "Periodisering aktiv" : "Ingen åbne"), nav: "oprydning", tone: periodization.pending ? "attention" : "positive" },
    { title: "Konto-match", value: cleanup.transferMatchCount, text: cleanup.transferMatchCount ? "Kan afstemmes" : "Ingen oplagte match", nav: "oprydning", tone: cleanup.transferMatchCount ? "attention" : "positive" },
    movers[0] ? { title: `Største ændring`, value: `${movers[0].delta >= 0 ? "+" : ""}${formatCurrency(movers[0].delta)}`, text: movers[0].category.name, action: "open-drilldown", drilldown: "category", id: movers[0].category.id, tone: movers[0].delta > 0 ? "negative" : "positive" } : null,
  ].filter(Boolean);
  return `
    <div class="exec-action-list">
      ${items.map((item) => `
        <button class="exec-action-row ${item.tone}" type="button" ${item.nav ? `data-nav="${escapeHtml(item.nav)}"` : `data-action="${escapeHtml(item.action)}" data-drilldown="${escapeHtml(item.drilldown)}" data-id="${escapeHtml(item.id)}"`}>
          <span><strong>${escapeHtml(item.title)}</strong><small>${escapeHtml(item.text)}</small></span>
          <em>${escapeHtml(String(item.value))}</em>
        </button>
      `).join("")}
    </div>
  `;
}

function renderCompactAccountSnapshot(liquid) {
  const accounts = liquid.accounts.slice().sort((a, b) => Number(b.balance || 0) - Number(a.balance || 0)).slice(0, 5);
  if (!accounts.length) return `<div class="empty-state compact-empty"><strong>Ingen konti</strong><span>Hent bankdata for kontosaldo.</span></div>`;
  return `
    <div class="compact-account-snapshot">
      <div class="snapshot-total"><span>Konti i alt</span><strong>${formatCurrency(liquid.total)}</strong></div>
      ${accounts.map((account) => `
        <button class="compact-account-row" type="button" data-action="open-drilldown" data-drilldown="account" data-id="${escapeHtml(account.id)}">
          <span><strong>${escapeHtml(account.name)}</strong><small>${escapeHtml(account.type)}</small></span>
          <em>${formatCurrency(Number(account.balance || 0))}</em>
        </button>
      `).join("")}
    </div>
  `;
}

function getPeriodizationSummaryForRows(rows) {
  const moved = rows.filter((tx) => getEconomicPeriodInfo(tx).moved).length;
  const locked = rows.filter((tx) => tx.periodLocked).length;
  const pending = rows.filter((tx) => getEconomicPeriodInfo(tx).moved && !tx.periodLocked).length;
  return { moved, locked, pending };
}

function getPeriodHeadlineInsight(summary, cleanup, topCategories, comparison) {
  const cleanupCount = cleanup.unknownCount + cleanup.transferMatchCount + cleanup.movementCount;
  const top = topCategories[0];
  const topShare = summary.expenses && top ? top.total / summary.expenses : 0;
  if (cleanup.unknownCount > 20) {
    return {
      title: "Tjek datakvalitet",
      value: `${cleanup.unknownCount} ukendte`,
      text: `Der ligger ${formatCurrency(topCategories.find((row) => row.category?.id === fallbackCategoryId())?.total || 0)} i ukendt forbrug. Validér de største grupper først, så resten af dashboardet bliver mere præcist.`,
      badge: "Ryd op først",
      kind: "negative",
    };
  }
  if (summary.savings < 0) {
    return {
      title: "Negativt flow",
      value: formatCurrency(summary.savings),
      text: `Udgifterne overstiger indtægterne i perioden. Hold især øje med ${top?.category?.name || "de største kategorier"}${top ? ` (${formatCurrency(top.total)})` : ""}.`,
      badge: "Kræver blik",
      kind: "negative",
    };
  }
  if (topShare > 0.35 && top?.category?.id !== fallbackCategoryId()) {
    return {
      title: `${top.category.name} fylder`,
      value: formatPercent(topShare),
      text: `${top.category.name} står for ${formatCurrency(top.total)} af periodens reelle forbrug. Klik for at dykke ned i modtagere og posteringer.`,
      badge: "Fokusområde",
      kind: "positive",
    };
  }
  return {
    title: "Stabil periode",
    value: formatCurrency(summary.savings),
    text: comparison.previous.expenses ? `Cashflow efter forbrug er ${formatCurrency(summary.savings)}. Forbruget er ${comparison.momExpenseDelta <= 0 ? "lavere" : "højere"} end forrige periode.` : "Perioden ser rolig ud. Dyk ned i fordeling eller faste mønstre hvis du vil forstå detaljerne.",
    badge: "Overblik OK",
    kind: "positive",
  };
}

function renderOverviewVisualReports(periodRows, topCategories, summary, cleanup) {
  return `
    <section class="overview-report-grid section" aria-label="Visuelle rapporter">
      <article class="visual-report-card">
        <div class="mini-report-heading"><div><span>Forbrugsmix</span><h3>Hvor går pengene hen?</h3></div><button class="link-button" type="button" data-action="open-report" data-report="udgifter">Se alt</button></div>
        ${renderCategoryDonutReport(topCategories, summary.expenses)}
      </article>
      <article class="visual-report-card">
        <div class="mini-report-heading"><div><span>Rytme</span><h3>Hvornår bruges pengene?</h3></div></div>
        ${renderSpendingRhythmReport(periodRows)}
      </article>
      <article class="visual-report-card">
        <div class="mini-report-heading"><div><span>Ændringer</span><h3>Hvad flyttede sig?</h3></div><button class="link-button" type="button" data-action="open-report" data-report="udvikling">Trend</button></div>
        ${renderCategoryMoversReport(periodRows)}
      </article>
      <article class="visual-report-card">
        <div class="mini-report-heading"><div><span>Sommerhus</span><h3>Separat spor</h3></div></div>
        ${renderSummerhouseSnapshot(periodRows)}
      </article>
      <article class="visual-report-card">
        <div class="mini-report-heading"><div><span>Faste mønstre</span><h3>Gentagne udgifter</h3></div><button class="link-button" type="button" data-action="open-report" data-report="faste">Rapport</button></div>
        ${renderRecurringMiniReport()}
      </article>
      <article class="visual-report-card">
        <div class="mini-report-heading"><div><span>Datakvalitet</span><h3>Kan tallene stoles på?</h3></div><button class="link-button" type="button" data-nav="oprydning">Ryd op</button></div>
        ${renderDataQualityReport(periodRows, cleanup)}
      </article>
    </section>
  `;
}

function renderCategoryDonutReport(rows, totalExpenses) {
  if (!rows.length || !totalExpenses) return `<div class="empty-state compact-empty"><strong>Ingen udgifter</strong><span>Vælg en periode med forbrug.</span></div>`;
  let cursor = 0;
  const segments = rows.slice(0, 5).map((row) => {
    const share = Math.max(0, row.total / totalExpenses);
    const end = cursor + share * 100;
    const color = row.category?.color || "#8a8d84";
    const segment = `${color} ${cursor.toFixed(2)}% ${end.toFixed(2)}%`;
    cursor = end;
    return segment;
  });
  if (cursor < 100) segments.push(`rgba(16,35,29,.08) ${cursor.toFixed(2)}% 100%`);
  return `
    <div class="donut-report">
      <div class="donut" style="--donut:${escapeHtml(segments.join(", "))}"><strong>${formatCurrency(totalExpenses)}</strong><span>reelt forbrug</span></div>
      <div class="donut-legend">
        ${rows.slice(0, 4).map((row) => `<button type="button" data-action="open-drilldown" data-drilldown="category" data-id="${escapeHtml(row.category.id)}"><i style="--dot:${escapeHtml(row.category.color)}"></i><span>${escapeHtml(row.category.name)}</span><em>${formatPercent(row.total / totalExpenses)}</em></button>`).join("")}
      </div>
    </div>
  `;
}

function renderSpendingRhythmReport(rows) {
  const buckets = getSpendingRhythmRows(rows);
  const max = Math.max(1, ...buckets.map((bucket) => bucket.total));
  const total = buckets.reduce((sum, bucket) => sum + bucket.total, 0);
  return `
    <div class="rhythm-report">
      <div class="rhythm-bars">
        ${buckets.map((bucket) => `<div class="rhythm-bucket"><span style="--height:${Math.max(5, Math.round((bucket.total / max) * 100))}%"></span><small>${escapeHtml(bucket.label)}</small></div>`).join("")}
      </div>
      <p>${total ? `Mest aktivitet: <strong>${escapeHtml(buckets.slice().sort((a, b) => b.total - a.total)[0].label)}</strong>` : "Ingen udgifter i perioden."}</p>
    </div>
  `;
}

function getSpendingRhythmRows(rows) {
  const buckets = [
    { label: "1-7", from: 1, to: 7, total: 0, count: 0 },
    { label: "8-14", from: 8, to: 14, total: 0, count: 0 },
    { label: "15-21", from: 15, to: 21, total: 0, count: 0 },
    { label: "22-28", from: 22, to: 28, total: 0, count: 0 },
    { label: "29-31", from: 29, to: 31, total: 0, count: 0 },
  ];
  for (const tx of rows) {
    const category = categoryById(tx.categoryId);
    if (!(tx.amount < 0 && category?.kind !== "transfer")) continue;
    const day = Number(transactionDateForView(tx).slice(8, 10));
    const bucket = buckets.find((item) => day >= item.from && day <= item.to);
    if (!bucket) continue;
    bucket.total += Math.abs(Number(tx.amount || 0));
    bucket.count += 1;
  }
  return buckets;
}

function renderCategoryMoversReport(periodRows) {
  const rows = getCategoryMoverRows(periodRows).slice(0, 4);
  if (!rows.length) return `<div class="empty-state compact-empty"><strong>Ingen sammenligning</strong><span>Der mangler data for forrige periode.</span></div>`;
  return `<div class="mover-list">${rows.map((row) => `
    <button type="button" data-action="open-drilldown" data-drilldown="category" data-id="${escapeHtml(row.category.id)}" class="mover-row ${row.delta <= 0 ? "positive" : "negative"}">
      <span><strong>${escapeHtml(row.category.name)}</strong><small>${row.delta <= 0 ? "lavere" : "højere"} end før</small></span>
      <em>${row.delta >= 0 ? "+" : ""}${formatCurrency(row.delta)}</em>
    </button>`).join("")}</div>`;
}

function getCategoryMoverRows(periodRows) {
  const current = getCategoryReportRowsForRows(periodRows, "all");
  const previous = getCategoryReportRowsForRows(getPreviousComparableTransactions(), "all");
  const ids = new Set([...current.map((row) => row.category?.id), ...previous.map((row) => row.category?.id)].filter(Boolean));
  return Array.from(ids).map((id) => {
    const currentRow = current.find((row) => row.category?.id === id);
    const previousRow = previous.find((row) => row.category?.id === id);
    const category = currentRow?.category || previousRow?.category || categoryById(id);
    const delta = (currentRow?.total || 0) - (previousRow?.total || 0);
    return { category, current: currentRow?.total || 0, previous: previousRow?.total || 0, delta };
  }).filter((row) => row.category && Math.abs(row.delta) > 50).sort((a, b) => Math.abs(b.delta) - Math.abs(a.delta));
}

function getPreviousComparableTransactions() {
  const { from, to } = activeDateRange();
  const days = Math.max(1, Math.abs(daysBetween(to, from)) + 1);
  const previousTo = shiftDate(from, -1);
  const previousFrom = shiftDate(previousTo, -(days - 1));
  return getReportingTransactionsForDateRange(previousFrom, previousTo);
}

function renderSummerhouseSnapshot(rows) {
  const summerAccountIds = state.accounts.filter((account) => /sommerhus/.test(normalize(account.name))).map((account) => account.id);
  const relevant = rows.filter((tx) => tx.categoryId === "cat-summerhouse" || summerAccountIds.includes(tx.accountId) || /(sommerhus|odden|odsherred|yderby)/.test(normalize(`${tx.description} ${accountById(tx.accountId)?.name || ""}`)));
  const expenses = relevant.filter((tx) => tx.amount < 0 && categoryById(tx.categoryId)?.kind !== "transfer").reduce((sum, tx) => sum + Math.abs(Number(tx.amount || 0)), 0);
  const incoming = relevant.filter((tx) => tx.amount > 0).reduce((sum, tx) => sum + Number(tx.amount || 0), 0);
  const net = relevant.reduce((sum, tx) => sum + Number(tx.amount || 0), 0);
  return `
    <div class="snapshot-metrics">
      <div><span>Udgifter</span><strong class="amount-negative">${formatCurrency(expenses)}</strong></div>
      <div><span>Ind/flyt</span><strong class="amount-positive">${formatCurrency(incoming)}</strong></div>
      <div><span>Netto</span><strong class="${net >= 0 ? "amount-positive" : "amount-negative"}">${formatCurrency(net)}</strong></div>
    </div>
    <p class="mini-report-note">${relevant.length ? `${relevant.length} sommerhusrelaterede posteringer i perioden.` : "Ingen sommerhusposter i perioden."}</p>
  `;
}

function renderRecurringMiniReport() {
  const rows = getRecurringRows().slice(0, 4);
  if (!rows.length) return `<div class="empty-state compact-empty"><strong>Ikke nok historik</strong><span>Faste mønstre vises når noget går igen.</span></div>`;
  return `<div class="recurring-mini-list">${rows.map((row) => `<button type="button" data-action="open-drilldown" data-drilldown="merchant" data-id="${escapeHtml(row.name)}"><span><strong>${escapeHtml(row.name)}</strong><small>${row.months.length} måneder · ${row.count} poster</small></span><em>${formatCurrency(row.average)}</em></button>`).join("")}</div>`;
}

function renderDataQualityReport(rows, cleanup) {
  const periodized = getPeriodizationSummaryForRows(rows);
  const uncertain = getUncertainCategoryGroupsForRows(rows).length;
  const totalIssues = uncertain + cleanup.transferMatchCount + periodized.moved;
  return `
    <div class="quality-score ${totalIssues ? "attention" : "positive"}">
      <strong>${totalIssues ? "Tjek anbefales" : "Ser godt ud"}</strong>
      <span>${periodized.moved} periodiseret · ${uncertain} usikre grupper · ${cleanup.transferMatchCount} konto-match</span>
    </div>
    <div class="quality-bars">
      <span style="--width:${Math.min(100, periodized.moved * 2)}%"></span>
      <span style="--width:${Math.min(100, uncertain * 8)}%"></span>
      <span style="--width:${Math.min(100, cleanup.transferMatchCount * 6)}%"></span>
    </div>
  `;
}

function renderCockpitTile(label, value, helper, options = {}) {
  const attrs = options.action
    ? `data-action="${escapeHtml(options.action)}"${options.report ? ` data-report="${escapeHtml(options.report)}"` : ""}`
    : options.nav
      ? `data-nav="${escapeHtml(options.nav)}"`
      : "";
  const formatted = typeof value === "number" && label !== "Ryd op" ? formatCurrency(value) : String(value ?? "—");
  return `
    <button class="cockpit-tile ${options.kind || ""}" type="button" ${attrs}>
      <span>${escapeHtml(label)}</span>
      <strong>${escapeHtml(formatted)}</strong>
      <small>${escapeHtml(helper || "")}</small>
    </button>
  `;
}

function renderDailyFocus(cleanup) {
  const cleanupCount = cleanup.unknownCount + cleanup.transferMatchCount + cleanup.movementCount;
  const eb = getBankSyncState().enableBanking || {};
  const items = [
    cleanupCount
      ? { title: "Ryd op i data", text: `${cleanup.unknownCount} ukendte kategorier, ${cleanup.transferMatchCount} konto-match og ${cleanup.movementCount} mulige flytninger.`, nav: "oprydning", tone: "attention", cta: "Ryd op" }
      : { title: "Data ser rolig ud", text: "Ingen akutte oprydningsopgaver i den valgte periode.", nav: "rapporter", tone: "positive", cta: "Se analyser" },
    { title: "Bankdata", text: eb.lastSyncAt ? `Seneste sync ${formatDateTime(eb.lastSyncAt)} · ${eb.accounts?.length || 0} konti` : "Hent Open Banking-data for at holde overblikket frisk.", nav: "bank-sync", tone: eb.lastSyncAt ? "positive" : "attention", cta: "Bankdata" },
    { title: "Dyk dybere", text: "Se modtagere, faste udgifter, konti og overførsler uden at forlade perioden.", action: "open-report", report: "overblik", tone: "neutral", cta: "Analyser" },
  ];
  return items.map((item) => `
    <button class="daily-focus-card ${item.tone}" type="button" ${item.nav ? `data-nav="${escapeHtml(item.nav)}"` : `data-action="${escapeHtml(item.action)}" data-report="${escapeHtml(item.report)}"`}>
      <span>${escapeHtml(item.cta)}</span>
      <strong>${escapeHtml(item.title)}</strong>
      <small>${escapeHtml(item.text)}</small>
    </button>
  `).join("");
}

function renderAssetBase(liquid) {
  const investmentTransfers = getPeriodTransactions()
    .filter((tx) => tx.relationType === "investering" || tx.categoryId === "cat-savings")
    .reduce((sum, tx) => sum + Number(tx.amount || 0), 0);
  const rows = [
    { label: "Konti", value: formatCurrency(liquid.total), text: `${liquid.count} bankkonti`, active: true },
    { label: "Investeringer", value: "Senere", text: investmentTransfers ? `${formatCurrency(Math.abs(investmentTransfers))} flyttet i perioden` : "Kobles på senere", active: false },
    { label: "Ejendom", value: "Senere", text: "Klar som næste modul", active: false },
  ];
  return `
    <div class="asset-base">
      ${rows.map((row) => `
        <div class="asset-row ${row.active ? "" : "muted"}">
          <div><strong>${escapeHtml(row.label)}</strong><small>${escapeHtml(row.text)}</small></div>
          <em>${escapeHtml(row.value)}</em>
        </div>
      `).join("")}
    </div>
  `;
}

function renderRecentActivityList(rows) {
  if (!rows.length) return `<div class="empty-state"><strong>Ingen aktivitet</strong><span>Hent bankdata eller vælg en anden periode.</span></div>`;
  return `
    <div class="activity-list">
      ${rows.map((tx) => {
        const category = categoryById(tx.categoryId);
        return `
          <button class="activity-row" type="button" data-action="open-transaction" data-id="${escapeHtml(tx.id)}">
            <span class="activity-date">${escapeHtml(formatDate(transactionDateForView(tx)))}</span>
            <span class="activity-main"><strong>${escapeHtml(tx.description)}</strong><small>${escapeHtml(accountById(tx.accountId)?.name || "Ukendt konto")} · ${escapeHtml(category?.name || "Ukendt")}</small></span>
            <span class="activity-amount ${tx.amount >= 0 ? "amount-positive" : "amount-negative"}">${formatCurrency(tx.amount)}</span>
          </button>
        `;
      }).join("")}
    </div>
  `;
}

function getLiquidAssetsSummary() {
  const accounts = state.accounts || [];
  const total = accounts.reduce((sum, account) => sum + Number(account.balance || 0), 0);
  return { total, count: accounts.length, accounts };
}

function normalizeWealthSettings(wealth = {}) {
  const existingProperties = Array.isArray(wealth.properties) ? wealth.properties : [];
  const properties = DEFAULT_WEALTH_PROPERTIES.map((defaults) => {
    const existing = existingProperties.find((item) => item?.id === defaults.id) || {};
    return {
      ...defaults,
      ...existing,
      estimatedValue: Number(existing.estimatedValue ?? defaults.estimatedValue ?? 0) || 0,
      debt: Number(existing.debt ?? defaults.debt ?? 0) || 0,
    };
  });
  const pension = {
    ...DEFAULT_WEALTH_PENSION,
    ...(wealth.pension || {}),
    value: Number(wealth.pension?.value ?? 0) || 0,
  };
  return {
    primaryCashAccountId: wealth.primaryCashAccountId || "",
    properties,
    pension,
    deltaPortfolio: wealth.deltaPortfolio || null,
    history: normalizeWealthHistory(wealth.history),
  };
}

function normalizeWealthHistory(history = []) {
  return (Array.isArray(history) ? history : [])
    .map((item) => ({
      id: String(item.id || item.date || item.at || uid("wealth-snapshot")),
      at: item.at || item.date || new Date().toISOString(),
      date: String(item.date || item.at || "").slice(0, 10) || todayISO(),
      total: Number(item.total || 0) || 0,
      cash: Number(item.cash || 0) || 0,
      propertyEquity: Number(item.propertyEquity || 0) || 0,
      propertyValue: Number(item.propertyValue || 0) || 0,
      propertyDebt: Number(item.propertyDebt || 0) || 0,
      investments: Number(item.investments || 0) || 0,
      stockMarketValueDkk: Number(item.stockMarketValueDkk || 0) || 0,
      cryptoMarketValueDkk: Number(item.cryptoMarketValueDkk || 0) || 0,
      pension: Number(item.pension || 0) || 0,
      openPositions: Number(item.openPositions || 0) || 0,
      pricedPositions: Number(item.pricedPositions || 0) || 0,
      source: item.source || "manual",
    }))
    .filter((item) => isIsoDate(item.date) && Number.isFinite(item.total))
    .sort((a, b) => a.date.localeCompare(b.date) || a.at.localeCompare(b.at))
    .slice(-500);
}

function getWealthSettings() {
  state.settings.wealth = normalizeWealthSettings(state.settings.wealth);
  if (!state.settings.wealth.primaryCashAccountId) {
    state.settings.wealth.primaryCashAccountId = inferPrimaryCashAccount()?.id || state.accounts[0]?.id || "";
  }
  return state.settings.wealth;
}

function inferPrimaryCashAccount() {
  return state.accounts.find((account) => /løn|loen|sparekassen kronjylland/i.test(account.name || "") && !/mastercard|kredit|depot/i.test(`${account.name} ${account.type}`))
    || state.accounts.find((account) => /bankkonto/i.test(account.type || "") && !/mastercard|kredit|depot/i.test(`${account.name} ${account.type}`))
    || state.accounts[0];
}

function getPrimaryCashAccount() {
  const wealth = getWealthSettings();
  return accountById(wealth.primaryCashAccountId) || inferPrimaryCashAccount() || null;
}

function getWealthSummary() {
  const wealth = getWealthSettings();
  const cashAccount = getPrimaryCashAccount();
  const cash = Number(cashAccount?.balance || 0);
  const properties = wealth.properties.map((property) => {
    const estimatedValue = Number(property.estimatedValue || 0);
    const debt = Number(property.debt || 0);
    return {
      ...property,
      estimatedValue,
      debt,
      equity: estimatedValue - debt,
      complete: estimatedValue > 0 || debt > 0,
    };
  });
  const propertyValue = properties.reduce((sum, property) => sum + property.estimatedValue, 0);
  const propertyDebt = properties.reduce((sum, property) => sum + property.debt, 0);
  const propertyEquity = properties.reduce((sum, property) => sum + property.equity, 0);
  const deltaPortfolio = wealth.deltaPortfolio || null;
  const investments = Number(deltaPortfolio?.summary?.marketValueDkk || deltaPortfolio?.summary?.openCostDkk || 0);
  const pensionInfo = wealth.pension || DEFAULT_WEALTH_PENSION;
  const pension = Number(pensionInfo.value || 0);
  const total = cash + propertyEquity + investments + pension;
  return { cash, cashAccount, properties, propertyValue, propertyDebt, propertyEquity, investments, pension, pensionInfo, total, deltaPortfolio };
}

function buildWealthSnapshotFromSummary(summary, source = "current") {
  const at = new Date().toISOString();
  const deltaSummary = summary.deltaPortfolio?.summary || {};
  const round = (value) => Math.round((Number(value || 0) + Number.EPSILON) * 100) / 100;
  return {
    id: `wealth-${at.slice(0, 10)}`,
    at,
    date: at.slice(0, 10),
    total: round(summary.total),
    cash: round(summary.cash),
    propertyEquity: round(summary.propertyEquity),
    propertyValue: round(summary.propertyValue),
    propertyDebt: round(summary.propertyDebt),
    investments: round(summary.investments),
    stockMarketValueDkk: round(deltaSummary.stockMarketValueDkk || deltaSummary.stockCostDkk || 0),
    cryptoMarketValueDkk: round(deltaSummary.cryptoMarketValueDkk || deltaSummary.cryptoCostDkk || 0),
    pension: round(summary.pension),
    openPositions: Number(deltaSummary.openPositions || 0),
    pricedPositions: Number(deltaSummary.pricedPositions || 0),
    source,
  };
}

function captureWealthSnapshot(source = "manual") {
  const wealth = getWealthSettings();
  const snapshot = buildWealthSnapshotFromSummary(getWealthSummary(), source);
  const history = normalizeWealthHistory(wealth.history).filter((item) => item.date !== snapshot.date);
  wealth.history = normalizeWealthHistory([...history, snapshot]);
  return snapshot;
}

function getWealthHistorySeries(summary = getWealthSummary()) {
  const wealth = getWealthSettings();
  const current = buildWealthSnapshotFromSummary(summary, "current");
  const rows = normalizeWealthHistory(wealth.history).filter((item) => item.date !== current.date);
  return normalizeWealthHistory([...rows, current]).slice(-90);
}

function renderWealthView() {
  const summary = getWealthSummary();
  return `
    ${renderWealthHistoryHero(summary)}
    <section class="wealth-layout">
      <aside class="wealth-overview-panel" aria-label="Samlet formue">
        <p class="eyebrow">Samlet formue</p>
        <h2>${formatCurrency(summary.total)}</h2>
        <p>Kontanter, boligformue, investeringer og pension. Småpositioner skjules i listerne, men tæller med i totalen.</p>
        <div class="wealth-stack">
          ${renderWealthLine("Kontanter", summary.cash, summary.cashAccount?.name || "Primær lønkonto")}
          ${renderWealthLine("Boligformue", summary.propertyEquity, `${formatCurrency(summary.propertyValue)} vurdering · ${formatCurrency(summary.propertyDebt)} restgæld`)}
          ${renderWealthLine("Aktier", summary.deltaPortfolio ? (summary.deltaPortfolio.summary.stockMarketValueDkk || summary.deltaPortfolio.summary.stockCostDkk || 0) : 0, summary.deltaPortfolio ? `Delta · ${summary.deltaPortfolio.summary.stockPositions || 0} positioner` : "Importer Delta CSV", !summary.deltaPortfolio)}
          ${renderWealthLine("Crypto", summary.deltaPortfolio ? (summary.deltaPortfolio.summary.cryptoMarketValueDkk || summary.deltaPortfolio.summary.cryptoCostDkk || 0) : 0, summary.deltaPortfolio ? `Delta · ${summary.deltaPortfolio.summary.cryptoPositions || 0} positioner` : "Importer Delta CSV", !summary.deltaPortfolio)}
          ${renderWealthLine("Pension", summary.pension, summary.pensionInfo?.provider || "Pension", !summary.pension)}
        </div>
      </aside>

      <div class="wealth-main-panel">
        <section class="panel pad wealth-section">
          <div class="section-heading clean-heading">
            <div>
              <h2>Bolig</h2>
              <p>Indtast cirka-vurdering og restgæld. Friværdi beregnes som vurdering minus restgæld.</p>
            </div>
            <div class="wealth-total-pill"><span>Boligformue</span><strong>${formatCurrency(summary.propertyEquity)}</strong></div>
          </div>
          <div class="property-wealth-list">
            ${summary.properties.map(renderPropertyWealthRow).join("")}
          </div>
        </section>

        ${renderDeltaInvestmentModule(summary.deltaPortfolio)}

        <section class="wealth-secondary-grid">
          <div class="panel pad wealth-section">
            <div class="section-heading clean-heading">
              <div>
                <h2>Kontanter</h2>
                <p>Bruger kun beholdningen fra den primære lønkonto.</p>
              </div>
            </div>
            <label class="field">
              <span class="label">Primær lønkonto</span>
              <select class="select" id="wealth-primary-account">
                ${state.accounts.map((account) => option(account.id, `${account.name} · ${formatCurrency(Number(account.balance || 0))}`, summary.cashAccount?.id === account.id)).join("")}
              </select>
            </label>
            <div class="wealth-cash-readout">
              <span>${escapeHtml(summary.cashAccount?.name || "Ingen konto valgt")}</span>
              <strong>${formatCurrency(summary.cash)}</strong>
            </div>
          </div>

          <div class="panel pad wealth-section pension-module">
            <div class="section-heading clean-heading">
              <div>
                <h2>Pension</h2>
                <p>Foreløbig pensionsværdi. Den kan opdateres manuelt, når PFA-tallet ændrer sig.</p>
              </div>
              <span class="pill muted">PFA</span>
            </div>
            <label class="field">
              <span class="label">Udbyder</span>
              <input class="input" id="wealth-pension-provider" value="${escapeHtml(summary.pensionInfo?.provider || "PFA")}" />
            </label>
            <label class="field">
              <span class="label">Aktuel pensionsværdi</span>
              <input class="input" inputmode="decimal" id="wealth-pension-value" value="${escapeHtml(summary.pension ? formatAmountInput(summary.pension) : "")}" placeholder="${ui.privacyMode ? "Skjult" : "fx 865.000"}" ${privacyInputAttrs()} />
            </label>
            <div class="wealth-cash-readout pension-readout">
              <span>${escapeHtml(summary.pensionInfo?.provider || "Pension")}</span>
              <strong>${formatCurrency(summary.pension)}</strong>
            </div>
          </div>
        </section>
      </div>
    </section>
  `;
}

function renderWealthHistoryHero(summary) {
  const rows = getWealthHistorySeries(summary);
  const first = rows[0] || null;
  const previous = rows.length > 1 ? rows[rows.length - 2] : null;
  const latest = rows.at(-1) || buildWealthSnapshotFromSummary(summary, "current");
  const totalDelta = first ? latest.total - first.total : 0;
  const periodLabel = rows.length > 1 ? `${formatDate(first.date)} → ${formatDate(latest.date)}` : "Første måling";
  const previousDelta = previous ? latest.total - previous.total : 0;
  const driverRows = [
    { label: "Aktier", value: latest.stockMarketValueDkk, delta: first ? latest.stockMarketValueDkk - first.stockMarketValueDkk : 0, tone: "stocks" },
    { label: "Crypto", value: latest.cryptoMarketValueDkk, delta: first ? latest.cryptoMarketValueDkk - first.cryptoMarketValueDkk : 0, tone: "crypto" },
    { label: "Kontanter", value: latest.cash, delta: first ? latest.cash - first.cash : 0, tone: "cash" },
    { label: "Pension", value: latest.pension, delta: first ? latest.pension - first.pension : 0, tone: "pension" },
  ];
  return `
    <section class="wealth-history-hero section" aria-label="Formueudvikling">
      <div class="wealth-history-copy">
        <p class="eyebrow">Formueudvikling</p>
        <h2>${formatCurrency(latest.total)}</h2>
        <p>${rows.length > 1 ? `${formatSignedCurrency(totalDelta)} siden første måling. Seneste ændring: ${formatSignedCurrency(previousDelta)}.` : "Historikken starter, når kurserne opdateres. Grafen viser seneste måling og bygger videre fremover."}</p>
        <div class="wealth-history-meta">
          <span>${escapeHtml(periodLabel)}</span>
          <span>${rows.length} måling${rows.length === 1 ? "" : "er"}</span>
          <span>${latest.pricedPositions || 0}/${latest.openPositions || 0} positioner</span>
        </div>
      </div>
      <div class="wealth-history-chart-wrap">
        ${renderWealthHistoryChart(rows)}
      </div>
      <div class="wealth-history-drivers" aria-label="Drivere i formueudviklingen">
        ${driverRows.map((row) => `
          <div class="wealth-driver ${escapeHtml(row.tone)}">
            <span>${escapeHtml(row.label)}</span>
            <strong>${formatCurrency(row.value)}</strong>
            <small class="${row.delta >= 0 ? "positive" : "negative"}">${rows.length > 1 ? formatSignedCurrency(row.delta) : "—"}</small>
          </div>`).join("")}
      </div>
    </section>
  `;
}

function renderWealthHistoryChart(rows) {
  if (!rows.length) return "";
  const width = 720;
  const height = 230;
  const pad = 22;
  const totals = rows.map((row) => Number(row.total || 0));
  let min = Math.min(...totals);
  let max = Math.max(...totals);
  if (min === max) {
    min = Math.max(0, min * 0.96);
    max = max * 1.04 || 1;
  }
  const pointFor = (row, index) => {
    const x = rows.length === 1 ? width / 2 : pad + (index / (rows.length - 1)) * (width - pad * 2);
    const y = height - pad - ((Number(row.total || 0) - min) / Math.max(1, max - min)) * (height - pad * 2);
    return { x, y };
  };
  const points = rows.map(pointFor);
  const linePath = points.map((point, index) => `${index ? "L" : "M"}${point.x.toFixed(1)} ${point.y.toFixed(1)}`).join(" ");
  const areaPath = `${linePath} L ${points.at(-1).x.toFixed(1)} ${height - pad} L ${points[0].x.toFixed(1)} ${height - pad} Z`;
  const first = rows[0];
  const latest = rows.at(-1);
  return `
    <svg class="wealth-history-chart" viewBox="0 0 ${width} ${height}" role="img" aria-label="Formue fra ${escapeHtml(formatDate(first.date))} til ${escapeHtml(formatDate(latest.date))}">
      <defs>
        <linearGradient id="wealthHistoryFill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stop-color="currentColor" stop-opacity="0.28" />
          <stop offset="100%" stop-color="currentColor" stop-opacity="0.02" />
        </linearGradient>
      </defs>
      <line x1="${pad}" y1="${pad}" x2="${pad}" y2="${height - pad}" class="wealth-chart-axis" />
      <line x1="${pad}" y1="${height - pad}" x2="${width - pad}" y2="${height - pad}" class="wealth-chart-axis" />
      <path d="${areaPath}" class="wealth-chart-area" />
      <path d="${linePath}" class="wealth-chart-line" />
      ${points.map((point, index) => `<circle cx="${point.x.toFixed(1)}" cy="${point.y.toFixed(1)}" r="${index === points.length - 1 ? 5.5 : 3.5}" class="wealth-chart-dot" />`).join("")}
      <text x="${pad}" y="18" class="wealth-chart-label">${escapeHtml(formatCurrency(max))}</text>
      <text x="${pad}" y="${height - 4}" class="wealth-chart-label">${escapeHtml(formatCurrency(min))}</text>
      <text x="${width - pad}" y="${height - 4}" text-anchor="end" class="wealth-chart-label">${escapeHtml(formatDate(latest.date))}</text>
    </svg>
  `;
}

function formatSignedCurrency(value) {
  const amount = Number(value || 0);
  if (Math.abs(amount) < 0.5) return formatCurrency(0);
  return `${amount > 0 ? "+" : "−"}${formatCurrency(Math.abs(amount))}`;
}

function renderDeltaInvestmentModule(deltaPortfolio) {
  if (!deltaPortfolio) {
    return `
      <div class="panel pad wealth-section investment-module">
        <div class="section-heading clean-heading">
          <div>
            <h2>Investeringer</h2>
            <p>Importer Delta-CSV, så viser vi aktier og crypto adskilt med aktuel værdi og afkast.</p>
          </div>
          <button class="button primary" type="button" data-action="trigger-delta-import">Importer Delta</button>
        </div>
        <input class="hidden-file" id="delta-csv-file" type="file" accept=".csv,text/csv,text/plain" />
        <div class="empty-state compact-empty"><strong>Delta er klar</strong><span>Vælg eksportfilen fra Delta. Herefter hentes gratis kurser via Stooq/Yahoo/CoinGecko.</span></div>
      </div>
    `;
  }
  recomputeDeltaPortfolioSummary(deltaPortfolio);
  const holdings = deltaPortfolio.holdings || [];
  const stocks = holdings.filter((item) => item.type !== "CRYPTO");
  const crypto = holdings.filter((item) => item.type === "CRYPTO");
  const summary = deltaPortfolio.summary || {};
  const value = Number(summary.marketValueDkk || summary.openCostDkk || 0);
  const gain = summary.gainDkk;
  const gainKind = Number(gain || 0) >= 0 ? "positive" : "negative";
  return `
    <div class="panel pad wealth-section investment-module investment-module-premium">
      <div class="section-heading clean-heading">
        <div>
          <h2>Investeringer</h2>
          <p>Aktier og crypto er adskilt. Delta er kilde til beholdninger/kostbasis; kurser hentes gratis.</p>
        </div>
        <div class="actions">
          <button class="button primary" type="button" data-action="refresh-market-prices">Opdatér kurser</button>
          <button class="button ghost" type="button" data-action="trigger-delta-import">Ny Delta CSV</button>
        </div>
      </div>
      <input class="hidden-file" id="delta-csv-file" type="file" accept=".csv,text/csv,text/plain" />

      <div class="portfolio-hero separated">
        <div>
          <span>Samlet aktuel værdi</span>
          <strong>${formatCurrency(value)}</strong>
          <small>${summary.pricedPositions || 0}/${summary.openPositions || 0} positioner med kurser · ${deltaPortfolio.marketPricesUpdatedAt ? `opdateret ${formatDate(deltaPortfolio.marketPricesUpdatedAt.slice(0, 10))}` : "kurser mangler"}</small>
        </div>
        <div class="${gainKind}">
          <span>Samlet afkast</span>
          <strong>${gain == null ? "—" : `${gain >= 0 ? "+" : ""}${formatCurrency(gain)}`}</strong>
          <small>${summary.gainPct == null ? "Kostbasis vises indtil kurser er hentet" : `${gain >= 0 ? "+" : ""}${formatPercent(summary.gainPct)}`}</small>
        </div>
      </div>

      <div class="portfolio-split-bar" aria-label="Fordeling mellem aktier og crypto">
        <span style="--width:${portfolioShare(summary.stockMarketValueDkk || summary.stockCostDkk, value || summary.openCostDkk)}%"></span>
        <em style="--width:${portfolioShare(summary.cryptoMarketValueDkk || summary.cryptoCostDkk, value || summary.openCostDkk)}%"></em>
      </div>

      <div class="portfolio-category-grid">
        ${renderHoldingSection({
          title: "Aktier",
          subtitle: `${summary.stockPositions || stocks.length} positioner`,
          value: summary.stockMarketValueDkk || summary.stockCostDkk || 0,
          cost: summary.stockCostDkk || 0,
          gain: summary.stockGainDkk,
          gainPct: summary.stockGainPct,
          holdings: stocks,
          tone: "stocks",
        })}
        ${renderHoldingSection({
          title: "Crypto",
          subtitle: `${summary.cryptoPositions || crypto.length} positioner`,
          value: summary.cryptoMarketValueDkk || summary.cryptoCostDkk || 0,
          cost: summary.cryptoCostDkk || 0,
          gain: summary.cryptoGainDkk,
          gainPct: summary.cryptoGainPct,
          holdings: crypto,
          tone: "crypto",
        })}
      </div>
      <p class="helper">Positioner under 1.000 kr. er skjult fra listen, men tæller stadig med i totalerne. Tryk “Opdatér kurser” for at hente seneste gratis aktie- og cryptokurser.</p>
    </div>
  `;
}

function renderHoldingSection({ title, subtitle, value, cost, gain, gainPct, holdings, tone }) {
  const minimumVisibleValue = 1000;
  const visibleHoldings = holdings.filter((holding) => Number(holding.marketValueDkk || holding.costDkk || 0) >= minimumVisibleValue);
  const hiddenCount = holdings.length - visibleHoldings.length;
  const rows = visibleHoldings.slice(0, 12);
  const max = Math.max(1, ...rows.map((item) => Number(item.marketValueDkk || item.costDkk || 0)));
  const kind = gain == null ? "muted" : gain >= 0 ? "positive" : "negative";
  return `
    <section class="asset-class-card ${escapeHtml(tone)}">
      <div class="asset-class-head">
        <div>
          <span>${escapeHtml(subtitle)}${hiddenCount ? ` · ${hiddenCount} under 1.000 kr. skjult` : ""}</span>
          <h3>${escapeHtml(title)}</h3>
        </div>
        <div class="asset-class-value ${kind}">
          <strong>${formatCurrency(value)}</strong>
          <small>${gain == null ? `Kostbasis ${formatCurrency(cost)}` : `${gain >= 0 ? "+" : ""}${formatCurrency(gain)} · ${gainPct == null ? "—" : `${gain >= 0 ? "+" : ""}${formatPercent(gainPct)}`}`}</small>
        </div>
      </div>
      <div class="investment-bars premium-bars">
        ${rows.length ? rows.map((holding) => renderHoldingRow(holding, max)).join("") : `<div class="empty-state compact-empty"><strong>Ingen ${escapeHtml(title.toLowerCase())} over 1.000 kr.</strong><span>Småpositioner er skjult fra overblikket, men tæller stadig med i totalen.</span></div>`}
      </div>
    </section>
  `;
}

function portfolioShare(part, total) {
  return Math.max(0, Math.min(100, total ? Math.round((Number(part || 0) / Number(total || 1)) * 100) : 0));
}

function renderHoldingRow(holding, max) {
  const current = Number(holding.marketValueDkk || 0);
  const basis = Number(holding.costDkk || 0);
  const displayValue = current || basis;
  const gain = holding.gainDkk;
  const pct = holding.gainPct;
  const priced = current > 0;
  const kind = gain == null ? "muted" : gain >= 0 ? "positive" : "negative";
  return `
    <button class="investment-bar-row premium ${kind}" type="button" data-action="noop">
      <span class="holding-name"><strong>${escapeHtml(holding.symbol)}</strong><small>${escapeHtml(holding.name)} · ${formatNumber(holding.quantity)} stk.</small></span>
      <i><b style="--width:${Math.max(4, Math.round((displayValue / max) * 100))}%"></b></i>
      <span class="holding-return"><strong>${formatCurrency(displayValue)}</strong><small>${priced ? `${gain >= 0 ? "+" : ""}${formatCurrency(gain)} · ${pct == null ? "—" : `${gain >= 0 ? "+" : ""}${formatPercent(pct)}`}` : "mangler kurs"}</small></span>
    </button>
  `;
}

function formatNumber(value) {
  if (isPrivacyMode()) return privateNumberLabel();
  return new Intl.NumberFormat("da-DK", { maximumFractionDigits: Math.abs(Number(value || 0)) >= 10 ? 2 : 6 }).format(Number(value || 0));
}

async function readDeltaCsvFile(file) {
  if (!file) return;
  try {
    const content = await readFileAsText(file);
    const portfolio = parseDeltaPortfolioCsv(content, file.name);
    const wealth = getWealthSettings();
    wealth.deltaPortfolio = portfolio;
    saveState();
    render();
    notify(`Delta importeret: ${portfolio.summary.openPositions} åbne positioner. Henter dagens kurser...`);
    await refreshDeltaMarketPrices({ silent: true });
  } catch (error) {
    console.error(error);
    notify(`Delta CSV kunne ikke importeres: ${error.message}`, "danger");
  }
}

const CLIENT_CRYPTO_PRICE_IDS = Object.freeze({
  BTC: "bitcoin",
  XBT: "bitcoin",
  ETH: "ethereum",
  SOL: "solana",
  XRP: "ripple",
  ADA: "cardano",
  DOGE: "dogecoin",
  SHIB: "shiba-inu",
  DOT: "polkadot",
  AVAX: "avalanche-2",
  MATIC: "matic-network",
  POL: "polygon-ecosystem-token",
  LINK: "chainlink",
  UNI: "uniswap",
  LTC: "litecoin",
  BCH: "bitcoin-cash",
  ETC: "ethereum-classic",
  ATOM: "cosmos",
  NEAR: "near",
  FIL: "filecoin",
  ICP: "internet-computer",
  HBAR: "hedera-hashgraph",
  ARB: "arbitrum",
  OP: "optimism",
  AAVE: "aave",
  BNB: "binancecoin",
  XLM: "stellar",
  TRX: "tron",
  MIOTA: "iota",
  IOTA: "iota",
  MKR: "maker",
  YFI: "yearn-finance",
  DODO: "dodo",
  FTT: "ftx-token",
  APY: "apy-finance",
  PAY: "tenx",
  POWR: "power-ledger",
  EWT: "energy-web-token",
  C20: "crypto20",
  USDT: "tether",
  USDC: "usd-coin",
  DAI: "dai",
});

async function refreshDeltaMarketPrices({ silent = false } = {}) {
  const portfolio = getWealthSettings().deltaPortfolio;
  if (!portfolio?.holdings?.length) {
    notify("Importer Delta CSV først.", "danger");
    return;
  }
  try {
    if (!silent) notify("Henter friske kurser…");
    const data = await apiFetch("/api/market-prices", {
      method: "POST",
      body: { force: true, holdings: portfolio.holdings.map(({ symbol, type, exchange, name }) => ({ symbol, type, exchange, name })) },
    });
    const serverQuotes = data.quotes || [];
    const clientCryptoQuotes = await lookupClientCryptoPricesForMissing(portfolio.holdings, serverQuotes);
    const priceStats = applyMarketPricesToDeltaPortfolio(portfolio, mergeMarketQuotes(serverQuotes, clientCryptoQuotes));
    portfolio.marketPricesUpdatedAt = data.asOf || new Date().toISOString();
    portfolio.fx = data.fx || portfolio.fx || {};
    recomputeDeltaPortfolioSummary(portfolio);
    captureWealthSnapshot("market-prices");
    saveState();
    render();
    const suffix = `${priceStats.kept ? ` · ${priceStats.kept} beholdt seneste kendte kurs` : ""}${priceStats.missing ? ` · ${priceStats.missing} mangler stadig` : ""}`;
    if (!silent) notify(`Kurser opdateret: ${portfolio.summary.pricedPositions}/${portfolio.summary.openPositions} positioner${suffix}.`);
    else notify(`Delta og dagens kurser er opdateret: ${portfolio.summary.pricedPositions}/${portfolio.summary.openPositions} positioner${suffix}.`);
  } catch (error) {
    console.error(error);
    notify(`Kunne ikke hente markedskurser: ${error.message}`, "danger");
  }
}

async function lookupClientCryptoPricesForMissing(holdings, quotes) {
  const serverBySymbol = new Map((quotes || []).map((quote) => [normalizeHoldingSymbol(quote.normalizedSymbol || quote.symbol), quote]));
  const missingCrypto = (holdings || []).filter((holding) => {
    if (String(holding.type || "").toUpperCase() !== "CRYPTO") return false;
    const quote = serverBySymbol.get(normalizeHoldingSymbol(holding.symbol));
    return !Number(quote?.priceDkk || 0);
  });
  const idsBySymbol = new Map();
  for (const holding of missingCrypto) {
    const symbol = normalizeHoldingSymbol(holding.symbol);
    const id = CLIENT_CRYPTO_PRICE_IDS[symbol];
    if (id) idsBySymbol.set(symbol, id);
  }
  if (!idsBySymbol.size) return [];
  try {
    const ids = Array.from(new Set(idsBySymbol.values()));
    const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${encodeURIComponent(ids.join(","))}&vs_currencies=dkk,usd&include_24hr_change=true`, { headers: { Accept: "application/json" } });
    if (!response.ok) return [];
    const data = await response.json();
    const asOf = new Date().toISOString();
    return missingCrypto.map((holding) => {
      const symbol = normalizeHoldingSymbol(holding.symbol);
      const id = idsBySymbol.get(symbol);
      const price = id ? data[id] : null;
      const priceDkk = Number(price?.dkk || 0);
      if (!Number.isFinite(priceDkk) || priceDkk <= 0) return null;
      return {
        symbol: holding.symbol,
        normalizedSymbol: symbol,
        type: "CRYPTO",
        price: Number(price.usd || 0),
        currency: "USD",
        priceDkk,
        changePct: Number.isFinite(Number(price.dkk_24h_change)) ? Number(price.dkk_24h_change) : null,
        asOf,
        source: "CoinGecko",
      };
    }).filter(Boolean);
  } catch (error) {
    console.warn("CoinGecko browser-fallback fejlede", error);
    return [];
  }
}

function mergeMarketQuotes(serverQuotes, fallbackQuotes) {
  const merged = [...(serverQuotes || [])];
  const indexBySymbol = new Map();
  merged.forEach((quote, index) => indexBySymbol.set(normalizeHoldingSymbol(quote.normalizedSymbol || quote.symbol), index));
  for (const quote of fallbackQuotes || []) {
    const key = normalizeHoldingSymbol(quote.normalizedSymbol || quote.symbol);
    const existingIndex = indexBySymbol.get(key);
    if (existingIndex == null) {
      indexBySymbol.set(key, merged.length);
      merged.push(quote);
      continue;
    }
    if (!Number(merged[existingIndex]?.priceDkk || 0) && Number(quote.priceDkk || 0) > 0) merged[existingIndex] = quote;
  }
  return merged;
}

function applyMarketPricesToDeltaPortfolio(portfolio, quotes) {
  const bySymbol = new Map();
  for (const quote of quotes || []) {
    bySymbol.set(String(quote.symbol || ""), quote);
    bySymbol.set(normalizeHoldingSymbol(quote.normalizedSymbol || quote.symbol), quote);
  }
  const stats = { updated: 0, kept: 0, missing: 0 };
  for (const holding of portfolio.holdings || []) {
    const quote = bySymbol.get(holding.symbol) || bySymbol.get(normalizeHoldingSymbol(holding.symbol));
    if (!quote || !Number(quote.priceDkk)) {
      const hadPrice = Number(holding.marketPriceDkk || 0) > 0;
      holding.priceSource = quote?.source || holding.priceSource || "";
      holding.priceError = quote?.error || "Ingen kurs";
      if (hadPrice) {
        stats.kept += 1;
        continue;
      }
      holding.marketPrice = 0;
      holding.marketCurrency = "";
      holding.marketPriceDkk = 0;
      holding.marketValueDkk = 0;
      holding.gainDkk = null;
      holding.gainPct = null;
      holding.priceAsOf = "";
      holding.changePct = null;
      stats.missing += 1;
      continue;
    }
    holding.marketPrice = Number(quote.price || 0);
    holding.marketCurrency = quote.currency || "DKK";
    holding.marketPriceDkk = Number(quote.priceDkk || 0);
    holding.marketValueDkk = holding.quantity * holding.marketPriceDkk;
    holding.gainDkk = holding.marketValueDkk - Number(holding.costDkk || 0);
    holding.gainPct = Number(holding.costDkk || 0) > 0 ? holding.gainDkk / Number(holding.costDkk || 0) : null;
    holding.priceAsOf = quote.asOf || "";
    holding.priceSource = quote.source || "";
    holding.priceError = quote.error || "";
    holding.changePct = Number.isFinite(Number(quote.changePct)) ? Number(quote.changePct) : null;
    stats.updated += 1;
  }
  return stats;
}

function normalizeHoldingSymbol(symbol) {
  return String(symbol || "").trim().replace(/^\$+/, "").replace(/\*+$/, "").toUpperCase();
}

function recomputeDeltaPortfolioSummary(portfolio) {
  const holdings = portfolio.holdings || [];
  const sum = (rows, field) => rows.reduce((total, item) => total + Number(item[field] || 0), 0);
  const stocks = holdings.filter((item) => item.type !== "CRYPTO");
  const crypto = holdings.filter((item) => item.type === "CRYPTO");
  const priced = holdings.filter((item) => Number(item.marketValueDkk || 0) > 0);
  const openCostDkk = sum(holdings, "costDkk");
  const stockCostDkk = sum(stocks, "costDkk");
  const cryptoCostDkk = sum(crypto, "costDkk");
  const marketValueDkk = sum(holdings, "marketValueDkk");
  const stockMarketValueDkk = sum(stocks, "marketValueDkk");
  const cryptoMarketValueDkk = sum(crypto, "marketValueDkk");
  const hasPrices = marketValueDkk > 0;
  const stockHasPrices = stockMarketValueDkk > 0;
  const cryptoHasPrices = cryptoMarketValueDkk > 0;
  const stockGainDkk = stockHasPrices ? stockMarketValueDkk - stockCostDkk : null;
  const cryptoGainDkk = cryptoHasPrices ? cryptoMarketValueDkk - cryptoCostDkk : null;
  portfolio.summary = {
    ...(portfolio.summary || {}),
    openPositions: holdings.length,
    stockPositions: stocks.length,
    cryptoPositions: crypto.length,
    pricedPositions: priced.length,
    openCostDkk,
    stockCostDkk,
    cryptoCostDkk,
    marketValueDkk,
    stockMarketValueDkk,
    cryptoMarketValueDkk,
    stockGainDkk,
    cryptoGainDkk,
    stockGainPct: stockHasPrices && stockCostDkk > 0 ? stockGainDkk / stockCostDkk : null,
    cryptoGainPct: cryptoHasPrices && cryptoCostDkk > 0 ? cryptoGainDkk / cryptoCostDkk : null,
    gainDkk: hasPrices ? marketValueDkk - openCostDkk : null,
    gainPct: hasPrices && openCostDkk > 0 ? (marketValueDkk - openCostDkk) / openCostDkk : null,
    unpricedPositions: holdings.length - priced.length,
  };
  portfolio.holdings.sort((a, b) => (Number(b.marketValueDkk || b.costDkk || 0) - Number(a.marketValueDkk || a.costDkk || 0)));
  return portfolio.summary;
}

function parseDeltaPortfolioCsv(content, fileName = "Delta CSV") {
  const parsed = parseCsv(content || "");
  const rows = parsed.rows || [];
  if (!rows.length || !parsed.headers.includes("Way") || !parsed.headers.includes("Base currency (name)")) {
    throw new Error("Filen ligner ikke en Delta-porteføljeeksport.");
  }
  const fx = { DKK: 1, USD: 6.95, EUR: 7.46, NOK: 0.64, SEK: 0.67, GBP: 8.7, BTC: 280000, ETH: 14000, USDT: 6.95, BNB: 2100 };
  const positions = new Map();
  let trades = 0;
  let lastDate = "";

  for (const row of rows) {
    const type = String(row["Base type"] || "").toUpperCase();
    if (!["STOCK", "FUND", "CRYPTO"].includes(type)) continue;
    const way = String(row.Way || "").toUpperCase();
    if (!["BUY", "SELL", "DEPOSIT", "WITHDRAW", "TRANSFER"].includes(way)) continue;
    const quantity = Number(row["Base amount"] || 0);
    const quoteAmount = Number(row["Quote amount"] || 0) || 0;
    if (!Number.isFinite(quantity) || quantity <= 0) continue;

    const { symbol, name } = parseDeltaAssetName(row["Base currency (name)"] || "");
    const quoteCurrency = String(row["Quote currency"] || "DKK").toUpperCase();
    const quoteDkk = quoteAmount * (fx[quoteCurrency] || 1);
    const feeAmount = Number(row["Fee amount"] || 0) || 0;
    const feeCurrency = String(row["Fee currency (name)"] || quoteCurrency).replace(/.*\(([^)]+)\).*/, "$1").toUpperCase();
    const feeDkk = feeAmount * (fx[feeCurrency] || fx[quoteCurrency] || 1);
    const date = String(row.Date || "").slice(0, 10);
    if (date > lastDate) lastDate = date;

    const position = positions.get(symbol) || {
      symbol,
      name,
      type,
      exchange: row.Exchange || "",
      quoteCurrency,
      quantity: 0,
      costDkk: 0,
      boughtDkk: 0,
      soldDkk: 0,
      trades: 0,
      lastDate: "",
    };
    position.trades += 1;
    position.lastDate = date || position.lastDate;
    trades += 1;

    if (way === "BUY") {
      position.quantity += quantity;
      position.costDkk += quoteDkk + feeDkk;
      position.boughtDkk += quoteDkk + feeDkk;
    } else if (way === "SELL") {
      const averageCost = position.quantity > 0 ? position.costDkk / position.quantity : 0;
      const soldQuantity = Math.min(quantity, Math.max(0, position.quantity));
      position.quantity -= quantity;
      position.costDkk -= averageCost * soldQuantity;
      position.soldDkk += quoteDkk - feeDkk;
    } else if (way === "DEPOSIT") {
      position.quantity += quantity;
    } else if (way === "WITHDRAW") {
      const averageCost = position.quantity > 0 ? position.costDkk / position.quantity : 0;
      const movedQuantity = Math.min(quantity, Math.max(0, position.quantity));
      position.quantity -= quantity;
      position.costDkk -= averageCost * movedQuantity;
    }

    if (Math.abs(position.quantity) < 0.000001) {
      position.quantity = 0;
      position.costDkk = 0;
    }
    positions.set(symbol, position);
  }

  const holdings = Array.from(positions.values())
    .filter((position) => position.quantity > 0.000001)
    .map((position) => ({ ...position, costDkk: Math.max(0, position.costDkk) }));
  const portfolio = {
    source: "delta-csv",
    sourceFile: fileName,
    importedAt: new Date().toISOString(),
    lastTradeDate: lastDate,
    holdings,
    summary: { trades, fxNote: "Kostbasis er beregnet fra Delta-handler. Aktuel værdi hentes fra Stooq/Yahoo/CoinGecko." },
  };
  recomputeDeltaPortfolioSummary(portfolio);
  return portfolio;
}

function parseDeltaAssetName(value) {
  const text = String(value || "").trim();
  const match = text.match(/^([^\s]+)\s*\((.*)\)$/);
  if (!match) return { symbol: text || "?", name: text || "Ukendt" };
  return { symbol: match[1], name: match[2] || match[1] };
}

function renderWealthLine(label, value, detail, muted = false) {
  return `
    <div class="wealth-line ${muted ? "muted" : ""}">
      <span><strong>${escapeHtml(label)}</strong><small>${escapeHtml(detail || "")}</small></span>
      <em>${muted ? "—" : formatCurrency(value)}</em>
    </div>
  `;
}

function renderPropertyWealthRow(property) {
  return `
    <div class="property-wealth-row">
      <div class="property-identity">
        <span>${escapeHtml(property.name)}</span>
        <strong>${formatCurrency(property.equity)}</strong>
        <small>${property.complete ? "Friværdi = vurdering minus restgæld" : "Udfyld vurdering og restgæld"}</small>
      </div>
      <label class="field">
        <span class="label">Nogenlunde vurdering</span>
        <input class="input" inputmode="decimal" data-wealth-property="${escapeHtml(property.id)}" data-wealth-field="estimatedValue" value="${escapeHtml(property.estimatedValue ? formatAmountInput(property.estimatedValue) : "")}" placeholder="${ui.privacyMode ? "Skjult" : "fx 4.500.000"}" ${privacyInputAttrs()} />
      </label>
      <label class="field">
        <span class="label">Restgæld</span>
        <input class="input" inputmode="decimal" data-wealth-property="${escapeHtml(property.id)}" data-wealth-field="debt" value="${escapeHtml(property.debt ? formatAmountInput(property.debt) : "")}" placeholder="${ui.privacyMode ? "Skjult" : "fx 2.800.000"}" ${privacyInputAttrs()} />
      </label>
    </div>
  `;
}

function getDashboardComparison(month) {
  const current = getMonthlySummary(month);
  const previous = getMonthlySummary(shiftMonth(month, -1));
  const lastYear = getMonthlySummary(shiftMonth(month, -12));
  return {
    current,
    previous,
    lastYear,
    momExpenseDelta: current.expenses - previous.expenses,
    yoyExpenseDelta: current.expenses - lastYear.expenses,
    incomeCountLabel: `${current.incomeCount} indtægt${current.incomeCount === 1 ? "" : "er"}`,
  };
}

function renderDeltaPill(label, delta, basis) {
  const hasBasis = Number(basis || 0) > 0;
  const positive = delta <= 0;
  const pct = hasBasis ? delta / basis : 0;
  return `
    <span class="delta-pill ${positive ? "positive" : "negative"}">
      <small>${escapeHtml(label)}</small>
      <strong>${hasBasis ? `${delta > 0 ? "+" : ""}${formatPercent(pct)}` : "—"}</strong>
      <em>${hasBasis ? `${formatCurrency(Math.abs(delta))} ${delta <= 0 ? "lavere" : "højere"}` : "mangler data"}</em>
    </span>
  `;
}

function renderCashflowVisual(summary) {
  const max = Math.max(1, summary.income, summary.expenses, Math.abs(summary.savings));
  const rows = [
    { label: "Ind", value: summary.income, kind: "income" },
    { label: "Ud", value: summary.expenses, kind: "expense" },
    { label: "Tilbage", value: summary.savings, kind: summary.savings >= 0 ? "income" : "expense" },
  ];
  return `
    <div class="cashflow-bars">
      ${rows.map((row) => `
        <div class="cashflow-row ${row.kind}">
          <div><span>${escapeHtml(row.label)}</span><strong>${formatCurrency(row.value)}</strong></div>
          <i style="--width:${Math.max(4, Math.round((Math.abs(row.value) / max) * 100))}%"></i>
        </div>
      `).join("")}
    </div>
  `;
}

function renderDashboardTrend(month) {
  const months = lastMonths(month, 12);
  const summaries = months.map((item) => ({ month: item, ...getMonthlySummary(item) }));
  const max = Math.max(1, ...summaries.map((item) => item.expenses));
  return `
    <div class="mom-yoy-chart" aria-label="Forbrug de seneste 12 måneder">
      ${summaries.map((item) => {
        const active = item.month === month;
        const previous = getMonthlySummary(shiftMonth(item.month, -1)).expenses;
        const delta = item.expenses - previous;
        const height = Math.max(5, Math.round((item.expenses / max) * 100));
        return `
          <button class="mom-yoy-month ${active ? "active" : ""}" type="button" data-month-jump="${escapeHtml(item.month)}" title="${escapeHtml(monthLabel(item.month))}: ${formatCurrency(item.expenses)}">
            <span class="mom-yoy-bar ${delta <= 0 ? "positive" : "negative"}" style="--height:${height}%"></span>
            <small>${escapeHtml(shortMonthLabel(item.month))}</small>
          </button>
        `;
      }).join("")}
    </div>
    <div class="trend-footnote">
      <span class="dot positive"></span> lavere end måneden før
      <span class="dot negative"></span> højere end måneden før
    </div>
  `;
}

function renderCategoryBreakdownCompact(rows) {
  if (!rows.length) return `<div class="empty-state"><strong>Ingen forbrug endnu</strong><span>Synk bankdata eller vælg en anden måned.</span></div>`;
  const total = rows.reduce((sum, row) => sum + row.total, 0);
  const max = Math.max(...rows.map((row) => row.total));
  return `
    <div class="category-compact-list">
      ${rows.map((row) => {
        const pct = max ? Math.max(4, Math.round((row.total / max) * 100)) : 0;
        const share = total ? row.total / total : 0;
        return `
          <button class="category-compact-row" type="button" data-action="open-drilldown" data-drilldown="category" data-id="${escapeHtml(row.category.id)}">
            <span class="color-dot" style="--dot:${escapeHtml(row.category.color)}"></span>
            <span><strong>${escapeHtml(row.category.name)}</strong><small>${formatPercent(share)} · ${row.count} poster</small></span>
            <em>${formatCurrency(row.total)}</em>
            <i style="--width:${pct}%"></i>
          </button>
        `;
      }).join("")}
    </div>
  `;
}

function renderDashboardCleanup(cleanup) {
  const count = cleanup.unknownCount + cleanup.transferMatchCount + cleanup.movementCount;
  if (!count) return "";
  return `
    <section class="section panel pad cleanup-callout compact-callout">
      <div>
        <h2>${count} ting kan ryddes op</h2>
        <p>${cleanup.transferMatchCount} overførsler · ${cleanup.movementCount} flytninger · ${cleanup.unknownCount} ukendte kategorier</p>
      </div>
      <button class="button primary" type="button" data-nav="oprydning">Ryd op</button>
    </section>
  `;
}


function normalizeMovingProject(project = {}) {
  const source = project && typeof project === "object" ? project : {};
  return {
    ...DEFAULT_MOVING_PROJECT,
    ...source,
    title: String(source.title || DEFAULT_MOVING_PROJECT.title),
    shortTitle: String(source.shortTitle || source.title || DEFAULT_MOVING_PROJECT.shortTitle),
    currentAddress: String(source.currentAddress || ""),
    newAddress: String(source.newAddress || ""),
    accessDate: isIsoDate(source.accessDate) ? source.accessDate : DEFAULT_MOVING_PROJECT.accessDate,
    loanDeadlineDaysBefore: Math.max(0, Number(source.loanDeadlineDaysBefore ?? DEFAULT_MOVING_PROJECT.loanDeadlineDaysBefore) || 0),
    loanChoice: ["pending", "fixed", "fkort"].includes(source.loanChoice) ? source.loanChoice : "pending",
    purchasePrice: Math.max(0, Number(source.purchasePrice || 0) || 0),
    downPayment: Math.max(0, Number(source.downPayment || 0) || 0),
    ownershipSharePct: clampPercent(Number(source.ownershipSharePct ?? DEFAULT_MOVING_PROJECT.ownershipSharePct)),
    futureMonthlyCommonExpenses: Math.max(0, Number(source.futureMonthlyCommonExpenses || 0) || 0),
    futureMonthlyPropertyTax: Math.max(0, Number(source.futureMonthlyPropertyTax || 0) || 0),
    futureMonthlyUtilities: Math.max(0, Number(source.futureMonthlyUtilities || 0) || 0),
    futureMonthlyOtherHousingCosts: Math.max(0, Number(source.futureMonthlyOtherHousingCosts || 0) || 0),
    futureMonthlyHousingNotes: String(source.futureMonthlyHousingNotes || ""),
    loanNeed: Math.max(0, Number(source.loanNeed || 0) || 0),
    loanPrincipal: Math.max(0, Number(source.loanPrincipal || 0) || 0),
    monthlyPaymentBeforeTax: Math.max(0, Number(source.monthlyPaymentBeforeTax || 0) || 0),
    monthlyPaymentAfterTax: Math.max(0, Number(source.monthlyPaymentAfterTax || 0) || 0),
    bidragRate: Math.max(0, Number(source.bidragRate || 0) || 0),
    aopBeforeTax: Math.max(0, Number(source.aopBeforeTax || 0) || 0),
    loanCosts: Math.max(0, Number(source.loanCosts || 0) || 0),
    courseValue: Math.max(0, Number(source.courseValue || 0) || 0),
    payoutAmount: Math.max(0, Number(source.payoutAmount || 0) || 0),
    interestOnlyUntil: String(source.interestOnlyUntil || ""),
    loanScenarioName: String(source.loanScenarioName || ""),
    loanAmount: Math.max(0, Number(source.loanAmount || 0) || 0),
    fixedRateCoupon: Math.max(0, Number(source.fixedRateCoupon || DEFAULT_MOVING_PROJECT.fixedRateCoupon) || 0),
    fixedRateCourse: Math.max(0, Number(source.fixedRateCourse || 0) || 0),
    fixedRateCourseTarget: Math.max(0, Number(source.fixedRateCourseTarget || DEFAULT_MOVING_PROJECT.fixedRateCourseTarget) || 0),
    fkortRate: Math.max(0, Number(source.fkortRate || 0) || 0),
    latestRates: source.latestRates || null,
    rateHistory: Array.isArray(source.rateHistory) ? source.rateHistory.slice(0, 80) : [],
    advisorNotes: String(source.advisorNotes || DEFAULT_MOVING_ADVISOR_NOTES),
    items: Array.isArray(source.items) ? source.items.map(normalizeMovingItem).filter(Boolean) : [],
  };
}

function normalizeMovingItem(item = {}) {
  if (!item || typeof item !== "object") return null;
  const categoryIds = new Set(MOVING_CATEGORIES.map((category) => category.id));
  const payerIds = new Set(MOVING_PAYERS.map((payer) => payer.id));
  const splitIds = new Set(MOVING_SPLITS.map((split) => split.id));
  const statusIds = new Set(MOVING_STATUSES.map((status) => status.id));
  return {
    id: item.id || uid("move"),
    name: String(item.name || "Ny ting"),
    category: categoryIds.has(item.category) ? item.category : "andet",
    price: Math.max(0, Number(item.price || 0) || 0),
    paidBy: payerIds.has(item.paidBy) ? item.paidBy : "claes",
    split: splitIds.has(item.split) ? item.split : "shared",
    claesSharePct: clampPercent(Number(item.claesSharePct ?? 50)),
    lauraSharePct: clampPercent(Number(item.lauraSharePct ?? 50)),
    link: String(item.link || ""),
    imageUrl: String(item.imageUrl || ""),
    receipt: normalizeMovingReceipt(item.receipt),
    receiptText: String(item.receiptText || item.receipt?.text || ""),
    status: statusIds.has(item.status) ? item.status : "bought",
    note: String(item.note || ""),
    date: isIsoDate(item.date) ? item.date : "",
    createdAt: item.createdAt || new Date().toISOString(),
    updatedAt: item.updatedAt || "",
  };
}

function normalizeMovingReceipt(receipt = null) {
  if (!receipt || typeof receipt !== "object") return null;
  return {
    name: String(receipt.name || "Kvittering"),
    type: String(receipt.type || "application/octet-stream"),
    size: Number(receipt.size || 0) || 0,
    dataUrl: String(receipt.dataUrl || ""),
    previewImageUrl: String(receipt.previewImageUrl || receipt.pdfImageDataUrl || ""),
    text: String(receipt.text || "").slice(0, 20000),
    uploadedAt: receipt.uploadedAt || new Date().toISOString(),
  };
}

function clampPercent(value) {
  return Math.max(0, Math.min(100, Number.isFinite(value) ? value : 0));
}

function getMovingProject() {
  state.movingProject = normalizeMovingProject(state.movingProject);
  return state.movingProject;
}

function movingLoanDeadline(project = getMovingProject()) {
  return shiftDate(project.accessDate || DEFAULT_MOVING_PROJECT.accessDate, -Number(project.loanDeadlineDaysBefore || 0));
}

function movingCategoryById(id) {
  return MOVING_CATEGORIES.find((category) => category.id === id) || MOVING_CATEGORIES.at(-1);
}

function movingLabel(collection, id) {
  return collection.find((item) => item.id === id)?.label || id || "—";
}

function movingSplitShares(item) {
  const amount = Number(item.price || 0);
  if (item.split === "shared") return { claes: amount / 2, laura: amount / 2, undecided: 0 };
  if (item.split === "claes") return { claes: amount, laura: 0, undecided: 0 };
  if (item.split === "laura") return { claes: 0, laura: amount, undecided: 0 };
  if (item.split === "custom") {
    const totalPct = Math.max(1, Number(item.claesSharePct || 0) + Number(item.lauraSharePct || 0));
    return {
      claes: amount * (Number(item.claesSharePct || 0) / totalPct),
      laura: amount * (Number(item.lauraSharePct || 0) / totalPct),
      undecided: 0,
    };
  }
  return { claes: 0, laura: 0, undecided: amount };
}

function getMovingFinancing(project = getMovingProject()) {
  const purchasePrice = Number(project.purchasePrice || 0);
  const downPayment = Number(project.downPayment || 0);
  const rawLoanNeed = Math.max(0, purchasePrice - downPayment);
  const loanNeed = Number(project.loanNeed || 0) || rawLoanNeed;
  const loanPrincipal = Number(project.loanPrincipal || 0) || Number(project.loanAmount || 0) || loanNeed;
  const course = Number(project.fixedRateCourse || 0);
  const courseValue = Number(project.courseValue || 0) || (loanPrincipal && course ? loanPrincipal * course / 100 : 0);
  const payoutAmount = Number(project.payoutAmount || 0) || loanNeed;
  const courseLoss = loanPrincipal && course ? loanPrincipal * Math.max(0, 100 - course) / 100 : 0;
  const financingCosts = Math.max(0, loanNeed - rawLoanNeed);
  const loanToValue = purchasePrice ? loanPrincipal / purchasePrice : 0;
  const cashShare = purchasePrice ? downPayment / purchasePrice : 0;
  const monthlyBeforeTax = Number(project.monthlyPaymentBeforeTax || 0);
  const monthlyAfterTax = Number(project.monthlyPaymentAfterTax || 0);
  const ownershipShare = clampPercent(Number(project.ownershipSharePct ?? 50)) / 100;
  const futureMonthlyCommonExpenses = Number(project.futureMonthlyCommonExpenses || 0);
  const futureMonthlyPropertyTax = Number(project.futureMonthlyPropertyTax || 0);
  const futureMonthlyUtilities = Number(project.futureMonthlyUtilities || 0);
  const futureMonthlyOtherHousingCosts = Number(project.futureMonthlyOtherHousingCosts || 0);
  const futureMonthlyNonLoanHousingCosts = futureMonthlyCommonExpenses + futureMonthlyPropertyTax + futureMonthlyUtilities + futureMonthlyOtherHousingCosts;
  const monthlyBeforeTaxShare = monthlyBeforeTax * ownershipShare;
  const monthlyAfterTaxShare = (monthlyAfterTax || monthlyBeforeTax) * ownershipShare;
  const futureOtherHousingShare = futureMonthlyNonLoanHousingCosts * ownershipShare;
  const futureHousingShareAfterTax = monthlyAfterTaxShare + futureOtherHousingShare;
  const futureHousingShareBeforeTax = monthlyBeforeTaxShare + futureOtherHousingShare;
  const yearlyBeforeTax = monthlyBeforeTax * 12;
  const yearlyAfterTax = monthlyAfterTax * 12;
  return { purchasePrice, downPayment, rawLoanNeed, loanNeed, loanPrincipal, course, courseValue, payoutAmount, courseLoss, financingCosts, loanToValue, cashShare, monthlyBeforeTax, monthlyAfterTax, monthlyBeforeTaxShare, monthlyAfterTaxShare, ownershipShare, ownershipSharePct: ownershipShare * 100, futureMonthlyCommonExpenses, futureMonthlyPropertyTax, futureMonthlyUtilities, futureMonthlyOtherHousingCosts, futureMonthlyNonLoanHousingCosts, futureOtherHousingShare, futureHousingShareAfterTax, futureHousingShareBeforeTax, yearlyBeforeTax, yearlyAfterTax };
}

function getMovingSummary(project = getMovingProject()) {
  const items = project.items || [];
  const total = items.reduce((sum, item) => sum + Number(item.price || 0), 0);
  const committed = items.filter((item) => item.status !== "planned").reduce((sum, item) => sum + Number(item.price || 0), 0);
  const planned = Math.max(0, total - committed);
  const paidClaes = items.filter((item) => item.paidBy === "claes").reduce((sum, item) => sum + Number(item.price || 0), 0);
  const paidLaura = items.filter((item) => item.paidBy === "laura").reduce((sum, item) => sum + Number(item.price || 0), 0);
  const jointPaid = items.filter((item) => item.paidBy === "joint").reduce((sum, item) => sum + Number(item.price || 0), 0);
  const unpaid = items.filter((item) => item.paidBy === "unpaid" || item.status === "planned").reduce((sum, item) => sum + Number(item.price || 0), 0);
  let settlementNet = 0;
  let claesShare = 0;
  let lauraShare = 0;
  let undecidedShare = 0;
  for (const item of items) {
    const shares = movingSplitShares(item);
    claesShare += shares.claes;
    lauraShare += shares.laura;
    undecidedShare += shares.undecided;
    if (item.paidBy === "claes") settlementNet += shares.laura;
    if (item.paidBy === "laura") settlementNet -= shares.claes;
  }
  const byCategory = MOVING_CATEGORIES.map((category) => {
    const rows = items.filter((item) => item.category === category.id);
    const amount = rows.reduce((sum, item) => sum + Number(item.price || 0), 0);
    return { category, amount, count: rows.length, share: total ? amount / total : 0 };
  }).filter((row) => row.amount || row.count);
  const financing = getMovingFinancing(project);
  const fixedCourseLoss = financing.courseLoss;
  return { total, committed, planned, paidClaes, paidLaura, jointPaid, unpaid, settlementNet, claesShare, lauraShare, undecidedShare, byCategory, fixedCourseLoss, financing, itemCount: items.length };
}

function renderMovingProjectView() {
  const project = getMovingProject();
  const summary = getMovingSummary(project);
  const deadline = movingLoanDeadline(project);
  return `
    <section class="move-hero" aria-label="Flytteprojekt ${escapeHtml(project.title)}">
      <div class="move-hero-main">
        <p class="eyebrow">${escapeHtml(project.currentAddress || "Nuværende bolig")} → ${escapeHtml(project.newAddress || project.title)}</p>
        <h2>${escapeHtml(project.title)}</h2>
        <div class="move-hero-total">${formatCurrency(summary.total)}</div>
        <p class="move-hero-copy">Alt til flytning, lån og nye køb — uden at blande det ind i de normale forbrugstal.</p>
      </div>
      <div class="move-date-stack">
        <div><span>Overtagelse</span><strong>${formatDate(project.accessDate)}</strong></div>
        <div><span>Lån senest</span><strong>${formatDate(deadline)}</strong></div>
        <div><span>Valg</span><strong>${movingLoanChoiceLabel(project)}</strong></div>
      </div>
    </section>

    <section class="move-kpi-grid section" aria-label="Nøgletal for flytteprojekt">
      ${renderMovingKpi("Projekt total", summary.total, `${summary.itemCount} linjer`, "deep")}
      ${renderMovingKpi("Købt/bestilt", summary.committed, `${formatCurrency(summary.planned)} planlagt`, "sage")}
      ${renderMovingKpi("Afregning", Math.abs(summary.settlementNet), movingSettlementText(summary.settlementNet), summary.settlementNet ? "gold" : "soft")}
      ${renderMovingKpi("Kursfradrag", summary.fixedCourseLoss, project.fixedRateCourse ? `Fast ${project.fixedRateCoupon}% ved kurs ${formatNumber(project.fixedRateCourse)}` : "Udfyld kurs", "warm")}
    </section>

    <section class="move-layout section">
      <div class="move-left-stack">
        ${renderMovingLoanPanel(project, summary)}
        ${renderMovingCategoryPanel(summary)}
      </div>
      <div class="move-right-stack">
        ${renderMovingAddForm()}
        ${renderMovingSettingsForm(project)}
      </div>
    </section>

    ${renderMovingAffordabilityPanel(project, summary)}
    ${renderMovingInsightsPanel(project, summary)}

    <section class="move-ledger section panel pad">
      <div class="section-heading clean-heading">
        <div><h2>Køb og udlæg</h2><p>Billede, link, pris, hvem der lagde ud — og om det skal deles.</p></div>
        <span class="move-ledger-total">${formatCurrency(summary.total)}</span>
      </div>
      ${renderMovingItems(project.items)}
    </section>
  `;
}

function renderMovingKpi(label, value, helper, tone = "soft") {
  return `
    <article class="move-kpi ${escapeHtml(tone)}">
      <span>${escapeHtml(label)}</span>
      <strong>${formatCurrency(value)}</strong>
      <small>${escapeHtml(helper || "")}</small>
    </article>`;
}

function movingSettlementText(net) {
  if (Math.abs(net) < 0.5) return "Ingen mellemregning";
  return net > 0 ? "Laura → Claes" : "Claes → Laura";
}

function movingLoanChoiceLabel(project) {
  if (project.loanChoice === "fixed") return `Fast ${formatNumber(project.fixedRateCoupon)}%`;
  if (project.loanChoice === "fkort") return "F-kort";
  return "Afventer kurs";
}

function renderMovingFinancingPanel(project, financing = getMovingFinancing(project)) {
  const hasPurchase = Boolean(financing.purchasePrice && financing.downPayment);
  if (!hasPurchase && !financing.loanPrincipal && !financing.monthlyBeforeTax) return "";
  const scenario = project.loanScenarioName || (financing.downPayment ? `${formatCurrency(financing.downPayment)} egenbetaling` : "Finansiering");
  const extraNeed = financing.financingCosts;
  const beforeAfter = financing.monthlyBeforeTax || financing.monthlyAfterTax
    ? `${financing.monthlyBeforeTax ? `${formatCurrency(financing.monthlyBeforeTax)} før skat` : "— før skat"} · ${financing.monthlyAfterTax ? `${formatCurrency(financing.monthlyAfterTax)} efter skat` : "— efter skat"}`
    : "Tilføj ydelse fra bankens tilbud";
  return `
    <div class="move-financing-panel">
      <div class="move-financing-head">
        <div><span>Valgt scenarie</span><strong>${escapeHtml(scenario)}</strong><small>${beforeAfter}</small></div>
        <em>${financing.loanToValue ? `${formatPercent(financing.loanToValue)} belåning` : "Belåning —"}</em>
      </div>
      <div class="move-financing-grid">
        ${renderMovingFinanceCell("Købspris", financing.purchasePrice, "Solvej 4")}
        ${renderMovingFinanceCell("Egenbetaling", financing.downPayment, financing.cashShare ? `${formatPercent(financing.cashShare)} af købspris` : "")}
        ${renderMovingFinanceCell("Rest før omkostninger", financing.rawLoanNeed, "Købspris minus egenbetaling")}
        ${renderMovingFinanceCell("Lånebehov", financing.loanNeed, extraNeed ? `+${formatCurrency(extraNeed)} ift. ren rest` : "Samme som rest")}
        ${renderMovingFinanceCell("Hovedstol", financing.loanPrincipal, project.fixedRateCourse ? `kurs ${formatNumber(project.fixedRateCourse)}` : "Udfyld kurs")}
        ${renderMovingFinanceCell("Kursværdi", financing.courseValue, financing.courseLoss ? `${formatCurrency(financing.courseLoss)} kursfradrag` : "")}
        ${financing.futureMonthlyNonLoanHousingCosts ? renderMovingFinanceCell("Boligomk. u/lån", financing.futureMonthlyNonLoanHousingCosts, `${formatCurrency(financing.futureOtherHousingShare)} din andel`) : ""}
      </div>
      <div class="move-finance-details">
        ${project.bidragRate ? `<span>Bidrag ${formatNumber(project.bidragRate)}%</span>` : ""}
        ${project.aopBeforeTax ? `<span>ÅOP før skat ${formatNumber(project.aopBeforeTax)}%</span>` : ""}
        ${project.loanCosts ? `<span>Omkostninger ${formatCurrency(project.loanCosts)}</span>` : ""}
        ${project.interestOnlyUntil ? `<span>Afdragsfri til ${escapeHtml(formatDate(project.interestOnlyUntil))}</span>` : ""}
        ${project.futureMonthlyHousingNotes ? `<span>${escapeHtml(project.futureMonthlyHousingNotes)}</span>` : ""}
      </div>
    </div>`;
}

function renderMovingFinanceCell(label, value, helper = "") {
  return `
    <div class="move-finance-cell">
      <span>${escapeHtml(label)}</span>
      <strong>${value ? formatCurrency(value) : "—"}</strong>
      <small>${escapeHtml(helper || "")}</small>
    </div>`;
}

function movingFutureOtherHousingBreakdown(financing) {
  const share = Number(financing.ownershipShare || 0);
  const parts = [
    [financing.futureMonthlyCommonExpenses, "fællesudgift"],
    [financing.futureMonthlyPropertyTax, "boligskat"],
    [financing.futureMonthlyUtilities, "forbrug"],
    [financing.futureMonthlyOtherHousingCosts, "andet"],
  ].filter(([amount]) => Number(amount || 0) > 0);
  return parts.map(([amount, label]) => `${formatCurrency(Number(amount || 0) * share)} ${label}`).join(" + ");
}

function renderMovingAffordabilityPanel(project, summary) {
  const data = getMovingAffordabilityData(project, summary);
  if (!data.rows.length || !data.futureHousingShareAfterTax) {
    return `
      <section class="move-affordability section panel pad">
        <div class="section-heading clean-heading"><div><h2>Efter lån måned for måned</h2><p>Sæt ydelse og ejerandel for at se hvad du historisk ville have haft tilbage.</p></div></div>
        <div class="empty-state compact-empty"><strong>Mangler lånedata eller historik</strong><span>Udfyld ydelse efter skat og ejerandel i Rammer og lån.</span></div>
      </section>`;
  }
  const deltaTone = data.avgDeltaCost > 0 ? "danger" : "positive";
  const futureHousingHelper = [`${formatCurrency(data.monthlyAfterTaxShare)} lån efter skat`, data.futureOtherHousingBreakdown].filter(Boolean).join(" + ");
  return `
    <section class="move-affordability section panel pad" aria-label="Efter lån måned for måned">
      <div class="section-heading clean-heading">
        <div><h2>Efter lån måned for måned</h2><p>Historisk cashflow justeret for din ejerandel af den nye boligydelse.</p></div>
        <span class="pill muted">${formatNumber(data.ownershipSharePct)}% ejerandel</span>
      </div>
      <div class="move-affordability-kpis">
        ${renderMovingAffordabilityKpi("Din nye ydelse", data.futureHousingShareAfterTax, futureHousingHelper, "deep")}
        ${renderMovingAffordabilityKpi("Nuværende bolig/lån", data.avgCurrentHousing, `Historisk snit over ${data.averageBasisCount} hele mdr.`, "sage")}
        ${renderMovingAffordabilityKpi(data.avgDeltaCost > 0 ? "Tungere pr. md." : "Lettere pr. md.", Math.abs(data.avgDeltaCost), data.avgDeltaCost > 0 ? "Ny ydelse er højere end historisk bolig/lån" : "Ny ydelse er lavere end historisk bolig/lån", deltaTone)}
        ${renderMovingAffordabilityKpi("Tilbage efter ny ydelse", data.avgProjectedLeft, `Laveste måned ${formatCurrency(data.worstProjectedLeft)}`, "gold")}
      </div>
      <div class="move-affordability-note">
        <strong>Metode</strong>
        <span>For hver måned: historisk indkomst minus historisk forbrug uden nuværende bolig-/låneposter plus din andel af ny ydelse. Ny ydelse inkluderer lån efter skat samt din andel af fællesudgift/ejerudgift, boligskat, forbrug og øvrige boligomkostninger. Nuværende bolig/lån findes i bankdata via realkredit/ejerforening/boligposter.</span>
      </div>
      <div class="move-affordability-table" role="table" aria-label="Historisk effekt af ny boligydelse">
        <div class="move-affordability-head" role="row"><span>Måned</span><span>Ind</span><span>Forbrug i dag</span><span>Nuv. bolig/lån</span><span>Ny ydelse</span><span>Tilbage fremad</span><span>Forskel</span></div>
        ${data.rows.map(renderMovingAffordabilityRow).join("")}
      </div>
    </section>`;
}

function getMovingAffordabilityData(project, summary) {
  const financing = summary.financing || getMovingFinancing(project);
  const latest = ui.month || latestTransactionMonth() || currentMonthKey();
  const months = lastMonths(latest, 12);
  const rows = months.map((month) => {
    const txRows = getReportingTransactionsForMonth(month);
    const monthly = summarizeTransactions(txRows);
    const currentHousing = txRows.filter(isCurrentPrimaryHousingCost).reduce((sum, tx) => sum + Math.abs(Number(tx.amount || 0)), 0);
    const projectedExpenses = Math.max(0, monthly.expenses - currentHousing + financing.futureHousingShareAfterTax);
    const projectedLeft = monthly.income - projectedExpenses;
    const deltaCost = financing.futureHousingShareAfterTax - currentHousing;
    return {
      month,
      income: monthly.income,
      expenses: monthly.expenses,
      currentLeft: monthly.savings,
      currentHousing,
      projectedExpenses,
      projectedLeft,
      deltaCost,
      deltaLeft: projectedLeft - monthly.savings,
      transactionCount: txRows.length,
    };
  }).filter((row) => row.transactionCount || row.income || row.expenses);
  const averageRows = rows.filter((row) => row.month < currentMonthKey() && row.income > 0 && row.expenses > 0);
  const basisRows = averageRows.length ? averageRows : rows;
  const count = Math.max(1, basisRows.length);
  const avg = (field) => basisRows.reduce((sum, row) => sum + Number(row[field] || 0), 0) / count;
  return {
    rows: rows.slice().reverse(),
    averageBasisCount: count,
    ownershipSharePct: financing.ownershipSharePct,
    monthlyAfterTaxShare: financing.monthlyAfterTaxShare,
    monthlyBeforeTaxShare: financing.monthlyBeforeTaxShare,
    futureOtherHousingShare: financing.futureOtherHousingShare,
    futureOtherHousingBreakdown: movingFutureOtherHousingBreakdown(financing),
    futureHousingShareAfterTax: financing.futureHousingShareAfterTax,
    avgCurrentHousing: avg("currentHousing"),
    avgDeltaCost: avg("deltaCost"),
    avgProjectedLeft: avg("projectedLeft"),
    worstProjectedLeft: rows.length ? Math.min(...rows.map((row) => row.projectedLeft)) : 0,
  };
}

function isCurrentPrimaryHousingCost(tx) {
  if (!isReportExpense(tx)) return false;
  const text = normalize(`${tx.description || ""} ${tx.note || ""} ${tx.merchant || ""}`);
  const category = tx.categoryId || "";
  if (category !== "cat-housing" && categoryById(category)?.name !== "Bolig & regninger") return false;
  return /(totalkredit|realkredit|kreditforening|nykredit|brf|nordea kredit|jyske realkredit|ejerforening|faellesudgift|fællesudgift|e\/f|ef |adm\.service|grundskyld|ejendomsskat|tinglysning)/i.test(text);
}

function renderMovingAffordabilityKpi(label, value, helper, tone = "soft") {
  return `
    <article class="move-affordability-kpi ${escapeHtml(tone)}">
      <span>${escapeHtml(label)}</span>
      <strong>${formatCurrency(value)}</strong>
      <small>${escapeHtml(helper || "")}</small>
    </article>`;
}

function renderMovingAffordabilityRow(row) {
  const heavier = row.deltaCost > 0.5;
  const lighter = row.deltaCost < -0.5;
  return `
    <div class="move-affordability-row ${heavier ? "heavier" : lighter ? "lighter" : "flat"}" role="row">
      <span><strong>${escapeHtml(monthLabel(row.month))}</strong><small>${row.deltaCost > 0 ? "Tungere" : row.deltaCost < 0 ? "Lettere" : "Uændret"}</small></span>
      <em>${formatCurrency(row.income)}</em>
      <em>${formatCurrency(row.expenses)}</em>
      <em>${formatCurrency(row.currentHousing)}</em>
      <em>${formatCurrency(row.currentHousing + row.deltaCost)}</em>
      <em class="strong">${formatCurrency(row.projectedLeft)}</em>
      <em class="${heavier ? "negative" : lighter ? "positive" : ""}">${row.deltaCost ? `${heavier ? "-" : "+"}${formatCurrency(Math.abs(row.deltaCost))}` : "0 kr."}</em>
    </div>`;
}

function renderMovingLoanPanel(project, summary) {
  const fixedReady = Boolean(project.fixedRateCourse && project.fixedRateCourseTarget && project.fixedRateCourse >= project.fixedRateCourseTarget);
  const financing = summary.financing || getMovingFinancing(project);
  return `
    <article class="move-loan-panel panel pad">
      <div class="section-heading clean-heading">
        <div><h2>Lånevalg</h2><p>Fast 4% hvis kursen er god — ellers F-kort.</p></div>
        <span class="pill ${fixedReady ? "" : "muted"}">${fixedReady ? "Fast ser stærk ud" : "Afventer kurs"}</span>
      </div>
      <div class="loan-routes">
        <div class="loan-route ${project.loanChoice === "fixed" ? "active" : ""}">
          <span>Mulighed A</span>
          <strong>Fast ${formatNumber(project.fixedRateCoupon)}% · 10 års afdragsfrihed</strong>
          <small>Kurs ${project.fixedRateCourse ? formatNumber(project.fixedRateCourse) : "—"} · mål ${project.fixedRateCourseTarget ? formatNumber(project.fixedRateCourseTarget) : "—"}</small>
          <em>${financing.loanPrincipal && project.fixedRateCourse ? `${formatCurrency(summary.fixedCourseLoss)} kursfradrag` : "Udfyld hovedstol + kurs"}</em>
        </div>
        <div class="loan-route ${project.loanChoice === "fkort" ? "active" : ""}">
          <span>Mulighed B</span>
          <strong>F-kort · 10 års afdragsfrihed</strong>
          <small>Aktuel rente ${project.fkortRate ? `${formatNumber(project.fkortRate)}%` : "—"}</small>
          <em>Fallback hvis fast kurs ikke er attraktiv</em>
        </div>
      </div>
      ${renderMovingFinancingPanel(project, financing)}
      ${renderTotalkreditRateTracker(project, summary)}
      <div class="totalkredit-links" aria-label="Totalkredit links">
        ${TOTALKREDIT_LINKS.map((link) => `<a href="${escapeHtml(link.url)}" target="_blank" rel="noreferrer">${escapeHtml(link.label)}</a>`).join("")}
      </div>
      ${renderMovingAdvisorNotes(project)}
    </article>`;
}

function renderTotalkreditRateTracker(project, summary) {
  const rates = project.latestRates || null;
  const fixed = rates?.fixed4InterestOnly || null;
  const fkort = rates?.fkort || null;
  const fixedCourse = fixed?.priceRate ?? project.fixedRateCourse;
  const fkortRate = fkort?.currentRate ?? project.fkortRate;
  const target = Number(project.fixedRateCourseTarget || 0);
  const fixedDelta = target && fixedCourse ? fixedCourse - target : null;
  const verdict = fixedDelta == null ? "Sæt kursmål for signal" : fixedDelta >= 0 ? `Over mål med ${formatNumber(fixedDelta)}` : `Under mål med ${formatNumber(Math.abs(fixedDelta))}`;
  return `
    <div class="tk-rate-tracker">
      <div class="tk-rate-head">
        <div><span>Live fra Totalkredit</span><strong>Fast 4% vs. F-kort</strong><small>${rates?.fetchedAt ? `Hentet ${formatDateTime(rates.fetchedAt)}` : "Ikke hentet endnu"}</small></div>
        <button class="button ghost" type="button" data-action="refresh-totalkredit-rates">Opdater kurser</button>
      </div>
      <div class="tk-rate-grid">
        <div class="tk-rate-card ${fixedDelta != null && fixedDelta >= 0 ? "positive" : ""}">
          <span>Fast 4% · 10 års afdragsfrihed</span>
          <strong>${fixedCourse ? formatNumber(fixedCourse) : "—"}</strong>
          <small>Kurs · ${fixed?.effectiveRateLabel ? `effektiv ${escapeHtml(fixed.effectiveRateLabel)}` : "effektiv rente —"}</small>
          <em>${escapeHtml(verdict)}</em>
        </div>
        <div class="tk-rate-card">
          <span>F-kort</span>
          <strong>${fkortRate ? `${formatNumber(fkortRate)}%` : "—"}</strong>
          <small>${fkort?.expectedRateLabel ? `forventet ${escapeHtml(fkort.expectedRateLabel)}` : "forventet rente —"}${fkort?.priceRate ? ` · kurs ${formatNumber(fkort.priceRate)}` : ""}</small>
          <em>${fkort?.refinancingDate ? `Refinansiering ${escapeHtml(fkort.refinancingDate)}` : "Variabel rente"}</em>
        </div>
      </div>
      ${renderTotalkreditHistory(project.rateHistory || [])}
      <p class="tk-rate-disclaimer">${escapeHtml(rates?.disclaimer || "Totalkredit-kurser er vejledende og ikke et lånetilbud. Beslutning skal holdes op mod bankens konkrete tilbud og bidragssats.")}</p>
    </div>`;
}

function renderTotalkreditHistory(history = []) {
  const rows = history.slice(0, 14).reverse();
  if (!rows.length) return "";
  const latest = rows.at(-1) || {};
  return `
    <div class="tk-rate-history-panel">
      <div class="tk-history-head">
        <span>Kursudvikling</span>
        <strong>Fast kurs ${latest.fixedPriceRate ? formatNumber(latest.fixedPriceRate) : "—"} · F-kort ${latest.fkortCurrentRate ? `${formatNumber(latest.fkortCurrentRate)}%` : "—"}</strong>
      </div>
      ${renderTotalkreditHistoryChart(rows)}
      <div class="tk-rate-history">
        ${rows.slice(-6).reverse().map((row) => `
          <div>
            <span>${escapeHtml(formatDateTime(row.at))}</span>
            <strong>${row.fixedPriceRate ? `Fast ${formatNumber(row.fixedPriceRate)}` : "Fast —"}</strong>
            <em>${row.fkortCurrentRate ? `F-kort ${formatNumber(row.fkortCurrentRate)}%` : "F-kort —"}${row.fkortExpectedRate ? ` · forventet ${formatNumber(row.fkortExpectedRate)}%` : ""}</em>
          </div>`).join("")}
      </div>
    </div>`;
}

function renderTotalkreditHistoryChart(rows) {
  const fixed = rows.map((row) => Number(row.fixedPriceRate || 0)).filter(Boolean);
  const fkort = rows.map((row) => Number(row.fkortCurrentRate || row.fkortExpectedRate || 0)).filter(Boolean);
  if (!fixed.length && !fkort.length) return "";
  return `
    <div class="tk-history-chart" aria-label="Historik for fast kurs og F-kort rente">
      ${renderMiniLineSvg(rows, "fixedPriceRate", "tk-fixed-line")}
      ${renderMiniLineSvg(rows, "fkortCurrentRate", "tk-fkort-line")}
      <div class="tk-history-legend"><span><i class="fixed"></i>Fast 4% kurs</span><span><i class="fkort"></i>F-kort rente</span></div>
    </div>`;
}

function renderMiniLineSvg(rows, field, className) {
  const values = rows.map((row) => Number(row[field] || 0));
  const finite = values.filter((value) => Number.isFinite(value) && value > 0);
  if (finite.length < 1) return "";
  const width = 520;
  const height = 90;
  const pad = 8;
  let min = Math.min(...finite);
  let max = Math.max(...finite);
  if (min === max) {
    min = min * 0.98;
    max = max * 1.02 || 1;
  }
  const points = values.map((value, index) => {
    if (!Number.isFinite(value) || value <= 0) return null;
    const x = rows.length === 1 ? width / 2 : pad + (index / (rows.length - 1)) * (width - pad * 2);
    const y = height - pad - ((value - min) / Math.max(1, max - min)) * (height - pad * 2);
    return { x, y };
  }).filter(Boolean);
  const path = points.map((point, index) => `${index ? "L" : "M"}${point.x.toFixed(1)} ${point.y.toFixed(1)}`).join(" ");
  return `<svg viewBox="0 0 ${width} ${height}" class="${escapeHtml(className)}" aria-hidden="true"><path d="${path}" /><circle cx="${points.at(-1).x.toFixed(1)}" cy="${points.at(-1).y.toFixed(1)}" r="4" /></svg>`;
}

function renderMovingAdvisorNotes(project) {
  return `
    <details class="move-advisor-notes" open>
      <summary>Mette-noter</summary>
      <textarea class="input" data-moving-project-field="advisorNotes" rows="6">${escapeHtml(project.advisorNotes || DEFAULT_MOVING_ADVISOR_NOTES)}</textarea>
    </details>`;
}

function renderMovingCategoryPanel(summary) {
  const rows = summary.byCategory;
  return `
    <article class="move-category-panel panel pad">
      <div class="section-heading clean-heading"><div><h2>Fordeling</h2><p>Hvor projektets penge ligger.</p></div></div>
      <div class="move-category-list">
        ${rows.length ? rows.map((row) => `
          <div class="move-category-row ${escapeHtml(row.category.tone)}">
            <span><strong>${escapeHtml(row.category.label)}</strong><small>${row.count} linje${row.count === 1 ? "" : "r"}</small></span>
            <i><b style="--width:${Math.max(4, Math.round(row.share * 100))}%"></b></i>
            <em>${formatCurrency(row.amount)}</em>
          </div>`).join("") : `<div class="empty-state compact-empty"><strong>Ingen linjer endnu</strong><span>Tilføj flytning, lån eller møbler.</span></div>`}
      </div>
    </article>`;
}

function renderMovingInsightsPanel(project, summary) {
  const insight = getMovingInsightData(project, summary);
  if (!insight.itemCount) {
    return `
      <section class="move-insights section panel pad">
        <div class="section-heading clean-heading"><div><h2>Indsigter</h2><p>Når der kommer køb på, viser appen hvor pengene går hen, hvem der har lagt ud, og hvad der mangler.</p></div></div>
        <div class="empty-state compact-empty"><strong>Ingen indsigter endnu</strong><span>Tilføj de første køb eller planlagte poster til Solvej 4.</span></div>
      </section>`;
  }
  return `
    <section class="move-insights section panel pad" aria-label="Indsigter for Solvej 4">
      <div class="section-heading clean-heading">
        <div><h2>Indsigter</h2><p>Hvad pengene går til — og hvad der stadig mangler før afregning.</p></div>
        <span class="pill muted">${escapeHtml(insight.daysToAccessText)}</span>
      </div>
      <div class="move-insight-hero-grid">
        ${renderMovingInsightMetric("Største kategori", insight.largestCategory ? insight.largestCategory.category.label : "—", insight.largestCategory ? `${formatCurrency(insight.largestCategory.amount)} · ${formatPercent(insight.largestCategory.share)}` : "Tilføj flere poster", insight.largestCategory?.category.tone || "soft")}
        ${renderMovingInsightMetric("Købt/bestilt", formatCurrency(summary.committed), `${formatPercent(insight.committedShare)} af projektet · ${formatCurrency(summary.planned)} planlagt`, "sage")}
        ${renderMovingInsightMetric("Dokumenteret", formatPercent(insight.documentationCoverage), `${insight.receiptCount}/${insight.itemCount} linjer har kvittering`, insight.documentationCoverage >= 0.8 ? "sage" : "gold")}
        ${renderMovingInsightMetric("Gns. køb", formatCurrency(insight.averageItem), `${insight.pricedCount} linjer med pris`, "warm")}
      </div>
      <div class="move-insight-grid">
        ${renderMovingInsightCard("Hvad går pengene til?", "Topkategorier med andel af totalen.", renderMovingInsightBarRows(insight.categoryRows.slice(0, 6), summary.total, (row) => row.category.label, (row) => `${row.count} linje${row.count === 1 ? "" : "r"} · gns. ${formatCurrency(row.average)}`, (row) => row.category.tone))}
        ${renderMovingInsightCard("Status", "Købt, bestilt og planlagt side om side.", renderMovingInsightBarRows(insight.statusRows, summary.total, (row) => row.status.label, (row) => `${row.count} linje${row.count === 1 ? "" : "r"}`, () => "soft"))}
        ${renderMovingInsightCard("Lagt ud vs. ansvar", "Skiller betaling fra hvem udgiften reelt tilhører.", renderMovingPayerInsight(insight, summary))}
        ${renderMovingInsightCard("Dyreste poster", "De køb der flytter totalen mest.", renderMovingTopItems(insight.topItems))}
        ${renderMovingInsightCard("Datakvalitet", "Det der gør overblikket mere sikkert.", renderMovingQualityRows(insight))}
        ${renderMovingInsightCard("Næste gode træk", "Prioriteret ud fra det der ligger i overblikket nu.", renderMovingActionRows(insight, summary))}
      </div>
    </section>`;
}

function getMovingInsightData(project, summary) {
  const items = project.items || [];
  const total = Number(summary.total || 0);
  const pricedItems = items.filter((item) => Number(item.price || 0) > 0);
  const categoryRows = MOVING_CATEGORIES.map((category) => {
    const rows = items.filter((item) => item.category === category.id);
    const amount = rows.reduce((sum, item) => sum + Number(item.price || 0), 0);
    const planned = rows.filter((item) => item.status === "planned").reduce((sum, item) => sum + Number(item.price || 0), 0);
    const committed = Math.max(0, amount - planned);
    const largestItem = rows.slice().sort((a, b) => Number(b.price || 0) - Number(a.price || 0))[0] || null;
    return { category, rows, amount, planned, committed, count: rows.length, average: rows.length ? amount / rows.length : 0, share: total ? amount / total : 0, largestItem };
  }).filter((row) => row.count || row.amount).sort((a, b) => b.amount - a.amount);
  const statusRows = MOVING_STATUSES.map((status) => {
    const rows = items.filter((item) => item.status === status.id);
    const amount = rows.reduce((sum, item) => sum + Number(item.price || 0), 0);
    return { status, rows, amount, count: rows.length, share: total ? amount / total : 0 };
  }).filter((row) => row.count || row.amount);
  const paidRows = MOVING_PAYERS.map((payer) => {
    const rows = items.filter((item) => item.paidBy === payer.id);
    const amount = rows.reduce((sum, item) => sum + Number(item.price || 0), 0);
    return { payer, rows, amount, count: rows.length, share: total ? amount / total : 0 };
  }).filter((row) => row.count || row.amount);
  const responsibilityRows = [
    { id: "claes", label: "Claes' andel", amount: summary.claesShare || 0, share: total ? (summary.claesShare || 0) / total : 0 },
    { id: "laura", label: "Lauras andel", amount: summary.lauraShare || 0, share: total ? (summary.lauraShare || 0) / total : 0 },
    { id: "undecided", label: "Afklares", amount: summary.undecidedShare || 0, share: total ? (summary.undecidedShare || 0) / total : 0 },
  ].filter((row) => row.amount || row.id !== "undecided");
  const topItems = pricedItems.slice().sort((a, b) => Number(b.price || 0) - Number(a.price || 0)).slice(0, 5);
  const missingPrice = items.filter((item) => !Number(item.price || 0));
  const missingReceipt = items.filter((item) => item.status !== "planned" && !item.receipt);
  const missingLinkOrImage = items.filter((item) => !String(item.link || "").trim() && !String(item.imageUrl || "").trim());
  const undecidedSplit = items.filter((item) => item.split === "undecided");
  const customSplitNeedsCheck = items.filter((item) => item.split === "custom" && Number(item.claesSharePct || 0) + Number(item.lauraSharePct || 0) <= 0);
  const receiptItems = items.filter((item) => item.receipt);
  const receiptAmount = receiptItems.reduce((sum, item) => sum + Number(item.price || 0), 0);
  const linkedItems = items.filter((item) => String(item.link || "").trim());
  const today = todayISO();
  const daysToAccess = isIsoDate(project.accessDate) ? Math.max(0, daysBetween(project.accessDate, today)) : null;
  const daysToAccessText = daysToAccess == null ? "Overtagelse ikke sat" : daysToAccess === 0 ? "Overtagelse nu" : `${daysToAccess} dage til overtagelse`;
  const committedShare = total ? Number(summary.committed || 0) / total : 0;
  const documentationCoverage = summary.committed ? receiptAmount / summary.committed : 0;
  const actions = movingInsightActions({ summary, categoryRows, missingPrice, missingReceipt, missingLinkOrImage, undecidedSplit, customSplitNeedsCheck, daysToAccess, linkedItems, receiptItems, items });
  return {
    itemCount: items.length,
    pricedCount: pricedItems.length,
    averageItem: pricedItems.length ? total / pricedItems.length : 0,
    largestCategory: categoryRows[0] || null,
    categoryRows,
    statusRows,
    paidRows,
    responsibilityRows,
    topItems,
    missingPrice,
    missingReceipt,
    missingLinkOrImage,
    undecidedSplit,
    customSplitNeedsCheck,
    receiptCount: receiptItems.length,
    receiptAmount,
    linkedCount: linkedItems.length,
    documentationCoverage,
    committedShare,
    daysToAccess,
    daysToAccessText,
    actions,
  };
}

function movingInsightActions(data) {
  const actions = [];
  if (data.missingPrice.length) actions.push({ label: "Sæt pris på manglende poster", detail: `${data.missingPrice.length} linje${data.missingPrice.length === 1 ? "" : "r"} uden pris gør totalen for lav.` });
  if (data.undecidedSplit.length) actions.push({ label: "Afklar hvem der betaler", detail: `${data.undecidedSplit.length} linje${data.undecidedSplit.length === 1 ? "" : "r"} står som “Afklares”.` });
  if (data.missingReceipt.length) actions.push({ label: "Upload kvitteringer på købte ting", detail: `${data.missingReceipt.length} købt/bestilt linje${data.missingReceipt.length === 1 ? "" : "r"} mangler dokumentation.` });
  if (Math.abs(data.summary.settlementNet || 0) >= 1) actions.push({ label: "Afstem mellemregning", detail: `${movingSettlementText(data.summary.settlementNet)} · ${formatCurrency(Math.abs(data.summary.settlementNet))}.` });
  if (data.categoryRows[0]?.share >= 0.5) actions.push({ label: `Hold øje med ${data.categoryRows[0].category.label.toLowerCase()}`, detail: `Kategorien fylder ${formatPercent(data.categoryRows[0].share)} af Solvej 4-budgettet.` });
  if (data.daysToAccess != null && data.daysToAccess <= 45 && data.summary.planned > 0) actions.push({ label: "Planlagte køb nærmer sig", detail: `${formatCurrency(data.summary.planned)} er stadig planlagt inden overtagelse.` });
  if (!actions.length) actions.push({ label: "Overblikket ser rent ud", detail: "Der er pris, fordeling og dokumentation på de vigtigste poster." });
  return actions.slice(0, 5);
}

function renderMovingInsightMetric(label, value, helper, tone = "soft") {
  return `
    <article class="move-insight-metric ${escapeHtml(tone)}">
      <span>${escapeHtml(label)}</span>
      <strong>${typeof value === "number" ? formatCurrency(value) : escapeHtml(String(value || "—"))}</strong>
      <small>${escapeHtml(helper || "")}</small>
    </article>`;
}

function renderMovingInsightCard(title, subtitle, body) {
  return `
    <article class="move-insight-card">
      <div class="move-insight-card-head"><h3>${escapeHtml(title)}</h3><p>${escapeHtml(subtitle)}</p></div>
      ${body}
    </article>`;
}

function renderMovingInsightBarRows(rows, total, labelFn, helperFn, toneFn) {
  if (!rows.length) return `<div class="empty-state compact-empty"><strong>Ingen data endnu</strong><span>Tilføj flere linjer for at se mønstre.</span></div>`;
  const basis = Math.max(1, total || Math.max(...rows.map((row) => Number(row.amount || 0))));
  return `
    <div class="move-insight-bars">
      ${rows.map((row) => {
        const share = Math.max(0.04, Math.min(1, Number(row.amount || 0) / basis));
        return `
          <div class="move-insight-bar-row ${escapeHtml(toneFn(row) || "soft")}">
            <div><strong>${escapeHtml(labelFn(row))}</strong><small>${escapeHtml(helperFn(row))}</small></div>
            <i><b style="--width:${Math.round(share * 100)}%"></b></i>
            <em>${formatCurrency(row.amount)}</em>
          </div>`;
      }).join("")}
    </div>`;
}

function renderMovingPayerInsight(insight, summary) {
  return `
    <div class="move-payer-insight">
      <div>
        <h4>Lagt ud af</h4>
        ${renderMovingInsightBarRows(insight.paidRows, summary.total, (row) => row.payer.label, (row) => `${row.count} linje${row.count === 1 ? "" : "r"}`, () => "sage")}
      </div>
      <div>
        <h4>Skal bæres af</h4>
        ${renderMovingInsightBarRows(insight.responsibilityRows, summary.total, (row) => row.label, (row) => `${formatPercent(row.share)} af total`, () => "gold")}
      </div>
      <div class="move-settlement-callout ${summary.settlementNet ? "active" : ""}">
        <span>Mellemregning</span>
        <strong>${summary.settlementNet ? formatCurrency(Math.abs(summary.settlementNet)) : "0 kr."}</strong>
        <small>${escapeHtml(movingSettlementText(summary.settlementNet))}</small>
      </div>
    </div>`;
}

function renderMovingTopItems(items) {
  if (!items.length) return `<div class="empty-state compact-empty"><strong>Ingen priser endnu</strong><span>Sæt pris på planlagte og købte ting.</span></div>`;
  return `
    <div class="move-top-items">
      ${items.map((item, index) => `
        <div class="move-top-item">
          <span>${index + 1}</span>
          <div><strong>${escapeHtml(item.name || "Unavngivet")}</strong><small>${escapeHtml(movingCategoryById(item.category).label)} · ${escapeHtml(movingLabel(MOVING_STATUSES, item.status))}</small></div>
          <em>${formatCurrency(item.price)}</em>
        </div>`).join("")}
    </div>`;
}

function renderMovingQualityRows(insight) {
  const rows = [
    { label: "Mangler pris", value: insight.missingPrice.length, helper: previewMovingItemNames(insight.missingPrice) || "Alle linjer har pris" },
    { label: "Mangler kvittering", value: insight.missingReceipt.length, helper: previewMovingItemNames(insight.missingReceipt) || "Købte/bestilte linjer er dokumenteret" },
    { label: "Mangler link/billede", value: insight.missingLinkOrImage.length, helper: previewMovingItemNames(insight.missingLinkOrImage) || "Alle linjer har visuel reference" },
    { label: "Afklares", value: insight.undecidedSplit.length + insight.customSplitNeedsCheck.length, helper: previewMovingItemNames([...insight.undecidedSplit, ...insight.customSplitNeedsCheck]) || "Fordeling ser afklaret ud" },
  ];
  return `
    <div class="move-quality-list">
      ${rows.map((row) => `
        <div class="move-quality-row ${row.value ? "needs-work" : "ok"}">
          <strong>${row.value}</strong>
          <span>${escapeHtml(row.label)}<small>${escapeHtml(row.helper)}</small></span>
        </div>`).join("")}
    </div>`;
}

function renderMovingActionRows(insight, summary) {
  return `
    <div class="move-action-list">
      ${insight.actions.map((action) => `
        <div class="move-action-row">
          <strong>${escapeHtml(action.label)}</strong>
          <small>${escapeHtml(action.detail)}</small>
        </div>`).join("")}
    </div>`;
}

function previewMovingItemNames(items) {
  return items.slice(0, 3).map((item) => item.name || "Unavngivet").join(", ") + (items.length > 3 ? ` +${items.length - 3}` : "");
}

function renderMovingAddForm() {
  const draft = ui.movingFormDraft || {};
  const receiptLabel = ui.movingReceiptReading ? "Læser kvittering … vent med at tilføje, til felterne er udfyldt." : (ui.movingReceiptDraft?.name ? `Kvittering klar: ${ui.movingReceiptDraft.name}` : "Upload kvittering — appen gemmer den og prøver at læse navn/pris fra tekstbaserede kvitteringer.");
  const receiptImage = ui.movingReceiptDraft ? movingReceiptImage(ui.movingReceiptDraft) : "";
  const receiptPreview = receiptImage ? `<div class="move-receipt-preview move-wide"><img src="${escapeHtml(receiptImage)}" alt="" /><span><strong>${ui.movingReceiptDraft?.dataUrl?.startsWith("data:image/") ? "Billede klar" : "Kvittering klar"}</strong><small>${ui.movingReceiptDraft?.dataUrl?.startsWith("data:image/") ? "Kvitteringsbilledet bliver brugt som billede i overblikket." : "Dokumentet gemmes på linjen, og tekst/pris bruges hvis de kan læses."}</small></span></div>` : "";
  return `
    <form class="move-add-form panel pad" id="moving-item-form">
      <div class="section-heading clean-heading"><div><h2>Tilføj køb</h2><p>Én linje er nok: ting, pris, udlæg og link.</p></div></div>
      <div class="move-add-grid">
        <label class="field"><span>Ting</span><input class="input" name="name" value="${escapeHtml(draft.name || "")}" placeholder="fx spisebord" required /></label>
        <label class="field"><span>Pris</span><input class="input" name="price" inputmode="decimal" value="${escapeHtml(draft.price || "")}" placeholder="12.500" ${privacyInputAttrs()} /></label>
        <label class="field"><span>Kategori</span><select class="select" name="category">${MOVING_CATEGORIES.map((category) => option(category.id, category.label, category.id === (draft.category || "moebler"))).join("")}</select></label>
        <label class="field"><span>Lagt ud af</span><select class="select" name="paidBy">${MOVING_PAYERS.map((payer) => option(payer.id, payer.label, payer.id === (draft.paidBy || "claes"))).join("")}</select></label>
        <label class="field"><span>Fordeling</span><select class="select" name="split">${MOVING_SPLITS.map((split) => option(split.id, split.label, split.id === (draft.split || "shared"))).join("")}</select></label>
        <label class="field"><span>Status</span><select class="select" name="status">${MOVING_STATUSES.map((status) => option(status.id, status.label, status.id === (draft.status || "bought"))).join("")}</select></label>
        <label class="field move-wide"><span>Link</span><input class="input" name="link" type="url" value="${escapeHtml(draft.link || "")}" placeholder="https://..." /></label>
        <label class="field move-wide"><span>Billede-URL</span><input class="input" name="imageUrl" type="url" value="${escapeHtml(draft.imageUrl || "")}" placeholder="udfyldes fra link hvis muligt" /></label>
        <label class="field move-wide"><span>Kvittering</span><input class="input" id="moving-receipt-file" name="receipt" type="file" accept="image/*,.heic,.heif,.pdf,.txt,.html,.htm,text/*,application/pdf" ${ui.movingReceiptReading ? "disabled" : ""} /><small class="helper">${escapeHtml(receiptLabel)}</small></label>
        ${receiptPreview}
      </div>
      <div class="move-form-actions">
        <button class="button ghost" type="button" data-action="preview-moving-form-link" ${ui.movingReceiptReading ? "disabled" : ""}>Hent fra link</button>
        <button class="button primary" type="submit" ${ui.movingReceiptReading ? "disabled" : ""}>${ui.movingReceiptReading ? "Læser kvittering …" : "Tilføj til overblik"}</button>
      </div>
    </form>`;
}

function renderMovingSettingsForm(project) {
  return `
    <details class="move-settings panel pad">
      <summary>Rammer og lån</summary>
      <form id="moving-settings-form" class="move-settings-grid">
        <label class="field"><span>Titel</span><input class="input" name="title" value="${escapeHtml(project.title)}" /></label>
        <label class="field"><span>Fanenavn</span><input class="input" name="shortTitle" value="${escapeHtml(project.shortTitle)}" /></label>
        <label class="field"><span>Fra</span><input class="input" name="currentAddress" value="${escapeHtml(project.currentAddress)}" /></label>
        <label class="field"><span>Til</span><input class="input" name="newAddress" value="${escapeHtml(project.newAddress)}" /></label>
        <label class="field"><span>Overtagelse</span><input class="input" type="date" name="accessDate" value="${escapeHtml(project.accessDate)}" /></label>
        <label class="field"><span>Lån dage før</span><input class="input" inputmode="numeric" name="loanDeadlineDaysBefore" value="${escapeHtml(String(project.loanDeadlineDaysBefore))}" /></label>
        <label class="field"><span>Scenarie</span><input class="input" name="loanScenarioName" value="${escapeHtml(project.loanScenarioName || "")}" placeholder="fx 3,8 mio. egenbetaling" /></label>
        <label class="field"><span>Købspris</span><input class="input" inputmode="decimal" name="purchasePrice" value="${escapeHtml(project.purchasePrice ? formatAmountInput(project.purchasePrice) : "")}" ${privacyInputAttrs()} /></label>
        <label class="field"><span>Egenbetaling</span><input class="input" inputmode="decimal" name="downPayment" value="${escapeHtml(project.downPayment ? formatAmountInput(project.downPayment) : "")}" ${privacyInputAttrs()} /></label>
        <label class="field"><span>Min ejerandel %</span><input class="input" inputmode="decimal" name="ownershipSharePct" value="${escapeHtml(formatNumber(project.ownershipSharePct || 50))}" /></label>
        <label class="field"><span>Fællesudgift/md.</span><input class="input" inputmode="decimal" name="futureMonthlyCommonExpenses" value="${escapeHtml(project.futureMonthlyCommonExpenses ? formatAmountInput(project.futureMonthlyCommonExpenses) : "")}" ${privacyInputAttrs()} /><small class="helper">Ejerforening/fællesbidrag inkl. alle fælles poster.</small></label>
        <label class="field"><span>Boligskat/md.</span><input class="input" inputmode="decimal" name="futureMonthlyPropertyTax" value="${escapeHtml(project.futureMonthlyPropertyTax ? formatAmountInput(project.futureMonthlyPropertyTax) : "")}" ${privacyInputAttrs()} /><small class="helper">Ejendomsværdiskat + grundskyld.</small></label>
        <label class="field"><span>Forbrug/md.</span><input class="input" inputmode="decimal" name="futureMonthlyUtilities" value="${escapeHtml(project.futureMonthlyUtilities ? formatAmountInput(project.futureMonthlyUtilities) : "")}" ${privacyInputAttrs()} /><small class="helper">Varme, vand, el, internet m.m.</small></label>
        <label class="field"><span>Andet bolig/md.</span><input class="input" inputmode="decimal" name="futureMonthlyOtherHousingCosts" value="${escapeHtml(project.futureMonthlyOtherHousingCosts ? formatAmountInput(project.futureMonthlyOtherHousingCosts) : "")}" ${privacyInputAttrs()} /><small class="helper">Øvrige faste boligomkostninger/reserve.</small></label>
        <label class="field move-wide"><span>Boligomkostningsnotat</span><input class="input" name="futureMonthlyHousingNotes" value="${escapeHtml(project.futureMonthlyHousingNotes || "")}" placeholder="Kilde og hvad beløbene dækker" /></label>
        <label class="field"><span>Lånebehov</span><input class="input" inputmode="decimal" name="loanNeed" value="${escapeHtml(project.loanNeed ? formatAmountInput(project.loanNeed) : "")}" ${privacyInputAttrs()} /></label>
        <label class="field"><span>Hovedstol</span><input class="input" inputmode="decimal" name="loanPrincipal" value="${escapeHtml(project.loanPrincipal ? formatAmountInput(project.loanPrincipal) : (project.loanAmount ? formatAmountInput(project.loanAmount) : ""))}" ${privacyInputAttrs()} /></label>
        <label class="field"><span>Ydelse før skat</span><input class="input" inputmode="decimal" name="monthlyPaymentBeforeTax" value="${escapeHtml(project.monthlyPaymentBeforeTax ? formatAmountInput(project.monthlyPaymentBeforeTax) : "")}" ${privacyInputAttrs()} /></label>
        <label class="field"><span>Ydelse efter skat</span><input class="input" inputmode="decimal" name="monthlyPaymentAfterTax" value="${escapeHtml(project.monthlyPaymentAfterTax ? formatAmountInput(project.monthlyPaymentAfterTax) : "")}" ${privacyInputAttrs()} /></label>
        <label class="field"><span>Fast kupon %</span><input class="input" inputmode="decimal" name="fixedRateCoupon" value="${escapeHtml(formatNumber(project.fixedRateCoupon))}" /></label>
        <label class="field"><span>Fast kurs</span><input class="input" inputmode="decimal" name="fixedRateCourse" value="${escapeHtml(project.fixedRateCourse ? formatNumber(project.fixedRateCourse) : "")}" /></label>
        <label class="field"><span>Kursmål</span><input class="input" inputmode="decimal" name="fixedRateCourseTarget" value="${escapeHtml(formatNumber(project.fixedRateCourseTarget))}" /></label>
        <label class="field"><span>Bidrag %</span><input class="input" inputmode="decimal" name="bidragRate" value="${escapeHtml(project.bidragRate ? formatNumber(project.bidragRate) : "")}" /></label>
        <label class="field"><span>ÅOP før skat %</span><input class="input" inputmode="decimal" name="aopBeforeTax" value="${escapeHtml(project.aopBeforeTax ? formatNumber(project.aopBeforeTax) : "")}" /></label>
        <label class="field"><span>Låneomk.</span><input class="input" inputmode="decimal" name="loanCosts" value="${escapeHtml(project.loanCosts ? formatAmountInput(project.loanCosts) : "")}" ${privacyInputAttrs()} /></label>
        <label class="field"><span>Kursværdi</span><input class="input" inputmode="decimal" name="courseValue" value="${escapeHtml(project.courseValue ? formatAmountInput(project.courseValue) : "")}" ${privacyInputAttrs()} /></label>
        <label class="field"><span>Udbetaling</span><input class="input" inputmode="decimal" name="payoutAmount" value="${escapeHtml(project.payoutAmount ? formatAmountInput(project.payoutAmount) : "")}" ${privacyInputAttrs()} /></label>
        <label class="field"><span>Afdragsfri til</span><input class="input" type="date" name="interestOnlyUntil" value="${escapeHtml(isIsoDate(project.interestOnlyUntil) ? project.interestOnlyUntil : "")}" /></label>
        <label class="field"><span>F-kort rente %</span><input class="input" inputmode="decimal" name="fkortRate" value="${escapeHtml(project.fkortRate ? formatNumber(project.fkortRate) : "")}" /></label>
        <label class="field"><span>Valg</span><select class="select" name="loanChoice">${option("pending", "Afventer", project.loanChoice === "pending")}${option("fixed", "Fast 4%", project.loanChoice === "fixed")}${option("fkort", "F-kort", project.loanChoice === "fkort")}</select></label>
        <button class="button primary move-wide" type="submit">Gem rammer</button>
      </form>
    </details>`;
}

function renderMovingItems(items = []) {
  if (!items.length) {
    return `<div class="move-empty"><strong>Ingen køb endnu</strong><span>Start med flyttemand, lånegebyrer eller den første ting til lejligheden.</span></div>`;
  }
  return `
    <div class="move-items" role="table" aria-label="Køb til flytteprojekt">
      <div class="move-items-head" role="row">
        <span>Ting</span><span>Pris</span><span>Lagt ud</span><span>Fordeling</span><span>Status</span><span></span>
      </div>
      ${items.map(renderMovingItemRow).join("")}
    </div>`;
}

function renderMovingItemRow(item) {
  const category = movingCategoryById(item.category);
  const image = movingItemImage(item);
  const custom = item.split === "custom";
  return `
    <article class="move-item-row ${escapeHtml(category.tone)}" role="row">
      <div class="move-item-main">
        <div class="move-item-image">${image ? `<img src="${escapeHtml(image)}" alt="" loading="lazy" />` : `<span>${escapeHtml(category.label.slice(0, 2))}</span>`}</div>
        <div class="move-item-copy">
          <input class="move-line-input strong" data-moving-item="${escapeHtml(item.id)}" data-moving-field="name" value="${escapeHtml(item.name)}" />
          <div class="move-line-meta">
            <select class="move-mini-select" data-moving-item="${escapeHtml(item.id)}" data-moving-field="category">${MOVING_CATEGORIES.map((cat) => option(cat.id, cat.label, cat.id === item.category)).join("")}</select>
            <input class="move-line-input" data-moving-item="${escapeHtml(item.id)}" data-moving-field="link" value="${escapeHtml(item.link)}" placeholder="Link" />
            ${item.link ? `<button class="link-button" type="button" data-action="preview-moving-item-link" data-id="${escapeHtml(item.id)}">Hent</button><a href="${escapeHtml(item.link)}" target="_blank" rel="noreferrer">Åbn</a>` : ""}
          </div>
          <input class="move-line-input muted" data-moving-item="${escapeHtml(item.id)}" data-moving-field="imageUrl" value="${escapeHtml(item.imageUrl)}" placeholder="Billede-URL" />
          <div class="move-receipt-line">
            <label class="receipt-upload"><input type="file" data-moving-receipt="${escapeHtml(item.id)}" accept="image/*,.pdf,.txt,.html,.htm,text/*,application/pdf" />Upload kvittering</label>
            ${item.receipt?.dataUrl ? `<a href="${escapeHtml(item.receipt.dataUrl)}" download="${escapeHtml(item.receipt.name || "kvittering")}">Kvittering</a>` : `<span>Ingen kvittering</span>`}
            ${item.receipt?.name ? `<small>${escapeHtml(item.receipt.name)}</small>` : ""}
          </div>
          ${custom ? `<div class="move-custom-split"><label>Claes %<input class="input" inputmode="decimal" data-moving-item="${escapeHtml(item.id)}" data-moving-field="claesSharePct" value="${escapeHtml(formatNumber(item.claesSharePct))}" /></label><label>Laura %<input class="input" inputmode="decimal" data-moving-item="${escapeHtml(item.id)}" data-moving-field="lauraSharePct" value="${escapeHtml(formatNumber(item.lauraSharePct))}" /></label></div>` : ""}
        </div>
      </div>
      <div class="move-item-price"><input class="input" inputmode="decimal" data-moving-item="${escapeHtml(item.id)}" data-moving-field="price" value="${escapeHtml(item.price ? formatAmountInput(item.price) : "")}" ${privacyInputAttrs()} /><small>${formatCurrency(item.price)}</small></div>
      <select class="select" data-moving-item="${escapeHtml(item.id)}" data-moving-field="paidBy">${MOVING_PAYERS.map((payer) => option(payer.id, payer.label, payer.id === item.paidBy)).join("")}</select>
      <select class="select" data-moving-item="${escapeHtml(item.id)}" data-moving-field="split">${MOVING_SPLITS.map((split) => option(split.id, split.label, split.id === item.split)).join("")}</select>
      <select class="select" data-moving-item="${escapeHtml(item.id)}" data-moving-field="status">${MOVING_STATUSES.map((status) => option(status.id, status.label, status.id === item.status)).join("")}</select>
      <button class="icon-button" type="button" data-action="delete-moving-item" data-id="${escapeHtml(item.id)}">Slet</button>
    </article>`;
}

function movingItemImage(item) {
  const explicit = String(item.imageUrl || "").trim();
  if (explicit) return explicit;
  const receiptImage = movingReceiptImage(item.receipt);
  if (receiptImage) return receiptImage;
  const link = String(item.link || "").trim();
  return /\.(png|jpe?g|webp|gif|avif|svg)(\?.*)?$/i.test(link) ? link : "";
}

function movingReceiptImage(receipt) {
  if (!receipt) return "";
  if (receipt.previewImageUrl && /^data:image\//i.test(receipt.previewImageUrl)) return receipt.previewImageUrl;
  if (!receipt.dataUrl) return "";
  if (/^data:image\/(png|jpe?g|webp|gif|avif|svg\+xml);/i.test(receipt.dataUrl)) return receipt.dataUrl;
  return receiptDocumentImage(receipt);
}

function receiptDocumentImage(receipt) {
  const label = String(receipt?.type || receipt?.name || "PDF").includes("pdf") ? "PDF" : "KVIT";
  const name = String(receipt?.name || "Kvittering").replace(/\.[^.]+$/, "").slice(0, 18);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 160 160"><defs><linearGradient id="g" x1="0" x2="1" y1="0" y2="1"><stop stop-color="#dceee5"/><stop offset="1" stop-color="#f6e7c8"/></linearGradient></defs><rect width="160" height="160" rx="34" fill="url(#g)"/><rect x="44" y="26" width="72" height="94" rx="10" fill="#fffff7" stroke="#007a53" stroke-opacity=".22"/><path d="M94 26v24h22" fill="#e9f5ee"/><text x="80" y="84" text-anchor="middle" font-family="Arial, sans-serif" font-size="24" font-weight="800" fill="#00573f">${label}</text><text x="80" y="137" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" font-weight="700" fill="#5f6b63">${escapeHtml(name)}</text></svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

function looksLikeUrl(value) {
  try {
    const url = new URL(String(value || "").trim());
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}


async function refreshTotalkreditRates({ silent = false, force = true } = {}) {
  const project = getMovingProject();
  const latestAt = new Date(project.latestRates?.fetchedAt || 0).getTime();
  if (!force && latestAt && Date.now() - latestAt < 30 * 60 * 1000) return;
  try {
    if (!silent) notify("Henter Totalkredit-kurser …");
    const rates = await apiFetch("/api/totalkredit/rates");
    applyTotalkreditRates(rates);
    saveState();
    render();
    if (!silent) notify("Totalkredit-kurserne er opdateret.");
  } catch (error) {
    console.warn("Kunne ikke hente Totalkredit-kurser", error);
    if (!silent) notify(`Kunne ikke hente Totalkredit-kurser: ${error.message}`, "danger");
  }
}

function applyTotalkreditRates(rates) {
  const project = getMovingProject();
  project.latestRates = rates;
  const fixed = rates?.fixed4InterestOnly || null;
  const fkort = rates?.fkort || null;
  if (fixed?.priceRate) project.fixedRateCourse = Number(fixed.priceRate);
  if (fkort?.currentRate || fkort?.expectedRate) project.fkortRate = Number(fkort.currentRate || fkort.expectedRate || 0);
  const snapshot = {
    at: rates?.fetchedAt || new Date().toISOString(),
    fixedUpdatedAt: rates?.fixedUpdatedAt || "",
    variableUpdatedAt: rates?.variableUpdatedAt || "",
    fixedName: fixed?.name || "",
    fixedPriceRate: fixed?.priceRate || null,
    fixedSpotPriceRate: fixed?.spotPriceRatePayment || null,
    fixedEffectiveRate: fixed?.effectiveRate || null,
    fkortName: fkort?.name || "",
    fkortPriceRate: fkort?.priceRate || null,
    fkortCurrentRate: fkort?.currentRate || null,
    fkortExpectedRate: fkort?.expectedRate || null,
  };
  const key = `${snapshot.fixedUpdatedAt}|${snapshot.variableUpdatedAt}|${snapshot.fixedPriceRate}|${snapshot.fkortCurrentRate}`;
  const existing = (project.rateHistory || []).filter((row) => `${row.fixedUpdatedAt}|${row.variableUpdatedAt}|${row.fixedPriceRate}|${row.fkortCurrentRate}` !== key);
  project.rateHistory = [snapshot, ...existing].slice(0, 80);
}


async function fetchLinkPreview(url) {
  if (!looksLikeUrl(url)) throw new Error("Indsæt et gyldigt http/https-link først.");
  return apiFetch(`/api/link-preview?url=${encodeURIComponent(url)}`);
}

async function previewMovingLinkForForm(form, { silent = false } = {}) {
  if (!form) return;
  const draft = captureMovingFormDraft(form);
  const url = draft.link || "";
  if (!looksLikeUrl(url)) {
    if (!silent) notify("Indsæt et link først.", "danger");
    return;
  }
  try {
    const preview = await fetchLinkPreview(url);
    setMovingFormDraft(form, {
      name: draft.name || preview.title || "",
      imageUrl: draft.imageUrl || preview.imageUrl || "",
      price: draft.price || (preview.price ? formatAmountInput(preview.price) : ""),
    });
    render();
    notify(preview.title || preview.imageUrl ? "Linket er læst ind. Ret evt. pris og fordeling før du tilføjer." : "Jeg kunne hente linket, men fandt ikke titel/billede.");
  } catch (error) {
    if (!silent) notify(`Kunne ikke hente fra link: ${error.message}`, "danger");
  }
}

async function previewMovingLinkForItem(id) {
  const project = getMovingProject();
  const item = project.items.find((row) => row.id === id);
  if (!item?.link || !looksLikeUrl(item.link)) {
    notify("Linjen mangler et gyldigt link.", "danger");
    return;
  }
  try {
    notify("Henter titel og billede fra linket …");
    const preview = await fetchLinkPreview(item.link);
    if (preview.title) item.name = preview.title;
    if (preview.imageUrl) item.imageUrl = preview.imageUrl;
    if (preview.price && !item.price) item.price = Number(preview.price || 0);
    item.updatedAt = new Date().toISOString();
    saveState();
    render();
    notify("Linjen blev opdateret fra linket.");
  } catch (error) {
    notify(`Kunne ikke hente fra link: ${error.message}`, "danger");
  }
}


async function previewMovingReceiptForForm(form, file) {
  if (!form || !file) return;
  ui.movingReceiptReading = true;
  setMovingFormDraft(form);
  notify("Læser kvittering …");
  render();
  try {
    const receipt = await readMovingReceiptFile(file);
    const preview = await previewReceiptWithServer(receipt);
    ui.movingReceiptDraft = receipt;
    applyReceiptExtractionToForm(document.querySelector("#moving-item-form") || form, receipt, preview);
    ui.movingReceiptReading = false;
    render();
    const detail = [preview?.pdfError, preview?.ocrError].filter(Boolean).join(" ");
    notify(preview?.price || preview?.title ? "Kvitteringen er læst, og felterne er udfyldt hvor muligt." : `Kvitteringen er gemt, men jeg kunne ikke læse navn/pris sikkert.${detail ? ` ${detail}` : ""}`, preview?.price || preview?.title ? "success" : "danger");
  } catch (error) {
    ui.movingReceiptDraft = null;
    ui.movingReceiptReading = false;
    render();
    notify(`Kvitteringen kunne ikke læses: ${error.message}`, "danger");
  }
}

async function attachReceiptToMovingItem(id, file) {
  const project = getMovingProject();
  const item = project.items.find((row) => row.id === id);
  if (!item || !file) return;
  try {
    notify("Læser kvittering …");
    const receipt = await readMovingReceiptFile(file);
    const preview = await previewReceiptWithServer(receipt);
    applyReceiptPreviewToReceipt(receipt, preview);
    item.receipt = receipt;
    item.receiptText = preview?.text || receipt.text || "";
    if (preview?.title) item.name = preview.title;
    if (Number.isFinite(preview?.price)) item.price = preview.price;
    if (item.status === "planned") item.status = "bought";
    item.updatedAt = new Date().toISOString();
    saveState();
    render();
    notify(receipt.text ? "Kvitteringen blev gemt, og linjen blev opdateret hvor muligt." : "Kvitteringen blev gemt på linjen.");
  } catch (error) {
    notify(`Kvitteringen kunne ikke læses: ${error.message}`, "danger");
    render();
  }
}

function applyReceiptExtractionToForm(form, receipt, preview = null) {
  const draft = form ? captureMovingFormDraft(form) : (ui.movingFormDraft || {});
  const extracted = preview || extractReceiptInfoFromText(receipt.text || "", receipt.name);
  applyReceiptPreviewToReceipt(receipt, preview);
  setMovingFormDraftFromDraft(draft, {
    name: draft.name || extracted.title || "",
    price: draft.price || (Number.isFinite(extracted.price) ? formatAmountInput(extracted.price) : ""),
    imageUrl: draft.imageUrl || "",
  });
}

function applyReceiptPreviewToReceipt(receipt, preview = null) {
  if (!receipt || !preview) return;
  if (preview.text && !receipt.text) receipt.text = preview.text;
  if (preview.imageDataUrl && preview.imageDataUrl.startsWith("data:image/")) {
    receipt.dataUrl = preview.imageDataUrl;
    receipt.type = "image/jpeg";
  }
}

async function previewReceiptWithServer(receipt) {
  try {
    const preview = await apiFetch("/api/receipt-preview", {
      method: "POST",
      body: {
        name: receipt.name,
        type: receipt.type,
        dataUrl: receipt.ocrDataUrl || receipt.dataUrl,
        text: receipt.text,
      },
    });
    return {
      ...preview,
      price: preview?.price == null ? NaN : Number(preview.price),
    };
  } catch (error) {
    console.warn("Server-kvitteringslæsning fejlede", error);
    return extractReceiptInfoFromText(receipt.text || "", receipt.name);
  }
}

function captureMovingFormDraft(form) {
  const data = new FormData(form);
  return {
    name: String(data.get("name") || "").trim(),
    price: String(data.get("price") || "").trim(),
    category: String(data.get("category") || "moebler"),
    paidBy: String(data.get("paidBy") || "claes"),
    split: String(data.get("split") || "shared"),
    status: String(data.get("status") || "bought"),
    link: String(data.get("link") || "").trim(),
    imageUrl: String(data.get("imageUrl") || "").trim(),
  };
}

function setMovingFormDraft(form, updates = {}) {
  ui.movingFormDraft = { ...captureMovingFormDraft(form), ...updates };
}

function setMovingFormDraftFromDraft(draft = {}, updates = {}) {
  ui.movingFormDraft = { ...draft, ...updates };
}

async function readMovingReceiptFile(file) {
  if (file.size > RECEIPT_MAX_UPLOAD_BYTES) throw new Error("Filen er for stor. Brug helst et billede/PDF under 16 MB.");
  const text = await extractReceiptText(file).catch(() => "");
  const imageLike = isReceiptImageFile(file);
  const pdfLike = isReceiptPdfFile(file);
  let dataUrl = "";
  let ocrDataUrl = "";
  let previewImageUrl = "";
  let type = file.type || guessReceiptType(file.name);
  if (imageLike) {
    ocrDataUrl = await readFileAsDataUrl(file);
    try {
      dataUrl = await compressReceiptImage(file);
      type = "image/jpeg";
    } catch {
      dataUrl = ocrDataUrl;
    }
  } else {
    dataUrl = await readFileAsDataUrl(file);
    if (pdfLike) {
      previewImageUrl = await renderPdfReceiptPreview(file).catch(() => "");
      if (!text && previewImageUrl) ocrDataUrl = previewImageUrl;
    }
  }
  if (dataUrl.length > RECEIPT_MAX_STORED_CHARS) throw new Error("Kvitteringen er for stor efter komprimering. Tag et mindre screenshot eller gem som JPEG.");
  const receipt = normalizeMovingReceipt({
    name: file.name || "kvittering",
    type,
    size: file.size,
    dataUrl,
    text,
    uploadedAt: new Date().toISOString(),
  });
  if (previewImageUrl) receipt.previewImageUrl = previewImageUrl;
  if (ocrDataUrl && ocrDataUrl !== dataUrl) receipt.ocrDataUrl = ocrDataUrl;
  return receipt;
}

function isReceiptPdfFile(file) {
  return String(file.type || "") === "application/pdf" || /\.pdf$/i.test(String(file.name || ""));
}

function isReceiptImageFile(file) {
  return String(file.type || "").startsWith("image/") || /\.(png|jpe?g|webp|gif|bmp|heic|heif)$/i.test(String(file.name || ""));
}

async function renderPdfReceiptPreview(file) {
  const pdfjs = await import("/vendor/pdfjs/pdf.mjs");
  pdfjs.GlobalWorkerOptions.workerSrc = "/vendor/pdfjs/pdf.worker.mjs";
  const bytes = new Uint8Array(await file.arrayBuffer());
  const task = pdfjs.getDocument({ data: bytes, disableFontFace: true, isEvalSupported: false });
  const pdfDocument = await task.promise;
  const page = await pdfDocument.getPage(1);
  const baseViewport = page.getViewport({ scale: 1 });
  const scale = Math.min(2.4, Math.max(1.2, 1400 / Math.max(baseViewport.width || 1, baseViewport.height || 1)));
  const viewport = page.getViewport({ scale });
  const canvas = window.document.createElement("canvas");
  canvas.width = Math.ceil(viewport.width);
  canvas.height = Math.ceil(viewport.height);
  const context = canvas.getContext("2d", { alpha: false });
  context.fillStyle = "#fff";
  context.fillRect(0, 0, canvas.width, canvas.height);
  await page.render({ canvasContext: context, viewport }).promise;
  await pdfDocument.destroy?.();
  return canvas.toDataURL("image/jpeg", 0.82);
}

async function extractReceiptText(file) {
  const name = String(file.name || "").toLowerCase();
  if (file.type.startsWith("text/") || /\.(txt|csv|html?|md)$/i.test(name)) return (await file.text()).slice(0, 20000);
  if (file.type === "application/pdf" || /\.pdf$/i.test(name)) return extractTextFromPdfBytes(await file.arrayBuffer()).slice(0, 20000);
  return "";
}

function extractTextFromPdfBytes(buffer) {
  const raw = new TextDecoder("latin1").decode(new Uint8Array(buffer));
  const chunks = [];
  for (const match of raw.matchAll(/\((?:\\.|[^\\)])*\)\s*Tj/g)) chunks.push(unescapePdfString(match[0].replace(/\)\s*Tj$/, "").slice(1)));
  for (const match of raw.matchAll(/\[((?:\s*\((?:\\.|[^\\)])*\)\s*)+)\]\s*TJ/g)) {
    for (const part of match[1].matchAll(/\((?:\\.|[^\\)])*\)/g)) chunks.push(unescapePdfString(part[0].slice(1, -1)));
  }
  return chunks.join(" ").replace(/\s+/g, " ").trim();
}

function unescapePdfString(value) {
  return String(value || "").replace(/\\([nrtbf()\\])/g, (_, char) => ({ n: "\n", r: "\r", t: "\t", b: "", f: "", "(": "(", ")": ")", "\\": "\\" }[char] ?? char));
}

function extractReceiptInfoFromText(text, fileName = "") {
  const clean = String(text || "").replace(/\s+/g, " ").trim();
  const lines = String(text || "").split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
  const title = receiptTitleFromLines(lines) || (clean ? receiptTitleFromFileName(fileName) : "");
  const price = receiptTotalFromText(clean);
  return { title: title || "", price };
}

function receiptTitleFromFileName(fileName = "") {
  const title = String(fileName || "").replace(/\.[^.]+$/, "").replace(/[-_]+/g, " ").trim();
  if (!title || /^img\s*\d+$/i.test(title) || /^image\s*\d*$/i.test(title) || /^scan\s*\d*$/i.test(title)) return "";
  return title;
}

function receiptTitleFromLines(lines) {
  const candidates = lines.map((line) => cleanReceiptTitleCandidate(line)).filter((line) => line.length >= 3 && line.length <= 90 && /[a-zæøå]/i.test(line));
  const furniture = candidates.find((line) => RECEIPT_ITEM_KEYWORDS.test(line));
  if (furniture) return furniture;
  return candidates.find((line) => !RECEIPT_TITLE_BLACKLIST.test(line)) || "";
}

const RECEIPT_ITEM_KEYWORDS = /\b(spisebord|bord|table|dining|stol|chair|sofa|skænk|skaenk|skab|reol|lampe|seng|madras|hylde|tæppe|taeppe|gardin|kommode|bænk|baenk|vitrine|møbel|moebel|furniture)\b/i;
const RECEIPT_TITLE_BLACKLIST = /kvittering|receipt|faktura|invoice|total|i alt|ialt|moms|betaling|betalt|dato|ordrenr|ordre nr|order|cvr|tlf|telefon|tak for|levering|fragt|subtotal|vat|kundeservice|www\.|@/i;

function cleanReceiptTitleCandidate(line) {
  return String(line || "")
    .replace(/\b(varenr|vare nr|item no|sku|ean|antal|qty|stk\.?|pcs?)\b[:.]?/gi, " ")
    .replace(/\b\d+\s*x\b/gi, " ")
    .replace(/\b\d+\s*(stk|pcs?)\.?\b/gi, " ")
    .replace(/[-–—]?\s*(?:kr\.?|dkk)?\s*-?\d{1,3}(?:[.\s]\d{3})*(?:[,\.]\d{2})?\s*(?:kr\.?|dkk)?\s*(?:,-)?/gi, " ")
    .replace(/\b\d{5,}\b/g, " ")
    .replace(/\s{2,}/g, " ")
    .trim()
    .replace(/^[-–—:;,.\s]+|[-–—:;,.\s]+$/g, "");
}

function receiptTotalFromText(text) {
  const candidates = [];
  const amountPattern = "-?(?:dkk|kr\\.?)?\\s*\\d{1,3}(?:[.\\s]\\d{3})*(?:[,\\.]\\d{2})?|-?(?:dkk|kr\\.?)?\\s*\\d+(?:[,\\.]\\d{2})?";
  const labelPattern = "total(?:beløb| amount)?|i alt|ialt|beløb|betalt|amount|sum|ordre(?: total|beløb|sum)?|ordretotal|kortbetaling|betaling|at betale|samlet(?: pris)?|grand total|subtotal";
  const labelled = new RegExp(`(${labelPattern})[^0-9-]{0,55}(${amountPattern})`, "gi");
  for (const match of text.matchAll(labelled)) {
    const amount = parseAmount(match[2]);
    if (isLikelyReceiptAmount(amount)) candidates.push({ amount: Math.abs(amount), score: 3 });
  }
  const amountBeforeLabel = new RegExp(`(${amountPattern})[^a-zæøå]{0,18}(${labelPattern})`, "gi");
  for (const match of text.matchAll(amountBeforeLabel)) {
    const amount = parseAmount(match[1]);
    if (isLikelyReceiptAmount(amount)) candidates.push({ amount: Math.abs(amount), score: 2 });
  }
  if (candidates.length) return candidates.sort((a, b) => a.score - b.score || a.amount - b.amount).at(-1).amount;
  const amounts = Array.from(text.matchAll(/\b(?:dkk|kr\.?)?\s*\d{1,3}(?:[.\s]\d{3})*(?:[,\.]\d{2})\s*(?:kr\.?|dkk)?\b|\b(?:dkk|kr\.?)?\s*\d{1,3}(?:[.\s]\d{3})+\s*(?:,-)?\s*(?:kr\.?|dkk)?\b/gi)).map((match) => Math.abs(parseAmount(match[0]))).filter(isLikelyReceiptAmount);
  return amounts.length ? Math.max(...amounts) : NaN;
}

function isLikelyReceiptAmount(amount) {
  return Number.isFinite(amount) && Math.abs(amount) >= 10 && Math.abs(amount) < 1_000_000;
}

function guessReceiptType(name = "") {
  if (/\.pdf$/i.test(name)) return "application/pdf";
  if (/\.(png|jpe?g|webp|gif|bmp|heic|heif)$/i.test(name)) return `image/${name.split(".").pop().toLowerCase().replace("jpg", "jpeg")}`;
  return "application/octet-stream";
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = () => reject(reader.error || new Error("Filen kunne ikke læses."));
    reader.readAsDataURL(file);
  });
}

async function compressReceiptImage(file) {
  const source = await readFileAsDataUrl(file);
  const image = await loadImageForReceipt(source);
  const scale = Math.min(1, RECEIPT_IMAGE_MAX_SIDE / Math.max(image.width || 1, image.height || 1));
  const canvas = document.createElement("canvas");
  canvas.width = Math.max(1, Math.round((image.width || 1) * scale));
  canvas.height = Math.max(1, Math.round((image.height || 1) * scale));
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#fff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
  return canvas.toDataURL("image/jpeg", RECEIPT_IMAGE_QUALITY);
}

function loadImageForReceipt(src) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error("Billedet kunne ikke læses."));
    image.src = src;
  });
}


function updateMovingItemField(id, field, value) {
  const project = getMovingProject();
  const item = project.items.find((row) => row.id === id);
  if (!item) return false;
  if (field === "price") {
    const amount = parseAmount(value);
    if (!Number.isFinite(amount)) return false;
    item.price = Math.max(0, amount);
  } else if (field === "claesSharePct" || field === "lauraSharePct") {
    const amount = parseAmount(value);
    if (!Number.isFinite(amount)) return false;
    item[field] = clampPercent(amount);
  } else if (field === "category" && MOVING_CATEGORIES.some((category) => category.id === value)) {
    item.category = value;
  } else if (field === "paidBy" && MOVING_PAYERS.some((payer) => payer.id === value)) {
    item.paidBy = value;
  } else if (field === "split" && MOVING_SPLITS.some((split) => split.id === value)) {
    item.split = value;
  } else if (field === "status" && MOVING_STATUSES.some((status) => status.id === value)) {
    item.status = value;
  } else if (["name", "link", "imageUrl", "note"].includes(field)) {
    item[field] = String(value || "").trim();
  } else {
    return false;
  }
  item.updatedAt = new Date().toISOString();
  return true;
}

function addMovingItemFromForm(form) {
  if (ui.movingReceiptReading) {
    notify("Vent lige — kvitteringen er stadig ved at blive læst.", "danger");
    return false;
  }
  const data = new FormData(form);
  const price = parseAmount(data.get("price"));
  const receipt = ui.movingReceiptDraft ? normalizeMovingReceipt(ui.movingReceiptDraft) : null;
  const item = normalizeMovingItem({
    id: uid("move"),
    name: String(data.get("name") || "").trim(),
    category: String(data.get("category") || "andet"),
    price: Number.isFinite(price) ? price : 0,
    paidBy: String(data.get("paidBy") || "claes"),
    split: String(data.get("split") || "shared"),
    status: String(data.get("status") || "bought"),
    link: String(data.get("link") || "").trim(),
    imageUrl: String(data.get("imageUrl") || "").trim(),
    receipt,
    receiptText: receipt?.text || "",
    createdAt: new Date().toISOString(),
  });
  if (!item?.name) return false;
  const project = getMovingProject();
  project.items.unshift(item);
  ui.movingReceiptDraft = null;
  ui.movingFormDraft = null;
  return true;
}

function updateMovingSettingsFromForm(form) {
  const data = new FormData(form);
  const project = getMovingProject();
  project.title = String(data.get("title") || project.title).trim() || "Ny lejlighed";
  project.shortTitle = String(data.get("shortTitle") || project.title).trim() || project.title;
  project.currentAddress = String(data.get("currentAddress") || "").trim();
  project.newAddress = String(data.get("newAddress") || "").trim();
  const accessDate = String(data.get("accessDate") || "");
  if (isIsoDate(accessDate)) project.accessDate = accessDate;
  project.loanDeadlineDaysBefore = Math.max(0, Number(data.get("loanDeadlineDaysBefore") || 0) || 0);
  project.loanScenarioName = String(data.get("loanScenarioName") || "").trim();
  project.futureMonthlyHousingNotes = String(data.get("futureMonthlyHousingNotes") || "").trim();
  for (const field of ["purchasePrice", "downPayment", "futureMonthlyCommonExpenses", "futureMonthlyPropertyTax", "futureMonthlyUtilities", "futureMonthlyOtherHousingCosts", "loanNeed", "loanPrincipal", "monthlyPaymentBeforeTax", "monthlyPaymentAfterTax", "loanCosts", "courseValue", "payoutAmount"]) {
    const amount = parseAmount(data.get(field));
    project[field] = Number.isFinite(amount) ? Math.max(0, amount) : 0;
  }
  const ownershipSharePct = parseAmount(data.get("ownershipSharePct"));
  project.ownershipSharePct = Number.isFinite(ownershipSharePct) ? clampPercent(ownershipSharePct) : 50;
  project.loanAmount = project.loanPrincipal || project.loanNeed || 0;
  const fixedRateCoupon = parseAmount(data.get("fixedRateCoupon"));
  if (Number.isFinite(fixedRateCoupon)) project.fixedRateCoupon = Math.max(0, fixedRateCoupon);
  const fixedRateCourse = parseAmount(data.get("fixedRateCourse"));
  project.fixedRateCourse = Number.isFinite(fixedRateCourse) ? Math.max(0, fixedRateCourse) : 0;
  const fixedRateCourseTarget = parseAmount(data.get("fixedRateCourseTarget"));
  if (Number.isFinite(fixedRateCourseTarget)) project.fixedRateCourseTarget = Math.max(0, fixedRateCourseTarget);
  const bidragRate = parseAmount(data.get("bidragRate"));
  project.bidragRate = Number.isFinite(bidragRate) ? Math.max(0, bidragRate) : 0;
  const aopBeforeTax = parseAmount(data.get("aopBeforeTax"));
  project.aopBeforeTax = Number.isFinite(aopBeforeTax) ? Math.max(0, aopBeforeTax) : 0;
  const interestOnlyUntil = String(data.get("interestOnlyUntil") || "");
  project.interestOnlyUntil = isIsoDate(interestOnlyUntil) ? interestOnlyUntil : "";
  const fkortRate = parseAmount(data.get("fkortRate"));
  project.fkortRate = Number.isFinite(fkortRate) ? Math.max(0, fkortRate) : 0;
  const loanChoice = String(data.get("loanChoice") || "pending");
  project.loanChoice = ["pending", "fixed", "fkort"].includes(loanChoice) ? loanChoice : "pending";
  return true;
}


function renderReportsView() {
  const modes = [
    ["overblik", "Nøgletal"],
    ["udgifter", "Forbrug"],
    ["udvikling", "Udvikling"],
    ["modtagere", "Modtagere"],
    ["faste", "Faste"],
    ["konti", "Konti"],
    ["overfoersler", "Overførsler"],
  ];
  return `
    <section class="panel pad report-toolbar">
      <div class="section-heading clean-heading">
        <div>
          <h2>Analyser</h2>
          <p>Færdige rapporter, der forklarer forbrug, udvikling og mønstre.</p>
        </div>
        <div class="field" style="min-width: 220px;">
          <label for="report-account-filter">Konto</label>
          <select class="select" id="report-account-filter">
            <option value="all">Alle konti</option>
            ${state.accounts.map((account) => option(account.id, account.name, ui.reportAccountFilter === account.id)).join("")}
          </select>
        </div>
      </div>
      <div class="report-tabs" role="tablist" aria-label="Rapporttyper">
        ${modes.map(([id, label]) => `<button class="report-tab ${ui.reportMode === id ? "active" : ""}" type="button" data-action="report-tab" data-report="${id}">${label}</button>`).join("")}
      </div>
    </section>
    ${renderCurrentReport()}
  `;
}

function renderCurrentReport() {
  if (ui.reportMode === "udvikling") return renderTrendReport();
  if (ui.reportMode === "modtagere") return renderMerchantsDeepReport();
  if (ui.reportMode === "faste") return renderRecurringReport();
  if (ui.reportMode === "konti") return renderAccountsReport();
  if (ui.reportMode === "overfoersler") return renderTransfersReport();
  if (ui.reportMode === "oprydning") return renderCleanupReport();
  if (ui.reportMode === "udgifter") return renderExpenseReport();
  return renderOverviewReport();
}

function renderOverviewReport() {
  const periodRows = getPeriodTransactions();
  const reportingRows = getPeriodReportingTransactions();
  const summary = getPeriodSummary();
  const comparison = getPeriodComparison();
  const categories = getPeriodCategoryReportRows().slice(0, 7);
  const merchants = getPeriodMerchantReportRows().slice(0, 7);
  const recurring = getRecurringCommitmentRows().slice(0, 6);
  const movers = getCategoryMoverRows(reportingRows).slice(0, 4);
  const quality = getAnalysisQuality(periodRows);
  const pace = getAnalysisPace(summary, comparison);
  const concentration = getAnalysisConcentration(categories, merchants, summary);
  const crosscheck = getCrosscheckSummary(periodRows, reportingRows);
  return `
    <section class="analysis-command section" aria-label="Analyseoverblik">
      <div class="analysis-command-copy">
        <p class="eyebrow">Analyse · ${escapeHtml(activePeriodLabel())}</p>
        <h2>${escapeHtml(getAnalysisHeadline(summary, comparison, concentration, quality))}</h2>
        <p>${escapeHtml(getAnalysisSubline(summary, pace, concentration, quality))}</p>
      </div>
      <div class="analysis-command-score ${quality.score < 75 ? "attention" : "positive"}">
        <span>Datatillid</span>
        <strong>${quality.score}%</strong>
        <small>${quality.label}</small>
      </div>
    </section>

    <section class="analysis-visual-grid section">
      ${renderCashflowBridge(summary)}
      ${renderSpendingPacePanel(pace)}
      ${renderConcentrationPanel(concentration)}
      ${renderCrosscheckPanel(crosscheck)}
      ${renderRecurringCommitmentPanel(recurring)}
      ${renderMoverPanel(movers)}
      ${renderAnalysisQualityPanel(quality)}
    </section>

    <section class="dashboard-main-grid section">
      <div class="panel pad visual-panel">
        <div class="section-heading clean-heading"><div><h2>Udvikling</h2><p>Forbrug måned for måned — klik på en måned for at skifte periode.</p></div></div>
        ${renderDashboardTrend(ui.month)}
      </div>
      <div class="panel pad visual-panel">
        <div class="section-heading clean-heading"><div><h2>Hvor pengene går hen</h2><p>Topkategorier og modtagere i perioden.</p></div></div>
        ${renderCategoryBreakdownCompact(categories.slice(0, 5))}
        <div style="height:18px"></div>
        ${renderMerchantReportList(merchants.slice(0, 5))}
      </div>
    </section>
  `;
}

function getAnalysisHeadline(summary, comparison, concentration, quality) {
  if (quality.score < 65) return "Tallene kræver oprydning før de kan bruges hårdt";
  if (summary.savings < 0) return "Perioden bruger mere end der kommer ind";
  if (comparison.previous.expenses && comparison.momExpenseDelta > summary.expenses * 0.18) return "Forbruget er markant højere end forrige periode";
  if (concentration.topCategoryShare > 0.35) return `${concentration.topCategoryName} driver perioden`;
  return "Perioden har positivt cashflow og brugbart overblik";
}

function getAnalysisSubline(summary, pace, concentration, quality) {
  if (quality.score < 65) return `${quality.openItems} åbne oprydningspunkter kan stadig flytte kategorier, relationer eller timing.`;
  if (summary.savings < 0) return `Der mangler ${formatCurrency(Math.abs(summary.savings))} efter forbrug. Dagligt forbrug ligger på ${formatCurrency(pace.dailyAverage)}.`;
  return `${formatCurrency(summary.savings)} tilbage efter forbrug. Største koncentration er ${concentration.topCategoryName || "ingen kategori"} med ${formatPercent(concentration.topCategoryShare)} af forbruget.`;
}

function getAnalysisQuality(periodRows) {
  const checklist = getCleanupChecklistItems(periodRows);
  const uncertain = getUncertainCategoryGroupsForRows(periodRows).length;
  const transferMatches = findTransferMatchesForRows(periodRows).length;
  const movedPending = periodRows.filter((tx) => getEconomicPeriodInfo(tx).moved && !tx.periodLocked).length;
  const score = Math.max(0, Math.min(100, Math.round((1 - checklist.length / Math.max(1, periodRows.length)) * 100)));
  const label = score >= 85 ? "Stærk" : score >= 70 ? "Brugbar" : score >= 55 ? "Kræver review" : "Usikker";
  return { score, label, openItems: checklist.length, uncertain, transferMatches, movedPending };
}

function getAnalysisPace(summary, comparison) {
  const { from, to } = activeDateRange();
  const days = Math.max(1, Math.abs(daysBetween(to, from)) + 1);
  const dailyAverage = summary.expenses / days;
  const dailyIncome = summary.income / days;
  const dailySavings = summary.savings / days;
  const monthlyRunRate = dailyAverage * 30.4;
  const previousDaily = comparison.previous?.expenses ? comparison.previous.expenses / days : 0;
  return { days, dailyAverage, dailyIncome, dailySavings, monthlyRunRate, previousDaily, dailyDelta: previousDaily ? dailyAverage - previousDaily : 0 };
}

function getAnalysisConcentration(categories, merchants, summary) {
  const topCategory = categories[0];
  const topMerchant = merchants[0];
  return {
    topCategoryName: topCategory?.category?.name || "Ingen",
    topCategoryId: topCategory?.category?.id || "",
    topCategoryTotal: topCategory?.total || 0,
    topCategoryShare: summary.expenses ? (topCategory?.total || 0) / summary.expenses : 0,
    topMerchantName: topMerchant?.name || "Ingen",
    topMerchantTotal: topMerchant?.total || 0,
    topMerchantShare: summary.expenses ? (topMerchant?.total || 0) / summary.expenses : 0,
  };
}

function getRecurringCommitmentRows() {
  return getRecurringRows()
    .map((row) => ({ ...row, monthlyEstimate: row.months.length ? row.total / row.months.length : row.total }))
    .sort((a, b) => b.monthlyEstimate - a.monthlyEstimate || b.total - a.total);
}

function getCrosscheckSummary(periodRows, reportingRows) {
  const autoMatches = findAutoSafeTransferMatches(periodRows);
  const excludedRows = reportingRows.filter((tx) => tx.autoExcludedTransfer || isInternalFundingInflow(tx));
  const excludedIds = new Set(excludedRows.map((tx) => tx.id));
  const internalInflows = excludedRows.filter(isInternalFundingInflow);
  const amount = autoMatches.reduce((sum, match) => sum + Number(match.amount || 0), 0);
  const positive = excludedRows.filter((tx) => tx.amount > 0).reduce((sum, tx) => sum + Number(tx.amount || 0), 0);
  const negative = excludedRows.filter((tx) => tx.amount < 0).reduce((sum, tx) => sum + Math.abs(Number(tx.amount || 0)), 0);
  return { autoMatches, excludedIds, excludedRows, internalInflows, amount, positive, negative };
}

function renderCashflowBridge(summary) {
  const max = Math.max(1, summary.income, summary.expenses, Math.abs(summary.savings));
  return `
    <article class="analysis-card analysis-card-wide">
      <div class="analysis-card-head"><span>Cashflow</span><h3>Ind → forbrug → tilbage</h3></div>
      <div class="cashflow-bridge">
        ${renderBridgeBar("Ind", summary.income, max, "income")}
        ${renderBridgeBar("Forbrug", summary.expenses, max, "expense")}
        ${renderBridgeBar("Tilbage", summary.savings, max, summary.savings >= 0 ? "positive" : "negative")}
      </div>
      <p>${summary.income ? `${formatPercent(summary.savingsRate)} af indtægten er tilbage efter forbrug.` : "Der mangler indkomst i perioden."}</p>
    </article>
  `;
}

function renderBridgeBar(label, value, max, tone) {
  const width = Math.max(4, Math.round((Math.abs(Number(value || 0)) / max) * 100));
  return `<div class="bridge-row ${escapeHtml(tone)}"><span>${escapeHtml(label)}</span><i><b style="--width:${width}%"></b></i><strong>${formatCurrency(value)}</strong></div>`;
}

function renderSpendingPacePanel(pace) {
  const tone = pace.dailyDelta <= 0 ? "positive" : "negative";
  return `
    <article class="analysis-card">
      <div class="analysis-card-head"><span>Tempo</span><h3>${formatCurrency(pace.dailyAverage)} / dag</h3></div>
      <p>Run-rate svarer til ${formatCurrency(pace.monthlyRunRate)} pr. 30 dage.</p>
      <div class="analysis-mini-metric ${tone}"><strong>${pace.previousDaily ? `${pace.dailyDelta >= 0 ? "+" : ""}${formatCurrency(pace.dailyDelta)}` : "—"}</strong><small>mod forrige periode pr. dag</small></div>
    </article>
  `;
}

function renderConcentrationPanel(concentration) {
  return `
    <article class="analysis-card">
      <div class="analysis-card-head"><span>Koncentration</span><h3>${formatPercent(concentration.topCategoryShare)}</h3></div>
      <p>${escapeHtml(concentration.topCategoryName)} er største kategori.</p>
      <div class="concentration-bars">
        <button type="button" data-action="open-drilldown" data-drilldown="category" data-id="${escapeHtml(concentration.topCategoryId)}"><span>Kategori</span><i><b style="--width:${Math.round(concentration.topCategoryShare * 100)}%"></b></i><strong>${formatCurrency(concentration.topCategoryTotal)}</strong></button>
        <button type="button" data-action="open-drilldown" data-drilldown="merchant" data-id="${escapeHtml(concentration.topMerchantName)}"><span>Modtager</span><i><b style="--width:${Math.round(concentration.topMerchantShare * 100)}%"></b></i><strong>${formatCurrency(concentration.topMerchantTotal)}</strong></button>
      </div>
    </article>
  `;
}

function renderCrosscheckPanel(crosscheck) {
  const top = crosscheck.autoMatches.slice(0, 3);
  return `
    <article class="analysis-card crosscheck-card">
      <div class="analysis-card-head"><span>Krydstjek</span><h3>${crosscheck.excludedIds.size} poster</h3></div>
      <p>${formatCurrency(crosscheck.positive)} i interne indbetalinger og ${formatCurrency(crosscheck.negative)} i modposter holdes ude af nøgletallene.</p>
      <div class="analysis-list-mini">
        ${top.map((match) => `<button type="button" data-action="open-drilldown" data-drilldown="auto-match" data-id="${escapeHtml(match.id)}"><span>${escapeHtml(match.outTx.description)} ↔ ${escapeHtml(match.inTx.description)}</span><strong>${formatCurrency(match.amount)}</strong></button>`).join("") || `<span class="helper">Ingen krydstjekkede flytninger i perioden.</span>`}
      </div>
    </article>
  `;
}

function renderRecurringCommitmentPanel(rows) {
  const total = rows.slice(0, 8).reduce((sum, row) => sum + Number(row.monthlyEstimate || 0), 0);
  return `
    <article class="analysis-card">
      <div class="analysis-card-head"><span>Faste mønstre</span><h3>${formatCurrency(total)}</h3></div>
      <p>Estimeret månedlig bund fra de tydeligste gentagne udgifter.</p>
      <div class="analysis-list-mini">
        ${rows.slice(0, 3).map((row) => `<button type="button" data-action="open-drilldown" data-drilldown="merchant" data-id="${escapeHtml(row.name)}"><span>${escapeHtml(row.name)}</span><strong>${formatCurrency(row.monthlyEstimate)}</strong></button>`).join("") || `<span class="helper">Ikke nok historik endnu.</span>`}
      </div>
    </article>
  `;
}

function renderMoverPanel(rows) {
  return `
    <article class="analysis-card">
      <div class="analysis-card-head"><span>Ændringer</span><h3>${rows[0] ? `${rows[0].delta >= 0 ? "+" : ""}${formatCurrency(rows[0].delta)}` : "—"}</h3></div>
      <p>${rows[0] ? `${rows[0].category.name} flytter sig mest mod forrige periode.` : "Der mangler sammenlignelige perioder."}</p>
      <div class="analysis-list-mini mover-mini-list">
        ${rows.slice(0, 3).map((row) => `<button class="${row.delta <= 0 ? "positive" : "negative"}" type="button" data-action="open-drilldown" data-drilldown="category" data-id="${escapeHtml(row.category.id)}"><span>${escapeHtml(row.category.name)}</span><strong>${row.delta >= 0 ? "+" : ""}${formatCurrency(row.delta)}</strong></button>`).join("") || `<span class="helper">Ingen store ændringer.</span>`}
      </div>
    </article>
  `;
}

function renderAnalysisQualityPanel(quality) {
  return `
    <article class="analysis-card">
      <div class="analysis-card-head"><span>Datakvalitet</span><h3>${quality.score}%</h3></div>
      <p>${quality.openItems} åbne tjekpunkter: ${quality.uncertain} kategori-grupper, ${quality.transferMatches} konto-match og ${quality.movedPending} månedsskifte.</p>
      <button class="button ghost" type="button" data-nav="oprydning">Ryd op</button>
    </article>
  `;
}

function renderInsightTile(label, value, text, kind = "") {
  return `<div class="insight-tile ${kind}"><span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong><small>${escapeHtml(text)}</small></div>`;
}

function renderExpenseReport() {
  const categories = getPeriodCategoryReportRows();
  const merchants = getPeriodMerchantReportRows().slice(0, 12);
  const largest = getReportTransactions({ onlyExpenses: true }).sort((a, b) => Math.abs(b.amount) - Math.abs(a.amount)).slice(0, 10);
  const total = categories.reduce((sum, row) => sum + row.total, 0);
  return `
    <section class="metric-band section" aria-label="Udgiftsrapport">
      <div class="metric negative"><span>Reelt forbrug</span><strong>${formatCurrency(total)}</strong><small>Ekskl. interne flytninger</small></div>
      <div class="metric"><span>Kategorier</span><strong>${categories.length}</strong><small>Med udgifter i perioden</small></div>
      <div class="metric"><span>Største kategori</span><strong>${escapeHtml(categories[0]?.category.name || "Ingen")}</strong><small>${categories[0] ? formatCurrency(categories[0].total) : "Ingen data"}</small></div>
      <div class="metric"><span>Største modtager</span><strong>${escapeHtml(merchants[0]?.name || "Ingen")}</strong><small>${merchants[0] ? formatCurrency(merchants[0].total) : "Ingen data"}</small></div>
    </section>
    <section class="section workspace-grid">
      <div class="panel pad">
        <div class="section-heading"><div><h2>Kategorier</h2><p>Klik på en kategori for at se modtagere og posteringer.</p></div></div>
        ${renderCategoryReportTable(categories)}
      </div>
      <div class="panel pad">
        <div class="section-heading"><div><h2>Modtagere</h2><p>Topsteder på tværs af kategorier.</p></div></div>
        ${renderMerchantReportList(merchants)}
      </div>
    </section>
    <section class="section panel">
      <div class="panel-header"><div><h2>Største posteringer</h2><p>Klik på en postering for hurtig redigering.</p></div></div>
      ${renderTransactionTable(largest, { compact: true })}
    </section>
  `;
}

function renderCategoryReportTable(rows) {
  if (!rows.length) return `<div class="empty-state"><strong>Ingen udgifter</strong><span>Der er ingen reelle udgifter med de valgte filtre.</span></div>`;
  const max = Math.max(...rows.map((row) => row.total));
  return `
    <div class="breakdown-list report-list">
      ${rows.map((row) => {
        const pct = max ? Math.max(4, Math.round((row.total / max) * 100)) : 0;
        return `
          <button class="report-row" type="button" data-action="open-drilldown" data-drilldown="category" data-id="${escapeHtml(row.category.id)}">
            <span><strong>${escapeHtml(row.category.name)}</strong><small>${row.count} postering${row.count === 1 ? "" : "er"}</small></span>
            <span class="report-row-value">${formatCurrency(row.total)}</span>
            <span class="progress"><span style="--width: ${pct}%; --bar-color: ${escapeHtml(row.category.color)}"></span></span>
          </button>`;
      }).join("")}
    </div>
  `;
}

function renderMerchantReportList(rows) {
  if (!rows.length) return `<div class="empty-state"><strong>Ingen modtagere</strong><span>Der er ingen modtagere at vise.</span></div>`;
  return `
    <div class="account-list">
      ${rows.map((row) => `
        <button class="list-row clickable-row" type="button" data-action="open-drilldown" data-drilldown="merchant" data-id="${escapeHtml(row.name)}">
          <div><strong>${escapeHtml(row.name)}</strong><br /><small>${row.count} postering${row.count === 1 ? "" : "er"}</small></div>
          <strong>${formatCurrency(row.total)}</strong>
        </button>
      `).join("")}
    </div>
  `;
}

function renderTrendReport() {
  const rows = getMonthlySeries(12);
  return `
    <section class="section panel pad visual-panel">
      <div class="section-heading clean-heading"><div><h2>Udvikling måned for måned</h2><p>MoM viser ændring mod måneden før. YoY viser ændring mod samme måned året før.</p></div></div>
      ${renderDashboardTrend(ui.month)}
      <div class="table-wrap" style="margin-top:18px;">
        <table>
          <thead><tr><th>Måned</th><th>Ind</th><th>Ud</th><th>Tilbage</th><th>MoM</th><th>YoY</th></tr></thead>
          <tbody>
            ${rows.map((row) => `
              <tr>
                <td><button class="link-button" type="button" data-month-jump="${escapeHtml(row.month)}">${escapeHtml(monthLabel(row.month))}</button></td>
                <td class="amount amount-positive">${formatCurrency(row.income)}</td>
                <td class="amount amount-negative">${formatCurrency(row.expenses)}</td>
                <td class="amount ${row.savings >= 0 ? "amount-positive" : "amount-negative"}">${formatCurrency(row.savings)}</td>
                <td class="amount ${row.mom <= 0 ? "amount-positive" : "amount-negative"}">${row.previousExpenses ? `${row.mom >= 0 ? "+" : ""}${formatCurrency(row.mom)}` : "—"}</td>
                <td class="amount ${row.yoy <= 0 ? "amount-positive" : "amount-negative"}">${row.lastYearExpenses ? `${row.yoy >= 0 ? "+" : ""}${formatCurrency(row.yoy)}` : "—"}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    </section>
  `;
}

function renderMerchantsDeepReport() {
  const rows = getPeriodMerchantReportRows().slice(0, 25);
  return `
    <section class="section panel pad">
      <div class="section-heading clean-heading"><div><h2>Modtagere og steder</h2><p>Hvor pengene oftest ender i ${escapeHtml(activePeriodLabel())}.</p></div></div>
      ${renderMerchantReportList(rows)}
    </section>
  `;
}

function renderRecurringReport() {
  const analysis = getRecurringSpendAnalysis();
  const rows = analysis.rows;
  if (!rows.length) return `<section class="section panel pad"><div class="empty-state"><strong>Ingen faste mønstre endnu</strong><span>Der skal flere måneder til for at finde gentagne udgifter.</span></div></section>`;
  return `
    <section class="metric-band section" aria-label="Faste udgifter">
      <div class="metric negative"><span>Fast månedlig base</span><strong>${formatCurrency(analysis.monthlyBase)}</strong><small>${analysis.activeRows.length} aktive mønstre</small></div>
      <div class="metric"><span>Årligt niveau</span><strong>${formatCurrency(analysis.yearlyRunRate)}</strong><small>Hvis basen fortsætter</small></div>
      <div class="metric ${analysis.changedRows.length ? "negative" : "positive"}"><span>Steget i pris</span><strong>${analysis.changedRows.length}</strong><small>Mod seneste normalniveau</small></div>
      <div class="metric"><span>Nye mønstre</span><strong>${analysis.newRows.length}</strong><small>Startet de seneste 3 mdr.</small></div>
    </section>

    <section class="fixed-spend-command section">
      <div>
        <p class="eyebrow">Løbende forbrug · ${analysis.months.length} måneder</p>
        <h2>${escapeHtml(fixedSpendHeadline(analysis))}</h2>
        <p>${escapeHtml(fixedSpendSubline(analysis))}</p>
      </div>
      <div class="fixed-spend-category-stack">
        ${analysis.categoryRows.slice(0, 6).map((row) => `
          <button type="button" data-action="open-drilldown" data-drilldown="category" data-id="${escapeHtml(row.category.id)}">
            <span><i style="--dot:${escapeHtml(row.category.color)}"></i>${escapeHtml(row.category.name)}</span>
            <strong>${formatCurrency(row.monthlyEstimate)}</strong>
            <em style="--width:${Math.max(4, Math.round(row.share * 100))}%"></em>
          </button>`).join("")}
      </div>
    </section>

    <section class="section panel pad fixed-spend-panel">
      <div class="section-heading clean-heading"><div><h2>Faste udgifter og gentagne betalinger</h2><p>Modtagere grupperes pr. kategori, så bolig, børn, transport, abonnementer og øvrigt forbrug kan følges separat.</p></div></div>
      <div class="table-wrap">
        <table>
          <thead><tr><th>Modtager</th><th>Kategori</th><th>Frekvens</th><th>Normal/md.</th><th>Senest</th><th>Status</th><th>Måneder</th></tr></thead>
          <tbody>
            ${rows.slice(0, 36).map((row) => `
              <tr>
                <td><button class="link-button" type="button" data-action="open-drilldown" data-drilldown="merchant" data-id="${escapeHtml(row.name)}">${escapeHtml(row.name)}</button></td>
                <td><span class="category-chip" style="--dot:${escapeHtml(row.category?.color || "#999")}">${escapeHtml(row.category?.name || "Ukendt")}</span></td>
                <td>${escapeHtml(row.frequencyLabel)}</td>
                <td class="amount amount-negative">${formatCurrency(row.monthlyEstimate)}</td>
                <td><span>${escapeHtml(monthLabel(row.latestMonth))}</span><br /><small>${formatCurrency(row.latestAmount)}</small></td>
                <td>${renderRecurringStatusBadge(row)}</td>
                <td>${row.months.length}/${analysis.months.length}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    </section>

    <section class="section panel pad fixed-spend-panel">
      <div class="section-heading clean-heading"><div><h2>Måned for måned</h2><p>De største faste betalinger på tværs af måneder. Tomme felter betyder, at modtageren ikke blev fundet den måned.</p></div></div>
      ${renderRecurringMonthMatrix(analysis)}
    </section>
  `;
}

function fixedSpendHeadline(analysis) {
  if (analysis.changedRows[0]) return `${analysis.changedRows[0].name} er steget mest i den faste base`;
  if (analysis.categoryRows[0]) return `${analysis.categoryRows[0].category.name} fylder mest i de faste udgifter`;
  return "De faste udgifter er kortlagt på tværs af kategorier";
}

function fixedSpendSubline(analysis) {
  const top = analysis.categoryRows[0];
  const changed = analysis.changedRows[0];
  if (changed) return `${changed.name} ligger ${formatSignedCurrency(changed.delta)} over normalniveauet. Fast månedlig base er ${formatCurrency(analysis.monthlyBase)}.`;
  if (top) return `${top.category.name} står for ${formatCurrency(top.monthlyEstimate)} pr. måned, svarende til ${formatPercent(top.share)} af den faste base.`;
  return `Fast månedlig base er estimeret til ${formatCurrency(analysis.monthlyBase)}.`;
}

function renderRecurringStatusBadge(row) {
  const labels = { new: "Ny", increased: "Steget", decreased: "Faldet", inactive: "Stoppet?", stable: "Stabil" };
  const tone = row.status === "increased" ? "negative" : row.status === "decreased" || row.status === "stable" ? "positive" : row.status === "inactive" ? "muted" : "";
  return `<span class="status-badge ${tone}">${escapeHtml(labels[row.status] || "Mønster")}</span>`;
}

function renderRecurringMonthMatrix(analysis) {
  const rows = analysis.rows.slice(0, 14);
  const months = analysis.months.slice(-6);
  return `
    <div class="table-wrap fixed-month-matrix">
      <table>
        <thead><tr><th>Modtager</th>${months.map((month) => `<th>${escapeHtml(shortMonthLabel(month))}</th>`).join("")}<th>Normal/md.</th></tr></thead>
        <tbody>
          ${rows.map((row) => `
            <tr>
              <td><span><strong>${escapeHtml(row.name)}</strong><small>${escapeHtml(row.category?.name || "Ukendt")}</small></span></td>
              ${months.map((month) => `<td class="amount ${row.monthAmounts[month] ? "amount-negative" : ""}">${row.monthAmounts[month] ? formatCurrency(row.monthAmounts[month]) : "—"}</td>`).join("")}
              <td class="amount amount-negative">${formatCurrency(row.monthlyEstimate)}</td>
            </tr>`).join("")}
        </tbody>
      </table>
    </div>
  `;
}

function getMonthlySeries(count = 12) {
  return lastMonths(ui.month, count).map((month) => {
    const current = getMonthlySummary(month);
    const previous = getMonthlySummary(shiftMonth(month, -1));
    const lastYear = getMonthlySummary(shiftMonth(month, -12));
    return {
      month,
      ...current,
      previousExpenses: previous.expenses,
      lastYearExpenses: lastYear.expenses,
      mom: current.expenses - previous.expenses,
      yoy: current.expenses - lastYear.expenses,
    };
  });
}

function getRecurringRows() {
  return getRecurringSpendAnalysis().rows;
}

function getRecurringSpendAnalysis({ monthCount = 12 } = {}) {
  const selectedMonth = ui.month || currentMonthKey();
  const months = lastMonths(selectedMonth, monthCount);
  const grouped = new Map();
  for (const month of months) {
    for (const tx of getReportingTransactionsForMonth(month)) {
      if (ui.reportAccountFilter !== "all" && tx.accountId !== ui.reportAccountFilter) continue;
      if (!isReportExpense(tx)) continue;
      const name = merchantName(tx.description);
      const category = categoryById(tx.categoryId);
      const key = `${tx.categoryId || "cat-other"}::${normalize(name)}`;
      const amount = Math.abs(Number(tx.amount || 0));
      const entry = grouped.get(key) || {
        key,
        name,
        category,
        categoryId: tx.categoryId,
        total: 0,
        count: 0,
        months: new Set(),
        monthAmounts: {},
        latestMonth: month,
        latestAmount: 0,
        firstMonth: month,
        examples: [],
      };
      entry.total += amount;
      entry.count += 1;
      entry.months.add(month);
      entry.monthAmounts[month] = (entry.monthAmounts[month] || 0) + amount;
      if (month >= entry.latestMonth) {
        entry.latestMonth = month;
        entry.latestAmount = entry.monthAmounts[month];
      }
      if (month < entry.firstMonth) entry.firstMonth = month;
      if (entry.examples.length < 3) entry.examples.push(tx.description);
      grouped.set(key, entry);
    }
  }
  const rows = Array.from(grouped.values())
    .map((row) => enrichRecurringRow(row, months))
    .filter((row) => row.months.length >= 2 || row.count >= 3)
    .sort((a, b) => b.monthlyEstimate - a.monthlyEstimate || b.total - a.total);
  const activeRows = rows.filter((row) => row.status !== "inactive");
  const monthlyBase = activeRows.reduce((sum, row) => sum + Number(row.monthlyEstimate || 0), 0);
  const categoryMap = new Map();
  for (const row of activeRows) {
    const id = row.category?.id || row.categoryId || "cat-other";
    const entry = categoryMap.get(id) || { category: row.category || categoryById(id) || { id, name: "Ukendt", color: "#999" }, monthlyEstimate: 0, count: 0 };
    entry.monthlyEstimate += row.monthlyEstimate;
    entry.count += 1;
    categoryMap.set(id, entry);
  }
  const categoryRows = Array.from(categoryMap.values())
    .map((row) => ({ ...row, share: monthlyBase ? row.monthlyEstimate / monthlyBase : 0 }))
    .sort((a, b) => b.monthlyEstimate - a.monthlyEstimate);
  const changedRows = activeRows.filter((row) => row.status === "increased").sort((a, b) => b.delta - a.delta);
  const newRows = activeRows.filter((row) => row.status === "new");
  return { rows, activeRows, categoryRows, changedRows, newRows, monthlyBase, yearlyRunRate: monthlyBase * 12, months };
}

function enrichRecurringRow(row, analysisMonths) {
  const months = Array.from(row.months).sort();
  const amounts = months.map((month) => Number(row.monthAmounts[month] || 0)).filter((amount) => amount > 0);
  const latestAmount = Number(row.monthAmounts[row.latestMonth] || row.latestAmount || 0);
  const previousAmounts = amounts.slice(0, -1);
  const normalAmount = previousAmounts.length ? median(previousAmounts) : median(amounts);
  const gaps = monthGaps(months);
  const frequency = inferRecurringFrequency(months, gaps, analysisMonths.length);
  const monthlyEstimate = recurringMonthlyEstimate(row, frequency, analysisMonths.length);
  const delta = latestAmount - normalAmount;
  const latestIndex = analysisMonths.indexOf(row.latestMonth);
  const firstIndex = analysisMonths.indexOf(row.firstMonth);
  const missingRecent = latestIndex >= 0 && latestIndex < analysisMonths.length - 2;
  const relativeChange = normalAmount > 0 ? delta / normalAmount : 0;
  let status = "stable";
  if (missingRecent) status = "inactive";
  else if (firstIndex >= Math.max(0, analysisMonths.length - 3)) status = "new";
  else if (delta > 25 && relativeChange > 0.08) status = "increased";
  else if (delta < -25 && relativeChange < -0.08) status = "decreased";
  return {
    ...row,
    months,
    average: row.total / Math.max(1, row.count),
    normalAmount,
    latestAmount,
    delta,
    frequency,
    frequencyLabel: recurringFrequencyLabel(frequency),
    monthlyEstimate,
    status,
  };
}

function monthGaps(months) {
  const indexes = months.map(monthIndex);
  return indexes.slice(1).map((index, i) => index - indexes[i]);
}

function monthIndex(month) {
  const [year, monthNo] = String(month || "").split("-").map(Number);
  return year * 12 + (monthNo || 1);
}

function inferRecurringFrequency(months, gaps, analysisMonthCount) {
  if (months.length >= Math.max(3, Math.floor(analysisMonthCount * 0.45)) && gaps.filter((gap) => gap <= 1).length >= Math.max(1, gaps.length - 1)) return "monthly";
  if (gaps.some((gap) => gap >= 2 && gap <= 4)) return "quarterly";
  if (gaps.some((gap) => gap >= 10)) return "yearly";
  return "irregular";
}

function recurringFrequencyLabel(frequency) {
  if (frequency === "monthly") return "Månedlig";
  if (frequency === "quarterly") return "Kvartalsvis";
  if (frequency === "yearly") return "Årlig";
  return "Gentagen";
}

function recurringMonthlyEstimate(row, frequency, analysisMonthCount) {
  const months = Array.from(row.months || []);
  const amounts = months.map((month) => Number(row.monthAmounts[month] || 0)).filter((amount) => amount > 0);
  if (!amounts.length) return 0;
  if (frequency === "monthly") return median(amounts.slice(-4));
  if (frequency === "quarterly") return median(amounts) / 3;
  if (frequency === "yearly") return median(amounts) / 12;
  return row.total / Math.max(1, analysisMonthCount);
}

function median(values) {
  const rows = values.map(Number).filter((value) => Number.isFinite(value)).sort((a, b) => a - b);
  if (!rows.length) return 0;
  const mid = Math.floor(rows.length / 2);
  return rows.length % 2 ? rows[mid] : (rows[mid - 1] + rows[mid]) / 2;
}

function renderAccountsReport() {
  const rows = state.accounts.map((account) => ({ account, ...getAccountPeriodSummary(account.id) }));
  return `
    <section class="section panel pad">
      <div class="section-heading"><div><h2>Kontorapport</h2><p>Se ind, ud og interne flytninger pr. konto for ${escapeHtml(activePeriodLabel())}. Klik på en konto for posteringer.</p></div></div>
      <div class="account-list">
        ${rows.map((row) => `
          <button class="list-row clickable-row" type="button" data-action="open-drilldown" data-drilldown="account" data-id="${row.account.id}">
            <div><strong>${escapeHtml(row.account.name)}</strong><br /><small>${escapeHtml(row.account.type)} · ${transactionCountForAccount(row.account.id)} poster i alt</small></div>
            <div class="amount"><span class="amount-positive">${formatCurrency(row.income)}</span><br /><span class="amount-negative">${formatCurrency(row.expenses)}</span><br /><small>Flytning ${formatCurrency(row.transfers)}</small></div>
          </button>
        `).join("")}
      </div>
    </section>
  `;
}

function renderTransfersReport() {
  const matched = getMatchedTransferPairsForRows(getPeriodTransactions());
  const candidates = findTransferMatchesForRows(getPeriodTransactions());
  const movements = getReportTransactions({ onlyTransfers: true });
  return `
    <section class="metric-band section" aria-label="Overførselsrapport">
      <div class="metric positive"><span>Afstemte par</span><strong>${matched.length}</strong><small>Konto-til-konto</small></div>
      <div class="metric"><span>Kandidat-match</span><strong>${candidates.length}</strong><small>Kræver evt. afstemning</small></div>
      <div class="metric"><span>Flytninger</span><strong>${movements.length}</strong><small>Opsparing, investering og interne</small></div>
      <div class="metric"><span>Netto flytning</span><strong>${formatCurrency(movements.reduce((sum, tx) => sum + Number(tx.amount || 0), 0))}</strong><small>På valgte filtre</small></div>
    </section>
    <section class="section workspace-grid">
      <div class="panel pad"><div class="section-heading"><div><h2>Afstemte overførsler</h2><p>Par der ikke tæller som forbrug.</p></div></div>${renderMatchedTransfers(matched)}</div>
      <div class="panel pad"><div class="section-heading"><div><h2>Kandidat-match</h2><p>Match der kan afstemmes.</p></div><button class="button primary" type="button" data-action="apply-transfer-matches">Afstem sikre</button></div>${renderTransferMatches(candidates)}</div>
    </section>
  `;
}

function renderMatchedTransfers(rows) {
  if (!rows.length) return `<div class="empty-state"><strong>Ingen afstemte par</strong><span>Afstem kontooverførsler i Oprydning.</span></div>`;
  return `<div class="account-list">${rows.map((pair) => `<button class="list-row clickable-row" type="button" data-action="open-drilldown" data-drilldown="match" data-id="${pair.groupId}"><div><strong>${escapeHtml(pair.from)} → ${escapeHtml(pair.to)}</strong><br /><small>${formatDate(pair.date)} · ${pair.count} poster</small></div><strong>${formatCurrency(pair.amount)}</strong></button>`).join("")}</div>`;
}

function renderCleanupReport() {
  const cleanup = getCleanupStatusForRows(getPeriodTransactions());
  return `
    <section class="metric-band section">
      <div class="metric"><span>Konto-match</span><strong>${cleanup.transferMatchCount}</strong><small>Kan afstemmes</small></div>
      <div class="metric"><span>Afstemte par</span><strong>${cleanup.matchedInternalCount}</strong><small>Holdes ude af statistik</small></div>
      <div class="metric negative"><span>Ukategoriseret</span><strong>${cleanup.unknownCount}</strong><small>Bør ryddes op</small></div>
      <div class="metric"><span>Mulige flytninger</span><strong>${cleanup.movementCount}</strong><small>Opsparing/investering/interne</small></div>
    </section>
    <section class="section panel pad">
      <div class="section-heading"><div><h2>Oprydningsarbejdsliste</h2><p>Gå til den fulde oprydningsside for bulk-handlinger.</p></div><button class="button primary" type="button" data-nav="oprydning">Åbn oprydning</button></div>
      ${renderNeedsCategoryGroups(getNeedsCategoryGroupsForRows(getPeriodTransactions()).slice(0, 12))}
    </section>
  `;
}

function renderNextBestActions(cleanup) {
  const actions = [];
  if (cleanup.transferMatchCount) actions.push({ title: "Afstem kontooverførsler", text: `${cleanup.transferMatchCount} match kan fjernes fra statistik.`, action: "oprydning", primary: true });
  if (cleanup.movementCount) actions.push({ title: "Marker opsparing/investering", text: `${cleanup.movementCount} posteringer ligner pengeflytninger.`, action: "oprydning" });
  if (cleanup.unknownCount) actions.push({ title: "Ryd “Andet”", text: `${cleanup.unknownCount} posteringer mangler god kategori.`, action: "oprydning" });
  if (!actions.length) actions.push({ title: "Data ser ren ud", text: "Der er ingen oplagte oprydningsopgaver i måneden.", action: "rapporter" });
  return `
    <div class="account-list">
      ${actions.map((item) => `
        <button class="list-row clickable-row" type="button" data-nav="${item.action}">
          <div><strong>${escapeHtml(item.title)}</strong><br /><small>${escapeHtml(item.text)}</small></div>
          <span class="pill ${item.primary ? "" : "muted"}">${item.primary ? "Start her" : "Åbn"}</span>
        </button>
      `).join("")}
    </div>
  `;
}

function renderInsightList(month) {
  const insights = getMonthlyInsights(month);
  if (!insights.length) return `<div class="empty-state"><strong>Ikke nok data</strong><span>Importer flere posteringer eller måneder for flere indsigter.</span></div>`;
  return `
    <div class="account-list">
      ${insights.map((insight) => `
        <button class="list-row clickable-row" type="button" data-action="open-report" data-report="${escapeHtml(insight.report || "udgifter")}">
          <div><strong>${escapeHtml(insight.title)}</strong><br /><small>${escapeHtml(insight.text)}</small></div>
          <span class="pill ${insight.kind === "warning" ? "muted" : ""}">${escapeHtml(insight.badge)}</span>
        </button>
      `).join("")}
    </div>
  `;
}

function getMonthlyInsights(month) {
  const insights = [];
  const summary = getMonthlySummary(month);
  const categories = getCategoryReportRows(month, "all");
  const merchants = getMerchantReportRows(month, "", "all");
  const transfers = getTransactionsForMonth(month).filter((tx) => categoryById(tx.categoryId)?.kind === "transfer");
  const largest = getExpenseTransactionsForMonth(month)[0];
  const previous = getMonthlySummary(shiftMonth(month, -1));
  if (categories[0]) insights.push({ title: `Største kategori er ${categories[0].category.name}`, text: `${formatCurrency(categories[0].total)} fordelt på ${categories[0].count} posteringer.`, badge: "Kategori", report: "udgifter" });
  if (merchants[0]) insights.push({ title: `Topmodtager er ${merchants[0].name}`, text: `${formatCurrency(merchants[0].total)} fordelt på ${merchants[0].count} posteringer.`, badge: "Modtager", report: "udgifter" });
  if (largest) insights.push({ title: "Største enkeltudgift", text: `${largest.description} på ${formatCurrency(Math.abs(largest.amount))}.`, badge: "Post", report: "udgifter" });
  if (transfers.length) insights.push({ title: "Pengeflytninger holdes ude", text: `${transfers.length} poster er markeret som intern/opsparing/investering/udlæg.`, badge: "Rent forbrug", report: "overfoersler" });
  if (previous.expenses > 0) {
    const diff = summary.expenses - previous.expenses;
    insights.push({ title: diff >= 0 ? "Forbruget er højere end sidste måned" : "Forbruget er lavere end sidste måned", text: `${formatCurrency(Math.abs(diff))} ${diff >= 0 ? "mere" : "mindre"} end ${monthLabel(shiftMonth(month, -1))}.`, badge: "Trend", report: "udgifter", kind: diff > 0 ? "warning" : "info" });
  }
  return insights.slice(0, 5);
}

function renderExpensesView() {
  const periodRows = getPeriodTransactions();
  const reportingRows = getPeriodReportingTransactions();
  const summary = getExpenseSummaryForRows(reportingRows);
  const largest = getExpenseTransactionsForRows(reportingRows).slice(0, 12);
  return `
    <section class="metric-band" aria-label="Udgifter for ${escapeHtml(activePeriodLabel())}">
      <div class="metric negative">
        <span>Udgifter i alt</span>
        <strong>${formatCurrency(summary.expenses)}</strong>
        <small>${summary.count} udgift${summary.count === 1 ? "" : "er"}</small>
      </div>
      <div class="metric ${summary.delta <= 0 ? "positive" : "negative"}">
        <span>Mod forrige periode</span>
        <strong>${formatCurrency(summary.delta)}</strong>
        <small>${summary.delta <= 0 ? "Lavere eller uændret forbrug" : "Højere forbrug"}</small>
      </div>
      <div class="metric negative">
        <span>Dagligt snit</span>
        <strong>${formatCurrency(summary.dailyAverage)}</strong>
        <small>Baseret på ${summary.dayBasis} dag${summary.dayBasis === 1 ? "" : "e"}</small>
      </div>
      <div class="metric">
        <span>Største kategori</span>
        <strong>${escapeHtml(summary.biggestCategory?.name || "Ingen")}</strong>
        <small>${summary.biggestCategory ? formatCurrency(summary.biggestCategory.total) : "Ingen udgifter endnu"}</small>
      </div>
    </section>

    <section class="section workspace-grid">
      <div class="panel pad">
        <div class="section-heading">
          <div>
            <h2>Forbrug pr. kategori</h2>
            <p>Det vigtigste overblik: hvor pengene fordeler sig.</p>
          </div>
        </div>
        ${renderCategoryBreakdown(reportingRows)}
      </div>
      <div class="panel pad">
        <div class="section-heading">
          <div>
            <h2>Steder og modtagere</h2>
            <p>Samlet efter tekst på posteringen.</p>
          </div>
        </div>
        ${renderMerchantBreakdown(reportingRows)}
      </div>
    </section>

    <section class="section panel pad">
      <div class="section-heading">
        <div>
          <h2>Noter og relationer</h2>
          <p>Brug noter til at forbinde udlæg, refusioner og overførsler, som ikke fremgår tydeligt af CSV-filen.</p>
        </div>
        <button class="button ghost" type="button" data-action="apply-relations-from-notes">Find relationer fra noter</button>
      </div>
      ${renderRelationInsights(periodRows)}
    </section>

    <section class="section workspace-grid">
      <div class="panel">
        <div class="panel-header">
          <div>
            <h2>Største udgifter</h2>
            <p>De dyreste poster i ${escapeHtml(activePeriodLabel())}.</p>
          </div>
          <button class="button ghost" type="button" data-nav="transaktioner">Ret kategorier</button>
        </div>
        ${renderTransactionTable(largest, { compact: true })}
      </div>
      <div class="panel pad">
        <div class="section-heading">
          <div>
            <h2>Gentagne udgifter</h2>
            <p>Poster der går igen på tværs af måneder.</p>
          </div>
        </div>
        ${renderRecurringCandidates()}
      </div>
    </section>
  `;
}

function cleanupQualityScore(allChecklist, periodRows) {
  if (!periodRows.length) return 100;
  return Math.max(0, Math.min(100, Math.round((1 - allChecklist.length / Math.max(1, periodRows.length)) * 100)));
}

function renderSmartCleanupPanel({ periodRows, allChecklist, overlapSummary, transferMatches, movementRows }) {
  const highTransferCount = findAutoSafeTransferMatches(periodRows).length;
  const highMovementCount = getAutoSafeMoneyMovementCandidates(periodRows).length;
  const categoryBatches = getCategorySuggestionBatches(periodRows).slice(0, 5);
  const periodGroups = getPeriodizationApprovalGroups().slice(0, 5);
  const safeCategoryCount = getSafeCategorySuggestionGroups(periodRows).length;
  const hasWork = overlapSummary.removableCount || highTransferCount || highMovementCount || categoryBatches.length || periodGroups.length;
  if (!hasWork && !ui.undo) return "";
  return `
    <section class="section panel pad smart-cleanup-panel">
      <div class="section-heading clean-heading">
        <div>
          <h2>Smart oprydning</h2>
          <p>Tag de sikre batches først. Alle bulk-handlinger kan fortrydes i denne session.</p>
        </div>
        <div class="actions">
          ${ui.undo ? `<button class="button ghost" type="button" data-action="undo-last-bulk">Fortryd: ${escapeHtml(ui.undo.label)}</button>` : ""}
          <button class="button primary" type="button" data-action="apply-smart-cleanup">Kør sikre batches</button>
        </div>
      </div>
      <div class="smart-cleanup-grid">
        <div class="smart-cleanup-card ${highTransferCount ? "attention" : "done"}">
          <span>Konto-match</span>
          <strong>${highTransferCount}</strong>
          <p>Afstemmer kun par, der allerede er transfer-kategorier og derfor ikke ændrer nøgletal.</p>
          <button class="button ghost" type="button" data-action="apply-auto-safe-transfer-matches" ${highTransferCount ? "" : "disabled"}>Afstem uden talændring</button>
        </div>
        <div class="smart-cleanup-card ${safeCategoryCount ? "attention" : "done"}">
          <span>Kategorier</span>
          <strong>${safeCategoryCount}</strong>
          <p>Høj-sikkerhed grupper kan valideres og gemmes som regler.</p>
          <button class="button ghost" type="button" data-action="apply-safe-category-suggestions" ${safeCategoryCount ? "" : "disabled"}>Anvend sikre</button>
        </div>
        <div class="smart-cleanup-card ${highMovementCount ? "attention" : "done"}">
          <span>Flytninger</span>
          <strong>${highMovementCount}</strong>
          <p>Anvender kun forslag, der ikke flytter poster ind/ud af forbrug eller indkomst.</p>
          <button class="button ghost" type="button" data-action="apply-auto-safe-money-movements" ${highMovementCount ? "" : "disabled"}>Anvend uden talændring</button>
        </div>
        <div class="smart-cleanup-card ${overlapSummary.removableCount ? "attention" : "done"}">
          <span>Dubletter</span>
          <strong>${overlapSummary.removableCount}</strong>
          <p>Overlap mellem CSV og bank-sync fjernes uden at røre bankdata.</p>
          <button class="button ghost" type="button" data-action="remove-overlaps" ${overlapSummary.removableCount ? "" : "disabled"}>Fjern overlap</button>
        </div>
      </div>
      ${periodGroups.length ? `
        <div class="smart-batch-section">
          <div><strong>Månedsskifte-batches</strong><small>Godkend gentagne periodiseringsforslag pr. mønster.</small></div>
          <div class="smart-batch-list">
            ${periodGroups.map((group) => `
              <button class="smart-batch-row" type="button" data-action="approve-periodization-group" data-group="${escapeHtml(group.hash)}">
                <span><strong>${escapeHtml(group.title)}</strong><small>${group.count} poster · ${escapeHtml(group.reason)}</small></span>
                <em>${formatCurrency(group.amount)}</em>
              </button>
            `).join("")}
          </div>
        </div>
      ` : ""}
      ${categoryBatches.length ? `
        <div class="smart-batch-section">
          <div><strong>Kategori-batches</strong><small>Anvend samme forslag på mange modtagere.</small></div>
          <div class="smart-batch-list">
            ${categoryBatches.map((batch) => `
              <button class="smart-batch-row" type="button" data-action="apply-category-suggestion-batch" data-category="${escapeHtml(batch.categoryId)}" data-confidence="78">
                <span><strong>${escapeHtml(batch.categoryName)}</strong><small>${batch.groupCount} grupper · ${batch.txCount} poster · op til ${batch.topMerchants.map(escapeHtml).join(" · ")}</small></span>
                <em>${formatCurrency(batch.amount)}</em>
              </button>
            `).join("")}
          </div>
        </div>
      ` : ""}
    </section>
  `;
}

function renderCleanupView() {
  const periodRows = getPeriodTransactions();
  const reportingRows = getPeriodReportingTransactions();
  const allChecklist = getCleanupChecklistItems(periodRows);
  const checklist = allChecklist.slice(0, 30);
  const periodPending = allChecklist.filter((item) => item.type === "period").length;
  const categoryPending = allChecklist.filter((item) => item.type === "category").length;
  const transferPending = allChecklist.filter((item) => item.type === "transfer" || item.type === "movement").length;
  const totalImpact = allChecklist.reduce((sum, item) => sum + Math.abs(Number(item.amount || 0)), 0);
  const qualityScore = cleanupQualityScore(allChecklist, periodRows);
  const accrualRows = getAccrualSummaryRows();
  const overlapSummary = findOverlapDuplicates();
  const transferMatches = findTransferMatchesForRows(periodRows);
  const movementRows = getMoneyMovementCandidatesForRows(periodRows);

  return `
    <section class="cleanup-hero" aria-label="Oprydning for ${escapeHtml(activePeriodLabel())}">
      <div>
        <p class="eyebrow">Tjek af</p>
        <h2>${allChecklist.length ? `${allChecklist.length} ting tilbage` : "Alt er afkrydset"}</h2>
        <p>${allChecklist.length ? "Start med de sikre batches, og brug derefter checklisten til de få beslutninger der kræver menneskeligt blik." : "Der er ingen åbne oprydningspunkter i den valgte periode."}</p>
      </div>
      <div class="cleanup-hero-metrics">
        <span><strong>${qualityScore}%</strong><small>datatillid</small></span>
        <span><strong>${formatCurrency(totalImpact)}</strong><small>beløb der kan påvirke overblik</small></span>
        <span><strong>${periodPending}</strong><small>månedsskifte</small></span>
        <span><strong>${categoryPending}</strong><small>kategorier</small></span>
        <span><strong>${transferPending}</strong><small>flytninger</small></span>
      </div>
    </section>

    ${renderSmartCleanupPanel({ periodRows, allChecklist, overlapSummary, transferMatches, movementRows })}

    <section class="section panel pad cleanup-workbench">
      <div class="section-heading clean-heading">
        <div>
          <h2>Tjek dette først</h2>
          <p>Godkend forslagene, eller vælg bankdato/nuværende kategori når det er mere korrekt.${allChecklist.length > checklist.length ? ` Viser de ${checklist.length} vigtigste først.` : ""}</p>
        </div>
        <div class="actions">
          <button class="button ghost" type="button" data-action="apply-periodization">Opdatér forslag</button>
          <button class="button ghost" type="button" data-action="improve-categories">Forbedr automatisk</button>
        </div>
      </div>
      ${renderCleanupChecklist(checklist)}
    </section>

    <section class="section workspace-grid cleanup-results-grid">
      <div class="panel pad">
        <div class="section-heading clean-heading">
          <div>
            <h2>Realistisk forbrug efter periodisering</h2>
            <p>Bruger økonomisk måned og fordeler kvartalsvise boligbetalinger over de seneste tre måneder.</p>
          </div>
        </div>
        ${renderCategoryBreakdown(reportingRows)}
      </div>
      <div class="panel pad">
        <div class="section-heading clean-heading">
          <div>
            <h2>Boligposter fordelt over 3 måneder</h2>
            <p>Realkredit og ejerforening tæller som 1/3 i hver af de forgangne tre måneder.</p>
          </div>
        </div>
        ${renderAccrualSummary(accrualRows)}
      </div>
    </section>

    <details class="section panel pad provider-details cleanup-advanced">
      <summary><strong>Avanceret oprydning</strong><span class="pill muted">brug sjældent</span></summary>
      <div class="cleanup-advanced-grid">
        <div>
          <h3>Overlap</h3>
          <p class="helper">Beholder bank-sync-posten og fjerner CSV-dubletter.</p>
          <button class="button ghost" type="button" data-action="remove-overlaps">Fjern ${overlapSummary.removableCount} overlap</button>
        </div>
        <div>
          <h3>Kontooverførsler</h3>
          <p class="helper">Afstemmer sikre par, så flytninger ikke tæller som forbrug.</p>
          <button class="button ghost" type="button" data-action="apply-transfer-matches">Afstem ${transferMatches.filter((match) => match.confidence === "high").length} sikre</button>
        </div>
        <div>
          <h3>Opsparing/investering</h3>
          <p class="helper">Markerer sikre interne flytninger, opsparing og investeringer.</p>
          <button class="button ghost" type="button" data-action="apply-money-movement-suggestions">Anvend ${movementRows.length} forslag</button>
        </div>
      </div>
    </details>
  `;
}

function getPeriodizationGroupKey(tx, info) {
  return [info.rule || "manual", merchantName(tx.description), tx.accountId || "", info.reason || ""].join("|");
}

function getPeriodizationApprovalGroups() {
  const groups = new Map();
  const pending = getPeriodizationReviewRows().filter(({ tx, info }) => !tx.periodLocked && info.moved);
  for (const { tx, info } of pending) {
    const key = getPeriodizationGroupKey(tx, info);
    const entry = groups.get(key) || {
      key,
      hash: simpleHash(key),
      title: merchantName(tx.description) || "Månedsskifte",
      reason: info.reason,
      count: 0,
      amount: 0,
      examples: [],
    };
    entry.count += 1;
    entry.amount += Math.abs(Number(tx.amount || 0));
    if (entry.examples.length < 2) entry.examples.push(tx.description);
    groups.set(key, entry);
  }
  return Array.from(groups.values()).sort((a, b) => b.amount - a.amount || b.count - a.count || a.title.localeCompare(b.title, "da"));
}

function approvePeriodizationGroup(groupHash) {
  let changed = 0;
  for (const { tx, info } of getPeriodizationReviewRows()) {
    if (tx.periodLocked || !info.moved) continue;
    if (simpleHash(getPeriodizationGroupKey(tx, info)) !== groupHash) continue;
    tx.periodMonth = info.periodMonth;
    tx.periodDate = info.periodDate;
    tx.periodRule = info.rule;
    tx.periodConfidence = 100;
    tx.periodReason = `Batch-godkendt: ${info.reason}`;
    tx.periodLocked = true;
    tx.updatedAt = new Date().toISOString();
    changed += 1;
  }
  return changed;
}

function getSafeCategorySuggestionGroups(periodRows, minConfidence = 88) {
  return getUncertainCategoryGroupsForRows(periodRows)
    .filter((group) => group.suggestion?.categoryId && Number(group.suggestion.confidence || 0) >= minConfidence);
}

function getCategorySuggestionBatches(periodRows) {
  const batches = new Map();
  for (const group of getUncertainCategoryGroupsForRows(periodRows).filter((item) => item.suggestion?.categoryId)) {
    const categoryId = group.suggestion.categoryId;
    const category = categoryById(categoryId);
    const entry = batches.get(categoryId) || { categoryId, categoryName: category?.name || "Kategori", groupCount: 0, txCount: 0, amount: 0, confidence: 100, topMerchants: [] };
    entry.groupCount += 1;
    entry.txCount += group.count;
    entry.amount += group.expenseTotal;
    entry.confidence = Math.min(entry.confidence, Number(group.suggestion.confidence || 0));
    if (entry.topMerchants.length < 3) entry.topMerchants.push(group.name);
    batches.set(categoryId, entry);
  }
  return Array.from(batches.values()).sort((a, b) => b.amount - a.amount || b.txCount - a.txCount);
}

function applyCategorySuggestionBatch(categoryId, minConfidence = 78) {
  const merchants = new Set(getUncertainCategoryGroupsForRows(getPeriodTransactions())
    .filter((group) => group.suggestion?.categoryId === categoryId && Number(group.suggestion.confidence || 0) >= minConfidence)
    .map((group) => group.name));
  let changed = 0;
  let rulesCreated = 0;
  for (const merchant of merchants) {
    const result = applyCategoryToMerchantGroup(merchant, categoryId);
    changed += result.changed;
    if (result.ruleCreated) rulesCreated += 1;
  }
  return { changed, rulesCreated, merchantCount: merchants.size };
}

function applySafeCategorySuggestions(minConfidence = 88) {
  let changed = 0;
  let rulesCreated = 0;
  let merchantCount = 0;
  const seen = new Set();
  for (const group of getSafeCategorySuggestionGroups(getPeriodTransactions(), minConfidence)) {
    if (!group.suggestion?.categoryId || seen.has(group.name)) continue;
    seen.add(group.name);
    const result = applyCategoryToMerchantGroup(group.name, group.suggestion.categoryId);
    changed += result.changed;
    if (result.ruleCreated) rulesCreated += 1;
    merchantCount += 1;
  }
  return { changed, rulesCreated, merchantCount };
}

function primaryIncomeAccountId() {
  return getWealthSettings().primaryCashAccountId || state.accounts.find((account) => /sparekassen|løn|lon/i.test(account.name))?.id || state.accounts[0]?.id || "";
}

function isInternalFundingAccount(accountId) {
  if (!accountId || accountId === primaryIncomeAccountId()) return false;
  const account = accountById(accountId);
  if (!account) return false;
  return /(bolig|fælles|faelles|sommerhus|budget|mastercard|depot)/.test(normalize(`${account.name} ${account.type}`));
}

function isInternalFundingInflow(tx) {
  return Number(tx?.amount || 0) > 0 && isInternalFundingAccount(tx?.accountId);
}

function isNoImpactTransferMatch(match) {
  return categoryById(match.outTx.categoryId)?.kind === "transfer" && categoryById(match.inTx.categoryId)?.kind === "transfer";
}

function hasInternalFundingText(tx) {
  const text = normalize(`${tx?.description || ""} ${tx?.note || ""} ${tx?.relationKey || ""} ${accountById(tx?.accountId)?.name || ""}`);
  if (!text) return false;
  if (/\b(wolt|netflix|spotify|forsikring|bilforsikring|institution|vuggestue|restaurant|cafe|kaffe|matas|apotek|meny|rema|netto|foetex|føtex|easypark|parkering)\b/.test(text)) return false;
  return /\b(overforsel|overførsel|overfort|overført|indbetaling|betaling|konto|dankonto|sparkron|sommerhuskonto|faelles|fælles|forbrugskonto|budgetkonto|indlan|indlån|kredit|opsparing|sparekonto|claes)\b/.test(text);
}

function isAutoExcludableTransferMatch(match) {
  if (!match || match.confidence !== "high") return false;
  if (isProtectedIncomeTransaction(match.outTx) || isProtectedIncomeTransaction(match.inTx)) return false;
  if (isNoImpactTransferMatch(match)) return true;
  const outKind = categoryById(match.outTx.categoryId)?.kind;
  const inKind = categoryById(match.inTx.categoryId)?.kind;
  if (outKind === "income" || inKind === "income") return false;
  if (match.dayDiff > 1) return false;
  if (match.amount < 1000) return false;
  return hasInternalFundingText(match.outTx) && hasInternalFundingText(match.inTx);
}

function getAutoExcludedTransferIdsForRows(rows) {
  const ids = new Set(rows.filter(isInternalFundingInflow).map((tx) => tx.id));
  for (const match of findTransferMatchesForRows(rows).filter(isAutoExcludableTransferMatch)) {
    ids.add(match.outTx.id);
    ids.add(match.inTx.id);
  }
  return ids;
}

function findAutoSafeTransferMatches(rows = getPeriodTransactions()) {
  return findTransferMatchesForRows(rows).filter(isAutoExcludableTransferMatch);
}

function getAutoSafeMoneyMovementCandidates(rows = getPeriodTransactions()) {
  return getMoneyMovementCandidatesForRows(rows).filter((tx) => getMoneyMovementSuggestion(tx).confidence === "high" && categoryById(tx.categoryId)?.kind === "transfer");
}

function applyHighConfidenceTransferMatches({ noImpactOnly = false } = {}) {
  const matches = (noImpactOnly ? findAutoSafeTransferMatches(getPeriodTransactions()) : findTransferMatchesForRows(getPeriodTransactions()).filter((match) => match.confidence === "high"));
  let changed = 0;
  for (const match of matches) {
    if (applyInternalTransferMatch(match.outTx, match.inTx)) changed += 1;
  }
  return changed;
}

function applyHighConfidenceMoneyMovementSuggestions({ noImpactOnly = false } = {}) {
  let changed = 0;
  const rows = noImpactOnly ? getAutoSafeMoneyMovementCandidates(getPeriodTransactions()) : getMoneyMovementCandidatesForRows(getPeriodTransactions());
  for (const tx of rows) {
    const suggestion = getMoneyMovementSuggestion(tx);
    if (suggestion.confidence !== "high") continue;
    if (applyCategoryToTransaction(tx.id, suggestion.categoryId, { relationType: suggestion.relationType, relationKey: categoryById(suggestion.categoryId)?.name })) changed += 1;
  }
  return changed;
}

function captureUndoSnapshot(label) {
  return { label, stateJson: JSON.stringify(state), at: new Date().toISOString() };
}

function commitUndoSnapshot(snapshot, changed) {
  if (changed) ui.undo = snapshot;
}

function getCleanupChecklistItems(periodRows) {
  const items = [];
  const overlapSummary = findOverlapDuplicates();
  if (overlapSummary.removableCount > 0) {
    items.push({
      type: "overlap",
      tone: "danger",
      title: "Fjern dubletter fra CSV og bank-sync",
      text: `${overlapSummary.removableCount} overlap fundet i hele datasættet. Bank-sync beholdes som kilde.`,
      amount: 0,
      primary: { action: "remove-overlaps", label: "✓ Fjern overlap" },
    });
  }

  const periodRowsPending = getPeriodizationReviewRows()
    .filter(({ tx, info }) => !tx.periodLocked && info.moved);
  for (const { tx, info } of periodRowsPending) {
    items.push({
      type: "period",
      tone: "attention",
      title: "Godkend økonomisk måned",
      text: `${tx.description} · ${formatDate(tx.date)} → ${monthLabel(info.periodMonth)}. ${info.reason}`,
      amount: tx.amount,
      meta: accountById(tx.accountId)?.name || "Ukendt konto",
      primary: { action: "period-use-suggestion", label: "✓ Godkend", data: { id: tx.id } },
      secondary: { action: "period-use-bank", label: "Brug bankdato", data: { id: tx.id } },
    });
  }

  const uncertainGroups = getUncertainCategoryGroupsForRows(periodRows);
  for (const group of uncertainGroups) {
    const suggestion = group.suggestion?.categoryId ? categoryById(group.suggestion.categoryId) : null;
    const current = categoryById(group.currentCategoryId);
    const canApproveCurrent = current && current.id !== fallbackCategoryId();
    items.push({
      type: "category",
      tone: "attention",
      title: group.name,
      text: suggestion
        ? `Foreslået: ${suggestion.name}. Nuværende: ${current?.name || "Ukendt"}. ${group.count} postering${group.count === 1 ? "" : "er"}.`
        : `Ingen sikkert forslag. Nuværende: ${current?.name || "Ukendt"}. ${group.count} postering${group.count === 1 ? "" : "er"}.`,
      amount: group.expenseTotal,
      meta: group.examples[0] || "Kategori skal valideres",
      primary: suggestion
        ? { action: "bulk-category-group", label: `✓ ${suggestion.name}`, data: { merchant: group.name, category: suggestion.id } }
        : canApproveCurrent
          ? { action: "validate-current-category-group", label: "✓ Nuværende er korrekt", data: { merchant: group.name } }
          : { action: "open-drilldown", label: "Åbn", data: { drilldown: "merchant", id: group.name } },
      secondary: suggestion && canApproveCurrent
        ? { action: "validate-current-category-group", label: "Nuværende er korrekt", data: { merchant: group.name } }
        : null,
    });
  }

  const transferMatches = findTransferMatchesForRows(periodRows)
    .filter((match) => match.confidence === "high");
  for (const match of transferMatches) {
    items.push({
      type: "transfer",
      tone: "neutral",
      title: "Afstem kontooverførsel",
      text: `${accountById(match.outTx.accountId)?.name || "Konto"} → ${accountById(match.inTx.accountId)?.name || "konto"}. ${match.reason}.`,
      amount: match.amount,
      meta: `${formatDate(match.outTx.date)} / ${formatDate(match.inTx.date)}`,
      primary: { action: "apply-transfer-match", label: "✓ Afstem", data: { out: match.outTx.id, in: match.inTx.id } },
    });
  }

  const movementRows = getMoneyMovementCandidatesForRows(periodRows)
    .map((tx) => ({ tx, suggestion: getMoneyMovementSuggestion(tx) }))
    .filter(({ suggestion }) => suggestion.confidence === "high");
  for (const { tx, suggestion } of movementRows) {
    const category = categoryById(suggestion.categoryId);
    items.push({
      type: "movement",
      tone: "neutral",
      title: tx.description,
      text: `${suggestion.reason} Foreslået: ${category?.name || "kategori"}.`,
      amount: tx.amount,
      meta: accountById(tx.accountId)?.name || "Ukendt konto",
      primary: { action: "apply-money-movement", label: `✓ ${category?.name || "Anvend"}`, data: { id: tx.id } },
    });
  }

  return items.sort((a, b) => priorityForCleanupItem(a) - priorityForCleanupItem(b) || Math.abs(Number(b.amount || 0)) - Math.abs(Number(a.amount || 0)));
}

function priorityForCleanupItem(item) {
  if (item.type === "overlap") return 0;
  if (item.type === "period") return 1;
  if (item.type === "category") return 2;
  if (item.type === "transfer") return 3;
  if (item.type === "movement") return 4;
  return 9;
}

function renderCleanupChecklist(items) {
  if (!items.length) {
    return `<div class="empty-state cleanup-empty"><strong>Alt er afkrydset</strong><span>Det valgte overblik bruger nu de bedste kategorier, afstemninger og periodiseringer vi har.</span></div>`;
  }
  return `
    <div class="cleanup-checklist">
      ${items.map((item) => `
        <div class="cleanup-check-row ${escapeHtml(item.tone || "neutral")}">
          ${renderCleanupActionButton(item.primary, "cleanup-checkmark")}
          <div class="cleanup-check-copy">
            <span>${escapeHtml(cleanupTypeLabel(item.type))}</span>
            <strong>${escapeHtml(item.title)}</strong>
            <small>${escapeHtml(item.text)}</small>
            ${item.meta ? `<em>${escapeHtml(item.meta)}</em>` : ""}
          </div>
          <div class="cleanup-check-side">
            <strong>${item.amount ? formatCurrency(Math.abs(Number(item.amount || 0))) : "—"}</strong>
            ${item.secondary ? renderCleanupActionButton(item.secondary, "link-button cleanup-secondary") : ""}
          </div>
        </div>
      `).join("")}
    </div>
  `;
}

function cleanupTypeLabel(type) {
  return {
    overlap: "Dublet",
    period: "Månedsskifte",
    category: "Kategori",
    transfer: "Konto-match",
    movement: "Flytning",
  }[type] || "Tjek";
}

function renderCleanupActionButton(action, className) {
  if (!action) return "";
  const attrs = Object.entries(action.data || {})
    .map(([key, value]) => `data-${escapeHtml(key)}="${escapeHtml(value)}"`)
    .join(" ");
  return `<button class="${escapeHtml(className)}" type="button" data-action="${escapeHtml(action.action)}" ${attrs}>${escapeHtml(action.label)}</button>`;
}

function getAccrualSummaryRows() {
  const { from, to } = activeDateRange();
  return state.transactions
    .map((tx) => ({ tx, accrual: getAccrualAllocation(tx) }))
    .filter(({ accrual }) => accrual?.months?.some((month) => uiMonthEnd(month) >= from && uiMonthStart(month) <= to))
    .sort((a, b) => b.tx.date.localeCompare(a.tx.date));
}

function renderAccrualSummary(rows) {
  if (!rows.length) {
    return `<div class="empty-state compact-empty"><strong>Ingen kvartalsfordeling i perioden</strong><span>Når realkredit eller ejerforening rammer perioden, vises 1/3-fordelingen her.</span></div>`;
  }
  return `
    <div class="accrual-list">
      ${rows.slice(0, 8).map(({ tx, accrual }) => `
        <div class="accrual-row">
          <div>
            <strong>${escapeHtml(tx.description)}</strong>
            <small>${escapeHtml(accrual.reason)} ${accrual.months.map(monthLabel).join(" · ")}</small>
          </div>
          <span><strong>${formatCurrency(Math.abs(Number(tx.amount || 0)) / accrual.months.length)}</strong><small>pr. måned</small></span>
        </div>
      `).join("")}
    </div>
  `;
}

function getPeriodizationReviewRows() {
  const { from, to } = activeDateRange();
  const bankWindowFrom = shiftDate(from, -7);
  const bankWindowTo = shiftDate(to, 7);
  return state.transactions
    .map((tx) => ({ tx, info: getEconomicPeriodInfo(tx), bankMonth: toMonthKey(tx.date), day: Number(String(tx.date).slice(8, 10)) }))
    .filter(({ tx, info, day }) => {
      const inView = info.periodDate >= from && info.periodDate <= to;
      const nearBoundary = day >= 25 || day <= 3;
      const inWindow = tx.date >= bankWindowFrom && tx.date <= bankWindowTo;
      return (info.moved || nearBoundary) && (inView || inWindow);
    })
    .sort((a, b) => Math.abs(Number(b.tx.amount || 0)) - Math.abs(Number(a.tx.amount || 0)) || b.tx.date.localeCompare(a.tx.date));
}

function renderPeriodizationReview(rows) {
  if (!rows.length) return `<div class="empty-state"><strong>Ingen månedsskifteposter</strong><span>Der er ingen store løn-, budget- eller faste betalinger at tjekke i denne periode.</span></div>`;
  return `
    <div class="table-wrap">
      <table>
        <thead><tr><th>Postering</th><th>Bankdato</th><th>Økonomisk måned</th><th>Hvorfor</th><th style="text-align:right;">Beløb</th><th>Handling</th></tr></thead>
        <tbody>
          ${rows.map(({ tx, info }) => {
            const approvedSuggestion = tx.periodLocked && tx.periodRule !== "manual-bankdate";
            const approvedBankDate = tx.periodLocked && tx.periodRule === "manual-bankdate";
            return `
            <tr class="${tx.periodLocked ? "review-row-approved" : ""}">
              <td class="description-cell"><strong>${escapeHtml(tx.description)}</strong><small>${escapeHtml(accountById(tx.accountId)?.name || "Ukendt konto")} · ${escapeHtml(categoryById(tx.categoryId)?.name || "Ukendt")}${tx.periodLocked ? " · godkendt" : ""}</small></td>
              <td>${formatDate(tx.date)}<br /><small class="helper">${escapeHtml(monthLabel(toMonthKey(tx.date)))}</small></td>
              <td>${escapeHtml(monthLabel(info.periodMonth))}${info.moved ? `<br /><span class="pill muted">flyttet</span>` : ""}</td>
              <td><small class="helper">${escapeHtml(info.reason)} · ${info.confidence}%</small></td>
              <td class="amount ${tx.amount >= 0 ? "amount-positive" : "amount-negative"}">${formatCurrency(tx.amount)}</td>
              <td><div class="actions">
                <button class="icon-button" type="button" data-action="period-use-suggestion" data-id="${escapeHtml(tx.id)}" ${approvedSuggestion ? "disabled" : ""}>${approvedSuggestion ? "Godkendt" : "Godkend"}</button>
                <button class="icon-button" type="button" data-action="period-use-bank" data-id="${escapeHtml(tx.id)}" ${approvedBankDate ? "disabled" : ""}>${approvedBankDate ? "Bankdato valgt" : "Bankdato"}</button>
              </div></td>
            </tr>`;
          }).join("")}
        </tbody>
      </table>
    </div>
  `;
}

function renderTransferMatches(matches) {
  if (!matches.length) {
    return `<div class="empty-state"><strong>Ingen konto-match lige nu</strong><span>Når samme beløb går ud af én konto og ind på en anden, vises det her til afstemning.</span></div>`;
  }
  return `
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Fra</th>
            <th>Til</th>
            <th style="text-align:right;">Beløb</th>
            <th>Hvorfor</th>
            <th>Handling</th>
          </tr>
        </thead>
        <tbody>
          ${matches.slice(0, 50).map((match) => `
            <tr>
              <td class="description-cell">
                <strong>${escapeHtml(accountById(match.outTx.accountId)?.name || "Ukendt konto")}</strong>
                <small>${formatDate(match.outTx.date)} · ${escapeHtml(match.outTx.description)}${match.outTx.note ? ` · Note: ${escapeHtml(match.outTx.note)}` : ""}</small>
              </td>
              <td class="description-cell">
                <strong>${escapeHtml(accountById(match.inTx.accountId)?.name || "Ukendt konto")}</strong>
                <small>${formatDate(match.inTx.date)} · ${escapeHtml(match.inTx.description)}${match.inTx.note ? ` · Note: ${escapeHtml(match.inTx.note)}` : ""}</small>
              </td>
              <td class="amount">${formatCurrency(match.amount)}</td>
              <td>
                <span class="pill ${match.confidence === "high" ? "" : "muted"}">${match.confidence === "high" ? "Sikkert" : "Tjek"}</span><br />
                <small class="helper">${escapeHtml(match.reason)}</small>
              </td>
              <td>
                <button class="button primary" type="button" data-action="apply-transfer-match" data-out="${match.outTx.id}" data-in="${match.inTx.id}">Afstem</button>
              </td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `;
}

function renderNeedsCategoryGroups(groups) {
  if (!groups.length) {
    return `<div class="empty-state"><strong>Alt ser kategoriseret ud</strong><span>Der er ingen posteringer i Andet/ukendt i denne måned.</span></div>`;
  }
  const quick = getQuickCategoryActions();
  return `
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Gruppe</th>
            <th>Poster</th>
            <th style="text-align:right;">Udgifter</th>
            <th>Hurtig handling</th>
          </tr>
        </thead>
        <tbody>
          ${groups.map((group) => `
            <tr>
              <td class="description-cell">
                <strong>${escapeHtml(group.name)}</strong>
                <small>${escapeHtml(group.examples.slice(0, 2).join(" · "))}</small>
              </td>
              <td>${group.count}</td>
              <td class="amount amount-negative">${formatCurrency(group.expenseTotal)}</td>
              <td>
                <div class="actions">
                  ${quick.map((item) => `<button class="icon-button" type="button" data-action="bulk-category-group" data-merchant="${escapeHtml(group.name)}" data-category="${escapeHtml(item.categoryId)}">${escapeHtml(item.label)}</button>`).join("")}
                </div>
              </td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `;
}

function renderUncertainCategoryGroups(rows) {
  if (!rows.length) return `<div class="empty-state"><strong>Ingen store usikkerheder</strong><span>De største posteringer i perioden har enten kategori eller tydeligt forslag.</span></div>`;
  const quick = getQuickCategoryActions();
  return `
    <div class="table-wrap">
      <table>
        <thead><tr><th>Gruppe</th><th>Nuværende</th><th>Forslag</th><th style="text-align:right;">Beløb</th><th>Validér</th></tr></thead>
        <tbody>
          ${rows.map((group) => `
            <tr>
              <td class="description-cell"><strong>${escapeHtml(group.name)}</strong><small>${group.count} poster · ${escapeHtml(group.examples.slice(0, 2).join(" · "))}</small></td>
              <td>${renderCategoryPill(categoryById(group.currentCategoryId))}<br /><small class="helper">${escapeHtml(group.reason || "Lav sikkerhed")}</small></td>
              <td>${group.suggestion?.categoryId ? `${renderCategoryPill(categoryById(group.suggestion.categoryId))}<br /><small class="helper">${escapeHtml(group.suggestion.reason)} · ${group.suggestion.confidence}%</small>` : `<span class="pill muted">Intet sikkert forslag</span>`}</td>
              <td class="amount amount-negative">${formatCurrency(group.expenseTotal)}</td>
              <td><div class="actions">
                ${group.suggestion?.categoryId ? `<button class="button primary" type="button" data-action="bulk-category-group" data-merchant="${escapeHtml(group.name)}" data-category="${escapeHtml(group.suggestion.categoryId)}">Anvend</button>` : ""}
                ${quick.slice(0, 5).map((item) => `<button class="icon-button" type="button" data-action="bulk-category-group" data-merchant="${escapeHtml(group.name)}" data-category="${escapeHtml(item.categoryId)}">${escapeHtml(item.label)}</button>`).join("")}
              </div></td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `;
}

function renderMoneyMovementCandidates(rows) {
  if (!rows.length) {
    return `<div class="empty-state"><strong>Ingen oplagte flytninger</strong><span>Når der dukker overførsler, opsparing, investeringer eller MobilePay-refusioner op, vises de her.</span></div>`;
  }
  return `
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Postering</th>
            <th>Forslag</th>
            <th style="text-align:right;">Beløb</th>
            <th>Handling</th>
          </tr>
        </thead>
        <tbody>
          ${rows.map((tx) => {
            const suggestion = getMoneyMovementSuggestion(tx);
            return `
              <tr>
                <td class="description-cell">
                  <strong>${escapeHtml(tx.description)}</strong>
                  <small>${formatDate(tx.date)} · ${escapeHtml(accountById(tx.accountId)?.name || "Ukendt konto")}${tx.note ? ` · ${escapeHtml(tx.note)}` : ""}</small>
                </td>
                <td>${renderCategoryPill(categoryById(suggestion.categoryId))}<br /><small class="helper">${escapeHtml(suggestion.reason)}</small></td>
                <td class="amount ${tx.amount >= 0 ? "amount-positive" : "amount-negative"}">${formatCurrency(tx.amount)}</td>
                <td>
                  <div class="actions">
                    <button class="button primary" type="button" data-action="apply-money-movement" data-id="${tx.id}">Anvend</button>
                    <button class="icon-button" type="button" data-action="mark-transaction-category" data-id="${tx.id}" data-category="cat-transfer">Intern</button>
                    <button class="icon-button" type="button" data-action="mark-transaction-category" data-id="${tx.id}" data-category="cat-savings">Opsparing/investering</button>
                  </div>
                </td>
              </tr>
            `;
          }).join("")}
        </tbody>
      </table>
    </div>
  `;
}

function renderTransactionsView() {
  const rows = getFilteredTransactions();
  const pageSize = Number(ui.transactionsPageSize || 75);
  const totalPages = Math.max(1, Math.ceil(rows.length / pageSize));
  ui.transactionsPage = Math.max(1, Math.min(totalPages, Number(ui.transactionsPage || 1)));
  const start = (ui.transactionsPage - 1) * pageSize;
  const visibleRows = rows.slice(start, start + pageSize);
  return `
    <section class="panel pad bank-only-panel">
      <div class="section-heading">
        <div>
          <h2>Open Banking er kilden</h2>
          <p>Posteringer oprettes ikke manuelt længere. Hent nye posteringer via Bankdata, og brug denne side til søgning, kategorier, noter og relationer.</p>
        </div>
        <div class="actions">
          <button class="button primary" type="button" data-action="sync-latest">Opdatér bankdata</button>
          <button class="button ghost" type="button" data-action="apply-rules">Kør regler</button>
        </div>
      </div>
    </section>

    <section class="section panel pad">
      <div class="section-heading">
        <div>
          <h2>Poster i ${escapeHtml(activePeriodLabel())}</h2>
          <p>${rows.length} post${rows.length === 1 ? "" : "er"} matcher filtrene.</p>
        </div>
      </div>
      ${renderFilters()}
      ${renderTransactionPager(rows.length, start, visibleRows.length, totalPages)}
      ${renderTransactionTable(visibleRows, { compact: false })}
      ${renderTransactionPager(rows.length, start, visibleRows.length, totalPages, "bottom")}
    </section>
  `;
}

function renderTransactionPager(totalRows, start, visibleCount, totalPages, position = "top") {
  if (!totalRows) return "";
  const page = Number(ui.transactionsPage || 1);
  const end = start + visibleCount;
  const nearby = Array.from(new Set([1, page - 1, page, page + 1, totalPages])).filter((item) => item >= 1 && item <= totalPages).sort((a, b) => a - b);
  return `
    <div class="transaction-pager ${escapeHtml(position)}">
      <div>
        <strong>Viser ${start + 1}-${end} af ${totalRows}</strong>
        <small>${totalPages > 1 ? `Side ${page} af ${totalPages}` : "Alle matcher er vist"}</small>
      </div>
      <div class="actions pager-actions">
        <label class="pager-size">Rækker
          <select class="select" id="transactions-page-size" aria-label="Rækker pr. side">
            ${[50, 75, 100, 150].map((size) => option(String(size), String(size), Number(ui.transactionsPageSize || 75) === size)).join("")}
          </select>
        </label>
        <button class="icon-button" type="button" data-action="transactions-page" data-page="prev" ${page <= 1 ? "disabled" : ""}>Forrige</button>
        ${nearby.map((item) => `<button class="icon-button ${item === page ? "active" : ""}" type="button" data-action="transactions-page" data-page="${item}">${item}</button>`).join("")}
        <button class="icon-button" type="button" data-action="transactions-page" data-page="next" ${page >= totalPages ? "disabled" : ""}>Næste</button>
      </div>
    </div>
  `;
}

function renderTransactionForm() {
  const tx = ui.editingId ? state.transactions.find((item) => item.id === ui.editingId) : null;
  const date = tx?.date || todayISO();
  const amount = tx ? formatAmountInput(tx.amount) : "";
  const description = tx?.description || "";
  const accountId = tx?.accountId || state.accounts[0]?.id || "";
  const categoryId = tx?.categoryId || "";
  const note = tx?.note || "";
  const relationType = tx?.relationType || "";
  const relationKey = tx?.relationKey || "";

  return `
    <form id="tx-form" class="form-grid" autocomplete="off">
      <input type="hidden" name="id" value="${escapeHtml(tx?.id || "")}" />
      <div class="field">
        <label for="tx-date">Dato</label>
        <input class="input" id="tx-date" name="date" type="date" value="${escapeHtml(date)}" required />
      </div>
      <div class="field">
        <label for="tx-account">Konto</label>
        <select class="select" id="tx-account" name="accountId" required>
          ${state.accounts.map((account) => option(account.id, account.name, account.id === accountId)).join("")}
        </select>
      </div>
      <div class="field wide">
        <label for="tx-description">Tekst</label>
        <input class="input" id="tx-description" name="description" placeholder="Fx Netto, husleje eller løn" value="${escapeHtml(description)}" required />
      </div>
      <div class="field">
        <label for="tx-amount">Beløb</label>
        <input class="input" id="tx-amount" name="amount" inputmode="decimal" placeholder="-349,95" value="${escapeHtml(amount)}" required />
      </div>
      <div class="field wide">
        <label for="tx-category">Kategori</label>
        <select class="select" id="tx-category" name="categoryId">
          <option value="">Brug regel / vælg senere</option>
          ${state.categories.map((category) => option(category.id, `${category.name} · ${kindLabel(category.kind)}`, category.id === categoryId)).join("")}
        </select>
      </div>
      <div class="field wide">
        <label for="tx-note">Note</label>
        <textarea class="textarea" id="tx-note" name="note" rows="3" placeholder="Fx lagt ud for Mads, refunderes via MobilePay, eller intern overførsel til opsparing">${escapeHtml(note)}</textarea>
      </div>
      <div class="field">
        <label for="tx-relation-type">Relation</label>
        <select class="select" id="tx-relation-type" name="relationType">
          ${RELATION_TYPES.map((type) => option(type.id, type.label, type.id === relationType)).join("")}
        </select>
      </div>
      <div class="field">
        <label for="tx-relation-key">Relationsnavn</label>
        <input class="input" id="tx-relation-key" name="relationKey" placeholder="Fx Mads · middag" value="${escapeHtml(relationKey)}" />
      </div>
      <div class="form-actions">
        <button class="button primary" type="submit">${ui.editingId ? "Gem ændring" : "Gem post"}</button>
        ${ui.editingId ? `<button class="button ghost" type="button" data-action="cancel-edit">Annullér</button>` : ""}
      </div>
    </form>
  `;
}

function renderFilters() {
  return `
    <div class="filters">
      <div class="field">
        <label for="search-input">Søg</label>
        <input class="input" id="search-input" value="${escapeHtml(ui.query)}" placeholder="Søg i tekst, note, relation, konto eller kategori" />
      </div>
      <div class="field">
        <label for="category-filter">Kategori</label>
        <select class="select" id="category-filter">
          <option value="all">Alle kategorier</option>
          ${state.categories.map((category) => option(category.id, category.name, ui.categoryFilter === category.id)).join("")}
        </select>
      </div>
      <div class="field">
        <label for="account-filter">Konto</label>
        <select class="select" id="account-filter">
          <option value="all">Alle konti</option>
          ${state.accounts.map((account) => option(account.id, account.name, ui.accountFilter === account.id)).join("")}
        </select>
      </div>
    </div>
  `;
}

function renderBankSyncView() {
  const bankSync = getBankSyncState();
  const eb = bankSync.enableBanking || {};
  const ebConfig = eb.config || {};
  const ebAccounts = eb.accounts || [];
  const ebConfigured = ebConfig.configured;
  const coverage = getDataCoverage();
  return `
    <section class="dashboard-hero bank-hero" aria-label="Bankdata status">
      <div class="hero-copy">
        <span class="hero-month">Bankdata</span>
        <h2>${ebConfigured ? "Forbundet" : "Ikke forbundet"}</h2>
        <div class="hero-amount bank-amount">${ebAccounts.length || 0} konti</div>
        <div class="delta-row">
          <span class="delta-pill positive"><small>Seneste sync</small><strong>${eb.lastSyncAt ? formatDateTime(eb.lastSyncAt) : "—"}</strong><em>${eb.lastImportCount ? `${eb.lastImportCount} nye poster` : "klar til sync"}</em></span>
          <span class="delta-pill"><small>Historik i appen</small><strong>${coverage.first ? `${formatDate(coverage.first)} → ${formatDate(coverage.last)}` : "—"}</strong><em>${coverage.count} posteringer</em></span>
        </div>
      </div>
      <div class="cashflow-panel">
        <div class="quick-sync-stack">
          <button class="button primary large-action" type="button" data-action="eb-sync-range" data-months="12">Hent 12 måneder</button>
          <button class="button ghost" type="button" data-action="eb-sync-range" data-months="6">Hent 6 måneder</button>
          <button class="button ghost" type="button" data-action="eb-sync-range" data-months="3">Hent 3 måneder</button>
          <button class="button ghost" type="button" data-action="remove-overlaps">Fjern overlap</button>
        </div>
      </div>
    </section>

    <section class="section panel pad">
      <div class="section-heading clean-heading">
        <div>
          <h2>Synkronisér</h2>
          <p>Vælg en periode, hent bankposter og ryd overlap bagefter.</p>
        </div>
        <div class="actions">
          <button class="button ghost" type="button" data-action="eb-accounts">Opdatér konti</button>
          <button class="button primary" type="button" data-action="eb-sync">Hent valgt periode</button>
        </div>
      </div>
      <div class="form-grid compact">
        <div class="field"><label for="sync-date-from">Fra</label><input class="input" id="sync-date-from" type="date" value="${escapeHtml(ui.syncDateFrom)}" /></div>
        <div class="field"><label for="sync-date-to">Til</label><input class="input" id="sync-date-to" type="date" value="${escapeHtml(ui.syncDateTo)}" /></div>
        <div class="field"><label>Status</label><div class="inline-status ${ebConfigured ? "positive" : "negative"}">${ebConfigured ? "Enable Banking er klar" : "Opsætning mangler"}</div></div>
      </div>
    </section>

    <section class="section panel pad">
      <div class="section-heading clean-heading">
        <div>
          <h2>Konti</h2>
          <p>${ebAccounts.length ? `${ebAccounts.length} konti er forbundet.` : "Klik Opdatér konti når samtykke er aktivt."}</p>
        </div>
      </div>
      ${renderEnableBankingAccounts(ebAccounts)}
    </section>

    <details class="section panel pad provider-details">
      <summary><strong>Teknisk opsætning</strong><span class="pill muted">sjældent nødvendig</span></summary>
      <div class="section split" style="margin-top:18px;">
        <div class="panel subtle pad">
          <h2>Enable Banking</h2>
          <div class="actions" style="justify-content:flex-start; margin-bottom:14px;">
            <button class="button ghost" type="button" data-action="eb-status">Status</button>
            <button class="button ghost" type="button" data-action="eb-diagnostics">Diagnose</button>
            <button class="button ghost" type="button" data-action="eb-connect">Nyt samtykke</button>
            <button class="button ghost" type="button" data-action="eb-generate-keys">Vis certifikat</button>
          </div>
          ${renderEnableBankingDiagnostics(eb.diagnostics)}
        </div>
        <div class="panel subtle pad">
          <h2>Application ID</h2>
          <form id="eb-setup-form" class="settings-stack" autocomplete="off">
            <div class="field"><label for="eb-app-id">Application ID</label><input class="input" id="eb-app-id" name="appId" placeholder="Application ID fra Enable Banking" /></div>
            <input type="hidden" name="aspspName" value="${escapeHtml(ebConfig.aspspName || "Sparekassen Kronjylland")}" />
            <input type="hidden" name="country" value="${escapeHtml(ebConfig.country || "DK")}" />
            <input type="hidden" name="language" value="${escapeHtml(ebConfig.language || "da")}" />
            <button class="button primary" type="submit">Gem</button>
          </form>
        </div>
      </div>
    </details>
  `;
}

function getDataCoverage() {
  const rows = state.transactions.filter((tx) => tx.source !== "demo" && tx.date).sort((a, b) => a.date.localeCompare(b.date));
  return { count: rows.length, first: rows[0]?.date || "", last: rows.at(-1)?.date || "" };
}

function renderEnableBankingDiagnostics(diagnostics) {
  if (!diagnostics) {
    return `<p class="helper">Kør diagnose for at validere certifikat, Application ID, lokal JWT-signering og kontakt til Enable Banking API.</p>`;
  }
  const rows = [
    [".env-fil", diagnostics.envFileExists, diagnostics.envFileExists ? "Fundet" : "Mangler"],
    ["Privat nøgle", diagnostics.privateKeyExists, diagnostics.privateKeyExists ? "Fundet lokalt" : "Mangler"],
    ["Certifikat", diagnostics.certificateExists, diagnostics.certificateExists ? "Fundet" : "Mangler"],
    ["Application ID", diagnostics.appIdConfigured, diagnostics.appIdConfigured ? "Sat" : "Mangler"],
    ["JWT", diagnostics.jwt?.ok, diagnostics.jwt?.message || "Ikke testet"],
    ["API", diagnostics.api?.ok, diagnostics.api?.message || "Ikke testet"],
  ];
  return `
    <div class="account-list diagnostics-list">
      ${rows.map(([label, ok, text]) => `
        <div class="list-row">
          <div><strong>${escapeHtml(label)}</strong><br /><small>${escapeHtml(text)}</small></div>
          <span class="pill ${ok ? "" : "muted"}">${ok ? "OK" : "Tjek"}</span>
        </div>
      `).join("")}
    </div>
  `;
}

function renderEnableBankingAccounts(accounts) {
  if (!accounts.length) return `<div class="empty-state"><strong>Ingen Enable Banking-konti hentet</strong><span>Klik “Hent konti” efter MitID-samtykke-flowet.</span></div>`;
  const bankSync = getBankSyncState();
  return `
    <div class="account-list">
      ${accounts.map((account) => {
        const selected = bankSync.accountMappings?.[account.id] || findAccountByName(account.name)?.id || `new:${account.name}`;
        const balance = account.balances?.[0]?.balance_amount?.amount || account.balances?.[0]?.balanceAmount?.amount || account.balances?.[0]?.amount || "";
        return `
          <div class="list-row">
            <div>
              <strong>${escapeHtml(account.name)}</strong><br />
              <small>${escapeHtml(account.iban || account.id)}${balance ? ` · saldo ${escapeHtml(balance)} ${escapeHtml(account.currency || "DKK")}` : ""}</small>
            </div>
            <select class="select" data-eb-map="${escapeHtml(account.id)}" aria-label="Map ${escapeHtml(account.name)} til lokal konto">
              ${state.accounts.map((local) => option(local.id, local.name, selected === local.id)).join("")}
              ${option(`new:${account.name}`, `Opret ny: ${account.name}`, selected.startsWith("new:"))}
            </select>
          </div>
        `;
      }).join("")}
    </div>
  `;
}

function renderLocalCsvFolderPanel() {
  return `
    <section class="section panel pad">
      <div class="section-heading">
        <div>
          <h2>Gratis fallback: lokal CSV-mappe</h2>
          <p>Hvis PSD2 driller, kan Node-serveren læse CSV-filer direkte fra <span class="kbd">Documents/Privatøkonomi</span> uden browserens filvælger.</p>
        </div>
        <button class="button ghost" type="button" data-action="local-csv-load">Indlæs CSV-mappe</button>
      </div>
      <p class="helper">Det er ikke “ægte” bank-sync, men det er stabilt, gratis og privat — og bruger samme importlogik som upload.</p>
    </section>
  `;
}

function renderGoCardlessFallbackPanel(bankSync) {
  const config = bankSync.config;
  const accounts = bankSync.accounts || [];
  const configured = config?.configured;
  return `
    <details class="section panel pad provider-details">
      <summary><strong>Alternativ / fallback: GoCardless Bank Account Data</strong> <span class="pill ${configured ? "" : "muted"}">${configured ? "konfigureret" : "kræver B2B/API keys"}</span></summary>
      <div class="section-heading" style="margin-top: 18px;">
        <div>
          <h2>GoCardless API keys</h2>
          <p>GoCardless virker kun hvis du selv kan oprette API keys. De gemmes kun i den lokale <span class="kbd">.env</span>.</p>
        </div>
        <a class="button ghost" href="https://bankaccountdata.gocardless.com" target="_blank" rel="noreferrer">Åbn GoCardless</a>
      </div>
      <form id="gc-keys-form" class="form-grid" autocomplete="off">
        <div class="field wide"><label for="gc-secret-id">Secret ID</label><input class="input" id="gc-secret-id" name="secretId" placeholder="Indsæt Secret ID fra GoCardless" /></div>
        <div class="field wide"><label for="gc-secret-key">Secret Key</label><input class="input" id="gc-secret-key" name="secretKey" type="password" placeholder="Indsæt Secret Key fra GoCardless" /></div>
        <div class="field"><label for="gc-institution-id">Institution</label><input class="input" id="gc-institution-id" name="institutionId" value="${escapeHtml(config?.institutionId || "SPAREKASSEN_KRONJYLLAND_KRONDK22")}" /></div>
        <div class="field"><label for="gc-country">Land</label><input class="input" id="gc-country" name="country" value="${escapeHtml(config?.country || "DK")}" /></div>
        <div class="form-actions"><button class="button primary" type="submit">Gem keys og kør diagnose</button></div>
      </form>
      <div class="section split" style="margin-top: 18px;">
        <div class="panel subtle pad">
          <h2>Forbind og hent</h2>
          <div class="actions">
            <button class="button ghost" type="button" data-action="gc-status">Tjek status</button>
            <button class="button ghost" type="button" data-action="gc-diagnostics">Kør diagnose</button>
            <button class="button primary" type="button" data-action="gc-connect">Opret samtykke</button>
            <button class="button ghost" type="button" data-action="gc-accounts">Hent konti</button>
            <button class="button primary" type="button" data-action="gc-sync">Synkronisér</button>
          </div>
          <label class="pill muted" style="margin-top: 12px;"><input id="gc-auto-sync" type="checkbox" ${bankSync.autoSyncOnOpen ? "checked" : ""} /> GoCardless-sync ved app-start</label>
          <p class="helper"><strong>Seneste samtykke:</strong> ${escapeHtml(bankSync.lastRequisitionId || "Ikke oprettet endnu")}</p>
        </div>
        <div class="panel subtle pad">
          <h2>GoCardless-diagnose</h2>
          ${renderGoCardlessDiagnostics(bankSync.diagnostics)}
        </div>
      </div>
      <div style="margin-top: 18px;">
        <h2>GoCardless-kontomapping</h2>
        ${renderGoCardlessAccounts(accounts)}
      </div>
    </details>
  `;
}

function renderGoCardlessDiagnostics(diagnostics) {
  if (!diagnostics) {
    return `<p class="helper">Kør diagnose for at validere .env, API-token og Sparekassen Kronjylland institutionen.</p>`;
  }
  const rows = [
    [".env-fil", diagnostics.envFileExists, diagnostics.envFileExists ? "Fundet" : "Mangler"],
    ["Secret ID", diagnostics.hasSecretId, diagnostics.hasSecretId ? "Sat" : "Mangler"],
    ["Secret Key", diagnostics.hasSecretKey, diagnostics.hasSecretKey ? "Sat" : "Mangler"],
    ["API-token", diagnostics.token?.ok, diagnostics.token?.message || "Ikke testet"],
    ["Institution", diagnostics.institution?.ok, diagnostics.institution?.message || diagnostics.institutionId],
  ];
  return `
    <div class="account-list diagnostics-list">
      ${rows.map(([label, ok, text]) => `
        <div class="list-row">
          <div><strong>${escapeHtml(label)}</strong><br /><small>${escapeHtml(text)}</small></div>
          <span class="pill ${ok ? "" : "muted"}">${ok ? "OK" : "Tjek"}</span>
        </div>
      `).join("")}
    </div>
  `;
}

function renderGoCardlessAccounts(accounts) {
  if (!accounts.length) return `<div class="empty-state"><strong>Ingen GoCardless-konti hentet</strong><span>Klik “Hent konti fra GoCardless” efter samtykke-flowet.</span></div>`;
  const bankSync = getBankSyncState();
  return `
    <div class="account-list">
      ${accounts.map((account) => {
        const selected = bankSync.accountMappings?.[account.id] || findAccountByName(account.name)?.id || `new:${account.name}`;
        const latestBalance = account.balances?.[0]?.balanceAmount?.amount;
        return `
          <div class="list-row">
            <div>
              <strong>${escapeHtml(account.name)}</strong><br />
              <small>${escapeHtml(account.iban || account.id)}${latestBalance ? ` · saldo ${escapeHtml(latestBalance)} ${escapeHtml(account.currency || "DKK")}` : ""}</small>
            </div>
            <select class="select" data-gc-map="${escapeHtml(account.id)}" aria-label="Map ${escapeHtml(account.name)} til lokal konto">
              ${state.accounts.map((local) => option(local.id, local.name, selected === local.id)).join("")}
              ${option(`new:${account.name}`, `Opret ny: ${account.name}`, selected.startsWith("new:"))}
            </select>
          </div>
        `;
      }).join("")}
    </div>
  `;
}

function renderImportView() {
  const hasAccounts = state.accounts.length > 0;
  return `
    <section class="split">
      <div class="panel pad">
        <div class="section-heading">
          <div>
            <h2>Upload bankfil</h2>
            <p>CSV-filen bliver kun læst i browseren. Ingen banklogin og ingen betaling.</p>
          </div>
          <div class="actions">
            <button class="button ghost" type="button" data-action="add-default-accounts">Klargør standardkonti</button>
            <button class="button ghost" type="button" data-action="local-csv-load">Indlæs lokal CSV-mappe</button>
            <a class="button ghost" href="sample-sparekassen.csv" download>Hent eksempel</a>
          </div>
        </div>
        <div class="form-grid compact" style="margin-bottom: 16px;">
          <div class="field">
            <label for="import-account">Standardkonto</label>
            <select class="select" id="import-account" ${hasAccounts ? "" : "disabled"}>
              ${state.accounts.map((account) => option(account.id, account.name, ui.importAccountId === account.id)).join("")}
            </select>
          </div>
          <div class="field">
            <label for="import-month">Importer kun måned</label>
            <input class="input" id="import-month" type="month" value="${escapeHtml(ui.importMonth)}" />
          </div>
          <label class="field" style="align-self:end;">
            <span class="label">Filter</span>
            <span class="pill muted"><input id="import-only-month" type="checkbox" ${ui.importOnlyMonth ? "checked" : ""} /> Kun valgt måned</span>
          </label>
        </div>
        <label class="import-zone" for="csv-file">
          <input id="csv-file" type="file" accept=".csv,text/csv,text/plain" multiple ${hasAccounts ? "" : "disabled"} />
          <span>
            <strong>${hasAccounts ? "Slip eller vælg én eller flere CSV-filer" : "Opret en konto først"}</strong>
            <p>Vælg alle kontoudtog på én gang. Appen foreslår konto ud fra filnavnet og opretter manglende konti ved import.</p>
          </span>
        </label>
      </div>
      <div class="panel pad">
        <h2>Sådan gør du</h2>
        <p class="helper">
          1. Log ind i Sparekassen Kronjylland.<br />
          2. Eksportér posteringer som CSV for hver konto.<br />
          3. Vælg alle filerne samtidig og kontrollér konto + kolonnemapping pr. fil.<br />
          4. Importér — dubletter og måneder uden for filteret springes over.
        </p>
        <p class="helper"><strong>Tip:</strong> Filnavne som “Fællesbudget konto.csv” bliver automatisk foreslået som konto. Jeg har sat importen til kun at tage april som standard.</p>
      </div>
    </section>
    ${ui.importDraft ? renderImportDraft() : ""}
  `;
}

function renderImportDraft() {
  const files = ui.importDraft?.files || [];
  if (!files.length) return "";
  const totalRows = files.reduce((sum, file) => sum + file.rows.length, 0);
  const canImport = files.some((file) => file.map.date && file.map.description && file.map.amount && file.accountChoice);
  return `
    <section class="section panel pad">
      <div class="section-heading">
        <div>
          <h2>Klargør import</h2>
          <p>${files.length} fil${files.length === 1 ? "" : "er"} · ${totalRows} række${totalRows === 1 ? "" : "r"} fundet${ui.importOnlyMonth ? ` · importerer kun ${escapeHtml(monthLabel(ui.importMonth))}` : ""}</p>
        </div>
        <button class="button primary" type="button" data-action="import-csv" ${canImport ? "" : "disabled"}>Importér alle filer</button>
      </div>
      <div class="import-file-list">
        ${files.map((draft, index) => renderImportFileDraft(draft, index)).join("")}
      </div>
    </section>
  `;
}

function renderImportFileDraft(draft, index) {
  const rows = draft.rows.slice(0, 3);
  return `
    <div class="import-file-card">
      <div class="section-heading">
        <div>
          <h3>${escapeHtml(draft.fileName)}</h3>
          <p>${escapeHtml(draft.headerless ? "Bankfil uden overskrifter" : "CSV med overskrifter")} · ${draft.rows.length} række${draft.rows.length === 1 ? "" : "r"}</p>
        </div>
      </div>
      <div class="mapping-grid">
        <div class="field">
          <label for="draft-account-${index}">Konto</label>
          <select class="select" id="draft-account-${index}" data-draft-account="${index}">
            ${state.accounts.map((account) => option(account.id, account.name, draft.accountChoice === account.id)).join("")}
            ${draft.accountChoice.startsWith("new:") ? option(draft.accountChoice, `Opret: ${draft.accountName}`, true) : option(`new:${draft.accountName}`, `Opret: ${draft.accountName}`, false)}
          </select>
        </div>
        ${renderMappingSelect(index, "date", "Dato")}
        ${renderMappingSelect(index, "description", "Tekst")}
        ${renderMappingSelect(index, "amount", "Beløb")}
        ${renderMappingSelect(index, "counterparty", "Modpart (valgfri)")}
      </div>
      <div class="table-wrap import-preview">
        <table>
          <thead>
            <tr>${draft.headers.map((header) => `<th>${escapeHtml(header)}</th>`).join("")}</tr>
          </thead>
          <tbody>
            ${rows.map((row) => `<tr>${draft.headers.map((header) => `<td>${escapeHtml(row[header] || "")}</td>`).join("")}</tr>`).join("")}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function renderMappingSelect(index, key, label) {
  const draft = ui.importDraft.files[index];
  return `
    <div class="field">
      <label for="map-${index}-${key}">${escapeHtml(label)}</label>
      <select class="select" id="map-${index}-${key}" data-draft-index="${index}" data-csv-map="${key}">
        <option value="">Vælg kolonne</option>
        ${draft.headers.map((header) => option(header, header, draft.map[key] === header)).join("")}
      </select>
    </div>
  `;
}

function renderAccountsView() {
  return `
    <section class="split">
      <div class="panel pad">
        <div class="section-heading">
          <div>
            <h2>Konti</h2>
            <p>Samlet saldo: <strong>${formatCurrency(getTotalBalance())}</strong></p>
          </div>
        </div>
        ${renderAccountsList()}
      </div>
      <div class="panel pad">
        <h2>Opret konto</h2>
        <form id="account-form" class="settings-stack" autocomplete="off">
          <div class="field">
            <label for="account-name">Navn</label>
            <input class="input" id="account-name" name="name" placeholder="Fx Budgetkonto" required />
          </div>
          <div class="field">
            <label for="account-type">Type</label>
            <input class="input" id="account-type" name="type" placeholder="Fx Bankkonto" required />
          </div>
          <div class="field">
            <label for="account-balance">Saldo</label>
            <input class="input" id="account-balance" name="balance" inputmode="decimal" placeholder="0,00" />
          </div>
          <button class="button primary" type="submit">Tilføj konto</button>
        </form>
      </div>
    </section>
  `;
}

function renderAccountsList() {
  if (!state.accounts.length) {
    return `<div class="empty-state"><strong>Ingen konti endnu</strong><span>Opret mindst én konto før du importerer CSV.</span></div>`;
  }
  return `
    <div class="account-list">
      ${state.accounts.map((account) => {
        const summary = getAccountMonthlySummary(account.id, ui.month);
        return `
        <div class="list-row">
          <div>
            <strong>${escapeHtml(account.name)}</strong><br />
            <small>${escapeHtml(account.type)} · ${transactionCountForAccount(account.id)} post${transactionCountForAccount(account.id) === 1 ? "" : "er"} · ${escapeHtml(monthLabel(ui.month))}: ind ${formatCurrency(summary.income)}, ud ${formatCurrency(summary.expenses)}, flytning ${formatCurrency(summary.transfers)}</small>
          </div>
          <div class="actions">
            <input class="input balance-input" data-account-balance="${account.id}" inputmode="decimal" value="${escapeHtml(formatAmountInput(account.balance))}" aria-label="Saldo for ${escapeHtml(account.name)}" ${privacyInputAttrs()} />
            <button class="icon-button" type="button" data-action="delete-account" data-id="${account.id}" aria-label="Slet ${escapeHtml(account.name)}">Slet</button>
          </div>
        </div>`;
      }).join("")}
    </div>
  `;
}

function renderAccountMiniList() {
  if (!state.accounts.length) return `<div class="empty-state"><strong>Ingen konti</strong><span>Opret en konto for at starte.</span></div>`;
  return `
    <div class="account-list">
      ${state.accounts.map((account) => `
        <div class="list-row">
          <div>
            <strong>${escapeHtml(account.name)}</strong><br />
            <small>${escapeHtml(account.type)}</small>
          </div>
          <strong>${formatCurrency(Number(account.balance || 0))}</strong>
        </div>
      `).join("")}
    </div>
  `;
}

function renderCategoriesView() {
  return `
    <section class="split">
      <div class="panel pad">
        <div class="section-heading">
          <div>
            <h2>Kategorier</h2>
            <p>Hold listen kort, så dashboardet er nemt at læse.</p>
          </div>
        </div>
        ${renderCategoryList()}
      </div>
      <div class="panel pad">
        <h2>Ny kategori</h2>
        <form id="category-form" class="settings-stack" autocomplete="off">
          <div class="field">
            <label for="category-name">Navn</label>
            <input class="input" id="category-name" name="name" placeholder="Fx Gaver" required />
          </div>
          <div class="field">
            <label for="category-kind">Type</label>
            <select class="select" id="category-kind" name="kind">
              <option value="expense">Udgift</option>
              <option value="income">Indtægt</option>
              <option value="transfer">Intern overførsel</option>
            </select>
          </div>
          <div class="field">
            <label for="category-color">Farve</label>
            <input class="input" id="category-color" name="color" type="color" value="#245f56" />
          </div>
          <button class="button primary" type="submit">Tilføj kategori</button>
        </form>
      </div>
    </section>

    <section class="section split">
      <div class="panel pad">
        <div class="section-heading">
          <div>
            <h2>Regler</h2>
            <p>Hvis teksten indeholder ordet, sættes kategorien automatisk ved import.</p>
          </div>
          <button class="button ghost" type="button" data-action="apply-rules">Kør regler nu</button>
        </div>
        ${renderRuleList()}
      </div>
      <div class="panel pad">
        <h2>Ny regel</h2>
        <form id="rule-form" class="settings-stack" autocomplete="off">
          <div class="field">
            <label for="rule-keyword">Tekst indeholder</label>
            <input class="input" id="rule-keyword" name="keyword" placeholder="Fx netto" required />
          </div>
          <div class="field">
            <label for="rule-category">Kategori</label>
            <select class="select" id="rule-category" name="categoryId" required>
              ${state.categories.map((category) => option(category.id, category.name, false)).join("")}
            </select>
          </div>
          <button class="button primary" type="submit">Tilføj regel</button>
        </form>
      </div>
    </section>
  `;
}

function renderCategoryList() {
  if (!state.categories.length) {
    return `<div class="empty-state"><strong>Ingen kategorier</strong><span>Tilføj en kategori for at sortere poster.</span></div>`;
  }
  return `
    <div class="category-list">
      ${state.categories.map((category) => `
        <div class="list-row">
          <div>
            <span class="color-dot" style="--dot: ${escapeHtml(category.color)}"></span>
            <strong>${escapeHtml(category.name)}</strong><br />
            <small>${kindLabel(category.kind)} · ${transactionCountForCategory(category.id)} post${transactionCountForCategory(category.id) === 1 ? "" : "er"}</small>
          </div>
          <button class="icon-button" type="button" data-action="delete-category" data-id="${category.id}">Slet</button>
        </div>
      `).join("")}
    </div>
  `;
}

function renderRuleList() {
  if (!state.rules.length) {
    return `<div class="empty-state"><strong>Ingen regler</strong><span>Opret fx “netto” → Dagligvarer.</span></div>`;
  }
  return `
    <div class="rule-list">
      ${state.rules.map((rule) => {
        const category = categoryById(rule.categoryId);
        return `
          <div class="list-row">
            <div>
              <strong>“${escapeHtml(rule.keyword)}”</strong><br />
              <small>→ ${escapeHtml(category?.name || "Ukendt kategori")}</small>
            </div>
            <button class="icon-button" type="button" data-action="delete-rule" data-id="${rule.id}">Slet</button>
          </div>`;
      }).join("")}
    </div>
  `;
}

function renderSettingsView() {
  return `
    <section class="split">
      <div class="panel pad">
        <h2>Husstand</h2>
        <form id="settings-form" class="settings-stack" autocomplete="off">
          <div class="field">
            <label for="household-name">Navn</label>
            <input class="input" id="household-name" name="householdName" value="${escapeHtml(state.settings.householdName || "")}" required />
          </div>
          <div class="field">
            <label for="members">Adgang / personer</label>
            <input class="input" id="members" name="members" value="${escapeHtml(state.settings.members || "")}" placeholder="Dig og din kæreste" />
          </div>
          <button class="button primary" type="submit">Gem indstillinger</button>
        </form>
      </div>
      <div class="panel pad">
        <h2>Backup og flytning</h2>
        <p class="helper">Eksportér en backup før du rydder data eller vil flytte overblikket til en anden browser. Filen indeholder alle konti, regler og posteringer.</p>
        <div class="file-actions">
          <button class="button primary" type="button" data-action="export-backup">Eksportér backup</button>
          <button class="button ghost" type="button" data-action="trigger-backup-import">Importer backup</button>
          <input class="hidden-file" id="backup-file" type="file" accept="application/json,.json" />
        </div>
      </div>
    </section>

    <section class="section split">
      <div class="panel pad">
        <h2>Om nul-kroners versionen</h2>
        <p class="helper">
          Denne version bruger ingen database, ingen bank-API og ingen betalte leverandører. Det gør den billig og privat,
          men data synkroniseres ikke automatisk mellem enheder endnu. Næste fase kan koble gratis Supabase-login på.
        </p>
      </div>
      <div class="panel pad">
        <h2>Ryd eller nulstil</h2>
        <p class="helper">Brug kun disse knapper, hvis du har taget backup.</p>
        <div class="file-actions">
          <button class="button ghost" type="button" data-action="reset-demo">Nulstil til tom start</button>
          <button class="button danger" type="button" data-action="clear-data">Ryd posteringer</button>
        </div>
      </div>
    </section>
  `;
}

function renderPeriodControl() {
  const months = getAvailableMonths();
  const range = activeDateRange();
  return `
    <div class="period-control" aria-label="Datofilter">
      <div class="period-head">
        <span class="label">Periode</span>
        <strong>${escapeHtml(activePeriodLabel())}</strong>
      </div>
      <div class="period-presets" aria-label="Hurtige perioder">
        <button class="period-chip ${isPeriodPresetActive("month") ? "active" : ""}" type="button" data-action="period-preset" data-preset="month">Denne måned</button>
        <button class="period-chip ${isPeriodPresetActive("prev-month") ? "active" : ""}" type="button" data-action="period-preset" data-preset="prev-month">Sidste måned</button>
        <button class="period-chip ${isPeriodPresetActive("90d") ? "active" : ""}" type="button" data-action="period-preset" data-preset="90d">90 dage</button>
        <button class="period-chip ${isPeriodPresetActive("ytd") ? "active" : ""}" type="button" data-action="period-preset" data-preset="ytd">År til dato</button>
        <button class="period-chip ${isPeriodPresetActive("all") ? "active" : ""}" type="button" data-action="period-preset" data-preset="all">Alt</button>
      </div>
      <div class="period-row date-row">
        <label class="field period-month-field">
          <span class="label">Måned</span>
          <select class="select" id="month-select" aria-label="Vælg måned">
            ${months.map((month) => option(month, monthLabel(month), ui.month === month)).join("")}
          </select>
        </label>
        <label class="field">
          <span class="label">Fra</span>
          <input class="input" id="period-from" type="date" value="${escapeHtml(range.from)}" aria-label="Fra dato" />
        </label>
        <span class="period-arrow" aria-hidden="true">→</span>
        <label class="field">
          <span class="label">Til</span>
          <input class="input" id="period-to" type="date" value="${escapeHtml(range.to)}" aria-label="Til dato" />
        </label>
      </div>
    </div>
  `;
}

function renderDrawer() {
  if (ui.drawerTxId) return renderTransactionDrawer(ui.drawerTxId);
  if (ui.drawer) return renderDrilldownDrawer(ui.drawer);
  return "";
}

function renderDrilldownDrawer(drawer) {
  const totalExpenses = drawer.transactions.filter((tx) => tx.amount < 0 && categoryById(tx.categoryId)?.kind !== "transfer").reduce((sum, tx) => sum + Math.abs(tx.amount), 0);
  const net = drawer.transactions.reduce((sum, tx) => sum + Number(tx.amount || 0), 0);
  return `
    <div class="drawer-backdrop" data-action="close-drawer" aria-hidden="true"></div>
    <aside class="drawer" role="dialog" aria-modal="true" aria-label="${escapeHtml(drawer.title)}">
      <div class="drawer-header">
        <div>
          <p class="eyebrow">Drilldown</p>
          <h2>${escapeHtml(drawer.title)}</h2>
          <p class="helper">${escapeHtml(drawer.subtitle || "")}</p>
        </div>
        <button class="icon-button" type="button" data-action="close-drawer">Luk</button>
      </div>
      <div class="drawer-metrics">
        <div><span>Poster</span><strong>${drawer.transactions.length}</strong></div>
        <div><span>Udgifter</span><strong>${formatCurrency(totalExpenses)}</strong></div>
        <div><span>Netto</span><strong>${formatCurrency(net)}</strong></div>
      </div>
      ${renderDrawerTransactionList(drawer.transactions)}
    </aside>
  `;
}

function renderDrawerTransactionList(rows) {
  if (!rows.length) return `<div class="empty-state"><strong>Ingen posteringer</strong><span>Der er ingen poster i dette drilldown.</span></div>`;
  return `
    <div class="drawer-list">
      ${rows.map((tx) => `
        <button class="drawer-row" type="button" data-action="open-transaction" data-id="${tx.id}">
          <span><strong>${escapeHtml(tx.description)}</strong><small>${formatDate(tx.date)} · ${escapeHtml(accountById(tx.accountId)?.name || "Ukendt konto")} · ${escapeHtml(categoryById(tx.categoryId)?.name || "Ukendt")}</small></span>
          <strong class="${tx.amount >= 0 ? "amount-positive" : "amount-negative"}">${formatCurrency(tx.amount)}</strong>
        </button>
      `).join("")}
    </div>
  `;
}

function renderTransactionDrawer(txId) {
  const tx = state.transactions.find((item) => item.id === txId);
  if (!tx) return "";
  return `
    <div class="drawer-backdrop" data-action="close-drawer" aria-hidden="true"></div>
    <aside class="drawer" role="dialog" aria-modal="true" aria-label="Redigér postering">
      <div class="drawer-header">
        <div>
          <p class="eyebrow">Postering</p>
          <h2>${escapeHtml(tx.description)}</h2>
          <p class="helper">${formatDate(tx.date)} · ${escapeHtml(accountById(tx.accountId)?.name || "Ukendt konto")}</p>
        </div>
        <button class="icon-button" type="button" data-action="close-drawer">Luk</button>
      </div>
      <form id="drawer-tx-form" class="settings-stack" autocomplete="off">
        <input type="hidden" name="id" value="${tx.id}" />
        <div class="openbanking-factbox">
          <div><span>Dato</span><strong>${formatDate(tx.date)}</strong></div>
          <div><span>Konto</span><strong>${escapeHtml(accountById(tx.accountId)?.name || "Ukendt konto")}</strong></div>
          <div><span>Beløb</span><strong class="${tx.amount >= 0 ? "amount-positive" : "amount-negative"}">${formatCurrency(tx.amount)}</strong></div>
          <div><span>Kilde</span><strong>${escapeHtml(sourceLabel(tx.source))}</strong></div>
        </div>
        <p class="helper">Dato, tekst, konto og beløb kommer fra Open Banking og kan ikke rettes manuelt. Brug felterne her til kategori, note og relation.</p>
        <div class="field"><label for="drawer-category">Kategori</label><select class="select" id="drawer-category" name="categoryId">${state.categories.map((category) => option(category.id, `${category.name} · ${kindLabel(category.kind)}`, category.id === tx.categoryId)).join("")}</select></div>
        <div class="field"><label for="drawer-note">Note</label><textarea class="textarea" id="drawer-note" name="note" rows="4">${escapeHtml(tx.note || "")}</textarea></div>
        <div class="field"><label for="drawer-relation-type">Relation</label><select class="select" id="drawer-relation-type" name="relationType">${RELATION_TYPES.map((type) => option(type.id, type.label, type.id === (tx.relationType || ""))).join("")}</select></div>
        <div class="field"><label for="drawer-relation-key">Relationsnavn</label><input class="input" id="drawer-relation-key" name="relationKey" value="${escapeHtml(tx.relationKey || "")}" /></div>
        ${tx.linkedTransactionId ? `<p class="helper">Afstemt med ${escapeHtml(accountById(state.transactions.find((item) => item.id === tx.linkedTransactionId)?.accountId)?.name || "anden konto")}.</p>` : ""}
        <button class="button primary" type="submit">Gem postering</button>
      </form>
    </aside>
  `;
}

function buildDrilldown(type, id) {
  let title = "Drilldown";
  let subtitle = activePeriodLabel();
  let transactions = getPeriodTransactions();
  if (ui.reportAccountFilter !== "all") transactions = transactions.filter((tx) => tx.accountId === ui.reportAccountFilter);

  if (type === "category") {
    const category = categoryById(id);
    title = category?.name || "Kategori";
    subtitle = `Kategori · ${activePeriodLabel()}`;
    transactions = transactions.filter((tx) => tx.categoryId === id);
  } else if (type === "merchant") {
    title = id;
    subtitle = `Modtager · ${activePeriodLabel()}`;
    transactions = transactions.filter((tx) => merchantName(tx.description) === id);
  } else if (type === "account") {
    const account = accountById(id);
    title = account?.name || "Konto";
    subtitle = `Konto · ${activePeriodLabel()}`;
    transactions = transactions.filter((tx) => tx.accountId === id);
  } else if (type === "match") {
    title = "Afstemt kontooverførsel";
    subtitle = "Intern flytning";
    transactions = transactions.filter((tx) => tx.matchGroupId === id);
  } else if (type === "auto-match") {
    title = "Krydstjekket overførsel";
    subtitle = "Holdes ude af nøgletal";
    const ids = new Set(String(id || "").split("|"));
    transactions = transactions.filter((tx) => ids.has(tx.id));
  } else if (type === "cleanup") {
    title = "Ukategoriserede posteringer";
    subtitle = "Oprydning";
    transactions = transactions.filter(isNeedsCategory);
  }

  return { type, id, title, subtitle, transactions: transactions.sort(sortTransactionsDesc) };
}

function renderTransactionTable(rows, { compact } = { compact: false }) {
  if (!rows.length) {
    return `<div class="empty-state"><strong>Ingen posteringer</strong><span>Hent bankdata via Open Banking eller vælg en anden periode.</span></div>`;
  }
  return `
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Dato</th>
            <th>Tekst</th>
            <th>Kategori</th>
            <th>Konto</th>
            <th style="text-align:right;">Beløb</th>

          </tr>
        </thead>
        <tbody>
          ${rows.map((tx) => {
            const category = categoryById(tx.categoryId);
            const account = accountById(tx.accountId);
            return `
              <tr>
                <td>${renderTransactionDate(tx)}</td>
                <td class="description-cell">
                  <strong>${escapeHtml(tx.description)}</strong>
                  <small>${escapeHtml(sourceLabel(tx.source))}${tx.note ? ` · Note: ${escapeHtml(tx.note)}` : ""} · <button class="link-button" type="button" data-action="open-transaction" data-id="${tx.id}">Åbn detaljer</button></small>
                  ${tx.categorySource || tx.categoryConfidence ? `<small>Kategori: ${escapeHtml(tx.categorySource || "auto")}${tx.categoryConfidence ? ` · ${tx.categoryConfidence}%` : ""}${tx.categoryReason ? ` · ${escapeHtml(tx.categoryReason)}` : ""}</small>` : ""}
                  ${tx.relationType || tx.relationKey ? `<small>Relation: ${escapeHtml(relationTypeLabel(tx.relationType))}${tx.relationKey ? ` · ${escapeHtml(tx.relationKey)}` : ""}</small>` : ""}
                  ${tx.linkedTransactionId ? `<small>Afstemt med: ${escapeHtml(accountById(state.transactions.find((item) => item.id === tx.linkedTransactionId)?.accountId)?.name || "anden konto")}</small>` : ""}
                </td>
                <td>
                  ${compact
                    ? renderCategoryPill(category)
                    : `<select class="select" data-tx-category="${tx.id}" aria-label="Kategori for ${escapeHtml(tx.description)}">
                        ${state.categories.map((item) => option(item.id, item.name, item.id === tx.categoryId)).join("")}
                       </select>`}
                </td>
                <td>${escapeHtml(account?.name || "Ukendt konto")}</td>
                <td class="amount ${tx.amount >= 0 ? "amount-positive" : "amount-negative"}">${formatCurrency(tx.amount)}</td>

              </tr>
            `;
          }).join("")}
        </tbody>
      </table>
    </div>
  `;
}

function renderTransactionDate(tx) {
  const viewDate = transactionDateForView(tx);
  const bankDate = tx.bankDate || tx.date;
  const moved = ui.dateBasis === "economic" && viewDate !== bankDate;
  const allocated = tx.allocated ? `<small>${tx.allocationIndex}/${tx.allocationMonths} · ${formatCurrency(tx.originalAmount)}</small>` : "";
  return `<span class="tx-date-stack"><strong>${formatDate(viewDate)}</strong>${moved ? `<small>bank: ${formatDate(bankDate)}</small>` : ""}${allocated}</span>`;
}

function renderCategoryPill(category) {
  if (!category) return `<span class="pill muted">Ukendt</span>`;
  return `<span class="pill dot" style="--pill-color: ${escapeHtml(category.color)}">${escapeHtml(category.name)}</span>`;
}

function renderCategoryBreakdown(monthOrRows) {
  const sourceRows = Array.isArray(monthOrRows) ? monthOrRows : getTransactionsForMonth(monthOrRows);
  const expenses = sourceRows.filter((tx) => tx.amount < 0 && categoryById(tx.categoryId)?.kind !== "transfer");
  if (!expenses.length) {
    return `<div class="empty-state"><strong>Ingen udgifter</strong><span>Der er ikke registreret udgifter i den valgte periode.</span></div>`;
  }
  const totals = new Map();
  for (const tx of expenses) {
    totals.set(tx.categoryId, (totals.get(tx.categoryId) || 0) + Math.abs(tx.amount));
  }
  const rows = Array.from(totals.entries())
    .map(([categoryId, total]) => ({ category: categoryById(categoryId), total }))
    .sort((a, b) => b.total - a.total)
    .slice(0, 7);
  const max = Math.max(...rows.map((row) => row.total));
  return `
    <div class="breakdown-list">
      ${rows.map((row) => {
        const pct = max ? Math.max(4, Math.round((row.total / max) * 100)) : 0;
        const color = row.category?.color || "#8a8d84";
        return `
          <div class="breakdown-item">
            <div class="breakdown-line">
              <strong>${escapeHtml(row.category?.name || "Ukendt")}</strong>
              <span>${formatCurrency(row.total)}</span>
            </div>
            <div class="progress" aria-hidden="true"><span style="--width: ${pct}%; --bar-color: ${escapeHtml(color)}"></span></div>
          </div>
        `;
      }).join("")}
    </div>
  `;
}

function renderMerchantBreakdown(monthOrRows) {
  const expenses = (Array.isArray(monthOrRows) ? monthOrRows : getExpenseTransactionsForMonth(monthOrRows))
    .filter((tx) => tx.amount < 0 && categoryById(tx.categoryId)?.kind !== "transfer");
  if (!expenses.length) {
    return `<div class="empty-state"><strong>Ingen udgifter</strong><span>Importer posteringer for at se steder og modtagere.</span></div>`;
  }
  const totals = groupExpensesByMerchant(expenses).slice(0, 8);
  const max = Math.max(...totals.map((row) => row.total));
  return `
    <div class="breakdown-list">
      ${totals.map((row) => {
        const pct = max ? Math.max(4, Math.round((row.total / max) * 100)) : 0;
        return `
          <div class="breakdown-item">
            <div class="breakdown-line">
              <strong>${escapeHtml(row.name)}</strong>
              <span>${formatCurrency(row.total)}</span>
            </div>
            <div class="progress" aria-hidden="true"><span style="--width: ${pct}%; --bar-color: #245f56"></span></div>
          </div>`;
      }).join("")}
    </div>
  `;
}

function renderRecurringCandidates() {
  const expenses = state.transactions.filter((tx) => tx.amount < 0 && categoryById(tx.categoryId)?.kind !== "transfer");
  const grouped = new Map();
  for (const tx of expenses) {
    const name = merchantName(tx.description);
    const entry = grouped.get(name) || { name, total: 0, count: 0, months: new Set() };
    entry.total += Math.abs(tx.amount);
    entry.count += 1;
    entry.months.add(toMonthKey(tx.date));
    grouped.set(name, entry);
  }
  const rows = Array.from(grouped.values())
    .filter((entry) => entry.count >= 2 || entry.months.size >= 2)
    .map((entry) => ({ ...entry, monthCount: entry.months.size, average: entry.total / Math.max(1, entry.months.size) }))
    .sort((a, b) => b.average - a.average)
    .slice(0, 7);

  if (!rows.length) {
    return `<div class="empty-state"><strong>Ikke nok historik</strong><span>Importer flere måneder for at finde gentagne udgifter.</span></div>`;
  }

  return `
    <div class="account-list">
      ${rows.map((row) => `
        <div class="list-row">
          <div>
            <strong>${escapeHtml(row.name)}</strong><br />
            <small>${row.count} post${row.count === 1 ? "" : "er"} · ${row.monthCount} måned${row.monthCount === 1 ? "" : "er"}</small>
          </div>
          <strong>${formatCurrency(row.average)}</strong>
        </div>
      `).join("")}
    </div>
  `;
}

function renderRelationInsights(monthOrRows) {
  const rows = buildRelationInsights(monthOrRows);
  if (!rows.length) {
    return `<div class="empty-state"><strong>Ingen noter endnu</strong><span>Tilføj en note på en postering, fx “lagt ud for Mads” eller “intern overførsel til opsparing”.</span></div>`;
  }

  return `
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Relation</th>
            <th>Poster</th>
            <th>Noter</th>
            <th style="text-align:right;">Netto</th>
          </tr>
        </thead>
        <tbody>
          ${rows.map((row) => `
            <tr>
              <td class="description-cell">
                <strong>${escapeHtml(row.key)}</strong>
                <small>${escapeHtml(relationTypeLabel(row.type))}${Math.abs(row.net) < 0.01 ? " · afstemt i nul" : ""}${row.suggested ? " · forslag fra note" : ""}</small>
              </td>
              <td>${row.count}</td>
              <td class="description-cell"><small>${escapeHtml(row.notes.join(" · ") || "Ingen noter")}</small></td>
              <td class="amount ${row.net >= 0 ? "amount-positive" : "amount-negative"}">${formatCurrency(row.net)}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `;
}

function buildRelationInsights(monthOrRows) {
  const rows = new Map();
  const transactions = (Array.isArray(monthOrRows) ? monthOrRows : getTransactionsForMonth(monthOrRows)).filter((tx) => tx.note || tx.relationType || tx.relationKey);
  for (const tx of transactions) {
    const inferred = inferRelationFromNote(tx.note, tx.description);
    const type = tx.relationType || inferred.type || "andet";
    const key = tx.relationKey || inferred.key || merchantName(tx.description);
    const id = `${type}|${normalize(key)}`;
    const entry = rows.get(id) || { type, key, net: 0, count: 0, notes: [], suggested: !tx.relationType && !tx.relationKey && Boolean(inferred.type) };
    entry.net += Number(tx.amount || 0);
    entry.count += 1;
    if (tx.note && !entry.notes.includes(tx.note)) entry.notes.push(tx.note);
    entry.suggested ||= !tx.relationType && !tx.relationKey && Boolean(inferred.type);
    rows.set(id, entry);
  }
  return Array.from(rows.values()).sort((a, b) => Math.abs(b.net) - Math.abs(a.net));
}

function renderTrend() {
  const months = lastMonths(ui.month, 6);
  const summaries = months.map((month) => ({ month, ...getMonthlySummary(month) }));
  const max = Math.max(1, ...summaries.flatMap((item) => [item.income, item.expenses]));
  return `
    <div class="trend" aria-label="Indtægter og udgifter over tid">
      ${summaries.map((item) => {
        const incomeHeight = Math.max(4, Math.round((item.income / max) * 100));
        const expenseHeight = Math.max(4, Math.round((item.expenses / max) * 100));
        return `
          <div class="trend-month">
            <div class="trend-bars">
              <span class="trend-bar income" style="--height: ${incomeHeight}%" title="Indtægter ${formatCurrency(item.income)}"></span>
              <span class="trend-bar expense" style="--height: ${expenseHeight}%" title="Udgifter ${formatCurrency(item.expenses)}"></span>
            </div>
            <div class="trend-label">${escapeHtml(shortMonthLabel(item.month))}</div>
          </div>`;
      }).join("")}
    </div>
  `;
}

async function handleClick(event) {
  const monthButton = event.target.closest("[data-month-jump]");
  if (monthButton) {
    setMonthPeriod(monthButton.dataset.monthJump);
    saveState();
    render();
    return;
  }

  const navButton = event.target.closest("[data-nav]");
  if (navButton) {
    ui.view = navButton.dataset.nav;
    ui.editingId = null;
    ui.drawer = null;
    ui.drawerTxId = null;
    render();
    if (ui.view === "bank-sync") window.setTimeout(() => hydrateEnableBankingFromServer(false), 80);
    if (ui.view === "ny-lejlighed") window.setTimeout(() => refreshTotalkreditRates({ silent: true, force: false }), 120);
    return;
  }

  const button = event.target.closest("[data-action]");
  if (!button) return;
  const action = button.dataset.action;
  const id = button.dataset.id;

  if (action === "noop") {
    return;
  }

  if (action === "refresh-totalkredit-rates") {
    await refreshTotalkreditRates({ silent: false, force: true });
    return;
  }

  if (action === "preview-moving-form-link") {
    await previewMovingLinkForForm(button.closest("form"));
    return;
  }

  if (action === "preview-moving-item-link") {
    await previewMovingLinkForItem(id);
    return;
  }

  if (action === "delete-moving-item") {
    const project = getMovingProject();
    const item = project.items.find((row) => row.id === id);
    if (!item) return;
    if (confirm(`Slet “${item.name}” fra flytteoverblikket?`)) {
      project.items = project.items.filter((row) => row.id !== id);
      saveState();
      render();
      notify("Linjen blev slettet fra flytteprojektet.");
    }
    return;
  }

  if (action === "undo-last-bulk") {
    if (!ui.undo?.stateJson) {
      notify("Der er ingen bulk-handling at fortryde.", "danger");
      return;
    }
    const label = ui.undo.label;
    localStorage.setItem(STORAGE_KEY, ui.undo.stateJson);
    state = loadState();
    ui.undo = null;
    hydratePeriodUiFromState();
    saveStateQuietly();
    render();
    notify(`Fortrød: ${label}.`);
    return;
  }

  if (action === "apply-smart-cleanup") {
    const undo = captureUndoSnapshot("sikre batches uden talændring");
    const transfers = applyHighConfidenceTransferMatches({ noImpactOnly: true });
    const categories = applySafeCategorySuggestions(88);
    const movements = applyHighConfidenceMoneyMovementSuggestions({ noImpactOnly: true });
    const changed = transfers + categories.changed + movements;
    commitUndoSnapshot(undo, changed);
    saveState();
    render();
    notify(changed ? `Sikre batches uden talændring kørt: ${transfers} overførsler, ${categories.changed} kategorier og ${movements} flytninger.` : "Ingen sikre batches uden talændring at køre lige nu.");
    return;
  }

  if (action === "apply-auto-safe-transfer-matches") {
    const undo = captureUndoSnapshot("konto-match uden talændring");
    const changed = applyHighConfidenceTransferMatches({ noImpactOnly: true });
    commitUndoSnapshot(undo, changed);
    saveState();
    render();
    notify(changed ? `${changed} kontooverførsel${changed === 1 ? "" : "er"} blev afstemt uden at ændre nøgletal.` : "Ingen konto-match uden talændring lige nu.");
    return;
  }

  if (action === "apply-auto-safe-money-movements") {
    const undo = captureUndoSnapshot("flytninger uden talændring");
    const changed = applyHighConfidenceMoneyMovementSuggestions({ noImpactOnly: true });
    commitUndoSnapshot(undo, changed);
    saveState();
    render();
    notify(changed ? `${changed} flytteforslag blev anvendt uden at ændre nøgletal.` : "Ingen flytteforslag uden talændring lige nu.");
    return;
  }

  if (action === "approve-periodization-group") {
    const undo = captureUndoSnapshot("månedsskifte-batch");
    const changed = approvePeriodizationGroup(button.dataset.group || "");
    commitUndoSnapshot(undo, changed);
    saveState();
    render();
    notify(changed ? `${changed} månedsskiftepostering${changed === 1 ? "" : "er"} blev godkendt.` : "Ingen posteringer matchede batchen.");
    return;
  }

  if (action === "apply-category-suggestion-batch") {
    const categoryId = button.dataset.category || "";
    const confidence = Number(button.dataset.confidence || 78);
    const undo = captureUndoSnapshot("kategori-batch");
    const result = applyCategorySuggestionBatch(categoryId, confidence);
    commitUndoSnapshot(undo, result.changed);
    saveState();
    render();
    notify(result.changed ? `${result.changed} postering${result.changed === 1 ? "" : "er"} blev sat til ${categoryById(categoryId)?.name || "kategori"}${result.rulesCreated ? `, og ${result.rulesCreated} regel${result.rulesCreated === 1 ? "" : "regler"} blev oprettet` : ""}.` : "Ingen kategori-batch kunne anvendes.");
    return;
  }

  if (action === "apply-safe-category-suggestions") {
    const undo = captureUndoSnapshot("sikre kategorier");
    const result = applySafeCategorySuggestions(88);
    commitUndoSnapshot(undo, result.changed);
    saveState();
    render();
    notify(result.changed ? `${result.changed} sikre kategori-postering${result.changed === 1 ? "" : "er"} blev valideret.` : "Ingen sikre kategori-forslag lige nu.");
    return;
  }

  if (action === "transactions-page") {
    const totalRows = getFilteredTransactions().length;
    const totalPages = Math.max(1, Math.ceil(totalRows / Number(ui.transactionsPageSize || 75)));
    const page = button.dataset.page || "1";
    if (page === "prev") ui.transactionsPage = Math.max(1, ui.transactionsPage - 1);
    else if (page === "next") ui.transactionsPage = Math.min(totalPages, ui.transactionsPage + 1);
    else ui.transactionsPage = Math.max(1, Math.min(totalPages, Number(page) || 1));
    render();
    return;
  }

  if (action === "close-drawer") {
    ui.drawer = null;
    ui.drawerTxId = null;
    render();
    return;
  }

  if (action === "report-tab") {
    ui.view = "rapporter";
    ui.reportMode = button.dataset.report || "udgifter";
    ui.drawer = null;
    ui.drawerTxId = null;
    render();
    return;
  }

  if (action === "open-report") {
    ui.view = "rapporter";
    ui.reportMode = button.dataset.report || "udgifter";
    ui.drawer = null;
    ui.drawerTxId = null;
    render();
    return;
  }

  if (action === "open-drilldown") {
    ui.drawer = buildDrilldown(button.dataset.drilldown || "category", button.dataset.id || "");
    ui.drawerTxId = null;
    render();
    return;
  }

  if (action === "open-transaction") {
    ui.drawerTxId = id;
    ui.drawer = null;
    render();
    return;
  }

  if (action === "period-preset") {
    ui.transactionsPage = 1;
    setPeriodPreset(button.dataset.preset || "month");
    saveState();
    render();
    return;
  }

  if (action === "date-basis") {
    ui.dateBasis = button.dataset.basis === "bank" ? "bank" : "economic";
    saveState();
    render();
    notify(ui.dateBasis === "economic" ? "Viser økonomisk måned." : "Viser rå bankdatoer.");
    return;
  }

  if (action === "privacy-toggle") {
    ui.privacyMode = !ui.privacyMode;
    saveState();
    render();
    notify(ui.privacyMode ? "Privat visning er slået til — beløb og nøgletal er skjult." : "Privat visning er slået fra.");
    return;
  }

  if (action === "apply-periodization") {
    const result = applyPeriodizationToTransactions({ force: false });
    saveState();
    render();
    notify(result.changed ? `${result.changed} periodiseringsforslag blev opdateret.` : "Periodiseringsforslag er allerede opdaterede.");
    return;
  }

  if (action === "period-use-bank") {
    const tx = state.transactions.find((item) => item.id === id);
    if (tx) {
      const bankMonth = toMonthKey(tx.date);
      tx.periodMonth = bankMonth;
      tx.periodDate = uiMonthStart(bankMonth);
      tx.periodRule = "manual-bankdate";
      tx.periodConfidence = 100;
      tx.periodReason = "Manuelt sat til bankdato.";
      tx.periodLocked = true;
      tx.updatedAt = new Date().toISOString();
      saveState();
      render();
      notify("Posteringen bruger nu bankdato i økonomisk måned.");
    }
    return;
  }

  if (action === "period-use-suggestion") {
    const tx = state.transactions.find((item) => item.id === id);
    if (tx) {
      const info = getEconomicPeriodInfo(tx, { ignoreLock: true });
      tx.periodMonth = info.periodMonth;
      tx.periodDate = info.periodDate;
      tx.periodRule = info.rule;
      tx.periodConfidence = 100;
      tx.periodReason = `Godkendt: ${info.reason}`;
      tx.periodLocked = true;
      tx.updatedAt = new Date().toISOString();
      saveState();
      render();
      notify("Periodiseringen blev godkendt.");
    }
    return;
  }

  if (action === "sync-latest") {
    await syncLatestBankData();
    return;
  }

  if (action === "eb-status") {
    await refreshEnableBankingStatus();
    return;
  }

  if (action === "eb-diagnostics") {
    await runEnableBankingDiagnostics();
    return;
  }

  if (action === "eb-generate-keys") {
    await generateEnableBankingKeys();
    return;
  }

  if (action === "eb-connect") {
    await startEnableBankingConsent();
    return;
  }

  if (action === "eb-accounts") {
    await refreshEnableBankingAccounts();
    return;
  }

  if (action === "eb-sync") {
    await syncEnableBankingTransactions();
    return;
  }

  if (action === "eb-sync-range") {
    const months = Number(button.dataset.months || 6);
    ui.syncDateFrom = uiMonthStart(shiftMonth(currentMonthKey(), -(months - 1)));
    ui.syncDateTo = todayISO();
    await syncEnableBankingTransactions();
    return;
  }

  if (action === "local-csv-load") {
    await loadLocalCsvFolder();
    return;
  }

  if (action === "gc-status") {
    await refreshGoCardlessStatus();
    return;
  }

  if (action === "gc-diagnostics") {
    await runGoCardlessDiagnostics();
    return;
  }

  if (action === "gc-connect") {
    await startGoCardlessConsent();
    return;
  }

  if (action === "gc-accounts") {
    await refreshGoCardlessAccounts();
    return;
  }

  if (action === "gc-sync") {
    await syncGoCardlessTransactions();
    return;
  }

  if (action === "cancel-edit") {
    ui.editingId = null;
    render();
  }

  if (action === "delete-account") {
    const account = accountById(id);
    if (!account) return;
    const count = transactionCountForAccount(id);
    if (count > 0) {
      notify(`Kontoen bruges af ${count} postering${count === 1 ? "" : "er"}. Flyt eller slet dem først.`, "danger");
      return;
    }
    if (confirm(`Slet kontoen “${account.name}”?`)) {
      state.accounts = state.accounts.filter((item) => item.id !== id);
      if (ui.importAccountId === id) ui.importAccountId = state.accounts[0]?.id || "";
      saveState();
      notify("Kontoen blev slettet.");
    }
  }

  if (action === "delete-category") {
    const category = categoryById(id);
    if (!category) return;
    const count = transactionCountForCategory(id);
    if (count > 0) {
      notify(`Kategorien bruges af ${count} postering${count === 1 ? "" : "er"}. Skift kategori på dem først.`, "danger");
      return;
    }
    if (confirm(`Slet kategorien “${category.name}”?`)) {
      state.categories = state.categories.filter((item) => item.id !== id);
      state.rules = state.rules.filter((rule) => rule.categoryId !== id);
      saveState();
      notify("Kategorien blev slettet.");
    }
  }

  if (action === "delete-rule") {
    state.rules = state.rules.filter((rule) => rule.id !== id);
    saveState();
    notify("Reglen blev slettet.");
  }

  if (action === "apply-rules") {
    const result = improveCategorizationForRows(getPeriodTransactions(), { onlyUncertain: true });
    saveState();
    notify(result.changed ? `${result.changed} postering${result.changed === 1 ? "" : "er"} blev kategoriseret bedre.` : "Ingen usikre poster matchede regler eller knowhow-bank.");
  }

  if (action === "improve-categories") {
    const result = improveCategorizationForRows(getPeriodTransactions(), { onlyUncertain: false });
    saveState();
    notify(result.changed ? `${result.changed} kategori${result.changed === 1 ? "" : "er"} blev forbedret med MCC/regler/knowhow.` : "Ingen kategorier kunne forbedres lige nu.");
  }

  if (action === "apply-relations-from-notes") {
    const changed = applyRelationsFromNotes();
    saveState();
    notify(changed ? `${changed} postering${changed === 1 ? "" : "er"} fik relation fra note.` : "Ingen noter gav nye relationer endnu.");
  }

  if (action === "bulk-category-group") {
    const merchant = button.dataset.merchant || "";
    const categoryId = button.dataset.category || "";
    const result = applyCategoryToMerchantGroup(merchant, categoryId);
    saveState();
    notify(result.changed ? `${result.changed} postering${result.changed === 1 ? "" : "er"} blev sat til ${categoryById(categoryId)?.name || "kategori"}${result.ruleCreated ? " og der blev oprettet en regel" : ""}.` : "Ingen posteringer blev ændret.");
    return;
  }

  if (action === "validate-current-category-group") {
    const merchant = button.dataset.merchant || "";
    const result = validateCurrentCategoryForMerchantGroup(merchant);
    saveState();
    notify(result.changed ? `${result.changed} postering${result.changed === 1 ? "" : "er"} blev godkendt som ${result.categoryName || "nuværende kategori"}.` : "Ingen posteringer kunne godkendes.", result.changed ? "info" : "danger");
    return;
  }

  if (action === "mark-transaction-category") {
    const categoryId = button.dataset.category || "";
    const changed = applyCategoryToTransaction(id, categoryId);
    saveState();
    notify(changed ? `Posteringen blev markeret som ${categoryById(categoryId)?.name || "valgt kategori"}.` : "Posteringen kunne ikke opdateres.");
  }

  if (action === "remove-overlaps") {
    const undo = captureUndoSnapshot("fjern overlap");
    const result = removeOverlapDuplicates();
    commitUndoSnapshot(undo, result.removed);
    saveState();
    render();
    notify(result.removed ? `${result.removed} overlap/dublet${result.removed === 1 ? "" : "ter"} blev fjernet automatisk.` : "Ingen overlap fundet lige nu.");
    return;
  }

  if (action === "apply-transfer-match") {
    const outTx = state.transactions.find((item) => item.id === button.dataset.out);
    const inTx = state.transactions.find((item) => item.id === button.dataset.in);
    const changed = outTx && inTx ? applyInternalTransferMatch(outTx, inTx) : false;
    saveState();
    notify(changed ? "Kontooverførslen blev afstemt og fjernet fra forbrugsstatistikken." : "Match kunne ikke afstemmes.");
  }

  if (action === "apply-transfer-matches") {
    const undo = captureUndoSnapshot("sikre konto-match");
    const changed = applyHighConfidenceTransferMatches();
    commitUndoSnapshot(undo, changed);
    saveState();
    render();
    notify(changed ? `${changed} kontooverførsel${changed === 1 ? "" : "er"} blev afstemt.` : "Der var ingen sikre konto-match at afstemme.");
  }

  if (action === "apply-all-transfer-matches") {
    const undo = captureUndoSnapshot("alle viste konto-match");
    const matches = findTransferMatchesForRows(getPeriodTransactions());
    let changed = 0;
    for (const match of matches) {
      if (applyInternalTransferMatch(match.outTx, match.inTx)) changed += 1;
    }
    commitUndoSnapshot(undo, changed);
    saveState();
    render();
    notify(changed ? `${changed} viste konto-match blev afstemt.` : "Der var ingen konto-match at afstemme.");
  }

  if (action === "apply-money-movement") {
    const tx = state.transactions.find((item) => item.id === id);
    const suggestion = tx ? getMoneyMovementSuggestion(tx) : null;
    const changed = tx && suggestion?.categoryId ? applyCategoryToTransaction(tx.id, suggestion.categoryId, { relationType: suggestion.relationType, relationKey: categoryById(suggestion.categoryId)?.name }) : false;
    saveState();
    notify(changed ? `Forslaget blev anvendt: ${categoryById(suggestion.categoryId)?.name}.` : "Forslaget kunne ikke anvendes.");
  }

  if (action === "add-default-accounts") {
    const before = state.accounts.length;
    state.accounts = mergeAccountsByName(state.accounts, createSeedState().accounts);
    ui.importAccountId ||= state.accounts[0]?.id || "";
    saveState();
    const added = state.accounts.length - before;
    notify(added ? `${added} ${added === 1 ? "standardkonto" : "standardkonti"} blev tilføjet.` : "Standardkonti er allerede klar.");
  }

  if (action === "apply-money-movement-suggestions") {
    const undo = captureUndoSnapshot("sikre flytninger");
    const changed = applyHighConfidenceMoneyMovementSuggestions();
    commitUndoSnapshot(undo, changed);
    saveState();
    render();
    notify(changed ? `${changed} sikre forslag blev anvendt.` : "Der var ingen sikre forslag at anvende.");
  }

  if (action === "import-csv") {
    importDraftTransactions();
  }

  if (action === "export-backup") {
    exportBackup();
  }

  if (action === "trigger-delta-import") {
    document.querySelector("#delta-csv-file")?.click();
    return;
  }

  if (action === "refresh-market-prices") {
    await refreshDeltaMarketPrices();
    return;
  }

  if (action === "trigger-backup-import") {
    document.querySelector("#backup-file")?.click();
    return;
  }

  if (action === "reset-demo") {
    if (confirm("Nulstil til tom start? Dine nuværende posteringer overskrives.")) {
      state = createSeedState();
      ui = { ...ui, month: state.settings.selectedMonth, periodMode: "month", periodFrom: uiMonthStart(state.settings.selectedMonth), periodTo: uiMonthEnd(state.settings.selectedMonth), query: "", categoryFilter: "all", accountFilter: "all", editingId: null, importDraft: null, importAccountId: state.accounts[0]?.id || "", importOnlyMonth: true, importMonth: shiftMonth(currentMonthKey(), -1) };
      saveState();
      notify("Appen er nulstillet uden dummy-data.");
    }
  }

  if (action === "clear-data") {
    if (confirm("Ryd alle posteringer, men behold konti, kategorier og regler?")) {
      state.transactions = [];
      const resetMonth = shiftMonth(currentMonthKey(), -1);
      ui = { ...ui, month: resetMonth, periodMode: "month", periodFrom: uiMonthStart(resetMonth), periodTo: uiMonthEnd(resetMonth), query: "", categoryFilter: "all", accountFilter: "all", editingId: null, importDraft: null };
      saveState();
      notify("Alle posteringer er ryddet.");
    }
  }
}

async function handleSubmit(event) {
  const formId = event.target?.getAttribute?.("id") || "";
  if (formId === "moving-item-form") {
    event.preventDefault();
    if (!addMovingItemFromForm(event.target)) {
      notify("Tilføj både navn og en pris, så linjen kan bruges i overblikket.", "danger");
      return;
    }
    event.target.reset();
    saveState();
    render();
    notify("Købet blev tilføjet til flytteprojektet.");
    return;
  }

  if (formId === "moving-settings-form") {
    event.preventDefault();
    updateMovingSettingsFromForm(event.target);
    saveState();
    render();
    notify("Rammer og lånefelter blev gemt.");
    return;
  }

  if (formId === "eb-setup-form") {
    event.preventDefault();
    const form = new FormData(event.target);
    const appId = String(form.get("appId") || "").trim();
    if (!appId) {
      notify("Application ID fra Enable Banking skal udfyldes.", "danger");
      return;
    }
    try {
      const diagnostics = await apiFetch("/api/enablebanking/setup", {
        method: "POST",
        body: {
          appId,
          aspspName: String(form.get("aspspName") || "Sparekassen Kronjylland"),
          country: String(form.get("country") || "DK"),
          language: String(form.get("language") || "da"),
          psuType: "personal",
        },
      });
      const eb = getBankSyncState().enableBanking;
      eb.diagnostics = diagnostics;
      eb.config = { ...(eb.config || {}), ...diagnostics };
      saveState();
      event.target.reset();
      notify(diagnostics.jwt?.ok && diagnostics.api?.ok ? "Enable Banking er klar til MitID-samtykke." : "Application ID er gemt, men diagnose viser stadig noget der skal tjekkes.", diagnostics.jwt?.ok && diagnostics.api?.ok ? "info" : "danger");
    } catch (error) {
      notify(`Kunne ikke gemme Enable Banking-opsætning: ${error.message}`, "danger");
    }
    return;
  }

  if (formId === "gc-keys-form") {
    event.preventDefault();
    const form = new FormData(event.target);
    const secretId = String(form.get("secretId") || "").trim();
    const secretKey = String(form.get("secretKey") || "").trim();
    if (!secretId || !secretKey) {
      notify("Secret ID og Secret Key skal udfyldes.", "danger");
      return;
    }
    try {
      const diagnostics = await apiFetch("/api/gocardless/setup", {
        method: "POST",
        body: {
          secretId,
          secretKey,
          institutionId: String(form.get("institutionId") || "SPAREKASSEN_KRONJYLLAND_KRONDK22"),
          country: String(form.get("country") || "DK"),
        },
      });
      const bankSync = getBankSyncState();
      bankSync.diagnostics = diagnostics;
      bankSync.config = { ...(bankSync.config || {}), configured: diagnostics.configured, institutionId: diagnostics.institutionId, country: diagnostics.country };
      saveState();
      event.target.reset();
      notify(diagnostics.token?.ok && diagnostics.institution?.ok ? "Keys er gemt, og GoCardless er klar." : "Keys er gemt, men diagnose viser stadig noget der skal tjekkes.", diagnostics.token?.ok && diagnostics.institution?.ok ? "info" : "danger");
    } catch (error) {
      notify(`Kunne ikke gemme GoCardless keys: ${error.message}`, "danger");
    }
    return;
  }

  if (formId === "tx-form") {
    event.preventDefault();
    notify("Manuelle posteringer er slået fra. Brug Opdatér eller Bankdata, så alt kommer via Open Banking.", "danger");
  }

  if (formId === "drawer-tx-form") {
    event.preventDefault();
    const form = new FormData(event.target);
    const tx = state.transactions.find((item) => item.id === String(form.get("id")));
    if (!tx) {
      notify("Posteringen kunne ikke gemmes.", "danger");
      return;
    }
    const selectedCategoryId = String(form.get("categoryId") || tx.categoryId);
    let relationType = String(form.get("relationType") || "");
    const impliedRelation = relationTypeForCategory(selectedCategoryId);
    if (!relationType && impliedRelation) relationType = impliedRelation;
    if (relationType && categoryForRelationType(relationType) && categoryForRelationType(relationType) !== selectedCategoryId && !impliedRelation) relationType = "";
    tx.note = String(form.get("note") || "").trim();
    tx.relationType = relationType;
    tx.relationKey = relationType ? String(form.get("relationKey") || "").trim() : "";
    tx.categoryId = selectedCategoryId;
    tx.categorySource = "manual";
    tx.categoryConfidence = 100;
    tx.categoryReason = "Manuelt valideret";
    tx.needsReview = false;
    tx.updatedAt = new Date().toISOString();
    saveState();
    notify("Posteringen blev gemt.");
    render();
  }

  if (formId === "account-form") {
    event.preventDefault();
    const form = new FormData(event.target);
    const balance = parseAmount(form.get("balance"));
    const account = {
      id: uid("acc"),
      name: String(form.get("name") || "").trim(),
      type: String(form.get("type") || "Bankkonto").trim(),
      balance: Number.isFinite(balance) ? balance : 0,
    };
    state.accounts.push(account);
    ui.importAccountId ||= account.id;
    event.target.reset();
    saveState();
    notify("Kontoen blev tilføjet.");
  }

  if (formId === "category-form") {
    event.preventDefault();
    const form = new FormData(event.target);
    const category = {
      id: uid("cat"),
      name: String(form.get("name") || "").trim(),
      kind: String(form.get("kind") || "expense"),
      color: String(form.get("color") || "#245f56"),
    };
    state.categories.push(category);
    event.target.reset();
    saveState();
    notify("Kategorien blev tilføjet.");
  }

  if (formId === "rule-form") {
    event.preventDefault();
    const form = new FormData(event.target);
    const keyword = String(form.get("keyword") || "").trim().toLowerCase();
    if (!keyword) {
      notify("Reglen mangler tekst.", "danger");
      return;
    }
    state.rules.push({ id: uid("rule"), keyword, categoryId: String(form.get("categoryId")) });
    event.target.reset();
    saveState();
    notify("Reglen blev tilføjet.");
  }

  if (formId === "settings-form") {
    event.preventDefault();
    const form = new FormData(event.target);
    state.settings.householdName = String(form.get("householdName") || "Husstanden").trim();
    state.settings.members = String(form.get("members") || "").trim();
    saveState();
    notify("Indstillingerne blev gemt.");
  }
}

async function handleChange(event) {
  const target = event.target;

  if (target.id === "moving-receipt-file" && target.files?.[0]) {
    await previewMovingReceiptForForm(target.closest("form"), target.files[0]);
    return;
  }

  if (target.dataset.movingReceipt && target.files?.[0]) {
    await attachReceiptToMovingItem(target.dataset.movingReceipt, target.files[0]);
    return;
  }

  if (target.name === "link" && target.closest("#moving-item-form") && looksLikeUrl(target.value)) {
    previewMovingLinkForForm(target.closest("form"), { silent: true });
    return;
  }

  if (target.dataset.movingItem && target.dataset.movingField) {
    const changed = updateMovingItemField(target.dataset.movingItem, target.dataset.movingField, target.value);
    if (!changed) {
      notify("Flyttelinjen kunne ikke opdateres. Tjek beløbet eller feltet.", "danger");
      render();
      return;
    }
    saveState();
    render();
    notify("Flytteoverblikket blev opdateret.");
    return;
  }

  if (target.id === "period-mode") {
    ui.transactionsPage = 1;
    ui.periodMode = target.value === "range" ? "range" : "month";
    if (ui.periodMode === "month") setMonthPeriod(ui.month);
    else {
      const range = activeDateRange();
      ui.periodFrom = range.from;
      ui.periodTo = range.to;
    }
    saveState();
    render();
  }

  if (target.id === "month-select") {
    ui.transactionsPage = 1;
    setMonthPeriod(target.value);
    saveState();
    render();
  }

  if (target.id === "period-from" || target.id === "period-to") {
    ui.transactionsPage = 1;
    ui.periodMode = "range";
    if (target.id === "period-from") ui.periodFrom = target.value;
    if (target.id === "period-to") ui.periodTo = target.value;
    const range = normalizeDateRange(ui.periodFrom, ui.periodTo);
    ui.periodFrom = range.from;
    ui.periodTo = range.to;
    ui.month = toMonthKey(ui.periodTo);
    saveState();
    render();
  }

  if (target.id === "category-filter") {
    ui.categoryFilter = target.value;
    ui.transactionsPage = 1;
    render();
  }

  if (target.id === "account-filter") {
    ui.accountFilter = target.value;
    ui.transactionsPage = 1;
    render();
  }

  if (target.id === "transactions-page-size") {
    ui.transactionsPageSize = Number(target.value || 75);
    ui.transactionsPage = 1;
    render();
  }

  if (target.id === "report-account-filter") {
    ui.reportAccountFilter = target.value;
    ui.drawer = null;
    ui.drawerTxId = null;
    render();
  }

  if (target.id === "wealth-primary-account") {
    const wealth = getWealthSettings();
    wealth.primaryCashAccountId = target.value;
    saveState();
    render();
    notify("Primær lønkonto til formueoverblik blev opdateret.");
    return;
  }

  if (target.dataset.wealthProperty && target.dataset.wealthField) {
    const wealth = getWealthSettings();
    const property = wealth.properties.find((item) => item.id === target.dataset.wealthProperty);
    const amount = parseAmount(target.value);
    if (!property || !Number.isFinite(amount)) {
      notify("Beløbet kunne ikke læses. Brug fx 4.500.000 eller 4500000.", "danger");
      render();
      return;
    }
    property[target.dataset.wealthField] = Math.max(0, amount);
    saveState();
    render();
    notify("Formueoverblik blev opdateret.");
    return;
  }

  if (target.id === "wealth-pension-provider") {
    const wealth = getWealthSettings();
    wealth.pension.provider = target.value.trim() || "Pension";
    saveState();
    render();
    notify("Pensionsudbyder blev opdateret.");
    return;
  }

  if (target.id === "wealth-pension-value") {
    const wealth = getWealthSettings();
    const amount = parseAmount(target.value);
    if (!Number.isFinite(amount)) {
      notify("Pensionsbeløbet kunne ikke læses. Brug fx 865.000.", "danger");
      render();
      return;
    }
    wealth.pension.value = Math.max(0, amount);
    saveState();
    render();
    notify("Pension blev opdateret i formueoverblikket.");
    return;
  }

  if (target.id === "import-account") {
    ui.importAccountId = target.value;
    render();
  }

  if (target.id === "import-month") {
    ui.importMonth = target.value || shiftMonth(currentMonthKey(), -1);
    render();
  }

  if (target.id === "import-only-month") {
    ui.importOnlyMonth = target.checked;
    render();
  }

  if (target.id === "sync-date-from") {
    ui.syncDateFrom = target.value || ui.syncDateFrom;
    render();
  }

  if (target.id === "sync-date-to") {
    ui.syncDateTo = target.value || ui.syncDateTo;
    render();
  }

  if (target.id === "gc-auto-sync") {
    const bankSync = getBankSyncState();
    bankSync.autoSyncOnOpen = target.checked;
    saveState();
    notify(target.checked ? "Automatisk sync ved app-start er slået til." : "Automatisk sync ved app-start er slået fra.");
  }

  if (target.dataset.ebMap) {
    const bankSync = getBankSyncState();
    bankSync.accountMappings[target.dataset.ebMap] = target.value;
    saveState();
    notify("Enable Banking-kontomapping blev gemt.");
  }

  if (target.dataset.gcMap) {
    const bankSync = getBankSyncState();
    bankSync.accountMappings[target.dataset.gcMap] = target.value;
    saveState();
    notify("Kontomapping blev gemt.");
  }

  if (target.dataset.draftAccount && ui.importDraft?.files) {
    const draft = ui.importDraft.files[Number(target.dataset.draftAccount)];
    if (draft) draft.accountChoice = target.value;
    render();
  }

  if (target.dataset.csvMap && ui.importDraft?.files) {
    const draft = ui.importDraft.files[Number(target.dataset.draftIndex) || 0];
    if (draft) draft.map[target.dataset.csvMap] = target.value;
    render();
  }

  if (target.dataset.txCategory) {
    const changed = applyCategoryToTransaction(target.dataset.txCategory, target.value, { reason: "Manuelt valideret" });
    if (changed) {
      saveState();
      notify("Kategorien blev opdateret.");
    } else {
      notify("Kategorien kunne ikke opdateres.", "danger");
      render();
    }
  }

  if (target.dataset.accountBalance) {
    const account = accountById(target.dataset.accountBalance);
    const balance = parseAmount(target.value);
    if (!account || !Number.isFinite(balance)) {
      notify("Saldoen kunne ikke læses. Brug fx 12.345,67.", "danger");
      render();
      return;
    }
    account.balance = balance;
    saveState();
    notify("Saldoen blev opdateret.");
  }

  if (target.id === "csv-file" && target.files?.[0]) {
    readCsvFiles(Array.from(target.files));
  }

  if (target.id === "delta-csv-file" && target.files?.[0]) {
    readDeltaCsvFile(target.files[0]);
  }

  if (target.id === "backup-file" && target.files?.[0]) {
    readBackupFile(target.files[0]);
  }
}

function handleInput(event) {
  if (event.target.dataset.movingProjectField === "advisorNotes") {
    const project = getMovingProject();
    project.advisorNotes = event.target.value;
    saveStateQuietly();
    return;
  }

  if (event.target.dataset.movingItem && event.target.dataset.movingField && ["name", "link", "imageUrl", "note"].includes(event.target.dataset.movingField)) {
    if (updateMovingItemField(event.target.dataset.movingItem, event.target.dataset.movingField, event.target.value)) saveStateQuietly();
    return;
  }

  if (event.target.id === "wealth-pension-provider") {
    const wealth = getWealthSettings();
    wealth.pension.provider = event.target.value.trim() || "Pension";
    saveStateQuietly();
    return;
  }

  if (event.target.id === "wealth-pension-value") {
    const wealth = getWealthSettings();
    const amount = parseAmount(event.target.value);
    if (Number.isFinite(amount)) {
      wealth.pension.value = Math.max(0, amount);
      saveStateQuietly();
    }
    return;
  }

  if (event.target.dataset.wealthProperty && event.target.dataset.wealthField) {
    const wealth = getWealthSettings();
    const property = wealth.properties.find((item) => item.id === event.target.dataset.wealthProperty);
    const amount = parseAmount(event.target.value);
    if (property && Number.isFinite(amount)) {
      property[event.target.dataset.wealthField] = Math.max(0, amount);
      saveStateQuietly();
    }
    return;
  }

  if (event.target.id === "search-input") {
    ui.query = event.target.value;
    ui.transactionsPage = 1;
    render();
  }
}

function notify(text, kind = "info") {
  ui.notice = { text, kind };
  clearTimeout(noticeTimer);
  render();
  const liveRegion = document.querySelector("#live-region");
  if (liveRegion) liveRegion.textContent = text;
  noticeTimer = setTimeout(() => {
    ui.notice = null;
    render();
  }, 4200);
}

function focusSoon(selector) {
  window.setTimeout(() => document.querySelector(selector)?.focus(), 50);
}

function setMonthPeriod(month) {
  ui.month = month || currentMonthKey();
  ui.periodMode = "month";
  ui.periodFrom = uiMonthStart(ui.month);
  ui.periodTo = uiMonthEnd(ui.month);
}

function setPeriodPreset(preset) {
  const today = todayISO();
  if (preset === "month") {
    setMonthPeriod(currentMonthKey());
    return;
  }
  if (preset === "prev-month") {
    setMonthPeriod(shiftMonth(currentMonthKey(), -1));
    return;
  }
  if (preset === "90d") {
    ui.periodMode = "range";
    ui.periodFrom = shiftDate(today, -89);
    ui.periodTo = today;
    ui.month = toMonthKey(today);
    return;
  }
  if (preset === "ytd") {
    ui.periodMode = "range";
    ui.periodFrom = `${today.slice(0, 4)}-01-01`;
    ui.periodTo = today;
    ui.month = toMonthKey(today);
    return;
  }
  if (preset === "all") {
    const dates = state.transactions.map((tx) => tx.date).filter(Boolean).sort();
    ui.periodMode = "range";
    ui.periodFrom = dates[0] || uiMonthStart(ui.month || currentMonthKey());
    ui.periodTo = dates.at(-1) || today;
    ui.month = toMonthKey(ui.periodTo);
  }
}

function isPeriodPresetActive(preset) {
  const range = activeDateRange();
  if (preset === "month") return ui.periodMode === "month" && ui.month === currentMonthKey();
  if (preset === "prev-month") return ui.periodMode === "month" && ui.month === shiftMonth(currentMonthKey(), -1);
  const today = todayISO();
  if (preset === "90d") return ui.periodMode === "range" && range.from === shiftDate(today, -89) && range.to === today;
  if (preset === "ytd") return ui.periodMode === "range" && range.from === `${today.slice(0, 4)}-01-01` && range.to === today;
  if (preset === "all") {
    const dates = state.transactions.map((tx) => tx.date).filter(Boolean).sort();
    return ui.periodMode === "range" && Boolean(dates.length) && range.from === dates[0] && range.to === dates.at(-1);
  }
  return false;
}

function activeDateRange() {
  if (ui.periodMode === "range") return normalizeDateRange(ui.periodFrom, ui.periodTo);
  return { from: uiMonthStart(ui.month), to: uiMonthEnd(ui.month) };
}

function normalizeDateRange(from, to) {
  const fallbackMonth = ui.month || currentMonthKey();
  let start = isIsoDate(from) ? from : uiMonthStart(fallbackMonth);
  let end = isIsoDate(to) ? to : todayISO();
  if (start > end) [start, end] = [end, start];
  return { from: start, to: end };
}

function activePeriodLabel() {
  const { from, to } = activeDateRange();
  if (ui.periodMode === "month") return monthLabel(ui.month);
  if (from === to) return formatDate(from);
  return `${formatDate(from)} → ${formatDate(to)}`;
}

function isIsoDate(value) {
  return /^\d{4}-\d{2}-\d{2}$/.test(String(value || ""));
}

function getEconomicPeriodInfo(tx, { ignoreLock = false } = {}) {
  const bankDate = isIsoDate(tx?.date) ? tx.date : todayISO();
  const bankMonth = toMonthKey(bankDate);
  if (!ignoreLock && tx?.periodLocked && tx.periodMonth) {
    return {
      periodMonth: tx.periodMonth,
      periodDate: tx.periodDate || uiMonthStart(tx.periodMonth),
      rule: tx.periodRule || "manual",
      confidence: tx.periodConfidence || 100,
      reason: tx.periodReason || "Manuelt periodiseret",
      moved: tx.periodMonth !== bankMonth,
    };
  }

  const day = Number(bankDate.slice(8, 10));
  const nextMonth = shiftMonth(bankMonth, 1);
  const text = normalize(`${tx?.description || ""} ${tx?.note || ""} ${tx?.relationKey || ""} ${accountById(tx?.accountId)?.name || ""}`);
  const category = categoryById(tx?.categoryId);
  const amount = Number(tx?.amount || 0);
  const explicitDue = text.match(/forfaldsdato\s*(\d{1,2})[-./](\d{1,2})[-./](\d{2,4})/);
  if (explicitDue) {
    let year = Number(explicitDue[3]);
    if (year < 100) year += 2000;
    const dueMonth = `${year}-${String(Number(explicitDue[2])).padStart(2, "0")}`;
    return periodInfo(bankMonth, dueMonth, "forfaldsdato", 96, "Teksten angiver forfaldsmåned.");
  }

  const isSalary = amount > 0 && (tx?.categoryId === "cat-salary" || /\b(lonoverforsel|lønoverførsel|loenoverfoersel|løn|loen|salary)\b/.test(text));
  if (isSalary && day >= 25) return periodInfo(bankMonth, nextMonth, "salary-next-month", 98, "Løn sidst i måneden hører til næste økonomiske måned.");

  const fixedMonthEnd = day >= 25 && /(forsikring|vuggestue|institution|budget|faelles|fælles|sommerhuskonto|indbetaling|overfort fra kredit|overført fra kredit|praemiebetaling|præmiebetaling)/.test(text);
  if (fixedMonthEnd) return periodInfo(bankMonth, nextMonth, "fixed-month-end-next-month", 88, "Fast månedsskiftebetaling periodiseres til næste måned.");

  const transferMonthEnd = day >= 25 && (category?.kind === "transfer" || /(overfort til|overført til|til faelles|til fælles|til sommerhuskonto|egen konto|indlan|indlån|bank norwegian)/.test(text));
  if (transferMonthEnd) return periodInfo(bankMonth, nextMonth, "transfer-month-end-next-month", 82, "Månedsskifteoverførsel hører til næste økonomiske måned.");

  return periodInfo(bankMonth, bankMonth, "bank-date", 100, "Bankdato bruges som økonomisk dato.");
}

function periodInfo(bankMonth, periodMonth, rule, confidence, reason) {
  return {
    periodMonth,
    periodDate: uiMonthStart(periodMonth),
    rule,
    confidence,
    reason,
    moved: periodMonth !== bankMonth,
  };
}

function applyPeriodizationToTransactions({ force = false } = {}) {
  let changed = 0;
  for (const tx of state.transactions) {
    if (tx.periodLocked && !force) continue;
    const info = getEconomicPeriodInfo(tx, { ignoreLock: true });
    if (tx.periodMonth !== info.periodMonth || tx.periodRule !== info.rule || tx.periodConfidence !== info.confidence) {
      tx.periodMonth = info.periodMonth;
      tx.periodDate = info.periodDate;
      tx.periodRule = info.rule;
      tx.periodConfidence = info.confidence;
      tx.periodReason = info.reason;
      tx.updatedAt = new Date().toISOString();
      changed += 1;
    }
  }
  return { changed };
}

function getAccrualAllocation(tx) {
  const text = normalize(`${tx?.description || ""} ${accountById(tx?.accountId)?.name || ""}`);
  if (!(Number(tx?.amount || 0) < 0)) return null;
  const isQuarterlyLoan = /(totalkredit|realkredit|realkreditlån|realkreditlaan)/.test(text);
  const isQuarterlyCommon = /(e\/f|ef |fællesudgift|faellesudgift|ejerforening)/.test(text);
  if (!isQuarterlyLoan && !isQuarterlyCommon) return null;
  const anchor = toMonthKey(tx.date);
  const months = [shiftMonth(anchor, -2), shiftMonth(anchor, -1), anchor];
  return {
    months,
    rule: isQuarterlyLoan ? "quarterly-loan-accrual" : "quarterly-common-cost-accrual",
    confidence: 92,
    reason: isQuarterlyLoan ? "Realkredit/Totalkredit fordeles over de forgangne 3 måneder." : "Fællesudgift/ejerforening fordeles over de forgangne 3 måneder.",
  };
}

function expandTransactionForReporting(tx, basis = ui.dateBasis) {
  if (basis === "bank") return [{ ...tx, reportDate: tx.date, reportMonth: toMonthKey(tx.date), bankDate: tx.date }];
  const accrual = getAccrualAllocation(tx);
  if (accrual) {
    return accrual.months.map((month, index) => ({
      ...tx,
      reportDate: uiMonthStart(month),
      reportMonth: month,
      bankDate: tx.date,
      amount: Number(tx.amount || 0) / accrual.months.length,
      originalAmount: Number(tx.amount || 0),
      allocated: true,
      allocationIndex: index + 1,
      allocationMonths: accrual.months.length,
      allocationRule: accrual.rule,
      periodRule: accrual.rule,
      periodReason: accrual.reason,
      periodConfidence: accrual.confidence,
    }));
  }
  const info = getEconomicPeriodInfo(tx);
  return [{ ...tx, reportDate: info.periodDate, reportMonth: info.periodMonth, bankDate: tx.date }];
}

function transactionDateForView(tx, basis = ui.dateBasis) {
  if (tx.reportDate && basis !== "bank") return tx.reportDate;
  if (basis === "bank") return tx.bankDate || tx.date;
  return getEconomicPeriodInfo(tx).periodDate;
}

function transactionMonthForView(tx, basis = ui.dateBasis) {
  return toMonthKey(transactionDateForView(tx, basis));
}

function sortTransactionsForView(a, b) {
  const ad = transactionDateForView(a);
  const bd = transactionDateForView(b);
  if (ad !== bd) return bd.localeCompare(ad);
  return sortTransactionsDesc(a, b);
}

function buildReportingRowsForDateRange(from, to, basis = ui.dateBasis) {
  const range = normalizeDateRange(from, to);
  const rows = state.transactions
    .flatMap((tx) => expandTransactionForReporting(tx, basis))
    .filter((tx) => {
      const viewDate = transactionDateForView(tx, basis);
      return viewDate >= range.from && viewDate <= range.to;
    });
  const sourceIds = new Set(rows.map((tx) => tx.id));
  const matchWindowFrom = shiftDate(range.from, -7);
  const matchWindowTo = shiftDate(range.to, 7);
  const sourceRows = state.transactions.filter((tx) => {
    if (sourceIds.has(tx.id)) return true;
    const bankDate = tx.date || "";
    const economicDate = transactionDateForView(tx, basis);
    return (bankDate >= matchWindowFrom && bankDate <= matchWindowTo) || (economicDate >= matchWindowFrom && economicDate <= matchWindowTo);
  });
  const autoExcludedIds = getAutoExcludedTransferIdsForRows(sourceRows);
  return rows
    .map((tx) => autoExcludedIds.has(tx.id) ? { ...tx, autoExcludedTransfer: true } : tx)
    .sort(sortTransactionsForView);
}

function getPeriodReportingTransactions() {
  const { from, to } = activeDateRange();
  return buildReportingRowsForDateRange(from, to);
}

function getReportingTransactionsForDateRange(from, to, basis = ui.dateBasis) {
  return buildReportingRowsForDateRange(from, to, basis);
}

function getReportingTransactionsForMonth(month, basis = ui.dateBasis) {
  return buildReportingRowsForDateRange(uiMonthStart(month), uiMonthEnd(month), basis)
    .filter((tx) => transactionMonthForView(tx, basis) === month)
    .sort(sortTransactionsForView);
}

function getPeriodTransactions() {
  const { from, to } = activeDateRange();
  return [...state.transactions]
    .filter((tx) => {
      const viewDate = transactionDateForView(tx);
      return viewDate >= from && viewDate <= to;
    })
    .sort(sortTransactionsForView);
}

function getTransactionsForDateRange(from, to, basis = ui.dateBasis) {
  const range = normalizeDateRange(from, to);
  return [...state.transactions]
    .filter((tx) => {
      const viewDate = transactionDateForView(tx, basis);
      return viewDate >= range.from && viewDate <= range.to;
    })
    .sort(sortTransactionsForView);
}

function getPeriodSummary() {
  return summarizeTransactions(getPeriodReportingTransactions());
}

function isReportTransfer(tx) {
  return Boolean(tx?.autoExcludedTransfer) || isInternalFundingInflow(tx) || categoryById(tx?.categoryId)?.kind === "transfer";
}

function isReportExpense(tx) {
  return Number(tx?.amount || 0) < 0 && !isReportTransfer(tx);
}

function summarizeTransactions(rows) {
  let income = 0;
  let expenses = 0;
  let incomeCount = 0;
  for (const tx of rows) {
    if (isReportTransfer(tx)) continue;
    if (tx.amount >= 0) {
      income += Number(tx.amount || 0);
      incomeCount += 1;
    } else {
      expenses += Math.abs(Number(tx.amount || 0));
    }
  }
  const savings = income - expenses;
  const savingsRate = income > 0 ? savings / income : 0;
  return { income, expenses, savings, savingsRate, incomeCount };
}

function getPeriodComparison() {
  if (ui.periodMode === "month") return getDashboardComparison(ui.month);
  const current = getPeriodSummary();
  const { from, to } = activeDateRange();
  const days = Math.max(1, Math.abs(daysBetween(to, from)) + 1);
  const previousTo = shiftDate(from, -1);
  const previousFrom = shiftDate(previousTo, -(days - 1));
  const lastYearFrom = shiftDateByYears(from, -1);
  const lastYearTo = shiftDateByYears(to, -1);
  const previous = summarizeTransactions(getReportingTransactionsForDateRange(previousFrom, previousTo));
  const lastYear = summarizeTransactions(getReportingTransactionsForDateRange(lastYearFrom, lastYearTo));
  return {
    current,
    previous,
    lastYear,
    momExpenseDelta: current.expenses - previous.expenses,
    yoyExpenseDelta: current.expenses - lastYear.expenses,
    incomeCountLabel: `${current.incomeCount} indbetaling${current.incomeCount === 1 ? "" : "er"}`,
    previousRange: { from: previousFrom, to: previousTo },
    lastYearRange: { from: lastYearFrom, to: lastYearTo },
  };
}

function getPeriodCategoryReportRows(accountFilter = ui.reportAccountFilter) {
  return getCategoryReportRowsForRows(getPeriodReportingTransactions(), accountFilter);
}

function getCategoryReportRowsForRows(rows, accountFilter = ui.reportAccountFilter) {
  const totals = new Map();
  for (const tx of rows) {
    const category = categoryById(tx.categoryId);
    if (accountFilter !== "all" && tx.accountId !== accountFilter) continue;
    if (!isReportExpense(tx)) continue;
    const entry = totals.get(tx.categoryId) || { category, total: 0, count: 0 };
    entry.total += Math.abs(Number(tx.amount || 0));
    entry.count += 1;
    totals.set(tx.categoryId, entry);
  }
  return Array.from(totals.values()).sort((a, b) => b.total - a.total);
}

function getPeriodMerchantReportRows(categoryId = "", accountFilter = ui.reportAccountFilter) {
  return getMerchantReportRowsForRows(getPeriodReportingTransactions(), categoryId, accountFilter);
}

function getMerchantReportRowsForRows(rows, categoryId = "", accountFilter = ui.reportAccountFilter) {
  const grouped = new Map();
  for (const tx of rows) {
    const category = categoryById(tx.categoryId);
    if (accountFilter !== "all" && tx.accountId !== accountFilter) continue;
    if (categoryId && tx.categoryId !== categoryId) continue;
    if (!isReportExpense(tx)) continue;
    const name = merchantName(tx.description);
    const entry = grouped.get(name) || { name, total: 0, count: 0 };
    entry.total += Math.abs(Number(tx.amount || 0));
    entry.count += 1;
    grouped.set(name, entry);
  }
  return Array.from(grouped.values()).sort((a, b) => b.total - a.total);
}

function getExpenseTransactionsForRows(rows) {
  return rows
    .filter(isReportExpense)
    .sort((a, b) => Math.abs(b.amount) - Math.abs(a.amount));
}

function getExpenseSummaryForRows(rows) {
  const expenses = getExpenseTransactionsForRows(rows);
  const comparison = getPeriodComparison();
  const total = expenses.reduce((sum, tx) => sum + Math.abs(Number(tx.amount || 0)), 0);
  const byCategory = new Map();
  for (const tx of expenses) byCategory.set(tx.categoryId, (byCategory.get(tx.categoryId) || 0) + Math.abs(Number(tx.amount || 0)));
  const biggestCategory = Array.from(byCategory.entries())
    .map(([categoryId, value]) => ({ ...categoryById(categoryId), total: value }))
    .sort((a, b) => b.total - a.total)[0];
  const dayBasis = Math.max(1, Math.abs(daysBetween(activeDateRange().to, activeDateRange().from)) + 1);
  return { expenses: total, count: expenses.length, delta: total - comparison.previous.expenses, dailyAverage: total / dayBasis, dayBasis, biggestCategory };
}

function getMonthlySummary(month) {
  return summarizeTransactions(getReportingTransactionsForMonth(month));
}

function getExpenseSummary(month) {
  const expenses = getExpenseTransactionsForMonth(month);
  const previousExpenses = getMonthlySummary(shiftMonth(month, -1)).expenses;
  const total = expenses.reduce((sum, tx) => sum + Math.abs(tx.amount), 0);
  const byCategory = new Map();
  for (const tx of expenses) {
    byCategory.set(tx.categoryId, (byCategory.get(tx.categoryId) || 0) + Math.abs(tx.amount));
  }
  const biggestCategory = Array.from(byCategory.entries())
    .map(([categoryId, value]) => ({ ...categoryById(categoryId), total: value }))
    .sort((a, b) => b.total - a.total)[0];
  const dayBasis = daysElapsedForMonth(month);
  return {
    expenses: total,
    count: expenses.length,
    delta: total - previousExpenses,
    dailyAverage: dayBasis ? total / dayBasis : 0,
    dayBasis,
    biggestCategory,
  };
}

function getExpenseTransactionsForMonth(month) {
  return getReportingTransactionsForMonth(month)
    .filter(isReportExpense)
    .sort((a, b) => Math.abs(b.amount) - Math.abs(a.amount));
}

function groupExpensesByMerchant(expenses) {
  const grouped = new Map();
  for (const tx of expenses) {
    const name = merchantName(tx.description);
    const entry = grouped.get(name) || { name, total: 0, count: 0 };
    entry.total += Math.abs(tx.amount);
    entry.count += 1;
    grouped.set(name, entry);
  }
  return Array.from(grouped.values()).sort((a, b) => b.total - a.total);
}

function merchantName(description) {
  const firstPart = String(description || "").split(" · ").find(Boolean) || "Ukendt";
  const cleaned = firstPart
    .replace(/^(dankort[-\s]*køb|kortkøb|visa\s*køb|mastercard\s*køb|mobilepay|betalingsservice)\s+/i, "")
    .replace(/\b(aftalenr\.?|notanr\.?|nota)\b.*$/i, "")
    .replace(/\bC\d{6,}\b/gi, "")
    .replace(/\b\d{6,}\b/g, "")
    .replace(/\b\d{2}[-.]\d{2}[-.]\d{2,4}\b/g, "")
    .replace(/\s{2,}/g, " ")
    .trim();
  return cleaned || "Ukendt";
}

function getQuickCategoryActions() {
  return [
    ["cat-groceries", "Husholdning"],
    ["cat-housing", "Bolig"],
    ["cat-summerhouse", "Sommerhus"],
    ["cat-family", "Familie"],
    ["cat-lifestyle", "Fritid"],
    ["cat-shopping", "Diverse"],
    ["cat-reimburse", "Udlæg"],
    ["cat-savings", "Opsparing"],
    ["cat-transfer", "Intern"],
  ]
    .map(([categoryId, label]) => ({ categoryId, label }))
    .filter((item) => categoryById(item.categoryId));
}

function isNeedsCategory(tx) {
  const category = categoryById(tx.categoryId);
  return !category || category.id === fallbackCategoryId() || ["andet", "ukendt"].includes(normalize(category.name));
}

function isUncertainCategory(tx) {
  const category = categoryById(tx.categoryId);
  return !category || tx.categoryId === fallbackCategoryId() || tx.needsReview || Number(tx.categoryConfidence || 0) < 78;
}

function getNeedsCategoryGroups(month) {
  return getNeedsCategoryGroupsForRows(getTransactionsForMonth(month));
}

function getUncertainCategoryGroupsForRows(rows) {
  const fallback = fallbackCategoryId();
  const grouped = new Map();
  for (const tx of rows) {
    const uncertain = isUncertainCategory(tx);
    if (!uncertain || Number(tx.amount || 0) >= 0) continue;
    const name = merchantName(tx.description);
    const suggestion = suggestCategoryForBankTransaction(tx);
    const entry = grouped.get(name) || { name, count: 0, expenseTotal: 0, examples: [], currentCategoryId: tx.categoryId, reason: tx.categoryReason || "", suggestion };
    entry.count += 1;
    entry.expenseTotal += Math.abs(Number(tx.amount || 0));
    if (entry.examples.length < 3) entry.examples.push(tx.description);
    if (!entry.suggestion?.categoryId && suggestion.categoryId) entry.suggestion = suggestion;
    grouped.set(name, entry);
  }
  return Array.from(grouped.values()).sort((a, b) => b.expenseTotal - a.expenseTotal || b.count - a.count);
}

function getNeedsCategoryGroupsForRows(rows) {
  const grouped = new Map();
  for (const tx of rows.filter(isNeedsCategory)) {
    const name = merchantName(tx.description);
    const entry = grouped.get(name) || { name, count: 0, expenseTotal: 0, net: 0, examples: [] };
    entry.count += 1;
    entry.net += Number(tx.amount || 0);
    if (tx.amount < 0) entry.expenseTotal += Math.abs(tx.amount);
    if (entry.examples.length < 3) entry.examples.push(tx.description);
    grouped.set(name, entry);
  }
  return Array.from(grouped.values())
    .sort((a, b) => b.expenseTotal - a.expenseTotal || b.count - a.count || a.name.localeCompare(b.name, "da"))
    .slice(0, 40);
}

function categoryForRelationType(type) {
  if (type === "opsparing" || type === "investering") return "cat-savings";
  if (type === "udlæg") return "cat-reimburse";
  if (type === "intern") return "cat-transfer";
  return "";
}

function relationTypeForCategory(categoryId) {
  if (categoryId === "cat-savings") return "opsparing";
  if (categoryId === "cat-reimburse") return "udlæg";
  if (categoryId === "cat-transfer") return "intern";
  return "";
}

function applyCategoryToTransaction(txId, categoryId, options = {}) {
  const tx = state.transactions.find((item) => item.id === txId);
  const category = categoryById(categoryId);
  if (!tx || !category) return false;
  const impliedRelation = relationTypeForCategory(categoryId);
  let relationType = Object.prototype.hasOwnProperty.call(options, "relationType") ? options.relationType : impliedRelation;
  if (!relationType && category.kind === "transfer") relationType = tx.relationType || impliedRelation || "intern";
  if (!relationType && category.kind !== "transfer") {
    const previousRelationImpliedCategory = categoryForRelationType(tx.relationType || "");
    relationType = previousRelationImpliedCategory ? "" : tx.relationType || "";
  }
  tx.categoryId = categoryId;
  tx.categorySource = options.source || "manual";
  tx.categoryConfidence = options.confidence ?? 100;
  tx.categoryReason = options.reason || "Valideret";
  tx.needsReview = false;
  tx.relationType = relationType || "";
  if (tx.relationType) {
    if (options.relationKey || !tx.relationKey) tx.relationKey = options.relationKey || category.name;
  } else if (!options.keepRelationKey) {
    tx.relationKey = "";
  }
  if (options.note && !tx.note) tx.note = options.note;
  tx.updatedAt = new Date().toISOString();
  return true;
}

function improveCategorizationForRows(rows, { onlyUncertain = true } = {}) {
  const fallback = fallbackCategoryId();
  let changed = 0;
  let reviewed = 0;
  for (const tx of rows) {
    reviewed += 1;
    const current = categoryById(tx.categoryId);
    const uncertain = !current || current.id === fallback || tx.needsReview || Number(tx.categoryConfidence || 0) < 78;
    if (onlyUncertain && !uncertain) continue;
    if (tx.categorySource === "manual" && !uncertain) continue;
    const suggestion = suggestCategoryForBankTransaction(tx);
    if (!suggestion.categoryId) {
      tx.needsReview = uncertain;
      continue;
    }
    if (tx.categoryId !== suggestion.categoryId || tx.needsReview || !tx.categorySource) {
      tx.categoryId = suggestion.categoryId;
      tx.categoryConfidence = suggestion.confidence || 0;
      tx.categorySource = suggestion.source || "knowhow";
      tx.categoryReason = suggestion.reason || "Auto-kategoriseret";
      tx.needsReview = suggestion.confidence < 78;
      if (suggestion.relationType && !tx.relationType) tx.relationType = suggestion.relationType;
      tx.updatedAt = new Date().toISOString();
      changed += 1;
    }
  }
  return { changed, reviewed };
}

function applyCategoryToMerchantGroup(merchant, categoryId) {
  const category = categoryById(categoryId);
  if (!category) return { changed: 0, ruleCreated: false };
  let changed = 0;
  for (const tx of getPeriodTransactions()) {
    if (!isUncertainCategory(tx)) continue;
    if (merchantName(tx.description) !== merchant) continue;
    if (applyCategoryToTransaction(tx.id, categoryId, { reason: `Valideret for ${merchant}` })) changed += 1;
  }
  const ruleCreated = maybeCreateRuleFromMerchant(merchant, categoryId);
  return { changed, ruleCreated };
}

function validateCurrentCategoryForMerchantGroup(merchant) {
  let changed = 0;
  let categoryName = "";
  for (const tx of getPeriodTransactions()) {
    if (!isUncertainCategory(tx)) continue;
    if (merchantName(tx.description) !== merchant) continue;
    const category = categoryById(tx.categoryId);
    if (!category || category.id === fallbackCategoryId()) continue;
    tx.categorySource = "manual";
    tx.categoryConfidence = 100;
    tx.categoryReason = `Godkendt nuværende kategori for ${merchant}`;
    tx.needsReview = false;
    tx.updatedAt = new Date().toISOString();
    categoryName ||= category.name;
    changed += 1;
  }
  return { changed, categoryName };
}

function maybeCreateRuleFromMerchant(merchant, categoryId) {
  const category = categoryById(categoryId);
  const keyword = ruleKeywordFromMerchant(merchant);
  if (!category || !keyword || keyword.length < 3) return false;
  if (category.kind === "transfer" && categoryId !== "cat-savings") return false;
  if (state.rules.some((rule) => normalize(rule.keyword) === normalize(keyword))) return false;
  state.rules.push({ id: uid("rule"), keyword, categoryId });
  return true;
}

function ruleKeywordFromMerchant(merchant) {
  return String(merchant || "")
    .replace(/[·|].*$/, "")
    .replace(/\b\d+\b/g, "")
    .replace(/\s{2,}/g, " ")
    .trim()
    .slice(0, 48);
}

function getMoneyMovementCandidates(month) {
  return getMoneyMovementCandidatesForRows(getTransactionsForMonth(month));
}

function getMoneyMovementCandidatesForRows(rows) {
  return rows
    .filter((tx) => !isProtectedIncomeTransaction(tx))
    .map((tx) => ({ tx, suggestion: getMoneyMovementSuggestion(tx) }))
    .filter(({ tx, suggestion }) => suggestion.categoryId && tx.categoryId !== suggestion.categoryId)
    .sort((a, b) => b.suggestion.score - a.suggestion.score || Math.abs(b.tx.amount) - Math.abs(a.tx.amount))
    .map(({ tx }) => tx)
    .slice(0, 80);
}

function isProtectedIncomeTransaction(tx) {
  const text = normalize(`${tx?.description || ""} ${tx?.note || ""} ${tx?.relationKey || ""}`);
  return categoryById(tx?.categoryId)?.kind === "income" || /(lonoverforsel|loenoverfoersel|lønoverførsel|\blon\b|\bloen\b|\bløn\b|salary|gage|honorar)/.test(text);
}

function looksLikeInternalTransfer(tx) {
  if (!tx || isProtectedIncomeTransaction(tx)) return false;
  if (["cat-transfer", "cat-savings"].includes(tx.categoryId || "")) return true;
  const text = relationText(tx);
  return /(overforsel|overførsel|kontooverforsel|kontooverførsel|egen konto|mellem konti|fra konto|til konto|straksoverforsel|straksoverførsel|til faelles|til fælles|til dankonto|til sparkron|sommerhuskonto|budgetkonto|opsparing|sparekonto|indlan|indlån|fra kredit|bank norwegian|saxo|nordnet|depot|investering)/.test(text);
}

function getMoneyMovementSuggestion(tx) {
  if (isProtectedIncomeTransaction(tx)) return { categoryId: "", relationType: "", reason: "", score: 0, confidence: "none" };
  const text = normalize(`${tx.description} ${tx.note || ""} ${tx.relationKey || ""}`);
  const result = (categoryId, relationType, reason, score = 60, confidence = "medium") => ({ categoryId, relationType, reason, score, confidence });

  if (/\b(saxo|nordnet|depot|invester|investering|aktie|aktier|etf|fond|pension)\b/.test(text)) {
    return result("cat-savings", "investering", "Teksten ligner overførsel til/fra investeringskonto.", 100, "high");
  }
  if (/\b(opsparing|sparekonto|nedsparing)\b/.test(text)) {
    return result("cat-savings", "opsparing", "Teksten ligner opsparing eller flytning til sparekonto.", 96, "high");
  }
  if (/\b(overforsel|overførsel|kontooverforsel|kontooverførsel|egen konto|mellem konti|fra konto|til konto|straksoverforsel|straksoverførsel)\b/.test(text)) {
    return result("cat-transfer", "intern", "Teksten ligner en intern kontooverførsel.", 92, "high");
  }
  if (looksLikeInternalTransfer(tx) && hasMatchingOppositeTransaction(tx)) {
    return result("cat-transfer", "intern", "Der findes en modpost med samme beløb i samme periode, og teksten ligner en intern flytning.", 88, "high");
  }
  if (/(mobilepay|refusion|refunder|tilbagebetalt|tilbagebetaling|lagt ud|udlæg|udlaeg|skylder)/.test(text)) {
    const confidence = /(refusion|refunder|tilbagebetalt|lagt ud|udlæg|udlaeg|skylder)/.test(text) ? "high" : "low";
    return result("cat-reimburse", "udlæg", "Teksten ligner udlæg eller penge tilbage fra andre.", confidence === "high" ? 82 : 45, confidence);
  }
  return { categoryId: "", relationType: "", reason: "", score: 0, confidence: "none" };
}

function hasMatchingOppositeTransaction(tx) {
  const amount = Math.abs(Number(tx.amount || 0));
  if (!amount) return false;
  return state.transactions.some((other) => {
    if (other.id === tx.id) return false;
    if (toMonthKey(other.date) !== toMonthKey(tx.date)) return false;
    if (Math.abs(Math.abs(Number(other.amount || 0)) - amount) > 0.01) return false;
    if (Math.sign(other.amount) === Math.sign(tx.amount)) return false;
    return Math.abs(daysBetween(other.date, tx.date)) <= 3;
  });
}

function daysBetween(a, b) {
  const first = new Date(`${a}T00:00:00`);
  const second = new Date(`${b}T00:00:00`);
  return Math.round((first - second) / 86400000);
}

function getCleanupStatus(month) {
  return getCleanupStatusForRows(getTransactionsForMonth(month));
}

function getCleanupStatusForRows(rows) {
  const unknownCount = rows.filter(isNeedsCategory).length;
  const transferMatches = findTransferMatchesForRows(rows);
  const movementCount = getMoneyMovementCandidatesForRows(rows).length;
  const matchedInternalCount = rows.filter((tx) => tx.linkedTransactionId && tx.relationType === "intern").length / 2;
  return { unknownCount, transferMatchCount: transferMatches.length, movementCount, matchedInternalCount };
}

function findTransferMatches(month) {
  return findTransferMatchesForRows(getTransactionsForMonth(month));
}

function findTransferMatchesForRows(periodRows) {
  const rows = periodRows.filter((tx) => Number(tx.amount || 0) !== 0 && !tx.linkedTransactionId && !isProtectedIncomeTransaction(tx));
  const negatives = rows.filter((tx) => tx.amount < 0);
  const positives = rows.filter((tx) => tx.amount > 0);
  const candidates = [];

  for (const outTx of negatives) {
    for (const inTx of positives) {
      if (outTx.accountId === inTx.accountId) continue;
      const amount = Math.abs(Number(outTx.amount || 0));
      if (Math.abs(Math.abs(Number(inTx.amount || 0)) - amount) > 0.01) continue;
      const dayDiff = Math.abs(daysBetween(outTx.date, inTx.date));
      if (dayDiff > 5) continue;
      if (!isSafeTransferCandidatePair(outTx, inTx)) continue;
      const scored = scoreTransferMatch(outTx, inTx, dayDiff);
      if (scored.score < 45) continue;
      candidates.push({
        id: `${outTx.id}|${inTx.id}`,
        outTx,
        inTx,
        amount,
        dayDiff,
        ...scored,
        confidence: scored.score >= 82 ? "high" : "medium",
      });
    }
  }

  const used = new Set();
  return candidates
    .sort((a, b) => b.score - a.score || b.amount - a.amount || a.dayDiff - b.dayDiff)
    .filter((match) => {
      if (used.has(match.outTx.id) || used.has(match.inTx.id)) return false;
      used.add(match.outTx.id);
      used.add(match.inTx.id);
      return true;
    });
}

function isSafeTransferCandidatePair(outTx, inTx) {
  if (isProtectedIncomeTransaction(outTx) || isProtectedIncomeTransaction(inTx)) return false;
  return looksLikeInternalTransfer(outTx) || looksLikeInternalTransfer(inTx);
}

function scoreTransferMatch(outTx, inTx, dayDiff) {
  let score = 42;
  const reasons = [`samme beløb (${formatCurrency(Math.abs(outTx.amount))})`];
  const outText = relationText(outTx);
  const inText = relationText(inTx);
  const combined = `${outText} ${inText}`;

  if (dayDiff === 0) {
    score += 22;
    reasons.push("samme dato");
  } else if (dayDiff <= 1) {
    score += 16;
    reasons.push("1 dag imellem");
  } else if (dayDiff <= 3) {
    score += 10;
    reasons.push(`${dayDiff} dage imellem`);
  }

  if (new Date(`${outTx.date}T00:00:00`).getDate() <= 5 && new Date(`${inTx.date}T00:00:00`).getDate() <= 5) {
    score += 12;
    reasons.push("starten af måneden");
  }

  if (/(overforsel|overførsel|konto|intern|egen konto|fra konto|til konto|budget|faelles|fælles|opsparing)/.test(combined)) {
    score += 18;
    reasons.push("tekst ligner kontooverførsel");
  }

  if (outTx.relationType === "intern" || inTx.relationType === "intern") {
    score += 20;
    reasons.push("note/relation er intern");
  }

  if (outTx.relationKey && inTx.relationKey && normalize(outTx.relationKey) === normalize(inTx.relationKey)) {
    score += 26;
    reasons.push("samme relationsnavn");
  }

  if (mentionsAccount(outTx, inTx.accountId) || mentionsAccount(inTx, outTx.accountId)) {
    score += 18;
    reasons.push("kontonavn nævnt i tekst/note");
  }

  if (categoryById(outTx.categoryId)?.kind === "transfer" || categoryById(inTx.categoryId)?.kind === "transfer") {
    score += 10;
    reasons.push("én post er allerede markeret som flytning");
  }

  return { score, reason: reasons.slice(0, 4).join(" · ") };
}

function relationText(tx) {
  return normalize(`${tx.description || ""} ${tx.note || ""} ${tx.relationKey || ""}`);
}

function mentionsAccount(tx, accountId) {
  const account = accountById(accountId);
  if (!account) return false;
  const text = relationText(tx);
  const name = normalize(account.name);
  if (name && text.includes(name)) return true;
  return name.split(/\s+/).filter((part) => part.length >= 5).some((part) => text.includes(part));
}

function applyInternalTransferMatch(outTx, inTx) {
  if (!outTx || !inTx || outTx.id === inTx.id) return false;
  if (isProtectedIncomeTransaction(outTx) || isProtectedIncomeTransaction(inTx)) return false;
  if (!isSafeTransferCandidatePair(outTx, inTx)) return false;
  if (Math.abs(Math.abs(Number(outTx.amount || 0)) - Math.abs(Number(inTx.amount || 0))) > 0.01) return false;
  const groupId = outTx.matchGroupId || inTx.matchGroupId || uid("match");
  const relationKey = `Afstemt: ${accountById(outTx.accountId)?.name || "fra konto"} → ${accountById(inTx.accountId)?.name || "til konto"}`;
  const note = `Afstemt intern kontooverførsel på ${formatCurrency(Math.abs(outTx.amount))}`;
  const transferId = transferCategoryId() || "cat-transfer";
  for (const tx of [outTx, inTx]) {
    tx.categoryId = transferId;
    tx.relationType = "intern";
    tx.relationKey = tx.relationKey || relationKey;
    tx.matchGroupId = groupId;
    tx.linkedTransactionId = tx.id === outTx.id ? inTx.id : outTx.id;
    tx.note = appendNote(tx.note, note);
    tx.updatedAt = new Date().toISOString();
  }
  return true;
}

function appendNote(current, addition) {
  const existing = String(current || "").trim();
  if (!existing) return addition;
  if (normalize(existing).includes(normalize(addition))) return existing;
  return `${existing}\n${addition}`;
}

function getTransactionsForMonth(month, basis = ui.dateBasis) {
  return [...state.transactions]
    .filter((tx) => transactionMonthForView(tx, basis) === month)
    .sort(sortTransactionsForView);
}

function getFilteredTransactions() {
  const query = normalize(ui.query);
  return getPeriodTransactions().filter((tx) => {
    const category = categoryById(tx.categoryId);
    const account = accountById(tx.accountId);
    const haystack = normalize(`${tx.description} ${tx.note || ""} ${tx.relationType || ""} ${tx.relationKey || ""} ${category?.name || ""} ${account?.name || ""} ${tx.amount}`);
    if (query && !haystack.includes(query)) return false;
    if (ui.categoryFilter !== "all" && tx.categoryId !== ui.categoryFilter) return false;
    if (ui.accountFilter !== "all" && tx.accountId !== ui.accountFilter) return false;
    return true;
  });
}

function getReportTransactions({ onlyExpenses = false, onlyTransfers = false } = {}) {
  return getPeriodReportingTransactions().filter((tx) => {
    const category = categoryById(tx.categoryId);
    if (ui.reportAccountFilter !== "all" && tx.accountId !== ui.reportAccountFilter) return false;
    if (onlyExpenses && !isReportExpense(tx)) return false;
    if (onlyTransfers && !isReportTransfer(tx)) return false;
    return true;
  });
}

function getCategoryReportRows(month, accountFilter = ui.reportAccountFilter) {
  return getCategoryReportRowsForRows(getReportingTransactionsForMonth(month), accountFilter);
}

function getMerchantReportRows(month, categoryId = "", accountFilter = ui.reportAccountFilter) {
  return getMerchantReportRowsForRows(getReportingTransactionsForMonth(month), categoryId, accountFilter);
}

function getMatchedTransferPairs(month) {
  return getMatchedTransferPairsForRows(getTransactionsForMonth(month));
}

function getMatchedTransferPairsForRows(rows) {
  const pairs = [];
  const seen = new Set();
  for (const tx of rows) {
    if (!tx.linkedTransactionId || seen.has(tx.id)) continue;
    if (ui.reportAccountFilter !== "all" && tx.accountId !== ui.reportAccountFilter) continue;
    const other = state.transactions.find((item) => item.id === tx.linkedTransactionId);
    if (!other) continue;
    seen.add(tx.id);
    seen.add(other.id);
    const outTx = tx.amount < 0 ? tx : other;
    const inTx = tx.amount > 0 ? tx : other;
    pairs.push({
      groupId: tx.matchGroupId || `${outTx.id}|${inTx.id}`,
      from: accountById(outTx.accountId)?.name || "Ukendt konto",
      to: accountById(inTx.accountId)?.name || "Ukendt konto",
      amount: Math.abs(outTx.amount),
      date: outTx.date,
      count: 2,
      transactions: [outTx, inTx],
    });
  }
  return pairs.sort((a, b) => b.amount - a.amount);
}

function sortTransactionsDesc(a, b) {
  if (a.date !== b.date) return b.date.localeCompare(a.date);
  return Math.abs(b.amount) - Math.abs(a.amount);
}

function getTotalBalance() {
  return state.accounts.reduce((sum, account) => sum + Number(account.balance || 0), 0);
}

function getAccountMonthlySummary(accountId, month) {
  return summarizeAccountTransactions(getTransactionsForMonth(month).filter((tx) => tx.accountId === accountId));
}

function getAccountPeriodSummary(accountId) {
  return summarizeAccountTransactions(getPeriodTransactions().filter((tx) => tx.accountId === accountId));
}

function summarizeAccountTransactions(rows) {
  let income = 0;
  let expenses = 0;
  let transfers = 0;
  for (const tx of rows) {
    const category = categoryById(tx.categoryId);
    if (isReportTransfer(tx)) {
      transfers += Number(tx.amount || 0);
    } else if (tx.amount >= 0) {
      income += Number(tx.amount || 0);
    } else {
      expenses += Math.abs(Number(tx.amount || 0));
    }
  }
  return { income, expenses, transfers };
}

function getAvailableMonths() {
  const set = new Set([currentMonthKey(), ui.month, state.settings.selectedMonth].filter(Boolean));
  for (const tx of state.transactions) {
    set.add(toMonthKey(tx.date));
    set.add(transactionMonthForView(tx, "economic"));
  }
  return Array.from(set).sort().reverse();
}

function latestTransactionMonth() {
  return state.transactions
    .map((tx) => toMonthKey(tx.date))
    .filter(Boolean)
    .sort()
    .at(-1) || "";
}

function lastMonths(month, count) {
  return Array.from({ length: count }, (_, index) => shiftMonth(month, index - count + 1));
}

function transactionCountForAccount(accountId) {
  return state.transactions.filter((tx) => tx.accountId === accountId).length;
}

function transactionCountForCategory(categoryId) {
  return state.transactions.filter((tx) => tx.categoryId === categoryId).length;
}

function accountById(id) {
  return state.accounts.find((account) => account.id === id);
}

function categoryById(id) {
  return state.categories.find((category) => category.id === id);
}

function fallbackCategoryId() {
  return state.categories.find((category) => category.id === "cat-other")?.id || state.categories.find((category) => category.name.toLowerCase() === "ukendt")?.id || state.categories[0]?.id || "";
}

function transferCategoryId() {
  return state.categories.find((category) => category.id === "cat-transfer")?.id || state.categories.find((category) => category.kind === "transfer")?.id || "";
}

function matchCategoryByRules(text) {
  const haystack = normalize(text);
  const rule = state.rules.find((item) => haystack.includes(normalize(item.keyword)));
  return rule?.categoryId || "";
}

function matchRuleObjectByText(text) {
  const haystack = normalize(text);
  return state.rules.find((item) => haystack.includes(normalize(item.keyword)));
}

function matchCategoryByMcc(mcc) {
  const code = String(mcc || "").replace(/\D/g, "");
  if (!code) return "";
  const numeric = Number(code);
  const match = MCC_CATEGORY_RULES.find((rule) =>
    rule.codes?.includes(code) || rule.ranges?.some(([from, to]) => numeric >= from && numeric <= to)
  );
  return match?.categoryId || "";
}

function suggestCategoryForBankTransaction(remote) {
  const openBanking = remote?.openBanking || {};
  const accountName = remote?.accountName || remote?.sourceAccountName || accountById(remote?.accountId)?.name || "";
  const merchantText = [remote?.description, remote?.counterpartyName, openBanking.remittanceText, remote?.note, remote?.relationKey].filter(Boolean).join(" ");
  const normalized = normalize(merchantText);
  const amount = Number(remote?.amount || 0);
  const mcc = remote?.merchantCategoryCode || openBanking.merchantCategoryCode;
  const mccCategory = matchCategoryByMcc(mcc);
  if (mccCategory) return { categoryId: mccCategory, confidence: 98, source: "mcc", reason: `MCC ${mcc}` };

  if (amount < 0 && /(til .*løn|til .*lon|sparkron løn|sparkron lon)/.test(normalized)) {
    return { categoryId: "cat-transfer", relationType: "intern", confidence: 88, source: "knowhow", reason: "Negativ post til lønkonto ligner intern overførsel." };
  }

  const userRule = matchRuleObjectByText(merchantText);
  if (userRule && !(userRule.categoryId === "cat-salary" && amount < 0)) return { categoryId: userRule.categoryId, confidence: 91, source: "regel", reason: `Regel: ${userRule.keyword}` };

  const isTransferText = /(til faelles|til fælles|til sommerhuskonto|fra sommerhuskonto|overfort til|overført til|egen konto|mellem konti|kontooverforsel|kontooverførsel|automatisk saldoflytning|(^|\s)forbrug(\s|$)|forbrug på mastercard)/.test(normalized);
  if (isTransferText) return { categoryId: "cat-transfer", relationType: "intern", confidence: 92, source: "knowhow", reason: "Ligner intern kontooverførsel." };

  const summerhouseAccount = /sommerhus/.test(normalize(accountName));
  if (summerhouseAccount && !/(mobilepay|udlæg|udlaeg|refusion|løn|loen)/.test(normalized)) {
    return { categoryId: "cat-summerhouse", confidence: 86, source: "konto", reason: "Posteringen ligger på sommerhuskontoen." };
  }

  const match = INTELLIGENT_CATEGORY_RULES.find((rule) => rule.pattern.test(normalized) && !(rule.categoryId === "cat-salary" && amount < 0));
  if (match) return { categoryId: match.categoryId, relationType: match.relationType || "", confidence: match.confidence, source: "knowhow", reason: match.reason };

  if (summerhouseAccount && !/(mobilepay|udlæg|udlaeg|refusion|løn|loen|meny|netto|superbrugsen|odden fisk|kiosken|restaurant|cafe|kaffe|wolt|molslinjen|parkering|easypark)/.test(normalized)) {
    return { categoryId: "cat-summerhouse", confidence: 62, source: "konto", reason: "Posteringen ligger på sommerhuskontoen, men bør valideres." };
  }

  return { categoryId: "", confidence: 0, source: "", reason: "Ingen sikker kategori." };
}

function matchCategoryForBankTransaction(remote) {
  return suggestCategoryForBankTransaction(remote).categoryId;
}

function relationTypeLabel(type) {
  return RELATION_TYPES.find((item) => item.id === type)?.label || "Anden sammenhæng";
}

function inferRelationFromNote(note, description = "") {
  const text = normalize(`${note} ${description}`);
  if (!normalize(note)) return { type: "", key: "" };

  if (/(saxo|nordnet|depot|invester|investering|aktie|aktier|etf|fond|pension)/.test(text)) {
    return { type: "investering", key: extractRelationKey(note) || "Investering" };
  }
  if (/(opsparing|sparekonto|nedsparing)/.test(text)) {
    return { type: "opsparing", key: extractRelationKey(note) || "Opsparing" };
  }
  if (/(lagt ud|udlaeg|udlæg|refusion|refunder|tilbagebetalt|tilbagebetaling|skylder|mobilepay)/.test(text)) {
    return { type: "udlæg", key: extractRelationKey(note) || merchantName(description) };
  }
  if (/(intern|overforsel|overførsel|egen konto|mellem konto|faelleskonto|fælleskonto|budgetkonto)/.test(text)) {
    return { type: "intern", key: extractRelationKey(note) || "Kontooverførsel" };
  }
  if (/(faelles|fælles|deles|split|halv|halvdelen)/.test(text)) {
    return { type: "fælles", key: extractRelationKey(note) || merchantName(description) };
  }
  return { type: "andet", key: extractRelationKey(note) || String(note).trim().slice(0, 42) };
}

function extractRelationKey(note) {
  const text = String(note || "").trim();
  const match = text.match(/(?:for|fra|til|med|vedr\.?|ang\.?|relation:)\s+([^,.\n;]+)/i);
  const key = (match?.[1] || text).replace(/\b(refusion|refunderes|tilbagebetalt|mobilepay|lagt ud|udlæg|intern overførsel|opsparing|investering)\b/gi, "").trim();
  return key.slice(0, 58);
}

function applyRelationsFromNotes() {
  let changed = 0;
  for (const tx of getPeriodTransactions()) {
    if (!tx.note || (tx.relationType && tx.relationKey)) continue;
    const inferred = inferRelationFromNote(tx.note, tx.description);
    if (!inferred.type && !inferred.key) continue;
    const relationCategoryId = categoryForRelationType(inferred.type);
    tx.relationType = tx.relationType || inferred.type;
    tx.relationKey = tx.relationKey || inferred.key;
    tx.categoryId = relationCategoryId || tx.categoryId;
    tx.updatedAt = new Date().toISOString();
    changed += 1;
  }
  return changed;
}

function getBankSyncState() {
  state.bankSync ||= { accounts: [], accountMappings: {}, lastSyncAt: "", config: null, autoSyncOnOpen: false, enableBanking: {} };
  state.bankSync.accounts ||= [];
  state.bankSync.accountMappings ||= {};
  state.bankSync.enableBanking ||= { accounts: [], config: null, diagnostics: null, lastSyncAt: "", lastImportCount: 0 };
  state.bankSync.enableBanking.accounts ||= [];
  return state.bankSync;
}

async function apiFetch(path, options = {}) {
  const response = await fetch(path, {
    method: options.method || "GET",
    headers: { "Content-Type": "application/json", ...(options.headers || {}) },
    body: options.body ? JSON.stringify(options.body) : undefined,
  });
  const text = await response.text();
  const data = text ? JSON.parse(text) : null;
  if (!response.ok) throw new Error(data?.message || data?.detail || data?.error || `API-fejl ${response.status}`);
  return data;
}

async function hydrateRuntimeStatus() {
  try {
    runtimeStatus = { ...runtimeStatus, ...(await apiFetch("/api/health")), ok: true };
    render();
  } catch (error) {
    runtimeStatus = { ...runtimeStatus, ok: false };
    console.warn("Kunne ikke hente runtime-status", error);
  }
}

function dataLocationLabel() {
  if (runtimeStatus.dataBackend === "supabase") return "Data synkroniseres via server og Supabase.";
  if (serverStateHydrated) return "Data gemmes lokalt og spejles til Node-serveren.";
  return "Data ligger lokalt i denne browser.";
}

async function hydrateEnableBankingFromServer(silent = true) {
  if (enableBankingHydrated && silent) return;
  enableBankingHydrated = true;
  try {
    const before = stateFingerprint(state);
    const config = await apiFetch("/api/enablebanking/config");
    const bankSync = getBankSyncState();
    const eb = bankSync.enableBanking;
    eb.config = config;
    eb.accounts = config.accounts || eb.accounts || [];
    if (config.hasSession) {
      const data = await apiFetch("/api/enablebanking/accounts");
      eb.accounts = data.accounts || eb.accounts || [];
      for (const account of eb.accounts) {
        bankSync.accountMappings[account.id] ||= findAccountByName(account.name)?.id || `new:${account.name}`;
      }
    }
    if (stateFingerprint(state) !== before) saveStateQuietly();
    maybeAutoSyncLatest();
    if (ui.view === "bank-sync") render();
    if (!silent) notify(eb.accounts?.length ? `${eb.accounts.length} Enable Banking-konti er synlige nu.` : "Enable Banking-status er opdateret.");
  } catch (error) {
    console.warn("Kunne ikke hente Enable Banking-status", error);
    if (!silent) notify(`Kunne ikke hente Enable Banking-status: ${error.message}`, "danger");
  }
}

async function refreshEnableBankingStatus() {
  try {
    const config = await apiFetch("/api/enablebanking/config");
    const eb = getBankSyncState().enableBanking;
    eb.config = config;
    eb.accounts = config.accounts || eb.accounts || [];
    saveState();
    notify(config.configured ? "Enable Banking backend er klar." : "Enable Banking mangler nøgle/certifikat eller Application ID.", config.configured ? "info" : "danger");
  } catch (error) {
    notify(`Enable Banking kræver Node-serveren. Start med ./scripts/start.sh. (${error.message})`, "danger");
  }
}

async function runEnableBankingDiagnostics() {
  try {
    const diagnostics = await apiFetch("/api/enablebanking/diagnostics");
    const eb = getBankSyncState().enableBanking;
    eb.diagnostics = diagnostics;
    eb.config = { ...(eb.config || {}), ...diagnostics };
    eb.accounts = diagnostics.accounts || eb.accounts || [];
    saveState();
    notify(diagnostics.jwt?.ok && diagnostics.api?.ok ? "Enable Banking-diagnose er OK." : "Diagnose kørt — der er noget du skal tjekke.", diagnostics.jwt?.ok && diagnostics.api?.ok ? "info" : "danger");
  } catch (error) {
    notify(`Kunne ikke køre Enable Banking-diagnose: ${error.message}`, "danger");
  }
}

async function generateEnableBankingKeys() {
  try {
    const data = await apiFetch("/api/enablebanking/generate-keys", { method: "POST" });
    const eb = getBankSyncState().enableBanking;
    eb.generatedCertificate = data.certificatePem;
    eb.privateKeyPath = data.privateKeyPath;
    eb.certificatePath = data.certificatePath;
    eb.config = { ...(eb.config || {}), privateKeyExists: true, certificateExists: true, keyPath: data.privateKeyPath, certificatePath: data.certificatePath };
    saveState();
    notify("Enable Banking-certifikat er genereret. Upload certifikatet i Enable Banking og indsæt Application ID.");
  } catch (error) {
    notify(`Kunne ikke generere Enable Banking-certifikat: ${error.message}`, "danger");
  }
}

async function startEnableBankingConsent() {
  try {
    const eb = getBankSyncState().enableBanking;
    const redirectUrl = eb.config?.redirectUrl || `${window.location.origin}${window.location.pathname}`;
    const auth = await apiFetch("/api/enablebanking/auth", {
      method: "POST",
      body: {
        redirectUrl,
        aspspName: eb.config?.aspspName || "Sparekassen Kronjylland",
        country: eb.config?.country || "DK",
        language: eb.config?.language || "da",
        psuType: "personal",
        validDays: 90,
      },
    });
    eb.lastAuthorizationId = auth.authorization_id || "";
    eb.lastConsentLink = auth.url;
    eb.lastState = auth.state;
    saveState();
    window.location.href = auth.url;
  } catch (error) {
    notify(`Kunne ikke starte Enable Banking-samtykke: ${error.message}`, "danger");
  }
}

async function completeEnableBankingSession(code, error) {
  if (error) {
    notify(`Enable Banking-samtykke blev ikke fuldført: ${error}`, "danger");
    return;
  }
  if (!code) {
    notify("Enable Banking returnerede ingen kode. Prøv samtykke-flowet igen.", "danger");
    return;
  }
  try {
    notify("Enable Banking-samtykke modtaget. Jeg opretter session og henter konti nu.");
    const data = await apiFetch("/api/enablebanking/session", { method: "POST", body: { code } });
    const eb = getBankSyncState().enableBanking;
    eb.sessionId = data.sessionId;
    eb.accounts = data.accounts || [];
    eb.authorizedAt = data.authorizedAt;
    eb.config = { ...(eb.config || {}), hasSession: true, sessionId: data.sessionId, authorizedAt: data.authorizedAt };
    for (const account of eb.accounts) {
      getBankSyncState().accountMappings[account.id] ||= findAccountByName(account.name)?.id || `new:${account.name}`;
    }
    saveState();
    await refreshEnableBankingAccounts();
  } catch (err) {
    notify(`Kunne ikke oprette Enable Banking-session: ${err.message}`, "danger");
  }
}

async function refreshEnableBankingAccounts() {
  try {
    const data = await apiFetch("/api/enablebanking/accounts");
    const bankSync = getBankSyncState();
    const eb = bankSync.enableBanking;
    eb.accounts = data.accounts || [];
    for (const account of eb.accounts) {
      bankSync.accountMappings[account.id] ||= findAccountByName(account.name)?.id || `new:${account.name}`;
    }
    saveState();
    notify(`${eb.accounts.length} ${eb.accounts.length === 1 ? "Enable Banking-konto" : "Enable Banking-konti"} hentet.`);
  } catch (error) {
    notify(`Kunne ikke hente Enable Banking-konti: ${error.message}`, "danger");
  }
}

async function maybeAutoSyncLatest() {
  if (autoSyncStarted) return;
  const eb = getBankSyncState().enableBanking;
  if (!eb.config?.hasSession && !eb.config?.sessionId) return;
  const last = eb.lastSyncAt ? new Date(eb.lastSyncAt).getTime() : 0;
  const stale = !last || Date.now() - last > 30 * 60 * 1000;
  if (!stale) return;
  autoSyncStarted = true;
  const keepView = ui.view;
  const keepMonth = ui.month;
  await syncEnableBankingTransactions(true, {
    dateFrom: uiMonthStart(shiftMonth(currentMonthKey(), -1)),
    dateTo: todayISO(),
    view: keepView,
    month: keepMonth,
  });
}

async function syncLatestBankData() {
  notify("Henter nyeste bankdata…");
  await syncEnableBankingTransactions(false, {
    dateFrom: "2025-11-01",
    dateTo: todayISO(),
    view: "overblik",
    month: currentMonthKey(),
  });
}

async function syncEnableBankingTransactions(silent = false, options = {}) {
  try {
    const dateFrom = options.dateFrom || ui.syncDateFrom || uiMonthStart(ui.month);
    const dateTo = options.dateTo || ui.syncDateTo || todayISO();
    const data = await apiFetch(`/api/enablebanking/sync?date_from=${encodeURIComponent(dateFrom)}&date_to=${encodeURIComponent(dateTo)}`);
    const result = importEnableBankingTransactions(data);
    const dedupe = removeOverlapDuplicates();
    const eb = getBankSyncState().enableBanking;
    eb.accounts = data.accounts || eb.accounts;
    eb.lastSyncAt = data.syncedAt || new Date().toISOString();
    eb.lastImportCount = result.imported;
    eb.lastDateFrom = dateFrom;
    eb.lastDateTo = dateTo;
    ui.month = options.month || toMonthKey(dateTo);
    saveState();
    ui.view = options.view || "oprydning";
    if (!silent || result.imported || dedupe.removed) notify(`${result.imported} nye postering${result.imported === 1 ? "" : "er"} hentet. ${result.skipped} dublet${result.skipped === 1 ? "" : "ter"} sprunget over. ${dedupe.removed} overlap fjernet automatisk${data.errors?.length ? `, ${data.errors.length} konto-fejl` : ""}.`);
    else if (!silent) render();
  } catch (error) {
    if (!silent) notify(`Enable Banking-sync fejlede: ${error.message}`, "danger");
  }
}

function importEnableBankingTransactions(sync) {
  const existing = new Set(state.transactions.map(transactionFingerprint));
  let imported = 0;
  let skipped = 0;
  for (const remote of sync.transactions || []) {
    const accountId = ensureLocalAccountForEnableBanking(remote, sync.accounts || []);
    const openBanking = remote.openBanking || {};
    const suggestion = suggestCategoryForBankTransaction({ ...remote, accountId });
    const tx = {
      id: `tx_${remote.id || uid("eb")}`,
      accountId,
      date: remote.date,
      description: remote.description,
      amount: Number(remote.amount || 0),
      categoryId: suggestion.categoryId || fallbackCategoryId(),
      categoryConfidence: suggestion.confidence || 0,
      categorySource: suggestion.source || "",
      categoryReason: suggestion.reason || "",
      needsReview: !suggestion.categoryId || suggestion.confidence < 78,
      note: remote.status && !["BOOK", "booked"].includes(String(remote.status)) ? String(remote.status) : "",
      relationType: remote.relationType || suggestion.relationType || "",
      relationKey: remote.relationKey || remote.counterpartyName || openBanking.counterpartyName || "",
      linkedTransactionId: "",
      matchGroupId: "",
      source: "enablebanking",
      externalId: remote.externalId,
      externalAccountId: remote.externalAccountId,
      merchantCategoryCode: remote.merchantCategoryCode || openBanking.merchantCategoryCode || "",
      bankTransactionCode: remote.bankTransactionCode || openBanking.bankTransactionCode || "",
      counterpartyName: remote.counterpartyName || openBanking.counterpartyName || "",
      counterpartyAccount: remote.counterpartyAccount || openBanking.counterpartyAccount || "",
      openBanking,
      importedAt: sync.syncedAt || new Date().toISOString(),
    };
    const periodInfo = getEconomicPeriodInfo(tx, { ignoreLock: true });
    tx.periodMonth = periodInfo.periodMonth;
    tx.periodDate = periodInfo.periodDate;
    tx.periodRule = periodInfo.rule;
    tx.periodConfidence = periodInfo.confidence;
    tx.periodReason = periodInfo.reason;
    const fingerprint = transactionFingerprint(tx);
    const duplicate = findLikelyDuplicateTransaction(tx);
    if (existing.has(fingerprint) || duplicate) {
      if (duplicate) {
        backfillOpenBankingMetadata(duplicate, remote);
        duplicate.externalId ||= remote.externalId;
        duplicate.externalAccountId ||= remote.externalAccountId;
        duplicate.source = duplicate.source === "csv" ? "csv+enablebanking" : duplicate.source;
        duplicate.updatedAt = new Date().toISOString();
      }
      skipped += 1;
      continue;
    }
    existing.add(fingerprint);
    state.transactions.unshift(tx);
    imported += 1;
  }
  if (sync.dateTo) ui.month = toMonthKey(sync.dateTo);
  return { imported, skipped };
}

function backfillOpenBankingMetadata(transaction, remote) {
  const openBanking = remote.openBanking || {};
  transaction.merchantCategoryCode ||= remote.merchantCategoryCode || openBanking.merchantCategoryCode || "";
  transaction.bankTransactionCode ||= remote.bankTransactionCode || openBanking.bankTransactionCode || "";
  transaction.counterpartyName ||= remote.counterpartyName || openBanking.counterpartyName || "";
  transaction.counterpartyAccount ||= remote.counterpartyAccount || openBanking.counterpartyAccount || "";
  transaction.openBanking = { ...(transaction.openBanking || {}), ...openBanking };
  const suggestion = suggestCategoryForBankTransaction({ ...remote, accountId: transaction.accountId });
  if ((!transaction.categoryId || transaction.categoryId === fallbackCategoryId() || transaction.needsReview) && suggestion.categoryId) {
    transaction.categoryId = suggestion.categoryId;
    transaction.categoryConfidence = suggestion.confidence || 0;
    transaction.categorySource = suggestion.source || "";
    transaction.categoryReason = suggestion.reason || "";
    transaction.needsReview = suggestion.confidence < 78;
    if (suggestion.relationType && !transaction.relationType) transaction.relationType = suggestion.relationType;
  }
  if (!transaction.relationKey && (remote.relationKey || transaction.counterpartyName)) transaction.relationKey = remote.relationKey || transaction.counterpartyName;
}

function ensureLocalAccountForEnableBanking(remote, accounts) {
  const bankSync = getBankSyncState();
  const remoteAccount = accounts.find((account) => account.id === remote.externalAccountId) || { id: remote.externalAccountId, name: remote.accountName };
  const mapped = bankSync.accountMappings?.[remoteAccount.id];
  if (mapped && !mapped.startsWith("new:")) return mapped;
  const name = mapped?.startsWith("new:") ? mapped.slice(4) : remoteAccount.name || remote.accountName || "Enable Banking konto";
  const existing = findAccountByName(name);
  if (existing) {
    bankSync.accountMappings[remoteAccount.id] = existing.id;
    return existing.id;
  }
  const balance = Number(remoteAccount.balances?.[0]?.balance_amount?.amount || remoteAccount.balances?.[0]?.balanceAmount?.amount || 0);
  const account = { id: `eb_acc_${simpleHash(remoteAccount.id || name)}`, name, type: inferAccountType(name), balance, enableBankingAccountId: remoteAccount.id };
  state.accounts.push(account);
  bankSync.accountMappings[remoteAccount.id] = account.id;
  return account.id;
}

async function loadLocalCsvFolder() {
  try {
    const data = await apiFetch("/api/local-csv/files");
    if (!data.files?.length) {
      notify(`Ingen CSV-filer fundet i ${data.directory || "lokal mappe"}.`, "danger");
      return;
    }
    await buildImportDraftFromNamedTexts(data.files);
    notify(`${data.files.length} CSV-fil${data.files.length === 1 ? "" : "er"} indlæst fra ${data.directory}. Kontrollér mapping og klik Importér.`);
    ui.view = "import";
    render();
  } catch (error) {
    notify(`Kunne ikke indlæse lokal CSV-mappe: ${error.message}`, "danger");
  }
}

async function refreshGoCardlessStatus() {
  try {
    const config = await apiFetch("/api/gocardless/config");
    const bankSync = getBankSyncState();
    bankSync.config = config;
    saveState();
    notify(config.configured ? "GoCardless backend er klar." : "Backend kører, men GoCardless API keys mangler i .env.", config.configured ? "info" : "danger");
  } catch (error) {
    notify(`Bank-sync kræver Node-serveren. Start med ./scripts/start.sh. (${error.message})`, "danger");
  }
}

async function runGoCardlessDiagnostics() {
  try {
    const diagnostics = await apiFetch("/api/gocardless/diagnostics");
    const bankSync = getBankSyncState();
    bankSync.diagnostics = diagnostics;
    bankSync.config = { ...(bankSync.config || {}), configured: diagnostics.configured, institutionId: diagnostics.institutionId, country: diagnostics.country };
    saveState();
    notify(diagnostics.token?.ok && diagnostics.institution?.ok ? "GoCardless-diagnose er OK." : "Diagnose kørt — der er noget du skal tjekke.", diagnostics.token?.ok && diagnostics.institution?.ok ? "info" : "danger");
  } catch (error) {
    notify(`Kunne ikke køre diagnose: ${error.message}`, "danger");
  }
}

async function startGoCardlessConsent() {
  try {
    const redirect = `${window.location.origin}${window.location.pathname}`;
    const requisition = await apiFetch("/api/gocardless/requisitions", { method: "POST", body: { redirect } });
    const bankSync = getBankSyncState();
    bankSync.lastRequisitionId = requisition.id;
    bankSync.lastConsentLink = requisition.link;
    saveState();
    window.location.href = requisition.link;
  } catch (error) {
    notify(`Kunne ikke starte GoCardless-samtykke: ${error.message}`, "danger");
  }
}

async function refreshGoCardlessAccounts() {
  try {
    const data = await apiFetch("/api/gocardless/accounts");
    const bankSync = getBankSyncState();
    bankSync.accounts = data.accounts || [];
    for (const account of bankSync.accounts) {
      bankSync.accountMappings[account.id] ||= findAccountByName(account.name)?.id || `new:${account.name}`;
    }
    saveState();
    notify(`${bankSync.accounts.length} ${bankSync.accounts.length === 1 ? "GoCardless-konto" : "GoCardless-konti"} hentet.`);
  } catch (error) {
    notify(`Kunne ikke hente GoCardless-konti: ${error.message}`, "danger");
  }
}

async function syncGoCardlessTransactions(silent = false) {
  try {
    const dateFrom = ui.syncDateFrom || uiMonthStart(ui.month);
    const dateTo = ui.syncDateTo || todayISO();
    const data = await apiFetch(`/api/gocardless/sync?date_from=${encodeURIComponent(dateFrom)}&date_to=${encodeURIComponent(dateTo)}`);
    const result = importGoCardlessTransactions(data);
    const bankSync = getBankSyncState();
    bankSync.accounts = data.accounts || bankSync.accounts;
    bankSync.lastSyncAt = data.syncedAt || new Date().toISOString();
    bankSync.lastImportCount = result.imported;
    bankSync.lastDateFrom = dateFrom;
    bankSync.lastDateTo = dateTo;
    saveState();
    ui.view = "oprydning";
    if (!silent || result.imported) notify(`${result.imported} nye bankpostering${result.imported === 1 ? "" : "er"} importeret. ${result.skipped} dublet${result.skipped === 1 ? "" : "ter"} sprunget over${data.errors?.length ? `, ${data.errors.length} konto-fejl` : ""}.`);
  } catch (error) {
    if (!silent) notify(`Bank-sync fejlede: ${error.message}`, "danger");
  }
}

function importGoCardlessTransactions(sync) {
  const existing = new Set(state.transactions.map(transactionFingerprint));
  let imported = 0;
  let skipped = 0;
  for (const remote of sync.transactions || []) {
    const accountId = ensureLocalAccountForGoCardless(remote, sync.accounts || []);
    const tx = {
      id: `tx_${remote.id || uid("gc")}`,
      accountId,
      date: remote.date,
      description: remote.description,
      amount: Number(remote.amount || 0),
      categoryId: matchCategoryByRules(remote.description) || fallbackCategoryId(),
      note: remote.status === "pending" ? "Afventer bogføring" : "",
      relationType: "",
      relationKey: "",
      linkedTransactionId: "",
      matchGroupId: "",
      source: "gocardless",
      externalId: remote.externalId,
      externalAccountId: remote.externalAccountId,
      importedAt: sync.syncedAt || new Date().toISOString(),
    };
    const fingerprint = transactionFingerprint(tx);
    const duplicate = findLikelyDuplicateTransaction(tx);
    if (existing.has(fingerprint) || duplicate) {
      if (duplicate) {
        duplicate.externalId ||= remote.externalId;
        duplicate.externalAccountId ||= remote.externalAccountId;
        duplicate.source = duplicate.source === "csv" ? "csv+gocardless" : duplicate.source;
        duplicate.updatedAt = new Date().toISOString();
      }
      skipped += 1;
      continue;
    }
    existing.add(fingerprint);
    state.transactions.unshift(tx);
    imported += 1;
  }
  if (sync.dateFrom) ui.month = toMonthKey(sync.dateFrom);
  return { imported, skipped };
}

function findOverlapDuplicates() {
  const groups = buildOverlapGroups(state.transactions || []);
  const removable = new Set();
  for (const group of groups) {
    const sorted = group.slice().sort((a, b) => overlapKeepScore(b) - overlapKeepScore(a));
    for (const tx of sorted.slice(1)) removable.add(tx.id);
  }
  return { groups, removableCount: removable.size };
}

function removeOverlapDuplicates() {
  const groups = buildOverlapGroups(state.transactions || []);
  const removeIds = new Set();
  for (const group of groups) {
    const sorted = group.slice().sort((a, b) => overlapKeepScore(b) - overlapKeepScore(a));
    const keep = sorted[0];
    for (const duplicate of sorted.slice(1)) {
      removeIds.add(duplicate.id);
      keep.externalId ||= duplicate.externalId;
      keep.externalAccountId ||= duplicate.externalAccountId;
      if (String(keep.source || "").includes("enablebanking") && String(duplicate.source || "").includes("csv")) keep.source = "enablebanking";
      keep.updatedAt = new Date().toISOString();
    }
  }
  state.transactions = state.transactions.filter((tx) => !removeIds.has(tx.id));
  return { removed: removeIds.size, groups: groups.length };
}

function buildOverlapGroups(transactions) {
  const buckets = new Map();
  for (const tx of transactions) {
    for (const date of [tx.date, shiftIsoDate(tx.date, -1), shiftIsoDate(tx.date, 1)].filter(Boolean)) {
      const key = [tx.accountId, date, Number(tx.amount || 0).toFixed(2)].join("|");
      if (!buckets.has(key)) buckets.set(key, []);
      buckets.get(key).push(tx);
    }
  }
  const byId = new Map(transactions.map((tx) => [tx.id, tx]));
  const graph = new Map();
  const seenPairs = new Set();
  for (const bucket of buckets.values()) {
    const unique = Array.from(new Map(bucket.map((tx) => [tx.id, tx])).values());
    for (let i = 0; i < unique.length; i += 1) {
      for (let j = i + 1; j < unique.length; j += 1) {
        const a = unique[i];
        const b = unique[j];
        const pair = [a.id, b.id].sort().join("|");
        if (seenPairs.has(pair)) continue;
        seenPairs.add(pair);
        if (!isOverlapDuplicate(a, b)) continue;
        if (!graph.has(a.id)) graph.set(a.id, new Set());
        if (!graph.has(b.id)) graph.set(b.id, new Set());
        graph.get(a.id).add(b.id);
        graph.get(b.id).add(a.id);
      }
    }
  }
  const visited = new Set();
  const groups = [];
  for (const id of graph.keys()) {
    if (visited.has(id)) continue;
    const stack = [id];
    const ids = [];
    visited.add(id);
    while (stack.length) {
      const current = stack.pop();
      ids.push(current);
      for (const next of graph.get(current) || []) {
        if (visited.has(next)) continue;
        visited.add(next);
        stack.push(next);
      }
    }
    if (ids.length > 1) groups.push(ids.map((item) => byId.get(item)).filter(Boolean));
  }
  return groups;
}

function isOverlapDuplicate(a, b) {
  if (!a || !b || a.id === b.id) return false;
  if (a.accountId !== b.accountId) return false;
  if (Math.abs(Number(a.amount || 0) - Number(b.amount || 0)) > 0.01) return false;
  if (Math.abs(daysBetween(a.date, b.date)) > 1) return false;
  if (a.externalId && b.externalId && a.externalId === b.externalId) return true;
  const leftSource = String(a.source || "");
  const rightSource = String(b.source || "");
  const crossBankCsv = (leftSource.includes("enablebanking") && rightSource.includes("csv")) || (rightSource.includes("enablebanking") && leftSource.includes("csv")) || (leftSource.includes("gocardless") && rightSource.includes("csv")) || (rightSource.includes("gocardless") && leftSource.includes("csv"));
  const sameDate = a.date === b.date;
  const similarity = textSimilarity(a.description, b.description);
  if (crossBankCsv && sameDate) return true;
  if (crossBankCsv && similarity >= 0.12) return true;
  if (normalize(a.description) === normalize(b.description)) return true;
  return similarity >= 0.55;
}

function overlapKeepScore(tx) {
  const source = String(tx.source || "");
  let score = 0;
  if (source.includes("enablebanking")) score += 100;
  else if (source.includes("gocardless")) score += 90;
  else if (source.includes("csv+")) score += 80;
  else if (source.includes("csv")) score += 50;
  if (tx.externalId) score += 8;
  if (tx.externalAccountId) score += 4;
  if (tx.categoryId && tx.categoryId !== fallbackCategoryId()) score += 3;
  score += Math.min(20, String(tx.description || "").length / 8);
  return score;
}

function shiftIsoDate(date, days) {
  if (!date) return "";
  const parsed = new Date(`${date}T00:00:00`);
  if (Number.isNaN(parsed.getTime())) return "";
  parsed.setDate(parsed.getDate() + days);
  return parsed.toISOString().slice(0, 10);
}

function findLikelyDuplicateTransaction(tx) {
  return state.transactions.find((existing) => {
    if (existing.accountId !== tx.accountId) return false;
    if (Math.abs(Number(existing.amount || 0) - Number(tx.amount || 0)) > 0.01) return false;
    if (Math.abs(daysBetween(existing.date, tx.date)) > 1) return false;
    if (existing.externalId && tx.externalId && existing.externalId === tx.externalId) return true;
    const similarity = textSimilarity(existing.description, tx.description);
    return similarity >= 0.34 || merchantName(existing.description) === merchantName(tx.description);
  });
}

function textSimilarity(a, b) {
  const left = new Set(normalize(a).split(/\W+/).filter((word) => word.length >= 3));
  const right = new Set(normalize(b).split(/\W+/).filter((word) => word.length >= 3));
  if (!left.size || !right.size) return 0;
  const intersection = Array.from(left).filter((word) => right.has(word)).length;
  return intersection / Math.max(left.size, right.size);
}

function ensureLocalAccountForGoCardless(remote, accounts) {
  const bankSync = getBankSyncState();
  const remoteAccount = accounts.find((account) => account.id === remote.externalAccountId) || { id: remote.externalAccountId, name: remote.accountName };
  const mapped = bankSync.accountMappings?.[remoteAccount.id];
  if (mapped && !mapped.startsWith("new:")) return mapped;
  const name = mapped?.startsWith("new:") ? mapped.slice(4) : remoteAccount.name || remote.accountName || "GoCardless konto";
  const existing = findAccountByName(name);
  if (existing) {
    bankSync.accountMappings[remoteAccount.id] = existing.id;
    return existing.id;
  }
  const account = { id: `gc_acc_${simpleHash(remoteAccount.id || name)}`, name, type: inferAccountType(name), balance: Number(remoteAccount.balances?.[0]?.balanceAmount?.amount || 0), gcAccountId: remoteAccount.id };
  state.accounts.push(account);
  bankSync.accountMappings[remoteAccount.id] = account.id;
  return account.id;
}

function simpleHash(value) {
  let hash = 0;
  const text = String(value || "");
  for (let index = 0; index < text.length; index += 1) hash = Math.imul(31, hash) + text.charCodeAt(index) | 0;
  return Math.abs(hash).toString(36);
}

function readFileAsText(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = () => reject(reader.error || new Error("Filen kunne ikke læses"));
    reader.readAsText(file, "utf-8");
  });
}

async function readCsvFiles(files) {
  try {
    const namedTexts = [];
    for (const file of files) namedTexts.push({ fileName: file.name, content: await readFileAsText(file) });
    await buildImportDraftFromNamedTexts(namedTexts);
  } catch (error) {
    console.error(error);
    notify("CSV-filerne kunne ikke læses. Prøv at eksportere som almindelig CSV.", "danger");
  }
}

async function buildImportDraftFromNamedTexts(files) {
  const drafts = [];
  for (const file of files) {
    const parsed = parseCsv(file.content || "");
    if (!parsed.rows.length) continue;
    const accountName = inferAccountNameFromFile(file.fileName);
    const existingAccount = findAccountByName(accountName);
    drafts.push({
      fileName: file.fileName,
      accountName,
      accountChoice: existingAccount?.id || `new:${accountName}`,
      headers: parsed.headers,
      rows: parsed.rows,
      map: detectCsvMapping(parsed.headers, parsed.rows),
      headerless: parsed.headerless,
    });
  }
  if (!drafts.length) {
    notify("Ingen af CSV-filerne indeholdt posteringer.", "danger");
    return;
  }
  ui.importDraft = { files: drafts };
  const rowCount = drafts.reduce((sum, draft) => sum + draft.rows.length, 0);
  notify(`${drafts.length} fil${drafts.length === 1 ? "" : "er"} klar til import med ${rowCount} række${rowCount === 1 ? "" : "r"}.`);
}

function inferAccountNameFromFile(fileName) {
  const base = String(fileName || "")
    .replace(/\.[^.]+$/, "")
    .replace(/[_-]+/g, " ")
    .replace(/\s{2,}/g, " ")
    .trim();
  if (!base || /posteringsdetaljer|posteringer|kontoudtog|export|eksport/i.test(base)) {
    return state.accounts[0]?.name || "Sparekassen Kronjylland";
  }
  return base;
}

function findAccountByName(name) {
  const wanted = normalize(name);
  return state.accounts.find((account) => normalize(account.name) === wanted);
}

function ensureAccountForDraft(draft) {
  if (!draft.accountChoice?.startsWith("new:")) return draft.accountChoice;
  const name = draft.accountChoice.slice(4).trim() || draft.accountName || "Ny konto";
  const existing = findAccountByName(name);
  if (existing) return existing.id;
  const account = { id: uid("acc"), name, type: inferAccountType(name), balance: 0 };
  state.accounts.push(account);
  return account.id;
}

function inferAccountType(name) {
  const text = normalize(name);
  if (text.includes("budget")) return "Budgetkonto";
  if (text.includes("bolig")) return "Boligkonto";
  if (text.includes("sommerhus")) return "Sommerhus";
  if (text.includes("faelles") || text.includes("fælles")) return "Fælleskonto";
  return "Bankkonto";
}

function importDraftTransactions() {
  const files = ui.importDraft?.files || [];
  if (!files.length) return;
  const existing = new Set(state.transactions.map(transactionFingerprint));
  const imported = [];
  const accountNames = new Set();
  let skipped = 0;
  let invalid = 0;
  let skippedByMonth = 0;
  let skippedFiles = 0;

  for (const draft of files) {
    const { date, description, amount, counterparty } = draft.map;
    if (!date || !description || !amount || !draft.accountChoice) {
      skippedFiles += 1;
      continue;
    }
    const accountId = ensureAccountForDraft(draft);
    const account = accountById(accountId);
    if (account) accountNames.add(account.name);

    for (const row of draft.rows) {
      const parsedDate = parseDate(row[date]);
      const parsedAmount = parseAmount(row[amount]);
      const descriptionParts = [row[description], counterparty ? row[counterparty] : ""].filter(Boolean).map((item) => String(item).trim());
      const parsedDescription = descriptionParts.join(" · ") || "Importeret post";

      if (!parsedDate || !Number.isFinite(parsedAmount)) {
        invalid += 1;
        continue;
      }

      if (ui.importOnlyMonth && toMonthKey(parsedDate) !== ui.importMonth) {
        skippedByMonth += 1;
        continue;
      }

      const tx = {
        id: uid("tx"),
        accountId,
        date: parsedDate,
        description: parsedDescription,
        amount: parsedAmount,
        categoryId: matchCategoryByRules(parsedDescription) || fallbackCategoryId(),
        note: "",
        relationType: "",
        relationKey: "",
        linkedTransactionId: "",
        matchGroupId: "",
        source: "csv",
        importedAt: new Date().toISOString(),
        fileName: draft.fileName,
      };

      const fingerprint = transactionFingerprint(tx);
      if (existing.has(fingerprint)) {
        skipped += 1;
        continue;
      }
      existing.add(fingerprint);
      imported.push(tx);
    }
  }

  state.transactions = [...imported, ...state.transactions];
  ui.importDraft = null;
  ui.importAccountId = state.accounts[0]?.id || "";
  if (ui.importOnlyMonth) ui.month = ui.importMonth;
  else if (imported[0]) ui.month = toMonthKey(imported[0].date);
  saveState();
  ui.view = "oprydning";
  notify(`${imported.length} postering${imported.length === 1 ? "" : "er"} importeret fra ${accountNames.size} ${accountNames.size === 1 ? "konto" : "konti"}. ${skipped} dublet${skipped === 1 ? "" : "ter"} sprunget over${skippedByMonth ? `, ${skippedByMonth} uden for valgt måned` : ""}${invalid ? `, ${invalid} ugyldige rækker` : ""}${skippedFiles ? `, ${skippedFiles} fil${skippedFiles === 1 ? "" : "er"} uden genkendelige posteringer` : ""}.`);
}

function parseCsv(text) {
  const cleaned = text.replace(/^\uFEFF/, "");
  const delimiter = detectDelimiter(cleaned);
  const rows = [];
  let row = [];
  let cell = "";
  let inQuotes = false;

  for (let index = 0; index < cleaned.length; index += 1) {
    const char = cleaned[index];
    const next = cleaned[index + 1];

    if (char === '"') {
      if (inQuotes && next === '"') {
        cell += '"';
        index += 1;
      } else {
        inQuotes = !inQuotes;
      }
      continue;
    }

    if (char === delimiter && !inQuotes) {
      row.push(cell.trim());
      cell = "";
      continue;
    }

    if ((char === "\n" || char === "\r") && !inQuotes) {
      if (char === "\r" && next === "\n") index += 1;
      row.push(cell.trim());
      if (row.some((value) => value !== "")) rows.push(row);
      row = [];
      cell = "";
      continue;
    }

    cell += char;
  }

  row.push(cell.trim());
  if (row.some((value) => value !== "")) rows.push(row);

  if (!rows.length) return { headers: [], rows: [], headerless: false };
  const maxColumns = Math.max(...rows.map((values) => values.length));
  const hasHeader = looksLikeHeaderRow(rows[0]);
  const headers = makeUniqueHeaders(hasHeader ? rows[0] : [], maxColumns);
  const dataRows = hasHeader ? rows.slice(1) : rows;
  const objects = dataRows.map((values) => {
    const object = {};
    headers.forEach((header, index) => {
      object[header] = values[index] || "";
    });
    return object;
  });
  return { headers, rows: objects, headerless: !hasHeader };
}

function makeUniqueHeaders(values, count) {
  const seen = new Map();
  return Array.from({ length: count }, (_, index) => {
    const base = String(values[index] || "").trim() || `Kolonne ${index + 1}`;
    const current = seen.get(base) || 0;
    seen.set(base, current + 1);
    return current ? `${base} (${current + 1})` : base;
  });
}

function looksLikeAmountValue(value) {
  const number = parseAmount(value);
  if (!Number.isFinite(number)) return false;
  const text = String(value || "").trim();
  return /\d/.test(text) && /[,.]/.test(text) && Math.abs(number) > 0;
}

function looksLikeHeaderRow(values) {
  const joined = normalize(values.join(" "));
  const knownHeaderWords = ["dato", "tekst", "beskrivelse", "postering", "belob", "beløb", "amount", "modpart", "saldo"];
  if (knownHeaderWords.some((word) => joined.includes(word))) return true;
  const dataLikeCells = values.filter((value) => parseDate(value) || looksLikeAmountValue(value)).length;
  const textCells = values.filter((value) => /[a-zæøå]/i.test(String(value || ""))).length;
  return dataLikeCells <= 1 && textCells >= 2;
}

function detectDelimiter(text) {
  const firstLines = text.split(/\r?\n/).slice(0, 5).join("\n");
  const candidates = [";", "\t", ","];
  return candidates
    .map((delimiter) => ({ delimiter, count: (firstLines.match(new RegExp(delimiter === "\t" ? "\\t" : escapeRegExp(delimiter), "g")) || []).length }))
    .sort((a, b) => b.count - a.count)[0].delimiter;
}

function detectCsvMapping(headers, rows = []) {
  const find = (patterns) => headers.find((header) => patterns.some((pattern) => normalize(header).includes(pattern))) || "";
  const mapping = {
    date: find(["dato", "bogforing", "bogføring", "valør", "valor", "date"]),
    description: find(["tekst", "beskrivelse", "postering", "meddelelse", "details", "description"]),
    amount: find(["belob", "beløb", "amount", "dkk", "kr"]),
    counterparty: find(["modpart", "afsender", "modtager", "navn", "counterparty"]),
  };

  if (mapping.date && mapping.description && mapping.amount) return mapping;

  const stats = headers.map((header, index) => {
    const values = rows.map((row) => String(row[header] || "").trim()).filter(Boolean);
    const dateCount = values.filter(parseDate).length;
    const amountCount = values.filter(looksLikeAmountValue).length;
    const letterCount = values.reduce((sum, value) => sum + (value.match(/[a-zæøå]/gi) || []).length, 0);
    const avgLength = values.length ? values.reduce((sum, value) => sum + value.length, 0) / values.length : 0;
    return { header, index, values, dateCount, amountCount, letterCount, avgLength, nonEmpty: values.length, unique: new Set(values).size };
  });

  mapping.amount ||= stats
    .filter((stat) => stat.amountCount > 0)
    .sort((a, b) => b.amountCount - a.amountCount || a.index - b.index)[0]?.header || "";
  mapping.date ||= stats
    .filter((stat) => stat.dateCount > 0)
    .sort((a, b) => b.dateCount - a.dateCount || a.index - b.index)[0]?.header || "";
  mapping.description ||= stats
    .filter((stat) => stat.header !== mapping.amount && stat.header !== mapping.date && stat.letterCount > 0)
    .sort((a, b) => (b.nonEmpty + b.unique + b.letterCount / 20 + b.avgLength) - (a.nonEmpty + a.unique + a.letterCount / 20 + a.avgLength))[0]?.header || "";

  return mapping;
}

function transactionFingerprint(tx) {
  return [tx.accountId, tx.date, Number(tx.amount).toFixed(2), normalize(tx.description)].join("|");
}

function exportBackup() {
  const stamp = new Date().toISOString().slice(0, 10);
  downloadFile(`finansblik-backup-${stamp}.json`, JSON.stringify(state, null, 2), "application/json");
  notify("Backup-filen er hentet.");
}

function readBackupFile(file) {
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const parsed = JSON.parse(String(reader.result || ""));
      if (!parsed || !Array.isArray(parsed.transactions) || !Array.isArray(parsed.accounts)) {
        notify("Backup-filen ligner ikke en Finansblik-backup.", "danger");
        return;
      }
      if (!confirm("Importer backup og overskriv nuværende data?")) return;
      state = {
        version: 1,
        settings: parsed.settings || { householdName: "Husstanden", selectedMonth: currentMonthKey() },
        accounts: parsed.accounts || [],
        categories: parsed.categories || [],
        rules: parsed.rules || [],
        transactions: parsed.transactions || [],
      };
      ui.month = state.settings.selectedMonth || currentMonthKey();
      ui.importAccountId = state.accounts[0]?.id || "";
      ui.editingId = null;
      ui.importDraft = null;
      saveState();
      notify("Backup-filen blev importeret.");
    } catch (error) {
      console.error(error);
      notify("Backup-filen kunne ikke læses.", "danger");
    }
  };
  reader.readAsText(file, "utf-8");
}

function downloadFile(filename, content, type) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function option(value, label, selected) {
  return `<option value="${escapeHtml(value)}"${selected ? " selected" : ""}>${escapeHtml(label)}</option>`;
}

function sourceLabel(source) {
  if (String(source || "").includes("enablebanking")) return "Bank-sync";
  if (String(source || "").includes("gocardless")) return "GoCardless";
  if (source === "csv") return "CSV";
  if (source === "manuel") return "Manuel";
  if (source === "redigeret") return "Redigeret";
  return "Ukendt";
}

function kindLabel(kind) {
  if (kind === "income") return "Indtægt";
  if (kind === "transfer") return "Intern overførsel";
  return "Udgift";
}

function isPrivacyMode() {
  return Boolean(ui?.privacyMode);
}

function privateCurrencyLabel() {
  return "•••• kr.";
}

function privateNumberLabel() {
  return "••••";
}

function formatCurrency(value) {
  if (isPrivacyMode()) return privateCurrencyLabel();
  return new Intl.NumberFormat("da-DK", {
    style: "currency",
    currency: "DKK",
    maximumFractionDigits: Math.abs(value) >= 1000 ? 0 : 2,
  }).format(Number(value || 0));
}

function formatPercent(value) {
  if (isPrivacyMode()) return "•• %";
  return new Intl.NumberFormat("da-DK", { style: "percent", maximumFractionDigits: 0 }).format(value || 0);
}

function formatDate(value) {
  const date = new Date(`${value}T00:00:00`);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat("da-DK", { day: "2-digit", month: "short" }).format(date);
}

function formatAmountInput(value) {
  if (isPrivacyMode()) return "";
  return new Intl.NumberFormat("da-DK", { minimumFractionDigits: 0, maximumFractionDigits: 2 }).format(Number(value || 0));
}

function privacyInputAttrs() {
  return isPrivacyMode() ? "disabled placeholder=\"Skjult\"" : "";
}

function parseAmount(value) {
  if (typeof value === "number") return value;
  let text = String(value || "").trim();
  if (!text) return NaN;
  text = text.replace(/\s/g, "").replace(/kr\.?|dkk/gi, "");
  const negative = text.startsWith("-") || text.endsWith("-") || /^\(.*\)$/.test(text);
  text = text.replace(/[()+-]/g, "");
  const lastComma = text.lastIndexOf(",");
  const lastDot = text.lastIndexOf(".");
  if (lastComma > lastDot) {
    text = text.replace(/\./g, "").replace(",", ".");
  } else if (lastDot > lastComma) {
    const dotParts = text.split(".");
    if (lastComma === -1 && dotParts.length > 1 && dotParts.slice(1).every((part) => part.length === 3)) {
      text = dotParts.join("");
    } else {
      text = text.replace(/,/g, "");
    }
  } else {
    text = text.replace(",", ".");
  }
  const number = Number(text);
  return negative ? -number : number;
}

function parseDate(value) {
  const text = String(value || "").trim();
  if (!text) return "";
  if (/^\d{4}-\d{2}-\d{2}$/.test(text)) return text;

  const match = text.match(/^(\d{1,2})[.\-/](\d{1,2})[.\-/](\d{2}|\d{4})$/);
  if (match) {
    const day = Number(match[1]);
    const month = Number(match[2]);
    let year = Number(match[3]);
    if (year < 100) year += 2000;
    return `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
  }

  const isoLike = text.match(/^(\d{4})(\d{2})(\d{2})$/);
  if (isoLike) return `${isoLike[1]}-${isoLike[2]}-${isoLike[3]}`;

  const date = new Date(text);
  if (!Number.isNaN(date.getTime())) return date.toISOString().slice(0, 10);
  return "";
}

function currentMonthKey() {
  return toMonthKey(todayISO());
}

function todayISO() {
  return new Date().toISOString().slice(0, 10);
}

function toMonthKey(dateString) {
  return String(dateString || todayISO()).slice(0, 7);
}

function uiMonthStart(monthKey) {
  return `${toMonthKey(monthKey)}-01`;
}

function uiMonthEnd(monthKey) {
  const [year, month] = toMonthKey(monthKey).split("-").map(Number);
  return `${year}-${String(month).padStart(2, "0")}-${String(new Date(year, month, 0).getDate()).padStart(2, "0")}`;
}

function shiftDate(isoDate, offsetDays) {
  const [year, month, day] = String(isoDate || todayISO()).split("-").map(Number);
  const date = new Date(year, (month || 1) - 1, day || 1);
  date.setDate(date.getDate() + Number(offsetDays || 0));
  return localIsoDate(date);
}

function shiftDateByYears(isoDate, offsetYears) {
  const [year, month, day] = String(isoDate || todayISO()).split("-").map(Number);
  const date = new Date(year, (month || 1) - 1, day || 1);
  date.setFullYear(date.getFullYear() + Number(offsetYears || 0));
  return localIsoDate(date);
}

function localIsoDate(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

function formatDateTime(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value || "";
  return new Intl.DateTimeFormat("da-DK", { day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit" }).format(date);
}

function shiftMonth(monthKey, offset) {
  const [year, month] = monthKey.split("-").map(Number);
  const date = new Date(year, month - 1 + offset, 1);
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
}

function dateInMonth(monthKey, day) {
  const [year, month] = monthKey.split("-").map(Number);
  const max = new Date(year, month, 0).getDate();
  return `${year}-${String(month).padStart(2, "0")}-${String(Math.min(day, max)).padStart(2, "0")}`;
}

function daysElapsedForMonth(monthKey) {
  const [year, month] = monthKey.split("-").map(Number);
  const totalDays = new Date(year, month, 0).getDate();
  if (monthKey !== currentMonthKey()) return totalDays;
  return Math.min(new Date().getDate(), totalDays);
}

function monthLabel(monthKey) {
  const [year, month] = monthKey.split("-").map(Number);
  const text = new Intl.DateTimeFormat("da-DK", { month: "long", year: "numeric" }).format(new Date(year, month - 1, 1));
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function shortMonthLabel(monthKey) {
  const [year, month] = monthKey.split("-").map(Number);
  return new Intl.DateTimeFormat("da-DK", { month: "short" }).format(new Date(year, month - 1, 1));
}

function normalize(value) {
  return String(value || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  })[char]);
}

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator) || window.location.protocol === "file:") return;
  const isLocal = ["localhost", "127.0.0.1"].includes(window.location.hostname);
  if (isLocal) {
    navigator.serviceWorker.getRegistrations?.().then((registrations) => registrations.forEach((registration) => registration.unregister())).catch(() => {});
    window.caches?.keys?.().then((keys) => Promise.all(keys.map((key) => caches.delete(key)))).catch(() => {});
    return;
  }
  navigator.serviceWorker.register("./service-worker.js").catch((error) => {
    console.info("Service worker blev ikke registreret", error);
  });
}
