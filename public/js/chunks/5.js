(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{159:function(t,e,a){var s=a(199);"string"==typeof s&&(s=[[t.i,s,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a(3)(s,i);s.locals&&(t.exports=s.locals)},198:function(t,e,a){"use strict";a(159)},199:function(t,e,a){(t.exports=a(2)(!1)).push([t.i,"\n.cus-border[data-v-03dea302]{\n    border-left: 1px solid #ccc;\n}\n",""])},295:function(t,e,a){"use strict";a.r(e);var s=a(5),i={data:function(){return{isEdit:!1,newPayload:{},products:[],required:[function(t){return!!t||"This field is required!"}],payload:{sku:"",product_id:"",stock:""}}},props:{profile:{}},created:function(){this.getProduct()},methods:{close:function(){this.isEdit=!1,this.$emit("cancel"),this.payload=JSON.parse(JSON.stringify(this.newPayload))},getProduct:function(){var t=this;axios.get("/admin-api/product").then((function(e){var a=e.data;t.products=a.data}))},save:function(){this.payload.product_id&&this.payload.stock?(this.$emit("save",this.payload),this.isEdit=!1,this.payload=JSON.parse(JSON.stringify(this.newPayload))):alert("Important field are required!")},disableItem:function(t){if(this.profile.products.includes(t.id))return!0}},watch:{profile:{handler:function(t){0!==Object.keys(t).length?this.payload.sku=t.sku:this.isEdit=!1},deep:!0,immediate:!0}}},o=a(1),n=Object(o.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-card",[a("v-card-title",[a("span",{staticClass:"text-h5"},[t._v("Sku Product")])]),t._v(" "),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{md:"12",cols:"12"}},[a("v-autocomplete",{attrs:{label:"Product*",items:t.products,"item-text":"name","item-value":"id",dense:"",filled:"","hide-details":"",clearable:"","item-disabled":t.disableItem,rules:t.required},scopedSlots:t._u([{key:"selection",fn:function(e){var s=e.item;return[a("v-avatar",{staticStyle:{border:"1px solid #ccc"},attrs:{size:"35"}},[s.images.length>0?a("img",{attrs:{src:"/images/products/"+s.id+"/"+s.images[0].file_name}}):a("v-icon",[t._v("mdi-camera")])],1),t._v(" "),a("span",{staticClass:"pa-2"},[t._v(t._s(s.name))])]}},{key:"item",fn:function(e){var s=e.item;return[a("v-avatar",{staticStyle:{border:"1px solid #ccc"},attrs:{size:"35"}},[s.images.length>0?a("img",{attrs:{src:"/images/products/"+s.id+"/"+s.images[0].file_name}}):a("v-icon",[t._v("mdi-camera")])],1),t._v(" "),a("span",{staticClass:"pa-2"},[t._v(t._s(s.name))])]}}]),model:{value:t.payload.product_id,callback:function(e){t.$set(t.payload,"product_id",e)},expression:"payload.product_id"}})],1),t._v(" "),a("v-col",{attrs:{md:"12",cols:"12"}},[a("v-text-field",{attrs:{label:"Stocks*",dense:"",filled:"",type:"number","hide-details":"",rules:t.required},model:{value:t.payload.stock,callback:function(e){t.$set(t.payload,"stock",e)},expression:"payload.stock"}})],1)],1),t._v(" "),a("v-row",{attrs:{justify:"end"}},[a("v-btn",{attrs:{color:"secondary"},on:{click:t.close}},[t._v("\n                    Cancel\n                ")]),t._v(" "),a("v-btn",{staticClass:"mx-2",attrs:{color:"success"},on:{click:t.save}},[t._v("\n                    Create\n                ")])],1)],1)],1),t._v(" "),a("v-card-actions",[a("v-spacer")],1)],1)],1)}),[],!1,null,null,null).exports,r={components:{DeleteDialog:s.a,StockForm:n},data:function(){return{sku:{products:[]},profile:{sku:"",products:[]},item:{},stocks:[],isLoading:!0,selectedItem:"",showForm:!1,deleteForm:!1,headers:[{text:"Product",align:"start",value:"product.name"},{text:"Current Stocks",align:"center",value:"stocks"},{text:"Add Stocks",align:"center",value:"add"},{text:"Actions",align:"center",sortable:!1,value:"action"}]}},mounted:function(){this.show()},methods:{show:function(){var t=this,e=this.$route.params.id;axios.get("/admin-api/sku-profile/".concat(e)).then((function(e){var a=e.data;t.sku=a,t.isLoading=!1,t.profile.sku=a.sku_code,a.products.forEach((function(e){t.profile.products.push(e.product_id)}))}))},addStocks:function(t){var e=this;this.isLoading=!0,axios.put("/admin-api/stock/update-sku/".concat(t.id,"?&stocks=").concat(this.stocks[t.id])).then((function(t){var a=t.data;e.stocks="",e.show(),e.newAlert(!0,a.type,a.message)}))},save:function(t){var e=this;this.showForm=!1,this.isLoading=!0,axios.post("/admin-api/stock",t).then((function(t){var a=t.data;e.show(),e.newAlert(!0,a.type,a.message)}))},addNew:function(){this.showForm=!0},close:function(){this.showForm=!1,this.deleteForm=!1},warning:function(t){this.item={id:t.id,text:t.product.name,model:"stock"},this.deleteForm=!0},confirm:function(){var t=this;this.isLoading=!0,axios.delete("/admin-api/".concat(this.item.model,"/").concat(this.item.id)).then((function(e){var a=e.data;t.deleteForm=!1,t.show(),t.newAlert(!0,a.type,a.message)}))}}},c=(a(198),Object(o.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-card",{staticClass:"pa-2",attrs:{elevation:"0"}},[a("v-card-title",[t._v("\n            Sku Info\n            "),a("v-spacer"),t._v(" "),a("v-btn",{attrs:{color:"secondary"},on:{click:function(e){return t.$router.go(-1)}}},[a("v-icon",{staticClass:"mr-2"},[t._v("mdi-backspace")]),t._v("\n                Back\n            ")],1)],1),t._v(" "),a("v-card-text",[a("v-row",[a("v-col",{attrs:{md:"4",cols:"12"}},[a("v-card",{attrs:{elevation:"0"}},[a("v-card-text",[a("div",{staticClass:"d-flex justify-space-between"},[a("div",[a("h4",[t._v("Sku Code:")]),t._v(" "),a("p",{staticClass:"text-h4 text--primary"},[t._v("\n                                        "+t._s(t.sku.sku_code)+"\n                                    ")])]),t._v(" "),a("div",[a("h4",[t._v("Date Created:")]),t._v(" "),a("span",{staticClass:"font-italic text-h6 text--primary"},[t._v("\n                                        "+t._s(t.moment(t.sku.created_at).format("MMM Do, YY"))+"\n                                    ")])])]),t._v(" "),a("h4",[t._v("Name/Supplier:")]),t._v(" "),a("div",{staticClass:"mb-4"},[a("p",{staticClass:"text-h5 text--primary"},[t._v("\n                                    "+t._s(t.sku.name)+"\n                                ")])])])],1)],1),t._v(" "),a("v-col",{staticClass:"cus-border",attrs:{md:"8",cols:"12"}},[a("v-card",{staticClass:"mb-4",attrs:{elevation:"0"}},[a("v-card-title",{staticClass:"pb-0"},[t._v("\n                            Sku Products\n                            "),a("v-spacer"),t._v(" "),a("v-btn",{attrs:{color:"success",small:""},on:{click:t.addNew}},[t._v("\n                                Add\n                                "),a("v-icon",[t._v("mdi-plus")])],1)],1),t._v(" "),a("v-card-text",{staticClass:"px-0"},[a("v-data-table",{staticClass:"px-2",attrs:{headers:t.headers,items:t.sku.products,loading:t.isLoading,"loading-text":"Fetching data...","hide-default-footer":""},scopedSlots:t._u([{key:"item.add",fn:function(e){var s=e.item;return[a("v-text-field",{staticClass:"mx-auto",staticStyle:{width:"100px"},attrs:{placeholder:"Add",outlined:"",type:"number","append-icon":"mdi-plus",min:"1",dense:"","hide-details":""},on:{"click:append":function(e){return t.addStocks(s)}},model:{value:t.stocks[s.id],callback:function(e){t.$set(t.stocks,s.id,e)},expression:"stocks[item.id]"}})]}},{key:"item.action",fn:function(e){var s=e.item;return[a("v-btn",{staticClass:"pa-2",attrs:{small:"",elevation:"0",color:"error"},on:{click:function(e){return t.warning(s)}}},[a("v-icon",{attrs:{small:""}},[t._v("mdi-trash-can")])],1)]}},{key:"no-data",fn:function(){return[a("div",[t._v("No Data")])]},proxy:!0}],null,!0)})],1)],1)],1)],1)],1)],1),t._v(" "),a("v-dialog",{attrs:{persistent:"","max-width":"500"},model:{value:t.showForm,callback:function(e){t.showForm=e},expression:"showForm"}},[a("stock-form",{attrs:{profile:t.profile},on:{cancel:t.close,save:t.save}})],1),t._v(" "),a("v-dialog",{attrs:{persistent:"",width:"500"},model:{value:t.deleteForm,callback:function(e){t.deleteForm=e},expression:"deleteForm"}},[a("delete-dialog",{attrs:{data:t.item},on:{close:t.close,confirm:t.confirm}})],1),t._v(" "),a("v-snackbar",{attrs:{"multi-line":"",elevation:"12",color:t.alert.color,transition:"scroll-x-reverse-transition",top:"",right:""},model:{value:t.alert.trigger,callback:function(e){t.$set(t.alert,"trigger",e)},expression:"alert.trigger"}},[a("div",{staticClass:"d-flex justify-space-between"},[a("div",{staticClass:"mr-2"},[a("v-icon",{attrs:{large:""}},[t._v("info")]),t._v("\n        "+t._s(t.alert.text)+"\n        ")],1),t._v(" "),a("v-btn",{on:{click:function(e){t.alert.trigger=!1}}},[t._v("\n        Close\n        ")])],1)])],1)}),[],!1,null,"03dea302",null));e.default=c.exports},5:function(t,e,a){"use strict";var s={data:function(){return{dialog:!1}},props:{data:{}},methods:{cancel:function(){this.$emit("close")},confirm:function(){this.$emit("confirm")}}},i=a(1),o=Object(i.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-card",[a("v-card-title",{staticClass:"text-h5"},[t._v("\n            Delete "),a("span",{staticClass:"ml-2 text-capitalize"},[t._v(t._s(t.data.model))]),t._v("!\n        ")]),t._v(" "),a("v-card-text",{staticClass:"text-center"},[a("span",{staticClass:"text-subtitle-1",staticStyle:{size:"'30px'","font-weight":"500"}},[t._v("\n                Are you sure you want to delete\n                "),a("strong",{staticClass:"red--text"},[t._v('"'+t._s(t.data.text)+'"')]),t._v("\n                "+t._s(t.data.model)+"?\n            ")])]),t._v(" "),a("v-card-actions",{staticClass:"mr-4"},[a("v-spacer"),t._v(" "),a("v-btn",{attrs:{elevation:"0",color:"secondary"},on:{click:t.cancel}},[t._v("\n            Cancel\n            "),a("v-icon",[t._v("mdi-close")])],1),t._v(" "),a("v-btn",{attrs:{color:"error",elevation:"0"},on:{click:t.confirm}},[t._v("\n            Delete\n            "),a("v-icon",[t._v("mdi-delete")])],1)],1)],1)],1)}),[],!1,null,null,null);e.a=o.exports}}]);