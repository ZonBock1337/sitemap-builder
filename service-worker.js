self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("sitemap-builder").then(cache => {
      return cache.addAll([
        "/",
        "/index.html",
        "/manifest.json",
        "/icon-192.png",
        "/icon-512.png"
        // Füge hier weitere Assets hinzu, wenn nötig
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
