(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/order.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/admin/order.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_table_header_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/table-header.vue */ "./resources/js/components/table-header.vue");
/* harmony import */ var _components_admin_order_form_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/admin/order/form.vue */ "./resources/js/components/admin/order/form.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    OrderForm: _components_admin_order_form_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    TableHeader: _components_table_header_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      data: {
        title: "Orders",
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
      orders: [],
      selected: [],
      title: 'Orders',
      headers: [{
        text: 'ID',
        align: 'start',
        sortable: true,
        value: 'id'
      }, {
        text: 'Customer',
        align: 'start',
        sortable: true,
        value: 'customer'
      }, {
        text: 'Product',
        align: 'start',
        sortable: true,
        value: 'products'
      }, {
        text: 'Note',
        align: 'start',
        sortable: true,
        value: 'note'
      }, {
        text: 'Date Order',
        align: 'start',
        sortable: true,
        value: 'created_at'
      }, {
        text: 'Arrival',
        align: 'start',
        sortable: true,
        value: 'arrival'
      }, {
        text: 'Total',
        align: 'start',
        sortable: true,
        value: 'total'
      }, {
        text: 'Status',
        align: 'start',
        sortable: true,
        value: 'status'
      }, {
        text: 'Action',
        align: 'start',
        sortable: true,
        value: 'action'
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
      axios.get("/admin-api/order?".concat(params)).then(function (_ref) {
        var data = _ref.data;
        _this.orders = data.data;
        _this.total = data.total;
        _this.data.isFetching = false;
      });
    },
    // initialize () {
    //   this.getOrder()
    // },
    // getOrder() {
    //   axios.get(`/admin-api/order`).then(({data})=>{
    //     this.orders = data
    //     console.log(data)
    //   })
    // },
    save: function save(payload) {
      var _this2 = this;

      axios.post("/admin-api/order", payload).then(function (_ref2) {
        var data = _ref2.data;

        _this2.fetchPage();
      })["finally"](function () {
        _this2.showForm = false;
        _this2.payload = null;
      });
    },
    // save(payload) {
    //   console.log(payload)
    //   axios.post(`/admin-api/order`, payload).then(({data})=>{
    //     console.log(data)
    //   })
    //   this.initialize()
    //   this.showForm = false
    // },
    status: function status(val) {
      if (val == 0) {
        return {
          text: 'Canceled',
          color: 'error'
        };
      } else if (val == 1) {
        return {
          text: 'Pending',
          color: 'blue-grey lighten-3'
        };
      } else if (val == 2) {
        return {
          text: 'Confirmed',
          color: 'primary'
        };
      } else if (val == 3) {
        return {
          text: 'On Delivery',
          color: 'orange'
        };
      } else if (val == 4) {
        return {
          text: 'Delivered',
          color: 'success'
        };
      }
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/order.vue?vue&type=template&id=5c319a96&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/admin/order.vue?vue&type=template&id=5c319a96& ***!
  \*********************************************************************************************************************************************************************************************************/
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
              items: _vm.orders,
              "max-height": "100%",
              search: _vm.data.keyword,
              loading: _vm.data.isFetching,
              "server-items-length": _vm.total,
              "single-select": false,
              "show-select": "",
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
                  key: "item.customer",
                  fn: function (ref) {
                    var item = ref.item
                    return [
                      _vm._v(
                        "\n        " +
                          _vm._s(
                            item.customer.first_name +
                              " " +
                              item.customer.last_name
                          ) +
                          " \n      "
                      ),
                    ]
                  },
                },
                {
                  key: "item.products",
                  fn: function (ref) {
                    var item = ref.item
                    return _vm._l(item.products, function (product) {
                      return _c(
                        "v-chip",
                        {
                          key: product.id,
                          staticClass: "px-1",
                          attrs: {
                            small: "",
                            label: "",
                            outlined: "",
                            color: "primary",
                          },
                        },
                        [
                          _vm._v(
                            "\n         (" +
                              _vm._s(product.pivot.quantity) +
                              ") " +
                              _vm._s(product.name) +
                              "\n        "
                          ),
                        ]
                      )
                    })
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
                  key: "item.arrival",
                  fn: function (ref) {
                    var item = ref.item
                    return [
                      _vm._v(
                        "\n        " +
                          _vm._s(
                            _vm.moment(item.arrival).format("MMMM DD YYYY")
                          ) +
                          "\n      "
                      ),
                    ]
                  },
                },
                {
                  key: "item.total",
                  fn: function (ref) {
                    var item = ref.item
                    return [
                      _vm._v("\n        ₱ " + _vm._s(item.total) + "\n      "),
                    ]
                  },
                },
                {
                  key: "item.status",
                  fn: function (ref) {
                    var item = ref.item
                    return [
                      _c(
                        "v-chip",
                        {
                          attrs: {
                            small: "",
                            color: _vm.status(item.status).color,
                          },
                        },
                        [
                          _vm._v(
                            "\n          " +
                              _vm._s(_vm.status(item.status).text) +
                              "\n        "
                          ),
                        ]
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
        [_c("order-form", { on: { cancel: _vm.close, save: _vm.save } })],
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



/***/ }),

/***/ "./resources/js/pages/admin/order.vue":
/*!********************************************!*\
  !*** ./resources/js/pages/admin/order.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _order_vue_vue_type_template_id_5c319a96___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order.vue?vue&type=template&id=5c319a96& */ "./resources/js/pages/admin/order.vue?vue&type=template&id=5c319a96&");
/* harmony import */ var _order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order.vue?vue&type=script&lang=js& */ "./resources/js/pages/admin/order.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _order_vue_vue_type_template_id_5c319a96___WEBPACK_IMPORTED_MODULE_0__["render"],
  _order_vue_vue_type_template_id_5c319a96___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/admin/order.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/admin/order.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/pages/admin/order.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./order.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/order.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/admin/order.vue?vue&type=template&id=5c319a96&":
/*!***************************************************************************!*\
  !*** ./resources/js/pages/admin/order.vue?vue&type=template&id=5c319a96& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_order_vue_vue_type_template_id_5c319a96___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./order.vue?vue&type=template&id=5c319a96& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/order.vue?vue&type=template&id=5c319a96&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_order_vue_vue_type_template_id_5c319a96___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_order_vue_vue_type_template_id_5c319a96___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);