(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function rM(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var bf={exports:{}},gt={};var Wg;function sM(){if(Wg)return gt;Wg=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),g=Symbol.iterator;function v(U){return U===null||typeof U!="object"?null:(U=g&&U[g]||U["@@iterator"],typeof U=="function"?U:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,E={};function S(U,J,Oe){this.props=U,this.context=J,this.refs=E,this.updater=Oe||x}S.prototype.isReactComponent={},S.prototype.setState=function(U,J){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,J,"setState")},S.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function y(){}y.prototype=S.prototype;function D(U,J,Oe){this.props=U,this.context=J,this.refs=E,this.updater=Oe||x}var b=D.prototype=new y;b.constructor=D,M(b,S.prototype),b.isPureReactComponent=!0;var C=Array.isArray,N=Object.prototype.hasOwnProperty,k={current:null},B={key:!0,ref:!0,__self:!0,__source:!0};function z(U,J,Oe){var me,Y={},fe=null,he=null;if(J!=null)for(me in J.ref!==void 0&&(he=J.ref),J.key!==void 0&&(fe=""+J.key),J)N.call(J,me)&&!B.hasOwnProperty(me)&&(Y[me]=J[me]);var Te=arguments.length-2;if(Te===1)Y.children=Oe;else if(1<Te){for(var Pe=Array(Te),Ye=0;Ye<Te;Ye++)Pe[Ye]=arguments[Ye+2];Y.children=Pe}if(U&&U.defaultProps)for(me in Te=U.defaultProps,Te)Y[me]===void 0&&(Y[me]=Te[me]);return{$$typeof:n,type:U,key:fe,ref:he,props:Y,_owner:k.current}}function P(U,J){return{$$typeof:n,type:U.type,key:J,ref:U.ref,props:U.props,_owner:U._owner}}function R(U){return typeof U=="object"&&U!==null&&U.$$typeof===n}function F(U){var J={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(Oe){return J[Oe]})}var le=/\/+/g;function te(U,J){return typeof U=="object"&&U!==null&&U.key!=null?F(""+U.key):J.toString(36)}function se(U,J,Oe,me,Y){var fe=typeof U;(fe==="undefined"||fe==="boolean")&&(U=null);var he=!1;if(U===null)he=!0;else switch(fe){case"string":case"number":he=!0;break;case"object":switch(U.$$typeof){case n:case e:he=!0}}if(he)return he=U,Y=Y(he),U=me===""?"."+te(he,0):me,C(Y)?(Oe="",U!=null&&(Oe=U.replace(le,"$&/")+"/"),se(Y,J,Oe,"",function(Ye){return Ye})):Y!=null&&(R(Y)&&(Y=P(Y,Oe+(!Y.key||he&&he.key===Y.key?"":(""+Y.key).replace(le,"$&/")+"/")+U)),J.push(Y)),1;if(he=0,me=me===""?".":me+":",C(U))for(var Te=0;Te<U.length;Te++){fe=U[Te];var Pe=me+te(fe,Te);he+=se(fe,J,Oe,Pe,Y)}else if(Pe=v(U),typeof Pe=="function")for(U=Pe.call(U),Te=0;!(fe=U.next()).done;)fe=fe.value,Pe=me+te(fe,Te++),he+=se(fe,J,Oe,Pe,Y);else if(fe==="object")throw J=String(U),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.");return he}function ce(U,J,Oe){if(U==null)return U;var me=[],Y=0;return se(U,me,"","",function(fe){return J.call(Oe,fe,Y++)}),me}function ae(U){if(U._status===-1){var J=U._result;J=J(),J.then(function(Oe){(U._status===0||U._status===-1)&&(U._status=1,U._result=Oe)},function(Oe){(U._status===0||U._status===-1)&&(U._status=2,U._result=Oe)}),U._status===-1&&(U._status=0,U._result=J)}if(U._status===1)return U._result.default;throw U._result}var re={current:null},V={transition:null},oe={ReactCurrentDispatcher:re,ReactCurrentBatchConfig:V,ReactCurrentOwner:k};function ie(){throw Error("act(...) is not supported in production builds of React.")}return gt.Children={map:ce,forEach:function(U,J,Oe){ce(U,function(){J.apply(this,arguments)},Oe)},count:function(U){var J=0;return ce(U,function(){J++}),J},toArray:function(U){return ce(U,function(J){return J})||[]},only:function(U){if(!R(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},gt.Component=S,gt.Fragment=t,gt.Profiler=o,gt.PureComponent=D,gt.StrictMode=r,gt.Suspense=d,gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oe,gt.act=ie,gt.cloneElement=function(U,J,Oe){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var me=M({},U.props),Y=U.key,fe=U.ref,he=U._owner;if(J!=null){if(J.ref!==void 0&&(fe=J.ref,he=k.current),J.key!==void 0&&(Y=""+J.key),U.type&&U.type.defaultProps)var Te=U.type.defaultProps;for(Pe in J)N.call(J,Pe)&&!B.hasOwnProperty(Pe)&&(me[Pe]=J[Pe]===void 0&&Te!==void 0?Te[Pe]:J[Pe])}var Pe=arguments.length-2;if(Pe===1)me.children=Oe;else if(1<Pe){Te=Array(Pe);for(var Ye=0;Ye<Pe;Ye++)Te[Ye]=arguments[Ye+2];me.children=Te}return{$$typeof:n,type:U.type,key:Y,ref:fe,props:me,_owner:he}},gt.createContext=function(U){return U={$$typeof:u,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:l,_context:U},U.Consumer=U},gt.createElement=z,gt.createFactory=function(U){var J=z.bind(null,U);return J.type=U,J},gt.createRef=function(){return{current:null}},gt.forwardRef=function(U){return{$$typeof:f,render:U}},gt.isValidElement=R,gt.lazy=function(U){return{$$typeof:m,_payload:{_status:-1,_result:U},_init:ae}},gt.memo=function(U,J){return{$$typeof:h,type:U,compare:J===void 0?null:J}},gt.startTransition=function(U){var J=V.transition;V.transition={};try{U()}finally{V.transition=J}},gt.unstable_act=ie,gt.useCallback=function(U,J){return re.current.useCallback(U,J)},gt.useContext=function(U){return re.current.useContext(U)},gt.useDebugValue=function(){},gt.useDeferredValue=function(U){return re.current.useDeferredValue(U)},gt.useEffect=function(U,J){return re.current.useEffect(U,J)},gt.useId=function(){return re.current.useId()},gt.useImperativeHandle=function(U,J,Oe){return re.current.useImperativeHandle(U,J,Oe)},gt.useInsertionEffect=function(U,J){return re.current.useInsertionEffect(U,J)},gt.useLayoutEffect=function(U,J){return re.current.useLayoutEffect(U,J)},gt.useMemo=function(U,J){return re.current.useMemo(U,J)},gt.useReducer=function(U,J,Oe){return re.current.useReducer(U,J,Oe)},gt.useRef=function(U){return re.current.useRef(U)},gt.useState=function(U){return re.current.useState(U)},gt.useSyncExternalStore=function(U,J,Oe){return re.current.useSyncExternalStore(U,J,Oe)},gt.useTransition=function(){return re.current.useTransition()},gt.version="18.3.1",gt}var Xg;function Lh(){return Xg||(Xg=1,bf.exports=sM()),bf.exports}var Je=Lh();const Re=rM(Je);var $l={},Df={exports:{}},On={},Lf={exports:{}},If={};var jg;function oM(){return jg||(jg=1,(function(n){function e(V,oe){var ie=V.length;V.push(oe);e:for(;0<ie;){var U=ie-1>>>1,J=V[U];if(0<o(J,oe))V[U]=oe,V[ie]=J,ie=U;else break e}}function t(V){return V.length===0?null:V[0]}function r(V){if(V.length===0)return null;var oe=V[0],ie=V.pop();if(ie!==oe){V[0]=ie;e:for(var U=0,J=V.length,Oe=J>>>1;U<Oe;){var me=2*(U+1)-1,Y=V[me],fe=me+1,he=V[fe];if(0>o(Y,ie))fe<J&&0>o(he,Y)?(V[U]=he,V[fe]=ie,U=fe):(V[U]=Y,V[me]=ie,U=me);else if(fe<J&&0>o(he,ie))V[U]=he,V[fe]=ie,U=fe;else break e}}return oe}function o(V,oe){var ie=V.sortIndex-oe.sortIndex;return ie!==0?ie:V.id-oe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();n.unstable_now=function(){return u.now()-f}}var d=[],h=[],m=1,g=null,v=3,x=!1,M=!1,E=!1,S=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(V){for(var oe=t(h);oe!==null;){if(oe.callback===null)r(h);else if(oe.startTime<=V)r(h),oe.sortIndex=oe.expirationTime,e(d,oe);else break;oe=t(h)}}function C(V){if(E=!1,b(V),!M)if(t(d)!==null)M=!0,ae(N);else{var oe=t(h);oe!==null&&re(C,oe.startTime-V)}}function N(V,oe){M=!1,E&&(E=!1,y(z),z=-1),x=!0;var ie=v;try{for(b(oe),g=t(d);g!==null&&(!(g.expirationTime>oe)||V&&!F());){var U=g.callback;if(typeof U=="function"){g.callback=null,v=g.priorityLevel;var J=U(g.expirationTime<=oe);oe=n.unstable_now(),typeof J=="function"?g.callback=J:g===t(d)&&r(d),b(oe)}else r(d);g=t(d)}if(g!==null)var Oe=!0;else{var me=t(h);me!==null&&re(C,me.startTime-oe),Oe=!1}return Oe}finally{g=null,v=ie,x=!1}}var k=!1,B=null,z=-1,P=5,R=-1;function F(){return!(n.unstable_now()-R<P)}function le(){if(B!==null){var V=n.unstable_now();R=V;var oe=!0;try{oe=B(!0,V)}finally{oe?te():(k=!1,B=null)}}else k=!1}var te;if(typeof D=="function")te=function(){D(le)};else if(typeof MessageChannel<"u"){var se=new MessageChannel,ce=se.port2;se.port1.onmessage=le,te=function(){ce.postMessage(null)}}else te=function(){S(le,0)};function ae(V){B=V,k||(k=!0,te())}function re(V,oe){z=S(function(){V(n.unstable_now())},oe)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(V){V.callback=null},n.unstable_continueExecution=function(){M||x||(M=!0,ae(N))},n.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<V?Math.floor(1e3/V):5},n.unstable_getCurrentPriorityLevel=function(){return v},n.unstable_getFirstCallbackNode=function(){return t(d)},n.unstable_next=function(V){switch(v){case 1:case 2:case 3:var oe=3;break;default:oe=v}var ie=v;v=oe;try{return V()}finally{v=ie}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(V,oe){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var ie=v;v=V;try{return oe()}finally{v=ie}},n.unstable_scheduleCallback=function(V,oe,ie){var U=n.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?U+ie:U):ie=U,V){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=ie+J,V={id:m++,callback:oe,priorityLevel:V,startTime:ie,expirationTime:J,sortIndex:-1},ie>U?(V.sortIndex=ie,e(h,V),t(d)===null&&V===t(h)&&(E?(y(z),z=-1):E=!0,re(C,ie-U))):(V.sortIndex=J,e(d,V),M||x||(M=!0,ae(N))),V},n.unstable_shouldYield=F,n.unstable_wrapCallback=function(V){var oe=v;return function(){var ie=v;v=oe;try{return V.apply(this,arguments)}finally{v=ie}}}})(If)),If}var qg;function aM(){return qg||(qg=1,Lf.exports=oM()),Lf.exports}var Yg;function lM(){if(Yg)return On;Yg=1;var n=Lh(),e=aM();function t(i){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+i,a=1;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+i+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(i,s){u(i,s),u(i+"Capture",s)}function u(i,s){for(o[i]=s,i=0;i<s.length;i++)r.add(s[i])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},g={};function v(i){return d.call(g,i)?!0:d.call(m,i)?!1:h.test(i)?g[i]=!0:(m[i]=!0,!1)}function x(i,s,a,c){if(a!==null&&a.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function M(i,s,a,c){if(s===null||typeof s>"u"||x(i,s,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function E(i,s,a,c,p,_,T){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=c,this.attributeNamespace=p,this.mustUseProperty=a,this.propertyName=i,this.type=s,this.sanitizeURL=_,this.removeEmptyString=T}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){S[i]=new E(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var s=i[0];S[s]=new E(s,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){S[i]=new E(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){S[i]=new E(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){S[i]=new E(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){S[i]=new E(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){S[i]=new E(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){S[i]=new E(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){S[i]=new E(i,5,!1,i.toLowerCase(),null,!1,!1)});var y=/[\-:]([a-z])/g;function D(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var s=i.replace(y,D);S[s]=new E(s,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var s=i.replace(y,D);S[s]=new E(s,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var s=i.replace(y,D);S[s]=new E(s,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){S[i]=new E(i,1,!1,i.toLowerCase(),null,!1,!1)}),S.xlinkHref=new E("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){S[i]=new E(i,1,!1,i.toLowerCase(),null,!0,!0)});function b(i,s,a,c){var p=S.hasOwnProperty(s)?S[s]:null;(p!==null?p.type!==0:c||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(M(s,a,p,c)&&(a=null),c||p===null?v(s)&&(a===null?i.removeAttribute(s):i.setAttribute(s,""+a)):p.mustUseProperty?i[p.propertyName]=a===null?p.type===3?!1:"":a:(s=p.attributeName,c=p.attributeNamespace,a===null?i.removeAttribute(s):(p=p.type,a=p===3||p===4&&a===!0?"":""+a,c?i.setAttributeNS(c,s,a):i.setAttribute(s,a))))}var C=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,N=Symbol.for("react.element"),k=Symbol.for("react.portal"),B=Symbol.for("react.fragment"),z=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),F=Symbol.for("react.context"),le=Symbol.for("react.forward_ref"),te=Symbol.for("react.suspense"),se=Symbol.for("react.suspense_list"),ce=Symbol.for("react.memo"),ae=Symbol.for("react.lazy"),re=Symbol.for("react.offscreen"),V=Symbol.iterator;function oe(i){return i===null||typeof i!="object"?null:(i=V&&i[V]||i["@@iterator"],typeof i=="function"?i:null)}var ie=Object.assign,U;function J(i){if(U===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);U=s&&s[1]||""}return`
`+U+i}var Oe=!1;function me(i,s){if(!i||Oe)return"";Oe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(Q){var c=Q}Reflect.construct(i,[],s)}else{try{s.call()}catch(Q){c=Q}i.call(s.prototype)}else{try{throw Error()}catch(Q){c=Q}i()}}catch(Q){if(Q&&c&&typeof Q.stack=="string"){for(var p=Q.stack.split(`
`),_=c.stack.split(`
`),T=p.length-1,I=_.length-1;1<=T&&0<=I&&p[T]!==_[I];)I--;for(;1<=T&&0<=I;T--,I--)if(p[T]!==_[I]){if(T!==1||I!==1)do if(T--,I--,0>I||p[T]!==_[I]){var H=`
`+p[T].replace(" at new "," at ");return i.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",i.displayName)),H}while(1<=T&&0<=I);break}}}finally{Oe=!1,Error.prepareStackTrace=a}return(i=i?i.displayName||i.name:"")?J(i):""}function Y(i){switch(i.tag){case 5:return J(i.type);case 16:return J("Lazy");case 13:return J("Suspense");case 19:return J("SuspenseList");case 0:case 2:case 15:return i=me(i.type,!1),i;case 11:return i=me(i.type.render,!1),i;case 1:return i=me(i.type,!0),i;default:return""}}function fe(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case B:return"Fragment";case k:return"Portal";case P:return"Profiler";case z:return"StrictMode";case te:return"Suspense";case se:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case F:return(i.displayName||"Context")+".Consumer";case R:return(i._context.displayName||"Context")+".Provider";case le:var s=i.render;return i=i.displayName,i||(i=s.displayName||s.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case ce:return s=i.displayName||null,s!==null?s:fe(i.type)||"Memo";case ae:s=i._payload,i=i._init;try{return fe(i(s))}catch{}}return null}function he(i){var s=i.type;switch(i.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=s.render,i=i.displayName||i.name||"",s.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fe(s);case 8:return s===z?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function Te(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Pe(i){var s=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Ye(i){var s=Pe(i)?"checked":"value",a=Object.getOwnPropertyDescriptor(i.constructor.prototype,s),c=""+i[s];if(!i.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var p=a.get,_=a.set;return Object.defineProperty(i,s,{configurable:!0,get:function(){return p.call(this)},set:function(T){c=""+T,_.call(this,T)}}),Object.defineProperty(i,s,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(T){c=""+T},stopTracking:function(){i._valueTracker=null,delete i[s]}}}}function Dt(i){i._valueTracker||(i._valueTracker=Ye(i))}function mt(i){if(!i)return!1;var s=i._valueTracker;if(!s)return!0;var a=s.getValue(),c="";return i&&(c=Pe(i)?i.checked?"true":"false":i.value),i=c,i!==a?(s.setValue(i),!0):!1}function O(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function yt(i,s){var a=s.checked;return ie({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??i._wrapperState.initialChecked})}function Qe(i,s){var a=s.defaultValue==null?"":s.defaultValue,c=s.checked!=null?s.checked:s.defaultChecked;a=Te(s.value!=null?s.value:a),i._wrapperState={initialChecked:c,initialValue:a,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function dt(i,s){s=s.checked,s!=null&&b(i,"checked",s,!1)}function We(i,s){dt(i,s);var a=Te(s.value),c=s.type;if(a!=null)c==="number"?(a===0&&i.value===""||i.value!=a)&&(i.value=""+a):i.value!==""+a&&(i.value=""+a);else if(c==="submit"||c==="reset"){i.removeAttribute("value");return}s.hasOwnProperty("value")?ke(i,s.type,a):s.hasOwnProperty("defaultValue")&&ke(i,s.type,Te(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(i.defaultChecked=!!s.defaultChecked)}function Ut(i,s,a){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var c=s.type;if(!(c!=="submit"&&c!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+i._wrapperState.initialValue,a||s===i.value||(i.value=s),i.defaultValue=s}a=i.name,a!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,a!==""&&(i.name=a)}function ke(i,s,a){(s!=="number"||O(i.ownerDocument)!==i)&&(a==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+a&&(i.defaultValue=""+a))}var ct=Array.isArray;function Bt(i,s,a,c){if(i=i.options,s){s={};for(var p=0;p<a.length;p++)s["$"+a[p]]=!0;for(a=0;a<i.length;a++)p=s.hasOwnProperty("$"+i[a].value),i[a].selected!==p&&(i[a].selected=p),p&&c&&(i[a].defaultSelected=!0)}else{for(a=""+Te(a),s=null,p=0;p<i.length;p++){if(i[p].value===a){i[p].selected=!0,c&&(i[p].defaultSelected=!0);return}s!==null||i[p].disabled||(s=i[p])}s!==null&&(s.selected=!0)}}function Vt(i,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return ie({},s,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function L(i,s){var a=s.value;if(a==null){if(a=s.children,s=s.defaultValue,a!=null){if(s!=null)throw Error(t(92));if(ct(a)){if(1<a.length)throw Error(t(93));a=a[0]}s=a}s==null&&(s=""),a=s}i._wrapperState={initialValue:Te(a)}}function w(i,s){var a=Te(s.value),c=Te(s.defaultValue);a!=null&&(a=""+a,a!==i.value&&(i.value=a),s.defaultValue==null&&i.defaultValue!==a&&(i.defaultValue=a)),c!=null&&(i.defaultValue=""+c)}function $(i){var s=i.textContent;s===i._wrapperState.initialValue&&s!==""&&s!==null&&(i.value=s)}function de(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function _e(i,s){return i==null||i==="http://www.w3.org/1999/xhtml"?de(s):i==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var ue,$e=(function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,a,c,p){MSApp.execUnsafeLocalFunction(function(){return i(s,a,c,p)})}:i})(function(i,s){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=s;else{for(ue=ue||document.createElement("div"),ue.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=ue.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;s.firstChild;)i.appendChild(s.firstChild)}});function Ae(i,s){if(s){var a=i.firstChild;if(a&&a===i.lastChild&&a.nodeType===3){a.nodeValue=s;return}}i.textContent=s}var Ve={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ke=["Webkit","ms","Moz","O"];Object.keys(Ve).forEach(function(i){Ke.forEach(function(s){s=s+i.charAt(0).toUpperCase()+i.substring(1),Ve[s]=Ve[i]})});function Ee(i,s,a){return s==null||typeof s=="boolean"||s===""?"":a||typeof s!="number"||s===0||Ve.hasOwnProperty(i)&&Ve[i]?(""+s).trim():s+"px"}function Ie(i,s){i=i.style;for(var a in s)if(s.hasOwnProperty(a)){var c=a.indexOf("--")===0,p=Ee(a,s[a],c);a==="float"&&(a="cssFloat"),c?i.setProperty(a,p):i[a]=p}}var rt=ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function je(i,s){if(s){if(rt[i]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function be(i,s){if(i.indexOf("-")===-1)return typeof s.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ft=null;function G(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var Se=null,Ce=null,Ne=null;function xe(i){if(i=qo(i)){if(typeof Se!="function")throw Error(t(280));var s=i.stateNode;s&&(s=cl(s),Se(i.stateNode,i.type,s))}}function pe(i){Ce?Ne?Ne.push(i):Ne=[i]:Ce=i}function Ge(){if(Ce){var i=Ce,s=Ne;if(Ne=Ce=null,xe(i),s)for(i=0;i<s.length;i++)xe(s[i])}}function ut(i,s){return i(s)}function Pt(){}var St=!1;function Zn(i,s,a){if(St)return i(s,a);St=!0;try{return ut(i,s,a)}finally{St=!1,(Ce!==null||Ne!==null)&&(Pt(),Ge())}}function gn(i,s){var a=i.stateNode;if(a===null)return null;var c=cl(a);if(c===null)return null;a=c[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(i=i.type,c=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!c;break e;default:i=!1}if(i)return null;if(a&&typeof a!="function")throw Error(t(231,s,typeof a));return a}var Ts=!1;if(f)try{var zn={};Object.defineProperty(zn,"passive",{get:function(){Ts=!0}}),window.addEventListener("test",zn,zn),window.removeEventListener("test",zn,zn)}catch{Ts=!1}function bo(i,s,a,c,p,_,T,I,H){var Q=Array.prototype.slice.call(arguments,3);try{s.apply(a,Q)}catch(ve){this.onError(ve)}}var or=!1,zr=null,Ui=!1,ws=null,As={onError:function(i){or=!0,zr=i}};function Ga(i,s,a,c,p,_,T,I,H){or=!1,zr=null,bo.apply(As,arguments)}function Wa(i,s,a,c,p,_,T,I,H){if(Ga.apply(this,arguments),or){if(or){var Q=zr;or=!1,zr=null}else throw Error(t(198));Ui||(Ui=!0,ws=Q)}}function Fi(i){var s=i,a=i;if(i.alternate)for(;s.return;)s=s.return;else{i=s;do s=i,(s.flags&4098)!==0&&(a=s.return),i=s.return;while(i)}return s.tag===3?a:null}function Xa(i){if(i.tag===13){var s=i.memoizedState;if(s===null&&(i=i.alternate,i!==null&&(s=i.memoizedState)),s!==null)return s.dehydrated}return null}function ja(i){if(Fi(i)!==i)throw Error(t(188))}function Qu(i){var s=i.alternate;if(!s){if(s=Fi(i),s===null)throw Error(t(188));return s!==i?null:i}for(var a=i,c=s;;){var p=a.return;if(p===null)break;var _=p.alternate;if(_===null){if(c=p.return,c!==null){a=c;continue}break}if(p.child===_.child){for(_=p.child;_;){if(_===a)return ja(p),i;if(_===c)return ja(p),s;_=_.sibling}throw Error(t(188))}if(a.return!==c.return)a=p,c=_;else{for(var T=!1,I=p.child;I;){if(I===a){T=!0,a=p,c=_;break}if(I===c){T=!0,c=p,a=_;break}I=I.sibling}if(!T){for(I=_.child;I;){if(I===a){T=!0,a=_,c=p;break}if(I===c){T=!0,c=_,a=p;break}I=I.sibling}if(!T)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?i:s}function qa(i){return i=Qu(i),i!==null?Ya(i):null}function Ya(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var s=Ya(i);if(s!==null)return s;i=i.sibling}return null}var A=e.unstable_scheduleCallback,j=e.unstable_cancelCallback,ee=e.unstable_shouldYield,ne=e.unstable_requestPaint,W=e.unstable_now,Me=e.unstable_getCurrentPriorityLevel,De=e.unstable_ImmediatePriority,ze=e.unstable_UserBlockingPriority,Ue=e.unstable_NormalPriority,it=e.unstable_LowPriority,st=e.unstable_IdlePriority,Ze=null,at=null;function Ct(i){if(at&&typeof at.onCommitFiberRoot=="function")try{at.onCommitFiberRoot(Ze,i,void 0,(i.current.flags&128)===128)}catch{}}var Mt=Math.clz32?Math.clz32:et,Ft=Math.log,bt=Math.LN2;function et(i){return i>>>=0,i===0?32:31-(Ft(i)/bt|0)|0}var Lt=64,vt=4194304;function nn(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function fi(i,s){var a=i.pendingLanes;if(a===0)return 0;var c=0,p=i.suspendedLanes,_=i.pingedLanes,T=a&268435455;if(T!==0){var I=T&~p;I!==0?c=nn(I):(_&=T,_!==0&&(c=nn(_)))}else T=a&~p,T!==0?c=nn(T):_!==0&&(c=nn(_));if(c===0)return 0;if(s!==0&&s!==c&&(s&p)===0&&(p=c&-c,_=s&-s,p>=_||p===16&&(_&4194240)!==0))return s;if((c&4)!==0&&(c|=a&16),s=i.entangledLanes,s!==0)for(i=i.entanglements,s&=c;0<s;)a=31-Mt(s),p=1<<a,c|=i[a],s&=~p;return c}function Cn(i,s){switch(i){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Hr(i,s){for(var a=i.suspendedLanes,c=i.pingedLanes,p=i.expirationTimes,_=i.pendingLanes;0<_;){var T=31-Mt(_),I=1<<T,H=p[T];H===-1?((I&a)===0||(I&c)!==0)&&(p[T]=Cn(I,s)):H<=s&&(i.expiredLanes|=I),_&=~I}}function Ot(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function Rn(){var i=Lt;return Lt<<=1,(Lt&4194240)===0&&(Lt=64),i}function vn(i){for(var s=[],a=0;31>a;a++)s.push(i);return s}function Zt(i,s,a){i.pendingLanes|=s,s!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,s=31-Mt(s),i[s]=a}function _n(i,s){var a=i.pendingLanes&~s;i.pendingLanes=s,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=s,i.mutableReadLanes&=s,i.entangledLanes&=s,s=i.entanglements;var c=i.eventTimes;for(i=i.expirationTimes;0<a;){var p=31-Mt(a),_=1<<p;s[p]=0,c[p]=-1,i[p]=-1,a&=~_}}function Gr(i,s){var a=i.entangledLanes|=s;for(i=i.entanglements;a;){var c=31-Mt(a),p=1<<c;p&s|i[c]&s&&(i[c]|=s),a&=~p}}var _t=0;function Mp(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var Ep,Ju,Tp,wp,Ap,ec=!1,$a=[],ar=null,lr=null,ur=null,Do=new Map,Lo=new Map,cr=[],Ax="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Cp(i,s){switch(i){case"focusin":case"focusout":ar=null;break;case"dragenter":case"dragleave":lr=null;break;case"mouseover":case"mouseout":ur=null;break;case"pointerover":case"pointerout":Do.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Lo.delete(s.pointerId)}}function Io(i,s,a,c,p,_){return i===null||i.nativeEvent!==_?(i={blockedOn:s,domEventName:a,eventSystemFlags:c,nativeEvent:_,targetContainers:[p]},s!==null&&(s=qo(s),s!==null&&Ju(s)),i):(i.eventSystemFlags|=c,s=i.targetContainers,p!==null&&s.indexOf(p)===-1&&s.push(p),i)}function Cx(i,s,a,c,p){switch(s){case"focusin":return ar=Io(ar,i,s,a,c,p),!0;case"dragenter":return lr=Io(lr,i,s,a,c,p),!0;case"mouseover":return ur=Io(ur,i,s,a,c,p),!0;case"pointerover":var _=p.pointerId;return Do.set(_,Io(Do.get(_)||null,i,s,a,c,p)),!0;case"gotpointercapture":return _=p.pointerId,Lo.set(_,Io(Lo.get(_)||null,i,s,a,c,p)),!0}return!1}function Rp(i){var s=Wr(i.target);if(s!==null){var a=Fi(s);if(a!==null){if(s=a.tag,s===13){if(s=Xa(a),s!==null){i.blockedOn=s,Ap(i.priority,function(){Tp(a)});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){i.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}i.blockedOn=null}function Ka(i){if(i.blockedOn!==null)return!1;for(var s=i.targetContainers;0<s.length;){var a=nc(i.domEventName,i.eventSystemFlags,s[0],i.nativeEvent);if(a===null){a=i.nativeEvent;var c=new a.constructor(a.type,a);ft=c,a.target.dispatchEvent(c),ft=null}else return s=qo(a),s!==null&&Ju(s),i.blockedOn=a,!1;s.shift()}return!0}function Pp(i,s,a){Ka(i)&&a.delete(s)}function Rx(){ec=!1,ar!==null&&Ka(ar)&&(ar=null),lr!==null&&Ka(lr)&&(lr=null),ur!==null&&Ka(ur)&&(ur=null),Do.forEach(Pp),Lo.forEach(Pp)}function No(i,s){i.blockedOn===s&&(i.blockedOn=null,ec||(ec=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Rx)))}function Uo(i){function s(p){return No(p,i)}if(0<$a.length){No($a[0],i);for(var a=1;a<$a.length;a++){var c=$a[a];c.blockedOn===i&&(c.blockedOn=null)}}for(ar!==null&&No(ar,i),lr!==null&&No(lr,i),ur!==null&&No(ur,i),Do.forEach(s),Lo.forEach(s),a=0;a<cr.length;a++)c=cr[a],c.blockedOn===i&&(c.blockedOn=null);for(;0<cr.length&&(a=cr[0],a.blockedOn===null);)Rp(a),a.blockedOn===null&&cr.shift()}var Cs=C.ReactCurrentBatchConfig,Za=!0;function Px(i,s,a,c){var p=_t,_=Cs.transition;Cs.transition=null;try{_t=1,tc(i,s,a,c)}finally{_t=p,Cs.transition=_}}function bx(i,s,a,c){var p=_t,_=Cs.transition;Cs.transition=null;try{_t=4,tc(i,s,a,c)}finally{_t=p,Cs.transition=_}}function tc(i,s,a,c){if(Za){var p=nc(i,s,a,c);if(p===null)yc(i,s,c,Qa,a),Cp(i,c);else if(Cx(p,i,s,a,c))c.stopPropagation();else if(Cp(i,c),s&4&&-1<Ax.indexOf(i)){for(;p!==null;){var _=qo(p);if(_!==null&&Ep(_),_=nc(i,s,a,c),_===null&&yc(i,s,c,Qa,a),_===p)break;p=_}p!==null&&c.stopPropagation()}else yc(i,s,c,null,a)}}var Qa=null;function nc(i,s,a,c){if(Qa=null,i=G(c),i=Wr(i),i!==null)if(s=Fi(i),s===null)i=null;else if(a=s.tag,a===13){if(i=Xa(s),i!==null)return i;i=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null);return Qa=i,null}function bp(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Me()){case De:return 1;case ze:return 4;case Ue:case it:return 16;case st:return 536870912;default:return 16}default:return 16}}var fr=null,ic=null,Ja=null;function Dp(){if(Ja)return Ja;var i,s=ic,a=s.length,c,p="value"in fr?fr.value:fr.textContent,_=p.length;for(i=0;i<a&&s[i]===p[i];i++);var T=a-i;for(c=1;c<=T&&s[a-c]===p[_-c];c++);return Ja=p.slice(i,1<c?1-c:void 0)}function el(i){var s=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&s===13&&(i=13)):i=s,i===10&&(i=13),32<=i||i===13?i:0}function tl(){return!0}function Lp(){return!1}function Hn(i){function s(a,c,p,_,T){this._reactName=a,this._targetInst=p,this.type=c,this.nativeEvent=_,this.target=T,this.currentTarget=null;for(var I in i)i.hasOwnProperty(I)&&(a=i[I],this[I]=a?a(_):_[I]);return this.isDefaultPrevented=(_.defaultPrevented!=null?_.defaultPrevented:_.returnValue===!1)?tl:Lp,this.isPropagationStopped=Lp,this}return ie(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=tl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=tl)},persist:function(){},isPersistent:tl}),s}var Rs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rc=Hn(Rs),Fo=ie({},Rs,{view:0,detail:0}),Dx=Hn(Fo),sc,oc,Oo,nl=ie({},Fo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:lc,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==Oo&&(Oo&&i.type==="mousemove"?(sc=i.screenX-Oo.screenX,oc=i.screenY-Oo.screenY):oc=sc=0,Oo=i),sc)},movementY:function(i){return"movementY"in i?i.movementY:oc}}),Ip=Hn(nl),Lx=ie({},nl,{dataTransfer:0}),Ix=Hn(Lx),Nx=ie({},Fo,{relatedTarget:0}),ac=Hn(Nx),Ux=ie({},Rs,{animationName:0,elapsedTime:0,pseudoElement:0}),Fx=Hn(Ux),Ox=ie({},Rs,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),kx=Hn(Ox),Bx=ie({},Rs,{data:0}),Np=Hn(Bx),Vx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Gx(i){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(i):(i=Hx[i])?!!s[i]:!1}function lc(){return Gx}var Wx=ie({},Fo,{key:function(i){if(i.key){var s=Vx[i.key]||i.key;if(s!=="Unidentified")return s}return i.type==="keypress"?(i=el(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?zx[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:lc,charCode:function(i){return i.type==="keypress"?el(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?el(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),Xx=Hn(Wx),jx=ie({},nl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Up=Hn(jx),qx=ie({},Fo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:lc}),Yx=Hn(qx),$x=ie({},Rs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Kx=Hn($x),Zx=ie({},nl,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),Qx=Hn(Zx),Jx=[9,13,27,32],uc=f&&"CompositionEvent"in window,ko=null;f&&"documentMode"in document&&(ko=document.documentMode);var eS=f&&"TextEvent"in window&&!ko,Fp=f&&(!uc||ko&&8<ko&&11>=ko),Op=" ",kp=!1;function Bp(i,s){switch(i){case"keyup":return Jx.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vp(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Ps=!1;function tS(i,s){switch(i){case"compositionend":return Vp(s);case"keypress":return s.which!==32?null:(kp=!0,Op);case"textInput":return i=s.data,i===Op&&kp?null:i;default:return null}}function nS(i,s){if(Ps)return i==="compositionend"||!uc&&Bp(i,s)?(i=Dp(),Ja=ic=fr=null,Ps=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return Fp&&s.locale!=="ko"?null:s.data;default:return null}}var iS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zp(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s==="input"?!!iS[i.type]:s==="textarea"}function Hp(i,s,a,c){pe(c),s=al(s,"onChange"),0<s.length&&(a=new rc("onChange","change",null,a,c),i.push({event:a,listeners:s}))}var Bo=null,Vo=null;function rS(i){om(i,0)}function il(i){var s=Ns(i);if(mt(s))return i}function sS(i,s){if(i==="change")return s}var Gp=!1;if(f){var cc;if(f){var fc="oninput"in document;if(!fc){var Wp=document.createElement("div");Wp.setAttribute("oninput","return;"),fc=typeof Wp.oninput=="function"}cc=fc}else cc=!1;Gp=cc&&(!document.documentMode||9<document.documentMode)}function Xp(){Bo&&(Bo.detachEvent("onpropertychange",jp),Vo=Bo=null)}function jp(i){if(i.propertyName==="value"&&il(Vo)){var s=[];Hp(s,Vo,i,G(i)),Zn(rS,s)}}function oS(i,s,a){i==="focusin"?(Xp(),Bo=s,Vo=a,Bo.attachEvent("onpropertychange",jp)):i==="focusout"&&Xp()}function aS(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return il(Vo)}function lS(i,s){if(i==="click")return il(s)}function uS(i,s){if(i==="input"||i==="change")return il(s)}function cS(i,s){return i===s&&(i!==0||1/i===1/s)||i!==i&&s!==s}var di=typeof Object.is=="function"?Object.is:cS;function zo(i,s){if(di(i,s))return!0;if(typeof i!="object"||i===null||typeof s!="object"||s===null)return!1;var a=Object.keys(i),c=Object.keys(s);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var p=a[c];if(!d.call(s,p)||!di(i[p],s[p]))return!1}return!0}function qp(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function Yp(i,s){var a=qp(i);i=0;for(var c;a;){if(a.nodeType===3){if(c=i+a.textContent.length,i<=s&&c>=s)return{node:a,offset:s-i};i=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=qp(a)}}function $p(i,s){return i&&s?i===s?!0:i&&i.nodeType===3?!1:s&&s.nodeType===3?$p(i,s.parentNode):"contains"in i?i.contains(s):i.compareDocumentPosition?!!(i.compareDocumentPosition(s)&16):!1:!1}function Kp(){for(var i=window,s=O();s instanceof i.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)i=s.contentWindow;else break;s=O(i.document)}return s}function dc(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s&&(s==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||s==="textarea"||i.contentEditable==="true")}function fS(i){var s=Kp(),a=i.focusedElem,c=i.selectionRange;if(s!==a&&a&&a.ownerDocument&&$p(a.ownerDocument.documentElement,a)){if(c!==null&&dc(a)){if(s=c.start,i=c.end,i===void 0&&(i=s),"selectionStart"in a)a.selectionStart=s,a.selectionEnd=Math.min(i,a.value.length);else if(i=(s=a.ownerDocument||document)&&s.defaultView||window,i.getSelection){i=i.getSelection();var p=a.textContent.length,_=Math.min(c.start,p);c=c.end===void 0?_:Math.min(c.end,p),!i.extend&&_>c&&(p=c,c=_,_=p),p=Yp(a,_);var T=Yp(a,c);p&&T&&(i.rangeCount!==1||i.anchorNode!==p.node||i.anchorOffset!==p.offset||i.focusNode!==T.node||i.focusOffset!==T.offset)&&(s=s.createRange(),s.setStart(p.node,p.offset),i.removeAllRanges(),_>c?(i.addRange(s),i.extend(T.node,T.offset)):(s.setEnd(T.node,T.offset),i.addRange(s)))}}for(s=[],i=a;i=i.parentNode;)i.nodeType===1&&s.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<s.length;a++)i=s[a],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var dS=f&&"documentMode"in document&&11>=document.documentMode,bs=null,hc=null,Ho=null,pc=!1;function Zp(i,s,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;pc||bs==null||bs!==O(c)||(c=bs,"selectionStart"in c&&dc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Ho&&zo(Ho,c)||(Ho=c,c=al(hc,"onSelect"),0<c.length&&(s=new rc("onSelect","select",null,s,a),i.push({event:s,listeners:c}),s.target=bs)))}function rl(i,s){var a={};return a[i.toLowerCase()]=s.toLowerCase(),a["Webkit"+i]="webkit"+s,a["Moz"+i]="moz"+s,a}var Ds={animationend:rl("Animation","AnimationEnd"),animationiteration:rl("Animation","AnimationIteration"),animationstart:rl("Animation","AnimationStart"),transitionend:rl("Transition","TransitionEnd")},mc={},Qp={};f&&(Qp=document.createElement("div").style,"AnimationEvent"in window||(delete Ds.animationend.animation,delete Ds.animationiteration.animation,delete Ds.animationstart.animation),"TransitionEvent"in window||delete Ds.transitionend.transition);function sl(i){if(mc[i])return mc[i];if(!Ds[i])return i;var s=Ds[i],a;for(a in s)if(s.hasOwnProperty(a)&&a in Qp)return mc[i]=s[a];return i}var Jp=sl("animationend"),em=sl("animationiteration"),tm=sl("animationstart"),nm=sl("transitionend"),im=new Map,rm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function dr(i,s){im.set(i,s),l(s,[i])}for(var gc=0;gc<rm.length;gc++){var vc=rm[gc],hS=vc.toLowerCase(),pS=vc[0].toUpperCase()+vc.slice(1);dr(hS,"on"+pS)}dr(Jp,"onAnimationEnd"),dr(em,"onAnimationIteration"),dr(tm,"onAnimationStart"),dr("dblclick","onDoubleClick"),dr("focusin","onFocus"),dr("focusout","onBlur"),dr(nm,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Go="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Go));function sm(i,s,a){var c=i.type||"unknown-event";i.currentTarget=a,Wa(c,s,void 0,i),i.currentTarget=null}function om(i,s){s=(s&4)!==0;for(var a=0;a<i.length;a++){var c=i[a],p=c.event;c=c.listeners;e:{var _=void 0;if(s)for(var T=c.length-1;0<=T;T--){var I=c[T],H=I.instance,Q=I.currentTarget;if(I=I.listener,H!==_&&p.isPropagationStopped())break e;sm(p,I,Q),_=H}else for(T=0;T<c.length;T++){if(I=c[T],H=I.instance,Q=I.currentTarget,I=I.listener,H!==_&&p.isPropagationStopped())break e;sm(p,I,Q),_=H}}}if(Ui)throw i=ws,Ui=!1,ws=null,i}function zt(i,s){var a=s[wc];a===void 0&&(a=s[wc]=new Set);var c=i+"__bubble";a.has(c)||(am(s,i,2,!1),a.add(c))}function _c(i,s,a){var c=0;s&&(c|=4),am(a,i,c,s)}var ol="_reactListening"+Math.random().toString(36).slice(2);function Wo(i){if(!i[ol]){i[ol]=!0,r.forEach(function(a){a!=="selectionchange"&&(mS.has(a)||_c(a,!1,i),_c(a,!0,i))});var s=i.nodeType===9?i:i.ownerDocument;s===null||s[ol]||(s[ol]=!0,_c("selectionchange",!1,s))}}function am(i,s,a,c){switch(bp(s)){case 1:var p=Px;break;case 4:p=bx;break;default:p=tc}a=p.bind(null,s,a,i),p=void 0,!Ts||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(p=!0),c?p!==void 0?i.addEventListener(s,a,{capture:!0,passive:p}):i.addEventListener(s,a,!0):p!==void 0?i.addEventListener(s,a,{passive:p}):i.addEventListener(s,a,!1)}function yc(i,s,a,c,p){var _=c;if((s&1)===0&&(s&2)===0&&c!==null)e:for(;;){if(c===null)return;var T=c.tag;if(T===3||T===4){var I=c.stateNode.containerInfo;if(I===p||I.nodeType===8&&I.parentNode===p)break;if(T===4)for(T=c.return;T!==null;){var H=T.tag;if((H===3||H===4)&&(H=T.stateNode.containerInfo,H===p||H.nodeType===8&&H.parentNode===p))return;T=T.return}for(;I!==null;){if(T=Wr(I),T===null)return;if(H=T.tag,H===5||H===6){c=_=T;continue e}I=I.parentNode}}c=c.return}Zn(function(){var Q=_,ve=G(a),ye=[];e:{var ge=im.get(i);if(ge!==void 0){var Fe=rc,He=i;switch(i){case"keypress":if(el(a)===0)break e;case"keydown":case"keyup":Fe=Xx;break;case"focusin":He="focus",Fe=ac;break;case"focusout":He="blur",Fe=ac;break;case"beforeblur":case"afterblur":Fe=ac;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Fe=Ip;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Fe=Ix;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Fe=Yx;break;case Jp:case em:case tm:Fe=Fx;break;case nm:Fe=Kx;break;case"scroll":Fe=Dx;break;case"wheel":Fe=Qx;break;case"copy":case"cut":case"paste":Fe=kx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Fe=Up}var Xe=(s&4)!==0,Qt=!Xe&&i==="scroll",q=Xe?ge!==null?ge+"Capture":null:ge;Xe=[];for(var X=Q,Z;X!==null;){Z=X;var we=Z.stateNode;if(Z.tag===5&&we!==null&&(Z=we,q!==null&&(we=gn(X,q),we!=null&&Xe.push(Xo(X,we,Z)))),Qt)break;X=X.return}0<Xe.length&&(ge=new Fe(ge,He,null,a,ve),ye.push({event:ge,listeners:Xe}))}}if((s&7)===0){e:{if(ge=i==="mouseover"||i==="pointerover",Fe=i==="mouseout"||i==="pointerout",ge&&a!==ft&&(He=a.relatedTarget||a.fromElement)&&(Wr(He)||He[Oi]))break e;if((Fe||ge)&&(ge=ve.window===ve?ve:(ge=ve.ownerDocument)?ge.defaultView||ge.parentWindow:window,Fe?(He=a.relatedTarget||a.toElement,Fe=Q,He=He?Wr(He):null,He!==null&&(Qt=Fi(He),He!==Qt||He.tag!==5&&He.tag!==6)&&(He=null)):(Fe=null,He=Q),Fe!==He)){if(Xe=Ip,we="onMouseLeave",q="onMouseEnter",X="mouse",(i==="pointerout"||i==="pointerover")&&(Xe=Up,we="onPointerLeave",q="onPointerEnter",X="pointer"),Qt=Fe==null?ge:Ns(Fe),Z=He==null?ge:Ns(He),ge=new Xe(we,X+"leave",Fe,a,ve),ge.target=Qt,ge.relatedTarget=Z,we=null,Wr(ve)===Q&&(Xe=new Xe(q,X+"enter",He,a,ve),Xe.target=Z,Xe.relatedTarget=Qt,we=Xe),Qt=we,Fe&&He)t:{for(Xe=Fe,q=He,X=0,Z=Xe;Z;Z=Ls(Z))X++;for(Z=0,we=q;we;we=Ls(we))Z++;for(;0<X-Z;)Xe=Ls(Xe),X--;for(;0<Z-X;)q=Ls(q),Z--;for(;X--;){if(Xe===q||q!==null&&Xe===q.alternate)break t;Xe=Ls(Xe),q=Ls(q)}Xe=null}else Xe=null;Fe!==null&&lm(ye,ge,Fe,Xe,!1),He!==null&&Qt!==null&&lm(ye,Qt,He,Xe,!0)}}e:{if(ge=Q?Ns(Q):window,Fe=ge.nodeName&&ge.nodeName.toLowerCase(),Fe==="select"||Fe==="input"&&ge.type==="file")var qe=sS;else if(zp(ge))if(Gp)qe=uS;else{qe=aS;var tt=oS}else(Fe=ge.nodeName)&&Fe.toLowerCase()==="input"&&(ge.type==="checkbox"||ge.type==="radio")&&(qe=lS);if(qe&&(qe=qe(i,Q))){Hp(ye,qe,a,ve);break e}tt&&tt(i,ge,Q),i==="focusout"&&(tt=ge._wrapperState)&&tt.controlled&&ge.type==="number"&&ke(ge,"number",ge.value)}switch(tt=Q?Ns(Q):window,i){case"focusin":(zp(tt)||tt.contentEditable==="true")&&(bs=tt,hc=Q,Ho=null);break;case"focusout":Ho=hc=bs=null;break;case"mousedown":pc=!0;break;case"contextmenu":case"mouseup":case"dragend":pc=!1,Zp(ye,a,ve);break;case"selectionchange":if(dS)break;case"keydown":case"keyup":Zp(ye,a,ve)}var nt;if(uc)e:{switch(i){case"compositionstart":var lt="onCompositionStart";break e;case"compositionend":lt="onCompositionEnd";break e;case"compositionupdate":lt="onCompositionUpdate";break e}lt=void 0}else Ps?Bp(i,a)&&(lt="onCompositionEnd"):i==="keydown"&&a.keyCode===229&&(lt="onCompositionStart");lt&&(Fp&&a.locale!=="ko"&&(Ps||lt!=="onCompositionStart"?lt==="onCompositionEnd"&&Ps&&(nt=Dp()):(fr=ve,ic="value"in fr?fr.value:fr.textContent,Ps=!0)),tt=al(Q,lt),0<tt.length&&(lt=new Np(lt,i,null,a,ve),ye.push({event:lt,listeners:tt}),nt?lt.data=nt:(nt=Vp(a),nt!==null&&(lt.data=nt)))),(nt=eS?tS(i,a):nS(i,a))&&(Q=al(Q,"onBeforeInput"),0<Q.length&&(ve=new Np("onBeforeInput","beforeinput",null,a,ve),ye.push({event:ve,listeners:Q}),ve.data=nt))}om(ye,s)})}function Xo(i,s,a){return{instance:i,listener:s,currentTarget:a}}function al(i,s){for(var a=s+"Capture",c=[];i!==null;){var p=i,_=p.stateNode;p.tag===5&&_!==null&&(p=_,_=gn(i,a),_!=null&&c.unshift(Xo(i,_,p)),_=gn(i,s),_!=null&&c.push(Xo(i,_,p))),i=i.return}return c}function Ls(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function lm(i,s,a,c,p){for(var _=s._reactName,T=[];a!==null&&a!==c;){var I=a,H=I.alternate,Q=I.stateNode;if(H!==null&&H===c)break;I.tag===5&&Q!==null&&(I=Q,p?(H=gn(a,_),H!=null&&T.unshift(Xo(a,H,I))):p||(H=gn(a,_),H!=null&&T.push(Xo(a,H,I)))),a=a.return}T.length!==0&&i.push({event:s,listeners:T})}var gS=/\r\n?/g,vS=/\u0000|\uFFFD/g;function um(i){return(typeof i=="string"?i:""+i).replace(gS,`
`).replace(vS,"")}function ll(i,s,a){if(s=um(s),um(i)!==s&&a)throw Error(t(425))}function ul(){}var xc=null,Sc=null;function Mc(i,s){return i==="textarea"||i==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Ec=typeof setTimeout=="function"?setTimeout:void 0,_S=typeof clearTimeout=="function"?clearTimeout:void 0,cm=typeof Promise=="function"?Promise:void 0,yS=typeof queueMicrotask=="function"?queueMicrotask:typeof cm<"u"?function(i){return cm.resolve(null).then(i).catch(xS)}:Ec;function xS(i){setTimeout(function(){throw i})}function Tc(i,s){var a=s,c=0;do{var p=a.nextSibling;if(i.removeChild(a),p&&p.nodeType===8)if(a=p.data,a==="/$"){if(c===0){i.removeChild(p),Uo(s);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=p}while(a);Uo(s)}function hr(i){for(;i!=null;i=i.nextSibling){var s=i.nodeType;if(s===1||s===3)break;if(s===8){if(s=i.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return i}function fm(i){i=i.previousSibling;for(var s=0;i;){if(i.nodeType===8){var a=i.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return i;s--}else a==="/$"&&s++}i=i.previousSibling}return null}var Is=Math.random().toString(36).slice(2),wi="__reactFiber$"+Is,jo="__reactProps$"+Is,Oi="__reactContainer$"+Is,wc="__reactEvents$"+Is,SS="__reactListeners$"+Is,MS="__reactHandles$"+Is;function Wr(i){var s=i[wi];if(s)return s;for(var a=i.parentNode;a;){if(s=a[Oi]||a[wi]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(i=fm(i);i!==null;){if(a=i[wi])return a;i=fm(i)}return s}i=a,a=i.parentNode}return null}function qo(i){return i=i[wi]||i[Oi],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function Ns(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function cl(i){return i[jo]||null}var Ac=[],Us=-1;function pr(i){return{current:i}}function Ht(i){0>Us||(i.current=Ac[Us],Ac[Us]=null,Us--)}function kt(i,s){Us++,Ac[Us]=i.current,i.current=s}var mr={},yn=pr(mr),Ln=pr(!1),Xr=mr;function Fs(i,s){var a=i.type.contextTypes;if(!a)return mr;var c=i.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===s)return c.__reactInternalMemoizedMaskedChildContext;var p={},_;for(_ in a)p[_]=s[_];return c&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=s,i.__reactInternalMemoizedMaskedChildContext=p),p}function In(i){return i=i.childContextTypes,i!=null}function fl(){Ht(Ln),Ht(yn)}function dm(i,s,a){if(yn.current!==mr)throw Error(t(168));kt(yn,s),kt(Ln,a)}function hm(i,s,a){var c=i.stateNode;if(s=s.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var p in c)if(!(p in s))throw Error(t(108,he(i)||"Unknown",p));return ie({},a,c)}function dl(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||mr,Xr=yn.current,kt(yn,i),kt(Ln,Ln.current),!0}function pm(i,s,a){var c=i.stateNode;if(!c)throw Error(t(169));a?(i=hm(i,s,Xr),c.__reactInternalMemoizedMergedChildContext=i,Ht(Ln),Ht(yn),kt(yn,i)):Ht(Ln),kt(Ln,a)}var ki=null,hl=!1,Cc=!1;function mm(i){ki===null?ki=[i]:ki.push(i)}function ES(i){hl=!0,mm(i)}function gr(){if(!Cc&&ki!==null){Cc=!0;var i=0,s=_t;try{var a=ki;for(_t=1;i<a.length;i++){var c=a[i];do c=c(!0);while(c!==null)}ki=null,hl=!1}catch(p){throw ki!==null&&(ki=ki.slice(i+1)),A(De,gr),p}finally{_t=s,Cc=!1}}return null}var Os=[],ks=0,pl=null,ml=0,Qn=[],Jn=0,jr=null,Bi=1,Vi="";function qr(i,s){Os[ks++]=ml,Os[ks++]=pl,pl=i,ml=s}function gm(i,s,a){Qn[Jn++]=Bi,Qn[Jn++]=Vi,Qn[Jn++]=jr,jr=i;var c=Bi;i=Vi;var p=32-Mt(c)-1;c&=~(1<<p),a+=1;var _=32-Mt(s)+p;if(30<_){var T=p-p%5;_=(c&(1<<T)-1).toString(32),c>>=T,p-=T,Bi=1<<32-Mt(s)+p|a<<p|c,Vi=_+i}else Bi=1<<_|a<<p|c,Vi=i}function Rc(i){i.return!==null&&(qr(i,1),gm(i,1,0))}function Pc(i){for(;i===pl;)pl=Os[--ks],Os[ks]=null,ml=Os[--ks],Os[ks]=null;for(;i===jr;)jr=Qn[--Jn],Qn[Jn]=null,Vi=Qn[--Jn],Qn[Jn]=null,Bi=Qn[--Jn],Qn[Jn]=null}var Gn=null,Wn=null,Wt=!1,hi=null;function vm(i,s){var a=ii(5,null,null,0);a.elementType="DELETED",a.stateNode=s,a.return=i,s=i.deletions,s===null?(i.deletions=[a],i.flags|=16):s.push(a)}function _m(i,s){switch(i.tag){case 5:var a=i.type;return s=s.nodeType!==1||a.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(i.stateNode=s,Gn=i,Wn=hr(s.firstChild),!0):!1;case 6:return s=i.pendingProps===""||s.nodeType!==3?null:s,s!==null?(i.stateNode=s,Gn=i,Wn=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(a=jr!==null?{id:Bi,overflow:Vi}:null,i.memoizedState={dehydrated:s,treeContext:a,retryLane:1073741824},a=ii(18,null,null,0),a.stateNode=s,a.return=i,i.child=a,Gn=i,Wn=null,!0):!1;default:return!1}}function bc(i){return(i.mode&1)!==0&&(i.flags&128)===0}function Dc(i){if(Wt){var s=Wn;if(s){var a=s;if(!_m(i,s)){if(bc(i))throw Error(t(418));s=hr(a.nextSibling);var c=Gn;s&&_m(i,s)?vm(c,a):(i.flags=i.flags&-4097|2,Wt=!1,Gn=i)}}else{if(bc(i))throw Error(t(418));i.flags=i.flags&-4097|2,Wt=!1,Gn=i}}}function ym(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;Gn=i}function gl(i){if(i!==Gn)return!1;if(!Wt)return ym(i),Wt=!0,!1;var s;if((s=i.tag!==3)&&!(s=i.tag!==5)&&(s=i.type,s=s!=="head"&&s!=="body"&&!Mc(i.type,i.memoizedProps)),s&&(s=Wn)){if(bc(i))throw xm(),Error(t(418));for(;s;)vm(i,s),s=hr(s.nextSibling)}if(ym(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,s=0;i;){if(i.nodeType===8){var a=i.data;if(a==="/$"){if(s===0){Wn=hr(i.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++}i=i.nextSibling}Wn=null}}else Wn=Gn?hr(i.stateNode.nextSibling):null;return!0}function xm(){for(var i=Wn;i;)i=hr(i.nextSibling)}function Bs(){Wn=Gn=null,Wt=!1}function Lc(i){hi===null?hi=[i]:hi.push(i)}var TS=C.ReactCurrentBatchConfig;function Yo(i,s,a){if(i=a.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,i));var p=c,_=""+i;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===_?s.ref:(s=function(T){var I=p.refs;T===null?delete I[_]:I[_]=T},s._stringRef=_,s)}if(typeof i!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,i))}return i}function vl(i,s){throw i=Object.prototype.toString.call(s),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":i))}function Sm(i){var s=i._init;return s(i._payload)}function Mm(i){function s(q,X){if(i){var Z=q.deletions;Z===null?(q.deletions=[X],q.flags|=16):Z.push(X)}}function a(q,X){if(!i)return null;for(;X!==null;)s(q,X),X=X.sibling;return null}function c(q,X){for(q=new Map;X!==null;)X.key!==null?q.set(X.key,X):q.set(X.index,X),X=X.sibling;return q}function p(q,X){return q=Tr(q,X),q.index=0,q.sibling=null,q}function _(q,X,Z){return q.index=Z,i?(Z=q.alternate,Z!==null?(Z=Z.index,Z<X?(q.flags|=2,X):Z):(q.flags|=2,X)):(q.flags|=1048576,X)}function T(q){return i&&q.alternate===null&&(q.flags|=2),q}function I(q,X,Z,we){return X===null||X.tag!==6?(X=Tf(Z,q.mode,we),X.return=q,X):(X=p(X,Z),X.return=q,X)}function H(q,X,Z,we){var qe=Z.type;return qe===B?ve(q,X,Z.props.children,we,Z.key):X!==null&&(X.elementType===qe||typeof qe=="object"&&qe!==null&&qe.$$typeof===ae&&Sm(qe)===X.type)?(we=p(X,Z.props),we.ref=Yo(q,X,Z),we.return=q,we):(we=zl(Z.type,Z.key,Z.props,null,q.mode,we),we.ref=Yo(q,X,Z),we.return=q,we)}function Q(q,X,Z,we){return X===null||X.tag!==4||X.stateNode.containerInfo!==Z.containerInfo||X.stateNode.implementation!==Z.implementation?(X=wf(Z,q.mode,we),X.return=q,X):(X=p(X,Z.children||[]),X.return=q,X)}function ve(q,X,Z,we,qe){return X===null||X.tag!==7?(X=ts(Z,q.mode,we,qe),X.return=q,X):(X=p(X,Z),X.return=q,X)}function ye(q,X,Z){if(typeof X=="string"&&X!==""||typeof X=="number")return X=Tf(""+X,q.mode,Z),X.return=q,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case N:return Z=zl(X.type,X.key,X.props,null,q.mode,Z),Z.ref=Yo(q,null,X),Z.return=q,Z;case k:return X=wf(X,q.mode,Z),X.return=q,X;case ae:var we=X._init;return ye(q,we(X._payload),Z)}if(ct(X)||oe(X))return X=ts(X,q.mode,Z,null),X.return=q,X;vl(q,X)}return null}function ge(q,X,Z,we){var qe=X!==null?X.key:null;if(typeof Z=="string"&&Z!==""||typeof Z=="number")return qe!==null?null:I(q,X,""+Z,we);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case N:return Z.key===qe?H(q,X,Z,we):null;case k:return Z.key===qe?Q(q,X,Z,we):null;case ae:return qe=Z._init,ge(q,X,qe(Z._payload),we)}if(ct(Z)||oe(Z))return qe!==null?null:ve(q,X,Z,we,null);vl(q,Z)}return null}function Fe(q,X,Z,we,qe){if(typeof we=="string"&&we!==""||typeof we=="number")return q=q.get(Z)||null,I(X,q,""+we,qe);if(typeof we=="object"&&we!==null){switch(we.$$typeof){case N:return q=q.get(we.key===null?Z:we.key)||null,H(X,q,we,qe);case k:return q=q.get(we.key===null?Z:we.key)||null,Q(X,q,we,qe);case ae:var tt=we._init;return Fe(q,X,Z,tt(we._payload),qe)}if(ct(we)||oe(we))return q=q.get(Z)||null,ve(X,q,we,qe,null);vl(X,we)}return null}function He(q,X,Z,we){for(var qe=null,tt=null,nt=X,lt=X=0,cn=null;nt!==null&&lt<Z.length;lt++){nt.index>lt?(cn=nt,nt=null):cn=nt.sibling;var Tt=ge(q,nt,Z[lt],we);if(Tt===null){nt===null&&(nt=cn);break}i&&nt&&Tt.alternate===null&&s(q,nt),X=_(Tt,X,lt),tt===null?qe=Tt:tt.sibling=Tt,tt=Tt,nt=cn}if(lt===Z.length)return a(q,nt),Wt&&qr(q,lt),qe;if(nt===null){for(;lt<Z.length;lt++)nt=ye(q,Z[lt],we),nt!==null&&(X=_(nt,X,lt),tt===null?qe=nt:tt.sibling=nt,tt=nt);return Wt&&qr(q,lt),qe}for(nt=c(q,nt);lt<Z.length;lt++)cn=Fe(nt,q,lt,Z[lt],we),cn!==null&&(i&&cn.alternate!==null&&nt.delete(cn.key===null?lt:cn.key),X=_(cn,X,lt),tt===null?qe=cn:tt.sibling=cn,tt=cn);return i&&nt.forEach(function(wr){return s(q,wr)}),Wt&&qr(q,lt),qe}function Xe(q,X,Z,we){var qe=oe(Z);if(typeof qe!="function")throw Error(t(150));if(Z=qe.call(Z),Z==null)throw Error(t(151));for(var tt=qe=null,nt=X,lt=X=0,cn=null,Tt=Z.next();nt!==null&&!Tt.done;lt++,Tt=Z.next()){nt.index>lt?(cn=nt,nt=null):cn=nt.sibling;var wr=ge(q,nt,Tt.value,we);if(wr===null){nt===null&&(nt=cn);break}i&&nt&&wr.alternate===null&&s(q,nt),X=_(wr,X,lt),tt===null?qe=wr:tt.sibling=wr,tt=wr,nt=cn}if(Tt.done)return a(q,nt),Wt&&qr(q,lt),qe;if(nt===null){for(;!Tt.done;lt++,Tt=Z.next())Tt=ye(q,Tt.value,we),Tt!==null&&(X=_(Tt,X,lt),tt===null?qe=Tt:tt.sibling=Tt,tt=Tt);return Wt&&qr(q,lt),qe}for(nt=c(q,nt);!Tt.done;lt++,Tt=Z.next())Tt=Fe(nt,q,lt,Tt.value,we),Tt!==null&&(i&&Tt.alternate!==null&&nt.delete(Tt.key===null?lt:Tt.key),X=_(Tt,X,lt),tt===null?qe=Tt:tt.sibling=Tt,tt=Tt);return i&&nt.forEach(function(iM){return s(q,iM)}),Wt&&qr(q,lt),qe}function Qt(q,X,Z,we){if(typeof Z=="object"&&Z!==null&&Z.type===B&&Z.key===null&&(Z=Z.props.children),typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case N:e:{for(var qe=Z.key,tt=X;tt!==null;){if(tt.key===qe){if(qe=Z.type,qe===B){if(tt.tag===7){a(q,tt.sibling),X=p(tt,Z.props.children),X.return=q,q=X;break e}}else if(tt.elementType===qe||typeof qe=="object"&&qe!==null&&qe.$$typeof===ae&&Sm(qe)===tt.type){a(q,tt.sibling),X=p(tt,Z.props),X.ref=Yo(q,tt,Z),X.return=q,q=X;break e}a(q,tt);break}else s(q,tt);tt=tt.sibling}Z.type===B?(X=ts(Z.props.children,q.mode,we,Z.key),X.return=q,q=X):(we=zl(Z.type,Z.key,Z.props,null,q.mode,we),we.ref=Yo(q,X,Z),we.return=q,q=we)}return T(q);case k:e:{for(tt=Z.key;X!==null;){if(X.key===tt)if(X.tag===4&&X.stateNode.containerInfo===Z.containerInfo&&X.stateNode.implementation===Z.implementation){a(q,X.sibling),X=p(X,Z.children||[]),X.return=q,q=X;break e}else{a(q,X);break}else s(q,X);X=X.sibling}X=wf(Z,q.mode,we),X.return=q,q=X}return T(q);case ae:return tt=Z._init,Qt(q,X,tt(Z._payload),we)}if(ct(Z))return He(q,X,Z,we);if(oe(Z))return Xe(q,X,Z,we);vl(q,Z)}return typeof Z=="string"&&Z!==""||typeof Z=="number"?(Z=""+Z,X!==null&&X.tag===6?(a(q,X.sibling),X=p(X,Z),X.return=q,q=X):(a(q,X),X=Tf(Z,q.mode,we),X.return=q,q=X),T(q)):a(q,X)}return Qt}var Vs=Mm(!0),Em=Mm(!1),_l=pr(null),yl=null,zs=null,Ic=null;function Nc(){Ic=zs=yl=null}function Uc(i){var s=_l.current;Ht(_l),i._currentValue=s}function Fc(i,s,a){for(;i!==null;){var c=i.alternate;if((i.childLanes&s)!==s?(i.childLanes|=s,c!==null&&(c.childLanes|=s)):c!==null&&(c.childLanes&s)!==s&&(c.childLanes|=s),i===a)break;i=i.return}}function Hs(i,s){yl=i,Ic=zs=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&s)!==0&&(Nn=!0),i.firstContext=null)}function ei(i){var s=i._currentValue;if(Ic!==i)if(i={context:i,memoizedValue:s,next:null},zs===null){if(yl===null)throw Error(t(308));zs=i,yl.dependencies={lanes:0,firstContext:i}}else zs=zs.next=i;return s}var Yr=null;function Oc(i){Yr===null?Yr=[i]:Yr.push(i)}function Tm(i,s,a,c){var p=s.interleaved;return p===null?(a.next=a,Oc(s)):(a.next=p.next,p.next=a),s.interleaved=a,zi(i,c)}function zi(i,s){i.lanes|=s;var a=i.alternate;for(a!==null&&(a.lanes|=s),a=i,i=i.return;i!==null;)i.childLanes|=s,a=i.alternate,a!==null&&(a.childLanes|=s),a=i,i=i.return;return a.tag===3?a.stateNode:null}var vr=!1;function kc(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function wm(i,s){i=i.updateQueue,s.updateQueue===i&&(s.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function Hi(i,s){return{eventTime:i,lane:s,tag:0,payload:null,callback:null,next:null}}function _r(i,s,a){var c=i.updateQueue;if(c===null)return null;if(c=c.shared,(Et&2)!==0){var p=c.pending;return p===null?s.next=s:(s.next=p.next,p.next=s),c.pending=s,zi(i,a)}return p=c.interleaved,p===null?(s.next=s,Oc(c)):(s.next=p.next,p.next=s),c.interleaved=s,zi(i,a)}function xl(i,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194240)!==0)){var c=s.lanes;c&=i.pendingLanes,a|=c,s.lanes=a,Gr(i,a)}}function Am(i,s){var a=i.updateQueue,c=i.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var p=null,_=null;if(a=a.firstBaseUpdate,a!==null){do{var T={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};_===null?p=_=T:_=_.next=T,a=a.next}while(a!==null);_===null?p=_=s:_=_.next=s}else p=_=s;a={baseState:c.baseState,firstBaseUpdate:p,lastBaseUpdate:_,shared:c.shared,effects:c.effects},i.updateQueue=a;return}i=a.lastBaseUpdate,i===null?a.firstBaseUpdate=s:i.next=s,a.lastBaseUpdate=s}function Sl(i,s,a,c){var p=i.updateQueue;vr=!1;var _=p.firstBaseUpdate,T=p.lastBaseUpdate,I=p.shared.pending;if(I!==null){p.shared.pending=null;var H=I,Q=H.next;H.next=null,T===null?_=Q:T.next=Q,T=H;var ve=i.alternate;ve!==null&&(ve=ve.updateQueue,I=ve.lastBaseUpdate,I!==T&&(I===null?ve.firstBaseUpdate=Q:I.next=Q,ve.lastBaseUpdate=H))}if(_!==null){var ye=p.baseState;T=0,ve=Q=H=null,I=_;do{var ge=I.lane,Fe=I.eventTime;if((c&ge)===ge){ve!==null&&(ve=ve.next={eventTime:Fe,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var He=i,Xe=I;switch(ge=s,Fe=a,Xe.tag){case 1:if(He=Xe.payload,typeof He=="function"){ye=He.call(Fe,ye,ge);break e}ye=He;break e;case 3:He.flags=He.flags&-65537|128;case 0:if(He=Xe.payload,ge=typeof He=="function"?He.call(Fe,ye,ge):He,ge==null)break e;ye=ie({},ye,ge);break e;case 2:vr=!0}}I.callback!==null&&I.lane!==0&&(i.flags|=64,ge=p.effects,ge===null?p.effects=[I]:ge.push(I))}else Fe={eventTime:Fe,lane:ge,tag:I.tag,payload:I.payload,callback:I.callback,next:null},ve===null?(Q=ve=Fe,H=ye):ve=ve.next=Fe,T|=ge;if(I=I.next,I===null){if(I=p.shared.pending,I===null)break;ge=I,I=ge.next,ge.next=null,p.lastBaseUpdate=ge,p.shared.pending=null}}while(!0);if(ve===null&&(H=ye),p.baseState=H,p.firstBaseUpdate=Q,p.lastBaseUpdate=ve,s=p.shared.interleaved,s!==null){p=s;do T|=p.lane,p=p.next;while(p!==s)}else _===null&&(p.shared.lanes=0);Zr|=T,i.lanes=T,i.memoizedState=ye}}function Cm(i,s,a){if(i=s.effects,s.effects=null,i!==null)for(s=0;s<i.length;s++){var c=i[s],p=c.callback;if(p!==null){if(c.callback=null,c=a,typeof p!="function")throw Error(t(191,p));p.call(c)}}}var $o={},Ai=pr($o),Ko=pr($o),Zo=pr($o);function $r(i){if(i===$o)throw Error(t(174));return i}function Bc(i,s){switch(kt(Zo,s),kt(Ko,i),kt(Ai,$o),i=s.nodeType,i){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:_e(null,"");break;default:i=i===8?s.parentNode:s,s=i.namespaceURI||null,i=i.tagName,s=_e(s,i)}Ht(Ai),kt(Ai,s)}function Gs(){Ht(Ai),Ht(Ko),Ht(Zo)}function Rm(i){$r(Zo.current);var s=$r(Ai.current),a=_e(s,i.type);s!==a&&(kt(Ko,i),kt(Ai,a))}function Vc(i){Ko.current===i&&(Ht(Ai),Ht(Ko))}var Xt=pr(0);function Ml(i){for(var s=i;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var zc=[];function Hc(){for(var i=0;i<zc.length;i++)zc[i]._workInProgressVersionPrimary=null;zc.length=0}var El=C.ReactCurrentDispatcher,Gc=C.ReactCurrentBatchConfig,Kr=0,jt=null,rn=null,ln=null,Tl=!1,Qo=!1,Jo=0,wS=0;function xn(){throw Error(t(321))}function Wc(i,s){if(s===null)return!1;for(var a=0;a<s.length&&a<i.length;a++)if(!di(i[a],s[a]))return!1;return!0}function Xc(i,s,a,c,p,_){if(Kr=_,jt=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,El.current=i===null||i.memoizedState===null?PS:bS,i=a(c,p),Qo){_=0;do{if(Qo=!1,Jo=0,25<=_)throw Error(t(301));_+=1,ln=rn=null,s.updateQueue=null,El.current=DS,i=a(c,p)}while(Qo)}if(El.current=Cl,s=rn!==null&&rn.next!==null,Kr=0,ln=rn=jt=null,Tl=!1,s)throw Error(t(300));return i}function jc(){var i=Jo!==0;return Jo=0,i}function Ci(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ln===null?jt.memoizedState=ln=i:ln=ln.next=i,ln}function ti(){if(rn===null){var i=jt.alternate;i=i!==null?i.memoizedState:null}else i=rn.next;var s=ln===null?jt.memoizedState:ln.next;if(s!==null)ln=s,rn=i;else{if(i===null)throw Error(t(310));rn=i,i={memoizedState:rn.memoizedState,baseState:rn.baseState,baseQueue:rn.baseQueue,queue:rn.queue,next:null},ln===null?jt.memoizedState=ln=i:ln=ln.next=i}return ln}function ea(i,s){return typeof s=="function"?s(i):s}function qc(i){var s=ti(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=i;var c=rn,p=c.baseQueue,_=a.pending;if(_!==null){if(p!==null){var T=p.next;p.next=_.next,_.next=T}c.baseQueue=p=_,a.pending=null}if(p!==null){_=p.next,c=c.baseState;var I=T=null,H=null,Q=_;do{var ve=Q.lane;if((Kr&ve)===ve)H!==null&&(H=H.next={lane:0,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),c=Q.hasEagerState?Q.eagerState:i(c,Q.action);else{var ye={lane:ve,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null};H===null?(I=H=ye,T=c):H=H.next=ye,jt.lanes|=ve,Zr|=ve}Q=Q.next}while(Q!==null&&Q!==_);H===null?T=c:H.next=I,di(c,s.memoizedState)||(Nn=!0),s.memoizedState=c,s.baseState=T,s.baseQueue=H,a.lastRenderedState=c}if(i=a.interleaved,i!==null){p=i;do _=p.lane,jt.lanes|=_,Zr|=_,p=p.next;while(p!==i)}else p===null&&(a.lanes=0);return[s.memoizedState,a.dispatch]}function Yc(i){var s=ti(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=i;var c=a.dispatch,p=a.pending,_=s.memoizedState;if(p!==null){a.pending=null;var T=p=p.next;do _=i(_,T.action),T=T.next;while(T!==p);di(_,s.memoizedState)||(Nn=!0),s.memoizedState=_,s.baseQueue===null&&(s.baseState=_),a.lastRenderedState=_}return[_,c]}function Pm(){}function bm(i,s){var a=jt,c=ti(),p=s(),_=!di(c.memoizedState,p);if(_&&(c.memoizedState=p,Nn=!0),c=c.queue,$c(Im.bind(null,a,c,i),[i]),c.getSnapshot!==s||_||ln!==null&&ln.memoizedState.tag&1){if(a.flags|=2048,ta(9,Lm.bind(null,a,c,p,s),void 0,null),un===null)throw Error(t(349));(Kr&30)!==0||Dm(a,s,p)}return p}function Dm(i,s,a){i.flags|=16384,i={getSnapshot:s,value:a},s=jt.updateQueue,s===null?(s={lastEffect:null,stores:null},jt.updateQueue=s,s.stores=[i]):(a=s.stores,a===null?s.stores=[i]:a.push(i))}function Lm(i,s,a,c){s.value=a,s.getSnapshot=c,Nm(s)&&Um(i)}function Im(i,s,a){return a(function(){Nm(s)&&Um(i)})}function Nm(i){var s=i.getSnapshot;i=i.value;try{var a=s();return!di(i,a)}catch{return!0}}function Um(i){var s=zi(i,1);s!==null&&vi(s,i,1,-1)}function Fm(i){var s=Ci();return typeof i=="function"&&(i=i()),s.memoizedState=s.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:i},s.queue=i,i=i.dispatch=RS.bind(null,jt,i),[s.memoizedState,i]}function ta(i,s,a,c){return i={tag:i,create:s,destroy:a,deps:c,next:null},s=jt.updateQueue,s===null?(s={lastEffect:null,stores:null},jt.updateQueue=s,s.lastEffect=i.next=i):(a=s.lastEffect,a===null?s.lastEffect=i.next=i:(c=a.next,a.next=i,i.next=c,s.lastEffect=i)),i}function Om(){return ti().memoizedState}function wl(i,s,a,c){var p=Ci();jt.flags|=i,p.memoizedState=ta(1|s,a,void 0,c===void 0?null:c)}function Al(i,s,a,c){var p=ti();c=c===void 0?null:c;var _=void 0;if(rn!==null){var T=rn.memoizedState;if(_=T.destroy,c!==null&&Wc(c,T.deps)){p.memoizedState=ta(s,a,_,c);return}}jt.flags|=i,p.memoizedState=ta(1|s,a,_,c)}function km(i,s){return wl(8390656,8,i,s)}function $c(i,s){return Al(2048,8,i,s)}function Bm(i,s){return Al(4,2,i,s)}function Vm(i,s){return Al(4,4,i,s)}function zm(i,s){if(typeof s=="function")return i=i(),s(i),function(){s(null)};if(s!=null)return i=i(),s.current=i,function(){s.current=null}}function Hm(i,s,a){return a=a!=null?a.concat([i]):null,Al(4,4,zm.bind(null,s,i),a)}function Kc(){}function Gm(i,s){var a=ti();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&Wc(s,c[1])?c[0]:(a.memoizedState=[i,s],i)}function Wm(i,s){var a=ti();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&Wc(s,c[1])?c[0]:(i=i(),a.memoizedState=[i,s],i)}function Xm(i,s,a){return(Kr&21)===0?(i.baseState&&(i.baseState=!1,Nn=!0),i.memoizedState=a):(di(a,s)||(a=Rn(),jt.lanes|=a,Zr|=a,i.baseState=!0),s)}function AS(i,s){var a=_t;_t=a!==0&&4>a?a:4,i(!0);var c=Gc.transition;Gc.transition={};try{i(!1),s()}finally{_t=a,Gc.transition=c}}function jm(){return ti().memoizedState}function CS(i,s,a){var c=Mr(i);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},qm(i))Ym(s,a);else if(a=Tm(i,s,a,c),a!==null){var p=bn();vi(a,i,c,p),$m(a,s,c)}}function RS(i,s,a){var c=Mr(i),p={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(qm(i))Ym(s,p);else{var _=i.alternate;if(i.lanes===0&&(_===null||_.lanes===0)&&(_=s.lastRenderedReducer,_!==null))try{var T=s.lastRenderedState,I=_(T,a);if(p.hasEagerState=!0,p.eagerState=I,di(I,T)){var H=s.interleaved;H===null?(p.next=p,Oc(s)):(p.next=H.next,H.next=p),s.interleaved=p;return}}catch{}a=Tm(i,s,p,c),a!==null&&(p=bn(),vi(a,i,c,p),$m(a,s,c))}}function qm(i){var s=i.alternate;return i===jt||s!==null&&s===jt}function Ym(i,s){Qo=Tl=!0;var a=i.pending;a===null?s.next=s:(s.next=a.next,a.next=s),i.pending=s}function $m(i,s,a){if((a&4194240)!==0){var c=s.lanes;c&=i.pendingLanes,a|=c,s.lanes=a,Gr(i,a)}}var Cl={readContext:ei,useCallback:xn,useContext:xn,useEffect:xn,useImperativeHandle:xn,useInsertionEffect:xn,useLayoutEffect:xn,useMemo:xn,useReducer:xn,useRef:xn,useState:xn,useDebugValue:xn,useDeferredValue:xn,useTransition:xn,useMutableSource:xn,useSyncExternalStore:xn,useId:xn,unstable_isNewReconciler:!1},PS={readContext:ei,useCallback:function(i,s){return Ci().memoizedState=[i,s===void 0?null:s],i},useContext:ei,useEffect:km,useImperativeHandle:function(i,s,a){return a=a!=null?a.concat([i]):null,wl(4194308,4,zm.bind(null,s,i),a)},useLayoutEffect:function(i,s){return wl(4194308,4,i,s)},useInsertionEffect:function(i,s){return wl(4,2,i,s)},useMemo:function(i,s){var a=Ci();return s=s===void 0?null:s,i=i(),a.memoizedState=[i,s],i},useReducer:function(i,s,a){var c=Ci();return s=a!==void 0?a(s):s,c.memoizedState=c.baseState=s,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:s},c.queue=i,i=i.dispatch=CS.bind(null,jt,i),[c.memoizedState,i]},useRef:function(i){var s=Ci();return i={current:i},s.memoizedState=i},useState:Fm,useDebugValue:Kc,useDeferredValue:function(i){return Ci().memoizedState=i},useTransition:function(){var i=Fm(!1),s=i[0];return i=AS.bind(null,i[1]),Ci().memoizedState=i,[s,i]},useMutableSource:function(){},useSyncExternalStore:function(i,s,a){var c=jt,p=Ci();if(Wt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=s(),un===null)throw Error(t(349));(Kr&30)!==0||Dm(c,s,a)}p.memoizedState=a;var _={value:a,getSnapshot:s};return p.queue=_,km(Im.bind(null,c,_,i),[i]),c.flags|=2048,ta(9,Lm.bind(null,c,_,a,s),void 0,null),a},useId:function(){var i=Ci(),s=un.identifierPrefix;if(Wt){var a=Vi,c=Bi;a=(c&~(1<<32-Mt(c)-1)).toString(32)+a,s=":"+s+"R"+a,a=Jo++,0<a&&(s+="H"+a.toString(32)),s+=":"}else a=wS++,s=":"+s+"r"+a.toString(32)+":";return i.memoizedState=s},unstable_isNewReconciler:!1},bS={readContext:ei,useCallback:Gm,useContext:ei,useEffect:$c,useImperativeHandle:Hm,useInsertionEffect:Bm,useLayoutEffect:Vm,useMemo:Wm,useReducer:qc,useRef:Om,useState:function(){return qc(ea)},useDebugValue:Kc,useDeferredValue:function(i){var s=ti();return Xm(s,rn.memoizedState,i)},useTransition:function(){var i=qc(ea)[0],s=ti().memoizedState;return[i,s]},useMutableSource:Pm,useSyncExternalStore:bm,useId:jm,unstable_isNewReconciler:!1},DS={readContext:ei,useCallback:Gm,useContext:ei,useEffect:$c,useImperativeHandle:Hm,useInsertionEffect:Bm,useLayoutEffect:Vm,useMemo:Wm,useReducer:Yc,useRef:Om,useState:function(){return Yc(ea)},useDebugValue:Kc,useDeferredValue:function(i){var s=ti();return rn===null?s.memoizedState=i:Xm(s,rn.memoizedState,i)},useTransition:function(){var i=Yc(ea)[0],s=ti().memoizedState;return[i,s]},useMutableSource:Pm,useSyncExternalStore:bm,useId:jm,unstable_isNewReconciler:!1};function pi(i,s){if(i&&i.defaultProps){s=ie({},s),i=i.defaultProps;for(var a in i)s[a]===void 0&&(s[a]=i[a]);return s}return s}function Zc(i,s,a,c){s=i.memoizedState,a=a(c,s),a=a==null?s:ie({},s,a),i.memoizedState=a,i.lanes===0&&(i.updateQueue.baseState=a)}var Rl={isMounted:function(i){return(i=i._reactInternals)?Fi(i)===i:!1},enqueueSetState:function(i,s,a){i=i._reactInternals;var c=bn(),p=Mr(i),_=Hi(c,p);_.payload=s,a!=null&&(_.callback=a),s=_r(i,_,p),s!==null&&(vi(s,i,p,c),xl(s,i,p))},enqueueReplaceState:function(i,s,a){i=i._reactInternals;var c=bn(),p=Mr(i),_=Hi(c,p);_.tag=1,_.payload=s,a!=null&&(_.callback=a),s=_r(i,_,p),s!==null&&(vi(s,i,p,c),xl(s,i,p))},enqueueForceUpdate:function(i,s){i=i._reactInternals;var a=bn(),c=Mr(i),p=Hi(a,c);p.tag=2,s!=null&&(p.callback=s),s=_r(i,p,c),s!==null&&(vi(s,i,c,a),xl(s,i,c))}};function Km(i,s,a,c,p,_,T){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(c,_,T):s.prototype&&s.prototype.isPureReactComponent?!zo(a,c)||!zo(p,_):!0}function Zm(i,s,a){var c=!1,p=mr,_=s.contextType;return typeof _=="object"&&_!==null?_=ei(_):(p=In(s)?Xr:yn.current,c=s.contextTypes,_=(c=c!=null)?Fs(i,p):mr),s=new s(a,_),i.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Rl,i.stateNode=s,s._reactInternals=i,c&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=p,i.__reactInternalMemoizedMaskedChildContext=_),s}function Qm(i,s,a,c){i=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,c),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,c),s.state!==i&&Rl.enqueueReplaceState(s,s.state,null)}function Qc(i,s,a,c){var p=i.stateNode;p.props=a,p.state=i.memoizedState,p.refs={},kc(i);var _=s.contextType;typeof _=="object"&&_!==null?p.context=ei(_):(_=In(s)?Xr:yn.current,p.context=Fs(i,_)),p.state=i.memoizedState,_=s.getDerivedStateFromProps,typeof _=="function"&&(Zc(i,s,_,a),p.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(s=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),s!==p.state&&Rl.enqueueReplaceState(p,p.state,null),Sl(i,a,p,c),p.state=i.memoizedState),typeof p.componentDidMount=="function"&&(i.flags|=4194308)}function Ws(i,s){try{var a="",c=s;do a+=Y(c),c=c.return;while(c);var p=a}catch(_){p=`
Error generating stack: `+_.message+`
`+_.stack}return{value:i,source:s,stack:p,digest:null}}function Jc(i,s,a){return{value:i,source:null,stack:a??null,digest:s??null}}function ef(i,s){try{console.error(s.value)}catch(a){setTimeout(function(){throw a})}}var LS=typeof WeakMap=="function"?WeakMap:Map;function Jm(i,s,a){a=Hi(-1,a),a.tag=3,a.payload={element:null};var c=s.value;return a.callback=function(){Ul||(Ul=!0,gf=c),ef(i,s)},a}function eg(i,s,a){a=Hi(-1,a),a.tag=3;var c=i.type.getDerivedStateFromError;if(typeof c=="function"){var p=s.value;a.payload=function(){return c(p)},a.callback=function(){ef(i,s)}}var _=i.stateNode;return _!==null&&typeof _.componentDidCatch=="function"&&(a.callback=function(){ef(i,s),typeof c!="function"&&(xr===null?xr=new Set([this]):xr.add(this));var T=s.stack;this.componentDidCatch(s.value,{componentStack:T!==null?T:""})}),a}function tg(i,s,a){var c=i.pingCache;if(c===null){c=i.pingCache=new LS;var p=new Set;c.set(s,p)}else p=c.get(s),p===void 0&&(p=new Set,c.set(s,p));p.has(a)||(p.add(a),i=jS.bind(null,i,s,a),s.then(i,i))}function ng(i){do{var s;if((s=i.tag===13)&&(s=i.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return i;i=i.return}while(i!==null);return null}function ig(i,s,a,c,p){return(i.mode&1)===0?(i===s?i.flags|=65536:(i.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(s=Hi(-1,1),s.tag=2,_r(a,s,1))),a.lanes|=1),i):(i.flags|=65536,i.lanes=p,i)}var IS=C.ReactCurrentOwner,Nn=!1;function Pn(i,s,a,c){s.child=i===null?Em(s,null,a,c):Vs(s,i.child,a,c)}function rg(i,s,a,c,p){a=a.render;var _=s.ref;return Hs(s,p),c=Xc(i,s,a,c,_,p),a=jc(),i!==null&&!Nn?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~p,Gi(i,s,p)):(Wt&&a&&Rc(s),s.flags|=1,Pn(i,s,c,p),s.child)}function sg(i,s,a,c,p){if(i===null){var _=a.type;return typeof _=="function"&&!Ef(_)&&_.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(s.tag=15,s.type=_,og(i,s,_,c,p)):(i=zl(a.type,null,c,s,s.mode,p),i.ref=s.ref,i.return=s,s.child=i)}if(_=i.child,(i.lanes&p)===0){var T=_.memoizedProps;if(a=a.compare,a=a!==null?a:zo,a(T,c)&&i.ref===s.ref)return Gi(i,s,p)}return s.flags|=1,i=Tr(_,c),i.ref=s.ref,i.return=s,s.child=i}function og(i,s,a,c,p){if(i!==null){var _=i.memoizedProps;if(zo(_,c)&&i.ref===s.ref)if(Nn=!1,s.pendingProps=c=_,(i.lanes&p)!==0)(i.flags&131072)!==0&&(Nn=!0);else return s.lanes=i.lanes,Gi(i,s,p)}return tf(i,s,a,c,p)}function ag(i,s,a){var c=s.pendingProps,p=c.children,_=i!==null?i.memoizedState:null;if(c.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},kt(js,Xn),Xn|=a;else{if((a&1073741824)===0)return i=_!==null?_.baseLanes|a:a,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:i,cachePool:null,transitions:null},s.updateQueue=null,kt(js,Xn),Xn|=i,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=_!==null?_.baseLanes:a,kt(js,Xn),Xn|=c}else _!==null?(c=_.baseLanes|a,s.memoizedState=null):c=a,kt(js,Xn),Xn|=c;return Pn(i,s,p,a),s.child}function lg(i,s){var a=s.ref;(i===null&&a!==null||i!==null&&i.ref!==a)&&(s.flags|=512,s.flags|=2097152)}function tf(i,s,a,c,p){var _=In(a)?Xr:yn.current;return _=Fs(s,_),Hs(s,p),a=Xc(i,s,a,c,_,p),c=jc(),i!==null&&!Nn?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~p,Gi(i,s,p)):(Wt&&c&&Rc(s),s.flags|=1,Pn(i,s,a,p),s.child)}function ug(i,s,a,c,p){if(In(a)){var _=!0;dl(s)}else _=!1;if(Hs(s,p),s.stateNode===null)bl(i,s),Zm(s,a,c),Qc(s,a,c,p),c=!0;else if(i===null){var T=s.stateNode,I=s.memoizedProps;T.props=I;var H=T.context,Q=a.contextType;typeof Q=="object"&&Q!==null?Q=ei(Q):(Q=In(a)?Xr:yn.current,Q=Fs(s,Q));var ve=a.getDerivedStateFromProps,ye=typeof ve=="function"||typeof T.getSnapshotBeforeUpdate=="function";ye||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(I!==c||H!==Q)&&Qm(s,T,c,Q),vr=!1;var ge=s.memoizedState;T.state=ge,Sl(s,c,T,p),H=s.memoizedState,I!==c||ge!==H||Ln.current||vr?(typeof ve=="function"&&(Zc(s,a,ve,c),H=s.memoizedState),(I=vr||Km(s,a,I,c,ge,H,Q))?(ye||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(s.flags|=4194308)):(typeof T.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=c,s.memoizedState=H),T.props=c,T.state=H,T.context=Q,c=I):(typeof T.componentDidMount=="function"&&(s.flags|=4194308),c=!1)}else{T=s.stateNode,wm(i,s),I=s.memoizedProps,Q=s.type===s.elementType?I:pi(s.type,I),T.props=Q,ye=s.pendingProps,ge=T.context,H=a.contextType,typeof H=="object"&&H!==null?H=ei(H):(H=In(a)?Xr:yn.current,H=Fs(s,H));var Fe=a.getDerivedStateFromProps;(ve=typeof Fe=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(I!==ye||ge!==H)&&Qm(s,T,c,H),vr=!1,ge=s.memoizedState,T.state=ge,Sl(s,c,T,p);var He=s.memoizedState;I!==ye||ge!==He||Ln.current||vr?(typeof Fe=="function"&&(Zc(s,a,Fe,c),He=s.memoizedState),(Q=vr||Km(s,a,Q,c,ge,He,H)||!1)?(ve||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(c,He,H),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(c,He,H)),typeof T.componentDidUpdate=="function"&&(s.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof T.componentDidUpdate!="function"||I===i.memoizedProps&&ge===i.memoizedState||(s.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||I===i.memoizedProps&&ge===i.memoizedState||(s.flags|=1024),s.memoizedProps=c,s.memoizedState=He),T.props=c,T.state=He,T.context=H,c=Q):(typeof T.componentDidUpdate!="function"||I===i.memoizedProps&&ge===i.memoizedState||(s.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||I===i.memoizedProps&&ge===i.memoizedState||(s.flags|=1024),c=!1)}return nf(i,s,a,c,_,p)}function nf(i,s,a,c,p,_){lg(i,s);var T=(s.flags&128)!==0;if(!c&&!T)return p&&pm(s,a,!1),Gi(i,s,_);c=s.stateNode,IS.current=s;var I=T&&typeof a.getDerivedStateFromError!="function"?null:c.render();return s.flags|=1,i!==null&&T?(s.child=Vs(s,i.child,null,_),s.child=Vs(s,null,I,_)):Pn(i,s,I,_),s.memoizedState=c.state,p&&pm(s,a,!0),s.child}function cg(i){var s=i.stateNode;s.pendingContext?dm(i,s.pendingContext,s.pendingContext!==s.context):s.context&&dm(i,s.context,!1),Bc(i,s.containerInfo)}function fg(i,s,a,c,p){return Bs(),Lc(p),s.flags|=256,Pn(i,s,a,c),s.child}var rf={dehydrated:null,treeContext:null,retryLane:0};function sf(i){return{baseLanes:i,cachePool:null,transitions:null}}function dg(i,s,a){var c=s.pendingProps,p=Xt.current,_=!1,T=(s.flags&128)!==0,I;if((I=T)||(I=i!==null&&i.memoizedState===null?!1:(p&2)!==0),I?(_=!0,s.flags&=-129):(i===null||i.memoizedState!==null)&&(p|=1),kt(Xt,p&1),i===null)return Dc(s),i=s.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((s.mode&1)===0?s.lanes=1:i.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(T=c.children,i=c.fallback,_?(c=s.mode,_=s.child,T={mode:"hidden",children:T},(c&1)===0&&_!==null?(_.childLanes=0,_.pendingProps=T):_=Hl(T,c,0,null),i=ts(i,c,a,null),_.return=s,i.return=s,_.sibling=i,s.child=_,s.child.memoizedState=sf(a),s.memoizedState=rf,i):of(s,T));if(p=i.memoizedState,p!==null&&(I=p.dehydrated,I!==null))return NS(i,s,T,c,I,p,a);if(_){_=c.fallback,T=s.mode,p=i.child,I=p.sibling;var H={mode:"hidden",children:c.children};return(T&1)===0&&s.child!==p?(c=s.child,c.childLanes=0,c.pendingProps=H,s.deletions=null):(c=Tr(p,H),c.subtreeFlags=p.subtreeFlags&14680064),I!==null?_=Tr(I,_):(_=ts(_,T,a,null),_.flags|=2),_.return=s,c.return=s,c.sibling=_,s.child=c,c=_,_=s.child,T=i.child.memoizedState,T=T===null?sf(a):{baseLanes:T.baseLanes|a,cachePool:null,transitions:T.transitions},_.memoizedState=T,_.childLanes=i.childLanes&~a,s.memoizedState=rf,c}return _=i.child,i=_.sibling,c=Tr(_,{mode:"visible",children:c.children}),(s.mode&1)===0&&(c.lanes=a),c.return=s,c.sibling=null,i!==null&&(a=s.deletions,a===null?(s.deletions=[i],s.flags|=16):a.push(i)),s.child=c,s.memoizedState=null,c}function of(i,s){return s=Hl({mode:"visible",children:s},i.mode,0,null),s.return=i,i.child=s}function Pl(i,s,a,c){return c!==null&&Lc(c),Vs(s,i.child,null,a),i=of(s,s.pendingProps.children),i.flags|=2,s.memoizedState=null,i}function NS(i,s,a,c,p,_,T){if(a)return s.flags&256?(s.flags&=-257,c=Jc(Error(t(422))),Pl(i,s,T,c)):s.memoizedState!==null?(s.child=i.child,s.flags|=128,null):(_=c.fallback,p=s.mode,c=Hl({mode:"visible",children:c.children},p,0,null),_=ts(_,p,T,null),_.flags|=2,c.return=s,_.return=s,c.sibling=_,s.child=c,(s.mode&1)!==0&&Vs(s,i.child,null,T),s.child.memoizedState=sf(T),s.memoizedState=rf,_);if((s.mode&1)===0)return Pl(i,s,T,null);if(p.data==="$!"){if(c=p.nextSibling&&p.nextSibling.dataset,c)var I=c.dgst;return c=I,_=Error(t(419)),c=Jc(_,c,void 0),Pl(i,s,T,c)}if(I=(T&i.childLanes)!==0,Nn||I){if(c=un,c!==null){switch(T&-T){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(c.suspendedLanes|T))!==0?0:p,p!==0&&p!==_.retryLane&&(_.retryLane=p,zi(i,p),vi(c,i,p,-1))}return Mf(),c=Jc(Error(t(421))),Pl(i,s,T,c)}return p.data==="$?"?(s.flags|=128,s.child=i.child,s=qS.bind(null,i),p._reactRetry=s,null):(i=_.treeContext,Wn=hr(p.nextSibling),Gn=s,Wt=!0,hi=null,i!==null&&(Qn[Jn++]=Bi,Qn[Jn++]=Vi,Qn[Jn++]=jr,Bi=i.id,Vi=i.overflow,jr=s),s=of(s,c.children),s.flags|=4096,s)}function hg(i,s,a){i.lanes|=s;var c=i.alternate;c!==null&&(c.lanes|=s),Fc(i.return,s,a)}function af(i,s,a,c,p){var _=i.memoizedState;_===null?i.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:p}:(_.isBackwards=s,_.rendering=null,_.renderingStartTime=0,_.last=c,_.tail=a,_.tailMode=p)}function pg(i,s,a){var c=s.pendingProps,p=c.revealOrder,_=c.tail;if(Pn(i,s,c.children,a),c=Xt.current,(c&2)!==0)c=c&1|2,s.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=s.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&hg(i,a,s);else if(i.tag===19)hg(i,a,s);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===s)break e;for(;i.sibling===null;){if(i.return===null||i.return===s)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}c&=1}if(kt(Xt,c),(s.mode&1)===0)s.memoizedState=null;else switch(p){case"forwards":for(a=s.child,p=null;a!==null;)i=a.alternate,i!==null&&Ml(i)===null&&(p=a),a=a.sibling;a=p,a===null?(p=s.child,s.child=null):(p=a.sibling,a.sibling=null),af(s,!1,p,a,_);break;case"backwards":for(a=null,p=s.child,s.child=null;p!==null;){if(i=p.alternate,i!==null&&Ml(i)===null){s.child=p;break}i=p.sibling,p.sibling=a,a=p,p=i}af(s,!0,a,null,_);break;case"together":af(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function bl(i,s){(s.mode&1)===0&&i!==null&&(i.alternate=null,s.alternate=null,s.flags|=2)}function Gi(i,s,a){if(i!==null&&(s.dependencies=i.dependencies),Zr|=s.lanes,(a&s.childLanes)===0)return null;if(i!==null&&s.child!==i.child)throw Error(t(153));if(s.child!==null){for(i=s.child,a=Tr(i,i.pendingProps),s.child=a,a.return=s;i.sibling!==null;)i=i.sibling,a=a.sibling=Tr(i,i.pendingProps),a.return=s;a.sibling=null}return s.child}function US(i,s,a){switch(s.tag){case 3:cg(s),Bs();break;case 5:Rm(s);break;case 1:In(s.type)&&dl(s);break;case 4:Bc(s,s.stateNode.containerInfo);break;case 10:var c=s.type._context,p=s.memoizedProps.value;kt(_l,c._currentValue),c._currentValue=p;break;case 13:if(c=s.memoizedState,c!==null)return c.dehydrated!==null?(kt(Xt,Xt.current&1),s.flags|=128,null):(a&s.child.childLanes)!==0?dg(i,s,a):(kt(Xt,Xt.current&1),i=Gi(i,s,a),i!==null?i.sibling:null);kt(Xt,Xt.current&1);break;case 19:if(c=(a&s.childLanes)!==0,(i.flags&128)!==0){if(c)return pg(i,s,a);s.flags|=128}if(p=s.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),kt(Xt,Xt.current),c)break;return null;case 22:case 23:return s.lanes=0,ag(i,s,a)}return Gi(i,s,a)}var mg,lf,gg,vg;mg=function(i,s){for(var a=s.child;a!==null;){if(a.tag===5||a.tag===6)i.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},lf=function(){},gg=function(i,s,a,c){var p=i.memoizedProps;if(p!==c){i=s.stateNode,$r(Ai.current);var _=null;switch(a){case"input":p=yt(i,p),c=yt(i,c),_=[];break;case"select":p=ie({},p,{value:void 0}),c=ie({},c,{value:void 0}),_=[];break;case"textarea":p=Vt(i,p),c=Vt(i,c),_=[];break;default:typeof p.onClick!="function"&&typeof c.onClick=="function"&&(i.onclick=ul)}je(a,c);var T;a=null;for(Q in p)if(!c.hasOwnProperty(Q)&&p.hasOwnProperty(Q)&&p[Q]!=null)if(Q==="style"){var I=p[Q];for(T in I)I.hasOwnProperty(T)&&(a||(a={}),a[T]="")}else Q!=="dangerouslySetInnerHTML"&&Q!=="children"&&Q!=="suppressContentEditableWarning"&&Q!=="suppressHydrationWarning"&&Q!=="autoFocus"&&(o.hasOwnProperty(Q)?_||(_=[]):(_=_||[]).push(Q,null));for(Q in c){var H=c[Q];if(I=p?.[Q],c.hasOwnProperty(Q)&&H!==I&&(H!=null||I!=null))if(Q==="style")if(I){for(T in I)!I.hasOwnProperty(T)||H&&H.hasOwnProperty(T)||(a||(a={}),a[T]="");for(T in H)H.hasOwnProperty(T)&&I[T]!==H[T]&&(a||(a={}),a[T]=H[T])}else a||(_||(_=[]),_.push(Q,a)),a=H;else Q==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,I=I?I.__html:void 0,H!=null&&I!==H&&(_=_||[]).push(Q,H)):Q==="children"?typeof H!="string"&&typeof H!="number"||(_=_||[]).push(Q,""+H):Q!=="suppressContentEditableWarning"&&Q!=="suppressHydrationWarning"&&(o.hasOwnProperty(Q)?(H!=null&&Q==="onScroll"&&zt("scroll",i),_||I===H||(_=[])):(_=_||[]).push(Q,H))}a&&(_=_||[]).push("style",a);var Q=_;(s.updateQueue=Q)&&(s.flags|=4)}},vg=function(i,s,a,c){a!==c&&(s.flags|=4)};function na(i,s){if(!Wt)switch(i.tailMode){case"hidden":s=i.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?i.tail=null:a.sibling=null;break;case"collapsed":a=i.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?s||i.tail===null?i.tail=null:i.tail.sibling=null:c.sibling=null}}function Sn(i){var s=i.alternate!==null&&i.alternate.child===i.child,a=0,c=0;if(s)for(var p=i.child;p!==null;)a|=p.lanes|p.childLanes,c|=p.subtreeFlags&14680064,c|=p.flags&14680064,p.return=i,p=p.sibling;else for(p=i.child;p!==null;)a|=p.lanes|p.childLanes,c|=p.subtreeFlags,c|=p.flags,p.return=i,p=p.sibling;return i.subtreeFlags|=c,i.childLanes=a,s}function FS(i,s,a){var c=s.pendingProps;switch(Pc(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Sn(s),null;case 1:return In(s.type)&&fl(),Sn(s),null;case 3:return c=s.stateNode,Gs(),Ht(Ln),Ht(yn),Hc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(i===null||i.child===null)&&(gl(s)?s.flags|=4:i===null||i.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,hi!==null&&(yf(hi),hi=null))),lf(i,s),Sn(s),null;case 5:Vc(s);var p=$r(Zo.current);if(a=s.type,i!==null&&s.stateNode!=null)gg(i,s,a,c,p),i.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!c){if(s.stateNode===null)throw Error(t(166));return Sn(s),null}if(i=$r(Ai.current),gl(s)){c=s.stateNode,a=s.type;var _=s.memoizedProps;switch(c[wi]=s,c[jo]=_,i=(s.mode&1)!==0,a){case"dialog":zt("cancel",c),zt("close",c);break;case"iframe":case"object":case"embed":zt("load",c);break;case"video":case"audio":for(p=0;p<Go.length;p++)zt(Go[p],c);break;case"source":zt("error",c);break;case"img":case"image":case"link":zt("error",c),zt("load",c);break;case"details":zt("toggle",c);break;case"input":Qe(c,_),zt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!_.multiple},zt("invalid",c);break;case"textarea":L(c,_),zt("invalid",c)}je(a,_),p=null;for(var T in _)if(_.hasOwnProperty(T)){var I=_[T];T==="children"?typeof I=="string"?c.textContent!==I&&(_.suppressHydrationWarning!==!0&&ll(c.textContent,I,i),p=["children",I]):typeof I=="number"&&c.textContent!==""+I&&(_.suppressHydrationWarning!==!0&&ll(c.textContent,I,i),p=["children",""+I]):o.hasOwnProperty(T)&&I!=null&&T==="onScroll"&&zt("scroll",c)}switch(a){case"input":Dt(c),Ut(c,_,!0);break;case"textarea":Dt(c),$(c);break;case"select":case"option":break;default:typeof _.onClick=="function"&&(c.onclick=ul)}c=p,s.updateQueue=c,c!==null&&(s.flags|=4)}else{T=p.nodeType===9?p:p.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=de(a)),i==="http://www.w3.org/1999/xhtml"?a==="script"?(i=T.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof c.is=="string"?i=T.createElement(a,{is:c.is}):(i=T.createElement(a),a==="select"&&(T=i,c.multiple?T.multiple=!0:c.size&&(T.size=c.size))):i=T.createElementNS(i,a),i[wi]=s,i[jo]=c,mg(i,s,!1,!1),s.stateNode=i;e:{switch(T=be(a,c),a){case"dialog":zt("cancel",i),zt("close",i),p=c;break;case"iframe":case"object":case"embed":zt("load",i),p=c;break;case"video":case"audio":for(p=0;p<Go.length;p++)zt(Go[p],i);p=c;break;case"source":zt("error",i),p=c;break;case"img":case"image":case"link":zt("error",i),zt("load",i),p=c;break;case"details":zt("toggle",i),p=c;break;case"input":Qe(i,c),p=yt(i,c),zt("invalid",i);break;case"option":p=c;break;case"select":i._wrapperState={wasMultiple:!!c.multiple},p=ie({},c,{value:void 0}),zt("invalid",i);break;case"textarea":L(i,c),p=Vt(i,c),zt("invalid",i);break;default:p=c}je(a,p),I=p;for(_ in I)if(I.hasOwnProperty(_)){var H=I[_];_==="style"?Ie(i,H):_==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,H!=null&&$e(i,H)):_==="children"?typeof H=="string"?(a!=="textarea"||H!=="")&&Ae(i,H):typeof H=="number"&&Ae(i,""+H):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(o.hasOwnProperty(_)?H!=null&&_==="onScroll"&&zt("scroll",i):H!=null&&b(i,_,H,T))}switch(a){case"input":Dt(i),Ut(i,c,!1);break;case"textarea":Dt(i),$(i);break;case"option":c.value!=null&&i.setAttribute("value",""+Te(c.value));break;case"select":i.multiple=!!c.multiple,_=c.value,_!=null?Bt(i,!!c.multiple,_,!1):c.defaultValue!=null&&Bt(i,!!c.multiple,c.defaultValue,!0);break;default:typeof p.onClick=="function"&&(i.onclick=ul)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Sn(s),null;case 6:if(i&&s.stateNode!=null)vg(i,s,i.memoizedProps,c);else{if(typeof c!="string"&&s.stateNode===null)throw Error(t(166));if(a=$r(Zo.current),$r(Ai.current),gl(s)){if(c=s.stateNode,a=s.memoizedProps,c[wi]=s,(_=c.nodeValue!==a)&&(i=Gn,i!==null))switch(i.tag){case 3:ll(c.nodeValue,a,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&ll(c.nodeValue,a,(i.mode&1)!==0)}_&&(s.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[wi]=s,s.stateNode=c}return Sn(s),null;case 13:if(Ht(Xt),c=s.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(Wt&&Wn!==null&&(s.mode&1)!==0&&(s.flags&128)===0)xm(),Bs(),s.flags|=98560,_=!1;else if(_=gl(s),c!==null&&c.dehydrated!==null){if(i===null){if(!_)throw Error(t(318));if(_=s.memoizedState,_=_!==null?_.dehydrated:null,!_)throw Error(t(317));_[wi]=s}else Bs(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Sn(s),_=!1}else hi!==null&&(yf(hi),hi=null),_=!0;if(!_)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=a,s):(c=c!==null,c!==(i!==null&&i.memoizedState!==null)&&c&&(s.child.flags|=8192,(s.mode&1)!==0&&(i===null||(Xt.current&1)!==0?sn===0&&(sn=3):Mf())),s.updateQueue!==null&&(s.flags|=4),Sn(s),null);case 4:return Gs(),lf(i,s),i===null&&Wo(s.stateNode.containerInfo),Sn(s),null;case 10:return Uc(s.type._context),Sn(s),null;case 17:return In(s.type)&&fl(),Sn(s),null;case 19:if(Ht(Xt),_=s.memoizedState,_===null)return Sn(s),null;if(c=(s.flags&128)!==0,T=_.rendering,T===null)if(c)na(_,!1);else{if(sn!==0||i!==null&&(i.flags&128)!==0)for(i=s.child;i!==null;){if(T=Ml(i),T!==null){for(s.flags|=128,na(_,!1),c=T.updateQueue,c!==null&&(s.updateQueue=c,s.flags|=4),s.subtreeFlags=0,c=a,a=s.child;a!==null;)_=a,i=c,_.flags&=14680066,T=_.alternate,T===null?(_.childLanes=0,_.lanes=i,_.child=null,_.subtreeFlags=0,_.memoizedProps=null,_.memoizedState=null,_.updateQueue=null,_.dependencies=null,_.stateNode=null):(_.childLanes=T.childLanes,_.lanes=T.lanes,_.child=T.child,_.subtreeFlags=0,_.deletions=null,_.memoizedProps=T.memoizedProps,_.memoizedState=T.memoizedState,_.updateQueue=T.updateQueue,_.type=T.type,i=T.dependencies,_.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),a=a.sibling;return kt(Xt,Xt.current&1|2),s.child}i=i.sibling}_.tail!==null&&W()>qs&&(s.flags|=128,c=!0,na(_,!1),s.lanes=4194304)}else{if(!c)if(i=Ml(T),i!==null){if(s.flags|=128,c=!0,a=i.updateQueue,a!==null&&(s.updateQueue=a,s.flags|=4),na(_,!0),_.tail===null&&_.tailMode==="hidden"&&!T.alternate&&!Wt)return Sn(s),null}else 2*W()-_.renderingStartTime>qs&&a!==1073741824&&(s.flags|=128,c=!0,na(_,!1),s.lanes=4194304);_.isBackwards?(T.sibling=s.child,s.child=T):(a=_.last,a!==null?a.sibling=T:s.child=T,_.last=T)}return _.tail!==null?(s=_.tail,_.rendering=s,_.tail=s.sibling,_.renderingStartTime=W(),s.sibling=null,a=Xt.current,kt(Xt,c?a&1|2:a&1),s):(Sn(s),null);case 22:case 23:return Sf(),c=s.memoizedState!==null,i!==null&&i.memoizedState!==null!==c&&(s.flags|=8192),c&&(s.mode&1)!==0?(Xn&1073741824)!==0&&(Sn(s),s.subtreeFlags&6&&(s.flags|=8192)):Sn(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function OS(i,s){switch(Pc(s),s.tag){case 1:return In(s.type)&&fl(),i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 3:return Gs(),Ht(Ln),Ht(yn),Hc(),i=s.flags,(i&65536)!==0&&(i&128)===0?(s.flags=i&-65537|128,s):null;case 5:return Vc(s),null;case 13:if(Ht(Xt),i=s.memoizedState,i!==null&&i.dehydrated!==null){if(s.alternate===null)throw Error(t(340));Bs()}return i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 19:return Ht(Xt),null;case 4:return Gs(),null;case 10:return Uc(s.type._context),null;case 22:case 23:return Sf(),null;case 24:return null;default:return null}}var Dl=!1,Mn=!1,kS=typeof WeakSet=="function"?WeakSet:Set,Be=null;function Xs(i,s){var a=i.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){$t(i,s,c)}else a.current=null}function uf(i,s,a){try{a()}catch(c){$t(i,s,c)}}var _g=!1;function BS(i,s){if(xc=Za,i=Kp(),dc(i)){if("selectionStart"in i)var a={start:i.selectionStart,end:i.selectionEnd};else e:{a=(a=i.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var p=c.anchorOffset,_=c.focusNode;c=c.focusOffset;try{a.nodeType,_.nodeType}catch{a=null;break e}var T=0,I=-1,H=-1,Q=0,ve=0,ye=i,ge=null;t:for(;;){for(var Fe;ye!==a||p!==0&&ye.nodeType!==3||(I=T+p),ye!==_||c!==0&&ye.nodeType!==3||(H=T+c),ye.nodeType===3&&(T+=ye.nodeValue.length),(Fe=ye.firstChild)!==null;)ge=ye,ye=Fe;for(;;){if(ye===i)break t;if(ge===a&&++Q===p&&(I=T),ge===_&&++ve===c&&(H=T),(Fe=ye.nextSibling)!==null)break;ye=ge,ge=ye.parentNode}ye=Fe}a=I===-1||H===-1?null:{start:I,end:H}}else a=null}a=a||{start:0,end:0}}else a=null;for(Sc={focusedElem:i,selectionRange:a},Za=!1,Be=s;Be!==null;)if(s=Be,i=s.child,(s.subtreeFlags&1028)!==0&&i!==null)i.return=s,Be=i;else for(;Be!==null;){s=Be;try{var He=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(He!==null){var Xe=He.memoizedProps,Qt=He.memoizedState,q=s.stateNode,X=q.getSnapshotBeforeUpdate(s.elementType===s.type?Xe:pi(s.type,Xe),Qt);q.__reactInternalSnapshotBeforeUpdate=X}break;case 3:var Z=s.stateNode.containerInfo;Z.nodeType===1?Z.textContent="":Z.nodeType===9&&Z.documentElement&&Z.removeChild(Z.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(we){$t(s,s.return,we)}if(i=s.sibling,i!==null){i.return=s.return,Be=i;break}Be=s.return}return He=_g,_g=!1,He}function ia(i,s,a){var c=s.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var p=c=c.next;do{if((p.tag&i)===i){var _=p.destroy;p.destroy=void 0,_!==void 0&&uf(s,a,_)}p=p.next}while(p!==c)}}function Ll(i,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&i)===i){var c=a.create;a.destroy=c()}a=a.next}while(a!==s)}}function cf(i){var s=i.ref;if(s!==null){var a=i.stateNode;i.tag,i=a,typeof s=="function"?s(i):s.current=i}}function yg(i){var s=i.alternate;s!==null&&(i.alternate=null,yg(s)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(s=i.stateNode,s!==null&&(delete s[wi],delete s[jo],delete s[wc],delete s[SS],delete s[MS])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function xg(i){return i.tag===5||i.tag===3||i.tag===4}function Sg(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||xg(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function ff(i,s,a){var c=i.tag;if(c===5||c===6)i=i.stateNode,s?a.nodeType===8?a.parentNode.insertBefore(i,s):a.insertBefore(i,s):(a.nodeType===8?(s=a.parentNode,s.insertBefore(i,a)):(s=a,s.appendChild(i)),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=ul));else if(c!==4&&(i=i.child,i!==null))for(ff(i,s,a),i=i.sibling;i!==null;)ff(i,s,a),i=i.sibling}function df(i,s,a){var c=i.tag;if(c===5||c===6)i=i.stateNode,s?a.insertBefore(i,s):a.appendChild(i);else if(c!==4&&(i=i.child,i!==null))for(df(i,s,a),i=i.sibling;i!==null;)df(i,s,a),i=i.sibling}var dn=null,mi=!1;function yr(i,s,a){for(a=a.child;a!==null;)Mg(i,s,a),a=a.sibling}function Mg(i,s,a){if(at&&typeof at.onCommitFiberUnmount=="function")try{at.onCommitFiberUnmount(Ze,a)}catch{}switch(a.tag){case 5:Mn||Xs(a,s);case 6:var c=dn,p=mi;dn=null,yr(i,s,a),dn=c,mi=p,dn!==null&&(mi?(i=dn,a=a.stateNode,i.nodeType===8?i.parentNode.removeChild(a):i.removeChild(a)):dn.removeChild(a.stateNode));break;case 18:dn!==null&&(mi?(i=dn,a=a.stateNode,i.nodeType===8?Tc(i.parentNode,a):i.nodeType===1&&Tc(i,a),Uo(i)):Tc(dn,a.stateNode));break;case 4:c=dn,p=mi,dn=a.stateNode.containerInfo,mi=!0,yr(i,s,a),dn=c,mi=p;break;case 0:case 11:case 14:case 15:if(!Mn&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){p=c=c.next;do{var _=p,T=_.destroy;_=_.tag,T!==void 0&&((_&2)!==0||(_&4)!==0)&&uf(a,s,T),p=p.next}while(p!==c)}yr(i,s,a);break;case 1:if(!Mn&&(Xs(a,s),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(I){$t(a,s,I)}yr(i,s,a);break;case 21:yr(i,s,a);break;case 22:a.mode&1?(Mn=(c=Mn)||a.memoizedState!==null,yr(i,s,a),Mn=c):yr(i,s,a);break;default:yr(i,s,a)}}function Eg(i){var s=i.updateQueue;if(s!==null){i.updateQueue=null;var a=i.stateNode;a===null&&(a=i.stateNode=new kS),s.forEach(function(c){var p=YS.bind(null,i,c);a.has(c)||(a.add(c),c.then(p,p))})}}function gi(i,s){var a=s.deletions;if(a!==null)for(var c=0;c<a.length;c++){var p=a[c];try{var _=i,T=s,I=T;e:for(;I!==null;){switch(I.tag){case 5:dn=I.stateNode,mi=!1;break e;case 3:dn=I.stateNode.containerInfo,mi=!0;break e;case 4:dn=I.stateNode.containerInfo,mi=!0;break e}I=I.return}if(dn===null)throw Error(t(160));Mg(_,T,p),dn=null,mi=!1;var H=p.alternate;H!==null&&(H.return=null),p.return=null}catch(Q){$t(p,s,Q)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)Tg(s,i),s=s.sibling}function Tg(i,s){var a=i.alternate,c=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(gi(s,i),Ri(i),c&4){try{ia(3,i,i.return),Ll(3,i)}catch(Xe){$t(i,i.return,Xe)}try{ia(5,i,i.return)}catch(Xe){$t(i,i.return,Xe)}}break;case 1:gi(s,i),Ri(i),c&512&&a!==null&&Xs(a,a.return);break;case 5:if(gi(s,i),Ri(i),c&512&&a!==null&&Xs(a,a.return),i.flags&32){var p=i.stateNode;try{Ae(p,"")}catch(Xe){$t(i,i.return,Xe)}}if(c&4&&(p=i.stateNode,p!=null)){var _=i.memoizedProps,T=a!==null?a.memoizedProps:_,I=i.type,H=i.updateQueue;if(i.updateQueue=null,H!==null)try{I==="input"&&_.type==="radio"&&_.name!=null&&dt(p,_),be(I,T);var Q=be(I,_);for(T=0;T<H.length;T+=2){var ve=H[T],ye=H[T+1];ve==="style"?Ie(p,ye):ve==="dangerouslySetInnerHTML"?$e(p,ye):ve==="children"?Ae(p,ye):b(p,ve,ye,Q)}switch(I){case"input":We(p,_);break;case"textarea":w(p,_);break;case"select":var ge=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!_.multiple;var Fe=_.value;Fe!=null?Bt(p,!!_.multiple,Fe,!1):ge!==!!_.multiple&&(_.defaultValue!=null?Bt(p,!!_.multiple,_.defaultValue,!0):Bt(p,!!_.multiple,_.multiple?[]:"",!1))}p[jo]=_}catch(Xe){$t(i,i.return,Xe)}}break;case 6:if(gi(s,i),Ri(i),c&4){if(i.stateNode===null)throw Error(t(162));p=i.stateNode,_=i.memoizedProps;try{p.nodeValue=_}catch(Xe){$t(i,i.return,Xe)}}break;case 3:if(gi(s,i),Ri(i),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Uo(s.containerInfo)}catch(Xe){$t(i,i.return,Xe)}break;case 4:gi(s,i),Ri(i);break;case 13:gi(s,i),Ri(i),p=i.child,p.flags&8192&&(_=p.memoizedState!==null,p.stateNode.isHidden=_,!_||p.alternate!==null&&p.alternate.memoizedState!==null||(mf=W())),c&4&&Eg(i);break;case 22:if(ve=a!==null&&a.memoizedState!==null,i.mode&1?(Mn=(Q=Mn)||ve,gi(s,i),Mn=Q):gi(s,i),Ri(i),c&8192){if(Q=i.memoizedState!==null,(i.stateNode.isHidden=Q)&&!ve&&(i.mode&1)!==0)for(Be=i,ve=i.child;ve!==null;){for(ye=Be=ve;Be!==null;){switch(ge=Be,Fe=ge.child,ge.tag){case 0:case 11:case 14:case 15:ia(4,ge,ge.return);break;case 1:Xs(ge,ge.return);var He=ge.stateNode;if(typeof He.componentWillUnmount=="function"){c=ge,a=ge.return;try{s=c,He.props=s.memoizedProps,He.state=s.memoizedState,He.componentWillUnmount()}catch(Xe){$t(c,a,Xe)}}break;case 5:Xs(ge,ge.return);break;case 22:if(ge.memoizedState!==null){Cg(ye);continue}}Fe!==null?(Fe.return=ge,Be=Fe):Cg(ye)}ve=ve.sibling}e:for(ve=null,ye=i;;){if(ye.tag===5){if(ve===null){ve=ye;try{p=ye.stateNode,Q?(_=p.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none"):(I=ye.stateNode,H=ye.memoizedProps.style,T=H!=null&&H.hasOwnProperty("display")?H.display:null,I.style.display=Ee("display",T))}catch(Xe){$t(i,i.return,Xe)}}}else if(ye.tag===6){if(ve===null)try{ye.stateNode.nodeValue=Q?"":ye.memoizedProps}catch(Xe){$t(i,i.return,Xe)}}else if((ye.tag!==22&&ye.tag!==23||ye.memoizedState===null||ye===i)&&ye.child!==null){ye.child.return=ye,ye=ye.child;continue}if(ye===i)break e;for(;ye.sibling===null;){if(ye.return===null||ye.return===i)break e;ve===ye&&(ve=null),ye=ye.return}ve===ye&&(ve=null),ye.sibling.return=ye.return,ye=ye.sibling}}break;case 19:gi(s,i),Ri(i),c&4&&Eg(i);break;case 21:break;default:gi(s,i),Ri(i)}}function Ri(i){var s=i.flags;if(s&2){try{e:{for(var a=i.return;a!==null;){if(xg(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var p=c.stateNode;c.flags&32&&(Ae(p,""),c.flags&=-33);var _=Sg(i);df(i,_,p);break;case 3:case 4:var T=c.stateNode.containerInfo,I=Sg(i);ff(i,I,T);break;default:throw Error(t(161))}}catch(H){$t(i,i.return,H)}i.flags&=-3}s&4096&&(i.flags&=-4097)}function VS(i,s,a){Be=i,wg(i)}function wg(i,s,a){for(var c=(i.mode&1)!==0;Be!==null;){var p=Be,_=p.child;if(p.tag===22&&c){var T=p.memoizedState!==null||Dl;if(!T){var I=p.alternate,H=I!==null&&I.memoizedState!==null||Mn;I=Dl;var Q=Mn;if(Dl=T,(Mn=H)&&!Q)for(Be=p;Be!==null;)T=Be,H=T.child,T.tag===22&&T.memoizedState!==null?Rg(p):H!==null?(H.return=T,Be=H):Rg(p);for(;_!==null;)Be=_,wg(_),_=_.sibling;Be=p,Dl=I,Mn=Q}Ag(i)}else(p.subtreeFlags&8772)!==0&&_!==null?(_.return=p,Be=_):Ag(i)}}function Ag(i){for(;Be!==null;){var s=Be;if((s.flags&8772)!==0){var a=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:Mn||Ll(5,s);break;case 1:var c=s.stateNode;if(s.flags&4&&!Mn)if(a===null)c.componentDidMount();else{var p=s.elementType===s.type?a.memoizedProps:pi(s.type,a.memoizedProps);c.componentDidUpdate(p,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var _=s.updateQueue;_!==null&&Cm(s,_,c);break;case 3:var T=s.updateQueue;if(T!==null){if(a=null,s.child!==null)switch(s.child.tag){case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}Cm(s,T,a)}break;case 5:var I=s.stateNode;if(a===null&&s.flags&4){a=I;var H=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":H.autoFocus&&a.focus();break;case"img":H.src&&(a.src=H.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var Q=s.alternate;if(Q!==null){var ve=Q.memoizedState;if(ve!==null){var ye=ve.dehydrated;ye!==null&&Uo(ye)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Mn||s.flags&512&&cf(s)}catch(ge){$t(s,s.return,ge)}}if(s===i){Be=null;break}if(a=s.sibling,a!==null){a.return=s.return,Be=a;break}Be=s.return}}function Cg(i){for(;Be!==null;){var s=Be;if(s===i){Be=null;break}var a=s.sibling;if(a!==null){a.return=s.return,Be=a;break}Be=s.return}}function Rg(i){for(;Be!==null;){var s=Be;try{switch(s.tag){case 0:case 11:case 15:var a=s.return;try{Ll(4,s)}catch(H){$t(s,a,H)}break;case 1:var c=s.stateNode;if(typeof c.componentDidMount=="function"){var p=s.return;try{c.componentDidMount()}catch(H){$t(s,p,H)}}var _=s.return;try{cf(s)}catch(H){$t(s,_,H)}break;case 5:var T=s.return;try{cf(s)}catch(H){$t(s,T,H)}}}catch(H){$t(s,s.return,H)}if(s===i){Be=null;break}var I=s.sibling;if(I!==null){I.return=s.return,Be=I;break}Be=s.return}}var zS=Math.ceil,Il=C.ReactCurrentDispatcher,hf=C.ReactCurrentOwner,ni=C.ReactCurrentBatchConfig,Et=0,un=null,en=null,hn=0,Xn=0,js=pr(0),sn=0,ra=null,Zr=0,Nl=0,pf=0,sa=null,Un=null,mf=0,qs=1/0,Wi=null,Ul=!1,gf=null,xr=null,Fl=!1,Sr=null,Ol=0,oa=0,vf=null,kl=-1,Bl=0;function bn(){return(Et&6)!==0?W():kl!==-1?kl:kl=W()}function Mr(i){return(i.mode&1)===0?1:(Et&2)!==0&&hn!==0?hn&-hn:TS.transition!==null?(Bl===0&&(Bl=Rn()),Bl):(i=_t,i!==0||(i=window.event,i=i===void 0?16:bp(i.type)),i)}function vi(i,s,a,c){if(50<oa)throw oa=0,vf=null,Error(t(185));Zt(i,a,c),((Et&2)===0||i!==un)&&(i===un&&((Et&2)===0&&(Nl|=a),sn===4&&Er(i,hn)),Fn(i,c),a===1&&Et===0&&(s.mode&1)===0&&(qs=W()+500,hl&&gr()))}function Fn(i,s){var a=i.callbackNode;Hr(i,s);var c=fi(i,i===un?hn:0);if(c===0)a!==null&&j(a),i.callbackNode=null,i.callbackPriority=0;else if(s=c&-c,i.callbackPriority!==s){if(a!=null&&j(a),s===1)i.tag===0?ES(bg.bind(null,i)):mm(bg.bind(null,i)),yS(function(){(Et&6)===0&&gr()}),a=null;else{switch(Mp(c)){case 1:a=De;break;case 4:a=ze;break;case 16:a=Ue;break;case 536870912:a=st;break;default:a=Ue}a=kg(a,Pg.bind(null,i))}i.callbackPriority=s,i.callbackNode=a}}function Pg(i,s){if(kl=-1,Bl=0,(Et&6)!==0)throw Error(t(327));var a=i.callbackNode;if(Ys()&&i.callbackNode!==a)return null;var c=fi(i,i===un?hn:0);if(c===0)return null;if((c&30)!==0||(c&i.expiredLanes)!==0||s)s=Vl(i,c);else{s=c;var p=Et;Et|=2;var _=Lg();(un!==i||hn!==s)&&(Wi=null,qs=W()+500,Jr(i,s));do try{WS();break}catch(I){Dg(i,I)}while(!0);Nc(),Il.current=_,Et=p,en!==null?s=0:(un=null,hn=0,s=sn)}if(s!==0){if(s===2&&(p=Ot(i),p!==0&&(c=p,s=_f(i,p))),s===1)throw a=ra,Jr(i,0),Er(i,c),Fn(i,W()),a;if(s===6)Er(i,c);else{if(p=i.current.alternate,(c&30)===0&&!HS(p)&&(s=Vl(i,c),s===2&&(_=Ot(i),_!==0&&(c=_,s=_f(i,_))),s===1))throw a=ra,Jr(i,0),Er(i,c),Fn(i,W()),a;switch(i.finishedWork=p,i.finishedLanes=c,s){case 0:case 1:throw Error(t(345));case 2:es(i,Un,Wi);break;case 3:if(Er(i,c),(c&130023424)===c&&(s=mf+500-W(),10<s)){if(fi(i,0)!==0)break;if(p=i.suspendedLanes,(p&c)!==c){bn(),i.pingedLanes|=i.suspendedLanes&p;break}i.timeoutHandle=Ec(es.bind(null,i,Un,Wi),s);break}es(i,Un,Wi);break;case 4:if(Er(i,c),(c&4194240)===c)break;for(s=i.eventTimes,p=-1;0<c;){var T=31-Mt(c);_=1<<T,T=s[T],T>p&&(p=T),c&=~_}if(c=p,c=W()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*zS(c/1960))-c,10<c){i.timeoutHandle=Ec(es.bind(null,i,Un,Wi),c);break}es(i,Un,Wi);break;case 5:es(i,Un,Wi);break;default:throw Error(t(329))}}}return Fn(i,W()),i.callbackNode===a?Pg.bind(null,i):null}function _f(i,s){var a=sa;return i.current.memoizedState.isDehydrated&&(Jr(i,s).flags|=256),i=Vl(i,s),i!==2&&(s=Un,Un=a,s!==null&&yf(s)),i}function yf(i){Un===null?Un=i:Un.push.apply(Un,i)}function HS(i){for(var s=i;;){if(s.flags&16384){var a=s.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var p=a[c],_=p.getSnapshot;p=p.value;try{if(!di(_(),p))return!1}catch{return!1}}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Er(i,s){for(s&=~pf,s&=~Nl,i.suspendedLanes|=s,i.pingedLanes&=~s,i=i.expirationTimes;0<s;){var a=31-Mt(s),c=1<<a;i[a]=-1,s&=~c}}function bg(i){if((Et&6)!==0)throw Error(t(327));Ys();var s=fi(i,0);if((s&1)===0)return Fn(i,W()),null;var a=Vl(i,s);if(i.tag!==0&&a===2){var c=Ot(i);c!==0&&(s=c,a=_f(i,c))}if(a===1)throw a=ra,Jr(i,0),Er(i,s),Fn(i,W()),a;if(a===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=s,es(i,Un,Wi),Fn(i,W()),null}function xf(i,s){var a=Et;Et|=1;try{return i(s)}finally{Et=a,Et===0&&(qs=W()+500,hl&&gr())}}function Qr(i){Sr!==null&&Sr.tag===0&&(Et&6)===0&&Ys();var s=Et;Et|=1;var a=ni.transition,c=_t;try{if(ni.transition=null,_t=1,i)return i()}finally{_t=c,ni.transition=a,Et=s,(Et&6)===0&&gr()}}function Sf(){Xn=js.current,Ht(js)}function Jr(i,s){i.finishedWork=null,i.finishedLanes=0;var a=i.timeoutHandle;if(a!==-1&&(i.timeoutHandle=-1,_S(a)),en!==null)for(a=en.return;a!==null;){var c=a;switch(Pc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&fl();break;case 3:Gs(),Ht(Ln),Ht(yn),Hc();break;case 5:Vc(c);break;case 4:Gs();break;case 13:Ht(Xt);break;case 19:Ht(Xt);break;case 10:Uc(c.type._context);break;case 22:case 23:Sf()}a=a.return}if(un=i,en=i=Tr(i.current,null),hn=Xn=s,sn=0,ra=null,pf=Nl=Zr=0,Un=sa=null,Yr!==null){for(s=0;s<Yr.length;s++)if(a=Yr[s],c=a.interleaved,c!==null){a.interleaved=null;var p=c.next,_=a.pending;if(_!==null){var T=_.next;_.next=p,c.next=T}a.pending=c}Yr=null}return i}function Dg(i,s){do{var a=en;try{if(Nc(),El.current=Cl,Tl){for(var c=jt.memoizedState;c!==null;){var p=c.queue;p!==null&&(p.pending=null),c=c.next}Tl=!1}if(Kr=0,ln=rn=jt=null,Qo=!1,Jo=0,hf.current=null,a===null||a.return===null){sn=1,ra=s,en=null;break}e:{var _=i,T=a.return,I=a,H=s;if(s=hn,I.flags|=32768,H!==null&&typeof H=="object"&&typeof H.then=="function"){var Q=H,ve=I,ye=ve.tag;if((ve.mode&1)===0&&(ye===0||ye===11||ye===15)){var ge=ve.alternate;ge?(ve.updateQueue=ge.updateQueue,ve.memoizedState=ge.memoizedState,ve.lanes=ge.lanes):(ve.updateQueue=null,ve.memoizedState=null)}var Fe=ng(T);if(Fe!==null){Fe.flags&=-257,ig(Fe,T,I,_,s),Fe.mode&1&&tg(_,Q,s),s=Fe,H=Q;var He=s.updateQueue;if(He===null){var Xe=new Set;Xe.add(H),s.updateQueue=Xe}else He.add(H);break e}else{if((s&1)===0){tg(_,Q,s),Mf();break e}H=Error(t(426))}}else if(Wt&&I.mode&1){var Qt=ng(T);if(Qt!==null){(Qt.flags&65536)===0&&(Qt.flags|=256),ig(Qt,T,I,_,s),Lc(Ws(H,I));break e}}_=H=Ws(H,I),sn!==4&&(sn=2),sa===null?sa=[_]:sa.push(_),_=T;do{switch(_.tag){case 3:_.flags|=65536,s&=-s,_.lanes|=s;var q=Jm(_,H,s);Am(_,q);break e;case 1:I=H;var X=_.type,Z=_.stateNode;if((_.flags&128)===0&&(typeof X.getDerivedStateFromError=="function"||Z!==null&&typeof Z.componentDidCatch=="function"&&(xr===null||!xr.has(Z)))){_.flags|=65536,s&=-s,_.lanes|=s;var we=eg(_,I,s);Am(_,we);break e}}_=_.return}while(_!==null)}Ng(a)}catch(qe){s=qe,en===a&&a!==null&&(en=a=a.return);continue}break}while(!0)}function Lg(){var i=Il.current;return Il.current=Cl,i===null?Cl:i}function Mf(){(sn===0||sn===3||sn===2)&&(sn=4),un===null||(Zr&268435455)===0&&(Nl&268435455)===0||Er(un,hn)}function Vl(i,s){var a=Et;Et|=2;var c=Lg();(un!==i||hn!==s)&&(Wi=null,Jr(i,s));do try{GS();break}catch(p){Dg(i,p)}while(!0);if(Nc(),Et=a,Il.current=c,en!==null)throw Error(t(261));return un=null,hn=0,sn}function GS(){for(;en!==null;)Ig(en)}function WS(){for(;en!==null&&!ee();)Ig(en)}function Ig(i){var s=Og(i.alternate,i,Xn);i.memoizedProps=i.pendingProps,s===null?Ng(i):en=s,hf.current=null}function Ng(i){var s=i;do{var a=s.alternate;if(i=s.return,(s.flags&32768)===0){if(a=FS(a,s,Xn),a!==null){en=a;return}}else{if(a=OS(a,s),a!==null){a.flags&=32767,en=a;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{sn=6,en=null;return}}if(s=s.sibling,s!==null){en=s;return}en=s=i}while(s!==null);sn===0&&(sn=5)}function es(i,s,a){var c=_t,p=ni.transition;try{ni.transition=null,_t=1,XS(i,s,a,c)}finally{ni.transition=p,_t=c}return null}function XS(i,s,a,c){do Ys();while(Sr!==null);if((Et&6)!==0)throw Error(t(327));a=i.finishedWork;var p=i.finishedLanes;if(a===null)return null;if(i.finishedWork=null,i.finishedLanes=0,a===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var _=a.lanes|a.childLanes;if(_n(i,_),i===un&&(en=un=null,hn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Fl||(Fl=!0,kg(Ue,function(){return Ys(),null})),_=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||_){_=ni.transition,ni.transition=null;var T=_t;_t=1;var I=Et;Et|=4,hf.current=null,BS(i,a),Tg(a,i),fS(Sc),Za=!!xc,Sc=xc=null,i.current=a,VS(a),ne(),Et=I,_t=T,ni.transition=_}else i.current=a;if(Fl&&(Fl=!1,Sr=i,Ol=p),_=i.pendingLanes,_===0&&(xr=null),Ct(a.stateNode),Fn(i,W()),s!==null)for(c=i.onRecoverableError,a=0;a<s.length;a++)p=s[a],c(p.value,{componentStack:p.stack,digest:p.digest});if(Ul)throw Ul=!1,i=gf,gf=null,i;return(Ol&1)!==0&&i.tag!==0&&Ys(),_=i.pendingLanes,(_&1)!==0?i===vf?oa++:(oa=0,vf=i):oa=0,gr(),null}function Ys(){if(Sr!==null){var i=Mp(Ol),s=ni.transition,a=_t;try{if(ni.transition=null,_t=16>i?16:i,Sr===null)var c=!1;else{if(i=Sr,Sr=null,Ol=0,(Et&6)!==0)throw Error(t(331));var p=Et;for(Et|=4,Be=i.current;Be!==null;){var _=Be,T=_.child;if((Be.flags&16)!==0){var I=_.deletions;if(I!==null){for(var H=0;H<I.length;H++){var Q=I[H];for(Be=Q;Be!==null;){var ve=Be;switch(ve.tag){case 0:case 11:case 15:ia(8,ve,_)}var ye=ve.child;if(ye!==null)ye.return=ve,Be=ye;else for(;Be!==null;){ve=Be;var ge=ve.sibling,Fe=ve.return;if(yg(ve),ve===Q){Be=null;break}if(ge!==null){ge.return=Fe,Be=ge;break}Be=Fe}}}var He=_.alternate;if(He!==null){var Xe=He.child;if(Xe!==null){He.child=null;do{var Qt=Xe.sibling;Xe.sibling=null,Xe=Qt}while(Xe!==null)}}Be=_}}if((_.subtreeFlags&2064)!==0&&T!==null)T.return=_,Be=T;else e:for(;Be!==null;){if(_=Be,(_.flags&2048)!==0)switch(_.tag){case 0:case 11:case 15:ia(9,_,_.return)}var q=_.sibling;if(q!==null){q.return=_.return,Be=q;break e}Be=_.return}}var X=i.current;for(Be=X;Be!==null;){T=Be;var Z=T.child;if((T.subtreeFlags&2064)!==0&&Z!==null)Z.return=T,Be=Z;else e:for(T=X;Be!==null;){if(I=Be,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:Ll(9,I)}}catch(qe){$t(I,I.return,qe)}if(I===T){Be=null;break e}var we=I.sibling;if(we!==null){we.return=I.return,Be=we;break e}Be=I.return}}if(Et=p,gr(),at&&typeof at.onPostCommitFiberRoot=="function")try{at.onPostCommitFiberRoot(Ze,i)}catch{}c=!0}return c}finally{_t=a,ni.transition=s}}return!1}function Ug(i,s,a){s=Ws(a,s),s=Jm(i,s,1),i=_r(i,s,1),s=bn(),i!==null&&(Zt(i,1,s),Fn(i,s))}function $t(i,s,a){if(i.tag===3)Ug(i,i,a);else for(;s!==null;){if(s.tag===3){Ug(s,i,a);break}else if(s.tag===1){var c=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(xr===null||!xr.has(c))){i=Ws(a,i),i=eg(s,i,1),s=_r(s,i,1),i=bn(),s!==null&&(Zt(s,1,i),Fn(s,i));break}}s=s.return}}function jS(i,s,a){var c=i.pingCache;c!==null&&c.delete(s),s=bn(),i.pingedLanes|=i.suspendedLanes&a,un===i&&(hn&a)===a&&(sn===4||sn===3&&(hn&130023424)===hn&&500>W()-mf?Jr(i,0):pf|=a),Fn(i,s)}function Fg(i,s){s===0&&((i.mode&1)===0?s=1:(s=vt,vt<<=1,(vt&130023424)===0&&(vt=4194304)));var a=bn();i=zi(i,s),i!==null&&(Zt(i,s,a),Fn(i,a))}function qS(i){var s=i.memoizedState,a=0;s!==null&&(a=s.retryLane),Fg(i,a)}function YS(i,s){var a=0;switch(i.tag){case 13:var c=i.stateNode,p=i.memoizedState;p!==null&&(a=p.retryLane);break;case 19:c=i.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(s),Fg(i,a)}var Og;Og=function(i,s,a){if(i!==null)if(i.memoizedProps!==s.pendingProps||Ln.current)Nn=!0;else{if((i.lanes&a)===0&&(s.flags&128)===0)return Nn=!1,US(i,s,a);Nn=(i.flags&131072)!==0}else Nn=!1,Wt&&(s.flags&1048576)!==0&&gm(s,ml,s.index);switch(s.lanes=0,s.tag){case 2:var c=s.type;bl(i,s),i=s.pendingProps;var p=Fs(s,yn.current);Hs(s,a),p=Xc(null,s,c,i,p,a);var _=jc();return s.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,In(c)?(_=!0,dl(s)):_=!1,s.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,kc(s),p.updater=Rl,s.stateNode=p,p._reactInternals=s,Qc(s,c,i,a),s=nf(null,s,c,!0,_,a)):(s.tag=0,Wt&&_&&Rc(s),Pn(null,s,p,a),s=s.child),s;case 16:c=s.elementType;e:{switch(bl(i,s),i=s.pendingProps,p=c._init,c=p(c._payload),s.type=c,p=s.tag=KS(c),i=pi(c,i),p){case 0:s=tf(null,s,c,i,a);break e;case 1:s=ug(null,s,c,i,a);break e;case 11:s=rg(null,s,c,i,a);break e;case 14:s=sg(null,s,c,pi(c.type,i),a);break e}throw Error(t(306,c,""))}return s;case 0:return c=s.type,p=s.pendingProps,p=s.elementType===c?p:pi(c,p),tf(i,s,c,p,a);case 1:return c=s.type,p=s.pendingProps,p=s.elementType===c?p:pi(c,p),ug(i,s,c,p,a);case 3:e:{if(cg(s),i===null)throw Error(t(387));c=s.pendingProps,_=s.memoizedState,p=_.element,wm(i,s),Sl(s,c,null,a);var T=s.memoizedState;if(c=T.element,_.isDehydrated)if(_={element:c,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},s.updateQueue.baseState=_,s.memoizedState=_,s.flags&256){p=Ws(Error(t(423)),s),s=fg(i,s,c,a,p);break e}else if(c!==p){p=Ws(Error(t(424)),s),s=fg(i,s,c,a,p);break e}else for(Wn=hr(s.stateNode.containerInfo.firstChild),Gn=s,Wt=!0,hi=null,a=Em(s,null,c,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Bs(),c===p){s=Gi(i,s,a);break e}Pn(i,s,c,a)}s=s.child}return s;case 5:return Rm(s),i===null&&Dc(s),c=s.type,p=s.pendingProps,_=i!==null?i.memoizedProps:null,T=p.children,Mc(c,p)?T=null:_!==null&&Mc(c,_)&&(s.flags|=32),lg(i,s),Pn(i,s,T,a),s.child;case 6:return i===null&&Dc(s),null;case 13:return dg(i,s,a);case 4:return Bc(s,s.stateNode.containerInfo),c=s.pendingProps,i===null?s.child=Vs(s,null,c,a):Pn(i,s,c,a),s.child;case 11:return c=s.type,p=s.pendingProps,p=s.elementType===c?p:pi(c,p),rg(i,s,c,p,a);case 7:return Pn(i,s,s.pendingProps,a),s.child;case 8:return Pn(i,s,s.pendingProps.children,a),s.child;case 12:return Pn(i,s,s.pendingProps.children,a),s.child;case 10:e:{if(c=s.type._context,p=s.pendingProps,_=s.memoizedProps,T=p.value,kt(_l,c._currentValue),c._currentValue=T,_!==null)if(di(_.value,T)){if(_.children===p.children&&!Ln.current){s=Gi(i,s,a);break e}}else for(_=s.child,_!==null&&(_.return=s);_!==null;){var I=_.dependencies;if(I!==null){T=_.child;for(var H=I.firstContext;H!==null;){if(H.context===c){if(_.tag===1){H=Hi(-1,a&-a),H.tag=2;var Q=_.updateQueue;if(Q!==null){Q=Q.shared;var ve=Q.pending;ve===null?H.next=H:(H.next=ve.next,ve.next=H),Q.pending=H}}_.lanes|=a,H=_.alternate,H!==null&&(H.lanes|=a),Fc(_.return,a,s),I.lanes|=a;break}H=H.next}}else if(_.tag===10)T=_.type===s.type?null:_.child;else if(_.tag===18){if(T=_.return,T===null)throw Error(t(341));T.lanes|=a,I=T.alternate,I!==null&&(I.lanes|=a),Fc(T,a,s),T=_.sibling}else T=_.child;if(T!==null)T.return=_;else for(T=_;T!==null;){if(T===s){T=null;break}if(_=T.sibling,_!==null){_.return=T.return,T=_;break}T=T.return}_=T}Pn(i,s,p.children,a),s=s.child}return s;case 9:return p=s.type,c=s.pendingProps.children,Hs(s,a),p=ei(p),c=c(p),s.flags|=1,Pn(i,s,c,a),s.child;case 14:return c=s.type,p=pi(c,s.pendingProps),p=pi(c.type,p),sg(i,s,c,p,a);case 15:return og(i,s,s.type,s.pendingProps,a);case 17:return c=s.type,p=s.pendingProps,p=s.elementType===c?p:pi(c,p),bl(i,s),s.tag=1,In(c)?(i=!0,dl(s)):i=!1,Hs(s,a),Zm(s,c,p),Qc(s,c,p,a),nf(null,s,c,!0,i,a);case 19:return pg(i,s,a);case 22:return ag(i,s,a)}throw Error(t(156,s.tag))};function kg(i,s){return A(i,s)}function $S(i,s,a,c){this.tag=i,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ii(i,s,a,c){return new $S(i,s,a,c)}function Ef(i){return i=i.prototype,!(!i||!i.isReactComponent)}function KS(i){if(typeof i=="function")return Ef(i)?1:0;if(i!=null){if(i=i.$$typeof,i===le)return 11;if(i===ce)return 14}return 2}function Tr(i,s){var a=i.alternate;return a===null?(a=ii(i.tag,s,i.key,i.mode),a.elementType=i.elementType,a.type=i.type,a.stateNode=i.stateNode,a.alternate=i,i.alternate=a):(a.pendingProps=s,a.type=i.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=i.flags&14680064,a.childLanes=i.childLanes,a.lanes=i.lanes,a.child=i.child,a.memoizedProps=i.memoizedProps,a.memoizedState=i.memoizedState,a.updateQueue=i.updateQueue,s=i.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=i.sibling,a.index=i.index,a.ref=i.ref,a}function zl(i,s,a,c,p,_){var T=2;if(c=i,typeof i=="function")Ef(i)&&(T=1);else if(typeof i=="string")T=5;else e:switch(i){case B:return ts(a.children,p,_,s);case z:T=8,p|=8;break;case P:return i=ii(12,a,s,p|2),i.elementType=P,i.lanes=_,i;case te:return i=ii(13,a,s,p),i.elementType=te,i.lanes=_,i;case se:return i=ii(19,a,s,p),i.elementType=se,i.lanes=_,i;case re:return Hl(a,p,_,s);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case R:T=10;break e;case F:T=9;break e;case le:T=11;break e;case ce:T=14;break e;case ae:T=16,c=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return s=ii(T,a,s,p),s.elementType=i,s.type=c,s.lanes=_,s}function ts(i,s,a,c){return i=ii(7,i,c,s),i.lanes=a,i}function Hl(i,s,a,c){return i=ii(22,i,c,s),i.elementType=re,i.lanes=a,i.stateNode={isHidden:!1},i}function Tf(i,s,a){return i=ii(6,i,null,s),i.lanes=a,i}function wf(i,s,a){return s=ii(4,i.children!==null?i.children:[],i.key,s),s.lanes=a,s.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},s}function ZS(i,s,a,c,p){this.tag=s,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=vn(0),this.expirationTimes=vn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vn(0),this.identifierPrefix=c,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function Af(i,s,a,c,p,_,T,I,H){return i=new ZS(i,s,a,I,H),s===1?(s=1,_===!0&&(s|=8)):s=0,_=ii(3,null,null,s),i.current=_,_.stateNode=i,_.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},kc(_),i}function QS(i,s,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:k,key:c==null?null:""+c,children:i,containerInfo:s,implementation:a}}function Bg(i){if(!i)return mr;i=i._reactInternals;e:{if(Fi(i)!==i||i.tag!==1)throw Error(t(170));var s=i;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(In(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(i.tag===1){var a=i.type;if(In(a))return hm(i,a,s)}return s}function Vg(i,s,a,c,p,_,T,I,H){return i=Af(a,c,!0,i,p,_,T,I,H),i.context=Bg(null),a=i.current,c=bn(),p=Mr(a),_=Hi(c,p),_.callback=s??null,_r(a,_,p),i.current.lanes=p,Zt(i,p,c),Fn(i,c),i}function Gl(i,s,a,c){var p=s.current,_=bn(),T=Mr(p);return a=Bg(a),s.context===null?s.context=a:s.pendingContext=a,s=Hi(_,T),s.payload={element:i},c=c===void 0?null:c,c!==null&&(s.callback=c),i=_r(p,s,T),i!==null&&(vi(i,p,T,_),xl(i,p,T)),T}function Wl(i){return i=i.current,i.child?(i.child.tag===5,i.child.stateNode):null}function zg(i,s){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var a=i.retryLane;i.retryLane=a!==0&&a<s?a:s}}function Cf(i,s){zg(i,s),(i=i.alternate)&&zg(i,s)}function JS(){return null}var Hg=typeof reportError=="function"?reportError:function(i){console.error(i)};function Rf(i){this._internalRoot=i}Xl.prototype.render=Rf.prototype.render=function(i){var s=this._internalRoot;if(s===null)throw Error(t(409));Gl(i,s,null,null)},Xl.prototype.unmount=Rf.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var s=i.containerInfo;Qr(function(){Gl(null,i,null,null)}),s[Oi]=null}};function Xl(i){this._internalRoot=i}Xl.prototype.unstable_scheduleHydration=function(i){if(i){var s=wp();i={blockedOn:null,target:i,priority:s};for(var a=0;a<cr.length&&s!==0&&s<cr[a].priority;a++);cr.splice(a,0,i),a===0&&Rp(i)}};function Pf(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function jl(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function Gg(){}function eM(i,s,a,c,p){if(p){if(typeof c=="function"){var _=c;c=function(){var Q=Wl(T);_.call(Q)}}var T=Vg(s,c,i,0,null,!1,!1,"",Gg);return i._reactRootContainer=T,i[Oi]=T.current,Wo(i.nodeType===8?i.parentNode:i),Qr(),T}for(;p=i.lastChild;)i.removeChild(p);if(typeof c=="function"){var I=c;c=function(){var Q=Wl(H);I.call(Q)}}var H=Af(i,0,!1,null,null,!1,!1,"",Gg);return i._reactRootContainer=H,i[Oi]=H.current,Wo(i.nodeType===8?i.parentNode:i),Qr(function(){Gl(s,H,a,c)}),H}function ql(i,s,a,c,p){var _=a._reactRootContainer;if(_){var T=_;if(typeof p=="function"){var I=p;p=function(){var H=Wl(T);I.call(H)}}Gl(s,T,i,p)}else T=eM(a,s,i,p,c);return Wl(T)}Ep=function(i){switch(i.tag){case 3:var s=i.stateNode;if(s.current.memoizedState.isDehydrated){var a=nn(s.pendingLanes);a!==0&&(Gr(s,a|1),Fn(s,W()),(Et&6)===0&&(qs=W()+500,gr()))}break;case 13:Qr(function(){var c=zi(i,1);if(c!==null){var p=bn();vi(c,i,1,p)}}),Cf(i,1)}},Ju=function(i){if(i.tag===13){var s=zi(i,134217728);if(s!==null){var a=bn();vi(s,i,134217728,a)}Cf(i,134217728)}},Tp=function(i){if(i.tag===13){var s=Mr(i),a=zi(i,s);if(a!==null){var c=bn();vi(a,i,s,c)}Cf(i,s)}},wp=function(){return _t},Ap=function(i,s){var a=_t;try{return _t=i,s()}finally{_t=a}},Se=function(i,s,a){switch(s){case"input":if(We(i,a),s=a.name,a.type==="radio"&&s!=null){for(a=i;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<a.length;s++){var c=a[s];if(c!==i&&c.form===i.form){var p=cl(c);if(!p)throw Error(t(90));mt(c),We(c,p)}}}break;case"textarea":w(i,a);break;case"select":s=a.value,s!=null&&Bt(i,!!a.multiple,s,!1)}},ut=xf,Pt=Qr;var tM={usingClientEntryPoint:!1,Events:[qo,Ns,cl,pe,Ge,xf]},aa={findFiberByHostInstance:Wr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nM={bundleType:aa.bundleType,version:aa.version,rendererPackageName:aa.rendererPackageName,rendererConfig:aa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=qa(i),i===null?null:i.stateNode},findFiberByHostInstance:aa.findFiberByHostInstance||JS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Yl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yl.isDisabled&&Yl.supportsFiber)try{Ze=Yl.inject(nM),at=Yl}catch{}}return On.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tM,On.createPortal=function(i,s){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Pf(s))throw Error(t(200));return QS(i,s,null,a)},On.createRoot=function(i,s){if(!Pf(i))throw Error(t(299));var a=!1,c="",p=Hg;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(c=s.identifierPrefix),s.onRecoverableError!==void 0&&(p=s.onRecoverableError)),s=Af(i,1,!1,null,null,a,!1,c,p),i[Oi]=s.current,Wo(i.nodeType===8?i.parentNode:i),new Rf(s)},On.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var s=i._reactInternals;if(s===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=qa(s),i=i===null?null:i.stateNode,i},On.flushSync=function(i){return Qr(i)},On.hydrate=function(i,s,a){if(!jl(s))throw Error(t(200));return ql(null,i,s,!0,a)},On.hydrateRoot=function(i,s,a){if(!Pf(i))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,p=!1,_="",T=Hg;if(a!=null&&(a.unstable_strictMode===!0&&(p=!0),a.identifierPrefix!==void 0&&(_=a.identifierPrefix),a.onRecoverableError!==void 0&&(T=a.onRecoverableError)),s=Vg(s,null,i,1,a??null,p,!1,_,T),i[Oi]=s.current,Wo(i),c)for(i=0;i<c.length;i++)a=c[i],p=a._getVersion,p=p(a._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[a,p]:s.mutableSourceEagerHydrationData.push(a,p);return new Xl(s)},On.render=function(i,s,a){if(!jl(s))throw Error(t(200));return ql(null,i,s,!1,a)},On.unmountComponentAtNode=function(i){if(!jl(i))throw Error(t(40));return i._reactRootContainer?(Qr(function(){ql(null,null,i,!1,function(){i._reactRootContainer=null,i[Oi]=null})}),!0):!1},On.unstable_batchedUpdates=xf,On.unstable_renderSubtreeIntoContainer=function(i,s,a,c){if(!jl(a))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return ql(i,s,a,!1,c)},On.version="18.3.1-next-f1338f8080-20240426",On}var $g;function uM(){if($g)return Df.exports;$g=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Df.exports=lM(),Df.exports}var Kg;function cM(){if(Kg)return $l;Kg=1;var n=uM();return $l.createRoot=n.createRoot,$l.hydrateRoot=n.hydrateRoot,$l}var fM=cM(),Nf={exports:{}},la={};var Zg;function dM(){if(Zg)return la;Zg=1;var n=Lh(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(f,d,h){var m,g={},v=null,x=null;h!==void 0&&(v=""+h),d.key!==void 0&&(v=""+d.key),d.ref!==void 0&&(x=d.ref);for(m in d)r.call(d,m)&&!l.hasOwnProperty(m)&&(g[m]=d[m]);if(f&&f.defaultProps)for(m in d=f.defaultProps,d)g[m]===void 0&&(g[m]=d[m]);return{$$typeof:e,type:f,key:v,ref:x,props:g,_owner:o.current}}return la.Fragment=t,la.jsx=u,la.jsxs=u,la}var Qg;function hM(){return Qg||(Qg=1,Nf.exports=dM()),Nf.exports}var Cd=hM();const m_=Je.createContext({});function pM(n){const e=Je.useRef(null);return e.current===null&&(e.current=n()),e.current}const Ih=Je.createContext(null),g_=Je.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"});function mM(n=!0){const e=Je.useContext(Ih);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:r,register:o}=e,l=Je.useId();Je.useEffect(()=>{n&&o(l)},[n]);const u=Je.useCallback(()=>n&&r&&r(l),[l,r,n]);return!t&&r?[!1,u]:[!0]}const Nh=typeof window<"u",gM=Nh?Je.useLayoutEffect:Je.useEffect,$n=n=>n;let v_=$n;function Uh(n){let e;return()=>(e===void 0&&(e=n()),e)}const _o=(n,e,t)=>{const r=e-n;return r===0?1:(t-n)/r},er=n=>n*1e3,tr=n=>n/1e3,vM={useManualTiming:!1};function _M(n){let e=new Set,t=new Set,r=!1,o=!1;const l=new WeakSet;let u={delta:0,timestamp:0,isProcessing:!1};function f(h){l.has(h)&&(d.schedule(h),n()),h(u)}const d={schedule:(h,m=!1,g=!1)=>{const x=g&&r?e:t;return m&&l.add(h),x.has(h)||x.add(h),h},cancel:h=>{t.delete(h),l.delete(h)},process:h=>{if(u=h,r){o=!0;return}r=!0,[e,t]=[t,e],e.forEach(f),e.clear(),r=!1,o&&(o=!1,d.process(h))}};return d}const Kl=["read","resolveKeyframes","update","preRender","render","postRender"],yM=40;function __(n,e){let t=!1,r=!0;const o={delta:0,timestamp:0,isProcessing:!1},l=()=>t=!0,u=Kl.reduce((y,D)=>(y[D]=_M(l),y),{}),{read:f,resolveKeyframes:d,update:h,preRender:m,render:g,postRender:v}=u,x=()=>{const y=performance.now();t=!1,o.delta=r?1e3/60:Math.max(Math.min(y-o.timestamp,yM),1),o.timestamp=y,o.isProcessing=!0,f.process(o),d.process(o),h.process(o),m.process(o),g.process(o),v.process(o),o.isProcessing=!1,t&&e&&(r=!1,n(x))},M=()=>{t=!0,r=!0,o.isProcessing||n(x)};return{schedule:Kl.reduce((y,D)=>{const b=u[D];return y[D]=(C,N=!1,k=!1)=>(t||M(),b.schedule(C,N,k)),y},{}),cancel:y=>{for(let D=0;D<Kl.length;D++)u[Kl[D]].cancel(y)},state:o,steps:u}}const{schedule:Gt,cancel:Fr,state:pn,steps:Uf}=__(typeof requestAnimationFrame<"u"?requestAnimationFrame:$n,!0),y_=Je.createContext({strict:!1}),Jg={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},yo={};for(const n in Jg)yo[n]={isEnabled:e=>Jg[n].some(t=>!!e[t])};function xM(n){for(const e in n)yo[e]={...yo[e],...n[e]}}const SM=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Iu(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||SM.has(n)}let x_=n=>!Iu(n);function MM(n){n&&(x_=e=>e.startsWith("on")?!Iu(e):n(e))}try{MM(require("@emotion/is-prop-valid").default)}catch{}function EM(n,e,t){const r={};for(const o in n)o==="values"&&typeof n.values=="object"||(x_(o)||t===!0&&Iu(o)||!e&&!Iu(o)||n.draggable&&o.startsWith("onDrag"))&&(r[o]=n[o]);return r}function TM(n){if(typeof Proxy>"u")return n;const e=new Map,t=(...r)=>n(...r);return new Proxy(t,{get:(r,o)=>o==="create"?n:(e.has(o)||e.set(o,n(o)),e.get(o))})}const Gu=Je.createContext({});function Ta(n){return typeof n=="string"||Array.isArray(n)}function Wu(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}const Fh=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Oh=["initial",...Fh];function Xu(n){return Wu(n.animate)||Oh.some(e=>Ta(n[e]))}function S_(n){return!!(Xu(n)||n.variants)}function wM(n,e){if(Xu(n)){const{initial:t,animate:r}=n;return{initial:t===!1||Ta(t)?t:void 0,animate:Ta(r)?r:void 0}}return n.inherit!==!1?e:{}}function AM(n){const{initial:e,animate:t}=wM(n,Je.useContext(Gu));return Je.useMemo(()=>({initial:e,animate:t}),[ev(e),ev(t)])}function ev(n){return Array.isArray(n)?n.join(" "):n}const CM=Symbol.for("motionComponentSymbol");function uo(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}function RM(n,e,t){return Je.useCallback(r=>{r&&n.onMount&&n.onMount(r),e&&(r?e.mount(r):e.unmount()),t&&(typeof t=="function"?t(r):uo(t)&&(t.current=r))},[e])}const kh=n=>n.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),PM="framerAppearId",M_="data-"+kh(PM),{schedule:Bh}=__(queueMicrotask,!1),E_=Je.createContext({});function bM(n,e,t,r,o){var l,u;const{visualElement:f}=Je.useContext(Gu),d=Je.useContext(y_),h=Je.useContext(Ih),m=Je.useContext(g_).reducedMotion,g=Je.useRef(null);r=r||d.renderer,!g.current&&r&&(g.current=r(n,{visualState:e,parent:f,props:t,presenceContext:h,blockInitialAnimation:h?h.initial===!1:!1,reducedMotionConfig:m}));const v=g.current,x=Je.useContext(E_);v&&!v.projection&&o&&(v.type==="html"||v.type==="svg")&&DM(g.current,t,o,x);const M=Je.useRef(!1);Je.useInsertionEffect(()=>{v&&M.current&&v.update(t,h)});const E=t[M_],S=Je.useRef(!!E&&!(!((l=window.MotionHandoffIsComplete)===null||l===void 0)&&l.call(window,E))&&((u=window.MotionHasOptimisedAnimation)===null||u===void 0?void 0:u.call(window,E)));return gM(()=>{v&&(M.current=!0,window.MotionIsMounted=!0,v.updateFeatures(),Bh.render(v.render),S.current&&v.animationState&&v.animationState.animateChanges())}),Je.useEffect(()=>{v&&(!S.current&&v.animationState&&v.animationState.animateChanges(),S.current&&(queueMicrotask(()=>{var y;(y=window.MotionHandoffMarkAsComplete)===null||y===void 0||y.call(window,E)}),S.current=!1))}),v}function DM(n,e,t,r){const{layoutId:o,layout:l,drag:u,dragConstraints:f,layoutScroll:d,layoutRoot:h}=e;n.projection=new t(n.latestValues,e["data-framer-portal-id"]?void 0:T_(n.parent)),n.projection.setOptions({layoutId:o,layout:l,alwaysMeasureLayout:!!u||f&&uo(f),visualElement:n,animationType:typeof l=="string"?l:"both",initialPromotionConfig:r,layoutScroll:d,layoutRoot:h})}function T_(n){if(n)return n.options.allowProjection!==!1?n.projection:T_(n.parent)}function LM({preloadedFeatures:n,createVisualElement:e,useRender:t,useVisualState:r,Component:o}){var l,u;n&&xM(n);function f(h,m){let g;const v={...Je.useContext(g_),...h,layoutId:IM(h)},{isStatic:x}=v,M=AM(h),E=r(h,x);if(!x&&Nh){NM();const S=UM(v);g=S.MeasureLayout,M.visualElement=bM(o,E,v,e,S.ProjectionNode)}return Cd.jsxs(Gu.Provider,{value:M,children:[g&&M.visualElement?Cd.jsx(g,{visualElement:M.visualElement,...v}):null,t(o,h,RM(E,M.visualElement,m),E,x,M.visualElement)]})}f.displayName=`motion.${typeof o=="string"?o:`create(${(u=(l=o.displayName)!==null&&l!==void 0?l:o.name)!==null&&u!==void 0?u:""})`}`;const d=Je.forwardRef(f);return d[CM]=o,d}function IM({layoutId:n}){const e=Je.useContext(m_).id;return e&&n!==void 0?e+"-"+n:n}function NM(n,e){Je.useContext(y_).strict}function UM(n){const{drag:e,layout:t}=yo;if(!e&&!t)return{};const r={...e,...t};return{MeasureLayout:e?.isEnabled(n)||t?.isEnabled(n)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}const FM=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Vh(n){return typeof n!="string"||n.includes("-")?!1:!!(FM.indexOf(n)>-1||/[A-Z]/u.test(n))}function tv(n){const e=[{},{}];return n?.values.forEach((t,r)=>{e[0][r]=t.get(),e[1][r]=t.getVelocity()}),e}function zh(n,e,t,r){if(typeof e=="function"){const[o,l]=tv(r);e=e(t!==void 0?t:n.custom,o,l)}if(typeof e=="string"&&(e=n.variants&&n.variants[e]),typeof e=="function"){const[o,l]=tv(r);e=e(t!==void 0?t:n.custom,o,l)}return e}const Rd=n=>Array.isArray(n),OM=n=>!!(n&&typeof n=="object"&&n.mix&&n.toValue),kM=n=>Rd(n)?n[n.length-1]||0:n,An=n=>!!(n&&n.getVelocity);function Tu(n){const e=An(n)?n.get():n;return OM(e)?e.toValue():e}function BM({scrapeMotionValuesFromProps:n,createRenderState:e,onUpdate:t},r,o,l){const u={latestValues:VM(r,o,l,n),renderState:e()};return t&&(u.onMount=f=>t({props:r,current:f,...u}),u.onUpdate=f=>t(f)),u}const w_=n=>(e,t)=>{const r=Je.useContext(Gu),o=Je.useContext(Ih),l=()=>BM(n,e,r,o);return t?l():pM(l)};function VM(n,e,t,r){const o={},l=r(n,{});for(const v in l)o[v]=Tu(l[v]);let{initial:u,animate:f}=n;const d=Xu(n),h=S_(n);e&&h&&!d&&n.inherit!==!1&&(u===void 0&&(u=e.initial),f===void 0&&(f=e.animate));let m=t?t.initial===!1:!1;m=m||u===!1;const g=m?f:u;if(g&&typeof g!="boolean"&&!Wu(g)){const v=Array.isArray(g)?g:[g];for(let x=0;x<v.length;x++){const M=zh(n,v[x]);if(M){const{transitionEnd:E,transition:S,...y}=M;for(const D in y){let b=y[D];if(Array.isArray(b)){const C=m?b.length-1:0;b=b[C]}b!==null&&(o[D]=b)}for(const D in E)o[D]=E[D]}}}return o}const Ao=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Es=new Set(Ao),A_=n=>e=>typeof e=="string"&&e.startsWith(n),C_=A_("--"),zM=A_("var(--"),Hh=n=>zM(n)?HM.test(n.split("/*")[0].trim()):!1,HM=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,R_=(n,e)=>e&&typeof n=="number"?e.transform(n):n,ir=(n,e,t)=>t>e?e:t<n?n:t,Co={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},wa={...Co,transform:n=>ir(0,1,n)},Zl={...Co,default:1},Ia=n=>({test:e=>typeof e=="string"&&e.endsWith(n)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${n}`}),Lr=Ia("deg"),Li=Ia("%"),ot=Ia("px"),GM=Ia("vh"),WM=Ia("vw"),nv={...Li,parse:n=>Li.parse(n)/100,transform:n=>Li.transform(n*100)},XM={borderWidth:ot,borderTopWidth:ot,borderRightWidth:ot,borderBottomWidth:ot,borderLeftWidth:ot,borderRadius:ot,radius:ot,borderTopLeftRadius:ot,borderTopRightRadius:ot,borderBottomRightRadius:ot,borderBottomLeftRadius:ot,width:ot,maxWidth:ot,height:ot,maxHeight:ot,top:ot,right:ot,bottom:ot,left:ot,padding:ot,paddingTop:ot,paddingRight:ot,paddingBottom:ot,paddingLeft:ot,margin:ot,marginTop:ot,marginRight:ot,marginBottom:ot,marginLeft:ot,backgroundPositionX:ot,backgroundPositionY:ot},jM={rotate:Lr,rotateX:Lr,rotateY:Lr,rotateZ:Lr,scale:Zl,scaleX:Zl,scaleY:Zl,scaleZ:Zl,skew:Lr,skewX:Lr,skewY:Lr,distance:ot,translateX:ot,translateY:ot,translateZ:ot,x:ot,y:ot,z:ot,perspective:ot,transformPerspective:ot,opacity:wa,originX:nv,originY:nv,originZ:ot},iv={...Co,transform:Math.round},Gh={...XM,...jM,zIndex:iv,size:ot,fillOpacity:wa,strokeOpacity:wa,numOctaves:iv},qM={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},YM=Ao.length;function $M(n,e,t){let r="",o=!0;for(let l=0;l<YM;l++){const u=Ao[l],f=n[u];if(f===void 0)continue;let d=!0;if(typeof f=="number"?d=f===(u.startsWith("scale")?1:0):d=parseFloat(f)===0,!d||t){const h=R_(f,Gh[u]);if(!d){o=!1;const m=qM[u]||u;r+=`${m}(${h}) `}t&&(e[u]=h)}}return r=r.trim(),t?r=t(e,o?"":r):o&&(r="none"),r}function Wh(n,e,t){const{style:r,vars:o,transformOrigin:l}=n;let u=!1,f=!1;for(const d in e){const h=e[d];if(Es.has(d)){u=!0;continue}else if(C_(d)){o[d]=h;continue}else{const m=R_(h,Gh[d]);d.startsWith("origin")?(f=!0,l[d]=m):r[d]=m}}if(e.transform||(u||t?r.transform=$M(e,n.transform,t):r.transform&&(r.transform="none")),f){const{originX:d="50%",originY:h="50%",originZ:m=0}=l;r.transformOrigin=`${d} ${h} ${m}`}}const KM={offset:"stroke-dashoffset",array:"stroke-dasharray"},ZM={offset:"strokeDashoffset",array:"strokeDasharray"};function QM(n,e,t=1,r=0,o=!0){n.pathLength=1;const l=o?KM:ZM;n[l.offset]=ot.transform(-r);const u=ot.transform(e),f=ot.transform(t);n[l.array]=`${u} ${f}`}function rv(n,e,t){return typeof n=="string"?n:ot.transform(e+t*n)}function JM(n,e,t){const r=rv(e,n.x,n.width),o=rv(t,n.y,n.height);return`${r} ${o}`}function Xh(n,{attrX:e,attrY:t,attrScale:r,originX:o,originY:l,pathLength:u,pathSpacing:f=1,pathOffset:d=0,...h},m,g){if(Wh(n,h,g),m){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:v,style:x,dimensions:M}=n;v.transform&&(M&&(x.transform=v.transform),delete v.transform),M&&(o!==void 0||l!==void 0||x.transform)&&(x.transformOrigin=JM(M,o!==void 0?o:.5,l!==void 0?l:.5)),e!==void 0&&(v.x=e),t!==void 0&&(v.y=t),r!==void 0&&(v.scale=r),u!==void 0&&QM(v,u,f,d,!1)}const jh=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),P_=()=>({...jh(),attrs:{}}),qh=n=>typeof n=="string"&&n.toLowerCase()==="svg";function b_(n,{style:e,vars:t},r,o){Object.assign(n.style,e,o&&o.getProjectionStyles(r));for(const l in t)n.style.setProperty(l,t[l])}const D_=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function L_(n,e,t,r){b_(n,e,void 0,r);for(const o in e.attrs)n.setAttribute(D_.has(o)?o:kh(o),e.attrs[o])}const Nu={};function eE(n){Object.assign(Nu,n)}function I_(n,{layout:e,layoutId:t}){return Es.has(n)||n.startsWith("origin")||(e||t!==void 0)&&(!!Nu[n]||n==="opacity")}function Yh(n,e,t){var r;const{style:o}=n,l={};for(const u in o)(An(o[u])||e.style&&An(e.style[u])||I_(u,n)||((r=t?.getValue(u))===null||r===void 0?void 0:r.liveStyle)!==void 0)&&(l[u]=o[u]);return l}function N_(n,e,t){const r=Yh(n,e,t);for(const o in n)if(An(n[o])||An(e[o])){const l=Ao.indexOf(o)!==-1?"attr"+o.charAt(0).toUpperCase()+o.substring(1):o;r[l]=n[o]}return r}function tE(n,e){try{e.dimensions=typeof n.getBBox=="function"?n.getBBox():n.getBoundingClientRect()}catch{e.dimensions={x:0,y:0,width:0,height:0}}}const sv=["x","y","width","height","cx","cy","r"],nE={useVisualState:w_({scrapeMotionValuesFromProps:N_,createRenderState:P_,onUpdate:({props:n,prevProps:e,current:t,renderState:r,latestValues:o})=>{if(!t)return;let l=!!n.drag;if(!l){for(const f in o)if(Es.has(f)){l=!0;break}}if(!l)return;let u=!e;if(e)for(let f=0;f<sv.length;f++){const d=sv[f];n[d]!==e[d]&&(u=!0)}u&&Gt.read(()=>{tE(t,r),Gt.render(()=>{Xh(r,o,qh(t.tagName),n.transformTemplate),L_(t,r)})})}})},iE={useVisualState:w_({scrapeMotionValuesFromProps:Yh,createRenderState:jh})};function U_(n,e,t){for(const r in e)!An(e[r])&&!I_(r,t)&&(n[r]=e[r])}function rE({transformTemplate:n},e){return Je.useMemo(()=>{const t=jh();return Wh(t,e,n),Object.assign({},t.vars,t.style)},[e])}function sE(n,e){const t=n.style||{},r={};return U_(r,t,n),Object.assign(r,rE(n,e)),r}function oE(n,e){const t={},r=sE(n,e);return n.drag&&n.dragListener!==!1&&(t.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(t.tabIndex=0),t.style=r,t}function aE(n,e,t,r){const o=Je.useMemo(()=>{const l=P_();return Xh(l,e,qh(r),n.transformTemplate),{...l.attrs,style:{...l.style}}},[e]);if(n.style){const l={};U_(l,n.style,n),o.style={...l,...o.style}}return o}function lE(n=!1){return(t,r,o,{latestValues:l},u)=>{const d=(Vh(t)?aE:oE)(r,l,u,t),h=EM(r,typeof t=="string",n),m=t!==Je.Fragment?{...h,...d,ref:o}:{},{children:g}=r,v=Je.useMemo(()=>An(g)?g.get():g,[g]);return Je.createElement(t,{...m,children:v})}}function uE(n,e){return function(r,{forwardMotionProps:o}={forwardMotionProps:!1}){const u={...Vh(r)?nE:iE,preloadedFeatures:n,useRender:lE(o),createVisualElement:e,Component:r};return LM(u)}}function F_(n,e){if(!Array.isArray(e))return!1;const t=e.length;if(t!==n.length)return!1;for(let r=0;r<t;r++)if(e[r]!==n[r])return!1;return!0}function ju(n,e,t){const r=n.getProps();return zh(r,e,t!==void 0?t:r.custom,n)}const cE=Uh(()=>window.ScrollTimeline!==void 0);class fE{constructor(e){this.stop=()=>this.runAll("stop"),this.animations=e.filter(Boolean)}get finished(){return Promise.all(this.animations.map(e=>"finished"in e?e.finished:e))}getAll(e){return this.animations[0][e]}setAll(e,t){for(let r=0;r<this.animations.length;r++)this.animations[r][e]=t}attachTimeline(e,t){const r=this.animations.map(o=>{if(cE()&&o.attachTimeline)return o.attachTimeline(e);if(typeof t=="function")return t(o)});return()=>{r.forEach((o,l)=>{o&&o(),this.animations[l].stop()})}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get startTime(){return this.getAll("startTime")}get duration(){let e=0;for(let t=0;t<this.animations.length;t++)e=Math.max(e,this.animations[t].duration);return e}runAll(e){this.animations.forEach(t=>t[e]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class dE extends fE{then(e,t){return Promise.all(this.animations).then(e).catch(t)}}function $h(n,e){return n?n[e]||n.default||n:void 0}const Pd=2e4;function O_(n){let e=0;const t=50;let r=n.next(e);for(;!r.done&&e<Pd;)e+=t,r=n.next(e);return e>=Pd?1/0:e}function Kh(n){return typeof n=="function"}function ov(n,e){n.timeline=e,n.onfinish=null}const Zh=n=>Array.isArray(n)&&typeof n[0]=="number",hE={linearEasing:void 0};function pE(n,e){const t=Uh(n);return()=>{var r;return(r=hE[e])!==null&&r!==void 0?r:t()}}const Uu=pE(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),k_=(n,e,t=10)=>{let r="";const o=Math.max(Math.round(e/t),2);for(let l=0;l<o;l++)r+=n(_o(0,o-1,l))+", ";return`linear(${r.substring(0,r.length-2)})`};function B_(n){return!!(typeof n=="function"&&Uu()||!n||typeof n=="string"&&(n in bd||Uu())||Zh(n)||Array.isArray(n)&&n.every(B_))}const ga=([n,e,t,r])=>`cubic-bezier(${n}, ${e}, ${t}, ${r})`,bd={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:ga([0,.65,.55,1]),circOut:ga([.55,0,1,.45]),backIn:ga([.31,.01,.66,-.59]),backOut:ga([.33,1.53,.69,.99])};function V_(n,e){if(n)return typeof n=="function"&&Uu()?k_(n,e):Zh(n)?ga(n):Array.isArray(n)?n.map(t=>V_(t,e)||bd.easeOut):bd[n]}const Si={x:!1,y:!1};function z_(){return Si.x||Si.y}function mE(n,e,t){var r;if(n instanceof Element)return[n];if(typeof n=="string"){let o=document;const l=(r=void 0)!==null&&r!==void 0?r:o.querySelectorAll(n);return l?Array.from(l):[]}return Array.from(n)}function H_(n,e){const t=mE(n),r=new AbortController,o={passive:!0,...e,signal:r.signal};return[t,o,()=>r.abort()]}function av(n){return e=>{e.pointerType==="touch"||z_()||n(e)}}function gE(n,e,t={}){const[r,o,l]=H_(n,t),u=av(f=>{const{target:d}=f,h=e(f);if(typeof h!="function"||!d)return;const m=av(g=>{h(g),d.removeEventListener("pointerleave",m)});d.addEventListener("pointerleave",m,o)});return r.forEach(f=>{f.addEventListener("pointerenter",u,o)}),l}const G_=(n,e)=>e?n===e?!0:G_(n,e.parentElement):!1,Qh=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,vE=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function _E(n){return vE.has(n.tagName)||n.tabIndex!==-1}const va=new WeakSet;function lv(n){return e=>{e.key==="Enter"&&n(e)}}function Ff(n,e){n.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const yE=(n,e)=>{const t=n.currentTarget;if(!t)return;const r=lv(()=>{if(va.has(t))return;Ff(t,"down");const o=lv(()=>{Ff(t,"up")}),l=()=>Ff(t,"cancel");t.addEventListener("keyup",o,e),t.addEventListener("blur",l,e)});t.addEventListener("keydown",r,e),t.addEventListener("blur",()=>t.removeEventListener("keydown",r),e)};function uv(n){return Qh(n)&&!z_()}function xE(n,e,t={}){const[r,o,l]=H_(n,t),u=f=>{const d=f.currentTarget;if(!uv(f)||va.has(d))return;va.add(d);const h=e(f),m=(x,M)=>{window.removeEventListener("pointerup",g),window.removeEventListener("pointercancel",v),!(!uv(x)||!va.has(d))&&(va.delete(d),typeof h=="function"&&h(x,{success:M}))},g=x=>{m(x,t.useGlobalTarget||G_(d,x.target))},v=x=>{m(x,!1)};window.addEventListener("pointerup",g,o),window.addEventListener("pointercancel",v,o)};return r.forEach(f=>{!_E(f)&&f.getAttribute("tabindex")===null&&(f.tabIndex=0),(t.useGlobalTarget?window:f).addEventListener("pointerdown",u,o),f.addEventListener("focus",h=>yE(h,o),o)}),l}function SE(n){return n==="x"||n==="y"?Si[n]?null:(Si[n]=!0,()=>{Si[n]=!1}):Si.x||Si.y?null:(Si.x=Si.y=!0,()=>{Si.x=Si.y=!1})}const W_=new Set(["width","height","top","left","right","bottom",...Ao]);let wu;function ME(){wu=void 0}const Ii={now:()=>(wu===void 0&&Ii.set(pn.isProcessing||vM.useManualTiming?pn.timestamp:performance.now()),wu),set:n=>{wu=n,queueMicrotask(ME)}};function Jh(n,e){n.indexOf(e)===-1&&n.push(e)}function ep(n,e){const t=n.indexOf(e);t>-1&&n.splice(t,1)}class tp{constructor(){this.subscriptions=[]}add(e){return Jh(this.subscriptions,e),()=>ep(this.subscriptions,e)}notify(e,t,r){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](e,t,r);else for(let l=0;l<o;l++){const u=this.subscriptions[l];u&&u(e,t,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function X_(n,e){return e?n*(1e3/e):0}const cv=30,EE=n=>!isNaN(parseFloat(n));class TE{constructor(e,t={}){this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(r,o=!0)=>{const l=Ii.now();this.updatedAt!==l&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),o&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=Ii.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=EE(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new tp);const r=this.events[e].add(t);return e==="change"?()=>{r(),Gt.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e,t=!0){!t||!this.passiveEffect?this.updateAndNotify(e,t):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,t,r){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-r}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=Ii.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>cv)return 0;const t=Math.min(this.updatedAt-this.prevUpdatedAt,cv);return X_(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Aa(n,e){return new TE(n,e)}function wE(n,e,t){n.hasValue(e)?n.getValue(e).set(t):n.addValue(e,Aa(t))}function AE(n,e){const t=ju(n,e);let{transitionEnd:r={},transition:o={},...l}=t||{};l={...l,...r};for(const u in l){const f=kM(l[u]);wE(n,u,f)}}function CE(n){return!!(An(n)&&n.add)}function Dd(n,e){const t=n.getValue("willChange");if(CE(t))return t.add(e)}function j_(n){return n.props[M_]}const q_=(n,e,t)=>(((1-3*t+3*e)*n+(3*t-6*e))*n+3*e)*n,RE=1e-7,PE=12;function bE(n,e,t,r,o){let l,u,f=0;do u=e+(t-e)/2,l=q_(u,r,o)-n,l>0?t=u:e=u;while(Math.abs(l)>RE&&++f<PE);return u}function Na(n,e,t,r){if(n===e&&t===r)return $n;const o=l=>bE(l,0,1,n,t);return l=>l===0||l===1?l:q_(o(l),e,r)}const Y_=n=>e=>e<=.5?n(2*e)/2:(2-n(2*(1-e)))/2,$_=n=>e=>1-n(1-e),K_=Na(.33,1.53,.69,.99),np=$_(K_),Z_=Y_(np),Q_=n=>(n*=2)<1?.5*np(n):.5*(2-Math.pow(2,-10*(n-1))),ip=n=>1-Math.sin(Math.acos(n)),J_=$_(ip),ey=Y_(ip),ty=n=>/^0[^.\s]+$/u.test(n);function DE(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||ty(n):!0}const xa=n=>Math.round(n*1e5)/1e5,rp=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function LE(n){return n==null}const IE=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,sp=(n,e)=>t=>!!(typeof t=="string"&&IE.test(t)&&t.startsWith(n)||e&&!LE(t)&&Object.prototype.hasOwnProperty.call(t,e)),ny=(n,e,t)=>r=>{if(typeof r!="string")return r;const[o,l,u,f]=r.match(rp);return{[n]:parseFloat(o),[e]:parseFloat(l),[t]:parseFloat(u),alpha:f!==void 0?parseFloat(f):1}},NE=n=>ir(0,255,n),Of={...Co,transform:n=>Math.round(NE(n))},ms={test:sp("rgb","red"),parse:ny("red","green","blue"),transform:({red:n,green:e,blue:t,alpha:r=1})=>"rgba("+Of.transform(n)+", "+Of.transform(e)+", "+Of.transform(t)+", "+xa(wa.transform(r))+")"};function UE(n){let e="",t="",r="",o="";return n.length>5?(e=n.substring(1,3),t=n.substring(3,5),r=n.substring(5,7),o=n.substring(7,9)):(e=n.substring(1,2),t=n.substring(2,3),r=n.substring(3,4),o=n.substring(4,5),e+=e,t+=t,r+=r,o+=o),{red:parseInt(e,16),green:parseInt(t,16),blue:parseInt(r,16),alpha:o?parseInt(o,16)/255:1}}const Ld={test:sp("#"),parse:UE,transform:ms.transform},co={test:sp("hsl","hue"),parse:ny("hue","saturation","lightness"),transform:({hue:n,saturation:e,lightness:t,alpha:r=1})=>"hsla("+Math.round(n)+", "+Li.transform(xa(e))+", "+Li.transform(xa(t))+", "+xa(wa.transform(r))+")"},wn={test:n=>ms.test(n)||Ld.test(n)||co.test(n),parse:n=>ms.test(n)?ms.parse(n):co.test(n)?co.parse(n):Ld.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?ms.transform(n):co.transform(n)},FE=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function OE(n){var e,t;return isNaN(n)&&typeof n=="string"&&(((e=n.match(rp))===null||e===void 0?void 0:e.length)||0)+(((t=n.match(FE))===null||t===void 0?void 0:t.length)||0)>0}const iy="number",ry="color",kE="var",BE="var(",fv="${}",VE=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Ca(n){const e=n.toString(),t=[],r={color:[],number:[],var:[]},o=[];let l=0;const f=e.replace(VE,d=>(wn.test(d)?(r.color.push(l),o.push(ry),t.push(wn.parse(d))):d.startsWith(BE)?(r.var.push(l),o.push(kE),t.push(d)):(r.number.push(l),o.push(iy),t.push(parseFloat(d))),++l,fv)).split(fv);return{values:t,split:f,indexes:r,types:o}}function sy(n){return Ca(n).values}function oy(n){const{split:e,types:t}=Ca(n),r=e.length;return o=>{let l="";for(let u=0;u<r;u++)if(l+=e[u],o[u]!==void 0){const f=t[u];f===iy?l+=xa(o[u]):f===ry?l+=wn.transform(o[u]):l+=o[u]}return l}}const zE=n=>typeof n=="number"?0:n;function HE(n){const e=sy(n);return oy(n)(e.map(zE))}const Or={test:OE,parse:sy,createTransformer:oy,getAnimatableNone:HE},GE=new Set(["brightness","contrast","saturate","opacity"]);function WE(n){const[e,t]=n.slice(0,-1).split("(");if(e==="drop-shadow")return n;const[r]=t.match(rp)||[];if(!r)return n;const o=t.replace(r,"");let l=GE.has(e)?1:0;return r!==t&&(l*=100),e+"("+l+o+")"}const XE=/\b([a-z-]*)\(.*?\)/gu,Id={...Or,getAnimatableNone:n=>{const e=n.match(XE);return e?e.map(WE).join(" "):n}},jE={...Gh,color:wn,backgroundColor:wn,outlineColor:wn,fill:wn,stroke:wn,borderColor:wn,borderTopColor:wn,borderRightColor:wn,borderBottomColor:wn,borderLeftColor:wn,filter:Id,WebkitFilter:Id},op=n=>jE[n];function ay(n,e){let t=op(n);return t!==Id&&(t=Or),t.getAnimatableNone?t.getAnimatableNone(e):void 0}const qE=new Set(["auto","none","0"]);function YE(n,e,t){let r=0,o;for(;r<n.length&&!o;){const l=n[r];typeof l=="string"&&!qE.has(l)&&Ca(l).values.length&&(o=n[r]),r++}if(o&&t)for(const l of e)n[l]=ay(t,o)}const dv=n=>n===Co||n===ot,hv=(n,e)=>parseFloat(n.split(", ")[e]),pv=(n,e)=>(t,{transform:r})=>{if(r==="none"||!r)return 0;const o=r.match(/^matrix3d\((.+)\)$/u);if(o)return hv(o[1],e);{const l=r.match(/^matrix\((.+)\)$/u);return l?hv(l[1],n):0}},$E=new Set(["x","y","z"]),KE=Ao.filter(n=>!$E.has(n));function ZE(n){const e=[];return KE.forEach(t=>{const r=n.getValue(t);r!==void 0&&(e.push([t,r.get()]),r.set(t.startsWith("scale")?1:0))}),e}const xo={width:({x:n},{paddingLeft:e="0",paddingRight:t="0"})=>n.max-n.min-parseFloat(e)-parseFloat(t),height:({y:n},{paddingTop:e="0",paddingBottom:t="0"})=>n.max-n.min-parseFloat(e)-parseFloat(t),top:(n,{top:e})=>parseFloat(e),left:(n,{left:e})=>parseFloat(e),bottom:({y:n},{top:e})=>parseFloat(e)+(n.max-n.min),right:({x:n},{left:e})=>parseFloat(e)+(n.max-n.min),x:pv(4,13),y:pv(5,14)};xo.translateX=xo.x;xo.translateY=xo.y;const _s=new Set;let Nd=!1,Ud=!1;function ly(){if(Ud){const n=Array.from(_s).filter(r=>r.needsMeasurement),e=new Set(n.map(r=>r.element)),t=new Map;e.forEach(r=>{const o=ZE(r);o.length&&(t.set(r,o),r.render())}),n.forEach(r=>r.measureInitialState()),e.forEach(r=>{r.render();const o=t.get(r);o&&o.forEach(([l,u])=>{var f;(f=r.getValue(l))===null||f===void 0||f.set(u)})}),n.forEach(r=>r.measureEndState()),n.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}Ud=!1,Nd=!1,_s.forEach(n=>n.complete()),_s.clear()}function uy(){_s.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(Ud=!0)})}function QE(){uy(),ly()}class ap{constructor(e,t,r,o,l,u=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=r,this.motionValue=o,this.element=l,this.isAsync=u}scheduleResolve(){this.isScheduled=!0,this.isAsync?(_s.add(this),Nd||(Nd=!0,Gt.read(uy),Gt.resolveKeyframes(ly))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:t,element:r,motionValue:o}=this;for(let l=0;l<e.length;l++)if(e[l]===null)if(l===0){const u=o?.get(),f=e[e.length-1];if(u!==void 0)e[0]=u;else if(r&&t){const d=r.readValue(t,f);d!=null&&(e[0]=d)}e[0]===void 0&&(e[0]=f),o&&u===void 0&&o.set(e[0])}else e[l]=e[l-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),_s.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,_s.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const cy=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n),JE=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function eT(n){const e=JE.exec(n);if(!e)return[,];const[,t,r,o]=e;return[`--${t??r}`,o]}function fy(n,e,t=1){const[r,o]=eT(n);if(!r)return;const l=window.getComputedStyle(e).getPropertyValue(r);if(l){const u=l.trim();return cy(u)?parseFloat(u):u}return Hh(o)?fy(o,e,t+1):o}const dy=n=>e=>e.test(n),tT={test:n=>n==="auto",parse:n=>n},hy=[Co,ot,Li,Lr,WM,GM,tT],mv=n=>hy.find(dy(n));class py extends ap{constructor(e,t,r,o,l){super(e,t,r,o,l,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:t,name:r}=this;if(!t||!t.current)return;super.readKeyframes();for(let d=0;d<e.length;d++){let h=e[d];if(typeof h=="string"&&(h=h.trim(),Hh(h))){const m=fy(h,t.current);m!==void 0&&(e[d]=m),d===e.length-1&&(this.finalKeyframe=h)}}if(this.resolveNoneKeyframes(),!W_.has(r)||e.length!==2)return;const[o,l]=e,u=mv(o),f=mv(l);if(u!==f)if(dv(u)&&dv(f))for(let d=0;d<e.length;d++){const h=e[d];typeof h=="string"&&(e[d]=parseFloat(h))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:t}=this,r=[];for(let o=0;o<e.length;o++)DE(e[o])&&r.push(o);r.length&&YE(e,r,t)}measureInitialState(){const{element:e,unresolvedKeyframes:t,name:r}=this;if(!e||!e.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=xo[r](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;const o=t[t.length-1];o!==void 0&&e.getValue(r,o).jump(o,!1)}measureEndState(){var e;const{element:t,name:r,unresolvedKeyframes:o}=this;if(!t||!t.current)return;const l=t.getValue(r);l&&l.jump(this.measuredOrigin,!1);const u=o.length-1,f=o[u];o[u]=xo[r](t.measureViewportBox(),window.getComputedStyle(t.current)),f!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=f),!((e=this.removedTransforms)===null||e===void 0)&&e.length&&this.removedTransforms.forEach(([d,h])=>{t.getValue(d).set(h)}),this.resolveNoneKeyframes()}}const gv=(n,e)=>e==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(Or.test(n)||n==="0")&&!n.startsWith("url("));function nT(n){const e=n[0];if(n.length===1)return!0;for(let t=0;t<n.length;t++)if(n[t]!==e)return!0}function iT(n,e,t,r){const o=n[0];if(o===null)return!1;if(e==="display"||e==="visibility")return!0;const l=n[n.length-1],u=gv(o,e),f=gv(l,e);return!u||!f?!1:nT(n)||(t==="spring"||Kh(t))&&r}const rT=n=>n!==null;function qu(n,{repeat:e,repeatType:t="loop"},r){const o=n.filter(rT),l=e&&t!=="loop"&&e%2===1?0:o.length-1;return!l||r===void 0?o[l]:r}const sT=40;class my{constructor({autoplay:e=!0,delay:t=0,type:r="keyframes",repeat:o=0,repeatDelay:l=0,repeatType:u="loop",...f}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=Ii.now(),this.options={autoplay:e,delay:t,type:r,repeat:o,repeatDelay:l,repeatType:u,...f},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>sT?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&QE(),this._resolved}onKeyframesResolved(e,t){this.resolvedAt=Ii.now(),this.hasAttemptedResolve=!0;const{name:r,type:o,velocity:l,delay:u,onComplete:f,onUpdate:d,isGenerator:h}=this.options;if(!h&&!iT(e,r,o,l))if(u)this.options.duration=0;else{d&&d(qu(e,this.options,t)),f&&f(),this.resolveFinishedPromise();return}const m=this.initPlayback(e,t);m!==!1&&(this._resolved={keyframes:e,finalKeyframe:t,...m},this.onPostResolved())}onPostResolved(){}then(e,t){return this.currentFinishedPromise.then(e,t)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(e=>{this.resolveFinishedPromise=e})}}const qt=(n,e,t)=>n+(e-n)*t;function kf(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*(2/3-t)*6:n}function oT({hue:n,saturation:e,lightness:t,alpha:r}){n/=360,e/=100,t/=100;let o=0,l=0,u=0;if(!e)o=l=u=t;else{const f=t<.5?t*(1+e):t+e-t*e,d=2*t-f;o=kf(d,f,n+1/3),l=kf(d,f,n),u=kf(d,f,n-1/3)}return{red:Math.round(o*255),green:Math.round(l*255),blue:Math.round(u*255),alpha:r}}function Fu(n,e){return t=>t>0?e:n}const Bf=(n,e,t)=>{const r=n*n,o=t*(e*e-r)+r;return o<0?0:Math.sqrt(o)},aT=[Ld,ms,co],lT=n=>aT.find(e=>e.test(n));function vv(n){const e=lT(n);if(!e)return!1;let t=e.parse(n);return e===co&&(t=oT(t)),t}const _v=(n,e)=>{const t=vv(n),r=vv(e);if(!t||!r)return Fu(n,e);const o={...t};return l=>(o.red=Bf(t.red,r.red,l),o.green=Bf(t.green,r.green,l),o.blue=Bf(t.blue,r.blue,l),o.alpha=qt(t.alpha,r.alpha,l),ms.transform(o))},uT=(n,e)=>t=>e(n(t)),Ua=(...n)=>n.reduce(uT),Fd=new Set(["none","hidden"]);function cT(n,e){return Fd.has(n)?t=>t<=0?n:e:t=>t>=1?e:n}function fT(n,e){return t=>qt(n,e,t)}function lp(n){return typeof n=="number"?fT:typeof n=="string"?Hh(n)?Fu:wn.test(n)?_v:pT:Array.isArray(n)?gy:typeof n=="object"?wn.test(n)?_v:dT:Fu}function gy(n,e){const t=[...n],r=t.length,o=n.map((l,u)=>lp(l)(l,e[u]));return l=>{for(let u=0;u<r;u++)t[u]=o[u](l);return t}}function dT(n,e){const t={...n,...e},r={};for(const o in t)n[o]!==void 0&&e[o]!==void 0&&(r[o]=lp(n[o])(n[o],e[o]));return o=>{for(const l in r)t[l]=r[l](o);return t}}function hT(n,e){var t;const r=[],o={color:0,var:0,number:0};for(let l=0;l<e.values.length;l++){const u=e.types[l],f=n.indexes[u][o[u]],d=(t=n.values[f])!==null&&t!==void 0?t:0;r[l]=d,o[u]++}return r}const pT=(n,e)=>{const t=Or.createTransformer(e),r=Ca(n),o=Ca(e);return r.indexes.var.length===o.indexes.var.length&&r.indexes.color.length===o.indexes.color.length&&r.indexes.number.length>=o.indexes.number.length?Fd.has(n)&&!o.values.length||Fd.has(e)&&!r.values.length?cT(n,e):Ua(gy(hT(r,o),o.values),t):Fu(n,e)};function vy(n,e,t){return typeof n=="number"&&typeof e=="number"&&typeof t=="number"?qt(n,e,t):lp(n)(n,e)}const mT=5;function _y(n,e,t){const r=Math.max(e-mT,0);return X_(t-n(r),e-r)}const Kt={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Vf=.001;function gT({duration:n=Kt.duration,bounce:e=Kt.bounce,velocity:t=Kt.velocity,mass:r=Kt.mass}){let o,l,u=1-e;u=ir(Kt.minDamping,Kt.maxDamping,u),n=ir(Kt.minDuration,Kt.maxDuration,tr(n)),u<1?(o=h=>{const m=h*u,g=m*n,v=m-t,x=Od(h,u),M=Math.exp(-g);return Vf-v/x*M},l=h=>{const g=h*u*n,v=g*t+t,x=Math.pow(u,2)*Math.pow(h,2)*n,M=Math.exp(-g),E=Od(Math.pow(h,2),u);return(-o(h)+Vf>0?-1:1)*((v-x)*M)/E}):(o=h=>{const m=Math.exp(-h*n),g=(h-t)*n+1;return-Vf+m*g},l=h=>{const m=Math.exp(-h*n),g=(t-h)*(n*n);return m*g});const f=5/n,d=_T(o,l,f);if(n=er(n),isNaN(d))return{stiffness:Kt.stiffness,damping:Kt.damping,duration:n};{const h=Math.pow(d,2)*r;return{stiffness:h,damping:u*2*Math.sqrt(r*h),duration:n}}}const vT=12;function _T(n,e,t){let r=t;for(let o=1;o<vT;o++)r=r-n(r)/e(r);return r}function Od(n,e){return n*Math.sqrt(1-e*e)}const yT=["duration","bounce"],xT=["stiffness","damping","mass"];function yv(n,e){return e.some(t=>n[t]!==void 0)}function ST(n){let e={velocity:Kt.velocity,stiffness:Kt.stiffness,damping:Kt.damping,mass:Kt.mass,isResolvedFromDuration:!1,...n};if(!yv(n,xT)&&yv(n,yT))if(n.visualDuration){const t=n.visualDuration,r=2*Math.PI/(t*1.2),o=r*r,l=2*ir(.05,1,1-(n.bounce||0))*Math.sqrt(o);e={...e,mass:Kt.mass,stiffness:o,damping:l}}else{const t=gT(n);e={...e,...t,mass:Kt.mass},e.isResolvedFromDuration=!0}return e}function yy(n=Kt.visualDuration,e=Kt.bounce){const t=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:e}:n;let{restSpeed:r,restDelta:o}=t;const l=t.keyframes[0],u=t.keyframes[t.keyframes.length-1],f={done:!1,value:l},{stiffness:d,damping:h,mass:m,duration:g,velocity:v,isResolvedFromDuration:x}=ST({...t,velocity:-tr(t.velocity||0)}),M=v||0,E=h/(2*Math.sqrt(d*m)),S=u-l,y=tr(Math.sqrt(d/m)),D=Math.abs(S)<5;r||(r=D?Kt.restSpeed.granular:Kt.restSpeed.default),o||(o=D?Kt.restDelta.granular:Kt.restDelta.default);let b;if(E<1){const N=Od(y,E);b=k=>{const B=Math.exp(-E*y*k);return u-B*((M+E*y*S)/N*Math.sin(N*k)+S*Math.cos(N*k))}}else if(E===1)b=N=>u-Math.exp(-y*N)*(S+(M+y*S)*N);else{const N=y*Math.sqrt(E*E-1);b=k=>{const B=Math.exp(-E*y*k),z=Math.min(N*k,300);return u-B*((M+E*y*S)*Math.sinh(z)+N*S*Math.cosh(z))/N}}const C={calculatedDuration:x&&g||null,next:N=>{const k=b(N);if(x)f.done=N>=g;else{let B=0;E<1&&(B=N===0?er(M):_y(b,N,k));const z=Math.abs(B)<=r,P=Math.abs(u-k)<=o;f.done=z&&P}return f.value=f.done?u:k,f},toString:()=>{const N=Math.min(O_(C),Pd),k=k_(B=>C.next(N*B).value,N,30);return N+"ms "+k}};return C}function xv({keyframes:n,velocity:e=0,power:t=.8,timeConstant:r=325,bounceDamping:o=10,bounceStiffness:l=500,modifyTarget:u,min:f,max:d,restDelta:h=.5,restSpeed:m}){const g=n[0],v={done:!1,value:g},x=z=>f!==void 0&&z<f||d!==void 0&&z>d,M=z=>f===void 0?d:d===void 0||Math.abs(f-z)<Math.abs(d-z)?f:d;let E=t*e;const S=g+E,y=u===void 0?S:u(S);y!==S&&(E=y-g);const D=z=>-E*Math.exp(-z/r),b=z=>y+D(z),C=z=>{const P=D(z),R=b(z);v.done=Math.abs(P)<=h,v.value=v.done?y:R};let N,k;const B=z=>{x(v.value)&&(N=z,k=yy({keyframes:[v.value,M(v.value)],velocity:_y(b,z,v.value),damping:o,stiffness:l,restDelta:h,restSpeed:m}))};return B(0),{calculatedDuration:null,next:z=>{let P=!1;return!k&&N===void 0&&(P=!0,C(z),B(z)),N!==void 0&&z>=N?k.next(z-N):(!P&&C(z),v)}}}const MT=Na(.42,0,1,1),ET=Na(0,0,.58,1),xy=Na(.42,0,.58,1),TT=n=>Array.isArray(n)&&typeof n[0]!="number",wT={linear:$n,easeIn:MT,easeInOut:xy,easeOut:ET,circIn:ip,circInOut:ey,circOut:J_,backIn:np,backInOut:Z_,backOut:K_,anticipate:Q_},Sv=n=>{if(Zh(n)){v_(n.length===4);const[e,t,r,o]=n;return Na(e,t,r,o)}else if(typeof n=="string")return wT[n];return n};function AT(n,e,t){const r=[],o=t||vy,l=n.length-1;for(let u=0;u<l;u++){let f=o(n[u],n[u+1]);if(e){const d=Array.isArray(e)?e[u]||$n:e;f=Ua(d,f)}r.push(f)}return r}function CT(n,e,{clamp:t=!0,ease:r,mixer:o}={}){const l=n.length;if(v_(l===e.length),l===1)return()=>e[0];if(l===2&&e[0]===e[1])return()=>e[1];const u=n[0]===n[1];n[0]>n[l-1]&&(n=[...n].reverse(),e=[...e].reverse());const f=AT(e,r,o),d=f.length,h=m=>{if(u&&m<n[0])return e[0];let g=0;if(d>1)for(;g<n.length-2&&!(m<n[g+1]);g++);const v=_o(n[g],n[g+1],m);return f[g](v)};return t?m=>h(ir(n[0],n[l-1],m)):h}function RT(n,e){const t=n[n.length-1];for(let r=1;r<=e;r++){const o=_o(0,e,r);n.push(qt(t,1,o))}}function PT(n){const e=[0];return RT(e,n.length-1),e}function bT(n,e){return n.map(t=>t*e)}function DT(n,e){return n.map(()=>e||xy).splice(0,n.length-1)}function Ou({duration:n=300,keyframes:e,times:t,ease:r="easeInOut"}){const o=TT(r)?r.map(Sv):Sv(r),l={done:!1,value:e[0]},u=bT(t&&t.length===e.length?t:PT(e),n),f=CT(u,e,{ease:Array.isArray(o)?o:DT(e,o)});return{calculatedDuration:n,next:d=>(l.value=f(d),l.done=d>=n,l)}}const LT=n=>{const e=({timestamp:t})=>n(t);return{start:()=>Gt.update(e,!0),stop:()=>Fr(e),now:()=>pn.isProcessing?pn.timestamp:Ii.now()}},IT={decay:xv,inertia:xv,tween:Ou,keyframes:Ou,spring:yy},NT=n=>n/100;class up extends my{constructor(e){super(e),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:d}=this.options;d&&d()};const{name:t,motionValue:r,element:o,keyframes:l}=this.options,u=o?.KeyframeResolver||ap,f=(d,h)=>this.onKeyframesResolved(d,h);this.resolver=new u(l,f,t,r,o),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(e){const{type:t="keyframes",repeat:r=0,repeatDelay:o=0,repeatType:l,velocity:u=0}=this.options,f=Kh(t)?t:IT[t]||Ou;let d,h;f!==Ou&&typeof e[0]!="number"&&(d=Ua(NT,vy(e[0],e[1])),e=[0,100]);const m=f({...this.options,keyframes:e});l==="mirror"&&(h=f({...this.options,keyframes:[...e].reverse(),velocity:-u})),m.calculatedDuration===null&&(m.calculatedDuration=O_(m));const{calculatedDuration:g}=m,v=g+o,x=v*(r+1)-o;return{generator:m,mirroredGenerator:h,mapPercentToKeyframes:d,calculatedDuration:g,resolvedDuration:v,totalDuration:x}}onPostResolved(){const{autoplay:e=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!e?this.pause():this.state=this.pendingPlayState}tick(e,t=!1){const{resolved:r}=this;if(!r){const{keyframes:z}=this.options;return{done:!0,value:z[z.length-1]}}const{finalKeyframe:o,generator:l,mirroredGenerator:u,mapPercentToKeyframes:f,keyframes:d,calculatedDuration:h,totalDuration:m,resolvedDuration:g}=r;if(this.startTime===null)return l.next(0);const{delay:v,repeat:x,repeatType:M,repeatDelay:E,onUpdate:S}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-m/this.speed,this.startTime)),t?this.currentTime=e:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(e-this.startTime)*this.speed;const y=this.currentTime-v*(this.speed>=0?1:-1),D=this.speed>=0?y<0:y>m;this.currentTime=Math.max(y,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=m);let b=this.currentTime,C=l;if(x){const z=Math.min(this.currentTime,m)/g;let P=Math.floor(z),R=z%1;!R&&z>=1&&(R=1),R===1&&P--,P=Math.min(P,x+1),P%2&&(M==="reverse"?(R=1-R,E&&(R-=E/g)):M==="mirror"&&(C=u)),b=ir(0,1,R)*g}const N=D?{done:!1,value:d[0]}:C.next(b);f&&(N.value=f(N.value));let{done:k}=N;!D&&h!==null&&(k=this.speed>=0?this.currentTime>=m:this.currentTime<=0);const B=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&k);return B&&o!==void 0&&(N.value=qu(d,this.options,o)),S&&S(N.value),B&&this.finish(),N}get duration(){const{resolved:e}=this;return e?tr(e.calculatedDuration):0}get time(){return tr(this.currentTime)}set time(e){e=er(e),this.currentTime=e,this.holdTime!==null||this.speed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.speed)}get speed(){return this.playbackSpeed}set speed(e){const t=this.playbackSpeed!==e;this.playbackSpeed=e,t&&(this.time=tr(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:e=LT,onPlay:t,startTime:r}=this.options;this.driver||(this.driver=e(l=>this.tick(l))),t&&t();const o=this.driver.now();this.holdTime!==null?this.startTime=o-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=o):this.startTime=r??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var e;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(e=this.currentTime)!==null&&e!==void 0?e:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:e}=this.options;e&&e()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}}const UT=new Set(["opacity","clipPath","filter","transform"]);function FT(n,e,t,{delay:r=0,duration:o=300,repeat:l=0,repeatType:u="loop",ease:f="easeInOut",times:d}={}){const h={[e]:t};d&&(h.offset=d);const m=V_(f,o);return Array.isArray(m)&&(h.easing=m),n.animate(h,{delay:r,duration:o,easing:Array.isArray(m)?"linear":m,fill:"both",iterations:l+1,direction:u==="reverse"?"alternate":"normal"})}const OT=Uh(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),ku=10,kT=2e4;function BT(n){return Kh(n.type)||n.type==="spring"||!B_(n.ease)}function VT(n,e){const t=new up({...e,keyframes:n,repeat:0,delay:0,isGenerator:!0});let r={done:!1,value:n[0]};const o=[];let l=0;for(;!r.done&&l<kT;)r=t.sample(l),o.push(r.value),l+=ku;return{times:void 0,keyframes:o,duration:l-ku,ease:"linear"}}const Sy={anticipate:Q_,backInOut:Z_,circInOut:ey};function zT(n){return n in Sy}class Mv extends my{constructor(e){super(e);const{name:t,motionValue:r,element:o,keyframes:l}=this.options;this.resolver=new py(l,(u,f)=>this.onKeyframesResolved(u,f),t,r,o),this.resolver.scheduleResolve()}initPlayback(e,t){let{duration:r=300,times:o,ease:l,type:u,motionValue:f,name:d,startTime:h}=this.options;if(!f.owner||!f.owner.current)return!1;if(typeof l=="string"&&Uu()&&zT(l)&&(l=Sy[l]),BT(this.options)){const{onComplete:g,onUpdate:v,motionValue:x,element:M,...E}=this.options,S=VT(e,E);e=S.keyframes,e.length===1&&(e[1]=e[0]),r=S.duration,o=S.times,l=S.ease,u="keyframes"}const m=FT(f.owner.current,d,e,{...this.options,duration:r,times:o,ease:l});return m.startTime=h??this.calcStartTime(),this.pendingTimeline?(ov(m,this.pendingTimeline),this.pendingTimeline=void 0):m.onfinish=()=>{const{onComplete:g}=this.options;f.set(qu(e,this.options,t)),g&&g(),this.cancel(),this.resolveFinishedPromise()},{animation:m,duration:r,times:o,type:u,ease:l,keyframes:e}}get duration(){const{resolved:e}=this;if(!e)return 0;const{duration:t}=e;return tr(t)}get time(){const{resolved:e}=this;if(!e)return 0;const{animation:t}=e;return tr(t.currentTime||0)}set time(e){const{resolved:t}=this;if(!t)return;const{animation:r}=t;r.currentTime=er(e)}get speed(){const{resolved:e}=this;if(!e)return 1;const{animation:t}=e;return t.playbackRate}set speed(e){const{resolved:t}=this;if(!t)return;const{animation:r}=t;r.playbackRate=e}get state(){const{resolved:e}=this;if(!e)return"idle";const{animation:t}=e;return t.playState}get startTime(){const{resolved:e}=this;if(!e)return null;const{animation:t}=e;return t.startTime}attachTimeline(e){if(!this._resolved)this.pendingTimeline=e;else{const{resolved:t}=this;if(!t)return $n;const{animation:r}=t;ov(r,e)}return $n}play(){if(this.isStopped)return;const{resolved:e}=this;if(!e)return;const{animation:t}=e;t.playState==="finished"&&this.updateFinishedPromise(),t.play()}pause(){const{resolved:e}=this;if(!e)return;const{animation:t}=e;t.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:e}=this;if(!e)return;const{animation:t,keyframes:r,duration:o,type:l,ease:u,times:f}=e;if(t.playState==="idle"||t.playState==="finished")return;if(this.time){const{motionValue:h,onUpdate:m,onComplete:g,element:v,...x}=this.options,M=new up({...x,keyframes:r,duration:o,type:l,ease:u,times:f,isGenerator:!0}),E=er(this.time);h.setWithVelocity(M.sample(E-ku).value,M.sample(E).value,ku)}const{onStop:d}=this.options;d&&d(),this.cancel()}complete(){const{resolved:e}=this;e&&e.animation.finish()}cancel(){const{resolved:e}=this;e&&e.animation.cancel()}static supports(e){const{motionValue:t,name:r,repeatDelay:o,repeatType:l,damping:u,type:f}=e;if(!t||!t.owner||!(t.owner.current instanceof HTMLElement))return!1;const{onUpdate:d,transformTemplate:h}=t.owner.getProps();return OT()&&r&&UT.has(r)&&!d&&!h&&!o&&l!=="mirror"&&u!==0&&f!=="inertia"}}const HT={type:"spring",stiffness:500,damping:25,restSpeed:10},GT=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),WT={type:"keyframes",duration:.8},XT={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},jT=(n,{keyframes:e})=>e.length>2?WT:Es.has(n)?n.startsWith("scale")?GT(e[1]):HT:XT;function qT({when:n,delay:e,delayChildren:t,staggerChildren:r,staggerDirection:o,repeat:l,repeatType:u,repeatDelay:f,from:d,elapsed:h,...m}){return!!Object.keys(m).length}const cp=(n,e,t,r={},o,l)=>u=>{const f=$h(r,n)||{},d=f.delay||r.delay||0;let{elapsed:h=0}=r;h=h-er(d);let m={keyframes:Array.isArray(t)?t:[null,t],ease:"easeOut",velocity:e.getVelocity(),...f,delay:-h,onUpdate:v=>{e.set(v),f.onUpdate&&f.onUpdate(v)},onComplete:()=>{u(),f.onComplete&&f.onComplete()},name:n,motionValue:e,element:l?void 0:o};qT(f)||(m={...m,...jT(n,m)}),m.duration&&(m.duration=er(m.duration)),m.repeatDelay&&(m.repeatDelay=er(m.repeatDelay)),m.from!==void 0&&(m.keyframes[0]=m.from);let g=!1;if((m.type===!1||m.duration===0&&!m.repeatDelay)&&(m.duration=0,m.delay===0&&(g=!0)),g&&!l&&e.get()!==void 0){const v=qu(m.keyframes,f);if(v!==void 0)return Gt.update(()=>{m.onUpdate(v),m.onComplete()}),new dE([])}return!l&&Mv.supports(m)?new Mv(m):new up(m)};function YT({protectedKeys:n,needsAnimating:e},t){const r=n.hasOwnProperty(t)&&e[t]!==!0;return e[t]=!1,r}function My(n,e,{delay:t=0,transitionOverride:r,type:o}={}){var l;let{transition:u=n.getDefaultTransition(),transitionEnd:f,...d}=e;r&&(u=r);const h=[],m=o&&n.animationState&&n.animationState.getState()[o];for(const g in d){const v=n.getValue(g,(l=n.latestValues[g])!==null&&l!==void 0?l:null),x=d[g];if(x===void 0||m&&YT(m,g))continue;const M={delay:t,...$h(u||{},g)};let E=!1;if(window.MotionHandoffAnimation){const y=j_(n);if(y){const D=window.MotionHandoffAnimation(y,g,Gt);D!==null&&(M.startTime=D,E=!0)}}Dd(n,g),v.start(cp(g,v,x,n.shouldReduceMotion&&W_.has(g)?{type:!1}:M,n,E));const S=v.animation;S&&h.push(S)}return f&&Promise.all(h).then(()=>{Gt.update(()=>{f&&AE(n,f)})}),h}function kd(n,e,t={}){var r;const o=ju(n,e,t.type==="exit"?(r=n.presenceContext)===null||r===void 0?void 0:r.custom:void 0);let{transition:l=n.getDefaultTransition()||{}}=o||{};t.transitionOverride&&(l=t.transitionOverride);const u=o?()=>Promise.all(My(n,o,t)):()=>Promise.resolve(),f=n.variantChildren&&n.variantChildren.size?(h=0)=>{const{delayChildren:m=0,staggerChildren:g,staggerDirection:v}=l;return $T(n,e,m+h,g,v,t)}:()=>Promise.resolve(),{when:d}=l;if(d){const[h,m]=d==="beforeChildren"?[u,f]:[f,u];return h().then(()=>m())}else return Promise.all([u(),f(t.delay)])}function $T(n,e,t=0,r=0,o=1,l){const u=[],f=(n.variantChildren.size-1)*r,d=o===1?(h=0)=>h*r:(h=0)=>f-h*r;return Array.from(n.variantChildren).sort(KT).forEach((h,m)=>{h.notify("AnimationStart",e),u.push(kd(h,e,{...l,delay:t+d(m)}).then(()=>h.notify("AnimationComplete",e)))}),Promise.all(u)}function KT(n,e){return n.sortNodePosition(e)}function ZT(n,e,t={}){n.notify("AnimationStart",e);let r;if(Array.isArray(e)){const o=e.map(l=>kd(n,l,t));r=Promise.all(o)}else if(typeof e=="string")r=kd(n,e,t);else{const o=typeof e=="function"?ju(n,e,t.custom):e;r=Promise.all(My(n,o,t))}return r.then(()=>{n.notify("AnimationComplete",e)})}const QT=Oh.length;function Ey(n){if(!n)return;if(!n.isControllingVariants){const t=n.parent?Ey(n.parent)||{}:{};return n.props.initial!==void 0&&(t.initial=n.props.initial),t}const e={};for(let t=0;t<QT;t++){const r=Oh[t],o=n.props[r];(Ta(o)||o===!1)&&(e[r]=o)}return e}const JT=[...Fh].reverse(),ew=Fh.length;function tw(n){return e=>Promise.all(e.map(({animation:t,options:r})=>ZT(n,t,r)))}function nw(n){let e=tw(n),t=Ev(),r=!0;const o=d=>(h,m)=>{var g;const v=ju(n,m,d==="exit"?(g=n.presenceContext)===null||g===void 0?void 0:g.custom:void 0);if(v){const{transition:x,transitionEnd:M,...E}=v;h={...h,...E,...M}}return h};function l(d){e=d(n)}function u(d){const{props:h}=n,m=Ey(n.parent)||{},g=[],v=new Set;let x={},M=1/0;for(let S=0;S<ew;S++){const y=JT[S],D=t[y],b=h[y]!==void 0?h[y]:m[y],C=Ta(b),N=y===d?D.isActive:null;N===!1&&(M=S);let k=b===m[y]&&b!==h[y]&&C;if(k&&r&&n.manuallyAnimateOnMount&&(k=!1),D.protectedKeys={...x},!D.isActive&&N===null||!b&&!D.prevProp||Wu(b)||typeof b=="boolean")continue;const B=iw(D.prevProp,b);let z=B||y===d&&D.isActive&&!k&&C||S>M&&C,P=!1;const R=Array.isArray(b)?b:[b];let F=R.reduce(o(y),{});N===!1&&(F={});const{prevResolvedValues:le={}}=D,te={...le,...F},se=re=>{z=!0,v.has(re)&&(P=!0,v.delete(re)),D.needsAnimating[re]=!0;const V=n.getValue(re);V&&(V.liveStyle=!1)};for(const re in te){const V=F[re],oe=le[re];if(x.hasOwnProperty(re))continue;let ie=!1;Rd(V)&&Rd(oe)?ie=!F_(V,oe):ie=V!==oe,ie?V!=null?se(re):v.add(re):V!==void 0&&v.has(re)?se(re):D.protectedKeys[re]=!0}D.prevProp=b,D.prevResolvedValues=F,D.isActive&&(x={...x,...F}),r&&n.blockInitialAnimation&&(z=!1),z&&(!(k&&B)||P)&&g.push(...R.map(re=>({animation:re,options:{type:y}})))}if(v.size){const S={};v.forEach(y=>{const D=n.getBaseTarget(y),b=n.getValue(y);b&&(b.liveStyle=!0),S[y]=D??null}),g.push({animation:S})}let E=!!g.length;return r&&(h.initial===!1||h.initial===h.animate)&&!n.manuallyAnimateOnMount&&(E=!1),r=!1,E?e(g):Promise.resolve()}function f(d,h){var m;if(t[d].isActive===h)return Promise.resolve();(m=n.variantChildren)===null||m===void 0||m.forEach(v=>{var x;return(x=v.animationState)===null||x===void 0?void 0:x.setActive(d,h)}),t[d].isActive=h;const g=u(d);for(const v in t)t[v].protectedKeys={};return g}return{animateChanges:u,setActive:f,setAnimateFunction:l,getState:()=>t,reset:()=>{t=Ev(),r=!0}}}function iw(n,e){return typeof e=="string"?e!==n:Array.isArray(e)?!F_(e,n):!1}function ns(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Ev(){return{animate:ns(!0),whileInView:ns(),whileHover:ns(),whileTap:ns(),whileDrag:ns(),whileFocus:ns(),exit:ns()}}class Vr{constructor(e){this.isMounted=!1,this.node=e}update(){}}class rw extends Vr{constructor(e){super(e),e.animationState||(e.animationState=nw(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();Wu(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)===null||e===void 0||e.call(this)}}let sw=0;class ow extends Vr{constructor(){super(...arguments),this.id=sw++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===r)return;const o=this.node.animationState.setActive("exit",!e);t&&!e&&o.then(()=>t(this.id))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}const aw={animation:{Feature:rw},exit:{Feature:ow}};function Ra(n,e,t,r={passive:!0}){return n.addEventListener(e,t,r),()=>n.removeEventListener(e,t)}function Fa(n){return{point:{x:n.pageX,y:n.pageY}}}const lw=n=>e=>Qh(e)&&n(e,Fa(e));function Sa(n,e,t,r){return Ra(n,e,lw(t),r)}const Tv=(n,e)=>Math.abs(n-e);function uw(n,e){const t=Tv(n.x,e.x),r=Tv(n.y,e.y);return Math.sqrt(t**2+r**2)}class Ty{constructor(e,t,{transformPagePoint:r,contextWindow:o,dragSnapToOrigin:l=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const g=Hf(this.lastMoveEventInfo,this.history),v=this.startEvent!==null,x=uw(g.offset,{x:0,y:0})>=3;if(!v&&!x)return;const{point:M}=g,{timestamp:E}=pn;this.history.push({...M,timestamp:E});const{onStart:S,onMove:y}=this.handlers;v||(S&&S(this.lastMoveEvent,g),this.startEvent=this.lastMoveEvent),y&&y(this.lastMoveEvent,g)},this.handlePointerMove=(g,v)=>{this.lastMoveEvent=g,this.lastMoveEventInfo=zf(v,this.transformPagePoint),Gt.update(this.updatePoint,!0)},this.handlePointerUp=(g,v)=>{this.end();const{onEnd:x,onSessionEnd:M,resumeAnimation:E}=this.handlers;if(this.dragSnapToOrigin&&E&&E(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const S=Hf(g.type==="pointercancel"?this.lastMoveEventInfo:zf(v,this.transformPagePoint),this.history);this.startEvent&&x&&x(g,S),M&&M(g,S)},!Qh(e))return;this.dragSnapToOrigin=l,this.handlers=t,this.transformPagePoint=r,this.contextWindow=o||window;const u=Fa(e),f=zf(u,this.transformPagePoint),{point:d}=f,{timestamp:h}=pn;this.history=[{...d,timestamp:h}];const{onSessionStart:m}=t;m&&m(e,Hf(f,this.history)),this.removeListeners=Ua(Sa(this.contextWindow,"pointermove",this.handlePointerMove),Sa(this.contextWindow,"pointerup",this.handlePointerUp),Sa(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),Fr(this.updatePoint)}}function zf(n,e){return e?{point:e(n.point)}:n}function wv(n,e){return{x:n.x-e.x,y:n.y-e.y}}function Hf({point:n},e){return{point:n,delta:wv(n,wy(e)),offset:wv(n,cw(e)),velocity:fw(e,.1)}}function cw(n){return n[0]}function wy(n){return n[n.length-1]}function fw(n,e){if(n.length<2)return{x:0,y:0};let t=n.length-1,r=null;const o=wy(n);for(;t>=0&&(r=n[t],!(o.timestamp-r.timestamp>er(e)));)t--;if(!r)return{x:0,y:0};const l=tr(o.timestamp-r.timestamp);if(l===0)return{x:0,y:0};const u={x:(o.x-r.x)/l,y:(o.y-r.y)/l};return u.x===1/0&&(u.x=0),u.y===1/0&&(u.y=0),u}const Ay=1e-4,dw=1-Ay,hw=1+Ay,Cy=.01,pw=0-Cy,mw=0+Cy;function Kn(n){return n.max-n.min}function gw(n,e,t){return Math.abs(n-e)<=t}function Av(n,e,t,r=.5){n.origin=r,n.originPoint=qt(e.min,e.max,n.origin),n.scale=Kn(t)/Kn(e),n.translate=qt(t.min,t.max,n.origin)-n.originPoint,(n.scale>=dw&&n.scale<=hw||isNaN(n.scale))&&(n.scale=1),(n.translate>=pw&&n.translate<=mw||isNaN(n.translate))&&(n.translate=0)}function Ma(n,e,t,r){Av(n.x,e.x,t.x,r?r.originX:void 0),Av(n.y,e.y,t.y,r?r.originY:void 0)}function Cv(n,e,t){n.min=t.min+e.min,n.max=n.min+Kn(e)}function vw(n,e,t){Cv(n.x,e.x,t.x),Cv(n.y,e.y,t.y)}function Rv(n,e,t){n.min=e.min-t.min,n.max=n.min+Kn(e)}function Ea(n,e,t){Rv(n.x,e.x,t.x),Rv(n.y,e.y,t.y)}function _w(n,{min:e,max:t},r){return e!==void 0&&n<e?n=r?qt(e,n,r.min):Math.max(n,e):t!==void 0&&n>t&&(n=r?qt(t,n,r.max):Math.min(n,t)),n}function Pv(n,e,t){return{min:e!==void 0?n.min+e:void 0,max:t!==void 0?n.max+t-(n.max-n.min):void 0}}function yw(n,{top:e,left:t,bottom:r,right:o}){return{x:Pv(n.x,t,o),y:Pv(n.y,e,r)}}function bv(n,e){let t=e.min-n.min,r=e.max-n.max;return e.max-e.min<n.max-n.min&&([t,r]=[r,t]),{min:t,max:r}}function xw(n,e){return{x:bv(n.x,e.x),y:bv(n.y,e.y)}}function Sw(n,e){let t=.5;const r=Kn(n),o=Kn(e);return o>r?t=_o(e.min,e.max-r,n.min):r>o&&(t=_o(n.min,n.max-o,e.min)),ir(0,1,t)}function Mw(n,e){const t={};return e.min!==void 0&&(t.min=e.min-n.min),e.max!==void 0&&(t.max=e.max-n.min),t}const Bd=.35;function Ew(n=Bd){return n===!1?n=0:n===!0&&(n=Bd),{x:Dv(n,"left","right"),y:Dv(n,"top","bottom")}}function Dv(n,e,t){return{min:Lv(n,e),max:Lv(n,t)}}function Lv(n,e){return typeof n=="number"?n:n[e]||0}const Iv=()=>({translate:0,scale:1,origin:0,originPoint:0}),fo=()=>({x:Iv(),y:Iv()}),Nv=()=>({min:0,max:0}),Jt=()=>({x:Nv(),y:Nv()});function oi(n){return[n("x"),n("y")]}function Ry({top:n,left:e,right:t,bottom:r}){return{x:{min:e,max:t},y:{min:n,max:r}}}function Tw({x:n,y:e}){return{top:e.min,right:n.max,bottom:e.max,left:n.min}}function ww(n,e){if(!e)return n;const t=e({x:n.left,y:n.top}),r=e({x:n.right,y:n.bottom});return{top:t.y,left:t.x,bottom:r.y,right:r.x}}function Gf(n){return n===void 0||n===1}function Vd({scale:n,scaleX:e,scaleY:t}){return!Gf(n)||!Gf(e)||!Gf(t)}function us(n){return Vd(n)||Py(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function Py(n){return Uv(n.x)||Uv(n.y)}function Uv(n){return n&&n!=="0%"}function Bu(n,e,t){const r=n-t,o=e*r;return t+o}function Fv(n,e,t,r,o){return o!==void 0&&(n=Bu(n,o,r)),Bu(n,t,r)+e}function zd(n,e=0,t=1,r,o){n.min=Fv(n.min,e,t,r,o),n.max=Fv(n.max,e,t,r,o)}function by(n,{x:e,y:t}){zd(n.x,e.translate,e.scale,e.originPoint),zd(n.y,t.translate,t.scale,t.originPoint)}const Ov=.999999999999,kv=1.0000000000001;function Aw(n,e,t,r=!1){const o=t.length;if(!o)return;e.x=e.y=1;let l,u;for(let f=0;f<o;f++){l=t[f],u=l.projectionDelta;const{visualElement:d}=l.options;d&&d.props.style&&d.props.style.display==="contents"||(r&&l.options.layoutScroll&&l.scroll&&l!==l.root&&po(n,{x:-l.scroll.offset.x,y:-l.scroll.offset.y}),u&&(e.x*=u.x.scale,e.y*=u.y.scale,by(n,u)),r&&us(l.latestValues)&&po(n,l.latestValues))}e.x<kv&&e.x>Ov&&(e.x=1),e.y<kv&&e.y>Ov&&(e.y=1)}function ho(n,e){n.min=n.min+e,n.max=n.max+e}function Bv(n,e,t,r,o=.5){const l=qt(n.min,n.max,o);zd(n,e,t,l,r)}function po(n,e){Bv(n.x,e.x,e.scaleX,e.scale,e.originX),Bv(n.y,e.y,e.scaleY,e.scale,e.originY)}function Dy(n,e){return Ry(ww(n.getBoundingClientRect(),e))}function Cw(n,e,t){const r=Dy(n,t),{scroll:o}=e;return o&&(ho(r.x,o.offset.x),ho(r.y,o.offset.y)),r}const Ly=({current:n})=>n?n.ownerDocument.defaultView:null,Rw=new WeakMap;class Pw{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Jt(),this.visualElement=e}start(e,{snapToCursor:t=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const o=m=>{const{dragSnapToOrigin:g}=this.getProps();g?this.pauseAnimation():this.stopAnimation(),t&&this.snapToCursor(Fa(m).point)},l=(m,g)=>{const{drag:v,dragPropagation:x,onDragStart:M}=this.getProps();if(v&&!x&&(this.openDragLock&&this.openDragLock(),this.openDragLock=SE(v),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),oi(S=>{let y=this.getAxisMotionValue(S).get()||0;if(Li.test(y)){const{projection:D}=this.visualElement;if(D&&D.layout){const b=D.layout.layoutBox[S];b&&(y=Kn(b)*(parseFloat(y)/100))}}this.originPoint[S]=y}),M&&Gt.postRender(()=>M(m,g)),Dd(this.visualElement,"transform");const{animationState:E}=this.visualElement;E&&E.setActive("whileDrag",!0)},u=(m,g)=>{const{dragPropagation:v,dragDirectionLock:x,onDirectionLock:M,onDrag:E}=this.getProps();if(!v&&!this.openDragLock)return;const{offset:S}=g;if(x&&this.currentDirection===null){this.currentDirection=bw(S),this.currentDirection!==null&&M&&M(this.currentDirection);return}this.updateAxis("x",g.point,S),this.updateAxis("y",g.point,S),this.visualElement.render(),E&&E(m,g)},f=(m,g)=>this.stop(m,g),d=()=>oi(m=>{var g;return this.getAnimationState(m)==="paused"&&((g=this.getAxisMotionValue(m).animation)===null||g===void 0?void 0:g.play())}),{dragSnapToOrigin:h}=this.getProps();this.panSession=new Ty(e,{onSessionStart:o,onStart:l,onMove:u,onSessionEnd:f,resumeAnimation:d},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:h,contextWindow:Ly(this.visualElement)})}stop(e,t){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:o}=t;this.startAnimation(o);const{onDragEnd:l}=this.getProps();l&&Gt.postRender(()=>l(e,t))}cancel(){this.isDragging=!1;const{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive("whileDrag",!1)}updateAxis(e,t,r){const{drag:o}=this.getProps();if(!r||!Ql(e,o,this.currentDirection))return;const l=this.getAxisMotionValue(e);let u=this.originPoint[e]+r[e];this.constraints&&this.constraints[e]&&(u=_w(u,this.constraints[e],this.elastic[e])),l.set(u)}resolveConstraints(){var e;const{dragConstraints:t,dragElastic:r}=this.getProps(),o=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(e=this.visualElement.projection)===null||e===void 0?void 0:e.layout,l=this.constraints;t&&uo(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&o?this.constraints=yw(o.layoutBox,t):this.constraints=!1,this.elastic=Ew(r),l!==this.constraints&&o&&this.constraints&&!this.hasMutatedConstraints&&oi(u=>{this.constraints!==!1&&this.getAxisMotionValue(u)&&(this.constraints[u]=Mw(o.layoutBox[u],this.constraints[u]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!uo(e))return!1;const r=e.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;const l=Cw(r,o.root,this.visualElement.getTransformPagePoint());let u=xw(o.layout.layoutBox,l);if(t){const f=t(Tw(u));this.hasMutatedConstraints=!!f,f&&(u=Ry(f))}return u}startAnimation(e){const{drag:t,dragMomentum:r,dragElastic:o,dragTransition:l,dragSnapToOrigin:u,onDragTransitionEnd:f}=this.getProps(),d=this.constraints||{},h=oi(m=>{if(!Ql(m,t,this.currentDirection))return;let g=d&&d[m]||{};u&&(g={min:0,max:0});const v=o?200:1e6,x=o?40:1e7,M={type:"inertia",velocity:r?e[m]:0,bounceStiffness:v,bounceDamping:x,timeConstant:750,restDelta:1,restSpeed:10,...l,...g};return this.startAxisValueAnimation(m,M)});return Promise.all(h).then(f)}startAxisValueAnimation(e,t){const r=this.getAxisMotionValue(e);return Dd(this.visualElement,e),r.start(cp(e,r,0,t,this.visualElement,!1))}stopAnimation(){oi(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){oi(e=>{var t;return(t=this.getAxisMotionValue(e).animation)===null||t===void 0?void 0:t.pause()})}getAnimationState(e){var t;return(t=this.getAxisMotionValue(e).animation)===null||t===void 0?void 0:t.state}getAxisMotionValue(e){const t=`_drag${e.toUpperCase()}`,r=this.visualElement.getProps(),o=r[t];return o||this.visualElement.getValue(e,(r.initial?r.initial[e]:void 0)||0)}snapToCursor(e){oi(t=>{const{drag:r}=this.getProps();if(!Ql(t,r,this.currentDirection))return;const{projection:o}=this.visualElement,l=this.getAxisMotionValue(t);if(o&&o.layout){const{min:u,max:f}=o.layout.layoutBox[t];l.set(e[t]-qt(u,f,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:t}=this.getProps(),{projection:r}=this.visualElement;if(!uo(t)||!r||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};oi(u=>{const f=this.getAxisMotionValue(u);if(f&&this.constraints!==!1){const d=f.get();o[u]=Sw({min:d,max:d},this.constraints[u])}});const{transformTemplate:l}=this.visualElement.getProps();this.visualElement.current.style.transform=l?l({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),oi(u=>{if(!Ql(u,e,null))return;const f=this.getAxisMotionValue(u),{min:d,max:h}=this.constraints[u];f.set(qt(d,h,o[u]))})}addListeners(){if(!this.visualElement.current)return;Rw.set(this.visualElement,this);const e=this.visualElement.current,t=Sa(e,"pointerdown",d=>{const{drag:h,dragListener:m=!0}=this.getProps();h&&m&&this.start(d)}),r=()=>{const{dragConstraints:d}=this.getProps();uo(d)&&d.current&&(this.constraints=this.resolveRefConstraints())},{projection:o}=this.visualElement,l=o.addEventListener("measure",r);o&&!o.layout&&(o.root&&o.root.updateScroll(),o.updateLayout()),Gt.read(r);const u=Ra(window,"resize",()=>this.scalePositionWithinConstraints()),f=o.addEventListener("didUpdate",(({delta:d,hasLayoutChanged:h})=>{this.isDragging&&h&&(oi(m=>{const g=this.getAxisMotionValue(m);g&&(this.originPoint[m]+=d[m].translate,g.set(g.get()+d[m].translate))}),this.visualElement.render())}));return()=>{u(),t(),l(),f&&f()}}getProps(){const e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:r=!1,dragPropagation:o=!1,dragConstraints:l=!1,dragElastic:u=Bd,dragMomentum:f=!0}=e;return{...e,drag:t,dragDirectionLock:r,dragPropagation:o,dragConstraints:l,dragElastic:u,dragMomentum:f}}}function Ql(n,e,t){return(e===!0||e===n)&&(t===null||t===n)}function bw(n,e=10){let t=null;return Math.abs(n.y)>e?t="y":Math.abs(n.x)>e&&(t="x"),t}class Dw extends Vr{constructor(e){super(e),this.removeGroupControls=$n,this.removeListeners=$n,this.controls=new Pw(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||$n}unmount(){this.removeGroupControls(),this.removeListeners()}}const Vv=n=>(e,t)=>{n&&Gt.postRender(()=>n(e,t))};class Lw extends Vr{constructor(){super(...arguments),this.removePointerDownListener=$n}onPointerDown(e){this.session=new Ty(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Ly(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:t,onPan:r,onPanEnd:o}=this.node.getProps();return{onSessionStart:Vv(e),onStart:Vv(t),onMove:r,onEnd:(l,u)=>{delete this.session,o&&Gt.postRender(()=>o(l,u))}}}mount(){this.removePointerDownListener=Sa(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Au={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function zv(n,e){return e.max===e.min?0:n/(e.max-e.min)*100}const ua={correct:(n,e)=>{if(!e.target)return n;if(typeof n=="string")if(ot.test(n))n=parseFloat(n);else return n;const t=zv(n,e.target.x),r=zv(n,e.target.y);return`${t}% ${r}%`}},Iw={correct:(n,{treeScale:e,projectionDelta:t})=>{const r=n,o=Or.parse(n);if(o.length>5)return r;const l=Or.createTransformer(n),u=typeof o[0]!="number"?1:0,f=t.x.scale*e.x,d=t.y.scale*e.y;o[0+u]/=f,o[1+u]/=d;const h=qt(f,d,.5);return typeof o[2+u]=="number"&&(o[2+u]/=h),typeof o[3+u]=="number"&&(o[3+u]/=h),l(o)}};class Nw extends Je.Component{componentDidMount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:r,layoutId:o}=this.props,{projection:l}=e;eE(Uw),l&&(t.group&&t.group.add(l),r&&r.register&&o&&r.register(l),l.root.didUpdate(),l.addEventListener("animationComplete",()=>{this.safeToRemove()}),l.setOptions({...l.options,onExitComplete:()=>this.safeToRemove()})),Au.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:t,visualElement:r,drag:o,isPresent:l}=this.props,u=r.projection;return u&&(u.isPresent=l,o||e.layoutDependency!==t||t===void 0?u.willUpdate():this.safeToRemove(),e.isPresent!==l&&(l?u.promote():u.relegate()||Gt.postRender(()=>{const f=u.getStack();(!f||!f.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),Bh.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:r}=this.props,{projection:o}=e;o&&(o.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(o),r&&r.deregister&&r.deregister(o))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function Iy(n){const[e,t]=mM(),r=Je.useContext(m_);return Cd.jsx(Nw,{...n,layoutGroup:r,switchLayoutGroup:Je.useContext(E_),isPresent:e,safeToRemove:t})}const Uw={borderRadius:{...ua,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:ua,borderTopRightRadius:ua,borderBottomLeftRadius:ua,borderBottomRightRadius:ua,boxShadow:Iw};function Fw(n,e,t){const r=An(n)?n:Aa(n);return r.start(cp("",r,e,t)),r.animation}function Ow(n){return n instanceof SVGElement&&n.tagName!=="svg"}const kw=(n,e)=>n.depth-e.depth;class Bw{constructor(){this.children=[],this.isDirty=!1}add(e){Jh(this.children,e),this.isDirty=!0}remove(e){ep(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(kw),this.isDirty=!1,this.children.forEach(e)}}function Vw(n,e){const t=Ii.now(),r=({timestamp:o})=>{const l=o-t;l>=e&&(Fr(r),n(l-e))};return Gt.read(r,!0),()=>Fr(r)}const Ny=["TopLeft","TopRight","BottomLeft","BottomRight"],zw=Ny.length,Hv=n=>typeof n=="string"?parseFloat(n):n,Gv=n=>typeof n=="number"||ot.test(n);function Hw(n,e,t,r,o,l){o?(n.opacity=qt(0,t.opacity!==void 0?t.opacity:1,Gw(r)),n.opacityExit=qt(e.opacity!==void 0?e.opacity:1,0,Ww(r))):l&&(n.opacity=qt(e.opacity!==void 0?e.opacity:1,t.opacity!==void 0?t.opacity:1,r));for(let u=0;u<zw;u++){const f=`border${Ny[u]}Radius`;let d=Wv(e,f),h=Wv(t,f);if(d===void 0&&h===void 0)continue;d||(d=0),h||(h=0),d===0||h===0||Gv(d)===Gv(h)?(n[f]=Math.max(qt(Hv(d),Hv(h),r),0),(Li.test(h)||Li.test(d))&&(n[f]+="%")):n[f]=h}(e.rotate||t.rotate)&&(n.rotate=qt(e.rotate||0,t.rotate||0,r))}function Wv(n,e){return n[e]!==void 0?n[e]:n.borderRadius}const Gw=Uy(0,.5,J_),Ww=Uy(.5,.95,$n);function Uy(n,e,t){return r=>r<n?0:r>e?1:t(_o(n,e,r))}function Xv(n,e){n.min=e.min,n.max=e.max}function ri(n,e){Xv(n.x,e.x),Xv(n.y,e.y)}function jv(n,e){n.translate=e.translate,n.scale=e.scale,n.originPoint=e.originPoint,n.origin=e.origin}function qv(n,e,t,r,o){return n-=e,n=Bu(n,1/t,r),o!==void 0&&(n=Bu(n,1/o,r)),n}function Xw(n,e=0,t=1,r=.5,o,l=n,u=n){if(Li.test(e)&&(e=parseFloat(e),e=qt(u.min,u.max,e/100)-u.min),typeof e!="number")return;let f=qt(l.min,l.max,r);n===l&&(f-=e),n.min=qv(n.min,e,t,f,o),n.max=qv(n.max,e,t,f,o)}function Yv(n,e,[t,r,o],l,u){Xw(n,e[t],e[r],e[o],e.scale,l,u)}const jw=["x","scaleX","originX"],qw=["y","scaleY","originY"];function $v(n,e,t,r){Yv(n.x,e,jw,t?t.x:void 0,r?r.x:void 0),Yv(n.y,e,qw,t?t.y:void 0,r?r.y:void 0)}function Kv(n){return n.translate===0&&n.scale===1}function Fy(n){return Kv(n.x)&&Kv(n.y)}function Zv(n,e){return n.min===e.min&&n.max===e.max}function Yw(n,e){return Zv(n.x,e.x)&&Zv(n.y,e.y)}function Qv(n,e){return Math.round(n.min)===Math.round(e.min)&&Math.round(n.max)===Math.round(e.max)}function Oy(n,e){return Qv(n.x,e.x)&&Qv(n.y,e.y)}function Jv(n){return Kn(n.x)/Kn(n.y)}function e0(n,e){return n.translate===e.translate&&n.scale===e.scale&&n.originPoint===e.originPoint}class $w{constructor(){this.members=[]}add(e){Jh(this.members,e),e.scheduleRender()}remove(e){if(ep(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const t=this.members[this.members.length-1];t&&this.promote(t)}}relegate(e){const t=this.members.findIndex(o=>e===o);if(t===0)return!1;let r;for(let o=t;o>=0;o--){const l=this.members[o];if(l.isPresent!==!1){r=l;break}}return r?(this.promote(r),!0):!1}promote(e,t){const r=this.lead;if(e!==r&&(this.prevLead=r,this.lead=e,e.show(),r)){r.instance&&r.scheduleRender(),e.scheduleRender(),e.resumeFrom=r,t&&(e.resumeFrom.preserveOpacity=!0),r.snapshot&&(e.snapshot=r.snapshot,e.snapshot.latestValues=r.animationValues||r.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:o}=e.options;o===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:t,resumingFrom:r}=e;t.onExitComplete&&t.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function Kw(n,e,t){let r="";const o=n.x.translate/e.x,l=n.y.translate/e.y,u=t?.z||0;if((o||l||u)&&(r=`translate3d(${o}px, ${l}px, ${u}px) `),(e.x!==1||e.y!==1)&&(r+=`scale(${1/e.x}, ${1/e.y}) `),t){const{transformPerspective:h,rotate:m,rotateX:g,rotateY:v,skewX:x,skewY:M}=t;h&&(r=`perspective(${h}px) ${r}`),m&&(r+=`rotate(${m}deg) `),g&&(r+=`rotateX(${g}deg) `),v&&(r+=`rotateY(${v}deg) `),x&&(r+=`skewX(${x}deg) `),M&&(r+=`skewY(${M}deg) `)}const f=n.x.scale*e.x,d=n.y.scale*e.y;return(f!==1||d!==1)&&(r+=`scale(${f}, ${d})`),r||"none"}const cs={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},_a=typeof window<"u"&&window.MotionDebug!==void 0,Wf=["","X","Y","Z"],Zw={visibility:"hidden"},t0=1e3;let Qw=0;function Xf(n,e,t,r){const{latestValues:o}=e;o[n]&&(t[n]=o[n],e.setStaticValue(n,0),r&&(r[n]=0))}function ky(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:e}=n.options;if(!e)return;const t=j_(e);if(window.MotionHasOptimisedAnimation(t,"transform")){const{layout:o,layoutId:l}=n.options;window.MotionCancelOptimisedAnimation(t,"transform",Gt,!(o||l))}const{parent:r}=n;r&&!r.hasCheckedOptimisedAppear&&ky(r)}function By({attachResizeListener:n,defaultParent:e,measureScroll:t,checkIsScrollRoot:r,resetTransform:o}){return class{constructor(u={},f=e?.()){this.id=Qw++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,_a&&(cs.totalNodes=cs.resolvedTargetDeltas=cs.recalculatedProjection=0),this.nodes.forEach(t1),this.nodes.forEach(o1),this.nodes.forEach(a1),this.nodes.forEach(n1),_a&&window.MotionDebug.record(cs)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=u,this.root=f?f.root||f:this,this.path=f?[...f.path,f]:[],this.parent=f,this.depth=f?f.depth+1:0;for(let d=0;d<this.path.length;d++)this.path[d].shouldResetTransform=!0;this.root===this&&(this.nodes=new Bw)}addEventListener(u,f){return this.eventHandlers.has(u)||this.eventHandlers.set(u,new tp),this.eventHandlers.get(u).add(f)}notifyListeners(u,...f){const d=this.eventHandlers.get(u);d&&d.notify(...f)}hasListeners(u){return this.eventHandlers.has(u)}mount(u,f=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=Ow(u),this.instance=u;const{layoutId:d,layout:h,visualElement:m}=this.options;if(m&&!m.current&&m.mount(u),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),f&&(h||d)&&(this.isLayoutDirty=!0),n){let g;const v=()=>this.root.updateBlockedByResize=!1;n(u,()=>{this.root.updateBlockedByResize=!0,g&&g(),g=Vw(v,250),Au.hasAnimatedSinceResize&&(Au.hasAnimatedSinceResize=!1,this.nodes.forEach(i0))})}d&&this.root.registerSharedNode(d,this),this.options.animate!==!1&&m&&(d||h)&&this.addEventListener("didUpdate",({delta:g,hasLayoutChanged:v,hasRelativeTargetChanged:x,layout:M})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const E=this.options.transition||m.getDefaultTransition()||d1,{onLayoutAnimationStart:S,onLayoutAnimationComplete:y}=m.getProps(),D=!this.targetLayout||!Oy(this.targetLayout,M)||x,b=!v&&x;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||b||v&&(D||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(g,b);const C={...$h(E,"layout"),onPlay:S,onComplete:y};(m.shouldReduceMotion||this.options.layoutRoot)&&(C.delay=0,C.type=!1),this.startAnimation(C)}else v||i0(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=M})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const u=this.getStack();u&&u.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Fr(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(l1),this.animationId++)}getTransformTemplate(){const{visualElement:u}=this.options;return u&&u.getProps().transformTemplate}willUpdate(u=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&ky(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let m=0;m<this.path.length;m++){const g=this.path[m];g.shouldResetTransform=!0,g.updateScroll("snapshot"),g.options.layoutRoot&&g.willUpdate(!1)}const{layoutId:f,layout:d}=this.options;if(f===void 0&&!d)return;const h=this.getTransformTemplate();this.prevTransformTemplateValue=h?h(this.latestValues,""):void 0,this.updateSnapshot(),u&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(n0);return}this.isUpdating||this.nodes.forEach(r1),this.isUpdating=!1,this.nodes.forEach(s1),this.nodes.forEach(Jw),this.nodes.forEach(e1),this.clearAllSnapshots();const f=Ii.now();pn.delta=ir(0,1e3/60,f-pn.timestamp),pn.timestamp=f,pn.isProcessing=!0,Uf.update.process(pn),Uf.preRender.process(pn),Uf.render.process(pn),pn.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Bh.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(i1),this.sharedNodes.forEach(u1)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Gt.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Gt.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let d=0;d<this.path.length;d++)this.path[d].updateScroll();const u=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Jt(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:f}=this.options;f&&f.notify("LayoutMeasure",this.layout.layoutBox,u?u.layoutBox:void 0)}updateScroll(u="measure"){let f=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===u&&(f=!1),f){const d=r(this.instance);this.scroll={animationId:this.root.animationId,phase:u,isRoot:d,offset:t(this.instance),wasRoot:this.scroll?this.scroll.isRoot:d}}}resetTransform(){if(!o)return;const u=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,f=this.projectionDelta&&!Fy(this.projectionDelta),d=this.getTransformTemplate(),h=d?d(this.latestValues,""):void 0,m=h!==this.prevTransformTemplateValue;u&&(f||us(this.latestValues)||m)&&(o(this.instance,h),this.shouldResetTransform=!1,this.scheduleRender())}measure(u=!0){const f=this.measurePageBox();let d=this.removeElementScroll(f);return u&&(d=this.removeTransform(d)),h1(d),{animationId:this.root.animationId,measuredBox:f,layoutBox:d,latestValues:{},source:this.id}}measurePageBox(){var u;const{visualElement:f}=this.options;if(!f)return Jt();const d=f.measureViewportBox();if(!(((u=this.scroll)===null||u===void 0?void 0:u.wasRoot)||this.path.some(p1))){const{scroll:m}=this.root;m&&(ho(d.x,m.offset.x),ho(d.y,m.offset.y))}return d}removeElementScroll(u){var f;const d=Jt();if(ri(d,u),!((f=this.scroll)===null||f===void 0)&&f.wasRoot)return d;for(let h=0;h<this.path.length;h++){const m=this.path[h],{scroll:g,options:v}=m;m!==this.root&&g&&v.layoutScroll&&(g.wasRoot&&ri(d,u),ho(d.x,g.offset.x),ho(d.y,g.offset.y))}return d}applyTransform(u,f=!1){const d=Jt();ri(d,u);for(let h=0;h<this.path.length;h++){const m=this.path[h];!f&&m.options.layoutScroll&&m.scroll&&m!==m.root&&po(d,{x:-m.scroll.offset.x,y:-m.scroll.offset.y}),us(m.latestValues)&&po(d,m.latestValues)}return us(this.latestValues)&&po(d,this.latestValues),d}removeTransform(u){const f=Jt();ri(f,u);for(let d=0;d<this.path.length;d++){const h=this.path[d];if(!h.instance||!us(h.latestValues))continue;Vd(h.latestValues)&&h.updateSnapshot();const m=Jt(),g=h.measurePageBox();ri(m,g),$v(f,h.latestValues,h.snapshot?h.snapshot.layoutBox:void 0,m)}return us(this.latestValues)&&$v(f,this.latestValues),f}setTargetDelta(u){this.targetDelta=u,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(u){this.options={...this.options,...u,crossfade:u.crossfade!==void 0?u.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==pn.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(u=!1){var f;const d=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=d.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=d.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=d.isSharedProjectionDirty);const h=!!this.resumingFrom||this!==d;if(!(u||h&&this.isSharedProjectionDirty||this.isProjectionDirty||!((f=this.parent)===null||f===void 0)&&f.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:g,layoutId:v}=this.options;if(!(!this.layout||!(g||v))){if(this.resolvedRelativeTargetAt=pn.timestamp,!this.targetDelta&&!this.relativeTarget){const x=this.getClosestProjectingParent();x&&x.layout&&this.animationProgress!==1?(this.relativeParent=x,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Jt(),this.relativeTargetOrigin=Jt(),Ea(this.relativeTargetOrigin,this.layout.layoutBox,x.layout.layoutBox),ri(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=Jt(),this.targetWithTransforms=Jt()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),vw(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):ri(this.target,this.layout.layoutBox),by(this.target,this.targetDelta)):ri(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const x=this.getClosestProjectingParent();x&&!!x.resumingFrom==!!this.resumingFrom&&!x.options.layoutScroll&&x.target&&this.animationProgress!==1?(this.relativeParent=x,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Jt(),this.relativeTargetOrigin=Jt(),Ea(this.relativeTargetOrigin,this.target,x.target),ri(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}_a&&cs.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Vd(this.parent.latestValues)||Py(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var u;const f=this.getLead(),d=!!this.resumingFrom||this!==f;let h=!0;if((this.isProjectionDirty||!((u=this.parent)===null||u===void 0)&&u.isProjectionDirty)&&(h=!1),d&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(h=!1),this.resolvedRelativeTargetAt===pn.timestamp&&(h=!1),h)return;const{layout:m,layoutId:g}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(m||g))return;ri(this.layoutCorrected,this.layout.layoutBox);const v=this.treeScale.x,x=this.treeScale.y;Aw(this.layoutCorrected,this.treeScale,this.path,d),f.layout&&!f.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(f.target=f.layout.layoutBox,f.targetWithTransforms=Jt());const{target:M}=f;if(!M){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(jv(this.prevProjectionDelta.x,this.projectionDelta.x),jv(this.prevProjectionDelta.y,this.projectionDelta.y)),Ma(this.projectionDelta,this.layoutCorrected,M,this.latestValues),(this.treeScale.x!==v||this.treeScale.y!==x||!e0(this.projectionDelta.x,this.prevProjectionDelta.x)||!e0(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",M)),_a&&cs.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(u=!0){var f;if((f=this.options.visualElement)===null||f===void 0||f.scheduleRender(),u){const d=this.getStack();d&&d.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=fo(),this.projectionDelta=fo(),this.projectionDeltaWithTransform=fo()}setAnimationOrigin(u,f=!1){const d=this.snapshot,h=d?d.latestValues:{},m={...this.latestValues},g=fo();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!f;const v=Jt(),x=d?d.source:void 0,M=this.layout?this.layout.source:void 0,E=x!==M,S=this.getStack(),y=!S||S.members.length<=1,D=!!(E&&!y&&this.options.crossfade===!0&&!this.path.some(f1));this.animationProgress=0;let b;this.mixTargetDelta=C=>{const N=C/1e3;r0(g.x,u.x,N),r0(g.y,u.y,N),this.setTargetDelta(g),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Ea(v,this.layout.layoutBox,this.relativeParent.layout.layoutBox),c1(this.relativeTarget,this.relativeTargetOrigin,v,N),b&&Yw(this.relativeTarget,b)&&(this.isProjectionDirty=!1),b||(b=Jt()),ri(b,this.relativeTarget)),E&&(this.animationValues=m,Hw(m,h,this.latestValues,N,D,y)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=N},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(u){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Fr(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Gt.update(()=>{Au.hasAnimatedSinceResize=!0,this.currentAnimation=Fw(0,t0,{...u,onUpdate:f=>{this.mixTargetDelta(f),u.onUpdate&&u.onUpdate(f)},onComplete:()=>{u.onComplete&&u.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const u=this.getStack();u&&u.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(t0),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const u=this.getLead();let{targetWithTransforms:f,target:d,layout:h,latestValues:m}=u;if(!(!f||!d||!h)){if(this!==u&&this.layout&&h&&Vy(this.options.animationType,this.layout.layoutBox,h.layoutBox)){d=this.target||Jt();const g=Kn(this.layout.layoutBox.x);d.x.min=u.target.x.min,d.x.max=d.x.min+g;const v=Kn(this.layout.layoutBox.y);d.y.min=u.target.y.min,d.y.max=d.y.min+v}ri(f,d),po(f,m),Ma(this.projectionDeltaWithTransform,this.layoutCorrected,f,m)}}registerSharedNode(u,f){this.sharedNodes.has(u)||this.sharedNodes.set(u,new $w),this.sharedNodes.get(u).add(f);const h=f.options.initialPromotionConfig;f.promote({transition:h?h.transition:void 0,preserveFollowOpacity:h&&h.shouldPreserveFollowOpacity?h.shouldPreserveFollowOpacity(f):void 0})}isLead(){const u=this.getStack();return u?u.lead===this:!0}getLead(){var u;const{layoutId:f}=this.options;return f?((u=this.getStack())===null||u===void 0?void 0:u.lead)||this:this}getPrevLead(){var u;const{layoutId:f}=this.options;return f?(u=this.getStack())===null||u===void 0?void 0:u.prevLead:void 0}getStack(){const{layoutId:u}=this.options;if(u)return this.root.sharedNodes.get(u)}promote({needsReset:u,transition:f,preserveFollowOpacity:d}={}){const h=this.getStack();h&&h.promote(this,d),u&&(this.projectionDelta=void 0,this.needsReset=!0),f&&this.setOptions({transition:f})}relegate(){const u=this.getStack();return u?u.relegate(this):!1}resetSkewAndRotation(){const{visualElement:u}=this.options;if(!u)return;let f=!1;const{latestValues:d}=u;if((d.z||d.rotate||d.rotateX||d.rotateY||d.rotateZ||d.skewX||d.skewY)&&(f=!0),!f)return;const h={};d.z&&Xf("z",u,h,this.animationValues);for(let m=0;m<Wf.length;m++)Xf(`rotate${Wf[m]}`,u,h,this.animationValues),Xf(`skew${Wf[m]}`,u,h,this.animationValues);u.render();for(const m in h)u.setStaticValue(m,h[m]),this.animationValues&&(this.animationValues[m]=h[m]);u.scheduleRender()}getProjectionStyles(u){var f,d;if(!this.instance||this.isSVG)return;if(!this.isVisible)return Zw;const h={visibility:""},m=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,h.opacity="",h.pointerEvents=Tu(u?.pointerEvents)||"",h.transform=m?m(this.latestValues,""):"none",h;const g=this.getLead();if(!this.projectionDelta||!this.layout||!g.target){const E={};return this.options.layoutId&&(E.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,E.pointerEvents=Tu(u?.pointerEvents)||""),this.hasProjected&&!us(this.latestValues)&&(E.transform=m?m({},""):"none",this.hasProjected=!1),E}const v=g.animationValues||g.latestValues;this.applyTransformsToTarget(),h.transform=Kw(this.projectionDeltaWithTransform,this.treeScale,v),m&&(h.transform=m(v,h.transform));const{x,y:M}=this.projectionDelta;h.transformOrigin=`${x.origin*100}% ${M.origin*100}% 0`,g.animationValues?h.opacity=g===this?(d=(f=v.opacity)!==null&&f!==void 0?f:this.latestValues.opacity)!==null&&d!==void 0?d:1:this.preserveOpacity?this.latestValues.opacity:v.opacityExit:h.opacity=g===this?v.opacity!==void 0?v.opacity:"":v.opacityExit!==void 0?v.opacityExit:0;for(const E in Nu){if(v[E]===void 0)continue;const{correct:S,applyTo:y}=Nu[E],D=h.transform==="none"?v[E]:S(v[E],g);if(y){const b=y.length;for(let C=0;C<b;C++)h[y[C]]=D}else h[E]=D}return this.options.layoutId&&(h.pointerEvents=g===this?Tu(u?.pointerEvents)||"":"none"),h}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(u=>{var f;return(f=u.currentAnimation)===null||f===void 0?void 0:f.stop()}),this.root.nodes.forEach(n0),this.root.sharedNodes.clear()}}}function Jw(n){n.updateLayout()}function e1(n){var e;const t=((e=n.resumeFrom)===null||e===void 0?void 0:e.snapshot)||n.snapshot;if(n.isLead()&&n.layout&&t&&n.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:o}=n.layout,{animationType:l}=n.options,u=t.source!==n.layout.source;l==="size"?oi(g=>{const v=u?t.measuredBox[g]:t.layoutBox[g],x=Kn(v);v.min=r[g].min,v.max=v.min+x}):Vy(l,t.layoutBox,r)&&oi(g=>{const v=u?t.measuredBox[g]:t.layoutBox[g],x=Kn(r[g]);v.max=v.min+x,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[g].max=n.relativeTarget[g].min+x)});const f=fo();Ma(f,r,t.layoutBox);const d=fo();u?Ma(d,n.applyTransform(o,!0),t.measuredBox):Ma(d,r,t.layoutBox);const h=!Fy(f);let m=!1;if(!n.resumeFrom){const g=n.getClosestProjectingParent();if(g&&!g.resumeFrom){const{snapshot:v,layout:x}=g;if(v&&x){const M=Jt();Ea(M,t.layoutBox,v.layoutBox);const E=Jt();Ea(E,r,x.layoutBox),Oy(M,E)||(m=!0),g.options.layoutRoot&&(n.relativeTarget=E,n.relativeTargetOrigin=M,n.relativeParent=g)}}}n.notifyListeners("didUpdate",{layout:r,snapshot:t,delta:d,layoutDelta:f,hasLayoutChanged:h,hasRelativeTargetChanged:m})}else if(n.isLead()){const{onExitComplete:r}=n.options;r&&r()}n.options.transition=void 0}function t1(n){_a&&cs.totalNodes++,n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function n1(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function i1(n){n.clearSnapshot()}function n0(n){n.clearMeasurements()}function r1(n){n.isLayoutDirty=!1}function s1(n){const{visualElement:e}=n.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),n.resetTransform()}function i0(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function o1(n){n.resolveTargetDelta()}function a1(n){n.calcProjection()}function l1(n){n.resetSkewAndRotation()}function u1(n){n.removeLeadSnapshot()}function r0(n,e,t){n.translate=qt(e.translate,0,t),n.scale=qt(e.scale,1,t),n.origin=e.origin,n.originPoint=e.originPoint}function s0(n,e,t,r){n.min=qt(e.min,t.min,r),n.max=qt(e.max,t.max,r)}function c1(n,e,t,r){s0(n.x,e.x,t.x,r),s0(n.y,e.y,t.y,r)}function f1(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const d1={duration:.45,ease:[.4,0,.1,1]},o0=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),a0=o0("applewebkit/")&&!o0("chrome/")?Math.round:$n;function l0(n){n.min=a0(n.min),n.max=a0(n.max)}function h1(n){l0(n.x),l0(n.y)}function Vy(n,e,t){return n==="position"||n==="preserve-aspect"&&!gw(Jv(e),Jv(t),.2)}function p1(n){var e;return n!==n.root&&((e=n.scroll)===null||e===void 0?void 0:e.wasRoot)}const m1=By({attachResizeListener:(n,e)=>Ra(n,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),jf={current:void 0},zy=By({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!jf.current){const n=new m1({});n.mount(window),n.setOptions({layoutScroll:!0}),jf.current=n}return jf.current},resetTransform:(n,e)=>{n.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),g1={pan:{Feature:Lw},drag:{Feature:Dw,ProjectionNode:zy,MeasureLayout:Iy}};function u0(n,e,t){const{props:r}=n;n.animationState&&r.whileHover&&n.animationState.setActive("whileHover",t==="Start");const o="onHover"+t,l=r[o];l&&Gt.postRender(()=>l(e,Fa(e)))}class v1 extends Vr{mount(){const{current:e}=this.node;e&&(this.unmount=gE(e,t=>(u0(this.node,t,"Start"),r=>u0(this.node,r,"End"))))}unmount(){}}class _1 extends Vr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Ua(Ra(this.node.current,"focus",()=>this.onFocus()),Ra(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function c0(n,e,t){const{props:r}=n;n.animationState&&r.whileTap&&n.animationState.setActive("whileTap",t==="Start");const o="onTap"+(t==="End"?"":t),l=r[o];l&&Gt.postRender(()=>l(e,Fa(e)))}class y1 extends Vr{mount(){const{current:e}=this.node;e&&(this.unmount=xE(e,t=>(c0(this.node,t,"Start"),(r,{success:o})=>c0(this.node,r,o?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Hd=new WeakMap,qf=new WeakMap,x1=n=>{const e=Hd.get(n.target);e&&e(n)},S1=n=>{n.forEach(x1)};function M1({root:n,...e}){const t=n||document;qf.has(t)||qf.set(t,{});const r=qf.get(t),o=JSON.stringify(e);return r[o]||(r[o]=new IntersectionObserver(S1,{root:n,...e})),r[o]}function E1(n,e,t){const r=M1(e);return Hd.set(n,t),r.observe(n),()=>{Hd.delete(n),r.unobserve(n)}}const T1={some:0,all:1};class w1 extends Vr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:t,margin:r,amount:o="some",once:l}=e,u={root:t?t.current:void 0,rootMargin:r,threshold:typeof o=="number"?o:T1[o]},f=d=>{const{isIntersecting:h}=d;if(this.isInView===h||(this.isInView=h,l&&!h&&this.hasEnteredView))return;h&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",h);const{onViewportEnter:m,onViewportLeave:g}=this.node.getProps(),v=h?m:g;v&&v(d)};return E1(this.node.current,u,f)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:t}=this.node;["amount","margin","root"].some(A1(e,t))&&this.startObserver()}unmount(){}}function A1({viewport:n={}},{viewport:e={}}={}){return t=>n[t]!==e[t]}const C1={inView:{Feature:w1},tap:{Feature:y1},focus:{Feature:_1},hover:{Feature:v1}},R1={layout:{ProjectionNode:zy,MeasureLayout:Iy}},Gd={current:null},Hy={current:!1};function P1(){if(Hy.current=!0,!!Nh)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),e=()=>Gd.current=n.matches;n.addListener(e),e()}else Gd.current=!1}const b1=[...hy,wn,Or],D1=n=>b1.find(dy(n)),f0=new WeakMap;function L1(n,e,t){for(const r in e){const o=e[r],l=t[r];if(An(o))n.addValue(r,o);else if(An(l))n.addValue(r,Aa(o,{owner:n}));else if(l!==o)if(n.hasValue(r)){const u=n.getValue(r);u.liveStyle===!0?u.jump(o):u.hasAnimated||u.set(o)}else{const u=n.getStaticValue(r);n.addValue(r,Aa(u!==void 0?u:o,{owner:n}))}}for(const r in t)e[r]===void 0&&n.removeValue(r);return e}const d0=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class I1{scrapeMotionValuesFromProps(e,t,r){return{}}constructor({parent:e,props:t,presenceContext:r,reducedMotionConfig:o,blockInitialAnimation:l,visualState:u},f={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=ap,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const x=Ii.now();this.renderScheduledAt<x&&(this.renderScheduledAt=x,Gt.render(this.render,!1,!0))};const{latestValues:d,renderState:h,onUpdate:m}=u;this.onUpdate=m,this.latestValues=d,this.baseTarget={...d},this.initialValues=t.initial?{...d}:{},this.renderState=h,this.parent=e,this.props=t,this.presenceContext=r,this.depth=e?e.depth+1:0,this.reducedMotionConfig=o,this.options=f,this.blockInitialAnimation=!!l,this.isControllingVariants=Xu(t),this.isVariantNode=S_(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:g,...v}=this.scrapeMotionValuesFromProps(t,{},this);for(const x in v){const M=v[x];d[x]!==void 0&&An(M)&&M.set(d[x],!1)}}mount(e){this.current=e,f0.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((t,r)=>this.bindToMotionValue(r,t)),Hy.current||P1(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Gd.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){f0.delete(this.current),this.projection&&this.projection.unmount(),Fr(this.notifyUpdate),Fr(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}bindToMotionValue(e,t){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const r=Es.has(e),o=t.on("change",f=>{this.latestValues[e]=f,this.props.onUpdate&&Gt.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0)}),l=t.on("renderRequest",this.scheduleRender);let u;window.MotionCheckAppearSync&&(u=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{o(),l(),u&&u(),t.owner&&t.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in yo){const t=yo[e];if(!t)continue;const{isEnabled:r,Feature:o}=t;if(!this.features[e]&&o&&r(this.props)&&(this.features[e]=new o(this)),this.features[e]){const l=this.features[e];l.isMounted?l.update():(l.mount(),l.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Jt()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let r=0;r<d0.length;r++){const o=d0[r];this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](),delete this.propEventSubscriptions[o]);const l="on"+o,u=e[l];u&&(this.propEventSubscriptions[o]=this.on(o,u))}this.prevMotionValues=L1(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){const r=this.values.get(e);t!==r&&(r&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);const t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let r=this.values.get(e);return r===void 0&&t!==void 0&&(r=Aa(t===null?void 0:t,{owner:this}),this.addValue(e,r)),r}readValue(e,t){var r;let o=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(r=this.getBaseTargetFromProps(this.props,e))!==null&&r!==void 0?r:this.readValueFromInstance(this.current,e,this.options);return o!=null&&(typeof o=="string"&&(cy(o)||ty(o))?o=parseFloat(o):!D1(o)&&Or.test(t)&&(o=ay(e,t)),this.setBaseTarget(e,An(o)?o.get():o)),An(o)?o.get():o}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){var t;const{initial:r}=this.props;let o;if(typeof r=="string"||typeof r=="object"){const u=zh(this.props,r,(t=this.presenceContext)===null||t===void 0?void 0:t.custom);u&&(o=u[e])}if(r&&o!==void 0)return o;const l=this.getBaseTargetFromProps(this.props,e);return l!==void 0&&!An(l)?l:this.initialValues[e]!==void 0&&o===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new tp),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}}class Gy extends I1{constructor(){super(...arguments),this.KeyframeResolver=py}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){return e.style?e.style[t]:void 0}removeValueFromRenderState(e,{vars:t,style:r}){delete t[e],delete r[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;An(e)&&(this.childSubscription=e.on("change",t=>{this.current&&(this.current.textContent=`${t}`)}))}}function N1(n){return window.getComputedStyle(n)}class U1 extends Gy{constructor(){super(...arguments),this.type="html",this.renderInstance=b_}readValueFromInstance(e,t){if(Es.has(t)){const r=op(t);return r&&r.default||0}else{const r=N1(e),o=(C_(t)?r.getPropertyValue(t):r[t])||0;return typeof o=="string"?o.trim():o}}measureInstanceViewportBox(e,{transformPagePoint:t}){return Dy(e,t)}build(e,t,r){Wh(e,t,r.transformTemplate)}scrapeMotionValuesFromProps(e,t,r){return Yh(e,t,r)}}class F1 extends Gy{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Jt}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(Es.has(t)){const r=op(t);return r&&r.default||0}return t=D_.has(t)?t:kh(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,r){return N_(e,t,r)}build(e,t,r){Xh(e,t,this.isSVGTag,r.transformTemplate)}renderInstance(e,t,r,o){L_(e,t,r,o)}mount(e){this.isSVGTag=qh(e.tagName),super.mount(e)}}const O1=(n,e)=>Vh(n)?new F1(e):new U1(e,{allowProjection:n!==Je.Fragment}),k1=uE({...aw,...C1,...g1,...R1},O1),li=TM(k1);const B1=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),V1=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,r)=>r?r.toUpperCase():t.toLowerCase()),h0=n=>{const e=V1(n);return e.charAt(0).toUpperCase()+e.slice(1)},Wy=(...n)=>n.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim(),z1=n=>{for(const e in n)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};var H1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const G1=Je.forwardRef(({color:n="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:o="",children:l,iconNode:u,...f},d)=>Je.createElement("svg",{ref:d,...H1,width:e,height:e,stroke:n,strokeWidth:r?Number(t)*24/Number(e):t,className:Wy("lucide",o),...!l&&!z1(f)&&{"aria-hidden":"true"},...f},[...u.map(([h,m])=>Je.createElement(h,m)),...Array.isArray(l)?l:[l]]));const ci=(n,e)=>{const t=Je.forwardRef(({className:r,...o},l)=>Je.createElement(G1,{ref:l,iconNode:e,className:Wy(`lucide-${B1(h0(n))}`,`lucide-${n}`,r),...o}));return t.displayName=h0(n),t};const W1=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],X1=ci("calendar",W1);const j1=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],q1=ci("chevron-down",j1);const Y1=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],$1=ci("download",Y1);const K1=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Z1=ci("external-link",K1);const Q1=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],Xy=ci("github",Q1);const J1=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],eA=ci("graduation-cap",J1);const tA=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],nA=ci("linkedin",tA);const iA=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],rA=ci("mail",iA);const sA=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]],oA=ci("pause",sA);const aA=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],lA=ci("play",aA);const uA=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],cA=ci("send",uA);const fA=[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]],dA=ci("twitter",fA);const fp="179",hA=0,p0=1,pA=2,jy=1,mA=2,Ki=3,kr=0,Bn=1,Zi=2,Nr=0,ys=1,m0=2,g0=3,v0=4,gA=5,hs=100,vA=101,_A=102,yA=103,xA=104,SA=200,MA=201,EA=202,TA=203,Wd=204,Xd=205,wA=206,AA=207,CA=208,RA=209,PA=210,bA=211,DA=212,LA=213,IA=214,jd=0,qd=1,Yd=2,So=3,$d=4,Kd=5,Zd=6,Qd=7,qy=0,NA=1,UA=2,Ur=0,FA=1,OA=2,kA=3,BA=4,VA=5,zA=6,HA=7,Yy=300,Mo=301,Eo=302,Jd=303,eh=304,Yu=306,th=1e3,gs=1001,nh=1002,Ti=1003,GA=1004,Jl=1005,bi=1006,Yf=1007,vs=1008,Ni=1009,$y=1010,Ky=1011,Pa=1012,dp=1013,Ss=1014,Qi=1015,Oa=1016,hp=1017,pp=1018,ba=1020,Zy=35902,Qy=1021,Jy=1022,Ei=1023,Da=1026,La=1027,ex=1028,mp=1029,tx=1030,gp=1031,vp=1033,Cu=33776,Ru=33777,Pu=33778,bu=33779,ih=35840,rh=35841,sh=35842,oh=35843,ah=36196,lh=37492,uh=37496,ch=37808,fh=37809,dh=37810,hh=37811,ph=37812,mh=37813,gh=37814,vh=37815,_h=37816,yh=37817,xh=37818,Sh=37819,Mh=37820,Eh=37821,Du=36492,Th=36494,wh=36495,nx=36283,Ah=36284,Ch=36285,Rh=36286,WA=3200,XA=3201,jA=0,qA=1,Ir="",ai="srgb",To="srgb-linear",Vu="linear",It="srgb",$s=7680,_0=519,YA=512,$A=513,KA=514,ix=515,ZA=516,QA=517,JA=518,eC=519,y0=35044,x0="300 es",Di=2e3,zu=2001;class Ro{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const En=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$f=Math.PI/180,Ph=180/Math.PI;function ka(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(En[n&255]+En[n>>8&255]+En[n>>16&255]+En[n>>24&255]+"-"+En[e&255]+En[e>>8&255]+"-"+En[e>>16&15|64]+En[e>>24&255]+"-"+En[t&63|128]+En[t>>8&255]+"-"+En[t>>16&255]+En[t>>24&255]+En[r&255]+En[r>>8&255]+En[r>>16&255]+En[r>>24&255]).toLowerCase()}function xt(n,e,t){return Math.max(e,Math.min(t,n))}function tC(n,e){return(n%e+e)%e}function Kf(n,e,t){return(1-t)*n+t*e}function ca(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function kn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class At{constructor(e=0,t=0){At.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(xt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*o+e.x,this.y=l*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ba{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,u,f){let d=r[o+0],h=r[o+1],m=r[o+2],g=r[o+3];const v=l[u+0],x=l[u+1],M=l[u+2],E=l[u+3];if(f===0){e[t+0]=d,e[t+1]=h,e[t+2]=m,e[t+3]=g;return}if(f===1){e[t+0]=v,e[t+1]=x,e[t+2]=M,e[t+3]=E;return}if(g!==E||d!==v||h!==x||m!==M){let S=1-f;const y=d*v+h*x+m*M+g*E,D=y>=0?1:-1,b=1-y*y;if(b>Number.EPSILON){const N=Math.sqrt(b),k=Math.atan2(N,y*D);S=Math.sin(S*k)/N,f=Math.sin(f*k)/N}const C=f*D;if(d=d*S+v*C,h=h*S+x*C,m=m*S+M*C,g=g*S+E*C,S===1-f){const N=1/Math.sqrt(d*d+h*h+m*m+g*g);d*=N,h*=N,m*=N,g*=N}}e[t]=d,e[t+1]=h,e[t+2]=m,e[t+3]=g}static multiplyQuaternionsFlat(e,t,r,o,l,u){const f=r[o],d=r[o+1],h=r[o+2],m=r[o+3],g=l[u],v=l[u+1],x=l[u+2],M=l[u+3];return e[t]=f*M+m*g+d*x-h*v,e[t+1]=d*M+m*v+h*g-f*x,e[t+2]=h*M+m*x+f*v-d*g,e[t+3]=m*M-f*g-d*v-h*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,u=e._order,f=Math.cos,d=Math.sin,h=f(r/2),m=f(o/2),g=f(l/2),v=d(r/2),x=d(o/2),M=d(l/2);switch(u){case"XYZ":this._x=v*m*g+h*x*M,this._y=h*x*g-v*m*M,this._z=h*m*M+v*x*g,this._w=h*m*g-v*x*M;break;case"YXZ":this._x=v*m*g+h*x*M,this._y=h*x*g-v*m*M,this._z=h*m*M-v*x*g,this._w=h*m*g+v*x*M;break;case"ZXY":this._x=v*m*g-h*x*M,this._y=h*x*g+v*m*M,this._z=h*m*M+v*x*g,this._w=h*m*g-v*x*M;break;case"ZYX":this._x=v*m*g-h*x*M,this._y=h*x*g+v*m*M,this._z=h*m*M-v*x*g,this._w=h*m*g+v*x*M;break;case"YZX":this._x=v*m*g+h*x*M,this._y=h*x*g+v*m*M,this._z=h*m*M-v*x*g,this._w=h*m*g-v*x*M;break;case"XZY":this._x=v*m*g-h*x*M,this._y=h*x*g-v*m*M,this._z=h*m*M+v*x*g,this._w=h*m*g+v*x*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],u=t[1],f=t[5],d=t[9],h=t[2],m=t[6],g=t[10],v=r+f+g;if(v>0){const x=.5/Math.sqrt(v+1);this._w=.25/x,this._x=(m-d)*x,this._y=(l-h)*x,this._z=(u-o)*x}else if(r>f&&r>g){const x=2*Math.sqrt(1+r-f-g);this._w=(m-d)/x,this._x=.25*x,this._y=(o+u)/x,this._z=(l+h)/x}else if(f>g){const x=2*Math.sqrt(1+f-r-g);this._w=(l-h)/x,this._x=(o+u)/x,this._y=.25*x,this._z=(d+m)/x}else{const x=2*Math.sqrt(1+g-r-f);this._w=(u-o)/x,this._x=(l+h)/x,this._y=(d+m)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,u=e._w,f=t._x,d=t._y,h=t._z,m=t._w;return this._x=r*m+u*f+o*h-l*d,this._y=o*m+u*d+l*f-r*h,this._z=l*m+u*h+r*d-o*f,this._w=u*m-r*f-o*d-l*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,o=this._y,l=this._z,u=this._w;let f=u*e._w+r*e._x+o*e._y+l*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=u,this._x=r,this._y=o,this._z=l,this;const d=1-f*f;if(d<=Number.EPSILON){const x=1-t;return this._w=x*u+t*this._w,this._x=x*r+t*this._x,this._y=x*o+t*this._y,this._z=x*l+t*this._z,this.normalize(),this}const h=Math.sqrt(d),m=Math.atan2(h,f),g=Math.sin((1-t)*m)/h,v=Math.sin(t*m)/h;return this._w=u*g+this._w*v,this._x=r*g+this._x*v,this._y=o*g+this._y*v,this._z=l*g+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(e=0,t=0,r=0){K.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(S0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(S0.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,u=e.y,f=e.z,d=e.w,h=2*(u*o-f*r),m=2*(f*t-l*o),g=2*(l*r-u*t);return this.x=t+d*h+u*g-f*m,this.y=r+d*m+f*h-l*g,this.z=o+d*g+l*m-u*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this.z=xt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this.z=xt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,u=t.x,f=t.y,d=t.z;return this.x=o*d-l*f,this.y=l*u-r*d,this.z=r*f-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Zf.copy(this).projectOnVector(e),this.sub(Zf)}reflect(e){return this.sub(Zf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(xt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Zf=new K,S0=new Ba;class ht{constructor(e,t,r,o,l,u,f,d,h){ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,f,d,h)}set(e,t,r,o,l,u,f,d,h){const m=this.elements;return m[0]=e,m[1]=o,m[2]=f,m[3]=t,m[4]=l,m[5]=d,m[6]=r,m[7]=u,m[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],f=r[3],d=r[6],h=r[1],m=r[4],g=r[7],v=r[2],x=r[5],M=r[8],E=o[0],S=o[3],y=o[6],D=o[1],b=o[4],C=o[7],N=o[2],k=o[5],B=o[8];return l[0]=u*E+f*D+d*N,l[3]=u*S+f*b+d*k,l[6]=u*y+f*C+d*B,l[1]=h*E+m*D+g*N,l[4]=h*S+m*b+g*k,l[7]=h*y+m*C+g*B,l[2]=v*E+x*D+M*N,l[5]=v*S+x*b+M*k,l[8]=v*y+x*C+M*B,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],d=e[6],h=e[7],m=e[8];return t*u*m-t*f*h-r*l*m+r*f*d+o*l*h-o*u*d}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],d=e[6],h=e[7],m=e[8],g=m*u-f*h,v=f*d-m*l,x=h*l-u*d,M=t*g+r*v+o*x;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/M;return e[0]=g*E,e[1]=(o*h-m*r)*E,e[2]=(f*r-o*u)*E,e[3]=v*E,e[4]=(m*t-o*d)*E,e[5]=(o*l-f*t)*E,e[6]=x*E,e[7]=(r*d-h*t)*E,e[8]=(u*t-r*l)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,u,f){const d=Math.cos(l),h=Math.sin(l);return this.set(r*d,r*h,-r*(d*u+h*f)+u+e,-o*h,o*d,-o*(-h*u+d*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(Qf.makeScale(e,t)),this}rotate(e){return this.premultiply(Qf.makeRotation(-e)),this}translate(e,t){return this.premultiply(Qf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Qf=new ht;function rx(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Hu(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function nC(){const n=Hu("canvas");return n.style.display="block",n}const M0={};function go(n){n in M0||(M0[n]=!0,console.warn(n))}function iC(n,e,t){return new Promise(function(r,o){function l(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:o();break;case n.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const E0=new ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),T0=new ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function rC(){const n={enabled:!0,workingColorSpace:To,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===It&&(o.r=nr(o.r),o.g=nr(o.g),o.b=nr(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===It&&(o.r=vo(o.r),o.g=vo(o.g),o.b=vo(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Ir?Vu:this.spaces[o].transfer},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return go("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return go("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return n.define({[To]:{primaries:e,whitePoint:r,transfer:Vu,toXYZ:E0,fromXYZ:T0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ai},outputColorSpaceConfig:{drawingBufferColorSpace:ai}},[ai]:{primaries:e,whitePoint:r,transfer:It,toXYZ:E0,fromXYZ:T0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ai}}}),n}const wt=rC();function nr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function vo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ks;class sC{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Ks===void 0&&(Ks=Hu("canvas")),Ks.width=e.width,Ks.height=e.height;const o=Ks.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Ks}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Hu("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=nr(l[u]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(nr(t[r]/255)*255):t[r]=nr(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let oC=0;class _p{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:oC++}),this.uuid=ka(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,f=o.length;u<f;u++)o[u].isDataTexture?l.push(Jf(o[u].image)):l.push(Jf(o[u]))}else l=Jf(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function Jf(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?sC.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let aC=0;const ed=new K;class Vn extends Ro{constructor(e=Vn.DEFAULT_IMAGE,t=Vn.DEFAULT_MAPPING,r=gs,o=gs,l=bi,u=vs,f=Ei,d=Ni,h=Vn.DEFAULT_ANISOTROPY,m=Ir){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:aC++}),this.uuid=ka(),this.name="",this.source=new _p(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=h,this.format=f,this.internalFormat=null,this.type=d,this.offset=new At(0,0),this.repeat=new At(1,1),this.center=new At(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ed).x}get height(){return this.source.getSize(ed).y}get depth(){return this.source.getSize(ed).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Yy)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case th:e.x=e.x-Math.floor(e.x);break;case gs:e.x=e.x<0?0:1;break;case nh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case th:e.y=e.y-Math.floor(e.y);break;case gs:e.y=e.y<0?0:1;break;case nh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Vn.DEFAULT_IMAGE=null;Vn.DEFAULT_MAPPING=Yy;Vn.DEFAULT_ANISOTROPY=1;class Nt{constructor(e=0,t=0,r=0,o=1){Nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const d=e.elements,h=d[0],m=d[4],g=d[8],v=d[1],x=d[5],M=d[9],E=d[2],S=d[6],y=d[10];if(Math.abs(m-v)<.01&&Math.abs(g-E)<.01&&Math.abs(M-S)<.01){if(Math.abs(m+v)<.1&&Math.abs(g+E)<.1&&Math.abs(M+S)<.1&&Math.abs(h+x+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(h+1)/2,C=(x+1)/2,N=(y+1)/2,k=(m+v)/4,B=(g+E)/4,z=(M+S)/4;return b>C&&b>N?b<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(b),o=k/r,l=B/r):C>N?C<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(C),r=k/o,l=z/o):N<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(N),r=B/l,o=z/l),this.set(r,o,l,t),this}let D=Math.sqrt((S-M)*(S-M)+(g-E)*(g-E)+(v-m)*(v-m));return Math.abs(D)<.001&&(D=1),this.x=(S-M)/D,this.y=(g-E)/D,this.z=(v-m)/D,this.w=Math.acos((h+x+y-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this.z=xt(this.z,e.z,t.z),this.w=xt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this.z=xt(this.z,e,t),this.w=xt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class lC extends Ro{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new Nt(0,0,e,t),this.scissorTest=!1,this.viewport=new Nt(0,0,e,t);const o={width:e,height:t,depth:r.depth},l=new Vn(o);this.textures=[];const u=r.count;for(let f=0;f<u;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const t={minFilter:bi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isArrayTexture=this.textures[o].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new _p(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ms extends lC{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class sx extends Vn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Ti,this.minFilter=Ti,this.wrapR=gs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class uC extends Vn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Ti,this.minFilter=Ti,this.wrapR=gs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Va{constructor(e=new K(1/0,1/0,1/0),t=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(_i.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(_i.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=_i.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=l.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,_i):_i.fromBufferAttribute(l,u),_i.applyMatrix4(e.matrixWorld),this.expandByPoint(_i);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),eu.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),eu.copy(r.boundingBox)),eu.applyMatrix4(e.matrixWorld),this.union(eu)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,_i),_i.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fa),tu.subVectors(this.max,fa),Zs.subVectors(e.a,fa),Qs.subVectors(e.b,fa),Js.subVectors(e.c,fa),Ar.subVectors(Qs,Zs),Cr.subVectors(Js,Qs),is.subVectors(Zs,Js);let t=[0,-Ar.z,Ar.y,0,-Cr.z,Cr.y,0,-is.z,is.y,Ar.z,0,-Ar.x,Cr.z,0,-Cr.x,is.z,0,-is.x,-Ar.y,Ar.x,0,-Cr.y,Cr.x,0,-is.y,is.x,0];return!td(t,Zs,Qs,Js,tu)||(t=[1,0,0,0,1,0,0,0,1],!td(t,Zs,Qs,Js,tu))?!1:(nu.crossVectors(Ar,Cr),t=[nu.x,nu.y,nu.z],td(t,Zs,Qs,Js,tu))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_i).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_i).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Xi=[new K,new K,new K,new K,new K,new K,new K,new K],_i=new K,eu=new Va,Zs=new K,Qs=new K,Js=new K,Ar=new K,Cr=new K,is=new K,fa=new K,tu=new K,nu=new K,rs=new K;function td(n,e,t,r,o){for(let l=0,u=n.length-3;l<=u;l+=3){rs.fromArray(n,l);const f=o.x*Math.abs(rs.x)+o.y*Math.abs(rs.y)+o.z*Math.abs(rs.z),d=e.dot(rs),h=t.dot(rs),m=r.dot(rs);if(Math.max(-Math.max(d,h,m),Math.min(d,h,m))>f)return!1}return!0}const cC=new Va,da=new K,nd=new K;class $u{constructor(e=new K,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):cC.setFromPoints(e).getCenter(r);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;da.subVectors(e,this.center);const t=da.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(da,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(nd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(da.copy(e.center).add(nd)),this.expandByPoint(da.copy(e.center).sub(nd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ji=new K,id=new K,iu=new K,Rr=new K,rd=new K,ru=new K,sd=new K;class ox{constructor(e=new K,t=new K(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ji)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ji.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ji.copy(this.origin).addScaledVector(this.direction,t),ji.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){id.copy(e).add(t).multiplyScalar(.5),iu.copy(t).sub(e).normalize(),Rr.copy(this.origin).sub(id);const l=e.distanceTo(t)*.5,u=-this.direction.dot(iu),f=Rr.dot(this.direction),d=-Rr.dot(iu),h=Rr.lengthSq(),m=Math.abs(1-u*u);let g,v,x,M;if(m>0)if(g=u*d-f,v=u*f-d,M=l*m,g>=0)if(v>=-M)if(v<=M){const E=1/m;g*=E,v*=E,x=g*(g+u*v+2*f)+v*(u*g+v+2*d)+h}else v=l,g=Math.max(0,-(u*v+f)),x=-g*g+v*(v+2*d)+h;else v=-l,g=Math.max(0,-(u*v+f)),x=-g*g+v*(v+2*d)+h;else v<=-M?(g=Math.max(0,-(-u*l+f)),v=g>0?-l:Math.min(Math.max(-l,-d),l),x=-g*g+v*(v+2*d)+h):v<=M?(g=0,v=Math.min(Math.max(-l,-d),l),x=v*(v+2*d)+h):(g=Math.max(0,-(u*l+f)),v=g>0?l:Math.min(Math.max(-l,-d),l),x=-g*g+v*(v+2*d)+h);else v=u>0?-l:l,g=Math.max(0,-(u*v+f)),x=-g*g+v*(v+2*d)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,g),o&&o.copy(id).addScaledVector(iu,v),x}intersectSphere(e,t){ji.subVectors(e.center,this.origin);const r=ji.dot(this.direction),o=ji.dot(ji)-r*r,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),f=r-u,d=r+u;return d<0?null:f<0?this.at(d,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,u,f,d;const h=1/this.direction.x,m=1/this.direction.y,g=1/this.direction.z,v=this.origin;return h>=0?(r=(e.min.x-v.x)*h,o=(e.max.x-v.x)*h):(r=(e.max.x-v.x)*h,o=(e.min.x-v.x)*h),m>=0?(l=(e.min.y-v.y)*m,u=(e.max.y-v.y)*m):(l=(e.max.y-v.y)*m,u=(e.min.y-v.y)*m),r>u||l>o||((l>r||isNaN(r))&&(r=l),(u<o||isNaN(o))&&(o=u),g>=0?(f=(e.min.z-v.z)*g,d=(e.max.z-v.z)*g):(f=(e.max.z-v.z)*g,d=(e.min.z-v.z)*g),r>d||f>o)||((f>r||r!==r)&&(r=f),(d<o||o!==o)&&(o=d),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,ji)!==null}intersectTriangle(e,t,r,o,l){rd.subVectors(t,e),ru.subVectors(r,e),sd.crossVectors(rd,ru);let u=this.direction.dot(sd),f;if(u>0){if(o)return null;f=1}else if(u<0)f=-1,u=-u;else return null;Rr.subVectors(this.origin,e);const d=f*this.direction.dot(ru.crossVectors(Rr,ru));if(d<0)return null;const h=f*this.direction.dot(rd.cross(Rr));if(h<0||d+h>u)return null;const m=-f*Rr.dot(sd);return m<0?null:this.at(m/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Yt{constructor(e,t,r,o,l,u,f,d,h,m,g,v,x,M,E,S){Yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,f,d,h,m,g,v,x,M,E,S)}set(e,t,r,o,l,u,f,d,h,m,g,v,x,M,E,S){const y=this.elements;return y[0]=e,y[4]=t,y[8]=r,y[12]=o,y[1]=l,y[5]=u,y[9]=f,y[13]=d,y[2]=h,y[6]=m,y[10]=g,y[14]=v,y[3]=x,y[7]=M,y[11]=E,y[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Yt().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,o=1/eo.setFromMatrixColumn(e,0).length(),l=1/eo.setFromMatrixColumn(e,1).length(),u=1/eo.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,u=Math.cos(r),f=Math.sin(r),d=Math.cos(o),h=Math.sin(o),m=Math.cos(l),g=Math.sin(l);if(e.order==="XYZ"){const v=u*m,x=u*g,M=f*m,E=f*g;t[0]=d*m,t[4]=-d*g,t[8]=h,t[1]=x+M*h,t[5]=v-E*h,t[9]=-f*d,t[2]=E-v*h,t[6]=M+x*h,t[10]=u*d}else if(e.order==="YXZ"){const v=d*m,x=d*g,M=h*m,E=h*g;t[0]=v+E*f,t[4]=M*f-x,t[8]=u*h,t[1]=u*g,t[5]=u*m,t[9]=-f,t[2]=x*f-M,t[6]=E+v*f,t[10]=u*d}else if(e.order==="ZXY"){const v=d*m,x=d*g,M=h*m,E=h*g;t[0]=v-E*f,t[4]=-u*g,t[8]=M+x*f,t[1]=x+M*f,t[5]=u*m,t[9]=E-v*f,t[2]=-u*h,t[6]=f,t[10]=u*d}else if(e.order==="ZYX"){const v=u*m,x=u*g,M=f*m,E=f*g;t[0]=d*m,t[4]=M*h-x,t[8]=v*h+E,t[1]=d*g,t[5]=E*h+v,t[9]=x*h-M,t[2]=-h,t[6]=f*d,t[10]=u*d}else if(e.order==="YZX"){const v=u*d,x=u*h,M=f*d,E=f*h;t[0]=d*m,t[4]=E-v*g,t[8]=M*g+x,t[1]=g,t[5]=u*m,t[9]=-f*m,t[2]=-h*m,t[6]=x*g+M,t[10]=v-E*g}else if(e.order==="XZY"){const v=u*d,x=u*h,M=f*d,E=f*h;t[0]=d*m,t[4]=-g,t[8]=h*m,t[1]=v*g+E,t[5]=u*m,t[9]=x*g-M,t[2]=M*g-x,t[6]=f*m,t[10]=E*g+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(fC,e,dC)}lookAt(e,t,r){const o=this.elements;return jn.subVectors(e,t),jn.lengthSq()===0&&(jn.z=1),jn.normalize(),Pr.crossVectors(r,jn),Pr.lengthSq()===0&&(Math.abs(r.z)===1?jn.x+=1e-4:jn.z+=1e-4,jn.normalize(),Pr.crossVectors(r,jn)),Pr.normalize(),su.crossVectors(jn,Pr),o[0]=Pr.x,o[4]=su.x,o[8]=jn.x,o[1]=Pr.y,o[5]=su.y,o[9]=jn.y,o[2]=Pr.z,o[6]=su.z,o[10]=jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],f=r[4],d=r[8],h=r[12],m=r[1],g=r[5],v=r[9],x=r[13],M=r[2],E=r[6],S=r[10],y=r[14],D=r[3],b=r[7],C=r[11],N=r[15],k=o[0],B=o[4],z=o[8],P=o[12],R=o[1],F=o[5],le=o[9],te=o[13],se=o[2],ce=o[6],ae=o[10],re=o[14],V=o[3],oe=o[7],ie=o[11],U=o[15];return l[0]=u*k+f*R+d*se+h*V,l[4]=u*B+f*F+d*ce+h*oe,l[8]=u*z+f*le+d*ae+h*ie,l[12]=u*P+f*te+d*re+h*U,l[1]=m*k+g*R+v*se+x*V,l[5]=m*B+g*F+v*ce+x*oe,l[9]=m*z+g*le+v*ae+x*ie,l[13]=m*P+g*te+v*re+x*U,l[2]=M*k+E*R+S*se+y*V,l[6]=M*B+E*F+S*ce+y*oe,l[10]=M*z+E*le+S*ae+y*ie,l[14]=M*P+E*te+S*re+y*U,l[3]=D*k+b*R+C*se+N*V,l[7]=D*B+b*F+C*ce+N*oe,l[11]=D*z+b*le+C*ae+N*ie,l[15]=D*P+b*te+C*re+N*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],u=e[1],f=e[5],d=e[9],h=e[13],m=e[2],g=e[6],v=e[10],x=e[14],M=e[3],E=e[7],S=e[11],y=e[15];return M*(+l*d*g-o*h*g-l*f*v+r*h*v+o*f*x-r*d*x)+E*(+t*d*x-t*h*v+l*u*v-o*u*x+o*h*m-l*d*m)+S*(+t*h*g-t*f*x-l*u*g+r*u*x+l*f*m-r*h*m)+y*(-o*f*m-t*d*g+t*f*v+o*u*g-r*u*v+r*d*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],d=e[6],h=e[7],m=e[8],g=e[9],v=e[10],x=e[11],M=e[12],E=e[13],S=e[14],y=e[15],D=g*S*h-E*v*h+E*d*x-f*S*x-g*d*y+f*v*y,b=M*v*h-m*S*h-M*d*x+u*S*x+m*d*y-u*v*y,C=m*E*h-M*g*h+M*f*x-u*E*x-m*f*y+u*g*y,N=M*g*d-m*E*d-M*f*v+u*E*v+m*f*S-u*g*S,k=t*D+r*b+o*C+l*N;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/k;return e[0]=D*B,e[1]=(E*v*l-g*S*l-E*o*x+r*S*x+g*o*y-r*v*y)*B,e[2]=(f*S*l-E*d*l+E*o*h-r*S*h-f*o*y+r*d*y)*B,e[3]=(g*d*l-f*v*l-g*o*h+r*v*h+f*o*x-r*d*x)*B,e[4]=b*B,e[5]=(m*S*l-M*v*l+M*o*x-t*S*x-m*o*y+t*v*y)*B,e[6]=(M*d*l-u*S*l-M*o*h+t*S*h+u*o*y-t*d*y)*B,e[7]=(u*v*l-m*d*l+m*o*h-t*v*h-u*o*x+t*d*x)*B,e[8]=C*B,e[9]=(M*g*l-m*E*l-M*r*x+t*E*x+m*r*y-t*g*y)*B,e[10]=(u*E*l-M*f*l+M*r*h-t*E*h-u*r*y+t*f*y)*B,e[11]=(m*f*l-u*g*l-m*r*h+t*g*h+u*r*x-t*f*x)*B,e[12]=N*B,e[13]=(m*E*o-M*g*o+M*r*v-t*E*v-m*r*S+t*g*S)*B,e[14]=(M*f*o-u*E*o-M*r*d+t*E*d+u*r*S-t*f*S)*B,e[15]=(u*g*o-m*f*o+m*r*d-t*g*d-u*r*v+t*f*v)*B,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,u=e.x,f=e.y,d=e.z,h=l*u,m=l*f;return this.set(h*u+r,h*f-o*d,h*d+o*f,0,h*f+o*d,m*f+r,m*d-o*u,0,h*d-o*f,m*d+o*u,l*d*d+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,u){return this.set(1,r,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,u=t._y,f=t._z,d=t._w,h=l+l,m=u+u,g=f+f,v=l*h,x=l*m,M=l*g,E=u*m,S=u*g,y=f*g,D=d*h,b=d*m,C=d*g,N=r.x,k=r.y,B=r.z;return o[0]=(1-(E+y))*N,o[1]=(x+C)*N,o[2]=(M-b)*N,o[3]=0,o[4]=(x-C)*k,o[5]=(1-(v+y))*k,o[6]=(S+D)*k,o[7]=0,o[8]=(M+b)*B,o[9]=(S-D)*B,o[10]=(1-(v+E))*B,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;let l=eo.set(o[0],o[1],o[2]).length();const u=eo.set(o[4],o[5],o[6]).length(),f=eo.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),e.x=o[12],e.y=o[13],e.z=o[14],yi.copy(this);const h=1/l,m=1/u,g=1/f;return yi.elements[0]*=h,yi.elements[1]*=h,yi.elements[2]*=h,yi.elements[4]*=m,yi.elements[5]*=m,yi.elements[6]*=m,yi.elements[8]*=g,yi.elements[9]*=g,yi.elements[10]*=g,t.setFromRotationMatrix(yi),r.x=l,r.y=u,r.z=f,this}makePerspective(e,t,r,o,l,u,f=Di,d=!1){const h=this.elements,m=2*l/(t-e),g=2*l/(r-o),v=(t+e)/(t-e),x=(r+o)/(r-o);let M,E;if(d)M=l/(u-l),E=u*l/(u-l);else if(f===Di)M=-(u+l)/(u-l),E=-2*u*l/(u-l);else if(f===zu)M=-u/(u-l),E=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=m,h[4]=0,h[8]=v,h[12]=0,h[1]=0,h[5]=g,h[9]=x,h[13]=0,h[2]=0,h[6]=0,h[10]=M,h[14]=E,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,r,o,l,u,f=Di,d=!1){const h=this.elements,m=2/(t-e),g=2/(r-o),v=-(t+e)/(t-e),x=-(r+o)/(r-o);let M,E;if(d)M=1/(u-l),E=u/(u-l);else if(f===Di)M=-2/(u-l),E=-(u+l)/(u-l);else if(f===zu)M=-1/(u-l),E=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=m,h[4]=0,h[8]=0,h[12]=v,h[1]=0,h[5]=g,h[9]=0,h[13]=x,h[2]=0,h[6]=0,h[10]=M,h[14]=E,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const eo=new K,yi=new Yt,fC=new K(0,0,0),dC=new K(1,1,1),Pr=new K,su=new K,jn=new K,w0=new Yt,A0=new Ba;class rr{constructor(e=0,t=0,r=0,o=rr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],u=o[4],f=o[8],d=o[1],h=o[5],m=o[9],g=o[2],v=o[6],x=o[10];switch(t){case"XYZ":this._y=Math.asin(xt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-m,x),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(v,h),this._z=0);break;case"YXZ":this._x=Math.asin(-xt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(f,x),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-g,l),this._z=0);break;case"ZXY":this._x=Math.asin(xt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,x),this._z=Math.atan2(-u,h)):(this._y=0,this._z=Math.atan2(d,l));break;case"ZYX":this._y=Math.asin(-xt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,x),this._z=Math.atan2(d,l)):(this._x=0,this._z=Math.atan2(-u,h));break;case"YZX":this._z=Math.asin(xt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-m,h),this._y=Math.atan2(-g,l)):(this._x=0,this._y=Math.atan2(f,x));break;case"XZY":this._z=Math.asin(-xt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,h),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-m,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return w0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(w0,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return A0.setFromEuler(this),this.setFromQuaternion(A0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}rr.DEFAULT_ORDER="XYZ";class ax{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let hC=0;const C0=new K,to=new Ba,qi=new Yt,ou=new K,ha=new K,pC=new K,mC=new Ba,R0=new K(1,0,0),P0=new K(0,1,0),b0=new K(0,0,1),D0={type:"added"},gC={type:"removed"},no={type:"childadded",child:null},od={type:"childremoved",child:null};class mn extends Ro{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hC++}),this.uuid=ka(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mn.DEFAULT_UP.clone();const e=new K,t=new rr,r=new Ba,o=new K(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Yt},normalMatrix:{value:new ht}}),this.matrix=new Yt,this.matrixWorld=new Yt,this.matrixAutoUpdate=mn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ax,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return to.setFromAxisAngle(e,t),this.quaternion.multiply(to),this}rotateOnWorldAxis(e,t){return to.setFromAxisAngle(e,t),this.quaternion.premultiply(to),this}rotateX(e){return this.rotateOnAxis(R0,e)}rotateY(e){return this.rotateOnAxis(P0,e)}rotateZ(e){return this.rotateOnAxis(b0,e)}translateOnAxis(e,t){return C0.copy(e).applyQuaternion(this.quaternion),this.position.add(C0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(R0,e)}translateY(e){return this.translateOnAxis(P0,e)}translateZ(e){return this.translateOnAxis(b0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(qi.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?ou.copy(e):ou.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),ha.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qi.lookAt(ha,ou,this.up):qi.lookAt(ou,ha,this.up),this.quaternion.setFromRotationMatrix(qi),o&&(qi.extractRotation(o.matrixWorld),to.setFromRotationMatrix(qi),this.quaternion.premultiply(to.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(D0),no.child=e,this.dispatchEvent(no),no.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(gC),od.child=e,this.dispatchEvent(od),od.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),qi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),qi.multiply(e.parent.matrixWorld)),e.applyMatrix4(qi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(D0),no.child=e,this.dispatchEvent(no),no.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ha,e,pC),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ha,mC,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(f,d){return f[d.uuid]===void 0&&(f[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const d=f.shapes;if(Array.isArray(d))for(let h=0,m=d.length;h<m;h++){const g=d[h];l(e.shapes,g)}else l(e.shapes,d)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let d=0,h=this.material.length;d<h;d++)f.push(l(e.materials,this.material[d]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const d=this.animations[f];o.animations.push(l(e.animations,d))}}if(t){const f=u(e.geometries),d=u(e.materials),h=u(e.textures),m=u(e.images),g=u(e.shapes),v=u(e.skeletons),x=u(e.animations),M=u(e.nodes);f.length>0&&(r.geometries=f),d.length>0&&(r.materials=d),h.length>0&&(r.textures=h),m.length>0&&(r.images=m),g.length>0&&(r.shapes=g),v.length>0&&(r.skeletons=v),x.length>0&&(r.animations=x),M.length>0&&(r.nodes=M)}return r.object=o,r;function u(f){const d=[];for(const h in f){const m=f[h];delete m.metadata,d.push(m)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}mn.DEFAULT_UP=new K(0,1,0);mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xi=new K,Yi=new K,ad=new K,$i=new K,io=new K,ro=new K,L0=new K,ld=new K,ud=new K,cd=new K,fd=new Nt,dd=new Nt,hd=new Nt;class Mi{constructor(e=new K,t=new K,r=new K){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),xi.subVectors(e,t),o.cross(xi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){xi.subVectors(o,t),Yi.subVectors(r,t),ad.subVectors(e,t);const u=xi.dot(xi),f=xi.dot(Yi),d=xi.dot(ad),h=Yi.dot(Yi),m=Yi.dot(ad),g=u*h-f*f;if(g===0)return l.set(0,0,0),null;const v=1/g,x=(h*d-f*m)*v,M=(u*m-f*d)*v;return l.set(1-x-M,M,x)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,$i)===null?!1:$i.x>=0&&$i.y>=0&&$i.x+$i.y<=1}static getInterpolation(e,t,r,o,l,u,f,d){return this.getBarycoord(e,t,r,o,$i)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(l,$i.x),d.addScaledVector(u,$i.y),d.addScaledVector(f,$i.z),d)}static getInterpolatedAttribute(e,t,r,o,l,u){return fd.setScalar(0),dd.setScalar(0),hd.setScalar(0),fd.fromBufferAttribute(e,t),dd.fromBufferAttribute(e,r),hd.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(fd,l.x),u.addScaledVector(dd,l.y),u.addScaledVector(hd,l.z),u}static isFrontFacing(e,t,r,o){return xi.subVectors(r,t),Yi.subVectors(e,t),xi.cross(Yi).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xi.subVectors(this.c,this.b),Yi.subVectors(this.a,this.b),xi.cross(Yi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Mi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Mi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return Mi.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return Mi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Mi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let u,f;io.subVectors(o,r),ro.subVectors(l,r),ld.subVectors(e,r);const d=io.dot(ld),h=ro.dot(ld);if(d<=0&&h<=0)return t.copy(r);ud.subVectors(e,o);const m=io.dot(ud),g=ro.dot(ud);if(m>=0&&g<=m)return t.copy(o);const v=d*g-m*h;if(v<=0&&d>=0&&m<=0)return u=d/(d-m),t.copy(r).addScaledVector(io,u);cd.subVectors(e,l);const x=io.dot(cd),M=ro.dot(cd);if(M>=0&&x<=M)return t.copy(l);const E=x*h-d*M;if(E<=0&&h>=0&&M<=0)return f=h/(h-M),t.copy(r).addScaledVector(ro,f);const S=m*M-x*g;if(S<=0&&g-m>=0&&x-M>=0)return L0.subVectors(l,o),f=(g-m)/(g-m+(x-M)),t.copy(o).addScaledVector(L0,f);const y=1/(S+E+v);return u=E*y,f=v*y,t.copy(r).addScaledVector(io,u).addScaledVector(ro,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const lx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},br={h:0,s:0,l:0},au={h:0,s:0,l:0};function pd(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Rt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ai){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=wt.workingColorSpace){return this.r=e,this.g=t,this.b=r,wt.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=wt.workingColorSpace){if(e=tC(e,1),t=xt(t,0,1),r=xt(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=pd(u,l,e+1/3),this.g=pd(u,l,e),this.b=pd(u,l,e-1/3)}return wt.colorSpaceToWorking(this,o),this}setStyle(e,t=ai){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],f=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ai){const r=lx[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=nr(e.r),this.g=nr(e.g),this.b=nr(e.b),this}copyLinearToSRGB(e){return this.r=vo(e.r),this.g=vo(e.g),this.b=vo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ai){return wt.workingToColorSpace(Tn.copy(this),e),Math.round(xt(Tn.r*255,0,255))*65536+Math.round(xt(Tn.g*255,0,255))*256+Math.round(xt(Tn.b*255,0,255))}getHexString(e=ai){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=wt.workingColorSpace){wt.workingToColorSpace(Tn.copy(this),t);const r=Tn.r,o=Tn.g,l=Tn.b,u=Math.max(r,o,l),f=Math.min(r,o,l);let d,h;const m=(f+u)/2;if(f===u)d=0,h=0;else{const g=u-f;switch(h=m<=.5?g/(u+f):g/(2-u-f),u){case r:d=(o-l)/g+(o<l?6:0);break;case o:d=(l-r)/g+2;break;case l:d=(r-o)/g+4;break}d/=6}return e.h=d,e.s=h,e.l=m,e}getRGB(e,t=wt.workingColorSpace){return wt.workingToColorSpace(Tn.copy(this),t),e.r=Tn.r,e.g=Tn.g,e.b=Tn.b,e}getStyle(e=ai){wt.workingToColorSpace(Tn.copy(this),e);const t=Tn.r,r=Tn.g,o=Tn.b;return e!==ai?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(br),this.setHSL(br.h+e,br.s+t,br.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(br),e.getHSL(au);const r=Kf(br.h,au.h,t),o=Kf(br.s,au.s,t),l=Kf(br.l,au.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Tn=new Rt;Rt.NAMES=lx;let vC=0;class za extends Ro{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vC++}),this.uuid=ka(),this.name="",this.type="Material",this.blending=ys,this.side=kr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wd,this.blendDst=Xd,this.blendEquation=hs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rt(0,0,0),this.blendAlpha=0,this.depthFunc=So,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$s,this.stencilZFail=$s,this.stencilZPass=$s,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==ys&&(r.blending=this.blending),this.side!==kr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Wd&&(r.blendSrc=this.blendSrc),this.blendDst!==Xd&&(r.blendDst=this.blendDst),this.blendEquation!==hs&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==So&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_0&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$s&&(r.stencilFail=this.stencilFail),this.stencilZFail!==$s&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==$s&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const u=[];for(const f in l){const d=l[f];delete d.metadata,u.push(d)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ux extends za{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rr,this.combine=qy,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const tn=new K,lu=new At;let _C=0;class ui{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_C++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=y0,this.updateRanges=[],this.gpuType=Qi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)lu.fromBufferAttribute(this,t),lu.applyMatrix3(e),this.setXY(t,lu.x,lu.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix3(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix4(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)tn.fromBufferAttribute(this,t),tn.applyNormalMatrix(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)tn.fromBufferAttribute(this,t),tn.transformDirection(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=ca(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=kn(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ca(t,this.array)),t}setX(e,t){return this.normalized&&(t=kn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ca(t,this.array)),t}setY(e,t){return this.normalized&&(t=kn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ca(t,this.array)),t}setZ(e,t){return this.normalized&&(t=kn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ca(t,this.array)),t}setW(e,t){return this.normalized&&(t=kn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=kn(t,this.array),r=kn(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=kn(t,this.array),r=kn(r,this.array),o=kn(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=kn(t,this.array),r=kn(r,this.array),o=kn(o,this.array),l=kn(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==y0&&(e.usage=this.usage),e}}class cx extends ui{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class fx extends ui{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class xs extends ui{constructor(e,t,r){super(new Float32Array(e),t,r)}}let yC=0;const si=new Yt,md=new mn,so=new K,qn=new Va,pa=new Va,fn=new K;class sr extends Ro{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yC++}),this.uuid=ka(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(rx(e)?fx:cx)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new ht().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return si.makeRotationFromQuaternion(e),this.applyMatrix4(si),this}rotateX(e){return si.makeRotationX(e),this.applyMatrix4(si),this}rotateY(e){return si.makeRotationY(e),this.applyMatrix4(si),this}rotateZ(e){return si.makeRotationZ(e),this.applyMatrix4(si),this}translate(e,t,r){return si.makeTranslation(e,t,r),this.applyMatrix4(si),this}scale(e,t,r){return si.makeScale(e,t,r),this.applyMatrix4(si),this}lookAt(e){return md.lookAt(e),md.updateMatrix(),this.applyMatrix4(md.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(so).negate(),this.translate(so.x,so.y,so.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new xs(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Va);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];qn.setFromBufferAttribute(l),this.morphTargetsRelative?(fn.addVectors(this.boundingBox.min,qn.min),this.boundingBox.expandByPoint(fn),fn.addVectors(this.boundingBox.max,qn.max),this.boundingBox.expandByPoint(fn)):(this.boundingBox.expandByPoint(qn.min),this.boundingBox.expandByPoint(qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $u);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(e){const r=this.boundingSphere.center;if(qn.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const f=t[l];pa.setFromBufferAttribute(f),this.morphTargetsRelative?(fn.addVectors(qn.min,pa.min),qn.expandByPoint(fn),fn.addVectors(qn.max,pa.max),qn.expandByPoint(fn)):(qn.expandByPoint(pa.min),qn.expandByPoint(pa.max))}qn.getCenter(r);let o=0;for(let l=0,u=e.count;l<u;l++)fn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(fn));if(t)for(let l=0,u=t.length;l<u;l++){const f=t[l],d=this.morphTargetsRelative;for(let h=0,m=f.count;h<m;h++)fn.fromBufferAttribute(f,h),d&&(so.fromBufferAttribute(e,h),fn.add(so)),o=Math.max(o,r.distanceToSquared(fn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ui(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),f=[],d=[];for(let z=0;z<r.count;z++)f[z]=new K,d[z]=new K;const h=new K,m=new K,g=new K,v=new At,x=new At,M=new At,E=new K,S=new K;function y(z,P,R){h.fromBufferAttribute(r,z),m.fromBufferAttribute(r,P),g.fromBufferAttribute(r,R),v.fromBufferAttribute(l,z),x.fromBufferAttribute(l,P),M.fromBufferAttribute(l,R),m.sub(h),g.sub(h),x.sub(v),M.sub(v);const F=1/(x.x*M.y-M.x*x.y);isFinite(F)&&(E.copy(m).multiplyScalar(M.y).addScaledVector(g,-x.y).multiplyScalar(F),S.copy(g).multiplyScalar(x.x).addScaledVector(m,-M.x).multiplyScalar(F),f[z].add(E),f[P].add(E),f[R].add(E),d[z].add(S),d[P].add(S),d[R].add(S))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let z=0,P=D.length;z<P;++z){const R=D[z],F=R.start,le=R.count;for(let te=F,se=F+le;te<se;te+=3)y(e.getX(te+0),e.getX(te+1),e.getX(te+2))}const b=new K,C=new K,N=new K,k=new K;function B(z){N.fromBufferAttribute(o,z),k.copy(N);const P=f[z];b.copy(P),b.sub(N.multiplyScalar(N.dot(P))).normalize(),C.crossVectors(k,P);const F=C.dot(d[z])<0?-1:1;u.setXYZW(z,b.x,b.y,b.z,F)}for(let z=0,P=D.length;z<P;++z){const R=D[z],F=R.start,le=R.count;for(let te=F,se=F+le;te<se;te+=3)B(e.getX(te+0)),B(e.getX(te+1)),B(e.getX(te+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new ui(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let v=0,x=r.count;v<x;v++)r.setXYZ(v,0,0,0);const o=new K,l=new K,u=new K,f=new K,d=new K,h=new K,m=new K,g=new K;if(e)for(let v=0,x=e.count;v<x;v+=3){const M=e.getX(v+0),E=e.getX(v+1),S=e.getX(v+2);o.fromBufferAttribute(t,M),l.fromBufferAttribute(t,E),u.fromBufferAttribute(t,S),m.subVectors(u,l),g.subVectors(o,l),m.cross(g),f.fromBufferAttribute(r,M),d.fromBufferAttribute(r,E),h.fromBufferAttribute(r,S),f.add(m),d.add(m),h.add(m),r.setXYZ(M,f.x,f.y,f.z),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(S,h.x,h.y,h.z)}else for(let v=0,x=t.count;v<x;v+=3)o.fromBufferAttribute(t,v+0),l.fromBufferAttribute(t,v+1),u.fromBufferAttribute(t,v+2),m.subVectors(u,l),g.subVectors(o,l),m.cross(g),r.setXYZ(v+0,m.x,m.y,m.z),r.setXYZ(v+1,m.x,m.y,m.z),r.setXYZ(v+2,m.x,m.y,m.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)fn.fromBufferAttribute(e,t),fn.normalize(),e.setXYZ(t,fn.x,fn.y,fn.z)}toNonIndexed(){function e(f,d){const h=f.array,m=f.itemSize,g=f.normalized,v=new h.constructor(d.length*m);let x=0,M=0;for(let E=0,S=d.length;E<S;E++){f.isInterleavedBufferAttribute?x=d[E]*f.data.stride+f.offset:x=d[E]*m;for(let y=0;y<m;y++)v[M++]=h[x++]}return new ui(v,m,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new sr,r=this.index.array,o=this.attributes;for(const f in o){const d=o[f],h=e(d,r);t.setAttribute(f,h)}const l=this.morphAttributes;for(const f in l){const d=[],h=l[f];for(let m=0,g=h.length;m<g;m++){const v=h[m],x=e(v,r);d.push(x)}t.morphAttributes[f]=d}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,d=u.length;f<d;f++){const h=u[f];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const d in r){const h=r[d];e.data.attributes[d]=h.toJSON(e.data)}const o={};let l=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],m=[];for(let g=0,v=h.length;g<v;g++){const x=h[g];m.push(x.toJSON(e.data))}m.length>0&&(o[d]=m,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const h in o){const m=o[h];this.setAttribute(h,m.clone(t))}const l=e.morphAttributes;for(const h in l){const m=[],g=l[h];for(let v=0,x=g.length;v<x;v++)m.push(g[v].clone(t));this.morphAttributes[h]=m}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let h=0,m=u.length;h<m;h++){const g=u[h];this.addGroup(g.start,g.count,g.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const I0=new Yt,ss=new ox,uu=new $u,N0=new K,cu=new K,fu=new K,du=new K,gd=new K,hu=new K,U0=new K,pu=new K;class Ji extends mn{constructor(e=new sr,t=new ux){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){hu.set(0,0,0);for(let d=0,h=l.length;d<h;d++){const m=f[d],g=l[d];m!==0&&(gd.fromBufferAttribute(g,e),u?hu.addScaledVector(gd,m):hu.addScaledVector(gd.sub(t),m))}t.add(hu)}return t}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),uu.copy(r.boundingSphere),uu.applyMatrix4(l),ss.copy(e.ray).recast(e.near),!(uu.containsPoint(ss.origin)===!1&&(ss.intersectSphere(uu,N0)===null||ss.origin.distanceToSquared(N0)>(e.far-e.near)**2))&&(I0.copy(l).invert(),ss.copy(e.ray).applyMatrix4(I0),!(r.boundingBox!==null&&ss.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,ss)))}_computeIntersections(e,t,r){let o;const l=this.geometry,u=this.material,f=l.index,d=l.attributes.position,h=l.attributes.uv,m=l.attributes.uv1,g=l.attributes.normal,v=l.groups,x=l.drawRange;if(f!==null)if(Array.isArray(u))for(let M=0,E=v.length;M<E;M++){const S=v[M],y=u[S.materialIndex],D=Math.max(S.start,x.start),b=Math.min(f.count,Math.min(S.start+S.count,x.start+x.count));for(let C=D,N=b;C<N;C+=3){const k=f.getX(C),B=f.getX(C+1),z=f.getX(C+2);o=mu(this,y,e,r,h,m,g,k,B,z),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const M=Math.max(0,x.start),E=Math.min(f.count,x.start+x.count);for(let S=M,y=E;S<y;S+=3){const D=f.getX(S),b=f.getX(S+1),C=f.getX(S+2);o=mu(this,u,e,r,h,m,g,D,b,C),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}else if(d!==void 0)if(Array.isArray(u))for(let M=0,E=v.length;M<E;M++){const S=v[M],y=u[S.materialIndex],D=Math.max(S.start,x.start),b=Math.min(d.count,Math.min(S.start+S.count,x.start+x.count));for(let C=D,N=b;C<N;C+=3){const k=C,B=C+1,z=C+2;o=mu(this,y,e,r,h,m,g,k,B,z),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const M=Math.max(0,x.start),E=Math.min(d.count,x.start+x.count);for(let S=M,y=E;S<y;S+=3){const D=S,b=S+1,C=S+2;o=mu(this,u,e,r,h,m,g,D,b,C),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}}}function xC(n,e,t,r,o,l,u,f){let d;if(e.side===Bn?d=r.intersectTriangle(u,l,o,!0,f):d=r.intersectTriangle(o,l,u,e.side===kr,f),d===null)return null;pu.copy(f),pu.applyMatrix4(n.matrixWorld);const h=t.ray.origin.distanceTo(pu);return h<t.near||h>t.far?null:{distance:h,point:pu.clone(),object:n}}function mu(n,e,t,r,o,l,u,f,d,h){n.getVertexPosition(f,cu),n.getVertexPosition(d,fu),n.getVertexPosition(h,du);const m=xC(n,e,t,r,cu,fu,du,U0);if(m){const g=new K;Mi.getBarycoord(U0,cu,fu,du,g),o&&(m.uv=Mi.getInterpolatedAttribute(o,f,d,h,g,new At)),l&&(m.uv1=Mi.getInterpolatedAttribute(l,f,d,h,g,new At)),u&&(m.normal=Mi.getInterpolatedAttribute(u,f,d,h,g,new K),m.normal.dot(r.direction)>0&&m.normal.multiplyScalar(-1));const v={a:f,b:d,c:h,normal:new K,materialIndex:0};Mi.getNormal(cu,fu,du,v.normal),m.face=v,m.barycoord=g}return m}class Ha extends sr{constructor(e=1,t=1,r=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:u};const f=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const d=[],h=[],m=[],g=[];let v=0,x=0;M("z","y","x",-1,-1,r,t,e,u,l,0),M("z","y","x",1,-1,r,t,-e,u,l,1),M("x","z","y",1,1,e,r,t,o,u,2),M("x","z","y",1,-1,e,r,-t,o,u,3),M("x","y","z",1,-1,e,t,r,o,l,4),M("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(d),this.setAttribute("position",new xs(h,3)),this.setAttribute("normal",new xs(m,3)),this.setAttribute("uv",new xs(g,2));function M(E,S,y,D,b,C,N,k,B,z,P){const R=C/B,F=N/z,le=C/2,te=N/2,se=k/2,ce=B+1,ae=z+1;let re=0,V=0;const oe=new K;for(let ie=0;ie<ae;ie++){const U=ie*F-te;for(let J=0;J<ce;J++){const Oe=J*R-le;oe[E]=Oe*D,oe[S]=U*b,oe[y]=se,h.push(oe.x,oe.y,oe.z),oe[E]=0,oe[S]=0,oe[y]=k>0?1:-1,m.push(oe.x,oe.y,oe.z),g.push(J/B),g.push(1-ie/z),re+=1}}for(let ie=0;ie<z;ie++)for(let U=0;U<B;U++){const J=v+U+ce*ie,Oe=v+U+ce*(ie+1),me=v+(U+1)+ce*(ie+1),Y=v+(U+1)+ce*ie;d.push(J,Oe,Y),d.push(Oe,me,Y),V+=6}f.addGroup(x,V,P),x+=V,v+=re}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ha(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function wo(n){const e={};for(const t in n){e[t]={};for(const r in n[t]){const o=n[t][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone():Array.isArray(o)?e[t][r]=o.slice():e[t][r]=o}}return e}function Dn(n){const e={};for(let t=0;t<n.length;t++){const r=wo(n[t]);for(const o in r)e[o]=r[o]}return e}function SC(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function dx(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:wt.workingColorSpace}const MC={clone:wo,merge:Dn};var EC=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,TC=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Br extends za{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=EC,this.fragmentShader=TC,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=wo(e.uniforms),this.uniformsGroups=SC(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class hx extends mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Yt,this.projectionMatrix=new Yt,this.projectionMatrixInverse=new Yt,this.coordinateSystem=Di,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Dr=new K,F0=new At,O0=new At;class Yn extends hx{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ph*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan($f*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ph*2*Math.atan(Math.tan($f*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Dr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Dr.x,Dr.y).multiplyScalar(-e/Dr.z),Dr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Dr.x,Dr.y).multiplyScalar(-e/Dr.z)}getViewSize(e,t){return this.getViewBounds(e,F0,O0),t.subVectors(O0,F0)}setViewOffset(e,t,r,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan($f*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const d=u.fullWidth,h=u.fullHeight;l+=u.offsetX*o/d,t-=u.offsetY*r/h,o*=u.width/d,r*=u.height/h}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const oo=-90,ao=1;class wC extends mn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Yn(oo,ao,e,t);o.layers=this.layers,this.add(o);const l=new Yn(oo,ao,e,t);l.layers=this.layers,this.add(l);const u=new Yn(oo,ao,e,t);u.layers=this.layers,this.add(u);const f=new Yn(oo,ao,e,t);f.layers=this.layers,this.add(f);const d=new Yn(oo,ao,e,t);d.layers=this.layers,this.add(d);const h=new Yn(oo,ao,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,u,f,d]=t;for(const h of t)this.remove(h);if(e===Di)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===zu)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,f,d,h,m]=this.children,g=e.getRenderTarget(),v=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const E=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(t,l),e.setRenderTarget(r,1,o),e.render(t,u),e.setRenderTarget(r,2,o),e.render(t,f),e.setRenderTarget(r,3,o),e.render(t,d),e.setRenderTarget(r,4,o),e.render(t,h),r.texture.generateMipmaps=E,e.setRenderTarget(r,5,o),e.render(t,m),e.setRenderTarget(g,v,x),e.xr.enabled=M,r.texture.needsPMREMUpdate=!0}}class px extends Vn{constructor(e=[],t=Mo,r,o,l,u,f,d,h,m){super(e,t,r,o,l,u,f,d,h,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class AC extends Ms{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new px(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new Ha(5,5,5),l=new Br({name:"CubemapFromEquirect",uniforms:wo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Bn,blending:Nr});l.uniforms.tEquirect.value=t;const u=new Ji(o,l),f=t.minFilter;return t.minFilter===vs&&(t.minFilter=bi),new wC(1,10,this).update(e,u),t.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,o);e.setRenderTarget(l)}}class gu extends mn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const CC={type:"move"};class vd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,u=null;const f=this._targetRay,d=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){u=!0;for(const E of e.hand.values()){const S=t.getJointPose(E,r),y=this._getHandJoint(h,E);S!==null&&(y.matrix.fromArray(S.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=S.radius),y.visible=S!==null}const m=h.joints["index-finger-tip"],g=h.joints["thumb-tip"],v=m.position.distanceTo(g.position),x=.02,M=.005;h.inputState.pinching&&v>x+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&v<=x-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1));f!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(CC)))}return f!==null&&(f.visible=o!==null),d!==null&&(d.visible=l!==null),h!==null&&(h.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new gu;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}class RC extends mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new rr,this.environmentIntensity=1,this.environmentRotation=new rr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const _d=new K,PC=new K,bC=new ht;class fs{constructor(e=new K(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=_d.subVectors(r,t).cross(PC.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(_d),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||bC.getNormalMatrix(e),o=this.coplanarPoint(_d).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const os=new $u,DC=new At(.5,.5),vu=new K;class yp{constructor(e=new fs,t=new fs,r=new fs,o=new fs,l=new fs,u=new fs){this.planes=[e,t,r,o,l,u]}set(e,t,r,o,l,u){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(r),f[3].copy(o),f[4].copy(l),f[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Di,r=!1){const o=this.planes,l=e.elements,u=l[0],f=l[1],d=l[2],h=l[3],m=l[4],g=l[5],v=l[6],x=l[7],M=l[8],E=l[9],S=l[10],y=l[11],D=l[12],b=l[13],C=l[14],N=l[15];if(o[0].setComponents(h-u,x-m,y-M,N-D).normalize(),o[1].setComponents(h+u,x+m,y+M,N+D).normalize(),o[2].setComponents(h+f,x+g,y+E,N+b).normalize(),o[3].setComponents(h-f,x-g,y-E,N-b).normalize(),r)o[4].setComponents(d,v,S,C).normalize(),o[5].setComponents(h-d,x-v,y-S,N-C).normalize();else if(o[4].setComponents(h-d,x-v,y-S,N-C).normalize(),t===Di)o[5].setComponents(h+d,x+v,y+S,N+C).normalize();else if(t===zu)o[5].setComponents(d,v,S,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),os.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),os.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(os)}intersectsSprite(e){os.center.set(0,0,0);const t=DC.distanceTo(e.center);return os.radius=.7071067811865476+t,os.applyMatrix4(e.matrixWorld),this.intersectsSphere(os)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(vu.x=o.normal.x>0?e.max.x:e.min.x,vu.y=o.normal.y>0?e.max.y:e.min.y,vu.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(vu)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class mx extends za{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const k0=new Yt,bh=new ox,_u=new $u,yu=new K;class LC extends mn{constructor(e=new sr,t=new mx){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Points.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),_u.copy(r.boundingSphere),_u.applyMatrix4(o),_u.radius+=l,e.ray.intersectsSphere(_u)===!1)return;k0.copy(o).invert(),bh.copy(e.ray).applyMatrix4(k0);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),d=f*f,h=r.index,g=r.attributes.position;if(h!==null){const v=Math.max(0,u.start),x=Math.min(h.count,u.start+u.count);for(let M=v,E=x;M<E;M++){const S=h.getX(M);yu.fromBufferAttribute(g,S),B0(yu,S,d,o,e,t,this)}}else{const v=Math.max(0,u.start),x=Math.min(g.count,u.start+u.count);for(let M=v,E=x;M<E;M++)yu.fromBufferAttribute(g,M),B0(yu,M,d,o,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function B0(n,e,t,r,o,l,u){const f=bh.distanceSqToPoint(n);if(f<t){const d=new K;bh.closestPointToPoint(n,d),d.applyMatrix4(r);const h=o.ray.origin.distanceTo(d);if(h<o.near||h>o.far)return;l.push({distance:h,distanceToRay:Math.sqrt(f),point:d,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class gx extends Vn{constructor(e,t,r=Ss,o,l,u,f=Ti,d=Ti,h,m=Da,g=1){if(m!==Da&&m!==La)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:t,depth:g};super(v,o,l,u,f,d,m,r,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new _p(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ku extends sr{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,u=t/2,f=Math.floor(r),d=Math.floor(o),h=f+1,m=d+1,g=e/f,v=t/d,x=[],M=[],E=[],S=[];for(let y=0;y<m;y++){const D=y*v-u;for(let b=0;b<h;b++){const C=b*g-l;M.push(C,-D,0),E.push(0,0,1),S.push(b/f),S.push(1-y/d)}}for(let y=0;y<d;y++)for(let D=0;D<f;D++){const b=D+h*y,C=D+h*(y+1),N=D+1+h*(y+1),k=D+1+h*y;x.push(b,C,k),x.push(C,N,k)}this.setIndex(x),this.setAttribute("position",new xs(M,3)),this.setAttribute("normal",new xs(E,3)),this.setAttribute("uv",new xs(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ku(e.width,e.height,e.widthSegments,e.heightSegments)}}class IC extends za{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=WA,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class NC extends za{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class xp extends mn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Rt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const yd=new Yt,V0=new K,z0=new K;class vx{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new At(512,512),this.mapType=Ni,this.map=null,this.mapPass=null,this.matrix=new Yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yp,this._frameExtents=new At(1,1),this._viewportCount=1,this._viewports=[new Nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;V0.setFromMatrixPosition(e.matrixWorld),t.position.copy(V0),z0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(z0),t.updateMatrixWorld(),yd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yd,t.coordinateSystem,t.reversedDepth),t.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(yd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const H0=new Yt,ma=new K,xd=new K;class UC extends vx{constructor(){super(new Yn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new At(4,2),this._viewportCount=6,this._viewports=[new Nt(2,1,1,1),new Nt(0,1,1,1),new Nt(3,1,1,1),new Nt(1,1,1,1),new Nt(3,0,1,1),new Nt(1,0,1,1)],this._cubeDirections=[new K(1,0,0),new K(-1,0,0),new K(0,0,1),new K(0,0,-1),new K(0,1,0),new K(0,-1,0)],this._cubeUps=[new K(0,1,0),new K(0,1,0),new K(0,1,0),new K(0,1,0),new K(0,0,1),new K(0,0,-1)]}updateMatrices(e,t=0){const r=this.camera,o=this.matrix,l=e.distance||r.far;l!==r.far&&(r.far=l,r.updateProjectionMatrix()),ma.setFromMatrixPosition(e.matrixWorld),r.position.copy(ma),xd.copy(r.position),xd.add(this._cubeDirections[t]),r.up.copy(this._cubeUps[t]),r.lookAt(xd),r.updateMatrixWorld(),o.makeTranslation(-ma.x,-ma.y,-ma.z),H0.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(H0,r.coordinateSystem,r.reversedDepth)}}class xu extends xp{constructor(e,t,r=0,o=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=o,this.shadow=new UC}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class _x extends hx{constructor(e=-1,t=1,r=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,u=r+e,f=o+t,d=o-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=h*this.view.offsetX,u=l+h*this.view.width,f-=m*this.view.offsetY,d=f-m*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,d,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class FC extends vx{constructor(){super(new _x(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class OC extends xp{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mn.DEFAULT_UP),this.updateMatrix(),this.target=new mn,this.shadow=new FC}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class kC extends xp{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class BC extends Yn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function G0(n,e,t,r){const o=VC(r);switch(t){case Qy:return n*e;case ex:return n*e/o.components*o.byteLength;case mp:return n*e/o.components*o.byteLength;case tx:return n*e*2/o.components*o.byteLength;case gp:return n*e*2/o.components*o.byteLength;case Jy:return n*e*3/o.components*o.byteLength;case Ei:return n*e*4/o.components*o.byteLength;case vp:return n*e*4/o.components*o.byteLength;case Cu:case Ru:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Pu:case bu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case rh:case oh:return Math.max(n,16)*Math.max(e,8)/4;case ih:case sh:return Math.max(n,8)*Math.max(e,8)/2;case ah:case lh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case uh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ch:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case fh:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case dh:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case hh:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case ph:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case mh:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case gh:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case vh:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case _h:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case yh:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case xh:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Sh:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Mh:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Eh:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Du:case Th:case wh:return Math.ceil(n/4)*Math.ceil(e/4)*16;case nx:case Ah:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Ch:case Rh:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function VC(n){switch(n){case Ni:case $y:return{byteLength:1,components:1};case Pa:case Ky:case Oa:return{byteLength:2,components:1};case hp:case pp:return{byteLength:2,components:4};case Ss:case dp:case Qi:return{byteLength:4,components:1};case Zy:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fp);function yx(){let n=null,e=!1,t=null,r=null;function o(l,u){t(l,u),r=n.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(r=n.requestAnimationFrame(o),e=!0)},stop:function(){n.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){n=l}}}function zC(n){const e=new WeakMap;function t(f,d){const h=f.array,m=f.usage,g=h.byteLength,v=n.createBuffer();n.bindBuffer(d,v),n.bufferData(d,h,m),f.onUploadCallback();let x;if(h instanceof Float32Array)x=n.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)x=n.HALF_FLOAT;else if(h instanceof Uint16Array)f.isFloat16BufferAttribute?x=n.HALF_FLOAT:x=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)x=n.SHORT;else if(h instanceof Uint32Array)x=n.UNSIGNED_INT;else if(h instanceof Int32Array)x=n.INT;else if(h instanceof Int8Array)x=n.BYTE;else if(h instanceof Uint8Array)x=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)x=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:v,type:x,bytesPerElement:h.BYTES_PER_ELEMENT,version:f.version,size:g}}function r(f,d,h){const m=d.array,g=d.updateRanges;if(n.bindBuffer(h,f),g.length===0)n.bufferSubData(h,0,m);else{g.sort((x,M)=>x.start-M.start);let v=0;for(let x=1;x<g.length;x++){const M=g[v],E=g[x];E.start<=M.start+M.count+1?M.count=Math.max(M.count,E.start+E.count-M.start):(++v,g[v]=E)}g.length=v+1;for(let x=0,M=g.length;x<M;x++){const E=g[x];n.bufferSubData(h,E.start*m.BYTES_PER_ELEMENT,m,E.start,E.count)}d.clearUpdateRanges()}d.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const d=e.get(f);d&&(n.deleteBuffer(d.buffer),e.delete(f))}function u(f,d){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const m=e.get(f);(!m||m.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const h=e.get(f);if(h===void 0)e.set(f,t(f,d));else if(h.version<f.version){if(h.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,f,d),h.version=f.version}}return{get:o,remove:l,update:u}}var HC=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,GC=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,WC=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,XC=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jC=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qC=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,YC=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,$C=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,KC=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,ZC=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,QC=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,JC=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,eR=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,tR=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,nR=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,iR=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,rR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,oR=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,aR=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,lR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,uR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,cR=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,fR=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,dR=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,hR=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,pR=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mR=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gR=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vR=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_R="gl_FragColor = linearToOutputTexel( gl_FragColor );",yR=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,SR=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,MR=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ER=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,TR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,wR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,AR=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,CR=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,RR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,PR=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,bR=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,DR=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,LR=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,IR=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,NR=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,UR=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,FR=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,OR=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kR=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,BR=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,VR=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,zR=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,HR=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,GR=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,WR=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,XR=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jR=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qR=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,YR=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$R=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,KR=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ZR=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,QR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,JR=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,eP=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tP=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nP=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,iP=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,rP=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sP=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,oP=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,aP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uP=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cP=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,fP=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dP=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hP=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pP=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mP=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gP=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,vP=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_P=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yP=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xP=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,SP=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,MP=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,EP=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSEDEPTHBUF
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSEDEPTHBUF
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare , distribution.x );
		#endif
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,TP=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,wP=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,AP=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,CP=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,RP=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,PP=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bP=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,DP=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,LP=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,IP=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,NP=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,UP=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,FP=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,OP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,kP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,BP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,VP=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const zP=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,HP=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,WP=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jP=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qP=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,YP=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSEDEPTHBUF
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,$P=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,KP=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ZP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,QP=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JP=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,eb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,nb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ib=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ob=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ab=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,lb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ub=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,db=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,gb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_b=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,yb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pt={alphahash_fragment:HC,alphahash_pars_fragment:GC,alphamap_fragment:WC,alphamap_pars_fragment:XC,alphatest_fragment:jC,alphatest_pars_fragment:qC,aomap_fragment:YC,aomap_pars_fragment:$C,batching_pars_vertex:KC,batching_vertex:ZC,begin_vertex:QC,beginnormal_vertex:JC,bsdfs:eR,iridescence_fragment:tR,bumpmap_pars_fragment:nR,clipping_planes_fragment:iR,clipping_planes_pars_fragment:rR,clipping_planes_pars_vertex:sR,clipping_planes_vertex:oR,color_fragment:aR,color_pars_fragment:lR,color_pars_vertex:uR,color_vertex:cR,common:fR,cube_uv_reflection_fragment:dR,defaultnormal_vertex:hR,displacementmap_pars_vertex:pR,displacementmap_vertex:mR,emissivemap_fragment:gR,emissivemap_pars_fragment:vR,colorspace_fragment:_R,colorspace_pars_fragment:yR,envmap_fragment:xR,envmap_common_pars_fragment:SR,envmap_pars_fragment:MR,envmap_pars_vertex:ER,envmap_physical_pars_fragment:NR,envmap_vertex:TR,fog_vertex:wR,fog_pars_vertex:AR,fog_fragment:CR,fog_pars_fragment:RR,gradientmap_pars_fragment:PR,lightmap_pars_fragment:bR,lights_lambert_fragment:DR,lights_lambert_pars_fragment:LR,lights_pars_begin:IR,lights_toon_fragment:UR,lights_toon_pars_fragment:FR,lights_phong_fragment:OR,lights_phong_pars_fragment:kR,lights_physical_fragment:BR,lights_physical_pars_fragment:VR,lights_fragment_begin:zR,lights_fragment_maps:HR,lights_fragment_end:GR,logdepthbuf_fragment:WR,logdepthbuf_pars_fragment:XR,logdepthbuf_pars_vertex:jR,logdepthbuf_vertex:qR,map_fragment:YR,map_pars_fragment:$R,map_particle_fragment:KR,map_particle_pars_fragment:ZR,metalnessmap_fragment:QR,metalnessmap_pars_fragment:JR,morphinstance_vertex:eP,morphcolor_vertex:tP,morphnormal_vertex:nP,morphtarget_pars_vertex:iP,morphtarget_vertex:rP,normal_fragment_begin:sP,normal_fragment_maps:oP,normal_pars_fragment:aP,normal_pars_vertex:lP,normal_vertex:uP,normalmap_pars_fragment:cP,clearcoat_normal_fragment_begin:fP,clearcoat_normal_fragment_maps:dP,clearcoat_pars_fragment:hP,iridescence_pars_fragment:pP,opaque_fragment:mP,packing:gP,premultiplied_alpha_fragment:vP,project_vertex:_P,dithering_fragment:yP,dithering_pars_fragment:xP,roughnessmap_fragment:SP,roughnessmap_pars_fragment:MP,shadowmap_pars_fragment:EP,shadowmap_pars_vertex:TP,shadowmap_vertex:wP,shadowmask_pars_fragment:AP,skinbase_vertex:CP,skinning_pars_vertex:RP,skinning_vertex:PP,skinnormal_vertex:bP,specularmap_fragment:DP,specularmap_pars_fragment:LP,tonemapping_fragment:IP,tonemapping_pars_fragment:NP,transmission_fragment:UP,transmission_pars_fragment:FP,uv_pars_fragment:OP,uv_pars_vertex:kP,uv_vertex:BP,worldpos_vertex:VP,background_vert:zP,background_frag:HP,backgroundCube_vert:GP,backgroundCube_frag:WP,cube_vert:XP,cube_frag:jP,depth_vert:qP,depth_frag:YP,distanceRGBA_vert:$P,distanceRGBA_frag:KP,equirect_vert:ZP,equirect_frag:QP,linedashed_vert:JP,linedashed_frag:eb,meshbasic_vert:tb,meshbasic_frag:nb,meshlambert_vert:ib,meshlambert_frag:rb,meshmatcap_vert:sb,meshmatcap_frag:ob,meshnormal_vert:ab,meshnormal_frag:lb,meshphong_vert:ub,meshphong_frag:cb,meshphysical_vert:fb,meshphysical_frag:db,meshtoon_vert:hb,meshtoon_frag:pb,points_vert:mb,points_frag:gb,shadow_vert:vb,shadow_frag:_b,sprite_vert:yb,sprite_frag:xb},Le={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new At(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new At(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},Pi={basic:{uniforms:Dn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:Dn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Rt(0)}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:Dn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:Dn([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:Dn([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new Rt(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:Dn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:Dn([Le.points,Le.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:Dn([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:Dn([Le.common,Le.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:Dn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:Dn([Le.sprite,Le.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distanceRGBA:{uniforms:Dn([Le.common,Le.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distanceRGBA_vert,fragmentShader:pt.distanceRGBA_frag},shadow:{uniforms:Dn([Le.lights,Le.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};Pi.physical={uniforms:Dn([Pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new At(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new At},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new At},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const Su={r:0,b:0,g:0},as=new rr,Sb=new Yt;function Mb(n,e,t,r,o,l,u){const f=new Rt(0);let d=l===!0?0:1,h,m,g=null,v=0,x=null;function M(b){let C=b.isScene===!0?b.background:null;return C&&C.isTexture&&(C=(b.backgroundBlurriness>0?t:e).get(C)),C}function E(b){let C=!1;const N=M(b);N===null?y(f,d):N&&N.isColor&&(y(N,1),C=!0);const k=n.xr.getEnvironmentBlendMode();k==="additive"?r.buffers.color.setClear(0,0,0,1,u):k==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,u),(n.autoClear||C)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function S(b,C){const N=M(C);N&&(N.isCubeTexture||N.mapping===Yu)?(m===void 0&&(m=new Ji(new Ha(1,1,1),new Br({name:"BackgroundCubeMaterial",uniforms:wo(Pi.backgroundCube.uniforms),vertexShader:Pi.backgroundCube.vertexShader,fragmentShader:Pi.backgroundCube.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(k,B,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(m)),as.copy(C.backgroundRotation),as.x*=-1,as.y*=-1,as.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(as.y*=-1,as.z*=-1),m.material.uniforms.envMap.value=N,m.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(Sb.makeRotationFromEuler(as)),m.material.toneMapped=wt.getTransfer(N.colorSpace)!==It,(g!==N||v!==N.version||x!==n.toneMapping)&&(m.material.needsUpdate=!0,g=N,v=N.version,x=n.toneMapping),m.layers.enableAll(),b.unshift(m,m.geometry,m.material,0,0,null)):N&&N.isTexture&&(h===void 0&&(h=new Ji(new Ku(2,2),new Br({name:"BackgroundMaterial",uniforms:wo(Pi.background.uniforms),vertexShader:Pi.background.vertexShader,fragmentShader:Pi.background.fragmentShader,side:kr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(h)),h.material.uniforms.t2D.value=N,h.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,h.material.toneMapped=wt.getTransfer(N.colorSpace)!==It,N.matrixAutoUpdate===!0&&N.updateMatrix(),h.material.uniforms.uvTransform.value.copy(N.matrix),(g!==N||v!==N.version||x!==n.toneMapping)&&(h.material.needsUpdate=!0,g=N,v=N.version,x=n.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null))}function y(b,C){b.getRGB(Su,dx(n)),r.buffers.color.setClear(Su.r,Su.g,Su.b,C,u)}function D(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return f},setClearColor:function(b,C=1){f.set(b),d=C,y(f,d)},getClearAlpha:function(){return d},setClearAlpha:function(b){d=b,y(f,d)},render:E,addToRenderList:S,dispose:D}}function Eb(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),r={},o=v(null);let l=o,u=!1;function f(R,F,le,te,se){let ce=!1;const ae=g(te,le,F);l!==ae&&(l=ae,h(l.object)),ce=x(R,te,le,se),ce&&M(R,te,le,se),se!==null&&e.update(se,n.ELEMENT_ARRAY_BUFFER),(ce||u)&&(u=!1,C(R,F,le,te),se!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(se).buffer))}function d(){return n.createVertexArray()}function h(R){return n.bindVertexArray(R)}function m(R){return n.deleteVertexArray(R)}function g(R,F,le){const te=le.wireframe===!0;let se=r[R.id];se===void 0&&(se={},r[R.id]=se);let ce=se[F.id];ce===void 0&&(ce={},se[F.id]=ce);let ae=ce[te];return ae===void 0&&(ae=v(d()),ce[te]=ae),ae}function v(R){const F=[],le=[],te=[];for(let se=0;se<t;se++)F[se]=0,le[se]=0,te[se]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:le,attributeDivisors:te,object:R,attributes:{},index:null}}function x(R,F,le,te){const se=l.attributes,ce=F.attributes;let ae=0;const re=le.getAttributes();for(const V in re)if(re[V].location>=0){const ie=se[V];let U=ce[V];if(U===void 0&&(V==="instanceMatrix"&&R.instanceMatrix&&(U=R.instanceMatrix),V==="instanceColor"&&R.instanceColor&&(U=R.instanceColor)),ie===void 0||ie.attribute!==U||U&&ie.data!==U.data)return!0;ae++}return l.attributesNum!==ae||l.index!==te}function M(R,F,le,te){const se={},ce=F.attributes;let ae=0;const re=le.getAttributes();for(const V in re)if(re[V].location>=0){let ie=ce[V];ie===void 0&&(V==="instanceMatrix"&&R.instanceMatrix&&(ie=R.instanceMatrix),V==="instanceColor"&&R.instanceColor&&(ie=R.instanceColor));const U={};U.attribute=ie,ie&&ie.data&&(U.data=ie.data),se[V]=U,ae++}l.attributes=se,l.attributesNum=ae,l.index=te}function E(){const R=l.newAttributes;for(let F=0,le=R.length;F<le;F++)R[F]=0}function S(R){y(R,0)}function y(R,F){const le=l.newAttributes,te=l.enabledAttributes,se=l.attributeDivisors;le[R]=1,te[R]===0&&(n.enableVertexAttribArray(R),te[R]=1),se[R]!==F&&(n.vertexAttribDivisor(R,F),se[R]=F)}function D(){const R=l.newAttributes,F=l.enabledAttributes;for(let le=0,te=F.length;le<te;le++)F[le]!==R[le]&&(n.disableVertexAttribArray(le),F[le]=0)}function b(R,F,le,te,se,ce,ae){ae===!0?n.vertexAttribIPointer(R,F,le,se,ce):n.vertexAttribPointer(R,F,le,te,se,ce)}function C(R,F,le,te){E();const se=te.attributes,ce=le.getAttributes(),ae=F.defaultAttributeValues;for(const re in ce){const V=ce[re];if(V.location>=0){let oe=se[re];if(oe===void 0&&(re==="instanceMatrix"&&R.instanceMatrix&&(oe=R.instanceMatrix),re==="instanceColor"&&R.instanceColor&&(oe=R.instanceColor)),oe!==void 0){const ie=oe.normalized,U=oe.itemSize,J=e.get(oe);if(J===void 0)continue;const Oe=J.buffer,me=J.type,Y=J.bytesPerElement,fe=me===n.INT||me===n.UNSIGNED_INT||oe.gpuType===dp;if(oe.isInterleavedBufferAttribute){const he=oe.data,Te=he.stride,Pe=oe.offset;if(he.isInstancedInterleavedBuffer){for(let Ye=0;Ye<V.locationSize;Ye++)y(V.location+Ye,he.meshPerAttribute);R.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Ye=0;Ye<V.locationSize;Ye++)S(V.location+Ye);n.bindBuffer(n.ARRAY_BUFFER,Oe);for(let Ye=0;Ye<V.locationSize;Ye++)b(V.location+Ye,U/V.locationSize,me,ie,Te*Y,(Pe+U/V.locationSize*Ye)*Y,fe)}else{if(oe.isInstancedBufferAttribute){for(let he=0;he<V.locationSize;he++)y(V.location+he,oe.meshPerAttribute);R.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let he=0;he<V.locationSize;he++)S(V.location+he);n.bindBuffer(n.ARRAY_BUFFER,Oe);for(let he=0;he<V.locationSize;he++)b(V.location+he,U/V.locationSize,me,ie,U*Y,U/V.locationSize*he*Y,fe)}}else if(ae!==void 0){const ie=ae[re];if(ie!==void 0)switch(ie.length){case 2:n.vertexAttrib2fv(V.location,ie);break;case 3:n.vertexAttrib3fv(V.location,ie);break;case 4:n.vertexAttrib4fv(V.location,ie);break;default:n.vertexAttrib1fv(V.location,ie)}}}}D()}function N(){z();for(const R in r){const F=r[R];for(const le in F){const te=F[le];for(const se in te)m(te[se].object),delete te[se];delete F[le]}delete r[R]}}function k(R){if(r[R.id]===void 0)return;const F=r[R.id];for(const le in F){const te=F[le];for(const se in te)m(te[se].object),delete te[se];delete F[le]}delete r[R.id]}function B(R){for(const F in r){const le=r[F];if(le[R.id]===void 0)continue;const te=le[R.id];for(const se in te)m(te[se].object),delete te[se];delete le[R.id]}}function z(){P(),u=!0,l!==o&&(l=o,h(l.object))}function P(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:z,resetDefaultState:P,dispose:N,releaseStatesOfGeometry:k,releaseStatesOfProgram:B,initAttributes:E,enableAttribute:S,disableUnusedAttributes:D}}function Tb(n,e,t){let r;function o(h){r=h}function l(h,m){n.drawArrays(r,h,m),t.update(m,r,1)}function u(h,m,g){g!==0&&(n.drawArraysInstanced(r,h,m,g),t.update(m,r,g))}function f(h,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,m,0,g);let x=0;for(let M=0;M<g;M++)x+=m[M];t.update(x,r,1)}function d(h,m,g,v){if(g===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let M=0;M<h.length;M++)u(h[M],m[M],v[M]);else{x.multiDrawArraysInstancedWEBGL(r,h,0,m,0,v,0,g);let M=0;for(let E=0;E<g;E++)M+=m[E]*v[E];t.update(M,r,1)}}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=d}function wb(n,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");o=n.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(B){return!(B!==Ei&&r.convert(B)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(B){const z=B===Oa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(B!==Ni&&r.convert(B)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==Qi&&!z)}function d(B){if(B==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const m=d(h);m!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",m,"instead."),h=m);const g=t.logarithmicDepthBuffer===!0,v=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),x=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=n.getParameter(n.MAX_TEXTURE_SIZE),S=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),y=n.getParameter(n.MAX_VERTEX_ATTRIBS),D=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),C=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),N=M>0,k=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:d,textureFormatReadable:u,textureTypeReadable:f,precision:h,logarithmicDepthBuffer:g,reversedDepthBuffer:v,maxTextures:x,maxVertexTextures:M,maxTextureSize:E,maxCubemapSize:S,maxAttributes:y,maxVertexUniforms:D,maxVaryings:b,maxFragmentUniforms:C,vertexTextures:N,maxSamples:k}}function Ab(n){const e=this;let t=null,r=0,o=!1,l=!1;const u=new fs,f=new ht,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const x=g.length!==0||v||r!==0||o;return o=v,r=g.length,x},this.beginShadows=function(){l=!0,m(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(g,v){t=m(g,v,0)},this.setState=function(g,v,x){const M=g.clippingPlanes,E=g.clipIntersection,S=g.clipShadows,y=n.get(g);if(!o||M===null||M.length===0||l&&!S)l?m(null):h();else{const D=l?0:r,b=D*4;let C=y.clippingState||null;d.value=C,C=m(M,v,b,x);for(let N=0;N!==b;++N)C[N]=t[N];y.clippingState=C,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=D}};function h(){d.value!==t&&(d.value=t,d.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function m(g,v,x,M){const E=g!==null?g.length:0;let S=null;if(E!==0){if(S=d.value,M!==!0||S===null){const y=x+E*4,D=v.matrixWorldInverse;f.getNormalMatrix(D),(S===null||S.length<y)&&(S=new Float32Array(y));for(let b=0,C=x;b!==E;++b,C+=4)u.copy(g[b]).applyMatrix4(D,f),u.normal.toArray(S,C),S[C+3]=u.constant}d.value=S,d.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,S}}function Cb(n){let e=new WeakMap;function t(u,f){return f===Jd?u.mapping=Mo:f===eh&&(u.mapping=Eo),u}function r(u){if(u&&u.isTexture){const f=u.mapping;if(f===Jd||f===eh)if(e.has(u)){const d=e.get(u).texture;return t(d,u.mapping)}else{const d=u.image;if(d&&d.height>0){const h=new AC(d.height);return h.fromEquirectangularTexture(n,u),e.set(u,h),u.addEventListener("dispose",o),t(h.texture,u.mapping)}else return null}}return u}function o(u){const f=u.target;f.removeEventListener("dispose",o);const d=e.get(f);d!==void 0&&(e.delete(f),d.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}const mo=4,W0=[.125,.215,.35,.446,.526,.582],ps=20,Sd=new _x,X0=new Rt;let Md=null,Ed=0,Td=0,wd=!1;const ds=(1+Math.sqrt(5))/2,lo=1/ds,j0=[new K(-ds,lo,0),new K(ds,lo,0),new K(-lo,0,ds),new K(lo,0,ds),new K(0,ds,-lo),new K(0,ds,lo),new K(-1,1,-1),new K(1,1,-1),new K(-1,1,1),new K(1,1,1)],Rb=new K;class q0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,o=100,l={}){const{size:u=256,position:f=Rb}=l;Md=this._renderer.getRenderTarget(),Ed=this._renderer.getActiveCubeFace(),Td=this._renderer.getActiveMipmapLevel(),wd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(e,r,o,d,f),t>0&&this._blur(d,0,0,t),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=K0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Md,Ed,Td),this._renderer.xr.enabled=wd,e.scissorTest=!1,Mu(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Mo||e.mapping===Eo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Md=this._renderer.getRenderTarget(),Ed=this._renderer.getActiveCubeFace(),Td=this._renderer.getActiveMipmapLevel(),wd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:bi,minFilter:bi,generateMipmaps:!1,type:Oa,format:Ei,colorSpace:To,depthBuffer:!1},o=Y0(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Y0(e,t,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Pb(l)),this._blurMaterial=bb(l,e,t)}return o}_compileMaterial(e){const t=new Ji(this._lodPlanes[0],e);this._renderer.compile(t,Sd)}_sceneToCubeUV(e,t,r,o,l){const d=new Yn(90,1,t,r),h=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,x=g.toneMapping;g.getClearColor(X0),g.toneMapping=Ur,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(o),g.clearDepth(),g.setRenderTarget(null));const E=new ux({name:"PMREM.Background",side:Bn,depthWrite:!1,depthTest:!1}),S=new Ji(new Ha,E);let y=!1;const D=e.background;D?D.isColor&&(E.color.copy(D),e.background=null,y=!0):(E.color.copy(X0),y=!0);for(let b=0;b<6;b++){const C=b%3;C===0?(d.up.set(0,h[b],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x+m[b],l.y,l.z)):C===1?(d.up.set(0,0,h[b]),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y+m[b],l.z)):(d.up.set(0,h[b],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y,l.z+m[b]));const N=this._cubeSize;Mu(o,C*N,b>2?N:0,N,N),g.setRenderTarget(o),y&&g.render(S,d),g.render(e,d)}S.geometry.dispose(),S.material.dispose(),g.toneMapping=x,g.autoClear=v,e.background=D}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===Mo||e.mapping===Eo;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=K0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$0());const l=o?this._cubemapMaterial:this._equirectMaterial,u=new Ji(this._lodPlanes[0],l),f=l.uniforms;f.envMap.value=e;const d=this._cubeSize;Mu(t,0,0,3*d,2*d),r.setRenderTarget(t),r.render(u,Sd)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodPlanes.length;for(let l=1;l<o;l++){const u=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),f=j0[(o-l-1)%j0.length];this._blur(e,l-1,l,u,f)}t.autoClear=r}_blur(e,t,r,o,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,r,o,"latitudinal",l),this._halfBlur(u,e,r,r,o,"longitudinal",l)}_halfBlur(e,t,r,o,l,u,f){const d=this._renderer,h=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,g=new Ji(this._lodPlanes[o],h),v=h.uniforms,x=this._sizeLods[r]-1,M=isFinite(l)?Math.PI/(2*x):2*Math.PI/(2*ps-1),E=l/M,S=isFinite(l)?1+Math.floor(m*E):ps;S>ps&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${ps}`);const y=[];let D=0;for(let B=0;B<ps;++B){const z=B/E,P=Math.exp(-z*z/2);y.push(P),B===0?D+=P:B<S&&(D+=2*P)}for(let B=0;B<y.length;B++)y[B]=y[B]/D;v.envMap.value=e.texture,v.samples.value=S,v.weights.value=y,v.latitudinal.value=u==="latitudinal",f&&(v.poleAxis.value=f);const{_lodMax:b}=this;v.dTheta.value=M,v.mipInt.value=b-r;const C=this._sizeLods[o],N=3*C*(o>b-mo?o-b+mo:0),k=4*(this._cubeSize-C);Mu(t,N,k,3*C,2*C),d.setRenderTarget(t),d.render(g,Sd)}}function Pb(n){const e=[],t=[],r=[];let o=n;const l=n-mo+1+W0.length;for(let u=0;u<l;u++){const f=Math.pow(2,o);t.push(f);let d=1/f;u>n-mo?d=W0[u-n+mo-1]:u===0&&(d=0),r.push(d);const h=1/(f-2),m=-h,g=1+h,v=[m,m,g,m,g,g,m,m,g,g,m,g],x=6,M=6,E=3,S=2,y=1,D=new Float32Array(E*M*x),b=new Float32Array(S*M*x),C=new Float32Array(y*M*x);for(let k=0;k<x;k++){const B=k%3*2/3-1,z=k>2?0:-1,P=[B,z,0,B+2/3,z,0,B+2/3,z+1,0,B,z,0,B+2/3,z+1,0,B,z+1,0];D.set(P,E*M*k),b.set(v,S*M*k);const R=[k,k,k,k,k,k];C.set(R,y*M*k)}const N=new sr;N.setAttribute("position",new ui(D,E)),N.setAttribute("uv",new ui(b,S)),N.setAttribute("faceIndex",new ui(C,y)),e.push(N),o>mo&&o--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function Y0(n,e,t){const r=new Ms(n,e,t);return r.texture.mapping=Yu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Mu(n,e,t,r,o){n.viewport.set(e,t,r,o),n.scissor.set(e,t,r,o)}function bb(n,e,t){const r=new Float32Array(ps),o=new K(0,1,0);return new Br({name:"SphericalGaussianBlur",defines:{n:ps,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Sp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Nr,depthTest:!1,depthWrite:!1})}function $0(){return new Br({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Nr,depthTest:!1,depthWrite:!1})}function K0(){return new Br({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Nr,depthTest:!1,depthWrite:!1})}function Sp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Db(n){let e=new WeakMap,t=null;function r(f){if(f&&f.isTexture){const d=f.mapping,h=d===Jd||d===eh,m=d===Mo||d===Eo;if(h||m){let g=e.get(f);const v=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==v)return t===null&&(t=new q0(n)),g=h?t.fromEquirectangular(f,g):t.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),g.texture;if(g!==void 0)return g.texture;{const x=f.image;return h&&x&&x.height>0||m&&x&&o(x)?(t===null&&(t=new q0(n)),g=h?t.fromEquirectangular(f):t.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),f.addEventListener("dispose",l),g.texture):null}}}return f}function o(f){let d=0;const h=6;for(let m=0;m<h;m++)f[m]!==void 0&&d++;return d===h}function l(f){const d=f.target;d.removeEventListener("dispose",l);const h=e.get(d);h!==void 0&&(e.delete(d),h.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:u}}function Lb(n){const e={};function t(r){if(e[r]!==void 0)return e[r];let o;switch(r){case"WEBGL_depth_texture":o=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=n.getExtension(r)}return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&go("THREE.WebGLRenderer: "+r+" extension not supported."),o}}}function Ib(n,e,t,r){const o={},l=new WeakMap;function u(g){const v=g.target;v.index!==null&&e.remove(v.index);for(const M in v.attributes)e.remove(v.attributes[M]);v.removeEventListener("dispose",u),delete o[v.id];const x=l.get(v);x&&(e.remove(x),l.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function f(g,v){return o[v.id]===!0||(v.addEventListener("dispose",u),o[v.id]=!0,t.memory.geometries++),v}function d(g){const v=g.attributes;for(const x in v)e.update(v[x],n.ARRAY_BUFFER)}function h(g){const v=[],x=g.index,M=g.attributes.position;let E=0;if(x!==null){const D=x.array;E=x.version;for(let b=0,C=D.length;b<C;b+=3){const N=D[b+0],k=D[b+1],B=D[b+2];v.push(N,k,k,B,B,N)}}else if(M!==void 0){const D=M.array;E=M.version;for(let b=0,C=D.length/3-1;b<C;b+=3){const N=b+0,k=b+1,B=b+2;v.push(N,k,k,B,B,N)}}else return;const S=new(rx(v)?fx:cx)(v,1);S.version=E;const y=l.get(g);y&&e.remove(y),l.set(g,S)}function m(g){const v=l.get(g);if(v){const x=g.index;x!==null&&v.version<x.version&&h(g)}else h(g);return l.get(g)}return{get:f,update:d,getWireframeAttribute:m}}function Nb(n,e,t){let r;function o(v){r=v}let l,u;function f(v){l=v.type,u=v.bytesPerElement}function d(v,x){n.drawElements(r,x,l,v*u),t.update(x,r,1)}function h(v,x,M){M!==0&&(n.drawElementsInstanced(r,x,l,v*u,M),t.update(x,r,M))}function m(v,x,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,x,0,l,v,0,M);let S=0;for(let y=0;y<M;y++)S+=x[y];t.update(S,r,1)}function g(v,x,M,E){if(M===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let y=0;y<v.length;y++)h(v[y]/u,x[y],E[y]);else{S.multiDrawElementsInstancedWEBGL(r,x,0,l,v,0,E,0,M);let y=0;for(let D=0;D<M;D++)y+=x[D]*E[D];t.update(y,r,1)}}this.setMode=o,this.setIndex=f,this.render=d,this.renderInstances=h,this.renderMultiDraw=m,this.renderMultiDrawInstances=g}function Ub(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,f){switch(t.calls++,u){case n.TRIANGLES:t.triangles+=f*(l/3);break;case n.LINES:t.lines+=f*(l/2);break;case n.LINE_STRIP:t.lines+=f*(l-1);break;case n.LINE_LOOP:t.lines+=f*l;break;case n.POINTS:t.points+=f*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function Fb(n,e,t){const r=new WeakMap,o=new Nt;function l(u,f,d){const h=u.morphTargetInfluences,m=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,g=m!==void 0?m.length:0;let v=r.get(f);if(v===void 0||v.count!==g){let R=function(){z.dispose(),r.delete(f),f.removeEventListener("dispose",R)};var x=R;v!==void 0&&v.texture.dispose();const M=f.morphAttributes.position!==void 0,E=f.morphAttributes.normal!==void 0,S=f.morphAttributes.color!==void 0,y=f.morphAttributes.position||[],D=f.morphAttributes.normal||[],b=f.morphAttributes.color||[];let C=0;M===!0&&(C=1),E===!0&&(C=2),S===!0&&(C=3);let N=f.attributes.position.count*C,k=1;N>e.maxTextureSize&&(k=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const B=new Float32Array(N*k*4*g),z=new sx(B,N,k,g);z.type=Qi,z.needsUpdate=!0;const P=C*4;for(let F=0;F<g;F++){const le=y[F],te=D[F],se=b[F],ce=N*k*4*F;for(let ae=0;ae<le.count;ae++){const re=ae*P;M===!0&&(o.fromBufferAttribute(le,ae),B[ce+re+0]=o.x,B[ce+re+1]=o.y,B[ce+re+2]=o.z,B[ce+re+3]=0),E===!0&&(o.fromBufferAttribute(te,ae),B[ce+re+4]=o.x,B[ce+re+5]=o.y,B[ce+re+6]=o.z,B[ce+re+7]=0),S===!0&&(o.fromBufferAttribute(se,ae),B[ce+re+8]=o.x,B[ce+re+9]=o.y,B[ce+re+10]=o.z,B[ce+re+11]=se.itemSize===4?o.w:1)}}v={count:g,texture:z,size:new At(N,k)},r.set(f,v),f.addEventListener("dispose",R)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)d.getUniforms().setValue(n,"morphTexture",u.morphTexture,t);else{let M=0;for(let S=0;S<h.length;S++)M+=h[S];const E=f.morphTargetsRelative?1:1-M;d.getUniforms().setValue(n,"morphTargetBaseInfluence",E),d.getUniforms().setValue(n,"morphTargetInfluences",h)}d.getUniforms().setValue(n,"morphTargetsTexture",v.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",v.size)}return{update:l}}function Ob(n,e,t,r){let o=new WeakMap;function l(d){const h=r.render.frame,m=d.geometry,g=e.get(d,m);if(o.get(g)!==h&&(e.update(g),o.set(g,h)),d.isInstancedMesh&&(d.hasEventListener("dispose",f)===!1&&d.addEventListener("dispose",f),o.get(d)!==h&&(t.update(d.instanceMatrix,n.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,n.ARRAY_BUFFER),o.set(d,h))),d.isSkinnedMesh){const v=d.skeleton;o.get(v)!==h&&(v.update(),o.set(v,h))}return g}function u(){o=new WeakMap}function f(d){const h=d.target;h.removeEventListener("dispose",f),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:l,dispose:u}}const xx=new Vn,Z0=new gx(1,1),Sx=new sx,Mx=new uC,Ex=new px,Q0=[],J0=[],e_=new Float32Array(16),t_=new Float32Array(9),n_=new Float32Array(4);function Po(n,e,t){const r=n[0];if(r<=0||r>0)return n;const o=e*t;let l=Q0[o];if(l===void 0&&(l=new Float32Array(o),Q0[o]=l),e!==0){r.toArray(l,0);for(let u=1,f=0;u!==e;++u)f+=t,n[u].toArray(l,f)}return l}function on(n,e){if(n.length!==e.length)return!1;for(let t=0,r=n.length;t<r;t++)if(n[t]!==e[t])return!1;return!0}function an(n,e){for(let t=0,r=e.length;t<r;t++)n[t]=e[t]}function Zu(n,e){let t=J0[e];t===void 0&&(t=new Int32Array(e),J0[e]=t);for(let r=0;r!==e;++r)t[r]=n.allocateTextureUnit();return t}function kb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Bb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;n.uniform2fv(this.addr,e),an(t,e)}}function Vb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(on(t,e))return;n.uniform3fv(this.addr,e),an(t,e)}}function zb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;n.uniform4fv(this.addr,e),an(t,e)}}function Hb(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(on(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),an(t,e)}else{if(on(t,r))return;n_.set(r),n.uniformMatrix2fv(this.addr,!1,n_),an(t,r)}}function Gb(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(on(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),an(t,e)}else{if(on(t,r))return;t_.set(r),n.uniformMatrix3fv(this.addr,!1,t_),an(t,r)}}function Wb(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(on(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),an(t,e)}else{if(on(t,r))return;e_.set(r),n.uniformMatrix4fv(this.addr,!1,e_),an(t,r)}}function Xb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function jb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;n.uniform2iv(this.addr,e),an(t,e)}}function qb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;n.uniform3iv(this.addr,e),an(t,e)}}function Yb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;n.uniform4iv(this.addr,e),an(t,e)}}function $b(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Kb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;n.uniform2uiv(this.addr,e),an(t,e)}}function Zb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;n.uniform3uiv(this.addr,e),an(t,e)}}function Qb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;n.uniform4uiv(this.addr,e),an(t,e)}}function Jb(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o);let l;this.type===n.SAMPLER_2D_SHADOW?(Z0.compareFunction=ix,l=Z0):l=xx,t.setTexture2D(e||l,o)}function e2(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||Mx,o)}function t2(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||Ex,o)}function n2(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||Sx,o)}function i2(n){switch(n){case 5126:return kb;case 35664:return Bb;case 35665:return Vb;case 35666:return zb;case 35674:return Hb;case 35675:return Gb;case 35676:return Wb;case 5124:case 35670:return Xb;case 35667:case 35671:return jb;case 35668:case 35672:return qb;case 35669:case 35673:return Yb;case 5125:return $b;case 36294:return Kb;case 36295:return Zb;case 36296:return Qb;case 35678:case 36198:case 36298:case 36306:case 35682:return Jb;case 35679:case 36299:case 36307:return e2;case 35680:case 36300:case 36308:case 36293:return t2;case 36289:case 36303:case 36311:case 36292:return n2}}function r2(n,e){n.uniform1fv(this.addr,e)}function s2(n,e){const t=Po(e,this.size,2);n.uniform2fv(this.addr,t)}function o2(n,e){const t=Po(e,this.size,3);n.uniform3fv(this.addr,t)}function a2(n,e){const t=Po(e,this.size,4);n.uniform4fv(this.addr,t)}function l2(n,e){const t=Po(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function u2(n,e){const t=Po(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function c2(n,e){const t=Po(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function f2(n,e){n.uniform1iv(this.addr,e)}function d2(n,e){n.uniform2iv(this.addr,e)}function h2(n,e){n.uniform3iv(this.addr,e)}function p2(n,e){n.uniform4iv(this.addr,e)}function m2(n,e){n.uniform1uiv(this.addr,e)}function g2(n,e){n.uniform2uiv(this.addr,e)}function v2(n,e){n.uniform3uiv(this.addr,e)}function _2(n,e){n.uniform4uiv(this.addr,e)}function y2(n,e,t){const r=this.cache,o=e.length,l=Zu(t,o);on(r,l)||(n.uniform1iv(this.addr,l),an(r,l));for(let u=0;u!==o;++u)t.setTexture2D(e[u]||xx,l[u])}function x2(n,e,t){const r=this.cache,o=e.length,l=Zu(t,o);on(r,l)||(n.uniform1iv(this.addr,l),an(r,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||Mx,l[u])}function S2(n,e,t){const r=this.cache,o=e.length,l=Zu(t,o);on(r,l)||(n.uniform1iv(this.addr,l),an(r,l));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||Ex,l[u])}function M2(n,e,t){const r=this.cache,o=e.length,l=Zu(t,o);on(r,l)||(n.uniform1iv(this.addr,l),an(r,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||Sx,l[u])}function E2(n){switch(n){case 5126:return r2;case 35664:return s2;case 35665:return o2;case 35666:return a2;case 35674:return l2;case 35675:return u2;case 35676:return c2;case 5124:case 35670:return f2;case 35667:case 35671:return d2;case 35668:case 35672:return h2;case 35669:case 35673:return p2;case 5125:return m2;case 36294:return g2;case 36295:return v2;case 36296:return _2;case 35678:case 36198:case 36298:case 36306:case 35682:return y2;case 35679:case 36299:case 36307:return x2;case 35680:case 36300:case 36308:case 36293:return S2;case 36289:case 36303:case 36311:case 36292:return M2}}class T2{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=i2(t.type)}}class w2{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=E2(t.type)}}class A2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const f=o[l];f.setValue(e,t[f.id],r)}}}const Ad=/(\w+)(\])?(\[|\.)?/g;function i_(n,e){n.seq.push(e),n.map[e.id]=e}function C2(n,e,t){const r=n.name,o=r.length;for(Ad.lastIndex=0;;){const l=Ad.exec(r),u=Ad.lastIndex;let f=l[1];const d=l[2]==="]",h=l[3];if(d&&(f=f|0),h===void 0||h==="["&&u+2===o){i_(t,h===void 0?new T2(f,n,e):new w2(f,n,e));break}else{let g=t.map[f];g===void 0&&(g=new A2(f),i_(t,g)),t=g}}}class Lu{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<r;++o){const l=e.getActiveUniform(t,o),u=e.getUniformLocation(t,l.name);C2(l,u,this)}}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,u=t.length;l!==u;++l){const f=t[l],d=r[f.id];d.needsUpdate!==!1&&f.setValue(e,d.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&r.push(u)}return r}}function r_(n,e,t){const r=n.createShader(e);return n.shaderSource(r,t),n.compileShader(r),r}const R2=37297;let P2=0;function b2(n,e){const t=n.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const f=u+1;r.push(`${f===e?">":" "} ${f}: ${t[u]}`)}return r.join(`
`)}const s_=new ht;function D2(n){wt._getMatrix(s_,wt.workingColorSpace,n);const e=`mat3( ${s_.elements.map(t=>t.toFixed(4))} )`;switch(wt.getTransfer(n)){case Vu:return[e,"LinearTransferOETF"];case It:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function o_(n,e,t){const r=n.getShaderParameter(e,n.COMPILE_STATUS),l=(n.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const f=parseInt(u[1]);return t.toUpperCase()+`

`+l+`

`+b2(n.getShaderSource(e),f)}else return l}function L2(n,e){const t=D2(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function I2(n,e){let t;switch(e){case FA:t="Linear";break;case OA:t="Reinhard";break;case kA:t="Cineon";break;case BA:t="ACESFilmic";break;case zA:t="AgX";break;case HA:t="Neutral";break;case VA:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Eu=new K;function N2(){wt.getLuminanceCoefficients(Eu);const n=Eu.x.toFixed(4),e=Eu.y.toFixed(4),t=Eu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function U2(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ya).join(`
`)}function F2(n){const e=[];for(const t in n){const r=n[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function O2(n,e){const t={},r=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=n.getActiveAttrib(e,o),u=l.name;let f=1;l.type===n.FLOAT_MAT2&&(f=2),l.type===n.FLOAT_MAT3&&(f=3),l.type===n.FLOAT_MAT4&&(f=4),t[u]={type:l.type,location:n.getAttribLocation(e,u),locationSize:f}}return t}function ya(n){return n!==""}function a_(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function l_(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const k2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dh(n){return n.replace(k2,V2)}const B2=new Map;function V2(n,e){let t=pt[e];if(t===void 0){const r=B2.get(e);if(r!==void 0)t=pt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Dh(t)}const z2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function u_(n){return n.replace(z2,H2)}function H2(n,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function c_(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function G2(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===jy?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===mA?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ki&&(e="SHADOWMAP_TYPE_VSM"),e}function W2(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Mo:case Eo:e="ENVMAP_TYPE_CUBE";break;case Yu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function X2(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===Eo&&(e="ENVMAP_MODE_REFRACTION"),e}function j2(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case qy:e="ENVMAP_BLENDING_MULTIPLY";break;case NA:e="ENVMAP_BLENDING_MIX";break;case UA:e="ENVMAP_BLENDING_ADD";break}return e}function q2(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function Y2(n,e,t,r){const o=n.getContext(),l=t.defines;let u=t.vertexShader,f=t.fragmentShader;const d=G2(t),h=W2(t),m=X2(t),g=j2(t),v=q2(t),x=U2(t),M=F2(l),E=o.createProgram();let S,y,D=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(ya).join(`
`),S.length>0&&(S+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(ya).join(`
`),y.length>0&&(y+=`
`)):(S=[c_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ya).join(`
`),y=[c_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+m:"",t.envMap?"#define "+g:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ur?"#define TONE_MAPPING":"",t.toneMapping!==Ur?pt.tonemapping_pars_fragment:"",t.toneMapping!==Ur?I2("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,L2("linearToOutputTexel",t.outputColorSpace),N2(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ya).join(`
`)),u=Dh(u),u=a_(u,t),u=l_(u,t),f=Dh(f),f=a_(f,t),f=l_(f,t),u=u_(u),f=u_(f),t.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,S=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,y=["#define varying in",t.glslVersion===x0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===x0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const b=D+S+u,C=D+y+f,N=r_(o,o.VERTEX_SHADER,b),k=r_(o,o.FRAGMENT_SHADER,C);o.attachShader(E,N),o.attachShader(E,k),t.index0AttributeName!==void 0?o.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(E,0,"position"),o.linkProgram(E);function B(F){if(n.debug.checkShaderErrors){const le=o.getProgramInfoLog(E)||"",te=o.getShaderInfoLog(N)||"",se=o.getShaderInfoLog(k)||"",ce=le.trim(),ae=te.trim(),re=se.trim();let V=!0,oe=!0;if(o.getProgramParameter(E,o.LINK_STATUS)===!1)if(V=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(o,E,N,k);else{const ie=o_(o,N,"vertex"),U=o_(o,k,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(E,o.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+ce+`
`+ie+`
`+U)}else ce!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ce):(ae===""||re==="")&&(oe=!1);oe&&(F.diagnostics={runnable:V,programLog:ce,vertexShader:{log:ae,prefix:S},fragmentShader:{log:re,prefix:y}})}o.deleteShader(N),o.deleteShader(k),z=new Lu(o,E),P=O2(o,E)}let z;this.getUniforms=function(){return z===void 0&&B(this),z};let P;this.getAttributes=function(){return P===void 0&&B(this),P};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=o.getProgramParameter(E,R2)),R},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=P2++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=N,this.fragmentShader=k,this}let $2=0;class K2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new Z2(e),t.set(e,r)),r}}class Z2{constructor(e){this.id=$2++,this.code=e,this.usedTimes=0}}function Q2(n,e,t,r,o,l,u){const f=new ax,d=new K2,h=new Set,m=[],g=o.logarithmicDepthBuffer,v=o.vertexTextures;let x=o.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(P){return h.add(P),P===0?"uv":`uv${P}`}function S(P,R,F,le,te){const se=le.fog,ce=te.geometry,ae=P.isMeshStandardMaterial?le.environment:null,re=(P.isMeshStandardMaterial?t:e).get(P.envMap||ae),V=re&&re.mapping===Yu?re.image.height:null,oe=M[P.type];P.precision!==null&&(x=o.getMaxPrecision(P.precision),x!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",x,"instead."));const ie=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,U=ie!==void 0?ie.length:0;let J=0;ce.morphAttributes.position!==void 0&&(J=1),ce.morphAttributes.normal!==void 0&&(J=2),ce.morphAttributes.color!==void 0&&(J=3);let Oe,me,Y,fe;if(oe){const St=Pi[oe];Oe=St.vertexShader,me=St.fragmentShader}else Oe=P.vertexShader,me=P.fragmentShader,d.update(P),Y=d.getVertexShaderID(P),fe=d.getFragmentShaderID(P);const he=n.getRenderTarget(),Te=n.state.buffers.depth.getReversed(),Pe=te.isInstancedMesh===!0,Ye=te.isBatchedMesh===!0,Dt=!!P.map,mt=!!P.matcap,O=!!re,yt=!!P.aoMap,Qe=!!P.lightMap,dt=!!P.bumpMap,We=!!P.normalMap,Ut=!!P.displacementMap,ke=!!P.emissiveMap,ct=!!P.metalnessMap,Bt=!!P.roughnessMap,Vt=P.anisotropy>0,L=P.clearcoat>0,w=P.dispersion>0,$=P.iridescence>0,de=P.sheen>0,_e=P.transmission>0,ue=Vt&&!!P.anisotropyMap,$e=L&&!!P.clearcoatMap,Ae=L&&!!P.clearcoatNormalMap,Ve=L&&!!P.clearcoatRoughnessMap,Ke=$&&!!P.iridescenceMap,Ee=$&&!!P.iridescenceThicknessMap,Ie=de&&!!P.sheenColorMap,rt=de&&!!P.sheenRoughnessMap,je=!!P.specularMap,be=!!P.specularColorMap,ft=!!P.specularIntensityMap,G=_e&&!!P.transmissionMap,Se=_e&&!!P.thicknessMap,Ce=!!P.gradientMap,Ne=!!P.alphaMap,xe=P.alphaTest>0,pe=!!P.alphaHash,Ge=!!P.extensions;let ut=Ur;P.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(ut=n.toneMapping);const Pt={shaderID:oe,shaderType:P.type,shaderName:P.name,vertexShader:Oe,fragmentShader:me,defines:P.defines,customVertexShaderID:Y,customFragmentShaderID:fe,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:x,batching:Ye,batchingColor:Ye&&te._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&te.instanceColor!==null,instancingMorph:Pe&&te.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:he===null?n.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:To,alphaToCoverage:!!P.alphaToCoverage,map:Dt,matcap:mt,envMap:O,envMapMode:O&&re.mapping,envMapCubeUVHeight:V,aoMap:yt,lightMap:Qe,bumpMap:dt,normalMap:We,displacementMap:v&&Ut,emissiveMap:ke,normalMapObjectSpace:We&&P.normalMapType===qA,normalMapTangentSpace:We&&P.normalMapType===jA,metalnessMap:ct,roughnessMap:Bt,anisotropy:Vt,anisotropyMap:ue,clearcoat:L,clearcoatMap:$e,clearcoatNormalMap:Ae,clearcoatRoughnessMap:Ve,dispersion:w,iridescence:$,iridescenceMap:Ke,iridescenceThicknessMap:Ee,sheen:de,sheenColorMap:Ie,sheenRoughnessMap:rt,specularMap:je,specularColorMap:be,specularIntensityMap:ft,transmission:_e,transmissionMap:G,thicknessMap:Se,gradientMap:Ce,opaque:P.transparent===!1&&P.blending===ys&&P.alphaToCoverage===!1,alphaMap:Ne,alphaTest:xe,alphaHash:pe,combine:P.combine,mapUv:Dt&&E(P.map.channel),aoMapUv:yt&&E(P.aoMap.channel),lightMapUv:Qe&&E(P.lightMap.channel),bumpMapUv:dt&&E(P.bumpMap.channel),normalMapUv:We&&E(P.normalMap.channel),displacementMapUv:Ut&&E(P.displacementMap.channel),emissiveMapUv:ke&&E(P.emissiveMap.channel),metalnessMapUv:ct&&E(P.metalnessMap.channel),roughnessMapUv:Bt&&E(P.roughnessMap.channel),anisotropyMapUv:ue&&E(P.anisotropyMap.channel),clearcoatMapUv:$e&&E(P.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&E(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ve&&E(P.clearcoatRoughnessMap.channel),iridescenceMapUv:Ke&&E(P.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&E(P.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&E(P.sheenColorMap.channel),sheenRoughnessMapUv:rt&&E(P.sheenRoughnessMap.channel),specularMapUv:je&&E(P.specularMap.channel),specularColorMapUv:be&&E(P.specularColorMap.channel),specularIntensityMapUv:ft&&E(P.specularIntensityMap.channel),transmissionMapUv:G&&E(P.transmissionMap.channel),thicknessMapUv:Se&&E(P.thicknessMap.channel),alphaMapUv:Ne&&E(P.alphaMap.channel),vertexTangents:!!ce.attributes.tangent&&(We||Vt),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,pointsUvs:te.isPoints===!0&&!!ce.attributes.uv&&(Dt||Ne),fog:!!se,useFog:P.fog===!0,fogExp2:!!se&&se.isFogExp2,flatShading:P.flatShading===!0&&P.wireframe===!1,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:Te,skinning:te.isSkinnedMesh===!0,morphTargets:ce.morphAttributes.position!==void 0,morphNormals:ce.morphAttributes.normal!==void 0,morphColors:ce.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:J,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:P.dithering,shadowMapEnabled:n.shadowMap.enabled&&F.length>0,shadowMapType:n.shadowMap.type,toneMapping:ut,decodeVideoTexture:Dt&&P.map.isVideoTexture===!0&&wt.getTransfer(P.map.colorSpace)===It,decodeVideoTextureEmissive:ke&&P.emissiveMap.isVideoTexture===!0&&wt.getTransfer(P.emissiveMap.colorSpace)===It,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===Zi,flipSided:P.side===Bn,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:Ge&&P.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&P.extensions.multiDraw===!0||Ye)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return Pt.vertexUv1s=h.has(1),Pt.vertexUv2s=h.has(2),Pt.vertexUv3s=h.has(3),h.clear(),Pt}function y(P){const R=[];if(P.shaderID?R.push(P.shaderID):(R.push(P.customVertexShaderID),R.push(P.customFragmentShaderID)),P.defines!==void 0)for(const F in P.defines)R.push(F),R.push(P.defines[F]);return P.isRawShaderMaterial===!1&&(D(R,P),b(R,P),R.push(n.outputColorSpace)),R.push(P.customProgramCacheKey),R.join()}function D(P,R){P.push(R.precision),P.push(R.outputColorSpace),P.push(R.envMapMode),P.push(R.envMapCubeUVHeight),P.push(R.mapUv),P.push(R.alphaMapUv),P.push(R.lightMapUv),P.push(R.aoMapUv),P.push(R.bumpMapUv),P.push(R.normalMapUv),P.push(R.displacementMapUv),P.push(R.emissiveMapUv),P.push(R.metalnessMapUv),P.push(R.roughnessMapUv),P.push(R.anisotropyMapUv),P.push(R.clearcoatMapUv),P.push(R.clearcoatNormalMapUv),P.push(R.clearcoatRoughnessMapUv),P.push(R.iridescenceMapUv),P.push(R.iridescenceThicknessMapUv),P.push(R.sheenColorMapUv),P.push(R.sheenRoughnessMapUv),P.push(R.specularMapUv),P.push(R.specularColorMapUv),P.push(R.specularIntensityMapUv),P.push(R.transmissionMapUv),P.push(R.thicknessMapUv),P.push(R.combine),P.push(R.fogExp2),P.push(R.sizeAttenuation),P.push(R.morphTargetsCount),P.push(R.morphAttributeCount),P.push(R.numDirLights),P.push(R.numPointLights),P.push(R.numSpotLights),P.push(R.numSpotLightMaps),P.push(R.numHemiLights),P.push(R.numRectAreaLights),P.push(R.numDirLightShadows),P.push(R.numPointLightShadows),P.push(R.numSpotLightShadows),P.push(R.numSpotLightShadowsWithMaps),P.push(R.numLightProbes),P.push(R.shadowMapType),P.push(R.toneMapping),P.push(R.numClippingPlanes),P.push(R.numClipIntersection),P.push(R.depthPacking)}function b(P,R){f.disableAll(),R.supportsVertexTextures&&f.enable(0),R.instancing&&f.enable(1),R.instancingColor&&f.enable(2),R.instancingMorph&&f.enable(3),R.matcap&&f.enable(4),R.envMap&&f.enable(5),R.normalMapObjectSpace&&f.enable(6),R.normalMapTangentSpace&&f.enable(7),R.clearcoat&&f.enable(8),R.iridescence&&f.enable(9),R.alphaTest&&f.enable(10),R.vertexColors&&f.enable(11),R.vertexAlphas&&f.enable(12),R.vertexUv1s&&f.enable(13),R.vertexUv2s&&f.enable(14),R.vertexUv3s&&f.enable(15),R.vertexTangents&&f.enable(16),R.anisotropy&&f.enable(17),R.alphaHash&&f.enable(18),R.batching&&f.enable(19),R.dispersion&&f.enable(20),R.batchingColor&&f.enable(21),R.gradientMap&&f.enable(22),P.push(f.mask),f.disableAll(),R.fog&&f.enable(0),R.useFog&&f.enable(1),R.flatShading&&f.enable(2),R.logarithmicDepthBuffer&&f.enable(3),R.reversedDepthBuffer&&f.enable(4),R.skinning&&f.enable(5),R.morphTargets&&f.enable(6),R.morphNormals&&f.enable(7),R.morphColors&&f.enable(8),R.premultipliedAlpha&&f.enable(9),R.shadowMapEnabled&&f.enable(10),R.doubleSided&&f.enable(11),R.flipSided&&f.enable(12),R.useDepthPacking&&f.enable(13),R.dithering&&f.enable(14),R.transmission&&f.enable(15),R.sheen&&f.enable(16),R.opaque&&f.enable(17),R.pointsUvs&&f.enable(18),R.decodeVideoTexture&&f.enable(19),R.decodeVideoTextureEmissive&&f.enable(20),R.alphaToCoverage&&f.enable(21),P.push(f.mask)}function C(P){const R=M[P.type];let F;if(R){const le=Pi[R];F=MC.clone(le.uniforms)}else F=P.uniforms;return F}function N(P,R){let F;for(let le=0,te=m.length;le<te;le++){const se=m[le];if(se.cacheKey===R){F=se,++F.usedTimes;break}}return F===void 0&&(F=new Y2(n,R,P,l),m.push(F)),F}function k(P){if(--P.usedTimes===0){const R=m.indexOf(P);m[R]=m[m.length-1],m.pop(),P.destroy()}}function B(P){d.remove(P)}function z(){d.dispose()}return{getParameters:S,getProgramCacheKey:y,getUniforms:C,acquireProgram:N,releaseProgram:k,releaseShaderCache:B,programs:m,dispose:z}}function J2(){let n=new WeakMap;function e(u){return n.has(u)}function t(u){let f=n.get(u);return f===void 0&&(f={},n.set(u,f)),f}function r(u){n.delete(u)}function o(u,f,d){n.get(u)[f]=d}function l(){n=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function eD(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function f_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function d_(){const n=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function u(g,v,x,M,E,S){let y=n[e];return y===void 0?(y={id:g.id,object:g,geometry:v,material:x,groupOrder:M,renderOrder:g.renderOrder,z:E,group:S},n[e]=y):(y.id=g.id,y.object=g,y.geometry=v,y.material=x,y.groupOrder=M,y.renderOrder=g.renderOrder,y.z=E,y.group=S),e++,y}function f(g,v,x,M,E,S){const y=u(g,v,x,M,E,S);x.transmission>0?r.push(y):x.transparent===!0?o.push(y):t.push(y)}function d(g,v,x,M,E,S){const y=u(g,v,x,M,E,S);x.transmission>0?r.unshift(y):x.transparent===!0?o.unshift(y):t.unshift(y)}function h(g,v){t.length>1&&t.sort(g||eD),r.length>1&&r.sort(v||f_),o.length>1&&o.sort(v||f_)}function m(){for(let g=e,v=n.length;g<v;g++){const x=n[g];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:f,unshift:d,finish:m,sort:h}}function tD(){let n=new WeakMap;function e(r,o){const l=n.get(r);let u;return l===void 0?(u=new d_,n.set(r,[u])):o>=l.length?(u=new d_,l.push(u)):u=l[o],u}function t(){n=new WeakMap}return{get:e,dispose:t}}function nD(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new K,color:new Rt};break;case"SpotLight":t={position:new K,direction:new K,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new K,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new K,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":t={color:new Rt,position:new K,halfWidth:new K,halfHeight:new K};break}return n[e.id]=t,t}}}function iD(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let rD=0;function sD(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function oD(n){const e=new nD,t=iD(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new K);const o=new K,l=new Yt,u=new Yt;function f(h){let m=0,g=0,v=0;for(let P=0;P<9;P++)r.probe[P].set(0,0,0);let x=0,M=0,E=0,S=0,y=0,D=0,b=0,C=0,N=0,k=0,B=0;h.sort(sD);for(let P=0,R=h.length;P<R;P++){const F=h[P],le=F.color,te=F.intensity,se=F.distance,ce=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)m+=le.r*te,g+=le.g*te,v+=le.b*te;else if(F.isLightProbe){for(let ae=0;ae<9;ae++)r.probe[ae].addScaledVector(F.sh.coefficients[ae],te);B++}else if(F.isDirectionalLight){const ae=e.get(F);if(ae.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const re=F.shadow,V=t.get(F);V.shadowIntensity=re.intensity,V.shadowBias=re.bias,V.shadowNormalBias=re.normalBias,V.shadowRadius=re.radius,V.shadowMapSize=re.mapSize,r.directionalShadow[x]=V,r.directionalShadowMap[x]=ce,r.directionalShadowMatrix[x]=F.shadow.matrix,D++}r.directional[x]=ae,x++}else if(F.isSpotLight){const ae=e.get(F);ae.position.setFromMatrixPosition(F.matrixWorld),ae.color.copy(le).multiplyScalar(te),ae.distance=se,ae.coneCos=Math.cos(F.angle),ae.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),ae.decay=F.decay,r.spot[E]=ae;const re=F.shadow;if(F.map&&(r.spotLightMap[N]=F.map,N++,re.updateMatrices(F),F.castShadow&&k++),r.spotLightMatrix[E]=re.matrix,F.castShadow){const V=t.get(F);V.shadowIntensity=re.intensity,V.shadowBias=re.bias,V.shadowNormalBias=re.normalBias,V.shadowRadius=re.radius,V.shadowMapSize=re.mapSize,r.spotShadow[E]=V,r.spotShadowMap[E]=ce,C++}E++}else if(F.isRectAreaLight){const ae=e.get(F);ae.color.copy(le).multiplyScalar(te),ae.halfWidth.set(F.width*.5,0,0),ae.halfHeight.set(0,F.height*.5,0),r.rectArea[S]=ae,S++}else if(F.isPointLight){const ae=e.get(F);if(ae.color.copy(F.color).multiplyScalar(F.intensity),ae.distance=F.distance,ae.decay=F.decay,F.castShadow){const re=F.shadow,V=t.get(F);V.shadowIntensity=re.intensity,V.shadowBias=re.bias,V.shadowNormalBias=re.normalBias,V.shadowRadius=re.radius,V.shadowMapSize=re.mapSize,V.shadowCameraNear=re.camera.near,V.shadowCameraFar=re.camera.far,r.pointShadow[M]=V,r.pointShadowMap[M]=ce,r.pointShadowMatrix[M]=F.shadow.matrix,b++}r.point[M]=ae,M++}else if(F.isHemisphereLight){const ae=e.get(F);ae.skyColor.copy(F.color).multiplyScalar(te),ae.groundColor.copy(F.groundColor).multiplyScalar(te),r.hemi[y]=ae,y++}}S>0&&(n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Le.LTC_FLOAT_1,r.rectAreaLTC2=Le.LTC_FLOAT_2):(r.rectAreaLTC1=Le.LTC_HALF_1,r.rectAreaLTC2=Le.LTC_HALF_2)),r.ambient[0]=m,r.ambient[1]=g,r.ambient[2]=v;const z=r.hash;(z.directionalLength!==x||z.pointLength!==M||z.spotLength!==E||z.rectAreaLength!==S||z.hemiLength!==y||z.numDirectionalShadows!==D||z.numPointShadows!==b||z.numSpotShadows!==C||z.numSpotMaps!==N||z.numLightProbes!==B)&&(r.directional.length=x,r.spot.length=E,r.rectArea.length=S,r.point.length=M,r.hemi.length=y,r.directionalShadow.length=D,r.directionalShadowMap.length=D,r.pointShadow.length=b,r.pointShadowMap.length=b,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=D,r.pointShadowMatrix.length=b,r.spotLightMatrix.length=C+N-k,r.spotLightMap.length=N,r.numSpotLightShadowsWithMaps=k,r.numLightProbes=B,z.directionalLength=x,z.pointLength=M,z.spotLength=E,z.rectAreaLength=S,z.hemiLength=y,z.numDirectionalShadows=D,z.numPointShadows=b,z.numSpotShadows=C,z.numSpotMaps=N,z.numLightProbes=B,r.version=rD++)}function d(h,m){let g=0,v=0,x=0,M=0,E=0;const S=m.matrixWorldInverse;for(let y=0,D=h.length;y<D;y++){const b=h[y];if(b.isDirectionalLight){const C=r.directional[g];C.direction.setFromMatrixPosition(b.matrixWorld),o.setFromMatrixPosition(b.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(S),g++}else if(b.isSpotLight){const C=r.spot[x];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(S),C.direction.setFromMatrixPosition(b.matrixWorld),o.setFromMatrixPosition(b.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(S),x++}else if(b.isRectAreaLight){const C=r.rectArea[M];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(S),u.identity(),l.copy(b.matrixWorld),l.premultiply(S),u.extractRotation(l),C.halfWidth.set(b.width*.5,0,0),C.halfHeight.set(0,b.height*.5,0),C.halfWidth.applyMatrix4(u),C.halfHeight.applyMatrix4(u),M++}else if(b.isPointLight){const C=r.point[v];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(S),v++}else if(b.isHemisphereLight){const C=r.hemi[E];C.direction.setFromMatrixPosition(b.matrixWorld),C.direction.transformDirection(S),E++}}}return{setup:f,setupView:d,state:r}}function h_(n){const e=new oD(n),t=[],r=[];function o(m){h.camera=m,t.length=0,r.length=0}function l(m){t.push(m)}function u(m){r.push(m)}function f(){e.setup(t)}function d(m){e.setupView(t,m)}const h={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:h,setupLights:f,setupLightsView:d,pushLight:l,pushShadow:u}}function aD(n){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let f;return u===void 0?(f=new h_(n),e.set(o,[f])):l>=u.length?(f=new h_(n),u.push(f)):f=u[l],f}function r(){e=new WeakMap}return{get:t,dispose:r}}const lD=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,uD=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function cD(n,e,t){let r=new yp;const o=new At,l=new At,u=new Nt,f=new IC({depthPacking:XA}),d=new NC,h={},m=t.maxTextureSize,g={[kr]:Bn,[Bn]:kr,[Zi]:Zi},v=new Br({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new At},radius:{value:4}},vertexShader:lD,fragmentShader:uD}),x=v.clone();x.defines.HORIZONTAL_PASS=1;const M=new sr;M.setAttribute("position",new ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new Ji(M,v),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jy;let y=this.type;this.render=function(k,B,z){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||k.length===0)return;const P=n.getRenderTarget(),R=n.getActiveCubeFace(),F=n.getActiveMipmapLevel(),le=n.state;le.setBlending(Nr),le.buffers.depth.getReversed()?le.buffers.color.setClear(0,0,0,0):le.buffers.color.setClear(1,1,1,1),le.buffers.depth.setTest(!0),le.setScissorTest(!1);const te=y!==Ki&&this.type===Ki,se=y===Ki&&this.type!==Ki;for(let ce=0,ae=k.length;ce<ae;ce++){const re=k[ce],V=re.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",re,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;o.copy(V.mapSize);const oe=V.getFrameExtents();if(o.multiply(oe),l.copy(V.mapSize),(o.x>m||o.y>m)&&(o.x>m&&(l.x=Math.floor(m/oe.x),o.x=l.x*oe.x,V.mapSize.x=l.x),o.y>m&&(l.y=Math.floor(m/oe.y),o.y=l.y*oe.y,V.mapSize.y=l.y)),V.map===null||te===!0||se===!0){const U=this.type!==Ki?{minFilter:Ti,magFilter:Ti}:{};V.map!==null&&V.map.dispose(),V.map=new Ms(o.x,o.y,U),V.map.texture.name=re.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();const ie=V.getViewportCount();for(let U=0;U<ie;U++){const J=V.getViewport(U);u.set(l.x*J.x,l.y*J.y,l.x*J.z,l.y*J.w),le.viewport(u),V.updateMatrices(re,U),r=V.getFrustum(),C(B,z,V.camera,re,this.type)}V.isPointLightShadow!==!0&&this.type===Ki&&D(V,z),V.needsUpdate=!1}y=this.type,S.needsUpdate=!1,n.setRenderTarget(P,R,F)};function D(k,B){const z=e.update(E);v.defines.VSM_SAMPLES!==k.blurSamples&&(v.defines.VSM_SAMPLES=k.blurSamples,x.defines.VSM_SAMPLES=k.blurSamples,v.needsUpdate=!0,x.needsUpdate=!0),k.mapPass===null&&(k.mapPass=new Ms(o.x,o.y)),v.uniforms.shadow_pass.value=k.map.texture,v.uniforms.resolution.value=k.mapSize,v.uniforms.radius.value=k.radius,n.setRenderTarget(k.mapPass),n.clear(),n.renderBufferDirect(B,null,z,v,E,null),x.uniforms.shadow_pass.value=k.mapPass.texture,x.uniforms.resolution.value=k.mapSize,x.uniforms.radius.value=k.radius,n.setRenderTarget(k.map),n.clear(),n.renderBufferDirect(B,null,z,x,E,null)}function b(k,B,z,P){let R=null;const F=z.isPointLight===!0?k.customDistanceMaterial:k.customDepthMaterial;if(F!==void 0)R=F;else if(R=z.isPointLight===!0?d:f,n.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const le=R.uuid,te=B.uuid;let se=h[le];se===void 0&&(se={},h[le]=se);let ce=se[te];ce===void 0&&(ce=R.clone(),se[te]=ce,B.addEventListener("dispose",N)),R=ce}if(R.visible=B.visible,R.wireframe=B.wireframe,P===Ki?R.side=B.shadowSide!==null?B.shadowSide:B.side:R.side=B.shadowSide!==null?B.shadowSide:g[B.side],R.alphaMap=B.alphaMap,R.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,R.map=B.map,R.clipShadows=B.clipShadows,R.clippingPlanes=B.clippingPlanes,R.clipIntersection=B.clipIntersection,R.displacementMap=B.displacementMap,R.displacementScale=B.displacementScale,R.displacementBias=B.displacementBias,R.wireframeLinewidth=B.wireframeLinewidth,R.linewidth=B.linewidth,z.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const le=n.properties.get(R);le.light=z}return R}function C(k,B,z,P,R){if(k.visible===!1)return;if(k.layers.test(B.layers)&&(k.isMesh||k.isLine||k.isPoints)&&(k.castShadow||k.receiveShadow&&R===Ki)&&(!k.frustumCulled||r.intersectsObject(k))){k.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,k.matrixWorld);const te=e.update(k),se=k.material;if(Array.isArray(se)){const ce=te.groups;for(let ae=0,re=ce.length;ae<re;ae++){const V=ce[ae],oe=se[V.materialIndex];if(oe&&oe.visible){const ie=b(k,oe,P,R);k.onBeforeShadow(n,k,B,z,te,ie,V),n.renderBufferDirect(z,null,te,ie,k,V),k.onAfterShadow(n,k,B,z,te,ie,V)}}}else if(se.visible){const ce=b(k,se,P,R);k.onBeforeShadow(n,k,B,z,te,ce,null),n.renderBufferDirect(z,null,te,ce,k,null),k.onAfterShadow(n,k,B,z,te,ce,null)}}const le=k.children;for(let te=0,se=le.length;te<se;te++)C(le[te],B,z,P,R)}function N(k){k.target.removeEventListener("dispose",N);for(const z in h){const P=h[z],R=k.target.uuid;R in P&&(P[R].dispose(),delete P[R])}}}const fD={[jd]:qd,[Yd]:Zd,[$d]:Qd,[So]:Kd,[qd]:jd,[Zd]:Yd,[Qd]:$d,[Kd]:So};function dD(n,e){function t(){let G=!1;const Se=new Nt;let Ce=null;const Ne=new Nt(0,0,0,0);return{setMask:function(xe){Ce!==xe&&!G&&(n.colorMask(xe,xe,xe,xe),Ce=xe)},setLocked:function(xe){G=xe},setClear:function(xe,pe,Ge,ut,Pt){Pt===!0&&(xe*=ut,pe*=ut,Ge*=ut),Se.set(xe,pe,Ge,ut),Ne.equals(Se)===!1&&(n.clearColor(xe,pe,Ge,ut),Ne.copy(Se))},reset:function(){G=!1,Ce=null,Ne.set(-1,0,0,0)}}}function r(){let G=!1,Se=!1,Ce=null,Ne=null,xe=null;return{setReversed:function(pe){if(Se!==pe){const Ge=e.get("EXT_clip_control");pe?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT),Se=pe;const ut=xe;xe=null,this.setClear(ut)}},getReversed:function(){return Se},setTest:function(pe){pe?he(n.DEPTH_TEST):Te(n.DEPTH_TEST)},setMask:function(pe){Ce!==pe&&!G&&(n.depthMask(pe),Ce=pe)},setFunc:function(pe){if(Se&&(pe=fD[pe]),Ne!==pe){switch(pe){case jd:n.depthFunc(n.NEVER);break;case qd:n.depthFunc(n.ALWAYS);break;case Yd:n.depthFunc(n.LESS);break;case So:n.depthFunc(n.LEQUAL);break;case $d:n.depthFunc(n.EQUAL);break;case Kd:n.depthFunc(n.GEQUAL);break;case Zd:n.depthFunc(n.GREATER);break;case Qd:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ne=pe}},setLocked:function(pe){G=pe},setClear:function(pe){xe!==pe&&(Se&&(pe=1-pe),n.clearDepth(pe),xe=pe)},reset:function(){G=!1,Ce=null,Ne=null,xe=null,Se=!1}}}function o(){let G=!1,Se=null,Ce=null,Ne=null,xe=null,pe=null,Ge=null,ut=null,Pt=null;return{setTest:function(St){G||(St?he(n.STENCIL_TEST):Te(n.STENCIL_TEST))},setMask:function(St){Se!==St&&!G&&(n.stencilMask(St),Se=St)},setFunc:function(St,Zn,gn){(Ce!==St||Ne!==Zn||xe!==gn)&&(n.stencilFunc(St,Zn,gn),Ce=St,Ne=Zn,xe=gn)},setOp:function(St,Zn,gn){(pe!==St||Ge!==Zn||ut!==gn)&&(n.stencilOp(St,Zn,gn),pe=St,Ge=Zn,ut=gn)},setLocked:function(St){G=St},setClear:function(St){Pt!==St&&(n.clearStencil(St),Pt=St)},reset:function(){G=!1,Se=null,Ce=null,Ne=null,xe=null,pe=null,Ge=null,ut=null,Pt=null}}}const l=new t,u=new r,f=new o,d=new WeakMap,h=new WeakMap;let m={},g={},v=new WeakMap,x=[],M=null,E=!1,S=null,y=null,D=null,b=null,C=null,N=null,k=null,B=new Rt(0,0,0),z=0,P=!1,R=null,F=null,le=null,te=null,se=null;const ce=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ae=!1,re=0;const V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(V)[1]),ae=re>=1):V.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),ae=re>=2);let oe=null,ie={};const U=n.getParameter(n.SCISSOR_BOX),J=n.getParameter(n.VIEWPORT),Oe=new Nt().fromArray(U),me=new Nt().fromArray(J);function Y(G,Se,Ce,Ne){const xe=new Uint8Array(4),pe=n.createTexture();n.bindTexture(G,pe),n.texParameteri(G,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(G,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ge=0;Ge<Ce;Ge++)G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?n.texImage3D(Se,0,n.RGBA,1,1,Ne,0,n.RGBA,n.UNSIGNED_BYTE,xe):n.texImage2D(Se+Ge,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,xe);return pe}const fe={};fe[n.TEXTURE_2D]=Y(n.TEXTURE_2D,n.TEXTURE_2D,1),fe[n.TEXTURE_CUBE_MAP]=Y(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),fe[n.TEXTURE_2D_ARRAY]=Y(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),fe[n.TEXTURE_3D]=Y(n.TEXTURE_3D,n.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),he(n.DEPTH_TEST),u.setFunc(So),dt(!1),We(p0),he(n.CULL_FACE),yt(Nr);function he(G){m[G]!==!0&&(n.enable(G),m[G]=!0)}function Te(G){m[G]!==!1&&(n.disable(G),m[G]=!1)}function Pe(G,Se){return g[G]!==Se?(n.bindFramebuffer(G,Se),g[G]=Se,G===n.DRAW_FRAMEBUFFER&&(g[n.FRAMEBUFFER]=Se),G===n.FRAMEBUFFER&&(g[n.DRAW_FRAMEBUFFER]=Se),!0):!1}function Ye(G,Se){let Ce=x,Ne=!1;if(G){Ce=v.get(Se),Ce===void 0&&(Ce=[],v.set(Se,Ce));const xe=G.textures;if(Ce.length!==xe.length||Ce[0]!==n.COLOR_ATTACHMENT0){for(let pe=0,Ge=xe.length;pe<Ge;pe++)Ce[pe]=n.COLOR_ATTACHMENT0+pe;Ce.length=xe.length,Ne=!0}}else Ce[0]!==n.BACK&&(Ce[0]=n.BACK,Ne=!0);Ne&&n.drawBuffers(Ce)}function Dt(G){return M!==G?(n.useProgram(G),M=G,!0):!1}const mt={[hs]:n.FUNC_ADD,[vA]:n.FUNC_SUBTRACT,[_A]:n.FUNC_REVERSE_SUBTRACT};mt[yA]=n.MIN,mt[xA]=n.MAX;const O={[SA]:n.ZERO,[MA]:n.ONE,[EA]:n.SRC_COLOR,[Wd]:n.SRC_ALPHA,[PA]:n.SRC_ALPHA_SATURATE,[CA]:n.DST_COLOR,[wA]:n.DST_ALPHA,[TA]:n.ONE_MINUS_SRC_COLOR,[Xd]:n.ONE_MINUS_SRC_ALPHA,[RA]:n.ONE_MINUS_DST_COLOR,[AA]:n.ONE_MINUS_DST_ALPHA,[bA]:n.CONSTANT_COLOR,[DA]:n.ONE_MINUS_CONSTANT_COLOR,[LA]:n.CONSTANT_ALPHA,[IA]:n.ONE_MINUS_CONSTANT_ALPHA};function yt(G,Se,Ce,Ne,xe,pe,Ge,ut,Pt,St){if(G===Nr){E===!0&&(Te(n.BLEND),E=!1);return}if(E===!1&&(he(n.BLEND),E=!0),G!==gA){if(G!==S||St!==P){if((y!==hs||C!==hs)&&(n.blendEquation(n.FUNC_ADD),y=hs,C=hs),St)switch(G){case ys:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case m0:n.blendFunc(n.ONE,n.ONE);break;case g0:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case v0:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case ys:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case m0:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case g0:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case v0:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}D=null,b=null,N=null,k=null,B.set(0,0,0),z=0,S=G,P=St}return}xe=xe||Se,pe=pe||Ce,Ge=Ge||Ne,(Se!==y||xe!==C)&&(n.blendEquationSeparate(mt[Se],mt[xe]),y=Se,C=xe),(Ce!==D||Ne!==b||pe!==N||Ge!==k)&&(n.blendFuncSeparate(O[Ce],O[Ne],O[pe],O[Ge]),D=Ce,b=Ne,N=pe,k=Ge),(ut.equals(B)===!1||Pt!==z)&&(n.blendColor(ut.r,ut.g,ut.b,Pt),B.copy(ut),z=Pt),S=G,P=!1}function Qe(G,Se){G.side===Zi?Te(n.CULL_FACE):he(n.CULL_FACE);let Ce=G.side===Bn;Se&&(Ce=!Ce),dt(Ce),G.blending===ys&&G.transparent===!1?yt(Nr):yt(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),u.setFunc(G.depthFunc),u.setTest(G.depthTest),u.setMask(G.depthWrite),l.setMask(G.colorWrite);const Ne=G.stencilWrite;f.setTest(Ne),Ne&&(f.setMask(G.stencilWriteMask),f.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),f.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),ke(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?he(n.SAMPLE_ALPHA_TO_COVERAGE):Te(n.SAMPLE_ALPHA_TO_COVERAGE)}function dt(G){R!==G&&(G?n.frontFace(n.CW):n.frontFace(n.CCW),R=G)}function We(G){G!==hA?(he(n.CULL_FACE),G!==F&&(G===p0?n.cullFace(n.BACK):G===pA?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Te(n.CULL_FACE),F=G}function Ut(G){G!==le&&(ae&&n.lineWidth(G),le=G)}function ke(G,Se,Ce){G?(he(n.POLYGON_OFFSET_FILL),(te!==Se||se!==Ce)&&(n.polygonOffset(Se,Ce),te=Se,se=Ce)):Te(n.POLYGON_OFFSET_FILL)}function ct(G){G?he(n.SCISSOR_TEST):Te(n.SCISSOR_TEST)}function Bt(G){G===void 0&&(G=n.TEXTURE0+ce-1),oe!==G&&(n.activeTexture(G),oe=G)}function Vt(G,Se,Ce){Ce===void 0&&(oe===null?Ce=n.TEXTURE0+ce-1:Ce=oe);let Ne=ie[Ce];Ne===void 0&&(Ne={type:void 0,texture:void 0},ie[Ce]=Ne),(Ne.type!==G||Ne.texture!==Se)&&(oe!==Ce&&(n.activeTexture(Ce),oe=Ce),n.bindTexture(G,Se||fe[G]),Ne.type=G,Ne.texture=Se)}function L(){const G=ie[oe];G!==void 0&&G.type!==void 0&&(n.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function w(){try{n.compressedTexImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function $(){try{n.compressedTexImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function de(){try{n.texSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function _e(){try{n.texSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ue(){try{n.compressedTexSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function $e(){try{n.compressedTexSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ae(){try{n.texStorage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ve(){try{n.texStorage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ke(){try{n.texImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ee(){try{n.texImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ie(G){Oe.equals(G)===!1&&(n.scissor(G.x,G.y,G.z,G.w),Oe.copy(G))}function rt(G){me.equals(G)===!1&&(n.viewport(G.x,G.y,G.z,G.w),me.copy(G))}function je(G,Se){let Ce=h.get(Se);Ce===void 0&&(Ce=new WeakMap,h.set(Se,Ce));let Ne=Ce.get(G);Ne===void 0&&(Ne=n.getUniformBlockIndex(Se,G.name),Ce.set(G,Ne))}function be(G,Se){const Ne=h.get(Se).get(G);d.get(Se)!==Ne&&(n.uniformBlockBinding(Se,Ne,G.__bindingPointIndex),d.set(Se,Ne))}function ft(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),u.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),m={},oe=null,ie={},g={},v=new WeakMap,x=[],M=null,E=!1,S=null,y=null,D=null,b=null,C=null,N=null,k=null,B=new Rt(0,0,0),z=0,P=!1,R=null,F=null,le=null,te=null,se=null,Oe.set(0,0,n.canvas.width,n.canvas.height),me.set(0,0,n.canvas.width,n.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:he,disable:Te,bindFramebuffer:Pe,drawBuffers:Ye,useProgram:Dt,setBlending:yt,setMaterial:Qe,setFlipSided:dt,setCullFace:We,setLineWidth:Ut,setPolygonOffset:ke,setScissorTest:ct,activeTexture:Bt,bindTexture:Vt,unbindTexture:L,compressedTexImage2D:w,compressedTexImage3D:$,texImage2D:Ke,texImage3D:Ee,updateUBOMapping:je,uniformBlockBinding:be,texStorage2D:Ae,texStorage3D:Ve,texSubImage2D:de,texSubImage3D:_e,compressedTexSubImage2D:ue,compressedTexSubImage3D:$e,scissor:Ie,viewport:rt,reset:ft}}function hD(n,e,t,r,o,l,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new At,m=new WeakMap;let g;const v=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(L,w){return x?new OffscreenCanvas(L,w):Hu("canvas")}function E(L,w,$){let de=1;const _e=Vt(L);if((_e.width>$||_e.height>$)&&(de=$/Math.max(_e.width,_e.height)),de<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ue=Math.floor(de*_e.width),$e=Math.floor(de*_e.height);g===void 0&&(g=M(ue,$e));const Ae=w?M(ue,$e):g;return Ae.width=ue,Ae.height=$e,Ae.getContext("2d").drawImage(L,0,0,ue,$e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+ue+"x"+$e+")."),Ae}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),L;return L}function S(L){return L.generateMipmaps}function y(L){n.generateMipmap(L)}function D(L){return L.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?n.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(L,w,$,de,_e=!1){if(L!==null){if(n[L]!==void 0)return n[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ue=w;if(w===n.RED&&($===n.FLOAT&&(ue=n.R32F),$===n.HALF_FLOAT&&(ue=n.R16F),$===n.UNSIGNED_BYTE&&(ue=n.R8)),w===n.RED_INTEGER&&($===n.UNSIGNED_BYTE&&(ue=n.R8UI),$===n.UNSIGNED_SHORT&&(ue=n.R16UI),$===n.UNSIGNED_INT&&(ue=n.R32UI),$===n.BYTE&&(ue=n.R8I),$===n.SHORT&&(ue=n.R16I),$===n.INT&&(ue=n.R32I)),w===n.RG&&($===n.FLOAT&&(ue=n.RG32F),$===n.HALF_FLOAT&&(ue=n.RG16F),$===n.UNSIGNED_BYTE&&(ue=n.RG8)),w===n.RG_INTEGER&&($===n.UNSIGNED_BYTE&&(ue=n.RG8UI),$===n.UNSIGNED_SHORT&&(ue=n.RG16UI),$===n.UNSIGNED_INT&&(ue=n.RG32UI),$===n.BYTE&&(ue=n.RG8I),$===n.SHORT&&(ue=n.RG16I),$===n.INT&&(ue=n.RG32I)),w===n.RGB_INTEGER&&($===n.UNSIGNED_BYTE&&(ue=n.RGB8UI),$===n.UNSIGNED_SHORT&&(ue=n.RGB16UI),$===n.UNSIGNED_INT&&(ue=n.RGB32UI),$===n.BYTE&&(ue=n.RGB8I),$===n.SHORT&&(ue=n.RGB16I),$===n.INT&&(ue=n.RGB32I)),w===n.RGBA_INTEGER&&($===n.UNSIGNED_BYTE&&(ue=n.RGBA8UI),$===n.UNSIGNED_SHORT&&(ue=n.RGBA16UI),$===n.UNSIGNED_INT&&(ue=n.RGBA32UI),$===n.BYTE&&(ue=n.RGBA8I),$===n.SHORT&&(ue=n.RGBA16I),$===n.INT&&(ue=n.RGBA32I)),w===n.RGB&&$===n.UNSIGNED_INT_5_9_9_9_REV&&(ue=n.RGB9_E5),w===n.RGBA){const $e=_e?Vu:wt.getTransfer(de);$===n.FLOAT&&(ue=n.RGBA32F),$===n.HALF_FLOAT&&(ue=n.RGBA16F),$===n.UNSIGNED_BYTE&&(ue=$e===It?n.SRGB8_ALPHA8:n.RGBA8),$===n.UNSIGNED_SHORT_4_4_4_4&&(ue=n.RGBA4),$===n.UNSIGNED_SHORT_5_5_5_1&&(ue=n.RGB5_A1)}return(ue===n.R16F||ue===n.R32F||ue===n.RG16F||ue===n.RG32F||ue===n.RGBA16F||ue===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function C(L,w){let $;return L?w===null||w===Ss||w===ba?$=n.DEPTH24_STENCIL8:w===Qi?$=n.DEPTH32F_STENCIL8:w===Pa&&($=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Ss||w===ba?$=n.DEPTH_COMPONENT24:w===Qi?$=n.DEPTH_COMPONENT32F:w===Pa&&($=n.DEPTH_COMPONENT16),$}function N(L,w){return S(L)===!0||L.isFramebufferTexture&&L.minFilter!==Ti&&L.minFilter!==bi?Math.log2(Math.max(w.width,w.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?w.mipmaps.length:1}function k(L){const w=L.target;w.removeEventListener("dispose",k),z(w),w.isVideoTexture&&m.delete(w)}function B(L){const w=L.target;w.removeEventListener("dispose",B),R(w)}function z(L){const w=r.get(L);if(w.__webglInit===void 0)return;const $=L.source,de=v.get($);if(de){const _e=de[w.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&P(L),Object.keys(de).length===0&&v.delete($)}r.remove(L)}function P(L){const w=r.get(L);n.deleteTexture(w.__webglTexture);const $=L.source,de=v.get($);delete de[w.__cacheKey],u.memory.textures--}function R(L){const w=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let de=0;de<6;de++){if(Array.isArray(w.__webglFramebuffer[de]))for(let _e=0;_e<w.__webglFramebuffer[de].length;_e++)n.deleteFramebuffer(w.__webglFramebuffer[de][_e]);else n.deleteFramebuffer(w.__webglFramebuffer[de]);w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer[de])}else{if(Array.isArray(w.__webglFramebuffer))for(let de=0;de<w.__webglFramebuffer.length;de++)n.deleteFramebuffer(w.__webglFramebuffer[de]);else n.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&n.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let de=0;de<w.__webglColorRenderbuffer.length;de++)w.__webglColorRenderbuffer[de]&&n.deleteRenderbuffer(w.__webglColorRenderbuffer[de]);w.__webglDepthRenderbuffer&&n.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const $=L.textures;for(let de=0,_e=$.length;de<_e;de++){const ue=r.get($[de]);ue.__webglTexture&&(n.deleteTexture(ue.__webglTexture),u.memory.textures--),r.remove($[de])}r.remove(L)}let F=0;function le(){F=0}function te(){const L=F;return L>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+o.maxTextures),F+=1,L}function se(L){const w=[];return w.push(L.wrapS),w.push(L.wrapT),w.push(L.wrapR||0),w.push(L.magFilter),w.push(L.minFilter),w.push(L.anisotropy),w.push(L.internalFormat),w.push(L.format),w.push(L.type),w.push(L.generateMipmaps),w.push(L.premultiplyAlpha),w.push(L.flipY),w.push(L.unpackAlignment),w.push(L.colorSpace),w.join()}function ce(L,w){const $=r.get(L);if(L.isVideoTexture&&ct(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&$.__version!==L.version){const de=L.image;if(de===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{fe($,L,w);return}}else L.isExternalTexture&&($.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,$.__webglTexture,n.TEXTURE0+w)}function ae(L,w){const $=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&$.__version!==L.version){fe($,L,w);return}t.bindTexture(n.TEXTURE_2D_ARRAY,$.__webglTexture,n.TEXTURE0+w)}function re(L,w){const $=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&$.__version!==L.version){fe($,L,w);return}t.bindTexture(n.TEXTURE_3D,$.__webglTexture,n.TEXTURE0+w)}function V(L,w){const $=r.get(L);if(L.version>0&&$.__version!==L.version){he($,L,w);return}t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture,n.TEXTURE0+w)}const oe={[th]:n.REPEAT,[gs]:n.CLAMP_TO_EDGE,[nh]:n.MIRRORED_REPEAT},ie={[Ti]:n.NEAREST,[GA]:n.NEAREST_MIPMAP_NEAREST,[Jl]:n.NEAREST_MIPMAP_LINEAR,[bi]:n.LINEAR,[Yf]:n.LINEAR_MIPMAP_NEAREST,[vs]:n.LINEAR_MIPMAP_LINEAR},U={[YA]:n.NEVER,[eC]:n.ALWAYS,[$A]:n.LESS,[ix]:n.LEQUAL,[KA]:n.EQUAL,[JA]:n.GEQUAL,[ZA]:n.GREATER,[QA]:n.NOTEQUAL};function J(L,w){if(w.type===Qi&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===bi||w.magFilter===Yf||w.magFilter===Jl||w.magFilter===vs||w.minFilter===bi||w.minFilter===Yf||w.minFilter===Jl||w.minFilter===vs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(L,n.TEXTURE_WRAP_S,oe[w.wrapS]),n.texParameteri(L,n.TEXTURE_WRAP_T,oe[w.wrapT]),(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)&&n.texParameteri(L,n.TEXTURE_WRAP_R,oe[w.wrapR]),n.texParameteri(L,n.TEXTURE_MAG_FILTER,ie[w.magFilter]),n.texParameteri(L,n.TEXTURE_MIN_FILTER,ie[w.minFilter]),w.compareFunction&&(n.texParameteri(L,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(L,n.TEXTURE_COMPARE_FUNC,U[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Ti||w.minFilter!==Jl&&w.minFilter!==vs||w.type===Qi&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||r.get(w).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");n.texParameterf(L,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,o.getMaxAnisotropy())),r.get(w).__currentAnisotropy=w.anisotropy}}}function Oe(L,w){let $=!1;L.__webglInit===void 0&&(L.__webglInit=!0,w.addEventListener("dispose",k));const de=w.source;let _e=v.get(de);_e===void 0&&(_e={},v.set(de,_e));const ue=se(w);if(ue!==L.__cacheKey){_e[ue]===void 0&&(_e[ue]={texture:n.createTexture(),usedTimes:0},u.memory.textures++,$=!0),_e[ue].usedTimes++;const $e=_e[L.__cacheKey];$e!==void 0&&(_e[L.__cacheKey].usedTimes--,$e.usedTimes===0&&P(w)),L.__cacheKey=ue,L.__webglTexture=_e[ue].texture}return $}function me(L,w,$){return Math.floor(Math.floor(L/$)/w)}function Y(L,w,$,de){const ue=L.updateRanges;if(ue.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,w.width,w.height,$,de,w.data);else{ue.sort((Ee,Ie)=>Ee.start-Ie.start);let $e=0;for(let Ee=1;Ee<ue.length;Ee++){const Ie=ue[$e],rt=ue[Ee],je=Ie.start+Ie.count,be=me(rt.start,w.width,4),ft=me(Ie.start,w.width,4);rt.start<=je+1&&be===ft&&me(rt.start+rt.count-1,w.width,4)===be?Ie.count=Math.max(Ie.count,rt.start+rt.count-Ie.start):(++$e,ue[$e]=rt)}ue.length=$e+1;const Ae=n.getParameter(n.UNPACK_ROW_LENGTH),Ve=n.getParameter(n.UNPACK_SKIP_PIXELS),Ke=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,w.width);for(let Ee=0,Ie=ue.length;Ee<Ie;Ee++){const rt=ue[Ee],je=Math.floor(rt.start/4),be=Math.ceil(rt.count/4),ft=je%w.width,G=Math.floor(je/w.width),Se=be,Ce=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,ft),n.pixelStorei(n.UNPACK_SKIP_ROWS,G),t.texSubImage2D(n.TEXTURE_2D,0,ft,G,Se,Ce,$,de,w.data)}L.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,Ae),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ve),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ke)}}function fe(L,w,$){let de=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(de=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(de=n.TEXTURE_3D);const _e=Oe(L,w),ue=w.source;t.bindTexture(de,L.__webglTexture,n.TEXTURE0+$);const $e=r.get(ue);if(ue.version!==$e.__version||_e===!0){t.activeTexture(n.TEXTURE0+$);const Ae=wt.getPrimaries(wt.workingColorSpace),Ve=w.colorSpace===Ir?null:wt.getPrimaries(w.colorSpace),Ke=w.colorSpace===Ir||Ae===Ve?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke);let Ee=E(w.image,!1,o.maxTextureSize);Ee=Bt(w,Ee);const Ie=l.convert(w.format,w.colorSpace),rt=l.convert(w.type);let je=b(w.internalFormat,Ie,rt,w.colorSpace,w.isVideoTexture);J(de,w);let be;const ft=w.mipmaps,G=w.isVideoTexture!==!0,Se=$e.__version===void 0||_e===!0,Ce=ue.dataReady,Ne=N(w,Ee);if(w.isDepthTexture)je=C(w.format===La,w.type),Se&&(G?t.texStorage2D(n.TEXTURE_2D,1,je,Ee.width,Ee.height):t.texImage2D(n.TEXTURE_2D,0,je,Ee.width,Ee.height,0,Ie,rt,null));else if(w.isDataTexture)if(ft.length>0){G&&Se&&t.texStorage2D(n.TEXTURE_2D,Ne,je,ft[0].width,ft[0].height);for(let xe=0,pe=ft.length;xe<pe;xe++)be=ft[xe],G?Ce&&t.texSubImage2D(n.TEXTURE_2D,xe,0,0,be.width,be.height,Ie,rt,be.data):t.texImage2D(n.TEXTURE_2D,xe,je,be.width,be.height,0,Ie,rt,be.data);w.generateMipmaps=!1}else G?(Se&&t.texStorage2D(n.TEXTURE_2D,Ne,je,Ee.width,Ee.height),Ce&&Y(w,Ee,Ie,rt)):t.texImage2D(n.TEXTURE_2D,0,je,Ee.width,Ee.height,0,Ie,rt,Ee.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){G&&Se&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ne,je,ft[0].width,ft[0].height,Ee.depth);for(let xe=0,pe=ft.length;xe<pe;xe++)if(be=ft[xe],w.format!==Ei)if(Ie!==null)if(G){if(Ce)if(w.layerUpdates.size>0){const Ge=G0(be.width,be.height,w.format,w.type);for(const ut of w.layerUpdates){const Pt=be.data.subarray(ut*Ge/be.data.BYTES_PER_ELEMENT,(ut+1)*Ge/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,xe,0,0,ut,be.width,be.height,1,Ie,Pt)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,xe,0,0,0,be.width,be.height,Ee.depth,Ie,be.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,xe,je,be.width,be.height,Ee.depth,0,be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else G?Ce&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,xe,0,0,0,be.width,be.height,Ee.depth,Ie,rt,be.data):t.texImage3D(n.TEXTURE_2D_ARRAY,xe,je,be.width,be.height,Ee.depth,0,Ie,rt,be.data)}else{G&&Se&&t.texStorage2D(n.TEXTURE_2D,Ne,je,ft[0].width,ft[0].height);for(let xe=0,pe=ft.length;xe<pe;xe++)be=ft[xe],w.format!==Ei?Ie!==null?G?Ce&&t.compressedTexSubImage2D(n.TEXTURE_2D,xe,0,0,be.width,be.height,Ie,be.data):t.compressedTexImage2D(n.TEXTURE_2D,xe,je,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):G?Ce&&t.texSubImage2D(n.TEXTURE_2D,xe,0,0,be.width,be.height,Ie,rt,be.data):t.texImage2D(n.TEXTURE_2D,xe,je,be.width,be.height,0,Ie,rt,be.data)}else if(w.isDataArrayTexture)if(G){if(Se&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ne,je,Ee.width,Ee.height,Ee.depth),Ce)if(w.layerUpdates.size>0){const xe=G0(Ee.width,Ee.height,w.format,w.type);for(const pe of w.layerUpdates){const Ge=Ee.data.subarray(pe*xe/Ee.data.BYTES_PER_ELEMENT,(pe+1)*xe/Ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,pe,Ee.width,Ee.height,1,Ie,rt,Ge)}w.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,Ie,rt,Ee.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,je,Ee.width,Ee.height,Ee.depth,0,Ie,rt,Ee.data);else if(w.isData3DTexture)G?(Se&&t.texStorage3D(n.TEXTURE_3D,Ne,je,Ee.width,Ee.height,Ee.depth),Ce&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,Ie,rt,Ee.data)):t.texImage3D(n.TEXTURE_3D,0,je,Ee.width,Ee.height,Ee.depth,0,Ie,rt,Ee.data);else if(w.isFramebufferTexture){if(Se)if(G)t.texStorage2D(n.TEXTURE_2D,Ne,je,Ee.width,Ee.height);else{let xe=Ee.width,pe=Ee.height;for(let Ge=0;Ge<Ne;Ge++)t.texImage2D(n.TEXTURE_2D,Ge,je,xe,pe,0,Ie,rt,null),xe>>=1,pe>>=1}}else if(ft.length>0){if(G&&Se){const xe=Vt(ft[0]);t.texStorage2D(n.TEXTURE_2D,Ne,je,xe.width,xe.height)}for(let xe=0,pe=ft.length;xe<pe;xe++)be=ft[xe],G?Ce&&t.texSubImage2D(n.TEXTURE_2D,xe,0,0,Ie,rt,be):t.texImage2D(n.TEXTURE_2D,xe,je,Ie,rt,be);w.generateMipmaps=!1}else if(G){if(Se){const xe=Vt(Ee);t.texStorage2D(n.TEXTURE_2D,Ne,je,xe.width,xe.height)}Ce&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ie,rt,Ee)}else t.texImage2D(n.TEXTURE_2D,0,je,Ie,rt,Ee);S(w)&&y(de),$e.__version=ue.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function he(L,w,$){if(w.image.length!==6)return;const de=Oe(L,w),_e=w.source;t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+$);const ue=r.get(_e);if(_e.version!==ue.__version||de===!0){t.activeTexture(n.TEXTURE0+$);const $e=wt.getPrimaries(wt.workingColorSpace),Ae=w.colorSpace===Ir?null:wt.getPrimaries(w.colorSpace),Ve=w.colorSpace===Ir||$e===Ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);const Ke=w.isCompressedTexture||w.image[0].isCompressedTexture,Ee=w.image[0]&&w.image[0].isDataTexture,Ie=[];for(let pe=0;pe<6;pe++)!Ke&&!Ee?Ie[pe]=E(w.image[pe],!0,o.maxCubemapSize):Ie[pe]=Ee?w.image[pe].image:w.image[pe],Ie[pe]=Bt(w,Ie[pe]);const rt=Ie[0],je=l.convert(w.format,w.colorSpace),be=l.convert(w.type),ft=b(w.internalFormat,je,be,w.colorSpace),G=w.isVideoTexture!==!0,Se=ue.__version===void 0||de===!0,Ce=_e.dataReady;let Ne=N(w,rt);J(n.TEXTURE_CUBE_MAP,w);let xe;if(Ke){G&&Se&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ne,ft,rt.width,rt.height);for(let pe=0;pe<6;pe++){xe=Ie[pe].mipmaps;for(let Ge=0;Ge<xe.length;Ge++){const ut=xe[Ge];w.format!==Ei?je!==null?G?Ce&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ge,0,0,ut.width,ut.height,je,ut.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ge,ft,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?Ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ge,0,0,ut.width,ut.height,je,be,ut.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ge,ft,ut.width,ut.height,0,je,be,ut.data)}}}else{if(xe=w.mipmaps,G&&Se){xe.length>0&&Ne++;const pe=Vt(Ie[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ne,ft,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(Ee){G?Ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Ie[pe].width,Ie[pe].height,je,be,Ie[pe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ft,Ie[pe].width,Ie[pe].height,0,je,be,Ie[pe].data);for(let Ge=0;Ge<xe.length;Ge++){const Pt=xe[Ge].image[pe].image;G?Ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ge+1,0,0,Pt.width,Pt.height,je,be,Pt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ge+1,ft,Pt.width,Pt.height,0,je,be,Pt.data)}}else{G?Ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,je,be,Ie[pe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ft,je,be,Ie[pe]);for(let Ge=0;Ge<xe.length;Ge++){const ut=xe[Ge];G?Ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ge+1,0,0,je,be,ut.image[pe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ge+1,ft,je,be,ut.image[pe])}}}S(w)&&y(n.TEXTURE_CUBE_MAP),ue.__version=_e.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function Te(L,w,$,de,_e,ue){const $e=l.convert($.format,$.colorSpace),Ae=l.convert($.type),Ve=b($.internalFormat,$e,Ae,$.colorSpace),Ke=r.get(w),Ee=r.get($);if(Ee.__renderTarget=w,!Ke.__hasExternalTextures){const Ie=Math.max(1,w.width>>ue),rt=Math.max(1,w.height>>ue);_e===n.TEXTURE_3D||_e===n.TEXTURE_2D_ARRAY?t.texImage3D(_e,ue,Ve,Ie,rt,w.depth,0,$e,Ae,null):t.texImage2D(_e,ue,Ve,Ie,rt,0,$e,Ae,null)}t.bindFramebuffer(n.FRAMEBUFFER,L),ke(w)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,de,_e,Ee.__webglTexture,0,Ut(w)):(_e===n.TEXTURE_2D||_e>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,de,_e,Ee.__webglTexture,ue),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Pe(L,w,$){if(n.bindRenderbuffer(n.RENDERBUFFER,L),w.depthBuffer){const de=w.depthTexture,_e=de&&de.isDepthTexture?de.type:null,ue=C(w.stencilBuffer,_e),$e=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ae=Ut(w);ke(w)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ae,ue,w.width,w.height):$?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ae,ue,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,ue,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,$e,n.RENDERBUFFER,L)}else{const de=w.textures;for(let _e=0;_e<de.length;_e++){const ue=de[_e],$e=l.convert(ue.format,ue.colorSpace),Ae=l.convert(ue.type),Ve=b(ue.internalFormat,$e,Ae,ue.colorSpace),Ke=Ut(w);$&&ke(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ke,Ve,w.width,w.height):ke(w)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ke,Ve,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,Ve,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ye(L,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,L),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const de=r.get(w.depthTexture);de.__renderTarget=w,(!de.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),ce(w.depthTexture,0);const _e=de.__webglTexture,ue=Ut(w);if(w.depthTexture.format===Da)ke(w)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,_e,0,ue):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,_e,0);else if(w.depthTexture.format===La)ke(w)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,_e,0,ue):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,_e,0);else throw new Error("Unknown depthTexture format")}function Dt(L){const w=r.get(L),$=L.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==L.depthTexture){const de=L.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),de){const _e=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,de.removeEventListener("dispose",_e)};de.addEventListener("dispose",_e),w.__depthDisposeCallback=_e}w.__boundDepthTexture=de}if(L.depthTexture&&!w.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");const de=L.texture.mipmaps;de&&de.length>0?Ye(w.__webglFramebuffer[0],L):Ye(w.__webglFramebuffer,L)}else if($){w.__webglDepthbuffer=[];for(let de=0;de<6;de++)if(t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[de]),w.__webglDepthbuffer[de]===void 0)w.__webglDepthbuffer[de]=n.createRenderbuffer(),Pe(w.__webglDepthbuffer[de],L,!1);else{const _e=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=w.__webglDepthbuffer[de];n.bindRenderbuffer(n.RENDERBUFFER,ue),n.framebufferRenderbuffer(n.FRAMEBUFFER,_e,n.RENDERBUFFER,ue)}}else{const de=L.texture.mipmaps;if(de&&de.length>0?t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=n.createRenderbuffer(),Pe(w.__webglDepthbuffer,L,!1);else{const _e=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=w.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ue),n.framebufferRenderbuffer(n.FRAMEBUFFER,_e,n.RENDERBUFFER,ue)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function mt(L,w,$){const de=r.get(L);w!==void 0&&Te(de.__webglFramebuffer,L,L.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),$!==void 0&&Dt(L)}function O(L){const w=L.texture,$=r.get(L),de=r.get(w);L.addEventListener("dispose",B);const _e=L.textures,ue=L.isWebGLCubeRenderTarget===!0,$e=_e.length>1;if($e||(de.__webglTexture===void 0&&(de.__webglTexture=n.createTexture()),de.__version=w.version,u.memory.textures++),ue){$.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(w.mipmaps&&w.mipmaps.length>0){$.__webglFramebuffer[Ae]=[];for(let Ve=0;Ve<w.mipmaps.length;Ve++)$.__webglFramebuffer[Ae][Ve]=n.createFramebuffer()}else $.__webglFramebuffer[Ae]=n.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){$.__webglFramebuffer=[];for(let Ae=0;Ae<w.mipmaps.length;Ae++)$.__webglFramebuffer[Ae]=n.createFramebuffer()}else $.__webglFramebuffer=n.createFramebuffer();if($e)for(let Ae=0,Ve=_e.length;Ae<Ve;Ae++){const Ke=r.get(_e[Ae]);Ke.__webglTexture===void 0&&(Ke.__webglTexture=n.createTexture(),u.memory.textures++)}if(L.samples>0&&ke(L)===!1){$.__webglMultisampledFramebuffer=n.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let Ae=0;Ae<_e.length;Ae++){const Ve=_e[Ae];$.__webglColorRenderbuffer[Ae]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,$.__webglColorRenderbuffer[Ae]);const Ke=l.convert(Ve.format,Ve.colorSpace),Ee=l.convert(Ve.type),Ie=b(Ve.internalFormat,Ke,Ee,Ve.colorSpace,L.isXRRenderTarget===!0),rt=Ut(L);n.renderbufferStorageMultisample(n.RENDERBUFFER,rt,Ie,L.width,L.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,$.__webglColorRenderbuffer[Ae])}n.bindRenderbuffer(n.RENDERBUFFER,null),L.depthBuffer&&($.__webglDepthRenderbuffer=n.createRenderbuffer(),Pe($.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ue){t.bindTexture(n.TEXTURE_CUBE_MAP,de.__webglTexture),J(n.TEXTURE_CUBE_MAP,w);for(let Ae=0;Ae<6;Ae++)if(w.mipmaps&&w.mipmaps.length>0)for(let Ve=0;Ve<w.mipmaps.length;Ve++)Te($.__webglFramebuffer[Ae][Ve],L,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ve);else Te($.__webglFramebuffer[Ae],L,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);S(w)&&y(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if($e){for(let Ae=0,Ve=_e.length;Ae<Ve;Ae++){const Ke=_e[Ae],Ee=r.get(Ke);let Ie=n.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ie=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ie,Ee.__webglTexture),J(Ie,Ke),Te($.__webglFramebuffer,L,Ke,n.COLOR_ATTACHMENT0+Ae,Ie,0),S(Ke)&&y(Ie)}t.unbindTexture()}else{let Ae=n.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ae=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ae,de.__webglTexture),J(Ae,w),w.mipmaps&&w.mipmaps.length>0)for(let Ve=0;Ve<w.mipmaps.length;Ve++)Te($.__webglFramebuffer[Ve],L,w,n.COLOR_ATTACHMENT0,Ae,Ve);else Te($.__webglFramebuffer,L,w,n.COLOR_ATTACHMENT0,Ae,0);S(w)&&y(Ae),t.unbindTexture()}L.depthBuffer&&Dt(L)}function yt(L){const w=L.textures;for(let $=0,de=w.length;$<de;$++){const _e=w[$];if(S(_e)){const ue=D(L),$e=r.get(_e).__webglTexture;t.bindTexture(ue,$e),y(ue),t.unbindTexture()}}}const Qe=[],dt=[];function We(L){if(L.samples>0){if(ke(L)===!1){const w=L.textures,$=L.width,de=L.height;let _e=n.COLOR_BUFFER_BIT;const ue=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$e=r.get(L),Ae=w.length>1;if(Ae)for(let Ke=0;Ke<w.length;Ke++)t.bindFramebuffer(n.FRAMEBUFFER,$e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ke,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,$e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ke,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,$e.__webglMultisampledFramebuffer);const Ve=L.texture.mipmaps;Ve&&Ve.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,$e.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,$e.__webglFramebuffer);for(let Ke=0;Ke<w.length;Ke++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(_e|=n.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(_e|=n.STENCIL_BUFFER_BIT)),Ae){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,$e.__webglColorRenderbuffer[Ke]);const Ee=r.get(w[Ke]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ee,0)}n.blitFramebuffer(0,0,$,de,0,0,$,de,_e,n.NEAREST),d===!0&&(Qe.length=0,dt.length=0,Qe.push(n.COLOR_ATTACHMENT0+Ke),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Qe.push(ue),dt.push(ue),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,dt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Qe))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Ae)for(let Ke=0;Ke<w.length;Ke++){t.bindFramebuffer(n.FRAMEBUFFER,$e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ke,n.RENDERBUFFER,$e.__webglColorRenderbuffer[Ke]);const Ee=r.get(w[Ke]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,$e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ke,n.TEXTURE_2D,Ee,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,$e.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&d){const w=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[w])}}}function Ut(L){return Math.min(o.maxSamples,L.samples)}function ke(L){const w=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function ct(L){const w=u.render.frame;m.get(L)!==w&&(m.set(L,w),L.update())}function Bt(L,w){const $=L.colorSpace,de=L.format,_e=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||$!==To&&$!==Ir&&(wt.getTransfer($)===It?(de!==Ei||_e!==Ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),w}function Vt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(h.width=L.naturalWidth||L.width,h.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(h.width=L.displayWidth,h.height=L.displayHeight):(h.width=L.width,h.height=L.height),h}this.allocateTextureUnit=te,this.resetTextureUnits=le,this.setTexture2D=ce,this.setTexture2DArray=ae,this.setTexture3D=re,this.setTextureCube=V,this.rebindTextures=mt,this.setupRenderTarget=O,this.updateRenderTargetMipmap=yt,this.updateMultisampleRenderTarget=We,this.setupDepthRenderbuffer=Dt,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=ke}function pD(n,e){function t(r,o=Ir){let l;const u=wt.getTransfer(o);if(r===Ni)return n.UNSIGNED_BYTE;if(r===hp)return n.UNSIGNED_SHORT_4_4_4_4;if(r===pp)return n.UNSIGNED_SHORT_5_5_5_1;if(r===Zy)return n.UNSIGNED_INT_5_9_9_9_REV;if(r===$y)return n.BYTE;if(r===Ky)return n.SHORT;if(r===Pa)return n.UNSIGNED_SHORT;if(r===dp)return n.INT;if(r===Ss)return n.UNSIGNED_INT;if(r===Qi)return n.FLOAT;if(r===Oa)return n.HALF_FLOAT;if(r===Qy)return n.ALPHA;if(r===Jy)return n.RGB;if(r===Ei)return n.RGBA;if(r===Da)return n.DEPTH_COMPONENT;if(r===La)return n.DEPTH_STENCIL;if(r===ex)return n.RED;if(r===mp)return n.RED_INTEGER;if(r===tx)return n.RG;if(r===gp)return n.RG_INTEGER;if(r===vp)return n.RGBA_INTEGER;if(r===Cu||r===Ru||r===Pu||r===bu)if(u===It)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Cu)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ru)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Pu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===bu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Cu)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ru)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Pu)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===bu)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ih||r===rh||r===sh||r===oh)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===ih)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===rh)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===sh)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===oh)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===ah||r===lh||r===uh)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===ah||r===lh)return u===It?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===uh)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===ch||r===fh||r===dh||r===hh||r===ph||r===mh||r===gh||r===vh||r===_h||r===yh||r===xh||r===Sh||r===Mh||r===Eh)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===ch)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===fh)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===dh)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===hh)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ph)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===mh)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===gh)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===vh)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===_h)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===yh)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===xh)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Sh)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Mh)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Eh)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Du||r===Th||r===wh)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Du)return u===It?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Th)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===wh)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===nx||r===Ah||r===Ch||r===Rh)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Du)return l.COMPRESSED_RED_RGTC1_EXT;if(r===Ah)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Ch)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Rh)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ba?n.UNSIGNED_INT_24_8:n[r]!==void 0?n[r]:null}return{convert:t}}class Tx extends Vn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const mD=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gD=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class vD{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new Tx(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Br({vertexShader:mD,fragmentShader:gD,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ji(new Ku(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class _D extends Ro{constructor(e,t){super();const r=this;let o=null,l=1,u=null,f="local-floor",d=1,h=null,m=null,g=null,v=null,x=null,M=null;const E=new vD,S={},y=t.getContextAttributes();let D=null,b=null;const C=[],N=[],k=new At;let B=null;const z=new Yn;z.viewport=new Nt;const P=new Yn;P.viewport=new Nt;const R=[z,P],F=new BC;let le=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let fe=C[Y];return fe===void 0&&(fe=new vd,C[Y]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(Y){let fe=C[Y];return fe===void 0&&(fe=new vd,C[Y]=fe),fe.getGripSpace()},this.getHand=function(Y){let fe=C[Y];return fe===void 0&&(fe=new vd,C[Y]=fe),fe.getHandSpace()};function se(Y){const fe=N.indexOf(Y.inputSource);if(fe===-1)return;const he=C[fe];he!==void 0&&(he.update(Y.inputSource,Y.frame,h||u),he.dispatchEvent({type:Y.type,data:Y.inputSource}))}function ce(){o.removeEventListener("select",se),o.removeEventListener("selectstart",se),o.removeEventListener("selectend",se),o.removeEventListener("squeeze",se),o.removeEventListener("squeezestart",se),o.removeEventListener("squeezeend",se),o.removeEventListener("end",ce),o.removeEventListener("inputsourceschange",ae);for(let Y=0;Y<C.length;Y++){const fe=N[Y];fe!==null&&(N[Y]=null,C[Y].disconnect(fe))}le=null,te=null,E.reset();for(const Y in S)delete S[Y];e.setRenderTarget(D),x=null,v=null,g=null,o=null,b=null,me.stop(),r.isPresenting=!1,e.setPixelRatio(B),e.setSize(k.width,k.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){l=Y,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){f=Y,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||u},this.setReferenceSpace=function(Y){h=Y},this.getBaseLayer=function(){return v!==null?v:x},this.getBinding=function(){return g},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function(Y){if(o=Y,o!==null){if(D=e.getRenderTarget(),o.addEventListener("select",se),o.addEventListener("selectstart",se),o.addEventListener("selectend",se),o.addEventListener("squeeze",se),o.addEventListener("squeezestart",se),o.addEventListener("squeezeend",se),o.addEventListener("end",ce),o.addEventListener("inputsourceschange",ae),y.xrCompatible!==!0&&await t.makeXRCompatible(),B=e.getPixelRatio(),e.getSize(k),typeof XRWebGLBinding<"u"&&(g=new XRWebGLBinding(o,t)),g!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let he=null,Te=null,Pe=null;y.depth&&(Pe=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=y.stencil?La:Da,Te=y.stencil?ba:Ss);const Ye={colorFormat:t.RGBA8,depthFormat:Pe,scaleFactor:l};v=g.createProjectionLayer(Ye),o.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),b=new Ms(v.textureWidth,v.textureHeight,{format:Ei,type:Ni,depthTexture:new gx(v.textureWidth,v.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const he={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:l};x=new XRWebGLLayer(o,t,he),o.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),b=new Ms(x.framebufferWidth,x.framebufferHeight,{format:Ei,type:Ni,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(d),h=null,u=await o.requestReferenceSpace(f),me.setContext(o),me.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function ae(Y){for(let fe=0;fe<Y.removed.length;fe++){const he=Y.removed[fe],Te=N.indexOf(he);Te>=0&&(N[Te]=null,C[Te].disconnect(he))}for(let fe=0;fe<Y.added.length;fe++){const he=Y.added[fe];let Te=N.indexOf(he);if(Te===-1){for(let Ye=0;Ye<C.length;Ye++)if(Ye>=N.length){N.push(he),Te=Ye;break}else if(N[Ye]===null){N[Ye]=he,Te=Ye;break}if(Te===-1)break}const Pe=C[Te];Pe&&Pe.connect(he)}}const re=new K,V=new K;function oe(Y,fe,he){re.setFromMatrixPosition(fe.matrixWorld),V.setFromMatrixPosition(he.matrixWorld);const Te=re.distanceTo(V),Pe=fe.projectionMatrix.elements,Ye=he.projectionMatrix.elements,Dt=Pe[14]/(Pe[10]-1),mt=Pe[14]/(Pe[10]+1),O=(Pe[9]+1)/Pe[5],yt=(Pe[9]-1)/Pe[5],Qe=(Pe[8]-1)/Pe[0],dt=(Ye[8]+1)/Ye[0],We=Dt*Qe,Ut=Dt*dt,ke=Te/(-Qe+dt),ct=ke*-Qe;if(fe.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(ct),Y.translateZ(ke),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Pe[10]===-1)Y.projectionMatrix.copy(fe.projectionMatrix),Y.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const Bt=Dt+ke,Vt=mt+ke,L=We-ct,w=Ut+(Te-ct),$=O*mt/Vt*Bt,de=yt*mt/Vt*Bt;Y.projectionMatrix.makePerspective(L,w,$,de,Bt,Vt),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function ie(Y,fe){fe===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(fe.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(o===null)return;let fe=Y.near,he=Y.far;E.texture!==null&&(E.depthNear>0&&(fe=E.depthNear),E.depthFar>0&&(he=E.depthFar)),F.near=P.near=z.near=fe,F.far=P.far=z.far=he,(le!==F.near||te!==F.far)&&(o.updateRenderState({depthNear:F.near,depthFar:F.far}),le=F.near,te=F.far),F.layers.mask=Y.layers.mask|6,z.layers.mask=F.layers.mask&3,P.layers.mask=F.layers.mask&5;const Te=Y.parent,Pe=F.cameras;ie(F,Te);for(let Ye=0;Ye<Pe.length;Ye++)ie(Pe[Ye],Te);Pe.length===2?oe(F,z,P):F.projectionMatrix.copy(z.projectionMatrix),U(Y,F,Te)};function U(Y,fe,he){he===null?Y.matrix.copy(fe.matrixWorld):(Y.matrix.copy(he.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(fe.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(fe.projectionMatrix),Y.projectionMatrixInverse.copy(fe.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Ph*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(v===null&&x===null))return d},this.setFoveation=function(Y){d=Y,v!==null&&(v.fixedFoveation=Y),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=Y)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(F)},this.getCameraTexture=function(Y){return S[Y]};let J=null;function Oe(Y,fe){if(m=fe.getViewerPose(h||u),M=fe,m!==null){const he=m.views;x!==null&&(e.setRenderTargetFramebuffer(b,x.framebuffer),e.setRenderTarget(b));let Te=!1;he.length!==F.cameras.length&&(F.cameras.length=0,Te=!0);for(let mt=0;mt<he.length;mt++){const O=he[mt];let yt=null;if(x!==null)yt=x.getViewport(O);else{const dt=g.getViewSubImage(v,O);yt=dt.viewport,mt===0&&(e.setRenderTargetTextures(b,dt.colorTexture,dt.depthStencilTexture),e.setRenderTarget(b))}let Qe=R[mt];Qe===void 0&&(Qe=new Yn,Qe.layers.enable(mt),Qe.viewport=new Nt,R[mt]=Qe),Qe.matrix.fromArray(O.transform.matrix),Qe.matrix.decompose(Qe.position,Qe.quaternion,Qe.scale),Qe.projectionMatrix.fromArray(O.projectionMatrix),Qe.projectionMatrixInverse.copy(Qe.projectionMatrix).invert(),Qe.viewport.set(yt.x,yt.y,yt.width,yt.height),mt===0&&(F.matrix.copy(Qe.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Te===!0&&F.cameras.push(Qe)}const Pe=o.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&g){const mt=g.getDepthInformation(he[0]);mt&&mt.isValid&&mt.texture&&E.init(mt,o.renderState)}if(Pe&&Pe.includes("camera-access")&&(e.state.unbindTexture(),g))for(let mt=0;mt<he.length;mt++){const O=he[mt].camera;if(O){let yt=S[O];yt||(yt=new Tx,S[O]=yt);const Qe=g.getCameraImage(O);yt.sourceTexture=Qe}}}for(let he=0;he<C.length;he++){const Te=N[he],Pe=C[he];Te!==null&&Pe!==void 0&&Pe.update(Te,fe,h||u)}J&&J(Y,fe),fe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:fe}),M=null}const me=new yx;me.setAnimationLoop(Oe),this.setAnimationLoop=function(Y){J=Y},this.dispose=function(){}}}const ls=new rr,yD=new Yt;function xD(n,e){function t(S,y){S.matrixAutoUpdate===!0&&S.updateMatrix(),y.value.copy(S.matrix)}function r(S,y){y.color.getRGB(S.fogColor.value,dx(n)),y.isFog?(S.fogNear.value=y.near,S.fogFar.value=y.far):y.isFogExp2&&(S.fogDensity.value=y.density)}function o(S,y,D,b,C){y.isMeshBasicMaterial||y.isMeshLambertMaterial?l(S,y):y.isMeshToonMaterial?(l(S,y),g(S,y)):y.isMeshPhongMaterial?(l(S,y),m(S,y)):y.isMeshStandardMaterial?(l(S,y),v(S,y),y.isMeshPhysicalMaterial&&x(S,y,C)):y.isMeshMatcapMaterial?(l(S,y),M(S,y)):y.isMeshDepthMaterial?l(S,y):y.isMeshDistanceMaterial?(l(S,y),E(S,y)):y.isMeshNormalMaterial?l(S,y):y.isLineBasicMaterial?(u(S,y),y.isLineDashedMaterial&&f(S,y)):y.isPointsMaterial?d(S,y,D,b):y.isSpriteMaterial?h(S,y):y.isShadowMaterial?(S.color.value.copy(y.color),S.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function l(S,y){S.opacity.value=y.opacity,y.color&&S.diffuse.value.copy(y.color),y.emissive&&S.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(S.map.value=y.map,t(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.bumpMap&&(S.bumpMap.value=y.bumpMap,t(y.bumpMap,S.bumpMapTransform),S.bumpScale.value=y.bumpScale,y.side===Bn&&(S.bumpScale.value*=-1)),y.normalMap&&(S.normalMap.value=y.normalMap,t(y.normalMap,S.normalMapTransform),S.normalScale.value.copy(y.normalScale),y.side===Bn&&S.normalScale.value.negate()),y.displacementMap&&(S.displacementMap.value=y.displacementMap,t(y.displacementMap,S.displacementMapTransform),S.displacementScale.value=y.displacementScale,S.displacementBias.value=y.displacementBias),y.emissiveMap&&(S.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,S.emissiveMapTransform)),y.specularMap&&(S.specularMap.value=y.specularMap,t(y.specularMap,S.specularMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest);const D=e.get(y),b=D.envMap,C=D.envMapRotation;b&&(S.envMap.value=b,ls.copy(C),ls.x*=-1,ls.y*=-1,ls.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(ls.y*=-1,ls.z*=-1),S.envMapRotation.value.setFromMatrix4(yD.makeRotationFromEuler(ls)),S.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=y.reflectivity,S.ior.value=y.ior,S.refractionRatio.value=y.refractionRatio),y.lightMap&&(S.lightMap.value=y.lightMap,S.lightMapIntensity.value=y.lightMapIntensity,t(y.lightMap,S.lightMapTransform)),y.aoMap&&(S.aoMap.value=y.aoMap,S.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,S.aoMapTransform))}function u(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,y.map&&(S.map.value=y.map,t(y.map,S.mapTransform))}function f(S,y){S.dashSize.value=y.dashSize,S.totalSize.value=y.dashSize+y.gapSize,S.scale.value=y.scale}function d(S,y,D,b){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.size.value=y.size*D,S.scale.value=b*.5,y.map&&(S.map.value=y.map,t(y.map,S.uvTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function h(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.rotation.value=y.rotation,y.map&&(S.map.value=y.map,t(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function m(S,y){S.specular.value.copy(y.specular),S.shininess.value=Math.max(y.shininess,1e-4)}function g(S,y){y.gradientMap&&(S.gradientMap.value=y.gradientMap)}function v(S,y){S.metalness.value=y.metalness,y.metalnessMap&&(S.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,S.metalnessMapTransform)),S.roughness.value=y.roughness,y.roughnessMap&&(S.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,S.roughnessMapTransform)),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)}function x(S,y,D){S.ior.value=y.ior,y.sheen>0&&(S.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),S.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(S.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,S.sheenColorMapTransform)),y.sheenRoughnessMap&&(S.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,S.sheenRoughnessMapTransform))),y.clearcoat>0&&(S.clearcoat.value=y.clearcoat,S.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(S.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,S.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(S.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Bn&&S.clearcoatNormalScale.value.negate())),y.dispersion>0&&(S.dispersion.value=y.dispersion),y.iridescence>0&&(S.iridescence.value=y.iridescence,S.iridescenceIOR.value=y.iridescenceIOR,S.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(S.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,S.iridescenceMapTransform)),y.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),y.transmission>0&&(S.transmission.value=y.transmission,S.transmissionSamplerMap.value=D.texture,S.transmissionSamplerSize.value.set(D.width,D.height),y.transmissionMap&&(S.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,S.transmissionMapTransform)),S.thickness.value=y.thickness,y.thicknessMap&&(S.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=y.attenuationDistance,S.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(S.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(S.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=y.specularIntensity,S.specularColor.value.copy(y.specularColor),y.specularColorMap&&(S.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,S.specularColorMapTransform)),y.specularIntensityMap&&(S.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,y){y.matcap&&(S.matcap.value=y.matcap)}function E(S,y){const D=e.get(y).light;S.referencePosition.value.setFromMatrixPosition(D.matrixWorld),S.nearDistance.value=D.shadow.camera.near,S.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function SD(n,e,t,r){let o={},l={},u=[];const f=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function d(D,b){const C=b.program;r.uniformBlockBinding(D,C)}function h(D,b){let C=o[D.id];C===void 0&&(M(D),C=m(D),o[D.id]=C,D.addEventListener("dispose",S));const N=b.program;r.updateUBOMapping(D,N);const k=e.render.frame;l[D.id]!==k&&(v(D),l[D.id]=k)}function m(D){const b=g();D.__bindingPointIndex=b;const C=n.createBuffer(),N=D.__size,k=D.usage;return n.bindBuffer(n.UNIFORM_BUFFER,C),n.bufferData(n.UNIFORM_BUFFER,N,k),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,C),C}function g(){for(let D=0;D<f;D++)if(u.indexOf(D)===-1)return u.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(D){const b=o[D.id],C=D.uniforms,N=D.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let k=0,B=C.length;k<B;k++){const z=Array.isArray(C[k])?C[k]:[C[k]];for(let P=0,R=z.length;P<R;P++){const F=z[P];if(x(F,k,P,N)===!0){const le=F.__offset,te=Array.isArray(F.value)?F.value:[F.value];let se=0;for(let ce=0;ce<te.length;ce++){const ae=te[ce],re=E(ae);typeof ae=="number"||typeof ae=="boolean"?(F.__data[0]=ae,n.bufferSubData(n.UNIFORM_BUFFER,le+se,F.__data)):ae.isMatrix3?(F.__data[0]=ae.elements[0],F.__data[1]=ae.elements[1],F.__data[2]=ae.elements[2],F.__data[3]=0,F.__data[4]=ae.elements[3],F.__data[5]=ae.elements[4],F.__data[6]=ae.elements[5],F.__data[7]=0,F.__data[8]=ae.elements[6],F.__data[9]=ae.elements[7],F.__data[10]=ae.elements[8],F.__data[11]=0):(ae.toArray(F.__data,se),se+=re.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,le,F.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function x(D,b,C,N){const k=D.value,B=b+"_"+C;if(N[B]===void 0)return typeof k=="number"||typeof k=="boolean"?N[B]=k:N[B]=k.clone(),!0;{const z=N[B];if(typeof k=="number"||typeof k=="boolean"){if(z!==k)return N[B]=k,!0}else if(z.equals(k)===!1)return z.copy(k),!0}return!1}function M(D){const b=D.uniforms;let C=0;const N=16;for(let B=0,z=b.length;B<z;B++){const P=Array.isArray(b[B])?b[B]:[b[B]];for(let R=0,F=P.length;R<F;R++){const le=P[R],te=Array.isArray(le.value)?le.value:[le.value];for(let se=0,ce=te.length;se<ce;se++){const ae=te[se],re=E(ae),V=C%N,oe=V%re.boundary,ie=V+oe;C+=oe,ie!==0&&N-ie<re.storage&&(C+=N-ie),le.__data=new Float32Array(re.storage/Float32Array.BYTES_PER_ELEMENT),le.__offset=C,C+=re.storage}}}const k=C%N;return k>0&&(C+=N-k),D.__size=C,D.__cache={},this}function E(D){const b={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(b.boundary=4,b.storage=4):D.isVector2?(b.boundary=8,b.storage=8):D.isVector3||D.isColor?(b.boundary=16,b.storage=12):D.isVector4?(b.boundary=16,b.storage=16):D.isMatrix3?(b.boundary=48,b.storage=48):D.isMatrix4?(b.boundary=64,b.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),b}function S(D){const b=D.target;b.removeEventListener("dispose",S);const C=u.indexOf(b.__bindingPointIndex);u.splice(C,1),n.deleteBuffer(o[b.id]),delete o[b.id],delete l[b.id]}function y(){for(const D in o)n.deleteBuffer(o[D]);u=[],o={},l={}}return{bind:d,update:h,dispose:y}}class MD{constructor(e={}){const{canvas:t=nC(),context:r=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:v=!1}=e;this.isWebGLRenderer=!0;let x;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=r.getContextAttributes().alpha}else x=u;const M=new Uint32Array(4),E=new Int32Array(4);let S=null,y=null;const D=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ur,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let N=!1;this._outputColorSpace=ai;let k=0,B=0,z=null,P=-1,R=null;const F=new Nt,le=new Nt;let te=null;const se=new Rt(0);let ce=0,ae=t.width,re=t.height,V=1,oe=null,ie=null;const U=new Nt(0,0,ae,re),J=new Nt(0,0,ae,re);let Oe=!1;const me=new yp;let Y=!1,fe=!1;const he=new Yt,Te=new K,Pe=new Nt,Ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Dt=!1;function mt(){return z===null?V:1}let O=r;function yt(A,j){return t.getContext(A,j)}try{const A={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:m,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${fp}`),t.addEventListener("webglcontextlost",Ce,!1),t.addEventListener("webglcontextrestored",Ne,!1),t.addEventListener("webglcontextcreationerror",xe,!1),O===null){const j="webgl2";if(O=yt(j,A),O===null)throw yt(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Qe,dt,We,Ut,ke,ct,Bt,Vt,L,w,$,de,_e,ue,$e,Ae,Ve,Ke,Ee,Ie,rt,je,be,ft;function G(){Qe=new Lb(O),Qe.init(),je=new pD(O,Qe),dt=new wb(O,Qe,e,je),We=new dD(O,Qe),dt.reversedDepthBuffer&&v&&We.buffers.depth.setReversed(!0),Ut=new Ub(O),ke=new J2,ct=new hD(O,Qe,We,ke,dt,je,Ut),Bt=new Cb(C),Vt=new Db(C),L=new zC(O),be=new Eb(O,L),w=new Ib(O,L,Ut,be),$=new Ob(O,w,L,Ut),Ee=new Fb(O,dt,ct),Ae=new Ab(ke),de=new Q2(C,Bt,Vt,Qe,dt,be,Ae),_e=new xD(C,ke),ue=new tD,$e=new aD(Qe),Ke=new Mb(C,Bt,Vt,We,$,x,d),Ve=new cD(C,$,dt),ft=new SD(O,Ut,dt,We),Ie=new Tb(O,Qe,Ut),rt=new Nb(O,Qe,Ut),Ut.programs=de.programs,C.capabilities=dt,C.extensions=Qe,C.properties=ke,C.renderLists=ue,C.shadowMap=Ve,C.state=We,C.info=Ut}G();const Se=new _D(C,O);this.xr=Se,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const A=Qe.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Qe.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(A){A!==void 0&&(V=A,this.setSize(ae,re,!1))},this.getSize=function(A){return A.set(ae,re)},this.setSize=function(A,j,ee=!0){if(Se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ae=A,re=j,t.width=Math.floor(A*V),t.height=Math.floor(j*V),ee===!0&&(t.style.width=A+"px",t.style.height=j+"px"),this.setViewport(0,0,A,j)},this.getDrawingBufferSize=function(A){return A.set(ae*V,re*V).floor()},this.setDrawingBufferSize=function(A,j,ee){ae=A,re=j,V=ee,t.width=Math.floor(A*ee),t.height=Math.floor(j*ee),this.setViewport(0,0,A,j)},this.getCurrentViewport=function(A){return A.copy(F)},this.getViewport=function(A){return A.copy(U)},this.setViewport=function(A,j,ee,ne){A.isVector4?U.set(A.x,A.y,A.z,A.w):U.set(A,j,ee,ne),We.viewport(F.copy(U).multiplyScalar(V).round())},this.getScissor=function(A){return A.copy(J)},this.setScissor=function(A,j,ee,ne){A.isVector4?J.set(A.x,A.y,A.z,A.w):J.set(A,j,ee,ne),We.scissor(le.copy(J).multiplyScalar(V).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(A){We.setScissorTest(Oe=A)},this.setOpaqueSort=function(A){oe=A},this.setTransparentSort=function(A){ie=A},this.getClearColor=function(A){return A.copy(Ke.getClearColor())},this.setClearColor=function(){Ke.setClearColor(...arguments)},this.getClearAlpha=function(){return Ke.getClearAlpha()},this.setClearAlpha=function(){Ke.setClearAlpha(...arguments)},this.clear=function(A=!0,j=!0,ee=!0){let ne=0;if(A){let W=!1;if(z!==null){const Me=z.texture.format;W=Me===vp||Me===gp||Me===mp}if(W){const Me=z.texture.type,De=Me===Ni||Me===Ss||Me===Pa||Me===ba||Me===hp||Me===pp,ze=Ke.getClearColor(),Ue=Ke.getClearAlpha(),it=ze.r,st=ze.g,Ze=ze.b;De?(M[0]=it,M[1]=st,M[2]=Ze,M[3]=Ue,O.clearBufferuiv(O.COLOR,0,M)):(E[0]=it,E[1]=st,E[2]=Ze,E[3]=Ue,O.clearBufferiv(O.COLOR,0,E))}else ne|=O.COLOR_BUFFER_BIT}j&&(ne|=O.DEPTH_BUFFER_BIT),ee&&(ne|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ce,!1),t.removeEventListener("webglcontextrestored",Ne,!1),t.removeEventListener("webglcontextcreationerror",xe,!1),Ke.dispose(),ue.dispose(),$e.dispose(),ke.dispose(),Bt.dispose(),Vt.dispose(),$.dispose(),be.dispose(),ft.dispose(),de.dispose(),Se.dispose(),Se.removeEventListener("sessionstart",gn),Se.removeEventListener("sessionend",Ts),zn.stop()};function Ce(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function Ne(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const A=Ut.autoReset,j=Ve.enabled,ee=Ve.autoUpdate,ne=Ve.needsUpdate,W=Ve.type;G(),Ut.autoReset=A,Ve.enabled=j,Ve.autoUpdate=ee,Ve.needsUpdate=ne,Ve.type=W}function xe(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function pe(A){const j=A.target;j.removeEventListener("dispose",pe),Ge(j)}function Ge(A){ut(A),ke.remove(A)}function ut(A){const j=ke.get(A).programs;j!==void 0&&(j.forEach(function(ee){de.releaseProgram(ee)}),A.isShaderMaterial&&de.releaseShaderCache(A))}this.renderBufferDirect=function(A,j,ee,ne,W,Me){j===null&&(j=Ye);const De=W.isMesh&&W.matrixWorld.determinant()<0,ze=Fi(A,j,ee,ne,W);We.setMaterial(ne,De);let Ue=ee.index,it=1;if(ne.wireframe===!0){if(Ue=w.getWireframeAttribute(ee),Ue===void 0)return;it=2}const st=ee.drawRange,Ze=ee.attributes.position;let at=st.start*it,Ct=(st.start+st.count)*it;Me!==null&&(at=Math.max(at,Me.start*it),Ct=Math.min(Ct,(Me.start+Me.count)*it)),Ue!==null?(at=Math.max(at,0),Ct=Math.min(Ct,Ue.count)):Ze!=null&&(at=Math.max(at,0),Ct=Math.min(Ct,Ze.count));const Mt=Ct-at;if(Mt<0||Mt===1/0)return;be.setup(W,ne,ze,ee,Ue);let Ft,bt=Ie;if(Ue!==null&&(Ft=L.get(Ue),bt=rt,bt.setIndex(Ft)),W.isMesh)ne.wireframe===!0?(We.setLineWidth(ne.wireframeLinewidth*mt()),bt.setMode(O.LINES)):bt.setMode(O.TRIANGLES);else if(W.isLine){let et=ne.linewidth;et===void 0&&(et=1),We.setLineWidth(et*mt()),W.isLineSegments?bt.setMode(O.LINES):W.isLineLoop?bt.setMode(O.LINE_LOOP):bt.setMode(O.LINE_STRIP)}else W.isPoints?bt.setMode(O.POINTS):W.isSprite&&bt.setMode(O.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)go("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),bt.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(Qe.get("WEBGL_multi_draw"))bt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const et=W._multiDrawStarts,Lt=W._multiDrawCounts,vt=W._multiDrawCount,nn=Ue?L.get(Ue).bytesPerElement:1,fi=ke.get(ne).currentProgram.getUniforms();for(let Cn=0;Cn<vt;Cn++)fi.setValue(O,"_gl_DrawID",Cn),bt.render(et[Cn]/nn,Lt[Cn])}else if(W.isInstancedMesh)bt.renderInstances(at,Mt,W.count);else if(ee.isInstancedBufferGeometry){const et=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,Lt=Math.min(ee.instanceCount,et);bt.renderInstances(at,Mt,Lt)}else bt.render(at,Mt)};function Pt(A,j,ee){A.transparent===!0&&A.side===Zi&&A.forceSinglePass===!1?(A.side=Bn,A.needsUpdate=!0,As(A,j,ee),A.side=kr,A.needsUpdate=!0,As(A,j,ee),A.side=Zi):As(A,j,ee)}this.compile=function(A,j,ee=null){ee===null&&(ee=A),y=$e.get(ee),y.init(j),b.push(y),ee.traverseVisible(function(W){W.isLight&&W.layers.test(j.layers)&&(y.pushLight(W),W.castShadow&&y.pushShadow(W))}),A!==ee&&A.traverseVisible(function(W){W.isLight&&W.layers.test(j.layers)&&(y.pushLight(W),W.castShadow&&y.pushShadow(W))}),y.setupLights();const ne=new Set;return A.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const Me=W.material;if(Me)if(Array.isArray(Me))for(let De=0;De<Me.length;De++){const ze=Me[De];Pt(ze,ee,W),ne.add(ze)}else Pt(Me,ee,W),ne.add(Me)}),y=b.pop(),ne},this.compileAsync=function(A,j,ee=null){const ne=this.compile(A,j,ee);return new Promise(W=>{function Me(){if(ne.forEach(function(De){ke.get(De).currentProgram.isReady()&&ne.delete(De)}),ne.size===0){W(A);return}setTimeout(Me,10)}Qe.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let St=null;function Zn(A){St&&St(A)}function gn(){zn.stop()}function Ts(){zn.start()}const zn=new yx;zn.setAnimationLoop(Zn),typeof self<"u"&&zn.setContext(self),this.setAnimationLoop=function(A){St=A,Se.setAnimationLoop(A),A===null?zn.stop():zn.start()},Se.addEventListener("sessionstart",gn),Se.addEventListener("sessionend",Ts),this.render=function(A,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),Se.enabled===!0&&Se.isPresenting===!0&&(Se.cameraAutoUpdate===!0&&Se.updateCamera(j),j=Se.getCamera()),A.isScene===!0&&A.onBeforeRender(C,A,j,z),y=$e.get(A,b.length),y.init(j),b.push(y),he.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),me.setFromProjectionMatrix(he,Di,j.reversedDepth),fe=this.localClippingEnabled,Y=Ae.init(this.clippingPlanes,fe),S=ue.get(A,D.length),S.init(),D.push(S),Se.enabled===!0&&Se.isPresenting===!0){const Me=C.xr.getDepthSensingMesh();Me!==null&&bo(Me,j,-1/0,C.sortObjects)}bo(A,j,0,C.sortObjects),S.finish(),C.sortObjects===!0&&S.sort(oe,ie),Dt=Se.enabled===!1||Se.isPresenting===!1||Se.hasDepthSensing()===!1,Dt&&Ke.addToRenderList(S,A),this.info.render.frame++,Y===!0&&Ae.beginShadows();const ee=y.state.shadowsArray;Ve.render(ee,A,j),Y===!0&&Ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const ne=S.opaque,W=S.transmissive;if(y.setupLights(),j.isArrayCamera){const Me=j.cameras;if(W.length>0)for(let De=0,ze=Me.length;De<ze;De++){const Ue=Me[De];zr(ne,W,A,Ue)}Dt&&Ke.render(A);for(let De=0,ze=Me.length;De<ze;De++){const Ue=Me[De];or(S,A,Ue,Ue.viewport)}}else W.length>0&&zr(ne,W,A,j),Dt&&Ke.render(A),or(S,A,j);z!==null&&B===0&&(ct.updateMultisampleRenderTarget(z),ct.updateRenderTargetMipmap(z)),A.isScene===!0&&A.onAfterRender(C,A,j),be.resetDefaultState(),P=-1,R=null,b.pop(),b.length>0?(y=b[b.length-1],Y===!0&&Ae.setGlobalState(C.clippingPlanes,y.state.camera)):y=null,D.pop(),D.length>0?S=D[D.length-1]:S=null};function bo(A,j,ee,ne){if(A.visible===!1)return;if(A.layers.test(j.layers)){if(A.isGroup)ee=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(j);else if(A.isLight)y.pushLight(A),A.castShadow&&y.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||me.intersectsSprite(A)){ne&&Pe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(he);const De=$.update(A),ze=A.material;ze.visible&&S.push(A,De,ze,ee,Pe.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||me.intersectsObject(A))){const De=$.update(A),ze=A.material;if(ne&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Pe.copy(A.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),Pe.copy(De.boundingSphere.center)),Pe.applyMatrix4(A.matrixWorld).applyMatrix4(he)),Array.isArray(ze)){const Ue=De.groups;for(let it=0,st=Ue.length;it<st;it++){const Ze=Ue[it],at=ze[Ze.materialIndex];at&&at.visible&&S.push(A,De,at,ee,Pe.z,Ze)}}else ze.visible&&S.push(A,De,ze,ee,Pe.z,null)}}const Me=A.children;for(let De=0,ze=Me.length;De<ze;De++)bo(Me[De],j,ee,ne)}function or(A,j,ee,ne){const W=A.opaque,Me=A.transmissive,De=A.transparent;y.setupLightsView(ee),Y===!0&&Ae.setGlobalState(C.clippingPlanes,ee),ne&&We.viewport(F.copy(ne)),W.length>0&&Ui(W,j,ee),Me.length>0&&Ui(Me,j,ee),De.length>0&&Ui(De,j,ee),We.buffers.depth.setTest(!0),We.buffers.depth.setMask(!0),We.buffers.color.setMask(!0),We.setPolygonOffset(!1)}function zr(A,j,ee,ne){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[ne.id]===void 0&&(y.state.transmissionRenderTarget[ne.id]=new Ms(1,1,{generateMipmaps:!0,type:Qe.has("EXT_color_buffer_half_float")||Qe.has("EXT_color_buffer_float")?Oa:Ni,minFilter:vs,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:wt.workingColorSpace}));const Me=y.state.transmissionRenderTarget[ne.id],De=ne.viewport||F;Me.setSize(De.z*C.transmissionResolutionScale,De.w*C.transmissionResolutionScale);const ze=C.getRenderTarget(),Ue=C.getActiveCubeFace(),it=C.getActiveMipmapLevel();C.setRenderTarget(Me),C.getClearColor(se),ce=C.getClearAlpha(),ce<1&&C.setClearColor(16777215,.5),C.clear(),Dt&&Ke.render(ee);const st=C.toneMapping;C.toneMapping=Ur;const Ze=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),y.setupLightsView(ne),Y===!0&&Ae.setGlobalState(C.clippingPlanes,ne),Ui(A,ee,ne),ct.updateMultisampleRenderTarget(Me),ct.updateRenderTargetMipmap(Me),Qe.has("WEBGL_multisampled_render_to_texture")===!1){let at=!1;for(let Ct=0,Mt=j.length;Ct<Mt;Ct++){const Ft=j[Ct],bt=Ft.object,et=Ft.geometry,Lt=Ft.material,vt=Ft.group;if(Lt.side===Zi&&bt.layers.test(ne.layers)){const nn=Lt.side;Lt.side=Bn,Lt.needsUpdate=!0,ws(bt,ee,ne,et,Lt,vt),Lt.side=nn,Lt.needsUpdate=!0,at=!0}}at===!0&&(ct.updateMultisampleRenderTarget(Me),ct.updateRenderTargetMipmap(Me))}C.setRenderTarget(ze,Ue,it),C.setClearColor(se,ce),Ze!==void 0&&(ne.viewport=Ze),C.toneMapping=st}function Ui(A,j,ee){const ne=j.isScene===!0?j.overrideMaterial:null;for(let W=0,Me=A.length;W<Me;W++){const De=A[W],ze=De.object,Ue=De.geometry,it=De.group;let st=De.material;st.allowOverride===!0&&ne!==null&&(st=ne),ze.layers.test(ee.layers)&&ws(ze,j,ee,Ue,st,it)}}function ws(A,j,ee,ne,W,Me){A.onBeforeRender(C,j,ee,ne,W,Me),A.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),W.onBeforeRender(C,j,ee,ne,A,Me),W.transparent===!0&&W.side===Zi&&W.forceSinglePass===!1?(W.side=Bn,W.needsUpdate=!0,C.renderBufferDirect(ee,j,ne,W,A,Me),W.side=kr,W.needsUpdate=!0,C.renderBufferDirect(ee,j,ne,W,A,Me),W.side=Zi):C.renderBufferDirect(ee,j,ne,W,A,Me),A.onAfterRender(C,j,ee,ne,W,Me)}function As(A,j,ee){j.isScene!==!0&&(j=Ye);const ne=ke.get(A),W=y.state.lights,Me=y.state.shadowsArray,De=W.state.version,ze=de.getParameters(A,W.state,Me,j,ee),Ue=de.getProgramCacheKey(ze);let it=ne.programs;ne.environment=A.isMeshStandardMaterial?j.environment:null,ne.fog=j.fog,ne.envMap=(A.isMeshStandardMaterial?Vt:Bt).get(A.envMap||ne.environment),ne.envMapRotation=ne.environment!==null&&A.envMap===null?j.environmentRotation:A.envMapRotation,it===void 0&&(A.addEventListener("dispose",pe),it=new Map,ne.programs=it);let st=it.get(Ue);if(st!==void 0){if(ne.currentProgram===st&&ne.lightsStateVersion===De)return Wa(A,ze),st}else ze.uniforms=de.getUniforms(A),A.onBeforeCompile(ze,C),st=de.acquireProgram(ze,Ue),it.set(Ue,st),ne.uniforms=ze.uniforms;const Ze=ne.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ze.clippingPlanes=Ae.uniform),Wa(A,ze),ne.needsLights=ja(A),ne.lightsStateVersion=De,ne.needsLights&&(Ze.ambientLightColor.value=W.state.ambient,Ze.lightProbe.value=W.state.probe,Ze.directionalLights.value=W.state.directional,Ze.directionalLightShadows.value=W.state.directionalShadow,Ze.spotLights.value=W.state.spot,Ze.spotLightShadows.value=W.state.spotShadow,Ze.rectAreaLights.value=W.state.rectArea,Ze.ltc_1.value=W.state.rectAreaLTC1,Ze.ltc_2.value=W.state.rectAreaLTC2,Ze.pointLights.value=W.state.point,Ze.pointLightShadows.value=W.state.pointShadow,Ze.hemisphereLights.value=W.state.hemi,Ze.directionalShadowMap.value=W.state.directionalShadowMap,Ze.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ze.spotShadowMap.value=W.state.spotShadowMap,Ze.spotLightMatrix.value=W.state.spotLightMatrix,Ze.spotLightMap.value=W.state.spotLightMap,Ze.pointShadowMap.value=W.state.pointShadowMap,Ze.pointShadowMatrix.value=W.state.pointShadowMatrix),ne.currentProgram=st,ne.uniformsList=null,st}function Ga(A){if(A.uniformsList===null){const j=A.currentProgram.getUniforms();A.uniformsList=Lu.seqWithValue(j.seq,A.uniforms)}return A.uniformsList}function Wa(A,j){const ee=ke.get(A);ee.outputColorSpace=j.outputColorSpace,ee.batching=j.batching,ee.batchingColor=j.batchingColor,ee.instancing=j.instancing,ee.instancingColor=j.instancingColor,ee.instancingMorph=j.instancingMorph,ee.skinning=j.skinning,ee.morphTargets=j.morphTargets,ee.morphNormals=j.morphNormals,ee.morphColors=j.morphColors,ee.morphTargetsCount=j.morphTargetsCount,ee.numClippingPlanes=j.numClippingPlanes,ee.numIntersection=j.numClipIntersection,ee.vertexAlphas=j.vertexAlphas,ee.vertexTangents=j.vertexTangents,ee.toneMapping=j.toneMapping}function Fi(A,j,ee,ne,W){j.isScene!==!0&&(j=Ye),ct.resetTextureUnits();const Me=j.fog,De=ne.isMeshStandardMaterial?j.environment:null,ze=z===null?C.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:To,Ue=(ne.isMeshStandardMaterial?Vt:Bt).get(ne.envMap||De),it=ne.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,st=!!ee.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),Ze=!!ee.morphAttributes.position,at=!!ee.morphAttributes.normal,Ct=!!ee.morphAttributes.color;let Mt=Ur;ne.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(Mt=C.toneMapping);const Ft=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,bt=Ft!==void 0?Ft.length:0,et=ke.get(ne),Lt=y.state.lights;if(Y===!0&&(fe===!0||A!==R)){const Zt=A===R&&ne.id===P;Ae.setState(ne,A,Zt)}let vt=!1;ne.version===et.__version?(et.needsLights&&et.lightsStateVersion!==Lt.state.version||et.outputColorSpace!==ze||W.isBatchedMesh&&et.batching===!1||!W.isBatchedMesh&&et.batching===!0||W.isBatchedMesh&&et.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&et.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&et.instancing===!1||!W.isInstancedMesh&&et.instancing===!0||W.isSkinnedMesh&&et.skinning===!1||!W.isSkinnedMesh&&et.skinning===!0||W.isInstancedMesh&&et.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&et.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&et.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&et.instancingMorph===!1&&W.morphTexture!==null||et.envMap!==Ue||ne.fog===!0&&et.fog!==Me||et.numClippingPlanes!==void 0&&(et.numClippingPlanes!==Ae.numPlanes||et.numIntersection!==Ae.numIntersection)||et.vertexAlphas!==it||et.vertexTangents!==st||et.morphTargets!==Ze||et.morphNormals!==at||et.morphColors!==Ct||et.toneMapping!==Mt||et.morphTargetsCount!==bt)&&(vt=!0):(vt=!0,et.__version=ne.version);let nn=et.currentProgram;vt===!0&&(nn=As(ne,j,W));let fi=!1,Cn=!1,Hr=!1;const Ot=nn.getUniforms(),Rn=et.uniforms;if(We.useProgram(nn.program)&&(fi=!0,Cn=!0,Hr=!0),ne.id!==P&&(P=ne.id,Cn=!0),fi||R!==A){We.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Ot.setValue(O,"projectionMatrix",A.projectionMatrix),Ot.setValue(O,"viewMatrix",A.matrixWorldInverse);const _n=Ot.map.cameraPosition;_n!==void 0&&_n.setValue(O,Te.setFromMatrixPosition(A.matrixWorld)),dt.logarithmicDepthBuffer&&Ot.setValue(O,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Ot.setValue(O,"isOrthographic",A.isOrthographicCamera===!0),R!==A&&(R=A,Cn=!0,Hr=!0)}if(W.isSkinnedMesh){Ot.setOptional(O,W,"bindMatrix"),Ot.setOptional(O,W,"bindMatrixInverse");const Zt=W.skeleton;Zt&&(Zt.boneTexture===null&&Zt.computeBoneTexture(),Ot.setValue(O,"boneTexture",Zt.boneTexture,ct))}W.isBatchedMesh&&(Ot.setOptional(O,W,"batchingTexture"),Ot.setValue(O,"batchingTexture",W._matricesTexture,ct),Ot.setOptional(O,W,"batchingIdTexture"),Ot.setValue(O,"batchingIdTexture",W._indirectTexture,ct),Ot.setOptional(O,W,"batchingColorTexture"),W._colorsTexture!==null&&Ot.setValue(O,"batchingColorTexture",W._colorsTexture,ct));const vn=ee.morphAttributes;if((vn.position!==void 0||vn.normal!==void 0||vn.color!==void 0)&&Ee.update(W,ee,nn),(Cn||et.receiveShadow!==W.receiveShadow)&&(et.receiveShadow=W.receiveShadow,Ot.setValue(O,"receiveShadow",W.receiveShadow)),ne.isMeshGouraudMaterial&&ne.envMap!==null&&(Rn.envMap.value=Ue,Rn.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),ne.isMeshStandardMaterial&&ne.envMap===null&&j.environment!==null&&(Rn.envMapIntensity.value=j.environmentIntensity),Cn&&(Ot.setValue(O,"toneMappingExposure",C.toneMappingExposure),et.needsLights&&Xa(Rn,Hr),Me&&ne.fog===!0&&_e.refreshFogUniforms(Rn,Me),_e.refreshMaterialUniforms(Rn,ne,V,re,y.state.transmissionRenderTarget[A.id]),Lu.upload(O,Ga(et),Rn,ct)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(Lu.upload(O,Ga(et),Rn,ct),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Ot.setValue(O,"center",W.center),Ot.setValue(O,"modelViewMatrix",W.modelViewMatrix),Ot.setValue(O,"normalMatrix",W.normalMatrix),Ot.setValue(O,"modelMatrix",W.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){const Zt=ne.uniformsGroups;for(let _n=0,Gr=Zt.length;_n<Gr;_n++){const _t=Zt[_n];ft.update(_t,nn),ft.bind(_t,nn)}}return nn}function Xa(A,j){A.ambientLightColor.needsUpdate=j,A.lightProbe.needsUpdate=j,A.directionalLights.needsUpdate=j,A.directionalLightShadows.needsUpdate=j,A.pointLights.needsUpdate=j,A.pointLightShadows.needsUpdate=j,A.spotLights.needsUpdate=j,A.spotLightShadows.needsUpdate=j,A.rectAreaLights.needsUpdate=j,A.hemisphereLights.needsUpdate=j}function ja(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(A,j,ee){const ne=ke.get(A);ne.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),ke.get(A.texture).__webglTexture=j,ke.get(A.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:ee,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,j){const ee=ke.get(A);ee.__webglFramebuffer=j,ee.__useDefaultFramebuffer=j===void 0};const Qu=O.createFramebuffer();this.setRenderTarget=function(A,j=0,ee=0){z=A,k=j,B=ee;let ne=!0,W=null,Me=!1,De=!1;if(A){const Ue=ke.get(A);if(Ue.__useDefaultFramebuffer!==void 0)We.bindFramebuffer(O.FRAMEBUFFER,null),ne=!1;else if(Ue.__webglFramebuffer===void 0)ct.setupRenderTarget(A);else if(Ue.__hasExternalTextures)ct.rebindTextures(A,ke.get(A.texture).__webglTexture,ke.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Ze=A.depthTexture;if(Ue.__boundDepthTexture!==Ze){if(Ze!==null&&ke.has(Ze)&&(A.width!==Ze.image.width||A.height!==Ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ct.setupDepthRenderbuffer(A)}}const it=A.texture;(it.isData3DTexture||it.isDataArrayTexture||it.isCompressedArrayTexture)&&(De=!0);const st=ke.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(st[j])?W=st[j][ee]:W=st[j],Me=!0):A.samples>0&&ct.useMultisampledRTT(A)===!1?W=ke.get(A).__webglMultisampledFramebuffer:Array.isArray(st)?W=st[ee]:W=st,F.copy(A.viewport),le.copy(A.scissor),te=A.scissorTest}else F.copy(U).multiplyScalar(V).floor(),le.copy(J).multiplyScalar(V).floor(),te=Oe;if(ee!==0&&(W=Qu),We.bindFramebuffer(O.FRAMEBUFFER,W)&&ne&&We.drawBuffers(A,W),We.viewport(F),We.scissor(le),We.setScissorTest(te),Me){const Ue=ke.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ue.__webglTexture,ee)}else if(De){const Ue=j;for(let it=0;it<A.textures.length;it++){const st=ke.get(A.textures[it]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+it,st.__webglTexture,ee,Ue)}}else if(A!==null&&ee!==0){const Ue=ke.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ue.__webglTexture,ee)}P=-1},this.readRenderTargetPixels=function(A,j,ee,ne,W,Me,De,ze=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=ke.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&De!==void 0&&(Ue=Ue[De]),Ue){We.bindFramebuffer(O.FRAMEBUFFER,Ue);try{const it=A.textures[ze],st=it.format,Ze=it.type;if(!dt.textureFormatReadable(st)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!dt.textureTypeReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=A.width-ne&&ee>=0&&ee<=A.height-W&&(A.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+ze),O.readPixels(j,ee,ne,W,je.convert(st),je.convert(Ze),Me))}finally{const it=z!==null?ke.get(z).__webglFramebuffer:null;We.bindFramebuffer(O.FRAMEBUFFER,it)}}},this.readRenderTargetPixelsAsync=async function(A,j,ee,ne,W,Me,De,ze=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ue=ke.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&De!==void 0&&(Ue=Ue[De]),Ue)if(j>=0&&j<=A.width-ne&&ee>=0&&ee<=A.height-W){We.bindFramebuffer(O.FRAMEBUFFER,Ue);const it=A.textures[ze],st=it.format,Ze=it.type;if(!dt.textureFormatReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!dt.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const at=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,at),O.bufferData(O.PIXEL_PACK_BUFFER,Me.byteLength,O.STREAM_READ),A.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+ze),O.readPixels(j,ee,ne,W,je.convert(st),je.convert(Ze),0);const Ct=z!==null?ke.get(z).__webglFramebuffer:null;We.bindFramebuffer(O.FRAMEBUFFER,Ct);const Mt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await iC(O,Mt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,at),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,Me),O.deleteBuffer(at),O.deleteSync(Mt),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,j=null,ee=0){const ne=Math.pow(2,-ee),W=Math.floor(A.image.width*ne),Me=Math.floor(A.image.height*ne),De=j!==null?j.x:0,ze=j!==null?j.y:0;ct.setTexture2D(A,0),O.copyTexSubImage2D(O.TEXTURE_2D,ee,0,0,De,ze,W,Me),We.unbindTexture()};const qa=O.createFramebuffer(),Ya=O.createFramebuffer();this.copyTextureToTexture=function(A,j,ee=null,ne=null,W=0,Me=null){Me===null&&(W!==0?(go("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Me=W,W=0):Me=0);let De,ze,Ue,it,st,Ze,at,Ct,Mt;const Ft=A.isCompressedTexture?A.mipmaps[Me]:A.image;if(ee!==null)De=ee.max.x-ee.min.x,ze=ee.max.y-ee.min.y,Ue=ee.isBox3?ee.max.z-ee.min.z:1,it=ee.min.x,st=ee.min.y,Ze=ee.isBox3?ee.min.z:0;else{const vn=Math.pow(2,-W);De=Math.floor(Ft.width*vn),ze=Math.floor(Ft.height*vn),A.isDataArrayTexture?Ue=Ft.depth:A.isData3DTexture?Ue=Math.floor(Ft.depth*vn):Ue=1,it=0,st=0,Ze=0}ne!==null?(at=ne.x,Ct=ne.y,Mt=ne.z):(at=0,Ct=0,Mt=0);const bt=je.convert(j.format),et=je.convert(j.type);let Lt;j.isData3DTexture?(ct.setTexture3D(j,0),Lt=O.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(ct.setTexture2DArray(j,0),Lt=O.TEXTURE_2D_ARRAY):(ct.setTexture2D(j,0),Lt=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,j.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,j.unpackAlignment);const vt=O.getParameter(O.UNPACK_ROW_LENGTH),nn=O.getParameter(O.UNPACK_IMAGE_HEIGHT),fi=O.getParameter(O.UNPACK_SKIP_PIXELS),Cn=O.getParameter(O.UNPACK_SKIP_ROWS),Hr=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,Ft.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ft.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,it),O.pixelStorei(O.UNPACK_SKIP_ROWS,st),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Ze);const Ot=A.isDataArrayTexture||A.isData3DTexture,Rn=j.isDataArrayTexture||j.isData3DTexture;if(A.isDepthTexture){const vn=ke.get(A),Zt=ke.get(j),_n=ke.get(vn.__renderTarget),Gr=ke.get(Zt.__renderTarget);We.bindFramebuffer(O.READ_FRAMEBUFFER,_n.__webglFramebuffer),We.bindFramebuffer(O.DRAW_FRAMEBUFFER,Gr.__webglFramebuffer);for(let _t=0;_t<Ue;_t++)Ot&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ke.get(A).__webglTexture,W,Ze+_t),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ke.get(j).__webglTexture,Me,Mt+_t)),O.blitFramebuffer(it,st,De,ze,at,Ct,De,ze,O.DEPTH_BUFFER_BIT,O.NEAREST);We.bindFramebuffer(O.READ_FRAMEBUFFER,null),We.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(W!==0||A.isRenderTargetTexture||ke.has(A)){const vn=ke.get(A),Zt=ke.get(j);We.bindFramebuffer(O.READ_FRAMEBUFFER,qa),We.bindFramebuffer(O.DRAW_FRAMEBUFFER,Ya);for(let _n=0;_n<Ue;_n++)Ot?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,vn.__webglTexture,W,Ze+_n):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,vn.__webglTexture,W),Rn?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Zt.__webglTexture,Me,Mt+_n):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Zt.__webglTexture,Me),W!==0?O.blitFramebuffer(it,st,De,ze,at,Ct,De,ze,O.COLOR_BUFFER_BIT,O.NEAREST):Rn?O.copyTexSubImage3D(Lt,Me,at,Ct,Mt+_n,it,st,De,ze):O.copyTexSubImage2D(Lt,Me,at,Ct,it,st,De,ze);We.bindFramebuffer(O.READ_FRAMEBUFFER,null),We.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Rn?A.isDataTexture||A.isData3DTexture?O.texSubImage3D(Lt,Me,at,Ct,Mt,De,ze,Ue,bt,et,Ft.data):j.isCompressedArrayTexture?O.compressedTexSubImage3D(Lt,Me,at,Ct,Mt,De,ze,Ue,bt,Ft.data):O.texSubImage3D(Lt,Me,at,Ct,Mt,De,ze,Ue,bt,et,Ft):A.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,Me,at,Ct,De,ze,bt,et,Ft.data):A.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,Me,at,Ct,Ft.width,Ft.height,bt,Ft.data):O.texSubImage2D(O.TEXTURE_2D,Me,at,Ct,De,ze,bt,et,Ft);O.pixelStorei(O.UNPACK_ROW_LENGTH,vt),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,nn),O.pixelStorei(O.UNPACK_SKIP_PIXELS,fi),O.pixelStorei(O.UNPACK_SKIP_ROWS,Cn),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Hr),Me===0&&j.generateMipmaps&&O.generateMipmap(Lt),We.unbindTexture()},this.copyTextureToTexture3D=function(A,j,ee=null,ne=null,W=0){return go('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,j,ee,ne,W)},this.initRenderTarget=function(A){ke.get(A).__webglFramebuffer===void 0&&ct.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?ct.setTextureCube(A,0):A.isData3DTexture?ct.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?ct.setTexture2DArray(A,0):ct.setTexture2D(A,0),We.unbindTexture()},this.resetState=function(){k=0,B=0,z=null,We.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=wt._getDrawingBufferColorSpace(e),t.unpackColorSpace=wt._getUnpackColorSpace()}}const wx=()=>!!window.inAppWebview,ED=(n,e)=>new Promise((t,r)=>{if(!wx()){r(new Error("Not in WebView"));return}const o=`${Date.now()}_${Math.random().toString(36).substr(2,9)}`;window._nativeCallbacks=window._nativeCallbacks||{},window._nativeCallbacks[o]={resolve:t,reject:r},window.inAppWebview.postMessage(JSON.stringify({type:n,data:e,requestId:o})),setTimeout(()=>{window._nativeCallbacks[o]&&(delete window._nativeCallbacks[o],r(new Error("Native call timeout")))},3e3)});typeof window<"u"&&(window.handleNativeResponse=n=>{const e=window._nativeCallbacks?.[n.requestId];e&&(n.success?e.resolve(n.data):e.reject(new Error(n.error||"Native call failed")),delete window._nativeCallbacks[n.requestId])});const p_=async(n="medium")=>{if(wx())try{return await ED("hapticFeedback",{type:n}),!0}catch(e){console.warn("Native haptic feedback failed:",e)}if("vibrate"in navigator){const e={light:15,medium:[20,30,20],heavy:[35,45,35]};return navigator.vibrate(e[n]||20)}return!1},TD=()=>{const n=Je.useRef(null),e=Je.useRef(null),t=Je.useRef(null),r=Je.useRef(!1),[o,l]=Je.useState(!1),[u,f]=Je.useState(null),d="/Villanelle.mp3";Je.useEffect(()=>{const g=n.current;if(!g)return;const v=new RC,x=new Yn(65,window.innerWidth/window.innerHeight,.1,1e3);x.position.z=45;const M=new MD({antialias:!0,alpha:!0});M.setPixelRatio(window.devicePixelRatio),M.setSize(window.innerWidth,window.innerHeight),M.setClearColor(0,1),g.appendChild(M.domElement);const E=2500,S=new sr,y=new Float32Array(E*3),D=new Float32Array(E*3);for(let me=0;me<E;me++){const Y=Math.floor(me/E*4);let fe=10+Math.random()*10,he=Math.random()*Math.PI*2,Te=Math.acos(2*Math.random()-1);switch(Y){case 0:fe=10+Math.random()*5;break;case 1:fe=5+Math.random()*3;break;case 2:fe=12+Math.random()*4,Te=(Math.random()*.5+.75)*Math.PI;break;default:fe=15+Math.random()*5;break}switch(y[me*3]=fe*Math.sin(Te)*Math.cos(he),y[me*3+1]=fe*Math.sin(Te)*Math.sin(he),y[me*3+2]=fe*Math.cos(Te),Y){case 0:D[me*3]=.1+Math.random()*.1,D[me*3+1]=.1+Math.random()*.1,D[me*3+2]=.4+Math.random()*.2;break;case 1:D[me*3]=.2+Math.random()*.1,D[me*3+1]=.3+Math.random()*.1,D[me*3+2]=.5+Math.random()*.2;break;case 2:D[me*3]=.3+Math.random()*.1,D[me*3+1]=.1+Math.random()*.1,D[me*3+2]=.4+Math.random()*.1;break;default:D[me*3]=.4+Math.random()*.3,D[me*3+1]=.4+Math.random()*.3,D[me*3+2]=.6+Math.random()*.3;break}}S.setAttribute("position",new ui(y,3)),S.setAttribute("color",new ui(D,3));const b=new mx({size:.25,vertexColors:!0,blending:ys}),C=new LC(S,b);v.add(C);const N=new kC(2236962);v.add(N);const k=new xu(3368703,1,100);k.position.set(30,0,15),v.add(k);const B=new xu(16724838,1,100);B.position.set(-30,0,15),v.add(B);const z=new xu(3407718,1,100);z.position.set(0,30,15),v.add(z);const P=new xu(11154431,1,100);P.position.set(0,-30,15),v.add(P);const R=[k,B,z,P],F=new OC(16777215,.5);F.position.set(1,1,1),v.add(F);const le=window.AudioContext||window.webkitAudioContext;let te=null,se=null,ce=null,ae=null,re;le&&(te=new le,t.current=te,se=te.createAnalyser(),se.fftSize=1024,ce=new Uint8Array(se.frequencyBinCount));const V=new Audio(d);V.loop=!0,V.crossOrigin="anonymous",e.current=V;const oe=()=>{te&&se&&!ae&&(ae=te.createMediaElementSource(V),ae.connect(se),se.connect(te.destination))},ie=me=>{console.error("Audio error",me),f("No se pudo cargar el audio de fondo.")};V.addEventListener("canplaythrough",oe),V.addEventListener("error",ie),V.load();const U=(me,Y,fe)=>{let he=0;const Te=Math.max(1,fe-Y);for(let Pe=Y;Pe<fe&&Pe<me.length;Pe+=1)he+=me[Pe];return he/Te},J=()=>{re=window.requestAnimationFrame(J);const me=Date.now()*.001;let Y=0,fe=0,he=0,Te=0;se&&ce&&r.current&&(se.getByteFrequencyData(ce),Y=U(ce,0,10)/255,U(ce,10,100)/255,fe=U(ce,100,200)/255,he=U(ce,200,300)/255,Te=U(ce,300,400)/255);const Pe=Math.sin(me*.3)*.003,Ye=Math.cos(me*.2)*.005,Dt=Y*.002*Math.sin(me*2),mt=fe*.004*Math.cos(me);C.rotation.x+=Pe+Dt,C.rotation.y+=Ye+mt,C.rotation.z=Math.sin(me*.1)*.05,R.forEach((O,yt)=>{const Qe=Math.floor(me%20);let dt=.3;const We=Math.floor(Qe/5);switch(yt===We?dt=2:(yt===(We+1)%4||yt===(We+3)%4)&&(dt=.5+(Math.sin(Qe%5/5*Math.PI)*.5+.5)*.8),yt){case 0:O.intensity=dt+Y*2,O.position.x=30*Math.sin(me*.4),O.position.y=10*Math.cos(me*.5);break;case 1:O.intensity=dt+fe*2,O.position.x=-30*Math.cos(me*.3),O.position.y=-10*Math.sin(me*.4);break;case 2:O.intensity=dt+he*2,O.position.y=30*Math.sin(me*.2),O.position.x=15*Math.cos(me*.3);break;case 3:O.intensity=dt+Te*2,O.position.y=-30*Math.cos(me*.3),O.position.x=-15*Math.sin(me*.4);break}}),M.render(v,x)};J();const Oe=()=>{x.aspect=window.innerWidth/window.innerHeight,x.updateProjectionMatrix(),M.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",Oe),()=>{window.removeEventListener("resize",Oe),window.cancelAnimationFrame(re),V.pause(),V.removeEventListener("canplaythrough",oe),V.removeEventListener("error",ie),M.domElement.parentElement===g&&g.removeChild(M.domElement),S.dispose(),b.dispose(),M.dispose()}},[d]);const h=()=>{p_("medium");const g=document.createElement("a");g.href="#",g.download="CV_Resumido.pdf",g.click()},m=async()=>{try{await p_("medium")}catch(v){console.warn("Haptic feedback no disponible",v)}const g=e.current;if(!g){f("El audio aún no está listo.");return}if(o)g.pause(),r.current=!1,l(!1);else try{t.current?.state==="suspended"&&await t.current.resume(),await g.play(),r.current=!0,l(!0)}catch(v){console.error("Error al reproducir audio:",v),f("No se pudo iniciar la música de fondo.")}};return Re.createElement("section",{className:"relative h-screen w-full flex items-center justify-center overflow-hidden bg-slate-950"},Re.createElement("div",{ref:n,className:"absolute inset-0 z-0"}),Re.createElement("div",{className:"absolute inset-0 bg-black/35"}),Re.createElement("div",{className:"relative z-10 text-center px-6 max-w-4xl"},Re.createElement(li.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:1,ease:"easeOut"}},Re.createElement(li.div,{initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},transition:{delay:.2,duration:.8},className:"inline-block mb-4 px-4 py-1.5 bg-blue-500/20 border border-blue-500/30 rounded-full"},Re.createElement("span",{className:"text-blue-400 text-sm font-medium"},"👋 Disponible para trabajar")),Re.createElement("h1",{className:"text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight"},"Hola, soy ",Re.createElement("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"},"Tu Nombre")),Re.createElement("p",{className:"text-xl md:text-2xl text-slate-300 mb-8 font-light"},"Desarrollador Full Stack & Diseñador UI/UX"),Re.createElement("div",{className:"flex flex-col sm:flex-row gap-4 justify-center items-center"},Re.createElement(li.button,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:h,className:"flex items-center gap-2 bg-white text-slate-950 px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:bg-slate-100 transition-colors w-full sm:w-auto justify-center"},Re.createElement($1,{size:20}),"Descargar CV"),Re.createElement(li.button,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:m,className:"flex items-center gap-2 bg-slate-800/60 text-white border border-slate-700 px-8 py-4 rounded-full font-semibold text-lg backdrop-blur-sm hover:bg-slate-700 transition-colors w-full sm:w-auto justify-center"},o?Re.createElement(oA,{size:20}):Re.createElement(lA,{size:20}),o?"Pausar música":"Reproducir música")),u&&Re.createElement("p",{className:"mt-4 text-sm text-red-400"},u))),Re.createElement(li.div,{animate:{y:[0,15,0]},transition:{duration:2,repeat:1/0,ease:"easeInOut"},className:"absolute bottom-10 flex flex-col items-center gap-2"},Re.createElement("span",{className:"text-slate-400 text-xs uppercase tracking-widest"},"Scroll"),Re.createElement(q1,{size:28,className:"text-slate-400"})))},wD=[{title:"E-commerce Platform",description:"Una plataforma completa con React, Node.js y Stripe.",image:"https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",tags:["React","Node.js","Tailwind"],link:"#",github:"#"},{title:"AI Chat Assistant",description:"Asistente inteligente utilizando OpenAI API y Next.js.",image:"https://images.unsplash.com/photo-1587560699334-cc4ff634909a?auto=format&fit=crop&q=80&w=800",tags:["Next.js","OpenAI","TypeScript"],link:"#",github:"#"},{title:"Fitness Tracker App",description:"Aplicación móvil para seguimiento de entrenamientos.",image:"https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800",tags:["React Native","Firebase"],link:"#",github:"#"}],AD=()=>Re.createElement("section",{id:"portfolio",className:"py-24 px-6 bg-slate-900"},Re.createElement("div",{className:"max-w-6xl mx-auto"},Re.createElement(li.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"text-center mb-16"},Re.createElement("h2",{className:"text-4xl font-bold text-white mb-4"},"Mi Portfolio"),Re.createElement("p",{className:"text-slate-400 max-w-2xl mx-auto"},"Una selección de mis proyectos más recientes y destacados.")),Re.createElement("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"},wD.map((n,e)=>Re.createElement(li.div,{key:e,initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:e*.1},className:"bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-blue-500/50 transition-colors group"},Re.createElement("div",{className:"relative h-48 overflow-hidden"},Re.createElement("img",{src:n.image,alt:n.title,className:"w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"}),Re.createElement("div",{className:"absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4"},Re.createElement("a",{href:n.link,className:"p-2 bg-white rounded-full text-slate-950 hover:bg-blue-500 hover:text-white transition-colors"},Re.createElement(Z1,{size:20})),Re.createElement("a",{href:n.github,className:"p-2 bg-white rounded-full text-slate-950 hover:bg-blue-500 hover:text-white transition-colors"},Re.createElement(Xy,{size:20})))),Re.createElement("div",{className:"p-6"},Re.createElement("h3",{className:"text-xl font-bold text-white mb-2"},n.title),Re.createElement("p",{className:"text-slate-400 text-sm mb-4"},n.description),Re.createElement("div",{className:"flex flex-wrap gap-2"},n.tags.map((t,r)=>Re.createElement("span",{key:r,className:"text-xs font-medium px-2 py-1 bg-blue-500/10 text-blue-400 rounded-md border border-blue-500/20"},t))))))))),CD=[{degree:"Grado en Ingeniería Informática",school:"Universidad Tecnológica",period:"2018 - 2022",description:"Especialización en desarrollo de software y sistemas distribuidos."},{degree:"Master en Desarrollo Web Full Stack",school:"Digital Academy",period:"2022 - 2023",description:"Enfoque intensivo en tecnologías modernas como React, Node.js y Cloud Computing."},{degree:"Certificación AWS Solutions Architect",school:"Amazon Web Services",period:"2023",description:"Diseño de arquitecturas escalables y seguras en la nube."}],RD=()=>Re.createElement("section",{className:"py-24 px-6 bg-slate-950"},Re.createElement("div",{className:"max-w-4xl mx-auto"},Re.createElement(li.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"text-center mb-16"},Re.createElement("h2",{className:"text-4xl font-bold text-white mb-4"},"Estudios & Educación"),Re.createElement("p",{className:"text-slate-400"},"Mi trayectoria académica y certificaciones profesionales.")),Re.createElement("div",{className:"space-y-8"},CD.map((n,e)=>Re.createElement(li.div,{key:e,initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{delay:e*.1},className:"relative pl-8 border-l-2 border-slate-800 hover:border-blue-500 transition-colors"},Re.createElement("div",{className:"absolute -left-[9px] top-0 w-4 h-4 bg-slate-950 border-2 border-blue-500 rounded-full"}),Re.createElement("div",{className:"bg-slate-900/50 p-6 rounded-2xl border border-slate-800 hover:bg-slate-900 transition-colors"},Re.createElement("div",{className:"flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2"},Re.createElement("h3",{className:"text-xl font-bold text-white flex items-center gap-2"},Re.createElement(eA,{className:"text-blue-400",size:20}),n.degree),Re.createElement("span",{className:"flex items-center gap-1 text-sm font-medium text-slate-500 bg-slate-800 px-3 py-1 rounded-full"},Re.createElement(X1,{size:14}),n.period)),Re.createElement("p",{className:"text-blue-400 font-medium mb-2"},n.school),Re.createElement("p",{className:"text-slate-400 text-sm leading-relaxed"},n.description))))))),PD=[{name:"LinkedIn",icon:Re.createElement(nA,{size:24}),url:"#",color:"hover:bg-blue-600"},{name:"GitHub",icon:Re.createElement(Xy,{size:24}),url:"#",color:"hover:bg-slate-700"},{name:"Twitter",icon:Re.createElement(dA,{size:24}),url:"#",color:"hover:bg-sky-500"},{name:"Email",icon:Re.createElement(rA,{size:24}),url:"mailto:tu@email.com",color:"hover:bg-red-500"}],bD=()=>Re.createElement("section",{id:"contact",className:"py-24 px-6 bg-slate-900"},Re.createElement("div",{className:"max-w-4xl mx-auto text-center"},Re.createElement(li.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"mb-16"},Re.createElement("h2",{className:"text-4xl font-bold text-white mb-4"},"¿Hablamos?"),Re.createElement("p",{className:"text-slate-400"},"Estoy siempre abierto a nuevas oportunidades y colaboraciones interesantes.")),Re.createElement("div",{className:"flex flex-wrap justify-center gap-6 mb-16"},PD.map((n,e)=>Re.createElement(li.a,{key:e,href:n.url,whileHover:{y:-5},whileTap:{scale:.9},className:`p-4 bg-slate-800 text-white rounded-2xl border border-slate-700 transition-all duration-300 ${n.color} group`,title:n.name},n.icon))),Re.createElement(li.div,{initial:{opacity:0,scale:.95},whileInView:{opacity:1,scale:1},viewport:{once:!0},className:"bg-gradient-to-br from-blue-600 to-purple-600 p-1 rounded-3xl"},Re.createElement("div",{className:"bg-slate-950 p-8 md:p-12 rounded-[calc(1.5rem-1px)]"},Re.createElement("h3",{className:"text-2xl font-bold text-white mb-6"},"Envíame un mensaje directo"),Re.createElement("form",{className:"grid grid-cols-1 gap-4 max-w-lg mx-auto"},Re.createElement("input",{type:"text",placeholder:"Tu Nombre",className:"bg-slate-900 border border-slate-800 text-white px-6 py-4 rounded-2xl focus:outline-none focus:border-blue-500 transition-colors"}),Re.createElement("input",{type:"email",placeholder:"Tu Email",className:"bg-slate-900 border border-slate-800 text-white px-6 py-4 rounded-2xl focus:outline-none focus:border-blue-500 transition-colors"}),Re.createElement("textarea",{placeholder:"Tu Mensaje",rows:4,className:"bg-slate-900 border border-slate-800 text-white px-6 py-4 rounded-2xl focus:outline-none focus:border-blue-500 transition-colors resize-none"}),Re.createElement("button",{className:"flex items-center justify-center gap-2 bg-white text-slate-950 font-bold py-4 rounded-2xl hover:bg-blue-500 hover:text-white transition-all active:scale-95"},Re.createElement(cA,{size:20}),"Enviar Mensaje"))))));function DD(){return Re.createElement("div",{className:"w-full min-h-screen bg-slate-950 text-slate-200 selection:bg-blue-500/30"},Re.createElement("main",{className:"w-full relative"},Re.createElement("div",{className:"w-full flex flex-col",style:{paddingTop:"env(safe-area-inset-top)",paddingBottom:"env(safe-area-inset-bottom)"}},Re.createElement(TD,null),Re.createElement(AD,null),Re.createElement(RD,null),Re.createElement(bD,null),Re.createElement("footer",{className:"py-12 px-6 text-center border-t border-slate-900 bg-slate-950"},Re.createElement("p",{className:"text-slate-500 text-sm"},"© ",new Date().getFullYear()," Tu Nombre. Diseñado con ❤️ para reclutadores.")))))}fM.createRoot(document.getElementById("root")).render(Re.createElement(Je.StrictMode,null,Re.createElement(DD,null)));
