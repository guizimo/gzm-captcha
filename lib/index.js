!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("captcha",[],e):"object"==typeof exports?exports.captcha=e():t.captcha=e()}(window,(function(){return function(t){var e={};function o(i){if(e[i])return e[i].exports;var n=e[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,o),n.l=!0,n.exports}return o.m=t,o.c=e,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(i,n,function(e){return t[e]}.bind(null,n));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=0)}([function(t,e,o){"use strict";function i(t,e){return Math.floor(Math.random()*(e-t)+t)}function n(t,e){void 0===e&&(e=4);let o="";for(let n=0;n<e;n++)o+=t[i(0,t.length)];return o}function r(t,e){return"rgb("+i(t,e)+","+i(t,e)+","+i(t,e)+")"}function s(t){return Object.prototype.toString.call(t).replace(/(^\[object )([a-zA-Z]+)(\]$)/,"$2").toLowerCase()}o.r(e),o.d(e,"default",(function(){return h}));class a{constructor(t){if(this.options={width:100,height:30,len:4,lineShow:!0,pointShow:!0},void 0!==t){if("object"!==s(t))throw`[warn]: Invalid opts: type check failed for opts "type". Expected Object with value "${t}", got ${s(t)} with value ${t}.`;Object.assign(this.options,t)}this.baseChartArr=function(t){const e="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";return"letter"===t?e.split(""):"digital"===t?"0123456789".split(""):(e+"0123456789").split("")}(this.options.type),this.code=n(this.baseChartArr,this.options.len),this._init()}_init(){const t=document.createElement("canvas");t.width=this.options.width,t.height=this.options.height,this.instance=t,this.imageData=this.createCode(t)}createCode(t){if(!t.getContext)throw"[warn]: canvas.getContext is null";{const e=t.getContext("2d");e.textBaseline="middle",e.fillStyle=r(180,240),e.fillRect(0,0,this.options.width,this.options.height);for(let t=0;t<4;t++){const o=this.code[t];e.font="20px SimHei",e.fillStyle=r(50,160),e.shadowBlur=i(-3,3),e.shadowColor="rgba(0, 0, 0, 0.3)";const n=this.options.width/5*t,s=this.options.height/2,a=i(-30,30);e.translate(n,s),e.rotate(a*Math.PI/180),e.fillText(o,0,0),e.rotate(-a*Math.PI/180),e.translate(-n,-s)}if(this.options.lineShow)for(let t=0;t<4;t++)e.strokeStyle=r(40,180),e.beginPath(),e.moveTo(i(0,this.options.width/2),i(0,this.options.height/2)),e.lineTo(i(0,this.options.width/2),i(0,this.options.height)),e.stroke();if(this.options.pointShow)for(let t=0;t<this.options.width/4;t++)e.fillStyle=r(0,255),e.beginPath(),e.arc(i(0,this.options.width),i(0,this.options.height),1,0,2*Math.PI),e.fill()}return t.toDataURL("image/png")}refresh(){return this.code=n(this.baseChartArr,this.options.len),this.createCode(this.instance)}validate(t){return t.toLowerCase()==this.code.toLowerCase()}value(){return this.imageData}}function h(t){return new a(t)}}])}));
//# sourceMappingURL=index.js.map