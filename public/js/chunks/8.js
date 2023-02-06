(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{162:function(t,s,a){var e=a(207);"string"==typeof e&&(e=[[t.i,e,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a(3)(e,i);e.locals&&(t.exports=e.locals)},206:function(t,s,a){"use strict";a(162)},207:function(t,s,a){(t.exports=a(2)(!1)).push([t.i,"\n.cus-rate[data-v-ddcc2ed2] .v-icon{\n    padding: 0 !important;\n    margin-top: 0 !important;\n}\n.cus-rate[data-v-ddcc2ed2]{\n    margin-top: 0 !important;\n}\n.oneline[data-v-ddcc2ed2]{\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: -webkit-box;\n    -webkit-line-clamp: 1; /* number of lines to show */\n            line-clamp: 1; \n    -webkit-box-orient: vertical;\n}\n.fb[data-v-ddcc2ed2] .cus-rate{\n    margin-top: -5px !important;\n    padding-top: 0 !important;\n}\n",""])},308:function(t,s,a){"use strict";a.r(s);a(0);var e={components:{CartCheckout:a(12).a},data:function(){return{product:{images:[],feedback:[]},isCheckout:!0,cartDialog:!1,warningDialog:!1,item:{},similar:[],data:{product_id:"",quantity:1}}},props:{selectedItem:{}},created:function(){this.show()},methods:{show:function(){var t=this,s=this.$route.params.id;axios.get("/customer-api/products/".concat(s)).then((function(s){var a=s.data;t.product=a.product,t.similar=a.similar}))},saveCart:function(t){var s=this;axios.post("/customer-api/cart",t).then((function(t){var a=t.data;s.newAlert(!0,a.type,a.message),s.cartDialog=!1,s.$emit("event")}))},addCart:function(t){this.item=t,this.isCheckout=!1,this.cartDialog=!0},checkout:function(t){this.item=t,this.isCheckout=!0,this.cartDialog=!0},pars:function(t){return t||0}},watch:{$route:{handler:function(t){t&&this.show()},immediate:!0,deep:!0}}},i=(a(206),a(1)),r=Object(i.a)(e,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"profile-prod"},[a("v-sheet",{staticClass:"prod-profile",attrs:{color:"blue-grey lighten-5"}},[a("v-card",{staticClass:"mx-auto",staticStyle:{"max-width":"1000px"}},[a("v-card-title",[t._v("\n                Product Info\n                "),a("v-spacer"),t._v(" "),a("v-btn",{attrs:{color:"secondary"},on:{click:function(s){return t.$router.go(-1)}}},[a("v-icon",{staticClass:"mr-2"},[t._v("mdi-backspace")]),t._v("\n                    Return\n                ")],1)],1),t._v(" "),a("v-card-text",{staticClass:"py-4 pb-6"},[a("v-row",[a("v-col",{staticClass:"text-center",attrs:{md:"5",cols:"12"}},[a("v-img",{staticClass:"prod-profile-img",staticStyle:{border:"1px solid #ccc"},attrs:{alt:"image",src:t.product.images.length>0?"/images/products/"+t.product.id+"/"+t.product.images[0].file_name:"/images/default/noimage.png"}})],1),t._v(" "),a("v-col",{attrs:{md:"7",cols:"12"}},[a("span",{staticClass:"text-h5 font-weight-bold"},[t._v("\n                            "+t._s(t.product.name)+"\n                        ")]),t._v(" "),a("div",{staticClass:"d-flex py-3"},[a("div",{staticClass:"text-h5 mr-2"},[t._v("Price: ₱ "+t._s(t.product.price))]),t._v(" "),a("v-chip",{attrs:{label:"",outlined:"",color:t.product.stocks_sum_stocksstocks>0?"secondary":"error"}},[t._v("\n                                Stocks: "+t._s(t.product.stocks_sum_stocksstocks>0?t.product.stocks_sum_stocksstocks:"Out of Stocks")+"\n                            ")])],1),t._v(" "),a("div",{staticClass:"d-flex justify-start flex-wrap"},[a("v-btn",{staticClass:"mb-2",attrs:{color:"secondary"},on:{click:function(s){return t.$router.push({path:"/compatibility/"+t.product.id})}}},[a("span",{staticClass:"tohide"},[t._v("Compatibility")]),t._v(" "),a("span",{staticClass:"formobile"},[t._v("Check")]),t._v(" "),a("v-icon",{staticClass:"ml-2",attrs:{small:""}},[t._v("mdi-play")])],1),t._v(" "),a("v-btn",{staticClass:"mx-2 mb-2",attrs:{color:"primary"},on:{click:function(s){return t.addCart(t.product)}}},[a("span",{staticClass:"tohide"},[t._v("Add to")]),t._v(" Cart\n                                "),a("v-icon",{staticClass:"ml-2",attrs:{small:""}},[t._v("mdi-cart-outline")])],1),t._v(" "),a("v-btn",{staticClass:"mb-2",attrs:{disabled:!(t.product.stocks_sum_stocksstocks>0),color:"success"},on:{click:function(s){return t.checkout(t.product)}}},[t._v("\n                                Buy"),a("span",{staticClass:"tohide"},[t._v(" Now")]),t._v(" "),a("v-icon",{staticClass:"ml-2",attrs:{small:""}},[t._v("mdi-currency-php")])],1)],1),t._v(" "),a("h4",{staticClass:"text-uppercase mt-2 mb-2"},[t._v("Category:\n\n                            "),t._l(t.product.categories,(function(s){return a("v-chip",{key:s.id,staticClass:"mr-2",attrs:{small:"",color:s.color}},[t._v("\n                                "+t._s(s.name)+"\n                            ")])}))],2)])],1),t._v(" "),a("v-sheet",{staticClass:"pa-3 mt-4",attrs:{color:"grey lighten-3",rounded:""}},[a("h4",{staticClass:"text-uppercase"},[t._v("Description")]),t._v(" "),a("p",{staticClass:"text-subtitle-1",staticStyle:{"font-size":"18px"}},[t._v("\n                        "+t._s(t.product.description)+"\n                    ")])]),t._v(" "),a("v-divider",{staticClass:"mt-4"}),t._v(" "),a("v-subheader",[a("h3",[t._v("Feedback")])]),t._v(" "),t.product.feedback.length>0?a("div",t._l(t.product.feedback,(function(s){return a("div",{key:s.id,staticClass:"d-flex fb mb-3"},[a("v-avatar",{staticClass:"mr-2 mt-1",attrs:{size:"36",color:"blue-grey"}},[s.customer.images.length>0?a("v-img",{attrs:{src:"/images/customer/"+s.customer.images[0].file_name}}):a("v-icon",{attrs:{color:"white"}},[t._v("mdi-account")])],1),t._v(" "),a("v-sheet",{staticClass:"pa-2",attrs:{rounded:"",color:"grey lighten-5",elevation:"2",width:"100%"}},[a("h4",[t._v(t._s(s.CustomerName))]),t._v(" "),a("v-rating",{staticClass:"cus-rate mt-n10",attrs:{value:s.rating,"half-increments":"",readonly:"",color:"yellow darken-3","background-color":"grey darken-1","empty-icon":"mdi-star-outline",size:"16"}}),t._v(" "),a("div",[t._v("\n                                "+t._s(s.text)+"\n                                "),a("br"),t._v(" "),s.images.length>0?a("div",{staticClass:"ma-2"},[a("v-img",{attrs:{"max-width":"100","max-height":"80",src:"/images/feedback/"+s.id+"/"+s.images[0].file_name}})],1):t._e(),t._v(" "),a("span",[t._v(t._s(t.moment(s.created_at).format("YYYY/MM/DD")))])])],1)],1)})),0):a("div",{staticClass:"text-center"},[a("h3",[t._v("No feedback yet")])]),t._v(" "),a("v-divider",{staticClass:"mt-4"}),t._v(" "),a("v-subheader",[a("h3",[t._v("Recommended Products")])]),t._v(" "),a("div",{class:t.similar.length>=4?"d-flex justify-center py-2 flex-wrap":"d-flex justify-start py-2 flex-wrap"},t._l(t.similar,(function(s){return a("v-card",{key:s.id,staticClass:"mr-4 mb-4 prod",attrs:{"max-width":"200"},on:{click:function(a){return t.$router.push({path:"/product/"+s.id})}}},[a("v-img",{attrs:{height:"150",src:s.images.length>0?"/images/products/"+s.id+"/"+s.images[0].file_name:"/images/default/noimage.png"}}),t._v(" "),a("v-card-text",[a("h4",{staticClass:"oneline"},[t._v("\n                                "+t._s(s.name)+"\n                            ")]),t._v(" "),a("h3",{staticClass:"text--primary"},[t._v("\n                                ₱ "+t._s(s.price)+"\n                            ")]),t._v(" "),a("div",{staticClass:"d-flex"},[a("v-rating",{staticClass:"cus-rate mr-1",attrs:{value:s.rates,readonly:"",color:"yellow darken-3","background-color":"grey darken-1","empty-icon":"mdi-star-outline",size:"16"}}),t._v(" "),a("span",[t._v("("+t._s(s.rating_count)+")")])],1)]),t._v(" "),a("v-divider",{staticClass:"mx-2"}),t._v(" "),a("v-card-actions",[a("v-spacer"),t._v(" "),a("v-btn",{attrs:{block:"",small:"",color:"secondary"}},[t._v("\n                                View Details\n                            ")])],1)],1)})),1)],1)],1)],1),t._v(" "),a("v-dialog",{attrs:{"max-width":"800"},model:{value:t.cartDialog,callback:function(s){t.cartDialog=s},expression:"cartDialog"}},[a("cart-checkout",{attrs:{item:t.item,checkout:t.isCheckout},on:{save:t.saveCart,cancel:function(s){t.cartDialog=!1}}})],1),t._v(" "),a("v-snackbar",{attrs:{"multi-line":"",elevation:"12",color:t.alert.color,transition:"scroll-x-reverse-transition",top:"",right:""},model:{value:t.alert.trigger,callback:function(s){t.$set(t.alert,"trigger",s)},expression:"alert.trigger"}},[a("div",{staticClass:"d-flex justify-space-between"},[a("div",{staticClass:"mr-2"},[a("v-icon",{attrs:{large:""}},[t._v("info")]),t._v("\n        "+t._s(t.alert.text)+"\n        ")],1),t._v(" "),a("v-btn",{on:{click:function(s){t.alert.trigger=!1}}},[t._v("\n        Close\n        ")])],1)])],1)}),[],!1,null,"ddcc2ed2",null);s.default=r.exports}}]);