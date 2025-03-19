const CACHE_NAME = "museum-cache-v1";
const assets = [
  "/",
  "/index.html",
  "/art1.jpg",
  "/art2.jpg",
  "/art3.jpg",
  "/art4.jpg",
  "/art5.jpg",
  "/art6.jpg",
  "/art7.jpg",
  "/art8.jpg",
  "/art9.jpg",
  "/art10.jpg",
  "/manifest.json"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
