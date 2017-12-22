!function(t){function e(r){if(n[r])return n[r].exports;var s=n[r]={i:r,l:!1,exports:{}};return t[r].call(s.exports,s,s.exports,e),s.l=!0,s.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e,n){t.exports=n(1)},function(t,e,n){(function(e){const r="undefined"!=typeof window?window:e,s=n(3),o=r.XP||n(4);t.exports=new o.Class("XPEmitter",{extends:s}),"undefined"!=typeof window&&(window.XPEmitter=t.exports)}).call(e,n(2))},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";function r(){}function s(t,e,n){this.fn=t,this.context=e,this.once=n||!1}function o(){this._events=new r,this._eventsCount=0}var i=Object.prototype.hasOwnProperty,c="~";
//
//
Object.create&&(r.prototype=Object.create(null),
//
//
(new r).__proto__||(c=!1)),o.prototype.eventNames=function(){var t,e,n=[];if(0===this._eventsCount)return n;for(e in t=this._events)i.call(t,e)&&n.push(c?e.slice(1):e);return Object.getOwnPropertySymbols?n.concat(Object.getOwnPropertySymbols(t)):n},o.prototype.listeners=function(t,e){var n=c?c+t:t,r=this._events[n];if(e)return!!r;if(!r)return[];if(r.fn)return[r.fn];for(var s=0,o=r.length,i=new Array(o);s<o;s++)i[s]=r[s].fn;return i},o.prototype.emit=function(t,e,n,r,s,o){var i=c?c+t:t;if(!this._events[i])return!1;var f,u,h=this._events[i],a=arguments.length;if(h.fn){switch(h.once&&this.removeListener(t,h.fn,void 0,!0),a){case 1:return h.fn.call(h.context),!0;case 2:return h.fn.call(h.context,e),!0;case 3:return h.fn.call(h.context,e,n),!0;case 4:return h.fn.call(h.context,e,n,r),!0;case 5:return h.fn.call(h.context,e,n,r,s),!0;case 6:return h.fn.call(h.context,e,n,r,s,o),!0}for(u=1,f=new Array(a-1);u<a;u++)f[u-1]=arguments[u];h.fn.apply(h.context,f)}else{var v,p=h.length;for(u=0;u<p;u++)switch(h[u].once&&this.removeListener(t,h[u].fn,void 0,!0),a){case 1:h[u].fn.call(h[u].context);break;case 2:h[u].fn.call(h[u].context,e);break;case 3:h[u].fn.call(h[u].context,e,n);break;case 4:h[u].fn.call(h[u].context,e,n,r);break;default:if(!f)for(v=1,f=new Array(a-1);v<a;v++)f[v-1]=arguments[v];h[u].fn.apply(h[u].context,f)}}return!0},o.prototype.on=function(t,e,n){var r=new s(e,n||this),o=c?c+t:t;return this._events[o]?this._events[o].fn?this._events[o]=[this._events[o],r]:this._events[o].push(r):(this._events[o]=r,this._eventsCount++),this},o.prototype.once=function(t,e,n){var r=new s(e,n||this,!0),o=c?c+t:t;return this._events[o]?this._events[o].fn?this._events[o]=[this._events[o],r]:this._events[o].push(r):(this._events[o]=r,this._eventsCount++),this},o.prototype.removeListener=function(t,e,n,s){var o=c?c+t:t;if(!this._events[o])return this;if(!e)return 0==--this._eventsCount?this._events=new r:delete this._events[o],this;var i=this._events[o];if(i.fn)i.fn!==e||s&&!i.once||n&&i.context!==n||(0==--this._eventsCount?this._events=new r:delete this._events[o]);else{for(var f=0,u=[],h=i.length;f<h;f++)(i[f].fn!==e||s&&!i[f].once||n&&i[f].context!==n)&&u.push(i[f]);
//
//
u.length?this._events[o]=1===u.length?u[0]:u:0==--this._eventsCount?this._events=new r:delete this._events[o]}return this},o.prototype.removeAllListeners=function(t){var e;return t?(e=c?c+t:t,this._events[e]&&(0==--this._eventsCount?this._events=new r:delete this._events[e])):(this._events=new r,this._eventsCount=0),this},
//
//
o.prototype.off=o.prototype.removeListener,o.prototype.addListener=o.prototype.on,
//
//
o.prototype.setMaxListeners=function(){return this},
//
//
o.prefixed=c,
//
//
o.EventEmitter=o,t.exports=o},function(t,e){t.exports=XP}]);