(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/customer/product.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/customer/product.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      products: [],
      isloading: true,
      keyword: '',
      ischeckout: false
    };
  },
  methods: {
    getAllPropducts: function getAllPropducts() {
      var _this = this;

      this.isloading = true;
      var params = '';

      if (this.keyword) {
        params = 'keyword=' + this.keyword;
      }

      axios.get("/customer-api/products?".concat(params)).then(function (_ref) {
        var data = _ref.data;
        _this.products = data.data;
        console.log(_this.products);
      })["finally"](function () {
        _this.isloading = false;
      });
    },
    addToCart: function addToCart(item) {
      var _this2 = this;

      var payload = {};
      payload.product_id = item.id;
      axios.post("/customer-api/store-cart", payload).then(function (_ref2) {
        var data = _ref2.data;

        _this2.$store.dispatch("GET_CART_COUNT", data);
      })["finally"](function () {
        _this2.isloading = false;
      });
    },
    getDescription: function getDescription(description) {
      // let body = this.stripTags(description.body);
      return description.length > 100 ? description.substring(0, 100) + '...' : description;
    },
    stripTags: function stripTags(text) {
      return text.replace(/(<([^>]+)>)/ig, '');
    }
  },
  mounted: function mounted() {
    this.getAllPropducts();
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(["CART_COUNT"]))
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/customer/product.vue?vue&type=style&index=0&id=52a41227&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/customer/product.vue?vue&type=style&index=0&id=52a41227&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".product-list[data-v-52a41227] {\n  height: 82vh;\n  overflow: auto;\n}\n.product-list .product-name[data-v-52a41227] {\n  margin-top: 15px;\n}\n.product-list .product-action[data-v-52a41227] {\n  display: flex;\n  justify-content: flex-end;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/customer/product.vue?vue&type=style&index=0&id=52a41227&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/customer/product.vue?vue&type=style&index=0&id=52a41227&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./product.vue?vue&type=style&index=0&id=52a41227&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/customer/product.vue?vue&type=style&index=0&id=52a41227&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/customer/product.vue?vue&type=template&id=52a41227&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/customer/product.vue?vue&type=template&id=52a41227&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
    "div",
    [
      _c(
        "v-row",
        [
          _c(
            "v-card",
            { staticStyle: { width: "100%" }, attrs: { elevation: "0" } },
            [
              _c(
                "v-card-text",
                [
                  _c("v-text-field", {
                    attrs: {
                      placeholder: "Search Item ...",
                      filled: "",
                      clearable: "",
                      "append-icon": "mdi-magnify",
                      color: "primary",
                      dense: "",
                      "hide-details": "",
                    },
                    on: {
                      keydown: function ($event) {
                        if (
                          !$event.type.indexOf("key") &&
                          _vm._k(
                            $event.keyCode,
                            "enter",
                            13,
                            $event.key,
                            "Enter"
                          )
                        ) {
                          return null
                        }
                        return _vm.getAllPropducts.apply(null, arguments)
                      },
                    },
                    model: {
                      value: _vm.keyword,
                      callback: function ($$v) {
                        _vm.keyword = $$v
                      },
                      expression: "keyword",
                    },
                  }),
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
      !_vm.isloading
        ? _c(
            "v-row",
            { staticClass: "product-list", attrs: { wrap: "" } },
            _vm._l(_vm.products, function (product) {
              return _c(
                "v-col",
                { key: product.id, attrs: { cols: "12", sm: "2" } },
                [
                  _c(
                    "v-card",
                    { attrs: { "max-height": "350" } },
                    [
                      _c(
                        "v-card-text",
                        [
                          _c("h1", [_vm._v("₱" + _vm._s(product.price))]),
                          _vm._v(" "),
                          _c("v-img", {
                            attrs: {
                              "lazy-src": "/images/default/noimage.png",
                              height: "150",
                              width: "250",
                              contain: "",
                              src: product.images.length
                                ? "/images/products/" +
                                  product.id +
                                  "/" +
                                  product.images[0].file_name
                                : "/images/default/noimage.png",
                            },
                          }),
                          _vm._v(" "),
                          _c("h3", { staticClass: "product-name" }, [
                            _vm._v(_vm._s(product.name)),
                          ]),
                          _vm._v(" "),
                          _c("small", [
                            _vm._v(
                              _vm._s(_vm.getDescription(product.description))
                            ),
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "product-action" },
                            [
                              _c(
                                "v-btn",
                                {
                                  attrs: { width: "100%", color: "primary" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.addToCart(product)
                                    },
                                  },
                                },
                                [
                                  _c("v-icon", { attrs: { left: "" } }, [
                                    _vm._v(
                                      "\n                                mdi-cart\n                            "
                                    ),
                                  ]),
                                  _vm._v(
                                    "\n                            Add to cart\n                        "
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
                    ],
                    1
                  ),
                ],
                1
              )
            }),
            1
          )
        : _vm._e(),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/customer/product.vue":
/*!*************************************************!*\
  !*** ./resources/js/pages/customer/product.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _product_vue_vue_type_template_id_52a41227_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product.vue?vue&type=template&id=52a41227&scoped=true& */ "./resources/js/pages/customer/product.vue?vue&type=template&id=52a41227&scoped=true&");
/* harmony import */ var _product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product.vue?vue&type=script&lang=js& */ "./resources/js/pages/customer/product.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _product_vue_vue_type_style_index_0_id_52a41227_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product.vue?vue&type=style&index=0&id=52a41227&lang=scss&scoped=true& */ "./resources/js/pages/customer/product.vue?vue&type=style&index=0&id=52a41227&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _product_vue_vue_type_template_id_52a41227_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _product_vue_vue_type_template_id_52a41227_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "52a41227",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/customer/product.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/customer/product.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/pages/customer/product.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./product.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/customer/product.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/customer/product.vue?vue&type=style&index=0&id=52a41227&lang=scss&scoped=true&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/pages/customer/product.vue?vue&type=style&index=0&id=52a41227&lang=scss&scoped=true& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_product_vue_vue_type_style_index_0_id_52a41227_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./product.vue?vue&type=style&index=0&id=52a41227&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/customer/product.vue?vue&type=style&index=0&id=52a41227&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_product_vue_vue_type_style_index_0_id_52a41227_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_product_vue_vue_type_style_index_0_id_52a41227_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_product_vue_vue_type_style_index_0_id_52a41227_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_product_vue_vue_type_style_index_0_id_52a41227_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/customer/product.vue?vue&type=template&id=52a41227&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/pages/customer/product.vue?vue&type=template&id=52a41227&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_product_vue_vue_type_template_id_52a41227_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./product.vue?vue&type=template&id=52a41227&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/customer/product.vue?vue&type=template&id=52a41227&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_product_vue_vue_type_template_id_52a41227_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_product_vue_vue_type_template_id_52a41227_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);