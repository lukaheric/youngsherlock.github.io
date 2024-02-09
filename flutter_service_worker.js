'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "d8e8fca2dc0f896fd7cb4cb0031ba249",
".git/config": "0725e1e8706d87edabc0273ce100322a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "79f2e8c349bf7601cbd09f95e20970bf",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a1ad19e7d20789d164d9ebafceb79253",
".git/logs/refs/heads/main": "a1ad19e7d20789d164d9ebafceb79253",
".git/logs/refs/remotes/origin/main": "fc46c79215df0f40ffb38d21ccdc2286",
".git/objects/00/50085f964b20f7f8a0a86bdb7ec61438a432db": "ef9a32d5347a2f2721dff6728cffbb9a",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/06/e4dd0a440acf11bce880dc376371476cbc8079": "a80ce2d4a538e62a766cf23a3171d63e",
".git/objects/0b/9fcf3d6c6058acc662279d9d22099086a0c78a": "0f20d8b31472ed851f3506e98bb44282",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/10/4cd5e49a7660594d5ed0d1aee6fa9ecd585dd8": "826dcc1a356a5b6185de17d4a64e2d2a",
".git/objects/12/c0e28eea7f5877c131de5cc70eb4cec6bb3f2c": "2ac7c72d8a22b096401578c959dd341d",
".git/objects/17/3b61693bc382cd170c7c5ecad10e5aa72edb9c": "652ac28e6b65156fcd3ec8ce05cc2b3a",
".git/objects/1a/0f95a837b7570ff458d29d7f1acfae7c4e6f05": "2eb9cc92833985bd3b9769a868109d43",
".git/objects/1c/8fb449358e13ee08547ba6a0b4aa3f3198497a": "c2eab95fc8e8066e29751bc7a94fd503",
".git/objects/1e/b297f10a534af493f01638dcd1c0a76a7dc74d": "058293809321ce0c1832131aa5ec7bd4",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/23/97ba0a28e2eac29e0a0ba7229297585ed8107e": "8c4c5e9b1d65e7cceb96c5b846c13fb6",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/31/3915d7a1283192cd41ce9af78939ea21190c33": "96281642116b7812dec9dfa44faf7d79",
".git/objects/32/bd52590fdd1c19fb2aaf575dc1819e2e8373ad": "6780bed3e1a7af4fc49f93bced120c94",
".git/objects/33/b9dd5c5433d2e5b8c62b78220694f8b28887d1": "5bc408c0992eae7cb29813dd73960976",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/21a63606117465071566444fa8cf3bb8589e17": "b06370cd3992111b96520b19f17e24f9",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/41/778f79be2faa5d2ee93d861431aabf27765159": "7ef89dbd979e03341868a46e76045210",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/bc64d040240d4d0415de2baae55b8d08c45daa": "219aa42e91a03ae742df953e7330de1d",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/48/e0d3dfa5727464a132f671d6e7f49ab4d09148": "69bed58309c382382be3696d3b149dcf",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4c/1c9bc0def6dfeffce4d8adaaa44286796d2dad": "30609ab711c750070a33536aad445f77",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/58/9dce14aa1c5cdceaba1b6c5a9e67031f9a4815": "3dc75ac2470b11715a136cb1e737b701",
".git/objects/5b/fc439b20b2e55ee3e39c143034ec5fb0fa1c10": "0c7db576e9f1b5e9a30272ab4a933ef2",
".git/objects/5c/5784d4bc070eccad88ecd25dd3057215c0a37d": "ca688d094f93e5f4a3febb9d62d658e2",
".git/objects/64/724171c1602f92e0e8852907b3bda88a326e8e": "2b26b7dcc6f5e6120fcbfcafe295801f",
".git/objects/65/a9039527601b8bf55f541619ae6ff87de73c55": "dae25948dde796380707ac18a84a9c8d",
".git/objects/66/ca926a7d77122a79ae753e1f10fd80c5d7339f": "721f9ce28761d0f8b2a2859f367642c0",
".git/objects/6f/4684e083a018fb2b9b3e3579fa83d88e00357d": "c36a0d2885d9ce067027d762572f1a49",
".git/objects/78/f3179af8b2cd3ead53dc3601158c2e1ec9b470": "f4c1c294795ccb04c70b778bd7c037d2",
".git/objects/81/3f04937394025826c1ad2b768b078c9946b048": "8a678a18da6cffe1d442426644925788",
".git/objects/84/adfa06c78b31bb4da9730ff0536f280ebca32d": "ad0199d1fbaf4b5fbe9ca97b41515155",
".git/objects/86/03d0a3d2a91580f77171968c7d13e73fd1482a": "dc750bd17c929d834d260dd7dc0293e7",
".git/objects/88/267e06815ce152fcdcb510e6ba2736a594a000": "5ffde273a5e37ae71c19cdfd28d47df9",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/90/f9a8d4302e80f2d60700bcb89afe1f51c631ed": "89682b2180fba31c2d33917e031e1b9b",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/95/217902606d75eb41109ec8ff08dbfbcb105525": "4570f97bbb9dc398bc8cb9435e240cae",
".git/objects/99/a0add4c561a3bd77d8d43e12eebc75d530b0a0": "9a3796a68983961bf8e0d0b54b2070b6",
".git/objects/9d/5f886353dcff6c222439cc1118e77eb1b007ea": "a87ff240c6e149d1ce495643e49417f9",
".git/objects/a4/0fcfa3127d76a46b3a1236cc31697f63fe7f09": "ad69e7638529262b5f582c65ffa3701b",
".git/objects/ae/4244526142968982b641cce456975855577dca": "b99ce6e488004b1a9f6e55989b2b7b4f",
".git/objects/b2/c9f078c99923eef23206aecd5c6b4b8da49c6a": "16241c8d49fa27a4b806df889f83dd6f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/0b0ef15c5d3d4fac751dfaac8b443e127f81d4": "caf2c47c8863130b6d5f487a8a946433",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bc/18efe6c929dbb62fb421fa1236334ddcb4fefc": "dbfd4124c109b6068b383ac69246b450",
".git/objects/be/889a8aa248f170a9c7377eb299e54d360db9be": "ee31efbeb7c6687aa044a21a91ad1f1c",
".git/objects/c1/31a6ec7ef112e001aafabf5c7390d474a68925": "6b624b4d32876ded77ea6d82252f4c10",
".git/objects/c1/a710c8cc4dd441d1633f406519e2d0e90a6165": "b3d90af05401db81171fc202f2a7bdcf",
".git/objects/c2/d8d2f44dd987786bbc249d4ad7bac3360f4811": "1926a57b256d9def261ccf6dc2914f65",
".git/objects/c4/27d5f2140797970f3a61c4fbfa364e8a3a195d": "742430bc524d204e2fcedb535dab7f41",
".git/objects/c8/bedf0a790e0c5a191d4794bf5a9dc94327b355": "793f1ee279c7cca56d917fb82b6e7e1b",
".git/objects/ce/b3433730c47d2d4b14b97d5c6a3912254b4612": "a5da9a51526e2f7f24fbce9b2a52545e",
".git/objects/d2/95fd52d0343565abdbc84abec859772aeafc56": "a046665bf06f113d7ccc40ac085ccfa5",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d8/95ad08110e2bb4233c1d1c2a770a885d9c95cb": "835605094326b248be6e51c6014f1268",
".git/objects/dc/bbc26cd0ad2662a1d8b9a12cb60af99c3ecef8": "47132c11729633468876f5fa1dae2a84",
".git/objects/dd/9569ab1d287324c246b11044b1a34e48760c52": "7cea58b17c143fb0c7d91c491e84d2d2",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/e0/7797437d096064bd90c373800dcb0f335c14b0": "16f9b9defb16491f8c733b09b022688c",
".git/objects/e0/907f0bc69d47023df7453af4163d2400af7a07": "63dd3ce14bdb9c4eccfc4fe9b1363ba7",
".git/objects/e2/a7138fdf4957d515a222b263b90c6e2a3911f6": "7c82f105553a14e1f6b52fffa49cffd2",
".git/objects/e2/ff5865b192241d53935e77de70a4e6dff2847a": "cad1058aedc6c21a518b3cb00af21fac",
".git/objects/e6/46d591f99adb142edab348e5d728ad2bddc4a3": "7630b34441d494db3bf4d884cd250e72",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e7/75f4cbf11c80f4e7f4b9ed9b9d94b66fe8b377": "9e83da9eed6935cc13a3cc5d3da03952",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/52f9e83743e480113b7f0bcac4df0d9cadce55": "f022fe24a6f284f67c0b3c2ef427ce7b",
".git/objects/ee/972d89b081f53d07925ca8485e521c7d755a88": "16c8a0e260b135b84a6384f74976b09c",
".git/objects/f0/6e1d214929c813aeda4541b9af0aab3eeae954": "5e94e1b890c8eb1740cdece5317bc8ae",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fd/b4f4a2d68a6faced07a4f225fb98e73c41fbdb": "6545ceb7fb0bb07b5b262282d730f652",
".git/objects/fe/642f45d9201254244d0d978aaab82d28bd6c76": "a645f12d3edf30c68f3331f7c68be4bd",
".git/refs/heads/main": "46c1cff97f84aa252997dbf667d7121c",
".git/refs/remotes/origin/main": "46c1cff97f84aa252997dbf667d7121c",
"assets/AssetManifest.bin": "d6afc6b611487bafa38a0989ed5c5b25",
"assets/AssetManifest.bin.json": "ae3a774c3bf83e5506c6d78da71c0513",
"assets/AssetManifest.json": "ae9d9af1d2b350133144ed207d4e2724",
"assets/assets/mapa.jpg": "9f7a52edfedae6f33ceefa667e329f6f",
"assets/assets/map_style.json": "1bfd6749157dfbac30934e5778e1e682",
"assets/assets/OIP.jpg": "e43038a1fc600588410d448885df9e42",
"assets/assets/OIP.png": "d22d3c644cc75aeb9431e2239b584b8f",
"assets/assets/slika.png": "01976ff2f2327348a15ac525abf07e19",
"assets/assets/test1_1.png": "17570f4cd6efc2267978746763a49f26",
"assets/assets/testt.jpg": "7e69b98454b71e20309332e6b0de9c69",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "5f4e42015c92cf89231bb65ffe70ee35",
"assets/NOTICES": "c937c2c968c74752b9a9bfed28389c49",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/flutter_osm_plugin/assets/dynamic-styles.yaml": "1794faced72eaae2e42f3970e2f7bdff",
"assets/packages/flutter_osm_web/src/asset/map.html": "d7cd0c452e9c7e7f3956458d192924bc",
"assets/packages/flutter_osm_web/src/asset/map.js": "509711db7a1c6ef2efde773df29a567f",
"assets/packages/flutter_osm_web/src/asset/map_init.js": "2015aa560219ada6e8bbb721afc62159",
"assets/packages/flutter_osm_web/src/asset/map_leaflet.js": "a331079409eb3b5d7bf0d49e9b3368cc",
"assets/packages/routing_client_dart/src/assets/en.json": "006f10a887beeb7207fc58db61426a4e",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "7030d164275b78ecdbafcef12567bbf6",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e290560f4f66bb73a4bafcb32f3d110c",
"/": "e290560f4f66bb73a4bafcb32f3d110c",
"main.dart.js": "24c71e83987a9038d65e311f697b43fe",
"manifest.json": "55738b1cf08452213b6455f4c5c3128a",
"version.json": "9cf938698cec8e056d8558fcdc1ed50a"};
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
