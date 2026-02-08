self.addEventListener('install', (event) => {
  console.log('Service Worker installé');
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  // On laisse passer les requêtes normalement
  event.respondWith(fetch(event.request));
});
