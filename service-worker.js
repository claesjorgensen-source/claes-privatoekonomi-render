const CACHE_NAME = "claes-privatoekonomi-v66";
const ASSETS = [
  "./",
  "./index.html",
  "./login.html",
  "./styles.css",
  "./app.js",
  "./manifest.webmanifest",
  "./icon.svg",
  "./sample-sparekassen.csv",
  "./privacy.html",
  "./terms.html",
  "./reset-cache.html",
  "./pull-enablebanking.html",
  "./localdata-status.html",
  "./dedupe-overlap.html",
  "./verify-live-sync.html",
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  const url = new URL(event.request.url);
  const networkFirst = url.pathname.endsWith("/") || url.pathname.endsWith("/index.html") || url.pathname.endsWith("/app.js") || url.pathname.endsWith("/styles.css") || url.pathname.endsWith("/service-worker.js");
  if (networkFirst) {
    event.respondWith(fetch(event.request).catch(() => caches.match(event.request).then((cached) => cached || caches.match("./index.html"))));
    return;
  }
  event.respondWith(caches.match(event.request).then((cached) => cached || fetch(event.request).catch(() => caches.match("./index.html"))));
});
