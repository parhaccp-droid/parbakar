// שירות רקע מינימלי - נדרש כדי שהדפדפן יציע "התקנת אפליקציה"
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function () {});
