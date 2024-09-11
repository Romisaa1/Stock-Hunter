'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "185454ea5c9cf8139a4c5544223ebc6e",
"assets/AssetManifest.bin.json": "6568095676d01f0aeb126dee8a74738b",
"assets/AssetManifest.json": "db625f97e6ea1e629ab6644cc04f498a",
"assets/assets/audios/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/fonts/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/fonts/ff-untitledui.ttf": "a88c99f58543af86c829a1d4ca6088d9",
"assets/assets/images/19011.jpeg": "aafc827411d728f32c5082495baf7129",
"assets/assets/images/app_launcher_icon.png": "5ebfe4bbe0c5de78b97bb6420e7f0bd7",
"assets/assets/images/edita.png": "782e83dda549775687bc9eed5ead59d7",
"assets/assets/images/elfar.png": "2dfbd44d7dd3e5cf4f02d16f5596666b",
"assets/assets/images/el_abd.png": "63be92f45697aa0ef5c9e9c1f597477d",
"assets/assets/images/essensial.png": "ba07d73c194a8c22c5d53a752c9f45cc",
"assets/assets/images/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/images/healthy.webp": "21c50de7ce9d4b884b1ab4e31d0b5f3c",
"assets/assets/images/hyper_one.png": "a9be6e4beae6da32fb201276b97d45f0",
"assets/assets/images/images.png": "cf3b4ed2cfc1c72579f5c4d4590db58f",
"assets/assets/images/joviality.webp": "5e8f83bf2047e530d3f36c75d90198c8",
"assets/assets/images/Juhayna-NnG-banner.png": "ad15863a32539eea84c0ed4bed9a61d9",
"assets/assets/images/last-pieces.jpg": "22e54671359c45b0d21cdacb816db705",
"assets/assets/images/loadingPage@2x.png": "8a1734ed97cb4d639b874a13311997c8",
"assets/assets/images/molto_(1).png": "ece966071d2cc170041a468a94b8bff6",
"assets/assets/images/nestle.png": "c80c3c78d1bfef14df8c8d5ef92deb14",
"assets/assets/images/nutella.webp": "bbe5e0558f200fd01a2770ecf97ef691",
"assets/assets/images/pexels-alxs-3025236.jpg": "b1a286fdf7b92a85e2e92023f3c386d7",
"assets/assets/images/pexels-ayse-gursoy-1015359627-21207660.jpg": "46e02b946aafc6a5b199f425d23dbf41",
"assets/assets/images/pexels-fabio-bueno-560364-1314041.jpg": "de57bbc0284909cbe0dd5ea405709efd",
"assets/assets/images/pexels-matvalina-15689119.jpg": "c60df66e9b7bfcc0d1d2caf45c53d7f9",
"assets/assets/images/pexels-pixabay-301367.jpg": "fa1499fc2649049f35c771018cda55c9",
"assets/assets/images/pexels-polina-tankilevitch-3873147.jpg": "0b0bb0e3e8739b9bf139442b6ce8e38b",
"assets/assets/images/pexels-sanket-sawale-62949595-17423267.jpg": "5c754829f298235376d1d7b0b3c6efd4",
"assets/assets/images/Red_Black_Modern_Bold_New_Drop_T-shirt_Collection_Instagram_Post.jpg": "a7332f2050885fd46338707265113832",
"assets/assets/images/richbake.png": "6d241934d154e63d14f3ec5fae4466f6",
"assets/assets/images/seoudi.jpeg": "7e6803441e882d1b94ae64d8fca7b447",
"assets/assets/images/shareImage@1x.png": "cd7acf5a7b3c57c41ef38d4ef7c42bf5",
"assets/assets/images/tbs.jpeg": "8694c304edd2fd5edf03dbfbf3076a47",
"assets/assets/images/WhatsApp_Image_2024-07-05_at_07.48.34_a71d7d28.jpg": "87262cef410e372c4d713da8b965b982",
"assets/assets/images/Yellow_Limited_Time_Sale_Instagram_Post.jpg": "751dcfc3f09c0f06f754bcf7384bd779",
"assets/assets/lottie_animations/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/lottie_animations/orderNone.json": "615932553be0de23036f462b0cb4be50",
"assets/assets/lottie_animations/shoppingCart.json": "9e10a723edf215551a484e246922187d",
"assets/assets/pdfs/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/rive_animations/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/videos/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/FontManifest.json": "fd56d29b5b58e16e946f4e8b6e1f8644",
"assets/fonts/MaterialIcons-Regular.otf": "02fe6055a2e5d34efd68909ffaf81fff",
"assets/NOTICES": "bbf17ba07cffebbbdeda860e46ba3161",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_credit_card/font/halter.ttf": "4e081134892cd40793ffe67fdc3bed4e",
"assets/packages/flutter_credit_card/icons/amex.png": "f75cabd609ccde52dfc6eef7b515c547",
"assets/packages/flutter_credit_card/icons/chip.png": "5728d5ac34dbb1feac78ebfded493d69",
"assets/packages/flutter_credit_card/icons/discover.png": "62ea19837dd4902e0ae26249afe36f94",
"assets/packages/flutter_credit_card/icons/elo.png": "ffd639816704b9f20b73815590c67791",
"assets/packages/flutter_credit_card/icons/hipercard.png": "921660ec64a89da50a7c82e89d56bac9",
"assets/packages/flutter_credit_card/icons/mastercard.png": "7e386dc6c169e7164bd6f88bffb733c7",
"assets/packages/flutter_credit_card/icons/rupay.png": "a10fbeeae8d386ee3623e6160133b8a8",
"assets/packages/flutter_credit_card/icons/unionpay.png": "87176915b4abdb3fcc138d23e4c8a58a",
"assets/packages/flutter_credit_card/icons/visa.png": "f6301ad368219611958eff9bb815abfe",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "f25e8e701660fb45e2a81ff3f43c6d5c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a5d7457fda15b7622c14f432ba63039a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ddbff6ae8ef4eb65be5ff902b93afb71",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "2704101cb06ce66e2000356a312be25c",
"favicon@2x.png": "bdb5212412f71df60108a8a50c2a19c2",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "b205ce651870abcb7c71d44b6e0acd3b",
"icons/app_launcher_icon.png": "5ebfe4bbe0c5de78b97bb6420e7f0bd7",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "07d490d7c24503bfddaa87f2a2ea5bae",
"/": "07d490d7c24503bfddaa87f2a2ea5bae",
"main.dart.js": "579c3b7def29f03a8739cfc0afdad242",
"shareImage@1x.png": "cd7acf5a7b3c57c41ef38d4ef7c42bf5",
"version.json": "8e34363ad3ed83a9ade2389650a97378"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
