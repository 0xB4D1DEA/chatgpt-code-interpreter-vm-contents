Content: (self["webpackChunk_jupyterlab_application_top"]=self["webpackChunk_jupyterlab_application_top"]||[]).push([[8580],{81899:(e,n,r)=>{"use strict";r.d(n,{Z:()=>s});var o=r(94015);var t=r.n(o);var a=r(23645);var c=r.n(a);var i=c()(t());i.push([e.id,"/* neo theme for codemirror */\n\n/* Color scheme */\n\n.cm-s-neo.CodeMirror {\n  background-color:#ffffff;\n  color:#2e383c;\n  line-height:1.4375;\n}\n.cm-s-neo .cm-comment { color:#75787b; }\n.cm-s-neo .cm-keyword, .cm-s-neo .cm-property { color:#1d75b3; }\n.cm-s-neo .cm-atom,.cm-s-neo .cm-number { color:#75438a; }\n.cm-s-neo .cm-node,.cm-s-neo .cm-tag { color:#9c3328; }\n.cm-s-neo .cm-string { color:#b35e14; }\n.cm-s-neo .cm-variable,.cm-s-neo .cm-qualifier { color:#047d65; }\n\n\n/* Editor styling */\n\n.cm-s-neo pre {\n  padding:0;\n}\n\n.cm-s-neo .CodeMirror-gutters {\n  border:none;\n  border-right:10px solid transparent;\n  background-color:transparent;\n}\n\n.cm-s-neo .CodeMirror-linenumber {\n  padding:0;\n  color:#e0e2e5;\n}\n\n.cm-s-neo .CodeMirror-guttermarker { color: #1d75b3; }\n.cm-s-neo .CodeMirror-guttermarker-subtle { color: #e0e2e5; }\n\n.cm-s-neo .CodeMirror-cursor {\n  width: auto;\n  border: 0;\n  background: rgba(155,157,162,0.37);\n  z-index: 1;\n}\n","",{version:3,sources:["webpack://./node_modules/codemirror/theme/neo.css"],names:[],mappings:"AAAA,6BAA6B;;AAE7B,iBAAiB;;AAEjB;EACE,wBAAwB;EACxB,aAAa;EACb,kBAAkB;AACpB;AACA,wBAAwB,aAAa,EAAE;AACvC,gDAAgD,aAAa,EAAE;AAC/D,0CAA0C,aAAa,EAAE;AACzD,uCAAuC,aAAa,EAAE;AACtD,uBAAuB,aAAa,EAAE;AACtC,iDAAiD,aAAa,EAAE;;;AAGhE,mBAAmB;;AAEnB;EACE,SAAS;AACX;;AAEA;EACE,WAAW;EACX,mCAAmC;EACnC,4BAA4B;AAC9B;;AAEA;EACE,SAAS;EACT,aAAa;AACf;;AAEA,qCAAqC,cAAc,EAAE;AACrD,4CAA4C,cAAc,EAAE;;AAE5D;EACE,WAAW;EACX,SAAS;EACT,kCAAkC;EAClC,UAAU;AACZ",sourcesContent:["/* neo theme for codemirror */\n\n/* Color scheme */\n\n.cm-s-neo.CodeMirror {\n  background-color:#ffffff;\n  color:#2e383c;\n  line-height:1.4375;\n}\n.cm-s-neo .cm-comment { color:#75787b; }\n.cm-s-neo .cm-keyword, .cm-s-neo .cm-property { color:#1d75b3; }\n.cm-s-neo .cm-atom,.cm-s-neo .cm-number { color:#75438a; }\n.cm-s-neo .cm-node,.cm-s-neo .cm-tag { color:#9c3328; }\n.cm-s-neo .cm-string { color:#b35e14; }\n.cm-s-neo .cm-variable,.cm-s-neo .cm-qualifier { color:#047d65; }\n\n\n/* Editor styling */\n\n.cm-s-neo pre {\n  padding:0;\n}\n\n.cm-s-neo .CodeMirror-gutters {\n  border:none;\n  border-right:10px solid transparent;\n  background-color:transparent;\n}\n\n.cm-s-neo .CodeMirror-linenumber {\n  padding:0;\n  color:#e0e2e5;\n}\n\n.cm-s-neo .CodeMirror-guttermarker { color: #1d75b3; }\n.cm-s-neo .CodeMirror-guttermarker-subtle { color: #e0e2e5; }\n\n.cm-s-neo .CodeMirror-cursor {\n  width: auto;\n  border: 0;\n  background: rgba(155,157,162,0.37);\n  z-index: 1;\n}\n"],sourceRoot:""}]);const s=i},23645:e=>{"use strict";e.exports=function(e){var n=[];n.toString=function n(){return this.map((function(n){var r=e(n);if(n[2]){return"@media ".concat(n[2]," {").concat(r,"}")}return r})).join("")};n.i=function(e,r,o){if(typeof e==="string"){e=[[null,e,""]]}var t={};if(o){for(var a=0;a<this.length;a++){var c=this[a][0];if(c!=null){t[c]=true}}}for(var i=0;i<e.length;i++){var s=[].concat(e[i]);if(o&&t[s[0]]){continue}if(r){if(!s[2]){s[2]=r}else{s[2]="".concat(r," and ").concat(s[2])}}n.push(s)}};return n}},94015:e=>{"use strict";function n(e,n){return c(e)||a(e,n)||o(e,n)||r()}function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(e,n){if(!e)return;if(typeof e==="string")return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor)r=e.constructor.name;if(r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(e,n)}function t(e,n){if(n==null||n>e.length)n=e.length;for(var r=0,o=new Array(n);r<n;r++){o[r]=e[r]}return o}function a(e,n){var r=e&&(typeof Symbol!=="undefined"&&e[Symbol.iterator]||e["@@iterator"]);if(r==null)return;var o=[];var t=true;var a=false;var c,i;try{for(r=r.call(e);!(t=(c=r.next()).done);t=true){o.push(c.value);if(n&&o.length===n)break}}catch(s){a=true;i=s}finally{try{if(!t&&r["return"]!=null)r["return"]()}finally{if(a)throw i}}return o}function c(e){if(Array.isArray(e))return e}e.exports=function e(r){var o=n(r,4),t=o[1],a=o[3];if(typeof btoa==="function"){var c=btoa(unescape(encodeURIComponent(JSON.stringify(a))));var i="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c);var s="/*# ".concat(i," */");var u=a.sources.map((function(e){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(e," */")}));return[t].concat(u).concat([s]).join("\n")}return[t].join("\n")}},78580:(e,n,r)=>{"use strict";r.r(n);r.d(n,{default:()=>s});var o=r(93379);var t=r.n(o);var a=r(81899);var c={};c.insert="head";c.singleton=false;var i=t()(a.Z,c);const s=a.Z.locals||{}},93379:(e,n,r)=>{"use strict";var o=function e(){var n;return function e(){if(typeof n==="undefined"){n=Boolean(window&&document&&document.all&&!window.atob)}return n}}();var t=function e(){var n={};return function e(r){if(typeof n[r]==="undefined"){var o=document.querySelector(r);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement){try{o=o.contentDocument.head}catch(t){o=null}}n[r]=o}return n[r]}}();var a=[];function c(e){var n=-1;for(var r=0;r<a.length;r++){if(a[r].identifier===e){n=r;break}}return n}function i(e,n){var r={};var o=[];for(var t=0;t<e.length;t++){var i=e[t];var s=n.base?i[0]+n.base:i[0];var u=r[s]||0;var l="".concat(s," ").concat(u);r[s]=u+1;var A=c(l);var f={css:i[1],media:i[2],sourceMap:i[3]};if(A!==-1){a[A].references++;a[A].updater(f)}else{a.push({identifier:l,updater:p(f,n),references:1})}o.push(l)}return o}function s(e){var n=document.createElement("style");var o=e.attributes||{};if(typeof o.nonce==="undefined"){var a=true?r.nc:0;if(a){o.nonce=a}}Object.keys(o).forEach((function(e){n.setAttribute(e,o[e])}));if(typeof e.insert==="function"){e.insert(n)}else{var c=t(e.insert||"head");if(!c){throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.")}c.appendChild(n)}return n}function u(e){if(e.parentNode===null){return false}e.parentNode.removeChild(e)}var l=function e(){var n=[];return function e(r,o){n[r]=o;return n.filter(Boolean).join("\n")}}();function A(e,n,r,o){var t=r?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet){e.styleSheet.cssText=l(n,t)}else{var a=document.createTextNode(t);var c=e.childNodes;if(c[n]){e.removeChild(c[n])}if(c.length){e.insertBefore(a,c[n])}else{e.appendChild(a)}}}function f(e,n,r){var o=r.css;var t=r.media;var a=r.sourceMap;if(t){e.setAttribute("media",t)}else{e.removeAttribute("media")}if(a&&typeof btoa!=="undefined"){o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")}if(e.styleSheet){e.styleSheet.cssText=o}else{while(e.firstChild){e.removeChild(e.firstChild)}e.appendChild(document.createTextNode(o))}}var d=null;var m=0;function p(e,n){var r;var o;var t;if(n.singleton){var a=m++;r=d||(d=s(n));o=A.bind(null,r,a,false);t=A.bind(null,r,a,true)}else{r=s(n);o=f.bind(null,r,n);t=function e(){u(r)}}o(e);return function n(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap){return}o(e=r)}else{t()}}}e.exports=function(e,n){n=n||{};if(!n.singleton&&typeof n.singleton!=="boolean"){n.singleton=o()}e=e||[];var r=i(e,n);return function e(o){o=o||[];if(Object.prototype.toString.call(o)!=="[object Array]"){return}for(var t=0;t<r.length;t++){var s=r[t];var u=c(s);a[u].references--}var l=i(o,n);for(var A=0;A<r.length;A++){var f=r[A];var d=c(f);if(a[d].references===0){a[d].updater();a.splice(d,1)}}r=l}}}}]);
//# sourceMappingURL=8580.974138f8b6ddb72035f9.js.map?v=974138f8b6ddb72035f9
================================================================================
