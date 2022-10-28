/*! For license information please see server.js.LICENSE.txt */
(()=>{"use strict";var e={};function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}function r(){r=function(){return e};var e={},n=Object.prototype,o=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function s(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(e){s=function(e,t,r){return e[t]=r}}function l(e,t,r,n){var o=t&&t.prototype instanceof p?t:p,i=Object.create(o.prototype),a=new O(n||[]);return i._invoke=function(e,t,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var u=b(a,r);if(u){if(u===h)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=f(e,t,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===h)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}(e,r,a),i}function f(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var h={};function p(){}function d(){}function v(){}var y={};s(y,a,(function(){return this}));var m=Object.getPrototypeOf,x=m&&m(m(L([])));x&&x!==n&&o.call(x,a)&&(y=x);var g=v.prototype=p.prototype=Object.create(y);function j(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function w(e,r){function n(i,a,u,c){var s=f(e[i],e,a);if("throw"!==s.type){var l=s.arg,h=l.value;return h&&"object"==t(h)&&o.call(h,"__await")?r.resolve(h.__await).then((function(e){n("next",e,u,c)}),(function(e){n("throw",e,u,c)})):r.resolve(h).then((function(e){l.value=e,u(l)}),(function(e){return n("throw",e,u,c)}))}c(s.arg)}var i;this._invoke=function(e,t){function o(){return new r((function(r,o){n(e,t,r,o)}))}return i=i?i.then(o,o):o()}}function b(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,b(e,t),"throw"===t.method))return h;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=f(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,h;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,h):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,h)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function L(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,n=function t(){for(;++r<e.length;)if(o.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return n.next=n}}return{next:_}}function _(){return{value:void 0,done:!0}}return d.prototype=v,s(g,"constructor",v),s(v,"constructor",d),d.displayName=s(v,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,s(e,c,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},j(w.prototype),s(w.prototype,u,(function(){return this})),e.AsyncIterator=w,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new w(l(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},j(g),s(g,c,"Generator"),s(g,a,(function(){return this})),s(g,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=L,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!e)for(var t in this)"t"===t.charAt(0)&&o.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(r,n){return a.type="throw",a.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var u=o.call(i,"catchLoc"),c=o.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),S(r),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:L(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},e}function n(e,t,r,n,o,i,a){try{var u=e[i](a),c=u.value}catch(e){return void r(e)}u.done?t(c):Promise.resolve(c).then(n,o)}function o(e){return function(){var t=this,r=arguments;return new Promise((function(o,i){var a=e.apply(t,r);function u(e){n(a,o,i,u,c,"next",e)}function c(e){n(a,o,i,u,c,"throw",e)}u(void 0)}))}}e.n=t=>{var r=t&&t.__esModule?()=>t.default:()=>t;return e.d(r,{a:r}),r},e.d=(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},e.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);const i=require("react-dom/server");var a=e.n(i);const u=require("express");var c=e.n(u);const s=require("react-router-dom/server"),l=require("react-router-dom"),f=require("react/jsx-runtime"),h=function(){return(0,f.jsxs)("ul",{children:[(0,f.jsx)("li",{children:(0,f.jsx)(l.Link,{to:"/red",children:"Red"})}),(0,f.jsx)("li",{children:(0,f.jsx)(l.Link,{to:"/blue",children:"Blue"})}),(0,f.jsx)("li",{children:(0,f.jsx)(l.Link,{to:"/users",children:"Users"})})]})},p=function(){return(0,f.jsx)("div",{className:"Red",children:"Red"})},d=function(){return(0,f.jsx)(p,{})},v=function(){return(0,f.jsx)("div",{className:"Blue",children:"Blue"})},y=function(){return(0,f.jsx)(v,{})},m=require("react"),x=function(e){var t=e.users;return t?(0,f.jsx)("div",{children:(0,f.jsx)("ul",{children:t.map((function(e){return(0,f.jsx)("li",{children:(0,f.jsx)(l.Link,{to:"/users/".concat(e.id),children:e.username})},e.id)}))})}):null},g=require("react-redux");function j(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(Object(r),!0).forEach((function(t){j(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const E=require("axios");var S=e.n(E);const O=require("redux-saga/effects");var L=r().mark(F),_=r().mark(A),P="users/GET_USERS_PENDING",k="users/GET_USERS_SUCCESS",R="users/GET_USERS_FAILURE",N="users/GET_USER",T="users/GET_USER_SUCCESS",G="users/GET_USER_FAILURE",q=function(e){return{type:N,payload:e}},D=function(){return function(){var e=o(r().mark((function e(t){var n;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:P}),e.next=4,S().get("https://jsonplaceholder.typicode.com/users");case 4:n=e.sent,t({type:k,payload:n}),e.next=12;break;case 8:throw e.prev=8,e.t0=e.catch(0),t((r=e.t0,{type:R,error:!0,payload:r})),e.t0;case 12:case"end":return e.stop()}var r}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},U=function(e){return S().get("https://jsonplaceholder.typicode.com/users/".concat(e))};function F(e){var t;return r().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,O.call)(U,e.payload);case 3:return t=r.sent,r.next=6,(0,O.put)((o=t.data,{type:T,payload:o}));case 6:r.next=12;break;case 8:return r.prev=8,r.t0=r.catch(0),r.next=12,(0,O.put)((n=r.t0,{type:G,payload:n,error:!0}));case 12:case"end":return r.stop()}var n,o}),L,null,[[0,8]])}function A(){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,O.takeEvery)(N,F);case 2:case"end":return e.stop()}}),_)}var C={users:null,user:null,loading:{users:!1,user:!1},error:{users:null,user:null}};var I=(0,m.createContext)(null);const Y=I;var B=function(e){var t=e.resolve,r=(0,m.useContext)(I);return r?(r.done||r.promises.push(Promise.resolve(t())),null):null};const J=function(){var e=(0,g.useSelector)((function(e){return e.users.users})),t=(0,g.useDispatch)();return(0,m.useEffect)((function(){e||t(D())}),[t,e]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(x,{users:e}),";",(0,f.jsx)(B,{resolve:function(){return t(D)}})]})},M=function(e){var t=e.user,r=t.email,n=t.name,o=t.username;return(0,f.jsxs)("div",{children:[(0,f.jsxs)("h1",{children:[o,"(",n,")"]}),(0,f.jsxs)("p",{children:[(0,f.jsx)("b",{children:"e-mail : "}),r]})]})},z=function(e){var t=e.id,r=(0,g.useSelector)((function(e){return e.users.user})),n=(0,g.useDispatch)();return(0,m.useEffect)((function(){r&&r.id===parseInt(t,10)||n(q(t))}),[n,t,r]),r?(0,f.jsx)(M,{user:r}):(0,f.jsx)(B,{resolve:function(){return n(q(t))}})},H=function(){var e=(0,l.useParams)().id;return(0,f.jsx)(z,{id:e})},K=function(){return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(J,{}),(0,f.jsx)(l.Routes,{children:(0,f.jsx)(l.Route,{path:":id",element:(0,f.jsx)(H,{})})})]})},Q=function(){return(0,f.jsxs)("div",{className:"App",children:[(0,f.jsx)(h,{}),(0,f.jsx)("hr",{}),(0,f.jsxs)(l.Routes,{children:[(0,f.jsx)(l.Route,{path:"/red",element:(0,f.jsx)(d,{})}),(0,f.jsx)(l.Route,{path:"/blue",element:(0,f.jsx)(y,{})}),(0,f.jsx)(l.Route,{path:"/users/*",element:(0,f.jsx)(K,{})})]})]})},V=require("path");var W=e.n(V);const X=require("fs");var Z=e.n(X);const $=require("redux"),ee=require("redux-thunk");var te=e.n(ee),re=r().mark(ne);function ne(){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,O.all)([A()]);case 2:case"end":return e.stop()}}),re)}const oe=(0,$.combineReducers)({users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case P:return b(b({},e),{},{loading:b(b({},e.loading),{},{users:!0})});case k:return b(b({},e),{},{loading:b(b({},e.loading),{},{user:!1}),users:t.payload.data});case R:return b(b({},e),{},{loading:b(b({},e.loading),{},{users:!1}),error:b(b({},e.error),{},{users:t.payload})});case N:return b(b({},e),{},{loading:b(b({},e.loading),{},{user:!0}),error:b(b({},e.error),{},{user:null})});case T:return b(b({},e),{},{loading:b(b({},e.loading),{},{user:!1}),user:t.payload});case G:return b(b({},e),{},{loading:b(b({},e.loading),{},{user:!1}),error:b(b({},e.error),{},{user:t.payload})});default:return e}}}),ie=require("redux-saga");var ae=e.n(ie),ue=JSON.parse(Z().readFileSync(W().resolve("./build/asset-manifest.json"),"utf8"));function ce(e,t){return'<!DOCTYPE html>\n    <html lang="en">\n        <head>\n            <meta charset="utf-8" />\n            <link rel="shortcut icon" href="/favicon.ico" />\n            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />\n            <meta name="theme-color" content="#000000" />\n            <title>React App</title>\n            <link href="'.concat(ue.files["main.css"],'" rel="stylesheet"  />\n        </head>\n        <body>\n            <noscript>You need to enable JavaScript to run this app.</noscript>\n            <div id="root">').concat(e,"</div>\n            ").concat(t,'\n            <script src="').concat(ue.files["main.js"],'"><\/script>\n        </body>\n    </html>;\n    ')}var se=c()(),le=function(){var e=o(r().mark((function e(t,n,o){var i,u,c,l,h,p,d,v,y;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i={},u=ae()(),c=(0,$.createStore)(oe,(0,$.applyMiddleware)(te(),u)),l=u.run(ne).toPromise(),h={done:!1,promises:[]},p=(0,f.jsx)(Y.Provider,{value:h,children:(0,f.jsx)(g.Provider,{store:c,children:(0,f.jsx)(s.StaticRouter,{location:t.url,context:i,children:(0,f.jsx)(Q,{})})})}),a().renderToStaticMarkup(p),c.dispatch(ie.END),e.prev=8,e.next=11,l;case 11:return e.next=13,Promise.all(h.promises);case 13:e.next=18;break;case 15:return e.prev=15,e.t0=e.catch(8),e.abrupt("return",n.status(500));case 18:h.done=!0,d=a().renderToString(p),v=JSON.stringify(c.getState()).replace(/</g,"\\u003c"),y="<script>__PRELOADED_STATE__ = ".concat(v,"<\/script>"),n.send(ce(d,y));case 23:case"end":return e.stop()}}),e,null,[[8,15]])})));return function(t,r,n){return e.apply(this,arguments)}}(),fe=c().static(W().resolve("./build"),{index:!1});se.use(fe),se.use(le),se.listen(5e3,(function(){console.log("Running on http://localhost:5000")}))})();