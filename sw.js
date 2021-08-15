self.addEventListener("install", (e) => {
   e.waitUntil(
      caches
         .open("TNSS-receipt-generator")
         .then((cache) =>
            cache.addAll([
               "/",
               "/index.html",
               "/index.js",
               "/login.js",
               "/logout.js",
               "/register.js",
               "/transaction.js",
               "/styles.css",
               "/icon/icon.jpg",
            ])
         )
   );
});

self.addEventListener("fetch", (e) => {
   console.log(e.request.url);
   e.respondWith(
      caches.match(e.request).then((response) => response || fetch(e.request))
   );
});
