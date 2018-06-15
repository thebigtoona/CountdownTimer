// service worker
const cachedAssets = 'assets-v3';

self.addEventListener('install', () => {
  const urls = [
    '/resources/styles.css',
    '/resources/app.js',
    '/resources/timer.js',
    '/'
  ]
  // pass in a promise
  e.waitUntil(
    caches.open(cachedAssets).then(cache => {
        cache.addAll(urls);
    })
 );
})

// remove old caches
self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys()
      .then(function(cacheNames) {
          Promise.all(
          cacheNames.filter(function(cName) {
              return cName != cachedAssets;
          }).map(function(cName)
          {
              return caches.delete(cName) && console.log(cName);
          })
          );
      })
  );
});

// fetching items from the cache here
self.addEventListener('fetch', function (e) {
  e.respondWith(
      caches.open(cachedAssets).then(function (cache) {
          return cache.match(e.request).then(function (response) {

              return response || fetch(e.request).then(function (response) {
                  cache.put(e.request, response.clone());
                  return response;
              }).catch(err => console.log(err));

          });
      })
  );
});