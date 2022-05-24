

const staticDevCoffee = "dev-coffee-site-v1";
const assets = [
  "/",
  "/index.html",
  "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css",
  "/nfl.png",
  "/form.html",

  "/sw.js",
   "https://www.jquery-az.com/javascript/alert/dist/sweetalert.css",
  "https://www.jquery-az.com/javascript/alert/dist/sweetalert-dev.js"

];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});
