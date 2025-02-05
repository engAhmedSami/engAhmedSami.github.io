'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "f3b660be78b229cff65727655296b037",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "f1e541484146dbd9e561661f39c17486",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5998f036581ce3be5f3b36bcb568b958",
".git/logs/refs/heads/main": "47a4ae5ce24af8dfd80d35c9668c01df",
".git/logs/refs/remotes/origin/main": "79051f9b9123fa487118cd4a0deb853b",
".git/objects/01/69ccda700bb723050ba935277661fc7a554e31": "9331482d99dccd39b8d2e518cf3b590c",
".git/objects/02/d379985de129bf1118143f9405993014d84a88": "49a3fd720a605cdff3cce75df2a0f8a8",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/09/27b8133cfc1ed1c326677f8f1275fae4529606": "a610c88a483a5433f49298b8a9c2bfdc",
".git/objects/09/319f048339b71cbf81198091908823f3d9cb18": "f5a15c1b4e1a79df0feb2f3d4f74fbf2",
".git/objects/0a/2305548baa5a069ade7a4fea57ae3d1d5ca51d": "304579acca57ea5e4016e154fe400a4b",
".git/objects/0b/a2112ac9a34227b1a9dfd849e1dbe8f1e33eaf": "3fcd74a4d9eb52b3b171f41c133ba870",
".git/objects/11/e30f66c08b0114b9b5be75be998165c6268ae3": "307bc3f24fd8038b613615dfe3b9c576",
".git/objects/14/d86c7fb266be8e249b104b9f8d1dec95f2f56a": "9156a56115969dd017274f0a65b536f8",
".git/objects/15/83d04c29243f87f019292e92ea3604175e9fc4": "ea1110e07311d0c8ac6507d04d357329",
".git/objects/18/9ce9d0c60c76251cf57657cee1e3e068feaaab": "a4a9e29fbae182a03bbf2790b10f6b59",
".git/objects/1c/b6ba1ccc0d8ef4471feea4e95f36a6d019f08e": "66b0cf2de2efe3b55ef8f485b616d8d6",
".git/objects/1c/fa8e61876122d4f0b816606d7f2a8cb0801fdc": "323a962e478fcc4c9b48bf86abf704fd",
".git/objects/1d/14a013381c13545cceb8852be9d1d7fd5aa2bc": "fd55a31bc088b548371b6b1f3fb0970e",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/24/11d80449994e4d0139401d4e49c1d02c443979": "384a5d88052f11bd5f68aef67a4d32ca",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/2a/72a47b0fe8652f5041f81f0748ac2e76899ae0": "1e3a0a12224de6cd8dbdf9c0db304213",
".git/objects/2a/74d5febc1a1cabbc05a13c5dd9665615f17d61": "86204c7edbb4440cd579ca62d5bc623f",
".git/objects/2f/5c1bc816e95430d896b94d6dfd5de9b40281b5": "08f7fdc2283146d571f8c0f97605c01a",
".git/objects/31/1529205dfe60c972356f62401492a8cf6a7e76": "a6a0a434e589f7f13d300c15f93f405c",
".git/objects/35/db9fe45fbbf9f1efdb610b46d91628ab7d5818": "be27b2a0fc1eddef07b08b1e545f5200",
".git/objects/40/12225c0b220d0e1d67001daa7e01bba3df6953": "62a756494cd4486a4ac4ba6c10ccb080",
".git/objects/41/dc4d6b0428b7d6a2f7b6114a2943013ed816ac": "dc1e0371c0e25147364892c2eb05aa3a",
".git/objects/44/cdd94d5cefd6d8a7e165736cea51dff9b22159": "26d4302e9e43b2b85692badd03ec810a",
".git/objects/46/bd6baeca25ecc7a549ac83e804bb8727a941bf": "59342b3fb57b22a7d5ec62314df85853",
".git/objects/47/35c40c1f7078e4fbeb49e6ff57b98d0d37b9c2": "8367a2557253a4c965e856fe592f3a6c",
".git/objects/49/e7aa3eab2e7fa758e75e57bc81090ee6853f88": "6b1350e38f69333605ccf542ef094f6d",
".git/objects/4a/7c5351023bde5874113b587dfdf824078eb757": "b4eedb0c0a9ecf0750eb2fe59d4b2b90",
".git/objects/4c/4f94dd89e644369671fa2399ac21d14db51a3f": "55d2153878c8e263d63a0f03012982bb",
".git/objects/50/f66e3b741351bf2e44540a6ac49ec76d9a2552": "8d13c997449e812adc43199231e2a7c5",
".git/objects/51/01c999aa0fbeff57cdb4e9d99f44bb8b3feee3": "b24de0b9b24a753ee4bf53ea830f2227",
".git/objects/53/fe2a339f6c9b6fedf529768579c713f9648017": "210570ace084dbb1377cb75afd36207e",
".git/objects/54/4be31d80608b5697565027327d4a97c930873b": "10190aba2dd73f18c7a58ad2414b4916",
".git/objects/56/b2f62908658bc61a9a82c2547bd56a246be96f": "0f0f2bc5e0f8be26c12625ea743e45c6",
".git/objects/57/fbc6442b25ac49689ebab2cd02f3044b4689e2": "15fb6c9b185f3446d7f4dccecc263fc5",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/62/011079430a199605537ca342c0d3332715cea0": "e7d62c9f5fac66ad347903732330d452",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/6b/2b13fafb709f17f1c3216431f361aaeac6e471": "f05a095f2939ddd6188f0e3aed1a283a",
".git/objects/6b/46c87c3686f94e06042693e3c5afb50d9a1487": "ad46718bf8e213b535ebbaed9d401621",
".git/objects/6b/d2b262d9d085d7001198ca9d1b7ac2ea05257f": "3b43e422dc5ac6e03dcff12a1b9a2367",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/6e/2e10a812ea77a632705c12cd5867b0a4911e1b": "e8dbfaf60999dc66424fe4b357f7e8bb",
".git/objects/71/84e7e2c2bb51c8df6800d08246e41079b9a150": "5d6f807f7bf8eb9546c822e5ee1a541d",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/74/70b9b31e04fc7e3acac204a248b36a243682fc": "a84a9b9d944d55aa5ca9dec247fd52a4",
".git/objects/77/3d0a9fbe83bbb94f26c84ca9c53f113f4e1625": "362f4f24a81227e4a499b8ca2d81a497",
".git/objects/7b/2f371103073cf72af22959f6c0b73e27bd816f": "fc4d2faf9279ae430615cee379dc4279",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/7d/bb203cc512d0e26cc7c38fb29758dfc27e07a6": "519b8c79ecbddc657c7929638c7cc215",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/037bf5d7ba0be46c8cc8a2a5ac789aedd462c9": "41a08da082efeb918117552e934a6567",
".git/objects/8a/0976e4623ccf2391b8b8bc75977a0df41d9319": "7f1c1380cc2ea51a725cf9bd5ac4674a",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/e657a0258dda921aa8eea8a386a01c77423e49": "9960451752a5c634e417f7b751deb118",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/8d/9358d6ec1be38cdd134f4a60b1518c35e3363b": "886c3e85764afcc888146e09df35c980",
".git/objects/8d/ef83f17ca1eb58387cc12953d16b3901816f9f": "591c4af9a269392c0482aeeeabdfb89d",
".git/objects/90/d108b3dac75323039f3e6da8778b74418260e9": "712e7c1cff9fa12cd626be606fcb13b8",
".git/objects/91/66ba0b7ed2e58b962c9bf61355b24c17522d2b": "e2a360665f016098b889ace2e56ecf6e",
".git/objects/95/71459bada5d418624742f331be70051ed95cf5": "4df06c1aad395b3ab48c5828d14bc285",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/9c/b7741a627dbd36d79f6ba5b9707d8e0ebe3bc4": "b17af10c5aba32a207673698ed1faa92",
".git/objects/9c/ba5a544e416db5135b7c17dac102755122706e": "2a9d96e327531d2eee1f3fbbd04bc053",
".git/objects/a0/5270e901d148f539efa4886fd6d4c70669d15d": "fe05d319c4ce7a49352cdb75361f9f61",
".git/objects/a1/af1c132a0c39fa981deb531d5597120e938cc7": "d42ec1e364dfcb88fd9a83bf26a23a89",
".git/objects/ad/bddce1093e1e1a1ec0d6af90881e925253ddab": "f8677d8db12850bce6327fba9823372a",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b6/ea75aade7e4ebe96bbdc31b248aa7b98b58357": "a8ce0536377fef5428fdb6fc407bb750",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c1/a4ac8b9a7820906f8e01fe4da3e918b3ba3d7b": "8d7216781e64f7dd35af95d8f5c9af06",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c5/8e0d32d1a80fd878cafd39594caa4ce6aaadce": "b77635c49372a2c12183892c2abc4555",
".git/objects/c5/d2258ec435c7234a6e1e35b2c0a41c63170050": "54a73b57a1ca43b0f76d320281d4bd1a",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/cc/2f6eee00407b31e32304953d3084881b4fd7db": "ee346cf02e04ca642b65f97bc0784300",
".git/objects/d2/bb861adf519aa47a37380a429577577c554bec": "5995172e8f471bf7c70594c1333cc80a",
".git/objects/d2/cc080a52b7fe4fb7452993971fbb8090c7fc58": "ff171e9faf66d49a9864dca8df125882",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/b5621f8dab3027f04251be766dd5c2bdf1f12b": "062db0c956c2bc88099e4a8601d8c061",
".git/objects/d5/2b0b8e370088d617f0f6ea5b6d7bf78d7097af": "5d3b3c5b98fc410949943495998cfdc3",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/74b987981aaef9c9f4a6542dd49726db12d2e7": "e289c28d12c929f5839cacf3499a19e6",
".git/objects/dd/ee71210d451f2708a464543426c8c207344350": "fd7f4e326ea5530a4725a96565a598a2",
".git/objects/de/10227ced155741c18fc9098c9d1d57be0fbd45": "faf1b1e254ca9b96e1ee3cc58eb5545c",
".git/objects/de/d4ab0e0316046b9dc82bc53b821c574ed0b216": "d890c8f5254cb1fb31dd1961b7093ea4",
".git/objects/df/9da328ddea019c27c3f7513b732a5b7aeabc52": "233e506b4eaaf2728190700fdad2f3bb",
".git/objects/e0/1f646b3e25e4478e7eecbd74d38d168372c7d5": "597bf901e090cb6655c77411c4769706",
".git/objects/e1/6c9be150108df5f437323713b3e96811249592": "6882bbdf6da9a3b5ea3783fd1a336802",
".git/objects/e2/5e3d2621f686258f13b1a7c9c7b6e9b05b6391": "93a6d2a8478b46891768e73aecc1bb6a",
".git/objects/e9/21db1fc040629c8afdf15488b5f1a328dc28d5": "3bcc437bfc06f38bec3c1562b5808649",
".git/objects/ea/47af3764322c4df9fd03a026d829237d4f322c": "2f0f54f216d885a3be44099f75c043ca",
".git/objects/eb/72ca56fd829bca109367cdfeaf7eddb1578edd": "38f260ad08217182fe110b212ad87dd6",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/a266dd37d5066da46c9a6b8898073ae2930a64": "90c22367f91de9fd622ad04f0a5fd7c8",
".git/objects/f5/c9d91ca36a9cf5460f15d2c2fc789dc13405fc": "61e298ba97b0db0c6e034c10cd4297da",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/refs/heads/main": "8106afa90c6a0235006078e18b96089b",
".git/refs/remotes/origin/main": "8106afa90c6a0235006078e18b96089b",
"assets/AssetManifest.bin": "e3e04d6b3334bb070c8204791dcac96b",
"assets/AssetManifest.bin.json": "a4905340e395fbafa9328b59904504d9",
"assets/AssetManifest.json": "be65ab3150d91d090495eb3d9c53be11",
"assets/assets/fonts/Montserrat-Bold.ttf": "ed86af2ed5bbaf879e9f2ec2e2eac929",
"assets/assets/fonts/Montserrat-Medium.ttf": "bdb7ba651b7bdcda6ce527b3b6705334",
"assets/assets/fonts/Montserrat-Regular.ttf": "5e077c15f6e1d334dd4e9be62b28ac75",
"assets/assets/fonts/Montserrat-SemiBold.ttf": "cc10461cb5e0a6f2621c7179f4d6de17",
"assets/assets/image/flutterlogo.png": "6471bb55dd07e080a209111c63203d39",
"assets/assets/image/im.jpg": "43973102400a14864bb37a2979fcc872",
"assets/assets/image/inersqur.svg": "7952ab18e875d01a0dceacc1a233fbe9",
"assets/assets/image/outersqur.svg": "804b4d4fcef043772cc18da7f0b89ba4",
"assets/assets/videos/Doner.mp4": "2a355f9252d4e8bfa40e263066fdbd20",
"assets/assets/videos/NotesApp.mp4": "fd9a7b646c288a6eb7eb76f517f30147",
"assets/assets/videos/smartstore.mp4": "68df16cd70d4eaf12fad462b3af91b3b",
"assets/FontManifest.json": "8c9ec553984a58723893585ca1a3aa3e",
"assets/fonts/MaterialIcons-Regular.otf": "4df87ccf7e7600c54610231046ff236e",
"assets/NOTICES": "0e007a6c3d263e5a6a4098683f2f3bf4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "60e312239a6aa976a0b5d63ed33961ea",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "704c5669dc560d563ba29e98c0a36cdb",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "e5eec65992252c8c3fa17ab3a0fdcf3c",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "677e46a5ee8880783646ca8dab6a4099",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b3a089ab9fe29e08ea852386308c661d",
"/": "b3a089ab9fe29e08ea852386308c661d",
"main.dart.js": "d4d2d2d9e4f24376004afcb4b4c480bf",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"};
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
