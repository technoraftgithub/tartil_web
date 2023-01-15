'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "80004db74b297d6fa951bd316970460c",
"index.html": "53298a7328a4906ff15701bec8eb6207",
"/": "53298a7328a4906ff15701bec8eb6207",
"main.dart.js": "ea9576080425c71899ae1ddd481b83f2",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "8c52d02840bc5c10bc050ea95d7b8313",
"assets/AssetManifest.json": "829f99714c2b9e9cb24c809c7819bd59",
"assets/NOTICES": "abefa1206040c98cd76ef176db76117e",
"assets/FontManifest.json": "b3a912755d9d041ee5cff33a8e018a98",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/easy_localization/i18n/ar-DZ.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/en.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/packages/easy_localization/i18n/en-US.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/packages/easy_localization/i18n/ar.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/shaders/ink_sparkle.frag": "2e3fd67496da5312b81d180737aaedc7",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/translation/en.json": "b91bda7b0dd21d152852369832b67eb2",
"assets/assets/translation/ar.json": "1a0def0c8f8ba2a669b651ca08009a63",
"assets/assets/images/Background.svg": "ffbdc63e72ada7ff8fbbd3063287a4e0",
"assets/assets/images/subscriptions_active.svg": "97b021e829fdb0d9f5cbfac2d17c0378",
"assets/assets/images/Iconly-Curved-Notification.svg": "c44eced067f15e8d7e8bb50a3e066656",
"assets/assets/images/edit_profile.svg": "ba05e75ff2cbd90fe77406c098fab0ce",
"assets/assets/images/previous_session_Active.svg": "7faf1f6dc75345c3568890f6aebe8b17",
"assets/assets/images/Fb_Ic.svg": "5d0bd1bed848cdd1e567f7f1721c1a27",
"assets/assets/images/package_prices_active.svg": "337f9282e462e64fd6c398dd56b7e4b9",
"assets/assets/images/Student_Img.svg": "0cdb79b315937dae6ad181362c1a89f0",
"assets/assets/images/Layer2.png": "ba3d1ea842e3e1de8d0d1d6d482e257b",
"assets/assets/images/edit_profile_ic.svg": "1a9a056113ff05d6c39dcc3801b1040f",
"assets/assets/images/home.svg": "ba8788e9eab5835713ec1004ccbbe9ca",
"assets/assets/images/Asset%25201.svg": "07b7b7d8b507ca49933faca8296adf91",
"assets/assets/images/virtual_session.svg": "a0662778e71453020055864408eb17eb",
"assets/assets/images/Session.svg": "6124e4b86166f732c689c727192a2206",
"assets/assets/images/Profile%2520Photo@2x.png": "d058cb98b626780398417c708a981ede",
"assets/assets/images/Session_Ic.svg": "10b613268f0660599c5e039de5b9b9c2",
"assets/assets/images/Money%2520bag_IC.svg": "fe82af5990547cefba9f042e0c74cb8c",
"assets/assets/images/Last%2520Sub_Ic%2520-My%2520Students%2520Screen.svg": "898b7b98acdf75407a92e59bd74ac338",
"assets/assets/images/Telephone_Ic.svg": "acec0db315e9f37a4dbe99c0cb9fb5d2",
"assets/assets/images/Iconly-Curved-Send.svg": "9c78049cc737bd6163b8ae12e42b49ec",
"assets/assets/images/TeacherPhoto.png": "7847e344e21355af6109a86f4d97863e",
"assets/assets/images/Map.png": "ccf9d2e7a93e95d9d9805112b521ee38",
"assets/assets/images/website.svg": "4062fd79cab8a9369cd498cd6fe4c75b",
"assets/assets/images/undraw_handcrafts_pinned_file.svg": "3dbb56d1e934978aee7061a6ad094ba5",
"assets/assets/images/time.svg": "ec0acc3aabf8a2401ddf9486abfdfa6a",
"assets/assets/images/incoming.svg": "0b7143e247dbd14de7eb06476efbb23e",
"assets/assets/images/students.svg": "586f13ffbdaaeed6238c9f4e41d4115d",
"assets/assets/images/My%2520Students_Ic-Active.svg": "447bc477956920833f35a52aebf7fae1",
"assets/assets/images/booking.svg": "64df6e2ad3eca179386cf79729b09dff",
"assets/assets/images/layer1.svg": "9eb22a2da3dfade2a67240ce28c09997",
"assets/assets/images/subscriptions.svg": "0d2bd81c2ba26402ca30fd31a3d8328d",
"assets/assets/images/warning.svg": "066656ab580f3ddcd3f82ff0842788ae",
"assets/assets/images/Background.png": "24ac2316e949d9b4dfe6082578b058de",
"assets/assets/images/previous_session.svg": "838dd2f680b512128e264b34f2694633",
"assets/assets/images/menu_open.svg": "5653b1e04a662031b886425119374409",
"assets/assets/images/Bookings_Ic%2520active.svg": "bc7c738cc5d703e16a3e45b209a76ccf",
"assets/assets/images/teacher_time.png": "f22098318799602e5bd7427cfd0689ff",
"assets/assets/images/logo_meanu.png": "ffafadd5d866d15715acc1f3a4dd4bf5",
"assets/assets/images/welcome.svg": "ef5829765dc4db0a6a2f3c87ce0109fe",
"assets/assets/images/Teacher_Img.svg": "66d71da28a79b16173cbe07e0d9733ff",
"assets/assets/images/Profile_Ic.svg": "c2a11c3d89cb9a974de5f13fe4bbb86a",
"assets/assets/images/Group%25204589.svg": "23cfc8b7ea982a09e463785a427f4731",
"assets/assets/images/LinkedIn_Ic.png": "f218bb23dd91e9c70db00a14c98f89da",
"assets/assets/images/modern-elegant-gold-certificate-template-with-badge_91489-306.svg": "43e42d727fb0a07ff596b44467c88bec",
"assets/assets/images/teacher_time_actve.svg": "bb9f1a20aeb414a4b6b6fa07adffe5ff",
"assets/assets/images/Contact%2520Us_Ic%2520active.svg": "38d7065ec5c74b46b56c59b7d6e593ea",
"assets/assets/images/notification.svg": "657a86a7598d2d9b9244ec4d62fa6574",
"assets/assets/images/send.svg": "4fda580741ecd3b31506b0c5a54ee032",
"assets/assets/images/facebook.svg": "7a796901a2279c2264af655de38272d9",
"assets/assets/images/profile_pic.png": "a0b8d1f3a4814a7cd1c519f0014bda7e",
"assets/assets/images/Logo.png": "2346f759cf3fe7d3c1bf1a905de8d563",
"assets/assets/images/google.svg": "577c3abd2734a951e177960a516dc93b",
"assets/assets/images/Profile%2520Cover.svg": "fbeacd452b2029d8ab8bc8caf01ebb2b",
"assets/assets/images/incoming_active.svg": "1db5747d7e9c212192fe4ed95a9fc548",
"assets/assets/images/contact_us.svg": "a7e6f1b58389b1af12b45d0354d513a6",
"assets/assets/images/common.svg": "ac184f57318461b206e2a2e4a5392490",
"assets/assets/images/session_icon.svg": "9164820bbb2718733583880aed455f21",
"assets/assets/images/Package%2520Prices_Ic.svg": "d3a013fa22fe2c346283b8239c19fde9",
"assets/assets/images/language.svg": "073847798939866d8664832639e095cd",
"assets/assets/images/app_logo.svg": "348f4e2e772d03fc24b3eaa7b130b7cb",
"assets/assets/images/Delete.svg": "8c2a8cae1c949a5212ea89c3244ad6b3",
"assets/assets/images/Insta_Ic.svg": "f2514c72677acdf4f0b46cd61587f0d7",
"assets/assets/images/Phone_Ic.svg": "a181a3078906468120eee8a83c7065d7",
"assets/assets/images/Calender_Ic%2520-My%2520Students%2520Screen.svg": "85708422df06d5695b1014242e22ba85",
"assets/assets/images/telephone.png": "d4a1905ec88ae5240dc66285767f7fc8",
"assets/assets/images/switch.svg": "b2aa9ae145c17f321cd1b1b34c6e3eae",
"assets/assets/images/error.svg": "baa3a0ccd9c20bd3afdb66b21c3a8c0d",
"assets/assets/images/upload.svg": "8f98653d20835fc00eb01632572a0cf8",
"assets/assets/images/Logo.svg": "ed97b364c88de5c559f73809e8156cd4",
"assets/assets/images/Warning_Ic%2520-%2520MyStudents.svg": "ce1f8dddf9bb19ec4a03762e361b40e6",
"assets/assets/images/time%2520picker.svg": "e9d98d7bb267dc4b6c7ef16dfb58f1ab",
"assets/assets/images/icon2.svg": "e4a77f221426a451efe2fe0ff7d60a92",
"assets/assets/images/Teacher%2520Photo.png": "9a77b1711adc01ee630a9376f35ee096",
"assets/assets/images/Whatsapp_Ic.svg": "0f54c0110e35c8eeb3b40f8e7d2183c7",
"assets/assets/images/Profile_Ic%2520active.svg": "1149c0d491040802057ae31dc826573a",
"assets/assets/images/arrow_down.png": "66a9e3101238ec622945a1e4fdcb47be",
"assets/assets/images/icon3.svg": "858727a7a6ab0c5902cce1611915d0e6",
"assets/assets/images/students_active.svg": "0efa12651b46af8b02ccb7adbe003d74",
"assets/assets/images/favourit.svg": "ca07272ca17b5477aea12001afc9f818",
"assets/assets/images/Website_Ic.svg": "4062fd79cab8a9369cd498cd6fe4c75b",
"assets/assets/images/LinkedIn_Ic.svg": "56a1cf91503afc4c50021943af9f262c",
"assets/assets/images/icon1.svg": "fcac3b488211801a4418d88d27403c92",
"assets/assets/images/My%2520Students_Ic.svg": "c2d6575f071771c5e410b8d87e493966",
"assets/assets/fonts/DINNextLTArabic-Regular-2.ttf": "61b1e04ff205cd324350749648fe16fc",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
