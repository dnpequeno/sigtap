const CACHE_NAME = "sigtap-v1";

const arquivos = [
  "./",
  "./index.html",
  "./dados.js",
  "./manifest.json"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(arquivos))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(resposta => resposta || fetch(event.request))
  );
});