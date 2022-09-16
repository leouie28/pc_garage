(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/category/form.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/category/form.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      // dialog: false
      isEdit: false,
      datePicker: false,
      newPayload: {},
      required: [function (v) {
        return !!v || 'This field is required!';
      }],
      payload: {
        name: '',
        color: '',
        icon: ''
      }
    };
  },
  props: {
    selectedItem: {
      type: Object,
      "default": function _default() {}
    } // formDialog: {}

  },
  created: function created() {},
  methods: {
    close: function close() {
      this.isEdit = false;
      this.$emit('cancel');
      this.payload = JSON.parse(JSON.stringify(this.newPayload));
    },
    save: function save() {
      if (!this.payload.name) {
        alert('Important field need to fillup...');
      } else {
        if (this.isEdit) {
          this.$emit('update', this.payload);
        } else {
          this.$emit('save', this.payload);
        }

        this.isEdit = false;
        this.payload = JSON.parse(JSON.stringify(this.newPayload)); // console.log(this.payload)
      }
    }
  },
  watch: {
    selectedItem: {
      handler: function handler(val) {
        if (Object.keys(val).length === 0) {
          this.isEdit = false;
          return;
        }

        this.payload = JSON.parse(JSON.stringify(val));
        this.isEdit = true; // console.log(val)
      },
      deep: true,
      immediate: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/product/feedback.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/product/feedback.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_deleteDialog_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/deleteDialog.vue */ "./resources/js/components/deleteDialog.vue");
/* harmony import */ var _components_admin_category_form_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/admin/category/form.vue */ "./resources/js/components/admin/category/form.vue");
/* harmony import */ var _components_table_header_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/table-header.vue */ "./resources/js/components/table-header.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    DataForm: _components_admin_category_form_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    TableHeader: _components_table_header_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      data: {
        title: "Feedback",
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
      feedback: [],
      selectedItem: {},
      item: {},
      selected: [],
      title: "Categories",
      headers: [{
        text: "ID",
        align: "start",
        sortable: true,
        value: "id"
      }, {
        text: "Customer",
        align: "start",
        sortable: true,
        value: "customer"
      }, {
        text: "Feedback",
        align: "start",
        sortable: true,
        value: "text"
      }, {
        text: "Rate",
        align: "start",
        sortable: false,
        value: "rating"
      }, {
        text: "Date Added",
        align: "start",
        sortable: false,
        value: "created_at"
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
      params = params + '&product=' + this.$route.params.id;
      axios.get("/admin-api/admin-feedback?".concat(params)).then(function (_ref) {
        var data = _ref.data;
        _this.feedback = data.data;
        _this.total = data.total;
        _this.data.isFetching = false;
      });
    },
    editItem: function editItem(val) {
      // console.log(this.alert.trigger,'trigger')
      this.selectedItem = val;
      this.showForm = true;
    },
    save: function save(payload) {
      var _this2 = this;

      axios.post("/admin-api/category", payload).then(function (_ref2) {
        var data = _ref2.data;

        _this2.fetchPage();

        _this2.newAlert(true, data.type, data.message);
      })["finally"](function () {
        _this2.showForm = false;
        _this2.payload = {};
      });
    },
    update: function update(payload) {
      var _this3 = this;

      axios.put("/admin-api/category/".concat(this.selectedItem.id), payload).then(function (_ref3) {
        var data = _ref3.data;
        _this3.showForm = false;

        _this3.fetchPage();

        _this3.newAlert(true, data.type, data.message);

        _this3.payload = {};
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
      this.item = {
        id: val.id,
        text: val.name,
        model: 'category'
      };
      this.deleteForm = true;
    },
    confirm: function confirm() {
      var _this4 = this;

      axios["delete"]("/admin-api/".concat(this.item.model, "/").concat(this.item.id)).then(function (_ref4) {
        var data = _ref4.data;
        _this4.deleteForm = false;

        _this4.fetchPage();

        _this4.newAlert(true, data.type, data.message);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/item-profile/product-profile.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/admin/item-profile/product-profile.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_admin_product_feedback_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/admin/product/feedback.vue */ "./resources/js/components/admin/product/feedback.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    Feedback: _components_admin_product_feedback_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      product: {
        images: [],
        stocks: []
      }
    };
  },
  created: function created() {
    this.show();
  },
  methods: {
    show: function show() {
      var _this = this;

      axios.get("/admin-api/product/".concat(this.$route.params.id)).then(function (_ref) {
        var data = _ref.data;
        _this.product = data;
      });
    },
    pars: function pars(val) {
      if (val) {
        return val;
      } else {
        return 0;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/category/form.vue?vue&type=template&id=03c2380c&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/category/form.vue?vue&type=template&id=03c2380c& ***!
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
            _c("span", { staticClass: "text-h5" }, [
              _vm._v("Compatibility Info"),
            ]),
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
                        { attrs: { md: "12", cols: "12" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              label: "Name*",
                              dense: "",
                              placeholder: "Set A Compatibility",
                              filled: "",
                              "hide-details": "",
                              rules: _vm.required,
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
                        { attrs: { md: "12", cols: "12" } },
                        [
                          _c("span", [
                            _vm._v("Find color "),
                            _c(
                              "a",
                              {
                                attrs: {
                                  href: "https://vuetifyjs.com/en/styles/colors/#material-colors",
                                  target: "_blank",
                                },
                              },
                              [_vm._v("here..")]
                            ),
                          ]),
                          _vm._v(" "),
                          _c("v-text-field", {
                            attrs: {
                              label: "Color (optional)",
                              dense: "",
                              placeholder: "Hex code or color name..",
                              filled: "",
                              "hide-details": "",
                            },
                            model: {
                              value: _vm.payload.color,
                              callback: function ($$v) {
                                _vm.$set(_vm.payload, "color", $$v)
                              },
                              expression: "payload.color",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { md: "12", cols: "12" } },
                        [
                          _c("span", [
                            _vm._v("Find icon "),
                            _c(
                              "a",
                              {
                                attrs: {
                                  href: "https://materialdesignicons.com",
                                  target: "_blank",
                                },
                              },
                              [_vm._v("here..")]
                            ),
                          ]),
                          _vm._v(" "),
                          _c("v-text-field", {
                            attrs: {
                              label: "Icon (optional)",
                              dense: "",
                              placeholder: "Icon name..",
                              filled: "",
                              "hide-details": "",
                            },
                            model: {
                              value: _vm.payload.icon,
                              callback: function ($$v) {
                                _vm.$set(_vm.payload, "icon", $$v)
                              },
                              expression: "payload.icon",
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/product/feedback.vue?vue&type=template&id=3fc05620&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/product/feedback.vue?vue&type=template&id=3fc05620& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
        { staticClass: "pa-2", attrs: { elevation: "0", outlined: "" } },
        [
          _c("table-header", {
            attrs: { data: _vm.data, hide: ["filter", "download", "addNew"] },
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
              items: _vm.feedback,
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
                  key: "item.customer",
                  fn: function (ref) {
                    var item = ref.item
                    return [
                      _c(
                        "v-avatar",
                        {
                          staticStyle: { border: "1px solid #ccc" },
                          attrs: { size: "35" },
                        },
                        [
                          _c("img", {
                            attrs: {
                              alt: "image",
                              src: item.customer.images.length
                                ? "/images/customer/" +
                                  item.customer.images[0].file_name
                                : "/images/default/person.png",
                            },
                          }),
                        ]
                      ),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-capitalize" }, [
                        _vm._v(_vm._s(item.customer.first_name)),
                      ]),
                    ]
                  },
                },
                {
                  key: "item.feedback",
                  fn: function (ref) {
                    var item = ref.item
                    return [
                      item.image.length > 0
                        ? _c(
                            "v-avatar",
                            {
                              staticStyle: { border: "1px solid #ccc" },
                              attrs: { size: "35" },
                            },
                            [
                              _c("img", {
                                attrs: {
                                  alt: "image",
                                  src: item.images.length
                                    ? "/images/customer/" +
                                      item.images[0].file_name
                                    : "/images/default/person.png",
                                },
                              }),
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-capitalize" }, [
                        _vm._v(_vm._s(item.feedback)),
                      ]),
                    ]
                  },
                },
                {
                  key: "item.rating",
                  fn: function (ref) {
                    var item = ref.item
                    return [
                      _c(
                        "div",
                        { staticClass: "d-flex align-center" },
                        [
                          _c("span", { staticClass: "mr-1" }, [
                            _vm._v(_vm._s(item.rating)),
                          ]),
                          _vm._v(" "),
                          _c("v-icon", { attrs: { color: "amber" } }, [
                            _vm._v("mdi-star"),
                          ]),
                        ],
                        1
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
          attrs: { persistent: "", "max-width": "500" },
          model: {
            value: _vm.showForm,
            callback: function ($$v) {
              _vm.showForm = $$v
            },
            expression: "showForm",
          },
        },
        [
          _c("data-form", {
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/item-profile/product-profile.vue?vue&type=template&id=c57d8bd8&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/admin/item-profile/product-profile.vue?vue&type=template&id=c57d8bd8& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
        "v-sheet",
        { attrs: { color: "blue-grey lighten-5" } },
        [
          _c(
            "v-card",
            { staticClass: "mx-auto", attrs: { elevation: "0" } },
            [
              _c(
                "v-card-title",
                [
                  _vm._v("\n                Product Info\n                "),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "secondary" },
                      on: {
                        click: function ($event) {
                          return _vm.$router.go(-1)
                        },
                      },
                    },
                    [
                      _c("v-icon", { staticClass: "mr-2" }, [
                        _vm._v("mdi-backspace"),
                      ]),
                      _vm._v("\n                    Back\n                "),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card-text",
                { staticClass: "py-4 pb-6" },
                [
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        {
                          staticClass: "text-center",
                          attrs: { md: "5", cols: "12" },
                        },
                        [
                          _c("v-img", {
                            staticClass: "mb-6",
                            attrs: {
                              alt: "image",
                              src: _vm.product.images.length
                                ? "/images/products/" +
                                  _vm.product.id +
                                  "/" +
                                  _vm.product.images[0].file_name
                                : "/images/default/noimage.png",
                            },
                          }),
                          _vm._v(" "),
                          _c(
                            "v-sheet",
                            {
                              staticClass: "py-2",
                              attrs: {
                                color: "primary",
                                rounded: "",
                                dark: "",
                              },
                            },
                            [
                              _c("span", { staticClass: "text-h5" }, [
                                _vm._v("Price: ₱ " + _vm._s(_vm.product.price)),
                              ]),
                            ]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "text-center mt-4" }, [
                            _c("p", { staticClass: "text-h6 my-0" }, [
                              _vm._v("Canceled: "),
                              _c("span", { staticClass: "red--text" }, [
                                _vm._v(
                                  _vm._s(
                                    _vm.pars(
                                      _vm.product
                                        .canceled_sum_order_productquantity
                                    )
                                  )
                                ),
                              ]),
                            ]),
                            _vm._v(" "),
                            _c("p", { staticClass: "text-h6 my-0" }, [
                              _vm._v("Pending: "),
                              _c("span", { staticClass: "secondary--text" }, [
                                _vm._v(
                                  _vm._s(
                                    _vm.pars(
                                      _vm.product
                                        .pending_sum_order_productquantity
                                    )
                                  )
                                ),
                              ]),
                            ]),
                            _vm._v(" "),
                            _c("p", { staticClass: "text-h6 my-0" }, [
                              _vm._v("To Deliver: "),
                              _c("span", { staticClass: "blue--text" }, [
                                _vm._v(
                                  _vm._s(
                                    _vm.pars(
                                      _vm.product
                                        .to_deliver_sum_order_productquantity
                                    )
                                  )
                                ),
                              ]),
                            ]),
                            _vm._v(" "),
                            _c("p", { staticClass: "text-h6 my-0" }, [
                              _vm._v("Sold: "),
                              _c("span", { staticClass: "green--text" }, [
                                _vm._v(
                                  _vm._s(
                                    _vm.pars(
                                      _vm.product.sold_sum_order_productquantity
                                    )
                                  )
                                ),
                              ]),
                            ]),
                          ]),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { md: "7", cols: "12" } },
                        [
                          _c(
                            "span",
                            { staticClass: "text-h4 font-weight-bold" },
                            [
                              _vm._v(
                                "\n                            " +
                                  _vm._s(_vm.product.name) +
                                  "\n                        "
                              ),
                            ]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "d-flex align-center" }, [
                            _c("h3", { staticClass: "text-uppercase" }, [
                              _vm._v("Rating:"),
                            ]),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "d-flex align-center" },
                              [
                                _c("v-rating", {
                                  attrs: {
                                    value: _vm.product.rates,
                                    readonly: "",
                                    "half-increments": "",
                                    color: "yellow darken-3",
                                    "background-color": "grey darken-1",
                                    "empty-icon": "mdi-star-outline",
                                    size: "32",
                                  },
                                }),
                                _vm._v(" "),
                                _c("h3", { staticClass: "text-h6" }, [
                                  _vm._v(
                                    "(" + _vm._s(_vm.product.rating_count) + ")"
                                  ),
                                ]),
                              ],
                              1
                            ),
                          ]),
                          _vm._v(" "),
                          _c(
                            "h3",
                            { staticClass: "text-uppercase mt-2 mb-4" },
                            [_vm._v("Description")]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-sheet",
                            {
                              staticClass: "pa-3",
                              attrs: { color: "grey lighten-3", rounded: "" },
                            },
                            [
                              _c(
                                "p",
                                {
                                  staticClass: "text-subtitle-1",
                                  staticStyle: { "font-size": "18px" },
                                },
                                [
                                  _vm._v(
                                    "\n                                " +
                                      _vm._s(_vm.product.description) +
                                      "\n                            "
                                  ),
                                ]
                              ),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "h3",
                            { staticClass: "text-uppercase mt-4 mb-2" },
                            [_vm._v("Category")]
                          ),
                          _vm._v(" "),
                          _vm._l(_vm.product.categories, function (category) {
                            return _c(
                              "v-chip",
                              {
                                key: category.id,
                                staticClass: "mr-2",
                                attrs: { color: category.color },
                              },
                              [
                                _vm._v(
                                  "\n                            " +
                                    _vm._s(category.name) +
                                    "\n                        "
                                ),
                              ]
                            )
                          }),
                          _vm._v(" "),
                          _c("v-divider", { staticClass: "mt-4 mb-4" }),
                          _vm._v(" "),
                          _c(
                            "h3",
                            { staticClass: "text-uppercase mt-4 mb-2" },
                            [_vm._v("Stock")]
                          ),
                          _vm._v(" "),
                          _vm.product.stocks.length > 0
                            ? _c(
                                "div",
                                [
                                  _vm._l(_vm.product.stocks, function (sku) {
                                    return _c(
                                      "v-sheet",
                                      {
                                        key: sku.sku,
                                        staticClass: "mb-2",
                                        attrs: { rounded: "", outlined: "" },
                                      },
                                      [
                                        _c(
                                          "v-subheader",
                                          {
                                            staticClass:
                                              "d-flex justify-space-between",
                                          },
                                          [
                                            _c("h4", [
                                              _vm._v("SKU: "),
                                              _c(
                                                "span",
                                                { staticClass: "blue--text" },
                                                [_vm._v(_vm._s(sku.sku))]
                                              ),
                                            ]),
                                            _vm._v(" "),
                                            _c("h4", [
                                              _vm._v("Current Stocks: "),
                                              _c(
                                                "span",
                                                { staticClass: "blue--text" },
                                                [_vm._v(_vm._s(sku.stocks))]
                                              ),
                                            ]),
                                          ]
                                        ),
                                      ],
                                      1
                                    )
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "v-sheet",
                                    {
                                      staticClass: "text-center pa-2",
                                      attrs: {
                                        color: "secondary",
                                        dark: "",
                                        rounded: "",
                                      },
                                    },
                                    [
                                      _c("span", { staticClass: "text-h5" }, [
                                        _vm._v(
                                          "Total stock: " +
                                            _vm._s(
                                              _vm.pars(
                                                _vm.product
                                                  .stocks_sum_stocksstocks
                                              )
                                            )
                                        ),
                                      ]),
                                    ]
                                  ),
                                ],
                                2
                              )
                            : _c(
                                "v-sheet",
                                {
                                  staticClass: "text-center pa-3",
                                  attrs: {
                                    color: "red",
                                    dark: "",
                                    rounded: "",
                                  },
                                },
                                [_c("h2", [_vm._v("Out of stock")])]
                              ),
                        ],
                        2
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-divider", { staticClass: "my-4" }),
                  _vm._v(" "),
                  _c("Feedback", { staticClass: "ma-2" }),
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

/***/ "./resources/js/components/admin/category/form.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/admin/category/form.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form_vue_vue_type_template_id_03c2380c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.vue?vue&type=template&id=03c2380c& */ "./resources/js/components/admin/category/form.vue?vue&type=template&id=03c2380c&");
/* harmony import */ var _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/category/form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _form_vue_vue_type_template_id_03c2380c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _form_vue_vue_type_template_id_03c2380c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/category/form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/category/form.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/admin/category/form.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/category/form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/category/form.vue?vue&type=template&id=03c2380c&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/admin/category/form.vue?vue&type=template&id=03c2380c& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_03c2380c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./form.vue?vue&type=template&id=03c2380c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/category/form.vue?vue&type=template&id=03c2380c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_03c2380c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_03c2380c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/admin/product/feedback.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/admin/product/feedback.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _feedback_vue_vue_type_template_id_3fc05620___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feedback.vue?vue&type=template&id=3fc05620& */ "./resources/js/components/admin/product/feedback.vue?vue&type=template&id=3fc05620&");
/* harmony import */ var _feedback_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./feedback.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/product/feedback.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _feedback_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _feedback_vue_vue_type_template_id_3fc05620___WEBPACK_IMPORTED_MODULE_0__["render"],
  _feedback_vue_vue_type_template_id_3fc05620___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/product/feedback.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/product/feedback.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/admin/product/feedback.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_feedback_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./feedback.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/product/feedback.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_feedback_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/product/feedback.vue?vue&type=template&id=3fc05620&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/admin/product/feedback.vue?vue&type=template&id=3fc05620& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_feedback_vue_vue_type_template_id_3fc05620___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./feedback.vue?vue&type=template&id=3fc05620& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/product/feedback.vue?vue&type=template&id=3fc05620&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_feedback_vue_vue_type_template_id_3fc05620___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_feedback_vue_vue_type_template_id_3fc05620___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/admin/item-profile/product-profile.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/pages/admin/item-profile/product-profile.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _product_profile_vue_vue_type_template_id_c57d8bd8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-profile.vue?vue&type=template&id=c57d8bd8& */ "./resources/js/pages/admin/item-profile/product-profile.vue?vue&type=template&id=c57d8bd8&");
/* harmony import */ var _product_profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-profile.vue?vue&type=script&lang=js& */ "./resources/js/pages/admin/item-profile/product-profile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _product_profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _product_profile_vue_vue_type_template_id_c57d8bd8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _product_profile_vue_vue_type_template_id_c57d8bd8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/admin/item-profile/product-profile.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/admin/item-profile/product-profile.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/pages/admin/item-profile/product-profile.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_product_profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./product-profile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/item-profile/product-profile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_product_profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/admin/item-profile/product-profile.vue?vue&type=template&id=c57d8bd8&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/pages/admin/item-profile/product-profile.vue?vue&type=template&id=c57d8bd8& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_product_profile_vue_vue_type_template_id_c57d8bd8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./product-profile.vue?vue&type=template&id=c57d8bd8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/item-profile/product-profile.vue?vue&type=template&id=c57d8bd8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_product_profile_vue_vue_type_template_id_c57d8bd8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_product_profile_vue_vue_type_template_id_c57d8bd8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);