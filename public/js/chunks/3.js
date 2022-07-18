(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/product/form.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/product/form.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      // dialog: false
      img: null,
      isEdit: false,
      newPayload: {},
      category: [],
      payload: {
        name: '',
        categories: [],
        stocks: 1,
        price: '',
        description: '',
        image: null
      }
    };
  },
  props: {
    selectedItem: {} // formDialog: {}

  },
  created: function created() {
    this.getCategory();
  },
  methods: {
    createImg: function createImg(file) {
      var _this = this;

      var reader = new FileReader();

      reader.onload = function (e) {
        _this.payload.image = e.target.result;
      };

      reader.readAsDataURL(file);
    },
    onFileChange: function onFileChange(file) {
      if (!file) {
        return;
      }

      this.createImg(file);
    },
    getCategory: function getCategory() {
      var _this2 = this;

      axios.get("/admin-api/category").then(function (_ref) {
        var data = _ref.data;
        _this2.category = data;
      });
    },
    close: function close() {
      this.$emit('cancel');
      this.isEdit = false;
      this.img = null;
      this.payload = JSON.parse(JSON.stringify(this.newPayload));
    },
    save: function save() {
      // if(!this.selectedItem){
      //     console.log('not edit')
      // }else{
      //     console.log('edit')
      // }
      // // console.log(this.img)
      this.$emit('save', this.payload);
    }
  },
  watch: {
    selectedItem: {
      handler: function handler(val) {
        var _this3 = this;

        if (Object.keys(val).length === 0) {
          this.isEdit = false;
          return;
        }

        this.payload = JSON.parse(JSON.stringify(val));
        this.img = {};
        val.images.forEach(function (elem) {
          _this3.img.name = elem.file_name;
        });
        this.isEdit = true;
        console.log(val);
      },
      depp: true,
      immediate: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/deleteDialog.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/deleteDialog.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      dialog: false
    };
  },
  props: {
    data: {}
  },
  methods: {
    cancel: function cancel() {
      this.$emit('close');
    },
    confirm: function confirm() {
      this.$emit('confirm');
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
/* harmony import */ var _components_deleteDialog_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/deleteDialog.vue */ "./resources/js/components/deleteDialog.vue");
/* harmony import */ var _components_admin_product_form_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/admin/product/form.vue */ "./resources/js/components/admin/product/form.vue");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    ProductForm: _components_admin_product_form_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    TableHeader: _components_table_header_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      alert: {
        trigger: false,
        color: '',
        text: ''
      },
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
      deleteForm: false,
      item: {},
      products: [],
      selectedItem: {},
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
        text: "Canceled",
        align: "center",
        sortable: false,
        value: "canceled"
      }, {
        text: "Pending",
        align: "center",
        sortable: false,
        value: "pending"
      }, {
        text: "To Deliver",
        align: "center",
        sortable: false,
        value: "todeliver"
      }, {
        text: "Sold",
        align: "center",
        sortable: false,
        value: "sold"
      }, {
        text: "Date Added",
        align: "start",
        sortable: true,
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
      axios.get("/admin-api/product?".concat(params)).then(function (_ref) {
        var data = _ref.data;
        _this.products = data.data;
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
      this.selectedItem = {};
      this.showForm = false;
      this.deleteForm = false;
    },
    confirm: function confirm() {
      var _this3 = this;

      axios["delete"]("/admin-api/".concat(this.item.model, "/").concat(this.item.id)).then(function (_ref3) {
        var data = _ref3.data;
        _this3.alert.color = data.type;
        _this3.alert.text = data.message;
      });
      this.deleteForm = false;
      this.fetchPage();
      setTimeout(function () {
        _this3.alert.trigger = true;
      }, 1000);
    },
    warning: function warning(val) {
      // console.log(val)
      this.item = {
        id: val.id,
        text: val.name,
        model: 'product'
      };
      this.deleteForm = true;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/product/form.vue?vue&type=template&id=717ce02f&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/product/form.vue?vue&type=template&id=717ce02f& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
            _c("span", { staticClass: "text-h5" }, [_vm._v("Product Info")]),
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
                          _c("v-text-field", {
                            attrs: {
                              label: "Name*",
                              filled: "",
                              "hide-details": "",
                              required: "",
                            },
                            model: {
                              value: _vm.payload.name,
                              callback: function ($$v) {
                                _vm.$set(_vm.payload, "name", $$v)
                              },
                              expression: "payload.name",
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
                          _c("v-autocomplete", {
                            attrs: {
                              chips: "",
                              "deletable-chips": "",
                              filled: "",
                              label: "Category",
                              "hide-details": "auto",
                              dense: "",
                              items: _vm.category,
                              "item-text": "name",
                              "item-value": "id",
                              multiple: "",
                            },
                            model: {
                              value: _vm.payload.categories,
                              callback: function ($$v) {
                                _vm.$set(_vm.payload, "categories", $$v)
                              },
                              expression: "payload.categories",
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
                              label: "Price*",
                              dense: "",
                              type: "number",
                              filled: "",
                              min: "1",
                              "hide-details": "",
                              required: "",
                            },
                            model: {
                              value: _vm.payload.price,
                              callback: function ($$v) {
                                _vm.$set(_vm.payload, "price", $$v)
                              },
                              expression: "payload.price",
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
                              label: "Stocks*",
                              dense: "",
                              type: "number",
                              filled: "",
                              min: "1",
                              "hide-details": "",
                              required: "",
                            },
                            model: {
                              value: _vm.payload.stocks,
                              callback: function ($$v) {
                                _vm.$set(_vm.payload, "stocks", $$v)
                              },
                              expression: "payload.stocks",
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
                              label: "Description",
                              "hide-details": "",
                            },
                            model: {
                              value: _vm.payload.description,
                              callback: function ($$v) {
                                _vm.$set(_vm.payload, "description", $$v)
                              },
                              expression: "payload.description",
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
                          _c("v-file-input", {
                            attrs: {
                              "show-size": _vm.isEdit ? false : true,
                              "truncate-length": "20",
                              counter: _vm.isEdit ? false : true,
                              "prepend-icon": "",
                              accept: "image/x-png,image/gif,image/jpeg",
                              label: "Image",
                              filled: "",
                              "prepend-inner-icon": "mdi-camera",
                            },
                            on: { change: _vm.onFileChange },
                            model: {
                              value: _vm.img,
                              callback: function ($$v) {
                                _vm.img = $$v
                              },
                              expression: "img",
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
                          on: { click: _vm.close },
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
                        [
                          _vm._v(
                            "\n                    " +
                              _vm._s(_vm.isEdit ? "Update" : "Create") +
                              "\n                "
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/deleteDialog.vue?vue&type=template&id=205a5dc4&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/deleteDialog.vue?vue&type=template&id=205a5dc4& ***!
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
    "div",
    [
      _c(
        "v-card",
        [
          _c("v-card-title", { staticClass: "text-h5" }, [
            _vm._v("\n            Delete "),
            _c("span", { staticClass: "ml-2 text-capitalize" }, [
              _vm._v(_vm._s(_vm.data.model)),
            ]),
            _vm._v("!\n        "),
          ]),
          _vm._v(" "),
          _c("v-card-text", [
            _c(
              "span",
              {
                staticClass: "text-subtitle-1",
                staticStyle: { size: "'30px'", "font-weight": "500" },
              },
              [
                _vm._v(
                  "\n                Are you sure you want to delete\n                "
                ),
                _c("strong", { staticClass: "red--text" }, [
                  _vm._v('"' + _vm._s(_vm.data.text) + '"'),
                ]),
                _vm._v(
                  "\n                " +
                    _vm._s(_vm.data.model) +
                    "?\n            "
                ),
              ]
            ),
          ]),
          _vm._v(" "),
          _c(
            "v-card-actions",
            { staticClass: "mr-4" },
            [
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: { elevation: "0", color: "secondary" },
                  on: { click: _vm.cancel },
                },
                [
                  _vm._v("\n            Cancel\n            "),
                  _c("v-icon", [_vm._v("mdi-close")]),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: { color: "error", elevation: "0" },
                  on: { click: _vm.confirm },
                },
                [
                  _vm._v("\n            Delete\n            "),
                  _c("v-icon", [_vm._v("mdi-delete")]),
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
                          staticClass: "mr-1 mb-1",
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
                  key: "item.canceled",
                  fn: function (ref) {
                    var item = ref.item
                    return [
                      _vm._v(
                        "\n        " +
                          _vm._s(
                            item.canceled_sum_order_productquantity == null
                              ? "0"
                              : item.canceled_sum_order_productquantity
                          ) +
                          "\n      "
                      ),
                    ]
                  },
                },
                {
                  key: "item.pending",
                  fn: function (ref) {
                    var item = ref.item
                    return [
                      _vm._v(
                        "\n        " +
                          _vm._s(
                            item.pending_sum_order_productquantity == null
                              ? "0"
                              : item.pending_sum_order_productquantity
                          ) +
                          "\n      "
                      ),
                    ]
                  },
                },
                {
                  key: "item.todeliver",
                  fn: function (ref) {
                    var item = ref.item
                    return [
                      _vm._v(
                        "\n        " +
                          _vm._s(
                            item.to_deliver_sum_order_productquantity == null
                              ? "0"
                              : item.to_deliver_sum_order_productquantity
                          ) +
                          "\n      "
                      ),
                    ]
                  },
                },
                {
                  key: "item.sold",
                  fn: function (ref) {
                    var item = ref.item
                    return [
                      _vm._v(
                        "\n        " +
                          _vm._s(
                            item.sold_sum_order_productquantity == null
                              ? "0"
                              : item.sold_sum_order_productquantity
                          ) +
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
          _c("product-form", {
            attrs: { selectedItem: _vm.selectedItem },
            on: { cancel: _vm.close, save: _vm.save },
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
            attrs: { data: _vm.item },
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

/***/ "./resources/js/components/admin/product/form.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/admin/product/form.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form_vue_vue_type_template_id_717ce02f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.vue?vue&type=template&id=717ce02f& */ "./resources/js/components/admin/product/form.vue?vue&type=template&id=717ce02f&");
/* harmony import */ var _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/product/form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _form_vue_vue_type_template_id_717ce02f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _form_vue_vue_type_template_id_717ce02f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/product/form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/product/form.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/admin/product/form.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/product/form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/product/form.vue?vue&type=template&id=717ce02f&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/admin/product/form.vue?vue&type=template&id=717ce02f& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_717ce02f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./form.vue?vue&type=template&id=717ce02f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/product/form.vue?vue&type=template&id=717ce02f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_717ce02f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_717ce02f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/deleteDialog.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/deleteDialog.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _deleteDialog_vue_vue_type_template_id_205a5dc4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deleteDialog.vue?vue&type=template&id=205a5dc4& */ "./resources/js/components/deleteDialog.vue?vue&type=template&id=205a5dc4&");
/* harmony import */ var _deleteDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deleteDialog.vue?vue&type=script&lang=js& */ "./resources/js/components/deleteDialog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _deleteDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _deleteDialog_vue_vue_type_template_id_205a5dc4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _deleteDialog_vue_vue_type_template_id_205a5dc4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/deleteDialog.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/deleteDialog.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/deleteDialog.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_deleteDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./deleteDialog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/deleteDialog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_deleteDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/deleteDialog.vue?vue&type=template&id=205a5dc4&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/deleteDialog.vue?vue&type=template&id=205a5dc4& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_deleteDialog_vue_vue_type_template_id_205a5dc4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./deleteDialog.vue?vue&type=template&id=205a5dc4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/deleteDialog.vue?vue&type=template&id=205a5dc4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_deleteDialog_vue_vue_type_template_id_205a5dc4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_deleteDialog_vue_vue_type_template_id_205a5dc4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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