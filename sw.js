// A safe pass-through Service Worker. 
// It allows PWA installation but prevents aggressive caching traps.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
