if(!self.define){let e,s={};const c=(c,a)=>(c=new URL(c+".js",a).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(a,n)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const r=e=>c(e,i),d={module:{uri:i},exports:t,require:r};s[i]=Promise.all(a.map((e=>d[e]||r(e)))).then((e=>(n(...e),t)))}}define(["./workbox-5f5b08d6"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/Img/about1.jpg",revision:"5cfddc15ebb6fb1301eb080bf1e827bb"},{url:"/Img/bg.jpg",revision:"7cb1de50534727977525e09a12ac9905"},{url:"/Img/dinner2.jpg",revision:"f684f4c56ad9a55c4a09bc03aae596d0"},{url:"/Img/logo_header.png",revision:"341fde5c64d5fc3a687cb5f90c87e23b"},{url:"/Img/logo_navbar.png",revision:"0a55c1cbd23f8d7d06314f3754ed8618"},{url:"/_next/static/chunks/1005-7e359bbecc535fa1.js",revision:"7e359bbecc535fa1"},{url:"/_next/static/chunks/2568-0fea311f7f978688.js",revision:"0fea311f7f978688"},{url:"/_next/static/chunks/2650-212ec4cda7e4940d.js",revision:"212ec4cda7e4940d"},{url:"/_next/static/chunks/3003-1c880b0aa290fe26.js",revision:"1c880b0aa290fe26"},{url:"/_next/static/chunks/3009-1a05e34bd4082eaa.js",revision:"1a05e34bd4082eaa"},{url:"/_next/static/chunks/3550-ec9e5d93537d1e86.js",revision:"ec9e5d93537d1e86"},{url:"/_next/static/chunks/3734.5df9453432ada35c.js",revision:"5df9453432ada35c"},{url:"/_next/static/chunks/3996-813f52b3a1974ec5.js",revision:"813f52b3a1974ec5"},{url:"/_next/static/chunks/4104-dcfdde3daf3ec4c3.js",revision:"dcfdde3daf3ec4c3"},{url:"/_next/static/chunks/4334-b2c108d059cc095d.js",revision:"b2c108d059cc095d"},{url:"/_next/static/chunks/486-ce41513916cfae6a.js",revision:"ce41513916cfae6a"},{url:"/_next/static/chunks/5238-9936008776e52cbf.js",revision:"9936008776e52cbf"},{url:"/_next/static/chunks/5644-26a422c64b6ed321.js",revision:"26a422c64b6ed321"},{url:"/_next/static/chunks/5675-dfc2d39ed098fdcd.js",revision:"dfc2d39ed098fdcd"},{url:"/_next/static/chunks/6994-a0701aed6586eff0.js",revision:"a0701aed6586eff0"},{url:"/_next/static/chunks/7235-83e15e20e041d1cf.js",revision:"83e15e20e041d1cf"},{url:"/_next/static/chunks/7374-b643e926f1f1ac21.js",revision:"b643e926f1f1ac21"},{url:"/_next/static/chunks/7536-e1a8f2b8b4a0f668.js",revision:"e1a8f2b8b4a0f668"},{url:"/_next/static/chunks/7774-a383580421952872.js",revision:"a383580421952872"},{url:"/_next/static/chunks/848-0ba2efa5a816a702.js",revision:"0ba2efa5a816a702"},{url:"/_next/static/chunks/8619-a3591b9a1acc3cbd.js",revision:"a3591b9a1acc3cbd"},{url:"/_next/static/chunks/9069-18623d5ad6513ff5.js",revision:"18623d5ad6513ff5"},{url:"/_next/static/chunks/9634-06087b5c5774dcba.js",revision:"06087b5c5774dcba"},{url:"/_next/static/chunks/9681-d6fecd35a95f660a.js",revision:"d6fecd35a95f660a"},{url:"/_next/static/chunks/9804-5c3c87f452ff4354.js",revision:"5c3c87f452ff4354"},{url:"/_next/static/chunks/9879-d491ace74805ee9c.js",revision:"d491ace74805ee9c"},{url:"/_next/static/chunks/9963-5c3020c5bd2710b6.js",revision:"5c3020c5bd2710b6"},{url:"/_next/static/chunks/fec483df-1207b90593e46c15.js",revision:"1207b90593e46c15"},{url:"/_next/static/chunks/framework-a070cbfff3c750c5.js",revision:"a070cbfff3c750c5"},{url:"/_next/static/chunks/main-c640c4e05fd0a272.js",revision:"c640c4e05fd0a272"},{url:"/_next/static/chunks/pages/404-11f5ce15ec39d070.js",revision:"11f5ce15ec39d070"},{url:"/_next/static/chunks/pages/500-4e4ab07208c71e24.js",revision:"4e4ab07208c71e24"},{url:"/_next/static/chunks/pages/_app-ebc1a8e602a79c36.js",revision:"ebc1a8e602a79c36"},{url:"/_next/static/chunks/pages/_error-7891c9bfcd7b3e53.js",revision:"7891c9bfcd7b3e53"},{url:"/_next/static/chunks/pages/admin/dashboard-3cab2adbf339bb8a.js",revision:"3cab2adbf339bb8a"},{url:"/_next/static/chunks/pages/admin/pedidos-516abc8ba16dee36.js",revision:"516abc8ba16dee36"},{url:"/_next/static/chunks/pages/admin/productos-48800ee08f4a58ad.js",revision:"48800ee08f4a58ad"},{url:"/_next/static/chunks/pages/admin/reservas-512efb4adca68164.js",revision:"512efb4adca68164"},{url:"/_next/static/chunks/pages/admin/usuarios-a4fee1e9c106482e.js",revision:"a4fee1e9c106482e"},{url:"/_next/static/chunks/pages/alerta-9b3464cd1aa4d56a.js",revision:"9b3464cd1aa4d56a"},{url:"/_next/static/chunks/pages/auth/login-1ef65b8cab36c740.js",revision:"1ef65b8cab36c740"},{url:"/_next/static/chunks/pages/auth/register-312fc33d737428a5.js",revision:"312fc33d737428a5"},{url:"/_next/static/chunks/pages/cart-89388638acf76c3f.js",revision:"89388638acf76c3f"},{url:"/_next/static/chunks/pages/cart/empty-19eaad23433843cf.js",revision:"19eaad23433843cf"},{url:"/_next/static/chunks/pages/checkout/address-111ca56b7156dfc0.js",revision:"111ca56b7156dfc0"},{url:"/_next/static/chunks/pages/checkout/summary/domicilio-688f39258d1ccb31.js",revision:"688f39258d1ccb31"},{url:"/_next/static/chunks/pages/checkout/summary/local-d2fde4b36581f8d8.js",revision:"d2fde4b36581f8d8"},{url:"/_next/static/chunks/pages/checkout/summary/reservacion-6a3dd857a4f527e8.js",revision:"6a3dd857a4f527e8"},{url:"/_next/static/chunks/pages/cliente-057d3f1a6ed076af.js",revision:"057d3f1a6ed076af"},{url:"/_next/static/chunks/pages/cliente/direcciones-a69409388bfb994e.js",revision:"a69409388bfb994e"},{url:"/_next/static/chunks/pages/cliente/ordenes-c3ed46a53e5ea1e5.js",revision:"c3ed46a53e5ea1e5"},{url:"/_next/static/chunks/pages/index-fb700571dec52fc1.js",revision:"fb700571dec52fc1"},{url:"/_next/static/chunks/pages/menu-30c35e3ce7aef0d9.js",revision:"30c35e3ce7aef0d9"},{url:"/_next/static/chunks/pages/menu/%5Bcategory%5D-9e9522c43aebaf23.js",revision:"9e9522c43aebaf23"},{url:"/_next/static/chunks/polyfills-0d1b80a048d4787e.js",revision:"40ccea369337cec877151c906f22814d"},{url:"/_next/static/chunks/webpack-742c92e144d21317.js",revision:"742c92e144d21317"},{url:"/_next/static/css/2aecd799f5326abb.css",revision:"2aecd799f5326abb"},{url:"/_next/static/css/485ba319ed59458c.css",revision:"485ba319ed59458c"},{url:"/_next/static/css/592e49c2a1185f2b.css",revision:"592e49c2a1185f2b"},{url:"/_next/static/css/64e9afd02822afb9.css",revision:"64e9afd02822afb9"},{url:"/_next/static/css/c0b127b9f18ee20e.css",revision:"c0b127b9f18ee20e"},{url:"/_next/static/css/c22c52f90e63c5bd.css",revision:"c22c52f90e63c5bd"},{url:"/_next/static/css/c2bfcde05b687f2d.css",revision:"c2bfcde05b687f2d"},{url:"/_next/static/css/cdb1397743d75298.css",revision:"cdb1397743d75298"},{url:"/_next/static/css/cff060282c853de7.css",revision:"cff060282c853de7"},{url:"/_next/static/i7aM_k-MSNVPBTjt7FXfx/_buildManifest.js",revision:"e14a3b6f44556628b80b372f9d9d40d2"},{url:"/_next/static/i7aM_k-MSNVPBTjt7FXfx/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/about1.4ca7d853.jpg",revision:"5cfddc15ebb6fb1301eb080bf1e827bb"},{url:"/_next/static/media/dinner2.47b2541d.jpg",revision:"f684f4c56ad9a55c4a09bc03aae596d0"},{url:"/_next/static/media/logo_header.f935a731.png",revision:"341fde5c64d5fc3a687cb5f90c87e23b"},{url:"/_next/static/media/logo_navbar.2b851c3a.png",revision:"0a55c1cbd23f8d7d06314f3754ed8618"},{url:"/favicon.ico",revision:"bba528efece18de8f7eb1646cfa365c0"},{url:"/icons/android-chrome-192x192.png",revision:"a7f7b6570899edbfdc972302211c7822"},{url:"/icons/android-chrome-512x512.png",revision:"05cc7fafa491f5524307b584d819fc56"},{url:"/icons/android-chrome-maskable-512x512.png",revision:"e60dbf602fd3730b7c2daa7de66a2d01"},{url:"/icons/apple-touch-icon.png",revision:"b49c6406b20e585d2962f2405de46b89"},{url:"/icons/icon-144x144.png",revision:"826400c4dd53b1c6b0c8bf26af920a9f"},{url:"/icons/icon-192x192.png",revision:"249d728867a306012d2fd7ad36af213b"},{url:"/icons/icon-36x36.png",revision:"31746374b3805277dac085268473d718"},{url:"/icons/icon-48x48.png",revision:"56d78907a47aa7f8050f664885b7234e"},{url:"/icons/icon-512x512.png",revision:"3470327d871e600ce25d8ff298c5d9de"},{url:"/icons/icon-72x72.png",revision:"85978c13e319116a1bf6bbf569b98914"},{url:"/icons/icon-96x96.png",revision:"75ca5e7d6221a4a697277d24d051b7b7"},{url:"/icons/maskable.png",revision:"4f8c7779a6dfa5795d0ffa29aff177a2"},{url:"/manifest.json",revision:"19d7c46a7efa8591ab028a33e33131c2"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:c,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
