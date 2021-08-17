// self.addEventListener("install", (e) => {
//    e.waitUntil(
//       caches
//          .open("TNSS-receipt-generator")
//          .then((cache) =>
//             cache.addAll([
//                "/",
//                "/index.html",

//                "/script/headerBtns.js",
//                "/script/index.js",
//                "/script/login.js",
//                "/script/register.js",
//                "/script/settings.js",
//                "/script/transaction.js",

//                "/css/styles.css",
//                "/icon/icon.jpg",
//             ])
//          )
//    );
// });

// self.addEventListener("fetch", (e) => {
//    // console.log(e.request.url);
//    e.respondWith(
//       caches.match(e.request).then((response) => response || fetch(e.request))
//    );
// });
