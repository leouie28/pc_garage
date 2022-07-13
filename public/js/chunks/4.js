(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/table-header.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/table-header.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    data: {
      type: Object,
      "default": function _default() {
        return {
          title: "Table Header",
          isFetching: false,
          keyword: ""
        };
      }
    },
    options: {
      type: Boolean,
      "default": function _default() {
        return false;
      }
    },
    hide: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    disable: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    searchWidth: {
      type: String
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/product.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/admin/product.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_admin_product_form_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/admin/product/form.vue */ "./resources/js/components/admin/product/form.vue");
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
//
//
//
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
    ProductForm: _components_admin_product_form_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    TableHeader: _components_table_header_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      data: {
        title: "Products",
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
      products: [],
      selected: [],
      title: "Products",
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
        text: "Category",
        align: "start",
        sortable: false,
        value: "category"
      }, {
        text: "Description",
        align: "start",
        sortable: false,
        value: "description"
      }, {
        text: "Price",
        align: "start",
        sortable: true,
        value: "price"
      }, {
        text: "Stocks",
        align: "start",
        sortable: true,
        value: "stocks"
      }, {
        text: "Sold",
        align: "start",
        sortable: false,
        value: "orders_count"
      }, {
        text: "Date Added",
        align: "start",
        sortable: true,
        value: "created_at"
      }, {
        text: "Action",
        align: "start",
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
      axios.get("/admin-api/product?".concat(params)).then(function (_ref) {
        var data = _ref.data;
        _this.products = data.data;
        _this.total = data.total;
        _this.data.isFetching = false;
      });
    },
    save: function save(payload) {
      var _this2 = this;

      axios.post("/admin-api/product", payload).then(function (_ref2) {
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
      this.showForm = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/table-header.vue?vue&type=template&id=becd3192&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/table-header.vue?vue&type=template&id=becd3192& ***!
  \***************************************************************************************************************************************************************************************************************/
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
    "v-toolbar",
    { staticClass: "mb-4", attrs: { flat: "" } },
    [
      _c(
        "div",
        { staticClass: "table-header-main-container", attrs: { cols: "12" } },
        [
          _c("v-toolbar-title", [
            _vm._v("\n            " + _vm._s(_vm.data.title) + "\n        "),
          ]),
          _vm._v(" "),
          _c("v-divider", {
            staticClass: "mx-4",
            attrs: { inset: "", vertical: "" },
          }),
          _vm._v(" "),
          !_vm.hide.includes("refresh")
            ? _c(
                "v-icon",
                {
                  on: {
                    click: function ($event) {
                      $event.stopPropagation()
                      return _vm.$emit("refresh")
                    },
                  },
                },
                [
                  _vm._v(
                    "\n            mdi-autorenew\n            " +
                      _vm._s(_vm.data.isFetching ? "mdi-spin" : "") +
                      "\n        "
                  ),
                ]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm._t("custom_details"),
          _vm._v(" "),
          _vm.options
            ? _c(
                "div",
                { staticClass: "ml-10 px-10 border rounded-full shadow-md" },
                [
                  _c(
                    "div",
                    {
                      staticClass:
                        " table-header-main-container gap-5 items-center",
                    },
                    [
                      _c(
                        "v-tooltip",
                        {
                          attrs: { bottom: "" },
                          scopedSlots: _vm._u(
                            [
                              {
                                key: "activator",
                                fn: function (ref) {
                                  var on = ref.on
                                  var attrs = ref.attrs
                                  return [
                                    _c(
                                      "v-btn",
                                      _vm._g(
                                        _vm._b(
                                          {
                                            attrs: {
                                              plain: "",
                                              icon: "",
                                              color: "red",
                                              disabled:
                                                _vm.disable.includes("delete"),
                                            },
                                            on: {
                                              click: function ($event) {
                                                $event.stopPropagation()
                                                return _vm.$emit("batchDelete")
                                              },
                                            },
                                          },
                                          "v-btn",
                                          attrs,
                                          false
                                        ),
                                        on
                                      ),
                                      [_c("v-icon", [_vm._v("mdi-delete")])],
                                      1
                                    ),
                                  ]
                                },
                              },
                            ],
                            null,
                            false,
                            2368894006
                          ),
                        },
                        [_vm._v(" "), _c("span", [_vm._v("delete selected")])]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-tooltip",
                        {
                          attrs: { bottom: "" },
                          scopedSlots: _vm._u(
                            [
                              {
                                key: "activator",
                                fn: function (ref) {
                                  var on = ref.on
                                  var attrs = ref.attrs
                                  return [
                                    !_vm.hide.includes("batchCopy")
                                      ? _c(
                                          "v-btn",
                                          _vm._g(
                                            _vm._b(
                                              {
                                                attrs: {
                                                  plain: "",
                                                  icon: "",
                                                  color: "success",
                                                },
                                                on: {
                                                  click: function ($event) {
                                                    $event.stopPropagation()
                                                    return _vm.$emit(
                                                      "batchCopy"
                                                    )
                                                  },
                                                },
                                              },
                                              "v-btn",
                                              attrs,
                                              false
                                            ),
                                            on
                                          ),
                                          [
                                            _c("v-icon", [
                                              _vm._v("mdi-content-copy"),
                                            ]),
                                          ],
                                          1
                                        )
                                      : _vm._e(),
                                  ]
                                },
                              },
                            ],
                            null,
                            false,
                            734942094
                          ),
                        },
                        [
                          _vm._v(" "),
                          _c("span", [_vm._v("duplicate selected")]),
                        ]
                      ),
                    ],
                    1
                  ),
                ]
              )
            : _vm._e(),
        ],
        2
      ),
      _vm._v(" "),
      _c("v-spacer"),
      _vm._v(" "),
      _c(
        "div",
        {
          class: "table-header-main-container items-end " + _vm.searchWidth,
          attrs: { "gap-3": "" },
        },
        [
          _c("v-spacer"),
          _vm._v(" "),
          !_vm.hide.includes("search")
            ? _c(
                "div",
                { staticClass: "table-header-search" },
                [
                  _c("v-text-field", {
                    staticClass: "mx-5 mt-5",
                    attrs: {
                      "append-icon": "mdi-magnify",
                      label: "search",
                      "single-line": "",
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
                        return _vm.$emit("search")
                      },
                      "click:append": function ($event) {
                        return _vm.$emit("search")
                      },
                    },
                    model: {
                      value: _vm.data.keyword,
                      callback: function ($$v) {
                        _vm.$set(_vm.data, "keyword", $$v)
                      },
                      expression: "data.keyword",
                    },
                  }),
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _c("div", {}, [_vm._t("custom_actions")], 2),
          _vm._v(" "),
          !_vm.hide.includes("filter")
            ? _c(
                "v-menu",
                {
                  attrs: {
                    "offset-y": "",
                    left: "",
                    "nudge-bottom": "5",
                    "close-on-content-click": false,
                  },
                  scopedSlots: _vm._u(
                    [
                      {
                        key: "activator",
                        fn: function (ref) {
                          var menu = ref.on
                          var attrs = ref.attrs
                          return [
                            _c(
                              "v-tooltip",
                              {
                                attrs: { color: "success", bottom: "" },
                                scopedSlots: _vm._u(
                                  [
                                    {
                                      key: "activator",
                                      fn: function (ref) {
                                        var tooltip = ref.on
                                        return [
                                          !_vm.hide.includes("filter")
                                            ? _c(
                                                "v-btn",
                                                _vm._g(
                                                  _vm._b(
                                                    {
                                                      attrs: {
                                                        fab: "",
                                                        tile: "",
                                                        color: "success",
                                                      },
                                                      on: {
                                                        click: function (
                                                          $event
                                                        ) {
                                                          $event.stopPropagation()
                                                          _vm.drawer = true
                                                        },
                                                      },
                                                    },
                                                    "v-btn",
                                                    attrs,
                                                    false
                                                  ),
                                                  Object.assign(
                                                    {},
                                                    tooltip,
                                                    menu
                                                  )
                                                ),
                                                [
                                                  _c("v-icon", [
                                                    _vm._v(
                                                      "mdi-filter-plus-outline"
                                                    ),
                                                  ]),
                                                ],
                                                1
                                              )
                                            : _vm._e(),
                                        ]
                                      },
                                    },
                                  ],
                                  null,
                                  true
                                ),
                              },
                              [_vm._v(" "), _c("span", [_vm._v("Filter")])]
                            ),
                          ]
                        },
                      },
                    ],
                    null,
                    false,
                    3023998152
                  ),
                },
                [
                  _vm._v(" "),
                  _c(
                    "v-card",
                    { attrs: { "min-width": "300" } },
                    [
                      _c("v-card-text", [_vm._t("custom_filter")], 2),
                      _vm._v(" "),
                      _c(
                        "v-card-actions",
                        [
                          _c("v-spacer"),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: { color: "error", text: "" },
                              on: {
                                click: function ($event) {
                                  return _vm.$emit("resetFilters")
                                },
                              },
                            },
                            [
                              _vm._v(
                                "\n                       reset\n                    "
                              ),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: { color: "success", depressed: "" },
                              on: {
                                click: function ($event) {
                                  return _vm.$emit("filterRecord")
                                },
                              },
                            },
                            [
                              _vm._v(
                                "\n                        filter\n                    "
                              ),
                            ]
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
            : _vm._e(),
          _vm._v(" "),
          _c(
            "v-tooltip",
            {
              attrs: { color: "success", bottom: "" },
              scopedSlots: _vm._u([
                {
                  key: "activator",
                  fn: function (ref) {
                    var on = ref.on
                    var attrs = ref.attrs
                    return [
                      !_vm.hide.includes("addNew")
                        ? _c(
                            "v-btn",
                            _vm._g(
                              _vm._b(
                                {
                                  staticClass: "ml-3",
                                  attrs: {
                                    fab: "",
                                    tile: "",
                                    color: "success",
                                    disabled: _vm.disable.includes("addNew"),
                                  },
                                  on: {
                                    click: function ($event) {
                                      $event.stopPropagation()
                                      return _vm.$emit("addNew")
                                    },
                                  },
                                },
                                "v-btn",
                                attrs,
                                false
                              ),
                              on
                            ),
                            [_c("v-icon", [_vm._v("mdi-plus")])],
                            1
                          )
                        : _vm._e(),
                    ]
                  },
                },
              ]),
            },
            [_vm._v(" "), _c("span", [_vm._v("Add new")])]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/product.vue?vue&type=template&id=79c10816&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/admin/product.vue?vue&type=template&id=79c10816& ***!
  \***********************************************************************************************************************************************************************************************************/
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
              items: _vm.products,
              "max-height": "100%",
              "single-select": false,
              "show-select": "",
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
                      _c(
                        "v-avatar",
                        {
                          staticStyle: { border: "1px solid #ccc" },
                          attrs: { size: "35", tile: "" },
                        },
                        [
                          _c("img", {
                            attrs: {
                              alt: "image",
                              src: item.images.length
                                ? "/images/products/" +
                                  item.id +
                                  "/" +
                                  item.images[0].file_name
                                : "/images/default/noimage.png",
                            },
                          }),
                        ]
                      ),
                      _vm._v(" "),
                      _c("span", { staticClass: "pa-2 font-weight-bold" }, [
                        _vm._v(" " + _vm._s(item.name) + " "),
                      ]),
                    ]
                  },
                },
                {
                  key: "item.category",
                  fn: function (ref) {
                    var item = ref.item
                    return _vm._l(item.categories, function (category) {
                      return _c(
                        "v-chip",
                        {
                          key: category.id,
                          staticClass: "mr-1",
                          attrs: { small: "", color: category.color },
                        },
                        [
                          _vm._v(
                            "\n          " +
                              _vm._s(category.name) +
                              "\n        "
                          ),
                        ]
                      )
                    })
                  },
                },
                {
                  key: "item.price",
                  fn: function (ref) {
                    var item = ref.item
                    return [
                      _vm._v("\n        ₱ " + _vm._s(item.price) + "\n      "),
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
                        [_vm._v("\n          mdi-pencil\n        ")]
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
                        [_vm._v(" mdi-delete ")]
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

/***/ "./resources/js/components/table-header.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/table-header.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _table_header_vue_vue_type_template_id_becd3192___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./table-header.vue?vue&type=template&id=becd3192& */ "./resources/js/components/table-header.vue?vue&type=template&id=becd3192&");
/* harmony import */ var _table_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./table-header.vue?vue&type=script&lang=js& */ "./resources/js/components/table-header.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _table_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _table_header_vue_vue_type_template_id_becd3192___WEBPACK_IMPORTED_MODULE_0__["render"],
  _table_header_vue_vue_type_template_id_becd3192___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/table-header.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/table-header.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/table-header.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_table_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./table-header.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/table-header.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_table_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/table-header.vue?vue&type=template&id=becd3192&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/table-header.vue?vue&type=template&id=becd3192& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_table_header_vue_vue_type_template_id_becd3192___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./table-header.vue?vue&type=template&id=becd3192& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/table-header.vue?vue&type=template&id=becd3192&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_table_header_vue_vue_type_template_id_becd3192___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_table_header_vue_vue_type_template_id_becd3192___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/admin/product.vue":
/*!**********************************************!*\
  !*** ./resources/js/pages/admin/product.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _product_vue_vue_type_template_id_79c10816___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product.vue?vue&type=template&id=79c10816& */ "./resources/js/pages/admin/product.vue?vue&type=template&id=79c10816&");
/* harmony import */ var _product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product.vue?vue&type=script&lang=js& */ "./resources/js/pages/admin/product.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _product_vue_vue_type_template_id_79c10816___WEBPACK_IMPORTED_MODULE_0__["render"],
  _product_vue_vue_type_template_id_79c10816___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/admin/product.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/admin/product.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/pages/admin/product.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./product.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/product.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/admin/product.vue?vue&type=template&id=79c10816&":
/*!*****************************************************************************!*\
  !*** ./resources/js/pages/admin/product.vue?vue&type=template&id=79c10816& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_product_vue_vue_type_template_id_79c10816___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./product.vue?vue&type=template&id=79c10816& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/product.vue?vue&type=template&id=79c10816&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_product_vue_vue_type_template_id_79c10816___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_product_vue_vue_type_template_id_79c10816___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);