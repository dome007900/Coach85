const CACHE='coach85-v1';
const FILES=[
 './',
 './index.html',
 './css/style.css',
 './css/dashboard.css',
 './js/app.js',
 './js/dashboard.js'
];

self.addEventListener('install',e=>{
 e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)));
});

self.addEventListener('fetch',e=>{
 e.respondWith(
   caches.match(e.request).then(r=>r||fetch(e.request))
 );
});
