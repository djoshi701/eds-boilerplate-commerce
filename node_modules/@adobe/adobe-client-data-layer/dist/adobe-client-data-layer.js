(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(acdlreq,module,exports){
(function (global){
/**
 * @license
 * Lodash (Custom Build) lodash.com/license | Underscore.js 1.8.3 underscorejs.org/LICENSE
 * Build: `lodash exports="node" include="cloneDeep,cloneDeepWith,find,get,has,includes,isEmpty,isEqual,isNull,isPlainObject,isObject,merge,mergeWith,omit,reject" -p -o custom-lodash.js`
 */
;(function(){function t(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}function e(t,e){for(var n=-1,r=null==t?0:t.length;++n<r&&false!==e(t[n],n,t););}function n(t,e){for(var n=-1,r=null==t?0:t.length,o=0,u=[];++n<r;){var c=t[n];e(c,n,t)&&(u[o++]=c)}return u}function r(t,e){for(var n=-1,r=null==t?0:t.length,o=Array(r);++n<r;)o[n]=e(t[n],n,t);return o}function o(t,e){for(var n=-1,r=e.length,o=t.length;++n<r;)t[o+n]=e[n];
return t}function u(t,e){for(var n=-1,r=null==t?0:t.length;++n<r;)if(e(t[n],n,t))return true;return false}function c(t,e,n){var r=t.length;for(n+=-1;++n<r;)if(e(t[n],n,t))return n;return-1}function i(t){return t!==t}function a(t){return function(e){return null==e?re:e[t]}}function f(t){return function(e){return t(e)}}function l(t,e){return r(e,function(e){return t[e]})}function s(t){var e=-1,n=Array(t.size);return t.forEach(function(t,r){n[++e]=[r,t]}),n}function b(t){var e=Object;return function(n){return t(e(n));
}}function h(t){var e=-1,n=Array(t.size);return t.forEach(function(t){n[++e]=t}),n}function p(){}function y(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function j(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function _(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function g(t){var e=-1,n=null==t?0:t.length;for(this.__data__=new _;++e<n;)this.add(t[e])}function v(t){
this.size=(this.__data__=new j(t)).size}function d(t,e){var n=xn(t),r=!n&&zn(t),o=!n&&!r&&En(t),u=!n&&!r&&!o&&Mn(t);if(n=n||r||o||u){for(var r=t.length,c=String,i=-1,a=Array(r);++i<r;)a[i]=c(i);r=a}else r=[];var f,c=r.length;for(f in t)!e&&!Ue.call(t,f)||n&&("length"==f||o&&("offset"==f||"parent"==f)||u&&("buffer"==f||"byteLength"==f||"byteOffset"==f)||vt(f,c))||r.push(f);return r}function A(t,e,n){(n===re||Ft(t[e],n))&&(n!==re||e in t)||k(t,e,n)}function w(t,e,n){var r=t[e];Ue.call(t,e)&&Ft(r,n)&&(n!==re||e in t)||k(t,e,n);
}function m(t,e){for(var n=t.length;n--;)if(Ft(t[n][0],e))return n;return-1}function O(t,e){return t&&et(e,Jt(e),t)}function S(t,e){return t&&et(e,Kt(e),t)}function k(t,e,n){"__proto__"==e&&Qe?Qe(t,e,{configurable:true,enumerable:true,value:n,writable:true}):t[e]=n}function z(t,n,r,o,u,c){var i,a=1&n,f=2&n,l=4&n;if(r&&(i=u?r(t,o,u,c):r(t)),i!==re)return i;if(!Bt(t))return t;if(o=xn(t)){if(i=yt(t),!a)return tt(t,i)}else{var s=mn(t),b="[object Function]"==s||"[object GeneratorFunction]"==s;if(En(t))return X(t,a);
if("[object Object]"==s||"[object Arguments]"==s||b&&!u){if(i=f||b?{}:jt(t),!a)return f?rt(t,S(i,t)):nt(t,O(i,t))}else{if(!ge[s])return u?t:{};i=_t(t,s,a)}}if(c||(c=new v),u=c.get(t))return u;if(c.set(t,i),Fn(t))return t.forEach(function(e){i.add(z(e,n,r,e,t,c))}),i;if(In(t))return t.forEach(function(e,o){i.set(o,z(e,n,r,o,t,c))}),i;var f=l?f?ft:at:f?Kt:Jt,h=o?re:f(t);return e(h||t,function(e,o){h&&(o=e,e=t[o]),w(i,o,z(e,n,r,o,t,c))}),i}function x(t,e){var n=[];return gn(t,function(t,r,o){e(t,r,o)&&n.push(t);
}),n}function E(t,e,n,r,u){var c=-1,i=t.length;for(n||(n=gt),u||(u=[]);++c<i;){var a=t[c];0<e&&n(a)?1<e?E(a,e-1,n,r,u):o(u,a):r||(u[u.length]=a)}return u}function I(t,e){e=Q(e,t);for(var n=0,r=e.length;null!=t&&n<r;)t=t[Ot(e[n++])];return n&&n==r?t:re}function F(t,e,n){return e=e(t),xn(t)?e:o(e,n(t))}function M(t){if(null==t)t=t===re?"[object Undefined]":"[object Null]";else if(Ke&&Ke in Object(t)){var e=Ue.call(t,Ke),n=t[Ke];try{t[Ke]=re;var r=true}catch(t){}var o=Pe.call(t);r&&(e?t[Ke]=n:delete t[Ke]),
t=o}else t=Pe.call(t);return t}function $(t,e){return null!=t&&Ue.call(t,e)}function D(t,e){return null!=t&&e in Object(t)}function U(t){return Pt(t)&&"[object Arguments]"==M(t)}function B(t,e,n,r,o){if(t===e)e=true;else if(null==t||null==e||!Pt(t)&&!Pt(e))e=t!==t&&e!==e;else t:{var u=xn(t),c=xn(e),i=u?"[object Array]":mn(t),a=c?"[object Array]":mn(e),i="[object Arguments]"==i?"[object Object]":i,a="[object Arguments]"==a?"[object Object]":a,f="[object Object]"==i,c="[object Object]"==a;if((a=i==a)&&En(t)){
if(!En(e)){e=false;break t}u=true,f=false}if(a&&!f)o||(o=new v),e=u||Mn(t)?ct(t,e,n,r,B,o):it(t,e,i,n,r,B,o);else{if(!(1&n)&&(u=f&&Ue.call(t,"__wrapped__"),i=c&&Ue.call(e,"__wrapped__"),u||i)){t=u?t.value():t,e=i?e.value():e,o||(o=new v),e=B(t,e,n,r,o);break t}if(a)e:if(o||(o=new v),u=1&n,i=at(t),c=i.length,a=at(e).length,c==a||u){for(f=c;f--;){var l=i[f];if(!(u?l in e:Ue.call(e,l))){e=false;break e}}if((a=o.get(t))&&o.get(e))e=a==e;else{a=true,o.set(t,e),o.set(e,t);for(var s=u;++f<c;){var l=i[f],b=t[l],h=e[l];
if(r)var p=u?r(h,b,l,e,t,o):r(b,h,l,t,e,o);if(p===re?b!==h&&!B(b,h,n,r,o):!p){a=false;break}s||(s="constructor"==l)}a&&!s&&(n=t.constructor,r=e.constructor,n!=r&&"constructor"in t&&"constructor"in e&&!(typeof n=="function"&&n instanceof n&&typeof r=="function"&&r instanceof r)&&(a=false)),o.delete(t),o.delete(e),e=a}}else e=false;else e=false}}return e}function P(t){return Pt(t)&&"[object Map]"==mn(t)}function L(t,e){var n=e.length,r=n;if(null==t)return!r;for(t=Object(t);n--;){var o=e[n];if(o[2]?o[1]!==t[o[0]]:!(o[0]in t))return false;
}for(;++n<r;){var o=e[n],u=o[0],c=t[u],i=o[1];if(o[2]){if(c===re&&!(u in t))return false}else if(o=new v,void 0===re?!B(i,c,3,void 0,o):1)return false}return true}function N(t){return Pt(t)&&"[object Set]"==mn(t)}function C(t){return Pt(t)&&Ut(t.length)&&!!_e[M(t)]}function T(t){return typeof t=="function"?t:null==t?Yt:typeof t=="object"?xn(t)?W(t[0],t[1]):R(t):te(t)}function V(t){if(!At(t))return Ze(t);var e,n=[];for(e in Object(t))Ue.call(t,e)&&"constructor"!=e&&n.push(e);return n}function R(t){var e=bt(t);
return 1==e.length&&e[0][2]?wt(e[0][0],e[0][1]):function(n){return n===t||L(n,e)}}function W(t,e){return dt(t)&&e===e&&!Bt(e)?wt(Ot(t),e):function(n){var r=Gt(n,t);return r===re&&r===e?Ht(n,t):B(e,r,3)}}function q(t,e,n,r,o){t!==e&&vn(e,function(u,c){if(Bt(u)){o||(o=new v);var i=o,a="__proto__"==c?re:t[c],f="__proto__"==c?re:e[c],l=i.get(f);if(l)A(t,c,l);else{var l=r?r(a,f,c+"",t,e,i):re,s=l===re;if(s){var b=xn(f),h=!b&&En(f),p=!b&&!h&&Mn(f),l=f;b||h||p?xn(a)?l=a:$t(a)?l=tt(a):h?(s=false,l=X(f,true)):p?(s=false,
l=Z(f,true)):l=[]:Lt(f)||zn(f)?(l=a,zn(a)?l=Wt(a):(!Bt(a)||n&&Dt(a))&&(l=jt(f))):s=false}s&&(i.set(f,l),q(l,f,n,r,i),i.delete(f)),A(t,c,l)}}else i=r?r("__proto__"==c?re:t[c],u,c+"",t,e,o):re,i===re&&(i=u),A(t,c,i)},Kt)}function G(t){return function(e){return I(e,t)}}function H(t){return On(mt(t,void 0,Yt),t+"")}function J(t){if(typeof t=="string")return t;if(xn(t))return r(t,J)+"";if(Ct(t))return jn?jn.call(t):"";var e=t+"";return"0"==e&&1/t==-oe?"-0":e}function K(t,e){e=Q(e,t);var n;if(2>e.length)n=t;else{
n=e;var r=0,o=-1,u=-1,c=n.length;for(0>r&&(r=-r>c?0:c+r),o=o>c?c:o,0>o&&(o+=c),c=r>o?0:o-r>>>0,r>>>=0,o=Array(c);++u<c;)o[u]=n[u+r];n=I(t,o)}t=n,null==t||delete t[Ot(xt(e))]}function Q(t,e){return xn(t)?t:dt(t,e)?[t]:Sn(qt(t))}function X(t,e){if(e)return t.slice();var n=t.length,n=Re?Re(n):new t.constructor(n);return t.copy(n),n}function Y(t){var e=new t.constructor(t.byteLength);return new Ve(e).set(new Ve(t)),e}function Z(t,e){return new t.constructor(e?Y(t.buffer):t.buffer,t.byteOffset,t.length);
}function tt(t,e){var n=-1,r=t.length;for(e||(e=Array(r));++n<r;)e[n]=t[n];return e}function et(t,e,n){var r=!n;n||(n={});for(var o=-1,u=e.length;++o<u;){var c=e[o],i=re;i===re&&(i=t[c]),r?k(n,c,i):w(n,c,i)}return n}function nt(t,e){return et(t,An(t),e)}function rt(t,e){return et(t,wn(t),e)}function ot(t){return H(function(e,n){var r,o=-1,u=n.length,c=1<u?n[u-1]:re,i=2<u?n[2]:re,c=3<t.length&&typeof c=="function"?(u--,c):re;if(r=i){r=n[0];var a=n[1];if(Bt(i)){var f=typeof a;r=!!("number"==f?Mt(i)&&vt(a,i.length):"string"==f&&a in i)&&Ft(i[a],r);
}else r=false}for(r&&(c=3>u?re:c,u=1),e=Object(e);++o<u;)(i=n[o])&&t(e,i,o,c);return e})}function ut(t){return Lt(t)?re:t}function ct(t,e,n,r,o,c){var i=1&n,a=t.length,f=e.length;if(a!=f&&!(i&&f>a))return false;if((f=c.get(t))&&c.get(e))return f==e;var f=-1,l=true,s=2&n?new g:re;for(c.set(t,e),c.set(e,t);++f<a;){var b=t[f],h=e[f];if(r)var p=i?r(h,b,f,e,t,c):r(b,h,f,t,e,c);if(p!==re){if(p)continue;l=false;break}if(s){if(!u(e,function(t,e){if(!s.has(e)&&(b===t||o(b,t,n,r,c)))return s.push(e)})){l=false;break}}else if(b!==h&&!o(b,h,n,r,c)){
l=false;break}}return c.delete(t),c.delete(e),l}function it(t,e,n,r,o,u,c){switch(n){case"[object DataView]":if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)break;t=t.buffer,e=e.buffer;case"[object ArrayBuffer]":if(t.byteLength!=e.byteLength||!u(new Ve(t),new Ve(e)))break;return true;case"[object Boolean]":case"[object Date]":case"[object Number]":return Ft(+t,+e);case"[object Error]":return t.name==e.name&&t.message==e.message;case"[object RegExp]":case"[object String]":return t==e+"";case"[object Map]":
var i=s;case"[object Set]":if(i||(i=h),t.size!=e.size&&!(1&r))break;return(n=c.get(t))?n==e:(r|=2,c.set(t,e),e=ct(i(t),i(e),r,o,u,c),c.delete(t),e);case"[object Symbol]":if(yn)return yn.call(t)==yn.call(e)}return false}function at(t){return F(t,Jt,An)}function ft(t){return F(t,Kt,wn)}function lt(){var t=p.iteratee||Zt,t=t===Zt?T:t;return arguments.length?t(arguments[0],arguments[1]):t}function st(t,e){var n=t.__data__,r=typeof e;return("string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e)?n[typeof e=="string"?"string":"hash"]:n.map;
}function bt(t){for(var e=Jt(t),n=e.length;n--;){var r=e[n],o=t[r];e[n]=[r,o,o===o&&!Bt(o)]}return e}function ht(t,e){var n=null==t?re:t[e];return(!Bt(n)||Be&&Be in n?0:(Dt(n)?Ne:pe).test(St(n)))?n:re}function pt(t,e,n){e=Q(e,t);for(var r=-1,o=e.length,u=false;++r<o;){var c=Ot(e[r]);if(!(u=null!=t&&n(t,c)))break;t=t[c]}return u||++r!=o?u:(o=null==t?0:t.length,!!o&&Ut(o)&&vt(c,o)&&(xn(t)||zn(t)))}function yt(t){var e=t.length,n=new t.constructor(e);return e&&"string"==typeof t[0]&&Ue.call(t,"index")&&(n.index=t.index,
n.input=t.input),n}function jt(t){return typeof t.constructor!="function"||At(t)?{}:_n(We(t))}function _t(t,e,n){var r=t.constructor;switch(e){case"[object ArrayBuffer]":return Y(t);case"[object Boolean]":case"[object Date]":return new r(+t);case"[object DataView]":return e=n?Y(t.buffer):t.buffer,new t.constructor(e,t.byteOffset,t.byteLength);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":
case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return Z(t,n);case"[object Map]":return new r;case"[object Number]":case"[object String]":return new r(t);case"[object RegExp]":return e=new t.constructor(t.source,se.exec(t)),e.lastIndex=t.lastIndex,e;case"[object Set]":return new r;case"[object Symbol]":return yn?Object(yn.call(t)):{}}}function gt(t){return xn(t)||zn(t)||!!(Je&&t&&t[Je])}function vt(t,e){var n=typeof t;return e=null==e?9007199254740991:e,!!e&&("number"==n||"symbol"!=n&&je.test(t))&&-1<t&&0==t%1&&t<e;
}function dt(t,e){if(xn(t))return false;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!Ct(t))||(ie.test(t)||!ce.test(t)||null!=e&&t in Object(e))}function At(t){var e=t&&t.constructor;return t===(typeof e=="function"&&e.prototype||Me)}function wt(t,e){return function(n){return null!=n&&(n[t]===e&&(e!==re||t in Object(n)))}}function mt(e,n,r){return n=tn(n===re?e.length-1:n,0),function(){for(var o=arguments,u=-1,c=tn(o.length-n,0),i=Array(c);++u<c;)i[u]=o[n+u];for(u=-1,c=Array(n+1);++u<n;)c[u]=o[u];
return c[n]=r(i),t(e,this,c)}}function Ot(t){if(typeof t=="string"||Ct(t))return t;var e=t+"";return"0"==e&&1/t==-oe?"-0":e}function St(t){if(null!=t){try{return De.call(t)}catch(t){}return t+""}return""}function kt(t,e,n){var r=null==t?0:t.length;return r?(n=null==n?0:Vt(n),0>n&&(n=tn(r+n,0)),c(t,lt(e,3),n)):-1}function zt(t){return(null==t?0:t.length)?E(t,1):[]}function xt(t){var e=null==t?0:t.length;return e?t[e-1]:re}function Et(t,e){function n(){var r=arguments,o=e?e.apply(this,r):r[0],u=n.cache;
return u.has(o)?u.get(o):(r=t.apply(this,r),n.cache=u.set(o,r)||u,r)}if(typeof t!="function"||null!=e&&typeof e!="function")throw new TypeError("Expected a function");return n.cache=new(Et.Cache||_),n}function It(t){if(typeof t!="function")throw new TypeError("Expected a function");return function(){var e=arguments;switch(e.length){case 0:return!t.call(this);case 1:return!t.call(this,e[0]);case 2:return!t.call(this,e[0],e[1]);case 3:return!t.call(this,e[0],e[1],e[2])}return!t.apply(this,e)}}function Ft(t,e){
return t===e||t!==t&&e!==e}function Mt(t){return null!=t&&Ut(t.length)&&!Dt(t)}function $t(t){return Pt(t)&&Mt(t)}function Dt(t){return!!Bt(t)&&(t=M(t),"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t)}function Ut(t){return typeof t=="number"&&-1<t&&0==t%1&&9007199254740991>=t}function Bt(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}function Pt(t){return null!=t&&typeof t=="object"}function Lt(t){return!(!Pt(t)||"[object Object]"!=M(t))&&(t=We(t),
null===t||(t=Ue.call(t,"constructor")&&t.constructor,typeof t=="function"&&t instanceof t&&De.call(t)==Le))}function Nt(t){return typeof t=="string"||!xn(t)&&Pt(t)&&"[object String]"==M(t)}function Ct(t){return typeof t=="symbol"||Pt(t)&&"[object Symbol]"==M(t)}function Tt(t){return t?(t=Rt(t),t===oe||t===-oe?1.7976931348623157e308*(0>t?-1:1):t===t?t:0):0===t?t:0}function Vt(t){t=Tt(t);var e=t%1;return t===t?e?t-e:t:0}function Rt(t){if(typeof t=="number")return t;if(Ct(t))return ue;if(Bt(t)&&(t=typeof t.valueOf=="function"?t.valueOf():t,
t=Bt(t)?t+"":t),typeof t!="string")return 0===t?t:+t;t=t.replace(fe,"");var e=he.test(t);return e||ye.test(t)?de(t.slice(2),e?2:8):be.test(t)?ue:+t}function Wt(t){return et(t,Kt(t))}function qt(t){return null==t?"":J(t)}function Gt(t,e,n){return t=null==t?re:I(t,e),t===re?n:t}function Ht(t,e){return null!=t&&pt(t,e,D)}function Jt(t){return Mt(t)?d(t):V(t)}function Kt(t){if(Mt(t))t=d(t,true);else if(Bt(t)){var e,n=At(t),r=[];for(e in t)("constructor"!=e||!n&&Ue.call(t,e))&&r.push(e);t=r}else{if(e=[],
null!=t)for(n in Object(t))e.push(n);t=e}return t}function Qt(t){return null==t?[]:l(t,Jt(t))}function Xt(t){return function(){return t}}function Yt(t){return t}function Zt(t){return T(typeof t=="function"?t:z(t,1))}function te(t){return dt(t)?a(Ot(t)):G(t)}function ee(){return[]}function ne(){return false}var re,oe=1/0,ue=NaN,ce=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ie=/^\w*$/,ae=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,fe=/^\s+|\s+$/g,le=/\\(\\)?/g,se=/\w*$/,be=/^[-+]0x[0-9a-f]+$/i,he=/^0b[01]+$/i,pe=/^\[object .+?Constructor\]$/,ye=/^0o[0-7]+$/i,je=/^(?:0|[1-9]\d*)$/,_e={};
_e["[object Float32Array]"]=_e["[object Float64Array]"]=_e["[object Int8Array]"]=_e["[object Int16Array]"]=_e["[object Int32Array]"]=_e["[object Uint8Array]"]=_e["[object Uint8ClampedArray]"]=_e["[object Uint16Array]"]=_e["[object Uint32Array]"]=true,_e["[object Arguments]"]=_e["[object Array]"]=_e["[object ArrayBuffer]"]=_e["[object Boolean]"]=_e["[object DataView]"]=_e["[object Date]"]=_e["[object Error]"]=_e["[object Function]"]=_e["[object Map]"]=_e["[object Number]"]=_e["[object Object]"]=_e["[object RegExp]"]=_e["[object Set]"]=_e["[object String]"]=_e["[object WeakMap]"]=false;
var ge={};ge["[object Arguments]"]=ge["[object Array]"]=ge["[object ArrayBuffer]"]=ge["[object DataView]"]=ge["[object Boolean]"]=ge["[object Date]"]=ge["[object Float32Array]"]=ge["[object Float64Array]"]=ge["[object Int8Array]"]=ge["[object Int16Array]"]=ge["[object Int32Array]"]=ge["[object Map]"]=ge["[object Number]"]=ge["[object Object]"]=ge["[object RegExp]"]=ge["[object Set]"]=ge["[object String]"]=ge["[object Symbol]"]=ge["[object Uint8Array]"]=ge["[object Uint8ClampedArray]"]=ge["[object Uint16Array]"]=ge["[object Uint32Array]"]=true,
ge["[object Error]"]=ge["[object Function]"]=ge["[object WeakMap]"]=false;var ve,de=parseInt,Ae=typeof global=="object"&&global&&global.Object===Object&&global,we=typeof self=="object"&&self&&self.Object===Object&&self,me=Ae||we||Function("return this")(),Oe=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Se=Oe&&typeof module=="object"&&module&&!module.nodeType&&module,ke=Se&&Se.exports===Oe,ze=ke&&Ae.process;t:{try{ve=ze&&ze.binding&&ze.binding("util");break t}catch(t){}ve=void 0}var xe=ve&&ve.isMap,Ee=ve&&ve.isSet,Ie=ve&&ve.isTypedArray,Fe=Array.prototype,Me=Object.prototype,$e=me["__core-js_shared__"],De=Function.prototype.toString,Ue=Me.hasOwnProperty,Be=function(){
var t=/[^.]+$/.exec($e&&$e.keys&&$e.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),Pe=Me.toString,Le=De.call(Object),Ne=RegExp("^"+De.call(Ue).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Ce=ke?me.Buffer:re,Te=me.Symbol,Ve=me.Uint8Array,Re=Ce?Ce.a:re,We=b(Object.getPrototypeOf),qe=Object.create,Ge=Me.propertyIsEnumerable,He=Fe.splice,Je=Te?Te.isConcatSpreadable:re,Ke=Te?Te.toStringTag:re,Qe=function(){try{var t=ht(Object,"defineProperty");
return t({},"",{}),t}catch(t){}}(),Xe=Object.getOwnPropertySymbols,Ye=Ce?Ce.isBuffer:re,Ze=b(Object.keys),tn=Math.max,en=Date.now,nn=ht(me,"DataView"),rn=ht(me,"Map"),on=ht(me,"Promise"),un=ht(me,"Set"),cn=ht(me,"WeakMap"),an=ht(Object,"create"),fn=St(nn),ln=St(rn),sn=St(on),bn=St(un),hn=St(cn),pn=Te?Te.prototype:re,yn=pn?pn.valueOf:re,jn=pn?pn.toString:re,_n=function(){function t(){}return function(e){return Bt(e)?qe?qe(e):(t.prototype=e,e=new t,t.prototype=re,e):{}}}();y.prototype.clear=function(){
this.__data__=an?an(null):{},this.size=0},y.prototype.delete=function(t){return t=this.has(t)&&delete this.__data__[t],this.size-=t?1:0,t},y.prototype.get=function(t){var e=this.__data__;return an?(t=e[t],"__lodash_hash_undefined__"===t?re:t):Ue.call(e,t)?e[t]:re},y.prototype.has=function(t){var e=this.__data__;return an?e[t]!==re:Ue.call(e,t)},y.prototype.set=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=an&&e===re?"__lodash_hash_undefined__":e,this},j.prototype.clear=function(){
this.__data__=[],this.size=0},j.prototype.delete=function(t){var e=this.__data__;return t=m(e,t),!(0>t)&&(t==e.length-1?e.pop():He.call(e,t,1),--this.size,true)},j.prototype.get=function(t){var e=this.__data__;return t=m(e,t),0>t?re:e[t][1]},j.prototype.has=function(t){return-1<m(this.__data__,t)},j.prototype.set=function(t,e){var n=this.__data__,r=m(n,t);return 0>r?(++this.size,n.push([t,e])):n[r][1]=e,this},_.prototype.clear=function(){this.size=0,this.__data__={hash:new y,map:new(rn||j),string:new y
}},_.prototype.delete=function(t){return t=st(this,t).delete(t),this.size-=t?1:0,t},_.prototype.get=function(t){return st(this,t).get(t)},_.prototype.has=function(t){return st(this,t).has(t)},_.prototype.set=function(t,e){var n=st(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this},g.prototype.add=g.prototype.push=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this},g.prototype.has=function(t){return this.__data__.has(t)},v.prototype.clear=function(){this.__data__=new j,
this.size=0},v.prototype.delete=function(t){var e=this.__data__;return t=e.delete(t),this.size=e.size,t},v.prototype.get=function(t){return this.__data__.get(t)},v.prototype.has=function(t){return this.__data__.has(t)},v.prototype.set=function(t,e){var n=this.__data__;if(n instanceof j){var r=n.__data__;if(!rn||199>r.length)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new _(r)}return n.set(t,e),this.size=n.size,this};var gn=function(t,e){return function(n,r){if(null==n)return n;if(!Mt(n))return t(n,r);
for(var o=n.length,u=e?o:-1,c=Object(n);(e?u--:++u<o)&&false!==r(c[u],u,c););return n}}(function(t,e){return t&&vn(t,e,Jt)}),vn=function(t){return function(e,n,r){var o=-1,u=Object(e);r=r(e);for(var c=r.length;c--;){var i=r[t?c:++o];if(false===n(u[i],i,u))break}return e}}(),dn=Qe?function(t,e){return Qe(t,"toString",{configurable:true,enumerable:false,value:Xt(e),writable:true})}:Yt,An=Xe?function(t){return null==t?[]:(t=Object(t),n(Xe(t),function(e){return Ge.call(t,e)}))}:ee,wn=Xe?function(t){for(var e=[];t;)o(e,An(t)),
t=We(t);return e}:ee,mn=M;(nn&&"[object DataView]"!=mn(new nn(new ArrayBuffer(1)))||rn&&"[object Map]"!=mn(new rn)||on&&"[object Promise]"!=mn(on.resolve())||un&&"[object Set]"!=mn(new un)||cn&&"[object WeakMap]"!=mn(new cn))&&(mn=function(t){var e=M(t);if(t=(t="[object Object]"==e?t.constructor:re)?St(t):"")switch(t){case fn:return"[object DataView]";case ln:return"[object Map]";case sn:return"[object Promise]";case bn:return"[object Set]";case hn:return"[object WeakMap]"}return e});var On=function(t){
var e=0,n=0;return function(){var r=en(),o=16-(r-n);if(n=r,0<o){if(800<=++e)return arguments[0]}else e=0;return t.apply(re,arguments)}}(dn),Sn=function(t){t=Et(t,function(t){return 500===e.size&&e.clear(),t});var e=t.cache;return t}(function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(ae,function(t,n,r,o){e.push(r?o.replace(le,"$1"):n||t)}),e}),kn=function(t){return function(e,n,r){var o=Object(e);if(!Mt(e)){var u=lt(n,3);e=Jt(e),n=function(t){return u(o[t],t,o)}}return n=t(e,n,r),
-1<n?o[u?e[n]:n]:re}}(kt);Et.Cache=_;var zn=U(function(){return arguments}())?U:function(t){return Pt(t)&&Ue.call(t,"callee")&&!Ge.call(t,"callee")},xn=Array.isArray,En=Ye||ne,In=xe?f(xe):P,Fn=Ee?f(Ee):N,Mn=Ie?f(Ie):C,$n=ot(function(t,e,n){q(t,e,n)}),Dn=ot(function(t,e,n,r){q(t,e,n,r)}),Un=function(t){return On(mt(t,re,zt),t+"")}(function(t,e){var n={};if(null==t)return n;var o=false;e=r(e,function(e){return e=Q(e,t),o||(o=1<e.length),e}),et(t,ft(t),n),o&&(n=z(n,7,ut));for(var u=e.length;u--;)K(n,e[u]);
return n});p.constant=Xt,p.flatten=zt,p.iteratee=Zt,p.keys=Jt,p.keysIn=Kt,p.memoize=Et,p.merge=$n,p.mergeWith=Dn,p.negate=It,p.omit=Un,p.property=te,p.reject=function(t,e){return(xn(t)?n:x)(t,It(lt(e,3)))},p.toPlainObject=Wt,p.values=Qt,p.cloneDeep=function(t){return z(t,5)},p.cloneDeepWith=function(t,e){return e=typeof e=="function"?e:re,z(t,5,e)},p.eq=Ft,p.find=kn,p.findIndex=kt,p.get=Gt,p.has=function(t,e){return null!=t&&pt(t,e,$)},p.hasIn=Ht,p.identity=Yt,p.includes=function(t,e,n,r){if(t=Mt(t)?t:Qt(t),
n=n&&!r?Vt(n):0,r=t.length,0>n&&(n=tn(r+n,0)),Nt(t))t=n<=r&&-1<t.indexOf(e,n);else{if(r=!!r){if(e===e)t:{for(n-=1,r=t.length;++n<r;)if(t[n]===e){t=n;break t}t=-1}else t=c(t,i,n);r=-1<t}t=r}return t},p.isArguments=zn,p.isArray=xn,p.isArrayLike=Mt,p.isArrayLikeObject=$t,p.isBuffer=En,p.isEmpty=function(t){if(null==t)return true;if(Mt(t)&&(xn(t)||typeof t=="string"||typeof t.splice=="function"||En(t)||Mn(t)||zn(t)))return!t.length;var e=mn(t);if("[object Map]"==e||"[object Set]"==e)return!t.size;if(At(t))return!V(t).length;
for(var n in t)if(Ue.call(t,n))return false;return true},p.isEqual=function(t,e){return B(t,e)},p.isFunction=Dt,p.isLength=Ut,p.isMap=In,p.isNull=function(t){return null===t},p.isObject=Bt,p.isObjectLike=Pt,p.isPlainObject=Lt,p.isSet=Fn,p.isString=Nt,p.isSymbol=Ct,p.isTypedArray=Mn,p.last=xt,p.stubArray=ee,p.stubFalse=ne,p.toFinite=Tt,p.toInteger=Vt,p.toNumber=Rt,p.toString=qt,p.VERSION="4.17.5",Se&&((Se.exports=p)._=p,Oe._=p)}).call(this);
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],2:[function(acdlreq,module,exports){
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
const CONSTANTS = {
  /**
   * @typedef {String} ItemType
   **/

  /**
   * Enumeration of data layer item types.
   *
   * @enum {ItemType}
   * @readonly
   */
  itemType: {
    /** Represents an item of type data */
    DATA: 'data',
    /** Represents an item of type function */
    FCTN: 'fctn',
    /** Represents an item of type event */
    EVENT: 'event',
    /** Represents an item of type listener on */
    LISTENER_ON: 'listenerOn',
    /** Represents an item of type listener off */
    LISTENER_OFF: 'listenerOff'
  },

  /**
   * @typedef {String} DataLayerEvent
   **/

  /**
   * Enumeration of data layer events.
   *
   * @enum {DataLayerEvent}
   * @readonly
   */
  dataLayerEvent: {
    /** Represents an event triggered for any change in the data layer state */
    CHANGE: 'adobeDataLayer:change',
    /** Represents an event triggered for any event push to the data layer */
    EVENT: 'adobeDataLayer:event'
  },

  /**
   * @typedef {String} ListenerScope
   **/

  /**
   * Enumeration of listener scopes.
   *
   * @enum {ListenerScope}
   * @readonly
   */
  listenerScope: {
    /** Past events only */
    PAST: 'past',
    /** Future events only */
    FUTURE: 'future',
    /** All events, past and future */
    ALL: 'all'
  }
};

module.exports = CONSTANTS;

},{}],3:[function(acdlreq,module,exports){
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

const _ = acdlreq('../custom-lodash');
const version = acdlreq('../version.json').version;
const cloneDeep = _.cloneDeep;
const get = _.get;

const Item = acdlreq('./item');
const Listener = acdlreq('./listener');
const ListenerManager = acdlreq('./listenerManager');
const CONSTANTS = acdlreq('./constants');
const customMerge = acdlreq('./utils/customMerge');

/**
 * Manager
 *
 * @class Manager
 * @classdesc Data Layer manager that augments the passed data layer array and handles eventing.
 * @param {Object} config The Data Layer manager configuration.
 */
module.exports = function(config) {
  const _config = config || {};
  let _dataLayer = [];
  let _preLoadedItems = [];
  let _state = {};
  let _listenerManager;

  const DataLayerManager = {
    getState: function() {
      return _state;
    },
    getDataLayer: function() {
      return _dataLayer;
    }
  };

  _initialize();
  _augment();
  _processItems();

  /**
   * Initializes the data layer.
   *
   * @private
   */
  function _initialize() {
    if (!Array.isArray(_config.dataLayer)) {
      _config.dataLayer = [];
    }

    // Remove preloaded items from the data layer array and add those to the array of preloaded items
    _preLoadedItems = _config.dataLayer.splice(0, _config.dataLayer.length);
    _dataLayer = _config.dataLayer;
    _dataLayer.version = version;
    _state = {};
    _listenerManager = ListenerManager(DataLayerManager);
  };

  /**
   * Updates the state with the item.
   *
   * @param {Item} item The item.
   * @private
   */
  function _updateState(item) {
    _state = customMerge(_state, item.data);
  };

  /**
   * Augments the data layer Array Object, overriding: push() and adding getState(), addEventListener and removeEventListener.
   *
   * @private
   */
  function _augment() {
    /**
     * Pushes one or more items to the data layer.
     *
     * @param {...ItemConfig} var_args The items to add to the data layer.
     * @returns {Number} The length of the data layer following push.
     */
    _dataLayer.push = function(var_args) { /* eslint-disable-line camelcase */
      const pushArguments = arguments;
      const filteredArguments = arguments;

      Object.keys(pushArguments).forEach(function(key) {
        const itemConfig = pushArguments[key];
        const item = Item(itemConfig);

        if (!item.valid) {
          _logInvalidItemError(item);
          delete filteredArguments[key];
        }
        switch (item.type) {
          case CONSTANTS.itemType.DATA:
          case CONSTANTS.itemType.EVENT: {
            _processItem(item);
            break;
          }
          case CONSTANTS.itemType.FCTN: {
            delete filteredArguments[key];
            _processItem(item);
            break;
          }
          case CONSTANTS.itemType.LISTENER_ON:
          case CONSTANTS.itemType.LISTENER_OFF: {
            delete filteredArguments[key];
          }
        }
      });

      if (filteredArguments[0]) {
        return Array.prototype.push.apply(this, filteredArguments);
      }
    };

    /**
     * Returns a deep copy of the data layer state or of the object defined by the path.
     *
     * @param {Array|String} path The path of the property to get.
     * @returns {*} Returns a deep copy of the resolved value if a path is passed, a deep copy of the data layer state otherwise.
     */
    _dataLayer.getState = function(path) {
      if (path) {
        return get(cloneDeep(_state), path);
      }
      return cloneDeep(_state);
    };

    /**
     * Event listener callback.
     *
     * @callback eventListenerCallback A function that is called when the event of the specified type occurs.
     * @this {DataLayer}
     * @param {Object} event The event object pushed to the data layer that triggered the callback.
     */

    /**
     * Sets up a function that will be called whenever the specified event is triggered.
     *
     * @param {String} type A case-sensitive string representing the event type to listen for.
     * @param {eventListenerCallback} callback A function that is called when the event of the specified type occurs.
     * @param {Object} [options] Optional characteristics of the event listener.
     * @param {String} [options.path] The path in the state object to filter the listening to.
     * @param {('past'|'future'|'all')} [options.scope] The timing to filter the listening to:
     *      - {String} past The listener is triggered for past events only.
     *      - {String} future The listener is triggered for future events only.
     *      - {String} all The listener is triggered for both past and future events (default value).
     */
    _dataLayer.addEventListener = function(type, callback, options) {
      const eventListenerItem = Item({
        on: type,
        handler: callback,
        scope: options && options.scope,
        path: options && options.path
      });

      _processItem(eventListenerItem);
    };

    /**
     * Removes an event listener previously registered with addEventListener().
     *
     * @param {String} type A case-sensitive string representing the event type to listen for.
     * @param {Function} [listener] Optional function that is to be removed.
     */
    _dataLayer.removeEventListener = function(type, listener) {
      const eventListenerItem = Item({
        off: type,
        handler: listener
      });

      _processItem(eventListenerItem);
    };
  };

  /**
   * Processes all items that already exist on the stack.
   *
   * @private
   */
  function _processItems() {
    for (let i = 0; i < _preLoadedItems.length; i++) {
      _dataLayer.push(_preLoadedItems[i]);
    }
  };

  /**
   * Processes an item pushed to the stack.
   *
   * @param {Item} item The item to process.
   * @private
   */
  function _processItem(item) {
    if (!item.valid) {
      _logInvalidItemError(item);
      return;
    }

    /**
     * Returns all items before the provided one.
     *
     * @param {Item} item The item.
     * @returns {Array<Item>} The items before.
     * @private
     */
    function _getBefore(item) {
      if (!(_dataLayer.length === 0 || item.index > _dataLayer.length - 1)) {
        return _dataLayer.slice(0, item.index).map(itemConfig => Item(itemConfig));
      }
      return [];
    }

    const typeProcessors = {
      data: function(item) {
        _updateState(item);
        _listenerManager.triggerListeners(item);
      },
      fctn: function(item) {
        item.config.call(_dataLayer, _dataLayer);
      },
      event: function(item) {
        if (item.data) {
          _updateState(item);
        }
        _listenerManager.triggerListeners(item);
      },
      listenerOn: function(item) {
        const listener = Listener(item);
        switch (listener.scope) {
          case CONSTANTS.listenerScope.PAST: {
            for (const registeredItem of _getBefore(item)) {
              _listenerManager.triggerListener(listener, registeredItem);
            }
            break;
          }
          case CONSTANTS.listenerScope.FUTURE: {
            _listenerManager.register(listener);
            break;
          }
          case CONSTANTS.listenerScope.ALL: {
            const registered = _listenerManager.register(listener);
            if (registered) {
              for (const registeredItem of _getBefore(item)) {
                _listenerManager.triggerListener(listener, registeredItem);
              }
            }
          }
        }
      },
      listenerOff: function(item) {
        _listenerManager.unregister(Listener(item));
      }
    };

    typeProcessors[item.type](item);
  };

  /**
   * Logs error for invalid item pushed to the data layer.
   *
   * @param {Item} item The invalid item.
   * @private
   */
  function _logInvalidItemError(item) {
    const message = 'The following item cannot be handled by the data layer ' +
      'because it does not have a valid format: ' +
      JSON.stringify(item.config);
    console.error(message);
  };

  return DataLayerManager;
};

},{"../custom-lodash":1,"../version.json":14,"./constants":2,"./item":5,"./listener":7,"./listenerManager":8,"./utils/customMerge":10}],4:[function(acdlreq,module,exports){
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

const DataLayerManager = acdlreq('./dataLayerManager');

/**
 * Data Layer.
 *
 * @type {Object}
 */
const DataLayer = {
  Manager: DataLayerManager
};

window.adobeDataLayer = window.adobeDataLayer || [];

// If data layer has already been initialized, do not re-initialize.
if (window.adobeDataLayer.version) {
  console.warn(
    `Adobe Client Data Layer v${window.adobeDataLayer.version} has already been imported/initialized on this page. You may be erroneously loading it a second time.`
  );
} else {
  DataLayer.Manager({
    dataLayer: window.adobeDataLayer
  });
}

/**
 * @typedef  {Object} ListenerOnConfig
 * @property {String} on Name of the event to bind to.
 * @property {String} [path] Object key in the state to bind to.
 * @property {ListenerScope} [scope] Scope of the listener.
 * @property {Function} handler Handler to execute when the bound event is triggered.
 */

/**
 * @typedef  {Object} ListenerOffConfig
 * @property {String} off Name of the event to unbind.
 * @property {String} [path] Object key in the state to bind to.
 * @property {ListenerScope} [scope] Scope of the listener.
 * @property {Function} [handler] Handler for a previously attached event to unbind.
 */

/**
 * @typedef {Object} DataConfig
 * @property {Object} data Data to be updated in the state.
 */

/**
 * @typedef {Object} EventConfig
 * @property {String} event Name of the event.
 * @property {Object} [eventInfo] Additional information to pass to the event handler.
 * @property {DataConfig.data} [data] Data to be updated in the state.
 */

/**
 * @typedef {DataConfig | EventConfig | ListenerOnConfig | ListenerOffConfig} ItemConfig
 */

/**
 * Triggered when there is change in the data layer state.
 *
 * @event DataLayerEvent.CHANGE
 * @type {Object}
 * @property {Object} data Data pushed that caused a change in the data layer state.
 */

/**
 * Triggered when an event is pushed to the data layer.
 *
 * @event DataLayerEvent.EVENT
 * @type {Object}
 * @property {String} name Name of the committed event.
 * @property {Object} eventInfo Additional information passed with the committed event.
 * @property {Object} data Data that was pushed alongside the event.
 */

/**
 * Triggered when an arbitrary event is pushed to the data layer.
 *
 * @event <custom>
 * @type {Object}
 * @property {String} name Name of the committed event.
 * @property {Object} eventInfo Additional information passed with the committed event.
 * @property {Object} data Data that was pushed alongside the event.
 */

module.exports = DataLayer;

},{"./dataLayerManager":3}],5:[function(acdlreq,module,exports){
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

const _ = acdlreq('../custom-lodash');
const isPlainObject = _.isPlainObject;
const isEmpty = _.isEmpty;
const omit = _.omit;
const find = _.find;

const dataMatchesContraints = acdlreq('./utils/dataMatchesContraints');
const ITEM_CONSTRAINTS = acdlreq('./itemConstraints');
const CONSTANTS = acdlreq('./constants');

/**
 * Constructs a data layer item.
 *
 * @param {ItemConfig} itemConfig The data layer item configuration.
 * @param {Number} index The item index in the array of existing items.
 */

module.exports = function(itemConfig, index) {
  const _config = itemConfig;
  const _index = index;
  const _type = getType();
  const _data = getData();
  const _valid = !!_type;

  function getType() {
    return find(Object.keys(ITEM_CONSTRAINTS), key => dataMatchesContraints(_config, ITEM_CONSTRAINTS[key])) ||
      (typeof _config === 'function' && CONSTANTS.itemType.FCTN) ||
      (isPlainObject(_config) && CONSTANTS.itemType.DATA);
  }

  function getData() {
    const data = omit(_config, Object.keys(ITEM_CONSTRAINTS.event));
    if (!isEmpty(data)) {
      return data;
    }
  }

  return {
    /**
     * Returns the item configuration.
     *
     * @returns {ItemConfig} The item configuration.
     */
    config: _config,

    /**
     * Returns the item type.
     *
     * @returns {itemType} The item type.
     */
    type: _type,

    /**
     * Returns the item data.
     *
     * @returns {DataConfig} The item data.
     */
    data: _data,

    /**
     * Indicates whether the item is valid.
     *
     * @returns {Boolean} true if the item is valid, false otherwise.
     */
    valid: _valid,

    /**
     * Returns the index of the item in the array of existing items (added with the standard Array.prototype.push())
     *
     * @returns {Number} The index of the item in the array of existing items if it exists, -1 otherwise.
     */
    index: _index
  };
};

},{"../custom-lodash":1,"./constants":2,"./itemConstraints":6,"./utils/dataMatchesContraints":11}],6:[function(acdlreq,module,exports){
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Constraints for each type of the item configuration.
 */

const itemConstraints = {
  event: {
    event: {
      type: 'string'
    },
    eventInfo: {
      optional: true
    }
  },
  listenerOn: {
    on: {
      type: 'string'
    },
    handler: {
      type: 'function'
    },
    scope: {
      type: 'string',
      values: ['past', 'future', 'all'],
      optional: true
    },
    path: {
      type: 'string',
      optional: true
    }
  },
  listenerOff: {
    off: {
      type: 'string'
    },
    handler: {
      type: 'function',
      optional: true
    },
    scope: {
      type: 'string',
      values: ['past', 'future', 'all'],
      optional: true
    },
    path: {
      type: 'string',
      optional: true
    }
  }
};

module.exports = itemConstraints;

},{}],7:[function(acdlreq,module,exports){
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

const CONSTANTS = acdlreq('./constants');

/**
 * Constructs a data layer listener.
 *
 * @param {Item} item The item from which to construct the listener.
 */

module.exports = function(item) {
  const _event = item.config.on || item.config.off;
  const _handler = item.config.handler || null;
  const _scope = item.config.scope || (item.config.on && CONSTANTS.listenerScope.ALL) || null;
  const _path = item.config.path || null;

  return {
    /**
     * Returns the listener event name.
     *
     * @returns {String} The listener event name.
     */
    event: _event,

    /**
     * Returns the listener handler.
     *
     * @returns {(Function|null)} The listener handler.
     */
    handler: _handler,

    /**
     * Returns the listener scope.
     *
     * @returns {(String|null)} The listener scope.
     */
    scope: _scope,

    /**
     * Returns the listener path.
     *
     * @returns {(String|null)} The listener path.
     */
    path: _path
  };
};

},{"./constants":2}],8:[function(acdlreq,module,exports){
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

const _ = acdlreq('../custom-lodash');
const cloneDeep = _.cloneDeep;

const constants = acdlreq('./constants');
const listenerMatch = acdlreq('./utils/listenerMatch');
const indexOfListener = acdlreq('./utils/indexOfListener');

/**
 * Creates a listener manager.
 *
 * @param {Manager} dataLayerManager The data layer manager.
 * @returns {ListenerManager} A listener manager.
 */
module.exports = function(dataLayerManager) {
  const _listeners = {};
  const _dataLayerManager = dataLayerManager;

  /**
   * Find index of listener in listeners object.
   */
  const _indexOfListener = indexOfListener.bind(null, _listeners);

  const ListenerManager = {
    /**
     * Registers a listener.
     *
     * @function
     * @param {Listener} listener The listener to register.
     * @returns {Boolean} true if the listener was registered, false otherwise.
     */
    register: function(listener) {
      const event = listener.event;

      if (Object.prototype.hasOwnProperty.call(_listeners, event)) {
        if (_indexOfListener(listener) === -1) {
          _listeners[listener.event].push(listener);
          return true;
        }
      } else {
        _listeners[listener.event] = [listener];
        return true;
      }
      return false;
    },
    /**
     * Unregisters a listener.
     *
     * @function
     * @param {Listener} listener The listener to unregister.
     */
    unregister: function(listener) {
      const event = listener.event;

      if (Object.prototype.hasOwnProperty.call(_listeners, event)) {
        if (!(listener.handler || listener.scope || listener.path)) {
          _listeners[event] = [];
        } else {
          const index = _indexOfListener(listener);
          if (index > -1) {
            _listeners[event].splice(index, 1);
          }
        }
      }
    },
    /**
     * Triggers listeners related to the passed item.
     *
     * @function
     * @param {Item} item Item to trigger listener for.
     */
    triggerListeners: function(item) {
      const triggeredEvents = _getTriggeredEvents(item);
      triggeredEvents.forEach(function(event) {
        if (Object.prototype.hasOwnProperty.call(_listeners, event)) {
          for (const listener of _listeners[event]) {
            _callHandler(listener, item);
          }
        }
      });
    },
    /**
     * Triggers a single listener on the passed item.
     *
     * @function
     * @param {Listener} listener Listener to call.
     * @param {Item} item Item to call the listener with.
     */
    triggerListener: function(listener, item) {
      _callHandler(listener, item);
    }
  };

  /**
   * Calls the listener handler on the item if a match is found.
   *
   * @param {Listener} listener The listener.
   * @param {Item} item The item.
   * @private
   */
  function _callHandler(listener, item) {
    if (listenerMatch(listener, item)) {
      const callbackArgs = [cloneDeep(item.config)];
      listener.handler.apply(_dataLayerManager.getDataLayer(), callbackArgs);
    }
  }

  /**
   * Returns the names of the events that are triggered for this item.
   *
   * @param {Item} item The item.
   * @returns {Array<String>} The names of the events that are triggered for this item.
   * @private
   */
  function _getTriggeredEvents(item) {
    const triggeredEvents = [];

    switch (item.type) {
      case constants.itemType.DATA: {
        triggeredEvents.push(constants.dataLayerEvent.CHANGE);
        break;
      }
      case constants.itemType.EVENT: {
        triggeredEvents.push(constants.dataLayerEvent.EVENT);
        if (item.data) triggeredEvents.push(constants.dataLayerEvent.CHANGE);
        if (item.config.event !== constants.dataLayerEvent.CHANGE) {
          triggeredEvents.push(item.config.event);
        }
        break;
      }
    }
    return triggeredEvents;
  }

  return ListenerManager;
};

},{"../custom-lodash":1,"./constants":2,"./utils/indexOfListener":12,"./utils/listenerMatch":13}],9:[function(acdlreq,module,exports){
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

const _ = acdlreq('../../custom-lodash');
const has = _.has;
const get = _.get;

/**
  * Checks if the object contains an ancestor that is set to null or undefined.
  *
  * @param {Object} object The object to check.
  * @param {String} path The path to check.
  * @returns {Boolean} true if the object contains an ancestor that is set to null or undefined, false otherwise.
  * @private
  */
module.exports = function(object, path) {
  let ancestorPath = path.substring(0, path.lastIndexOf('.'));
  while (ancestorPath) {
    if (has(object, ancestorPath)) {
      const ancestorValue = get(object, ancestorPath);
      if (ancestorValue === null || ancestorValue === undefined) {
        return true;
      }
    }
    ancestorPath = ancestorPath.substring(0, ancestorPath.lastIndexOf('.'));
  }

  return false;
};

},{"../../custom-lodash":1}],10:[function(acdlreq,module,exports){
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

const _ = acdlreq('../../custom-lodash');
const cloneDeepWith = _.cloneDeepWith;
const isObject = _.isObject;
const isArray = _.isArray;
const reject = _.reject;
const mergeWith = _.mergeWith;
const isNull = _.isNull;

/**
 * Merges the source into the object and sets objects as 'undefined' if they are 'undefined' in the source object.
 *
 * @param {Object} object The object into which to merge.
 * @param {Object} source The source to merge with.
 * @returns {Object} The object into which source was merged in.
 */
module.exports = function(object, source) {
  const makeOmittingCloneDeepCustomizer = function(predicate) {
    return function omittingCloneDeepCustomizer(value, key, object, stack) {
      if (isObject(value)) {
        if (isArray(value)) {
          return reject(value, predicate).map(item => cloneDeepWith(item, omittingCloneDeepCustomizer));
        }

        const clone = {};
        for (const subKey of Object.keys(value)) {
          if (!predicate(value[subKey])) {
            clone[subKey] = cloneDeepWith(value[subKey], omittingCloneDeepCustomizer);
          }
        }
        return clone;
      }
      return undefined;
    };
  };

  const customizer = function(objValue, srcValue, key, object) {
    if (typeof srcValue === 'undefined' || srcValue === null) {
      return null;
    }
  };

  const omitDeep = function(value, predicate = (val) => !val) {
    return cloneDeepWith(value, makeOmittingCloneDeepCustomizer(predicate));
  };

  mergeWith(object, source, customizer);

  // Remove null or undefined objects
  object = omitDeep(object, isNull);

  return object;
};

},{"../../custom-lodash":1}],11:[function(acdlreq,module,exports){
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

const _ = acdlreq('../../custom-lodash');
const find = _.find;
const includes = _.includes;

module.exports = function(data, constraints) {
  // Go through all constraints and find one which does not match the data
  const foundObjection = find(Object.keys(constraints), key => {
    const type = constraints[key].type;
    const supportedValues = key && constraints[key].values;
    const mandatory = !constraints[key].optional;
    const value = data[key];
    const valueType = typeof value;
    const incorrectType = type && valueType !== type;
    const noMatchForSupportedValues = supportedValues && !includes(supportedValues, value);
    if (mandatory) {
      return !value || incorrectType || noMatchForSupportedValues;
    } else {
      return value && (incorrectType || noMatchForSupportedValues);
    }
  });
  // If no objections found then data matches contraints
  return typeof foundObjection === 'undefined';
};

},{"../../custom-lodash":1}],12:[function(acdlreq,module,exports){
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

const _ = acdlreq('../../custom-lodash');
const isEqual = _.isEqual;

module.exports = function(listeners, listener) {
  const event = listener.event;

  if (Object.prototype.hasOwnProperty.call(listeners, event)) {
    for (const [index, registeredListener] of listeners[event].entries()) {
      if (isEqual(registeredListener.handler, listener.handler)) {
        return index;
      }
    }
  }
  return -1;
};

},{"../../custom-lodash":1}],13:[function(acdlreq,module,exports){
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

const _ = acdlreq('../../custom-lodash');
const has = _.has;

const CONSTANTS = acdlreq('../constants');
const ancestorRemoved = acdlreq('./ancestorRemoved');

/**
 * Checks if the listener matches the item.
 *
 * @param {Listener} listener The listener.
 * @param {Item} item The item.
 * @returns {Boolean} true if listener matches the item, false otherwise.
 */
function listenerMatch(listener, item) {
  const event = listener.event;
  const itemConfig = item.config;
  let matches = false;

  if (item.type === CONSTANTS.itemType.DATA) {
    if (event === CONSTANTS.dataLayerEvent.CHANGE) {
      matches = selectorMatches(listener, item);
    }
  } else if (item.type === CONSTANTS.itemType.EVENT) {
    if (event === CONSTANTS.dataLayerEvent.EVENT || event === itemConfig.event) {
      matches = selectorMatches(listener, item);
    }
    if (item.data && event === CONSTANTS.dataLayerEvent.CHANGE) {
      matches = selectorMatches(listener, item);
    }
  }

  return matches;
}

/**
 * Checks if a listener has a selector that points to an object in the data payload of an item.
 *
 * @param {Listener} listener The listener to extract the selector from.
 * @param {Item} item The item.
 * @returns {Boolean} true if a selector is not provided or if the given selector is matching, false otherwise.
 * @private
 */
function selectorMatches(listener, item) {
  if (item.data && listener.path) {
    return has(item.data, listener.path) || ancestorRemoved(item.data, listener.path);
  }

  return true;
}

module.exports = listenerMatch;

},{"../../custom-lodash":1,"../constants":2,"./ancestorRemoved":9}],14:[function(acdlreq,module,exports){
module.exports={
  "version": "2.0.2"
}

},{}]},{},[4])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJjdXN0b20tbG9kYXNoLmpzIiwic3JjL2NvbnN0YW50cy5qcyIsInNyYy9kYXRhTGF5ZXJNYW5hZ2VyLmpzIiwic3JjL2luZGV4LmpzIiwic3JjL2l0ZW0uanMiLCJzcmMvaXRlbUNvbnN0cmFpbnRzLmpzIiwic3JjL2xpc3RlbmVyLmpzIiwic3JjL2xpc3RlbmVyTWFuYWdlci5qcyIsInNyYy91dGlscy9hbmNlc3RvclJlbW92ZWQuanMiLCJzcmMvdXRpbHMvY3VzdG9tTWVyZ2UuanMiLCJzcmMvdXRpbHMvZGF0YU1hdGNoZXNDb250cmFpbnRzLmpzIiwic3JjL3V0aWxzL2luZGV4T2ZMaXN0ZW5lci5qcyIsInNyYy91dGlscy9saXN0ZW5lck1hdGNoLmpzIiwidmVyc2lvbi5qc29uIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDaERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25KQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9EQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIExvZGFzaCAoQ3VzdG9tIEJ1aWxkKSBsb2Rhc2guY29tL2xpY2Vuc2UgfCBVbmRlcnNjb3JlLmpzIDEuOC4zIHVuZGVyc2NvcmVqcy5vcmcvTElDRU5TRVxuICogQnVpbGQ6IGBsb2Rhc2ggZXhwb3J0cz1cIm5vZGVcIiBpbmNsdWRlPVwiY2xvbmVEZWVwLGNsb25lRGVlcFdpdGgsZmluZCxnZXQsaGFzLGluY2x1ZGVzLGlzRW1wdHksaXNFcXVhbCxpc051bGwsaXNQbGFpbk9iamVjdCxpc09iamVjdCxtZXJnZSxtZXJnZVdpdGgsb21pdCxyZWplY3RcIiAtcCAtbyBjdXN0b20tbG9kYXNoLmpzYFxuICovXG47KGZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCh0LGUsbil7c3dpdGNoKG4ubGVuZ3RoKXtjYXNlIDA6cmV0dXJuIHQuY2FsbChlKTtjYXNlIDE6cmV0dXJuIHQuY2FsbChlLG5bMF0pO2Nhc2UgMjpyZXR1cm4gdC5jYWxsKGUsblswXSxuWzFdKTtjYXNlIDM6cmV0dXJuIHQuY2FsbChlLG5bMF0sblsxXSxuWzJdKX1yZXR1cm4gdC5hcHBseShlLG4pfWZ1bmN0aW9uIGUodCxlKXtmb3IodmFyIG49LTEscj1udWxsPT10PzA6dC5sZW5ndGg7KytuPHImJmZhbHNlIT09ZSh0W25dLG4sdCk7KTt9ZnVuY3Rpb24gbih0LGUpe2Zvcih2YXIgbj0tMSxyPW51bGw9PXQ/MDp0Lmxlbmd0aCxvPTAsdT1bXTsrK248cjspe3ZhciBjPXRbbl07ZShjLG4sdCkmJih1W28rK109Yyl9cmV0dXJuIHV9ZnVuY3Rpb24gcih0LGUpe2Zvcih2YXIgbj0tMSxyPW51bGw9PXQ/MDp0Lmxlbmd0aCxvPUFycmF5KHIpOysrbjxyOylvW25dPWUodFtuXSxuLHQpO3JldHVybiBvfWZ1bmN0aW9uIG8odCxlKXtmb3IodmFyIG49LTEscj1lLmxlbmd0aCxvPXQubGVuZ3RoOysrbjxyOyl0W28rbl09ZVtuXTtcbnJldHVybiB0fWZ1bmN0aW9uIHUodCxlKXtmb3IodmFyIG49LTEscj1udWxsPT10PzA6dC5sZW5ndGg7KytuPHI7KWlmKGUodFtuXSxuLHQpKXJldHVybiB0cnVlO3JldHVybiBmYWxzZX1mdW5jdGlvbiBjKHQsZSxuKXt2YXIgcj10Lmxlbmd0aDtmb3Iobis9LTE7KytuPHI7KWlmKGUodFtuXSxuLHQpKXJldHVybiBuO3JldHVybi0xfWZ1bmN0aW9uIGkodCl7cmV0dXJuIHQhPT10fWZ1bmN0aW9uIGEodCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVybiBudWxsPT1lP3JlOmVbdF19fWZ1bmN0aW9uIGYodCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVybiB0KGUpfX1mdW5jdGlvbiBsKHQsZSl7cmV0dXJuIHIoZSxmdW5jdGlvbihlKXtyZXR1cm4gdFtlXX0pfWZ1bmN0aW9uIHModCl7dmFyIGU9LTEsbj1BcnJheSh0LnNpemUpO3JldHVybiB0LmZvckVhY2goZnVuY3Rpb24odCxyKXtuWysrZV09W3IsdF19KSxufWZ1bmN0aW9uIGIodCl7dmFyIGU9T2JqZWN0O3JldHVybiBmdW5jdGlvbihuKXtyZXR1cm4gdChlKG4pKTtcbn19ZnVuY3Rpb24gaCh0KXt2YXIgZT0tMSxuPUFycmF5KHQuc2l6ZSk7cmV0dXJuIHQuZm9yRWFjaChmdW5jdGlvbih0KXtuWysrZV09dH0pLG59ZnVuY3Rpb24gcCgpe31mdW5jdGlvbiB5KHQpe3ZhciBlPS0xLG49bnVsbD09dD8wOnQubGVuZ3RoO2Zvcih0aGlzLmNsZWFyKCk7KytlPG47KXt2YXIgcj10W2VdO3RoaXMuc2V0KHJbMF0sclsxXSl9fWZ1bmN0aW9uIGoodCl7dmFyIGU9LTEsbj1udWxsPT10PzA6dC5sZW5ndGg7Zm9yKHRoaXMuY2xlYXIoKTsrK2U8bjspe3ZhciByPXRbZV07dGhpcy5zZXQoclswXSxyWzFdKX19ZnVuY3Rpb24gXyh0KXt2YXIgZT0tMSxuPW51bGw9PXQ/MDp0Lmxlbmd0aDtmb3IodGhpcy5jbGVhcigpOysrZTxuOyl7dmFyIHI9dFtlXTt0aGlzLnNldChyWzBdLHJbMV0pfX1mdW5jdGlvbiBnKHQpe3ZhciBlPS0xLG49bnVsbD09dD8wOnQubGVuZ3RoO2Zvcih0aGlzLl9fZGF0YV9fPW5ldyBfOysrZTxuOyl0aGlzLmFkZCh0W2VdKX1mdW5jdGlvbiB2KHQpe1xudGhpcy5zaXplPSh0aGlzLl9fZGF0YV9fPW5ldyBqKHQpKS5zaXplfWZ1bmN0aW9uIGQodCxlKXt2YXIgbj14bih0KSxyPSFuJiZ6bih0KSxvPSFuJiYhciYmRW4odCksdT0hbiYmIXImJiFvJiZNbih0KTtpZihuPW58fHJ8fG98fHUpe2Zvcih2YXIgcj10Lmxlbmd0aCxjPVN0cmluZyxpPS0xLGE9QXJyYXkocik7KytpPHI7KWFbaV09YyhpKTtyPWF9ZWxzZSByPVtdO3ZhciBmLGM9ci5sZW5ndGg7Zm9yKGYgaW4gdCkhZSYmIVVlLmNhbGwodCxmKXx8biYmKFwibGVuZ3RoXCI9PWZ8fG8mJihcIm9mZnNldFwiPT1mfHxcInBhcmVudFwiPT1mKXx8dSYmKFwiYnVmZmVyXCI9PWZ8fFwiYnl0ZUxlbmd0aFwiPT1mfHxcImJ5dGVPZmZzZXRcIj09Zil8fHZ0KGYsYykpfHxyLnB1c2goZik7cmV0dXJuIHJ9ZnVuY3Rpb24gQSh0LGUsbil7KG49PT1yZXx8RnQodFtlXSxuKSkmJihuIT09cmV8fGUgaW4gdCl8fGsodCxlLG4pfWZ1bmN0aW9uIHcodCxlLG4pe3ZhciByPXRbZV07VWUuY2FsbCh0LGUpJiZGdChyLG4pJiYobiE9PXJlfHxlIGluIHQpfHxrKHQsZSxuKTtcbn1mdW5jdGlvbiBtKHQsZSl7Zm9yKHZhciBuPXQubGVuZ3RoO24tLTspaWYoRnQodFtuXVswXSxlKSlyZXR1cm4gbjtyZXR1cm4tMX1mdW5jdGlvbiBPKHQsZSl7cmV0dXJuIHQmJmV0KGUsSnQoZSksdCl9ZnVuY3Rpb24gUyh0LGUpe3JldHVybiB0JiZldChlLEt0KGUpLHQpfWZ1bmN0aW9uIGsodCxlLG4pe1wiX19wcm90b19fXCI9PWUmJlFlP1FlKHQsZSx7Y29uZmlndXJhYmxlOnRydWUsZW51bWVyYWJsZTp0cnVlLHZhbHVlOm4sd3JpdGFibGU6dHJ1ZX0pOnRbZV09bn1mdW5jdGlvbiB6KHQsbixyLG8sdSxjKXt2YXIgaSxhPTEmbixmPTImbixsPTQmbjtpZihyJiYoaT11P3IodCxvLHUsYyk6cih0KSksaSE9PXJlKXJldHVybiBpO2lmKCFCdCh0KSlyZXR1cm4gdDtpZihvPXhuKHQpKXtpZihpPXl0KHQpLCFhKXJldHVybiB0dCh0LGkpfWVsc2V7dmFyIHM9bW4odCksYj1cIltvYmplY3QgRnVuY3Rpb25dXCI9PXN8fFwiW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl1cIj09cztpZihFbih0KSlyZXR1cm4gWCh0LGEpO1xuaWYoXCJbb2JqZWN0IE9iamVjdF1cIj09c3x8XCJbb2JqZWN0IEFyZ3VtZW50c11cIj09c3x8YiYmIXUpe2lmKGk9Znx8Yj97fTpqdCh0KSwhYSlyZXR1cm4gZj9ydCh0LFMoaSx0KSk6bnQodCxPKGksdCkpfWVsc2V7aWYoIWdlW3NdKXJldHVybiB1P3Q6e307aT1fdCh0LHMsYSl9fWlmKGN8fChjPW5ldyB2KSx1PWMuZ2V0KHQpKXJldHVybiB1O2lmKGMuc2V0KHQsaSksRm4odCkpcmV0dXJuIHQuZm9yRWFjaChmdW5jdGlvbihlKXtpLmFkZCh6KGUsbixyLGUsdCxjKSl9KSxpO2lmKEluKHQpKXJldHVybiB0LmZvckVhY2goZnVuY3Rpb24oZSxvKXtpLnNldChvLHooZSxuLHIsbyx0LGMpKX0pLGk7dmFyIGY9bD9mP2Z0OmF0OmY/S3Q6SnQsaD1vP3JlOmYodCk7cmV0dXJuIGUoaHx8dCxmdW5jdGlvbihlLG8pe2gmJihvPWUsZT10W29dKSx3KGksbyx6KGUsbixyLG8sdCxjKSl9KSxpfWZ1bmN0aW9uIHgodCxlKXt2YXIgbj1bXTtyZXR1cm4gZ24odCxmdW5jdGlvbih0LHIsbyl7ZSh0LHIsbykmJm4ucHVzaCh0KTtcbn0pLG59ZnVuY3Rpb24gRSh0LGUsbixyLHUpe3ZhciBjPS0xLGk9dC5sZW5ndGg7Zm9yKG58fChuPWd0KSx1fHwodT1bXSk7KytjPGk7KXt2YXIgYT10W2NdOzA8ZSYmbihhKT8xPGU/RShhLGUtMSxuLHIsdSk6byh1LGEpOnJ8fCh1W3UubGVuZ3RoXT1hKX1yZXR1cm4gdX1mdW5jdGlvbiBJKHQsZSl7ZT1RKGUsdCk7Zm9yKHZhciBuPTAscj1lLmxlbmd0aDtudWxsIT10JiZuPHI7KXQ9dFtPdChlW24rK10pXTtyZXR1cm4gbiYmbj09cj90OnJlfWZ1bmN0aW9uIEYodCxlLG4pe3JldHVybiBlPWUodCkseG4odCk/ZTpvKGUsbih0KSl9ZnVuY3Rpb24gTSh0KXtpZihudWxsPT10KXQ9dD09PXJlP1wiW29iamVjdCBVbmRlZmluZWRdXCI6XCJbb2JqZWN0IE51bGxdXCI7ZWxzZSBpZihLZSYmS2UgaW4gT2JqZWN0KHQpKXt2YXIgZT1VZS5jYWxsKHQsS2UpLG49dFtLZV07dHJ5e3RbS2VdPXJlO3ZhciByPXRydWV9Y2F0Y2godCl7fXZhciBvPVBlLmNhbGwodCk7ciYmKGU/dFtLZV09bjpkZWxldGUgdFtLZV0pLFxudD1vfWVsc2UgdD1QZS5jYWxsKHQpO3JldHVybiB0fWZ1bmN0aW9uICQodCxlKXtyZXR1cm4gbnVsbCE9dCYmVWUuY2FsbCh0LGUpfWZ1bmN0aW9uIEQodCxlKXtyZXR1cm4gbnVsbCE9dCYmZSBpbiBPYmplY3QodCl9ZnVuY3Rpb24gVSh0KXtyZXR1cm4gUHQodCkmJlwiW29iamVjdCBBcmd1bWVudHNdXCI9PU0odCl9ZnVuY3Rpb24gQih0LGUsbixyLG8pe2lmKHQ9PT1lKWU9dHJ1ZTtlbHNlIGlmKG51bGw9PXR8fG51bGw9PWV8fCFQdCh0KSYmIVB0KGUpKWU9dCE9PXQmJmUhPT1lO2Vsc2UgdDp7dmFyIHU9eG4odCksYz14bihlKSxpPXU/XCJbb2JqZWN0IEFycmF5XVwiOm1uKHQpLGE9Yz9cIltvYmplY3QgQXJyYXldXCI6bW4oZSksaT1cIltvYmplY3QgQXJndW1lbnRzXVwiPT1pP1wiW29iamVjdCBPYmplY3RdXCI6aSxhPVwiW29iamVjdCBBcmd1bWVudHNdXCI9PWE/XCJbb2JqZWN0IE9iamVjdF1cIjphLGY9XCJbb2JqZWN0IE9iamVjdF1cIj09aSxjPVwiW29iamVjdCBPYmplY3RdXCI9PWE7aWYoKGE9aT09YSkmJkVuKHQpKXtcbmlmKCFFbihlKSl7ZT1mYWxzZTticmVhayB0fXU9dHJ1ZSxmPWZhbHNlfWlmKGEmJiFmKW98fChvPW5ldyB2KSxlPXV8fE1uKHQpP2N0KHQsZSxuLHIsQixvKTppdCh0LGUsaSxuLHIsQixvKTtlbHNle2lmKCEoMSZuKSYmKHU9ZiYmVWUuY2FsbCh0LFwiX193cmFwcGVkX19cIiksaT1jJiZVZS5jYWxsKGUsXCJfX3dyYXBwZWRfX1wiKSx1fHxpKSl7dD11P3QudmFsdWUoKTp0LGU9aT9lLnZhbHVlKCk6ZSxvfHwobz1uZXcgdiksZT1CKHQsZSxuLHIsbyk7YnJlYWsgdH1pZihhKWU6aWYob3x8KG89bmV3IHYpLHU9MSZuLGk9YXQodCksYz1pLmxlbmd0aCxhPWF0KGUpLmxlbmd0aCxjPT1hfHx1KXtmb3IoZj1jO2YtLTspe3ZhciBsPWlbZl07aWYoISh1P2wgaW4gZTpVZS5jYWxsKGUsbCkpKXtlPWZhbHNlO2JyZWFrIGV9fWlmKChhPW8uZ2V0KHQpKSYmby5nZXQoZSkpZT1hPT1lO2Vsc2V7YT10cnVlLG8uc2V0KHQsZSksby5zZXQoZSx0KTtmb3IodmFyIHM9dTsrK2Y8Yzspe3ZhciBsPWlbZl0sYj10W2xdLGg9ZVtsXTtcbmlmKHIpdmFyIHA9dT9yKGgsYixsLGUsdCxvKTpyKGIsaCxsLHQsZSxvKTtpZihwPT09cmU/YiE9PWgmJiFCKGIsaCxuLHIsbyk6IXApe2E9ZmFsc2U7YnJlYWt9c3x8KHM9XCJjb25zdHJ1Y3RvclwiPT1sKX1hJiYhcyYmKG49dC5jb25zdHJ1Y3RvcixyPWUuY29uc3RydWN0b3IsbiE9ciYmXCJjb25zdHJ1Y3RvclwiaW4gdCYmXCJjb25zdHJ1Y3RvclwiaW4gZSYmISh0eXBlb2Ygbj09XCJmdW5jdGlvblwiJiZuIGluc3RhbmNlb2YgbiYmdHlwZW9mIHI9PVwiZnVuY3Rpb25cIiYmciBpbnN0YW5jZW9mIHIpJiYoYT1mYWxzZSkpLG8uZGVsZXRlKHQpLG8uZGVsZXRlKGUpLGU9YX19ZWxzZSBlPWZhbHNlO2Vsc2UgZT1mYWxzZX19cmV0dXJuIGV9ZnVuY3Rpb24gUCh0KXtyZXR1cm4gUHQodCkmJlwiW29iamVjdCBNYXBdXCI9PW1uKHQpfWZ1bmN0aW9uIEwodCxlKXt2YXIgbj1lLmxlbmd0aCxyPW47aWYobnVsbD09dClyZXR1cm4hcjtmb3IodD1PYmplY3QodCk7bi0tOyl7dmFyIG89ZVtuXTtpZihvWzJdP29bMV0hPT10W29bMF1dOiEob1swXWluIHQpKXJldHVybiBmYWxzZTtcbn1mb3IoOysrbjxyOyl7dmFyIG89ZVtuXSx1PW9bMF0sYz10W3VdLGk9b1sxXTtpZihvWzJdKXtpZihjPT09cmUmJiEodSBpbiB0KSlyZXR1cm4gZmFsc2V9ZWxzZSBpZihvPW5ldyB2LHZvaWQgMD09PXJlPyFCKGksYywzLHZvaWQgMCxvKToxKXJldHVybiBmYWxzZX1yZXR1cm4gdHJ1ZX1mdW5jdGlvbiBOKHQpe3JldHVybiBQdCh0KSYmXCJbb2JqZWN0IFNldF1cIj09bW4odCl9ZnVuY3Rpb24gQyh0KXtyZXR1cm4gUHQodCkmJlV0KHQubGVuZ3RoKSYmISFfZVtNKHQpXX1mdW5jdGlvbiBUKHQpe3JldHVybiB0eXBlb2YgdD09XCJmdW5jdGlvblwiP3Q6bnVsbD09dD9ZdDp0eXBlb2YgdD09XCJvYmplY3RcIj94bih0KT9XKHRbMF0sdFsxXSk6Uih0KTp0ZSh0KX1mdW5jdGlvbiBWKHQpe2lmKCFBdCh0KSlyZXR1cm4gWmUodCk7dmFyIGUsbj1bXTtmb3IoZSBpbiBPYmplY3QodCkpVWUuY2FsbCh0LGUpJiZcImNvbnN0cnVjdG9yXCIhPWUmJm4ucHVzaChlKTtyZXR1cm4gbn1mdW5jdGlvbiBSKHQpe3ZhciBlPWJ0KHQpO1xucmV0dXJuIDE9PWUubGVuZ3RoJiZlWzBdWzJdP3d0KGVbMF1bMF0sZVswXVsxXSk6ZnVuY3Rpb24obil7cmV0dXJuIG49PT10fHxMKG4sZSl9fWZ1bmN0aW9uIFcodCxlKXtyZXR1cm4gZHQodCkmJmU9PT1lJiYhQnQoZSk/d3QoT3QodCksZSk6ZnVuY3Rpb24obil7dmFyIHI9R3Qobix0KTtyZXR1cm4gcj09PXJlJiZyPT09ZT9IdChuLHQpOkIoZSxyLDMpfX1mdW5jdGlvbiBxKHQsZSxuLHIsbyl7dCE9PWUmJnZuKGUsZnVuY3Rpb24odSxjKXtpZihCdCh1KSl7b3x8KG89bmV3IHYpO3ZhciBpPW8sYT1cIl9fcHJvdG9fX1wiPT1jP3JlOnRbY10sZj1cIl9fcHJvdG9fX1wiPT1jP3JlOmVbY10sbD1pLmdldChmKTtpZihsKUEodCxjLGwpO2Vsc2V7dmFyIGw9cj9yKGEsZixjK1wiXCIsdCxlLGkpOnJlLHM9bD09PXJlO2lmKHMpe3ZhciBiPXhuKGYpLGg9IWImJkVuKGYpLHA9IWImJiFoJiZNbihmKSxsPWY7Ynx8aHx8cD94bihhKT9sPWE6JHQoYSk/bD10dChhKTpoPyhzPWZhbHNlLGw9WChmLHRydWUpKTpwPyhzPWZhbHNlLFxubD1aKGYsdHJ1ZSkpOmw9W106THQoZil8fHpuKGYpPyhsPWEsem4oYSk/bD1XdChhKTooIUJ0KGEpfHxuJiZEdChhKSkmJihsPWp0KGYpKSk6cz1mYWxzZX1zJiYoaS5zZXQoZixsKSxxKGwsZixuLHIsaSksaS5kZWxldGUoZikpLEEodCxjLGwpfX1lbHNlIGk9cj9yKFwiX19wcm90b19fXCI9PWM/cmU6dFtjXSx1LGMrXCJcIix0LGUsbyk6cmUsaT09PXJlJiYoaT11KSxBKHQsYyxpKX0sS3QpfWZ1bmN0aW9uIEcodCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVybiBJKGUsdCl9fWZ1bmN0aW9uIEgodCl7cmV0dXJuIE9uKG10KHQsdm9pZCAwLFl0KSx0K1wiXCIpfWZ1bmN0aW9uIEoodCl7aWYodHlwZW9mIHQ9PVwic3RyaW5nXCIpcmV0dXJuIHQ7aWYoeG4odCkpcmV0dXJuIHIodCxKKStcIlwiO2lmKEN0KHQpKXJldHVybiBqbj9qbi5jYWxsKHQpOlwiXCI7dmFyIGU9dCtcIlwiO3JldHVyblwiMFwiPT1lJiYxL3Q9PS1vZT9cIi0wXCI6ZX1mdW5jdGlvbiBLKHQsZSl7ZT1RKGUsdCk7dmFyIG47aWYoMj5lLmxlbmd0aCluPXQ7ZWxzZXtcbm49ZTt2YXIgcj0wLG89LTEsdT0tMSxjPW4ubGVuZ3RoO2ZvcigwPnImJihyPS1yPmM/MDpjK3IpLG89bz5jP2M6bywwPm8mJihvKz1jKSxjPXI+bz8wOm8tcj4+PjAscj4+Pj0wLG89QXJyYXkoYyk7Kyt1PGM7KW9bdV09blt1K3JdO249SSh0LG8pfXQ9bixudWxsPT10fHxkZWxldGUgdFtPdCh4dChlKSldfWZ1bmN0aW9uIFEodCxlKXtyZXR1cm4geG4odCk/dDpkdCh0LGUpP1t0XTpTbihxdCh0KSl9ZnVuY3Rpb24gWCh0LGUpe2lmKGUpcmV0dXJuIHQuc2xpY2UoKTt2YXIgbj10Lmxlbmd0aCxuPVJlP1JlKG4pOm5ldyB0LmNvbnN0cnVjdG9yKG4pO3JldHVybiB0LmNvcHkobiksbn1mdW5jdGlvbiBZKHQpe3ZhciBlPW5ldyB0LmNvbnN0cnVjdG9yKHQuYnl0ZUxlbmd0aCk7cmV0dXJuIG5ldyBWZShlKS5zZXQobmV3IFZlKHQpKSxlfWZ1bmN0aW9uIFoodCxlKXtyZXR1cm4gbmV3IHQuY29uc3RydWN0b3IoZT9ZKHQuYnVmZmVyKTp0LmJ1ZmZlcix0LmJ5dGVPZmZzZXQsdC5sZW5ndGgpO1xufWZ1bmN0aW9uIHR0KHQsZSl7dmFyIG49LTEscj10Lmxlbmd0aDtmb3IoZXx8KGU9QXJyYXkocikpOysrbjxyOyllW25dPXRbbl07cmV0dXJuIGV9ZnVuY3Rpb24gZXQodCxlLG4pe3ZhciByPSFuO258fChuPXt9KTtmb3IodmFyIG89LTEsdT1lLmxlbmd0aDsrK288dTspe3ZhciBjPWVbb10saT1yZTtpPT09cmUmJihpPXRbY10pLHI/ayhuLGMsaSk6dyhuLGMsaSl9cmV0dXJuIG59ZnVuY3Rpb24gbnQodCxlKXtyZXR1cm4gZXQodCxBbih0KSxlKX1mdW5jdGlvbiBydCh0LGUpe3JldHVybiBldCh0LHduKHQpLGUpfWZ1bmN0aW9uIG90KHQpe3JldHVybiBIKGZ1bmN0aW9uKGUsbil7dmFyIHIsbz0tMSx1PW4ubGVuZ3RoLGM9MTx1P25bdS0xXTpyZSxpPTI8dT9uWzJdOnJlLGM9Mzx0Lmxlbmd0aCYmdHlwZW9mIGM9PVwiZnVuY3Rpb25cIj8odS0tLGMpOnJlO2lmKHI9aSl7cj1uWzBdO3ZhciBhPW5bMV07aWYoQnQoaSkpe3ZhciBmPXR5cGVvZiBhO3I9ISEoXCJudW1iZXJcIj09Zj9NdChpKSYmdnQoYSxpLmxlbmd0aCk6XCJzdHJpbmdcIj09ZiYmYSBpbiBpKSYmRnQoaVthXSxyKTtcbn1lbHNlIHI9ZmFsc2V9Zm9yKHImJihjPTM+dT9yZTpjLHU9MSksZT1PYmplY3QoZSk7KytvPHU7KShpPW5bb10pJiZ0KGUsaSxvLGMpO3JldHVybiBlfSl9ZnVuY3Rpb24gdXQodCl7cmV0dXJuIEx0KHQpP3JlOnR9ZnVuY3Rpb24gY3QodCxlLG4scixvLGMpe3ZhciBpPTEmbixhPXQubGVuZ3RoLGY9ZS5sZW5ndGg7aWYoYSE9ZiYmIShpJiZmPmEpKXJldHVybiBmYWxzZTtpZigoZj1jLmdldCh0KSkmJmMuZ2V0KGUpKXJldHVybiBmPT1lO3ZhciBmPS0xLGw9dHJ1ZSxzPTImbj9uZXcgZzpyZTtmb3IoYy5zZXQodCxlKSxjLnNldChlLHQpOysrZjxhOyl7dmFyIGI9dFtmXSxoPWVbZl07aWYocil2YXIgcD1pP3IoaCxiLGYsZSx0LGMpOnIoYixoLGYsdCxlLGMpO2lmKHAhPT1yZSl7aWYocCljb250aW51ZTtsPWZhbHNlO2JyZWFrfWlmKHMpe2lmKCF1KGUsZnVuY3Rpb24odCxlKXtpZighcy5oYXMoZSkmJihiPT09dHx8byhiLHQsbixyLGMpKSlyZXR1cm4gcy5wdXNoKGUpfSkpe2w9ZmFsc2U7YnJlYWt9fWVsc2UgaWYoYiE9PWgmJiFvKGIsaCxuLHIsYykpe1xubD1mYWxzZTticmVha319cmV0dXJuIGMuZGVsZXRlKHQpLGMuZGVsZXRlKGUpLGx9ZnVuY3Rpb24gaXQodCxlLG4scixvLHUsYyl7c3dpdGNoKG4pe2Nhc2VcIltvYmplY3QgRGF0YVZpZXddXCI6aWYodC5ieXRlTGVuZ3RoIT1lLmJ5dGVMZW5ndGh8fHQuYnl0ZU9mZnNldCE9ZS5ieXRlT2Zmc2V0KWJyZWFrO3Q9dC5idWZmZXIsZT1lLmJ1ZmZlcjtjYXNlXCJbb2JqZWN0IEFycmF5QnVmZmVyXVwiOmlmKHQuYnl0ZUxlbmd0aCE9ZS5ieXRlTGVuZ3RofHwhdShuZXcgVmUodCksbmV3IFZlKGUpKSlicmVhaztyZXR1cm4gdHJ1ZTtjYXNlXCJbb2JqZWN0IEJvb2xlYW5dXCI6Y2FzZVwiW29iamVjdCBEYXRlXVwiOmNhc2VcIltvYmplY3QgTnVtYmVyXVwiOnJldHVybiBGdCgrdCwrZSk7Y2FzZVwiW29iamVjdCBFcnJvcl1cIjpyZXR1cm4gdC5uYW1lPT1lLm5hbWUmJnQubWVzc2FnZT09ZS5tZXNzYWdlO2Nhc2VcIltvYmplY3QgUmVnRXhwXVwiOmNhc2VcIltvYmplY3QgU3RyaW5nXVwiOnJldHVybiB0PT1lK1wiXCI7Y2FzZVwiW29iamVjdCBNYXBdXCI6XG52YXIgaT1zO2Nhc2VcIltvYmplY3QgU2V0XVwiOmlmKGl8fChpPWgpLHQuc2l6ZSE9ZS5zaXplJiYhKDEmcikpYnJlYWs7cmV0dXJuKG49Yy5nZXQodCkpP249PWU6KHJ8PTIsYy5zZXQodCxlKSxlPWN0KGkodCksaShlKSxyLG8sdSxjKSxjLmRlbGV0ZSh0KSxlKTtjYXNlXCJbb2JqZWN0IFN5bWJvbF1cIjppZih5bilyZXR1cm4geW4uY2FsbCh0KT09eW4uY2FsbChlKX1yZXR1cm4gZmFsc2V9ZnVuY3Rpb24gYXQodCl7cmV0dXJuIEYodCxKdCxBbil9ZnVuY3Rpb24gZnQodCl7cmV0dXJuIEYodCxLdCx3bil9ZnVuY3Rpb24gbHQoKXt2YXIgdD1wLml0ZXJhdGVlfHxadCx0PXQ9PT1adD9UOnQ7cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGg/dChhcmd1bWVudHNbMF0sYXJndW1lbnRzWzFdKTp0fWZ1bmN0aW9uIHN0KHQsZSl7dmFyIG49dC5fX2RhdGFfXyxyPXR5cGVvZiBlO3JldHVybihcInN0cmluZ1wiPT1yfHxcIm51bWJlclwiPT1yfHxcInN5bWJvbFwiPT1yfHxcImJvb2xlYW5cIj09cj9cIl9fcHJvdG9fX1wiIT09ZTpudWxsPT09ZSk/blt0eXBlb2YgZT09XCJzdHJpbmdcIj9cInN0cmluZ1wiOlwiaGFzaFwiXTpuLm1hcDtcbn1mdW5jdGlvbiBidCh0KXtmb3IodmFyIGU9SnQodCksbj1lLmxlbmd0aDtuLS07KXt2YXIgcj1lW25dLG89dFtyXTtlW25dPVtyLG8sbz09PW8mJiFCdChvKV19cmV0dXJuIGV9ZnVuY3Rpb24gaHQodCxlKXt2YXIgbj1udWxsPT10P3JlOnRbZV07cmV0dXJuKCFCdChuKXx8QmUmJkJlIGluIG4/MDooRHQobik/TmU6cGUpLnRlc3QoU3QobikpKT9uOnJlfWZ1bmN0aW9uIHB0KHQsZSxuKXtlPVEoZSx0KTtmb3IodmFyIHI9LTEsbz1lLmxlbmd0aCx1PWZhbHNlOysrcjxvOyl7dmFyIGM9T3QoZVtyXSk7aWYoISh1PW51bGwhPXQmJm4odCxjKSkpYnJlYWs7dD10W2NdfXJldHVybiB1fHwrK3IhPW8/dToobz1udWxsPT10PzA6dC5sZW5ndGgsISFvJiZVdChvKSYmdnQoYyxvKSYmKHhuKHQpfHx6bih0KSkpfWZ1bmN0aW9uIHl0KHQpe3ZhciBlPXQubGVuZ3RoLG49bmV3IHQuY29uc3RydWN0b3IoZSk7cmV0dXJuIGUmJlwic3RyaW5nXCI9PXR5cGVvZiB0WzBdJiZVZS5jYWxsKHQsXCJpbmRleFwiKSYmKG4uaW5kZXg9dC5pbmRleCxcbm4uaW5wdXQ9dC5pbnB1dCksbn1mdW5jdGlvbiBqdCh0KXtyZXR1cm4gdHlwZW9mIHQuY29uc3RydWN0b3IhPVwiZnVuY3Rpb25cInx8QXQodCk/e306X24oV2UodCkpfWZ1bmN0aW9uIF90KHQsZSxuKXt2YXIgcj10LmNvbnN0cnVjdG9yO3N3aXRjaChlKXtjYXNlXCJbb2JqZWN0IEFycmF5QnVmZmVyXVwiOnJldHVybiBZKHQpO2Nhc2VcIltvYmplY3QgQm9vbGVhbl1cIjpjYXNlXCJbb2JqZWN0IERhdGVdXCI6cmV0dXJuIG5ldyByKCt0KTtjYXNlXCJbb2JqZWN0IERhdGFWaWV3XVwiOnJldHVybiBlPW4/WSh0LmJ1ZmZlcik6dC5idWZmZXIsbmV3IHQuY29uc3RydWN0b3IoZSx0LmJ5dGVPZmZzZXQsdC5ieXRlTGVuZ3RoKTtjYXNlXCJbb2JqZWN0IEZsb2F0MzJBcnJheV1cIjpjYXNlXCJbb2JqZWN0IEZsb2F0NjRBcnJheV1cIjpjYXNlXCJbb2JqZWN0IEludDhBcnJheV1cIjpjYXNlXCJbb2JqZWN0IEludDE2QXJyYXldXCI6Y2FzZVwiW29iamVjdCBJbnQzMkFycmF5XVwiOmNhc2VcIltvYmplY3QgVWludDhBcnJheV1cIjpcbmNhc2VcIltvYmplY3QgVWludDhDbGFtcGVkQXJyYXldXCI6Y2FzZVwiW29iamVjdCBVaW50MTZBcnJheV1cIjpjYXNlXCJbb2JqZWN0IFVpbnQzMkFycmF5XVwiOnJldHVybiBaKHQsbik7Y2FzZVwiW29iamVjdCBNYXBdXCI6cmV0dXJuIG5ldyByO2Nhc2VcIltvYmplY3QgTnVtYmVyXVwiOmNhc2VcIltvYmplY3QgU3RyaW5nXVwiOnJldHVybiBuZXcgcih0KTtjYXNlXCJbb2JqZWN0IFJlZ0V4cF1cIjpyZXR1cm4gZT1uZXcgdC5jb25zdHJ1Y3Rvcih0LnNvdXJjZSxzZS5leGVjKHQpKSxlLmxhc3RJbmRleD10Lmxhc3RJbmRleCxlO2Nhc2VcIltvYmplY3QgU2V0XVwiOnJldHVybiBuZXcgcjtjYXNlXCJbb2JqZWN0IFN5bWJvbF1cIjpyZXR1cm4geW4/T2JqZWN0KHluLmNhbGwodCkpOnt9fX1mdW5jdGlvbiBndCh0KXtyZXR1cm4geG4odCl8fHpuKHQpfHwhIShKZSYmdCYmdFtKZV0pfWZ1bmN0aW9uIHZ0KHQsZSl7dmFyIG49dHlwZW9mIHQ7cmV0dXJuIGU9bnVsbD09ZT85MDA3MTk5MjU0NzQwOTkxOmUsISFlJiYoXCJudW1iZXJcIj09bnx8XCJzeW1ib2xcIiE9biYmamUudGVzdCh0KSkmJi0xPHQmJjA9PXQlMSYmdDxlO1xufWZ1bmN0aW9uIGR0KHQsZSl7aWYoeG4odCkpcmV0dXJuIGZhbHNlO3ZhciBuPXR5cGVvZiB0O3JldHVybiEoXCJudW1iZXJcIiE9biYmXCJzeW1ib2xcIiE9biYmXCJib29sZWFuXCIhPW4mJm51bGwhPXQmJiFDdCh0KSl8fChpZS50ZXN0KHQpfHwhY2UudGVzdCh0KXx8bnVsbCE9ZSYmdCBpbiBPYmplY3QoZSkpfWZ1bmN0aW9uIEF0KHQpe3ZhciBlPXQmJnQuY29uc3RydWN0b3I7cmV0dXJuIHQ9PT0odHlwZW9mIGU9PVwiZnVuY3Rpb25cIiYmZS5wcm90b3R5cGV8fE1lKX1mdW5jdGlvbiB3dCh0LGUpe3JldHVybiBmdW5jdGlvbihuKXtyZXR1cm4gbnVsbCE9biYmKG5bdF09PT1lJiYoZSE9PXJlfHx0IGluIE9iamVjdChuKSkpfX1mdW5jdGlvbiBtdChlLG4scil7cmV0dXJuIG49dG4obj09PXJlP2UubGVuZ3RoLTE6biwwKSxmdW5jdGlvbigpe2Zvcih2YXIgbz1hcmd1bWVudHMsdT0tMSxjPXRuKG8ubGVuZ3RoLW4sMCksaT1BcnJheShjKTsrK3U8YzspaVt1XT1vW24rdV07Zm9yKHU9LTEsYz1BcnJheShuKzEpOysrdTxuOyljW3VdPW9bdV07XG5yZXR1cm4gY1tuXT1yKGkpLHQoZSx0aGlzLGMpfX1mdW5jdGlvbiBPdCh0KXtpZih0eXBlb2YgdD09XCJzdHJpbmdcInx8Q3QodCkpcmV0dXJuIHQ7dmFyIGU9dCtcIlwiO3JldHVyblwiMFwiPT1lJiYxL3Q9PS1vZT9cIi0wXCI6ZX1mdW5jdGlvbiBTdCh0KXtpZihudWxsIT10KXt0cnl7cmV0dXJuIERlLmNhbGwodCl9Y2F0Y2godCl7fXJldHVybiB0K1wiXCJ9cmV0dXJuXCJcIn1mdW5jdGlvbiBrdCh0LGUsbil7dmFyIHI9bnVsbD09dD8wOnQubGVuZ3RoO3JldHVybiByPyhuPW51bGw9PW4/MDpWdChuKSwwPm4mJihuPXRuKHIrbiwwKSksYyh0LGx0KGUsMyksbikpOi0xfWZ1bmN0aW9uIHp0KHQpe3JldHVybihudWxsPT10PzA6dC5sZW5ndGgpP0UodCwxKTpbXX1mdW5jdGlvbiB4dCh0KXt2YXIgZT1udWxsPT10PzA6dC5sZW5ndGg7cmV0dXJuIGU/dFtlLTFdOnJlfWZ1bmN0aW9uIEV0KHQsZSl7ZnVuY3Rpb24gbigpe3ZhciByPWFyZ3VtZW50cyxvPWU/ZS5hcHBseSh0aGlzLHIpOnJbMF0sdT1uLmNhY2hlO1xucmV0dXJuIHUuaGFzKG8pP3UuZ2V0KG8pOihyPXQuYXBwbHkodGhpcyxyKSxuLmNhY2hlPXUuc2V0KG8scil8fHUscil9aWYodHlwZW9mIHQhPVwiZnVuY3Rpb25cInx8bnVsbCE9ZSYmdHlwZW9mIGUhPVwiZnVuY3Rpb25cIil0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgYSBmdW5jdGlvblwiKTtyZXR1cm4gbi5jYWNoZT1uZXcoRXQuQ2FjaGV8fF8pLG59ZnVuY3Rpb24gSXQodCl7aWYodHlwZW9mIHQhPVwiZnVuY3Rpb25cIil0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgYSBmdW5jdGlvblwiKTtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgZT1hcmd1bWVudHM7c3dpdGNoKGUubGVuZ3RoKXtjYXNlIDA6cmV0dXJuIXQuY2FsbCh0aGlzKTtjYXNlIDE6cmV0dXJuIXQuY2FsbCh0aGlzLGVbMF0pO2Nhc2UgMjpyZXR1cm4hdC5jYWxsKHRoaXMsZVswXSxlWzFdKTtjYXNlIDM6cmV0dXJuIXQuY2FsbCh0aGlzLGVbMF0sZVsxXSxlWzJdKX1yZXR1cm4hdC5hcHBseSh0aGlzLGUpfX1mdW5jdGlvbiBGdCh0LGUpe1xucmV0dXJuIHQ9PT1lfHx0IT09dCYmZSE9PWV9ZnVuY3Rpb24gTXQodCl7cmV0dXJuIG51bGwhPXQmJlV0KHQubGVuZ3RoKSYmIUR0KHQpfWZ1bmN0aW9uICR0KHQpe3JldHVybiBQdCh0KSYmTXQodCl9ZnVuY3Rpb24gRHQodCl7cmV0dXJuISFCdCh0KSYmKHQ9TSh0KSxcIltvYmplY3QgRnVuY3Rpb25dXCI9PXR8fFwiW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl1cIj09dHx8XCJbb2JqZWN0IEFzeW5jRnVuY3Rpb25dXCI9PXR8fFwiW29iamVjdCBQcm94eV1cIj09dCl9ZnVuY3Rpb24gVXQodCl7cmV0dXJuIHR5cGVvZiB0PT1cIm51bWJlclwiJiYtMTx0JiYwPT10JTEmJjkwMDcxOTkyNTQ3NDA5OTE+PXR9ZnVuY3Rpb24gQnQodCl7dmFyIGU9dHlwZW9mIHQ7cmV0dXJuIG51bGwhPXQmJihcIm9iamVjdFwiPT1lfHxcImZ1bmN0aW9uXCI9PWUpfWZ1bmN0aW9uIFB0KHQpe3JldHVybiBudWxsIT10JiZ0eXBlb2YgdD09XCJvYmplY3RcIn1mdW5jdGlvbiBMdCh0KXtyZXR1cm4hKCFQdCh0KXx8XCJbb2JqZWN0IE9iamVjdF1cIiE9TSh0KSkmJih0PVdlKHQpLFxubnVsbD09PXR8fCh0PVVlLmNhbGwodCxcImNvbnN0cnVjdG9yXCIpJiZ0LmNvbnN0cnVjdG9yLHR5cGVvZiB0PT1cImZ1bmN0aW9uXCImJnQgaW5zdGFuY2VvZiB0JiZEZS5jYWxsKHQpPT1MZSkpfWZ1bmN0aW9uIE50KHQpe3JldHVybiB0eXBlb2YgdD09XCJzdHJpbmdcInx8IXhuKHQpJiZQdCh0KSYmXCJbb2JqZWN0IFN0cmluZ11cIj09TSh0KX1mdW5jdGlvbiBDdCh0KXtyZXR1cm4gdHlwZW9mIHQ9PVwic3ltYm9sXCJ8fFB0KHQpJiZcIltvYmplY3QgU3ltYm9sXVwiPT1NKHQpfWZ1bmN0aW9uIFR0KHQpe3JldHVybiB0Pyh0PVJ0KHQpLHQ9PT1vZXx8dD09PS1vZT8xLjc5NzY5MzEzNDg2MjMxNTdlMzA4KigwPnQ/LTE6MSk6dD09PXQ/dDowKTowPT09dD90OjB9ZnVuY3Rpb24gVnQodCl7dD1UdCh0KTt2YXIgZT10JTE7cmV0dXJuIHQ9PT10P2U/dC1lOnQ6MH1mdW5jdGlvbiBSdCh0KXtpZih0eXBlb2YgdD09XCJudW1iZXJcIilyZXR1cm4gdDtpZihDdCh0KSlyZXR1cm4gdWU7aWYoQnQodCkmJih0PXR5cGVvZiB0LnZhbHVlT2Y9PVwiZnVuY3Rpb25cIj90LnZhbHVlT2YoKTp0LFxudD1CdCh0KT90K1wiXCI6dCksdHlwZW9mIHQhPVwic3RyaW5nXCIpcmV0dXJuIDA9PT10P3Q6K3Q7dD10LnJlcGxhY2UoZmUsXCJcIik7dmFyIGU9aGUudGVzdCh0KTtyZXR1cm4gZXx8eWUudGVzdCh0KT9kZSh0LnNsaWNlKDIpLGU/Mjo4KTpiZS50ZXN0KHQpP3VlOit0fWZ1bmN0aW9uIFd0KHQpe3JldHVybiBldCh0LEt0KHQpKX1mdW5jdGlvbiBxdCh0KXtyZXR1cm4gbnVsbD09dD9cIlwiOkoodCl9ZnVuY3Rpb24gR3QodCxlLG4pe3JldHVybiB0PW51bGw9PXQ/cmU6SSh0LGUpLHQ9PT1yZT9uOnR9ZnVuY3Rpb24gSHQodCxlKXtyZXR1cm4gbnVsbCE9dCYmcHQodCxlLEQpfWZ1bmN0aW9uIEp0KHQpe3JldHVybiBNdCh0KT9kKHQpOlYodCl9ZnVuY3Rpb24gS3QodCl7aWYoTXQodCkpdD1kKHQsdHJ1ZSk7ZWxzZSBpZihCdCh0KSl7dmFyIGUsbj1BdCh0KSxyPVtdO2ZvcihlIGluIHQpKFwiY29uc3RydWN0b3JcIiE9ZXx8IW4mJlVlLmNhbGwodCxlKSkmJnIucHVzaChlKTt0PXJ9ZWxzZXtpZihlPVtdLFxubnVsbCE9dClmb3IobiBpbiBPYmplY3QodCkpZS5wdXNoKG4pO3Q9ZX1yZXR1cm4gdH1mdW5jdGlvbiBRdCh0KXtyZXR1cm4gbnVsbD09dD9bXTpsKHQsSnQodCkpfWZ1bmN0aW9uIFh0KHQpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiB0fX1mdW5jdGlvbiBZdCh0KXtyZXR1cm4gdH1mdW5jdGlvbiBadCh0KXtyZXR1cm4gVCh0eXBlb2YgdD09XCJmdW5jdGlvblwiP3Q6eih0LDEpKX1mdW5jdGlvbiB0ZSh0KXtyZXR1cm4gZHQodCk/YShPdCh0KSk6Ryh0KX1mdW5jdGlvbiBlZSgpe3JldHVybltdfWZ1bmN0aW9uIG5lKCl7cmV0dXJuIGZhbHNlfXZhciByZSxvZT0xLzAsdWU9TmFOLGNlPS9cXC58XFxbKD86W15bXFxdXSp8KFtcIiddKSg/Oig/IVxcMSlbXlxcXFxdfFxcXFwuKSo/XFwxKVxcXS8saWU9L15cXHcqJC8sYWU9L1teLltcXF1dK3xcXFsoPzooLT9cXGQrKD86XFwuXFxkKyk/KXwoW1wiJ10pKCg/Oig/IVxcMilbXlxcXFxdfFxcXFwuKSo/KVxcMilcXF18KD89KD86XFwufFxcW1xcXSkoPzpcXC58XFxbXFxdfCQpKS9nLGZlPS9eXFxzK3xcXHMrJC9nLGxlPS9cXFxcKFxcXFwpPy9nLHNlPS9cXHcqJC8sYmU9L15bLStdMHhbMC05YS1mXSskL2ksaGU9L14wYlswMV0rJC9pLHBlPS9eXFxbb2JqZWN0IC4rP0NvbnN0cnVjdG9yXFxdJC8seWU9L14wb1swLTddKyQvaSxqZT0vXig/OjB8WzEtOV1cXGQqKSQvLF9lPXt9O1xuX2VbXCJbb2JqZWN0IEZsb2F0MzJBcnJheV1cIl09X2VbXCJbb2JqZWN0IEZsb2F0NjRBcnJheV1cIl09X2VbXCJbb2JqZWN0IEludDhBcnJheV1cIl09X2VbXCJbb2JqZWN0IEludDE2QXJyYXldXCJdPV9lW1wiW29iamVjdCBJbnQzMkFycmF5XVwiXT1fZVtcIltvYmplY3QgVWludDhBcnJheV1cIl09X2VbXCJbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XVwiXT1fZVtcIltvYmplY3QgVWludDE2QXJyYXldXCJdPV9lW1wiW29iamVjdCBVaW50MzJBcnJheV1cIl09dHJ1ZSxfZVtcIltvYmplY3QgQXJndW1lbnRzXVwiXT1fZVtcIltvYmplY3QgQXJyYXldXCJdPV9lW1wiW29iamVjdCBBcnJheUJ1ZmZlcl1cIl09X2VbXCJbb2JqZWN0IEJvb2xlYW5dXCJdPV9lW1wiW29iamVjdCBEYXRhVmlld11cIl09X2VbXCJbb2JqZWN0IERhdGVdXCJdPV9lW1wiW29iamVjdCBFcnJvcl1cIl09X2VbXCJbb2JqZWN0IEZ1bmN0aW9uXVwiXT1fZVtcIltvYmplY3QgTWFwXVwiXT1fZVtcIltvYmplY3QgTnVtYmVyXVwiXT1fZVtcIltvYmplY3QgT2JqZWN0XVwiXT1fZVtcIltvYmplY3QgUmVnRXhwXVwiXT1fZVtcIltvYmplY3QgU2V0XVwiXT1fZVtcIltvYmplY3QgU3RyaW5nXVwiXT1fZVtcIltvYmplY3QgV2Vha01hcF1cIl09ZmFsc2U7XG52YXIgZ2U9e307Z2VbXCJbb2JqZWN0IEFyZ3VtZW50c11cIl09Z2VbXCJbb2JqZWN0IEFycmF5XVwiXT1nZVtcIltvYmplY3QgQXJyYXlCdWZmZXJdXCJdPWdlW1wiW29iamVjdCBEYXRhVmlld11cIl09Z2VbXCJbb2JqZWN0IEJvb2xlYW5dXCJdPWdlW1wiW29iamVjdCBEYXRlXVwiXT1nZVtcIltvYmplY3QgRmxvYXQzMkFycmF5XVwiXT1nZVtcIltvYmplY3QgRmxvYXQ2NEFycmF5XVwiXT1nZVtcIltvYmplY3QgSW50OEFycmF5XVwiXT1nZVtcIltvYmplY3QgSW50MTZBcnJheV1cIl09Z2VbXCJbb2JqZWN0IEludDMyQXJyYXldXCJdPWdlW1wiW29iamVjdCBNYXBdXCJdPWdlW1wiW29iamVjdCBOdW1iZXJdXCJdPWdlW1wiW29iamVjdCBPYmplY3RdXCJdPWdlW1wiW29iamVjdCBSZWdFeHBdXCJdPWdlW1wiW29iamVjdCBTZXRdXCJdPWdlW1wiW29iamVjdCBTdHJpbmddXCJdPWdlW1wiW29iamVjdCBTeW1ib2xdXCJdPWdlW1wiW29iamVjdCBVaW50OEFycmF5XVwiXT1nZVtcIltvYmplY3QgVWludDhDbGFtcGVkQXJyYXldXCJdPWdlW1wiW29iamVjdCBVaW50MTZBcnJheV1cIl09Z2VbXCJbb2JqZWN0IFVpbnQzMkFycmF5XVwiXT10cnVlLFxuZ2VbXCJbb2JqZWN0IEVycm9yXVwiXT1nZVtcIltvYmplY3QgRnVuY3Rpb25dXCJdPWdlW1wiW29iamVjdCBXZWFrTWFwXVwiXT1mYWxzZTt2YXIgdmUsZGU9cGFyc2VJbnQsQWU9dHlwZW9mIGdsb2JhbD09XCJvYmplY3RcIiYmZ2xvYmFsJiZnbG9iYWwuT2JqZWN0PT09T2JqZWN0JiZnbG9iYWwsd2U9dHlwZW9mIHNlbGY9PVwib2JqZWN0XCImJnNlbGYmJnNlbGYuT2JqZWN0PT09T2JqZWN0JiZzZWxmLG1lPUFlfHx3ZXx8RnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpLE9lPXR5cGVvZiBleHBvcnRzPT1cIm9iamVjdFwiJiZleHBvcnRzJiYhZXhwb3J0cy5ub2RlVHlwZSYmZXhwb3J0cyxTZT1PZSYmdHlwZW9mIG1vZHVsZT09XCJvYmplY3RcIiYmbW9kdWxlJiYhbW9kdWxlLm5vZGVUeXBlJiZtb2R1bGUsa2U9U2UmJlNlLmV4cG9ydHM9PT1PZSx6ZT1rZSYmQWUucHJvY2Vzczt0Ont0cnl7dmU9emUmJnplLmJpbmRpbmcmJnplLmJpbmRpbmcoXCJ1dGlsXCIpO2JyZWFrIHR9Y2F0Y2godCl7fXZlPXZvaWQgMH12YXIgeGU9dmUmJnZlLmlzTWFwLEVlPXZlJiZ2ZS5pc1NldCxJZT12ZSYmdmUuaXNUeXBlZEFycmF5LEZlPUFycmF5LnByb3RvdHlwZSxNZT1PYmplY3QucHJvdG90eXBlLCRlPW1lW1wiX19jb3JlLWpzX3NoYXJlZF9fXCJdLERlPUZ1bmN0aW9uLnByb3RvdHlwZS50b1N0cmluZyxVZT1NZS5oYXNPd25Qcm9wZXJ0eSxCZT1mdW5jdGlvbigpe1xudmFyIHQ9L1teLl0rJC8uZXhlYygkZSYmJGUua2V5cyYmJGUua2V5cy5JRV9QUk9UT3x8XCJcIik7cmV0dXJuIHQ/XCJTeW1ib2woc3JjKV8xLlwiK3Q6XCJcIn0oKSxQZT1NZS50b1N0cmluZyxMZT1EZS5jYWxsKE9iamVjdCksTmU9UmVnRXhwKFwiXlwiK0RlLmNhbGwoVWUpLnJlcGxhY2UoL1tcXFxcXiQuKis/KClbXFxde318XS9nLFwiXFxcXCQmXCIpLnJlcGxhY2UoL2hhc093blByb3BlcnR5fChmdW5jdGlvbikuKj8oPz1cXFxcXFwoKXwgZm9yIC4rPyg/PVxcXFxcXF0pL2csXCIkMS4qP1wiKStcIiRcIiksQ2U9a2U/bWUuQnVmZmVyOnJlLFRlPW1lLlN5bWJvbCxWZT1tZS5VaW50OEFycmF5LFJlPUNlP0NlLmE6cmUsV2U9YihPYmplY3QuZ2V0UHJvdG90eXBlT2YpLHFlPU9iamVjdC5jcmVhdGUsR2U9TWUucHJvcGVydHlJc0VudW1lcmFibGUsSGU9RmUuc3BsaWNlLEplPVRlP1RlLmlzQ29uY2F0U3ByZWFkYWJsZTpyZSxLZT1UZT9UZS50b1N0cmluZ1RhZzpyZSxRZT1mdW5jdGlvbigpe3RyeXt2YXIgdD1odChPYmplY3QsXCJkZWZpbmVQcm9wZXJ0eVwiKTtcbnJldHVybiB0KHt9LFwiXCIse30pLHR9Y2F0Y2godCl7fX0oKSxYZT1PYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzLFllPUNlP0NlLmlzQnVmZmVyOnJlLFplPWIoT2JqZWN0LmtleXMpLHRuPU1hdGgubWF4LGVuPURhdGUubm93LG5uPWh0KG1lLFwiRGF0YVZpZXdcIikscm49aHQobWUsXCJNYXBcIiksb249aHQobWUsXCJQcm9taXNlXCIpLHVuPWh0KG1lLFwiU2V0XCIpLGNuPWh0KG1lLFwiV2Vha01hcFwiKSxhbj1odChPYmplY3QsXCJjcmVhdGVcIiksZm49U3Qobm4pLGxuPVN0KHJuKSxzbj1TdChvbiksYm49U3QodW4pLGhuPVN0KGNuKSxwbj1UZT9UZS5wcm90b3R5cGU6cmUseW49cG4/cG4udmFsdWVPZjpyZSxqbj1wbj9wbi50b1N0cmluZzpyZSxfbj1mdW5jdGlvbigpe2Z1bmN0aW9uIHQoKXt9cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVybiBCdChlKT9xZT9xZShlKToodC5wcm90b3R5cGU9ZSxlPW5ldyB0LHQucHJvdG90eXBlPXJlLGUpOnt9fX0oKTt5LnByb3RvdHlwZS5jbGVhcj1mdW5jdGlvbigpe1xudGhpcy5fX2RhdGFfXz1hbj9hbihudWxsKTp7fSx0aGlzLnNpemU9MH0seS5wcm90b3R5cGUuZGVsZXRlPWZ1bmN0aW9uKHQpe3JldHVybiB0PXRoaXMuaGFzKHQpJiZkZWxldGUgdGhpcy5fX2RhdGFfX1t0XSx0aGlzLnNpemUtPXQ/MTowLHR9LHkucHJvdG90eXBlLmdldD1mdW5jdGlvbih0KXt2YXIgZT10aGlzLl9fZGF0YV9fO3JldHVybiBhbj8odD1lW3RdLFwiX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfX1wiPT09dD9yZTp0KTpVZS5jYWxsKGUsdCk/ZVt0XTpyZX0seS5wcm90b3R5cGUuaGFzPWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuX19kYXRhX187cmV0dXJuIGFuP2VbdF0hPT1yZTpVZS5jYWxsKGUsdCl9LHkucHJvdG90eXBlLnNldD1mdW5jdGlvbih0LGUpe3ZhciBuPXRoaXMuX19kYXRhX187cmV0dXJuIHRoaXMuc2l6ZSs9dGhpcy5oYXModCk/MDoxLG5bdF09YW4mJmU9PT1yZT9cIl9fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX19cIjplLHRoaXN9LGoucHJvdG90eXBlLmNsZWFyPWZ1bmN0aW9uKCl7XG50aGlzLl9fZGF0YV9fPVtdLHRoaXMuc2l6ZT0wfSxqLnByb3RvdHlwZS5kZWxldGU9ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5fX2RhdGFfXztyZXR1cm4gdD1tKGUsdCksISgwPnQpJiYodD09ZS5sZW5ndGgtMT9lLnBvcCgpOkhlLmNhbGwoZSx0LDEpLC0tdGhpcy5zaXplLHRydWUpfSxqLnByb3RvdHlwZS5nZXQ9ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5fX2RhdGFfXztyZXR1cm4gdD1tKGUsdCksMD50P3JlOmVbdF1bMV19LGoucHJvdG90eXBlLmhhcz1mdW5jdGlvbih0KXtyZXR1cm4tMTxtKHRoaXMuX19kYXRhX18sdCl9LGoucHJvdG90eXBlLnNldD1mdW5jdGlvbih0LGUpe3ZhciBuPXRoaXMuX19kYXRhX18scj1tKG4sdCk7cmV0dXJuIDA+cj8oKyt0aGlzLnNpemUsbi5wdXNoKFt0LGVdKSk6bltyXVsxXT1lLHRoaXN9LF8ucHJvdG90eXBlLmNsZWFyPWZ1bmN0aW9uKCl7dGhpcy5zaXplPTAsdGhpcy5fX2RhdGFfXz17aGFzaDpuZXcgeSxtYXA6bmV3KHJufHxqKSxzdHJpbmc6bmV3IHlcbn19LF8ucHJvdG90eXBlLmRlbGV0ZT1mdW5jdGlvbih0KXtyZXR1cm4gdD1zdCh0aGlzLHQpLmRlbGV0ZSh0KSx0aGlzLnNpemUtPXQ/MTowLHR9LF8ucHJvdG90eXBlLmdldD1mdW5jdGlvbih0KXtyZXR1cm4gc3QodGhpcyx0KS5nZXQodCl9LF8ucHJvdG90eXBlLmhhcz1mdW5jdGlvbih0KXtyZXR1cm4gc3QodGhpcyx0KS5oYXModCl9LF8ucHJvdG90eXBlLnNldD1mdW5jdGlvbih0LGUpe3ZhciBuPXN0KHRoaXMsdCkscj1uLnNpemU7cmV0dXJuIG4uc2V0KHQsZSksdGhpcy5zaXplKz1uLnNpemU9PXI/MDoxLHRoaXN9LGcucHJvdG90eXBlLmFkZD1nLnByb3RvdHlwZS5wdXNoPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLl9fZGF0YV9fLnNldCh0LFwiX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfX1wiKSx0aGlzfSxnLnByb3RvdHlwZS5oYXM9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuX19kYXRhX18uaGFzKHQpfSx2LnByb3RvdHlwZS5jbGVhcj1mdW5jdGlvbigpe3RoaXMuX19kYXRhX189bmV3IGosXG50aGlzLnNpemU9MH0sdi5wcm90b3R5cGUuZGVsZXRlPWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuX19kYXRhX187cmV0dXJuIHQ9ZS5kZWxldGUodCksdGhpcy5zaXplPWUuc2l6ZSx0fSx2LnByb3RvdHlwZS5nZXQ9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuX19kYXRhX18uZ2V0KHQpfSx2LnByb3RvdHlwZS5oYXM9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuX19kYXRhX18uaGFzKHQpfSx2LnByb3RvdHlwZS5zZXQ9ZnVuY3Rpb24odCxlKXt2YXIgbj10aGlzLl9fZGF0YV9fO2lmKG4gaW5zdGFuY2VvZiBqKXt2YXIgcj1uLl9fZGF0YV9fO2lmKCFybnx8MTk5PnIubGVuZ3RoKXJldHVybiByLnB1c2goW3QsZV0pLHRoaXMuc2l6ZT0rK24uc2l6ZSx0aGlzO249dGhpcy5fX2RhdGFfXz1uZXcgXyhyKX1yZXR1cm4gbi5zZXQodCxlKSx0aGlzLnNpemU9bi5zaXplLHRoaXN9O3ZhciBnbj1mdW5jdGlvbih0LGUpe3JldHVybiBmdW5jdGlvbihuLHIpe2lmKG51bGw9PW4pcmV0dXJuIG47aWYoIU10KG4pKXJldHVybiB0KG4scik7XG5mb3IodmFyIG89bi5sZW5ndGgsdT1lP286LTEsYz1PYmplY3Qobik7KGU/dS0tOisrdTxvKSYmZmFsc2UhPT1yKGNbdV0sdSxjKTspO3JldHVybiBufX0oZnVuY3Rpb24odCxlKXtyZXR1cm4gdCYmdm4odCxlLEp0KX0pLHZuPWZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbihlLG4scil7dmFyIG89LTEsdT1PYmplY3QoZSk7cj1yKGUpO2Zvcih2YXIgYz1yLmxlbmd0aDtjLS07KXt2YXIgaT1yW3Q/YzorK29dO2lmKGZhbHNlPT09bih1W2ldLGksdSkpYnJlYWt9cmV0dXJuIGV9fSgpLGRuPVFlP2Z1bmN0aW9uKHQsZSl7cmV0dXJuIFFlKHQsXCJ0b1N0cmluZ1wiLHtjb25maWd1cmFibGU6dHJ1ZSxlbnVtZXJhYmxlOmZhbHNlLHZhbHVlOlh0KGUpLHdyaXRhYmxlOnRydWV9KX06WXQsQW49WGU/ZnVuY3Rpb24odCl7cmV0dXJuIG51bGw9PXQ/W106KHQ9T2JqZWN0KHQpLG4oWGUodCksZnVuY3Rpb24oZSl7cmV0dXJuIEdlLmNhbGwodCxlKX0pKX06ZWUsd249WGU/ZnVuY3Rpb24odCl7Zm9yKHZhciBlPVtdO3Q7KW8oZSxBbih0KSksXG50PVdlKHQpO3JldHVybiBlfTplZSxtbj1NOyhubiYmXCJbb2JqZWN0IERhdGFWaWV3XVwiIT1tbihuZXcgbm4obmV3IEFycmF5QnVmZmVyKDEpKSl8fHJuJiZcIltvYmplY3QgTWFwXVwiIT1tbihuZXcgcm4pfHxvbiYmXCJbb2JqZWN0IFByb21pc2VdXCIhPW1uKG9uLnJlc29sdmUoKSl8fHVuJiZcIltvYmplY3QgU2V0XVwiIT1tbihuZXcgdW4pfHxjbiYmXCJbb2JqZWN0IFdlYWtNYXBdXCIhPW1uKG5ldyBjbikpJiYobW49ZnVuY3Rpb24odCl7dmFyIGU9TSh0KTtpZih0PSh0PVwiW29iamVjdCBPYmplY3RdXCI9PWU/dC5jb25zdHJ1Y3RvcjpyZSk/U3QodCk6XCJcIilzd2l0Y2godCl7Y2FzZSBmbjpyZXR1cm5cIltvYmplY3QgRGF0YVZpZXddXCI7Y2FzZSBsbjpyZXR1cm5cIltvYmplY3QgTWFwXVwiO2Nhc2Ugc246cmV0dXJuXCJbb2JqZWN0IFByb21pc2VdXCI7Y2FzZSBibjpyZXR1cm5cIltvYmplY3QgU2V0XVwiO2Nhc2UgaG46cmV0dXJuXCJbb2JqZWN0IFdlYWtNYXBdXCJ9cmV0dXJuIGV9KTt2YXIgT249ZnVuY3Rpb24odCl7XG52YXIgZT0wLG49MDtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgcj1lbigpLG89MTYtKHItbik7aWYobj1yLDA8byl7aWYoODAwPD0rK2UpcmV0dXJuIGFyZ3VtZW50c1swXX1lbHNlIGU9MDtyZXR1cm4gdC5hcHBseShyZSxhcmd1bWVudHMpfX0oZG4pLFNuPWZ1bmN0aW9uKHQpe3Q9RXQodCxmdW5jdGlvbih0KXtyZXR1cm4gNTAwPT09ZS5zaXplJiZlLmNsZWFyKCksdH0pO3ZhciBlPXQuY2FjaGU7cmV0dXJuIHR9KGZ1bmN0aW9uKHQpe3ZhciBlPVtdO3JldHVybiA0Nj09PXQuY2hhckNvZGVBdCgwKSYmZS5wdXNoKFwiXCIpLHQucmVwbGFjZShhZSxmdW5jdGlvbih0LG4scixvKXtlLnB1c2gocj9vLnJlcGxhY2UobGUsXCIkMVwiKTpufHx0KX0pLGV9KSxrbj1mdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24oZSxuLHIpe3ZhciBvPU9iamVjdChlKTtpZighTXQoZSkpe3ZhciB1PWx0KG4sMyk7ZT1KdChlKSxuPWZ1bmN0aW9uKHQpe3JldHVybiB1KG9bdF0sdCxvKX19cmV0dXJuIG49dChlLG4sciksXG4tMTxuP29bdT9lW25dOm5dOnJlfX0oa3QpO0V0LkNhY2hlPV87dmFyIHpuPVUoZnVuY3Rpb24oKXtyZXR1cm4gYXJndW1lbnRzfSgpKT9VOmZ1bmN0aW9uKHQpe3JldHVybiBQdCh0KSYmVWUuY2FsbCh0LFwiY2FsbGVlXCIpJiYhR2UuY2FsbCh0LFwiY2FsbGVlXCIpfSx4bj1BcnJheS5pc0FycmF5LEVuPVllfHxuZSxJbj14ZT9mKHhlKTpQLEZuPUVlP2YoRWUpOk4sTW49SWU/ZihJZSk6Qywkbj1vdChmdW5jdGlvbih0LGUsbil7cSh0LGUsbil9KSxEbj1vdChmdW5jdGlvbih0LGUsbixyKXtxKHQsZSxuLHIpfSksVW49ZnVuY3Rpb24odCl7cmV0dXJuIE9uKG10KHQscmUsenQpLHQrXCJcIil9KGZ1bmN0aW9uKHQsZSl7dmFyIG49e307aWYobnVsbD09dClyZXR1cm4gbjt2YXIgbz1mYWxzZTtlPXIoZSxmdW5jdGlvbihlKXtyZXR1cm4gZT1RKGUsdCksb3x8KG89MTxlLmxlbmd0aCksZX0pLGV0KHQsZnQodCksbiksbyYmKG49eihuLDcsdXQpKTtmb3IodmFyIHU9ZS5sZW5ndGg7dS0tOylLKG4sZVt1XSk7XG5yZXR1cm4gbn0pO3AuY29uc3RhbnQ9WHQscC5mbGF0dGVuPXp0LHAuaXRlcmF0ZWU9WnQscC5rZXlzPUp0LHAua2V5c0luPUt0LHAubWVtb2l6ZT1FdCxwLm1lcmdlPSRuLHAubWVyZ2VXaXRoPURuLHAubmVnYXRlPUl0LHAub21pdD1VbixwLnByb3BlcnR5PXRlLHAucmVqZWN0PWZ1bmN0aW9uKHQsZSl7cmV0dXJuKHhuKHQpP246eCkodCxJdChsdChlLDMpKSl9LHAudG9QbGFpbk9iamVjdD1XdCxwLnZhbHVlcz1RdCxwLmNsb25lRGVlcD1mdW5jdGlvbih0KXtyZXR1cm4geih0LDUpfSxwLmNsb25lRGVlcFdpdGg9ZnVuY3Rpb24odCxlKXtyZXR1cm4gZT10eXBlb2YgZT09XCJmdW5jdGlvblwiP2U6cmUseih0LDUsZSl9LHAuZXE9RnQscC5maW5kPWtuLHAuZmluZEluZGV4PWt0LHAuZ2V0PUd0LHAuaGFzPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIG51bGwhPXQmJnB0KHQsZSwkKX0scC5oYXNJbj1IdCxwLmlkZW50aXR5PVl0LHAuaW5jbHVkZXM9ZnVuY3Rpb24odCxlLG4scil7aWYodD1NdCh0KT90OlF0KHQpLFxubj1uJiYhcj9WdChuKTowLHI9dC5sZW5ndGgsMD5uJiYobj10bihyK24sMCkpLE50KHQpKXQ9bjw9ciYmLTE8dC5pbmRleE9mKGUsbik7ZWxzZXtpZihyPSEhcil7aWYoZT09PWUpdDp7Zm9yKG4tPTEscj10Lmxlbmd0aDsrK248cjspaWYodFtuXT09PWUpe3Q9bjticmVhayB0fXQ9LTF9ZWxzZSB0PWModCxpLG4pO3I9LTE8dH10PXJ9cmV0dXJuIHR9LHAuaXNBcmd1bWVudHM9em4scC5pc0FycmF5PXhuLHAuaXNBcnJheUxpa2U9TXQscC5pc0FycmF5TGlrZU9iamVjdD0kdCxwLmlzQnVmZmVyPUVuLHAuaXNFbXB0eT1mdW5jdGlvbih0KXtpZihudWxsPT10KXJldHVybiB0cnVlO2lmKE10KHQpJiYoeG4odCl8fHR5cGVvZiB0PT1cInN0cmluZ1wifHx0eXBlb2YgdC5zcGxpY2U9PVwiZnVuY3Rpb25cInx8RW4odCl8fE1uKHQpfHx6bih0KSkpcmV0dXJuIXQubGVuZ3RoO3ZhciBlPW1uKHQpO2lmKFwiW29iamVjdCBNYXBdXCI9PWV8fFwiW29iamVjdCBTZXRdXCI9PWUpcmV0dXJuIXQuc2l6ZTtpZihBdCh0KSlyZXR1cm4hVih0KS5sZW5ndGg7XG5mb3IodmFyIG4gaW4gdClpZihVZS5jYWxsKHQsbikpcmV0dXJuIGZhbHNlO3JldHVybiB0cnVlfSxwLmlzRXF1YWw9ZnVuY3Rpb24odCxlKXtyZXR1cm4gQih0LGUpfSxwLmlzRnVuY3Rpb249RHQscC5pc0xlbmd0aD1VdCxwLmlzTWFwPUluLHAuaXNOdWxsPWZ1bmN0aW9uKHQpe3JldHVybiBudWxsPT09dH0scC5pc09iamVjdD1CdCxwLmlzT2JqZWN0TGlrZT1QdCxwLmlzUGxhaW5PYmplY3Q9THQscC5pc1NldD1GbixwLmlzU3RyaW5nPU50LHAuaXNTeW1ib2w9Q3QscC5pc1R5cGVkQXJyYXk9TW4scC5sYXN0PXh0LHAuc3R1YkFycmF5PWVlLHAuc3R1YkZhbHNlPW5lLHAudG9GaW5pdGU9VHQscC50b0ludGVnZXI9VnQscC50b051bWJlcj1SdCxwLnRvU3RyaW5nPXF0LHAuVkVSU0lPTj1cIjQuMTcuNVwiLFNlJiYoKFNlLmV4cG9ydHM9cCkuXz1wLE9lLl89cCl9KS5jYWxsKHRoaXMpOyIsIi8qXG5Db3B5cmlnaHQgMjAyMCBBZG9iZS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgZmlsZSBpcyBsaWNlbnNlZCB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbnlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5XG5vZiB0aGUgTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlclxudGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgUkVQUkVTRU5UQVRJT05TXG5PRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2VcbmdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuY29uc3QgQ09OU1RBTlRTID0ge1xuICAvKipcbiAgICogQHR5cGVkZWYge1N0cmluZ30gSXRlbVR5cGVcbiAgICoqL1xuXG4gIC8qKlxuICAgKiBFbnVtZXJhdGlvbiBvZiBkYXRhIGxheWVyIGl0ZW0gdHlwZXMuXG4gICAqXG4gICAqIEBlbnVtIHtJdGVtVHlwZX1cbiAgICogQHJlYWRvbmx5XG4gICAqL1xuICBpdGVtVHlwZToge1xuICAgIC8qKiBSZXByZXNlbnRzIGFuIGl0ZW0gb2YgdHlwZSBkYXRhICovXG4gICAgREFUQTogJ2RhdGEnLFxuICAgIC8qKiBSZXByZXNlbnRzIGFuIGl0ZW0gb2YgdHlwZSBmdW5jdGlvbiAqL1xuICAgIEZDVE46ICdmY3RuJyxcbiAgICAvKiogUmVwcmVzZW50cyBhbiBpdGVtIG9mIHR5cGUgZXZlbnQgKi9cbiAgICBFVkVOVDogJ2V2ZW50JyxcbiAgICAvKiogUmVwcmVzZW50cyBhbiBpdGVtIG9mIHR5cGUgbGlzdGVuZXIgb24gKi9cbiAgICBMSVNURU5FUl9PTjogJ2xpc3RlbmVyT24nLFxuICAgIC8qKiBSZXByZXNlbnRzIGFuIGl0ZW0gb2YgdHlwZSBsaXN0ZW5lciBvZmYgKi9cbiAgICBMSVNURU5FUl9PRkY6ICdsaXN0ZW5lck9mZidcbiAgfSxcblxuICAvKipcbiAgICogQHR5cGVkZWYge1N0cmluZ30gRGF0YUxheWVyRXZlbnRcbiAgICoqL1xuXG4gIC8qKlxuICAgKiBFbnVtZXJhdGlvbiBvZiBkYXRhIGxheWVyIGV2ZW50cy5cbiAgICpcbiAgICogQGVudW0ge0RhdGFMYXllckV2ZW50fVxuICAgKiBAcmVhZG9ubHlcbiAgICovXG4gIGRhdGFMYXllckV2ZW50OiB7XG4gICAgLyoqIFJlcHJlc2VudHMgYW4gZXZlbnQgdHJpZ2dlcmVkIGZvciBhbnkgY2hhbmdlIGluIHRoZSBkYXRhIGxheWVyIHN0YXRlICovXG4gICAgQ0hBTkdFOiAnYWRvYmVEYXRhTGF5ZXI6Y2hhbmdlJyxcbiAgICAvKiogUmVwcmVzZW50cyBhbiBldmVudCB0cmlnZ2VyZWQgZm9yIGFueSBldmVudCBwdXNoIHRvIHRoZSBkYXRhIGxheWVyICovXG4gICAgRVZFTlQ6ICdhZG9iZURhdGFMYXllcjpldmVudCdcbiAgfSxcblxuICAvKipcbiAgICogQHR5cGVkZWYge1N0cmluZ30gTGlzdGVuZXJTY29wZVxuICAgKiovXG5cbiAgLyoqXG4gICAqIEVudW1lcmF0aW9uIG9mIGxpc3RlbmVyIHNjb3Blcy5cbiAgICpcbiAgICogQGVudW0ge0xpc3RlbmVyU2NvcGV9XG4gICAqIEByZWFkb25seVxuICAgKi9cbiAgbGlzdGVuZXJTY29wZToge1xuICAgIC8qKiBQYXN0IGV2ZW50cyBvbmx5ICovXG4gICAgUEFTVDogJ3Bhc3QnLFxuICAgIC8qKiBGdXR1cmUgZXZlbnRzIG9ubHkgKi9cbiAgICBGVVRVUkU6ICdmdXR1cmUnLFxuICAgIC8qKiBBbGwgZXZlbnRzLCBwYXN0IGFuZCBmdXR1cmUgKi9cbiAgICBBTEw6ICdhbGwnXG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQ09OU1RBTlRTO1xuIiwiLypcbkNvcHlyaWdodCAyMDIwIEFkb2JlLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBmaWxlIGlzIGxpY2Vuc2VkIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xueW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHlcbm9mIHRoZSBMaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG5Vbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyXG50aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBSRVBSRVNFTlRBVElPTlNcbk9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZVxuZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG5cbmNvbnN0IF8gPSByZXF1aXJlKCcuLi9jdXN0b20tbG9kYXNoJyk7XG5jb25zdCB2ZXJzaW9uID0gcmVxdWlyZSgnLi4vdmVyc2lvbi5qc29uJykudmVyc2lvbjtcbmNvbnN0IGNsb25lRGVlcCA9IF8uY2xvbmVEZWVwO1xuY29uc3QgZ2V0ID0gXy5nZXQ7XG5cbmNvbnN0IEl0ZW0gPSByZXF1aXJlKCcuL2l0ZW0nKTtcbmNvbnN0IExpc3RlbmVyID0gcmVxdWlyZSgnLi9saXN0ZW5lcicpO1xuY29uc3QgTGlzdGVuZXJNYW5hZ2VyID0gcmVxdWlyZSgnLi9saXN0ZW5lck1hbmFnZXInKTtcbmNvbnN0IENPTlNUQU5UUyA9IHJlcXVpcmUoJy4vY29uc3RhbnRzJyk7XG5jb25zdCBjdXN0b21NZXJnZSA9IHJlcXVpcmUoJy4vdXRpbHMvY3VzdG9tTWVyZ2UnKTtcblxuLyoqXG4gKiBNYW5hZ2VyXG4gKlxuICogQGNsYXNzIE1hbmFnZXJcbiAqIEBjbGFzc2Rlc2MgRGF0YSBMYXllciBtYW5hZ2VyIHRoYXQgYXVnbWVudHMgdGhlIHBhc3NlZCBkYXRhIGxheWVyIGFycmF5IGFuZCBoYW5kbGVzIGV2ZW50aW5nLlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgRGF0YSBMYXllciBtYW5hZ2VyIGNvbmZpZ3VyYXRpb24uXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oY29uZmlnKSB7XG4gIGNvbnN0IF9jb25maWcgPSBjb25maWcgfHwge307XG4gIGxldCBfZGF0YUxheWVyID0gW107XG4gIGxldCBfcHJlTG9hZGVkSXRlbXMgPSBbXTtcbiAgbGV0IF9zdGF0ZSA9IHt9O1xuICBsZXQgX2xpc3RlbmVyTWFuYWdlcjtcblxuICBjb25zdCBEYXRhTGF5ZXJNYW5hZ2VyID0ge1xuICAgIGdldFN0YXRlOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBfc3RhdGU7XG4gICAgfSxcbiAgICBnZXREYXRhTGF5ZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIF9kYXRhTGF5ZXI7XG4gICAgfVxuICB9O1xuXG4gIF9pbml0aWFsaXplKCk7XG4gIF9hdWdtZW50KCk7XG4gIF9wcm9jZXNzSXRlbXMoKTtcblxuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgdGhlIGRhdGEgbGF5ZXIuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBmdW5jdGlvbiBfaW5pdGlhbGl6ZSgpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoX2NvbmZpZy5kYXRhTGF5ZXIpKSB7XG4gICAgICBfY29uZmlnLmRhdGFMYXllciA9IFtdO1xuICAgIH1cblxuICAgIC8vIFJlbW92ZSBwcmVsb2FkZWQgaXRlbXMgZnJvbSB0aGUgZGF0YSBsYXllciBhcnJheSBhbmQgYWRkIHRob3NlIHRvIHRoZSBhcnJheSBvZiBwcmVsb2FkZWQgaXRlbXNcbiAgICBfcHJlTG9hZGVkSXRlbXMgPSBfY29uZmlnLmRhdGFMYXllci5zcGxpY2UoMCwgX2NvbmZpZy5kYXRhTGF5ZXIubGVuZ3RoKTtcbiAgICBfZGF0YUxheWVyID0gX2NvbmZpZy5kYXRhTGF5ZXI7XG4gICAgX2RhdGFMYXllci52ZXJzaW9uID0gdmVyc2lvbjtcbiAgICBfc3RhdGUgPSB7fTtcbiAgICBfbGlzdGVuZXJNYW5hZ2VyID0gTGlzdGVuZXJNYW5hZ2VyKERhdGFMYXllck1hbmFnZXIpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBVcGRhdGVzIHRoZSBzdGF0ZSB3aXRoIHRoZSBpdGVtLlxuICAgKlxuICAgKiBAcGFyYW0ge0l0ZW19IGl0ZW0gVGhlIGl0ZW0uXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBmdW5jdGlvbiBfdXBkYXRlU3RhdGUoaXRlbSkge1xuICAgIF9zdGF0ZSA9IGN1c3RvbU1lcmdlKF9zdGF0ZSwgaXRlbS5kYXRhKTtcbiAgfTtcblxuICAvKipcbiAgICogQXVnbWVudHMgdGhlIGRhdGEgbGF5ZXIgQXJyYXkgT2JqZWN0LCBvdmVycmlkaW5nOiBwdXNoKCkgYW5kIGFkZGluZyBnZXRTdGF0ZSgpLCBhZGRFdmVudExpc3RlbmVyIGFuZCByZW1vdmVFdmVudExpc3RlbmVyLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZnVuY3Rpb24gX2F1Z21lbnQoKSB7XG4gICAgLyoqXG4gICAgICogUHVzaGVzIG9uZSBvciBtb3JlIGl0ZW1zIHRvIHRoZSBkYXRhIGxheWVyLlxuICAgICAqXG4gICAgICogQHBhcmFtIHsuLi5JdGVtQ29uZmlnfSB2YXJfYXJncyBUaGUgaXRlbXMgdG8gYWRkIHRvIHRoZSBkYXRhIGxheWVyLlxuICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9IFRoZSBsZW5ndGggb2YgdGhlIGRhdGEgbGF5ZXIgZm9sbG93aW5nIHB1c2guXG4gICAgICovXG4gICAgX2RhdGFMYXllci5wdXNoID0gZnVuY3Rpb24odmFyX2FyZ3MpIHsgLyogZXNsaW50LWRpc2FibGUtbGluZSBjYW1lbGNhc2UgKi9cbiAgICAgIGNvbnN0IHB1c2hBcmd1bWVudHMgPSBhcmd1bWVudHM7XG4gICAgICBjb25zdCBmaWx0ZXJlZEFyZ3VtZW50cyA9IGFyZ3VtZW50cztcblxuICAgICAgT2JqZWN0LmtleXMocHVzaEFyZ3VtZW50cykuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgY29uc3QgaXRlbUNvbmZpZyA9IHB1c2hBcmd1bWVudHNba2V5XTtcbiAgICAgICAgY29uc3QgaXRlbSA9IEl0ZW0oaXRlbUNvbmZpZyk7XG5cbiAgICAgICAgaWYgKCFpdGVtLnZhbGlkKSB7XG4gICAgICAgICAgX2xvZ0ludmFsaWRJdGVtRXJyb3IoaXRlbSk7XG4gICAgICAgICAgZGVsZXRlIGZpbHRlcmVkQXJndW1lbnRzW2tleV07XG4gICAgICAgIH1cbiAgICAgICAgc3dpdGNoIChpdGVtLnR5cGUpIHtcbiAgICAgICAgICBjYXNlIENPTlNUQU5UUy5pdGVtVHlwZS5EQVRBOlxuICAgICAgICAgIGNhc2UgQ09OU1RBTlRTLml0ZW1UeXBlLkVWRU5UOiB7XG4gICAgICAgICAgICBfcHJvY2Vzc0l0ZW0oaXRlbSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgY2FzZSBDT05TVEFOVFMuaXRlbVR5cGUuRkNUTjoge1xuICAgICAgICAgICAgZGVsZXRlIGZpbHRlcmVkQXJndW1lbnRzW2tleV07XG4gICAgICAgICAgICBfcHJvY2Vzc0l0ZW0oaXRlbSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgY2FzZSBDT05TVEFOVFMuaXRlbVR5cGUuTElTVEVORVJfT046XG4gICAgICAgICAgY2FzZSBDT05TVEFOVFMuaXRlbVR5cGUuTElTVEVORVJfT0ZGOiB7XG4gICAgICAgICAgICBkZWxldGUgZmlsdGVyZWRBcmd1bWVudHNba2V5XTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAoZmlsdGVyZWRBcmd1bWVudHNbMF0pIHtcbiAgICAgICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KHRoaXMsIGZpbHRlcmVkQXJndW1lbnRzKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIGRlZXAgY29weSBvZiB0aGUgZGF0YSBsYXllciBzdGF0ZSBvciBvZiB0aGUgb2JqZWN0IGRlZmluZWQgYnkgdGhlIHBhdGguXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0FycmF5fFN0cmluZ30gcGF0aCBUaGUgcGF0aCBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICAgICAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIGEgZGVlcCBjb3B5IG9mIHRoZSByZXNvbHZlZCB2YWx1ZSBpZiBhIHBhdGggaXMgcGFzc2VkLCBhIGRlZXAgY29weSBvZiB0aGUgZGF0YSBsYXllciBzdGF0ZSBvdGhlcndpc2UuXG4gICAgICovXG4gICAgX2RhdGFMYXllci5nZXRTdGF0ZSA9IGZ1bmN0aW9uKHBhdGgpIHtcbiAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgIHJldHVybiBnZXQoY2xvbmVEZWVwKF9zdGF0ZSksIHBhdGgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNsb25lRGVlcChfc3RhdGUpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBFdmVudCBsaXN0ZW5lciBjYWxsYmFjay5cbiAgICAgKlxuICAgICAqIEBjYWxsYmFjayBldmVudExpc3RlbmVyQ2FsbGJhY2sgQSBmdW5jdGlvbiB0aGF0IGlzIGNhbGxlZCB3aGVuIHRoZSBldmVudCBvZiB0aGUgc3BlY2lmaWVkIHR5cGUgb2NjdXJzLlxuICAgICAqIEB0aGlzIHtEYXRhTGF5ZXJ9XG4gICAgICogQHBhcmFtIHtPYmplY3R9IGV2ZW50IFRoZSBldmVudCBvYmplY3QgcHVzaGVkIHRvIHRoZSBkYXRhIGxheWVyIHRoYXQgdHJpZ2dlcmVkIHRoZSBjYWxsYmFjay5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIFNldHMgdXAgYSBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgY2FsbGVkIHdoZW5ldmVyIHRoZSBzcGVjaWZpZWQgZXZlbnQgaXMgdHJpZ2dlcmVkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgQSBjYXNlLXNlbnNpdGl2ZSBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSBldmVudCB0eXBlIHRvIGxpc3RlbiBmb3IuXG4gICAgICogQHBhcmFtIHtldmVudExpc3RlbmVyQ2FsbGJhY2t9IGNhbGxiYWNrIEEgZnVuY3Rpb24gdGhhdCBpcyBjYWxsZWQgd2hlbiB0aGUgZXZlbnQgb2YgdGhlIHNwZWNpZmllZCB0eXBlIG9jY3Vycy5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIE9wdGlvbmFsIGNoYXJhY3RlcmlzdGljcyBvZiB0aGUgZXZlbnQgbGlzdGVuZXIuXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLnBhdGhdIFRoZSBwYXRoIGluIHRoZSBzdGF0ZSBvYmplY3QgdG8gZmlsdGVyIHRoZSBsaXN0ZW5pbmcgdG8uXG4gICAgICogQHBhcmFtIHsoJ3Bhc3QnfCdmdXR1cmUnfCdhbGwnKX0gW29wdGlvbnMuc2NvcGVdIFRoZSB0aW1pbmcgdG8gZmlsdGVyIHRoZSBsaXN0ZW5pbmcgdG86XG4gICAgICogICAgICAtIHtTdHJpbmd9IHBhc3QgVGhlIGxpc3RlbmVyIGlzIHRyaWdnZXJlZCBmb3IgcGFzdCBldmVudHMgb25seS5cbiAgICAgKiAgICAgIC0ge1N0cmluZ30gZnV0dXJlIFRoZSBsaXN0ZW5lciBpcyB0cmlnZ2VyZWQgZm9yIGZ1dHVyZSBldmVudHMgb25seS5cbiAgICAgKiAgICAgIC0ge1N0cmluZ30gYWxsIFRoZSBsaXN0ZW5lciBpcyB0cmlnZ2VyZWQgZm9yIGJvdGggcGFzdCBhbmQgZnV0dXJlIGV2ZW50cyAoZGVmYXVsdCB2YWx1ZSkuXG4gICAgICovXG4gICAgX2RhdGFMYXllci5hZGRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24odHlwZSwgY2FsbGJhY2ssIG9wdGlvbnMpIHtcbiAgICAgIGNvbnN0IGV2ZW50TGlzdGVuZXJJdGVtID0gSXRlbSh7XG4gICAgICAgIG9uOiB0eXBlLFxuICAgICAgICBoYW5kbGVyOiBjYWxsYmFjayxcbiAgICAgICAgc2NvcGU6IG9wdGlvbnMgJiYgb3B0aW9ucy5zY29wZSxcbiAgICAgICAgcGF0aDogb3B0aW9ucyAmJiBvcHRpb25zLnBhdGhcbiAgICAgIH0pO1xuXG4gICAgICBfcHJvY2Vzc0l0ZW0oZXZlbnRMaXN0ZW5lckl0ZW0pO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGFuIGV2ZW50IGxpc3RlbmVyIHByZXZpb3VzbHkgcmVnaXN0ZXJlZCB3aXRoIGFkZEV2ZW50TGlzdGVuZXIoKS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIEEgY2FzZS1zZW5zaXRpdmUgc3RyaW5nIHJlcHJlc2VudGluZyB0aGUgZXZlbnQgdHlwZSB0byBsaXN0ZW4gZm9yLlxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IFtsaXN0ZW5lcl0gT3B0aW9uYWwgZnVuY3Rpb24gdGhhdCBpcyB0byBiZSByZW1vdmVkLlxuICAgICAqL1xuICAgIF9kYXRhTGF5ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgICBjb25zdCBldmVudExpc3RlbmVySXRlbSA9IEl0ZW0oe1xuICAgICAgICBvZmY6IHR5cGUsXG4gICAgICAgIGhhbmRsZXI6IGxpc3RlbmVyXG4gICAgICB9KTtcblxuICAgICAgX3Byb2Nlc3NJdGVtKGV2ZW50TGlzdGVuZXJJdGVtKTtcbiAgICB9O1xuICB9O1xuXG4gIC8qKlxuICAgKiBQcm9jZXNzZXMgYWxsIGl0ZW1zIHRoYXQgYWxyZWFkeSBleGlzdCBvbiB0aGUgc3RhY2suXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBmdW5jdGlvbiBfcHJvY2Vzc0l0ZW1zKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgX3ByZUxvYWRlZEl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBfZGF0YUxheWVyLnB1c2goX3ByZUxvYWRlZEl0ZW1zW2ldKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFByb2Nlc3NlcyBhbiBpdGVtIHB1c2hlZCB0byB0aGUgc3RhY2suXG4gICAqXG4gICAqIEBwYXJhbSB7SXRlbX0gaXRlbSBUaGUgaXRlbSB0byBwcm9jZXNzLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZnVuY3Rpb24gX3Byb2Nlc3NJdGVtKGl0ZW0pIHtcbiAgICBpZiAoIWl0ZW0udmFsaWQpIHtcbiAgICAgIF9sb2dJbnZhbGlkSXRlbUVycm9yKGl0ZW0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYWxsIGl0ZW1zIGJlZm9yZSB0aGUgcHJvdmlkZWQgb25lLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtJdGVtfSBpdGVtIFRoZSBpdGVtLlxuICAgICAqIEByZXR1cm5zIHtBcnJheTxJdGVtPn0gVGhlIGl0ZW1zIGJlZm9yZS5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9nZXRCZWZvcmUoaXRlbSkge1xuICAgICAgaWYgKCEoX2RhdGFMYXllci5sZW5ndGggPT09IDAgfHwgaXRlbS5pbmRleCA+IF9kYXRhTGF5ZXIubGVuZ3RoIC0gMSkpIHtcbiAgICAgICAgcmV0dXJuIF9kYXRhTGF5ZXIuc2xpY2UoMCwgaXRlbS5pbmRleCkubWFwKGl0ZW1Db25maWcgPT4gSXRlbShpdGVtQ29uZmlnKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgY29uc3QgdHlwZVByb2Nlc3NvcnMgPSB7XG4gICAgICBkYXRhOiBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgIF91cGRhdGVTdGF0ZShpdGVtKTtcbiAgICAgICAgX2xpc3RlbmVyTWFuYWdlci50cmlnZ2VyTGlzdGVuZXJzKGl0ZW0pO1xuICAgICAgfSxcbiAgICAgIGZjdG46IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgaXRlbS5jb25maWcuY2FsbChfZGF0YUxheWVyLCBfZGF0YUxheWVyKTtcbiAgICAgIH0sXG4gICAgICBldmVudDogZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICBpZiAoaXRlbS5kYXRhKSB7XG4gICAgICAgICAgX3VwZGF0ZVN0YXRlKGl0ZW0pO1xuICAgICAgICB9XG4gICAgICAgIF9saXN0ZW5lck1hbmFnZXIudHJpZ2dlckxpc3RlbmVycyhpdGVtKTtcbiAgICAgIH0sXG4gICAgICBsaXN0ZW5lck9uOiBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgIGNvbnN0IGxpc3RlbmVyID0gTGlzdGVuZXIoaXRlbSk7XG4gICAgICAgIHN3aXRjaCAobGlzdGVuZXIuc2NvcGUpIHtcbiAgICAgICAgICBjYXNlIENPTlNUQU5UUy5saXN0ZW5lclNjb3BlLlBBU1Q6IHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgcmVnaXN0ZXJlZEl0ZW0gb2YgX2dldEJlZm9yZShpdGVtKSkge1xuICAgICAgICAgICAgICBfbGlzdGVuZXJNYW5hZ2VyLnRyaWdnZXJMaXN0ZW5lcihsaXN0ZW5lciwgcmVnaXN0ZXJlZEl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNhc2UgQ09OU1RBTlRTLmxpc3RlbmVyU2NvcGUuRlVUVVJFOiB7XG4gICAgICAgICAgICBfbGlzdGVuZXJNYW5hZ2VyLnJlZ2lzdGVyKGxpc3RlbmVyKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjYXNlIENPTlNUQU5UUy5saXN0ZW5lclNjb3BlLkFMTDoge1xuICAgICAgICAgICAgY29uc3QgcmVnaXN0ZXJlZCA9IF9saXN0ZW5lck1hbmFnZXIucmVnaXN0ZXIobGlzdGVuZXIpO1xuICAgICAgICAgICAgaWYgKHJlZ2lzdGVyZWQpIHtcbiAgICAgICAgICAgICAgZm9yIChjb25zdCByZWdpc3RlcmVkSXRlbSBvZiBfZ2V0QmVmb3JlKGl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgX2xpc3RlbmVyTWFuYWdlci50cmlnZ2VyTGlzdGVuZXIobGlzdGVuZXIsIHJlZ2lzdGVyZWRJdGVtKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGxpc3RlbmVyT2ZmOiBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgIF9saXN0ZW5lck1hbmFnZXIudW5yZWdpc3RlcihMaXN0ZW5lcihpdGVtKSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHR5cGVQcm9jZXNzb3JzW2l0ZW0udHlwZV0oaXRlbSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIExvZ3MgZXJyb3IgZm9yIGludmFsaWQgaXRlbSBwdXNoZWQgdG8gdGhlIGRhdGEgbGF5ZXIuXG4gICAqXG4gICAqIEBwYXJhbSB7SXRlbX0gaXRlbSBUaGUgaW52YWxpZCBpdGVtLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZnVuY3Rpb24gX2xvZ0ludmFsaWRJdGVtRXJyb3IoaXRlbSkge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSAnVGhlIGZvbGxvd2luZyBpdGVtIGNhbm5vdCBiZSBoYW5kbGVkIGJ5IHRoZSBkYXRhIGxheWVyICcgK1xuICAgICAgJ2JlY2F1c2UgaXQgZG9lcyBub3QgaGF2ZSBhIHZhbGlkIGZvcm1hdDogJyArXG4gICAgICBKU09OLnN0cmluZ2lmeShpdGVtLmNvbmZpZyk7XG4gICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgfTtcblxuICByZXR1cm4gRGF0YUxheWVyTWFuYWdlcjtcbn07XG4iLCIvKlxuQ29weXJpZ2h0IDIwMjAgQWRvYmUuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGZpbGUgaXMgbGljZW5zZWQgdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG55b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weVxub2YgdGhlIExpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cblVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXJcbnRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIFJFUFJFU0VOVEFUSU9OU1xuT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlXG5nb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cblxuY29uc3QgRGF0YUxheWVyTWFuYWdlciA9IHJlcXVpcmUoJy4vZGF0YUxheWVyTWFuYWdlcicpO1xuXG4vKipcbiAqIERhdGEgTGF5ZXIuXG4gKlxuICogQHR5cGUge09iamVjdH1cbiAqL1xuY29uc3QgRGF0YUxheWVyID0ge1xuICBNYW5hZ2VyOiBEYXRhTGF5ZXJNYW5hZ2VyXG59O1xuXG53aW5kb3cuYWRvYmVEYXRhTGF5ZXIgPSB3aW5kb3cuYWRvYmVEYXRhTGF5ZXIgfHwgW107XG5cbi8vIElmIGRhdGEgbGF5ZXIgaGFzIGFscmVhZHkgYmVlbiBpbml0aWFsaXplZCwgZG8gbm90IHJlLWluaXRpYWxpemUuXG5pZiAod2luZG93LmFkb2JlRGF0YUxheWVyLnZlcnNpb24pIHtcbiAgY29uc29sZS53YXJuKFxuICAgIGBBZG9iZSBDbGllbnQgRGF0YSBMYXllciB2JHt3aW5kb3cuYWRvYmVEYXRhTGF5ZXIudmVyc2lvbn0gaGFzIGFscmVhZHkgYmVlbiBpbXBvcnRlZC9pbml0aWFsaXplZCBvbiB0aGlzIHBhZ2UuIFlvdSBtYXkgYmUgZXJyb25lb3VzbHkgbG9hZGluZyBpdCBhIHNlY29uZCB0aW1lLmBcbiAgKTtcbn0gZWxzZSB7XG4gIERhdGFMYXllci5NYW5hZ2VyKHtcbiAgICBkYXRhTGF5ZXI6IHdpbmRvdy5hZG9iZURhdGFMYXllclxuICB9KTtcbn1cblxuLyoqXG4gKiBAdHlwZWRlZiAge09iamVjdH0gTGlzdGVuZXJPbkNvbmZpZ1xuICogQHByb3BlcnR5IHtTdHJpbmd9IG9uIE5hbWUgb2YgdGhlIGV2ZW50IHRvIGJpbmQgdG8uXG4gKiBAcHJvcGVydHkge1N0cmluZ30gW3BhdGhdIE9iamVjdCBrZXkgaW4gdGhlIHN0YXRlIHRvIGJpbmQgdG8uXG4gKiBAcHJvcGVydHkge0xpc3RlbmVyU2NvcGV9IFtzY29wZV0gU2NvcGUgb2YgdGhlIGxpc3RlbmVyLlxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gaGFuZGxlciBIYW5kbGVyIHRvIGV4ZWN1dGUgd2hlbiB0aGUgYm91bmQgZXZlbnQgaXMgdHJpZ2dlcmVkLlxuICovXG5cbi8qKlxuICogQHR5cGVkZWYgIHtPYmplY3R9IExpc3RlbmVyT2ZmQ29uZmlnXG4gKiBAcHJvcGVydHkge1N0cmluZ30gb2ZmIE5hbWUgb2YgdGhlIGV2ZW50IHRvIHVuYmluZC5cbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBbcGF0aF0gT2JqZWN0IGtleSBpbiB0aGUgc3RhdGUgdG8gYmluZCB0by5cbiAqIEBwcm9wZXJ0eSB7TGlzdGVuZXJTY29wZX0gW3Njb3BlXSBTY29wZSBvZiB0aGUgbGlzdGVuZXIuXG4gKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBbaGFuZGxlcl0gSGFuZGxlciBmb3IgYSBwcmV2aW91c2x5IGF0dGFjaGVkIGV2ZW50IHRvIHVuYmluZC5cbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IERhdGFDb25maWdcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBkYXRhIERhdGEgdG8gYmUgdXBkYXRlZCBpbiB0aGUgc3RhdGUuXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBFdmVudENvbmZpZ1xuICogQHByb3BlcnR5IHtTdHJpbmd9IGV2ZW50IE5hbWUgb2YgdGhlIGV2ZW50LlxuICogQHByb3BlcnR5IHtPYmplY3R9IFtldmVudEluZm9dIEFkZGl0aW9uYWwgaW5mb3JtYXRpb24gdG8gcGFzcyB0byB0aGUgZXZlbnQgaGFuZGxlci5cbiAqIEBwcm9wZXJ0eSB7RGF0YUNvbmZpZy5kYXRhfSBbZGF0YV0gRGF0YSB0byBiZSB1cGRhdGVkIGluIHRoZSBzdGF0ZS5cbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtEYXRhQ29uZmlnIHwgRXZlbnRDb25maWcgfCBMaXN0ZW5lck9uQ29uZmlnIHwgTGlzdGVuZXJPZmZDb25maWd9IEl0ZW1Db25maWdcbiAqL1xuXG4vKipcbiAqIFRyaWdnZXJlZCB3aGVuIHRoZXJlIGlzIGNoYW5nZSBpbiB0aGUgZGF0YSBsYXllciBzdGF0ZS5cbiAqXG4gKiBAZXZlbnQgRGF0YUxheWVyRXZlbnQuQ0hBTkdFXG4gKiBAdHlwZSB7T2JqZWN0fVxuICogQHByb3BlcnR5IHtPYmplY3R9IGRhdGEgRGF0YSBwdXNoZWQgdGhhdCBjYXVzZWQgYSBjaGFuZ2UgaW4gdGhlIGRhdGEgbGF5ZXIgc3RhdGUuXG4gKi9cblxuLyoqXG4gKiBUcmlnZ2VyZWQgd2hlbiBhbiBldmVudCBpcyBwdXNoZWQgdG8gdGhlIGRhdGEgbGF5ZXIuXG4gKlxuICogQGV2ZW50IERhdGFMYXllckV2ZW50LkVWRU5UXG4gKiBAdHlwZSB7T2JqZWN0fVxuICogQHByb3BlcnR5IHtTdHJpbmd9IG5hbWUgTmFtZSBvZiB0aGUgY29tbWl0dGVkIGV2ZW50LlxuICogQHByb3BlcnR5IHtPYmplY3R9IGV2ZW50SW5mbyBBZGRpdGlvbmFsIGluZm9ybWF0aW9uIHBhc3NlZCB3aXRoIHRoZSBjb21taXR0ZWQgZXZlbnQuXG4gKiBAcHJvcGVydHkge09iamVjdH0gZGF0YSBEYXRhIHRoYXQgd2FzIHB1c2hlZCBhbG9uZ3NpZGUgdGhlIGV2ZW50LlxuICovXG5cbi8qKlxuICogVHJpZ2dlcmVkIHdoZW4gYW4gYXJiaXRyYXJ5IGV2ZW50IGlzIHB1c2hlZCB0byB0aGUgZGF0YSBsYXllci5cbiAqXG4gKiBAZXZlbnQgPGN1c3RvbT5cbiAqIEB0eXBlIHtPYmplY3R9XG4gKiBAcHJvcGVydHkge1N0cmluZ30gbmFtZSBOYW1lIG9mIHRoZSBjb21taXR0ZWQgZXZlbnQuXG4gKiBAcHJvcGVydHkge09iamVjdH0gZXZlbnRJbmZvIEFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcGFzc2VkIHdpdGggdGhlIGNvbW1pdHRlZCBldmVudC5cbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBkYXRhIERhdGEgdGhhdCB3YXMgcHVzaGVkIGFsb25nc2lkZSB0aGUgZXZlbnQuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBEYXRhTGF5ZXI7XG4iLCIvKlxuQ29weXJpZ2h0IDIwMjAgQWRvYmUuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGZpbGUgaXMgbGljZW5zZWQgdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG55b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weVxub2YgdGhlIExpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cblVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXJcbnRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIFJFUFJFU0VOVEFUSU9OU1xuT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlXG5nb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cblxuY29uc3QgXyA9IHJlcXVpcmUoJy4uL2N1c3RvbS1sb2Rhc2gnKTtcbmNvbnN0IGlzUGxhaW5PYmplY3QgPSBfLmlzUGxhaW5PYmplY3Q7XG5jb25zdCBpc0VtcHR5ID0gXy5pc0VtcHR5O1xuY29uc3Qgb21pdCA9IF8ub21pdDtcbmNvbnN0IGZpbmQgPSBfLmZpbmQ7XG5cbmNvbnN0IGRhdGFNYXRjaGVzQ29udHJhaW50cyA9IHJlcXVpcmUoJy4vdXRpbHMvZGF0YU1hdGNoZXNDb250cmFpbnRzJyk7XG5jb25zdCBJVEVNX0NPTlNUUkFJTlRTID0gcmVxdWlyZSgnLi9pdGVtQ29uc3RyYWludHMnKTtcbmNvbnN0IENPTlNUQU5UUyA9IHJlcXVpcmUoJy4vY29uc3RhbnRzJyk7XG5cbi8qKlxuICogQ29uc3RydWN0cyBhIGRhdGEgbGF5ZXIgaXRlbS5cbiAqXG4gKiBAcGFyYW0ge0l0ZW1Db25maWd9IGl0ZW1Db25maWcgVGhlIGRhdGEgbGF5ZXIgaXRlbSBjb25maWd1cmF0aW9uLlxuICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4IFRoZSBpdGVtIGluZGV4IGluIHRoZSBhcnJheSBvZiBleGlzdGluZyBpdGVtcy5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0ZW1Db25maWcsIGluZGV4KSB7XG4gIGNvbnN0IF9jb25maWcgPSBpdGVtQ29uZmlnO1xuICBjb25zdCBfaW5kZXggPSBpbmRleDtcbiAgY29uc3QgX3R5cGUgPSBnZXRUeXBlKCk7XG4gIGNvbnN0IF9kYXRhID0gZ2V0RGF0YSgpO1xuICBjb25zdCBfdmFsaWQgPSAhIV90eXBlO1xuXG4gIGZ1bmN0aW9uIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIGZpbmQoT2JqZWN0LmtleXMoSVRFTV9DT05TVFJBSU5UUyksIGtleSA9PiBkYXRhTWF0Y2hlc0NvbnRyYWludHMoX2NvbmZpZywgSVRFTV9DT05TVFJBSU5UU1trZXldKSkgfHxcbiAgICAgICh0eXBlb2YgX2NvbmZpZyA9PT0gJ2Z1bmN0aW9uJyAmJiBDT05TVEFOVFMuaXRlbVR5cGUuRkNUTikgfHxcbiAgICAgIChpc1BsYWluT2JqZWN0KF9jb25maWcpICYmIENPTlNUQU5UUy5pdGVtVHlwZS5EQVRBKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldERhdGEoKSB7XG4gICAgY29uc3QgZGF0YSA9IG9taXQoX2NvbmZpZywgT2JqZWN0LmtleXMoSVRFTV9DT05TVFJBSU5UUy5ldmVudCkpO1xuICAgIGlmICghaXNFbXB0eShkYXRhKSkge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBpdGVtIGNvbmZpZ3VyYXRpb24uXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7SXRlbUNvbmZpZ30gVGhlIGl0ZW0gY29uZmlndXJhdGlvbi5cbiAgICAgKi9cbiAgICBjb25maWc6IF9jb25maWcsXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBpdGVtIHR5cGUuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7aXRlbVR5cGV9IFRoZSBpdGVtIHR5cGUuXG4gICAgICovXG4gICAgdHlwZTogX3R5cGUsXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBpdGVtIGRhdGEuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7RGF0YUNvbmZpZ30gVGhlIGl0ZW0gZGF0YS5cbiAgICAgKi9cbiAgICBkYXRhOiBfZGF0YSxcblxuICAgIC8qKlxuICAgICAqIEluZGljYXRlcyB3aGV0aGVyIHRoZSBpdGVtIGlzIHZhbGlkLlxuICAgICAqXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaWYgdGhlIGl0ZW0gaXMgdmFsaWQsIGZhbHNlIG90aGVyd2lzZS5cbiAgICAgKi9cbiAgICB2YWxpZDogX3ZhbGlkLFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIGl0ZW0gaW4gdGhlIGFycmF5IG9mIGV4aXN0aW5nIGl0ZW1zIChhZGRlZCB3aXRoIHRoZSBzdGFuZGFyZCBBcnJheS5wcm90b3R5cGUucHVzaCgpKVxuICAgICAqXG4gICAgICogQHJldHVybnMge051bWJlcn0gVGhlIGluZGV4IG9mIHRoZSBpdGVtIGluIHRoZSBhcnJheSBvZiBleGlzdGluZyBpdGVtcyBpZiBpdCBleGlzdHMsIC0xIG90aGVyd2lzZS5cbiAgICAgKi9cbiAgICBpbmRleDogX2luZGV4XG4gIH07XG59O1xuIiwiLypcbkNvcHlyaWdodCAyMDIwIEFkb2JlLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBmaWxlIGlzIGxpY2Vuc2VkIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xueW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHlcbm9mIHRoZSBMaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG5Vbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyXG50aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBSRVBSRVNFTlRBVElPTlNcbk9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZVxuZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG5cbi8qKlxuICogQ29uc3RyYWludHMgZm9yIGVhY2ggdHlwZSBvZiB0aGUgaXRlbSBjb25maWd1cmF0aW9uLlxuICovXG5cbmNvbnN0IGl0ZW1Db25zdHJhaW50cyA9IHtcbiAgZXZlbnQ6IHtcbiAgICBldmVudDoge1xuICAgICAgdHlwZTogJ3N0cmluZydcbiAgICB9LFxuICAgIGV2ZW50SW5mbzoge1xuICAgICAgb3B0aW9uYWw6IHRydWVcbiAgICB9XG4gIH0sXG4gIGxpc3RlbmVyT246IHtcbiAgICBvbjoge1xuICAgICAgdHlwZTogJ3N0cmluZydcbiAgICB9LFxuICAgIGhhbmRsZXI6IHtcbiAgICAgIHR5cGU6ICdmdW5jdGlvbidcbiAgICB9LFxuICAgIHNjb3BlOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIHZhbHVlczogWydwYXN0JywgJ2Z1dHVyZScsICdhbGwnXSxcbiAgICAgIG9wdGlvbmFsOiB0cnVlXG4gICAgfSxcbiAgICBwYXRoOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIG9wdGlvbmFsOiB0cnVlXG4gICAgfVxuICB9LFxuICBsaXN0ZW5lck9mZjoge1xuICAgIG9mZjoge1xuICAgICAgdHlwZTogJ3N0cmluZydcbiAgICB9LFxuICAgIGhhbmRsZXI6IHtcbiAgICAgIHR5cGU6ICdmdW5jdGlvbicsXG4gICAgICBvcHRpb25hbDogdHJ1ZVxuICAgIH0sXG4gICAgc2NvcGU6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgdmFsdWVzOiBbJ3Bhc3QnLCAnZnV0dXJlJywgJ2FsbCddLFxuICAgICAgb3B0aW9uYWw6IHRydWVcbiAgICB9LFxuICAgIHBhdGg6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgb3B0aW9uYWw6IHRydWVcbiAgICB9XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaXRlbUNvbnN0cmFpbnRzO1xuIiwiLypcbkNvcHlyaWdodCAyMDIwIEFkb2JlLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBmaWxlIGlzIGxpY2Vuc2VkIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xueW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHlcbm9mIHRoZSBMaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG5Vbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyXG50aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBSRVBSRVNFTlRBVElPTlNcbk9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZVxuZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG5cbmNvbnN0IENPTlNUQU5UUyA9IHJlcXVpcmUoJy4vY29uc3RhbnRzJyk7XG5cbi8qKlxuICogQ29uc3RydWN0cyBhIGRhdGEgbGF5ZXIgbGlzdGVuZXIuXG4gKlxuICogQHBhcmFtIHtJdGVtfSBpdGVtIFRoZSBpdGVtIGZyb20gd2hpY2ggdG8gY29uc3RydWN0IHRoZSBsaXN0ZW5lci5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgY29uc3QgX2V2ZW50ID0gaXRlbS5jb25maWcub24gfHwgaXRlbS5jb25maWcub2ZmO1xuICBjb25zdCBfaGFuZGxlciA9IGl0ZW0uY29uZmlnLmhhbmRsZXIgfHwgbnVsbDtcbiAgY29uc3QgX3Njb3BlID0gaXRlbS5jb25maWcuc2NvcGUgfHwgKGl0ZW0uY29uZmlnLm9uICYmIENPTlNUQU5UUy5saXN0ZW5lclNjb3BlLkFMTCkgfHwgbnVsbDtcbiAgY29uc3QgX3BhdGggPSBpdGVtLmNvbmZpZy5wYXRoIHx8IG51bGw7XG5cbiAgcmV0dXJuIHtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBsaXN0ZW5lciBldmVudCBuYW1lLlxuICAgICAqXG4gICAgICogQHJldHVybnMge1N0cmluZ30gVGhlIGxpc3RlbmVyIGV2ZW50IG5hbWUuXG4gICAgICovXG4gICAgZXZlbnQ6IF9ldmVudCxcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGxpc3RlbmVyIGhhbmRsZXIuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7KEZ1bmN0aW9ufG51bGwpfSBUaGUgbGlzdGVuZXIgaGFuZGxlci5cbiAgICAgKi9cbiAgICBoYW5kbGVyOiBfaGFuZGxlcixcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGxpc3RlbmVyIHNjb3BlLlxuICAgICAqXG4gICAgICogQHJldHVybnMgeyhTdHJpbmd8bnVsbCl9IFRoZSBsaXN0ZW5lciBzY29wZS5cbiAgICAgKi9cbiAgICBzY29wZTogX3Njb3BlLFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbGlzdGVuZXIgcGF0aC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHsoU3RyaW5nfG51bGwpfSBUaGUgbGlzdGVuZXIgcGF0aC5cbiAgICAgKi9cbiAgICBwYXRoOiBfcGF0aFxuICB9O1xufTtcbiIsIi8qXG5Db3B5cmlnaHQgMjAyMCBBZG9iZS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgZmlsZSBpcyBsaWNlbnNlZCB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbnlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5XG5vZiB0aGUgTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlclxudGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgUkVQUkVTRU5UQVRJT05TXG5PRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2VcbmdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuXG5jb25zdCBfID0gcmVxdWlyZSgnLi4vY3VzdG9tLWxvZGFzaCcpO1xuY29uc3QgY2xvbmVEZWVwID0gXy5jbG9uZURlZXA7XG5cbmNvbnN0IGNvbnN0YW50cyA9IHJlcXVpcmUoJy4vY29uc3RhbnRzJyk7XG5jb25zdCBsaXN0ZW5lck1hdGNoID0gcmVxdWlyZSgnLi91dGlscy9saXN0ZW5lck1hdGNoJyk7XG5jb25zdCBpbmRleE9mTGlzdGVuZXIgPSByZXF1aXJlKCcuL3V0aWxzL2luZGV4T2ZMaXN0ZW5lcicpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBsaXN0ZW5lciBtYW5hZ2VyLlxuICpcbiAqIEBwYXJhbSB7TWFuYWdlcn0gZGF0YUxheWVyTWFuYWdlciBUaGUgZGF0YSBsYXllciBtYW5hZ2VyLlxuICogQHJldHVybnMge0xpc3RlbmVyTWFuYWdlcn0gQSBsaXN0ZW5lciBtYW5hZ2VyLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGRhdGFMYXllck1hbmFnZXIpIHtcbiAgY29uc3QgX2xpc3RlbmVycyA9IHt9O1xuICBjb25zdCBfZGF0YUxheWVyTWFuYWdlciA9IGRhdGFMYXllck1hbmFnZXI7XG5cbiAgLyoqXG4gICAqIEZpbmQgaW5kZXggb2YgbGlzdGVuZXIgaW4gbGlzdGVuZXJzIG9iamVjdC5cbiAgICovXG4gIGNvbnN0IF9pbmRleE9mTGlzdGVuZXIgPSBpbmRleE9mTGlzdGVuZXIuYmluZChudWxsLCBfbGlzdGVuZXJzKTtcblxuICBjb25zdCBMaXN0ZW5lck1hbmFnZXIgPSB7XG4gICAgLyoqXG4gICAgICogUmVnaXN0ZXJzIGEgbGlzdGVuZXIuXG4gICAgICpcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAcGFyYW0ge0xpc3RlbmVyfSBsaXN0ZW5lciBUaGUgbGlzdGVuZXIgdG8gcmVnaXN0ZXIuXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaWYgdGhlIGxpc3RlbmVyIHdhcyByZWdpc3RlcmVkLCBmYWxzZSBvdGhlcndpc2UuXG4gICAgICovXG4gICAgcmVnaXN0ZXI6IGZ1bmN0aW9uKGxpc3RlbmVyKSB7XG4gICAgICBjb25zdCBldmVudCA9IGxpc3RlbmVyLmV2ZW50O1xuXG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKF9saXN0ZW5lcnMsIGV2ZW50KSkge1xuICAgICAgICBpZiAoX2luZGV4T2ZMaXN0ZW5lcihsaXN0ZW5lcikgPT09IC0xKSB7XG4gICAgICAgICAgX2xpc3RlbmVyc1tsaXN0ZW5lci5ldmVudF0ucHVzaChsaXN0ZW5lcik7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF9saXN0ZW5lcnNbbGlzdGVuZXIuZXZlbnRdID0gW2xpc3RlbmVyXTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVbnJlZ2lzdGVycyBhIGxpc3RlbmVyLlxuICAgICAqXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHBhcmFtIHtMaXN0ZW5lcn0gbGlzdGVuZXIgVGhlIGxpc3RlbmVyIHRvIHVucmVnaXN0ZXIuXG4gICAgICovXG4gICAgdW5yZWdpc3RlcjogZnVuY3Rpb24obGlzdGVuZXIpIHtcbiAgICAgIGNvbnN0IGV2ZW50ID0gbGlzdGVuZXIuZXZlbnQ7XG5cbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoX2xpc3RlbmVycywgZXZlbnQpKSB7XG4gICAgICAgIGlmICghKGxpc3RlbmVyLmhhbmRsZXIgfHwgbGlzdGVuZXIuc2NvcGUgfHwgbGlzdGVuZXIucGF0aCkpIHtcbiAgICAgICAgICBfbGlzdGVuZXJzW2V2ZW50XSA9IFtdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGluZGV4ID0gX2luZGV4T2ZMaXN0ZW5lcihsaXN0ZW5lcik7XG4gICAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgIF9saXN0ZW5lcnNbZXZlbnRdLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBUcmlnZ2VycyBsaXN0ZW5lcnMgcmVsYXRlZCB0byB0aGUgcGFzc2VkIGl0ZW0uXG4gICAgICpcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAcGFyYW0ge0l0ZW19IGl0ZW0gSXRlbSB0byB0cmlnZ2VyIGxpc3RlbmVyIGZvci5cbiAgICAgKi9cbiAgICB0cmlnZ2VyTGlzdGVuZXJzOiBmdW5jdGlvbihpdGVtKSB7XG4gICAgICBjb25zdCB0cmlnZ2VyZWRFdmVudHMgPSBfZ2V0VHJpZ2dlcmVkRXZlbnRzKGl0ZW0pO1xuICAgICAgdHJpZ2dlcmVkRXZlbnRzLmZvckVhY2goZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChfbGlzdGVuZXJzLCBldmVudCkpIHtcbiAgICAgICAgICBmb3IgKGNvbnN0IGxpc3RlbmVyIG9mIF9saXN0ZW5lcnNbZXZlbnRdKSB7XG4gICAgICAgICAgICBfY2FsbEhhbmRsZXIobGlzdGVuZXIsIGl0ZW0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBUcmlnZ2VycyBhIHNpbmdsZSBsaXN0ZW5lciBvbiB0aGUgcGFzc2VkIGl0ZW0uXG4gICAgICpcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAcGFyYW0ge0xpc3RlbmVyfSBsaXN0ZW5lciBMaXN0ZW5lciB0byBjYWxsLlxuICAgICAqIEBwYXJhbSB7SXRlbX0gaXRlbSBJdGVtIHRvIGNhbGwgdGhlIGxpc3RlbmVyIHdpdGguXG4gICAgICovXG4gICAgdHJpZ2dlckxpc3RlbmVyOiBmdW5jdGlvbihsaXN0ZW5lciwgaXRlbSkge1xuICAgICAgX2NhbGxIYW5kbGVyKGxpc3RlbmVyLCBpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIENhbGxzIHRoZSBsaXN0ZW5lciBoYW5kbGVyIG9uIHRoZSBpdGVtIGlmIGEgbWF0Y2ggaXMgZm91bmQuXG4gICAqXG4gICAqIEBwYXJhbSB7TGlzdGVuZXJ9IGxpc3RlbmVyIFRoZSBsaXN0ZW5lci5cbiAgICogQHBhcmFtIHtJdGVtfSBpdGVtIFRoZSBpdGVtLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZnVuY3Rpb24gX2NhbGxIYW5kbGVyKGxpc3RlbmVyLCBpdGVtKSB7XG4gICAgaWYgKGxpc3RlbmVyTWF0Y2gobGlzdGVuZXIsIGl0ZW0pKSB7XG4gICAgICBjb25zdCBjYWxsYmFja0FyZ3MgPSBbY2xvbmVEZWVwKGl0ZW0uY29uZmlnKV07XG4gICAgICBsaXN0ZW5lci5oYW5kbGVyLmFwcGx5KF9kYXRhTGF5ZXJNYW5hZ2VyLmdldERhdGFMYXllcigpLCBjYWxsYmFja0FyZ3MpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBuYW1lcyBvZiB0aGUgZXZlbnRzIHRoYXQgYXJlIHRyaWdnZXJlZCBmb3IgdGhpcyBpdGVtLlxuICAgKlxuICAgKiBAcGFyYW0ge0l0ZW19IGl0ZW0gVGhlIGl0ZW0uXG4gICAqIEByZXR1cm5zIHtBcnJheTxTdHJpbmc+fSBUaGUgbmFtZXMgb2YgdGhlIGV2ZW50cyB0aGF0IGFyZSB0cmlnZ2VyZWQgZm9yIHRoaXMgaXRlbS5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGZ1bmN0aW9uIF9nZXRUcmlnZ2VyZWRFdmVudHMoaXRlbSkge1xuICAgIGNvbnN0IHRyaWdnZXJlZEV2ZW50cyA9IFtdO1xuXG4gICAgc3dpdGNoIChpdGVtLnR5cGUpIHtcbiAgICAgIGNhc2UgY29uc3RhbnRzLml0ZW1UeXBlLkRBVEE6IHtcbiAgICAgICAgdHJpZ2dlcmVkRXZlbnRzLnB1c2goY29uc3RhbnRzLmRhdGFMYXllckV2ZW50LkNIQU5HRSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBjb25zdGFudHMuaXRlbVR5cGUuRVZFTlQ6IHtcbiAgICAgICAgdHJpZ2dlcmVkRXZlbnRzLnB1c2goY29uc3RhbnRzLmRhdGFMYXllckV2ZW50LkVWRU5UKTtcbiAgICAgICAgaWYgKGl0ZW0uZGF0YSkgdHJpZ2dlcmVkRXZlbnRzLnB1c2goY29uc3RhbnRzLmRhdGFMYXllckV2ZW50LkNIQU5HRSk7XG4gICAgICAgIGlmIChpdGVtLmNvbmZpZy5ldmVudCAhPT0gY29uc3RhbnRzLmRhdGFMYXllckV2ZW50LkNIQU5HRSkge1xuICAgICAgICAgIHRyaWdnZXJlZEV2ZW50cy5wdXNoKGl0ZW0uY29uZmlnLmV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRyaWdnZXJlZEV2ZW50cztcbiAgfVxuXG4gIHJldHVybiBMaXN0ZW5lck1hbmFnZXI7XG59O1xuIiwiLypcbkNvcHlyaWdodCAyMDIwIEFkb2JlLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBmaWxlIGlzIGxpY2Vuc2VkIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xueW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHlcbm9mIHRoZSBMaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG5Vbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyXG50aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBSRVBSRVNFTlRBVElPTlNcbk9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZVxuZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG5cbmNvbnN0IF8gPSByZXF1aXJlKCcuLi8uLi9jdXN0b20tbG9kYXNoJyk7XG5jb25zdCBoYXMgPSBfLmhhcztcbmNvbnN0IGdldCA9IF8uZ2V0O1xuXG4vKipcbiAgKiBDaGVja3MgaWYgdGhlIG9iamVjdCBjb250YWlucyBhbiBhbmNlc3RvciB0aGF0IGlzIHNldCB0byBudWxsIG9yIHVuZGVmaW5lZC5cbiAgKlxuICAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjaGVjay5cbiAgKiBAcGFyYW0ge1N0cmluZ30gcGF0aCBUaGUgcGF0aCB0byBjaGVjay5cbiAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgb2JqZWN0IGNvbnRhaW5zIGFuIGFuY2VzdG9yIHRoYXQgaXMgc2V0IHRvIG51bGwgb3IgdW5kZWZpbmVkLCBmYWxzZSBvdGhlcndpc2UuXG4gICogQHByaXZhdGVcbiAgKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqZWN0LCBwYXRoKSB7XG4gIGxldCBhbmNlc3RvclBhdGggPSBwYXRoLnN1YnN0cmluZygwLCBwYXRoLmxhc3RJbmRleE9mKCcuJykpO1xuICB3aGlsZSAoYW5jZXN0b3JQYXRoKSB7XG4gICAgaWYgKGhhcyhvYmplY3QsIGFuY2VzdG9yUGF0aCkpIHtcbiAgICAgIGNvbnN0IGFuY2VzdG9yVmFsdWUgPSBnZXQob2JqZWN0LCBhbmNlc3RvclBhdGgpO1xuICAgICAgaWYgKGFuY2VzdG9yVmFsdWUgPT09IG51bGwgfHwgYW5jZXN0b3JWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICBhbmNlc3RvclBhdGggPSBhbmNlc3RvclBhdGguc3Vic3RyaW5nKDAsIGFuY2VzdG9yUGF0aC5sYXN0SW5kZXhPZignLicpKTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG4iLCIvKlxuQ29weXJpZ2h0IDIwMjAgQWRvYmUuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGZpbGUgaXMgbGljZW5zZWQgdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG55b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weVxub2YgdGhlIExpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cblVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXJcbnRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIFJFUFJFU0VOVEFUSU9OU1xuT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlXG5nb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cblxuY29uc3QgXyA9IHJlcXVpcmUoJy4uLy4uL2N1c3RvbS1sb2Rhc2gnKTtcbmNvbnN0IGNsb25lRGVlcFdpdGggPSBfLmNsb25lRGVlcFdpdGg7XG5jb25zdCBpc09iamVjdCA9IF8uaXNPYmplY3Q7XG5jb25zdCBpc0FycmF5ID0gXy5pc0FycmF5O1xuY29uc3QgcmVqZWN0ID0gXy5yZWplY3Q7XG5jb25zdCBtZXJnZVdpdGggPSBfLm1lcmdlV2l0aDtcbmNvbnN0IGlzTnVsbCA9IF8uaXNOdWxsO1xuXG4vKipcbiAqIE1lcmdlcyB0aGUgc291cmNlIGludG8gdGhlIG9iamVjdCBhbmQgc2V0cyBvYmplY3RzIGFzICd1bmRlZmluZWQnIGlmIHRoZXkgYXJlICd1bmRlZmluZWQnIGluIHRoZSBzb3VyY2Ugb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCBpbnRvIHdoaWNoIHRvIG1lcmdlLlxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgc291cmNlIHRvIG1lcmdlIHdpdGguXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgb2JqZWN0IGludG8gd2hpY2ggc291cmNlIHdhcyBtZXJnZWQgaW4uXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqZWN0LCBzb3VyY2UpIHtcbiAgY29uc3QgbWFrZU9taXR0aW5nQ2xvbmVEZWVwQ3VzdG9taXplciA9IGZ1bmN0aW9uKHByZWRpY2F0ZSkge1xuICAgIHJldHVybiBmdW5jdGlvbiBvbWl0dGluZ0Nsb25lRGVlcEN1c3RvbWl6ZXIodmFsdWUsIGtleSwgb2JqZWN0LCBzdGFjaykge1xuICAgICAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0KHZhbHVlLCBwcmVkaWNhdGUpLm1hcChpdGVtID0+IGNsb25lRGVlcFdpdGgoaXRlbSwgb21pdHRpbmdDbG9uZURlZXBDdXN0b21pemVyKSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjbG9uZSA9IHt9O1xuICAgICAgICBmb3IgKGNvbnN0IHN1YktleSBvZiBPYmplY3Qua2V5cyh2YWx1ZSkpIHtcbiAgICAgICAgICBpZiAoIXByZWRpY2F0ZSh2YWx1ZVtzdWJLZXldKSkge1xuICAgICAgICAgICAgY2xvbmVbc3ViS2V5XSA9IGNsb25lRGVlcFdpdGgodmFsdWVbc3ViS2V5XSwgb21pdHRpbmdDbG9uZURlZXBDdXN0b21pemVyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNsb25lO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9O1xuICB9O1xuXG4gIGNvbnN0IGN1c3RvbWl6ZXIgPSBmdW5jdGlvbihvYmpWYWx1ZSwgc3JjVmFsdWUsIGtleSwgb2JqZWN0KSB7XG4gICAgaWYgKHR5cGVvZiBzcmNWYWx1ZSA9PT0gJ3VuZGVmaW5lZCcgfHwgc3JjVmFsdWUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBvbWl0RGVlcCA9IGZ1bmN0aW9uKHZhbHVlLCBwcmVkaWNhdGUgPSAodmFsKSA9PiAhdmFsKSB7XG4gICAgcmV0dXJuIGNsb25lRGVlcFdpdGgodmFsdWUsIG1ha2VPbWl0dGluZ0Nsb25lRGVlcEN1c3RvbWl6ZXIocHJlZGljYXRlKSk7XG4gIH07XG5cbiAgbWVyZ2VXaXRoKG9iamVjdCwgc291cmNlLCBjdXN0b21pemVyKTtcblxuICAvLyBSZW1vdmUgbnVsbCBvciB1bmRlZmluZWQgb2JqZWN0c1xuICBvYmplY3QgPSBvbWl0RGVlcChvYmplY3QsIGlzTnVsbCk7XG5cbiAgcmV0dXJuIG9iamVjdDtcbn07XG4iLCIvKlxuQ29weXJpZ2h0IDIwMjAgQWRvYmUuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGZpbGUgaXMgbGljZW5zZWQgdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG55b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weVxub2YgdGhlIExpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cblVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXJcbnRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIFJFUFJFU0VOVEFUSU9OU1xuT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlXG5nb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cblxuY29uc3QgXyA9IHJlcXVpcmUoJy4uLy4uL2N1c3RvbS1sb2Rhc2gnKTtcbmNvbnN0IGZpbmQgPSBfLmZpbmQ7XG5jb25zdCBpbmNsdWRlcyA9IF8uaW5jbHVkZXM7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZGF0YSwgY29uc3RyYWludHMpIHtcbiAgLy8gR28gdGhyb3VnaCBhbGwgY29uc3RyYWludHMgYW5kIGZpbmQgb25lIHdoaWNoIGRvZXMgbm90IG1hdGNoIHRoZSBkYXRhXG4gIGNvbnN0IGZvdW5kT2JqZWN0aW9uID0gZmluZChPYmplY3Qua2V5cyhjb25zdHJhaW50cyksIGtleSA9PiB7XG4gICAgY29uc3QgdHlwZSA9IGNvbnN0cmFpbnRzW2tleV0udHlwZTtcbiAgICBjb25zdCBzdXBwb3J0ZWRWYWx1ZXMgPSBrZXkgJiYgY29uc3RyYWludHNba2V5XS52YWx1ZXM7XG4gICAgY29uc3QgbWFuZGF0b3J5ID0gIWNvbnN0cmFpbnRzW2tleV0ub3B0aW9uYWw7XG4gICAgY29uc3QgdmFsdWUgPSBkYXRhW2tleV07XG4gICAgY29uc3QgdmFsdWVUeXBlID0gdHlwZW9mIHZhbHVlO1xuICAgIGNvbnN0IGluY29ycmVjdFR5cGUgPSB0eXBlICYmIHZhbHVlVHlwZSAhPT0gdHlwZTtcbiAgICBjb25zdCBub01hdGNoRm9yU3VwcG9ydGVkVmFsdWVzID0gc3VwcG9ydGVkVmFsdWVzICYmICFpbmNsdWRlcyhzdXBwb3J0ZWRWYWx1ZXMsIHZhbHVlKTtcbiAgICBpZiAobWFuZGF0b3J5KSB7XG4gICAgICByZXR1cm4gIXZhbHVlIHx8IGluY29ycmVjdFR5cGUgfHwgbm9NYXRjaEZvclN1cHBvcnRlZFZhbHVlcztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHZhbHVlICYmIChpbmNvcnJlY3RUeXBlIHx8IG5vTWF0Y2hGb3JTdXBwb3J0ZWRWYWx1ZXMpO1xuICAgIH1cbiAgfSk7XG4gIC8vIElmIG5vIG9iamVjdGlvbnMgZm91bmQgdGhlbiBkYXRhIG1hdGNoZXMgY29udHJhaW50c1xuICByZXR1cm4gdHlwZW9mIGZvdW5kT2JqZWN0aW9uID09PSAndW5kZWZpbmVkJztcbn07XG4iLCIvKlxuQ29weXJpZ2h0IDIwMjAgQWRvYmUuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGZpbGUgaXMgbGljZW5zZWQgdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG55b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weVxub2YgdGhlIExpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cblVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXJcbnRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIFJFUFJFU0VOVEFUSU9OU1xuT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlXG5nb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cblxuY29uc3QgXyA9IHJlcXVpcmUoJy4uLy4uL2N1c3RvbS1sb2Rhc2gnKTtcbmNvbnN0IGlzRXF1YWwgPSBfLmlzRXF1YWw7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdGVuZXJzLCBsaXN0ZW5lcikge1xuICBjb25zdCBldmVudCA9IGxpc3RlbmVyLmV2ZW50O1xuXG4gIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobGlzdGVuZXJzLCBldmVudCkpIHtcbiAgICBmb3IgKGNvbnN0IFtpbmRleCwgcmVnaXN0ZXJlZExpc3RlbmVyXSBvZiBsaXN0ZW5lcnNbZXZlbnRdLmVudHJpZXMoKSkge1xuICAgICAgaWYgKGlzRXF1YWwocmVnaXN0ZXJlZExpc3RlbmVyLmhhbmRsZXIsIGxpc3RlbmVyLmhhbmRsZXIpKSB7XG4gICAgICAgIHJldHVybiBpbmRleDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufTtcbiIsIi8qXG5Db3B5cmlnaHQgMjAyMCBBZG9iZS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgZmlsZSBpcyBsaWNlbnNlZCB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbnlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5XG5vZiB0aGUgTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlclxudGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgUkVQUkVTRU5UQVRJT05TXG5PRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2VcbmdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuXG5jb25zdCBfID0gcmVxdWlyZSgnLi4vLi4vY3VzdG9tLWxvZGFzaCcpO1xuY29uc3QgaGFzID0gXy5oYXM7XG5cbmNvbnN0IENPTlNUQU5UUyA9IHJlcXVpcmUoJy4uL2NvbnN0YW50cycpO1xuY29uc3QgYW5jZXN0b3JSZW1vdmVkID0gcmVxdWlyZSgnLi9hbmNlc3RvclJlbW92ZWQnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgdGhlIGxpc3RlbmVyIG1hdGNoZXMgdGhlIGl0ZW0uXG4gKlxuICogQHBhcmFtIHtMaXN0ZW5lcn0gbGlzdGVuZXIgVGhlIGxpc3RlbmVyLlxuICogQHBhcmFtIHtJdGVtfSBpdGVtIFRoZSBpdGVtLlxuICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaWYgbGlzdGVuZXIgbWF0Y2hlcyB0aGUgaXRlbSwgZmFsc2Ugb3RoZXJ3aXNlLlxuICovXG5mdW5jdGlvbiBsaXN0ZW5lck1hdGNoKGxpc3RlbmVyLCBpdGVtKSB7XG4gIGNvbnN0IGV2ZW50ID0gbGlzdGVuZXIuZXZlbnQ7XG4gIGNvbnN0IGl0ZW1Db25maWcgPSBpdGVtLmNvbmZpZztcbiAgbGV0IG1hdGNoZXMgPSBmYWxzZTtcblxuICBpZiAoaXRlbS50eXBlID09PSBDT05TVEFOVFMuaXRlbVR5cGUuREFUQSkge1xuICAgIGlmIChldmVudCA9PT0gQ09OU1RBTlRTLmRhdGFMYXllckV2ZW50LkNIQU5HRSkge1xuICAgICAgbWF0Y2hlcyA9IHNlbGVjdG9yTWF0Y2hlcyhsaXN0ZW5lciwgaXRlbSk7XG4gICAgfVxuICB9IGVsc2UgaWYgKGl0ZW0udHlwZSA9PT0gQ09OU1RBTlRTLml0ZW1UeXBlLkVWRU5UKSB7XG4gICAgaWYgKGV2ZW50ID09PSBDT05TVEFOVFMuZGF0YUxheWVyRXZlbnQuRVZFTlQgfHwgZXZlbnQgPT09IGl0ZW1Db25maWcuZXZlbnQpIHtcbiAgICAgIG1hdGNoZXMgPSBzZWxlY3Rvck1hdGNoZXMobGlzdGVuZXIsIGl0ZW0pO1xuICAgIH1cbiAgICBpZiAoaXRlbS5kYXRhICYmIGV2ZW50ID09PSBDT05TVEFOVFMuZGF0YUxheWVyRXZlbnQuQ0hBTkdFKSB7XG4gICAgICBtYXRjaGVzID0gc2VsZWN0b3JNYXRjaGVzKGxpc3RlbmVyLCBpdGVtKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbWF0Y2hlcztcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYSBsaXN0ZW5lciBoYXMgYSBzZWxlY3RvciB0aGF0IHBvaW50cyB0byBhbiBvYmplY3QgaW4gdGhlIGRhdGEgcGF5bG9hZCBvZiBhbiBpdGVtLlxuICpcbiAqIEBwYXJhbSB7TGlzdGVuZXJ9IGxpc3RlbmVyIFRoZSBsaXN0ZW5lciB0byBleHRyYWN0IHRoZSBzZWxlY3RvciBmcm9tLlxuICogQHBhcmFtIHtJdGVtfSBpdGVtIFRoZSBpdGVtLlxuICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaWYgYSBzZWxlY3RvciBpcyBub3QgcHJvdmlkZWQgb3IgaWYgdGhlIGdpdmVuIHNlbGVjdG9yIGlzIG1hdGNoaW5nLCBmYWxzZSBvdGhlcndpc2UuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBzZWxlY3Rvck1hdGNoZXMobGlzdGVuZXIsIGl0ZW0pIHtcbiAgaWYgKGl0ZW0uZGF0YSAmJiBsaXN0ZW5lci5wYXRoKSB7XG4gICAgcmV0dXJuIGhhcyhpdGVtLmRhdGEsIGxpc3RlbmVyLnBhdGgpIHx8IGFuY2VzdG9yUmVtb3ZlZChpdGVtLmRhdGEsIGxpc3RlbmVyLnBhdGgpO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdGVuZXJNYXRjaDtcbiIsIm1vZHVsZS5leHBvcnRzPXtcbiAgXCJ2ZXJzaW9uXCI6IFwiMi4wLjJcIlxufVxuIl19
