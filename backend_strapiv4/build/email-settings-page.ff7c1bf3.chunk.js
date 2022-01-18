(self["webpackChunkbackend_strapiv_4"] = self["webpackChunkbackend_strapiv_4"] || []).push([[1495],{

/***/ 35755:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "axiosInstance": () => (/* reexport */ axiosInstance),
  "basename": () => (/* reexport */ utils_basename),
  "createHook": () => (/* reexport */ utils_createHook)
});

// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(9669);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/index.js
var build = __webpack_require__(68547);
;// CONCATENATED MODULE: ./node_modules/@strapi/admin/admin/src/core/utils/axiosInstance.js



const instance = axios_default().create({
  baseURL: "",
});

instance.interceptors.request.use(
  async config => {
    config.headers = {
      Authorization: `Bearer ${build.auth.getToken()}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };

    return config;
  },
  error => {
    Promise.reject(error);
  }
);

instance.interceptors.response.use(
  response => response,
  error => {
    // whatever you want to do with the error
    if (error?.response?.status === 401) {
      build.auth.clearAppStorage();
      window.location.reload();
    }

    throw error;
  }
);

/* harmony default export */ const axiosInstance = (instance);

;// CONCATENATED MODULE: ./node_modules/@strapi/admin/admin/src/core/utils/basename.js
const basename = "/admin/".replace(window.location.origin, '');

/* harmony default export */ const utils_basename = (basename);

;// CONCATENATED MODULE: ./node_modules/@strapi/admin/admin/src/core/utils/createHook.js
// TODO: refacto this file to avoid eslint issues
/* eslint-disable no-unused-vars */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
const createHook = () => {
  const _handlers = [];

  return {
    register(fn) {
      _handlers.push(fn);
    },
    delete(handler) {
      _handlers.splice(_handlers.indexOf(handler), 1);
    },
    runWaterfall(args, store) {
      return _handlers.reduce((acc, fn) => fn(acc, store), args);
    },
    async runWaterfallAsync(args, store) {
      let result = args;

      for (const fn of _handlers) {
        result = await fn(result, store);
      }

      return result;
    },
    runSeries(...args) {
      return _handlers.map(fn => fn(...args));
    },
    async runSeriesAsync(...args) {
      const result = [];

      for (const fn of _handlers) {
        result.push(await fn(...args));
      }

      return result;
    },
    runParallel(...args) {
      return Promise.all(
        _handlers.map(fn => {
          return fn(...args);
        })
      );
    },
  };
};

/* harmony default export */ const utils_createHook = (createHook);

;// CONCATENATED MODULE: ./node_modules/@strapi/admin/admin/src/core/utils/index.js





/***/ }),

/***/ 62031:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

  
  
  if (true) {
    module.exports = __webpack_require__(59525);
  } else {}
  

/***/ }),

/***/ 59525:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function(n,e){ true?module.exports=e(__webpack_require__(67294),__webpack_require__(78384)):0}(this,(function(n,e){return function(n){var e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(r,o,function(e){return n[e]}.bind(null,o));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=108)}({0:function(n,e,t){n.exports=t(16)()},1:function(e,t){e.exports=n},10:function(n,e,t){var r=t(22),o=t(23),i=t(19),a=t(24);n.exports=function(n,e){return r(n)||o(n,e)||i(n,e)||a()},n.exports.default=n.exports,n.exports.__esModule=!0},108:function(n,e,t){"use strict";t.r(e),t.d(e,"Main",(function(){return y})),t.d(e,"SkipToContent",(function(){return _}));var r,o=t(5),i=t.n(o),a=t(6),u=t.n(a),s=t(3),c=t.n(s),f=t(1),d=t.n(f),p=t(0),l=t.n(p),h=t(2),m=t.n(h),b=["labelledBy"],v=m.a.main(r||(r=c()(["\n  // To prevent global outline on focus visible to force an outline when Main is focused\n  &:focus-visible {\n    outline: none;\n  }\n"]))),y=function(n){var e=n.labelledBy,t=u()(n,b),r=e||"main-content-title";return d.a.createElement(v,i()({"aria-labelledby":r,id:"main-content",tabIndex:-1},t))};y.defaultProps={labelledBy:void 0},y.propTypes={labelledBy:l.a.string};var g,x=t(4),O=m()(x.Box)(g||(g=c()(["\n  text-decoration: none;\n  position: absolute;\n  z-index: 9999;\n  left: -100%;\n  top: -100%;\n\n  &:focus {\n    left: ",";\n    top: ",";\n  }\n"])),(function(n){return n.theme.spaces[3]}),(function(n){return n.theme.spaces[3]})),_=function(n){var e=n.children;return d.a.createElement(O,{as:"a",href:"#main-content",background:"primary600",color:"neutral0",padding:3,hasRadius:!0},e)};_.propTypes={children:l.a.node.isRequired}},16:function(n,e,t){"use strict";var r=t(17);function o(){}function i(){}i.resetWarningCache=o,n.exports=function(){function n(n,e,t,o,i,a){if(a!==r){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function e(){return n}n.isRequired=n;var t={array:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:e,element:n,elementType:n,instanceOf:e,node:n,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:i,resetWarningCache:o};return t.PropTypes=t,t}},17:function(n,e,t){"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},18:function(n,e){n.exports=function(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r},n.exports.default=n.exports,n.exports.__esModule=!0},19:function(n,e,t){var r=t(18);n.exports=function(n,e){if(n){if("string"==typeof n)return r(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(n,e):void 0}},n.exports.default=n.exports,n.exports.__esModule=!0},2:function(n,t){n.exports=e},21:function(n,e){n.exports=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o},n.exports.default=n.exports,n.exports.__esModule=!0},22:function(n,e){n.exports=function(n){if(Array.isArray(n))return n},n.exports.default=n.exports,n.exports.__esModule=!0},23:function(n,e){n.exports=function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,o,i=[],a=!0,u=!1;try{for(t=t.call(n);!(a=(r=t.next()).done)&&(i.push(r.value),!e||i.length!==e);a=!0);}catch(n){u=!0,o=n}finally{try{a||null==t.return||t.return()}finally{if(u)throw o}}return i}},n.exports.default=n.exports,n.exports.__esModule=!0},24:function(n,e){n.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},n.exports.default=n.exports,n.exports.__esModule=!0},3:function(n,e){n.exports=function(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))},n.exports.default=n.exports,n.exports.__esModule=!0},4:function(n,e,t){"use strict";t.r(e),t.d(e,"Box",(function(){return p}));var r,o=t(3),i=t.n(o),a=t(0),u=t.n(a),s=t(2),c=t.n(s),f=t(7),d={color:!0},p=c.a.div.withConfig({shouldForwardProp:function(n,e){return!d[n]&&e(n)}})(r||(r=i()(["\n  // Font\n  font-size: ",";\n\n  // Colors\n  background: ",";\n  color: ",";\n\n  // Spaces\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n\n  // Responsive hiding\n  ","\n  ","\n  \n\n  // Borders\n  border-radius: ",";\n  border-style: ",";\n  border-width: ",";\n  border-color: ",";\n  border: ",";\n\n  // Shadows\n  box-shadow: ",";\n\n  // Handlers\n  pointer-events: ",";\n  &:hover {\n    ","\n  }\n\n  // Display\n  display: ",";\n\n  // Position\n  position: ",";\n  left: ",";\n  right: ",";\n  top: ",";\n  bottom: ",";\n  z-index: ",";\n  overflow: ",";\n  cursor: ",";\n\n  // Size\n  width: ",";\n  max-width: ",";\n  min-width: ",";\n  height: ",";\n  max-height: ",";\n  min-height: ",";\n\n  // Animation\n  transition: ",";\n  transform: ",";\n  animation: ",";\n\n  //Flexbox children props\n  flex-shrink: ",";\n  flex-grow: ",";\n  flex-basis: ",";\n  flex: ",";\n\n  // Text\n  text-align: ",";\n  text-transform: ",";\n  line-height: ",";\n\n  // Cursor\n  cursor: ",";\n"])),(function(n){var e=n.fontSize;return n.theme.fontSizes[e]||e}),(function(n){var e=n.theme,t=n.background;return e.colors[t]}),(function(n){var e=n.theme,t=n.color;return e.colors[t]}),(function(n){var e=n.theme,t=n.padding;return Object(f.a)("padding",t,e)}),(function(n){var e=n.theme,t=n.paddingTop;return Object(f.a)("padding-top",t,e)}),(function(n){var e=n.theme,t=n.paddingRight;return Object(f.a)("padding-right",t,e)}),(function(n){var e=n.theme,t=n.paddingBottom;return Object(f.a)("padding-bottom",t,e)}),(function(n){var e=n.theme,t=n.paddingLeft;return Object(f.a)("padding-left",t,e)}),(function(n){var e=n.theme,t=n.marginLeft;return Object(f.a)("margin-left",t,e)}),(function(n){var e=n.theme,t=n.marginRight;return Object(f.a)("margin-right",t,e)}),(function(n){var e=n.theme,t=n.marginTop;return Object(f.a)("margin-top",t,e)}),(function(n){var e=n.theme,t=n.marginBottom;return Object(f.a)("margin-bottom",t,e)}),(function(n){var e=n.theme;return n.hiddenS?"".concat(e.mediaQueries.tablet," { display: none; }"):void 0}),(function(n){var e=n.theme;return n.hiddenXS?"".concat(e.mediaQueries.mobile," { display: none; }"):void 0}),(function(n){var e=n.theme,t=n.hasRadius,r=n.borderRadius;return t?e.borderRadius:r}),(function(n){return n.borderStyle}),(function(n){return n.borderWidth}),(function(n){var e=n.borderColor;return n.theme.colors[e]}),(function(n){var e=n.theme,t=n.borderColor,r=n.borderStyle,o=n.borderWidth;if(t&&!r&&!o)return"1px solid ".concat(e.colors[t])}),(function(n){var e=n.theme,t=n.shadow;return e.shadows[t]}),(function(n){return n.pointerEvents}),(function(n){var e=n._hover,t=n.theme;return e?e(t):void 0}),(function(n){return n.display}),(function(n){return n.position}),(function(n){var e=n.left;return n.theme.spaces[e]||e}),(function(n){var e=n.right;return n.theme.spaces[e]||e}),(function(n){var e=n.top;return n.theme.spaces[e]||e}),(function(n){var e=n.bottom;return n.theme.spaces[e]||e}),(function(n){return n.zIndex}),(function(n){return n.overflow}),(function(n){return n.cursor}),(function(n){var e=n.width;return n.theme.sizes[e]||e}),(function(n){var e=n.maxWidth;return n.theme.sizes[e]||e}),(function(n){var e=n.minWidth;return n.theme.sizes[e]||e}),(function(n){var e=n.height;return n.theme.sizes[e]||e}),(function(n){var e=n.maxHeight;return n.theme.sizes[e]||e}),(function(n){var e=n.minHeight;return n.theme.sizes[e]||e}),(function(n){return n.transition}),(function(n){return n.transform}),(function(n){return n.animation}),(function(n){return n.shrink}),(function(n){return n.grow}),(function(n){return n.basis}),(function(n){return n.flex}),(function(n){return n.textAlign}),(function(n){return n.textTransform}),(function(n){return n.lineHeight}),(function(n){return n.cursor}));p.displayName="Box",p.defaultProps={background:void 0,borderColor:void 0,color:void 0,hiddenS:!1,hiddenXS:!1,padding:void 0,paddingTop:void 0,paddingRight:void 0,paddingBottom:void 0,paddingLeft:void 0,hasRadius:!1,shadow:void 0,children:null,shrink:void 0,grow:void 0,basis:void 0,flex:void 0,_hover:function(){}},p.propTypes={_hover:u.a.func,background:u.a.string,basis:u.a.oneOfType([u.a.string,u.a.string]),borderColor:u.a.string,children:u.a.oneOfType([u.a.node,u.a.string]),color:u.a.string,flex:u.a.oneOfType([u.a.string,u.a.string]),grow:u.a.oneOfType([u.a.string,u.a.string]),hasRadius:u.a.bool,hiddenS:u.a.bool,hiddenXS:u.a.bool,padding:u.a.oneOfType([u.a.number,u.a.arrayOf(u.a.number)]),paddingBottom:u.a.oneOfType([u.a.number,u.a.arrayOf(u.a.number)]),paddingLeft:u.a.oneOfType([u.a.number,u.a.arrayOf(u.a.number)]),paddingRight:u.a.oneOfType([u.a.number,u.a.arrayOf(u.a.number)]),paddingTop:u.a.oneOfType([u.a.number,u.a.arrayOf(u.a.number)]),shadow:u.a.string,shrink:u.a.oneOfType([u.a.string,u.a.string])}},5:function(n,e){function t(){return n.exports=t=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},n.exports.default=n.exports,n.exports.__esModule=!0,t.apply(this,arguments)}n.exports=t,n.exports.default=n.exports,n.exports.__esModule=!0},6:function(n,e,t){var r=t(21);n.exports=function(n,e){if(null==n)return{};var t,o,i=r(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(o=0;o<a.length;o++)t=a[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i},n.exports.default=n.exports,n.exports.__esModule=!0},7:function(n,e,t){"use strict";var r=t(10),o=t.n(r);e.a=function(n,e,t){if(void 0!==e){if(Array.isArray(e)){var r=o()(e,3),i=r[0],a=r[1],u=r[2],s="".concat(n,": ").concat(t.spaces[i],";");return void 0!==a&&(s+="".concat(t.mediaQueries.tablet,"{\n          ").concat(n,": ").concat(t.spaces[a],";\n        }")),void 0!==u&&(s+="".concat(t.mediaQueries.mobile,"{\n          ").concat(n,": ").concat(t.spaces[u],";\n        }")),s}var c=t.spaces[e]||e;return"".concat(n,": ").concat(c,";")}}}})}));

/***/ }),

/***/ 78086:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function(e,t){ true?module.exports=t(__webpack_require__(67294)):0}(this,(function(e){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=45)}({0:function(t,r){t.exports=e},45:function(e,t,r){"use strict";r.r(t);var n=r(0);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}t.default=function(e){return n.createElement("svg",o({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),n.createElement("path",{d:"M0 2.8A.8.8 0 01.8 2h22.4a.8.8 0 01.8.8v2.71a1 1 0 01-1 1H1a1 1 0 01-1-1V2.8z",fill:"#32324D"}),n.createElement("path",{d:"M1.922 7.991C.197 6.675 0 6.252 0 5.289h23.953c.305 1.363-1.594 2.506-2.297 3.125-1.953 1.363-6.253 4.36-7.828 5.45-1.575 1.09-3.031.455-3.562 0-2.063-1.41-6.62-4.557-8.344-5.873zM22.8 18H1.2c-.663 0-1.2.471-1.2 1.053v1.894C0 21.529.537 22 1.2 22h21.6c.663 0 1.2-.471 1.2-1.053v-1.894c0-.582-.537-1.053-1.2-1.053z",fill:"#32324D"}),n.createElement("path",{d:"M0 9.555v10.972h24V9.554c-2.633 1.95-8.367 6.113-9.96 7.166-1.595 1.052-3.352.438-4.032 0L0 9.555z",fill:"#32324D"}))}}})}));

/***/ }),

/***/ 39338:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));exports.default=void 0;var _react=_interopRequireDefault(__webpack_require__(67294));var _propTypes=_interopRequireDefault(__webpack_require__(45697));var _reactIntl=__webpack_require__(97132);var _Stack=__webpack_require__(9008);var _Grid=__webpack_require__(34626);var _Typography=__webpack_require__(49425);var _TextInput=__webpack_require__(55967);var _Select=__webpack_require__(43808);var _getTrad=_interopRequireDefault(__webpack_require__(11236));/* eslint-disable no-useless-escape */var Configuration=function Configuration(_ref){var config=_ref.config;var _useIntl=(0,_reactIntl.useIntl)(),formatMessage=_useIntl.formatMessage;return/*#__PURE__*/_react["default"].createElement(_Stack.Stack,{size:4},/*#__PURE__*/_react["default"].createElement(_Stack.Stack,{size:1},/*#__PURE__*/_react["default"].createElement(_Typography.Typography,{variant:"delta",as:"h2"},formatMessage({id:(0,_getTrad["default"])('Settings.email.plugin.title.config'),defaultMessage:'Configuration'})),/*#__PURE__*/_react["default"].createElement(_Typography.Typography,null,formatMessage({id:(0,_getTrad["default"])('Settings.email.plugin.text.configuration'),defaultMessage:'The plugin is configured through the {file} file, checkout this {link} for the documentation.'},{file:'./config/plugins.js',link:/*#__PURE__*/_react["default"].createElement("a",{href:"https://docs.strapi.io/developer-docs/latest/plugins/email.html",target:"_blank",rel:"noopener noreferrer"},"link")}))),/*#__PURE__*/_react["default"].createElement(_Grid.Grid,{gap:5},/*#__PURE__*/_react["default"].createElement(_Grid.GridItem,{col:6,s:12},/*#__PURE__*/_react["default"].createElement(_TextInput.TextInput,{name:"shipper-email",label:formatMessage({id:(0,_getTrad["default"])('Settings.email.plugin.label.defaultFrom'),defaultMessage:'Default shipper email'}),placeholder:formatMessage({id:(0,_getTrad["default"])('Settings.email.plugin.placeholder.defaultFrom'),defaultMessage:"ex: Strapi No-Reply <no-reply@strapi.io>"}),disabled:true,onChange:function onChange(){},value:config.settings.defaultFrom})),/*#__PURE__*/_react["default"].createElement(_Grid.GridItem,{col:6,s:12},/*#__PURE__*/_react["default"].createElement(_TextInput.TextInput,{name:"response-email",label:formatMessage({id:(0,_getTrad["default"])('Settings.email.plugin.label.defaultReplyTo'),defaultMessage:'Default response email'}),placeholder:formatMessage({id:(0,_getTrad["default"])('Settings.email.plugin.placeholder.defaultReplyTo'),defaultMessage:"ex: Strapi <example@strapi.io>"}),disabled:true,onChange:function onChange(){},value:config.settings.defaultReplyTo})),/*#__PURE__*/_react["default"].createElement(_Grid.GridItem,{col:6,s:12},/*#__PURE__*/_react["default"].createElement(_Select.Select,{name:"email-provider",label:formatMessage({id:(0,_getTrad["default"])('Settings.email.plugin.label.provider'),defaultMessage:'Email provider'}),disabled:true,onChange:function onChange(){},value:config.provider},/*#__PURE__*/_react["default"].createElement(_Select.Option,{value:config.provider},config.provider)))));};Configuration.propTypes={config:_propTypes["default"].shape({provider:_propTypes["default"].string,settings:_propTypes["default"].shape({defaultFrom:_propTypes["default"].string,defaultReplyTo:_propTypes["default"].string})}).isRequired};var _default=Configuration;exports.default=_default;

/***/ }),

/***/ 58711:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));exports.default=void 0;var _react=_interopRequireDefault(__webpack_require__(67294));var _reactIntl=__webpack_require__(97132);var _helperPlugin=__webpack_require__(68547);var _Layout=__webpack_require__(78862);var _getTrad=_interopRequireDefault(__webpack_require__(11236));var EmailHeader=function EmailHeader(){var _useIntl=(0,_reactIntl.useIntl)(),formatMessage=_useIntl.formatMessage;return/*#__PURE__*/_react["default"].createElement(_react["default"].Fragment,null,/*#__PURE__*/_react["default"].createElement(_helperPlugin.SettingsPageTitle,{name:formatMessage({id:(0,_getTrad["default"])('Settings.email.plugin.title'),defaultMessage:'Email settings'})}),/*#__PURE__*/_react["default"].createElement(_Layout.HeaderLayout,{id:"title",title:formatMessage({id:(0,_getTrad["default"])('Settings.email.plugin.title'),defaultMessage:'Email settings'}),subtitle:formatMessage({id:(0,_getTrad["default"])('Settings.email.plugin.subTitle'),defaultMessage:'Test the settings for the email plugin'})}));};var _default=EmailHeader;exports.default=_default;

/***/ }),

/***/ 30996:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);var _typeof=__webpack_require__(50008);Object.defineProperty(exports, "__esModule", ({value:true}));exports.default=void 0;var _regenerator=_interopRequireDefault(__webpack_require__(87757));var _asyncToGenerator2=_interopRequireDefault(__webpack_require__(48926));var _slicedToArray2=_interopRequireDefault(__webpack_require__(63038));var _react=_interopRequireWildcard(__webpack_require__(67294));var _reactIntl=__webpack_require__(97132);var _lodash=__webpack_require__(96486);var _helperPlugin=__webpack_require__(68547);var _Main=__webpack_require__(62031);var _Layout=__webpack_require__(78862);var _Stack=__webpack_require__(9008);var _Box=__webpack_require__(5493);var _Grid=__webpack_require__(34626);var _Typography=__webpack_require__(49425);var _TextInput=__webpack_require__(55967);var _Button=__webpack_require__(19408);var _LiveRegions=__webpack_require__(84686);var _Envelop=_interopRequireDefault(__webpack_require__(78086));var _Configuration=_interopRequireDefault(__webpack_require__(39338));var _schema=_interopRequireDefault(__webpack_require__(41130));var _permissions=_interopRequireDefault(__webpack_require__(71546));var _api=__webpack_require__(25143);var _EmailHeader=_interopRequireDefault(__webpack_require__(58711));var _getTrad=_interopRequireDefault(__webpack_require__(11236));function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap();var cacheNodeInterop=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj;}if(obj===null||_typeof(obj)!=="object"&&typeof obj!=="function"){return{"default":obj};}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj["default"]=obj;if(cache){cache.set(obj,newObj);}return newObj;}var ProtectedSettingsPage=function ProtectedSettingsPage(){return/*#__PURE__*/_react["default"].createElement(_helperPlugin.CheckPagePermissions,{permissions:_permissions["default"].settings},/*#__PURE__*/_react["default"].createElement(SettingsPage,null));};var SettingsPage=function SettingsPage(){var _formErrors$email,_formErrors$email2;var toggleNotification=(0,_helperPlugin.useNotification)();var _useIntl=(0,_reactIntl.useIntl)(),formatMessage=_useIntl.formatMessage;var _useOverlayBlocker=(0,_helperPlugin.useOverlayBlocker)(),lockApp=_useOverlayBlocker.lockApp,unlockApp=_useOverlayBlocker.unlockApp;var _useNotifyAT=(0,_LiveRegions.useNotifyAT)(),notifyStatus=_useNotifyAT.notifyStatus;(0,_helperPlugin.useFocusWhenNavigate)();var _useState=(0,_react.useState)({}),_useState2=(0,_slicedToArray2["default"])(_useState,2),formErrors=_useState2[0],setFormErrors=_useState2[1];var _useState3=(0,_react.useState)(false),_useState4=(0,_slicedToArray2["default"])(_useState3,2),isLoading=_useState4[0],setIsLoading=_useState4[1];var _useState5=(0,_react.useState)(false),_useState6=(0,_slicedToArray2["default"])(_useState5,2),isSubmitting=_useState6[0],setIsSubmitting=_useState6[1];var _useState7=(0,_react.useState)(''),_useState8=(0,_slicedToArray2["default"])(_useState7,2),testAddress=_useState8[0],setTestAddress=_useState8[1];var _useState9=(0,_react.useState)({provider:'',settings:{defaultFrom:'',defaultReplyTo:'',testAddress:''}}),_useState10=(0,_slicedToArray2["default"])(_useState9,2),config=_useState10[0],setConfig=_useState10[1];(0,_react.useEffect)(function(){setIsLoading(true);(0,_api.fetchEmailSettings)().then(function(config){notifyStatus(formatMessage({id:(0,_getTrad["default"])('Settings.email.plugin.notification.data.loaded'),defaultMessage:'Email settings data has been loaded'}));setConfig(config);var testAddressFound=(0,_lodash.get)(config,'settings.testAddress');if(testAddressFound){setTestAddress(testAddressFound);}})["catch"](function(){return toggleNotification({type:'warning',message:formatMessage({id:(0,_getTrad["default"])('Settings.email.plugin.notification.config.error'),defaultMessage:'Failed to retrieve the email config'})});})["finally"](function(){return setIsLoading(false);});},[formatMessage,toggleNotification,notifyStatus]);(0,_react.useEffect)(function(){if(formErrors.email){var input=document.querySelector('#test-address-input');input.focus();}},[formErrors]);var handleChange=function handleChange(e){setTestAddress(function(){return e.target.value;});};var handleSubmit=/*#__PURE__*/function(){var _ref=(0,_asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee(event){return _regenerator["default"].wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:event.preventDefault();_context.prev=1;_context.next=4;return _schema["default"].validate({email:testAddress},{abortEarly:false});case 4:setIsSubmitting(true);lockApp();(0,_api.postEmailTest)({to:testAddress}).then(function(){toggleNotification({type:'success',message:formatMessage({id:(0,_getTrad["default"])('Settings.email.plugin.notification.test.success'),defaultMessage:'Email test succeeded, check the {to} mailbox'},{to:testAddress})});})["catch"](function(){toggleNotification({type:'warning',message:formatMessage({id:(0,_getTrad["default"])('Settings.email.plugin.notification.test.error'),defaultMessage:'Failed to send a test mail to {to}'},{to:testAddress})});})["finally"](function(){setIsSubmitting(false);unlockApp();});_context.next=12;break;case 9:_context.prev=9;_context.t0=_context["catch"](1);setFormErrors((0,_helperPlugin.getYupInnerErrors)(_context.t0));case 12:case"end":return _context.stop();}}},_callee,null,[[1,9]]);}));return function handleSubmit(_x){return _ref.apply(this,arguments);};}();if(isLoading){return/*#__PURE__*/_react["default"].createElement(_Main.Main,{labelledBy:"title","aria-busy":"true"},/*#__PURE__*/_react["default"].createElement(_EmailHeader["default"],null),/*#__PURE__*/_react["default"].createElement(_Layout.ContentLayout,null,/*#__PURE__*/_react["default"].createElement(_helperPlugin.LoadingIndicatorPage,null)));}return/*#__PURE__*/_react["default"].createElement(_Main.Main,{labelledBy:"title","aria-busy":isSubmitting},/*#__PURE__*/_react["default"].createElement(_EmailHeader["default"],null),/*#__PURE__*/_react["default"].createElement(_Layout.ContentLayout,null,/*#__PURE__*/_react["default"].createElement("form",{onSubmit:handleSubmit},/*#__PURE__*/_react["default"].createElement(_Stack.Stack,{size:7},/*#__PURE__*/_react["default"].createElement(_Box.Box,{background:"neutral0",hasRadius:true,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},/*#__PURE__*/_react["default"].createElement(_Configuration["default"],{config:config})),/*#__PURE__*/_react["default"].createElement(_Box.Box,{background:"neutral0",hasRadius:true,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},/*#__PURE__*/_react["default"].createElement(_Stack.Stack,{size:4},/*#__PURE__*/_react["default"].createElement(_Typography.Typography,{variant:"delta",as:"h2"},formatMessage({id:(0,_getTrad["default"])('Settings.email.plugin.title.test'),defaultMessage:'Send a test mail'})),/*#__PURE__*/_react["default"].createElement(_Grid.Grid,{gap:5,alignItems:"end"},/*#__PURE__*/_react["default"].createElement(_Grid.GridItem,{col:6,s:12},/*#__PURE__*/_react["default"].createElement(_TextInput.TextInput,{id:"test-address-input",name:"test-address",onChange:handleChange,label:formatMessage({id:(0,_getTrad["default"])('Settings.email.plugin.label.testAddress'),defaultMessage:'Test delivery email address'}),value:testAddress,error:((_formErrors$email=formErrors.email)===null||_formErrors$email===void 0?void 0:_formErrors$email.id)&&formatMessage({id:(0,_getTrad["default"])("".concat((_formErrors$email2=formErrors.email)===null||_formErrors$email2===void 0?void 0:_formErrors$email2.id)),defaultMessage:'This is an invalid email'}),placeholder:formatMessage({id:'Settings.email.plugin.placeholder.testAddress',defaultMessage:'ex: developer@example.com'})})),/*#__PURE__*/_react["default"].createElement(_Grid.GridItem,{col:7,s:12},/*#__PURE__*/_react["default"].createElement(_Button.Button,{loading:isSubmitting,type:"submit",startIcon:/*#__PURE__*/_react["default"].createElement(_Envelop["default"],null)},"Test email")))))))));};var _default=ProtectedSettingsPage;exports.default=_default;

/***/ }),

/***/ 25143:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));exports.postEmailTest=exports.fetchEmailSettings=void 0;var _regenerator=_interopRequireDefault(__webpack_require__(87757));var _asyncToGenerator2=_interopRequireDefault(__webpack_require__(48926));var _utils=__webpack_require__(35755);var fetchEmailSettings=/*#__PURE__*/function(){var _ref=(0,_asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee(){var _yield$axiosInstance$,data;return _regenerator["default"].wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return _utils.axiosInstance.get('/email/settings');case 2:_yield$axiosInstance$=_context.sent;data=_yield$axiosInstance$.data;return _context.abrupt("return",data.config);case 5:case"end":return _context.stop();}}},_callee);}));return function fetchEmailSettings(){return _ref.apply(this,arguments);};}();exports.fetchEmailSettings=fetchEmailSettings;var postEmailTest=/*#__PURE__*/function(){var _ref2=(0,_asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee2(body){return _regenerator["default"].wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_context2.next=2;return _utils.axiosInstance.post('/email/test',body);case 2:case"end":return _context2.stop();}}},_callee2);}));return function postEmailTest(_x){return _ref2.apply(this,arguments);};}();exports.postEmailTest=postEmailTest;

/***/ }),

/***/ 41130:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _typeof=__webpack_require__(50008);Object.defineProperty(exports, "__esModule", ({value:true}));exports.default=void 0;var yup=_interopRequireWildcard(__webpack_require__(53209));var _helperPlugin=__webpack_require__(68547);function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap();var cacheNodeInterop=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj;}if(obj===null||_typeof(obj)!=="object"&&typeof obj!=="function"){return{"default":obj};}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj["default"]=obj;if(cache){cache.set(obj,newObj);}return newObj;}var schema=yup.object().shape({email:yup.string().email(_helperPlugin.translatedErrors.email).required(_helperPlugin.translatedErrors.required)});var _default=schema;exports.default=_default;

/***/ })

}]);