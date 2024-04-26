(function(){'use strict';var r;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var da=ca(this);function v(a,b){if(b)a:{var c=da;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
v("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.g=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.g};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
v("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ea(aa(this))}})}return a});
function ea(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function w(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if("number"==typeof a.length)return{next:aa(a)};throw Error(String(a)+" is not an iterable or ArrayLike");}
function x(a){if(!(a instanceof Array)){a=w(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function fa(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ja="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)fa(d,e)&&(a[e]=d[e])}return a};
v("Object.assign",function(a){return a||ja});
var ka="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},la;
if("function"==typeof Object.setPrototypeOf)la=Object.setPrototypeOf;else{var ma;a:{var na={a:!0},oa={};try{oa.__proto__=na;ma=oa.a;break a}catch(a){}ma=!1}la=ma?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var pa=la;
function y(a,b){a.prototype=ka(b.prototype);a.prototype.constructor=a;if(pa)pa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.ma=b.prototype}
function sa(){this.G=!1;this.l=null;this.h=void 0;this.g=1;this.u=this.o=0;this.O=this.i=null}
function ta(a){if(a.G)throw new TypeError("Generator is already running");a.G=!0}
sa.prototype.K=function(a){this.h=a};
function ua(a,b){a.i={jc:b,uc:!0};a.g=a.o||a.u}
sa.prototype.return=function(a){this.i={return:a};this.g=this.u};
function A(a,b,c){a.g=c;return{value:b}}
sa.prototype.B=function(a){this.g=a};
function va(a,b,c){a.o=b;void 0!=c&&(a.u=c)}
function wa(a){a.o=0;var b=a.i.jc;a.i=null;return b}
function xa(a){var b=a.O.splice(0)[0];(b=a.i=a.i||b)?b.uc?a.g=a.o||a.u:void 0!=b.B&&a.u<b.B?(a.g=b.B,a.i=null):a.g=a.u:a.g=0}
function ya(a){this.g=new sa;this.h=a}
function za(a,b){ta(a.g);var c=a.g.l;if(c)return Aa(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.g.return);
a.g.return(b);return Ba(a)}
function Aa(a,b,c,d){try{var e=b.call(a.g.l,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.g.G=!1,e;var f=e.value}catch(g){return a.g.l=null,ua(a.g,g),Ba(a)}a.g.l=null;d.call(a.g,f);return Ba(a)}
function Ba(a){for(;a.g.g;)try{var b=a.h(a.g);if(b)return a.g.G=!1,{value:b.value,done:!1}}catch(c){a.g.h=void 0,ua(a.g,c)}a.g.G=!1;if(a.g.i){b=a.g.i;a.g.i=null;if(b.uc)throw b.jc;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Da(a){this.next=function(b){ta(a.g);a.g.l?b=Aa(a,a.g.l.next,b,a.g.K):(a.g.K(b),b=Ba(a));return b};
this.throw=function(b){ta(a.g);a.g.l?b=Aa(a,a.g.l["throw"],b,a.g.K):(ua(a.g,b),b=Ba(a));return b};
this.return=function(b){return za(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ea(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function B(a){return Ea(new Da(new ya(a)))}
function Fa(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
v("Reflect.setPrototypeOf",function(a){return a?a:pa?function(b,c){try{return pa(b,c),!0}catch(d){return!1}}:null});
v("Promise",function(a){function b(g){this.g=0;this.i=void 0;this.h=[];this.G=!1;var h=this.l();try{g(h.resolve,h.reject)}catch(l){h.reject(l)}}
function c(){this.g=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.h=function(g){if(null==this.g){this.g=[];var h=this;this.i(function(){h.o()})}this.g.push(g)};
var e=da.setTimeout;c.prototype.i=function(g){e(g,0)};
c.prototype.o=function(){for(;this.g&&this.g.length;){var g=this.g;this.g=[];for(var h=0;h<g.length;++h){var l=g[h];g[h]=null;try{l()}catch(k){this.l(k)}}}this.g=null};
c.prototype.l=function(g){this.i(function(){throw g;})};
b.prototype.l=function(){function g(k){return function(m){l||(l=!0,k.call(h,m))}}
var h=this,l=!1;return{resolve:g(this.bb),reject:g(this.o)}};
b.prototype.bb=function(g){if(g===this)this.o(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.eb(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.xa(g):this.u(g)}};
b.prototype.xa=function(g){var h=void 0;try{h=g.then}catch(l){this.o(l);return}"function"==typeof h?this.rb(h,g):this.u(g)};
b.prototype.o=function(g){this.K(2,g)};
b.prototype.u=function(g){this.K(1,g)};
b.prototype.K=function(g,h){if(0!=this.g)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.g);this.g=g;this.i=h;2===this.g&&this.cb();this.O()};
b.prototype.cb=function(){var g=this;e(function(){if(g.na()){var h=da.console;"undefined"!==typeof h&&h.error(g.i)}},1)};
b.prototype.na=function(){if(this.G)return!1;var g=da.CustomEvent,h=da.Event,l=da.dispatchEvent;if("undefined"===typeof l)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=da.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.i;return l(g)};
b.prototype.O=function(){if(null!=this.h){for(var g=0;g<this.h.length;++g)f.h(this.h[g]);this.h=null}};
var f=new c;b.prototype.eb=function(g){var h=this.l();g.vb(h.resolve,h.reject)};
b.prototype.rb=function(g,h){var l=this.l();try{g.call(h,l.resolve,l.reject)}catch(k){l.reject(k)}};
b.prototype.then=function(g,h){function l(q,p){return"function"==typeof q?function(t){try{k(q(t))}catch(u){m(u)}}:p}
var k,m,n=new b(function(q,p){k=q;m=p});
this.vb(l(g,k),l(h,m));return n};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.vb=function(g,h){function l(){switch(k.g){case 1:g(k.i);break;case 2:h(k.i);break;default:throw Error("Unexpected state: "+k.g);}}
var k=this;null==this.h?f.h(l):this.h.push(l);this.G=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,l){l(g)})};
b.race=function(g){return new b(function(h,l){for(var k=w(g),m=k.next();!m.done;m=k.next())d(m.value).vb(h,l)})};
b.all=function(g){var h=w(g),l=h.next();return l.done?d([]):new b(function(k,m){function n(t){return function(u){q[t]=u;p--;0==p&&k(q)}}
var q=[],p=0;do q.push(void 0),p++,d(l.value).vb(n(q.length-1),m),l=h.next();while(!l.done)})};
return b});
v("Object.setPrototypeOf",function(a){return a||pa});
v("WeakMap",function(a){function b(l){this.g=(h+=Math.random()+1).toString();if(l){l=w(l);for(var k;!(k=l.next()).done;)k=k.value,this.set(k[0],k[1])}}
function c(){}
function d(l){var k=typeof l;return"object"===k&&null!==l||"function"===k}
function e(l){if(!fa(l,g)){var k=new c;ba(l,g,{value:k})}}
function f(l){var k=Object[l];k&&(Object[l]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return k(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var l=Object.seal({}),k=Object.seal({}),m=new a([[l,2],[k,3]]);if(2!=m.get(l)||3!=m.get(k))return!1;m.delete(l);m.set(k,4);return!m.has(l)&&4==m.get(k)}catch(n){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(l,k){if(!d(l))throw Error("Invalid WeakMap key");e(l);if(!fa(l,g))throw Error("WeakMap key fail: "+l);l[g][this.g]=k;return this};
b.prototype.get=function(l){return d(l)&&fa(l,g)?l[g][this.g]:void 0};
b.prototype.has=function(l){return d(l)&&fa(l,g)&&fa(l[g],this.g)};
b.prototype.delete=function(l){return d(l)&&fa(l,g)&&fa(l[g],this.g)?delete l[g][this.g]:!1};
return b});
v("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,l){var k=h[1];return ea(function(){if(k){for(;k.head!=h[1];)k=k.previous;for(;k.next!=k.head;)return k=k.next,{done:!1,value:l(k)};k=null}return{done:!0,value:void 0}})}
function d(h,l){var k=l&&typeof l;"object"==k||"function"==k?f.has(l)?k=f.get(l):(k=""+ ++g,f.set(l,k)):k="p_"+l;var m=h[0][k];if(m&&fa(h[0],k))for(h=0;h<m.length;h++){var n=m[h];if(l!==l&&n.key!==n.key||l===n.key)return{id:k,list:m,index:h,entry:n}}return{id:k,list:m,index:-1,entry:void 0}}
function e(h){this[0]={};this[1]=b();this.size=0;if(h){h=w(h);for(var l;!(l=h.next()).done;)l=l.value,this.set(l[0],l[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),l=new a(w([[h,"s"]]));if("s"!=l.get(h)||1!=l.size||l.get({x:4})||l.set({x:4},"t")!=l||2!=l.size)return!1;var k=l.entries(),m=k.next();if(m.done||m.value[0]!=h||"s"!=m.value[1])return!1;m=k.next();return m.done||4!=m.value[0].x||"t"!=m.value[1]||!k.next().done?!1:!0}catch(n){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,l){h=0===h?0:h;var k=d(this,h);k.list||(k.list=this[0][k.id]=[]);k.entry?k.entry.value=l:(k.entry={next:this[1],previous:this[1].previous,head:this[1],key:h,value:l},k.list.push(k.entry),this[1].previous.next=k.entry,this[1].previous=k.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this[0][h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this[0]={};this[1]=this[1].previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,l){for(var k=this.entries(),m;!(m=k.next()).done;)m=m.value,h.call(l,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function Ha(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
v("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ha(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
v("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
function Ia(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
v("Array.prototype.entries",function(a){return a?a:function(){return Ia(this,function(b,c){return[b,c]})}});
v("Array.prototype.keys",function(a){return a?a:function(){return Ia(this,function(b){return b})}});
v("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ha(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
v("Number.isFinite",function(a){return a?a:function(b){return"number"!==typeof b?!1:!isNaN(b)&&Infinity!==b&&-Infinity!==b}});
v("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
v("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
v("Number.isSafeInteger",function(a){return a?a:function(b){return Number.isInteger(b)&&Math.abs(b)<=Number.MAX_SAFE_INTEGER}});
v("Math.trunc",function(a){return a?a:function(b){b=Number(b);if(isNaN(b)||Infinity===b||-Infinity===b||0===b)return b;var c=Math.floor(Math.abs(b));return 0>b?-c:c}});
v("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)fa(b,d)&&c.push(b[d]);return c}});
v("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
v("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
v("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ha(this,b,"includes").indexOf(b,c||0)}});
v("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
v("Array.prototype.values",function(a){return a?a:function(){return Ia(this,function(b,c){return c})}});
v("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
v("Set",function(a){function b(c){this.g=new Map;if(c){c=w(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.g.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(w([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.g.set(c,c);this.size=this.g.size;return this};
b.prototype.delete=function(c){c=this.g.delete(c);this.size=this.g.size;return c};
b.prototype.clear=function(){this.g.clear();this.size=0};
b.prototype.has=function(c){return this.g.has(c)};
b.prototype.entries=function(){return this.g.entries()};
b.prototype.values=function(){return this.g.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.g.forEach(function(f){return c.call(d,f,f,e)})};
return b});
v("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)fa(b,d)&&c.push([d,b[d]]);return c}});/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var C=this||self;function Ja(a){var b=D("CLOSURE_FLAGS");a=b&&b[a];return null!=a?a:!1}
function D(a,b){a=a.split(".");b=b||C;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Ma(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Na(a){var b=Ma(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Pa(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Qa(a){return Object.prototype.hasOwnProperty.call(a,Ra)&&a[Ra]||(a[Ra]=++Sa)}
var Ra="closure_uid_"+(1E9*Math.random()>>>0),Sa=0;function Ta(a,b,c){return a.call.apply(a.bind,arguments)}
function Ua(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Va(a,b,c){Va=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Ta:Ua;return Va.apply(null,arguments)}
function Wa(){return Date.now()}
function E(a,b){a=a.split(".");var c=C;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function Xa(a,b){function c(){}
c.prototype=b.prototype;a.ma=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.me=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Ya(a){return a}
;function Za(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,Za);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.cause=b)}
Xa(Za,Error);Za.prototype.name="CustomError";function $a(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.i=!b&&/[?&]ae=1(&|$)/.test(a);this.l=!b&&/[?&]ae=2(&|$)/.test(a);if((this.g=/[?&]adurl=([^&]*)/.exec(a))&&this.g[1]){try{var c=decodeURIComponent(this.g[1])}catch(d){c=null}this.h=c}}
;var ab=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},bb=/&/g,cb=/</g,db=/>/g,eb=/"/g,fb=/'/g,gb=/\x00/g,hb=/[\x00&<>"']/;var lb;function mb(){if(void 0===lb){var a=null,b=C.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:Ya,createScript:Ya,createScriptURL:Ya})}catch(c){C.console&&C.console.error(c.message)}lb=a}else lb=a}return lb}
;function nb(a,b){this.g=a===ob&&b||""}
nb.prototype.toString=function(){return this.g};
function pb(a){return new nb(ob,a)}
var ob={};pb("");function qb(a){this.g=a}
qb.prototype.toString=function(){return this.g+""};
var rb={};/*

 SPDX-License-Identifier: Apache-2.0
*/
function sb(a){this.g=a}
sb.prototype.toString=function(){return this.g};
var tb=new sb("about:invalid#zClosurez");function ub(a){this.kd=a}
function vb(a){return new ub(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var wb=[vb("data"),vb("http"),vb("https"),vb("mailto"),vb("ftp"),new ub(function(a){return/^[^:]*([/?#]|$)/.test(a)})];
function xb(a,b){b=void 0===b?wb:b;if(a instanceof sb)return a;for(var c=0;c<b.length;++c){var d=b[c];if(d instanceof ub&&d.kd(a))return new sb(a)}}
function yb(a){var b=void 0===b?wb:b;return xb(a,b)||tb}
var zb=/^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;var Ab=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Bb=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};
function Cb(a,b){b=Ab(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function Db(a){return Array.prototype.concat.apply([],arguments)}
function Eb(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Fb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Na(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function Gb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function Hb(a){var b=Ib,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function Jb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function Kb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=Kb(a[c]);return b}
var Lb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Mb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Lb.length;f++)c=Lb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var Nb=Ja(610401301),Ob=Ja(188588736);function Pb(){var a=C.navigator;return a&&(a=a.userAgent)?a:""}
var Qb,Ub=C.navigator;Qb=Ub?Ub.userAgentData||null:null;function Vb(a){return Nb?Qb?Qb.brands.some(function(b){return(b=b.brand)&&-1!=b.indexOf(a)}):!1:!1}
function F(a){return-1!=Pb().indexOf(a)}
;function Wb(){return Nb?!!Qb&&0<Qb.brands.length:!1}
function Xb(){return Wb()?!1:F("Trident")||F("MSIE")}
function Yb(){return Wb()?Vb("Chromium"):(F("Chrome")||F("CriOS"))&&!(Wb()?0:F("Edge"))||F("Silk")}
;function Zb(a){this.g=a}
Zb.prototype.toString=function(){return this.g.toString()};function $b(){throw Error("unknown trace type");}
;var ac={Pd:0,Ud:1,Nd:2,Od:3,0:"FORMATTED_HTML_CONTENT",1:"HTML_FORMATTED_CONTENT",2:"EMBEDDED_INTERNAL_CONTENT",3:"EMBEDDED_TRUSTED_EXTERNAL_CONTENT"};function bc(a,b){b=Error.call(this,a+" cannot be used with intent "+ac[b]);this.message=b.message;"stack"in b&&(this.stack=b.stack);this.type=a;this.name="TypeCannotBeUsedWithIntentError"}
y(bc,Error);function cc(a,b){a.removeAttribute("srcdoc");if(b instanceof qb)throw new bc("TrustedResourceUrl",3);var c="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-storage-access-by-user-activation".split(" ");a.setAttribute("sandbox","");for(var d=0;d<c.length;d++)a.sandbox.supports&&!a.sandbox.supports(c[d])||a.sandbox.add(c[d]);if(b instanceof sb)if(b instanceof sb)b=b.g;else throw Error("");else b=zb.test(b)?b:void 0;void 0!==b&&(a.src=b)}
;function dc(a,b){a.__closure__error__context__984382||(a.__closure__error__context__984382={});a.__closure__error__context__984382.severity=b}
;function ec(a){var b=D("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||C.$googDebugFname||b}catch(g){e="Not available",c=!0}b=fc(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,gc[c])c=gc[c];else{c=String(c);if(!gc[c]){var f=/function\s+([^\(]+)/m.exec(c);gc[c]=f?f[1]:"[Anonymous]"}c=gc[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}return{message:a.message,
name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:b}}
function fc(a,b){b||(b={});b[hc(a)]=!0;var c=a.stack||"";(a=a.cause)&&!b[hc(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=fc(a,b));return c}
function hc(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var gc={};function ic(a){hb.test(a)&&(-1!=a.indexOf("&")&&(a=a.replace(bb,"&amp;")),-1!=a.indexOf("<")&&(a=a.replace(cb,"&lt;")),-1!=a.indexOf(">")&&(a=a.replace(db,"&gt;")),-1!=a.indexOf('"')&&(a=a.replace(eb,"&quot;")),-1!=a.indexOf("'")&&(a=a.replace(fb,"&#39;")),-1!=a.indexOf("\x00")&&(a=a.replace(gb,"&#0;")));return a}
;var jc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function kc(a){return a?decodeURI(a):a}
function lc(a){return kc(a.match(jc)[3]||null)}
function mc(a){var b=a.match(jc);a=b[1];var c=b[2],d=b[3];b=b[4];var e="";a&&(e+=a+":");d&&(e+="//",c&&(e+=c+"@"),e+=d,b&&(e+=":"+b));return e}
function nc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)nc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function oc(a){var b=[],c;for(c in a)nc(c,a[c],b);return b.join("&")}
var pc=/#|$/;function qc(a,b){var c=a.search(pc);a:{var d=0;for(var e=b.length;0<=(d=a.indexOf(b,d))&&d<c;){var f=a.charCodeAt(d-1);if(38==f||63==f)if(f=a.charCodeAt(d+e),!f||61==f||38==f||35==f)break a;d+=e+1}d=-1}if(0>d)return null;e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return decodeURIComponent(a.slice(d,-1!==e?e:0).replace(/\+/g," "))}
;function rc(a){C.setTimeout(function(){throw a;},0)}
;function sc(){return F("iPhone")&&!F("iPod")&&!F("iPad")}
;function tc(a){tc[" "](a);return a}
tc[" "]=function(){};var uc=Wb()?!1:F("Opera"),zc=Xb(),Ac=F("Edge"),Bc=F("Gecko")&&!(-1!=Pb().toLowerCase().indexOf("webkit")&&!F("Edge"))&&!(F("Trident")||F("MSIE"))&&!F("Edge"),Cc=-1!=Pb().toLowerCase().indexOf("webkit")&&!F("Edge");function Dc(){var a=C.document;return a?a.documentMode:void 0}
var Ec;a:{var Fc="",Gc=function(){var a=Pb();if(Bc)return/rv:([^\);]+)(\)|;)/.exec(a);if(Ac)return/Edge\/([\d\.]+)/.exec(a);if(zc)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Cc)return/WebKit\/(\S+)/.exec(a);if(uc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Gc&&(Fc=Gc?Gc[1]:"");if(zc){var Hc=Dc();if(null!=Hc&&Hc>parseFloat(Fc)){Ec=String(Hc);break a}}Ec=Fc}var Ic=Ec,Jc;if(C.document&&zc){var Kc=Dc();Jc=Kc?Kc:parseInt(Ic,10)||void 0}else Jc=void 0;var Lc=Jc;var Mc=sc()||F("iPod"),Nc=F("iPad");!F("Android")||Yb();Yb();var Oc=F("Safari")&&!(Yb()||(Wb()?0:F("Coast"))||(Wb()?0:F("Opera"))||(Wb()?0:F("Edge"))||(Wb()?Vb("Microsoft Edge"):F("Edg/"))||(Wb()?Vb("Opera"):F("OPR"))||F("Firefox")||F("FxiOS")||F("Silk")||F("Android"))&&!(sc()||F("iPad")||F("iPod"));var Pc={},Qc=null;
function Rc(a,b){Na(a);void 0===b&&(b=0);if(!Qc){Qc={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));Pc[e]=f;for(var g=0;g<f.length;g++){var h=f[g];void 0===Qc[h]&&(Qc[h]=g)}}}b=Pc[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(e=f=0;f<a.length-2;f+=3){var l=a[f],k=a[f+1];h=a[f+2];g=b[l>>2];l=b[(l&3)<<4|k>>4];k=b[(k&15)<<2|h>>6];h=b[h&63];c[e++]=""+g+l+k+h}g=0;h=d;switch(a.length-
f){case 2:g=a[f+1],h=b[(g&15)<<2]||d;case 1:a=a[f],c[e]=""+b[a>>2]+b[(a&3)<<4|g>>4]+h+d}return c.join("")}
;var Sc="undefined"!==typeof Uint8Array,Tc=!zc&&"function"===typeof btoa;function Uc(){return"function"===typeof BigInt}
;var Vc=0,Wc=0;function Xc(a){var b=0>a;a=Math.abs(a);var c=a>>>0;a=Math.floor((a-c)/4294967296);b&&(c=w(Yc(c,a)),b=c.next().value,a=c.next().value,c=b);Vc=c>>>0;Wc=a>>>0}
function Zc(a,b){b>>>=0;a>>>=0;if(2097151>=b)var c=""+(4294967296*b+a);else Uc()?c=""+(BigInt(b)<<BigInt(32)|BigInt(a)):(c=(a>>>24|b<<8)&16777215,b=b>>16&65535,a=(a&16777215)+6777216*c+6710656*b,c+=8147497*b,b*=2,1E7<=a&&(c+=Math.floor(a/1E7),a%=1E7),1E7<=c&&(b+=Math.floor(c/1E7),c%=1E7),c=b+$c(c)+$c(a));return c}
function $c(a){a=String(a);return"0000000".slice(a.length)+a}
function ad(){var a=Vc,b=Wc;b&2147483648?Uc()?a=""+(BigInt(b|0)<<BigInt(32)|BigInt(a>>>0)):(b=w(Yc(a,b)),a=b.next().value,b=b.next().value,a="-"+Zc(a,b)):a=Zc(a,b);return a}
function Yc(a,b){b=~b;a?a=~a+1:b+=1;return[a,b]}
;function bd(a){return Array.prototype.slice.call(a)}
;function cd(a){return"function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol():a}
var dd=cd(),ed=cd("2ex");Math.max.apply(Math,x(Object.values({Yd:1,Wd:2,Vd:4,be:8,ae:16,Zd:32,Md:64,de:128,Td:256,Sd:512,Xd:1024,Qd:2048,ce:4096,Rd:8192})));var fd=dd?function(a,b){a[dd]|=b}:function(a,b){void 0!==a.ga?a.ga|=b:Object.defineProperties(a,{ga:{value:b,
configurable:!0,writable:!0,enumerable:!1}})},gd=dd?function(a,b){a[dd]&=~b}:function(a,b){void 0!==a.ga&&(a.ga&=~b)};
function hd(a,b,c){return c?a|b:a&~b}
var id=dd?function(a){return a[dd]|0}:function(a){return a.ga|0},jd=dd?function(a){return a[dd]}:function(a){return a.ga},kd=dd?function(a,b){a[dd]=b;
return a}:function(a,b){void 0!==a.ga?a.ga=b:Object.defineProperties(a,{ga:{value:b,
configurable:!0,writable:!0,enumerable:!1}});return a};
function ld(a,b){kd(b,(a|0)&-14591)}
function md(a,b){kd(b,(a|34)&-14557)}
function nd(a){a=a>>14&1023;return 0===a?536870912:a}
;var od={},pd={};function ud(a){return!(!a||"object"!==typeof a||a.g!==pd)}
function vd(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
var wd;function xd(a,b,c){if(!Array.isArray(a)||a.length)return!1;var d=id(a);if(d&1)return!0;if(!(b&&(Array.isArray(b)?b.includes(c):b.has(c))))return!1;kd(a,d|1);return!0}
var yd,zd=[];kd(zd,55);yd=Object.freeze(zd);function Ad(a){if(a&2)throw Error();}
Object.freeze(new function(){});
Object.freeze(new function(){});var Bd;function Cd(a){a=Error(a);dc(a,"warning");return a}
;function Dd(a){return a.displayName||a.name||"unknown type name"}
function Ed(a){if("boolean"!==typeof a)throw Error("Expected boolean but got "+Ma(a)+": "+a);return a}
var Fd=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function Gd(a){var b=typeof a;return"number"===b?Number.isFinite(a):"string"!==b?!1:Fd.test(a)}
function Hd(a,b){b=!!b;if(!Gd(a))throw Cd("int64");if("string"===typeof a)if(Gd(a),b=Math.trunc(Number(a)),Number.isSafeInteger(b))a=String(b);else{if(b=a.indexOf("."),-1!==b&&(a=a.substring(0,b)),!Id(a)){if(16>a.length)Xc(Number(a));else if(Uc())a=BigInt(a),Vc=Number(a&BigInt(4294967295))>>>0,Wc=Number(a>>BigInt(32)&BigInt(4294967295));else{b=+("-"===a[0]);Wc=Vc=0;for(var c=a.length,d=0+b,e=(c-b)%6+b;e<=c;d=e,e+=6)d=Number(a.slice(d,e)),Wc*=1E6,Vc=1E6*Vc+d,4294967296<=Vc&&(Wc+=Math.trunc(Vc/4294967296),
Wc>>>=0,Vc>>>=0);b&&(b=w(Yc(Vc,Wc)),a=b.next().value,b=b.next().value,Vc=a,Wc=b)}a=ad()}}else if(b)Gd(a),a=Math.trunc(a),Number.isSafeInteger(a)?a=String(a):(b=String(a),Id(b)?a=b:(Xc(a),a=ad()));else if(Gd(a),a=Math.trunc(a),!Number.isSafeInteger(a)){Xc(a);b=Vc;c=Wc;if(a=c&2147483648)b=~b+1>>>0,c=~c>>>0,0==b&&(c=c+1>>>0);b=4294967296*c+(b>>>0);a=a?-b:b}return a}
function Jd(a){return null==a?a:Hd(a)}
function Id(a){return"-"===a[0]?20>a.length?!0:20===a.length&&-922337<Number(a.substring(0,7)):19>a.length?!0:19===a.length&&922337>Number(a.substring(0,6))}
function Kd(a){if(null!=a&&"string"!==typeof a)throw Error();return a}
function Ld(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+Dd(b)+" but got "+(a&&Dd(a.constructor)));return a}
function Md(a,b,c){if(null!=a&&"object"===typeof a&&a.Qb===od)return a;if(Array.isArray(a)){var d=id(a),e=d;0===e&&(e|=c&32);e|=c&2;e!==d&&kd(a,e);return new b(a)}}
;var Nd;
function H(a,b,c){null==a&&(a=Nd);Nd=void 0;if(null==a){var d=96;c?(a=[c],d|=512):a=[];b&&(d=d&-16760833|(b&1023)<<14)}else{if(!Array.isArray(a))throw Error("narr");d=id(a);if(d&2048)throw Error("farr");if(d&64)return a;d|=64;if(c&&(d|=512,c!==a[0]))throw Error("mid");a:{c=a;var e=c.length;if(e){var f=e-1;if(vd(c[f])){d|=256;b=f-(+!!(d&512)-1);if(1024<=b)throw Error("pvtlmt");d=d&-16760833|(b&1023)<<14;break a}}if(b){b=Math.max(b,e-(+!!(d&512)-1));if(1024<b)throw Error("spvt");d=d&-16760833|(b&1023)<<
14}}}kd(a,d);return a}
;function Od(a,b){return Pd(b)}
function Pd(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "boolean":return a?1:0;case "object":if(a)if(Array.isArray(a)){if(xd(a,void 0,0))return}else if(Sc&&null!=a&&a instanceof Uint8Array){if(Tc){for(var b="",c=0,d=a.length-10240;c<d;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);a=btoa(b)}else a=Rc(a);return a}}return a}
;function Qd(a,b,c){a=bd(a);var d=a.length,e=b&256?a[d-1]:void 0;d+=e?-1:0;for(b=b&512?1:0;b<d;b++)a[b]=c(a[b]);if(e){b=a[b]={};for(var f in e)b[f]=c(e[f])}return a}
function Rd(a,b,c,d,e){if(null!=a){if(Array.isArray(a))a=xd(a,void 0,0)?void 0:e&&id(a)&2?a:Sd(a,b,c,void 0!==d,e);else if(vd(a)){var f={},g;for(g in a)f[g]=Rd(a[g],b,c,d,e);a=f}else a=b(a,d);return a}}
function Sd(a,b,c,d,e){var f=d||c?id(a):0;d=d?!!(f&32):void 0;a=bd(a);for(var g=0;g<a.length;g++)a[g]=Rd(a[g],b,c,d,e);c&&c(f,a);return a}
function Td(a){return a.Qb===od?a.toJSON():Pd(a)}
;function Ud(a,b,c){c=void 0===c?md:c;if(null!=a){if(Sc&&a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){var d=id(a);if(d&2)return a;b&&(b=0===d||!!(d&32)&&!(d&64||!(d&16)));return b?kd(a,(d|34)&-12293):Sd(a,Ud,d&4?md:c,!0,!0)}a.Qb===od&&(c=a.s,d=jd(c),a=d&2?a:Vd(a,c,d,!0));return a}}
function Vd(a,b,c,d){a=a.constructor;b=Wd(b,c,d);id(b);Nd=b;b=new a(b);Nd=void 0;return b}
function Wd(a,b,c){var d=c||b&2?md:ld,e=!!(b&32);a=Qd(a,b,function(f){return Ud(f,e,d)});
fd(a,32|(c?2:0));return a}
function Xd(a){var b=a.s,c=jd(b);return c&2?Vd(a,b,c,!1):a}
;function Yd(a,b){a=a.s;return Zd(a,jd(a),b)}
function $d(a,b,c,d){b=d+(+!!(b&512)-1);if(!(0>b||b>=a.length||b>=c))return a[b]}
function Zd(a,b,c,d){if(-1===c)return null;var e=nd(b);if(c>=e){if(b&256)return a[a.length-1][c]}else{var f=a.length;if(d&&b&256&&(d=a[f-1][c],null!=d)){if($d(a,b,e,c)&&null!=ed){var g;a=null!=(g=Bd)?g:Bd={};g=a[ed]||0;4<=g||(a[ed]=g+1,g=Error(),dc(g,"incident"),rc(g))}return d}return $d(a,b,e,c)}}
function ae(a,b,c){var d=a.s,e=jd(d);Ad(e);be(d,e,b,c);return a}
function be(a,b,c,d,e){vd(d);var f=nd(b);if(c>=f||e){var g=b;if(b&256)e=a[a.length-1];else{if(null==d)return g;e=a[f+(+!!(b&512)-1)]={};g|=256}e[c]=d;c<f&&(a[c+(+!!(b&512)-1)]=void 0);g!==b&&kd(a,g);return g}a[c+(+!!(b&512)-1)]=d;b&256&&(a=a[a.length-1],c in a&&delete a[c]);return b}
function ce(a){return!!(2&a)&&!!(4&a)||!!(2048&a)}
function de(a,b,c,d){a=a.s;var e=jd(a);Ad(e);(c=ee(a,e,c))&&c!==b&&null!=d&&(e=be(a,e,c));be(a,e,b,d)}
function ee(a,b,c){for(var d=0,e=0;e<c.length;e++){var f=c[e];null!=Zd(a,b,f)&&(0!==d&&(b=be(a,b,d)),d=f)}return d}
function fe(a,b,c){var d=void 0===d?!1:d;var e=a.s;var f=jd(e),g=Zd(e,f,c,d);b=Md(g,b,f);b!==g&&null!=b&&be(e,f,c,b,d);e=b;if(null==e)return e;a=a.s;f=jd(a);f&2||(g=Xd(e),g!==e&&(e=g,be(a,f,c,e,d)));return e}
function I(a,b,c,d){null!=d?Ld(d,b):d=void 0;return ae(a,c,d)}
function ge(a,b,c,d,e){null!=e?Ld(e,b):e=void 0;de(a,c,d,e)}
function he(a,b){a=hd(a,2,!!(2&b));a=hd(a,32,!0);return a=hd(a,2048,!1)}
function ie(a,b){var c=!0;32&b&&c||(a=hd(a,32,!1));return a}
function je(a,b,c,d){a=a.s;var e=jd(a);Ad(e);var f,g=!!(2&e),h=g?1:2,l=1===h;h=2===h;f&&(f=!g);g=Zd(a,e,b);g=Array.isArray(g)?g:yd;var k=id(g),m=!!(4&k);if(!m){var n=k;0===n&&(n=he(n,e));n=hd(n,1,!0);k=g;var q=e,p=!!(2&n);p&&(q=hd(q,2,!0));for(var t=!p,u=!0,z=0,G=0;z<k.length;z++){var P=Md(k[z],c,q);if(P instanceof c){if(!p){var U=!!(id(P.s)&2);t&&(t=!U);u&&(u=U)}k[G++]=P}}G<z&&(k.length=G);n=hd(n,4,!0);n=hd(n,16,u);n=hd(n,8,t);kd(k,n);p&&Object.freeze(k);k=n}n=!!(8&k)||l&&!g.length;if(f&&!n){ce(k)&&
(g=bd(g),k=he(k,e),e=be(a,e,b,g));f=g;for(n=0;n<f.length;n++)q=f[n],p=Xd(q),q!==p&&(f[n]=p);k=hd(k,8,!0);k=hd(k,16,!f.length);kd(f,k)}ce(k)||(f=k,l?(n=!!(32&k),n||(g=bd(g),f=0,e=be(a,e,b,g)),k=hd(k,!g.length||16&k&&(!m||n)?2:2048,!0)):k=ie(k,e),k!==f&&kd(g,k),l&&Object.freeze(g));h&&ce(k)&&(g=bd(g),k=he(k,e),k=ie(k,e),kd(g,k),be(a,e,b,g));b=g;c=null!=d?Ld(d,c):new c;b.push(c);id(c.s)&2?gd(b,8):gd(b,16)}
function ke(a,b){var c=a.s;b=ee(c,jd(c),le)===b?b:-1;a=Yd(a,b);return null==a||"string"===typeof a?a:void 0}
function me(a,b,c){if(null!=c){if("number"!==typeof c)throw Cd("int32");if(!Number.isFinite(c))throw Cd("int32");c|=0}ae(a,b,c)}
function J(a,b,c){return ae(a,b,Kd(c))}
function ne(a,b,c){if(null!=c){if(!Number.isFinite(c))throw Cd("enum");c|=0}return ae(a,b,c)}
;function K(a,b,c){this.s=H(a,b,c)}
K.prototype.toJSON=function(){if(wd)var a=oe(this,this.s,!1);else a=Sd(this.s,Td,void 0,void 0,!1),a=oe(this,a,!0);return a};
function pe(a){wd=!0;try{return JSON.stringify(a.toJSON(),Od)}finally{wd=!1}}
K.prototype.clone=function(){var a=this.s;return Vd(this,a,jd(a),!1)};
K.prototype.Qb=od;K.prototype.toString=function(){return oe(this,this.s,!1).toString()};
function oe(a,b,c){var d=Ob?void 0:a.constructor.la;var e=jd(c?a.s:b);a=b.length;if(!a)return b;var f;if(vd(c=b[a-1])){a:{var g=c;var h={},l=!1,k;for(k in g){var m=g[k];if(Array.isArray(m)){var n=m;if(xd(m,d,+k)||ud(m)&&0===m.size)m=null;m!=n&&(l=!0)}null!=m?h[k]=m:l=!0}if(l){for(var q in h){g=h;break a}g=null}}g!=c&&(f=!0);a--}for(k=+!!(e&512)-1;0<a;a--){q=a-1;c=b[q];q-=k;if(!(null==c||xd(c,d,q)||ud(c)&&0===c.size))break;var p=!0}if(!f&&!p)return b;b=Array.prototype.slice.call(b,0,a);g&&b.push(g);
return b}
;var qe=window;pb("csi.gstatic.com");pb("googleads.g.doubleclick.net");pb("partner.googleadservices.com");pb("pubads.g.doubleclick.net");pb("securepubads.g.doubleclick.net");pb("tpc.googlesyndication.com");function re(){}
function se(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;function te(a,b){this.width=a;this.height=b}
r=te.prototype;r.clone=function(){return new te(this.width,this.height)};
r.aspectRatio=function(){return this.width/this.height};
r.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
r.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
r.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function ue(){var a=document;var b="IFRAME";"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function ve(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function we(a){var b=xe;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function ye(){var a=[];we(function(b){a.push(b)});
return a}
var xe={Bd:"allow-forms",Cd:"allow-modals",Dd:"allow-orientation-lock",Ed:"allow-pointer-lock",Fd:"allow-popups",Gd:"allow-popups-to-escape-sandbox",Hd:"allow-presentation",Id:"allow-same-origin",Jd:"allow-scripts",Kd:"allow-top-navigation",Ld:"allow-top-navigation-by-user-activation"},ze=se(function(){return ye()});
function Ae(){var a=Be(),b={};Bb(ze(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function Be(){var a=void 0===a?document:a;return a.createElement("iframe")}
;var Ce=(new Date).getTime();function De(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";0===a.indexOf("blob:")&&(a=a.substring(5));a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==
c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function Ee(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=k=0}
function b(n){for(var q=g,p=0;64>p;p+=4)q[p/4]=n[p]<<24|n[p+1]<<16|n[p+2]<<8|n[p+3];for(p=16;80>p;p++)n=q[p-3]^q[p-8]^q[p-14]^q[p-16],q[p]=(n<<1|n>>>31)&4294967295;n=e[0];var t=e[1],u=e[2],z=e[3],G=e[4];for(p=0;80>p;p++){if(40>p)if(20>p){var P=z^t&(u^z);var U=1518500249}else P=t^u^z,U=1859775393;else 60>p?(P=t&u|z&(t|u),U=2400959708):(P=t^u^z,U=3395469782);P=((n<<5|n>>>27)&4294967295)+P+G+U+q[p]&4294967295;G=z;z=u;u=(t<<30|t>>>2)&4294967295;t=n;n=P}e[0]=e[0]+n&4294967295;e[1]=e[1]+t&4294967295;e[2]=
e[2]+u&4294967295;e[3]=e[3]+z&4294967295;e[4]=e[4]+G&4294967295}
function c(n,q){if("string"===typeof n){n=unescape(encodeURIComponent(n));for(var p=[],t=0,u=n.length;t<u;++t)p.push(n.charCodeAt(t));n=p}q||(q=n.length);p=0;if(0==k)for(;p+64<q;)b(n.slice(p,p+64)),p+=64,m+=64;for(;p<q;)if(f[k++]=n[p++],m++,64==k)for(k=0,b(f);p+64<q;)b(n.slice(p,p+64)),p+=64,m+=64}
function d(){var n=[],q=8*m;56>k?c(h,56-k):c(h,64-(k-56));for(var p=63;56<=p;p--)f[p]=q&255,q>>>=8;b(f);for(p=q=0;5>p;p++)for(var t=24;0<=t;t-=8)n[q++]=e[p]>>t&255;return n}
for(var e=[],f=[],g=[],h=[128],l=1;64>l;++l)h[l]=0;var k,m;a();return{reset:a,update:c,digest:d,Tc:function(){for(var n=d(),q="",p=0;p<n.length;p++)q+="0123456789ABCDEF".charAt(Math.floor(n[p]/16))+"0123456789ABCDEF".charAt(n[p]%16);return q}}}
;function Fe(a,b,c){var d=String(C.location.href);return d&&a&&b?[b,Ge(De(d),a,c||null)].join(" "):null}
function Ge(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],Bb(d,function(h){e.push(h)}),He(e.join(" "));
var f=[],g=[];Bb(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];Bb(d,function(h){e.push(h)});
a=He(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function He(a){var b=Ee();b.update(a);return b.Tc().toLowerCase()}
;var Ie={};function Je(a){this.g=a||{cookie:""}}
r=Je.prototype;r.isEnabled=function(){if(!C.navigator.cookieEnabled)return!1;if(this.g.cookie)return!0;this.set("TESTCOOKIESENABLED","1",{Nb:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
r.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.te;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Nb}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.g.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
r.get=function(a,b){for(var c=a+"=",d=(this.g.cookie||"").split(";"),e=0,f;e<d.length;e++){f=ab(d[e]);if(0==f.lastIndexOf(c,0))return f.slice(c.length);if(f==a)return""}return b};
r.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{Nb:0,path:b,domain:c});return d};
r.clear=function(){for(var a=(this.g.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=ab(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var Ke=new Je("undefined"==typeof document?null:document);function Le(a){return!!Ie.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function Me(a,b,c,d){(a=C[a])||"undefined"===typeof document||(a=(new Je(document)).get(b));return a?Fe(a,c,d):null}
function Ne(a){var b=void 0===b?!1:b;var c=De(String(C.location.href)),d=[];var e=b;e=void 0===e?!1:e;var f=C.__SAPISID||C.__APISID||C.__3PSAPISID||C.__OVERRIDE_SID;Le(e)&&(f=f||C.__1PSAPISID);if(f)e=!0;else{if("undefined"!==typeof document){var g=new Je(document);f=g.get("SAPISID")||g.get("APISID")||g.get("__Secure-3PAPISID")||g.get("SID")||g.get("OSID");Le(e)&&(f=f||g.get("__Secure-1PAPISID"))}e=!!f}e&&(e=(c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:"))?
C.__SAPISID:C.__APISID,e||"undefined"===typeof document||(e=new Je(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID")),(e=e?Fe(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e),c&&Le(b)&&((b=Me("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=Me("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a)));return 0==d.length?null:d.join(" ")}
;function Oe(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function Pe(){this.za=this.za;this.l=this.l}
Pe.prototype.za=!1;Pe.prototype.dispose=function(){this.za||(this.za=!0,this.ra())};
Pe.prototype.addOnDisposeCallback=function(a,b){this.za?void 0!==b?a.call(b):a():(this.l||(this.l=[]),this.l.push(void 0!==b?Va(a,b):a))};
Pe.prototype.ra=function(){if(this.l)for(;this.l.length;)this.l.shift()()};function Te(a,b){this.type=a;this.g=this.target=b;this.defaultPrevented=this.i=!1}
Te.prototype.stopPropagation=function(){this.i=!0};
Te.prototype.preventDefault=function(){this.defaultPrevented=!0};var Ue=function(){if(!C.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{var c=function(){};
C.addEventListener("test",c,b);C.removeEventListener("test",c,b)}catch(d){}return a}();function Ve(a,b){Te.call(this,a?a.type:"");this.relatedTarget=this.g=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.h=null;a&&this.init(a,b)}
Xa(Ve,Te);var We={2:"touch",3:"pen",4:"mouse"};
Ve.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.g=b;if(b=a.relatedTarget){if(Bc){a:{try{tc(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:We[a.pointerType]||"";this.state=a.state;
this.h=a;a.defaultPrevented&&Ve.ma.preventDefault.call(this)};
Ve.prototype.stopPropagation=function(){Ve.ma.stopPropagation.call(this);this.h.stopPropagation?this.h.stopPropagation():this.h.cancelBubble=!0};
Ve.prototype.preventDefault=function(){Ve.ma.preventDefault.call(this);var a=this.h;a.preventDefault?a.preventDefault():a.returnValue=!1};var Xe="closure_listenable_"+(1E6*Math.random()|0);var Ye=0;function Ze(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.zb=e;this.key=++Ye;this.ob=this.ub=!1}
function $e(a){a.ob=!0;a.listener=null;a.proxy=null;a.src=null;a.zb=null}
;function af(a){this.src=a;this.listeners={};this.g=0}
af.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.g++);var g=bf(a,b,d,e);-1<g?(b=a[g],c||(b.ub=!1)):(b=new Ze(b,this.src,f,!!d,e),b.ub=c,a.push(b));return b};
af.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=bf(e,b,c,d);return-1<b?($e(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.g--),!0):!1};
function cf(a,b){var c=b.type;c in a.listeners&&Cb(a.listeners[c],b)&&($e(b),0==a.listeners[c].length&&(delete a.listeners[c],a.g--))}
function bf(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.ob&&f.listener==b&&f.capture==!!c&&f.zb==d)return e}return-1}
;var df="closure_lm_"+(1E6*Math.random()|0),ef={},ff=0;function gf(a,b,c,d,e){if(d&&d.once)hf(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)gf(a,b[f],c,d,e);else c=jf(c),a&&a[Xe]?a.Ja(b,c,Pa(d)?!!d.capture:!!d,e):kf(a,b,c,!1,d,e)}
function kf(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Pa(e)?!!e.capture:!!e,h=lf(a);h||(a[df]=h=new af(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=mf();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)Ue||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(nf(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");ff++}}
function mf(){function a(c){return b.call(a.src,a.listener,c)}
var b=of;return a}
function hf(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)hf(a,b[f],c,d,e);else c=jf(c),a&&a[Xe]?a.g.add(String(b),c,!0,Pa(d)?!!d.capture:!!d,e):kf(a,b,c,!0,d,e)}
function pf(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)pf(a,b[f],c,d,e);else(d=Pa(d)?!!d.capture:!!d,c=jf(c),a&&a[Xe])?a.g.remove(String(b),c,d,e):a&&(a=lf(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=bf(b,c,d,e)),(c=-1<a?b[a]:null)&&qf(c))}
function qf(a){if("number"!==typeof a&&a&&!a.ob){var b=a.src;if(b&&b[Xe])cf(b.g,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(nf(c),d):b.addListener&&b.removeListener&&b.removeListener(d);ff--;(c=lf(b))?(cf(c,a),0==c.g&&(c.src=null,b[df]=null)):$e(a)}}}
function nf(a){return a in ef?ef[a]:ef[a]="on"+a}
function of(a,b){if(a.ob)a=!0;else{b=new Ve(b,this);var c=a.listener,d=a.zb||a.src;a.ub&&qf(a);a=c.call(d,b)}return a}
function lf(a){a=a[df];return a instanceof af?a:null}
var rf="__closure_events_fn_"+(1E9*Math.random()>>>0);function jf(a){if("function"===typeof a)return a;a[rf]||(a[rf]=function(b){return a.handleEvent(b)});
return a[rf]}
;function sf(){Pe.call(this);this.g=new af(this);this.O=this;this.G=null}
Xa(sf,Pe);sf.prototype[Xe]=!0;sf.prototype.addEventListener=function(a,b,c,d){gf(this,a,b,c,d)};
sf.prototype.removeEventListener=function(a,b,c,d){pf(this,a,b,c,d)};
function tf(a,b){var c=a.G;if(c){var d=[];for(var e=1;c;c=c.G)d.push(c),++e}a=a.O;c=b.type||b;"string"===typeof b?b=new Te(b,a):b instanceof Te?b.target=b.target||a:(e=b,b=new Te(c,a),Mb(b,e));e=!0;if(d)for(var f=d.length-1;!b.i&&0<=f;f--){var g=b.g=d[f];e=uf(g,c,!0,b)&&e}b.i||(g=b.g=a,e=uf(g,c,!0,b)&&e,b.i||(e=uf(g,c,!1,b)&&e));if(d)for(f=0;!b.i&&f<d.length;f++)g=b.g=d[f],e=uf(g,c,!1,b)&&e}
sf.prototype.ra=function(){sf.ma.ra.call(this);if(this.g){var a=this.g,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,$e(d[e]);delete a.listeners[c];a.g--}}this.G=null};
sf.prototype.Ja=function(a,b,c,d){return this.g.add(String(a),b,!1,c,d)};
function uf(a,b,c,d){b=a.g.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.ob&&g.capture==c){var h=g.listener,l=g.zb||g.src;g.ub&&cf(a.g,g);e=!1!==h.call(l,d)&&e}}return e&&!d.defaultPrevented}
;function vf(a){sf.call(this);var b=this;this.K=this.i=0;this.ha=null!=a?a:{pa:function(e,f){return setTimeout(e,f)},
ba:function(e){clearTimeout(e)}};
var c,d;this.h=null!=(d=null==(c=window.navigator)?void 0:c.onLine)?d:!0;this.o=function(){return B(function(e){return A(e,wf(b),0)})};
window.addEventListener("offline",this.o);window.addEventListener("online",this.o);this.K||xf(this)}
y(vf,sf);function yf(){var a=zf;vf.g||(vf.g=new vf(a));return vf.g}
vf.prototype.dispose=function(){window.removeEventListener("offline",this.o);window.removeEventListener("online",this.o);this.ha.ba(this.K);delete vf.g};
vf.prototype.ca=function(){return this.h};
function xf(a){a.K=a.ha.pa(function(){var b;return B(function(c){if(1==c.g)return a.h?(null==(b=window.navigator)?0:b.onLine)?c.B(3):A(c,wf(a),3):A(c,wf(a),3);xf(a);c.g=0})},3E4)}
function wf(a,b){return a.u?a.u:a.u=new Promise(function(c){var d,e,f,g;return B(function(h){switch(h.g){case 1:return d=window.AbortController?new window.AbortController:void 0,f=null==(e=d)?void 0:e.signal,g=!1,va(h,2,3),d&&(a.i=a.ha.pa(function(){d.abort()},b||2E4)),A(h,fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:h.O=[h.i];h.o=0;h.u=0;a.u=void 0;a.i&&(a.ha.ba(a.i),a.i=0);g!==a.h&&(a.h=g,a.h?tf(a,"networkstatus-online"):tf(a,"networkstatus-offline"));c(g);xa(h);break;case 2:wa(h),g=!1,h.B(3)}})})}
;function Af(){this.data=[];this.g=-1}
Af.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&Number.isInteger(a)&&this.data[a]!==b&&(this.data[a]=b,this.g=-1)};
Af.prototype.get=function(a){return!!this.data[a]};
function Bf(a){-1===a.g&&(a.g=a.data.reduce(function(b,c,d){return b+(c?Math.pow(2,d):0)},0));
return a.g}
;function Cf(a){this.s=H(a)}
y(Cf,K);function Df(a){this.s=H(a)}
y(Df,K);function Ef(a,b){return J(a,2,b)}
function Ff(a,b){return J(a,3,b)}
function Gf(a,b){return J(a,4,b)}
function Hf(a,b){return J(a,5,b)}
function If(a,b){return J(a,9,b)}
function Jf(a,b){var c=a.s,d=jd(c);Ad(d);if(null==b)be(c,d,10);else{if(!Array.isArray(b))throw Cd();var e=id(b),f=e,g=!!(2&e)||!!(2048&e),h=g||Object.isFrozen(b),l;if(l=!h)l=!1;for(var k=!0,m=!0,n=0;n<b.length;n++){var q=b[n];Ld(q,Cf);g||(q=!!(id(q.s)&2),k&&(k=!q),m&&(m=q))}g||(e=hd(e,5,!0),e=hd(e,8,k),e=hd(e,16,m));if(l||h&&e!==f)b=bd(b),f=0,e=he(e,d),e=ie(e,d);e!==f&&kd(b,e);be(c,d,10,b)}return a}
function Kf(a,b){return ae(a,11,null==b?b:Ed(b))}
function Lf(a,b){return J(a,1,b)}
function Mf(a,b){return ae(a,7,null==b?b:Ed(b))}
Df.la=[10,6];var Nf="platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");function Of(a){var b;return null!=(b=a.google_tag_data)?b:a.google_tag_data={}}
function Pf(a){var b,c;return"function"===typeof(null==(b=a.navigator)?void 0:null==(c=b.userAgentData)?void 0:c.getHighEntropyValues)}
function Qf(){var a=window;if(!Pf(a))return null;var b=Of(a);if(b.uach_promise)return b.uach_promise;a=a.navigator.userAgentData.getHighEntropyValues(Nf).then(function(c){null!=b.uach||(b.uach=c);return c});
return b.uach_promise=a}
function Rf(a){var b;return Kf(Jf(Hf(Ef(Lf(Gf(Mf(If(Ff(new Df,a.architecture||""),a.bitness||""),a.mobile||!1),a.model||""),a.platform||""),a.platformVersion||""),a.uaFullVersion||""),(null==(b=a.fullVersionList)?void 0:b.map(function(c){var d=new Cf;d=J(d,1,c.brand);return J(d,2,c.version)}))||[]),a.wow64||!1)}
function Sf(){var a,b;return null!=(b=null==(a=Qf())?void 0:a.then(function(c){return Rf(c)}))?b:null}
;function Tf(a,b){this.i=a;this.l=b;this.h=0;this.g=null}
Tf.prototype.get=function(){if(0<this.h){this.h--;var a=this.g;this.g=a.next;a.next=null}else a=this.i();return a};
function Uf(a,b){a.l(b);100>a.h&&(a.h++,b.next=a.g,a.g=b)}
;var Vf;function Wf(){var a=C.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!F("Presto")&&(a=function(){var e=ue();e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Va(function(l){if(("*"==h||l.origin==h)&&l.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!Xb()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.fc;c.fc=null;e()}};
return function(e){d.next={fc:e};d=d.next;b.port2.postMessage(0)}}return function(e){C.setTimeout(e,0)}}
;function Xf(){this.h=this.g=null}
Xf.prototype.add=function(a,b){var c=Yf.get();c.set(a,b);this.h?this.h.next=c:this.g=c;this.h=c};
Xf.prototype.remove=function(){var a=null;this.g&&(a=this.g,this.g=this.g.next,this.g||(this.h=null),a.next=null);return a};
var Yf=new Tf(function(){return new Zf},function(a){return a.reset()});
function Zf(){this.next=this.scope=this.g=null}
Zf.prototype.set=function(a,b){this.g=a;this.scope=b;this.next=null};
Zf.prototype.reset=function(){this.next=this.scope=this.g=null};var $f,ag=!1,bg=new Xf;function cg(a,b){$f||dg();ag||($f(),ag=!0);bg.add(a,b)}
function dg(){if(C.Promise&&C.Promise.resolve){var a=C.Promise.resolve(void 0);$f=function(){a.then(eg)}}else $f=function(){var b=eg;
"function"!==typeof C.setImmediate||C.Window&&C.Window.prototype&&(Wb()||!F("Edge"))&&C.Window.prototype.setImmediate==C.setImmediate?(Vf||(Vf=Wf()),Vf(b)):C.setImmediate(b)}}
function eg(){for(var a;a=bg.remove();){try{a.g.call(a.scope)}catch(b){rc(b)}Uf(Yf,a)}ag=!1}
;function fg(a,b){this.g=a[C.Symbol.iterator]();this.h=b}
fg.prototype[Symbol.iterator]=function(){return this};
fg.prototype.next=function(){var a=this.g.next();return{value:a.done?void 0:this.h.call(void 0,a.value),done:a.done}};
function gg(a,b){return new fg(a,b)}
;function hg(){this.blockSize=-1}
;function ig(){this.blockSize=-1;this.blockSize=64;this.g=[];this.o=[];this.u=[];this.i=[];this.i[0]=128;for(var a=1;a<this.blockSize;++a)this.i[a]=0;this.l=this.h=0;this.reset()}
Xa(ig,hg);ig.prototype.reset=function(){this.g[0]=1732584193;this.g[1]=4023233417;this.g[2]=2562383102;this.g[3]=271733878;this.g[4]=3285377520;this.l=this.h=0};
function jg(a,b,c){c||(c=0);var d=a.u;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.g[0];c=a.g[1];var g=a.g[2],h=a.g[3],l=a.g[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var k=1518500249}else f=c^g^h,k=1859775393;else 60>e?(f=c&g|h&(c|g),k=2400959708):
(f=c^g^h,k=3395469782);f=(b<<5|b>>>27)+f+l+k+d[e]&4294967295;l=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.g[0]=a.g[0]+b&4294967295;a.g[1]=a.g[1]+c&4294967295;a.g[2]=a.g[2]+g&4294967295;a.g[3]=a.g[3]+h&4294967295;a.g[4]=a.g[4]+l&4294967295}
ig.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.o,f=this.h;d<b;){if(0==f)for(;d<=c;)jg(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){jg(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){jg(this,e);f=0;break}}this.h=f;this.l+=b}};
ig.prototype.digest=function(){var a=[],b=8*this.l;56>this.h?this.update(this.i,56-this.h):this.update(this.i,this.blockSize-(this.h-56));for(var c=this.blockSize-1;56<=c;c--)this.o[c]=b&255,b/=256;jg(this,this.o);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.g[c]>>d&255,++b;return a};function kg(){}
kg.prototype.next=function(){return lg};
var lg={done:!0,value:void 0};function mg(a){return{value:a,done:!1}}
kg.prototype.ia=function(){return this};function ng(a){if(a instanceof og||a instanceof pg||a instanceof qg)return a;if("function"==typeof a.next)return new og(function(){return a});
if("function"==typeof a[Symbol.iterator])return new og(function(){return a[Symbol.iterator]()});
if("function"==typeof a.ia)return new og(function(){return a.ia()});
throw Error("Not an iterator or iterable.");}
function og(a){this.h=a}
og.prototype.ia=function(){return new pg(this.h())};
og.prototype[Symbol.iterator]=function(){return new qg(this.h())};
og.prototype.g=function(){return new qg(this.h())};
function pg(a){this.h=a}
y(pg,kg);pg.prototype.next=function(){return this.h.next()};
pg.prototype[Symbol.iterator]=function(){return new qg(this.h)};
pg.prototype.g=function(){return new qg(this.h)};
function qg(a){og.call(this,function(){return a});
this.i=a}
y(qg,og);qg.prototype.next=function(){return this.i.next()};var rg=C.JSON.stringify;function sg(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function tg(a){this.g=0;this.G=void 0;this.l=this.h=this.i=null;this.o=this.u=!1;if(a!=re)try{var b=this;a.call(void 0,function(c){ug(b,2,c)},function(c){ug(b,3,c)})}catch(c){ug(this,3,c)}}
function vg(){this.next=this.context=this.h=this.i=this.g=null;this.l=!1}
vg.prototype.reset=function(){this.context=this.h=this.i=this.g=null;this.l=!1};
var wg=new Tf(function(){return new vg},function(a){a.reset()});
function xg(a,b,c){var d=wg.get();d.i=a;d.h=b;d.context=c;return d}
tg.prototype.then=function(a,b,c){return yg(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
tg.prototype.$goog_Thenable=!0;tg.prototype.cancel=function(a){if(0==this.g){var b=new zg(a);cg(function(){Ag(this,b)},this)}};
function Ag(a,b){if(0==a.g)if(a.i){var c=a.i;if(c.h){for(var d=0,e=null,f=null,g=c.h;g&&(g.l||(d++,g.g==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.g&&1==d?Ag(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):Bg(c),Cg(c,e,3,b)))}a.i=null}else ug(a,3,b)}
function Dg(a,b){a.h||2!=a.g&&3!=a.g||Eg(a);a.l?a.l.next=b:a.h=b;a.l=b}
function yg(a,b,c,d){var e=xg(null,null,null);e.g=new tg(function(f,g){e.i=b?function(h){try{var l=b.call(d,h);f(l)}catch(k){g(k)}}:f;
e.h=c?function(h){try{var l=c.call(d,h);void 0===l&&h instanceof zg?g(h):f(l)}catch(k){g(k)}}:g});
e.g.i=a;Dg(a,e);return e.g}
tg.prototype.O=function(a){this.g=0;ug(this,2,a)};
tg.prototype.na=function(a){this.g=0;ug(this,3,a)};
function ug(a,b,c){if(0==a.g){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.g=1;a:{var d=c,e=a.O,f=a.na;if(d instanceof tg){Dg(d,xg(e||re,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(k){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Pa(d))try{var l=d.then;if("function"===typeof l){Fg(d,l,e,f,a);g=!0;break a}}catch(k){f.call(a,k);g=!0;break a}g=!1}}}g||(a.G=c,a.g=b,a.i=null,Eg(a),3!=b||c instanceof zg||Gg(a,c))}}
function Fg(a,b,c,d,e){function f(l){h||(h=!0,d.call(e,l))}
function g(l){h||(h=!0,c.call(e,l))}
var h=!1;try{b.call(a,g,f)}catch(l){f(l)}}
function Eg(a){a.u||(a.u=!0,cg(a.K,a))}
function Bg(a){var b=null;a.h&&(b=a.h,a.h=b.next,b.next=null);a.h||(a.l=null);return b}
tg.prototype.K=function(){for(var a;a=Bg(this);)Cg(this,a,this.g,this.G);this.u=!1};
function Cg(a,b,c,d){if(3==c&&b.h&&!b.l)for(;a&&a.o;a=a.i)a.o=!1;if(b.g)b.g.i=null,Hg(b,c,d);else try{b.l?b.i.call(b.context):Hg(b,c,d)}catch(e){Ig.call(null,e)}Uf(wg,b)}
function Hg(a,b,c){2==b?a.i.call(a.context,c):a.h&&a.h.call(a.context,c)}
function Gg(a,b){a.o=!0;cg(function(){a.o&&Ig.call(null,b)})}
var Ig=rc;function zg(a){Za.call(this,a)}
Xa(zg,Za);zg.prototype.name="cancel";function L(a){Pe.call(this);this.u=1;this.i=[];this.o=0;this.g=[];this.h={};this.G=!!a}
Xa(L,Pe);r=L.prototype;r.subscribe=function(a,b,c){var d=this.h[a];d||(d=this.h[a]=[]);var e=this.u;this.g[e]=a;this.g[e+1]=b;this.g[e+2]=c;this.u=e+3;d.push(e);return e};
function Jg(a,b,c){var d=Kg;if(a=d.h[a]){var e=d.g;(a=a.find(function(f){return e[f+1]==b&&e[f+2]==c}))&&d.qb(a)}}
r.qb=function(a){var b=this.g[a];if(b){var c=this.h[b];0!=this.o?(this.i.push(a),this.g[a+1]=function(){}):(c&&Cb(c,a),delete this.g[a],delete this.g[a+1],delete this.g[a+2])}return!!b};
r.Za=function(a,b){var c=this.h[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.G)for(e=0;e<c.length;e++){var g=c[e];Lg(this.g[g+1],this.g[g+2],d)}else{this.o++;try{for(e=0,f=c.length;e<f&&!this.za;e++)g=c[e],this.g[g+1].apply(this.g[g+2],d)}finally{if(this.o--,0<this.i.length&&0==this.o)for(;c=this.i.pop();)this.qb(c)}}return 0!=e}return!1};
function Lg(a,b,c){cg(function(){a.apply(b,c)})}
r.clear=function(a){if(a){var b=this.h[a];b&&(b.forEach(this.qb,this),delete this.h[a])}else this.g.length=0,this.h={}};
r.ra=function(){L.ma.ra.call(this);this.clear();this.i.length=0};function Mg(a){this.g=a}
Mg.prototype.set=function(a,b){void 0===b?this.g.remove(a):this.g.set(a,rg(b))};
Mg.prototype.get=function(a){try{var b=this.g.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Mg.prototype.remove=function(a){this.g.remove(a)};function Ng(a){this.g=a}
Xa(Ng,Mg);function Og(a){this.data=a}
function Pg(a){return void 0===a||a instanceof Og?a:new Og(a)}
Ng.prototype.set=function(a,b){Ng.ma.set.call(this,a,Pg(b))};
Ng.prototype.h=function(a){a=Ng.ma.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Ng.prototype.get=function(a){if(a=this.h(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Qg(a){this.g=a}
Xa(Qg,Ng);Qg.prototype.set=function(a,b,c){if(b=Pg(b)){if(c){if(c<Wa()){Qg.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Wa()}Qg.ma.set.call(this,a,b)};
Qg.prototype.h=function(a){var b=Qg.ma.h.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Wa()||c&&c>Wa())Qg.prototype.remove.call(this,a);else return b}};function Rg(){}
;function Sg(){}
Xa(Sg,Rg);Sg.prototype[Symbol.iterator]=function(){return ng(this.ia(!0)).g()};
Sg.prototype.clear=function(){var a=Array.from(this);a=w(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function Tg(a){this.g=a;this.h=null}
Xa(Tg,Sg);r=Tg.prototype;r.set=function(a,b){Ug(this);try{this.g.setItem(a,b)}catch(c){if(0==this.g.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
r.get=function(a){Ug(this);a=this.g.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
r.remove=function(a){Ug(this);this.g.removeItem(a)};
r.ia=function(a){Ug(this);var b=0,c=this.g,d=new kg;d.next=function(){if(b>=c.length)return lg;var e=c.key(b++);if(a)return mg(e);e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return mg(e)};
return d};
r.clear=function(){Ug(this);this.g.clear()};
r.key=function(a){Ug(this);return this.g.key(a)};
function Ug(a){if(null==a.g)throw Error("Storage mechanism: Storage unavailable");var b;(null!=(b=a.h)?b:a.h=Vg(a.g))||rc(Error("Storage mechanism: Storage unavailable"))}
function Vg(a){if(!a)return!1;try{return a.setItem("__sak","1"),a.removeItem("__sak"),!0}catch(b){return b instanceof DOMException&&("QuotaExceededError"===b.name||22===b.code||1014===b.code||"NS_ERROR_DOM_QUOTA_REACHED"===b.name)&&a&&0!==a.length}}
;function Wg(){var a=null;try{a=C.localStorage||null}catch(b){}Tg.call(this,a)}
Xa(Wg,Tg);function Xg(a,b){this.h={};this.g=[];this.i=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Xg)for(c=Yg(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function Yg(a){Zg(a);return a.g.concat()}
r=Xg.prototype;r.has=function(a){return $g(this.h,a)};
r.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||ah;Zg(this);for(var c,d=0;c=this.g[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function ah(a,b){return a===b}
r.clear=function(){this.h={};this.i=this.size=this.g.length=0};
r.remove=function(a){return this.delete(a)};
r.delete=function(a){return $g(this.h,a)?(delete this.h[a],--this.size,this.i++,this.g.length>2*this.size&&Zg(this),!0):!1};
function Zg(a){if(a.size!=a.g.length){for(var b=0,c=0;b<a.g.length;){var d=a.g[b];$g(a.h,d)&&(a.g[c++]=d);b++}a.g.length=c}if(a.size!=a.g.length){var e={};for(c=b=0;b<a.g.length;)d=a.g[b],$g(e,d)||(a.g[c++]=d,e[d]=1),b++;a.g.length=c}}
r.get=function(a,b){return $g(this.h,a)?this.h[a]:b};
r.set=function(a,b){$g(this.h,a)||(this.size+=1,this.g.push(a),this.i++);this.h[a]=b};
r.forEach=function(a,b){for(var c=Yg(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
r.clone=function(){return new Xg(this)};
r.keys=function(){return ng(this.ia(!0)).g()};
r.values=function(){return ng(this.ia(!1)).g()};
r.entries=function(){var a=this;return gg(this.keys(),function(b){return[b,a.get(b)]})};
r.ia=function(a){Zg(this);var b=0,c=this.i,d=this,e=new kg;e.next=function(){if(c!=d.i)throw Error("The map has changed since the iterator was created");if(b>=d.g.length)return lg;var f=d.g[b++];return mg(a?f:d.h[f])};
return e};
function $g(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;function bh(a,b){this.h=a;this.g=null;var c;if(c=zc)c=!(9<=Number(Lc));if(c){ch||(ch=new Xg);this.g=ch.get(a);this.g||(b?this.g=document.getElementById(b):(this.g=document.createElement("userdata"),this.g.addBehavior("#default#userData"),document.body.appendChild(this.g)),ch.set(a,this.g));try{this.g.load(this.h)}catch(d){this.g=null}}}
Xa(bh,Sg);var dh={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},ch=null;function eh(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return dh[b]})}
r=bh.prototype;r.set=function(a,b){this.g.setAttribute(eh(a),b);fh(this)};
r.get=function(a){a=this.g.getAttribute(eh(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
r.remove=function(a){this.g.removeAttribute(eh(a));fh(this)};
r.ia=function(a){var b=0,c=this.g.XMLDocument.documentElement.attributes,d=new kg;d.next=function(){if(b>=c.length)return lg;var e=c[b++];if(a)return mg(decodeURIComponent(e.nodeName.replace(/\./g,"%")).slice(1));e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return mg(e)};
return d};
r.clear=function(){for(var a=this.g.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);fh(this)};
function fh(a){try{a.g.save(a.h)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function gh(a,b){this.h=a;this.g=b+"::"}
Xa(gh,Sg);gh.prototype.set=function(a,b){this.h.set(this.g+a,b)};
gh.prototype.get=function(a){return this.h.get(this.g+a)};
gh.prototype.remove=function(a){this.h.remove(this.g+a)};
gh.prototype.ia=function(a){var b=this.h[Symbol.iterator](),c=this,d=new kg;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.g.length)!=c.g;){e=b.next();if(e.done)return e;e=e.value}return mg(a?e.slice(c.g.length):c.h.get(e))};
return d};/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
var M={},hh="undefined"!==typeof Uint8Array&&"undefined"!==typeof Uint16Array&&"undefined"!==typeof Int32Array;M.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if("object"!==typeof c)throw new TypeError(c+"must be non-object");for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}}return a};
M.Xb=function(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a};
var ih={Pa:function(a,b,c,d,e){if(b.subarray&&a.subarray)a.set(b.subarray(c,c+d),e);else for(var f=0;f<d;f++)a[e+f]=b[c+f]},
kc:function(a){var b,c;var d=c=0;for(b=a.length;d<b;d++)c+=a[d].length;var e=new Uint8Array(c);d=c=0;for(b=a.length;d<b;d++){var f=a[d];e.set(f,c);c+=f.length}return e}},jh={Pa:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},
kc:function(a){return[].concat.apply([],a)}};
M.ud=function(){hh?(M.Oa=Uint8Array,M.oa=Uint16Array,M.Ic=Int32Array,M.assign(M,ih)):(M.Oa=Array,M.oa=Array,M.Ic=Array,M.assign(M,jh))};
M.ud();var kh=!0;try{new Uint8Array(1)}catch(a){kh=!1}
function lh(a){var b,c,d=a.length,e=0;for(b=0;b<d;b++){var f=a.charCodeAt(b);if(55296===(f&64512)&&b+1<d){var g=a.charCodeAt(b+1);56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)}e+=128>f?1:2048>f?2:65536>f?3:4}var h=new M.Oa(e);for(b=c=0;c<e;b++)f=a.charCodeAt(b),55296===(f&64512)&&b+1<d&&(g=a.charCodeAt(b+1),56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)),128>f?h[c++]=f:(2048>f?h[c++]=192|f>>>6:(65536>f?h[c++]=224|f>>>12:(h[c++]=240|f>>>18,h[c++]=128|f>>>12&63),h[c++]=128|f>>>
6&63),h[c++]=128|f&63);return h}
;var mh={};mh=function(a,b,c,d){var e=a&65535|0;a=a>>>16&65535|0;for(var f;0!==c;){f=2E3<c?2E3:c;c-=f;do e=e+b[d++]|0,a=a+e|0;while(--f);e%=65521;a%=65521}return e|a<<16|0};for(var nh={},oh,ph=[],qh=0;256>qh;qh++){oh=qh;for(var rh=0;8>rh;rh++)oh=oh&1?3988292384^oh>>>1:oh>>>1;ph[qh]=oh}nh=function(a,b,c,d){c=d+c;for(a^=-1;d<c;d++)a=a>>>8^ph[(a^b[d])&255];return a^-1};var sh={};sh={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function th(a){for(var b=a.length;0<=--b;)a[b]=0}
var uh=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],vh=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],wh=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],xh=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],yh=Array(576);th(yh);var zh=Array(60);th(zh);var Ah=Array(512);th(Ah);var Bh=Array(256);th(Bh);var Ch=Array(29);th(Ch);var Dh=Array(30);th(Dh);function Eh(a,b,c,d,e){this.Ec=a;this.Xc=b;this.Wc=c;this.Uc=d;this.od=e;this.nc=a&&a.length}
var Fh,Gh,Hh;function Ih(a,b){this.ic=a;this.Wa=0;this.Ca=b}
function Jh(a,b){a.L[a.pending++]=b&255;a.L[a.pending++]=b>>>8&255}
function Kh(a,b,c){a.P>16-c?(a.V|=b<<a.P&65535,Jh(a,a.V),a.V=b>>16-a.P,a.P+=c-16):(a.V|=b<<a.P&65535,a.P+=c)}
function Lh(a,b,c){Kh(a,c[2*b],c[2*b+1])}
function Mh(a,b){var c=0;do c|=a&1,a>>>=1,c<<=1;while(0<--b);return c>>>1}
function Nh(a,b,c){var d=Array(16),e=0,f;for(f=1;15>=f;f++)d[f]=e=e+c[f-1]<<1;for(c=0;c<=b;c++)e=a[2*c+1],0!==e&&(a[2*c]=Mh(d[e]++,e))}
function Oh(a){var b;for(b=0;286>b;b++)a.X[2*b]=0;for(b=0;30>b;b++)a.Ha[2*b]=0;for(b=0;19>b;b++)a.S[2*b]=0;a.X[512]=1;a.wa=a.ab=0;a.da=a.matches=0}
function Ph(a){8<a.P?Jh(a,a.V):0<a.P&&(a.L[a.pending++]=a.V);a.V=0;a.P=0}
function Qh(a,b,c){Ph(a);Jh(a,c);Jh(a,~c);M.Pa(a.L,a.window,b,c,a.pending);a.pending+=c}
function si(a,b,c,d){var e=2*b,f=2*c;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]}
function ti(a,b,c){for(var d=a.M[c],e=c<<1;e<=a.va;){e<a.va&&si(b,a.M[e+1],a.M[e],a.depth)&&e++;if(si(b,d,a.M[e],a.depth))break;a.M[c]=a.M[e];c=e;e<<=1}a.M[c]=d}
function ui(a,b,c){var d=0;if(0!==a.da){do{var e=a.L[a.ib+2*d]<<8|a.L[a.ib+2*d+1];var f=a.L[a.Mb+d];d++;if(0===e)Lh(a,f,b);else{var g=Bh[f];Lh(a,g+256+1,b);var h=uh[g];0!==h&&(f-=Ch[g],Kh(a,f,h));e--;g=256>e?Ah[e]:Ah[256+(e>>>7)];Lh(a,g,c);h=vh[g];0!==h&&(e-=Dh[g],Kh(a,e,h))}}while(d<a.da)}Lh(a,256,b)}
function vi(a,b){var c=b.ic,d=b.Ca.Ec,e=b.Ca.nc,f=b.Ca.Uc,g,h=-1;a.va=0;a.Sa=573;for(g=0;g<f;g++)0!==c[2*g]?(a.M[++a.va]=h=g,a.depth[g]=0):c[2*g+1]=0;for(;2>a.va;){var l=a.M[++a.va]=2>h?++h:0;c[2*l]=1;a.depth[l]=0;a.wa--;e&&(a.ab-=d[2*l+1])}b.Wa=h;for(g=a.va>>1;1<=g;g--)ti(a,c,g);l=f;do g=a.M[1],a.M[1]=a.M[a.va--],ti(a,c,1),d=a.M[1],a.M[--a.Sa]=g,a.M[--a.Sa]=d,c[2*l]=c[2*g]+c[2*d],a.depth[l]=(a.depth[g]>=a.depth[d]?a.depth[g]:a.depth[d])+1,c[2*g+1]=c[2*d+1]=l,a.M[1]=l++,ti(a,c,1);while(2<=a.va);a.M[--a.Sa]=
a.M[1];g=b.ic;l=b.Wa;d=b.Ca.Ec;e=b.Ca.nc;f=b.Ca.Xc;var k=b.Ca.Wc,m=b.Ca.od,n,q=0;for(n=0;15>=n;n++)a.qa[n]=0;g[2*a.M[a.Sa]+1]=0;for(b=a.Sa+1;573>b;b++){var p=a.M[b];n=g[2*g[2*p+1]+1]+1;n>m&&(n=m,q++);g[2*p+1]=n;if(!(p>l)){a.qa[n]++;var t=0;p>=k&&(t=f[p-k]);var u=g[2*p];a.wa+=u*(n+t);e&&(a.ab+=u*(d[2*p+1]+t))}}if(0!==q){do{for(n=m-1;0===a.qa[n];)n--;a.qa[n]--;a.qa[n+1]+=2;a.qa[m]--;q-=2}while(0<q);for(n=m;0!==n;n--)for(p=a.qa[n];0!==p;)d=a.M[--b],d>l||(g[2*d+1]!==n&&(a.wa+=(n-g[2*d+1])*g[2*d],g[2*
d+1]=n),p--)}Nh(c,h,a.qa)}
function wi(a,b,c){var d,e=-1,f=b[1],g=0,h=7,l=4;0===f&&(h=138,l=3);b[2*(c+1)+1]=65535;for(d=0;d<=c;d++){var k=f;f=b[2*(d+1)+1];++g<h&&k===f||(g<l?a.S[2*k]+=g:0!==k?(k!==e&&a.S[2*k]++,a.S[32]++):10>=g?a.S[34]++:a.S[36]++,g=0,e=k,0===f?(h=138,l=3):k===f?(h=6,l=3):(h=7,l=4))}}
function xi(a,b,c){var d,e=-1,f=b[1],g=0,h=7,l=4;0===f&&(h=138,l=3);for(d=0;d<=c;d++){var k=f;f=b[2*(d+1)+1];if(!(++g<h&&k===f)){if(g<l){do Lh(a,k,a.S);while(0!==--g)}else 0!==k?(k!==e&&(Lh(a,k,a.S),g--),Lh(a,16,a.S),Kh(a,g-3,2)):10>=g?(Lh(a,17,a.S),Kh(a,g-3,3)):(Lh(a,18,a.S),Kh(a,g-11,7));g=0;e=k;0===f?(h=138,l=3):k===f?(h=6,l=3):(h=7,l=4)}}}
function yi(a){var b=4093624447,c;for(c=0;31>=c;c++,b>>>=1)if(b&1&&0!==a.X[2*c])return 0;if(0!==a.X[18]||0!==a.X[20]||0!==a.X[26])return 1;for(c=32;256>c;c++)if(0!==a.X[2*c])return 1;return 0}
var zi=!1;function Ai(a,b,c){a.L[a.ib+2*a.da]=b>>>8&255;a.L[a.ib+2*a.da+1]=b&255;a.L[a.Mb+a.da]=c&255;a.da++;0===b?a.X[2*c]++:(a.matches++,b--,a.X[2*(Bh[c]+256+1)]++,a.Ha[2*(256>b?Ah[b]:Ah[256+(b>>>7)])]++);return a.da===a.mb-1}
;function Bi(a,b){a.msg=sh[b];return b}
function Ci(a){for(var b=a.length;0<=--b;)a[b]=0}
function Di(a){var b=a.state,c=b.pending;c>a.F&&(c=a.F);0!==c&&(M.Pa(a.output,b.L,b.nb,c,a.Xa),a.Xa+=c,b.nb+=c,a.Yb+=c,a.F-=c,b.pending-=c,0===b.pending&&(b.nb=0))}
function N(a,b){var c=0<=a.Z?a.Z:-1,d=a.j-a.Z,e=0;if(0<a.level){2===a.C.Ib&&(a.C.Ib=yi(a));vi(a,a.Bb);vi(a,a.xb);wi(a,a.X,a.Bb.Wa);wi(a,a.Ha,a.xb.Wa);vi(a,a.dc);for(e=18;3<=e&&0===a.S[2*xh[e]+1];e--);a.wa+=3*(e+1)+14;var f=a.wa+3+7>>>3;var g=a.ab+3+7>>>3;g<=f&&(f=g)}else f=g=d+5;if(d+4<=f&&-1!==c)Kh(a,b?1:0,3),Qh(a,c,d);else if(4===a.strategy||g===f)Kh(a,2+(b?1:0),3),ui(a,yh,zh);else{Kh(a,4+(b?1:0),3);c=a.Bb.Wa+1;d=a.xb.Wa+1;e+=1;Kh(a,c-257,5);Kh(a,d-1,5);Kh(a,e-4,4);for(f=0;f<e;f++)Kh(a,a.S[2*xh[f]+
1],3);xi(a,a.X,c-1);xi(a,a.Ha,d-1);ui(a,a.X,a.Ha)}Oh(a);b&&Ph(a);a.Z=a.j;Di(a.C)}
function Q(a,b){a.L[a.pending++]=b}
function Ei(a,b){a.L[a.pending++]=b>>>8&255;a.L[a.pending++]=b&255}
function Fi(a,b){var c=a.vc,d=a.j,e=a.aa,f=a.wc,g=a.j>a.T-262?a.j-(a.T-262):0,h=a.window,l=a.Ea,k=a.ka,m=a.j+258,n=h[d+e-1],q=h[d+e];a.aa>=a.mc&&(c>>=2);f>a.m&&(f=a.m);do{var p=b;if(h[p+e]===q&&h[p+e-1]===n&&h[p]===h[d]&&h[++p]===h[d+1]){d+=2;for(p++;h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&d<m;);p=258-(m-d);d=m-258;if(p>e){a.Va=b;e=p;if(p>=f)break;n=h[d+e-1];q=h[d+e]}}}while((b=k[b&l])>g&&0!==--c);return e<=
a.m?e:a.m}
function Gi(a){var b=a.T,c;do{var d=a.Gc-a.m-a.j;if(a.j>=b+(b-262)){M.Pa(a.window,a.window,b,b,0);a.Va-=b;a.j-=b;a.Z-=b;var e=c=a.Ab;do{var f=a.head[--e];a.head[e]=f>=b?f-b:0}while(--c);e=c=b;do f=a.ka[--e],a.ka[e]=f>=b?f-b:0;while(--c);d+=b}if(0===a.C.U)break;e=a.C;c=a.window;f=a.j+a.m;var g=e.U;g>d&&(g=d);0===g?c=0:(e.U-=g,M.Pa(c,e.input,e.Ma,g,f),1===e.state.wrap?e.A=mh(e.A,c,g,f):2===e.state.wrap&&(e.A=nh(e.A,c,g,f)),e.Ma+=g,e.Na+=g,c=g);a.m+=c;if(3<=a.m+a.Y)for(d=a.j-a.Y,a.D=a.window[d],a.D=
(a.D<<a.ta^a.window[d+1])&a.sa;a.Y&&!(a.D=(a.D<<a.ta^a.window[d+3-1])&a.sa,a.ka[d&a.Ea]=a.head[a.D],a.head[a.D]=d,d++,a.Y--,3>a.m+a.Y););}while(262>a.m&&0!==a.C.U)}
function Hi(a,b){for(var c;;){if(262>a.m){Gi(a);if(262>a.m&&0===b)return 1;if(0===a.m)break}c=0;3<=a.m&&(a.D=(a.D<<a.ta^a.window[a.j+3-1])&a.sa,c=a.ka[a.j&a.Ea]=a.head[a.D],a.head[a.D]=a.j);0!==c&&a.j-c<=a.T-262&&(a.H=Fi(a,c));if(3<=a.H)if(c=Ai(a,a.j-a.Va,a.H-3),a.m-=a.H,a.H<=a.Ob&&3<=a.m){a.H--;do a.j++,a.D=(a.D<<a.ta^a.window[a.j+3-1])&a.sa,a.ka[a.j&a.Ea]=a.head[a.D],a.head[a.D]=a.j;while(0!==--a.H);a.j++}else a.j+=a.H,a.H=0,a.D=a.window[a.j],a.D=(a.D<<a.ta^a.window[a.j+1])&a.sa;else c=Ai(a,0,a.window[a.j]),
a.m--,a.j++;if(c&&(N(a,!1),0===a.C.F))return 1}a.Y=2>a.j?a.j:2;return 4===b?(N(a,!0),0===a.C.F?3:4):a.da&&(N(a,!1),0===a.C.F)?1:2}
function Ii(a,b){for(var c,d;;){if(262>a.m){Gi(a);if(262>a.m&&0===b)return 1;if(0===a.m)break}c=0;3<=a.m&&(a.D=(a.D<<a.ta^a.window[a.j+3-1])&a.sa,c=a.ka[a.j&a.Ea]=a.head[a.D],a.head[a.D]=a.j);a.aa=a.H;a.zc=a.Va;a.H=2;0!==c&&a.aa<a.Ob&&a.j-c<=a.T-262&&(a.H=Fi(a,c),5>=a.H&&(1===a.strategy||3===a.H&&4096<a.j-a.Va)&&(a.H=2));if(3<=a.aa&&a.H<=a.aa){d=a.j+a.m-3;c=Ai(a,a.j-1-a.zc,a.aa-3);a.m-=a.aa-1;a.aa-=2;do++a.j<=d&&(a.D=(a.D<<a.ta^a.window[a.j+3-1])&a.sa,a.ka[a.j&a.Ea]=a.head[a.D],a.head[a.D]=a.j);while(0!==
--a.aa);a.Ka=0;a.H=2;a.j++;if(c&&(N(a,!1),0===a.C.F))return 1}else if(a.Ka){if((c=Ai(a,0,a.window[a.j-1]))&&N(a,!1),a.j++,a.m--,0===a.C.F)return 1}else a.Ka=1,a.j++,a.m--}a.Ka&&(Ai(a,0,a.window[a.j-1]),a.Ka=0);a.Y=2>a.j?a.j:2;return 4===b?(N(a,!0),0===a.C.F?3:4):a.da&&(N(a,!1),0===a.C.F)?1:2}
function Ji(a,b){for(var c,d,e,f=a.window;;){if(258>=a.m){Gi(a);if(258>=a.m&&0===b)return 1;if(0===a.m)break}a.H=0;if(3<=a.m&&0<a.j&&(d=a.j-1,c=f[d],c===f[++d]&&c===f[++d]&&c===f[++d])){for(e=a.j+258;c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&d<e;);a.H=258-(e-d);a.H>a.m&&(a.H=a.m)}3<=a.H?(c=Ai(a,1,a.H-3),a.m-=a.H,a.j+=a.H,a.H=0):(c=Ai(a,0,a.window[a.j]),a.m--,a.j++);if(c&&(N(a,!1),0===a.C.F))return 1}a.Y=0;return 4===b?(N(a,!0),0===a.C.F?3:4):a.da&&
(N(a,!1),0===a.C.F)?1:2}
function Ki(a,b){for(var c;;){if(0===a.m&&(Gi(a),0===a.m)){if(0===b)return 1;break}a.H=0;c=Ai(a,0,a.window[a.j]);a.m--;a.j++;if(c&&(N(a,!1),0===a.C.F))return 1}a.Y=0;return 4===b?(N(a,!0),0===a.C.F?3:4):a.da&&(N(a,!1),0===a.C.F)?1:2}
function Li(a,b,c,d,e){this.ad=a;this.nd=b;this.qd=c;this.md=d;this.Yc=e}
var Mi;Mi=[new Li(0,0,0,0,function(a,b){var c=65535;for(c>a.ea-5&&(c=a.ea-5);;){if(1>=a.m){Gi(a);if(0===a.m&&0===b)return 1;if(0===a.m)break}a.j+=a.m;a.m=0;var d=a.Z+c;if(0===a.j||a.j>=d)if(a.m=a.j-d,a.j=d,N(a,!1),0===a.C.F)return 1;if(a.j-a.Z>=a.T-262&&(N(a,!1),0===a.C.F))return 1}a.Y=0;if(4===b)return N(a,!0),0===a.C.F?3:4;a.j>a.Z&&N(a,!1);return 1}),
new Li(4,4,8,4,Hi),new Li(4,5,16,8,Hi),new Li(4,6,32,32,Hi),new Li(4,4,16,16,Ii),new Li(8,16,32,32,Ii),new Li(8,16,128,128,Ii),new Li(8,32,128,256,Ii),new Li(32,128,258,1024,Ii),new Li(32,258,258,4096,Ii)];
function Ni(){this.C=null;this.status=0;this.L=null;this.wrap=this.pending=this.nb=this.ea=0;this.v=null;this.fa=0;this.method=8;this.Ta=-1;this.Ea=this.Zb=this.T=0;this.window=null;this.Gc=0;this.head=this.ka=null;this.wc=this.mc=this.strategy=this.level=this.Ob=this.vc=this.aa=this.m=this.Va=this.j=this.Ka=this.zc=this.H=this.Z=this.ta=this.sa=this.Jb=this.Ab=this.D=0;this.X=new M.oa(1146);this.Ha=new M.oa(122);this.S=new M.oa(78);Ci(this.X);Ci(this.Ha);Ci(this.S);this.dc=this.xb=this.Bb=null;this.qa=
new M.oa(16);this.M=new M.oa(573);Ci(this.M);this.Sa=this.va=0;this.depth=new M.oa(573);Ci(this.depth);this.P=this.V=this.Y=this.matches=this.ab=this.wa=this.ib=this.da=this.mb=this.Mb=0}
function Oi(a,b){if(!a||!a.state||5<b||0>b)return a?Bi(a,-2):-2;var c=a.state;if(!a.output||!a.input&&0!==a.U||666===c.status&&4!==b)return Bi(a,0===a.F?-5:-2);c.C=a;var d=c.Ta;c.Ta=b;if(42===c.status)if(2===c.wrap)a.A=0,Q(c,31),Q(c,139),Q(c,8),c.v?(Q(c,(c.v.text?1:0)+(c.v.Aa?2:0)+(c.v.extra?4:0)+(c.v.name?8:0)+(c.v.comment?16:0)),Q(c,c.v.time&255),Q(c,c.v.time>>8&255),Q(c,c.v.time>>16&255),Q(c,c.v.time>>24&255),Q(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),Q(c,c.v.se&255),c.v.extra&&c.v.extra.length&&
(Q(c,c.v.extra.length&255),Q(c,c.v.extra.length>>8&255)),c.v.Aa&&(a.A=nh(a.A,c.L,c.pending,0)),c.fa=0,c.status=69):(Q(c,0),Q(c,0),Q(c,0),Q(c,0),Q(c,0),Q(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),Q(c,3),c.status=113);else{var e=8+(c.Zb-8<<4)<<8;e|=(2<=c.strategy||2>c.level?0:6>c.level?1:6===c.level?2:3)<<6;0!==c.j&&(e|=32);c.status=113;Ei(c,e+(31-e%31));0!==c.j&&(Ei(c,a.A>>>16),Ei(c,a.A&65535));a.A=1}if(69===c.status)if(c.v.extra){for(e=c.pending;c.fa<(c.v.extra.length&65535)&&(c.pending!==c.ea||
(c.v.Aa&&c.pending>e&&(a.A=nh(a.A,c.L,c.pending-e,e)),Di(a),e=c.pending,c.pending!==c.ea));)Q(c,c.v.extra[c.fa]&255),c.fa++;c.v.Aa&&c.pending>e&&(a.A=nh(a.A,c.L,c.pending-e,e));c.fa===c.v.extra.length&&(c.fa=0,c.status=73)}else c.status=73;if(73===c.status)if(c.v.name){e=c.pending;do{if(c.pending===c.ea&&(c.v.Aa&&c.pending>e&&(a.A=nh(a.A,c.L,c.pending-e,e)),Di(a),e=c.pending,c.pending===c.ea)){var f=1;break}f=c.fa<c.v.name.length?c.v.name.charCodeAt(c.fa++)&255:0;Q(c,f)}while(0!==f);c.v.Aa&&c.pending>
e&&(a.A=nh(a.A,c.L,c.pending-e,e));0===f&&(c.fa=0,c.status=91)}else c.status=91;if(91===c.status)if(c.v.comment){e=c.pending;do{if(c.pending===c.ea&&(c.v.Aa&&c.pending>e&&(a.A=nh(a.A,c.L,c.pending-e,e)),Di(a),e=c.pending,c.pending===c.ea)){f=1;break}f=c.fa<c.v.comment.length?c.v.comment.charCodeAt(c.fa++)&255:0;Q(c,f)}while(0!==f);c.v.Aa&&c.pending>e&&(a.A=nh(a.A,c.L,c.pending-e,e));0===f&&(c.status=103)}else c.status=103;103===c.status&&(c.v.Aa?(c.pending+2>c.ea&&Di(a),c.pending+2<=c.ea&&(Q(c,a.A&
255),Q(c,a.A>>8&255),a.A=0,c.status=113)):c.status=113);if(0!==c.pending){if(Di(a),0===a.F)return c.Ta=-1,0}else if(0===a.U&&(b<<1)-(4<b?9:0)<=(d<<1)-(4<d?9:0)&&4!==b)return Bi(a,-5);if(666===c.status&&0!==a.U)return Bi(a,-5);if(0!==a.U||0!==c.m||0!==b&&666!==c.status){d=2===c.strategy?Ki(c,b):3===c.strategy?Ji(c,b):Mi[c.level].Yc(c,b);if(3===d||4===d)c.status=666;if(1===d||3===d)return 0===a.F&&(c.Ta=-1),0;if(2===d&&(1===b?(Kh(c,2,3),Lh(c,256,yh),16===c.P?(Jh(c,c.V),c.V=0,c.P=0):8<=c.P&&(c.L[c.pending++]=
c.V&255,c.V>>=8,c.P-=8)):5!==b&&(Kh(c,0,3),Qh(c,0,0),3===b&&(Ci(c.head),0===c.m&&(c.j=0,c.Z=0,c.Y=0))),Di(a),0===a.F))return c.Ta=-1,0}if(4!==b)return 0;if(0>=c.wrap)return 1;2===c.wrap?(Q(c,a.A&255),Q(c,a.A>>8&255),Q(c,a.A>>16&255),Q(c,a.A>>24&255),Q(c,a.Na&255),Q(c,a.Na>>8&255),Q(c,a.Na>>16&255),Q(c,a.Na>>24&255)):(Ei(c,a.A>>>16),Ei(c,a.A&65535));Di(a);0<c.wrap&&(c.wrap=-c.wrap);return 0!==c.pending?0:1}
;var Pi={};Pi=function(){this.input=null;this.Na=this.U=this.Ma=0;this.output=null;this.Yb=this.F=this.Xa=0;this.msg="";this.state=null;this.Ib=2;this.A=0};var Qi=Object.prototype.toString;
function Ri(a){if(!(this instanceof Ri))return new Ri(a);a=this.options=M.assign({level:-1,method:8,chunkSize:16384,Fa:15,pd:8,strategy:0,Da:""},a||{});a.raw&&0<a.Fa?a.Fa=-a.Fa:a.bd&&0<a.Fa&&16>a.Fa&&(a.Fa+=16);this.err=0;this.msg="";this.ended=!1;this.chunks=[];this.C=new Pi;this.C.F=0;var b=this.C;var c=a.level,d=a.method,e=a.Fa,f=a.pd,g=a.strategy;if(b){var h=1;-1===c&&(c=6);0>e?(h=0,e=-e):15<e&&(h=2,e-=16);if(1>f||9<f||8!==d||8>e||15<e||0>c||9<c||0>g||4<g)b=Bi(b,-2);else{8===e&&(e=9);var l=new Ni;
b.state=l;l.C=b;l.wrap=h;l.v=null;l.Zb=e;l.T=1<<l.Zb;l.Ea=l.T-1;l.Jb=f+7;l.Ab=1<<l.Jb;l.sa=l.Ab-1;l.ta=~~((l.Jb+3-1)/3);l.window=new M.Oa(2*l.T);l.head=new M.oa(l.Ab);l.ka=new M.oa(l.T);l.mb=1<<f+6;l.ea=4*l.mb;l.L=new M.Oa(l.ea);l.ib=1*l.mb;l.Mb=3*l.mb;l.level=c;l.strategy=g;l.method=d;if(b&&b.state){b.Na=b.Yb=0;b.Ib=2;c=b.state;c.pending=0;c.nb=0;0>c.wrap&&(c.wrap=-c.wrap);c.status=c.wrap?42:113;b.A=2===c.wrap?0:1;c.Ta=0;if(!zi){d=Array(16);for(f=g=0;28>f;f++)for(Ch[f]=g,e=0;e<1<<uh[f];e++)Bh[g++]=
f;Bh[g-1]=f;for(f=g=0;16>f;f++)for(Dh[f]=g,e=0;e<1<<vh[f];e++)Ah[g++]=f;for(g>>=7;30>f;f++)for(Dh[f]=g<<7,e=0;e<1<<vh[f]-7;e++)Ah[256+g++]=f;for(e=0;15>=e;e++)d[e]=0;for(e=0;143>=e;)yh[2*e+1]=8,e++,d[8]++;for(;255>=e;)yh[2*e+1]=9,e++,d[9]++;for(;279>=e;)yh[2*e+1]=7,e++,d[7]++;for(;287>=e;)yh[2*e+1]=8,e++,d[8]++;Nh(yh,287,d);for(e=0;30>e;e++)zh[2*e+1]=5,zh[2*e]=Mh(e,5);Fh=new Eh(yh,uh,257,286,15);Gh=new Eh(zh,vh,0,30,15);Hh=new Eh([],wh,0,19,7);zi=!0}c.Bb=new Ih(c.X,Fh);c.xb=new Ih(c.Ha,Gh);c.dc=new Ih(c.S,
Hh);c.V=0;c.P=0;Oh(c);c=0}else c=Bi(b,-2);0===c&&(b=b.state,b.Gc=2*b.T,Ci(b.head),b.Ob=Mi[b.level].nd,b.mc=Mi[b.level].ad,b.wc=Mi[b.level].qd,b.vc=Mi[b.level].md,b.j=0,b.Z=0,b.m=0,b.Y=0,b.H=b.aa=2,b.Ka=0,b.D=0);b=c}}else b=-2;if(0!==b)throw Error(sh[b]);a.header&&(b=this.C)&&b.state&&2===b.state.wrap&&(b.state.v=a.header);if(a.jb){var k;"string"===typeof a.jb?k=lh(a.jb):"[object ArrayBuffer]"===Qi.call(a.jb)?k=new Uint8Array(a.jb):k=a.jb;a=this.C;f=k;g=f.length;if(a&&a.state)if(k=a.state,b=k.wrap,
2===b||1===b&&42!==k.status||k.m)b=-2;else{1===b&&(a.A=mh(a.A,f,g,0));k.wrap=0;g>=k.T&&(0===b&&(Ci(k.head),k.j=0,k.Z=0,k.Y=0),c=new M.Oa(k.T),M.Pa(c,f,g-k.T,k.T,0),f=c,g=k.T);c=a.U;d=a.Ma;e=a.input;a.U=g;a.Ma=0;a.input=f;for(Gi(k);3<=k.m;){f=k.j;g=k.m-2;do k.D=(k.D<<k.ta^k.window[f+3-1])&k.sa,k.ka[f&k.Ea]=k.head[k.D],k.head[k.D]=f,f++;while(--g);k.j=f;k.m=2;Gi(k)}k.j+=k.m;k.Z=k.j;k.Y=k.m;k.m=0;k.H=k.aa=2;k.Ka=0;a.Ma=d;a.input=e;a.U=c;k.wrap=b;b=0}else b=-2;if(0!==b)throw Error(sh[b]);this.je=!0}}
Ri.prototype.push=function(a,b){var c=this.C,d=this.options.chunkSize;if(this.ended)return!1;var e=b===~~b?b:!0===b?4:0;"string"===typeof a?c.input=lh(a):"[object ArrayBuffer]"===Qi.call(a)?c.input=new Uint8Array(a):c.input=a;c.Ma=0;c.U=c.input.length;do{0===c.F&&(c.output=new M.Oa(d),c.Xa=0,c.F=d);a=Oi(c,e);if(1!==a&&0!==a)return Si(this,a),this.ended=!0,!1;if(0===c.F||0===c.U&&(4===e||2===e))if("string"===this.options.Da){var f=M.Xb(c.output,c.Xa);b=f;f=f.length;if(65537>f&&(b.subarray&&kh||!b.subarray))b=
String.fromCharCode.apply(null,M.Xb(b,f));else{for(var g="",h=0;h<f;h++)g+=String.fromCharCode(b[h]);b=g}this.chunks.push(b)}else b=M.Xb(c.output,c.Xa),this.chunks.push(b)}while((0<c.U||0===c.F)&&1!==a);if(4===e)return(c=this.C)&&c.state?(d=c.state.status,42!==d&&69!==d&&73!==d&&91!==d&&103!==d&&113!==d&&666!==d?a=Bi(c,-2):(c.state=null,a=113===d?Bi(c,-3):0)):a=-2,Si(this,a),this.ended=!0,0===a;2===e&&(Si(this,0),c.F=0);return!0};
function Si(a,b){0===b&&(a.result="string"===a.options.Da?a.chunks.join(""):M.kc(a.chunks));a.chunks=[];a.err=b;a.msg=a.C.msg}
;function Ti(a){this.name=a}
;var Ui=new Ti("rawColdConfigGroup");var Vi=new Ti("rawHotConfigGroup");function Wi(a){this.s=H(a)}
y(Wi,K);Wi.prototype.g=function(a){J(this,5,a)};function Xi(a){this.s=H(a)}
y(Xi,K);function Yi(a){this.s=H(a)}
y(Yi,K);Yi.la=[2];function Zi(a){this.s=H(a)}
y(Zi,K);Zi.prototype.getPlayerType=function(){var a=0;a=void 0===a?0:a;var b=Yd(this,36);b=null==b?b:Number.isFinite(b)?b|0:void 0;return null!=b?b:a};
Zi.prototype.setHomeGroupInfo=function(a){return I(this,Yi,81,a)};
Zi.la=[9,66,32,86,100,101];function $i(a){this.s=H(a)}
y($i,K);var aj=[2,3,4,5,6];function bj(a){this.s=H(a)}
y(bj,K);bj.la=[15,26,28];function cj(a){this.s=H(a)}
y(cj,K);cj.la=[5];function dj(a){this.s=H(a)}
y(dj,K);function ej(a){this.s=H(a)}
y(ej,K);ej.prototype.setSafetyMode=function(a){return ne(this,5,a)};
ej.la=[12];function fj(a){this.s=H(a)}
y(fj,K);fj.la=[12];var gj={ie:"WEB_DISPLAY_MODE_UNKNOWN",ee:"WEB_DISPLAY_MODE_BROWSER",ge:"WEB_DISPLAY_MODE_MINIMAL_UI",he:"WEB_DISPLAY_MODE_STANDALONE",fe:"WEB_DISPLAY_MODE_FULLSCREEN"};function hj(a){this.s=H(a)}
y(hj,K);function ij(a){this.s=H(a)}
y(ij,K);ij.la=[4,5];function jj(a){this.s=H(a)}
y(jj,K);function kj(a){this.s=H(a)}
y(kj,K);var lj=[2,3,4,5];function mj(a){this.s=H(a)}
y(mj,K);function nj(a){this.s=H(a)}
y(nj,K);function oj(a){this.s=H(a)}
y(oj,K);function pj(a){this.s=H(a)}
y(pj,K);pj.la=[10,17];function qj(a){this.s=H(a)}
y(qj,K);function rj(a){this.s=H(a)}
y(rj,K);function sj(a){this.s=H(a)}
y(sj,K);function tj(a){this.s=H(a,497)}
y(tj,K);
var uj=[2,3,5,6,7,11,13,20,21,22,23,24,28,32,37,45,59,72,73,74,76,78,79,80,85,91,97,100,102,105,111,117,119,126,127,136,146,148,151,156,157,158,159,163,164,168,176,177,178,179,184,188,189,190,191,193,194,195,196,197,198,199,200,201,202,203,204,205,206,208,209,215,219,222,225,226,227,229,232,233,234,240,241,244,247,248,249,251,254,255,256,257,258,259,260,261,266,270,272,278,288,291,293,300,304,308,309,310,311,313,314,319,320,321,323,324,327,328,330,331,332,334,337,338,340,344,348,350,351,352,353,354,
355,356,357,358,361,363,364,368,369,370,373,374,375,378,380,381,383,388,389,399,402,403,410,411,412,413,414,415,416,417,418,423,424,425,426,427,429,430,431,439,441,444,448,458,469,471,473,474,480,481,482,484,485,486,491,495,496];function vj(a){this.s=H(a)}
y(vj,K);function wj(a){this.s=H(a)}
y(wj,K);wj.prototype.getPlaylistId=function(){return ke(this,2)};
var le=[1,2];function xj(a){this.s=H(a)}
y(xj,K);xj.la=[3];var yj=C.window,zj,Aj,Bj=(null==yj?void 0:null==(zj=yj.yt)?void 0:zj.config_)||(null==yj?void 0:null==(Aj=yj.ytcfg)?void 0:Aj.data_)||{};E("yt.config_",Bj);function Cj(){var a=arguments;1<a.length?Bj[a[0]]=a[1]:1===a.length&&Object.assign(Bj,a[0])}
function R(a,b){return a in Bj?Bj[a]:b}
function Dj(){return R("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS")}
function Ej(){var a=Bj.EXPERIMENT_FLAGS;return a?a.web_disable_gel_stp_ecatcher_killswitch:void 0}
;var Fj=[];function Gj(a){Fj.forEach(function(b){return b(a)})}
function Hj(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Ij(b)}}:a}
function Ij(a){var b=D("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0,void 0,void 0):(b=R("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0,void 0,void 0]),Cj("ERRORS",b));Gj(a)}
function Jj(a,b,c,d,e){var f=D("yt.logging.errors.log");f?f(a,"WARNING",b,c,d,void 0,e):(f=R("ERRORS",[]),f.push([a,"WARNING",b,c,d,void 0,e]),Cj("ERRORS",f))}
;var Kj=/^[\w.]*$/,Lj={q:!0,search_query:!0};function Mj(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1===f.length&&f[0]||2===f.length)try{var g=Nj(f[0]||""),h=Nj(f[1]||"");if(g in c){var l=c[g];Array.isArray(l)?Fb(l,h):c[g]=[l,h]}else c[g]=h}catch(q){var k=q,m=f[0],n=String(Mj);k.args=[{key:m,value:f[1],query:a,method:Oj===n?"unchanged":n}];Lj.hasOwnProperty(m)||Jj(k)}}return c}
var Oj=String(Mj);function Pj(a){var b=[];Gb(a,function(c,d){var e=encodeURIComponent(String(d));c=Array.isArray(c)?c:[c];Bb(c,function(f){""==f?b.push(e):b.push(e+"="+encodeURIComponent(String(f)))})});
return b.join("&")}
function Qj(a){"?"===a.charAt(0)&&(a=a.substring(1));return Mj(a,"&")}
function Rj(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=Qj(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);b=a;a=oc(e);a?(c=b.indexOf("#"),0>c&&(c=b.length),f=b.indexOf("?"),0>f||f>c?(f=c,e=""):e=b.substring(f+1,c),b=[b.slice(0,f),e,b.slice(c)],c=b[1],b[1]=a?c?c+"&"+a:a:c,a=b[0]+(b[1]?"?"+b[1]:"")+b[2]):a=b;return a+d}
function Sj(a){if(!b)var b=window.location.href;var c=a.match(jc)[1]||null,d=lc(a);c&&d?(a=a.match(jc),b=b.match(jc),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?lc(b)===d&&(Number(b.match(jc)[4]||null)||null)===(Number(a.match(jc)[4]||null)||null):!0;return a}
function Nj(a){return a&&a.match(Kj)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function Tj(a){var b=Uj;a=void 0===a?D("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=Ce;e.flash="0";a:{try{var f=b.g.top.location.href}catch(ha){f=2;break a}f=f?f===b.h.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?qe:g;try{var h=g.history.length}catch(ha){h=0}e.u_his=h;var l;e.u_h=null==(l=qe.screen)?void 0:l.height;var k;e.u_w=null==(k=qe.screen)?void 0:k.width;var m;e.u_ah=null==(m=qe.screen)?void 0:m.availHeight;var n;e.u_aw=
null==(n=qe.screen)?void 0:n.availWidth;var q;e.u_cd=null==(q=qe.screen)?void 0:q.colorDepth}catch(ha){}h=b.g;try{var p=h.screenX;var t=h.screenY}catch(ha){}try{var u=h.outerWidth;var z=h.outerHeight}catch(ha){}try{var G=h.innerWidth;var P=h.innerHeight}catch(ha){}try{var U=h.screenLeft;var X=h.screenTop}catch(ha){}try{G=h.innerWidth,P=h.innerHeight}catch(ha){}try{var Ka=h.screen.availWidth;var Ca=h.screen.availTop}catch(ha){}p=[U,X,p,t,Ka,Ca,u,z,G,P];t=b.g.top;try{var La=(t||window).document,ia=
"CSS1Compat"==La.compatMode?La.documentElement:La.body;var qa=(new te(ia.clientWidth,ia.clientHeight)).round()}catch(ha){qa=new te(-12245933,-12245933)}La=qa;qa={};var ra=void 0===ra?C:ra;ia=new Af;"SVGElement"in ra&&"createElementNS"in ra.document&&ia.set(0);t=Ae();t["allow-top-navigation-by-user-activation"]&&ia.set(1);t["allow-popups-to-escape-sandbox"]&&ia.set(2);ra.crypto&&ra.crypto.subtle&&ia.set(3);"TextDecoder"in ra&&"TextEncoder"in ra&&ia.set(4);ra=Bf(ia);qa.bc=ra;qa.bih=La.height;qa.biw=
La.width;qa.brdim=p.join();b=b.h;b=(qa.vis=b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,qa.wgl=!!qe.WebGLRenderingContext,qa);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var Uj=new function(){var a=window.document;this.g=window;this.h=a};
E("yt.ads_.signals_.getAdSignalsString",function(a){return Pj(Tj(a))});Wa();var Vj={};function Wj(a){return Vj[a]||(Vj[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;function S(a){a=Xj(a);return"string"===typeof a&&"false"===a?!1:!!a}
function T(a,b){a=Xj(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function Xj(a){return R("EXPERIMENT_FLAGS",{})[a]}
function Yj(){for(var a=[],b=R("EXPERIMENTS_FORCED_FLAGS",{}),c=w(Object.keys(b)),d=c.next();!d.done;d=c.next())d=d.value,a.push({key:d,value:String(b[d])});c=R("EXPERIMENT_FLAGS",{});d=w(Object.keys(c));for(var e=d.next();!e.done;e=d.next())e=e.value,e.startsWith("force_")&&void 0===b[e]&&a.push({key:e,value:String(c[e])});return a}
;var Zj=0;E("ytDomDomGetNextId",D("ytDomDomGetNextId")||function(){return++Zj});var ak={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function bk(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in ak||(this[b]=a[b]);var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==
this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey}}catch(e){}}
bk.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
bk.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
bk.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var Ib=C.ytEventsEventsListeners||{};E("ytEventsEventsListeners",Ib);var ck=C.ytEventsEventsCounter||{count:0};E("ytEventsEventsCounter",ck);
function dk(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return Hb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Pa(e[4])&&Pa(d)&&Jb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function ek(a,b,c){var d=void 0===d?{}:d;if(a&&(a.addEventListener||a.attachEvent)){var e=dk(a,b,c,d);if(!e){e=++ck.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new bk(h);if(!ve(h.relatedTarget,function(l){return l==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new bk(h);
h.currentTarget=a;return c.call(a,h)};
g=Hj(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),fk()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);Ib[e]=[a,b,c,g,d]}}}
function gk(a){a&&("string"==typeof a&&(a=[a]),Bb(a,function(b){if(b in Ib){var c=Ib[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?fk()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete Ib[b]}}))}
var fk=se(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});function hk(a,b){"function"===typeof a&&(a=Hj(a));return window.setTimeout(a,b)}
function ik(a){"function"===typeof a&&(a=Hj(a));return window.setInterval(a,250)}
;var jk=window,V=jk.ytcsi&&jk.ytcsi.now?jk.ytcsi.now:jk.performance&&jk.performance.timing&&jk.performance.now&&jk.performance.timing.navigationStart?function(){return jk.performance.timing.navigationStart+jk.performance.now()}:function(){return(new Date).getTime()};var kk="XMLHttpRequest"in C?function(){return new XMLHttpRequest}:null;
function lk(){if(!kk)return null;var a=kk();return"open"in a?a:null}
;var mk="client_dev_domain client_dev_expflag client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");x(mk);var nk={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM","X-Goog-AuthUser":"SESSION_INDEX","X-Goog-PageId":"DELEGATED_SESSION_ID"},ok="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(x(mk)),pk=!1;
function qk(a,b,c,d,e,f,g,h){function l(){4===(k&&"readyState"in k?k.readyState:0)&&b&&Hj(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;h=void 0===h?!1:h;var k=lk();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",l,!1):k.onreadystatechange=l;S("debug_forward_web_query_parameters")&&(a=rk(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"===c&&(void 0===window.FormData||!(d instanceof FormData));if(e=sk(a,e))for(var m in e)k.setRequestHeader(m,e[m]),"content-type"===m.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
if(h&&"setAttributionReporting"in XMLHttpRequest.prototype){a={eventSourceEligible:!0,triggerEligible:!1};try{k.setAttributionReporting(a)}catch(n){Jj(n)}}k.send(d);return k}
function sk(a,b){b=void 0===b?{}:b;var c=Sj(a),d=S("web_ajax_ignore_global_headers_if_set"),e;for(e in nk){var f=R(nk[e]),g="X-Goog-AuthUser"===e||"X-Goog-PageId"===e;"X-Goog-Visitor-Id"!==e||f||(f=R("VISITOR_DATA"));!f||!c&&lc(a)||d&&void 0!==b[e]||"TVHTML5_UNPLUGGED"===R("INNERTUBE_CLIENT_NAME")&&g||(b[e]=f)}"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!lc(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!lc(a)){try{var h=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(l){}h&&
(b["X-YouTube-Time-Zone"]=h)}document.location.hostname.endsWith("youtubeeducation.com")||!c&&lc(a)||(b["X-YouTube-Ad-Signals"]=Pj(Tj()));return b}
function tk(a,b){b.method="POST";b.postParams||(b.postParams={});return uk(a,b)}
function uk(a,b){var c=b.format||"JSON";a=vk(a,b);var d=wk(a,b),e=!1,f=xk(a,function(l){if(!e){e=!0;h&&window.clearTimeout(h);a:switch(l&&"status"in l?l.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var k=!0;break a;default:k=!1}var m=null,n=400<=l.status&&500>l.status,q=500<=l.status&&600>l.status;if(k||n||q)m=yk(a,c,l,b.convertToSafeHtml);k&&(k=zk(c,l,m));m=m||{};n=b.context||C;k?b.onSuccess&&b.onSuccess.call(n,l,m):b.onError&&b.onError.call(n,l,m);b.onFinish&&
b.onFinish.call(n,l,m)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&0<d){var g=b.onTimeout;var h=hk(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||C,f))},d)}return f}
function vk(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=R("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=Rj(a,b||{},!0);return a}
function wk(a,b){var c=R("XSRF_FIELD_NAME"),d=R("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=R("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||lc(a)&&!b.withCredentials&&lc(a)!==document.location.hostname||"POST"!==b.method||h&&"application/x-www-form-urlencoded"!==h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(S("ajax_parse_query_data_only_when_filled")&&f&&0<Object.keys(f).length||f)&&"string"===typeof e&&(e=Qj(e),Mb(e,f),e=b.postBodyFormat&&"JSON"===b.postBodyFormat?
JSON.stringify(e):oc(e));if(!(a=e)&&(a=f)){a:{for(var l in f){f=!1;break a}f=!0}a=!f}!pk&&a&&"POST"!==b.method&&(pk=!0,Ij(Error("AJAX request with postData should use POST")));return e}
function yk(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,Jj(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Ak(a):null)e={},Bb(a.getElementsByTagName("*"),function(g){e[g.tagName]=Bk(g)})}d&&Ck(e);
return e}
function Ck(a){if(Pa(a))for(var b in a){var c;(c="html_content"===b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=a[b],e=mb();d=e?e.createHTML(d):d;a[c]=new Zb(d)}else Ck(a[b])}}
function zk(a,b,c){if(b&&204===b.status)return!0;switch(a){case "JSON":return!!c;case "XML":return 0===Number(c&&c.return_code);case "RAW":return!0;default:return!!c}}
function Ak(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Bk(a){var b="";Bb(a.childNodes,function(c){b+=c.nodeValue});
return b}
function rk(a){var b=window.location.search,c=lc(a);S("debug_handle_relative_url_for_query_forward_killswitch")||!c&&Sj(a)&&(c=document.location.hostname);var d=kc(a.match(jc)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=Qj(b),f={};Bb(ok,function(g){e[g]&&(f[g]=e[g])});
return Rj(a,f||{},!1)}
var xk=qk;function Dk(){if(!C.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return C.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":C.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":C.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":C.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function Ek(){}
;function Fk(a){switch(a){case "DESKTOP":return 1;case "UNKNOWN_PLATFORM":return 0;case "TV":return 2;case "GAME_CONSOLE":return 3;case "MOBILE":return 4;case "TABLET":return 5}}
;E("ytglobal.prefsUserPrefsPrefs_",D("ytglobal.prefsUserPrefsPrefs_")||{});var Gk={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},Hk={CONN_DEFAULT:0,CONN_UNKNOWN:1,CONN_NONE:2,CONN_WIFI:3,CONN_CELLULAR_2G:4,CONN_CELLULAR_3G:5,CONN_CELLULAR_4G:6,CONN_CELLULAR_UNKNOWN:7,CONN_DISCO:8,CONN_CELLULAR_5G:9,CONN_WIFI_METERED:10,CONN_CELLULAR_5G_SA:11,
CONN_CELLULAR_5G_NSA:12,CONN_WIRED:30,CONN_INVALID:31},Ik={EFFECTIVE_CONNECTION_TYPE_UNKNOWN:0,EFFECTIVE_CONNECTION_TYPE_OFFLINE:1,EFFECTIVE_CONNECTION_TYPE_SLOW_2G:2,EFFECTIVE_CONNECTION_TYPE_2G:3,EFFECTIVE_CONNECTION_TYPE_3G:4,EFFECTIVE_CONNECTION_TYPE_4G:5},Jk={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};function Kk(){var a=C.navigator;return a?a.connection:void 0}
;function Lk(a){var b=Fa.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(x(b))}
y(Lk,Error);function Mk(){try{return Nk(),!0}catch(a){return!1}}
function Nk(){if(void 0!==R("DATASYNC_ID"))return R("DATASYNC_ID");throw new Lk("Datasync ID not set","unknown");}
;function Ok(){}
function Pk(a,b){return zf.Ga(a,0,b)}
Ok.prototype.pa=function(a,b){return this.Ga(a,1,b)};
Ok.prototype.fb=function(a){var b=D("yt.scheduler.instance.addImmediateJob");b?b(a):a()};var Qk=T("web_emulated_idle_callback_delay",300),Rk=1E3/60-3,Sk=[8,5,4,3,2,1,0];
function Tk(a){a=void 0===a?{}:a;Pe.call(this);this.h=[];this.i={};this.cb=this.g=0;this.bb=this.u=!1;this.O=[];this.na=this.eb=!1;for(var b=w(Sk),c=b.next();!c.done;c=b.next())this.h[c.value]=[];this.o=0;this.Nc=a.timeout||1;this.K=Rk;this.G=0;this.rb=this.rd.bind(this);this.Mc=this.wd.bind(this);this.Jc=this.Oc.bind(this);this.Kc=this.cd.bind(this);this.Lc=this.sd.bind(this);this.ac=!!window.requestIdleCallback&&!!window.cancelIdleCallback&&!S("disable_scheduler_requestIdleCallback");(this.xa=!1!==
a.useRaf&&!!window.requestAnimationFrame)&&document.addEventListener("visibilitychange",this.rb)}
y(Tk,Pe);r=Tk.prototype;r.fb=function(a){var b=Wa();Uk(a);a=Wa()-b;this.u||(this.K-=a)};
r.Ga=function(a,b,c){++this.cb;if(10===b)return this.fb(a),this.cb;var d=this.cb;this.i[d]=a;this.u&&!c?this.O.push({id:d,priority:b}):(this.h[b].push(d),this.bb||this.u||(0!==this.g&&Vk(this)!==this.G&&Wk(this),this.start()));return d};
r.ba=function(a){delete this.i[a]};
function Xk(a){a.O.length=0;for(var b=5;0<=b;b--)a.h[b].length=0;a.h[8].length=0;a.i={};Wk(a)}
function Vk(a){if(a.h[8].length){if(a.na)return 4;if(!document.hidden&&a.xa)return 3}for(var b=5;b>=a.o;b--)if(0<a.h[b].length)return 0<b?!document.hidden&&a.xa?3:2:1;return 0}
function Yk(a){var b=D("yt.logging.errors.log");b&&b(a)}
function Uk(a){try{a()}catch(b){Yk(b)}}
function Zk(a){for(var b=w(Sk),c=b.next();!c.done;c=b.next())if(a.h[c.value].length)return!0;return!1}
r.cd=function(a){var b=void 0;a&&(b=a.timeRemaining());this.eb=!0;$k(this,b);this.eb=!1};
r.wd=function(){$k(this)};
r.Oc=function(){al(this)};
r.sd=function(a){this.na=!0;var b=Vk(this);4===b&&b!==this.G&&(Wk(this),this.start());$k(this,void 0,a);this.na=!1};
r.rd=function(){document.hidden||al(this);this.g&&(Wk(this),this.start())};
function al(a){Wk(a);a.u=!0;for(var b=Wa(),c=a.h[8];c.length;){var d=c.shift(),e=a.i[d];delete a.i[d];e&&Uk(e)}bl(a);a.u=!1;Zk(a)&&a.start();b=Wa()-b;a.K-=b}
function bl(a){for(var b=0,c=a.O.length;b<c;b++){var d=a.O[b];a.h[d.priority].push(d.id)}a.O.length=0}
function $k(a,b,c){a.na&&4===a.G&&a.g||Wk(a);a.u=!0;b=Wa()+(b||a.K);for(var d=a.h[5];d.length;){var e=d.shift(),f=a.i[e];delete a.i[e];if(f)try{f(c)}catch(k){Yk(k)}}for(d=a.h[4];d.length;)c=d.shift(),e=a.i[c],delete a.i[c],e&&Uk(e);d=a.eb?0:1;d=a.o>d?a.o:d;if(!(Wa()>=b)){do{a:{c=a;e=d;for(f=3;f>=e;f--)for(var g=c.h[f];g.length;){var h=g.shift(),l=c.i[h];delete c.i[h];if(l){c=l;break a}}c=null}c&&Uk(c)}while(c&&Wa()<b)}a.u=!1;bl(a);a.K=Rk;Zk(a)&&a.start()}
r.start=function(){this.bb=!1;if(0===this.g)switch(this.G=Vk(this),this.G){case 1:var a=this.Kc;this.g=this.ac?window.requestIdleCallback(a,{timeout:3E3}):window.setTimeout(a,Qk);break;case 2:this.g=window.setTimeout(this.Mc,this.Nc);break;case 3:this.g=window.requestAnimationFrame(this.Lc);break;case 4:this.g=window.setTimeout(this.Jc,0)}};
function Wk(a){if(a.g){switch(a.G){case 1:var b=a.g;a.ac?window.cancelIdleCallback(b):window.clearTimeout(b);break;case 2:case 4:window.clearTimeout(a.g);break;case 3:window.cancelAnimationFrame(a.g)}a.g=0}}
r.ra=function(){Xk(this);Wk(this);this.xa&&document.removeEventListener("visibilitychange",this.rb);Pe.prototype.ra.call(this)};var cl=D("yt.scheduler.instance.timerIdMap_")||{},dl=T("kevlar_tuner_scheduler_soft_state_timer_ms",800),el=0,fl=0;function gl(){var a=D("ytglobal.schedulerInstanceInstance_");if(!a||a.za)a=new Tk(R("scheduler")||{}),E("ytglobal.schedulerInstanceInstance_",a);return a}
function hl(){il();var a=D("ytglobal.schedulerInstanceInstance_");a&&(Oe(a),E("ytglobal.schedulerInstanceInstance_",null))}
function il(){Xk(gl());for(var a in cl)cl.hasOwnProperty(a)&&delete cl[Number(a)]}
function jl(a,b,c){if(!c)return c=void 0===c,-gl().Ga(a,b,c);var d=window.setTimeout(function(){var e=gl().Ga(a,b);cl[d]=e},c);
return d}
function kl(a){gl().fb(a)}
function ll(a){var b=gl();if(0>a)b.ba(-a);else{var c=cl[a];c?(b.ba(c),delete cl[a]):window.clearTimeout(a)}}
function ml(){nl()}
function nl(){window.clearTimeout(el);gl().start()}
function ol(){var a=gl();Wk(a);a.bb=!0;window.clearTimeout(el);el=window.setTimeout(ml,dl)}
function pl(){window.clearTimeout(fl);fl=window.setTimeout(function(){ql(0)},dl)}
function ql(a){pl();var b=gl();b.o=a;b.start()}
function rl(a){pl();var b=gl();b.o>a&&(b.o=a,b.start())}
function sl(){window.clearTimeout(fl);var a=gl();a.o=0;a.start()}
;function tl(){Ok.apply(this,arguments)}
y(tl,Ok);function ul(){tl.g||(tl.g=new tl);return tl.g}
tl.prototype.Ga=function(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=D("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):hk(a,c||0)};
tl.prototype.ba=function(a){if(void 0===a||!Number.isNaN(Number(a))){var b=D("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
tl.prototype.start=function(){var a=D("yt.scheduler.instance.start");a&&a()};
var zf=ul();
S("web_scheduler_auto_init")&&!D("yt.scheduler.initialized")&&(E("yt.scheduler.instance.dispose",hl),E("yt.scheduler.instance.addJob",jl),E("yt.scheduler.instance.addImmediateJob",kl),E("yt.scheduler.instance.cancelJob",ll),E("yt.scheduler.instance.cancelAllJobs",il),E("yt.scheduler.instance.start",nl),E("yt.scheduler.instance.pause",ol),E("yt.scheduler.instance.setPriorityThreshold",ql),E("yt.scheduler.instance.enablePriorityThreshold",rl),E("yt.scheduler.instance.clearPriorityThreshold",sl),E("yt.scheduler.initialized",
!0));function vl(a){var b=new Wg;(b=(b.h=Vg(b.g))?a?new gh(b,a):b:null)||(a=new bh(a||"UserDataSharedStore"),b=a.g?a:null);this.g=(a=b)?new Qg(a):null;this.h=document.domain||window.location.hostname}
vl.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.g)try{this.g.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(rg(b))}catch(f){return}else e=escape(b);b=this.h;Ke.set(""+a,e,{Nb:c,path:"/",domain:void 0===b?"youtube.com":b,secure:!1})};
vl.prototype.get=function(a,b){var c=void 0,d=!this.g;if(!d)try{c=this.g.get(a)}catch(e){d=!0}if(d&&(c=Ke.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
vl.prototype.remove=function(a){this.g&&this.g.remove(a);var b=this.h;Ke.remove(""+a,"/",void 0===b?"youtube.com":b)};var wl=function(){var a;return function(){a||(a=new vl("ytidb"));return a}}();
function xl(){var a;return null==(a=wl())?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var yl=[],zl=!1;function Al(a){zl||(yl.push({type:"ERROR",payload:a}),10<yl.length&&yl.shift())}
function Bl(a,b){zl||(yl.push({type:"EVENT",eventType:a,payload:b}),10<yl.length&&yl.shift())}
;function Cl(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function Dl(a){return a.substr(0,a.indexOf(":"))||a}
;var El=Mc||Nc;var Fl={},Gl=(Fl.AUTH_INVALID="No user identifier specified.",Fl.EXPLICIT_ABORT="Transaction was explicitly aborted.",Fl.IDB_NOT_SUPPORTED="IndexedDB is not supported.",Fl.MISSING_INDEX="Index not created.",Fl.MISSING_OBJECT_STORES="Object stores not created.",Fl.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",Fl.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",Fl.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
Fl.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",Fl.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",Fl.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",Fl.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",Fl),Hl={},Il=(Hl.AUTH_INVALID="ERROR",Hl.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",Hl.EXPLICIT_ABORT="IGNORED",Hl.IDB_NOT_SUPPORTED="ERROR",Hl.MISSING_INDEX=
"WARNING",Hl.MISSING_OBJECT_STORES="ERROR",Hl.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",Hl.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",Hl.QUOTA_EXCEEDED="WARNING",Hl.QUOTA_MAYBE_EXCEEDED="WARNING",Hl.UNKNOWN_ABORT="WARNING",Hl.INCOMPATIBLE_DB_VERSION="WARNING",Hl),Jl={},Kl=(Jl.AUTH_INVALID=!1,Jl.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,Jl.EXPLICIT_ABORT=!1,Jl.IDB_NOT_SUPPORTED=!1,Jl.MISSING_INDEX=!1,Jl.MISSING_OBJECT_STORES=!1,Jl.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,Jl.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,Jl.QUOTA_EXCEEDED=!1,Jl.QUOTA_MAYBE_EXCEEDED=!0,Jl.UNKNOWN_ABORT=!0,Jl.INCOMPATIBLE_DB_VERSION=!1,Jl);function Y(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?Gl[a]:c;d=void 0===d?Il[a]:d;e=void 0===e?Kl[a]:e;Lk.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.g=e;Object.setPrototypeOf(this,Y.prototype)}
y(Y,Lk);function Ll(a,b){Y.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},Gl.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,Ll.prototype)}
y(Ll,Y);function Ml(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,Ml.prototype)}
y(Ml,Error);var Nl=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Ol(a,b,c,d){b=Dl(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof Y)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new Y("QUOTA_EXCEEDED",a);if(Oc&&"UnknownError"===e.name)return new Y("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof Ml)return new Y("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&Nl.some(function(f){return e.message.includes(f)}))return new Y("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new Y("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",re:e.name})];e.level="WARNING";return e}
function Pl(a,b,c){var d=xl();return new Y("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:null==d?void 0:d.hasSucceededOnce}})}
;function Ql(a){if(!a)throw Error();throw a;}
function Rl(a){return a}
function Sl(a){this.g=a}
function Tl(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=w(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=w(d.g);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.g=[];this.h=[];a=a.g;try{a(c,b)}catch(e){b(e)}}
Tl.resolve=function(a){return new Tl(new Sl(function(b,c){a instanceof Tl?a.then(b,c):b(a)}))};
Tl.reject=function(a){return new Tl(new Sl(function(b,c){c(a)}))};
Tl.prototype.then=function(a,b){var c=this,d=null!=a?a:Rl,e=null!=b?b:Ql;return new Tl(new Sl(function(f,g){"PENDING"===c.state.status?(c.g.push(function(){Ul(c,c,d,f,g)}),c.h.push(function(){Vl(c,c,e,f,g)})):"FULFILLED"===c.state.status?Ul(c,c,d,f,g):"REJECTED"===c.state.status&&Vl(c,c,e,f,g)}))};
function Wl(a,b){a.then(void 0,b)}
function Ul(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof Tl?Xl(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Vl(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof Tl?Xl(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Xl(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof Tl?Xl(a,b,f,d,e):d(f)},function(f){e(f)})}
;function Yl(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function Zl(a){return new Promise(function(b,c){Yl(a,b,c)})}
function $l(a){return new Tl(new Sl(function(b,c){Yl(a,b,c)}))}
;function am(a,b){return new Tl(new Sl(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;function bm(a,b){this.g=a;this.options=b;this.transactionCount=0;this.i=Math.round(V());this.h=!1}
r=bm.prototype;r.add=function(a,b,c){return cm(this,[a],{mode:"readwrite",W:!0},function(d){return d.objectStore(a).add(b,c)})};
r.clear=function(a){return cm(this,[a],{mode:"readwrite",W:!0},function(b){return b.objectStore(a).clear()})};
r.close=function(){this.g.close();var a;(null==(a=this.options)?0:a.closed)&&this.options.closed()};
function dm(a,b,c){a=a.g.createObjectStore(b,c);return new em(a)}
r.delete=function(a,b){return cm(this,[a],{mode:"readwrite",W:!0},function(c){return c.objectStore(a).delete(b)})};
r.get=function(a,b){return cm(this,[a],{mode:"readonly",W:!0},function(c){return c.objectStore(a).get(b)})};
function fm(a,b,c){return cm(a,[b],{mode:"readwrite",W:!0},function(d){d=d.objectStore(b);return $l(d.g.put(c,void 0))})}
r.objectStoreNames=function(){return Array.from(this.g.objectStoreNames)};
function cm(a,b,c,d){var e,f,g,h,l,k,m,n,q,p,t,u;return B(function(z){switch(z.g){case 1:var G={mode:"readonly",W:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?G.mode=c:Object.assign(G,c);e=G;a.transactionCount++;f=e.W?3:1;g=0;case 2:if(h){z.B(4);break}g++;l=Math.round(V());va(z,5);k=a.g.transaction(b,e.mode);G=new gm(k);G=hm(G,d);return A(z,G,7);case 7:return m=z.h,n=Math.round(V()),im(a,l,n,g,void 0,b.join(),e),z.return(m);case 5:q=wa(z);p=Math.round(V());t=Ol(q,a.g.name,b.join(),a.g.version);
if((u=t instanceof Y&&!t.g)||g>=f)im(a,l,p,g,t,b.join(),e),h=t;z.B(2);break;case 4:return z.return(Promise.reject(h))}})}
function im(a,b,c,d,e,f,g){b=c-b;e?(e instanceof Y&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&Bl("QUOTA_EXCEEDED",{dbName:Dl(a.g.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof Y&&"UNKNOWN_ABORT"===e.type&&(c-=a.i,0>c&&c>=Math.pow(2,31)&&(c=0),Bl("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.h=!0),jm(a,!1,d,f,b,g.tag),Al(e)):jm(a,!0,d,f,b,g.tag)}
function jm(a,b,c,d,e,f){Bl("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.h,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
r.getName=function(){return this.g.name};
function em(a){this.g=a}
r=em.prototype;r.add=function(a,b){return $l(this.g.add(a,b))};
r.autoIncrement=function(){return this.g.autoIncrement};
r.clear=function(){return $l(this.g.clear()).then(function(){})};
function km(a,b,c){a.g.createIndex(b,c,{unique:!1})}
function lm(a,b){return mm(a,{query:b},function(c){return c.delete().then(function(){return nm(c)})}).then(function(){})}
r.delete=function(a){return a instanceof IDBKeyRange?lm(this,a):$l(this.g.delete(a))};
r.get=function(a){return $l(this.g.get(a))};
r.index=function(a){try{return new om(this.g.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new Ml(a,this.g.name);throw b;}};
r.getName=function(){return this.g.name};
r.keyPath=function(){return this.g.keyPath};
function mm(a,b,c){a=a.g.openCursor(b.query,b.direction);return pm(a).then(function(d){return am(d,c)})}
function gm(a){var b=this;this.g=a;this.i=new Map;this.h=!1;this.done=new Promise(function(c,d){b.g.addEventListener("complete",function(){c()});
b.g.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.g.error)});
b.g.addEventListener("abort",function(){var e=b.g.error;if(e)d(e);else if(!b.h){e=Y;for(var f=b.g.objectStoreNames,g=[],h=0;h<f.length;h++){var l=f.item(h);if(null===l)throw Error("Invariant: item in DOMStringList is null");g.push(l)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.g.db.name,mode:b.g.mode});d(e)}})})}
function hm(a,b){var c=new Promise(function(d,e){try{Wl(b(a).then(function(f){d(f)}),e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return w(d).next().value})}
gm.prototype.abort=function(){this.g.abort();this.h=!0;throw new Y("EXPLICIT_ABORT");};
gm.prototype.objectStore=function(a){a=this.g.objectStore(a);var b=this.i.get(a);b||(b=new em(a),this.i.set(a,b));return b};
function om(a){this.g=a}
om.prototype.delete=function(a){return qm(this,{query:a},function(b){return b.delete().then(function(){return nm(b)})})};
om.prototype.get=function(a){return $l(this.g.get(a))};
om.prototype.keyPath=function(){return this.g.keyPath};
om.prototype.unique=function(){return this.g.unique};
function qm(a,b,c){a=a.g.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return pm(a).then(function(d){return am(d,c)})}
function rm(a,b){this.request=a;this.cursor=b}
function pm(a){return $l(a).then(function(b){return b?new rm(a,b):null})}
function nm(a){a.cursor.continue(void 0);return pm(a.request)}
rm.prototype.delete=function(){return $l(this.cursor.delete()).then(function(){})};
rm.prototype.update=function(a){return $l(this.cursor.update(a))};function sm(a,b,c){return new Promise(function(d,e){function f(){q||(q=new bm(g.result,{closed:n}));return q}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.Qc,l=c.Rc,k=c.vd,m=c.upgrade,n=c.closed,q;g.addEventListener("upgradeneeded",function(p){try{if(null===p.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");p.dataLoss&&"none"!==p.dataLoss&&Bl("IDB_DATA_CORRUPTED",{reason:p.dataLossMessage||"unknown reason",dbName:Dl(a)});var t=f(),u=new gm(g.transaction);m&&
m(t,function(z){return p.oldVersion<z&&p.newVersion>=z},u);
u.done.catch(function(z){e(z)})}catch(z){e(z)}});
g.addEventListener("success",function(){var p=g.result;l&&p.addEventListener("versionchange",function(){l(f())});
p.addEventListener("close",function(){Bl("IDB_UNEXPECTEDLY_CLOSED",{dbName:Dl(a),dbVersion:p.version});k&&k()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function tm(a,b,c){c=void 0===c?{}:c;return sm(a,b,c)}
function um(a,b){b=void 0===b?{}:b;var c,d,e,f;return B(function(g){if(1==g.g)return va(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.Qc)&&c.addEventListener("blocked",function(){e()}),A(g,Zl(c),4);
if(2!=g.g)g.g=0,g.o=0;else throw f=wa(g),Ol(f,a,"",-1);})}
;function vm(a,b){this.name=a;this.options=b;this.i=!0;this.o=this.l=0}
vm.prototype.h=function(a,b,c){c=void 0===c?{}:c;return tm(a,b,c)};
vm.prototype.delete=function(a){a=void 0===a?{}:a;return um(this.name,a)};
function wm(a,b){return new Y("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function xm(a,b){if(!b)throw Pl("openWithToken",Dl(a.name));return ym(a)}
function ym(a){function b(){var f,g,h,l,k,m,n,q,p,t;return B(function(u){switch(u.g){case 1:return g=null!=(f=Error().stack)?f:"",va(u,2),A(u,a.h(a.name,a.options.version,d),4);case 4:for(var z=h=u.h,G=a.options,P=[],U=w(Object.keys(G.Ya)),X=U.next();!X.done;X=U.next()){X=X.value;var Ka=G.Ya[X],Ca=void 0===Ka.td?Number.MAX_VALUE:Ka.td;!(z.g.version>=Ka.gb)||z.g.version>=Ca||z.g.objectStoreNames.contains(X)||P.push(X)}l=P;if(0===l.length){u.B(5);break}k=Object.keys(a.options.Ya);m=h.objectStoreNames();
if(a.o<T("ytidb_reopen_db_retries",0))return a.o++,h.close(),Al(new Y("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:k,foundObjectStores:m})),u.return(b());if(!(a.l<T("ytidb_remake_db_retries",1))){u.B(6);break}a.l++;return A(u,a.delete(),7);case 7:return Al(new Y("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:k,foundObjectStores:m})),u.return(b());case 6:throw new Ll(m,k);case 5:return u.return(h);case 2:n=wa(u);if(n instanceof DOMException?
"VersionError"!==n.name:"DOMError"in self&&n instanceof DOMError?"VersionError"!==n.name:!(n instanceof Object&&"message"in n)||"An attempt was made to open a database using a lower version than the existing version."!==n.message){u.B(8);break}return A(u,a.h(a.name,void 0,Object.assign({},d,{upgrade:void 0})),9);case 9:q=u.h;p=q.g.version;if(void 0!==a.options.version&&p>a.options.version+1)throw q.close(),a.i=!1,wm(a,p);return u.return(q);case 8:throw c(),n instanceof Error&&!S("ytidb_async_stack_killswitch")&&
(n.stack=n.stack+"\n"+g.substring(g.indexOf("\n")+1)),Ol(n,a.name,"",null!=(t=a.options.version)?t:-1);}})}
function c(){a.g===e&&(a.g=void 0)}
if(!a.i)throw wm(a);if(a.g)return a.g;var d={Rc:function(f){f.close()},
closed:c,vd:c,upgrade:a.options.upgrade};var e=b();a.g=e;return a.g}
;var zm=new vm("YtIdbMeta",{Ya:{databases:{gb:1}},upgrade:function(a,b){b(1)&&dm(a,"databases",{keyPath:"actualName"})}});
function Am(a,b){var c;return B(function(d){if(1==d.g)return A(d,xm(zm,b),2);c=d.h;return d.return(cm(c,["databases"],{W:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return $l(f.g.put(a,void 0)).then(function(){})})}))})}
function Bm(a,b){var c;return B(function(d){if(1==d.g)return a?A(d,xm(zm,b),2):d.return();c=d.h;return d.return(c.delete("databases",a))})}
function Cm(a,b){var c,d;return B(function(e){return 1==e.g?(c=[],A(e,xm(zm,b),2)):3!=e.g?(d=e.h,A(e,cm(d,["databases"],{W:!0,mode:"readonly"},function(f){c.length=0;return mm(f.objectStore("databases"),{},function(g){a(g.cursor.value)&&c.push(g.cursor.value);return nm(g)})}),3)):e.return(c)})}
function Dm(a){return Cm(function(b){return"LogsDatabaseV2"===b.publicName&&void 0!==b.userIdentifier},a)}
;var Em,Fm=new function(){}(new function(){});
function Gm(){var a,b,c,d;return B(function(e){switch(e.g){case 1:a=xl();if(null==(b=a)?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=El)f=/WebKit\/([0-9]+)/.exec(Pb()),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec(Pb()),f=!(f&&602<=parseInt(f[1],10)));if(f||Ac)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
va(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return A(e,Am(d,Fm),4);case 4:return A(e,Bm("yt-idb-test-do-not-use",Fm),5);case 5:return e.return(!0);case 2:return wa(e),e.return(!1)}})}
function Hm(){if(void 0!==Em)return Em;zl=!0;return Em=Gm().then(function(a){zl=!1;var b;if(null!=(b=wl())&&b.g){var c;b={hasSucceededOnce:(null==(c=xl())?void 0:c.hasSucceededOnce)||a};var d;null==(d=wl())||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function Im(){return D("ytglobal.idbToken_")||void 0}
function Jm(){var a=Im();return a?Promise.resolve(a):Hm().then(function(b){(b=b?Fm:void 0)&&E("ytglobal.idbToken_",b);return b})}
;new sg;function Km(a){if(!Mk())throw a=new Y("AUTH_INVALID",{dbName:a}),Al(a),a;var b=Nk();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function Lm(a,b,c,d){var e,f,g,h,l,k;return B(function(m){switch(m.g){case 1:return f=null!=(e=Error().stack)?e:"",A(m,Jm(),2);case 2:g=m.h;if(!g)throw h=Pl("openDbImpl",a,b),S("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),Al(h),h;Cl(a);l=c?{actualName:a,publicName:a,userIdentifier:void 0}:Km(a);va(m,3);return A(m,Am(l,g),5);case 5:return A(m,tm(l.actualName,b,d),6);case 6:return m.return(m.h);case 3:return k=wa(m),va(m,7),A(m,Bm(l.actualName,g),9);case 9:m.g=
8;m.o=0;break;case 7:wa(m);case 8:throw k;}})}
function Mm(a,b,c){c=void 0===c?{}:c;return Lm(a,b,!1,c)}
function Nm(a,b,c){c=void 0===c?{}:c;return Lm(a,b,!0,c)}
function Om(a,b){b=void 0===b?{}:b;var c,d;return B(function(e){if(1==e.g)return A(e,Jm(),2);if(3!=e.g){c=e.h;if(!c)return e.return();Cl(a);d=Km(a);return A(e,um(d.actualName,b),3)}return A(e,Bm(d.actualName,c),0)})}
function Pm(a,b,c){a=a.map(function(d){return B(function(e){return 1==e.g?A(e,um(d.actualName,b),2):A(e,Bm(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function Qm(){var a=void 0===a?{}:a;var b,c;return B(function(d){if(1==d.g)return A(d,Jm(),2);if(3!=d.g){b=d.h;if(!b)return d.return();Cl("LogsDatabaseV2");return A(d,Dm(b),3)}c=d.h;return A(d,Pm(c,a,b),0)})}
function Rm(a,b){b=void 0===b?{}:b;var c;return B(function(d){if(1==d.g)return A(d,Jm(),2);if(3!=d.g){c=d.h;if(!c)return d.return();Cl(a);return A(d,um(a,b),3)}return A(d,Bm(a,c),0)})}
;function Sm(a,b){vm.call(this,a,b);this.options=b;Cl(a)}
y(Sm,vm);function Tm(a,b){var c;return function(){c||(c=new Sm(a,b));return c}}
Sm.prototype.h=function(a,b,c){c=void 0===c?{}:c;return(this.options.shared?Nm:Mm)(a,b,Object.assign({},c))};
Sm.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.shared?Rm:Om)(this.name,a)};
function Um(a,b){return Tm(a,b)}
;var Vm={},In=Um("ytGcfConfig",{Ya:(Vm.coldConfigStore={gb:1},Vm.hotConfigStore={gb:1},Vm),shared:!1,upgrade:function(a,b){b(1)&&(km(dm(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}),"hotTimestampIndex","timestamp"),km(dm(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}),"coldTimestampIndex","timestamp"))},
version:1});function Jn(a){return xm(In(),a)}
function Kn(a,b,c){var d,e,f;return B(function(g){switch(g.g){case 1:return d={config:a,hashData:b,timestamp:V()},A(g,Jn(c),2);case 2:return e=g.h,A(g,e.clear("hotConfigStore"),3);case 3:return A(g,fm(e,"hotConfigStore",d),4);case 4:return f=g.h,g.return(f)}})}
function Ln(a,b,c,d){var e,f,g;return B(function(h){switch(h.g){case 1:return e={config:a,hashData:b,configData:c,timestamp:V()},A(h,Jn(d),2);case 2:return f=h.h,A(h,f.clear("coldConfigStore"),3);case 3:return A(h,fm(f,"coldConfigStore",e),4);case 4:return g=h.h,h.return(g)}})}
function Mn(a){var b,c;return B(function(d){return 1==d.g?A(d,Jn(a),2):3!=d.g?(b=d.h,c=void 0,A(d,cm(b,["coldConfigStore"],{mode:"readwrite",W:!0},function(e){return qm(e.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},function(f){c=f.cursor.value})}),3)):d.return(c)})}
function Nn(a){var b,c;return B(function(d){return 1==d.g?A(d,Jn(a),2):3!=d.g?(b=d.h,c=void 0,A(d,cm(b,["hotConfigStore"],{mode:"readwrite",W:!0},function(e){return qm(e.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},function(f){c=f.cursor.value})}),3)):d.return(c)})}
;function On(){Pe.call(this);this.h=[];this.g=[];var a=D("yt.gcf.config.hotUpdateCallbacks");a?(this.h=[].concat(x(a)),this.g=a):(this.g=[],E("yt.gcf.config.hotUpdateCallbacks",this.g))}
y(On,Pe);On.prototype.ra=function(){for(var a=w(this.h),b=a.next();!b.done;b=a.next()){var c=this.g;b=c.indexOf(b.value);0<=b&&c.splice(b,1)}this.h.length=0;Pe.prototype.ra.call(this)};function Pn(){this.h=0;this.i=new On}
function Qn(a,b,c){var d,e,f;return B(function(g){switch(g.g){case 1:if(!S("start_client_gcf")){g.B(0);break}c&&(a.l=c,E("yt.gcf.config.hotConfigGroup",a.l||null));a.g(b);d=Im();if(!d){g.B(3);break}if(c){g.B(4);break}return A(g,Nn(d),5);case 5:e=g.h,c=null==(f=e)?void 0:f.config;case 4:return A(g,Kn(c,b,d),3);case 3:if(c)for(var h=c,l=w(a.i.g),k=l.next();!k.done;k=l.next())k=k.value,k(h);g.g=0}})}
function Rn(a,b,c){var d,e,f,g;return B(function(h){if(1==h.g){if(!S("start_client_gcf"))return h.B(0);a.coldHashData=b;E("yt.gcf.config.coldHashData",a.coldHashData||null);return(d=Im())?c?h.B(4):A(h,Mn(d),5):h.B(0)}4!=h.g&&(e=h.h,c=null==(f=e)?void 0:f.config);if(!c)return h.B(0);g=c.configData;return A(h,Ln(c,b,g,d),0)})}
Pn.prototype.g=function(a){this.hotHashData=a;E("yt.gcf.config.hotHashData",this.hotHashData||null)};function Sn(){return"INNERTUBE_API_KEY"in Bj&&"INNERTUBE_API_VERSION"in Bj}
function Tn(){return{dd:R("INNERTUBE_API_KEY"),ed:R("INNERTUBE_API_VERSION"),Kb:R("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),oc:R("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),fd:R("INNERTUBE_CONTEXT_CLIENT_NAME",1),pc:R("INNERTUBE_CONTEXT_CLIENT_VERSION"),sc:R("INNERTUBE_CONTEXT_HL"),qc:R("INNERTUBE_CONTEXT_GL"),gd:R("INNERTUBE_HOST_OVERRIDE")||"",jd:!!R("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),hd:!!R("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",!1),appInstallData:R("SERIALIZED_CLIENT_CONFIG_DATA")}}
function Un(a){var b={client:{hl:a.sc,gl:a.qc,clientName:a.oc,clientVersion:a.pc,configInfo:a.Kb}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=C.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=R("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=Yj();0<c.length&&(b.request={internalExperimentFlags:c});Vn(a,void 0,b);Wn(void 0,b);Xn(void 0,b);Yn(a,void 0,b);Zn(void 0,b);S("start_client_gcf")&&$n(void 0,b);R("DELEGATED_SESSION_ID")&&!S("pageid_as_header_web")&&
(b.user={onBehalfOfUser:R("DELEGATED_SESSION_ID")});!S("fill_delegate_context_in_gel_killswitch")&&(a=R("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&(b.user=Object.assign({},b.user,{serializedDelegationContext:a}));a=Object;c=a.assign;for(var d=b.client,e={},f=w(Object.entries(Qj(R("DEVICE","")))),g=f.next();!g.done;g=f.next()){var h=w(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?e.deviceMake=h:"cmodel"===g?e.deviceModel=h:"cbr"===g?e.browserName=h:"cbrver"===g?e.browserVersion=
h:"cos"===g?e.osName=h:"cosver"===g?e.osVersion=h:"cplatform"===g&&(e.platform=h)}b.client=c.call(a,d,e);return b}
function Vn(a,b,c){a=a.oc;if("WEB"===a||"MWEB"===a||1===a||2===a)if(b){c=fe(b,Xi,96)||new Xi;var d=Dk();d=Object.keys(gj).indexOf(d);d=-1===d?null:d;null!==d&&ne(c,3,d);I(b,Xi,96,c)}else c&&(c.client.mainAppWebInfo=null!=(d=c.client.mainAppWebInfo)?d:{},c.client.mainAppWebInfo.webDisplayMode=Dk())}
function Wn(a,b){var c=D("yt.embedded_player.embed_url");c&&(a?(b=fe(a,cj,7)||new cj,J(b,4,c),I(a,cj,7,b)):b&&(b.thirdParty={embedUrl:c}))}
function Xn(a,b){var c;if(S("web_log_memory_total_kbytes")&&(null==(c=C.navigator)?0:c.deviceMemory)){var d;c=null==(d=C.navigator)?void 0:d.deviceMemory;a?ae(a,95,Jd(1E6*c)):b&&(b.client.memoryTotalKbytes=""+1E6*c)}}
function Yn(a,b,c){if(a.appInstallData)if(b){var d;c=null!=(d=fe(b,Wi,62))?d:new Wi;J(c,6,a.appInstallData);I(b,Wi,62,c)}else c&&(c.client.configInfo=c.client.configInfo||{},c.client.configInfo.appInstallData=a.appInstallData)}
function Zn(a,b){a:{var c=Kk();if(c){var d=Gk[c.type||"unknown"]||"CONN_UNKNOWN";c=Gk[c.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===d&&"CONN_UNKNOWN"!==c&&(d=c);if("CONN_UNKNOWN"!==d)break a;if("CONN_UNKNOWN"!==c){d=c;break a}}d=void 0}d&&(a?ne(a,61,Hk[d]):b&&(b.client.connectionType=d));S("web_log_effective_connection_type")&&(d=Kk(),d=null!=d&&d.effectiveType?Jk.hasOwnProperty(d.effectiveType)?Jk[d.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN":void 0,d&&(a?ne(a,94,Ik[d]):
b&&(b.client.effectiveConnectionType=d)))}
function ao(a,b,c){c=void 0===c?{}:c;var d={};R("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":R("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||R("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.le||R("AUTHORIZATION");if(!b)if(a)b="Bearer "+D("gapi.auth.getToken")().ke;else{Ek.g||(Ek.g=new Ek);a={};if(c=Ne([]))a.Authorization=c,c=void 0,void 0===c&&(c=Number(R("SESSION_INDEX",0)),c=isNaN(c)?0:c),S("voice_search_auth_header_removal")||(a["X-Goog-AuthUser"]=
c.toString()),"INNERTUBE_HOST_OVERRIDE"in Bj||(a["X-Origin"]=window.location.origin),"DELEGATED_SESSION_ID"in Bj&&(a["X-Goog-PageId"]=R("DELEGATED_SESSION_ID"));S("pageid_as_header_web")||delete a["X-Goog-PageId"];d=Object.assign({},d,a)}b&&(d.Authorization=b);return d}
function $n(a,b){if(!Pn.g){var c=new Pn;Pn.g=c}c=Pn.g;var d=V()-c.h;if(0!==c.h&&d<T("send_config_hash_timer"))c=void 0;else{d=D("yt.gcf.config.coldConfigData");var e=D("yt.gcf.config.hotHashData"),f=D("yt.gcf.config.coldHashData");d&&e&&f&&(c.h=V());c={coldConfigData:d,hotHashData:e,coldHashData:f}}if(e=c)if(d=e.coldConfigData,c=e.coldHashData,e=e.hotHashData,a){var g;b=null!=(g=fe(a,Wi,62))?g:new Wi;g=J(b,1,d);J(g,3,c).g(e);I(a,Wi,62,b)}else b&&(b.client.configInfo=b.client.configInfo||{},d&&(b.client.configInfo.coldConfigData=
d),c&&(b.client.configInfo.coldHashData=c),e&&(b.client.configInfo.hotHashData=e))}
;var bo="undefined"!==typeof TextEncoder?new TextEncoder:null,co=bo?function(a){return bo.encode(a)}:function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);
128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}a=new Uint8Array(b.length);for(c=0;c<a.length;c++)a[c]=b[c];return a};var eo=D("ytPubsub2Pubsub2Instance")||new L;L.prototype.subscribe=L.prototype.subscribe;L.prototype.unsubscribeByKey=L.prototype.qb;L.prototype.publish=L.prototype.Za;L.prototype.clear=L.prototype.clear;E("ytPubsub2Pubsub2Instance",eo);E("ytPubsub2Pubsub2SubscribedKeys",D("ytPubsub2Pubsub2SubscribedKeys")||{});E("ytPubsub2Pubsub2TopicToKeys",D("ytPubsub2Pubsub2TopicToKeys")||{});E("ytPubsub2Pubsub2IsAsync",D("ytPubsub2Pubsub2IsAsync")||{});E("ytPubsub2Pubsub2SkipSubKey",null);function fo(a,b,c){c=void 0===c?{sampleRate:.1}:c;Math.random()<Math.min(.02,c.sampleRate/100)&&(a={ye:a,xe:b},(b=D("ytPubsub2Pubsub2Instance"))&&b.publish.call(b,"meta_logging_csi_event".toString(),"meta_logging_csi_event",a))}
;var go=void 0,ho=void 0;function io(){if(!ho){var a=R("WORKER_SERIALIZATION_URL");if(a){if(a=a.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue){var b=mb();a=b?b.createScriptURL(a):a;a=new qb(a,rb)}else a=null;ho=a}else ho=null}return ho||void 0}
function jo(){var a=io();if(!go&&void 0!==a){var b=Worker;a instanceof qb&&a.constructor===qb?a=a.g:(Ma(a),a="type_error:TrustedResourceUrl");go=new b(a,void 0)}return go}
;var ko=T("max_body_size_to_compress",5E5),lo=T("min_body_size_to_compress",500),mo=!0,no=0,oo=0,po=T("compression_performance_threshold_lr",250),qo=T("slow_compressions_before_abandon_count",4),ro=!1,so=new Map,to=1,uo=!0;function vo(){if("function"===typeof Worker&&io()&&!ro){var a=function(c){c=c.data;if("gzippedGelBatch"===c.op){var d=so.get(c.key);d&&(wo(c.gzippedBatch,d.latencyPayload,d.url,d.options,d.sendFn),so.delete(c.key))}},b=jo();
b&&(b.addEventListener("message",a),b.onerror=function(){so.clear()},ro=!0)}}
function xo(a,b,c,d,e){e=void 0===e?!1:e;var f={startTime:V(),ticks:{},infos:{}};if(mo)try{try{var g=(new Blob(b.split(""))).size}catch(m){Jj(m),g=null}if(null!=g&&(g>ko||g<lo))d(a,c);else{if(S("gzip_gel_with_worker")&&(S("initial_gzip_use_main_thread")&&!uo||!S("initial_gzip_use_main_thread"))){ro||vo();var h=jo();if(h&&!e){so.set(to,{latencyPayload:f,url:a,options:c,sendFn:d});h.postMessage({op:"gelBatchToGzip",serializedBatch:b,key:to});to++;return}}var l=co(b);b=(b=void 0,{});b.bd=!0;var k=new Ri(b);
k.push(l,!0);if(k.err)throw k.msg||sh[k.err];wo(k.result,f,a,c,d)}}catch(m){Jj(m),d(a,c)}else d(a,c)}
function wo(a,b,c,d,e){uo=!1;var f=V();b.ticks.gelc=f;oo++;S("disable_compression_due_to_performance_degredation")&&f-b.startTime>=po&&(no++,S("abandon_compression_after_N_slow_zips")?oo===T("compression_disable_point")&&no>qo&&(mo=!1):mo=!1);S("gel_compression_csi_killswitch")||!S("log_gel_compression_latency")&&!S("log_gel_compression_latency_lr")||fo("gel_compression",b,{sampleRate:.1});d.headers||(d.headers={});d.headers["Content-Encoding"]="gzip";d.postBody=a;d.postParams=void 0;e(c,d)}
;function yo(a){a=Object.assign({},a);delete a.Authorization;var b=Ne();if(b){var c=new ig;c.update(R("INNERTUBE_API_KEY"));c.update(b);a.hash=Rc(c.digest(),3)}return a}
;var zo;function Ao(){zo||(zo=new vl("yt.innertube"));return zo}
function Bo(a,b,c,d){if(d)return null;d=Ao().get("nextId",!0)||1;var e=Ao().get("requests",!0)||{};e[d]={method:a,request:b,authState:yo(c),requestTime:Math.round(V())};Ao().set("nextId",d+1,86400,!0);Ao().set("requests",e,86400,!0);return d}
function Co(a){var b=Ao().get("requests",!0)||{};delete b[a];Ao().set("requests",b,86400,!0)}
function Do(a){var b=Ao().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(V())-d.requestTime)){var e=d.authState,f=yo(ao(!1));Jb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(V())),Eo(a,d.method,e,{}));delete b[c]}}Ao().set("requests",b,86400,!0)}}
;function Fo(a){this.tb=this.g=!1;this.potentialEsfErrorCounter=this.h=0;this.handleError=function(){};
this.Ra=function(){};
this.now=Date.now;this.kb=!1;var b;this.Fc=null!=(b=a.Fc)?b:100;var c;this.Dc=null!=(c=a.Dc)?c:1;var d;this.Bc=null!=(d=a.Bc)?d:2592E6;var e;this.Ac=null!=(e=a.Ac)?e:12E4;var f;this.Cc=null!=(f=a.Cc)?f:5E3;var g;this.I=null!=(g=a.I)?g:void 0;this.yb=!!a.yb;var h;this.wb=null!=(h=a.wb)?h:.1;var l;this.Eb=null!=(l=a.Eb)?l:10;a.handleError&&(this.handleError=a.handleError);a.Ra&&(this.Ra=a.Ra);a.kb&&(this.kb=a.kb);a.tb&&(this.tb=a.tb);this.J=a.J;this.ha=a.ha;this.N=a.N;this.R=a.R;this.sendFn=a.sendFn;
this.Vb=a.Vb;this.Sb=a.Sb;Go(this)&&(!this.J||this.J("networkless_logging"))&&Ho(this)}
function Ho(a){Go(a)&&!a.kb&&(a.g=!0,a.yb&&Math.random()<=a.wb&&a.N.Sc(a.I),Io(a),a.R.ca()&&a.pb(),a.R.Ja(a.Vb,a.pb.bind(a)),a.R.Ja(a.Sb,a.ec.bind(a)))}
r=Fo.prototype;r.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(Go(this)&&this.g){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.N.set(d,this.I).then(function(e){d.id=e;c.R.ca()&&Jo(c,d)}).catch(function(e){Jo(c,d);
Ko(c,e)})}else this.sendFn(a,b)};
r.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(Go(this)&&this.g){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.J&&this.J("nwl_skip_retry")&&(e.skipRetry=c);if(this.R.ca()||this.J&&this.J("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return B(function(l){if(1==l.g)return A(l,d.N.set(e,d.I).catch(function(k){Ko(d,k)}),2);
f(g,h);l.g=0})}}this.sendFn(a,b,e.skipRetry)}else this.N.set(e,this.I).catch(function(g){d.sendFn(a,b,e.skipRetry);
Ko(d,g)})}else this.sendFn(a,b,this.J&&this.J("nwl_skip_retry")&&c)};
r.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(Go(this)&&this.g){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.N.Qa(d.id,c.I):e=!0;c.R.La&&c.J&&c.J("vss_network_hint")&&c.R.La(!0);f(g,h)};
this.sendFn(d.url,d.options,void 0,!0);this.N.set(d,this.I).then(function(g){d.id=g;e&&c.N.Qa(d.id,c.I)}).catch(function(g){Ko(c,g)})}else this.sendFn(a,b,void 0,!0)};
r.pb=function(){var a=this;if(!Go(this))throw Error("IndexedDB is not supported: throttleSend");this.h||(this.h=this.ha.pa(function(){var b;return B(function(c){if(1==c.g)return A(c,a.N.lc("NEW",a.I),2);if(3!=c.g)return b=c.h,b?A(c,Jo(a,b),3):(a.ec(),c.return());a.h&&(a.h=0,a.pb());c.g=0})},this.Fc))};
r.ec=function(){this.ha.ba(this.h);this.h=0};
function Jo(a,b){var c;return B(function(d){switch(d.g){case 1:if(!Go(a))throw Error("IndexedDB is not supported: immediateSend");if(void 0===b.id){d.B(2);break}return A(d,a.N.ld(b.id,a.I),3);case 3:(c=d.h)||a.Ra(Error("The request cannot be found in the database."));case 2:if(Lo(a,b,a.Bc)){d.B(4);break}a.Ra(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){d.B(5);break}return A(d,a.N.Qa(b.id,a.I),5);case 5:return d.return();case 4:b.skipRetry||(b=Mo(a,b));if(!b){d.B(0);
break}if(!b.skipRetry||void 0===b.id){d.B(8);break}return A(d,a.N.Qa(b.id,a.I),8);case 8:a.sendFn(b.url,b.options,!!b.skipRetry),d.g=0}})}
function Mo(a,b){if(!Go(a))throw Error("IndexedDB is not supported: updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,l,k;return B(function(m){switch(m.g){case 1:g=No(f);(h=Oo(f))&&a.J&&a.J("web_enable_error_204")&&a.handleError(Error("Request failed due to compression"),b.url,f);if(!(a.J&&a.J("nwl_consider_error_code")&&g||a.J&&!a.J("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.Eb)){m.B(2);break}if(!a.R.Hb){m.B(3);break}return A(m,a.R.Hb(),3);case 3:if(a.R.ca()){m.B(2);break}c(e,f);if(!a.J||!a.J("nwl_consider_error_code")||void 0===(null==(l=b)?void 0:l.id)){m.B(6);
break}return A(m,a.N.Wb(b.id,a.I,!1),6);case 6:return m.return();case 2:if(a.J&&a.J("nwl_consider_error_code")&&!g&&a.potentialEsfErrorCounter>a.Eb)return m.return();a.potentialEsfErrorCounter++;if(void 0===(null==(k=b)?void 0:k.id)){m.B(8);break}return b.sendCount<a.Dc?A(m,a.N.Wb(b.id,a.I,!0,h?!1:void 0),12):A(m,a.N.Qa(b.id,a.I),8);case 12:a.ha.pa(function(){a.R.ca()&&a.pb()},a.Cc);
case 8:c(e,f),m.g=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return B(function(h){if(1==h.g)return void 0===(null==(g=b)?void 0:g.id)?h.B(2):A(h,a.N.Qa(b.id,a.I),2);a.R.La&&a.J&&a.J("vss_network_hint")&&a.R.La(!0);d(e,f);h.g=0})};
return b}
function Lo(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function Io(a){if(!Go(a))throw Error("IndexedDB is not supported: retryQueuedRequests");a.N.lc("QUEUED",a.I).then(function(b){b&&!Lo(a,b,a.Ac)?a.ha.pa(function(){return B(function(c){if(1==c.g)return void 0===b.id?c.B(2):A(c,a.N.Wb(b.id,a.I),2);Io(a);c.g=0})}):a.R.ca()&&a.pb()})}
function Ko(a,b){a.Hc&&!a.R.ca()?a.Hc(b):a.handleError(b)}
function Go(a){return!!a.I||a.tb}
function No(a){var b;return(a=null==a?void 0:null==(b=a.error)?void 0:b.code)&&400<=a&&599>=a?!1:!0}
function Oo(a){var b;a=null==a?void 0:null==(b=a.error)?void 0:b.code;return!(400!==a&&415!==a)}
;var Po;
function Qo(){if(Po)return Po();var a={};Po=Um("LogsDatabaseV2",{Ya:(a.LogsRequestsStore={gb:2},a),shared:!1,upgrade:function(b,c,d){c(2)&&dm(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.g.indexNames.contains("newRequest")&&d.g.deleteIndex("newRequest"),km(d,"newRequestV2",["status","interface","timestamp"]));c(7)&&b.g.objectStoreNames.contains("sapisid")&&b.g.deleteObjectStore("sapisid");c(9)&&b.g.objectStoreNames.contains("SWHealthLog")&&b.g.deleteObjectStore("SWHealthLog")},
version:9});return Po()}
;function Ro(a){return xm(Qo(),a)}
function So(a,b){var c,d,e,f;return B(function(g){if(1==g.g)return c={startTime:V(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},ticks:{}},A(g,Ro(b),2);if(3!=g.g)return d=g.h,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:R("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),A(g,fm(d,"LogsRequestsStore",e),3);f=g.h;c.ticks.tc=V();To(c);return g.return(f)})}
function Uo(a,b){var c,d,e,f,g,h,l,k;return B(function(m){if(1==m.g)return c={startTime:V(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},ticks:{}},A(m,Ro(b),2);if(3!=m.g)return d=m.h,e=R("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,V()],h=IDBKeyRange.bound(f,g),l="prev",S("use_fifo_for_networkless")&&(l="next"),k=void 0,A(m,cm(d,["LogsRequestsStore"],{mode:"readwrite",W:!0},function(n){return qm(n.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:l},function(q){q.cursor.value&&
(k=q.cursor.value,"NEW"===a&&(k.status="QUEUED",q.update(k)))})}),3);
c.ticks.tc=V();To(c);return m.return(k)})}
function Vo(a,b){var c;return B(function(d){if(1==d.g)return A(d,Ro(b),2);c=d.h;return d.return(cm(c,["LogsRequestsStore"],{mode:"readwrite",W:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",$l(f.g.put(g,void 0)).then(function(){return g})})}))})}
function Wo(a,b,c,d){c=void 0===c?!0:c;var e;return B(function(f){if(1==f.g)return A(f,Ro(b),2);e=f.h;return f.return(cm(e,["LogsRequestsStore"],{mode:"readwrite",W:!0},function(g){var h=g.objectStore("LogsRequestsStore");return h.get(a).then(function(l){return l?(l.status="NEW",c&&(l.sendCount+=1),void 0!==d&&(l.options.compress=d),$l(h.g.put(l,void 0)).then(function(){return l})):Tl.resolve(void 0)})}))})}
function Xo(a,b){var c;return B(function(d){if(1==d.g)return A(d,Ro(b),2);c=d.h;return d.return(c.delete("LogsRequestsStore",a))})}
function Yo(a){var b,c;return B(function(d){if(1==d.g)return A(d,Ro(a),2);b=d.h;c=V()-2592E6;return A(d,cm(b,["LogsRequestsStore"],{mode:"readwrite",W:!0},function(e){return mm(e.objectStore("LogsRequestsStore"),{},function(f){if(f.cursor.value.timestamp<=c)return f.delete().then(function(){return nm(f)})})}),0)})}
function Zo(){B(function(a){return A(a,Qm(),0)})}
function To(a){S("nwl_csi_killswitch")||fo("networkless_performance",a,{sampleRate:1})}
;var $o={accountStateChangeSignedIn:23,accountStateChangeSignedOut:24,delayedEventMetricCaptured:11,latencyActionBaselined:6,latencyActionInfo:7,latencyActionTicked:5,offlineTransferStatusChanged:2,offlineImageDownload:335,playbackStartStateChanged:9,systemHealthCaptured:3,mangoOnboardingCompleted:10,mangoPushNotificationReceived:230,mangoUnforkDbMigrationError:121,mangoUnforkDbMigrationSummary:122,mangoUnforkDbMigrationPreunforkDbVersionNumber:133,mangoUnforkDbMigrationPhoneMetadata:134,mangoUnforkDbMigrationPhoneStorage:135,
mangoUnforkDbMigrationStep:142,mangoAsyncApiMigrationEvent:223,mangoDownloadVideoResult:224,mangoHomepageVideoCount:279,mangoHomeV3State:295,mangoImageClientCacheHitEvent:273,sdCardStatusChanged:98,framesDropped:12,thumbnailHovered:13,deviceRetentionInfoCaptured:14,thumbnailLoaded:15,backToAppEvent:318,streamingStatsCaptured:17,offlineVideoShared:19,appCrashed:20,youThere:21,offlineStateSnapshot:22,mdxSessionStarted:25,mdxSessionConnected:26,mdxSessionDisconnected:27,bedrockResourceConsumptionSnapshot:28,
nextGenWatchWatchSwiped:29,kidsAccountsSnapshot:30,zeroStepChannelCreated:31,tvhtml5SearchCompleted:32,offlineSharePairing:34,offlineShareUnlock:35,mdxRouteDistributionSnapshot:36,bedrockRepetitiveActionTimed:37,unpluggedDegradationInfo:229,uploadMp4HeaderMoved:38,uploadVideoTranscoded:39,uploadProcessorStarted:46,uploadProcessorEnded:47,uploadProcessorReady:94,uploadProcessorRequirementPending:95,uploadProcessorInterrupted:96,uploadFrontendEvent:241,assetPackDownloadStarted:41,assetPackDownloaded:42,
assetPackApplied:43,assetPackDeleted:44,appInstallAttributionEvent:459,playbackSessionStopped:45,adBlockerMessagingShown:48,distributionChannelCaptured:49,dataPlanCpidRequested:51,detailedNetworkTypeCaptured:52,sendStateUpdated:53,receiveStateUpdated:54,sendDebugStateUpdated:55,receiveDebugStateUpdated:56,kidsErrored:57,mdxMsnSessionStatsFinished:58,appSettingsCaptured:59,mdxWebSocketServerHttpError:60,mdxWebSocketServer:61,startupCrashesDetected:62,coldStartInfo:435,offlinePlaybackStarted:63,liveChatMessageSent:225,
liveChatUserPresent:434,liveChatBeingModerated:457,liveCreationCameraUpdated:64,liveCreationEncodingCaptured:65,liveCreationError:66,liveCreationHealthUpdated:67,liveCreationVideoEffectsCaptured:68,liveCreationStageOccured:75,liveCreationBroadcastScheduled:123,liveCreationArchiveReplacement:149,liveCreationCostreamingConnection:421,liveCreationStreamWebrtcStats:288,mdxSessionRecoveryStarted:69,mdxSessionRecoveryCompleted:70,mdxSessionRecoveryStopped:71,visualElementShown:72,visualElementHidden:73,
visualElementGestured:78,visualElementStateChanged:208,screenCreated:156,playbackAssociated:202,visualElementAttached:215,playbackContextEvent:214,cloudCastingPlaybackStarted:74,webPlayerApiCalled:76,tvhtml5AccountDialogOpened:79,foregroundHeartbeat:80,foregroundHeartbeatScreenAssociated:111,kidsOfflineSnapshot:81,mdxEncryptionSessionStatsFinished:82,playerRequestCompleted:83,liteSchedulerStatistics:84,mdxSignIn:85,spacecastMetadataLookupRequested:86,spacecastBatchLookupRequested:87,spacecastSummaryRequested:88,
spacecastPlayback:89,spacecastDiscovery:90,tvhtml5LaunchUrlComponentChanged:91,mdxBackgroundPlaybackRequestCompleted:92,mdxBrokenAdditionalDataDeviceDetected:93,tvhtml5LocalStorage:97,tvhtml5DeviceStorageStatus:147,autoCaptionsAvailable:99,playbackScrubbingEvent:339,flexyState:100,interfaceOrientationCaptured:101,mainAppBrowseFragmentCache:102,offlineCacheVerificationFailure:103,offlinePlaybackExceptionDigest:217,vrCopresenceStats:104,vrCopresenceSyncStats:130,vrCopresenceCommsStats:137,vrCopresencePartyStats:153,
vrCopresenceEmojiStats:213,vrCopresenceEvent:141,vrCopresenceFlowTransitEvent:160,vrCowatchPartyEvent:492,vrPlaybackEvent:345,kidsAgeGateTracking:105,offlineDelayAllowedTracking:106,mainAppAutoOfflineState:107,videoAsThumbnailDownload:108,videoAsThumbnailPlayback:109,liteShowMore:110,renderingError:118,kidsProfilePinGateTracking:119,abrTrajectory:124,scrollEvent:125,streamzIncremented:126,kidsProfileSwitcherTracking:127,kidsProfileCreationTracking:129,buyFlowStarted:136,mbsConnectionInitiated:138,
mbsPlaybackInitiated:139,mbsLoadChildren:140,liteProfileFetcher:144,mdxRemoteTransaction:146,reelPlaybackError:148,reachabilityDetectionEvent:150,mobilePlaybackEvent:151,courtsidePlayerStateChanged:152,musicPersistentCacheChecked:154,musicPersistentCacheCleared:155,playbackInterrupted:157,playbackInterruptionResolved:158,fixFopFlow:159,anrDetection:161,backstagePostCreationFlowEnded:162,clientError:163,gamingAccountLinkStatusChanged:164,liteHousewarming:165,buyFlowEvent:167,kidsParentalGateTracking:168,
kidsSignedOutSettingsStatus:437,kidsSignedOutPauseHistoryFixStatus:438,tvhtml5WatchdogViolation:444,ypcUpgradeFlow:169,yongleStudy:170,ypcUpdateFlowStarted:171,ypcUpdateFlowCancelled:172,ypcUpdateFlowSucceeded:173,ypcUpdateFlowFailed:174,liteGrowthkitPromo:175,paymentFlowStarted:341,transactionFlowShowPaymentDialog:405,transactionFlowStarted:176,transactionFlowSecondaryDeviceStarted:222,transactionFlowSecondaryDeviceSignedOutStarted:383,transactionFlowCancelled:177,transactionFlowPaymentCallBackReceived:387,
transactionFlowPaymentSubmitted:460,transactionFlowPaymentSucceeded:329,transactionFlowSucceeded:178,transactionFlowFailed:179,transactionFlowPlayBillingConnectionStartEvent:428,transactionFlowSecondaryDeviceSuccess:458,transactionFlowErrorEvent:411,liteVideoQualityChanged:180,watchBreakEnablementSettingEvent:181,watchBreakFrequencySettingEvent:182,videoEffectsCameraPerformanceMetrics:183,adNotify:184,startupTelemetry:185,playbackOfflineFallbackUsed:186,outOfMemory:187,ypcPauseFlowStarted:188,ypcPauseFlowCancelled:189,
ypcPauseFlowSucceeded:190,ypcPauseFlowFailed:191,uploadFileSelected:192,ypcResumeFlowStarted:193,ypcResumeFlowCancelled:194,ypcResumeFlowSucceeded:195,ypcResumeFlowFailed:196,adsClientStateChange:197,ypcCancelFlowStarted:198,ypcCancelFlowCancelled:199,ypcCancelFlowSucceeded:200,ypcCancelFlowFailed:201,ypcCancelFlowGoToPaymentProcessor:402,ypcDeactivateFlowStarted:320,ypcRedeemFlowStarted:203,ypcRedeemFlowCancelled:204,ypcRedeemFlowSucceeded:205,ypcRedeemFlowFailed:206,ypcFamilyCreateFlowStarted:258,
ypcFamilyCreateFlowCancelled:259,ypcFamilyCreateFlowSucceeded:260,ypcFamilyCreateFlowFailed:261,ypcFamilyManageFlowStarted:262,ypcFamilyManageFlowCancelled:263,ypcFamilyManageFlowSucceeded:264,ypcFamilyManageFlowFailed:265,restoreContextEvent:207,embedsAdEvent:327,autoplayTriggered:209,clientDataErrorEvent:210,experimentalVssValidation:211,tvhtml5TriggeredEvent:212,tvhtml5FrameworksFieldTrialResult:216,tvhtml5FrameworksFieldTrialStart:220,musicOfflinePreferences:218,watchTimeSegment:219,appWidthLayoutError:221,
accountRegistryChange:226,userMentionAutoCompleteBoxEvent:227,downloadRecommendationEnablementSettingEvent:228,musicPlaybackContentModeChangeEvent:231,offlineDbOpenCompleted:232,kidsFlowEvent:233,kidsFlowCorpusSelectedEvent:234,videoEffectsEvent:235,unpluggedOpsEogAnalyticsEvent:236,playbackAudioRouteEvent:237,interactionLoggingDebugModeError:238,offlineYtbRefreshed:239,kidsFlowError:240,musicAutoplayOnLaunchAttempted:242,deviceContextActivityEvent:243,deviceContextEvent:244,templateResolutionException:245,
musicSideloadedPlaylistServiceCalled:246,embedsStorageAccessNotChecked:247,embedsHasStorageAccessResult:248,embedsItpPlayedOnReload:249,embedsRequestStorageAccessResult:250,embedsShouldRequestStorageAccessResult:251,embedsRequestStorageAccessState:256,embedsRequestStorageAccessFailedState:257,embedsItpWatchLaterResult:266,searchSuggestDecodingPayloadFailure:252,siriShortcutActivated:253,tvhtml5KeyboardPerformance:254,latencyActionSpan:255,elementsLog:267,ytbFileOpened:268,tfliteModelError:269,apiTest:270,
yongleUsbSetup:271,touStrikeInterstitialEvent:272,liteStreamToSave:274,appBundleClientEvent:275,ytbFileCreationFailed:276,adNotifyFailure:278,ytbTransferFailed:280,blockingRequestFailed:281,liteAccountSelector:282,liteAccountUiCallbacks:283,dummyPayload:284,browseResponseValidationEvent:285,entitiesError:286,musicIosBackgroundFetch:287,mdxNotificationEvent:289,layersValidationError:290,musicPwaInstalled:291,liteAccountCleanup:292,html5PlayerHealthEvent:293,watchRestoreAttempt:294,liteAccountSignIn:296,
notaireEvent:298,kidsVoiceSearchEvent:299,adNotifyFilled:300,delayedEventDropped:301,analyticsSearchEvent:302,systemDarkThemeOptOutEvent:303,flowEvent:304,networkConnectivityBaselineEvent:305,ytbFileImported:306,downloadStreamUrlExpired:307,directSignInEvent:308,lyricImpressionEvent:309,accessibilityStateEvent:310,tokenRefreshEvent:311,genericAttestationExecution:312,tvhtml5VideoSeek:313,unpluggedAutoPause:314,scrubbingEvent:315,bedtimeReminderEvent:317,tvhtml5UnexpectedRestart:319,tvhtml5StabilityTraceEvent:478,
tvhtml5OperationHealth:467,tvhtml5WatchKeyEvent:321,voiceLanguageChanged:322,tvhtml5LiveChatStatus:323,parentToolsCorpusSelectedEvent:324,offerAdsEnrollmentInitiated:325,networkQualityIntervalEvent:326,deviceStartupMetrics:328,heartbeatActionPlayerTransitioned:330,tvhtml5Lifecycle:331,heartbeatActionPlayerHalted:332,adaptiveInlineMutedSettingEvent:333,mainAppLibraryLoadingState:334,thirdPartyLogMonitoringEvent:336,appShellAssetLoadReport:337,tvhtml5AndroidAttestation:338,tvhtml5StartupSoundEvent:340,
iosBackgroundRefreshTask:342,iosBackgroundProcessingTask:343,sliEventBatch:344,postImpressionEvent:346,musicSideloadedPlaylistExport:347,idbUnexpectedlyClosed:348,voiceSearchEvent:349,mdxSessionCastEvent:350,idbQuotaExceeded:351,idbTransactionEnded:352,idbTransactionAborted:353,tvhtml5KeyboardLogging:354,idbIsSupportedCompleted:355,creatorStudioMobileEvent:356,idbDataCorrupted:357,parentToolsAppChosenEvent:358,webViewBottomSheetResized:359,activeStateControllerScrollPerformanceSummary:360,navigatorValidation:361,
mdxSessionHeartbeat:362,clientHintsPolyfillDiagnostics:363,clientHintsPolyfillEvent:364,proofOfOriginTokenError:365,kidsAddedAccountSummary:366,musicWearableDevice:367,ypcRefundFlowEvent:368,tvhtml5PlaybackMeasurementEvent:369,tvhtml5WatermarkMeasurementEvent:370,clientExpGcfPropagationEvent:371,mainAppReferrerIntent:372,leaderLockEnded:373,leaderLockAcquired:374,googleHatsEvent:375,persistentLensLaunchEvent:376,parentToolsChildWelcomeChosenEvent:378,browseThumbnailPreloadEvent:379,finalPayload:380,
mdxDialAdditionalDataUpdateEvent:381,webOrchestrationTaskLifecycleRecord:382,startupSignalEvent:384,accountError:385,gmsDeviceCheckEvent:386,accountSelectorEvent:388,accountUiCallbacks:389,mdxDialAdditionalDataProbeEvent:390,downloadsSearchIcingApiStats:391,downloadsSearchIndexUpdatedEvent:397,downloadsSearchIndexSnapshot:398,dataPushClientEvent:392,kidsCategorySelectedEvent:393,mdxDeviceManagementSnapshotEvent:394,prefetchRequested:395,prefetchableCommandExecuted:396,gelDebuggingEvent:399,webLinkTtsPlayEnd:400,
clipViewInvalid:401,persistentStorageStateChecked:403,cacheWipeoutEvent:404,playerEvent:410,sfvEffectPipelineStartedEvent:412,sfvEffectPipelinePausedEvent:429,sfvEffectPipelineEndedEvent:413,sfvEffectChosenEvent:414,sfvEffectLoadedEvent:415,sfvEffectUserInteractionEvent:465,sfvEffectFirstFrameProcessedLatencyEvent:416,sfvEffectAggregatedFramesProcessedLatencyEvent:417,sfvEffectAggregatedFramesDroppedEvent:418,sfvEffectPipelineErrorEvent:430,sfvEffectGraphFrozenEvent:419,sfvEffectGlThreadBlockedEvent:420,
mdeVideoChangedEvent:442,mdePlayerPerformanceMetrics:472,genericClientExperimentEvent:423,homePreloadTaskScheduled:424,homePreloadTaskExecuted:425,homePreloadCacheHit:426,polymerPropertyChangedInObserver:427,applicationStarted:431,networkCronetRttBatch:432,networkCronetRttSummary:433,repeatChapterLoopEvent:436,seekCancellationEvent:462,lockModeTimeoutEvent:483,offlineTransferStarted:4,musicOfflineMixtapePreferencesChanged:16,mangoDailyNewVideosNotificationAttempt:40,mangoDailyNewVideosNotificationError:77,
dtwsPlaybackStarted:112,dtwsTileFetchStarted:113,dtwsTileFetchCompleted:114,dtwsTileFetchStatusChanged:145,dtwsKeyframeDecoderBufferSent:115,dtwsTileUnderflowedOnNonkeyframe:116,dtwsBackfillFetchStatusChanged:143,dtwsBackfillUnderflowed:117,dtwsAdaptiveLevelChanged:128,blockingVisitorIdTimeout:277,liteSocial:18,mobileJsInvocation:297,biscottiBasedDetection:439,coWatchStateChange:440,embedsVideoDataDidChange:441,shortsFirst:443,cruiseControlEvent:445,qoeClientLoggingContext:446,atvRecommendationJobExecuted:447,
tvhtml5UserFeedback:448,producerProjectCreated:449,producerProjectOpened:450,producerProjectDeleted:451,producerProjectElementAdded:453,producerProjectElementRemoved:454,tvhtml5ShowClockEvent:455,deviceCapabilityCheckMetrics:456,youtubeClearcutEvent:461,offlineBrowseFallbackEvent:463,getCtvTokenEvent:464,startupDroppedFramesSummary:466,screenshotEvent:468,miniAppPlayEvent:469,elementsDebugCounters:470,fontLoadEvent:471,webKillswitchReceived:473,webKillswitchExecuted:474,cameraOpenEvent:475,manualSmoothnessMeasurement:476,
tvhtml5AppQualityEvent:477,polymerPropertyAccessEvent:479,miniAppSdkUsage:480,cobaltTelemetryEvent:481,crossDevicePlayback:482,channelCreatedWithObakeImage:484,channelEditedWithObakeImage:485,offlineDeleteEvent:486,crossDeviceNotificationTransfer:487,androidIntentEvent:488,unpluggedAmbientInterludesCounterfactualEvent:489,keyPlaysPlayback:490,shortsCreationFallbackEvent:493,vssData:491,castMatch:494,miniAppPerformanceMetrics:495,userFeedbackEvent:496};var ap={},bp=Um("ServiceWorkerLogsDatabase",{Ya:(ap.SWHealthLog={gb:1},ap),shared:!0,upgrade:function(a,b){b(1)&&km(dm(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}),"swHealthNewRequest",["interface","timestamp"])},
version:1});function cp(a){return xm(bp(),a)}
function dp(a){var b,c;B(function(d){if(1==d.g)return A(d,cp(a),2);b=d.h;c=V()-2592E6;return A(d,cm(b,["SWHealthLog"],{mode:"readwrite",W:!0},function(e){return mm(e.objectStore("SWHealthLog"),{},function(f){if(f.cursor.value.timestamp<=c)return f.delete().then(function(){return nm(f)})})}),0)})}
function ep(a){var b;return B(function(c){if(1==c.g)return A(c,cp(a),2);b=c.h;return A(c,b.clear("SWHealthLog"),0)})}
;var fp={},gp=0;function hp(a){var b=new Image,c=""+gp++;fp[c]=b;b.onload=b.onerror=function(){delete fp[c]};
b.src=a}
;var ip;function jp(){ip||(ip=new vl("yt.offline"));return ip}
function kp(a){if(S("offline_error_handling")){var b=jp().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);jp().set("errors",b,2592E3,!0)}}
;function lp(){this.g=new Map;this.h=!1}
function mp(){if(!lp.g){var a=D("yt.networkRequestMonitor.instance")||new lp;E("yt.networkRequestMonitor.instance",a);lp.g=a}return lp.g}
lp.prototype.requestComplete=function(a,b){b&&(this.h=!0);a=this.removeParams(a);this.g.get(a)||this.g.set(a,b)};
lp.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.g.get(a))?!1:!1===a&&this.h?!0:null};
lp.prototype.removeParams=function(a){return a.split("?")[0]};
lp.prototype.removeParams=lp.prototype.removeParams;lp.prototype.isEndpointCFR=lp.prototype.isEndpointCFR;lp.prototype.requestComplete=lp.prototype.requestComplete;lp.getInstance=mp;function Z(){sf.call(this);var a=this;this.i=!1;this.h=yf();this.h.Ja("networkstatus-online",function(){if(a.i&&S("offline_error_handling")){var b=jp().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new Lk(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;Ij(d)}jp().set("errors",{},2592E3,!0)}}})}
y(Z,sf);function np(){if(!Z.g){var a=D("yt.networkStatusManager.instance")||new Z;E("yt.networkStatusManager.instance",a);Z.g=a}return Z.g}
r=Z.prototype;r.ca=function(){return this.h.ca()};
r.La=function(a){this.h.h=a};
r.Zc=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
r.Vc=function(){this.i=!0};
r.Ja=function(a,b){return this.h.Ja(a,b)};
r.Hb=function(a){a=wf(this.h,a);a.then(function(b){S("use_cfr_monitor")&&mp().requestComplete("generate_204",b)});
return a};
Z.prototype.sendNetworkCheckRequest=Z.prototype.Hb;Z.prototype.listen=Z.prototype.Ja;Z.prototype.enableErrorFlushing=Z.prototype.Vc;Z.prototype.getWindowStatus=Z.prototype.Zc;Z.prototype.networkStatusHint=Z.prototype.La;Z.prototype.isNetworkAvailable=Z.prototype.ca;Z.getInstance=np;function op(a){a=void 0===a?{}:a;sf.call(this);var b=this;this.h=this.u=0;this.i=np();var c=D("yt.networkStatusManager.instance.listen").bind(this.i);c&&(a.Gb?(this.Gb=a.Gb,c("networkstatus-online",function(){pp(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){pp(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){tf(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){tf(b,"publicytnetworkstatus-offline")})))}
y(op,sf);op.prototype.ca=function(){var a=D("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.i)():!0};
op.prototype.La=function(a){var b=D("yt.networkStatusManager.instance.networkStatusHint").bind(this.i);b&&b(a)};
op.prototype.Hb=function(a){var b=this,c;return B(function(d){c=D("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.i);return S("skip_network_check_if_cfr")&&mp().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.La((null==(f=window.navigator)?void 0:f.onLine)||!0);e(b.ca())})):c?d.return(c(a)):d.return(!0)})};
function pp(a,b){a.Gb?a.h?(zf.ba(a.u),a.u=zf.pa(function(){a.o!==b&&(tf(a,b),a.o=b,a.h=V())},a.Gb-(V()-a.h))):(tf(a,b),a.o=b,a.h=V()):tf(a,b)}
;var qp;function rp(){var a=Fo.call;qp||(qp=new op({pe:!0,oe:!0}));a.call(Fo,this,{N:{Sc:Yo,Qa:Xo,lc:Uo,ld:Vo,Wb:Wo,set:So},R:qp,handleError:function(b,c,d){var e,f=null==d?void 0:null==(e=d.error)?void 0:e.code;if(400===f||415===f){var g;Jj(new Lk(b.message,c,null==d?void 0:null==(g=d.error)?void 0:g.code),void 0,void 0,void 0,!0)}else Ij(b)},
Ra:Jj,sendFn:sp,now:V,Hc:kp,ha:ul(),Vb:"publicytnetworkstatus-online",Sb:"publicytnetworkstatus-offline",yb:!0,wb:.1,Eb:T("potential_esf_error_limit",10),J:S,kb:!(Mk()&&"www.youtube-nocookie.com"!==lc(document.location.toString()))});this.i=new sg;S("networkless_immediately_drop_all_requests")&&Zo();Rm("LogsDatabaseV2")}
y(rp,Fo);function tp(){var a=D("yt.networklessRequestController.instance");a||(a=new rp,E("yt.networklessRequestController.instance",a),S("networkless_logging")&&Jm().then(function(b){a.I=b;Ho(a);a.i.resolve();a.yb&&Math.random()<=a.wb&&a.I&&dp(a.I);S("networkless_immediately_drop_sw_health_store")&&up(a)}));
return a}
rp.prototype.writeThenSend=function(a,b){b||(b={});b=vp(a,b);Mk()||(this.g=!1);Fo.prototype.writeThenSend.call(this,a,b)};
rp.prototype.sendThenWrite=function(a,b,c){b||(b={});b=vp(a,b);Mk()||(this.g=!1);Fo.prototype.sendThenWrite.call(this,a,b,c)};
rp.prototype.sendAndWrite=function(a,b){b||(b={});b=vp(a,b);Mk()||(this.g=!1);Fo.prototype.sendAndWrite.call(this,a,b)};
rp.prototype.awaitInitialization=function(){return this.i.promise};
function up(a){var b;B(function(c){if(!a.I)throw b=Pl("clearSWHealthLogsDb"),b;return c.return(ep(a.I).catch(function(d){a.handleError(d)}))})}
function sp(a,b,c,d){d=void 0===d?!1:d;b=S("web_fp_via_jspb")?Object.assign({},b):b;S("use_cfr_monitor")&&wp(a,b);if(S("use_request_time_ms_header"))b.headers&&Sj(a)&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(V())));else{var e;if(null==(e=b.postParams)?0:e.requestTimeMs)b.postParams.requestTimeMs=Math.round(V())}if(c&&0===Object.keys(b).length){var f=void 0===f?"":f;var g=void 0===g?!1:g;var h=void 0===h?!1:h;if(a)if(f)qk(a,void 0,"POST",f,void 0);else if(R("USE_NET_AJAX_FOR_PING_TRANSPORT",
!1)||h)qk(a,void 0,"GET","",void 0,void 0,g,h);else{b:{try{var l=new $a({url:a});if(l.i&&l.h||l.l){var k=kc(a.match(jc)[5]||null);var m=!(!k||!k.endsWith("/aclk")||"1"!==qc(a,"ri"));break b}}catch(q){}m=!1}if(m){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var n=!0;break b}}catch(q){}n=!1}c=n?!0:!1}else c=!1;c||hp(a)}}else b.compress?b.postBody?("string"!==typeof b.postBody&&(b.postBody=JSON.stringify(b.postBody)),xo(a,b.postBody,b,uk,d)):xo(a,JSON.stringify(b.postParams),
b,tk,d):uk(a,b)}
function vp(a,b){S("use_event_time_ms_header")&&Sj(a)&&(b.headers||(b.headers={}),b.headers["X-Goog-Event-Time"]=JSON.stringify(Math.round(V())));return b}
function wp(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){mp().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){mp().requestComplete(a,!0);d(e,f)}}
;var xp=C.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:!1};E("ytNetworklessLoggingInitializationOptions",xp);function yp(a){var b=this;this.config_=null;a?this.config_=a:Sn()&&(this.config_=Tn());Pk(function(){Do(b)},5E3)}
yp.prototype.isReady=function(){!this.config_&&Sn()&&(this.config_=Tn());return!!this.config_};
function Eo(a,b,c,d){function e(t){t=void 0===t?!1:t;var u;if(d.retry&&"www.youtube-nocookie.com"!=h&&(t||S("skip_ls_gel_retry")||"application/json"!==g.headers["Content-Type"]||(u=Bo(b,c,k,l)),u)){var z=g.onSuccess,G=g.onFetchSuccess;g.onSuccess=function(X,Ka){Co(u);z(X,Ka)};
c.onFetchSuccess=function(X,Ka){Co(u);G(X,Ka)}}try{if(t&&d.retry&&!d.networklessOptions.bypassNetworkless)g.method="POST",d.networklessOptions.writeThenSend?tp().writeThenSend(p,g):tp().sendAndWrite(p,g);
else if(d.compress){var P=!d.networklessOptions.writeThenSend;if(g.postBody){var U=g.postBody;"string"!==typeof U&&(U=JSON.stringify(g.postBody));xo(p,U,g,uk,P)}else xo(p,JSON.stringify(g.postParams),g,tk,P)}else S("web_all_payloads_via_jspb")?uk(p,g):tk(p,g)}catch(X){if("InvalidAccessError"===X.name)u&&(Co(u),u=0),Jj(Error("An extension is blocking network request."));else throw X;}u&&Pk(function(){Do(a)},5E3)}
!R("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&Jj(new Lk("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new Lk("innertube xhrclient not ready",b,c,d);Ij(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(t,u){if(d.onSuccess)d.onSuccess(u)},
onFetchSuccess:function(t){if(d.onSuccess)d.onSuccess(t)},
onError:function(t,u){if(d.onError)d.onError(u)},
onFetchError:function(t){if(d.onError)d.onError(t)},
timeout:d.timeout,withCredentials:!0,compress:d.compress};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.gd)&&(h=f);var l=a.config_.jd||!1,k=ao(l,h,d);Object.assign(g.headers,k);(f=g.headers.Authorization)&&!h&&l&&(g.headers["x-origin"]=window.location.origin);var m="/youtubei/"+a.config_.ed+"/"+b,n={alt:"json"},q=a.config_.hd&&f;q=q&&f.startsWith("Bearer");q||(n.key=a.config_.dd);var p=Rj(""+h+m,n||{},!0);D("ytNetworklessLoggingInitializationOptions")&&
xp.isNwlInitialized?Hm().then(function(t){e(t)}):e(!1)}
;var zp=C.ytPubsubPubsubInstance||new L,Ap=C.ytPubsubPubsubSubscribedKeys||{},Bp=C.ytPubsubPubsubTopicToKeys||{},Cp=C.ytPubsubPubsubIsSynchronous||{};L.prototype.subscribe=L.prototype.subscribe;L.prototype.unsubscribeByKey=L.prototype.qb;L.prototype.publish=L.prototype.Za;L.prototype.clear=L.prototype.clear;E("ytPubsubPubsubInstance",zp);E("ytPubsubPubsubTopicToKeys",Bp);E("ytPubsubPubsubIsSynchronous",Cp);E("ytPubsubPubsubSubscribedKeys",Ap);function Dp(){var a=D("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;var Ep=Symbol("injectionDeps");function Fp(){this.key=Pn}
function Gp(){this.h=new Map;this.g=new Map}
Gp.prototype.resolve=function(a){return a instanceof Fp?Hp(this,a.key,[],!0):Hp(this,a,[])};
function Hp(a,b,c,d){d=void 0===d?!1:d;if(-1<c.indexOf(b))throw Error("Deps cycle for: "+b);if(a.g.has(b))return a.g.get(b);if(!a.h.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.h.get(b);c.push(b);if(void 0!==d.zd)var e=d.zd;else if(d.yd)e=d[Ep]?Ip(a,d[Ep],c):[],e=d.yd.apply(d,x(e));else if(d.xd){e=d.xd;var f=e[Ep]?Ip(a,e[Ep],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(x(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.we||a.g.set(b,e);return e}
function Ip(a,b,c){return b?b.map(function(d){return d instanceof Fp?Hp(a,d.key,c,!0):Hp(a,d,c)}):[]}
;var Jp;function Kp(){Jp||(Jp=new Gp);return Jp}
;var Lp=window;function Mp(){var a,b;return"h5vcc"in Lp&&(null==(a=Lp.h5vcc.traceEvent)?0:a.traceBegin)&&(null==(b=Lp.h5vcc.traceEvent)?0:b.traceEnd)?1:"performance"in Lp&&Lp.performance.mark&&Lp.performance.measure?2:0}
function Np(a){switch(Mp()){case 1:Lp.h5vcc.traceEvent.traceBegin("YTLR",a);break;case 2:Lp.performance.mark(a+"-start");break;case 0:break;default:$b()}}
function Op(a){switch(Mp()){case 1:Lp.h5vcc.traceEvent.traceEnd("YTLR",a);break;case 2:var b=a+"-start",c=a+"-end";Lp.performance.mark(c);Lp.performance.measure(a,b,c);break;case 0:break;default:$b()}}
;var Pp=S("web_enable_lifecycle_monitoring")&&0!==Mp(),Qp=S("web_enable_lifecycle_monitoring");function Rp(a){var b=this;var c=void 0===c?0:c;var d=void 0===d?ul():d;this.l=c;this.h=d;this.i=new sg;this.g=a;for(a={Ia:0};a.Ia<this.g.length;a={Db:void 0,Ia:a.Ia},a.Ia++)a.Db=this.g[a.Ia],c=function(e){return function(){e.Db.Lb();b.g[e.Ia].Fb=!0;b.g.every(function(f){return!0===f.Fb})&&b.i.resolve()}}(a),d=this.h.Ga(c,Sp(this,a.Db)),this.g[a.Ia]=Object.assign({},a.Db,{Lb:c,
jobId:d})}
function Tp(a){var b=Array.from(a.g.keys()).sort(function(d,e){return Sp(a,a.g[e])-Sp(a,a.g[d])});
b=w(b);for(var c=b.next();!c.done;c=b.next())c=a.g[c.value],void 0===c.jobId||c.Fb||(a.h.ba(c.jobId),a.h.Ga(c.Lb,10))}
Rp.prototype.cancel=function(){for(var a=w(this.g),b=a.next();!b.done;b=a.next())b=b.value,void 0===b.jobId||b.Fb||this.h.ba(b.jobId),b.Fb=!0;this.i.resolve()};
function Sp(a,b){var c;return null!=(c=b.priority)?c:a.l}
;function Up(a){this.state=a;this.i=[];this.o=void 0;this.G={};Pp&&Np(this.state)}
Up.prototype.install=function(a){this.i.push(a);return this};
function Vp(a){Pp&&Op(a.state);var b=a.transitions.find(function(d){return Array.isArray(d.from)?d.from.find(function(e){return e===a.state&&"none"===d.Da}):d.from===a.state&&"none"===d.Da});
if(b){a.h&&(Tp(a.h),a.h=void 0);Qp&&console.groupCollapsed&&console.groupEnd&&(console.groupCollapsed("["+a.constructor.name+"] '"+a.state+"' to 'none'"),console.log("with message: ",void 0),console.groupEnd());a.state="none";Pp&&Np(a.state);b=b.action.bind(a);var c=a.i.filter(function(d){return d.none}).map(function(d){return d.none});
b(Wp(a,c),void 0)}else throw Error("no transition specified from "+a.state+" to none");}
function Wp(a,b){var c=b.filter(function(e){return 10===Xp(a,e)}),d=b.filter(function(e){return 10!==Xp(a,e)});
return a.G.ue?function(){var e=Fa.apply(0,arguments);return B(function(f){if(1==f.g)return A(f,a.na.apply(a,[c].concat(x(e))),2);a.u.apply(a,[d].concat(x(e)));f.g=0})}:function(){var e=Fa.apply(0,arguments);
a.xa.apply(a,[c].concat(x(e)));a.u.apply(a,[d].concat(x(e)))}}
Up.prototype.xa=function(a){for(var b=Fa.apply(1,arguments),c=ul(),d=w(a),e=d.next(),f={};!e.done;f={lb:void 0},e=d.next())f.lb=e.value,c.fb(function(g){return function(){Yp(g.lb.name);g.lb.hb.apply(g.lb,x(b));Zp(g.lb.name)}}(f))};
Up.prototype.na=function(a){var b=Fa.apply(1,arguments),c,d,e,f,g;return B(function(h){1==h.g&&(c=ul(),d=w(a),e=d.next(),f={});if(3!=h.g){if(e.done)return h.B(0);f.Ua=e.value;f.sb=void 0;g=function(l){return function(){Yp(l.Ua.name);var k=l.Ua.hb.apply(l.Ua,x(b));"function"===typeof(null==k?void 0:k.then)?l.sb=k.then(function(){Zp(l.Ua.name)}):Zp(l.Ua.name)}}(f);
c.fb(g);return f.sb?A(h,f.sb,3):h.B(3)}f={Ua:void 0,sb:void 0};e=d.next();return h.B(2)})};
Up.prototype.u=function(a){var b=Fa.apply(1,arguments),c=this,d=a.map(function(e){return{Lb:function(){Yp(e.name);e.hb.apply(e,x(b));Zp(e.name)},
priority:Xp(c,e)}});
d.length&&(this.h=new Rp(d))};
function Xp(a,b){var c,d;return null!=(d=null!=(c=a.o)?c:b.priority)?d:0}
function Yp(a){Pp&&a&&Np(a)}
function Zp(a){Pp&&a&&Op(a)}
da.Object.defineProperties(Up.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return this.state}}});function $p(a){Up.call(this,void 0===a?"none":a);this.g=null;this.o=10;this.transitions=[{from:"none",Da:"application_navigating",action:this.K},{from:"application_navigating",Da:"none",action:this.O},{from:"application_navigating",Da:"application_navigating",action:function(){}},
{from:"none",Da:"none",action:function(){}}]}
var aq;y($p,Up);$p.prototype.K=function(a,b){var c=this;this.g=Pk(function(){"application_navigating"===c.l&&Vp(c)},5E3);
a(null==b?void 0:b.event)};
$p.prototype.O=function(a,b){this.g&&(zf.ba(this.g),this.g=null);a(null==b?void 0:b.event)};
function bq(){aq||(aq=new $p);return aq}
;var cq=[{Pb:function(a){return"Cannot read property '"+a.key+"'"},
Cb:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Pb:function(a){return"Cannot call '"+a.key+"'"},
Cb:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Pb:function(a){return a.key+" is not defined"},
Cb:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var eq={Ba:[],ya:[{hb:dq,weight:500}]};function dq(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function fq(){this.ya=[];this.Ba=[]}
var gq;function hq(){if(!gq){var a=gq=new fq;a.Ba.length=0;a.ya.length=0;eq.Ba&&a.Ba.push.apply(a.Ba,eq.Ba);eq.ya&&a.ya.push.apply(a.ya,eq.ya)}return gq}
;var iq=new L;function jq(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=kq(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=kq(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=kq(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function kq(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function lq(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=mq(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=e;var g=a[e],h=b,l=c;f="string"!==typeof g||"clickTrackingParams"!==f&&"trackingParams"!==f?0:(g=jq(atob(g.replace(/-/g,"+").replace(/_/g,"/"))))?mq(f+".ve",g,h,l):0;d+=f;d+=mq(e,a[e],b,c);if(500<d)break}}else c[b]=nq(a),d+=c[b].length;else c[b]=nq(a),d+=c[b].length;return d}
function mq(a,b,c,d){c+="."+a;a=nq(b);d[c]=a;return c.length+a.length}
function nq(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;var oq=[];E("yt.logging.transport.getScrapedGelPayloads",function(){return oq});function pq(){this.store={};this.g={}}
pq.prototype.storePayload=function(a,b){a=qq(a);this.store[a]?this.store[a].push(b):(this.g={},this.store[a]=[b]);return a};
pq.prototype.smartExtractMatchingEntries=function(a){if(!a.keys.length)return[];for(var b=rq(this,a.keys.splice(0,1)[0]),c=[],d=0;d<b.length;d++)this.store[b[d]]&&a.sizeLimit&&(this.store[b[d]].length<=a.sizeLimit?(c.push.apply(c,x(this.store[b[d]])),delete this.store[b[d]]):c.push.apply(c,x(this.store[b[d]].splice(0,a.sizeLimit))));(null==a?0:a.sizeLimit)&&c.length<(null==a?void 0:a.sizeLimit)&&(a.sizeLimit-=c.length,c.push.apply(c,x(this.smartExtractMatchingEntries(a))));return c};
pq.prototype.extractMatchingEntries=function(a){a=rq(this,a);for(var b=[],c=0;c<a.length;c++)this.store[a[c]]&&(b.push.apply(b,x(this.store[a[c]])),delete this.store[a[c]]);return b};
pq.prototype.getSequenceCount=function(a){a=rq(this,a);for(var b=0,c=0;c<a.length;c++){var d=void 0;b+=(null==(d=this.store[a[c]])?void 0:d.length)||0}return b};
function rq(a,b){var c=qq(b);if(a.g[c])return a.g[c];var d=Object.keys(a.store)||[];if(1>=d.length&&qq(b)===d[0])return d;for(var e=[],f=0;f<d.length;f++){var g=d[f].split("/");if(sq(b.auth,g[0])){var h=b.isJspb;sq(void 0===h?"undefined":h?"true":"false",g[1])&&sq(b.cttAuthInfo,g[2])&&(h=b.tier,h=void 0===h?"undefined":JSON.stringify(h),sq(h,g[3])&&e.push(d[f]))}}return a.g[c]=e}
function sq(a,b){return void 0===a||"undefined"===a?!0:a===b}
pq.prototype.getSequenceCount=pq.prototype.getSequenceCount;pq.prototype.extractMatchingEntries=pq.prototype.extractMatchingEntries;pq.prototype.smartExtractMatchingEntries=pq.prototype.smartExtractMatchingEntries;pq.prototype.storePayload=pq.prototype.storePayload;function qq(a){return[void 0===a.auth?"undefined":a.auth,void 0===a.isJspb?"undefined":a.isJspb,void 0===a.cttAuthInfo?"undefined":a.cttAuthInfo,void 0===a.tier?"undefined":a.tier].join("/")}
;var tq=T("initial_gel_batch_timeout",2E3),uq=T("gel_queue_timeout_max_ms",6E4),vq=Math.pow(2,16)-1,wq=T("gel_min_batch_size",5),xq=void 0;function yq(){this.l=this.g=this.h=0;this.i=!1}
var zq=new yq,Aq=new yq,Bq=new yq,Cq=new yq,Dq,Eq=!0,Fq=1,Gq=new Map,Hq=C.ytLoggingTransportTokensToCttTargetIds_||{};E("ytLoggingTransportTokensToCttTargetIds_",Hq);var Iq=C.ytLoggingTransportTokensToJspbCttTargetIds_||{};E("ytLoggingTransportTokensToJspbCttTargetIds_",Iq);var Jq={};function Kq(){var a=D("yt.logging.ims");a||(a=new pq,E("yt.logging.ims",a));return a}
function Lq(a,b){if("log_event"===a.endpoint){Mq(a);var c=Nq(a),d=Oq(a.payload)||"",e=Pq(d),f=200;if(e){if(!1===e.enabled&&!S("web_payload_policy_disabled_killswitch"))return;f=Qq(e.tier);if(400===f){Rq(a,b);return}}Jq[c]=!0;e={cttAuthInfo:c,isJspb:!1,tier:f};Kq().storePayload(e,a.payload);Sq(b,c,!1,e,Tq(d))}}
function Uq(a,b,c){if("log_event"===b.endpoint){Mq(void 0,b);var d=Nq(b,!0),e=Pq(a),f=200;if(e){if(!1===e.enabled&&!S("web_payload_policy_disabled_killswitch"))return;f=Qq(e.tier);if(400===f){Vq(a,b,c);return}}Jq[d]=!0;e={cttAuthInfo:d,isJspb:!0,tier:f};Kq().storePayload(e,b.payload.toJSON());Sq(c,d,!0,e,Tq(a))}}
function Sq(a,b,c,d,e){function f(){Wq({writeThenSend:!0},S("flush_only_full_queue")?b:void 0,c,d.tier)}
c=void 0===c?!1:c;e=void 0===e?!1:e;a&&(xq=new a);a=T("tvhtml5_logging_max_batch_ads_fork")||T("web_logging_max_batch")||100;var g=V(),h=Xq(c,d.tier),l=h.l;e&&(h.i=!0);e=0;d&&(e=Kq().getSequenceCount(d));1E3<=e?f():e>=a?Dq||(Dq=Yq(function(){f();Dq=void 0},0)):10<=g-l&&(Zq(c,d.tier),h.l=g)}
function Rq(a,b){if("log_event"===a.endpoint){Mq(a);var c=Nq(a),d=new Map;d.set(c,[a.payload]);var e=Oq(a.payload)||"";b&&(xq=new b);return new tg(function(f,g){xq&&xq.isReady()?$q(d,xq,f,g,{bypassNetworkless:!0},!0,Tq(e)):f()})}}
function Vq(a,b,c){if("log_event"===b.endpoint){Mq(void 0,b);var d=Nq(b,!0),e=new Map;e.set(d,[b.payload.toJSON()]);c&&(xq=new c);return new tg(function(f){xq&&xq.isReady()?ar(e,xq,f,{bypassNetworkless:!0},!0,Tq(a)):f()})}}
function Nq(a,b){var c="";if(a.dangerousLogToVisitorSession)c="visitorOnlyApprovedKey";else if(a.cttAuthInfo){if(void 0===b?0:b){b=a.cttAuthInfo.token;c=a.cttAuthInfo;var d=new wj;c.videoId?de(d,1,le,Kd(c.videoId)):c.playlistId&&de(d,2,le,Kd(c.playlistId));Iq[b]=d}else b=a.cttAuthInfo,c={},b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId),Hq[a.cttAuthInfo.token]=c;c=a.cttAuthInfo.token}return c}
function Wq(a,b,c,d){a=void 0===a?{}:a;c=void 0===c?!1:c;new tg(function(e,f){var g=Xq(c,d),h=g.i;g.i=!1;br(g.h);br(g.g);g.g=0;xq&&xq.isReady()?void 0===d&&S("enable_web_tiered_gel")?cr(e,f,a,b,c,300,h):cr(e,f,a,b,c,d,h):(Zq(c,d),e())})}
function cr(a,b,c,d,e,f,g){var h=xq;c=void 0===c?{}:c;e=void 0===e?!1:e;f=void 0===f?200:f;g=void 0===g?!1:g;var l=new Map,k=new Map,m={isJspb:e,cttAuthInfo:d,tier:f},n={isJspb:e,cttAuthInfo:d};if(void 0!==d)e?(b=S("enable_web_tiered_gel")?Kq().smartExtractMatchingEntries({keys:[m,n],sizeLimit:1E3}):Kq().extractMatchingEntries(n),l.set(d,b),ar(l,h,a,c,!1,g)):(l=S("enable_web_tiered_gel")?Kq().smartExtractMatchingEntries({keys:[m,n],sizeLimit:1E3}):Kq().extractMatchingEntries(n),k.set(d,l),$q(k,h,
a,b,c,!1,g));else if(e){b=w(Object.keys(Jq));for(k=b.next();!k.done;k=b.next())k=k.value,f=S("enable_web_tiered_gel")?Kq().smartExtractMatchingEntries({keys:[m,n],sizeLimit:1E3}):Kq().extractMatchingEntries({isJspb:!0,cttAuthInfo:k}),0<f.length&&l.set(k,f),(S("web_fp_via_jspb_and_json")&&c.writeThenSend||!S("web_fp_via_jspb_and_json"))&&delete Jq[k];ar(l,h,a,c,!1,g)}else{l=w(Object.keys(Jq));for(m=l.next();!m.done;m=l.next())m=m.value,n=S("enable_web_tiered_gel")?Kq().smartExtractMatchingEntries({keys:[{isJspb:!1,
cttAuthInfo:m,tier:f},{isJspb:!1,cttAuthInfo:m}],sizeLimit:1E3}):Kq().extractMatchingEntries({isJspb:!1,cttAuthInfo:m}),0<n.length&&k.set(m,n),(S("web_fp_via_jspb_and_json")&&c.writeThenSend||!S("web_fp_via_jspb_and_json"))&&delete Jq[m];$q(k,h,a,b,c,!1,g)}}
function Zq(a,b){function c(){Wq({writeThenSend:!0},void 0,a,b)}
a=void 0===a?!1:a;b=void 0===b?200:b;var d=Xq(a,b),e=d===Cq||d===Bq?5E3:uq;S("web_gel_timeout_cap")&&!d.g&&(e=Yq(function(){c()},e),d.g=e);
br(d.h);e=R("LOGGING_BATCH_TIMEOUT",T("web_gel_debounce_ms",1E4));S("shorten_initial_gel_batch_timeout")&&Eq&&(e=tq);e=Yq(function(){0<T("gel_min_batch_size")?Kq().getSequenceCount({cttAuthInfo:void 0,isJspb:a,tier:b})>=wq&&c():c()},e);
d.h=e}
function $q(a,b,c,d,e,f,g){e=void 0===e?{}:e;var h=Math.round(V()),l=a.size,k=dr(g);a=w(a);var m=a.next();for(g={};!m.done;g={Rb:void 0,batchRequest:void 0,dangerousLogToVisitorSession:void 0,Ub:void 0,Tb:void 0},m=a.next()){var n=w(m.value);m=n.next().value;n=n.next().value;g.batchRequest=Kb({context:Un(b.config_||Tn())});if(!Na(n)&&!S("throw_err_when_logevent_malformed_killswitch")){d();break}g.batchRequest.events=n;(n=Hq[m])&&er(g.batchRequest,m,n);delete Hq[m];g.dangerousLogToVisitorSession="visitorOnlyApprovedKey"===
m;fr(g.batchRequest,h,g.dangerousLogToVisitorSession);gr(e);g.Ub=function(q){S("start_client_gcf")&&zf.pa(function(){return B(function(p){return A(p,hr(q),0)})});
l--;l||c()};
g.Rb=0;g.Tb=function(q){return function(){q.Rb++;if(e.bypassNetworkless&&1===q.Rb)try{Eo(b,k,q.batchRequest,ir({writeThenSend:!0},q.dangerousLogToVisitorSession,q.Ub,q.Tb,f)),Eq=!1}catch(p){Ij(p),d()}l--;l||c()}}(g);
try{Eo(b,k,g.batchRequest,ir(e,g.dangerousLogToVisitorSession,g.Ub,g.Tb,f)),Eq=!1}catch(q){Ij(q),d()}}}
function ar(a,b,c,d,e,f){d=void 0===d?{}:d;var g=Math.round(V()),h={value:a.size},l=new Map([].concat(x(a)));l=w(l);for(var k=l.next();!k.done;k=l.next()){var m=w(k.value).next().value,n=a.get(m);k=new xj;var q=b.config_||Tn(),p=new fj,t=new Zi;J(t,1,q.sc);J(t,2,q.qc);ne(t,16,q.fd);J(t,17,q.pc);if(q.Kb){var u=q.Kb,z=new Wi;u.coldConfigData&&J(z,1,u.coldConfigData);u.appInstallData&&J(z,6,u.appInstallData);u.coldHashData&&J(z,3,u.coldHashData);u.hotHashData&&z.g(u.hotHashData);I(t,Wi,62,z)}if((u=C.devicePixelRatio)&&
1!=u){if(null!=u&&"number"!==typeof u)throw Error("Value of float/double field must be a number, found "+typeof u+": "+u);ae(t,65,u)}u=R("EXPERIMENTS_TOKEN","");""!==u&&J(t,54,u);u=Yj();if(0<u.length){z=new bj;for(var G=0;G<u.length;G++){var P=new $i;J(P,1,u[G].key);de(P,2,aj,Kd(u[G].value));je(z,15,$i,P)}I(p,bj,5,z)}Vn(q,t);Wn(p);Xn(t);Yn(q,t);Zn(t);S("start_client_gcf")&&$n(t);R("DELEGATED_SESSION_ID")&&!S("pageid_as_header_web")&&(q=new ej,J(q,3,R("DELEGATED_SESSION_ID")));!S("fill_delegate_context_in_gel_killswitch")&&
(u=R("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&(z=fe(p,ej,3)||new ej,q=p,u=J(z,18,u),I(q,ej,3,u));q=t;u=w(Object.entries(Qj(R("DEVICE",""))));for(z=u.next();!z.done;z=u.next())G=w(z.value),z=G.next().value,G=G.next().value,"cbrand"===z?J(q,12,G):"cmodel"===z?J(q,13,G):"cbr"===z?J(q,87,G):"cbrver"===z?J(q,88,G):"cos"===z?J(q,18,G):"cosver"===z?J(q,19,G):"cplatform"===z&&ne(q,42,Fk(G));I(p,Zi,1,t);I(k,fj,1,p);if(t=Iq[m])a:{if(ke(t,1))p=1;else if(t.getPlaylistId())p=2;else break a;I(k,wj,
4,t);t=fe(k,fj,1)||new fj;q=fe(t,ej,3)||new ej;u=new dj;J(u,2,m);ne(u,1,p);je(q,12,dj,u);I(t,ej,3,q)}delete Iq[m];m="visitorOnlyApprovedKey"===m;jr()||ae(k,2,Jd(g));!m&&(p=R("EVENT_ID"))&&(t=kr(),q=new vj,J(q,1,p),ae(q,2,Jd(t)),I(k,vj,5,q));gr(d);if(S("jspb_serialize_with_worker")&&(p=jo())&&d.writeThenSend){Gq.set(Fq,{client:b,resolve:c,networklessOptions:d,isIsolated:e,useVSSEndpoint:f,dangerousLogToVisitorSession:m,requestsOutstanding:h});p.postMessage({op:"gelBatchToSerialize",batchRequest:k.toJSON(),
clientEvents:n,key:Fq});Fq++;break}if(n){p=[];for(t=0;t<n.length;t++)try{p.push(new tj(n[t]))}catch(U){Ij(new Lk("Transport failed to deserialize "+String(n[t])))}n=p}else n=[];n=w(n);for(p=n.next();!p.done;p=n.next())je(k,3,tj,p.value);n={startTime:V(),ticks:{},infos:{}};k=pe(k);n.ticks.geljspc=V();S("log_jspb_serialize_latency")&&fo("gel_jspb_serialize",n,{sampleRate:.1});lr(k,b,c,d,e,f,m,h)}}
function lr(a,b,c,d,e,f,g,h){d=void 0===d?{}:d;h=void 0===h?{value:0}:h;f=dr(f);d=ir(d,g,function(l){S("start_client_gcf")&&zf.pa(function(){return B(function(k){return A(k,hr(l),0)})});
h.value--;h.value||c()},function(){h.value--;
h.value||c()},e);
d.headers["Content-Type"]="application/json+protobuf";d.postBodyFormat="JSPB";d.postBody=a;Eo(b,f,"",d);Eq=!1}
function gr(a){S("always_send_and_write")&&(a.writeThenSend=!1)}
function ir(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,networklessOptions:a,dangerousLogToVisitorSession:b,ne:!!e,headers:{},postBodyFormat:"",postBody:"",compress:S("compress_gel")||S("compress_gel_lr")};jr()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(V())));return a}
function fr(a,b,c){jr()||(a.requestTimeMs=String(b));S("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=R("EVENT_ID"))&&(c=kr(),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function kr(){var a=R("BATCH_CLIENT_COUNTER")||0;a||(a=Math.floor(Math.random()*vq/2));a++;a>vq&&(a=1);Cj("BATCH_CLIENT_COUNTER",a);return a}
function er(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function Mq(a,b){if(!D("yt.logging.transport.enableScrapingForTest")){var c=Xj("il_payload_scraping");if("enable_il_payload_scraping"===(void 0!==c?String(c):""))oq=[],E("yt.logging.transport.enableScrapingForTest",!0),E("yt.logging.transport.scrapedPayloadsForTesting",oq),E("yt.logging.transport.payloadToScrape","visualElementShown visualElementHidden visualElementAttached screenCreated visualElementGestured visualElementStateChanged".split(" ")),E("yt.logging.transport.getScrapedPayloadFromClientEventsFunction"),
E("yt.logging.transport.scrapeClientEvent",!0);else return}c=D("yt.logging.transport.scrapedPayloadsForTesting");var d=D("yt.logging.transport.payloadToScrape");b&&(b=D("yt.logging.transport.getScrapedPayloadFromClientEventsFunction").bind(b.payload)())&&c.push(b);b=D("yt.logging.transport.scrapeClientEvent");if(d&&1<=d.length)for(var e=0;e<d.length;e++)if(a&&a.payload[d[e]])if(b)c.push(a.payload);else{var f=void 0;c.push((null==(f=a)?void 0:f.payload)[d[e]])}E("yt.logging.transport.scrapedPayloadsForTesting",
c)}
function jr(){return S("use_request_time_ms_header")||S("lr_use_request_time_ms_header")}
function Yq(a,b){return!1===S("embeds_transport_use_scheduler")?hk(a,b):S("logging_avoid_blocking_during_navigation")||S("lr_logging_avoid_blocking_during_navigation")?Pk(function(){if("none"===bq().l)a();else{var c={};bq().install((c.none={hb:a},c))}},b):Pk(a,b)}
function br(a){S("transport_use_scheduler")?zf.ba(a):window.clearTimeout(a)}
function hr(a){var b,c,d,e,f,g,h,l,k,m;return B(function(n){if(1==n.g){d=null==(b=a)?void 0:null==(c=b.responseContext)?void 0:c.globalConfigGroup;var q=d?d[Vi.name]:void 0;e=q;g=null==(f=d)?void 0:f.hotHashData;q=d?d[Ui.name]:void 0;h=q;k=null==(l=d)?void 0:l.coldHashData;return(m=Kp().resolve(new Fp))?g?e?A(n,Qn(m,g,e),2):A(n,Qn(m,g),2):n.B(2):n.return()}return k?h?A(n,Rn(m,k,h),0):A(n,Rn(m,k),0):n.B(0)})}
function Xq(a,b){b=void 0===b?200:b;return a?300===b?Cq:Aq:300===b?Bq:zq}
function Pq(a){if(S("enable_web_tiered_gel")){a=$o[a||""];var b,c;if(null==Kp().resolve(new Fp))var d=void 0;else{var e=null!=(d=D("yt.gcf.config.hotConfigGroup"))?d:R("RAW_HOT_CONFIG_GROUP");d=null==e?void 0:null==(b=e.loggingHotConfig)?void 0:null==(c=b.eventLoggingConfig)?void 0:c.payloadPolicies}if(b=d)for(c=0;c<b.length;c++)if(b[c].payloadNumber===a)return b[c]}}
function Oq(a){a=Object.keys(a);a=w(a);for(var b=a.next();!b.done;b=a.next())if(b=b.value,$o[b])return b}
function Qq(a){switch(a){case "DELAYED_EVENT_TIER_UNSPECIFIED":return 0;case "DELAYED_EVENT_TIER_DEFAULT":return 100;case "DELAYED_EVENT_TIER_DISPATCH_TO_EMPTY":return 200;case "DELAYED_EVENT_TIER_FAST":return 300;case "DELAYED_EVENT_TIER_IMMEDIATE":return 400;default:return 200}}
function Tq(a){return"gelDebuggingEvent"===a}
function dr(a){return(void 0===a?0:a)&&S("vss_through_gel_video_stats")?"video_stats":"log_event"}
;var mr=C.ytLoggingGelSequenceIdObj_||{};E("ytLoggingGelSequenceIdObj_",mr);
function nr(a,b,c,d){d=void 0===d?{}:d;var e={},f=Math.round(d.timestamp||V());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=Dp();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};d.sequenceGroup&&!S("web_gel_sequence_info_killswitch")&&(a=e.context,b=d.sequenceGroup,b={index:or(b),groupKey:b},a.sequence=b,d.endOfSequence&&delete mr[d.sequenceGroup]);(d.sendIsolatedPayload?Rq:Lq)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,dangerousLogToVisitorSession:d.dangerousLogToVisitorSession},
c)}
function pr(a){Wq(void 0,void 0,void 0===a?!1:a)}
function or(a){mr[a]=a in mr?mr[a]+1:0;return mr[a]}
;var qr=[];function rr(a,b,c){c=void 0===c?{}:c;var d=yp;R("ytLoggingEventsDefaultDisabled",!1)&&yp===yp&&(d=null);S("web_all_payloads_via_jspb")?(c.timestamp||(c.lact=Dp(),c.timestamp=V()),qr.push({xc:a,payload:b,options:c})):nr(a,b,d,c)}
;var sr=C.ytLoggingGelSequenceIdObj_||{};E("ytLoggingGelSequenceIdObj_",sr);function tr(a,b){var c=void 0;c=void 0===c?{}:c;var d=!1;R("ytLoggingEventsDefaultDisabled",!1)&&(d=!0);d=d?null:yp;c=void 0===c?{}:c;var e=Math.round(c.timestamp||V());ae(b,1,Jd(e<Number.MAX_SAFE_INTEGER?e:0));e=new sj;if(c.lact)ae(e,1,Jd(isFinite(c.lact)?c.lact:-1));else if(c.timestamp)ae(e,1,Jd(-1));else{var f=Dp();ae(e,1,Jd(isFinite(f)?f:-1))}if(c.sequenceGroup&&!S("web_gel_sequence_info_killswitch")){f=c.sequenceGroup;var g=or(f),h=new rj;ae(h,2,Jd(g));J(h,1,f);I(e,rj,3,h);c.endOfSequence&&delete sr[c.sequenceGroup]}I(b,
sj,33,e);(c.sendIsolatedPayload?Vq:Uq)(a,{endpoint:"log_event",payload:b,cttAuthInfo:c.cttAuthInfo,dangerousLogToVisitorSession:c.dangerousLogToVisitorSession},d)}
;var ur=new Set,vr=0,wr=0,xr=0,yr=[],zr=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function Ar(a){try{ur.add(a.message)}catch(b){}vr++}
function Br(){for(var a=w(zr),b=a.next();!b.done;b=a.next()){var c=Pb();if(c&&0<=c.toLowerCase().indexOf(b.value.toLowerCase()))return!0}return!1}
function Cr(a,b){var c=b.params||{};a={urlParams:{a:"logerror",t:"jserror",type:b.name,msg:b.message.substr(0,250),line:b.lineNumber,level:a,"client.name":c.name},postParams:{url:R("PAGE_NAME",window.location.href),file:b.fileName},method:"POST"};c.version&&(a["client.version"]=c.version);if(a.postParams){b.stack&&(a.postParams.stack=b.stack);b=w(Object.keys(c));for(var d=b.next();!d.done;d=b.next())d=d.value,a.postParams["client."+d]=c[d];if(c=R("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS"))for(b=w(Object.keys(c)),
d=b.next();!d.done;d=b.next())d=d.value,a.postParams[d]=c[d];c=R("SERVER_NAME");b=R("SERVER_VERSION");c&&b&&(a.postParams["server.name"]=c,a.postParams["server.version"]=b)}uk(R("ECATCHER_REPORT_HOST","")+"/error_204",a)}
;function Dr(){var a;return B(function(b){return(a=Sf())?b.return(a.then(function(c){c=pe(c);for(var d=[],e=0,f=0;f<c.length;f++){var g=c.charCodeAt(f);255<g&&(d[e++]=g&255,g>>=8);d[e++]=g}return Rc(d,3)})):b.return(Promise.resolve(null))})}
;var Er={},Fr=[],Kg=new L,Gr={};function Hr(){for(var a=w(Fr),b=a.next();!b.done;b=a.next())b=b.value,b()}
function Ir(a,b){var c;"yt:"===a.tagName.toLowerCase().substr(0,3)?c=a.getAttribute(b):c=a?a.dataset?a.dataset[Wj(b)]:a.getAttribute("data-"+b):null;return c}
function Jr(a){Kg.Za.apply(Kg,arguments)}
;function Kr(a){this.g=a||{};a=[this.g,window.YTConfig||{}];for(var b=0;b<a.length;b++)a[b].host&&(a[b].host=a[b].host.toString().replace("http://","https://"))}
function Lr(a,b){a=[a.g,window.YTConfig||{}];for(var c=0;c<a.length;c++){var d=a[c][b];if(void 0!==d)return d}return null}
function Mr(a,b,c){Nr||(Nr={},Or=new Set,ek(window,"message",function(d){a:if(Or.has(d.origin)){try{var e=JSON.parse(d.data)}catch(g){break a}var f=Nr[e.id];f&&d.origin===f.Pc&&(d=f.Ad,d.G=!0,d.G&&(Bb(d.u,d.sendMessage,d),d.u.length=0),d.cc(e))}}));
a=String(Lr(a,"host"));Nr[c]={Ad:b,Pc:a};Or.add(a)}
var Nr=null,Or=null;var Pr=window;
function Qr(a,b,c){this.o=this.g=this.h=null;this.i=0;this.G=!1;this.u=[];this.l=null;this.O={};if(!a)throw Error("YouTube player element ID required.");this.id=Qa(this);this.K=c;c=document;if(a="string"===typeof a?c.getElementById(a):a)if(c="iframe"===a.tagName.toLowerCase(),b.host||(b.host=c?mc(a.src):"https://www.youtube.com"),this.h=new Kr(b),c||(b=Rr(this,a),this.o=a,(c=a.parentNode)&&c.replaceChild(b,a),a=b),this.g=a,this.g.id||(this.g.id="widget"+Qa(this.g)),Er[this.g.id]=this,window.postMessage){this.l=
new L;Sr(this);b=Lr(this.h,"events");for(var d in b)b.hasOwnProperty(d)&&this.addEventListener(d,b[d]);for(var e in Gr)Gr.hasOwnProperty(e)&&Tr(this,e)}}
r=Qr.prototype;r.setSize=function(a,b){this.g.width=a.toString();this.g.height=b.toString();return this};
r.getIframe=function(){return this.g};
r.cc=function(a){Ur(this,a.event,a)};
r.addEventListener=function(a,b){var c=b;"string"===typeof b&&(c=function(){window[b].apply(window,arguments)});
if(!c)return this;this.l.subscribe(a,c);Vr(this,a);return this};
function Tr(a,b){b=b.split(".");if(2===b.length){var c=b[1];a.K===b[0]&&Vr(a,c)}}
r.destroy=function(){this.g&&this.g.id&&(Er[this.g.id]=null);Oe(this.l);if(this.o){var a=this.o,b=this.g,c=b.parentNode;c&&c.replaceChild(a,b)}else(a=this.g)&&a.parentNode&&a.parentNode.removeChild(a);Nr&&(Nr[this.id]=null);this.h=null;a=this.g;for(var d in Ib)Ib[d][0]==a&&gk(d);this.o=this.g=null};
r.hc=function(){return{}};
function Wr(a,b,c){c=c||[];c=Array.prototype.slice.call(c);b={event:"command",func:b,args:c};a.G?a.sendMessage(b):a.u.push(b)}
function Ur(a,b,c){a.l.za||(c={target:a,data:c},a.l.Za(b,c),Jr(a.K+"."+b,c))}
function Rr(a,b){var c=document.createElement("iframe");b=b.attributes;for(var d=0,e=b.length;d<e;d++){var f=b[d].value;null!=f&&""!==f&&"null"!==f&&c.setAttribute(b[d].name,f)}c.setAttribute("frameBorder","0");c.setAttribute("allowfullscreen","");c.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share");Pr.yt_embedsEnableIframeDefaultReferrerPolicy&&c.setAttribute("referrerPolicy","strict-origin-when-cross-origin");c.setAttribute("title",
"YouTube "+Lr(a.h,"title"));(b=Lr(a.h,"width"))&&c.setAttribute("width",b.toString());(b=Lr(a.h,"height"))&&c.setAttribute("height",b.toString());var g=a.hc();g.enablejsapi=window.postMessage?1:0;window.location.host&&(g.origin=window.location.protocol+"//"+window.location.host);g.widgetid=a.id;window.location.href&&Bb(["debugjs","debugcss"],function(l){var k=qc(window.location.href,l);null!==k&&(g[l]=k)});
var h=""+Lr(a.h,"host")+("/embed/"+Lr(a.h,"videoId"))+"?"+oc(g);Pr.yt_embedsEnableUaChProbe?Dr().then(function(l){var k=new URL(h),m=Number(k.searchParams.get("reloads"));isNaN(m)&&(m=0);k.searchParams.set("reloads",(m+1).toString());l&&k.searchParams.set("uach",l);k.searchParams.set("uats",Math.floor(window.performance.timeOrigin).toString());l=xb(k.href).toString();cc(c,yb(l));c.sandbox.add("allow-presentation","allow-top-navigation");return l}):Pr.yt_embedsEnableIframeSrcWithIntent?(cc(c,yb(h)),
c.sandbox.add("allow-presentation","allow-top-navigation")):c.src=h;
return c}
r.yc=function(){this.g&&this.g.contentWindow?this.sendMessage({event:"listening"}):window.clearInterval(this.i)};
function Sr(a){Mr(a.h,a,a.id);a.i=ik(a.yc.bind(a));ek(a.g,"load",function(){window.clearInterval(a.i);a.i=ik(a.yc.bind(a))})}
function Vr(a,b){a.O[b]||(a.O[b]=!0,Wr(a,"addEventListener",[b]))}
r.sendMessage=function(a){a.id=this.id;a.channel="widget";var b=JSON.stringify(a),c=[mc(this.g.src||"").replace("http:","https:")];if(this.g.contentWindow)for(var d=0;d<c.length;d++)try{this.g.contentWindow.postMessage(b,c[d])}catch(vc){if(vc.name&&"SyntaxError"===vc.name){if(!(vc.message&&0<vc.message.indexOf("target origin ''"))){var e=void 0,f=vc;e=void 0===e?{}:e;e.name=R("INNERTUBE_CONTEXT_CLIENT_NAME",1);e.version=R("INNERTUBE_CONTEXT_CLIENT_VERSION");var g="WARNING",h=!1;g=void 0===g?"ERROR":
g;h=void 0===h?!1:h;if(f){f.hasOwnProperty("level")&&f.level&&(g=f.level);if(S("console_log_js_exceptions")){var l=f,k=[];k.push("Name: "+l.name);k.push("Message: "+l.message);l.hasOwnProperty("params")&&k.push("Error Params: "+JSON.stringify(l.params));l.hasOwnProperty("args")&&k.push("Error args: "+JSON.stringify(l.args));k.push("File name: "+l.fileName);k.push("Stacktrace: "+l.stack);window.console.log(k.join("\n"),l)}if(!(5<=vr)){var m=void 0,n=void 0,q=f,p=e,t=ec(q),u=t.message||"Unknown Error",
z=t.name||"UnknownError",G=t.stack||q.h||"Not available";if(G.startsWith(z+": "+u)){var P=G.split("\n");P.shift();G=P.join("\n")}var U=t.lineNumber||"Not available",X=t.fileName||"Not available",Ka=G,Ca=0;if(q.hasOwnProperty("args")&&q.args&&q.args.length)for(var La=0;La<q.args.length&&!(Ca=lq(q.args[La],"params."+La,p,Ca),500<=Ca);La++);else if(q.hasOwnProperty("params")&&q.params){var ia=q.params;if("object"===typeof q.params)for(n in ia){if(ia[n]){var qa="params."+n,ra=nq(ia[n]);p[qa]=ra;Ca+=qa.length+
ra.length;if(500<Ca)break}}else p.params=nq(ia)}if(yr.length)for(var ha=0;ha<yr.length&&!(Ca=lq(yr[ha],"params.context."+ha,p,Ca),500<=Ca);ha++);navigator.vendor&&!p.hasOwnProperty("vendor")&&(p["device.vendor"]=navigator.vendor);var W={message:u,name:z,lineNumber:U,fileName:X,stack:Ka,params:p,sampleWeight:1},Wm=Number(q.columnNumber);isNaN(Wm)||(W.lineNumber=W.lineNumber+":"+Wm);if("IGNORED"===q.level)m=0;else a:{for(var Xm=hq(),Ym=w(Xm.Ba),Rh=Ym.next();!Rh.done;Rh=Ym.next()){var Zm=Rh.value;if(W.message&&
W.message.match(Zm.qe)){m=Zm.weight;break a}}for(var $m=w(Xm.ya),Sh=$m.next();!Sh.done;Sh=$m.next()){var an=Sh.value;if(an.hb(W)){m=an.weight;break a}}m=1}W.sampleWeight=m;for(var bn=w(cq),Th=bn.next();!Th.done;Th=bn.next()){var Uh=Th.value;if(Uh.Cb[W.name])for(var cn=w(Uh.Cb[W.name]),Vh=cn.next();!Vh.done;Vh=cn.next()){var dn=Vh.value,Qe=W.message.match(dn.regexp);if(Qe){W.params["params.error.original"]=Qe[0];for(var Wh=dn.groups,en={},wc=0;wc<Wh.length;wc++)en[Wh[wc]]=Qe[wc+1],W.params["params.error."+
Wh[wc]]=Qe[wc+1];W.message=Uh.Pb(en);break}}}W.params||(W.params={});var fn=hq();W.params["params.errorServiceSignature"]="msg="+fn.Ba.length+"&cb="+fn.ya.length;W.params["params.serviceWorker"]="false";C.document&&C.document.querySelectorAll&&(W.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));pb("sample").constructor!==nb&&(W.params["params.fconst"]="true");var qd=W;window.yterr&&"function"===typeof window.yterr&&window.yterr(qd);if(0!==qd.sampleWeight&&
!ur.has(qd.message))if(h&&S("web_enable_error_204")){var gn=qd;Cr(void 0===g?"ERROR":g,gn);Ar(gn)}else{var Xh=void 0,Yh=void 0,hn=void 0,jn=void 0,Zh=void 0,O=qd,Rb=g;Rb=void 0===Rb?"ERROR":Rb;if("ERROR"===Rb){iq.Za("handleError",O);if(S("record_app_crashed_web")&&0===xr&&1===O.sampleWeight)if(xr++,S("errors_via_jspb")){var bs=new qj;Zh=ne(bs,1,1);if(!S("report_client_error_with_app_crash_ks")){var cs=new pj,ds=new oj,es=new nj,fs=new mj;var gs=J(fs,1,O.message);var hs=I(es,mj,3,gs);jn=I(ds,nj,5,
hs);hn=I(cs,oj,9,jn);I(Zh,pj,4,hn)}var kn=S("jspb_sparse_encoded_pivot")?new tj([{}]):new tj;ge(kn,qj,20,uj,Zh);tr("appCrashed",kn)}else{var ln={appCrashType:"APP_CRASH_TYPE_BREAKPAD"};S("report_client_error_with_app_crash_ks")||(ln.systemHealth={crashData:{clientError:{logMessage:{message:O.message}}}});rr("appCrashed",ln)}wr++}else"WARNING"===Rb&&iq.Za("handleWarning",O);if(S("kevlar_gel_error_routing"))a:{var rd=Rb;if(S("errors_via_jspb")){if(Br())Yh=void 0;else{var xc=new jj;J(xc,1,O.stack);O.fileName&&
J(xc,4,O.fileName);var ib=O.lineNumber&&O.lineNumber.split?O.lineNumber.split(":"):[];0!==ib.length&&(1!==ib.length||isNaN(Number(ib[0]))?2!==ib.length||isNaN(Number(ib[0]))||isNaN(Number(ib[1]))||(me(xc,2,Number(ib[0])),me(xc,3,Number(ib[1]))):me(xc,2,Number(ib[0])));var Sb=new mj;J(Sb,1,O.message);J(Sb,3,O.name);me(Sb,6,O.sampleWeight);"ERROR"===rd?ne(Sb,2,2):"WARNING"===rd?ne(Sb,2,1):ne(Sb,2,0);var $h=new kj;ae($h,1,Ed(!0));ge($h,jj,3,lj,xc);var Tb=new ij;J(Tb,3,window.location.href);for(var mn=
R("FEXP_EXPERIMENTS",[]),ai=0;ai<mn.length;ai++){var bi=void 0,ci=Tb.s,di=mn[ai],sd=jd(ci);Ad(sd);var nn=sd&2,Ga=Zd(ci,sd,5);Array.isArray(Ga)||(Ga=yd);var on=!!(sd&32),jb=id(Ga);0===jb&&on&&!nn?(jb|=33,kd(Ga,jb)):jb&1||(jb|=1,kd(Ga,jb));if(nn)jb&2||fd(Ga,34),Object.freeze(Ga);else if(2&jb||2048&jb){Ga=bd(Ga);var pn=1;on&&(pn|=32);kd(Ga,pn);be(ci,sd,5,Ga)}bi=Ga;var qn=id(bi);di=Hd(di,!!(4&qn)&&!!(4096&qn));bi.push(di)}var ei=Dj();if(!Ej()&&ei)for(var rn=w(Object.keys(ei)),fi=rn.next();!fi.done;fi=
rn.next()){var sn=fi.value,gi=new hj;J(gi,1,sn);J(gi,2,String(ei[sn]));je(Tb,4,hj,gi)}var hi=O.params;if(hi)for(var tn=w(Object.keys(hi)),ii=tn.next();!ii.done;ii=tn.next()){var un=ii.value,ji=new hj;J(ji,1,"client."+un);J(ji,2,String(hi[un]));je(Tb,4,hj,ji)}var vn=R("SERVER_NAME"),wn=R("SERVER_VERSION");if(vn&&wn){var ki=new hj;J(ki,1,"server.name");J(ki,2,vn);je(Tb,4,hj,ki);var li=new hj;J(li,1,"server.version");J(li,2,wn);je(Tb,4,hj,li)}var Re=new nj;I(Re,ij,1,Tb);I(Re,kj,2,$h);I(Re,mj,3,Sb);Yh=
Re}var xn=Yh;if(!xn)break a;var yn=S("jspb_sparse_encoded_pivot")?new tj([{}]):new tj;ge(yn,nj,163,uj,xn);tr("clientError",yn)}else{var Oa=void 0;Oa=void 0===Oa?{}:Oa;if(Br())Xh=void 0;else{var td={stackTrace:O.stack};O.fileName&&(td.filename=O.fileName);var kb=O.lineNumber&&O.lineNumber.split?O.lineNumber.split(":"):[];0!==kb.length&&(1!==kb.length||isNaN(Number(kb[0]))?2!==kb.length||isNaN(Number(kb[0]))||isNaN(Number(kb[1]))||(td.lineNumber=Number(kb[0]),td.columnNumber=Number(kb[1])):td.lineNumber=
Number(kb[0]));var mi={level:"ERROR_LEVEL_UNKNOWN",message:O.message,errorClassName:O.name,sampleWeight:O.sampleWeight};"ERROR"===rd?mi.level="ERROR_LEVEL_ERROR":"WARNING"===rd&&(mi.level="ERROR_LEVEL_WARNNING");var is={isObfuscated:!0,browserStackInfo:td};Oa.pageUrl=window.location.href;Oa.kvPairs=[];R("FEXP_EXPERIMENTS")&&(Oa.experimentIds=R("FEXP_EXPERIMENTS"));var ni=Dj();if(!Ej()&&ni)for(var zn=w(Object.keys(ni)),oi=zn.next();!oi.done;oi=zn.next()){var An=oi.value;Oa.kvPairs.push({key:An,value:String(ni[An])})}var pi=
O.params;if(pi)for(var Bn=w(Object.keys(pi)),qi=Bn.next();!qi.done;qi=Bn.next()){var Cn=qi.value;Oa.kvPairs.push({key:"client."+Cn,value:String(pi[Cn])})}var Dn=R("SERVER_NAME"),En=R("SERVER_VERSION");Dn&&En&&(Oa.kvPairs.push({key:"server.name",value:Dn}),Oa.kvPairs.push({key:"server.version",value:En}));Xh={errorMetadata:Oa,stackTrace:is,logMessage:mi}}var Fn=Xh;if(!Fn)break a;rr("clientError",Fn)}if("ERROR"===rd||S("errors_flush_gel_always_killswitch"))b:{if(S("web_fp_via_jspb")){var Se=!0;Se=void 0===
Se?!1:Se;var Gn=qr;qr=[];if(Gn)for(var Hn=w(Gn),ri=Hn.next();!ri.done;ri=Hn.next()){var yc=ri.value;Se?nr(yc.xc,yc.payload,yp,yc.options):rr(yc.xc,yc.payload,yc.options)}pr(!0);if(!S("web_fp_via_jspb_and_json"))break b}pr()}}S("suppress_error_204_logging")||Cr(Rb,O);Ar(O)}}}}}else throw vc;}else console&&console.warn&&console.warn("The YouTube player is not attached to the DOM. API calls should be made after the onReady event. See more: https://developers.google.com/youtube/iframe_api_reference#Events")};function Xr(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function Yr(a){return 0===a.search("get")||0===a.search("is")}
;function Zr(a,b){Qr.call(this,a,Object.assign({title:"video player",videoId:"",width:640,height:360},b||{}),"player");this.ja={};this.playerInfo={};this.videoTitle=""}
y(Zr,Qr);r=Zr.prototype;r.hc=function(){var a=Lr(this.h,"playerVars");if(a){var b={},c;for(c in a)b[c]=a[c];a=b}else a={};window!==window.top&&document.referrer&&(a.widget_referrer=document.referrer.substring(0,256));if(c=Lr(this.h,"embedConfig")){if(Pa(c))try{c=JSON.stringify(c)}catch(d){console.error("Invalid embed config JSON",d)}a.embed_config=c}return a};
r.cc=function(a){var b=a.event;a=a.info;switch(b){case "apiInfoDelivery":if(Pa(a))for(var c in a)a.hasOwnProperty(c)&&(this.ja[c]=a[c]);break;case "infoDelivery":$r(this,a);break;case "initialDelivery":Pa(a)&&(window.clearInterval(this.i),this.playerInfo={},this.ja={},as(this,a.apiInterface),$r(this,a));break;default:Ur(this,b,a)}};
function $r(a,b){if(Pa(b)){for(var c in b)b.hasOwnProperty(c)&&(a.playerInfo[c]=b[c]);a.playerInfo.hasOwnProperty("videoData")&&(b=a.playerInfo.videoData,b.hasOwnProperty("title")&&b.title?(b=b.title,b!==a.videoTitle&&(a.videoTitle=b,a.g.setAttribute("title",b))):(a.videoTitle="",a.g.setAttribute("title","YouTube "+Lr(a.h,"title"))))}}
function as(a,b){Bb(b,function(c){this[c]||("getCurrentTime"===c?this[c]=function(){var d=this.playerInfo.currentTime;if(1===this.playerInfo.playerState){var e=(Date.now()/1E3-this.playerInfo.currentTimeLastUpdated_)*this.playerInfo.playbackRate;0<e&&(d+=Math.min(e,1))}return d}:Xr(c)?this[c]=function(){this.playerInfo={};
this.ja={};Wr(this,c,arguments);return this}:Yr(c)?this[c]=function(){var d=0;
0===c.search("get")?d=3:0===c.search("is")&&(d=2);return this.playerInfo[c.charAt(d).toLowerCase()+c.substr(d+1)]}:this[c]=function(){Wr(this,c,arguments);
return this})},a)}
r.getVideoEmbedCode=function(){var a=Lr(this.h,"host")+("/embed/"+Lr(this.h,"videoId")),b=Number(Lr(this.h,"width")),c=Number(Lr(this.h,"height"));if(isNaN(b)||isNaN(c))throw Error("Invalid width or height property");b=Math.floor(b);c=Math.floor(c);var d=this.videoTitle;a=ic(a);d=ic(null!=d?d:"YouTube video player");return'<iframe width="'+b+'" height="'+c+'" src="'+a+'" title="'+(d+'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>')};
r.getOptions=function(a){return this.ja.namespaces?a?this.ja[a]?this.ja[a].options||[]:[]:this.ja.namespaces||[]:[]};
r.getOption=function(a,b){if(this.ja.namespaces&&a&&b&&this.ja[a])return this.ja[a][b]};
function js(a){if("iframe"!==a.tagName.toLowerCase()){var b=Ir(a,"videoid");b&&(b={videoId:b,width:Ir(a,"width"),height:Ir(a,"height")},new Zr(a,b))}}
;E("YT.PlayerState.UNSTARTED",-1);E("YT.PlayerState.ENDED",0);E("YT.PlayerState.PLAYING",1);E("YT.PlayerState.PAUSED",2);E("YT.PlayerState.BUFFERING",3);E("YT.PlayerState.CUED",5);E("YT.get",function(a){return Er[a]});
E("YT.scan",Hr);E("YT.subscribe",function(a,b,c){Kg.subscribe(a,b,c);Gr[a]=!0;for(var d in Er)Er.hasOwnProperty(d)&&Tr(Er[d],a)});
E("YT.unsubscribe",function(a,b,c){Jg(a,b,c)});
E("YT.Player",Zr);Qr.prototype.destroy=Qr.prototype.destroy;Qr.prototype.setSize=Qr.prototype.setSize;Qr.prototype.getIframe=Qr.prototype.getIframe;Qr.prototype.addEventListener=Qr.prototype.addEventListener;Zr.prototype.getVideoEmbedCode=Zr.prototype.getVideoEmbedCode;Zr.prototype.getOptions=Zr.prototype.getOptions;Zr.prototype.getOption=Zr.prototype.getOption;
Fr.push(function(a){var b=a;b||(b=document);a=Eb(b.getElementsByTagName("yt:player"));var c=b||document;if(c.querySelectorAll&&c.querySelector)b=c.querySelectorAll(".yt-player");else{var d;c=document;b=b||c;if(b.querySelectorAll&&b.querySelector)b=b.querySelectorAll(".yt-player");else if(b.getElementsByClassName){var e=b.getElementsByClassName("yt-player");b=e}else{e=b.getElementsByTagName("*");var f={};for(c=d=0;b=e[c];c++){var g=b.className,h;if(h="function"==typeof g.split)h=0<=Ab(g.split(/\s+/),
"yt-player");h&&(f[d++]=b)}f.length=d;b=f}}b=Eb(b);Bb(Db(a,b),js)});
"undefined"!=typeof YTConfig&&YTConfig.parsetags&&"onload"!=YTConfig.parsetags||Hr();var ks=C.onYTReady;ks&&ks();var ls=C.onYouTubeIframeAPIReady;ls&&ls();var ms=C.onYouTubePlayerAPIReady;ms&&ms();}).call(this);
