const CACHE_NAME = 'oddoner-cache-v1';
const urlsToCache = [
  './', // Ruta principal de la app
  'index.html',
  'manifest.json',
  'images/icon-192x192.png',
  'images/icon-512x512.png',
  // Si tienes hojas de estilo o scripts externos, añádelos aquí.
  // Como tu CSS y JS están en línea, solo necesitamos los archivos principales.
];

// Instalar Service Worker y guardar el contenido estático
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache abierto en el Service Worker');
        return cache.addAll(urlsToCache);
      })
  );
});

// Interceptar solicitudes de red y servir desde el caché si está disponible
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Se encuentra en caché, lo servimos
        if (response) {
          return response;
        }
        // No se encuentra en caché, vamos a la red
        return fetch(event.request);
      })
  );
});

// Activar Service Worker y limpiar versiones antiguas del caché
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            // Elimina los caches que no estén en la whitelist
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});