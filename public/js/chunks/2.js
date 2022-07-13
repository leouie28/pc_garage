(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

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
/* harmony import */ var _components_admin_product_form_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/admin/product/form.vue */ "./resources/js/components/admin/product/form.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    ProductForm: _components_admin_product_form_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      showForm: false,
      dialogDelete: false,
      customers: [],
      selected: [],
      title: 'Customers',
      headers: [{
        text: 'ID',
        align: 'start',
        sortable: true,
        value: 'id'
      }, {
        text: 'Name',
        align: 'start',
        sortable: true,
        value: 'name'
      }, {
        text: 'Birthday',
        align: 'start',
        sortable: true,
        value: 'birthday'
      }, {
        text: 'Address',
        align: 'start',
        sortable: true,
        value: 'address'
      }, {
        text: 'Phone',
        align: 'start',
        sortable: true,
        value: 'phone'
      }, {
        text: 'Email',
        align: 'start',
        sortable: true,
        value: 'email'
      }, {
        text: 'Orders',
        align: 'start',
        sortable: true,
        value: 'orders_count'
      }, {
        text: 'Date Added',
        align: 'start',
        sortable: true,
        value: 'created_at'
      }, {
        text: 'Action',
        align: 'start',
        sortable: true,
        value: 'action'
      }]
    };
  },
  computed: {},
  watch: {},
  created: function created() {
    this.initialize();
  },
  methods: {
    initialize: function initialize() {
      this.getProduct();
    },
    getProduct: function getProduct() {
      var _this = this;

      axios.get("/admin-api/customer").then(function (_ref) {
        var data = _ref.data;
        _this.customers = data;
        console.log(data);
      });
    },
    save: function save(payload) {
      axios.post("/admin-api/product", payload).then(function (_ref2) {
        var data = _ref2.data;
        console.log(data);
      });
      this.initialize();
      this.showForm = false;
    },
    addNew: function addNew() {
      this.showForm = true;
    },
    close: function close() {
      this.showForm = false;
    }
  }
});

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
          _c("v-data-table", {
            attrs: {
              headers: _vm.headers,
              "single-select": false,
              items: _vm.customers,
              "item-key": "name",
              "multi-sort": "",
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
                          _c("v-toolbar-title", [_vm._v(_vm._s(_vm.title))]),
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
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: { color: "success" },
                              on: { click: _vm.addNew },
                            },
                            [
                              _vm._v("\n              Add\n              "),
                              _c("v-icon", [_vm._v("mdi-plus")]),
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
                  key: "item.name",
                  fn: function (ref) {
                    var item = ref.item
                    return [
                      _vm._v(
                        "\n              " +
                          _vm._s(item.first_name) +
                          " " +
                          _vm._s(item.last_name) +
                          "\n          "
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
                        "v-icon",
                        {
                          staticClass: "mr-2",
                          attrs: { small: "" },
                          on: {
                            click: function ($event) {
                              return _vm.editItem(item)
                            },
                          },
                        },
                        [_vm._v("\n              mdi-pencil\n          ")]
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
                        [_vm._v("\n              mdi-delete\n          ")]
                      ),
                    ]
                  },
                },
                {
                  key: "no-data",
                  fn: function () {
                    return [
                      _c("div", [
                        _vm._v("\n              No Data\n          "),
                      ]),
                    ]
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
        [_c("product-form", { on: { cancel: _vm.close, save: _vm.save } })],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



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