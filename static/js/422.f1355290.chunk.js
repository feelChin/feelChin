"use strict";(self.webpackChunkmyreact=self.webpackChunkmyreact||[]).push([[422],{9780:function(e,t,n){n.d(t,{Z:function(){return c}});var r="head_head__yl3Oi",o=n(184);var c=function(e){var t=e.title,n=e.back;return(0,o.jsxs)("div",{className:r,children:[(0,o.jsx)("i",{className:"iconfont icon-jiantou-copy",onClick:function(){n()}}),(0,o.jsx)("h1",{children:t})]})}},25:function(e,t,n){n(2791);var r=n(6871),o=n(9780),c=n(184);t.Z=function(e){var t,n=e.children,i=(0,r.s0)(),s=null===(t=(0,r.TH)().state)||void 0===t?void 0:t.title;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(o.Z,{title:s,back:function(){i(-1)}}),n]})}},3422:function(e,t,n){n.r(t),n.d(t,{default:function(){return _}});var r=n(2791),o=n(25),c=n(9340),i=n(8557),s=n(1413),a=n(5671),u=n(3144),l=n(1250),f=n(184);function d(e){var t=e.data,n=t.type,o=t.handlerClose,c=t.time,i=t.context,s=t.defaultTime;return(0,r.useEffect)((function(){var e=setTimeout(o,c||s);return function(){e&&clearTimeout(e)}}),[]),(0,f.jsx)("div",{className:"message",children:n?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("div",{className:"icon",children:m.messageIcon(n)})," ",(0,f.jsx)("div",{className:"context",children:i})]}):(0,f.jsx)(f.Fragment,{children:function(){var t=i.props.children.map((function(e){return e.props.onClick?r.cloneElement(e,{onClick:o}):r.cloneElement(e)}));return r.cloneElement(i,e,t)}()})})}var m=new(function(e){(0,c.Z)(n,e);var t=(0,i.Z)(n);function n(){return(0,a.Z)(this,n),t.call(this)}return(0,u.Z)(n,[{key:"success",value:function(e){this._message((0,s.Z)({type:"success"},e))}},{key:"error",value:function(e){this._message((0,s.Z)({type:"error"},e))}},{key:"warning",value:function(e){this._message((0,s.Z)({type:"warning"},e))}},{key:"info",value:function(e){this._message((0,s.Z)({type:"info"},e))}},{key:"custom",value:function(e){this._message((0,s.Z)({},e))}},{key:"config",value:function(e){for(var t in e)this[t]=e[t]}}]),n}(function(){function e(){var t=this;(0,a.Z)(this,e),this._message=function(e){var n=t.getContainer(),r=document.createElement("div");r.className="messageinlineBlock",n.appendChild(r);var o=l.createRoot(r),c=n.children;c.length>t.maxCount&&(c[0].classList.add("leave"),setTimeout((function(){c[0].remove()}),400));var i=(0,s.Z)((0,s.Z)({},e),{},{handlerClose:function(){r.classList.add("leave"),setTimeout((function(){o.unmount(),r.remove()}),400)},defaultTime:t.time});o.render((0,f.jsx)(d,{data:i}))},this.time=6e3,this.maxCount=7}return(0,u.Z)(e,[{key:"messageIcon",value:function(e){return new Map([["success","\u6210\u529f\uff1a"],["error","\u9519\u8bef\uff1a"],["warning","\u8b66\u544a\uff1a"],["info","\u63d0\u793a\uff1a"]]).get(e)}},{key:"getContainer",value:function(){var e=document.querySelector(".customMessageWrapper");if(!e){var t=document.createElement("section");return t.className="customMessageWrapper",document.body.append(t),t}return e}}]),e}())),p=m,h="message_messageWrapper__8tkct",y="message_items__3Wevs",v="message_item__hK69U",b="message_custom__QEwBl",g="message_closeMessage__F1P+2",j="message_head__SIy6i",x="message_text__rF8HC";var _=function(){return(0,f.jsx)(o.Z,{children:(0,f.jsx)("section",{className:"".concat(h," page"),children:(0,f.jsxs)("div",{className:y,children:[(0,f.jsx)("div",{className:v,onClick:function(){p.success({context:(100*Math.random()).toFixed(3)})},children:"\u6210\u529f"}),(0,f.jsx)("div",{className:v,onClick:function(){p.error({context:(100*Math.random()).toFixed(5)})},children:"\u9519\u8bef"}),(0,f.jsx)("div",{className:v,onClick:function(){p.warning({context:(10*Math.random()).toFixed(5)})},children:"\u8b66\u544a"}),(0,f.jsx)("div",{className:v,onClick:function(){p.info({context:(1e4*Math.random()).toFixed(0)})},children:"\u63d0\u793a"}),(0,f.jsx)("div",{className:v,style:{width:"100%"},onClick:function(){p.custom({time:8e3,context:(0,f.jsxs)("div",{className:b,children:[(0,f.jsx)("div",{className:g,onClick:!0}),(0,f.jsxs)("div",{className:j,children:["\u81ea\u5b9a\u4e49\u5185\u5bb9",(10*Math.random()).toFixed(0)]}),(0,f.jsx)("div",{className:x,children:"\u8fd9\u91cc\u662f\u6d88\u606f\u8fd9\u91cc\u662f\u6d88\u606f\u8fd9\u91cc\u662f\u6d88\u606f \u8fd9\u91cc\u662f\u6d88\u606f \u8fd9\u91cc\u662f\u6d88\u606f"})]})})},children:"\u81ea\u5b9a\u4e49\u5185\u5bb9"}),(0,f.jsx)("div",{className:v,onClick:function(){p.config({time:3e3}),p.success({context:"\u8bbe\u7f6e\u6210\u529f"})},children:"\u5168\u5c40\u8bbe\u7f6e\u65f6\u95f4\u4e3a3s"}),(0,f.jsx)("div",{className:v,onClick:function(){p.config({maxCount:3}),p.success({context:"\u8bbe\u7f6e\u6210\u529f"})},children:"\u5168\u5c40\u8bbe\u7f6e\u6700\u5927\u6761\u6570\u4e3a3\u6761"})]})})})}},7326:function(e,t,n){function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,{Z:function(){return r}})},5671:function(e,t,n){function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,{Z:function(){return r}})},3144:function(e,t,n){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}n.d(t,{Z:function(){return o}})},8557:function(e,t,n){function r(e){return r=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},r(e)}n.d(t,{Z:function(){return s}});var o=n(1002),c=n(7326);function i(e,t){if(t&&("object"===(0,o.Z)(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return(0,c.Z)(e)}function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=r(e);if(t){var c=r(this).constructor;n=Reflect.construct(o,arguments,c)}else n=o.apply(this,arguments);return i(this,n)}}},4942:function(e,t,n){function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:function(){return r}})},9340:function(e,t,n){function r(e,t){return r=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},r(e,t)}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&r(e,t)}n.d(t,{Z:function(){return o}})},1413:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(4942);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},1002:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}n.d(t,{Z:function(){return r}})}}]);
//# sourceMappingURL=422.f1355290.chunk.js.map