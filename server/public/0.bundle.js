webpackJsonp([0],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Icon_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Icon_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Icon_vue__);


__WEBPACK_IMPORTED_MODULE_0__components_Icon_vue___default.a.register({"spinner":{"width":1792,"height":1792,"paths":[{"d":"M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zM1024 1600q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zM320 896q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zM1522 1394q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zM558 398q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zM1728 896q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zM1088 192q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zM1618 398q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z"}]}})


/***/ }),

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (date) {
    return new Date(date).toLocaleDateString('en-GB');
};

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__libs_formatDate__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__libs_formatDate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__libs_formatDate__);
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
    props: ['postID', 'comment'],
    computed: {
        canEdit() {
            return this.$store.state.auth.activeUser.slug === this.comment.author.slug || this.$store.state.auth.isAdmin;
        }
    },
    filters: {
        formatDate: __WEBPACK_IMPORTED_MODULE_0__libs_formatDate___default.a
    },
    methods: {
        removeComment() {
            this.$store.dispatch('posts/DELETE_COMMENT', {
                postID: this.postID,
                commentID: this.comment._id
            });
        }
    }
});

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__forms_PostComment_vue__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__forms_PostComment_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__forms_PostComment_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Comment_vue__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Comment_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Comment_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__libs_formatDate__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__libs_formatDate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__libs_formatDate__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_awesome_icons_hashtag__ = __webpack_require__(22);
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
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["default"] = ({
    components: {
        PostComment: __WEBPACK_IMPORTED_MODULE_0__forms_PostComment_vue___default.a,
        Comment: __WEBPACK_IMPORTED_MODULE_1__Comment_vue___default.a
    },
    props: ['post', 'isAuth'],
    data() {
        return {
            showRemove: false
        };
    },
    computed: {
        canEdit() {
            return this.$store.state.auth.activeUser.slug === this.post.author.slug || this.$store.state.auth.isAdmin;
        }
    },
    filters: {
        formatDate: __WEBPACK_IMPORTED_MODULE_2__libs_formatDate___default.a
    },
    methods: {
        removePost() {
            this.$store.dispatch('posts/DELETE_POST', {
                postID: this.post.slug
            });
        }
    }
});

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_awesome_icons_spinner__ = __webpack_require__(101);
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['loading', 'block'],
    mounted() {
        window.addEventListener('scroll', this.listen);
        window.addEventListener('wheel', this.listen);
    },
    destroyed() {
        window.removeEventListener('scroll', this.listen);
        window.addEventListener('wheel', this.listen);
    },
    methods: {
        reachBottom() {
            return window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 10;
        },
        listen(event) {
            if (!this.loading && !this.block && this.reachBottom()) {
                this.$emit('reach');
            }
        }
    }
});

/***/ }),

/***/ 109:
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
    props: ['postID'],
    data() {
        return {
            loading: false,
            error: null,
            content: ''
        };
    },
    computed: {
        user() {
            return this.$store.state.auth.activeUser;
        }
    },
    methods: {
        postComment() {
            this.loading = true;
            this.error = null;
            this.$store.dispatch('posts/SUBMIT_COMMENT', {
                postID: this.postID,
                content: this.content
            }).then(() => this.content = '').catch(err => this.error = err).then(() => this.loading = false);
        }
    }
});

/***/ }),

/***/ 111:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['value']
});

/***/ }),

/***/ 114:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, "\n.is-48x48 img[data-v-28cf01af] {\n  border-radius: 3px;\n}\n", ""]);

// exports


/***/ }),

/***/ 115:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, "\n.modal-content[data-v-3416372e] {\n  max-height: none;\n  cursor: pointer;\n}\n.modal-content p[data-v-3416372e] {\n    text-align: center;\n}\n.modal-content p img[data-v-3416372e] {\n      display: inline-block;\n      width: auto;\n      height: auto;\n      max-height: 100%;\n}\n", ""]);

// exports


/***/ }),

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, "\n.media-left .image img[data-v-4822b66b] {\n  border-radius: 3px;\n}\n.box[data-v-4822b66b] {\n  margin-bottom: 30px;\n}\n.displayed-image[data-v-4822b66b] {\n  max-height: 500px;\n  width: auto;\n  cursor: pointer;\n}\n", ""]);

// exports


/***/ }),

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, "\n.media-left .image img[data-v-cdc35b62] {\n  border-radius: 3px;\n}\n", ""]);

// exports


/***/ }),

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(142)
  __webpack_require__(143)
}
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(104),
  /* template */
  __webpack_require__(135),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-cdc35b62",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "C:\\Users\\Cobalt\\Documents\\PersonnalCode\\nivose\\client\\components\\Comment.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Comment.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-cdc35b62", Component.options)
  } else {
    hotAPI.reload("data-v-cdc35b62", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(140)
}
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(105),
  /* template */
  __webpack_require__(133),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-4822b66b",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "C:\\Users\\Cobalt\\Documents\\PersonnalCode\\nivose\\client\\components\\PostLarge.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PostLarge.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4822b66b", Component.options)
  } else {
    hotAPI.reload("data-v-4822b66b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(106),
  /* template */
  __webpack_require__(129),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "C:\\Users\\Cobalt\\Documents\\PersonnalCode\\nivose\\client\\components\\ScrollBottom.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] ScrollBottom.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-149c7418", Component.options)
  } else {
    hotAPI.reload("data-v-149c7418", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(138)
}
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(109),
  /* template */
  __webpack_require__(131),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-28cf01af",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "C:\\Users\\Cobalt\\Documents\\PersonnalCode\\nivose\\client\\components\\forms\\PostComment.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PostComment.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-28cf01af", Component.options)
  } else {
    hotAPI.reload("data-v-28cf01af", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(139)
}
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(111),
  /* template */
  __webpack_require__(132),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-3416372e",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "C:\\Users\\Cobalt\\Documents\\PersonnalCode\\nivose\\client\\components\\modals\\ImageOverlay.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] ImageOverlay.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3416372e", Component.options)
  } else {
    hotAPI.reload("data-v-3416372e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 129:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "has-text-centered"
  }, [(_vm.loading) ? _c('aw-icon', {
    attrs: {
      "name": "spinner",
      "scale": "2",
      "spin": ""
    }
  }) : _vm._e()], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-149c7418", module.exports)
  }
}

/***/ }),

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('article', {
    staticClass: "media"
  }, [_c('figure', {
    staticClass: "media-left"
  }, [_c('p', {
    staticClass: "image is-48x48"
  }, [_c('img', {
    attrs: {
      "src": _vm.user.avatar
    }
  })])]), _vm._v(" "), _c('form', {
    staticClass: "media-content",
    on: {
      "submit": function($event) {
        $event.preventDefault();
        _vm.postComment($event)
      }
    }
  }, [_c('div', {
    staticClass: "field"
  }, [_c('p', {
    staticClass: "control"
  }, [_c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.content),
      expression: "content"
    }],
    staticClass: "textarea",
    attrs: {
      "placeholder": "Ajouter un commentaire"
    },
    domProps: {
      "value": (_vm.content)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.content = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "field"
  }, [_c('p', {
    staticClass: "control"
  }, [_c('button', {
    staticClass: "button",
    class: {
      'is-loading': _vm.loading
    },
    attrs: {
      "type": "submit",
      "disabled": !_vm.content
    }
  }, [_vm._v("\n                    Commenter\n                ")])]), (_vm.error) ? _c('div', {
    staticClass: "notification is-danger"
  }, [_vm._v("\n                    Quelque-chose s'est mal passé. Réessayez.\n                ")]) : _vm._e(), _vm._v(" "), _c('p')])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-28cf01af", module.exports)
  }
}

/***/ }),

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.value) ? _c('div', {
    staticClass: "modal is-active is-fullwidth",
    on: {
      "click": function($event) {
        _vm.$emit('input', null)
      }
    }
  }, [_c('div', {
    staticClass: "modal-background"
  }), _vm._v(" "), _c('div', {
    staticClass: "modal-content"
  }, [_c('p', {
    staticClass: "image selected-image"
  }, [_c('img', {
    attrs: {
      "src": _vm.value
    }
  })])])]) : _vm._e()
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3416372e", module.exports)
  }
}

/***/ }),

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "columns box"
  }, [_c('div', {
    staticClass: "column"
  }, [_c('img', {
    staticClass: "displayed-image",
    attrs: {
      "src": _vm.post.image
    },
    on: {
      "click": function($event) {
        _vm.$emit('select', _vm.post.image)
      }
    }
  }), _vm._v(" "), _c('div', _vm._l((_vm.post.tags), function(tag) {
    return _c('router-link', {
      key: tag.name,
      attrs: {
        "to": {
          name: 'tag',
          params: {
            tagID: tag.name
          }
        }
      }
    }, [_c('aw-icon', {
      attrs: {
        "name": "hashtag",
        "scale": "0.7"
      }
    }), _vm._v("\n                " + _vm._s(tag.name) + "\n            ")], 1)
  }))]), _vm._v(" "), _c('div', {
    staticClass: "column"
  }, [_c('article', {
    staticClass: "media"
  }, [_c('figure', {
    staticClass: "media-left"
  }, [_c('p', {
    staticClass: "image is-64x64"
  }, [_c('img', {
    attrs: {
      "src": _vm.post.author.avatar
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "media-content"
  }, [_c('div', {
    staticClass: "content"
  }, [_c('div', [_vm._v("\n                        Posté par :\n                        "), _c('router-link', {
    attrs: {
      "to": {
        name: 'user',
        params: {
          userID: _vm.post.author.slug
        }
      }
    }
  }, [_c('strong', [_vm._v("\n                                " + _vm._s(_vm.post.author.name) + "\n                            ")])]), _vm._v(" "), _c('br'), _vm._v(" "), _c('small', [_vm._v("\n                            " + _vm._s(_vm._f("formatDate")(_vm.post.posted_at)) + "\n                        ")]), _vm._v(" "), (_vm.post.description) ? _c('p', {
    staticClass: "content"
  }, [_c('span', {
    domProps: {
      "innerHTML": _vm._s(_vm.post.description.html)
    }
  })]) : _vm._e(), _vm._v(" "), (_vm.canEdit && !_vm.showRemove) ? _c('button', {
    staticClass: "delete delete-top",
    on: {
      "click": function($event) {
        _vm.showRemove = true
      }
    }
  }) : _vm._e(), _vm._v(" "), (_vm.showRemove) ? _c('div', {
    staticClass: "notification is-danger"
  }, [_vm._v("\n                            Supprimer cette image ?\n                            Cette action n'est "), _c('b', [_vm._v("pas")]), _vm._v(" réversible.\n                            "), _c('div', {
    staticClass: "has-text-right"
  }, [_c('button', {
    staticClass: "button is-small is-danger is-inverted",
    on: {
      "click": _vm.removePost
    }
  }, [_vm._v("\n                                    Confirmer\n                                ")]), _vm._v(" "), _c('button', {
    staticClass: "button is-small is-white",
    on: {
      "click": function($event) {
        _vm.showRemove = false
      }
    }
  }, [_vm._v("\n                                    Annuler\n                                ")])])]) : _vm._e()], 1)])])]), _vm._v(" "), _vm._l((_vm.post.comments), function(c) {
    return _c('comment', {
      key: c._id,
      attrs: {
        "comment": c,
        "postID": _vm.post.slug
      }
    })
  }), _vm._v(" "), (_vm.isAuth) ? _c('post-comment', {
    attrs: {
      "postID": _vm.post.slug
    }
  }) : _vm._e()], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4822b66b", module.exports)
  }
}

/***/ }),

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('article', {
    staticClass: "media"
  }, [_c('figure', {
    staticClass: "media-left"
  }, [_c('p', {
    staticClass: "image is-32x32"
  }, [_c('img', {
    attrs: {
      "src": _vm.comment.author.avatar
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "media-content"
  }, [_c('div', {
    staticClass: "content"
  }, [_c('router-link', {
    attrs: {
      "to": {
        name: 'user',
        params: {
          userID: _vm.comment.author.slug
        }
      }
    }
  }, [_c('strong', [_vm._v(" " + _vm._s(_vm.comment.author.name) + " ")])]), _vm._v(" "), _c('small', [_vm._v("\n                " + _vm._s(_vm._f("formatDate")(_vm.comment.posted_at)) + "\n            ")]), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_c('span', {
    domProps: {
      "innerHTML": _vm._s(_vm.comment.content.html.trim())
    }
  })]), _vm._v(" "), (_vm.canEdit) ? _c('button', {
    staticClass: "delete delete-top",
    on: {
      "click": _vm.removeComment
    }
  }) : _vm._e()], 1)])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-cdc35b62", module.exports)
  }
}

/***/ }),

/***/ 138:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(114);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("41565541", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-28cf01af\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PostComment.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-28cf01af\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PostComment.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(115);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("ccedd1e6", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3416372e\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ImageOverlay.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3416372e\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ImageOverlay.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(116);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("4d23fbf8", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4822b66b\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PostLarge.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4822b66b\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PostLarge.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(118);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("888dd46c", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-cdc35b62\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Comment.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-cdc35b62\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Comment.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(119);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("c56a18ae", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-cdc35b62\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./Comment.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-cdc35b62\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./Comment.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_debounce__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_debounce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_debounce__);
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['value'],
    mounted() {
        window.addEventListener('scroll', this.listen);
    },
    destroyed() {
        window.removeEventListener('scroll', this.listen);
    },
    methods: {
        listen: __WEBPACK_IMPORTED_MODULE_0_debounce___default()(function (event) {
            if (!this.$slots.default.length) return;
            const pos = document.body.scrollTop;
            const index = this.closestIndex(pos, this.$slots.default.map(e => e.elm.offsetTop));
            if (index !== this.value) {
                this.$emit('input', index);
            }
        }, 500),
        closestIndex(value, array) {
            let low = 0;
            let high = array.length - 1;
            while (low < high) {
                let mid = (low + high) / 2 | 0;
                let d1 = Math.abs(array[mid] - value);
                let d2 = Math.abs(array[mid + 1] - value);
                if (d2 <= d1) low = mid + 1;else high = mid;
            }
            return high;
        }
    }
});

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_awesome_icons_spinner__ = __webpack_require__(101);
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['loading', 'block'],
    data() {
        return {
            lastScroll: 0
        };
    },
    mounted() {
        window.addEventListener('scroll', this.listen);
        window.addEventListener('wheel', this.listen);
    },
    destroyed() {
        window.removeEventListener('scroll', this.listen);
        window.addEventListener('wheel', this.listen);
    },
    methods: {
        reachTop() {
            return !document.body.scrollTop;
        },
        listen(event) {
            if (this.loading) return;
            if (!this.block && this.reachTop()) {
                let top = false;
                if (event.deltaY < 0) {
                    top = true;
                } else if (!event.deltaY) {
                    if (this.lastScroll - document.body.scrollTop < 0) {
                        top = true;
                    }
                }
                if (top) this.$emit('reach');
            }
            if (!event.deltaY) {
                this.lastScroll = document.body.scrollTop;
            }
        }
    }
});

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_ScrollSpy_vue__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_ScrollSpy_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_ScrollSpy_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_ScrollTop_vue__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_ScrollTop_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_ScrollTop_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_ScrollBottom_vue__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_ScrollBottom_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_ScrollBottom_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_modals_ImageOverlay_vue__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_modals_ImageOverlay_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_modals_ImageOverlay_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_PostLarge_vue__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_PostLarge_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_PostLarge_vue__);
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
        ScrollSpy: __WEBPACK_IMPORTED_MODULE_0__components_ScrollSpy_vue___default.a,
        ScrollTop: __WEBPACK_IMPORTED_MODULE_1__components_ScrollTop_vue___default.a,
        ScrollBottom: __WEBPACK_IMPORTED_MODULE_2__components_ScrollBottom_vue___default.a,
        ImageOverlay: __WEBPACK_IMPORTED_MODULE_3__components_modals_ImageOverlay_vue___default.a,
        PostLarge: __WEBPACK_IMPORTED_MODULE_4__components_PostLarge_vue___default.a
    },
    data() {
        return {
            selectedImage: null,
            loadingTop: false,
            loadingBottom: false,
            topPost: 0
        };
    },
    computed: {
        isAuth() {
            return this.$store.state.auth.isAuth;
        },
        tag() {
            return this.$route.params.tagID;
        },
        posts() {
            return this.$store.state.posts.posts;
        },
        page() {
            return this.$route.params.page;
        },
        blockBottom() {
            return this.$store.state.posts.blockBottom;
        }
    },
    methods: {
        selectImage(image) {
            this.selectedImage = image;
        },
        findPost(index) {
            return this.$el.getElementsByClassName('post-large')[index];
        },
        loadBottom() {
            this.loadingBottom = true;
            return this.$store.dispatch('posts/SEARCH_POSTS', {
                tags: [{ name: this.tag, include: true }],
                reference: this.posts.length ? this.posts[this.posts.length - 1].posted_at : undefined,
                excludeID: this.posts.length ? this.posts[this.posts.length - 1].slug : undefined
            }).then(posts => {
                this.$nextTick(() => this.loadingBottom = false);
            });
        },
        loadTop() {
            this.loadingTop = true;
            const currentPost = this.findPost(0);
            return this.$store.dispatch('posts/SEARCH_POSTS', {
                tags: [{ name: this.tag, include: true }],
                reference: this.posts.length ? this.posts[0].posted_at : undefined,
                excludeID: this.posts.length ? this.posts[0].slug : undefined,
                after: false
            }).then(posts => {
                if (currentPost) currentPost.scrollIntoView();
                document.body.scrollTop -= 88;
                this.$nextTick(() => this.loadingTop = false);
            });
        }
    },
    watch: {
        topPost(index) {
            this.$router.replace({
                name: 'tag',
                params: { tagID: this.tag, reference: this.posts[index].posted_at }
            });
        }
    },
    mounted() {
        window.scrollTo(0, 0);
    },
    asyncData({ store, route: { params: { tagID, reference } } }) {
        return store.dispatch('posts/SEARCH_POSTS', {
            tags: [{ name: tagID, include: true }],
            replace: true,
            reference
        });
    }
});

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, "\n.scroll-top[data-v-efa87f94] {\n  position: absolute;\n  top: 55px;\n  left: 50%;\n  transform: translate(-50%, 0);\n}\n", ""]);

// exports


/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(145),
  /* template */
  __webpack_require__(166),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "C:\\Users\\Cobalt\\Documents\\PersonnalCode\\nivose\\client\\components\\ScrollSpy.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] ScrollSpy.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-04d3359f", Component.options)
  } else {
    hotAPI.reload("data-v-04d3359f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(146),
  /* template */
  __webpack_require__(169),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "C:\\Users\\Cobalt\\Documents\\PersonnalCode\\nivose\\client\\components\\ScrollTop.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] ScrollTop.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3785c4b8", Component.options)
  } else {
    hotAPI.reload("data-v-3785c4b8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-04d3359f", module.exports)
  }
}

/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "has-text-centered"
  }, [(_vm.loading) ? _c('aw-icon', {
    attrs: {
      "name": "spinner",
      "scale": "2",
      "spin": ""
    }
  }) : _vm._e()], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3785c4b8", module.exports)
  }
}

/***/ }),

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "section"
  }, [_c('scroll-top', {
    staticClass: "scroll-top",
    attrs: {
      "loading": _vm.loadingTop
    },
    on: {
      "reach": _vm.loadTop
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "container"
  }, [_c('scroll-spy', {
    model: {
      value: (_vm.topPost),
      callback: function($$v) {
        _vm.topPost = $$v
      },
      expression: "topPost"
    }
  }, _vm._l((_vm.posts), function(post) {
    return (post.slug) ? _c('post-large', {
      key: post.slug,
      staticClass: "post-large",
      attrs: {
        "post": post,
        "isAuth": _vm.isAuth
      },
      on: {
        "select": _vm.selectImage
      }
    }) : _vm._e()
  })), _vm._v(" "), (_vm.blockBottom || !_vm.posts.length) ? _c('div', {
    staticClass: "box columns has-text-centered"
  }, [_c('p', {
    staticClass: "column title"
  }, [_vm._v(" Pas d'autres images à afficher. ")])]) : _vm._e()], 1), _vm._v(" "), _c('image-overlay', {
    model: {
      value: (_vm.selectedImage),
      callback: function($$v) {
        _vm.selectedImage = $$v
      },
      expression: "selectedImage"
    }
  }), _vm._v(" "), _c('scroll-bottom', {
    attrs: {
      "block": _vm.blockBottom || !_vm.posts.length,
      "loading": _vm.loadingBottom
    },
    on: {
      "reach": _vm.loadBottom
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-efa87f94", module.exports)
  }
}

/***/ }),

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(159);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("2a276172", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-efa87f94\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Tag.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-efa87f94\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Tag.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(179)
}
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(152),
  /* template */
  __webpack_require__(174),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-efa87f94",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "C:\\Users\\Cobalt\\Documents\\PersonnalCode\\nivose\\client\\pages\\Tag.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Tag.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-efa87f94", Component.options)
  } else {
    hotAPI.reload("data-v-efa87f94", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});