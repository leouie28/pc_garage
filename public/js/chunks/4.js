(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/customer/checkout.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/customer/checkout.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  data: function data() {
    return {
      carts: [],
      payload: {}
    };
  },
  methods: {
    checkout: function checkout() {
      var _this = this;

      axios.post("/customer-api/cart-checkout", this.payload).then(function (_ref) {
        var data = _ref.data;

        _this.$router.push({
          name: 'orders'
        });
      });
    },
    getCartItems: function getCartItems() {
      var _this2 = this;

      axios.get("/customer-api/getall-cart").then(function (_ref2) {
        var data = _ref2.data;
        _this2.carts = data.data;
        console.log(_this2.carts, "this.carts");
      });
    },
    updateCart: function updateCart(item) {
      var _this3 = this;

      axios.put("/customer-api/update-cart/".concat(item.id), item).then(function (_ref3) {
        var data = _ref3.data;

        _this3.$store.dispatch("GET_CART_COUNT", data);

        _this3.getCartItems();
      });
    },
    removeItem: function removeItem(item) {
      var _this4 = this;

      axios["delete"]("/customer-api/remove-cart/".concat(item.id)).then(function (_ref4) {
        var data = _ref4.data;

        _this4.$store.dispatch("GET_CART_COUNT", data);

        _this4.getCartItems();
      });
    }
  },
  created: function created() {
    this.getCartItems();
  },
  computed: {
    computeTotal: function computeTotal() {
      var total = this.carts.map(function (cart) {
        return cart.quantity * cart.product.price;
      });
      this.payload.total = total.reduce(function (partialSum, a) {
        return partialSum + a;
      }, 0);
      return total.reduce(function (partialSum, a) {
        return partialSum + a;
      }, 0);
    }
  },
  watch: {
    show: {
      handler: function handler(val) {
        if (val) {} else {}
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/customer/checkout.vue?vue&type=style&index=0&id=528abbc8&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/customer/checkout.vue?vue&type=style&index=0&id=528abbc8&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".no-item[data-v-528abbc8] {\n  display: grid;\n  place-items: center;\n  height: 85vh;\n}\n.product-list[data-v-528abbc8] {\n  display: flex;\n  justify-content: space-between;\n}\n.product-list div[data-v-528abbc8] {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n}\n.product-list .name p[data-v-528abbc8] {\n  margin-bottom: 0 !important;\n}\n.product-list .quantity[data-v-528abbc8] {\n  width: 100px !important;\n}\n.total .inner[data-v-528abbc8] {\n  display: flex;\n  justify-content: flex-end;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/customer/checkout.vue?vue&type=style&index=0&id=528abbc8&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/customer/checkout.vue?vue&type=style&index=0&id=528abbc8&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./checkout.vue?vue&type=style&index=0&id=528abbc8&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/customer/checkout.vue?vue&type=style&index=0&id=528abbc8&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/customer/checkout.vue?vue&type=template&id=528abbc8&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/customer/checkout.vue?vue&type=template&id=528abbc8&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-card",
    [
      _c(
        "v-card-text",
        [
          _vm._l(_vm.carts, function (cart) {
            return _c(
              "v-card",
              { key: cart.id, attrs: { width: "100%" } },
              [
                _c("v-card-text", [
                  _c("div", { staticClass: "product-list" }, [
                    _c(
                      "div",
                      { staticClass: "image" },
                      [
                        _c("v-img", {
                          attrs: {
                            "lazy-src": "/images/default/noimage.png",
                            height: "80",
                            width: "80",
                            contain: "",
                            src: cart.product.images.length
                              ? "/images/products/" +
                                cart.product.id +
                                "/" +
                                cart.product.images[0].file_name
                              : "/images/default/noimage.png",
                          },
                        }),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "name" }, [
                      _c("p", [_vm._v(_vm._s(cart.product.name))]),
                      _vm._v(" "),
                      _c("small", [_vm._v(_vm._s(cart.product.description))]),
                    ]),
                    _vm._v(" "),
                    _c("div", [
                      _c("p", [_vm._v("₱" + _vm._s(cart.product.price))]),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "quantity" }, [
                      _c(
                        "div",
                        [
                          _c("v-text-field", {
                            attrs: {
                              dense: "",
                              outlined: "",
                              type: "number",
                              "hide-details": "auto",
                            },
                            on: {
                              change: function ($event) {
                                return _vm.updateCart(cart)
                              },
                            },
                            model: {
                              value: cart.quantity,
                              callback: function ($$v) {
                                _vm.$set(cart, "quantity", $$v)
                              },
                              expression: "cart.quantity",
                            },
                          }),
                        ],
                        1
                      ),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "action" }, [
                      _c("p", [
                        _vm._v(
                          "₱" + _vm._s(cart.product.price * cart.quantity)
                        ),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "action" },
                      [
                        _c(
                          "v-btn",
                          {
                            attrs: { icon: "", color: "error" },
                            on: {
                              click: function ($event) {
                                return _vm.removeItem(cart)
                              },
                            },
                          },
                          [_c("v-icon", [_vm._v("mdi-close")])],
                          1
                        ),
                      ],
                      1
                    ),
                  ]),
                ]),
              ],
              1
            )
          }),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "total" },
            [
              _c(
                "v-card",
                [
                  _c("v-card-text", { staticClass: "inner" }, [
                    _c("h3", [_vm._v("TOTAL: ₱" + _vm._s(_vm.computeTotal))]),
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-card-actions",
                    [
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "primary" },
                          on: { click: _vm.checkout },
                        },
                        [_vm._v("CheckOut")]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          !_vm.carts.length
            ? _c("div", { staticClass: "no-item" }, [
                _c("h1", [_vm._v("No Item Found")]),
              ])
            : _vm._e(),
        ],
        2
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/customer/checkout.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/customer/checkout.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _checkout_vue_vue_type_template_id_528abbc8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkout.vue?vue&type=template&id=528abbc8&scoped=true& */ "./resources/js/components/customer/checkout.vue?vue&type=template&id=528abbc8&scoped=true&");
/* harmony import */ var _checkout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkout.vue?vue&type=script&lang=js& */ "./resources/js/components/customer/checkout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _checkout_vue_vue_type_style_index_0_id_528abbc8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkout.vue?vue&type=style&index=0&id=528abbc8&lang=scss&scoped=true& */ "./resources/js/components/customer/checkout.vue?vue&type=style&index=0&id=528abbc8&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _checkout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _checkout_vue_vue_type_template_id_528abbc8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _checkout_vue_vue_type_template_id_528abbc8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "528abbc8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/customer/checkout.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/customer/checkout.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/customer/checkout.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_checkout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./checkout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/customer/checkout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_checkout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/customer/checkout.vue?vue&type=style&index=0&id=528abbc8&lang=scss&scoped=true&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/customer/checkout.vue?vue&type=style&index=0&id=528abbc8&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_checkout_vue_vue_type_style_index_0_id_528abbc8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./checkout.vue?vue&type=style&index=0&id=528abbc8&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/customer/checkout.vue?vue&type=style&index=0&id=528abbc8&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_checkout_vue_vue_type_style_index_0_id_528abbc8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_checkout_vue_vue_type_style_index_0_id_528abbc8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_checkout_vue_vue_type_style_index_0_id_528abbc8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_checkout_vue_vue_type_style_index_0_id_528abbc8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/customer/checkout.vue?vue&type=template&id=528abbc8&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/customer/checkout.vue?vue&type=template&id=528abbc8&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_checkout_vue_vue_type_template_id_528abbc8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./checkout.vue?vue&type=template&id=528abbc8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/customer/checkout.vue?vue&type=template&id=528abbc8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_checkout_vue_vue_type_template_id_528abbc8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_checkout_vue_vue_type_template_id_528abbc8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);