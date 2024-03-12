'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "dfd07115058f509766d4dd8ef8d89ab9",
"splash/img/light-background.png": "fba37c69d57fd231175b5ec30019aa9f",
"index.html": "b7570c516e5a243dda563a7d59f5866f",
"/": "b7570c516e5a243dda563a7d59f5866f",
"main.dart.js": "dc1ff0b0d7003323de901e985011d656",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"manifest.json": "3790628c77c45d61899bd6df379c0951",
".git/config": "8392827260931d8cd89c9335b47f3ec8",
".git/objects/59/872e4dd725ecebcdc7609ad694466ab9090b46": "77bfb610275c7b806a0f2f292fde2cd6",
".git/objects/3b/f13923087806561fb4560bbeb9304712370d3e": "7c5dff4c39f05d443ae21b531d8bb4f8",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/6a/1e15d68d0683de315fe19554de3a83558b0de2": "7c4df2ccca1d4fca203e09e4a2baef8e",
".git/objects/3d/146079f8364ea9e9f5ef648e51e527153bdfae": "947e49af48ce8e63b1a78ccbcd80665f",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/5f/0f24ae8808b4f246c46dd3a0bd0c9802f5a5c8": "5cb6c4b87e95f627f4320c771875a614",
".git/objects/a4/d68063069e4d51951731355f6fca838f900109": "6f05d7e245f7a34f1842cff75d6dfae0",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d7/2c67ade9505bab9c1448652d5582039ce77087": "16a7ebccb5278c47738cef2f619edfc5",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/d1/976e0db5b01c830cc1fcaecd2c14ae7a101a3d": "d967f8f53ba9eff0297ccd49ed58960f",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e5/ed5a35df7c82320dbc0252cfe63a28cda573f9": "548c8971654fa67221cbd6250d1dfe29",
".git/objects/e2/dfacd3597d86dbfdf7fcaa2600f859e8472f8b": "38a88e4beb3b8b75a469e08a0be0895f",
".git/objects/f3/b08954605f465bade9f650d67b6fcc8aa2ebc0": "ab27f1187cf3ce153c033025332dfc78",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/8b2db046bd182224e921aad6104cfd636ce495": "412b6f27396bbd63d511d426d78d0d39",
".git/objects/f2/12fc0d35fff9f4f50919b01957ed4ad6e4f9bd": "a219c0288630b102db9155441881027f",
".git/objects/4e/3545aeb7e29d30f6e20c32a6945122ee8ef6e6": "548d030d72b3ff0d83059f4aa125c33a",
".git/objects/4e/a37f0c03db97335b014656a43db95cfdbda021": "f3836fabe454f56339a0f1690b8e1858",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/4b/08c92a6448f807045994c6de22d8ee9093aaab": "73d0aae290bed3c22142aa1a7a3ba56f",
".git/objects/1a/14c81df630f34e4eb638d6dcfbb35608f74327": "b3d853d05be6c7f5264928e2a7ead058",
".git/objects/8f/70b282a56f8509b2efdf0bad7fc33ba7eb0c7c": "912ac85b8938d011d9989e7d5718c464",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4c/400fdbd53f48ca2f3c25c9ff5836b27306fe35": "2e6625ed4230fe8a36963d44923b7bb2",
".git/objects/75/b030add0c0a7952f1da5e12189952f8da5bfc2": "5567be53fc859fca6eeb3ed3542f97cd",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/5c/c6b490a6d2abcb3104cd22d8091b93110b3719": "d4c8ffaa5603b7e1787b74cceb0cd761",
".git/objects/91/2077a5d6c9c94ea3fe40e23bd4080ae7eaf66c": "34f56d6a3b90e8f931518776a892ef5a",
".git/objects/3a/de636792fd5741c9d0c6f3fa5e83dd5a047ebb": "10f3766347280a35eeacc8ffba69507f",
".git/objects/3a/4ede5005554cf4dd169f81ecf9c76ce9f4b254": "09015bf5f1a6727539a5b8c785ee31fe",
".git/objects/53/4683909ce4ec59d78254159f2f6a8df6ede668": "c90acd91b6e7e080c939538c7b080a2a",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/3f/d9c6938d1f83d7b0d4c48c6ae7ec1221ee314d": "88157fd7af9da2550aa93aaba31ac031",
".git/objects/90/c7540742698474392bc69e559e40e041264f04": "5966f15c59df37271fa7bb9fd96efb7c",
".git/objects/d4/a27606779464ade451a84f12ae3886de731088": "cdd5a74d401c8ba4035857f0aef841aa",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/a7/5605299282c969dd91a4912b356bd256539769": "438370c476565c0cfc02f332c6acf678",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ef/9ca6d2458cf99610fc4466b51ba9b94b5c3bb5": "41e86814df0057b1dc8348b4b4f7b968",
".git/objects/c4/99b3b58152364f1aa724c927e9650a3e6fd7e1": "2beb29dc26a9d082b672692eec1f59d3",
".git/objects/c4/1520f9baaa594403508cbaa123a5b3c11b388b": "bc39e124f211e4dcbec2a324975c3b99",
".git/objects/cc/23f973090bb38fe345b8ccf4966017ae4e944a": "7eb39873ae07f775cf542fdcde4d4a76",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e7/d106c4421e680481973b9d78dfbe4f0f09ed97": "f80fd6cdcf1f6c406f9dcf4ca6c55fc7",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2d/4017063819d8134c11b2fe752ba3ceaffb7515": "9b91676883ab66aea5cb5acec7152f0a",
".git/objects/1b/1e47e197969e3b43a047a8ad01ccf9c4d033b8": "e92fc710bf39f994a9afac356c89aab9",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/70/bd9cd113ee26425da4d98229545a5a32d1432f": "ecea1849d89473f48696b031210878c5",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/8c/75b20d7aafed2646b76323e99220d65a9e5a22": "47a29926b0fe52e6b1719a1390c61f9d",
".git/objects/2b/25994e063f077b4ed9b802ed51cb5c6d5eeef0": "24a7eb320d8609d678956e7f46962950",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/2b/08813f5022253607321a85ac83712b1129c903": "8a23cfa55f42bb97664c18b4d9f3a27e",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e2e5a69dd75f377e0b4500cfd047ebc9",
".git/logs/refs/heads/master": "e2e5a69dd75f377e0b4500cfd047ebc9",
".git/logs/refs/remotes/origin/master": "07ceb06f1e84a90e1760ba4447a018cf",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/MERGE_RR": "d41d8cd98f00b204e9800998ecf8427e",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/COMMIT_EDITMSG": "4622e4e30b0064564c0d0ccb7de304e3",
".git/refs/heads/master": "673fab630c8cb5debf2aaac0b1a7611c",
".git/refs/remotes/origin/master": "673fab630c8cb5debf2aaac0b1a7611c",
".git/index": "f897095cd3cc64cccf1a60bd1e142ff6",
"assets/AssetManifest.bin.json": "4a41d61f3e8e2cbedce850a4e02e9c45",
"assets/AssetManifest.json": "b984249f723827c2d53d1fe80230d40b",
"assets/NOTICES": "5d314271fc0581d88819aae27f4da0a0",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "fd5c4ae53565c69873c66d4b2ecfb897",
"assets/fonts/MaterialIcons-Regular.otf": "2284435e38f8752e2f4c7a980490da4c",
"assets/assets/images/card.png": "2bc7b480b98f275160a25e08880c9b60",
"assets/assets/images/envelope.png": "cee6c91c3d9f293226e7332bf61f139c",
"assets/assets/images/key.png": "cbd8056aa9d5c797ba9cca39633a4411",
"assets/assets/images/avatar-male.png": "ea35c4313d1f00baf9c31c463d7d1810",
"assets/assets/images/avatar-female.png": "a534f887d9ee003f7dbdedae71ebc5a6",
"assets/assets/images/splash.png": "fba37c69d57fd231175b5ec30019aa9f",
"assets/assets/images/wip.png": "33b620dd91ddb890e9d8e5f3cfaf7c55",
"assets/assets/images/license.png": "0a139e2fa594fa363fad9749e4a181a0",
"assets/assets/images/logo.png": "7b355fc813343b098a28be666f6c23d4",
"assets/assets/images/twitter.png": "8af00aa04f949c98e8abb8ee0ba9af4d",
"assets/assets/images/qr_code.png": "ca8235fa1ba78b6d1dbd3812d4519d97",
"assets/assets/images/check_animation.gif": "359f6f2383777145204348dae9efb153",
"assets/assets/images/facebook2.png": "37771792d12172a05f2a955dbaa4f24f",
"assets/assets/images/google.png": "937c87b4439809d5b17b82728df09639",
"assets/assets/images/facebook.png": "0bb10076cd2f605e22a4313330388bf0",
"assets/assets/images/avatar-other.png": "aa0454b97067a6a3152f6438fec782a5",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
