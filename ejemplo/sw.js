self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('fox-store').then(function(cache) {
     return cache.addAll([
       '/PWA1.2/ejemplo/',
       '/PWA1.2/index.html',
       '/PWA1.2/index.js',
       '/PWA1.2/style.css',
       '/PWA1.2/images/fox1.jpg',
       '/PWA1.2/ejemplo/images/fox2.jpg',
       '/PWA1.2/images/fox3.jpg',
       '/PWA1.2/ejemplo/images/fox4.jpg'
     ]);
   })
 );
});

self.addEventListener('fetch', function(e) {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
