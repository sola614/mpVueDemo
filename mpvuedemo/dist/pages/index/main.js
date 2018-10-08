require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([3],{

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(57);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_template_compiler_index_id_data_v_5eca2e54_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(63);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(58)
}
var normalizeComponent = __webpack_require__(6)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5eca2e54"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_template_compiler_index_id_data_v_5eca2e54_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\index\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5eca2e54", Component.options)
  } else {
    hotAPI.reload("data-v-5eca2e54", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 58:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_card__ = __webpack_require__(25);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      motto: 'Hello World',
      userInfo: {},
      bannerList: [],
      loading: true
    };
  },


  components: {
    card: __WEBPACK_IMPORTED_MODULE_0__components_card__["a" /* default */]
  },
  // computed: {
  //   bannerList () {
  //     return this.listData;
  //   }
  // },

  methods: {
    bindViewTap: function bindViewTap() {
      var url = '../logs/main';
      wx.navigateTo({ url: url });
    },
    getUserInfo: function getUserInfo() {
      var _this = this;

      // 调用登录接口
      wx.login({
        success: function success() {
          wx.getUserInfo({
            success: function success(res) {
              _this.userInfo = res.userInfo;
            }
          });
        }
      });
      // this.$http.post(`https://test.allchips.com/website/api/home/getAdBannerList`, { adType: 10 }).then((response) => {
      //   // 输出请求数据
      //   console.log(response.data)
      //   let res = response.data;
      //   if (res.code === 0) {
      //     this.bannerList = res.data;
      //     setTimeout(() => {
      //       this.loading = false;
      //     }, 1000)
      //   }
      // }).catch(err => {
      //   console.log(err.status, err.message)
      // })
      this.$http({
        url: 'https://test.allchips.com/website/api/home/getAdBannerList',
        data: { adType: 10 },
        methods: 'POST'
      }).then(function (response) {
        console.log('success----' + response);
        var res = response.data;
        if (res.code === 0) {
          _this.bannerList = res.data;
          setTimeout(function () {
            _this.loading = false;
          }, 1000);
        }
      }).catch(function (err) {
        console.log('err----' + err);
      });
    },
    clickHandle: function clickHandle(msg, ev) {
      console.log('clickHandle:', msg, ev);
    },
    handleClick: function handleClick() {
      console.log('点击按钮');
    },
    bindDateChange: function bindDateChange() {
      console.log(2321);
    },
    handleToast: function handleToast() {
      // console.log(111111);
      this.$Toast({
        content: '这是文本提示'
      });
      // wx.showToast('tishi')
    }
  },

  created: function created() {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo();
  }
});

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (!_vm.loading) ? _c('div', {
    staticClass: "container",
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": function($event) {
        _vm.clickHandle('test click', $event)
      }
    }
  }, [_c('div', {
    staticClass: "userinfo",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.bindViewTap
    }
  }, [(_vm.userInfo.avatarUrl) ? _c('img', {
    staticClass: "userinfo-avatar",
    attrs: {
      "src": _vm.userInfo.avatarUrl,
      "background-size": "cover"
    }
  }) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "userinfo-nickname"
  }, [_c('card', {
    attrs: {
      "text": _vm.userInfo.nickName,
      "mpcomid": '0'
    }
  })], 1)]), _vm._v(" "), _c('i-panel', {
    attrs: {
      "title": "标题",
      "mpcomid": '6'
    }
  }, [_c('i-cell-group', {
    attrs: {
      "mpcomid": '5'
    }
  }, [_c('i-cell', {
    attrs: {
      "title": "只显示箭头",
      "is-link": "",
      "mpcomid": '1'
    }
  }), _vm._v(" "), _c('i-cell', {
    attrs: {
      "title": "跳转到首页",
      "is-link": "",
      "url": "/pages/counter/main",
      "mpcomid": '2'
    }
  }), _vm._v(" "), _c('i-cell', {
    attrs: {
      "title": "只有 footer 点击有效",
      "is-link": "",
      "url": "/pages/dashboard/index",
      "only-tap-footer": "",
      "mpcomid": '3'
    }
  }), _vm._v(" "), _c('i-cell', {
    attrs: {
      "title": "开关",
      "mpcomid": '4'
    }
  }, [_c('switch', {
    attrs: {
      "checked": ""
    },
    slot: "footer"
  })])], 1)], 1), _vm._v(" "), _c('i-panel', {
    attrs: {
      "mpcomid": '8'
    }
  }, [_c('i-card', {
    attrs: {
      "title": "卡片标题",
      "extra": "额外内容",
      "thumb": "https://i.loli.net/2017/08/21/599a521472424.jpg",
      "mpcomid": '7'
    }
  }, [_c('view', {
    slot: "content"
  }, [_vm._v("内容不错")]), _vm._v(" "), _c('view', {
    slot: "footer"
  }, [_vm._v("尾部内容")])])], 1), _vm._v(" "), _c('i-panel', {
    attrs: {
      "mpcomid": '9'
    }
  }, [_c('ul', _vm._l((_vm.bannerList), function(item, index) {
    return _c('li', {
      key: index
    }, [_c('img', {
      attrs: {
        "src": 'https://img.allchips.com' + item.picUrl,
        "alt": ""
      }
    })])
  }))], 1), _vm._v(" "), _c('i-panel', {
    attrs: {
      "mpcomid": '12'
    }
  }, [_c('i-button', {
    attrs: {
      "type": "ghost",
      "eventid": '1',
      "mpcomid": '10'
    },
    on: {
      "click": _vm.handleToast
    }
  }, [_vm._v("只显示文本")]), _vm._v(" "), _c('i-toast', {
    attrs: {
      "id": "toast",
      "mpcomid": '11'
    }
  })], 1)], 1) : _c('div', [_c('i-spin', {
    attrs: {
      "size": "large",
      "fix": "",
      "mpcomid": '13'
    }
  })], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-5eca2e54", esExports)
  }
}

/***/ })

},[56]);
//# sourceMappingURL=main.js.map