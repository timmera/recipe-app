function X5(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const a=Object.getOwnPropertyDescriptor(r,o);a&&Object.defineProperty(e,o,a.get?a:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerpolicy&&(a.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?a.credentials="include":o.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}})();var zi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Q5(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var _={exports:{}},U={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hi=Symbol.for("react.element"),J5=Symbol.for("react.portal"),e3=Symbol.for("react.fragment"),t3=Symbol.for("react.strict_mode"),n3=Symbol.for("react.profiler"),r3=Symbol.for("react.provider"),o3=Symbol.for("react.context"),a3=Symbol.for("react.forward_ref"),i3=Symbol.for("react.suspense"),s3=Symbol.for("react.memo"),l3=Symbol.for("react.lazy"),bp=Symbol.iterator;function u3(e){return e===null||typeof e!="object"?null:(e=bp&&e[bp]||e["@@iterator"],typeof e=="function"?e:null)}var Dh={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$h=Object.assign,Wh={};function Mo(e,t,n){this.props=e,this.context=t,this.refs=Wh,this.updater=n||Dh}Mo.prototype.isReactComponent={};Mo.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Mo.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Hh(){}Hh.prototype=Mo.prototype;function rf(e,t,n){this.props=e,this.context=t,this.refs=Wh,this.updater=n||Dh}var of=rf.prototype=new Hh;of.constructor=rf;$h(of,Mo.prototype);of.isPureReactComponent=!0;var vp=Array.isArray,Uh=Object.prototype.hasOwnProperty,af={current:null},Gh={key:!0,ref:!0,__self:!0,__source:!0};function Kh(e,t,n){var r,o={},a=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(a=""+t.key),t)Uh.call(t,r)&&!Gh.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];o.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:hi,type:e,key:a,ref:i,props:o,_owner:af.current}}function c3(e,t){return{$$typeof:hi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function sf(e){return typeof e=="object"&&e!==null&&e.$$typeof===hi}function d3(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var wp=/\/+/g;function Au(e,t){return typeof e=="object"&&e!==null&&e.key!=null?d3(""+e.key):t.toString(36)}function ds(e,t,n,r,o){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(a){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case hi:case J5:i=!0}}if(i)return i=e,o=o(i),e=r===""?"."+Au(i,0):r,vp(o)?(n="",e!=null&&(n=e.replace(wp,"$&/")+"/"),ds(o,t,n,"",function(u){return u})):o!=null&&(sf(o)&&(o=c3(o,n+(!o.key||i&&i.key===o.key?"":(""+o.key).replace(wp,"$&/")+"/")+e)),t.push(o)),1;if(i=0,r=r===""?".":r+":",vp(e))for(var s=0;s<e.length;s++){a=e[s];var l=r+Au(a,s);i+=ds(a,t,n,l,o)}else if(l=u3(e),typeof l=="function")for(e=l.call(e),s=0;!(a=e.next()).done;)a=a.value,l=r+Au(a,s++),i+=ds(a,t,n,l,o);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function Ri(e,t,n){if(e==null)return e;var r=[],o=0;return ds(e,r,"","",function(a){return t.call(n,a,o++)}),r}function f3(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var tt={current:null},fs={transition:null},p3={ReactCurrentDispatcher:tt,ReactCurrentBatchConfig:fs,ReactCurrentOwner:af};U.Children={map:Ri,forEach:function(e,t,n){Ri(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ri(e,function(){t++}),t},toArray:function(e){return Ri(e,function(t){return t})||[]},only:function(e){if(!sf(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};U.Component=Mo;U.Fragment=e3;U.Profiler=n3;U.PureComponent=rf;U.StrictMode=t3;U.Suspense=i3;U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=p3;U.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=$h({},e.props),o=e.key,a=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,i=af.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)Uh.call(t,l)&&!Gh.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:hi,type:e.type,key:o,ref:a,props:r,_owner:i}};U.createContext=function(e){return e={$$typeof:o3,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:r3,_context:e},e.Consumer=e};U.createElement=Kh;U.createFactory=function(e){var t=Kh.bind(null,e);return t.type=e,t};U.createRef=function(){return{current:null}};U.forwardRef=function(e){return{$$typeof:a3,render:e}};U.isValidElement=sf;U.lazy=function(e){return{$$typeof:l3,_payload:{_status:-1,_result:e},_init:f3}};U.memo=function(e,t){return{$$typeof:s3,type:e,compare:t===void 0?null:t}};U.startTransition=function(e){var t=fs.transition;fs.transition={};try{e()}finally{fs.transition=t}};U.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};U.useCallback=function(e,t){return tt.current.useCallback(e,t)};U.useContext=function(e){return tt.current.useContext(e)};U.useDebugValue=function(){};U.useDeferredValue=function(e){return tt.current.useDeferredValue(e)};U.useEffect=function(e,t){return tt.current.useEffect(e,t)};U.useId=function(){return tt.current.useId()};U.useImperativeHandle=function(e,t,n){return tt.current.useImperativeHandle(e,t,n)};U.useInsertionEffect=function(e,t){return tt.current.useInsertionEffect(e,t)};U.useLayoutEffect=function(e,t){return tt.current.useLayoutEffect(e,t)};U.useMemo=function(e,t){return tt.current.useMemo(e,t)};U.useReducer=function(e,t,n){return tt.current.useReducer(e,t,n)};U.useRef=function(e){return tt.current.useRef(e)};U.useState=function(e){return tt.current.useState(e)};U.useSyncExternalStore=function(e,t,n){return tt.current.useSyncExternalStore(e,t,n)};U.useTransition=function(){return tt.current.useTransition()};U.version="18.2.0";(function(e){e.exports=U})(_);const q=Q5(_.exports),xp=X5({__proto__:null,default:q},[_.exports]);var Va=Boolean(globalThis==null?void 0:globalThis.document)?_.exports.useLayoutEffect:_.exports.useEffect,xl={exports:{}},Sl={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m3=_.exports,h3=Symbol.for("react.element"),g3=Symbol.for("react.fragment"),y3=Object.prototype.hasOwnProperty,b3=m3.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,v3={key:!0,ref:!0,__self:!0,__source:!0};function Zh(e,t,n){var r,o={},a=null,i=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)y3.call(t,r)&&!v3.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:h3,type:e,key:a,ref:i,props:o,_owner:b3.current}}Sl.Fragment=g3;Sl.jsx=Zh;Sl.jsxs=Zh;(function(e){e.exports=Sl})(xl);const Pe=xl.exports.Fragment,w=xl.exports.jsx,B=xl.exports.jsxs;var lf=_.exports.createContext({});lf.displayName="ColorModeContext";function uf(){const e=_.exports.useContext(lf);if(e===void 0)throw new Error("useColorMode must be used within a ColorModeProvider");return e}var Mi={light:"chakra-ui-light",dark:"chakra-ui-dark"};function w3(e={}){const{preventTransition:t=!0}=e,n={setDataset:r=>{const o=t?n.preventTransition():void 0;document.documentElement.dataset.theme=r,document.documentElement.style.colorScheme=r,o==null||o()},setClassName(r){document.body.classList.add(r?Mi.dark:Mi.light),document.body.classList.remove(r?Mi.light:Mi.dark)},query(){return window.matchMedia("(prefers-color-scheme: dark)")},getSystemTheme(r){var a;return((a=n.query().matches)!=null?a:r==="dark")?"dark":"light"},addListener(r){const o=n.query(),a=i=>{r(i.matches?"dark":"light")};return typeof o.addListener=="function"?o.addListener(a):o.addEventListener("change",a),()=>{typeof o.removeListener=="function"?o.removeListener(a):o.removeEventListener("change",a)}},preventTransition(){const r=document.createElement("style");return r.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(r),()=>{window.getComputedStyle(document.body),requestAnimationFrame(()=>{requestAnimationFrame(()=>{document.head.removeChild(r)})})}}};return n}var x3="chakra-ui-color-mode";function S3(e){return{ssr:!1,type:"localStorage",get(t){if(!(globalThis!=null&&globalThis.document))return t;let n;try{n=localStorage.getItem(e)||t}catch{}return n||t},set(t){try{localStorage.setItem(e,t)}catch{}}}}var C3=S3(x3),Sp=()=>{};function Cp(e,t){return e.type==="cookie"&&e.ssr?e.get(t):t}function Yh(e){const{value:t,children:n,options:{useSystemColorMode:r,initialColorMode:o,disableTransitionOnChange:a}={},colorModeManager:i=C3}=e,s=o==="dark"?"dark":"light",[l,u]=_.exports.useState(()=>Cp(i,s)),[c,d]=_.exports.useState(()=>Cp(i)),{getSystemTheme:f,setClassName:p,setDataset:b,addListener:v}=_.exports.useMemo(()=>w3({preventTransition:a}),[a]),k=o==="system"&&!l?c:l,g=_.exports.useCallback(x=>{const F=x==="system"?f():x;u(F),p(F==="dark"),b(F),i.set(F)},[i,f,p,b]);Va(()=>{o==="system"&&d(f())},[]),_.exports.useEffect(()=>{const x=i.get();if(x){g(x);return}if(o==="system"){g("system");return}g(s)},[i,s,o,g]);const m=_.exports.useCallback(()=>{g(k==="dark"?"light":"dark")},[k,g]);_.exports.useEffect(()=>{if(!!r)return v(g)},[r,v,g]);const h=_.exports.useMemo(()=>({colorMode:t!=null?t:k,toggleColorMode:t?Sp:m,setColorMode:t?Sp:g,forced:t!==void 0}),[k,m,g,t]);return w(lf.Provider,{value:h,children:n})}Yh.displayName="ColorModeProvider";var Ec={exports:{}};(function(e,t){var n=200,r="__lodash_hash_undefined__",o=800,a=16,i=9007199254740991,s="[object Arguments]",l="[object Array]",u="[object AsyncFunction]",c="[object Boolean]",d="[object Date]",f="[object Error]",p="[object Function]",b="[object GeneratorFunction]",v="[object Map]",k="[object Number]",g="[object Null]",m="[object Object]",h="[object Proxy]",x="[object RegExp]",F="[object Set]",E="[object String]",A="[object Undefined]",I="[object WeakMap]",D="[object ArrayBuffer]",N="[object DataView]",Te="[object Float32Array]",je="[object Float64Array]",_t="[object Int8Array]",Yt="[object Int16Array]",Xt="[object Int32Array]",Se="[object Uint8Array]",Mt="[object Uint8ClampedArray]",L="[object Uint16Array]",W="[object Uint32Array]",H=/[\\^$.*+?()[\]{}|]/g,ge=/^\[object .+?Constructor\]$/,Fe=/^(?:0|[1-9]\d*)$/,ee={};ee[Te]=ee[je]=ee[_t]=ee[Yt]=ee[Xt]=ee[Se]=ee[Mt]=ee[L]=ee[W]=!0,ee[s]=ee[l]=ee[D]=ee[c]=ee[N]=ee[d]=ee[f]=ee[p]=ee[v]=ee[k]=ee[m]=ee[x]=ee[F]=ee[E]=ee[I]=!1;var Qt=typeof zi=="object"&&zi&&zi.Object===Object&&zi,Wo=typeof self=="object"&&self&&self.Object===Object&&self,ft=Qt||Wo||Function("return this")(),cr=t&&!t.nodeType&&t,Ho=cr&&!0&&e&&!e.nodeType&&e,Y0=Ho&&Ho.exports===cr,gu=Y0&&Qt.process,X0=function(){try{var y=Ho&&Ho.require&&Ho.require("util").types;return y||gu&&gu.binding&&gu.binding("util")}catch{}}(),Q0=X0&&X0.isTypedArray;function Nv(y,S,T){switch(T.length){case 0:return y.call(S);case 1:return y.call(S,T[0]);case 2:return y.call(S,T[0],T[1]);case 3:return y.call(S,T[0],T[1],T[2])}return y.apply(S,T)}function jv(y,S){for(var T=-1,z=Array(y);++T<y;)z[T]=S(T);return z}function Bv(y){return function(S){return y(S)}}function Ov(y,S){return y==null?void 0:y[S]}function Dv(y,S){return function(T){return y(S(T))}}var $v=Array.prototype,Wv=Function.prototype,Ti=Object.prototype,yu=ft["__core-js_shared__"],Fi=Wv.toString,gn=Ti.hasOwnProperty,J0=function(){var y=/[^.]+$/.exec(yu&&yu.keys&&yu.keys.IE_PROTO||"");return y?"Symbol(src)_1."+y:""}(),ep=Ti.toString,Hv=Fi.call(Object),Uv=RegExp("^"+Fi.call(gn).replace(H,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Ai=Y0?ft.Buffer:void 0,tp=ft.Symbol,np=ft.Uint8Array,rp=Ai?Ai.allocUnsafe:void 0,op=Dv(Object.getPrototypeOf,Object),ap=Object.create,Gv=Ti.propertyIsEnumerable,Kv=$v.splice,dr=tp?tp.toStringTag:void 0,Ei=function(){try{var y=wu(Object,"defineProperty");return y({},"",{}),y}catch{}}(),Zv=Ai?Ai.isBuffer:void 0,ip=Math.max,Yv=Date.now,sp=wu(ft,"Map"),Uo=wu(Object,"create"),Xv=function(){function y(){}return function(S){if(!pr(S))return{};if(ap)return ap(S);y.prototype=S;var T=new y;return y.prototype=void 0,T}}();function fr(y){var S=-1,T=y==null?0:y.length;for(this.clear();++S<T;){var z=y[S];this.set(z[0],z[1])}}function Qv(){this.__data__=Uo?Uo(null):{},this.size=0}function Jv(y){var S=this.has(y)&&delete this.__data__[y];return this.size-=S?1:0,S}function e5(y){var S=this.__data__;if(Uo){var T=S[y];return T===r?void 0:T}return gn.call(S,y)?S[y]:void 0}function t5(y){var S=this.__data__;return Uo?S[y]!==void 0:gn.call(S,y)}function n5(y,S){var T=this.__data__;return this.size+=this.has(y)?0:1,T[y]=Uo&&S===void 0?r:S,this}fr.prototype.clear=Qv,fr.prototype.delete=Jv,fr.prototype.get=e5,fr.prototype.has=t5,fr.prototype.set=n5;function yn(y){var S=-1,T=y==null?0:y.length;for(this.clear();++S<T;){var z=y[S];this.set(z[0],z[1])}}function r5(){this.__data__=[],this.size=0}function o5(y){var S=this.__data__,T=Pi(S,y);if(T<0)return!1;var z=S.length-1;return T==z?S.pop():Kv.call(S,T,1),--this.size,!0}function a5(y){var S=this.__data__,T=Pi(S,y);return T<0?void 0:S[T][1]}function i5(y){return Pi(this.__data__,y)>-1}function s5(y,S){var T=this.__data__,z=Pi(T,y);return z<0?(++this.size,T.push([y,S])):T[z][1]=S,this}yn.prototype.clear=r5,yn.prototype.delete=o5,yn.prototype.get=a5,yn.prototype.has=i5,yn.prototype.set=s5;function Dr(y){var S=-1,T=y==null?0:y.length;for(this.clear();++S<T;){var z=y[S];this.set(z[0],z[1])}}function l5(){this.size=0,this.__data__={hash:new fr,map:new(sp||yn),string:new fr}}function u5(y){var S=qi(this,y).delete(y);return this.size-=S?1:0,S}function c5(y){return qi(this,y).get(y)}function d5(y){return qi(this,y).has(y)}function f5(y,S){var T=qi(this,y),z=T.size;return T.set(y,S),this.size+=T.size==z?0:1,this}Dr.prototype.clear=l5,Dr.prototype.delete=u5,Dr.prototype.get=c5,Dr.prototype.has=d5,Dr.prototype.set=f5;function $r(y){var S=this.__data__=new yn(y);this.size=S.size}function p5(){this.__data__=new yn,this.size=0}function m5(y){var S=this.__data__,T=S.delete(y);return this.size=S.size,T}function h5(y){return this.__data__.get(y)}function g5(y){return this.__data__.has(y)}function y5(y,S){var T=this.__data__;if(T instanceof yn){var z=T.__data__;if(!sp||z.length<n-1)return z.push([y,S]),this.size=++T.size,this;T=this.__data__=new Dr(z)}return T.set(y,S),this.size=T.size,this}$r.prototype.clear=p5,$r.prototype.delete=m5,$r.prototype.get=h5,$r.prototype.has=g5,$r.prototype.set=y5;function b5(y,S){var T=Cu(y),z=!T&&Su(y),K=!T&&!z&&fp(y),ie=!T&&!z&&!K&&mp(y),pe=T||z||K||ie,G=pe?jv(y.length,String):[],me=G.length;for(var Tt in y)(S||gn.call(y,Tt))&&!(pe&&(Tt=="length"||K&&(Tt=="offset"||Tt=="parent")||ie&&(Tt=="buffer"||Tt=="byteLength"||Tt=="byteOffset")||cp(Tt,me)))&&G.push(Tt);return G}function bu(y,S,T){(T!==void 0&&!Li(y[S],T)||T===void 0&&!(S in y))&&vu(y,S,T)}function v5(y,S,T){var z=y[S];(!(gn.call(y,S)&&Li(z,T))||T===void 0&&!(S in y))&&vu(y,S,T)}function Pi(y,S){for(var T=y.length;T--;)if(Li(y[T][0],S))return T;return-1}function vu(y,S,T){S=="__proto__"&&Ei?Ei(y,S,{configurable:!0,enumerable:!0,value:T,writable:!0}):y[S]=T}var w5=L5();function Ii(y){return y==null?y===void 0?A:g:dr&&dr in Object(y)?z5(y):B5(y)}function lp(y){return Go(y)&&Ii(y)==s}function x5(y){if(!pr(y)||N5(y))return!1;var S=_u(y)?Uv:ge;return S.test(W5(y))}function S5(y){return Go(y)&&pp(y.length)&&!!ee[Ii(y)]}function C5(y){if(!pr(y))return j5(y);var S=dp(y),T=[];for(var z in y)z=="constructor"&&(S||!gn.call(y,z))||T.push(z);return T}function up(y,S,T,z,K){y!==S&&w5(S,function(ie,pe){if(K||(K=new $r),pr(ie))k5(y,S,pe,T,up,z,K);else{var G=z?z(xu(y,pe),ie,pe+"",y,S,K):void 0;G===void 0&&(G=ie),bu(y,pe,G)}},hp)}function k5(y,S,T,z,K,ie,pe){var G=xu(y,T),me=xu(S,T),Tt=pe.get(me);if(Tt){bu(y,T,Tt);return}var pt=ie?ie(G,me,T+"",y,S,pe):void 0,Ko=pt===void 0;if(Ko){var Tu=Cu(me),Fu=!Tu&&fp(me),yp=!Tu&&!Fu&&mp(me);pt=me,Tu||Fu||yp?Cu(G)?pt=G:H5(G)?pt=P5(G):Fu?(Ko=!1,pt=F5(me,!0)):yp?(Ko=!1,pt=E5(me,!0)):pt=[]:U5(me)||Su(me)?(pt=G,Su(G)?pt=G5(G):(!pr(G)||_u(G))&&(pt=R5(me))):Ko=!1}Ko&&(pe.set(me,pt),K(pt,me,z,ie,pe),pe.delete(me)),bu(y,T,pt)}function _5(y,S){return D5(O5(y,S,gp),y+"")}var T5=Ei?function(y,S){return Ei(y,"toString",{configurable:!0,enumerable:!1,value:Z5(S),writable:!0})}:gp;function F5(y,S){if(S)return y.slice();var T=y.length,z=rp?rp(T):new y.constructor(T);return y.copy(z),z}function A5(y){var S=new y.constructor(y.byteLength);return new np(S).set(new np(y)),S}function E5(y,S){var T=S?A5(y.buffer):y.buffer;return new y.constructor(T,y.byteOffset,y.length)}function P5(y,S){var T=-1,z=y.length;for(S||(S=Array(z));++T<z;)S[T]=y[T];return S}function I5(y,S,T,z){var K=!T;T||(T={});for(var ie=-1,pe=S.length;++ie<pe;){var G=S[ie],me=z?z(T[G],y[G],G,T,y):void 0;me===void 0&&(me=y[G]),K?vu(T,G,me):v5(T,G,me)}return T}function q5(y){return _5(function(S,T){var z=-1,K=T.length,ie=K>1?T[K-1]:void 0,pe=K>2?T[2]:void 0;for(ie=y.length>3&&typeof ie=="function"?(K--,ie):void 0,pe&&M5(T[0],T[1],pe)&&(ie=K<3?void 0:ie,K=1),S=Object(S);++z<K;){var G=T[z];G&&y(S,G,z,ie)}return S})}function L5(y){return function(S,T,z){for(var K=-1,ie=Object(S),pe=z(S),G=pe.length;G--;){var me=pe[y?G:++K];if(T(ie[me],me,ie)===!1)break}return S}}function qi(y,S){var T=y.__data__;return V5(S)?T[typeof S=="string"?"string":"hash"]:T.map}function wu(y,S){var T=Ov(y,S);return x5(T)?T:void 0}function z5(y){var S=gn.call(y,dr),T=y[dr];try{y[dr]=void 0;var z=!0}catch{}var K=ep.call(y);return z&&(S?y[dr]=T:delete y[dr]),K}function R5(y){return typeof y.constructor=="function"&&!dp(y)?Xv(op(y)):{}}function cp(y,S){var T=typeof y;return S=S==null?i:S,!!S&&(T=="number"||T!="symbol"&&Fe.test(y))&&y>-1&&y%1==0&&y<S}function M5(y,S,T){if(!pr(T))return!1;var z=typeof S;return(z=="number"?ku(T)&&cp(S,T.length):z=="string"&&S in T)?Li(T[S],y):!1}function V5(y){var S=typeof y;return S=="string"||S=="number"||S=="symbol"||S=="boolean"?y!=="__proto__":y===null}function N5(y){return!!J0&&J0 in y}function dp(y){var S=y&&y.constructor,T=typeof S=="function"&&S.prototype||Ti;return y===T}function j5(y){var S=[];if(y!=null)for(var T in Object(y))S.push(T);return S}function B5(y){return ep.call(y)}function O5(y,S,T){return S=ip(S===void 0?y.length-1:S,0),function(){for(var z=arguments,K=-1,ie=ip(z.length-S,0),pe=Array(ie);++K<ie;)pe[K]=z[S+K];K=-1;for(var G=Array(S+1);++K<S;)G[K]=z[K];return G[S]=T(pe),Nv(y,this,G)}}function xu(y,S){if(!(S==="constructor"&&typeof y[S]=="function")&&S!="__proto__")return y[S]}var D5=$5(T5);function $5(y){var S=0,T=0;return function(){var z=Yv(),K=a-(z-T);if(T=z,K>0){if(++S>=o)return arguments[0]}else S=0;return y.apply(void 0,arguments)}}function W5(y){if(y!=null){try{return Fi.call(y)}catch{}try{return y+""}catch{}}return""}function Li(y,S){return y===S||y!==y&&S!==S}var Su=lp(function(){return arguments}())?lp:function(y){return Go(y)&&gn.call(y,"callee")&&!Gv.call(y,"callee")},Cu=Array.isArray;function ku(y){return y!=null&&pp(y.length)&&!_u(y)}function H5(y){return Go(y)&&ku(y)}var fp=Zv||Y5;function _u(y){if(!pr(y))return!1;var S=Ii(y);return S==p||S==b||S==u||S==h}function pp(y){return typeof y=="number"&&y>-1&&y%1==0&&y<=i}function pr(y){var S=typeof y;return y!=null&&(S=="object"||S=="function")}function Go(y){return y!=null&&typeof y=="object"}function U5(y){if(!Go(y)||Ii(y)!=m)return!1;var S=op(y);if(S===null)return!0;var T=gn.call(S,"constructor")&&S.constructor;return typeof T=="function"&&T instanceof T&&Fi.call(T)==Hv}var mp=Q0?Bv(Q0):S5;function G5(y){return I5(y,hp(y))}function hp(y){return ku(y)?b5(y,!0):C5(y)}var K5=q5(function(y,S,T,z){up(y,S,T,z)});function Z5(y){return function(){return y}}function gp(y){return y}function Y5(){return!1}e.exports=K5})(Ec,Ec.exports);const ln=Ec.exports;function Ht(e){const t=typeof e;return e!=null&&(t==="object"||t==="function")&&!Array.isArray(e)}function xr(e,...t){return k3(e)?e(...t):e}var k3=e=>typeof e=="function",_3=e=>/!(important)?$/.test(e),kp=e=>typeof e=="string"?e.replace(/!(important)?$/,"").trim():e,Pc=(e,t)=>n=>{const r=String(t),o=_3(r),a=kp(r),i=e?`${e}.${a}`:a;let s=Ht(n.__cssMap)&&i in n.__cssMap?n.__cssMap[i].varRef:t;return s=kp(s),o?`${s} !important`:s};function Na(e){const{scale:t,transform:n,compose:r}=e;return(a,i)=>{var u;const s=Pc(t,a)(i);let l=(u=n==null?void 0:n(s,i))!=null?u:s;return r&&(l=r(l,i)),l}}var Vi=(...e)=>t=>e.reduce((n,r)=>r(n),t);function Vt(e,t){return n=>{const r={property:n,scale:e};return r.transform=Na({scale:e,transform:t}),r}}var T3=({rtl:e,ltr:t})=>n=>n.direction==="rtl"?e:t;function F3(e){const{property:t,scale:n,transform:r}=e;return{scale:n,property:T3(t),transform:n?Na({scale:n,compose:r}):r}}var Xh=["rotate(var(--chakra-rotate, 0))","scaleX(var(--chakra-scale-x, 1))","scaleY(var(--chakra-scale-y, 1))","skewX(var(--chakra-skew-x, 0))","skewY(var(--chakra-skew-y, 0))"];function A3(){return["translateX(var(--chakra-translate-x, 0))","translateY(var(--chakra-translate-y, 0))",...Xh].join(" ")}function E3(){return["translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)",...Xh].join(" ")}var P3={"--chakra-blur":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-brightness":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-contrast":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-grayscale":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-hue-rotate":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-invert":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-saturate":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-sepia":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-drop-shadow":"var(--chakra-empty,/*!*/ /*!*/)",filter:["var(--chakra-blur)","var(--chakra-brightness)","var(--chakra-contrast)","var(--chakra-grayscale)","var(--chakra-hue-rotate)","var(--chakra-invert)","var(--chakra-saturate)","var(--chakra-sepia)","var(--chakra-drop-shadow)"].join(" ")},I3={backdropFilter:["var(--chakra-backdrop-blur)","var(--chakra-backdrop-brightness)","var(--chakra-backdrop-contrast)","var(--chakra-backdrop-grayscale)","var(--chakra-backdrop-hue-rotate)","var(--chakra-backdrop-invert)","var(--chakra-backdrop-opacity)","var(--chakra-backdrop-saturate)","var(--chakra-backdrop-sepia)"].join(" "),"--chakra-backdrop-blur":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-backdrop-brightness":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-backdrop-contrast":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-backdrop-grayscale":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-backdrop-hue-rotate":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-backdrop-invert":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-backdrop-opacity":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-backdrop-saturate":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-backdrop-sepia":"var(--chakra-empty,/*!*/ /*!*/)"};function q3(e){return{"--chakra-ring-offset-shadow":"var(--chakra-ring-inset) 0 0 0 var(--chakra-ring-offset-width) var(--chakra-ring-offset-color)","--chakra-ring-shadow":"var(--chakra-ring-inset) 0 0 0 calc(var(--chakra-ring-width) + var(--chakra-ring-offset-width)) var(--chakra-ring-color)","--chakra-ring-width":e,boxShadow:["var(--chakra-ring-offset-shadow)","var(--chakra-ring-shadow)","var(--chakra-shadow, 0 0 #0000)"].join(", ")}}var L3={"row-reverse":{space:"--chakra-space-x-reverse",divide:"--chakra-divide-x-reverse"},"column-reverse":{space:"--chakra-space-y-reverse",divide:"--chakra-divide-y-reverse"}},Qh="& > :not(style) ~ :not(style)",z3={[Qh]:{marginInlineStart:"calc(var(--chakra-space-x) * calc(1 - var(--chakra-space-x-reverse)))",marginInlineEnd:"calc(var(--chakra-space-x) * var(--chakra-space-x-reverse))"}},R3={[Qh]:{marginTop:"calc(var(--chakra-space-y) * calc(1 - var(--chakra-space-y-reverse)))",marginBottom:"calc(var(--chakra-space-y) * var(--chakra-space-y-reverse))"}},Ic={"to-t":"to top","to-tr":"to top right","to-r":"to right","to-br":"to bottom right","to-b":"to bottom","to-bl":"to bottom left","to-l":"to left","to-tl":"to top left"},M3=new Set(Object.values(Ic)),Jh=new Set(["none","-moz-initial","inherit","initial","revert","unset"]),V3=e=>e.trim();function N3(e,t){var d;var n;if(e==null||Jh.has(e))return e;const r=/(?<type>^[a-z-A-Z]+)\((?<values>(.*))\)/g,{type:o,values:a}=(d=(n=r.exec(e))==null?void 0:n.groups)!=null?d:{};if(!o||!a)return e;const i=o.includes("-gradient")?o:`${o}-gradient`,[s,...l]=a.split(",").map(V3).filter(Boolean);if((l==null?void 0:l.length)===0)return e;const u=s in Ic?Ic[s]:s;l.unshift(u);const c=l.map(f=>{if(M3.has(f))return f;const p=f.indexOf(" "),[b,v]=p!==-1?[f.substr(0,p),f.substr(p+1)]:[f],k=eg(v)?v:v&&v.split(" "),g=`colors.${b}`,m=g in t.__cssMap?t.__cssMap[g].varRef:b;return k?[m,...Array.isArray(k)?k:[k]].join(" "):m});return`${i}(${c.join(", ")})`}var eg=e=>typeof e=="string"&&e.includes("(")&&e.includes(")"),j3=(e,t)=>N3(e,t!=null?t:{});function B3(e){return/^var\(--.+\)$/.test(e)}var O3=e=>{const t=parseFloat(e.toString()),n=e.toString().replace(String(t),"");return{unitless:!n,value:t,unit:n}},Jt=e=>t=>`${e}(${t})`,Z={filter(e){return e!=="auto"?e:P3},backdropFilter(e){return e!=="auto"?e:I3},ring(e){return q3(Z.px(e))},bgClip(e){return e==="text"?{color:"transparent",backgroundClip:"text"}:{backgroundClip:e}},transform(e){return e==="auto"?A3():e==="auto-gpu"?E3():e},vh(e){return e==="$100vh"?"var(--chakra-vh)":e},px(e){if(e==null)return e;const{unitless:t}=O3(e);return t||typeof e=="number"?`${e}px`:e},fraction(e){return typeof e!="number"||e>1?e:`${e*100}%`},float(e,t){const n={left:"right",right:"left"};return t.direction==="rtl"?n[e]:e},degree(e){if(B3(e)||e==null)return e;const t=typeof e=="string"&&!e.endsWith("deg");return typeof e=="number"||t?`${e}deg`:e},gradient:j3,blur:Jt("blur"),opacity:Jt("opacity"),brightness:Jt("brightness"),contrast:Jt("contrast"),dropShadow:Jt("drop-shadow"),grayscale:Jt("grayscale"),hueRotate:Jt("hue-rotate"),invert:Jt("invert"),saturate:Jt("saturate"),sepia:Jt("sepia"),bgImage(e){return e==null||eg(e)||Jh.has(e)?e:`url(${e})`},outline(e){const t=String(e)==="0"||String(e)==="none";return e!==null&&t?{outline:"2px solid transparent",outlineOffset:"2px"}:{outline:e}},flexDirection(e){var o;const{space:t,divide:n}=(o=L3[e])!=null?o:{},r={flexDirection:e};return t&&(r[t]=1),n&&(r[n]=1),r}},C={borderWidths:Vt("borderWidths"),borderStyles:Vt("borderStyles"),colors:Vt("colors"),borders:Vt("borders"),radii:Vt("radii",Z.px),space:Vt("space",Vi(Z.vh,Z.px)),spaceT:Vt("space",Vi(Z.vh,Z.px)),degreeT(e){return{property:e,transform:Z.degree}},prop(e,t,n){return{property:e,scale:t,...t&&{transform:Na({scale:t,transform:n})}}},propT(e,t){return{property:e,transform:t}},sizes:Vt("sizes",Vi(Z.vh,Z.px)),sizesT:Vt("sizes",Vi(Z.vh,Z.fraction)),shadows:Vt("shadows"),logical:F3,blur:Vt("blur",Z.blur)},ps={background:C.colors("background"),backgroundColor:C.colors("backgroundColor"),backgroundImage:C.propT("backgroundImage",Z.bgImage),backgroundSize:!0,backgroundPosition:!0,backgroundRepeat:!0,backgroundAttachment:!0,backgroundClip:{transform:Z.bgClip},bgSize:C.prop("backgroundSize"),bgPosition:C.prop("backgroundPosition"),bg:C.colors("background"),bgColor:C.colors("backgroundColor"),bgPos:C.prop("backgroundPosition"),bgRepeat:C.prop("backgroundRepeat"),bgAttachment:C.prop("backgroundAttachment"),bgGradient:C.propT("backgroundImage",Z.gradient),bgClip:{transform:Z.bgClip}};Object.assign(ps,{bgImage:ps.backgroundImage,bgImg:ps.backgroundImage});var X={border:C.borders("border"),borderWidth:C.borderWidths("borderWidth"),borderStyle:C.borderStyles("borderStyle"),borderColor:C.colors("borderColor"),borderRadius:C.radii("borderRadius"),borderTop:C.borders("borderTop"),borderBlockStart:C.borders("borderBlockStart"),borderTopLeftRadius:C.radii("borderTopLeftRadius"),borderStartStartRadius:C.logical({scale:"radii",property:{ltr:"borderTopLeftRadius",rtl:"borderTopRightRadius"}}),borderEndStartRadius:C.logical({scale:"radii",property:{ltr:"borderBottomLeftRadius",rtl:"borderBottomRightRadius"}}),borderTopRightRadius:C.radii("borderTopRightRadius"),borderStartEndRadius:C.logical({scale:"radii",property:{ltr:"borderTopRightRadius",rtl:"borderTopLeftRadius"}}),borderEndEndRadius:C.logical({scale:"radii",property:{ltr:"borderBottomRightRadius",rtl:"borderBottomLeftRadius"}}),borderRight:C.borders("borderRight"),borderInlineEnd:C.borders("borderInlineEnd"),borderBottom:C.borders("borderBottom"),borderBlockEnd:C.borders("borderBlockEnd"),borderBottomLeftRadius:C.radii("borderBottomLeftRadius"),borderBottomRightRadius:C.radii("borderBottomRightRadius"),borderLeft:C.borders("borderLeft"),borderInlineStart:{property:"borderInlineStart",scale:"borders"},borderInlineStartRadius:C.logical({scale:"radii",property:{ltr:["borderTopLeftRadius","borderBottomLeftRadius"],rtl:["borderTopRightRadius","borderBottomRightRadius"]}}),borderInlineEndRadius:C.logical({scale:"radii",property:{ltr:["borderTopRightRadius","borderBottomRightRadius"],rtl:["borderTopLeftRadius","borderBottomLeftRadius"]}}),borderX:C.borders(["borderLeft","borderRight"]),borderInline:C.borders("borderInline"),borderY:C.borders(["borderTop","borderBottom"]),borderBlock:C.borders("borderBlock"),borderTopWidth:C.borderWidths("borderTopWidth"),borderBlockStartWidth:C.borderWidths("borderBlockStartWidth"),borderTopColor:C.colors("borderTopColor"),borderBlockStartColor:C.colors("borderBlockStartColor"),borderTopStyle:C.borderStyles("borderTopStyle"),borderBlockStartStyle:C.borderStyles("borderBlockStartStyle"),borderBottomWidth:C.borderWidths("borderBottomWidth"),borderBlockEndWidth:C.borderWidths("borderBlockEndWidth"),borderBottomColor:C.colors("borderBottomColor"),borderBlockEndColor:C.colors("borderBlockEndColor"),borderBottomStyle:C.borderStyles("borderBottomStyle"),borderBlockEndStyle:C.borderStyles("borderBlockEndStyle"),borderLeftWidth:C.borderWidths("borderLeftWidth"),borderInlineStartWidth:C.borderWidths("borderInlineStartWidth"),borderLeftColor:C.colors("borderLeftColor"),borderInlineStartColor:C.colors("borderInlineStartColor"),borderLeftStyle:C.borderStyles("borderLeftStyle"),borderInlineStartStyle:C.borderStyles("borderInlineStartStyle"),borderRightWidth:C.borderWidths("borderRightWidth"),borderInlineEndWidth:C.borderWidths("borderInlineEndWidth"),borderRightColor:C.colors("borderRightColor"),borderInlineEndColor:C.colors("borderInlineEndColor"),borderRightStyle:C.borderStyles("borderRightStyle"),borderInlineEndStyle:C.borderStyles("borderInlineEndStyle"),borderTopRadius:C.radii(["borderTopLeftRadius","borderTopRightRadius"]),borderBottomRadius:C.radii(["borderBottomLeftRadius","borderBottomRightRadius"]),borderLeftRadius:C.radii(["borderTopLeftRadius","borderBottomLeftRadius"]),borderRightRadius:C.radii(["borderTopRightRadius","borderBottomRightRadius"])};Object.assign(X,{rounded:X.borderRadius,roundedTop:X.borderTopRadius,roundedTopLeft:X.borderTopLeftRadius,roundedTopRight:X.borderTopRightRadius,roundedTopStart:X.borderStartStartRadius,roundedTopEnd:X.borderStartEndRadius,roundedBottom:X.borderBottomRadius,roundedBottomLeft:X.borderBottomLeftRadius,roundedBottomRight:X.borderBottomRightRadius,roundedBottomStart:X.borderEndStartRadius,roundedBottomEnd:X.borderEndEndRadius,roundedLeft:X.borderLeftRadius,roundedRight:X.borderRightRadius,roundedStart:X.borderInlineStartRadius,roundedEnd:X.borderInlineEndRadius,borderStart:X.borderInlineStart,borderEnd:X.borderInlineEnd,borderTopStartRadius:X.borderStartStartRadius,borderTopEndRadius:X.borderStartEndRadius,borderBottomStartRadius:X.borderEndStartRadius,borderBottomEndRadius:X.borderEndEndRadius,borderStartRadius:X.borderInlineStartRadius,borderEndRadius:X.borderInlineEndRadius,borderStartWidth:X.borderInlineStartWidth,borderEndWidth:X.borderInlineEndWidth,borderStartColor:X.borderInlineStartColor,borderEndColor:X.borderInlineEndColor,borderStartStyle:X.borderInlineStartStyle,borderEndStyle:X.borderInlineEndStyle});var D3={color:C.colors("color"),textColor:C.colors("color"),fill:C.colors("fill"),stroke:C.colors("stroke")},qc={boxShadow:C.shadows("boxShadow"),mixBlendMode:!0,blendMode:C.prop("mixBlendMode"),backgroundBlendMode:!0,bgBlendMode:C.prop("backgroundBlendMode"),opacity:!0};Object.assign(qc,{shadow:qc.boxShadow});var $3={filter:{transform:Z.filter},blur:C.blur("--chakra-blur"),brightness:C.propT("--chakra-brightness",Z.brightness),contrast:C.propT("--chakra-contrast",Z.contrast),hueRotate:C.degreeT("--chakra-hue-rotate"),invert:C.propT("--chakra-invert",Z.invert),saturate:C.propT("--chakra-saturate",Z.saturate),dropShadow:C.propT("--chakra-drop-shadow",Z.dropShadow),backdropFilter:{transform:Z.backdropFilter},backdropBlur:C.blur("--chakra-backdrop-blur"),backdropBrightness:C.propT("--chakra-backdrop-brightness",Z.brightness),backdropContrast:C.propT("--chakra-backdrop-contrast",Z.contrast),backdropHueRotate:C.degreeT("--chakra-backdrop-hue-rotate"),backdropInvert:C.propT("--chakra-backdrop-invert",Z.invert),backdropSaturate:C.propT("--chakra-backdrop-saturate",Z.saturate)},qs={alignItems:!0,alignContent:!0,justifyItems:!0,justifyContent:!0,flexWrap:!0,flexDirection:{transform:Z.flexDirection},experimental_spaceX:{static:z3,transform:Na({scale:"space",transform:e=>e!==null?{"--chakra-space-x":e}:null})},experimental_spaceY:{static:R3,transform:Na({scale:"space",transform:e=>e!=null?{"--chakra-space-y":e}:null})},flex:!0,flexFlow:!0,flexGrow:!0,flexShrink:!0,flexBasis:C.sizes("flexBasis"),justifySelf:!0,alignSelf:!0,order:!0,placeItems:!0,placeContent:!0,placeSelf:!0,gap:C.space("gap"),rowGap:C.space("rowGap"),columnGap:C.space("columnGap")};Object.assign(qs,{flexDir:qs.flexDirection});var tg={gridGap:C.space("gridGap"),gridColumnGap:C.space("gridColumnGap"),gridRowGap:C.space("gridRowGap"),gridColumn:!0,gridRow:!0,gridAutoFlow:!0,gridAutoColumns:!0,gridColumnStart:!0,gridColumnEnd:!0,gridRowStart:!0,gridRowEnd:!0,gridAutoRows:!0,gridTemplate:!0,gridTemplateColumns:!0,gridTemplateRows:!0,gridTemplateAreas:!0,gridArea:!0},W3={appearance:!0,cursor:!0,resize:!0,userSelect:!0,pointerEvents:!0,outline:{transform:Z.outline},outlineOffset:!0,outlineColor:C.colors("outlineColor")},Ft={width:C.sizesT("width"),inlineSize:C.sizesT("inlineSize"),height:C.sizes("height"),blockSize:C.sizes("blockSize"),boxSize:C.sizes(["width","height"]),minWidth:C.sizes("minWidth"),minInlineSize:C.sizes("minInlineSize"),minHeight:C.sizes("minHeight"),minBlockSize:C.sizes("minBlockSize"),maxWidth:C.sizes("maxWidth"),maxInlineSize:C.sizes("maxInlineSize"),maxHeight:C.sizes("maxHeight"),maxBlockSize:C.sizes("maxBlockSize"),overflow:!0,overflowX:!0,overflowY:!0,overscrollBehavior:!0,overscrollBehaviorX:!0,overscrollBehaviorY:!0,display:!0,verticalAlign:!0,boxSizing:!0,boxDecorationBreak:!0,float:C.propT("float",Z.float),objectFit:!0,objectPosition:!0,visibility:!0,isolation:!0};Object.assign(Ft,{w:Ft.width,h:Ft.height,minW:Ft.minWidth,maxW:Ft.maxWidth,minH:Ft.minHeight,maxH:Ft.maxHeight,overscroll:Ft.overscrollBehavior,overscrollX:Ft.overscrollBehaviorX,overscrollY:Ft.overscrollBehaviorY});var H3={listStyleType:!0,listStylePosition:!0,listStylePos:C.prop("listStylePosition"),listStyleImage:!0,listStyleImg:C.prop("listStyleImage")};function U3(e,t,n,r){const o=typeof t=="string"?t.split("."):[t];for(r=0;r<o.length&&e;r+=1)e=e[o[r]];return e===void 0?n:e}var G3=e=>{const t=new WeakMap;return(r,o,a,i)=>{if(typeof r>"u")return e(r,o,a);t.has(r)||t.set(r,new Map);const s=t.get(r);if(s.has(o))return s.get(o);const l=e(r,o,a,i);return s.set(o,l),l}},K3=G3(U3),Z3={border:"0px",clip:"rect(0, 0, 0, 0)",width:"1px",height:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"},Y3={position:"static",width:"auto",height:"auto",clip:"auto",padding:"0",margin:"0",overflow:"visible",whiteSpace:"normal"},Eu=(e,t,n)=>{const r={},o=K3(e,t,{});for(const a in o)a in n&&n[a]!=null||(r[a]=o[a]);return r},X3={srOnly:{transform(e){return e===!0?Z3:e==="focusable"?Y3:{}}},layerStyle:{processResult:!0,transform:(e,t,n)=>Eu(t,`layerStyles.${e}`,n)},textStyle:{processResult:!0,transform:(e,t,n)=>Eu(t,`textStyles.${e}`,n)},apply:{processResult:!0,transform:(e,t,n)=>Eu(t,e,n)}},ha={position:!0,pos:C.prop("position"),zIndex:C.prop("zIndex","zIndices"),inset:C.spaceT("inset"),insetX:C.spaceT(["left","right"]),insetInline:C.spaceT("insetInline"),insetY:C.spaceT(["top","bottom"]),insetBlock:C.spaceT("insetBlock"),top:C.spaceT("top"),insetBlockStart:C.spaceT("insetBlockStart"),bottom:C.spaceT("bottom"),insetBlockEnd:C.spaceT("insetBlockEnd"),left:C.spaceT("left"),insetInlineStart:C.logical({scale:"space",property:{ltr:"left",rtl:"right"}}),right:C.spaceT("right"),insetInlineEnd:C.logical({scale:"space",property:{ltr:"right",rtl:"left"}})};Object.assign(ha,{insetStart:ha.insetInlineStart,insetEnd:ha.insetInlineEnd});var Q3={ring:{transform:Z.ring},ringColor:C.colors("--chakra-ring-color"),ringOffset:C.prop("--chakra-ring-offset-width"),ringOffsetColor:C.colors("--chakra-ring-offset-color"),ringInset:C.prop("--chakra-ring-inset")},ce={margin:C.spaceT("margin"),marginTop:C.spaceT("marginTop"),marginBlockStart:C.spaceT("marginBlockStart"),marginRight:C.spaceT("marginRight"),marginInlineEnd:C.spaceT("marginInlineEnd"),marginBottom:C.spaceT("marginBottom"),marginBlockEnd:C.spaceT("marginBlockEnd"),marginLeft:C.spaceT("marginLeft"),marginInlineStart:C.spaceT("marginInlineStart"),marginX:C.spaceT(["marginInlineStart","marginInlineEnd"]),marginInline:C.spaceT("marginInline"),marginY:C.spaceT(["marginTop","marginBottom"]),marginBlock:C.spaceT("marginBlock"),padding:C.space("padding"),paddingTop:C.space("paddingTop"),paddingBlockStart:C.space("paddingBlockStart"),paddingRight:C.space("paddingRight"),paddingBottom:C.space("paddingBottom"),paddingBlockEnd:C.space("paddingBlockEnd"),paddingLeft:C.space("paddingLeft"),paddingInlineStart:C.space("paddingInlineStart"),paddingInlineEnd:C.space("paddingInlineEnd"),paddingX:C.space(["paddingInlineStart","paddingInlineEnd"]),paddingInline:C.space("paddingInline"),paddingY:C.space(["paddingTop","paddingBottom"]),paddingBlock:C.space("paddingBlock")};Object.assign(ce,{m:ce.margin,mt:ce.marginTop,mr:ce.marginRight,me:ce.marginInlineEnd,marginEnd:ce.marginInlineEnd,mb:ce.marginBottom,ml:ce.marginLeft,ms:ce.marginInlineStart,marginStart:ce.marginInlineStart,mx:ce.marginX,my:ce.marginY,p:ce.padding,pt:ce.paddingTop,py:ce.paddingY,px:ce.paddingX,pb:ce.paddingBottom,pl:ce.paddingLeft,ps:ce.paddingInlineStart,paddingStart:ce.paddingInlineStart,pr:ce.paddingRight,pe:ce.paddingInlineEnd,paddingEnd:ce.paddingInlineEnd});var J3={textDecorationColor:C.colors("textDecorationColor"),textDecoration:!0,textDecor:{property:"textDecoration"},textDecorationLine:!0,textDecorationStyle:!0,textDecorationThickness:!0,textUnderlineOffset:!0,textShadow:C.shadows("textShadow")},e4={clipPath:!0,transform:C.propT("transform",Z.transform),transformOrigin:!0,translateX:C.spaceT("--chakra-translate-x"),translateY:C.spaceT("--chakra-translate-y"),skewX:C.degreeT("--chakra-skew-x"),skewY:C.degreeT("--chakra-skew-y"),scaleX:C.prop("--chakra-scale-x"),scaleY:C.prop("--chakra-scale-y"),scale:C.prop(["--chakra-scale-x","--chakra-scale-y"]),rotate:C.degreeT("--chakra-rotate")},t4={transition:!0,transitionDelay:!0,animation:!0,willChange:!0,transitionDuration:C.prop("transitionDuration","transition.duration"),transitionProperty:C.prop("transitionProperty","transition.property"),transitionTimingFunction:C.prop("transitionTimingFunction","transition.easing")},n4={fontFamily:C.prop("fontFamily","fonts"),fontSize:C.prop("fontSize","fontSizes",Z.px),fontWeight:C.prop("fontWeight","fontWeights"),lineHeight:C.prop("lineHeight","lineHeights"),letterSpacing:C.prop("letterSpacing","letterSpacings"),textAlign:!0,fontStyle:!0,textIndent:!0,wordBreak:!0,overflowWrap:!0,textOverflow:!0,textTransform:!0,whiteSpace:!0,noOfLines:{static:{overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:"var(--chakra-line-clamp)"},property:"--chakra-line-clamp"}},r4={scrollBehavior:!0,scrollSnapAlign:!0,scrollSnapStop:!0,scrollSnapType:!0,scrollMargin:C.spaceT("scrollMargin"),scrollMarginTop:C.spaceT("scrollMarginTop"),scrollMarginBottom:C.spaceT("scrollMarginBottom"),scrollMarginLeft:C.spaceT("scrollMarginLeft"),scrollMarginRight:C.spaceT("scrollMarginRight"),scrollMarginX:C.spaceT(["scrollMarginLeft","scrollMarginRight"]),scrollMarginY:C.spaceT(["scrollMarginTop","scrollMarginBottom"]),scrollPadding:C.spaceT("scrollPadding"),scrollPaddingTop:C.spaceT("scrollPaddingTop"),scrollPaddingBottom:C.spaceT("scrollPaddingBottom"),scrollPaddingLeft:C.spaceT("scrollPaddingLeft"),scrollPaddingRight:C.spaceT("scrollPaddingRight"),scrollPaddingX:C.spaceT(["scrollPaddingLeft","scrollPaddingRight"]),scrollPaddingY:C.spaceT(["scrollPaddingTop","scrollPaddingBottom"])};function ng(e){return Ht(e)&&e.reference?e.reference:String(e)}var Cl=(e,...t)=>t.map(ng).join(` ${e} `).replace(/calc/g,""),_p=(...e)=>`calc(${Cl("+",...e)})`,Tp=(...e)=>`calc(${Cl("-",...e)})`,Lc=(...e)=>`calc(${Cl("*",...e)})`,Fp=(...e)=>`calc(${Cl("/",...e)})`,Ap=e=>{const t=ng(e);return t!=null&&!Number.isNaN(parseFloat(t))?String(t).startsWith("-")?String(t).slice(1):`-${t}`:Lc(t,-1)},vr=Object.assign(e=>({add:(...t)=>vr(_p(e,...t)),subtract:(...t)=>vr(Tp(e,...t)),multiply:(...t)=>vr(Lc(e,...t)),divide:(...t)=>vr(Fp(e,...t)),negate:()=>vr(Ap(e)),toString:()=>e.toString()}),{add:_p,subtract:Tp,multiply:Lc,divide:Fp,negate:Ap});function o4(e,t="-"){return e.replace(/\s+/g,t)}function a4(e){const t=o4(e.toString());return s4(i4(t))}function i4(e){return e.includes("\\.")?e:!Number.isInteger(parseFloat(e.toString()))?e.replace(".","\\."):e}function s4(e){return e.replace(/[!-,/:-@[-^`{-~]/g,"\\$&")}function l4(e,t=""){return[t,e].filter(Boolean).join("-")}function u4(e,t){return`var(${e}${t?`, ${t}`:""})`}function c4(e,t=""){return a4(`--${l4(e,t)}`)}function ae(e,t,n){const r=c4(e,n);return{variable:r,reference:u4(r,t)}}function d4(e){const t=e==null?0:e.length;return t?e[t-1]:void 0}function f4(e){const t=parseFloat(e.toString()),n=e.toString().replace(String(t),"");return{unitless:!n,value:t,unit:n}}function zc(e){if(e==null)return e;const{unitless:t}=f4(e);return t||typeof e=="number"?`${e}px`:e}var rg=(e,t)=>parseInt(e[1],10)>parseInt(t[1],10)?1:-1,cf=e=>Object.fromEntries(Object.entries(e).sort(rg));function Ep(e){const t=cf(e);return Object.assign(Object.values(t),t)}function p4(e){const t=Object.keys(cf(e));return new Set(t)}function Pp(e){var n;if(!e)return e;e=(n=zc(e))!=null?n:e;const t=e.endsWith("px")?-1:-.0625;return typeof e=="number"?`${e+t}`:e.replace(/(\d+\.?\d*)/u,r=>`${parseFloat(r)+t}`)}function la(e,t){const n=["@media screen"];return e&&n.push("and",`(min-width: ${zc(e)})`),t&&n.push("and",`(max-width: ${zc(t)})`),n.join(" ")}function m4(e){var a;if(!e)return null;e.base=(a=e.base)!=null?a:"0px";const t=Ep(e),n=Object.entries(e).sort(rg).map(([i,s],l,u)=>{var d;let[,c]=(d=u[l+1])!=null?d:[];return c=parseFloat(c)>0?Pp(c):void 0,{_minW:Pp(s),breakpoint:i,minW:s,maxW:c,maxWQuery:la(null,c),minWQuery:la(s),minMaxQuery:la(s,c)}}),r=p4(e),o=Array.from(r.values());return{keys:r,normalized:t,isResponsive(i){const s=Object.keys(i);return s.length>0&&s.every(l=>r.has(l))},asObject:cf(e),asArray:Ep(e),details:n,media:[null,...t.map(i=>la(i)).slice(1)],toArrayValue(i){if(!Ht(i))throw new Error("toArrayValue: value must be an object");const s=o.map(l=>{var u;return(u=i[l])!=null?u:null});for(;d4(s)===null;)s.pop();return s},toObjectValue(i){if(!Array.isArray(i))throw new Error("toObjectValue: value must be an array");return i.reduce((s,l,u)=>{const c=o[u];return c!=null&&l!=null&&(s[c]=l),s},{})}}}var Be={hover:(e,t)=>`${e}:hover ${t}, ${e}[data-hover] ${t}`,focus:(e,t)=>`${e}:focus ${t}, ${e}[data-focus] ${t}`,focusVisible:(e,t)=>`${e}:focus-visible ${t}`,focusWithin:(e,t)=>`${e}:focus-within ${t}`,active:(e,t)=>`${e}:active ${t}, ${e}[data-active] ${t}`,disabled:(e,t)=>`${e}:disabled ${t}, ${e}[data-disabled] ${t}`,invalid:(e,t)=>`${e}:invalid ${t}, ${e}[data-invalid] ${t}`,checked:(e,t)=>`${e}:checked ${t}, ${e}[data-checked] ${t}`,indeterminate:(e,t)=>`${e}:indeterminate ${t}, ${e}[aria-checked=mixed] ${t}, ${e}[data-indeterminate] ${t}`,readOnly:(e,t)=>`${e}:read-only ${t}, ${e}[readonly] ${t}, ${e}[data-read-only] ${t}`,expanded:(e,t)=>`${e}:read-only ${t}, ${e}[aria-expanded=true] ${t}, ${e}[data-expanded] ${t}`,placeholderShown:(e,t)=>`${e}:placeholder-shown ${t}`},zn=e=>og(t=>e(t,"&"),"[role=group]","[data-group]",".group"),bn=e=>og(t=>e(t,"~ &"),"[data-peer]",".peer"),og=(e,...t)=>t.map(e).join(", "),kl={_hover:"&:hover, &[data-hover]",_active:"&:active, &[data-active]",_focus:"&:focus, &[data-focus]",_highlighted:"&[data-highlighted]",_focusWithin:"&:focus-within",_focusVisible:"&:focus-visible, &[data-focus-visible]",_disabled:"&:disabled, &[disabled], &[aria-disabled=true], &[data-disabled]",_readOnly:"&[aria-readonly=true], &[readonly], &[data-readonly]",_before:"&::before",_after:"&::after",_empty:"&:empty",_expanded:"&[aria-expanded=true], &[data-expanded]",_checked:"&[aria-checked=true], &[data-checked]",_grabbed:"&[aria-grabbed=true], &[data-grabbed]",_pressed:"&[aria-pressed=true], &[data-pressed]",_invalid:"&[aria-invalid=true], &[data-invalid]",_valid:"&[data-valid], &[data-state=valid]",_loading:"&[data-loading], &[aria-busy=true]",_selected:"&[aria-selected=true], &[data-selected]",_hidden:"&[hidden], &[data-hidden]",_autofill:"&:-webkit-autofill",_even:"&:nth-of-type(even)",_odd:"&:nth-of-type(odd)",_first:"&:first-of-type",_last:"&:last-of-type",_notFirst:"&:not(:first-of-type)",_notLast:"&:not(:last-of-type)",_visited:"&:visited",_activeLink:"&[aria-current=page]",_activeStep:"&[aria-current=step]",_indeterminate:"&:indeterminate, &[aria-checked=mixed], &[data-indeterminate]",_groupHover:zn(Be.hover),_peerHover:bn(Be.hover),_groupFocus:zn(Be.focus),_peerFocus:bn(Be.focus),_groupFocusVisible:zn(Be.focusVisible),_peerFocusVisible:bn(Be.focusVisible),_groupActive:zn(Be.active),_peerActive:bn(Be.active),_groupDisabled:zn(Be.disabled),_peerDisabled:bn(Be.disabled),_groupInvalid:zn(Be.invalid),_peerInvalid:bn(Be.invalid),_groupChecked:zn(Be.checked),_peerChecked:bn(Be.checked),_groupFocusWithin:zn(Be.focusWithin),_peerFocusWithin:bn(Be.focusWithin),_peerPlaceholderShown:bn(Be.placeholderShown),_placeholder:"&::placeholder",_placeholderShown:"&:placeholder-shown",_fullScreen:"&:fullscreen",_selection:"&::selection",_rtl:"[dir=rtl] &, &[dir=rtl]",_ltr:"[dir=ltr] &, &[dir=ltr]",_mediaDark:"@media (prefers-color-scheme: dark)",_mediaReduceMotion:"@media (prefers-reduced-motion: reduce)",_dark:".chakra-ui-dark &:not([data-theme]),[data-theme=dark] &:not([data-theme]),&[data-theme=dark]",_light:".chakra-ui-light &:not([data-theme]),[data-theme=light] &:not([data-theme]),&[data-theme=light]"},h4=Object.keys(kl);function Ip(e,t){return ae(String(e).replace(/\./g,"-"),void 0,t)}function g4(e,t){let n={};const r={};for(const[o,a]of Object.entries(e)){const{isSemantic:i,value:s}=a,{variable:l,reference:u}=Ip(o,t==null?void 0:t.cssVarPrefix);if(!i){if(o.startsWith("space")){const f=o.split("."),[p,...b]=f,v=`${p}.-${b.join(".")}`,k=vr.negate(s),g=vr.negate(u);r[v]={value:k,var:l,varRef:g}}n[l]=s,r[o]={value:s,var:l,varRef:u};continue}const c=f=>{const b=[String(o).split(".")[0],f].join(".");if(!e[b])return f;const{reference:k}=Ip(b,t==null?void 0:t.cssVarPrefix);return k},d=Ht(s)?s:{default:s};n=ln(n,Object.entries(d).reduce((f,[p,b])=>{var m;var v;const k=c(b);if(p==="default")return f[l]=k,f;const g=(m=(v=kl)==null?void 0:v[p])!=null?m:p;return f[g]={[l]:k},f},{})),r[o]={value:u,var:l,varRef:u}}return{cssVars:n,cssMap:r}}function y4(e,t=[]){const n=Object.assign({},e);for(const r of t)r in n&&delete n[r];return n}function b4(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}var v4=["colors","borders","borderWidths","borderStyles","fonts","fontSizes","fontWeights","letterSpacings","lineHeights","radii","space","shadows","sizes","zIndices","transition","blur"];function w4(e){return b4(e,v4)}function x4(e){return e.semanticTokens}function S4(e){const{__cssMap:t,__cssVars:n,__breakpoints:r,...o}=e;return o}function C4({tokens:e,semanticTokens:t}){var o,a;const n=Object.entries((o=Rc(e))!=null?o:{}).map(([i,s])=>[i,{isSemantic:!1,value:s}]),r=Object.entries((a=Rc(t,1))!=null?a:{}).map(([i,s])=>[i,{isSemantic:!0,value:s}]);return Object.fromEntries([...n,...r])}function Rc(e,t=1/0){return!Ht(e)&&!Array.isArray(e)||!t?e:Object.entries(e).reduce((n,[r,o])=>(Ht(o)||Array.isArray(o)?Object.entries(Rc(o,t-1)).forEach(([a,i])=>{n[`${r}.${a}`]=i}):n[r]=o,n),{})}function k4(e){var t;const n=S4(e),r=w4(n),o=x4(n),a=C4({tokens:r,semanticTokens:o}),i=(t=n.config)==null?void 0:t.cssVarPrefix,{cssMap:s,cssVars:l}=g4(a,{cssVarPrefix:i});return Object.assign(n,{__cssVars:{...{"--chakra-ring-inset":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-ring-offset-width":"0px","--chakra-ring-offset-color":"#fff","--chakra-ring-color":"rgba(66, 153, 225, 0.6)","--chakra-ring-offset-shadow":"0 0 #0000","--chakra-ring-shadow":"0 0 #0000","--chakra-space-x-reverse":"0","--chakra-space-y-reverse":"0"},...l},__cssMap:s,__breakpoints:m4(n.breakpoints)}),n}var df=ln({},ps,X,D3,qs,Ft,$3,Q3,W3,tg,X3,ha,qc,ce,r4,n4,J3,e4,H3,t4);Object.assign({},ce,Ft,qs,tg,ha);var _4=[...Object.keys(df),...h4],T4={...df,...kl},F4=e=>e in T4,A4=e=>t=>{if(!t.__breakpoints)return e;const{isResponsive:n,toArrayValue:r,media:o}=t.__breakpoints,a={};for(const i in e){let s=xr(e[i],t);if(s==null)continue;if(s=Ht(s)&&n(s)?r(s):s,!Array.isArray(s)){a[i]=s;continue}const l=s.slice(0,o.length).length;for(let u=0;u<l;u+=1){const c=o==null?void 0:o[u];if(!c){a[i]=s[u];continue}a[c]=a[c]||{},s[u]!=null&&(a[c][i]=s[u])}}return a};function E4(e){const t=[];let n="",r=!1;for(let o=0;o<e.length;o++){const a=e[o];a==="("?(r=!0,n+=a):a===")"?(r=!1,n+=a):a===","&&!r?(t.push(n),n=""):n+=a}return n=n.trim(),n&&t.push(n),t}function P4(e){return/^var\(--.+\)$/.test(e)}var I4=(e,t)=>e.startsWith("--")&&typeof t=="string"&&!P4(t),q4=(e,t)=>{var i,s;if(t==null)return t;const n=l=>{var u,c;return(c=(u=e.__cssMap)==null?void 0:u[l])==null?void 0:c.varRef},r=l=>{var u;return(u=n(l))!=null?u:l},[o,a]=E4(t);return t=(s=(i=n(o))!=null?i:r(a))!=null?s:r(t),t};function L4(e){const{configs:t={},pseudos:n={},theme:r}=e,o=(a,i=!1)=>{var d,f;var s;const l=xr(a,r),u=A4(l)(r);let c={};for(let p in u){const b=u[p];let v=xr(b,r);p in n&&(p=n[p]),I4(p,v)&&(v=q4(r,v));let k=t[p];if(k===!0&&(k={property:p}),Ht(v)){c[p]=(d=c[p])!=null?d:{},c[p]=ln({},c[p],o(v,!0));continue}let g=(f=(s=k==null?void 0:k.transform)==null?void 0:s.call(k,v,r,l))!=null?f:v;g=k!=null&&k.processResult?o(g,!0):g;const m=xr(k==null?void 0:k.property,r);if(!i&&(k==null?void 0:k.static)){const h=xr(k.static,r);c=ln({},c,h)}if(m&&Array.isArray(m)){for(const h of m)c[h]=g;continue}if(m){m==="&"&&Ht(g)?c=ln({},c,g):c[m]=g;continue}if(Ht(g)){c=ln({},c,g);continue}c[p]=g}return c};return o}var ag=e=>t=>L4({theme:t,pseudos:kl,configs:df})(e);function fe(e){return{definePartsStyle(t){return t},defineMultiStyleConfig(t){return{parts:e,...t}}}}function z4(e,t){if(Array.isArray(e))return e;if(Ht(e))return t(e);if(e!=null)return[e]}function R4(e,t){for(let n=t+1;n<e.length;n++)if(e[n]!=null)return n;return-1}function M4(e){const t=e.__breakpoints;return function(r,o,a,i){var s,l;if(!t)return;const u={},c=z4(a,t.toArrayValue);if(!c)return u;const d=c.length,f=d===1,p=!!r.parts;for(let b=0;b<d;b++){const v=t.details[b],k=t.details[R4(c,b)],g=la(v.minW,k==null?void 0:k._minW),m=xr((s=r[o])==null?void 0:s[c[b]],i);if(!!m){if(p){(l=r.parts)==null||l.forEach(h=>{ln(u,{[h]:f?m[h]:{[g]:m[h]}})});continue}if(!p){f?ln(u,m):u[g]=m;continue}u[g]=m}}return u}}function V4(e){return t=>{var i;const{variant:n,size:r,theme:o}=t,a=M4(o);return ln({},xr((i=e.baseStyle)!=null?i:{},t),a(e,"sizes",r,t),a(e,"variants",n,t))}}function ke(e){return y4(e,["styleConfig","size","variant","colorScheme"])}function N4(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function j4(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var B4=function(){function e(n){var r=this;this._insertTag=function(o){var a;r.tags.length===0?r.insertionPoint?a=r.insertionPoint.nextSibling:r.prepend?a=r.container.firstChild:a=r.before:a=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(o,a),r.tags.push(o)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(j4(this));var o=this.tags[this.tags.length-1];if(this.isSpeedy){var a=N4(o);try{a.insertRule(r,a.cssRules.length)}catch{}}else o.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),Ge="-ms-",Ls="-moz-",Q="-webkit-",ig="comm",ff="rule",pf="decl",O4="@import",sg="@keyframes",D4=Math.abs,_l=String.fromCharCode,$4=Object.assign;function W4(e,t){return De(e,0)^45?(((t<<2^De(e,0))<<2^De(e,1))<<2^De(e,2))<<2^De(e,3):0}function lg(e){return e.trim()}function H4(e,t){return(e=t.exec(e))?e[0]:e}function te(e,t,n){return e.replace(t,n)}function Mc(e,t){return e.indexOf(t)}function De(e,t){return e.charCodeAt(t)|0}function ja(e,t,n){return e.slice(t,n)}function on(e){return e.length}function mf(e){return e.length}function Ni(e,t){return t.push(e),e}function U4(e,t){return e.map(t).join("")}var Tl=1,To=1,ug=0,ct=0,Ae=0,Vo="";function Fl(e,t,n,r,o,a,i){return{value:e,root:t,parent:n,type:r,props:o,children:a,line:Tl,column:To,length:i,return:""}}function Zo(e,t){return $4(Fl("",null,null,"",null,null,0),e,{length:-e.length},t)}function G4(){return Ae}function K4(){return Ae=ct>0?De(Vo,--ct):0,To--,Ae===10&&(To=1,Tl--),Ae}function yt(){return Ae=ct<ug?De(Vo,ct++):0,To++,Ae===10&&(To=1,Tl++),Ae}function cn(){return De(Vo,ct)}function ms(){return ct}function gi(e,t){return ja(Vo,e,t)}function Ba(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function cg(e){return Tl=To=1,ug=on(Vo=e),ct=0,[]}function dg(e){return Vo="",e}function hs(e){return lg(gi(ct-1,Vc(e===91?e+2:e===40?e+1:e)))}function Z4(e){for(;(Ae=cn())&&Ae<33;)yt();return Ba(e)>2||Ba(Ae)>3?"":" "}function Y4(e,t){for(;--t&&yt()&&!(Ae<48||Ae>102||Ae>57&&Ae<65||Ae>70&&Ae<97););return gi(e,ms()+(t<6&&cn()==32&&yt()==32))}function Vc(e){for(;yt();)switch(Ae){case e:return ct;case 34:case 39:e!==34&&e!==39&&Vc(Ae);break;case 40:e===41&&Vc(e);break;case 92:yt();break}return ct}function X4(e,t){for(;yt()&&e+Ae!==47+10;)if(e+Ae===42+42&&cn()===47)break;return"/*"+gi(t,ct-1)+"*"+_l(e===47?e:yt())}function Q4(e){for(;!Ba(cn());)yt();return gi(e,ct)}function J4(e){return dg(gs("",null,null,null,[""],e=cg(e),0,[0],e))}function gs(e,t,n,r,o,a,i,s,l){for(var u=0,c=0,d=i,f=0,p=0,b=0,v=1,k=1,g=1,m=0,h="",x=o,F=a,E=r,A=h;k;)switch(b=m,m=yt()){case 40:if(b!=108&&De(A,d-1)==58){Mc(A+=te(hs(m),"&","&\f"),"&\f")!=-1&&(g=-1);break}case 34:case 39:case 91:A+=hs(m);break;case 9:case 10:case 13:case 32:A+=Z4(b);break;case 92:A+=Y4(ms()-1,7);continue;case 47:switch(cn()){case 42:case 47:Ni(e9(X4(yt(),ms()),t,n),l);break;default:A+="/"}break;case 123*v:s[u++]=on(A)*g;case 125*v:case 59:case 0:switch(m){case 0:case 125:k=0;case 59+c:p>0&&on(A)-d&&Ni(p>32?Lp(A+";",r,n,d-1):Lp(te(A," ","")+";",r,n,d-2),l);break;case 59:A+=";";default:if(Ni(E=qp(A,t,n,u,c,o,s,h,x=[],F=[],d),a),m===123)if(c===0)gs(A,t,E,E,x,a,d,s,F);else switch(f===99&&De(A,3)===110?100:f){case 100:case 109:case 115:gs(e,E,E,r&&Ni(qp(e,E,E,0,0,o,s,h,o,x=[],d),F),o,F,d,s,r?x:F);break;default:gs(A,E,E,E,[""],F,0,s,F)}}u=c=p=0,v=g=1,h=A="",d=i;break;case 58:d=1+on(A),p=b;default:if(v<1){if(m==123)--v;else if(m==125&&v++==0&&K4()==125)continue}switch(A+=_l(m),m*v){case 38:g=c>0?1:(A+="\f",-1);break;case 44:s[u++]=(on(A)-1)*g,g=1;break;case 64:cn()===45&&(A+=hs(yt())),f=cn(),c=d=on(h=A+=Q4(ms())),m++;break;case 45:b===45&&on(A)==2&&(v=0)}}return a}function qp(e,t,n,r,o,a,i,s,l,u,c){for(var d=o-1,f=o===0?a:[""],p=mf(f),b=0,v=0,k=0;b<r;++b)for(var g=0,m=ja(e,d+1,d=D4(v=i[b])),h=e;g<p;++g)(h=lg(v>0?f[g]+" "+m:te(m,/&\f/g,f[g])))&&(l[k++]=h);return Fl(e,t,n,o===0?ff:s,l,u,c)}function e9(e,t,n){return Fl(e,t,n,ig,_l(G4()),ja(e,2,-2),0)}function Lp(e,t,n,r){return Fl(e,t,n,pf,ja(e,0,r),ja(e,r+1,-1),r)}function uo(e,t){for(var n="",r=mf(e),o=0;o<r;o++)n+=t(e[o],o,e,t)||"";return n}function t9(e,t,n,r){switch(e.type){case O4:case pf:return e.return=e.return||e.value;case ig:return"";case sg:return e.return=e.value+"{"+uo(e.children,r)+"}";case ff:e.value=e.props.join(",")}return on(n=uo(e.children,r))?e.return=e.value+"{"+n+"}":""}function n9(e){var t=mf(e);return function(n,r,o,a){for(var i="",s=0;s<t;s++)i+=e[s](n,r,o,a)||"";return i}}function r9(e){return function(t){t.root||(t=t.return)&&e(t)}}var zp=function(t){var n=new WeakMap;return function(r){if(n.has(r))return n.get(r);var o=t(r);return n.set(r,o),o}};function fg(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var o9=function(t,n,r){for(var o=0,a=0;o=a,a=cn(),o===38&&a===12&&(n[r]=1),!Ba(a);)yt();return gi(t,ct)},a9=function(t,n){var r=-1,o=44;do switch(Ba(o)){case 0:o===38&&cn()===12&&(n[r]=1),t[r]+=o9(ct-1,n,r);break;case 2:t[r]+=hs(o);break;case 4:if(o===44){t[++r]=cn()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=_l(o)}while(o=yt());return t},i9=function(t,n){return dg(a9(cg(t),n))},Rp=new WeakMap,s9=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,o=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!Rp.get(r))&&!o){Rp.set(t,!0);for(var a=[],i=i9(n,a),s=r.props,l=0,u=0;l<i.length;l++)for(var c=0;c<s.length;c++,u++)t.props[u]=a[l]?i[l].replace(/&\f/g,s[c]):s[c]+" "+i[l]}}},l9=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function pg(e,t){switch(W4(e,t)){case 5103:return Q+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Q+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Q+e+Ls+e+Ge+e+e;case 6828:case 4268:return Q+e+Ge+e+e;case 6165:return Q+e+Ge+"flex-"+e+e;case 5187:return Q+e+te(e,/(\w+).+(:[^]+)/,Q+"box-$1$2"+Ge+"flex-$1$2")+e;case 5443:return Q+e+Ge+"flex-item-"+te(e,/flex-|-self/,"")+e;case 4675:return Q+e+Ge+"flex-line-pack"+te(e,/align-content|flex-|-self/,"")+e;case 5548:return Q+e+Ge+te(e,"shrink","negative")+e;case 5292:return Q+e+Ge+te(e,"basis","preferred-size")+e;case 6060:return Q+"box-"+te(e,"-grow","")+Q+e+Ge+te(e,"grow","positive")+e;case 4554:return Q+te(e,/([^-])(transform)/g,"$1"+Q+"$2")+e;case 6187:return te(te(te(e,/(zoom-|grab)/,Q+"$1"),/(image-set)/,Q+"$1"),e,"")+e;case 5495:case 3959:return te(e,/(image-set\([^]*)/,Q+"$1$`$1");case 4968:return te(te(e,/(.+:)(flex-)?(.*)/,Q+"box-pack:$3"+Ge+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Q+e+e;case 4095:case 3583:case 4068:case 2532:return te(e,/(.+)-inline(.+)/,Q+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(on(e)-1-t>6)switch(De(e,t+1)){case 109:if(De(e,t+4)!==45)break;case 102:return te(e,/(.+:)(.+)-([^]+)/,"$1"+Q+"$2-$3$1"+Ls+(De(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Mc(e,"stretch")?pg(te(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(De(e,t+1)!==115)break;case 6444:switch(De(e,on(e)-3-(~Mc(e,"!important")&&10))){case 107:return te(e,":",":"+Q)+e;case 101:return te(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+Q+(De(e,14)===45?"inline-":"")+"box$3$1"+Q+"$2$3$1"+Ge+"$2box$3")+e}break;case 5936:switch(De(e,t+11)){case 114:return Q+e+Ge+te(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Q+e+Ge+te(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Q+e+Ge+te(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return Q+e+Ge+e+e}return e}var u9=function(t,n,r,o){if(t.length>-1&&!t.return)switch(t.type){case pf:t.return=pg(t.value,t.length);break;case sg:return uo([Zo(t,{value:te(t.value,"@","@"+Q)})],o);case ff:if(t.length)return U4(t.props,function(a){switch(H4(a,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return uo([Zo(t,{props:[te(a,/:(read-\w+)/,":"+Ls+"$1")]})],o);case"::placeholder":return uo([Zo(t,{props:[te(a,/:(plac\w+)/,":"+Q+"input-$1")]}),Zo(t,{props:[te(a,/:(plac\w+)/,":"+Ls+"$1")]}),Zo(t,{props:[te(a,/:(plac\w+)/,Ge+"input-$1")]})],o)}return""})}},c9=[u9],d9=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(v){var k=v.getAttribute("data-emotion");k.indexOf(" ")!==-1&&(document.head.appendChild(v),v.setAttribute("data-s",""))})}var o=t.stylisPlugins||c9,a={},i,s=[];i=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(v){for(var k=v.getAttribute("data-emotion").split(" "),g=1;g<k.length;g++)a[k[g]]=!0;s.push(v)});var l,u=[s9,l9];{var c,d=[t9,r9(function(v){c.insert(v)})],f=n9(u.concat(o,d)),p=function(k){return uo(J4(k),f)};l=function(k,g,m,h){c=m,p(k?k+"{"+g.styles+"}":g.styles),h&&(b.inserted[g.name]=!0)}}var b={key:n,sheet:new B4({key:n,container:i,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:a,registered:{},insert:l};return b.sheet.hydrate(s),b};function zs(){return zs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},zs.apply(this,arguments)}var mg={exports:{}},oe={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ne=typeof Symbol=="function"&&Symbol.for,hf=Ne?Symbol.for("react.element"):60103,gf=Ne?Symbol.for("react.portal"):60106,Al=Ne?Symbol.for("react.fragment"):60107,El=Ne?Symbol.for("react.strict_mode"):60108,Pl=Ne?Symbol.for("react.profiler"):60114,Il=Ne?Symbol.for("react.provider"):60109,ql=Ne?Symbol.for("react.context"):60110,yf=Ne?Symbol.for("react.async_mode"):60111,Ll=Ne?Symbol.for("react.concurrent_mode"):60111,zl=Ne?Symbol.for("react.forward_ref"):60112,Rl=Ne?Symbol.for("react.suspense"):60113,f9=Ne?Symbol.for("react.suspense_list"):60120,Ml=Ne?Symbol.for("react.memo"):60115,Vl=Ne?Symbol.for("react.lazy"):60116,p9=Ne?Symbol.for("react.block"):60121,m9=Ne?Symbol.for("react.fundamental"):60117,h9=Ne?Symbol.for("react.responder"):60118,g9=Ne?Symbol.for("react.scope"):60119;function St(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case hf:switch(e=e.type,e){case yf:case Ll:case Al:case Pl:case El:case Rl:return e;default:switch(e=e&&e.$$typeof,e){case ql:case zl:case Vl:case Ml:case Il:return e;default:return t}}case gf:return t}}}function hg(e){return St(e)===Ll}oe.AsyncMode=yf;oe.ConcurrentMode=Ll;oe.ContextConsumer=ql;oe.ContextProvider=Il;oe.Element=hf;oe.ForwardRef=zl;oe.Fragment=Al;oe.Lazy=Vl;oe.Memo=Ml;oe.Portal=gf;oe.Profiler=Pl;oe.StrictMode=El;oe.Suspense=Rl;oe.isAsyncMode=function(e){return hg(e)||St(e)===yf};oe.isConcurrentMode=hg;oe.isContextConsumer=function(e){return St(e)===ql};oe.isContextProvider=function(e){return St(e)===Il};oe.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===hf};oe.isForwardRef=function(e){return St(e)===zl};oe.isFragment=function(e){return St(e)===Al};oe.isLazy=function(e){return St(e)===Vl};oe.isMemo=function(e){return St(e)===Ml};oe.isPortal=function(e){return St(e)===gf};oe.isProfiler=function(e){return St(e)===Pl};oe.isStrictMode=function(e){return St(e)===El};oe.isSuspense=function(e){return St(e)===Rl};oe.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Al||e===Ll||e===Pl||e===El||e===Rl||e===f9||typeof e=="object"&&e!==null&&(e.$$typeof===Vl||e.$$typeof===Ml||e.$$typeof===Il||e.$$typeof===ql||e.$$typeof===zl||e.$$typeof===m9||e.$$typeof===h9||e.$$typeof===g9||e.$$typeof===p9)};oe.typeOf=St;(function(e){e.exports=oe})(mg);var gg=mg.exports,y9={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},b9={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},yg={};yg[gg.ForwardRef]=y9;yg[gg.Memo]=b9;var v9=!0;function w9(e,t,n){var r="";return n.split(" ").forEach(function(o){e[o]!==void 0?t.push(e[o]+";"):r+=o+" "}),r}var bg=function(t,n,r){var o=t.key+"-"+n.name;(r===!1||v9===!1)&&t.registered[o]===void 0&&(t.registered[o]=n.styles)},vg=function(t,n,r){bg(t,n,r);var o=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var a=n;do t.insert(n===a?"."+o:"",a,t.sheet,!0),a=a.next;while(a!==void 0)}};function x9(e){for(var t=0,n,r=0,o=e.length;o>=4;++r,o-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(o){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var S9={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},C9=/[A-Z]|^ms/g,k9=/_EMO_([^_]+?)_([^]*?)_EMO_/g,wg=function(t){return t.charCodeAt(1)===45},Mp=function(t){return t!=null&&typeof t!="boolean"},Pu=fg(function(e){return wg(e)?e:e.replace(C9,"-$&").toLowerCase()}),Vp=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(k9,function(r,o,a){return an={name:o,styles:a,next:an},o})}return S9[t]!==1&&!wg(t)&&typeof n=="number"&&n!==0?n+"px":n};function Oa(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return an={name:n.name,styles:n.styles,next:an},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)an={name:r.name,styles:r.styles,next:an},r=r.next;var o=n.styles+";";return o}return _9(e,t,n)}case"function":{if(e!==void 0){var a=an,i=n(e);return an=a,Oa(e,t,i)}break}}if(t==null)return n;var s=t[n];return s!==void 0?s:n}function _9(e,t,n){var r="";if(Array.isArray(n))for(var o=0;o<n.length;o++)r+=Oa(e,t,n[o])+";";else for(var a in n){var i=n[a];if(typeof i!="object")t!=null&&t[i]!==void 0?r+=a+"{"+t[i]+"}":Mp(i)&&(r+=Pu(a)+":"+Vp(a,i)+";");else if(Array.isArray(i)&&typeof i[0]=="string"&&(t==null||t[i[0]]===void 0))for(var s=0;s<i.length;s++)Mp(i[s])&&(r+=Pu(a)+":"+Vp(a,i[s])+";");else{var l=Oa(e,t,i);switch(a){case"animation":case"animationName":{r+=Pu(a)+":"+l+";";break}default:r+=a+"{"+l+"}"}}}return r}var Np=/label:\s*([^\s;\n{]+)\s*(;|$)/g,an,bf=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var o=!0,a="";an=void 0;var i=t[0];i==null||i.raw===void 0?(o=!1,a+=Oa(r,n,i)):a+=i[0];for(var s=1;s<t.length;s++)a+=Oa(r,n,t[s]),o&&(a+=i[s]);Np.lastIndex=0;for(var l="",u;(u=Np.exec(a))!==null;)l+="-"+u[1];var c=x9(a)+l;return{name:c,styles:a,next:an}},T9=function(t){return t()},xg=xp["useInsertionEffect"]?xp["useInsertionEffect"]:!1,F9=xg||T9,jp=xg||_.exports.useLayoutEffect,Sg=_.exports.createContext(typeof HTMLElement<"u"?d9({key:"css"}):null);Sg.Provider;var Cg=function(t){return _.exports.forwardRef(function(n,r){var o=_.exports.useContext(Sg);return t(n,o,r)})},Da=_.exports.createContext({}),A9=function(t,n){if(typeof n=="function"){var r=n(t);return r}return zs({},t,n)},E9=zp(function(e){return zp(function(t){return A9(e,t)})}),P9=function(t){var n=_.exports.useContext(Da);return t.theme!==n&&(n=E9(n)(t.theme)),_.exports.createElement(Da.Provider,{value:n},t.children)},Nl=Cg(function(e,t){var n=e.styles,r=bf([n],void 0,_.exports.useContext(Da)),o=_.exports.useRef();return jp(function(){var a=t.key+"-global",i=new t.sheet.constructor({key:a,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),s=!1,l=document.querySelector('style[data-emotion="'+a+" "+r.name+'"]');return t.sheet.tags.length&&(i.before=t.sheet.tags[0]),l!==null&&(s=!0,l.setAttribute("data-emotion",a),i.hydrate([l])),o.current=[i,s],function(){i.flush()}},[t]),jp(function(){var a=o.current,i=a[0],s=a[1];if(s){a[1]=!1;return}if(r.next!==void 0&&vg(t,r.next,!0),i.tags.length){var l=i.tags[i.tags.length-1].nextElementSibling;i.before=l,i.flush()}t.insert("",r,i,!1)},[t,r.name]),null});function I9(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return bf(t)}var q9=function(){var t=I9.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}};function L9(e){return typeof e=="function"}function z9(e,t){const n={};return Object.keys(e).forEach(r=>{t.includes(r)||(n[r]=e[r])}),n}function R9(e,t,n,r){const o=typeof t=="string"?t.split("."):[t];for(r=0;r<o.length&&e;r+=1)e=e[o[r]];return e===void 0?n:e}var M9=e=>{const t=new WeakMap;return(r,o,a,i)=>{if(typeof r>"u")return e(r,o,a);t.has(r)||t.set(r,new Map);const s=t.get(r);if(s.has(o))return s.get(o);const l=e(r,o,a,i);return s.set(o,l),l}},kg=M9(R9);function _g(e,t){const n={};return Object.keys(e).forEach(r=>{const o=e[r];t(o,r,e)&&(n[r]=o)}),n}var Tg=e=>_g(e,t=>t!=null);function Fg(e,...t){return L9(e)?e(...t):e}Object.freeze(["base","sm","md","lg","xl","2xl"]);function V9(e={}){const{strict:t=!0,errorMessage:n="useContext: `context` is undefined. Seems you forgot to wrap component within the Provider",name:r}=e,o=_.exports.createContext(void 0);o.displayName=r;function a(){var i;const s=_.exports.useContext(o);if(!s&&t){const l=new Error(n);throw l.name="ContextError",(i=Error.captureStackTrace)==null||i.call(Error,l,a),l}return s}return[o.Provider,a,o]}var N9=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,j9=fg(function(e){return N9.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),B9=j9,O9=function(t){return t!=="theme"},Bp=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?B9:O9},Op=function(t,n,r){var o;if(n){var a=n.shouldForwardProp;o=t.__emotion_forwardProp&&a?function(i){return t.__emotion_forwardProp(i)&&a(i)}:a}return typeof o!="function"&&r&&(o=t.__emotion_forwardProp),o},D9=function(t){var n=t.cache,r=t.serialized,o=t.isStringTag;return bg(n,r,o),F9(function(){return vg(n,r,o)}),null},$9=function e(t,n){var r=t.__emotion_real===t,o=r&&t.__emotion_base||t,a,i;n!==void 0&&(a=n.label,i=n.target);var s=Op(t,n,r),l=s||Bp(o),u=!l("as");return function(){var c=arguments,d=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(a!==void 0&&d.push("label:"+a+";"),c[0]==null||c[0].raw===void 0)d.push.apply(d,c);else{d.push(c[0][0]);for(var f=c.length,p=1;p<f;p++)d.push(c[p],c[0][p])}var b=Cg(function(v,k,g){var m=u&&v.as||o,h="",x=[],F=v;if(v.theme==null){F={};for(var E in v)F[E]=v[E];F.theme=_.exports.useContext(Da)}typeof v.className=="string"?h=w9(k.registered,x,v.className):v.className!=null&&(h=v.className+" ");var A=bf(d.concat(x),k.registered,F);h+=k.key+"-"+A.name,i!==void 0&&(h+=" "+i);var I=u&&s===void 0?Bp(m):l,D={};for(var N in v)u&&N==="as"||I(N)&&(D[N]=v[N]);return D.className=h,D.ref=g,_.exports.createElement(_.exports.Fragment,null,_.exports.createElement(D9,{cache:k,serialized:A,isStringTag:typeof m=="string"}),_.exports.createElement(m,D))});return b.displayName=a!==void 0?a:"Styled("+(typeof o=="string"?o:o.displayName||o.name||"Component")+")",b.defaultProps=t.defaultProps,b.__emotion_real=b,b.__emotion_base=o,b.__emotion_styles=d,b.__emotion_forwardProp=s,Object.defineProperty(b,"toString",{value:function(){return"."+i}}),b.withComponent=function(v,k){return e(v,zs({},n,k,{shouldForwardProp:Op(b,k,!0)})).apply(void 0,d)},b}},W9=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],Nc=$9.bind();W9.forEach(function(e){Nc[e]=Nc(e)});function ne(e,t={}){let n=!1;function r(){if(!n){n=!0;return}throw new Error("[anatomy] .part(...) should only be called once. Did you mean to use .extend(...) ?")}function o(...c){r();for(const d of c)t[d]=l(d);return ne(e,t)}function a(...c){for(const d of c)d in t||(t[d]=l(d));return ne(e,t)}function i(){return Object.fromEntries(Object.entries(t).map(([d,f])=>[d,f.selector]))}function s(){return Object.fromEntries(Object.entries(t).map(([d,f])=>[d,f.className]))}function l(c){const p=`chakra-${(["container","root"].includes(c!=null?c:"")?[e]:[e,c]).filter(Boolean).join("__")}`;return{className:p,selector:`.${p}`,toString:()=>c}}return{parts:o,toPart:l,extend:a,selectors:i,classnames:s,get keys(){return Object.keys(t)},__type:{}}}var H9=ne("accordion").parts("root","container","button","panel").extend("icon"),U9=ne("alert").parts("title","description","container").extend("icon","spinner"),G9=ne("avatar").parts("label","badge","container").extend("excessLabel","group"),K9=ne("breadcrumb").parts("link","item","container").extend("separator");ne("button").parts();var Z9=ne("checkbox").parts("control","icon","container").extend("label");ne("progress").parts("track","filledTrack").extend("label");var Y9=ne("drawer").parts("overlay","dialogContainer","dialog").extend("header","closeButton","body","footer"),X9=ne("editable").parts("preview","input","textarea"),Q9=ne("form").parts("container","requiredIndicator","helperText"),J9=ne("formError").parts("text","icon"),e6=ne("input").parts("addon","field","element"),t6=ne("list").parts("container","item","icon"),n6=ne("menu").parts("button","list","item").extend("groupTitle","command","divider"),r6=ne("modal").parts("overlay","dialogContainer","dialog").extend("header","closeButton","body","footer"),o6=ne("numberinput").parts("root","field","stepperGroup","stepper");ne("pininput").parts("field");var a6=ne("popover").parts("content","header","body","footer").extend("popper","arrow","closeButton"),i6=ne("progress").parts("label","filledTrack","track"),s6=ne("radio").parts("container","control","label"),l6=ne("select").parts("field","icon"),u6=ne("slider").parts("container","track","thumb","filledTrack","mark"),c6=ne("stat").parts("container","label","helpText","number","icon"),d6=ne("switch").parts("container","track","thumb"),f6=ne("table").parts("table","thead","tbody","tr","th","td","tfoot","caption"),p6=ne("tabs").parts("root","tab","tablist","tabpanel","tabpanels","indicator"),m6=ne("tag").parts("container","label","closeButton"),h6=ne("card").parts("container","header","body","footer");function Sr(e,t,n){return Math.min(Math.max(e,n),t)}class g6 extends Error{constructor(t){super(`Failed to parse color: "${t}"`)}}var ua=g6;function vf(e){if(typeof e!="string")throw new ua(e);if(e.trim().toLowerCase()==="transparent")return[0,0,0,0];let t=e.trim();t=k6.test(e)?v6(e):e;const n=w6.exec(t);if(n){const i=Array.from(n).slice(1);return[...i.slice(0,3).map(s=>parseInt($a(s,2),16)),parseInt($a(i[3]||"f",2),16)/255]}const r=x6.exec(t);if(r){const i=Array.from(r).slice(1);return[...i.slice(0,3).map(s=>parseInt(s,16)),parseInt(i[3]||"ff",16)/255]}const o=S6.exec(t);if(o){const i=Array.from(o).slice(1);return[...i.slice(0,3).map(s=>parseInt(s,10)),parseFloat(i[3]||"1")]}const a=C6.exec(t);if(a){const[i,s,l,u]=Array.from(a).slice(1).map(parseFloat);if(Sr(0,100,s)!==s)throw new ua(e);if(Sr(0,100,l)!==l)throw new ua(e);return[..._6(i,s,l),u||1]}throw new ua(e)}function y6(e){let t=5381,n=e.length;for(;n;)t=t*33^e.charCodeAt(--n);return(t>>>0)%2341}const Dp=e=>parseInt(e.replace(/_/g,""),36),b6="1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm".split(" ").reduce((e,t)=>{const n=Dp(t.substring(0,3)),r=Dp(t.substring(3)).toString(16);let o="";for(let a=0;a<6-r.length;a++)o+="0";return e[n]=`${o}${r}`,e},{});function v6(e){const t=e.toLowerCase().trim(),n=b6[y6(t)];if(!n)throw new ua(e);return`#${n}`}const $a=(e,t)=>Array.from(Array(t)).map(()=>e).join(""),w6=new RegExp(`^#${$a("([a-f0-9])",3)}([a-f0-9])?$`,"i"),x6=new RegExp(`^#${$a("([a-f0-9]{2})",3)}([a-f0-9]{2})?$`,"i"),S6=new RegExp(`^rgba?\\(\\s*(\\d+)\\s*${$a(",\\s*(\\d+)\\s*",2)}(?:,\\s*([\\d.]+))?\\s*\\)$`,"i"),C6=/^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i,k6=/^[a-z]+$/i,$p=e=>Math.round(e*255),_6=(e,t,n)=>{let r=n/100;if(t===0)return[r,r,r].map($p);const o=(e%360+360)%360/60,a=(1-Math.abs(2*r-1))*(t/100),i=a*(1-Math.abs(o%2-1));let s=0,l=0,u=0;o>=0&&o<1?(s=a,l=i):o>=1&&o<2?(s=i,l=a):o>=2&&o<3?(l=a,u=i):o>=3&&o<4?(l=i,u=a):o>=4&&o<5?(s=i,u=a):o>=5&&o<6&&(s=a,u=i);const c=r-a/2,d=s+c,f=l+c,p=u+c;return[d,f,p].map($p)};function T6(e,t,n,r){return`rgba(${Sr(0,255,e).toFixed()}, ${Sr(0,255,t).toFixed()}, ${Sr(0,255,n).toFixed()}, ${parseFloat(Sr(0,1,r).toFixed(3))})`}function F6(e,t){const[n,r,o,a]=vf(e);return T6(n,r,o,a-t)}function A6(e){const[t,n,r,o]=vf(e);let a=i=>{const s=Sr(0,255,i).toString(16);return s.length===1?`0${s}`:s};return`#${a(t)}${a(n)}${a(r)}${o<1?a(Math.round(o*255)):""}`}function E6(e,t,n,r,o){for(t=t.split?t.split("."):t,r=0;r<t.length;r++)e=e?e[t[r]]:o;return e===o?n:e}var P6=e=>Object.keys(e).length===0,Qe=(e,t,n)=>{const r=E6(e,`colors.${t}`,t);try{return A6(r),r}catch{return n!=null?n:"#000000"}},I6=e=>{const[t,n,r]=vf(e);return(t*299+n*587+r*114)/1e3},q6=e=>t=>{const n=Qe(t,e);return I6(n)<128?"dark":"light"},L6=e=>t=>q6(e)(t)==="dark",Fo=(e,t)=>n=>{const r=Qe(n,e);return F6(r,1-t)};function Wp(e="1rem",t="rgba(255, 255, 255, 0.15)"){return{backgroundImage:`linear-gradient(
    45deg,
    ${t} 25%,
    transparent 25%,
    transparent 50%,
    ${t} 50%,
    ${t} 75%,
    transparent 75%,
    transparent
  )`,backgroundSize:`${e} ${e}`}}var z6=()=>`#${Math.floor(Math.random()*16777215).toString(16).padEnd(6,"0")}`;function R6(e){const t=z6();return!e||P6(e)?t:e.string&&e.colors?V6(e.string,e.colors):e.string&&!e.colors?M6(e.string):e.colors&&!e.string?N6(e.colors):t}function M6(e){let t=0;if(e.length===0)return t.toString();for(let r=0;r<e.length;r+=1)t=e.charCodeAt(r)+((t<<5)-t),t=t&t;let n="#";for(let r=0;r<3;r+=1)n+=`00${(t>>r*8&255).toString(16)}`.substr(-2);return n}function V6(e,t){let n=0;if(e.length===0)return t[0];for(let r=0;r<e.length;r+=1)n=e.charCodeAt(r)+((n<<5)-n),n=n&n;return n=(n%t.length+t.length)%t.length,t[n]}function N6(e){return e[Math.floor(Math.random()*e.length)]}function O(e,t){return n=>n.colorMode==="dark"?t:e}function wf(e){const{orientation:t,vertical:n,horizontal:r}=e;return t?t==="vertical"?n:r:{}}function j6(e){const t=typeof e;return e!=null&&(t==="object"||t==="function")&&!Array.isArray(e)}function Ag(e){return j6(e)&&e.reference?e.reference:String(e)}var jl=(e,...t)=>t.map(Ag).join(` ${e} `).replace(/calc/g,""),Hp=(...e)=>`calc(${jl("+",...e)})`,Up=(...e)=>`calc(${jl("-",...e)})`,jc=(...e)=>`calc(${jl("*",...e)})`,Gp=(...e)=>`calc(${jl("/",...e)})`,Kp=e=>{const t=Ag(e);return t!=null&&!Number.isNaN(parseFloat(t))?String(t).startsWith("-")?String(t).slice(1):`-${t}`:jc(t,-1)},Sn=Object.assign(e=>({add:(...t)=>Sn(Hp(e,...t)),subtract:(...t)=>Sn(Up(e,...t)),multiply:(...t)=>Sn(jc(e,...t)),divide:(...t)=>Sn(Gp(e,...t)),negate:()=>Sn(Kp(e)),toString:()=>e.toString()}),{add:Hp,subtract:Up,multiply:jc,divide:Gp,negate:Kp});function B6(e){return!Number.isInteger(parseFloat(e.toString()))}function O6(e,t="-"){return e.replace(/\s+/g,t)}function Eg(e){const t=O6(e.toString());return t.includes("\\.")?e:B6(e)?t.replace(".","\\."):e}function D6(e,t=""){return[t,Eg(e)].filter(Boolean).join("-")}function $6(e,t){return`var(${Eg(e)}${t?`, ${t}`:""})`}function W6(e,t=""){return`--${D6(e,t)}`}function Re(e,t){const n=W6(e,t==null?void 0:t.prefix);return{variable:n,reference:$6(n,H6(t==null?void 0:t.fallback))}}function H6(e){return typeof e=="string"?e:e==null?void 0:e.reference}var{definePartsStyle:U6,defineMultiStyleConfig:G6}=fe(H9.keys),K6={borderTopWidth:"1px",borderColor:"inherit",_last:{borderBottomWidth:"1px"}},Z6={transitionProperty:"common",transitionDuration:"normal",fontSize:"md",_focusVisible:{boxShadow:"outline"},_hover:{bg:"blackAlpha.50"},_disabled:{opacity:.4,cursor:"not-allowed"},px:"4",py:"2"},Y6={pt:"2",px:"4",pb:"5"},X6={fontSize:"1.25em"},Q6=U6({container:K6,button:Z6,panel:Y6,icon:X6}),J6=G6({baseStyle:Q6}),{definePartsStyle:yi,defineMultiStyleConfig:ew}=fe(U9.keys),bt=ae("alert-fg"),Fn=ae("alert-bg"),tw=yi({container:{bg:Fn.reference,px:"4",py:"3"},title:{fontWeight:"bold",lineHeight:"6",marginEnd:"2"},description:{lineHeight:"6"},icon:{color:bt.reference,flexShrink:0,marginEnd:"3",w:"5",h:"6"},spinner:{color:bt.reference,flexShrink:0,marginEnd:"3",w:"5",h:"5"}});function xf(e){const{theme:t,colorScheme:n}=e,r=Fo(`${n}.200`,.16)(t);return{light:`colors.${n}.100`,dark:r}}var nw=yi(e=>{const{colorScheme:t}=e,n=xf(e);return{container:{[bt.variable]:`colors.${t}.500`,[Fn.variable]:n.light,_dark:{[bt.variable]:`colors.${t}.200`,[Fn.variable]:n.dark}}}}),rw=yi(e=>{const{colorScheme:t}=e,n=xf(e);return{container:{[bt.variable]:`colors.${t}.500`,[Fn.variable]:n.light,_dark:{[bt.variable]:`colors.${t}.200`,[Fn.variable]:n.dark},paddingStart:"3",borderStartWidth:"4px",borderStartColor:bt.reference}}}),ow=yi(e=>{const{colorScheme:t}=e,n=xf(e);return{container:{[bt.variable]:`colors.${t}.500`,[Fn.variable]:n.light,_dark:{[bt.variable]:`colors.${t}.200`,[Fn.variable]:n.dark},pt:"2",borderTopWidth:"4px",borderTopColor:bt.reference}}}),aw=yi(e=>{const{colorScheme:t}=e;return{container:{[bt.variable]:"colors.white",[Fn.variable]:`colors.${t}.500`,_dark:{[bt.variable]:"colors.gray.900",[Fn.variable]:`colors.${t}.200`},color:bt.reference}}}),iw={subtle:nw,"left-accent":rw,"top-accent":ow,solid:aw},sw=ew({baseStyle:tw,variants:iw,defaultProps:{variant:"subtle",colorScheme:"blue"}}),Pg={px:"1px",.5:"0.125rem",1:"0.25rem",1.5:"0.375rem",2:"0.5rem",2.5:"0.625rem",3:"0.75rem",3.5:"0.875rem",4:"1rem",5:"1.25rem",6:"1.5rem",7:"1.75rem",8:"2rem",9:"2.25rem",10:"2.5rem",12:"3rem",14:"3.5rem",16:"4rem",20:"5rem",24:"6rem",28:"7rem",32:"8rem",36:"9rem",40:"10rem",44:"11rem",48:"12rem",52:"13rem",56:"14rem",60:"15rem",64:"16rem",72:"18rem",80:"20rem",96:"24rem"},lw={max:"max-content",min:"min-content",full:"100%","3xs":"14rem","2xs":"16rem",xs:"20rem",sm:"24rem",md:"28rem",lg:"32rem",xl:"36rem","2xl":"42rem","3xl":"48rem","4xl":"56rem","5xl":"64rem","6xl":"72rem","7xl":"80rem","8xl":"90rem",prose:"60ch"},uw={sm:"640px",md:"768px",lg:"1024px",xl:"1280px"},cw={...Pg,...lw,container:uw},Ig=cw,dw=e=>typeof e=="function";function Je(e,...t){return dw(e)?e(...t):e}var{definePartsStyle:qg,defineMultiStyleConfig:fw}=fe(G9.keys),co=ae("avatar-border-color"),Iu=ae("avatar-bg"),pw={borderRadius:"full",border:"0.2em solid",[co.variable]:"white",_dark:{[co.variable]:"colors.gray.800"},borderColor:co.reference},mw={[Iu.variable]:"colors.gray.200",_dark:{[Iu.variable]:"colors.whiteAlpha.400"},bgColor:Iu.reference},Zp=ae("avatar-background"),hw=e=>{const{name:t,theme:n}=e,r=t?R6({string:t}):"colors.gray.400",o=L6(r)(n);let a="white";return o||(a="gray.800"),{bg:Zp.reference,"&:not([data-loaded])":{[Zp.variable]:r},color:a,[co.variable]:"colors.white",_dark:{[co.variable]:"colors.gray.800"},borderColor:co.reference,verticalAlign:"top"}},gw=qg(e=>({badge:Je(pw,e),excessLabel:Je(mw,e),container:Je(hw,e)}));function Rn(e){const t=e!=="100%"?Ig[e]:void 0;return qg({container:{width:e,height:e,fontSize:`calc(${t!=null?t:e} / 2.5)`},excessLabel:{width:e,height:e},label:{fontSize:`calc(${t!=null?t:e} / 2.5)`,lineHeight:e!=="100%"?t!=null?t:e:void 0}})}var yw={"2xs":Rn(4),xs:Rn(6),sm:Rn(8),md:Rn(12),lg:Rn(16),xl:Rn(24),"2xl":Rn(32),full:Rn("100%")},bw=fw({baseStyle:gw,sizes:yw,defaultProps:{size:"md"}}),vw={px:1,textTransform:"uppercase",fontSize:"xs",borderRadius:"sm",fontWeight:"bold"},fo=ae("badge-bg"),un=ae("badge-color"),ww=e=>{const{colorScheme:t,theme:n}=e,r=Fo(`${t}.500`,.6)(n);return{[fo.variable]:`colors.${t}.500`,[un.variable]:"colors.white",_dark:{[fo.variable]:r,[un.variable]:"colors.whiteAlpha.800"},bg:fo.reference,color:un.reference}},xw=e=>{const{colorScheme:t,theme:n}=e,r=Fo(`${t}.200`,.16)(n);return{[fo.variable]:`colors.${t}.100`,[un.variable]:`colors.${t}.800`,_dark:{[fo.variable]:r,[un.variable]:`colors.${t}.200`},bg:fo.reference,color:un.reference}},Sw=e=>{const{colorScheme:t,theme:n}=e,r=Fo(`${t}.200`,.8)(n);return{[un.variable]:`colors.${t}.500`,_dark:{[un.variable]:r},color:un.reference,boxShadow:`inset 0 0 0px 1px ${un.reference}`}},Cw={solid:ww,subtle:xw,outline:Sw},ga={baseStyle:vw,variants:Cw,defaultProps:{variant:"subtle",colorScheme:"gray"}},{defineMultiStyleConfig:kw,definePartsStyle:_w}=fe(K9.keys),Tw={transitionProperty:"common",transitionDuration:"fast",transitionTimingFunction:"ease-out",cursor:"pointer",textDecoration:"none",outline:"none",color:"inherit",_hover:{textDecoration:"underline"},_focusVisible:{boxShadow:"outline"}},Fw=_w({link:Tw}),Aw=kw({baseStyle:Fw}),Ew={lineHeight:"1.2",borderRadius:"md",fontWeight:"semibold",transitionProperty:"common",transitionDuration:"normal",_focusVisible:{boxShadow:"outline"},_disabled:{opacity:.4,cursor:"not-allowed",boxShadow:"none"},_hover:{_disabled:{bg:"initial"}}},Lg=e=>{const{colorScheme:t,theme:n}=e;if(t==="gray")return{color:O("inherit","whiteAlpha.900")(e),_hover:{bg:O("gray.100","whiteAlpha.200")(e)},_active:{bg:O("gray.200","whiteAlpha.300")(e)}};const r=Fo(`${t}.200`,.12)(n),o=Fo(`${t}.200`,.24)(n);return{color:O(`${t}.600`,`${t}.200`)(e),bg:"transparent",_hover:{bg:O(`${t}.50`,r)(e)},_active:{bg:O(`${t}.100`,o)(e)}}},Pw=e=>{const{colorScheme:t}=e,n=O("gray.200","whiteAlpha.300")(e);return{border:"1px solid",borderColor:t==="gray"?n:"currentColor",".chakra-button__group[data-attached][data-orientation=horizontal] > &:not(:last-of-type)":{marginEnd:"-1px"},".chakra-button__group[data-attached][data-orientation=vertical] > &:not(:last-of-type)":{marginBottom:"-1px"},...Je(Lg,e)}},Iw={yellow:{bg:"yellow.400",color:"black",hoverBg:"yellow.500",activeBg:"yellow.600"},cyan:{bg:"cyan.400",color:"black",hoverBg:"cyan.500",activeBg:"cyan.600"}},qw=e=>{var s;const{colorScheme:t}=e;if(t==="gray"){const l=O("gray.100","whiteAlpha.200")(e);return{bg:l,_hover:{bg:O("gray.200","whiteAlpha.300")(e),_disabled:{bg:l}},_active:{bg:O("gray.300","whiteAlpha.400")(e)}}}const{bg:n=`${t}.500`,color:r="white",hoverBg:o=`${t}.600`,activeBg:a=`${t}.700`}=(s=Iw[t])!=null?s:{},i=O(n,`${t}.200`)(e);return{bg:i,color:O(r,"gray.800")(e),_hover:{bg:O(o,`${t}.300`)(e),_disabled:{bg:i}},_active:{bg:O(a,`${t}.400`)(e)}}},Lw=e=>{const{colorScheme:t}=e;return{padding:0,height:"auto",lineHeight:"normal",verticalAlign:"baseline",color:O(`${t}.500`,`${t}.200`)(e),_hover:{textDecoration:"underline",_disabled:{textDecoration:"none"}},_active:{color:O(`${t}.700`,`${t}.500`)(e)}}},zw={bg:"none",color:"inherit",display:"inline",lineHeight:"inherit",m:"0",p:"0"},Rw={ghost:Lg,outline:Pw,solid:qw,link:Lw,unstyled:zw},Mw={lg:{h:"12",minW:"12",fontSize:"lg",px:"6"},md:{h:"10",minW:"10",fontSize:"md",px:"4"},sm:{h:"8",minW:"8",fontSize:"sm",px:"3"},xs:{h:"6",minW:"6",fontSize:"xs",px:"2"}},Vw={baseStyle:Ew,variants:Rw,sizes:Mw,defaultProps:{variant:"solid",size:"md",colorScheme:"gray"}},{definePartsStyle:Fr,defineMultiStyleConfig:Nw}=fe(h6.keys),Rs=ae("card-bg"),po=ae("card-padding"),jw=Fr({container:{[Rs.variable]:"chakra-body-bg",backgroundColor:Rs.reference,color:"chakra-body-text"},body:{padding:po.reference,flex:"1 1 0%"},header:{padding:po.reference},footer:{padding:po.reference}}),Bw={sm:Fr({container:{borderRadius:"base",[po.variable]:"space.3"}}),md:Fr({container:{borderRadius:"md",[po.variable]:"space.5"}}),lg:Fr({container:{borderRadius:"xl",[po.variable]:"space.7"}})},Ow={elevated:Fr({container:{boxShadow:"base",_dark:{[Rs.variable]:"colors.gray.700"}}}),outline:Fr({container:{borderWidth:"1px",borderColor:"chakra-border-color"}}),filled:Fr({container:{[Rs.variable]:"colors.chakra-subtle-bg"}}),unstyled:{body:{padding:0},header:{padding:0},footer:{padding:0}}},Dw=Nw({baseStyle:jw,variants:Ow,sizes:Bw,defaultProps:{variant:"elevated",size:"md"}}),{definePartsStyle:ys,defineMultiStyleConfig:$w}=fe(Z9.keys),ya=ae("checkbox-size"),Ww=e=>{const{colorScheme:t}=e;return{w:ya.reference,h:ya.reference,transitionProperty:"box-shadow",transitionDuration:"normal",border:"2px solid",borderRadius:"sm",borderColor:"inherit",color:"white",_checked:{bg:O(`${t}.500`,`${t}.200`)(e),borderColor:O(`${t}.500`,`${t}.200`)(e),color:O("white","gray.900")(e),_hover:{bg:O(`${t}.600`,`${t}.300`)(e),borderColor:O(`${t}.600`,`${t}.300`)(e)},_disabled:{borderColor:O("gray.200","transparent")(e),bg:O("gray.200","whiteAlpha.300")(e),color:O("gray.500","whiteAlpha.500")(e)}},_indeterminate:{bg:O(`${t}.500`,`${t}.200`)(e),borderColor:O(`${t}.500`,`${t}.200`)(e),color:O("white","gray.900")(e)},_disabled:{bg:O("gray.100","whiteAlpha.100")(e),borderColor:O("gray.100","transparent")(e)},_focusVisible:{boxShadow:"outline"},_invalid:{borderColor:O("red.500","red.300")(e)}}},Hw={_disabled:{cursor:"not-allowed"}},Uw={userSelect:"none",_disabled:{opacity:.4}},Gw={transitionProperty:"transform",transitionDuration:"normal"},Kw=ys(e=>({icon:Gw,container:Hw,control:Je(Ww,e),label:Uw})),Zw={sm:ys({control:{[ya.variable]:"sizes.3"},label:{fontSize:"sm"},icon:{fontSize:"3xs"}}),md:ys({control:{[ya.variable]:"sizes.4"},label:{fontSize:"md"},icon:{fontSize:"2xs"}}),lg:ys({control:{[ya.variable]:"sizes.5"},label:{fontSize:"lg"},icon:{fontSize:"2xs"}})},Ms=$w({baseStyle:Kw,sizes:Zw,defaultProps:{size:"md",colorScheme:"blue"}}),ba=Re("close-button-size"),Yo=Re("close-button-bg"),Yw={w:[ba.reference],h:[ba.reference],borderRadius:"md",transitionProperty:"common",transitionDuration:"normal",_disabled:{opacity:.4,cursor:"not-allowed",boxShadow:"none"},_hover:{[Yo.variable]:"colors.blackAlpha.100",_dark:{[Yo.variable]:"colors.whiteAlpha.100"}},_active:{[Yo.variable]:"colors.blackAlpha.200",_dark:{[Yo.variable]:"colors.whiteAlpha.200"}},_focusVisible:{boxShadow:"outline"},bg:Yo.reference},Xw={lg:{[ba.variable]:"sizes.10",fontSize:"md"},md:{[ba.variable]:"sizes.8",fontSize:"xs"},sm:{[ba.variable]:"sizes.6",fontSize:"2xs"}},Qw={baseStyle:Yw,sizes:Xw,defaultProps:{size:"md"}},{variants:Jw,defaultProps:e8}=ga,t8={fontFamily:"mono",fontSize:"sm",px:"0.2em",borderRadius:"sm"},n8={baseStyle:t8,variants:Jw,defaultProps:e8},r8={w:"100%",mx:"auto",maxW:"prose",px:"4"},o8={baseStyle:r8},a8={opacity:.6,borderColor:"inherit"},i8={borderStyle:"solid"},s8={borderStyle:"dashed"},l8={solid:i8,dashed:s8},u8={baseStyle:a8,variants:l8,defaultProps:{variant:"solid"}},{definePartsStyle:Bc,defineMultiStyleConfig:c8}=fe(Y9.keys),qu=ae("drawer-bg"),Lu=ae("drawer-box-shadow");function Wr(e){return Bc(e==="full"?{dialog:{maxW:"100vw",h:"100vh"}}:{dialog:{maxW:e}})}var d8={bg:"blackAlpha.600",zIndex:"overlay"},f8={display:"flex",zIndex:"modal",justifyContent:"center"},p8=e=>{const{isFullHeight:t}=e;return{...t&&{height:"100vh"},zIndex:"modal",maxH:"100vh",color:"inherit",[qu.variable]:"colors.white",[Lu.variable]:"shadows.lg",_dark:{[qu.variable]:"colors.gray.700",[Lu.variable]:"shadows.dark-lg"},bg:qu.reference,boxShadow:Lu.reference}},m8={px:"6",py:"4",fontSize:"xl",fontWeight:"semibold"},h8={position:"absolute",top:"2",insetEnd:"3"},g8={px:"6",py:"2",flex:"1",overflow:"auto"},y8={px:"6",py:"4"},b8=Bc(e=>({overlay:d8,dialogContainer:f8,dialog:Je(p8,e),header:m8,closeButton:h8,body:g8,footer:y8})),v8={xs:Wr("xs"),sm:Wr("md"),md:Wr("lg"),lg:Wr("2xl"),xl:Wr("4xl"),full:Wr("full")},w8=c8({baseStyle:b8,sizes:v8,defaultProps:{size:"xs"}}),{definePartsStyle:x8,defineMultiStyleConfig:S8}=fe(X9.keys),C8={borderRadius:"md",py:"1",transitionProperty:"common",transitionDuration:"normal"},k8={borderRadius:"md",py:"1",transitionProperty:"common",transitionDuration:"normal",width:"full",_focusVisible:{boxShadow:"outline"},_placeholder:{opacity:.6}},_8={borderRadius:"md",py:"1",transitionProperty:"common",transitionDuration:"normal",width:"full",_focusVisible:{boxShadow:"outline"},_placeholder:{opacity:.6}},T8=x8({preview:C8,input:k8,textarea:_8}),F8=S8({baseStyle:T8}),{definePartsStyle:A8,defineMultiStyleConfig:E8}=fe(Q9.keys),mo=ae("form-control-color"),P8={marginStart:"1",[mo.variable]:"colors.red.500",_dark:{[mo.variable]:"colors.red.300"},color:mo.reference},I8={mt:"2",[mo.variable]:"colors.gray.600",_dark:{[mo.variable]:"colors.whiteAlpha.600"},color:mo.reference,lineHeight:"normal",fontSize:"sm"},q8=A8({container:{width:"100%",position:"relative"},requiredIndicator:P8,helperText:I8}),L8=E8({baseStyle:q8}),{definePartsStyle:z8,defineMultiStyleConfig:R8}=fe(J9.keys),ho=ae("form-error-color"),M8={[ho.variable]:"colors.red.500",_dark:{[ho.variable]:"colors.red.300"},color:ho.reference,mt:"2",fontSize:"sm",lineHeight:"normal"},V8={marginEnd:"0.5em",[ho.variable]:"colors.red.500",_dark:{[ho.variable]:"colors.red.300"},color:ho.reference},N8=z8({text:M8,icon:V8}),j8=R8({baseStyle:N8}),B8={fontSize:"md",marginEnd:"3",mb:"2",fontWeight:"medium",transitionProperty:"common",transitionDuration:"normal",opacity:1,_disabled:{opacity:.4}},O8={baseStyle:B8},D8={fontFamily:"heading",fontWeight:"bold"},$8={"4xl":{fontSize:["6xl",null,"7xl"],lineHeight:1},"3xl":{fontSize:["5xl",null,"6xl"],lineHeight:1},"2xl":{fontSize:["4xl",null,"5xl"],lineHeight:[1.2,null,1]},xl:{fontSize:["3xl",null,"4xl"],lineHeight:[1.33,null,1.2]},lg:{fontSize:["2xl",null,"3xl"],lineHeight:[1.33,null,1.2]},md:{fontSize:"xl",lineHeight:1.2},sm:{fontSize:"md",lineHeight:1.2},xs:{fontSize:"sm",lineHeight:1.2}},W8={baseStyle:D8,sizes:$8,defaultProps:{size:"xl"}},{definePartsStyle:Cn,defineMultiStyleConfig:H8}=fe(e6.keys),U8=Cn({field:{width:"100%",minWidth:0,outline:0,position:"relative",appearance:"none",transitionProperty:"common",transitionDuration:"normal",_disabled:{opacity:.4,cursor:"not-allowed"}}}),Mn={lg:{fontSize:"lg",px:"4",h:"12",borderRadius:"md"},md:{fontSize:"md",px:"4",h:"10",borderRadius:"md"},sm:{fontSize:"sm",px:"3",h:"8",borderRadius:"sm"},xs:{fontSize:"xs",px:"2",h:"6",borderRadius:"sm"}},G8={lg:Cn({field:Mn.lg,addon:Mn.lg}),md:Cn({field:Mn.md,addon:Mn.md}),sm:Cn({field:Mn.sm,addon:Mn.sm}),xs:Cn({field:Mn.xs,addon:Mn.xs})};function Sf(e){const{focusBorderColor:t,errorBorderColor:n}=e;return{focusBorderColor:t||O("blue.500","blue.300")(e),errorBorderColor:n||O("red.500","red.300")(e)}}var K8=Cn(e=>{const{theme:t}=e,{focusBorderColor:n,errorBorderColor:r}=Sf(e);return{field:{border:"1px solid",borderColor:"inherit",bg:"inherit",_hover:{borderColor:O("gray.300","whiteAlpha.400")(e)},_readOnly:{boxShadow:"none !important",userSelect:"all"},_invalid:{borderColor:Qe(t,r),boxShadow:`0 0 0 1px ${Qe(t,r)}`},_focusVisible:{zIndex:1,borderColor:Qe(t,n),boxShadow:`0 0 0 1px ${Qe(t,n)}`}},addon:{border:"1px solid",borderColor:O("inherit","whiteAlpha.50")(e),bg:O("gray.100","whiteAlpha.300")(e)}}}),Z8=Cn(e=>{const{theme:t}=e,{focusBorderColor:n,errorBorderColor:r}=Sf(e);return{field:{border:"2px solid",borderColor:"transparent",bg:O("gray.100","whiteAlpha.50")(e),_hover:{bg:O("gray.200","whiteAlpha.100")(e)},_readOnly:{boxShadow:"none !important",userSelect:"all"},_invalid:{borderColor:Qe(t,r)},_focusVisible:{bg:"transparent",borderColor:Qe(t,n)}},addon:{border:"2px solid",borderColor:"transparent",bg:O("gray.100","whiteAlpha.50")(e)}}}),Y8=Cn(e=>{const{theme:t}=e,{focusBorderColor:n,errorBorderColor:r}=Sf(e);return{field:{borderBottom:"1px solid",borderColor:"inherit",borderRadius:"0",px:"0",bg:"transparent",_readOnly:{boxShadow:"none !important",userSelect:"all"},_invalid:{borderColor:Qe(t,r),boxShadow:`0px 1px 0px 0px ${Qe(t,r)}`},_focusVisible:{borderColor:Qe(t,n),boxShadow:`0px 1px 0px 0px ${Qe(t,n)}`}},addon:{borderBottom:"2px solid",borderColor:"inherit",borderRadius:"0",px:"0",bg:"transparent"}}}),X8=Cn({field:{bg:"transparent",px:"0",height:"auto"},addon:{bg:"transparent",px:"0",height:"auto"}}),Q8={outline:K8,filled:Z8,flushed:Y8,unstyled:X8},J=H8({baseStyle:U8,sizes:G8,variants:Q8,defaultProps:{size:"md",variant:"outline"}}),zu=ae("kbd-bg"),J8={[zu.variable]:"colors.gray.100",_dark:{[zu.variable]:"colors.whiteAlpha.100"},bg:zu.reference,borderRadius:"md",borderWidth:"1px",borderBottomWidth:"3px",fontSize:"0.8em",fontWeight:"bold",lineHeight:"normal",px:"0.4em",whiteSpace:"nowrap"},e7={baseStyle:J8},t7={transitionProperty:"common",transitionDuration:"fast",transitionTimingFunction:"ease-out",cursor:"pointer",textDecoration:"none",outline:"none",color:"inherit",_hover:{textDecoration:"underline"},_focusVisible:{boxShadow:"outline"}},n7={baseStyle:t7},{defineMultiStyleConfig:r7,definePartsStyle:o7}=fe(t6.keys),a7={marginEnd:"2",display:"inline",verticalAlign:"text-bottom"},i7=o7({icon:a7}),s7=r7({baseStyle:i7}),{defineMultiStyleConfig:l7,definePartsStyle:u7}=fe(n6.keys),rn=ae("menu-bg"),Ru=ae("menu-shadow"),c7={[rn.variable]:"#fff",[Ru.variable]:"shadows.sm",_dark:{[rn.variable]:"colors.gray.700",[Ru.variable]:"shadows.dark-lg"},color:"inherit",minW:"3xs",py:"2",zIndex:1,borderRadius:"md",borderWidth:"1px",bg:rn.reference,boxShadow:Ru.reference},d7={py:"1.5",px:"3",transitionProperty:"background",transitionDuration:"ultra-fast",transitionTimingFunction:"ease-in",_focus:{[rn.variable]:"colors.gray.100",_dark:{[rn.variable]:"colors.whiteAlpha.100"}},_active:{[rn.variable]:"colors.gray.200",_dark:{[rn.variable]:"colors.whiteAlpha.200"}},_expanded:{[rn.variable]:"colors.gray.100",_dark:{[rn.variable]:"colors.whiteAlpha.100"}},_disabled:{opacity:.4,cursor:"not-allowed"},bg:rn.reference},f7={mx:4,my:2,fontWeight:"semibold",fontSize:"sm"},p7={opacity:.6},m7={border:0,borderBottom:"1px solid",borderColor:"inherit",my:"2",opacity:.6},h7={transitionProperty:"common",transitionDuration:"normal"},g7=u7({button:h7,list:c7,item:d7,groupTitle:f7,command:p7,divider:m7}),y7=l7({baseStyle:g7}),{defineMultiStyleConfig:b7,definePartsStyle:Oc}=fe(r6.keys),v7={bg:"blackAlpha.600",zIndex:"modal"},w7=e=>{const{isCentered:t,scrollBehavior:n}=e;return{display:"flex",zIndex:"modal",justifyContent:"center",alignItems:t?"center":"flex-start",overflow:n==="inside"?"hidden":"auto",overscrollBehaviorY:"none"}},x7=e=>{const{scrollBehavior:t}=e;return{borderRadius:"md",bg:O("white","gray.700")(e),color:"inherit",my:"16",zIndex:"modal",maxH:t==="inside"?"calc(100% - 7.5rem)":void 0,boxShadow:O("lg","dark-lg")(e)}},S7={px:"6",py:"4",fontSize:"xl",fontWeight:"semibold"},C7={position:"absolute",top:"2",insetEnd:"3"},k7=e=>{const{scrollBehavior:t}=e;return{px:"6",py:"2",flex:"1",overflow:t==="inside"?"auto":void 0}},_7={px:"6",py:"4"},T7=Oc(e=>({overlay:v7,dialogContainer:Je(w7,e),dialog:Je(x7,e),header:S7,closeButton:C7,body:Je(k7,e),footer:_7}));function Nt(e){return Oc(e==="full"?{dialog:{maxW:"100vw",minH:"$100vh",my:"0",borderRadius:"0"}}:{dialog:{maxW:e}})}var F7={xs:Nt("xs"),sm:Nt("sm"),md:Nt("md"),lg:Nt("lg"),xl:Nt("xl"),"2xl":Nt("2xl"),"3xl":Nt("3xl"),"4xl":Nt("4xl"),"5xl":Nt("5xl"),"6xl":Nt("6xl"),full:Nt("full")},A7=b7({baseStyle:T7,sizes:F7,defaultProps:{size:"md"}}),E7={letterSpacings:{tighter:"-0.05em",tight:"-0.025em",normal:"0",wide:"0.025em",wider:"0.05em",widest:"0.1em"},lineHeights:{normal:"normal",none:1,shorter:1.25,short:1.375,base:1.5,tall:1.625,taller:"2",3:".75rem",4:"1rem",5:"1.25rem",6:"1.5rem",7:"1.75rem",8:"2rem",9:"2.25rem",10:"2.5rem"},fontWeights:{hairline:100,thin:200,light:300,normal:400,medium:500,semibold:600,bold:700,extrabold:800,black:900},fonts:{heading:'-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',body:'-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',mono:'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'},fontSizes:{"3xs":"0.45rem","2xs":"0.625rem",xs:"0.75rem",sm:"0.875rem",md:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.5rem","3xl":"1.875rem","4xl":"2.25rem","5xl":"3rem","6xl":"3.75rem","7xl":"4.5rem","8xl":"6rem","9xl":"8rem"}},zg=E7,{defineMultiStyleConfig:P7,definePartsStyle:Rg}=fe(o6.keys),Cf=Re("number-input-stepper-width"),Mg=Re("number-input-input-padding"),I7=Sn(Cf).add("0.5rem").toString(),Mu=Re("number-input-bg"),Vu=Re("number-input-color"),Nu=Re("number-input-border-color"),q7={[Cf.variable]:"sizes.6",[Mg.variable]:I7},L7=e=>{var n;var t;return(n=(t=Je(J.baseStyle,e))==null?void 0:t.field)!=null?n:{}},z7={width:Cf.reference},R7={borderStart:"1px solid",borderStartColor:Nu.reference,color:Vu.reference,bg:Mu.reference,[Vu.variable]:"colors.chakra-body-text",[Nu.variable]:"colors.chakra-border-color",_dark:{[Vu.variable]:"colors.whiteAlpha.800",[Nu.variable]:"colors.whiteAlpha.300"},_active:{[Mu.variable]:"colors.gray.200",_dark:{[Mu.variable]:"colors.whiteAlpha.300"}},_disabled:{opacity:.4,cursor:"not-allowed"}},M7=Rg(e=>{var t;return{root:q7,field:(t=Je(L7,e))!=null?t:{},stepperGroup:z7,stepper:R7}});function ji(e){var s;var t,n;const r=(t=J.sizes)==null?void 0:t[e],o={lg:"md",md:"md",sm:"sm",xs:"sm"},a=(s=(n=r.field)==null?void 0:n.fontSize)!=null?s:"md",i=zg.fontSizes[a];return Rg({field:{...r.field,paddingInlineEnd:Mg.reference,verticalAlign:"top"},stepper:{fontSize:Sn(i).multiply(.75).toString(),_first:{borderTopEndRadius:o[e]},_last:{borderBottomEndRadius:o[e],mt:"-1px",borderTopWidth:1}}})}var V7={xs:ji("xs"),sm:ji("sm"),md:ji("md"),lg:ji("lg")},N7=P7({baseStyle:M7,sizes:V7,variants:J.variants,defaultProps:J.defaultProps}),Yp,j7={...(Yp=J.baseStyle)==null?void 0:Yp.field,textAlign:"center"},B7={lg:{fontSize:"lg",w:12,h:12,borderRadius:"md"},md:{fontSize:"md",w:10,h:10,borderRadius:"md"},sm:{fontSize:"sm",w:8,h:8,borderRadius:"sm"},xs:{fontSize:"xs",w:6,h:6,borderRadius:"sm"}},Xp,Mh,O7={outline:e=>{var r;var t,n;return(r=(n=Je((t=J.variants)==null?void 0:t.outline,e))==null?void 0:n.field)!=null?r:{}},flushed:e=>{var r;var t,n;return(r=(n=Je((t=J.variants)==null?void 0:t.flushed,e))==null?void 0:n.field)!=null?r:{}},filled:e=>{var r;var t,n;return(r=(n=Je((t=J.variants)==null?void 0:t.filled,e))==null?void 0:n.field)!=null?r:{}},unstyled:(Mh=(Xp=J.variants)==null?void 0:Xp.unstyled.field)!=null?Mh:{}},D7={baseStyle:j7,sizes:B7,variants:O7,defaultProps:J.defaultProps},{defineMultiStyleConfig:$7,definePartsStyle:W7}=fe(a6.keys),Bi=Re("popper-bg"),H7=Re("popper-arrow-bg"),Qp=Re("popper-arrow-shadow-color"),U7={zIndex:10},G7={[Bi.variable]:"colors.white",bg:Bi.reference,[H7.variable]:Bi.reference,[Qp.variable]:"colors.gray.200",_dark:{[Bi.variable]:"colors.gray.700",[Qp.variable]:"colors.whiteAlpha.300"},width:"xs",border:"1px solid",borderColor:"inherit",borderRadius:"md",boxShadow:"sm",zIndex:"inherit",_focusVisible:{outline:0,boxShadow:"outline"}},K7={px:3,py:2,borderBottomWidth:"1px"},Z7={px:3,py:2},Y7={px:3,py:2,borderTopWidth:"1px"},X7={position:"absolute",borderRadius:"md",top:1,insetEnd:2,padding:2},Q7=W7({popper:U7,content:G7,header:K7,body:Z7,footer:Y7,closeButton:X7}),J7=$7({baseStyle:Q7}),{defineMultiStyleConfig:ex,definePartsStyle:ca}=fe(i6.keys),tx=e=>{const{colorScheme:t,theme:n,isIndeterminate:r,hasStripe:o}=e,a=O(Wp(),Wp("1rem","rgba(0,0,0,0.1)"))(e),i=O(`${t}.500`,`${t}.200`)(e),s=`linear-gradient(
    to right,
    transparent 0%,
    ${Qe(n,i)} 50%,
    transparent 100%
  )`;return{...!r&&o&&a,...r?{bgImage:s}:{bgColor:i}}},nx={lineHeight:"1",fontSize:"0.25em",fontWeight:"bold",color:"white"},rx=e=>({bg:O("gray.100","whiteAlpha.300")(e)}),ox=e=>({transitionProperty:"common",transitionDuration:"slow",...tx(e)}),ax=ca(e=>({label:nx,filledTrack:ox(e),track:rx(e)})),ix={xs:ca({track:{h:"1"}}),sm:ca({track:{h:"2"}}),md:ca({track:{h:"3"}}),lg:ca({track:{h:"4"}})},sx=ex({sizes:ix,baseStyle:ax,defaultProps:{size:"md",colorScheme:"blue"}}),{defineMultiStyleConfig:lx,definePartsStyle:bs}=fe(s6.keys),ux=e=>{var t;const n=(t=Je(Ms.baseStyle,e))==null?void 0:t.control;return{...n,borderRadius:"full",_checked:{...n==null?void 0:n._checked,_before:{content:'""',display:"inline-block",pos:"relative",w:"50%",h:"50%",borderRadius:"50%",bg:"currentColor"}}}},cx=bs(e=>{var t,n,r,o;return{label:(n=(t=Ms).baseStyle)==null?void 0:n.call(t,e).label,container:(o=(r=Ms).baseStyle)==null?void 0:o.call(r,e).container,control:ux(e)}}),dx={md:bs({control:{w:"4",h:"4"},label:{fontSize:"md"}}),lg:bs({control:{w:"5",h:"5"},label:{fontSize:"lg"}}),sm:bs({control:{width:"3",height:"3"},label:{fontSize:"sm"}})},fx=lx({baseStyle:cx,sizes:dx,defaultProps:{size:"md",colorScheme:"blue"}}),{defineMultiStyleConfig:px,definePartsStyle:mx}=fe(l6.keys),Oi=ae("select-bg"),Jp,hx={...(Jp=J.baseStyle)==null?void 0:Jp.field,appearance:"none",paddingBottom:"1px",lineHeight:"normal",bg:Oi.reference,[Oi.variable]:"colors.white",_dark:{[Oi.variable]:"colors.gray.700"},"> option, > optgroup":{bg:Oi.reference}},gx={width:"6",height:"100%",insetEnd:"2",position:"relative",color:"currentColor",fontSize:"xl",_disabled:{opacity:.5}},yx=mx({field:hx,icon:gx}),Di={paddingInlineEnd:"8"},em,tm,nm,rm,om,am,im,sm,bx={lg:{...(em=J.sizes)==null?void 0:em.lg,field:{...(tm=J.sizes)==null?void 0:tm.lg.field,...Di}},md:{...(nm=J.sizes)==null?void 0:nm.md,field:{...(rm=J.sizes)==null?void 0:rm.md.field,...Di}},sm:{...(om=J.sizes)==null?void 0:om.sm,field:{...(am=J.sizes)==null?void 0:am.sm.field,...Di}},xs:{...(im=J.sizes)==null?void 0:im.xs,field:{...(sm=J.sizes)==null?void 0:sm.xs.field,...Di},icon:{insetEnd:"1"}}},vx=px({baseStyle:yx,sizes:bx,variants:J.variants,defaultProps:J.defaultProps}),ju=ae("skeleton-start-color"),Bu=ae("skeleton-end-color"),wx={[ju.variable]:"colors.gray.100",[Bu.variable]:"colors.gray.400",_dark:{[ju.variable]:"colors.gray.800",[Bu.variable]:"colors.gray.600"},background:ju.reference,borderColor:Bu.reference,opacity:.7,borderRadius:"sm"},xx={baseStyle:wx},Ou=ae("skip-link-bg"),Sx={borderRadius:"md",fontWeight:"semibold",_focusVisible:{boxShadow:"outline",padding:"4",position:"fixed",top:"6",insetStart:"6",[Ou.variable]:"colors.white",_dark:{[Ou.variable]:"colors.gray.700"},bg:Ou.reference}},Cx={baseStyle:Sx},{defineMultiStyleConfig:kx,definePartsStyle:Bl}=fe(u6.keys),Wa=ae("slider-thumb-size"),Ha=ae("slider-track-size"),Dn=ae("slider-bg"),_x=e=>{const{orientation:t}=e;return{display:"inline-block",position:"relative",cursor:"pointer",_disabled:{opacity:.6,cursor:"default",pointerEvents:"none"},...wf({orientation:t,vertical:{h:"100%"},horizontal:{w:"100%"}})}},Tx=e=>({...wf({orientation:e.orientation,horizontal:{h:Ha.reference},vertical:{w:Ha.reference}}),overflow:"hidden",borderRadius:"sm",[Dn.variable]:"colors.gray.200",_dark:{[Dn.variable]:"colors.whiteAlpha.200"},_disabled:{[Dn.variable]:"colors.gray.300",_dark:{[Dn.variable]:"colors.whiteAlpha.300"}},bg:Dn.reference}),Fx=e=>{const{orientation:t}=e;return{...wf({orientation:t,vertical:{left:"50%",transform:"translateX(-50%)",_active:{transform:"translateX(-50%) scale(1.15)"}},horizontal:{top:"50%",transform:"translateY(-50%)",_active:{transform:"translateY(-50%) scale(1.15)"}}}),w:Wa.reference,h:Wa.reference,display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",outline:0,zIndex:1,borderRadius:"full",bg:"white",boxShadow:"base",border:"1px solid",borderColor:"transparent",transitionProperty:"transform",transitionDuration:"normal",_focusVisible:{boxShadow:"outline"},_disabled:{bg:"gray.300"}}},Ax=e=>{const{colorScheme:t}=e;return{width:"inherit",height:"inherit",[Dn.variable]:`colors.${t}.500`,_dark:{[Dn.variable]:`colors.${t}.200`},bg:Dn.reference}},Ex=Bl(e=>({container:_x(e),track:Tx(e),thumb:Fx(e),filledTrack:Ax(e)})),Px=Bl({container:{[Wa.variable]:"sizes.4",[Ha.variable]:"sizes.1"}}),Ix=Bl({container:{[Wa.variable]:"sizes.3.5",[Ha.variable]:"sizes.1"}}),qx=Bl({container:{[Wa.variable]:"sizes.2.5",[Ha.variable]:"sizes.0.5"}}),Lx={lg:Px,md:Ix,sm:qx},zx=kx({baseStyle:Ex,sizes:Lx,defaultProps:{size:"md",colorScheme:"blue"}}),wr=Re("spinner-size"),Rx={width:[wr.reference],height:[wr.reference]},Mx={xs:{[wr.variable]:"sizes.3"},sm:{[wr.variable]:"sizes.4"},md:{[wr.variable]:"sizes.6"},lg:{[wr.variable]:"sizes.8"},xl:{[wr.variable]:"sizes.12"}},Vx={baseStyle:Rx,sizes:Mx,defaultProps:{size:"md"}},{defineMultiStyleConfig:Nx,definePartsStyle:Vg}=fe(c6.keys),jx={fontWeight:"medium"},Bx={opacity:.8,marginBottom:"2"},Ox={verticalAlign:"baseline",fontWeight:"semibold"},Dx={marginEnd:1,w:"3.5",h:"3.5",verticalAlign:"middle"},$x=Vg({container:{},label:jx,helpText:Bx,number:Ox,icon:Dx}),Wx={md:Vg({label:{fontSize:"sm"},helpText:{fontSize:"sm"},number:{fontSize:"2xl"}})},Hx=Nx({baseStyle:$x,sizes:Wx,defaultProps:{size:"md"}}),{defineMultiStyleConfig:Ux,definePartsStyle:vs}=fe(d6.keys),va=Re("switch-track-width"),Ar=Re("switch-track-height"),Du=Re("switch-track-diff"),Gx=Sn.subtract(va,Ar),Dc=Re("switch-thumb-x"),Xo=Re("switch-bg"),Kx=e=>{const{colorScheme:t}=e;return{borderRadius:"full",p:"0.5",width:[va.reference],height:[Ar.reference],transitionProperty:"common",transitionDuration:"fast",[Xo.variable]:"colors.gray.300",_dark:{[Xo.variable]:"colors.whiteAlpha.400"},_focusVisible:{boxShadow:"outline"},_disabled:{opacity:.4,cursor:"not-allowed"},_checked:{[Xo.variable]:`colors.${t}.500`,_dark:{[Xo.variable]:`colors.${t}.200`}},bg:Xo.reference}},Zx={bg:"white",transitionProperty:"transform",transitionDuration:"normal",borderRadius:"inherit",width:[Ar.reference],height:[Ar.reference],_checked:{transform:`translateX(${Dc.reference})`}},Yx=vs(e=>({container:{[Du.variable]:Gx,[Dc.variable]:Du.reference,_rtl:{[Dc.variable]:Sn(Du).negate().toString()}},track:Kx(e),thumb:Zx})),Xx={sm:vs({container:{[va.variable]:"1.375rem",[Ar.variable]:"sizes.3"}}),md:vs({container:{[va.variable]:"1.875rem",[Ar.variable]:"sizes.4"}}),lg:vs({container:{[va.variable]:"2.875rem",[Ar.variable]:"sizes.6"}})},Qx=Ux({baseStyle:Yx,sizes:Xx,defaultProps:{size:"md",colorScheme:"blue"}}),{defineMultiStyleConfig:Jx,definePartsStyle:go}=fe(f6.keys),eS=go({table:{fontVariantNumeric:"lining-nums tabular-nums",borderCollapse:"collapse",width:"full"},th:{fontFamily:"heading",fontWeight:"bold",textTransform:"uppercase",letterSpacing:"wider",textAlign:"start"},td:{textAlign:"start"},caption:{mt:4,fontFamily:"heading",textAlign:"center",fontWeight:"medium"}}),Vs={"&[data-is-numeric=true]":{textAlign:"end"}},tS=go(e=>{const{colorScheme:t}=e;return{th:{color:O("gray.600","gray.400")(e),borderBottom:"1px",borderColor:O(`${t}.100`,`${t}.700`)(e),...Vs},td:{borderBottom:"1px",borderColor:O(`${t}.100`,`${t}.700`)(e),...Vs},caption:{color:O("gray.600","gray.100")(e)},tfoot:{tr:{"&:last-of-type":{th:{borderBottomWidth:0}}}}}}),nS=go(e=>{const{colorScheme:t}=e;return{th:{color:O("gray.600","gray.400")(e),borderBottom:"1px",borderColor:O(`${t}.100`,`${t}.700`)(e),...Vs},td:{borderBottom:"1px",borderColor:O(`${t}.100`,`${t}.700`)(e),...Vs},caption:{color:O("gray.600","gray.100")(e)},tbody:{tr:{"&:nth-of-type(odd)":{"th, td":{borderBottomWidth:"1px",borderColor:O(`${t}.100`,`${t}.700`)(e)},td:{background:O(`${t}.100`,`${t}.700`)(e)}}}},tfoot:{tr:{"&:last-of-type":{th:{borderBottomWidth:0}}}}}}),rS={simple:tS,striped:nS,unstyled:{}},oS={sm:go({th:{px:"4",py:"1",lineHeight:"4",fontSize:"xs"},td:{px:"4",py:"2",fontSize:"sm",lineHeight:"4"},caption:{px:"4",py:"2",fontSize:"xs"}}),md:go({th:{px:"6",py:"3",lineHeight:"4",fontSize:"xs"},td:{px:"6",py:"4",lineHeight:"5"},caption:{px:"6",py:"2",fontSize:"sm"}}),lg:go({th:{px:"8",py:"4",lineHeight:"5",fontSize:"sm"},td:{px:"8",py:"5",lineHeight:"6"},caption:{px:"6",py:"2",fontSize:"md"}})},aS=Jx({baseStyle:eS,variants:rS,sizes:oS,defaultProps:{variant:"simple",size:"md",colorScheme:"gray"}}),at=ae("tabs-color"),Wt=ae("tabs-bg"),$i=ae("tabs-border-color"),{defineMultiStyleConfig:iS,definePartsStyle:dn}=fe(p6.keys),sS=e=>{const{orientation:t}=e;return{display:t==="vertical"?"flex":"block"}},lS=e=>{const{isFitted:t}=e;return{flex:t?1:void 0,transitionProperty:"common",transitionDuration:"normal",_focusVisible:{zIndex:1,boxShadow:"outline"},_disabled:{cursor:"not-allowed",opacity:.4}}},uS=e=>{const{align:t="start",orientation:n}=e;return{justifyContent:{end:"flex-end",center:"center",start:"flex-start"}[t],flexDirection:n==="vertical"?"column":"row"}},cS={p:4},dS=dn(e=>({root:sS(e),tab:lS(e),tablist:uS(e),tabpanel:cS})),fS={sm:dn({tab:{py:1,px:4,fontSize:"sm"}}),md:dn({tab:{fontSize:"md",py:2,px:4}}),lg:dn({tab:{fontSize:"lg",py:3,px:4}})},pS=dn(e=>{const{colorScheme:t,orientation:n}=e,r=n==="vertical",o=n==="vertical"?"borderStart":"borderBottom",a=r?"marginStart":"marginBottom";return{tablist:{[o]:"2px solid",borderColor:"inherit"},tab:{[o]:"2px solid",borderColor:"transparent",[a]:"-2px",_selected:{[at.variable]:`colors.${t}.600`,_dark:{[at.variable]:`colors.${t}.300`},borderColor:"currentColor"},_active:{[Wt.variable]:"colors.gray.200",_dark:{[Wt.variable]:"colors.whiteAlpha.300"}},_disabled:{_active:{bg:"none"}},color:at.reference,bg:Wt.reference}}}),mS=dn(e=>{const{colorScheme:t}=e;return{tab:{borderTopRadius:"md",border:"1px solid",borderColor:"transparent",mb:"-1px",[$i.variable]:"transparent",_selected:{[at.variable]:`colors.${t}.600`,[$i.variable]:"colors.white",_dark:{[at.variable]:`colors.${t}.300`,[$i.variable]:"colors.gray.800"},borderColor:"inherit",borderBottomColor:$i.reference},color:at.reference},tablist:{mb:"-1px",borderBottom:"1px solid",borderColor:"inherit"}}}),hS=dn(e=>{const{colorScheme:t}=e;return{tab:{border:"1px solid",borderColor:"inherit",[Wt.variable]:"colors.gray.50",_dark:{[Wt.variable]:"colors.whiteAlpha.50"},mb:"-1px",_notLast:{marginEnd:"-1px"},_selected:{[Wt.variable]:"colors.white",[at.variable]:`colors.${t}.600`,_dark:{[Wt.variable]:"colors.gray.800",[at.variable]:`colors.${t}.300`},borderColor:"inherit",borderTopColor:"currentColor",borderBottomColor:"transparent"},color:at.reference,bg:Wt.reference},tablist:{mb:"-1px",borderBottom:"1px solid",borderColor:"inherit"}}}),gS=dn(e=>{const{colorScheme:t,theme:n}=e;return{tab:{borderRadius:"full",fontWeight:"semibold",color:"gray.600",_selected:{color:Qe(n,`${t}.700`),bg:Qe(n,`${t}.100`)}}}}),yS=dn(e=>{const{colorScheme:t}=e;return{tab:{borderRadius:"full",fontWeight:"semibold",[at.variable]:"colors.gray.600",_dark:{[at.variable]:"inherit"},_selected:{[at.variable]:"colors.white",[Wt.variable]:`colors.${t}.600`,_dark:{[at.variable]:"colors.gray.800",[Wt.variable]:`colors.${t}.300`}},color:at.reference,bg:Wt.reference}}}),bS=dn({}),vS={line:pS,enclosed:mS,"enclosed-colored":hS,"soft-rounded":gS,"solid-rounded":yS,unstyled:bS},wS=iS({baseStyle:dS,sizes:fS,variants:vS,defaultProps:{size:"md",variant:"line",colorScheme:"blue"}}),{defineMultiStyleConfig:xS,definePartsStyle:Er}=fe(m6.keys),SS={fontWeight:"medium",lineHeight:1.2,outline:0,borderRadius:"md",_focusVisible:{boxShadow:"outline"}},CS={lineHeight:1.2,overflow:"visible"},kS={fontSize:"lg",w:"5",h:"5",transitionProperty:"common",transitionDuration:"normal",borderRadius:"full",marginStart:"1.5",marginEnd:"-1",opacity:.5,_disabled:{opacity:.4},_focusVisible:{boxShadow:"outline",bg:"rgba(0, 0, 0, 0.14)"},_hover:{opacity:.8},_active:{opacity:1}},_S=Er({container:SS,label:CS,closeButton:kS}),TS={sm:Er({container:{minH:"5",minW:"5",fontSize:"xs",px:"2"},closeButton:{marginEnd:"-2px",marginStart:"0.35rem"}}),md:Er({container:{minH:"6",minW:"6",fontSize:"sm",px:"2"}}),lg:Er({container:{minH:"8",minW:"8",fontSize:"md",px:"3"}})},FS={subtle:Er(e=>{var t;return{container:(t=ga.variants)==null?void 0:t.subtle(e)}}),solid:Er(e=>{var t;return{container:(t=ga.variants)==null?void 0:t.solid(e)}}),outline:Er(e=>{var t;return{container:(t=ga.variants)==null?void 0:t.outline(e)}})},AS=xS({variants:FS,baseStyle:_S,sizes:TS,defaultProps:{size:"md",variant:"subtle",colorScheme:"gray"}}),lm,ES={...(lm=J.baseStyle)==null?void 0:lm.field,paddingY:"2",minHeight:"20",lineHeight:"short",verticalAlign:"top"},um,Vh,PS={outline:e=>{var n;var t;return(n=(t=J.variants)==null?void 0:t.outline(e).field)!=null?n:{}},flushed:e=>{var n;var t;return(n=(t=J.variants)==null?void 0:t.flushed(e).field)!=null?n:{}},filled:e=>{var n;var t;return(n=(t=J.variants)==null?void 0:t.filled(e).field)!=null?n:{}},unstyled:(Vh=(um=J.variants)==null?void 0:um.unstyled.field)!=null?Vh:{}},cm,dm,fm,pm,Nh,jh,Bh,Oh,IS={xs:(Nh=(cm=J.sizes)==null?void 0:cm.xs.field)!=null?Nh:{},sm:(jh=(dm=J.sizes)==null?void 0:dm.sm.field)!=null?jh:{},md:(Bh=(fm=J.sizes)==null?void 0:fm.md.field)!=null?Bh:{},lg:(Oh=(pm=J.sizes)==null?void 0:pm.lg.field)!=null?Oh:{}},qS={baseStyle:ES,sizes:IS,variants:PS,defaultProps:{size:"md",variant:"outline"}},Wi=Re("tooltip-bg"),$u=Re("tooltip-fg"),LS=Re("popper-arrow-bg"),zS={bg:Wi.reference,color:$u.reference,[Wi.variable]:"colors.gray.700",[$u.variable]:"colors.whiteAlpha.900",_dark:{[Wi.variable]:"colors.gray.300",[$u.variable]:"colors.gray.900"},[LS.variable]:Wi.reference,px:"2",py:"0.5",borderRadius:"sm",fontWeight:"medium",fontSize:"sm",boxShadow:"md",maxW:"xs",zIndex:"tooltip"},RS={baseStyle:zS},MS={Accordion:J6,Alert:sw,Avatar:bw,Badge:ga,Breadcrumb:Aw,Button:Vw,Checkbox:Ms,CloseButton:Qw,Code:n8,Container:o8,Divider:u8,Drawer:w8,Editable:F8,Form:L8,FormError:j8,FormLabel:O8,Heading:W8,Input:J,Kbd:e7,Link:n7,List:s7,Menu:y7,Modal:A7,NumberInput:N7,PinInput:D7,Popover:J7,Progress:sx,Radio:fx,Select:vx,Skeleton:xx,SkipLink:Cx,Slider:zx,Spinner:Vx,Stat:Hx,Switch:Qx,Table:aS,Tabs:wS,Tag:AS,Textarea:qS,Tooltip:RS,Card:Dw},VS={none:0,"1px":"1px solid","2px":"2px solid","4px":"4px solid","8px":"8px solid"},NS=VS,jS={base:"0em",sm:"30em",md:"48em",lg:"62em",xl:"80em","2xl":"96em"},BS=jS,OS={transparent:"transparent",current:"currentColor",black:"#000000",white:"#FFFFFF",whiteAlpha:{50:"rgba(255, 255, 255, 0.04)",100:"rgba(255, 255, 255, 0.06)",200:"rgba(255, 255, 255, 0.08)",300:"rgba(255, 255, 255, 0.16)",400:"rgba(255, 255, 255, 0.24)",500:"rgba(255, 255, 255, 0.36)",600:"rgba(255, 255, 255, 0.48)",700:"rgba(255, 255, 255, 0.64)",800:"rgba(255, 255, 255, 0.80)",900:"rgba(255, 255, 255, 0.92)"},blackAlpha:{50:"rgba(0, 0, 0, 0.04)",100:"rgba(0, 0, 0, 0.06)",200:"rgba(0, 0, 0, 0.08)",300:"rgba(0, 0, 0, 0.16)",400:"rgba(0, 0, 0, 0.24)",500:"rgba(0, 0, 0, 0.36)",600:"rgba(0, 0, 0, 0.48)",700:"rgba(0, 0, 0, 0.64)",800:"rgba(0, 0, 0, 0.80)",900:"rgba(0, 0, 0, 0.92)"},gray:{50:"#F7FAFC",100:"#EDF2F7",200:"#E2E8F0",300:"#CBD5E0",400:"#A0AEC0",500:"#718096",600:"#4A5568",700:"#2D3748",800:"#1A202C",900:"#171923"},red:{50:"#FFF5F5",100:"#FED7D7",200:"#FEB2B2",300:"#FC8181",400:"#F56565",500:"#E53E3E",600:"#C53030",700:"#9B2C2C",800:"#822727",900:"#63171B"},orange:{50:"#FFFAF0",100:"#FEEBC8",200:"#FBD38D",300:"#F6AD55",400:"#ED8936",500:"#DD6B20",600:"#C05621",700:"#9C4221",800:"#7B341E",900:"#652B19"},yellow:{50:"#FFFFF0",100:"#FEFCBF",200:"#FAF089",300:"#F6E05E",400:"#ECC94B",500:"#D69E2E",600:"#B7791F",700:"#975A16",800:"#744210",900:"#5F370E"},green:{50:"#F0FFF4",100:"#C6F6D5",200:"#9AE6B4",300:"#68D391",400:"#48BB78",500:"#38A169",600:"#2F855A",700:"#276749",800:"#22543D",900:"#1C4532"},teal:{50:"#E6FFFA",100:"#B2F5EA",200:"#81E6D9",300:"#4FD1C5",400:"#38B2AC",500:"#319795",600:"#2C7A7B",700:"#285E61",800:"#234E52",900:"#1D4044"},blue:{50:"#ebf8ff",100:"#bee3f8",200:"#90cdf4",300:"#63b3ed",400:"#4299e1",500:"#3182ce",600:"#2b6cb0",700:"#2c5282",800:"#2a4365",900:"#1A365D"},cyan:{50:"#EDFDFD",100:"#C4F1F9",200:"#9DECF9",300:"#76E4F7",400:"#0BC5EA",500:"#00B5D8",600:"#00A3C4",700:"#0987A0",800:"#086F83",900:"#065666"},purple:{50:"#FAF5FF",100:"#E9D8FD",200:"#D6BCFA",300:"#B794F4",400:"#9F7AEA",500:"#805AD5",600:"#6B46C1",700:"#553C9A",800:"#44337A",900:"#322659"},pink:{50:"#FFF5F7",100:"#FED7E2",200:"#FBB6CE",300:"#F687B3",400:"#ED64A6",500:"#D53F8C",600:"#B83280",700:"#97266D",800:"#702459",900:"#521B41"},linkedin:{50:"#E8F4F9",100:"#CFEDFB",200:"#9BDAF3",300:"#68C7EC",400:"#34B3E4",500:"#00A0DC",600:"#008CC9",700:"#0077B5",800:"#005E93",900:"#004471"},facebook:{50:"#E8F4F9",100:"#D9DEE9",200:"#B7C2DA",300:"#6482C0",400:"#4267B2",500:"#385898",600:"#314E89",700:"#29487D",800:"#223B67",900:"#1E355B"},messenger:{50:"#D0E6FF",100:"#B9DAFF",200:"#A2CDFF",300:"#7AB8FF",400:"#2E90FF",500:"#0078FF",600:"#0063D1",700:"#0052AC",800:"#003C7E",900:"#002C5C"},whatsapp:{50:"#dffeec",100:"#b9f5d0",200:"#90edb3",300:"#65e495",400:"#3cdd78",500:"#22c35e",600:"#179848",700:"#0c6c33",800:"#01421c",900:"#001803"},twitter:{50:"#E5F4FD",100:"#C8E9FB",200:"#A8DCFA",300:"#83CDF7",400:"#57BBF5",500:"#1DA1F2",600:"#1A94DA",700:"#1681BF",800:"#136B9E",900:"#0D4D71"},telegram:{50:"#E3F2F9",100:"#C5E4F3",200:"#A2D4EC",300:"#7AC1E4",400:"#47A9DA",500:"#0088CC",600:"#007AB8",700:"#006BA1",800:"#005885",900:"#003F5E"}},DS=OS,$S={none:"0",sm:"0.125rem",base:"0.25rem",md:"0.375rem",lg:"0.5rem",xl:"0.75rem","2xl":"1rem","3xl":"1.5rem",full:"9999px"},WS=$S,HS={xs:"0 0 0 1px rgba(0, 0, 0, 0.05)",sm:"0 1px 2px 0 rgba(0, 0, 0, 0.05)",base:"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",md:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",lg:"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",xl:"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)","2xl":"0 25px 50px -12px rgba(0, 0, 0, 0.25)",outline:"0 0 0 3px rgba(66, 153, 225, 0.6)",inner:"inset 0 2px 4px 0 rgba(0,0,0,0.06)",none:"none","dark-lg":"rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 15px 40px"},US=HS,GS={common:"background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",colors:"background-color, border-color, color, fill, stroke",dimensions:"width, height",position:"left, right, top, bottom",background:"background-color, background-image, background-position"},KS={"ease-in":"cubic-bezier(0.4, 0, 1, 1)","ease-out":"cubic-bezier(0, 0, 0.2, 1)","ease-in-out":"cubic-bezier(0.4, 0, 0.2, 1)"},ZS={"ultra-fast":"50ms",faster:"100ms",fast:"150ms",normal:"200ms",slow:"300ms",slower:"400ms","ultra-slow":"500ms"},YS={property:GS,easing:KS,duration:ZS},XS=YS,QS={hide:-1,auto:"auto",base:0,docked:10,dropdown:1e3,sticky:1100,banner:1200,overlay:1300,modal:1400,popover:1500,skipLink:1600,toast:1700,tooltip:1800},JS=QS,eC={none:0,sm:"4px",base:"8px",md:"12px",lg:"16px",xl:"24px","2xl":"40px","3xl":"64px"},tC=eC,nC={breakpoints:BS,zIndices:JS,radii:WS,blur:tC,colors:DS,...zg,sizes:Ig,shadows:US,space:Pg,borders:NS,transition:XS},rC={colors:{"chakra-body-text":{_light:"gray.800",_dark:"whiteAlpha.900"},"chakra-body-bg":{_light:"white",_dark:"gray.800"},"chakra-border-color":{_light:"gray.200",_dark:"whiteAlpha.300"},"chakra-subtle-bg":{_light:"gray.100",_dark:"gray.700"},"chakra-placeholder-color":{_light:"gray.500",_dark:"whiteAlpha.400"}}},oC={global:{body:{fontFamily:"body",color:"chakra-body-text",bg:"chakra-body-bg",transitionProperty:"background-color",transitionDuration:"normal",lineHeight:"base"},"*::placeholder":{color:"chakra-placeholder-color"},"*, *::before, &::after":{borderColor:"chakra-border-color",wordWrap:"break-word"}}},aC="ltr",iC={useSystemColorMode:!1,initialColorMode:"light",cssVarPrefix:"chakra"},sC={semanticTokens:rC,direction:aC,...nC,components:MS,styles:oC,config:iC},lC=typeof Element<"u",uC=typeof Map=="function",cC=typeof Set=="function",dC=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function ws(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var n,r,o;if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(!ws(e[r],t[r]))return!1;return!0}var a;if(uC&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(a=e.entries();!(r=a.next()).done;)if(!t.has(r.value[0]))return!1;for(a=e.entries();!(r=a.next()).done;)if(!ws(r.value[1],t.get(r.value[0])))return!1;return!0}if(cC&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(a=e.entries();!(r=a.next()).done;)if(!t.has(r.value[0]))return!1;return!0}if(dC&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(e[r]!==t[r])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();if(o=Object.keys(e),n=o.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!Object.prototype.hasOwnProperty.call(t,o[r]))return!1;if(lC&&e instanceof Element)return!1;for(r=n;r--!==0;)if(!((o[r]==="_owner"||o[r]==="__v"||o[r]==="__o")&&e.$$typeof)&&!ws(e[o[r]],t[o[r]]))return!1;return!0}return e!==e&&t!==t}var fC=function(t,n){try{return ws(t,n)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}};function Ng(){const e=_.exports.useContext(Da);if(!e)throw Error("useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`");return e}function pC(){const e=uf(),t=Ng();return{...e,theme:t}}function mC(e,t,n){var o,a;if(t==null)return t;const r=i=>{var s,l;return(l=(s=e.__breakpoints)==null?void 0:s.asArray)==null?void 0:l[i]};return(a=(o=r(t))!=null?o:r(n))!=null?a:n}function hC(e,t,n){var o,a;if(t==null)return t;const r=i=>{var s,l;return(l=(s=e.__cssMap)==null?void 0:s[i])==null?void 0:l.value};return(a=(o=r(t))!=null?o:r(n))!=null?a:n}function gC(e,t,n){const r=Array.isArray(t)?t:[t],o=Array.isArray(n)?n:[n];return a=>{const i=o.filter(Boolean),s=r.map((l,u)=>{var d,f;if(e==="breakpoints")return mC(a,l,(d=i[u])!=null?d:l);const c=`${e}.${l}`;return hC(a,c,(f=i[u])!=null?f:l)});return Array.isArray(t)?s:s[0]}}function yC(e){const{cssVarsRoot:t,theme:n,children:r}=e,o=_.exports.useMemo(()=>k4(n),[n]);return B(P9,{theme:o,children:[w(bC,{root:t}),r]})}function bC({root:e=":host, :root"}){const t=[e,"[data-theme]"].join(",");return w(Nl,{styles:n=>({[t]:n.__cssVars})})}V9({name:"StylesContext",errorMessage:"useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` "});function vC(){const{colorMode:e}=uf();return w(Nl,{styles:t=>{const n=kg(t,"styles.global"),r=Fg(n,{theme:t,colorMode:e});return r?ag(r)(t):void 0}})}var wC=new Set([..._4,"textStyle","layerStyle","apply","noOfLines","focusBorderColor","errorBorderColor","as","__css","css","sx"]),xC=new Set(["htmlWidth","htmlHeight","htmlSize"]);function SC(e){return xC.has(e)||!wC.has(e)}var CC=({baseStyle:e})=>t=>{const{theme:n,css:r,__css:o,sx:a,...i}=t,s=_g(i,(d,f)=>F4(f)),l=Fg(e,t),u=Object.assign({},o,l,Tg(s),a),c=ag(u)(t.theme);return r?[c,r]:c};function Wu(e,t){const{baseStyle:n,...r}=t!=null?t:{};r.shouldForwardProp||(r.shouldForwardProp=SC);const o=CC({baseStyle:n}),a=Nc(e,r)(o);return q.forwardRef(function(l,u){const{colorMode:c,forced:d}=uf();return q.createElement(a,{ref:u,"data-theme":d?c:void 0,...l})})}function M(e){return _.exports.forwardRef(e)}function jg(e,t={}){var c;const{styleConfig:n,...r}=t,{theme:o,colorMode:a}=pC(),i=e?kg(o,`components.${e}`):void 0,s=n||i,l=ln({theme:o,colorMode:a},(c=s==null?void 0:s.defaultProps)!=null?c:{},Tg(z9(r,["children"]))),u=_.exports.useRef({});if(s){const f=V4(s)(l);fC(u.current,f)||(u.current=f)}return u.current}function dt(e,t={}){return jg(e,t)}function ir(e,t={}){return jg(e,t)}function kC(){const e=new Map;return new Proxy(Wu,{apply(t,n,r){return Wu(...r)},get(t,n){return e.has(n)||e.set(n,Wu(n)),e.get(n)}})}var V=kC();function _C(e,t){return`${e} returned \`undefined\`. Seems you forgot to wrap component within ${t}`}function Rt(e={}){const{name:t,strict:n=!0,hookName:r="useContext",providerName:o="Provider",errorMessage:a}=e,i=_.exports.createContext(void 0);i.displayName=t;function s(){var l;const u=_.exports.useContext(i);if(!u&&n){const c=new Error(a!=null?a:_C(r,o));throw c.name="ContextError",(l=Error.captureStackTrace)==null||l.call(Error,c,s),c}return u}return[i.Provider,s,i]}function TC(e,t){if(e!=null){if(typeof e=="function"){e(t);return}try{e.current=t}catch{throw new Error(`Cannot assign value '${t}' to ref '${e}'`)}}}function $c(...e){return t=>{e.forEach(n=>{TC(n,t)})}}function FC(...e){return _.exports.useMemo(()=>$c(...e),e)}var _e=(...e)=>e.filter(Boolean).join(" "),mm={path:B("g",{stroke:"currentColor",strokeWidth:"1.5",children:[w("path",{strokeLinecap:"round",fill:"none",d:"M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"}),w("path",{fill:"currentColor",strokeLinecap:"round",d:"M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"}),w("circle",{fill:"none",strokeMiterlimit:"10",cx:"12",cy:"12",r:"11.25"})]}),viewBox:"0 0 24 24"},Zt=M((e,t)=>{const{as:n,viewBox:r,color:o="currentColor",focusable:a=!1,children:i,className:s,__css:l,...u}=e,c=_e("chakra-icon",s),d=dt("Icon",e),f={w:"1em",h:"1em",display:"inline-block",lineHeight:"1em",flexShrink:0,color:o,...l,...d},p={ref:t,focusable:a,className:c,__css:f},b=r!=null?r:mm.viewBox;if(n&&typeof n!="string")return q.createElement(V.svg,{as:n,...p,...u});const v=i!=null?i:mm.path;return q.createElement(V.svg,{verticalAlign:"middle",viewBox:b,...p,...u},v)});Zt.displayName="Icon";function j(e){const{viewBox:t="0 0 24 24",d:n,displayName:r,defaultProps:o={}}=e,a=_.exports.Children.toArray(e.path),i=M((s,l)=>w(Zt,{ref:l,viewBox:t,...o,...s,children:a.length?a:w("path",{fill:"currentColor",d:n})}));return i.displayName=r,i}function AC(e,t=[]){const n=_.exports.useRef(e);return _.exports.useEffect(()=>{n.current=e}),_.exports.useCallback((...r)=>{var o;return(o=n.current)==null?void 0:o.call(n,...r)},t)}const kf=_.exports.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),Ol=_.exports.createContext({});function EC(){return _.exports.useContext(Ol).visualElement}const No=_.exports.createContext(null),Nr=typeof document<"u",Ns=Nr?_.exports.useLayoutEffect:_.exports.useEffect,Bg=_.exports.createContext({strict:!1});function PC(e,t,n,r){const o=EC(),a=_.exports.useContext(Bg),i=_.exports.useContext(No),s=_.exports.useContext(kf).reducedMotion,l=_.exports.useRef();r=r||a.renderer,!l.current&&r&&(l.current=r(e,{visualState:t,parent:o,props:n,presenceId:i?i.id:void 0,blockInitialAnimation:i?i.initial===!1:!1,reducedMotionConfig:s}));const u=l.current;return Ns(()=>{u&&u.render()}),_.exports.useEffect(()=>{u&&u.animationState&&u.animationState.animateChanges()}),Ns(()=>()=>u&&u.notify("Unmount"),[]),u}function Kr(e){return typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function IC(e,t,n){return _.exports.useCallback(r=>{r&&e.mount&&e.mount(r),t&&(r?t.mount(r):t.unmount()),n&&(typeof n=="function"?n(r):Kr(n)&&(n.current=r))},[t])}function Ua(e){return typeof e=="string"||Array.isArray(e)}function Dl(e){return typeof e=="object"&&typeof e.start=="function"}const qC=["initial","animate","exit","whileHover","whileDrag","whileTap","whileFocus","whileInView"];function $l(e){return Dl(e.animate)||qC.some(t=>Ua(e[t]))}function Og(e){return Boolean($l(e)||e.variants)}function LC(e,t){if($l(e)){const{initial:n,animate:r}=e;return{initial:n===!1||Ua(n)?n:void 0,animate:Ua(r)?r:void 0}}return e.inherit!==!1?t:{}}function zC(e){const{initial:t,animate:n}=LC(e,_.exports.useContext(Ol));return _.exports.useMemo(()=>({initial:t,animate:n}),[hm(t),hm(n)])}function hm(e){return Array.isArray(e)?e.join(" "):e}const vn=e=>({isEnabled:t=>e.some(n=>!!t[n])}),Ga={measureLayout:vn(["layout","layoutId","drag"]),animation:vn(["animate","exit","variants","whileHover","whileTap","whileFocus","whileDrag","whileInView"]),exit:vn(["exit"]),drag:vn(["drag","dragControls"]),focus:vn(["whileFocus"]),hover:vn(["whileHover","onHoverStart","onHoverEnd"]),tap:vn(["whileTap","onTap","onTapStart","onTapCancel"]),pan:vn(["onPan","onPanStart","onPanSessionStart","onPanEnd"]),inView:vn(["whileInView","onViewportEnter","onViewportLeave"])};function RC(e){for(const t in e)t==="projectionNodeConstructor"?Ga.projectionNodeConstructor=e[t]:Ga[t].Component=e[t]}function Wl(e){const t=_.exports.useRef(null);return t.current===null&&(t.current=e()),t.current}const wa={hasAnimatedSinceResize:!0,hasEverUpdated:!1};let MC=1;function VC(){return Wl(()=>{if(wa.hasEverUpdated)return MC++})}const _f=_.exports.createContext({});class NC extends q.Component{getSnapshotBeforeUpdate(){const{visualElement:t,props:n}=this.props;return t&&t.setProps(n),null}componentDidUpdate(){}render(){return this.props.children}}const Dg=_.exports.createContext({}),jC=Symbol.for("motionComponentSymbol");function BC({preloadedFeatures:e,createVisualElement:t,projectionNodeConstructor:n,useRender:r,useVisualState:o,Component:a}){e&&RC(e);function i(l,u){const c={..._.exports.useContext(kf),...l,layoutId:OC(l)},{isStatic:d}=c;let f=null;const p=zC(l),b=d?void 0:VC(),v=o(l,d);if(!d&&Nr){p.visualElement=PC(a,v,c,t);const k=_.exports.useContext(Bg).strict,g=_.exports.useContext(Dg);p.visualElement&&(f=p.visualElement.loadFeatures(c,k,e,b,n||Ga.projectionNodeConstructor,g))}return B(NC,{visualElement:p.visualElement,props:c,children:[f,w(Ol.Provider,{value:p,children:r(a,l,b,IC(v,p.visualElement,u),v,d,p.visualElement)})]})}const s=_.exports.forwardRef(i);return s[jC]=a,s}function OC({layoutId:e}){const t=_.exports.useContext(_f).id;return t&&e!==void 0?t+"-"+e:e}function DC(e){function t(r,o={}){return BC(e(r,o))}if(typeof Proxy>"u")return t;const n=new Map;return new Proxy(t,{get:(r,o)=>(n.has(o)||n.set(o,t(o)),n.get(o))})}const $C=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","text","tspan","use","view"];function Tf(e){return typeof e!="string"||e.includes("-")?!1:!!($C.indexOf(e)>-1||/[A-Z]/.test(e))}const js={};function WC(e){Object.assign(js,e)}const Bs=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],jo=new Set(Bs);function $g(e,{layout:t,layoutId:n}){return jo.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!js[e]||e==="opacity")}const hn=e=>!!(e!=null&&e.getVelocity),HC={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},UC=(e,t)=>Bs.indexOf(e)-Bs.indexOf(t);function GC({transform:e,transformKeys:t},{enableHardwareAcceleration:n=!0,allowTransformNone:r=!0},o,a){let i="";t.sort(UC);for(const s of t)i+=`${HC[s]||s}(${e[s]}) `;return n&&!e.z&&(i+="translateZ(0)"),i=i.trim(),a?i=a(e,o?"":i):r&&o&&(i="none"),i}function Wg(e){return e.startsWith("--")}const KC=(e,t)=>t&&typeof e=="number"?t.transform(e):e,Hg=(e,t)=>n=>Math.max(Math.min(n,t),e),xa=e=>e%1?Number(e.toFixed(5)):e,Ka=/(-)?([\d]*\.?[\d])+/g,Wc=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,ZC=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function bi(e){return typeof e=="string"}const jr={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Sa=Object.assign(Object.assign({},jr),{transform:Hg(0,1)}),Hi=Object.assign(Object.assign({},jr),{default:1}),vi=e=>({test:t=>bi(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Nn=vi("deg"),fn=vi("%"),$=vi("px"),YC=vi("vh"),XC=vi("vw"),gm=Object.assign(Object.assign({},fn),{parse:e=>fn.parse(e)/100,transform:e=>fn.transform(e*100)}),Ff=(e,t)=>n=>Boolean(bi(n)&&ZC.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),Ug=(e,t,n)=>r=>{if(!bi(r))return r;const[o,a,i,s]=r.match(Ka);return{[e]:parseFloat(o),[t]:parseFloat(a),[n]:parseFloat(i),alpha:s!==void 0?parseFloat(s):1}},Zr={test:Ff("hsl","hue"),parse:Ug("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+fn.transform(xa(t))+", "+fn.transform(xa(n))+", "+xa(Sa.transform(r))+")"},QC=Hg(0,255),Hu=Object.assign(Object.assign({},jr),{transform:e=>Math.round(QC(e))}),Cr={test:Ff("rgb","red"),parse:Ug("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+Hu.transform(e)+", "+Hu.transform(t)+", "+Hu.transform(n)+", "+xa(Sa.transform(r))+")"};function JC(e){let t="",n="",r="",o="";return e.length>5?(t=e.substr(1,2),n=e.substr(3,2),r=e.substr(5,2),o=e.substr(7,2)):(t=e.substr(1,1),n=e.substr(2,1),r=e.substr(3,1),o=e.substr(4,1),t+=t,n+=n,r+=r,o+=o),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:o?parseInt(o,16)/255:1}}const Hc={test:Ff("#"),parse:JC,transform:Cr.transform},Ye={test:e=>Cr.test(e)||Hc.test(e)||Zr.test(e),parse:e=>Cr.test(e)?Cr.parse(e):Zr.test(e)?Zr.parse(e):Hc.parse(e),transform:e=>bi(e)?e:e.hasOwnProperty("red")?Cr.transform(e):Zr.transform(e)},Gg="${c}",Kg="${n}";function ek(e){var t,n,r,o;return isNaN(e)&&bi(e)&&((n=(t=e.match(Ka))===null||t===void 0?void 0:t.length)!==null&&n!==void 0?n:0)+((o=(r=e.match(Wc))===null||r===void 0?void 0:r.length)!==null&&o!==void 0?o:0)>0}function Zg(e){typeof e=="number"&&(e=`${e}`);const t=[];let n=0;const r=e.match(Wc);r&&(n=r.length,e=e.replace(Wc,Gg),t.push(...r.map(Ye.parse)));const o=e.match(Ka);return o&&(e=e.replace(Ka,Kg),t.push(...o.map(jr.parse))),{values:t,numColors:n,tokenised:e}}function Yg(e){return Zg(e).values}function Xg(e){const{values:t,numColors:n,tokenised:r}=Zg(e),o=t.length;return a=>{let i=r;for(let s=0;s<o;s++)i=i.replace(s<n?Gg:Kg,s<n?Ye.transform(a[s]):xa(a[s]));return i}}const tk=e=>typeof e=="number"?0:e;function nk(e){const t=Yg(e);return Xg(e)(t.map(tk))}const An={test:ek,parse:Yg,createTransformer:Xg,getAnimatableNone:nk},rk=new Set(["brightness","contrast","saturate","opacity"]);function ok(e){let[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(Ka)||[];if(!r)return e;const o=n.replace(r,"");let a=rk.has(t)?1:0;return r!==n&&(a*=100),t+"("+a+o+")"}const ak=/([a-z-]*)\(.*?\)/g,Uc=Object.assign(Object.assign({},An),{getAnimatableNone:e=>{const t=e.match(ak);return t?t.map(ok).join(" "):e}}),ym={...jr,transform:Math.round},Qg={borderWidth:$,borderTopWidth:$,borderRightWidth:$,borderBottomWidth:$,borderLeftWidth:$,borderRadius:$,radius:$,borderTopLeftRadius:$,borderTopRightRadius:$,borderBottomRightRadius:$,borderBottomLeftRadius:$,width:$,maxWidth:$,height:$,maxHeight:$,size:$,top:$,right:$,bottom:$,left:$,padding:$,paddingTop:$,paddingRight:$,paddingBottom:$,paddingLeft:$,margin:$,marginTop:$,marginRight:$,marginBottom:$,marginLeft:$,rotate:Nn,rotateX:Nn,rotateY:Nn,rotateZ:Nn,scale:Hi,scaleX:Hi,scaleY:Hi,scaleZ:Hi,skew:Nn,skewX:Nn,skewY:Nn,distance:$,translateX:$,translateY:$,translateZ:$,x:$,y:$,z:$,perspective:$,transformPerspective:$,opacity:Sa,originX:gm,originY:gm,originZ:$,zIndex:ym,fillOpacity:Sa,strokeOpacity:Sa,numOctaves:ym};function Af(e,t,n,r){const{style:o,vars:a,transform:i,transformKeys:s,transformOrigin:l}=e;s.length=0;let u=!1,c=!1,d=!0;for(const f in t){const p=t[f];if(Wg(f)){a[f]=p;continue}const b=Qg[f],v=KC(p,b);if(jo.has(f)){if(u=!0,i[f]=v,s.push(f),!d)continue;p!==(b.default||0)&&(d=!1)}else f.startsWith("origin")?(c=!0,l[f]=v):o[f]=v}if(t.transform||(u||r?o.transform=GC(e,n,d,r):o.transform&&(o.transform="none")),c){const{originX:f="50%",originY:p="50%",originZ:b=0}=l;o.transformOrigin=`${f} ${p} ${b}`}}const Ef=()=>({style:{},transform:{},transformKeys:[],transformOrigin:{},vars:{}});function Jg(e,t,n){for(const r in t)!hn(t[r])&&!$g(r,n)&&(e[r]=t[r])}function ik({transformTemplate:e},t,n){return _.exports.useMemo(()=>{const r=Ef();return Af(r,t,{enableHardwareAcceleration:!n},e),Object.assign({},r.vars,r.style)},[t])}function sk(e,t,n){const r=e.style||{},o={};return Jg(o,r,e),Object.assign(o,ik(e,t,n)),e.transformValues?e.transformValues(o):o}function lk(e,t,n){const r={},o=sk(e,t,n);return e.drag&&e.dragListener!==!1&&(r.draggable=!1,o.userSelect=o.WebkitUserSelect=o.WebkitTouchCallout="none",o.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),r.style=o,r}const uk=["animate","exit","variants","whileHover","whileTap","whileFocus","whileDrag","whileInView"],ck=["whileTap","onTap","onTapStart","onTapCancel"],dk=["onPan","onPanStart","onPanSessionStart","onPanEnd"],fk=["whileInView","onViewportEnter","onViewportLeave","viewport"],pk=new Set(["initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","layout","layoutId","layoutDependency","onLayoutAnimationStart","onLayoutAnimationComplete","onLayoutMeasure","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","drag","dragControls","dragListener","dragConstraints","dragDirectionLock","dragSnapToOrigin","_dragX","_dragY","dragElastic","dragMomentum","dragPropagation","dragTransition","onHoverStart","onHoverEnd","layoutScroll",...fk,...ck,...uk,...dk]);function Os(e){return pk.has(e)}let ey=e=>!Os(e);function mk(e){!e||(ey=t=>t.startsWith("on")?!Os(t):e(t))}try{mk(require("@emotion/is-prop-valid").default)}catch{}function hk(e,t,n){const r={};for(const o in e)(ey(o)||n===!0&&Os(o)||!t&&!Os(o)||e.draggable&&o.startsWith("onDrag"))&&(r[o]=e[o]);return r}function bm(e,t,n){return typeof e=="string"?e:$.transform(t+n*e)}function gk(e,t,n){const r=bm(t,e.x,e.width),o=bm(n,e.y,e.height);return`${r} ${o}`}const yk={offset:"stroke-dashoffset",array:"stroke-dasharray"},bk={offset:"strokeDashoffset",array:"strokeDasharray"};function vk(e,t,n=1,r=0,o=!0){e.pathLength=1;const a=o?yk:bk;e[a.offset]=$.transform(-r);const i=$.transform(t),s=$.transform(n);e[a.array]=`${i} ${s}`}function Pf(e,{attrX:t,attrY:n,originX:r,originY:o,pathLength:a,pathSpacing:i=1,pathOffset:s=0,...l},u,c){Af(e,l,u,c),e.attrs=e.style,e.style={};const{attrs:d,style:f,dimensions:p}=e;d.transform&&(p&&(f.transform=d.transform),delete d.transform),p&&(r!==void 0||o!==void 0||f.transform)&&(f.transformOrigin=gk(p,r!==void 0?r:.5,o!==void 0?o:.5)),t!==void 0&&(d.x=t),n!==void 0&&(d.y=n),a!==void 0&&vk(d,a,i,s,!1)}const ty=()=>({...Ef(),attrs:{}});function wk(e,t){const n=_.exports.useMemo(()=>{const r=ty();return Pf(r,t,{enableHardwareAcceleration:!1},e.transformTemplate),{...r.attrs,style:{...r.style}}},[t]);if(e.style){const r={};Jg(r,e.style,e),n.style={...r,...n.style}}return n}function xk(e=!1){return(n,r,o,a,{latestValues:i},s)=>{const u=(Tf(n)?wk:lk)(r,i,s),d={...hk(r,typeof n=="string",e),...u,ref:a};return o&&(d["data-projection-id"]=o),_.exports.createElement(n,d)}}const ny=e=>e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();function ry(e,{style:t,vars:n},r,o){Object.assign(e.style,t,o&&o.getProjectionStyles(r));for(const a in n)e.style.setProperty(a,n[a])}const oy=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength"]);function ay(e,t,n,r){ry(e,t,void 0,r);for(const o in t.attrs)e.setAttribute(oy.has(o)?o:ny(o),t.attrs[o])}function If(e){const{style:t}=e,n={};for(const r in t)(hn(t[r])||$g(r,e))&&(n[r]=t[r]);return n}function iy(e){const t=If(e);for(const n in e)if(hn(e[n])){const r=n==="x"||n==="y"?"attr"+n.toUpperCase():n;t[r]=e[n]}return t}function qf(e,t,n,r={},o={}){return typeof t=="function"&&(t=t(n!==void 0?n:e.custom,r,o)),typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"&&(t=t(n!==void 0?n:e.custom,r,o)),t}const Za=e=>Array.isArray(e),Sk=e=>Boolean(e&&typeof e=="object"&&e.mix&&e.toValue),sy=e=>Za(e)?e[e.length-1]||0:e;function xs(e){const t=hn(e)?e.get():e;return Sk(t)?t.toValue():t}function Ck({scrapeMotionValuesFromProps:e,createRenderState:t,onMount:n},r,o,a){const i={latestValues:kk(r,o,a,e),renderState:t()};return n&&(i.mount=s=>n(r,s,i)),i}const ly=e=>(t,n)=>{const r=_.exports.useContext(Ol),o=_.exports.useContext(No),a=()=>Ck(e,t,r,o);return n?a():Wl(a)};function kk(e,t,n,r){const o={},a=r(e);for(const f in a)o[f]=xs(a[f]);let{initial:i,animate:s}=e;const l=$l(e),u=Og(e);t&&u&&!l&&e.inherit!==!1&&(i===void 0&&(i=t.initial),s===void 0&&(s=t.animate));let c=n?n.initial===!1:!1;c=c||i===!1;const d=c?s:i;return d&&typeof d!="boolean"&&!Dl(d)&&(Array.isArray(d)?d:[d]).forEach(p=>{const b=qf(e,p);if(!b)return;const{transitionEnd:v,transition:k,...g}=b;for(const m in g){let h=g[m];if(Array.isArray(h)){const x=c?h.length-1:0;h=h[x]}h!==null&&(o[m]=h)}for(const m in v)o[m]=v[m]}),o}const _k={useVisualState:ly({scrapeMotionValuesFromProps:iy,createRenderState:ty,onMount:(e,t,{renderState:n,latestValues:r})=>{try{n.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}Pf(n,r,{enableHardwareAcceleration:!1},e.transformTemplate),ay(t,n)}})},Tk={useVisualState:ly({scrapeMotionValuesFromProps:If,createRenderState:Ef})};function Fk(e,{forwardMotionProps:t=!1},n,r,o){return{...Tf(e)?_k:Tk,preloadedFeatures:n,useRender:xk(t),createVisualElement:r,projectionNodeConstructor:o,Component:e}}var se;(function(e){e.Animate="animate",e.Hover="whileHover",e.Tap="whileTap",e.Drag="whileDrag",e.Focus="whileFocus",e.InView="whileInView",e.Exit="exit"})(se||(se={}));function Hl(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}function Gc(e,t,n,r){_.exports.useEffect(()=>{const o=e.current;if(n&&o)return Hl(o,t,n,r)},[e,t,n,r])}function Ak({whileFocus:e,visualElement:t}){const{animationState:n}=t,r=()=>{n&&n.setActive(se.Focus,!0)},o=()=>{n&&n.setActive(se.Focus,!1)};Gc(t,"focus",e?r:void 0),Gc(t,"blur",e?o:void 0)}function uy(e){return typeof PointerEvent<"u"&&e instanceof PointerEvent?e.pointerType==="mouse":e instanceof MouseEvent}function cy(e){return!!e.touches}function Ek(e){return t=>{const n=t instanceof MouseEvent;(!n||n&&t.button===0)&&e(t)}}const Pk={pageX:0,pageY:0};function Ik(e,t="page"){const r=e.touches[0]||e.changedTouches[0]||Pk;return{x:r[t+"X"],y:r[t+"Y"]}}function qk(e,t="page"){return{x:e[t+"X"],y:e[t+"Y"]}}function Lf(e,t="page"){return{point:cy(e)?Ik(e,t):qk(e,t)}}const dy=(e,t=!1)=>{const n=r=>e(r,Lf(r));return t?Ek(n):n},Lk=()=>Nr&&window.onpointerdown===null,zk=()=>Nr&&window.ontouchstart===null,Rk=()=>Nr&&window.onmousedown===null,Mk={pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointercancel:"mousecancel",pointerover:"mouseover",pointerout:"mouseout",pointerenter:"mouseenter",pointerleave:"mouseleave"},Vk={pointerdown:"touchstart",pointermove:"touchmove",pointerup:"touchend",pointercancel:"touchcancel"};function fy(e){return Lk()?e:zk()?Vk[e]:Rk()?Mk[e]:e}function yo(e,t,n,r){return Hl(e,fy(t),dy(n,t==="pointerdown"),r)}function Ds(e,t,n,r){return Gc(e,fy(t),n&&dy(n,t==="pointerdown"),r)}function py(e){let t=null;return()=>{const n=()=>{t=null};return t===null?(t=e,n):!1}}const vm=py("dragHorizontal"),wm=py("dragVertical");function my(e){let t=!1;if(e==="y")t=wm();else if(e==="x")t=vm();else{const n=vm(),r=wm();n&&r?t=()=>{n(),r()}:(n&&n(),r&&r())}return t}function hy(){const e=my(!0);return e?(e(),!1):!0}function xm(e,t,n){return(r,o)=>{!uy(r)||hy()||(e.animationState&&e.animationState.setActive(se.Hover,t),n&&n(r,o))}}function Nk({onHoverStart:e,onHoverEnd:t,whileHover:n,visualElement:r}){Ds(r,"pointerenter",e||n?xm(r,!0,e):void 0,{passive:!e}),Ds(r,"pointerleave",t||n?xm(r,!1,t):void 0,{passive:!t})}const gy=(e,t)=>t?e===t?!0:gy(e,t.parentElement):!1;function zf(e){return _.exports.useEffect(()=>()=>e(),[])}const jk=(e,t)=>n=>t(e(n)),Ul=(...e)=>e.reduce(jk);function Bk({onTap:e,onTapStart:t,onTapCancel:n,whileTap:r,visualElement:o}){const a=e||t||n||r,i=_.exports.useRef(!1),s=_.exports.useRef(null),l={passive:!(t||e||n||p)};function u(){s.current&&s.current(),s.current=null}function c(){return u(),i.current=!1,o.animationState&&o.animationState.setActive(se.Tap,!1),!hy()}function d(b,v){!c()||(gy(o.current,b.target)?e&&e(b,v):n&&n(b,v))}function f(b,v){!c()||n&&n(b,v)}function p(b,v){u(),!i.current&&(i.current=!0,s.current=Ul(yo(window,"pointerup",d,l),yo(window,"pointercancel",f,l)),o.animationState&&o.animationState.setActive(se.Tap,!0),t&&t(b,v))}Ds(o,"pointerdown",a?p:void 0,l),zf(u)}const Ok="production",yy=typeof process>"u"||process.env===void 0?Ok:"production",Sm=new Set;function by(e,t,n){e||Sm.has(t)||(console.warn(t),n&&console.warn(n),Sm.add(t))}const Kc=new WeakMap,Uu=new WeakMap,Dk=e=>{const t=Kc.get(e.target);t&&t(e)},$k=e=>{e.forEach(Dk)};function Wk({root:e,...t}){const n=e||document;Uu.has(n)||Uu.set(n,{});const r=Uu.get(n),o=JSON.stringify(t);return r[o]||(r[o]=new IntersectionObserver($k,{root:e,...t})),r[o]}function Hk(e,t,n){const r=Wk(t);return Kc.set(e,n),r.observe(e),()=>{Kc.delete(e),r.unobserve(e)}}function Uk({visualElement:e,whileInView:t,onViewportEnter:n,onViewportLeave:r,viewport:o={}}){const a=_.exports.useRef({hasEnteredView:!1,isInView:!1});let i=Boolean(t||n||r);o.once&&a.current.hasEnteredView&&(i=!1),(typeof IntersectionObserver>"u"?Zk:Kk)(i,a.current,e,o)}const Gk={some:0,all:1};function Kk(e,t,n,{root:r,margin:o,amount:a="some",once:i}){_.exports.useEffect(()=>{if(!e||!n.current)return;const s={root:r==null?void 0:r.current,rootMargin:o,threshold:typeof a=="number"?a:Gk[a]},l=u=>{const{isIntersecting:c}=u;if(t.isInView===c||(t.isInView=c,i&&!c&&t.hasEnteredView))return;c&&(t.hasEnteredView=!0),n.animationState&&n.animationState.setActive(se.InView,c);const d=n.getProps(),f=c?d.onViewportEnter:d.onViewportLeave;f&&f(u)};return Hk(n.current,s,l)},[e,r,o,a])}function Zk(e,t,n,{fallback:r=!0}){_.exports.useEffect(()=>{!e||!r||(yy!=="production"&&by(!1,"IntersectionObserver not available on this device. whileInView animations will trigger on mount."),requestAnimationFrame(()=>{t.hasEnteredView=!0;const{onViewportEnter:o}=n.getProps();o&&o(null),n.animationState&&n.animationState.setActive(se.InView,!0)}))},[e])}const Hn=e=>t=>(e(t),null),Yk={inView:Hn(Uk),tap:Hn(Bk),focus:Hn(Ak),hover:Hn(Nk)};function vy(){const e=_.exports.useContext(No);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:n,register:r}=e,o=_.exports.useId();return _.exports.useEffect(()=>r(o),[]),!t&&n?[!1,()=>n&&n(o)]:[!0]}function Xk(){return Qk(_.exports.useContext(No))}function Qk(e){return e===null?!0:e.isPresent}function wy(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}const $s=e=>e*1e3;var Jk=function(){},Ws=function(){};const Rf=e=>e,xy=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,e_=1e-7,t_=12;function n_(e,t,n,r,o){let a,i,s=0;do i=t+(n-t)/2,a=xy(i,r,o)-e,a>0?n=i:t=i;while(Math.abs(a)>e_&&++s<t_);return i}function r_(e,t,n,r){if(e===t&&n===r)return Rf;const o=a=>n_(a,0,1,e,n);return a=>a===0||a===1?a:xy(o(a),t,r)}const Mf=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,Vf=e=>t=>1-e(1-t),Nf=e=>e*e,o_=Vf(Nf),Sy=Mf(Nf),Cy=e=>1-Math.sin(Math.acos(e)),jf=Vf(Cy),a_=Mf(jf),ky=(e=1.525)=>t=>t*t*((e+1)*t-e),Bf=ky(),i_=Vf(Bf),s_=Mf(Bf),l_=e=>{const t=ky(e);return n=>(n*=2)<1?.5*t(n):.5*(2-Math.pow(2,-10*(n-1)))},u_=l_(),c_={linear:Rf,easeIn:Nf,easeInOut:Sy,easeOut:o_,circIn:Cy,circInOut:a_,circOut:jf,backIn:Bf,backInOut:s_,backOut:i_,anticipate:u_},Cm=e=>{if(Array.isArray(e)){Ws(e.length===4);const[t,n,r,o]=e;return r_(t,n,r,o)}else if(typeof e=="string")return c_[e];return e},d_=e=>Array.isArray(e)&&typeof e[0]!="number",km=(e,t)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&An.test(t)&&!t.startsWith("url(")),mr=()=>({type:"spring",stiffness:500,damping:25,restSpeed:10}),Ui=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),Gu=()=>({type:"keyframes",ease:"linear",duration:.3}),f_=e=>({type:"keyframes",duration:.8,values:e}),_m={x:mr,y:mr,z:mr,rotate:mr,rotateX:mr,rotateY:mr,rotateZ:mr,scaleX:Ui,scaleY:Ui,scale:Ui,opacity:Gu,backgroundColor:Gu,color:Gu,default:Ui},p_=(e,t)=>{let n;return Za(t)?n=f_:n=_m[e]||_m.default,{to:t,...n(t)}},m_={...Qg,color:Ye,backgroundColor:Ye,outlineColor:Ye,fill:Ye,stroke:Ye,borderColor:Ye,borderTopColor:Ye,borderRightColor:Ye,borderBottomColor:Ye,borderLeftColor:Ye,filter:Uc,WebkitFilter:Uc},Of=e=>m_[e];function Df(e,t){var n;let r=Of(e);return r!==Uc&&(r=An),(n=r.getAnimatableNone)===null||n===void 0?void 0:n.call(r,t)}const h_={current:!1},_y=1/60*1e3,g_=typeof performance<"u"?()=>performance.now():()=>Date.now(),Ty=typeof window<"u"?e=>window.requestAnimationFrame(e):e=>setTimeout(()=>e(g_()),_y);function y_(e){let t=[],n=[],r=0,o=!1,a=!1;const i=new WeakSet,s={schedule:(l,u=!1,c=!1)=>{const d=c&&o,f=d?t:n;return u&&i.add(l),f.indexOf(l)===-1&&(f.push(l),d&&o&&(r=t.length)),l},cancel:l=>{const u=n.indexOf(l);u!==-1&&n.splice(u,1),i.delete(l)},process:l=>{if(o){a=!0;return}if(o=!0,[t,n]=[n,t],n.length=0,r=t.length,r)for(let u=0;u<r;u++){const c=t[u];c(l),i.has(c)&&(s.schedule(c),e())}o=!1,a&&(a=!1,s.process(l))}};return s}const b_=40;let Zc=!0,Ya=!1,Yc=!1;const bo={delta:0,timestamp:0},wi=["read","update","preRender","render","postRender"],Gl=wi.reduce((e,t)=>(e[t]=y_(()=>Ya=!0),e),{}),It=wi.reduce((e,t)=>{const n=Gl[t];return e[t]=(r,o=!1,a=!1)=>(Ya||w_(),n.schedule(r,o,a)),e},{}),nr=wi.reduce((e,t)=>(e[t]=Gl[t].cancel,e),{}),Ku=wi.reduce((e,t)=>(e[t]=()=>Gl[t].process(bo),e),{}),v_=e=>Gl[e].process(bo),Fy=e=>{Ya=!1,bo.delta=Zc?_y:Math.max(Math.min(e-bo.timestamp,b_),1),bo.timestamp=e,Yc=!0,wi.forEach(v_),Yc=!1,Ya&&(Zc=!1,Ty(Fy))},w_=()=>{Ya=!0,Zc=!0,Yc||Ty(Fy)},Hs=()=>bo;function Ay(e,t){const n=performance.now(),r=({timestamp:o})=>{const a=o-n;a>=t&&(nr.read(r),e(a-t))};return It.read(r,!0),()=>nr.read(r)}const Us=(e,t,n)=>Math.min(Math.max(n,e),t),xe=(e,t,n)=>-n*e+n*t+e;function Zu(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function x_({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let o=0,a=0,i=0;if(!t)o=a=i=n;else{const s=n<.5?n*(1+t):n+t-n*t,l=2*n-s;o=Zu(l,s,e+1/3),a=Zu(l,s,e),i=Zu(l,s,e-1/3)}return{red:Math.round(o*255),green:Math.round(a*255),blue:Math.round(i*255),alpha:r}}const Yu=(e,t,n)=>{const r=e*e;return Math.sqrt(Math.max(0,n*(t*t-r)+r))},S_=[Hc,Cr,Zr],C_=e=>S_.find(t=>t.test(e));function Tm(e){const t=C_(e);let n=t.parse(e);return t===Zr&&(n=x_(n)),n}const Ey=(e,t)=>{const n=Tm(e),r=Tm(t),o={...n};return a=>(o.red=Yu(n.red,r.red,a),o.green=Yu(n.green,r.green,a),o.blue=Yu(n.blue,r.blue,a),o.alpha=xe(n.alpha,r.alpha,a),Cr.transform(o))};function Py(e,t){return typeof e=="number"?n=>xe(e,t,n):Ye.test(e)?Ey(e,t):qy(e,t)}const Iy=(e,t)=>{const n=[...e],r=n.length,o=e.map((a,i)=>Py(a,t[i]));return a=>{for(let i=0;i<r;i++)n[i]=o[i](a);return n}},k_=(e,t)=>{const n={...e,...t},r={};for(const o in n)e[o]!==void 0&&t[o]!==void 0&&(r[o]=Py(e[o],t[o]));return o=>{for(const a in r)n[a]=r[a](o);return n}};function Fm(e){const t=An.parse(e),n=t.length;let r=0,o=0;for(let a=0;a<n;a++)r||typeof t[a]=="number"?r++:o++;return{parsed:t,numNumbers:r,numColors:o}}const qy=(e,t)=>{const n=An.createTransformer(t),r=Fm(e),o=Fm(t);return r.numColors===o.numColors&&r.numNumbers>=o.numNumbers?Ul(Iy(r.parsed,o.parsed),n):i=>`${i>0?t:e}`},Gs=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},Am=(e,t)=>n=>xe(e,t,n);function __(e){return typeof e=="number"?Am:typeof e=="string"?Ye.test(e)?Ey:qy:Array.isArray(e)?Iy:typeof e=="object"?k_:Am}function T_(e,t,n){const r=[],o=n||__(e[0]),a=e.length-1;for(let i=0;i<a;i++){let s=o(e[i],e[i+1]);if(t){const l=Array.isArray(t)?t[i]:t;s=Ul(l,s)}r.push(s)}return r}function Ly(e,t,{clamp:n=!0,ease:r,mixer:o}={}){const a=e.length;Ws(a===t.length),Ws(!r||!Array.isArray(r)||r.length===a-1),e[0]>e[a-1]&&(e=[...e].reverse(),t=[...t].reverse());const i=T_(t,r,o),s=i.length,l=u=>{let c=0;if(s>1)for(;c<e.length-2&&!(u<e[c+1]);c++);const d=Gs(e[c],e[c+1],u);return i[c](d)};return n?u=>l(Us(e[0],e[a-1],u)):l}function F_(e,t){return e.map(()=>t||Sy).splice(0,e.length-1)}function A_(e){const t=e.length;return e.map((n,r)=>r!==0?r/(t-1):0)}function E_(e,t){return e.map(n=>n*t)}function P_({from:e=0,to:t=1,ease:n,offset:r,duration:o=300}){const a={done:!1,value:e},i=Array.isArray(t)?t:[e,t],s=E_(r&&r.length===i.length?r:A_(i),o);function l(){return Ly(s,i,{ease:Array.isArray(n)?n:F_(i,n)})}let u=l();return{next:c=>(a.value=u(c),a.done=c>=o,a),flipTarget:()=>{i.reverse(),u=l()}}}const Xu=.001,I_=.01,Em=10,q_=.05,L_=1;function z_({duration:e=800,bounce:t=.25,velocity:n=0,mass:r=1}){let o,a;Jk(e<=Em*1e3);let i=1-t;i=Us(q_,L_,i),e=Us(I_,Em,e/1e3),i<1?(o=u=>{const c=u*i,d=c*e,f=c-n,p=Xc(u,i),b=Math.exp(-d);return Xu-f/p*b},a=u=>{const d=u*i*e,f=d*n+n,p=Math.pow(i,2)*Math.pow(u,2)*e,b=Math.exp(-d),v=Xc(Math.pow(u,2),i);return(-o(u)+Xu>0?-1:1)*((f-p)*b)/v}):(o=u=>{const c=Math.exp(-u*e),d=(u-n)*e+1;return-Xu+c*d},a=u=>{const c=Math.exp(-u*e),d=(n-u)*(e*e);return c*d});const s=5/e,l=M_(o,a,s);if(e=e*1e3,isNaN(l))return{stiffness:100,damping:10,duration:e};{const u=Math.pow(l,2)*r;return{stiffness:u,damping:i*2*Math.sqrt(r*u),duration:e}}}const R_=12;function M_(e,t,n){let r=n;for(let o=1;o<R_;o++)r=r-e(r)/t(r);return r}function Xc(e,t){return e*Math.sqrt(1-t*t)}const V_=["duration","bounce"],N_=["stiffness","damping","mass"];function Pm(e,t){return t.some(n=>e[n]!==void 0)}function j_(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};if(!Pm(e,N_)&&Pm(e,V_)){const n=z_(e);t={...t,...n,velocity:0,mass:1},t.isResolvedFromDuration=!0}return t}function zy({from:e=0,to:t=1,restSpeed:n=2,restDelta:r=.01,...o}){const a={done:!1,value:e};let{stiffness:i,damping:s,mass:l,velocity:u,duration:c,isResolvedFromDuration:d}=j_(o),f=Im,p=Im;function b(){const v=u?-(u/1e3):0,k=t-e,g=s/(2*Math.sqrt(i*l)),m=Math.sqrt(i/l)/1e3;if(r===void 0&&(r=Math.min(Math.abs(t-e)/100,.4)),g<1){const h=Xc(m,g);f=x=>{const F=Math.exp(-g*m*x);return t-F*((v+g*m*k)/h*Math.sin(h*x)+k*Math.cos(h*x))},p=x=>{const F=Math.exp(-g*m*x);return g*m*F*(Math.sin(h*x)*(v+g*m*k)/h+k*Math.cos(h*x))-F*(Math.cos(h*x)*(v+g*m*k)-h*k*Math.sin(h*x))}}else if(g===1)f=h=>t-Math.exp(-m*h)*(k+(v+m*k)*h);else{const h=m*Math.sqrt(g*g-1);f=x=>{const F=Math.exp(-g*m*x),E=Math.min(h*x,300);return t-F*((v+g*m*k)*Math.sinh(E)+h*k*Math.cosh(E))/h}}}return b(),{next:v=>{const k=f(v);if(d)a.done=v>=c;else{const g=p(v)*1e3,m=Math.abs(g)<=n,h=Math.abs(t-k)<=r;a.done=m&&h}return a.value=a.done?t:k,a},flipTarget:()=>{u=-u,[e,t]=[t,e],b()}}}zy.needsInterpolation=(e,t)=>typeof e=="string"||typeof t=="string";const Im=e=>0;function B_({velocity:e=0,from:t=0,power:n=.8,timeConstant:r=350,restDelta:o=.5,modifyTarget:a}){const i={done:!1,value:t};let s=n*e;const l=t+s,u=a===void 0?l:a(l);return u!==l&&(s=u-t),{next:c=>{const d=-s*Math.exp(-c/r);return i.done=!(d>o||d<-o),i.value=i.done?u:u+d,i},flipTarget:()=>{}}}const O_={decay:B_,keyframes:P_,spring:zy};function Ry(e,t,n=0){return e-t-n}function D_(e,t=0,n=0,r=!0){return r?Ry(t+-e,t,n):t-(e-t)+n}function $_(e,t,n,r){return r?e>=t+n:e<=-n}const W_=e=>{const t=({delta:n})=>e(n);return{start:()=>It.update(t,!0),stop:()=>nr.update(t)}};function My({from:e,autoplay:t=!0,driver:n=W_,elapsed:r=0,repeat:o=0,repeatType:a="loop",repeatDelay:i=0,onPlay:s,onStop:l,onComplete:u,onRepeat:c,onUpdate:d,type:f="keyframes",...p}){var b,v;let{to:k}=p,g,m=0,h=p.duration,x,F=!1,E=!0,A;const I=O_[Array.isArray(k)?"keyframes":f];!((v=(b=I).needsInterpolation)===null||v===void 0)&&v.call(b,e,k)&&(A=Ly([0,100],[e,k],{clamp:!1}),e=0,k=100);const D=I({...p,from:e,to:k});function N(){m++,a==="reverse"?(E=m%2===0,r=D_(r,h,i,E)):(r=Ry(r,h,i),a==="mirror"&&D.flipTarget()),F=!1,c&&c()}function Te(){g.stop(),u&&u()}function je(Yt){if(E||(Yt=-Yt),r+=Yt,!F){const Xt=D.next(Math.max(0,r));x=Xt.value,A&&(x=A(x)),F=E?Xt.done:r<=0}d==null||d(x),F&&(m===0&&(h!=null||(h=r)),m<o?$_(r,h,i,E)&&N():Te())}function _t(){s==null||s(),g=n(je),g.start()}return t&&_t(),{stop:()=>{l==null||l(),g.stop()}}}function Vy(e,t){return t?e*(1e3/t):0}function H_({from:e=0,velocity:t=0,min:n,max:r,power:o=.8,timeConstant:a=750,bounceStiffness:i=500,bounceDamping:s=10,restDelta:l=1,modifyTarget:u,driver:c,onUpdate:d,onComplete:f,onStop:p}){let b;function v(h){return n!==void 0&&h<n||r!==void 0&&h>r}function k(h){return n===void 0?r:r===void 0||Math.abs(n-h)<Math.abs(r-h)?n:r}function g(h){b==null||b.stop(),b=My({...h,driver:c,onUpdate:x=>{var F;d==null||d(x),(F=h.onUpdate)===null||F===void 0||F.call(h,x)},onComplete:f,onStop:p})}function m(h){g({type:"spring",stiffness:i,damping:s,restDelta:l,...h})}if(v(e))m({from:e,velocity:t,to:k(e)});else{let h=o*t+e;typeof u<"u"&&(h=u(h));const x=k(h),F=x===n?-1:1;let E,A;const I=D=>{E=A,A=D,t=Vy(D-E,Hs().delta),(F===1&&D>x||F===-1&&D<x)&&m({from:D,to:x,velocity:t})};g({type:"decay",from:e,velocity:t,timeConstant:a,power:o,restDelta:l,modifyTarget:u,onUpdate:v(h)?I:void 0})}return{stop:()=>b==null?void 0:b.stop()}}function U_({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:o,repeat:a,repeatType:i,repeatDelay:s,from:l,...u}){return!!Object.keys(u).length}function G_({ease:e,times:t,yoyo:n,flip:r,loop:o,...a}){const i={...a};return t&&(i.offset=t),a.duration&&(i.duration=$s(a.duration)),a.repeatDelay&&(i.repeatDelay=$s(a.repeatDelay)),e&&(i.ease=d_(e)?e.map(Cm):Cm(e)),a.type==="tween"&&(i.type="keyframes"),(n||o||r)&&(n?i.repeatType="reverse":o?i.repeatType="loop":r&&(i.repeatType="mirror"),i.repeat=o||n||r||a.repeat),a.type!=="spring"&&(i.type="keyframes"),i}function K_(e,t){var n,r;return(r=(n=($f(e,t)||{}).delay)!==null&&n!==void 0?n:e.delay)!==null&&r!==void 0?r:0}function Z_(e){return Array.isArray(e.to)&&e.to[0]===null&&(e.to=[...e.to],e.to[0]=e.from),e}function Y_(e,t,n){return Array.isArray(t.to)&&e.duration===void 0&&(e.duration=.8),Z_(t),U_(e)||(e={...e,...p_(n,t.to)}),{...t,...G_(e)}}function X_(e,t,n,r,o){const a=$f(r,e)||{};let i=a.from!==void 0?a.from:t.get();const s=km(e,n);i==="none"&&s&&typeof n=="string"?i=Df(e,n):qm(i)&&typeof n=="string"?i=Lm(n):!Array.isArray(n)&&qm(n)&&typeof i=="string"&&(n=Lm(i));const l=km(e,i);function u(){const d={from:i,to:n,velocity:t.getVelocity(),onComplete:o,onUpdate:f=>t.set(f)};return a.type==="inertia"||a.type==="decay"?H_({...d,...a}):My({...Y_(a,d,e),onUpdate:f=>{d.onUpdate(f),a.onUpdate&&a.onUpdate(f)},onComplete:()=>{d.onComplete(),a.onComplete&&a.onComplete()}})}function c(){const d=sy(n);return t.set(d),o(),a.onUpdate&&a.onUpdate(d),a.onComplete&&a.onComplete(),{stop:()=>{}}}return!l||!s||a.type===!1?c:u}function qm(e){return e===0||typeof e=="string"&&parseFloat(e)===0&&e.indexOf(" ")===-1}function Lm(e){return typeof e=="number"?0:Df("",e)}function $f(e,t){return e[t]||e.default||e}function Wf(e,t,n,r={}){return h_.current&&(r={type:!1}),t.start(o=>{let a;const i=X_(e,t,n,r,o),s=K_(r,e),l=()=>a=i();let u;return s?u=Ay(l,$s(s)):l(),()=>{u&&u(),a&&a.stop()}})}const Q_=e=>/^\-?\d*\.?\d+$/.test(e),J_=e=>/^0[^.\s]+$/.test(e);function Hf(e,t){e.indexOf(t)===-1&&e.push(t)}function Uf(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class Ca{constructor(){this.subscriptions=[]}add(t){return Hf(this.subscriptions,t),()=>Uf(this.subscriptions,t)}notify(t,n,r){const o=this.subscriptions.length;if(!!o)if(o===1)this.subscriptions[0](t,n,r);else for(let a=0;a<o;a++){const i=this.subscriptions[a];i&&i(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const eT=e=>!isNaN(parseFloat(e));class tT{constructor(t){this.version="7.6.18",this.timeDelta=0,this.lastUpdated=0,this.updateSubscribers=new Ca,this.velocityUpdateSubscribers=new Ca,this.renderSubscribers=new Ca,this.canTrackVelocity=!1,this.updateAndNotify=(n,r=!0)=>{this.prev=this.current,this.current=n;const{delta:o,timestamp:a}=Hs();this.lastUpdated!==a&&(this.timeDelta=o,this.lastUpdated=a,It.postRender(this.scheduleVelocityCheck)),this.prev!==this.current&&this.updateSubscribers.notify(this.current),this.velocityUpdateSubscribers.getSize()&&this.velocityUpdateSubscribers.notify(this.getVelocity()),r&&this.renderSubscribers.notify(this.current)},this.scheduleVelocityCheck=()=>It.postRender(this.velocityCheck),this.velocityCheck=({timestamp:n})=>{n!==this.lastUpdated&&(this.prev=this.current,this.velocityUpdateSubscribers.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=t,this.canTrackVelocity=eT(this.current)}onChange(t){return this.updateSubscribers.add(t)}clearListeners(){this.updateSubscribers.clear()}onRenderRequest(t){return t(this.get()),this.renderSubscribers.add(t)}attach(t){this.passiveEffect=t}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?Vy(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.stopAnimation=t(n)}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.renderSubscribers.clear(),this.stop()}}function Ao(e){return new tT(e)}const Ny=e=>t=>t.test(e),nT={test:e=>e==="auto",parse:e=>e},jy=[jr,$,fn,Nn,XC,YC,nT],Qo=e=>jy.find(Ny(e)),rT=[...jy,Ye,An],oT=e=>rT.find(Ny(e));function aT(e){const t={};return e.values.forEach((n,r)=>t[r]=n.get()),t}function iT(e){const t={};return e.values.forEach((n,r)=>t[r]=n.getVelocity()),t}function Kl(e,t,n){const r=e.getProps();return qf(r,t,n!==void 0?n:r.custom,aT(e),iT(e))}function sT(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,Ao(n))}function lT(e,t){const n=Kl(e,t);let{transitionEnd:r={},transition:o={},...a}=n?e.makeTargetAnimatable(n,!1):{};a={...a,...r};for(const i in a){const s=sy(a[i]);sT(e,i,s)}}function uT(e,t,n){var r,o;const a=Object.keys(t).filter(s=>!e.hasValue(s)),i=a.length;if(!!i)for(let s=0;s<i;s++){const l=a[s],u=t[l];let c=null;Array.isArray(u)&&(c=u[0]),c===null&&(c=(o=(r=n[l])!==null&&r!==void 0?r:e.readValue(l))!==null&&o!==void 0?o:t[l]),c!=null&&(typeof c=="string"&&(Q_(c)||J_(c))?c=parseFloat(c):!oT(c)&&An.test(u)&&(c=Df(l,u)),e.addValue(l,Ao(c)),n[l]===void 0&&(n[l]=c),c!==null&&e.setBaseTarget(l,c))}}function cT(e,t){return t?(t[e]||t.default||t).from:void 0}function dT(e,t,n){var r;const o={};for(const a in e){const i=cT(a,t);o[a]=i!==void 0?i:(r=n.getValue(a))===null||r===void 0?void 0:r.get()}return o}function Ks(e){return Boolean(hn(e)&&e.add)}function fT(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const o=t.map(a=>Qc(e,a,n));r=Promise.all(o)}else if(typeof t=="string")r=Qc(e,t,n);else{const o=typeof t=="function"?Kl(e,t,n.custom):t;r=By(e,o,n)}return r.then(()=>e.notify("AnimationComplete",t))}function Qc(e,t,n={}){var r;const o=Kl(e,t,n.custom);let{transition:a=e.getDefaultTransition()||{}}=o||{};n.transitionOverride&&(a=n.transitionOverride);const i=o?()=>By(e,o,n):()=>Promise.resolve(),s=!((r=e.variantChildren)===null||r===void 0)&&r.size?(u=0)=>{const{delayChildren:c=0,staggerChildren:d,staggerDirection:f}=a;return pT(e,t,c+u,d,f,n)}:()=>Promise.resolve(),{when:l}=a;if(l){const[u,c]=l==="beforeChildren"?[i,s]:[s,i];return u().then(c)}else return Promise.all([i(),s(n.delay)])}function By(e,t,{delay:n=0,transitionOverride:r,type:o}={}){var a;let{transition:i=e.getDefaultTransition(),transitionEnd:s,...l}=e.makeTargetAnimatable(t);const u=e.getValue("willChange");r&&(i=r);const c=[],d=o&&((a=e.animationState)===null||a===void 0?void 0:a.getState()[o]);for(const f in l){const p=e.getValue(f),b=l[f];if(!p||b===void 0||d&&hT(d,f))continue;let v={delay:n,...i};e.shouldReduceMotion&&jo.has(f)&&(v={...v,type:!1,delay:0});let k=Wf(f,p,b,v);Ks(u)&&(u.add(f),k=k.then(()=>u.remove(f))),c.push(k)}return Promise.all(c).then(()=>{s&&lT(e,s)})}function pT(e,t,n=0,r=0,o=1,a){const i=[],s=(e.variantChildren.size-1)*r,l=o===1?(u=0)=>u*r:(u=0)=>s-u*r;return Array.from(e.variantChildren).sort(mT).forEach((u,c)=>{i.push(Qc(u,t,{...a,delay:n+l(c)}).then(()=>u.notify("AnimationComplete",t)))}),Promise.all(i)}function mT(e,t){return e.sortNodePosition(t)}function hT({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}const Gf=[se.Animate,se.InView,se.Focus,se.Hover,se.Tap,se.Drag,se.Exit],gT=[...Gf].reverse(),yT=Gf.length;function bT(e){return t=>Promise.all(t.map(({animation:n,options:r})=>fT(e,n,r)))}function vT(e){let t=bT(e);const n=xT();let r=!0;const o=(l,u)=>{const c=Kl(e,u);if(c){const{transition:d,transitionEnd:f,...p}=c;l={...l,...p,...f}}return l};function a(l){t=l(e)}function i(l,u){var c;const d=e.getProps(),f=e.getVariantContext(!0)||{},p=[],b=new Set;let v={},k=1/0;for(let m=0;m<yT;m++){const h=gT[m],x=n[h],F=(c=d[h])!==null&&c!==void 0?c:f[h],E=Ua(F),A=h===u?x.isActive:null;A===!1&&(k=m);let I=F===f[h]&&F!==d[h]&&E;if(I&&r&&e.manuallyAnimateOnMount&&(I=!1),x.protectedKeys={...v},!x.isActive&&A===null||!F&&!x.prevProp||Dl(F)||typeof F=="boolean")continue;const D=wT(x.prevProp,F);let N=D||h===u&&x.isActive&&!I&&E||m>k&&E;const Te=Array.isArray(F)?F:[F];let je=Te.reduce(o,{});A===!1&&(je={});const{prevResolvedValues:_t={}}=x,Yt={..._t,...je},Xt=Se=>{N=!0,b.delete(Se),x.needsAnimating[Se]=!0};for(const Se in Yt){const Mt=je[Se],L=_t[Se];v.hasOwnProperty(Se)||(Mt!==L?Za(Mt)&&Za(L)?!wy(Mt,L)||D?Xt(Se):x.protectedKeys[Se]=!0:Mt!==void 0?Xt(Se):b.add(Se):Mt!==void 0&&b.has(Se)?Xt(Se):x.protectedKeys[Se]=!0)}x.prevProp=F,x.prevResolvedValues=je,x.isActive&&(v={...v,...je}),r&&e.blockInitialAnimation&&(N=!1),N&&!I&&p.push(...Te.map(Se=>({animation:Se,options:{type:h,...l}})))}if(b.size){const m={};b.forEach(h=>{const x=e.getBaseTarget(h);x!==void 0&&(m[h]=x)}),p.push({animation:m})}let g=Boolean(p.length);return r&&d.initial===!1&&!e.manuallyAnimateOnMount&&(g=!1),r=!1,g?t(p):Promise.resolve()}function s(l,u,c){var d;if(n[l].isActive===u)return Promise.resolve();(d=e.variantChildren)===null||d===void 0||d.forEach(p=>{var b;return(b=p.animationState)===null||b===void 0?void 0:b.setActive(l,u)}),n[l].isActive=u;const f=i(c,l);for(const p in n)n[p].protectedKeys={};return f}return{animateChanges:i,setActive:s,setAnimateFunction:a,getState:()=>n}}function wT(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!wy(t,e):!1}function hr(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function xT(){return{[se.Animate]:hr(!0),[se.InView]:hr(),[se.Hover]:hr(),[se.Tap]:hr(),[se.Drag]:hr(),[se.Focus]:hr(),[se.Exit]:hr()}}const ST={animation:Hn(({visualElement:e,animate:t})=>{e.animationState||(e.animationState=vT(e)),Dl(t)&&_.exports.useEffect(()=>t.subscribe(e),[t])}),exit:Hn(e=>{const{custom:t,visualElement:n}=e,[r,o]=vy(),a=_.exports.useContext(No);_.exports.useEffect(()=>{n.isPresent=r;const i=n.animationState&&n.animationState.setActive(se.Exit,!r,{custom:a&&a.custom||t});i&&!r&&i.then(o)},[r])})},zm=(e,t)=>Math.abs(e-t);function CT(e,t){const n=zm(e.x,t.x),r=zm(e.y,t.y);return Math.sqrt(n**2+r**2)}class Oy{constructor(t,n,{transformPagePoint:r}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const u=Ju(this.lastMoveEventInfo,this.history),c=this.startEvent!==null,d=CT(u.offset,{x:0,y:0})>=3;if(!c&&!d)return;const{point:f}=u,{timestamp:p}=Hs();this.history.push({...f,timestamp:p});const{onStart:b,onMove:v}=this.handlers;c||(b&&b(this.lastMoveEvent,u),this.startEvent=this.lastMoveEvent),v&&v(this.lastMoveEvent,u)},this.handlePointerMove=(u,c)=>{if(this.lastMoveEvent=u,this.lastMoveEventInfo=Qu(c,this.transformPagePoint),uy(u)&&u.buttons===0){this.handlePointerUp(u,c);return}It.update(this.updatePoint,!0)},this.handlePointerUp=(u,c)=>{this.end();const{onEnd:d,onSessionEnd:f}=this.handlers,p=Ju(Qu(c,this.transformPagePoint),this.history);this.startEvent&&d&&d(u,p),f&&f(u,p)},cy(t)&&t.touches.length>1)return;this.handlers=n,this.transformPagePoint=r;const o=Lf(t),a=Qu(o,this.transformPagePoint),{point:i}=a,{timestamp:s}=Hs();this.history=[{...i,timestamp:s}];const{onSessionStart:l}=n;l&&l(t,Ju(a,this.history)),this.removeListeners=Ul(yo(window,"pointermove",this.handlePointerMove),yo(window,"pointerup",this.handlePointerUp),yo(window,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),nr.update(this.updatePoint)}}function Qu(e,t){return t?{point:t(e.point)}:e}function Rm(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Ju({point:e},t){return{point:e,delta:Rm(e,Dy(t)),offset:Rm(e,kT(t)),velocity:_T(t,.1)}}function kT(e){return e[0]}function Dy(e){return e[e.length-1]}function _T(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const o=Dy(e);for(;n>=0&&(r=e[n],!(o.timestamp-r.timestamp>$s(t)));)n--;if(!r)return{x:0,y:0};const a=(o.timestamp-r.timestamp)/1e3;if(a===0)return{x:0,y:0};const i={x:(o.x-r.x)/a,y:(o.y-r.y)/a};return i.x===1/0&&(i.x=0),i.y===1/0&&(i.y=0),i}function wt(e){return e.max-e.min}function Jc(e,t=0,n=.01){return Math.abs(e-t)<=n}function Mm(e,t,n,r=.5){e.origin=r,e.originPoint=xe(t.min,t.max,e.origin),e.scale=wt(n)/wt(t),(Jc(e.scale,1,1e-4)||isNaN(e.scale))&&(e.scale=1),e.translate=xe(n.min,n.max,e.origin)-e.originPoint,(Jc(e.translate)||isNaN(e.translate))&&(e.translate=0)}function ka(e,t,n,r){Mm(e.x,t.x,n.x,r==null?void 0:r.originX),Mm(e.y,t.y,n.y,r==null?void 0:r.originY)}function Vm(e,t,n){e.min=n.min+t.min,e.max=e.min+wt(t)}function TT(e,t,n){Vm(e.x,t.x,n.x),Vm(e.y,t.y,n.y)}function Nm(e,t,n){e.min=t.min-n.min,e.max=e.min+wt(t)}function _a(e,t,n){Nm(e.x,t.x,n.x),Nm(e.y,t.y,n.y)}function FT(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?xe(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?xe(n,e,r.max):Math.min(e,n)),e}function jm(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function AT(e,{top:t,left:n,bottom:r,right:o}){return{x:jm(e.x,n,o),y:jm(e.y,t,r)}}function Bm(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function ET(e,t){return{x:Bm(e.x,t.x),y:Bm(e.y,t.y)}}function PT(e,t){let n=.5;const r=wt(e),o=wt(t);return o>r?n=Gs(t.min,t.max-r,e.min):r>o&&(n=Gs(e.min,e.max-o,t.min)),Us(0,1,n)}function IT(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const ed=.35;function qT(e=ed){return e===!1?e=0:e===!0&&(e=ed),{x:Om(e,"left","right"),y:Om(e,"top","bottom")}}function Om(e,t,n){return{min:Dm(e,t),max:Dm(e,n)}}function Dm(e,t){var n;return typeof e=="number"?e:(n=e[t])!==null&&n!==void 0?n:0}const $m=()=>({translate:0,scale:1,origin:0,originPoint:0}),Ta=()=>({x:$m(),y:$m()}),Wm=()=>({min:0,max:0}),Ie=()=>({x:Wm(),y:Wm()});function tn(e){return[e("x"),e("y")]}function $y({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function LT({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function zT(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function ec(e){return e===void 0||e===1}function td({scale:e,scaleX:t,scaleY:n}){return!ec(e)||!ec(t)||!ec(n)}function gr(e){return td(e)||Wy(e)||e.z||e.rotate||e.rotateX||e.rotateY}function Wy(e){return Hm(e.x)||Hm(e.y)}function Hm(e){return e&&e!=="0%"}function Zs(e,t,n){const r=e-n,o=t*r;return n+o}function Um(e,t,n,r,o){return o!==void 0&&(e=Zs(e,o,r)),Zs(e,n,r)+t}function nd(e,t=0,n=1,r,o){e.min=Um(e.min,t,n,r,o),e.max=Um(e.max,t,n,r,o)}function Hy(e,{x:t,y:n}){nd(e.x,t.translate,t.scale,t.originPoint),nd(e.y,n.translate,n.scale,n.originPoint)}function RT(e,t,n,r=!1){var o,a;const i=n.length;if(!i)return;t.x=t.y=1;let s,l;for(let u=0;u<i;u++)s=n[u],l=s.projectionDelta,((a=(o=s.instance)===null||o===void 0?void 0:o.style)===null||a===void 0?void 0:a.display)!=="contents"&&(r&&s.options.layoutScroll&&s.scroll&&s!==s.root&&Yr(e,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),l&&(t.x*=l.x.scale,t.y*=l.y.scale,Hy(e,l)),r&&gr(s.latestValues)&&Yr(e,s.latestValues));t.x=Gm(t.x),t.y=Gm(t.y)}function Gm(e){return Number.isInteger(e)||e>1.0000000000001||e<.999999999999?e:1}function jn(e,t){e.min=e.min+t,e.max=e.max+t}function Km(e,t,[n,r,o]){const a=t[o]!==void 0?t[o]:.5,i=xe(e.min,e.max,a);nd(e,t[n],t[r],i,t.scale)}const MT=["x","scaleX","originX"],VT=["y","scaleY","originY"];function Yr(e,t){Km(e.x,t,MT),Km(e.y,t,VT)}function Uy(e,t){return $y(zT(e.getBoundingClientRect(),t))}function NT(e,t,n){const r=Uy(e,n),{scroll:o}=t;return o&&(jn(r.x,o.offset.x),jn(r.y,o.offset.y)),r}const jT=new WeakMap;class BT{constructor(t){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Ie(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){if(this.visualElement.isPresent===!1)return;const r=s=>{this.stopAnimation(),n&&this.snapToCursor(Lf(s,"page").point)},o=(s,l)=>{var u;const{drag:c,dragPropagation:d,onDragStart:f}=this.getProps();c&&!d&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=my(c),!this.openGlobalLock)||(this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),tn(p=>{var b,v;let k=this.getAxisMotionValue(p).get()||0;if(fn.test(k)){const g=(v=(b=this.visualElement.projection)===null||b===void 0?void 0:b.layout)===null||v===void 0?void 0:v.layoutBox[p];g&&(k=wt(g)*(parseFloat(k)/100))}this.originPoint[p]=k}),f==null||f(s,l),(u=this.visualElement.animationState)===null||u===void 0||u.setActive(se.Drag,!0))},a=(s,l)=>{const{dragPropagation:u,dragDirectionLock:c,onDirectionLock:d,onDrag:f}=this.getProps();if(!u&&!this.openGlobalLock)return;const{offset:p}=l;if(c&&this.currentDirection===null){this.currentDirection=OT(p),this.currentDirection!==null&&(d==null||d(this.currentDirection));return}this.updateAxis("x",l.point,p),this.updateAxis("y",l.point,p),this.visualElement.render(),f==null||f(s,l)},i=(s,l)=>this.stop(s,l);this.panSession=new Oy(t,{onSessionStart:r,onStart:o,onMove:a,onSessionEnd:i},{transformPagePoint:this.visualElement.getTransformPagePoint()})}stop(t,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:o}=n;this.startAnimation(o);const{onDragEnd:a}=this.getProps();a==null||a(t,n)}cancel(){var t,n;this.isDragging=!1,this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!1),(t=this.panSession)===null||t===void 0||t.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),(n=this.visualElement.animationState)===null||n===void 0||n.setActive(se.Drag,!1)}updateAxis(t,n,r){const{drag:o}=this.getProps();if(!r||!Gi(t,o,this.currentDirection))return;const a=this.getAxisMotionValue(t);let i=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(i=FT(i,this.constraints[t],this.elastic[t])),a.set(i)}resolveConstraints(){const{dragConstraints:t,dragElastic:n}=this.getProps(),{layout:r}=this.visualElement.projection||{},o=this.constraints;t&&Kr(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&r?this.constraints=AT(r.layoutBox,t):this.constraints=!1,this.elastic=qT(n),o!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&tn(a=>{this.getAxisMotionValue(a)&&(this.constraints[a]=IT(r.layoutBox[a],this.constraints[a]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!Kr(t))return!1;const r=t.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;const a=NT(r,o.root,this.visualElement.getTransformPagePoint());let i=ET(o.layout.layoutBox,a);if(n){const s=n(LT(i));this.hasMutatedConstraints=!!s,s&&(i=$y(s))}return i}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:o,dragTransition:a,dragSnapToOrigin:i,onDragTransitionEnd:s}=this.getProps(),l=this.constraints||{},u=tn(c=>{var d;if(!Gi(c,n,this.currentDirection))return;let f=(d=l==null?void 0:l[c])!==null&&d!==void 0?d:{};i&&(f={min:0,max:0});const p=o?200:1e6,b=o?40:1e7,v={type:"inertia",velocity:r?t[c]:0,bounceStiffness:p,bounceDamping:b,timeConstant:750,restDelta:1,restSpeed:10,...a,...f};return this.startAxisValueAnimation(c,v)});return Promise.all(u).then(s)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return Wf(t,r,0,n)}stopAnimation(){tn(t=>this.getAxisMotionValue(t).stop())}getAxisMotionValue(t){var n,r;const o="_drag"+t.toUpperCase(),a=this.visualElement.getProps()[o];return a||this.visualElement.getValue(t,(r=(n=this.visualElement.getProps().initial)===null||n===void 0?void 0:n[t])!==null&&r!==void 0?r:0)}snapToCursor(t){tn(n=>{const{drag:r}=this.getProps();if(!Gi(n,r,this.currentDirection))return;const{projection:o}=this.visualElement,a=this.getAxisMotionValue(n);if(o&&o.layout){const{min:i,max:s}=o.layout.layoutBox[n];a.set(t[n]-xe(i,s,.5))}})}scalePositionWithinConstraints(){var t;if(!this.visualElement.current)return;const{drag:n,dragConstraints:r}=this.getProps(),{projection:o}=this.visualElement;if(!Kr(r)||!o||!this.constraints)return;this.stopAnimation();const a={x:0,y:0};tn(s=>{const l=this.getAxisMotionValue(s);if(l){const u=l.get();a[s]=PT({min:u,max:u},this.constraints[s])}});const{transformTemplate:i}=this.visualElement.getProps();this.visualElement.current.style.transform=i?i({},""):"none",(t=o.root)===null||t===void 0||t.updateScroll(),o.updateLayout(),this.resolveConstraints(),tn(s=>{if(!Gi(s,n,null))return;const l=this.getAxisMotionValue(s),{min:u,max:c}=this.constraints[s];l.set(xe(u,c,a[s]))})}addListeners(){var t;if(!this.visualElement.current)return;jT.set(this.visualElement,this);const n=this.visualElement.current,r=yo(n,"pointerdown",u=>{const{drag:c,dragListener:d=!0}=this.getProps();c&&d&&this.start(u)}),o=()=>{const{dragConstraints:u}=this.getProps();Kr(u)&&(this.constraints=this.resolveRefConstraints())},{projection:a}=this.visualElement,i=a.addEventListener("measure",o);a&&!a.layout&&((t=a.root)===null||t===void 0||t.updateScroll(),a.updateLayout()),o();const s=Hl(window,"resize",()=>this.scalePositionWithinConstraints()),l=a.addEventListener("didUpdate",({delta:u,hasLayoutChanged:c})=>{this.isDragging&&c&&(tn(d=>{const f=this.getAxisMotionValue(d);!f||(this.originPoint[d]+=u[d].translate,f.set(f.get()+u[d].translate))}),this.visualElement.render())});return()=>{s(),r(),i(),l==null||l()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:o=!1,dragConstraints:a=!1,dragElastic:i=ed,dragMomentum:s=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:o,dragConstraints:a,dragElastic:i,dragMomentum:s}}}function Gi(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function OT(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}function DT(e){const{dragControls:t,visualElement:n}=e,r=Wl(()=>new BT(n));_.exports.useEffect(()=>t&&t.subscribe(r),[r,t]),_.exports.useEffect(()=>r.addListeners(),[r])}function $T({onPan:e,onPanStart:t,onPanEnd:n,onPanSessionStart:r,visualElement:o}){const a=e||t||n||r,i=_.exports.useRef(null),{transformPagePoint:s}=_.exports.useContext(kf),l={onSessionStart:r,onStart:t,onMove:e,onEnd:(c,d)=>{i.current=null,n&&n(c,d)}};_.exports.useEffect(()=>{i.current!==null&&i.current.updateHandlers(l)});function u(c){i.current=new Oy(c,l,{transformPagePoint:s})}Ds(o,"pointerdown",a&&u),zf(()=>i.current&&i.current.end())}const WT={pan:Hn($T),drag:Hn(DT)};function rd(e){return typeof e=="string"&&e.startsWith("var(--")}const Gy=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function HT(e){const t=Gy.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]}function od(e,t,n=1){const[r,o]=HT(e);if(!r)return;const a=window.getComputedStyle(t).getPropertyValue(r);return a?a.trim():rd(o)?od(o,t,n+1):o}function UT(e,{...t},n){const r=e.current;if(!(r instanceof Element))return{target:t,transitionEnd:n};n&&(n={...n}),e.values.forEach(o=>{const a=o.get();if(!rd(a))return;const i=od(a,r);i&&o.set(i)});for(const o in t){const a=t[o];if(!rd(a))continue;const i=od(a,r);!i||(t[o]=i,n&&n[o]===void 0&&(n[o]=a))}return{target:t,transitionEnd:n}}const GT=new Set(["width","height","top","left","right","bottom","x","y"]),Ky=e=>GT.has(e),KT=e=>Object.keys(e).some(Ky),Zy=(e,t)=>{e.set(t,!1),e.set(t)},Zm=e=>e===jr||e===$;var Ym;(function(e){e.width="width",e.height="height",e.left="left",e.right="right",e.top="top",e.bottom="bottom"})(Ym||(Ym={}));const Xm=(e,t)=>parseFloat(e.split(", ")[t]),Qm=(e,t)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const o=r.match(/^matrix3d\((.+)\)$/);if(o)return Xm(o[1],t);{const a=r.match(/^matrix\((.+)\)$/);return a?Xm(a[1],e):0}},ZT=new Set(["x","y","z"]),YT=Bs.filter(e=>!ZT.has(e));function XT(e){const t=[];return YT.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t.length&&e.render(),t}const Jm={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:Qm(4,13),y:Qm(5,14)},QT=(e,t,n)=>{const r=t.measureViewportBox(),o=t.current,a=getComputedStyle(o),{display:i}=a,s={};i==="none"&&t.setStaticValue("display",e.display||"block"),n.forEach(u=>{s[u]=Jm[u](r,a)}),t.render();const l=t.measureViewportBox();return n.forEach(u=>{const c=t.getValue(u);Zy(c,s[u]),e[u]=Jm[u](l,a)}),e},JT=(e,t,n={},r={})=>{t={...t},r={...r};const o=Object.keys(t).filter(Ky);let a=[],i=!1;const s=[];if(o.forEach(l=>{const u=e.getValue(l);if(!e.hasValue(l))return;let c=n[l],d=Qo(c);const f=t[l];let p;if(Za(f)){const b=f.length,v=f[0]===null?1:0;c=f[v],d=Qo(c);for(let k=v;k<b;k++)p?Ws(Qo(f[k])===p):p=Qo(f[k])}else p=Qo(f);if(d!==p)if(Zm(d)&&Zm(p)){const b=u.get();typeof b=="string"&&u.set(parseFloat(b)),typeof f=="string"?t[l]=parseFloat(f):Array.isArray(f)&&p===$&&(t[l]=f.map(parseFloat))}else(d==null?void 0:d.transform)&&(p==null?void 0:p.transform)&&(c===0||f===0)?c===0?u.set(p.transform(c)):t[l]=d.transform(f):(i||(a=XT(e),i=!0),s.push(l),r[l]=r[l]!==void 0?r[l]:t[l],Zy(u,f))}),s.length){const l=s.indexOf("height")>=0?window.pageYOffset:null,u=QT(t,e,s);return a.length&&a.forEach(([c,d])=>{e.getValue(c).set(d)}),e.render(),Nr&&l!==null&&window.scrollTo({top:l}),{target:u,transitionEnd:r}}else return{target:t,transitionEnd:r}};function eF(e,t,n,r){return KT(t)?JT(e,t,n,r):{target:t,transitionEnd:r}}const tF=(e,t,n,r)=>{const o=UT(e,t,r);return t=o.target,r=o.transitionEnd,eF(e,t,n,r)},ad={current:null},Yy={current:!1};function nF(){if(Yy.current=!0,!!Nr)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>ad.current=e.matches;e.addListener(t),t()}else ad.current=!1}function rF(e,t,n){const{willChange:r}=t;for(const o in t){const a=t[o],i=n[o];if(hn(a))e.addValue(o,a),Ks(r)&&r.add(o);else if(hn(i))e.addValue(o,Ao(a)),Ks(r)&&r.remove(o);else if(i!==a)if(e.hasValue(o)){const s=e.getValue(o);!s.hasAnimated&&s.set(a)}else{const s=e.getStaticValue(o);e.addValue(o,Ao(s!==void 0?s:a))}}for(const o in n)t[o]===void 0&&e.removeValue(o);return t}const Xy=Object.keys(Ga),oF=Xy.length,e1=["AnimationStart","AnimationComplete","Update","Unmount","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class aF{constructor({parent:t,props:n,reducedMotionConfig:r,visualState:o},a={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.isPresent=!0,this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{!this.current||(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>It.render(this.render,!1,!0);const{latestValues:i,renderState:s}=o;this.latestValues=i,this.baseTarget={...i},this.initialValues=n.initial?{...i}:{},this.renderState=s,this.parent=t,this.props=n,this.depth=t?t.depth+1:0,this.reducedMotionConfig=r,this.options=a,this.isControllingVariants=$l(n),this.isVariantNode=Og(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=Boolean(t&&t.current);const{willChange:l,...u}=this.scrapeMotionValuesFromProps(n);for(const c in u){const d=u[c];i[c]!==void 0&&hn(d)&&(d.set(i[c],!1),Ks(l)&&l.add(c))}}scrapeMotionValuesFromProps(t){return{}}mount(t){var n;this.current=t,this.projection&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=(n=this.parent)===null||n===void 0?void 0:n.addVariantChild(this)),this.values.forEach((r,o)=>this.bindToMotionValue(o,r)),Yy.current||nF(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:ad.current,this.parent&&this.parent.children.add(this),this.setProps(this.props)}unmount(){var t,n,r;(t=this.projection)===null||t===void 0||t.unmount(),nr.update(this.notifyUpdate),nr.render(this.render),this.valueSubscriptions.forEach(o=>o()),(n=this.removeFromVariantTree)===null||n===void 0||n.call(this),(r=this.parent)===null||r===void 0||r.children.delete(this);for(const o in this.events)this.events[o].clear();this.current=null}bindToMotionValue(t,n){const r=jo.has(t),o=n.onChange(i=>{this.latestValues[t]=i,this.props.onUpdate&&It.update(this.notifyUpdate,!1,!0),r&&this.projection&&(this.projection.isTransformDirty=!0)}),a=n.onRenderRequest(this.scheduleRender);this.valueSubscriptions.set(t,()=>{o(),a()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}loadFeatures(t,n,r,o,a,i){const s=[];for(let l=0;l<oF;l++){const u=Xy[l],{isEnabled:c,Component:d}=Ga[u];c(t)&&d&&s.push(_.exports.createElement(d,{key:u,...t,visualElement:this}))}if(!this.projection&&a){this.projection=new a(o,this.latestValues,this.parent&&this.parent.projection);const{layoutId:l,layout:u,drag:c,dragConstraints:d,layoutScroll:f}=t;this.projection.setOptions({layoutId:l,layout:u,alwaysMeasureLayout:Boolean(c)||d&&Kr(d),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:typeof u=="string"?u:"both",initialPromotionConfig:i,layoutScroll:f})}return s}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Ie()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}makeTargetAnimatable(t,n=!0){return this.makeTargetAnimatableFromInstance(t,this.props,n)}setProps(t){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.props=t;for(let n=0;n<e1.length;n++){const r=e1[n];this.propEventSubscriptions[r]&&(this.propEventSubscriptions[r](),delete this.propEventSubscriptions[r]);const o=t["on"+r];o&&(this.propEventSubscriptions[r]=this.on(r,o))}this.prevMotionValues=rF(this,this.scrapeMotionValuesFromProps(t),this.prevMotionValues)}getProps(){return this.props}getVariant(t){var n;return(n=this.props.variants)===null||n===void 0?void 0:n[t]}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){var t;return this.isVariantNode?this:(t=this.parent)===null||t===void 0?void 0:t.getClosestVariantNode()}getVariantContext(t=!1){var n,r;if(t)return(n=this.parent)===null||n===void 0?void 0:n.getVariantContext();if(!this.isControllingVariants){const a=((r=this.parent)===null||r===void 0?void 0:r.getVariantContext())||{};return this.props.initial!==void 0&&(a.initial=this.props.initial),a}const o={};for(let a=0;a<iF;a++){const i=Qy[a],s=this.props[i];(Ua(s)||s===!1)&&(o[i]=s)}return o}addVariantChild(t){var n;const r=this.getClosestVariantNode();if(r)return(n=r.variantChildren)===null||n===void 0||n.add(t),()=>r.variantChildren.delete(t)}addValue(t,n){this.hasValue(t)&&this.removeValue(t),this.values.set(t,n),this.latestValues[t]=n.get(),this.bindToMotionValue(t,n)}removeValue(t){var n;this.values.delete(t),(n=this.valueSubscriptions.get(t))===null||n===void 0||n(),this.valueSubscriptions.delete(t),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=Ao(n),this.addValue(t,r)),r}readValue(t){return this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:this.readValueFromInstance(this.current,t,this.options)}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:r}=this.props,o=typeof r=="string"||typeof r=="object"?(n=qf(this.props,r))===null||n===void 0?void 0:n[t]:void 0;if(r&&o!==void 0)return o;const a=this.getBaseTargetFromProps(this.props,t);return a!==void 0&&!hn(a)?a:this.initialValues[t]!==void 0&&o===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new Ca),this.events[t].add(n)}notify(t,...n){var r;(r=this.events[t])===null||r===void 0||r.notify(...n)}}const Qy=["initial",...Gf],iF=Qy.length;class Jy extends aF{sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){var r;return(r=t.style)===null||r===void 0?void 0:r[n]}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}makeTargetAnimatableFromInstance({transition:t,transitionEnd:n,...r},{transformValues:o},a){let i=dT(r,t||{},this);if(o&&(n&&(n=o(n)),r&&(r=o(r)),i&&(i=o(i))),a){uT(this,r,i);const s=tF(this,r,i,n);n=s.transitionEnd,r=s.target}return{transition:t,transitionEnd:n,...r}}}function sF(e){return window.getComputedStyle(e)}class lF extends Jy{readValueFromInstance(t,n){if(jo.has(n)){const r=Of(n);return r&&r.default||0}else{const r=sF(t),o=(Wg(n)?r.getPropertyValue(n):r[n])||0;return typeof o=="string"?o.trim():o}}measureInstanceViewportBox(t,{transformPagePoint:n}){return Uy(t,n)}build(t,n,r,o){Af(t,n,r,o.transformTemplate)}scrapeMotionValuesFromProps(t){return If(t)}renderInstance(t,n,r,o){ry(t,n,r,o)}}class uF extends Jy{getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){var r;return jo.has(n)?((r=Of(n))===null||r===void 0?void 0:r.default)||0:(n=oy.has(n)?n:ny(n),t.getAttribute(n))}measureInstanceViewportBox(){return Ie()}scrapeMotionValuesFromProps(t){return iy(t)}build(t,n,r,o){Pf(t,n,r,o.transformTemplate)}renderInstance(t,n,r,o){ay(t,n,r,o)}}const cF=(e,t)=>Tf(e)?new uF(t,{enableHardwareAcceleration:!1}):new lF(t,{enableHardwareAcceleration:!0});function t1(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const Jo={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if($.test(e))e=parseFloat(e);else return e;const n=t1(e,t.target.x),r=t1(e,t.target.y);return`${n}% ${r}%`}},n1="_$css",dF={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,o=e.includes("var("),a=[];o&&(e=e.replace(Gy,p=>(a.push(p),n1)));const i=An.parse(e);if(i.length>5)return r;const s=An.createTransformer(e),l=typeof i[0]!="number"?1:0,u=n.x.scale*t.x,c=n.y.scale*t.y;i[0+l]/=u,i[1+l]/=c;const d=xe(u,c,.5);typeof i[2+l]=="number"&&(i[2+l]/=d),typeof i[3+l]=="number"&&(i[3+l]/=d);let f=s(i);if(o){let p=0;f=f.replace(n1,()=>{const b=a[p];return p++,b})}return f}};class fF extends q.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:o}=this.props,{projection:a}=t;WC(mF),a&&(n.group&&n.group.add(a),r&&r.register&&o&&r.register(a),a.root.didUpdate(),a.addEventListener("animationComplete",()=>{this.safeToRemove()}),a.setOptions({...a.options,onExitComplete:()=>this.safeToRemove()})),wa.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:o,isPresent:a}=this.props,i=r.projection;return i&&(i.isPresent=a,o||t.layoutDependency!==n||n===void 0?i.willUpdate():this.safeToRemove(),t.isPresent!==a&&(a?i.promote():i.relegate()||It.postRender(()=>{var s;!((s=i.getStack())===null||s===void 0)&&s.members.length||this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),!t.currentAnimation&&t.isLead()&&this.safeToRemove())}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:o}=t;o&&(o.scheduleCheckAfterUnmount(),n!=null&&n.group&&n.group.remove(o),r!=null&&r.deregister&&r.deregister(o))}safeToRemove(){const{safeToRemove:t}=this.props;t==null||t()}render(){return null}}function pF(e){const[t,n]=vy(),r=_.exports.useContext(_f);return w(fF,{...e,layoutGroup:r,switchLayoutGroup:_.exports.useContext(Dg),isPresent:t,safeToRemove:n})}const mF={borderRadius:{...Jo,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Jo,borderTopRightRadius:Jo,borderBottomLeftRadius:Jo,borderBottomRightRadius:Jo,boxShadow:dF},hF={measureLayout:pF};function gF(e,t,n={}){const r=hn(e)?e:Ao(e);return Wf("",r,t,n),{stop:()=>r.stop(),isAnimating:()=>r.isAnimating()}}const e2=["TopLeft","TopRight","BottomLeft","BottomRight"],yF=e2.length,r1=e=>typeof e=="string"?parseFloat(e):e,o1=e=>typeof e=="number"||$.test(e);function bF(e,t,n,r,o,a){var i,s,l,u;o?(e.opacity=xe(0,(i=n.opacity)!==null&&i!==void 0?i:1,vF(r)),e.opacityExit=xe((s=t.opacity)!==null&&s!==void 0?s:1,0,wF(r))):a&&(e.opacity=xe((l=t.opacity)!==null&&l!==void 0?l:1,(u=n.opacity)!==null&&u!==void 0?u:1,r));for(let c=0;c<yF;c++){const d=`border${e2[c]}Radius`;let f=a1(t,d),p=a1(n,d);if(f===void 0&&p===void 0)continue;f||(f=0),p||(p=0),f===0||p===0||o1(f)===o1(p)?(e[d]=Math.max(xe(r1(f),r1(p),r),0),(fn.test(p)||fn.test(f))&&(e[d]+="%")):e[d]=p}(t.rotate||n.rotate)&&(e.rotate=xe(t.rotate||0,n.rotate||0,r))}function a1(e,t){var n;return(n=e[t])!==null&&n!==void 0?n:e.borderRadius}const vF=t2(0,.5,jf),wF=t2(.5,.95,Rf);function t2(e,t,n){return r=>r<e?0:r>t?1:n(Gs(e,t,r))}function i1(e,t){e.min=t.min,e.max=t.max}function jt(e,t){i1(e.x,t.x),i1(e.y,t.y)}function s1(e,t,n,r,o){return e-=t,e=Zs(e,1/n,r),o!==void 0&&(e=Zs(e,1/o,r)),e}function xF(e,t=0,n=1,r=.5,o,a=e,i=e){if(fn.test(t)&&(t=parseFloat(t),t=xe(i.min,i.max,t/100)-i.min),typeof t!="number")return;let s=xe(a.min,a.max,r);e===a&&(s-=t),e.min=s1(e.min,t,n,s,o),e.max=s1(e.max,t,n,s,o)}function l1(e,t,[n,r,o],a,i){xF(e,t[n],t[r],t[o],t.scale,a,i)}const SF=["x","scaleX","originX"],CF=["y","scaleY","originY"];function u1(e,t,n,r){l1(e.x,t,SF,n==null?void 0:n.x,r==null?void 0:r.x),l1(e.y,t,CF,n==null?void 0:n.y,r==null?void 0:r.y)}function c1(e){return e.translate===0&&e.scale===1}function n2(e){return c1(e.x)&&c1(e.y)}function r2(e,t){return e.x.min===t.x.min&&e.x.max===t.x.max&&e.y.min===t.y.min&&e.y.max===t.y.max}function d1(e){return wt(e.x)/wt(e.y)}class kF{constructor(){this.members=[]}add(t){Hf(this.members,t),t.scheduleRender()}remove(t){if(Uf(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(o=>t===o);if(n===0)return!1;let r;for(let o=n;o>=0;o--){const a=this.members[o];if(a.isPresent!==!1){r=a;break}}return r?(this.promote(r),!0):!1}promote(t,n){var r;const o=this.lead;if(t!==o&&(this.prevLead=o,this.lead=t,t.show(),o)){o.instance&&o.scheduleRender(),t.scheduleRender(),t.resumeFrom=o,n&&(t.resumeFrom.preserveOpacity=!0),o.snapshot&&(t.snapshot=o.snapshot,t.snapshot.latestValues=o.animationValues||o.latestValues),!((r=t.root)===null||r===void 0)&&r.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:a}=t.options;a===!1&&o.hide()}}exitAnimationComplete(){this.members.forEach(t=>{var n,r,o,a,i;(r=(n=t.options).onExitComplete)===null||r===void 0||r.call(n),(i=(o=t.resumingFrom)===null||o===void 0?void 0:(a=o.options).onExitComplete)===null||i===void 0||i.call(a)})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function f1(e,t,n){let r="";const o=e.x.translate/t.x,a=e.y.translate/t.y;if((o||a)&&(r=`translate3d(${o}px, ${a}px, 0) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{rotate:l,rotateX:u,rotateY:c}=n;l&&(r+=`rotate(${l}deg) `),u&&(r+=`rotateX(${u}deg) `),c&&(r+=`rotateY(${c}deg) `)}const i=e.x.scale*t.x,s=e.y.scale*t.y;return(i!==1||s!==1)&&(r+=`scale(${i}, ${s})`),r||"none"}const _F=(e,t)=>e.depth-t.depth;class TF{constructor(){this.children=[],this.isDirty=!1}add(t){Hf(this.children,t),this.isDirty=!0}remove(t){Uf(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(_F),this.isDirty=!1,this.children.forEach(t)}}const p1=["","X","Y","Z"],m1=1e3;let FF=0;function o2({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:o}){return class{constructor(i,s={},l=t==null?void 0:t()){this.id=FF++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isTransformDirty=!1,this.isProjectionDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.potentialNodes=new Map,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.nodes.forEach(PF),this.nodes.forEach(LF),this.nodes.forEach(zF)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.elementId=i,this.latestValues=s,this.root=l?l.root||l:this,this.path=l?[...l.path,l]:[],this.parent=l,this.depth=l?l.depth+1:0,i&&this.root.registerPotentialNode(i,this);for(let u=0;u<this.path.length;u++)this.path[u].shouldResetTransform=!0;this.root===this&&(this.nodes=new TF)}addEventListener(i,s){return this.eventHandlers.has(i)||this.eventHandlers.set(i,new Ca),this.eventHandlers.get(i).add(s)}notifyListeners(i,...s){const l=this.eventHandlers.get(i);l==null||l.notify(...s)}hasListeners(i){return this.eventHandlers.has(i)}registerPotentialNode(i,s){this.potentialNodes.set(i,s)}mount(i,s=!1){var l;if(this.instance)return;this.isSVG=i instanceof SVGElement&&i.tagName!=="svg",this.instance=i;const{layoutId:u,layout:c,visualElement:d}=this.options;if(d&&!d.current&&d.mount(i),this.root.nodes.add(this),(l=this.parent)===null||l===void 0||l.children.add(this),this.elementId&&this.root.potentialNodes.delete(this.elementId),s&&(c||u)&&(this.isLayoutDirty=!0),e){let f;const p=()=>this.root.updateBlockedByResize=!1;e(i,()=>{this.root.updateBlockedByResize=!0,f&&f(),f=Ay(p,250),wa.hasAnimatedSinceResize&&(wa.hasAnimatedSinceResize=!1,this.nodes.forEach(g1))})}u&&this.root.registerSharedNode(u,this),this.options.animate!==!1&&d&&(u||c)&&this.addEventListener("didUpdate",({delta:f,hasLayoutChanged:p,hasRelativeTargetChanged:b,layout:v})=>{var k,g,m,h,x;if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const F=(g=(k=this.options.transition)!==null&&k!==void 0?k:d.getDefaultTransition())!==null&&g!==void 0?g:jF,{onLayoutAnimationStart:E,onLayoutAnimationComplete:A}=d.getProps(),I=!this.targetLayout||!r2(this.targetLayout,v)||b,D=!p&&b;if(((m=this.resumeFrom)===null||m===void 0?void 0:m.instance)||D||p&&(I||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(f,D);const N={...$f(F,"layout"),onPlay:E,onComplete:A};d.shouldReduceMotion&&(N.delay=0,N.type=!1),this.startAnimation(N)}else!p&&this.animationProgress===0&&g1(this),this.isLead()&&((x=(h=this.options).onExitComplete)===null||x===void 0||x.call(h));this.targetLayout=v})}unmount(){var i,s;this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this),(i=this.getStack())===null||i===void 0||i.remove(this),(s=this.parent)===null||s===void 0||s.children.delete(this),this.instance=void 0,nr.preRender(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){var i;return this.isAnimationBlocked||((i=this.parent)===null||i===void 0?void 0:i.isTreeAnimationBlocked())||!1}startUpdate(){var i;this.isUpdateBlocked()||(this.isUpdating=!0,(i=this.nodes)===null||i===void 0||i.forEach(RF),this.animationId++)}willUpdate(i=!0){var s,l,u;if(this.root.isUpdateBlocked()){(l=(s=this.options).onExitComplete)===null||l===void 0||l.call(s);return}if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let p=0;p<this.path.length;p++){const b=this.path[p];b.shouldResetTransform=!0,b.updateScroll("snapshot")}const{layoutId:c,layout:d}=this.options;if(c===void 0&&!d)return;const f=(u=this.options.visualElement)===null||u===void 0?void 0:u.getProps().transformTemplate;this.prevTransformTemplateValue=f==null?void 0:f(this.latestValues,""),this.updateSnapshot(),i&&this.notifyListeners("willUpdate")}didUpdate(){if(this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(h1);return}!this.isUpdating||(this.isUpdating=!1,this.potentialNodes.size&&(this.potentialNodes.forEach(BF),this.potentialNodes.clear()),this.nodes.forEach(qF),this.nodes.forEach(AF),this.nodes.forEach(EF),this.clearAllSnapshots(),Ku.update(),Ku.preRender(),Ku.render())}clearAllSnapshots(){this.nodes.forEach(IF),this.sharedNodes.forEach(MF)}scheduleUpdateProjection(){It.preRender(this.updateProjection,!1,!0)}scheduleCheckAfterUnmount(){It.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){var i;if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const s=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Ie(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox),(i=this.options.visualElement)===null||i===void 0||i.notify("LayoutMeasure",this.layout.layoutBox,s==null?void 0:s.layoutBox)}updateScroll(i="measure"){let s=Boolean(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===i&&(s=!1),s&&(this.scroll={animationId:this.root.animationId,phase:i,isRoot:r(this.instance),offset:n(this.instance)})}resetTransform(){var i;if(!o)return;const s=this.isLayoutDirty||this.shouldResetTransform,l=this.projectionDelta&&!n2(this.projectionDelta),u=(i=this.options.visualElement)===null||i===void 0?void 0:i.getProps().transformTemplate,c=u==null?void 0:u(this.latestValues,""),d=c!==this.prevTransformTemplateValue;s&&(l||gr(this.latestValues)||d)&&(o(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(i=!0){const s=this.measurePageBox();let l=this.removeElementScroll(s);return i&&(l=this.removeTransform(l)),OF(l),{animationId:this.root.animationId,measuredBox:s,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:i}=this.options;if(!i)return Ie();const s=i.measureViewportBox(),{scroll:l}=this.root;return l&&(jn(s.x,l.offset.x),jn(s.y,l.offset.y)),s}removeElementScroll(i){const s=Ie();jt(s,i);for(let l=0;l<this.path.length;l++){const u=this.path[l],{scroll:c,options:d}=u;if(u!==this.root&&c&&d.layoutScroll){if(c.isRoot){jt(s,i);const{scroll:f}=this.root;f&&(jn(s.x,-f.offset.x),jn(s.y,-f.offset.y))}jn(s.x,c.offset.x),jn(s.y,c.offset.y)}}return s}applyTransform(i,s=!1){const l=Ie();jt(l,i);for(let u=0;u<this.path.length;u++){const c=this.path[u];!s&&c.options.layoutScroll&&c.scroll&&c!==c.root&&Yr(l,{x:-c.scroll.offset.x,y:-c.scroll.offset.y}),gr(c.latestValues)&&Yr(l,c.latestValues)}return gr(this.latestValues)&&Yr(l,this.latestValues),l}removeTransform(i){var s;const l=Ie();jt(l,i);for(let u=0;u<this.path.length;u++){const c=this.path[u];if(!c.instance||!gr(c.latestValues))continue;td(c.latestValues)&&c.updateSnapshot();const d=Ie(),f=c.measurePageBox();jt(d,f),u1(l,c.latestValues,(s=c.snapshot)===null||s===void 0?void 0:s.layoutBox,d)}return gr(this.latestValues)&&u1(l,this.latestValues),l}setTargetDelta(i){this.targetDelta=i,this.isProjectionDirty=!0,this.root.scheduleUpdateProjection()}setOptions(i){this.options={...this.options,...i,crossfade:i.crossfade!==void 0?i.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}resolveTargetDelta(){var i;const s=this.getLead();if(this.isProjectionDirty||(this.isProjectionDirty=s.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=s.isTransformDirty),!this.isProjectionDirty&&!this.attemptToResolveRelativeTarget)return;const{layout:l,layoutId:u}=this.options;if(!(!this.layout||!(l||u))){if(!this.targetDelta&&!this.relativeTarget){const c=this.getClosestProjectingParent();c&&c.layout?(this.relativeParent=c,this.relativeTarget=Ie(),this.relativeTargetOrigin=Ie(),_a(this.relativeTargetOrigin,this.layout.layoutBox,c.layout.layoutBox),jt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Ie(),this.targetWithTransforms=Ie()),this.relativeTarget&&this.relativeTargetOrigin&&((i=this.relativeParent)===null||i===void 0?void 0:i.target)?TT(this.target,this.relativeTarget,this.relativeParent.target):this.targetDelta?(Boolean(this.resumingFrom)?this.target=this.applyTransform(this.layout.layoutBox):jt(this.target,this.layout.layoutBox),Hy(this.target,this.targetDelta)):jt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const c=this.getClosestProjectingParent();c&&Boolean(c.resumingFrom)===Boolean(this.resumingFrom)&&!c.options.layoutScroll&&c.target?(this.relativeParent=c,this.relativeTarget=Ie(),this.relativeTargetOrigin=Ie(),_a(this.relativeTargetOrigin,this.target,c.target),jt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||td(this.parent.latestValues)||Wy(this.parent.latestValues)))return(this.parent.relativeTarget||this.parent.targetDelta)&&this.parent.layout?this.parent:this.parent.getClosestProjectingParent()}calcProjection(){var i;const{isProjectionDirty:s,isTransformDirty:l}=this;this.isProjectionDirty=this.isTransformDirty=!1;const u=this.getLead(),c=Boolean(this.resumingFrom)||this!==u;let d=!0;if(s&&(d=!1),c&&l&&(d=!1),d)return;const{layout:f,layoutId:p}=this.options;if(this.isTreeAnimating=Boolean(((i=this.parent)===null||i===void 0?void 0:i.isTreeAnimating)||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(f||p))return;jt(this.layoutCorrected,this.layout.layoutBox),RT(this.layoutCorrected,this.treeScale,this.path,c);const{target:b}=u;if(!b)return;this.projectionDelta||(this.projectionDelta=Ta(),this.projectionDeltaWithTransform=Ta());const v=this.treeScale.x,k=this.treeScale.y,g=this.projectionTransform;ka(this.projectionDelta,this.layoutCorrected,b,this.latestValues),this.projectionTransform=f1(this.projectionDelta,this.treeScale),(this.projectionTransform!==g||this.treeScale.x!==v||this.treeScale.y!==k)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",b))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(i=!0){var s,l,u;(l=(s=this.options).scheduleRender)===null||l===void 0||l.call(s),i&&((u=this.getStack())===null||u===void 0||u.scheduleRender()),this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(i,s=!1){var l,u;const c=this.snapshot,d=(c==null?void 0:c.latestValues)||{},f={...this.latestValues},p=Ta();this.relativeTarget=this.relativeTargetOrigin=void 0,this.attemptToResolveRelativeTarget=!s;const b=Ie(),v=(c==null?void 0:c.source)!==((l=this.layout)===null||l===void 0?void 0:l.source),k=(((u=this.getStack())===null||u===void 0?void 0:u.members.length)||0)<=1,g=Boolean(v&&!k&&this.options.crossfade===!0&&!this.path.some(NF));this.animationProgress=0,this.mixTargetDelta=m=>{var h;const x=m/1e3;y1(p.x,i.x,x),y1(p.y,i.y,x),this.setTargetDelta(p),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&((h=this.relativeParent)===null||h===void 0?void 0:h.layout)&&(_a(b,this.layout.layoutBox,this.relativeParent.layout.layoutBox),VF(this.relativeTarget,this.relativeTargetOrigin,b,x)),v&&(this.animationValues=f,bF(f,d,this.latestValues,x,g,k)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=x},this.mixTargetDelta(0)}startAnimation(i){var s,l;this.notifyListeners("animationStart"),(s=this.currentAnimation)===null||s===void 0||s.stop(),this.resumingFrom&&((l=this.resumingFrom.currentAnimation)===null||l===void 0||l.stop()),this.pendingAnimation&&(nr.update(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=It.update(()=>{wa.hasAnimatedSinceResize=!0,this.currentAnimation=gF(0,m1,{...i,onUpdate:u=>{var c;this.mixTargetDelta(u),(c=i.onUpdate)===null||c===void 0||c.call(i,u)},onComplete:()=>{var u;(u=i.onComplete)===null||u===void 0||u.call(i),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){var i;this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0),(i=this.getStack())===null||i===void 0||i.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){var i;this.currentAnimation&&((i=this.mixTargetDelta)===null||i===void 0||i.call(this,m1),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const i=this.getLead();let{targetWithTransforms:s,target:l,layout:u,latestValues:c}=i;if(!(!s||!l||!u)){if(this!==i&&this.layout&&u&&a2(this.options.animationType,this.layout.layoutBox,u.layoutBox)){l=this.target||Ie();const d=wt(this.layout.layoutBox.x);l.x.min=i.target.x.min,l.x.max=l.x.min+d;const f=wt(this.layout.layoutBox.y);l.y.min=i.target.y.min,l.y.max=l.y.min+f}jt(s,l),Yr(s,c),ka(this.projectionDeltaWithTransform,this.layoutCorrected,s,c)}}registerSharedNode(i,s){var l,u,c;this.sharedNodes.has(i)||this.sharedNodes.set(i,new kF),this.sharedNodes.get(i).add(s),s.promote({transition:(l=s.options.initialPromotionConfig)===null||l===void 0?void 0:l.transition,preserveFollowOpacity:(c=(u=s.options.initialPromotionConfig)===null||u===void 0?void 0:u.shouldPreserveFollowOpacity)===null||c===void 0?void 0:c.call(u,s)})}isLead(){const i=this.getStack();return i?i.lead===this:!0}getLead(){var i;const{layoutId:s}=this.options;return s?((i=this.getStack())===null||i===void 0?void 0:i.lead)||this:this}getPrevLead(){var i;const{layoutId:s}=this.options;return s?(i=this.getStack())===null||i===void 0?void 0:i.prevLead:void 0}getStack(){const{layoutId:i}=this.options;if(i)return this.root.sharedNodes.get(i)}promote({needsReset:i,transition:s,preserveFollowOpacity:l}={}){const u=this.getStack();u&&u.promote(this,l),i&&(this.projectionDelta=void 0,this.needsReset=!0),s&&this.setOptions({transition:s})}relegate(){const i=this.getStack();return i?i.relegate(this):!1}resetRotation(){const{visualElement:i}=this.options;if(!i)return;let s=!1;const{latestValues:l}=i;if((l.rotate||l.rotateX||l.rotateY||l.rotateZ)&&(s=!0),!s)return;const u={};for(let c=0;c<p1.length;c++){const d="rotate"+p1[c];l[d]&&(u[d]=l[d],i.setStaticValue(d,0))}i==null||i.render();for(const c in u)i.setStaticValue(c,u[c]);i.scheduleRender()}getProjectionStyles(i={}){var s,l,u;const c={};if(!this.instance||this.isSVG)return c;if(this.isVisible)c.visibility="";else return{visibility:"hidden"};const d=(s=this.options.visualElement)===null||s===void 0?void 0:s.getProps().transformTemplate;if(this.needsReset)return this.needsReset=!1,c.opacity="",c.pointerEvents=xs(i.pointerEvents)||"",c.transform=d?d(this.latestValues,""):"none",c;const f=this.getLead();if(!this.projectionDelta||!this.layout||!f.target){const k={};return this.options.layoutId&&(k.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,k.pointerEvents=xs(i.pointerEvents)||""),this.hasProjected&&!gr(this.latestValues)&&(k.transform=d?d({},""):"none",this.hasProjected=!1),k}const p=f.animationValues||f.latestValues;this.applyTransformsToTarget(),c.transform=f1(this.projectionDeltaWithTransform,this.treeScale,p),d&&(c.transform=d(p,c.transform));const{x:b,y:v}=this.projectionDelta;c.transformOrigin=`${b.origin*100}% ${v.origin*100}% 0`,f.animationValues?c.opacity=f===this?(u=(l=p.opacity)!==null&&l!==void 0?l:this.latestValues.opacity)!==null&&u!==void 0?u:1:this.preserveOpacity?this.latestValues.opacity:p.opacityExit:c.opacity=f===this?p.opacity!==void 0?p.opacity:"":p.opacityExit!==void 0?p.opacityExit:0;for(const k in js){if(p[k]===void 0)continue;const{correct:g,applyTo:m}=js[k],h=g(p[k],f);if(m){const x=m.length;for(let F=0;F<x;F++)c[m[F]]=h}else c[k]=h}return this.options.layoutId&&(c.pointerEvents=f===this?xs(i.pointerEvents)||"":"none"),c}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(i=>{var s;return(s=i.currentAnimation)===null||s===void 0?void 0:s.stop()}),this.root.nodes.forEach(h1),this.root.sharedNodes.clear()}}}function AF(e){e.updateLayout()}function EF(e){var t,n,r;const o=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&o&&e.hasListeners("didUpdate")){const{layoutBox:a,measuredBox:i}=e.layout,{animationType:s}=e.options,l=o.source!==e.layout.source;s==="size"?tn(p=>{const b=l?o.measuredBox[p]:o.layoutBox[p],v=wt(b);b.min=a[p].min,b.max=b.min+v}):a2(s,o.layoutBox,a)&&tn(p=>{const b=l?o.measuredBox[p]:o.layoutBox[p],v=wt(a[p]);b.max=b.min+v});const u=Ta();ka(u,a,o.layoutBox);const c=Ta();l?ka(c,e.applyTransform(i,!0),o.measuredBox):ka(c,a,o.layoutBox);const d=!n2(u);let f=!1;if(!e.resumeFrom){const p=e.getClosestProjectingParent();if(p&&!p.resumeFrom){const{snapshot:b,layout:v}=p;if(b&&v){const k=Ie();_a(k,o.layoutBox,b.layoutBox);const g=Ie();_a(g,a,v.layoutBox),r2(k,g)||(f=!0)}}}e.notifyListeners("didUpdate",{layout:a,snapshot:o,delta:c,layoutDelta:u,hasLayoutChanged:d,hasRelativeTargetChanged:f})}else e.isLead()&&((r=(n=e.options).onExitComplete)===null||r===void 0||r.call(n));e.options.transition=void 0}function PF(e){e.isProjectionDirty||(e.isProjectionDirty=Boolean(e.parent&&e.parent.isProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=Boolean(e.parent&&e.parent.isTransformDirty))}function IF(e){e.clearSnapshot()}function h1(e){e.clearMeasurements()}function qF(e){const{visualElement:t}=e.options;t!=null&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function g1(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0}function LF(e){e.resolveTargetDelta()}function zF(e){e.calcProjection()}function RF(e){e.resetRotation()}function MF(e){e.removeLeadSnapshot()}function y1(e,t,n){e.translate=xe(t.translate,0,n),e.scale=xe(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function b1(e,t,n,r){e.min=xe(t.min,n.min,r),e.max=xe(t.max,n.max,r)}function VF(e,t,n,r){b1(e.x,t.x,n.x,r),b1(e.y,t.y,n.y,r)}function NF(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const jF={duration:.45,ease:[.4,0,.1,1]};function BF(e,t){let n=e.root;for(let a=e.path.length-1;a>=0;a--)if(Boolean(e.path[a].instance)){n=e.path[a];break}const o=(n&&n!==e.root?n.instance:document).querySelector(`[data-projection-id="${t}"]`);o&&e.mount(o,!0)}function v1(e){e.min=Math.round(e.min),e.max=Math.round(e.max)}function OF(e){v1(e.x),v1(e.y)}function a2(e,t,n){return e==="position"||e==="preserve-aspect"&&!Jc(d1(t),d1(n),.2)}const DF=o2({attachResizeListener:(e,t)=>Hl(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),tc={current:void 0},$F=o2({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!tc.current){const e=new DF(0,{});e.mount(window),e.setOptions({layoutScroll:!0}),tc.current=e}return tc.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>Boolean(window.getComputedStyle(e).position==="fixed")}),WF={...ST,...Yk,...WT,...hF},HF=DC((e,t)=>Fk(e,t,WF,cF,$F));function i2(){const e=_.exports.useRef(!1);return Ns(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function UF(){const e=i2(),[t,n]=_.exports.useState(0),r=_.exports.useCallback(()=>{e.current&&n(t+1)},[t]);return[_.exports.useCallback(()=>It.postRender(r),[r]),t]}class GF extends _.exports.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=n.offsetHeight||0,r.width=n.offsetWidth||0,r.top=n.offsetTop,r.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function KF({children:e,isPresent:t}){const n=_.exports.useId(),r=_.exports.useRef(null),o=_.exports.useRef({width:0,height:0,top:0,left:0});return _.exports.useInsertionEffect(()=>{const{width:a,height:i,top:s,left:l}=o.current;if(t||!r.current||!a||!i)return;r.current.dataset.motionPopId=n;const u=document.createElement("style");return document.head.appendChild(u),u.sheet&&u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${a}px !important;
            height: ${i}px !important;
            top: ${s}px !important;
            left: ${l}px !important;
          }
        `),()=>{document.head.removeChild(u)}},[t]),w(GF,{isPresent:t,childRef:r,sizeRef:o,children:_.exports.cloneElement(e,{ref:r})})}const nc=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:o,presenceAffectsLayout:a,mode:i})=>{const s=Wl(ZF),l=_.exports.useId(),u=_.exports.useMemo(()=>({id:l,initial:t,isPresent:n,custom:o,onExitComplete:c=>{s.set(c,!0);for(const d of s.values())if(!d)return;r&&r()},register:c=>(s.set(c,!1),()=>s.delete(c))}),a?void 0:[n]);return _.exports.useMemo(()=>{s.forEach((c,d)=>s.set(d,!1))},[n]),_.exports.useEffect(()=>{!n&&!s.size&&r&&r()},[n]),i==="popLayout"&&(e=w(KF,{isPresent:n,children:e})),w(No.Provider,{value:u,children:e})};function ZF(){return new Map}const Gr=e=>e.key||"";function YF(e,t){e.forEach(n=>{const r=Gr(n);t.set(r,n)})}function XF(e){const t=[];return _.exports.Children.forEach(e,n=>{_.exports.isValidElement(n)&&t.push(n)}),t}const QF=({children:e,custom:t,initial:n=!0,onExitComplete:r,exitBeforeEnter:o,presenceAffectsLayout:a=!0,mode:i="sync"})=>{o&&(i="wait",by(!1,"Replace exitBeforeEnter with mode='wait'"));let[s]=UF();const l=_.exports.useContext(_f).forceRender;l&&(s=l);const u=i2(),c=XF(e);let d=c;const f=new Set,p=_.exports.useRef(d),b=_.exports.useRef(new Map).current,v=_.exports.useRef(!0);if(Ns(()=>{v.current=!1,YF(c,b),p.current=d}),zf(()=>{v.current=!0,b.clear(),f.clear()}),v.current)return w(Pe,{children:d.map(h=>w(nc,{isPresent:!0,initial:n?void 0:!1,presenceAffectsLayout:a,mode:i,children:h},Gr(h)))});d=[...d];const k=p.current.map(Gr),g=c.map(Gr),m=k.length;for(let h=0;h<m;h++){const x=k[h];g.indexOf(x)===-1&&f.add(x)}return i==="wait"&&f.size&&(d=[]),f.forEach(h=>{if(g.indexOf(h)!==-1)return;const x=b.get(h);if(!x)return;const F=k.indexOf(h),E=()=>{b.delete(h),f.delete(h);const A=p.current.findIndex(I=>I.key===h);if(p.current.splice(A,1),!f.size){if(p.current=c,u.current===!1)return;s(),r&&r()}};d.splice(F,0,w(nc,{isPresent:!1,onExitComplete:E,custom:t,presenceAffectsLayout:a,mode:i,children:x},Gr(x)))}),d=d.map(h=>{const x=h.key;return f.has(x)?h:w(nc,{isPresent:!0,presenceAffectsLayout:a,mode:i,children:h},Gr(h))}),yy!=="production"&&i==="wait"&&d.length>1&&console.warn(`You're attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.`),w(Pe,{children:f.size?d:d.map(h=>_.exports.cloneElement(h))})};var JF=(...e)=>e.filter(Boolean).join(" "),eA=q9({"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}}),Kf=M((e,t)=>{const n=dt("Spinner",e),{label:r="Loading...",thickness:o="2px",speed:a="0.45s",emptyColor:i="transparent",className:s,...l}=ke(e),u=JF("chakra-spinner",s),c={display:"inline-block",borderColor:"currentColor",borderStyle:"solid",borderRadius:"99999px",borderWidth:o,borderBottomColor:i,borderLeftColor:i,animation:`${eA} ${a} linear infinite`,...n};return q.createElement(V.div,{ref:t,__css:c,className:u,...l},r&&q.createElement(V.span,{srOnly:!0},r))});Kf.displayName="Spinner";var Zl=(...e)=>e.filter(Boolean).join(" ");function tA(e){return w(Zt,{viewBox:"0 0 24 24",...e,children:w("path",{fill:"currentColor",d:"M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"})})}function nA(e){return w(Zt,{viewBox:"0 0 24 24",...e,children:w("path",{fill:"currentColor",d:"M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z"})})}function w1(e){return w(Zt,{viewBox:"0 0 24 24",...e,children:w("path",{fill:"currentColor",d:"M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"})})}var[rA,oA]=Rt({name:"AlertContext",hookName:"useAlertContext",providerName:"<Alert />"}),[aA,Zf]=Rt({name:"AlertStylesContext",hookName:"useAlertStyles",providerName:"<Alert />"}),s2={info:{icon:nA,colorScheme:"blue"},warning:{icon:w1,colorScheme:"orange"},success:{icon:tA,colorScheme:"green"},error:{icon:w1,colorScheme:"red"},loading:{icon:Kf,colorScheme:"blue"}};function iA(e){return s2[e].colorScheme}function sA(e){return s2[e].icon}var l2=M(function(t,n){var u;const{status:r="info",addRole:o=!0,...a}=ke(t),i=(u=t.colorScheme)!=null?u:iA(r),s=ir("Alert",{...t,colorScheme:i}),l={width:"100%",display:"flex",alignItems:"center",position:"relative",overflow:"hidden",...s.container};return q.createElement(rA,{value:{status:r}},q.createElement(aA,{value:s},q.createElement(V.div,{role:o?"alert":void 0,ref:n,...a,className:Zl("chakra-alert",t.className),__css:l})))});l2.displayName="Alert";var u2=M(function(t,n){const r=Zf(),o={display:"inline",...r.description};return q.createElement(V.div,{ref:n,...t,className:Zl("chakra-alert__desc",t.className),__css:o})});u2.displayName="AlertDescription";function c2(e){const{status:t}=oA(),n=sA(t),r=Zf(),o=t==="loading"?r.spinner:r.icon;return q.createElement(V.span,{display:"inherit",...e,className:Zl("chakra-alert__icon",e.className),__css:o},e.children||w(n,{h:"100%",w:"100%"}))}c2.displayName="AlertIcon";var d2=M(function(t,n){const r=Zf();return q.createElement(V.div,{ref:n,...t,className:Zl("chakra-alert__title",t.className),__css:r.title})});d2.displayName="AlertTitle";function lA(e,t=[]){const n=Object.assign({},e);for(const r of t)r in n&&delete n[r];return n}function uA(e){const{loading:t,src:n,srcSet:r,onLoad:o,onError:a,crossOrigin:i,sizes:s,ignoreFallback:l}=e,[u,c]=_.exports.useState("pending");_.exports.useEffect(()=>{c(n?"loading":"pending")},[n]);const d=_.exports.useRef(),f=_.exports.useCallback(()=>{if(!n)return;p();const b=new Image;b.src=n,i&&(b.crossOrigin=i),r&&(b.srcset=r),s&&(b.sizes=s),t&&(b.loading=t),b.onload=v=>{p(),c("loaded"),o==null||o(v)},b.onerror=v=>{p(),c("failed"),a==null||a(v)},d.current=b},[n,i,r,s,o,a,t]),p=()=>{d.current&&(d.current.onload=null,d.current.onerror=null,d.current=null)};return Va(()=>{if(!l)return u==="loading"&&f(),()=>{p()}},[u,f,l]),l?"loaded":u}var cA=(e,t)=>e!=="loaded"&&t==="beforeLoadOrError"||e==="failed"&&t==="onError",Ys=M(function(t,n){const{htmlWidth:r,htmlHeight:o,alt:a,...i}=t;return w("img",{width:r,height:o,ref:n,alt:a,...i})});Ys.displayName="NativeImage";var Yf=M(function(t,n){const{fallbackSrc:r,fallback:o,src:a,srcSet:i,align:s,fit:l,loading:u,ignoreFallback:c,crossOrigin:d,fallbackStrategy:f="beforeLoadOrError",referrerPolicy:p,...b}=t,v=r!==void 0||o!==void 0,k=u!=null||c||!v,g=uA({...t,ignoreFallback:k}),m=cA(g,f),h={ref:n,objectFit:l,objectPosition:s,...k?b:lA(b,["onError","onLoad"])};return m?o||q.createElement(V.img,{as:Ys,className:"chakra-image__placeholder",src:r,...h}):q.createElement(V.img,{as:Ys,src:a,srcSet:i,crossOrigin:d,loading:u,referrerPolicy:p,className:"chakra-image",...h})});Yf.displayName="Image";M((e,t)=>q.createElement(V.img,{ref:t,as:Ys,className:"chakra-image",...e}));function Xf(e){return _.exports.Children.toArray(e).filter(t=>_.exports.isValidElement(t))}var Yl=(...e)=>e.filter(Boolean).join(" "),x1=e=>e?"":void 0,[dA,fA]=Rt({strict:!1,name:"ButtonGroupContext"});function id(e){const{children:t,className:n,...r}=e,o=_.exports.isValidElement(t)?_.exports.cloneElement(t,{"aria-hidden":!0,focusable:!1}):t,a=Yl("chakra-button__icon",n);return q.createElement(V.span,{display:"inline-flex",alignSelf:"center",flexShrink:0,...r,className:a},o)}id.displayName="ButtonIcon";function sd(e){const{label:t,placement:n,spacing:r="0.5rem",children:o=w(Kf,{color:"currentColor",width:"1em",height:"1em"}),className:a,__css:i,...s}=e,l=Yl("chakra-button__spinner",a),u=n==="start"?"marginEnd":"marginStart",c=_.exports.useMemo(()=>({display:"flex",alignItems:"center",position:t?"relative":"absolute",[u]:t?r:0,fontSize:"1em",lineHeight:"normal",...i}),[i,t,u,r]);return q.createElement(V.div,{className:l,...s,__css:c},o)}sd.displayName="ButtonSpinner";function pA(e){const[t,n]=_.exports.useState(!e);return{ref:_.exports.useCallback(a=>{!a||n(a.tagName==="BUTTON")},[]),type:t?"button":void 0}}var Qf=M((e,t)=>{const n=fA(),r=dt("Button",{...n,...e}),{isDisabled:o=n==null?void 0:n.isDisabled,isLoading:a,isActive:i,children:s,leftIcon:l,rightIcon:u,loadingText:c,iconSpacing:d="0.5rem",type:f,spinner:p,spinnerPlacement:b="start",className:v,as:k,...g}=ke(e),m=_.exports.useMemo(()=>{const E={...r==null?void 0:r._focus,zIndex:1};return{display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",...r,...!!n&&{_focus:E}}},[r,n]),{ref:h,type:x}=pA(k),F={rightIcon:u,leftIcon:l,iconSpacing:d,children:s};return q.createElement(V.button,{disabled:o||a,ref:FC(t,h),as:k,type:f!=null?f:x,"data-active":x1(i),"data-loading":x1(a),__css:m,className:Yl("chakra-button",v),...g},a&&b==="start"&&w(sd,{className:"chakra-button__spinner--start",label:c,placement:"start",spacing:d,children:p}),a?c||q.createElement(V.span,{opacity:0},w(S1,{...F})):w(S1,{...F}),a&&b==="end"&&w(sd,{className:"chakra-button__spinner--end",label:c,placement:"end",spacing:d,children:p}))});Qf.displayName="Button";function S1(e){const{leftIcon:t,rightIcon:n,children:r,iconSpacing:o}=e;return B(Pe,{children:[t&&w(id,{marginEnd:o,children:t}),r,n&&w(id,{marginStart:o,children:n})]})}var mA={horizontal:{"> *:first-of-type:not(:last-of-type)":{borderEndRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderStartRadius:0}},vertical:{"> *:first-of-type:not(:last-of-type)":{borderBottomRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderTopRadius:0}}},hA={horizontal:e=>({"& > *:not(style) ~ *:not(style)":{marginStart:e}}),vertical:e=>({"& > *:not(style) ~ *:not(style)":{marginTop:e}})},gA=M(function(t,n){const{size:r,colorScheme:o,variant:a,className:i,spacing:s="0.5rem",isAttached:l,isDisabled:u,orientation:c="horizontal",...d}=t,f=Yl("chakra-button__group",i),p=_.exports.useMemo(()=>({size:r,colorScheme:o,variant:a,isDisabled:u}),[r,o,a,u]);let b={display:"inline-flex",...l?mA[c]:hA[c](s)};const v=c==="vertical";return q.createElement(dA,{value:p},q.createElement(V.div,{ref:n,role:"group",__css:b,className:f,"data-attached":l?"":void 0,"data-orientation":c,flexDir:v?"column":void 0,...d}))});gA.displayName="ButtonGroup";var yA=M((e,t)=>{const{icon:n,children:r,isRound:o,"aria-label":a,...i}=e,s=n||r,l=_.exports.isValidElement(s)?_.exports.cloneElement(s,{"aria-hidden":!0,focusable:!1}):null;return w(Qf,{padding:"0",borderRadius:o?"full":void 0,ref:t,"aria-label":a,...i,children:l})});yA.displayName="IconButton";var Xl=(...e)=>e.filter(Boolean).join(" "),[bA,Jf]=Rt({name:"CardStylesContext",hookName:"useCardStyles",providerName:"<Card />"}),vA=M(function(t,n){const{className:r,children:o,direction:a="column",justify:i,align:s,...l}=ke(t),u=ir("Card",t);return q.createElement(V.div,{ref:n,className:Xl("chakra-card",r),__css:{display:"flex",flexDirection:a,justifyContent:i,alignItems:s,position:"relative",minWidth:0,wordWrap:"break-word",...u.container},...l},w(bA,{value:u,children:o}))});M(function(t,n){const{className:r,...o}=t,a=Jf();return q.createElement(V.div,{ref:n,className:Xl("chakra-card__header",r),__css:a.header,...o})});var wA=M(function(t,n){const{className:r,...o}=t,a=Jf();return q.createElement(V.div,{ref:n,className:Xl("chakra-card__body",r),__css:a.body,...o})});M(function(t,n){const{className:r,justify:o,...a}=t,i=Jf();return q.createElement(V.div,{ref:n,className:Xl("chakra-card__footer",r),__css:{...i.footer,display:"flex",justifyContent:o},...a})});var Bo=(...e)=>e.filter(Boolean).join(" "),Ki=e=>e?"":void 0,rc=e=>e?!0:void 0;function C1(...e){return function(n){e.some(r=>(r==null||r(n),n==null?void 0:n.defaultPrevented))}}var[xA,f2]=Rt({name:"FormControlStylesContext",errorMessage:`useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormControl />" `}),[SA,Oo]=Rt({strict:!1,name:"FormControlContext"});function CA(e){const{id:t,isRequired:n,isInvalid:r,isDisabled:o,isReadOnly:a,...i}=e,s=_.exports.useId(),l=t||`field-${s}`,u=`${l}-label`,c=`${l}-feedback`,d=`${l}-helptext`,[f,p]=_.exports.useState(!1),[b,v]=_.exports.useState(!1),[k,g]=_.exports.useState(!1),m=_.exports.useCallback((A={},I=null)=>({id:d,...A,ref:$c(I,D=>{!D||v(!0)})}),[d]),h=_.exports.useCallback((A={},I=null)=>{var D,N;return{...A,ref:I,"data-focus":Ki(k),"data-disabled":Ki(o),"data-invalid":Ki(r),"data-readonly":Ki(a),id:(D=A.id)!=null?D:u,htmlFor:(N=A.htmlFor)!=null?N:l}},[l,o,k,r,a,u]),x=_.exports.useCallback((A={},I=null)=>({id:c,...A,ref:$c(I,D=>{!D||p(!0)}),"aria-live":"polite"}),[c]),F=_.exports.useCallback((A={},I=null)=>({...A,...i,ref:I,role:"group"}),[i]),E=_.exports.useCallback((A={},I=null)=>({...A,ref:I,role:"presentation","aria-hidden":!0,children:A.children||"*"}),[]);return{isRequired:!!n,isInvalid:!!r,isReadOnly:!!a,isDisabled:!!o,isFocused:!!k,onFocus:()=>g(!0),onBlur:()=>g(!1),hasFeedbackText:f,setHasFeedbackText:p,hasHelpText:b,setHasHelpText:v,id:l,labelId:u,feedbackId:c,helpTextId:d,htmlProps:i,getHelpTextProps:m,getErrorMessageProps:x,getRootProps:F,getLabelProps:h,getRequiredIndicatorProps:E}}var kA=M(function(t,n){const r=ir("Form",t),o=ke(t),{getRootProps:a,htmlProps:i,...s}=CA(o),l=Bo("chakra-form-control",t.className);return q.createElement(SA,{value:s},q.createElement(xA,{value:r},q.createElement(V.div,{...a({},n),className:l,__css:r.container})))});kA.displayName="FormControl";var _A=M(function(t,n){const r=Oo(),o=f2(),a=Bo("chakra-form__helper-text",t.className);return q.createElement(V.div,{...r==null?void 0:r.getHelpTextProps(t,n),__css:o.helperText,className:a})});_A.displayName="FormHelperText";function TA(e){const{isDisabled:t,isInvalid:n,isReadOnly:r,isRequired:o,...a}=FA(e);return{...a,disabled:t,readOnly:r,required:o,"aria-invalid":rc(n),"aria-required":rc(o),"aria-readonly":rc(r)}}function FA(e){var b,v,k;const t=Oo(),{id:n,disabled:r,readOnly:o,required:a,isRequired:i,isInvalid:s,isReadOnly:l,isDisabled:u,onFocus:c,onBlur:d,...f}=e,p=e["aria-describedby"]?[e["aria-describedby"]]:[];return(t==null?void 0:t.hasFeedbackText)&&(t==null?void 0:t.isInvalid)&&p.push(t.feedbackId),t!=null&&t.hasHelpText&&p.push(t.helpTextId),{...f,"aria-describedby":p.join(" ")||void 0,id:n!=null?n:t==null?void 0:t.id,isDisabled:(b=r!=null?r:u)!=null?b:t==null?void 0:t.isDisabled,isReadOnly:(v=o!=null?o:l)!=null?v:t==null?void 0:t.isReadOnly,isRequired:(k=a!=null?a:i)!=null?k:t==null?void 0:t.isRequired,isInvalid:s!=null?s:t==null?void 0:t.isInvalid,onFocus:C1(t==null?void 0:t.onFocus,c),onBlur:C1(t==null?void 0:t.onBlur,d)}}var[AA,EA]=Rt({name:"FormErrorStylesContext",errorMessage:`useFormErrorStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormError />" `}),PA=M((e,t)=>{const n=ir("FormError",e),r=ke(e),o=Oo();return o!=null&&o.isInvalid?q.createElement(AA,{value:n},q.createElement(V.div,{...o==null?void 0:o.getErrorMessageProps(r,t),className:Bo("chakra-form__error-message",e.className),__css:{display:"flex",alignItems:"center",...n.text}})):null});PA.displayName="FormErrorMessage";var IA=M((e,t)=>{const n=EA(),r=Oo();if(!(r!=null&&r.isInvalid))return null;const o=Bo("chakra-form__error-icon",e.className);return w(Zt,{ref:t,"aria-hidden":!0,...e,__css:n.icon,className:o,children:w("path",{fill:"currentColor",d:"M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"})})});IA.displayName="FormErrorIcon";var qA=M(function(t,n){var f;const r=dt("FormLabel",t),o=ke(t),{className:a,children:i,requiredIndicator:s=w(p2,{}),optionalIndicator:l=null,...u}=o,c=Oo(),d=(f=c==null?void 0:c.getLabelProps(u,n))!=null?f:{ref:n,...u};return q.createElement(V.label,{...d,className:Bo("chakra-form__label",o.className),__css:{display:"block",textAlign:"start",...r}},i,c!=null&&c.isRequired?s:l)});qA.displayName="FormLabel";var p2=M(function(t,n){const r=Oo(),o=f2();if(!(r!=null&&r.isRequired))return null;const a=Bo("chakra-form__required-indicator",t.className);return q.createElement(V.span,{...r==null?void 0:r.getRequiredIndicatorProps(t,n),__css:o.requiredIndicator,className:a})});p2.displayName="RequiredIndicator";function k1(e,t){const n=_.exports.useRef(!1),r=_.exports.useRef(!1);_.exports.useEffect(()=>{if(n.current&&r.current)return e();r.current=!0},t),_.exports.useEffect(()=>(n.current=!0,()=>{n.current=!1}),[])}function LA(e){return w(Zt,{focusable:"false","aria-hidden":!0,...e,children:w("path",{fill:"currentColor",d:"M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"})})}var m2=M(function(t,n){const r=dt("CloseButton",t),{children:o,isDisabled:a,__css:i,...s}=ke(t),l={outline:0,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0};return q.createElement(V.button,{type:"button","aria-label":"Close",ref:n,disabled:a,__css:{...l,...r,...i},...s},o||w(LA,{width:"1em",height:"1em"}))});m2.displayName="CloseButton";var h2=`
  :root {
    --chakra-vh: 100vh;
  }

  @supports (height: -webkit-fill-available) {
    :root {
      --chakra-vh: -webkit-fill-available;
    }
  }

  @supports (height: -moz-fill-available) {
    :root {
      --chakra-vh: -moz-fill-available;
    }
  }

  @supports (height: 100dvh) {
    :root {
      --chakra-vh: 100dvh;
    }
  }
`,zA=()=>w(Nl,{styles:h2}),RA=()=>w(Nl,{styles:`
      html {
        line-height: 1.5;
        -webkit-text-size-adjust: 100%;
        font-family: system-ui, sans-serif;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        -moz-osx-font-smoothing: grayscale;
        touch-action: manipulation;
      }

      body {
        position: relative;
        min-height: 100%;
        font-feature-settings: 'kern';
      }

      *,
      *::before,
      *::after {
        border-width: 0;
        border-style: solid;
        box-sizing: border-box;
      }

      main {
        display: block;
      }

      hr {
        border-top-width: 1px;
        box-sizing: content-box;
        height: 0;
        overflow: visible;
      }

      pre,
      code,
      kbd,
      samp {
        font-family: SFMono-Regular,  Menlo, Monaco, Consolas, monospace;
        font-size: 1em;
      }

      a {
        background-color: transparent;
        color: inherit;
        text-decoration: inherit;
      }

      abbr[title] {
        border-bottom: none;
        text-decoration: underline;
        -webkit-text-decoration: underline dotted;
        text-decoration: underline dotted;
      }

      b,
      strong {
        font-weight: bold;
      }

      small {
        font-size: 80%;
      }

      sub,
      sup {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
      }

      sub {
        bottom: -0.25em;
      }

      sup {
        top: -0.5em;
      }

      img {
        border-style: none;
      }

      button,
      input,
      optgroup,
      select,
      textarea {
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
      }

      button,
      input {
        overflow: visible;
      }

      button,
      select {
        text-transform: none;
      }

      button::-moz-focus-inner,
      [type="button"]::-moz-focus-inner,
      [type="reset"]::-moz-focus-inner,
      [type="submit"]::-moz-focus-inner {
        border-style: none;
        padding: 0;
      }

      fieldset {
        padding: 0.35em 0.75em 0.625em;
      }

      legend {
        box-sizing: border-box;
        color: inherit;
        display: table;
        max-width: 100%;
        padding: 0;
        white-space: normal;
      }

      progress {
        vertical-align: baseline;
      }

      textarea {
        overflow: auto;
      }

      [type="checkbox"],
      [type="radio"] {
        box-sizing: border-box;
        padding: 0;
      }

      [type="number"]::-webkit-inner-spin-button,
      [type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none !important;
      }

      input[type="number"] {
        -moz-appearance: textfield;
      }

      [type="search"] {
        -webkit-appearance: textfield;
        outline-offset: -2px;
      }

      [type="search"]::-webkit-search-decoration {
        -webkit-appearance: none !important;
      }

      ::-webkit-file-upload-button {
        -webkit-appearance: button;
        font: inherit;
      }

      details {
        display: block;
      }

      summary {
        display: list-item;
      }

      template {
        display: none;
      }

      [hidden] {
        display: none !important;
      }

      body,
      blockquote,
      dl,
      dd,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      hr,
      figure,
      p,
      pre {
        margin: 0;
      }

      button {
        background: transparent;
        padding: 0;
      }

      fieldset {
        margin: 0;
        padding: 0;
      }

      ol,
      ul {
        margin: 0;
        padding: 0;
      }

      textarea {
        resize: vertical;
      }

      button,
      [role="button"] {
        cursor: pointer;
      }

      button::-moz-focus-inner {
        border: 0 !important;
      }

      table {
        border-collapse: collapse;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-size: inherit;
        font-weight: inherit;
      }

      button,
      input,
      optgroup,
      select,
      textarea {
        padding: 0;
        line-height: inherit;
        color: inherit;
      }

      img,
      svg,
      video,
      canvas,
      audio,
      iframe,
      embed,
      object {
        display: block;
      }

      img,
      video {
        max-width: 100%;
        height: auto;
      }

      [data-js-focus-visible] :focus:not([data-focus-visible-added]):not([data-focus-visible-disabled]) {
        outline: none;
        box-shadow: none;
      }

      select::-ms-expand {
        display: none;
      }

      ${h2}
    `});function e0(e){const t=Object.assign({},e);for(let n in t)t[n]===void 0&&delete t[n];return t}var t0=M(function(t,n){const{htmlSize:r,...o}=t,a=ir("Input",o),i=ke(o),s=TA(i),l=_e("chakra-input",t.className);return q.createElement(V.input,{size:r,...s,__css:a.field,ref:n,className:l})});t0.displayName="Input";t0.id="Input";var[MA,g2]=Rt({name:"InputGroupStylesContext",errorMessage:`useInputGroupStyles returned is 'undefined'. Seems you forgot to wrap the components in "<InputGroup />" `}),y2=M(function(t,n){const r=ir("Input",t),{children:o,className:a,...i}=ke(t),s=_e("chakra-input__group",a),l={},u=Xf(o),c=r.field;u.forEach(f=>{var p,b;!r||(c&&f.type.id==="InputLeftElement"&&(l.paddingStart=(p=c.height)!=null?p:c.h),c&&f.type.id==="InputRightElement"&&(l.paddingEnd=(b=c.height)!=null?b:c.h),f.type.id==="InputRightAddon"&&(l.borderEndRadius=0),f.type.id==="InputLeftAddon"&&(l.borderStartRadius=0))});const d=u.map(f=>{var p,b;const v=e0({size:((p=f.props)==null?void 0:p.size)||t.size,variant:((b=f.props)==null?void 0:b.variant)||t.variant});return f.type.id!=="Input"?_.exports.cloneElement(f,v):_.exports.cloneElement(f,Object.assign(v,l,f.props))});return q.createElement(V.div,{className:s,ref:n,__css:{width:"100%",display:"flex",position:"relative"},...i},w(MA,{value:r,children:d}))});y2.displayName="InputGroup";var VA={left:{marginEnd:"-1px",borderEndRadius:0,borderEndColor:"transparent"},right:{marginStart:"-1px",borderStartRadius:0,borderStartColor:"transparent"}},NA=V("div",{baseStyle:{flex:"0 0 auto",width:"auto",display:"flex",alignItems:"center",whiteSpace:"nowrap"}}),n0=M(function(t,n){var s;const{placement:r="left",...o}=t,a=(s=VA[r])!=null?s:{},i=g2();return w(NA,{ref:n,...o,__css:{...i.addon,...a}})});n0.displayName="InputAddon";var b2=M(function(t,n){return w(n0,{ref:n,placement:"left",...t,className:_e("chakra-input__left-addon",t.className)})});b2.displayName="InputLeftAddon";b2.id="InputLeftAddon";var v2=M(function(t,n){return w(n0,{ref:n,placement:"right",...t,className:_e("chakra-input__right-addon",t.className)})});v2.displayName="InputRightAddon";v2.id="InputRightAddon";var jA=V("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",top:"0",zIndex:2}}),Ql=M(function(t,n){var u,c;const{placement:r="left",...o}=t,a=g2(),i=a.field,l={[r==="left"?"insetStart":"insetEnd"]:"0",width:(u=i==null?void 0:i.height)!=null?u:i==null?void 0:i.h,height:(c=i==null?void 0:i.height)!=null?c:i==null?void 0:i.h,fontSize:i==null?void 0:i.fontSize,...a.element};return w(jA,{ref:n,__css:l,...o})});Ql.id="InputElement";Ql.displayName="InputElement";var r0=M(function(t,n){const{className:r,...o}=t,a=_e("chakra-input__left-element",r);return w(Ql,{ref:n,placement:"left",className:a,...o})});r0.id="InputLeftElement";r0.displayName="InputLeftElement";var w2=M(function(t,n){const{className:r,...o}=t,a=_e("chakra-input__right-element",r);return w(Ql,{ref:n,placement:"right",className:a,...o})});w2.id="InputRightElement";w2.displayName="InputRightElement";function BA(e){const t=typeof e;return e!=null&&(t==="object"||t==="function")&&!Array.isArray(e)}Object.freeze(["base","sm","md","lg","xl","2xl"]);function rr(e,t){return Array.isArray(e)?e.map(n=>n===null?null:t(n)):BA(e)?Object.keys(e).reduce((n,r)=>(n[r]=t(e[r]),n),{}):e!=null?t(e):null}var OA=M(function(e,t){const{ratio:n=4/3,children:r,className:o,...a}=e,i=_.exports.Children.only(r),s=_e("chakra-aspect-ratio",o);return q.createElement(V.div,{ref:t,position:"relative",className:s,_before:{height:0,content:'""',display:"block",paddingBottom:rr(n,l=>`${1/l*100}%`)},__css:{"& > *:not(style)":{overflow:"hidden",position:"absolute",top:"0",right:"0",bottom:"0",left:"0",display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"},"& > img, & > video":{objectFit:"cover"}},...a},i)});OA.displayName="AspectRatio";var vo=M(function(t,n){const r=dt("Badge",t),{className:o,...a}=ke(t);return q.createElement(V.span,{ref:n,className:_e("chakra-badge",t.className),...a,__css:{display:"inline-block",whiteSpace:"nowrap",verticalAlign:"middle",...r}})});vo.displayName="Badge";var qe=V("div");qe.displayName="Box";var x2=M(function(t,n){const{size:r,centerContent:o=!0,...a}=t;return w(qe,{ref:n,boxSize:r,__css:{...o?{display:"flex",alignItems:"center",justifyContent:"center"}:{},flexShrink:0,flexGrow:0},...a})});x2.displayName="Square";var DA=M(function(t,n){const{size:r,...o}=t;return w(x2,{size:r,ref:n,borderRadius:"9999px",...o})});DA.displayName="Circle";var S2=V("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center"}});S2.displayName="Center";var $A={horizontal:{insetStart:"50%",transform:"translateX(-50%)"},vertical:{top:"50%",transform:"translateY(-50%)"},both:{insetStart:"50%",top:"50%",transform:"translate(-50%, -50%)"}};M(function(t,n){const{axis:r="both",...o}=t;return q.createElement(V.div,{ref:n,__css:$A[r],...o,position:"absolute"})});var WA=M(function(t,n){const r=dt("Code",t),{className:o,...a}=ke(t);return q.createElement(V.code,{ref:n,className:_e("chakra-code",t.className),...a,__css:{display:"inline-block",...r}})});WA.displayName="Code";var HA=M(function(t,n){const{className:r,centerContent:o,...a}=ke(t),i=dt("Container",t);return q.createElement(V.div,{ref:n,className:_e("chakra-container",r),...a,__css:{...i,...o&&{display:"flex",flexDirection:"column",alignItems:"center"}}})});HA.displayName="Container";var UA=M(function(t,n){const{borderLeftWidth:r,borderBottomWidth:o,borderTopWidth:a,borderRightWidth:i,borderWidth:s,borderStyle:l,borderColor:u,...c}=dt("Divider",t),{className:d,orientation:f="horizontal",__css:p,...b}=ke(t),v={vertical:{borderLeftWidth:r||i||s||"1px",height:"100%"},horizontal:{borderBottomWidth:o||a||s||"1px",width:"100%"}};return q.createElement(V.hr,{ref:n,"aria-orientation":f,...b,__css:{...c,border:"0",borderColor:u,borderStyle:l,...v[f],...p},className:_e("chakra-divider",d)})});UA.displayName="Divider";var Xa=M(function(t,n){const{direction:r,align:o,justify:a,wrap:i,basis:s,grow:l,shrink:u,...c}=t,d={display:"flex",flexDirection:r,alignItems:o,justifyContent:a,flexWrap:i,flexBasis:s,flexGrow:l,flexShrink:u};return q.createElement(V.div,{ref:n,__css:d,...c})});Xa.displayName="Flex";var C2=M(function(t,n){const{templateAreas:r,gap:o,rowGap:a,columnGap:i,column:s,row:l,autoFlow:u,autoRows:c,templateRows:d,autoColumns:f,templateColumns:p,...b}=t,v={display:"grid",gridTemplateAreas:r,gridGap:o,gridRowGap:a,gridColumnGap:i,gridAutoColumns:f,gridColumn:s,gridRow:l,gridAutoFlow:u,gridAutoRows:c,gridTemplateRows:d,gridTemplateColumns:p};return q.createElement(V.div,{ref:n,__css:v,...b})});C2.displayName="Grid";function _1(e){return rr(e,t=>t==="auto"?"auto":`span ${t}/span ${t}`)}var GA=M(function(t,n){const{area:r,colSpan:o,colStart:a,colEnd:i,rowEnd:s,rowSpan:l,rowStart:u,...c}=t,d=e0({gridArea:r,gridColumn:_1(o),gridRow:_1(l),gridColumnStart:a,gridColumnEnd:i,gridRowStart:u,gridRowEnd:s});return q.createElement(V.div,{ref:n,__css:d,...c})});GA.displayName="GridItem";var rt=M(function(t,n){const r=dt("Heading",t),{className:o,...a}=ke(t);return q.createElement(V.h2,{ref:n,className:_e("chakra-heading",t.className),...a,__css:r})});rt.displayName="Heading";M(function(t,n){const r=dt("Mark",t),o=ke(t);return w(qe,{ref:n,...o,as:"mark",__css:{bg:"transparent",whiteSpace:"nowrap",...r}})});var KA=M(function(t,n){const r=dt("Kbd",t),{className:o,...a}=ke(t);return q.createElement(V.kbd,{ref:n,className:_e("chakra-kbd",o),...a,__css:{fontFamily:"mono",...r}})});KA.displayName="Kbd";var ZA=M(function(t,n){const r=dt("Link",t),{className:o,isExternal:a,...i}=ke(t);return q.createElement(V.a,{target:a?"_blank":void 0,rel:a?"noopener":void 0,ref:n,className:_e("chakra-link",o),...i,__css:r})});ZA.displayName="Link";M(function(t,n){const{isExternal:r,target:o,rel:a,className:i,...s}=t;return q.createElement(V.a,{...s,ref:n,className:_e("chakra-linkbox__overlay",i),rel:r?"noopener noreferrer":a,target:r?"_blank":o,__css:{position:"static","&::before":{content:"''",cursor:"inherit",display:"block",position:"absolute",top:0,left:0,zIndex:0,width:"100%",height:"100%"}}})});M(function(t,n){const{className:r,...o}=t;return q.createElement(V.div,{ref:n,position:"relative",...o,className:_e("chakra-linkbox",r),__css:{"a[href]:not(.chakra-linkbox__overlay), abbr[title]":{position:"relative",zIndex:1}}})});var[YA,k2]=Rt({name:"ListStylesContext",errorMessage:`useListStyles returned is 'undefined'. Seems you forgot to wrap the components in "<List />" `}),o0=M(function(t,n){const r=ir("List",t),{children:o,styleType:a="none",stylePosition:i,spacing:s,...l}=ke(t),u=Xf(o),d=s?{["& > *:not(style) ~ *:not(style)"]:{mt:s}}:{};return q.createElement(YA,{value:r},q.createElement(V.ul,{ref:n,listStyleType:a,listStylePosition:i,role:"list",__css:{...r.container,...d},...l},u))});o0.displayName="List";var XA=M((e,t)=>{const{as:n,...r}=e;return w(o0,{ref:t,as:"ol",styleType:"decimal",marginStart:"1em",...r})});XA.displayName="OrderedList";var QA=M(function(t,n){const{as:r,...o}=t;return w(o0,{ref:n,as:"ul",styleType:"initial",marginStart:"1em",...o})});QA.displayName="UnorderedList";var JA=M(function(t,n){const r=k2();return q.createElement(V.li,{ref:n,...t,__css:r.item})});JA.displayName="ListItem";var eE=M(function(t,n){const r=k2();return w(Zt,{ref:n,role:"presentation",...t,__css:r.icon})});eE.displayName="ListIcon";var tE=M(function(t,n){const{columns:r,spacingX:o,spacingY:a,spacing:i,minChildWidth:s,...l}=t,u=Ng(),c=s?rE(s,u):oE(r);return w(C2,{ref:n,gap:i,columnGap:o,rowGap:a,templateColumns:c,...l})});tE.displayName="SimpleGrid";function nE(e){return typeof e=="number"?`${e}px`:e}function rE(e,t){return rr(e,n=>{const r=gC("sizes",n,nE(n))(t);return n===null?null:`repeat(auto-fit, minmax(${r}, 1fr))`})}function oE(e){return rr(e,t=>t===null?null:`repeat(${t}, minmax(0, 1fr))`)}var ld=V("div",{baseStyle:{flex:1,justifySelf:"stretch",alignSelf:"stretch"}});ld.displayName="Spacer";var ud="& > *:not(style) ~ *:not(style)";function aE(e){const{spacing:t,direction:n}=e,r={column:{marginTop:t,marginEnd:0,marginBottom:0,marginStart:0},row:{marginTop:0,marginEnd:0,marginBottom:0,marginStart:t},"column-reverse":{marginTop:0,marginEnd:0,marginBottom:t,marginStart:0},"row-reverse":{marginTop:0,marginEnd:t,marginBottom:0,marginStart:0}};return{flexDirection:n,[ud]:rr(n,o=>r[o])}}function iE(e){const{spacing:t,direction:n}=e,r={column:{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":rr(n,o=>r[o])}}var _2=e=>q.createElement(V.div,{className:"chakra-stack__item",...e,__css:{display:"inline-block",flex:"0 0 auto",minWidth:0,...e.__css}});_2.displayName="StackItem";var Jl=M((e,t)=>{const{isInline:n,direction:r,align:o,justify:a,spacing:i="0.5rem",wrap:s,children:l,divider:u,className:c,shouldWrapChildren:d,...f}=e,p=n?"row":r!=null?r:"column",b=_.exports.useMemo(()=>aE({direction:p,spacing:i}),[p,i]),v=_.exports.useMemo(()=>iE({spacing:i,direction:p}),[i,p]),k=!!u,g=!d&&!k,m=_.exports.useMemo(()=>{const x=Xf(l);return g?x:x.map((F,E)=>{const A=typeof F.key<"u"?F.key:E,I=E+1===x.length,N=d?w(_2,{children:F},A):F;if(!k)return N;const Te=_.exports.cloneElement(u,{__css:v}),je=I?null:Te;return B(_.exports.Fragment,{children:[N,je]},A)})},[u,v,k,g,d,l]),h=_e("chakra-stack",c);return q.createElement(V.div,{ref:t,display:"flex",alignItems:o,justifyContent:a,flexDirection:b.flexDirection,flexWrap:s,className:h,__css:k?{}:{[ud]:b[ud]},...f},m)});Jl.displayName="Stack";var sE=M((e,t)=>w(Jl,{align:"center",...e,direction:"row",ref:t}));sE.displayName="HStack";var lE=M((e,t)=>w(Jl,{align:"center",...e,direction:"column",ref:t}));lE.displayName="VStack";var mt=M(function(t,n){const r=dt("Text",t),{className:o,align:a,decoration:i,casing:s,...l}=ke(t),u=e0({textAlign:t.align,textDecoration:t.decoration,textTransform:t.casing});return q.createElement(V.p,{ref:n,className:_e("chakra-text",t.className),...u,...l,__css:r})});mt.displayName="Text";function T1(e){return typeof e=="number"?`${e}px`:e}var uE=M(function(t,n){const{spacing:r="0.5rem",spacingX:o,spacingY:a,children:i,justify:s,direction:l,align:u,className:c,shouldWrapChildren:d,...f}=t,p=_.exports.useMemo(()=>{const{spacingX:v=r,spacingY:k=r}={spacingX:o,spacingY:a};return{"--chakra-wrap-x-spacing":g=>rr(v,m=>T1(Pc("space",m)(g))),"--chakra-wrap-y-spacing":g=>rr(k,m=>T1(Pc("space",m)(g))),"--wrap-x-spacing":"calc(var(--chakra-wrap-x-spacing) / 2)","--wrap-y-spacing":"calc(var(--chakra-wrap-y-spacing) / 2)",display:"flex",flexWrap:"wrap",justifyContent:s,alignItems:u,flexDirection:l,listStyleType:"none",padding:"0",margin:"calc(var(--wrap-y-spacing) * -1) calc(var(--wrap-x-spacing) * -1)","& > *:not(style)":{margin:"var(--wrap-y-spacing) var(--wrap-x-spacing)"}}},[r,o,a,s,u,l]),b=_.exports.useMemo(()=>d?_.exports.Children.map(i,(v,k)=>w(T2,{children:v},k)):i,[i,d]);return q.createElement(V.div,{ref:n,className:_e("chakra-wrap",c),overflow:"hidden",...f},q.createElement(V.ul,{className:"chakra-wrap__list",__css:p},b))});uE.displayName="Wrap";var T2=M(function(t,n){const{className:r,...o}=t;return q.createElement(V.li,{ref:n,__css:{display:"flex",alignItems:"flex-start"},className:_e("chakra-wrap__listitem",r),...o})});T2.displayName="WrapItem";var cE={body:{classList:{add(){},remove(){}}},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}}},F2=cE,Hr=()=>{},dE={document:F2,navigator:{userAgent:""},CustomEvent:function(){return this},addEventListener:Hr,removeEventListener:Hr,getComputedStyle(){return{getPropertyValue(){return""}}},matchMedia(){return{matches:!1,addListener:Hr,removeListener:Hr}},requestAnimationFrame(e){return typeof setTimeout>"u"?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>"u"||clearTimeout(e)},setTimeout:()=>0,clearTimeout:Hr,setInterval:()=>0,clearInterval:Hr},fE=dE,pE={window:fE,document:F2},A2=typeof window<"u"?{window,document}:pE,E2=_.exports.createContext(A2);E2.displayName="EnvironmentContext";function P2(e){const{children:t,environment:n}=e,[r,o]=_.exports.useState(null),[a,i]=_.exports.useState(!1);_.exports.useEffect(()=>i(!0),[]);const s=_.exports.useMemo(()=>{if(n)return n;const l=r==null?void 0:r.ownerDocument,u=r==null?void 0:r.ownerDocument.defaultView;return l?{document:l,window:u}:A2},[r,n]);return B(E2.Provider,{value:s,children:[t,!n&&a&&w("span",{id:"__chakra_env",hidden:!0,ref:l=>{_.exports.startTransition(()=>{l&&o(l)})}})]})}P2.displayName="EnvironmentProvider";var eu={exports:{}},Ct={},I2={exports:{}},q2={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(L,W){var H=L.length;L.push(W);e:for(;0<H;){var ge=H-1>>>1,Fe=L[ge];if(0<o(Fe,W))L[ge]=W,L[H]=Fe,H=ge;else break e}}function n(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var W=L[0],H=L.pop();if(H!==W){L[0]=H;e:for(var ge=0,Fe=L.length,ee=Fe>>>1;ge<ee;){var Qt=2*(ge+1)-1,Wo=L[Qt],ft=Qt+1,cr=L[ft];if(0>o(Wo,H))ft<Fe&&0>o(cr,Wo)?(L[ge]=cr,L[ft]=H,ge=ft):(L[ge]=Wo,L[Qt]=H,ge=Qt);else if(ft<Fe&&0>o(cr,H))L[ge]=cr,L[ft]=H,ge=ft;else break e}}return W}function o(L,W){var H=L.sortIndex-W.sortIndex;return H!==0?H:L.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var i=Date,s=i.now();e.unstable_now=function(){return i.now()-s}}var l=[],u=[],c=1,d=null,f=3,p=!1,b=!1,v=!1,k=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(L){for(var W=n(u);W!==null;){if(W.callback===null)r(u);else if(W.startTime<=L)r(u),W.sortIndex=W.expirationTime,t(l,W);else break;W=n(u)}}function x(L){if(v=!1,h(L),!b)if(n(l)!==null)b=!0,Se(F);else{var W=n(u);W!==null&&Mt(x,W.startTime-L)}}function F(L,W){b=!1,v&&(v=!1,g(I),I=-1),p=!0;var H=f;try{for(h(W),d=n(l);d!==null&&(!(d.expirationTime>W)||L&&!Te());){var ge=d.callback;if(typeof ge=="function"){d.callback=null,f=d.priorityLevel;var Fe=ge(d.expirationTime<=W);W=e.unstable_now(),typeof Fe=="function"?d.callback=Fe:d===n(l)&&r(l),h(W)}else r(l);d=n(l)}if(d!==null)var ee=!0;else{var Qt=n(u);Qt!==null&&Mt(x,Qt.startTime-W),ee=!1}return ee}finally{d=null,f=H,p=!1}}var E=!1,A=null,I=-1,D=5,N=-1;function Te(){return!(e.unstable_now()-N<D)}function je(){if(A!==null){var L=e.unstable_now();N=L;var W=!0;try{W=A(!0,L)}finally{W?_t():(E=!1,A=null)}}else E=!1}var _t;if(typeof m=="function")_t=function(){m(je)};else if(typeof MessageChannel<"u"){var Yt=new MessageChannel,Xt=Yt.port2;Yt.port1.onmessage=je,_t=function(){Xt.postMessage(null)}}else _t=function(){k(je,0)};function Se(L){A=L,E||(E=!0,_t())}function Mt(L,W){I=k(function(){L(e.unstable_now())},W)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(L){L.callback=null},e.unstable_continueExecution=function(){b||p||(b=!0,Se(F))},e.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<L?Math.floor(1e3/L):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(L){switch(f){case 1:case 2:case 3:var W=3;break;default:W=f}var H=f;f=W;try{return L()}finally{f=H}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(L,W){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var H=f;f=L;try{return W()}finally{f=H}},e.unstable_scheduleCallback=function(L,W,H){var ge=e.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?ge+H:ge):H=ge,L){case 1:var Fe=-1;break;case 2:Fe=250;break;case 5:Fe=1073741823;break;case 4:Fe=1e4;break;default:Fe=5e3}return Fe=H+Fe,L={id:c++,callback:W,priorityLevel:L,startTime:H,expirationTime:Fe,sortIndex:-1},H>ge?(L.sortIndex=H,t(u,L),n(l)===null&&L===n(u)&&(v?(g(I),I=-1):v=!0,Mt(x,H-ge))):(L.sortIndex=Fe,t(l,L),b||p||(b=!0,Se(F))),L},e.unstable_shouldYield=Te,e.unstable_wrapCallback=function(L){var W=f;return function(){var H=f;f=W;try{return L.apply(this,arguments)}finally{f=H}}}})(q2);(function(e){e.exports=q2})(I2);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var L2=_.exports,xt=I2.exports;function P(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var z2=new Set,Qa={};function Br(e,t){Eo(e,t),Eo(e+"Capture",t)}function Eo(e,t){for(Qa[e]=t,e=0;e<t.length;e++)z2.add(t[e])}var En=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),cd=Object.prototype.hasOwnProperty,mE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,F1={},A1={};function hE(e){return cd.call(A1,e)?!0:cd.call(F1,e)?!1:mE.test(e)?A1[e]=!0:(F1[e]=!0,!1)}function gE(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function yE(e,t,n,r){if(t===null||typeof t>"u"||gE(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function nt(e,t,n,r,o,a,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=i}var We={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){We[e]=new nt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];We[t]=new nt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){We[e]=new nt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){We[e]=new nt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){We[e]=new nt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){We[e]=new nt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){We[e]=new nt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){We[e]=new nt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){We[e]=new nt(e,5,!1,e.toLowerCase(),null,!1,!1)});var a0=/[\-:]([a-z])/g;function i0(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(a0,i0);We[t]=new nt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(a0,i0);We[t]=new nt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(a0,i0);We[t]=new nt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){We[e]=new nt(e,1,!1,e.toLowerCase(),null,!1,!1)});We.xlinkHref=new nt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){We[e]=new nt(e,1,!1,e.toLowerCase(),null,!0,!0)});function s0(e,t,n,r){var o=We.hasOwnProperty(t)?We[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(yE(t,n,o,r)&&(n=null),r||o===null?hE(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ln=L2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Zi=Symbol.for("react.element"),Xr=Symbol.for("react.portal"),Qr=Symbol.for("react.fragment"),l0=Symbol.for("react.strict_mode"),dd=Symbol.for("react.profiler"),R2=Symbol.for("react.provider"),M2=Symbol.for("react.context"),u0=Symbol.for("react.forward_ref"),fd=Symbol.for("react.suspense"),pd=Symbol.for("react.suspense_list"),c0=Symbol.for("react.memo"),Bn=Symbol.for("react.lazy"),V2=Symbol.for("react.offscreen"),E1=Symbol.iterator;function ea(e){return e===null||typeof e!="object"?null:(e=E1&&e[E1]||e["@@iterator"],typeof e=="function"?e:null)}var ve=Object.assign,oc;function da(e){if(oc===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);oc=t&&t[1]||""}return`
`+oc+e}var ac=!1;function ic(e,t){if(!e||ac)return"";ac=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),a=r.stack.split(`
`),i=o.length-1,s=a.length-1;1<=i&&0<=s&&o[i]!==a[s];)s--;for(;1<=i&&0<=s;i--,s--)if(o[i]!==a[s]){if(i!==1||s!==1)do if(i--,s--,0>s||o[i]!==a[s]){var l=`
`+o[i].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=i&&0<=s);break}}}finally{ac=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?da(e):""}function bE(e){switch(e.tag){case 5:return da(e.type);case 16:return da("Lazy");case 13:return da("Suspense");case 19:return da("SuspenseList");case 0:case 2:case 15:return e=ic(e.type,!1),e;case 11:return e=ic(e.type.render,!1),e;case 1:return e=ic(e.type,!0),e;default:return""}}function md(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Qr:return"Fragment";case Xr:return"Portal";case dd:return"Profiler";case l0:return"StrictMode";case fd:return"Suspense";case pd:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case M2:return(e.displayName||"Context")+".Consumer";case R2:return(e._context.displayName||"Context")+".Provider";case u0:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case c0:return t=e.displayName||null,t!==null?t:md(e.type)||"Memo";case Bn:t=e._payload,e=e._init;try{return md(e(t))}catch{}}return null}function vE(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return md(t);case 8:return t===l0?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function or(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function N2(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function wE(e){var t=N2(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(i){r=""+i,a.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Yi(e){e._valueTracker||(e._valueTracker=wE(e))}function j2(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=N2(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Xs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function hd(e,t){var n=t.checked;return ve({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function P1(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=or(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function B2(e,t){t=t.checked,t!=null&&s0(e,"checked",t,!1)}function gd(e,t){B2(e,t);var n=or(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?yd(e,t.type,n):t.hasOwnProperty("defaultValue")&&yd(e,t.type,or(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function I1(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function yd(e,t,n){(t!=="number"||Xs(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var fa=Array.isArray;function wo(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+or(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function bd(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(P(91));return ve({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function q1(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(P(92));if(fa(n)){if(1<n.length)throw Error(P(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:or(n)}}function O2(e,t){var n=or(t.value),r=or(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function L1(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function D2(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function vd(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?D2(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Xi,$2=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Xi=Xi||document.createElement("div"),Xi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Xi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ja(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Fa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},xE=["Webkit","ms","Moz","O"];Object.keys(Fa).forEach(function(e){xE.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Fa[t]=Fa[e]})});function W2(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Fa.hasOwnProperty(e)&&Fa[e]?(""+t).trim():t+"px"}function H2(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=W2(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var SE=ve({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function wd(e,t){if(t){if(SE[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(P(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(P(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(P(61))}if(t.style!=null&&typeof t.style!="object")throw Error(P(62))}}function xd(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Sd=null;function d0(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Cd=null,xo=null,So=null;function z1(e){if(e=Ci(e)){if(typeof Cd!="function")throw Error(P(280));var t=e.stateNode;t&&(t=au(t),Cd(e.stateNode,e.type,t))}}function U2(e){xo?So?So.push(e):So=[e]:xo=e}function G2(){if(xo){var e=xo,t=So;if(So=xo=null,z1(e),t)for(e=0;e<t.length;e++)z1(t[e])}}function K2(e,t){return e(t)}function Z2(){}var sc=!1;function Y2(e,t,n){if(sc)return e(t,n);sc=!0;try{return K2(e,t,n)}finally{sc=!1,(xo!==null||So!==null)&&(Z2(),G2())}}function ei(e,t){var n=e.stateNode;if(n===null)return null;var r=au(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(P(231,t,typeof n));return n}var kd=!1;if(En)try{var ta={};Object.defineProperty(ta,"passive",{get:function(){kd=!0}}),window.addEventListener("test",ta,ta),window.removeEventListener("test",ta,ta)}catch{kd=!1}function CE(e,t,n,r,o,a,i,s,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Aa=!1,Qs=null,Js=!1,_d=null,kE={onError:function(e){Aa=!0,Qs=e}};function _E(e,t,n,r,o,a,i,s,l){Aa=!1,Qs=null,CE.apply(kE,arguments)}function TE(e,t,n,r,o,a,i,s,l){if(_E.apply(this,arguments),Aa){if(Aa){var u=Qs;Aa=!1,Qs=null}else throw Error(P(198));Js||(Js=!0,_d=u)}}function Or(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function X2(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function R1(e){if(Or(e)!==e)throw Error(P(188))}function FE(e){var t=e.alternate;if(!t){if(t=Or(e),t===null)throw Error(P(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var a=o.alternate;if(a===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===a.child){for(a=o.child;a;){if(a===n)return R1(o),e;if(a===r)return R1(o),t;a=a.sibling}throw Error(P(188))}if(n.return!==r.return)n=o,r=a;else{for(var i=!1,s=o.child;s;){if(s===n){i=!0,n=o,r=a;break}if(s===r){i=!0,r=o,n=a;break}s=s.sibling}if(!i){for(s=a.child;s;){if(s===n){i=!0,n=a,r=o;break}if(s===r){i=!0,r=a,n=o;break}s=s.sibling}if(!i)throw Error(P(189))}}if(n.alternate!==r)throw Error(P(190))}if(n.tag!==3)throw Error(P(188));return n.stateNode.current===n?e:t}function Q2(e){return e=FE(e),e!==null?J2(e):null}function J2(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=J2(e);if(t!==null)return t;e=e.sibling}return null}var eb=xt.unstable_scheduleCallback,M1=xt.unstable_cancelCallback,AE=xt.unstable_shouldYield,EE=xt.unstable_requestPaint,Ce=xt.unstable_now,PE=xt.unstable_getCurrentPriorityLevel,f0=xt.unstable_ImmediatePriority,tb=xt.unstable_UserBlockingPriority,el=xt.unstable_NormalPriority,IE=xt.unstable_LowPriority,nb=xt.unstable_IdlePriority,tu=null,pn=null;function qE(e){if(pn&&typeof pn.onCommitFiberRoot=="function")try{pn.onCommitFiberRoot(tu,e,void 0,(e.current.flags&128)===128)}catch{}}var Ut=Math.clz32?Math.clz32:RE,LE=Math.log,zE=Math.LN2;function RE(e){return e>>>=0,e===0?32:31-(LE(e)/zE|0)|0}var Qi=64,Ji=4194304;function pa(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function tl(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,a=e.pingedLanes,i=n&268435455;if(i!==0){var s=i&~o;s!==0?r=pa(s):(a&=i,a!==0&&(r=pa(a)))}else i=n&~o,i!==0?r=pa(i):a!==0&&(r=pa(a));if(r===0)return 0;if(t!==0&&t!==r&&(t&o)===0&&(o=r&-r,a=t&-t,o>=a||o===16&&(a&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ut(t),o=1<<n,r|=e[n],t&=~o;return r}function ME(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function VE(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,a=e.pendingLanes;0<a;){var i=31-Ut(a),s=1<<i,l=o[i];l===-1?((s&n)===0||(s&r)!==0)&&(o[i]=ME(s,t)):l<=t&&(e.expiredLanes|=s),a&=~s}}function Td(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function rb(){var e=Qi;return Qi<<=1,(Qi&4194240)===0&&(Qi=64),e}function lc(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function xi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ut(t),e[t]=n}function NE(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Ut(n),a=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~a}}function p0(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ut(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var re=0;function ob(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var ab,m0,ib,sb,lb,Fd=!1,es=[],Kn=null,Zn=null,Yn=null,ti=new Map,ni=new Map,$n=[],jE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function V1(e,t){switch(e){case"focusin":case"focusout":Kn=null;break;case"dragenter":case"dragleave":Zn=null;break;case"mouseover":case"mouseout":Yn=null;break;case"pointerover":case"pointerout":ti.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ni.delete(t.pointerId)}}function na(e,t,n,r,o,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[o]},t!==null&&(t=Ci(t),t!==null&&m0(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function BE(e,t,n,r,o){switch(t){case"focusin":return Kn=na(Kn,e,t,n,r,o),!0;case"dragenter":return Zn=na(Zn,e,t,n,r,o),!0;case"mouseover":return Yn=na(Yn,e,t,n,r,o),!0;case"pointerover":var a=o.pointerId;return ti.set(a,na(ti.get(a)||null,e,t,n,r,o)),!0;case"gotpointercapture":return a=o.pointerId,ni.set(a,na(ni.get(a)||null,e,t,n,r,o)),!0}return!1}function ub(e){var t=kr(e.target);if(t!==null){var n=Or(t);if(n!==null){if(t=n.tag,t===13){if(t=X2(n),t!==null){e.blockedOn=t,lb(e.priority,function(){ib(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ss(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ad(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Sd=r,n.target.dispatchEvent(r),Sd=null}else return t=Ci(n),t!==null&&m0(t),e.blockedOn=n,!1;t.shift()}return!0}function N1(e,t,n){Ss(e)&&n.delete(t)}function OE(){Fd=!1,Kn!==null&&Ss(Kn)&&(Kn=null),Zn!==null&&Ss(Zn)&&(Zn=null),Yn!==null&&Ss(Yn)&&(Yn=null),ti.forEach(N1),ni.forEach(N1)}function ra(e,t){e.blockedOn===t&&(e.blockedOn=null,Fd||(Fd=!0,xt.unstable_scheduleCallback(xt.unstable_NormalPriority,OE)))}function ri(e){function t(o){return ra(o,e)}if(0<es.length){ra(es[0],e);for(var n=1;n<es.length;n++){var r=es[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Kn!==null&&ra(Kn,e),Zn!==null&&ra(Zn,e),Yn!==null&&ra(Yn,e),ti.forEach(t),ni.forEach(t),n=0;n<$n.length;n++)r=$n[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<$n.length&&(n=$n[0],n.blockedOn===null);)ub(n),n.blockedOn===null&&$n.shift()}var Co=Ln.ReactCurrentBatchConfig,nl=!0;function DE(e,t,n,r){var o=re,a=Co.transition;Co.transition=null;try{re=1,h0(e,t,n,r)}finally{re=o,Co.transition=a}}function $E(e,t,n,r){var o=re,a=Co.transition;Co.transition=null;try{re=4,h0(e,t,n,r)}finally{re=o,Co.transition=a}}function h0(e,t,n,r){if(nl){var o=Ad(e,t,n,r);if(o===null)bc(e,t,r,rl,n),V1(e,r);else if(BE(o,e,t,n,r))r.stopPropagation();else if(V1(e,r),t&4&&-1<jE.indexOf(e)){for(;o!==null;){var a=Ci(o);if(a!==null&&ab(a),a=Ad(e,t,n,r),a===null&&bc(e,t,r,rl,n),a===o)break;o=a}o!==null&&r.stopPropagation()}else bc(e,t,r,null,n)}}var rl=null;function Ad(e,t,n,r){if(rl=null,e=d0(r),e=kr(e),e!==null)if(t=Or(e),t===null)e=null;else if(n=t.tag,n===13){if(e=X2(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return rl=e,null}function cb(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(PE()){case f0:return 1;case tb:return 4;case el:case IE:return 16;case nb:return 536870912;default:return 16}default:return 16}}var Un=null,g0=null,Cs=null;function db(){if(Cs)return Cs;var e,t=g0,n=t.length,r,o="value"in Un?Un.value:Un.textContent,a=o.length;for(e=0;e<n&&t[e]===o[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===o[a-r];r++);return Cs=o.slice(e,1<r?1-r:void 0)}function ks(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ts(){return!0}function j1(){return!1}function kt(e){function t(n,r,o,a,i){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=a,this.target=i,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(a):a[s]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?ts:j1,this.isPropagationStopped=j1,this}return ve(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ts)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ts)},persist:function(){},isPersistent:ts}),t}var Do={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},y0=kt(Do),Si=ve({},Do,{view:0,detail:0}),WE=kt(Si),uc,cc,oa,nu=ve({},Si,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:b0,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==oa&&(oa&&e.type==="mousemove"?(uc=e.screenX-oa.screenX,cc=e.screenY-oa.screenY):cc=uc=0,oa=e),uc)},movementY:function(e){return"movementY"in e?e.movementY:cc}}),B1=kt(nu),HE=ve({},nu,{dataTransfer:0}),UE=kt(HE),GE=ve({},Si,{relatedTarget:0}),dc=kt(GE),KE=ve({},Do,{animationName:0,elapsedTime:0,pseudoElement:0}),ZE=kt(KE),YE=ve({},Do,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),XE=kt(YE),QE=ve({},Do,{data:0}),O1=kt(QE),JE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},eP={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},tP={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function nP(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=tP[e])?!!t[e]:!1}function b0(){return nP}var rP=ve({},Si,{key:function(e){if(e.key){var t=JE[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ks(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?eP[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:b0,charCode:function(e){return e.type==="keypress"?ks(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ks(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),oP=kt(rP),aP=ve({},nu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),D1=kt(aP),iP=ve({},Si,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:b0}),sP=kt(iP),lP=ve({},Do,{propertyName:0,elapsedTime:0,pseudoElement:0}),uP=kt(lP),cP=ve({},nu,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),dP=kt(cP),fP=[9,13,27,32],v0=En&&"CompositionEvent"in window,Ea=null;En&&"documentMode"in document&&(Ea=document.documentMode);var pP=En&&"TextEvent"in window&&!Ea,fb=En&&(!v0||Ea&&8<Ea&&11>=Ea),$1=String.fromCharCode(32),W1=!1;function pb(e,t){switch(e){case"keyup":return fP.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function mb(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Jr=!1;function mP(e,t){switch(e){case"compositionend":return mb(t);case"keypress":return t.which!==32?null:(W1=!0,$1);case"textInput":return e=t.data,e===$1&&W1?null:e;default:return null}}function hP(e,t){if(Jr)return e==="compositionend"||!v0&&pb(e,t)?(e=db(),Cs=g0=Un=null,Jr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return fb&&t.locale!=="ko"?null:t.data;default:return null}}var gP={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function H1(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!gP[e.type]:t==="textarea"}function hb(e,t,n,r){U2(r),t=ol(t,"onChange"),0<t.length&&(n=new y0("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Pa=null,oi=null;function yP(e){Tb(e,0)}function ru(e){var t=no(e);if(j2(t))return e}function bP(e,t){if(e==="change")return t}var gb=!1;if(En){var fc;if(En){var pc="oninput"in document;if(!pc){var U1=document.createElement("div");U1.setAttribute("oninput","return;"),pc=typeof U1.oninput=="function"}fc=pc}else fc=!1;gb=fc&&(!document.documentMode||9<document.documentMode)}function G1(){Pa&&(Pa.detachEvent("onpropertychange",yb),oi=Pa=null)}function yb(e){if(e.propertyName==="value"&&ru(oi)){var t=[];hb(t,oi,e,d0(e)),Y2(yP,t)}}function vP(e,t,n){e==="focusin"?(G1(),Pa=t,oi=n,Pa.attachEvent("onpropertychange",yb)):e==="focusout"&&G1()}function wP(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ru(oi)}function xP(e,t){if(e==="click")return ru(t)}function SP(e,t){if(e==="input"||e==="change")return ru(t)}function CP(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Kt=typeof Object.is=="function"?Object.is:CP;function ai(e,t){if(Kt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!cd.call(t,o)||!Kt(e[o],t[o]))return!1}return!0}function K1(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Z1(e,t){var n=K1(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=K1(n)}}function bb(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?bb(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function vb(){for(var e=window,t=Xs();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Xs(e.document)}return t}function w0(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function kP(e){var t=vb(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&bb(n.ownerDocument.documentElement,n)){if(r!==null&&w0(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,a=Math.min(r.start,o);r=r.end===void 0?a:Math.min(r.end,o),!e.extend&&a>r&&(o=r,r=a,a=o),o=Z1(n,a);var i=Z1(n,r);o&&i&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var _P=En&&"documentMode"in document&&11>=document.documentMode,eo=null,Ed=null,Ia=null,Pd=!1;function Y1(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Pd||eo==null||eo!==Xs(r)||(r=eo,"selectionStart"in r&&w0(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ia&&ai(Ia,r)||(Ia=r,r=ol(Ed,"onSelect"),0<r.length&&(t=new y0("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=eo)))}function ns(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var to={animationend:ns("Animation","AnimationEnd"),animationiteration:ns("Animation","AnimationIteration"),animationstart:ns("Animation","AnimationStart"),transitionend:ns("Transition","TransitionEnd")},mc={},wb={};En&&(wb=document.createElement("div").style,"AnimationEvent"in window||(delete to.animationend.animation,delete to.animationiteration.animation,delete to.animationstart.animation),"TransitionEvent"in window||delete to.transitionend.transition);function ou(e){if(mc[e])return mc[e];if(!to[e])return e;var t=to[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in wb)return mc[e]=t[n];return e}var xb=ou("animationend"),Sb=ou("animationiteration"),Cb=ou("animationstart"),kb=ou("transitionend"),_b=new Map,X1="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function sr(e,t){_b.set(e,t),Br(t,[e])}for(var hc=0;hc<X1.length;hc++){var gc=X1[hc],TP=gc.toLowerCase(),FP=gc[0].toUpperCase()+gc.slice(1);sr(TP,"on"+FP)}sr(xb,"onAnimationEnd");sr(Sb,"onAnimationIteration");sr(Cb,"onAnimationStart");sr("dblclick","onDoubleClick");sr("focusin","onFocus");sr("focusout","onBlur");sr(kb,"onTransitionEnd");Eo("onMouseEnter",["mouseout","mouseover"]);Eo("onMouseLeave",["mouseout","mouseover"]);Eo("onPointerEnter",["pointerout","pointerover"]);Eo("onPointerLeave",["pointerout","pointerover"]);Br("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Br("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Br("onBeforeInput",["compositionend","keypress","textInput","paste"]);Br("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Br("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Br("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ma="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),AP=new Set("cancel close invalid load scroll toggle".split(" ").concat(ma));function Q1(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,TE(r,t,void 0,e),e.currentTarget=null}function Tb(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var i=r.length-1;0<=i;i--){var s=r[i],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==a&&o.isPropagationStopped())break e;Q1(o,s,u),a=l}else for(i=0;i<r.length;i++){if(s=r[i],l=s.instance,u=s.currentTarget,s=s.listener,l!==a&&o.isPropagationStopped())break e;Q1(o,s,u),a=l}}}if(Js)throw e=_d,Js=!1,_d=null,e}function ue(e,t){var n=t[Rd];n===void 0&&(n=t[Rd]=new Set);var r=e+"__bubble";n.has(r)||(Fb(t,e,2,!1),n.add(r))}function yc(e,t,n){var r=0;t&&(r|=4),Fb(n,e,r,t)}var rs="_reactListening"+Math.random().toString(36).slice(2);function ii(e){if(!e[rs]){e[rs]=!0,z2.forEach(function(n){n!=="selectionchange"&&(AP.has(n)||yc(n,!1,e),yc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[rs]||(t[rs]=!0,yc("selectionchange",!1,t))}}function Fb(e,t,n,r){switch(cb(t)){case 1:var o=DE;break;case 4:o=$E;break;default:o=h0}n=o.bind(null,t,n,e),o=void 0,!kd||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function bc(e,t,n,r,o){var a=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(i===4)for(i=r.return;i!==null;){var l=i.tag;if((l===3||l===4)&&(l=i.stateNode.containerInfo,l===o||l.nodeType===8&&l.parentNode===o))return;i=i.return}for(;s!==null;){if(i=kr(s),i===null)return;if(l=i.tag,l===5||l===6){r=a=i;continue e}s=s.parentNode}}r=r.return}Y2(function(){var u=a,c=d0(n),d=[];e:{var f=_b.get(e);if(f!==void 0){var p=y0,b=e;switch(e){case"keypress":if(ks(n)===0)break e;case"keydown":case"keyup":p=oP;break;case"focusin":b="focus",p=dc;break;case"focusout":b="blur",p=dc;break;case"beforeblur":case"afterblur":p=dc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=B1;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=UE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=sP;break;case xb:case Sb:case Cb:p=ZE;break;case kb:p=uP;break;case"scroll":p=WE;break;case"wheel":p=dP;break;case"copy":case"cut":case"paste":p=XE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=D1}var v=(t&4)!==0,k=!v&&e==="scroll",g=v?f!==null?f+"Capture":null:f;v=[];for(var m=u,h;m!==null;){h=m;var x=h.stateNode;if(h.tag===5&&x!==null&&(h=x,g!==null&&(x=ei(m,g),x!=null&&v.push(si(m,x,h)))),k)break;m=m.return}0<v.length&&(f=new p(f,b,null,n,c),d.push({event:f,listeners:v}))}}if((t&7)===0){e:{if(f=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",f&&n!==Sd&&(b=n.relatedTarget||n.fromElement)&&(kr(b)||b[Pn]))break e;if((p||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,p?(b=n.relatedTarget||n.toElement,p=u,b=b?kr(b):null,b!==null&&(k=Or(b),b!==k||b.tag!==5&&b.tag!==6)&&(b=null)):(p=null,b=u),p!==b)){if(v=B1,x="onMouseLeave",g="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(v=D1,x="onPointerLeave",g="onPointerEnter",m="pointer"),k=p==null?f:no(p),h=b==null?f:no(b),f=new v(x,m+"leave",p,n,c),f.target=k,f.relatedTarget=h,x=null,kr(c)===u&&(v=new v(g,m+"enter",b,n,c),v.target=h,v.relatedTarget=k,x=v),k=x,p&&b)t:{for(v=p,g=b,m=0,h=v;h;h=Ur(h))m++;for(h=0,x=g;x;x=Ur(x))h++;for(;0<m-h;)v=Ur(v),m--;for(;0<h-m;)g=Ur(g),h--;for(;m--;){if(v===g||g!==null&&v===g.alternate)break t;v=Ur(v),g=Ur(g)}v=null}else v=null;p!==null&&J1(d,f,p,v,!1),b!==null&&k!==null&&J1(d,k,b,v,!0)}}e:{if(f=u?no(u):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var F=bP;else if(H1(f))if(gb)F=SP;else{F=wP;var E=vP}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(F=xP);if(F&&(F=F(e,u))){hb(d,F,n,c);break e}E&&E(e,f,u),e==="focusout"&&(E=f._wrapperState)&&E.controlled&&f.type==="number"&&yd(f,"number",f.value)}switch(E=u?no(u):window,e){case"focusin":(H1(E)||E.contentEditable==="true")&&(eo=E,Ed=u,Ia=null);break;case"focusout":Ia=Ed=eo=null;break;case"mousedown":Pd=!0;break;case"contextmenu":case"mouseup":case"dragend":Pd=!1,Y1(d,n,c);break;case"selectionchange":if(_P)break;case"keydown":case"keyup":Y1(d,n,c)}var A;if(v0)e:{switch(e){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else Jr?pb(e,n)&&(I="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(I="onCompositionStart");I&&(fb&&n.locale!=="ko"&&(Jr||I!=="onCompositionStart"?I==="onCompositionEnd"&&Jr&&(A=db()):(Un=c,g0="value"in Un?Un.value:Un.textContent,Jr=!0)),E=ol(u,I),0<E.length&&(I=new O1(I,e,null,n,c),d.push({event:I,listeners:E}),A?I.data=A:(A=mb(n),A!==null&&(I.data=A)))),(A=pP?mP(e,n):hP(e,n))&&(u=ol(u,"onBeforeInput"),0<u.length&&(c=new O1("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=A))}Tb(d,t)})}function si(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ol(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,a=o.stateNode;o.tag===5&&a!==null&&(o=a,a=ei(e,n),a!=null&&r.unshift(si(e,a,o)),a=ei(e,t),a!=null&&r.push(si(e,a,o))),e=e.return}return r}function Ur(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function J1(e,t,n,r,o){for(var a=t._reactName,i=[];n!==null&&n!==r;){var s=n,l=s.alternate,u=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&u!==null&&(s=u,o?(l=ei(n,a),l!=null&&i.unshift(si(n,l,s))):o||(l=ei(n,a),l!=null&&i.push(si(n,l,s)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var EP=/\r\n?/g,PP=/\u0000|\uFFFD/g;function eh(e){return(typeof e=="string"?e:""+e).replace(EP,`
`).replace(PP,"")}function os(e,t,n){if(t=eh(t),eh(e)!==t&&n)throw Error(P(425))}function al(){}var Id=null,qd=null;function Ld(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var zd=typeof setTimeout=="function"?setTimeout:void 0,IP=typeof clearTimeout=="function"?clearTimeout:void 0,th=typeof Promise=="function"?Promise:void 0,qP=typeof queueMicrotask=="function"?queueMicrotask:typeof th<"u"?function(e){return th.resolve(null).then(e).catch(LP)}:zd;function LP(e){setTimeout(function(){throw e})}function vc(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),ri(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);ri(t)}function Xn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function nh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var $o=Math.random().toString(36).slice(2),sn="__reactFiber$"+$o,li="__reactProps$"+$o,Pn="__reactContainer$"+$o,Rd="__reactEvents$"+$o,zP="__reactListeners$"+$o,RP="__reactHandles$"+$o;function kr(e){var t=e[sn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Pn]||n[sn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=nh(e);e!==null;){if(n=e[sn])return n;e=nh(e)}return t}e=n,n=e.parentNode}return null}function Ci(e){return e=e[sn]||e[Pn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function no(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(P(33))}function au(e){return e[li]||null}var Md=[],ro=-1;function lr(e){return{current:e}}function de(e){0>ro||(e.current=Md[ro],Md[ro]=null,ro--)}function le(e,t){ro++,Md[ro]=e.current,e.current=t}var ar={},Ze=lr(ar),st=lr(!1),Lr=ar;function Po(e,t){var n=e.type.contextTypes;if(!n)return ar;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},a;for(a in n)o[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function lt(e){return e=e.childContextTypes,e!=null}function il(){de(st),de(Ze)}function rh(e,t,n){if(Ze.current!==ar)throw Error(P(168));le(Ze,t),le(st,n)}function Ab(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(P(108,vE(e)||"Unknown",o));return ve({},n,r)}function sl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ar,Lr=Ze.current,le(Ze,e),le(st,st.current),!0}function oh(e,t,n){var r=e.stateNode;if(!r)throw Error(P(169));n?(e=Ab(e,t,Lr),r.__reactInternalMemoizedMergedChildContext=e,de(st),de(Ze),le(Ze,e)):de(st),le(st,n)}var xn=null,iu=!1,wc=!1;function Eb(e){xn===null?xn=[e]:xn.push(e)}function MP(e){iu=!0,Eb(e)}function ur(){if(!wc&&xn!==null){wc=!0;var e=0,t=re;try{var n=xn;for(re=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}xn=null,iu=!1}catch(o){throw xn!==null&&(xn=xn.slice(e+1)),eb(f0,ur),o}finally{re=t,wc=!1}}return null}var oo=[],ao=0,ll=null,ul=0,At=[],Et=0,zr=null,kn=1,_n="";function yr(e,t){oo[ao++]=ul,oo[ao++]=ll,ll=e,ul=t}function Pb(e,t,n){At[Et++]=kn,At[Et++]=_n,At[Et++]=zr,zr=e;var r=kn;e=_n;var o=32-Ut(r)-1;r&=~(1<<o),n+=1;var a=32-Ut(t)+o;if(30<a){var i=o-o%5;a=(r&(1<<i)-1).toString(32),r>>=i,o-=i,kn=1<<32-Ut(t)+o|n<<o|r,_n=a+e}else kn=1<<a|n<<o|r,_n=e}function x0(e){e.return!==null&&(yr(e,1),Pb(e,1,0))}function S0(e){for(;e===ll;)ll=oo[--ao],oo[ao]=null,ul=oo[--ao],oo[ao]=null;for(;e===zr;)zr=At[--Et],At[Et]=null,_n=At[--Et],At[Et]=null,kn=At[--Et],At[Et]=null}var vt=null,gt=null,he=!1,$t=null;function Ib(e,t){var n=Pt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ah(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,vt=e,gt=Xn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,vt=e,gt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=zr!==null?{id:kn,overflow:_n}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Pt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,vt=e,gt=null,!0):!1;default:return!1}}function Vd(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Nd(e){if(he){var t=gt;if(t){var n=t;if(!ah(e,t)){if(Vd(e))throw Error(P(418));t=Xn(n.nextSibling);var r=vt;t&&ah(e,t)?Ib(r,n):(e.flags=e.flags&-4097|2,he=!1,vt=e)}}else{if(Vd(e))throw Error(P(418));e.flags=e.flags&-4097|2,he=!1,vt=e}}}function ih(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;vt=e}function as(e){if(e!==vt)return!1;if(!he)return ih(e),he=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ld(e.type,e.memoizedProps)),t&&(t=gt)){if(Vd(e))throw qb(),Error(P(418));for(;t;)Ib(e,t),t=Xn(t.nextSibling)}if(ih(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(P(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){gt=Xn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}gt=null}}else gt=vt?Xn(e.stateNode.nextSibling):null;return!0}function qb(){for(var e=gt;e;)e=Xn(e.nextSibling)}function Io(){gt=vt=null,he=!1}function C0(e){$t===null?$t=[e]:$t.push(e)}var VP=Ln.ReactCurrentBatchConfig;function Ot(e,t){if(e&&e.defaultProps){t=ve({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var cl=lr(null),dl=null,io=null,k0=null;function _0(){k0=io=dl=null}function T0(e){var t=cl.current;de(cl),e._currentValue=t}function jd(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function ko(e,t){dl=e,k0=io=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(it=!0),e.firstContext=null)}function Lt(e){var t=e._currentValue;if(k0!==e)if(e={context:e,memoizedValue:t,next:null},io===null){if(dl===null)throw Error(P(308));io=e,dl.dependencies={lanes:0,firstContext:e}}else io=io.next=e;return t}var _r=null;function F0(e){_r===null?_r=[e]:_r.push(e)}function Lb(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,F0(t)):(n.next=o.next,o.next=n),t.interleaved=n,In(e,r)}function In(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var On=!1;function A0(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function zb(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Tn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Qn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Y&2)!==0){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,In(e,n)}return o=r.interleaved,o===null?(t.next=t,F0(r)):(t.next=o.next,o.next=t),r.interleaved=t,In(e,n)}function _s(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,p0(e,n)}}function sh(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?o=a=i:a=a.next=i,n=n.next}while(n!==null);a===null?o=a=t:a=a.next=t}else o=a=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function fl(e,t,n,r){var o=e.updateQueue;On=!1;var a=o.firstBaseUpdate,i=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var l=s,u=l.next;l.next=null,i===null?a=u:i.next=u,i=l;var c=e.alternate;c!==null&&(c=c.updateQueue,s=c.lastBaseUpdate,s!==i&&(s===null?c.firstBaseUpdate=u:s.next=u,c.lastBaseUpdate=l))}if(a!==null){var d=o.baseState;i=0,c=u=l=null,s=a;do{var f=s.lane,p=s.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:p,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var b=e,v=s;switch(f=t,p=n,v.tag){case 1:if(b=v.payload,typeof b=="function"){d=b.call(p,d,f);break e}d=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=v.payload,f=typeof b=="function"?b.call(p,d,f):b,f==null)break e;d=ve({},d,f);break e;case 2:On=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,f=o.effects,f===null?o.effects=[s]:f.push(s))}else p={eventTime:p,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},c===null?(u=c=p,l=d):c=c.next=p,i|=f;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;f=s,s=f.next,f.next=null,o.lastBaseUpdate=f,o.shared.pending=null}}while(1);if(c===null&&(l=d),o.baseState=l,o.firstBaseUpdate=u,o.lastBaseUpdate=c,t=o.shared.interleaved,t!==null){o=t;do i|=o.lane,o=o.next;while(o!==t)}else a===null&&(o.shared.lanes=0);Mr|=i,e.lanes=i,e.memoizedState=d}}function lh(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(P(191,o));o.call(r)}}}var Rb=new L2.Component().refs;function Bd(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ve({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var su={isMounted:function(e){return(e=e._reactInternals)?Or(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=et(),o=er(e),a=Tn(r,o);a.payload=t,n!=null&&(a.callback=n),t=Qn(e,a,o),t!==null&&(Gt(t,e,o,r),_s(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=et(),o=er(e),a=Tn(r,o);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Qn(e,a,o),t!==null&&(Gt(t,e,o,r),_s(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=et(),r=er(e),o=Tn(n,r);o.tag=2,t!=null&&(o.callback=t),t=Qn(e,o,r),t!==null&&(Gt(t,e,r,n),_s(t,e,r))}};function uh(e,t,n,r,o,a,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,i):t.prototype&&t.prototype.isPureReactComponent?!ai(n,r)||!ai(o,a):!0}function Mb(e,t,n){var r=!1,o=ar,a=t.contextType;return typeof a=="object"&&a!==null?a=Lt(a):(o=lt(t)?Lr:Ze.current,r=t.contextTypes,a=(r=r!=null)?Po(e,o):ar),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=su,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=a),t}function ch(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&su.enqueueReplaceState(t,t.state,null)}function Od(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=Rb,A0(e);var a=t.contextType;typeof a=="object"&&a!==null?o.context=Lt(a):(a=lt(t)?Lr:Ze.current,o.context=Po(e,a)),o.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(Bd(e,t,a,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&su.enqueueReplaceState(o,o.state,null),fl(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function aa(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(P(309));var r=n.stateNode}if(!r)throw Error(P(147,e));var o=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(i){var s=o.refs;s===Rb&&(s=o.refs={}),i===null?delete s[a]:s[a]=i},t._stringRef=a,t)}if(typeof e!="string")throw Error(P(284));if(!n._owner)throw Error(P(290,e))}return e}function is(e,t){throw e=Object.prototype.toString.call(t),Error(P(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function dh(e){var t=e._init;return t(e._payload)}function Vb(e){function t(g,m){if(e){var h=g.deletions;h===null?(g.deletions=[m],g.flags|=16):h.push(m)}}function n(g,m){if(!e)return null;for(;m!==null;)t(g,m),m=m.sibling;return null}function r(g,m){for(g=new Map;m!==null;)m.key!==null?g.set(m.key,m):g.set(m.index,m),m=m.sibling;return g}function o(g,m){return g=tr(g,m),g.index=0,g.sibling=null,g}function a(g,m,h){return g.index=h,e?(h=g.alternate,h!==null?(h=h.index,h<m?(g.flags|=2,m):h):(g.flags|=2,m)):(g.flags|=1048576,m)}function i(g){return e&&g.alternate===null&&(g.flags|=2),g}function s(g,m,h,x){return m===null||m.tag!==6?(m=Fc(h,g.mode,x),m.return=g,m):(m=o(m,h),m.return=g,m)}function l(g,m,h,x){var F=h.type;return F===Qr?c(g,m,h.props.children,x,h.key):m!==null&&(m.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Bn&&dh(F)===m.type)?(x=o(m,h.props),x.ref=aa(g,m,h),x.return=g,x):(x=Is(h.type,h.key,h.props,null,g.mode,x),x.ref=aa(g,m,h),x.return=g,x)}function u(g,m,h,x){return m===null||m.tag!==4||m.stateNode.containerInfo!==h.containerInfo||m.stateNode.implementation!==h.implementation?(m=Ac(h,g.mode,x),m.return=g,m):(m=o(m,h.children||[]),m.return=g,m)}function c(g,m,h,x,F){return m===null||m.tag!==7?(m=Ir(h,g.mode,x,F),m.return=g,m):(m=o(m,h),m.return=g,m)}function d(g,m,h){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Fc(""+m,g.mode,h),m.return=g,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Zi:return h=Is(m.type,m.key,m.props,null,g.mode,h),h.ref=aa(g,null,m),h.return=g,h;case Xr:return m=Ac(m,g.mode,h),m.return=g,m;case Bn:var x=m._init;return d(g,x(m._payload),h)}if(fa(m)||ea(m))return m=Ir(m,g.mode,h,null),m.return=g,m;is(g,m)}return null}function f(g,m,h,x){var F=m!==null?m.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return F!==null?null:s(g,m,""+h,x);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Zi:return h.key===F?l(g,m,h,x):null;case Xr:return h.key===F?u(g,m,h,x):null;case Bn:return F=h._init,f(g,m,F(h._payload),x)}if(fa(h)||ea(h))return F!==null?null:c(g,m,h,x,null);is(g,h)}return null}function p(g,m,h,x,F){if(typeof x=="string"&&x!==""||typeof x=="number")return g=g.get(h)||null,s(m,g,""+x,F);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Zi:return g=g.get(x.key===null?h:x.key)||null,l(m,g,x,F);case Xr:return g=g.get(x.key===null?h:x.key)||null,u(m,g,x,F);case Bn:var E=x._init;return p(g,m,h,E(x._payload),F)}if(fa(x)||ea(x))return g=g.get(h)||null,c(m,g,x,F,null);is(m,x)}return null}function b(g,m,h,x){for(var F=null,E=null,A=m,I=m=0,D=null;A!==null&&I<h.length;I++){A.index>I?(D=A,A=null):D=A.sibling;var N=f(g,A,h[I],x);if(N===null){A===null&&(A=D);break}e&&A&&N.alternate===null&&t(g,A),m=a(N,m,I),E===null?F=N:E.sibling=N,E=N,A=D}if(I===h.length)return n(g,A),he&&yr(g,I),F;if(A===null){for(;I<h.length;I++)A=d(g,h[I],x),A!==null&&(m=a(A,m,I),E===null?F=A:E.sibling=A,E=A);return he&&yr(g,I),F}for(A=r(g,A);I<h.length;I++)D=p(A,g,I,h[I],x),D!==null&&(e&&D.alternate!==null&&A.delete(D.key===null?I:D.key),m=a(D,m,I),E===null?F=D:E.sibling=D,E=D);return e&&A.forEach(function(Te){return t(g,Te)}),he&&yr(g,I),F}function v(g,m,h,x){var F=ea(h);if(typeof F!="function")throw Error(P(150));if(h=F.call(h),h==null)throw Error(P(151));for(var E=F=null,A=m,I=m=0,D=null,N=h.next();A!==null&&!N.done;I++,N=h.next()){A.index>I?(D=A,A=null):D=A.sibling;var Te=f(g,A,N.value,x);if(Te===null){A===null&&(A=D);break}e&&A&&Te.alternate===null&&t(g,A),m=a(Te,m,I),E===null?F=Te:E.sibling=Te,E=Te,A=D}if(N.done)return n(g,A),he&&yr(g,I),F;if(A===null){for(;!N.done;I++,N=h.next())N=d(g,N.value,x),N!==null&&(m=a(N,m,I),E===null?F=N:E.sibling=N,E=N);return he&&yr(g,I),F}for(A=r(g,A);!N.done;I++,N=h.next())N=p(A,g,I,N.value,x),N!==null&&(e&&N.alternate!==null&&A.delete(N.key===null?I:N.key),m=a(N,m,I),E===null?F=N:E.sibling=N,E=N);return e&&A.forEach(function(je){return t(g,je)}),he&&yr(g,I),F}function k(g,m,h,x){if(typeof h=="object"&&h!==null&&h.type===Qr&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Zi:e:{for(var F=h.key,E=m;E!==null;){if(E.key===F){if(F=h.type,F===Qr){if(E.tag===7){n(g,E.sibling),m=o(E,h.props.children),m.return=g,g=m;break e}}else if(E.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Bn&&dh(F)===E.type){n(g,E.sibling),m=o(E,h.props),m.ref=aa(g,E,h),m.return=g,g=m;break e}n(g,E);break}else t(g,E);E=E.sibling}h.type===Qr?(m=Ir(h.props.children,g.mode,x,h.key),m.return=g,g=m):(x=Is(h.type,h.key,h.props,null,g.mode,x),x.ref=aa(g,m,h),x.return=g,g=x)}return i(g);case Xr:e:{for(E=h.key;m!==null;){if(m.key===E)if(m.tag===4&&m.stateNode.containerInfo===h.containerInfo&&m.stateNode.implementation===h.implementation){n(g,m.sibling),m=o(m,h.children||[]),m.return=g,g=m;break e}else{n(g,m);break}else t(g,m);m=m.sibling}m=Ac(h,g.mode,x),m.return=g,g=m}return i(g);case Bn:return E=h._init,k(g,m,E(h._payload),x)}if(fa(h))return b(g,m,h,x);if(ea(h))return v(g,m,h,x);is(g,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,m!==null&&m.tag===6?(n(g,m.sibling),m=o(m,h),m.return=g,g=m):(n(g,m),m=Fc(h,g.mode,x),m.return=g,g=m),i(g)):n(g,m)}return k}var qo=Vb(!0),Nb=Vb(!1),ki={},mn=lr(ki),ui=lr(ki),ci=lr(ki);function Tr(e){if(e===ki)throw Error(P(174));return e}function E0(e,t){switch(le(ci,t),le(ui,e),le(mn,ki),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:vd(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=vd(t,e)}de(mn),le(mn,t)}function Lo(){de(mn),de(ui),de(ci)}function jb(e){Tr(ci.current);var t=Tr(mn.current),n=vd(t,e.type);t!==n&&(le(ui,e),le(mn,n))}function P0(e){ui.current===e&&(de(mn),de(ui))}var ye=lr(0);function pl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var xc=[];function I0(){for(var e=0;e<xc.length;e++)xc[e]._workInProgressVersionPrimary=null;xc.length=0}var Ts=Ln.ReactCurrentDispatcher,Sc=Ln.ReactCurrentBatchConfig,Rr=0,be=null,Le=null,Me=null,ml=!1,qa=!1,di=0,NP=0;function He(){throw Error(P(321))}function q0(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Kt(e[n],t[n]))return!1;return!0}function L0(e,t,n,r,o,a){if(Rr=a,be=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ts.current=e===null||e.memoizedState===null?DP:$P,e=n(r,o),qa){a=0;do{if(qa=!1,di=0,25<=a)throw Error(P(301));a+=1,Me=Le=null,t.updateQueue=null,Ts.current=WP,e=n(r,o)}while(qa)}if(Ts.current=hl,t=Le!==null&&Le.next!==null,Rr=0,Me=Le=be=null,ml=!1,t)throw Error(P(300));return e}function z0(){var e=di!==0;return di=0,e}function nn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Me===null?be.memoizedState=Me=e:Me=Me.next=e,Me}function zt(){if(Le===null){var e=be.alternate;e=e!==null?e.memoizedState:null}else e=Le.next;var t=Me===null?be.memoizedState:Me.next;if(t!==null)Me=t,Le=e;else{if(e===null)throw Error(P(310));Le=e,e={memoizedState:Le.memoizedState,baseState:Le.baseState,baseQueue:Le.baseQueue,queue:Le.queue,next:null},Me===null?be.memoizedState=Me=e:Me=Me.next=e}return Me}function fi(e,t){return typeof t=="function"?t(e):t}function Cc(e){var t=zt(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=Le,o=r.baseQueue,a=n.pending;if(a!==null){if(o!==null){var i=o.next;o.next=a.next,a.next=i}r.baseQueue=o=a,n.pending=null}if(o!==null){a=o.next,r=r.baseState;var s=i=null,l=null,u=a;do{var c=u.lane;if((Rr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=d,i=r):l=l.next=d,be.lanes|=c,Mr|=c}u=u.next}while(u!==null&&u!==a);l===null?i=r:l.next=s,Kt(r,t.memoizedState)||(it=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do a=o.lane,be.lanes|=a,Mr|=a,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function kc(e){var t=zt(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,a=t.memoizedState;if(o!==null){n.pending=null;var i=o=o.next;do a=e(a,i.action),i=i.next;while(i!==o);Kt(a,t.memoizedState)||(it=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function Bb(){}function Ob(e,t){var n=be,r=zt(),o=t(),a=!Kt(r.memoizedState,o);if(a&&(r.memoizedState=o,it=!0),r=r.queue,R0(Wb.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||Me!==null&&Me.memoizedState.tag&1){if(n.flags|=2048,pi(9,$b.bind(null,n,r,o,t),void 0,null),Ve===null)throw Error(P(349));(Rr&30)!==0||Db(n,t,o)}return o}function Db(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=be.updateQueue,t===null?(t={lastEffect:null,stores:null},be.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function $b(e,t,n,r){t.value=n,t.getSnapshot=r,Hb(t)&&Ub(e)}function Wb(e,t,n){return n(function(){Hb(t)&&Ub(e)})}function Hb(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Kt(e,n)}catch{return!0}}function Ub(e){var t=In(e,1);t!==null&&Gt(t,e,1,-1)}function fh(e){var t=nn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:fi,lastRenderedState:e},t.queue=e,e=e.dispatch=OP.bind(null,be,e),[t.memoizedState,e]}function pi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=be.updateQueue,t===null?(t={lastEffect:null,stores:null},be.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Gb(){return zt().memoizedState}function Fs(e,t,n,r){var o=nn();be.flags|=e,o.memoizedState=pi(1|t,n,void 0,r===void 0?null:r)}function lu(e,t,n,r){var o=zt();r=r===void 0?null:r;var a=void 0;if(Le!==null){var i=Le.memoizedState;if(a=i.destroy,r!==null&&q0(r,i.deps)){o.memoizedState=pi(t,n,a,r);return}}be.flags|=e,o.memoizedState=pi(1|t,n,a,r)}function ph(e,t){return Fs(8390656,8,e,t)}function R0(e,t){return lu(2048,8,e,t)}function Kb(e,t){return lu(4,2,e,t)}function Zb(e,t){return lu(4,4,e,t)}function Yb(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Xb(e,t,n){return n=n!=null?n.concat([e]):null,lu(4,4,Yb.bind(null,t,e),n)}function M0(){}function Qb(e,t){var n=zt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&q0(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Jb(e,t){var n=zt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&q0(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ev(e,t,n){return(Rr&21)===0?(e.baseState&&(e.baseState=!1,it=!0),e.memoizedState=n):(Kt(n,t)||(n=rb(),be.lanes|=n,Mr|=n,e.baseState=!0),t)}function jP(e,t){var n=re;re=n!==0&&4>n?n:4,e(!0);var r=Sc.transition;Sc.transition={};try{e(!1),t()}finally{re=n,Sc.transition=r}}function tv(){return zt().memoizedState}function BP(e,t,n){var r=er(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},nv(e))rv(t,n);else if(n=Lb(e,t,n,r),n!==null){var o=et();Gt(n,e,r,o),ov(n,t,r)}}function OP(e,t,n){var r=er(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(nv(e))rv(t,o);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var i=t.lastRenderedState,s=a(i,n);if(o.hasEagerState=!0,o.eagerState=s,Kt(s,i)){var l=t.interleaved;l===null?(o.next=o,F0(t)):(o.next=l.next,l.next=o),t.interleaved=o;return}}catch{}finally{}n=Lb(e,t,o,r),n!==null&&(o=et(),Gt(n,e,r,o),ov(n,t,r))}}function nv(e){var t=e.alternate;return e===be||t!==null&&t===be}function rv(e,t){qa=ml=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ov(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,p0(e,n)}}var hl={readContext:Lt,useCallback:He,useContext:He,useEffect:He,useImperativeHandle:He,useInsertionEffect:He,useLayoutEffect:He,useMemo:He,useReducer:He,useRef:He,useState:He,useDebugValue:He,useDeferredValue:He,useTransition:He,useMutableSource:He,useSyncExternalStore:He,useId:He,unstable_isNewReconciler:!1},DP={readContext:Lt,useCallback:function(e,t){return nn().memoizedState=[e,t===void 0?null:t],e},useContext:Lt,useEffect:ph,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Fs(4194308,4,Yb.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Fs(4194308,4,e,t)},useInsertionEffect:function(e,t){return Fs(4,2,e,t)},useMemo:function(e,t){var n=nn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=nn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=BP.bind(null,be,e),[r.memoizedState,e]},useRef:function(e){var t=nn();return e={current:e},t.memoizedState=e},useState:fh,useDebugValue:M0,useDeferredValue:function(e){return nn().memoizedState=e},useTransition:function(){var e=fh(!1),t=e[0];return e=jP.bind(null,e[1]),nn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=be,o=nn();if(he){if(n===void 0)throw Error(P(407));n=n()}else{if(n=t(),Ve===null)throw Error(P(349));(Rr&30)!==0||Db(r,t,n)}o.memoizedState=n;var a={value:n,getSnapshot:t};return o.queue=a,ph(Wb.bind(null,r,a,e),[e]),r.flags|=2048,pi(9,$b.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=nn(),t=Ve.identifierPrefix;if(he){var n=_n,r=kn;n=(r&~(1<<32-Ut(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=di++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=NP++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},$P={readContext:Lt,useCallback:Qb,useContext:Lt,useEffect:R0,useImperativeHandle:Xb,useInsertionEffect:Kb,useLayoutEffect:Zb,useMemo:Jb,useReducer:Cc,useRef:Gb,useState:function(){return Cc(fi)},useDebugValue:M0,useDeferredValue:function(e){var t=zt();return ev(t,Le.memoizedState,e)},useTransition:function(){var e=Cc(fi)[0],t=zt().memoizedState;return[e,t]},useMutableSource:Bb,useSyncExternalStore:Ob,useId:tv,unstable_isNewReconciler:!1},WP={readContext:Lt,useCallback:Qb,useContext:Lt,useEffect:R0,useImperativeHandle:Xb,useInsertionEffect:Kb,useLayoutEffect:Zb,useMemo:Jb,useReducer:kc,useRef:Gb,useState:function(){return kc(fi)},useDebugValue:M0,useDeferredValue:function(e){var t=zt();return Le===null?t.memoizedState=e:ev(t,Le.memoizedState,e)},useTransition:function(){var e=kc(fi)[0],t=zt().memoizedState;return[e,t]},useMutableSource:Bb,useSyncExternalStore:Ob,useId:tv,unstable_isNewReconciler:!1};function zo(e,t){try{var n="",r=t;do n+=bE(r),r=r.return;while(r);var o=n}catch(a){o=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:o,digest:null}}function _c(e,t,n){return{value:e,source:null,stack:n!=null?n:null,digest:t!=null?t:null}}function Dd(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var HP=typeof WeakMap=="function"?WeakMap:Map;function av(e,t,n){n=Tn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){yl||(yl=!0,Qd=r),Dd(e,t)},n}function iv(e,t,n){n=Tn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Dd(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){Dd(e,t),typeof r!="function"&&(Jn===null?Jn=new Set([this]):Jn.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function mh(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new HP;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=aI.bind(null,e,t,n),t.then(e,e))}function hh(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function gh(e,t,n,r,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Tn(-1,1),t.tag=2,Qn(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var UP=Ln.ReactCurrentOwner,it=!1;function Xe(e,t,n,r){t.child=e===null?Nb(t,null,n,r):qo(t,e.child,n,r)}function yh(e,t,n,r,o){n=n.render;var a=t.ref;return ko(t,o),r=L0(e,t,n,r,a,o),n=z0(),e!==null&&!it?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,qn(e,t,o)):(he&&n&&x0(t),t.flags|=1,Xe(e,t,r,o),t.child)}function bh(e,t,n,r,o){if(e===null){var a=n.type;return typeof a=="function"&&!W0(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,sv(e,t,a,r,o)):(e=Is(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,(e.lanes&o)===0){var i=a.memoizedProps;if(n=n.compare,n=n!==null?n:ai,n(i,r)&&e.ref===t.ref)return qn(e,t,o)}return t.flags|=1,e=tr(a,r),e.ref=t.ref,e.return=t,t.child=e}function sv(e,t,n,r,o){if(e!==null){var a=e.memoizedProps;if(ai(a,r)&&e.ref===t.ref)if(it=!1,t.pendingProps=r=a,(e.lanes&o)!==0)(e.flags&131072)!==0&&(it=!0);else return t.lanes=e.lanes,qn(e,t,o)}return $d(e,t,n,r,o)}function lv(e,t,n){var r=t.pendingProps,o=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},le(lo,ht),ht|=n;else{if((n&1073741824)===0)return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,le(lo,ht),ht|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,le(lo,ht),ht|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,le(lo,ht),ht|=r;return Xe(e,t,o,n),t.child}function uv(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function $d(e,t,n,r,o){var a=lt(n)?Lr:Ze.current;return a=Po(t,a),ko(t,o),n=L0(e,t,n,r,a,o),r=z0(),e!==null&&!it?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,qn(e,t,o)):(he&&r&&x0(t),t.flags|=1,Xe(e,t,n,o),t.child)}function vh(e,t,n,r,o){if(lt(n)){var a=!0;sl(t)}else a=!1;if(ko(t,o),t.stateNode===null)As(e,t),Mb(t,n,r),Od(t,n,r,o),r=!0;else if(e===null){var i=t.stateNode,s=t.memoizedProps;i.props=s;var l=i.context,u=n.contextType;typeof u=="object"&&u!==null?u=Lt(u):(u=lt(n)?Lr:Ze.current,u=Po(t,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof i.getSnapshotBeforeUpdate=="function";d||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==r||l!==u)&&ch(t,i,r,u),On=!1;var f=t.memoizedState;i.state=f,fl(t,r,i,o),l=t.memoizedState,s!==r||f!==l||st.current||On?(typeof c=="function"&&(Bd(t,n,c,r),l=t.memoizedState),(s=On||uh(t,n,s,r,f,l,u))?(d||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),i.props=r,i.state=l,i.context=u,r=s):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,zb(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:Ot(t.type,s),i.props=u,d=t.pendingProps,f=i.context,l=n.contextType,typeof l=="object"&&l!==null?l=Lt(l):(l=lt(n)?Lr:Ze.current,l=Po(t,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==d||f!==l)&&ch(t,i,r,l),On=!1,f=t.memoizedState,i.state=f,fl(t,r,i,o);var b=t.memoizedState;s!==d||f!==b||st.current||On?(typeof p=="function"&&(Bd(t,n,p,r),b=t.memoizedState),(u=On||uh(t,n,u,r,f,b,l)||!1)?(c||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,b,l),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,b,l)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=b),i.props=r,i.state=b,i.context=l,r=u):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Wd(e,t,n,r,a,o)}function Wd(e,t,n,r,o,a){uv(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return o&&oh(t,n,!1),qn(e,t,a);r=t.stateNode,UP.current=t;var s=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=qo(t,e.child,null,a),t.child=qo(t,null,s,a)):Xe(e,t,s,a),t.memoizedState=r.state,o&&oh(t,n,!0),t.child}function cv(e){var t=e.stateNode;t.pendingContext?rh(e,t.pendingContext,t.pendingContext!==t.context):t.context&&rh(e,t.context,!1),E0(e,t.containerInfo)}function wh(e,t,n,r,o){return Io(),C0(o),t.flags|=256,Xe(e,t,n,r),t.child}var Hd={dehydrated:null,treeContext:null,retryLane:0};function Ud(e){return{baseLanes:e,cachePool:null,transitions:null}}function dv(e,t,n){var r=t.pendingProps,o=ye.current,a=!1,i=(t.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),le(ye,o&1),e===null)return Nd(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(i=r.children,e=r.fallback,a?(r=t.mode,a=t.child,i={mode:"hidden",children:i},(r&1)===0&&a!==null?(a.childLanes=0,a.pendingProps=i):a=du(i,r,0,null),e=Ir(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Ud(n),t.memoizedState=Hd,e):V0(t,i));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return GP(e,t,i,r,s,o,n);if(a){a=r.fallback,i=t.mode,o=e.child,s=o.sibling;var l={mode:"hidden",children:r.children};return(i&1)===0&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=tr(o,l),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?a=tr(s,a):(a=Ir(a,i,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,i=e.child.memoizedState,i=i===null?Ud(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},a.memoizedState=i,a.childLanes=e.childLanes&~n,t.memoizedState=Hd,r}return a=e.child,e=a.sibling,r=tr(a,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function V0(e,t){return t=du({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ss(e,t,n,r){return r!==null&&C0(r),qo(t,e.child,null,n),e=V0(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function GP(e,t,n,r,o,a,i){if(n)return t.flags&256?(t.flags&=-257,r=_c(Error(P(422))),ss(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,o=t.mode,r=du({mode:"visible",children:r.children},o,0,null),a=Ir(a,o,i,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,(t.mode&1)!==0&&qo(t,e.child,null,i),t.child.memoizedState=Ud(i),t.memoizedState=Hd,a);if((t.mode&1)===0)return ss(e,t,i,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,a=Error(P(419)),r=_c(a,r,void 0),ss(e,t,i,r)}if(s=(i&e.childLanes)!==0,it||s){if(r=Ve,r!==null){switch(i&-i){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(r.suspendedLanes|i))!==0?0:o,o!==0&&o!==a.retryLane&&(a.retryLane=o,In(e,o),Gt(r,e,o,-1))}return $0(),r=_c(Error(P(421))),ss(e,t,i,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=iI.bind(null,e),o._reactRetry=t,null):(e=a.treeContext,gt=Xn(o.nextSibling),vt=t,he=!0,$t=null,e!==null&&(At[Et++]=kn,At[Et++]=_n,At[Et++]=zr,kn=e.id,_n=e.overflow,zr=t),t=V0(t,r.children),t.flags|=4096,t)}function xh(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),jd(e.return,t,n)}function Tc(e,t,n,r,o){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=o)}function fv(e,t,n){var r=t.pendingProps,o=r.revealOrder,a=r.tail;if(Xe(e,t,r.children,n),r=ye.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&xh(e,n,t);else if(e.tag===19)xh(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(le(ye,r),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&pl(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Tc(t,!1,o,n,a);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&pl(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Tc(t,!0,n,null,a);break;case"together":Tc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function As(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function qn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Mr|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(P(153));if(t.child!==null){for(e=t.child,n=tr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=tr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function KP(e,t,n){switch(t.tag){case 3:cv(t),Io();break;case 5:jb(t);break;case 1:lt(t.type)&&sl(t);break;case 4:E0(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;le(cl,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(le(ye,ye.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?dv(e,t,n):(le(ye,ye.current&1),e=qn(e,t,n),e!==null?e.sibling:null);le(ye,ye.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return fv(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),le(ye,ye.current),r)break;return null;case 22:case 23:return t.lanes=0,lv(e,t,n)}return qn(e,t,n)}var pv,Gd,mv,hv;pv=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Gd=function(){};mv=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Tr(mn.current);var a=null;switch(n){case"input":o=hd(e,o),r=hd(e,r),a=[];break;case"select":o=ve({},o,{value:void 0}),r=ve({},r,{value:void 0}),a=[];break;case"textarea":o=bd(e,o),r=bd(e,r),a=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=al)}wd(n,r);var i;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var s=o[u];for(i in s)s.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Qa.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in r){var l=r[u];if(s=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(i in s)!s.hasOwnProperty(i)||l&&l.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in l)l.hasOwnProperty(i)&&s[i]!==l[i]&&(n||(n={}),n[i]=l[i])}else n||(a||(a=[]),a.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(a=a||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(a=a||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Qa.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ue("scroll",e),a||s===l||(a=[])):(a=a||[]).push(u,l))}n&&(a=a||[]).push("style",n);var u=a;(t.updateQueue=u)&&(t.flags|=4)}};hv=function(e,t,n,r){n!==r&&(t.flags|=4)};function ia(e,t){if(!he)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ue(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function ZP(e,t,n){var r=t.pendingProps;switch(S0(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ue(t),null;case 1:return lt(t.type)&&il(),Ue(t),null;case 3:return r=t.stateNode,Lo(),de(st),de(Ze),I0(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(as(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,$t!==null&&(tf($t),$t=null))),Gd(e,t),Ue(t),null;case 5:P0(t);var o=Tr(ci.current);if(n=t.type,e!==null&&t.stateNode!=null)mv(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(P(166));return Ue(t),null}if(e=Tr(mn.current),as(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[sn]=t,r[li]=a,e=(t.mode&1)!==0,n){case"dialog":ue("cancel",r),ue("close",r);break;case"iframe":case"object":case"embed":ue("load",r);break;case"video":case"audio":for(o=0;o<ma.length;o++)ue(ma[o],r);break;case"source":ue("error",r);break;case"img":case"image":case"link":ue("error",r),ue("load",r);break;case"details":ue("toggle",r);break;case"input":P1(r,a),ue("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},ue("invalid",r);break;case"textarea":q1(r,a),ue("invalid",r)}wd(n,a),o=null;for(var i in a)if(a.hasOwnProperty(i)){var s=a[i];i==="children"?typeof s=="string"?r.textContent!==s&&(a.suppressHydrationWarning!==!0&&os(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(a.suppressHydrationWarning!==!0&&os(r.textContent,s,e),o=["children",""+s]):Qa.hasOwnProperty(i)&&s!=null&&i==="onScroll"&&ue("scroll",r)}switch(n){case"input":Yi(r),I1(r,a,!0);break;case"textarea":Yi(r),L1(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=al)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=D2(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[sn]=t,e[li]=r,pv(e,t,!1,!1),t.stateNode=e;e:{switch(i=xd(n,r),n){case"dialog":ue("cancel",e),ue("close",e),o=r;break;case"iframe":case"object":case"embed":ue("load",e),o=r;break;case"video":case"audio":for(o=0;o<ma.length;o++)ue(ma[o],e);o=r;break;case"source":ue("error",e),o=r;break;case"img":case"image":case"link":ue("error",e),ue("load",e),o=r;break;case"details":ue("toggle",e),o=r;break;case"input":P1(e,r),o=hd(e,r),ue("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=ve({},r,{value:void 0}),ue("invalid",e);break;case"textarea":q1(e,r),o=bd(e,r),ue("invalid",e);break;default:o=r}wd(n,o),s=o;for(a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="style"?H2(e,l):a==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&$2(e,l)):a==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ja(e,l):typeof l=="number"&&Ja(e,""+l):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Qa.hasOwnProperty(a)?l!=null&&a==="onScroll"&&ue("scroll",e):l!=null&&s0(e,a,l,i))}switch(n){case"input":Yi(e),I1(e,r,!1);break;case"textarea":Yi(e),L1(e);break;case"option":r.value!=null&&e.setAttribute("value",""+or(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?wo(e,!!r.multiple,a,!1):r.defaultValue!=null&&wo(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=al)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ue(t),null;case 6:if(e&&t.stateNode!=null)hv(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(P(166));if(n=Tr(ci.current),Tr(mn.current),as(t)){if(r=t.stateNode,n=t.memoizedProps,r[sn]=t,(a=r.nodeValue!==n)&&(e=vt,e!==null))switch(e.tag){case 3:os(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&os(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[sn]=t,t.stateNode=r}return Ue(t),null;case 13:if(de(ye),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(he&&gt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)qb(),Io(),t.flags|=98560,a=!1;else if(a=as(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(P(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(P(317));a[sn]=t}else Io(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ue(t),a=!1}else $t!==null&&(tf($t),$t=null),a=!0;if(!a)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(ye.current&1)!==0?ze===0&&(ze=3):$0())),t.updateQueue!==null&&(t.flags|=4),Ue(t),null);case 4:return Lo(),Gd(e,t),e===null&&ii(t.stateNode.containerInfo),Ue(t),null;case 10:return T0(t.type._context),Ue(t),null;case 17:return lt(t.type)&&il(),Ue(t),null;case 19:if(de(ye),a=t.memoizedState,a===null)return Ue(t),null;if(r=(t.flags&128)!==0,i=a.rendering,i===null)if(r)ia(a,!1);else{if(ze!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=pl(e),i!==null){for(t.flags|=128,ia(a,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,i=a.alternate,i===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=i.childLanes,a.lanes=i.lanes,a.child=i.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=i.memoizedProps,a.memoizedState=i.memoizedState,a.updateQueue=i.updateQueue,a.type=i.type,e=i.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return le(ye,ye.current&1|2),t.child}e=e.sibling}a.tail!==null&&Ce()>Ro&&(t.flags|=128,r=!0,ia(a,!1),t.lanes=4194304)}else{if(!r)if(e=pl(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ia(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!he)return Ue(t),null}else 2*Ce()-a.renderingStartTime>Ro&&n!==1073741824&&(t.flags|=128,r=!0,ia(a,!1),t.lanes=4194304);a.isBackwards?(i.sibling=t.child,t.child=i):(n=a.last,n!==null?n.sibling=i:t.child=i,a.last=i)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Ce(),t.sibling=null,n=ye.current,le(ye,r?n&1|2:n&1),t):(Ue(t),null);case 22:case 23:return D0(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(ht&1073741824)!==0&&(Ue(t),t.subtreeFlags&6&&(t.flags|=8192)):Ue(t),null;case 24:return null;case 25:return null}throw Error(P(156,t.tag))}function YP(e,t){switch(S0(t),t.tag){case 1:return lt(t.type)&&il(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Lo(),de(st),de(Ze),I0(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return P0(t),null;case 13:if(de(ye),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(P(340));Io()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return de(ye),null;case 4:return Lo(),null;case 10:return T0(t.type._context),null;case 22:case 23:return D0(),null;case 24:return null;default:return null}}var ls=!1,Ke=!1,XP=typeof WeakSet=="function"?WeakSet:Set,R=null;function so(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){we(e,t,r)}else n.current=null}function Kd(e,t,n){try{n()}catch(r){we(e,t,r)}}var Sh=!1;function QP(e,t){if(Id=nl,e=vb(),w0(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var i=0,s=-1,l=-1,u=0,c=0,d=e,f=null;t:for(;;){for(var p;d!==n||o!==0&&d.nodeType!==3||(s=i+o),d!==a||r!==0&&d.nodeType!==3||(l=i+r),d.nodeType===3&&(i+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===e)break t;if(f===n&&++u===o&&(s=i),f===a&&++c===r&&(l=i),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(qd={focusedElem:e,selectionRange:n},nl=!1,R=t;R!==null;)if(t=R,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,R=e;else for(;R!==null;){t=R;try{var b=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(b!==null){var v=b.memoizedProps,k=b.memoizedState,g=t.stateNode,m=g.getSnapshotBeforeUpdate(t.elementType===t.type?v:Ot(t.type,v),k);g.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(x){we(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,R=e;break}R=t.return}return b=Sh,Sh=!1,b}function La(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var a=o.destroy;o.destroy=void 0,a!==void 0&&Kd(t,n,a)}o=o.next}while(o!==r)}}function uu(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Zd(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function gv(e){var t=e.alternate;t!==null&&(e.alternate=null,gv(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[sn],delete t[li],delete t[Rd],delete t[zP],delete t[RP])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function yv(e){return e.tag===5||e.tag===3||e.tag===4}function Ch(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||yv(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Yd(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=al));else if(r!==4&&(e=e.child,e!==null))for(Yd(e,t,n),e=e.sibling;e!==null;)Yd(e,t,n),e=e.sibling}function Xd(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Xd(e,t,n),e=e.sibling;e!==null;)Xd(e,t,n),e=e.sibling}var Oe=null,Dt=!1;function Vn(e,t,n){for(n=n.child;n!==null;)bv(e,t,n),n=n.sibling}function bv(e,t,n){if(pn&&typeof pn.onCommitFiberUnmount=="function")try{pn.onCommitFiberUnmount(tu,n)}catch{}switch(n.tag){case 5:Ke||so(n,t);case 6:var r=Oe,o=Dt;Oe=null,Vn(e,t,n),Oe=r,Dt=o,Oe!==null&&(Dt?(e=Oe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Oe.removeChild(n.stateNode));break;case 18:Oe!==null&&(Dt?(e=Oe,n=n.stateNode,e.nodeType===8?vc(e.parentNode,n):e.nodeType===1&&vc(e,n),ri(e)):vc(Oe,n.stateNode));break;case 4:r=Oe,o=Dt,Oe=n.stateNode.containerInfo,Dt=!0,Vn(e,t,n),Oe=r,Dt=o;break;case 0:case 11:case 14:case 15:if(!Ke&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var a=o,i=a.destroy;a=a.tag,i!==void 0&&((a&2)!==0||(a&4)!==0)&&Kd(n,t,i),o=o.next}while(o!==r)}Vn(e,t,n);break;case 1:if(!Ke&&(so(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){we(n,t,s)}Vn(e,t,n);break;case 21:Vn(e,t,n);break;case 22:n.mode&1?(Ke=(r=Ke)||n.memoizedState!==null,Vn(e,t,n),Ke=r):Vn(e,t,n);break;default:Vn(e,t,n)}}function kh(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new XP),t.forEach(function(r){var o=sI.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Bt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var a=e,i=t,s=i;e:for(;s!==null;){switch(s.tag){case 5:Oe=s.stateNode,Dt=!1;break e;case 3:Oe=s.stateNode.containerInfo,Dt=!0;break e;case 4:Oe=s.stateNode.containerInfo,Dt=!0;break e}s=s.return}if(Oe===null)throw Error(P(160));bv(a,i,o),Oe=null,Dt=!1;var l=o.alternate;l!==null&&(l.return=null),o.return=null}catch(u){we(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)vv(t,e),t=t.sibling}function vv(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Bt(t,e),en(e),r&4){try{La(3,e,e.return),uu(3,e)}catch(v){we(e,e.return,v)}try{La(5,e,e.return)}catch(v){we(e,e.return,v)}}break;case 1:Bt(t,e),en(e),r&512&&n!==null&&so(n,n.return);break;case 5:if(Bt(t,e),en(e),r&512&&n!==null&&so(n,n.return),e.flags&32){var o=e.stateNode;try{Ja(o,"")}catch(v){we(e,e.return,v)}}if(r&4&&(o=e.stateNode,o!=null)){var a=e.memoizedProps,i=n!==null?n.memoizedProps:a,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&a.type==="radio"&&a.name!=null&&B2(o,a),xd(s,i);var u=xd(s,a);for(i=0;i<l.length;i+=2){var c=l[i],d=l[i+1];c==="style"?H2(o,d):c==="dangerouslySetInnerHTML"?$2(o,d):c==="children"?Ja(o,d):s0(o,c,d,u)}switch(s){case"input":gd(o,a);break;case"textarea":O2(o,a);break;case"select":var f=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!a.multiple;var p=a.value;p!=null?wo(o,!!a.multiple,p,!1):f!==!!a.multiple&&(a.defaultValue!=null?wo(o,!!a.multiple,a.defaultValue,!0):wo(o,!!a.multiple,a.multiple?[]:"",!1))}o[li]=a}catch(v){we(e,e.return,v)}}break;case 6:if(Bt(t,e),en(e),r&4){if(e.stateNode===null)throw Error(P(162));o=e.stateNode,a=e.memoizedProps;try{o.nodeValue=a}catch(v){we(e,e.return,v)}}break;case 3:if(Bt(t,e),en(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ri(t.containerInfo)}catch(v){we(e,e.return,v)}break;case 4:Bt(t,e),en(e);break;case 13:Bt(t,e),en(e),o=e.child,o.flags&8192&&(a=o.memoizedState!==null,o.stateNode.isHidden=a,!a||o.alternate!==null&&o.alternate.memoizedState!==null||(B0=Ce())),r&4&&kh(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(Ke=(u=Ke)||c,Bt(t,e),Ke=u):Bt(t,e),en(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&(e.mode&1)!==0)for(R=e,c=e.child;c!==null;){for(d=R=c;R!==null;){switch(f=R,p=f.child,f.tag){case 0:case 11:case 14:case 15:La(4,f,f.return);break;case 1:so(f,f.return);var b=f.stateNode;if(typeof b.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,b.props=t.memoizedProps,b.state=t.memoizedState,b.componentWillUnmount()}catch(v){we(r,n,v)}}break;case 5:so(f,f.return);break;case 22:if(f.memoizedState!==null){Th(d);continue}}p!==null?(p.return=f,R=p):Th(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{o=d.stateNode,u?(a=o.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(s=d.stateNode,l=d.memoizedProps.style,i=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=W2("display",i))}catch(v){we(e,e.return,v)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(v){we(e,e.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Bt(t,e),en(e),r&4&&kh(e);break;case 21:break;default:Bt(t,e),en(e)}}function en(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(yv(n)){var r=n;break e}n=n.return}throw Error(P(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Ja(o,""),r.flags&=-33);var a=Ch(e);Xd(e,a,o);break;case 3:case 4:var i=r.stateNode.containerInfo,s=Ch(e);Yd(e,s,i);break;default:throw Error(P(161))}}catch(l){we(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function JP(e,t,n){R=e,wv(e)}function wv(e,t,n){for(var r=(e.mode&1)!==0;R!==null;){var o=R,a=o.child;if(o.tag===22&&r){var i=o.memoizedState!==null||ls;if(!i){var s=o.alternate,l=s!==null&&s.memoizedState!==null||Ke;s=ls;var u=Ke;if(ls=i,(Ke=l)&&!u)for(R=o;R!==null;)i=R,l=i.child,i.tag===22&&i.memoizedState!==null?Fh(o):l!==null?(l.return=i,R=l):Fh(o);for(;a!==null;)R=a,wv(a),a=a.sibling;R=o,ls=s,Ke=u}_h(e)}else(o.subtreeFlags&8772)!==0&&a!==null?(a.return=o,R=a):_h(e)}}function _h(e){for(;R!==null;){var t=R;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Ke||uu(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ke)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Ot(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&lh(t,a,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}lh(t,i,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&ri(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}Ke||t.flags&512&&Zd(t)}catch(f){we(t,t.return,f)}}if(t===e){R=null;break}if(n=t.sibling,n!==null){n.return=t.return,R=n;break}R=t.return}}function Th(e){for(;R!==null;){var t=R;if(t===e){R=null;break}var n=t.sibling;if(n!==null){n.return=t.return,R=n;break}R=t.return}}function Fh(e){for(;R!==null;){var t=R;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{uu(4,t)}catch(l){we(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(l){we(t,o,l)}}var a=t.return;try{Zd(t)}catch(l){we(t,a,l)}break;case 5:var i=t.return;try{Zd(t)}catch(l){we(t,i,l)}}}catch(l){we(t,t.return,l)}if(t===e){R=null;break}var s=t.sibling;if(s!==null){s.return=t.return,R=s;break}R=t.return}}var eI=Math.ceil,gl=Ln.ReactCurrentDispatcher,N0=Ln.ReactCurrentOwner,qt=Ln.ReactCurrentBatchConfig,Y=0,Ve=null,Ee=null,$e=0,ht=0,lo=lr(0),ze=0,mi=null,Mr=0,cu=0,j0=0,za=null,ot=null,B0=0,Ro=1/0,wn=null,yl=!1,Qd=null,Jn=null,us=!1,Gn=null,bl=0,Ra=0,Jd=null,Es=-1,Ps=0;function et(){return(Y&6)!==0?Ce():Es!==-1?Es:Es=Ce()}function er(e){return(e.mode&1)===0?1:(Y&2)!==0&&$e!==0?$e&-$e:VP.transition!==null?(Ps===0&&(Ps=rb()),Ps):(e=re,e!==0||(e=window.event,e=e===void 0?16:cb(e.type)),e)}function Gt(e,t,n,r){if(50<Ra)throw Ra=0,Jd=null,Error(P(185));xi(e,n,r),((Y&2)===0||e!==Ve)&&(e===Ve&&((Y&2)===0&&(cu|=n),ze===4&&Wn(e,$e)),ut(e,r),n===1&&Y===0&&(t.mode&1)===0&&(Ro=Ce()+500,iu&&ur()))}function ut(e,t){var n=e.callbackNode;VE(e,t);var r=tl(e,e===Ve?$e:0);if(r===0)n!==null&&M1(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&M1(n),t===1)e.tag===0?MP(Ah.bind(null,e)):Eb(Ah.bind(null,e)),qP(function(){(Y&6)===0&&ur()}),n=null;else{switch(ob(r)){case 1:n=f0;break;case 4:n=tb;break;case 16:n=el;break;case 536870912:n=nb;break;default:n=el}n=Av(n,xv.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function xv(e,t){if(Es=-1,Ps=0,(Y&6)!==0)throw Error(P(327));var n=e.callbackNode;if(_o()&&e.callbackNode!==n)return null;var r=tl(e,e===Ve?$e:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=vl(e,r);else{t=r;var o=Y;Y|=2;var a=Cv();(Ve!==e||$e!==t)&&(wn=null,Ro=Ce()+500,Pr(e,t));do try{rI();break}catch(s){Sv(e,s)}while(1);_0(),gl.current=a,Y=o,Ee!==null?t=0:(Ve=null,$e=0,t=ze)}if(t!==0){if(t===2&&(o=Td(e),o!==0&&(r=o,t=ef(e,o))),t===1)throw n=mi,Pr(e,0),Wn(e,r),ut(e,Ce()),n;if(t===6)Wn(e,r);else{if(o=e.current.alternate,(r&30)===0&&!tI(o)&&(t=vl(e,r),t===2&&(a=Td(e),a!==0&&(r=a,t=ef(e,a))),t===1))throw n=mi,Pr(e,0),Wn(e,r),ut(e,Ce()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(P(345));case 2:br(e,ot,wn);break;case 3:if(Wn(e,r),(r&130023424)===r&&(t=B0+500-Ce(),10<t)){if(tl(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){et(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=zd(br.bind(null,e,ot,wn),t);break}br(e,ot,wn);break;case 4:if(Wn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var i=31-Ut(r);a=1<<i,i=t[i],i>o&&(o=i),r&=~a}if(r=o,r=Ce()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*eI(r/1960))-r,10<r){e.timeoutHandle=zd(br.bind(null,e,ot,wn),r);break}br(e,ot,wn);break;case 5:br(e,ot,wn);break;default:throw Error(P(329))}}}return ut(e,Ce()),e.callbackNode===n?xv.bind(null,e):null}function ef(e,t){var n=za;return e.current.memoizedState.isDehydrated&&(Pr(e,t).flags|=256),e=vl(e,t),e!==2&&(t=ot,ot=n,t!==null&&tf(t)),e}function tf(e){ot===null?ot=e:ot.push.apply(ot,e)}function tI(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],a=o.getSnapshot;o=o.value;try{if(!Kt(a(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Wn(e,t){for(t&=~j0,t&=~cu,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ut(t),r=1<<n;e[n]=-1,t&=~r}}function Ah(e){if((Y&6)!==0)throw Error(P(327));_o();var t=tl(e,0);if((t&1)===0)return ut(e,Ce()),null;var n=vl(e,t);if(e.tag!==0&&n===2){var r=Td(e);r!==0&&(t=r,n=ef(e,r))}if(n===1)throw n=mi,Pr(e,0),Wn(e,t),ut(e,Ce()),n;if(n===6)throw Error(P(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,br(e,ot,wn),ut(e,Ce()),null}function O0(e,t){var n=Y;Y|=1;try{return e(t)}finally{Y=n,Y===0&&(Ro=Ce()+500,iu&&ur())}}function Vr(e){Gn!==null&&Gn.tag===0&&(Y&6)===0&&_o();var t=Y;Y|=1;var n=qt.transition,r=re;try{if(qt.transition=null,re=1,e)return e()}finally{re=r,qt.transition=n,Y=t,(Y&6)===0&&ur()}}function D0(){ht=lo.current,de(lo)}function Pr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,IP(n)),Ee!==null)for(n=Ee.return;n!==null;){var r=n;switch(S0(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&il();break;case 3:Lo(),de(st),de(Ze),I0();break;case 5:P0(r);break;case 4:Lo();break;case 13:de(ye);break;case 19:de(ye);break;case 10:T0(r.type._context);break;case 22:case 23:D0()}n=n.return}if(Ve=e,Ee=e=tr(e.current,null),$e=ht=t,ze=0,mi=null,j0=cu=Mr=0,ot=za=null,_r!==null){for(t=0;t<_r.length;t++)if(n=_r[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,a=n.pending;if(a!==null){var i=a.next;a.next=o,r.next=i}n.pending=r}_r=null}return e}function Sv(e,t){do{var n=Ee;try{if(_0(),Ts.current=hl,ml){for(var r=be.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}ml=!1}if(Rr=0,Me=Le=be=null,qa=!1,di=0,N0.current=null,n===null||n.return===null){ze=1,mi=t,Ee=null;break}e:{var a=e,i=n.return,s=n,l=t;if(t=$e,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=s,d=c.tag;if((c.mode&1)===0&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=hh(i);if(p!==null){p.flags&=-257,gh(p,i,s,a,t),p.mode&1&&mh(a,u,t),t=p,l=u;var b=t.updateQueue;if(b===null){var v=new Set;v.add(l),t.updateQueue=v}else b.add(l);break e}else{if((t&1)===0){mh(a,u,t),$0();break e}l=Error(P(426))}}else if(he&&s.mode&1){var k=hh(i);if(k!==null){(k.flags&65536)===0&&(k.flags|=256),gh(k,i,s,a,t),C0(zo(l,s));break e}}a=l=zo(l,s),ze!==4&&(ze=2),za===null?za=[a]:za.push(a),a=i;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var g=av(a,l,t);sh(a,g);break e;case 1:s=l;var m=a.type,h=a.stateNode;if((a.flags&128)===0&&(typeof m.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Jn===null||!Jn.has(h)))){a.flags|=65536,t&=-t,a.lanes|=t;var x=iv(a,s,t);sh(a,x);break e}}a=a.return}while(a!==null)}_v(n)}catch(F){t=F,Ee===n&&n!==null&&(Ee=n=n.return);continue}break}while(1)}function Cv(){var e=gl.current;return gl.current=hl,e===null?hl:e}function $0(){(ze===0||ze===3||ze===2)&&(ze=4),Ve===null||(Mr&268435455)===0&&(cu&268435455)===0||Wn(Ve,$e)}function vl(e,t){var n=Y;Y|=2;var r=Cv();(Ve!==e||$e!==t)&&(wn=null,Pr(e,t));do try{nI();break}catch(o){Sv(e,o)}while(1);if(_0(),Y=n,gl.current=r,Ee!==null)throw Error(P(261));return Ve=null,$e=0,ze}function nI(){for(;Ee!==null;)kv(Ee)}function rI(){for(;Ee!==null&&!AE();)kv(Ee)}function kv(e){var t=Fv(e.alternate,e,ht);e.memoizedProps=e.pendingProps,t===null?_v(e):Ee=t,N0.current=null}function _v(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=ZP(n,t,ht),n!==null){Ee=n;return}}else{if(n=YP(n,t),n!==null){n.flags&=32767,Ee=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ze=6,Ee=null;return}}if(t=t.sibling,t!==null){Ee=t;return}Ee=t=e}while(t!==null);ze===0&&(ze=5)}function br(e,t,n){var r=re,o=qt.transition;try{qt.transition=null,re=1,oI(e,t,n,r)}finally{qt.transition=o,re=r}return null}function oI(e,t,n,r){do _o();while(Gn!==null);if((Y&6)!==0)throw Error(P(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(P(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(NE(e,a),e===Ve&&(Ee=Ve=null,$e=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||us||(us=!0,Av(el,function(){return _o(),null})),a=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||a){a=qt.transition,qt.transition=null;var i=re;re=1;var s=Y;Y|=4,N0.current=null,QP(e,n),vv(n,e),kP(qd),nl=!!Id,qd=Id=null,e.current=n,JP(n),EE(),Y=s,re=i,qt.transition=a}else e.current=n;if(us&&(us=!1,Gn=e,bl=o),a=e.pendingLanes,a===0&&(Jn=null),qE(n.stateNode),ut(e,Ce()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(yl)throw yl=!1,e=Qd,Qd=null,e;return(bl&1)!==0&&e.tag!==0&&_o(),a=e.pendingLanes,(a&1)!==0?e===Jd?Ra++:(Ra=0,Jd=e):Ra=0,ur(),null}function _o(){if(Gn!==null){var e=ob(bl),t=qt.transition,n=re;try{if(qt.transition=null,re=16>e?16:e,Gn===null)var r=!1;else{if(e=Gn,Gn=null,bl=0,(Y&6)!==0)throw Error(P(331));var o=Y;for(Y|=4,R=e.current;R!==null;){var a=R,i=a.child;if((R.flags&16)!==0){var s=a.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(R=u;R!==null;){var c=R;switch(c.tag){case 0:case 11:case 15:La(8,c,a)}var d=c.child;if(d!==null)d.return=c,R=d;else for(;R!==null;){c=R;var f=c.sibling,p=c.return;if(gv(c),c===u){R=null;break}if(f!==null){f.return=p,R=f;break}R=p}}}var b=a.alternate;if(b!==null){var v=b.child;if(v!==null){b.child=null;do{var k=v.sibling;v.sibling=null,v=k}while(v!==null)}}R=a}}if((a.subtreeFlags&2064)!==0&&i!==null)i.return=a,R=i;else e:for(;R!==null;){if(a=R,(a.flags&2048)!==0)switch(a.tag){case 0:case 11:case 15:La(9,a,a.return)}var g=a.sibling;if(g!==null){g.return=a.return,R=g;break e}R=a.return}}var m=e.current;for(R=m;R!==null;){i=R;var h=i.child;if((i.subtreeFlags&2064)!==0&&h!==null)h.return=i,R=h;else e:for(i=m;R!==null;){if(s=R,(s.flags&2048)!==0)try{switch(s.tag){case 0:case 11:case 15:uu(9,s)}}catch(F){we(s,s.return,F)}if(s===i){R=null;break e}var x=s.sibling;if(x!==null){x.return=s.return,R=x;break e}R=s.return}}if(Y=o,ur(),pn&&typeof pn.onPostCommitFiberRoot=="function")try{pn.onPostCommitFiberRoot(tu,e)}catch{}r=!0}return r}finally{re=n,qt.transition=t}}return!1}function Eh(e,t,n){t=zo(n,t),t=av(e,t,1),e=Qn(e,t,1),t=et(),e!==null&&(xi(e,1,t),ut(e,t))}function we(e,t,n){if(e.tag===3)Eh(e,e,n);else for(;t!==null;){if(t.tag===3){Eh(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Jn===null||!Jn.has(r))){e=zo(n,e),e=iv(t,e,1),t=Qn(t,e,1),e=et(),t!==null&&(xi(t,1,e),ut(t,e));break}}t=t.return}}function aI(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=et(),e.pingedLanes|=e.suspendedLanes&n,Ve===e&&($e&n)===n&&(ze===4||ze===3&&($e&130023424)===$e&&500>Ce()-B0?Pr(e,0):j0|=n),ut(e,t)}function Tv(e,t){t===0&&((e.mode&1)===0?t=1:(t=Ji,Ji<<=1,(Ji&130023424)===0&&(Ji=4194304)));var n=et();e=In(e,t),e!==null&&(xi(e,t,n),ut(e,n))}function iI(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Tv(e,n)}function sI(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(P(314))}r!==null&&r.delete(t),Tv(e,n)}var Fv;Fv=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||st.current)it=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return it=!1,KP(e,t,n);it=(e.flags&131072)!==0}else it=!1,he&&(t.flags&1048576)!==0&&Pb(t,ul,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;As(e,t),e=t.pendingProps;var o=Po(t,Ze.current);ko(t,n),o=L0(null,t,r,e,o,n);var a=z0();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,lt(r)?(a=!0,sl(t)):a=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,A0(t),o.updater=su,t.stateNode=o,o._reactInternals=t,Od(t,r,e,n),t=Wd(null,t,r,!0,a,n)):(t.tag=0,he&&a&&x0(t),Xe(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(As(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=uI(r),e=Ot(r,e),o){case 0:t=$d(null,t,r,e,n);break e;case 1:t=vh(null,t,r,e,n);break e;case 11:t=yh(null,t,r,e,n);break e;case 14:t=bh(null,t,r,Ot(r.type,e),n);break e}throw Error(P(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ot(r,o),$d(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ot(r,o),vh(e,t,r,o,n);case 3:e:{if(cv(t),e===null)throw Error(P(387));r=t.pendingProps,a=t.memoizedState,o=a.element,zb(e,t),fl(t,r,null,n);var i=t.memoizedState;if(r=i.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){o=zo(Error(P(423)),t),t=wh(e,t,r,n,o);break e}else if(r!==o){o=zo(Error(P(424)),t),t=wh(e,t,r,n,o);break e}else for(gt=Xn(t.stateNode.containerInfo.firstChild),vt=t,he=!0,$t=null,n=Nb(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Io(),r===o){t=qn(e,t,n);break e}Xe(e,t,r,n)}t=t.child}return t;case 5:return jb(t),e===null&&Nd(t),r=t.type,o=t.pendingProps,a=e!==null?e.memoizedProps:null,i=o.children,Ld(r,o)?i=null:a!==null&&Ld(r,a)&&(t.flags|=32),uv(e,t),Xe(e,t,i,n),t.child;case 6:return e===null&&Nd(t),null;case 13:return dv(e,t,n);case 4:return E0(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=qo(t,null,r,n):Xe(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ot(r,o),yh(e,t,r,o,n);case 7:return Xe(e,t,t.pendingProps,n),t.child;case 8:return Xe(e,t,t.pendingProps.children,n),t.child;case 12:return Xe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,a=t.memoizedProps,i=o.value,le(cl,r._currentValue),r._currentValue=i,a!==null)if(Kt(a.value,i)){if(a.children===o.children&&!st.current){t=qn(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var s=a.dependencies;if(s!==null){i=a.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(a.tag===1){l=Tn(-1,n&-n),l.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),jd(a.return,n,t),s.lanes|=n;break}l=l.next}}else if(a.tag===10)i=a.type===t.type?null:a.child;else if(a.tag===18){if(i=a.return,i===null)throw Error(P(341));i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),jd(i,n,t),i=a.sibling}else i=a.child;if(i!==null)i.return=a;else for(i=a;i!==null;){if(i===t){i=null;break}if(a=i.sibling,a!==null){a.return=i.return,i=a;break}i=i.return}a=i}Xe(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,ko(t,n),o=Lt(o),r=r(o),t.flags|=1,Xe(e,t,r,n),t.child;case 14:return r=t.type,o=Ot(r,t.pendingProps),o=Ot(r.type,o),bh(e,t,r,o,n);case 15:return sv(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ot(r,o),As(e,t),t.tag=1,lt(r)?(e=!0,sl(t)):e=!1,ko(t,n),Mb(t,r,o),Od(t,r,o,n),Wd(null,t,r,!0,e,n);case 19:return fv(e,t,n);case 22:return lv(e,t,n)}throw Error(P(156,t.tag))};function Av(e,t){return eb(e,t)}function lI(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pt(e,t,n,r){return new lI(e,t,n,r)}function W0(e){return e=e.prototype,!(!e||!e.isReactComponent)}function uI(e){if(typeof e=="function")return W0(e)?1:0;if(e!=null){if(e=e.$$typeof,e===u0)return 11;if(e===c0)return 14}return 2}function tr(e,t){var n=e.alternate;return n===null?(n=Pt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Is(e,t,n,r,o,a){var i=2;if(r=e,typeof e=="function")W0(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case Qr:return Ir(n.children,o,a,t);case l0:i=8,o|=8;break;case dd:return e=Pt(12,n,t,o|2),e.elementType=dd,e.lanes=a,e;case fd:return e=Pt(13,n,t,o),e.elementType=fd,e.lanes=a,e;case pd:return e=Pt(19,n,t,o),e.elementType=pd,e.lanes=a,e;case V2:return du(n,o,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case R2:i=10;break e;case M2:i=9;break e;case u0:i=11;break e;case c0:i=14;break e;case Bn:i=16,r=null;break e}throw Error(P(130,e==null?e:typeof e,""))}return t=Pt(i,n,t,o),t.elementType=e,t.type=r,t.lanes=a,t}function Ir(e,t,n,r){return e=Pt(7,e,r,t),e.lanes=n,e}function du(e,t,n,r){return e=Pt(22,e,r,t),e.elementType=V2,e.lanes=n,e.stateNode={isHidden:!1},e}function Fc(e,t,n){return e=Pt(6,e,null,t),e.lanes=n,e}function Ac(e,t,n){return t=Pt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function cI(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=lc(0),this.expirationTimes=lc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=lc(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function H0(e,t,n,r,o,a,i,s,l){return e=new cI(e,t,n,s,l),t===1?(t=1,a===!0&&(t|=8)):t=0,a=Pt(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},A0(a),e}function dI(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Xr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Ev(e){if(!e)return ar;e=e._reactInternals;e:{if(Or(e)!==e||e.tag!==1)throw Error(P(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(lt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(P(171))}if(e.tag===1){var n=e.type;if(lt(n))return Ab(e,n,t)}return t}function Pv(e,t,n,r,o,a,i,s,l){return e=H0(n,r,!0,e,o,a,i,s,l),e.context=Ev(null),n=e.current,r=et(),o=er(n),a=Tn(r,o),a.callback=t!=null?t:null,Qn(n,a,o),e.current.lanes=o,xi(e,o,r),ut(e,r),e}function fu(e,t,n,r){var o=t.current,a=et(),i=er(o);return n=Ev(n),t.context===null?t.context=n:t.pendingContext=n,t=Tn(a,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Qn(o,t,i),e!==null&&(Gt(e,o,i,a),_s(e,o,i)),i}function wl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ph(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function U0(e,t){Ph(e,t),(e=e.alternate)&&Ph(e,t)}function fI(){return null}var Iv=typeof reportError=="function"?reportError:function(e){console.error(e)};function G0(e){this._internalRoot=e}pu.prototype.render=G0.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(P(409));fu(e,t,null,null)};pu.prototype.unmount=G0.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Vr(function(){fu(null,e,null,null)}),t[Pn]=null}};function pu(e){this._internalRoot=e}pu.prototype.unstable_scheduleHydration=function(e){if(e){var t=sb();e={blockedOn:null,target:e,priority:t};for(var n=0;n<$n.length&&t!==0&&t<$n[n].priority;n++);$n.splice(n,0,e),n===0&&ub(e)}};function K0(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function mu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ih(){}function pI(e,t,n,r,o){if(o){if(typeof r=="function"){var a=r;r=function(){var u=wl(i);a.call(u)}}var i=Pv(t,r,e,0,null,!1,!1,"",Ih);return e._reactRootContainer=i,e[Pn]=i.current,ii(e.nodeType===8?e.parentNode:e),Vr(),i}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var u=wl(l);s.call(u)}}var l=H0(e,0,!1,null,null,!1,!1,"",Ih);return e._reactRootContainer=l,e[Pn]=l.current,ii(e.nodeType===8?e.parentNode:e),Vr(function(){fu(t,l,n,r)}),l}function hu(e,t,n,r,o){var a=n._reactRootContainer;if(a){var i=a;if(typeof o=="function"){var s=o;o=function(){var l=wl(i);s.call(l)}}fu(t,i,e,o)}else i=pI(n,t,e,o,r);return wl(i)}ab=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=pa(t.pendingLanes);n!==0&&(p0(t,n|1),ut(t,Ce()),(Y&6)===0&&(Ro=Ce()+500,ur()))}break;case 13:Vr(function(){var r=In(e,1);if(r!==null){var o=et();Gt(r,e,1,o)}}),U0(e,1)}};m0=function(e){if(e.tag===13){var t=In(e,134217728);if(t!==null){var n=et();Gt(t,e,134217728,n)}U0(e,134217728)}};ib=function(e){if(e.tag===13){var t=er(e),n=In(e,t);if(n!==null){var r=et();Gt(n,e,t,r)}U0(e,t)}};sb=function(){return re};lb=function(e,t){var n=re;try{return re=e,t()}finally{re=n}};Cd=function(e,t,n){switch(t){case"input":if(gd(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=au(r);if(!o)throw Error(P(90));j2(r),gd(r,o)}}}break;case"textarea":O2(e,n);break;case"select":t=n.value,t!=null&&wo(e,!!n.multiple,t,!1)}};K2=O0;Z2=Vr;var mI={usingClientEntryPoint:!1,Events:[Ci,no,au,U2,G2,O0]},sa={findFiberByHostInstance:kr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},hI={bundleType:sa.bundleType,version:sa.version,rendererPackageName:sa.rendererPackageName,rendererConfig:sa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ln.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Q2(e),e===null?null:e.stateNode},findFiberByHostInstance:sa.findFiberByHostInstance||fI,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cs.isDisabled&&cs.supportsFiber)try{tu=cs.inject(hI),pn=cs}catch{}}Ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mI;Ct.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!K0(t))throw Error(P(200));return dI(e,t,null,n)};Ct.createRoot=function(e,t){if(!K0(e))throw Error(P(299));var n=!1,r="",o=Iv;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=H0(e,1,!1,null,null,n,!1,r,o),e[Pn]=t.current,ii(e.nodeType===8?e.parentNode:e),new G0(t)};Ct.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(P(188)):(e=Object.keys(e).join(","),Error(P(268,e)));return e=Q2(t),e=e===null?null:e.stateNode,e};Ct.flushSync=function(e){return Vr(e)};Ct.hydrate=function(e,t,n){if(!mu(t))throw Error(P(200));return hu(null,e,t,!0,n)};Ct.hydrateRoot=function(e,t,n){if(!K0(e))throw Error(P(405));var r=n!=null&&n.hydratedSources||null,o=!1,a="",i=Iv;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=Pv(t,null,e,1,n!=null?n:null,o,!1,a,i),e[Pn]=t.current,ii(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new pu(t)};Ct.render=function(e,t,n){if(!mu(t))throw Error(P(200));return hu(null,e,t,!1,n)};Ct.unmountComponentAtNode=function(e){if(!mu(e))throw Error(P(40));return e._reactRootContainer?(Vr(function(){hu(null,null,e,!1,function(){e._reactRootContainer=null,e[Pn]=null})}),!0):!1};Ct.unstable_batchedUpdates=O0;Ct.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!mu(n))throw Error(P(200));if(e==null||e._reactInternals===void 0)throw Error(P(38));return hu(e,t,n,!1,r)};Ct.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=Ct})(eu);var[gI,yI]=Rt({strict:!1,name:"PortalManagerContext"});function qv(e){const{children:t,zIndex:n}=e;return w(gI,{value:{zIndex:n},children:t})}qv.displayName="PortalManager";var[Lv,bI]=Rt({strict:!1,name:"PortalContext"}),Z0="chakra-portal",vI=".chakra-portal",wI=e=>w("div",{className:"chakra-portal-zIndex",style:{position:"absolute",zIndex:e.zIndex,top:0,left:0,right:0},children:e.children}),xI=e=>{const{appendToParentPortal:t,children:n}=e,[r,o]=_.exports.useState(null),a=_.exports.useRef(null),[,i]=_.exports.useState({});_.exports.useEffect(()=>i({}),[]);const s=bI(),l=yI();Va(()=>{if(!r)return;const c=r.ownerDocument,d=t&&s!=null?s:c.body;if(!d)return;a.current=c.createElement("div"),a.current.className=Z0,d.appendChild(a.current),i({});const f=a.current;return()=>{d.contains(f)&&d.removeChild(f)}},[r]);const u=l!=null&&l.zIndex?w(wI,{zIndex:l==null?void 0:l.zIndex,children:n}):n;return a.current?eu.exports.createPortal(w(Lv,{value:a.current,children:u}),a.current):w("span",{ref:c=>{c&&o(c)}})},SI=e=>{const{children:t,containerRef:n,appendToParentPortal:r}=e,o=n.current,a=o!=null?o:typeof window<"u"?document.body:void 0,i=_.exports.useMemo(()=>{const l=o==null?void 0:o.ownerDocument.createElement("div");return l&&(l.className=Z0),l},[o]),[,s]=_.exports.useState({});return Va(()=>s({}),[]),Va(()=>{if(!(!i||!a))return a.appendChild(i),()=>{a.removeChild(i)}},[i,a]),a&&i?eu.exports.createPortal(w(Lv,{value:r?i:null,children:t}),i):null};function _i(e){const{containerRef:t,...n}=e;return t?w(SI,{containerRef:t,...n}):w(xI,{...n})}_i.defaultProps={appendToParentPortal:!0};_i.className=Z0;_i.selector=vI;_i.displayName="Portal";var[CI,zv]=Rt({name:"TagStylesContext",errorMessage:`useTagStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Tag />" `}),qr=M((e,t)=>{const n=ir("Tag",e),r=ke(e),o={display:"inline-flex",verticalAlign:"top",alignItems:"center",maxWidth:"100%",...n.container};return q.createElement(CI,{value:n},q.createElement(V.span,{ref:t,...r,__css:o}))});qr.displayName="Tag";var kI=M((e,t)=>{const n=zv();return q.createElement(V.span,{ref:t,noOfLines:1,...e,__css:n.label})});kI.displayName="TagLabel";var _I=M((e,t)=>w(Zt,{ref:t,verticalAlign:"top",marginEnd:"0.5rem",...e}));_I.displayName="TagLeftIcon";var TI=M((e,t)=>w(Zt,{ref:t,verticalAlign:"top",marginStart:"0.5rem",...e}));TI.displayName="TagRightIcon";var Rv=e=>w(Zt,{verticalAlign:"inherit",viewBox:"0 0 512 512",...e,children:w("path",{fill:"currentColor",d:"M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"})});Rv.displayName="TagCloseIcon";var FI=M((e,t)=>{const{isDisabled:n,children:r,...o}=e,a=zv(),i={display:"flex",alignItems:"center",justifyContent:"center",outline:"0",...a.closeButton};return q.createElement(V.button,{ref:t,"aria-label":"close",...o,type:"button",disabled:n,__css:i},r||w(Rv,{}))});FI.displayName="TagCloseButton";function AI(e,t){const n=AC(e);_.exports.useEffect(()=>{if(t==null)return;let r=null;return r=window.setTimeout(()=>{n()},t),()=>{r&&window.clearTimeout(r)}},[t,n])}function EI(e,...t){return PI(e)?e(...t):e}var PI=e=>typeof e=="function",II=(e,t)=>e.find(n=>n.id===t);function qh(e,t){const n=Mv(e,t),r=n?e[n].findIndex(o=>o.id===t):-1;return{position:n,index:r}}function Mv(e,t){for(const[n,r]of Object.entries(e))if(II(r,t))return n}function qI(e){const t=e.includes("right"),n=e.includes("left");let r="center";return t&&(r="flex-end"),n&&(r="flex-start"),{display:"flex",flexDirection:"column",alignItems:r}}function LI(e){const n=e==="top"||e==="bottom"?"0 auto":void 0,r=e.includes("top")?"env(safe-area-inset-top, 0px)":void 0,o=e.includes("bottom")?"env(safe-area-inset-bottom, 0px)":void 0,a=e.includes("left")?void 0:"env(safe-area-inset-right, 0px)",i=e.includes("right")?void 0:"env(safe-area-inset-left, 0px)";return{position:"fixed",zIndex:5500,pointerEvents:"none",display:"flex",flexDirection:"column",margin:n,top:r,bottom:o,right:a,left:i}}var zI={top:[],"top-left":[],"top-right":[],"bottom-left":[],bottom:[],"bottom-right":[]},Ma=RI(zI);function RI(e){let t=e;const n=new Set,r=o=>{t=o(t),n.forEach(a=>a())};return{getState:()=>t,subscribe:o=>(n.add(o),()=>{r(()=>e),n.delete(o)}),removeToast:(o,a)=>{r(i=>({...i,[a]:i[a].filter(s=>s.id!=o)}))},notify:(o,a)=>{const i=MI(o,a),{position:s,id:l}=i;return r(u=>{var f,p;const d=s.includes("top")?[i,...(f=u[s])!=null?f:[]]:[...(p=u[s])!=null?p:[],i];return{...u,[s]:d}}),l},update:(o,a)=>{!o||r(i=>{const s={...i},{position:l,index:u}=qh(s,o);return l&&u!==-1&&(s[l][u]={...s[l][u],...a,message:NI(a)}),s})},closeAll:({positions:o}={})=>{r(a=>{const i=["bottom","bottom-right","bottom-left","top","top-left","top-right"];return(o!=null?o:i).reduce((l,u)=>(l[u]=a[u].map(c=>({...c,requestClose:!0})),l),{...a})})},close:o=>{r(a=>{const i=Mv(a,o);return i?{...a,[i]:a[i].map(s=>s.id==o?{...s,requestClose:!0}:s)}:a})},isActive:o=>Boolean(qh(Ma.getState(),o).position)}}var Lh=0;function MI(e,t={}){var o,a;Lh+=1;const n=(o=t.id)!=null?o:Lh,r=(a=t.position)!=null?a:"bottom";return{id:n,message:e,position:r,duration:t.duration,onCloseComplete:t.onCloseComplete,onRequestRemove:()=>Ma.removeToast(String(n),r),status:t.status,requestClose:!1,containerStyle:t.containerStyle}}var VI=e=>{const{status:t,variant:n="solid",id:r,title:o,isClosable:a,onClose:i,description:s,icon:l}=e,u=r?{root:`toast-${r}`,title:`toast-${r}-title`,description:`toast-${r}-description`}:void 0;return q.createElement(l2,{addRole:!1,status:t,variant:n,id:u==null?void 0:u.root,alignItems:"start",borderRadius:"md",boxShadow:"lg",paddingEnd:8,textAlign:"start",width:"auto"},w(c2,{children:l}),q.createElement(V.div,{flex:"1",maxWidth:"100%"},o&&w(d2,{id:u==null?void 0:u.title,children:o}),s&&w(u2,{id:u==null?void 0:u.description,display:"block",children:s})),a&&w(m2,{size:"sm",onClick:i,position:"absolute",insetEnd:1,top:1}))};function NI(e={}){const{render:t,toastComponent:n=VI}=e;return o=>typeof t=="function"?t({...o,...e}):w(n,{...o,...e})}var jI={initial:e=>{const{position:t}=e,n=["top","bottom"].includes(t)?"y":"x";let r=["top-right","bottom-right"].includes(t)?1:-1;return t==="bottom"&&(r=1),{opacity:0,[n]:r*24}},animate:{opacity:1,y:0,x:0,scale:1,transition:{duration:.4,ease:[.4,0,.2,1]}},exit:{opacity:0,scale:.85,transition:{duration:.2,ease:[.4,0,1,1]}}},Vv=_.exports.memo(e=>{const{id:t,message:n,onCloseComplete:r,onRequestRemove:o,requestClose:a=!1,position:i="bottom",duration:s=5e3,containerStyle:l,motionVariants:u=jI,toastSpacing:c="0.5rem"}=e,[d,f]=_.exports.useState(s),p=Xk();k1(()=>{p||r==null||r()},[p]),k1(()=>{f(s)},[s]);const b=()=>f(null),v=()=>f(s),k=()=>{p&&o()};_.exports.useEffect(()=>{p&&a&&o()},[p,a,o]),AI(k,d);const g=_.exports.useMemo(()=>({pointerEvents:"auto",maxWidth:560,minWidth:300,margin:c,...l}),[l,c]),m=_.exports.useMemo(()=>qI(i),[i]);return q.createElement(HF.li,{layout:!0,className:"chakra-toast",variants:u,initial:"initial",animate:"animate",exit:"exit",onHoverStart:b,onHoverEnd:v,custom:{position:i},style:m},q.createElement(V.div,{role:"status","aria-atomic":"true",className:"chakra-toast__inner",__css:g},EI(n,{id:t,onClose:k})))});Vv.displayName="ToastComponent";var BI=e=>{const t=_.exports.useSyncExternalStore(Ma.subscribe,Ma.getState,Ma.getState),{children:n,motionVariants:r,component:o=Vv,portalProps:a}=e,s=Object.keys(t).map(l=>{const u=t[l];return w("ul",{role:"region","aria-live":"polite",id:`chakra-toast-manager-${l}`,style:LI(l),children:w(QF,{initial:!1,children:u.map(c=>w(o,{motionVariants:r,...c},c.id))})},l)});return B(Pe,{children:[n,w(_i,{...a,children:s})]})},OI=e=>{const{children:t,colorModeManager:n,portalZIndex:r,resetCSS:o=!0,theme:a={},environment:i,cssVarsRoot:s}=e,l=w(P2,{environment:i,children:t});return w(yC,{theme:a,cssVarsRoot:s,children:B(Yh,{colorModeManager:n,options:a.config,children:[o?w(RA,{}):w(zA,{}),w(vC,{}),r?w(qv,{zIndex:r,children:l}):l]})})},DI=e=>function({children:n,theme:r=e,toastOptions:o,...a}){return B(OI,{theme:r,...a,children:[n,w(BI,{...o})]})},$I=DI(sC),nf={},zh=eu.exports;nf.createRoot=zh.createRoot,nf.hydrateRoot=zh.hydrateRoot;const WI=({text:e,clickFn:t,...n})=>w(Pe,{children:w(Qf,{colorScheme:"teal",size:"lg",onClick:t,...n,children:e})});j({d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z",displayName:"CopyIcon"});var HI=j({d:"M23.384,21.619,16.855,15.09a9.284,9.284,0,1,0-1.768,1.768l6.529,6.529a1.266,1.266,0,0,0,1.768,0A1.251,1.251,0,0,0,23.384,21.619ZM2.75,9.5a6.75,6.75,0,1,1,6.75,6.75A6.758,6.758,0,0,1,2.75,9.5Z",displayName:"SearchIcon"});j({d:"M23.414,20.591l-4.645-4.645a10.256,10.256,0,1,0-2.828,2.829l4.645,4.644a2.025,2.025,0,0,0,2.828,0A2,2,0,0,0,23.414,20.591ZM10.25,3.005A7.25,7.25,0,1,1,3,10.255,7.258,7.258,0,0,1,10.25,3.005Z",displayName:"Search2Icon"});j({d:"M21.4,13.7C20.6,13.9,19.8,14,19,14c-5,0-9-4-9-9c0-0.8,0.1-1.6,0.3-2.4c0.1-0.3,0-0.7-0.3-1 c-0.3-0.3-0.6-0.4-1-0.3C4.3,2.7,1,7.1,1,12c0,6.1,4.9,11,11,11c4.9,0,9.3-3.3,10.6-8.1c0.1-0.3,0-0.7-0.3-1 C22.1,13.7,21.7,13.6,21.4,13.7z",displayName:"MoonIcon"});j({displayName:"SunIcon",path:B("g",{strokeLinejoin:"round",strokeLinecap:"round",strokeWidth:"2",fill:"none",stroke:"currentColor",children:[w("circle",{cx:"12",cy:"12",r:"5"}),w("path",{d:"M12 1v2"}),w("path",{d:"M12 21v2"}),w("path",{d:"M4.22 4.22l1.42 1.42"}),w("path",{d:"M18.36 18.36l1.42 1.42"}),w("path",{d:"M1 12h2"}),w("path",{d:"M21 12h2"}),w("path",{d:"M4.22 19.78l1.42-1.42"}),w("path",{d:"M18.36 5.64l1.42-1.42"})]})});j({d:"M0,12a1.5,1.5,0,0,0,1.5,1.5h8.75a.25.25,0,0,1,.25.25V22.5a1.5,1.5,0,0,0,3,0V13.75a.25.25,0,0,1,.25-.25H22.5a1.5,1.5,0,0,0,0-3H13.75a.25.25,0,0,1-.25-.25V1.5a1.5,1.5,0,0,0-3,0v8.75a.25.25,0,0,1-.25.25H1.5A1.5,1.5,0,0,0,0,12Z",displayName:"AddIcon"});j({displayName:"SmallAddIcon",viewBox:"0 0 20 20",path:w("path",{fill:"currentColor",d:"M14 9h-3V6c0-.55-.45-1-1-1s-1 .45-1 1v3H6c-.55 0-1 .45-1 1s.45 1 1 1h3v3c0 .55.45 1 1 1s1-.45 1-1v-3h3c.55 0 1-.45 1-1s-.45-1-1-1z",fillRule:"evenodd"})});j({viewBox:"0 0 14 14",d:"M14,7.77 L14,6.17 L12.06,5.53 L11.61,4.44 L12.49,2.6 L11.36,1.47 L9.55,2.38 L8.46,1.93 L7.77,0.01 L6.17,0.01 L5.54,1.95 L4.43,2.4 L2.59,1.52 L1.46,2.65 L2.37,4.46 L1.92,5.55 L0,6.23 L0,7.82 L1.94,8.46 L2.39,9.55 L1.51,11.39 L2.64,12.52 L4.45,11.61 L5.54,12.06 L6.23,13.98 L7.82,13.98 L8.45,12.04 L9.56,11.59 L11.4,12.47 L12.53,11.34 L11.61,9.53 L12.08,8.44 L14,7.75 L14,7.77 Z M7,10 C5.34,10 4,8.66 4,7 C4,5.34 5.34,4 7,4 C8.66,4 10,5.34 10,7 C10,8.66 8.66,10 7,10 Z",displayName:"SettingsIcon"});j({displayName:"CheckCircleIcon",d:"M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"});j({d:"M19.5,9.5h-.75V6.75a6.75,6.75,0,0,0-13.5,0V9.5H4.5a2,2,0,0,0-2,2V22a2,2,0,0,0,2,2h15a2,2,0,0,0,2-2V11.5A2,2,0,0,0,19.5,9.5Zm-9.5,6a2,2,0,1,1,3,1.723V19.5a1,1,0,0,1-2,0V17.223A1.994,1.994,0,0,1,10,15.5ZM7.75,6.75a4.25,4.25,0,0,1,8.5,0V9a.5.5,0,0,1-.5.5H8.25a.5.5,0,0,1-.5-.5Z",displayName:"LockIcon"});j({d:"M19.5,9.5h-.75V6.75A6.751,6.751,0,0,0,5.533,4.811a1.25,1.25,0,1,0,2.395.717A4.251,4.251,0,0,1,16.25,6.75V9a.5.5,0,0,1-.5.5H4.5a2,2,0,0,0-2,2V22a2,2,0,0,0,2,2h15a2,2,0,0,0,2-2V11.5A2,2,0,0,0,19.5,9.5Zm-9.5,6a2,2,0,1,1,3,1.723V19.5a1,1,0,0,1-2,0V17.223A1.994,1.994,0,0,1,10,15.5Z",displayName:"UnlockIcon"});j({displayName:"ViewIcon",path:B("g",{fill:"currentColor",children:[w("path",{d:"M23.432,10.524C20.787,7.614,16.4,4.538,12,4.6,7.6,4.537,3.213,7.615.568,10.524a2.211,2.211,0,0,0,0,2.948C3.182,16.351,7.507,19.4,11.839,19.4h.308c4.347,0,8.671-3.049,11.288-5.929A2.21,2.21,0,0,0,23.432,10.524ZM7.4,12A4.6,4.6,0,1,1,12,16.6,4.6,4.6,0,0,1,7.4,12Z"}),w("circle",{cx:"12",cy:"12",r:"2"})]})});j({displayName:"ViewOffIcon",path:B("g",{fill:"currentColor",children:[w("path",{d:"M23.2,10.549a20.954,20.954,0,0,0-4.3-3.6l4-3.995a1,1,0,1,0-1.414-1.414l-.018.018a.737.737,0,0,1-.173.291l-19.5,19.5c-.008.007-.018.009-.026.017a1,1,0,0,0,1.631,1.088l4.146-4.146a11.26,11.26,0,0,0,4.31.939h.3c4.256,0,8.489-2.984,11.051-5.8A2.171,2.171,0,0,0,23.2,10.549ZM16.313,13.27a4.581,4.581,0,0,1-3,3.028,4.3,4.3,0,0,1-3.1-.19.253.253,0,0,1-.068-.407l5.56-5.559a.252.252,0,0,1,.407.067A4.3,4.3,0,0,1,16.313,13.27Z"}),w("path",{d:"M7.615,13.4a.244.244,0,0,0,.061-.24A4.315,4.315,0,0,1,7.5,12,4.5,4.5,0,0,1,12,7.5a4.276,4.276,0,0,1,1.16.173.244.244,0,0,0,.24-.062l1.941-1.942a.254.254,0,0,0-.1-.421A10.413,10.413,0,0,0,12,4.75C7.7,4.692,3.4,7.7.813,10.549a2.15,2.15,0,0,0-.007,2.9,21.209,21.209,0,0,0,3.438,3.03.256.256,0,0,0,.326-.029Z"})]})});j({d:"M11.2857,6.05714 L10.08571,4.85714 L7.85714,7.14786 L7.85714,1 L6.14286,1 L6.14286,7.14786 L3.91429,4.85714 L2.71429,6.05714 L7,10.42857 L11.2857,6.05714 Z M1,11.2857 L1,13 L13,13 L13,11.2857 L1,11.2857 Z",displayName:"DownloadIcon",viewBox:"0 0 14 14"});j({displayName:"DeleteIcon",path:w("g",{fill:"currentColor",children:w("path",{d:"M19.452 7.5H4.547a.5.5 0 00-.5.545l1.287 14.136A2 2 0 007.326 24h9.347a2 2 0 001.992-1.819L19.95 8.045a.5.5 0 00-.129-.382.5.5 0 00-.369-.163zm-9.2 13a.75.75 0 01-1.5 0v-9a.75.75 0 011.5 0zm5 0a.75.75 0 01-1.5 0v-9a.75.75 0 011.5 0zM22 4h-4.75a.25.25 0 01-.25-.25V2.5A2.5 2.5 0 0014.5 0h-5A2.5 2.5 0 007 2.5v1.25a.25.25 0 01-.25.25H2a1 1 0 000 2h20a1 1 0 000-2zM9 3.75V2.5a.5.5 0 01.5-.5h5a.5.5 0 01.5.5v1.25a.25.25 0 01-.25.25h-5.5A.25.25 0 019 3.75z"})})});j({displayName:"RepeatIcon",path:B("g",{fill:"currentColor",children:[w("path",{d:"M10.319,4.936a7.239,7.239,0,0,1,7.1,2.252,1.25,1.25,0,1,0,1.872-1.657A9.737,9.737,0,0,0,9.743,2.5,10.269,10.269,0,0,0,2.378,9.61a.249.249,0,0,1-.271.178l-1.033-.13A.491.491,0,0,0,.6,9.877a.5.5,0,0,0-.019.526l2.476,4.342a.5.5,0,0,0,.373.248.43.43,0,0,0,.062,0,.5.5,0,0,0,.359-.152l3.477-3.593a.5.5,0,0,0-.3-.844L5.15,10.172a.25.25,0,0,1-.2-.333A7.7,7.7,0,0,1,10.319,4.936Z"}),w("path",{d:"M23.406,14.1a.5.5,0,0,0,.015-.526l-2.5-4.329A.5.5,0,0,0,20.546,9a.489.489,0,0,0-.421.151l-3.456,3.614a.5.5,0,0,0,.3.842l1.848.221a.249.249,0,0,1,.183.117.253.253,0,0,1,.023.216,7.688,7.688,0,0,1-5.369,4.9,7.243,7.243,0,0,1-7.1-2.253,1.25,1.25,0,1,0-1.872,1.656,9.74,9.74,0,0,0,9.549,3.03,10.261,10.261,0,0,0,7.369-7.12.251.251,0,0,1,.27-.179l1.058.127a.422.422,0,0,0,.06,0A.5.5,0,0,0,23.406,14.1Z"})]})});j({displayName:"RepeatClockIcon",path:B("g",{fill:"currentColor",children:[w("path",{d:"M12.965,6a1,1,0,0,0-1,1v5.5a1,1,0,0,0,1,1h5a1,1,0,0,0,0-2h-3.75a.25.25,0,0,1-.25-.25V7A1,1,0,0,0,12.965,6Z"}),w("path",{d:"M12.567,1.258A10.822,10.822,0,0,0,2.818,8.4a.25.25,0,0,1-.271.163L.858,8.309a.514.514,0,0,0-.485.213.5.5,0,0,0-.021.53l2.679,4.7a.5.5,0,0,0,.786.107l3.77-3.746a.5.5,0,0,0-.279-.85L5.593,9.007a.25.25,0,0,1-.192-.35,8.259,8.259,0,1,1,7.866,11.59,1.25,1.25,0,0,0,.045,2.5h.047a10.751,10.751,0,1,0-.792-21.487Z"})]})});j({displayName:"EditIcon",path:B("g",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeWidth:"2",children:[w("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),w("path",{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"})]})});j({d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z",displayName:"ChevronLeftIcon"});j({d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z",displayName:"ChevronRightIcon"});j({displayName:"ChevronDownIcon",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"});j({d:"M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z",displayName:"ChevronUpIcon"});var UI=j({d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z",displayName:"ArrowBackIcon"});j({d:"M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z",displayName:"ArrowForwardIcon"});j({d:"M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z",displayName:"ArrowUpIcon"});j({viewBox:"0 0 16 16",d:"M11.891 9.992a1 1 0 1 1 1.416 1.415l-4.3 4.3a1 1 0 0 1-1.414 0l-4.3-4.3A1 1 0 0 1 4.71 9.992l3.59 3.591 3.591-3.591zm0-3.984L8.3 2.417 4.709 6.008a1 1 0 0 1-1.416-1.415l4.3-4.3a1 1 0 0 1 1.414 0l4.3 4.3a1 1 0 1 1-1.416 1.415z",displayName:"ArrowUpDownIcon"});j({d:"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z",displayName:"ArrowDownIcon"});j({displayName:"ExternalLinkIcon",path:B("g",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeWidth:"2",children:[w("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),w("path",{d:"M15 3h6v6"}),w("path",{d:"M10 14L21 3"})]})});j({displayName:"LinkIcon",path:B("g",{fill:"currentColor",children:[w("path",{d:"M10.458,18.374,7.721,21.11a2.853,2.853,0,0,1-3.942,0l-.892-.891a2.787,2.787,0,0,1,0-3.941l5.8-5.8a2.789,2.789,0,0,1,3.942,0l.893.892A1,1,0,0,0,14.94,9.952l-.893-.892a4.791,4.791,0,0,0-6.771,0l-5.8,5.8a4.787,4.787,0,0,0,0,6.77l.892.891a4.785,4.785,0,0,0,6.771,0l2.736-2.735a1,1,0,1,0-1.414-1.415Z"}),w("path",{d:"M22.526,2.363l-.892-.892a4.8,4.8,0,0,0-6.77,0l-2.905,2.9a1,1,0,0,0,1.414,1.414l2.9-2.9a2.79,2.79,0,0,1,3.941,0l.893.893a2.786,2.786,0,0,1,0,3.942l-5.8,5.8a2.769,2.769,0,0,1-1.971.817h0a2.766,2.766,0,0,1-1.969-.816,1,1,0,1,0-1.415,1.412,4.751,4.751,0,0,0,3.384,1.4h0a4.752,4.752,0,0,0,3.385-1.4l5.8-5.8a4.786,4.786,0,0,0,0-6.771Z"})]})});j({displayName:"PlusSquareIcon",path:B("g",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeWidth:"2",children:[w("rect",{height:"18",width:"18",rx:"2",ry:"2",x:"3",y:"3"}),w("path",{d:"M12 8v8"}),w("path",{d:"M8 12h8"})]})});j({displayName:"CalendarIcon",viewBox:"0 0 14 14",d:"M10.8889,5.5 L3.11111,5.5 L3.11111,7.05556 L10.8889,7.05556 L10.8889,5.5 Z M12.4444,1.05556 L11.6667,1.05556 L11.6667,0 L10.1111,0 L10.1111,1.05556 L3.88889,1.05556 L3.88889,0 L2.33333,0 L2.33333,1.05556 L1.55556,1.05556 C0.692222,1.05556 0.00777777,1.75556 0.00777777,2.61111 L0,12.5 C0,13.3556 0.692222,14 1.55556,14 L12.4444,14 C13.3,14 14,13.3556 14,12.5 L14,2.61111 C14,1.75556 13.3,1.05556 12.4444,1.05556 Z M12.4444,12.5 L1.55556,12.5 L1.55556,3.94444 L12.4444,3.94444 L12.4444,12.5 Z M8.55556,8.61111 L3.11111,8.61111 L3.11111,10.1667 L8.55556,10.1667 L8.55556,8.61111 Z"});j({d:"M0.913134,0.920639 C1.49851,0.331726 2.29348,0 3.12342,0 L10.8766,0 C11.7065,0 12.5015,0.331725 13.0869,0.920639 C13.6721,1.50939 14,2.30689 14,3.13746 L14,8.12943 C13.9962,8.51443 13.9059,8.97125 13.7629,9.32852 C13.6128,9.683 13.3552,10.0709 13.0869,10.3462 C12.813,10.6163 12.4265,10.8761 12.0734,11.0274 C11.7172,11.1716 11.2607,11.263 10.8766,11.2669 L10.1234,11.2669 L10.1234,12.5676 L10.1209,12.5676 C10.1204,12.793 10.0633,13.0791 9.97807,13.262 C9.8627,13.466 9.61158,13.7198 9.40818,13.8382 L9.40824,13.8383 C9.4077,13.8386 9.40716,13.8388 9.40661,13.8391 C9.40621,13.8393 9.4058,13.8396 9.40539,13.8398 L9.40535,13.8397 C9.22958,13.9254 8.94505,13.9951 8.75059,14 L8.74789,14 C8.35724,13.9963 7.98473,13.8383 7.71035,13.5617 L5.39553,11.2669 L3.12342,11.2669 C2.29348,11.2669 1.49851,10.9352 0.913134,10.3462 C0.644826,10.0709 0.387187,9.683 0.23711,9.32852 C0.0941235,8.97125 0.00379528,8.51443 0,8.12943 L0,3.13746 C0,2.30689 0.327915,1.50939 0.913134,0.920639 Z M3.12342,1.59494 C2.71959,1.59494 2.33133,1.75628 2.04431,2.04503 C1.75713,2.33395 1.59494,2.72681 1.59494,3.13746 L1.59494,8.12943 C1.59114,8.35901 1.62114,8.51076 1.71193,8.72129 C1.79563,8.9346 1.88065,9.06264 2.04431,9.22185 C2.33133,9.5106 2.71959,9.67195 3.12342,9.67195 L5.72383,9.67195 C5.93413,9.67195 6.13592,9.75502 6.28527,9.90308 L8.52848,12.1269 L8.52848,10.4694 C8.52848,10.029 8.88552,9.67195 9.32595,9.67195 L10.8766,9.67195 C11.1034,9.67583 11.2517,9.64614 11.4599,9.55518 C11.6712,9.47132 11.7976,9.38635 11.9557,9.22185 C12.1193,9.06264 12.2044,8.9346 12.2881,8.72129 C12.3789,8.51076 12.4089,8.35901 12.4051,8.12943 L12.4051,3.13746 C12.4051,2.72681 12.2429,2.33394 11.9557,2.04503 C11.6687,1.75628 11.2804,1.59494 10.8766,1.59494 L3.12342,1.59494 Z",displayName:"ChatIcon",viewBox:"0 0 14 14"});j({displayName:"TimeIcon",path:B("g",{fill:"currentColor",children:[w("path",{d:"M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10.011,10.011,0,0,1,12,22Z"}),w("path",{d:"M17.134,15.81,12.5,11.561V6.5a1,1,0,0,0-2,0V12a1,1,0,0,0,.324.738l4.959,4.545a1.01,1.01,0,0,0,1.413-.061A1,1,0,0,0,17.134,15.81Z"})]})});j({displayName:"ArrowRightIcon",path:B("g",{fill:"currentColor",children:[w("path",{d:"M13.584,12a2.643,2.643,0,0,1-.775,1.875L3.268,23.416a1.768,1.768,0,0,1-2.5-2.5l8.739-8.739a.25.25,0,0,0,0-.354L.768,3.084a1.768,1.768,0,0,1,2.5-2.5l9.541,9.541A2.643,2.643,0,0,1,13.584,12Z"}),w("path",{d:"M23.75,12a2.643,2.643,0,0,1-.775,1.875l-9.541,9.541a1.768,1.768,0,0,1-2.5-2.5l8.739-8.739a.25.25,0,0,0,0-.354L10.934,3.084a1.768,1.768,0,0,1,2.5-2.5l9.541,9.541A2.643,2.643,0,0,1,23.75,12Z"})]})});j({displayName:"ArrowLeftIcon",path:B("g",{fill:"currentColor",children:[w("path",{d:"M10.416,12a2.643,2.643,0,0,1,.775-1.875L20.732.584a1.768,1.768,0,0,1,2.5,2.5l-8.739,8.739a.25.25,0,0,0,0,.354l8.739,8.739a1.768,1.768,0,0,1-2.5,2.5l-9.541-9.541A2.643,2.643,0,0,1,10.416,12Z"}),w("path",{d:"M.25,12a2.643,2.643,0,0,1,.775-1.875L10.566.584a1.768,1.768,0,0,1,2.5,2.5L4.327,11.823a.25.25,0,0,0,0,.354l8.739,8.739a1.768,1.768,0,0,1-2.5,2.5L1.025,13.875A2.643,2.643,0,0,1,.25,12Z"})]})});j({displayName:"AtSignIcon",d:"M12,.5A11.634,11.634,0,0,0,.262,12,11.634,11.634,0,0,0,12,23.5a11.836,11.836,0,0,0,6.624-2,1.25,1.25,0,1,0-1.393-2.076A9.34,9.34,0,0,1,12,21a9.132,9.132,0,0,1-9.238-9A9.132,9.132,0,0,1,12,3a9.132,9.132,0,0,1,9.238,9v.891a1.943,1.943,0,0,1-3.884,0V12A5.355,5.355,0,1,0,12,17.261a5.376,5.376,0,0,0,3.861-1.634,4.438,4.438,0,0,0,7.877-2.736V12A11.634,11.634,0,0,0,12,.5Zm0,14.261A2.763,2.763,0,1,1,14.854,12,2.812,2.812,0,0,1,12,14.761Z"});j({displayName:"AttachmentIcon",d:"M21.843,3.455a6.961,6.961,0,0,0-9.846,0L1.619,13.832a5.128,5.128,0,0,0,7.252,7.252L17.3,12.653A3.293,3.293,0,1,0,12.646,8L7.457,13.184A1,1,0,1,0,8.871,14.6L14.06,9.409a1.294,1.294,0,0,1,1.829,1.83L7.457,19.67a3.128,3.128,0,0,1-4.424-4.424L13.411,4.869a4.962,4.962,0,1,1,7.018,7.018L12.646,19.67a1,1,0,1,0,1.414,1.414L21.843,13.3a6.96,6.96,0,0,0,0-9.846Z"});j({displayName:"UpDownIcon",viewBox:"-1 -1 9 11",d:"M 3.5 0L 3.98809 -0.569442L 3.5 -0.987808L 3.01191 -0.569442L 3.5 0ZM 3.5 9L 3.01191 9.56944L 3.5 9.98781L 3.98809 9.56944L 3.5 9ZM 0.488094 3.56944L 3.98809 0.569442L 3.01191 -0.569442L -0.488094 2.43056L 0.488094 3.56944ZM 3.01191 0.569442L 6.51191 3.56944L 7.48809 2.43056L 3.98809 -0.569442L 3.01191 0.569442ZM -0.488094 6.56944L 3.01191 9.56944L 3.98809 8.43056L 0.488094 5.43056L -0.488094 6.56944ZM 3.98809 9.56944L 7.48809 6.56944L 6.51191 5.43056L 3.01191 8.43056L 3.98809 9.56944Z"});j({d:"M23.555,8.729a1.505,1.505,0,0,0-1.406-.98H16.062a.5.5,0,0,1-.472-.334L13.405,1.222a1.5,1.5,0,0,0-2.81,0l-.005.016L8.41,7.415a.5.5,0,0,1-.471.334H1.85A1.5,1.5,0,0,0,.887,10.4l5.184,4.3a.5.5,0,0,1,.155.543L4.048,21.774a1.5,1.5,0,0,0,2.31,1.684l5.346-3.92a.5.5,0,0,1,.591,0l5.344,3.919a1.5,1.5,0,0,0,2.312-1.683l-2.178-6.535a.5.5,0,0,1,.155-.543l5.194-4.306A1.5,1.5,0,0,0,23.555,8.729Z",displayName:"StarIcon"});j({displayName:"EmailIcon",path:B("g",{fill:"currentColor",children:[w("path",{d:"M11.114,14.556a1.252,1.252,0,0,0,1.768,0L22.568,4.87a.5.5,0,0,0-.281-.849A1.966,1.966,0,0,0,22,4H2a1.966,1.966,0,0,0-.289.021.5.5,0,0,0-.281.849Z"}),w("path",{d:"M23.888,5.832a.182.182,0,0,0-.2.039l-6.2,6.2a.251.251,0,0,0,0,.354l5.043,5.043a.75.75,0,1,1-1.06,1.061l-5.043-5.043a.25.25,0,0,0-.354,0l-2.129,2.129a2.75,2.75,0,0,1-3.888,0L7.926,13.488a.251.251,0,0,0-.354,0L2.529,18.531a.75.75,0,0,1-1.06-1.061l5.043-5.043a.251.251,0,0,0,0-.354l-6.2-6.2a.18.18,0,0,0-.2-.039A.182.182,0,0,0,0,6V18a2,2,0,0,0,2,2H22a2,2,0,0,0,2-2V6A.181.181,0,0,0,23.888,5.832Z"})]})});j({d:"M2.20731,0.0127209 C2.1105,-0.0066419 1.99432,-0.00664663 1.91687,0.032079 C0.871279,0.438698 0.212942,1.92964 0.0580392,2.95587 C-0.426031,6.28627 2.20731,9.17133 4.62766,11.0689 C6.77694,12.7534 10.9012,15.5223 13.3409,12.8503 C13.6507,12.5211 14.0186,12.037 13.9993,11.553 C13.9412,10.7397 13.186,10.1588 12.6051,9.71349 C12.1598,9.38432 11.2304,8.47427 10.6495,8.49363 C10.1267,8.51299 9.79754,9.05515 9.46837,9.38432 L8.88748,9.96521 C8.79067,10.062 7.55145,9.24878 7.41591,9.15197 C6.91248,8.8228 6.4284,8.45491 6.00242,8.04829 C5.57644,7.64167 5.18919,7.19632 4.86002,6.73161 C4.7632,6.59607 3.96933,5.41495 4.04678,5.31813 C4.04678,5.31813 4.72448,4.58234 4.91811,4.2919 C5.32473,3.67229 5.63453,3.18822 5.16982,2.45243 C4.99556,2.18135 4.78257,1.96836 4.55021,1.73601 C4.14359,1.34875 3.73698,0.942131 3.27227,0.612963 C3.02055,0.419335 2.59457,0.0708094 2.20731,0.0127209 Z",displayName:"PhoneIcon",viewBox:"0 0 14 14"});j({viewBox:"0 0 10 10",d:"M3,2 C2.44771525,2 2,1.55228475 2,1 C2,0.44771525 2.44771525,0 3,0 C3.55228475,0 4,0.44771525 4,1 C4,1.55228475 3.55228475,2 3,2 Z M3,6 C2.44771525,6 2,5.55228475 2,5 C2,4.44771525 2.44771525,4 3,4 C3.55228475,4 4,4.44771525 4,5 C4,5.55228475 3.55228475,6 3,6 Z M3,10 C2.44771525,10 2,9.55228475 2,9 C2,8.44771525 2.44771525,8 3,8 C3.55228475,8 4,8.44771525 4,9 C4,9.55228475 3.55228475,10 3,10 Z M7,2 C6.44771525,2 6,1.55228475 6,1 C6,0.44771525 6.44771525,0 7,0 C7.55228475,0 8,0.44771525 8,1 C8,1.55228475 7.55228475,2 7,2 Z M7,6 C6.44771525,6 6,5.55228475 6,5 C6,4.44771525 6.44771525,4 7,4 C7.55228475,4 8,4.44771525 8,5 C8,5.55228475 7.55228475,6 7,6 Z M7,10 C6.44771525,10 6,9.55228475 6,9 C6,8.44771525 6.44771525,8 7,8 C7.55228475,8 8,8.44771525 8,9 C8,9.55228475 7.55228475,10 7,10 Z",displayName:"DragHandleIcon"});j({displayName:"SpinnerIcon",path:B(Pe,{children:[w("defs",{children:B("linearGradient",{x1:"28.154%",y1:"63.74%",x2:"74.629%",y2:"17.783%",id:"a",children:[w("stop",{stopColor:"currentColor",offset:"0%"}),w("stop",{stopColor:"#fff",stopOpacity:"0",offset:"100%"})]})}),B("g",{transform:"translate(2)",fill:"none",children:[w("circle",{stroke:"url(#a)",strokeWidth:"4",cx:"10",cy:"12",r:"10"}),w("path",{d:"M10 2C4.477 2 0 6.477 0 12",stroke:"currentColor",strokeWidth:"4"}),w("rect",{fill:"currentColor",x:"8",width:"4",height:"4",rx:"8"})]})]})});j({displayName:"CloseIcon",d:"M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"});j({displayName:"SmallCloseIcon",viewBox:"0 0 16 16",path:w("path",{d:"M9.41 8l2.29-2.29c.19-.18.3-.43.3-.71a1.003 1.003 0 0 0-1.71-.71L8 6.59l-2.29-2.3a1.003 1.003 0 0 0-1.42 1.42L6.59 8 4.3 10.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71L8 9.41l2.29 2.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71L9.41 8z",fillRule:"evenodd",fill:"currentColor"})});j({d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z",displayName:"NotAllowedIcon"});j({d:"M21,5H3C2.621,5,2.275,5.214,2.105,5.553C1.937,5.892,1.973,6.297,2.2,6.6l9,12 c0.188,0.252,0.485,0.4,0.8,0.4s0.611-0.148,0.8-0.4l9-12c0.228-0.303,0.264-0.708,0.095-1.047C21.725,5.214,21.379,5,21,5z",displayName:"TriangleDownIcon"});j({d:"M12.8,5.4c-0.377-0.504-1.223-0.504-1.6,0l-9,12c-0.228,0.303-0.264,0.708-0.095,1.047 C2.275,18.786,2.621,19,3,19h18c0.379,0,0.725-0.214,0.895-0.553c0.169-0.339,0.133-0.744-0.095-1.047L12.8,5.4z",displayName:"TriangleUpIcon"});j({displayName:"InfoOutlineIcon",path:B("g",{fill:"currentColor",stroke:"currentColor",strokeLinecap:"square",strokeWidth:"2",children:[w("circle",{cx:"12",cy:"12",fill:"none",r:"11",stroke:"currentColor"}),w("line",{fill:"none",x1:"11.959",x2:"11.959",y1:"11",y2:"17"}),w("circle",{cx:"11.959",cy:"7",r:"1",stroke:"none"})]})});j({displayName:"BellIcon",d:"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"});j({d:"M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z"});j({d:"M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,19a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,12,19Zm1.6-6.08a1,1,0,0,0-.6.917,1,1,0,1,1-2,0,3,3,0,0,1,1.8-2.75A2,2,0,1,0,10,9.255a1,1,0,1,1-2,0,4,4,0,1,1,5.6,3.666Z",displayName:"QuestionIcon"});j({displayName:"QuestionOutlineIcon",path:B("g",{stroke:"currentColor",strokeWidth:"1.5",children:[w("path",{strokeLinecap:"round",fill:"none",d:"M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"}),w("path",{fill:"none",strokeLinecap:"round",d:"M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"}),w("circle",{fill:"none",strokeMiterlimit:"10",cx:"12",cy:"12",r:"11.25"})]})});j({d:"M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z",displayName:"WarningIcon"});j({displayName:"WarningTwoIcon",d:"M23.119,20,13.772,2.15h0a2,2,0,0,0-3.543,0L.881,20a2,2,0,0,0,1.772,2.928H21.347A2,2,0,0,0,23.119,20ZM11,8.423a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Zm1.05,11.51h-.028a1.528,1.528,0,0,1-1.522-1.47,1.476,1.476,0,0,1,1.448-1.53h.028A1.527,1.527,0,0,1,13.5,18.4,1.475,1.475,0,0,1,12.05,19.933Z"});j({viewBox:"0 0 14 14",path:w("g",{fill:"currentColor",children:w("polygon",{points:"5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039"})})});j({displayName:"MinusIcon",path:w("g",{fill:"currentColor",children:w("rect",{height:"4",width:"20",x:"2",y:"10"})})});j({displayName:"HamburgerIcon",viewBox:"0 0 24 24",d:"M 3 5 A 1.0001 1.0001 0 1 0 3 7 L 21 7 A 1.0001 1.0001 0 1 0 21 5 L 3 5 z M 3 11 A 1.0001 1.0001 0 1 0 3 13 L 21 13 A 1.0001 1.0001 0 1 0 21 11 L 3 11 z M 3 17 A 1.0001 1.0001 0 1 0 3 19 L 21 19 A 1.0001 1.0001 0 1 0 21 17 L 3 17 z"});const GI=({recipe:e})=>{const t=e.recipe.healthLabels,n=e.recipe.cautions,r=e.recipe.dietLabels,o=e.recipe.ingredientLines,a=e.recipe.totalTime,i=e.recipe.totalNutrients.ENERC_KCAL,s=Math.round(i.quantity),l=e.recipe.totalNutrients.PROCNT,u=Math.round(l.quantity),c=e.recipe.totalNutrients.FAT,d=Math.round(c.quantity),f=e.recipe.totalNutrients.CHOCDF,p=Math.round(f.quantity),b=e.recipe.totalNutrients.CHOLE,v=Math.round(b.quantity),k=e.recipe.totalNutrients.NA,g=Math.round(k.quantity),m=t.includes("Vegan");return w(Pe,{children:B(qe,{minH:"100vh",justify:"center",alignItems:"center",gap:6,bgColor:"whitesmoke",sx:{boxShadow:"0 1px 1px rgba(0,0,0,0.25), 0 2px 2px rgba(0,0,0,0.20), 0 4px 4px rgba(0,0,0,0.15), 0 8px 8px rgba(0,0,0,0.10), 0 16px 16px rgba(0,0,0,0.05)",transition:"0.2s ease-in-out"},children:[w(Yf,{src:e.recipe.image,boxSize:{base:"600px",md:"880px"},objectFit:"cover",maxHeight:"30vh",alt:e.recipe.label}),w(WI,{pos:"absolute",top:0,leftIcon:w(UI,{}),colorScheme:"blackAlpha",text:"Back to recipes",m:4,onClick:()=>window.location.href="/"}),B(qe,{p:"6",children:[w(qe,{children:w(qe,{color:"gray.500",fontWeight:"semibold",letterSpacing:"wide",fontSize:"xs",textTransform:"uppercase",children:e.recipe.dishType})}),w(Xa,{children:w(qe,{mb:"8",noOfLines:1,children:B(mt,{fontSize:"2xl",fontWeight:"bold",children:[e.recipe.label,m?w(vo,{variant:"solid",colorScheme:"green",ml:"2",children:"Vegan"}):null]})})}),B(Xa,{children:[w(qe,{children:B(qe,{color:"gray.800",fontSize:"sm",children:[w(rt,{size:"xs",color:"gray.600",children:"Cuisine Type:"}),w(mt,{mb:2,children:e.recipe.cuisineType}),w(rt,{size:"xs",color:"gray.600",children:"Meal Type:"}),w(mt,{mb:2,children:e.recipe.mealType}),w(rt,{size:"xs",color:"gray.600",children:"Total cooking time:"}),w(mt,{mb:2,children:`${a} minutes`}),w(rt,{size:"xs",color:"gray.600",children:"Total nutrients:"}),B(mt,{children:["Energy: ",s," ",i.unit]}),B(mt,{children:["Protein: ",u," ",l.unit]}),B(mt,{children:["Fat: ",d," ",c.unit]}),B(mt,{children:["Carbs: ",p," ",f.unit]}),B(mt,{children:["Cholesterol: ",v," ",b.unit]}),B(mt,{children:["Sodium: ",g," ",k.unit]})]})}),w(ld,{}),B(qe,{color:"gray.800",fontSize:"sm",minH:"100%",maxW:"300px",children:[w(rt,{size:"xs",color:"gray.600",mb:"2",children:"Ingredients"}),o.map((h,x)=>B(mt,{variant:"subtle",size:"sm",children:[h,`
`]},x))]}),w(ld,{}),B(qe,{maxW:"200px",children:[w(rt,{size:"xs",color:"green.600",mb:"2",children:"Health"}),t.map((h,x)=>w(qr,{colorScheme:"green",variant:"subtle",size:"sm",mr:"1",children:h},x)),n.length>0?B(Pe,{children:[w(rt,{size:"xs",color:"red.600",mt:"2",mb:"2",children:"Caution"}),n.map((h,x)=>w(qr,{colorScheme:"red",variant:"subtle",size:"sm",mr:"1",children:h},x))]}):null,r.length>0?B(Pe,{children:[w(rt,{size:"xs",color:"yellow.600",mt:"2",mb:"2",children:"Diet"}),r.map((h,x)=>w(qr,{colorScheme:"yellow",variant:"subtle",size:"sm",mr:"1",children:h},x))]}):null]})]})]})]})})},KI=({changeFn:e,...t})=>w(Pe,{children:w(Jl,{children:B(y2,{children:[w(r0,{pointerEvents:"none",children:w(HI,{color:"whitesmoke"})}),w(t0,{type:"text",placeholder:"Search your recipe...",onChange:e,color:"whitesmoke",...t,sx:{"::placeholder":{color:"whitesmoke"}}})]})})}),ZI=({recipe:e,clickFn:t})=>{const n=e.recipe.dietLabels,r=e.recipe.healthLabels,o=e.recipe.cautions,a=e.recipe.mealType,i=e.recipe.dishType,s=r.includes("Vegan");return w(vA,{onClick:()=>t(e),borderRadius:"full",w:"sm",h:"100%",m:"2",minHeight:"70vh",cursor:"pointer",overflow:"hidden",_hover:{bgColor:"orange.100"},bgColor:"whitesmoke",sx:{boxShadow:"0 1px 1px rgba(0,0,0,0.25), 0 2px 2px rgba(0,0,0,0.20), 0 4px 4px rgba(0,0,0,0.15), 0 8px 8px rgba(0,0,0,0.10), 0 16px 16px rgba(0,0,0,0.05)",transition:"0.4s ease-in-out"},children:w(wA,{children:B(qe,{maxW:"sm",borderWidth:"1px",borderColor:"gray.300",borderRadius:"full",overflow:"hidden",minHeight:"70vh",children:[w(Yf,{h:64,w:"sm",src:e.recipe.image}),i.length>0?w(Pe,{children:i.map((l,u)=>w(S2,{h:"30px",color:"blackAlpha.600",mb:"3",children:l},u))}):null,B(rt,{fontSize:"24",textAlign:"center",mb:"2",children:[e.recipe.label,s?w(vo,{variant:"solid",colorScheme:"green",ml:"2",children:w(mt,{children:"Vegan"})}):null]}),B(Xa,{alignItems:"baseline",gap:"1",wrap:"wrap",justifyContent:"left",direction:"row",w:"100%",children:[n.length>0?w(Pe,{children:B(qe,{w:"100%",p:"2",textAlign:"center",children:[w(rt,{size:"xs",color:"gray.500",children:"Diet"}),n.map((l,u)=>w(qr,{colorScheme:"gray",variant:"subtle",size:"sm",mr:"1",children:l},u))]})}):null,o.length>0?w(Pe,{children:B(qe,{w:"100%",p:"2",textAlign:"center",children:[w(rt,{size:"xs",color:"red.300",children:"Cautions"}),o.map((l,u)=>w(qr,{colorScheme:"red",variant:"subtle",size:"sm",mr:"1",children:l},u))]})}):null,a.length>0?w(Pe,{children:B(qe,{w:"100%",p:"2",textAlign:"center",children:[w(rt,{size:"xs",children:"Meal type"}),a.map((l,u)=>w(qr,{colorScheme:"gray.50",variant:"subtle",size:"sm",mr:"1",children:l},u))]})}):null]})]})})})},Rh=({recipes:e,clickFn:t})=>w(Pe,{children:w(qe,{minH:"100vh",children:w(Xa,{gap:"4",wrap:"wrap",justifyContent:"center",direction:"row",children:e.map(n=>w(ZI,{recipe:n,clickFn:t},n.recipe.label))})})}),YI=JSON.parse(`{
  "from": 1,
  "to": 20,
  "count": 10000,
  "_links": {},
  "hits": [
    {
      "recipe": {
        "label": "Paleo Chocolate Covered Caramels",
        "image": "https://media.wincacademy.nl/react/images/final-project/chocolate-caramel.jpeg",
        "url": "http://ourfineday.com/happy-birthday-travis-and-a-recipe-for-chocolate-covered-chocolates/",
        "yield": 12,
        "dietLabels": [
          "Low-Sodium"
        ],
        "healthLabels": [
          "Low Potassium",
          "Kidney-Friendly",
          "Vegetarian",
          "Gluten-Free",
          "Wheat-Free",
          "Peanut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Kosher"
        ],
        "cautions": [
          "Tree-Nuts",
          "Sulfites"
        ],
        "ingredientLines": [
          "1/2 cup honey",
          "1 1/2 Tbsp almond butter",
          "3 tsp butter or coconut butter for dairy free",
          "1 tsp water",
          "1/2 tsp vanilla",
          "1 cup chocolate chips",
          "1/2 tsp coconut oil"
        ],
        "ingredients": [
          {
            "text": "1/2 cup honey",
            "quantity": 0.5,
            "measure": "cup",
            "food": "honey",
            "weight": 169.5,
            "foodCategory": null,
            "foodId": "food_bn6aoj9atkqx8fbkli859bbbxx62",
            "image": "https://www.edamam.com/food-img/198/198c7b25c23b4235b4cc33818c7b335f.jpg"
          },
          {
            "text": "1 1/2 Tbsp almond butter",
            "quantity": 1.5,
            "measure": "tablespoon",
            "food": "almond butter",
            "weight": 24,
            "foodCategory": "plant-based protein",
            "foodId": "food_ae9575obgo01yta6szkvqab50hhl",
            "image": "https://www.edamam.com/food-img/5dd/5ddf70b59f27c03902b5d5a3c4574b37.png"
          },
          {
            "text": "3 tsp butter or coconut butter for dairy free",
            "quantity": 3,
            "measure": "teaspoon",
            "food": "coconut butter",
            "weight": 14.000000000710095,
            "foodCategory": null,
            "foodId": "food_bkx1ggcaouz8qob002t72ay33jbo",
            "image": "https://www.edamam.com/food-img/0d0/0d0a27d667f0b7930bdda17da8ea7dc7.jpg"
          },
          {
            "text": "1 tsp water",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "water",
            "weight": 4.928921594,
            "foodCategory": "water",
            "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
            "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
          },
          {
            "text": "1/2 tsp vanilla",
            "quantity": 0.5,
            "measure": "teaspoon",
            "food": "vanilla",
            "weight": 2.1,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_bh1wvnqaw3q7ciascfoygaabax2a",
            "image": "https://www.edamam.com/food-img/90f/90f910b0bf82750d4f6528263e014cca.jpg"
          },
          {
            "text": "1 cup chocolate chips",
            "quantity": 1,
            "measure": "cup",
            "food": "chocolate chips",
            "weight": 224,
            "foodCategory": "chocolate",
            "foodId": "food_b0camz2asgzienbko2epvbzzv6qj",
            "image": "https://www.edamam.com/food-img/36c/36ce336d10d51259f365ec2dbc1e28c4.jpg"
          },
          {
            "text": "1/2 tsp coconut oil",
            "quantity": 0.5,
            "measure": "teaspoon",
            "food": "coconut oil",
            "weight": 2.25,
            "foodCategory": "Oils",
            "foodId": "food_b40ubq8a0enoidbcr1tmfbwgs6aw",
            "image": "https://www.edamam.com/food-img/3c9/3c97284c57e76e16093d51572b558be8.jpg"
          }
        ],
        "calories": 1912.5630000050721,
        "totalWeight": 440.7789215947101,
        "totalTime": 0,
        "cuisineType": [
          "american"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "desserts"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 1912.5630000050721,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 76.8976600004565,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 35.34678,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0.4121600000000001,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 7.917509999999998,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 3.307704,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 301.1664500001775,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 290.8074500001014,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 10.359000000076083,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 280.61185,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 279.283,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 17.247360000050723,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 33.6,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 168.71615686414296,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 353.66886764782004,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 70.65128921593998,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 270.768,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 4.668120000018259,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 1.1653028921594002,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 128.826,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 2.1915,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 0.010071,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 0.291765,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 0.97122,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 0.065946,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 16.11,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 16.11,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 5.812424999999999,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 0.01125,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 38.766272672406004,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Grilled Pork Chops with Chipotle Sauce",
        "image": "https://media.wincacademy.nl/react/images/final-project/Grilled-Pork-Chop-with-Chipotle-Sauce.jpeg",
        "url": "https://grumpyshoneybunch.com/2009/07/grilled-pork-chops-chipotle-sauce.html",
        "yield": 8,
        "dietLabels": [
          "Low-Carb"
        ],
        "healthLabels": [
          "Sugar-Conscious",
          "Keto-Friendly",
          "Dairy-Free",
          "Gluten-Free",
          "Wheat-Free",
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "No oil added"
        ],
        "cautions": [
          "Sulfites"
        ],
        "ingredientLines": [
          "* 8 pork chops",
          "* 1/2 cup sugar free ketchup",
          "* 1/3 cup Seasoned Rice Vinegar, original",
          "* 1/3 cup Swerve Brown Sweetener",
          "* 1 Tablespoon ground cumin",
          "* 1 teaspoons chipotle chili powder"
        ],
        "ingredients": [
          {
            "text": "* 8 pork chops",
            "quantity": 8,
            "measure": "<unit>",
            "food": "pork chops",
            "weight": 1592,
            "foodCategory": "meats",
            "foodId": "food_a6yuw2wan806yxaem8uqza91rjmb",
            "image": "https://www.edamam.com/food-img/499/49977aabc381bd3889ad9100978e1bb6.jpg"
          },
          {
            "text": "* 1/2 cup sugar free ketchup",
            "quantity": 0.5,
            "measure": "cup",
            "food": "ketchup",
            "weight": 120,
            "foodCategory": "condiments and sauces",
            "foodId": "food_au7jthtab0n3era9uue8pauakroe",
            "image": "https://www.edamam.com/food-img/257/257207c446011b849001ae596390341c.jpeg"
          },
          {
            "text": "* 1/3 cup Seasoned Rice Vinegar, original",
            "quantity": 0.3333333333333333,
            "measure": "cup",
            "food": "Seasoned Rice Vinegar",
            "weight": 79.66666666666666,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_bhk02bwbp4x7kkbeajj2pbnj15cp",
            "image": "https://www.edamam.com/food-img/c7d/c7dbd1846c5d08e9739930d70a404d50.jpg"
          },
          {
            "text": "* 1/3 cup Swerve Brown Sweetener",
            "quantity": 0.3333333333333333,
            "measure": "<unit>",
            "food": "Sweetener",
            "weight": 0.3333333333333333,
            "foodCategory": "sugars",
            "foodId": "food_b3755atafogvz2ac74adra225skl",
            "image": "https://www.edamam.com/food-img/0e3/0e3edc39fe123b516c4c758f4f09e99f.jpg"
          },
          {
            "text": "* 1 Tablespoon ground cumin",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "cumin",
            "weight": 6,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_a8jjbx4biqndasapojdb5by3e92e",
            "image": "https://www.edamam.com/food-img/07e/07e2a4eb77ce46591033846504817d35.jpg"
          },
          {
            "text": "* 1 teaspoons chipotle chili powder",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "chili powder",
            "weight": 2.7,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_aii2sclb4r123rbfr2ybjasrl3nc",
            "image": "https://www.edamam.com/food-img/e6f/e6f19043caefc23b5feda5520076617e.jpg"
          }
        ],
        "calories": 2875.644,
        "totalWeight": 1800.7,
        "totalTime": 0,
        "cuisineType": [
          "mexican"
        ],
        "mealType": [
          "snack"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 2875.644,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 145.59936,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 47.823934,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 1.46464,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 57.431257,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 19.406902,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 37.914233333333335,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 35.984633333333335,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 1.9296,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 26.455763333333334,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0.28396666666666665,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 332.3863533333334,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 1098.48,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 2056.899,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 390.8266666666667,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 443.5663333333334,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 6015.86,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 15.057766666666668,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 28.8184,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 3402.8933333333334,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 106.92099999999999,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 5.400899999999999,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 7.77883,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 3.25308,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 107.68321999999998,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 11.368478,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 12.155999999999999,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 12.155999999999999,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 8.4376,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 7.96,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 4.89198,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 6.7779,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 1267.3743166666668,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Slow Cooker Turkey Dip Sandwiches recipes",
        "image": "https://media.wincacademy.nl/react/images/final-project/turkey-sandwich.jpeg",
        "url": "http://www.bobbiskozykitchen.com/2015/03/slow-cooker-turkey-dip-sandwiches.html",
        "yield": 4,
        "dietLabels": [
          "High-Fiber"
        ],
        "healthLabels": [
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Sulfite-Free"
        ],
        "cautions": [
          "Sulfites"
        ],
        "ingredientLines": [
          "7 tablespoons room temperature unsalted butter, divided",
          "3 tablespoons fresh thyme leaves, chopped",
          "4 cloves garlic, minced",
          "1 lemon, zested",
          "kosher salt",
          "cracked black pepper",
          "1 large onion, chopped",
          "1/2 cup chicken stock",
          "3 tablespoons Worcestershire sauce",
          "1 (4-pound) bone-in turkey breast",
          "4 demi French baguettes, sliced in half",
          "12 slices Swiss Cheese"
        ],
        "ingredients": [
          {
            "text": "7 tablespoons room temperature unsalted butter, divided",
            "quantity": 7,
            "measure": "tablespoon",
            "food": "unsalted butter",
            "weight": 99.39999999999999,
            "foodCategory": "Dairy",
            "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
            "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
          },
          {
            "text": "3 tablespoons fresh thyme leaves, chopped",
            "quantity": 3,
            "measure": "tablespoon",
            "food": "fresh thyme",
            "weight": 7.19999999951308,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_b3o3cj7a5gskecb0ufphtadnbfqb",
            "image": "https://www.edamam.com/food-img/3e7/3e7cf3c8d767a90b906447f5e74059f7.jpg"
          },
          {
            "text": "4 cloves garlic, minced",
            "quantity": 4,
            "measure": "clove",
            "food": "garlic",
            "weight": 12,
            "foodCategory": "vegetables",
            "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
            "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
          },
          {
            "text": "1 lemon, zested",
            "quantity": 1,
            "measure": "<unit>",
            "food": "lemon",
            "weight": 58,
            "foodCategory": "fruit",
            "foodId": "food_a6uzc62astrxcgbtzyq59b6fncrr",
            "image": "https://www.edamam.com/food-img/70a/70acba3d4c734d7c70ef4efeed85dc8f.jpg"
          },
          {
            "text": "kosher salt",
            "quantity": 0,
            "measure": null,
            "food": "kosher salt",
            "weight": 23.087816879997078,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "cracked black pepper",
            "quantity": 0,
            "measure": null,
            "food": "black pepper",
            "weight": 11.543908439998539,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
            "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
          },
          {
            "text": "1 large onion, chopped",
            "quantity": 1,
            "measure": "<unit>",
            "food": "onion",
            "weight": 150,
            "foodCategory": "vegetables",
            "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
            "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
          },
          {
            "text": "1/2 cup chicken stock",
            "quantity": 0.5,
            "measure": "cup",
            "food": "chicken stock",
            "weight": 120,
            "foodCategory": "canned soup",
            "foodId": "food_bptblvzambd16nbhewqmhaw1rnh5",
            "image": "https://www.edamam.com/food-img/26a/26a10c4cb4e07bab54d8a687ef5ac7d8.jpg"
          },
          {
            "text": "3 tablespoons Worcestershire sauce",
            "quantity": 3,
            "measure": "tablespoon",
            "food": "Worcestershire sauce",
            "weight": 51,
            "foodCategory": "canned soup",
            "foodId": "food_ahb8mscbejo58ubexo0itam1i74g",
            "image": "https://www.edamam.com/food-img/072/072b61dd1ad5bb641f05b14f716ba6d0.jpg"
          },
          {
            "text": "1 (4-pound) bone-in turkey breast",
            "quantity": 4,
            "measure": "pound",
            "food": "turkey breast",
            "weight": 1814.36948,
            "foodCategory": "Poultry",
            "foodId": "food_aijy334arptsr3b4zwpdrajqapl8",
            "image": "https://www.edamam.com/food-img/3d8/3d80f3f4fcb0efcf54d094c857d74926.jpg"
          },
          {
            "text": "4 demi French baguettes, sliced in half",
            "quantity": 4,
            "measure": "<unit>",
            "food": "baguettes",
            "weight": 1200,
            "foodCategory": "bread, rolls and tortillas",
            "foodId": "food_bz1n7y8bupmgp0anvyqmda9dwufz",
            "image": "https://www.edamam.com/food-img/470/47053c77e167539c64fef3f2a3249bb2.jpg"
          },
          {
            "text": "12 slices Swiss Cheese",
            "quantity": 12,
            "measure": "slice",
            "food": "Swiss Cheese",
            "weight": 336,
            "foodCategory": "Cheese",
            "foodId": "food_am9c0zybyfhgn9brc0imabzslets",
            "image": "https://www.edamam.com/food-img/419/419f6ce36db411c072d0dbf6c8510897.jpg"
          }
        ],
        "calories": 8031.129285423905,
        "totalWeight": 3859.513388439512,
        "totalTime": 375,
        "cuisineType": [
          "american"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "sandwiches"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 8031.129285423905,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 320.02449516153575,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 149.01005856668252,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 3.318332,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 93.9322608345712,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 44.1734542374286,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 687.3825694472602,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 652.6279606120087,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 34.75460883525146,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 74.95002101401599,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 585.4535633416888,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 1587.8361458,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 9117.120975567957,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 3727.6667435472214,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 970.9018911116184,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 7255.567006164616,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 73.40638389343889,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 53.81769326282717,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 6386.241884854681,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 1476.3375059176406,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 63.98119999922044,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 9.893574289674964,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 8.318519446989704,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 145.90443453746033,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 9.910386927158704,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 2227.9697416745803,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 859.9697416745806,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 804,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 18.2496966344,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 3.171,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 6.426336647775984,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 44.209378116277605,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 2031.4894896573069,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Blueberry Basil Margarita Cocktail recipes",
        "image": "https://media.wincacademy.nl/react/images/final-project/blueberry-margarita.jpeg",
        "url": "http://drinkwire.liquor.com/post/blueberry-basil-margarita-cocktail-recipe/",
        "yield": 4,
        "dietLabels": [
          "Low-Fat",
          "Low-Sodium"
        ],
        "healthLabels": [
          "Low Potassium",
          "Kidney-Friendly",
          "Keto-Friendly",
          "Vegan",
          "Vegetarian",
          "Pescatarian",
          "Paleo",
          "Dairy-Free",
          "Gluten-Free",
          "Wheat-Free",
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "No oil added",
          "Sulfite-Free",
          "Kosher",
          "Alcohol-Cocktail"
        ],
        "cautions": [
          "Sulfites"
        ],
        "ingredientLines": [
          "2.0 oz. Tres Agaves Blanco Tequila",
          "1.0 oz. agave nectar",
          "12-15 blueberries",
          "1 lime squeezed",
          "A couple sprigs of basil"
        ],
        "ingredients": [
          {
            "text": "2.0 oz. Tres Agaves Blanco Tequila",
            "quantity": 2,
            "measure": "ounce",
            "food": "Tequila",
            "weight": 56.69904625,
            "foodCategory": "liquors and cocktails",
            "foodId": "food_ajguqpia53yz3oah6w2frad3tz65",
            "image": "https://www.edamam.com/food-img/c7f/c7fcc63de96b349534aade3de3f9fa7d.jpg"
          },
          {
            "text": "1.0 oz. agave nectar",
            "quantity": 1,
            "measure": "ounce",
            "food": "agave nectar",
            "weight": 28.349523125,
            "foodCategory": "sugar syrups",
            "foodId": "food_bj8pkd1bgey1rlbp58zagbjhpfi0",
            "image": "https://www.edamam.com/food-img/3b5/3b5425ed8e35a486b4138cc8720ae9e4.jpg"
          },
          {
            "text": "12-15 blueberries",
            "quantity": 13.5,
            "measure": "<unit>",
            "food": "blueberries",
            "weight": 18.360000000000003,
            "foodCategory": "fruit",
            "foodId": "food_bgkl0cuasoeomtbolalmcauhha54",
            "image": "https://www.edamam.com/food-img/f55/f55705a2a9ea9f7abf449a05fa968139.png"
          },
          {
            "text": "1 lime squeezed",
            "quantity": 1,
            "measure": "<unit>",
            "food": "lime",
            "weight": 67,
            "foodCategory": "fruit",
            "foodId": "food_av58muyb8kg92fbk0g8g8aui5knv",
            "image": "https://www.edamam.com/food-img/48a/48a123c9576647c4ada6a41df5eeb22a.jpg"
          },
          {
            "text": "A couple sprigs of basil",
            "quantity": 2,
            "measure": "sprig",
            "food": "basil",
            "weight": 4,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_bfeht3obd58c3gak5ehpibxgbbs6",
            "image": "https://www.edamam.com/food-img/5f1/5f1b05685ac2b404236a5d1c1f3c8c10.jpg"
          }
        ],
        "calories": 243.539632975,
        "totalWeight": 174.408569375,
        "totalTime": 15,
        "cuisineType": [
          "world"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "alcohol cocktail"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 243.539632975,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 0.22018800000000005,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 0.0215208,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 0.0248792,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 0.07921560000000001,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 31.37380157500001,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 27.57568541875001,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 3.7981161562500003,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 23.101117418750007,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 20.128161418750004,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 0.7308640000000001,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 0,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 2.2505904625000004,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 30.291600000000003,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 7.681600000000001,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 95.41118092500001,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 0.6028876185,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 0.1581556185,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 18.771161850000006,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 12.450800000000001,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 21.997920000000004,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 0.031655142775000006,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 0.026235561850000005,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 0.25419567601250004,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 0.0451241904625,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 9.181600000000001,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 9.181600000000001,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 0.28405199999999997,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 20.537480000000002,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 116.03912080250001,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Potato Gratin",
        "image": "https://media.wincacademy.nl/react/images/final-project/potatoes-gratin.webp",
        "url": "http://www.cookstr.com/recipes/potato-gratin-2",
        "yield": 12,
        "dietLabels": [],
        "healthLabels": [
          "Sugar-Conscious",
          "Vegetarian",
          "Pescatarian",
          "Gluten-Free",
          "Wheat-Free",
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Sulfite-Free",
          "Kosher"
        ],
        "cautions": [],
        "ingredientLines": [
          "1 cup milk",
          "1 cup heavy cream",
          "2 cups finely sliced leeks, white part only",
          "1 tablespoon roasted garlic pur\xE9e (see note)",
          "1 tablespoon chopped rosemary leaves",
          "Pinch freshly ground nutmeg",
          "Coarse salt and freshly ground white pepper to taste",
          "5 tablespoons unsalted butter, at room temperature",
          "4 large Yukon Gold potatoes, peeled and cut, crosswise, into 1/8-inch-thick slices"
        ],
        "ingredients": [
          {
            "text": "1 cup milk",
            "quantity": 1,
            "measure": "cup",
            "food": "milk",
            "weight": 244,
            "foodCategory": "Milk",
            "foodId": "food_b49rs1kaw0jktabzkg2vvanvvsis",
            "image": "https://www.edamam.com/food-img/7c9/7c9962acf83654a8d98ea6a2ade93735.jpg"
          },
          {
            "text": "1 cup heavy cream",
            "quantity": 1,
            "measure": "cup",
            "food": "heavy cream",
            "weight": 238,
            "foodCategory": "Dairy",
            "foodId": "food_bgtkr21b5v16mca246x9ebnaswyo",
            "image": "https://www.edamam.com/food-img/484/4848d71f6a14dd5076083f5e17925420.jpg"
          },
          {
            "text": "2 cups finely sliced leeks, white part only",
            "quantity": 2,
            "measure": "cup",
            "food": "leeks",
            "weight": 178,
            "foodCategory": "vegetables",
            "foodId": "food_a27jevnb06c1m9ax7k41xbbcwcuo",
            "image": "https://www.edamam.com/food-img/4ae/4ae9e09d029a28e0e2c64bdfdbf3f6ae.jpg"
          },
          {
            "text": "1 tablespoon roasted garlic pur\xE9e (see note)",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "garlic",
            "weight": 8.499999999856291,
            "foodCategory": "vegetables",
            "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
            "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
          },
          {
            "text": "1 tablespoon chopped rosemary leaves",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "rosemary",
            "weight": 1.7,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_b6tm2t2blxi7okaeiv91wb8bmygq",
            "image": "https://www.edamam.com/food-img/0ac/0ac8f7cf6f2d0ad7b1a2f9900fae44f3.jpg"
          },
          {
            "text": "Pinch freshly ground nutmeg",
            "quantity": 1,
            "measure": "pinch",
            "food": "ground nutmeg",
            "weight": 0.14583333352071937,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_aa8vp2kadkkiiubgpp48fazrqiq2",
            "image": "https://www.edamam.com/food-img/b9e/b9e54f78ae18cf99a6504b472ba25e7b.jpg"
          },
          {
            "text": "Coarse salt and freshly ground white pepper to taste",
            "quantity": 0,
            "measure": null,
            "food": "Coarse salt",
            "weight": 13.304075000000262,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "Coarse salt and freshly ground white pepper to taste",
            "quantity": 0,
            "measure": null,
            "food": "white pepper",
            "weight": 0,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_a443px0bncpqa5avv80p3anrp26k",
            "image": "https://www.edamam.com/food-img/4f0/4f0e35fe6c042996408b337fb550324a.jpg"
          },
          {
            "text": "5 tablespoons unsalted butter, at room temperature",
            "quantity": 5,
            "measure": "tablespoon",
            "food": "unsalted butter",
            "weight": 71,
            "foodCategory": "Dairy",
            "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
            "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
          },
          {
            "text": "4 large Yukon Gold potatoes, peeled and cut, crosswise, into 1/8-inch-thick slices",
            "quantity": 4,
            "measure": "<unit>",
            "food": "Yukon Gold potatoes",
            "weight": 1476,
            "foodCategory": "vegetables",
            "foodId": "food_abiw5baauresjmb6xpap2bg3otzu",
            "image": "https://www.edamam.com/food-img/651/6512e82417bce15c2899630c1a2799df.jpg"
          }
        ],
        "calories": 2739.76762500077,
        "totalWeight": 2229.800431236176,
        "totalTime": 120,
        "cuisineType": [
          "french"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 2739.76762500077,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 155.63557208340066,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 96.38664016671514,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 2.32738,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 42.400860833339344,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 6.873602416666964,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 304.67288125004484,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 268.54834791667554,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 36.12453333336929,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 37.54896041667083,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 46.259086666668466,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 503.11,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 5156.393388500102,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 753.6314368300897,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 435.86342097933505,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 7098.92778449897,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 15.712683506415825,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 6.138100014571826,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 1287.6176250001793,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 1726.289291666676,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 316.5869749999608,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 1.4738665833336944,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 1.2360371249999487,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 16.685738375001428,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 5.0317103333318585,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 376.14883333347143,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 376.14883333347143,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 1.6471,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 5.9030000000000005,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 6.132799999999884,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 125.16649999999754,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 1690.0881846123998,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Seafood Casserole",
        "image": "https://media.wincacademy.nl/react/images/final-project/seafood-casserol.jpeg",
        "url": "http://www.bigoven.com/recipe/Seafood-Casserole/296427",
        "yield": 6,
        "dietLabels": [
          "Balanced"
        ],
        "healthLabels": [
          "Sugar-Conscious",
          "Pescatarian",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Kosher"
        ],
        "cautions": [
          "Sulfites",
          "FODMAP"
        ],
        "ingredientLines": [
          "6 oz pasta or noodles",
          "1/2 cup mayonnaise or salad dressing",
          "1/2 cup white wine",
          "1 can condensed cream of mushroom soup",
          "1 cup cheddar cheese",
          "1/2 tsp dry mustard",
          "8 oz, can tuna, shrimp or crab",
          "1 cup breadcrumbs"
        ],
        "ingredients": [
          {
            "text": "6 oz pasta or noodles",
            "quantity": 6,
            "measure": "ounce",
            "food": "pasta",
            "weight": 170.09713875,
            "foodCategory": "grains",
            "foodId": "food_a8hs60uayl5icia1qe8qoba1kwp8",
            "image": "https://www.edamam.com/food-img/296/296ff2b02ef3822928c3c923e22c7d19.jpg"
          },
          {
            "text": "1/2 cup mayonnaise or salad dressing",
            "quantity": 0.5,
            "measure": "cup",
            "food": "salad dressing",
            "weight": 125,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_a67f1v3boelh4wasob4qib34t5bv",
            "image": "https://www.edamam.com/food-img/241/24178db68d42001caf980f8f209534cb.jpg"
          },
          {
            "text": "1/2 cup white wine",
            "quantity": 0.5,
            "measure": "cup",
            "food": "white wine",
            "weight": 117.6,
            "foodCategory": "wines",
            "foodId": "food_bn44h7baron9ufaoxinmya8l0yye",
            "image": "https://www.edamam.com/food-img/a71/a718cf3c52add522128929f1f324d2ab.jpg"
          },
          {
            "text": "1 can condensed cream of mushroom soup",
            "quantity": 1,
            "measure": "can",
            "food": "condensed cream of mushroom soup",
            "weight": 303,
            "foodCategory": "canned soup",
            "foodId": "food_b628l7bbpw7rnqa1ri8egb0xetpn",
            "image": "https://www.edamam.com/food-img/545/545d0db4311588977bed0aabfa530c58.jpg"
          },
          {
            "text": "1 cup cheddar cheese",
            "quantity": 1,
            "measure": "cup",
            "food": "cheddar cheese",
            "weight": 132,
            "foodCategory": "Cheese",
            "foodId": "food_bhppgmha1u27voagb8eptbp9g376",
            "image": "https://www.edamam.com/food-img/bcd/bcd94dde1fcde1475b5bf0540f821c5d.jpg"
          },
          {
            "text": "1/2 tsp dry mustard",
            "quantity": 0.5,
            "measure": "teaspoon",
            "food": "dry mustard",
            "weight": 1,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_b0xqxo3a93nsz8a6ppdilau4ujwt",
            "image": "https://www.edamam.com/food-img/9ff/9ff9e6d04cbc71ff884f3212afa0adfd.jpg"
          },
          {
            "text": "8 oz, can tuna, shrimp or crab",
            "quantity": 8,
            "measure": "ounce",
            "food": "can tuna",
            "weight": 226.796185,
            "foodCategory": "canned seafood",
            "foodId": "food_a0jj77zb6yprvtasct45abh6qkxp",
            "image": "https://www.edamam.com/food-img/b53/b53adeb03d265a094fb598dd89f33450.jpg"
          },
          {
            "text": "1 cup breadcrumbs",
            "quantity": 1,
            "measure": "cup",
            "food": "breadcrumbs",
            "weight": 108,
            "foodCategory": "bread, rolls and tortillas",
            "foodId": "food_ata1dxza443wfda7jb4e5b3zwt9p",
            "image": "https://www.edamam.com/food-img/349/349f852497885b9d9c0b195ad0d0db8f.jpg"
          }
        ],
        "calories": 2690.7571038625,
        "totalWeight": 1183.49332375,
        "totalTime": 0,
        "cuisineType": [
          "italian"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 2690.7571038625,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 134.158510171125,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 42.130519024687494,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 1.6305059237000001,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 35.1820880252125,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 44.719843295,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 233.57303350462502,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 221.026925064625,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 12.546108440000001,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 17.141053604625,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 116.85426525700001,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 216.28662660000003,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 4312.022405275,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 1212.5197505875,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 248.9446060875,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 1392.0777905625002,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 12.290660619250001,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 10.592083332875001,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 1541.4582893875,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 391.79535145,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 0.071,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 1.351416280375,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 1.3694170786500002,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 34.31560067035,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 1.2685977671750002,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 259.985332375,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 109.86533237500001,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 88.56,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 7.322902717500002,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 4.11955422,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 9.379734263125,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 194.99208950874998,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 668.15201569525,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Green coconut curry with salmon",
        "image": "https://media.wincacademy.nl/react/images/final-project/coconut-curry-salmon.jpeg",
        "url": "http://www.aliceincookingland.com/recipe/green-coconut-curry-salmon/",
        "yield": 18,
        "dietLabels": [],
        "healthLabels": [
          "Sugar-Conscious",
          "Pescatarian",
          "Dairy-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Alcohol-Free",
          "Sulfite-Free"
        ],
        "cautions": [
          "Tree-Nuts",
          "Shellfish",
          "Sulfites",
          "FODMAP"
        ],
        "ingredientLines": [
          "1 1/2 lb salmon",
          "1 zuchinni finely chopped",
          "2 green peppers",
          "2 cloves garlic diced",
          "1 lb mushrooms sliced",
          "2 heads baby bok choy cut into fourths",
          "3 tsp ginger finely grated",
          "4 tbsp grapeseed oil",
          "2 14-oz cans coconut milk",
          "4 tbsp green curry paste",
          "2 tbsp fish sauce",
          "1 lime juiced",
          "1/2 cup fresh basil chopped",
          "2 green onions sliced",
          "1 tsp salt",
          "1 tsp pepper",
          "1 package Aisian noodles we used Soba"
        ],
        "ingredients": [
          {
            "text": "1 1/2 lb salmon",
            "quantity": 1.5,
            "measure": "pound",
            "food": "salmon",
            "weight": 680.388555,
            "foodCategory": "seafood",
            "foodId": "food_bhncugnadgibupafbeeapbislbom",
            "image": "https://www.edamam.com/food-img/9a0/9a0f38422e9f21dcedbc2dca0d8209ac.jpg"
          },
          {
            "text": "1 zuchinni finely chopped",
            "quantity": 1,
            "measure": "<unit>",
            "food": "zuchinni",
            "weight": 196,
            "foodCategory": "vegetables",
            "foodId": "food_avpihljbuwpd8ibbmahcabaros5s",
            "image": "https://www.edamam.com/food-img/f63/f637280594e4a731eccc1199194a8847.jpg"
          },
          {
            "text": "2 green peppers",
            "quantity": 2,
            "measure": "<unit>",
            "food": "green peppers",
            "weight": 232.57777777777778,
            "foodCategory": "vegetables",
            "foodId": "food_bz8rcwobbzm7zhb3wh2n7aznivou",
            "image": "https://www.edamam.com/food-img/629/629dc9fddc1f8aec27fa337dd6ce2b7c.jpg"
          },
          {
            "text": "2 cloves garlic diced",
            "quantity": 2,
            "measure": "clove",
            "food": "garlic",
            "weight": 6,
            "foodCategory": "vegetables",
            "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
            "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
          },
          {
            "text": "1 lb mushrooms sliced",
            "quantity": 1,
            "measure": "pound",
            "food": "mushrooms",
            "weight": 453.59237,
            "foodCategory": "vegetables",
            "foodId": "food_bvlose6arfl26ra396sjrb7hetqh",
            "image": "https://www.edamam.com/food-img/d63/d639cf4a2afc7407c1d1ce286028136b.jpg"
          },
          {
            "text": "2 heads baby bok choy cut into fourths",
            "quantity": 2,
            "measure": "head",
            "food": "bok choy",
            "weight": 151.99999999999983,
            "foodCategory": "vegetables",
            "foodId": "food_bq7w3usaxapk30b8utp6lasy79lv",
            "image": "https://www.edamam.com/food-img/c76/c7698a4dc6baecd186476820b6b91cdc.jpg"
          },
          {
            "text": "3 tsp ginger finely grated",
            "quantity": 3,
            "measure": "teaspoon",
            "food": "ginger",
            "weight": 6,
            "foodCategory": "vegetables",
            "foodId": "food_bi2ki2xb5zmmvbaiwf7ztbgktzp6",
            "image": "https://www.edamam.com/food-img/b9c/b9c06ef451ef29513880af0a53ebbaa6.jpg"
          },
          {
            "text": "4 tbsp grapeseed oil",
            "quantity": 4,
            "measure": "tablespoon",
            "food": "grapeseed oil",
            "weight": 54.4,
            "foodCategory": "Oils",
            "foodId": "food_br8vwihb5tm7wybd4ppzjaox5089",
            "image": "https://www.edamam.com/food-img/88b/88bb3399c7bf214d2bce6bd86780eaf2.jpg"
          },
          {
            "text": "2 14-oz cans coconut milk",
            "quantity": 28,
            "measure": "ounce",
            "food": "coconut milk",
            "weight": 793.7866475000001,
            "foodCategory": "non-dairy beverages",
            "foodId": "food_by1k6v2adj7drhbq9w1rpbpen9ms",
            "image": "https://www.edamam.com/food-img/671/671f7528eadb1b01efb53243d0ef0f80.JPG"
          },
          {
            "text": "4 tbsp green curry paste",
            "quantity": 4,
            "measure": "tablespoon",
            "food": "curry paste",
            "weight": 64,
            "foodCategory": "condiments and sauces",
            "foodId": "food_aojdol2are6zg7af2nincbe87jot",
            "image": "https://www.edamam.com/food-img/b6a/b6a9ebae5850f42eca0253827603ef9c.jpg"
          },
          {
            "text": "2 tbsp fish sauce",
            "quantity": 2,
            "measure": "tablespoon",
            "food": "fish sauce",
            "weight": 36,
            "foodCategory": "canned soup",
            "foodId": "food_ahlu6u3ab8bu1wap7cbqua3s1quk",
            "image": "https://www.edamam.com/food-img/7b5/7b58b769d8bf7b79acf12a76b79ea9bc.jpg"
          },
          {
            "text": "1 lime juiced",
            "quantity": 1,
            "measure": "<unit>",
            "food": "lime",
            "weight": 67,
            "foodCategory": "fruit",
            "foodId": "food_av58muyb8kg92fbk0g8g8aui5knv",
            "image": "https://www.edamam.com/food-img/48a/48a123c9576647c4ada6a41df5eeb22a.jpg"
          },
          {
            "text": "1/2 cup fresh basil chopped",
            "quantity": 0.5,
            "measure": "cup",
            "food": "fresh basil",
            "weight": 12,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_bfeht3obd58c3gak5ehpibxgbbs6",
            "image": "https://www.edamam.com/food-img/5f1/5f1b05685ac2b404236a5d1c1f3c8c10.jpg"
          },
          {
            "text": "2 green onions sliced",
            "quantity": 2,
            "measure": "<unit>",
            "food": "green onions",
            "weight": 30,
            "foodCategory": "vegetables",
            "foodId": "food_bknlkyzbuzo27pb11whr4bttkuy6",
            "image": "https://www.edamam.com/food-img/b89/b89986ed6aa466285bdd99bac34b3c46.jpg"
          },
          {
            "text": "1 tsp salt",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "salt",
            "weight": 6,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "1 tsp pepper",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "pepper",
            "weight": 2.9,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
            "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
          },
          {
            "text": "1 package Aisian noodles we used Soba",
            "quantity": 1,
            "measure": "package",
            "food": "noodles",
            "weight": 340,
            "foodCategory": "grains",
            "foodId": "food_aefg3gqa71nrtpbhjfo3yb36kd81",
            "image": "https://www.edamam.com/food-img/800/800c9c0d7cef6b5474723682ffa2878d.jpg"
          }
        ],
        "calories": 5112.068417170556,
        "totalWeight": 3132.645350277778,
        "totalTime": 0,
        "cuisineType": [
          "nordic"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 5112.068417170556,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 336.96978048289225,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 181.28297571055614,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0.2074,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 47.68709068526722,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 73.26260006699724,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 328.1063749712389,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 297.98885939653667,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 30.11751557470222,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 32.25989848546667,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 230.65632545302884,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 665.70150452552,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 6120.048996514333,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 673.4619165553777,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 988.5084524161775,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 8413.89930292511,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 51.18356467470444,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 18.335398636711112,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 3885.2424455315554,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 246.90042395519998,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 345.5847355913334,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 6.220408624813333,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 4.799611279027777,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 114.07125079756834,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 7.403383890282219,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 1891.6150528181777,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 732.2150528181777,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 683.4000000000001,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 23.33407684378,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 1.9271847400000002,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 44.03291935599778,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 218.48374043807544,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 2193.2876144164557,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Vegan Herb Crackers recipes",
        "image": "https://media.wincacademy.nl/react/images/final-project/herb-crackers.jpeg",        
        "url": "https://elanaspantry.com/herb-crackers/",
        "yield": 15,
        "dietLabels": [
          "Low-Carb",
          "Low-Sodium"
        ],
        "healthLabels": [
          "Sugar-Conscious",
          "Low Potassium",
          "Kidney-Friendly",
          "Keto-Friendly",
          "Vegan",
          "Vegetarian",
          "Pescatarian",
          "Paleo",
          "Mediterranean",
          "Dairy-Free",
          "Gluten-Free",
          "Wheat-Free",
          "Egg-Free",
          "Peanut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Sulfite-Free",
          "FODMAP-Free",
          "Kosher"
        ],
        "cautions": [
          "FODMAP"
        ],
        "ingredientLines": [
          "2 cups blanched almond flour (not almond meal)",
          "\xBE teaspoon celtic sea salt",
          "2 tablespoons herbes de provence",
          "1 tablespoon olive oil",
          "2 tablespoons water"
        ],
        "ingredients": [
          {
            "text": "2 cups blanched almond flour (not almond meal)",
            "quantity": 2,
            "measure": "cup",
            "food": "blanched almond flour",
            "weight": 224,
            "foodCategory": "grains",
            "foodId": "food_aquymekalw81cfbcaho71btv3lnt",
            "image": "https://www.edamam.com/food-img/4ce/4ce26863cf14ffeb473cc6f9edcc60f0.jpg"
          },
          {
            "text": "\xBE teaspoon celtic sea salt",
            "quantity": 0.75,
            "measure": "teaspoon",
            "food": "sea salt",
            "weight": 3.6406250001846567,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "2 tablespoons herbes de provence",
            "quantity": 2,
            "measure": "tablespoon",
            "food": "herbes de provence",
            "weight": 5.4,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_avsq22zadwyb5cb5sl1byaa4mbo8",
            "image": "https://www.edamam.com/food-img/89b/89b37a04e46e052671d73addcb84aa51.jpg"
          },
          {
            "text": "1 tablespoon olive oil",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "olive oil",
            "weight": 13.5,
            "foodCategory": "Oils",
            "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
            "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
          },
          {
            "text": "2 tablespoons water",
            "quantity": 2,
            "measure": "tablespoon",
            "food": "water",
            "weight": 29.573529562,
            "foodCategory": "water",
            "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
            "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
          }
        ],
        "calories": 1445.316,
        "totalWeight": 274.08661383452016,
        "totalTime": 30,
        "cuisineType": [
          "american"
        ],
        "mealType": [
          "breakfast"
        ],
        "dishType": [
          "starter"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 1445.316,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 125.81162,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 9.739500000000001,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 9.875115000000001,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 1.484865,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 46.10236,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 20.920359999999995,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 25.182000000000002,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 7.8203400000000025,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 50.60074000000001,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 0,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 633.6317435258399,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 260.2693461122648,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 12.191866138345203,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 1675.5672467418017,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 9.174523178099317,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 0.33829043722872015,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 1074.4284000000002,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 10.260000000000002,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 2.7,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 0.027702000000000004,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 0.021546000000000003,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 0.26676000000000005,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 0.029700000000000008,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 14.796000000000001,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 14.796000000000001,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 2.34117,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 100.71000000000001,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 29.967842200983043,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Baked Chicken Parm",
        "image": "https://media.wincacademy.nl/react/images/final-project/baked-chicken-parm.jpeg",
        "url": "https://food52.com/recipes/17016-baked-chicken-parm",
        "yield": 4,
        "dietLabels": [
          "High-Fiber",
          "Low-Fat"
        ],
        "healthLabels": [
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Sulfite-Free"
        ],
        "cautions": [
          "Sulfites"
        ],
        "ingredientLines": [
          "1 tablespoon oil",
          "1 1/2 cup panko",
          "1/2 cup grated parmesan cheese",
          "1/4 teaspoon salt",
          "1/4 teaspoon ground black pepper",
          "1/8 teaspoon garlic powder",
          "1 teaspoon dried italian seasoning",
          "2 large eggs",
          "2 large boneless, skinless chicken breast halves",
          "1/2 cup grated sharp cheddar cheese or grated mozzarella cheese",
          "2 cups purchased marinara sauce",
          "4 servings angel hair pasta, prepared according to package instructions"
        ],
        "ingredients": [
          {
            "text": "1 tablespoon oil",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "oil",
            "weight": 14,
            "foodCategory": "Oils",
            "foodId": "food_bk9p9aaavhvoq4bqsnprobpsiuxs",
            "image": "https://www.edamam.com/food-img/07e/07e106ab3536d57428e5c46d009038f8.jpg"
          },
          {
            "text": "1 1/2 cup panko",
            "quantity": 1.5,
            "measure": "cup",
            "food": "panko",
            "weight": 90,
            "foodCategory": "grains",
            "foodId": "food_a9tnk2lbj0xkckbytqnx1ajhpqbp",
            "image": null
          },
          {
            "text": "1/2 cup grated parmesan cheese",
            "quantity": 0.5,
            "measure": "cup",
            "food": "parmesan cheese",
            "weight": 74.353125,
            "foodCategory": "Cheese",
            "foodId": "food_a104ppxa06d3emb272fkcab3cugd",
            "image": "https://www.edamam.com/food-img/f58/f588658627c59d5041e4664119829aa9.jpg"
          },
          {
            "text": "1/4 teaspoon salt",
            "quantity": 0.25,
            "measure": "teaspoon",
            "food": "salt",
            "weight": 1.5,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "1/4 teaspoon ground black pepper",
            "quantity": 0.25,
            "measure": "teaspoon",
            "food": "black pepper",
            "weight": 0.575,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
            "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
          },
          {
            "text": "1/8 teaspoon garlic powder",
            "quantity": 0.125,
            "measure": "teaspoon",
            "food": "garlic powder",
            "weight": 0.3875,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_boq94r1a036492bdup9u1beyph0l",
            "image": "https://www.edamam.com/food-img/5c3/5c3db1d5a1a16b1f0a74796f74dd5985.jpg"
          },
          {
            "text": "1 teaspoon dried italian seasoning",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "italian seasoning",
            "weight": 1,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_avsq22zadwyb5cb5sl1byaa4mbo8",
            "image": "https://www.edamam.com/food-img/89b/89b37a04e46e052671d73addcb84aa51.jpg"
          },
          {
            "text": "2 large eggs",
            "quantity": 2,
            "measure": "<unit>",
            "food": "eggs",
            "weight": 100,
            "foodCategory": "Eggs",
            "foodId": "food_bhpradua77pk16aipcvzeayg732r",
            "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
          },
          {
            "text": "2 large boneless, skinless chicken breast halves",
            "quantity": 2,
            "measure": "half",
            "food": "boneless, skinless chicken breast",
            "weight": 217.5,
            "foodCategory": "Poultry",
            "foodId": "food_bdrxu94aj3x2djbpur8dhagfhkcn",
            "image": "https://www.edamam.com/food-img/da5/da510379d3650787338ca16fb69f4c94.jpg"
          },
          {
            "text": "1/2 cup grated sharp cheddar cheese or grated mozzarella cheese",
            "quantity": 0.5,
            "measure": "cup",
            "food": "cheddar cheese",
            "weight": 66,
            "foodCategory": "Cheese",
            "foodId": "food_bhppgmha1u27voagb8eptbp9g376",
            "image": "https://www.edamam.com/food-img/bcd/bcd94dde1fcde1475b5bf0540f821c5d.jpg"
          },
          {
            "text": "2 cups purchased marinara sauce",
            "quantity": 2,
            "measure": "cup",
            "food": "marinara sauce",
            "weight": 528,
            "foodCategory": "canned soup",
            "foodId": "food_a7hv5mybkkrs3ub78yhtxafs67bu",
            "image": "https://www.edamam.com/food-img/08b/08b3bb49c006689a458a8b9c4a4e0057.jpg"
          },
          {
            "text": "4 servings angel hair pasta, prepared according to package instructions",
            "quantity": 4,
            "measure": "serving",
            "food": "angel hair pasta",
            "weight": 1200,
            "foodCategory": "grains",
            "foodId": "food_a8hs60uayl5icia1qe8qoba1kwp8",
            "image": "https://www.edamam.com/food-img/296/296ff2b02ef3822928c3c923e22c7d19.jpg"
          }
        ],
        "calories": 6118.390125,
        "totalWeight": 2293.315625,
        "totalTime": 116,
        "cuisineType": [
          "mediterranean"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 6118.390125,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 99.64538593750002,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 34.6237216875,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0.913065,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 29.21728721875,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 17.610497531249997,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 1004.0793118749999,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 952.744961875,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 51.33435000000001,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 65.13982125000001,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 276.6349159375,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 659.2151250000001,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 4683.3015000000005,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 1981.3793750000002,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 857.972,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 5363.8595000000005,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 25.297121875000002,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 25.1352396875,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 3941.5084375,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 679.0112187500001,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 11.06465,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 1.5054243437500001,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 2.42291875,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 62.323053718749996,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 4.66494884375,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 376.59959375,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 376.59959375,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 2.8197875000000003,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 2.767765625,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 19.466153125,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 106.57482812500001,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 863.4466100000002,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Parmesan grissini",
        "image": "https://media.wincacademy.nl/react/images/final-project/parmesan-grissini.jpeg",
        "url": "https://www.goodfood.com.au/recipes/parmesan-grissini-20121001-33zi8",
        "yield": 6,
        "dietLabels": [
          "Low-Sodium"
        ],
        "healthLabels": [
          "Sugar-Conscious",
          "Low Potassium",
          "Kidney-Friendly",
          "Vegetarian",
          "Pescatarian",
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Kosher"
        ],
        "cautions": [
          "Sulfites"
        ],
        "ingredientLines": [
          "1 teaspoon (3 g) instant dried yeast",
          "a pinch of caster (superfine) sugar",
          "1 tablespoon extra virgin olive oil",
          "250 g (9 oz/2 cups) white strong flour",
          "60 g (2\xBC oz/\u2154 cup) grated parmesan cheese"
        ],
        "ingredients": [
          {
            "text": "1 teaspoon (3 g) instant dried yeast",
            "quantity": 3,
            "measure": "gram",
            "food": "yeast",
            "weight": 3,
            "foodCategory": "condiments and sauces",
            "foodId": "food_a2xisx4br72i19btvvxgzayoelqj",
            "image": "https://www.edamam.com/food-img/433/433749733fd8a22560cdb451b1317be1.jpg"
          },
          {
            "text": "a pinch of caster (superfine) sugar",
            "quantity": 1,
            "measure": "pinch",
            "food": "sugar",
            "weight": 0.2604166669968817,
            "foodCategory": "sugars",
            "foodId": "food_axi2ijobrk819yb0adceobnhm1c2",
            "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
          },
          {
            "text": "1 tablespoon extra virgin olive oil",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "extra virgin olive oil",
            "weight": 13.5,
            "foodCategory": "Oils",
            "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
            "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
          },
          {
            "text": "250 g (9 oz/2 cups) white strong flour",
            "quantity": 250,
            "measure": "gram",
            "food": "flour",
            "weight": 250,
            "foodCategory": "grains",
            "foodId": "food_ahebfs0a985an4aubqaebbipra58",
            "image": "https://www.edamam.com/food-img/b4c/b4c739e76a6f2172b7ad49d0aa41d5aa.jpg"
          },
          {
            "text": "60 g (2\xBC oz/\u2154 cup) grated parmesan cheese",
            "quantity": 60,
            "measure": "gram",
            "food": "parmesan cheese",
            "weight": 60,
            "foodCategory": "Cheese",
            "foodId": "food_a104ppxa06d3emb272fkcab3cugd",
            "image": "https://www.edamam.com/food-img/f58/f588658627c59d5041e4664119829aa9.jpg"
          }
        ],
        "calories": 1275.297812501278,
        "totalWeight": 326.7604166669969,
        "totalTime": 90,
        "cuisineType": [
          "french"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "biscuits and cookies"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 1275.297812501278,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 31.676299999999998,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 12.12761,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 14.705504999999999,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 2.7950150000000002,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 194.2039645836635,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 186.64696458366348,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 7.557,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 1.414895833662888,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0.25989583366288793,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 48.48819999999999,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 40.8,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 832.40260416667,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 748.93760416667,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 83.02,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 351.4902083333399,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 3.557830208333498,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 3.6382260416667,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 705.51,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 124.19999999999999,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 0.009,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 0.6530999999999999,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 0.4192494791667294,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 4.4936,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 0.20959999999999995,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 139.39999999999998,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 139.39999999999998,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 0.7221,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 0.3,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 2.21925,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 9.909,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 47.4484520833334,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Easy Chili Almonds recipes",
        "image": "https://media.wincacademy.nl/react/images/final-project/easy-chili-almonds.jpeg",
        "url": "http://www.pumpkinnspice.com/2017/02/05/easy-chili-almonds/",
        "yield": 2,
        "dietLabels": [
          "High-Fiber",
          "Low-Carb"
        ],
        "healthLabels": [
          "Vegan",
          "Vegetarian",
          "Pescatarian",
          "Paleo",
          "Mediterranean",
          "DASH",
          "Dairy-Free",
          "Gluten-Free",
          "Wheat-Free",
          "Egg-Free",
          "Peanut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Sulfite-Free",
          "Kosher"
        ],
        "cautions": [],
        "ingredientLines": [
          "2 cups California Almonds",
          "1 tablespoon olive oil",
          "1 1/2 teaspoons chili powder",
          "1 tablespoon kosher salt",
          "2 tablespoons fresh cilantro, chopped"
        ],
        "ingredients": [
          {
            "text": "2 cups California Almonds",
            "quantity": 2,
            "measure": "cup",
            "food": "Almonds",
            "weight": 286,
            "foodCategory": "plant-based protein",
            "foodId": "food_bq4d2wras281i0br37nrnaglo3yc",
            "image": "https://www.edamam.com/food-img/6c2/6c2dc21adf11afc4c8d390ee2f651e56.jpg"
          },
          {
            "text": "1 tablespoon olive oil",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "olive oil",
            "weight": 13.5,
            "foodCategory": "Oils",
            "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
            "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
          },
          {
            "text": "1 1/2 teaspoons chili powder",
            "quantity": 1.5,
            "measure": "teaspoon",
            "food": "chili powder",
            "weight": 4.050000000000001,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_aii2sclb4r123rbfr2ybjasrl3nc",
            "image": "https://www.edamam.com/food-img/e6f/e6f19043caefc23b5feda5520076617e.jpg"
          },
          {
            "text": "1 tablespoon kosher salt",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "kosher salt",
            "weight": 14.562499999753793,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "2 tablespoons fresh cilantro, chopped",
            "quantity": 2,
            "measure": "tablespoon",
            "food": "cilantro",
            "weight": 1.999999999966186,
            "foodCategory": "vegetables",
            "foodId": "food_alhzhuwb4lc7jnb5s6f02by60bzp",
            "image": "https://www.edamam.com/food-img/d57/d57e375b6ff99a90c7ee2b1990a1af36.jpg"
          }
        ],
        "calories": 1787.160999999992,
        "totalWeight": 307.0732646524249,
        "totalTime": 10,
        "cuisineType": [
          "american"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 1787.160999999992,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 156.88853999999984,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 12.837790999999994,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0.042899999999999994,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 100.22114049999989,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 37.00658799999999,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 63.71924999999876,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 26.50384999999971,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 37.21539999999905,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 12.749594999999704,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 61.07672999999927,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 0,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 710.5504139999216,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 784.5455835165673,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 778.7697326465158,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 2186.0318611720204,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 11.427276773352515,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 9.108873264652289,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 1388.7699999999836,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 66.80149999988606,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 0.5683499999908702,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 0.5977649999999773,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 3.2959899999999447,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 10.839559999999622,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 0.47960699999994966,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 128.21399999997902,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 128.21399999997902,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 76.83371999999916,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 18.60784999989518,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 14.895221529273739,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Korean Seasoned Potatoes (\uAC10\uC790 \uC870&",
        "image": "https://media.wincacademy.nl/react/images/final-project/korean-potatoes.webp",
        "url": "http://www.food.com/recipe/korean-seasoned-potatoes-44048-51088-51312-390718",
        "yield": 4,
        "dietLabels": [],
        "healthLabels": [
          "Sugar-Conscious",
          "Vegan",
          "Vegetarian",
          "Pescatarian",
          "Dairy-Free",
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Kosher"
        ],
        "cautions": [],
        "ingredientLines": [
          "2 medium potatoes",
          "2 tablespoons soy sauce",
          "2 teaspoons sugar (or sweetener of your choice)",
          "1 teaspoon garlic, minced",
          "2 teaspoons sesame seeds",
          "1 -2 teaspoon sesame seed oil",
          "4 tablespoons scallions, minced"
        ],
        "ingredients": [
          {
            "text": "2 medium potatoes",
            "quantity": 2,
            "measure": "<unit>",
            "food": "potatoes",
            "weight": 426,
            "foodCategory": "vegetables",
            "foodId": "food_abiw5baauresjmb6xpap2bg3otzu",
            "image": "https://www.edamam.com/food-img/651/6512e82417bce15c2899630c1a2799df.jpg"
          },
          {
            "text": "2 tablespoons soy sauce",
            "quantity": 2,
            "measure": "tablespoon",
            "food": "soy sauce",
            "weight": 32,
            "foodCategory": "plant-based protein",
            "foodId": "food_a5g9yevb1iactoaiimbvjbkrxueh",
            "image": "https://www.edamam.com/food-img/f56/f562e461eb0618f367f538b836c17b82.jpg"
          },
          {
            "text": "2 teaspoons sugar (or sweetener of your choice)",
            "quantity": 2,
            "measure": "teaspoon",
            "food": "sugar",
            "weight": 8.4,
            "foodCategory": "sugars",
            "foodId": "food_axi2ijobrk819yb0adceobnhm1c2",
            "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
          },
          {
            "text": "1 teaspoon garlic, minced",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "garlic",
            "weight": 2.8,
            "foodCategory": "vegetables",
            "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
            "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
          },
          {
            "text": "2 teaspoons sesame seeds",
            "quantity": 2,
            "measure": "teaspoon",
            "food": "sesame seeds",
            "weight": 6.000000000304327,
            "foodCategory": "plant-based protein",
            "foodId": "food_bvxfnx8bwz2q3abs04kd6bbuf9w8",
            "image": "https://www.edamam.com/food-img/291/291b355a7a0948716243164427697279.jpg"
          },
          {
            "text": "1 -2 teaspoon sesame seed oil",
            "quantity": 1.5,
            "measure": "teaspoon",
            "food": "oil",
            "weight": 6.75,
            "foodCategory": "Oils",
            "foodId": "food_bk9p9aaavhvoq4bqsnprobpsiuxs",
            "image": "https://www.edamam.com/food-img/07e/07e106ab3536d57428e5c46d009038f8.jpg"
          },
          {
            "text": "4 tablespoons scallions, minced",
            "quantity": 4,
            "measure": "tablespoon",
            "food": "scallions",
            "weight": 24,
            "foodCategory": "vegetables",
            "foodId": "food_bknlkyzbuzo27pb11whr4bttkuy6",
            "image": "https://www.edamam.com/food-img/b89/b89986ed6aa466285bdd99bac34b3c46.jpg"
          }
        ],
        "calories": 483.3900000017438,
        "totalWeight": 505.9500000003043,
        "totalTime": 20,
        "cuisineType": [
          "south east asian",
          "korean"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 483.3900000017438,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 10.35560000015116,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 1.058849500021172,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0.026662500000000002,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 5.440138000057089,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 3.498037000066261,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 88.49240000007136,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 77.47360000003545,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 11.018800000035911,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 12.439200000000914,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 8.3832,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 12.891080000053957,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 0,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 1788.3800000000335,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 142.6120000029672,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 148.2200000010682,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 2038.376000001424,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 5.06680000004428,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 2.105720000023585,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 346.8440000019142,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 12,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 89.3076,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 0.41762000000240723,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 0.22781600000075167,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 5.60926000001374,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 1.4006800000024042,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 93.9040000002952,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 93.9040000002952,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 1.3703900000007612,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 62.63435,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 384.2389200000143,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Oven Baked Mexican Rice recipes",
        "image": "https://media.wincacademy.nl/react/images/final-project/mexican-rice.webp",
        "url": "http://keciasflavorbreakthrough.com/oven-baked-mexican-rice/",
        "yield": 4,
        "dietLabels": [],
        "healthLabels": [
          "Pescatarian",
          "Gluten-Free",
          "Wheat-Free",
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "No oil added",
          "Sulfite-Free",
          "Kosher"
        ],
        "cautions": [
          "Sulfites"
        ],
        "ingredientLines": [
          "1 cup whole grain rice",
          "2 cup chicken or vegetable broth",
          "1 cup tomato sauce",
          "6 scallions chopped, divided",
          "1 jalapeno pepper, seeds, veins removed and diced",
          "\xBD bell pepper diced",
          "1 clove garlic minced",
          "\xBD cup frozen sweet corn kernels, thawed",
          "1 tsp cilantro",
          "2 tsp cumin",
          "1 tsp chili powder",
          "2 tsp salt",
          "1/2 cup shredded cheddar or Mexican blend cheese"
        ],
        "ingredients": [
          {
            "text": "1 cup whole grain rice",
            "quantity": 1,
            "measure": "cup",
            "food": "whole grain rice",
            "weight": 190,
            "foodCategory": "grains",
            "foodId": "food_aro09r9avsklizbsberuoaegj0uh",
            "image": "https://www.edamam.com/food-img/c45/c453c255234a6f7f798d3f2aaa74bbcd.jpg"
          },
          {
            "text": "2 cup chicken or vegetable broth",
            "quantity": 2,
            "measure": "cup",
            "food": "vegetable broth",
            "weight": 454,
            "foodCategory": "Vegan products",
            "foodId": "food_bb2qjrjamst0vmam39stubtkmrs4",
            "image": "https://www.edamam.com/food-img/e61/e6184a8681b772e5198ef0ca1919e1b7.jpg"
          },
          {
            "text": "1 cup tomato sauce",
            "quantity": 1,
            "measure": "cup",
            "food": "tomato sauce",
            "weight": 245,
            "foodCategory": "canned vegetables",
            "foodId": "food_altklniaqmdz3eb1rlf1ybjv8ihn",
            "image": null
          },
          {
            "text": "6 scallions chopped, divided",
            "quantity": 6,
            "measure": "<unit>",
            "food": "scallions",
            "weight": 90,
            "foodCategory": "vegetables",
            "foodId": "food_bknlkyzbuzo27pb11whr4bttkuy6",
            "image": "https://www.edamam.com/food-img/b89/b89986ed6aa466285bdd99bac34b3c46.jpg"
          },
          {
            "text": "1 jalapeno pepper, seeds, veins removed and diced",
            "quantity": 1,
            "measure": "<unit>",
            "food": "jalapeno pepper",
            "weight": 14,
            "foodCategory": "vegetables",
            "foodId": "food_b7txsnbadj6plsbq27zvwah80r6y",
            "image": "https://www.edamam.com/food-img/0df/0df9aa459870a6d477b0925c1fdb6d4c.jpg"
          },
          {
            "text": "\xBD bell pepper diced",
            "quantity": 0.5,
            "measure": "<unit>",
            "food": "bell pepper",
            "weight": 59.5,
            "foodCategory": "vegetables",
            "foodId": "food_a8g63g7ak6bnmvbu7agxibp4a0dy",
            "image": "https://www.edamam.com/food-img/4dc/4dc48b1a506d334b4ab6671b9d56a18f.jpeg"
          },
          {
            "text": "1 clove garlic minced",
            "quantity": 1,
            "measure": "clove",
            "food": "garlic",
            "weight": 3,
            "foodCategory": "vegetables",
            "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
            "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
          },
          {
            "text": "\xBD cup frozen sweet corn kernels, thawed",
            "quantity": 0.5,
            "measure": "cup",
            "food": "corn kernels",
            "weight": 70.5,
            "foodCategory": "vegetables",
            "foodId": "food_bljsxw8akb9zr5aj5dahpay2gxsb",
            "image": "https://www.edamam.com/food-img/34c/34c09c7af85efb3a2025167cc38af8d1.jpg"
          },
          {
            "text": "1 tsp cilantro",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "cilantro",
            "weight": 0.33333333335024,
            "foodCategory": "vegetables",
            "foodId": "food_alhzhuwb4lc7jnb5s6f02by60bzp",
            "image": "https://www.edamam.com/food-img/d57/d57e375b6ff99a90c7ee2b1990a1af36.jpg"
          },
          {
            "text": "2 tsp cumin",
            "quantity": 2,
            "measure": "teaspoon",
            "food": "cumin",
            "weight": 4.2,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_a8jjbx4biqndasapojdb5by3e92e",
            "image": "https://www.edamam.com/food-img/07e/07e2a4eb77ce46591033846504817d35.jpg"
          },
          {
            "text": "1 tsp chili powder",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "chili powder",
            "weight": 2.7,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_aii2sclb4r123rbfr2ybjasrl3nc",
            "image": "https://www.edamam.com/food-img/e6f/e6f19043caefc23b5feda5520076617e.jpg"
          },
          {
            "text": "2 tsp salt",
            "quantity": 2,
            "measure": "teaspoon",
            "food": "salt",
            "weight": 12,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "1/2 cup shredded cheddar or Mexican blend cheese",
            "quantity": 0.5,
            "measure": "cup",
            "food": "Mexican blend cheese",
            "weight": 56,
            "foodCategory": "Cheese",
            "foodId": "food_ari4tsrahqllsdap5f2rkb5g60ng",
            "image": "https://www.edamam.com/food-img/8ee/8ee24c655103a961f2c48054b672a9db.jpg"
          }
        ],
        "calories": 1123.0241452052305,
        "totalWeight": 1192.4077378998313,
        "totalTime": 50,
        "cuisineType": [
          "mexican"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 1123.0241452052305,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 24.70364773767342,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 10.97607104170667,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 7.384159168186714,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 3.43750068367334,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 192.94110791691398,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 175.34687236822018,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 17.594235548693803,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 17.516731647060148,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 36.73504390126037,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 53.2,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 2765.5383320000396,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 612.3098797637601,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 393.489078675556,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 2051.7486483513735,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 11.424348741549686,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 7.386391343193232,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 969.6826463092882,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 365.3858809112703,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 129.28132405812454,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 1.0456329733333447,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 0.6373697849600275,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 13.972286409053524,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 1.7363836725666917,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 160.10624152709713,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 186.89624152709712,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 0.6890773940000001,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 0.28166164000000005,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 6.9083901328137545,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 211.47728196646577,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 922.7590471832152,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Swedish Pancakes",
        "image": "https://media.wincacademy.nl/react/images/final-project/swedish-pancakes.webp",
        "url": "http://scratchthiswithsandy.com/2014/01/19/swedish-pancakes/",
        "yield": 6,
        "dietLabels": [
          "Balanced",
          "Low-Sodium"
        ],
        "healthLabels": [
          "Kidney-Friendly",
          "Vegetarian",
          "Pescatarian",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Kosher"
        ],
        "cautions": [],
        "ingredientLines": [
          "* 4 egg",
          "* 2 cup milk",
          "* 3/4 cup flour",
          "* 1 tbl sugar",
          "* pinch of salt",
          "* 2 tbl melted butter"
        ],
        "ingredients": [
          {
            "text": "* 4 egg",
            "quantity": 4,
            "measure": "<unit>",
            "food": "egg",
            "weight": 172,
            "foodCategory": "Eggs",
            "foodId": "food_bhpradua77pk16aipcvzeayg732r",
            "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
          },
          {
            "text": "* 2 cup milk",
            "quantity": 2,
            "measure": "cup",
            "food": "milk",
            "weight": 488,
            "foodCategory": "Milk",
            "foodId": "food_b49rs1kaw0jktabzkg2vvanvvsis",
            "image": "https://www.edamam.com/food-img/7c9/7c9962acf83654a8d98ea6a2ade93735.jpg"
          },
          {
            "text": "* 3/4 cup flour",
            "quantity": 0.75,
            "measure": "cup",
            "food": "flour",
            "weight": 93.75,
            "foodCategory": "grains",
            "foodId": "food_ahebfs0a985an4aubqaebbipra58",
            "image": "https://www.edamam.com/food-img/b4c/b4c739e76a6f2172b7ad49d0aa41d5aa.jpg"
          },
          {
            "text": "* 1 tbl sugar",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "sugar",
            "weight": 12.4999999997887,
            "foodCategory": "sugars",
            "foodId": "food_axi2ijobrk819yb0adceobnhm1c2",
            "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
          },
          {
            "text": "* pinch of salt",
            "quantity": 1,
            "measure": "pinch",
            "food": "salt",
            "weight": 0.380208333815447,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "* 2 tbl melted butter",
            "quantity": 2,
            "measure": "tablespoon",
            "food": "butter",
            "weight": 28.4,
            "foodCategory": "Dairy",
            "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
            "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
          }
        ],
        "calories": 1136.8929999991822,
        "totalWeight": 795.030208333604,
        "totalTime": 0,
        "cuisineType": [
          "nordic"
        ],
        "mealType": [
          "breakfast"
        ],
        "dishType": [
          "pancake"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 1136.8929999991822,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 56.171189999999996,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 29.211744500000002,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0.9963119999999999,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 16.3058465,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 5.489919499999999,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 108.71756499978872,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 106.18631499978872,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 2.53125,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 38.02556499978912,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 12.474999999789123,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 46.900975,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 749.6999999999999,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 606.5651460201889,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 668.8547500001135,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 90.63680208333815,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 988.9289166667011,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 4.266459687501484,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 4.707840208333794,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 858.546,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 693.9359999999999,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 0,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 0.40719999999999995,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 1.66029099999996,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 1.747123,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 0.5101819999999999,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 130.467,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 130.467,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 3.77508,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 10.21,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 2.86273,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 4.24925,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 577.3256204166676,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Pizza with taleggio, prosciutto and pear",
        "image": "https://media.wincacademy.nl/react/images/final-project/pizza-pear.jpeg",
        "url": "https://www.goodfood.com.au/recipes/pizza-with-taleggio-prosciutto-and-pear-20111018-29wks",
        "yield": 12,
        "dietLabels": [
          "Balanced"
        ],
        "healthLabels": [
          "Sugar-Conscious",
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Sulfite-Free"
        ],
        "cautions": [
          "Sulfites"
        ],
        "ingredientLines": [
          "500g flour",
          "1 tbsp instant yeast",
          "1 tsp salt",
          "300ml warm water",
          "2 tbsp olive oil",
          "For the topping",
          "1-2 tbsp olive oil",
          "300g taleggio",
          "8 slices prosciutto",
          "2 pears, finely sliced",
          "handful fresh rocket"
        ],
        "ingredients": [
          {
            "text": "500g flour",
            "quantity": 500,
            "measure": "gram",
            "food": "flour",
            "weight": 500,
            "foodCategory": "grains",
            "foodId": "food_ahebfs0a985an4aubqaebbipra58",
            "image": "https://www.edamam.com/food-img/b4c/b4c739e76a6f2172b7ad49d0aa41d5aa.jpg"
          },
          {
            "text": "1 tbsp instant yeast",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "yeast",
            "weight": 12,
            "foodCategory": "condiments and sauces",
            "foodId": "food_a2xisx4br72i19btvvxgzayoelqj",
            "image": "https://www.edamam.com/food-img/433/433749733fd8a22560cdb451b1317be1.jpg"
          },
          {
            "text": "1 tsp salt",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "salt",
            "weight": 6,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "300ml warm water",
            "quantity": 300,
            "measure": "milliliter",
            "food": "water",
            "weight": 300,
            "foodCategory": "water",
            "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
            "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
          },
          {
            "text": "2 tbsp olive oil",
            "quantity": 2,
            "measure": "tablespoon",
            "food": "olive oil",
            "weight": 27,
            "foodCategory": "Oils",
            "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
            "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
          },
          {
            "text": "1-2 tbsp olive oil",
            "quantity": 1.5,
            "measure": "tablespoon",
            "food": "olive oil",
            "weight": 20.25,
            "foodCategory": "Oils",
            "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
            "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
          },
          {
            "text": "300g taleggio",
            "quantity": 300,
            "measure": "gram",
            "food": "taleggio",
            "weight": 300,
            "foodCategory": "Cheese",
            "foodId": "food_b6s9dpea421339bjgiudnaoxh7nl",
            "image": "https://www.edamam.com/food-img/419/419fc950e8f2a589a11d63efb28b8bef.jpg"
          },
          {
            "text": "8 slices prosciutto",
            "quantity": 8,
            "measure": "slice",
            "food": "prosciutto",
            "weight": 120,
            "foodCategory": "cured meats",
            "foodId": "food_au1dzjfa990c8yap79k4nawq65y9",
            "image": "https://www.edamam.com/food-img/802/8029e7b80cce92694182b85a1ebd1822.jpg"
          },
          {
            "text": "2 pears, finely sliced",
            "quantity": 2,
            "measure": "<unit>",
            "food": "pears",
            "weight": 372.8888888888889,
            "foodCategory": "fruit",
            "foodId": "food_bq6stkiaxkwhxia9q4v7wanjnew0",
            "image": "https://www.edamam.com/food-img/65a/65aec51d264db28bbe27117c9fdaaca7.jpg"
          },
          {
            "text": "handful fresh rocket",
            "quantity": 1,
            "measure": "handful",
            "food": "rocket",
            "weight": 2.5,
            "foodCategory": "vegetables",
            "foodId": "food_a8z1kzrawhksuzav2g1irb6zf4zc",
            "image": "https://www.edamam.com/food-img/fa7/fa761a311efc0ec361a5eba4ed71870e.jpeg"
          }
        ],
        "calories": 3623.8616666666667,
        "totalWeight": 1654.638888888889,
        "totalTime": 120,
        "cuisineType": [
          "italian"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 3623.8616666666667,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 136.36574444444446,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 56.61658555555556,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 61.39480416666666,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 10.733648055555555,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 445.1186277777778,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 416.7910722222223,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 28.327555555555556,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 39.137916666666676,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 150.66970000000003,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 300,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 5793.4688888888895,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 1301.6325,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 236.75722222222225,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 2264.848611111111,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 9.404700000000002,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 15.379438888888888,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 2085.086666666667,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 729.7038888888889,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 16.445222222222224,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 2.729046666666667,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 2.533501111111111,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 18.229176111111112,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 1.6949627777777776,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 631.3272222222222,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 631.3272222222222,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 4.9644,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 2.2800000000000002,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 8.504591666666666,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 55.11461111111112,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 897.795861111111,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Strawberry Cheesecake recipes",
        "image": "https://media.wincacademy.nl/react/images/final-project/strawberry-cheesecake.webp",
        "url": "http://allrecipes.com/recipe/222588/strawberry-cheesecake/",
        "yield": 12,
        "dietLabels": [],
        "healthLabels": [
          "Vegetarian",
          "Pescatarian",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Kosher"
        ],
        "cautions": [
          "Gluten",
          "Wheat",
          "Sulfites"
        ],
        "ingredientLines": [
          "1 1/4 cups graham cracker crumbs",
          "1/4 cup white sugar",
          "2 teaspoons ground cinnamon",
          "1/3 cup butter, melted",
          "2 (10 ounce) packages frozen sweetened sliced strawberries, thawed and drained",
          "1 tablespoon cornstarch",
          "3 (8 ounce) packages cream cheese, softened",
          "1 (14 ounce) can sweetened condensed milk",
          "1/4 cup lemon juice",
          "1/2 teaspoon vanilla extract",
          "3 eggs",
          "1 tablespoon water (optional)"
        ],
        "ingredients": [
          {
            "text": "1 1/4 cups graham cracker crumbs",
            "quantity": 1.25,
            "measure": "cup",
            "food": "cracker crumbs",
            "weight": 65,
            "foodCategory": "crackers",
            "foodId": "food_bngjmfmb13ckgcaefl7gta8r5zx5",
            "image": "https://www.edamam.com/food-img/533/5335c3d911793785012a46379a6ad2d3.jpg"
          },
          {
            "text": "1/4 cup white sugar",
            "quantity": 0.25,
            "measure": "cup",
            "food": "white sugar",
            "weight": 50,
            "foodCategory": "sugars",
            "foodId": "food_axi2ijobrk819yb0adceobnhm1c2",
            "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
          },
          {
            "text": "2 teaspoons ground cinnamon",
            "quantity": 2,
            "measure": "teaspoon",
            "food": "ground cinnamon",
            "weight": 5.2,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_atjxtznauw5zabaixm24xa787onz",
            "image": "https://www.edamam.com/food-img/d4d/d4daa18b92c596a1c99c08537c38e65b.jpg"
          },
          {
            "text": "1/3 cup butter, melted",
            "quantity": 0.3333333333333333,
            "measure": "cup",
            "food": "butter",
            "weight": 75.66666666666666,
            "foodCategory": "Dairy",
            "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
            "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
          },
          {
            "text": "2 (10 ounce) packages frozen sweetened sliced strawberries, thawed and drained",
            "quantity": 20,
            "measure": "ounce",
            "food": "strawberries",
            "weight": 566.9904625,
            "foodCategory": "fruit",
            "foodId": "food_b4s2ibkbrrucmbabbaxhfau8ay42",
            "image": "https://www.edamam.com/food-img/00c/00c8851e401bf7975be7f73499b4b573.jpg"
          },
          {
            "text": "1 tablespoon cornstarch",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "cornstarch",
            "weight": 7.999999999864745,
            "foodCategory": null,
            "foodId": "food_bevnfkfbvjm45pbbgj9nsb3ypntm",
            "image": "https://www.edamam.com/food-img/f9b/f9b74d9495b40c0aea955c37a1fc39dc.jpg"
          },
          {
            "text": "3 (8 ounce) packages cream cheese, softened",
            "quantity": 24,
            "measure": "ounce",
            "food": "cream cheese",
            "weight": 680.388555,
            "foodCategory": "Cheese",
            "foodId": "food_a7rvc49a09a7yjbq3ekjbbauyoqa",
            "image": "https://www.edamam.com/food-img/ddd/dddce306e7ee41e8e07dc62e28cab94b.jpg"
          },
          {
            "text": "1 (14 ounce) can sweetened condensed milk",
            "quantity": 14,
            "measure": "ounce",
            "food": "sweetened condensed milk",
            "weight": 396.89332375000004,
            "foodCategory": "Milk",
            "foodId": "food_a89byenbz1jssabxmx7i6aa77jz1",
            "image": "https://www.edamam.com/food-img/bc9/bc97e9aa15ccef74dbad4d6267e30e3f.jpg"
          },
          {
            "text": "1/4 cup lemon juice",
            "quantity": 0.25,
            "measure": "cup",
            "food": "lemon juice",
            "weight": 61,
            "foodCategory": "100% juice",
            "foodId": "food_bglm6vxahuauteb0n6ynfbg9eryu",
            "image": "https://www.edamam.com/food-img/e31/e310952d214e78a4cb8b73f30ceeaaf2.jpg"
          },
          {
            "text": "1/2 teaspoon vanilla extract",
            "quantity": 0.5,
            "measure": "teaspoon",
            "food": "vanilla extract",
            "weight": 2.1,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_bh1wvnqaw3q7ciascfoygaabax2a",
            "image": "https://www.edamam.com/food-img/90f/90f910b0bf82750d4f6528263e014cca.jpg"
          },
          {
            "text": "3 eggs",
            "quantity": 3,
            "measure": "<unit>",
            "food": "eggs",
            "weight": 129,
            "foodCategory": "Eggs",
            "foodId": "food_bhpradua77pk16aipcvzeayg732r",
            "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
          },
          {
            "text": "1 tablespoon water (optional)",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "water",
            "weight": 14.786764781,
            "foodCategory": "water",
            "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
            "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
          }
        ],
        "calories": 5097.185375336985,
        "totalWeight": 2055.0257726975315,
        "totalTime": 645,
        "cuisineType": [
          "american"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "desserts"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 5097.185375336985,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 360.2325051190833,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 199.67873967423336,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 3.2287733333333333,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 93.42800230728746,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 25.31875591992914,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 393.92277982837663,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 378.0717705783778,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 15.851009249998782,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 323.13166435175,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 49.9,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 97.1447459855413,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 1525.9344739083335,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 3659.6764554620613,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 2110.1749002934275,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 274.24919523113937,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 3641.375844637496,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 11.102928053707698,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 10.184514197728019,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 2305.5836883874827,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 3514.3330755000006,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 367.5142183675,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 0.9711577467083332,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 3.5607334889666666,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 7.099651569875,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 1.0063791067374999,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 427.49071766249995,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 335.1907176625,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 54.599999999999994,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 4.724035345333334,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 8.5911179775,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 9.544035135416665,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 86.93748487916668,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 1181.137699732458,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Mushroom and Spinach Ravioli",
        "image": "https://media.wincacademy.nl/react/images/final-project/spinach-ravioli.jpeg",
        "url": "http://ourlifetastesgood.blogspot.com/2012/07/mushroom-and-spinach-ravioli-with-chive.html",
        "yield": 2,
        "dietLabels": [
          "High-Fiber"
        ],
        "healthLabels": [
          "Vegetarian",
          "Pescatarian",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Sulfite-Free",
          "Kosher"
        ],
        "cautions": [
          "Sulfites"
        ],
        "ingredientLines": [
          "1 teaspoon olive oil",
          "1 1/2 teaspoons water (or more as needed)",
          "2 eggs",
          "2 cups all-purpose flour (or more as needed)",
          "1/4 teaspoon salt",
          "1 teaspoon olive oil",
          "1 clove garlic, minced",
          "1/2 chopped onion",
          "1 (8 ounce) package fresh mushrooms, chopped",
          "4 ounces cream cheese softened",
          "1/3 cup grated Parmesan Cheese",
          "1/2 cup Mozzarella Cheese",
          "1/2 cup frozen spinach, thawed and drained",
          "1 tablespoon chopped fresh chives",
          "1 tablespoon fresh parsley",
          "1/2 teaspoon ground cayenne pepper",
          "salt",
          "pepper",
          "1 egg white beaten",
          "3 tablespoons unsalted butter",
          "1 1/2 teaspoons chopped fresh chives"
        ],
        "ingredients": [
          {
            "text": "1 teaspoon olive oil",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "olive oil",
            "weight": 4.5,
            "foodCategory": "Oils",
            "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
            "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
          },
          {
            "text": "1 1/2 teaspoons water (or more as needed)",
            "quantity": 1.5,
            "measure": "teaspoon",
            "food": "water",
            "weight": 7.393382391,
            "foodCategory": "water",
            "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
            "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
          },
          {
            "text": "2 eggs",
            "quantity": 2,
            "measure": "<unit>",
            "food": "eggs",
            "weight": 86,
            "foodCategory": "Eggs",
            "foodId": "food_bhpradua77pk16aipcvzeayg732r",
            "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
          },
          {
            "text": "2 cups all-purpose flour (or more as needed)",
            "quantity": 2,
            "measure": "cup",
            "food": "all-purpose flour",
            "weight": 250,
            "foodCategory": "grains",
            "foodId": "food_ar3x97tbq9o9p6b6gzwj0am0c81l",
            "image": "https://www.edamam.com/food-img/368/368077bbcab62f862a8c766a56ea5dd1.jpg"
          },
          {
            "text": "1/4 teaspoon salt",
            "quantity": 0.25,
            "measure": "teaspoon",
            "food": "salt",
            "weight": 1.5,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "1 teaspoon olive oil",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "olive oil",
            "weight": 4.5,
            "foodCategory": "Oils",
            "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
            "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
          },
          {
            "text": "1 clove garlic, minced",
            "quantity": 1,
            "measure": "clove",
            "food": "garlic",
            "weight": 3,
            "foodCategory": "vegetables",
            "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
            "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
          },
          {
            "text": "1/2 chopped onion",
            "quantity": 0.5,
            "measure": "<unit>",
            "food": "onion",
            "weight": 62.5,
            "foodCategory": "vegetables",
            "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
            "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
          },
          {
            "text": "1 (8 ounce) package fresh mushrooms, chopped",
            "quantity": 8,
            "measure": "ounce",
            "food": "mushrooms",
            "weight": 226.796185,
            "foodCategory": "vegetables",
            "foodId": "food_bvlose6arfl26ra396sjrb7hetqh",
            "image": "https://www.edamam.com/food-img/d63/d639cf4a2afc7407c1d1ce286028136b.jpg"
          },
          {
            "text": "4 ounces cream cheese softened",
            "quantity": 4,
            "measure": "ounce",
            "food": "cream cheese",
            "weight": 113.3980925,
            "foodCategory": "Cheese",
            "foodId": "food_a7rvc49a09a7yjbq3ekjbbauyoqa",
            "image": "https://www.edamam.com/food-img/ddd/dddce306e7ee41e8e07dc62e28cab94b.jpg"
          },
          {
            "text": "1/3 cup grated Parmesan Cheese",
            "quantity": 0.3333333333333333,
            "measure": "cup",
            "food": "Parmesan Cheese",
            "weight": 49.56875,
            "foodCategory": "Cheese",
            "foodId": "food_a104ppxa06d3emb272fkcab3cugd",
            "image": "https://www.edamam.com/food-img/f58/f588658627c59d5041e4664119829aa9.jpg"
          },
          {
            "text": "1/2 cup Mozzarella Cheese",
            "quantity": 0.5,
            "measure": "cup",
            "food": "Mozzarella Cheese",
            "weight": 129.9375,
            "foodCategory": "Cheese",
            "foodId": "food_acjhpy7bkl7a9qboztipaa2i9e4m",
            "image": "https://www.edamam.com/food-img/92d/92d92d4a4dfe8c025cea407c9ce764c3.jpg"
          },
          {
            "text": "1/2 cup frozen spinach, thawed and drained",
            "quantity": 0.5,
            "measure": "cup",
            "food": "spinach",
            "weight": 15,
            "foodCategory": "vegetables",
            "foodId": "food_aoceuc6bshdej1bbsdammbnj6l6o",
            "image": "https://www.edamam.com/food-img/e6e/e6e4be375c4554ce01c8ea75232efaa6.jpg"
          },
          {
            "text": "1 tablespoon chopped fresh chives",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "chives",
            "weight": 3,
            "foodCategory": "vegetables",
            "foodId": "food_btg1uzjak79lawbirsitkaeai60l",
            "image": "https://www.edamam.com/food-img/f3f/f3f48643a924ba174b894e979cb48620.jpg"
          },
          {
            "text": "1 tablespoon fresh parsley",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "parsley",
            "weight": 3.8,
            "foodCategory": "vegetables",
            "foodId": "food_b244pqdazw24zobr5vqu2bf0uid8",
            "image": "https://www.edamam.com/food-img/46a/46a132e96626d7989b4d6ed8c91f4da0.jpg"
          },
          {
            "text": "1/2 teaspoon ground cayenne pepper",
            "quantity": 0.5,
            "measure": "teaspoon",
            "food": "cayenne pepper",
            "weight": 0.9,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_a8iooz3aris8gba605l07brngnrx",
            "image": "https://www.edamam.com/food-img/374/3742b9434a0fb66a45e0dd6d227ba669.jpg"
          },
          {
            "text": "salt",
            "quantity": 0,
            "measure": null,
            "food": "salt",
            "weight": 6.193763459345999,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "pepper",
            "quantity": 0,
            "measure": null,
            "food": "pepper",
            "weight": 3.0968817296729996,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
            "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
          },
          {
            "text": "1 egg white beaten",
            "quantity": 1,
            "measure": "<unit>",
            "food": "egg white",
            "weight": 26.4,
            "foodCategory": "Eggs",
            "foodId": "food_a7hurbpb20zs42bnwg2p8bca3ihs",
            "image": "https://www.edamam.com/food-img/b30/b304a020501418f9a63cf7f9359bc99d.jpg"
          },
          {
            "text": "3 tablespoons unsalted butter",
            "quantity": 3,
            "measure": "tablespoon",
            "food": "unsalted butter",
            "weight": 42.599999999999994,
            "foodCategory": "Dairy",
            "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
            "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
          },
          {
            "text": "1 1/2 teaspoons chopped fresh chives",
            "quantity": 1.5,
            "measure": "teaspoon",
            "food": "chives",
            "weight": 1.5,
            "foodCategory": "vegetables",
            "foodId": "food_btg1uzjak79lawbirsitkaeai60l",
            "image": "https://www.edamam.com/food-img/f3f/f3f48643a924ba174b894e979cb48620.jpg"
          }
        ],
        "calories": 2523.210560191479,
        "totalWeight": 1034.356009510093,
        "totalTime": 75,
        "cuisineType": [
          "italian"
        ],
        "mealType": [
          "snack"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 2523.210560191479,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 139.10042037038735,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 76.66771694127705,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 1.4291079999999998,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 41.58860721698228,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 8.370521302387136,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 218.72712386187592,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 206.98745093426865,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 11.739672927607268,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 14.017192025319906,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 101.38330313846303,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 685.5990267500001,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 2404.2923580980423,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 1609.214281027642,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 178.172863735545,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 1740.9563865685082,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 16.68506486148633,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 9.56972100746163,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 1691.469395282883,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 1318.3283641170117,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 22.894819885000004,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 2.306116973118047,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 3.3985371664384116,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 23.86636554774516,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 0.8420161031083486,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 888.1944240190444,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 233.19442401904442,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 385,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 2.77916245525,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 4.3905121750000005,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 5.1493016567386,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 167.2074463239747,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 561.1935454974051,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Cajun Pork Pinwheels",
        "image": "https://media.wincacademy.nl/react/images/final-project/cayun-pork-pinwheel.jpeg",
        "url": "https://www.bigoven.com/recipe/cajun-pork-pinwheels/158806",
        "yield": 6,
        "dietLabels": [
          "High-Protein",
          "Low-Carb",
          "Low-Sodium"
        ],
        "healthLabels": [
          "Sugar-Conscious",
          "Keto-Friendly",
          "Dairy-Free",
          "Gluten-Free",
          "Wheat-Free",
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Crustacean-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Sulfite-Free"
        ],
        "cautions": [],
        "ingredientLines": [
          "2 pork tenderloins ; about 1 pound each",
          "1 tablespoon Vegetable oil",
          "1 cup red bell pepper ; finely chopped",
          "1/2 cup Onion ; finely chopped",
          "1/2 cup celery ; finely chopped",
          "1 teaspoon dried thyme leaves ; crushed",
          "1/4 teaspoon Garlic salt",
          "1/2 teaspoon Ground red pepper",
          "1/2 teaspoon Paprika",
          "1 tablespoon fennel seed ; crushed",
          "1 teaspoon lemon-pepper seasoning ; (up to 3 teaspoons)"
        ],
        "ingredients": [
          {
            "text": "2 pork tenderloins ; about 1 pound each",
            "quantity": 2,
            "measure": "pound",
            "food": "pork tenderloins",
            "weight": 907.18474,
            "foodCategory": "meats",
            "foodId": "food_bgd2x5qbzpcbz0apfim52a8wr97x",
            "image": "https://www.edamam.com/food-img/4df/4dfc18749ffa490e3d4daf9dd2ea4d34.jpg"
          },
          {
            "text": "1 tablespoon Vegetable oil",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "Vegetable oil",
            "weight": 14,
            "foodCategory": "Oils",
            "foodId": "food_bt1mzi2ah2sfg8bv7no1qai83w8s",
            "image": "https://www.edamam.com/food-img/6e5/6e51a63a6300a8ea1b4c4cc68dfaba33.jpg"
          },
          {
            "text": "1 cup red bell pepper ; finely chopped",
            "quantity": 1,
            "measure": "cup",
            "food": "red bell pepper",
            "weight": 149,
            "foodCategory": "vegetables",
            "foodId": "food_a8g63g7ak6bnmvbu7agxibp4a0dy",
            "image": "https://www.edamam.com/food-img/4dc/4dc48b1a506d334b4ab6671b9d56a18f.jpeg"
          },
          {
            "text": "1/2 cup Onion ; finely chopped",
            "quantity": 0.5,
            "measure": "cup",
            "food": "Onion",
            "weight": 80,
            "foodCategory": "vegetables",
            "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
            "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
          },
          {
            "text": "1/2 cup celery ; finely chopped",
            "quantity": 0.5,
            "measure": "cup",
            "food": "celery",
            "weight": 50.5,
            "foodCategory": "vegetables",
            "foodId": "food_bffeoksbyyur8ja4da73ub2xs57g",
            "image": "https://www.edamam.com/food-img/d91/d91d2aed1c36d8fad54c4d7dc58f5a18.jpg"
          },
          {
            "text": "1 teaspoon dried thyme leaves ; crushed",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "dried thyme",
            "weight": 1,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_avsq22zadwyb5cb5sl1byaa4mbo8",
            "image": "https://www.edamam.com/food-img/89b/89b37a04e46e052671d73addcb84aa51.jpg"
          },
          {
            "text": "1/4 teaspoon Garlic salt",
            "quantity": 0.25,
            "measure": "teaspoon",
            "food": "Garlic salt",
            "weight": 0.775,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_boq94r1a036492bdup9u1beyph0l",
            "image": "https://www.edamam.com/food-img/5c3/5c3db1d5a1a16b1f0a74796f74dd5985.jpg"
          },
          {
            "text": "1/2 teaspoon Ground red pepper",
            "quantity": 0.5,
            "measure": "teaspoon",
            "food": "red pepper",
            "weight": 1.5520833334120565,
            "foodCategory": "vegetables",
            "foodId": "food_a8g63g7ak6bnmvbu7agxibp4a0dy",
            "image": "https://www.edamam.com/food-img/4dc/4dc48b1a506d334b4ab6671b9d56a18f.jpeg"
          },
          {
            "text": "1/2 teaspoon Paprika",
            "quantity": 0.5,
            "measure": "teaspoon",
            "food": "Paprika",
            "weight": 1.15,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_a9dpcnjb883g67b3lq82ca0421ql",
            "image": "https://www.edamam.com/food-img/474/474d63763b9d8b9da98c5f43a114648c.jpg"
          },
          {
            "text": "1 tablespoon fennel seed ; crushed",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "fennel seed",
            "weight": 5.8,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_a7gzoswb5qrepsa8xcla8bxm5wla",
            "image": "https://www.edamam.com/food-img/a40/a4059150e503052ae5a390af6e666873.jpg"
          },
          {
            "text": "1 teaspoon lemon-pepper seasoning ; (up to 3 teaspoons)",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "seasoning",
            "weight": 1.5,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_aj7w3xab0epj7cbgkbkpwadysovd",
            "image": "https://www.edamam.com/food-img/c23/c23e20823b442067307aa436969358f1.jpg"
          }
        ],
        "calories": 1277.8849994333577,
        "totalWeight": 1212.4618233334124,
        "totalTime": 0,
        "cuisineType": [
          "american"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 1277.8849994333577,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 46.243549005900235,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 11.316188002930023,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0.41763718108000003,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 22.405505878150002,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 7.625709285193389,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 23.89075312500475,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 15.242159375003098,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 8.648593750001652,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 10.573730000003305,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 182.1281044945008,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 560.18657695,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 505.07734489333643,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 207.30192601333886,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 294.8478858100095,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 4104.8568726235,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 12.403798837433673,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 17.090634614433537,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 2208.340013956687,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 280.087270833457,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 201.65816041676715,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 8.631749814460042,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 3.1252729659434006,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 59.261679644134105,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 7.2544416604502295,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 108.37170833336955,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 108.37170833336955,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 4.481492615600001,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 2.585476509,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 7.9135315232679115,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 52.6461020833372,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 905.3225831408392,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Fire Roasted Tomato Soup recipes",
        "image": "https://media.wincacademy.nl/react/images/final-project/tomato-soup.jpeg",
        "url": "http://therecipecritic.com/2013/02/fire-roasted-tomato-soup/",
        "yield": 8,
        "dietLabels": [
          "High-Fiber"
        ],
        "healthLabels": [
          "Mediterranean",
          "Gluten-Free",
          "Wheat-Free",
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Sulfite-Free"
        ],
        "cautions": [
          "Sulfites"
        ],
        "ingredientLines": [
          "1 medium onion, diced",
          "3 cloves garlic, minced",
          "1 T olive oil",
          "8 oz can tomato sauce",
          "6 oz can tomato paste",
          "28 oz can whole tomatoes",
          "2 14 oz cans fire roasted diced tomatoes",
          "2 cups water",
          "2 cups chicken broth",
          "2 tsp salt",
          "1/2 tsp pepper",
          "1 1/2 cups heavy cream",
          "1/4 cup parmesan cheese"
        ],
        "ingredients": [
          {
            "text": "1 medium onion, diced",
            "quantity": 1,
            "measure": "<unit>",
            "food": "onion",
            "weight": 110,
            "foodCategory": "vegetables",
            "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
            "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
          },
          {
            "text": "3 cloves garlic, minced",
            "quantity": 3,
            "measure": "clove",
            "food": "garlic",
            "weight": 9,
            "foodCategory": "vegetables",
            "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
            "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
          },
          {
            "text": "1 T olive oil",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "olive oil",
            "weight": 4.5,
            "foodCategory": "Oils",
            "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
            "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
          },
          {
            "text": "8 oz can tomato sauce",
            "quantity": 8,
            "measure": "ounce",
            "food": "tomato sauce",
            "weight": 226.796185,
            "foodCategory": "canned vegetables",
            "foodId": "food_altklniaqmdz3eb1rlf1ybjv8ihn",
            "image": null
          },
          {
            "text": "6 oz can tomato paste",
            "quantity": 6,
            "measure": "ounce",
            "food": "tomato paste",
            "weight": 170.09713875,
            "foodCategory": "canned vegetables",
            "foodId": "food_auu2atfal07b6gbd1a5wsawy7u0s",
            "image": "https://www.edamam.com/food-img/aef/aef4e029118da71388e526086506053a.jpg"
          },
          {
            "text": "28 oz can whole tomatoes",
            "quantity": 28,
            "measure": "ounce",
            "food": "whole tomatoes",
            "weight": 793.7866475000001,
            "foodCategory": "canned vegetables",
            "foodId": "food_bnmkkwqa9h2p87bz171eoby0bsey",
            "image": "https://www.edamam.com/food-img/d4e/d4e8110d51db4311bc894167a8f77816.jpg"
          },
          {
            "text": "2 14 oz cans fire roasted diced tomatoes",
            "quantity": 28,
            "measure": "ounce",
            "food": "diced tomatoes",
            "weight": 793.7866475000001,
            "foodCategory": "canned vegetables",
            "foodId": "food_bnmkkwqa9h2p87bz171eoby0bsey",
            "image": "https://www.edamam.com/food-img/d4e/d4e8110d51db4311bc894167a8f77816.jpg"
          },
          {
            "text": "2 cups water",
            "quantity": 2,
            "measure": "cup",
            "food": "water",
            "weight": 474,
            "foodCategory": "water",
            "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
            "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
          },
          {
            "text": "2 cups chicken broth",
            "quantity": 2,
            "measure": "cup",
            "food": "chicken broth",
            "weight": 480,
            "foodCategory": "canned soup",
            "foodId": "food_bptblvzambd16nbhewqmhaw1rnh5",
            "image": "https://www.edamam.com/food-img/26a/26a10c4cb4e07bab54d8a687ef5ac7d8.jpg"
          },
          {
            "text": "2 tsp salt",
            "quantity": 2,
            "measure": "teaspoon",
            "food": "salt",
            "weight": 12,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "1/2 tsp pepper",
            "quantity": 0.5,
            "measure": "teaspoon",
            "food": "pepper",
            "weight": 1.45,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
            "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
          },
          {
            "text": "1 1/2 cups heavy cream",
            "quantity": 1.5,
            "measure": "cup",
            "food": "heavy cream",
            "weight": 357,
            "foodCategory": "Dairy",
            "foodId": "food_bgtkr21b5v16mca246x9ebnaswyo",
            "image": "https://www.edamam.com/food-img/484/4848d71f6a14dd5076083f5e17925420.jpg"
          },
          {
            "text": "1/4 cup parmesan cheese",
            "quantity": 0.25,
            "measure": "cup",
            "food": "parmesan cheese",
            "weight": 37.1765625,
            "foodCategory": "Cheese",
            "foodId": "food_a104ppxa06d3emb272fkcab3cugd",
            "image": "https://www.edamam.com/food-img/f58/f588658627c59d5041e4664119829aa9.jpg"
          }
        ],
        "calories": 2098.9340903750003,
        "totalWeight": 3463.8814151342513,
        "totalTime": 55,
        "cuisineType": [
          "american"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "soup"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 2098.9340903750003,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 157.603754438375,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 91.36432640115001,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 47.8967418560875,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 8.816557503037501,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 141.57510001012503,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 98.60943194137502,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 42.96566806875,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 91.87988720825001,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 57.249755738250016,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 528.7700625,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 8040.563791133251,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 1367.2937993322207,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 345.2976253638426,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 6453.095646035741,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 18.285999876568027,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 6.353450237759252,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 1129.2093990125002,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 2046.1006295250002,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 267.21124150624996,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 9.616240673275,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 2.2471676422875,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 26.833612026075002,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 3.018696610325001,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 230.128036275,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 230.128036275,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 1.0887187500000002,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 2.6848828125,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 24.64674290825,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 85.70992423,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 3072.464483754519,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Homemade Sweet Spaghetti Sauce",
        "image": "https://media.wincacademy.nl/react/images/final-project/sweet-spaghetti-sauce.jpeg",
        "url": "https://www.recipezazz.com/recipe/homemade-sweet-spaghetti-sauce-4752",
        "yield": 8,
        "dietLabels": [],
        "healthLabels": [
          "Dairy-Free",
          "Gluten-Free",
          "Wheat-Free",
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Kosher"
        ],
        "cautions": [
          "Sulfites"
        ],
        "ingredientLines": [
          "1 tablespoon olive oil (or coconut oil)",
          "1 to 2 garlic cloves, minced",
          "1 pound ground turkey (or 1 pound lean ground beef, optional)",
          "1 can (32 ounce) tomato sauce (no-salt-added)",
          "8 ounces red wine",
          "24 ounces water (or use all water and no wine)",
          "3 cans (6 ounce) tomato paste",
          "3 to 4 tablespoons instant minced onion",
          "1/4 cup granulated sugar (more less to your taste)",
          "1/2 to 1 teaspoon salt (or 1/2 - 1 teaspoon salt substitute)",
          "1 teaspoon dried basil (see note)",
          "1/2 teaspoon dried oregano",
          "1 teaspoon onion powder"
        ],
        "ingredients": [
          {
            "text": "1 tablespoon olive oil (or coconut oil)",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "olive oil",
            "weight": 13.5,
            "foodCategory": "Oils",
            "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
            "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
          },
          {
            "text": "1 to 2 garlic cloves, minced",
            "quantity": 1.5,
            "measure": "clove",
            "food": "garlic",
            "weight": 4.5,
            "foodCategory": "vegetables",
            "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
            "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
          },
          {
            "text": "1 pound ground turkey (or 1 pound lean ground beef, optional)",
            "quantity": 1,
            "measure": "pound",
            "food": "ground turkey",
            "weight": 453.59237,
            "foodCategory": "Poultry",
            "foodId": "food_av7gav4bs6txmfb85t0ruapws8if",
            "image": "https://www.edamam.com/food-img/c1a/c1a1663042ef7f4d6d50f1f6418aaac6.jpg"
          },
          {
            "text": "1 can (32 ounce) tomato sauce (no-salt-added)",
            "quantity": 32,
            "measure": "ounce",
            "food": "tomato sauce",
            "weight": 907.18474,
            "foodCategory": "canned vegetables",
            "foodId": "food_altklniaqmdz3eb1rlf1ybjv8ihn",
            "image": null
          },
          {
            "text": "8 ounces red wine",
            "quantity": 8,
            "measure": "ounce",
            "food": "red wine",
            "weight": 226.796185,
            "foodCategory": "wines",
            "foodId": "food_b5q0xv2ba8la5hbzdfzdgaca3fwu",
            "image": "https://www.edamam.com/food-img/82b/82b8d0db2d5c38fc7498a657c0afc4ee.JPG"
          },
          {
            "text": "24 ounces water (or use all water and no wine)",
            "quantity": 24,
            "measure": "ounce",
            "food": "water",
            "weight": 680.388555,
            "foodCategory": "water",
            "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
            "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
          },
          {
            "text": "3 cans (6 ounce) tomato paste",
            "quantity": 6,
            "measure": "ounce",
            "food": "tomato paste",
            "weight": 170.09713875,
            "foodCategory": "canned vegetables",
            "foodId": "food_auu2atfal07b6gbd1a5wsawy7u0s",
            "image": "https://www.edamam.com/food-img/aef/aef4e029118da71388e526086506053a.jpg"
          },
          {
            "text": "3 to 4 tablespoons instant minced onion",
            "quantity": 3.5,
            "measure": "tablespoon",
            "food": "onion",
            "weight": 35,
            "foodCategory": "vegetables",
            "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
            "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
          },
          {
            "text": "1/4 cup granulated sugar (more less to your taste)",
            "quantity": 0.25,
            "measure": "cup",
            "food": "granulated sugar",
            "weight": 50,
            "foodCategory": "sugars",
            "foodId": "food_axi2ijobrk819yb0adceobnhm1c2",
            "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
          },
          {
            "text": "1/2 to 1 teaspoon salt (or 1/2 - 1 teaspoon salt substitute)",
            "quantity": 0.75,
            "measure": "teaspoon",
            "food": "salt",
            "weight": 4.5,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "1 teaspoon dried basil (see note)",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "dried basil",
            "weight": 0.7,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_abrithza96sev8ae5za0paqf42o0",
            "image": "https://www.edamam.com/food-img/49a/49a878702f9b654e1a965f2f2618a341.jpg"
          },
          {
            "text": "1/2 teaspoon dried oregano",
            "quantity": 0.5,
            "measure": "teaspoon",
            "food": "dried oregano",
            "weight": 0.5,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_bkkw6v3bdf0sqiazmzyuiax7i8jr",
            "image": "https://www.edamam.com/food-img/1b0/1b0eaffb1c261606e0d82fed8e9747a7.jpg"
          },
          {
            "text": "1 teaspoon onion powder",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "onion powder",
            "weight": 2.4,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_bmv8z27b1o25vcbu41ooyawd2zj4",
            "image": "https://www.edamam.com/food-img/1e7/1e73e6f5dd96bb233abc0fcc05fb0ec8.jpg"
          }
        ],
        "calories": 1565.9824562250003,
        "totalWeight": 2544.6589887499995,
        "totalTime": 0,
        "cuisineType": [
          "italian"
        ],
        "mealType": [
          "snack",
          "lunch/dinner"
        ],
        "dishType": [
          "condiments and sauces"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 1565.9824562250003,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 51.898536314125,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 11.633647450949999,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0.4672001411,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 22.346231165462502,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 12.825390744512502,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 143.58068906012502,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 121.46823527137502,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 22.112453788749995,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 106.04028459075,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 49.9,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 108.69633054550003,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 312.97873530000004,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 5948.538027925,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 362.68973530000005,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 359.52818212500006,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 5900.798736575001,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 20.922087522749997,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 14.389442611625002,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 1372.8893675125003,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 420.25694225000007,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 105.32690518625,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 0.6680063943000001,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 1.6646896178375001,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 45.40809048785001,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 4.07339265715,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 147.753711,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 147.753711,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 4.535923700000001,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 1.8143694800000003,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 22.906400355250003,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 69.2513312775,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 2191.2693134367505,
            "unit": "g"
          }
        }
      }
    }
  ]
}`),XI=({clickFn:e})=>{const t=YI.hits,[n,r]=_.exports.useState(""),o=i=>{r(i.target.value)},a=t.filter(i=>i.recipe.label.toLowerCase().includes(n.toLowerCase()));return B(Pe,{children:[w(KI,{changeFn:o,width:{base:"60vw",md:"600px"},mb:8}),a.length>1?B(Pe,{children:[B(vo,{colorScheme:"green",mb:"4",children:["Found ",a.length," recipes"]}),w(Rh,{clickFn:e,recipes:a})]}):a.length==1?B(Pe,{children:[B(vo,{colorScheme:"green",mb:"4",children:["Found ",a.length," recipe"]}),w(Rh,{clickFn:e,recipes:a})]}):w(qe,{minH:"100vh",children:w(vo,{variant:"solid",colorScheme:"red",children:"No results found!"})})]})},QI=()=>{const[e,t]=_.exports.useState();return w(Pe,{children:w(qe,{bgGradient:"linear(to-r, blue.300, green.400, orange.200)",children:w("div",{className:"App",children:e?w(GI,{recipe:e,clickFn:t}):B(Pe,{children:[w(rt,{color:"whitesmoke",m:"6",children:"My Recipe App"}),w(XI,{clickFn:t})]})})})})};nf.createRoot(document.getElementById("root")).render(w(q.StrictMode,{children:w($I,{children:w(QI,{})})}));
