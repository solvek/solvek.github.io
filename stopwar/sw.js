if(!self.define){let s,e={};const i=(i,l)=>(i=new URL(i+".js",l).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(l,r)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let a={};const u=s=>i(s,n),o={module:{uri:n},exports:a,require:u};e[n]=Promise.all(l.map((s=>o[s]||u(s)))).then((s=>(r(...s),a)))}}define(["./workbox-f8b5deff"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"about_en.html",revision:"fc1557200de8fdc43b786cffa0defaa0"},{url:"about_uk.html",revision:"29b26d1aa9bf825922df263f8c994007"},{url:"assets/_...all_.0123f22c.js",revision:null},{url:"assets/_...all_.0e6ec599.css",revision:null},{url:"assets/404.16bb6fe7.css",revision:null},{url:"assets/404.9e1d2143.js",revision:null},{url:"assets/about_en.05013467.js",revision:null},{url:"assets/about_en.3b4a5826.css",revision:null},{url:"assets/about_uk.cf5b0ef8.js",revision:null},{url:"assets/app.87c0f83f.js",revision:null},{url:"assets/app.b3b30d9e.css",revision:null},{url:"assets/home.0c1bd0bc.js",revision:null},{url:"assets/home.8a7318a9.css",revision:null},{url:"assets/README.89d512ad.js",revision:null},{url:"assets/vendor.14329b36.js",revision:null},{url:"assets/virtual_pwa-register.01ce655f.js",revision:null},{url:"index.html",revision:"eb9f28246284297152ebad645d81c923"},{url:"readme.html",revision:"41408a323b1cdc62b11ad2294a5d5407"},{url:"favicon.svg",revision:"b860b5aaa65dce67b9d926a2443737e8"},{url:"safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"pwa-192x192.png",revision:"65f6c00ff3d88d8371df0480c1ba0272"},{url:"pwa-512x512.png",revision:"20a2db7d5040eb315e6acf49c6983de9"},{url:"manifest.webmanifest",revision:"3553d89d3d4b5398950edd02814ce8a7"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
