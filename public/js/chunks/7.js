(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/category.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/admin/category.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_deleteDialog_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/deleteDialog.vue */ "./resources/js/components/deleteDialog.vue");
/* harmony import */ var _components_admin_customer_form_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/admin/customer/form.vue */ "./resources/js/components/admin/customer/form.vue");
/* harmony import */ var _components_table_header_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/table-header.vue */ "./resources/js/components/table-header.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    DeleteDialog: _components_deleteDialog_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    CustomerForm: _components_admin_customer_form_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    TableHeader: _components_table_header_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      data: {
        title: "Categories",
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
      deleteForm: false,
      showForm: false,
      dialogDelete: false,
      user: {},
      categories: [],
      selectedItem: {},
      selected: [],
      title: "Categories",
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
        text: "Color",
        align: "start",
        sortable: false,
        value: "color"
      }, {
        text: "Icon",
        align: "start",
        sortable: false,
        value: "icon"
      }, {
        text: "Products",
        align: "start",
        sortable: false,
        value: "products_count"
      }, {
        text: "Date Added",
        align: "start",
        sortable: false,
        value: "created_at"
      }, {
        text: "Actions",
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
      axios.get("/admin-api/category?".concat(params)).then(function (_ref) {
        var data = _ref.data;
        _this.categories = data.data;
        _this.total = data.total;
        _this.data.isFetching = false;
      });
    },
    editItem: function editItem(val) {
      console.log(this.alert.trigger, 'trigger');
      this.selectedItem = val;
      this.showForm = true;
    },
    save: function save(payload) {
      var _this2 = this;

      axios.post("/admin-api/customer", payload).then(function (_ref2) {
        var data = _ref2.data;

        _this2.fetchPage();

        _this2.newAlert(true, data.type, data.message);
      })["finally"](function () {
        _this2.showForm = false;
        _this2.payload = null;
      });
    },
    update: function update(payload) {
      var _this3 = this;

      axios.put("/admin-api/customer/".concat(this.selectedItem.id), payload).then(function (_ref3) {
        var data = _ref3.data;
        _this3.showForm = false;

        _this3.fetchPage();

        _this3.newAlert(true, data.type, data.message);

        _this3.payload = null;
      });
    },
    addNew: function addNew() {
      this.showForm = true;
    },
    close: function close() {
      this.selectedItem = {};
      this.showForm = false;
      this.deleteForm = false;
    },
    warning: function warning(val) {
      this.user = {
        id: val.id,
        text: val.first_name + ' ' + val.last_name,
        model: 'customer'
      };
      this.deleteForm = true;
    },
    confirm: function confirm() {
      var _this4 = this;

      axios["delete"]("/admin-api/".concat(this.user.model, "/").concat(this.user.id)).then(function (_ref4) {
        var data = _ref4.data;
        _this4.deleteForm = false;

        _this4.fetchPage();

        _this4.newAlert(true, data.type, data.message);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/category.vue?vue&type=template&id=c421ab32&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/admin/category.vue?vue&type=template&id=c421ab32& ***!
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
              items: _vm.categories,
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
                  key: "item.color",
                  fn: function (ref) {
                    var item = ref.item
                    return [
                      _c(
                        "v-chip",
                        { attrs: { small: "", color: item.color } },
                        [
                          _c("span", { staticClass: "text-capitalize" }, [
                            _vm._v(_vm._s(item.color)),
                          ]),
                        ]
                      ),
                    ]
                  },
                },
                {
                  key: "item.icon",
                  fn: function (ref) {
                    var item = ref.item
                    return [
                      item.icon != null
                        ? _c(
                            "v-chip",
                            { attrs: { label: "", small: "" } },
                            [
                              _c("v-icon", [_vm._v("mdi-account")]),
                              _vm._v("\n              mdi-account\n          "),
                            ],
                            1
                          )
                        : _c("span", [_vm._v("No icon")]),
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
                          on: {
                            click: function ($event) {
                              return _vm.warning(item)
                            },
                          },
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
            on: { cancel: _vm.close, save: _vm.save, update: _vm.update },
          }),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { persistent: "", width: "500" },
          model: {
            value: _vm.deleteForm,
            callback: function ($$v) {
              _vm.deleteForm = $$v
            },
            expression: "deleteForm",
          },
        },
        [
          _c("delete-dialog", {
            attrs: { data: _vm.user },
            on: { close: _vm.close, confirm: _vm.confirm },
          }),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-snackbar",
        {
          attrs: {
            "multi-line": "",
            elevation: "12",
            color: _vm.alert.color,
            transition: "scroll-x-reverse-transition",
            top: "",
            right: "",
          },
          model: {
            value: _vm.alert.trigger,
            callback: function ($$v) {
              _vm.$set(_vm.alert, "trigger", $$v)
            },
            expression: "alert.trigger",
          },
        },
        [
          _c(
            "div",
            { staticClass: "d-flex justify-space-between" },
            [
              _c(
                "div",
                { staticClass: "mr-2" },
                [
                  _c("v-icon", { attrs: { large: "" } }, [_vm._v("info")]),
                  _vm._v("\n        " + _vm._s(_vm.alert.text) + "\n      "),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  on: {
                    click: function ($event) {
                      _vm.alert.trigger = false
                    },
                  },
                },
                [_vm._v("\n        Close\n      ")]
              ),
            ],
            1
          ),
        ]
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/admin/category.vue":
/*!***********************************************!*\
  !*** ./resources/js/pages/admin/category.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _category_vue_vue_type_template_id_c421ab32___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category.vue?vue&type=template&id=c421ab32& */ "./resources/js/pages/admin/category.vue?vue&type=template&id=c421ab32&");
/* harmony import */ var _category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category.vue?vue&type=script&lang=js& */ "./resources/js/pages/admin/category.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _category_vue_vue_type_template_id_c421ab32___WEBPACK_IMPORTED_MODULE_0__["render"],
  _category_vue_vue_type_template_id_c421ab32___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/admin/category.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/admin/category.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/pages/admin/category.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./category.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/category.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/admin/category.vue?vue&type=template&id=c421ab32&":
/*!******************************************************************************!*\
  !*** ./resources/js/pages/admin/category.vue?vue&type=template&id=c421ab32& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_template_id_c421ab32___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./category.vue?vue&type=template&id=c421ab32& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/category.vue?vue&type=template&id=c421ab32&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_template_id_c421ab32___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_template_id_c421ab32___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);