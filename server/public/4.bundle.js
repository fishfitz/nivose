webpackJsonp([4],{

/***/ 105:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['value'],
    data: function data() {
        return {
            preview: null
        };
    },

    watch: {
        value: function value(file) {
            var _this = this;

            if (file) {
                var reader = new window.FileReader();
                reader.onload = function (e) {
                    return _this.preview = e.target.result;
                };
                reader.readAsDataURL(file);
            } else {
                this.preview = null;
            }
        }
    }
});

/***/ }),

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(89)(undefined);
// imports


// module
exports.push([module.i, "\nlabel[data-v-fe5c7384] {\n  display: block;\n  position: relative;\n  overflow: hidden;\n  height: 400px;\n  max-height: 50vh;\n  color: #b5b5b5;\n  text-align: center;\n  border: 1px dashed #b5b5b5;\n  border-radius: 3px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  cursor: pointer;\n  transition: border-color 0.3s ease-out, color 0.3s ease-out;\n}\nlabel[data-v-fe5c7384]:hover {\n    color: #4a4a4a;\n    border-color: #4a4a4a;\n}\nlabel div[data-v-fe5c7384] {\n    height: 100%;\n}\ninput[data-v-fe5c7384] {\n  position: absolute;\n  width: 0;\n  visibility: hidden;\n}\nimg[data-v-fe5c7384] {\n  object-fit: contain;\n  height: 100%;\n  width: auto;\n}\n", ""]);

// exports


/***/ }),

/***/ 124:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(116);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(90)("d0549688", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-fe5c7384\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./FileInput.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-fe5c7384\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./FileInput.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 129:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(124)
}
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(105),
  /* template */
  __webpack_require__(140),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-fe5c7384",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "C:\\Users\\Cobalt\\Documents\\PersonnalCode\\nivose\\client\\components\\forms\\FileInput.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] FileInput.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-fe5c7384", Component.options)
  } else {
    hotAPI.reload("data-v-fe5c7384", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', {
    staticClass: "level"
  }, [_c('div', {
    staticClass: "level-item"
  }, [(!_vm.preview) ? [_vm._v("\n            Cliquer ou déposer une image ici\n        ")] : _c('img', {
    staticClass: "image",
    attrs: {
      "src": _vm.preview
    }
  }), _vm._v(" "), _c('input', {
    attrs: {
      "type": "file",
      "accept": "image/*"
    },
    on: {
      "change": function($event) {
        _vm.$emit('input', $event.target.files[0])
      }
    }
  })], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-fe5c7384", module.exports)
  }
}

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Modal_vue__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Modal_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Modal_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__forms_FileInput_vue__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__forms_FileInput_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__forms_FileInput_vue__);
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
    components: {
        Modal: __WEBPACK_IMPORTED_MODULE_0__Modal_vue___default.a,
        FileInput: __WEBPACK_IMPORTED_MODULE_1__forms_FileInput_vue___default.a
    },
    props: ['value'],
    data: function data() {
        return {
            avatar: null,
            loading: false,
            error: null,
            progress: 0
        };
    },

    methods: {
        changeAvatar: function changeAvatar(file) {
            var _this = this;

            if (Array.isArray(file)) file = file[0];
            if (!file) return;
            this.avatar = file;
            var data = new window.FormData();
            data.append('avatar', file);
            this.loading = true;
            this.$store.dispatch('users/MODIFY_USER', {
                data: data,
                slug: this.$route.params.userID,
                config: {
                    onUploadProgress: function onUploadProgress(progressEvent) {
                        console.log(progressEvent);
                        _this.progress = Math.round(progressEvent.loaded * 100 / progressEvent.total);
                    }
                }
            }).then(function () {
                return _this.$emit('input', false);
            }).catch(function (err) {
                return _this.error = err;
            }).then(function () {
                return _this.loading = false;
            });
        }
    }
});

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_modals_EditAvatar_vue__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_modals_EditAvatar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_modals_EditAvatar_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_awesome_icons_user_circle__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_awesome_icons_check__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_awesome_icons_pencil__ = __webpack_require__(162);
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






/* harmony default export */ __webpack_exports__["default"] = ({
    components: {
        EditAvatar: __WEBPACK_IMPORTED_MODULE_0__components_modals_EditAvatar_vue___default.a
    },
    data: function data() {
        return {
            defaultDescription: '<span>Cet utilisateur n\'a pas rédigé de description.</span>',
            changeAvatar: false,
            editDescription: false,
            loading: false,
            error: null
        };
    },

    computed: {
        isSelf: function isSelf() {
            return this.$store.state.auth.isAuth && this.$store.state.auth.activeUser.slug === this.$route.params.userID;
        },
        user: function user() {
            return this.$store.state.users.users[this.$route.params.userID];
        },
        registered_at: function registered_at() {
            return new Date(this.user.registered_at).toLocaleDateString('en-GB');
        }
    },
    methods: {
        commitDescription: function commitDescription(value) {
            this.$store.commit('users/SET_DESCRIPTION', {
                slug: this.user.slug,
                description: value
            });
        },
        modifyDescription: function modifyDescription() {
            var _this = this;

            if (!this.editDescription) {
                this.editDescription = true;
            } else {
                this.loading = true;
                this.$store.dispatch('users/MODIFY_USER', {
                    data: {
                        description: this.user.description.md
                    },
                    slug: this.user.slug
                }).then(function () {
                    _this.editDescription = false;
                    _this.error = null;
                }).catch(function (err) {
                    return _this.error = err;
                }).then(function () {
                    return _this.loading = false;
                });
            }
        }
    },
    asyncData: function asyncData(_ref) {
        var store = _ref.store,
            userID = _ref.route.params.userID;

        return store.dispatch('users/FETCH_USER', { slug: userID });
    }
});

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(89)(undefined);
// imports


// module
exports.push([module.i, "\nfigure[data-v-c4dd1342] {\n  display: inline-block;\n  border-radius: 5px;\n  overflow: hidden;\n}\n.title.is-2[data-v-c4dd1342] {\n  margin-bottom: 25px;\n}\n.hover-avatar[data-v-c4dd1342] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  box-shadow: none;\n  border: none;\n  opacity: 0;\n  transition: opacity 0.3s ease-out;\n}\n.hover-avatar[data-v-c4dd1342]:hover {\n    opacity: 0.75;\n}\ntextarea[data-v-c4dd1342] {\n  box-sizing: border-box;\n  padding: 1.25em 1.5em;\n  width: 100%;\n  height: 200px;\n}\n", ""]);

// exports


/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(154);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(90)("0ed83a92", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-c4dd1342\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./User.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-c4dd1342\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./User.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Icon_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Icon_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Icon_vue__);


__WEBPACK_IMPORTED_MODULE_0__components_Icon_vue___default.a.register({"check":{"width":1792,"height":1792,"paths":[{"d":"M1671 566q0 40-28 68l-724 724-136 136q-28 28-68 28t-68-28l-136-136-362-362q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 295 656-657q28-28 68-28t68 28l136 136q28 28 28 68z"}]}})


/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Icon_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Icon_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Icon_vue__);


__WEBPACK_IMPORTED_MODULE_0__components_Icon_vue___default.a.register({"pencil":{"width":1536,"height":1792,"paths":[{"d":"M363 1536l91-91-235-235-91 91v107h128v128h107zM886 608q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zM832 416l416 416-832 832h-416v-416zM1515 512q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"}]}})


/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Icon_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Icon_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Icon_vue__);


__WEBPACK_IMPORTED_MODULE_0__components_Icon_vue___default.a.register({"user-circle":{"width":1792,"height":1792,"paths":[{"d":"M1523 1339q-22-155-87.5-257.5t-184.5-118.5q-67 74-159.5 115.5t-195.5 41.5-195.5-41.5-159.5-115.5q-119 16-184.5 118.5t-87.5 257.5q106 150 271 237.5t356 87.5 356-87.5 271-237.5zM1280 640q0-159-112.5-271.5t-271.5-112.5-271.5 112.5-112.5 271.5 112.5 271.5 271.5 112.5 271.5-112.5 112.5-271.5zM1792 896q0 182-71 347.5t-190.5 286-285.5 191.5-349 71q-182 0-348-71t-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"}]}})


/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(144),
  /* template */
  __webpack_require__(173),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "C:\\Users\\Cobalt\\Documents\\PersonnalCode\\nivose\\client\\components\\modals\\EditAvatar.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] EditAvatar.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-76d74c08", Component.options)
  } else {
    hotAPI.reload("data-v-76d74c08", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('modal', {
    attrs: {
      "show": _vm.value
    },
    on: {
      "close": function($event) {
        _vm.$emit('input', false)
      }
    }
  }, [_c('h1', {
    staticClass: "modal-card-title",
    slot: "header"
  }, [_vm._v("\n        Changer son avatar\n    ")]), _vm._v(" "), _c('file-input', {
    attrs: {
      "value": _vm.avatar
    },
    on: {
      "input": _vm.changeAvatar
    }
  }), _vm._v(" "), _c('div', {
    slot: "footer"
  }, [(_vm.loading) ? _c('progress', {
    staticClass: "progress",
    attrs: {
      "value": _vm.progress,
      "max": "100"
    }
  }, [_vm._v("\n            " + _vm._s(_vm.progress) + "%\n        ")]) : (_vm.error) ? _c('div', {
    staticClass: "notification is-danger"
  }, [_vm._v("\n            Quelque-chose s'est mal passé. Réessayez.\n        ")]) : _vm._e()])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-76d74c08", module.exports)
  }
}

/***/ }),

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "section"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "has-text-centered"
  }, [_c('h1', {
    staticClass: "title is-2"
  }, [_c('aw-icon', {
    attrs: {
      "name": "user-circle",
      "scale": "1.8"
    }
  }), _vm._v("\n                " + _vm._s(_vm.user.name) + "\n            ")], 1), _vm._v(" "), _c('figure', {
    staticClass: "image is-128x128"
  }, [(_vm.isSelf) ? [_c('edit-avatar', {
    model: {
      value: (_vm.changeAvatar),
      callback: function($$v) {
        _vm.changeAvatar = $$v
      },
      expression: "changeAvatar"
    }
  }), _vm._v(" "), _c('button', {
    staticClass: "button is-white hover-avatar",
    on: {
      "click": function($event) {
        _vm.changeAvatar = true
      }
    }
  }, [_c('aw-icon', {
    attrs: {
      "name": "pencil",
      "scale": "2"
    }
  })], 1)] : _vm._e(), _vm._v(" "), _c('img', {
    attrs: {
      "src": _vm.user.avatar || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTctfQYPcfoA_S5ZxyOYRD0kUCqkva4U5jHB791wtr9qPTe2WS44A'
    }
  })], 2)]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('div', {
    staticClass: "level"
  }, [_c('div', {
    staticClass: "level-item has-text-centered"
  }, [_c('div', [_c('p', {
    staticClass: "heading"
  }, [_vm._v(" Inscrit le ")]), _vm._v(" "), _c('p', {
    staticClass: "title"
  }, [_vm._v(" " + _vm._s(_vm.registered_at) + " ")])])]), _vm._v(" "), _c('div', {
    staticClass: "level-item has-text-centered"
  }, [_c('div', [_c('p', {
    staticClass: "heading"
  }, [_vm._v(" Images postées ")]), _vm._v(" "), _c('p', {
    staticClass: "title"
  }, [_vm._v(" " + _vm._s(_vm.user.posts) + " ")])])]), _vm._v(" "), _c('div', {
    staticClass: "level-item has-text-centered"
  }, [_c('div', [_c('p', {
    staticClass: "heading"
  }, [_vm._v(" Favoris ")]), _vm._v(" "), _c('p', {
    staticClass: "title"
  }, [_vm._v(" " + _vm._s(_vm.user.favorites) + " ")])])])]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h1', {
    staticClass: "title is-3"
  }, [_vm._v("\n            Qui suis-je ?\n            "), (_vm.isSelf) ? _c('button', {
    staticClass: "button is-white",
    class: {
      'is-loading': _vm.loading
    },
    on: {
      "click": _vm.modifyDescription
    }
  }, [_c('span', {
    staticClass: "icon"
  }, [_c('aw-icon', {
    attrs: {
      "name": _vm.editDescription ? 'check' : 'pencil',
      "scale": "2"
    }
  })], 1)]) : _vm._e()]), _vm._v(" "), (_vm.editDescription) ? _c('div', {
    class: {
      'is-danger': _vm.error
    }
  }, [_c('textarea', {
    domProps: {
      "value": _vm.user.description.md
    },
    on: {
      "input": function($event) {
        _vm.commitDescription($event.target.value)
      }
    }
  })]) : _c('div', {
    staticClass: "content"
  }, [_c('blockquote', {
    domProps: {
      "innerHTML": _vm._s(_vm.user.description.html || _vm.defaultDescription)
    }
  })])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-c4dd1342", module.exports)
  }
}

/***/ }),

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(159)
}
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(150),
  /* template */
  __webpack_require__(174),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-c4dd1342",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "C:\\Users\\Cobalt\\Documents\\PersonnalCode\\nivose\\client\\pages\\User.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] User.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c4dd1342", Component.options)
  } else {
    hotAPI.reload("data-v-c4dd1342", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});