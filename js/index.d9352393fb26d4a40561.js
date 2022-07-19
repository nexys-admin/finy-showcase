/*! For license information please see index.d9352393fb26d4a40561.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([[826],{193:(e,t,n)=>{"use strict";function r(e,t,n){return e(n={path:t,exports:{},require:function(e,t){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==t&&n.path)}},n.exports),n.exports}n.d(t,{c:()=>r,o:()=>u,r:()=>s});var o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function c(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}var u=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,r,u=c(e),l=1;l<arguments.length;l++){for(var s in n=Object(arguments[l]))i.call(n,s)&&(u[s]=n[s]);if(o){r=o(n);for(var f=0;f<r.length;f++)a.call(n,r[f])&&(u[r[f]]=n[r[f]])}}return u},l=r((function(e,t){var n=60103,r=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var o=60109,i=60110,a=60112;t.Suspense=60113;var c=60115,l=60116;if("function"==typeof Symbol&&Symbol.for){var s=Symbol.for;n=s("react.element"),r=s("react.portal"),t.Fragment=s("react.fragment"),t.StrictMode=s("react.strict_mode"),t.Profiler=s("react.profiler"),o=s("react.provider"),i=s("react.context"),a=s("react.forward_ref"),t.Suspense=s("react.suspense"),c=s("react.memo"),l=s("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function p(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function y(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||d}function m(){}function v(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||d}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(p(85));this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=y.prototype;var g=v.prototype=new m;g.constructor=v,u(g,y.prototype),g.isPureReactComponent=!0;var b={current:null},w=Object.prototype.hasOwnProperty,E={key:!0,ref:!0,__self:!0,__source:!0};function x(e,t,r){var o,i={},a=null,c=null;if(null!=t)for(o in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(a=""+t.key),t)w.call(t,o)&&!E.hasOwnProperty(o)&&(i[o]=t[o]);var u=arguments.length-2;if(1===u)i.children=r;else if(1<u){for(var l=Array(u),s=0;s<u;s++)l[s]=arguments[s+2];i.children=l}if(e&&e.defaultProps)for(o in u=e.defaultProps)void 0===i[o]&&(i[o]=u[o]);return{$$typeof:n,type:e,key:a,ref:c,props:i,_owner:b.current}}function _(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var C=/\/+/g;function O(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function S(e,t,o,i,a){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var u=!1;if(null===e)u=!0;else switch(c){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case n:case r:u=!0}}if(u)return a=a(u=e),e=""===i?"."+O(u,0):i,Array.isArray(a)?(o="",null!=e&&(o=e.replace(C,"$&/")+"/"),S(a,t,o,"",(function(e){return e}))):null!=a&&(_(a)&&(a=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,o+(!a.key||u&&u.key===a.key?"":(""+a.key).replace(C,"$&/")+"/")+e)),t.push(a)),1;if(u=0,i=""===i?".":i+":",Array.isArray(e))for(var l=0;l<e.length;l++){var s=i+O(c=e[l],l);u+=S(c,t,o,s,a)}else if("function"==typeof(s=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e)))for(e=s.call(e),l=0;!(c=e.next()).done;)u+=S(c=c.value,t,o,s=i+O(c,l++),a);else if("object"===c)throw t=""+e,Error(p(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return u}function k(e,t,n){if(null==e)return e;var r=[],o=0;return S(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function R(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var $={current:null};function j(){var e=$.current;if(null===e)throw Error(p(321));return e}var P={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:b,IsSomeRendererActing:{current:!1},assign:u};t.Children={map:k,forEach:function(e,t,n){k(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return k(e,(function(){t++})),t},toArray:function(e){return k(e,(function(e){return e}))||[]},only:function(e){if(!_(e))throw Error(p(143));return e}},t.Component=y,t.PureComponent=v,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=P,t.cloneElement=function(e,t,r){if(null==e)throw Error(p(267,e));var o=u({},e.props),i=e.key,a=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,c=b.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)w.call(t,s)&&!E.hasOwnProperty(s)&&(o[s]=void 0===t[s]&&void 0!==l?l[s]:t[s])}var s=arguments.length-2;if(1===s)o.children=r;else if(1<s){l=Array(s);for(var f=0;f<s;f++)l[f]=arguments[f+2];o.children=l}return{$$typeof:n,type:e.type,key:i,ref:a,props:o,_owner:c}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:i,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:o,_context:e},e.Consumer=e},t.createElement=x,t.createFactory=function(e){var t=x.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:a,render:e}},t.isValidElement=_,t.lazy=function(e){return{$$typeof:l,_payload:{_status:-1,_result:e},_init:R}},t.memo=function(e,t){return{$$typeof:c,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return j().useCallback(e,t)},t.useContext=function(e,t){return j().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return j().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return j().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return j().useLayoutEffect(e,t)},t.useMemo=function(e,t){return j().useMemo(e,t)},t.useReducer=function(e,t,n){return j().useReducer(e,t,n)},t.useRef=function(e){return j().useRef(e)},t.useState=function(e){return j().useState(e)},t.version="17.0.2"})),s=r((function(e){e.exports=l}))},565:(e,t,n)=>{"use strict";var r={};n.r(r),n.d(r,{Mr:()=>Ie,Lz:()=>Le,ho:()=>Me});var o=n(193),i=n(944);function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,a(e,t)}function u(){}function l(){}l.resetWarningCache=u;var s=(0,o.c)((function(e){e.exports=function(){function e(e,t,n,r,o,i){if("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"!==i){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:l,resetWarningCache:u};return n.PropTypes=n,n}()}));function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function p(e){return"/"===e.charAt(0)}function d(e,t){for(var n=t,r=n+1,o=e.length;r<o;n+=1,r+=1)e[n]=e[r];e.pop()}function h(e,t){if(!e)throw new Error("Invariant failed")}function y(e,t,n,r){var o;"string"==typeof e?(o=function(e){var t=e||"/",n="",r="",o=t.indexOf("#");-1!==o&&(r=t.substr(o),t=t.substr(0,o));var i=t.indexOf("?");return-1!==i&&(n=t.substr(i),t=t.substr(0,i)),{pathname:t,search:"?"===n?"":n,hash:"#"===r?"":r}}(e)).state=t:(void 0===(o=f({},e)).pathname&&(o.pathname=""),o.search?"?"!==o.search.charAt(0)&&(o.search="?"+o.search):o.search="",o.hash?"#"!==o.hash.charAt(0)&&(o.hash="#"+o.hash):o.hash="",void 0!==t&&void 0===o.state&&(o.state=t));try{o.pathname=decodeURI(o.pathname)}catch(e){throw e instanceof URIError?new URIError('Pathname "'+o.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):e}return n&&(o.key=n),r?o.pathname?"/"!==o.pathname.charAt(0)&&(o.pathname=function(e,t){void 0===t&&(t="");var n,r=e&&e.split("/")||[],o=t&&t.split("/")||[],i=e&&p(e),a=t&&p(t),c=i||a;if(e&&p(e)?o=r:r.length&&(o.pop(),o=o.concat(r)),!o.length)return"/";if(o.length){var u=o[o.length-1];n="."===u||".."===u||""===u}else n=!1;for(var l=0,s=o.length;s>=0;s--){var f=o[s];"."===f?d(o,s):".."===f?(d(o,s),l++):l&&(d(o,s),l--)}if(!c)for(;l--;l)o.unshift("..");!c||""===o[0]||o[0]&&p(o[0])||o.unshift("");var h=o.join("/");return n&&"/"!==h.substr(-1)&&(h+="/"),h}(o.pathname,r.pathname)):o.pathname=r.pathname:o.pathname||(o.pathname="/"),o}var m=!("undefined"==typeof window||!window.document||!window.document.createElement);function v(e,t){t(window.confirm(e))}var g="popstate",b="hashchange";function w(){try{return window.history.state||{}}catch(e){return{}}}function E(e){void 0===e&&(e={}),m||h(!1);var t,n,r=window.history,o=(-1===(t=window.navigator.userAgent).indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&window.history&&"pushState"in window.history,i=!(-1===window.navigator.userAgent.indexOf("Trident")),a=e,c=a.forceRefresh,u=void 0!==c&&c,l=a.getUserConfirmation,s=void 0===l?v:l,p=a.keyLength,d=void 0===p?6:p,E=e.basename?function(e){return"/"===e.charAt(e.length-1)?e.slice(0,-1):e}("/"===(n=e.basename).charAt(0)?n:"/"+n):"";function x(e){var t=e||{},n=t.key,r=t.state,o=window.location,i=o.pathname+o.search+o.hash;return E&&(i=function(e,t){return function(e,t){return 0===e.toLowerCase().indexOf(t.toLowerCase())&&-1!=="/?#".indexOf(e.charAt(t.length))}(e,t)?e.substr(t.length):e}(i,E)),y(i,r,n)}function _(){return Math.random().toString(36).substr(2,d)}var C,O,S=(C=null,O=[],{setPrompt:function(e){return C=e,function(){C===e&&(C=null)}},confirmTransitionTo:function(e,t,n,r){if(null!=C){var o="function"==typeof C?C(e,t):C;"string"==typeof o?"function"==typeof n?n(o,r):r(!0):r(!1!==o)}else r(!0)},appendListener:function(e){var t=!0;function n(){t&&e.apply(void 0,arguments)}return O.push(n),function(){t=!1,O=O.filter((function(e){return e!==n}))}},notifyListeners:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];O.forEach((function(e){return e.apply(void 0,t)}))}});function k(e){f(B,e),B.length=r.length,S.notifyListeners(B.location,B.action)}function R(e){(function(e){return void 0===e.state&&-1===navigator.userAgent.indexOf("CriOS")})(e)||P(x(e.state))}function $(){P(x(w()))}var j=!1;function P(e){j?(j=!1,k()):S.confirmTransitionTo(e,"POP",s,(function(t){t?k({action:"POP",location:e}):function(e){var t=B.location,n=T.indexOf(t.key);-1===n&&(n=0);var r=T.indexOf(e.key);-1===r&&(r=0);var o=n-r;o&&(j=!0,M(o))}(e)}))}var A=x(w()),T=[A.key];function I(e){return E+function(e){var t=e.pathname,n=e.search,r=e.hash,o=t||"/";return n&&"?"!==n&&(o+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(o+="#"===r.charAt(0)?r:"#"+r),o}(e)}function M(e){r.go(e)}var L=0;function N(e){1===(L+=e)&&1===e?(window.addEventListener(g,R),i&&window.addEventListener(b,$)):0===L&&(window.removeEventListener(g,R),i&&window.removeEventListener(b,$))}var U=!1,B={length:r.length,action:"POP",location:A,createHref:I,push:function(e,t){var n="PUSH",i=y(e,t,_(),B.location);S.confirmTransitionTo(i,n,s,(function(e){if(e){var t=I(i),a=i.key,c=i.state;if(o)if(r.pushState({key:a,state:c},null,t),u)window.location.href=t;else{var l=T.indexOf(B.location.key),s=T.slice(0,l+1);s.push(i.key),T=s,k({action:n,location:i})}else window.location.href=t}}))},replace:function(e,t){var n="REPLACE",i=y(e,t,_(),B.location);S.confirmTransitionTo(i,n,s,(function(e){if(e){var t=I(i),a=i.key,c=i.state;if(o)if(r.replaceState({key:a,state:c},null,t),u)window.location.replace(t);else{var l=T.indexOf(B.location.key);-1!==l&&(T[l]=i.key),k({action:n,location:i})}else window.location.replace(t)}}))},go:M,goBack:function(){M(-1)},goForward:function(){M(1)},block:function(e){void 0===e&&(e=!1);var t=S.setPrompt(e);return U||(N(1),U=!0),function(){return U&&(U=!1,N(-1)),t()}},listen:function(e){var t=S.appendListener(e);return N(1),function(){N(-1),t()}}};return B}var x=1073741823,_="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:{};function C(e){var t=[];return{on:function(e){t.push(e)},off:function(e){t=t.filter((function(t){return t!==e}))},get:function(){return e},set:function(n,r){e=n,t.forEach((function(t){return t(e,r)}))}}}var O=o.r.createContext||function(e,t){var n,r,i="__create-react-context-"+(_["__global_unique_id__"]=(_.__global_unique_id__||0)+1)+"__",a=function(e){function n(){var t;return(t=e.apply(this,arguments)||this).emitter=C(t.props.value),t}c(n,e);var r=n.prototype;return r.getChildContext=function(){var e;return(e={})[i]=this.emitter,e},r.componentWillReceiveProps=function(e){if(this.props.value!==e.value){var n,r=this.props.value,o=e.value;!function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}(r,o)?(n="function"==typeof t?t(r,o):x,0!=(n|=0)&&this.emitter.set(e.value,n)):n=0}},r.render=function(){return this.props.children},n}(o.r.Component);a.childContextTypes=((n={})[i]=s.object.isRequired,n);var u=function(t){function n(){var e;return(e=t.apply(this,arguments)||this).state={value:e.getValue()},e.onUpdate=function(t,n){0!=((0|e.observedBits)&n)&&e.setState({value:e.getValue()})},e}c(n,t);var r=n.prototype;return r.componentWillReceiveProps=function(e){var t=e.observedBits;this.observedBits=null==t?x:t},r.componentDidMount=function(){this.context[i]&&this.context[i].on(this.onUpdate);var e=this.props.observedBits;this.observedBits=null==e?x:e},r.componentWillUnmount=function(){this.context[i]&&this.context[i].off(this.onUpdate)},r.getValue=function(){return this.context[i]?this.context[i].get():e},r.render=function(){return(e=this.props.children,Array.isArray(e)?e[0]:e)(this.state.value);var e},n}(o.r.Component);return u.contextTypes=((r={})[i]=s.object,r),{Provider:a,Consumer:u}},S=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)},k=function e(t,n,r){return S(n)||(r=n||r,n=[]),r=r||{},t instanceof RegExp?function(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return N(e,t)}(t,n):S(t)?function(t,n,r){for(var o=[],i=0;i<t.length;i++)o.push(e(t[i],n,r).source);return N(new RegExp("(?:"+o.join("|")+")",U(r)),n)}(t,n,r):function(e,t,n){return B(A(e,n),t,n)}(t,n,r)},R=A,$=I,j=B,P=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function A(e,t){for(var n,r=[],o=0,i=0,a="",c=t&&t.delimiter||"/";null!=(n=P.exec(e));){var u=n[0],l=n[1],s=n.index;if(a+=e.slice(i,s),i=s+u.length,l)a+=l[1];else{var f=e[i],p=n[2],d=n[3],h=n[4],y=n[5],m=n[6],v=n[7];a&&(r.push(a),a="");var g=null!=p&&null!=f&&f!==p,b="+"===m||"*"===m,w="?"===m||"*"===m,E=n[2]||c,x=h||y;r.push({name:d||o++,prefix:p||"",delimiter:E,optional:w,repeat:b,partial:g,asterisk:!!v,pattern:x?L(x):v?".*":"[^"+M(E)+"]+?"})}}return i<e.length&&(a+=e.substr(i)),a&&r.push(a),r}function T(e){return encodeURI(e).replace(/[\/?#]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}function I(e,t){for(var n=new Array(e.length),r=0;r<e.length;r++)"object"==typeof e[r]&&(n[r]=new RegExp("^(?:"+e[r].pattern+")$",U(t)));return function(t,r){for(var o="",i=t||{},a=(r||{}).pretty?T:encodeURIComponent,c=0;c<e.length;c++){var u=e[c];if("string"!=typeof u){var l,s=i[u.name];if(null==s){if(u.optional){u.partial&&(o+=u.prefix);continue}throw new TypeError('Expected "'+u.name+'" to be defined')}if(S(s)){if(!u.repeat)throw new TypeError('Expected "'+u.name+'" to not repeat, but received `'+JSON.stringify(s)+"`");if(0===s.length){if(u.optional)continue;throw new TypeError('Expected "'+u.name+'" to not be empty')}for(var f=0;f<s.length;f++){if(l=a(s[f]),!n[c].test(l))throw new TypeError('Expected all "'+u.name+'" to match "'+u.pattern+'", but received `'+JSON.stringify(l)+"`");o+=(0===f?u.prefix:u.delimiter)+l}}else{if(l=u.asterisk?encodeURI(s).replace(/[?#]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})):a(s),!n[c].test(l))throw new TypeError('Expected "'+u.name+'" to match "'+u.pattern+'", but received "'+l+'"');o+=u.prefix+l}}else o+=u}return o}}function M(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function L(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function N(e,t){return e.keys=t,e}function U(e){return e&&e.sensitive?"":"i"}function B(e,t,n){S(t)||(n=t||n,t=[]);for(var r=(n=n||{}).strict,o=!1!==n.end,i="",a=0;a<e.length;a++){var c=e[a];if("string"==typeof c)i+=M(c);else{var u=M(c.prefix),l="(?:"+c.pattern+")";t.push(c),c.repeat&&(l+="(?:"+u+l+")*"),i+=l=c.optional?c.partial?u+"("+l+")?":"(?:"+u+"("+l+"))?":u+"("+l+")"}}var s=M(n.delimiter||"/"),f=i.slice(-s.length)===s;return r||(i=(f?i.slice(0,-s.length):i)+"(?:"+s+"(?=$))?"),i+=o?"$":r&&f?"":"(?="+s+"|$)",N(new RegExp("^"+i,U(n)),t)}k.parse=R,k.compile=function(e,t){return I(A(e,t),t)},k.tokensToFunction=$,k.tokensToRegExp=j;var F="function"==typeof Symbol&&Symbol.for,q=F?Symbol.for("react.element"):60103,D=F?Symbol.for("react.portal"):60106,V=F?Symbol.for("react.fragment"):60107,W=F?Symbol.for("react.strict_mode"):60108,H=F?Symbol.for("react.profiler"):60114,z=F?Symbol.for("react.provider"):60109,K=F?Symbol.for("react.context"):60110,J=F?Symbol.for("react.async_mode"):60111,Q=F?Symbol.for("react.concurrent_mode"):60111,Y=F?Symbol.for("react.forward_ref"):60112,G=F?Symbol.for("react.suspense"):60113,Z=F?Symbol.for("react.suspense_list"):60120,X=F?Symbol.for("react.memo"):60115,ee=F?Symbol.for("react.lazy"):60116,te=F?Symbol.for("react.block"):60121,ne=F?Symbol.for("react.fundamental"):60117,re=F?Symbol.for("react.responder"):60118,oe=F?Symbol.for("react.scope"):60119;function ie(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case q:switch(e=e.type){case J:case Q:case V:case H:case W:case G:return e;default:switch(e=e&&e.$$typeof){case K:case Y:case ee:case X:case z:return e;default:return t}}case D:return t}}}function ae(e){return ie(e)===Q}var ce={AsyncMode:J,ConcurrentMode:Q,ContextConsumer:K,ContextProvider:z,Element:q,ForwardRef:Y,Fragment:V,Lazy:ee,Memo:X,Portal:D,Profiler:H,StrictMode:W,Suspense:G,isAsyncMode:function(e){return ae(e)||ie(e)===J},isConcurrentMode:ae,isContextConsumer:function(e){return ie(e)===K},isContextProvider:function(e){return ie(e)===z},isElement:function(e){return"object"==typeof e&&null!==e&&e.$$typeof===q},isForwardRef:function(e){return ie(e)===Y},isFragment:function(e){return ie(e)===V},isLazy:function(e){return ie(e)===ee},isMemo:function(e){return ie(e)===X},isPortal:function(e){return ie(e)===D},isProfiler:function(e){return ie(e)===H},isStrictMode:function(e){return ie(e)===W},isSuspense:function(e){return ie(e)===G},isValidElementType:function(e){return"string"==typeof e||"function"==typeof e||e===V||e===Q||e===H||e===W||e===G||e===Z||"object"==typeof e&&null!==e&&(e.$$typeof===ee||e.$$typeof===X||e.$$typeof===z||e.$$typeof===K||e.$$typeof===Y||e.$$typeof===ne||e.$$typeof===re||e.$$typeof===oe||e.$$typeof===te)},typeOf:ie},ue=(0,o.c)((function(e){e.exports=ce}));function le(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}var se={};se[ue.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},se[ue.Memo]={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0};var fe=function(e){var t=O();return t.displayName="Router-History",t}(),pe=function(e){var t=O();return t.displayName="Router",t}(),de=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={location:t.history.location},n._isMounted=!1,n._pendingLocation=null,t.staticContext||(n.unlisten=t.history.listen((function(e){n._isMounted?n.setState({location:e}):n._pendingLocation=e}))),n}c(t,e),t.computeRootMatch=function(e){return{path:"/",url:"/",params:{},isExact:"/"===e}};var n=t.prototype;return n.componentDidMount=function(){this._isMounted=!0,this._pendingLocation&&this.setState({location:this._pendingLocation})},n.componentWillUnmount=function(){this.unlisten&&this.unlisten()},n.render=function(){return o.r.createElement(pe.Provider,{value:{history:this.props.history,location:this.state.location,match:t.computeRootMatch(this.state.location.pathname),staticContext:this.props.staticContext}},o.r.createElement(fe.Provider,{children:this.props.children||null,value:this.props.history}))},t}(o.r.Component);o.r.Component,o.r.Component;var he={},ye=0;function me(e,t){void 0===t&&(t={}),("string"==typeof t||Array.isArray(t))&&(t={path:t});var n=t,r=n.path,o=n.exact,i=void 0!==o&&o,a=n.strict,c=void 0!==a&&a,u=n.sensitive,l=void 0!==u&&u;return[].concat(r).reduce((function(t,n){if(!n&&""!==n)return null;if(t)return t;var r=function(e,t){var n=""+t.end+t.strict+t.sensitive,r=he[n]||(he[n]={});if(r[e])return r[e];var o=[],i={regexp:k(e,o,t),keys:o};return ye<1e4&&(r[e]=i,ye++),i}(n,{end:i,strict:c,sensitive:l}),o=r.regexp,a=r.keys,u=o.exec(e);if(!u)return null;var s=u[0],f=u.slice(1),p=e===s;return i&&!p?null:{path:n,url:"/"===n&&""===s?"/":s,isExact:p,params:a.reduce((function(e,t,n){return e[t.name]=f[n],e}),{})}}),null)}var ve=function(e){function t(){return e.apply(this,arguments)||this}return c(t,e),t.prototype.render=function(){var e=this;return o.r.createElement(pe.Consumer,null,(function(t){t||h(!1);var n=e.props.location||t.location,r=f({},t,{location:n,match:e.props.computedMatch?e.props.computedMatch:e.props.path?me(n.pathname,e.props):t.match}),i=e.props,a=i.children,c=i.component,u=i.render;return Array.isArray(a)&&0===a.length&&(a=null),o.r.createElement(pe.Provider,{value:r},r.match?a?"function"==typeof a?a(r):a:c?o.r.createElement(c,r):u?u(r):null:"function"==typeof a?a(r):null)}))},t}(o.r.Component);o.r.Component;var ge=function(e){function t(){return e.apply(this,arguments)||this}return c(t,e),t.prototype.render=function(){var e=this;return o.r.createElement(pe.Consumer,null,(function(t){t||h(!1);var n,r,i=e.props.location||t.location;return o.r.Children.forEach(e.props.children,(function(e){if(null==r&&o.r.isValidElement(e)){n=e;var a=e.props.path||e.props.from;r=a?me(i.pathname,f({},e.props,{path:a})):t.match}})),r?o.r.cloneElement(n,{location:i,computedMatch:r}):null}))},t}(o.r.Component);o.r.useContext;var be=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).history=E(t.props),t}return c(t,e),t.prototype.render=function(){return o.r.createElement(de,{history:this.history,children:this.props.children})},t}(o.r.Component);o.r.Component;var we=function(e,t){return"function"==typeof e?e(t):e},Ee=function(e,t){return"string"==typeof e?y(e,null,null,t):e},xe=function(e){return e},_e=o.r.forwardRef;void 0===_e&&(_e=xe);var Ce=_e((function(e,t){var n=e.innerRef,r=e.navigate,i=e.onClick,a=le(e,["innerRef","navigate","onClick"]),c=a.target,u=f({},a,{onClick:function(e){try{i&&i(e)}catch(t){throw e.preventDefault(),t}e.defaultPrevented||0!==e.button||c&&"_self"!==c||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)||(e.preventDefault(),r())}});return u.ref=xe!==_e&&t||n,o.r.createElement("a",u)})),Oe=_e((function(e,t){var n=e.component,r=void 0===n?Ce:n,i=e.replace,a=e.to,c=e.innerRef,u=le(e,["component","replace","to","innerRef"]);return o.r.createElement(pe.Consumer,null,(function(e){e||h(!1);var n=e.history,l=Ee(we(a,e.location),e.location),s=l?n.createHref(l):"",p=f({},u,{href:s,navigate:function(){var t=we(a,e.location);(i?n.replace:n.push)(t)}});return xe!==_e?p.ref=t||c:p.innerRef=c,o.r.createElement(r,p)}))})),Se=function(e){return e},ke=o.r.forwardRef;void 0===ke&&(ke=Se),ke((function(e,t){var n=e["aria-current"],r=void 0===n?"page":n,i=e.activeClassName,a=void 0===i?"active":i,c=e.activeStyle,u=e.className,l=e.exact,s=e.isActive,p=e.location,d=e.sensitive,y=e.strict,m=e.style,v=e.to,g=e.innerRef,b=le(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return o.r.createElement(pe.Consumer,null,(function(e){e||h(!1);var n=p||e.location,i=Ee(we(v,n),n),w=i.pathname,E=w&&w.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),x=E?me(n.pathname,{path:E,exact:l,sensitive:d,strict:y}):null,_=!!(s?s(x,n):x),C=_?function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return e})).join(" ")}(u,a):u,O=_?f({},m,{},c):m,S=f({"aria-current":_&&r||null,className:C,style:O,to:i},b);return Se!==ke?S.ref=t||g:S.innerRef=g,o.r.createElement(Oe,S)}))}));const Re=[{title:"Signup #1",videoId:731245657,secret:"b19ea608fb"},{title:"Signup #2",videoId:731254517,secret:"63ce3aad47"},{title:"Create invoice",videoId:731254970,secret:"0a45be5342"},{title:"Create invoice",videoId:731254970,secret:"0a45be5342"},{title:"Debtor Manageemnt #1",videoId:731255376,secret:"d2dd043f62"},{title:"Debtor Manageemnt #2",videoId:731255544,secret:"2ad4a7f021"},{title:"To Payable",videoId:731263024,secret:"1b5441bfc1"},{title:"Payable to TG",videoId:731263437,secret:"2372e9e641"}],$e=[{title:"Onboarding",videoId:561867939},{title:"Onboarding #2",videoId:561869509},{title:"Onboarding #3",text:"accounting - account fuction types",videoId:561870292},{title:"Regus",text:"Example of an IBAN payment",videoId:560990229},{title:"Byjuno",text:"Example of a BVR payment",videoId:560807962},{title:"QRBill",text:"Example of a QRBill payment",videoId:547944407},{title:"Reconciliation",text:"Basic account reconciliation",videoId:573976726}],je=({videoId:e,secret:t})=>{const n=`https://player.vimeo.com/video/${e}`,r={badge:0,autopause:0,player_id:0,app_id:58479};t&&(r.h=t);const o=n+"?"+Object.entries(r).map((([e,t])=>[e,encodeURIComponent(t)].join("="))).join("&");return console.log(o),o},Pe=({src:e})=>o.r.createElement("div",{className:"relative",style:{paddingTop:"56.25%"}},o.r.createElement("iframe",{className:"absolute inset-0 w-full h-full",src:e,frameBorder:"0",allow:"autoplay; fullscreen; picture-in-picture",allowFullScreen:!0,title:"onboarding"})),Ae=({v:e,i:t})=>{const n=o.r.createElement("div",null,o.r.createElement("p",{className:"mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"},e.title),e.text&&o.r.createElement("p",null,e.text)),r=o.r.createElement("div",null,o.r.createElement(Pe,{src:je(e)}));return t%2==0?o.r.createElement(o.r.Fragment,null,n,r):o.r.createElement(o.r.Fragment,null,r,n)},Te=()=>o.r.createElement("div",{className:"p-12 bg-white h-200"},o.r.createElement("div",{className:"grid grid-cols-2 gap-4"},Re.map(((e,t)=>o.r.createElement(Ae,{key:t,v:e,i:t})))),o.r.createElement("hr",null),o.r.createElement("h3",{className:"mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"},"Videos 2021"),o.r.createElement("div",{className:"grid grid-cols-2 gap-4"},$e.map(((e,t)=>o.r.createElement(Ae,{key:t,v:e,i:t}))))),Ie="f6f09df242cdf47212a8d3c258ef9adf39311006",Me="v1.1.1",Le="/digis-showcase",Ne=Me||"unset_version",Ue=Le,Be="https://github.com/nexys-admin/finy-showcase",Fe={sha:`${Be}/commit/${Ie||"unset_sha"}`,url:Be},qe=()=>o.r.createElement(o.r.Fragment,null,o.r.createElement(Te,null),o.r.createElement("p",{className:"p-8"},o.r.createElement("small",null,o.r.createElement("a",{href:Fe.sha},Ne)))),De={name:"Landing",link:"/"},Ve=(Object.values({home:{name:"Home",link:"/"}}),()=>o.r.createElement(be,{basename:Ue},o.r.createElement(ge,null,o.r.createElement(ve,{exact:!0,path:De.link,component:qe}))));i.Z.render(o.r.createElement(Ve,null),document.getElementById("root"))}},e=>{"use strict";e.O(0,[170],(()=>(565,e(e.s=565)))),e.O()}]);