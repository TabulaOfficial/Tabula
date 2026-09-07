// Minimal service worker for PWA installability.
// Caching will be expanded later once core assets stabilize.
self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  return self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  // Let it rip directly to the network for now
  e.respondWith(fetch(e.request));
});