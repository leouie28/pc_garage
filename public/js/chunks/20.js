(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{14:function(t,e,a){"use strict";var r,n=a(11),s=a(4);function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,r=new Array(e);a<e;a++)r[a]=t[a];return r}s.c.register.apply(s.c,function(t){if(Array.isArray(t))return o(t)}(r=s.j)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(r)||function(t,e){if(t){if("string"==typeof t)return o(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?o(t,e):void 0}}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}());var i={name:"BarChart",components:{Bar:n.a},props:{chartId:{type:String,default:"bar-chart"},datasetIdKey:{type:String,default:"label"},width:{type:Number,default:400},height:{type:Number,default:800},cssClasses:{default:"",type:String},styles:{type:Object,default:function(){}},plugins:{type:Array,default:function(){return[]}},chartData:{type:Object,default:function(){}},max_value:{type:Number}},data:function(){return{chartOptions:{responsive:!0,maintainAspectRatio:!1,scales:{y:{grid:{display:!1}}}}}},created:function(){this.chartOptions.plugins={legend:{display:!1}},this.max_value&&(this.chartOptions.scales.y.max=this.max_value)}},c=a(1),l=Object(c.a)(i,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("Bar",{attrs:{"chart-options":t.chartOptions,"chart-data":t.chartData,"chart-id":t.chartId,"dataset-id-key":t.datasetIdKey,plugins:t.plugins,"css-classes":t.cssClasses,styles:t.styles,width:t.width,height:t.height}})}),[],!1,null,null,null);e.a=l.exports},15:function(t,e,a){"use strict";var r,n=a(11),s=a(4);function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,r=new Array(e);a<e;a++)r[a]=t[a];return r}s.c.register.apply(s.c,function(t){if(Array.isArray(t))return o(t)}(r=s.j)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(r)||function(t,e){if(t){if("string"==typeof t)return o(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?o(t,e):void 0}}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}());var i={name:"DonutChart",components:{Doughnut:n.b},props:{chartId:{type:String,default:"line-chart"},datasetIdKey:{type:String,default:"label"},width:{type:Number,default:400},height:{type:Number,default:400},cssClasses:{default:"",type:String},styles:{type:Object,default:function(){}},plugins:{type:Array,default:function(){return[]}},chartData:{type:Object,default:function(){}},removeLabel:{type:Boolean,default:!1}},data:function(){return{chartOptions:{responsive:!0,maintainAspectRatio:!1}}},created:function(){this.removeLabel&&(this.chartOptions.plugins={legend:{display:!1}})}},c=a(1),l=Object(c.a)(i,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("Doughnut",{attrs:{"chart-options":t.chartOptions,"chart-data":t.chartData,"chart-id":t.chartId,"dataset-id-key":t.datasetIdKey,plugins:t.plugins,"css-classes":t.cssClasses,styles:t.styles,width:t.width,height:t.height}})}),[],!1,null,null,null);e.a=l.exports},290:function(t,e,a){"use strict";a.r(e);var r,n=a(11),s=a(4);function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,r=new Array(e);a<e;a++)r[a]=t[a];return r}s.c.register.apply(s.c,function(t){if(Array.isArray(t))return o(t)}(r=s.j)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(r)||function(t,e){if(t){if("string"==typeof t)return o(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?o(t,e):void 0}}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}());var i={name:"LineChart",components:{LineChartGenerator:n.c},props:{chartId:{type:String,default:"line-chart"},datasetIdKey:{type:String,default:"label"},width:{type:Number,default:400},height:{type:Number,default:400},cssClasses:{default:"",type:String},styles:{type:Object,default:function(){}},plugins:{type:Array,default:function(){return[]}},chartData:{type:Object,default:function(){}},removeLabel:{type:Boolean,default:!1}},data:function(){return{chartOptions:{responsive:!0,maintainAspectRatio:!1}}},created:function(){this.removeLabel&&(this.chartOptions.plugins={legend:{display:!1}})}},c=a(1),l=Object(c.a)(i,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("LineChartGenerator",{attrs:{"chart-options":t.chartOptions,"chart-data":t.chartData,"chart-id":t.chartId,"dataset-id-key":t.datasetIdKey,plugins:t.plugins,"css-classes":t.cssClasses,styles:t.styles,width:t.width,height:t.height}})}),[],!1,null,null,null).exports,d=a(14),u=a(15),h={components:{LineChart:l,BarChart:d.a,DonutChart:u.a},data:function(){return{dashboard:{product:{item:"",color:"orange",icon:"mdi-desktop-classic",link:""},order:{item:"",color:"green accent-2",icon:"mdi-briefcase-account-outline",link:""},customer:{item:"",color:"blue-grey",icon:"mdi-account-group",link:""},recommendation:{item:"",color:"red",icon:"mdi-clipboard-text-outline",link:""}},customer_chart:{labels:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],datasets:[{label:"Sales",backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(255, 159, 64, 0.2)","rgba(255, 205, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(54, 162, 235, 0.2)","rgba(153, 102, 255, 0.2)","rgba(201, 203, 207, 0.2)"],borderColor:["rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(255, 205, 86)","rgb(75, 192, 192)","rgb(54, 162, 235)","rgb(153, 102, 255)","rgb(201, 203, 207)"],borderWidth:1,data:[0,0,0,0,0,0,0]}]},order_chart:{labels:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],datasets:[{label:"Orders",backgroundColor:"rgba(54, 162, 235, 0.2)",fill:!0,borderColor:"#1C3B9F",data:[0,0,0,0,0,0,0],tension:.5}]},status_chart:{labels:["Canceled","Pending","Confirmed","On Delivery","Delivered"],datasets:[{borderWidth:1,backgroundColor:["#E57373","#616161","#00B8D4","#FF9800","#4DB6AC"],data:[0,0,0,0,0]}]}}},created:function(){this.initialize()},mounted:function(){},methods:{initialize:function(){this.getDatas(),this.getStatistic(),this.checkSales()},checkSales:function(){axios.get("/admin-api/sales/check-sales").then((function(t){var e=t.data;console.log(e)}))},getStatistic:function(){var t=this;axios.get("/admin-api/dashboard/statistic").then((function(e){var a=e.data;t.dashboard.product.item=a.product,t.dashboard.order.item=a.order,t.dashboard.customer.item=a.customer,t.dashboard.recommendation.item=a.recommendation}))},getDatas:function(){var t=this;axios.get("/admin-api/dashboard/report").then((function(e){var a=e.data;t.order_chart.datasets[0].data=a.orders,t.status_chart.datasets[0].data=a.status,t.customer_chart.datasets[0].data=a.customers}))}}},p=Object(c.a)(h,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-subheader",[a("h1",[t._v("Dashboard")])]),t._v(" "),a("v-col",[a("v-row",{attrs:{wrap:""}},t._l(t.dashboard,(function(e,r){return a("v-col",{key:e.data,attrs:{md:"3",cols:"12"}},[a("v-card",{staticClass:"rounded-lg",attrs:{elevation:"0"}},[a("v-card-text",{staticClass:"d-flex justify-space-between align-center"},[a("div",[a("div",{staticClass:"mb-4"},[a("strong",{staticClass:"text-capitalize"},[t._v(t._s(r))])]),t._v(" "),a("v-subheader",{staticClass:"display-3"},[t._v(t._s(e.item))])],1),t._v(" "),a("v-sheet",{staticClass:"pa-5",attrs:{rounded:"",dark:"",color:e.color}},[a("v-icon",{attrs:{"x-large":""}},[t._v("\n                                "+t._s(e.icon)+"\n                        ")])],1)],1)],1)],1)})),1),t._v(" "),a("v-row",{attrs:{wrap:""}},[a("v-col",{attrs:{cols:"12",md:"8"}},[a("v-card",{staticClass:"rounded-lg",attrs:{elevation:"0"}},[a("v-card-title",[t._v("\n                        Orders of the week\n                    ")]),t._v(" "),a("v-card-text",[a("line-chart",{attrs:{height:300,removeLabel:!0,chartData:t.order_chart}})],1)],1)],1),t._v(" "),a("v-col",{attrs:{md:"4",cols:"12"}},[a("v-card",{staticClass:"rounded-lg",attrs:{elevation:"0"}},[a("v-card-title",[t._v("\n                        Orders status of the week\n                    ")]),t._v(" "),a("v-card-text",[a("donut-chart",{attrs:{height:300,chartData:t.status_chart}})],1)],1)],1),t._v(" "),a("v-col",{attrs:{cols:"12",md:"12"}},[a("v-card",{staticClass:"rounded-lg",attrs:{elevation:"0"}},[a("v-card-title",[t._v("\n                        New customers of the week\n                    ")]),t._v(" "),a("v-card-text",[a("bar-chart",{attrs:{height:300,chartData:t.customer_chart}})],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=p.exports}}]);