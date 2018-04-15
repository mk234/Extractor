!function(u){var d=u.Promise||function(){var n=setTimeout;function r(){}function i(e){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],l(e,this)}function o(t,r){for(;3===t._state;)t=t._value;0!==t._state?(t._handled=!0,i._immediateFn(function(){var e=1===t._state?r.onFulfilled:r.onRejected;if(null!==e){var n;try{n=e(t._value)}catch(e){return void a(r.promise,e)}s(r.promise,n)}else(1===t._state?s:a)(r.promise,t._value)})):t._deferreds.push(r)}function s(n,e){try{if(e===n)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"==typeof e||"function"==typeof e)){var t=e.then;if(e instanceof i)return n._state=3,n._value=e,void c(n);if("function"==typeof t)return void l((r=t,o=e,function(){r.apply(o,arguments)}),n)}n._state=1,n._value=e,c(n)}catch(e){a(n,e)}var r,o}function a(e,n){e._state=2,e._value=n,c(e)}function c(e){2===e._state&&0===e._deferreds.length&&i._immediateFn(function(){e._handled||i._unhandledRejectionFn(e._value)});for(var n=0,t=e._deferreds.length;n<t;n++)o(e,e._deferreds[n]);e._deferreds=null}function l(e,n){var t=!1;try{e(function(e){t||(t=!0,s(n,e))},function(e){t||(t=!0,a(n,e))})}catch(e){if(t)return;t=!0,a(n,e)}}return i.prototype.catch=function(e){return this.then(null,e)},i.prototype.then=function(e,n){var t=new this.constructor(r);return o(this,new function(e,n,t){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof n?n:null,this.promise=t}(e,n,t)),t},i.all=function(e){var a=Array.prototype.slice.call(e);return new i(function(r,o){if(0===a.length)return r([]);var i=a.length;function s(n,e){try{if(e&&("object"==typeof e||"function"==typeof e)){var t=e.then;if("function"==typeof t)return void t.call(e,function(e){s(n,e)},o)}a[n]=e,0==--i&&r(a)}catch(e){o(e)}}for(var e=0;e<a.length;e++)s(e,a[e])})},i.resolve=function(n){return n&&"object"==typeof n&&n.constructor===i?n:new i(function(e){e(n)})},i.reject=function(t){return new i(function(e,n){n(t)})},i.race=function(o){return new i(function(e,n){for(var t=0,r=o.length;t<r;t++)o[t].then(e,n)})},i._immediateFn="function"==typeof setImmediate&&function(e){setImmediate(e)}||function(e){n(e,0)},i._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},i._setImmediateFn=function(e){i._immediateFn=e},i._setUnhandledRejectionFn=function(e){i._unhandledRejectionFn=e},i}(),h={version:"8.3.0",stable:"8.3.0",basepath:"//d53-a.sdn.szn.cz/d_53/"+parseInt("8.3.0",10)+"/",components:{shim:{files:{css:[],js:["[BASEPATH][VERSION]/sznplayer.shim.bundle.min.js"]}},player:{files:{css:["[BASEPATH][VERSION]/sznplayer.min.css"],js:["[BASEPATH][VERSION]/sznplayer.player.bundle.min.js"]},callback:function(e){u.SznPlayer.config.swf=s("[BASEPATH][VERSION]/sznplayer.player.swf",e)}},extensions:{files:{css:["[BASEPATH][VERSION]/sznplayer.extensions.min.css"],js:["[BASEPATH][VERSION]/sznplayer.extensions.bundle.min.js"]}}}},f={};function s(e,n){for(var t=e,r=Object.keys(n),o=0,i=r.length;o<i;o++){var s=r[o],a="["+s+"]";try{var c=n[s];t=t.replace(a,c)}catch(e){throw e}}return t}function p(e,n){for(var t=[],r=0,o=e.files.css.length;r<o;r++){var i=s(e.files.css[r],n);t.push(f.loadCss(i))}for(r=0,o=e.files.js.length;r<o;r++){i=s(e.files.js[r],n);t.push(f.loadJs(i))}return d.all(t)}f.config={target:u.document.head,map:{script:{elmName:"script",srcAttrName:"src",attrs:[]},link:{elmName:"link",srcAttrName:"href",attrs:[["type","text/css"],["rel","stylesheet"]]}}},f.loadJs=function(e){return f._load("script",e)},f.loadCss=function(e){return f._load("link",e)},f._load=function(e,n){for(var t=f.config.map[e].elmName,r=f.config.map[e].srcAttrName,o=f.config.map[e].attrs,i=null,s=null,a=new d(function(e,n){i=e,s=n}),c=u.document.createElement(t),l=o.length-1;0<=l;l--)c.setAttribute(o[l][0],o[l][1]);return c.onload=function(){i()},c.onerror=function(e){s(e)},f.config.target.appendChild(c),c[r]=n,a};var m=[];u.SznPlayerLoader={load:function(e,n){if(e=e||["shim","player"],!Array.isArray(e)||!e.length)throw new Error('Invalid argument "components".');var t=null;try{var r=u.localStorage;r&&(t=r.getItem("sznplayerloader_version"))}catch(e){}for(var o=t||(n?h.version:h.stable),i={BASEPATH:h.basepath,VERSION:o},s=d.resolve(),a=0,c=e.length;a<c;a++){var l=e[a],f=h.components[l];if(!f)throw new Error('Invalid component identifier "'+l+'".');s=s.then(function(e,n,t){var r=p(e,n);return r.then(function(){e.callback&&e.callback(n),m.push(t)}),r}.bind(this,f,i,l))}return s},isLoaded:function(e){if(!e)throw new Error("Component must be specified");return-1<m.indexOf(e)}}}(window);