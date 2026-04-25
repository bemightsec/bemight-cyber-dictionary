const CACHE_NAME = "bemight-cyber-dictionary-v1";

const FILES_TO_CACHE = [
  "./",
  "./index.html",
  "./dictionary.html",
  "./learn.html",
  "./quiz.html",
  "./saved.html",
  "./about.html",
  "./styles.css",
  "./app.js",
  "./dictionary.js",
  "./learn.js",
  "./quiz.js",
  "./saved.js",
  "./about.js",
  "./terms-data.js",
  "./quiz-data.js",
  "./manifest.json",
  "./icon-192.svg",
  "./icon-512.svg"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );

  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );

  self.clients.claim();
});

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;

  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(event.request)
        .then(networkResponse => {
          return caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          });
        })
        .catch(() => {
          return caches.match("./index.html");
        });
    })
  );
});
