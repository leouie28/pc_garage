(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{157:function(t,e,a){var i=a(197);"string"==typeof i&&(i=[[t.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a(3)(i,r);i.locals&&(t.exports=i.locals)},196:function(t,e,a){"use strict";a(157)},197:function(t,e,a){(t.exports=a(2)(!1)).push([t.i,"\n.v-btn--example[data-v-3fa52a24] {\r\n    bottom: 0;\r\n    right: 0;\r\n    position: absolute;\r\n    margin: 0 32px 32px 0;\n}\r\n",""])},293:function(t,e,a){"use strict";a.r(e);var i=a(0),r=a.n(i),s=a(6),n={data:function(){return{raw:"",mx:"",qty:1,itemPrice:"",now:(new Date).toISOString().slice(0,10),img:null,products:[],datePicker:!1,customers:[],status:[{id:0,text:"Cancel"},{id:1,text:"Pending"},{id:2,text:"Confirm"},{id:3,text:"On Delivery"},{id:4,text:"Delivered"}],payload:{product:"",arrival:(new Date).toISOString().slice(0,10),status:2,note:"",customer:"",quantity:1,total:""},orgPayload:{arrival:(new Date).toISOString().slice(0,10),status:2,quantity:1}}},props:{},created:function(){this.getProduct(),this.getCustomer()},methods:{compute:function(t){var e=this,a="";this.products.forEach((function(i){i.id==t&&(a=i.price,e.itemPrice=a)})),this.payload.total=a*this.payload.quantity},getProduct:function(){var t=this;axios.get("/admin-api/order/get-product").then((function(e){var a=e.data;t.products=a}))},getCustomer:function(){var t=this;axios.get("/admin-api/customer").then((function(e){var a=e.data;t.customers=a.data})),this.customers.forEach((function(e){t.customers.push}))},close:function(){this.$emit("cancel"),this.payload=JSON.parse(JSON.stringify(this.orgPayload)),this.raw="",this.qty=1},save:function(){this.payload.product&&this.payload.customer?this.payload.quantity>this.mx?alert("Quantity is higher than the product stocks"):(this.$emit("save",this.payload),this.payload=JSON.parse(JSON.stringify(this.orgPayload)),this.raw="",this.qty=1):alert("Important field required to fillup.")},disableItem:function(t){if(0==t.stocks_sum_stocksstocks||null==t.stocks_sum_stocksstocks)return!0}},watch:{raw:function(t){var e=this;this.payload.product=t,this.qty=1,this.products.forEach((function(a){a.id==t&&(e.mx=parseInt(a.stocks_sum_stocksstocks))})),this.compute(t)},qty:function(t){this.payload.quantity=t,this.payload.total=t*this.itemPrice}}},l=a(1),o=Object(l.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-card",[a("v-card-title",[a("span",{staticClass:"text-h5"},[t._v("Order Info")])]),t._v(" "),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-autocomplete",{attrs:{items:t.products,"item-value":"id","item-text":"name",chips:"",clearable:"",filled:"","hide-details":"auto","item-disabled":t.disableItem,label:"Product",dense:""},scopedSlots:t._u([{key:"selection",fn:function(e){var i=e.item;return[a("v-avatar",{staticStyle:{border:"1px solid #ccc"},attrs:{size:"35"}},[i.images.length>0?a("img",{attrs:{src:"/images/products/"+i.id+"/"+i.images[0].file_name}}):a("v-icon",[t._v("mdi-camera")])],1),t._v(" "),a("span",{staticClass:"pa-2"},[t._v(t._s(i.name))])]}},{key:"item",fn:function(e){var i=e.item;return[a("v-avatar",{staticStyle:{border:"1px solid #ccc"},attrs:{size:"35"}},[i.images.length>0?a("img",{attrs:{src:"/images/products/"+i.id+"/"+i.images[0].file_name}}):a("v-icon",[t._v("mdi-camera")])],1),t._v(" "),a("span",{staticClass:"pa-2"},[t._v(t._s(i.name))]),t._v(" "),i.stocks_sum_stocksstocks&&"0"!=i.stocks_sum_stocksstocks?t._e():a("span",{staticClass:"red--text"},[t._v("Out of stock")])]}}]),model:{value:t.raw,callback:function(e){t.raw=e},expression:"raw"}})],1),t._v(" "),a("v-col",{attrs:{md:"6",cols:"12"}},[a("v-text-field",{attrs:{filled:"",label:"Arrival","prepend-inner-icon":"mdi-calendar",readonly:"","hide-details":""},on:{click:function(e){e.stopPropagation(),t.datePicker=!0}},model:{value:t.payload.arrival,callback:function(e){t.$set(t.payload,"arrival",e)},expression:"payload.arrival"}})],1),t._v(" "),a("v-dialog",{attrs:{persistent:"","max-width":"300"},model:{value:t.datePicker,callback:function(e){t.datePicker=e},expression:"datePicker"}},[a("v-date-picker",{attrs:{scrollable:""},model:{value:t.payload.arrival,callback:function(e){t.$set(t.payload,"arrival",e)},expression:"payload.arrival"}},[a("v-spacer"),t._v(" "),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){t.datePicker=!1}}},[t._v("\n                        Cancel\n                    ")]),t._v(" "),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){t.datePicker=!1}}},[t._v("\n                        OK\n                    ")])],1)],1),t._v(" "),a("v-col",{attrs:{md:"6",cols:"12"}},[a("v-select",{attrs:{label:"Status*",items:t.status,"item-text":"text","item-value":"id",dense:"",filled:"","hide-details":"auto",required:""},model:{value:t.payload.status,callback:function(e){t.$set(t.payload,"status",e)},expression:"payload.status"}})],1),t._v(" "),a("v-col",{attrs:{cols:"12"}},[a("v-textarea",{attrs:{filled:"",label:"Note","hide-details":""},model:{value:t.payload.note,callback:function(e){t.$set(t.payload,"note",e)},expression:"payload.note"}})],1),t._v(" "),a("v-col",{attrs:{cols:"12"}},[a("v-autocomplete",{attrs:{items:t.customers,filled:"","item-value":"id","item-text":"first_name","hide-details":"auto",label:"Customer",dense:""},scopedSlots:t._u([{key:"selection",fn:function(e){var a=e.item;return[t._v("\n                            "+t._s(a.first_name)+" "+t._s(a.last_name)+"\n                        ")]}},{key:"item",fn:function(e){var a=e.item;return[t._v("\n                            "+t._s(a.first_name)+" "+t._s(a.last_name)+"\n                        ")]}}]),model:{value:t.payload.customer,callback:function(e){t.$set(t.payload,"customer",e)},expression:"payload.customer"}})],1),t._v(" "),a("v-col",{attrs:{md:"6",cols:"12"}},[a("v-text-field",{attrs:{label:"Total*",readonly:"",dense:"",type:"number",filled:"","hide-details":"",required:""},model:{value:t.payload.total,callback:function(e){t.$set(t.payload,"total",e)},expression:"payload.total"}})],1),t._v(" "),a("v-col",{attrs:{md:"6",cols:"12"}},[a("v-text-field",{attrs:{label:"Quantity*",dense:"",type:"number",filled:"",min:"1",max:t.mx,"hide-details":"",required:""},model:{value:t.qty,callback:function(e){t.qty=e},expression:"qty"}})],1)],1),t._v(" "),a("v-row",{attrs:{justify:"end"}},[a("v-btn",{attrs:{color:"secondary"},on:{click:t.close}},[t._v("\n                    Cancel\n                ")]),t._v(" "),a("v-btn",{staticClass:"mx-2",attrs:{color:"success"},on:{click:t.save}},[t._v("\n                    Save\n                ")])],1)],1)],1),t._v(" "),a("v-card-actions",[a("v-spacer")],1)],1)],1)}),[],!1,null,null,null).exports,c={data:function(){return{menu:!1,data:{arrival:"",status:""},status:[{id:0,text:"Cancel"},{id:1,text:"Pending"},{id:2,text:"Confirm"},{id:3,text:"On Delivery"},{id:4,text:"Delivered"}]}},methods:{update:function(){this.data.arrival||this.data.status?this.$emit("confirm",this.data):alert("Please fillup at least one field...")}}},d=Object(l.a)(c,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-card",[a("v-card-title",[t._v("\n            Update Multiple Order\n        ")]),t._v(" "),a("v-card-subtitle",{staticClass:"mb-0 warning--text"},[t._v("\n            Note! This will update the selected orders, if the order has an item that does not enough of stocks, it will be ignored and proceed the next order.\n            ")]),t._v(" "),a("v-card-text",[a("div",[a("v-col",[a("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,"return-value":t.data.arrival,transition:"scale-transition","offset-y":"","min-width":"auto"},on:{"update:returnValue":function(e){return t.$set(t.data,"arrival",e)},"update:return-value":function(e){return t.$set(t.data,"arrival",e)}},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,r=e.attrs;return[a("v-text-field",t._g(t._b({attrs:{label:"Arrival","prepend-inner-icon":"mdi-calendar",readonly:"",filled:"","hide-details":"",dense:""},model:{value:t.data.arrival,callback:function(e){t.$set(t.data,"arrival",e)},expression:"data.arrival"}},"v-text-field",r,!1),i))]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[t._v(" "),a("v-date-picker",{attrs:{"no-title":"",scrollable:""},model:{value:t.data.arrival,callback:function(e){t.$set(t.data,"arrival",e)},expression:"data.arrival"}},[a("v-spacer"),t._v(" "),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){t.menu=!1}}},[t._v("\n                            Cancel\n                        ")]),t._v(" "),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){return t.$refs.menu.save(t.data.arrival)}}},[t._v("\n                            OK\n                        ")])],1)],1)],1),t._v(" "),a("v-col",[a("v-select",{attrs:{filled:"",dense:"",items:t.status,"item-value":"id","item-text":"text",label:"Status","hide-details":""},model:{value:t.data.status,callback:function(e){t.$set(t.data,"status",e)},expression:"data.status"}})],1),t._v(" "),a("v-col",[a("div",{staticClass:"d-flex justify-end"},[a("v-btn",{staticClass:"mr-2",attrs:{color:"secondary"},on:{click:function(e){return t.$emit("cancel")}}},[t._v("\n                            Cancel\n                        ")]),t._v(" "),a("v-btn",{attrs:{color:"success"},on:{click:t.update}},[t._v("\n                            Update\n                        ")])],1)])],1)])],1)],1)}),[],!1,null,null,null).exports,u=(a(222),{components:{OrderForm:o,TableHeader:s.a,multipleUpdate:d},data:function(){return{date:r()().format("MMMM DD YYYY"),data:{title:"Orders",isFetching:!1,keyword:"",filter:{}},footerPages:{"items-per-page-options":[5,10,15,20,30,40,50,100,-1]},options:{itemsPerPage:15},total:0,changeBtn:!1,showForm:!1,multiple_update:!1,dialogDelete:!1,orders:[],arriveSelected:(new Date).toISOString().slice(0,10),arrivalId:"",arrivalDatePicker:!1,itemsSelected:[],statSelected:"",statItem:[{id:0,text:"Cancel"},{id:1,text:"Pending"},{id:2,text:"Confirm"},{id:3,text:"On Delivery"},{id:4,text:"Delivered"}],selectedFilter:5,filterItem:[{id:0,text:"Cancel"},{id:1,text:"Pending"},{id:2,text:"Confirm"},{id:3,text:"On Delivery"},{id:4,text:"Delivered"},{id:5,text:"All"}],selected:[],title:"Orders",headers:[{text:"Order Code",align:"start",sortable:!0,value:"order_code"},{text:"Customer",align:"start",sortable:!0,value:"customer"},{text:"Product",align:"start",sortable:!0,value:"products"},{text:"Note",align:"start",sortable:!0,value:"note"},{text:"Date Order",align:"start",sortable:!0,value:"created_at"},{text:"Arrival",align:"center",sortable:!0,value:"arrival"},{text:"Date Received",align:"start",sortable:!0,value:"date_received"},{text:"Total",align:"start",sortable:!0,value:"total"},{text:"Status",align:"center",sortable:!1,value:"status"}]}},methods:{viewOrder:function(t){this.$router.push({path:this.$route.fullPath+"/"+t.id})},resetFilter:function(){},fetchPage:function(){var t=this;this.data.isFetching=!0;var e=this._createParams(this.options);e+=this._createFilterParams(this.data.filter),this.data.keyword&&(e=e+"&keyword="+this.data.keyword),5!=this.selectedFilter&&(e=e+"&filter="+this.selectedFilter),axios.get("/admin-api/order?".concat(e)).then((function(e){var a=e.data;t.orders=a.data,t.total=a.total,t.data.isFetching=!1}))},cusFilter:function(t){this.selectedFilter=t.id,this.fetchPage()},updateMultiple:function(t){var e=this;console.log(t),console.log(this.itemsSelected,"selected");var a={items:[]};this.itemsSelected.forEach((function(t){a.items.push(t.id)})),a.arrival=t.arrival,a.status=t.status,axios.put("/admin-api/order/group-update",a).then((function(t){var a=t.data;e.fetchPage(),e.itemsSelected=[],e.newAlert(!0,a.type,a.message)})).finally((function(){})),this.multiple_update=!1},arrivalPicker:function(t){this.arrivalDatePicker=!0,this.arrivalId=t,console.log(t)},updateStatus:function(t,e){var a=this,i={order:t,status:e};axios.put("/admin-api/order/update-status/".concat(t),i).then((function(t){var e=t.data;a.fetchPage(),a.newAlert(!0,e.type,e.message)})).finally((function(){a.showForm=!1,a.payload=null}))},updateArrival:function(t,e){var a=this;axios.put("/admin-api/order/update-arrival/".concat(t,"?arrive=").concat(e)).then((function(t){var e=t.data;a.fetchPage(),a.newAlert(!0,e.type,e.message)})).finally((function(){a.arrivalDatePicker=!1}))},save:function(t){var e=this;axios.post("/admin-api/order",t).then((function(t){var a=t.data;e.fetchPage(),e.newAlert(!0,a.type,a.message)})).finally((function(){e.showForm=!1,e.payload=null}))},close:function(){this.multiple_update=!1,this.showForm=!1},prodName:function(t){var e=[];return t.forEach((function(t,a){e.includes(t.name)||e.push(t.name)})),e},selectOption:function(){this.itemsSelected.length>0?this.changeBtn=!0:this.changeBtn=!1},arrivalStat:function(t){var e=r()();return null!=t?r()(t)>=e?"primary":"secondary":"success"},status:function(t){return 0==t?{text:"Canceled",color:"error"}:1==t?{text:"Pending",color:"secondary"}:2==t?{text:"Confirmed",color:"primary"}:3==t?{text:"On Delivery",color:"orange"}:4==t?{text:"Delivered",color:"success"}:5==t?{text:"All",color:"success"}:void 0},addNew:function(){this.showForm=!0}},watch:{}}),v=(a(196),Object(l.a)(u,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-card",{staticClass:"pa-2",attrs:{elevation:"0"}},[a("table-header",{attrs:{data:t.data,hide:["filter","download"]},on:{addNew:t.addNew,refresh:t.fetchPage,search:t.fetchPage,resetFilters:t.resetFilter,filterRecord:t.fetchPage},scopedSlots:t._u([{key:"custom_filter",fn:function(){return[a("admin-filter",{attrs:{filter:t.data.filter}})]},proxy:!0}])}),t._v(" "),a("v-data-table",{staticClass:"cursor-pointer table-fix-height",attrs:{headers:t.headers,items:t.orders,"max-height":"100%",search:t.data.keyword,loading:t.data.isFetching,"server-items-length":t.total,"item-key":"id","single-select":!1,"show-select":"","footer-props":t.footerPages,options:t.options,"items-per-page":t.options.itemsPerPage,"fixed-header":""},on:{input:function(e){return t.selectOption()},"update:options":[function(e){t.options=e},t.fetchPage],"click:row":t.viewOrder},scopedSlots:t._u([{key:"header.status",fn:function(){return[a("div",{staticClass:"d-flex justify-center align-center"},[a("span",{staticClass:"mr-2"},[t._v("Status")]),t._v(" "),a("div",{staticClass:"text-center"},[a("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,r=e.attrs;return[a("v-chip",t._g(t._b({staticClass:"mx-auto d-flex justify-center",attrs:{label:"",small:"",outlined:"",color:"secondary"}},"v-chip",r,!1),i),[a("v-icon",{attrs:{small:""}},[t._v("\n                    mdi-filter-outline\n                  ")]),t._v("\n                  "+t._s(t.status(t.selectedFilter).text)+"\n                ")],1)]}}])},[t._v(" "),a("v-list",{attrs:{dense:""}},[a("v-list-item-group",t._l(t.filterItem,(function(e){return a("v-list-item",{key:e.id,on:{click:function(a){return t.cusFilter(e)}}},[a("v-list-item-title",[t._v(t._s(e.text))])],1)})),1)],1)],1)],1)])]},proxy:!0},{key:"item.customer",fn:function(e){var a=e.item;return[t._v("\n        "+t._s(a.customer.first_name+" "+a.customer.last_name)+" \n      ")]}},{key:"item.products",fn:function(e){var i=e.item;return[i.products.length>0?a("v-chip",{staticClass:"mr-1 prod-truncate",attrs:{small:"",dark:"",color:"teal"}},[t._v("\n        "+t._s(i.products[0].name)+"\n         ")]):t._e(),t._v(" "),i.products.length>1?a("span",[t._v("+ more...")]):t._e()]}},{key:"item.created_at",fn:function(e){var a=e.item;return[t._v("\n        "+t._s(t.moment(a.created_at).format("MMMM DD YYYY"))+"\n      ")]}},{key:"item.arrival",fn:function(e){var i=e.item;return[a("v-chip",{attrs:{outlined:"",color:t.arrivalStat(i.arrival),label:""},on:{click:function(e){e.stopPropagation(),t.arrivalPicker(i.id),t.arriveSelected=i.arrival}}},[a("v-icon",{attrs:{left:"",small:""}},[t._v("\n            mdi-calendar\n          ")]),t._v(" "),i.arrival?a("span",[t._v("\n            "+t._s(t.moment(i.arrival).format("MMMM DD YYYY"))+"\n          ")]):a("span",{staticStyle:{width:"80px"}},[t._v("\n            Set Arrival\n          ")])],1)]}},{key:"item.total",fn:function(e){var a=e.item;return[t._v("\n        ₱ "+t._s(a.total)+"\n      ")]}},{key:"item.status",fn:function(e){var i=e.item;return[a("div",{staticClass:"text-center"},[a("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,s=e.attrs;return[a("v-chip",t._g(t._b({staticClass:"mx-auto d-flex justify-end",staticStyle:{width:"120px"},attrs:{color:t.status(i.status).color,label:""}},"v-chip",s,!1),r),[t._v("\n              "+t._s(t.status(i.status).text)+" \n                "),a("v-icon",[t._v("\n                  mdi-menu-down\n                ")])],1)]}}],null,!0)},[t._v(" "),a("v-list",{attrs:{dense:""}},[a("v-list-item-group",{attrs:{"v-model":t.statSelected=i.status}},t._l(t.statItem,(function(e){return a("v-list-item",{key:e.id,on:{click:function(a){return t.updateStatus(i.id,e.id)}}},[a("v-list-item-title",[t._v(t._s(e.text))])],1)})),1)],1)],1)],1)]}},{key:"no-data",fn:function(){return[a("div",[t._v("No Data")])]},proxy:!0}],null,!0),model:{value:t.itemsSelected,callback:function(e){t.itemsSelected=e},expression:"itemsSelected"}})],1),t._v(" "),a("v-fab-transition",[t.changeBtn?a("v-btn",{staticClass:"v-btn--example",attrs:{elevation:"12",large:"",color:"primary",bottom:""},on:{click:function(e){t.multiple_update=!0}}},[a("v-icon",[t._v("mdi-square-edit-outline")]),t._v("\n      Multiple Update\n    ")],1):t._e()],1),t._v(" "),a("v-dialog",{attrs:{persistent:"","max-width":"300"},model:{value:t.arrivalDatePicker,callback:function(e){t.arrivalDatePicker=e},expression:"arrivalDatePicker"}},[a("v-date-picker",{attrs:{"full-width":"",width:"340","show-adjacent-months":"",scrollable:""},model:{value:t.arriveSelected,callback:function(e){t.arriveSelected=e},expression:"arriveSelected"}},[a("v-spacer"),t._v(" "),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){t.arrivalDatePicker=!1}}},[t._v("\n          Cancel\n      ")]),t._v(" "),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){return t.updateArrival(t.arrivalId,t.arriveSelected)}}},[t._v("\n          OK\n      ")])],1)],1),t._v(" "),a("v-dialog",{attrs:{persistent:"","max-width":"600"},model:{value:t.showForm,callback:function(e){t.showForm=e},expression:"showForm"}},[a("order-form",{on:{cancel:t.close,save:t.save}})],1),t._v(" "),a("v-dialog",{attrs:{persistent:"","max-width":"500"},model:{value:t.multiple_update,callback:function(e){t.multiple_update=e},expression:"multiple_update"}},[a("multiple-update",{on:{cancel:t.close,confirm:t.updateMultiple}})],1),t._v(" "),a("v-snackbar",{attrs:{"multi-line":"",elevation:"12",color:t.alert.color,transition:"scroll-x-reverse-transition",top:"",right:""},model:{value:t.alert.trigger,callback:function(e){t.$set(t.alert,"trigger",e)},expression:"alert.trigger"}},[a("div",{staticClass:"d-flex justify-space-between"},[a("div",{staticClass:"mr-2"},[a("v-icon",{attrs:{large:""}},[t._v("info")]),t._v("\n        "+t._s(t.alert.text)+"\n      ")],1),t._v(" "),a("v-btn",{on:{click:function(e){t.alert.trigger=!1}}},[t._v("\n        Close\n      ")])],1)])],1)}),[],!1,null,"3fa52a24",null));e.default=v.exports}}]);