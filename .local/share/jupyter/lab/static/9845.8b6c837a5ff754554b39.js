Content: (self["webpackChunk_jupyterlab_application_top"]=self["webpackChunk_jupyterlab_application_top"]||[]).push([[9845],{31259:(e,n,r)=>{"use strict";r.d(n,{Z:()=>s});var t=r(94015);var o=r.n(t);var c=r(23645);var i=r.n(c);var a=i()(o());a.push([e.id,"/*\n\n    Name:       yeti\n    Author:     Michael Kaminsky (http://github.com/mkaminsky11)\n\n    Original yeti color scheme by Jesse Weed (https://github.com/jesseweed/yeti-syntax)\n\n*/\n\n\n.cm-s-yeti.CodeMirror {\n  background-color: #ECEAE8 !important;\n  color: #d1c9c0 !important;\n  border: none;\n}\n\n.cm-s-yeti .CodeMirror-gutters {\n  color: #adaba6;\n  background-color: #E5E1DB;\n  border: none;\n}\n.cm-s-yeti .CodeMirror-cursor { border-left: solid thin #d1c9c0; }\n.cm-s-yeti .CodeMirror-linenumber { color: #adaba6; }\n.cm-s-yeti.CodeMirror-focused div.CodeMirror-selected { background: #DCD8D2; }\n.cm-s-yeti .CodeMirror-line::selection, .cm-s-yeti .CodeMirror-line > span::selection, .cm-s-yeti .CodeMirror-line > span > span::selection { background: #DCD8D2; }\n.cm-s-yeti .CodeMirror-line::-moz-selection, .cm-s-yeti .CodeMirror-line > span::-moz-selection, .cm-s-yeti .CodeMirror-line > span > span::-moz-selection { background: #DCD8D2; }\n.cm-s-yeti span.cm-comment { color: #d4c8be; }\n.cm-s-yeti span.cm-string, .cm-s-yeti span.cm-string-2 { color: #96c0d8; }\n.cm-s-yeti span.cm-number { color: #a074c4; }\n.cm-s-yeti span.cm-variable { color: #55b5db; }\n.cm-s-yeti span.cm-variable-2 { color: #a074c4; }\n.cm-s-yeti span.cm-def { color: #55b5db; }\n.cm-s-yeti span.cm-operator { color: #9fb96e; }\n.cm-s-yeti span.cm-keyword { color: #9fb96e; }\n.cm-s-yeti span.cm-atom { color: #a074c4; }\n.cm-s-yeti span.cm-meta { color: #96c0d8; }\n.cm-s-yeti span.cm-tag { color: #96c0d8; }\n.cm-s-yeti span.cm-attribute { color: #9fb96e; }\n.cm-s-yeti span.cm-qualifier { color: #96c0d8; }\n.cm-s-yeti span.cm-property { color: #a074c4; }\n.cm-s-yeti span.cm-builtin { color: #a074c4; }\n.cm-s-yeti span.cm-variable-3, .cm-s-yeti span.cm-type { color: #96c0d8; }\n.cm-s-yeti .CodeMirror-activeline-background { background: #E7E4E0; }\n.cm-s-yeti .CodeMirror-matchingbracket { text-decoration: underline; }\n","",{version:3,sources:["webpack://./node_modules/codemirror/theme/yeti.css"],names:[],mappings:"AAAA;;;;;;;CAOC;;;AAGD;EACE,oCAAoC;EACpC,yBAAyB;EACzB,YAAY;AACd;;AAEA;EACE,cAAc;EACd,yBAAyB;EACzB,YAAY;AACd;AACA,gCAAgC,+BAA+B,EAAE;AACjE,oCAAoC,cAAc,EAAE;AACpD,wDAAwD,mBAAmB,EAAE;AAC7E,8IAA8I,mBAAmB,EAAE;AACnK,6JAA6J,mBAAmB,EAAE;AAClL,6BAA6B,cAAc,EAAE;AAC7C,yDAAyD,cAAc,EAAE;AACzE,4BAA4B,cAAc,EAAE;AAC5C,8BAA8B,cAAc,EAAE;AAC9C,gCAAgC,cAAc,EAAE;AAChD,yBAAyB,cAAc,EAAE;AACzC,8BAA8B,cAAc,EAAE;AAC9C,6BAA6B,cAAc,EAAE;AAC7C,0BAA0B,cAAc,EAAE;AAC1C,0BAA0B,cAAc,EAAE;AAC1C,yBAAyB,cAAc,EAAE;AACzC,+BAA+B,cAAc,EAAE;AAC/C,+BAA+B,cAAc,EAAE;AAC/C,8BAA8B,cAAc,EAAE;AAC9C,6BAA6B,cAAc,EAAE;AAC7C,yDAAyD,cAAc,EAAE;AACzE,+CAA+C,mBAAmB,EAAE;AACpE,yCAAyC,0BAA0B,EAAE",sourcesContent:["/*\n\n    Name:       yeti\n    Author:     Michael Kaminsky (http://github.com/mkaminsky11)\n\n    Original yeti color scheme by Jesse Weed (https://github.com/jesseweed/yeti-syntax)\n\n*/\n\n\n.cm-s-yeti.CodeMirror {\n  background-color: #ECEAE8 !important;\n  color: #d1c9c0 !important;\n  border: none;\n}\n\n.cm-s-yeti .CodeMirror-gutters {\n  color: #adaba6;\n  background-color: #E5E1DB;\n  border: none;\n}\n.cm-s-yeti .CodeMirror-cursor { border-left: solid thin #d1c9c0; }\n.cm-s-yeti .CodeMirror-linenumber { color: #adaba6; }\n.cm-s-yeti.CodeMirror-focused div.CodeMirror-selected { background: #DCD8D2; }\n.cm-s-yeti .CodeMirror-line::selection, .cm-s-yeti .CodeMirror-line > span::selection, .cm-s-yeti .CodeMirror-line > span > span::selection { background: #DCD8D2; }\n.cm-s-yeti .CodeMirror-line::-moz-selection, .cm-s-yeti .CodeMirror-line > span::-moz-selection, .cm-s-yeti .CodeMirror-line > span > span::-moz-selection { background: #DCD8D2; }\n.cm-s-yeti span.cm-comment { color: #d4c8be; }\n.cm-s-yeti span.cm-string, .cm-s-yeti span.cm-string-2 { color: #96c0d8; }\n.cm-s-yeti span.cm-number { color: #a074c4; }\n.cm-s-yeti span.cm-variable { color: #55b5db; }\n.cm-s-yeti span.cm-variable-2 { color: #a074c4; }\n.cm-s-yeti span.cm-def { color: #55b5db; }\n.cm-s-yeti span.cm-operator { color: #9fb96e; }\n.cm-s-yeti span.cm-keyword { color: #9fb96e; }\n.cm-s-yeti span.cm-atom { color: #a074c4; }\n.cm-s-yeti span.cm-meta { color: #96c0d8; }\n.cm-s-yeti span.cm-tag { color: #96c0d8; }\n.cm-s-yeti span.cm-attribute { color: #9fb96e; }\n.cm-s-yeti span.cm-qualifier { color: #96c0d8; }\n.cm-s-yeti span.cm-property { color: #a074c4; }\n.cm-s-yeti span.cm-builtin { color: #a074c4; }\n.cm-s-yeti span.cm-variable-3, .cm-s-yeti span.cm-type { color: #96c0d8; }\n.cm-s-yeti .CodeMirror-activeline-background { background: #E7E4E0; }\n.cm-s-yeti .CodeMirror-matchingbracket { text-decoration: underline; }\n"],sourceRoot:""}]);const s=a},23645:e=>{"use strict";e.exports=function(e){var n=[];n.toString=function n(){return this.map((function(n){var r=e(n);if(n[2]){return"@media ".concat(n[2]," {").concat(r,"}")}return r})).join("")};n.i=function(e,r,t){if(typeof e==="string"){e=[[null,e,""]]}var o={};if(t){for(var c=0;c<this.length;c++){var i=this[c][0];if(i!=null){o[i]=true}}}for(var a=0;a<e.length;a++){var s=[].concat(e[a]);if(t&&o[s[0]]){continue}if(r){if(!s[2]){s[2]=r}else{s[2]="".concat(r," and ").concat(s[2])}}n.push(s)}};return n}},94015:e=>{"use strict";function n(e,n){return i(e)||c(e,n)||t(e,n)||r()}function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function t(e,n){if(!e)return;if(typeof e==="string")return o(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor)r=e.constructor.name;if(r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(e,n)}function o(e,n){if(n==null||n>e.length)n=e.length;for(var r=0,t=new Array(n);r<n;r++){t[r]=e[r]}return t}function c(e,n){var r=e&&(typeof Symbol!=="undefined"&&e[Symbol.iterator]||e["@@iterator"]);if(r==null)return;var t=[];var o=true;var c=false;var i,a;try{for(r=r.call(e);!(o=(i=r.next()).done);o=true){t.push(i.value);if(n&&t.length===n)break}}catch(s){c=true;a=s}finally{try{if(!o&&r["return"]!=null)r["return"]()}finally{if(c)throw a}}return t}function i(e){if(Array.isArray(e))return e}e.exports=function e(r){var t=n(r,4),o=t[1],c=t[3];if(typeof btoa==="function"){var i=btoa(unescape(encodeURIComponent(JSON.stringify(c))));var a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i);var s="/*# ".concat(a," */");var A=c.sources.map((function(e){return"/*# sourceURL=".concat(c.sourceRoot||"").concat(e," */")}));return[o].concat(A).concat([s]).join("\n")}return[o].join("\n")}},49845:(e,n,r)=>{"use strict";r.r(n);r.d(n,{default:()=>s});var t=r(93379);var o=r.n(t);var c=r(31259);var i={};i.insert="head";i.singleton=false;var a=o()(c.Z,i);const s=c.Z.locals||{}},93379:(e,n,r)=>{"use strict";var t=function e(){var n;return function e(){if(typeof n==="undefined"){n=Boolean(window&&document&&document.all&&!window.atob)}return n}}();var o=function e(){var n={};return function e(r){if(typeof n[r]==="undefined"){var t=document.querySelector(r);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement){try{t=t.contentDocument.head}catch(o){t=null}}n[r]=t}return n[r]}}();var c=[];function i(e){var n=-1;for(var r=0;r<c.length;r++){if(c[r].identifier===e){n=r;break}}return n}function a(e,n){var r={};var t=[];for(var o=0;o<e.length;o++){var a=e[o];var s=n.base?a[0]+n.base:a[0];var A=r[s]||0;var l="".concat(s," ").concat(A);r[s]=A+1;var m=i(l);var u={css:a[1],media:a[2],sourceMap:a[3]};if(m!==-1){c[m].references++;c[m].updater(u)}else{c.push({identifier:l,updater:y(u,n),references:1})}t.push(l)}return t}function s(e){var n=document.createElement("style");var t=e.attributes||{};if(typeof t.nonce==="undefined"){var c=true?r.nc:0;if(c){t.nonce=c}}Object.keys(t).forEach((function(e){n.setAttribute(e,t[e])}));if(typeof e.insert==="function"){e.insert(n)}else{var i=o(e.insert||"head");if(!i){throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.")}i.appendChild(n)}return n}function A(e){if(e.parentNode===null){return false}e.parentNode.removeChild(e)}var l=function e(){var n=[];return function e(r,t){n[r]=t;return n.filter(Boolean).join("\n")}}();function m(e,n,r,t){var o=r?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(e.styleSheet){e.styleSheet.cssText=l(n,o)}else{var c=document.createTextNode(o);var i=e.childNodes;if(i[n]){e.removeChild(i[n])}if(i.length){e.insertBefore(c,i[n])}else{e.appendChild(c)}}}function u(e,n,r){var t=r.css;var o=r.media;var c=r.sourceMap;if(o){e.setAttribute("media",o)}else{e.removeAttribute("media")}if(c&&typeof btoa!=="undefined"){t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")}if(e.styleSheet){e.styleSheet.cssText=t}else{while(e.firstChild){e.removeChild(e.firstChild)}e.appendChild(document.createTextNode(t))}}var d=null;var p=0;function y(e,n){var r;var t;var o;if(n.singleton){var c=p++;r=d||(d=s(n));t=m.bind(null,r,c,false);o=m.bind(null,r,c,true)}else{r=s(n);t=u.bind(null,r,n);o=function e(){A(r)}}t(e);return function n(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap){return}t(e=r)}else{o()}}}e.exports=function(e,n){n=n||{};if(!n.singleton&&typeof n.singleton!=="boolean"){n.singleton=t()}e=e||[];var r=a(e,n);return function e(t){t=t||[];if(Object.prototype.toString.call(t)!=="[object Array]"){return}for(var o=0;o<r.length;o++){var s=r[o];var A=i(s);c[A].references--}var l=a(t,n);for(var m=0;m<r.length;m++){var u=r[m];var d=i(u);if(c[d].references===0){c[d].updater();c.splice(d,1)}}r=l}}}}]);
//# sourceMappingURL=9845.8b6c837a5ff754554b39.js.map?v=8b6c837a5ff754554b39
================================================================================
