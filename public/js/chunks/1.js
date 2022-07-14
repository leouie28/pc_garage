(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/customer/form.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/customer/form.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      // dialog: false
      raw: '',
      qty: 1,
      itemPrice: '',
      img: null,
      products: [],
      datePicker: false,
      customers: [],
      status: [{
        id: 0,
        text: 'Inactive'
      }, {
        id: 1,
        text: 'Active'
      }],
      gender: ['Male', 'Female', 'Hidden'],
      payload: {
        first_name: '',
        last_name: '',
        birthday: new Date().toISOString().slice(0, 7),
        genger: '',
        address: '',
        status: 1,
        phone: '',
        email: '',
        password: ''
      }
    };
  },
  props: {// formDialog: {}
  },
  created: function created() {},
  methods: {
    save: function save() {
      this.$emit('save', this.payload); // console.log(this.payload)
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/customer.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/admin/customer.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_admin_customer_form_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/admin/customer/form.vue */ "./resources/js/components/admin/customer/form.vue");
/* harmony import */ var _components_table_header_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/table-header.vue */ "./resources/js/components/table-header.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    CustomerForm: _components_admin_customer_form_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    TableHeader: _components_table_header_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      data: {
        title: "Customers",
        isFetching: false,
        keyword: "",
        filter: {}
      },
      footerPages: {
        "items-per-page-options": [5, 10, 15, 20, 30, 40, 50, 100, -1]
      },
      options: {
        itemsPerPage: 15
      },
      total: 0,
      showForm: false,
      dialogDelete: false,
      customers: [],
      selectedItem: {},
      selected: [],
      title: "Customers",
      headers: [{
        text: "ID",
        align: "start",
        sortable: true,
        value: "id"
      }, {
        text: "Name",
        align: "start",
        sortable: true,
        value: "name"
      }, {
        text: "Birthday",
        align: "start",
        sortable: false,
        value: "birthday"
      }, {
        text: "Address",
        align: "start",
        sortable: false,
        value: "address"
      }, {
        text: "Phone",
        align: "start",
        sortable: true,
        value: "phone"
      }, {
        text: "Email",
        align: "start",
        sortable: true,
        value: "email"
      }, {
        text: "Orders",
        align: "start",
        sortable: false,
        value: "orders"
      }, {
        text: "Date Joined",
        align: "start",
        sortable: false,
        value: "created_at"
      }, {
        text: "Action",
        align: "center",
        sortable: false,
        value: "action"
      }]
    };
  },
  methods: {
    viewProduct: function viewProduct() {},
    resetFilter: function resetFilter() {},
    fetchPage: function fetchPage() {
      var _this = this;

      this.data.isFetching = true;

      var params = this._createParams(this.options);

      params = params + this._createFilterParams(this.data.filter);
      if (this.data.keyword) params = params + "&keyword=" + this.data.keyword;
      axios.get("/admin-api/customer?".concat(params)).then(function (_ref) {
        var data = _ref.data;
        _this.customers = data.data;
        _this.total = data.total;
        _this.data.isFetching = false;
      });
    },
    editItem: function editItem(val) {
      this.selectedItem = val;
      this.showForm = true;
    },
    save: function save(payload) {
      var _this2 = this;

      axios.post("/admin-api/customer", payload).then(function (_ref2) {
        var data = _ref2.data;

        _this2.fetchPage();
      })["finally"](function () {
        _this2.showForm = false;
        _this2.payload = null;
      });
    },
    addNew: function addNew() {
      this.showForm = true;
    },
    close: function close() {
      this.selectedItem = {};
      this.showForm = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/customer/form.vue?vue&type=template&id=b28545cc&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/customer/form.vue?vue&type=template&id=b28545cc& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
            _c("span", { staticClass: "text-h5" }, [_vm._v("Customer Info")]),
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
                        { attrs: { md: "6", cols: "12" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              label: "First Name*",
                              dense: "",
                              filled: "",
                              "hide-details": "",
                              required: "",
                            },
                            model: {
                              value: _vm.payload.first_name,
                              callback: function ($$v) {
                                _vm.$set(_vm.payload, "first_name", $$v)
                              },
                              expression: "payload.first_name",
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
                              label: "Last Name*",
                              dense: "",
                              filled: "",
                              "hide-details": "",
                              required: "",
                            },
                            model: {
                              value: _vm.payload.last_name,
                              callback: function ($$v) {
                                _vm.$set(_vm.payload, "last_name", $$v)
                              },
                              expression: "payload.last_name",
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
                              label: "Birthday",
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
                              value: _vm.payload.birthday,
                              callback: function ($$v) {
                                _vm.$set(_vm.payload, "birthday", $$v)
                              },
                              expression: "payload.birthday",
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
                              attrs: { scrollable: "" },
                              model: {
                                value: _vm.payload.birthday,
                                callback: function ($$v) {
                                  _vm.$set(_vm.payload, "birthday", $$v)
                                },
                                expression: "payload.birthday",
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
                              label: "Gender*",
                              items: _vm.gender,
                              "item-value": "value",
                              dense: "",
                              filled: "",
                              "hide-details": "auto",
                              required: "",
                            },
                            model: {
                              value: _vm.payload.gender,
                              callback: function ($$v) {
                                _vm.$set(_vm.payload, "gender", $$v)
                              },
                              expression: "payload.gender",
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
                          _c("v-text-field", {
                            attrs: {
                              label: "Address*",
                              dense: "",
                              filled: "",
                              "hide-details": "",
                              required: "",
                            },
                            model: {
                              value: _vm.payload.address,
                              callback: function ($$v) {
                                _vm.$set(_vm.payload, "address", $$v)
                              },
                              expression: "payload.address",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { md: "8", cols: "12" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              label: "Phone Number*",
                              dense: "",
                              filled: "",
                              "hide-details": "",
                              required: "",
                            },
                            model: {
                              value: _vm.payload.phone,
                              callback: function ($$v) {
                                _vm.$set(_vm.payload, "phone", $$v)
                              },
                              expression: "payload.phone",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { md: "4", cols: "12" } },
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
                          _c("v-text-field", {
                            attrs: {
                              label: "Email*",
                              dense: "",
                              filled: "",
                              "hide-details": "",
                              required: "",
                            },
                            model: {
                              value: _vm.payload.email,
                              callback: function ($$v) {
                                _vm.$set(_vm.payload, "email", $$v)
                              },
                              expression: "payload.email",
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
                          _c("v-text-field", {
                            attrs: {
                              label: "Password*",
                              dense: "",
                              filled: "",
                              "hide-details": "",
                              required: "",
                            },
                            model: {
                              value: _vm.payload.password,
                              callback: function ($$v) {
                                _vm.$set(_vm.payload, "password", $$v)
                              },
                              expression: "payload.password",
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/customer.vue?vue&type=template&id=8b9d0572&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/admin/customer.vue?vue&type=template&id=8b9d0572& ***!
  \************************************************************************************************************************************************************************************************************/
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
        { staticClass: "pa-2", attrs: { elevation: "0" } },
        [
          _c("table-header", {
            attrs: { data: _vm.data, hide: ["filter"] },
            on: {
              addNew: _vm.addNew,
              refresh: _vm.fetchPage,
              search: _vm.fetchPage,
              resetFilters: _vm.resetFilter,
              filterRecord: _vm.fetchPage,
            },
            scopedSlots: _vm._u([
              {
                key: "custom_filter",
                fn: function () {
                  return [
                    _c("admin-filter", { attrs: { filter: _vm.data.filter } }),
                  ]
                },
                proxy: true,
              },
            ]),
          }),
          _vm._v(" "),
          _c("v-data-table", {
            staticClass: "cursor-pointer table-fix-height",
            attrs: {
              headers: _vm.headers,
              items: _vm.customers,
              "max-height": "100%",
              search: _vm.data.keyword,
              loading: _vm.data.isFetching,
              "server-items-length": _vm.total,
              "footer-props": _vm.footerPages,
              options: _vm.options,
              "items-per-page": _vm.options.itemsPerPage,
              "fixed-header": "",
            },
            on: {
              "update:options": [
                function ($event) {
                  _vm.options = $event
                },
                _vm.fetchPage,
              ],
              "click:row": _vm.viewProduct,
            },
            scopedSlots: _vm._u(
              [
                {
                  key: "item.name",
                  fn: function (ref) {
                    var item = ref.item
                    return [
                      _vm._v(
                        "\n        " +
                          _vm._s(item.first_name + " " + item.last_name) +
                          "\n      "
                      ),
                    ]
                  },
                },
                {
                  key: "item.created_at",
                  fn: function (ref) {
                    var item = ref.item
                    return [
                      _vm._v(
                        "\n        " +
                          _vm._s(
                            _vm.moment(item.created_at).format("MMMM DD YYYY")
                          ) +
                          "\n      "
                      ),
                    ]
                  },
                },
                {
                  key: "item.action",
                  fn: function (ref) {
                    var item = ref.item
                    return [
                      _c(
                        "v-btn",
                        {
                          attrs: {
                            small: "",
                            elevation: "0",
                            color: "primary",
                          },
                          on: {
                            click: function ($event) {
                              return _vm.editItem(item)
                            },
                          },
                        },
                        [_vm._v("\n          Edit\n        ")]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { small: "", elevation: "0", color: "error" },
                        },
                        [_vm._v("\n          Delete\n        ")]
                      ),
                    ]
                  },
                },
                {
                  key: "no-data",
                  fn: function () {
                    return [_c("div", [_vm._v("No Data")])]
                  },
                  proxy: true,
                },
              ],
              null,
              true
            ),
          }),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { persistent: "", "max-width": "600" },
          model: {
            value: _vm.showForm,
            callback: function ($$v) {
              _vm.showForm = $$v
            },
            expression: "showForm",
          },
        },
        [
          _c("customer-form", {
            attrs: { selectedItem: _vm.selectedItem },
            on: { cancel: _vm.close, save: _vm.save },
          }),
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

/***/ "./resources/js/components/admin/customer/form.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/admin/customer/form.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form_vue_vue_type_template_id_b28545cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.vue?vue&type=template&id=b28545cc& */ "./resources/js/components/admin/customer/form.vue?vue&type=template&id=b28545cc&");
/* harmony import */ var _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/customer/form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _form_vue_vue_type_template_id_b28545cc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _form_vue_vue_type_template_id_b28545cc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/customer/form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/customer/form.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/admin/customer/form.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/customer/form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/customer/form.vue?vue&type=template&id=b28545cc&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/admin/customer/form.vue?vue&type=template&id=b28545cc& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_b28545cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./form.vue?vue&type=template&id=b28545cc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/customer/form.vue?vue&type=template&id=b28545cc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_b28545cc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_b28545cc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/admin/customer.vue":
/*!***********************************************!*\
  !*** ./resources/js/pages/admin/customer.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _customer_vue_vue_type_template_id_8b9d0572___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customer.vue?vue&type=template&id=8b9d0572& */ "./resources/js/pages/admin/customer.vue?vue&type=template&id=8b9d0572&");
/* harmony import */ var _customer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customer.vue?vue&type=script&lang=js& */ "./resources/js/pages/admin/customer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _customer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _customer_vue_vue_type_template_id_8b9d0572___WEBPACK_IMPORTED_MODULE_0__["render"],
  _customer_vue_vue_type_template_id_8b9d0572___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/admin/customer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/admin/customer.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/pages/admin/customer.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_customer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./customer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/customer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_customer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/admin/customer.vue?vue&type=template&id=8b9d0572&":
/*!******************************************************************************!*\
  !*** ./resources/js/pages/admin/customer.vue?vue&type=template&id=8b9d0572& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_customer_vue_vue_type_template_id_8b9d0572___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./customer.vue?vue&type=template&id=8b9d0572& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/customer.vue?vue&type=template&id=8b9d0572&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_customer_vue_vue_type_template_id_8b9d0572___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_customer_vue_vue_type_template_id_8b9d0572___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);