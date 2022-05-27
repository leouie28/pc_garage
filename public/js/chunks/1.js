(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/crud/order.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/crud/order.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _orderDetails_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./orderDetails.vue */ "./resources/js/src/pages/crud/orderDetails.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    OrderDetails: _orderDetails_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      dialog: false,
      headers: [{
        text: 'ID',
        align: 'center',
        sortable: false,
        value: 'id'
      }, {
        text: 'Status',
        align: 'center',
        value: 'status'
      }, {
        text: 'Quantity',
        align: 'center',
        value: 'quantity',
        sortable: false
      }, {
        text: 'Price',
        align: 'center',
        value: 'price',
        sortable: false
      }, {
        text: 'Product',
        align: 'center',
        value: 'product_id',
        sortable: false
      }, {
        text: 'Option',
        align: 'center',
        value: 'option_id',
        sortable: false
      }, {
        text: 'Customer',
        align: 'center',
        value: 'customer',
        sortable: false
      }, {
        text: 'Total',
        align: 'center',
        value: 'total',
        sortable: false
      }, {
        text: 'Action',
        align: 'center',
        value: 'actions',
        sortable: false
      }],
      orderproducts: [],
      products: [],
      orders: [],
      options: [],
      search: '',
      show_details: false,
      details: {}
    };
  },
  created: function created() {
    this.initialize();
  },
  methods: {
    initialize: function initialize() {
      var _this = this;

      axios.get('/admin/orderProduct').then(function (_ref) {
        var data = _ref.data;
        _this.orderproducts = data; //console.log(this.orderproducts, 'test')
      });
    },
    view_details: function view_details(item) {
      this.show_details = true;
      this.details = item; //console.log(this.details)
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/crud/orderDetails.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/crud/orderDetails.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: {
    details: {}
  },
  methods: {
    close: function close() {
      this.$emit("close");
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/crud/order.vue?vue&type=style&index=0&id=19168931&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/crud/order.vue?vue&type=style&index=0&id=19168931&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.dashboard[data-v-19168931]{\n    padding: 10px;\n    border-radius: 10px;\n    border: 1px solid rgb(235, 235, 235);\n    box-shadow: 1px 5px 5px #ccc;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/crud/order.vue?vue&type=style&index=0&id=19168931&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/crud/order.vue?vue&type=style&index=0&id=19168931&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./order.vue?vue&type=style&index=0&id=19168931&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/crud/order.vue?vue&type=style&index=0&id=19168931&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/crud/order.vue?vue&type=template&id=19168931&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/crud/order.vue?vue&type=template&id=19168931&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************/
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
            "v-col",
            { attrs: { lg: "12" } },
            [
              _c(
                "v-card",
                { attrs: { rounded: "24", elevation: "2" } },
                [
                  _c("v-data-table", {
                    staticClass: "elevation-1",
                    attrs: {
                      headers: _vm.headers,
                      items: _vm.orderproducts,
                      "item-key": "name",
                      search: _vm.search,
                    },
                    scopedSlots: _vm._u(
                      [
                        {
                          key: "item.status",
                          fn: function (ref) {
                            var item = ref.item
                            return [
                              item.status
                                ? _c(
                                    "v-icon",
                                    { attrs: { color: "success" } },
                                    [_vm._v(" mdi-account-check")]
                                  )
                                : _c("v-icon", { attrs: { color: "error" } }, [
                                    _vm._v("mdi-account-clock"),
                                  ]),
                            ]
                          },
                        },
                        {
                          key: "item.product_id",
                          fn: function (ref) {
                            var item = ref.item
                            return [
                              _c("span", [_vm._v(_vm._s(item.products.name))]),
                            ]
                          },
                        },
                        {
                          key: "item.option_id",
                          fn: function (ref) {
                            var item = ref.item
                            return [
                              _c("span", [_vm._v(_vm._s(item.options.name))]),
                            ]
                          },
                        },
                        {
                          key: "item.customer",
                          fn: function (ref) {
                            var item = ref.item
                            return [
                              _c("span", [
                                _vm._v(_vm._s(item.orders.customers.name)),
                              ]),
                            ]
                          },
                        },
                        {
                          key: "item.total",
                          fn: function (ref) {
                            var item = ref.item
                            return [
                              _c("span", [
                                _c("h3", [
                                  _vm._v(
                                    "₱ " + _vm._s(item.orders.total) + ".00"
                                  ),
                                ]),
                              ]),
                            ]
                          },
                        },
                        {
                          key: "item.actions",
                          fn: function (ref) {
                            var item = ref.item
                            return [
                              _c(
                                "v-btn",
                                {
                                  attrs: { icon: "", color: "green darken-1" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.view_details(item)
                                    },
                                  },
                                },
                                [_c("v-icon", [_vm._v(" mdi-eye")])],
                                1
                              ),
                            ]
                          },
                        },
                        {
                          key: "top",
                          fn: function () {
                            return [
                              _c(
                                "v-toolbar",
                                { attrs: { flat: "" } },
                                [
                                  _c("v-toolbar-title", [
                                    _vm._v("Order_Products"),
                                  ]),
                                  _vm._v(" "),
                                  _c("v-divider", {
                                    staticClass: "mx-4",
                                    attrs: { inset: "", vertical: "" },
                                  }),
                                  _vm._v(" "),
                                  _c("v-spacer"),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "6", md: "3", sm: "4" } },
                                    [
                                      _c("v-text-field", {
                                        staticClass: "mr-4",
                                        attrs: {
                                          "append-icon": "mdi-magnify",
                                          label: "Search",
                                          "single-line": "",
                                          "hide-details": "",
                                        },
                                        model: {
                                          value: _vm.search,
                                          callback: function ($$v) {
                                            _vm.search = $$v
                                          },
                                          expression: "search",
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                            ]
                          },
                          proxy: true,
                        },
                      ],
                      null,
                      true
                    ),
                  }),
                  _vm._v(" "),
                  _c(
                    "v-dialog",
                    {
                      attrs: { persistent: "", "max-width": "500px" },
                      model: {
                        value: _vm.show_details,
                        callback: function ($$v) {
                          _vm.show_details = $$v
                        },
                        expression: "show_details",
                      },
                    },
                    [
                      _c("order-details", {
                        attrs: { details: _vm.details },
                        on: {
                          close: function ($event) {
                            _vm.show_details = false
                          },
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
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/crud/orderDetails.vue?vue&type=template&id=552cd1fe&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/crud/orderDetails.vue?vue&type=template&id=552cd1fe& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
      _c("v-card-title", [_vm._v("PRODUCT DETAILS")]),
      _vm._v(" "),
      _c(
        "v-card-text",
        [
          _c(
            "v-container",
            [
              _c(
                "v-form",
                { ref: "form" },
                [
                  _c(
                    "v-row",
                    [
                      _c("v-col", [
                        _c("span", [_c("b", [_vm._v("Name: ")])]),
                        _vm._v(" "),
                        _c("span", [_vm._v(_vm._s(_vm.details.products.name))]),
                      ]),
                      _vm._v(" "),
                      _c("v-col", [
                        _c("span", [_c("b", [_vm._v("Price: ")])]),
                        _vm._v(" "),
                        _c("span", [
                          _vm._v(_vm._s(_vm.details.products.price)),
                        ]),
                      ]),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    [
                      _c("v-col", [
                        _c("span", [_c("b", [_vm._v("Reference: ")])]),
                        _vm._v(" "),
                        _c("span", [
                          _vm._v(_vm._s(_vm.details.products.reference)),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("v-col", [
                        _c("span", [_c("b", [_vm._v("Category: ")])]),
                        _vm._v(" "),
                        _c("span", [
                          _vm._v(_vm._s(_vm.details.products.reference)),
                        ]),
                      ]),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    [
                      _c("v-col", [
                        _c("span", [_c("b", [_vm._v("Descrition: ")])]),
                        _vm._v(" "),
                        _c("span", [
                          _vm._v(_vm._s(_vm.details.products.description)),
                        ]),
                      ]),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    [
                      _c("v-col", [
                        _c("span", [_c("b", [_vm._v("Comment: ")])]),
                        _vm._v(" "),
                        _c("span", [
                          _vm._v(_vm._s(_vm.details.products.comment)),
                        ]),
                      ]),
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
      _vm._v(" "),
      _c("v-card-title", [_vm._v("OPTION DETAILS")]),
      _vm._v(" "),
      _c(
        "v-card-text",
        [
          _c(
            "v-container",
            [
              _c(
                "v-form",
                { ref: "form" },
                [
                  _c(
                    "v-row",
                    [
                      _c("v-col", [
                        _c("span", [_c("b", [_vm._v("Name: ")])]),
                        _vm._v(" "),
                        _c("span", [_vm._v(_vm._s(_vm.details.options.name))]),
                      ]),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    [
                      _c("v-col", [
                        _c("span", [_c("b", [_vm._v("Price: ")])]),
                        _vm._v(" "),
                        _c("span", [
                          _vm._v(_vm._s(_vm.details.options.addprice)),
                        ]),
                      ]),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    [
                      _c("v-col", [
                        _c("span", [_c("b", [_vm._v("Variation: ")])]),
                        _vm._v(" "),
                        _c("span", [
                          _vm._v(_vm._s(_vm.details.options.variations.name)),
                        ]),
                      ]),
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
      _vm._v(" "),
      _c("v-card-title", [_vm._v("CUSTOMER INFORMATION")]),
      _vm._v(" "),
      _c(
        "v-card-text",
        [
          _c(
            "v-container",
            [
              _c(
                "v-form",
                { ref: "form" },
                [
                  _c(
                    "v-row",
                    [
                      _c("v-col", [
                        _c("span", [_c("b", [_vm._v("Name: ")])]),
                        _vm._v(" "),
                        _c("span", [
                          _vm._v(_vm._s(_vm.details.orders.customers.name)),
                        ]),
                      ]),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    [
                      _c("v-col", [
                        _c("span", [_c("b", [_vm._v("Phone: ")])]),
                        _vm._v(" "),
                        _c("span", [
                          _vm._v(_vm._s(_vm.details.orders.customers.phone)),
                        ]),
                      ]),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    [
                      _c("v-col", [
                        _c("span", [_c("b", [_vm._v("Email: ")])]),
                        _vm._v(" "),
                        _c("span", [
                          _vm._v(_vm._s(_vm.details.orders.customers.email)),
                        ]),
                      ]),
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
      _vm._v(" "),
      _c(
        "v-card-actions",
        [
          _c("v-spacer"),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              attrs: { text: "", color: "red darken-1" },
              on: { click: _vm.close },
            },
            [_vm._v("\r\n            Close\r\n        ")]
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/pages/crud/order.vue":
/*!***********************************************!*\
  !*** ./resources/js/src/pages/crud/order.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _order_vue_vue_type_template_id_19168931_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order.vue?vue&type=template&id=19168931&scoped=true& */ "./resources/js/src/pages/crud/order.vue?vue&type=template&id=19168931&scoped=true&");
/* harmony import */ var _order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order.vue?vue&type=script&lang=js& */ "./resources/js/src/pages/crud/order.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _order_vue_vue_type_style_index_0_id_19168931_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order.vue?vue&type=style&index=0&id=19168931&scoped=true&lang=css& */ "./resources/js/src/pages/crud/order.vue?vue&type=style&index=0&id=19168931&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _order_vue_vue_type_template_id_19168931_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _order_vue_vue_type_template_id_19168931_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "19168931",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/pages/crud/order.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/pages/crud/order.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/src/pages/crud/order.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./order.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/crud/order.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/pages/crud/order.vue?vue&type=style&index=0&id=19168931&scoped=true&lang=css&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/src/pages/crud/order.vue?vue&type=style&index=0&id=19168931&scoped=true&lang=css& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_order_vue_vue_type_style_index_0_id_19168931_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./order.vue?vue&type=style&index=0&id=19168931&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/crud/order.vue?vue&type=style&index=0&id=19168931&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_order_vue_vue_type_style_index_0_id_19168931_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_order_vue_vue_type_style_index_0_id_19168931_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_order_vue_vue_type_style_index_0_id_19168931_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_order_vue_vue_type_style_index_0_id_19168931_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/pages/crud/order.vue?vue&type=template&id=19168931&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/pages/crud/order.vue?vue&type=template&id=19168931&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_order_vue_vue_type_template_id_19168931_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./order.vue?vue&type=template&id=19168931&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/crud/order.vue?vue&type=template&id=19168931&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_order_vue_vue_type_template_id_19168931_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_order_vue_vue_type_template_id_19168931_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/pages/crud/orderDetails.vue":
/*!******************************************************!*\
  !*** ./resources/js/src/pages/crud/orderDetails.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _orderDetails_vue_vue_type_template_id_552cd1fe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./orderDetails.vue?vue&type=template&id=552cd1fe& */ "./resources/js/src/pages/crud/orderDetails.vue?vue&type=template&id=552cd1fe&");
/* harmony import */ var _orderDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./orderDetails.vue?vue&type=script&lang=js& */ "./resources/js/src/pages/crud/orderDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _orderDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _orderDetails_vue_vue_type_template_id_552cd1fe___WEBPACK_IMPORTED_MODULE_0__["render"],
  _orderDetails_vue_vue_type_template_id_552cd1fe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/pages/crud/orderDetails.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/pages/crud/orderDetails.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/pages/crud/orderDetails.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_orderDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./orderDetails.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/crud/orderDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_orderDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/pages/crud/orderDetails.vue?vue&type=template&id=552cd1fe&":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/pages/crud/orderDetails.vue?vue&type=template&id=552cd1fe& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_orderDetails_vue_vue_type_template_id_552cd1fe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./orderDetails.vue?vue&type=template&id=552cd1fe& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/crud/orderDetails.vue?vue&type=template&id=552cd1fe&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_orderDetails_vue_vue_type_template_id_552cd1fe___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_orderDetails_vue_vue_type_template_id_552cd1fe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);