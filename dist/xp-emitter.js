!function(t){var e={};function n(r){if(e[r])return e[r].exports;var s=e[r]={i:r,l:!1,exports:{}};return t[r].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){t.exports=n(1)},function(t,e,n){(function(e){const r="undefined"!=typeof window?window:e,s=n(3),o=r.XP||n(4);t.exports=new o.Class("XPEmitter",{extends:s}),"undefined"!=typeof window&&(window.XPEmitter=t.exports)}).call(e,n(2))},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";var r=Object.prototype.hasOwnProperty,s="~";function o(){}
//
//
function i(t,e,n){this.fn=t,this.context=e,this.once=n||!1}function c(){this._events=new o,this._eventsCount=0}Object.create&&(o.prototype=Object.create(null),
//
//
(new o).__proto__||(s=!1)),c.prototype.eventNames=function(){var t,e,n=[];if(0===this._eventsCount)return n;for(e in t=this._events)r.call(t,e)&&n.push(s?e.slice(1):e);return Object.getOwnPropertySymbols?n.concat(Object.getOwnPropertySymbols(t)):n},c.prototype.listeners=function(t,e){var n=s?s+t:t,r=this._events[n];if(e)return!!r;if(!r)return[];if(r.fn)return[r.fn];for(var o=0,i=r.length,c=new Array(i);o<i;o++)c[o]=r[o].fn;return c},c.prototype.emit=function(t,e,n,r,o,i){var c=s?s+t:t;if(!this._events[c])return!1;var f,u,h=this._events[c],a=arguments.length;if(h.fn){switch(h.once&&this.removeListener(t,h.fn,void 0,!0),a){case 1:return h.fn.call(h.context),!0;case 2:return h.fn.call(h.context,e),!0;case 3:return h.fn.call(h.context,e,n),!0;case 4:return h.fn.call(h.context,e,n,r),!0;case 5:return h.fn.call(h.context,e,n,r,o),!0;case 6:return h.fn.call(h.context,e,n,r,o,i),!0}for(u=1,f=new Array(a-1);u<a;u++)f[u-1]=arguments[u];h.fn.apply(h.context,f)}else{var v,p=h.length;for(u=0;u<p;u++)switch(h[u].once&&this.removeListener(t,h[u].fn,void 0,!0),a){case 1:h[u].fn.call(h[u].context);break;case 2:h[u].fn.call(h[u].context,e);break;case 3:h[u].fn.call(h[u].context,e,n);break;case 4:h[u].fn.call(h[u].context,e,n,r);break;default:if(!f)for(v=1,f=new Array(a-1);v<a;v++)f[v-1]=arguments[v];h[u].fn.apply(h[u].context,f)}}return!0},c.prototype.on=function(t,e,n){var r=new i(e,n||this),o=s?s+t:t;return this._events[o]?this._events[o].fn?this._events[o]=[this._events[o],r]:this._events[o].push(r):(this._events[o]=r,this._eventsCount++),this},c.prototype.once=function(t,e,n){var r=new i(e,n||this,!0),o=s?s+t:t;return this._events[o]?this._events[o].fn?this._events[o]=[this._events[o],r]:this._events[o].push(r):(this._events[o]=r,this._eventsCount++),this},c.prototype.removeListener=function(t,e,n,r){var i=s?s+t:t;if(!this._events[i])return this;if(!e)return 0==--this._eventsCount?this._events=new o:delete this._events[i],this;var c=this._events[i];if(c.fn)c.fn!==e||r&&!c.once||n&&c.context!==n||(0==--this._eventsCount?this._events=new o:delete this._events[i]);else{for(var f=0,u=[],h=c.length;f<h;f++)(c[f].fn!==e||r&&!c[f].once||n&&c[f].context!==n)&&u.push(c[f]);
//
//
u.length?this._events[i]=1===u.length?u[0]:u:0==--this._eventsCount?this._events=new o:delete this._events[i]}return this},c.prototype.removeAllListeners=function(t){var e;return t?(e=s?s+t:t,this._events[e]&&(0==--this._eventsCount?this._events=new o:delete this._events[e])):(this._events=new o,this._eventsCount=0),this},
//
//
c.prototype.off=c.prototype.removeListener,c.prototype.addListener=c.prototype.on,
//
//
c.prototype.setMaxListeners=function(){return this},
//
//
c.prefixed=s,
//
//
c.EventEmitter=c,t.exports=c},function(t,e){t.exports=XP}]);