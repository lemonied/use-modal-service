!function(){"use strict";var t="/use-modal-service/".replace(/([^/])$/,"$1/"),e=location.pathname,n=e.startsWith(t)&&decodeURI("/".concat(e.slice(t.length)));if(n){var a=document,c=a.head,r=a.createElement.bind(a),i=function(t,e,n){var a,c=e.r[t]||(null===(a=Object.entries(e.r).find((function(e){var n=e[0];return new RegExp("^".concat(n.replace(/\/:[^/]+/g,"/[^/]+").replace("/*","/.+"),"$")).test(t)})))||void 0===a?void 0:a[1]);return null==c?void 0:c.map((function(t){var a=e.f[t][1],c=e.f[t][0];return{type:c.split(".").pop(),url:"".concat(n.publicPath).concat(c),attrs:[["data-".concat(e.b),"".concat(e.p,":").concat(a)]]}}))}(n,{"p":"use-modal-service","b":"webpack","f":[["nm__dumi__dist__client__pages__Demo__index.578aa5c0.chunk.css",9],["nm__dumi__dist__client__pages__Demo__index.afd6ef02.async.js",9],["nm__dumi__dist__client__pages__404.8b85f2d9.chunk.css",65],["nm__dumi__dist__client__pages__404.eaf82cef.async.js",65],["nm__dumi__theme-default__layouts__DocLayout__index.2b8c39d9.async.js",519],["593.37264008.async.js",593],["776.e8c51481.chunk.css",776],["776.607f7c27.async.js",776],["ModalService__index.md.33be0665.chunk.css",900],["ModalService__index.md.3e4aaa7f.async.js",900],["903.18e550fd.async.js",903],["dumi__tmp-production__dumi__theme__ContextWrapper.91b96746.async.js",923],["docs__index.md.33be0665.chunk.css",935],["docs__index.md.e5db0aa3.async.js",935]],"r":{"/*":[2,3,4,6,7,11],"/":[5,10,12,13,4,6,7,11],"/~demos/:id":[0,1,11],"/components/modal-service":[5,8,9,10,4,6,7,11]}},{publicPath:"/use-modal-service/"});null==i||i.forEach((function(t){var e,n=t.type,a=t.url;if("js"===n)(e=r("script")).src=a,e.async=!0;else{if("css"!==n)return;(e=r("link")).href=a,e.rel="preload",e.as="style"}t.attrs.forEach((function(t){e.setAttribute(t[0],t[1]||"")})),c.appendChild(e)}))}}();