const CACHE_NAME = 'oddoner-cache-v2'; // Incremented version
const urlsToCache = [
  './',
  'index.html',
  'capsule.css',
  'mental_health.css',
  'manifest.json',
  'admin.html',
  'anxiety_addiction_capsule.html',
  'colores.html',
  'inventario_aa.html',
  'login.html',
  'mental_health.html',
  'neuro_gate.html',
  'nino_interior.html',
  'respiracion.html',
  'test_toxic.html',
  'vaciado_cerebro.html',
  'audio/piano.mp3',
  'audio/rain.mp3',
  'audio/relax.mp3',
  'image/icon-152.png',
  'image/icon-192.png',
  'image/icon-512.png',
  'image/mental_health.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache abierto y archivos principales cacheados');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.open(CACHE_NAME).then(cache => {
      return cache.match(event.request).then(response => {
        const fetchPromise = fetch(event.request).then(networkResponse => {
          // Si la solicitud es válida, la guardamos en caché
          if (networkResponse && networkResponse.status === 200 && event.request.method === 'GET') {
            cache.put(event.request, networkResponse.clone());
          }
          return networkResponse;
        }).catch(err => {
            console.log('Fetch fallido; la red podría estar desconectada.', err);
        });

        // Devolvemos la respuesta del caché si existe, si no, esperamos la respuesta de la red
        return response || fetchPromise;
      });
    })
  );
});

self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            console.log('Borrando caché antiguo:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});