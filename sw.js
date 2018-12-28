importScripts('workbox-v3.4.1/workbox-sw.js')

/*
  This is our code to handle push events.
*/
self.addEventListener('push', (event) => {
  console.log('[Service Worker] Push Received.');
  console.log(`[Service Worker] Push had this data: "${event.data.text()}"`);

  const title = 'Push Notification';
  const options = {
    body: `${event.data.text()}`,
    icon: 'images/icon.png',
    badge: 'images/badge.png'
  };

  event.waitUntil(self.registration.showNotification(title, options));
});

self.workbox.precaching.precacheAndRoute([
  {
    "url": "build/app.css",
    "revision": "4904504171de43e0cad58a8ff7e91477"
  },
  {
    "url": "build/app.js",
    "revision": "f586e697f407fd634ec8703e0f371f8e"
  },
  {
    "url": "build/app/2pxtfhnj.entry.js",
    "revision": "d8fc6d1619c9259b5b3e3e3373a917a4"
  },
  {
    "url": "build/app/2pxtfhnj.sc.entry.js",
    "revision": "0b91baca8cf557a255b7583541b86f39"
  },
  {
    "url": "build/app/6eorrvyw.entry.js",
    "revision": "e9efe8451bd85a118f38ea6d89dcabdd"
  },
  {
    "url": "build/app/6eorrvyw.sc.entry.js",
    "revision": "4432fec5675030a0a4791a3381608cd8"
  },
  {
    "url": "build/app/8jnj0s8r.entry.js",
    "revision": "f09349d12f2b20c8939a7a422d5ad70b"
  },
  {
    "url": "build/app/8jnj0s8r.sc.entry.js",
    "revision": "96b86b857cd886cc946b91b4e1aecec7"
  },
  {
    "url": "build/app/app.4fi97kkm.js",
    "revision": "e058bdfbb90a3140377e7853e192822c"
  },
  {
    "url": "build/app/app.bkkjflvg.js",
    "revision": "04a92314b5606aa3adc39b10852c96e0"
  },
  {
    "url": "build/app/chunk-0f8926dc.js",
    "revision": "4c3dd0b72613512ea7d17d4630092ca2"
  },
  {
    "url": "build/app/chunk-187ef6fc.es5.js",
    "revision": "4ded12e16a0d6035450eddec49cb4ed9"
  },
  {
    "url": "build/app/chunk-2abae55f.js",
    "revision": "17a0cee8d173c3e06870c488541d126b"
  },
  {
    "url": "build/app/chunk-523a9283.js",
    "revision": "9761e7f37c94fa9390ad6af118b5b656"
  },
  {
    "url": "build/app/chunk-96ecf18f.es5.js",
    "revision": "0f864e8893d6337a909945a4a7b738e8"
  },
  {
    "url": "build/app/chunk-f541d606.es5.js",
    "revision": "c55206ffea0ffbe6513b9335503e9e6f"
  },
  {
    "url": "build/app/cm1hjpl6.entry.js",
    "revision": "0a6d478e997a018124698475fe203563"
  },
  {
    "url": "build/app/cm1hjpl6.sc.entry.js",
    "revision": "e328c6756d176acfbe9b0a9ae18619ee"
  },
  {
    "url": "build/app/fhionivt.entry.js",
    "revision": "1472289e256d8ad05a13b23fa61fdafa"
  },
  {
    "url": "build/app/fhionivt.sc.entry.js",
    "revision": "44f538834acf4849d0854fd32e386556"
  },
  {
    "url": "build/app/gesture.es5.js",
    "revision": "96547ba741bd0ab41c2872fe3053f2df"
  },
  {
    "url": "build/app/gesture.js",
    "revision": "fa556f89ab3ca3b6fc71136a812641e9"
  },
  {
    "url": "build/app/gnxpn8ww.entry.js",
    "revision": "fa09ffc4f37c5b0e54220a658d14e961"
  },
  {
    "url": "build/app/gnxpn8ww.sc.entry.js",
    "revision": "bc06291b6f48280324d769f0e9c9f884"
  },
  {
    "url": "build/app/h2typ0do.entry.js",
    "revision": "1f6b58a7474ec72399e6a797f430c1b9"
  },
  {
    "url": "build/app/h2typ0do.sc.entry.js",
    "revision": "1f6b58a7474ec72399e6a797f430c1b9"
  },
  {
    "url": "build/app/hardware-back-button.es5.js",
    "revision": "676f9dab79c7cad9fe704d60ac8a2e70"
  },
  {
    "url": "build/app/hardware-back-button.js",
    "revision": "6527d884bbf8c62f47920231da0812ae"
  },
  {
    "url": "build/app/input-shims.es5.js",
    "revision": "abf3f8ee784ee7cb7165567780748924"
  },
  {
    "url": "build/app/input-shims.js",
    "revision": "25b333682ab17ffc7941e77772c3dd33"
  },
  {
    "url": "build/app/ios.transition.es5.js",
    "revision": "1ff57d0079a08cfe303388705d384bdb"
  },
  {
    "url": "build/app/ios.transition.js",
    "revision": "fe7a3bca3b0952fe786f439e55bede34"
  },
  {
    "url": "build/app/md.transition.es5.js",
    "revision": "2ef4dc3c25834ec97b11f411ada8a49b"
  },
  {
    "url": "build/app/md.transition.js",
    "revision": "715cd90aed03e8e67e5ec142f0112971"
  },
  {
    "url": "build/app/nwhfdup8.entry.js",
    "revision": "9f01c576e3fc7998dc18b9f86fc942fa"
  },
  {
    "url": "build/app/nwhfdup8.sc.entry.js",
    "revision": "cb734cfc1de4166a59099ef15ee74d97"
  },
  {
    "url": "build/app/p22wgxmu.entry.js",
    "revision": "3f6d968179ae08ad9c9c648cd1b26097"
  },
  {
    "url": "build/app/p22wgxmu.sc.entry.js",
    "revision": "e1dffa0159a6993755147046dc4dcd97"
  },
  {
    "url": "build/app/status-tap.es5.js",
    "revision": "b28bd581ab23ed0ed8c9fb9f70224d62"
  },
  {
    "url": "build/app/status-tap.js",
    "revision": "2f61ddb806604ad9e84bb86ea918d99d"
  },
  {
    "url": "build/app/svg/index.esm.js",
    "revision": "2bdea9e6190aa6a40e24eb01a1e4fb97"
  },
  {
    "url": "build/app/svg/index.js",
    "revision": "35b1701e9c9c1dacb8be33a8bace509b"
  },
  {
    "url": "build/app/swipe-back.es5.js",
    "revision": "0649c42e2f1f40192924f6d8faf5416a"
  },
  {
    "url": "build/app/swipe-back.js",
    "revision": "bb3eac8c8f618597f707ce55303f0ba5"
  },
  {
    "url": "build/app/tap-click.es5.js",
    "revision": "6ee38fc425e73ae238ab770b87dd5092"
  },
  {
    "url": "build/app/tap-click.js",
    "revision": "998b149dcbf71db2b0e2633dde2fb857"
  },
  {
    "url": "build/app/ulitg3an.entry.js",
    "revision": "ba522d8370276081ec78f673952529c7"
  },
  {
    "url": "build/app/ulitg3an.sc.entry.js",
    "revision": "55bc114389a40ebb5086124a6b21acbf"
  },
  {
    "url": "build/app/xlrit5rt.entry.js",
    "revision": "5cbae2b79ad34e6d66b4a437b43213a2"
  },
  {
    "url": "build/app/xlrit5rt.sc.entry.js",
    "revision": "5cbae2b79ad34e6d66b4a437b43213a2"
  },
  {
    "url": "index.html",
    "revision": "312849a3603dbf33503aa9c168c2fed6"
  },
  {
    "url": "manifest.json",
    "revision": "e047e45fae775f6d3ea2c3b2f5c7ef42"
  }
]);
