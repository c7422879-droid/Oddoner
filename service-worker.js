const CACHE_NAME = 'oddoner-cache-v4'; // Subimos a v4 para forzar el cambio
const urlsToCache = [
  './',
  'index.html',
  'admin.html',
  'login.html',
  'manifest.json'
];

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.map(key => key !== CACHE_NAME ? caches.delete(key) : null)
    ))
  );
});

// AQUÍ ESTÁ LA PARTE QUE ARREGLA TU ERROR
self.addEventListener('fetch', event => {
  // REGLA DE ORO: Si es para la base de datos (Cloudflare), NO HACER NADA
  if (event.request.url.includes('workers.dev')) {
    return; // Esto permite que el Login y Registro funcionen directo
  }

  // Si no es una petición GET (como los POST de registro), no usar caché
  if (event.request.method !== 'GET') return;

  // Estrategia de caché para los archivos de la app
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});