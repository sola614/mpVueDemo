require("common/manifest.js");
require("common/vendor.js");
global.webpackJsonp([4],{

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(44);



__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.productionTip = false;
__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */].mpType = 'app';

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */]);
app.$mount();

var _require = __webpack_require__(47),
    $Toast = _require.$Toast;

__WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$Toast = $Toast;
// 利用flyio
// var Fly = require('flyio/dist/npm/wx');
// var fly = new Fly();
// Vue.prototype.$http = fly; // 将fly实例挂在vue原型上
// 利用微信自带方法请求

var _require2 = __webpack_require__(68),
    myhttp = _require2.myhttp;

__WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$http = myhttp;

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(46);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(45)
}
var normalizeComponent = __webpack_require__(6)
/* script */

/* template */
var __vue_template__ = null
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\App.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7ca92acd", Component.options)
  } else {
    hotAPI.reload("data-v-7ca92acd", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 45:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/* harmony default export */ __webpack_exports__["a"] = ({
  created: function created() {
    // 调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || [];
    logs.unshift(Date.now());
    wx.setStorageSync('logs', logs);

    console.log('app created and cache logs by setStorageSync');
  }
});

/***/ }),

/***/ 47:
/***/ (function(module, exports) {

function getCtx (selector) {
    const pages = getCurrentPages();
    const ctx = pages[pages.length - 1];

    const componentCtx = ctx.selectComponent(selector);

    if (!componentCtx) {
        console.error('无法找到对应的组件，请按文档说明使用组件');
        return null;
    }
    return componentCtx;
}

function Toast(options) {
    const { selector = '#toast' } = options;
    const ctx = getCtx(selector);

    ctx.handleShow(options);
}

Toast.hide = function (selector = '#toast') {
    const ctx = getCtx(selector);

    ctx.handleHide();
};

function Message(options) {
    const { selector = '#message' } = options;
    const ctx = getCtx(selector);

    ctx.handleShow(options);
}

module.exports = {
    $Toast: Toast,
    $Message: Message
};

/***/ })

},[42]);
//# sourceMappingURL=app.js.map