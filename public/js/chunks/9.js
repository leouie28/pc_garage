(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/dashboard.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/admin/dashboard.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      dashboard: {
        product: {
          item: '',
          color: 'orange',
          icon: 'mdi-desktop-classic',
          link: ''
        },
        order: {
          item: '',
          color: 'green accent-2',
          icon: 'mdi-briefcase-account-outline',
          link: ''
        },
        customer: {
          item: '',
          color: 'blue-grey',
          icon: 'mdi-account-group',
          link: ''
        },
        recommendation: {
          item: '',
          color: 'red',
          icon: 'mdi-clipboard-text-outline',
          link: ''
        }
      },
      timelineSeries: [{
        name: 'Orders',
        data: []
      }],
      timelineOptions: {
        chart: {
          type: 'area',
          redrawOnParentResize: true
        },
        title: {
          text: 'Orders of ' + this.moment().format('MMMM')
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        markers: {
          size: 7 // colors: ["#000524"],
          // strokeColor: "#00BAEC",
          // strokeWidth: 3

        },
        xaxis: {
          type: 'date',
          labels: {
            show: true,
            datetimeFormatter: {
              year: 'yyyy',
              month: "MMM 'yy",
              day: 'dd MMM'
            }
          },
          categories: []
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy'
          }
        }
      },
      donutSeries: [],
      donutOptions: {
        theme: {
          palette: 'palette3'
        },
        title: {
          text: 'Todays Order'
        },
        chart: {
          type: 'donut',
          height: '360',
          toolbar: {
            show: true
          }
        },
        labels: [],
        plotOptions: {
          pie: {
            donut: {
              size: '55%',
              labels: {
                show: true,
                total: {
                  show: true
                }
              }
            }
          }
        },
        noData: {
          text: 'No current order today!',
          align: 'center',
          verticalAlign: 'middle',
          offsetX: 0,
          offsetY: 0,
          style: {
            color: undefined,
            fontSize: '24px',
            fontFamily: undefined
          }
        }
      }
    };
  },
  created: function created() {
    this.initialize();
  },
  mounted: function mounted() {
    this.$nextTick(function () {
      window.dispatchEvent(new Event('resize'));
    }); // console.log(this.$route)
    // this.initialize()
  },
  methods: {
    initialize: function initialize() {
      this.getMonthOrders();
      this.getOrders();
      this.getStatistic();
    },
    getStatistic: function getStatistic() {
      var _this = this;

      axios.get("/admin-api/dashboard/statistic").then(function (_ref) {
        var data = _ref.data;
        _this.dashboard.product.item = data.product;
        _this.dashboard.order.item = data.order;
        _this.dashboard.customer.item = data.customer;
        _this.dashboard.recommendation.item = data.recommendation;
      });
    },
    getMonthOrders: function getMonthOrders() {
      var _this2 = this;

      axios.get("/admin-api/dashboard/month-orders").then(function (_ref2) {
        var data = _ref2.data;
        console.log(data);
        var val = [];
        var cat = [];
        Object.entries(data).forEach(function (entry) {
          var _entry = _slicedToArray(entry, 2),
              key = _entry[0],
              value = _entry[1];

          _this2.timelineSeries[0].name = 'Days';

          _this2.timelineSeries[0].data.push(parseInt(value));

          cat.push(key);
        });
        console.log(cat);
        _this2.timelineOptions.categories = cat; // this.timelineSeries[0].data = val

        console.log(_this2.timelineSeries, 'ajkfsjlslkjlksjlfk');
      });
    },
    getOrders: function getOrders() {
      var _this3 = this;

      this.donutSeries = [];
      this.donutOptions.labels = [];
      var orders = [];
      axios.get("/admin-api/dashboard/orders").then(function (_ref3) {
        var data = _ref3.data;
        data.forEach(function (prod) {
          console.log(prod.order_count, 'item');

          if (prod.order_count == null) {
            prod.order_count = '0';
          }

          _this3.donutSeries.push(parseInt(prod.order_count));

          _this3.donutOptions.labels.push(prod.name);
        });
        console.log(_this3.donutSeries);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/dashboard.vue?vue&type=template&id=3691f90a&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/admin/dashboard.vue?vue&type=template&id=3691f90a& ***!
  \*************************************************************************************************************************************************************************************************************/
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
      _c("v-subheader", [_c("h1", [_vm._v("Dashboard")])]),
      _vm._v(" "),
      _c(
        "v-col",
        [
          _c(
            "v-row",
            { attrs: { wrap: "" } },
            _vm._l(_vm.dashboard, function (data, index) {
              return _c(
                "v-col",
                { key: data.data, attrs: { md: "3", cols: "12" } },
                [
                  _c(
                    "v-card",
                    { staticClass: "rounded-lg", attrs: { elevation: "0" } },
                    [
                      _c(
                        "v-card-text",
                        {
                          staticClass:
                            "d-flex justify-space-between align-center",
                        },
                        [
                          _c(
                            "div",
                            [
                              _c("div", { staticClass: "mb-4" }, [
                                _c(
                                  "strong",
                                  { staticClass: "text-capitalize" },
                                  [_vm._v(_vm._s(index))]
                                ),
                              ]),
                              _vm._v(" "),
                              _c("v-subheader", { staticClass: "display-3" }, [
                                _vm._v(_vm._s(data.item)),
                              ]),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-sheet",
                            {
                              staticClass: "pa-5",
                              attrs: {
                                rounded: "",
                                dark: "",
                                color: data.color,
                              },
                            },
                            [
                              _c("v-icon", { attrs: { "x-large": "" } }, [
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(data.icon) +
                                    "\n                        "
                                ),
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
              )
            }),
            1
          ),
          _vm._v(" "),
          _c(
            "v-row",
            { attrs: { wrap: "" } },
            [
              _c(
                "v-col",
                { attrs: { cols: "12", md: "8" } },
                [
                  _c(
                    "v-card",
                    {
                      staticClass: "rounded-lg pa-5 pt-7",
                      attrs: { elevation: "0" },
                    },
                    [
                      _c(
                        "v-card-text",
                        [
                          _c("apexchart", {
                            attrs: {
                              type: "area",
                              height: "340",
                              options: _vm.timelineOptions,
                              series: _vm.timelineSeries,
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
              _vm._v(" "),
              _c(
                "v-col",
                { attrs: { lg: "4", cols: "12" } },
                [
                  _c(
                    "v-card",
                    {
                      staticClass: "rounded-lg pa-5 pt-7",
                      attrs: { elevation: "0" },
                    },
                    [
                      _c(
                        "v-card-text",
                        [
                          _c("apexchart", {
                            attrs: {
                              type: "donut",
                              height: "370",
                              options: _vm.donutOptions,
                              series: _vm.donutSeries,
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
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/admin/dashboard.vue":
/*!************************************************!*\
  !*** ./resources/js/pages/admin/dashboard.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dashboard_vue_vue_type_template_id_3691f90a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.vue?vue&type=template&id=3691f90a& */ "./resources/js/pages/admin/dashboard.vue?vue&type=template&id=3691f90a&");
/* harmony import */ var _dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.vue?vue&type=script&lang=js& */ "./resources/js/pages/admin/dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _dashboard_vue_vue_type_template_id_3691f90a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _dashboard_vue_vue_type_template_id_3691f90a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/admin/dashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/admin/dashboard.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/pages/admin/dashboard.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/admin/dashboard.vue?vue&type=template&id=3691f90a&":
/*!*******************************************************************************!*\
  !*** ./resources/js/pages/admin/dashboard.vue?vue&type=template&id=3691f90a& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_template_id_3691f90a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./dashboard.vue?vue&type=template&id=3691f90a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/dashboard.vue?vue&type=template&id=3691f90a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_template_id_3691f90a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_template_id_3691f90a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);