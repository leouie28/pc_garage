(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/crud/payment.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/crud/payment.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      valid: true,
      name: '',
      nameRules: [function (v) {
        return !!v || 'Name is required';
      }, function (v) {
        return v && v.length <= 10 || 'Name must be less than 10 characters';
      }],
      dialog: false,
      search: '',
      dialogDelete: false,
      defaultItem: {
        name: ''
      },
      headers: [{
        text: 'ID',
        value: 'id',
        sortable: false
      }, {
        text: 'Payment Method',
        value: 'payment_method'
      }, {
        text: 'Paid',
        value: 'paid'
      }, {
        text: 'Change',
        value: 'change'
      }, {
        text: 'Date Created',
        value: 'created_at'
      }, {
        text: 'Action',
        value: 'cat_act',
        sortable: false,
        align: 'center'
      }],
      payment: [],
      payload: {},
      Title: 'Add Category'
    };
  },
  created: function created() {
    //this.$toast.success('Successfully updated client status', {position: 'bottom'});
    this.initialize();
  },
  methods: {
    initialize: function initialize() {
      var _this = this;

      axios.get('/admin/payment').then(function (_ref) {
        var data = _ref.data;
        _this.payment = data;

        _this.resetValidation();
      });
    },
    cancelDialog: function cancelDialog() {
      this.dialog = false;
    },
    editDialog: function editDialog(text) {
      this.dialog = true;
      this.Title = 'Edit Payment';
      this.payload = JSON.parse(JSON.stringify(text));
    },
    deleteItem: function deleteItem(item) {
      this.dialogDelete = true;
      this.payload = item;
    },
    closeDelete: function closeDelete() {
      this.dialogDelete = false;
    },
    deleteItemConfirm: function deleteItemConfirm(id) {
      var _this2 = this;

      axios["delete"]('/admin/payment/destroy/' + this.payload.id, this.payload).then(function (_ref2) {
        var data = _ref2.data;
        console.log('Success');

        _this2.resetValidation();

        _this2.initialize();

        _this2.dialogDelete = false;
      });
    },
    editItem: function editItem(id) {
      var _this3 = this;

      axios.put('/admin/payment/update' + id).then(function (_ref3) {
        var data = _ref3.data;
        console.log('Success');

        _this3.initialize();
      });
    },
    save: function save() {
      var _this4 = this;

      if (this.payload.id) {
        axios.put('/admin/payment/update/' + this.payload.id, this.payload).then(function (_ref4) {
          var data = _ref4.data;

          _this4.initialize();

          _this4.close(); // this.$toast.success('successfully updated!', {position:'bottom'})

        }).then(function (response) {
          sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
            icon: 'success',
            text: 'Payment Updated!'
          });
        })["catch"](function (error) {
          if (error.response.data.errors.name = _this4.payload.name) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
              icon: 'error',
              text: 'Payment has been added already!'
            });
          }
        });
      } //  else {
      //   axios.post('/admin/category/create', this.payload).then(({data}) => {
      //     this.initialize()
      //     this.close()
      //   }).then(response =>{
      //            Swal.fire({
      //            icon: 'success',
      //            text: 'Category Saved!',
      //                  })
      //        }).catch(error => {
      //      if(error.response.data.errors.name = this.payload.name) {
      //         Swal.fire({
      //            icon: 'error',
      //           text: 'Category has been added already!',
      //                  })
      //       }
      //     })
      // }

    },
    resetValidation: function resetValidation() {
      this.payload.name = '';
      this.payload.id = '';
      this.$refs.form.resetValidation();
    },
    close: function close() {
      var _this5 = this;

      this.payload = {};
      this.dialog = false;
      this.$nextTick(function () {
        _this5.editedItem = Object.assign({}, _this5.defaultItem);
        _this5.editedIndex = -1;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/crud/payment.vue?vue&type=template&id=a0e69dae&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/crud/payment.vue?vue&type=template&id=a0e69dae& ***!
  \**************************************************************************************************************************************************************************************************************/
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
    { staticClass: "Category" },
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
                { attrs: { rounded: "24", elevation: "2", flat: "" } },
                [
                  _c("v-data-table", {
                    staticClass: "elevation-1",
                    attrs: {
                      dense: "",
                      headers: _vm.headers,
                      items: _vm.payment,
                      search: _vm.search,
                    },
                    scopedSlots: _vm._u(
                      [
                        {
                          key: "top",
                          fn: function () {
                            return [
                              _c(
                                "v-toolbar",
                                { attrs: { flat: "" } },
                                [
                                  _c("v-toolbar-title", [_vm._v("Payment")]),
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
                                    { attrs: { sm: "3" } },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          "append-icon": "mdi-magnify",
                                          placeholder: "Search",
                                          "hide-details": "",
                                          chips: "",
                                          clearable: "",
                                          solo: "",
                                          dense: "",
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
                                  _vm._v(" "),
                                  _c(
                                    "v-dialog",
                                    {
                                      attrs: {
                                        "max-width": "500px",
                                        persistent: "",
                                      },
                                      model: {
                                        value: _vm.dialog,
                                        callback: function ($$v) {
                                          _vm.dialog = $$v
                                        },
                                        expression: "dialog",
                                      },
                                    },
                                    [
                                      _c(
                                        "v-card",
                                        [
                                          _c("v-card-title", [
                                            _c(
                                              "span",
                                              { staticClass: "text-h5" },
                                              [_vm._v(_vm._s(_vm.Title))]
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c(
                                            "v-card-text",
                                            [
                                              _c(
                                                "v-container",
                                                [
                                                  _c(
                                                    "v-form",
                                                    {
                                                      ref: "form",
                                                      attrs: {
                                                        "lazy-validation": "",
                                                      },
                                                      model: {
                                                        value: _vm.valid,
                                                        callback: function (
                                                          $$v
                                                        ) {
                                                          _vm.valid = $$v
                                                        },
                                                        expression: "valid",
                                                      },
                                                    },
                                                    [
                                                      _c(
                                                        "v-row",
                                                        [
                                                          _c(
                                                            "v-col",
                                                            {
                                                              attrs: {
                                                                cols: "12",
                                                                sm: "12",
                                                              },
                                                            },
                                                            [
                                                              _c(
                                                                "v-text-field",
                                                                {
                                                                  ref: "name",
                                                                  attrs: {
                                                                    rules:
                                                                      _vm.nameRules,
                                                                    required:
                                                                      "",
                                                                    label:
                                                                      "Category Name",
                                                                    hint: "For example Accessories, Gadgets and etc.",
                                                                    outlined:
                                                                      "",
                                                                  },
                                                                  model: {
                                                                    value:
                                                                      _vm
                                                                        .payload
                                                                        .payment_method,
                                                                    callback:
                                                                      function (
                                                                        $$v
                                                                      ) {
                                                                        _vm.$set(
                                                                          _vm.payload,
                                                                          "payment_method",
                                                                          $$v
                                                                        )
                                                                      },
                                                                    expression:
                                                                      "payload.payment_method",
                                                                  },
                                                                }
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
                                                          attrs: {
                                                            depressed: "",
                                                            color: "success",
                                                            align: "center",
                                                            justify:
                                                              "space-around",
                                                          },
                                                          on: {
                                                            click: _vm.save,
                                                          },
                                                        },
                                                        [_vm._v("Save")]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "v-btn",
                                                        {
                                                          attrs: {
                                                            depressed: "",
                                                            color: "error",
                                                          },
                                                          on: {
                                                            click:
                                                              _vm.cancelDialog,
                                                          },
                                                        },
                                                        [_vm._v("Cancel")]
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
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-dialog",
                                    {
                                      attrs: { "max-width": "390px" },
                                      model: {
                                        value: _vm.dialogDelete,
                                        callback: function ($$v) {
                                          _vm.dialogDelete = $$v
                                        },
                                        expression: "dialogDelete",
                                      },
                                    },
                                    [
                                      _c(
                                        "v-card",
                                        [
                                          _c(
                                            "v-card-title",
                                            { staticClass: "text-h5" },
                                            [
                                              _vm._v(
                                                "Are you sure you want to delete this category?"
                                              ),
                                            ]
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
                                                  attrs: { color: "success" },
                                                  on: {
                                                    click:
                                                      _vm.deleteItemConfirm,
                                                  },
                                                },
                                                [_vm._v("OK")]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-btn",
                                                {
                                                  attrs: { color: "error" },
                                                  on: {
                                                    click: _vm.closeDelete,
                                                  },
                                                },
                                                [_vm._v("Cancel")]
                                              ),
                                              _vm._v(" "),
                                              _c("v-spacer"),
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
                            ]
                          },
                          proxy: true,
                        },
                        {
                          key: "item.created_at",
                          fn: function (ref) {
                            var item = ref.item
                            return [
                              _vm._v(
                                "  \n      " +
                                  _vm._s(
                                    _vm
                                      .moment(item.created_at)
                                      .format("MMM Do YYYY")
                                  ) +
                                  "\n            "
                              ),
                            ]
                          },
                        },
                        {
                          key: "item.cat_act",
                          fn: function (ref) {
                            var item = ref.item
                            return [
                              _c(
                                "v-icon",
                                {
                                  staticClass: "mr-2",
                                  attrs: { small: "" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.editDialog(item)
                                    },
                                  },
                                },
                                [
                                  _vm._v(
                                    "\n                mdi-pencil\n            "
                                  ),
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-icon",
                                {
                                  attrs: { small: "" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.deleteItem(item)
                                    },
                                  },
                                },
                                [
                                  _vm._v(
                                    "\n                mdi-delete\n            "
                                  ),
                                ]
                              ),
                            ]
                          },
                        },
                      ],
                      null,
                      true
                    ),
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
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/pages/crud/payment.vue":
/*!*************************************************!*\
  !*** ./resources/js/src/pages/crud/payment.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _payment_vue_vue_type_template_id_a0e69dae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment.vue?vue&type=template&id=a0e69dae& */ "./resources/js/src/pages/crud/payment.vue?vue&type=template&id=a0e69dae&");
/* harmony import */ var _payment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment.vue?vue&type=script&lang=js& */ "./resources/js/src/pages/crud/payment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _payment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _payment_vue_vue_type_template_id_a0e69dae___WEBPACK_IMPORTED_MODULE_0__["render"],
  _payment_vue_vue_type_template_id_a0e69dae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/pages/crud/payment.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/pages/crud/payment.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/src/pages/crud/payment.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_payment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./payment.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/crud/payment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_payment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/pages/crud/payment.vue?vue&type=template&id=a0e69dae&":
/*!********************************************************************************!*\
  !*** ./resources/js/src/pages/crud/payment.vue?vue&type=template&id=a0e69dae& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_payment_vue_vue_type_template_id_a0e69dae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./payment.vue?vue&type=template&id=a0e69dae& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/crud/payment.vue?vue&type=template&id=a0e69dae&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_payment_vue_vue_type_template_id_a0e69dae___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_payment_vue_vue_type_template_id_a0e69dae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);