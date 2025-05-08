(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(a){if(a.ep)return;a.ep=!0;const o=t(a);fetch(a.href,o)}})();function xx(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var ey={exports:{}},Qc={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cb;function Nx(){if(Cb)return Qc;Cb=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(r,a,o){var u=null;if(o!==void 0&&(u=""+o),a.key!==void 0&&(u=""+a.key),"key"in a){o={};for(var d in a)d!=="key"&&(o[d]=a[d])}else o=a;return a=o.ref,{$$typeof:n,type:r,key:u,ref:a!==void 0?a:null,props:o}}return Qc.Fragment=e,Qc.jsx=t,Qc.jsxs=t,Qc}var Db;function Ox(){return Db||(Db=1,ey.exports=Nx()),ey.exports}var ie=Ox(),ty={exports:{}},Wc={},ny={exports:{}},ry={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pb;function kx(){return Pb||(Pb=1,function(n){function e(he,be){var Te=he.length;he.push(be);e:for(;0<Te;){var Oe=Te-1>>>1,O=he[Oe];if(0<a(O,be))he[Oe]=be,he[Te]=O,Te=Oe;else break e}}function t(he){return he.length===0?null:he[0]}function r(he){if(he.length===0)return null;var be=he[0],Te=he.pop();if(Te!==be){he[0]=Te;e:for(var Oe=0,O=he.length,re=O>>>1;Oe<re;){var ge=2*(Oe+1)-1,pe=he[ge],fe=ge+1,Ce=he[fe];if(0>a(pe,Te))fe<O&&0>a(Ce,pe)?(he[Oe]=Ce,he[fe]=Te,Oe=fe):(he[Oe]=pe,he[ge]=Te,Oe=ge);else if(fe<O&&0>a(Ce,Te))he[Oe]=Ce,he[fe]=Te,Oe=fe;else break e}}return be}function a(he,be){var Te=he.sortIndex-be.sortIndex;return Te!==0?Te:he.id-be.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var o=performance;n.unstable_now=function(){return o.now()}}else{var u=Date,d=u.now();n.unstable_now=function(){return u.now()-d}}var p=[],m=[],y=1,v=null,w=3,S=!1,P=!1,U=!1,L=typeof setTimeout=="function"?setTimeout:null,z=typeof clearTimeout=="function"?clearTimeout:null,W=typeof setImmediate<"u"?setImmediate:null;function G(he){for(var be=t(m);be!==null;){if(be.callback===null)r(m);else if(be.startTime<=he)r(m),be.sortIndex=be.expirationTime,e(p,be);else break;be=t(m)}}function oe(he){if(U=!1,G(he),!P)if(t(p)!==null)P=!0,Nt();else{var be=t(m);be!==null&&It(oe,be.startTime-he)}}var ae=!1,le=-1,D=5,R=-1;function A(){return!(n.unstable_now()-R<D)}function x(){if(ae){var he=n.unstable_now();R=he;var be=!0;try{e:{P=!1,U&&(U=!1,z(le),le=-1),S=!0;var Te=w;try{t:{for(G(he),v=t(p);v!==null&&!(v.expirationTime>he&&A());){var Oe=v.callback;if(typeof Oe=="function"){v.callback=null,w=v.priorityLevel;var O=Oe(v.expirationTime<=he);if(he=n.unstable_now(),typeof O=="function"){v.callback=O,G(he),be=!0;break t}v===t(p)&&r(p),G(he)}else r(p);v=t(p)}if(v!==null)be=!0;else{var re=t(m);re!==null&&It(oe,re.startTime-he),be=!1}}break e}finally{v=null,w=Te,S=!1}be=void 0}}finally{be?V():ae=!1}}}var V;if(typeof W=="function")V=function(){W(x)};else if(typeof MessageChannel<"u"){var F=new MessageChannel,N=F.port2;F.port1.onmessage=x,V=function(){N.postMessage(null)}}else V=function(){L(x,0)};function Nt(){ae||(ae=!0,V())}function It(he,be){le=L(function(){he(n.unstable_now())},be)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(he){he.callback=null},n.unstable_continueExecution=function(){P||S||(P=!0,Nt())},n.unstable_forceFrameRate=function(he){0>he||125<he?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<he?Math.floor(1e3/he):5},n.unstable_getCurrentPriorityLevel=function(){return w},n.unstable_getFirstCallbackNode=function(){return t(p)},n.unstable_next=function(he){switch(w){case 1:case 2:case 3:var be=3;break;default:be=w}var Te=w;w=be;try{return he()}finally{w=Te}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(he,be){switch(he){case 1:case 2:case 3:case 4:case 5:break;default:he=3}var Te=w;w=he;try{return be()}finally{w=Te}},n.unstable_scheduleCallback=function(he,be,Te){var Oe=n.unstable_now();switch(typeof Te=="object"&&Te!==null?(Te=Te.delay,Te=typeof Te=="number"&&0<Te?Oe+Te:Oe):Te=Oe,he){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=Te+O,he={id:y++,callback:be,priorityLevel:he,startTime:Te,expirationTime:O,sortIndex:-1},Te>Oe?(he.sortIndex=Te,e(m,he),t(p)===null&&he===t(m)&&(U?(z(le),le=-1):U=!0,It(oe,Te-Oe))):(he.sortIndex=O,e(p,he),P||S||(P=!0,Nt())),he},n.unstable_shouldYield=A,n.unstable_wrapCallback=function(he){var be=w;return function(){var Te=w;w=be;try{return he.apply(this,arguments)}finally{w=Te}}}}(ry)),ry}var xb;function Vx(){return xb||(xb=1,ny.exports=kx()),ny.exports}var iy={exports:{}},Ne={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nb;function Mx(){if(Nb)return Ne;Nb=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),o=Symbol.for("react.consumer"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),v=Symbol.iterator;function w(O){return O===null||typeof O!="object"?null:(O=v&&O[v]||O["@@iterator"],typeof O=="function"?O:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},P=Object.assign,U={};function L(O,re,ge){this.props=O,this.context=re,this.refs=U,this.updater=ge||S}L.prototype.isReactComponent={},L.prototype.setState=function(O,re){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,re,"setState")},L.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function z(){}z.prototype=L.prototype;function W(O,re,ge){this.props=O,this.context=re,this.refs=U,this.updater=ge||S}var G=W.prototype=new z;G.constructor=W,P(G,L.prototype),G.isPureReactComponent=!0;var oe=Array.isArray,ae={H:null,A:null,T:null,S:null},le=Object.prototype.hasOwnProperty;function D(O,re,ge,pe,fe,Ce){return ge=Ce.ref,{$$typeof:n,type:O,key:re,ref:ge!==void 0?ge:null,props:Ce}}function R(O,re){return D(O.type,re,void 0,void 0,void 0,O.props)}function A(O){return typeof O=="object"&&O!==null&&O.$$typeof===n}function x(O){var re={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(ge){return re[ge]})}var V=/\/+/g;function F(O,re){return typeof O=="object"&&O!==null&&O.key!=null?x(""+O.key):re.toString(36)}function N(){}function Nt(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(N,N):(O.status="pending",O.then(function(re){O.status==="pending"&&(O.status="fulfilled",O.value=re)},function(re){O.status==="pending"&&(O.status="rejected",O.reason=re)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function It(O,re,ge,pe,fe){var Ce=typeof O;(Ce==="undefined"||Ce==="boolean")&&(O=null);var Re=!1;if(O===null)Re=!0;else switch(Ce){case"bigint":case"string":case"number":Re=!0;break;case"object":switch(O.$$typeof){case n:case e:Re=!0;break;case y:return Re=O._init,It(Re(O._payload),re,ge,pe,fe)}}if(Re)return fe=fe(O),Re=pe===""?"."+F(O,0):pe,oe(fe)?(ge="",Re!=null&&(ge=Re.replace(V,"$&/")+"/"),It(fe,re,ge,"",function(Ze){return Ze})):fe!=null&&(A(fe)&&(fe=R(fe,ge+(fe.key==null||O&&O.key===fe.key?"":(""+fe.key).replace(V,"$&/")+"/")+Re)),re.push(fe)),1;Re=0;var ut=pe===""?".":pe+":";if(oe(O))for(var Me=0;Me<O.length;Me++)pe=O[Me],Ce=ut+F(pe,Me),Re+=It(pe,re,ge,Ce,fe);else if(Me=w(O),typeof Me=="function")for(O=Me.call(O),Me=0;!(pe=O.next()).done;)pe=pe.value,Ce=ut+F(pe,Me++),Re+=It(pe,re,ge,Ce,fe);else if(Ce==="object"){if(typeof O.then=="function")return It(Nt(O),re,ge,pe,fe);throw re=String(O),Error("Objects are not valid as a React child (found: "+(re==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":re)+"). If you meant to render a collection of children, use an array instead.")}return Re}function he(O,re,ge){if(O==null)return O;var pe=[],fe=0;return It(O,pe,"","",function(Ce){return re.call(ge,Ce,fe++)}),pe}function be(O){if(O._status===-1){var re=O._result;re=re(),re.then(function(ge){(O._status===0||O._status===-1)&&(O._status=1,O._result=ge)},function(ge){(O._status===0||O._status===-1)&&(O._status=2,O._result=ge)}),O._status===-1&&(O._status=0,O._result=re)}if(O._status===1)return O._result.default;throw O._result}var Te=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var re=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(re))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)};function Oe(){}return Ne.Children={map:he,forEach:function(O,re,ge){he(O,function(){re.apply(this,arguments)},ge)},count:function(O){var re=0;return he(O,function(){re++}),re},toArray:function(O){return he(O,function(re){return re})||[]},only:function(O){if(!A(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},Ne.Component=L,Ne.Fragment=t,Ne.Profiler=a,Ne.PureComponent=W,Ne.StrictMode=r,Ne.Suspense=p,Ne.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ae,Ne.act=function(){throw Error("act(...) is not supported in production builds of React.")},Ne.cache=function(O){return function(){return O.apply(null,arguments)}},Ne.cloneElement=function(O,re,ge){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var pe=P({},O.props),fe=O.key,Ce=void 0;if(re!=null)for(Re in re.ref!==void 0&&(Ce=void 0),re.key!==void 0&&(fe=""+re.key),re)!le.call(re,Re)||Re==="key"||Re==="__self"||Re==="__source"||Re==="ref"&&re.ref===void 0||(pe[Re]=re[Re]);var Re=arguments.length-2;if(Re===1)pe.children=ge;else if(1<Re){for(var ut=Array(Re),Me=0;Me<Re;Me++)ut[Me]=arguments[Me+2];pe.children=ut}return D(O.type,fe,void 0,void 0,Ce,pe)},Ne.createContext=function(O){return O={$$typeof:u,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:o,_context:O},O},Ne.createElement=function(O,re,ge){var pe,fe={},Ce=null;if(re!=null)for(pe in re.key!==void 0&&(Ce=""+re.key),re)le.call(re,pe)&&pe!=="key"&&pe!=="__self"&&pe!=="__source"&&(fe[pe]=re[pe]);var Re=arguments.length-2;if(Re===1)fe.children=ge;else if(1<Re){for(var ut=Array(Re),Me=0;Me<Re;Me++)ut[Me]=arguments[Me+2];fe.children=ut}if(O&&O.defaultProps)for(pe in Re=O.defaultProps,Re)fe[pe]===void 0&&(fe[pe]=Re[pe]);return D(O,Ce,void 0,void 0,null,fe)},Ne.createRef=function(){return{current:null}},Ne.forwardRef=function(O){return{$$typeof:d,render:O}},Ne.isValidElement=A,Ne.lazy=function(O){return{$$typeof:y,_payload:{_status:-1,_result:O},_init:be}},Ne.memo=function(O,re){return{$$typeof:m,type:O,compare:re===void 0?null:re}},Ne.startTransition=function(O){var re=ae.T,ge={};ae.T=ge;try{var pe=O(),fe=ae.S;fe!==null&&fe(ge,pe),typeof pe=="object"&&pe!==null&&typeof pe.then=="function"&&pe.then(Oe,Te)}catch(Ce){Te(Ce)}finally{ae.T=re}},Ne.unstable_useCacheRefresh=function(){return ae.H.useCacheRefresh()},Ne.use=function(O){return ae.H.use(O)},Ne.useActionState=function(O,re,ge){return ae.H.useActionState(O,re,ge)},Ne.useCallback=function(O,re){return ae.H.useCallback(O,re)},Ne.useContext=function(O){return ae.H.useContext(O)},Ne.useDebugValue=function(){},Ne.useDeferredValue=function(O,re){return ae.H.useDeferredValue(O,re)},Ne.useEffect=function(O,re){return ae.H.useEffect(O,re)},Ne.useId=function(){return ae.H.useId()},Ne.useImperativeHandle=function(O,re,ge){return ae.H.useImperativeHandle(O,re,ge)},Ne.useInsertionEffect=function(O,re){return ae.H.useInsertionEffect(O,re)},Ne.useLayoutEffect=function(O,re){return ae.H.useLayoutEffect(O,re)},Ne.useMemo=function(O,re){return ae.H.useMemo(O,re)},Ne.useOptimistic=function(O,re){return ae.H.useOptimistic(O,re)},Ne.useReducer=function(O,re,ge){return ae.H.useReducer(O,re,ge)},Ne.useRef=function(O){return ae.H.useRef(O)},Ne.useState=function(O){return ae.H.useState(O)},Ne.useSyncExternalStore=function(O,re,ge){return ae.H.useSyncExternalStore(O,re,ge)},Ne.useTransition=function(){return ae.H.useTransition()},Ne.version="19.0.0",Ne}var Ob;function Dv(){return Ob||(Ob=1,iy.exports=Mx()),iy.exports}var sy={exports:{}},wn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kb;function Lx(){if(kb)return wn;kb=1;var n=Dv();function e(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)m+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var r={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},a=Symbol.for("react.portal");function o(p,m,y){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:v==null?null:""+v,children:p,containerInfo:m,implementation:y}}var u=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return wn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,wn.createPortal=function(p,m){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(e(299));return o(p,m,null,y)},wn.flushSync=function(p){var m=u.T,y=r.p;try{if(u.T=null,r.p=2,p)return p()}finally{u.T=m,r.p=y,r.d.f()}},wn.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,r.d.C(p,m))},wn.prefetchDNS=function(p){typeof p=="string"&&r.d.D(p)},wn.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var y=m.as,v=d(y,m.crossOrigin),w=typeof m.integrity=="string"?m.integrity:void 0,S=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;y==="style"?r.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:v,integrity:w,fetchPriority:S}):y==="script"&&r.d.X(p,{crossOrigin:v,integrity:w,fetchPriority:S,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},wn.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var y=d(m.as,m.crossOrigin);r.d.M(p,{crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&r.d.M(p)},wn.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var y=m.as,v=d(y,m.crossOrigin);r.d.L(p,y,{crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},wn.preloadModule=function(p,m){if(typeof p=="string")if(m){var y=d(m.as,m.crossOrigin);r.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else r.d.m(p)},wn.requestFormReset=function(p){r.d.r(p)},wn.unstable_batchedUpdates=function(p,m){return p(m)},wn.useFormState=function(p,m,y){return u.H.useFormState(p,m,y)},wn.useFormStatus=function(){return u.H.useHostTransitionStatus()},wn.version="19.0.0",wn}var Vb;function Ux(){if(Vb)return sy.exports;Vb=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),sy.exports=Lx(),sy.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mb;function Bx(){if(Mb)return Wc;Mb=1;var n=Vx(),e=Dv(),t=Ux();function r(i){var s="https://react.dev/errors/"+i;if(1<arguments.length){s+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)s+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+i+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}var o=Symbol.for("react.element"),u=Symbol.for("react.transitional.element"),d=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),m=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),v=Symbol.for("react.provider"),w=Symbol.for("react.consumer"),S=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),U=Symbol.for("react.suspense"),L=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),G=Symbol.for("react.offscreen"),oe=Symbol.for("react.memo_cache_sentinel"),ae=Symbol.iterator;function le(i){return i===null||typeof i!="object"?null:(i=ae&&i[ae]||i["@@iterator"],typeof i=="function"?i:null)}var D=Symbol.for("react.client.reference");function R(i){if(i==null)return null;if(typeof i=="function")return i.$$typeof===D?null:i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case p:return"Fragment";case d:return"Portal";case y:return"Profiler";case m:return"StrictMode";case U:return"Suspense";case L:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case S:return(i.displayName||"Context")+".Provider";case w:return(i._context.displayName||"Context")+".Consumer";case P:var s=i.render;return i=i.displayName,i||(i=s.displayName||s.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case z:return s=i.displayName||null,s!==null?s:R(i.type)||"Memo";case W:s=i._payload,i=i._init;try{return R(i(s))}catch{}}return null}var A=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,x=Object.assign,V,F;function N(i){if(V===void 0)try{throw Error()}catch(l){var s=l.stack.trim().match(/\n( *(at )?)/);V=s&&s[1]||"",F=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+V+i+F}var Nt=!1;function It(i,s){if(!i||Nt)return"";Nt=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var c={DetermineComponentFrameRoot:function(){try{if(s){var te=function(){throw Error()};if(Object.defineProperty(te.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(te,[])}catch(X){var $=X}Reflect.construct(i,[],te)}else{try{te.call()}catch(X){$=X}i.call(te.prototype)}}else{try{throw Error()}catch(X){$=X}(te=i())&&typeof te.catch=="function"&&te.catch(function(){})}}catch(X){if(X&&$&&typeof X.stack=="string")return[X.stack,$.stack]}return[null,null]}};c.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(c.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(c.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var g=c.DetermineComponentFrameRoot(),T=g[0],b=g[1];if(T&&b){var C=T.split(`
`),M=b.split(`
`);for(f=c=0;c<C.length&&!C[c].includes("DetermineComponentFrameRoot");)c++;for(;f<M.length&&!M[f].includes("DetermineComponentFrameRoot");)f++;if(c===C.length||f===M.length)for(c=C.length-1,f=M.length-1;1<=c&&0<=f&&C[c]!==M[f];)f--;for(;1<=c&&0<=f;c--,f--)if(C[c]!==M[f]){if(c!==1||f!==1)do if(c--,f--,0>f||C[c]!==M[f]){var Z=`
`+C[c].replace(" at new "," at ");return i.displayName&&Z.includes("<anonymous>")&&(Z=Z.replace("<anonymous>",i.displayName)),Z}while(1<=c&&0<=f);break}}}finally{Nt=!1,Error.prepareStackTrace=l}return(l=i?i.displayName||i.name:"")?N(l):""}function he(i){switch(i.tag){case 26:case 27:case 5:return N(i.type);case 16:return N("Lazy");case 13:return N("Suspense");case 19:return N("SuspenseList");case 0:case 15:return i=It(i.type,!1),i;case 11:return i=It(i.type.render,!1),i;case 1:return i=It(i.type,!0),i;default:return""}}function be(i){try{var s="";do s+=he(i),i=i.return;while(i);return s}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}function Te(i){var s=i,l=i;if(i.alternate)for(;s.return;)s=s.return;else{i=s;do s=i,(s.flags&4098)!==0&&(l=s.return),i=s.return;while(i)}return s.tag===3?l:null}function Oe(i){if(i.tag===13){var s=i.memoizedState;if(s===null&&(i=i.alternate,i!==null&&(s=i.memoizedState)),s!==null)return s.dehydrated}return null}function O(i){if(Te(i)!==i)throw Error(r(188))}function re(i){var s=i.alternate;if(!s){if(s=Te(i),s===null)throw Error(r(188));return s!==i?null:i}for(var l=i,c=s;;){var f=l.return;if(f===null)break;var g=f.alternate;if(g===null){if(c=f.return,c!==null){l=c;continue}break}if(f.child===g.child){for(g=f.child;g;){if(g===l)return O(f),i;if(g===c)return O(f),s;g=g.sibling}throw Error(r(188))}if(l.return!==c.return)l=f,c=g;else{for(var T=!1,b=f.child;b;){if(b===l){T=!0,l=f,c=g;break}if(b===c){T=!0,c=f,l=g;break}b=b.sibling}if(!T){for(b=g.child;b;){if(b===l){T=!0,l=g,c=f;break}if(b===c){T=!0,c=g,l=f;break}b=b.sibling}if(!T)throw Error(r(189))}}if(l.alternate!==c)throw Error(r(190))}if(l.tag!==3)throw Error(r(188));return l.stateNode.current===l?i:s}function ge(i){var s=i.tag;if(s===5||s===26||s===27||s===6)return i;for(i=i.child;i!==null;){if(s=ge(i),s!==null)return s;i=i.sibling}return null}var pe=Array.isArray,fe=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ce={pending:!1,data:null,method:null,action:null},Re=[],ut=-1;function Me(i){return{current:i}}function Ze(i){0>ut||(i.current=Re[ut],Re[ut]=null,ut--)}function Ke(i,s){ut++,Re[ut]=i.current,i.current=s}var Ut=Me(null),Jt=Me(null),rr=Me(null),as=Me(null);function os(i,s){switch(Ke(rr,s),Ke(Jt,i),Ke(Ut,null),i=s.nodeType,i){case 9:case 11:s=(s=s.documentElement)&&(s=s.namespaceURI)?rb(s):0;break;default:if(i=i===8?s.parentNode:s,s=i.tagName,i=i.namespaceURI)i=rb(i),s=ib(i,s);else switch(s){case"svg":s=1;break;case"math":s=2;break;default:s=0}}Ze(Ut),Ke(Ut,s)}function _i(){Ze(Ut),Ze(Jt),Ze(rr)}function ju(i){i.memoizedState!==null&&Ke(as,i);var s=Ut.current,l=ib(s,i.type);s!==l&&(Ke(Jt,i),Ke(Ut,l))}function qo(i){Jt.current===i&&(Ze(Ut),Ze(Jt)),as.current===i&&(Ze(as),jc._currentValue=Ce)}var jo=Object.prototype.hasOwnProperty,Ia=n.unstable_scheduleCallback,Ho=n.unstable_cancelCallback,ng=n.unstable_shouldYield,Hu=n.unstable_requestPaint,Ln=n.unstable_now,Rd=n.unstable_getCurrentPriorityLevel,Gt=n.unstable_ImmediatePriority,en=n.unstable_UserBlockingPriority,yi=n.unstable_NormalPriority,Cd=n.unstable_LowPriority,Gu=n.unstable_IdlePriority,rg=n.log,Aa=n.unstable_setDisableYieldValue,ls=null,En=null;function $u(i){if(En&&typeof En.onCommitFiberRoot=="function")try{En.onCommitFiberRoot(ls,i,void 0,(i.current.flags&128)===128)}catch{}}function Vr(i){if(typeof rg=="function"&&Aa(i),En&&typeof En.setStrictMode=="function")try{En.setStrictMode(ls,i)}catch{}}var Rn=Math.clz32?Math.clz32:Pd,Ku=Math.log,Dd=Math.LN2;function Pd(i){return i>>>=0,i===0?32:31-(Ku(i)/Dd|0)|0}var Mr=128,us=4194304;function Ir(i){var s=i&42;if(s!==0)return s;switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return i&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return i}}function ir(i,s){var l=i.pendingLanes;if(l===0)return 0;var c=0,f=i.suspendedLanes,g=i.pingedLanes,T=i.warmLanes;i=i.finishedLanes!==0;var b=l&134217727;return b!==0?(l=b&~f,l!==0?c=Ir(l):(g&=b,g!==0?c=Ir(g):i||(T=b&~T,T!==0&&(c=Ir(T))))):(b=l&~f,b!==0?c=Ir(b):g!==0?c=Ir(g):i||(T=l&~T,T!==0&&(c=Ir(T)))),c===0?0:s!==0&&s!==c&&(s&f)===0&&(f=c&-c,T=s&-s,f>=T||f===32&&(T&4194176)!==0)?s:c}function cs(i,s){return(i.pendingLanes&~(i.suspendedLanes&~i.pingedLanes)&s)===0}function Go(i,s){switch(i){case 1:case 2:case 4:case 8:return s+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Qu(){var i=Mr;return Mr<<=1,(Mr&4194176)===0&&(Mr=128),i}function hs(){var i=us;return us<<=1,(us&62914560)===0&&(us=4194304),i}function $o(i){for(var s=[],l=0;31>l;l++)s.push(i);return s}function Ot(i,s){i.pendingLanes|=s,s!==268435456&&(i.suspendedLanes=0,i.pingedLanes=0,i.warmLanes=0)}function xd(i,s,l,c,f,g){var T=i.pendingLanes;i.pendingLanes=l,i.suspendedLanes=0,i.pingedLanes=0,i.warmLanes=0,i.expiredLanes&=l,i.entangledLanes&=l,i.errorRecoveryDisabledLanes&=l,i.shellSuspendCounter=0;var b=i.entanglements,C=i.expirationTimes,M=i.hiddenUpdates;for(l=T&~l;0<l;){var Z=31-Rn(l),te=1<<Z;b[Z]=0,C[Z]=-1;var $=M[Z];if($!==null)for(M[Z]=null,Z=0;Z<$.length;Z++){var X=$[Z];X!==null&&(X.lane&=-536870913)}l&=~te}c!==0&&ds(i,c,0),g!==0&&f===0&&i.tag!==0&&(i.suspendedLanes|=g&~(T&~s))}function ds(i,s,l){i.pendingLanes|=s,i.suspendedLanes&=~s;var c=31-Rn(s);i.entangledLanes|=s,i.entanglements[c]=i.entanglements[c]|1073741824|l&4194218}function fs(i,s){var l=i.entangledLanes|=s;for(i=i.entanglements;l;){var c=31-Rn(l),f=1<<c;f&s|i[c]&s&&(i[c]|=s),l&=~f}}function Nd(i){return i&=-i,2<i?8<i?(i&134217727)!==0?32:268435456:8:2}function Od(){var i=fe.p;return i!==0?i:(i=window.event,i===void 0?32:wb(i.type))}function ps(i,s){var l=fe.p;try{return fe.p=i,s()}finally{fe.p=l}}var Lr=Math.random().toString(36).slice(2),tn="__reactFiber$"+Lr,$t="__reactProps$"+Lr,vi="__reactContainer$"+Lr,Sa="__reactEvents$"+Lr,Ko="__reactListeners$"+Lr,Ur="__reactHandles$"+Lr,Wu="__reactResources$"+Lr,ms="__reactMarker$"+Lr;function Ra(i){delete i[tn],delete i[$t],delete i[Sa],delete i[Ko],delete i[Ur]}function Ar(i){var s=i[tn];if(s)return s;for(var l=i.parentNode;l;){if(s=l[vi]||l[tn]){if(l=s.alternate,s.child!==null||l!==null&&l.child!==null)for(i=ob(i);i!==null;){if(l=i[tn])return l;i=ob(i)}return s}i=l,l=i.parentNode}return null}function Ei(i){if(i=i[tn]||i[vi]){var s=i.tag;if(s===5||s===6||s===13||s===26||s===27||s===3)return i}return null}function gs(i){var s=i.tag;if(s===5||s===26||s===27||s===6)return i.stateNode;throw Error(r(33))}function _s(i){var s=i[Wu];return s||(s=i[Wu]={hoistableStyles:new Map,hoistableScripts:new Map}),s}function _t(i){i[ms]=!0}var Yu=new Set,Qo={};function Gn(i,s){Un(i,s),Un(i+"Capture",s)}function Un(i,s){for(Qo[i]=s,i=0;i<s.length;i++)Yu.add(s[i])}var $n=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ig=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Xu={},Zu={};function kd(i){return jo.call(Zu,i)?!0:jo.call(Xu,i)?!1:ig.test(i)?Zu[i]=!0:(Xu[i]=!0,!1)}function ys(i,s,l){if(kd(s))if(l===null)i.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":i.removeAttribute(s);return;case"boolean":var c=s.toLowerCase().slice(0,5);if(c!=="data-"&&c!=="aria-"){i.removeAttribute(s);return}}i.setAttribute(s,""+l)}}function vs(i,s,l){if(l===null)i.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":i.removeAttribute(s);return}i.setAttribute(s,""+l)}}function sr(i,s,l,c){if(c===null)i.removeAttribute(l);else{switch(typeof c){case"undefined":case"function":case"symbol":case"boolean":i.removeAttribute(l);return}i.setAttributeNS(s,l,""+c)}}function Cn(i){switch(typeof i){case"bigint":case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Vd(i){var s=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function sg(i){var s=Vd(i)?"checked":"value",l=Object.getOwnPropertyDescriptor(i.constructor.prototype,s),c=""+i[s];if(!i.hasOwnProperty(s)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var f=l.get,g=l.set;return Object.defineProperty(i,s,{configurable:!0,get:function(){return f.call(this)},set:function(T){c=""+T,g.call(this,T)}}),Object.defineProperty(i,s,{enumerable:l.enumerable}),{getValue:function(){return c},setValue:function(T){c=""+T},stopTracking:function(){i._valueTracker=null,delete i[s]}}}}function Ca(i){i._valueTracker||(i._valueTracker=sg(i))}function Ju(i){if(!i)return!1;var s=i._valueTracker;if(!s)return!0;var l=s.getValue(),c="";return i&&(c=Vd(i)?i.checked?"true":"false":i.value),i=c,i!==l?(s.setValue(i),!0):!1}function Wo(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}var Ti=/[\n"\\]/g;function At(i){return i.replace(Ti,function(s){return"\\"+s.charCodeAt(0).toString(16)+" "})}function Es(i,s,l,c,f,g,T,b){i.name="",T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?i.type=T:i.removeAttribute("type"),s!=null?T==="number"?(s===0&&i.value===""||i.value!=s)&&(i.value=""+Cn(s)):i.value!==""+Cn(s)&&(i.value=""+Cn(s)):T!=="submit"&&T!=="reset"||i.removeAttribute("value"),s!=null?Yo(i,T,Cn(s)):l!=null?Yo(i,T,Cn(l)):c!=null&&i.removeAttribute("value"),f==null&&g!=null&&(i.defaultChecked=!!g),f!=null&&(i.checked=f&&typeof f!="function"&&typeof f!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?i.name=""+Cn(b):i.removeAttribute("name")}function Da(i,s,l,c,f,g,T,b){if(g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(i.type=g),s!=null||l!=null){if(!(g!=="submit"&&g!=="reset"||s!=null))return;l=l!=null?""+Cn(l):"",s=s!=null?""+Cn(s):l,b||s===i.value||(i.value=s),i.defaultValue=s}c=c??f,c=typeof c!="function"&&typeof c!="symbol"&&!!c,i.checked=b?i.checked:!!c,i.defaultChecked=!!c,T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"&&(i.name=T)}function Yo(i,s,l){s==="number"&&Wo(i.ownerDocument)===i||i.defaultValue===""+l||(i.defaultValue=""+l)}function Qe(i,s,l,c){if(i=i.options,s){s={};for(var f=0;f<l.length;f++)s["$"+l[f]]=!0;for(l=0;l<i.length;l++)f=s.hasOwnProperty("$"+i[l].value),i[l].selected!==f&&(i[l].selected=f),f&&c&&(i[l].defaultSelected=!0)}else{for(l=""+Cn(l),s=null,f=0;f<i.length;f++){if(i[f].value===l){i[f].selected=!0,c&&(i[f].defaultSelected=!0);return}s!==null||i[f].disabled||(s=i[f])}s!==null&&(s.selected=!0)}}function Pa(i,s,l){if(s!=null&&(s=""+Cn(s),s!==i.value&&(i.value=s),l==null)){i.defaultValue!==s&&(i.defaultValue=s);return}i.defaultValue=l!=null?""+Cn(l):""}function Ts(i,s,l,c){if(s==null){if(c!=null){if(l!=null)throw Error(r(92));if(pe(c)){if(1<c.length)throw Error(r(93));c=c[0]}l=c}l==null&&(l=""),s=l}l=Cn(s),i.defaultValue=l,c=i.textContent,c===l&&c!==""&&c!==null&&(i.value=c)}function ar(i,s){if(s){var l=i.firstChild;if(l&&l===i.lastChild&&l.nodeType===3){l.nodeValue=s;return}}i.textContent=s}var ag=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ec(i,s,l){var c=s.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?c?i.setProperty(s,""):s==="float"?i.cssFloat="":i[s]="":c?i.setProperty(s,l):typeof l!="number"||l===0||ag.has(s)?s==="float"?i.cssFloat=l:i[s]=(""+l).trim():i[s]=l+"px"}function Md(i,s,l){if(s!=null&&typeof s!="object")throw Error(r(62));if(i=i.style,l!=null){for(var c in l)!l.hasOwnProperty(c)||s!=null&&s.hasOwnProperty(c)||(c.indexOf("--")===0?i.setProperty(c,""):c==="float"?i.cssFloat="":i[c]="");for(var f in s)c=s[f],s.hasOwnProperty(f)&&l[f]!==c&&ec(i,f,c)}else for(var g in s)s.hasOwnProperty(g)&&ec(i,g,s[g])}function tc(i){if(i.indexOf("-")===-1)return!1;switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var og=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),lg=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Br(i){return lg.test(""+i)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":i}var or=null;function Xo(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var wi=null,bi=null;function Ii(i){var s=Ei(i);if(s&&(i=s.stateNode)){var l=i[$t]||null;e:switch(i=s.stateNode,s.type){case"input":if(Es(i,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),s=l.name,l.type==="radio"&&s!=null){for(l=i;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+At(""+s)+'"][type="radio"]'),s=0;s<l.length;s++){var c=l[s];if(c!==i&&c.form===i.form){var f=c[$t]||null;if(!f)throw Error(r(90));Es(c,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(s=0;s<l.length;s++)c=l[s],c.form===i.form&&Ju(c)}break e;case"textarea":Pa(i,l.value,l.defaultValue);break e;case"select":s=l.value,s!=null&&Qe(i,!!l.multiple,s,!1)}}}var nc=!1;function Ld(i,s,l){if(nc)return i(s,l);nc=!0;try{var c=i(s);return c}finally{if(nc=!1,(wi!==null||bi!==null)&&(Df(),wi&&(s=wi,i=bi,bi=wi=null,Ii(s),i)))for(s=0;s<i.length;s++)Ii(i[s])}}function xa(i,s){var l=i.stateNode;if(l===null)return null;var c=l[$t]||null;if(c===null)return null;l=c[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(i=i.type,c=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!c;break e;default:i=!1}if(i)return null;if(l&&typeof l!="function")throw Error(r(231,s,typeof l));return l}var lr=!1;if($n)try{var Na={};Object.defineProperty(Na,"passive",{get:function(){lr=!0}}),window.addEventListener("test",Na,Na),window.removeEventListener("test",Na,Na)}catch{lr=!1}var zr=null,ws=null,Ai=null;function rc(){if(Ai)return Ai;var i,s=ws,l=s.length,c,f="value"in zr?zr.value:zr.textContent,g=f.length;for(i=0;i<l&&s[i]===f[i];i++);var T=l-i;for(c=1;c<=T&&s[l-c]===f[g-c];c++);return Ai=f.slice(i,1<c?1-c:void 0)}function Fr(i){var s=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&s===13&&(i=13)):i=s,i===10&&(i=13),32<=i||i===13?i:0}function qr(){return!0}function ic(){return!1}function nn(i){function s(l,c,f,g,T){this._reactName=l,this._targetInst=f,this.type=c,this.nativeEvent=g,this.target=T,this.currentTarget=null;for(var b in i)i.hasOwnProperty(b)&&(l=i[b],this[b]=l?l(g):g[b]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?qr:ic,this.isPropagationStopped=ic,this}return x(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=qr)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=qr)},persist:function(){},isPersistent:qr}),s}var Je={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zo=nn(Je),Oa=x({},Je,{view:0,detail:0}),Ud=nn(Oa),Jo,el,jr,ka=x({},Oa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:La,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==jr&&(jr&&i.type==="mousemove"?(Jo=i.screenX-jr.screenX,el=i.screenY-jr.screenY):el=Jo=0,jr=i),Jo)},movementY:function(i){return"movementY"in i?i.movementY:el}}),ur=nn(ka),Bd=x({},ka,{dataTransfer:0}),ug=nn(Bd),Va=x({},Oa,{relatedTarget:0}),tl=nn(Va),sc=x({},Je,{animationName:0,elapsedTime:0,pseudoElement:0}),nl=nn(sc),zd=x({},Je,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),rl=nn(zd),cg=x({},Je,{data:0}),ac=nn(cg),Ma={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Fd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function oc(i){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(i):(i=qd[i])?!!s[i]:!1}function La(){return oc}var jd=x({},Oa,{key:function(i){if(i.key){var s=Ma[i.key]||i.key;if(s!=="Unidentified")return s}return i.type==="keypress"?(i=Fr(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?Fd[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:La,charCode:function(i){return i.type==="keypress"?Fr(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?Fr(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),il=nn(jd),Hd=x({},ka,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),lc=nn(Hd),Si=x({},Oa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:La}),Gd=nn(Si),$d=x({},Je,{propertyName:0,elapsedTime:0,pseudoElement:0}),Kd=nn($d),Qd=x({},ka,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),sl=nn(Qd),Dn=x({},Je,{newState:0,oldState:0}),Wd=nn(Dn),Yd=[9,13,27,32],Hr=$n&&"CompositionEvent"in window,h=null;$n&&"documentMode"in document&&(h=document.documentMode);var _=$n&&"TextEvent"in window&&!h,E=$n&&(!Hr||h&&8<h&&11>=h),I=" ",q=!1;function Q(i,s){switch(i){case"keyup":return Yd.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ue(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var je=!1;function Kt(i,s){switch(i){case"compositionend":return ue(s);case"keypress":return s.which!==32?null:(q=!0,I);case"textInput":return i=s.data,i===I&&q?null:i;default:return null}}function He(i,s){if(je)return i==="compositionend"||!Hr&&Q(i,s)?(i=rc(),Ai=ws=zr=null,je=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return E&&s.locale!=="ko"?null:s.data;default:return null}}var rn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qt(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s==="input"?!!rn[i.type]:s==="textarea"}function Ri(i,s,l,c){wi?bi?bi.push(c):bi=[c]:wi=c,s=kf(s,"onChange"),0<s.length&&(l=new Zo("onChange","change",null,l,c),i.push({event:l,listeners:s}))}var dn=null,Gr=null;function uc(i){Z0(i,0)}function Xd(i){var s=gs(i);if(Ju(s))return i}function RT(i,s){if(i==="change")return s}var CT=!1;if($n){var hg;if($n){var dg="oninput"in document;if(!dg){var DT=document.createElement("div");DT.setAttribute("oninput","return;"),dg=typeof DT.oninput=="function"}hg=dg}else hg=!1;CT=hg&&(!document.documentMode||9<document.documentMode)}function PT(){dn&&(dn.detachEvent("onpropertychange",xT),Gr=dn=null)}function xT(i){if(i.propertyName==="value"&&Xd(Gr)){var s=[];Ri(s,Gr,i,Xo(i)),Ld(uc,s)}}function oP(i,s,l){i==="focusin"?(PT(),dn=s,Gr=l,dn.attachEvent("onpropertychange",xT)):i==="focusout"&&PT()}function lP(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return Xd(Gr)}function uP(i,s){if(i==="click")return Xd(s)}function cP(i,s){if(i==="input"||i==="change")return Xd(s)}function hP(i,s){return i===s&&(i!==0||1/i===1/s)||i!==i&&s!==s}var Kn=typeof Object.is=="function"?Object.is:hP;function cc(i,s){if(Kn(i,s))return!0;if(typeof i!="object"||i===null||typeof s!="object"||s===null)return!1;var l=Object.keys(i),c=Object.keys(s);if(l.length!==c.length)return!1;for(c=0;c<l.length;c++){var f=l[c];if(!jo.call(s,f)||!Kn(i[f],s[f]))return!1}return!0}function NT(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function OT(i,s){var l=NT(i);i=0;for(var c;l;){if(l.nodeType===3){if(c=i+l.textContent.length,i<=s&&c>=s)return{node:l,offset:s-i};i=c}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=NT(l)}}function kT(i,s){return i&&s?i===s?!0:i&&i.nodeType===3?!1:s&&s.nodeType===3?kT(i,s.parentNode):"contains"in i?i.contains(s):i.compareDocumentPosition?!!(i.compareDocumentPosition(s)&16):!1:!1}function VT(i){i=i!=null&&i.ownerDocument!=null&&i.ownerDocument.defaultView!=null?i.ownerDocument.defaultView:window;for(var s=Wo(i.document);s instanceof i.HTMLIFrameElement;){try{var l=typeof s.contentWindow.location.href=="string"}catch{l=!1}if(l)i=s.contentWindow;else break;s=Wo(i.document)}return s}function fg(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s&&(s==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||s==="textarea"||i.contentEditable==="true")}function dP(i,s){var l=VT(s);s=i.focusedElem;var c=i.selectionRange;if(l!==s&&s&&s.ownerDocument&&kT(s.ownerDocument.documentElement,s)){if(c!==null&&fg(s)){if(i=c.start,l=c.end,l===void 0&&(l=i),"selectionStart"in s)s.selectionStart=i,s.selectionEnd=Math.min(l,s.value.length);else if(l=(i=s.ownerDocument||document)&&i.defaultView||window,l.getSelection){l=l.getSelection();var f=s.textContent.length,g=Math.min(c.start,f);c=c.end===void 0?g:Math.min(c.end,f),!l.extend&&g>c&&(f=c,c=g,g=f),f=OT(s,g);var T=OT(s,c);f&&T&&(l.rangeCount!==1||l.anchorNode!==f.node||l.anchorOffset!==f.offset||l.focusNode!==T.node||l.focusOffset!==T.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),l.removeAllRanges(),g>c?(l.addRange(i),l.extend(T.node,T.offset)):(i.setEnd(T.node,T.offset),l.addRange(i)))}}for(i=[],l=s;l=l.parentNode;)l.nodeType===1&&i.push({element:l,left:l.scrollLeft,top:l.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<i.length;s++)l=i[s],l.element.scrollLeft=l.left,l.element.scrollTop=l.top}}var fP=$n&&"documentMode"in document&&11>=document.documentMode,al=null,pg=null,hc=null,mg=!1;function MT(i,s,l){var c=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;mg||al==null||al!==Wo(c)||(c=al,"selectionStart"in c&&fg(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),hc&&cc(hc,c)||(hc=c,c=kf(pg,"onSelect"),0<c.length&&(s=new Zo("onSelect","select",null,s,l),i.push({event:s,listeners:c}),s.target=al)))}function Ua(i,s){var l={};return l[i.toLowerCase()]=s.toLowerCase(),l["Webkit"+i]="webkit"+s,l["Moz"+i]="moz"+s,l}var ol={animationend:Ua("Animation","AnimationEnd"),animationiteration:Ua("Animation","AnimationIteration"),animationstart:Ua("Animation","AnimationStart"),transitionrun:Ua("Transition","TransitionRun"),transitionstart:Ua("Transition","TransitionStart"),transitioncancel:Ua("Transition","TransitionCancel"),transitionend:Ua("Transition","TransitionEnd")},gg={},LT={};$n&&(LT=document.createElement("div").style,"AnimationEvent"in window||(delete ol.animationend.animation,delete ol.animationiteration.animation,delete ol.animationstart.animation),"TransitionEvent"in window||delete ol.transitionend.transition);function Ba(i){if(gg[i])return gg[i];if(!ol[i])return i;var s=ol[i],l;for(l in s)if(s.hasOwnProperty(l)&&l in LT)return gg[i]=s[l];return i}var UT=Ba("animationend"),BT=Ba("animationiteration"),zT=Ba("animationstart"),pP=Ba("transitionrun"),mP=Ba("transitionstart"),gP=Ba("transitioncancel"),FT=Ba("transitionend"),qT=new Map,jT="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function Sr(i,s){qT.set(i,s),Gn(s,[i])}var cr=[],ll=0,_g=0;function Zd(){for(var i=ll,s=_g=ll=0;s<i;){var l=cr[s];cr[s++]=null;var c=cr[s];cr[s++]=null;var f=cr[s];cr[s++]=null;var g=cr[s];if(cr[s++]=null,c!==null&&f!==null){var T=c.pending;T===null?f.next=f:(f.next=T.next,T.next=f),c.pending=f}g!==0&&HT(l,f,g)}}function Jd(i,s,l,c){cr[ll++]=i,cr[ll++]=s,cr[ll++]=l,cr[ll++]=c,_g|=c,i.lanes|=c,i=i.alternate,i!==null&&(i.lanes|=c)}function yg(i,s,l,c){return Jd(i,s,l,c),ef(i)}function bs(i,s){return Jd(i,null,null,s),ef(i)}function HT(i,s,l){i.lanes|=l;var c=i.alternate;c!==null&&(c.lanes|=l);for(var f=!1,g=i.return;g!==null;)g.childLanes|=l,c=g.alternate,c!==null&&(c.childLanes|=l),g.tag===22&&(i=g.stateNode,i===null||i._visibility&1||(f=!0)),i=g,g=g.return;f&&s!==null&&i.tag===3&&(g=i.stateNode,f=31-Rn(l),g=g.hiddenUpdates,i=g[f],i===null?g[f]=[s]:i.push(s),s.lane=l|536870912)}function ef(i){if(50<Mc)throw Mc=0,I_=null,Error(r(185));for(var s=i.return;s!==null;)i=s,s=i.return;return i.tag===3?i.stateNode:null}var ul={},GT=new WeakMap;function hr(i,s){if(typeof i=="object"&&i!==null){var l=GT.get(i);return l!==void 0?l:(s={value:i,source:s,stack:be(s)},GT.set(i,s),s)}return{value:i,source:s,stack:be(s)}}var cl=[],hl=0,tf=null,nf=0,dr=[],fr=0,za=null,Ci=1,Di="";function Fa(i,s){cl[hl++]=nf,cl[hl++]=tf,tf=i,nf=s}function $T(i,s,l){dr[fr++]=Ci,dr[fr++]=Di,dr[fr++]=za,za=i;var c=Ci;i=Di;var f=32-Rn(c)-1;c&=~(1<<f),l+=1;var g=32-Rn(s)+f;if(30<g){var T=f-f%5;g=(c&(1<<T)-1).toString(32),c>>=T,f-=T,Ci=1<<32-Rn(s)+f|l<<f|c,Di=g+i}else Ci=1<<g|l<<f|c,Di=i}function vg(i){i.return!==null&&(Fa(i,1),$T(i,1,0))}function Eg(i){for(;i===tf;)tf=cl[--hl],cl[hl]=null,nf=cl[--hl],cl[hl]=null;for(;i===za;)za=dr[--fr],dr[fr]=null,Di=dr[--fr],dr[fr]=null,Ci=dr[--fr],dr[fr]=null}var Pn=null,fn=null,We=!1,Rr=null,$r=!1,Tg=Error(r(519));function qa(i){var s=Error(r(418,""));throw pc(hr(s,i)),Tg}function KT(i){var s=i.stateNode,l=i.type,c=i.memoizedProps;switch(s[tn]=i,s[$t]=c,l){case"dialog":qe("cancel",s),qe("close",s);break;case"iframe":case"object":case"embed":qe("load",s);break;case"video":case"audio":for(l=0;l<Uc.length;l++)qe(Uc[l],s);break;case"source":qe("error",s);break;case"img":case"image":case"link":qe("error",s),qe("load",s);break;case"details":qe("toggle",s);break;case"input":qe("invalid",s),Da(s,c.value,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name,!0),Ca(s);break;case"select":qe("invalid",s);break;case"textarea":qe("invalid",s),Ts(s,c.value,c.defaultValue,c.children),Ca(s)}l=c.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||s.textContent===""+l||c.suppressHydrationWarning===!0||nb(s.textContent,l)?(c.popover!=null&&(qe("beforetoggle",s),qe("toggle",s)),c.onScroll!=null&&qe("scroll",s),c.onScrollEnd!=null&&qe("scrollend",s),c.onClick!=null&&(s.onclick=Vf),s=!0):s=!1,s||qa(i)}function QT(i){for(Pn=i.return;Pn;)switch(Pn.tag){case 3:case 27:$r=!0;return;case 5:case 13:$r=!1;return;default:Pn=Pn.return}}function dc(i){if(i!==Pn)return!1;if(!We)return QT(i),We=!0,!1;var s=!1,l;if((l=i.tag!==3&&i.tag!==27)&&((l=i.tag===5)&&(l=i.type,l=!(l!=="form"&&l!=="button")||F_(i.type,i.memoizedProps)),l=!l),l&&(s=!0),s&&fn&&qa(i),QT(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(r(317));e:{for(i=i.nextSibling,s=0;i;){if(i.nodeType===8)if(l=i.data,l==="/$"){if(s===0){fn=Dr(i.nextSibling);break e}s--}else l!=="$"&&l!=="$!"&&l!=="$?"||s++;i=i.nextSibling}fn=null}}else fn=Pn?Dr(i.stateNode.nextSibling):null;return!0}function fc(){fn=Pn=null,We=!1}function pc(i){Rr===null?Rr=[i]:Rr.push(i)}var mc=Error(r(460)),WT=Error(r(474)),wg={then:function(){}};function YT(i){return i=i.status,i==="fulfilled"||i==="rejected"}function rf(){}function XT(i,s,l){switch(l=i[l],l===void 0?i.push(s):l!==s&&(s.then(rf,rf),s=l),s.status){case"fulfilled":return s.value;case"rejected":throw i=s.reason,i===mc?Error(r(483)):i;default:if(typeof s.status=="string")s.then(rf,rf);else{if(i=at,i!==null&&100<i.shellSuspendCounter)throw Error(r(482));i=s,i.status="pending",i.then(function(c){if(s.status==="pending"){var f=s;f.status="fulfilled",f.value=c}},function(c){if(s.status==="pending"){var f=s;f.status="rejected",f.reason=c}})}switch(s.status){case"fulfilled":return s.value;case"rejected":throw i=s.reason,i===mc?Error(r(483)):i}throw gc=s,mc}}var gc=null;function ZT(){if(gc===null)throw Error(r(459));var i=gc;return gc=null,i}var dl=null,_c=0;function sf(i){var s=_c;return _c+=1,dl===null&&(dl=[]),XT(dl,i,s)}function yc(i,s){s=s.props.ref,i.ref=s!==void 0?s:null}function af(i,s){throw s.$$typeof===o?Error(r(525)):(i=Object.prototype.toString.call(s),Error(r(31,i==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":i)))}function JT(i){var s=i._init;return s(i._payload)}function ew(i){function s(B,k){if(i){var H=B.deletions;H===null?(B.deletions=[k],B.flags|=16):H.push(k)}}function l(B,k){if(!i)return null;for(;k!==null;)s(B,k),k=k.sibling;return null}function c(B){for(var k=new Map;B!==null;)B.key!==null?k.set(B.key,B):k.set(B.index,B),B=B.sibling;return k}function f(B,k){return B=Vs(B,k),B.index=0,B.sibling=null,B}function g(B,k,H){return B.index=H,i?(H=B.alternate,H!==null?(H=H.index,H<k?(B.flags|=33554434,k):H):(B.flags|=33554434,k)):(B.flags|=1048576,k)}function T(B){return i&&B.alternate===null&&(B.flags|=33554434),B}function b(B,k,H,J){return k===null||k.tag!==6?(k=g_(H,B.mode,J),k.return=B,k):(k=f(k,H),k.return=B,k)}function C(B,k,H,J){var _e=H.type;return _e===p?Z(B,k,H.props.children,J,H.key):k!==null&&(k.elementType===_e||typeof _e=="object"&&_e!==null&&_e.$$typeof===W&&JT(_e)===k.type)?(k=f(k,H.props),yc(k,H),k.return=B,k):(k=If(H.type,H.key,H.props,null,B.mode,J),yc(k,H),k.return=B,k)}function M(B,k,H,J){return k===null||k.tag!==4||k.stateNode.containerInfo!==H.containerInfo||k.stateNode.implementation!==H.implementation?(k=__(H,B.mode,J),k.return=B,k):(k=f(k,H.children||[]),k.return=B,k)}function Z(B,k,H,J,_e){return k===null||k.tag!==7?(k=Za(H,B.mode,J,_e),k.return=B,k):(k=f(k,H),k.return=B,k)}function te(B,k,H){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=g_(""+k,B.mode,H),k.return=B,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case u:return H=If(k.type,k.key,k.props,null,B.mode,H),yc(H,k),H.return=B,H;case d:return k=__(k,B.mode,H),k.return=B,k;case W:var J=k._init;return k=J(k._payload),te(B,k,H)}if(pe(k)||le(k))return k=Za(k,B.mode,H,null),k.return=B,k;if(typeof k.then=="function")return te(B,sf(k),H);if(k.$$typeof===S)return te(B,Tf(B,k),H);af(B,k)}return null}function $(B,k,H,J){var _e=k!==null?k.key:null;if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return _e!==null?null:b(B,k,""+H,J);if(typeof H=="object"&&H!==null){switch(H.$$typeof){case u:return H.key===_e?C(B,k,H,J):null;case d:return H.key===_e?M(B,k,H,J):null;case W:return _e=H._init,H=_e(H._payload),$(B,k,H,J)}if(pe(H)||le(H))return _e!==null?null:Z(B,k,H,J,null);if(typeof H.then=="function")return $(B,k,sf(H),J);if(H.$$typeof===S)return $(B,k,Tf(B,H),J);af(B,H)}return null}function X(B,k,H,J,_e){if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return B=B.get(H)||null,b(k,B,""+J,_e);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case u:return B=B.get(J.key===null?H:J.key)||null,C(k,B,J,_e);case d:return B=B.get(J.key===null?H:J.key)||null,M(k,B,J,_e);case W:var Le=J._init;return J=Le(J._payload),X(B,k,H,J,_e)}if(pe(J)||le(J))return B=B.get(H)||null,Z(k,B,J,_e,null);if(typeof J.then=="function")return X(B,k,H,sf(J),_e);if(J.$$typeof===S)return X(B,k,H,Tf(k,J),_e);af(k,J)}return null}function ve(B,k,H,J){for(var _e=null,Le=null,we=k,Ae=k=0,on=null;we!==null&&Ae<H.length;Ae++){we.index>Ae?(on=we,we=null):on=we.sibling;var Ye=$(B,we,H[Ae],J);if(Ye===null){we===null&&(we=on);break}i&&we&&Ye.alternate===null&&s(B,we),k=g(Ye,k,Ae),Le===null?_e=Ye:Le.sibling=Ye,Le=Ye,we=on}if(Ae===H.length)return l(B,we),We&&Fa(B,Ae),_e;if(we===null){for(;Ae<H.length;Ae++)we=te(B,H[Ae],J),we!==null&&(k=g(we,k,Ae),Le===null?_e=we:Le.sibling=we,Le=we);return We&&Fa(B,Ae),_e}for(we=c(we);Ae<H.length;Ae++)on=X(we,B,Ae,H[Ae],J),on!==null&&(i&&on.alternate!==null&&we.delete(on.key===null?Ae:on.key),k=g(on,k,Ae),Le===null?_e=on:Le.sibling=on,Le=on);return i&&we.forEach(function(qs){return s(B,qs)}),We&&Fa(B,Ae),_e}function De(B,k,H,J){if(H==null)throw Error(r(151));for(var _e=null,Le=null,we=k,Ae=k=0,on=null,Ye=H.next();we!==null&&!Ye.done;Ae++,Ye=H.next()){we.index>Ae?(on=we,we=null):on=we.sibling;var qs=$(B,we,Ye.value,J);if(qs===null){we===null&&(we=on);break}i&&we&&qs.alternate===null&&s(B,we),k=g(qs,k,Ae),Le===null?_e=qs:Le.sibling=qs,Le=qs,we=on}if(Ye.done)return l(B,we),We&&Fa(B,Ae),_e;if(we===null){for(;!Ye.done;Ae++,Ye=H.next())Ye=te(B,Ye.value,J),Ye!==null&&(k=g(Ye,k,Ae),Le===null?_e=Ye:Le.sibling=Ye,Le=Ye);return We&&Fa(B,Ae),_e}for(we=c(we);!Ye.done;Ae++,Ye=H.next())Ye=X(we,B,Ae,Ye.value,J),Ye!==null&&(i&&Ye.alternate!==null&&we.delete(Ye.key===null?Ae:Ye.key),k=g(Ye,k,Ae),Le===null?_e=Ye:Le.sibling=Ye,Le=Ye);return i&&we.forEach(function(Px){return s(B,Px)}),We&&Fa(B,Ae),_e}function Ct(B,k,H,J){if(typeof H=="object"&&H!==null&&H.type===p&&H.key===null&&(H=H.props.children),typeof H=="object"&&H!==null){switch(H.$$typeof){case u:e:{for(var _e=H.key;k!==null;){if(k.key===_e){if(_e=H.type,_e===p){if(k.tag===7){l(B,k.sibling),J=f(k,H.props.children),J.return=B,B=J;break e}}else if(k.elementType===_e||typeof _e=="object"&&_e!==null&&_e.$$typeof===W&&JT(_e)===k.type){l(B,k.sibling),J=f(k,H.props),yc(J,H),J.return=B,B=J;break e}l(B,k);break}else s(B,k);k=k.sibling}H.type===p?(J=Za(H.props.children,B.mode,J,H.key),J.return=B,B=J):(J=If(H.type,H.key,H.props,null,B.mode,J),yc(J,H),J.return=B,B=J)}return T(B);case d:e:{for(_e=H.key;k!==null;){if(k.key===_e)if(k.tag===4&&k.stateNode.containerInfo===H.containerInfo&&k.stateNode.implementation===H.implementation){l(B,k.sibling),J=f(k,H.children||[]),J.return=B,B=J;break e}else{l(B,k);break}else s(B,k);k=k.sibling}J=__(H,B.mode,J),J.return=B,B=J}return T(B);case W:return _e=H._init,H=_e(H._payload),Ct(B,k,H,J)}if(pe(H))return ve(B,k,H,J);if(le(H)){if(_e=le(H),typeof _e!="function")throw Error(r(150));return H=_e.call(H),De(B,k,H,J)}if(typeof H.then=="function")return Ct(B,k,sf(H),J);if(H.$$typeof===S)return Ct(B,k,Tf(B,H),J);af(B,H)}return typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint"?(H=""+H,k!==null&&k.tag===6?(l(B,k.sibling),J=f(k,H),J.return=B,B=J):(l(B,k),J=g_(H,B.mode,J),J.return=B,B=J),T(B)):l(B,k)}return function(B,k,H,J){try{_c=0;var _e=Ct(B,k,H,J);return dl=null,_e}catch(we){if(we===mc)throw we;var Le=_r(29,we,null,B.mode);return Le.lanes=J,Le.return=B,Le}finally{}}}var ja=ew(!0),tw=ew(!1),fl=Me(null),of=Me(0);function nw(i,s){i=zi,Ke(of,i),Ke(fl,s),zi=i|s.baseLanes}function bg(){Ke(of,zi),Ke(fl,fl.current)}function Ig(){zi=of.current,Ze(fl),Ze(of)}var pr=Me(null),Kr=null;function Is(i){var s=i.alternate;Ke(Wt,Wt.current&1),Ke(pr,i),Kr===null&&(s===null||fl.current!==null||s.memoizedState!==null)&&(Kr=i)}function rw(i){if(i.tag===22){if(Ke(Wt,Wt.current),Ke(pr,i),Kr===null){var s=i.alternate;s!==null&&s.memoizedState!==null&&(Kr=i)}}else As()}function As(){Ke(Wt,Wt.current),Ke(pr,pr.current)}function Pi(i){Ze(pr),Kr===i&&(Kr=null),Ze(Wt)}var Wt=Me(0);function lf(i){for(var s=i;s!==null;){if(s.tag===13){var l=s.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var _P=typeof AbortController<"u"?AbortController:function(){var i=[],s=this.signal={aborted:!1,addEventListener:function(l,c){i.push(c)}};this.abort=function(){s.aborted=!0,i.forEach(function(l){return l()})}},yP=n.unstable_scheduleCallback,vP=n.unstable_NormalPriority,Yt={$$typeof:S,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ag(){return{controller:new _P,data:new Map,refCount:0}}function vc(i){i.refCount--,i.refCount===0&&yP(vP,function(){i.controller.abort()})}var Ec=null,Sg=0,pl=0,ml=null;function EP(i,s){if(Ec===null){var l=Ec=[];Sg=0,pl=N_(),ml={status:"pending",value:void 0,then:function(c){l.push(c)}}}return Sg++,s.then(iw,iw),s}function iw(){if(--Sg===0&&Ec!==null){ml!==null&&(ml.status="fulfilled");var i=Ec;Ec=null,pl=0,ml=null;for(var s=0;s<i.length;s++)(0,i[s])()}}function TP(i,s){var l=[],c={status:"pending",value:null,reason:null,then:function(f){l.push(f)}};return i.then(function(){c.status="fulfilled",c.value=s;for(var f=0;f<l.length;f++)(0,l[f])(s)},function(f){for(c.status="rejected",c.reason=f,f=0;f<l.length;f++)(0,l[f])(void 0)}),c}var sw=A.S;A.S=function(i,s){typeof s=="object"&&s!==null&&typeof s.then=="function"&&EP(i,s),sw!==null&&sw(i,s)};var Ha=Me(null);function Rg(){var i=Ha.current;return i!==null?i:at.pooledCache}function uf(i,s){s===null?Ke(Ha,Ha.current):Ke(Ha,s.pool)}function aw(){var i=Rg();return i===null?null:{parent:Yt._currentValue,pool:i}}var Ss=0,Ve=null,rt=null,Bt=null,cf=!1,gl=!1,Ga=!1,hf=0,Tc=0,_l=null,wP=0;function kt(){throw Error(r(321))}function Cg(i,s){if(s===null)return!1;for(var l=0;l<s.length&&l<i.length;l++)if(!Kn(i[l],s[l]))return!1;return!0}function Dg(i,s,l,c,f,g){return Ss=g,Ve=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,A.H=i===null||i.memoizedState===null?$a:Rs,Ga=!1,g=l(c,f),Ga=!1,gl&&(g=lw(s,l,c,f)),ow(i),g}function ow(i){A.H=Qr;var s=rt!==null&&rt.next!==null;if(Ss=0,Bt=rt=Ve=null,cf=!1,Tc=0,_l=null,s)throw Error(r(300));i===null||sn||(i=i.dependencies,i!==null&&Ef(i)&&(sn=!0))}function lw(i,s,l,c){Ve=i;var f=0;do{if(gl&&(_l=null),Tc=0,gl=!1,25<=f)throw Error(r(301));if(f+=1,Bt=rt=null,i.updateQueue!=null){var g=i.updateQueue;g.lastEffect=null,g.events=null,g.stores=null,g.memoCache!=null&&(g.memoCache.index=0)}A.H=Ka,g=s(l,c)}while(gl);return g}function bP(){var i=A.H,s=i.useState()[0];return s=typeof s.then=="function"?wc(s):s,i=i.useState()[0],(rt!==null?rt.memoizedState:null)!==i&&(Ve.flags|=1024),s}function Pg(){var i=hf!==0;return hf=0,i}function xg(i,s,l){s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~l}function Ng(i){if(cf){for(i=i.memoizedState;i!==null;){var s=i.queue;s!==null&&(s.pending=null),i=i.next}cf=!1}Ss=0,Bt=rt=Ve=null,gl=!1,Tc=hf=0,_l=null}function Bn(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Bt===null?Ve.memoizedState=Bt=i:Bt=Bt.next=i,Bt}function zt(){if(rt===null){var i=Ve.alternate;i=i!==null?i.memoizedState:null}else i=rt.next;var s=Bt===null?Ve.memoizedState:Bt.next;if(s!==null)Bt=s,rt=i;else{if(i===null)throw Ve.alternate===null?Error(r(467)):Error(r(310));rt=i,i={memoizedState:rt.memoizedState,baseState:rt.baseState,baseQueue:rt.baseQueue,queue:rt.queue,next:null},Bt===null?Ve.memoizedState=Bt=i:Bt=Bt.next=i}return Bt}var df;df=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function wc(i){var s=Tc;return Tc+=1,_l===null&&(_l=[]),i=XT(_l,i,s),s=Ve,(Bt===null?s.memoizedState:Bt.next)===null&&(s=s.alternate,A.H=s===null||s.memoizedState===null?$a:Rs),i}function ff(i){if(i!==null&&typeof i=="object"){if(typeof i.then=="function")return wc(i);if(i.$$typeof===S)return Tn(i)}throw Error(r(438,String(i)))}function Og(i){var s=null,l=Ve.updateQueue;if(l!==null&&(s=l.memoCache),s==null){var c=Ve.alternate;c!==null&&(c=c.updateQueue,c!==null&&(c=c.memoCache,c!=null&&(s={data:c.data.map(function(f){return f.slice()}),index:0})))}if(s==null&&(s={data:[],index:0}),l===null&&(l=df(),Ve.updateQueue=l),l.memoCache=s,l=s.data[s.index],l===void 0)for(l=s.data[s.index]=Array(i),c=0;c<i;c++)l[c]=oe;return s.index++,l}function xi(i,s){return typeof s=="function"?s(i):s}function pf(i){var s=zt();return kg(s,rt,i)}function kg(i,s,l){var c=i.queue;if(c===null)throw Error(r(311));c.lastRenderedReducer=l;var f=i.baseQueue,g=c.pending;if(g!==null){if(f!==null){var T=f.next;f.next=g.next,g.next=T}s.baseQueue=f=g,c.pending=null}if(g=i.baseState,f===null)i.memoizedState=g;else{s=f.next;var b=T=null,C=null,M=s,Z=!1;do{var te=M.lane&-536870913;if(te!==M.lane?(Ge&te)===te:(Ss&te)===te){var $=M.revertLane;if($===0)C!==null&&(C=C.next={lane:0,revertLane:0,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null}),te===pl&&(Z=!0);else if((Ss&$)===$){M=M.next,$===pl&&(Z=!0);continue}else te={lane:0,revertLane:M.revertLane,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null},C===null?(b=C=te,T=g):C=C.next=te,Ve.lanes|=$,Ms|=$;te=M.action,Ga&&l(g,te),g=M.hasEagerState?M.eagerState:l(g,te)}else $={lane:te,revertLane:M.revertLane,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null},C===null?(b=C=$,T=g):C=C.next=$,Ve.lanes|=te,Ms|=te;M=M.next}while(M!==null&&M!==s);if(C===null?T=g:C.next=b,!Kn(g,i.memoizedState)&&(sn=!0,Z&&(l=ml,l!==null)))throw l;i.memoizedState=g,i.baseState=T,i.baseQueue=C,c.lastRenderedState=g}return f===null&&(c.lanes=0),[i.memoizedState,c.dispatch]}function Vg(i){var s=zt(),l=s.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=i;var c=l.dispatch,f=l.pending,g=s.memoizedState;if(f!==null){l.pending=null;var T=f=f.next;do g=i(g,T.action),T=T.next;while(T!==f);Kn(g,s.memoizedState)||(sn=!0),s.memoizedState=g,s.baseQueue===null&&(s.baseState=g),l.lastRenderedState=g}return[g,c]}function uw(i,s,l){var c=Ve,f=zt(),g=We;if(g){if(l===void 0)throw Error(r(407));l=l()}else l=s();var T=!Kn((rt||f).memoizedState,l);if(T&&(f.memoizedState=l,sn=!0),f=f.queue,Ug(dw.bind(null,c,f,i),[i]),f.getSnapshot!==s||T||Bt!==null&&Bt.memoizedState.tag&1){if(c.flags|=2048,yl(9,hw.bind(null,c,f,l,s),{destroy:void 0},null),at===null)throw Error(r(349));g||(Ss&60)!==0||cw(c,s,l)}return l}function cw(i,s,l){i.flags|=16384,i={getSnapshot:s,value:l},s=Ve.updateQueue,s===null?(s=df(),Ve.updateQueue=s,s.stores=[i]):(l=s.stores,l===null?s.stores=[i]:l.push(i))}function hw(i,s,l,c){s.value=l,s.getSnapshot=c,fw(s)&&pw(i)}function dw(i,s,l){return l(function(){fw(s)&&pw(i)})}function fw(i){var s=i.getSnapshot;i=i.value;try{var l=s();return!Kn(i,l)}catch{return!0}}function pw(i){var s=bs(i,2);s!==null&&xn(s,i,2)}function Mg(i){var s=Bn();if(typeof i=="function"){var l=i;if(i=l(),Ga){Vr(!0);try{l()}finally{Vr(!1)}}}return s.memoizedState=s.baseState=i,s.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:xi,lastRenderedState:i},s}function mw(i,s,l,c){return i.baseState=l,kg(i,rt,typeof c=="function"?c:xi)}function IP(i,s,l,c,f){if(_f(i))throw Error(r(485));if(i=s.action,i!==null){var g={payload:f,action:i,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(T){g.listeners.push(T)}};A.T!==null?l(!0):g.isTransition=!1,c(g),l=s.pending,l===null?(g.next=s.pending=g,gw(s,g)):(g.next=l.next,s.pending=l.next=g)}}function gw(i,s){var l=s.action,c=s.payload,f=i.state;if(s.isTransition){var g=A.T,T={};A.T=T;try{var b=l(f,c),C=A.S;C!==null&&C(T,b),_w(i,s,b)}catch(M){Lg(i,s,M)}finally{A.T=g}}else try{g=l(f,c),_w(i,s,g)}catch(M){Lg(i,s,M)}}function _w(i,s,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(c){yw(i,s,c)},function(c){return Lg(i,s,c)}):yw(i,s,l)}function yw(i,s,l){s.status="fulfilled",s.value=l,vw(s),i.state=l,s=i.pending,s!==null&&(l=s.next,l===s?i.pending=null:(l=l.next,s.next=l,gw(i,l)))}function Lg(i,s,l){var c=i.pending;if(i.pending=null,c!==null){c=c.next;do s.status="rejected",s.reason=l,vw(s),s=s.next;while(s!==c)}i.action=null}function vw(i){i=i.listeners;for(var s=0;s<i.length;s++)(0,i[s])()}function Ew(i,s){return s}function Tw(i,s){if(We){var l=at.formState;if(l!==null){e:{var c=Ve;if(We){if(fn){t:{for(var f=fn,g=$r;f.nodeType!==8;){if(!g){f=null;break t}if(f=Dr(f.nextSibling),f===null){f=null;break t}}g=f.data,f=g==="F!"||g==="F"?f:null}if(f){fn=Dr(f.nextSibling),c=f.data==="F!";break e}}qa(c)}c=!1}c&&(s=l[0])}}return l=Bn(),l.memoizedState=l.baseState=s,c={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ew,lastRenderedState:s},l.queue=c,l=Bw.bind(null,Ve,c),c.dispatch=l,c=Mg(!1),g=jg.bind(null,Ve,!1,c.queue),c=Bn(),f={state:s,dispatch:null,action:i,pending:null},c.queue=f,l=IP.bind(null,Ve,f,g,l),f.dispatch=l,c.memoizedState=i,[s,l,!1]}function ww(i){var s=zt();return bw(s,rt,i)}function bw(i,s,l){s=kg(i,s,Ew)[0],i=pf(xi)[0],s=typeof s=="object"&&s!==null&&typeof s.then=="function"?wc(s):s;var c=zt(),f=c.queue,g=f.dispatch;return l!==c.memoizedState&&(Ve.flags|=2048,yl(9,AP.bind(null,f,l),{destroy:void 0},null)),[s,g,i]}function AP(i,s){i.action=s}function Iw(i){var s=zt(),l=rt;if(l!==null)return bw(s,l,i);zt(),s=s.memoizedState,l=zt();var c=l.queue.dispatch;return l.memoizedState=i,[s,c,!1]}function yl(i,s,l,c){return i={tag:i,create:s,inst:l,deps:c,next:null},s=Ve.updateQueue,s===null&&(s=df(),Ve.updateQueue=s),l=s.lastEffect,l===null?s.lastEffect=i.next=i:(c=l.next,l.next=i,i.next=c,s.lastEffect=i),i}function Aw(){return zt().memoizedState}function mf(i,s,l,c){var f=Bn();Ve.flags|=i,f.memoizedState=yl(1|s,l,{destroy:void 0},c===void 0?null:c)}function gf(i,s,l,c){var f=zt();c=c===void 0?null:c;var g=f.memoizedState.inst;rt!==null&&c!==null&&Cg(c,rt.memoizedState.deps)?f.memoizedState=yl(s,l,g,c):(Ve.flags|=i,f.memoizedState=yl(1|s,l,g,c))}function Sw(i,s){mf(8390656,8,i,s)}function Ug(i,s){gf(2048,8,i,s)}function Rw(i,s){return gf(4,2,i,s)}function Cw(i,s){return gf(4,4,i,s)}function Dw(i,s){if(typeof s=="function"){i=i();var l=s(i);return function(){typeof l=="function"?l():s(null)}}if(s!=null)return i=i(),s.current=i,function(){s.current=null}}function Pw(i,s,l){l=l!=null?l.concat([i]):null,gf(4,4,Dw.bind(null,s,i),l)}function Bg(){}function xw(i,s){var l=zt();s=s===void 0?null:s;var c=l.memoizedState;return s!==null&&Cg(s,c[1])?c[0]:(l.memoizedState=[i,s],i)}function Nw(i,s){var l=zt();s=s===void 0?null:s;var c=l.memoizedState;if(s!==null&&Cg(s,c[1]))return c[0];if(c=i(),Ga){Vr(!0);try{i()}finally{Vr(!1)}}return l.memoizedState=[c,s],c}function zg(i,s,l){return l===void 0||(Ss&1073741824)!==0?i.memoizedState=s:(i.memoizedState=l,i=k0(),Ve.lanes|=i,Ms|=i,l)}function Ow(i,s,l,c){return Kn(l,s)?l:fl.current!==null?(i=zg(i,l,c),Kn(i,s)||(sn=!0),i):(Ss&42)===0?(sn=!0,i.memoizedState=l):(i=k0(),Ve.lanes|=i,Ms|=i,s)}function kw(i,s,l,c,f){var g=fe.p;fe.p=g!==0&&8>g?g:8;var T=A.T,b={};A.T=b,jg(i,!1,s,l);try{var C=f(),M=A.S;if(M!==null&&M(b,C),C!==null&&typeof C=="object"&&typeof C.then=="function"){var Z=TP(C,c);bc(i,s,Z,Xn(i))}else bc(i,s,c,Xn(i))}catch(te){bc(i,s,{then:function(){},status:"rejected",reason:te},Xn())}finally{fe.p=g,A.T=T}}function SP(){}function Fg(i,s,l,c){if(i.tag!==5)throw Error(r(476));var f=Vw(i).queue;kw(i,f,s,Ce,l===null?SP:function(){return Mw(i),l(c)})}function Vw(i){var s=i.memoizedState;if(s!==null)return s;s={memoizedState:Ce,baseState:Ce,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:xi,lastRenderedState:Ce},next:null};var l={};return s.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:xi,lastRenderedState:l},next:null},i.memoizedState=s,i=i.alternate,i!==null&&(i.memoizedState=s),s}function Mw(i){var s=Vw(i).next.queue;bc(i,s,{},Xn())}function qg(){return Tn(jc)}function Lw(){return zt().memoizedState}function Uw(){return zt().memoizedState}function RP(i){for(var s=i.return;s!==null;){switch(s.tag){case 24:case 3:var l=Xn();i=Ps(l);var c=xs(s,i,l);c!==null&&(xn(c,s,l),Sc(c,s,l)),s={cache:Ag()},i.payload=s;return}s=s.return}}function CP(i,s,l){var c=Xn();l={lane:c,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null},_f(i)?zw(s,l):(l=yg(i,s,l,c),l!==null&&(xn(l,i,c),Fw(l,s,c)))}function Bw(i,s,l){var c=Xn();bc(i,s,l,c)}function bc(i,s,l,c){var f={lane:c,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null};if(_f(i))zw(s,f);else{var g=i.alternate;if(i.lanes===0&&(g===null||g.lanes===0)&&(g=s.lastRenderedReducer,g!==null))try{var T=s.lastRenderedState,b=g(T,l);if(f.hasEagerState=!0,f.eagerState=b,Kn(b,T))return Jd(i,s,f,0),at===null&&Zd(),!1}catch{}finally{}if(l=yg(i,s,f,c),l!==null)return xn(l,i,c),Fw(l,s,c),!0}return!1}function jg(i,s,l,c){if(c={lane:2,revertLane:N_(),action:c,hasEagerState:!1,eagerState:null,next:null},_f(i)){if(s)throw Error(r(479))}else s=yg(i,l,c,2),s!==null&&xn(s,i,2)}function _f(i){var s=i.alternate;return i===Ve||s!==null&&s===Ve}function zw(i,s){gl=cf=!0;var l=i.pending;l===null?s.next=s:(s.next=l.next,l.next=s),i.pending=s}function Fw(i,s,l){if((l&4194176)!==0){var c=s.lanes;c&=i.pendingLanes,l|=c,s.lanes=l,fs(i,l)}}var Qr={readContext:Tn,use:ff,useCallback:kt,useContext:kt,useEffect:kt,useImperativeHandle:kt,useLayoutEffect:kt,useInsertionEffect:kt,useMemo:kt,useReducer:kt,useRef:kt,useState:kt,useDebugValue:kt,useDeferredValue:kt,useTransition:kt,useSyncExternalStore:kt,useId:kt};Qr.useCacheRefresh=kt,Qr.useMemoCache=kt,Qr.useHostTransitionStatus=kt,Qr.useFormState=kt,Qr.useActionState=kt,Qr.useOptimistic=kt;var $a={readContext:Tn,use:ff,useCallback:function(i,s){return Bn().memoizedState=[i,s===void 0?null:s],i},useContext:Tn,useEffect:Sw,useImperativeHandle:function(i,s,l){l=l!=null?l.concat([i]):null,mf(4194308,4,Dw.bind(null,s,i),l)},useLayoutEffect:function(i,s){return mf(4194308,4,i,s)},useInsertionEffect:function(i,s){mf(4,2,i,s)},useMemo:function(i,s){var l=Bn();s=s===void 0?null:s;var c=i();if(Ga){Vr(!0);try{i()}finally{Vr(!1)}}return l.memoizedState=[c,s],c},useReducer:function(i,s,l){var c=Bn();if(l!==void 0){var f=l(s);if(Ga){Vr(!0);try{l(s)}finally{Vr(!1)}}}else f=s;return c.memoizedState=c.baseState=f,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:f},c.queue=i,i=i.dispatch=CP.bind(null,Ve,i),[c.memoizedState,i]},useRef:function(i){var s=Bn();return i={current:i},s.memoizedState=i},useState:function(i){i=Mg(i);var s=i.queue,l=Bw.bind(null,Ve,s);return s.dispatch=l,[i.memoizedState,l]},useDebugValue:Bg,useDeferredValue:function(i,s){var l=Bn();return zg(l,i,s)},useTransition:function(){var i=Mg(!1);return i=kw.bind(null,Ve,i.queue,!0,!1),Bn().memoizedState=i,[!1,i]},useSyncExternalStore:function(i,s,l){var c=Ve,f=Bn();if(We){if(l===void 0)throw Error(r(407));l=l()}else{if(l=s(),at===null)throw Error(r(349));(Ge&60)!==0||cw(c,s,l)}f.memoizedState=l;var g={value:l,getSnapshot:s};return f.queue=g,Sw(dw.bind(null,c,g,i),[i]),c.flags|=2048,yl(9,hw.bind(null,c,g,l,s),{destroy:void 0},null),l},useId:function(){var i=Bn(),s=at.identifierPrefix;if(We){var l=Di,c=Ci;l=(c&~(1<<32-Rn(c)-1)).toString(32)+l,s=":"+s+"R"+l,l=hf++,0<l&&(s+="H"+l.toString(32)),s+=":"}else l=wP++,s=":"+s+"r"+l.toString(32)+":";return i.memoizedState=s},useCacheRefresh:function(){return Bn().memoizedState=RP.bind(null,Ve)}};$a.useMemoCache=Og,$a.useHostTransitionStatus=qg,$a.useFormState=Tw,$a.useActionState=Tw,$a.useOptimistic=function(i){var s=Bn();s.memoizedState=s.baseState=i;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return s.queue=l,s=jg.bind(null,Ve,!0,l),l.dispatch=s,[i,s]};var Rs={readContext:Tn,use:ff,useCallback:xw,useContext:Tn,useEffect:Ug,useImperativeHandle:Pw,useInsertionEffect:Rw,useLayoutEffect:Cw,useMemo:Nw,useReducer:pf,useRef:Aw,useState:function(){return pf(xi)},useDebugValue:Bg,useDeferredValue:function(i,s){var l=zt();return Ow(l,rt.memoizedState,i,s)},useTransition:function(){var i=pf(xi)[0],s=zt().memoizedState;return[typeof i=="boolean"?i:wc(i),s]},useSyncExternalStore:uw,useId:Lw};Rs.useCacheRefresh=Uw,Rs.useMemoCache=Og,Rs.useHostTransitionStatus=qg,Rs.useFormState=ww,Rs.useActionState=ww,Rs.useOptimistic=function(i,s){var l=zt();return mw(l,rt,i,s)};var Ka={readContext:Tn,use:ff,useCallback:xw,useContext:Tn,useEffect:Ug,useImperativeHandle:Pw,useInsertionEffect:Rw,useLayoutEffect:Cw,useMemo:Nw,useReducer:Vg,useRef:Aw,useState:function(){return Vg(xi)},useDebugValue:Bg,useDeferredValue:function(i,s){var l=zt();return rt===null?zg(l,i,s):Ow(l,rt.memoizedState,i,s)},useTransition:function(){var i=Vg(xi)[0],s=zt().memoizedState;return[typeof i=="boolean"?i:wc(i),s]},useSyncExternalStore:uw,useId:Lw};Ka.useCacheRefresh=Uw,Ka.useMemoCache=Og,Ka.useHostTransitionStatus=qg,Ka.useFormState=Iw,Ka.useActionState=Iw,Ka.useOptimistic=function(i,s){var l=zt();return rt!==null?mw(l,rt,i,s):(l.baseState=i,[i,l.queue.dispatch])};function Hg(i,s,l,c){s=i.memoizedState,l=l(c,s),l=l==null?s:x({},s,l),i.memoizedState=l,i.lanes===0&&(i.updateQueue.baseState=l)}var Gg={isMounted:function(i){return(i=i._reactInternals)?Te(i)===i:!1},enqueueSetState:function(i,s,l){i=i._reactInternals;var c=Xn(),f=Ps(c);f.payload=s,l!=null&&(f.callback=l),s=xs(i,f,c),s!==null&&(xn(s,i,c),Sc(s,i,c))},enqueueReplaceState:function(i,s,l){i=i._reactInternals;var c=Xn(),f=Ps(c);f.tag=1,f.payload=s,l!=null&&(f.callback=l),s=xs(i,f,c),s!==null&&(xn(s,i,c),Sc(s,i,c))},enqueueForceUpdate:function(i,s){i=i._reactInternals;var l=Xn(),c=Ps(l);c.tag=2,s!=null&&(c.callback=s),s=xs(i,c,l),s!==null&&(xn(s,i,l),Sc(s,i,l))}};function qw(i,s,l,c,f,g,T){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(c,g,T):s.prototype&&s.prototype.isPureReactComponent?!cc(l,c)||!cc(f,g):!0}function jw(i,s,l,c){i=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(l,c),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(l,c),s.state!==i&&Gg.enqueueReplaceState(s,s.state,null)}function Qa(i,s){var l=s;if("ref"in s){l={};for(var c in s)c!=="ref"&&(l[c]=s[c])}if(i=i.defaultProps){l===s&&(l=x({},l));for(var f in i)l[f]===void 0&&(l[f]=i[f])}return l}var yf=typeof reportError=="function"?reportError:function(i){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var s=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof i=="object"&&i!==null&&typeof i.message=="string"?String(i.message):String(i),error:i});if(!window.dispatchEvent(s))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",i);return}console.error(i)};function Hw(i){yf(i)}function Gw(i){console.error(i)}function $w(i){yf(i)}function vf(i,s){try{var l=i.onUncaughtError;l(s.value,{componentStack:s.stack})}catch(c){setTimeout(function(){throw c})}}function Kw(i,s,l){try{var c=i.onCaughtError;c(l.value,{componentStack:l.stack,errorBoundary:s.tag===1?s.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function $g(i,s,l){return l=Ps(l),l.tag=3,l.payload={element:null},l.callback=function(){vf(i,s)},l}function Qw(i){return i=Ps(i),i.tag=3,i}function Ww(i,s,l,c){var f=l.type.getDerivedStateFromError;if(typeof f=="function"){var g=c.value;i.payload=function(){return f(g)},i.callback=function(){Kw(s,l,c)}}var T=l.stateNode;T!==null&&typeof T.componentDidCatch=="function"&&(i.callback=function(){Kw(s,l,c),typeof f!="function"&&(Ls===null?Ls=new Set([this]):Ls.add(this));var b=c.stack;this.componentDidCatch(c.value,{componentStack:b!==null?b:""})})}function DP(i,s,l,c,f){if(l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){if(s=l.alternate,s!==null&&Ac(s,l,f,!0),l=pr.current,l!==null){switch(l.tag){case 13:return Kr===null?R_():l.alternate===null&&Rt===0&&(Rt=3),l.flags&=-257,l.flags|=65536,l.lanes=f,c===wg?l.flags|=16384:(s=l.updateQueue,s===null?l.updateQueue=new Set([c]):s.add(c),D_(i,c,f)),!1;case 22:return l.flags|=65536,c===wg?l.flags|=16384:(s=l.updateQueue,s===null?(s={transitions:null,markerInstances:null,retryQueue:new Set([c])},l.updateQueue=s):(l=s.retryQueue,l===null?s.retryQueue=new Set([c]):l.add(c)),D_(i,c,f)),!1}throw Error(r(435,l.tag))}return D_(i,c,f),R_(),!1}if(We)return s=pr.current,s!==null?((s.flags&65536)===0&&(s.flags|=256),s.flags|=65536,s.lanes=f,c!==Tg&&(i=Error(r(422),{cause:c}),pc(hr(i,l)))):(c!==Tg&&(s=Error(r(423),{cause:c}),pc(hr(s,l))),i=i.current.alternate,i.flags|=65536,f&=-f,i.lanes|=f,c=hr(c,l),f=$g(i.stateNode,c,f),o_(i,f),Rt!==4&&(Rt=2)),!1;var g=Error(r(520),{cause:c});if(g=hr(g,l),kc===null?kc=[g]:kc.push(g),Rt!==4&&(Rt=2),s===null)return!0;c=hr(c,l),l=s;do{switch(l.tag){case 3:return l.flags|=65536,i=f&-f,l.lanes|=i,i=$g(l.stateNode,c,i),o_(l,i),!1;case 1:if(s=l.type,g=l.stateNode,(l.flags&128)===0&&(typeof s.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Ls===null||!Ls.has(g))))return l.flags|=65536,f&=-f,l.lanes|=f,f=Qw(f),Ww(f,i,l,c),o_(l,f),!1}l=l.return}while(l!==null);return!1}var Yw=Error(r(461)),sn=!1;function pn(i,s,l,c){s.child=i===null?tw(s,null,l,c):ja(s,i.child,l,c)}function Xw(i,s,l,c,f){l=l.render;var g=s.ref;if("ref"in c){var T={};for(var b in c)b!=="ref"&&(T[b]=c[b])}else T=c;return Ya(s),c=Dg(i,s,l,T,g,f),b=Pg(),i!==null&&!sn?(xg(i,s,f),Ni(i,s,f)):(We&&b&&vg(s),s.flags|=1,pn(i,s,c,f),s.child)}function Zw(i,s,l,c,f){if(i===null){var g=l.type;return typeof g=="function"&&!m_(g)&&g.defaultProps===void 0&&l.compare===null?(s.tag=15,s.type=g,Jw(i,s,g,c,f)):(i=If(l.type,null,c,s,s.mode,f),i.ref=s.ref,i.return=s,s.child=i)}if(g=i.child,!t_(i,f)){var T=g.memoizedProps;if(l=l.compare,l=l!==null?l:cc,l(T,c)&&i.ref===s.ref)return Ni(i,s,f)}return s.flags|=1,i=Vs(g,c),i.ref=s.ref,i.return=s,s.child=i}function Jw(i,s,l,c,f){if(i!==null){var g=i.memoizedProps;if(cc(g,c)&&i.ref===s.ref)if(sn=!1,s.pendingProps=c=g,t_(i,f))(i.flags&131072)!==0&&(sn=!0);else return s.lanes=i.lanes,Ni(i,s,f)}return Kg(i,s,l,c,f)}function e0(i,s,l){var c=s.pendingProps,f=c.children,g=(s.stateNode._pendingVisibility&2)!==0,T=i!==null?i.memoizedState:null;if(Ic(i,s),c.mode==="hidden"||g){if((s.flags&128)!==0){if(c=T!==null?T.baseLanes|l:l,i!==null){for(f=s.child=i.child,g=0;f!==null;)g=g|f.lanes|f.childLanes,f=f.sibling;s.childLanes=g&~c}else s.childLanes=0,s.child=null;return t0(i,s,c,l)}if((l&536870912)!==0)s.memoizedState={baseLanes:0,cachePool:null},i!==null&&uf(s,T!==null?T.cachePool:null),T!==null?nw(s,T):bg(),rw(s);else return s.lanes=s.childLanes=536870912,t0(i,s,T!==null?T.baseLanes|l:l,l)}else T!==null?(uf(s,T.cachePool),nw(s,T),As(),s.memoizedState=null):(i!==null&&uf(s,null),bg(),As());return pn(i,s,f,l),s.child}function t0(i,s,l,c){var f=Rg();return f=f===null?null:{parent:Yt._currentValue,pool:f},s.memoizedState={baseLanes:l,cachePool:f},i!==null&&uf(s,null),bg(),rw(s),i!==null&&Ac(i,s,c,!0),null}function Ic(i,s){var l=s.ref;if(l===null)i!==null&&i.ref!==null&&(s.flags|=2097664);else{if(typeof l!="function"&&typeof l!="object")throw Error(r(284));(i===null||i.ref!==l)&&(s.flags|=2097664)}}function Kg(i,s,l,c,f){return Ya(s),l=Dg(i,s,l,c,void 0,f),c=Pg(),i!==null&&!sn?(xg(i,s,f),Ni(i,s,f)):(We&&c&&vg(s),s.flags|=1,pn(i,s,l,f),s.child)}function n0(i,s,l,c,f,g){return Ya(s),s.updateQueue=null,l=lw(s,c,l,f),ow(i),c=Pg(),i!==null&&!sn?(xg(i,s,g),Ni(i,s,g)):(We&&c&&vg(s),s.flags|=1,pn(i,s,l,g),s.child)}function r0(i,s,l,c,f){if(Ya(s),s.stateNode===null){var g=ul,T=l.contextType;typeof T=="object"&&T!==null&&(g=Tn(T)),g=new l(c,g),s.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,g.updater=Gg,s.stateNode=g,g._reactInternals=s,g=s.stateNode,g.props=c,g.state=s.memoizedState,g.refs={},s_(s),T=l.contextType,g.context=typeof T=="object"&&T!==null?Tn(T):ul,g.state=s.memoizedState,T=l.getDerivedStateFromProps,typeof T=="function"&&(Hg(s,l,T,c),g.state=s.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(T=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),T!==g.state&&Gg.enqueueReplaceState(g,g.state,null),Cc(s,c,g,f),Rc(),g.state=s.memoizedState),typeof g.componentDidMount=="function"&&(s.flags|=4194308),c=!0}else if(i===null){g=s.stateNode;var b=s.memoizedProps,C=Qa(l,b);g.props=C;var M=g.context,Z=l.contextType;T=ul,typeof Z=="object"&&Z!==null&&(T=Tn(Z));var te=l.getDerivedStateFromProps;Z=typeof te=="function"||typeof g.getSnapshotBeforeUpdate=="function",b=s.pendingProps!==b,Z||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(b||M!==T)&&jw(s,g,c,T),Ds=!1;var $=s.memoizedState;g.state=$,Cc(s,c,g,f),Rc(),M=s.memoizedState,b||$!==M||Ds?(typeof te=="function"&&(Hg(s,l,te,c),M=s.memoizedState),(C=Ds||qw(s,l,C,c,$,M,T))?(Z||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(s.flags|=4194308)):(typeof g.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=c,s.memoizedState=M),g.props=c,g.state=M,g.context=T,c=C):(typeof g.componentDidMount=="function"&&(s.flags|=4194308),c=!1)}else{g=s.stateNode,a_(i,s),T=s.memoizedProps,Z=Qa(l,T),g.props=Z,te=s.pendingProps,$=g.context,M=l.contextType,C=ul,typeof M=="object"&&M!==null&&(C=Tn(M)),b=l.getDerivedStateFromProps,(M=typeof b=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(T!==te||$!==C)&&jw(s,g,c,C),Ds=!1,$=s.memoizedState,g.state=$,Cc(s,c,g,f),Rc();var X=s.memoizedState;T!==te||$!==X||Ds||i!==null&&i.dependencies!==null&&Ef(i.dependencies)?(typeof b=="function"&&(Hg(s,l,b,c),X=s.memoizedState),(Z=Ds||qw(s,l,Z,c,$,X,C)||i!==null&&i.dependencies!==null&&Ef(i.dependencies))?(M||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(c,X,C),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(c,X,C)),typeof g.componentDidUpdate=="function"&&(s.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof g.componentDidUpdate!="function"||T===i.memoizedProps&&$===i.memoizedState||(s.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||T===i.memoizedProps&&$===i.memoizedState||(s.flags|=1024),s.memoizedProps=c,s.memoizedState=X),g.props=c,g.state=X,g.context=C,c=Z):(typeof g.componentDidUpdate!="function"||T===i.memoizedProps&&$===i.memoizedState||(s.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||T===i.memoizedProps&&$===i.memoizedState||(s.flags|=1024),c=!1)}return g=c,Ic(i,s),c=(s.flags&128)!==0,g||c?(g=s.stateNode,l=c&&typeof l.getDerivedStateFromError!="function"?null:g.render(),s.flags|=1,i!==null&&c?(s.child=ja(s,i.child,null,f),s.child=ja(s,null,l,f)):pn(i,s,l,f),s.memoizedState=g.state,i=s.child):i=Ni(i,s,f),i}function i0(i,s,l,c){return fc(),s.flags|=256,pn(i,s,l,c),s.child}var Qg={dehydrated:null,treeContext:null,retryLane:0};function Wg(i){return{baseLanes:i,cachePool:aw()}}function Yg(i,s,l){return i=i!==null?i.childLanes&~l:0,s&&(i|=yr),i}function s0(i,s,l){var c=s.pendingProps,f=!1,g=(s.flags&128)!==0,T;if((T=g)||(T=i!==null&&i.memoizedState===null?!1:(Wt.current&2)!==0),T&&(f=!0,s.flags&=-129),T=(s.flags&32)!==0,s.flags&=-33,i===null){if(We){if(f?Is(s):As(),We){var b=fn,C;if(C=b){e:{for(C=b,b=$r;C.nodeType!==8;){if(!b){b=null;break e}if(C=Dr(C.nextSibling),C===null){b=null;break e}}b=C}b!==null?(s.memoizedState={dehydrated:b,treeContext:za!==null?{id:Ci,overflow:Di}:null,retryLane:536870912},C=_r(18,null,null,0),C.stateNode=b,C.return=s,s.child=C,Pn=s,fn=null,C=!0):C=!1}C||qa(s)}if(b=s.memoizedState,b!==null&&(b=b.dehydrated,b!==null))return b.data==="$!"?s.lanes=16:s.lanes=536870912,null;Pi(s)}return b=c.children,c=c.fallback,f?(As(),f=s.mode,b=Zg({mode:"hidden",children:b},f),c=Za(c,f,l,null),b.return=s,c.return=s,b.sibling=c,s.child=b,f=s.child,f.memoizedState=Wg(l),f.childLanes=Yg(i,T,l),s.memoizedState=Qg,c):(Is(s),Xg(s,b))}if(C=i.memoizedState,C!==null&&(b=C.dehydrated,b!==null)){if(g)s.flags&256?(Is(s),s.flags&=-257,s=Jg(i,s,l)):s.memoizedState!==null?(As(),s.child=i.child,s.flags|=128,s=null):(As(),f=c.fallback,b=s.mode,c=Zg({mode:"visible",children:c.children},b),f=Za(f,b,l,null),f.flags|=2,c.return=s,f.return=s,c.sibling=f,s.child=c,ja(s,i.child,null,l),c=s.child,c.memoizedState=Wg(l),c.childLanes=Yg(i,T,l),s.memoizedState=Qg,s=f);else if(Is(s),b.data==="$!"){if(T=b.nextSibling&&b.nextSibling.dataset,T)var M=T.dgst;T=M,c=Error(r(419)),c.stack="",c.digest=T,pc({value:c,source:null,stack:null}),s=Jg(i,s,l)}else if(sn||Ac(i,s,l,!1),T=(l&i.childLanes)!==0,sn||T){if(T=at,T!==null){if(c=l&-l,(c&42)!==0)c=1;else switch(c){case 2:c=1;break;case 8:c=4;break;case 32:c=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:c=64;break;case 268435456:c=134217728;break;default:c=0}if(c=(c&(T.suspendedLanes|l))!==0?0:c,c!==0&&c!==C.retryLane)throw C.retryLane=c,bs(i,c),xn(T,i,c),Yw}b.data==="$?"||R_(),s=Jg(i,s,l)}else b.data==="$?"?(s.flags|=128,s.child=i.child,s=HP.bind(null,i),b._reactRetry=s,s=null):(i=C.treeContext,fn=Dr(b.nextSibling),Pn=s,We=!0,Rr=null,$r=!1,i!==null&&(dr[fr++]=Ci,dr[fr++]=Di,dr[fr++]=za,Ci=i.id,Di=i.overflow,za=s),s=Xg(s,c.children),s.flags|=4096);return s}return f?(As(),f=c.fallback,b=s.mode,C=i.child,M=C.sibling,c=Vs(C,{mode:"hidden",children:c.children}),c.subtreeFlags=C.subtreeFlags&31457280,M!==null?f=Vs(M,f):(f=Za(f,b,l,null),f.flags|=2),f.return=s,c.return=s,c.sibling=f,s.child=c,c=f,f=s.child,b=i.child.memoizedState,b===null?b=Wg(l):(C=b.cachePool,C!==null?(M=Yt._currentValue,C=C.parent!==M?{parent:M,pool:M}:C):C=aw(),b={baseLanes:b.baseLanes|l,cachePool:C}),f.memoizedState=b,f.childLanes=Yg(i,T,l),s.memoizedState=Qg,c):(Is(s),l=i.child,i=l.sibling,l=Vs(l,{mode:"visible",children:c.children}),l.return=s,l.sibling=null,i!==null&&(T=s.deletions,T===null?(s.deletions=[i],s.flags|=16):T.push(i)),s.child=l,s.memoizedState=null,l)}function Xg(i,s){return s=Zg({mode:"visible",children:s},i.mode),s.return=i,i.child=s}function Zg(i,s){return x0(i,s,0,null)}function Jg(i,s,l){return ja(s,i.child,null,l),i=Xg(s,s.pendingProps.children),i.flags|=2,s.memoizedState=null,i}function a0(i,s,l){i.lanes|=s;var c=i.alternate;c!==null&&(c.lanes|=s),r_(i.return,s,l)}function e_(i,s,l,c,f){var g=i.memoizedState;g===null?i.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:c,tail:l,tailMode:f}:(g.isBackwards=s,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=l,g.tailMode=f)}function o0(i,s,l){var c=s.pendingProps,f=c.revealOrder,g=c.tail;if(pn(i,s,c.children,l),c=Wt.current,(c&2)!==0)c=c&1|2,s.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=s.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&a0(i,l,s);else if(i.tag===19)a0(i,l,s);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===s)break e;for(;i.sibling===null;){if(i.return===null||i.return===s)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}c&=1}switch(Ke(Wt,c),f){case"forwards":for(l=s.child,f=null;l!==null;)i=l.alternate,i!==null&&lf(i)===null&&(f=l),l=l.sibling;l=f,l===null?(f=s.child,s.child=null):(f=l.sibling,l.sibling=null),e_(s,!1,f,l,g);break;case"backwards":for(l=null,f=s.child,s.child=null;f!==null;){if(i=f.alternate,i!==null&&lf(i)===null){s.child=f;break}i=f.sibling,f.sibling=l,l=f,f=i}e_(s,!0,l,null,g);break;case"together":e_(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Ni(i,s,l){if(i!==null&&(s.dependencies=i.dependencies),Ms|=s.lanes,(l&s.childLanes)===0)if(i!==null){if(Ac(i,s,l,!1),(l&s.childLanes)===0)return null}else return null;if(i!==null&&s.child!==i.child)throw Error(r(153));if(s.child!==null){for(i=s.child,l=Vs(i,i.pendingProps),s.child=l,l.return=s;i.sibling!==null;)i=i.sibling,l=l.sibling=Vs(i,i.pendingProps),l.return=s;l.sibling=null}return s.child}function t_(i,s){return(i.lanes&s)!==0?!0:(i=i.dependencies,!!(i!==null&&Ef(i)))}function PP(i,s,l){switch(s.tag){case 3:os(s,s.stateNode.containerInfo),Cs(s,Yt,i.memoizedState.cache),fc();break;case 27:case 5:ju(s);break;case 4:os(s,s.stateNode.containerInfo);break;case 10:Cs(s,s.type,s.memoizedProps.value);break;case 13:var c=s.memoizedState;if(c!==null)return c.dehydrated!==null?(Is(s),s.flags|=128,null):(l&s.child.childLanes)!==0?s0(i,s,l):(Is(s),i=Ni(i,s,l),i!==null?i.sibling:null);Is(s);break;case 19:var f=(i.flags&128)!==0;if(c=(l&s.childLanes)!==0,c||(Ac(i,s,l,!1),c=(l&s.childLanes)!==0),f){if(c)return o0(i,s,l);s.flags|=128}if(f=s.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Ke(Wt,Wt.current),c)break;return null;case 22:case 23:return s.lanes=0,e0(i,s,l);case 24:Cs(s,Yt,i.memoizedState.cache)}return Ni(i,s,l)}function l0(i,s,l){if(i!==null)if(i.memoizedProps!==s.pendingProps)sn=!0;else{if(!t_(i,l)&&(s.flags&128)===0)return sn=!1,PP(i,s,l);sn=(i.flags&131072)!==0}else sn=!1,We&&(s.flags&1048576)!==0&&$T(s,nf,s.index);switch(s.lanes=0,s.tag){case 16:e:{i=s.pendingProps;var c=s.elementType,f=c._init;if(c=f(c._payload),s.type=c,typeof c=="function")m_(c)?(i=Qa(c,i),s.tag=1,s=r0(null,s,c,i,l)):(s.tag=0,s=Kg(null,s,c,i,l));else{if(c!=null){if(f=c.$$typeof,f===P){s.tag=11,s=Xw(null,s,c,i,l);break e}else if(f===z){s.tag=14,s=Zw(null,s,c,i,l);break e}}throw s=R(c)||c,Error(r(306,s,""))}}return s;case 0:return Kg(i,s,s.type,s.pendingProps,l);case 1:return c=s.type,f=Qa(c,s.pendingProps),r0(i,s,c,f,l);case 3:e:{if(os(s,s.stateNode.containerInfo),i===null)throw Error(r(387));var g=s.pendingProps;f=s.memoizedState,c=f.element,a_(i,s),Cc(s,g,null,l);var T=s.memoizedState;if(g=T.cache,Cs(s,Yt,g),g!==f.cache&&i_(s,[Yt],l,!0),Rc(),g=T.element,f.isDehydrated)if(f={element:g,isDehydrated:!1,cache:T.cache},s.updateQueue.baseState=f,s.memoizedState=f,s.flags&256){s=i0(i,s,g,l);break e}else if(g!==c){c=hr(Error(r(424)),s),pc(c),s=i0(i,s,g,l);break e}else for(fn=Dr(s.stateNode.containerInfo.firstChild),Pn=s,We=!0,Rr=null,$r=!0,l=tw(s,null,g,l),s.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(fc(),g===c){s=Ni(i,s,l);break e}pn(i,s,g,l)}s=s.child}return s;case 26:return Ic(i,s),i===null?(l=hb(s.type,null,s.pendingProps,null))?s.memoizedState=l:We||(l=s.type,i=s.pendingProps,c=Mf(rr.current).createElement(l),c[tn]=s,c[$t]=i,mn(c,l,i),_t(c),s.stateNode=c):s.memoizedState=hb(s.type,i.memoizedProps,s.pendingProps,i.memoizedState),null;case 27:return ju(s),i===null&&We&&(c=s.stateNode=lb(s.type,s.pendingProps,rr.current),Pn=s,$r=!0,fn=Dr(c.firstChild)),c=s.pendingProps.children,i!==null||We?pn(i,s,c,l):s.child=ja(s,null,c,l),Ic(i,s),s.child;case 5:return i===null&&We&&((f=c=fn)&&(c=ax(c,s.type,s.pendingProps,$r),c!==null?(s.stateNode=c,Pn=s,fn=Dr(c.firstChild),$r=!1,f=!0):f=!1),f||qa(s)),ju(s),f=s.type,g=s.pendingProps,T=i!==null?i.memoizedProps:null,c=g.children,F_(f,g)?c=null:T!==null&&F_(f,T)&&(s.flags|=32),s.memoizedState!==null&&(f=Dg(i,s,bP,null,null,l),jc._currentValue=f),Ic(i,s),pn(i,s,c,l),s.child;case 6:return i===null&&We&&((i=l=fn)&&(l=ox(l,s.pendingProps,$r),l!==null?(s.stateNode=l,Pn=s,fn=null,i=!0):i=!1),i||qa(s)),null;case 13:return s0(i,s,l);case 4:return os(s,s.stateNode.containerInfo),c=s.pendingProps,i===null?s.child=ja(s,null,c,l):pn(i,s,c,l),s.child;case 11:return Xw(i,s,s.type,s.pendingProps,l);case 7:return pn(i,s,s.pendingProps,l),s.child;case 8:return pn(i,s,s.pendingProps.children,l),s.child;case 12:return pn(i,s,s.pendingProps.children,l),s.child;case 10:return c=s.pendingProps,Cs(s,s.type,c.value),pn(i,s,c.children,l),s.child;case 9:return f=s.type._context,c=s.pendingProps.children,Ya(s),f=Tn(f),c=c(f),s.flags|=1,pn(i,s,c,l),s.child;case 14:return Zw(i,s,s.type,s.pendingProps,l);case 15:return Jw(i,s,s.type,s.pendingProps,l);case 19:return o0(i,s,l);case 22:return e0(i,s,l);case 24:return Ya(s),c=Tn(Yt),i===null?(f=Rg(),f===null&&(f=at,g=Ag(),f.pooledCache=g,g.refCount++,g!==null&&(f.pooledCacheLanes|=l),f=g),s.memoizedState={parent:c,cache:f},s_(s),Cs(s,Yt,f)):((i.lanes&l)!==0&&(a_(i,s),Cc(s,null,null,l),Rc()),f=i.memoizedState,g=s.memoizedState,f.parent!==c?(f={parent:c,cache:c},s.memoizedState=f,s.lanes===0&&(s.memoizedState=s.updateQueue.baseState=f),Cs(s,Yt,c)):(c=g.cache,Cs(s,Yt,c),c!==f.cache&&i_(s,[Yt],l,!0))),pn(i,s,s.pendingProps.children,l),s.child;case 29:throw s.pendingProps}throw Error(r(156,s.tag))}var n_=Me(null),Wa=null,Oi=null;function Cs(i,s,l){Ke(n_,s._currentValue),s._currentValue=l}function ki(i){i._currentValue=n_.current,Ze(n_)}function r_(i,s,l){for(;i!==null;){var c=i.alternate;if((i.childLanes&s)!==s?(i.childLanes|=s,c!==null&&(c.childLanes|=s)):c!==null&&(c.childLanes&s)!==s&&(c.childLanes|=s),i===l)break;i=i.return}}function i_(i,s,l,c){var f=i.child;for(f!==null&&(f.return=i);f!==null;){var g=f.dependencies;if(g!==null){var T=f.child;g=g.firstContext;e:for(;g!==null;){var b=g;g=f;for(var C=0;C<s.length;C++)if(b.context===s[C]){g.lanes|=l,b=g.alternate,b!==null&&(b.lanes|=l),r_(g.return,l,i),c||(T=null);break e}g=b.next}}else if(f.tag===18){if(T=f.return,T===null)throw Error(r(341));T.lanes|=l,g=T.alternate,g!==null&&(g.lanes|=l),r_(T,l,i),T=null}else T=f.child;if(T!==null)T.return=f;else for(T=f;T!==null;){if(T===i){T=null;break}if(f=T.sibling,f!==null){f.return=T.return,T=f;break}T=T.return}f=T}}function Ac(i,s,l,c){i=null;for(var f=s,g=!1;f!==null;){if(!g){if((f.flags&524288)!==0)g=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var T=f.alternate;if(T===null)throw Error(r(387));if(T=T.memoizedProps,T!==null){var b=f.type;Kn(f.pendingProps.value,T.value)||(i!==null?i.push(b):i=[b])}}else if(f===as.current){if(T=f.alternate,T===null)throw Error(r(387));T.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(i!==null?i.push(jc):i=[jc])}f=f.return}i!==null&&i_(s,i,l,c),s.flags|=262144}function Ef(i){for(i=i.firstContext;i!==null;){if(!Kn(i.context._currentValue,i.memoizedValue))return!0;i=i.next}return!1}function Ya(i){Wa=i,Oi=null,i=i.dependencies,i!==null&&(i.firstContext=null)}function Tn(i){return u0(Wa,i)}function Tf(i,s){return Wa===null&&Ya(i),u0(i,s)}function u0(i,s){var l=s._currentValue;if(s={context:s,memoizedValue:l,next:null},Oi===null){if(i===null)throw Error(r(308));Oi=s,i.dependencies={lanes:0,firstContext:s},i.flags|=524288}else Oi=Oi.next=s;return l}var Ds=!1;function s_(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function a_(i,s){i=i.updateQueue,s.updateQueue===i&&(s.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,callbacks:null})}function Ps(i){return{lane:i,tag:0,payload:null,callback:null,next:null}}function xs(i,s,l){var c=i.updateQueue;if(c===null)return null;if(c=c.shared,(vt&2)!==0){var f=c.pending;return f===null?s.next=s:(s.next=f.next,f.next=s),c.pending=s,s=ef(i),HT(i,null,l),s}return Jd(i,c,s,l),ef(i)}function Sc(i,s,l){if(s=s.updateQueue,s!==null&&(s=s.shared,(l&4194176)!==0)){var c=s.lanes;c&=i.pendingLanes,l|=c,s.lanes=l,fs(i,l)}}function o_(i,s){var l=i.updateQueue,c=i.alternate;if(c!==null&&(c=c.updateQueue,l===c)){var f=null,g=null;if(l=l.firstBaseUpdate,l!==null){do{var T={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};g===null?f=g=T:g=g.next=T,l=l.next}while(l!==null);g===null?f=g=s:g=g.next=s}else f=g=s;l={baseState:c.baseState,firstBaseUpdate:f,lastBaseUpdate:g,shared:c.shared,callbacks:c.callbacks},i.updateQueue=l;return}i=l.lastBaseUpdate,i===null?l.firstBaseUpdate=s:i.next=s,l.lastBaseUpdate=s}var l_=!1;function Rc(){if(l_){var i=ml;if(i!==null)throw i}}function Cc(i,s,l,c){l_=!1;var f=i.updateQueue;Ds=!1;var g=f.firstBaseUpdate,T=f.lastBaseUpdate,b=f.shared.pending;if(b!==null){f.shared.pending=null;var C=b,M=C.next;C.next=null,T===null?g=M:T.next=M,T=C;var Z=i.alternate;Z!==null&&(Z=Z.updateQueue,b=Z.lastBaseUpdate,b!==T&&(b===null?Z.firstBaseUpdate=M:b.next=M,Z.lastBaseUpdate=C))}if(g!==null){var te=f.baseState;T=0,Z=M=C=null,b=g;do{var $=b.lane&-536870913,X=$!==b.lane;if(X?(Ge&$)===$:(c&$)===$){$!==0&&$===pl&&(l_=!0),Z!==null&&(Z=Z.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});e:{var ve=i,De=b;$=s;var Ct=l;switch(De.tag){case 1:if(ve=De.payload,typeof ve=="function"){te=ve.call(Ct,te,$);break e}te=ve;break e;case 3:ve.flags=ve.flags&-65537|128;case 0:if(ve=De.payload,$=typeof ve=="function"?ve.call(Ct,te,$):ve,$==null)break e;te=x({},te,$);break e;case 2:Ds=!0}}$=b.callback,$!==null&&(i.flags|=64,X&&(i.flags|=8192),X=f.callbacks,X===null?f.callbacks=[$]:X.push($))}else X={lane:$,tag:b.tag,payload:b.payload,callback:b.callback,next:null},Z===null?(M=Z=X,C=te):Z=Z.next=X,T|=$;if(b=b.next,b===null){if(b=f.shared.pending,b===null)break;X=b,b=X.next,X.next=null,f.lastBaseUpdate=X,f.shared.pending=null}}while(!0);Z===null&&(C=te),f.baseState=C,f.firstBaseUpdate=M,f.lastBaseUpdate=Z,g===null&&(f.shared.lanes=0),Ms|=T,i.lanes=T,i.memoizedState=te}}function c0(i,s){if(typeof i!="function")throw Error(r(191,i));i.call(s)}function h0(i,s){var l=i.callbacks;if(l!==null)for(i.callbacks=null,i=0;i<l.length;i++)c0(l[i],s)}function Dc(i,s){try{var l=s.updateQueue,c=l!==null?l.lastEffect:null;if(c!==null){var f=c.next;l=f;do{if((l.tag&i)===i){c=void 0;var g=l.create,T=l.inst;c=g(),T.destroy=c}l=l.next}while(l!==f)}}catch(b){st(s,s.return,b)}}function Ns(i,s,l){try{var c=s.updateQueue,f=c!==null?c.lastEffect:null;if(f!==null){var g=f.next;c=g;do{if((c.tag&i)===i){var T=c.inst,b=T.destroy;if(b!==void 0){T.destroy=void 0,f=s;var C=l;try{b()}catch(M){st(f,C,M)}}}c=c.next}while(c!==g)}}catch(M){st(s,s.return,M)}}function d0(i){var s=i.updateQueue;if(s!==null){var l=i.stateNode;try{h0(s,l)}catch(c){st(i,i.return,c)}}}function f0(i,s,l){l.props=Qa(i.type,i.memoizedProps),l.state=i.memoizedState;try{l.componentWillUnmount()}catch(c){st(i,s,c)}}function Xa(i,s){try{var l=i.ref;if(l!==null){var c=i.stateNode;switch(i.tag){case 26:case 27:case 5:var f=c;break;default:f=c}typeof l=="function"?i.refCleanup=l(f):l.current=f}}catch(g){st(i,s,g)}}function Qn(i,s){var l=i.ref,c=i.refCleanup;if(l!==null)if(typeof c=="function")try{c()}catch(f){st(i,s,f)}finally{i.refCleanup=null,i=i.alternate,i!=null&&(i.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(f){st(i,s,f)}else l.current=null}function p0(i){var s=i.type,l=i.memoizedProps,c=i.stateNode;try{e:switch(s){case"button":case"input":case"select":case"textarea":l.autoFocus&&c.focus();break e;case"img":l.src?c.src=l.src:l.srcSet&&(c.srcset=l.srcSet)}}catch(f){st(i,i.return,f)}}function m0(i,s,l){try{var c=i.stateNode;tx(c,i.type,l,s),c[$t]=s}catch(f){st(i,i.return,f)}}function g0(i){return i.tag===5||i.tag===3||i.tag===26||i.tag===27||i.tag===4}function u_(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||g0(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==27&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function c_(i,s,l){var c=i.tag;if(c===5||c===6)i=i.stateNode,s?l.nodeType===8?l.parentNode.insertBefore(i,s):l.insertBefore(i,s):(l.nodeType===8?(s=l.parentNode,s.insertBefore(i,l)):(s=l,s.appendChild(i)),l=l._reactRootContainer,l!=null||s.onclick!==null||(s.onclick=Vf));else if(c!==4&&c!==27&&(i=i.child,i!==null))for(c_(i,s,l),i=i.sibling;i!==null;)c_(i,s,l),i=i.sibling}function wf(i,s,l){var c=i.tag;if(c===5||c===6)i=i.stateNode,s?l.insertBefore(i,s):l.appendChild(i);else if(c!==4&&c!==27&&(i=i.child,i!==null))for(wf(i,s,l),i=i.sibling;i!==null;)wf(i,s,l),i=i.sibling}var Vi=!1,St=!1,h_=!1,_0=typeof WeakSet=="function"?WeakSet:Set,an=null,y0=!1;function xP(i,s){if(i=i.containerInfo,B_=qf,i=VT(i),fg(i)){if("selectionStart"in i)var l={start:i.selectionStart,end:i.selectionEnd};else e:{l=(l=i.ownerDocument)&&l.defaultView||window;var c=l.getSelection&&l.getSelection();if(c&&c.rangeCount!==0){l=c.anchorNode;var f=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{l.nodeType,g.nodeType}catch{l=null;break e}var T=0,b=-1,C=-1,M=0,Z=0,te=i,$=null;t:for(;;){for(var X;te!==l||f!==0&&te.nodeType!==3||(b=T+f),te!==g||c!==0&&te.nodeType!==3||(C=T+c),te.nodeType===3&&(T+=te.nodeValue.length),(X=te.firstChild)!==null;)$=te,te=X;for(;;){if(te===i)break t;if($===l&&++M===f&&(b=T),$===g&&++Z===c&&(C=T),(X=te.nextSibling)!==null)break;te=$,$=te.parentNode}te=X}l=b===-1||C===-1?null:{start:b,end:C}}else l=null}l=l||{start:0,end:0}}else l=null;for(z_={focusedElem:i,selectionRange:l},qf=!1,an=s;an!==null;)if(s=an,i=s.child,(s.subtreeFlags&1028)!==0&&i!==null)i.return=s,an=i;else for(;an!==null;){switch(s=an,g=s.alternate,i=s.flags,s.tag){case 0:break;case 11:case 15:break;case 1:if((i&1024)!==0&&g!==null){i=void 0,l=s,f=g.memoizedProps,g=g.memoizedState,c=l.stateNode;try{var ve=Qa(l.type,f,l.elementType===l.type);i=c.getSnapshotBeforeUpdate(ve,g),c.__reactInternalSnapshotBeforeUpdate=i}catch(De){st(l,l.return,De)}}break;case 3:if((i&1024)!==0){if(i=s.stateNode.containerInfo,l=i.nodeType,l===9)H_(i);else if(l===1)switch(i.nodeName){case"HEAD":case"HTML":case"BODY":H_(i);break;default:i.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((i&1024)!==0)throw Error(r(163))}if(i=s.sibling,i!==null){i.return=s.return,an=i;break}an=s.return}return ve=y0,y0=!1,ve}function v0(i,s,l){var c=l.flags;switch(l.tag){case 0:case 11:case 15:Li(i,l),c&4&&Dc(5,l);break;case 1:if(Li(i,l),c&4)if(i=l.stateNode,s===null)try{i.componentDidMount()}catch(b){st(l,l.return,b)}else{var f=Qa(l.type,s.memoizedProps);s=s.memoizedState;try{i.componentDidUpdate(f,s,i.__reactInternalSnapshotBeforeUpdate)}catch(b){st(l,l.return,b)}}c&64&&d0(l),c&512&&Xa(l,l.return);break;case 3:if(Li(i,l),c&64&&(c=l.updateQueue,c!==null)){if(i=null,l.child!==null)switch(l.child.tag){case 27:case 5:i=l.child.stateNode;break;case 1:i=l.child.stateNode}try{h0(c,i)}catch(b){st(l,l.return,b)}}break;case 26:Li(i,l),c&512&&Xa(l,l.return);break;case 27:case 5:Li(i,l),s===null&&c&4&&p0(l),c&512&&Xa(l,l.return);break;case 12:Li(i,l);break;case 13:Li(i,l),c&4&&w0(i,l);break;case 22:if(f=l.memoizedState!==null||Vi,!f){s=s!==null&&s.memoizedState!==null||St;var g=Vi,T=St;Vi=f,(St=s)&&!T?Os(i,l,(l.subtreeFlags&8772)!==0):Li(i,l),Vi=g,St=T}c&512&&(l.memoizedProps.mode==="manual"?Xa(l,l.return):Qn(l,l.return));break;default:Li(i,l)}}function E0(i){var s=i.alternate;s!==null&&(i.alternate=null,E0(s)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(s=i.stateNode,s!==null&&Ra(s)),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}var Ft=null,Wn=!1;function Mi(i,s,l){for(l=l.child;l!==null;)T0(i,s,l),l=l.sibling}function T0(i,s,l){if(En&&typeof En.onCommitFiberUnmount=="function")try{En.onCommitFiberUnmount(ls,l)}catch{}switch(l.tag){case 26:St||Qn(l,s),Mi(i,s,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:St||Qn(l,s);var c=Ft,f=Wn;for(Ft=l.stateNode,Mi(i,s,l),l=l.stateNode,s=l.attributes;s.length;)l.removeAttributeNode(s[0]);Ra(l),Ft=c,Wn=f;break;case 5:St||Qn(l,s);case 6:f=Ft;var g=Wn;if(Ft=null,Mi(i,s,l),Ft=f,Wn=g,Ft!==null)if(Wn)try{i=Ft,c=l.stateNode,i.nodeType===8?i.parentNode.removeChild(c):i.removeChild(c)}catch(T){st(l,s,T)}else try{Ft.removeChild(l.stateNode)}catch(T){st(l,s,T)}break;case 18:Ft!==null&&(Wn?(s=Ft,l=l.stateNode,s.nodeType===8?j_(s.parentNode,l):s.nodeType===1&&j_(s,l),Kc(s)):j_(Ft,l.stateNode));break;case 4:c=Ft,f=Wn,Ft=l.stateNode.containerInfo,Wn=!0,Mi(i,s,l),Ft=c,Wn=f;break;case 0:case 11:case 14:case 15:St||Ns(2,l,s),St||Ns(4,l,s),Mi(i,s,l);break;case 1:St||(Qn(l,s),c=l.stateNode,typeof c.componentWillUnmount=="function"&&f0(l,s,c)),Mi(i,s,l);break;case 21:Mi(i,s,l);break;case 22:St||Qn(l,s),St=(c=St)||l.memoizedState!==null,Mi(i,s,l),St=c;break;default:Mi(i,s,l)}}function w0(i,s){if(s.memoizedState===null&&(i=s.alternate,i!==null&&(i=i.memoizedState,i!==null&&(i=i.dehydrated,i!==null))))try{Kc(i)}catch(l){st(s,s.return,l)}}function NP(i){switch(i.tag){case 13:case 19:var s=i.stateNode;return s===null&&(s=i.stateNode=new _0),s;case 22:return i=i.stateNode,s=i._retryCache,s===null&&(s=i._retryCache=new _0),s;default:throw Error(r(435,i.tag))}}function d_(i,s){var l=NP(i);s.forEach(function(c){var f=GP.bind(null,i,c);l.has(c)||(l.add(c),c.then(f,f))})}function mr(i,s){var l=s.deletions;if(l!==null)for(var c=0;c<l.length;c++){var f=l[c],g=i,T=s,b=T;e:for(;b!==null;){switch(b.tag){case 27:case 5:Ft=b.stateNode,Wn=!1;break e;case 3:Ft=b.stateNode.containerInfo,Wn=!0;break e;case 4:Ft=b.stateNode.containerInfo,Wn=!0;break e}b=b.return}if(Ft===null)throw Error(r(160));T0(g,T,f),Ft=null,Wn=!1,g=f.alternate,g!==null&&(g.return=null),f.return=null}if(s.subtreeFlags&13878)for(s=s.child;s!==null;)b0(s,i),s=s.sibling}var Cr=null;function b0(i,s){var l=i.alternate,c=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:mr(s,i),gr(i),c&4&&(Ns(3,i,i.return),Dc(3,i),Ns(5,i,i.return));break;case 1:mr(s,i),gr(i),c&512&&(St||l===null||Qn(l,l.return)),c&64&&Vi&&(i=i.updateQueue,i!==null&&(c=i.callbacks,c!==null&&(l=i.shared.hiddenCallbacks,i.shared.hiddenCallbacks=l===null?c:l.concat(c))));break;case 26:var f=Cr;if(mr(s,i),gr(i),c&512&&(St||l===null||Qn(l,l.return)),c&4){var g=l!==null?l.memoizedState:null;if(c=i.memoizedState,l===null)if(c===null)if(i.stateNode===null){e:{c=i.type,l=i.memoizedProps,f=f.ownerDocument||f;t:switch(c){case"title":g=f.getElementsByTagName("title")[0],(!g||g[ms]||g[tn]||g.namespaceURI==="http://www.w3.org/2000/svg"||g.hasAttribute("itemprop"))&&(g=f.createElement(c),f.head.insertBefore(g,f.querySelector("head > title"))),mn(g,c,l),g[tn]=i,_t(g),c=g;break e;case"link":var T=pb("link","href",f).get(c+(l.href||""));if(T){for(var b=0;b<T.length;b++)if(g=T[b],g.getAttribute("href")===(l.href==null?null:l.href)&&g.getAttribute("rel")===(l.rel==null?null:l.rel)&&g.getAttribute("title")===(l.title==null?null:l.title)&&g.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){T.splice(b,1);break t}}g=f.createElement(c),mn(g,c,l),f.head.appendChild(g);break;case"meta":if(T=pb("meta","content",f).get(c+(l.content||""))){for(b=0;b<T.length;b++)if(g=T[b],g.getAttribute("content")===(l.content==null?null:""+l.content)&&g.getAttribute("name")===(l.name==null?null:l.name)&&g.getAttribute("property")===(l.property==null?null:l.property)&&g.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&g.getAttribute("charset")===(l.charSet==null?null:l.charSet)){T.splice(b,1);break t}}g=f.createElement(c),mn(g,c,l),f.head.appendChild(g);break;default:throw Error(r(468,c))}g[tn]=i,_t(g),c=g}i.stateNode=c}else mb(f,i.type,i.stateNode);else i.stateNode=fb(f,c,i.memoizedProps);else g!==c?(g===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):g.count--,c===null?mb(f,i.type,i.stateNode):fb(f,c,i.memoizedProps)):c===null&&i.stateNode!==null&&m0(i,i.memoizedProps,l.memoizedProps)}break;case 27:if(c&4&&i.alternate===null){f=i.stateNode,g=i.memoizedProps;try{for(var C=f.firstChild;C;){var M=C.nextSibling,Z=C.nodeName;C[ms]||Z==="HEAD"||Z==="BODY"||Z==="SCRIPT"||Z==="STYLE"||Z==="LINK"&&C.rel.toLowerCase()==="stylesheet"||f.removeChild(C),C=M}for(var te=i.type,$=f.attributes;$.length;)f.removeAttributeNode($[0]);mn(f,te,g),f[tn]=i,f[$t]=g}catch(ve){st(i,i.return,ve)}}case 5:if(mr(s,i),gr(i),c&512&&(St||l===null||Qn(l,l.return)),i.flags&32){f=i.stateNode;try{ar(f,"")}catch(ve){st(i,i.return,ve)}}c&4&&i.stateNode!=null&&(f=i.memoizedProps,m0(i,f,l!==null?l.memoizedProps:f)),c&1024&&(h_=!0);break;case 6:if(mr(s,i),gr(i),c&4){if(i.stateNode===null)throw Error(r(162));c=i.memoizedProps,l=i.stateNode;try{l.nodeValue=c}catch(ve){st(i,i.return,ve)}}break;case 3:if(Bf=null,f=Cr,Cr=Lf(s.containerInfo),mr(s,i),Cr=f,gr(i),c&4&&l!==null&&l.memoizedState.isDehydrated)try{Kc(s.containerInfo)}catch(ve){st(i,i.return,ve)}h_&&(h_=!1,I0(i));break;case 4:c=Cr,Cr=Lf(i.stateNode.containerInfo),mr(s,i),gr(i),Cr=c;break;case 12:mr(s,i),gr(i);break;case 13:mr(s,i),gr(i),i.child.flags&8192&&i.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(T_=Ln()),c&4&&(c=i.updateQueue,c!==null&&(i.updateQueue=null,d_(i,c)));break;case 22:if(c&512&&(St||l===null||Qn(l,l.return)),C=i.memoizedState!==null,M=l!==null&&l.memoizedState!==null,Z=Vi,te=St,Vi=Z||C,St=te||M,mr(s,i),St=te,Vi=Z,gr(i),s=i.stateNode,s._current=i,s._visibility&=-3,s._visibility|=s._pendingVisibility&2,c&8192&&(s._visibility=C?s._visibility&-2:s._visibility|1,C&&(s=Vi||St,l===null||M||s||vl(i)),i.memoizedProps===null||i.memoizedProps.mode!=="manual"))e:for(l=null,s=i;;){if(s.tag===5||s.tag===26||s.tag===27){if(l===null){M=l=s;try{if(f=M.stateNode,C)g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{T=M.stateNode,b=M.memoizedProps.style;var X=b!=null&&b.hasOwnProperty("display")?b.display:null;T.style.display=X==null||typeof X=="boolean"?"":(""+X).trim()}}catch(ve){st(M,M.return,ve)}}}else if(s.tag===6){if(l===null){M=s;try{M.stateNode.nodeValue=C?"":M.memoizedProps}catch(ve){st(M,M.return,ve)}}}else if((s.tag!==22&&s.tag!==23||s.memoizedState===null||s===i)&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break e;for(;s.sibling===null;){if(s.return===null||s.return===i)break e;l===s&&(l=null),s=s.return}l===s&&(l=null),s.sibling.return=s.return,s=s.sibling}c&4&&(c=i.updateQueue,c!==null&&(l=c.retryQueue,l!==null&&(c.retryQueue=null,d_(i,l))));break;case 19:mr(s,i),gr(i),c&4&&(c=i.updateQueue,c!==null&&(i.updateQueue=null,d_(i,c)));break;case 21:break;default:mr(s,i),gr(i)}}function gr(i){var s=i.flags;if(s&2){try{if(i.tag!==27){e:{for(var l=i.return;l!==null;){if(g0(l)){var c=l;break e}l=l.return}throw Error(r(160))}switch(c.tag){case 27:var f=c.stateNode,g=u_(i);wf(i,g,f);break;case 5:var T=c.stateNode;c.flags&32&&(ar(T,""),c.flags&=-33);var b=u_(i);wf(i,b,T);break;case 3:case 4:var C=c.stateNode.containerInfo,M=u_(i);c_(i,M,C);break;default:throw Error(r(161))}}}catch(Z){st(i,i.return,Z)}i.flags&=-3}s&4096&&(i.flags&=-4097)}function I0(i){if(i.subtreeFlags&1024)for(i=i.child;i!==null;){var s=i;I0(s),s.tag===5&&s.flags&1024&&s.stateNode.reset(),i=i.sibling}}function Li(i,s){if(s.subtreeFlags&8772)for(s=s.child;s!==null;)v0(i,s.alternate,s),s=s.sibling}function vl(i){for(i=i.child;i!==null;){var s=i;switch(s.tag){case 0:case 11:case 14:case 15:Ns(4,s,s.return),vl(s);break;case 1:Qn(s,s.return);var l=s.stateNode;typeof l.componentWillUnmount=="function"&&f0(s,s.return,l),vl(s);break;case 26:case 27:case 5:Qn(s,s.return),vl(s);break;case 22:Qn(s,s.return),s.memoizedState===null&&vl(s);break;default:vl(s)}i=i.sibling}}function Os(i,s,l){for(l=l&&(s.subtreeFlags&8772)!==0,s=s.child;s!==null;){var c=s.alternate,f=i,g=s,T=g.flags;switch(g.tag){case 0:case 11:case 15:Os(f,g,l),Dc(4,g);break;case 1:if(Os(f,g,l),c=g,f=c.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(M){st(c,c.return,M)}if(c=g,f=c.updateQueue,f!==null){var b=c.stateNode;try{var C=f.shared.hiddenCallbacks;if(C!==null)for(f.shared.hiddenCallbacks=null,f=0;f<C.length;f++)c0(C[f],b)}catch(M){st(c,c.return,M)}}l&&T&64&&d0(g),Xa(g,g.return);break;case 26:case 27:case 5:Os(f,g,l),l&&c===null&&T&4&&p0(g),Xa(g,g.return);break;case 12:Os(f,g,l);break;case 13:Os(f,g,l),l&&T&4&&w0(f,g);break;case 22:g.memoizedState===null&&Os(f,g,l),Xa(g,g.return);break;default:Os(f,g,l)}s=s.sibling}}function f_(i,s){var l=null;i!==null&&i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),i=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(i=s.memoizedState.cachePool.pool),i!==l&&(i!=null&&i.refCount++,l!=null&&vc(l))}function p_(i,s){i=null,s.alternate!==null&&(i=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==i&&(s.refCount++,i!=null&&vc(i))}function ks(i,s,l,c){if(s.subtreeFlags&10256)for(s=s.child;s!==null;)A0(i,s,l,c),s=s.sibling}function A0(i,s,l,c){var f=s.flags;switch(s.tag){case 0:case 11:case 15:ks(i,s,l,c),f&2048&&Dc(9,s);break;case 3:ks(i,s,l,c),f&2048&&(i=null,s.alternate!==null&&(i=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==i&&(s.refCount++,i!=null&&vc(i)));break;case 12:if(f&2048){ks(i,s,l,c),i=s.stateNode;try{var g=s.memoizedProps,T=g.id,b=g.onPostCommit;typeof b=="function"&&b(T,s.alternate===null?"mount":"update",i.passiveEffectDuration,-0)}catch(C){st(s,s.return,C)}}else ks(i,s,l,c);break;case 23:break;case 22:g=s.stateNode,s.memoizedState!==null?g._visibility&4?ks(i,s,l,c):Pc(i,s):g._visibility&4?ks(i,s,l,c):(g._visibility|=4,El(i,s,l,c,(s.subtreeFlags&10256)!==0)),f&2048&&f_(s.alternate,s);break;case 24:ks(i,s,l,c),f&2048&&p_(s.alternate,s);break;default:ks(i,s,l,c)}}function El(i,s,l,c,f){for(f=f&&(s.subtreeFlags&10256)!==0,s=s.child;s!==null;){var g=i,T=s,b=l,C=c,M=T.flags;switch(T.tag){case 0:case 11:case 15:El(g,T,b,C,f),Dc(8,T);break;case 23:break;case 22:var Z=T.stateNode;T.memoizedState!==null?Z._visibility&4?El(g,T,b,C,f):Pc(g,T):(Z._visibility|=4,El(g,T,b,C,f)),f&&M&2048&&f_(T.alternate,T);break;case 24:El(g,T,b,C,f),f&&M&2048&&p_(T.alternate,T);break;default:El(g,T,b,C,f)}s=s.sibling}}function Pc(i,s){if(s.subtreeFlags&10256)for(s=s.child;s!==null;){var l=i,c=s,f=c.flags;switch(c.tag){case 22:Pc(l,c),f&2048&&f_(c.alternate,c);break;case 24:Pc(l,c),f&2048&&p_(c.alternate,c);break;default:Pc(l,c)}s=s.sibling}}var xc=8192;function Tl(i){if(i.subtreeFlags&xc)for(i=i.child;i!==null;)S0(i),i=i.sibling}function S0(i){switch(i.tag){case 26:Tl(i),i.flags&xc&&i.memoizedState!==null&&Ex(Cr,i.memoizedState,i.memoizedProps);break;case 5:Tl(i);break;case 3:case 4:var s=Cr;Cr=Lf(i.stateNode.containerInfo),Tl(i),Cr=s;break;case 22:i.memoizedState===null&&(s=i.alternate,s!==null&&s.memoizedState!==null?(s=xc,xc=16777216,Tl(i),xc=s):Tl(i));break;default:Tl(i)}}function R0(i){var s=i.alternate;if(s!==null&&(i=s.child,i!==null)){s.child=null;do s=i.sibling,i.sibling=null,i=s;while(i!==null)}}function Nc(i){var s=i.deletions;if((i.flags&16)!==0){if(s!==null)for(var l=0;l<s.length;l++){var c=s[l];an=c,D0(c,i)}R0(i)}if(i.subtreeFlags&10256)for(i=i.child;i!==null;)C0(i),i=i.sibling}function C0(i){switch(i.tag){case 0:case 11:case 15:Nc(i),i.flags&2048&&Ns(9,i,i.return);break;case 3:Nc(i);break;case 12:Nc(i);break;case 22:var s=i.stateNode;i.memoizedState!==null&&s._visibility&4&&(i.return===null||i.return.tag!==13)?(s._visibility&=-5,bf(i)):Nc(i);break;default:Nc(i)}}function bf(i){var s=i.deletions;if((i.flags&16)!==0){if(s!==null)for(var l=0;l<s.length;l++){var c=s[l];an=c,D0(c,i)}R0(i)}for(i=i.child;i!==null;){switch(s=i,s.tag){case 0:case 11:case 15:Ns(8,s,s.return),bf(s);break;case 22:l=s.stateNode,l._visibility&4&&(l._visibility&=-5,bf(s));break;default:bf(s)}i=i.sibling}}function D0(i,s){for(;an!==null;){var l=an;switch(l.tag){case 0:case 11:case 15:Ns(8,l,s);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var c=l.memoizedState.cachePool.pool;c!=null&&c.refCount++}break;case 24:vc(l.memoizedState.cache)}if(c=l.child,c!==null)c.return=l,an=c;else e:for(l=i;an!==null;){c=an;var f=c.sibling,g=c.return;if(E0(c),c===l){an=null;break e}if(f!==null){f.return=g,an=f;break e}an=g}}}function OP(i,s,l,c){this.tag=i,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _r(i,s,l,c){return new OP(i,s,l,c)}function m_(i){return i=i.prototype,!(!i||!i.isReactComponent)}function Vs(i,s){var l=i.alternate;return l===null?(l=_r(i.tag,s,i.key,i.mode),l.elementType=i.elementType,l.type=i.type,l.stateNode=i.stateNode,l.alternate=i,i.alternate=l):(l.pendingProps=s,l.type=i.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=i.flags&31457280,l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,s=i.dependencies,l.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},l.sibling=i.sibling,l.index=i.index,l.ref=i.ref,l.refCleanup=i.refCleanup,l}function P0(i,s){i.flags&=31457282;var l=i.alternate;return l===null?(i.childLanes=0,i.lanes=s,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,s=l.dependencies,i.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext}),i}function If(i,s,l,c,f,g){var T=0;if(c=i,typeof i=="function")m_(i)&&(T=1);else if(typeof i=="string")T=yx(i,l,Ut.current)?26:i==="html"||i==="head"||i==="body"?27:5;else e:switch(i){case p:return Za(l.children,f,g,s);case m:T=8,f|=24;break;case y:return i=_r(12,l,s,f|2),i.elementType=y,i.lanes=g,i;case U:return i=_r(13,l,s,f),i.elementType=U,i.lanes=g,i;case L:return i=_r(19,l,s,f),i.elementType=L,i.lanes=g,i;case G:return x0(l,f,g,s);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case v:case S:T=10;break e;case w:T=9;break e;case P:T=11;break e;case z:T=14;break e;case W:T=16,c=null;break e}T=29,l=Error(r(130,i===null?"null":typeof i,"")),c=null}return s=_r(T,l,s,f),s.elementType=i,s.type=c,s.lanes=g,s}function Za(i,s,l,c){return i=_r(7,i,c,s),i.lanes=l,i}function x0(i,s,l,c){i=_r(22,i,c,s),i.elementType=G,i.lanes=l;var f={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var g=f._current;if(g===null)throw Error(r(456));if((f._pendingVisibility&2)===0){var T=bs(g,2);T!==null&&(f._pendingVisibility|=2,xn(T,g,2))}},attach:function(){var g=f._current;if(g===null)throw Error(r(456));if((f._pendingVisibility&2)!==0){var T=bs(g,2);T!==null&&(f._pendingVisibility&=-3,xn(T,g,2))}}};return i.stateNode=f,i}function g_(i,s,l){return i=_r(6,i,null,s),i.lanes=l,i}function __(i,s,l){return s=_r(4,i.children!==null?i.children:[],i.key,s),s.lanes=l,s.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},s}function Ui(i){i.flags|=4}function N0(i,s){if(s.type!=="stylesheet"||(s.state.loading&4)!==0)i.flags&=-16777217;else if(i.flags|=16777216,!gb(s)){if(s=pr.current,s!==null&&((Ge&4194176)===Ge?Kr!==null:(Ge&62914560)!==Ge&&(Ge&536870912)===0||s!==Kr))throw gc=wg,WT;i.flags|=8192}}function Af(i,s){s!==null&&(i.flags|=4),i.flags&16384&&(s=i.tag!==22?hs():536870912,i.lanes|=s,bl|=s)}function Oc(i,s){if(!We)switch(i.tailMode){case"hidden":s=i.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i.tail=null:l.sibling=null;break;case"collapsed":l=i.tail;for(var c=null;l!==null;)l.alternate!==null&&(c=l),l=l.sibling;c===null?s||i.tail===null?i.tail=null:i.tail.sibling=null:c.sibling=null}}function yt(i){var s=i.alternate!==null&&i.alternate.child===i.child,l=0,c=0;if(s)for(var f=i.child;f!==null;)l|=f.lanes|f.childLanes,c|=f.subtreeFlags&31457280,c|=f.flags&31457280,f.return=i,f=f.sibling;else for(f=i.child;f!==null;)l|=f.lanes|f.childLanes,c|=f.subtreeFlags,c|=f.flags,f.return=i,f=f.sibling;return i.subtreeFlags|=c,i.childLanes=l,s}function kP(i,s,l){var c=s.pendingProps;switch(Eg(s),s.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return yt(s),null;case 1:return yt(s),null;case 3:return l=s.stateNode,c=null,i!==null&&(c=i.memoizedState.cache),s.memoizedState.cache!==c&&(s.flags|=2048),ki(Yt),_i(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(i===null||i.child===null)&&(dc(s)?Ui(s):i===null||i.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Rr!==null&&(A_(Rr),Rr=null))),yt(s),null;case 26:return l=s.memoizedState,i===null?(Ui(s),l!==null?(yt(s),N0(s,l)):(yt(s),s.flags&=-16777217)):l?l!==i.memoizedState?(Ui(s),yt(s),N0(s,l)):(yt(s),s.flags&=-16777217):(i.memoizedProps!==c&&Ui(s),yt(s),s.flags&=-16777217),null;case 27:qo(s),l=rr.current;var f=s.type;if(i!==null&&s.stateNode!=null)i.memoizedProps!==c&&Ui(s);else{if(!c){if(s.stateNode===null)throw Error(r(166));return yt(s),null}i=Ut.current,dc(s)?KT(s):(i=lb(f,c,l),s.stateNode=i,Ui(s))}return yt(s),null;case 5:if(qo(s),l=s.type,i!==null&&s.stateNode!=null)i.memoizedProps!==c&&Ui(s);else{if(!c){if(s.stateNode===null)throw Error(r(166));return yt(s),null}if(i=Ut.current,dc(s))KT(s);else{switch(f=Mf(rr.current),i){case 1:i=f.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:i=f.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":i=f.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":i=f.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":i=f.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof c.is=="string"?f.createElement("select",{is:c.is}):f.createElement("select"),c.multiple?i.multiple=!0:c.size&&(i.size=c.size);break;default:i=typeof c.is=="string"?f.createElement(l,{is:c.is}):f.createElement(l)}}i[tn]=s,i[$t]=c;e:for(f=s.child;f!==null;){if(f.tag===5||f.tag===6)i.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===s)break e;for(;f.sibling===null;){if(f.return===null||f.return===s)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}s.stateNode=i;e:switch(mn(i,l,c),l){case"button":case"input":case"select":case"textarea":i=!!c.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&Ui(s)}}return yt(s),s.flags&=-16777217,null;case 6:if(i&&s.stateNode!=null)i.memoizedProps!==c&&Ui(s);else{if(typeof c!="string"&&s.stateNode===null)throw Error(r(166));if(i=rr.current,dc(s)){if(i=s.stateNode,l=s.memoizedProps,c=null,f=Pn,f!==null)switch(f.tag){case 27:case 5:c=f.memoizedProps}i[tn]=s,i=!!(i.nodeValue===l||c!==null&&c.suppressHydrationWarning===!0||nb(i.nodeValue,l)),i||qa(s)}else i=Mf(i).createTextNode(c),i[tn]=s,s.stateNode=i}return yt(s),null;case 13:if(c=s.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(f=dc(s),c!==null&&c.dehydrated!==null){if(i===null){if(!f)throw Error(r(318));if(f=s.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(r(317));f[tn]=s}else fc(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;yt(s),f=!1}else Rr!==null&&(A_(Rr),Rr=null),f=!0;if(!f)return s.flags&256?(Pi(s),s):(Pi(s),null)}if(Pi(s),(s.flags&128)!==0)return s.lanes=l,s;if(l=c!==null,i=i!==null&&i.memoizedState!==null,l){c=s.child,f=null,c.alternate!==null&&c.alternate.memoizedState!==null&&c.alternate.memoizedState.cachePool!==null&&(f=c.alternate.memoizedState.cachePool.pool);var g=null;c.memoizedState!==null&&c.memoizedState.cachePool!==null&&(g=c.memoizedState.cachePool.pool),g!==f&&(c.flags|=2048)}return l!==i&&l&&(s.child.flags|=8192),Af(s,s.updateQueue),yt(s),null;case 4:return _i(),i===null&&M_(s.stateNode.containerInfo),yt(s),null;case 10:return ki(s.type),yt(s),null;case 19:if(Ze(Wt),f=s.memoizedState,f===null)return yt(s),null;if(c=(s.flags&128)!==0,g=f.rendering,g===null)if(c)Oc(f,!1);else{if(Rt!==0||i!==null&&(i.flags&128)!==0)for(i=s.child;i!==null;){if(g=lf(i),g!==null){for(s.flags|=128,Oc(f,!1),i=g.updateQueue,s.updateQueue=i,Af(s,i),s.subtreeFlags=0,i=l,l=s.child;l!==null;)P0(l,i),l=l.sibling;return Ke(Wt,Wt.current&1|2),s.child}i=i.sibling}f.tail!==null&&Ln()>Sf&&(s.flags|=128,c=!0,Oc(f,!1),s.lanes=4194304)}else{if(!c)if(i=lf(g),i!==null){if(s.flags|=128,c=!0,i=i.updateQueue,s.updateQueue=i,Af(s,i),Oc(f,!0),f.tail===null&&f.tailMode==="hidden"&&!g.alternate&&!We)return yt(s),null}else 2*Ln()-f.renderingStartTime>Sf&&l!==536870912&&(s.flags|=128,c=!0,Oc(f,!1),s.lanes=4194304);f.isBackwards?(g.sibling=s.child,s.child=g):(i=f.last,i!==null?i.sibling=g:s.child=g,f.last=g)}return f.tail!==null?(s=f.tail,f.rendering=s,f.tail=s.sibling,f.renderingStartTime=Ln(),s.sibling=null,i=Wt.current,Ke(Wt,c?i&1|2:i&1),s):(yt(s),null);case 22:case 23:return Pi(s),Ig(),c=s.memoizedState!==null,i!==null?i.memoizedState!==null!==c&&(s.flags|=8192):c&&(s.flags|=8192),c?(l&536870912)!==0&&(s.flags&128)===0&&(yt(s),s.subtreeFlags&6&&(s.flags|=8192)):yt(s),l=s.updateQueue,l!==null&&Af(s,l.retryQueue),l=null,i!==null&&i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),c=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(c=s.memoizedState.cachePool.pool),c!==l&&(s.flags|=2048),i!==null&&Ze(Ha),null;case 24:return l=null,i!==null&&(l=i.memoizedState.cache),s.memoizedState.cache!==l&&(s.flags|=2048),ki(Yt),yt(s),null;case 25:return null}throw Error(r(156,s.tag))}function VP(i,s){switch(Eg(s),s.tag){case 1:return i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 3:return ki(Yt),_i(),i=s.flags,(i&65536)!==0&&(i&128)===0?(s.flags=i&-65537|128,s):null;case 26:case 27:case 5:return qo(s),null;case 13:if(Pi(s),i=s.memoizedState,i!==null&&i.dehydrated!==null){if(s.alternate===null)throw Error(r(340));fc()}return i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 19:return Ze(Wt),null;case 4:return _i(),null;case 10:return ki(s.type),null;case 22:case 23:return Pi(s),Ig(),i!==null&&Ze(Ha),i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 24:return ki(Yt),null;case 25:return null;default:return null}}function O0(i,s){switch(Eg(s),s.tag){case 3:ki(Yt),_i();break;case 26:case 27:case 5:qo(s);break;case 4:_i();break;case 13:Pi(s);break;case 19:Ze(Wt);break;case 10:ki(s.type);break;case 22:case 23:Pi(s),Ig(),i!==null&&Ze(Ha);break;case 24:ki(Yt)}}var MP={getCacheForType:function(i){var s=Tn(Yt),l=s.data.get(i);return l===void 0&&(l=i(),s.data.set(i,l)),l}},LP=typeof WeakMap=="function"?WeakMap:Map,vt=0,at=null,Ue=null,Ge=0,ot=0,Yn=null,Bi=!1,wl=!1,y_=!1,zi=0,Rt=0,Ms=0,Ja=0,v_=0,yr=0,bl=0,kc=null,Wr=null,E_=!1,T_=0,Sf=1/0,Rf=null,Ls=null,Cf=!1,eo=null,Vc=0,w_=0,b_=null,Mc=0,I_=null;function Xn(){if((vt&2)!==0&&Ge!==0)return Ge&-Ge;if(A.T!==null){var i=pl;return i!==0?i:N_()}return Od()}function k0(){yr===0&&(yr=(Ge&536870912)===0||We?Qu():536870912);var i=pr.current;return i!==null&&(i.flags|=32),yr}function xn(i,s,l){(i===at&&ot===2||i.cancelPendingCommit!==null)&&(Il(i,0),Fi(i,Ge,yr,!1)),Ot(i,l),((vt&2)===0||i!==at)&&(i===at&&((vt&2)===0&&(Ja|=l),Rt===4&&Fi(i,Ge,yr,!1)),Yr(i))}function V0(i,s,l){if((vt&6)!==0)throw Error(r(327));var c=!l&&(s&60)===0&&(s&i.expiredLanes)===0||cs(i,s),f=c?zP(i,s):C_(i,s,!0),g=c;do{if(f===0){wl&&!c&&Fi(i,s,0,!1);break}else if(f===6)Fi(i,s,0,!Bi);else{if(l=i.current.alternate,g&&!UP(l)){f=C_(i,s,!1),g=!1;continue}if(f===2){if(g=s,i.errorRecoveryDisabledLanes&g)var T=0;else T=i.pendingLanes&-536870913,T=T!==0?T:T&536870912?536870912:0;if(T!==0){s=T;e:{var b=i;f=kc;var C=b.current.memoizedState.isDehydrated;if(C&&(Il(b,T).flags|=256),T=C_(b,T,!1),T!==2){if(y_&&!C){b.errorRecoveryDisabledLanes|=g,Ja|=g,f=4;break e}g=Wr,Wr=f,g!==null&&A_(g)}f=T}if(g=!1,f!==2)continue}}if(f===1){Il(i,0),Fi(i,s,0,!0);break}e:{switch(c=i,f){case 0:case 1:throw Error(r(345));case 4:if((s&4194176)===s){Fi(c,s,yr,!Bi);break e}break;case 2:Wr=null;break;case 3:case 5:break;default:throw Error(r(329))}if(c.finishedWork=l,c.finishedLanes=s,(s&62914560)===s&&(g=T_+300-Ln(),10<g)){if(Fi(c,s,yr,!Bi),ir(c,0)!==0)break e;c.timeoutHandle=sb(M0.bind(null,c,l,Wr,Rf,E_,s,yr,Ja,bl,Bi,2,-0,0),g);break e}M0(c,l,Wr,Rf,E_,s,yr,Ja,bl,Bi,0,-0,0)}}break}while(!0);Yr(i)}function A_(i){Wr===null?Wr=i:Wr.push.apply(Wr,i)}function M0(i,s,l,c,f,g,T,b,C,M,Z,te,$){var X=s.subtreeFlags;if((X&8192||(X&16785408)===16785408)&&(qc={stylesheets:null,count:0,unsuspend:vx},S0(s),s=Tx(),s!==null)){i.cancelPendingCommit=s(j0.bind(null,i,l,c,f,T,b,C,1,te,$)),Fi(i,g,T,!M);return}j0(i,l,c,f,T,b,C,Z,te,$)}function UP(i){for(var s=i;;){var l=s.tag;if((l===0||l===11||l===15)&&s.flags&16384&&(l=s.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var c=0;c<l.length;c++){var f=l[c],g=f.getSnapshot;f=f.value;try{if(!Kn(g(),f))return!1}catch{return!1}}if(l=s.child,s.subtreeFlags&16384&&l!==null)l.return=s,s=l;else{if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Fi(i,s,l,c){s&=~v_,s&=~Ja,i.suspendedLanes|=s,i.pingedLanes&=~s,c&&(i.warmLanes|=s),c=i.expirationTimes;for(var f=s;0<f;){var g=31-Rn(f),T=1<<g;c[g]=-1,f&=~T}l!==0&&ds(i,l,s)}function Df(){return(vt&6)===0?(Lc(0),!1):!0}function S_(){if(Ue!==null){if(ot===0)var i=Ue.return;else i=Ue,Oi=Wa=null,Ng(i),dl=null,_c=0,i=Ue;for(;i!==null;)O0(i.alternate,i),i=i.return;Ue=null}}function Il(i,s){i.finishedWork=null,i.finishedLanes=0;var l=i.timeoutHandle;l!==-1&&(i.timeoutHandle=-1,rx(l)),l=i.cancelPendingCommit,l!==null&&(i.cancelPendingCommit=null,l()),S_(),at=i,Ue=l=Vs(i.current,null),Ge=s,ot=0,Yn=null,Bi=!1,wl=cs(i,s),y_=!1,bl=yr=v_=Ja=Ms=Rt=0,Wr=kc=null,E_=!1,(s&8)!==0&&(s|=s&32);var c=i.entangledLanes;if(c!==0)for(i=i.entanglements,c&=s;0<c;){var f=31-Rn(c),g=1<<f;s|=i[f],c&=~g}return zi=s,Zd(),l}function L0(i,s){Ve=null,A.H=Qr,s===mc?(s=ZT(),ot=3):s===WT?(s=ZT(),ot=4):ot=s===Yw?8:s!==null&&typeof s=="object"&&typeof s.then=="function"?6:1,Yn=s,Ue===null&&(Rt=1,vf(i,hr(s,i.current)))}function U0(){var i=A.H;return A.H=Qr,i===null?Qr:i}function B0(){var i=A.A;return A.A=MP,i}function R_(){Rt=4,Bi||(Ge&4194176)!==Ge&&pr.current!==null||(wl=!0),(Ms&134217727)===0&&(Ja&134217727)===0||at===null||Fi(at,Ge,yr,!1)}function C_(i,s,l){var c=vt;vt|=2;var f=U0(),g=B0();(at!==i||Ge!==s)&&(Rf=null,Il(i,s)),s=!1;var T=Rt;e:do try{if(ot!==0&&Ue!==null){var b=Ue,C=Yn;switch(ot){case 8:S_(),T=6;break e;case 3:case 2:case 6:pr.current===null&&(s=!0);var M=ot;if(ot=0,Yn=null,Al(i,b,C,M),l&&wl){T=0;break e}break;default:M=ot,ot=0,Yn=null,Al(i,b,C,M)}}BP(),T=Rt;break}catch(Z){L0(i,Z)}while(!0);return s&&i.shellSuspendCounter++,Oi=Wa=null,vt=c,A.H=f,A.A=g,Ue===null&&(at=null,Ge=0,Zd()),T}function BP(){for(;Ue!==null;)z0(Ue)}function zP(i,s){var l=vt;vt|=2;var c=U0(),f=B0();at!==i||Ge!==s?(Rf=null,Sf=Ln()+500,Il(i,s)):wl=cs(i,s);e:do try{if(ot!==0&&Ue!==null){s=Ue;var g=Yn;t:switch(ot){case 1:ot=0,Yn=null,Al(i,s,g,1);break;case 2:if(YT(g)){ot=0,Yn=null,F0(s);break}s=function(){ot===2&&at===i&&(ot=7),Yr(i)},g.then(s,s);break e;case 3:ot=7;break e;case 4:ot=5;break e;case 7:YT(g)?(ot=0,Yn=null,F0(s)):(ot=0,Yn=null,Al(i,s,g,7));break;case 5:var T=null;switch(Ue.tag){case 26:T=Ue.memoizedState;case 5:case 27:var b=Ue;if(!T||gb(T)){ot=0,Yn=null;var C=b.sibling;if(C!==null)Ue=C;else{var M=b.return;M!==null?(Ue=M,Pf(M)):Ue=null}break t}}ot=0,Yn=null,Al(i,s,g,5);break;case 6:ot=0,Yn=null,Al(i,s,g,6);break;case 8:S_(),Rt=6;break e;default:throw Error(r(462))}}FP();break}catch(Z){L0(i,Z)}while(!0);return Oi=Wa=null,A.H=c,A.A=f,vt=l,Ue!==null?0:(at=null,Ge=0,Zd(),Rt)}function FP(){for(;Ue!==null&&!ng();)z0(Ue)}function z0(i){var s=l0(i.alternate,i,zi);i.memoizedProps=i.pendingProps,s===null?Pf(i):Ue=s}function F0(i){var s=i,l=s.alternate;switch(s.tag){case 15:case 0:s=n0(l,s,s.pendingProps,s.type,void 0,Ge);break;case 11:s=n0(l,s,s.pendingProps,s.type.render,s.ref,Ge);break;case 5:Ng(s);default:O0(l,s),s=Ue=P0(s,zi),s=l0(l,s,zi)}i.memoizedProps=i.pendingProps,s===null?Pf(i):Ue=s}function Al(i,s,l,c){Oi=Wa=null,Ng(s),dl=null,_c=0;var f=s.return;try{if(DP(i,f,s,l,Ge)){Rt=1,vf(i,hr(l,i.current)),Ue=null;return}}catch(g){if(f!==null)throw Ue=f,g;Rt=1,vf(i,hr(l,i.current)),Ue=null;return}s.flags&32768?(We||c===1?i=!0:wl||(Ge&536870912)!==0?i=!1:(Bi=i=!0,(c===2||c===3||c===6)&&(c=pr.current,c!==null&&c.tag===13&&(c.flags|=16384))),q0(s,i)):Pf(s)}function Pf(i){var s=i;do{if((s.flags&32768)!==0){q0(s,Bi);return}i=s.return;var l=kP(s.alternate,s,zi);if(l!==null){Ue=l;return}if(s=s.sibling,s!==null){Ue=s;return}Ue=s=i}while(s!==null);Rt===0&&(Rt=5)}function q0(i,s){do{var l=VP(i.alternate,i);if(l!==null){l.flags&=32767,Ue=l;return}if(l=i.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!s&&(i=i.sibling,i!==null)){Ue=i;return}Ue=i=l}while(i!==null);Rt=6,Ue=null}function j0(i,s,l,c,f,g,T,b,C,M){var Z=A.T,te=fe.p;try{fe.p=2,A.T=null,qP(i,s,l,c,te,f,g,T,b,C,M)}finally{A.T=Z,fe.p=te}}function qP(i,s,l,c,f,g,T,b){do Sl();while(eo!==null);if((vt&6)!==0)throw Error(r(327));var C=i.finishedWork;if(c=i.finishedLanes,C===null)return null;if(i.finishedWork=null,i.finishedLanes=0,C===i.current)throw Error(r(177));i.callbackNode=null,i.callbackPriority=0,i.cancelPendingCommit=null;var M=C.lanes|C.childLanes;if(M|=_g,xd(i,c,M,g,T,b),i===at&&(Ue=at=null,Ge=0),(C.subtreeFlags&10256)===0&&(C.flags&10256)===0||Cf||(Cf=!0,w_=M,b_=l,$P(yi,function(){return Sl(),null})),l=(C.flags&15990)!==0,(C.subtreeFlags&15990)!==0||l?(l=A.T,A.T=null,g=fe.p,fe.p=2,T=vt,vt|=4,xP(i,C),b0(C,i),dP(z_,i.containerInfo),qf=!!B_,z_=B_=null,i.current=C,v0(i,C.alternate,C),Hu(),vt=T,fe.p=g,A.T=l):i.current=C,Cf?(Cf=!1,eo=i,Vc=c):H0(i,M),M=i.pendingLanes,M===0&&(Ls=null),$u(C.stateNode),Yr(i),s!==null)for(f=i.onRecoverableError,C=0;C<s.length;C++)M=s[C],f(M.value,{componentStack:M.stack});return(Vc&3)!==0&&Sl(),M=i.pendingLanes,(c&4194218)!==0&&(M&42)!==0?i===I_?Mc++:(Mc=0,I_=i):Mc=0,Lc(0),null}function H0(i,s){(i.pooledCacheLanes&=s)===0&&(s=i.pooledCache,s!=null&&(i.pooledCache=null,vc(s)))}function Sl(){if(eo!==null){var i=eo,s=w_;w_=0;var l=Nd(Vc),c=A.T,f=fe.p;try{if(fe.p=32>l?32:l,A.T=null,eo===null)var g=!1;else{l=b_,b_=null;var T=eo,b=Vc;if(eo=null,Vc=0,(vt&6)!==0)throw Error(r(331));var C=vt;if(vt|=4,C0(T.current),A0(T,T.current,b,l),vt=C,Lc(0,!1),En&&typeof En.onPostCommitFiberRoot=="function")try{En.onPostCommitFiberRoot(ls,T)}catch{}g=!0}return g}finally{fe.p=f,A.T=c,H0(i,s)}}return!1}function G0(i,s,l){s=hr(l,s),s=$g(i.stateNode,s,2),i=xs(i,s,2),i!==null&&(Ot(i,2),Yr(i))}function st(i,s,l){if(i.tag===3)G0(i,i,l);else for(;s!==null;){if(s.tag===3){G0(s,i,l);break}else if(s.tag===1){var c=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Ls===null||!Ls.has(c))){i=hr(l,i),l=Qw(2),c=xs(s,l,2),c!==null&&(Ww(l,c,s,i),Ot(c,2),Yr(c));break}}s=s.return}}function D_(i,s,l){var c=i.pingCache;if(c===null){c=i.pingCache=new LP;var f=new Set;c.set(s,f)}else f=c.get(s),f===void 0&&(f=new Set,c.set(s,f));f.has(l)||(y_=!0,f.add(l),i=jP.bind(null,i,s,l),s.then(i,i))}function jP(i,s,l){var c=i.pingCache;c!==null&&c.delete(s),i.pingedLanes|=i.suspendedLanes&l,i.warmLanes&=~l,at===i&&(Ge&l)===l&&(Rt===4||Rt===3&&(Ge&62914560)===Ge&&300>Ln()-T_?(vt&2)===0&&Il(i,0):v_|=l,bl===Ge&&(bl=0)),Yr(i)}function $0(i,s){s===0&&(s=hs()),i=bs(i,s),i!==null&&(Ot(i,s),Yr(i))}function HP(i){var s=i.memoizedState,l=0;s!==null&&(l=s.retryLane),$0(i,l)}function GP(i,s){var l=0;switch(i.tag){case 13:var c=i.stateNode,f=i.memoizedState;f!==null&&(l=f.retryLane);break;case 19:c=i.stateNode;break;case 22:c=i.stateNode._retryCache;break;default:throw Error(r(314))}c!==null&&c.delete(s),$0(i,l)}function $P(i,s){return Ia(i,s)}var xf=null,Rl=null,P_=!1,Nf=!1,x_=!1,to=0;function Yr(i){i!==Rl&&i.next===null&&(Rl===null?xf=Rl=i:Rl=Rl.next=i),Nf=!0,P_||(P_=!0,QP(KP))}function Lc(i,s){if(!x_&&Nf){x_=!0;do for(var l=!1,c=xf;c!==null;){if(i!==0){var f=c.pendingLanes;if(f===0)var g=0;else{var T=c.suspendedLanes,b=c.pingedLanes;g=(1<<31-Rn(42|i)+1)-1,g&=f&~(T&~b),g=g&201326677?g&201326677|1:g?g|2:0}g!==0&&(l=!0,W0(c,g))}else g=Ge,g=ir(c,c===at?g:0),(g&3)===0||cs(c,g)||(l=!0,W0(c,g));c=c.next}while(l);x_=!1}}function KP(){Nf=P_=!1;var i=0;to!==0&&(nx()&&(i=to),to=0);for(var s=Ln(),l=null,c=xf;c!==null;){var f=c.next,g=K0(c,s);g===0?(c.next=null,l===null?xf=f:l.next=f,f===null&&(Rl=l)):(l=c,(i!==0||(g&3)!==0)&&(Nf=!0)),c=f}Lc(i)}function K0(i,s){for(var l=i.suspendedLanes,c=i.pingedLanes,f=i.expirationTimes,g=i.pendingLanes&-62914561;0<g;){var T=31-Rn(g),b=1<<T,C=f[T];C===-1?((b&l)===0||(b&c)!==0)&&(f[T]=Go(b,s)):C<=s&&(i.expiredLanes|=b),g&=~b}if(s=at,l=Ge,l=ir(i,i===s?l:0),c=i.callbackNode,l===0||i===s&&ot===2||i.cancelPendingCommit!==null)return c!==null&&c!==null&&Ho(c),i.callbackNode=null,i.callbackPriority=0;if((l&3)===0||cs(i,l)){if(s=l&-l,s===i.callbackPriority)return s;switch(c!==null&&Ho(c),Nd(l)){case 2:case 8:l=en;break;case 32:l=yi;break;case 268435456:l=Gu;break;default:l=yi}return c=Q0.bind(null,i),l=Ia(l,c),i.callbackPriority=s,i.callbackNode=l,s}return c!==null&&c!==null&&Ho(c),i.callbackPriority=2,i.callbackNode=null,2}function Q0(i,s){var l=i.callbackNode;if(Sl()&&i.callbackNode!==l)return null;var c=Ge;return c=ir(i,i===at?c:0),c===0?null:(V0(i,c,s),K0(i,Ln()),i.callbackNode!=null&&i.callbackNode===l?Q0.bind(null,i):null)}function W0(i,s){if(Sl())return null;V0(i,s,!0)}function QP(i){ix(function(){(vt&6)!==0?Ia(Gt,i):i()})}function N_(){return to===0&&(to=Qu()),to}function Y0(i){return i==null||typeof i=="symbol"||typeof i=="boolean"?null:typeof i=="function"?i:Br(""+i)}function X0(i,s){var l=s.ownerDocument.createElement("input");return l.name=s.name,l.value=s.value,i.id&&l.setAttribute("form",i.id),s.parentNode.insertBefore(l,s),i=new FormData(i),l.parentNode.removeChild(l),i}function WP(i,s,l,c,f){if(s==="submit"&&l&&l.stateNode===f){var g=Y0((f[$t]||null).action),T=c.submitter;T&&(s=(s=T[$t]||null)?Y0(s.formAction):T.getAttribute("formAction"),s!==null&&(g=s,T=null));var b=new Zo("action","action",null,c,f);i.push({event:b,listeners:[{instance:null,listener:function(){if(c.defaultPrevented){if(to!==0){var C=T?X0(f,T):new FormData(f);Fg(l,{pending:!0,data:C,method:f.method,action:g},null,C)}}else typeof g=="function"&&(b.preventDefault(),C=T?X0(f,T):new FormData(f),Fg(l,{pending:!0,data:C,method:f.method,action:g},g,C))},currentTarget:f}]})}}for(var O_=0;O_<jT.length;O_++){var k_=jT[O_],YP=k_.toLowerCase(),XP=k_[0].toUpperCase()+k_.slice(1);Sr(YP,"on"+XP)}Sr(UT,"onAnimationEnd"),Sr(BT,"onAnimationIteration"),Sr(zT,"onAnimationStart"),Sr("dblclick","onDoubleClick"),Sr("focusin","onFocus"),Sr("focusout","onBlur"),Sr(pP,"onTransitionRun"),Sr(mP,"onTransitionStart"),Sr(gP,"onTransitionCancel"),Sr(FT,"onTransitionEnd"),Un("onMouseEnter",["mouseout","mouseover"]),Un("onMouseLeave",["mouseout","mouseover"]),Un("onPointerEnter",["pointerout","pointerover"]),Un("onPointerLeave",["pointerout","pointerover"]),Gn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Gn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Gn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Gn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Gn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Gn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Uc="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ZP=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Uc));function Z0(i,s){s=(s&4)!==0;for(var l=0;l<i.length;l++){var c=i[l],f=c.event;c=c.listeners;e:{var g=void 0;if(s)for(var T=c.length-1;0<=T;T--){var b=c[T],C=b.instance,M=b.currentTarget;if(b=b.listener,C!==g&&f.isPropagationStopped())break e;g=b,f.currentTarget=M;try{g(f)}catch(Z){yf(Z)}f.currentTarget=null,g=C}else for(T=0;T<c.length;T++){if(b=c[T],C=b.instance,M=b.currentTarget,b=b.listener,C!==g&&f.isPropagationStopped())break e;g=b,f.currentTarget=M;try{g(f)}catch(Z){yf(Z)}f.currentTarget=null,g=C}}}}function qe(i,s){var l=s[Sa];l===void 0&&(l=s[Sa]=new Set);var c=i+"__bubble";l.has(c)||(J0(s,i,2,!1),l.add(c))}function V_(i,s,l){var c=0;s&&(c|=4),J0(l,i,c,s)}var Of="_reactListening"+Math.random().toString(36).slice(2);function M_(i){if(!i[Of]){i[Of]=!0,Yu.forEach(function(l){l!=="selectionchange"&&(ZP.has(l)||V_(l,!1,i),V_(l,!0,i))});var s=i.nodeType===9?i:i.ownerDocument;s===null||s[Of]||(s[Of]=!0,V_("selectionchange",!1,s))}}function J0(i,s,l,c){switch(wb(s)){case 2:var f=Ix;break;case 8:f=Ax;break;default:f=W_}l=f.bind(null,s,l,i),f=void 0,!lr||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(f=!0),c?f!==void 0?i.addEventListener(s,l,{capture:!0,passive:f}):i.addEventListener(s,l,!0):f!==void 0?i.addEventListener(s,l,{passive:f}):i.addEventListener(s,l,!1)}function L_(i,s,l,c,f){var g=c;if((s&1)===0&&(s&2)===0&&c!==null)e:for(;;){if(c===null)return;var T=c.tag;if(T===3||T===4){var b=c.stateNode.containerInfo;if(b===f||b.nodeType===8&&b.parentNode===f)break;if(T===4)for(T=c.return;T!==null;){var C=T.tag;if((C===3||C===4)&&(C=T.stateNode.containerInfo,C===f||C.nodeType===8&&C.parentNode===f))return;T=T.return}for(;b!==null;){if(T=Ar(b),T===null)return;if(C=T.tag,C===5||C===6||C===26||C===27){c=g=T;continue e}b=b.parentNode}}c=c.return}Ld(function(){var M=g,Z=Xo(l),te=[];e:{var $=qT.get(i);if($!==void 0){var X=Zo,ve=i;switch(i){case"keypress":if(Fr(l)===0)break e;case"keydown":case"keyup":X=il;break;case"focusin":ve="focus",X=tl;break;case"focusout":ve="blur",X=tl;break;case"beforeblur":case"afterblur":X=tl;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":X=ur;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":X=ug;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":X=Gd;break;case UT:case BT:case zT:X=nl;break;case FT:X=Kd;break;case"scroll":case"scrollend":X=Ud;break;case"wheel":X=sl;break;case"copy":case"cut":case"paste":X=rl;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":X=lc;break;case"toggle":case"beforetoggle":X=Wd}var De=(s&4)!==0,Ct=!De&&(i==="scroll"||i==="scrollend"),B=De?$!==null?$+"Capture":null:$;De=[];for(var k=M,H;k!==null;){var J=k;if(H=J.stateNode,J=J.tag,J!==5&&J!==26&&J!==27||H===null||B===null||(J=xa(k,B),J!=null&&De.push(Bc(k,J,H))),Ct)break;k=k.return}0<De.length&&($=new X($,ve,null,l,Z),te.push({event:$,listeners:De}))}}if((s&7)===0){e:{if($=i==="mouseover"||i==="pointerover",X=i==="mouseout"||i==="pointerout",$&&l!==or&&(ve=l.relatedTarget||l.fromElement)&&(Ar(ve)||ve[vi]))break e;if((X||$)&&($=Z.window===Z?Z:($=Z.ownerDocument)?$.defaultView||$.parentWindow:window,X?(ve=l.relatedTarget||l.toElement,X=M,ve=ve?Ar(ve):null,ve!==null&&(Ct=Te(ve),De=ve.tag,ve!==Ct||De!==5&&De!==27&&De!==6)&&(ve=null)):(X=null,ve=M),X!==ve)){if(De=ur,J="onMouseLeave",B="onMouseEnter",k="mouse",(i==="pointerout"||i==="pointerover")&&(De=lc,J="onPointerLeave",B="onPointerEnter",k="pointer"),Ct=X==null?$:gs(X),H=ve==null?$:gs(ve),$=new De(J,k+"leave",X,l,Z),$.target=Ct,$.relatedTarget=H,J=null,Ar(Z)===M&&(De=new De(B,k+"enter",ve,l,Z),De.target=H,De.relatedTarget=Ct,J=De),Ct=J,X&&ve)t:{for(De=X,B=ve,k=0,H=De;H;H=Cl(H))k++;for(H=0,J=B;J;J=Cl(J))H++;for(;0<k-H;)De=Cl(De),k--;for(;0<H-k;)B=Cl(B),H--;for(;k--;){if(De===B||B!==null&&De===B.alternate)break t;De=Cl(De),B=Cl(B)}De=null}else De=null;X!==null&&eb(te,$,X,De,!1),ve!==null&&Ct!==null&&eb(te,Ct,ve,De,!0)}}e:{if($=M?gs(M):window,X=$.nodeName&&$.nodeName.toLowerCase(),X==="select"||X==="input"&&$.type==="file")var _e=RT;else if(Qt($))if(CT)_e=cP;else{_e=lP;var Le=oP}else X=$.nodeName,!X||X.toLowerCase()!=="input"||$.type!=="checkbox"&&$.type!=="radio"?M&&tc(M.elementType)&&(_e=RT):_e=uP;if(_e&&(_e=_e(i,M))){Ri(te,_e,l,Z);break e}Le&&Le(i,$,M),i==="focusout"&&M&&$.type==="number"&&M.memoizedProps.value!=null&&Yo($,"number",$.value)}switch(Le=M?gs(M):window,i){case"focusin":(Qt(Le)||Le.contentEditable==="true")&&(al=Le,pg=M,hc=null);break;case"focusout":hc=pg=al=null;break;case"mousedown":mg=!0;break;case"contextmenu":case"mouseup":case"dragend":mg=!1,MT(te,l,Z);break;case"selectionchange":if(fP)break;case"keydown":case"keyup":MT(te,l,Z)}var we;if(Hr)e:{switch(i){case"compositionstart":var Ae="onCompositionStart";break e;case"compositionend":Ae="onCompositionEnd";break e;case"compositionupdate":Ae="onCompositionUpdate";break e}Ae=void 0}else je?Q(i,l)&&(Ae="onCompositionEnd"):i==="keydown"&&l.keyCode===229&&(Ae="onCompositionStart");Ae&&(E&&l.locale!=="ko"&&(je||Ae!=="onCompositionStart"?Ae==="onCompositionEnd"&&je&&(we=rc()):(zr=Z,ws="value"in zr?zr.value:zr.textContent,je=!0)),Le=kf(M,Ae),0<Le.length&&(Ae=new ac(Ae,i,null,l,Z),te.push({event:Ae,listeners:Le}),we?Ae.data=we:(we=ue(l),we!==null&&(Ae.data=we)))),(we=_?Kt(i,l):He(i,l))&&(Ae=kf(M,"onBeforeInput"),0<Ae.length&&(Le=new ac("onBeforeInput","beforeinput",null,l,Z),te.push({event:Le,listeners:Ae}),Le.data=we)),WP(te,i,M,l,Z)}Z0(te,s)})}function Bc(i,s,l){return{instance:i,listener:s,currentTarget:l}}function kf(i,s){for(var l=s+"Capture",c=[];i!==null;){var f=i,g=f.stateNode;f=f.tag,f!==5&&f!==26&&f!==27||g===null||(f=xa(i,l),f!=null&&c.unshift(Bc(i,f,g)),f=xa(i,s),f!=null&&c.push(Bc(i,f,g))),i=i.return}return c}function Cl(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5&&i.tag!==27);return i||null}function eb(i,s,l,c,f){for(var g=s._reactName,T=[];l!==null&&l!==c;){var b=l,C=b.alternate,M=b.stateNode;if(b=b.tag,C!==null&&C===c)break;b!==5&&b!==26&&b!==27||M===null||(C=M,f?(M=xa(l,g),M!=null&&T.unshift(Bc(l,M,C))):f||(M=xa(l,g),M!=null&&T.push(Bc(l,M,C)))),l=l.return}T.length!==0&&i.push({event:s,listeners:T})}var JP=/\r\n?/g,ex=/\u0000|\uFFFD/g;function tb(i){return(typeof i=="string"?i:""+i).replace(JP,`
`).replace(ex,"")}function nb(i,s){return s=tb(s),tb(i)===s}function Vf(){}function it(i,s,l,c,f,g){switch(l){case"children":typeof c=="string"?s==="body"||s==="textarea"&&c===""||ar(i,c):(typeof c=="number"||typeof c=="bigint")&&s!=="body"&&ar(i,""+c);break;case"className":vs(i,"class",c);break;case"tabIndex":vs(i,"tabindex",c);break;case"dir":case"role":case"viewBox":case"width":case"height":vs(i,l,c);break;case"style":Md(i,c,g);break;case"data":if(s!=="object"){vs(i,"data",c);break}case"src":case"href":if(c===""&&(s!=="a"||l!=="href")){i.removeAttribute(l);break}if(c==null||typeof c=="function"||typeof c=="symbol"||typeof c=="boolean"){i.removeAttribute(l);break}c=Br(""+c),i.setAttribute(l,c);break;case"action":case"formAction":if(typeof c=="function"){i.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof g=="function"&&(l==="formAction"?(s!=="input"&&it(i,s,"name",f.name,f,null),it(i,s,"formEncType",f.formEncType,f,null),it(i,s,"formMethod",f.formMethod,f,null),it(i,s,"formTarget",f.formTarget,f,null)):(it(i,s,"encType",f.encType,f,null),it(i,s,"method",f.method,f,null),it(i,s,"target",f.target,f,null)));if(c==null||typeof c=="symbol"||typeof c=="boolean"){i.removeAttribute(l);break}c=Br(""+c),i.setAttribute(l,c);break;case"onClick":c!=null&&(i.onclick=Vf);break;case"onScroll":c!=null&&qe("scroll",i);break;case"onScrollEnd":c!=null&&qe("scrollend",i);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(r(61));if(l=c.__html,l!=null){if(f.children!=null)throw Error(r(60));i.innerHTML=l}}break;case"multiple":i.multiple=c&&typeof c!="function"&&typeof c!="symbol";break;case"muted":i.muted=c&&typeof c!="function"&&typeof c!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(c==null||typeof c=="function"||typeof c=="boolean"||typeof c=="symbol"){i.removeAttribute("xlink:href");break}l=Br(""+c),i.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":c!=null&&typeof c!="function"&&typeof c!="symbol"?i.setAttribute(l,""+c):i.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":c&&typeof c!="function"&&typeof c!="symbol"?i.setAttribute(l,""):i.removeAttribute(l);break;case"capture":case"download":c===!0?i.setAttribute(l,""):c!==!1&&c!=null&&typeof c!="function"&&typeof c!="symbol"?i.setAttribute(l,c):i.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":c!=null&&typeof c!="function"&&typeof c!="symbol"&&!isNaN(c)&&1<=c?i.setAttribute(l,c):i.removeAttribute(l);break;case"rowSpan":case"start":c==null||typeof c=="function"||typeof c=="symbol"||isNaN(c)?i.removeAttribute(l):i.setAttribute(l,c);break;case"popover":qe("beforetoggle",i),qe("toggle",i),ys(i,"popover",c);break;case"xlinkActuate":sr(i,"http://www.w3.org/1999/xlink","xlink:actuate",c);break;case"xlinkArcrole":sr(i,"http://www.w3.org/1999/xlink","xlink:arcrole",c);break;case"xlinkRole":sr(i,"http://www.w3.org/1999/xlink","xlink:role",c);break;case"xlinkShow":sr(i,"http://www.w3.org/1999/xlink","xlink:show",c);break;case"xlinkTitle":sr(i,"http://www.w3.org/1999/xlink","xlink:title",c);break;case"xlinkType":sr(i,"http://www.w3.org/1999/xlink","xlink:type",c);break;case"xmlBase":sr(i,"http://www.w3.org/XML/1998/namespace","xml:base",c);break;case"xmlLang":sr(i,"http://www.w3.org/XML/1998/namespace","xml:lang",c);break;case"xmlSpace":sr(i,"http://www.w3.org/XML/1998/namespace","xml:space",c);break;case"is":ys(i,"is",c);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=og.get(l)||l,ys(i,l,c))}}function U_(i,s,l,c,f,g){switch(l){case"style":Md(i,c,g);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(r(61));if(l=c.__html,l!=null){if(f.children!=null)throw Error(r(60));i.innerHTML=l}}break;case"children":typeof c=="string"?ar(i,c):(typeof c=="number"||typeof c=="bigint")&&ar(i,""+c);break;case"onScroll":c!=null&&qe("scroll",i);break;case"onScrollEnd":c!=null&&qe("scrollend",i);break;case"onClick":c!=null&&(i.onclick=Vf);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Qo.hasOwnProperty(l))e:{if(l[0]==="o"&&l[1]==="n"&&(f=l.endsWith("Capture"),s=l.slice(2,f?l.length-7:void 0),g=i[$t]||null,g=g!=null?g[l]:null,typeof g=="function"&&i.removeEventListener(s,g,f),typeof c=="function")){typeof g!="function"&&g!==null&&(l in i?i[l]=null:i.hasAttribute(l)&&i.removeAttribute(l)),i.addEventListener(s,c,f);break e}l in i?i[l]=c:c===!0?i.setAttribute(l,""):ys(i,l,c)}}}function mn(i,s,l){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":qe("error",i),qe("load",i);var c=!1,f=!1,g;for(g in l)if(l.hasOwnProperty(g)){var T=l[g];if(T!=null)switch(g){case"src":c=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,s));default:it(i,s,g,T,l,null)}}f&&it(i,s,"srcSet",l.srcSet,l,null),c&&it(i,s,"src",l.src,l,null);return;case"input":qe("invalid",i);var b=g=T=f=null,C=null,M=null;for(c in l)if(l.hasOwnProperty(c)){var Z=l[c];if(Z!=null)switch(c){case"name":f=Z;break;case"type":T=Z;break;case"checked":C=Z;break;case"defaultChecked":M=Z;break;case"value":g=Z;break;case"defaultValue":b=Z;break;case"children":case"dangerouslySetInnerHTML":if(Z!=null)throw Error(r(137,s));break;default:it(i,s,c,Z,l,null)}}Da(i,g,b,C,M,T,f,!1),Ca(i);return;case"select":qe("invalid",i),c=T=g=null;for(f in l)if(l.hasOwnProperty(f)&&(b=l[f],b!=null))switch(f){case"value":g=b;break;case"defaultValue":T=b;break;case"multiple":c=b;default:it(i,s,f,b,l,null)}s=g,l=T,i.multiple=!!c,s!=null?Qe(i,!!c,s,!1):l!=null&&Qe(i,!!c,l,!0);return;case"textarea":qe("invalid",i),g=f=c=null;for(T in l)if(l.hasOwnProperty(T)&&(b=l[T],b!=null))switch(T){case"value":c=b;break;case"defaultValue":f=b;break;case"children":g=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(r(91));break;default:it(i,s,T,b,l,null)}Ts(i,c,f,g),Ca(i);return;case"option":for(C in l)if(l.hasOwnProperty(C)&&(c=l[C],c!=null))switch(C){case"selected":i.selected=c&&typeof c!="function"&&typeof c!="symbol";break;default:it(i,s,C,c,l,null)}return;case"dialog":qe("cancel",i),qe("close",i);break;case"iframe":case"object":qe("load",i);break;case"video":case"audio":for(c=0;c<Uc.length;c++)qe(Uc[c],i);break;case"image":qe("error",i),qe("load",i);break;case"details":qe("toggle",i);break;case"embed":case"source":case"link":qe("error",i),qe("load",i);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(M in l)if(l.hasOwnProperty(M)&&(c=l[M],c!=null))switch(M){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,s));default:it(i,s,M,c,l,null)}return;default:if(tc(s)){for(Z in l)l.hasOwnProperty(Z)&&(c=l[Z],c!==void 0&&U_(i,s,Z,c,l,void 0));return}}for(b in l)l.hasOwnProperty(b)&&(c=l[b],c!=null&&it(i,s,b,c,l,null))}function tx(i,s,l,c){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,g=null,T=null,b=null,C=null,M=null,Z=null;for(X in l){var te=l[X];if(l.hasOwnProperty(X)&&te!=null)switch(X){case"checked":break;case"value":break;case"defaultValue":C=te;default:c.hasOwnProperty(X)||it(i,s,X,null,c,te)}}for(var $ in c){var X=c[$];if(te=l[$],c.hasOwnProperty($)&&(X!=null||te!=null))switch($){case"type":g=X;break;case"name":f=X;break;case"checked":M=X;break;case"defaultChecked":Z=X;break;case"value":T=X;break;case"defaultValue":b=X;break;case"children":case"dangerouslySetInnerHTML":if(X!=null)throw Error(r(137,s));break;default:X!==te&&it(i,s,$,X,c,te)}}Es(i,T,b,C,M,Z,g,f);return;case"select":X=T=b=$=null;for(g in l)if(C=l[g],l.hasOwnProperty(g)&&C!=null)switch(g){case"value":break;case"multiple":X=C;default:c.hasOwnProperty(g)||it(i,s,g,null,c,C)}for(f in c)if(g=c[f],C=l[f],c.hasOwnProperty(f)&&(g!=null||C!=null))switch(f){case"value":$=g;break;case"defaultValue":b=g;break;case"multiple":T=g;default:g!==C&&it(i,s,f,g,c,C)}s=b,l=T,c=X,$!=null?Qe(i,!!l,$,!1):!!c!=!!l&&(s!=null?Qe(i,!!l,s,!0):Qe(i,!!l,l?[]:"",!1));return;case"textarea":X=$=null;for(b in l)if(f=l[b],l.hasOwnProperty(b)&&f!=null&&!c.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:it(i,s,b,null,c,f)}for(T in c)if(f=c[T],g=l[T],c.hasOwnProperty(T)&&(f!=null||g!=null))switch(T){case"value":$=f;break;case"defaultValue":X=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(r(91));break;default:f!==g&&it(i,s,T,f,c,g)}Pa(i,$,X);return;case"option":for(var ve in l)if($=l[ve],l.hasOwnProperty(ve)&&$!=null&&!c.hasOwnProperty(ve))switch(ve){case"selected":i.selected=!1;break;default:it(i,s,ve,null,c,$)}for(C in c)if($=c[C],X=l[C],c.hasOwnProperty(C)&&$!==X&&($!=null||X!=null))switch(C){case"selected":i.selected=$&&typeof $!="function"&&typeof $!="symbol";break;default:it(i,s,C,$,c,X)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var De in l)$=l[De],l.hasOwnProperty(De)&&$!=null&&!c.hasOwnProperty(De)&&it(i,s,De,null,c,$);for(M in c)if($=c[M],X=l[M],c.hasOwnProperty(M)&&$!==X&&($!=null||X!=null))switch(M){case"children":case"dangerouslySetInnerHTML":if($!=null)throw Error(r(137,s));break;default:it(i,s,M,$,c,X)}return;default:if(tc(s)){for(var Ct in l)$=l[Ct],l.hasOwnProperty(Ct)&&$!==void 0&&!c.hasOwnProperty(Ct)&&U_(i,s,Ct,void 0,c,$);for(Z in c)$=c[Z],X=l[Z],!c.hasOwnProperty(Z)||$===X||$===void 0&&X===void 0||U_(i,s,Z,$,c,X);return}}for(var B in l)$=l[B],l.hasOwnProperty(B)&&$!=null&&!c.hasOwnProperty(B)&&it(i,s,B,null,c,$);for(te in c)$=c[te],X=l[te],!c.hasOwnProperty(te)||$===X||$==null&&X==null||it(i,s,te,$,c,X)}var B_=null,z_=null;function Mf(i){return i.nodeType===9?i:i.ownerDocument}function rb(i){switch(i){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ib(i,s){if(i===0)switch(s){case"svg":return 1;case"math":return 2;default:return 0}return i===1&&s==="foreignObject"?0:i}function F_(i,s){return i==="textarea"||i==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.children=="bigint"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var q_=null;function nx(){var i=window.event;return i&&i.type==="popstate"?i===q_?!1:(q_=i,!0):(q_=null,!1)}var sb=typeof setTimeout=="function"?setTimeout:void 0,rx=typeof clearTimeout=="function"?clearTimeout:void 0,ab=typeof Promise=="function"?Promise:void 0,ix=typeof queueMicrotask=="function"?queueMicrotask:typeof ab<"u"?function(i){return ab.resolve(null).then(i).catch(sx)}:sb;function sx(i){setTimeout(function(){throw i})}function j_(i,s){var l=s,c=0;do{var f=l.nextSibling;if(i.removeChild(l),f&&f.nodeType===8)if(l=f.data,l==="/$"){if(c===0){i.removeChild(f),Kc(s);return}c--}else l!=="$"&&l!=="$?"&&l!=="$!"||c++;l=f}while(l);Kc(s)}function H_(i){var s=i.firstChild;for(s&&s.nodeType===10&&(s=s.nextSibling);s;){var l=s;switch(s=s.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":H_(l),Ra(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}i.removeChild(l)}}function ax(i,s,l,c){for(;i.nodeType===1;){var f=l;if(i.nodeName.toLowerCase()!==s.toLowerCase()){if(!c&&(i.nodeName!=="INPUT"||i.type!=="hidden"))break}else if(c){if(!i[ms])switch(s){case"meta":if(!i.hasAttribute("itemprop"))break;return i;case"link":if(g=i.getAttribute("rel"),g==="stylesheet"&&i.hasAttribute("data-precedence"))break;if(g!==f.rel||i.getAttribute("href")!==(f.href==null?null:f.href)||i.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||i.getAttribute("title")!==(f.title==null?null:f.title))break;return i;case"style":if(i.hasAttribute("data-precedence"))break;return i;case"script":if(g=i.getAttribute("src"),(g!==(f.src==null?null:f.src)||i.getAttribute("type")!==(f.type==null?null:f.type)||i.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&g&&i.hasAttribute("async")&&!i.hasAttribute("itemprop"))break;return i;default:return i}}else if(s==="input"&&i.type==="hidden"){var g=f.name==null?null:""+f.name;if(f.type==="hidden"&&i.getAttribute("name")===g)return i}else return i;if(i=Dr(i.nextSibling),i===null)break}return null}function ox(i,s,l){if(s==="")return null;for(;i.nodeType!==3;)if((i.nodeType!==1||i.nodeName!=="INPUT"||i.type!=="hidden")&&!l||(i=Dr(i.nextSibling),i===null))return null;return i}function Dr(i){for(;i!=null;i=i.nextSibling){var s=i.nodeType;if(s===1||s===3)break;if(s===8){if(s=i.data,s==="$"||s==="$!"||s==="$?"||s==="F!"||s==="F")break;if(s==="/$")return null}}return i}function ob(i){i=i.previousSibling;for(var s=0;i;){if(i.nodeType===8){var l=i.data;if(l==="$"||l==="$!"||l==="$?"){if(s===0)return i;s--}else l==="/$"&&s++}i=i.previousSibling}return null}function lb(i,s,l){switch(s=Mf(l),i){case"html":if(i=s.documentElement,!i)throw Error(r(452));return i;case"head":if(i=s.head,!i)throw Error(r(453));return i;case"body":if(i=s.body,!i)throw Error(r(454));return i;default:throw Error(r(451))}}var vr=new Map,ub=new Set;function Lf(i){return typeof i.getRootNode=="function"?i.getRootNode():i.ownerDocument}var qi=fe.d;fe.d={f:lx,r:ux,D:cx,C:hx,L:dx,m:fx,X:mx,S:px,M:gx};function lx(){var i=qi.f(),s=Df();return i||s}function ux(i){var s=Ei(i);s!==null&&s.tag===5&&s.type==="form"?Mw(s):qi.r(i)}var Dl=typeof document>"u"?null:document;function cb(i,s,l){var c=Dl;if(c&&typeof s=="string"&&s){var f=At(s);f='link[rel="'+i+'"][href="'+f+'"]',typeof l=="string"&&(f+='[crossorigin="'+l+'"]'),ub.has(f)||(ub.add(f),i={rel:i,crossOrigin:l,href:s},c.querySelector(f)===null&&(s=c.createElement("link"),mn(s,"link",i),_t(s),c.head.appendChild(s)))}}function cx(i){qi.D(i),cb("dns-prefetch",i,null)}function hx(i,s){qi.C(i,s),cb("preconnect",i,s)}function dx(i,s,l){qi.L(i,s,l);var c=Dl;if(c&&i&&s){var f='link[rel="preload"][as="'+At(s)+'"]';s==="image"&&l&&l.imageSrcSet?(f+='[imagesrcset="'+At(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(f+='[imagesizes="'+At(l.imageSizes)+'"]')):f+='[href="'+At(i)+'"]';var g=f;switch(s){case"style":g=Pl(i);break;case"script":g=xl(i)}vr.has(g)||(i=x({rel:"preload",href:s==="image"&&l&&l.imageSrcSet?void 0:i,as:s},l),vr.set(g,i),c.querySelector(f)!==null||s==="style"&&c.querySelector(zc(g))||s==="script"&&c.querySelector(Fc(g))||(s=c.createElement("link"),mn(s,"link",i),_t(s),c.head.appendChild(s)))}}function fx(i,s){qi.m(i,s);var l=Dl;if(l&&i){var c=s&&typeof s.as=="string"?s.as:"script",f='link[rel="modulepreload"][as="'+At(c)+'"][href="'+At(i)+'"]',g=f;switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":g=xl(i)}if(!vr.has(g)&&(i=x({rel:"modulepreload",href:i},s),vr.set(g,i),l.querySelector(f)===null)){switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(Fc(g)))return}c=l.createElement("link"),mn(c,"link",i),_t(c),l.head.appendChild(c)}}}function px(i,s,l){qi.S(i,s,l);var c=Dl;if(c&&i){var f=_s(c).hoistableStyles,g=Pl(i);s=s||"default";var T=f.get(g);if(!T){var b={loading:0,preload:null};if(T=c.querySelector(zc(g)))b.loading=5;else{i=x({rel:"stylesheet",href:i,"data-precedence":s},l),(l=vr.get(g))&&G_(i,l);var C=T=c.createElement("link");_t(C),mn(C,"link",i),C._p=new Promise(function(M,Z){C.onload=M,C.onerror=Z}),C.addEventListener("load",function(){b.loading|=1}),C.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Uf(T,s,c)}T={type:"stylesheet",instance:T,count:1,state:b},f.set(g,T)}}}function mx(i,s){qi.X(i,s);var l=Dl;if(l&&i){var c=_s(l).hoistableScripts,f=xl(i),g=c.get(f);g||(g=l.querySelector(Fc(f)),g||(i=x({src:i,async:!0},s),(s=vr.get(f))&&$_(i,s),g=l.createElement("script"),_t(g),mn(g,"link",i),l.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},c.set(f,g))}}function gx(i,s){qi.M(i,s);var l=Dl;if(l&&i){var c=_s(l).hoistableScripts,f=xl(i),g=c.get(f);g||(g=l.querySelector(Fc(f)),g||(i=x({src:i,async:!0,type:"module"},s),(s=vr.get(f))&&$_(i,s),g=l.createElement("script"),_t(g),mn(g,"link",i),l.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},c.set(f,g))}}function hb(i,s,l,c){var f=(f=rr.current)?Lf(f):null;if(!f)throw Error(r(446));switch(i){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(s=Pl(l.href),l=_s(f).hoistableStyles,c=l.get(s),c||(c={type:"style",instance:null,count:0,state:null},l.set(s,c)),c):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){i=Pl(l.href);var g=_s(f).hoistableStyles,T=g.get(i);if(T||(f=f.ownerDocument||f,T={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},g.set(i,T),(g=f.querySelector(zc(i)))&&!g._p&&(T.instance=g,T.state.loading=5),vr.has(i)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},vr.set(i,l),g||_x(f,i,l,T.state))),s&&c===null)throw Error(r(528,""));return T}if(s&&c!==null)throw Error(r(529,""));return null;case"script":return s=l.async,l=l.src,typeof l=="string"&&s&&typeof s!="function"&&typeof s!="symbol"?(s=xl(l),l=_s(f).hoistableScripts,c=l.get(s),c||(c={type:"script",instance:null,count:0,state:null},l.set(s,c)),c):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,i))}}function Pl(i){return'href="'+At(i)+'"'}function zc(i){return'link[rel="stylesheet"]['+i+"]"}function db(i){return x({},i,{"data-precedence":i.precedence,precedence:null})}function _x(i,s,l,c){i.querySelector('link[rel="preload"][as="style"]['+s+"]")?c.loading=1:(s=i.createElement("link"),c.preload=s,s.addEventListener("load",function(){return c.loading|=1}),s.addEventListener("error",function(){return c.loading|=2}),mn(s,"link",l),_t(s),i.head.appendChild(s))}function xl(i){return'[src="'+At(i)+'"]'}function Fc(i){return"script[async]"+i}function fb(i,s,l){if(s.count++,s.instance===null)switch(s.type){case"style":var c=i.querySelector('style[data-href~="'+At(l.href)+'"]');if(c)return s.instance=c,_t(c),c;var f=x({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return c=(i.ownerDocument||i).createElement("style"),_t(c),mn(c,"style",f),Uf(c,l.precedence,i),s.instance=c;case"stylesheet":f=Pl(l.href);var g=i.querySelector(zc(f));if(g)return s.state.loading|=4,s.instance=g,_t(g),g;c=db(l),(f=vr.get(f))&&G_(c,f),g=(i.ownerDocument||i).createElement("link"),_t(g);var T=g;return T._p=new Promise(function(b,C){T.onload=b,T.onerror=C}),mn(g,"link",c),s.state.loading|=4,Uf(g,l.precedence,i),s.instance=g;case"script":return g=xl(l.src),(f=i.querySelector(Fc(g)))?(s.instance=f,_t(f),f):(c=l,(f=vr.get(g))&&(c=x({},l),$_(c,f)),i=i.ownerDocument||i,f=i.createElement("script"),_t(f),mn(f,"link",c),i.head.appendChild(f),s.instance=f);case"void":return null;default:throw Error(r(443,s.type))}else s.type==="stylesheet"&&(s.state.loading&4)===0&&(c=s.instance,s.state.loading|=4,Uf(c,l.precedence,i));return s.instance}function Uf(i,s,l){for(var c=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=c.length?c[c.length-1]:null,g=f,T=0;T<c.length;T++){var b=c[T];if(b.dataset.precedence===s)g=b;else if(g!==f)break}g?g.parentNode.insertBefore(i,g.nextSibling):(s=l.nodeType===9?l.head:l,s.insertBefore(i,s.firstChild))}function G_(i,s){i.crossOrigin==null&&(i.crossOrigin=s.crossOrigin),i.referrerPolicy==null&&(i.referrerPolicy=s.referrerPolicy),i.title==null&&(i.title=s.title)}function $_(i,s){i.crossOrigin==null&&(i.crossOrigin=s.crossOrigin),i.referrerPolicy==null&&(i.referrerPolicy=s.referrerPolicy),i.integrity==null&&(i.integrity=s.integrity)}var Bf=null;function pb(i,s,l){if(Bf===null){var c=new Map,f=Bf=new Map;f.set(l,c)}else f=Bf,c=f.get(l),c||(c=new Map,f.set(l,c));if(c.has(i))return c;for(c.set(i,null),l=l.getElementsByTagName(i),f=0;f<l.length;f++){var g=l[f];if(!(g[ms]||g[tn]||i==="link"&&g.getAttribute("rel")==="stylesheet")&&g.namespaceURI!=="http://www.w3.org/2000/svg"){var T=g.getAttribute(s)||"";T=i+T;var b=c.get(T);b?b.push(g):c.set(T,[g])}}return c}function mb(i,s,l){i=i.ownerDocument||i,i.head.insertBefore(l,s==="title"?i.querySelector("head > title"):null)}function yx(i,s,l){if(l===1||s.itemProp!=null)return!1;switch(i){case"meta":case"title":return!0;case"style":if(typeof s.precedence!="string"||typeof s.href!="string"||s.href==="")break;return!0;case"link":if(typeof s.rel!="string"||typeof s.href!="string"||s.href===""||s.onLoad||s.onError)break;switch(s.rel){case"stylesheet":return i=s.disabled,typeof s.precedence=="string"&&i==null;default:return!0}case"script":if(s.async&&typeof s.async!="function"&&typeof s.async!="symbol"&&!s.onLoad&&!s.onError&&s.src&&typeof s.src=="string")return!0}return!1}function gb(i){return!(i.type==="stylesheet"&&(i.state.loading&3)===0)}var qc=null;function vx(){}function Ex(i,s,l){if(qc===null)throw Error(r(475));var c=qc;if(s.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var f=Pl(l.href),g=i.querySelector(zc(f));if(g){i=g._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(c.count++,c=zf.bind(c),i.then(c,c)),s.state.loading|=4,s.instance=g,_t(g);return}g=i.ownerDocument||i,l=db(l),(f=vr.get(f))&&G_(l,f),g=g.createElement("link"),_t(g);var T=g;T._p=new Promise(function(b,C){T.onload=b,T.onerror=C}),mn(g,"link",l),s.instance=g}c.stylesheets===null&&(c.stylesheets=new Map),c.stylesheets.set(s,i),(i=s.state.preload)&&(s.state.loading&3)===0&&(c.count++,s=zf.bind(c),i.addEventListener("load",s),i.addEventListener("error",s))}}function Tx(){if(qc===null)throw Error(r(475));var i=qc;return i.stylesheets&&i.count===0&&K_(i,i.stylesheets),0<i.count?function(s){var l=setTimeout(function(){if(i.stylesheets&&K_(i,i.stylesheets),i.unsuspend){var c=i.unsuspend;i.unsuspend=null,c()}},6e4);return i.unsuspend=s,function(){i.unsuspend=null,clearTimeout(l)}}:null}function zf(){if(this.count--,this.count===0){if(this.stylesheets)K_(this,this.stylesheets);else if(this.unsuspend){var i=this.unsuspend;this.unsuspend=null,i()}}}var Ff=null;function K_(i,s){i.stylesheets=null,i.unsuspend!==null&&(i.count++,Ff=new Map,s.forEach(wx,i),Ff=null,zf.call(i))}function wx(i,s){if(!(s.state.loading&4)){var l=Ff.get(i);if(l)var c=l.get(null);else{l=new Map,Ff.set(i,l);for(var f=i.querySelectorAll("link[data-precedence],style[data-precedence]"),g=0;g<f.length;g++){var T=f[g];(T.nodeName==="LINK"||T.getAttribute("media")!=="not all")&&(l.set(T.dataset.precedence,T),c=T)}c&&l.set(null,c)}f=s.instance,T=f.getAttribute("data-precedence"),g=l.get(T)||c,g===c&&l.set(null,f),l.set(T,f),this.count++,c=zf.bind(this),f.addEventListener("load",c),f.addEventListener("error",c),g?g.parentNode.insertBefore(f,g.nextSibling):(i=i.nodeType===9?i.head:i,i.insertBefore(f,i.firstChild)),s.state.loading|=4}}var jc={$$typeof:S,Provider:null,Consumer:null,_currentValue:Ce,_currentValue2:Ce,_threadCount:0};function bx(i,s,l,c,f,g,T,b){this.tag=1,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=$o(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$o(0),this.hiddenUpdates=$o(null),this.identifierPrefix=c,this.onUncaughtError=f,this.onCaughtError=g,this.onRecoverableError=T,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function _b(i,s,l,c,f,g,T,b,C,M,Z,te){return i=new bx(i,s,l,T,b,C,M,te),s=1,g===!0&&(s|=24),g=_r(3,null,null,s),i.current=g,g.stateNode=i,s=Ag(),s.refCount++,i.pooledCache=s,s.refCount++,g.memoizedState={element:c,isDehydrated:l,cache:s},s_(g),i}function yb(i){return i?(i=ul,i):ul}function vb(i,s,l,c,f,g){f=yb(f),c.context===null?c.context=f:c.pendingContext=f,c=Ps(s),c.payload={element:l},g=g===void 0?null:g,g!==null&&(c.callback=g),l=xs(i,c,s),l!==null&&(xn(l,i,s),Sc(l,i,s))}function Eb(i,s){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var l=i.retryLane;i.retryLane=l!==0&&l<s?l:s}}function Q_(i,s){Eb(i,s),(i=i.alternate)&&Eb(i,s)}function Tb(i){if(i.tag===13){var s=bs(i,67108864);s!==null&&xn(s,i,67108864),Q_(i,67108864)}}var qf=!0;function Ix(i,s,l,c){var f=A.T;A.T=null;var g=fe.p;try{fe.p=2,W_(i,s,l,c)}finally{fe.p=g,A.T=f}}function Ax(i,s,l,c){var f=A.T;A.T=null;var g=fe.p;try{fe.p=8,W_(i,s,l,c)}finally{fe.p=g,A.T=f}}function W_(i,s,l,c){if(qf){var f=Y_(c);if(f===null)L_(i,s,c,jf,l),bb(i,c);else if(Rx(f,i,s,l,c))c.stopPropagation();else if(bb(i,c),s&4&&-1<Sx.indexOf(i)){for(;f!==null;){var g=Ei(f);if(g!==null)switch(g.tag){case 3:if(g=g.stateNode,g.current.memoizedState.isDehydrated){var T=Ir(g.pendingLanes);if(T!==0){var b=g;for(b.pendingLanes|=2,b.entangledLanes|=2;T;){var C=1<<31-Rn(T);b.entanglements[1]|=C,T&=~C}Yr(g),(vt&6)===0&&(Sf=Ln()+500,Lc(0))}}break;case 13:b=bs(g,2),b!==null&&xn(b,g,2),Df(),Q_(g,2)}if(g=Y_(c),g===null&&L_(i,s,c,jf,l),g===f)break;f=g}f!==null&&c.stopPropagation()}else L_(i,s,c,null,l)}}function Y_(i){return i=Xo(i),X_(i)}var jf=null;function X_(i){if(jf=null,i=Ar(i),i!==null){var s=Te(i);if(s===null)i=null;else{var l=s.tag;if(l===13){if(i=Oe(s),i!==null)return i;i=null}else if(l===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null)}}return jf=i,null}function wb(i){switch(i){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Rd()){case Gt:return 2;case en:return 8;case yi:case Cd:return 32;case Gu:return 268435456;default:return 32}default:return 32}}var Z_=!1,Us=null,Bs=null,zs=null,Hc=new Map,Gc=new Map,Fs=[],Sx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function bb(i,s){switch(i){case"focusin":case"focusout":Us=null;break;case"dragenter":case"dragleave":Bs=null;break;case"mouseover":case"mouseout":zs=null;break;case"pointerover":case"pointerout":Hc.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Gc.delete(s.pointerId)}}function $c(i,s,l,c,f,g){return i===null||i.nativeEvent!==g?(i={blockedOn:s,domEventName:l,eventSystemFlags:c,nativeEvent:g,targetContainers:[f]},s!==null&&(s=Ei(s),s!==null&&Tb(s)),i):(i.eventSystemFlags|=c,s=i.targetContainers,f!==null&&s.indexOf(f)===-1&&s.push(f),i)}function Rx(i,s,l,c,f){switch(s){case"focusin":return Us=$c(Us,i,s,l,c,f),!0;case"dragenter":return Bs=$c(Bs,i,s,l,c,f),!0;case"mouseover":return zs=$c(zs,i,s,l,c,f),!0;case"pointerover":var g=f.pointerId;return Hc.set(g,$c(Hc.get(g)||null,i,s,l,c,f)),!0;case"gotpointercapture":return g=f.pointerId,Gc.set(g,$c(Gc.get(g)||null,i,s,l,c,f)),!0}return!1}function Ib(i){var s=Ar(i.target);if(s!==null){var l=Te(s);if(l!==null){if(s=l.tag,s===13){if(s=Oe(l),s!==null){i.blockedOn=s,ps(i.priority,function(){if(l.tag===13){var c=Xn(),f=bs(l,c);f!==null&&xn(f,l,c),Q_(l,c)}});return}}else if(s===3&&l.stateNode.current.memoizedState.isDehydrated){i.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}i.blockedOn=null}function Hf(i){if(i.blockedOn!==null)return!1;for(var s=i.targetContainers;0<s.length;){var l=Y_(i.nativeEvent);if(l===null){l=i.nativeEvent;var c=new l.constructor(l.type,l);or=c,l.target.dispatchEvent(c),or=null}else return s=Ei(l),s!==null&&Tb(s),i.blockedOn=l,!1;s.shift()}return!0}function Ab(i,s,l){Hf(i)&&l.delete(s)}function Cx(){Z_=!1,Us!==null&&Hf(Us)&&(Us=null),Bs!==null&&Hf(Bs)&&(Bs=null),zs!==null&&Hf(zs)&&(zs=null),Hc.forEach(Ab),Gc.forEach(Ab)}function Gf(i,s){i.blockedOn===s&&(i.blockedOn=null,Z_||(Z_=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,Cx)))}var $f=null;function Sb(i){$f!==i&&($f=i,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){$f===i&&($f=null);for(var s=0;s<i.length;s+=3){var l=i[s],c=i[s+1],f=i[s+2];if(typeof c!="function"){if(X_(c||l)===null)continue;break}var g=Ei(l);g!==null&&(i.splice(s,3),s-=3,Fg(g,{pending:!0,data:f,method:l.method,action:c},c,f))}}))}function Kc(i){function s(C){return Gf(C,i)}Us!==null&&Gf(Us,i),Bs!==null&&Gf(Bs,i),zs!==null&&Gf(zs,i),Hc.forEach(s),Gc.forEach(s);for(var l=0;l<Fs.length;l++){var c=Fs[l];c.blockedOn===i&&(c.blockedOn=null)}for(;0<Fs.length&&(l=Fs[0],l.blockedOn===null);)Ib(l),l.blockedOn===null&&Fs.shift();if(l=(i.ownerDocument||i).$$reactFormReplay,l!=null)for(c=0;c<l.length;c+=3){var f=l[c],g=l[c+1],T=f[$t]||null;if(typeof g=="function")T||Sb(l);else if(T){var b=null;if(g&&g.hasAttribute("formAction")){if(f=g,T=g[$t]||null)b=T.formAction;else if(X_(f)!==null)continue}else b=T.action;typeof b=="function"?l[c+1]=b:(l.splice(c,3),c-=3),Sb(l)}}}function J_(i){this._internalRoot=i}Kf.prototype.render=J_.prototype.render=function(i){var s=this._internalRoot;if(s===null)throw Error(r(409));var l=s.current,c=Xn();vb(l,c,i,s,null,null)},Kf.prototype.unmount=J_.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var s=i.containerInfo;i.tag===0&&Sl(),vb(i.current,2,null,i,null,null),Df(),s[vi]=null}};function Kf(i){this._internalRoot=i}Kf.prototype.unstable_scheduleHydration=function(i){if(i){var s=Od();i={blockedOn:null,target:i,priority:s};for(var l=0;l<Fs.length&&s!==0&&s<Fs[l].priority;l++);Fs.splice(l,0,i),l===0&&Ib(i)}};var Rb=e.version;if(Rb!=="19.0.0")throw Error(r(527,Rb,"19.0.0"));fe.findDOMNode=function(i){var s=i._reactInternals;if(s===void 0)throw typeof i.render=="function"?Error(r(188)):(i=Object.keys(i).join(","),Error(r(268,i)));return i=re(s),i=i!==null?ge(i):null,i=i===null?null:i.stateNode,i};var Dx={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:A,findFiberByHostInstance:Ar,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qf=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qf.isDisabled&&Qf.supportsFiber)try{ls=Qf.inject(Dx),En=Qf}catch{}}return Wc.createRoot=function(i,s){if(!a(i))throw Error(r(299));var l=!1,c="",f=Hw,g=Gw,T=$w,b=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(c=s.identifierPrefix),s.onUncaughtError!==void 0&&(f=s.onUncaughtError),s.onCaughtError!==void 0&&(g=s.onCaughtError),s.onRecoverableError!==void 0&&(T=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(b=s.unstable_transitionCallbacks)),s=_b(i,1,!1,null,null,l,c,f,g,T,b,null),i[vi]=s.current,M_(i.nodeType===8?i.parentNode:i),new J_(s)},Wc.hydrateRoot=function(i,s,l){if(!a(i))throw Error(r(299));var c=!1,f="",g=Hw,T=Gw,b=$w,C=null,M=null;return l!=null&&(l.unstable_strictMode===!0&&(c=!0),l.identifierPrefix!==void 0&&(f=l.identifierPrefix),l.onUncaughtError!==void 0&&(g=l.onUncaughtError),l.onCaughtError!==void 0&&(T=l.onCaughtError),l.onRecoverableError!==void 0&&(b=l.onRecoverableError),l.unstable_transitionCallbacks!==void 0&&(C=l.unstable_transitionCallbacks),l.formState!==void 0&&(M=l.formState)),s=_b(i,1,!0,s,l??null,c,f,g,T,b,C,M),s.context=yb(null),l=s.current,c=Xn(),f=Ps(c),f.callback=null,xs(l,f,c),s.current.lanes=c,Ot(s,c),Yr(s),i[vi]=s.current,M_(i),new Kf(s)},Wc.version="19.0.0",Wc}var Lb;function zx(){if(Lb)return ty.exports;Lb=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),ty.exports=Bx(),ty.exports}var Fx=zx(),Y=Dv();const Dh=xx(Y);var Yc={},Ub;function qx(){if(Ub)return Yc;Ub=1,Object.defineProperty(Yc,"__esModule",{value:!0}),Yc.parse=u,Yc.serialize=m;const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,t=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,r=/^[\u0020-\u003A\u003D-\u007E]*$/,a=Object.prototype.toString,o=(()=>{const w=function(){};return w.prototype=Object.create(null),w})();function u(w,S){const P=new o,U=w.length;if(U<2)return P;const L=(S==null?void 0:S.decode)||y;let z=0;do{const W=w.indexOf("=",z);if(W===-1)break;const G=w.indexOf(";",z),oe=G===-1?U:G;if(W>oe){z=w.lastIndexOf(";",W-1)+1;continue}const ae=d(w,z,W),le=p(w,W,ae),D=w.slice(ae,le);if(P[D]===void 0){let R=d(w,W+1,oe),A=p(w,oe,R);const x=L(w.slice(R,A));P[D]=x}z=oe+1}while(z<U);return P}function d(w,S,P){do{const U=w.charCodeAt(S);if(U!==32&&U!==9)return S}while(++S<P);return P}function p(w,S,P){for(;S>P;){const U=w.charCodeAt(--S);if(U!==32&&U!==9)return S+1}return P}function m(w,S,P){const U=(P==null?void 0:P.encode)||encodeURIComponent;if(!n.test(w))throw new TypeError(`argument name is invalid: ${w}`);const L=U(S);if(!e.test(L))throw new TypeError(`argument val is invalid: ${S}`);let z=w+"="+L;if(!P)return z;if(P.maxAge!==void 0){if(!Number.isInteger(P.maxAge))throw new TypeError(`option maxAge is invalid: ${P.maxAge}`);z+="; Max-Age="+P.maxAge}if(P.domain){if(!t.test(P.domain))throw new TypeError(`option domain is invalid: ${P.domain}`);z+="; Domain="+P.domain}if(P.path){if(!r.test(P.path))throw new TypeError(`option path is invalid: ${P.path}`);z+="; Path="+P.path}if(P.expires){if(!v(P.expires)||!Number.isFinite(P.expires.valueOf()))throw new TypeError(`option expires is invalid: ${P.expires}`);z+="; Expires="+P.expires.toUTCString()}if(P.httpOnly&&(z+="; HttpOnly"),P.secure&&(z+="; Secure"),P.partitioned&&(z+="; Partitioned"),P.priority)switch(typeof P.priority=="string"?P.priority.toLowerCase():void 0){case"low":z+="; Priority=Low";break;case"medium":z+="; Priority=Medium";break;case"high":z+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${P.priority}`)}if(P.sameSite)switch(typeof P.sameSite=="string"?P.sameSite.toLowerCase():P.sameSite){case!0:case"strict":z+="; SameSite=Strict";break;case"lax":z+="; SameSite=Lax";break;case"none":z+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${P.sameSite}`)}return z}function y(w){if(w.indexOf("%")===-1)return w;try{return decodeURIComponent(w)}catch{return w}}function v(w){return a.call(w)==="[object Date]"}return Yc}qx();/**
 * react-router v7.5.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Bb="popstate";function jx(n={}){function e(r,a){let{pathname:o,search:u,hash:d}=r.location;return Ny("",{pathname:o,search:u,hash:d},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function t(r,a){return typeof a=="string"?a:Ph(a)}return Gx(e,t,null,n)}function Et(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function ui(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Hx(){return Math.random().toString(36).substring(2,10)}function zb(n,e){return{usr:n.state,key:n.key,idx:e}}function Ny(n,e,t=null,r){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof e=="string"?Ru(e):e,state:t,key:e&&e.key||r||Hx()}}function Ph({pathname:n="/",search:e="",hash:t=""}){return e&&e!=="?"&&(n+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(n+=t.charAt(0)==="#"?t:"#"+t),n}function Ru(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substring(t),n=n.substring(0,t));let r=n.indexOf("?");r>=0&&(e.search=n.substring(r),n=n.substring(0,r)),n&&(e.pathname=n)}return e}function Gx(n,e,t,r={}){let{window:a=document.defaultView,v5Compat:o=!1}=r,u=a.history,d="POP",p=null,m=y();m==null&&(m=0,u.replaceState({...u.state,idx:m},""));function y(){return(u.state||{idx:null}).idx}function v(){d="POP";let L=y(),z=L==null?null:L-m;m=L,p&&p({action:d,location:U.location,delta:z})}function w(L,z){d="PUSH";let W=Ny(U.location,L,z);m=y()+1;let G=zb(W,m),oe=U.createHref(W);try{u.pushState(G,"",oe)}catch(ae){if(ae instanceof DOMException&&ae.name==="DataCloneError")throw ae;a.location.assign(oe)}o&&p&&p({action:d,location:U.location,delta:1})}function S(L,z){d="REPLACE";let W=Ny(U.location,L,z);m=y();let G=zb(W,m),oe=U.createHref(W);u.replaceState(G,"",oe),o&&p&&p({action:d,location:U.location,delta:0})}function P(L){let z=a.location.origin!=="null"?a.location.origin:a.location.href,W=typeof L=="string"?L:Ph(L);return W=W.replace(/ $/,"%20"),Et(z,`No window.location.(origin|href) available to create URL for href: ${W}`),new URL(W,z)}let U={get action(){return d},get location(){return n(a,u)},listen(L){if(p)throw new Error("A history only accepts one active listener");return a.addEventListener(Bb,v),p=L,()=>{a.removeEventListener(Bb,v),p=null}},createHref(L){return e(a,L)},createURL:P,encodeLocation(L){let z=P(L);return{pathname:z.pathname,search:z.search,hash:z.hash}},push:w,replace:S,go(L){return u.go(L)}};return U}function pS(n,e,t="/"){return $x(n,e,t,!1)}function $x(n,e,t,r){let a=typeof e=="string"?Ru(e):e,o=Qi(a.pathname||"/",t);if(o==null)return null;let u=mS(n);Kx(u);let d=null;for(let p=0;d==null&&p<u.length;++p){let m=iN(o);d=nN(u[p],m,r)}return d}function mS(n,e=[],t=[],r=""){let a=(o,u,d)=>{let p={relativePath:d===void 0?o.path||"":d,caseSensitive:o.caseSensitive===!0,childrenIndex:u,route:o};p.relativePath.startsWith("/")&&(Et(p.relativePath.startsWith(r),`Absolute route path "${p.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(r.length));let m=$i([r,p.relativePath]),y=t.concat(p);o.children&&o.children.length>0&&(Et(o.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${m}".`),mS(o.children,e,y,m)),!(o.path==null&&!o.index)&&e.push({path:m,score:eN(m,o.index),routesMeta:y})};return n.forEach((o,u)=>{var d;if(o.path===""||!((d=o.path)!=null&&d.includes("?")))a(o,u);else for(let p of gS(o.path))a(o,u,p)}),e}function gS(n){let e=n.split("/");if(e.length===0)return[];let[t,...r]=e,a=t.endsWith("?"),o=t.replace(/\?$/,"");if(r.length===0)return a?[o,""]:[o];let u=gS(r.join("/")),d=[];return d.push(...u.map(p=>p===""?o:[o,p].join("/"))),a&&d.push(...u),d.map(p=>n.startsWith("/")&&p===""?"/":p)}function Kx(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:tN(e.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}var Qx=/^:[\w-]+$/,Wx=3,Yx=2,Xx=1,Zx=10,Jx=-2,Fb=n=>n==="*";function eN(n,e){let t=n.split("/"),r=t.length;return t.some(Fb)&&(r+=Jx),e&&(r+=Yx),t.filter(a=>!Fb(a)).reduce((a,o)=>a+(Qx.test(o)?Wx:o===""?Xx:Zx),r)}function tN(n,e){return n.length===e.length&&n.slice(0,-1).every((r,a)=>r===e[a])?n[n.length-1]-e[e.length-1]:0}function nN(n,e,t=!1){let{routesMeta:r}=n,a={},o="/",u=[];for(let d=0;d<r.length;++d){let p=r[d],m=d===r.length-1,y=o==="/"?e:e.slice(o.length)||"/",v=Cp({path:p.relativePath,caseSensitive:p.caseSensitive,end:m},y),w=p.route;if(!v&&m&&t&&!r[r.length-1].route.index&&(v=Cp({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},y)),!v)return null;Object.assign(a,v.params),u.push({params:a,pathname:$i([o,v.pathname]),pathnameBase:lN($i([o,v.pathnameBase])),route:w}),v.pathnameBase!=="/"&&(o=$i([o,v.pathnameBase]))}return u}function Cp(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,r]=rN(n.path,n.caseSensitive,n.end),a=e.match(t);if(!a)return null;let o=a[0],u=o.replace(/(.)\/+$/,"$1"),d=a.slice(1);return{params:r.reduce((m,{paramName:y,isOptional:v},w)=>{if(y==="*"){let P=d[w]||"";u=o.slice(0,o.length-P.length).replace(/(.)\/+$/,"$1")}const S=d[w];return v&&!S?m[y]=void 0:m[y]=(S||"").replace(/%2F/g,"/"),m},{}),pathname:o,pathnameBase:u,pattern:n}}function rN(n,e=!1,t=!0){ui(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let r=[],a="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,d,p)=>(r.push({paramName:d,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(r.push({paramName:"*"}),a+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?a+="\\/*$":n!==""&&n!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,e?void 0:"i"),r]}function iN(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return ui(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),n}}function Qi(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,r=n.charAt(t);return r&&r!=="/"?null:n.slice(t)||"/"}function sN(n,e="/"){let{pathname:t,search:r="",hash:a=""}=typeof n=="string"?Ru(n):n;return{pathname:t?t.startsWith("/")?t:aN(t,e):e,search:uN(r),hash:cN(a)}}function aN(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(a=>{a===".."?t.length>1&&t.pop():a!=="."&&t.push(a)}),t.length>1?t.join("/"):"/"}function ay(n,e,t,r){return`Cannot include a '${n}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function oN(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function _S(n){let e=oN(n);return e.map((t,r)=>r===e.length-1?t.pathname:t.pathnameBase)}function yS(n,e,t,r=!1){let a;typeof n=="string"?a=Ru(n):(a={...n},Et(!a.pathname||!a.pathname.includes("?"),ay("?","pathname","search",a)),Et(!a.pathname||!a.pathname.includes("#"),ay("#","pathname","hash",a)),Et(!a.search||!a.search.includes("#"),ay("#","search","hash",a)));let o=n===""||a.pathname==="",u=o?"/":a.pathname,d;if(u==null)d=t;else{let v=e.length-1;if(!r&&u.startsWith("..")){let w=u.split("/");for(;w[0]==="..";)w.shift(),v-=1;a.pathname=w.join("/")}d=v>=0?e[v]:"/"}let p=sN(a,d),m=u&&u!=="/"&&u.endsWith("/"),y=(o||u===".")&&t.endsWith("/");return!p.pathname.endsWith("/")&&(m||y)&&(p.pathname+="/"),p}var $i=n=>n.join("/").replace(/\/\/+/g,"/"),lN=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),uN=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,cN=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function hN(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var vS=["POST","PUT","PATCH","DELETE"];new Set(vS);var dN=["GET",...vS];new Set(dN);var Cu=Y.createContext(null);Cu.displayName="DataRouter";var om=Y.createContext(null);om.displayName="DataRouterState";var ES=Y.createContext({isTransitioning:!1});ES.displayName="ViewTransition";var fN=Y.createContext(new Map);fN.displayName="Fetchers";var pN=Y.createContext(null);pN.displayName="Await";var mi=Y.createContext(null);mi.displayName="Navigation";var nd=Y.createContext(null);nd.displayName="Location";var gi=Y.createContext({outlet:null,matches:[],isDataRoute:!1});gi.displayName="Route";var Pv=Y.createContext(null);Pv.displayName="RouteError";function mN(n,{relative:e}={}){Et(rd(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:r}=Y.useContext(mi),{hash:a,pathname:o,search:u}=id(n,{relative:e}),d=o;return t!=="/"&&(d=o==="/"?t:$i([t,o])),r.createHref({pathname:d,search:u,hash:a})}function rd(){return Y.useContext(nd)!=null}function Vo(){return Et(rd(),"useLocation() may be used only in the context of a <Router> component."),Y.useContext(nd).location}var TS="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function wS(n){Y.useContext(mi).static||Y.useLayoutEffect(n)}function lm(){let{isDataRoute:n}=Y.useContext(gi);return n?CN():gN()}function gN(){Et(rd(),"useNavigate() may be used only in the context of a <Router> component.");let n=Y.useContext(Cu),{basename:e,navigator:t}=Y.useContext(mi),{matches:r}=Y.useContext(gi),{pathname:a}=Vo(),o=JSON.stringify(_S(r)),u=Y.useRef(!1);return wS(()=>{u.current=!0}),Y.useCallback((p,m={})=>{if(ui(u.current,TS),!u.current)return;if(typeof p=="number"){t.go(p);return}let y=yS(p,JSON.parse(o),a,m.relative==="path");n==null&&e!=="/"&&(y.pathname=y.pathname==="/"?e:$i([e,y.pathname])),(m.replace?t.replace:t.push)(y,m.state,m)},[e,t,o,a,n])}Y.createContext(null);function xv(){let{matches:n}=Y.useContext(gi),e=n[n.length-1];return e?e.params:{}}function id(n,{relative:e}={}){let{matches:t}=Y.useContext(gi),{pathname:r}=Vo(),a=JSON.stringify(_S(t));return Y.useMemo(()=>yS(n,JSON.parse(a),r,e==="path"),[n,a,r,e])}function _N(n,e){return bS(n,e)}function bS(n,e,t,r){var W;Et(rd(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a,static:o}=Y.useContext(mi),{matches:u}=Y.useContext(gi),d=u[u.length-1],p=d?d.params:{},m=d?d.pathname:"/",y=d?d.pathnameBase:"/",v=d&&d.route;{let G=v&&v.path||"";IS(m,!v||G.endsWith("*")||G.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${G}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${G}"> to <Route path="${G==="/"?"*":`${G}/*`}">.`)}let w=Vo(),S;if(e){let G=typeof e=="string"?Ru(e):e;Et(y==="/"||((W=G.pathname)==null?void 0:W.startsWith(y)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${G.pathname}" was given in the \`location\` prop.`),S=G}else S=w;let P=S.pathname||"/",U=P;if(y!=="/"){let G=y.replace(/^\//,"").split("/");U="/"+P.replace(/^\//,"").split("/").slice(G.length).join("/")}let L=!o&&t&&t.matches&&t.matches.length>0?t.matches:pS(n,{pathname:U});ui(v||L!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),ui(L==null||L[L.length-1].route.element!==void 0||L[L.length-1].route.Component!==void 0||L[L.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let z=wN(L&&L.map(G=>Object.assign({},G,{params:Object.assign({},p,G.params),pathname:$i([y,a.encodeLocation?a.encodeLocation(G.pathname).pathname:G.pathname]),pathnameBase:G.pathnameBase==="/"?y:$i([y,a.encodeLocation?a.encodeLocation(G.pathnameBase).pathname:G.pathnameBase])})),u,t,r);return e&&z?Y.createElement(nd.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...S},navigationType:"POP"}},z):z}function yN(){let n=RN(),e=hN(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,r="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:r},o={padding:"2px 4px",backgroundColor:r},u=null;return console.error("Error handled by React Router default ErrorBoundary:",n),u=Y.createElement(Y.Fragment,null,Y.createElement("p",null,"💿 Hey developer 👋"),Y.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",Y.createElement("code",{style:o},"ErrorBoundary")," or"," ",Y.createElement("code",{style:o},"errorElement")," prop on your route.")),Y.createElement(Y.Fragment,null,Y.createElement("h2",null,"Unexpected Application Error!"),Y.createElement("h3",{style:{fontStyle:"italic"}},e),t?Y.createElement("pre",{style:a},t):null,u)}var vN=Y.createElement(yN,null),EN=class extends Y.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,e){return e.location!==n.location||e.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:e.error,location:e.location,revalidation:n.revalidation||e.revalidation}}componentDidCatch(n,e){console.error("React Router caught the following error during render",n,e)}render(){return this.state.error!==void 0?Y.createElement(gi.Provider,{value:this.props.routeContext},Y.createElement(Pv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function TN({routeContext:n,match:e,children:t}){let r=Y.useContext(Cu);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),Y.createElement(gi.Provider,{value:n},t)}function wN(n,e=[],t=null,r=null){if(n==null){if(!t)return null;if(t.errors)n=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let a=n,o=t==null?void 0:t.errors;if(o!=null){let p=a.findIndex(m=>m.route.id&&(o==null?void 0:o[m.route.id])!==void 0);Et(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(o).join(",")}`),a=a.slice(0,Math.min(a.length,p+1))}let u=!1,d=-1;if(t)for(let p=0;p<a.length;p++){let m=a[p];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(d=p),m.route.id){let{loaderData:y,errors:v}=t,w=m.route.loader&&!y.hasOwnProperty(m.route.id)&&(!v||v[m.route.id]===void 0);if(m.route.lazy||w){u=!0,d>=0?a=a.slice(0,d+1):a=[a[0]];break}}}return a.reduceRight((p,m,y)=>{let v,w=!1,S=null,P=null;t&&(v=o&&m.route.id?o[m.route.id]:void 0,S=m.route.errorElement||vN,u&&(d<0&&y===0?(IS("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),w=!0,P=null):d===y&&(w=!0,P=m.route.hydrateFallbackElement||null)));let U=e.concat(a.slice(0,y+1)),L=()=>{let z;return v?z=S:w?z=P:m.route.Component?z=Y.createElement(m.route.Component,null):m.route.element?z=m.route.element:z=p,Y.createElement(TN,{match:m,routeContext:{outlet:p,matches:U,isDataRoute:t!=null},children:z})};return t&&(m.route.ErrorBoundary||m.route.errorElement||y===0)?Y.createElement(EN,{location:t.location,revalidation:t.revalidation,component:S,error:v,children:L(),routeContext:{outlet:null,matches:U,isDataRoute:!0}}):L()},null)}function Nv(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function bN(n){let e=Y.useContext(Cu);return Et(e,Nv(n)),e}function IN(n){let e=Y.useContext(om);return Et(e,Nv(n)),e}function AN(n){let e=Y.useContext(gi);return Et(e,Nv(n)),e}function Ov(n){let e=AN(n),t=e.matches[e.matches.length-1];return Et(t.route.id,`${n} can only be used on routes that contain a unique "id"`),t.route.id}function SN(){return Ov("useRouteId")}function RN(){var r;let n=Y.useContext(Pv),e=IN("useRouteError"),t=Ov("useRouteError");return n!==void 0?n:(r=e.errors)==null?void 0:r[t]}function CN(){let{router:n}=bN("useNavigate"),e=Ov("useNavigate"),t=Y.useRef(!1);return wS(()=>{t.current=!0}),Y.useCallback(async(a,o={})=>{ui(t.current,TS),t.current&&(typeof a=="number"?n.navigate(a):await n.navigate(a,{fromRouteId:e,...o}))},[n,e])}var qb={};function IS(n,e,t){!e&&!qb[n]&&(qb[n]=!0,ui(!1,t))}Y.memo(DN);function DN({routes:n,future:e,state:t}){return bS(n,void 0,t,e)}function oh(n){Et(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function PN({basename:n="/",children:e=null,location:t,navigationType:r="POP",navigator:a,static:o=!1}){Et(!rd(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let u=n.replace(/^\/*/,"/"),d=Y.useMemo(()=>({basename:u,navigator:a,static:o,future:{}}),[u,a,o]);typeof t=="string"&&(t=Ru(t));let{pathname:p="/",search:m="",hash:y="",state:v=null,key:w="default"}=t,S=Y.useMemo(()=>{let P=Qi(p,u);return P==null?null:{location:{pathname:P,search:m,hash:y,state:v,key:w},navigationType:r}},[u,p,m,y,v,w,r]);return ui(S!=null,`<Router basename="${u}"> is not able to match the URL "${p}${m}${y}" because it does not start with the basename, so the <Router> won't render anything.`),S==null?null:Y.createElement(mi.Provider,{value:d},Y.createElement(nd.Provider,{children:e,value:S}))}function xN({children:n,location:e}){return _N(Oy(n),e)}function Oy(n,e=[]){let t=[];return Y.Children.forEach(n,(r,a)=>{if(!Y.isValidElement(r))return;let o=[...e,a];if(r.type===Y.Fragment){t.push.apply(t,Oy(r.props.children,o));return}Et(r.type===oh,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Et(!r.props.index||!r.props.children,"An index route cannot have child routes.");let u={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(u.children=Oy(r.props.children,o)),t.push(u)}),t}var op="get",lp="application/x-www-form-urlencoded";function um(n){return n!=null&&typeof n.tagName=="string"}function NN(n){return um(n)&&n.tagName.toLowerCase()==="button"}function ON(n){return um(n)&&n.tagName.toLowerCase()==="form"}function kN(n){return um(n)&&n.tagName.toLowerCase()==="input"}function VN(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function MN(n,e){return n.button===0&&(!e||e==="_self")&&!VN(n)}var Wf=null;function LN(){if(Wf===null)try{new FormData(document.createElement("form"),0),Wf=!1}catch{Wf=!0}return Wf}var UN=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function oy(n){return n!=null&&!UN.has(n)?(ui(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${lp}"`),null):n}function BN(n,e){let t,r,a,o,u;if(ON(n)){let d=n.getAttribute("action");r=d?Qi(d,e):null,t=n.getAttribute("method")||op,a=oy(n.getAttribute("enctype"))||lp,o=new FormData(n)}else if(NN(n)||kN(n)&&(n.type==="submit"||n.type==="image")){let d=n.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=n.getAttribute("formaction")||d.getAttribute("action");if(r=p?Qi(p,e):null,t=n.getAttribute("formmethod")||d.getAttribute("method")||op,a=oy(n.getAttribute("formenctype"))||oy(d.getAttribute("enctype"))||lp,o=new FormData(d,n),!LN()){let{name:m,type:y,value:v}=n;if(y==="image"){let w=m?`${m}.`:"";o.append(`${w}x`,"0"),o.append(`${w}y`,"0")}else m&&o.append(m,v)}}else{if(um(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=op,r=null,a=lp,u=n}return o&&a==="text/plain"&&(u=o,o=void 0),{action:r,method:t.toLowerCase(),encType:a,formData:o,body:u}}function kv(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}async function zN(n,e){if(n.id in e)return e[n.id];try{let t=await import(n.module);return e[n.id]=t,t}catch(t){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function FN(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function qN(n,e,t){let r=await Promise.all(n.map(async a=>{let o=e.routes[a.route.id];if(o){let u=await zN(o,t);return u.links?u.links():[]}return[]}));return $N(r.flat(1).filter(FN).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function jb(n,e,t,r,a,o){let u=(p,m)=>t[m]?p.route.id!==t[m].route.id:!0,d=(p,m)=>{var y;return t[m].pathname!==p.pathname||((y=t[m].route.path)==null?void 0:y.endsWith("*"))&&t[m].params["*"]!==p.params["*"]};return o==="assets"?e.filter((p,m)=>u(p,m)||d(p,m)):o==="data"?e.filter((p,m)=>{var v;let y=r.routes[p.route.id];if(!y||!y.hasLoader)return!1;if(u(p,m)||d(p,m))return!0;if(p.route.shouldRevalidate){let w=p.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:((v=t[0])==null?void 0:v.params)||{},nextUrl:new URL(n,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof w=="boolean")return w}return!0}):[]}function jN(n,e,{includeHydrateFallback:t}={}){return HN(n.map(r=>{let a=e.routes[r.route.id];if(!a)return[];let o=[a.module];return a.clientActionModule&&(o=o.concat(a.clientActionModule)),a.clientLoaderModule&&(o=o.concat(a.clientLoaderModule)),t&&a.hydrateFallbackModule&&(o=o.concat(a.hydrateFallbackModule)),a.imports&&(o=o.concat(a.imports)),o}).flat(1))}function HN(n){return[...new Set(n)]}function GN(n){let e={},t=Object.keys(n).sort();for(let r of t)e[r]=n[r];return e}function $N(n,e){let t=new Set;return new Set(e),n.reduce((r,a)=>{let o=JSON.stringify(GN(a));return t.has(o)||(t.add(o),r.push({key:o,link:a})),r},[])}function KN(n,e){let t=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return t.pathname==="/"?t.pathname="_root.data":e&&Qi(t.pathname,e)==="/"?t.pathname=`${e.replace(/\/$/,"")}/_root.data`:t.pathname=`${t.pathname.replace(/\/$/,"")}.data`,t}function AS(){let n=Y.useContext(Cu);return kv(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function QN(){let n=Y.useContext(om);return kv(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var Vv=Y.createContext(void 0);Vv.displayName="FrameworkContext";function SS(){let n=Y.useContext(Vv);return kv(n,"You must render this element inside a <HydratedRouter> element"),n}function WN(n,e){let t=Y.useContext(Vv),[r,a]=Y.useState(!1),[o,u]=Y.useState(!1),{onFocus:d,onBlur:p,onMouseEnter:m,onMouseLeave:y,onTouchStart:v}=e,w=Y.useRef(null);Y.useEffect(()=>{if(n==="render"&&u(!0),n==="viewport"){let U=z=>{z.forEach(W=>{u(W.isIntersecting)})},L=new IntersectionObserver(U,{threshold:.5});return w.current&&L.observe(w.current),()=>{L.disconnect()}}},[n]),Y.useEffect(()=>{if(r){let U=setTimeout(()=>{u(!0)},100);return()=>{clearTimeout(U)}}},[r]);let S=()=>{a(!0)},P=()=>{a(!1),u(!1)};return t?n!=="intent"?[o,w,{}]:[o,w,{onFocus:Xc(d,S),onBlur:Xc(p,P),onMouseEnter:Xc(m,S),onMouseLeave:Xc(y,P),onTouchStart:Xc(v,S)}]:[!1,w,{}]}function Xc(n,e){return t=>{n&&n(t),t.defaultPrevented||e(t)}}function YN({page:n,...e}){let{router:t}=AS(),r=Y.useMemo(()=>pS(t.routes,n,t.basename),[t.routes,n,t.basename]);return r?Y.createElement(ZN,{page:n,matches:r,...e}):null}function XN(n){let{manifest:e,routeModules:t}=SS(),[r,a]=Y.useState([]);return Y.useEffect(()=>{let o=!1;return qN(n,e,t).then(u=>{o||a(u)}),()=>{o=!0}},[n,e,t]),r}function ZN({page:n,matches:e,...t}){let r=Vo(),{manifest:a,routeModules:o}=SS(),{basename:u}=AS(),{loaderData:d,matches:p}=QN(),m=Y.useMemo(()=>jb(n,e,p,a,r,"data"),[n,e,p,a,r]),y=Y.useMemo(()=>jb(n,e,p,a,r,"assets"),[n,e,p,a,r]),v=Y.useMemo(()=>{if(n===r.pathname+r.search+r.hash)return[];let P=new Set,U=!1;if(e.forEach(z=>{var G;let W=a.routes[z.route.id];!W||!W.hasLoader||(!m.some(oe=>oe.route.id===z.route.id)&&z.route.id in d&&((G=o[z.route.id])!=null&&G.shouldRevalidate)||W.hasClientLoader?U=!0:P.add(z.route.id))}),P.size===0)return[];let L=KN(n,u);return U&&P.size>0&&L.searchParams.set("_routes",e.filter(z=>P.has(z.route.id)).map(z=>z.route.id).join(",")),[L.pathname+L.search]},[u,d,r,a,m,e,n,o]),w=Y.useMemo(()=>jN(y,a),[y,a]),S=XN(y);return Y.createElement(Y.Fragment,null,v.map(P=>Y.createElement("link",{key:P,rel:"prefetch",as:"fetch",href:P,...t})),w.map(P=>Y.createElement("link",{key:P,rel:"modulepreload",href:P,...t})),S.map(({key:P,link:U})=>Y.createElement("link",{key:P,...U})))}function JN(...n){return e=>{n.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var RS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{RS&&(window.__reactRouterVersion="7.5.0")}catch{}function eO({basename:n,children:e,window:t}){let r=Y.useRef();r.current==null&&(r.current=jx({window:t,v5Compat:!0}));let a=r.current,[o,u]=Y.useState({action:a.action,location:a.location}),d=Y.useCallback(p=>{Y.startTransition(()=>u(p))},[u]);return Y.useLayoutEffect(()=>a.listen(d),[a,d]),Y.createElement(PN,{basename:n,children:e,location:o.location,navigationType:o.action,navigator:a})}var CS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,DS=Y.forwardRef(function({onClick:e,discover:t="render",prefetch:r="none",relative:a,reloadDocument:o,replace:u,state:d,target:p,to:m,preventScrollReset:y,viewTransition:v,...w},S){let{basename:P}=Y.useContext(mi),U=typeof m=="string"&&CS.test(m),L,z=!1;if(typeof m=="string"&&U&&(L=m,RS))try{let A=new URL(window.location.href),x=m.startsWith("//")?new URL(A.protocol+m):new URL(m),V=Qi(x.pathname,P);x.origin===A.origin&&V!=null?m=V+x.search+x.hash:z=!0}catch{ui(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let W=mN(m,{relative:a}),[G,oe,ae]=WN(r,w),le=iO(m,{replace:u,state:d,target:p,preventScrollReset:y,relative:a,viewTransition:v});function D(A){e&&e(A),A.defaultPrevented||le(A)}let R=Y.createElement("a",{...w,...ae,href:L||W,onClick:z||o?e:D,ref:JN(S,oe),target:p,"data-discover":!U&&t==="render"?"true":void 0});return G&&!U?Y.createElement(Y.Fragment,null,R,Y.createElement(YN,{page:W})):R});DS.displayName="Link";var tO=Y.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:r="",end:a=!1,style:o,to:u,viewTransition:d,children:p,...m},y){let v=id(u,{relative:m.relative}),w=Vo(),S=Y.useContext(om),{navigator:P,basename:U}=Y.useContext(mi),L=S!=null&&uO(v)&&d===!0,z=P.encodeLocation?P.encodeLocation(v).pathname:v.pathname,W=w.pathname,G=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;t||(W=W.toLowerCase(),G=G?G.toLowerCase():null,z=z.toLowerCase()),G&&U&&(G=Qi(G,U)||G);const oe=z!=="/"&&z.endsWith("/")?z.length-1:z.length;let ae=W===z||!a&&W.startsWith(z)&&W.charAt(oe)==="/",le=G!=null&&(G===z||!a&&G.startsWith(z)&&G.charAt(z.length)==="/"),D={isActive:ae,isPending:le,isTransitioning:L},R=ae?e:void 0,A;typeof r=="function"?A=r(D):A=[r,ae?"active":null,le?"pending":null,L?"transitioning":null].filter(Boolean).join(" ");let x=typeof o=="function"?o(D):o;return Y.createElement(DS,{...m,"aria-current":R,className:A,ref:y,style:x,to:u,viewTransition:d},typeof p=="function"?p(D):p)});tO.displayName="NavLink";var nO=Y.forwardRef(({discover:n="render",fetcherKey:e,navigate:t,reloadDocument:r,replace:a,state:o,method:u=op,action:d,onSubmit:p,relative:m,preventScrollReset:y,viewTransition:v,...w},S)=>{let P=oO(),U=lO(d,{relative:m}),L=u.toLowerCase()==="get"?"get":"post",z=typeof d=="string"&&CS.test(d),W=G=>{if(p&&p(G),G.defaultPrevented)return;G.preventDefault();let oe=G.nativeEvent.submitter,ae=(oe==null?void 0:oe.getAttribute("formmethod"))||u;P(oe||G.currentTarget,{fetcherKey:e,method:ae,navigate:t,replace:a,state:o,relative:m,preventScrollReset:y,viewTransition:v})};return Y.createElement("form",{ref:S,method:L,action:U,onSubmit:r?p:W,...w,"data-discover":!z&&n==="render"?"true":void 0})});nO.displayName="Form";function rO(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function PS(n){let e=Y.useContext(Cu);return Et(e,rO(n)),e}function iO(n,{target:e,replace:t,state:r,preventScrollReset:a,relative:o,viewTransition:u}={}){let d=lm(),p=Vo(),m=id(n,{relative:o});return Y.useCallback(y=>{if(MN(y,e)){y.preventDefault();let v=t!==void 0?t:Ph(p)===Ph(m);d(n,{replace:v,state:r,preventScrollReset:a,relative:o,viewTransition:u})}},[p,d,m,t,r,e,n,a,o,u])}var sO=0,aO=()=>`__${String(++sO)}__`;function oO(){let{router:n}=PS("useSubmit"),{basename:e}=Y.useContext(mi),t=SN();return Y.useCallback(async(r,a={})=>{let{action:o,method:u,encType:d,formData:p,body:m}=BN(r,e);if(a.navigate===!1){let y=a.fetcherKey||aO();await n.fetch(y,t,a.action||o,{preventScrollReset:a.preventScrollReset,formData:p,body:m,formMethod:a.method||u,formEncType:a.encType||d,flushSync:a.flushSync})}else await n.navigate(a.action||o,{preventScrollReset:a.preventScrollReset,formData:p,body:m,formMethod:a.method||u,formEncType:a.encType||d,replace:a.replace,state:a.state,fromRouteId:t,flushSync:a.flushSync,viewTransition:a.viewTransition})},[n,e,t])}function lO(n,{relative:e}={}){let{basename:t}=Y.useContext(mi),r=Y.useContext(gi);Et(r,"useFormAction must be used inside a RouteContext");let[a]=r.matches.slice(-1),o={...id(n||".",{relative:e})},u=Vo();if(n==null){o.search=u.search;let d=new URLSearchParams(o.search),p=d.getAll("index");if(p.some(y=>y==="")){d.delete("index"),p.filter(v=>v).forEach(v=>d.append("index",v));let y=d.toString();o.search=y?`?${y}`:""}}return(!n||n===".")&&a.route.index&&(o.search=o.search?o.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(o.pathname=o.pathname==="/"?t:$i([t,o.pathname])),Ph(o)}function uO(n,e={}){let t=Y.useContext(ES);Et(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=PS("useViewTransitionState"),a=id(n,{relative:e.relative});if(!t.isTransitioning)return!1;let o=Qi(t.currentLocation.pathname,r)||t.currentLocation.pathname,u=Qi(t.nextLocation.pathname,r)||t.nextLocation.pathname;return Cp(a.pathname,u)!=null||Cp(a.pathname,o)!=null}new TextEncoder;var Fn=function(){return Fn=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Fn.apply(this,arguments)};function Mv(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(n);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(n,r[a])&&(t[r[a]]=n[r[a]]);return t}function Dp(n,e,t){if(t||arguments.length===2)for(var r=0,a=e.length,o;r<a;r++)(o||!(r in e))&&(o||(o=Array.prototype.slice.call(e,0,r)),o[r]=e[r]);return n.concat(o||Array.prototype.slice.call(e))}var ct="-ms-",gh="-moz-",et="-webkit-",xS="comm",cm="rule",Lv="decl",cO="@import",NS="@keyframes",hO="@layer",OS=Math.abs,Uv=String.fromCharCode,ky=Object.assign;function dO(n,e){return un(n,0)^45?(((e<<2^un(n,0))<<2^un(n,1))<<2^un(n,2))<<2^un(n,3):0}function kS(n){return n.trim()}function ji(n,e){return(n=e.exec(n))?n[0]:n}function ke(n,e,t){return n.replace(e,t)}function up(n,e,t){return n.indexOf(e,t)}function un(n,e){return n.charCodeAt(e)|0}function Jl(n,e,t){return n.slice(e,t)}function Zr(n){return n.length}function VS(n){return n.length}function lh(n,e){return e.push(n),n}function fO(n,e){return n.map(e).join("")}function Hb(n,e){return n.filter(function(t){return!ji(t,e)})}var hm=1,eu=1,MS=0,wr=0,Ht=0,Du="";function dm(n,e,t,r,a,o,u,d){return{value:n,root:e,parent:t,type:r,props:a,children:o,line:hm,column:eu,length:u,return:"",siblings:d}}function Qs(n,e){return ky(dm("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},e)}function Nl(n){for(;n.root;)n=Qs(n.root,{children:[n]});lh(n,n.siblings)}function pO(){return Ht}function mO(){return Ht=wr>0?un(Du,--wr):0,eu--,Ht===10&&(eu=1,hm--),Ht}function Nr(){return Ht=wr<MS?un(Du,wr++):0,eu++,Ht===10&&(eu=1,hm++),Ht}function _o(){return un(Du,wr)}function cp(){return wr}function fm(n,e){return Jl(Du,n,e)}function Vy(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function gO(n){return hm=eu=1,MS=Zr(Du=n),wr=0,[]}function _O(n){return Du="",n}function ly(n){return kS(fm(wr-1,My(n===91?n+2:n===40?n+1:n)))}function yO(n){for(;(Ht=_o())&&Ht<33;)Nr();return Vy(n)>2||Vy(Ht)>3?"":" "}function vO(n,e){for(;--e&&Nr()&&!(Ht<48||Ht>102||Ht>57&&Ht<65||Ht>70&&Ht<97););return fm(n,cp()+(e<6&&_o()==32&&Nr()==32))}function My(n){for(;Nr();)switch(Ht){case n:return wr;case 34:case 39:n!==34&&n!==39&&My(Ht);break;case 40:n===41&&My(n);break;case 92:Nr();break}return wr}function EO(n,e){for(;Nr()&&n+Ht!==57;)if(n+Ht===84&&_o()===47)break;return"/*"+fm(e,wr-1)+"*"+Uv(n===47?n:Nr())}function TO(n){for(;!Vy(_o());)Nr();return fm(n,wr)}function wO(n){return _O(hp("",null,null,null,[""],n=gO(n),0,[0],n))}function hp(n,e,t,r,a,o,u,d,p){for(var m=0,y=0,v=u,w=0,S=0,P=0,U=1,L=1,z=1,W=0,G="",oe=a,ae=o,le=r,D=G;L;)switch(P=W,W=Nr()){case 40:if(P!=108&&un(D,v-1)==58){up(D+=ke(ly(W),"&","&\f"),"&\f",OS(m?d[m-1]:0))!=-1&&(z=-1);break}case 34:case 39:case 91:D+=ly(W);break;case 9:case 10:case 13:case 32:D+=yO(P);break;case 92:D+=vO(cp()-1,7);continue;case 47:switch(_o()){case 42:case 47:lh(bO(EO(Nr(),cp()),e,t,p),p);break;default:D+="/"}break;case 123*U:d[m++]=Zr(D)*z;case 125*U:case 59:case 0:switch(W){case 0:case 125:L=0;case 59+y:z==-1&&(D=ke(D,/\f/g,"")),S>0&&Zr(D)-v&&lh(S>32?$b(D+";",r,t,v-1,p):$b(ke(D," ","")+";",r,t,v-2,p),p);break;case 59:D+=";";default:if(lh(le=Gb(D,e,t,m,y,a,d,G,oe=[],ae=[],v,o),o),W===123)if(y===0)hp(D,e,le,le,oe,o,v,d,ae);else switch(w===99&&un(D,3)===110?100:w){case 100:case 108:case 109:case 115:hp(n,le,le,r&&lh(Gb(n,le,le,0,0,a,d,G,a,oe=[],v,ae),ae),a,ae,v,d,r?oe:ae);break;default:hp(D,le,le,le,[""],ae,0,d,ae)}}m=y=S=0,U=z=1,G=D="",v=u;break;case 58:v=1+Zr(D),S=P;default:if(U<1){if(W==123)--U;else if(W==125&&U++==0&&mO()==125)continue}switch(D+=Uv(W),W*U){case 38:z=y>0?1:(D+="\f",-1);break;case 44:d[m++]=(Zr(D)-1)*z,z=1;break;case 64:_o()===45&&(D+=ly(Nr())),w=_o(),y=v=Zr(G=D+=TO(cp())),W++;break;case 45:P===45&&Zr(D)==2&&(U=0)}}return o}function Gb(n,e,t,r,a,o,u,d,p,m,y,v){for(var w=a-1,S=a===0?o:[""],P=VS(S),U=0,L=0,z=0;U<r;++U)for(var W=0,G=Jl(n,w+1,w=OS(L=u[U])),oe=n;W<P;++W)(oe=kS(L>0?S[W]+" "+G:ke(G,/&\f/g,S[W])))&&(p[z++]=oe);return dm(n,e,t,a===0?cm:d,p,m,y,v)}function bO(n,e,t,r){return dm(n,e,t,xS,Uv(pO()),Jl(n,2,-2),0,r)}function $b(n,e,t,r,a){return dm(n,e,t,Lv,Jl(n,0,r),Jl(n,r+1,-1),r,a)}function LS(n,e,t){switch(dO(n,e)){case 5103:return et+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return et+n+n;case 4789:return gh+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return et+n+gh+n+ct+n+n;case 5936:switch(un(n,e+11)){case 114:return et+n+ct+ke(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return et+n+ct+ke(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return et+n+ct+ke(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return et+n+ct+n+n;case 6165:return et+n+ct+"flex-"+n+n;case 5187:return et+n+ke(n,/(\w+).+(:[^]+)/,et+"box-$1$2"+ct+"flex-$1$2")+n;case 5443:return et+n+ct+"flex-item-"+ke(n,/flex-|-self/g,"")+(ji(n,/flex-|baseline/)?"":ct+"grid-row-"+ke(n,/flex-|-self/g,""))+n;case 4675:return et+n+ct+"flex-line-pack"+ke(n,/align-content|flex-|-self/g,"")+n;case 5548:return et+n+ct+ke(n,"shrink","negative")+n;case 5292:return et+n+ct+ke(n,"basis","preferred-size")+n;case 6060:return et+"box-"+ke(n,"-grow","")+et+n+ct+ke(n,"grow","positive")+n;case 4554:return et+ke(n,/([^-])(transform)/g,"$1"+et+"$2")+n;case 6187:return ke(ke(ke(n,/(zoom-|grab)/,et+"$1"),/(image-set)/,et+"$1"),n,"")+n;case 5495:case 3959:return ke(n,/(image-set\([^]*)/,et+"$1$`$1");case 4968:return ke(ke(n,/(.+:)(flex-)?(.*)/,et+"box-pack:$3"+ct+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+et+n+n;case 4200:if(!ji(n,/flex-|baseline/))return ct+"grid-column-align"+Jl(n,e)+n;break;case 2592:case 3360:return ct+ke(n,"template-","")+n;case 4384:case 3616:return t&&t.some(function(r,a){return e=a,ji(r.props,/grid-\w+-end/)})?~up(n+(t=t[e].value),"span",0)?n:ct+ke(n,"-start","")+n+ct+"grid-row-span:"+(~up(t,"span",0)?ji(t,/\d+/):+ji(t,/\d+/)-+ji(n,/\d+/))+";":ct+ke(n,"-start","")+n;case 4896:case 4128:return t&&t.some(function(r){return ji(r.props,/grid-\w+-start/)})?n:ct+ke(ke(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return ke(n,/(.+)-inline(.+)/,et+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Zr(n)-1-e>6)switch(un(n,e+1)){case 109:if(un(n,e+4)!==45)break;case 102:return ke(n,/(.+:)(.+)-([^]+)/,"$1"+et+"$2-$3$1"+gh+(un(n,e+3)==108?"$3":"$2-$3"))+n;case 115:return~up(n,"stretch",0)?LS(ke(n,"stretch","fill-available"),e,t)+n:n}break;case 5152:case 5920:return ke(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,a,o,u,d,p,m){return ct+a+":"+o+m+(u?ct+a+"-span:"+(d?p:+p-+o)+m:"")+n});case 4949:if(un(n,e+6)===121)return ke(n,":",":"+et)+n;break;case 6444:switch(un(n,un(n,14)===45?18:11)){case 120:return ke(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+et+(un(n,14)===45?"inline-":"")+"box$3$1"+et+"$2$3$1"+ct+"$2box$3")+n;case 100:return ke(n,":",":"+ct)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ke(n,"scroll-","scroll-snap-")+n}return n}function Pp(n,e){for(var t="",r=0;r<n.length;r++)t+=e(n[r],r,n,e)||"";return t}function IO(n,e,t,r){switch(n.type){case hO:if(n.children.length)break;case cO:case Lv:return n.return=n.return||n.value;case xS:return"";case NS:return n.return=n.value+"{"+Pp(n.children,r)+"}";case cm:if(!Zr(n.value=n.props.join(",")))return""}return Zr(t=Pp(n.children,r))?n.return=n.value+"{"+t+"}":""}function AO(n){var e=VS(n);return function(t,r,a,o){for(var u="",d=0;d<e;d++)u+=n[d](t,r,a,o)||"";return u}}function SO(n){return function(e){e.root||(e=e.return)&&n(e)}}function RO(n,e,t,r){if(n.length>-1&&!n.return)switch(n.type){case Lv:n.return=LS(n.value,n.length,t);return;case NS:return Pp([Qs(n,{value:ke(n.value,"@","@"+et)})],r);case cm:if(n.length)return fO(t=n.props,function(a){switch(ji(a,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Nl(Qs(n,{props:[ke(a,/:(read-\w+)/,":"+gh+"$1")]})),Nl(Qs(n,{props:[a]})),ky(n,{props:Hb(t,r)});break;case"::placeholder":Nl(Qs(n,{props:[ke(a,/:(plac\w+)/,":"+et+"input-$1")]})),Nl(Qs(n,{props:[ke(a,/:(plac\w+)/,":"+gh+"$1")]})),Nl(Qs(n,{props:[ke(a,/:(plac\w+)/,ct+"input-$1")]})),Nl(Qs(n,{props:[a]})),ky(n,{props:Hb(t,r)});break}return""})}}var CO={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Zn={},tu=typeof process<"u"&&Zn!==void 0&&(Zn.REACT_APP_SC_ATTR||Zn.SC_ATTR)||"data-styled",US="active",BS="data-styled-version",pm="6.1.16",Bv=`/*!sc*/
`,xp=typeof window<"u"&&"HTMLElement"in window,DO=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Zn!==void 0&&Zn.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Zn.REACT_APP_SC_DISABLE_SPEEDY!==""?Zn.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Zn.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Zn!==void 0&&Zn.SC_DISABLE_SPEEDY!==void 0&&Zn.SC_DISABLE_SPEEDY!==""&&Zn.SC_DISABLE_SPEEDY!=="false"&&Zn.SC_DISABLE_SPEEDY),mm=Object.freeze([]),nu=Object.freeze({});function PO(n,e,t){return t===void 0&&(t=nu),n.theme!==t.theme&&n.theme||e||t.theme}var zS=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),xO=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,NO=/(^-|-$)/g;function Kb(n){return n.replace(xO,"-").replace(NO,"")}var OO=/(a)(d)/gi,Yf=52,Qb=function(n){return String.fromCharCode(n+(n>25?39:97))};function Ly(n){var e,t="";for(e=Math.abs(n);e>Yf;e=e/Yf|0)t=Qb(e%Yf)+t;return(Qb(e%Yf)+t).replace(OO,"$1-$2")}var uy,FS=5381,Gl=function(n,e){for(var t=e.length;t;)n=33*n^e.charCodeAt(--t);return n},qS=function(n){return Gl(FS,n)};function kO(n){return Ly(qS(n)>>>0)}function VO(n){return n.displayName||n.name||"Component"}function cy(n){return typeof n=="string"&&!0}var jS=typeof Symbol=="function"&&Symbol.for,HS=jS?Symbol.for("react.memo"):60115,MO=jS?Symbol.for("react.forward_ref"):60112,LO={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},UO={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},GS={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},BO=((uy={})[MO]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},uy[HS]=GS,uy);function Wb(n){return("type"in(e=n)&&e.type.$$typeof)===HS?GS:"$$typeof"in n?BO[n.$$typeof]:LO;var e}var zO=Object.defineProperty,FO=Object.getOwnPropertyNames,Yb=Object.getOwnPropertySymbols,qO=Object.getOwnPropertyDescriptor,jO=Object.getPrototypeOf,Xb=Object.prototype;function $S(n,e,t){if(typeof e!="string"){if(Xb){var r=jO(e);r&&r!==Xb&&$S(n,r,t)}var a=FO(e);Yb&&(a=a.concat(Yb(e)));for(var o=Wb(n),u=Wb(e),d=0;d<a.length;++d){var p=a[d];if(!(p in UO||t&&t[p]||u&&p in u||o&&p in o)){var m=qO(e,p);try{zO(n,p,m)}catch{}}}}return n}function ru(n){return typeof n=="function"}function zv(n){return typeof n=="object"&&"styledComponentId"in n}function ho(n,e){return n&&e?"".concat(n," ").concat(e):n||e||""}function Zb(n,e){if(n.length===0)return"";for(var t=n[0],r=1;r<n.length;r++)t+=n[r];return t}function xh(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function Uy(n,e,t){if(t===void 0&&(t=!1),!t&&!xh(n)&&!Array.isArray(n))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)n[r]=Uy(n[r],e[r]);else if(xh(e))for(var r in e)n[r]=Uy(n[r],e[r]);return n}function Fv(n,e){Object.defineProperty(n,"toString",{value:e})}function sd(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var HO=function(){function n(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return n.prototype.indexOfGroup=function(e){for(var t=0,r=0;r<e;r++)t+=this.groupSizes[r];return t},n.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var r=this.groupSizes,a=r.length,o=a;e>=o;)if((o<<=1)<0)throw sd(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var u=a;u<o;u++)this.groupSizes[u]=0}for(var d=this.indexOfGroup(e+1),p=(u=0,t.length);u<p;u++)this.tag.insertRule(d,t[u])&&(this.groupSizes[e]++,d++)},n.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],r=this.indexOfGroup(e),a=r+t;this.groupSizes[e]=0;for(var o=r;o<a;o++)this.tag.deleteRule(r)}},n.prototype.getGroup=function(e){var t="";if(e>=this.length||this.groupSizes[e]===0)return t;for(var r=this.groupSizes[e],a=this.indexOfGroup(e),o=a+r,u=a;u<o;u++)t+="".concat(this.tag.getRule(u)).concat(Bv);return t},n}(),dp=new Map,Np=new Map,fp=1,Xf=function(n){if(dp.has(n))return dp.get(n);for(;Np.has(fp);)fp++;var e=fp++;return dp.set(n,e),Np.set(e,n),e},GO=function(n,e){fp=e+1,dp.set(n,e),Np.set(e,n)},$O="style[".concat(tu,"][").concat(BS,'="').concat(pm,'"]'),KO=new RegExp("^".concat(tu,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),QO=function(n,e,t){for(var r,a=t.split(","),o=0,u=a.length;o<u;o++)(r=a[o])&&n.registerName(e,r)},WO=function(n,e){for(var t,r=((t=e.textContent)!==null&&t!==void 0?t:"").split(Bv),a=[],o=0,u=r.length;o<u;o++){var d=r[o].trim();if(d){var p=d.match(KO);if(p){var m=0|parseInt(p[1],10),y=p[2];m!==0&&(GO(y,m),QO(n,y,p[3]),n.getTag().insertRules(m,a)),a.length=0}else a.push(d)}}},Jb=function(n){for(var e=document.querySelectorAll($O),t=0,r=e.length;t<r;t++){var a=e[t];a&&a.getAttribute(tu)!==US&&(WO(n,a),a.parentNode&&a.parentNode.removeChild(a))}};function YO(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var KS=function(n){var e=document.head,t=n||e,r=document.createElement("style"),a=function(d){var p=Array.from(d.querySelectorAll("style[".concat(tu,"]")));return p[p.length-1]}(t),o=a!==void 0?a.nextSibling:null;r.setAttribute(tu,US),r.setAttribute(BS,pm);var u=YO();return u&&r.setAttribute("nonce",u),t.insertBefore(r,o),r},XO=function(){function n(e){this.element=KS(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(t){if(t.sheet)return t.sheet;for(var r=document.styleSheets,a=0,o=r.length;a<o;a++){var u=r[a];if(u.ownerNode===t)return u}throw sd(17)}(this.element),this.length=0}return n.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},n.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},n}(),ZO=function(){function n(e){this.element=KS(e),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var r=document.createTextNode(t);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},n.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},n}(),JO=function(){function n(e){this.rules=[],this.length=0}return n.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},n.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},n.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},n}(),eI=xp,ek={isServer:!xp,useCSSOMInjection:!DO},QS=function(){function n(e,t,r){e===void 0&&(e=nu),t===void 0&&(t={});var a=this;this.options=Fn(Fn({},ek),e),this.gs=t,this.names=new Map(r),this.server=!!e.isServer,!this.server&&xp&&eI&&(eI=!1,Jb(this)),Fv(this,function(){return function(o){for(var u=o.getTag(),d=u.length,p="",m=function(v){var w=function(z){return Np.get(z)}(v);if(w===void 0)return"continue";var S=o.names.get(w),P=u.getGroup(v);if(S===void 0||!S.size||P.length===0)return"continue";var U="".concat(tu,".g").concat(v,'[id="').concat(w,'"]'),L="";S!==void 0&&S.forEach(function(z){z.length>0&&(L+="".concat(z,","))}),p+="".concat(P).concat(U,'{content:"').concat(L,'"}').concat(Bv)},y=0;y<d;y++)m(y);return p}(a)})}return n.registerId=function(e){return Xf(e)},n.prototype.rehydrate=function(){!this.server&&xp&&Jb(this)},n.prototype.reconstructWithOptions=function(e,t){return t===void 0&&(t=!0),new n(Fn(Fn({},this.options),e),this.gs,t&&this.names||void 0)},n.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(e=function(t){var r=t.useCSSOMInjection,a=t.target;return t.isServer?new JO(a):r?new XO(a):new ZO(a)}(this.options),new HO(e)));var e},n.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},n.prototype.registerName=function(e,t){if(Xf(e),this.names.has(e))this.names.get(e).add(t);else{var r=new Set;r.add(t),this.names.set(e,r)}},n.prototype.insertRules=function(e,t,r){this.registerName(e,t),this.getTag().insertRules(Xf(e),r)},n.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},n.prototype.clearRules=function(e){this.getTag().clearGroup(Xf(e)),this.clearNames(e)},n.prototype.clearTag=function(){this.tag=void 0},n}(),tk=/&/g,nk=/^\s*\/\/.*$/gm;function WS(n,e){return n.map(function(t){return t.type==="rule"&&(t.value="".concat(e," ").concat(t.value),t.value=t.value.replaceAll(",",",".concat(e," ")),t.props=t.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(t.children)&&t.type!=="@keyframes"&&(t.children=WS(t.children,e)),t})}function rk(n){var e,t,r,a=nu,o=a.options,u=o===void 0?nu:o,d=a.plugins,p=d===void 0?mm:d,m=function(w,S,P){return P.startsWith(t)&&P.endsWith(t)&&P.replaceAll(t,"").length>0?".".concat(e):w},y=p.slice();y.push(function(w){w.type===cm&&w.value.includes("&")&&(w.props[0]=w.props[0].replace(tk,t).replace(r,m))}),u.prefix&&y.push(RO),y.push(IO);var v=function(w,S,P,U){S===void 0&&(S=""),P===void 0&&(P=""),U===void 0&&(U="&"),e=U,t=S,r=new RegExp("\\".concat(t,"\\b"),"g");var L=w.replace(nk,""),z=wO(P||S?"".concat(P," ").concat(S," { ").concat(L," }"):L);u.namespace&&(z=WS(z,u.namespace));var W=[];return Pp(z,AO(y.concat(SO(function(G){return W.push(G)})))),W};return v.hash=p.length?p.reduce(function(w,S){return S.name||sd(15),Gl(w,S.name)},FS).toString():"",v}var ik=new QS,By=rk(),YS=Dh.createContext({shouldForwardProp:void 0,styleSheet:ik,stylis:By});YS.Consumer;Dh.createContext(void 0);function tI(){return Y.useContext(YS)}var sk=function(){function n(e,t){var r=this;this.inject=function(a,o){o===void 0&&(o=By);var u=r.name+o.hash;a.hasNameForId(r.id,u)||a.insertRules(r.id,u,o(r.rules,u,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,Fv(this,function(){throw sd(12,String(r.name))})}return n.prototype.getName=function(e){return e===void 0&&(e=By),this.name+e.hash},n}(),ak=function(n){return n>="A"&&n<="Z"};function nI(n){for(var e="",t=0;t<n.length;t++){var r=n[t];if(t===1&&r==="-"&&n[0]==="-")return n;ak(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var XS=function(n){return n==null||n===!1||n===""},ZS=function(n){var e,t,r=[];for(var a in n){var o=n[a];n.hasOwnProperty(a)&&!XS(o)&&(Array.isArray(o)&&o.isCss||ru(o)?r.push("".concat(nI(a),":"),o,";"):xh(o)?r.push.apply(r,Dp(Dp(["".concat(a," {")],ZS(o),!1),["}"],!1)):r.push("".concat(nI(a),": ").concat((e=a,(t=o)==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in CO||e.startsWith("--")?String(t).trim():"".concat(t,"px")),";")))}return r};function yo(n,e,t,r){if(XS(n))return[];if(zv(n))return[".".concat(n.styledComponentId)];if(ru(n)){if(!ru(o=n)||o.prototype&&o.prototype.isReactComponent||!e)return[n];var a=n(e);return yo(a,e,t,r)}var o;return n instanceof sk?t?(n.inject(t,r),[n.getName(r)]):[n]:xh(n)?ZS(n):Array.isArray(n)?Array.prototype.concat.apply(mm,n.map(function(u){return yo(u,e,t,r)})):[n.toString()]}function ok(n){for(var e=0;e<n.length;e+=1){var t=n[e];if(ru(t)&&!zv(t))return!1}return!0}var lk=qS(pm),uk=function(){function n(e,t,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&ok(e),this.componentId=t,this.baseHash=Gl(lk,t),this.baseStyle=r,QS.registerId(t)}return n.prototype.generateAndInjectStyles=function(e,t,r){var a=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))a=ho(a,this.staticRulesId);else{var o=Zb(yo(this.rules,e,t,r)),u=Ly(Gl(this.baseHash,o)>>>0);if(!t.hasNameForId(this.componentId,u)){var d=r(o,".".concat(u),void 0,this.componentId);t.insertRules(this.componentId,u,d)}a=ho(a,u),this.staticRulesId=u}else{for(var p=Gl(this.baseHash,r.hash),m="",y=0;y<this.rules.length;y++){var v=this.rules[y];if(typeof v=="string")m+=v;else if(v){var w=Zb(yo(v,e,t,r));p=Gl(p,w+y),m+=w}}if(m){var S=Ly(p>>>0);t.hasNameForId(this.componentId,S)||t.insertRules(this.componentId,S,r(m,".".concat(S),void 0,this.componentId)),a=ho(a,S)}}return a},n}(),JS=Dh.createContext(void 0);JS.Consumer;var hy={};function ck(n,e,t){var r=zv(n),a=n,o=!cy(n),u=e.attrs,d=u===void 0?mm:u,p=e.componentId,m=p===void 0?function(oe,ae){var le=typeof oe!="string"?"sc":Kb(oe);hy[le]=(hy[le]||0)+1;var D="".concat(le,"-").concat(kO(pm+le+hy[le]));return ae?"".concat(ae,"-").concat(D):D}(e.displayName,e.parentComponentId):p,y=e.displayName,v=y===void 0?function(oe){return cy(oe)?"styled.".concat(oe):"Styled(".concat(VO(oe),")")}(n):y,w=e.displayName&&e.componentId?"".concat(Kb(e.displayName),"-").concat(e.componentId):e.componentId||m,S=r&&a.attrs?a.attrs.concat(d).filter(Boolean):d,P=e.shouldForwardProp;if(r&&a.shouldForwardProp){var U=a.shouldForwardProp;if(e.shouldForwardProp){var L=e.shouldForwardProp;P=function(oe,ae){return U(oe,ae)&&L(oe,ae)}}else P=U}var z=new uk(t,w,r?a.componentStyle:void 0);function W(oe,ae){return function(le,D,R){var A=le.attrs,x=le.componentStyle,V=le.defaultProps,F=le.foldedComponentIds,N=le.styledComponentId,Nt=le.target,It=Dh.useContext(JS),he=tI(),be=le.shouldForwardProp||he.shouldForwardProp,Te=PO(D,It,V)||nu,Oe=function(Ce,Re,ut){for(var Me,Ze=Fn(Fn({},Re),{className:void 0,theme:ut}),Ke=0;Ke<Ce.length;Ke+=1){var Ut=ru(Me=Ce[Ke])?Me(Ze):Me;for(var Jt in Ut)Ze[Jt]=Jt==="className"?ho(Ze[Jt],Ut[Jt]):Jt==="style"?Fn(Fn({},Ze[Jt]),Ut[Jt]):Ut[Jt]}return Re.className&&(Ze.className=ho(Ze.className,Re.className)),Ze}(A,D,Te),O=Oe.as||Nt,re={};for(var ge in Oe)Oe[ge]===void 0||ge[0]==="$"||ge==="as"||ge==="theme"&&Oe.theme===Te||(ge==="forwardedAs"?re.as=Oe.forwardedAs:be&&!be(ge,O)||(re[ge]=Oe[ge]));var pe=function(Ce,Re){var ut=tI(),Me=Ce.generateAndInjectStyles(Re,ut.styleSheet,ut.stylis);return Me}(x,Oe),fe=ho(F,N);return pe&&(fe+=" "+pe),Oe.className&&(fe+=" "+Oe.className),re[cy(O)&&!zS.has(O)?"class":"className"]=fe,R&&(re.ref=R),Y.createElement(O,re)}(G,oe,ae)}W.displayName=v;var G=Dh.forwardRef(W);return G.attrs=S,G.componentStyle=z,G.displayName=v,G.shouldForwardProp=P,G.foldedComponentIds=r?ho(a.foldedComponentIds,a.styledComponentId):"",G.styledComponentId=w,G.target=r?a.target:n,Object.defineProperty(G,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(oe){this._foldedDefaultProps=r?function(ae){for(var le=[],D=1;D<arguments.length;D++)le[D-1]=arguments[D];for(var R=0,A=le;R<A.length;R++)Uy(ae,A[R],!0);return ae}({},a.defaultProps,oe):oe}}),Fv(G,function(){return".".concat(G.styledComponentId)}),o&&$S(G,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),G}function rI(n,e){for(var t=[n[0]],r=0,a=e.length;r<a;r+=1)t.push(e[r],n[r+1]);return t}var iI=function(n){return Object.assign(n,{isCss:!0})};function hk(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];if(ru(n)||xh(n))return iI(yo(rI(mm,Dp([n],e,!0))));var r=n;return e.length===0&&r.length===1&&typeof r[0]=="string"?yo(r):iI(yo(rI(r,e)))}function zy(n,e,t){if(t===void 0&&(t=nu),!e)throw sd(1,e);var r=function(a){for(var o=[],u=1;u<arguments.length;u++)o[u-1]=arguments[u];return n(e,t,hk.apply(void 0,Dp([a],o,!1)))};return r.attrs=function(a){return zy(n,e,Fn(Fn({},t),{attrs:Array.prototype.concat(t.attrs,a).filter(Boolean)}))},r.withConfig=function(a){return zy(n,e,Fn(Fn({},t),a))},r}var eR=function(n){return zy(ck,n)},Pe=eR;zS.forEach(function(n){Pe[n]=eR(n)});const tR=Pe.button`
    width: auto;
    height: 48px;
    display: flex;
    gap: 20px;
    align-items: center;
    text-align: center;

    font-size: 20px;
    color: #2a2c53;
    background-color: #F8F7F1;
    border-radius: 50px;
    border: solid 1px #2a2c53;
    padding: 6px 32px;

    cursor: pointer;

    &:hover{
        color: white;
        background-color: #2a2c53;
    }
`,dk=Pe(tR)`
    width: auto;
    height: 48px;

    font-size: 20px;
    color: #fff;
    background-color: #2a2c53;
    border-radius: 50px;
    border: solid 1px #2a2c53;
    padding: 6px 32px;

    &:hover{
        background-color: #ef6a32;
        border: solid 1px #ef6a32;
    }
`,fk=Pe.button`
    width: 172px;
    height: 75px;

    font-size: 24px;
    color: #fff;
    background-color: #acd3a8;
    border-radius: 8px;
    border: solid 1px #8ab2a6;
    padding: 4px 32px;
    margin-left: 18px;

    cursor: pointer;

    &:hover{
        background-color: #8ab2a6;
    }
`;function gm(n){const[e,t]=Y.useState(!1),r=()=>{t(!0)},a=()=>{t(!1)},o=n.type||"create";if(o=="create")return ie.jsxs(tR,{onClick:n.onClick,onMouseEnter:r,onMouseLeave:a,children:[n.title||"Button",ie.jsx("img",{src:e?"/line-arrow-white.png":"/line-arrow-black.png",width:"24px",height:"24px",alt:""})]});if(o=="chat")return ie.jsx(fk,{onClick:n.onClick,children:n.title||"Button"});if(o=="upload")return ie.jsx(dk,{onClick:n.onClick,children:n.title||"Button"})}const pk=Pe.textarea`
    background-color: white;
    width: 1220px;
    height: ${n=>n.height}px;
    display: block;
    border: 1px solid #C4C4C4;
    border-radius: 8px;
    font-size: 24px;
    font-weight: 400;
    padding: 16px 40px;
    resize: none;
    color: #000;
    line-height: 40px

    font-family: 'Pretendard', 'Apple SD Gothic Neo', sans-serif;

    &:focus {
        outline: none;
        border: 2px solid #8AB2A6;
        // box-shadow: 0 0 5px rgba(42, 44, 83, 0.2);
    }
`;function Fy(n){const{height:e,value:t,onChange:r}=n;return ie.jsx(pk,{height:e||75,value:t,onChange:r})}const mk=Pe.div`
    color: #2A2C53;
    background-color: white;
    width: 1300px;
    height: 105px;

    cursor: pointer;
    
    display: flex;
    align-items: center;
    justify-content: space-between;

    border: 2px solid #DBDBDB;
    border-radius: 8px;
    padding: 0px 60px;
    &:hover{
        color: white;
        background-color: #ACD3A8;
        border: 2px solid #8AB2A6;
        transition: 0.2s all ease-in-out;
    }
    box-sizing: border-box;
`,gk=Pe.div`
    display: flex;
    align-items: center;
    gap: 150px;
`,_k=Pe.p`
    font-size: 24px;
`,yk=Pe.div`
    height: 99px;
    display: block;
    padding-top: 6px;
`,vk=Pe.div`
    display: flex;
    align-items: center;
    gap: 40px;
`,Ek=Pe.div`
    display: flex;
    align-items: center;
    gap: 6px;
`;function Tk(n){const{post:e,onClick:t}=n,a=(m=>{if(!m)return{day:"N/A",yearMonth:"N/A"};const y=new Date(parseInt(m)),v=y.getDate().toString().padStart(2,"0"),w=y.getFullYear().toString().slice(-2),S=(y.getMonth()+1).toString().padStart(2,"0");return{day:v,yearMonth:`${w}/${S}`}})(e.date),[o,u]=Y.useState(!0),d=()=>{u(!1)},p=()=>{u(!0)};return ie.jsxs(mk,{onClick:t,onMouseEnter:d,onMouseLeave:p,children:[ie.jsxs(gk,{children:[ie.jsxs(yk,{children:[ie.jsx("p",{className:"PIdateday",children:a.day}),ie.jsx("p",{className:"PIdateyear",children:a.yearMonth})]}),ie.jsx(_k,{children:e.title})]}),ie.jsxs(vk,{children:[ie.jsx("b",{children:e.category}),ie.jsxs(Ek,{children:[ie.jsx("img",{width:"30px",height:"30px",src:o?"/chat02.png":"/chat01.png",alt:""}),ie.jsx("p",{className:"PIchatnum",children:e.comments?e.comments.length:0})]})]})]})}const wk=()=>{};var sI={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nR=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let a=n.charCodeAt(r);a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):(a&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(a=65536+((a&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},bk=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const a=n[t++];if(a<128)e[r++]=String.fromCharCode(a);else if(a>191&&a<224){const o=n[t++];e[r++]=String.fromCharCode((a&31)<<6|o&63)}else if(a>239&&a<365){const o=n[t++],u=n[t++],d=n[t++],p=((a&7)<<18|(o&63)<<12|(u&63)<<6|d&63)-65536;e[r++]=String.fromCharCode(55296+(p>>10)),e[r++]=String.fromCharCode(56320+(p&1023))}else{const o=n[t++],u=n[t++];e[r++]=String.fromCharCode((a&15)<<12|(o&63)<<6|u&63)}}return e.join("")},rR={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let a=0;a<n.length;a+=3){const o=n[a],u=a+1<n.length,d=u?n[a+1]:0,p=a+2<n.length,m=p?n[a+2]:0,y=o>>2,v=(o&3)<<4|d>>4;let w=(d&15)<<2|m>>6,S=m&63;p||(S=64,u||(w=64)),r.push(t[y],t[v],t[w],t[S])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(nR(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):bk(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let a=0;a<n.length;){const o=t[n.charAt(a++)],d=a<n.length?t[n.charAt(a)]:0;++a;const m=a<n.length?t[n.charAt(a)]:64;++a;const v=a<n.length?t[n.charAt(a)]:64;if(++a,o==null||d==null||m==null||v==null)throw new Ik;const w=o<<2|d>>4;if(r.push(w),m!==64){const S=d<<4&240|m>>2;if(r.push(S),v!==64){const P=m<<6&192|v;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Ik extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ak=function(n){const e=nR(n);return rR.encodeByteArray(e,!0)},Op=function(n){return Ak(n).replace(/\./g,"")},qv=function(n){try{return rR.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function kp(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Sk(t)||(n[t]=kp(n[t],e[t]));return n}function Sk(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rk=()=>iR().__FIREBASE_DEFAULTS__,Ck=()=>{if(typeof process>"u"||typeof sI>"u")return;const n=sI.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Dk=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&qv(n[1]);return e&&JSON.parse(e)},jv=()=>{try{return wk()||Rk()||Ck()||Dk()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},sR=()=>{var n;return(n=jv())===null||n===void 0?void 0:n.config},Pk=n=>{var e;return(e=jv())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xk{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nk(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",a=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:a,exp:a+3600,auth_time:a,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Op(JSON.stringify(t)),Op(JSON.stringify(u)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ok(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(wt())}function Hv(){var n;const e=(n=jv())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function kk(){return typeof window<"u"||aR()}function aR(){return typeof WorkerGlobalScope<"u"&&typeof self<"u"&&self instanceof WorkerGlobalScope}function Vk(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function oR(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Gv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function lR(){const n=wt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function uR(){return!Hv()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Nh(){try{return typeof indexedDB=="object"}catch{return!1}}function Mk(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(r);a.onsuccess=()=>{a.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},a.onupgradeneeded=()=>{t=!1},a.onerror=()=>{var o;e(((o=a.error)===null||o===void 0?void 0:o.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lk="FirebaseError";class kn extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Lk,Object.setPrototypeOf(this,kn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Mo.prototype.create)}}class Mo{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},a=`${this.service}/${e}`,o=this.errors[e],u=o?Uk(o,r):"Error",d=`${this.serviceName}: ${u} (${a}).`;return new kn(a,d,r)}}function Uk(n,e){return n.replace(Bk,(t,r)=>{const a=e[r];return a!=null?String(a):`<${r}?>`})}const Bk=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aI(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function zk(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function ia(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const a of t){if(!r.includes(a))return!1;const o=n[a],u=e[a];if(oI(o)&&oI(u)){if(!ia(o,u))return!1}else if(o!==u)return!1}for(const a of r)if(!t.includes(a))return!1;return!0}function oI(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pu(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(a=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function $l(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[a,o]=r.split("=");e[decodeURIComponent(a)]=decodeURIComponent(o)}}),e}function uh(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function cR(n,e){const t=new Fk(n,e);return t.subscribe.bind(t)}class Fk{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let a;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");qk(e,["next","error","complete"])?a=e:a={next:e,error:t,complete:r},a.next===void 0&&(a.next=dy),a.error===void 0&&(a.error=dy),a.complete===void 0&&(a.complete=dy);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function qk(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function dy(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(n){return n&&n._delegate?n._delegate:n}class ci{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ro="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jk{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new xk;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:t});a&&r.resolve(a)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),a=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(a)return null;throw o}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Gk(e))try{this.getOrInitializeService({instanceIdentifier:ro})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(t);try{const o=this.getOrInitializeService({instanceIdentifier:a});r.resolve(o)}catch{}}}}clearInstance(e=ro){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ro){return this.instances.has(e)}getOptions(e=ro){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[o,u]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(o);r===d&&u.resolve(a)}return a}onInit(e,t){var r;const a=this.normalizeInstanceIdentifier(t),o=(r=this.onInitCallbacks.get(a))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(a,o);const u=this.instances.get(a);return u&&e(u,a),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const a of r)try{a(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Hk(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ro){return this.component?this.component.multipleInstances?e:ro:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Hk(n){return n===ro?void 0:n}function Gk(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new jk(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $v=[];var Be;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Be||(Be={}));const dR={debug:Be.DEBUG,verbose:Be.VERBOSE,info:Be.INFO,warn:Be.WARN,error:Be.ERROR,silent:Be.SILENT},$k=Be.INFO,Kk={[Be.DEBUG]:"log",[Be.VERBOSE]:"log",[Be.INFO]:"info",[Be.WARN]:"warn",[Be.ERROR]:"error"},Qk=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),a=Kk[e];if(a)console[a](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class _m{constructor(e){this.name=e,this._logLevel=$k,this._logHandler=Qk,this._userLogHandler=null,$v.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Be))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?dR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Be.DEBUG,...e),this._logHandler(this,Be.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Be.VERBOSE,...e),this._logHandler(this,Be.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Be.INFO,...e),this._logHandler(this,Be.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Be.WARN,...e),this._logHandler(this,Be.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Be.ERROR,...e),this._logHandler(this,Be.ERROR,...e)}}function Wk(n){$v.forEach(e=>{e.setLogLevel(n)})}function Yk(n,e){for(const t of $v){let r=null;e&&e.level&&(r=dR[e.level]),n===null?t.userLogHandler=null:t.userLogHandler=(a,o,...u)=>{const d=u.map(p=>{if(p==null)return null;if(typeof p=="string")return p;if(typeof p=="number"||typeof p=="boolean")return p.toString();if(p instanceof Error)return p.message;try{return JSON.stringify(p)}catch{return null}}).filter(p=>p).join(" ");o>=(r??a.logLevel)&&n({level:Be[o].toLowerCase(),message:d,args:u,type:a.name})}}}const Xk=(n,e)=>e.some(t=>n instanceof t);let lI,uI;function Zk(){return lI||(lI=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Jk(){return uI||(uI=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const fR=new WeakMap,qy=new WeakMap,pR=new WeakMap,fy=new WeakMap,Kv=new WeakMap;function eV(n){const e=new Promise((t,r)=>{const a=()=>{n.removeEventListener("success",o),n.removeEventListener("error",u)},o=()=>{t(Js(n.result)),a()},u=()=>{r(n.error),a()};n.addEventListener("success",o),n.addEventListener("error",u)});return e.then(t=>{t instanceof IDBCursor&&fR.set(t,n)}).catch(()=>{}),Kv.set(e,n),e}function tV(n){if(qy.has(n))return;const e=new Promise((t,r)=>{const a=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",u),n.removeEventListener("abort",u)},o=()=>{t(),a()},u=()=>{r(n.error||new DOMException("AbortError","AbortError")),a()};n.addEventListener("complete",o),n.addEventListener("error",u),n.addEventListener("abort",u)});qy.set(n,e)}let jy={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return qy.get(n);if(e==="objectStoreNames")return n.objectStoreNames||pR.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Js(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function nV(n){jy=n(jy)}function rV(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(py(this),e,...t);return pR.set(r,e.sort?e.sort():[e]),Js(r)}:Jk().includes(n)?function(...e){return n.apply(py(this),e),Js(fR.get(this))}:function(...e){return Js(n.apply(py(this),e))}}function iV(n){return typeof n=="function"?rV(n):(n instanceof IDBTransaction&&tV(n),Xk(n,Zk())?new Proxy(n,jy):n)}function Js(n){if(n instanceof IDBRequest)return eV(n);if(fy.has(n))return fy.get(n);const e=iV(n);return e!==n&&(fy.set(n,e),Kv.set(e,n)),e}const py=n=>Kv.get(n);function sV(n,e,{blocked:t,upgrade:r,blocking:a,terminated:o}={}){const u=indexedDB.open(n,e),d=Js(u);return r&&u.addEventListener("upgradeneeded",p=>{r(Js(u.result),p.oldVersion,p.newVersion,Js(u.transaction),p)}),t&&u.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),d.then(p=>{o&&p.addEventListener("close",()=>o()),a&&p.addEventListener("versionchange",m=>a(m.oldVersion,m.newVersion,m))}).catch(()=>{}),d}const aV=["get","getKey","getAll","getAllKeys","count"],oV=["put","add","delete","clear"],my=new Map;function cI(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(my.get(e))return my.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,a=oV.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(a||aV.includes(t)))return;const o=async function(u,...d){const p=this.transaction(u,a?"readwrite":"readonly");let m=p.store;return r&&(m=m.index(d.shift())),(await Promise.all([m[t](...d),a&&p.done]))[0]};return my.set(e,o),o}nV(n=>({...n,get:(e,t,r)=>cI(e,t)||n.get(e,t,r),has:(e,t)=>!!cI(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lV{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(uV(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function uV(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Vp="@firebase/app",Hy="0.11.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wi=new _m("@firebase/app"),cV="@firebase/app-compat",hV="@firebase/analytics-compat",dV="@firebase/analytics",fV="@firebase/app-check-compat",pV="@firebase/app-check",mV="@firebase/auth",gV="@firebase/auth-compat",_V="@firebase/database",yV="@firebase/data-connect",vV="@firebase/database-compat",EV="@firebase/functions",TV="@firebase/functions-compat",wV="@firebase/installations",bV="@firebase/installations-compat",IV="@firebase/messaging",AV="@firebase/messaging-compat",SV="@firebase/performance",RV="@firebase/performance-compat",CV="@firebase/remote-config",DV="@firebase/remote-config-compat",PV="@firebase/storage",xV="@firebase/storage-compat",NV="@firebase/firestore",OV="@firebase/vertexai",kV="@firebase/firestore-compat",VV="firebase",MV="11.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sa="[DEFAULT]",LV={[Vp]:"fire-core",[cV]:"fire-core-compat",[dV]:"fire-analytics",[hV]:"fire-analytics-compat",[pV]:"fire-app-check",[fV]:"fire-app-check-compat",[mV]:"fire-auth",[gV]:"fire-auth-compat",[_V]:"fire-rtdb",[yV]:"fire-data-connect",[vV]:"fire-rtdb-compat",[EV]:"fire-fn",[TV]:"fire-fn-compat",[wV]:"fire-iid",[bV]:"fire-iid-compat",[IV]:"fire-fcm",[AV]:"fire-fcm-compat",[SV]:"fire-perf",[RV]:"fire-perf-compat",[CV]:"fire-rc",[DV]:"fire-rc-compat",[PV]:"fire-gcs",[xV]:"fire-gcs-compat",[NV]:"fire-fst",[kV]:"fire-fst-compat",[OV]:"fire-vertex","fire-js":"fire-js",[VV]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aa=new Map,iu=new Map,su=new Map;function Oh(n,e){try{n.container.addComponent(e)}catch(t){Wi.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function mR(n,e){n.container.addOrOverwriteComponent(e)}function oa(n){const e=n.name;if(su.has(e))return Wi.debug(`There were multiple attempts to register component ${e}.`),!1;su.set(e,n);for(const t of aa.values())Oh(t,n);for(const t of iu.values())Oh(t,n);return!0}function gR(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function UV(n,e,t=sa){gR(n,e).clearInstance(t)}function _R(n){return n.options!==void 0}function ft(n){return n==null?!1:n.settings!==void 0}function BV(){su.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zV={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Tr=new Mo("app","Firebase",zV);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yR=class{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ci("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Tr.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hI(n,e){const t=qv(n.split(".")[1]);if(t===null){console.error(`FirebaseServerApp ${e} is invalid: second part could not be parsed.`);return}if(JSON.parse(t).exp===void 0){console.error(`FirebaseServerApp ${e} is invalid: expiration claim could not be parsed`);return}const a=JSON.parse(t).exp*1e3,o=new Date().getTime();a-o<=0&&console.error(`FirebaseServerApp ${e} is invalid: the token has expired.`)}class FV extends yR{constructor(e,t,r,a){const o=t.automaticDataCollectionEnabled!==void 0?t.automaticDataCollectionEnabled:!1,u={name:r,automaticDataCollectionEnabled:o};if(e.apiKey!==void 0)super(e,u,a);else{const d=e;super(d.options,u,a)}this._serverConfig=Object.assign({automaticDataCollectionEnabled:o},t),this._serverConfig.authIdToken&&hI(this._serverConfig.authIdToken,"authIdToken"),this._serverConfig.appCheckToken&&hI(this._serverConfig.appCheckToken,"appCheckToken"),this._finalizationRegistry=null,typeof FinalizationRegistry<"u"&&(this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()})),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,t.releaseOnDeref=void 0,Or(Vp,Hy,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,e!==void 0&&this._finalizationRegistry!==null&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){Wv(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw Tr.create("server-app-deleted")}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _a=MV;function Qv(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:sa,automaticDataCollectionEnabled:!1},e),a=r.name;if(typeof a!="string"||!a)throw Tr.create("bad-app-name",{appName:String(a)});if(t||(t=sR()),!t)throw Tr.create("no-options");const o=aa.get(a);if(o){if(ia(t,o.options)&&ia(r,o.config))return o;throw Tr.create("duplicate-app",{appName:a})}const u=new hR(a);for(const p of su.values())u.addComponent(p);const d=new yR(t,r,u);return aa.set(a,d),d}function qV(n,e){if(kk()&&!aR())throw Tr.create("invalid-server-app-environment");e.automaticDataCollectionEnabled===void 0&&(e.automaticDataCollectionEnabled=!1);let t;_R(n)?t=n.options:t=n;const r=Object.assign(Object.assign({},e),t);r.releaseOnDeref!==void 0&&delete r.releaseOnDeref;const a=m=>[...m].reduce((y,v)=>Math.imul(31,y)+v.charCodeAt(0)|0,0);if(e.releaseOnDeref!==void 0&&typeof FinalizationRegistry>"u")throw Tr.create("finalization-registry-not-supported",{});const o=""+a(JSON.stringify(r)),u=iu.get(o);if(u)return u.incRefCount(e.releaseOnDeref),u;const d=new hR(o);for(const m of su.values())d.addComponent(m);const p=new FV(t,e,o,d);return iu.set(o,p),p}function jV(n=sa){const e=aa.get(n);if(!e&&n===sa&&sR())return Qv();if(!e)throw Tr.create("no-app",{appName:n});return e}function HV(){return Array.from(aa.values())}async function Wv(n){let e=!1;const t=n.name;aa.has(t)?(e=!0,aa.delete(t)):iu.has(t)&&n.decRefCount()<=0&&(iu.delete(t),e=!0),e&&(await Promise.all(n.container.getProviders().map(r=>r.delete())),n.isDeleted=!0)}function Or(n,e,t){var r;let a=(r=LV[n])!==null&&r!==void 0?r:n;t&&(a+=`-${t}`);const o=a.match(/\s|\//),u=e.match(/\s|\//);if(o||u){const d=[`Unable to register library "${a}" with version "${e}":`];o&&d.push(`library name "${a}" contains illegal characters (whitespace or "/")`),o&&u&&d.push("and"),u&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Wi.warn(d.join(" "));return}oa(new ci(`${a}-version`,()=>({library:a,version:e}),"VERSION"))}function vR(n,e){if(n!==null&&typeof n!="function")throw Tr.create("invalid-log-argument");Yk(n,e)}function ER(n){Wk(n)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GV="firebase-heartbeat-database",$V=1,kh="firebase-heartbeat-store";let gy=null;function TR(){return gy||(gy=sV(GV,$V,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(kh)}catch(t){console.warn(t)}}}}).catch(n=>{throw Tr.create("idb-open",{originalErrorMessage:n.message})})),gy}async function KV(n){try{const t=(await TR()).transaction(kh),r=await t.objectStore(kh).get(wR(n));return await t.done,r}catch(e){if(e instanceof kn)Wi.warn(e.message);else{const t=Tr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Wi.warn(t.message)}}}async function dI(n,e){try{const r=(await TR()).transaction(kh,"readwrite");await r.objectStore(kh).put(e,wR(n)),await r.done}catch(t){if(t instanceof kn)Wi.warn(t.message);else{const r=Tr.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Wi.warn(r.message)}}}function wR(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QV=1024,WV=30;class YV{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new ZV(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=fI();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(u=>u.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:a}),this._heartbeatsCache.heartbeats.length>WV){const u=JV(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(u,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Wi.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=fI(),{heartbeatsToSend:r,unsentEntries:a}=XV(this._heartbeatsCache.heartbeats),o=Op(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return Wi.warn(t),""}}}function fI(){return new Date().toISOString().substring(0,10)}function XV(n,e=QV){const t=[];let r=n.slice();for(const a of n){const o=t.find(u=>u.agent===a.agent);if(o){if(o.dates.push(a.date),pI(t)>e){o.dates.pop();break}}else if(t.push({agent:a.agent,dates:[a.date]}),pI(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class ZV{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Nh()?Mk().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await KV(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return dI(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:a.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return dI(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...e.heartbeats]})}else return}}function pI(n){return Op(JSON.stringify({version:2,heartbeats:n})).length}function JV(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eM(n){oa(new ci("platform-logger",e=>new lV(e),"PRIVATE")),oa(new ci("heartbeat",e=>new YV(e),"PRIVATE")),Or(Vp,Hy,n),Or(Vp,Hy,"esm2017"),Or("fire-js","")}eM("");const tM=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:kn,SDK_VERSION:_a,_DEFAULT_ENTRY_NAME:sa,_addComponent:Oh,_addOrOverwriteComponent:mR,_apps:aa,_clearComponents:BV,_components:su,_getProvider:gR,_isFirebaseApp:_R,_isFirebaseServerApp:ft,_registerComponent:oa,_removeServiceInstance:UV,_serverApps:iu,deleteApp:Wv,getApp:jV,getApps:HV,initializeApp:Qv,initializeServerApp:qV,onLog:vR,registerVersion:Or,setLogLevel:ER},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nM{constructor(e,t){this._delegate=e,this.firebase=t,Oh(e,new ci("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Wv(this._delegate)))}_getService(e,t=sa){var r;this._delegate.checkDestroyed();const a=this._delegate.container.getProvider(e);return!a.isInitialized()&&((r=a.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&a.initialize(),a.getImmediate({identifier:t})}_removeServiceInstance(e,t=sa){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){Oh(this._delegate,e)}_addOrOverwriteComponent(e){mR(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rM={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},mI=new Mo("app-compat","Firebase",rM);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iM(n){const e={},t={__esModule:!0,initializeApp:o,app:a,registerVersion:Or,setLogLevel:ER,onLog:vR,apps:null,SDK_VERSION:_a,INTERNAL:{registerComponent:d,removeApp:r,useAsService:p,modularAPIs:tM}};t.default=t,Object.defineProperty(t,"apps",{get:u});function r(m){delete e[m]}function a(m){if(m=m||sa,!aI(e,m))throw mI.create("no-app",{appName:m});return e[m]}a.App=n;function o(m,y={}){const v=Qv(m,y);if(aI(e,v.name))return e[v.name];const w=new n(v,t);return e[v.name]=w,w}function u(){return Object.keys(e).map(m=>e[m])}function d(m){const y=m.name,v=y.replace("-compat","");if(oa(m)&&m.type==="PUBLIC"){const w=(S=a())=>{if(typeof S[v]!="function")throw mI.create("invalid-app-argument",{appName:y});return S[v]()};m.serviceProps!==void 0&&kp(w,m.serviceProps),t[v]=w,n.prototype[v]=function(...S){return this._getService.bind(this,y).apply(this,m.multipleInstances?S:[])}}return m.type==="PUBLIC"?t[v]:null}function p(m,y){return y==="serverAuth"?null:y}return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bR(){const n=iM(nM);n.INTERNAL=Object.assign(Object.assign({},n.INTERNAL),{createFirebaseNamespace:bR,extendNamespace:e,createSubscribe:cR,ErrorFactory:Mo,deepExtend:kp});function e(t){kp(n,t)}return n}const sM=bR();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gI=new _m("@firebase/app-compat"),aM="@firebase/app-compat",oM="0.2.53";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lM(n){Or(aM,oM,n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */try{const n=iR();if(n.firebase!==void 0){gI.warn(`
      Warning: Firebase is already defined in the global scope. Please make sure
      Firebase library is only loaded once.
    `);const e=n.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&gI.warn(`
        Warning: You are trying to load Firebase while using Firebase Performance standalone script.
        You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
        `)}}catch{}const xu=sM;lM();var uM="firebase",cM="11.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xu.registerVersion(uM,cM,"app-compat");const Zc={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",TWITTER:"twitter.com"},Ol={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hM(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registered for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements.","invalid-hosting-link-domain":"The provided Hosting link domain is not configured in Firebase Hosting or is not owned by the current project. This cannot be a default Hosting domain (`web.app` or `firebaseapp.com`)."}}function IR(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const dM=hM,fM=IR,AR=new Mo("auth","Firebase",IR());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mp=new _m("@firebase/auth");function pM(n,...e){Mp.logLevel<=Be.WARN&&Mp.warn(`Auth (${_a}): ${n}`,...e)}function pp(n,...e){Mp.logLevel<=Be.ERROR&&Mp.error(`Auth (${_a}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vn(n,...e){throw Xv(n,...e)}function Xt(n,...e){return Xv(n,...e)}function Yv(n,e,t){const r=Object.assign(Object.assign({},fM()),{[e]:t});return new Mo("auth","Firebase",r).create(e,{appName:n.name})}function hn(n){return Yv(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Nu(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&vn(n,"argument-error"),Yv(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Xv(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return AR.create(n,...e)}function se(n,e,...t){if(!n)throw Xv(e,...t)}function ii(n){const e="INTERNAL ASSERTION FAILED: "+n;throw pp(e),new Error(e)}function kr(n,e){n||ii(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vh(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Zv(){return _I()==="http:"||_I()==="https:"}function _I(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mM(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Zv()||oR()||"connection"in navigator)?navigator.onLine:!0}function gM(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad{constructor(e,t){this.shortDelay=e,this.longDelay=t,kr(t>e,"Short delay should be less than long delay!"),this.isMobile=Ok()||Gv()}get(){return mM()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jv(n,e){kr(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SR{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ii("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ii("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ii("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _M={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yM=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],vM=new ad(3e4,6e4);function Pt(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function xt(n,e,t,r,a={}){return RR(n,a,async()=>{let o={},u={};r&&(e==="GET"?u=r:o={body:JSON.stringify(r)});const d=Pu(Object.assign({key:n.config.apiKey},u)).slice(1),p=await n._getAdditionalHeaders();p["Content-Type"]="application/json",n.languageCode&&(p["X-Firebase-Locale"]=n.languageCode);const m=Object.assign({method:e,headers:p},o);return Vk()||(m.referrerPolicy="no-referrer"),SR.fetch()(await CR(n,n.config.apiHost,t,d),m)})}async function RR(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},_M),e);try{const a=new TM(n),o=await Promise.race([t(),a.promise]);a.clearNetworkTimeout();const u=await o.json();if("needConfirmation"in u)throw ch(n,"account-exists-with-different-credential",u);if(o.ok&&!("errorMessage"in u))return u;{const d=o.ok?u.errorMessage:u.error.message,[p,m]=d.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw ch(n,"credential-already-in-use",u);if(p==="EMAIL_EXISTS")throw ch(n,"email-already-in-use",u);if(p==="USER_DISABLED")throw ch(n,"user-disabled",u);const y=r[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(m)throw Yv(n,y,m);vn(n,y)}}catch(a){if(a instanceof kn)throw a;vn(n,"network-request-failed",{message:String(a)})}}async function es(n,e,t,r,a={}){const o=await xt(n,e,t,r,a);return"mfaPendingCredential"in o&&vn(n,"multi-factor-auth-required",{_serverResponse:o}),o}async function CR(n,e,t,r){const a=`${e}${t}?${r}`,o=n,u=o.config.emulator?Jv(n.config,a):`${n.config.apiScheme}://${a}`;return yM.includes(t)&&(await o._persistenceManagerAvailable,o._getPersistenceType()==="COOKIE")?o._getPersistence()._getFinalTarget(u).toString():u}function EM(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class TM{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Xt(this.auth,"network-request-failed")),vM.get())})}}function ch(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const a=Xt(n,e,r);return a.customData._tokenResponse=t,a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yI(n){return n!==void 0&&n.getResponse!==void 0}function vI(n){return n!==void 0&&n.enterprise!==void 0}class DR{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return EM(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wM(n){return(await xt(n,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function PR(n,e){return xt(n,"GET","/v2/recaptchaConfig",Pt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bM(n,e){return xt(n,"POST","/v1/accounts:delete",e)}async function IM(n,e){return xt(n,"POST","/v1/accounts:update",e)}async function Lp(n,e){return xt(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _h(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function AM(n,e=!1){const t=Ie(n),r=await t.getIdToken(e),a=ym(r);se(a&&a.exp&&a.auth_time&&a.iat,t.auth,"internal-error");const o=typeof a.firebase=="object"?a.firebase:void 0,u=o==null?void 0:o.sign_in_provider;return{claims:a,token:r,authTime:_h(_y(a.auth_time)),issuedAtTime:_h(_y(a.iat)),expirationTime:_h(_y(a.exp)),signInProvider:u||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function _y(n){return Number(n)*1e3}function ym(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return pp("JWT malformed, contained fewer than 3 sections"),null;try{const a=qv(t);return a?JSON.parse(a):(pp("Failed to decode base64 JWT payload"),null)}catch(a){return pp("Caught error parsing JWT payload as JSON",a==null?void 0:a.toString()),null}}function EI(n){const e=ym(n);return se(e,"internal-error"),se(typeof e.exp<"u","internal-error"),se(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yi(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof kn&&SM(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function SM({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RM{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const a=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,a)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gy{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=_h(this.lastLoginAt),this.creationTime=_h(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mh(n){var e;const t=n.auth,r=await n.getIdToken(),a=await Yi(n,Lp(t,{idToken:r}));se(a==null?void 0:a.users.length,t,"internal-error");const o=a.users[0];n._notifyReloadListener(o);const u=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?xR(o.providerUserInfo):[],d=DM(n.providerData,u),p=n.isAnonymous,m=!(n.email&&o.passwordHash)&&!(d!=null&&d.length),y=p?m:!1,v={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:d,metadata:new Gy(o.createdAt,o.lastLoginAt),isAnonymous:y};Object.assign(n,v)}async function CM(n){const e=Ie(n);await Mh(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function DM(n,e){return[...n.filter(r=>!e.some(a=>a.providerId===r.providerId)),...e]}function xR(n){return n.map(e=>{var{providerId:t}=e,r=Mv(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PM(n,e){const t=await RR(n,{},async()=>{const r=Pu({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:o}=n.config,u=await CR(n,a,"/v1/token",`key=${o}`),d=await n._getAdditionalHeaders();return d["Content-Type"]="application/x-www-form-urlencoded",SR.fetch()(u,{method:"POST",headers:d,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function xM(n,e){return xt(n,"POST","/v2/accounts:revokeToken",Pt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){se(e.idToken,"internal-error"),se(typeof e.idToken<"u","internal-error"),se(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):EI(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){se(e.length!==0,"internal-error");const t=EI(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(se(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:a,expiresIn:o}=await PM(e,t);this.updateTokensAndExpiration(r,a,Number(o))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:a,expirationTime:o}=t,u=new Kl;return r&&(se(typeof r=="string","internal-error",{appName:e}),u.refreshToken=r),a&&(se(typeof a=="string","internal-error",{appName:e}),u.accessToken=a),o&&(se(typeof o=="number","internal-error",{appName:e}),u.expirationTime=o),u}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Kl,this.toJSON())}_performRefresh(){return ii("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function js(n,e){se(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class xr{constructor(e){var{uid:t,auth:r,stsTokenManager:a}=e,o=Mv(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new RM(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Gy(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await Yi(this,this.stsTokenManager.getToken(this.auth,e));return se(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return AM(this,e)}reload(){return CM(this)}_assign(e){this!==e&&(se(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new xr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){se(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Mh(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ft(this.auth.app))return Promise.reject(hn(this.auth));const e=await this.getIdToken();return await Yi(this,bM(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,a,o,u,d,p,m,y;const v=(r=t.displayName)!==null&&r!==void 0?r:void 0,w=(a=t.email)!==null&&a!==void 0?a:void 0,S=(o=t.phoneNumber)!==null&&o!==void 0?o:void 0,P=(u=t.photoURL)!==null&&u!==void 0?u:void 0,U=(d=t.tenantId)!==null&&d!==void 0?d:void 0,L=(p=t._redirectEventId)!==null&&p!==void 0?p:void 0,z=(m=t.createdAt)!==null&&m!==void 0?m:void 0,W=(y=t.lastLoginAt)!==null&&y!==void 0?y:void 0,{uid:G,emailVerified:oe,isAnonymous:ae,providerData:le,stsTokenManager:D}=t;se(G&&D,e,"internal-error");const R=Kl.fromJSON(this.name,D);se(typeof G=="string",e,"internal-error"),js(v,e.name),js(w,e.name),se(typeof oe=="boolean",e,"internal-error"),se(typeof ae=="boolean",e,"internal-error"),js(S,e.name),js(P,e.name),js(U,e.name),js(L,e.name),js(z,e.name),js(W,e.name);const A=new xr({uid:G,auth:e,email:w,emailVerified:oe,displayName:v,isAnonymous:ae,photoURL:P,phoneNumber:S,tenantId:U,stsTokenManager:R,createdAt:z,lastLoginAt:W});return le&&Array.isArray(le)&&(A.providerData=le.map(x=>Object.assign({},x))),L&&(A._redirectEventId=L),A}static async _fromIdTokenResponse(e,t,r=!1){const a=new Kl;a.updateFromServerResponse(t);const o=new xr({uid:t.localId,auth:e,stsTokenManager:a,isAnonymous:r});return await Mh(o),o}static async _fromGetAccountInfoResponse(e,t,r){const a=t.users[0];se(a.localId!==void 0,"internal-error");const o=a.providerUserInfo!==void 0?xR(a.providerUserInfo):[],u=!(a.email&&a.passwordHash)&&!(o!=null&&o.length),d=new Kl;d.updateFromIdToken(r);const p=new xr({uid:a.localId,auth:e,stsTokenManager:d,isAnonymous:u}),m={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:o,metadata:new Gy(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!(o!=null&&o.length)};return Object.assign(p,m),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TI=new Map;function tr(n){kr(n instanceof Function,"Expected a class definition");let e=TI.get(n);return e?(kr(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,TI.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NR{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}NR.type="NONE";const au=NR;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vo(n,e,t){return`firebase:${n}:${e}:${t}`}class Ql{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:a,name:o}=this.auth;this.fullUserKey=vo(this.userKey,a.apiKey,o),this.fullPersistenceKey=vo("persistence",a.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Lp(this.auth,{idToken:e}).catch(()=>{});return t?xr._fromGetAccountInfoResponse(this.auth,t,e):null}return xr._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Ql(tr(au),e,r);const a=(await Promise.all(t.map(async m=>{if(await m._isAvailable())return m}))).filter(m=>m);let o=a[0]||tr(au);const u=vo(r,e.config.apiKey,e.name);let d=null;for(const m of t)try{const y=await m._get(u);if(y){let v;if(typeof y=="string"){const w=await Lp(e,{idToken:y}).catch(()=>{});if(!w)break;v=await xr._fromGetAccountInfoResponse(e,w,y)}else v=xr._fromJSON(e,y);m!==o&&(d=v),o=m;break}}catch{}const p=a.filter(m=>m._shouldAllowMigration);return!o._shouldAllowMigration||!p.length?new Ql(o,e,r):(o=p[0],d&&await o._set(u,d.toJSON()),await Promise.all(t.map(async m=>{if(m!==o)try{await m._remove(u)}catch{}})),new Ql(o,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wI(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(MR(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(OR(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(LR(e))return"Blackberry";if(UR(e))return"Webos";if(kR(e))return"Safari";if((e.includes("chrome/")||VR(e))&&!e.includes("edge/"))return"Chrome";if(od(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function OR(n=wt()){return/firefox\//i.test(n)}function kR(n=wt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function VR(n=wt()){return/crios\//i.test(n)}function MR(n=wt()){return/iemobile/i.test(n)}function od(n=wt()){return/android/i.test(n)}function LR(n=wt()){return/blackberry/i.test(n)}function UR(n=wt()){return/webos/i.test(n)}function ld(n=wt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function NM(n=wt()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(n)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(n)}function OM(n=wt()){var e;return ld(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function kM(){return lR()&&document.documentMode===10}function BR(n=wt()){return ld(n)||od(n)||UR(n)||LR(n)||/windows phone/i.test(n)||MR(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zR(n,e=[]){let t;switch(n){case"Browser":t=wI(wt());break;case"Worker":t=`${wI(wt())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${_a}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VM{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=o=>new Promise((u,d)=>{try{const p=e(o);u(p)}catch(p){d(p)}});r.onAbort=t,this.queue.push(r);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const a of t)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MM(n,e={}){return xt(n,"GET","/v2/passwordPolicy",Pt(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LM=6;class UM{constructor(e){var t,r,a,o;const u=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=u.minPasswordLength)!==null&&t!==void 0?t:LM,u.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=u.maxPasswordLength),u.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=u.containsLowercaseCharacter),u.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=u.containsUppercaseCharacter),u.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=u.containsNumericCharacter),u.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=u.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(a=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&a!==void 0?a:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,a,o,u,d;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(t=p.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),p.isValid&&(p.isValid=(r=p.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),p.isValid&&(p.isValid=(a=p.containsLowercaseLetter)!==null&&a!==void 0?a:!0),p.isValid&&(p.isValid=(o=p.containsUppercaseLetter)!==null&&o!==void 0?o:!0),p.isValid&&(p.isValid=(u=p.containsNumericCharacter)!==null&&u!==void 0?u:!0),p.isValid&&(p.isValid=(d=p.containsNonAlphanumericCharacter)!==null&&d!==void 0?d:!0),p}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),a&&(t.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let a=0;a<e.length;a++)r=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,a,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BM{constructor(e,t,r,a){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new bI(this),this.idTokenSubscription=new bI(this),this.beforeStateQueue=new VM(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=AR,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion,this._persistenceManagerAvailable=new Promise(o=>this._resolvePersistenceManagerAvailable=o)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=tr(t)),this._initializationPromise=this.queue(async()=>{var r,a,o;if(!this._deleted&&(this.persistenceManager=await Ql.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((a=this._popupRedirectResolver)===null||a===void 0)&&a._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Lp(this,{idToken:e}),r=await xr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(ft(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(d,d))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let a=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,d=a==null?void 0:a._redirectEventId,p=await this.tryRedirectSignIn(e);(!u||u===d)&&(p!=null&&p.user)&&(a=p.user,o=!0)}if(!a)return this.directlySetCurrentUser(null);if(!a._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(a)}catch(u){a=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return a?this.reloadAndSetCurrentUserOrClear(a):this.directlySetCurrentUser(null)}return se(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===a._redirectEventId?this.directlySetCurrentUser(a):this.reloadAndSetCurrentUserOrClear(a)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Mh(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=gM()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ft(this.app))return Promise.reject(hn(this));const t=e?Ie(e):null;return t&&se(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&se(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ft(this.app)?Promise.reject(hn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ft(this.app)?Promise.reject(hn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(tr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await MM(this),t=new UM(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Mo("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await xM(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&tr(e)||this._popupRedirectResolver;se(t,this,"argument-error"),this.redirectPersistenceManager=await Ql.create(this,[tr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,a){if(this._deleted)return()=>{};const o=typeof t=="function"?t:t.next.bind(t);let u=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(se(d,this,"internal-error"),d.then(()=>{u||o(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,r,a);return()=>{u=!0,p()}}else{const p=e.addObserver(t);return()=>{u=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return se(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=zR(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const a=await this._getAppCheckToken();return a&&(t["X-Firebase-AppCheck"]=a),t}async _getAppCheckToken(){var e;if(ft(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&pM(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function bt(n){return Ie(n)}class bI{constructor(e){this.auth=e,this.observer=null,this.addObserver=cR(t=>this.observer=t)}get next(){return se(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ud={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function zM(n){ud=n}function eE(n){return ud.loadJS(n)}function FM(){return ud.recaptchaV2Script}function qM(){return ud.recaptchaEnterpriseScript}function jM(){return ud.gapiScript}function FR(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HM=500,GM=6e4,Zf=1e12;class $M{constructor(e){this.auth=e,this.counter=Zf,this._widgets=new Map}render(e,t){const r=this.counter;return this._widgets.set(r,new WM(e,this.auth.name,t||{})),this.counter++,r}reset(e){var t;const r=e||Zf;(t=this._widgets.get(r))===null||t===void 0||t.delete(),this._widgets.delete(r)}getResponse(e){var t;const r=e||Zf;return((t=this._widgets.get(r))===null||t===void 0?void 0:t.getResponse())||""}async execute(e){var t;const r=e||Zf;return(t=this._widgets.get(r))===null||t===void 0||t.execute(),""}}class KM{constructor(){this.enterprise=new QM}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class QM{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class WM{constructor(e,t,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const a=typeof e=="string"?document.getElementById(e):e;se(a,"argument-error",{appName:t}),this.container=a,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=YM(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},GM)},HM))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function YM(n){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<n;r++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}const XM="recaptcha-enterprise",yh="NO_RECAPTCHA";class qR{constructor(e){this.type=XM,this.auth=bt(e)}async verify(e="verify",t=!1){async function r(o){if(!t){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(u,d)=>{PR(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const m=new DR(p);return o.tenantId==null?o._agentRecaptchaConfig=m:o._tenantRecaptchaConfigs[o.tenantId]=m,u(m.siteKey)}}).catch(p=>{d(p)})})}function a(o,u,d){const p=window.grecaptcha;vI(p)?p.enterprise.ready(()=>{p.enterprise.execute(o,{action:e}).then(m=>{u(m)}).catch(()=>{u(yh)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new KM().execute("siteKey",{action:"verify"}):new Promise((o,u)=>{r(this.auth).then(d=>{if(!t&&vI(window.grecaptcha))a(d,o,u);else{if(typeof window>"u"){u(new Error("RecaptchaVerifier is only supported in browser"));return}let p=qM();p.length!==0&&(p+=d),eE(p).then(()=>{a(d,o,u)}).catch(m=>{u(m)})}}).catch(d=>{u(d)})})}}async function Jc(n,e,t,r=!1,a=!1){const o=new qR(n);let u;if(a)u=yh;else try{u=await o.verify(t)}catch{u=await o.verify(t,!0)}const d=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in d){const p=d.phoneEnrollmentInfo.phoneNumber,m=d.phoneEnrollmentInfo.recaptchaToken;Object.assign(d,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:m,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in d){const p=d.phoneSignInInfo.recaptchaToken;Object.assign(d,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return d}return r?Object.assign(d,{captchaResp:u}):Object.assign(d,{captchaResponse:u}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function ea(n,e,t,r,a){var o,u;if(a==="EMAIL_PASSWORD_PROVIDER")if(!((o=n._getRecaptchaConfig())===null||o===void 0)&&o.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const d=await Jc(n,e,t,t==="getOobCode");return r(n,d)}else return r(n,e).catch(async d=>{if(d.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const p=await Jc(n,e,t,t==="getOobCode");return r(n,p)}else return Promise.reject(d)});else if(a==="PHONE_PROVIDER")if(!((u=n._getRecaptchaConfig())===null||u===void 0)&&u.isProviderEnabled("PHONE_PROVIDER")){const d=await Jc(n,e,t);return r(n,d).catch(async p=>{var m;if(((m=n._getRecaptchaConfig())===null||m===void 0?void 0:m.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(p.code==="auth/missing-recaptcha-token"||p.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${t} flow.`);const y=await Jc(n,e,t,!1,!0);return r(n,y)}return Promise.reject(p)})}else{const d=await Jc(n,e,t,!1,!0);return r(n,d)}else return Promise.reject(a+" provider is not supported.")}async function ZM(n){const e=bt(n),t=await PR(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new DR(t);e.tenantId==null?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,r.isAnyProviderEnabled()&&new qR(e).verify()}function JM(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(tr);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function e2(n,e,t){const r=bt(n);se(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const a=!!(t!=null&&t.disableWarnings),o=jR(e),{host:u,port:d}=t2(e),p=d===null?"":`:${d}`,m={url:`${o}//${u}${p}/`},y=Object.freeze({host:u,port:d,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:a})});if(!r._canInitEmulator){se(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),se(ia(m,r.config.emulator)&&ia(y,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=m,r.emulatorConfig=y,r.settings.appVerificationDisabledForTesting=!0,a||n2()}function jR(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function t2(n){const e=jR(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(r);if(a){const o=a[1];return{host:o,port:II(r.substr(o.length+1))}}else{const[o,u]=r.split(":");return{host:o,port:II(u)}}}function II(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function n2(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ii("not implemented")}_getIdTokenResponse(e){return ii("not implemented")}_linkToIdToken(e,t){return ii("not implemented")}_getReauthenticationResolver(e){return ii("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HR(n,e){return xt(n,"POST","/v1/accounts:resetPassword",Pt(n,e))}async function r2(n,e){return xt(n,"POST","/v1/accounts:update",e)}async function i2(n,e){return xt(n,"POST","/v1/accounts:signUp",e)}async function s2(n,e){return xt(n,"POST","/v1/accounts:update",Pt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function a2(n,e){return es(n,"POST","/v1/accounts:signInWithPassword",Pt(n,e))}async function vm(n,e){return xt(n,"POST","/v1/accounts:sendOobCode",Pt(n,e))}async function o2(n,e){return vm(n,e)}async function l2(n,e){return vm(n,e)}async function u2(n,e){return vm(n,e)}async function c2(n,e){return vm(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function h2(n,e){return es(n,"POST","/v1/accounts:signInWithEmailLink",Pt(n,e))}async function d2(n,e){return es(n,"POST","/v1/accounts:signInWithEmailLink",Pt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh extends Ou{constructor(e,t,r,a=null){super("password",r),this._email=e,this._password=t,this._tenantId=a}static _fromEmailAndPassword(e,t){return new Lh(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Lh(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ea(e,t,"signInWithPassword",a2,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return h2(e,{email:this._email,oobCode:this._password});default:vn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ea(e,r,"signUpPassword",i2,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return d2(e,{idToken:t,email:this._email,oobCode:this._password});default:vn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ki(n,e){return es(n,"POST","/v1/accounts:signInWithIdp",Pt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f2="http://localhost";class hi extends Ou{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new hi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):vn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:a}=t,o=Mv(t,["providerId","signInMethod"]);if(!r||!a)return null;const u=new hi(r,a);return u.idToken=o.idToken||void 0,u.accessToken=o.accessToken||void 0,u.secret=o.secret,u.nonce=o.nonce,u.pendingToken=o.pendingToken||null,u}_getIdTokenResponse(e){const t=this.buildRequest();return Ki(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Ki(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ki(e,t)}buildRequest(){const e={requestUri:f2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Pu(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AI(n,e){return xt(n,"POST","/v1/accounts:sendVerificationCode",Pt(n,e))}async function p2(n,e){return es(n,"POST","/v1/accounts:signInWithPhoneNumber",Pt(n,e))}async function m2(n,e){const t=await es(n,"POST","/v1/accounts:signInWithPhoneNumber",Pt(n,e));if(t.temporaryProof)throw ch(n,"account-exists-with-different-credential",t);return t}const g2={USER_NOT_FOUND:"user-not-found"};async function _2(n,e){const t=Object.assign(Object.assign({},e),{operation:"REAUTH"});return es(n,"POST","/v1/accounts:signInWithPhoneNumber",Pt(n,t),g2)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo extends Ou{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Eo({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Eo({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return p2(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return m2(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return _2(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:a}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:a}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:r,phoneNumber:a,temporaryProof:o}=e;return!r&&!t&&!a&&!o?null:new Eo({verificationId:t,verificationCode:r,phoneNumber:a,temporaryProof:o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y2(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function v2(n){const e=$l(uh(n)).link,t=e?$l(uh(e)).deep_link_id:null,r=$l(uh(n)).deep_link_id;return(r?$l(uh(r)).link:null)||r||t||e||n}class Em{constructor(e){var t,r,a,o,u,d;const p=$l(uh(e)),m=(t=p.apiKey)!==null&&t!==void 0?t:null,y=(r=p.oobCode)!==null&&r!==void 0?r:null,v=y2((a=p.mode)!==null&&a!==void 0?a:null);se(m&&y&&v,"argument-error"),this.apiKey=m,this.operation=v,this.code=y,this.continueUrl=(o=p.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(u=p.languageCode)!==null&&u!==void 0?u:null,this.tenantId=(d=p.tenantId)!==null&&d!==void 0?d:null}static parseLink(e){const t=v2(e);try{return new Em(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(){this.providerId=ya.PROVIDER_ID}static credential(e,t){return Lh._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Em.parseLink(t);return se(r,"argument-error"),Lh._fromEmailAndCode(e,r.code,r.tenantId)}}ya.PROVIDER_ID="password";ya.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ya.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku extends ts{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Wl extends ku{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return se("providerId"in t&&"signInMethod"in t,"argument-error"),hi._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return se(e.idToken||e.accessToken,"argument-error"),hi._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Wl.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Wl.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r,oauthTokenSecret:a,pendingToken:o,nonce:u,providerId:d}=e;if(!r&&!a&&!t&&!o||!d)return null;try{return new Wl(d)._credential({idToken:t,accessToken:r,nonce:u,pendingToken:o})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei extends ku{constructor(){super("facebook.com")}static credential(e){return hi._fromParams({providerId:ei.PROVIDER_ID,signInMethod:ei.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ei.credentialFromTaggedObject(e)}static credentialFromError(e){return ei.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ei.credential(e.oauthAccessToken)}catch{return null}}}ei.FACEBOOK_SIGN_IN_METHOD="facebook.com";ei.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti extends ku{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return hi._fromParams({providerId:ti.PROVIDER_ID,signInMethod:ti.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ti.credentialFromTaggedObject(e)}static credentialFromError(e){return ti.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return ti.credential(t,r)}catch{return null}}}ti.GOOGLE_SIGN_IN_METHOD="google.com";ti.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni extends ku{constructor(){super("github.com")}static credential(e){return hi._fromParams({providerId:ni.PROVIDER_ID,signInMethod:ni.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ni.credentialFromTaggedObject(e)}static credentialFromError(e){return ni.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ni.credential(e.oauthAccessToken)}catch{return null}}}ni.GITHUB_SIGN_IN_METHOD="github.com";ni.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E2="http://localhost";class ou extends Ou{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return Ki(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Ki(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ki(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:a,pendingToken:o}=t;return!r||!a||!o||r!==a?null:new ou(r,o)}static _create(e,t){return new ou(e,t)}buildRequest(){return{requestUri:E2,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T2="saml.";class Up extends ts{constructor(e){se(e.startsWith(T2),"argument-error"),super(e)}static credentialFromResult(e){return Up.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Up.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=ou.fromJSON(e);return se(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:r}=e;if(!t||!r)return null;try{return ou._create(r,t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri extends ku{constructor(){super("twitter.com")}static credential(e,t){return hi._fromParams({providerId:ri.PROVIDER_ID,signInMethod:ri.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ri.credentialFromTaggedObject(e)}static credentialFromError(e){return ri.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return ri.credential(t,r)}catch{return null}}}ri.TWITTER_SIGN_IN_METHOD="twitter.com";ri.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GR(n,e){return es(n,"POST","/v1/accounts:signUp",Pt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,a=!1){const o=await xr._fromIdTokenResponse(e,r,a),u=SI(r);return new br({user:o,providerId:u,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const a=SI(r);return new br({user:e,providerId:a,_tokenResponse:r,operationType:t})}}function SI(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function w2(n){var e;if(ft(n.app))return Promise.reject(hn(n));const t=bt(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new br({user:t.currentUser,providerId:null,operationType:"signIn"});const r=await GR(t,{returnSecureToken:!0}),a=await br._fromIdTokenResponse(t,"signIn",r,!0);return await t._updateCurrentUser(a.user),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bp extends kn{constructor(e,t,r,a){var o;super(t.code,t.message),this.operationType=r,this.user=a,Object.setPrototypeOf(this,Bp.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,a){return new Bp(e,t,r,a)}}function $R(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Bp._fromErrorAndOperation(n,o,e,r):o})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KR(n){return new Set(n.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function b2(n,e){const t=Ie(n);await Tm(!0,t,e);const{providerUserInfo:r}=await IM(t.auth,{idToken:await t.getIdToken(),deleteProvider:[e]}),a=KR(r||[]);return t.providerData=t.providerData.filter(o=>a.has(o.providerId)),a.has("phone")||(t.phoneNumber=null),await t.auth._persistUserIfCurrent(t),t}async function tE(n,e,t=!1){const r=await Yi(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return br._forOperation(n,"link",r)}async function Tm(n,e,t){await Mh(e);const r=KR(e.providerData),a=n===!1?"provider-already-linked":"no-such-provider";se(r.has(t)===n,e.auth,a)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QR(n,e,t=!1){const{auth:r}=n;if(ft(r.app))return Promise.reject(hn(r));const a="reauthenticate";try{const o=await Yi(n,$R(r,a,e,n),t);se(o.idToken,r,"internal-error");const u=ym(o.idToken);se(u,r,"internal-error");const{sub:d}=u;return se(n.uid===d,r,"user-mismatch"),br._forOperation(n,a,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&vn(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WR(n,e,t=!1){if(ft(n.app))return Promise.reject(hn(n));const r="signIn",a=await $R(n,r,e),o=await br._fromIdTokenResponse(n,r,a);return t||await n._updateCurrentUser(o.user),o}async function wm(n,e){return WR(bt(n),e)}async function YR(n,e){const t=Ie(n);return await Tm(!1,t,e.providerId),tE(t,e)}async function XR(n,e){return QR(Ie(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function I2(n,e){return es(n,"POST","/v1/accounts:signInWithCustomToken",Pt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function A2(n,e){if(ft(n.app))return Promise.reject(hn(n));const t=bt(n),r=await I2(t,{token:e,returnSecureToken:!0}),a=await br._fromIdTokenResponse(t,"signIn",r);return await t._updateCurrentUser(a.user),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?nE._fromServerResponse(e,t):"totpInfo"in t?rE._fromServerResponse(e,t):vn(e,"internal-error")}}class nE extends cd{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new nE(t)}}class rE extends cd{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new rE(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bm(n,e,t){var r;se(((r=t.url)===null||r===void 0?void 0:r.length)>0,n,"invalid-continue-uri"),se(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),se(typeof t.linkDomain>"u"||t.linkDomain.length>0,n,"invalid-hosting-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.linkDomain=t.linkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(se(t.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(se(t.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iE(n){const e=bt(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function S2(n,e,t){const r=bt(n),a={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};t&&bm(r,a,t),await ea(r,a,"getOobCode",l2,"EMAIL_PASSWORD_PROVIDER")}async function R2(n,e,t){await HR(Ie(n),{oobCode:e,newPassword:t}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&iE(n),r})}async function C2(n,e){await s2(Ie(n),{oobCode:e})}async function ZR(n,e){const t=Ie(n),r=await HR(t,{oobCode:e}),a=r.requestType;switch(se(a,t,"internal-error"),a){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":se(r.newEmail,t,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":se(r.mfaInfo,t,"internal-error");default:se(r.email,t,"internal-error")}let o=null;return r.mfaInfo&&(o=cd._fromServerResponse(bt(t),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:o},operation:a}}async function D2(n,e){const{data:t}=await ZR(Ie(n),e);return t.email}async function P2(n,e,t){if(ft(n.app))return Promise.reject(hn(n));const r=bt(n),u=await ea(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",GR,"EMAIL_PASSWORD_PROVIDER").catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&iE(n),p}),d=await br._fromIdTokenResponse(r,"signIn",u);return await r._updateCurrentUser(d.user),d}function x2(n,e,t){return ft(n.app)?Promise.reject(hn(n)):wm(Ie(n),ya.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&iE(n),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function N2(n,e,t){const r=bt(n),a={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function o(u,d){se(d.handleCodeInApp,r,"argument-error"),d&&bm(r,u,d)}o(a,t),await ea(r,a,"getOobCode",u2,"EMAIL_PASSWORD_PROVIDER")}function O2(n,e){const t=Em.parseLink(e);return(t==null?void 0:t.operation)==="EMAIL_SIGNIN"}async function k2(n,e,t){if(ft(n.app))return Promise.reject(hn(n));const r=Ie(n),a=ya.credentialWithLink(e,t||Vh());return se(a._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),wm(r,a)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V2(n,e){return xt(n,"POST","/v1/accounts:createAuthUri",Pt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function M2(n,e){const t=Zv()?Vh():"http://localhost",r={identifier:e,continueUri:t},{signinMethods:a}=await V2(Ie(n),r);return a||[]}async function L2(n,e){const t=Ie(n),a={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()};e&&bm(t.auth,a,e);const{email:o}=await o2(t.auth,a);o!==n.email&&await n.reload()}async function U2(n,e,t){const r=Ie(n),o={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await n.getIdToken(),newEmail:e};t&&bm(r.auth,o,t);const{email:u}=await c2(r.auth,o);u!==n.email&&await n.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B2(n,e){return xt(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z2(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=Ie(n),o={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},u=await Yi(r,B2(r.auth,o));r.displayName=u.displayName||null,r.photoURL=u.photoUrl||null;const d=r.providerData.find(({providerId:p})=>p==="password");d&&(d.displayName=r.displayName,d.photoURL=r.photoURL),await r._updateTokensIfNecessary(u)}function F2(n,e){const t=Ie(n);return ft(t.auth.app)?Promise.reject(hn(t.auth)):JR(t,e,null)}function q2(n,e){return JR(Ie(n),null,e)}async function JR(n,e,t){const{auth:r}=n,o={idToken:await n.getIdToken(),returnSecureToken:!0};e&&(o.email=e),t&&(o.password=t);const u=await Yi(n,r2(r,o));await n._updateTokensIfNecessary(u,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j2(n){var e,t;if(!n)return null;const{providerId:r}=n,a=n.rawUserInfo?JSON.parse(n.rawUserInfo):{},o=n.isNewUser||n.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(n!=null&&n.idToken)){const u=(t=(e=ym(n.idToken))===null||e===void 0?void 0:e.firebase)===null||t===void 0?void 0:t.sign_in_provider;if(u){const d=u!=="anonymous"&&u!=="custom"?u:null;return new Yl(o,d)}}if(!r)return null;switch(r){case"facebook.com":return new H2(o,a);case"github.com":return new G2(o,a);case"google.com":return new $2(o,a);case"twitter.com":return new K2(o,a,n.screenName||null);case"custom":case"anonymous":return new Yl(o,null);default:return new Yl(o,r,a)}}class Yl{constructor(e,t,r={}){this.isNewUser=e,this.providerId=t,this.profile=r}}class eC extends Yl{constructor(e,t,r,a){super(e,t,r),this.username=a}}class H2 extends Yl{constructor(e,t){super(e,"facebook.com",t)}}class G2 extends eC{constructor(e,t){super(e,"github.com",t,typeof(t==null?void 0:t.login)=="string"?t==null?void 0:t.login:null)}}class $2 extends Yl{constructor(e,t){super(e,"google.com",t)}}class K2 extends eC{constructor(e,t,r){super(e,"twitter.com",t,r)}}function Q2(n){const{user:e,_tokenResponse:t}=n;return e.isAnonymous&&!t?{providerId:null,isNewUser:!1,profile:null}:j2(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(e,t,r){this.type=e,this.credential=t,this.user=r}static _fromIdtoken(e,t){return new fo("enroll",e,t)}static _fromMfaPendingCredential(e){return new fo("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,r;if(e!=null&&e.multiFactorSession){if(!((t=e.multiFactorSession)===null||t===void 0)&&t.pendingCredential)return fo._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return fo._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE{constructor(e,t,r){this.session=e,this.hints=t,this.signInResolver=r}static _fromError(e,t){const r=bt(e),a=t.customData._serverResponse,o=(a.mfaInfo||[]).map(d=>cd._fromServerResponse(r,d));se(a.mfaPendingCredential,r,"internal-error");const u=fo._fromMfaPendingCredential(a.mfaPendingCredential);return new sE(u,o,async d=>{const p=await d._process(r,u);delete a.mfaInfo,delete a.mfaPendingCredential;const m=Object.assign(Object.assign({},a),{idToken:p.idToken,refreshToken:p.refreshToken});switch(t.operationType){case"signIn":const y=await br._fromIdTokenResponse(r,t.operationType,m);return await r._updateCurrentUser(y.user),y;case"reauthenticate":return se(t.user,r,"internal-error"),br._forOperation(t.user,t.operationType,m);default:vn(r,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function W2(n,e){var t;const r=Ie(n),a=e;return se(e.customData.operationType,r,"argument-error"),se((t=a.customData._serverResponse)===null||t===void 0?void 0:t.mfaPendingCredential,r,"argument-error"),sE._fromError(r,a)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RI(n,e){return xt(n,"POST","/v2/accounts/mfaEnrollment:start",Pt(n,e))}function Y2(n,e){return xt(n,"POST","/v2/accounts/mfaEnrollment:finalize",Pt(n,e))}function X2(n,e){return xt(n,"POST","/v2/accounts/mfaEnrollment:withdraw",Pt(n,e))}class aE{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(r=>cd._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new aE(e)}async getSession(){return fo._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,t){const r=e,a=await this.getSession(),o=await Yi(this.user,r._process(this.user.auth,a,t));return await this.user._updateTokensIfNecessary(o),this.user.reload()}async unenroll(e){const t=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const a=await Yi(this.user,X2(this.user.auth,{idToken:r,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter(({uid:o})=>o!==t),await this.user._updateTokensIfNecessary(a),await this.user.reload()}catch(a){throw a}}}const yy=new WeakMap;function Z2(n){const e=Ie(n);return yy.has(e)||yy.set(e,aE._fromUser(e)),yy.get(e)}const zp="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tC{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(zp,"1"),this.storage.removeItem(zp),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J2=1e3,eL=10;class nC extends tC{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=BR(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),a=this.localCache[t];r!==a&&e(t,a,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((u,d,p)=>{this.notifyListeners(u,p)});return}const r=e.key;t?this.detachListener():this.stopPolling();const a=()=>{const u=this.storage.getItem(r);!t&&this.localCache[r]===u||this.notifyListeners(r,u)},o=this.storage.getItem(r);kM()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,eL):a()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const a of Array.from(r))a(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},J2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}nC.type="LOCAL";const oE=nC;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rC extends tC{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}rC.type="SESSION";const wo=rC;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tL(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(a=>a.isListeningto(e));if(t)return t;const r=new Im(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:a,data:o}=t.data,u=this.handlersMap[a];if(!(u!=null&&u.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:a});const d=Array.from(u).map(async m=>m(t.origin,o)),p=await tL(d);t.ports[0].postMessage({status:"done",eventId:r,eventType:a,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Im.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hd(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nL{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let o,u;return new Promise((d,p)=>{const m=hd("",20);a.port1.start();const y=setTimeout(()=>{p(new Error("unsupported_event"))},r);u={messageChannel:a,onMessage(v){const w=v;if(w.data.eventId===m)switch(w.data.status){case"ack":clearTimeout(y),o=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),d(w.data.response);break;default:clearTimeout(y),clearTimeout(o),p(new Error("invalid_response"));break}}},this.handlers.add(u),a.port1.addEventListener("message",u.onMessage),this.target.postMessage({eventType:e,eventId:m,data:t},[a.port2])}).finally(()=>{u&&this.removeMessageHandler(u)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(){return window}function rL(n){jt().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lE(){return typeof jt().WorkerGlobalScope<"u"&&typeof jt().importScripts=="function"}async function iL(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function sL(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function aL(){return lE()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iC="firebaseLocalStorageDb",oL=1,Fp="firebaseLocalStorage",sC="fbase_key";class dd{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Am(n,e){return n.transaction([Fp],e?"readwrite":"readonly").objectStore(Fp)}function lL(){const n=indexedDB.deleteDatabase(iC);return new dd(n).toPromise()}function $y(){const n=indexedDB.open(iC,oL);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Fp,{keyPath:sC})}catch(a){t(a)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Fp)?e(r):(r.close(),await lL(),e(await $y()))})})}async function CI(n,e,t){const r=Am(n,!0).put({[sC]:e,value:t});return new dd(r).toPromise()}async function uL(n,e){const t=Am(n,!1).get(e),r=await new dd(t).toPromise();return r===void 0?null:r.value}function DI(n,e){const t=Am(n,!0).delete(e);return new dd(t).toPromise()}const cL=800,hL=3;class aC{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await $y(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>hL)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return lE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Im._getInstance(aL()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await iL(),!this.activeServiceWorker)return;this.sender=new nL(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||sL()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await $y();return await CI(e,zp,"1"),await DI(e,zp),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>CI(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>uL(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>DI(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const o=Am(a,!1).getAll();return new dd(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:a,value:o}of e)r.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(o)&&(this.notifyListeners(a,o),t.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!r.has(a)&&(this.notifyListeners(a,null),t.push(a));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const a of Array.from(r))a(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),cL)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}aC.type="LOCAL";const Uh=aC;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PI(n,e){return xt(n,"POST","/v2/accounts/mfaSignIn:start",Pt(n,e))}function dL(n,e){return xt(n,"POST","/v2/accounts/mfaSignIn:finalize",Pt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vy=FR("rcb"),fL=new ad(3e4,6e4);class pL{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=jt().grecaptcha)===null||e===void 0)&&e.render)}load(e,t=""){return se(mL(t),e,"argument-error"),this.shouldResolveImmediately(t)&&yI(jt().grecaptcha)?Promise.resolve(jt().grecaptcha):new Promise((r,a)=>{const o=jt().setTimeout(()=>{a(Xt(e,"network-request-failed"))},fL.get());jt()[vy]=()=>{jt().clearTimeout(o),delete jt()[vy];const d=jt().grecaptcha;if(!d||!yI(d)){a(Xt(e,"internal-error"));return}const p=d.render;d.render=(m,y)=>{const v=p(m,y);return this.counter++,v},this.hostLanguage=t,r(d)};const u=`${FM()}?${Pu({onload:vy,render:"explicit",hl:t})}`;eE(u).catch(()=>{clearTimeout(o),a(Xt(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(!((t=jt().grecaptcha)===null||t===void 0)&&t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function mL(n){return n.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(n)}class gL{async load(e){return new $M(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vh="recaptcha",_L={theme:"light",type:"image"};let yL=class{constructor(e,t,r=Object.assign({},_L)){this.parameters=r,this.type=vh,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=bt(e),this.isInvisible=this.parameters.size==="invisible",se(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const a=typeof t=="string"?document.getElementById(t):t;se(a,this.auth,"argument-error"),this.container=a,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new gL:new pL,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),r=t.getResponse(e);return r||new Promise(a=>{const o=u=>{u&&(this.tokenChangeListeners.delete(o),a(u))};this.tokenChangeListeners.add(o),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){se(!this.parameters.sitekey,this.auth,"argument-error"),se(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),se(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(r=>r(t)),typeof e=="function")e(t);else if(typeof e=="string"){const r=jt()[e];typeof r=="function"&&r(t)}}}assertNotDestroyed(){se(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){se(Zv()&&!lE(),this.auth,"internal-error"),await vL(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await wM(this.auth);se(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return se(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function vL(){let n=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}n=()=>e(),window.addEventListener("load",n)}).catch(e=>{throw n&&window.removeEventListener("load",n),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uE{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=Eo._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function EL(n,e,t){if(ft(n.app))return Promise.reject(hn(n));const r=bt(n),a=await Sm(r,e,Ie(t));return new uE(a,o=>wm(r,o))}async function TL(n,e,t){const r=Ie(n);await Tm(!1,r,"phone");const a=await Sm(r.auth,e,Ie(t));return new uE(a,o=>YR(r,o))}async function wL(n,e,t){const r=Ie(n);if(ft(r.auth.app))return Promise.reject(hn(r.auth));const a=await Sm(r.auth,e,Ie(t));return new uE(a,o=>XR(r,o))}async function Sm(n,e,t){var r;if(!n._getRecaptchaConfig())try{await ZM(n)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let a;if(typeof e=="string"?a={phoneNumber:e}:a=e,"session"in a){const o=a.session;if("phoneNumber"in a){se(o.type==="enroll",n,"internal-error");const u={idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:a.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await ea(n,u,"mfaSmsEnrollment",async(y,v)=>{if(v.phoneEnrollmentInfo.captchaResponse===yh){se((t==null?void 0:t.type)===vh,y,"argument-error");const w=await Ey(y,v,t);return RI(y,w)}return RI(y,v)},"PHONE_PROVIDER").catch(y=>Promise.reject(y))).phoneSessionInfo.sessionInfo}else{se(o.type==="signin",n,"internal-error");const u=((r=a.multiFactorHint)===null||r===void 0?void 0:r.uid)||a.multiFactorUid;se(u,n,"missing-multi-factor-info");const d={mfaPendingCredential:o.credential,mfaEnrollmentId:u,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await ea(n,d,"mfaSmsSignIn",async(v,w)=>{if(w.phoneSignInInfo.captchaResponse===yh){se((t==null?void 0:t.type)===vh,v,"argument-error");const S=await Ey(v,w,t);return PI(v,S)}return PI(v,w)},"PHONE_PROVIDER").catch(v=>Promise.reject(v))).phoneResponseInfo.sessionInfo}}else{const o={phoneNumber:a.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await ea(n,o,"sendVerificationCode",async(m,y)=>{if(y.captchaResponse===yh){se((t==null?void 0:t.type)===vh,m,"argument-error");const v=await Ey(m,y,t);return AI(m,v)}return AI(m,y)},"PHONE_PROVIDER").catch(m=>Promise.reject(m))).sessionInfo}}finally{t==null||t._reset()}}async function bL(n,e){const t=Ie(n);if(ft(t.auth.app))return Promise.reject(hn(t.auth));await tE(t,e)}async function Ey(n,e,t){se(t.type===vh,n,"argument-error");const r=await t.verify();se(typeof r=="string",n,"argument-error");const a=Object.assign({},e);if("phoneEnrollmentInfo"in a){const o=a.phoneEnrollmentInfo.phoneNumber,u=a.phoneEnrollmentInfo.captchaResponse,d=a.phoneEnrollmentInfo.clientType,p=a.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:o,recaptchaToken:r,captchaResponse:u,clientType:d,recaptchaVersion:p}}),a}else if("phoneSignInInfo"in a){const o=a.phoneSignInInfo.captchaResponse,u=a.phoneSignInInfo.clientType,d=a.phoneSignInInfo.recaptchaVersion;return Object.assign(a,{phoneSignInInfo:{recaptchaToken:r,captchaResponse:o,clientType:u,recaptchaVersion:d}}),a}else return Object.assign(a,{recaptchaToken:r}),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bo=class mp{constructor(e){this.providerId=mp.PROVIDER_ID,this.auth=bt(e)}verifyPhoneNumber(e,t){return Sm(this.auth,e,Ie(t))}static credential(e,t){return Eo._fromVerification(e,t)}static credentialFromResult(e){const t=e;return mp.credentialFromTaggedObject(t)}static credentialFromError(e){return mp.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:r}=e;return t&&r?Eo._fromTokenResponse(t,r):null}};bo.PROVIDER_ID="phone";bo.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lo(n,e){return e?tr(e):(se(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cE extends Ou{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ki(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ki(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ki(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function IL(n){return WR(n.auth,new cE(n),n.bypassAuthState)}function AL(n){const{auth:e,user:t}=n;return se(t,e,"internal-error"),QR(t,new cE(n),n.bypassAuthState)}async function SL(n){const{auth:e,user:t}=n;return se(t,e,"internal-error"),tE(t,new cE(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oC{constructor(e,t,r,a,o=!1){this.auth=e,this.resolver=r,this.user=a,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:a,tenantId:o,error:u,type:d}=e;if(u){this.reject(u);return}const p={auth:this.auth,requestUri:t,sessionId:r,tenantId:o||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(p))}catch(m){this.reject(m)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return IL;case"linkViaPopup":case"linkViaRedirect":return SL;case"reauthViaPopup":case"reauthViaRedirect":return AL;default:vn(this.auth,"internal-error")}}resolve(e){kr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){kr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RL=new ad(2e3,1e4);async function CL(n,e,t){if(ft(n.app))return Promise.reject(Xt(n,"operation-not-supported-in-this-environment"));const r=bt(n);Nu(n,e,ts);const a=Lo(r,t);return new Hi(r,"signInViaPopup",e,a).executeNotNull()}async function DL(n,e,t){const r=Ie(n);if(ft(r.auth.app))return Promise.reject(Xt(r.auth,"operation-not-supported-in-this-environment"));Nu(r.auth,e,ts);const a=Lo(r.auth,t);return new Hi(r.auth,"reauthViaPopup",e,a,r).executeNotNull()}async function PL(n,e,t){const r=Ie(n);Nu(r.auth,e,ts);const a=Lo(r.auth,t);return new Hi(r.auth,"linkViaPopup",e,a,r).executeNotNull()}class Hi extends oC{constructor(e,t,r,a,o){super(e,t,a,o),this.provider=r,this.authWindow=null,this.pollId=null,Hi.currentPopupAction&&Hi.currentPopupAction.cancel(),Hi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return se(e,this.auth,"internal-error"),e}async onExecution(){kr(this.filter.length===1,"Popup operations only handle one event");const e=hd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Xt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Xt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Hi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Xt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,RL.get())};e()}}Hi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xL="pendingRedirect",Eh=new Map;class NL extends oC{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Eh.get(this.auth._key());if(!e){try{const r=await OL(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Eh.set(this.auth._key(),e)}return this.bypassAuthState||Eh.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function OL(n,e){const t=uC(e),r=lC(n);if(!await r._isAvailable())return!1;const a=await r._get(t)==="true";return await r._remove(t),a}async function hE(n,e){return lC(n)._set(uC(e),"true")}function kL(){Eh.clear()}function dE(n,e){Eh.set(n._key(),e)}function lC(n){return tr(n._redirectPersistence)}function uC(n){return vo(xL,n.config.apiKey,n.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VL(n,e,t){return ML(n,e,t)}async function ML(n,e,t){if(ft(n.app))return Promise.reject(hn(n));const r=bt(n);Nu(n,e,ts),await r._initializationPromise;const a=Lo(r,t);return await hE(a,r),a._openRedirect(r,e,"signInViaRedirect")}function LL(n,e,t){return UL(n,e,t)}async function UL(n,e,t){const r=Ie(n);if(Nu(r.auth,e,ts),ft(r.auth.app))return Promise.reject(hn(r.auth));await r.auth._initializationPromise;const a=Lo(r.auth,t);await hE(a,r.auth);const o=await cC(r);return a._openRedirect(r.auth,e,"reauthViaRedirect",o)}function BL(n,e,t){return zL(n,e,t)}async function zL(n,e,t){const r=Ie(n);Nu(r.auth,e,ts),await r.auth._initializationPromise;const a=Lo(r.auth,t);await Tm(!1,r,e.providerId),await hE(a,r.auth);const o=await cC(r);return a._openRedirect(r.auth,e,"linkViaRedirect",o)}async function FL(n,e){return await bt(n)._initializationPromise,Rm(n,e,!1)}async function Rm(n,e,t=!1){if(ft(n.app))return Promise.reject(hn(n));const r=bt(n),a=Lo(r,e),u=await new NL(r,a,t).execute();return u&&!t&&(delete u.user._redirectEventId,await r._persistUserIfCurrent(u.user),await r._setRedirectUser(null,e)),u}async function cC(n){const e=hd(`${n.uid}:::`);return n._redirectEventId=e,await n.auth._setRedirectUser(n),await n.auth._persistUserIfCurrent(n),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qL=10*60*1e3;class hC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!jL(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!dC(e)){const a=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Xt(this.auth,a))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=qL&&this.cachedEventUids.clear(),this.cachedEventUids.has(xI(e))}saveEventToCache(e){this.cachedEventUids.add(xI(e)),this.lastProcessedEventTime=Date.now()}}function xI(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function dC({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function jL(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return dC(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fC(n,e={}){return xt(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HL=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,GL=/^https?/;async function $L(n){if(n.config.emulator)return;const{authorizedDomains:e}=await fC(n);for(const t of e)try{if(KL(t))return}catch{}vn(n,"unauthorized-domain")}function KL(n){const e=Vh(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const u=new URL(n);return u.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&u.hostname===r}if(!GL.test(t))return!1;if(HL.test(n))return r===n;const a=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QL=new ad(3e4,6e4);function NI(){const n=jt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function WL(n){return new Promise((e,t)=>{var r,a,o;function u(){NI(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{NI(),t(Xt(n,"network-request-failed"))},timeout:QL.get()})}if(!((a=(r=jt().gapi)===null||r===void 0?void 0:r.iframes)===null||a===void 0)&&a.Iframe)e(gapi.iframes.getContext());else if(!((o=jt().gapi)===null||o===void 0)&&o.load)u();else{const d=FR("iframefcb");return jt()[d]=()=>{gapi.load?u():t(Xt(n,"network-request-failed"))},eE(`${jM()}?onload=${d}`).catch(p=>t(p))}}).catch(e=>{throw gp=null,e})}let gp=null;function YL(n){return gp=gp||WL(n),gp}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XL=new ad(5e3,15e3),ZL="__/auth/iframe",JL="emulator/auth/iframe",eU={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},tU=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function nU(n){const e=n.config;se(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Jv(e,JL):`https://${n.config.authDomain}/${ZL}`,r={apiKey:e.apiKey,appName:n.name,v:_a},a=tU.get(n.config.apiHost);a&&(r.eid=a);const o=n._getFrameworks();return o.length&&(r.fw=o.join(",")),`${t}?${Pu(r).slice(1)}`}async function rU(n){const e=await YL(n),t=jt().gapi;return se(t,n,"internal-error"),e.open({where:document.body,url:nU(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:eU,dontclear:!0},r=>new Promise(async(a,o)=>{await r.restyle({setHideOnLeave:!1});const u=Xt(n,"network-request-failed"),d=jt().setTimeout(()=>{o(u)},XL.get());function p(){jt().clearTimeout(d),a(r)}r.ping(p).then(p,()=>{o(u)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iU={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},sU=500,aU=600,oU="_blank",lU="http://localhost";class OI{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function uU(n,e,t,r=sU,a=aU){const o=Math.max((window.screen.availHeight-a)/2,0).toString(),u=Math.max((window.screen.availWidth-r)/2,0).toString();let d="";const p=Object.assign(Object.assign({},iU),{width:r.toString(),height:a.toString(),top:o,left:u}),m=wt().toLowerCase();t&&(d=VR(m)?oU:t),OR(m)&&(e=e||lU,p.scrollbars="yes");const y=Object.entries(p).reduce((w,[S,P])=>`${w}${S}=${P},`,"");if(OM(m)&&d!=="_self")return cU(e||"",d),new OI(null);const v=window.open(e||"",d,y);se(v,n,"popup-blocked");try{v.focus()}catch{}return new OI(v)}function cU(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hU="__/auth/handler",dU="emulator/auth/handler",fU=encodeURIComponent("fac");async function Ky(n,e,t,r,a,o){se(n.config.authDomain,n,"auth-domain-config-required"),se(n.config.apiKey,n,"invalid-api-key");const u={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:_a,eventId:a};if(e instanceof ts){e.setDefaultLanguage(n.languageCode),u.providerId=e.providerId||"",zk(e.getCustomParameters())||(u.customParameters=JSON.stringify(e.getCustomParameters()));for(const[y,v]of Object.entries(o||{}))u[y]=v}if(e instanceof ku){const y=e.getScopes().filter(v=>v!=="");y.length>0&&(u.scopes=y.join(","))}n.tenantId&&(u.tid=n.tenantId);const d=u;for(const y of Object.keys(d))d[y]===void 0&&delete d[y];const p=await n._getAppCheckToken(),m=p?`#${fU}=${encodeURIComponent(p)}`:"";return`${pU(n)}?${Pu(d).slice(1)}${m}`}function pU({config:n}){return n.emulator?Jv(n,dU):`https://${n.authDomain}/${hU}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ty="webStorageSupport";class mU{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=wo,this._completeRedirectFn=Rm,this._overrideRedirectResult=dE}async _openPopup(e,t,r,a){var o;kr((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const u=await Ky(e,t,r,Vh(),a);return uU(e,u,hd())}async _openRedirect(e,t,r,a){await this._originValidation(e);const o=await Ky(e,t,r,Vh(),a);return rL(o),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:a,promise:o}=this.eventManagers[t];return a?Promise.resolve(a):(kr(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await rU(e),r=new hC(e);return t.register("authEvent",a=>(se(a==null?void 0:a.authEvent,e,"invalid-auth-event"),{status:r.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ty,{type:Ty},a=>{var o;const u=(o=a==null?void 0:a[0])===null||o===void 0?void 0:o[Ty];u!==void 0&&t(!!u),vn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=$L(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return BR()||kR()||ld()}}const gU=mU;class _U{constructor(e){this.factorId=e}_process(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return ii("unexpected MultiFactorSessionType")}}}class fE extends _U{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new fE(e)}_finalizeEnroll(e,t,r){return Y2(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return dL(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class pC{constructor(){}static assertion(e){return fE._fromCredential(e)}}pC.FACTOR_ID="phone";var kI="@firebase/auth",VI="1.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yU{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){se(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vU(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function EU(n){oa(new ci("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:u,authDomain:d}=r.options;se(u&&!u.includes(":"),"invalid-api-key",{appName:r.name});const p={apiKey:u,authDomain:d,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:zR(n)},m=new BM(r,a,o,p);return JM(m,t),m},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),oa(new ci("auth-internal",e=>{const t=bt(e.getProvider("auth").getImmediate());return(r=>new yU(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Or(kI,VI,vU(n)),Or(kI,VI,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TU=5*60;Pk("authIdTokenMaxAge");function wU(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}zM({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=a=>{const o=Xt("internal-error");o.customData=a,t(o)},r.type="text/javascript",r.charset="UTF-8",wU().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});EU("Browser");/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Io(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bU=2e3;async function IU(n,e,t){var r;const{BuildInfo:a}=Io();kr(e.sessionId,"AuthEvent did not contain a session ID");const o=await DU(e.sessionId),u={};return ld()?u.ibi=a.packageName:od()?u.apn=a.packageName:vn(n,"operation-not-supported-in-this-environment"),a.displayName&&(u.appDisplayName=a.displayName),u.sessionId=o,Ky(n,t,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,u)}async function AU(n){const{BuildInfo:e}=Io(),t={};ld()?t.iosBundleId=e.packageName:od()?t.androidPackageName=e.packageName:vn(n,"operation-not-supported-in-this-environment"),await fC(n,t)}function SU(n){const{cordova:e}=Io();return new Promise(t=>{e.plugins.browsertab.isAvailable(r=>{let a=null;r?e.plugins.browsertab.openUrl(n):a=e.InAppBrowser.open(n,NM()?"_blank":"_system","location=yes"),t(a)})})}async function RU(n,e,t){const{cordova:r}=Io();let a=()=>{};try{await new Promise((o,u)=>{let d=null;function p(){var v;o();const w=(v=r.plugins.browsertab)===null||v===void 0?void 0:v.close;typeof w=="function"&&w(),typeof(t==null?void 0:t.close)=="function"&&t.close()}function m(){d||(d=window.setTimeout(()=>{u(Xt(n,"redirect-cancelled-by-user"))},bU))}function y(){(document==null?void 0:document.visibilityState)==="visible"&&m()}e.addPassiveListener(p),document.addEventListener("resume",m,!1),od()&&document.addEventListener("visibilitychange",y,!1),a=()=>{e.removePassiveListener(p),document.removeEventListener("resume",m,!1),document.removeEventListener("visibilitychange",y,!1),d&&window.clearTimeout(d)}})}finally{a()}}function CU(n){var e,t,r,a,o,u,d,p,m,y;const v=Io();se(typeof((e=v==null?void 0:v.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),se(typeof((t=v==null?void 0:v.BuildInfo)===null||t===void 0?void 0:t.packageName)<"u",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),se(typeof((o=(a=(r=v==null?void 0:v.cordova)===null||r===void 0?void 0:r.plugins)===null||a===void 0?void 0:a.browsertab)===null||o===void 0?void 0:o.openUrl)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),se(typeof((p=(d=(u=v==null?void 0:v.cordova)===null||u===void 0?void 0:u.plugins)===null||d===void 0?void 0:d.browsertab)===null||p===void 0?void 0:p.isAvailable)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),se(typeof((y=(m=v==null?void 0:v.cordova)===null||m===void 0?void 0:m.InAppBrowser)===null||y===void 0?void 0:y.open)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function DU(n){const e=PU(n),t=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(t)).map(a=>a.toString(16).padStart(2,"0")).join("")}function PU(n){if(kr(/[0-9a-zA-Z]+/.test(n),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(n);const e=new ArrayBuffer(n.length),t=new Uint8Array(e);for(let r=0;r<n.length;r++)t[r]=n.charCodeAt(r);return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xU=20;class NU extends hC{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInitialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInitialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function OU(n,e,t=null){return{type:e,eventId:t,urlResponse:null,sessionId:MU(),postBody:null,tenantId:n.tenantId,error:Xt(n,"no-auth-event")}}function kU(n,e){return Qy()._set(Wy(n),e)}async function MI(n){const e=await Qy()._get(Wy(n));return e&&await Qy()._remove(Wy(n)),e}function VU(n,e){var t,r;const a=UU(e);if(a.includes("/__/auth/callback")){const o=_p(a),u=o.firebaseError?LU(decodeURIComponent(o.firebaseError)):null,d=(r=(t=u==null?void 0:u.code)===null||t===void 0?void 0:t.split("auth/"))===null||r===void 0?void 0:r[1],p=d?Xt(d):null;return p?{type:n.type,eventId:n.eventId,tenantId:n.tenantId,error:p,urlResponse:null,sessionId:null,postBody:null}:{type:n.type,eventId:n.eventId,tenantId:n.tenantId,sessionId:n.sessionId,urlResponse:a,postBody:null}}return null}function MU(){const n=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let t=0;t<xU;t++){const r=Math.floor(Math.random()*e.length);n.push(e.charAt(r))}return n.join("")}function Qy(){return tr(oE)}function Wy(n){return vo("authEvent",n.config.apiKey,n.name)}function LU(n){try{return JSON.parse(n)}catch{return null}}function UU(n){const e=_p(n),t=e.link?decodeURIComponent(e.link):void 0,r=_p(t).link,a=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return _p(a).link||a||r||t||n}function _p(n){if(!(n!=null&&n.includes("?")))return{};const[e,...t]=n.split("?");return $l(t.join("?"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BU=500;class zU{constructor(){this._redirectPersistence=wo,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Rm,this._overrideRedirectResult=dE}async _initialize(e){const t=e._key();let r=this.eventManagers.get(t);return r||(r=new NU(e),this.eventManagers.set(t,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){vn(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,r,a){CU(e);const o=await this._initialize(e);await o.initialized(),o.resetRedirect(),kL(),await this._originValidation(e);const u=OU(e,r,a);await kU(e,u);const d=await IU(e,u,t),p=await SU(d);return RU(e,o,p)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=AU(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:r,handleOpenURL:a,BuildInfo:o}=Io(),u=setTimeout(async()=>{await MI(e),t.onEvent(LI())},BU),d=async y=>{clearTimeout(u);const v=await MI(e);let w=null;v&&(y!=null&&y.url)&&(w=VU(v,y.url)),t.onEvent(w||LI())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,d);const p=a,m=`${o.packageName.toLowerCase()}://`;Io().handleOpenURL=async y=>{if(y.toLowerCase().startsWith(m)&&d({url:y}),typeof p=="function")try{p(y)}catch(v){console.error(v)}}}}const FU=zU;function LI(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:Xt("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qU(n,e){bt(n)._logFramework(e)}var jU="@firebase/auth-compat",HU="0.5.20";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GU=1e3;function Th(){var n;return((n=self==null?void 0:self.location)===null||n===void 0?void 0:n.protocol)||null}function $U(){return Th()==="http:"||Th()==="https:"}function mC(n=wt()){return!!((Th()==="file:"||Th()==="ionic:"||Th()==="capacitor:")&&n.toLowerCase().match(/iphone|ipad|ipod|android/))}function KU(){return Gv()||Hv()}function QU(){return lR()&&(document==null?void 0:document.documentMode)===11}function WU(n=wt()){return/Edge\/\d+/.test(n)}function YU(n=wt()){return QU()||WU(n)}function gC(){try{const n=self.localStorage,e=hd();if(n)return n.setItem(e,"1"),n.removeItem(e),YU()?Nh():!0}catch{return pE()&&Nh()}return!1}function pE(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function wy(){return($U()||oR()||mC())&&!KU()&&gC()&&!pE()}function _C(){return mC()&&typeof document<"u"}async function XU(){return _C()?new Promise(n=>{const e=setTimeout(()=>{n(!1)},GU);document.addEventListener("deviceready",()=>{clearTimeout(e),n(!0)})}):!1}function ZU(){return typeof window<"u"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const er={LOCAL:"local",NONE:"none",SESSION:"session"},eh=se,yC="persistence";function JU(n,e){if(eh(Object.values(er).includes(e),n,"invalid-persistence-type"),Gv()){eh(e!==er.SESSION,n,"unsupported-persistence-type");return}if(Hv()){eh(e===er.NONE,n,"unsupported-persistence-type");return}if(pE()){eh(e===er.NONE||e===er.LOCAL&&Nh(),n,"unsupported-persistence-type");return}eh(e===er.NONE||gC(),n,"unsupported-persistence-type")}async function Yy(n){await n._initializationPromise;const e=vC(),t=vo(yC,n.config.apiKey,n.name);e&&e.setItem(t,n._getPersistenceType())}function e4(n,e){const t=vC();if(!t)return[];const r=vo(yC,n,e);switch(t.getItem(r)){case er.NONE:return[au];case er.LOCAL:return[Uh,wo];case er.SESSION:return[wo];default:return[]}}function vC(){var n;try{return((n=ZU())===null||n===void 0?void 0:n.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t4=se;class Ys{constructor(){this.browserResolver=tr(gU),this.cordovaResolver=tr(FU),this.underlyingResolver=null,this._redirectPersistence=wo,this._completeRedirectFn=Rm,this._overrideRedirectResult=dE}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,r,a){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,r,a)}async _openRedirect(e,t,r,a){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,r,a)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return _C()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return t4(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await XU();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EC(n){return n.unwrap()}function n4(n){return n.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r4(n){return TC(n)}function i4(n,e){var t;const r=(t=e.customData)===null||t===void 0?void 0:t._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const a=e;a.resolver=new s4(n,W2(n,e))}else if(r){const a=TC(e),o=e;a&&(o.credential=a,o.tenantId=r.tenantId||void 0,o.email=r.email||void 0,o.phoneNumber=r.phoneNumber||void 0)}}function TC(n){const{_tokenResponse:e}=n instanceof kn?n.customData:n;if(!e)return null;if(!(n instanceof kn)&&"temporaryProof"in e&&"phoneNumber"in e)return bo.credentialFromResult(n);const t=e.providerId;if(!t||t===Zc.PASSWORD)return null;let r;switch(t){case Zc.GOOGLE:r=ti;break;case Zc.FACEBOOK:r=ei;break;case Zc.GITHUB:r=ni;break;case Zc.TWITTER:r=ri;break;default:const{oauthIdToken:a,oauthAccessToken:o,oauthTokenSecret:u,pendingToken:d,nonce:p}=e;return!o&&!u&&!a&&!d?null:d?t.startsWith("saml.")?ou._create(t,d):hi._fromParams({providerId:t,signInMethod:t,pendingToken:d,idToken:a,accessToken:o}):new Wl(t).credential({idToken:a,accessToken:o,rawNonce:p})}return n instanceof kn?r.credentialFromError(n):r.credentialFromResult(n)}function zn(n,e){return e.catch(t=>{throw t instanceof kn&&i4(n,t),t}).then(t=>{const r=t.operationType,a=t.user;return{operationType:r,credential:r4(t),additionalUserInfo:Q2(t),user:Cm.getOrCreate(a)}})}async function Xy(n,e){const t=await e;return{verificationId:t.verificationId,confirm:r=>zn(n,t.confirm(r))}}class s4{constructor(e,t){this.resolver=t,this.auth=n4(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return zn(EC(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cm=class hh{constructor(e){this._delegate=e,this.multiFactor=Z2(e)}static getOrCreate(e){return hh.USER_MAP.has(e)||hh.USER_MAP.set(e,new hh(e)),hh.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return zn(this.auth,YR(this._delegate,e))}async linkWithPhoneNumber(e,t){return Xy(this.auth,TL(this._delegate,e,t))}async linkWithPopup(e){return zn(this.auth,PL(this._delegate,e,Ys))}async linkWithRedirect(e){return await Yy(bt(this.auth)),BL(this._delegate,e,Ys)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return zn(this.auth,XR(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return Xy(this.auth,wL(this._delegate,e,t))}reauthenticateWithPopup(e){return zn(this.auth,DL(this._delegate,e,Ys))}async reauthenticateWithRedirect(e){return await Yy(bt(this.auth)),LL(this._delegate,e,Ys)}sendEmailVerification(e){return L2(this._delegate,e)}async unlink(e){return await b2(this._delegate,e),this}updateEmail(e){return F2(this._delegate,e)}updatePassword(e){return q2(this._delegate,e)}updatePhoneNumber(e){return bL(this._delegate,e)}updateProfile(e){return z2(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return U2(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}};Cm.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const th=se;class Zy{constructor(e,t){if(this.app=e,t.isInitialized()){this._delegate=t.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;th(r,"invalid-api-key",{appName:e.name}),th(r,"invalid-api-key",{appName:e.name});const a=typeof window<"u"?Ys:void 0;this._delegate=t.initialize({options:{persistence:a4(r,e.name),popupRedirectResolver:a}}),this._delegate._updateErrorMap(dM),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?Cm.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){e2(this._delegate,e,t)}applyActionCode(e){return C2(this._delegate,e)}checkActionCode(e){return ZR(this._delegate,e)}confirmPasswordReset(e,t){return R2(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return zn(this._delegate,P2(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return M2(this._delegate,e)}isSignInWithEmailLink(e){return O2(this._delegate,e)}async getRedirectResult(){th(wy(),this._delegate,"operation-not-supported-in-this-environment");const e=await FL(this._delegate,Ys);return e?zn(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){qU(this._delegate,e)}onAuthStateChanged(e,t,r){const{next:a,error:o,complete:u}=UI(e,t,r);return this._delegate.onAuthStateChanged(a,o,u)}onIdTokenChanged(e,t,r){const{next:a,error:o,complete:u}=UI(e,t,r);return this._delegate.onIdTokenChanged(a,o,u)}sendSignInLinkToEmail(e,t){return N2(this._delegate,e,t)}sendPasswordResetEmail(e,t){return S2(this._delegate,e,t||void 0)}async setPersistence(e){JU(this._delegate,e);let t;switch(e){case er.SESSION:t=wo;break;case er.LOCAL:t=await tr(Uh)._isAvailable()?Uh:oE;break;case er.NONE:t=au;break;default:return vn("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return zn(this._delegate,w2(this._delegate))}signInWithCredential(e){return zn(this._delegate,wm(this._delegate,e))}signInWithCustomToken(e){return zn(this._delegate,A2(this._delegate,e))}signInWithEmailAndPassword(e,t){return zn(this._delegate,x2(this._delegate,e,t))}signInWithEmailLink(e,t){return zn(this._delegate,k2(this._delegate,e,t))}signInWithPhoneNumber(e,t){return Xy(this._delegate,EL(this._delegate,e,t))}async signInWithPopup(e){return th(wy(),this._delegate,"operation-not-supported-in-this-environment"),zn(this._delegate,CL(this._delegate,e,Ys))}async signInWithRedirect(e){return th(wy(),this._delegate,"operation-not-supported-in-this-environment"),await Yy(this._delegate),VL(this._delegate,e,Ys)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return D2(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}Zy.Persistence=er;function UI(n,e,t){let r=n;typeof n!="function"&&({next:r,error:e,complete:t}=n);const a=r;return{next:u=>a(u&&Cm.getOrCreate(u)),error:e,complete:t}}function a4(n,e){const t=e4(n,e);if(typeof self<"u"&&!t.includes(Uh)&&t.push(Uh),typeof window<"u")for(const r of[oE,wo])t.includes(r)||t.push(r);return t.includes(au)||t.push(au),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mE{static credential(e,t){return bo.credential(e,t)}constructor(){this.providerId="phone",this._delegate=new bo(EC(xu.auth()))}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}mE.PHONE_SIGN_IN_METHOD=bo.PHONE_SIGN_IN_METHOD;mE.PROVIDER_ID=bo.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o4=se;class l4{constructor(e,t,r=xu.app()){var a;o4((a=r.options)===null||a===void 0?void 0:a.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new yL(r.auth(),e,t),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u4="auth-compat";function c4(n){n.INTERNAL.registerComponent(new ci(u4,e=>{const t=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new Zy(t,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Ol.EMAIL_SIGNIN,PASSWORD_RESET:Ol.PASSWORD_RESET,RECOVER_EMAIL:Ol.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Ol.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Ol.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Ol.VERIFY_EMAIL}},EmailAuthProvider:ya,FacebookAuthProvider:ei,GithubAuthProvider:ni,GoogleAuthProvider:ti,OAuthProvider:Wl,SAMLAuthProvider:Up,PhoneAuthProvider:mE,PhoneMultiFactorGenerator:pC,RecaptchaVerifier:l4,TwitterAuthProvider:ri,Auth:Zy,AuthCredential:Ou,Error:kn}).setInstantiationMode("LAZY").setMultipleInstances(!1)),n.registerVersion(jU,HU)}c4(xu);var BI=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ta,wC;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(D,R){function A(){}A.prototype=R.prototype,D.D=R.prototype,D.prototype=new A,D.prototype.constructor=D,D.C=function(x,V,F){for(var N=Array(arguments.length-2),Nt=2;Nt<arguments.length;Nt++)N[Nt-2]=arguments[Nt];return R.prototype[V].apply(x,N)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(D,R,A){A||(A=0);var x=Array(16);if(typeof R=="string")for(var V=0;16>V;++V)x[V]=R.charCodeAt(A++)|R.charCodeAt(A++)<<8|R.charCodeAt(A++)<<16|R.charCodeAt(A++)<<24;else for(V=0;16>V;++V)x[V]=R[A++]|R[A++]<<8|R[A++]<<16|R[A++]<<24;R=D.g[0],A=D.g[1],V=D.g[2];var F=D.g[3],N=R+(F^A&(V^F))+x[0]+3614090360&4294967295;R=A+(N<<7&4294967295|N>>>25),N=F+(V^R&(A^V))+x[1]+3905402710&4294967295,F=R+(N<<12&4294967295|N>>>20),N=V+(A^F&(R^A))+x[2]+606105819&4294967295,V=F+(N<<17&4294967295|N>>>15),N=A+(R^V&(F^R))+x[3]+3250441966&4294967295,A=V+(N<<22&4294967295|N>>>10),N=R+(F^A&(V^F))+x[4]+4118548399&4294967295,R=A+(N<<7&4294967295|N>>>25),N=F+(V^R&(A^V))+x[5]+1200080426&4294967295,F=R+(N<<12&4294967295|N>>>20),N=V+(A^F&(R^A))+x[6]+2821735955&4294967295,V=F+(N<<17&4294967295|N>>>15),N=A+(R^V&(F^R))+x[7]+4249261313&4294967295,A=V+(N<<22&4294967295|N>>>10),N=R+(F^A&(V^F))+x[8]+1770035416&4294967295,R=A+(N<<7&4294967295|N>>>25),N=F+(V^R&(A^V))+x[9]+2336552879&4294967295,F=R+(N<<12&4294967295|N>>>20),N=V+(A^F&(R^A))+x[10]+4294925233&4294967295,V=F+(N<<17&4294967295|N>>>15),N=A+(R^V&(F^R))+x[11]+2304563134&4294967295,A=V+(N<<22&4294967295|N>>>10),N=R+(F^A&(V^F))+x[12]+1804603682&4294967295,R=A+(N<<7&4294967295|N>>>25),N=F+(V^R&(A^V))+x[13]+4254626195&4294967295,F=R+(N<<12&4294967295|N>>>20),N=V+(A^F&(R^A))+x[14]+2792965006&4294967295,V=F+(N<<17&4294967295|N>>>15),N=A+(R^V&(F^R))+x[15]+1236535329&4294967295,A=V+(N<<22&4294967295|N>>>10),N=R+(V^F&(A^V))+x[1]+4129170786&4294967295,R=A+(N<<5&4294967295|N>>>27),N=F+(A^V&(R^A))+x[6]+3225465664&4294967295,F=R+(N<<9&4294967295|N>>>23),N=V+(R^A&(F^R))+x[11]+643717713&4294967295,V=F+(N<<14&4294967295|N>>>18),N=A+(F^R&(V^F))+x[0]+3921069994&4294967295,A=V+(N<<20&4294967295|N>>>12),N=R+(V^F&(A^V))+x[5]+3593408605&4294967295,R=A+(N<<5&4294967295|N>>>27),N=F+(A^V&(R^A))+x[10]+38016083&4294967295,F=R+(N<<9&4294967295|N>>>23),N=V+(R^A&(F^R))+x[15]+3634488961&4294967295,V=F+(N<<14&4294967295|N>>>18),N=A+(F^R&(V^F))+x[4]+3889429448&4294967295,A=V+(N<<20&4294967295|N>>>12),N=R+(V^F&(A^V))+x[9]+568446438&4294967295,R=A+(N<<5&4294967295|N>>>27),N=F+(A^V&(R^A))+x[14]+3275163606&4294967295,F=R+(N<<9&4294967295|N>>>23),N=V+(R^A&(F^R))+x[3]+4107603335&4294967295,V=F+(N<<14&4294967295|N>>>18),N=A+(F^R&(V^F))+x[8]+1163531501&4294967295,A=V+(N<<20&4294967295|N>>>12),N=R+(V^F&(A^V))+x[13]+2850285829&4294967295,R=A+(N<<5&4294967295|N>>>27),N=F+(A^V&(R^A))+x[2]+4243563512&4294967295,F=R+(N<<9&4294967295|N>>>23),N=V+(R^A&(F^R))+x[7]+1735328473&4294967295,V=F+(N<<14&4294967295|N>>>18),N=A+(F^R&(V^F))+x[12]+2368359562&4294967295,A=V+(N<<20&4294967295|N>>>12),N=R+(A^V^F)+x[5]+4294588738&4294967295,R=A+(N<<4&4294967295|N>>>28),N=F+(R^A^V)+x[8]+2272392833&4294967295,F=R+(N<<11&4294967295|N>>>21),N=V+(F^R^A)+x[11]+1839030562&4294967295,V=F+(N<<16&4294967295|N>>>16),N=A+(V^F^R)+x[14]+4259657740&4294967295,A=V+(N<<23&4294967295|N>>>9),N=R+(A^V^F)+x[1]+2763975236&4294967295,R=A+(N<<4&4294967295|N>>>28),N=F+(R^A^V)+x[4]+1272893353&4294967295,F=R+(N<<11&4294967295|N>>>21),N=V+(F^R^A)+x[7]+4139469664&4294967295,V=F+(N<<16&4294967295|N>>>16),N=A+(V^F^R)+x[10]+3200236656&4294967295,A=V+(N<<23&4294967295|N>>>9),N=R+(A^V^F)+x[13]+681279174&4294967295,R=A+(N<<4&4294967295|N>>>28),N=F+(R^A^V)+x[0]+3936430074&4294967295,F=R+(N<<11&4294967295|N>>>21),N=V+(F^R^A)+x[3]+3572445317&4294967295,V=F+(N<<16&4294967295|N>>>16),N=A+(V^F^R)+x[6]+76029189&4294967295,A=V+(N<<23&4294967295|N>>>9),N=R+(A^V^F)+x[9]+3654602809&4294967295,R=A+(N<<4&4294967295|N>>>28),N=F+(R^A^V)+x[12]+3873151461&4294967295,F=R+(N<<11&4294967295|N>>>21),N=V+(F^R^A)+x[15]+530742520&4294967295,V=F+(N<<16&4294967295|N>>>16),N=A+(V^F^R)+x[2]+3299628645&4294967295,A=V+(N<<23&4294967295|N>>>9),N=R+(V^(A|~F))+x[0]+4096336452&4294967295,R=A+(N<<6&4294967295|N>>>26),N=F+(A^(R|~V))+x[7]+1126891415&4294967295,F=R+(N<<10&4294967295|N>>>22),N=V+(R^(F|~A))+x[14]+2878612391&4294967295,V=F+(N<<15&4294967295|N>>>17),N=A+(F^(V|~R))+x[5]+4237533241&4294967295,A=V+(N<<21&4294967295|N>>>11),N=R+(V^(A|~F))+x[12]+1700485571&4294967295,R=A+(N<<6&4294967295|N>>>26),N=F+(A^(R|~V))+x[3]+2399980690&4294967295,F=R+(N<<10&4294967295|N>>>22),N=V+(R^(F|~A))+x[10]+4293915773&4294967295,V=F+(N<<15&4294967295|N>>>17),N=A+(F^(V|~R))+x[1]+2240044497&4294967295,A=V+(N<<21&4294967295|N>>>11),N=R+(V^(A|~F))+x[8]+1873313359&4294967295,R=A+(N<<6&4294967295|N>>>26),N=F+(A^(R|~V))+x[15]+4264355552&4294967295,F=R+(N<<10&4294967295|N>>>22),N=V+(R^(F|~A))+x[6]+2734768916&4294967295,V=F+(N<<15&4294967295|N>>>17),N=A+(F^(V|~R))+x[13]+1309151649&4294967295,A=V+(N<<21&4294967295|N>>>11),N=R+(V^(A|~F))+x[4]+4149444226&4294967295,R=A+(N<<6&4294967295|N>>>26),N=F+(A^(R|~V))+x[11]+3174756917&4294967295,F=R+(N<<10&4294967295|N>>>22),N=V+(R^(F|~A))+x[2]+718787259&4294967295,V=F+(N<<15&4294967295|N>>>17),N=A+(F^(V|~R))+x[9]+3951481745&4294967295,D.g[0]=D.g[0]+R&4294967295,D.g[1]=D.g[1]+(V+(N<<21&4294967295|N>>>11))&4294967295,D.g[2]=D.g[2]+V&4294967295,D.g[3]=D.g[3]+F&4294967295}r.prototype.u=function(D,R){R===void 0&&(R=D.length);for(var A=R-this.blockSize,x=this.B,V=this.h,F=0;F<R;){if(V==0)for(;F<=A;)a(this,D,F),F+=this.blockSize;if(typeof D=="string"){for(;F<R;)if(x[V++]=D.charCodeAt(F++),V==this.blockSize){a(this,x),V=0;break}}else for(;F<R;)if(x[V++]=D[F++],V==this.blockSize){a(this,x),V=0;break}}this.h=V,this.o+=R},r.prototype.v=function(){var D=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);D[0]=128;for(var R=1;R<D.length-8;++R)D[R]=0;var A=8*this.o;for(R=D.length-8;R<D.length;++R)D[R]=A&255,A/=256;for(this.u(D),D=Array(16),R=A=0;4>R;++R)for(var x=0;32>x;x+=8)D[A++]=this.g[R]>>>x&255;return D};function o(D,R){var A=d;return Object.prototype.hasOwnProperty.call(A,D)?A[D]:A[D]=R(D)}function u(D,R){this.h=R;for(var A=[],x=!0,V=D.length-1;0<=V;V--){var F=D[V]|0;x&&F==R||(A[V]=F,x=!1)}this.g=A}var d={};function p(D){return-128<=D&&128>D?o(D,function(R){return new u([R|0],0>R?-1:0)}):new u([D|0],0>D?-1:0)}function m(D){if(isNaN(D)||!isFinite(D))return v;if(0>D)return L(m(-D));for(var R=[],A=1,x=0;D>=A;x++)R[x]=D/A|0,A*=4294967296;return new u(R,0)}function y(D,R){if(D.length==0)throw Error("number format error: empty string");if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(D.charAt(0)=="-")return L(y(D.substring(1),R));if(0<=D.indexOf("-"))throw Error('number format error: interior "-" character');for(var A=m(Math.pow(R,8)),x=v,V=0;V<D.length;V+=8){var F=Math.min(8,D.length-V),N=parseInt(D.substring(V,V+F),R);8>F?(F=m(Math.pow(R,F)),x=x.j(F).add(m(N))):(x=x.j(A),x=x.add(m(N)))}return x}var v=p(0),w=p(1),S=p(16777216);n=u.prototype,n.m=function(){if(U(this))return-L(this).m();for(var D=0,R=1,A=0;A<this.g.length;A++){var x=this.i(A);D+=(0<=x?x:4294967296+x)*R,R*=4294967296}return D},n.toString=function(D){if(D=D||10,2>D||36<D)throw Error("radix out of range: "+D);if(P(this))return"0";if(U(this))return"-"+L(this).toString(D);for(var R=m(Math.pow(D,6)),A=this,x="";;){var V=oe(A,R).g;A=z(A,V.j(R));var F=((0<A.g.length?A.g[0]:A.h)>>>0).toString(D);if(A=V,P(A))return F+x;for(;6>F.length;)F="0"+F;x=F+x}},n.i=function(D){return 0>D?0:D<this.g.length?this.g[D]:this.h};function P(D){if(D.h!=0)return!1;for(var R=0;R<D.g.length;R++)if(D.g[R]!=0)return!1;return!0}function U(D){return D.h==-1}n.l=function(D){return D=z(this,D),U(D)?-1:P(D)?0:1};function L(D){for(var R=D.g.length,A=[],x=0;x<R;x++)A[x]=~D.g[x];return new u(A,~D.h).add(w)}n.abs=function(){return U(this)?L(this):this},n.add=function(D){for(var R=Math.max(this.g.length,D.g.length),A=[],x=0,V=0;V<=R;V++){var F=x+(this.i(V)&65535)+(D.i(V)&65535),N=(F>>>16)+(this.i(V)>>>16)+(D.i(V)>>>16);x=N>>>16,F&=65535,N&=65535,A[V]=N<<16|F}return new u(A,A[A.length-1]&-2147483648?-1:0)};function z(D,R){return D.add(L(R))}n.j=function(D){if(P(this)||P(D))return v;if(U(this))return U(D)?L(this).j(L(D)):L(L(this).j(D));if(U(D))return L(this.j(L(D)));if(0>this.l(S)&&0>D.l(S))return m(this.m()*D.m());for(var R=this.g.length+D.g.length,A=[],x=0;x<2*R;x++)A[x]=0;for(x=0;x<this.g.length;x++)for(var V=0;V<D.g.length;V++){var F=this.i(x)>>>16,N=this.i(x)&65535,Nt=D.i(V)>>>16,It=D.i(V)&65535;A[2*x+2*V]+=N*It,W(A,2*x+2*V),A[2*x+2*V+1]+=F*It,W(A,2*x+2*V+1),A[2*x+2*V+1]+=N*Nt,W(A,2*x+2*V+1),A[2*x+2*V+2]+=F*Nt,W(A,2*x+2*V+2)}for(x=0;x<R;x++)A[x]=A[2*x+1]<<16|A[2*x];for(x=R;x<2*R;x++)A[x]=0;return new u(A,0)};function W(D,R){for(;(D[R]&65535)!=D[R];)D[R+1]+=D[R]>>>16,D[R]&=65535,R++}function G(D,R){this.g=D,this.h=R}function oe(D,R){if(P(R))throw Error("division by zero");if(P(D))return new G(v,v);if(U(D))return R=oe(L(D),R),new G(L(R.g),L(R.h));if(U(R))return R=oe(D,L(R)),new G(L(R.g),R.h);if(30<D.g.length){if(U(D)||U(R))throw Error("slowDivide_ only works with positive integers.");for(var A=w,x=R;0>=x.l(D);)A=ae(A),x=ae(x);var V=le(A,1),F=le(x,1);for(x=le(x,2),A=le(A,2);!P(x);){var N=F.add(x);0>=N.l(D)&&(V=V.add(A),F=N),x=le(x,1),A=le(A,1)}return R=z(D,V.j(R)),new G(V,R)}for(V=v;0<=D.l(R);){for(A=Math.max(1,Math.floor(D.m()/R.m())),x=Math.ceil(Math.log(A)/Math.LN2),x=48>=x?1:Math.pow(2,x-48),F=m(A),N=F.j(R);U(N)||0<N.l(D);)A-=x,F=m(A),N=F.j(R);P(F)&&(F=w),V=V.add(F),D=z(D,N)}return new G(V,D)}n.A=function(D){return oe(this,D).h},n.and=function(D){for(var R=Math.max(this.g.length,D.g.length),A=[],x=0;x<R;x++)A[x]=this.i(x)&D.i(x);return new u(A,this.h&D.h)},n.or=function(D){for(var R=Math.max(this.g.length,D.g.length),A=[],x=0;x<R;x++)A[x]=this.i(x)|D.i(x);return new u(A,this.h|D.h)},n.xor=function(D){for(var R=Math.max(this.g.length,D.g.length),A=[],x=0;x<R;x++)A[x]=this.i(x)^D.i(x);return new u(A,this.h^D.h)};function ae(D){for(var R=D.g.length+1,A=[],x=0;x<R;x++)A[x]=D.i(x)<<1|D.i(x-1)>>>31;return new u(A,D.h)}function le(D,R){var A=R>>5;R%=32;for(var x=D.g.length-A,V=[],F=0;F<x;F++)V[F]=0<R?D.i(F+A)>>>R|D.i(F+A+1)<<32-R:D.i(F+A);return new u(V,D.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,wC=r,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=m,u.fromString=y,ta=u}).apply(typeof BI<"u"?BI:typeof self<"u"?self:typeof window<"u"?window:{});var Jf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var bC,dh,IC,yp,Jy,AC,SC,RC;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(h,_,E){return h==Array.prototype||h==Object.prototype||(h[_]=E.value),h};function t(h){h=[typeof globalThis=="object"&&globalThis,h,typeof window=="object"&&window,typeof self=="object"&&self,typeof Jf=="object"&&Jf];for(var _=0;_<h.length;++_){var E=h[_];if(E&&E.Math==Math)return E}throw Error("Cannot find global object")}var r=t(this);function a(h,_){if(_)e:{var E=r;h=h.split(".");for(var I=0;I<h.length-1;I++){var q=h[I];if(!(q in E))break e;E=E[q]}h=h[h.length-1],I=E[h],_=_(I),_!=I&&_!=null&&e(E,h,{configurable:!0,writable:!0,value:_})}}function o(h,_){h instanceof String&&(h+="");var E=0,I=!1,q={next:function(){if(!I&&E<h.length){var Q=E++;return{value:_(Q,h[Q]),done:!1}}return I=!0,{done:!0,value:void 0}}};return q[Symbol.iterator]=function(){return q},q}a("Array.prototype.values",function(h){return h||function(){return o(this,function(_,E){return E})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},d=this||self;function p(h){var _=typeof h;return _=_!="object"?_:h?Array.isArray(h)?"array":_:"null",_=="array"||_=="object"&&typeof h.length=="number"}function m(h){var _=typeof h;return _=="object"&&h!=null||_=="function"}function y(h,_,E){return h.call.apply(h.bind,arguments)}function v(h,_,E){if(!h)throw Error();if(2<arguments.length){var I=Array.prototype.slice.call(arguments,2);return function(){var q=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(q,I),h.apply(_,q)}}return function(){return h.apply(_,arguments)}}function w(h,_,E){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?y:v,w.apply(null,arguments)}function S(h,_){var E=Array.prototype.slice.call(arguments,1);return function(){var I=E.slice();return I.push.apply(I,arguments),h.apply(this,I)}}function P(h,_){function E(){}E.prototype=_.prototype,h.aa=_.prototype,h.prototype=new E,h.prototype.constructor=h,h.Qb=function(I,q,Q){for(var ue=Array(arguments.length-2),je=2;je<arguments.length;je++)ue[je-2]=arguments[je];return _.prototype[q].apply(I,ue)}}function U(h){const _=h.length;if(0<_){const E=Array(_);for(let I=0;I<_;I++)E[I]=h[I];return E}return[]}function L(h,_){for(let E=1;E<arguments.length;E++){const I=arguments[E];if(p(I)){const q=h.length||0,Q=I.length||0;h.length=q+Q;for(let ue=0;ue<Q;ue++)h[q+ue]=I[ue]}else h.push(I)}}class z{constructor(_,E){this.i=_,this.j=E,this.h=0,this.g=null}get(){let _;return 0<this.h?(this.h--,_=this.g,this.g=_.next,_.next=null):_=this.i(),_}}function W(h){return/^[\s\xa0]*$/.test(h)}function G(){var h=d.navigator;return h&&(h=h.userAgent)?h:""}function oe(h){return oe[" "](h),h}oe[" "]=function(){};var ae=G().indexOf("Gecko")!=-1&&!(G().toLowerCase().indexOf("webkit")!=-1&&G().indexOf("Edge")==-1)&&!(G().indexOf("Trident")!=-1||G().indexOf("MSIE")!=-1)&&G().indexOf("Edge")==-1;function le(h,_,E){for(const I in h)_.call(E,h[I],I,h)}function D(h,_){for(const E in h)_.call(void 0,h[E],E,h)}function R(h){const _={};for(const E in h)_[E]=h[E];return _}const A="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function x(h,_){let E,I;for(let q=1;q<arguments.length;q++){I=arguments[q];for(E in I)h[E]=I[E];for(let Q=0;Q<A.length;Q++)E=A[Q],Object.prototype.hasOwnProperty.call(I,E)&&(h[E]=I[E])}}function V(h){var _=1;h=h.split(":");const E=[];for(;0<_&&h.length;)E.push(h.shift()),_--;return h.length&&E.push(h.join(":")),E}function F(h){d.setTimeout(()=>{throw h},0)}function N(){var h=Oe;let _=null;return h.g&&(_=h.g,h.g=h.g.next,h.g||(h.h=null),_.next=null),_}class Nt{constructor(){this.h=this.g=null}add(_,E){const I=It.get();I.set(_,E),this.h?this.h.next=I:this.g=I,this.h=I}}var It=new z(()=>new he,h=>h.reset());class he{constructor(){this.next=this.g=this.h=null}set(_,E){this.h=_,this.g=E,this.next=null}reset(){this.next=this.g=this.h=null}}let be,Te=!1,Oe=new Nt,O=()=>{const h=d.Promise.resolve(void 0);be=()=>{h.then(re)}};var re=()=>{for(var h;h=N();){try{h.h.call(h.g)}catch(E){F(E)}var _=It;_.j(h),100>_.h&&(_.h++,h.next=_.g,_.g=h)}Te=!1};function ge(){this.s=this.s,this.C=this.C}ge.prototype.s=!1,ge.prototype.ma=function(){this.s||(this.s=!0,this.N())},ge.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function pe(h,_){this.type=h,this.g=this.target=_,this.defaultPrevented=!1}pe.prototype.h=function(){this.defaultPrevented=!0};var fe=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var h=!1,_=Object.defineProperty({},"passive",{get:function(){h=!0}});try{const E=()=>{};d.addEventListener("test",E,_),d.removeEventListener("test",E,_)}catch{}return h}();function Ce(h,_){if(pe.call(this,h?h.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,h){var E=this.type=h.type,I=h.changedTouches&&h.changedTouches.length?h.changedTouches[0]:null;if(this.target=h.target||h.srcElement,this.g=_,_=h.relatedTarget){if(ae){e:{try{oe(_.nodeName);var q=!0;break e}catch{}q=!1}q||(_=null)}}else E=="mouseover"?_=h.fromElement:E=="mouseout"&&(_=h.toElement);this.relatedTarget=_,I?(this.clientX=I.clientX!==void 0?I.clientX:I.pageX,this.clientY=I.clientY!==void 0?I.clientY:I.pageY,this.screenX=I.screenX||0,this.screenY=I.screenY||0):(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0),this.button=h.button,this.key=h.key||"",this.ctrlKey=h.ctrlKey,this.altKey=h.altKey,this.shiftKey=h.shiftKey,this.metaKey=h.metaKey,this.pointerId=h.pointerId||0,this.pointerType=typeof h.pointerType=="string"?h.pointerType:Re[h.pointerType]||"",this.state=h.state,this.i=h,h.defaultPrevented&&Ce.aa.h.call(this)}}P(Ce,pe);var Re={2:"touch",3:"pen",4:"mouse"};Ce.prototype.h=function(){Ce.aa.h.call(this);var h=this.i;h.preventDefault?h.preventDefault():h.returnValue=!1};var ut="closure_listenable_"+(1e6*Math.random()|0),Me=0;function Ze(h,_,E,I,q){this.listener=h,this.proxy=null,this.src=_,this.type=E,this.capture=!!I,this.ha=q,this.key=++Me,this.da=this.fa=!1}function Ke(h){h.da=!0,h.listener=null,h.proxy=null,h.src=null,h.ha=null}function Ut(h){this.src=h,this.g={},this.h=0}Ut.prototype.add=function(h,_,E,I,q){var Q=h.toString();h=this.g[Q],h||(h=this.g[Q]=[],this.h++);var ue=rr(h,_,I,q);return-1<ue?(_=h[ue],E||(_.fa=!1)):(_=new Ze(_,this.src,Q,!!I,q),_.fa=E,h.push(_)),_};function Jt(h,_){var E=_.type;if(E in h.g){var I=h.g[E],q=Array.prototype.indexOf.call(I,_,void 0),Q;(Q=0<=q)&&Array.prototype.splice.call(I,q,1),Q&&(Ke(_),h.g[E].length==0&&(delete h.g[E],h.h--))}}function rr(h,_,E,I){for(var q=0;q<h.length;++q){var Q=h[q];if(!Q.da&&Q.listener==_&&Q.capture==!!E&&Q.ha==I)return q}return-1}var as="closure_lm_"+(1e6*Math.random()|0),os={};function _i(h,_,E,I,q){if(Array.isArray(_)){for(var Q=0;Q<_.length;Q++)_i(h,_[Q],E,I,q);return null}return E=Rd(E),h&&h[ut]?h.K(_,E,m(I)?!!I.capture:!1,q):ju(h,_,E,!1,I,q)}function ju(h,_,E,I,q,Q){if(!_)throw Error("Invalid event type");var ue=m(q)?!!q.capture:!!q,je=Hu(h);if(je||(h[as]=je=new Ut(h)),E=je.add(_,E,I,ue,Q),E.proxy)return E;if(I=qo(),E.proxy=I,I.src=h,I.listener=E,h.addEventListener)fe||(q=ue),q===void 0&&(q=!1),h.addEventListener(_.toString(),I,q);else if(h.attachEvent)h.attachEvent(Ho(_.toString()),I);else if(h.addListener&&h.removeListener)h.addListener(I);else throw Error("addEventListener and attachEvent are unavailable.");return E}function qo(){function h(E){return _.call(h.src,h.listener,E)}const _=ng;return h}function jo(h,_,E,I,q){if(Array.isArray(_))for(var Q=0;Q<_.length;Q++)jo(h,_[Q],E,I,q);else I=m(I)?!!I.capture:!!I,E=Rd(E),h&&h[ut]?(h=h.i,_=String(_).toString(),_ in h.g&&(Q=h.g[_],E=rr(Q,E,I,q),-1<E&&(Ke(Q[E]),Array.prototype.splice.call(Q,E,1),Q.length==0&&(delete h.g[_],h.h--)))):h&&(h=Hu(h))&&(_=h.g[_.toString()],h=-1,_&&(h=rr(_,E,I,q)),(E=-1<h?_[h]:null)&&Ia(E))}function Ia(h){if(typeof h!="number"&&h&&!h.da){var _=h.src;if(_&&_[ut])Jt(_.i,h);else{var E=h.type,I=h.proxy;_.removeEventListener?_.removeEventListener(E,I,h.capture):_.detachEvent?_.detachEvent(Ho(E),I):_.addListener&&_.removeListener&&_.removeListener(I),(E=Hu(_))?(Jt(E,h),E.h==0&&(E.src=null,_[as]=null)):Ke(h)}}}function Ho(h){return h in os?os[h]:os[h]="on"+h}function ng(h,_){if(h.da)h=!0;else{_=new Ce(_,this);var E=h.listener,I=h.ha||h.src;h.fa&&Ia(h),h=E.call(I,_)}return h}function Hu(h){return h=h[as],h instanceof Ut?h:null}var Ln="__closure_events_fn_"+(1e9*Math.random()>>>0);function Rd(h){return typeof h=="function"?h:(h[Ln]||(h[Ln]=function(_){return h.handleEvent(_)}),h[Ln])}function Gt(){ge.call(this),this.i=new Ut(this),this.M=this,this.F=null}P(Gt,ge),Gt.prototype[ut]=!0,Gt.prototype.removeEventListener=function(h,_,E,I){jo(this,h,_,E,I)};function en(h,_){var E,I=h.F;if(I)for(E=[];I;I=I.F)E.push(I);if(h=h.M,I=_.type||_,typeof _=="string")_=new pe(_,h);else if(_ instanceof pe)_.target=_.target||h;else{var q=_;_=new pe(I,h),x(_,q)}if(q=!0,E)for(var Q=E.length-1;0<=Q;Q--){var ue=_.g=E[Q];q=yi(ue,I,!0,_)&&q}if(ue=_.g=h,q=yi(ue,I,!0,_)&&q,q=yi(ue,I,!1,_)&&q,E)for(Q=0;Q<E.length;Q++)ue=_.g=E[Q],q=yi(ue,I,!1,_)&&q}Gt.prototype.N=function(){if(Gt.aa.N.call(this),this.i){var h=this.i,_;for(_ in h.g){for(var E=h.g[_],I=0;I<E.length;I++)Ke(E[I]);delete h.g[_],h.h--}}this.F=null},Gt.prototype.K=function(h,_,E,I){return this.i.add(String(h),_,!1,E,I)},Gt.prototype.L=function(h,_,E,I){return this.i.add(String(h),_,!0,E,I)};function yi(h,_,E,I){if(_=h.i.g[String(_)],!_)return!0;_=_.concat();for(var q=!0,Q=0;Q<_.length;++Q){var ue=_[Q];if(ue&&!ue.da&&ue.capture==E){var je=ue.listener,Kt=ue.ha||ue.src;ue.fa&&Jt(h.i,ue),q=je.call(Kt,I)!==!1&&q}}return q&&!I.defaultPrevented}function Cd(h,_,E){if(typeof h=="function")E&&(h=w(h,E));else if(h&&typeof h.handleEvent=="function")h=w(h.handleEvent,h);else throw Error("Invalid listener argument");return 2147483647<Number(_)?-1:d.setTimeout(h,_||0)}function Gu(h){h.g=Cd(()=>{h.g=null,h.i&&(h.i=!1,Gu(h))},h.l);const _=h.h;h.h=null,h.m.apply(null,_)}class rg extends ge{constructor(_,E){super(),this.m=_,this.l=E,this.h=null,this.i=!1,this.g=null}j(_){this.h=arguments,this.g?this.i=!0:Gu(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Aa(h){ge.call(this),this.h=h,this.g={}}P(Aa,ge);var ls=[];function En(h){le(h.g,function(_,E){this.g.hasOwnProperty(E)&&Ia(_)},h),h.g={}}Aa.prototype.N=function(){Aa.aa.N.call(this),En(this)},Aa.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var $u=d.JSON.stringify,Vr=d.JSON.parse,Rn=class{stringify(h){return d.JSON.stringify(h,void 0)}parse(h){return d.JSON.parse(h,void 0)}};function Ku(){}Ku.prototype.h=null;function Dd(h){return h.h||(h.h=h.i())}function Pd(){}var Mr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function us(){pe.call(this,"d")}P(us,pe);function Ir(){pe.call(this,"c")}P(Ir,pe);var ir={},cs=null;function Go(){return cs=cs||new Gt}ir.La="serverreachability";function Qu(h){pe.call(this,ir.La,h)}P(Qu,pe);function hs(h){const _=Go();en(_,new Qu(_))}ir.STAT_EVENT="statevent";function $o(h,_){pe.call(this,ir.STAT_EVENT,h),this.stat=_}P($o,pe);function Ot(h){const _=Go();en(_,new $o(_,h))}ir.Ma="timingevent";function xd(h,_){pe.call(this,ir.Ma,h),this.size=_}P(xd,pe);function ds(h,_){if(typeof h!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){h()},_)}function fs(){this.g=!0}fs.prototype.xa=function(){this.g=!1};function Nd(h,_,E,I,q,Q){h.info(function(){if(h.g)if(Q)for(var ue="",je=Q.split("&"),Kt=0;Kt<je.length;Kt++){var He=je[Kt].split("=");if(1<He.length){var rn=He[0];He=He[1];var Qt=rn.split("_");ue=2<=Qt.length&&Qt[1]=="type"?ue+(rn+"="+He+"&"):ue+(rn+"=redacted&")}}else ue=null;else ue=Q;return"XMLHTTP REQ ("+I+") [attempt "+q+"]: "+_+`
`+E+`
`+ue})}function Od(h,_,E,I,q,Q,ue){h.info(function(){return"XMLHTTP RESP ("+I+") [ attempt "+q+"]: "+_+`
`+E+`
`+Q+" "+ue})}function ps(h,_,E,I){h.info(function(){return"XMLHTTP TEXT ("+_+"): "+tn(h,E)+(I?" "+I:"")})}function Lr(h,_){h.info(function(){return"TIMEOUT: "+_})}fs.prototype.info=function(){};function tn(h,_){if(!h.g)return _;if(!_)return null;try{var E=JSON.parse(_);if(E){for(h=0;h<E.length;h++)if(Array.isArray(E[h])){var I=E[h];if(!(2>I.length)){var q=I[1];if(Array.isArray(q)&&!(1>q.length)){var Q=q[0];if(Q!="noop"&&Q!="stop"&&Q!="close")for(var ue=1;ue<q.length;ue++)q[ue]=""}}}}return $u(E)}catch{return _}}var $t={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},vi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Sa;function Ko(){}P(Ko,Ku),Ko.prototype.g=function(){return new XMLHttpRequest},Ko.prototype.i=function(){return{}},Sa=new Ko;function Ur(h,_,E,I){this.j=h,this.i=_,this.l=E,this.R=I||1,this.U=new Aa(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Wu}function Wu(){this.i=null,this.g="",this.h=!1}var ms={},Ra={};function Ar(h,_,E){h.L=1,h.v=Pa(At(_)),h.m=E,h.P=!0,Ei(h,null)}function Ei(h,_){h.F=Date.now(),_t(h),h.A=At(h.v);var E=h.A,I=h.R;Array.isArray(I)||(I=[String(I)]),bi(E.i,"t",I),h.C=0,E=h.j.J,h.h=new Wu,h.g=Kd(h.j,E?_:null,!h.m),0<h.O&&(h.M=new rg(w(h.Y,h,h.g),h.O)),_=h.U,E=h.g,I=h.ca;var q="readystatechange";Array.isArray(q)||(q&&(ls[0]=q.toString()),q=ls);for(var Q=0;Q<q.length;Q++){var ue=_i(E,q[Q],I||_.handleEvent,!1,_.h||_);if(!ue)break;_.g[ue.key]=ue}_=h.H?R(h.H):{},h.m?(h.u||(h.u="POST"),_["Content-Type"]="application/x-www-form-urlencoded",h.g.ea(h.A,h.u,h.m,_)):(h.u="GET",h.g.ea(h.A,h.u,null,_)),hs(),Nd(h.i,h.u,h.A,h.l,h.R,h.m)}Ur.prototype.ca=function(h){h=h.target;const _=this.M;_&&ur(h)==3?_.j():this.Y(h)},Ur.prototype.Y=function(h){try{if(h==this.g)e:{const Qt=ur(this.g);var _=this.g.Ba();const Ri=this.g.Z();if(!(3>Qt)&&(Qt!=3||this.g&&(this.h.h||this.g.oa()||Bd(this.g)))){this.J||Qt!=4||_==7||(_==8||0>=Ri?hs(3):hs(2)),Qo(this);var E=this.g.Z();this.X=E;t:if(gs(this)){var I=Bd(this.g);h="";var q=I.length,Q=ur(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Un(this),Gn(this);var ue="";break t}this.h.i=new d.TextDecoder}for(_=0;_<q;_++)this.h.h=!0,h+=this.h.i.decode(I[_],{stream:!(Q&&_==q-1)});I.length=0,this.h.g+=h,this.C=0,ue=this.h.g}else ue=this.g.oa();if(this.o=E==200,Od(this.i,this.u,this.A,this.l,this.R,Qt,E),this.o){if(this.T&&!this.K){t:{if(this.g){var je,Kt=this.g;if((je=Kt.g?Kt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!W(je)){var He=je;break t}}He=null}if(E=He)ps(this.i,this.l,E,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,$n(this,E);else{this.o=!1,this.s=3,Ot(12),Un(this),Gn(this);break e}}if(this.P){E=!0;let dn;for(;!this.J&&this.C<ue.length;)if(dn=_s(this,ue),dn==Ra){Qt==4&&(this.s=4,Ot(14),E=!1),ps(this.i,this.l,null,"[Incomplete Response]");break}else if(dn==ms){this.s=4,Ot(15),ps(this.i,this.l,ue,"[Invalid Chunk]"),E=!1;break}else ps(this.i,this.l,dn,null),$n(this,dn);if(gs(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Qt!=4||ue.length!=0||this.h.h||(this.s=1,Ot(16),E=!1),this.o=this.o&&E,!E)ps(this.i,this.l,ue,"[Invalid Chunked Response]"),Un(this),Gn(this);else if(0<ue.length&&!this.W){this.W=!0;var rn=this.j;rn.g==this&&rn.ba&&!rn.M&&(rn.j.info("Great, no buffering proxy detected. Bytes received: "+ue.length),La(rn),rn.M=!0,Ot(11))}}else ps(this.i,this.l,ue,null),$n(this,ue);Qt==4&&Un(this),this.o&&!this.J&&(Qt==4?Hd(this.j,this):(this.o=!1,_t(this)))}else ug(this.g),E==400&&0<ue.indexOf("Unknown SID")?(this.s=3,Ot(12)):(this.s=0,Ot(13)),Un(this),Gn(this)}}}catch{}finally{}};function gs(h){return h.g?h.u=="GET"&&h.L!=2&&h.j.Ca:!1}function _s(h,_){var E=h.C,I=_.indexOf(`
`,E);return I==-1?Ra:(E=Number(_.substring(E,I)),isNaN(E)?ms:(I+=1,I+E>_.length?Ra:(_=_.slice(I,I+E),h.C=I+E,_)))}Ur.prototype.cancel=function(){this.J=!0,Un(this)};function _t(h){h.S=Date.now()+h.I,Yu(h,h.I)}function Yu(h,_){if(h.B!=null)throw Error("WatchDog timer not null");h.B=ds(w(h.ba,h),_)}function Qo(h){h.B&&(d.clearTimeout(h.B),h.B=null)}Ur.prototype.ba=function(){this.B=null;const h=Date.now();0<=h-this.S?(Lr(this.i,this.A),this.L!=2&&(hs(),Ot(17)),Un(this),this.s=2,Gn(this)):Yu(this,this.S-h)};function Gn(h){h.j.G==0||h.J||Hd(h.j,h)}function Un(h){Qo(h);var _=h.M;_&&typeof _.ma=="function"&&_.ma(),h.M=null,En(h.U),h.g&&(_=h.g,h.g=null,_.abort(),_.ma())}function $n(h,_){try{var E=h.j;if(E.G!=0&&(E.g==h||ys(E.h,h))){if(!h.K&&ys(E.h,h)&&E.G==3){try{var I=E.Da.g.parse(_)}catch{I=null}if(Array.isArray(I)&&I.length==3){var q=I;if(q[0]==0){e:if(!E.u){if(E.g)if(E.g.F+3e3<h.F)il(E),nl(E);else break e;oc(E),Ot(18)}}else E.za=q[1],0<E.za-E.T&&37500>q[2]&&E.F&&E.v==0&&!E.C&&(E.C=ds(w(E.Za,E),6e3));if(1>=kd(E.h)&&E.ca){try{E.ca()}catch{}E.ca=void 0}}else Si(E,11)}else if((h.K||E.g==h)&&il(E),!W(_))for(q=E.Da.g.parse(_),_=0;_<q.length;_++){let He=q[_];if(E.T=He[0],He=He[1],E.G==2)if(He[0]=="c"){E.K=He[1],E.ia=He[2];const rn=He[3];rn!=null&&(E.la=rn,E.j.info("VER="+E.la));const Qt=He[4];Qt!=null&&(E.Aa=Qt,E.j.info("SVER="+E.Aa));const Ri=He[5];Ri!=null&&typeof Ri=="number"&&0<Ri&&(I=1.5*Ri,E.L=I,E.j.info("backChannelRequestTimeoutMs_="+I)),I=E;const dn=h.g;if(dn){const Gr=dn.g?dn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Gr){var Q=I.h;Q.g||Gr.indexOf("spdy")==-1&&Gr.indexOf("quic")==-1&&Gr.indexOf("h2")==-1||(Q.j=Q.l,Q.g=new Set,Q.h&&(vs(Q,Q.h),Q.h=null))}if(I.D){const uc=dn.g?dn.g.getResponseHeader("X-HTTP-Session-Id"):null;uc&&(I.ya=uc,Qe(I.I,I.D,uc))}}E.G=3,E.l&&E.l.ua(),E.ba&&(E.R=Date.now()-h.F,E.j.info("Handshake RTT: "+E.R+"ms")),I=E;var ue=h;if(I.qa=$d(I,I.J?I.ia:null,I.W),ue.K){sr(I.h,ue);var je=ue,Kt=I.L;Kt&&(je.I=Kt),je.B&&(Qo(je),_t(je)),I.g=ue}else qd(I);0<E.i.length&&rl(E)}else He[0]!="stop"&&He[0]!="close"||Si(E,7);else E.G==3&&(He[0]=="stop"||He[0]=="close"?He[0]=="stop"?Si(E,7):sc(E):He[0]!="noop"&&E.l&&E.l.ta(He),E.v=0)}}hs(4)}catch{}}var ig=class{constructor(h,_){this.g=h,this.map=_}};function Xu(h){this.l=h||10,d.PerformanceNavigationTiming?(h=d.performance.getEntriesByType("navigation"),h=0<h.length&&(h[0].nextHopProtocol=="hq"||h[0].nextHopProtocol=="h2")):h=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=h?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Zu(h){return h.h?!0:h.g?h.g.size>=h.j:!1}function kd(h){return h.h?1:h.g?h.g.size:0}function ys(h,_){return h.h?h.h==_:h.g?h.g.has(_):!1}function vs(h,_){h.g?h.g.add(_):h.h=_}function sr(h,_){h.h&&h.h==_?h.h=null:h.g&&h.g.has(_)&&h.g.delete(_)}Xu.prototype.cancel=function(){if(this.i=Cn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const h of this.g.values())h.cancel();this.g.clear()}};function Cn(h){if(h.h!=null)return h.i.concat(h.h.D);if(h.g!=null&&h.g.size!==0){let _=h.i;for(const E of h.g.values())_=_.concat(E.D);return _}return U(h.i)}function Vd(h){if(h.V&&typeof h.V=="function")return h.V();if(typeof Map<"u"&&h instanceof Map||typeof Set<"u"&&h instanceof Set)return Array.from(h.values());if(typeof h=="string")return h.split("");if(p(h)){for(var _=[],E=h.length,I=0;I<E;I++)_.push(h[I]);return _}_=[],E=0;for(I in h)_[E++]=h[I];return _}function sg(h){if(h.na&&typeof h.na=="function")return h.na();if(!h.V||typeof h.V!="function"){if(typeof Map<"u"&&h instanceof Map)return Array.from(h.keys());if(!(typeof Set<"u"&&h instanceof Set)){if(p(h)||typeof h=="string"){var _=[];h=h.length;for(var E=0;E<h;E++)_.push(E);return _}_=[],E=0;for(const I in h)_[E++]=I;return _}}}function Ca(h,_){if(h.forEach&&typeof h.forEach=="function")h.forEach(_,void 0);else if(p(h)||typeof h=="string")Array.prototype.forEach.call(h,_,void 0);else for(var E=sg(h),I=Vd(h),q=I.length,Q=0;Q<q;Q++)_.call(void 0,I[Q],E&&E[Q],h)}var Ju=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Wo(h,_){if(h){h=h.split("&");for(var E=0;E<h.length;E++){var I=h[E].indexOf("="),q=null;if(0<=I){var Q=h[E].substring(0,I);q=h[E].substring(I+1)}else Q=h[E];_(Q,q?decodeURIComponent(q.replace(/\+/g," ")):"")}}}function Ti(h){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,h instanceof Ti){this.h=h.h,Es(this,h.j),this.o=h.o,this.g=h.g,Da(this,h.s),this.l=h.l;var _=h.i,E=new Br;E.i=_.i,_.g&&(E.g=new Map(_.g),E.h=_.h),Yo(this,E),this.m=h.m}else h&&(_=String(h).match(Ju))?(this.h=!1,Es(this,_[1]||"",!0),this.o=Ts(_[2]||""),this.g=Ts(_[3]||"",!0),Da(this,_[4]),this.l=Ts(_[5]||"",!0),Yo(this,_[6]||"",!0),this.m=Ts(_[7]||"")):(this.h=!1,this.i=new Br(null,this.h))}Ti.prototype.toString=function(){var h=[],_=this.j;_&&h.push(ar(_,ec,!0),":");var E=this.g;return(E||_=="file")&&(h.push("//"),(_=this.o)&&h.push(ar(_,ec,!0),"@"),h.push(encodeURIComponent(String(E)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),E=this.s,E!=null&&h.push(":",String(E))),(E=this.l)&&(this.g&&E.charAt(0)!="/"&&h.push("/"),h.push(ar(E,E.charAt(0)=="/"?tc:Md,!0))),(E=this.i.toString())&&h.push("?",E),(E=this.m)&&h.push("#",ar(E,lg)),h.join("")};function At(h){return new Ti(h)}function Es(h,_,E){h.j=E?Ts(_,!0):_,h.j&&(h.j=h.j.replace(/:$/,""))}function Da(h,_){if(_){if(_=Number(_),isNaN(_)||0>_)throw Error("Bad port number "+_);h.s=_}else h.s=null}function Yo(h,_,E){_ instanceof Br?(h.i=_,nc(h.i,h.h)):(E||(_=ar(_,og)),h.i=new Br(_,h.h))}function Qe(h,_,E){h.i.set(_,E)}function Pa(h){return Qe(h,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),h}function Ts(h,_){return h?_?decodeURI(h.replace(/%25/g,"%2525")):decodeURIComponent(h):""}function ar(h,_,E){return typeof h=="string"?(h=encodeURI(h).replace(_,ag),E&&(h=h.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h):null}function ag(h){return h=h.charCodeAt(0),"%"+(h>>4&15).toString(16)+(h&15).toString(16)}var ec=/[#\/\?@]/g,Md=/[#\?:]/g,tc=/[#\?]/g,og=/[#\?@]/g,lg=/#/g;function Br(h,_){this.h=this.g=null,this.i=h||null,this.j=!!_}function or(h){h.g||(h.g=new Map,h.h=0,h.i&&Wo(h.i,function(_,E){h.add(decodeURIComponent(_.replace(/\+/g," ")),E)}))}n=Br.prototype,n.add=function(h,_){or(this),this.i=null,h=Ii(this,h);var E=this.g.get(h);return E||this.g.set(h,E=[]),E.push(_),this.h+=1,this};function Xo(h,_){or(h),_=Ii(h,_),h.g.has(_)&&(h.i=null,h.h-=h.g.get(_).length,h.g.delete(_))}function wi(h,_){return or(h),_=Ii(h,_),h.g.has(_)}n.forEach=function(h,_){or(this),this.g.forEach(function(E,I){E.forEach(function(q){h.call(_,q,I,this)},this)},this)},n.na=function(){or(this);const h=Array.from(this.g.values()),_=Array.from(this.g.keys()),E=[];for(let I=0;I<_.length;I++){const q=h[I];for(let Q=0;Q<q.length;Q++)E.push(_[I])}return E},n.V=function(h){or(this);let _=[];if(typeof h=="string")wi(this,h)&&(_=_.concat(this.g.get(Ii(this,h))));else{h=Array.from(this.g.values());for(let E=0;E<h.length;E++)_=_.concat(h[E])}return _},n.set=function(h,_){return or(this),this.i=null,h=Ii(this,h),wi(this,h)&&(this.h-=this.g.get(h).length),this.g.set(h,[_]),this.h+=1,this},n.get=function(h,_){return h?(h=this.V(h),0<h.length?String(h[0]):_):_};function bi(h,_,E){Xo(h,_),0<E.length&&(h.i=null,h.g.set(Ii(h,_),U(E)),h.h+=E.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const h=[],_=Array.from(this.g.keys());for(var E=0;E<_.length;E++){var I=_[E];const Q=encodeURIComponent(String(I)),ue=this.V(I);for(I=0;I<ue.length;I++){var q=Q;ue[I]!==""&&(q+="="+encodeURIComponent(String(ue[I]))),h.push(q)}}return this.i=h.join("&")};function Ii(h,_){return _=String(_),h.j&&(_=_.toLowerCase()),_}function nc(h,_){_&&!h.j&&(or(h),h.i=null,h.g.forEach(function(E,I){var q=I.toLowerCase();I!=q&&(Xo(this,I),bi(this,q,E))},h)),h.j=_}function Ld(h,_){const E=new fs;if(d.Image){const I=new Image;I.onload=S(lr,E,"TestLoadImage: loaded",!0,_,I),I.onerror=S(lr,E,"TestLoadImage: error",!1,_,I),I.onabort=S(lr,E,"TestLoadImage: abort",!1,_,I),I.ontimeout=S(lr,E,"TestLoadImage: timeout",!1,_,I),d.setTimeout(function(){I.ontimeout&&I.ontimeout()},1e4),I.src=h}else _(!1)}function xa(h,_){const E=new fs,I=new AbortController,q=setTimeout(()=>{I.abort(),lr(E,"TestPingServer: timeout",!1,_)},1e4);fetch(h,{signal:I.signal}).then(Q=>{clearTimeout(q),Q.ok?lr(E,"TestPingServer: ok",!0,_):lr(E,"TestPingServer: server error",!1,_)}).catch(()=>{clearTimeout(q),lr(E,"TestPingServer: error",!1,_)})}function lr(h,_,E,I,q){try{q&&(q.onload=null,q.onerror=null,q.onabort=null,q.ontimeout=null),I(E)}catch{}}function Na(){this.g=new Rn}function zr(h,_,E){const I=E||"";try{Ca(h,function(q,Q){let ue=q;m(q)&&(ue=$u(q)),_.push(I+Q+"="+encodeURIComponent(ue))})}catch(q){throw _.push(I+"type="+encodeURIComponent("_badmap")),q}}function ws(h){this.l=h.Ub||null,this.j=h.eb||!1}P(ws,Ku),ws.prototype.g=function(){return new Ai(this.l,this.j)},ws.prototype.i=function(h){return function(){return h}}({});function Ai(h,_){Gt.call(this),this.D=h,this.o=_,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(Ai,Gt),n=Ai.prototype,n.open=function(h,_){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=h,this.A=_,this.readyState=1,qr(this)},n.send=function(h){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const _={headers:this.u,method:this.B,credentials:this.m,cache:void 0};h&&(_.body=h),(this.D||d).fetch(new Request(this.A,_)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Fr(this)),this.readyState=0},n.Sa=function(h){if(this.g&&(this.l=h,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=h.headers,this.readyState=2,qr(this)),this.g&&(this.readyState=3,qr(this),this.g)))if(this.responseType==="arraybuffer")h.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in h){if(this.j=h.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;rc(this)}else h.text().then(this.Ra.bind(this),this.ga.bind(this))};function rc(h){h.j.read().then(h.Pa.bind(h)).catch(h.ga.bind(h))}n.Pa=function(h){if(this.g){if(this.o&&h.value)this.response.push(h.value);else if(!this.o){var _=h.value?h.value:new Uint8Array(0);(_=this.v.decode(_,{stream:!h.done}))&&(this.response=this.responseText+=_)}h.done?Fr(this):qr(this),this.readyState==3&&rc(this)}},n.Ra=function(h){this.g&&(this.response=this.responseText=h,Fr(this))},n.Qa=function(h){this.g&&(this.response=h,Fr(this))},n.ga=function(){this.g&&Fr(this)};function Fr(h){h.readyState=4,h.l=null,h.j=null,h.v=null,qr(h)}n.setRequestHeader=function(h,_){this.u.append(h,_)},n.getResponseHeader=function(h){return this.h&&this.h.get(h.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const h=[],_=this.h.entries();for(var E=_.next();!E.done;)E=E.value,h.push(E[0]+": "+E[1]),E=_.next();return h.join(`\r
`)};function qr(h){h.onreadystatechange&&h.onreadystatechange.call(h)}Object.defineProperty(Ai.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(h){this.m=h?"include":"same-origin"}});function ic(h){let _="";return le(h,function(E,I){_+=I,_+=":",_+=E,_+=`\r
`}),_}function nn(h,_,E){e:{for(I in E){var I=!1;break e}I=!0}I||(E=ic(E),typeof h=="string"?E!=null&&encodeURIComponent(String(E)):Qe(h,_,E))}function Je(h){Gt.call(this),this.headers=new Map,this.o=h||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(Je,Gt);var Zo=/^https?$/i,Oa=["POST","PUT"];n=Je.prototype,n.Ha=function(h){this.J=h},n.ea=function(h,_,E,I){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+h);_=_?_.toUpperCase():"GET",this.D=h,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Sa.g(),this.v=this.o?Dd(this.o):Dd(Sa),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(_,String(h),!0),this.B=!1}catch(Q){Ud(this,Q);return}if(h=E||"",E=new Map(this.headers),I)if(Object.getPrototypeOf(I)===Object.prototype)for(var q in I)E.set(q,I[q]);else if(typeof I.keys=="function"&&typeof I.get=="function")for(const Q of I.keys())E.set(Q,I.get(Q));else throw Error("Unknown input type for opt_headers: "+String(I));I=Array.from(E.keys()).find(Q=>Q.toLowerCase()=="content-type"),q=d.FormData&&h instanceof d.FormData,!(0<=Array.prototype.indexOf.call(Oa,_,void 0))||I||q||E.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[Q,ue]of E)this.g.setRequestHeader(Q,ue);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ka(this),this.u=!0,this.g.send(h),this.u=!1}catch(Q){Ud(this,Q)}};function Ud(h,_){h.h=!1,h.g&&(h.j=!0,h.g.abort(),h.j=!1),h.l=_,h.m=5,Jo(h),jr(h)}function Jo(h){h.A||(h.A=!0,en(h,"complete"),en(h,"error"))}n.abort=function(h){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=h||7,en(this,"complete"),en(this,"abort"),jr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),jr(this,!0)),Je.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?el(this):this.bb())},n.bb=function(){el(this)};function el(h){if(h.h&&typeof u<"u"&&(!h.v[1]||ur(h)!=4||h.Z()!=2)){if(h.u&&ur(h)==4)Cd(h.Ea,0,h);else if(en(h,"readystatechange"),ur(h)==4){h.h=!1;try{const ue=h.Z();e:switch(ue){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var _=!0;break e;default:_=!1}var E;if(!(E=_)){var I;if(I=ue===0){var q=String(h.D).match(Ju)[1]||null;!q&&d.self&&d.self.location&&(q=d.self.location.protocol.slice(0,-1)),I=!Zo.test(q?q.toLowerCase():"")}E=I}if(E)en(h,"complete"),en(h,"success");else{h.m=6;try{var Q=2<ur(h)?h.g.statusText:""}catch{Q=""}h.l=Q+" ["+h.Z()+"]",Jo(h)}}finally{jr(h)}}}}function jr(h,_){if(h.g){ka(h);const E=h.g,I=h.v[0]?()=>{}:null;h.g=null,h.v=null,_||en(h,"ready");try{E.onreadystatechange=I}catch{}}}function ka(h){h.I&&(d.clearTimeout(h.I),h.I=null)}n.isActive=function(){return!!this.g};function ur(h){return h.g?h.g.readyState:0}n.Z=function(){try{return 2<ur(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(h){if(this.g){var _=this.g.responseText;return h&&_.indexOf(h)==0&&(_=_.substring(h.length)),Vr(_)}};function Bd(h){try{if(!h.g)return null;if("response"in h.g)return h.g.response;switch(h.H){case"":case"text":return h.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in h.g)return h.g.mozResponseArrayBuffer}return null}catch{return null}}function ug(h){const _={};h=(h.g&&2<=ur(h)&&h.g.getAllResponseHeaders()||"").split(`\r
`);for(let I=0;I<h.length;I++){if(W(h[I]))continue;var E=V(h[I]);const q=E[0];if(E=E[1],typeof E!="string")continue;E=E.trim();const Q=_[q]||[];_[q]=Q,Q.push(E)}D(_,function(I){return I.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Va(h,_,E){return E&&E.internalChannelParams&&E.internalChannelParams[h]||_}function tl(h){this.Aa=0,this.i=[],this.j=new fs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Va("failFast",!1,h),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Va("baseRetryDelayMs",5e3,h),this.cb=Va("retryDelaySeedMs",1e4,h),this.Wa=Va("forwardChannelMaxRetries",2,h),this.wa=Va("forwardChannelRequestTimeoutMs",2e4,h),this.pa=h&&h.xmlHttpFactory||void 0,this.Xa=h&&h.Tb||void 0,this.Ca=h&&h.useFetchStreams||!1,this.L=void 0,this.J=h&&h.supportsCrossDomainXhr||!1,this.K="",this.h=new Xu(h&&h.concurrentRequestLimit),this.Da=new Na,this.P=h&&h.fastHandshake||!1,this.O=h&&h.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=h&&h.Rb||!1,h&&h.xa&&this.j.xa(),h&&h.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&h&&h.detectBufferingProxy||!1,this.ja=void 0,h&&h.longPollingTimeout&&0<h.longPollingTimeout&&(this.ja=h.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=tl.prototype,n.la=8,n.G=1,n.connect=function(h,_,E,I){Ot(0),this.W=h,this.H=_||{},E&&I!==void 0&&(this.H.OSID=E,this.H.OAID=I),this.F=this.X,this.I=$d(this,null,this.W),rl(this)};function sc(h){if(zd(h),h.G==3){var _=h.U++,E=At(h.I);if(Qe(E,"SID",h.K),Qe(E,"RID",_),Qe(E,"TYPE","terminate"),Ma(h,E),_=new Ur(h,h.j,_),_.L=2,_.v=Pa(At(E)),E=!1,d.navigator&&d.navigator.sendBeacon)try{E=d.navigator.sendBeacon(_.v.toString(),"")}catch{}!E&&d.Image&&(new Image().src=_.v,E=!0),E||(_.g=Kd(_.j,null),_.g.ea(_.v)),_.F=Date.now(),_t(_)}Gd(h)}function nl(h){h.g&&(La(h),h.g.cancel(),h.g=null)}function zd(h){nl(h),h.u&&(d.clearTimeout(h.u),h.u=null),il(h),h.h.cancel(),h.s&&(typeof h.s=="number"&&d.clearTimeout(h.s),h.s=null)}function rl(h){if(!Zu(h.h)&&!h.s){h.s=!0;var _=h.Ga;be||O(),Te||(be(),Te=!0),Oe.add(_,h),h.B=0}}function cg(h,_){return kd(h.h)>=h.h.j-(h.s?1:0)?!1:h.s?(h.i=_.D.concat(h.i),!0):h.G==1||h.G==2||h.B>=(h.Va?0:h.Wa)?!1:(h.s=ds(w(h.Ga,h,_),lc(h,h.B)),h.B++,!0)}n.Ga=function(h){if(this.s)if(this.s=null,this.G==1){if(!h){this.U=Math.floor(1e5*Math.random()),h=this.U++;const q=new Ur(this,this.j,h);let Q=this.o;if(this.S&&(Q?(Q=R(Q),x(Q,this.S)):Q=this.S),this.m!==null||this.O||(q.H=Q,Q=null),this.P)e:{for(var _=0,E=0;E<this.i.length;E++){t:{var I=this.i[E];if("__data__"in I.map&&(I=I.map.__data__,typeof I=="string")){I=I.length;break t}I=void 0}if(I===void 0)break;if(_+=I,4096<_){_=E;break e}if(_===4096||E===this.i.length-1){_=E+1;break e}}_=1e3}else _=1e3;_=Fd(this,q,_),E=At(this.I),Qe(E,"RID",h),Qe(E,"CVER",22),this.D&&Qe(E,"X-HTTP-Session-Id",this.D),Ma(this,E),Q&&(this.O?_="headers="+encodeURIComponent(String(ic(Q)))+"&"+_:this.m&&nn(E,this.m,Q)),vs(this.h,q),this.Ua&&Qe(E,"TYPE","init"),this.P?(Qe(E,"$req",_),Qe(E,"SID","null"),q.T=!0,Ar(q,E,null)):Ar(q,E,_),this.G=2}}else this.G==3&&(h?ac(this,h):this.i.length==0||Zu(this.h)||ac(this))};function ac(h,_){var E;_?E=_.l:E=h.U++;const I=At(h.I);Qe(I,"SID",h.K),Qe(I,"RID",E),Qe(I,"AID",h.T),Ma(h,I),h.m&&h.o&&nn(I,h.m,h.o),E=new Ur(h,h.j,E,h.B+1),h.m===null&&(E.H=h.o),_&&(h.i=_.D.concat(h.i)),_=Fd(h,E,1e3),E.I=Math.round(.5*h.wa)+Math.round(.5*h.wa*Math.random()),vs(h.h,E),Ar(E,I,_)}function Ma(h,_){h.H&&le(h.H,function(E,I){Qe(_,I,E)}),h.l&&Ca({},function(E,I){Qe(_,I,E)})}function Fd(h,_,E){E=Math.min(h.i.length,E);var I=h.l?w(h.l.Na,h.l,h):null;e:{var q=h.i;let Q=-1;for(;;){const ue=["count="+E];Q==-1?0<E?(Q=q[0].g,ue.push("ofs="+Q)):Q=0:ue.push("ofs="+Q);let je=!0;for(let Kt=0;Kt<E;Kt++){let He=q[Kt].g;const rn=q[Kt].map;if(He-=Q,0>He)Q=Math.max(0,q[Kt].g-100),je=!1;else try{zr(rn,ue,"req"+He+"_")}catch{I&&I(rn)}}if(je){I=ue.join("&");break e}}}return h=h.i.splice(0,E),_.D=h,I}function qd(h){if(!h.g&&!h.u){h.Y=1;var _=h.Fa;be||O(),Te||(be(),Te=!0),Oe.add(_,h),h.v=0}}function oc(h){return h.g||h.u||3<=h.v?!1:(h.Y++,h.u=ds(w(h.Fa,h),lc(h,h.v)),h.v++,!0)}n.Fa=function(){if(this.u=null,jd(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var h=2*this.R;this.j.info("BP detection timer enabled: "+h),this.A=ds(w(this.ab,this),h)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ot(10),nl(this),jd(this))};function La(h){h.A!=null&&(d.clearTimeout(h.A),h.A=null)}function jd(h){h.g=new Ur(h,h.j,"rpc",h.Y),h.m===null&&(h.g.H=h.o),h.g.O=0;var _=At(h.qa);Qe(_,"RID","rpc"),Qe(_,"SID",h.K),Qe(_,"AID",h.T),Qe(_,"CI",h.F?"0":"1"),!h.F&&h.ja&&Qe(_,"TO",h.ja),Qe(_,"TYPE","xmlhttp"),Ma(h,_),h.m&&h.o&&nn(_,h.m,h.o),h.L&&(h.g.I=h.L);var E=h.g;h=h.ia,E.L=1,E.v=Pa(At(_)),E.m=null,E.P=!0,Ei(E,h)}n.Za=function(){this.C!=null&&(this.C=null,nl(this),oc(this),Ot(19))};function il(h){h.C!=null&&(d.clearTimeout(h.C),h.C=null)}function Hd(h,_){var E=null;if(h.g==_){il(h),La(h),h.g=null;var I=2}else if(ys(h.h,_))E=_.D,sr(h.h,_),I=1;else return;if(h.G!=0){if(_.o)if(I==1){E=_.m?_.m.length:0,_=Date.now()-_.F;var q=h.B;I=Go(),en(I,new xd(I,E)),rl(h)}else qd(h);else if(q=_.s,q==3||q==0&&0<_.X||!(I==1&&cg(h,_)||I==2&&oc(h)))switch(E&&0<E.length&&(_=h.h,_.i=_.i.concat(E)),q){case 1:Si(h,5);break;case 4:Si(h,10);break;case 3:Si(h,6);break;default:Si(h,2)}}}function lc(h,_){let E=h.Ta+Math.floor(Math.random()*h.cb);return h.isActive()||(E*=2),E*_}function Si(h,_){if(h.j.info("Error code "+_),_==2){var E=w(h.fb,h),I=h.Xa;const q=!I;I=new Ti(I||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||Es(I,"https"),Pa(I),q?Ld(I.toString(),E):xa(I.toString(),E)}else Ot(2);h.G=0,h.l&&h.l.sa(_),Gd(h),zd(h)}n.fb=function(h){h?(this.j.info("Successfully pinged google.com"),Ot(2)):(this.j.info("Failed to ping google.com"),Ot(1))};function Gd(h){if(h.G=0,h.ka=[],h.l){const _=Cn(h.h);(_.length!=0||h.i.length!=0)&&(L(h.ka,_),L(h.ka,h.i),h.h.i.length=0,U(h.i),h.i.length=0),h.l.ra()}}function $d(h,_,E){var I=E instanceof Ti?At(E):new Ti(E);if(I.g!="")_&&(I.g=_+"."+I.g),Da(I,I.s);else{var q=d.location;I=q.protocol,_=_?_+"."+q.hostname:q.hostname,q=+q.port;var Q=new Ti(null);I&&Es(Q,I),_&&(Q.g=_),q&&Da(Q,q),E&&(Q.l=E),I=Q}return E=h.D,_=h.ya,E&&_&&Qe(I,E,_),Qe(I,"VER",h.la),Ma(h,I),I}function Kd(h,_,E){if(_&&!h.J)throw Error("Can't create secondary domain capable XhrIo object.");return _=h.Ca&&!h.pa?new Je(new ws({eb:E})):new Je(h.pa),_.Ha(h.J),_}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Qd(){}n=Qd.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function sl(){}sl.prototype.g=function(h,_){return new Dn(h,_)};function Dn(h,_){Gt.call(this),this.g=new tl(_),this.l=h,this.h=_&&_.messageUrlParams||null,h=_&&_.messageHeaders||null,_&&_.clientProtocolHeaderRequired&&(h?h["X-Client-Protocol"]="webchannel":h={"X-Client-Protocol":"webchannel"}),this.g.o=h,h=_&&_.initMessageHeaders||null,_&&_.messageContentType&&(h?h["X-WebChannel-Content-Type"]=_.messageContentType:h={"X-WebChannel-Content-Type":_.messageContentType}),_&&_.va&&(h?h["X-WebChannel-Client-Profile"]=_.va:h={"X-WebChannel-Client-Profile":_.va}),this.g.S=h,(h=_&&_.Sb)&&!W(h)&&(this.g.m=h),this.v=_&&_.supportsCrossDomainXhr||!1,this.u=_&&_.sendRawJson||!1,(_=_&&_.httpSessionIdParam)&&!W(_)&&(this.g.D=_,h=this.h,h!==null&&_ in h&&(h=this.h,_ in h&&delete h[_])),this.j=new Hr(this)}P(Dn,Gt),Dn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Dn.prototype.close=function(){sc(this.g)},Dn.prototype.o=function(h){var _=this.g;if(typeof h=="string"){var E={};E.__data__=h,h=E}else this.u&&(E={},E.__data__=$u(h),h=E);_.i.push(new ig(_.Ya++,h)),_.G==3&&rl(_)},Dn.prototype.N=function(){this.g.l=null,delete this.j,sc(this.g),delete this.g,Dn.aa.N.call(this)};function Wd(h){us.call(this),h.__headers__&&(this.headers=h.__headers__,this.statusCode=h.__status__,delete h.__headers__,delete h.__status__);var _=h.__sm__;if(_){e:{for(const E in _){h=E;break e}h=void 0}(this.i=h)&&(h=this.i,_=_!==null&&h in _?_[h]:void 0),this.data=_}else this.data=h}P(Wd,us);function Yd(){Ir.call(this),this.status=1}P(Yd,Ir);function Hr(h){this.g=h}P(Hr,Qd),Hr.prototype.ua=function(){en(this.g,"a")},Hr.prototype.ta=function(h){en(this.g,new Wd(h))},Hr.prototype.sa=function(h){en(this.g,new Yd)},Hr.prototype.ra=function(){en(this.g,"b")},sl.prototype.createWebChannel=sl.prototype.g,Dn.prototype.send=Dn.prototype.o,Dn.prototype.open=Dn.prototype.m,Dn.prototype.close=Dn.prototype.close,RC=function(){return new sl},SC=function(){return Go()},AC=ir,Jy={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},$t.NO_ERROR=0,$t.TIMEOUT=8,$t.HTTP_ERROR=6,yp=$t,vi.COMPLETE="complete",IC=vi,Pd.EventType=Mr,Mr.OPEN="a",Mr.CLOSE="b",Mr.ERROR="c",Mr.MESSAGE="d",Gt.prototype.listen=Gt.prototype.K,dh=Pd,Je.prototype.listenOnce=Je.prototype.L,Je.prototype.getLastError=Je.prototype.Ka,Je.prototype.getLastErrorCode=Je.prototype.Ba,Je.prototype.getStatus=Je.prototype.Z,Je.prototype.getResponseJson=Je.prototype.Oa,Je.prototype.getResponseText=Je.prototype.oa,Je.prototype.send=Je.prototype.ea,Je.prototype.setWithCredentials=Je.prototype.Ha,bC=Je}).apply(typeof Jf<"u"?Jf:typeof self<"u"?self:typeof window<"u"?window:{});const zI="@firebase/firestore",FI="4.7.10";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}cn.UNAUTHENTICATED=new cn(null),cn.GOOGLE_CREDENTIALS=new cn("google-credentials-uid"),cn.FIRST_PARTY=new cn("first-party-uid"),cn.MOCK_USER=new cn("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vu="11.5.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const la=new _m("@firebase/firestore");function zl(){return la.logLevel}function h4(n){la.setLogLevel(n)}function ne(n,...e){if(la.logLevel<=Be.DEBUG){const t=e.map(gE);la.debug(`Firestore (${Vu}): ${n}`,...t)}}function Vt(n,...e){if(la.logLevel<=Be.ERROR){const t=e.map(gE);la.error(`Firestore (${Vu}): ${n}`,...t)}}function di(n,...e){if(la.logLevel<=Be.WARN){const t=e.map(gE);la.warn(`Firestore (${Vu}): ${n}`,...t)}}function gE(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(n="Unexpected state"){const e=`FIRESTORE (${Vu}) INTERNAL ASSERTION FAILED: `+n;throw Vt(e),new Error(e)}function ye(n,e){n||me()}function d4(n,e){n||me()}function de(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ee extends kn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CC{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class f4{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(cn.UNAUTHENTICATED))}shutdown(){}}class p4{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class m4{constructor(e){this.t=e,this.currentUser=cn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ye(this.o===void 0);let r=this.i;const a=p=>this.i!==r?(r=this.i,t(p)):Promise.resolve();let o=new yn;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new yn,e.enqueueRetryable(()=>a(this.currentUser))};const u=()=>{const p=o;e.enqueueRetryable(async()=>{await p.promise,await a(this.currentUser)})},d=p=>{ne("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit(p=>d(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?d(p):(ne("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new yn)}},0),u()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(ne("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ye(typeof r.accessToken=="string"),new CC(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ye(e===null||typeof e=="string"),new cn(e)}}class g4{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=cn.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class _4{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new g4(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(cn.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class qI{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class y4{constructor(e,t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,ft(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,t){ye(this.o===void 0);const r=o=>{o.error!=null&&ne("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const u=o.token!==this.R;return this.R=o.token,ne("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?t(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const a=o=>{ne("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>a(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?a(o):ne("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new qI(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(ye(typeof t.token=="string"),this.R=t.token,new qI(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v4(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _E(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DC{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const a=v4(40);for(let o=0;o<a.length;++o)r.length<20&&a[o]<t&&(r+=e.charAt(a[o]%62))}return r}}function Se(n,e){return n<e?-1:n>e?1:0}function ev(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),a=e.codePointAt(t);if(r!==a){if(r<128&&a<128)return Se(r,a);{const o=_E(),u=E4(o.encode(jI(n,t)),o.encode(jI(e,t)));return u!==0?u:Se(r,a)}}t+=r>65535?2:1}return Se(n.length,e.length)}function jI(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function E4(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return Se(n[t],e[t]);return Se(n.length,e.length)}function lu(n,e,t){return n.length===e.length&&n.every((r,a)=>t(r,e[a]))}function PC(n){return n+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HI=-62135596800,GI=1e6;class gt{static now(){return gt.fromMillis(Date.now())}static fromDate(e){return gt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*GI);return new gt(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ee(K.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ee(K.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<HI)throw new ee(K.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ee(K.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/GI}_compareTo(e){return this.seconds===e.seconds?Se(this.nanoseconds,e.nanoseconds):Se(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-HI;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{static fromTimestamp(e){return new Ee(e)}static min(){return new Ee(new gt(0,0))}static max(){return new Ee(new gt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $I="__name__";class Xr{constructor(e,t,r){t===void 0?t=0:t>e.length&&me(),r===void 0?r=e.length-t:r>e.length-t&&me(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Xr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Xr?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let a=0;a<r;a++){const o=Xr.compareSegments(e.get(a),t.get(a));if(o!==0)return o}return Se(e.length,t.length)}static compareSegments(e,t){const r=Xr.isNumericId(e),a=Xr.isNumericId(t);return r&&!a?-1:!r&&a?1:r&&a?Xr.extractNumericId(e).compare(Xr.extractNumericId(t)):ev(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ta.fromString(e.substring(4,e.length-2))}}class ze extends Xr{construct(e,t,r){return new ze(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new ee(K.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(a=>a.length>0))}return new ze(t)}static emptyPath(){return new ze([])}}const T4=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class pt extends Xr{construct(e,t,r){return new pt(e,t,r)}static isValidIdentifier(e){return T4.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),pt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===$I}static keyField(){return new pt([$I])}static fromServerFormat(e){const t=[];let r="",a=0;const o=()=>{if(r.length===0)throw new ee(K.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let u=!1;for(;a<e.length;){const d=e[a];if(d==="\\"){if(a+1===e.length)throw new ee(K.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[a+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new ee(K.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=p,a+=2}else d==="`"?(u=!u,a++):d!=="."||u?(r+=d,a++):(o(),a++)}if(o(),u)throw new ee(K.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new pt(t)}static emptyPath(){return new pt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e){this.path=e}static fromPath(e){return new ce(ze.fromString(e))}static fromName(e){return new ce(ze.fromString(e).popFirst(5))}static empty(){return new ce(ze.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ze.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ze.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ce(new ze(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uu=-1;class qp{constructor(e,t,r,a){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=a}}function tv(n){return n.fields.find(e=>e.kind===2)}function io(n){return n.fields.filter(e=>e.kind!==2)}qp.UNKNOWN_ID=-1;class vp{constructor(e,t){this.fieldPath=e,this.kind=t}}class Bh{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Bh(0,nr.min())}}function xC(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,a=Ee.fromTimestamp(r===1e9?new gt(t+1,0):new gt(t,r));return new nr(a,ce.empty(),e)}function NC(n){return new nr(n.readTime,n.key,uu)}class nr{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new nr(Ee.min(),ce.empty(),uu)}static max(){return new nr(Ee.max(),ce.empty(),uu)}}function yE(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=ce.comparator(n.documentKey,e.documentKey),t!==0?t:Se(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class kC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function va(n){if(n.code!==K.FAILED_PRECONDITION||n.message!==OC)throw n;ne("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&me(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new j((r,a)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,a)},this.catchCallback=o=>{this.wrapFailure(t,o).next(r,a)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof j?t:j.resolve(t)}catch(t){return j.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):j.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):j.reject(t)}static resolve(e){return new j((t,r)=>{t(e)})}static reject(e){return new j((t,r)=>{r(e)})}static waitFor(e){return new j((t,r)=>{let a=0,o=0,u=!1;e.forEach(d=>{++a,d.next(()=>{++o,u&&o===a&&t()},p=>r(p))}),u=!0,o===a&&t()})}static or(e){let t=j.resolve(!1);for(const r of e)t=t.next(a=>a?j.resolve(a):r());return t}static forEach(e,t){const r=[];return e.forEach((a,o)=>{r.push(t.call(this,a,o))}),this.waitFor(r)}static mapArray(e,t){return new j((r,a)=>{const o=e.length,u=new Array(o);let d=0;for(let p=0;p<o;p++){const m=p;t(e[m]).next(y=>{u[m]=y,++d,d===o&&r(u)},y=>a(y))}})}static doWhile(e,t){return new j((r,a)=>{const o=()=>{e()===!0?t().next(()=>{o()},a):r()};o()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jn="SimpleDb";class Dm{static open(e,t,r,a){try{return new Dm(t,e.transaction(a,r))}catch(o){throw new wh(t,o)}}constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.m=new yn,this.transaction.oncomplete=()=>{this.m.resolve()},this.transaction.onabort=()=>{t.error?this.m.reject(new wh(e,t.error)):this.m.resolve()},this.transaction.onerror=r=>{const a=vE(r.target.error);this.m.reject(new wh(e,a))}}get p(){return this.m.promise}abort(e){e&&this.m.reject(e),this.aborted||(ne(Jn,"Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}S(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new b4(t)}}class oi{static delete(e){return ne(Jn,"Removing database:",e),ao(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!Nh())return!1;if(oi.v())return!0;const e=wt(),t=oi.C(e),r=0<t&&t<10,a=VC(e),o=0<a&&a<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||o)}static v(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.F)==="YES"}static M(e,t){return e.store(t)}static C(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}constructor(e,t,r){this.name=e,this.version=t,this.O=r,oi.C(wt())===12.2&&Vt("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async N(e){return this.db||(ne(Jn,"Opening database:",this.name),this.db=await new Promise((t,r)=>{const a=indexedDB.open(this.name,this.version);a.onsuccess=o=>{const u=o.target.result;t(u)},a.onblocked=()=>{r(new wh(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},a.onerror=o=>{const u=o.target.error;u.name==="VersionError"?r(new ee(K.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):u.name==="InvalidStateError"?r(new ee(K.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+u)):r(new wh(e,u))},a.onupgradeneeded=o=>{ne(Jn,'Database "'+this.name+'" requires upgrade from version:',o.oldVersion);const u=o.target.result;this.O.B(u,a.transaction,o.oldVersion,this.version).next(()=>{ne(Jn,"Database upgrade to version "+this.version+" complete")})}})),this.L&&(this.db.onversionchange=t=>this.L(t)),this.db}k(e){this.L=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,r,a){const o=t==="readonly";let u=0;for(;;){++u;try{this.db=await this.N(e);const d=Dm.open(this.db,e,o?"readonly":"readwrite",r),p=a(d).next(m=>(d.S(),m)).catch(m=>(d.abort(m),j.reject(m))).toPromise();return p.catch(()=>{}),await d.p,p}catch(d){const p=d,m=p.name!=="FirebaseError"&&u<3;if(ne(Jn,"Transaction failed with error:",p.message,"Retrying:",m),this.close(),!m)return Promise.reject(p)}}}close(){this.db&&this.db.close(),this.db=void 0}}function VC(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class w4{constructor(e){this.q=e,this.$=!1,this.U=null}get isDone(){return this.$}get K(){return this.U}set cursor(e){this.q=e}done(){this.$=!0}W(e){this.U=e}delete(){return ao(this.q.delete())}}class wh extends ee{constructor(e,t){super(K.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Ea(n){return n.name==="IndexedDbTransactionError"}class b4{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(ne(Jn,"PUT",this.store.name,e,t),r=this.store.put(t,e)):(ne(Jn,"PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),ao(r)}add(e){return ne(Jn,"ADD",this.store.name,e,e),ao(this.store.add(e))}get(e){return ao(this.store.get(e)).next(t=>(t===void 0&&(t=null),ne(Jn,"GET",this.store.name,e,t),t))}delete(e){return ne(Jn,"DELETE",this.store.name,e),ao(this.store.delete(e))}count(){return ne(Jn,"COUNT",this.store.name),ao(this.store.count())}G(e,t){const r=this.options(e,t),a=r.index?this.store.index(r.index):this.store;if(typeof a.getAll=="function"){const o=a.getAll(r.range);return new j((u,d)=>{o.onerror=p=>{d(p.target.error)},o.onsuccess=p=>{u(p.target.result)}})}{const o=this.cursor(r),u=[];return this.j(o,(d,p)=>{u.push(p)}).next(()=>u)}}H(e,t){const r=this.store.getAll(e,t===null?void 0:t);return new j((a,o)=>{r.onerror=u=>{o(u.target.error)},r.onsuccess=u=>{a(u.target.result)}})}J(e,t){ne(Jn,"DELETE ALL",this.store.name);const r=this.options(e,t);r.Y=!1;const a=this.cursor(r);return this.j(a,(o,u,d)=>d.delete())}Z(e,t){let r;t?r=e:(r={},t=e);const a=this.cursor(r);return this.j(a,t)}X(e){const t=this.cursor({});return new j((r,a)=>{t.onerror=o=>{const u=vE(o.target.error);a(u)},t.onsuccess=o=>{const u=o.target.result;u?e(u.primaryKey,u.value).next(d=>{d?u.continue():r()}):r()}})}j(e,t){const r=[];return new j((a,o)=>{e.onerror=u=>{o(u.target.error)},e.onsuccess=u=>{const d=u.target.result;if(!d)return void a();const p=new w4(d),m=t(d.primaryKey,d.value,p);if(m instanceof j){const y=m.catch(v=>(p.done(),j.reject(v)));r.push(y)}p.isDone?a():p.K===null?d.continue():d.continue(p.K)}}).next(()=>j.waitFor(r))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.Y?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function ao(n){return new j((e,t)=>{n.onsuccess=r=>{const a=r.target.result;e(a)},n.onerror=r=>{const a=vE(r.target.error);t(a)}})}let KI=!1;function vE(n){const e=oi.C(wt());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new ee("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return KI||(KI=!0,setTimeout(()=>{throw r},0)),r}}return n}const bh="IndexBackfiller";class I4{constructor(e,t){this.asyncQueue=e,this.ee=t,this.task=null}start(){this.te(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}te(e){ne(bh,`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{const t=await this.ee.ne();ne(bh,`Documents written: ${t}`)}catch(t){Ea(t)?ne(bh,"Ignoring IndexedDB error during index backfill: ",t):await va(t)}await this.te(6e4)})}}class A4{constructor(e,t){this.localStore=e,this.persistence=t}async ne(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.re(t,e))}re(e,t){const r=new Set;let a=t,o=!0;return j.doWhile(()=>o===!0&&a>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(u=>{if(u!==null&&!r.has(u))return ne(bh,`Processing collection: ${u}`),this.ie(e,u,a).next(d=>{a-=d,r.add(u)});o=!1})).next(()=>t-a)}ie(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(a=>this.localStore.localDocuments.getNextDocuments(e,t,a,r).next(o=>{const u=o.changes;return this.localStore.indexManager.updateIndexEntries(e,u).next(()=>this.se(a,o)).next(d=>(ne(bh,`Updating offset: ${d}`),this.localStore.indexManager.updateCollectionGroup(e,t,d))).next(()=>u.size)}))}se(e,t){let r=e;return t.changes.forEach((a,o)=>{const u=NC(o);yE(u,r)>0&&(r=u)}),new nr(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.oe(r),this._e=r=>t.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}qn.ae=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const na=-1;function fd(n){return n==null}function zh(n){return n===0&&1/n==-1/0}function MC(n){return typeof n=="number"&&Number.isInteger(n)&&!zh(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jp="";function An(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=QI(e)),e=S4(n.get(t),e);return QI(e)}function S4(n,e){let t=e;const r=n.length;for(let a=0;a<r;a++){const o=n.charAt(a);switch(o){case"\0":t+="";break;case jp:t+="";break;default:t+=o}}return t}function QI(n){return n+jp+""}function si(n){const e=n.length;if(ye(e>=2),e===2)return ye(n.charAt(0)===jp&&n.charAt(1)===""),ze.emptyPath();const t=e-2,r=[];let a="";for(let o=0;o<e;){const u=n.indexOf(jp,o);switch((u<0||u>t)&&me(),n.charAt(u+1)){case"":const d=n.substring(o,u);let p;a.length===0?p=d:(a+=d,p=a,a=""),r.push(p);break;case"":a+=n.substring(o,u),a+="\0";break;case"":a+=n.substring(o,u+1);break;default:me()}o=u+2}return new ze(r)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const so="remoteDocuments",pd="owner",kl="owner",Fh="mutationQueues",R4="userId",Pr="mutations",WI="batchId",po="userMutationsIndex",YI=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ep(n,e){return[n,An(e)]}function LC(n,e,t){return[n,An(e),t]}const C4={},cu="documentMutations",Hp="remoteDocumentsV14",D4=["prefixPath","collectionGroup","readTime","documentId"],Tp="documentKeyIndex",P4=["prefixPath","collectionGroup","documentId"],UC="collectionGroupIndex",x4=["collectionGroup","readTime","prefixPath","documentId"],qh="remoteDocumentGlobal",nv="remoteDocumentGlobalKey",hu="targets",BC="queryTargetsIndex",N4=["canonicalId","targetId"],du="targetDocuments",O4=["targetId","path"],EE="documentTargetsIndex",k4=["path","targetId"],Gp="targetGlobalKey",To="targetGlobal",jh="collectionParents",V4=["collectionId","parent"],fu="clientMetadata",M4="clientId",Pm="bundles",L4="bundleId",xm="namedQueries",U4="name",TE="indexConfiguration",B4="indexId",rv="collectionGroupIndex",z4="collectionGroup",$p="indexState",F4=["indexId","uid"],zC="sequenceNumberIndex",q4=["uid","sequenceNumber"],Kp="indexEntries",j4=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],FC="documentKeyIndex",H4=["indexId","uid","orderedDocumentKey"],Nm="documentOverlays",G4=["userId","collectionPath","documentId"],iv="collectionPathOverlayIndex",$4=["userId","collectionPath","largestBatchId"],qC="collectionGroupOverlayIndex",K4=["userId","collectionGroup","largestBatchId"],wE="globals",Q4="name",jC=[Fh,Pr,cu,so,hu,pd,To,du,fu,qh,jh,Pm,xm],W4=[...jC,Nm],HC=[Fh,Pr,cu,Hp,hu,pd,To,du,fu,qh,jh,Pm,xm,Nm],GC=HC,bE=[...GC,TE,$p,Kp],Y4=bE,X4=[...bE,wE];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sv extends kC{constructor(e,t){super(),this.ue=e,this.currentSequenceNumber=t}}function Zt(n,e){const t=de(n);return oi.M(t.ue,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XI(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Ta(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function $C(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e,t){this.comparator=e,this.root=t||gn.EMPTY}insert(e,t){return new lt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,gn.BLACK,null,null))}remove(e){return new lt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,gn.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const a=this.comparator(e,r.key);if(a===0)return t+r.left.size;a<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ep(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ep(this.root,e,this.comparator,!1)}getReverseIterator(){return new ep(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ep(this.root,e,this.comparator,!0)}}class ep{constructor(e,t,r,a){this.isReverse=a,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=t?r(e.key,t):1,t&&a&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class gn{constructor(e,t,r,a,o){this.key=e,this.value=t,this.color=r??gn.RED,this.left=a??gn.EMPTY,this.right=o??gn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,a,o){return new gn(e??this.key,t??this.value,r??this.color,a??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let a=this;const o=r(e,a.key);return a=o<0?a.copy(null,null,null,a.left.insert(e,t,r),null):o===0?a.copy(null,t,null,null,null):a.copy(null,null,null,null,a.right.insert(e,t,r)),a.fixUp()}removeMin(){if(this.left.isEmpty())return gn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,a=this;if(t(e,a.key)<0)a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(e,t),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),t(e,a.key)===0){if(a.right.isEmpty())return gn.EMPTY;r=a.right.min(),a=a.copy(r.key,r.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(e,t))}return a.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,gn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,gn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw me();const e=this.left.check();if(e!==this.right.check())throw me();return e+(this.isRed()?0:1)}}gn.EMPTY=null,gn.RED=!0,gn.BLACK=!1;gn.EMPTY=new class{constructor(){this.size=0}get key(){throw me()}get value(){throw me()}get color(){throw me()}get left(){throw me()}get right(){throw me()}copy(e,t,r,a,o){return this}insert(e,t,r){return new gn(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e){this.comparator=e,this.data=new lt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const a=r.getNext();if(this.comparator(a.key,e[1])>=0)return;t(a.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ZI(this.data.getIterator())}getIteratorFrom(e){return new ZI(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof nt)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const a=t.getNext().key,o=r.getNext().key;if(this.comparator(a,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new nt(this.comparator);return t.data=e,t}}class ZI{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Vl(n){return n.hasNext()?n.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e){this.fields=e,e.sort(pt.comparator)}static empty(){return new jn([])}unionWith(e){let t=new nt(pt.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new jn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return lu(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KC extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z4(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(a){try{return atob(a)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new KC("Invalid base64 string: "+o):o}}(e);return new Dt(t)}static fromUint8Array(e){const t=function(a){let o="";for(let u=0;u<a.length;++u)o+=String.fromCharCode(a[u]);return o}(e);return new Dt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let a=0;a<t.length;a++)r[a]=t.charCodeAt(a);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Se(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Dt.EMPTY_BYTE_STRING=new Dt("");const J4=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Xi(n){if(ye(!!n),typeof n=="string"){let e=0;const t=J4.exec(n);if(ye(!!t),t[1]){let a=t[1];a=(a+"000000000").substr(0,9),e=Number(a)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:dt(n.seconds),nanos:dt(n.nanos)}}function dt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Zi(n){return typeof n=="string"?Dt.fromBase64String(n):Dt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QC="server_timestamp",WC="__type__",YC="__previous_value__",XC="__local_write_time__";function Om(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[WC])===null||t===void 0?void 0:t.stringValue)===QC}function km(n){const e=n.mapValue.fields[YC];return Om(e)?km(e):e}function Hh(n){const e=Xi(n.mapValue.fields[XC].timestampValue);return new gt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eB{constructor(e,t,r,a,o,u,d,p,m){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=a,this.ssl=o,this.forceLongPolling=u,this.autoDetectLongPolling=d,this.longPollingOptions=p,this.useFetchStreams=m}}const av="(default)";class ua{constructor(e,t){this.projectId=e,this.database=t||av}static empty(){return new ua("","")}get isDefaultDatabase(){return this.database===av}isEqual(e){return e instanceof ua&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IE="__type__",ZC="__max__",Xs={mapValue:{fields:{__type__:{stringValue:ZC}}}},AE="__vector__",pu="value",wp={nullValue:"NULL_VALUE"};function ca(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Om(n)?4:JC(n)?9007199254740991:Vm(n)?10:11:me()}function fi(n,e){if(n===e)return!0;const t=ca(n);if(t!==ca(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Hh(n).isEqual(Hh(e));case 3:return function(a,o){if(typeof a.timestampValue=="string"&&typeof o.timestampValue=="string"&&a.timestampValue.length===o.timestampValue.length)return a.timestampValue===o.timestampValue;const u=Xi(a.timestampValue),d=Xi(o.timestampValue);return u.seconds===d.seconds&&u.nanos===d.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(a,o){return Zi(a.bytesValue).isEqual(Zi(o.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(a,o){return dt(a.geoPointValue.latitude)===dt(o.geoPointValue.latitude)&&dt(a.geoPointValue.longitude)===dt(o.geoPointValue.longitude)}(n,e);case 2:return function(a,o){if("integerValue"in a&&"integerValue"in o)return dt(a.integerValue)===dt(o.integerValue);if("doubleValue"in a&&"doubleValue"in o){const u=dt(a.doubleValue),d=dt(o.doubleValue);return u===d?zh(u)===zh(d):isNaN(u)&&isNaN(d)}return!1}(n,e);case 9:return lu(n.arrayValue.values||[],e.arrayValue.values||[],fi);case 10:case 11:return function(a,o){const u=a.mapValue.fields||{},d=o.mapValue.fields||{};if(XI(u)!==XI(d))return!1;for(const p in u)if(u.hasOwnProperty(p)&&(d[p]===void 0||!fi(u[p],d[p])))return!1;return!0}(n,e);default:return me()}}function Gh(n,e){return(n.values||[]).find(t=>fi(t,e))!==void 0}function ha(n,e){if(n===e)return 0;const t=ca(n),r=ca(e);if(t!==r)return Se(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Se(n.booleanValue,e.booleanValue);case 2:return function(o,u){const d=dt(o.integerValue||o.doubleValue),p=dt(u.integerValue||u.doubleValue);return d<p?-1:d>p?1:d===p?0:isNaN(d)?isNaN(p)?0:-1:1}(n,e);case 3:return JI(n.timestampValue,e.timestampValue);case 4:return JI(Hh(n),Hh(e));case 5:return ev(n.stringValue,e.stringValue);case 6:return function(o,u){const d=Zi(o),p=Zi(u);return d.compareTo(p)}(n.bytesValue,e.bytesValue);case 7:return function(o,u){const d=o.split("/"),p=u.split("/");for(let m=0;m<d.length&&m<p.length;m++){const y=Se(d[m],p[m]);if(y!==0)return y}return Se(d.length,p.length)}(n.referenceValue,e.referenceValue);case 8:return function(o,u){const d=Se(dt(o.latitude),dt(u.latitude));return d!==0?d:Se(dt(o.longitude),dt(u.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return eA(n.arrayValue,e.arrayValue);case 10:return function(o,u){var d,p,m,y;const v=o.fields||{},w=u.fields||{},S=(d=v[pu])===null||d===void 0?void 0:d.arrayValue,P=(p=w[pu])===null||p===void 0?void 0:p.arrayValue,U=Se(((m=S==null?void 0:S.values)===null||m===void 0?void 0:m.length)||0,((y=P==null?void 0:P.values)===null||y===void 0?void 0:y.length)||0);return U!==0?U:eA(S,P)}(n.mapValue,e.mapValue);case 11:return function(o,u){if(o===Xs.mapValue&&u===Xs.mapValue)return 0;if(o===Xs.mapValue)return 1;if(u===Xs.mapValue)return-1;const d=o.fields||{},p=Object.keys(d),m=u.fields||{},y=Object.keys(m);p.sort(),y.sort();for(let v=0;v<p.length&&v<y.length;++v){const w=ev(p[v],y[v]);if(w!==0)return w;const S=ha(d[p[v]],m[y[v]]);if(S!==0)return S}return Se(p.length,y.length)}(n.mapValue,e.mapValue);default:throw me()}}function JI(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Se(n,e);const t=Xi(n),r=Xi(e),a=Se(t.seconds,r.seconds);return a!==0?a:Se(t.nanos,r.nanos)}function eA(n,e){const t=n.values||[],r=e.values||[];for(let a=0;a<t.length&&a<r.length;++a){const o=ha(t[a],r[a]);if(o)return o}return Se(t.length,r.length)}function mu(n){return ov(n)}function ov(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Xi(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Zi(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return ce.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",a=!0;for(const o of t.values||[])a?a=!1:r+=",",r+=ov(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let a="{",o=!0;for(const u of r)o?o=!1:a+=",",a+=`${u}:${ov(t.fields[u])}`;return a+"}"}(n.mapValue):me()}function bp(n){switch(ca(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=km(n);return e?16+bp(e):16;case 5:return 2*n.stringValue.length;case 6:return Zi(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((a,o)=>a+bp(o),0)}(n.arrayValue);case 10:case 11:return function(r){let a=0;return Ta(r.fields,(o,u)=>{a+=o.length+bp(u)}),a}(n.mapValue);default:throw me()}}function Ao(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function lv(n){return!!n&&"integerValue"in n}function $h(n){return!!n&&"arrayValue"in n}function tA(n){return!!n&&"nullValue"in n}function nA(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Ip(n){return!!n&&"mapValue"in n}function Vm(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[IE])===null||t===void 0?void 0:t.stringValue)===AE}function Ih(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Ta(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Ih(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ih(n.arrayValue.values[t]);return e}return Object.assign({},n)}function JC(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===ZC}const e1={mapValue:{fields:{[IE]:{stringValue:AE},[pu]:{arrayValue:{}}}}};function tB(n){return"nullValue"in n?wp:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?Ao(ua.empty(),ce.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?Vm(n)?e1:{mapValue:{}}:me()}function nB(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?Ao(ua.empty(),ce.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?e1:"mapValue"in n?Vm(n)?{mapValue:{}}:Xs:me()}function rA(n,e){const t=ha(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function iA(n,e){const t=ha(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(e){this.value=e}static empty(){return new _n({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Ip(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ih(t)}setAll(e){let t=pt.emptyPath(),r={},a=[];e.forEach((u,d)=>{if(!t.isImmediateParentOf(d)){const p=this.getFieldsMap(t);this.applyChanges(p,r,a),r={},a=[],t=d.popLast()}u?r[d.lastSegment()]=Ih(u):a.push(d.lastSegment())});const o=this.getFieldsMap(t);this.applyChanges(o,r,a)}delete(e){const t=this.field(e.popLast());Ip(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return fi(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let a=t.mapValue.fields[e.get(r)];Ip(a)&&a.mapValue.fields||(a={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=a),t=a}return t.mapValue.fields}applyChanges(e,t,r){Ta(t,(a,o)=>e[a]=o);for(const a of r)delete e[a]}clone(){return new _n(Ih(this.value))}}function t1(n){const e=[];return Ta(n.fields,(t,r)=>{const a=new pt([t]);if(Ip(r)){const o=t1(r.mapValue).fields;if(o.length===0)e.push(a);else for(const u of o)e.push(a.child(u))}else e.push(a)}),new jn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e,t,r,a,o,u,d){this.key=e,this.documentType=t,this.version=r,this.readTime=a,this.createTime=o,this.data=u,this.documentState=d}static newInvalidDocument(e){return new ht(e,0,Ee.min(),Ee.min(),Ee.min(),_n.empty(),0)}static newFoundDocument(e,t,r,a){return new ht(e,1,t,Ee.min(),r,a,0)}static newNoDocument(e,t){return new ht(e,2,t,Ee.min(),Ee.min(),_n.empty(),0)}static newUnknownDocument(e,t){return new ht(e,3,t,Ee.min(),Ee.min(),_n.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=_n.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=_n.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ht&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ht(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(e,t){this.position=e,this.inclusive=t}}function sA(n,e,t){let r=0;for(let a=0;a<n.position.length;a++){const o=e[a],u=n.position[a];if(o.field.isKeyField()?r=ce.comparator(ce.fromName(u.referenceValue),t.key):r=ha(u,t.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function aA(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!fi(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(e,t="asc"){this.field=e,this.dir=t}}function rB(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n1{}class Fe extends n1{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new iB(e,t,r):t==="array-contains"?new oB(e,r):t==="in"?new l1(e,r):t==="not-in"?new lB(e,r):t==="array-contains-any"?new uB(e,r):new Fe(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new sB(e,r):new aB(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(ha(t,this.value)):t!==null&&ca(this.value)===ca(t)&&this.matchesComparison(ha(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return me()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class tt extends n1{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new tt(e,t)}matches(e){return gu(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function gu(n){return n.op==="and"}function uv(n){return n.op==="or"}function SE(n){return r1(n)&&gu(n)}function r1(n){for(const e of n.filters)if(e instanceof tt)return!1;return!0}function cv(n){if(n instanceof Fe)return n.field.canonicalString()+n.op.toString()+mu(n.value);if(SE(n))return n.filters.map(e=>cv(e)).join(",");{const e=n.filters.map(t=>cv(t)).join(",");return`${n.op}(${e})`}}function i1(n,e){return n instanceof Fe?function(r,a){return a instanceof Fe&&r.op===a.op&&r.field.isEqual(a.field)&&fi(r.value,a.value)}(n,e):n instanceof tt?function(r,a){return a instanceof tt&&r.op===a.op&&r.filters.length===a.filters.length?r.filters.reduce((o,u,d)=>o&&i1(u,a.filters[d]),!0):!1}(n,e):void me()}function s1(n,e){const t=n.filters.concat(e);return tt.create(t,n.op)}function a1(n){return n instanceof Fe?function(t){return`${t.field.canonicalString()} ${t.op} ${mu(t.value)}`}(n):n instanceof tt?function(t){return t.op.toString()+" {"+t.getFilters().map(a1).join(" ,")+"}"}(n):"Filter"}class iB extends Fe{constructor(e,t,r){super(e,t,r),this.key=ce.fromName(r.referenceValue)}matches(e){const t=ce.comparator(e.key,this.key);return this.matchesComparison(t)}}class sB extends Fe{constructor(e,t){super(e,"in",t),this.keys=o1("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class aB extends Fe{constructor(e,t){super(e,"not-in",t),this.keys=o1("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function o1(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>ce.fromName(r.referenceValue))}class oB extends Fe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return $h(t)&&Gh(t.arrayValue,this.value)}}class l1 extends Fe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Gh(this.value.arrayValue,t)}}class lB extends Fe{constructor(e,t){super(e,"not-in",t)}matches(e){if(Gh(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Gh(this.value.arrayValue,t)}}class uB extends Fe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!$h(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Gh(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cB{constructor(e,t=null,r=[],a=[],o=null,u=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=a,this.limit=o,this.startAt=u,this.endAt=d,this.le=null}}function hv(n,e=null,t=[],r=[],a=null,o=null,u=null){return new cB(n,e,t,r,a,o,u)}function So(n){const e=de(n);if(e.le===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>cv(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),fd(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>mu(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>mu(r)).join(",")),e.le=t}return e.le}function md(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!rB(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!i1(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!aA(n.startAt,e.startAt)&&aA(n.endAt,e.endAt)}function Qp(n){return ce.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Wp(n,e){return n.filters.filter(t=>t instanceof Fe&&t.field.isEqual(e))}function oA(n,e,t){let r=wp,a=!0;for(const o of Wp(n,e)){let u=wp,d=!0;switch(o.op){case"<":case"<=":u=tB(o.value);break;case"==":case"in":case">=":u=o.value;break;case">":u=o.value,d=!1;break;case"!=":case"not-in":u=wp}rA({value:r,inclusive:a},{value:u,inclusive:d})<0&&(r=u,a=d)}if(t!==null){for(let o=0;o<n.orderBy.length;++o)if(n.orderBy[o].field.isEqual(e)){const u=t.position[o];rA({value:r,inclusive:a},{value:u,inclusive:t.inclusive})<0&&(r=u,a=t.inclusive);break}}return{value:r,inclusive:a}}function lA(n,e,t){let r=Xs,a=!0;for(const o of Wp(n,e)){let u=Xs,d=!0;switch(o.op){case">=":case">":u=nB(o.value),d=!1;break;case"==":case"in":case"<=":u=o.value;break;case"<":u=o.value,d=!1;break;case"!=":case"not-in":u=Xs}iA({value:r,inclusive:a},{value:u,inclusive:d})>0&&(r=u,a=d)}if(t!==null){for(let o=0;o<n.orderBy.length;++o)if(n.orderBy[o].field.isEqual(e)){const u=t.position[o];iA({value:r,inclusive:a},{value:u,inclusive:t.inclusive})>0&&(r=u,a=t.inclusive);break}}return{value:r,inclusive:a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e,t=null,r=[],a=[],o=null,u="F",d=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=a,this.limit=o,this.limitType=u,this.startAt=d,this.endAt=p,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function u1(n,e,t,r,a,o,u,d){return new ns(n,e,t,r,a,o,u,d)}function Mu(n){return new ns(n)}function uA(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function RE(n){return n.collectionGroup!==null}function Xl(n){const e=de(n);if(e.he===null){e.he=[];const t=new Set;for(const o of e.explicitOrderBy)e.he.push(o),t.add(o.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(u){let d=new nt(pt.comparator);return u.filters.forEach(p=>{p.getFlattenedFilters().forEach(m=>{m.isInequality()&&(d=d.add(m.field))})}),d})(e).forEach(o=>{t.has(o.canonicalString())||o.isKeyField()||e.he.push(new Kh(o,r))}),t.has(pt.keyField().canonicalString())||e.he.push(new Kh(pt.keyField(),r))}return e.he}function Vn(n){const e=de(n);return e.Pe||(e.Pe=hB(e,Xl(n))),e.Pe}function hB(n,e){if(n.limitType==="F")return hv(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(a=>{const o=a.dir==="desc"?"asc":"desc";return new Kh(a.field,o)});const t=n.endAt?new da(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new da(n.startAt.position,n.startAt.inclusive):null;return hv(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function dv(n,e){const t=n.filters.concat([e]);return new ns(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Yp(n,e,t){return new ns(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function gd(n,e){return md(Vn(n),Vn(e))&&n.limitType===e.limitType}function c1(n){return`${So(Vn(n))}|lt:${n.limitType}`}function Fl(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(a=>a1(a)).join(", ")}]`),fd(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(a=>function(u){return`${u.field.canonicalString()} (${u.dir})`}(a)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(a=>mu(a)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(a=>mu(a)).join(",")),`Target(${r})`}(Vn(n))}; limitType=${n.limitType})`}function _d(n,e){return e.isFoundDocument()&&function(r,a){const o=a.key.path;return r.collectionGroup!==null?a.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):ce.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,e)&&function(r,a){for(const o of Xl(r))if(!o.field.isKeyField()&&a.data.field(o.field)===null)return!1;return!0}(n,e)&&function(r,a){for(const o of r.filters)if(!o.matches(a))return!1;return!0}(n,e)&&function(r,a){return!(r.startAt&&!function(u,d,p){const m=sA(u,d,p);return u.inclusive?m<=0:m<0}(r.startAt,Xl(r),a)||r.endAt&&!function(u,d,p){const m=sA(u,d,p);return u.inclusive?m>=0:m>0}(r.endAt,Xl(r),a))}(n,e)}function h1(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function d1(n){return(e,t)=>{let r=!1;for(const a of Xl(n)){const o=dB(a,e,t);if(o!==0)return o;r=r||a.field.isKeyField()}return 0}}function dB(n,e,t){const r=n.field.isKeyField()?ce.comparator(e.key,t.key):function(o,u,d){const p=u.data.field(o),m=d.data.field(o);return p!==null&&m!==null?ha(p,m):me()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return me()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[a,o]of r)if(this.equalsFn(a,e))return o}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),a=this.inner[r];if(a===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let o=0;o<a.length;o++)if(this.equalsFn(a[o][0],e))return void(a[o]=[e,t]);a.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let a=0;a<r.length;a++)if(this.equalsFn(r[a][0],e))return r.length===1?delete this.inner[t]:r.splice(a,1),this.innerSize--,!0;return!1}forEach(e){Ta(this.inner,(t,r)=>{for(const[a,o]of r)e(a,o)})}isEmpty(){return $C(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fB=new lt(ce.comparator);function Hn(){return fB}const f1=new lt(ce.comparator);function fh(...n){let e=f1;for(const t of n)e=e.insert(t.key,t);return e}function p1(n){let e=f1;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function ai(){return Ah()}function m1(){return Ah()}function Ah(){return new rs(n=>n.toString(),(n,e)=>n.isEqual(e))}const pB=new lt(ce.comparator),mB=new nt(ce.comparator);function xe(...n){let e=mB;for(const t of n)e=e.add(t);return e}const gB=new nt(Se);function CE(){return gB}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DE(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:zh(e)?"-0":e}}function g1(n){return{integerValue:""+n}}function _1(n,e){return MC(e)?g1(e):DE(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mm{constructor(){this._=void 0}}function _B(n,e,t){return n instanceof _u?function(a,o){const u={fields:{[WC]:{stringValue:QC},[XC]:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}};return o&&Om(o)&&(o=km(o)),o&&(u.fields[YC]=o),{mapValue:u}}(t,e):n instanceof Ro?v1(n,e):n instanceof Co?E1(n,e):function(a,o){const u=y1(a,o),d=cA(u)+cA(a.Ie);return lv(u)&&lv(a.Ie)?g1(d):DE(a.serializer,d)}(n,e)}function yB(n,e,t){return n instanceof Ro?v1(n,e):n instanceof Co?E1(n,e):t}function y1(n,e){return n instanceof yu?function(r){return lv(r)||function(o){return!!o&&"doubleValue"in o}(r)}(e)?e:{integerValue:0}:null}class _u extends Mm{}class Ro extends Mm{constructor(e){super(),this.elements=e}}function v1(n,e){const t=T1(e);for(const r of n.elements)t.some(a=>fi(a,r))||t.push(r);return{arrayValue:{values:t}}}class Co extends Mm{constructor(e){super(),this.elements=e}}function E1(n,e){let t=T1(e);for(const r of n.elements)t=t.filter(a=>!fi(a,r));return{arrayValue:{values:t}}}class yu extends Mm{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function cA(n){return dt(n.integerValue||n.doubleValue)}function T1(n){return $h(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{constructor(e,t){this.field=e,this.transform=t}}function vB(n,e){return n.field.isEqual(e.field)&&function(r,a){return r instanceof Ro&&a instanceof Ro||r instanceof Co&&a instanceof Co?lu(r.elements,a.elements,fi):r instanceof yu&&a instanceof yu?fi(r.Ie,a.Ie):r instanceof _u&&a instanceof _u}(n.transform,e.transform)}class EB{constructor(e,t){this.version=e,this.transformResults=t}}class mt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new mt}static exists(e){return new mt(void 0,e)}static updateTime(e){return new mt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ap(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Lm{}function w1(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Uu(n.key,mt.none()):new Lu(n.key,n.data,mt.none());{const t=n.data,r=_n.empty();let a=new nt(pt.comparator);for(let o of e.fields)if(!a.has(o)){let u=t.field(o);u===null&&o.length>1&&(o=o.popLast(),u=t.field(o)),u===null?r.delete(o):r.set(o,u),a=a.add(o)}return new is(n.key,r,new jn(a.toArray()),mt.none())}}function TB(n,e,t){n instanceof Lu?function(a,o,u){const d=a.value.clone(),p=dA(a.fieldTransforms,o,u.transformResults);d.setAll(p),o.convertToFoundDocument(u.version,d).setHasCommittedMutations()}(n,e,t):n instanceof is?function(a,o,u){if(!Ap(a.precondition,o))return void o.convertToUnknownDocument(u.version);const d=dA(a.fieldTransforms,o,u.transformResults),p=o.data;p.setAll(b1(a)),p.setAll(d),o.convertToFoundDocument(u.version,p).setHasCommittedMutations()}(n,e,t):function(a,o,u){o.convertToNoDocument(u.version).setHasCommittedMutations()}(0,e,t)}function Sh(n,e,t,r){return n instanceof Lu?function(o,u,d,p){if(!Ap(o.precondition,u))return d;const m=o.value.clone(),y=fA(o.fieldTransforms,p,u);return m.setAll(y),u.convertToFoundDocument(u.version,m).setHasLocalMutations(),null}(n,e,t,r):n instanceof is?function(o,u,d,p){if(!Ap(o.precondition,u))return d;const m=fA(o.fieldTransforms,p,u),y=u.data;return y.setAll(b1(o)),y.setAll(m),u.convertToFoundDocument(u.version,y).setHasLocalMutations(),d===null?null:d.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(v=>v.field))}(n,e,t,r):function(o,u,d){return Ap(o.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):d}(n,e,t)}function wB(n,e){let t=null;for(const r of n.fieldTransforms){const a=e.data.field(r.field),o=y1(r.transform,a||null);o!=null&&(t===null&&(t=_n.empty()),t.set(r.field,o))}return t||null}function hA(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,a){return r===void 0&&a===void 0||!(!r||!a)&&lu(r,a,(o,u)=>vB(o,u))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Lu extends Lm{constructor(e,t,r,a=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=a,this.type=0}getFieldMask(){return null}}class is extends Lm{constructor(e,t,r,a,o=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=a,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function b1(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function dA(n,e,t){const r=new Map;ye(n.length===t.length);for(let a=0;a<t.length;a++){const o=n[a],u=o.transform,d=e.data.field(o.field);r.set(o.field,yB(u,d,t[a]))}return r}function fA(n,e,t){const r=new Map;for(const a of n){const o=a.transform,u=t.data.field(a.field);r.set(a.field,_B(o,u,e))}return r}class Uu extends Lm{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class PE extends Lm{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xE{constructor(e,t,r,a){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=a}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let a=0;a<this.mutations.length;a++){const o=this.mutations[a];o.key.isEqual(e.key)&&TB(o,e,r[a])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Sh(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Sh(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=m1();return this.mutations.forEach(a=>{const o=e.get(a.key),u=o.overlayedDocument;let d=this.applyToLocalView(u,o.mutatedFields);d=t.has(a.key)?null:d;const p=w1(u,d);p!==null&&r.set(a.key,p),u.isValidDocument()||u.convertToNoDocument(Ee.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),xe())}isEqual(e){return this.batchId===e.batchId&&lu(this.mutations,e.mutations,(t,r)=>hA(t,r))&&lu(this.baseMutations,e.baseMutations,(t,r)=>hA(t,r))}}class NE{constructor(e,t,r,a){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=a}static from(e,t,r){ye(e.mutations.length===r.length);let a=function(){return pB}();const o=e.mutations;for(let u=0;u<o.length;u++)a=a.insert(o[u].key,r[u].version);return new NE(e,t,r,a)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OE{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bB{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var qt,$e;function I1(n){switch(n){case K.OK:return me();case K.CANCELLED:case K.UNKNOWN:case K.DEADLINE_EXCEEDED:case K.RESOURCE_EXHAUSTED:case K.INTERNAL:case K.UNAVAILABLE:case K.UNAUTHENTICATED:return!1;case K.INVALID_ARGUMENT:case K.NOT_FOUND:case K.ALREADY_EXISTS:case K.PERMISSION_DENIED:case K.FAILED_PRECONDITION:case K.ABORTED:case K.OUT_OF_RANGE:case K.UNIMPLEMENTED:case K.DATA_LOSS:return!0;default:return me()}}function A1(n){if(n===void 0)return Vt("GRPC error has no .code"),K.UNKNOWN;switch(n){case qt.OK:return K.OK;case qt.CANCELLED:return K.CANCELLED;case qt.UNKNOWN:return K.UNKNOWN;case qt.DEADLINE_EXCEEDED:return K.DEADLINE_EXCEEDED;case qt.RESOURCE_EXHAUSTED:return K.RESOURCE_EXHAUSTED;case qt.INTERNAL:return K.INTERNAL;case qt.UNAVAILABLE:return K.UNAVAILABLE;case qt.UNAUTHENTICATED:return K.UNAUTHENTICATED;case qt.INVALID_ARGUMENT:return K.INVALID_ARGUMENT;case qt.NOT_FOUND:return K.NOT_FOUND;case qt.ALREADY_EXISTS:return K.ALREADY_EXISTS;case qt.PERMISSION_DENIED:return K.PERMISSION_DENIED;case qt.FAILED_PRECONDITION:return K.FAILED_PRECONDITION;case qt.ABORTED:return K.ABORTED;case qt.OUT_OF_RANGE:return K.OUT_OF_RANGE;case qt.UNIMPLEMENTED:return K.UNIMPLEMENTED;case qt.DATA_LOSS:return K.DATA_LOSS;default:return me()}}($e=qt||(qt={}))[$e.OK=0]="OK",$e[$e.CANCELLED=1]="CANCELLED",$e[$e.UNKNOWN=2]="UNKNOWN",$e[$e.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",$e[$e.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",$e[$e.NOT_FOUND=5]="NOT_FOUND",$e[$e.ALREADY_EXISTS=6]="ALREADY_EXISTS",$e[$e.PERMISSION_DENIED=7]="PERMISSION_DENIED",$e[$e.UNAUTHENTICATED=16]="UNAUTHENTICATED",$e[$e.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",$e[$e.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",$e[$e.ABORTED=10]="ABORTED",$e[$e.OUT_OF_RANGE=11]="OUT_OF_RANGE",$e[$e.UNIMPLEMENTED=12]="UNIMPLEMENTED",$e[$e.INTERNAL=13]="INTERNAL",$e[$e.UNAVAILABLE=14]="UNAVAILABLE",$e[$e.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IB=new ta([4294967295,4294967295],0);function pA(n){const e=_E().encode(n),t=new wC;return t.update(e),new Uint8Array(t.digest())}function mA(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),a=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new ta([t,r],0),new ta([a,o],0)]}class kE{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new ph(`Invalid padding: ${t}`);if(r<0)throw new ph(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ph(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new ph(`Invalid padding when bitmap length is 0: ${t}`);this.Ee=8*e.length-t,this.de=ta.fromNumber(this.Ee)}Ae(e,t,r){let a=e.add(t.multiply(ta.fromNumber(r)));return a.compare(IB)===1&&(a=new ta([a.getBits(0),a.getBits(1)],0)),a.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.Ee===0)return!1;const t=pA(e),[r,a]=mA(t);for(let o=0;o<this.hashCount;o++){const u=this.Ae(r,a,o);if(!this.Re(u))return!1}return!0}static create(e,t,r){const a=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),u=new kE(o,a,t);return r.forEach(d=>u.insert(d)),u}insert(e){if(this.Ee===0)return;const t=pA(e),[r,a]=mA(t);for(let o=0;o<this.hashCount;o++){const u=this.Ae(r,a,o);this.Ve(u)}}Ve(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class ph extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{constructor(e,t,r,a,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=a,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const a=new Map;return a.set(e,Ed.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new vd(Ee.min(),a,new lt(Se),Hn(),xe())}}class Ed{constructor(e,t,r,a,o){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=a,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Ed(r,t,xe(),xe(),xe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sp{constructor(e,t,r,a){this.me=e,this.removedTargetIds=t,this.key=r,this.fe=a}}class S1{constructor(e,t){this.targetId=e,this.ge=t}}class R1{constructor(e,t,r=Dt.EMPTY_BYTE_STRING,a=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=a}}class gA{constructor(){this.pe=0,this.ye=_A(),this.we=Dt.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.be}Ce(e){e.approximateByteSize()>0&&(this.be=!0,this.we=e)}Fe(){let e=xe(),t=xe(),r=xe();return this.ye.forEach((a,o)=>{switch(o){case 0:e=e.add(a);break;case 2:t=t.add(a);break;case 1:r=r.add(a);break;default:me()}}),new Ed(this.we,this.Se,e,t,r)}Me(){this.be=!1,this.ye=_A()}xe(e,t){this.be=!0,this.ye=this.ye.insert(e,t)}Oe(e){this.be=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,ye(this.pe>=0)}Le(){this.be=!0,this.Se=!0}}class AB{constructor(e){this.ke=e,this.qe=new Map,this.Qe=Hn(),this.$e=tp(),this.Ue=tp(),this.Ke=new lt(Se)}We(e){for(const t of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(t,e.fe):this.ze(t,e.key,e.fe);for(const t of e.removedTargetIds)this.ze(t,e.key,e.fe)}je(e){this.forEachTarget(e,t=>{const r=this.He(t);switch(e.state){case 0:this.Je(t)&&r.Ce(e.resumeToken);break;case 1:r.Be(),r.De||r.Me(),r.Ce(e.resumeToken);break;case 2:r.Be(),r.De||this.removeTarget(t);break;case 3:this.Je(t)&&(r.Le(),r.Ce(e.resumeToken));break;case 4:this.Je(t)&&(this.Ye(t),r.Ce(e.resumeToken));break;default:me()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.qe.forEach((r,a)=>{this.Je(a)&&t(a)})}Ze(e){const t=e.targetId,r=e.ge.count,a=this.Xe(t);if(a){const o=a.target;if(Qp(o))if(r===0){const u=new ce(o.path);this.ze(t,u,ht.newNoDocument(u,Ee.min()))}else ye(r===1);else{const u=this.et(t);if(u!==r){const d=this.tt(e),p=d?this.nt(d,e,u):1;if(p!==0){this.Ye(t);const m=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,m)}}}}}tt(e){const t=e.ge.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:a=0},hashCount:o=0}=t;let u,d;try{u=Zi(r).toUint8Array()}catch(p){if(p instanceof KC)return di("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{d=new kE(u,a,o)}catch(p){return di(p instanceof ph?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return d.Ee===0?null:d}nt(e,t,r){return t.ge.count===r-this.st(e,t.targetId)?0:2}st(e,t){const r=this.ke.getRemoteKeysForTarget(t);let a=0;return r.forEach(o=>{const u=this.ke.it(),d=`projects/${u.projectId}/databases/${u.database}/documents/${o.path.canonicalString()}`;e.mightContain(d)||(this.ze(t,o,null),a++)}),a}ot(e){const t=new Map;this.qe.forEach((o,u)=>{const d=this.Xe(u);if(d){if(o.current&&Qp(d.target)){const p=new ce(d.target.path);this._t(p).has(u)||this.ut(u,p)||this.ze(u,p,ht.newNoDocument(p,e))}o.ve&&(t.set(u,o.Fe()),o.Me())}});let r=xe();this.Ue.forEach((o,u)=>{let d=!0;u.forEachWhile(p=>{const m=this.Xe(p);return!m||m.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)}),d&&(r=r.add(o))}),this.Qe.forEach((o,u)=>u.setReadTime(e));const a=new vd(e,t,this.Ke,this.Qe,r);return this.Qe=Hn(),this.$e=tp(),this.Ue=tp(),this.Ke=new lt(Se),a}Ge(e,t){if(!this.Je(e))return;const r=this.ut(e,t.key)?2:0;this.He(e).xe(t.key,r),this.Qe=this.Qe.insert(t.key,t),this.$e=this.$e.insert(t.key,this._t(t.key).add(e)),this.Ue=this.Ue.insert(t.key,this.ct(t.key).add(e))}ze(e,t,r){if(!this.Je(e))return;const a=this.He(e);this.ut(e,t)?a.xe(t,1):a.Oe(t),this.Ue=this.Ue.insert(t,this.ct(t).delete(e)),this.Ue=this.Ue.insert(t,this.ct(t).add(e)),r&&(this.Qe=this.Qe.insert(t,r))}removeTarget(e){this.qe.delete(e)}et(e){const t=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let t=this.qe.get(e);return t||(t=new gA,this.qe.set(e,t)),t}ct(e){let t=this.Ue.get(e);return t||(t=new nt(Se),this.Ue=this.Ue.insert(e,t)),t}_t(e){let t=this.$e.get(e);return t||(t=new nt(Se),this.$e=this.$e.insert(e,t)),t}Je(e){const t=this.Xe(e)!==null;return t||ne("WatchChangeAggregator","Detected inactive target",e),t}Xe(e){const t=this.qe.get(e);return t&&t.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new gA),this.ke.getRemoteKeysForTarget(e).forEach(t=>{this.ze(e,t,null)})}ut(e,t){return this.ke.getRemoteKeysForTarget(e).has(t)}}function tp(){return new lt(ce.comparator)}function _A(){return new lt(ce.comparator)}const SB={asc:"ASCENDING",desc:"DESCENDING"},RB={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},CB={and:"AND",or:"OR"};class DB{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function fv(n,e){return n.useProto3Json||fd(e)?e:{value:e}}function vu(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function C1(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function PB(n,e){return vu(n,e.toTimestamp())}function Mt(n){return ye(!!n),Ee.fromTimestamp(function(t){const r=Xi(t);return new gt(r.seconds,r.nanos)}(n))}function VE(n,e){return pv(n,e).canonicalString()}function pv(n,e){const t=function(a){return new ze(["projects",a.projectId,"databases",a.database])}(n).child("documents");return e===void 0?t:t.child(e)}function D1(n){const e=ze.fromString(n);return ye(B1(e)),e}function Qh(n,e){return VE(n.databaseId,e.path)}function li(n,e){const t=D1(e);if(t.get(1)!==n.databaseId.projectId)throw new ee(K.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new ee(K.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new ce(N1(t))}function P1(n,e){return VE(n.databaseId,e)}function x1(n){const e=D1(n);return e.length===4?ze.emptyPath():N1(e)}function mv(n){return new ze(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function N1(n){return ye(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function yA(n,e,t){return{name:Qh(n,e),fields:t.value.mapValue.fields}}function O1(n,e,t){const r=li(n,e.name),a=Mt(e.updateTime),o=e.createTime?Mt(e.createTime):Ee.min(),u=new _n({mapValue:{fields:e.fields}}),d=ht.newFoundDocument(r,a,o,u);return t&&d.setHasCommittedMutations(),t?d.setHasCommittedMutations():d}function xB(n,e){return"found"in e?function(r,a){ye(!!a.found),a.found.name,a.found.updateTime;const o=li(r,a.found.name),u=Mt(a.found.updateTime),d=a.found.createTime?Mt(a.found.createTime):Ee.min(),p=new _n({mapValue:{fields:a.found.fields}});return ht.newFoundDocument(o,u,d,p)}(n,e):"missing"in e?function(r,a){ye(!!a.missing),ye(!!a.readTime);const o=li(r,a.missing),u=Mt(a.readTime);return ht.newNoDocument(o,u)}(n,e):me()}function NB(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(m){return m==="NO_CHANGE"?0:m==="ADD"?1:m==="REMOVE"?2:m==="CURRENT"?3:m==="RESET"?4:me()}(e.targetChange.targetChangeType||"NO_CHANGE"),a=e.targetChange.targetIds||[],o=function(m,y){return m.useProto3Json?(ye(y===void 0||typeof y=="string"),Dt.fromBase64String(y||"")):(ye(y===void 0||y instanceof Buffer||y instanceof Uint8Array),Dt.fromUint8Array(y||new Uint8Array))}(n,e.targetChange.resumeToken),u=e.targetChange.cause,d=u&&function(m){const y=m.code===void 0?K.UNKNOWN:A1(m.code);return new ee(y,m.message||"")}(u);t=new R1(r,a,o,d||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const a=li(n,r.document.name),o=Mt(r.document.updateTime),u=r.document.createTime?Mt(r.document.createTime):Ee.min(),d=new _n({mapValue:{fields:r.document.fields}}),p=ht.newFoundDocument(a,o,u,d),m=r.targetIds||[],y=r.removedTargetIds||[];t=new Sp(m,y,p.key,p)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const a=li(n,r.document),o=r.readTime?Mt(r.readTime):Ee.min(),u=ht.newNoDocument(a,o),d=r.removedTargetIds||[];t=new Sp([],d,u.key,u)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const a=li(n,r.document),o=r.removedTargetIds||[];t=new Sp([],o,a,null)}else{if(!("filter"in e))return me();{e.filter;const r=e.filter;r.targetId;const{count:a=0,unchangedNames:o}=r,u=new bB(a,o),d=r.targetId;t=new S1(d,u)}}return t}function Wh(n,e){let t;if(e instanceof Lu)t={update:yA(n,e.key,e.value)};else if(e instanceof Uu)t={delete:Qh(n,e.key)};else if(e instanceof is)t={update:yA(n,e.key,e.data),updateMask:UB(e.fieldMask)};else{if(!(e instanceof PE))return me();t={verify:Qh(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(o,u){const d=u.transform;if(d instanceof _u)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof Ro)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof Co)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof yu)return{fieldPath:u.field.canonicalString(),increment:d.Ie};throw me()}(0,r))),e.precondition.isNone||(t.currentDocument=function(a,o){return o.updateTime!==void 0?{updateTime:PB(a,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:me()}(n,e.precondition)),t}function gv(n,e){const t=e.currentDocument?function(o){return o.updateTime!==void 0?mt.updateTime(Mt(o.updateTime)):o.exists!==void 0?mt.exists(o.exists):mt.none()}(e.currentDocument):mt.none(),r=e.updateTransforms?e.updateTransforms.map(a=>function(u,d){let p=null;if("setToServerValue"in d)ye(d.setToServerValue==="REQUEST_TIME"),p=new _u;else if("appendMissingElements"in d){const y=d.appendMissingElements.values||[];p=new Ro(y)}else if("removeAllFromArray"in d){const y=d.removeAllFromArray.values||[];p=new Co(y)}else"increment"in d?p=new yu(u,d.increment):me();const m=pt.fromServerFormat(d.fieldPath);return new yd(m,p)}(n,a)):[];if(e.update){e.update.name;const a=li(n,e.update.name),o=new _n({mapValue:{fields:e.update.fields}});if(e.updateMask){const u=function(p){const m=p.fieldPaths||[];return new jn(m.map(y=>pt.fromServerFormat(y)))}(e.updateMask);return new is(a,o,u,t,r)}return new Lu(a,o,t,r)}if(e.delete){const a=li(n,e.delete);return new Uu(a,t)}if(e.verify){const a=li(n,e.verify);return new PE(a,t)}return me()}function OB(n,e){return n&&n.length>0?(ye(e!==void 0),n.map(t=>function(a,o){let u=a.updateTime?Mt(a.updateTime):Mt(o);return u.isEqual(Ee.min())&&(u=Mt(o)),new EB(u,a.transformResults||[])}(t,e))):[]}function k1(n,e){return{documents:[P1(n,e.path)]}}function V1(n,e){const t={structuredQuery:{}},r=e.path;let a;e.collectionGroup!==null?(a=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(a=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=P1(n,a);const o=function(m){if(m.length!==0)return U1(tt.create(m,"and"))}(e.filters);o&&(t.structuredQuery.where=o);const u=function(m){if(m.length!==0)return m.map(y=>function(w){return{field:ql(w.field),direction:VB(w.dir)}}(y))}(e.orderBy);u&&(t.structuredQuery.orderBy=u);const d=fv(n,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=function(m){return{before:m.inclusive,values:m.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(m){return{before:!m.inclusive,values:m.position}}(e.endAt)),{ht:t,parent:a}}function M1(n){let e=x1(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let a=null;if(r>0){ye(r===1);const y=t.from[0];y.allDescendants?a=y.collectionId:e=e.child(y.collectionId)}let o=[];t.where&&(o=function(v){const w=L1(v);return w instanceof tt&&SE(w)?w.getFilters():[w]}(t.where));let u=[];t.orderBy&&(u=function(v){return v.map(w=>function(P){return new Kh(jl(P.field),function(L){switch(L){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(w))}(t.orderBy));let d=null;t.limit&&(d=function(v){let w;return w=typeof v=="object"?v.value:v,fd(w)?null:w}(t.limit));let p=null;t.startAt&&(p=function(v){const w=!!v.before,S=v.values||[];return new da(S,w)}(t.startAt));let m=null;return t.endAt&&(m=function(v){const w=!v.before,S=v.values||[];return new da(S,w)}(t.endAt)),u1(e,a,u,o,d,"F",p,m)}function kB(n,e){const t=function(a){switch(a){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return me()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function L1(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=jl(t.unaryFilter.field);return Fe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const a=jl(t.unaryFilter.field);return Fe.create(a,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=jl(t.unaryFilter.field);return Fe.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=jl(t.unaryFilter.field);return Fe.create(u,"!=",{nullValue:"NULL_VALUE"});default:return me()}}(n):n.fieldFilter!==void 0?function(t){return Fe.create(jl(t.fieldFilter.field),function(a){switch(a){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return me()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return tt.create(t.compositeFilter.filters.map(r=>L1(r)),function(a){switch(a){case"AND":return"and";case"OR":return"or";default:return me()}}(t.compositeFilter.op))}(n):me()}function VB(n){return SB[n]}function MB(n){return RB[n]}function LB(n){return CB[n]}function ql(n){return{fieldPath:n.canonicalString()}}function jl(n){return pt.fromServerFormat(n.fieldPath)}function U1(n){return n instanceof Fe?function(t){if(t.op==="=="){if(nA(t.value))return{unaryFilter:{field:ql(t.field),op:"IS_NAN"}};if(tA(t.value))return{unaryFilter:{field:ql(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(nA(t.value))return{unaryFilter:{field:ql(t.field),op:"IS_NOT_NAN"}};if(tA(t.value))return{unaryFilter:{field:ql(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ql(t.field),op:MB(t.op),value:t.value}}}(n):n instanceof tt?function(t){const r=t.getFilters().map(a=>U1(a));return r.length===1?r[0]:{compositeFilter:{op:LB(t.op),filters:r}}}(n):me()}function UB(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function B1(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(e,t,r,a,o=Ee.min(),u=Ee.min(),d=Dt.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=a,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=d,this.expectedCount=p}withSequenceNumber(e){return new Gi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Gi(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Gi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Gi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z1{constructor(e){this.Tt=e}}function BB(n,e){let t;if(e.document)t=O1(n.Tt,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=ce.fromSegments(e.noDocument.path),a=Po(e.noDocument.readTime);t=ht.newNoDocument(r,a),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return me();{const r=ce.fromSegments(e.unknownDocument.path),a=Po(e.unknownDocument.version);t=ht.newUnknownDocument(r,a)}}return e.readTime&&t.setReadTime(function(a){const o=new gt(a[0],a[1]);return Ee.fromTimestamp(o)}(e.readTime)),t}function vA(n,e){const t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:Xp(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(o,u){return{name:Qh(o,u.key),fields:u.data.value.mapValue.fields,updateTime:vu(o,u.version.toTimestamp()),createTime:vu(o,u.createTime.toTimestamp())}}(n.Tt,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:Do(e.version)};else{if(!e.isUnknownDocument())return me();r.unknownDocument={path:t.path.toArray(),version:Do(e.version)}}return r}function Xp(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function Do(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Po(n){const e=new gt(n.seconds,n.nanoseconds);return Ee.fromTimestamp(e)}function oo(n,e){const t=(e.baseMutations||[]).map(o=>gv(n.Tt,o));for(let o=0;o<e.mutations.length-1;++o){const u=e.mutations[o];if(o+1<e.mutations.length&&e.mutations[o+1].transform!==void 0){const d=e.mutations[o+1];u.updateTransforms=d.transform.fieldTransforms,e.mutations.splice(o+1,1),++o}}const r=e.mutations.map(o=>gv(n.Tt,o)),a=gt.fromMillis(e.localWriteTimeMs);return new xE(e.batchId,a,t,r)}function mh(n){const e=Po(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?Po(n.lastLimboFreeSnapshotVersion):Ee.min();let r;return r=function(o){return o.documents!==void 0}(n.query)?function(o){return ye(o.documents.length===1),Vn(Mu(x1(o.documents[0])))}(n.query):function(o){return Vn(M1(o))}(n.query),new Gi(r,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,e,t,Dt.fromBase64String(n.resumeToken))}function F1(n,e){const t=Do(e.snapshotVersion),r=Do(e.lastLimboFreeSnapshotVersion);let a;a=Qp(e.target)?k1(n.Tt,e.target):V1(n.Tt,e.target).ht;const o=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:So(e.target),readTime:t,resumeToken:o,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:a}}function ME(n){const e=M1({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Yp(e,e.limit,"L"):e}function by(n,e){return new OE(e.largestBatchId,gv(n.Tt,e.overlayMutation))}function EA(n,e){const t=e.path.lastSegment();return[n,An(e.path.popLast()),t]}function TA(n,e,t,r){return{indexId:n,uid:e,sequenceNumber:t,readTime:Do(r.readTime),documentKey:An(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zB{getBundleMetadata(e,t){return wA(e).get(t).next(r=>{if(r)return function(o){return{id:o.bundleId,createTime:Po(o.createTime),version:o.version}}(r)})}saveBundleMetadata(e,t){return wA(e).put(function(a){return{bundleId:a.id,createTime:Do(Mt(a.createTime)),version:a.version}}(t))}getNamedQuery(e,t){return bA(e).get(t).next(r=>{if(r)return function(o){return{name:o.name,query:ME(o.bundledQuery),readTime:Po(o.readTime)}}(r)})}saveNamedQuery(e,t){return bA(e).put(function(a){return{name:a.name,readTime:Do(Mt(a.readTime)),bundledQuery:a.bundledQuery}}(t))}}function wA(n){return Zt(n,Pm)}function bA(n){return Zt(n,xm)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Um{constructor(e,t){this.serializer=e,this.userId=t}static It(e,t){const r=t.uid||"";return new Um(e,r)}getOverlay(e,t){return nh(e).get(EA(this.userId,t)).next(r=>r?by(this.serializer,r):null)}getOverlays(e,t){const r=ai();return j.forEach(t,a=>this.getOverlay(e,a).next(o=>{o!==null&&r.set(a,o)})).next(()=>r)}saveOverlays(e,t,r){const a=[];return r.forEach((o,u)=>{const d=new OE(t,u);a.push(this.Et(e,d))}),j.waitFor(a)}removeOverlaysForBatchId(e,t,r){const a=new Set;t.forEach(u=>a.add(An(u.getCollectionPath())));const o=[];return a.forEach(u=>{const d=IDBKeyRange.bound([this.userId,u,r],[this.userId,u,r+1],!1,!0);o.push(nh(e).J(iv,d))}),j.waitFor(o)}getOverlaysForCollection(e,t,r){const a=ai(),o=An(t),u=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,Number.POSITIVE_INFINITY],!0);return nh(e).G(iv,u).next(d=>{for(const p of d){const m=by(this.serializer,p);a.set(m.getKey(),m)}return a})}getOverlaysForCollectionGroup(e,t,r,a){const o=ai();let u;const d=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return nh(e).Z({index:qC,range:d},(p,m,y)=>{const v=by(this.serializer,m);o.size()<a||v.largestBatchId===u?(o.set(v.getKey(),v),u=v.largestBatchId):y.done()}).next(()=>o)}Et(e,t){return nh(e).put(function(a,o,u){const[d,p,m]=EA(o,u.mutation.key);return{userId:o,collectionPath:p,documentId:m,collectionGroup:u.mutation.key.getCollectionGroup(),largestBatchId:u.largestBatchId,overlayMutation:Wh(a.Tt,u.mutation)}}(this.serializer,this.userId,t))}}function nh(n){return Zt(n,Nm)}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FB{dt(e){return Zt(e,wE)}getSessionToken(e){return this.dt(e).get("sessionToken").next(t=>{const r=t==null?void 0:t.value;return r?Dt.fromUint8Array(r):Dt.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.dt(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(){}At(e,t){this.Rt(e,t),t.Vt()}Rt(e,t){if("nullValue"in e)this.ft(t,5);else if("booleanValue"in e)this.ft(t,10),t.gt(e.booleanValue?1:0);else if("integerValue"in e)this.ft(t,15),t.gt(dt(e.integerValue));else if("doubleValue"in e){const r=dt(e.doubleValue);isNaN(r)?this.ft(t,13):(this.ft(t,15),zh(r)?t.gt(0):t.gt(r))}else if("timestampValue"in e){let r=e.timestampValue;this.ft(t,20),typeof r=="string"&&(r=Xi(r)),t.yt(`${r.seconds||""}`),t.gt(r.nanos||0)}else if("stringValue"in e)this.wt(e.stringValue,t),this.St(t);else if("bytesValue"in e)this.ft(t,30),t.bt(Zi(e.bytesValue)),this.St(t);else if("referenceValue"in e)this.Dt(e.referenceValue,t);else if("geoPointValue"in e){const r=e.geoPointValue;this.ft(t,45),t.gt(r.latitude||0),t.gt(r.longitude||0)}else"mapValue"in e?JC(e)?this.ft(t,Number.MAX_SAFE_INTEGER):Vm(e)?this.vt(e.mapValue,t):(this.Ct(e.mapValue,t),this.St(t)):"arrayValue"in e?(this.Ft(e.arrayValue,t),this.St(t)):me()}wt(e,t){this.ft(t,25),this.Mt(e,t)}Mt(e,t){t.yt(e)}Ct(e,t){const r=e.fields||{};this.ft(t,55);for(const a of Object.keys(r))this.wt(a,t),this.Rt(r[a],t)}vt(e,t){var r,a;const o=e.fields||{};this.ft(t,53);const u=pu,d=((a=(r=o[u].arrayValue)===null||r===void 0?void 0:r.values)===null||a===void 0?void 0:a.length)||0;this.ft(t,15),t.gt(dt(d)),this.wt(u,t),this.Rt(o[u],t)}Ft(e,t){const r=e.values||[];this.ft(t,50);for(const a of r)this.Rt(a,t)}Dt(e,t){this.ft(t,37),ce.fromName(e).path.forEach(r=>{this.ft(t,60),this.Mt(r,t)})}ft(e,t){e.gt(t)}St(e){e.gt(2)}}lo.xt=new lo;/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law | agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES | CONDITIONS OF ANY KIND, either express | implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ml=255;function qB(n){if(n===0)return 8;let e=0;return n>>4||(e+=4,n<<=4),n>>6||(e+=2,n<<=2),n>>7||(e+=1),e}function IA(n){const e=64-function(r){let a=0;for(let o=0;o<8;++o){const u=qB(255&r[o]);if(a+=u,u!==8)break}return a}(n);return Math.ceil(e/8)}class jB{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ot(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Nt(r.value),r=t.next();this.Bt()}Lt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.kt(r.value),r=t.next();this.qt()}Qt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Nt(r);else if(r<2048)this.Nt(960|r>>>6),this.Nt(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Nt(480|r>>>12),this.Nt(128|63&r>>>6),this.Nt(128|63&r);else{const a=t.codePointAt(0);this.Nt(240|a>>>18),this.Nt(128|63&a>>>12),this.Nt(128|63&a>>>6),this.Nt(128|63&a)}}this.Bt()}$t(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.kt(r);else if(r<2048)this.kt(960|r>>>6),this.kt(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.kt(480|r>>>12),this.kt(128|63&r>>>6),this.kt(128|63&r);else{const a=t.codePointAt(0);this.kt(240|a>>>18),this.kt(128|63&a>>>12),this.kt(128|63&a>>>6),this.kt(128|63&a)}}this.qt()}Ut(e){const t=this.Kt(e),r=IA(t);this.Wt(1+r),this.buffer[this.position++]=255&r;for(let a=t.length-r;a<t.length;++a)this.buffer[this.position++]=255&t[a]}Gt(e){const t=this.Kt(e),r=IA(t);this.Wt(1+r),this.buffer[this.position++]=~(255&r);for(let a=t.length-r;a<t.length;++a)this.buffer[this.position++]=~(255&t[a])}zt(){this.jt(Ml),this.jt(255)}Ht(){this.Jt(Ml),this.Jt(255)}reset(){this.position=0}seed(e){this.Wt(e.length),this.buffer.set(e,this.position),this.position+=e.length}Yt(){return this.buffer.slice(0,this.position)}Kt(e){const t=function(o){const u=new DataView(new ArrayBuffer(8));return u.setFloat64(0,o,!1),new Uint8Array(u.buffer)}(e),r=!!(128&t[0]);t[0]^=r?255:128;for(let a=1;a<t.length;++a)t[a]^=r?255:0;return t}Nt(e){const t=255&e;t===0?(this.jt(0),this.jt(255)):t===Ml?(this.jt(Ml),this.jt(0)):this.jt(t)}kt(e){const t=255&e;t===0?(this.Jt(0),this.Jt(255)):t===Ml?(this.Jt(Ml),this.Jt(0)):this.Jt(e)}Bt(){this.jt(0),this.jt(1)}qt(){this.Jt(0),this.Jt(1)}jt(e){this.Wt(1),this.buffer[this.position++]=e}Jt(e){this.Wt(1),this.buffer[this.position++]=~e}Wt(e){const t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);const a=new Uint8Array(r);a.set(this.buffer),this.buffer=a}}class HB{constructor(e){this.Zt=e}bt(e){this.Zt.Ot(e)}yt(e){this.Zt.Qt(e)}gt(e){this.Zt.Ut(e)}Vt(){this.Zt.zt()}}class GB{constructor(e){this.Zt=e}bt(e){this.Zt.Lt(e)}yt(e){this.Zt.$t(e)}gt(e){this.Zt.Gt(e)}Vt(){this.Zt.Ht()}}class rh{constructor(){this.Zt=new jB,this.Xt=new HB(this.Zt),this.en=new GB(this.Zt)}seed(e){this.Zt.seed(e)}tn(e){return e===0?this.Xt:this.en}Yt(){return this.Zt.Yt()}reset(){this.Zt.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e,t,r,a){this.indexId=e,this.documentKey=t,this.arrayValue=r,this.directionalValue=a}nn(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.directionalValue,0),t!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new uo(this.indexId,this.documentKey,this.arrayValue,r)}}function Hs(n,e){let t=n.indexId-e.indexId;return t!==0?t:(t=AA(n.arrayValue,e.arrayValue),t!==0?t:(t=AA(n.directionalValue,e.directionalValue),t!==0?t:ce.comparator(n.documentKey,e.documentKey)))}function AA(n,e){for(let t=0;t<n.length&&t<e.length;++t){const r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SA{constructor(e){this.rn=new nt((t,r)=>pt.comparator(t.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.sn=e.orderBy,this._n=[];for(const t of e.filters){const r=t;r.isInequality()?this.rn=this.rn.add(r):this._n.push(r)}}get an(){return this.rn.size>1}un(e){if(ye(e.collectionGroup===this.collectionId),this.an)return!1;const t=tv(e);if(t!==void 0&&!this.cn(t))return!1;const r=io(e);let a=new Set,o=0,u=0;for(;o<r.length&&this.cn(r[o]);++o)a=a.add(r[o].fieldPath.canonicalString());if(o===r.length)return!0;if(this.rn.size>0){const d=this.rn.getIterator().getNext();if(!a.has(d.field.canonicalString())){const p=r[o];if(!this.ln(d,p)||!this.hn(this.sn[u++],p))return!1}++o}for(;o<r.length;++o){const d=r[o];if(u>=this.sn.length||!this.hn(this.sn[u++],d))return!1}return!0}Pn(){if(this.an)return null;let e=new nt(pt.comparator);const t=[];for(const r of this._n)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")t.push(new vp(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),t.push(new vp(r.field,0))}for(const r of this.sn)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),t.push(new vp(r.field,r.dir==="asc"?0:1)));return new qp(qp.UNKNOWN_ID,this.collectionId,t,Bh.empty())}cn(e){for(const t of this._n)if(this.ln(t,e))return!0;return!1}ln(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}hn(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q1(n){var e,t;if(ye(n instanceof Fe||n instanceof tt),n instanceof Fe){if(n instanceof l1){const a=((t=(e=n.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(o=>Fe.create(n.field,"==",o)))||[];return tt.create(a,"or")}return n}const r=n.filters.map(a=>q1(a));return tt.create(r,n.op)}function $B(n){if(n.getFilters().length===0)return[];const e=vv(q1(n));return ye(j1(e)),_v(e)||yv(e)?[e]:e.getFilters()}function _v(n){return n instanceof Fe}function yv(n){return n instanceof tt&&SE(n)}function j1(n){return _v(n)||yv(n)||function(t){if(t instanceof tt&&uv(t)){for(const r of t.getFilters())if(!_v(r)&&!yv(r))return!1;return!0}return!1}(n)}function vv(n){if(ye(n instanceof Fe||n instanceof tt),n instanceof Fe)return n;if(n.filters.length===1)return vv(n.filters[0]);const e=n.filters.map(r=>vv(r));let t=tt.create(e,n.op);return t=Zp(t),j1(t)?t:(ye(t instanceof tt),ye(gu(t)),ye(t.filters.length>1),t.filters.reduce((r,a)=>LE(r,a)))}function LE(n,e){let t;return ye(n instanceof Fe||n instanceof tt),ye(e instanceof Fe||e instanceof tt),t=n instanceof Fe?e instanceof Fe?function(a,o){return tt.create([a,o],"and")}(n,e):RA(n,e):e instanceof Fe?RA(e,n):function(a,o){if(ye(a.filters.length>0&&o.filters.length>0),gu(a)&&gu(o))return s1(a,o.getFilters());const u=uv(a)?a:o,d=uv(a)?o:a,p=u.filters.map(m=>LE(m,d));return tt.create(p,"or")}(n,e),Zp(t)}function RA(n,e){if(gu(e))return s1(e,n.getFilters());{const t=e.filters.map(r=>LE(n,r));return tt.create(t,"or")}}function Zp(n){if(ye(n instanceof Fe||n instanceof tt),n instanceof Fe)return n;const e=n.getFilters();if(e.length===1)return Zp(e[0]);if(r1(n))return n;const t=e.map(a=>Zp(a)),r=[];return t.forEach(a=>{a instanceof Fe?r.push(a):a instanceof tt&&(a.op===n.op?r.push(...a.filters):r.push(a))}),r.length===1?r[0]:tt.create(r,n.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KB{constructor(){this.Tn=new UE}addToCollectionParentIndex(e,t){return this.Tn.add(t),j.resolve()}getCollectionParents(e,t){return j.resolve(this.Tn.getEntries(t))}addFieldIndex(e,t){return j.resolve()}deleteFieldIndex(e,t){return j.resolve()}deleteAllFieldIndexes(e){return j.resolve()}createTargetIndexes(e,t){return j.resolve()}getDocumentsMatchingTarget(e,t){return j.resolve(null)}getIndexType(e,t){return j.resolve(0)}getFieldIndexes(e,t){return j.resolve([])}getNextCollectionGroupToUpdate(e){return j.resolve(null)}getMinOffset(e,t){return j.resolve(nr.min())}getMinOffsetFromCollectionGroup(e,t){return j.resolve(nr.min())}updateCollectionGroup(e,t,r){return j.resolve()}updateIndexEntries(e,t){return j.resolve()}}class UE{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),a=this.index[t]||new nt(ze.comparator),o=!a.has(r);return this.index[t]=a.add(r),o}has(e){const t=e.lastSegment(),r=e.popLast(),a=this.index[t];return a&&a.has(r)}getEntries(e){return(this.index[e]||new nt(ze.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CA="IndexedDbIndexManager",np=new Uint8Array(0);class QB{constructor(e,t){this.databaseId=t,this.In=new UE,this.En=new rs(r=>So(r),(r,a)=>md(r,a)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.In.has(t)){const r=t.lastSegment(),a=t.popLast();e.addOnCommittedListener(()=>{this.In.add(t)});const o={collectionId:r,parent:An(a)};return DA(e).put(o)}return j.resolve()}getCollectionParents(e,t){const r=[],a=IDBKeyRange.bound([t,""],[PC(t),""],!1,!0);return DA(e).G(a).next(o=>{for(const u of o){if(u.collectionId!==t)break;r.push(si(u.parent))}return r})}addFieldIndex(e,t){const r=ih(e),a=function(d){return{indexId:d.indexId,collectionGroup:d.collectionGroup,fields:d.fields.map(p=>[p.fieldPath.canonicalString(),p.kind])}}(t);delete a.indexId;const o=r.add(a);if(t.indexState){const u=Ul(e);return o.next(d=>{u.put(TA(d,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return o.next()}deleteFieldIndex(e,t){const r=ih(e),a=Ul(e),o=Ll(e);return r.delete(t.indexId).next(()=>a.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>o.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=ih(e),r=Ll(e),a=Ul(e);return t.J().next(()=>r.J()).next(()=>a.J())}createTargetIndexes(e,t){return j.forEach(this.dn(t),r=>this.getIndexType(e,r).next(a=>{if(a===0||a===1){const o=new SA(r).Pn();if(o!=null)return this.addFieldIndex(e,o)}}))}getDocumentsMatchingTarget(e,t){const r=Ll(e);let a=!0;const o=new Map;return j.forEach(this.dn(t),u=>this.An(e,u).next(d=>{a&&(a=!!d),o.set(u,d)})).next(()=>{if(a){let u=xe();const d=[];return j.forEach(o,(p,m)=>{ne(CA,`Using index ${function(G){return`id=${G.indexId}|cg=${G.collectionGroup}|f=${G.fields.map(oe=>`${oe.fieldPath}:${oe.kind}`).join(",")}`}(p)} to execute ${So(t)}`);const y=function(G,oe){const ae=tv(oe);if(ae===void 0)return null;for(const le of Wp(G,ae.fieldPath))switch(le.op){case"array-contains-any":return le.value.arrayValue.values||[];case"array-contains":return[le.value]}return null}(m,p),v=function(G,oe){const ae=new Map;for(const le of io(oe))for(const D of Wp(G,le.fieldPath))switch(D.op){case"==":case"in":ae.set(le.fieldPath.canonicalString(),D.value);break;case"not-in":case"!=":return ae.set(le.fieldPath.canonicalString(),D.value),Array.from(ae.values())}return null}(m,p),w=function(G,oe){const ae=[];let le=!0;for(const D of io(oe)){const R=D.kind===0?oA(G,D.fieldPath,G.startAt):lA(G,D.fieldPath,G.startAt);ae.push(R.value),le&&(le=R.inclusive)}return new da(ae,le)}(m,p),S=function(G,oe){const ae=[];let le=!0;for(const D of io(oe)){const R=D.kind===0?lA(G,D.fieldPath,G.endAt):oA(G,D.fieldPath,G.endAt);ae.push(R.value),le&&(le=R.inclusive)}return new da(ae,le)}(m,p),P=this.Rn(p,m,w),U=this.Rn(p,m,S),L=this.Vn(p,m,v),z=this.mn(p.indexId,y,P,w.inclusive,U,S.inclusive,L);return j.forEach(z,W=>r.H(W,t.limit).next(G=>{G.forEach(oe=>{const ae=ce.fromSegments(oe.documentKey);u.has(ae)||(u=u.add(ae),d.push(ae))})}))}).next(()=>d)}return j.resolve(null)})}dn(e){let t=this.En.get(e);return t||(e.filters.length===0?t=[e]:t=$B(tt.create(e.filters,"and")).map(r=>hv(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.En.set(e,t),t)}mn(e,t,r,a,o,u,d){const p=(t!=null?t.length:1)*Math.max(r.length,o.length),m=p/(t!=null?t.length:1),y=[];for(let v=0;v<p;++v){const w=t?this.fn(t[v/m]):np,S=this.gn(e,w,r[v%m],a),P=this.pn(e,w,o[v%m],u),U=d.map(L=>this.gn(e,w,L,!0));y.push(...this.createRange(S,P,U))}return y}gn(e,t,r,a){const o=new uo(e,ce.empty(),t,r);return a?o:o.nn()}pn(e,t,r,a){const o=new uo(e,ce.empty(),t,r);return a?o.nn():o}An(e,t){const r=new SA(t),a=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,a).next(o=>{let u=null;for(const d of o)r.un(d)&&(!u||d.fields.length>u.fields.length)&&(u=d);return u})}getIndexType(e,t){let r=2;const a=this.dn(t);return j.forEach(a,o=>this.An(e,o).next(u=>{u?r!==0&&u.fields.length<function(p){let m=new nt(pt.comparator),y=!1;for(const v of p.filters)for(const w of v.getFlattenedFilters())w.field.isKeyField()||(w.op==="array-contains"||w.op==="array-contains-any"?y=!0:m=m.add(w.field));for(const v of p.orderBy)v.field.isKeyField()||(m=m.add(v.field));return m.size+(y?1:0)}(o)&&(r=1):r=0})).next(()=>function(u){return u.limit!==null}(t)&&a.length>1&&r===2?1:r)}yn(e,t){const r=new rh;for(const a of io(e)){const o=t.data.field(a.fieldPath);if(o==null)return null;const u=r.tn(a.kind);lo.xt.At(o,u)}return r.Yt()}fn(e){const t=new rh;return lo.xt.At(e,t.tn(0)),t.Yt()}wn(e,t){const r=new rh;return lo.xt.At(Ao(this.databaseId,t),r.tn(function(o){const u=io(o);return u.length===0?0:u[u.length-1].kind}(e))),r.Yt()}Vn(e,t,r){if(r===null)return[];let a=[];a.push(new rh);let o=0;for(const u of io(e)){const d=r[o++];for(const p of a)if(this.Sn(t,u.fieldPath)&&$h(d))a=this.bn(a,u,d);else{const m=p.tn(u.kind);lo.xt.At(d,m)}}return this.Dn(a)}Rn(e,t,r){return this.Vn(e,t,r.position)}Dn(e){const t=[];for(let r=0;r<e.length;++r)t[r]=e[r].Yt();return t}bn(e,t,r){const a=[...e],o=[];for(const u of r.arrayValue.values||[])for(const d of a){const p=new rh;p.seed(d.Yt()),lo.xt.At(u,p.tn(t.kind)),o.push(p)}return o}Sn(e,t){return!!e.filters.find(r=>r instanceof Fe&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,t){const r=ih(e),a=Ul(e);return(t?r.G(rv,IDBKeyRange.bound(t,t)):r.G()).next(o=>{const u=[];return j.forEach(o,d=>a.get([d.indexId,this.uid]).next(p=>{u.push(function(y,v){const w=v?new Bh(v.sequenceNumber,new nr(Po(v.readTime),new ce(si(v.documentKey)),v.largestBatchId)):Bh.empty(),S=y.fields.map(([P,U])=>new vp(pt.fromServerFormat(P),U));return new qp(y.indexId,y.collectionGroup,S,w)}(d,p))})).next(()=>u)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((r,a)=>{const o=r.indexState.sequenceNumber-a.indexState.sequenceNumber;return o!==0?o:Se(r.collectionGroup,a.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,r){const a=ih(e),o=Ul(e);return this.vn(e).next(u=>a.G(rv,IDBKeyRange.bound(t,t)).next(d=>j.forEach(d,p=>o.put(TA(p.indexId,this.uid,u,r)))))}updateIndexEntries(e,t){const r=new Map;return j.forEach(t,(a,o)=>{const u=r.get(a.collectionGroup);return(u?j.resolve(u):this.getFieldIndexes(e,a.collectionGroup)).next(d=>(r.set(a.collectionGroup,d),j.forEach(d,p=>this.Cn(e,a,p).next(m=>{const y=this.Fn(o,p);return m.isEqual(y)?j.resolve():this.Mn(e,o,p,m,y)}))))})}xn(e,t,r,a){return Ll(e).put({indexId:a.indexId,uid:this.uid,arrayValue:a.arrayValue,directionalValue:a.directionalValue,orderedDocumentKey:this.wn(r,t.key),documentKey:t.key.path.toArray()})}On(e,t,r,a){return Ll(e).delete([a.indexId,this.uid,a.arrayValue,a.directionalValue,this.wn(r,t.key),t.key.path.toArray()])}Cn(e,t,r){const a=Ll(e);let o=new nt(Hs);return a.Z({index:FC,range:IDBKeyRange.only([r.indexId,this.uid,this.wn(r,t)])},(u,d)=>{o=o.add(new uo(r.indexId,t,d.arrayValue,d.directionalValue))}).next(()=>o)}Fn(e,t){let r=new nt(Hs);const a=this.yn(t,e);if(a==null)return r;const o=tv(t);if(o!=null){const u=e.data.field(o.fieldPath);if($h(u))for(const d of u.arrayValue.values||[])r=r.add(new uo(t.indexId,e.key,this.fn(d),a))}else r=r.add(new uo(t.indexId,e.key,np,a));return r}Mn(e,t,r,a,o){ne(CA,"Updating index entries for document '%s'",t.key);const u=[];return function(p,m,y,v,w){const S=p.getIterator(),P=m.getIterator();let U=Vl(S),L=Vl(P);for(;U||L;){let z=!1,W=!1;if(U&&L){const G=y(U,L);G<0?W=!0:G>0&&(z=!0)}else U!=null?W=!0:z=!0;z?(v(L),L=Vl(P)):W?(w(U),U=Vl(S)):(U=Vl(S),L=Vl(P))}}(a,o,Hs,d=>{u.push(this.xn(e,t,r,d))},d=>{u.push(this.On(e,t,r,d))}),j.waitFor(u)}vn(e){let t=1;return Ul(e).Z({index:zC,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,a,o)=>{o.done(),t=a.sequenceNumber+1}).next(()=>t)}createRange(e,t,r){r=r.sort((u,d)=>Hs(u,d)).filter((u,d,p)=>!d||Hs(u,p[d-1])!==0);const a=[];a.push(e);for(const u of r){const d=Hs(u,e),p=Hs(u,t);if(d===0)a[0]=e.nn();else if(d>0&&p<0)a.push(u),a.push(u.nn());else if(p>0)break}a.push(t);const o=[];for(let u=0;u<a.length;u+=2){if(this.Nn(a[u],a[u+1]))return[];const d=[a[u].indexId,this.uid,a[u].arrayValue,a[u].directionalValue,np,[]],p=[a[u+1].indexId,this.uid,a[u+1].arrayValue,a[u+1].directionalValue,np,[]];o.push(IDBKeyRange.bound(d,p))}return o}Nn(e,t){return Hs(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(PA)}getMinOffset(e,t){return j.mapArray(this.dn(t),r=>this.An(e,r).next(a=>a||me())).next(PA)}}function DA(n){return Zt(n,jh)}function Ll(n){return Zt(n,Kp)}function ih(n){return Zt(n,TE)}function Ul(n){return Zt(n,$p)}function PA(n){ye(n.length!==0);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){const a=n[r].indexState.offset;yE(a,e)<0&&(e=a),t<a.largestBatchId&&(t=a.largestBatchId)}return new nr(e.readTime,e.documentKey,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xA={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},H1=41943040;class In{static withCacheSize(e){return new In(e,In.DEFAULT_COLLECTION_PERCENTILE,In.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G1(n,e,t){const r=n.store(Pr),a=n.store(cu),o=[],u=IDBKeyRange.only(t.batchId);let d=0;const p=r.Z({range:u},(y,v,w)=>(d++,w.delete()));o.push(p.next(()=>{ye(d===1)}));const m=[];for(const y of t.mutations){const v=LC(e,y.key.path,t.batchId);o.push(a.delete(v)),m.push(y.key)}return j.waitFor(o).next(()=>m)}function Jp(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw me();e=n.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */In.DEFAULT_COLLECTION_PERCENTILE=10,In.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,In.DEFAULT=new In(H1,In.DEFAULT_COLLECTION_PERCENTILE,In.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),In.DISABLED=new In(-1,0,0);class Bm{constructor(e,t,r,a){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=a,this.Bn={}}static It(e,t,r,a){ye(e.uid!=="");const o=e.isAuthenticated()?e.uid:"";return new Bm(o,t,r,a)}checkEmpty(e){let t=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Gs(e).Z({index:po,range:r},(a,o,u)=>{t=!1,u.done()}).next(()=>t)}addMutationBatch(e,t,r,a){const o=Hl(e),u=Gs(e);return u.add({}).next(d=>{ye(typeof d=="number");const p=new xE(d,t,r,a),m=function(S,P,U){const L=U.baseMutations.map(W=>Wh(S.Tt,W)),z=U.mutations.map(W=>Wh(S.Tt,W));return{userId:P,batchId:U.batchId,localWriteTimeMs:U.localWriteTime.toMillis(),baseMutations:L,mutations:z}}(this.serializer,this.userId,p),y=[];let v=new nt((w,S)=>Se(w.canonicalString(),S.canonicalString()));for(const w of a){const S=LC(this.userId,w.key.path,d);v=v.add(w.key.path.popLast()),y.push(u.put(m)),y.push(o.put(S,C4))}return v.forEach(w=>{y.push(this.indexManager.addToCollectionParentIndex(e,w))}),e.addOnCommittedListener(()=>{this.Bn[d]=p.keys()}),j.waitFor(y).next(()=>p)})}lookupMutationBatch(e,t){return Gs(e).get(t).next(r=>r?(ye(r.userId===this.userId),oo(this.serializer,r)):null)}Ln(e,t){return this.Bn[t]?j.resolve(this.Bn[t]):this.lookupMutationBatch(e,t).next(r=>{if(r){const a=r.keys();return this.Bn[t]=a,a}return null})}getNextMutationBatchAfterBatchId(e,t){const r=t+1,a=IDBKeyRange.lowerBound([this.userId,r]);let o=null;return Gs(e).Z({index:po,range:a},(u,d,p)=>{d.userId===this.userId&&(ye(d.batchId>=r),o=oo(this.serializer,d)),p.done()}).next(()=>o)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=na;return Gs(e).Z({index:po,range:t,reverse:!0},(a,o,u)=>{r=o.batchId,u.done()}).next(()=>r)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,na],[this.userId,Number.POSITIVE_INFINITY]);return Gs(e).G(po,t).next(r=>r.map(a=>oo(this.serializer,a)))}getAllMutationBatchesAffectingDocumentKey(e,t){const r=Ep(this.userId,t.path),a=IDBKeyRange.lowerBound(r),o=[];return Hl(e).Z({range:a},(u,d,p)=>{const[m,y,v]=u,w=si(y);if(m===this.userId&&t.path.isEqual(w))return Gs(e).get(v).next(S=>{if(!S)throw me();ye(S.userId===this.userId),o.push(oo(this.serializer,S))});p.done()}).next(()=>o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new nt(Se);const a=[];return t.forEach(o=>{const u=Ep(this.userId,o.path),d=IDBKeyRange.lowerBound(u),p=Hl(e).Z({range:d},(m,y,v)=>{const[w,S,P]=m,U=si(S);w===this.userId&&o.path.isEqual(U)?r=r.add(P):v.done()});a.push(p)}),j.waitFor(a).next(()=>this.kn(e,r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,a=r.length+1,o=Ep(this.userId,r),u=IDBKeyRange.lowerBound(o);let d=new nt(Se);return Hl(e).Z({range:u},(p,m,y)=>{const[v,w,S]=p,P=si(w);v===this.userId&&r.isPrefixOf(P)?P.length===a&&(d=d.add(S)):y.done()}).next(()=>this.kn(e,d))}kn(e,t){const r=[],a=[];return t.forEach(o=>{a.push(Gs(e).get(o).next(u=>{if(u===null)throw me();ye(u.userId===this.userId),r.push(oo(this.serializer,u))}))}),j.waitFor(a).next(()=>r)}removeMutationBatch(e,t){return G1(e.ue,this.userId,t).next(r=>(e.addOnCommittedListener(()=>{this.qn(t.batchId)}),j.forEach(r,a=>this.referenceDelegate.markPotentiallyOrphaned(e,a))))}qn(e){delete this.Bn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return j.resolve();const r=IDBKeyRange.lowerBound(function(u){return[u]}(this.userId)),a=[];return Hl(e).Z({range:r},(o,u,d)=>{if(o[0]===this.userId){const p=si(o[1]);a.push(p)}else d.done()}).next(()=>{ye(a.length===0)})})}containsKey(e,t){return $1(e,this.userId,t)}Qn(e){return K1(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:na,lastStreamToken:""})}}function $1(n,e,t){const r=Ep(e,t.path),a=r[1],o=IDBKeyRange.lowerBound(r);let u=!1;return Hl(n).Z({range:o,Y:!0},(d,p,m)=>{const[y,v,w]=d;y===e&&v===a&&(u=!0),m.done()}).next(()=>u)}function Gs(n){return Zt(n,Pr)}function Hl(n){return Zt(n,cu)}function K1(n){return Zt(n,Fh)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Un(){return new xo(0)}static Kn(){return new xo(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WB{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.Wn(e).next(t=>{const r=new xo(t.highestTargetId);return t.highestTargetId=r.next(),this.Gn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Wn(e).next(t=>Ee.fromTimestamp(new gt(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Wn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,r){return this.Wn(e).next(a=>(a.highestListenSequenceNumber=t,r&&(a.lastRemoteSnapshotVersion=r.toTimestamp()),t>a.highestListenSequenceNumber&&(a.highestListenSequenceNumber=t),this.Gn(e,a)))}addTargetData(e,t){return this.zn(e,t).next(()=>this.Wn(e).next(r=>(r.targetCount+=1,this.jn(t,r),this.Gn(e,r))))}updateTargetData(e,t){return this.zn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>Bl(e).delete(t.targetId)).next(()=>this.Wn(e)).next(r=>(ye(r.targetCount>0),r.targetCount-=1,this.Gn(e,r)))}removeTargets(e,t,r){let a=0;const o=[];return Bl(e).Z((u,d)=>{const p=mh(d);p.sequenceNumber<=t&&r.get(p.targetId)===null&&(a++,o.push(this.removeTargetData(e,p)))}).next(()=>j.waitFor(o)).next(()=>a)}forEachTarget(e,t){return Bl(e).Z((r,a)=>{const o=mh(a);t(o)})}Wn(e){return NA(e).get(Gp).next(t=>(ye(t!==null),t))}Gn(e,t){return NA(e).put(Gp,t)}zn(e,t){return Bl(e).put(F1(this.serializer,t))}jn(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.Wn(e).next(t=>t.targetCount)}getTargetData(e,t){const r=So(t),a=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let o=null;return Bl(e).Z({range:a,index:BC},(u,d,p)=>{const m=mh(d);md(t,m.target)&&(o=m,p.done())}).next(()=>o)}addMatchingKeys(e,t,r){const a=[],o=Ws(e);return t.forEach(u=>{const d=An(u.path);a.push(o.put({targetId:r,path:d})),a.push(this.referenceDelegate.addReference(e,r,u))}),j.waitFor(a)}removeMatchingKeys(e,t,r){const a=Ws(e);return j.forEach(t,o=>{const u=An(o.path);return j.waitFor([a.delete([r,u]),this.referenceDelegate.removeReference(e,r,o)])})}removeMatchingKeysForTargetId(e,t){const r=Ws(e),a=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(a)}getMatchingKeysForTargetId(e,t){const r=IDBKeyRange.bound([t],[t+1],!1,!0),a=Ws(e);let o=xe();return a.Z({range:r,Y:!0},(u,d,p)=>{const m=si(u[1]),y=new ce(m);o=o.add(y)}).next(()=>o)}containsKey(e,t){const r=An(t.path),a=IDBKeyRange.bound([r],[PC(r)],!1,!0);let o=0;return Ws(e).Z({index:EE,Y:!0,range:a},([u,d],p,m)=>{u!==0&&(o++,m.done())}).next(()=>o>0)}lt(e,t){return Bl(e).get(t).next(r=>r?mh(r):null)}}function Bl(n){return Zt(n,hu)}function NA(n){return Zt(n,To)}function Ws(n){return Zt(n,du)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OA="LruGarbageCollector",YB=1048576;function kA([n,e],[t,r]){const a=Se(n,t);return a===0?Se(e,r):a}class XB{constructor(e){this.Hn=e,this.buffer=new nt(kA),this.Jn=0}Yn(){return++this.Jn}Zn(e){const t=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();kA(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Q1{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){ne(OA,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Ea(t)?ne(OA,"Ignoring IndexedDB error during garbage collection: ",t):await va(t)}await this.er(3e5)})}}class ZB{constructor(e,t){this.tr=e,this.params=t}calculateTargetCount(e,t){return this.tr.nr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return j.resolve(qn.ae);const r=new XB(t);return this.tr.forEachTarget(e,a=>r.Zn(a.sequenceNumber)).next(()=>this.tr.rr(e,a=>r.Zn(a))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.tr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.tr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ne("LruGarbageCollector","Garbage collection skipped; disabled"),j.resolve(xA)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(ne("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),xA):this.ir(e,t))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,t){let r,a,o,u,d,p,m;const y=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(v=>(v>this.params.maximumSequenceNumbersToCollect?(ne("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${v}`),a=this.params.maximumSequenceNumbersToCollect):a=v,u=Date.now(),this.nthSequenceNumber(e,a))).next(v=>(r=v,d=Date.now(),this.removeTargets(e,r,t))).next(v=>(o=v,p=Date.now(),this.removeOrphanedDocuments(e,r))).next(v=>(m=Date.now(),zl()<=Be.DEBUG&&ne("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-y}ms
	Determined least recently used ${a} in `+(d-u)+`ms
	Removed ${o} targets in `+(p-d)+`ms
	Removed ${v} documents in `+(m-p)+`ms
Total Duration: ${m-y}ms`),j.resolve({didRun:!0,sequenceNumbersCollected:a,targetsRemoved:o,documentsRemoved:v})))}}function W1(n,e){return new ZB(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JB{constructor(e,t){this.db=e,this.garbageCollector=W1(this,t)}nr(e){const t=this.sr(e);return this.db.getTargetCache().getTargetCount(e).next(r=>t.next(a=>r+a))}sr(e){let t=0;return this.rr(e,r=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}rr(e,t){return this._r(e,(r,a)=>t(a))}addReference(e,t,r){return rp(e,r)}removeReference(e,t,r){return rp(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return rp(e,t)}ar(e,t){return function(a,o){let u=!1;return K1(a).X(d=>$1(a,d,o).next(p=>(p&&(u=!0),j.resolve(!p)))).next(()=>u)}(e,t)}removeOrphanedDocuments(e,t){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),a=[];let o=0;return this._r(e,(u,d)=>{if(d<=t){const p=this.ar(e,u).next(m=>{if(!m)return o++,r.getEntry(e,u).next(()=>(r.removeEntry(u,Ee.min()),Ws(e).delete(function(v){return[0,An(v.path)]}(u))))});a.push(p)}}).next(()=>j.waitFor(a)).next(()=>r.apply(e)).next(()=>o)}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return rp(e,t)}_r(e,t){const r=Ws(e);let a,o=qn.ae;return r.Z({index:EE},([u,d],{path:p,sequenceNumber:m})=>{u===0?(o!==qn.ae&&t(new ce(si(a)),o),o=m,a=p):o=qn.ae}).next(()=>{o!==qn.ae&&t(new ce(si(a)),o)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function rp(n,e){return Ws(n).put(function(r,a){return{targetId:0,path:An(r.path),sequenceNumber:a}}(e,n.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y1{constructor(){this.changes=new rs(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ht.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?j.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ez{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return no(e).put(r)}removeEntry(e,t,r){return no(e).delete(function(o,u){const d=o.path.toArray();return[d.slice(0,d.length-2),d[d.length-2],Xp(u),d[d.length-1]]}(t,r))}updateMetadata(e,t){return this.getMetadata(e).next(r=>(r.byteSize+=t,this.ur(e,r)))}getEntry(e,t){let r=ht.newInvalidDocument(t);return no(e).Z({index:Tp,range:IDBKeyRange.only(sh(t))},(a,o)=>{r=this.cr(t,o)}).next(()=>r)}lr(e,t){let r={size:0,document:ht.newInvalidDocument(t)};return no(e).Z({index:Tp,range:IDBKeyRange.only(sh(t))},(a,o)=>{r={document:this.cr(t,o),size:Jp(o)}}).next(()=>r)}getEntries(e,t){let r=Hn();return this.hr(e,t,(a,o)=>{const u=this.cr(a,o);r=r.insert(a,u)}).next(()=>r)}Pr(e,t){let r=Hn(),a=new lt(ce.comparator);return this.hr(e,t,(o,u)=>{const d=this.cr(o,u);r=r.insert(o,d),a=a.insert(o,Jp(u))}).next(()=>({documents:r,Tr:a}))}hr(e,t,r){if(t.isEmpty())return j.resolve();let a=new nt(LA);t.forEach(p=>a=a.add(p));const o=IDBKeyRange.bound(sh(a.first()),sh(a.last())),u=a.getIterator();let d=u.getNext();return no(e).Z({index:Tp,range:o},(p,m,y)=>{const v=ce.fromSegments([...m.prefixPath,m.collectionGroup,m.documentId]);for(;d&&LA(d,v)<0;)r(d,null),d=u.getNext();d&&d.isEqual(v)&&(r(d,m),d=u.hasNext()?u.getNext():null),d?y.W(sh(d)):y.done()}).next(()=>{for(;d;)r(d,null),d=u.hasNext()?u.getNext():null})}getDocumentsMatchingQuery(e,t,r,a,o){const u=t.path,d=[u.popLast().toArray(),u.lastSegment(),Xp(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],p=[u.popLast().toArray(),u.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return no(e).G(IDBKeyRange.bound(d,p,!0)).next(m=>{o==null||o.incrementDocumentReadCount(m.length);let y=Hn();for(const v of m){const w=this.cr(ce.fromSegments(v.prefixPath.concat(v.collectionGroup,v.documentId)),v);w.isFoundDocument()&&(_d(t,w)||a.has(w.key))&&(y=y.insert(w.key,w))}return y})}getAllFromCollectionGroup(e,t,r,a){let o=Hn();const u=MA(t,r),d=MA(t,nr.max());return no(e).Z({index:UC,range:IDBKeyRange.bound(u,d,!0)},(p,m,y)=>{const v=this.cr(ce.fromSegments(m.prefixPath.concat(m.collectionGroup,m.documentId)),m);o=o.insert(v.key,v),o.size===a&&y.done()}).next(()=>o)}newChangeBuffer(e){return new tz(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return VA(e).get(nv).next(t=>(ye(!!t),t))}ur(e,t){return VA(e).put(nv,t)}cr(e,t){if(t){const r=BB(this.serializer,t);if(!(r.isNoDocument()&&r.version.isEqual(Ee.min())))return r}return ht.newInvalidDocument(e)}}function X1(n){return new ez(n)}class tz extends Y1{constructor(e,t){super(),this.Ir=e,this.trackRemovals=t,this.Er=new rs(r=>r.toString(),(r,a)=>r.isEqual(a))}applyChanges(e){const t=[];let r=0,a=new nt((o,u)=>Se(o.canonicalString(),u.canonicalString()));return this.changes.forEach((o,u)=>{const d=this.Er.get(o);if(t.push(this.Ir.removeEntry(e,o,d.readTime)),u.isValidDocument()){const p=vA(this.Ir.serializer,u);a=a.add(o.path.popLast());const m=Jp(p);r+=m-d.size,t.push(this.Ir.addEntry(e,o,p))}else if(r-=d.size,this.trackRemovals){const p=vA(this.Ir.serializer,u.convertToNoDocument(Ee.min()));t.push(this.Ir.addEntry(e,o,p))}}),a.forEach(o=>{t.push(this.Ir.indexManager.addToCollectionParentIndex(e,o))}),t.push(this.Ir.updateMetadata(e,r)),j.waitFor(t)}getFromCache(e,t){return this.Ir.lr(e,t).next(r=>(this.Er.set(t,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,t){return this.Ir.Pr(e,t).next(({documents:r,Tr:a})=>(a.forEach((o,u)=>{this.Er.set(o,{size:u,readTime:r.get(o).readTime})}),r))}}function VA(n){return Zt(n,qh)}function no(n){return Zt(n,Hp)}function sh(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function MA(n,e){const t=e.documentKey.path.toArray();return[n,Xp(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function LA(n,e){const t=n.path.toArray(),r=e.path.toArray();let a=0;for(let o=0;o<t.length-2&&o<r.length-2;++o)if(a=Se(t[o],r[o]),a)return a;return a=Se(t.length,r.length),a||(a=Se(t[t.length-2],r[r.length-2]),a||Se(t[t.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nz{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z1{constructor(e,t,r,a){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=a}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(a=>(r=a,this.remoteDocumentCache.getEntry(e,t))).next(a=>(r!==null&&Sh(r.mutation,a,jn.empty(),gt.now()),a))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,xe()).next(()=>r))}getLocalViewOfDocuments(e,t,r=xe()){const a=ai();return this.populateOverlays(e,a,t).next(()=>this.computeViews(e,t,a,r).next(o=>{let u=fh();return o.forEach((d,p)=>{u=u.insert(d,p.overlayedDocument)}),u}))}getOverlayedDocuments(e,t){const r=ai();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,xe()))}populateOverlays(e,t,r){const a=[];return r.forEach(o=>{t.has(o)||a.push(o)}),this.documentOverlayCache.getOverlays(e,a).next(o=>{o.forEach((u,d)=>{t.set(u,d)})})}computeViews(e,t,r,a){let o=Hn();const u=Ah(),d=function(){return Ah()}();return t.forEach((p,m)=>{const y=r.get(m.key);a.has(m.key)&&(y===void 0||y.mutation instanceof is)?o=o.insert(m.key,m):y!==void 0?(u.set(m.key,y.mutation.getFieldMask()),Sh(y.mutation,m,y.mutation.getFieldMask(),gt.now())):u.set(m.key,jn.empty())}),this.recalculateAndSaveOverlays(e,o).next(p=>(p.forEach((m,y)=>u.set(m,y)),t.forEach((m,y)=>{var v;return d.set(m,new nz(y,(v=u.get(m))!==null&&v!==void 0?v:null))}),d))}recalculateAndSaveOverlays(e,t){const r=Ah();let a=new lt((u,d)=>u-d),o=xe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(u=>{for(const d of u)d.keys().forEach(p=>{const m=t.get(p);if(m===null)return;let y=r.get(p)||jn.empty();y=d.applyToLocalView(m,y),r.set(p,y);const v=(a.get(d.batchId)||xe()).add(p);a=a.insert(d.batchId,v)})}).next(()=>{const u=[],d=a.getReverseIterator();for(;d.hasNext();){const p=d.getNext(),m=p.key,y=p.value,v=m1();y.forEach(w=>{if(!o.has(w)){const S=w1(t.get(w),r.get(w));S!==null&&v.set(w,S),o=o.add(w)}}),u.push(this.documentOverlayCache.saveOverlays(e,m,v))}return j.waitFor(u)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,a){return function(u){return ce.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):RE(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,a):this.getDocumentsMatchingCollectionQuery(e,t,r,a)}getNextDocuments(e,t,r,a){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,a).next(o=>{const u=a-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,a-o.size):j.resolve(ai());let d=uu,p=o;return u.next(m=>j.forEach(m,(y,v)=>(d<v.largestBatchId&&(d=v.largestBatchId),o.get(y)?j.resolve():this.remoteDocumentCache.getEntry(e,y).next(w=>{p=p.insert(y,w)}))).next(()=>this.populateOverlays(e,m,o)).next(()=>this.computeViews(e,p,m,xe())).next(y=>({batchId:d,changes:p1(y)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ce(t)).next(r=>{let a=fh();return r.isFoundDocument()&&(a=a.insert(r.key,r)),a})}getDocumentsMatchingCollectionGroupQuery(e,t,r,a){const o=t.collectionGroup;let u=fh();return this.indexManager.getCollectionParents(e,o).next(d=>j.forEach(d,p=>{const m=function(v,w){return new ns(w,null,v.explicitOrderBy.slice(),v.filters.slice(),v.limit,v.limitType,v.startAt,v.endAt)}(t,p.child(o));return this.getDocumentsMatchingCollectionQuery(e,m,r,a).next(y=>{y.forEach((v,w)=>{u=u.insert(v,w)})})}).next(()=>u))}getDocumentsMatchingCollectionQuery(e,t,r,a){let o;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(u=>(o=u,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,o,a))).next(u=>{o.forEach((p,m)=>{const y=m.getKey();u.get(y)===null&&(u=u.insert(y,ht.newInvalidDocument(y)))});let d=fh();return u.forEach((p,m)=>{const y=o.get(p);y!==void 0&&Sh(y.mutation,m,jn.empty(),gt.now()),_d(t,m)&&(d=d.insert(p,m))}),d})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rz{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,t){return j.resolve(this.dr.get(t))}saveBundleMetadata(e,t){return this.dr.set(t.id,function(a){return{id:a.id,version:a.version,createTime:Mt(a.createTime)}}(t)),j.resolve()}getNamedQuery(e,t){return j.resolve(this.Ar.get(t))}saveNamedQuery(e,t){return this.Ar.set(t.name,function(a){return{name:a.name,query:ME(a.bundledQuery),readTime:Mt(a.readTime)}}(t)),j.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iz{constructor(){this.overlays=new lt(ce.comparator),this.Rr=new Map}getOverlay(e,t){return j.resolve(this.overlays.get(t))}getOverlays(e,t){const r=ai();return j.forEach(t,a=>this.getOverlay(e,a).next(o=>{o!==null&&r.set(a,o)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((a,o)=>{this.Et(e,t,o)}),j.resolve()}removeOverlaysForBatchId(e,t,r){const a=this.Rr.get(r);return a!==void 0&&(a.forEach(o=>this.overlays=this.overlays.remove(o)),this.Rr.delete(r)),j.resolve()}getOverlaysForCollection(e,t,r){const a=ai(),o=t.length+1,u=new ce(t.child("")),d=this.overlays.getIteratorFrom(u);for(;d.hasNext();){const p=d.getNext().value,m=p.getKey();if(!t.isPrefixOf(m.path))break;m.path.length===o&&p.largestBatchId>r&&a.set(p.getKey(),p)}return j.resolve(a)}getOverlaysForCollectionGroup(e,t,r,a){let o=new lt((m,y)=>m-y);const u=this.overlays.getIterator();for(;u.hasNext();){const m=u.getNext().value;if(m.getKey().getCollectionGroup()===t&&m.largestBatchId>r){let y=o.get(m.largestBatchId);y===null&&(y=ai(),o=o.insert(m.largestBatchId,y)),y.set(m.getKey(),m)}}const d=ai(),p=o.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((m,y)=>d.set(m,y)),!(d.size()>=a)););return j.resolve(d)}Et(e,t,r){const a=this.overlays.get(r.key);if(a!==null){const u=this.Rr.get(a.largestBatchId).delete(r.key);this.Rr.set(a.largestBatchId,u)}this.overlays=this.overlays.insert(r.key,new OE(t,r));let o=this.Rr.get(t);o===void 0&&(o=xe(),this.Rr.set(t,o)),this.Rr.set(t,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sz{constructor(){this.sessionToken=Dt.EMPTY_BYTE_STRING}getSessionToken(e){return j.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,j.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BE{constructor(){this.Vr=new nt(ln.mr),this.gr=new nt(ln.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,t){const r=new ln(e,t);this.Vr=this.Vr.add(r),this.gr=this.gr.add(r)}yr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.wr(new ln(e,t))}Sr(e,t){e.forEach(r=>this.removeReference(r,t))}br(e){const t=new ce(new ze([])),r=new ln(t,e),a=new ln(t,e+1),o=[];return this.gr.forEachInRange([r,a],u=>{this.wr(u),o.push(u.key)}),o}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const t=new ce(new ze([])),r=new ln(t,e),a=new ln(t,e+1);let o=xe();return this.gr.forEachInRange([r,a],u=>{o=o.add(u.key)}),o}containsKey(e){const t=new ln(e,0),r=this.Vr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class ln{constructor(e,t){this.key=e,this.Cr=t}static mr(e,t){return ce.comparator(e.key,t.key)||Se(e.Cr,t.Cr)}static pr(e,t){return Se(e.Cr,t.Cr)||ce.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class az{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Fr=1,this.Mr=new nt(ln.mr)}checkEmpty(e){return j.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,a){const o=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new xE(o,t,r,a);this.mutationQueue.push(u);for(const d of a)this.Mr=this.Mr.add(new ln(d.key,o)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return j.resolve(u)}lookupMutationBatch(e,t){return j.resolve(this.Or(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,a=this.Nr(r),o=a<0?0:a;return j.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return j.resolve(this.mutationQueue.length===0?na:this.Fr-1)}getAllMutationBatches(e){return j.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new ln(t,0),a=new ln(t,Number.POSITIVE_INFINITY),o=[];return this.Mr.forEachInRange([r,a],u=>{const d=this.Or(u.Cr);o.push(d)}),j.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new nt(Se);return t.forEach(a=>{const o=new ln(a,0),u=new ln(a,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([o,u],d=>{r=r.add(d.Cr)})}),j.resolve(this.Br(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,a=r.length+1;let o=r;ce.isDocumentKey(o)||(o=o.child(""));const u=new ln(new ce(o),0);let d=new nt(Se);return this.Mr.forEachWhile(p=>{const m=p.key.path;return!!r.isPrefixOf(m)&&(m.length===a&&(d=d.add(p.Cr)),!0)},u),j.resolve(this.Br(d))}Br(e){const t=[];return e.forEach(r=>{const a=this.Or(r);a!==null&&t.push(a)}),t}removeMutationBatch(e,t){ye(this.Lr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Mr;return j.forEach(t.mutations,a=>{const o=new ln(a.key,t.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,a.key)}).next(()=>{this.Mr=r})}qn(e){}containsKey(e,t){const r=new ln(t,0),a=this.Mr.firstAfterOrEqual(r);return j.resolve(t.isEqual(a&&a.key))}performConsistencyCheck(e){return this.mutationQueue.length,j.resolve()}Lr(e,t){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const t=this.Nr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oz{constructor(e){this.kr=e,this.docs=function(){return new lt(ce.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,a=this.docs.get(r),o=a?a.size:0,u=this.kr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:u}),this.size+=u-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return j.resolve(r?r.document.mutableCopy():ht.newInvalidDocument(t))}getEntries(e,t){let r=Hn();return t.forEach(a=>{const o=this.docs.get(a);r=r.insert(a,o?o.document.mutableCopy():ht.newInvalidDocument(a))}),j.resolve(r)}getDocumentsMatchingQuery(e,t,r,a){let o=Hn();const u=t.path,d=new ce(u.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(d);for(;p.hasNext();){const{key:m,value:{document:y}}=p.getNext();if(!u.isPrefixOf(m.path))break;m.path.length>u.length+1||yE(NC(y),r)<=0||(a.has(y.key)||_d(t,y))&&(o=o.insert(y.key,y.mutableCopy()))}return j.resolve(o)}getAllFromCollectionGroup(e,t,r,a){me()}qr(e,t){return j.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new lz(this)}getSize(e){return j.resolve(this.size)}}class lz extends Y1{constructor(e){super(),this.Ir=e}applyChanges(e){const t=[];return this.changes.forEach((r,a)=>{a.isValidDocument()?t.push(this.Ir.addEntry(e,a)):this.Ir.removeEntry(r)}),j.waitFor(t)}getFromCache(e,t){return this.Ir.getEntry(e,t)}getAllFromCache(e,t){return this.Ir.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uz{constructor(e){this.persistence=e,this.Qr=new rs(t=>So(t),md),this.lastRemoteSnapshotVersion=Ee.min(),this.highestTargetId=0,this.$r=0,this.Ur=new BE,this.targetCount=0,this.Kr=xo.Un()}forEachTarget(e,t){return this.Qr.forEach((r,a)=>t(a)),j.resolve()}getLastRemoteSnapshotVersion(e){return j.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return j.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Kr.next(),j.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.$r&&(this.$r=t),j.resolve()}zn(e){this.Qr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Kr=new xo(t),this.highestTargetId=t),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,t){return this.zn(t),this.targetCount+=1,j.resolve()}updateTargetData(e,t){return this.zn(t),j.resolve()}removeTargetData(e,t){return this.Qr.delete(t.target),this.Ur.br(t.targetId),this.targetCount-=1,j.resolve()}removeTargets(e,t,r){let a=0;const o=[];return this.Qr.forEach((u,d)=>{d.sequenceNumber<=t&&r.get(d.targetId)===null&&(this.Qr.delete(u),o.push(this.removeMatchingKeysForTargetId(e,d.targetId)),a++)}),j.waitFor(o).next(()=>a)}getTargetCount(e){return j.resolve(this.targetCount)}getTargetData(e,t){const r=this.Qr.get(t)||null;return j.resolve(r)}addMatchingKeys(e,t,r){return this.Ur.yr(t,r),j.resolve()}removeMatchingKeys(e,t,r){this.Ur.Sr(t,r);const a=this.persistence.referenceDelegate,o=[];return a&&t.forEach(u=>{o.push(a.markPotentiallyOrphaned(e,u))}),j.waitFor(o)}removeMatchingKeysForTargetId(e,t){return this.Ur.br(t),j.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Ur.vr(t);return j.resolve(r)}containsKey(e,t){return j.resolve(this.Ur.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zE{constructor(e,t){this.Wr={},this.overlays={},this.Gr=new qn(0),this.zr=!1,this.zr=!0,this.jr=new sz,this.referenceDelegate=e(this),this.Hr=new uz(this),this.indexManager=new KB,this.remoteDocumentCache=function(a){return new oz(a)}(r=>this.referenceDelegate.Jr(r)),this.serializer=new z1(t),this.Yr=new rz(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new iz,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Wr[e.toKey()];return r||(r=new az(t,this.referenceDelegate),this.Wr[e.toKey()]=r),r}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,t,r){ne("MemoryPersistence","Starting transaction:",e);const a=new cz(this.Gr.next());return this.referenceDelegate.Zr(),r(a).next(o=>this.referenceDelegate.Xr(a).next(()=>o)).toPromise().then(o=>(a.raiseOnCommittedEvent(),o))}ei(e,t){return j.or(Object.values(this.Wr).map(r=>()=>r.containsKey(e,t)))}}class cz extends kC{constructor(e){super(),this.currentSequenceNumber=e}}class zm{constructor(e){this.persistence=e,this.ti=new BE,this.ni=null}static ri(e){return new zm(e)}get ii(){if(this.ni)return this.ni;throw me()}addReference(e,t,r){return this.ti.addReference(r,t),this.ii.delete(r.toString()),j.resolve()}removeReference(e,t,r){return this.ti.removeReference(r,t),this.ii.add(r.toString()),j.resolve()}markPotentiallyOrphaned(e,t){return this.ii.add(t.toString()),j.resolve()}removeTarget(e,t){this.ti.br(t.targetId).forEach(a=>this.ii.add(a.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(a=>{a.forEach(o=>this.ii.add(o.toString()))}).next(()=>r.removeTargetData(e,t))}Zr(){this.ni=new Set}Xr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return j.forEach(this.ii,r=>{const a=ce.fromPath(r);return this.si(e,a).next(o=>{o||t.removeEntry(a,Ee.min())})}).next(()=>(this.ni=null,t.apply(e)))}updateLimboDocument(e,t){return this.si(e,t).next(r=>{r?this.ii.delete(t.toString()):this.ii.add(t.toString())})}Jr(e){return 0}si(e,t){return j.or([()=>j.resolve(this.ti.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.ei(e,t)])}}class em{constructor(e,t){this.persistence=e,this.oi=new rs(r=>An(r.path),(r,a)=>r.isEqual(a)),this.garbageCollector=W1(this,t)}static ri(e,t){return new em(e,t)}Zr(){}Xr(e){return j.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}nr(e){const t=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(a=>r+a))}sr(e){let t=0;return this.rr(e,r=>{t++}).next(()=>t)}rr(e,t){return j.forEach(this.oi,(r,a)=>this.ar(e,r,a).next(o=>o?j.resolve():t(a)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const a=this.persistence.getRemoteDocumentCache(),o=a.newChangeBuffer();return a.qr(e,u=>this.ar(e,u,t).next(d=>{d||(r++,o.removeEntry(u,Ee.min()))})).next(()=>o.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.oi.set(t,e.currentSequenceNumber),j.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.oi.set(r,e.currentSequenceNumber),j.resolve()}removeReference(e,t,r){return this.oi.set(r,e.currentSequenceNumber),j.resolve()}updateLimboDocument(e,t){return this.oi.set(t,e.currentSequenceNumber),j.resolve()}Jr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=bp(e.data.value)),t}ar(e,t,r){return j.or([()=>this.persistence.ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const a=this.oi.get(t);return j.resolve(a!==void 0&&a>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hz{constructor(e){this.serializer=e}B(e,t,r,a){const o=new Dm("createOrUpgrade",t);r<1&&a>=1&&(function(p){p.createObjectStore(pd)}(e),function(p){p.createObjectStore(Fh,{keyPath:R4}),p.createObjectStore(Pr,{keyPath:WI,autoIncrement:!0}).createIndex(po,YI,{unique:!0}),p.createObjectStore(cu)}(e),UA(e),function(p){p.createObjectStore(so)}(e));let u=j.resolve();return r<3&&a>=3&&(r!==0&&(function(p){p.deleteObjectStore(du),p.deleteObjectStore(hu),p.deleteObjectStore(To)}(e),UA(e)),u=u.next(()=>function(p){const m=p.store(To),y={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:Ee.min().toTimestamp(),targetCount:0};return m.put(Gp,y)}(o))),r<4&&a>=4&&(r!==0&&(u=u.next(()=>function(p,m){return m.store(Pr).G().next(v=>{p.deleteObjectStore(Pr),p.createObjectStore(Pr,{keyPath:WI,autoIncrement:!0}).createIndex(po,YI,{unique:!0});const w=m.store(Pr),S=v.map(P=>w.put(P));return j.waitFor(S)})}(e,o))),u=u.next(()=>{(function(p){p.createObjectStore(fu,{keyPath:M4})})(e)})),r<5&&a>=5&&(u=u.next(()=>this._i(o))),r<6&&a>=6&&(u=u.next(()=>(function(p){p.createObjectStore(qh)}(e),this.ai(o)))),r<7&&a>=7&&(u=u.next(()=>this.ui(o))),r<8&&a>=8&&(u=u.next(()=>this.ci(e,o))),r<9&&a>=9&&(u=u.next(()=>{(function(p){p.objectStoreNames.contains("remoteDocumentChanges")&&p.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&a>=10&&(u=u.next(()=>this.li(o))),r<11&&a>=11&&(u=u.next(()=>{(function(p){p.createObjectStore(Pm,{keyPath:L4})})(e),function(p){p.createObjectStore(xm,{keyPath:U4})}(e)})),r<12&&a>=12&&(u=u.next(()=>{(function(p){const m=p.createObjectStore(Nm,{keyPath:G4});m.createIndex(iv,$4,{unique:!1}),m.createIndex(qC,K4,{unique:!1})})(e)})),r<13&&a>=13&&(u=u.next(()=>function(p){const m=p.createObjectStore(Hp,{keyPath:D4});m.createIndex(Tp,P4),m.createIndex(UC,x4)}(e)).next(()=>this.hi(e,o)).next(()=>e.deleteObjectStore(so))),r<14&&a>=14&&(u=u.next(()=>this.Pi(e,o))),r<15&&a>=15&&(u=u.next(()=>function(p){p.createObjectStore(TE,{keyPath:B4,autoIncrement:!0}).createIndex(rv,z4,{unique:!1}),p.createObjectStore($p,{keyPath:F4}).createIndex(zC,q4,{unique:!1}),p.createObjectStore(Kp,{keyPath:j4}).createIndex(FC,H4,{unique:!1})}(e))),r<16&&a>=16&&(u=u.next(()=>{t.objectStore($p).clear()}).next(()=>{t.objectStore(Kp).clear()})),r<17&&a>=17&&(u=u.next(()=>{(function(p){p.createObjectStore(wE,{keyPath:Q4})})(e)})),u}ai(e){let t=0;return e.store(so).Z((r,a)=>{t+=Jp(a)}).next(()=>{const r={byteSize:t};return e.store(qh).put(nv,r)})}_i(e){const t=e.store(Fh),r=e.store(Pr);return t.G().next(a=>j.forEach(a,o=>{const u=IDBKeyRange.bound([o.userId,na],[o.userId,o.lastAcknowledgedBatchId]);return r.G(po,u).next(d=>j.forEach(d,p=>{ye(p.userId===o.userId);const m=oo(this.serializer,p);return G1(e,o.userId,m).next(()=>{})}))}))}ui(e){const t=e.store(du),r=e.store(so);return e.store(To).get(Gp).next(a=>{const o=[];return r.Z((u,d)=>{const p=new ze(u),m=function(v){return[0,An(v)]}(p);o.push(t.get(m).next(y=>y?j.resolve():(v=>t.put({targetId:0,path:An(v),sequenceNumber:a.highestListenSequenceNumber}))(p)))}).next(()=>j.waitFor(o))})}ci(e,t){e.createObjectStore(jh,{keyPath:V4});const r=t.store(jh),a=new UE,o=u=>{if(a.add(u)){const d=u.lastSegment(),p=u.popLast();return r.put({collectionId:d,parent:An(p)})}};return t.store(so).Z({Y:!0},(u,d)=>{const p=new ze(u);return o(p.popLast())}).next(()=>t.store(cu).Z({Y:!0},([u,d,p],m)=>{const y=si(d);return o(y.popLast())}))}li(e){const t=e.store(hu);return t.Z((r,a)=>{const o=mh(a),u=F1(this.serializer,o);return t.put(u)})}hi(e,t){const r=t.store(so),a=[];return r.Z((o,u)=>{const d=t.store(Hp),p=function(v){return v.document?new ce(ze.fromString(v.document.name).popFirst(5)):v.noDocument?ce.fromSegments(v.noDocument.path):v.unknownDocument?ce.fromSegments(v.unknownDocument.path):me()}(u).path.toArray(),m={prefixPath:p.slice(0,p.length-2),collectionGroup:p[p.length-2],documentId:p[p.length-1],readTime:u.readTime||[0,0],unknownDocument:u.unknownDocument,noDocument:u.noDocument,document:u.document,hasCommittedMutations:!!u.hasCommittedMutations};a.push(d.put(m))}).next(()=>j.waitFor(a))}Pi(e,t){const r=t.store(Pr),a=X1(this.serializer),o=new zE(zm.ri,this.serializer.Tt);return r.G().next(u=>{const d=new Map;return u.forEach(p=>{var m;let y=(m=d.get(p.userId))!==null&&m!==void 0?m:xe();oo(this.serializer,p).keys().forEach(v=>y=y.add(v)),d.set(p.userId,y)}),j.forEach(d,(p,m)=>{const y=new cn(m),v=Um.It(this.serializer,y),w=o.getIndexManager(y),S=Bm.It(y,this.serializer,w,o.referenceDelegate);return new Z1(a,S,v,w).recalculateAndSaveOverlaysForDocumentKeys(new sv(t,qn.ae),p).next()})})}}function UA(n){n.createObjectStore(du,{keyPath:O4}).createIndex(EE,k4,{unique:!0}),n.createObjectStore(hu,{keyPath:"targetId"}).createIndex(BC,N4,{unique:!0}),n.createObjectStore(To)}const $s="IndexedDbPersistence",Iy=18e5,Ay=5e3,Sy="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",J1="main";class FE{constructor(e,t,r,a,o,u,d,p,m,y,v=17){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.Ti=o,this.window=u,this.document=d,this.Ii=m,this.Ei=y,this.di=v,this.Gr=null,this.zr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Ai=null,this.inForeground=!1,this.Ri=null,this.Vi=null,this.mi=Number.NEGATIVE_INFINITY,this.fi=w=>Promise.resolve(),!FE.D())throw new ee(K.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new JB(this,a),this.gi=t+J1,this.serializer=new z1(p),this.pi=new oi(this.gi,this.di,new hz(this.serializer)),this.jr=new FB,this.Hr=new WB(this.referenceDelegate,this.serializer),this.remoteDocumentCache=X1(this.serializer),this.Yr=new zB,this.window&&this.window.localStorage?this.yi=this.window.localStorage:(this.yi=null,y===!1&&Vt($s,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.wi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new ee(K.FAILED_PRECONDITION,Sy);return this.Si(),this.bi(),this.Di(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Hr.getHighestSequenceNumber(e))}).then(e=>{this.Gr=new qn(e,this.Ii)}).then(()=>{this.zr=!0}).catch(e=>(this.pi&&this.pi.close(),Promise.reject(e)))}Ci(e){return this.fi=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.pi.k(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Ti.enqueueAndForget(async()=>{this.started&&await this.wi()}))}wi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>ip(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.Fi(e).next(t=>{t||(this.isPrimary=!1,this.Ti.enqueueRetryable(()=>this.fi(!1)))})}).next(()=>this.Mi(e)).next(t=>this.isPrimary&&!t?this.xi(e).next(()=>!1):!!t&&this.Oi(e).next(()=>!0))).catch(e=>{if(Ea(e))return ne($s,"Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return ne($s,"Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Ti.enqueueRetryable(()=>this.fi(e)),this.isPrimary=e})}Fi(e){return ah(e).get(kl).next(t=>j.resolve(this.Ni(t)))}Bi(e){return ip(e).delete(this.clientId)}async Li(){if(this.isPrimary&&!this.ki(this.mi,Iy)){this.mi=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const r=Zt(t,fu);return r.G().next(a=>{const o=this.qi(a,Iy),u=a.filter(d=>o.indexOf(d)===-1);return j.forEach(u,d=>r.delete(d.clientId)).next(()=>u)})}).catch(()=>[]);if(this.yi)for(const t of e)this.yi.removeItem(this.Qi(t.clientId))}}Di(){this.Vi=this.Ti.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.wi().then(()=>this.Li()).then(()=>this.Di()))}Ni(e){return!!e&&e.ownerId===this.clientId}Mi(e){return this.Ei?j.resolve(!0):ah(e).get(kl).next(t=>{if(t!==null&&this.ki(t.leaseTimestampMs,Ay)&&!this.$i(t.ownerId)){if(this.Ni(t)&&this.networkEnabled)return!0;if(!this.Ni(t)){if(!t.allowTabSynchronization)throw new ee(K.FAILED_PRECONDITION,Sy);return!1}}return!(!this.networkEnabled||!this.inForeground)||ip(e).G().next(r=>this.qi(r,Ay).find(a=>{if(this.clientId!==a.clientId){const o=!this.networkEnabled&&a.networkEnabled,u=!this.inForeground&&a.inForeground,d=this.networkEnabled===a.networkEnabled;if(o||u&&d)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&ne($s,`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.zr=!1,this.Ui(),this.Vi&&(this.Vi.cancel(),this.Vi=null),this.Ki(),this.Wi(),await this.pi.runTransaction("shutdown","readwrite",[pd,fu],e=>{const t=new sv(e,qn.ae);return this.xi(t).next(()=>this.Bi(t))}),this.pi.close(),this.Gi()}qi(e,t){return e.filter(r=>this.ki(r.updateTimeMs,t)&&!this.$i(r.clientId))}zi(){return this.runTransaction("getActiveClients","readonly",e=>ip(e).G().next(t=>this.qi(t,Iy).map(r=>r.clientId)))}get started(){return this.zr}getGlobalsCache(){return this.jr}getMutationQueue(e,t){return Bm.It(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new QB(e,this.serializer.Tt.databaseId)}getDocumentOverlayCache(e){return Um.It(this.serializer,e)}getBundleCache(){return this.Yr}runTransaction(e,t,r){ne($s,"Starting transaction:",e);const a=t==="readonly"?"readonly":"readwrite",o=function(p){return p===17?X4:p===16?Y4:p===15?bE:p===14?GC:p===13?HC:p===12?W4:p===11?jC:void me()}(this.di);let u;return this.pi.runTransaction(e,a,o,d=>(u=new sv(d,this.Gr?this.Gr.next():qn.ae),t==="readwrite-primary"?this.Fi(u).next(p=>!!p||this.Mi(u)).next(p=>{if(!p)throw Vt(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Ti.enqueueRetryable(()=>this.fi(!1)),new ee(K.FAILED_PRECONDITION,OC);return r(u)}).next(p=>this.Oi(u).next(()=>p)):this.ji(u).next(()=>r(u)))).then(d=>(u.raiseOnCommittedEvent(),d))}ji(e){return ah(e).get(kl).next(t=>{if(t!==null&&this.ki(t.leaseTimestampMs,Ay)&&!this.$i(t.ownerId)&&!this.Ni(t)&&!(this.Ei||this.allowTabSynchronization&&t.allowTabSynchronization))throw new ee(K.FAILED_PRECONDITION,Sy)})}Oi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return ah(e).put(kl,t)}static D(){return oi.D()}xi(e){const t=ah(e);return t.get(kl).next(r=>this.Ni(r)?(ne($s,"Releasing primary lease."),t.delete(kl)):j.resolve())}ki(e,t){const r=Date.now();return!(e<r-t)&&(!(e>r)||(Vt(`Detected an update time that is in the future: ${e} > ${r}`),!1))}Si(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ri=()=>{this.Ti.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.wi()))},this.document.addEventListener("visibilitychange",this.Ri),this.inForeground=this.document.visibilityState==="visible")}Ki(){this.Ri&&(this.document.removeEventListener("visibilitychange",this.Ri),this.Ri=null)}bi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Ai=()=>{this.Ui();const t=/(?:Version|Mobile)\/1[456]/;uR()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.Ti.enterRestrictedMode(!0),this.Ti.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Ai))}Wi(){this.Ai&&(this.window.removeEventListener("pagehide",this.Ai),this.Ai=null)}$i(e){var t;try{const r=((t=this.yi)===null||t===void 0?void 0:t.getItem(this.Qi(e)))!==null;return ne($s,`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return Vt($s,"Failed to get zombied client id.",r),!1}}Ui(){if(this.yi)try{this.yi.setItem(this.Qi(this.clientId),String(Date.now()))}catch(e){Vt("Failed to set zombie client id.",e)}}Gi(){if(this.yi)try{this.yi.removeItem(this.Qi(this.clientId))}catch{}}Qi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function ah(n){return Zt(n,pd)}function ip(n){return Zt(n,fu)}function qE(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jE{constructor(e,t,r,a){this.targetId=e,this.fromCache=t,this.Hi=r,this.Ji=a}static Yi(e,t){let r=xe(),a=xe();for(const o of t.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:a=a.add(o.doc.key)}return new jE(e,t.fromCache,r,a)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dz{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eD{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return uR()?8:VC(wt())>0?6:4}()}initialize(e,t){this.ns=e,this.indexManager=t,this.Zi=!0}getDocumentsMatchingQuery(e,t,r,a){const o={result:null};return this.rs(e,t).next(u=>{o.result=u}).next(()=>{if(!o.result)return this.ss(e,t,a,r).next(u=>{o.result=u})}).next(()=>{if(o.result)return;const u=new dz;return this._s(e,t,u).next(d=>{if(o.result=d,this.Xi)return this.us(e,t,u,d.size)})}).next(()=>o.result)}us(e,t,r,a){return r.documentReadCount<this.es?(zl()<=Be.DEBUG&&ne("QueryEngine","SDK will not create cache indexes for query:",Fl(t),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),j.resolve()):(zl()<=Be.DEBUG&&ne("QueryEngine","Query:",Fl(t),"scans",r.documentReadCount,"local documents and returns",a,"documents as results."),r.documentReadCount>this.ts*a?(zl()<=Be.DEBUG&&ne("QueryEngine","The SDK decides to create cache indexes for query:",Fl(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Vn(t))):j.resolve())}rs(e,t){if(uA(t))return j.resolve(null);let r=Vn(t);return this.indexManager.getIndexType(e,r).next(a=>a===0?null:(t.limit!==null&&a===1&&(t=Yp(t,null,"F"),r=Vn(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(o=>{const u=xe(...o);return this.ns.getDocuments(e,u).next(d=>this.indexManager.getMinOffset(e,r).next(p=>{const m=this.cs(t,d);return this.ls(t,m,u,p.readTime)?this.rs(e,Yp(t,null,"F")):this.hs(e,m,t,p)}))})))}ss(e,t,r,a){return uA(t)||a.isEqual(Ee.min())?j.resolve(null):this.ns.getDocuments(e,r).next(o=>{const u=this.cs(t,o);return this.ls(t,u,r,a)?j.resolve(null):(zl()<=Be.DEBUG&&ne("QueryEngine","Re-using previous result from %s to execute query: %s",a.toString(),Fl(t)),this.hs(e,u,t,xC(a,uu)).next(d=>d))})}cs(e,t){let r=new nt(d1(e));return t.forEach((a,o)=>{_d(e,o)&&(r=r.add(o))}),r}ls(e,t,r,a){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const o=e.limitType==="F"?t.last():t.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(a)>0)}_s(e,t,r){return zl()<=Be.DEBUG&&ne("QueryEngine","Using full collection scan to execute query:",Fl(t)),this.ns.getDocumentsMatchingQuery(e,t,nr.min(),r)}hs(e,t,r,a){return this.ns.getDocumentsMatchingQuery(e,r,a).next(o=>(t.forEach(u=>{o=o.insert(u.key,u)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HE="LocalStore",fz=3e8;class pz{constructor(e,t,r,a){this.persistence=e,this.Ps=t,this.serializer=a,this.Ts=new lt(Se),this.Is=new rs(o=>So(o),md),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(r)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Z1(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ts))}}function tD(n,e,t,r){return new pz(n,e,t,r)}async function nD(n,e){const t=de(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let a;return t.mutationQueue.getAllMutationBatches(r).next(o=>(a=o,t.As(e),t.mutationQueue.getAllMutationBatches(r))).next(o=>{const u=[],d=[];let p=xe();for(const m of a){u.push(m.batchId);for(const y of m.mutations)p=p.add(y.key)}for(const m of o){d.push(m.batchId);for(const y of m.mutations)p=p.add(y.key)}return t.localDocuments.getDocuments(r,p).next(m=>({Rs:m,removedBatchIds:u,addedBatchIds:d}))})})}function mz(n,e){const t=de(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const a=e.batch.keys(),o=t.ds.newChangeBuffer({trackRemovals:!0});return function(d,p,m,y){const v=m.batch,w=v.keys();let S=j.resolve();return w.forEach(P=>{S=S.next(()=>y.getEntry(p,P)).next(U=>{const L=m.docVersions.get(P);ye(L!==null),U.version.compareTo(L)<0&&(v.applyToRemoteDocument(U,m),U.isValidDocument()&&(U.setReadTime(m.commitVersion),y.addEntry(U)))})}),S.next(()=>d.mutationQueue.removeMutationBatch(p,v))}(t,r,e,o).next(()=>o.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,a,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(d){let p=xe();for(let m=0;m<d.mutationResults.length;++m)d.mutationResults[m].transformResults.length>0&&(p=p.add(d.batch.mutations[m].key));return p}(e))).next(()=>t.localDocuments.getDocuments(r,a))})}function rD(n){const e=de(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Hr.getLastRemoteSnapshotVersion(t))}function gz(n,e){const t=de(n),r=e.snapshotVersion;let a=t.Ts;return t.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const u=t.ds.newChangeBuffer({trackRemovals:!0});a=t.Ts;const d=[];e.targetChanges.forEach((y,v)=>{const w=a.get(v);if(!w)return;d.push(t.Hr.removeMatchingKeys(o,y.removedDocuments,v).next(()=>t.Hr.addMatchingKeys(o,y.addedDocuments,v)));let S=w.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(v)!==null?S=S.withResumeToken(Dt.EMPTY_BYTE_STRING,Ee.min()).withLastLimboFreeSnapshotVersion(Ee.min()):y.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(y.resumeToken,r)),a=a.insert(v,S),function(U,L,z){return U.resumeToken.approximateByteSize()===0||L.snapshotVersion.toMicroseconds()-U.snapshotVersion.toMicroseconds()>=fz?!0:z.addedDocuments.size+z.modifiedDocuments.size+z.removedDocuments.size>0}(w,S,y)&&d.push(t.Hr.updateTargetData(o,S))});let p=Hn(),m=xe();if(e.documentUpdates.forEach(y=>{e.resolvedLimboDocuments.has(y)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(o,y))}),d.push(iD(o,u,e.documentUpdates).next(y=>{p=y.Vs,m=y.fs})),!r.isEqual(Ee.min())){const y=t.Hr.getLastRemoteSnapshotVersion(o).next(v=>t.Hr.setTargetsMetadata(o,o.currentSequenceNumber,r));d.push(y)}return j.waitFor(d).next(()=>u.apply(o)).next(()=>t.localDocuments.getLocalViewOfDocuments(o,p,m)).next(()=>p)}).then(o=>(t.Ts=a,o))}function iD(n,e,t){let r=xe(),a=xe();return t.forEach(o=>r=r.add(o)),e.getEntries(n,r).next(o=>{let u=Hn();return t.forEach((d,p)=>{const m=o.get(d);p.isFoundDocument()!==m.isFoundDocument()&&(a=a.add(d)),p.isNoDocument()&&p.version.isEqual(Ee.min())?(e.removeEntry(d,p.readTime),u=u.insert(d,p)):!m.isValidDocument()||p.version.compareTo(m.version)>0||p.version.compareTo(m.version)===0&&m.hasPendingWrites?(e.addEntry(p),u=u.insert(d,p)):ne(HE,"Ignoring outdated watch update for ",d,". Current version:",m.version," Watch version:",p.version)}),{Vs:u,fs:a}})}function _z(n,e){const t=de(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=na),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Eu(n,e){const t=de(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let a;return t.Hr.getTargetData(r,e).next(o=>o?(a=o,j.resolve(a)):t.Hr.allocateTargetId(r).next(u=>(a=new Gi(e,u,"TargetPurposeListen",r.currentSequenceNumber),t.Hr.addTargetData(r,a).next(()=>a))))}).then(r=>{const a=t.Ts.get(r.targetId);return(a===null||r.snapshotVersion.compareTo(a.snapshotVersion)>0)&&(t.Ts=t.Ts.insert(r.targetId,r),t.Is.set(e,r.targetId)),r})}async function Tu(n,e,t){const r=de(n),a=r.Ts.get(e),o=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",o,u=>r.persistence.referenceDelegate.removeTarget(u,a))}catch(u){if(!Ea(u))throw u;ne(HE,`Failed to update sequence numbers for target ${e}: ${u}`)}r.Ts=r.Ts.remove(e),r.Is.delete(a.target)}function tm(n,e,t){const r=de(n);let a=Ee.min(),o=xe();return r.persistence.runTransaction("Execute query","readwrite",u=>function(p,m,y){const v=de(p),w=v.Is.get(y);return w!==void 0?j.resolve(v.Ts.get(w)):v.Hr.getTargetData(m,y)}(r,u,Vn(e)).next(d=>{if(d)return a=d.lastLimboFreeSnapshotVersion,r.Hr.getMatchingKeysForTargetId(u,d.targetId).next(p=>{o=p})}).next(()=>r.Ps.getDocumentsMatchingQuery(u,e,t?a:Ee.min(),t?o:xe())).next(d=>(oD(r,h1(e),d),{documents:d,gs:o})))}function sD(n,e){const t=de(n),r=de(t.Hr),a=t.Ts.get(e);return a?Promise.resolve(a.target):t.persistence.runTransaction("Get target data","readonly",o=>r.lt(o,e).next(u=>u?u.target:null))}function aD(n,e){const t=de(n),r=t.Es.get(e)||Ee.min();return t.persistence.runTransaction("Get new document changes","readonly",a=>t.ds.getAllFromCollectionGroup(a,e,xC(r,uu),Number.MAX_SAFE_INTEGER)).then(a=>(oD(t,e,a),a))}function oD(n,e,t){let r=n.Es.get(e)||Ee.min();t.forEach((a,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.Es.set(e,r)}async function yz(n,e,t,r){const a=de(n);let o=xe(),u=Hn();for(const m of t){const y=e.ps(m.metadata.name);m.document&&(o=o.add(y));const v=e.ys(m);v.setReadTime(e.ws(m.metadata.readTime)),u=u.insert(y,v)}const d=a.ds.newChangeBuffer({trackRemovals:!0}),p=await Eu(a,function(y){return Vn(Mu(ze.fromString(`__bundle__/docs/${y}`)))}(r));return a.persistence.runTransaction("Apply bundle documents","readwrite",m=>iD(m,d,u).next(y=>(d.apply(m),y)).next(y=>a.Hr.removeMatchingKeysForTargetId(m,p.targetId).next(()=>a.Hr.addMatchingKeys(m,o,p.targetId)).next(()=>a.localDocuments.getLocalViewOfDocuments(m,y.Vs,y.fs)).next(()=>y.Vs)))}async function vz(n,e,t=xe()){const r=await Eu(n,Vn(ME(e.bundledQuery))),a=de(n);return a.persistence.runTransaction("Save named query","readwrite",o=>{const u=Mt(e.readTime);if(r.snapshotVersion.compareTo(u)>=0)return a.Yr.saveNamedQuery(o,e);const d=r.withResumeToken(Dt.EMPTY_BYTE_STRING,u);return a.Ts=a.Ts.insert(d.targetId,d),a.Hr.updateTargetData(o,d).next(()=>a.Hr.removeMatchingKeysForTargetId(o,r.targetId)).next(()=>a.Hr.addMatchingKeys(o,t,r.targetId)).next(()=>a.Yr.saveNamedQuery(o,e))})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lD="firestore_clients";function BA(n,e){return`${lD}_${n}_${e}`}const uD="firestore_mutations";function zA(n,e,t){let r=`${uD}_${n}_${t}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}const cD="firestore_targets";function Ry(n,e){return`${cD}_${n}_${e}`}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jr="SharedClientState";class nm{constructor(e,t,r,a){this.user=e,this.batchId=t,this.state=r,this.error=a}static Ss(e,t,r){const a=JSON.parse(r);let o,u=typeof a=="object"&&["pending","acknowledged","rejected"].indexOf(a.state)!==-1&&(a.error===void 0||typeof a.error=="object");return u&&a.error&&(u=typeof a.error.message=="string"&&typeof a.error.code=="string",u&&(o=new ee(a.error.code,a.error.message))),u?new nm(e,t,a.state,o):(Vt(Jr,`Failed to parse mutation state for ID '${t}': ${r}`),null)}bs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Rh{constructor(e,t,r){this.targetId=e,this.state=t,this.error=r}static Ss(e,t){const r=JSON.parse(t);let a,o=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return o&&r.error&&(o=typeof r.error.message=="string"&&typeof r.error.code=="string",o&&(a=new ee(r.error.code,r.error.message))),o?new Rh(e,r.state,a):(Vt(Jr,`Failed to parse target state for ID '${e}': ${t}`),null)}bs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class rm{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Ss(e,t){const r=JSON.parse(t);let a=typeof r=="object"&&r.activeTargetIds instanceof Array,o=CE();for(let u=0;a&&u<r.activeTargetIds.length;++u)a=MC(r.activeTargetIds[u]),o=o.add(r.activeTargetIds[u]);return a?new rm(e,o):(Vt(Jr,`Failed to parse client data for instance '${e}': ${t}`),null)}}class GE{constructor(e,t){this.clientId=e,this.onlineState=t}static Ss(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new GE(t.clientId,t.onlineState):(Vt(Jr,`Failed to parse online state: ${e}`),null)}}class Ev{constructor(){this.activeTargetIds=CE()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}bs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Cy{constructor(e,t,r,a,o){this.window=e,this.Ti=t,this.persistenceKey=r,this.Cs=a,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Fs=this.Ms.bind(this),this.xs=new lt(Se),this.started=!1,this.Os=[];const u=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=o,this.Ns=BA(this.persistenceKey,this.Cs),this.Bs=function(p){return`firestore_sequence_number_${p}`}(this.persistenceKey),this.xs=this.xs.insert(this.Cs,new Ev),this.Ls=new RegExp(`^${lD}_${u}_([^_]*)$`),this.ks=new RegExp(`^${uD}_${u}_(\\d+)(?:_(.*))?$`),this.qs=new RegExp(`^${cD}_${u}_(\\d+)$`),this.Qs=function(p){return`firestore_online_state_${p}`}(this.persistenceKey),this.$s=function(p){return`firestore_bundle_loaded_v2_${p}`}(this.persistenceKey),this.window.addEventListener("storage",this.Fs)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.zi();for(const r of e){if(r===this.Cs)continue;const a=this.getItem(BA(this.persistenceKey,r));if(a){const o=rm.Ss(r,a);o&&(this.xs=this.xs.insert(o.clientId,o))}}this.Us();const t=this.storage.getItem(this.Qs);if(t){const r=this.Ks(t);r&&this.Ws(r)}for(const r of this.Os)this.Ms(r);this.Os=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Bs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Gs(this.xs)}isActiveQueryTarget(e){let t=!1;return this.xs.forEach((r,a)=>{a.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.zs(e,"pending")}updateMutationState(e,t,r){this.zs(e,t,r),this.js(e)}addLocalQueryTarget(e,t=!0){let r="not-current";if(this.isActiveQueryTarget(e)){const a=this.storage.getItem(Ry(this.persistenceKey,e));if(a){const o=Rh.Ss(e,a);o&&(r=o.state)}}return t&&this.Hs.Ds(e),this.Us(),r}removeLocalQueryTarget(e){this.Hs.vs(e),this.Us()}isLocalQueryTarget(e){return this.Hs.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Ry(this.persistenceKey,e))}updateQueryState(e,t,r){this.Js(e,t,r)}handleUserChange(e,t,r){t.forEach(a=>{this.js(a)}),this.currentUser=e,r.forEach(a=>{this.addPendingMutation(a)})}setOnlineState(e){this.Ys(e)}notifyBundleLoaded(e){this.Zs(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Fs),this.removeItem(this.Ns),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return ne(Jr,"READ",e,t),t}setItem(e,t){ne(Jr,"SET",e,t),this.storage.setItem(e,t)}removeItem(e){ne(Jr,"REMOVE",e),this.storage.removeItem(e)}Ms(e){const t=e;if(t.storageArea===this.storage){if(ne(Jr,"EVENT",t.key,t.newValue),t.key===this.Ns)return void Vt("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Ti.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.Ls.test(t.key)){if(t.newValue==null){const r=this.Xs(t.key);return this.eo(r,null)}{const r=this.no(t.key,t.newValue);if(r)return this.eo(r.clientId,r)}}else if(this.ks.test(t.key)){if(t.newValue!==null){const r=this.ro(t.key,t.newValue);if(r)return this.io(r)}}else if(this.qs.test(t.key)){if(t.newValue!==null){const r=this.so(t.key,t.newValue);if(r)return this.oo(r)}}else if(t.key===this.Qs){if(t.newValue!==null){const r=this.Ks(t.newValue);if(r)return this.Ws(r)}}else if(t.key===this.Bs){const r=function(o){let u=qn.ae;if(o!=null)try{const d=JSON.parse(o);ye(typeof d=="number"),u=d}catch(d){Vt(Jr,"Failed to read sequence number from WebStorage",d)}return u}(t.newValue);r!==qn.ae&&this.sequenceNumberHandler(r)}else if(t.key===this.$s){const r=this._o(t.newValue);await Promise.all(r.map(a=>this.syncEngine.ao(a)))}}}else this.Os.push(t)})}}get Hs(){return this.xs.get(this.Cs)}Us(){this.setItem(this.Ns,this.Hs.bs())}zs(e,t,r){const a=new nm(this.currentUser,e,t,r),o=zA(this.persistenceKey,this.currentUser,e);this.setItem(o,a.bs())}js(e){const t=zA(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Ys(e){const t={clientId:this.Cs,onlineState:e};this.storage.setItem(this.Qs,JSON.stringify(t))}Js(e,t,r){const a=Ry(this.persistenceKey,e),o=new Rh(e,t,r);this.setItem(a,o.bs())}Zs(e){const t=JSON.stringify(Array.from(e));this.setItem(this.$s,t)}Xs(e){const t=this.Ls.exec(e);return t?t[1]:null}no(e,t){const r=this.Xs(e);return rm.Ss(r,t)}ro(e,t){const r=this.ks.exec(e),a=Number(r[1]),o=r[2]!==void 0?r[2]:null;return nm.Ss(new cn(o),a,t)}so(e,t){const r=this.qs.exec(e),a=Number(r[1]);return Rh.Ss(a,t)}Ks(e){return GE.Ss(e)}_o(e){return JSON.parse(e)}async io(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.uo(e.batchId,e.state,e.error);ne(Jr,`Ignoring mutation for non-active user ${e.user.uid}`)}oo(e){return this.syncEngine.co(e.targetId,e.state,e.error)}eo(e,t){const r=t?this.xs.insert(e,t):this.xs.remove(e),a=this.Gs(this.xs),o=this.Gs(r),u=[],d=[];return o.forEach(p=>{a.has(p)||u.push(p)}),a.forEach(p=>{o.has(p)||d.push(p)}),this.syncEngine.lo(u,d).then(()=>{this.xs=r})}Ws(e){this.xs.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Gs(e){let t=CE();return e.forEach((r,a)=>{t=t.unionWith(a.activeTargetIds)}),t}}class hD{constructor(){this.ho=new Ev,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,t,r){this.Po[e]=t}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new Ev,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ez{To(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FA="ConnectivityMonitor";class qA{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){ne(FA,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){ne(FA,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sp=null;function Tv(){return sp===null?sp=function(){return 268435456+Math.round(2147483648*Math.random())}():sp++,"0x"+sp.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dy="RestConnection",Tz={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class wz{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.po=t+"://"+e.host,this.yo=`projects/${r}/databases/${a}`,this.wo=this.databaseId.database===av?`project_id=${r}`:`project_id=${r}&database_id=${a}`}So(e,t,r,a,o){const u=Tv(),d=this.bo(e,t.toUriEncodedString());ne(Dy,`Sending RPC '${e}' ${u}:`,d,r);const p={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(p,a,o),this.vo(e,d,p,r).then(m=>(ne(Dy,`Received RPC '${e}' ${u}: `,m),m),m=>{throw di(Dy,`RPC '${e}' ${u} failed with error: `,m,"url: ",d,"request:",r),m})}Co(e,t,r,a,o,u){return this.So(e,t,r,a,o)}Do(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Vu}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((a,o)=>e[o]=a),r&&r.headers.forEach((a,o)=>e[o]=a)}bo(e,t){const r=Tz[e];return`${this.po}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bz{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Uo(e){this.ko(e)}Ko(e){this.qo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bn="WebChannelConnection";class Iz extends wz{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,t,r,a){const o=Tv();return new Promise((u,d)=>{const p=new bC;p.setWithCredentials(!0),p.listenOnce(IC.COMPLETE,()=>{try{switch(p.getLastErrorCode()){case yp.NO_ERROR:const y=p.getResponseJson();ne(bn,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(y)),u(y);break;case yp.TIMEOUT:ne(bn,`RPC '${e}' ${o} timed out`),d(new ee(K.DEADLINE_EXCEEDED,"Request time out"));break;case yp.HTTP_ERROR:const v=p.getStatus();if(ne(bn,`RPC '${e}' ${o} failed with status:`,v,"response text:",p.getResponseText()),v>0){let w=p.getResponseJson();Array.isArray(w)&&(w=w[0]);const S=w==null?void 0:w.error;if(S&&S.status&&S.message){const P=function(L){const z=L.toLowerCase().replace(/_/g,"-");return Object.values(K).indexOf(z)>=0?z:K.UNKNOWN}(S.status);d(new ee(P,S.message))}else d(new ee(K.UNKNOWN,"Server responded with status "+p.getStatus()))}else d(new ee(K.UNAVAILABLE,"Connection failed."));break;default:me()}}finally{ne(bn,`RPC '${e}' ${o} completed.`)}});const m=JSON.stringify(a);ne(bn,`RPC '${e}' ${o} sending request:`,a),p.send(t,"POST",m,r,15)})}Wo(e,t,r){const a=Tv(),o=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],u=RC(),d=SC(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},m=this.longPollingOptions.timeoutSeconds;m!==void 0&&(p.longPollingTimeout=Math.round(1e3*m)),this.useFetchStreams&&(p.useFetchStreams=!0),this.Do(p.initMessageHeaders,t,r),p.encodeInitMessageHeaders=!0;const y=o.join("");ne(bn,`Creating RPC '${e}' stream ${a}: ${y}`,p);const v=u.createWebChannel(y,p);let w=!1,S=!1;const P=new bz({Fo:L=>{S?ne(bn,`Not sending because RPC '${e}' stream ${a} is closed:`,L):(w||(ne(bn,`Opening RPC '${e}' stream ${a} transport.`),v.open(),w=!0),ne(bn,`RPC '${e}' stream ${a} sending:`,L),v.send(L))},Mo:()=>v.close()}),U=(L,z,W)=>{L.listen(z,G=>{try{W(G)}catch(oe){setTimeout(()=>{throw oe},0)}})};return U(v,dh.EventType.OPEN,()=>{S||(ne(bn,`RPC '${e}' stream ${a} transport opened.`),P.Qo())}),U(v,dh.EventType.CLOSE,()=>{S||(S=!0,ne(bn,`RPC '${e}' stream ${a} transport closed`),P.Uo())}),U(v,dh.EventType.ERROR,L=>{S||(S=!0,di(bn,`RPC '${e}' stream ${a} transport errored:`,L),P.Uo(new ee(K.UNAVAILABLE,"The operation could not be completed")))}),U(v,dh.EventType.MESSAGE,L=>{var z;if(!S){const W=L.data[0];ye(!!W);const G=W,oe=(G==null?void 0:G.error)||((z=G[0])===null||z===void 0?void 0:z.error);if(oe){ne(bn,`RPC '${e}' stream ${a} received error:`,oe);const ae=oe.status;let le=function(A){const x=qt[A];if(x!==void 0)return A1(x)}(ae),D=oe.message;le===void 0&&(le=K.INTERNAL,D="Unknown error status: "+ae+" with message "+oe.message),S=!0,P.Uo(new ee(le,D)),v.close()}else ne(bn,`RPC '${e}' stream ${a} received:`,W),P.Ko(W)}}),U(d,AC.STAT_EVENT,L=>{L.stat===Jy.PROXY?ne(bn,`RPC '${e}' stream ${a} detected buffering proxy`):L.stat===Jy.NOPROXY&&ne(bn,`RPC '${e}' stream ${a} detected no buffering proxy`)}),setTimeout(()=>{P.$o()},0),P}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dD(){return typeof window<"u"?window:null}function Rp(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Td(n){return new DB(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $E{constructor(e,t,r=1e3,a=1.5,o=6e4){this.Ti=e,this.timerId=t,this.Go=r,this.zo=a,this.jo=o,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const t=Math.floor(this.Ho+this.e_()),r=Math.max(0,Date.now()-this.Yo),a=Math.max(0,t-r);a>0&&ne("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.Ho} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,a,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jA="PersistentStream";class fD{constructor(e,t,r,a,o,u,d,p){this.Ti=e,this.n_=r,this.r_=a,this.connection=o,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=d,this.listener=p,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new $E(e,t)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,t){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():t&&t.code===K.RESOURCE_EXHAUSTED?(Vt(t.toString()),Vt("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):t&&t.code===K.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(t)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),t=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,a])=>{this.i_===t&&this.V_(r,a)},r=>{e(()=>{const a=new ee(K.UNKNOWN,"Fetching auth token failed: "+r.message);return this.m_(a)})})}V_(e,t){const r=this.R_(this.i_);this.stream=this.f_(e,t),this.stream.xo(()=>{r(()=>this.listener.xo())}),this.stream.No(()=>{r(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(a=>{r(()=>this.m_(a))}),this.stream.onMessage(a=>{r(()=>++this.__==1?this.g_(a):this.onNext(a))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return ne(jA,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return t=>{this.Ti.enqueueAndForget(()=>this.i_===e?t():(ne(jA,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Az extends fD{constructor(e,t,r,a,o,u){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,a,u),this.serializer=o}f_(e,t){return this.connection.Wo("Listen",e,t)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();const t=NB(this.serializer,e),r=function(o){if(!("targetChange"in o))return Ee.min();const u=o.targetChange;return u.targetIds&&u.targetIds.length?Ee.min():u.readTime?Mt(u.readTime):Ee.min()}(e);return this.listener.p_(t,r)}y_(e){const t={};t.database=mv(this.serializer),t.addTarget=function(o,u){let d;const p=u.target;if(d=Qp(p)?{documents:k1(o,p)}:{query:V1(o,p).ht},d.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){d.resumeToken=C1(o,u.resumeToken);const m=fv(o,u.expectedCount);m!==null&&(d.expectedCount=m)}else if(u.snapshotVersion.compareTo(Ee.min())>0){d.readTime=vu(o,u.snapshotVersion.toTimestamp());const m=fv(o,u.expectedCount);m!==null&&(d.expectedCount=m)}return d}(this.serializer,e);const r=kB(this.serializer,e);r&&(t.labels=r),this.I_(t)}w_(e){const t={};t.database=mv(this.serializer),t.removeTarget=e,this.I_(t)}}class Sz extends fD{constructor(e,t,r,a,o,u){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,a,u),this.serializer=o}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(e,t){return this.connection.Wo("Write",e,t)}g_(e){return ye(!!e.streamToken),this.lastStreamToken=e.streamToken,ye(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){ye(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const t=OB(e.writeResults,e.commitTime),r=Mt(e.commitTime);return this.listener.v_(r,t)}C_(){const e={};e.database=mv(this.serializer),this.I_(e)}b_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>Wh(this.serializer,r))};this.I_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rz{}class Cz extends Rz{constructor(e,t,r,a){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=a,this.F_=!1}M_(){if(this.F_)throw new ee(K.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,t,r,a){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,u])=>this.connection.So(e,pv(t,r),a,o,u)).catch(o=>{throw o.name==="FirebaseError"?(o.code===K.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ee(K.UNKNOWN,o.toString())})}Co(e,t,r,a,o){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,d])=>this.connection.Co(e,pv(t,r),a,u,d,o)).catch(u=>{throw u.name==="FirebaseError"?(u.code===K.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new ee(K.UNKNOWN,u.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class Dz{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(Vt(t),this.N_=!1):ne("OnlineStateTracker",t)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const No="RemoteStore";class Pz{constructor(e,t,r,a,o){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.U_=[],this.K_=new Map,this.W_=new Set,this.G_=[],this.z_=o,this.z_.To(u=>{r.enqueueAndForget(async()=>{wa(this)&&(ne(No,"Restarting streams for network reachability change."),await async function(p){const m=de(p);m.W_.add(4),await Bu(m),m.j_.set("Unknown"),m.W_.delete(4),await wd(m)}(this))})}),this.j_=new Dz(r,a)}}async function wd(n){if(wa(n))for(const e of n.G_)await e(!0)}async function Bu(n){for(const e of n.G_)await e(!1)}function Fm(n,e){const t=de(n);t.K_.has(e.targetId)||(t.K_.set(e.targetId,e),WE(t)?QE(t):Fu(t).c_()&&KE(t,e))}function wu(n,e){const t=de(n),r=Fu(t);t.K_.delete(e),r.c_()&&pD(t,e),t.K_.size===0&&(r.c_()?r.P_():wa(t)&&t.j_.set("Unknown"))}function KE(n,e){if(n.H_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ee.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Fu(n).y_(e)}function pD(n,e){n.H_.Ne(e),Fu(n).w_(e)}function QE(n){n.H_=new AB({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>n.K_.get(e)||null,it:()=>n.datastore.serializer.databaseId}),Fu(n).start(),n.j_.B_()}function WE(n){return wa(n)&&!Fu(n).u_()&&n.K_.size>0}function wa(n){return de(n).W_.size===0}function mD(n){n.H_=void 0}async function xz(n){n.j_.set("Online")}async function Nz(n){n.K_.forEach((e,t)=>{KE(n,e)})}async function Oz(n,e){mD(n),WE(n)?(n.j_.q_(e),QE(n)):n.j_.set("Unknown")}async function kz(n,e,t){if(n.j_.set("Online"),e instanceof R1&&e.state===2&&e.cause)try{await async function(a,o){const u=o.cause;for(const d of o.targetIds)a.K_.has(d)&&(await a.remoteSyncer.rejectListen(d,u),a.K_.delete(d),a.H_.removeTarget(d))}(n,e)}catch(r){ne(No,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await im(n,r)}else if(e instanceof Sp?n.H_.We(e):e instanceof S1?n.H_.Ze(e):n.H_.je(e),!t.isEqual(Ee.min()))try{const r=await rD(n.localStore);t.compareTo(r)>=0&&await function(o,u){const d=o.H_.ot(u);return d.targetChanges.forEach((p,m)=>{if(p.resumeToken.approximateByteSize()>0){const y=o.K_.get(m);y&&o.K_.set(m,y.withResumeToken(p.resumeToken,u))}}),d.targetMismatches.forEach((p,m)=>{const y=o.K_.get(p);if(!y)return;o.K_.set(p,y.withResumeToken(Dt.EMPTY_BYTE_STRING,y.snapshotVersion)),pD(o,p);const v=new Gi(y.target,p,m,y.sequenceNumber);KE(o,v)}),o.remoteSyncer.applyRemoteEvent(d)}(n,t)}catch(r){ne(No,"Failed to raise snapshot:",r),await im(n,r)}}async function im(n,e,t){if(!Ea(e))throw e;n.W_.add(1),await Bu(n),n.j_.set("Offline"),t||(t=()=>rD(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{ne(No,"Retrying IndexedDB access"),await t(),n.W_.delete(1),await wd(n)})}function gD(n,e){return e().catch(t=>im(n,t,e))}async function zu(n){const e=de(n),t=fa(e);let r=e.U_.length>0?e.U_[e.U_.length-1].batchId:na;for(;Vz(e);)try{const a=await _z(e.localStore,r);if(a===null){e.U_.length===0&&t.P_();break}r=a.batchId,Mz(e,a)}catch(a){await im(e,a)}_D(e)&&yD(e)}function Vz(n){return wa(n)&&n.U_.length<10}function Mz(n,e){n.U_.push(e);const t=fa(n);t.c_()&&t.S_&&t.b_(e.mutations)}function _D(n){return wa(n)&&!fa(n).u_()&&n.U_.length>0}function yD(n){fa(n).start()}async function Lz(n){fa(n).C_()}async function Uz(n){const e=fa(n);for(const t of n.U_)e.b_(t.mutations)}async function Bz(n,e,t){const r=n.U_.shift(),a=NE.from(r,e,t);await gD(n,()=>n.remoteSyncer.applySuccessfulWrite(a)),await zu(n)}async function zz(n,e){e&&fa(n).S_&&await async function(r,a){if(function(u){return I1(u)&&u!==K.ABORTED}(a.code)){const o=r.U_.shift();fa(r).h_(),await gD(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,a)),await zu(r)}}(n,e),_D(n)&&yD(n)}async function HA(n,e){const t=de(n);t.asyncQueue.verifyOperationInProgress(),ne(No,"RemoteStore received new credentials");const r=wa(t);t.W_.add(3),await Bu(t),r&&t.j_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.W_.delete(3),await wd(t)}async function wv(n,e){const t=de(n);e?(t.W_.delete(2),await wd(t)):e||(t.W_.add(2),await Bu(t),t.j_.set("Unknown"))}function Fu(n){return n.J_||(n.J_=function(t,r,a){const o=de(t);return o.M_(),new Az(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,a)}(n.datastore,n.asyncQueue,{xo:xz.bind(null,n),No:Nz.bind(null,n),Lo:Oz.bind(null,n),p_:kz.bind(null,n)}),n.G_.push(async e=>{e?(n.J_.h_(),WE(n)?QE(n):n.j_.set("Unknown")):(await n.J_.stop(),mD(n))})),n.J_}function fa(n){return n.Y_||(n.Y_=function(t,r,a){const o=de(t);return o.M_(),new Sz(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,a)}(n.datastore,n.asyncQueue,{xo:()=>Promise.resolve(),No:Lz.bind(null,n),Lo:zz.bind(null,n),D_:Uz.bind(null,n),v_:Bz.bind(null,n)}),n.G_.push(async e=>{e?(n.Y_.h_(),await zu(n)):(await n.Y_.stop(),n.U_.length>0&&(ne(No,`Stopping write stream with ${n.U_.length} pending writes`),n.U_=[]))})),n.Y_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YE{constructor(e,t,r,a,o){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=a,this.removalCallback=o,this.deferred=new yn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(u=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,a,o){const u=Date.now()+r,d=new YE(e,t,u,a,o);return d.start(r),d}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ee(K.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function qu(n,e){if(Vt("AsyncQueue",`${e}: ${n}`),Ea(n))return new ee(K.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{static emptySet(e){return new Zl(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||ce.comparator(t.key,r.key):(t,r)=>ce.comparator(t.key,r.key),this.keyedMap=fh(),this.sortedSet=new lt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Zl)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const a=t.getNext().key,o=r.getNext().key;if(!a.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Zl;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GA{constructor(){this.Z_=new lt(ce.comparator)}track(e){const t=e.doc.key,r=this.Z_.get(t);r?e.type!==0&&r.type===3?this.Z_=this.Z_.insert(t,e):e.type===3&&r.type!==1?this.Z_=this.Z_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Z_=this.Z_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Z_=this.Z_.remove(t):e.type===1&&r.type===2?this.Z_=this.Z_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):me():this.Z_=this.Z_.insert(t,e)}X_(){const e=[];return this.Z_.inorderTraversal((t,r)=>{e.push(r)}),e}}class bu{constructor(e,t,r,a,o,u,d,p,m){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=a,this.mutatedKeys=o,this.fromCache=u,this.syncStateChanged=d,this.excludesMetadataChanges=p,this.hasCachedResults=m}static fromInitialDocuments(e,t,r,a,o){const u=[];return t.forEach(d=>{u.push({type:0,doc:d})}),new bu(e,t,Zl.emptySet(t),u,r,a,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&gd(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let a=0;a<t.length;a++)if(t[a].type!==r[a].type||!t[a].doc.isEqual(r[a].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fz{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(e=>e.ra())}}class qz{constructor(){this.queries=$A(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(t,r){const a=de(t),o=a.queries;a.queries=$A(),o.forEach((u,d)=>{for(const p of d.ta)p.onError(r)})})(this,new ee(K.ABORTED,"Firestore shutting down"))}}function $A(){return new rs(n=>c1(n),gd)}async function XE(n,e){const t=de(n);let r=3;const a=e.query;let o=t.queries.get(a);o?!o.na()&&e.ra()&&(r=2):(o=new Fz,r=e.ra()?0:1);try{switch(r){case 0:o.ea=await t.onListen(a,!0);break;case 1:o.ea=await t.onListen(a,!1);break;case 2:await t.onFirstRemoteStoreListen(a)}}catch(u){const d=qu(u,`Initialization of query '${Fl(e.query)}' failed`);return void e.onError(d)}t.queries.set(a,o),o.ta.push(e),e.sa(t.onlineState),o.ea&&e.oa(o.ea)&&JE(t)}async function ZE(n,e){const t=de(n),r=e.query;let a=3;const o=t.queries.get(r);if(o){const u=o.ta.indexOf(e);u>=0&&(o.ta.splice(u,1),o.ta.length===0?a=e.ra()?0:1:!o.na()&&e.ra()&&(a=2))}switch(a){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function jz(n,e){const t=de(n);let r=!1;for(const a of e){const o=a.query,u=t.queries.get(o);if(u){for(const d of u.ta)d.oa(a)&&(r=!0);u.ea=a}}r&&JE(t)}function Hz(n,e,t){const r=de(n),a=r.queries.get(e);if(a)for(const o of a.ta)o.onError(t);r.queries.delete(e)}function JE(n){n.ia.forEach(e=>{e.next()})}var bv,KA;(KA=bv||(bv={}))._a="default",KA.Cache="cache";class eT{constructor(e,t,r){this.query=e,this.aa=t,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=r||{}}oa(e){if(!this.options.includeMetadataChanges){const r=[];for(const a of e.docChanges)a.type!==3&&r.push(a);e=new bu(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ua?this.la(e)&&(this.aa.next(e),t=!0):this.ha(e,this.onlineState)&&(this.Pa(e),t=!0),this.ca=e,t}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let t=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),t=!0),t}ha(e,t){if(!e.fromCache||!this.ra())return!0;const r=t!=="Offline";return(!this.options.Ta||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}la(e){if(e.docChanges.length>0)return!0;const t=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Pa(e){e=bu.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==bv.Cache}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gz{constructor(e,t){this.Ia=e,this.byteLength=t}Ea(){return"metadata"in this.Ia}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QA{constructor(e){this.serializer=e}ps(e){return li(this.serializer,e)}ys(e){return e.metadata.exists?O1(this.serializer,e.document,!1):ht.newNoDocument(this.ps(e.metadata.name),this.ws(e.metadata.readTime))}ws(e){return Mt(e)}}class $z{constructor(e,t,r){this.da=e,this.localStore=t,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=vD(e)}Aa(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.Ia.namedQuery)this.queries.push(e.Ia.namedQuery);else if(e.Ia.documentMetadata){this.documents.push({metadata:e.Ia.documentMetadata}),e.Ia.documentMetadata.exists||++t;const r=ze.fromString(e.Ia.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.Ia.document&&(this.documents[this.documents.length-1].document=e.Ia.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}Ra(e){const t=new Map,r=new QA(this.serializer);for(const a of e)if(a.metadata.queries){const o=r.ps(a.metadata.name);for(const u of a.metadata.queries){const d=(t.get(u)||xe()).add(o);t.set(u,d)}}return t}async complete(){const e=await yz(this.localStore,new QA(this.serializer),this.documents,this.da.id),t=this.Ra(this.documents);for(const r of this.queries)await vz(this.localStore,r,t.get(r.name));return this.progress.taskState="Success",{progress:this.progress,Va:this.collectionGroups,ma:e}}}function vD(n){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:n.totalDocuments,totalBytes:n.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ED{constructor(e){this.key=e}}class TD{constructor(e){this.key=e}}class wD{constructor(e,t){this.query=e,this.fa=t,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=xe(),this.mutatedKeys=xe(),this.ya=d1(e),this.wa=new Zl(this.ya)}get Sa(){return this.fa}ba(e,t){const r=t?t.Da:new GA,a=t?t.wa:this.wa;let o=t?t.mutatedKeys:this.mutatedKeys,u=a,d=!1;const p=this.query.limitType==="F"&&a.size===this.query.limit?a.last():null,m=this.query.limitType==="L"&&a.size===this.query.limit?a.first():null;if(e.inorderTraversal((y,v)=>{const w=a.get(y),S=_d(this.query,v)?v:null,P=!!w&&this.mutatedKeys.has(w.key),U=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let L=!1;w&&S?w.data.isEqual(S.data)?P!==U&&(r.track({type:3,doc:S}),L=!0):this.va(w,S)||(r.track({type:2,doc:S}),L=!0,(p&&this.ya(S,p)>0||m&&this.ya(S,m)<0)&&(d=!0)):!w&&S?(r.track({type:0,doc:S}),L=!0):w&&!S&&(r.track({type:1,doc:w}),L=!0,(p||m)&&(d=!0)),L&&(S?(u=u.add(S),o=U?o.add(y):o.delete(y)):(u=u.delete(y),o=o.delete(y)))}),this.query.limit!==null)for(;u.size>this.query.limit;){const y=this.query.limitType==="F"?u.last():u.first();u=u.delete(y.key),o=o.delete(y.key),r.track({type:1,doc:y})}return{wa:u,Da:r,ls:d,mutatedKeys:o}}va(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,a){const o=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;const u=e.Da.X_();u.sort((y,v)=>function(S,P){const U=L=>{switch(L){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return me()}};return U(S)-U(P)}(y.type,v.type)||this.ya(y.doc,v.doc)),this.Ca(r),a=a!=null&&a;const d=t&&!a?this.Fa():[],p=this.pa.size===0&&this.current&&!a?1:0,m=p!==this.ga;return this.ga=p,u.length!==0||m?{snapshot:new bu(this.query,e.wa,o,u,e.mutatedKeys,p===0,m,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ma:d}:{Ma:d}}sa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new GA,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach(t=>this.fa=this.fa.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.fa=this.fa.delete(t)),this.current=e.current)}Fa(){if(!this.current)return[];const e=this.pa;this.pa=xe(),this.wa.forEach(r=>{this.xa(r.key)&&(this.pa=this.pa.add(r.key))});const t=[];return e.forEach(r=>{this.pa.has(r)||t.push(new TD(r))}),this.pa.forEach(r=>{e.has(r)||t.push(new ED(r))}),t}Oa(e){this.fa=e.gs,this.pa=xe();const t=this.ba(e.documents);return this.applyChanges(t,!0)}Na(){return bu.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const ba="SyncEngine";class Kz{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class Qz{constructor(e){this.key=e,this.Ba=!1}}class Wz{constructor(e,t,r,a,o,u){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=a,this.currentUser=o,this.maxConcurrentLimboResolutions=u,this.La={},this.ka=new rs(d=>c1(d),gd),this.qa=new Map,this.Qa=new Set,this.$a=new lt(ce.comparator),this.Ua=new Map,this.Ka=new BE,this.Wa={},this.Ga=new Map,this.za=xo.Kn(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function Yz(n,e,t=!0){const r=qm(n);let a;const o=r.ka.get(e);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),a=o.view.Na()):a=await bD(r,e,t,!0),a}async function Xz(n,e){const t=qm(n);await bD(t,e,!0,!1)}async function bD(n,e,t,r){const a=await Eu(n.localStore,Vn(e)),o=a.targetId,u=n.sharedClientState.addLocalQueryTarget(o,t);let d;return r&&(d=await tT(n,e,o,u==="current",a.resumeToken)),n.isPrimaryClient&&t&&Fm(n.remoteStore,a),d}async function tT(n,e,t,r,a){n.Ha=(v,w,S)=>async function(U,L,z,W){let G=L.view.ba(z);G.ls&&(G=await tm(U.localStore,L.query,!1).then(({documents:D})=>L.view.ba(D,G)));const oe=W&&W.targetChanges.get(L.targetId),ae=W&&W.targetMismatches.get(L.targetId)!=null,le=L.view.applyChanges(G,U.isPrimaryClient,oe,ae);return Iv(U,L.targetId,le.Ma),le.snapshot}(n,v,w,S);const o=await tm(n.localStore,e,!0),u=new wD(e,o.gs),d=u.ba(o.documents),p=Ed.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",a),m=u.applyChanges(d,n.isPrimaryClient,p);Iv(n,t,m.Ma);const y=new Kz(e,t,u);return n.ka.set(e,y),n.qa.has(t)?n.qa.get(t).push(e):n.qa.set(t,[e]),m.snapshot}async function Zz(n,e,t){const r=de(n),a=r.ka.get(e),o=r.qa.get(a.targetId);if(o.length>1)return r.qa.set(a.targetId,o.filter(u=>!gd(u,e))),void r.ka.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(a.targetId),r.sharedClientState.isActiveQueryTarget(a.targetId)||await Tu(r.localStore,a.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(a.targetId),t&&wu(r.remoteStore,a.targetId),Iu(r,a.targetId)}).catch(va)):(Iu(r,a.targetId),await Tu(r.localStore,a.targetId,!0))}async function Jz(n,e){const t=de(n),r=t.ka.get(e),a=t.qa.get(r.targetId);t.isPrimaryClient&&a.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),wu(t.remoteStore,r.targetId))}async function e6(n,e,t){const r=sT(n);try{const a=await function(u,d){const p=de(u),m=gt.now(),y=d.reduce((S,P)=>S.add(P.key),xe());let v,w;return p.persistence.runTransaction("Locally write mutations","readwrite",S=>{let P=Hn(),U=xe();return p.ds.getEntries(S,y).next(L=>{P=L,P.forEach((z,W)=>{W.isValidDocument()||(U=U.add(z))})}).next(()=>p.localDocuments.getOverlayedDocuments(S,P)).next(L=>{v=L;const z=[];for(const W of d){const G=wB(W,v.get(W.key).overlayedDocument);G!=null&&z.push(new is(W.key,G,t1(G.value.mapValue),mt.exists(!0)))}return p.mutationQueue.addMutationBatch(S,m,z,d)}).next(L=>{w=L;const z=L.applyToLocalDocumentSet(v,U);return p.documentOverlayCache.saveOverlays(S,L.batchId,z)})}).then(()=>({batchId:w.batchId,changes:p1(v)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(a.batchId),function(u,d,p){let m=u.Wa[u.currentUser.toKey()];m||(m=new lt(Se)),m=m.insert(d,p),u.Wa[u.currentUser.toKey()]=m}(r,a.batchId,t),await ss(r,a.changes),await zu(r.remoteStore)}catch(a){const o=qu(a,"Failed to persist write");t.reject(o)}}async function ID(n,e){const t=de(n);try{const r=await gz(t.localStore,e);e.targetChanges.forEach((a,o)=>{const u=t.Ua.get(o);u&&(ye(a.addedDocuments.size+a.modifiedDocuments.size+a.removedDocuments.size<=1),a.addedDocuments.size>0?u.Ba=!0:a.modifiedDocuments.size>0?ye(u.Ba):a.removedDocuments.size>0&&(ye(u.Ba),u.Ba=!1))}),await ss(t,r,e)}catch(r){await va(r)}}function WA(n,e,t){const r=de(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const a=[];r.ka.forEach((o,u)=>{const d=u.view.sa(e);d.snapshot&&a.push(d.snapshot)}),function(u,d){const p=de(u);p.onlineState=d;let m=!1;p.queries.forEach((y,v)=>{for(const w of v.ta)w.sa(d)&&(m=!0)}),m&&JE(p)}(r.eventManager,e),a.length&&r.La.p_(a),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function t6(n,e,t){const r=de(n);r.sharedClientState.updateQueryState(e,"rejected",t);const a=r.Ua.get(e),o=a&&a.key;if(o){let u=new lt(ce.comparator);u=u.insert(o,ht.newNoDocument(o,Ee.min()));const d=xe().add(o),p=new vd(Ee.min(),new Map,new lt(Se),u,d);await ID(r,p),r.$a=r.$a.remove(o),r.Ua.delete(e),iT(r)}else await Tu(r.localStore,e,!1).then(()=>Iu(r,e,t)).catch(va)}async function n6(n,e){const t=de(n),r=e.batch.batchId;try{const a=await mz(t.localStore,e);rT(t,r,null),nT(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await ss(t,a)}catch(a){await va(a)}}async function r6(n,e,t){const r=de(n);try{const a=await function(u,d){const p=de(u);return p.persistence.runTransaction("Reject batch","readwrite-primary",m=>{let y;return p.mutationQueue.lookupMutationBatch(m,d).next(v=>(ye(v!==null),y=v.keys(),p.mutationQueue.removeMutationBatch(m,v))).next(()=>p.mutationQueue.performConsistencyCheck(m)).next(()=>p.documentOverlayCache.removeOverlaysForBatchId(m,y,d)).next(()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(m,y)).next(()=>p.localDocuments.getDocuments(m,y))})}(r.localStore,e);rT(r,e,t),nT(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await ss(r,a)}catch(a){await va(a)}}async function i6(n,e){const t=de(n);wa(t.remoteStore)||ne(ba,"The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(u){const d=de(u);return d.persistence.runTransaction("Get highest unacknowledged batch id","readonly",p=>d.mutationQueue.getHighestUnacknowledgedBatchId(p))}(t.localStore);if(r===na)return void e.resolve();const a=t.Ga.get(r)||[];a.push(e),t.Ga.set(r,a)}catch(r){const a=qu(r,"Initialization of waitForPendingWrites() operation failed");e.reject(a)}}function nT(n,e){(n.Ga.get(e)||[]).forEach(t=>{t.resolve()}),n.Ga.delete(e)}function rT(n,e,t){const r=de(n);let a=r.Wa[r.currentUser.toKey()];if(a){const o=a.get(e);o&&(t?o.reject(t):o.resolve(),a=a.remove(e)),r.Wa[r.currentUser.toKey()]=a}}function Iu(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.qa.get(e))n.ka.delete(r),t&&n.La.Ja(r,t);n.qa.delete(e),n.isPrimaryClient&&n.Ka.br(e).forEach(r=>{n.Ka.containsKey(r)||AD(n,r)})}function AD(n,e){n.Qa.delete(e.path.canonicalString());const t=n.$a.get(e);t!==null&&(wu(n.remoteStore,t),n.$a=n.$a.remove(e),n.Ua.delete(t),iT(n))}function Iv(n,e,t){for(const r of t)r instanceof ED?(n.Ka.addReference(r.key,e),s6(n,r)):r instanceof TD?(ne(ba,"Document no longer in limbo: "+r.key),n.Ka.removeReference(r.key,e),n.Ka.containsKey(r.key)||AD(n,r.key)):me()}function s6(n,e){const t=e.key,r=t.path.canonicalString();n.$a.get(t)||n.Qa.has(r)||(ne(ba,"New document in limbo: "+t),n.Qa.add(r),iT(n))}function iT(n){for(;n.Qa.size>0&&n.$a.size<n.maxConcurrentLimboResolutions;){const e=n.Qa.values().next().value;n.Qa.delete(e);const t=new ce(ze.fromString(e)),r=n.za.next();n.Ua.set(r,new Qz(t)),n.$a=n.$a.insert(t,r),Fm(n.remoteStore,new Gi(Vn(Mu(t.path)),r,"TargetPurposeLimboResolution",qn.ae))}}async function ss(n,e,t){const r=de(n),a=[],o=[],u=[];r.ka.isEmpty()||(r.ka.forEach((d,p)=>{u.push(r.Ha(p,e,t).then(m=>{var y;if((m||t)&&r.isPrimaryClient){const v=m?!m.fromCache:(y=t==null?void 0:t.targetChanges.get(p.targetId))===null||y===void 0?void 0:y.current;r.sharedClientState.updateQueryState(p.targetId,v?"current":"not-current")}if(m){a.push(m);const v=jE.Yi(p.targetId,m);o.push(v)}}))}),await Promise.all(u),r.La.p_(a),await async function(p,m){const y=de(p);try{await y.persistence.runTransaction("notifyLocalViewChanges","readwrite",v=>j.forEach(m,w=>j.forEach(w.Hi,S=>y.persistence.referenceDelegate.addReference(v,w.targetId,S)).next(()=>j.forEach(w.Ji,S=>y.persistence.referenceDelegate.removeReference(v,w.targetId,S)))))}catch(v){if(!Ea(v))throw v;ne(HE,"Failed to update sequence numbers: "+v)}for(const v of m){const w=v.targetId;if(!v.fromCache){const S=y.Ts.get(w),P=S.snapshotVersion,U=S.withLastLimboFreeSnapshotVersion(P);y.Ts=y.Ts.insert(w,U)}}}(r.localStore,o))}async function a6(n,e){const t=de(n);if(!t.currentUser.isEqual(e)){ne(ba,"User change. New user:",e.toKey());const r=await nD(t.localStore,e);t.currentUser=e,function(o,u){o.Ga.forEach(d=>{d.forEach(p=>{p.reject(new ee(K.CANCELLED,u))})}),o.Ga.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ss(t,r.Rs)}}function o6(n,e){const t=de(n),r=t.Ua.get(e);if(r&&r.Ba)return xe().add(r.key);{let a=xe();const o=t.qa.get(e);if(!o)return a;for(const u of o){const d=t.ka.get(u);a=a.unionWith(d.view.Sa)}return a}}async function l6(n,e){const t=de(n),r=await tm(t.localStore,e.query,!0),a=e.view.Oa(r);return t.isPrimaryClient&&Iv(t,e.targetId,a.Ma),a}async function u6(n,e){const t=de(n);return aD(t.localStore,e).then(r=>ss(t,r))}async function c6(n,e,t,r){const a=de(n),o=await function(d,p){const m=de(d),y=de(m.mutationQueue);return m.persistence.runTransaction("Lookup mutation documents","readonly",v=>y.Ln(v,p).next(w=>w?m.localDocuments.getDocuments(v,w):j.resolve(null)))}(a.localStore,e);o!==null?(t==="pending"?await zu(a.remoteStore):t==="acknowledged"||t==="rejected"?(rT(a,e,r||null),nT(a,e),function(d,p){de(de(d).mutationQueue).qn(p)}(a.localStore,e)):me(),await ss(a,o)):ne(ba,"Cannot apply mutation batch with id: "+e)}async function h6(n,e){const t=de(n);if(qm(t),sT(t),e===!0&&t.ja!==!0){const r=t.sharedClientState.getAllActiveQueryTargets(),a=await YA(t,r.toArray());t.ja=!0,await wv(t.remoteStore,!0);for(const o of a)Fm(t.remoteStore,o)}else if(e===!1&&t.ja!==!1){const r=[];let a=Promise.resolve();t.qa.forEach((o,u)=>{t.sharedClientState.isLocalQueryTarget(u)?r.push(u):a=a.then(()=>(Iu(t,u),Tu(t.localStore,u,!0))),wu(t.remoteStore,u)}),await a,await YA(t,r),function(u){const d=de(u);d.Ua.forEach((p,m)=>{wu(d.remoteStore,m)}),d.Ka.Dr(),d.Ua=new Map,d.$a=new lt(ce.comparator)}(t),t.ja=!1,await wv(t.remoteStore,!1)}}async function YA(n,e,t){const r=de(n),a=[],o=[];for(const u of e){let d;const p=r.qa.get(u);if(p&&p.length!==0){d=await Eu(r.localStore,Vn(p[0]));for(const m of p){const y=r.ka.get(m),v=await l6(r,y);v.snapshot&&o.push(v.snapshot)}}else{const m=await sD(r.localStore,u);d=await Eu(r.localStore,m),await tT(r,SD(m),u,!1,d.resumeToken)}a.push(d)}return r.La.p_(o),a}function SD(n){return u1(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function d6(n){return function(t){return de(de(t).persistence).zi()}(de(n).localStore)}async function f6(n,e,t,r){const a=de(n);if(a.ja)return void ne(ba,"Ignoring unexpected query state notification.");const o=a.qa.get(e);if(o&&o.length>0)switch(t){case"current":case"not-current":{const u=await aD(a.localStore,h1(o[0])),d=vd.createSynthesizedRemoteEventForCurrentChange(e,t==="current",Dt.EMPTY_BYTE_STRING);await ss(a,u,d);break}case"rejected":await Tu(a.localStore,e,!0),Iu(a,e,r);break;default:me()}}async function p6(n,e,t){const r=qm(n);if(r.ja){for(const a of e){if(r.qa.has(a)&&r.sharedClientState.isActiveQueryTarget(a)){ne(ba,"Adding an already active target "+a);continue}const o=await sD(r.localStore,a),u=await Eu(r.localStore,o);await tT(r,SD(o),u.targetId,!1,u.resumeToken),Fm(r.remoteStore,u)}for(const a of t)r.qa.has(a)&&await Tu(r.localStore,a,!1).then(()=>{wu(r.remoteStore,a),Iu(r,a)}).catch(va)}}function qm(n){const e=de(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=ID.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=o6.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=t6.bind(null,e),e.La.p_=jz.bind(null,e.eventManager),e.La.Ja=Hz.bind(null,e.eventManager),e}function sT(n){const e=de(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=n6.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=r6.bind(null,e),e}function m6(n,e,t){const r=de(n);(async function(o,u,d){try{const p=await u.getMetadata();if(await function(S,P){const U=de(S),L=Mt(P.createTime);return U.persistence.runTransaction("hasNewerBundle","readonly",z=>U.Yr.getBundleMetadata(z,P.id)).then(z=>!!z&&z.createTime.compareTo(L)>=0)}(o.localStore,p))return await u.close(),d._completeWith(function(S){return{taskState:"Success",documentsLoaded:S.totalDocuments,bytesLoaded:S.totalBytes,totalDocuments:S.totalDocuments,totalBytes:S.totalBytes}}(p)),Promise.resolve(new Set);d._updateProgress(vD(p));const m=new $z(p,o.localStore,u.serializer);let y=await u.Ya();for(;y;){const w=await m.Aa(y);w&&d._updateProgress(w),y=await u.Ya()}const v=await m.complete();return await ss(o,v.ma,void 0),await function(S,P){const U=de(S);return U.persistence.runTransaction("Save bundle","readwrite",L=>U.Yr.saveBundleMetadata(L,P))}(o.localStore,p),d._completeWith(v.progress),Promise.resolve(v.Va)}catch(p){return di(ba,`Loading bundle failed with ${p}`),d._failWith(p),Promise.resolve(new Set)}})(r,e,t).then(a=>{r.sharedClientState.notifyBundleLoaded(a)})}class Yh{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Td(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,t){return null}nu(e,t){return null}eu(e){return tD(this.persistence,new eD,e.initialUser,this.serializer)}Xa(e){return new zE(zm.ri,this.serializer)}Za(e){return new hD}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Yh.provider={build:()=>new Yh};class g6 extends Yh{constructor(e){super(),this.cacheSizeBytes=e}tu(e,t){ye(this.persistence.referenceDelegate instanceof em);const r=this.persistence.referenceDelegate.garbageCollector;return new Q1(r,e.asyncQueue,t)}Xa(e){const t=this.cacheSizeBytes!==void 0?In.withCacheSize(this.cacheSizeBytes):In.DEFAULT;return new zE(r=>em.ri(r,t),this.serializer)}}class RD extends Yh{constructor(e,t,r){super(),this.ru=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.ru.initialize(this,e),await sT(this.ru.syncEngine),await zu(this.ru.remoteStore),await this.persistence.Ci(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}eu(e){return tD(this.persistence,new eD,e.initialUser,this.serializer)}tu(e,t){const r=this.persistence.referenceDelegate.garbageCollector;return new Q1(r,e.asyncQueue,t)}nu(e,t){const r=new A4(t,this.persistence);return new I4(e.asyncQueue,r)}Xa(e){const t=qE(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?In.withCacheSize(this.cacheSizeBytes):In.DEFAULT;return new FE(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,dD(),Rp(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Za(e){return new hD}}class _6 extends RD{constructor(e,t){super(e,t,!1),this.ru=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.ru.syncEngine;this.sharedClientState instanceof Cy&&(this.sharedClientState.syncEngine={uo:c6.bind(null,t),co:f6.bind(null,t),lo:p6.bind(null,t),zi:d6.bind(null,t),ao:u6.bind(null,t)},await this.sharedClientState.start()),await this.persistence.Ci(async r=>{await h6(this.ru.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}Za(e){const t=dD();if(!Cy.D(t))throw new ee(K.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=qE(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Cy(t,e.asyncQueue,r,e.clientId,e.initialUser)}}class Xh{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>WA(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=a6.bind(null,this.syncEngine),await wv(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new qz}()}createDatastore(e){const t=Td(e.databaseInfo.databaseId),r=function(o){return new Iz(o)}(e.databaseInfo);return function(o,u,d,p){return new Cz(o,u,d,p)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,a,o,u,d){return new Pz(r,a,o,u,d)}(this.localStore,this.datastore,e.asyncQueue,t=>WA(this.syncEngine,t,0),function(){return qA.D()?new qA:new Ez}())}createSyncEngine(e,t){return function(a,o,u,d,p,m,y){const v=new Wz(a,o,u,d,p,m);return y&&(v.ja=!0),v}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(a){const o=de(a);ne(No,"RemoteStore shutting down."),o.W_.add(5),await Bu(o),o.z_.shutdown(),o.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Xh.provider={build:()=>new Xh};function XA(n,e=10240){let t=0;return{async read(){if(t<n.byteLength){const r={value:n.slice(t,t+e),done:!1};return t+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):Vt("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y6{constructor(e,t){this.ou=e,this.serializer=t,this.metadata=new yn,this.buffer=new Uint8Array,this._u=function(){return new TextDecoder("utf-8")}(),this.au().then(r=>{r&&r.Ea()?this.metadata.resolve(r.Ia.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.Ia)}`))},r=>this.metadata.reject(r))}close(){return this.ou.cancel()}async getMetadata(){return this.metadata.promise}async Ya(){return await this.getMetadata(),this.au()}async au(){const e=await this.uu();if(e===null)return null;const t=this._u.decode(e),r=Number(t);isNaN(r)&&this.cu(`length string (${t}) is not valid number`);const a=await this.lu(r);return new Gz(JSON.parse(a),e.length+r)}hu(){return this.buffer.findIndex(e=>e===123)}async uu(){for(;this.hu()<0&&!await this.Pu(););if(this.buffer.length===0)return null;const e=this.hu();e<0&&this.cu("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async lu(e){for(;this.buffer.length<e;)await this.Pu()&&this.cu("Reached the end of bundle when more is expected.");const t=this._u.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}cu(e){throw this.ou.cancel(),new Error(`Invalid bundle format: ${e}`)}async Pu(){const e=await this.ou.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v6{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new ee(K.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const t=await async function(a,o){const u=de(a),d={documents:o.map(v=>Qh(u.serializer,v))},p=await u.Co("BatchGetDocuments",u.serializer.databaseId,ze.emptyPath(),d,o.length),m=new Map;p.forEach(v=>{const w=xB(u.serializer,v);m.set(w.key.toString(),w)});const y=[];return o.forEach(v=>{const w=m.get(v.toString());ye(!!w),y.push(w)}),y}(this.datastore,e);return t.forEach(r=>this.recordVersion(r)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Uu(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,r)=>{const a=ce.fromPath(r);this.mutations.push(new PE(a,this.precondition(a)))}),await async function(r,a){const o=de(r),u={writes:a.map(d=>Wh(o.serializer,d))};await o.So("Commit",o.serializer.databaseId,ze.emptyPath(),u)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw me();t=Ee.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!t.isEqual(r))throw new ee(K.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(Ee.min())?mt.exists(!1):mt.updateTime(t):mt.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(Ee.min()))throw new ee(K.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return mt.updateTime(t)}return mt.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E6{constructor(e,t,r,a,o){this.asyncQueue=e,this.datastore=t,this.options=r,this.updateFunction=a,this.deferred=o,this.Tu=r.maxAttempts,this.a_=new $E(this.asyncQueue,"transaction_retry")}Iu(){this.Tu-=1,this.Eu()}Eu(){this.a_.Xo(async()=>{const e=new v6(this.datastore),t=this.du(e);t&&t.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(a=>{this.Au(a)}))}).catch(r=>{this.Au(r)})})}du(e){try{const t=this.updateFunction(e);return!fd(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Au(e){this.Tu>0&&this.Ru(e)?(this.Tu-=1,this.asyncQueue.enqueueAndForget(()=>(this.Eu(),Promise.resolve()))):this.deferred.reject(e)}Ru(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!I1(t)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pa="FirestoreClient";class T6{constructor(e,t,r,a,o){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=a,this.user=cn.UNAUTHENTICATED,this.clientId=DC.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async u=>{ne(pa,"Received user=",u.uid),await this.authCredentialListener(u),this.user=u}),this.appCheckCredentials.start(r,u=>(ne(pa,"Received new app check token=",u),this.appCheckCredentialListener(u,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new yn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=qu(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Py(n,e){n.asyncQueue.verifyOperationInProgress(),ne(pa,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async a=>{r.isEqual(a)||(await nD(e.localStore,a),r=a)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function ZA(n,e){n.asyncQueue.verifyOperationInProgress();const t=await aT(n);ne(pa,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>HA(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,a)=>HA(e.remoteStore,a)),n._onlineComponents=e}async function aT(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){ne(pa,"Using user provided OfflineComponentProvider");try{await Py(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(a){return a.name==="FirebaseError"?a.code===K.FAILED_PRECONDITION||a.code===K.UNIMPLEMENTED:!(typeof DOMException<"u"&&a instanceof DOMException)||a.code===22||a.code===20||a.code===11}(t))throw t;di("Error using user provided cache. Falling back to memory cache: "+t),await Py(n,new Yh)}}else ne(pa,"Using default OfflineComponentProvider"),await Py(n,new g6(void 0));return n._offlineComponents}async function Hm(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(ne(pa,"Using user provided OnlineComponentProvider"),await ZA(n,n._uninitializedComponentsProvider._online)):(ne(pa,"Using default OnlineComponentProvider"),await ZA(n,new Xh))),n._onlineComponents}function CD(n){return aT(n).then(e=>e.persistence)}function oT(n){return aT(n).then(e=>e.localStore)}function DD(n){return Hm(n).then(e=>e.remoteStore)}function lT(n){return Hm(n).then(e=>e.syncEngine)}function w6(n){return Hm(n).then(e=>e.datastore)}async function Au(n){const e=await Hm(n),t=e.eventManager;return t.onListen=Yz.bind(null,e.syncEngine),t.onUnlisten=Zz.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Xz.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Jz.bind(null,e.syncEngine),t}function b6(n){return n.asyncQueue.enqueue(async()=>{const e=await CD(n),t=await DD(n);return e.setNetworkEnabled(!0),function(a){const o=de(a);return o.W_.delete(0),wd(o)}(t)})}function I6(n){return n.asyncQueue.enqueue(async()=>{const e=await CD(n),t=await DD(n);return e.setNetworkEnabled(!1),async function(a){const o=de(a);o.W_.add(0),await Bu(o),o.j_.set("Offline")}(t)})}function A6(n,e){const t=new yn;return n.asyncQueue.enqueueAndForget(async()=>async function(a,o,u){try{const d=await function(m,y){const v=de(m);return v.persistence.runTransaction("read document","readonly",w=>v.localDocuments.getDocument(w,y))}(a,o);d.isFoundDocument()?u.resolve(d):d.isNoDocument()?u.resolve(null):u.reject(new ee(K.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(d){const p=qu(d,`Failed to get document '${o} from cache`);u.reject(p)}}(await oT(n),e,t)),t.promise}function PD(n,e,t={}){const r=new yn;return n.asyncQueue.enqueueAndForget(async()=>function(o,u,d,p,m){const y=new jm({next:w=>{y.su(),u.enqueueAndForget(()=>ZE(o,v));const S=w.docs.has(d);!S&&w.fromCache?m.reject(new ee(K.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&w.fromCache&&p&&p.source==="server"?m.reject(new ee(K.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):m.resolve(w)},error:w=>m.reject(w)}),v=new eT(Mu(d.path),y,{includeMetadataChanges:!0,Ta:!0});return XE(o,v)}(await Au(n),n.asyncQueue,e,t,r)),r.promise}function S6(n,e){const t=new yn;return n.asyncQueue.enqueueAndForget(async()=>async function(a,o,u){try{const d=await tm(a,o,!0),p=new wD(o,d.gs),m=p.ba(d.documents),y=p.applyChanges(m,!1);u.resolve(y.snapshot)}catch(d){const p=qu(d,`Failed to execute query '${o} against cache`);u.reject(p)}}(await oT(n),e,t)),t.promise}function xD(n,e,t={}){const r=new yn;return n.asyncQueue.enqueueAndForget(async()=>function(o,u,d,p,m){const y=new jm({next:w=>{y.su(),u.enqueueAndForget(()=>ZE(o,v)),w.fromCache&&p.source==="server"?m.reject(new ee(K.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):m.resolve(w)},error:w=>m.reject(w)}),v=new eT(d,y,{includeMetadataChanges:!0,Ta:!0});return XE(o,v)}(await Au(n),n.asyncQueue,e,t,r)),r.promise}function R6(n,e){const t=new jm(e);return n.asyncQueue.enqueueAndForget(async()=>function(a,o){de(a).ia.add(o),o.next()}(await Au(n),t)),()=>{t.su(),n.asyncQueue.enqueueAndForget(async()=>function(a,o){de(a).ia.delete(o)}(await Au(n),t))}}function C6(n,e,t,r){const a=function(u,d){let p;return p=typeof u=="string"?_E().encode(u):u,function(y,v){return new y6(y,v)}(function(y,v){if(y instanceof Uint8Array)return XA(y,v);if(y instanceof ArrayBuffer)return XA(new Uint8Array(y),v);if(y instanceof ReadableStream)return y.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(p),d)}(t,Td(e));n.asyncQueue.enqueueAndForget(async()=>{m6(await lT(n),a,r)})}function D6(n,e){return n.asyncQueue.enqueue(async()=>function(r,a){const o=de(r);return o.persistence.runTransaction("Get named query","readonly",u=>o.Yr.getNamedQuery(u,a))}(await oT(n),e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ND(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JA=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uT(n,e,t){if(!t)throw new ee(K.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function OD(n,e,t,r){if(e===!0&&r===!0)throw new ee(K.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function eS(n){if(!ce.isDocumentKey(n))throw new ee(K.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function tS(n){if(ce.isDocumentKey(n))throw new ee(K.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Gm(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":me()}function Xe(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new ee(K.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Gm(n);throw new ee(K.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function kD(n,e){if(e<=0)throw new ee(K.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VD="firestore.googleapis.com",nS=!0;class rS{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ee(K.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=VD,this.ssl=nS}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:nS;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=H1;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<YB)throw new ee(K.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}OD("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ND((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new ee(K.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new ee(K.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new ee(K.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,a){return r.timeoutSeconds===a.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class bd{constructor(e,t,r,a){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new rS({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ee(K.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ee(K.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new rS(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new f4;switch(r.type){case"firstParty":return new _4(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ee(K.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=JA.get(t);r&&(ne("ComponentProvider","Removing Datastore"),JA.delete(t),r.terminate())}(this),Promise.resolve()}}function P6(n,e,t,r={}){var a;const o=(n=Xe(n,bd))._getSettings(),u=Object.assign(Object.assign({},o),{emulatorOptions:n._getEmulatorOptions()}),d=`${e}:${t}`;o.host!==VD&&o.host!==d&&di("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const p=Object.assign(Object.assign({},o),{host:d,ssl:!1,emulatorOptions:r});if(!ia(p,u)&&(n._setSettings(p),r.mockUserToken)){let m,y;if(typeof r.mockUserToken=="string")m=r.mockUserToken,y=cn.MOCK_USER;else{m=Nk(r.mockUserToken,(a=n._app)===null||a===void 0?void 0:a.options.projectId);const v=r.mockUserToken.sub||r.mockUserToken.user_id;if(!v)throw new ee(K.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");y=new cn(v)}n._authCredentials=new p4(new CC(m,y))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mn=class MD{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new MD(this.firestore,e,this._query)}},Tt=class LD{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ra(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new LD(this.firestore,e,this._key)}},ra=class UD extends Mn{constructor(e,t,r){super(e,t,Mu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Tt(this.firestore,null,new ce(e))}withConverter(e){return new UD(this.firestore,e,this._path)}};function BD(n,e,...t){if(n=Ie(n),uT("collection","path",e),n instanceof bd){const r=ze.fromString(e,...t);return tS(r),new ra(n,null,r)}{if(!(n instanceof Tt||n instanceof ra))throw new ee(K.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ze.fromString(e,...t));return tS(r),new ra(n.firestore,null,r)}}function x6(n,e){if(n=Xe(n,bd),uT("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new ee(K.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Mn(n,null,function(r){return new ns(ze.emptyPath(),r)}(e))}function sm(n,e,...t){if(n=Ie(n),arguments.length===1&&(e=DC.newId()),uT("doc","path",e),n instanceof bd){const r=ze.fromString(e,...t);return eS(r),new Tt(n,null,new ce(r))}{if(!(n instanceof Tt||n instanceof ra))throw new ee(K.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ze.fromString(e,...t));return eS(r),new Tt(n.firestore,n instanceof ra?n.converter:null,new ce(r))}}function zD(n,e){return n=Ie(n),e=Ie(e),(n instanceof Tt||n instanceof ra)&&(e instanceof Tt||e instanceof ra)&&n.firestore===e.firestore&&n.path===e.path&&n.converter===e.converter}function FD(n,e){return n=Ie(n),e=Ie(e),n instanceof Mn&&e instanceof Mn&&n.firestore===e.firestore&&gd(n._query,e._query)&&n.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iS="AsyncQueue";class sS{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new $E(this,"async_queue_retry"),this.Su=()=>{const r=Rp();r&&ne(iS,"Visibility state changed to "+r.visibilityState),this.a_.t_()},this.bu=e;const t=Rp();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const t=Rp();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Su)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const t=new yn;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!Ea(e))throw e;ne(iS,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const t=this.bu.then(()=>(this.pu=!0,e().catch(r=>{this.gu=r,this.pu=!1;const a=function(u){let d=u.message||"";return u.stack&&(d=u.stack.includes(u.message)?u.stack:u.message+`
`+u.stack),d}(r);throw Vt("INTERNAL UNHANDLED ERROR: ",a),r}).then(r=>(this.pu=!1,r))));return this.bu=t,t}enqueueAfterDelay(e,t,r){this.Du(),this.wu.indexOf(e)>-1&&(t=0);const a=YE.createAndSchedule(this,e,t,r,o=>this.Fu(o));return this.fu.push(a),a}Du(){this.gu&&me()}verifyOperationInProgress(){}async Mu(){let e;do e=this.bu,await e;while(e!==this.bu)}xu(e){for(const t of this.fu)if(t.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.fu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const t=this.fu.indexOf(e);this.fu.splice(t,1)}}function Av(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const a=t;for(const o of r)if(o in a&&typeof a[o]=="function")return!0;return!1}(n,["next","error","complete"])}class N6{constructor(){this._progressObserver={},this._taskCompletionResolver=new yn,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,r){this._progressObserver={next:e,error:t,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O6=-1;let Lt=class extends bd{constructor(e,t,r,a){super(e,t,r,a),this.type="firestore",this._queue=new sS,this._persistenceKey=(a==null?void 0:a.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new sS(e),this._firestoreClient=void 0,await e}}};function Sn(n){if(n._terminated)throw new ee(K.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||qD(n),n._firestoreClient}function qD(n){var e,t,r;const a=n._freezeSettings(),o=function(d,p,m,y){return new eB(d,p,m,y.host,y.ssl,y.experimentalForceLongPolling,y.experimentalAutoDetectLongPolling,ND(y.experimentalLongPollingOptions),y.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,a);n._componentsProvider||!((t=a.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=a.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:a.localCache._offlineComponentProvider,_online:a.localCache._onlineComponentProvider}),n._firestoreClient=new T6(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(d){const p=d==null?void 0:d._online.build();return{_offline:d==null?void 0:d._offline.build(p),_online:p}}(n._componentsProvider))}function k6(n,e){di("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=n._freezeSettings();return jD(n,Xh.provider,{build:r=>new RD(r,t.cacheSizeBytes,e==null?void 0:e.forceOwnership)}),Promise.resolve()}async function V6(n){di("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const e=n._freezeSettings();jD(n,Xh.provider,{build:t=>new _6(t,e.cacheSizeBytes)})}function jD(n,e,t){if((n=Xe(n,Lt))._firestoreClient||n._terminated)throw new ee(K.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(n._componentsProvider||n._getSettings().localCache)throw new ee(K.FAILED_PRECONDITION,"SDK cache is already specified.");n._componentsProvider={_online:e,_offline:t},qD(n)}function M6(n){if(n._initialized&&!n._terminated)throw new ee(K.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new yn;return n._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(r){if(!oi.D())return Promise.resolve();const a=r+J1;await oi.delete(a)}(qE(n._databaseId,n._persistenceKey)),e.resolve()}catch(t){e.reject(t)}}),e.promise}function L6(n){return function(t){const r=new yn;return t.asyncQueue.enqueueAndForget(async()=>i6(await lT(t),r)),r.promise}(Sn(n=Xe(n,Lt)))}function U6(n){return b6(Sn(n=Xe(n,Lt)))}function B6(n){return I6(Sn(n=Xe(n,Lt)))}function z6(n,e){const t=Sn(n=Xe(n,Lt)),r=new N6;return C6(t,n._databaseId,e,r),r}function F6(n,e){return D6(Sn(n=Xe(n,Lt)),e).then(t=>t?new Mn(n,null,t.query):null)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new pi(Dt.fromBase64String(e))}catch(t){throw new ee(K.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new pi(Dt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ma=class{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ee(K.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new pt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Uo=class{constructor(e){this._methodName=e}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ee(K.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ee(K.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Se(this._lat,e._lat)||Se(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cT{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,a){if(r.length!==a.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==a[o])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q6=/^__.*__$/;class j6{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new is(e,this.data,this.fieldMask,t,this.fieldTransforms):new Lu(e,this.data,t,this.fieldTransforms)}}class HD{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new is(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function GD(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw me()}}class Km{constructor(e,t,r,a,o,u){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=a,o===void 0&&this.Bu(),this.fieldTransforms=o||[],this.fieldMask=u||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new Km(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),a=this.ku({path:r,Qu:!1});return a.$u(e),a}Uu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),a=this.ku({path:r,Qu:!1});return a.Bu(),a}Ku(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return am(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(GD(this.Lu)&&q6.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class H6{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Td(e)}ju(e,t,r,a=!1){return new Km({Lu:e,methodName:t,zu:r,path:pt.emptyPath(),Qu:!1,Gu:a},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Bo(n){const e=n._freezeSettings(),t=Td(n._databaseId);return new H6(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Qm(n,e,t,r,a,o={}){const u=n.ju(o.merge||o.mergeFields?2:0,e,t,a);_T("Data must be an object, but it was:",u,r);const d=QD(r,u);let p,m;if(o.merge)p=new jn(u.fieldMask),m=u.fieldTransforms;else if(o.mergeFields){const y=[];for(const v of o.mergeFields){const w=Sv(e,v,t);if(!u.contains(w))throw new ee(K.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);YD(y,w)||y.push(w)}p=new jn(y),m=u.fieldTransforms.filter(v=>p.covers(v.field))}else p=null,m=u.fieldTransforms;return new j6(new _n(d),p,m)}class Id extends Uo{_toFieldTransform(e){if(e.Lu!==2)throw e.Lu===1?e.Wu(`${this._methodName}() can only appear at the top level of your update data`):e.Wu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Id}}function $D(n,e,t){return new Km({Lu:3,zu:e.settings.zu,methodName:n._methodName,Qu:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class hT extends Uo{_toFieldTransform(e){return new yd(e.path,new _u)}isEqual(e){return e instanceof hT}}class dT extends Uo{constructor(e,t){super(e),this.Hu=t}_toFieldTransform(e){const t=$D(this,e,!0),r=this.Hu.map(o=>zo(o,t)),a=new Ro(r);return new yd(e.path,a)}isEqual(e){return e instanceof dT&&ia(this.Hu,e.Hu)}}class fT extends Uo{constructor(e,t){super(e),this.Hu=t}_toFieldTransform(e){const t=$D(this,e,!0),r=this.Hu.map(o=>zo(o,t)),a=new Co(r);return new yd(e.path,a)}isEqual(e){return e instanceof fT&&ia(this.Hu,e.Hu)}}class pT extends Uo{constructor(e,t){super(e),this.Ju=t}_toFieldTransform(e){const t=new yu(e.serializer,_1(e.serializer,this.Ju));return new yd(e.path,t)}isEqual(e){return e instanceof pT&&this.Ju===e.Ju}}function mT(n,e,t,r){const a=n.ju(1,e,t);_T("Data must be an object, but it was:",a,r);const o=[],u=_n.empty();Ta(r,(p,m)=>{const y=yT(e,p,t);m=Ie(m);const v=a.Uu(y);if(m instanceof Id)o.push(y);else{const w=zo(m,v);w!=null&&(o.push(y),u.set(y,w))}});const d=new jn(o);return new HD(u,d,a.fieldTransforms)}function gT(n,e,t,r,a,o){const u=n.ju(1,e,t),d=[Sv(e,r,t)],p=[a];if(o.length%2!=0)throw new ee(K.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let w=0;w<o.length;w+=2)d.push(Sv(e,o[w])),p.push(o[w+1]);const m=[],y=_n.empty();for(let w=d.length-1;w>=0;--w)if(!YD(m,d[w])){const S=d[w];let P=p[w];P=Ie(P);const U=u.Uu(S);if(P instanceof Id)m.push(S);else{const L=zo(P,U);L!=null&&(m.push(S),y.set(S,L))}}const v=new jn(m);return new HD(y,v,u.fieldTransforms)}function KD(n,e,t,r=!1){return zo(t,n.ju(r?4:3,e))}function zo(n,e){if(WD(n=Ie(n)))return _T("Unsupported field value:",e,n),QD(n,e);if(n instanceof Uo)return function(r,a){if(!GD(a.Lu))throw a.Wu(`${r._methodName}() can only be used with update() and set()`);if(!a.path)throw a.Wu(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(a);o&&a.fieldTransforms.push(o)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(r,a){const o=[];let u=0;for(const d of r){let p=zo(d,a.Ku(u));p==null&&(p={nullValue:"NULL_VALUE"}),o.push(p),u++}return{arrayValue:{values:o}}}(n,e)}return function(r,a){if((r=Ie(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return _1(a.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=gt.fromDate(r);return{timestampValue:vu(a.serializer,o)}}if(r instanceof gt){const o=new gt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:vu(a.serializer,o)}}if(r instanceof $m)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof pi)return{bytesValue:C1(a.serializer,r._byteString)};if(r instanceof Tt){const o=a.databaseId,u=r.firestore._databaseId;if(!u.isEqual(o))throw a.Wu(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:VE(r.firestore._databaseId||a.databaseId,r._key.path)}}if(r instanceof cT)return function(u,d){return{mapValue:{fields:{[IE]:{stringValue:AE},[pu]:{arrayValue:{values:u.toArray().map(m=>{if(typeof m!="number")throw d.Wu("VectorValues must only contain numeric values.");return DE(d.serializer,m)})}}}}}}(r,a);throw a.Wu(`Unsupported field value: ${Gm(r)}`)}(n,e)}function QD(n,e){const t={};return $C(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ta(n,(r,a)=>{const o=zo(a,e.qu(r));o!=null&&(t[r]=o)}),{mapValue:{fields:t}}}function WD(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof gt||n instanceof $m||n instanceof pi||n instanceof Tt||n instanceof Uo||n instanceof cT)}function _T(n,e,t){if(!WD(t)||!function(a){return typeof a=="object"&&a!==null&&(Object.getPrototypeOf(a)===Object.prototype||Object.getPrototypeOf(a)===null)}(t)){const r=Gm(t);throw r==="an object"?e.Wu(n+" a custom object"):e.Wu(n+" "+r)}}function Sv(n,e,t){if((e=Ie(e))instanceof ma)return e._internalPath;if(typeof e=="string")return yT(n,e);throw am("Field path arguments must be of type string or ",n,!1,void 0,t)}const G6=new RegExp("[~\\*/\\[\\]]");function yT(n,e,t){if(e.search(G6)>=0)throw am(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new ma(...e.split("."))._internalPath}catch{throw am(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function am(n,e,t,r,a){const o=r&&!r.isEmpty(),u=a!==void 0;let d=`Function ${e}() called with invalid data`;t&&(d+=" (via `toFirestore()`)"),d+=". ";let p="";return(o||u)&&(p+=" (found",o&&(p+=` in field ${r}`),u&&(p+=` in document ${a}`),p+=")"),new ee(K.INVALID_ARGUMENT,d+n+p)}function YD(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{constructor(e,t,r,a,o){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=a,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Tt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new $6(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Wm("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class $6 extends Zh{data(){return super.data()}}function Wm(n,e){return typeof e=="string"?yT(n,e):e instanceof ma?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XD(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new ee(K.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class vT{}class Ad extends vT{}function Ks(n,e,...t){let r=[];e instanceof vT&&r.push(e),r=r.concat(t),function(o){const u=o.filter(p=>p instanceof ET).length,d=o.filter(p=>p instanceof Ym).length;if(u>1||u>0&&d>0)throw new ee(K.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const a of r)n=a._apply(n);return n}class Ym extends Ad{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Ym(e,t,r)}_apply(e){const t=this._parse(e);return JD(e._query,t),new Mn(e.firestore,e.converter,dv(e._query,t))}_parse(e){const t=Bo(e.firestore);return function(o,u,d,p,m,y,v){let w;if(m.isKeyField()){if(y==="array-contains"||y==="array-contains-any")throw new ee(K.INVALID_ARGUMENT,`Invalid Query. You can't perform '${y}' queries on documentId().`);if(y==="in"||y==="not-in"){oS(v,y);const P=[];for(const U of v)P.push(aS(p,o,U));w={arrayValue:{values:P}}}else w=aS(p,o,v)}else y!=="in"&&y!=="not-in"&&y!=="array-contains-any"||oS(v,y),w=KD(d,u,v,y==="in"||y==="not-in");return Fe.create(m,y,w)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function K6(n,e,t){const r=e,a=Wm("where",n);return Ym._create(a,r,t)}class ET extends vT{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new ET(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:tt.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(a,o){let u=a;const d=o.getFlattenedFilters();for(const p of d)JD(u,p),u=dv(u,p)}(e._query,t),new Mn(e.firestore,e.converter,dv(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class TT extends Ad{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new TT(e,t)}_apply(e){const t=function(a,o,u){if(a.startAt!==null)throw new ee(K.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(a.endAt!==null)throw new ee(K.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Kh(o,u)}(e._query,this._field,this._direction);return new Mn(e.firestore,e.converter,function(a,o){const u=a.explicitOrderBy.concat([o]);return new ns(a.path,a.collectionGroup,u,a.filters.slice(),a.limit,a.limitType,a.startAt,a.endAt)}(e._query,t))}}function Q6(n,e="asc"){const t=e,r=Wm("orderBy",n);return TT._create(r,t)}class Xm extends Ad{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new Xm(e,t,r)}_apply(e){return new Mn(e.firestore,e.converter,Yp(e._query,this._limit,this._limitType))}}function W6(n){return kD("limit",n),Xm._create("limit",n,"F")}function Y6(n){return kD("limitToLast",n),Xm._create("limitToLast",n,"L")}class Zm extends Ad{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new Zm(e,t,r)}_apply(e){const t=ZD(e,this.type,this._docOrFields,this._inclusive);return new Mn(e.firestore,e.converter,function(a,o){return new ns(a.path,a.collectionGroup,a.explicitOrderBy.slice(),a.filters.slice(),a.limit,a.limitType,o,a.endAt)}(e._query,t))}}function X6(...n){return Zm._create("startAt",n,!0)}function Z6(...n){return Zm._create("startAfter",n,!1)}class Jm extends Ad{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new Jm(e,t,r)}_apply(e){const t=ZD(e,this.type,this._docOrFields,this._inclusive);return new Mn(e.firestore,e.converter,function(a,o){return new ns(a.path,a.collectionGroup,a.explicitOrderBy.slice(),a.filters.slice(),a.limit,a.limitType,a.startAt,o)}(e._query,t))}}function J6(...n){return Jm._create("endBefore",n,!1)}function eF(...n){return Jm._create("endAt",n,!0)}function ZD(n,e,t,r){if(t[0]=Ie(t[0]),t[0]instanceof Zh)return function(o,u,d,p,m){if(!p)throw new ee(K.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${d}().`);const y=[];for(const v of Xl(o))if(v.field.isKeyField())y.push(Ao(u,p.key));else{const w=p.data.field(v.field);if(Om(w))throw new ee(K.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+v.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(w===null){const S=v.field.canonicalString();throw new ee(K.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${S}' (used as the orderBy) does not exist.`)}y.push(w)}return new da(y,m)}(n._query,n.firestore._databaseId,e,t[0]._document,r);{const a=Bo(n.firestore);return function(u,d,p,m,y,v){const w=u.explicitOrderBy;if(y.length>w.length)throw new ee(K.INVALID_ARGUMENT,`Too many arguments provided to ${m}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const S=[];for(let P=0;P<y.length;P++){const U=y[P];if(w[P].field.isKeyField()){if(typeof U!="string")throw new ee(K.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${m}(), but got a ${typeof U}`);if(!RE(u)&&U.indexOf("/")!==-1)throw new ee(K.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${m}() must be a plain document ID, but '${U}' contains a slash.`);const L=u.path.child(ze.fromString(U));if(!ce.isDocumentKey(L))throw new ee(K.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${m}() must result in a valid document path, but '${L}' is not because it contains an odd number of segments.`);const z=new ce(L);S.push(Ao(d,z))}else{const L=KD(p,m,U);S.push(L)}}return new da(S,v)}(n._query,n.firestore._databaseId,a,e,t,r)}}function aS(n,e,t){if(typeof(t=Ie(t))=="string"){if(t==="")throw new ee(K.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!RE(e)&&t.indexOf("/")!==-1)throw new ee(K.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(ze.fromString(t));if(!ce.isDocumentKey(r))throw new ee(K.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ao(n,new ce(r))}if(t instanceof Tt)return Ao(n,t._key);throw new ee(K.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Gm(t)}.`)}function oS(n,e){if(!Array.isArray(n)||n.length===0)throw new ee(K.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function JD(n,e){const t=function(a,o){for(const u of a)for(const d of u.getFlattenedFilters())if(o.indexOf(d.op)>=0)return d.op;return null}(n.filters,function(a){switch(a){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new ee(K.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ee(K.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class wT{convertValue(e,t="none"){switch(ca(e)){case 0:return null;case 1:return e.booleanValue;case 2:return dt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Zi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw me()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Ta(e,(a,o)=>{r[a]=this.convertValue(o,t)}),r}convertVectorValue(e){var t,r,a;const o=(a=(r=(t=e.fields)===null||t===void 0?void 0:t[pu].arrayValue)===null||r===void 0?void 0:r.values)===null||a===void 0?void 0:a.map(u=>dt(u.doubleValue));return new cT(o)}convertGeoPoint(e){return new $m(dt(e.latitude),dt(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=km(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Hh(e));default:return null}}convertTimestamp(e){const t=Xi(e);return new gt(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=ze.fromString(e);ye(B1(r));const a=new ua(r.get(1),r.get(3)),o=new ce(r.popFirst(5));return a.isEqual(t)||Vt(`Document ${o} contains a document reference within a different database (${a.projectId}/${a.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eg(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class tF extends wT{constructor(e){super(),this.firestore=e}convertBytes(e){return new pi(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Tt(this.firestore,null,t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}let Ji=class extends Zh{constructor(e,t,r,a,o,u){super(e,t,r,a,u),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ch(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Wm("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}},Ch=class extends Ji{data(e={}){return super.data(e)}},ga=class{constructor(e,t,r,a){this._firestore=e,this._userDataWriter=t,this._snapshot=a,this.metadata=new mo(a.hasPendingWrites,a.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Ch(this._firestore,this._userDataWriter,r.key,r,new mo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ee(K.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(a,o){if(a._snapshot.oldDocs.isEmpty()){let u=0;return a._snapshot.docChanges.map(d=>{const p=new Ch(a._firestore,a._userDataWriter,d.doc.key,d.doc,new mo(a._snapshot.mutatedKeys.has(d.doc.key),a._snapshot.fromCache),a.query.converter);return d.doc,{type:"added",doc:p,oldIndex:-1,newIndex:u++}})}{let u=a._snapshot.oldDocs;return a._snapshot.docChanges.filter(d=>o||d.type!==3).map(d=>{const p=new Ch(a._firestore,a._userDataWriter,d.doc.key,d.doc,new mo(a._snapshot.mutatedKeys.has(d.doc.key),a._snapshot.fromCache),a.query.converter);let m=-1,y=-1;return d.type!==0&&(m=u.indexOf(d.doc.key),u=u.delete(d.doc.key)),d.type!==1&&(u=u.add(d.doc),y=u.indexOf(d.doc.key)),{type:nF(d.type),doc:p,oldIndex:m,newIndex:y}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}};function nF(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return me()}}function eP(n,e){return n instanceof Ji&&e instanceof Ji?n._firestore===e._firestore&&n._key.isEqual(e._key)&&(n._document===null?e._document===null:n._document.isEqual(e._document))&&n._converter===e._converter:n instanceof ga&&e instanceof ga&&n._firestore===e._firestore&&FD(n.query,e.query)&&n.metadata.isEqual(e.metadata)&&n._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rF(n){n=Xe(n,Tt);const e=Xe(n.firestore,Lt);return PD(Sn(e),n._key).then(t=>bT(e,n,t))}class Fo extends wT{constructor(e){super(),this.firestore=e}convertBytes(e){return new pi(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Tt(this.firestore,null,t)}}function iF(n){n=Xe(n,Tt);const e=Xe(n.firestore,Lt),t=Sn(e),r=new Fo(e);return A6(t,n._key).then(a=>new Ji(e,r,n._key,a,new mo(a!==null&&a.hasLocalMutations,!0),n.converter))}function sF(n){n=Xe(n,Tt);const e=Xe(n.firestore,Lt);return PD(Sn(e),n._key,{source:"server"}).then(t=>bT(e,n,t))}function aF(n){n=Xe(n,Mn);const e=Xe(n.firestore,Lt),t=Sn(e),r=new Fo(e);return XD(n._query),xD(t,n._query).then(a=>new ga(e,r,n,a))}function oF(n){n=Xe(n,Mn);const e=Xe(n.firestore,Lt),t=Sn(e),r=new Fo(e);return S6(t,n._query).then(a=>new ga(e,r,n,a))}function lF(n){n=Xe(n,Mn);const e=Xe(n.firestore,Lt),t=Sn(e),r=new Fo(e);return xD(t,n._query,{source:"server"}).then(a=>new ga(e,r,n,a))}function lS(n,e,t){n=Xe(n,Tt);const r=Xe(n.firestore,Lt),a=eg(n.converter,e,t);return Sd(r,[Qm(Bo(r),"setDoc",n._key,a,n.converter!==null,t).toMutation(n._key,mt.none())])}function uS(n,e,t,...r){n=Xe(n,Tt);const a=Xe(n.firestore,Lt),o=Bo(a);let u;return u=typeof(e=Ie(e))=="string"||e instanceof ma?gT(o,"updateDoc",n._key,e,t,r):mT(o,"updateDoc",n._key,e),Sd(a,[u.toMutation(n._key,mt.exists(!0))])}function uF(n){return Sd(Xe(n.firestore,Lt),[new Uu(n._key,mt.none())])}function cF(n,e){const t=Xe(n.firestore,Lt),r=sm(n),a=eg(n.converter,e);return Sd(t,[Qm(Bo(n.firestore),"addDoc",r._key,a,n.converter!==null,{}).toMutation(r._key,mt.exists(!1))]).then(()=>r)}function tP(n,...e){var t,r,a;n=Ie(n);let o={includeMetadataChanges:!1,source:"default"},u=0;typeof e[u]!="object"||Av(e[u])||(o=e[u],u++);const d={includeMetadataChanges:o.includeMetadataChanges,source:o.source};if(Av(e[u])){const v=e[u];e[u]=(t=v.next)===null||t===void 0?void 0:t.bind(v),e[u+1]=(r=v.error)===null||r===void 0?void 0:r.bind(v),e[u+2]=(a=v.complete)===null||a===void 0?void 0:a.bind(v)}let p,m,y;if(n instanceof Tt)m=Xe(n.firestore,Lt),y=Mu(n._key.path),p={next:v=>{e[u]&&e[u](bT(m,n,v))},error:e[u+1],complete:e[u+2]};else{const v=Xe(n,Mn);m=Xe(v.firestore,Lt),y=v._query;const w=new Fo(m);p={next:S=>{e[u]&&e[u](new ga(m,w,v,S))},error:e[u+1],complete:e[u+2]},XD(n._query)}return function(w,S,P,U){const L=new jm(U),z=new eT(S,L,P);return w.asyncQueue.enqueueAndForget(async()=>XE(await Au(w),z)),()=>{L.su(),w.asyncQueue.enqueueAndForget(async()=>ZE(await Au(w),z))}}(Sn(m),y,d,p)}function hF(n,e){return R6(Sn(n=Xe(n,Lt)),Av(e)?e:{next:e})}function Sd(n,e){return function(r,a){const o=new yn;return r.asyncQueue.enqueueAndForget(async()=>e6(await lT(r),a,o)),o.promise}(Sn(n),e)}function bT(n,e,t){const r=t.docs.get(e._key),a=new Fo(n);return new Ji(n,a,e._key,r,new mo(t.hasPendingWrites,t.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dF={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fF=class{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Bo(e)}set(e,t,r){this._verifyNotCommitted();const a=Zs(e,this._firestore),o=eg(a.converter,t,r),u=Qm(this._dataReader,"WriteBatch.set",a._key,o,a.converter!==null,r);return this._mutations.push(u.toMutation(a._key,mt.none())),this}update(e,t,r,...a){this._verifyNotCommitted();const o=Zs(e,this._firestore);let u;return u=typeof(t=Ie(t))=="string"||t instanceof ma?gT(this._dataReader,"WriteBatch.update",o._key,t,r,a):mT(this._dataReader,"WriteBatch.update",o._key,t),this._mutations.push(u.toMutation(o._key,mt.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Zs(e,this._firestore);return this._mutations=this._mutations.concat(new Uu(t._key,mt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new ee(K.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}};function Zs(n,e){if((n=Ie(n)).firestore!==e)throw new ee(K.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pF{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=Bo(e)}get(e){const t=Zs(e,this._firestore),r=new tF(this._firestore);return this._transaction.lookup([t._key]).then(a=>{if(!a||a.length!==1)return me();const o=a[0];if(o.isFoundDocument())return new Zh(this._firestore,r,o.key,o,t.converter);if(o.isNoDocument())return new Zh(this._firestore,r,t._key,null,t.converter);throw me()})}set(e,t,r){const a=Zs(e,this._firestore),o=eg(a.converter,t,r),u=Qm(this._dataReader,"Transaction.set",a._key,o,a.converter!==null,r);return this._transaction.set(a._key,u),this}update(e,t,r,...a){const o=Zs(e,this._firestore);let u;return u=typeof(t=Ie(t))=="string"||t instanceof ma?gT(this._dataReader,"Transaction.update",o._key,t,r,a):mT(this._dataReader,"Transaction.update",o._key,t),this._transaction.update(o._key,u),this}delete(e){const t=Zs(e,this._firestore);return this._transaction.delete(t._key),this}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mF=class extends pF{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=Zs(e,this._firestore),r=new Fo(this._firestore);return super.get(e).then(a=>new Ji(this._firestore,r,t._key,a._document,new mo(!1,!1),t.converter))}};function gF(n,e,t){n=Xe(n,Lt);const r=Object.assign(Object.assign({},dF),t);return function(o){if(o.maxAttempts<1)throw new ee(K.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(o,u,d){const p=new yn;return o.asyncQueue.enqueueAndForget(async()=>{const m=await w6(o);new E6(o.asyncQueue,m,d,u,p).Iu()}),p.promise}(Sn(n),a=>e(new mF(n,a)),r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _F(){return new Id("deleteField")}function yF(){return new hT("serverTimestamp")}function vF(...n){return new dT("arrayUnion",n)}function EF(...n){return new fT("arrayRemove",n)}function TF(n){return new pT("increment",n)}(function(e,t=!0){(function(a){Vu=a})(_a),oa(new ci("firestore",(r,{instanceIdentifier:a,options:o})=>{const u=r.getProvider("app").getImmediate(),d=new Lt(new m4(r.getProvider("auth-internal")),new y4(u,r.getProvider("app-check-internal")),function(m,y){if(!Object.prototype.hasOwnProperty.apply(m.options,["projectId"]))throw new ee(K.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ua(m.options.projectId,y)}(u,a),u);return o=Object.assign({useFetchStreams:t},o),d._setSettings(o),d},"PUBLIC").setMultipleInstances(!0)),Or(zI,FI,e),Or(zI,FI,"esm2017")})();const wF="@firebase/firestore-compat",bF="0.3.45";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IT(n,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new ee("invalid-argument",`Invalid options passed to function ${n}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cS(){if(typeof Uint8Array>"u")throw new ee("unimplemented","Uint8Arrays are not available in this environment.")}function hS(){if(!Z4())throw new ee("unimplemented","Blobs are unavailable in Firestore in this environment.")}class Jh{constructor(e){this._delegate=e}static fromBase64String(e){return hS(),new Jh(pi.fromBase64String(e))}static fromUint8Array(e){return cS(),new Jh(pi.fromUint8Array(e))}toBase64(){return hS(),this._delegate.toBase64()}toUint8Array(){return cS(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rv(n){return IF(n,["next","error","complete"])}function IF(n,e){if(typeof n!="object"||n===null)return!1;const t=n;for(const r of e)if(r in t&&typeof t[r]=="function")return!0;return!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AF{enableIndexedDbPersistence(e,t){return k6(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return V6(e._delegate)}clearIndexedDbPersistence(e){return M6(e._delegate)}}class nP{constructor(e,t,r){this._delegate=t,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof ua||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();!e.merge&&t.host!==e.host&&di("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,r={}){P6(this._delegate,e,t,r)}enableNetwork(){return U6(this._delegate)}disableNetwork(){return B6(this._delegate)}enablePersistence(e){let t=!1,r=!1;return e&&(t=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,OD("synchronizeTabs",t,"experimentalForceOwningTab",r)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return L6(this._delegate)}onSnapshotsInSync(e){return hF(this._delegate,e)}get app(){if(!this._appCompat)throw new ee("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new Su(this,BD(this._delegate,e))}catch(t){throw On(t,"collection()","Firestore.collection()")}}doc(e){try{return new Er(this,sm(this._delegate,e))}catch(t){throw On(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Nn(this,x6(this._delegate,e))}catch(t){throw On(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return gF(this._delegate,t=>e(new rP(this,t)))}batch(){return Sn(this._delegate),new iP(new fF(this._delegate,e=>Sd(this._delegate,e)))}loadBundle(e){return z6(this._delegate,e)}namedQuery(e){return F6(this._delegate,e).then(t=>t?new Nn(this,t):null)}}class tg extends wT{constructor(e){super(),this.firestore=e}convertBytes(e){return new Jh(new pi(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return Er.forKey(t,this.firestore,null)}}function SF(n){h4(n)}class rP{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new tg(e)}get(e){const t=go(e);return this._delegate.get(t).then(r=>new ed(this._firestore,new Ji(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,t.converter)))}set(e,t,r){const a=go(e);return r?(IT("Transaction.set",r),this._delegate.set(a,t,r)):this._delegate.set(a,t),this}update(e,t,r,...a){const o=go(e);return arguments.length===2?this._delegate.update(o,t):this._delegate.update(o,t,r,...a),this}delete(e){const t=go(e);return this._delegate.delete(t),this}}class iP{constructor(e){this._delegate=e}set(e,t,r){const a=go(e);return r?(IT("WriteBatch.set",r),this._delegate.set(a,t,r)):this._delegate.set(a,t),this}update(e,t,r,...a){const o=go(e);return arguments.length===2?this._delegate.update(o,t):this._delegate.update(o,t,r,...a),this}delete(e){const t=go(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class Oo{constructor(e,t,r){this._firestore=e,this._userDataWriter=t,this._delegate=r}fromFirestore(e,t){const r=new Ch(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new td(this._firestore,r),t??{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const r=Oo.INSTANCES;let a=r.get(e);a||(a=new WeakMap,r.set(e,a));let o=a.get(t);return o||(o=new Oo(e,new tg(e),t),a.set(t,o)),o}}Oo.INSTANCES=new WeakMap;class Er{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new tg(e)}static forPath(e,t,r){if(e.length%2!==0)throw new ee("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new Er(t,new Tt(t._delegate,r,new ce(e)))}static forKey(e,t,r){return new Er(t,new Tt(t._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new Su(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new Su(this.firestore,BD(this._delegate,e))}catch(t){throw On(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=Ie(e),e instanceof Tt?zD(this._delegate,e):!1}set(e,t){t=IT("DocumentReference.set",t);try{return t?lS(this._delegate,e,t):lS(this._delegate,e)}catch(r){throw On(r,"setDoc()","DocumentReference.set()")}}update(e,t,...r){try{return arguments.length===1?uS(this._delegate,e):uS(this._delegate,e,t,...r)}catch(a){throw On(a,"updateDoc()","DocumentReference.update()")}}delete(){return uF(this._delegate)}onSnapshot(...e){const t=sP(e),r=aP(e,a=>new ed(this.firestore,new Ji(this.firestore._delegate,this._userDataWriter,a._key,a._document,a.metadata,this._delegate.converter)));return tP(this._delegate,t,r)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=iF(this._delegate):(e==null?void 0:e.source)==="server"?t=sF(this._delegate):t=rF(this._delegate),t.then(r=>new ed(this.firestore,new Ji(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new Er(this.firestore,e?this._delegate.withConverter(Oo.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function On(n,e,t){return n.message=n.message.replace(e,t),n}function sP(n){for(const e of n)if(typeof e=="object"&&!Rv(e))return e;return{}}function aP(n,e){var t,r;let a;return Rv(n[0])?a=n[0]:Rv(n[1])?a=n[1]:typeof n[0]=="function"?a={next:n[0],error:n[1],complete:n[2]}:a={next:n[1],error:n[2],complete:n[3]},{next:o=>{a.next&&a.next(e(o))},error:(t=a.error)===null||t===void 0?void 0:t.bind(a),complete:(r=a.complete)===null||r===void 0?void 0:r.bind(a)}}class ed{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new Er(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return eP(this._delegate,e._delegate)}}class td extends ed{data(e){const t=this._delegate.data(e);return this._delegate._converter||d4(t!==void 0),t}}class Nn{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new tg(e)}where(e,t,r){try{return new Nn(this.firestore,Ks(this._delegate,K6(e,t,r)))}catch(a){throw On(a,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new Nn(this.firestore,Ks(this._delegate,Q6(e,t)))}catch(r){throw On(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Nn(this.firestore,Ks(this._delegate,W6(e)))}catch(t){throw On(t,"limit()","Query.limit()")}}limitToLast(e){try{return new Nn(this.firestore,Ks(this._delegate,Y6(e)))}catch(t){throw On(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Nn(this.firestore,Ks(this._delegate,X6(...e)))}catch(t){throw On(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Nn(this.firestore,Ks(this._delegate,Z6(...e)))}catch(t){throw On(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Nn(this.firestore,Ks(this._delegate,J6(...e)))}catch(t){throw On(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Nn(this.firestore,Ks(this._delegate,eF(...e)))}catch(t){throw On(t,"endAt()","Query.endAt()")}}isEqual(e){return FD(this._delegate,e._delegate)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=oF(this._delegate):(e==null?void 0:e.source)==="server"?t=lF(this._delegate):t=aF(this._delegate),t.then(r=>new Cv(this.firestore,new ga(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const t=sP(e),r=aP(e,a=>new Cv(this.firestore,new ga(this.firestore._delegate,this._userDataWriter,this._delegate,a._snapshot)));return tP(this._delegate,t,r)}withConverter(e){return new Nn(this.firestore,e?this._delegate.withConverter(Oo.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class RF{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new td(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class Cv{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new Nn(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new td(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(t=>new RF(this._firestore,t))}forEach(e,t){this._delegate.forEach(r=>{e.call(t,new td(this._firestore,r))})}isEqual(e){return eP(this._delegate,e._delegate)}}class Su extends Nn{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new Er(this.firestore,e):null}doc(e){try{return e===void 0?new Er(this.firestore,sm(this._delegate)):new Er(this.firestore,sm(this._delegate,e))}catch(t){throw On(t,"doc()","CollectionReference.doc()")}}add(e){return cF(this._delegate,e).then(t=>new Er(this.firestore,t))}isEqual(e){return zD(this._delegate,e._delegate)}withConverter(e){return new Su(this.firestore,e?this._delegate.withConverter(Oo.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function go(n){return Xe(n,Tt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AT{constructor(...e){this._delegate=new ma(...e)}static documentId(){return new AT(pt.keyField().canonicalString())}isEqual(e){return e=Ie(e),e instanceof ma?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{static serverTimestamp(){const e=yF();return e._methodName="FieldValue.serverTimestamp",new co(e)}static delete(){const e=_F();return e._methodName="FieldValue.delete",new co(e)}static arrayUnion(...e){const t=vF(...e);return t._methodName="FieldValue.arrayUnion",new co(t)}static arrayRemove(...e){const t=EF(...e);return t._methodName="FieldValue.arrayRemove",new co(t)}static increment(e){const t=TF(e);return t._methodName="FieldValue.increment",new co(t)}constructor(e){this._delegate=e}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CF={Firestore:nP,GeoPoint:$m,Timestamp:gt,Blob:Jh,Transaction:rP,WriteBatch:iP,DocumentReference:Er,DocumentSnapshot:ed,Query:Nn,QueryDocumentSnapshot:td,QuerySnapshot:Cv,CollectionReference:Su,FieldPath:AT,FieldValue:co,setLogLevel:SF,CACHE_SIZE_UNLIMITED:O6};function DF(n,e){n.INTERNAL.registerComponent(new ci("firestore-compat",t=>{const r=t.getProvider("app-compat").getImmediate(),a=t.getProvider("firestore").getImmediate();return e(r,a)},"PUBLIC").setServiceProps(Object.assign({},CF)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PF(n){DF(n,(e,t)=>new nP(e,t,new AF)),n.registerVersion(wF,bF)}PF(xu);const xF={apiKey:"AIzaSyCx9HpjEV-mSOqbep_62vovTK2uRuhxw5Q",authDomain:"mini-blog-ac1da.firebaseapp.com",projectId:"mini-blog-ac1da",storageBucket:"mini-blog-ac1da.firebasestorage.app",messagingSenderId:"46697686699",appId:"1:46697686699:web:6c12b3ef94490ba416f9ee"},NF=xu.initializeApp(xF),ko=NF.firestore(),OF=Pe.div`
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 1240px;
    height: 67px;
    border: 1px solid #C4C4C4;
    border-radius: 50px;
    padding: 0px 30px;
`,kF=Pe.p`
    font-size: 24px;
    color: #3E3F5B;
`;function VF(n){const e=xv().id,{comment:t,onDeleteComment:r}=n,a=()=>{ko.collection("post").doc(e).get().then(o=>{const d=o.data().comments.filter(p=>p.id!==t.id);ko.collection("post").doc(e).update({comments:d}).then(()=>{alert("댓글이 삭제되었습니다."),r&&r(t.id)})})};return ie.jsxs(OF,{children:[ie.jsx(kF,{children:t.content}),ie.jsx("img",{onClick:a,width:"36px",height:"36px",src:"../public/x.png",alt:""})]})}const MF=Pe.div`
    display: block;
    width: 1300px;
    margin-bottom: 110px;
`,LF=Pe.h3`
    color: #3E3F5B;
    font-size: 32px;
    margin: 0px;
`,UF=Pe.p`
    background-color: white;
    border: 1px solid #8AB2A6;
    border-radius: 8px;
    padding: 50px;
    line-height: 180%;
    font-size: 24px;
    margin: 0px;
`,BF=Pe.div`
    display: flex;
    align-items: center;
    gap: 24px;
`,zF=Pe.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 117px;
    margin-bottom: 45px;
`,FF=Pe.p`
    color: #8AB2A6;
    font-size: 20px;
    margin: 40px 0 0 0;

`;function qF(n){const{post:e}=n,{id:t}=xv(),r=lm(),a=()=>{ko.collection("post").doc(t).delete().then(()=>{alert("게시물이 삭제되었습니다."),r("/")})},o=u=>{let d=u;if(!d)return"날짜 정보 없음";const p=new Date(Number(d)),m=p.getFullYear(),y=String(p.getMonth()+1).padStart(2,"0"),v=String(p.getDate()).padStart(2,"0");return`${m}.${y}.${v}`};return ie.jsxs(MF,{children:[ie.jsxs(zF,{children:[ie.jsxs(BF,{children:[ie.jsxs("a",{href:"",children:[" ",ie.jsx("img",{width:"48px",height:"48px",src:"../public/back.png",alt:"",onClick:()=>{r("/")}})," "]}),ie.jsx(LF,{children:e.title}),ie.jsx("b",{className:"cateB",children:e.category})]}),ie.jsx(gm,{title:"Delete",type:"upload",onClick:u=>{a()}})]}),ie.jsxs(UF,{children:[e.content,ie.jsx(FF,{children:o(e.timestamp||e.createdAt||e.date)})]})]})}const jF=Pe.div`
    display: grid;
    gap: 20px;
`,HF=Pe.div`
    width: 1300px;
    height: 105px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px dashed #DBDBDB;
    border-radius: 8px;
    color: #8AB2A6;
    font-size: 24px;
    font-weight: 400;
    background-color: rgba(172, 211, 168, 0.1);
`;function GF(n){const{posts:e,itemClicked:t}=n,r=e.map((a,o)=>ie.jsx(Tk,{post:a,onClick:u=>t(a)},a.id));return ie.jsx(jF,{children:e.length>0?r:ie.jsx(HF,{children:"해당 카테고리에 게시물이 없습니다"})})}const $F=Pe.div`
    width: auto;
    height: auto;
    color: #2A2C53;

`,KF=Pe.div`
    width: auto;
    height: auto;
    color: inherit;
    text-decoration: none;
    display: flex;
    justify-content: flex-end;
    gap: 40px;

`,ap=Pe.a`
    font-size: 18px;
    margin: 0px 0px;
    padding: 0px;
    color: #2A2C53;
    text-decoration: none;
    &:hover{
        color: #ACD3A8;
    }
`;function ST(n){return ie.jsx($F,{children:ie.jsxs(KF,{children:[ie.jsx(ap,{href:"",children:"message"}),ie.jsx(ap,{href:"",children:"neighbor"}),ie.jsx(ap,{href:"",children:"mypage"}),ie.jsxs(ap,{href:"",children:["welcome, ",ie.jsx("b",{children:"Lee!"})]})]})})}const QF=Pe.p`
    font-size: 54px;
    text-align: center;
    margin: 185px 0px 42px 0;
    color: #2A2C53;
`,WF=Pe.span`
  color: #8AB2A6;
  font-weight: bold;
`,YF=Pe.div`
    padding: 50px 80px;
`,XF=Pe.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`,ZF=Pe.div`
    display: flex;
    justify-content: flex-end;
    gap: 16px;
    margin: 90px 0px 40px 0px;
`,JF=Pe.select`
    background-image: ${n=>n.isOpen?"url('../public/category2-c.png')":"url('../public/category2.png')"};
    background-size: 97%;

    cursor: pointer;
`,e9=Pe.select`
    background-image: ${n=>n.isOpen?"url('../public/category-c.png')":"url('../public/category.png')"};
    background-size: 110%;

    cursor: pointer;
`;function dS(n){const e=lm(),[t,r]=Y.useState([]),a=Y.useRef([]),[o,u]=Y.useState("Newest"),[d,p]=Y.useState("all"),[m,y]=Y.useState(!1),[v,w]=Y.useState(!1);Y.useEffect(()=>{let z=[];ko.collection("post").get().then(W=>{W.forEach(G=>{z.push(G.data())}),z.sort((G,oe)=>oe.id-G.id),a.current=z.slice(),r(z)})},[]);function S(z){u(z.target.value);const W=t.slice();z.target.value==="Newest"?W.sort((G,oe)=>oe.id-G.id):W.sort((G,oe)=>G.id-oe.id),r(W)}function P(z){p(z.target.value);let W;z.target.value==="all"?W=a.current.slice():W=a.current.filter(function(G){return G.category===z.target.value}),r(W)}function U(){y(!m)}function L(){w(!v)}return ie.jsxs(YF,{children:[ie.jsx(ST,{}),ie.jsxs(QF,{children:["Make a note of ",ie.jsx(WF,{children:"your day."})]}),ie.jsx(XF,{children:ie.jsx(gm,{title:"Create a new post",onClick:z=>{e("/write")}})}),ie.jsxs(ZF,{children:[ie.jsxs(JF,{className:"select-btn",value:o,onChange:S,onClick:U,isOpen:m,children:[ie.jsx("option",{value:"Newest",children:"Newest"}),ie.jsx("option",{value:"Oldest",children:"Oldest"})]}),ie.jsxs(e9,{className:"select-btn2",value:d,onChange:P,onClick:L,isOpen:v,children:[ie.jsx("option",{value:"all",children:"all"}),ie.jsx("option",{value:"daily",children:"daily"}),ie.jsx("option",{value:"travel",children:"travel"}),ie.jsx("option",{value:"food",children:"food"}),ie.jsx("option",{value:"hobby",children:"hobby"}),ie.jsx("option",{value:"exercise",children:"book"}),ie.jsx("option",{value:"study",children:"study"})]})]}),ie.jsx(GF,{posts:t,itemClicked:z=>{e(`/post/${z.id}`)}})]})}const t9=Pe.button`
    width: auto;
    height: 51px;
    border-radius: 50px;
    font-size: 24px;
    background-color: ${n=>n.selected?"#acd3a8":"#fff"};
    color: ${n=>n.selected?"#fff":"2a2c53"};
    border: solid 1px ${n=>n.selected?"#8ab2a6":"#C4C4C4"};
    padding: 4px 32px;

    cursor: pointer;

    &:hover{
        color: #fff;
        background-color: #acd3a8;
        border: solid 1px #8ab2a6;
    }
`,n9=Pe.div`
    display: flex;
    gap: 20px
`;function r9(n){const e=["daily","travel","food","hobby","book","study"],[t,r]=Y.useState("daily");Y.useEffect(()=>{n.onChange&&n.onChange("daily")},[]);const a=o=>{r(o),n.onChange&&n.onChange(o)};return ie.jsx(n9,{children:e.map((o,u)=>ie.jsx(t9,{selected:t===o,onClick:()=>a(o),children:o},u))})}const i9=Pe.div`
    padding: 50px 80px;
`,xy=Pe.div`
    display: grid;
    gap: 24px;
`,s9=Pe.div`
    display: grid;
    gap: 52px;
`,a9=Pe.div`
    display: flex;
    justify-content: space-between;
    margin-top: 117px;
    margin-bottom: 45px;
`;function o9(n){const e=lm(),[t,r]=Y.useState(""),[a,o]=Y.useState(""),[u,d]=Y.useState(""),p=()=>{let y=new Date().getTime().toString();ko.collection("post").doc(y).set({id:y,title:t,content:a,comments:[],date:y,category:u}).then(()=>{alert("글이 등록되었습니다!"),e("/")})},m=y=>{d(y)};return ie.jsxs(i9,{children:[ie.jsx(ST,{}),ie.jsxs(a9,{children:[ie.jsxs("a",{href:"",children:[" ",ie.jsx("img",{width:"48px",height:"48px",src:"../public/back.png",alt:"",onClick:()=>{e("/")}})," "]}),ie.jsx(gm,{title:"Upload",type:"upload",onClick:y=>{p()}})]}),ie.jsxs(s9,{children:[ie.jsxs(xy,{children:[ie.jsx("label",{className:"labelCss",htmlFor:"",children:"category"}),ie.jsx(r9,{onChange:m})]}),ie.jsxs(xy,{children:[ie.jsx("label",{className:"labelCss",htmlFor:"",children:"title"}),ie.jsx(Fy,{height:"75",value:t,onChange:y=>r(y.target.value)})]}),ie.jsxs(xy,{children:[ie.jsx("label",{className:"labelCss",htmlFor:"",children:"content"}),ie.jsx(Fy,{height:"450",value:a,onChange:y=>o(y.target.value)})]})]})]})}const l9=Pe.div`
    display: grid;
    gap: 16px;
    margin-bottom: 32px;
`,fS=Pe.p`
    font-size: 24px;
    font-weight: bold;
    color: #8AB2A6;
    margin: 0px;
`,u9=Pe.div`
    display: flex;
    align-items: center;
    gap: 4px;
`,c9=Pe.div`
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 16px;
`;Pe.div`
    position : fixed;
    bottom : 0;
`;function h9(n){const{comments:e,onCommentDeleted:t}=n,r=e.map((a,o)=>ie.jsx(VF,{comment:a,onDeleteComment:t},a.id));return ie.jsxs("div",{children:[ie.jsxs(c9,{children:[ie.jsx(fS,{children:"Comment"}),ie.jsxs(u9,{children:[ie.jsx("img",{width:"40px",height:"40px",src:"../public/green-chat.png",alt:""}),ie.jsx(fS,{children:e?e.length:0})]})]}),ie.jsx(l9,{children:r})]})}const d9=Pe.div`
    display: flex;
    gap: 18px
    height: 75px;
`,f9=Pe.div`
    padding: 50px 80px;
`;function p9(n){const e=xv().id,[t,r]=Y.useState({id:e,title:"",content:"",comments:[]});Y.useEffect(()=>{ko.collection("post").doc(e).get().then(p=>{r(p.data())})},[]);const[a,o]=Y.useState(""),u=()=>{let p=new Date().getTime().toString(),m=t.comments;m.push({id:`${e}_${p}`,content:a}),ko.collection("post").doc(e).update({comments:m}).then(()=>{alert("댓글이 등록되었습니다!"),o("")})},d=p=>{r({...t,comments:t.comments.filter(m=>m.id!==p)})};return ie.jsxs(f9,{children:[ie.jsx(ST,{}),ie.jsx(qF,{post:t}),ie.jsx(h9,{comments:t.comments,onCommentDeleted:d}),ie.jsxs(d9,{children:[ie.jsx(Fy,{height:"40",value:a,onChange:p=>{o(p.target.value)}}),ie.jsx(gm,{title:"Upload",type:"chat",onClick:()=>{u()}})]})]})}Fx.createRoot(document.getElementById("root")).render(ie.jsx(eO,{basename:"/blog4/",children:ie.jsxs(xN,{children:[ie.jsx(oh,{index:!0,element:ie.jsx(dS,{})}),ie.jsx(oh,{path:"main",element:ie.jsx(dS,{})}),ie.jsx(oh,{path:"write",element:ie.jsx(o9,{})}),ie.jsx(oh,{path:"post/:id",element:ie.jsx(p9,{})})]})}));
