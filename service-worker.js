"use strict";var precacheConfig=[["/index.html","77f14fa667beb080562b685e713f1ea2"],["/static/css/main.b3d69ed6.css","7b7ae4a65caac4a6d7343f6cb774276a"],["/static/js/main.97ed7817.js","fc9dd076acf2a07cc442ccfc4ce1b592"],["/static/media/1.7dfa2b82.svg","7dfa2b82e95a467a583709351176b0d5"],["/static/media/1.901a07dc.svg","901a07dca37b9daaf281197c9cb21f0c"],["/static/media/1.f928f911.svg","f928f911c69abc6667d4eb76e9c05616"],["/static/media/2.13df5b94.svg","13df5b94e0bddb94e0734ec4d6ee4742"],["/static/media/2.1ebefa22.svg","1ebefa22b37bd92486a28b2b9c46b124"],["/static/media/2.5ab10e7c.svg","5ab10e7c2deeb38fd0f0b545f28f28c8"],["/static/media/3.a9e4699c.svg","a9e4699c745f9eb0ce56001497e00f58"],["/static/media/3.df38070f.svg","df38070f6b73b76fe8a5d756ed06daa2"],["/static/media/3.ecbaeabe.svg","ecbaeabe38a66aaa8427cc21472fdf50"],["/static/media/4.0f5822e5.svg","0f5822e581cfef6ce144472a993b805c"],["/static/media/4.908cf5b8.svg","908cf5b8afae30cc0b84807dde9e17d3"],["/static/media/4.fc87b86e.svg","fc87b86e22928da1b568753a9c1ab826"],["/static/media/5.2ca5d12f.svg","2ca5d12f6e282f9171f083f88bd83e9f"],["/static/media/5.f7f6ca4d.svg","f7f6ca4d193511c03abfd8cf9fb18b57"],["/static/media/5.fec30089.svg","fec3008969184902fce9848808d22ffb"],["/static/media/5b05238fabbf26c7e7a31cdb_stars_mount.15373004.svg","153730041de57fd317665dd1f5a22e14"],["/static/media/6.3467ec0a.svg","3467ec0a38b42a1831570eca7dd2af2b"],["/static/media/6.792f24e2.svg","792f24e2be85b10e178e46e217335c2c"],["/static/media/6.b26d387c.svg","b26d387c18715c400a62bda9035332d3"],["/static/media/7.19769a12.svg","19769a125df62eb5de60665956f957f2"],["/static/media/7.60b74ea7.svg","60b74ea74987d4125e207305653e5292"],["/static/media/7.7bc92204.svg","7bc922044a137a906e0e8f91dace12ae"],["/static/media/Airat.dfa2f227.jpg","dfa2f22721857a5d65bf6598926e372c"],["/static/media/Amarpreet_Singh.afa7b4f8.c4c99e15.jpg","c4c99e1569df5f2964c35320779ff293"],["/static/media/Artur_Shamalov.4dc17f50.fce8505f.jpg","fce8505ff1d978554ca45482d57a098b"],["/static/media/Austin_Kimm.caf37ff2.f15ad830.jpg","f15ad83082d857620a7a9d4ee249fdd3"],["/static/media/Bitcoinexchangeguide.94e91e25.jpeg","94e91e2513a96dc06c409994c4ad44af"],["/static/media/Bogdan_Fiedur.e36a757d.c038a286.jpg","c038a2860e05e15804de1956e516a651"],["/static/media/BtcBit.e6384404.jpg","e6384404c179d5b3f246882cd54bc297"],["/static/media/Cryptoninjas.d85ff4eb.png","d85ff4eb9ec8fe81d6529c2b8d80f2ee"],["/static/media/DASHBOARD1111.00bda030.png","00bda030914a7a33bb3b0b6d5341c1c5"],["/static/media/DASHBOARD2222.b977dba7.png","b977dba76340438d9ad2f74b754af2cf"],["/static/media/Denis_Eskenazi.e8b0d64b.54ed2ea9.jpg","54ed2ea9d54e732418fbfc9a6c964b59"],["/static/media/Geometria-Bold.2718c69a.woff","2718c69a1474b2e2b04afb39c8e62e3f"],["/static/media/Geometria-Bold.5c1d517b.woff2","5c1d517bcf9e622ba0749a5abfd8c8c1"],["/static/media/Geometria-ExtraBold.1c18a8cb.woff","1c18a8cb2d75f27d7f4a00e5773bfc06"],["/static/media/Geometria-ExtraBold.5e0481e6.woff2","5e0481e6e6d7f31110f9c81919fa1d12"],["/static/media/Geometria-ExtraLight.5772de3a.woff2","5772de3adef96fa6d71da7c82cecf94a"],["/static/media/Geometria-ExtraLight.f405a7fa.woff","f405a7fa6bde6cba2cd3962060c72787"],["/static/media/Geometria-ExtraLightItalic.9e4b52e7.woff2","9e4b52e7e1260af0506f9d915b4e6ffe"],["/static/media/Geometria-ExtraLightItalic.f1d8fcc9.woff","f1d8fcc96293c7610aef044bd6a85556"],["/static/media/Geometria-Heavy.86c78b24.woff","86c78b24aa03145dff4576def89fafab"],["/static/media/Geometria-Heavy.ce1fa48a.woff2","ce1fa48a10e3253d5c41a2ad1cc41948"],["/static/media/Geometria-Light.1707b84c.woff","1707b84cc13511b162afccae1da3c002"],["/static/media/Geometria-Light.e0f9d649.woff2","e0f9d6492c7a3c6dc987a849fcb9cb10"],["/static/media/Geometria-Medium.21ffa855.woff","21ffa8553f379519ac5d80c38e039714"],["/static/media/Geometria-Medium.e370e8e3.woff2","e370e8e3219741663b5a172a00cdb2d2"],["/static/media/Geometria-MediumItalic.57ce1521.woff","57ce1521f55dbf28fa577a28b03c0f1d"],["/static/media/Geometria-MediumItalic.e384e329.woff2","e384e329ccaaad84c711f996cd5cd331"],["/static/media/Geometria.2fe5f750.woff2","2fe5f7508322d964c030e10156e43a14"],["/static/media/Geometria.413f36b0.woff","413f36b0dc9a4e6ef7cc07b5e4014a66"],["/static/media/Graham_Doggart.fd8f9df5.fd8f9df5.jpg","fd8f9df5adabd73382573e1fd1e0d346"],["/static/media/Greenberg.1e4ae914.png","1e4ae914bd51060a5419998a4cdd5c85"],["/static/media/Guy.f182b798.f182b798.gif","f182b798eadc7cb328887160d2290b77"],["/static/media/Ibraghim_Haniev.77b0aa4e.77b0aa4e.jpg","77b0aa4ea91c2d1d8f7d3136e05ecc23"],["/static/media/Innova8.43ea6a6d.png","43ea6a6d714247e900f14391da4c1220"],["/static/media/Jason_King.1e9fec3c.jpg","1e9fec3c11924941c90cb111a3c48eca"],["/static/media/Jelena_Karzetskaja.c9444c32.png","c9444c3262adabaaf78d8ed5b847ed4f"],["/static/media/Keith_Teare.1e7599ac.1e7599ac.jpg","1e7599ac6dc38cc6ce0979429d37dac0"],["/static/media/Leonard_Grayver.e1fe8696.png","e1fe86962ccfefb15a64fea95aefc294"],["/static/media/Mofassair_Hossain.11359d11.11359d11.jpg","11359d115e568660180b38c1d370940d"],["/static/media/Motti_Peer.4a23f02e.png","4a23f02eacd56cc64868f245110fb2ff"],["/static/media/Philip_Staehelin.49caf8a6.49caf8a6.jpg","49caf8a69d0651f76ff4822ee1320942"],["/static/media/Progressor_logo.8bf5431d.png","8bf5431d9eeb9e20f0780db26c577e86"],["/static/media/Rectangle_White_opacity.dccb52e1.png","dccb52e1bc819e6cf4c89c2358faabfa"],["/static/media/Sadie_Hutton.54ab2eaa.54ab2eaa.jpg","54ab2eaaf995eda90b79826504ae332e"],["/static/media/Sofja_Pevzner.4a0c81f1.jpg","4a0c81f1f808f561d5d59532d916a1f6"],["/static/media/Sun.132db634.svg","132db634ee060e2a38904261e7388353"],["/static/media/Tradingview.b23a6115.png","b23a6115beb6e5697cd1c9badcae4776"],["/static/media/Tyler_Sanford.5d35cd71.5d35cd71.jpg","5d35cd7111272e7891b125818dcc06d6"],["/static/media/Val_Jerdes.f8ab5be3.f8ab5be3.jpg","f8ab5be3926dd0c9a4a392136d6b8487"],["/static/media/Yellow Door.0ca0ea9b.png","0ca0ea9bb50101ad093a20856df3d9cf"],["/static/media/Yuriy_Avdeev.5aa55970.5aa55970.jpg","5aa55970c0e51f9673bd2e38c491d1b5"],["/static/media/bitcoin-icon.d6ff31a0.svg","d6ff31a0f07175f2e6b51c0efc6ec4ac"],["/static/media/bitcoingarden_logo.fe1f6765.png","fe1f6765d73111c321ff81ad11362815"],["/static/media/block_4_cont_3_img.012fb5fd.svg","012fb5fd8b933b6973dcc55275923060"],["/static/media/blockonomi-logo.9eae7e76.png","9eae7e76c1e3e00d51166751105398a2"],["/static/media/civic_logo_horz_BIG.8dc1faa7.png","8dc1faa7aa1114f0f834eab8a5c1c7b3"],["/static/media/crypto1.63507c2d.png","63507c2df86c10d2c4162ea0b209faa7"],["/static/media/crypto2.a128a5c5.png","a128a5c5b003a0de47a7471d31b7117a"],["/static/media/crypto3.108d32ca.png","108d32ca670121e3208bd6d0254bf68d"],["/static/media/facebook-icon.70fe6cc7.svg","70fe6cc7bdc52c7a32c89621090442c6"],["/static/media/finish_guy.cd7aa3d7.gif","cd7aa3d73bf41f4d2788e9f50aaa377b"],["/static/media/github-icon.956d3702.svg","956d37024f62e592be241a9ebf4b5944"],["/static/media/ico_promo.e4e6aac0.png","e4e6aac0b7d80a937db40e09dfb8ae2b"],["/static/media/instagram-icon.4f2dddd1.svg","4f2dddd13866bb51ec06ad4fe9864fa9"],["/static/media/investing.803de645.jpeg","803de645975e4fd6f0e1c18acd4ee397"],["/static/media/kabinka_2.1ee5cce3.8141993a.svg","8141993abd08d118ac2286a4fd8ddf8c"],["/static/media/kakaotalk-icon.080556ca.svg","080556ca01de18c0df85601dce529827"],["/static/media/linkedin-icon.7f050919.svg","7f0509198f325750d714ec4673db53b3"],["/static/media/mainBlock_screen.a178088d.png","a178088d7da3e4924e53ed475ec50858"],["/static/media/medium-icon.e4d40ceb.svg","e4d40ceb03284ca84e79a4b0dcb95669"],["/static/media/mockup1.bc9ef092.png","bc9ef0929252457cf848f1827bb5f1c0"],["/static/media/mockup2.562afb0f.png","562afb0f0f37d8034bd6935f862b87ca"],["/static/media/mockup3.4721703b.png","4721703b5fc0335c4de49ec8a2b4e93a"],["/static/media/mountain.00513e05.png","00513e05400cefd46743a4610a40cc2c"],["/static/media/mountain_new23.70fbb83c.99c61010.svg","99c6101036c9cda8c984d7fdb94c8ef2"],["/static/media/new_mainBlock_screen.394a5d2f.png","394a5d2f0cb1fa3ff351d2dc85335d05"],["/static/media/rating-holder.95645aa7.png","95645aa772e590f337640d7bf1c84039"],["/static/media/rating-icomarks.3422633f.png","3422633fdc70e3d5c95de4ae21ac0ea6"],["/static/media/rating-trackico.303709e5.png","303709e58bd8abe74e7e26106d9ad758"],["/static/media/reddit-icon.4132267b.svg","4132267baea6e73cc84844104c7d46a6"],["/static/media/roadMapLike.24642804.svg","246428046261a49df8e984e57c5c4887"],["/static/media/search-icon.accc683a.svg","accc683a757a3ef4d8963e6e0c1bb8a0"],["/static/media/sum_and_substance1.0146fead.png","0146feadfdf64155c89d455487e6fbb1"],["/static/media/team-legal.26626f81.png","26626f81d9d8591a5bc827eecfe4acb3"],["/static/media/telegram-icon.d90c8c33.svg","d90c8c33d7bf530ac3f9f9c52a4b6fde"],["/static/media/tokendesk.f020e026.png","f020e02658365daaaab452279de66fc2"],["/static/media/twigagroup.1754e365.png","1754e3654893aadcb53f4a7f96952eee"],["/static/media/twitter-icon.d3fda9b9.svg","d3fda9b96d7a302cf2fff350b15399ec"],["/static/media/wechat-icon.c27bedf1.svg","c27bedf1d311d2f6e84a552b15c666a8"],["/static/media/weibo-icon.df49a830.svg","df49a83022c2fb615a7648c3d7e89b05"],["/static/media/youtube-icon.b9235fdc.svg","b9235fdc5359bf568cb4e341eaf267e4"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=a),c.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,c,t){var d=new URL(e);return t&&d.pathname.match(t)||(d.search+=(d.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(c)),d.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var c=new URL(a).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,c){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return c.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],c=e[1],t=new URL(a,self.location),d=createCacheKey(t,hashParamName,c,/\.\w{8}\./);return[t.toString(),d]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(t){return setOfCachedUrls(t).then(function(c){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!c.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return t.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var c=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!c.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,c=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),t="index.html";(e=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,t),e=urlsToCacheKeys.has(c));var d="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(c=new URL(d,self.location).toString(),e=urlsToCacheKeys.has(c)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});