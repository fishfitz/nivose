webpackJsonp([5],{

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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


/* harmony default export */ __webpack_exports__["default"] = ({
    computed: {
        isAuth() {
            return this.$store.state.auth.isAuth;
        },
        activeUser() {
            return this.$store.state.auth.activeUser;
        }
    }
});

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, "\n.add-button[data-v-37cb96f4] {\n  margin-top: 8px;\n  margin-bottom: 8px;\n}\n", ""]);

// exports


/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.isAuth) ? _c('div', {
    staticClass: "add-button container has-text-centered"
  }, [_c('router-link', {
    staticClass: "button is-primary is-large",
    attrs: {
      "to": "/post"
    }
  }, [_vm._v("\n            Ajouter une image\n        ")])], 1) : _vm._e(), _vm._v(" "), _vm._m(0)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "hero is-medium is-bold is-light"
  }, [_c('div', {
    staticClass: "hero-body"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('h1', {
    staticClass: "title"
  }, [_vm._v("\n                    Chiboard\n                ")]), _vm._v(" "), _c('h2', {
    staticClass: "subtitle"
  }, [_vm._v("\n                    Ici du contenu sympa\n                ")])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-37cb96f4", module.exports)
  }
}

/***/ }),

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(156);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("2957fd9d", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-37cb96f4\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./FrontPage.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-37cb96f4\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./FrontPage.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 95:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(176)
}
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(148),
  /* template */
  __webpack_require__(170),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-37cb96f4",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "C:\\Users\\Cobalt\\Documents\\PersonnalCode\\nivose\\client\\pages\\FrontPage.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] FrontPage.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-37cb96f4", Component.options)
  } else {
    hotAPI.reload("data-v-37cb96f4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});