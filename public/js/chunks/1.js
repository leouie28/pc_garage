(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/order/form.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/order/form.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      // dialog: false
      raw: '',
      qty: 1,
      itemPrice: '',
      now: new Date().toISOString().slice(0, 10),
      img: null,
      products: [],
      datePicker: false,
      customers: [],
      status: [{
        id: 0,
        text: 'Cancel'
      }, {
        id: 1,
        text: 'Pending'
      }, {
        id: 2,
        text: 'Confirm'
      }, {
        id: 3,
        text: 'On Delivery'
      }, {
        id: 4,
        text: 'Delivered'
      }],
      payload: {
        product: '',
        arrival: new Date().toISOString().slice(0, 7),
        status: 1,
        note: '',
        customer: '',
        quantity: 1,
        total: ''
      }
    };
  },
  props: {// formDialog: {}
  },
  created: function created() {
    this.getProduct();
    this.getCustomer();
  },
  methods: {
    compute: function compute(val) {
      var _this = this;

      var price = '';
      this.products.forEach(function (elem) {
        if (elem.id == val) {
          price = elem.price;
          _this.itemPrice = price;
        }
      });
      this.payload.total = price * this.payload.quantity;
    },
    getProduct: function getProduct() {
      var _this2 = this;

      axios.get("/admin-api/product").then(function (_ref) {
        var data = _ref.data;
        _this2.products = data.data;
      });
    },
    getCustomer: function getCustomer() {
      var _this3 = this;

      axios.get("/admin-api/customer").then(function (_ref2) {
        var data = _ref2.data;
        _this3.customers = data.data;
      });
    },
    save: function save() {
      this.$emit('save', this.payload); // console.log(this.payload)
    }
  },
  watch: {
    raw: function raw(val) {
      this.payload.product = val;
      this.qty = 1;
      this.compute(val);
    },
    qty: function qty(val) {
      this.payload.quantity = val;
      this.payload.total = val * this.itemPrice;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/order/form.vue?vue&type=template&id=f2db9d20&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/order/form.vue?vue&type=template&id=f2db9d20& ***!
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
    "div",
    [
      _c(
        "v-card",
        [
          _c("v-card-title", [
            _c("span", { staticClass: "text-h5" }, [_vm._v("Order Info")]),
          ]),
          _vm._v(" "),
          _c(
            "v-card-text",
            [
              _c(
                "v-container",
                [
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        { attrs: { cols: "12" } },
                        [
                          _c("v-select", {
                            attrs: {
                              items: _vm.products,
                              "item-value": "id",
                              filled: "",
                              "hide-details": "auto",
                              label: "Product",
                              dense: "",
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "selection",
                                fn: function (ref) {
                                  var item = ref.item
                                  return [
                                    _c(
                                      "v-avatar",
                                      {
                                        staticStyle: {
                                          border: "1px solid #ccc",
                                        },
                                        attrs: { size: "35" },
                                      },
                                      [
                                        _c("img", {
                                          attrs: {
                                            src:
                                              "/images/products/" +
                                              item.id +
                                              "/" +
                                              item.images[0].file_name,
                                          },
                                        }),
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("span", { staticClass: "pa-2" }, [
                                      _vm._v(_vm._s(item.name)),
                                    ]),
                                  ]
                                },
                              },
                              {
                                key: "item",
                                fn: function (ref) {
                                  var item = ref.item
                                  return [
                                    _c(
                                      "v-avatar",
                                      {
                                        staticStyle: {
                                          border: "1px solid #ccc",
                                        },
                                        attrs: { size: "35" },
                                      },
                                      [
                                        _c("img", {
                                          attrs: {
                                            src:
                                              "/images/products/" +
                                              item.id +
                                              "/" +
                                              item.images[0].file_name,
                                          },
                                        }),
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("span", { staticClass: "pa-2" }, [
                                      _vm._v(_vm._s(item.name)),
                                    ]),
                                  ]
                                },
                              },
                            ]),
                            model: {
                              value: _vm.raw,
                              callback: function ($$v) {
                                _vm.raw = $$v
                              },
                              expression: "raw",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { md: "6", cols: "12" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              filled: "",
                              label: "Arrival",
                              "prepend-inner-icon": "mdi-calendar",
                              readonly: "",
                              "hide-details": "",
                            },
                            on: {
                              click: function ($event) {
                                $event.stopPropagation()
                                _vm.datePicker = true
                              },
                            },
                            model: {
                              value: _vm.payload.arrival,
                              callback: function ($$v) {
                                _vm.$set(_vm.payload, "arrival", $$v)
                              },
                              expression: "payload.arrival",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-dialog",
                        {
                          attrs: { persistent: "", "max-width": "300" },
                          model: {
                            value: _vm.datePicker,
                            callback: function ($$v) {
                              _vm.datePicker = $$v
                            },
                            expression: "datePicker",
                          },
                        },
                        [
                          _c(
                            "v-date-picker",
                            {
                              attrs: { scrollable: "", min: _vm.now },
                              model: {
                                value: _vm.payload.arrival,
                                callback: function ($$v) {
                                  _vm.$set(_vm.payload, "arrival", $$v)
                                },
                                expression: "payload.arrival",
                              },
                            },
                            [
                              _c("v-spacer"),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  attrs: { text: "", color: "primary" },
                                  on: {
                                    click: function ($event) {
                                      _vm.datePicker = false
                                    },
                                  },
                                },
                                [
                                  _vm._v(
                                    "\n                        Cancel\n                    "
                                  ),
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  attrs: { text: "", color: "primary" },
                                  on: {
                                    click: function ($event) {
                                      _vm.datePicker = false
                                    },
                                  },
                                },
                                [
                                  _vm._v(
                                    "\n                        OK\n                    "
                                  ),
                                ]
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { md: "6", cols: "12" } },
                        [
                          _c("v-select", {
                            attrs: {
                              label: "Status*",
                              items: _vm.status,
                              "item-text": "text",
                              "item-value": "id",
                              dense: "",
                              filled: "",
                              "hide-details": "auto",
                              required: "",
                            },
                            model: {
                              value: _vm.payload.status,
                              callback: function ($$v) {
                                _vm.$set(_vm.payload, "status", $$v)
                              },
                              expression: "payload.status",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "12" } },
                        [
                          _c("v-textarea", {
                            attrs: {
                              filled: "",
                              label: "Note",
                              "hide-details": "",
                            },
                            model: {
                              value: _vm.payload.note,
                              callback: function ($$v) {
                                _vm.$set(_vm.payload, "note", $$v)
                              },
                              expression: "payload.note",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "12" } },
                        [
                          _c("v-select", {
                            attrs: {
                              items: _vm.customers,
                              filled: "",
                              "item-value": "id",
                              "hide-details": "auto",
                              label: "Customer",
                              dense: "",
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "selection",
                                fn: function (ref) {
                                  var item = ref.item
                                  return [
                                    _vm._v(
                                      "\n                            " +
                                        _vm._s(item.first_name) +
                                        " " +
                                        _vm._s(item.last_name) +
                                        "\n                        "
                                    ),
                                  ]
                                },
                              },
                              {
                                key: "item",
                                fn: function (ref) {
                                  var item = ref.item
                                  return [
                                    _vm._v(
                                      "\n                            " +
                                        _vm._s(item.first_name) +
                                        " " +
                                        _vm._s(item.last_name) +
                                        "\n                        "
                                    ),
                                  ]
                                },
                              },
                            ]),
                            model: {
                              value: _vm.payload.customer,
                              callback: function ($$v) {
                                _vm.$set(_vm.payload, "customer", $$v)
                              },
                              expression: "payload.customer",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { md: "6", cols: "12" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              label: "Total*",
                              readonly: "",
                              dense: "",
                              type: "number",
                              filled: "",
                              "hide-details": "",
                              required: "",
                            },
                            model: {
                              value: _vm.payload.total,
                              callback: function ($$v) {
                                _vm.$set(_vm.payload, "total", $$v)
                              },
                              expression: "payload.total",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { md: "6", cols: "12" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              label: "Quantity*",
                              dense: "",
                              type: "number",
                              filled: "",
                              min: "1",
                              "hide-details": "",
                              required: "",
                            },
                            model: {
                              value: _vm.qty,
                              callback: function ($$v) {
                                _vm.qty = $$v
                              },
                              expression: "qty",
                            },
                          }),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    { attrs: { justify: "end" } },
                    [
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "secondary" },
                          on: {
                            click: function ($event) {
                              return _vm.$emit("cancel")
                            },
                          },
                        },
                        [
                          _vm._v(
                            "\n                    Cancel\n                "
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          staticClass: "mx-2",
                          attrs: { color: "success" },
                          on: { click: _vm.save },
                        },
                        [_vm._v("\n                    Save\n                ")]
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
          _c("v-card-actions", [_c("v-spacer")], 1),
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

/***/ "./resources/js/components/admin/order/form.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/admin/order/form.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form_vue_vue_type_template_id_f2db9d20___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.vue?vue&type=template&id=f2db9d20& */ "./resources/js/components/admin/order/form.vue?vue&type=template&id=f2db9d20&");
/* harmony import */ var _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/order/form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _form_vue_vue_type_template_id_f2db9d20___WEBPACK_IMPORTED_MODULE_0__["render"],
  _form_vue_vue_type_template_id_f2db9d20___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/order/form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/order/form.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/admin/order/form.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/order/form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/order/form.vue?vue&type=template&id=f2db9d20&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/admin/order/form.vue?vue&type=template&id=f2db9d20& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_f2db9d20___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./form.vue?vue&type=template&id=f2db9d20& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/order/form.vue?vue&type=template&id=f2db9d20&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_f2db9d20___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_f2db9d20___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);