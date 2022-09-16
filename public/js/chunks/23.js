(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{306:function(t,e,a){"use strict";a.r(e);var s={data:function(){return{recommendations:[],text:"",opt:!1,account:{}}},mounted:function(){this.getUser(),this.getRecommendation()},methods:{getUser:function(){var t=this;axios.get("/customer-api/profile").then((function(e){var a=e.data;t.account=a.profile}))},getRecommendation:function(){var t=this;axios.get("/customer-api/recommendations").then((function(e){var a=e.data;t.recommendations=a.data,console.log(a.data)}))},submit:function(){var t=this,e={text:this.text};axios.post("/customer-api/recommendations",e).then((function(e){var a=e.data;t.getRecommendation(),t.text="",t.newAlert(!0,a.type,a.message)}))}}},i=a(1),n=Object(i.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-card",{staticClass:"mx-auto",attrs:{elevation:"0","max-width":"1000"}},[a("v-card-title",[t._v("\n            Recommendation Section\n        ")]),t._v(" "),a("v-divider"),t._v(" "),a("v-card-text",[t.recommendations.length>0?a("div",[t._l(t.recommendations.slice().reverse(),(function(e){return[e.id&&e.customer_id!=t.account.id?a("div",{key:e.id,staticClass:"d-flex fb mb-4"},[a("v-avatar",{staticClass:"mr-2 mt-1",attrs:{size:"36",color:"blue-grey"}},[e.customer.images.length>0?a("v-img",{attrs:{src:"/images/customer/"+e.customer.images[0].file_name}}):a("v-icon",{attrs:{color:"white"}},[t._v("mdi-account")])],1),t._v(" "),a("v-sheet",{staticClass:"pa-2",attrs:{rounded:"",color:"grey lighten-5",elevation:"2","max-width":"100%",width:"100%"}},[a("h4",{staticClass:"d-flex justify-space-between"},[a("span",[t._v(t._s(e.customer.first_name+" "+e.customer.last_name))]),t._v(" "),a("v-menu",{attrs:{left:"",direction:"left",transition:"slide-x-reverse-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on,i=e.attrs;return[a("v-icon",t._g(t._b({},"v-icon",i,!1),s),[t._v("mdi-dots-vertical")])]}}],null,!0)},[t._v(" "),a("v-btn",{attrs:{small:""},on:{click:function(t){e.id=!1}}},[t._v("\n                                        Hide\n                                        "),a("v-icon",{staticClass:"ml-1",attrs:{small:""}},[t._v("mdi-cancel")])],1)],1)],1),t._v(" "),a("div",[1==e.status?a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on,i=e.attrs;return[a("v-icon",t._g(t._b({attrs:{small:"",color:"success"}},"v-icon",i,!1),s),[t._v("mdi-sticker-check-outline")])]}}],null,!0)},[t._v(" "),a("span",[t._v("Read by admin")])]):t._e(),t._v("\n                                "+t._s(e.recommendation)),a("br"),t._v(" "),a("span",[t._v("2022/08/16")])],1)])],1):e.id&&e.customer_id==t.account.id?a("div",{key:e.id,staticClass:"d-flex justify-end fb mb-4"},[a("v-sheet",{staticClass:"pa-2",attrs:{rounded:"",color:"green lighten-4",elevation:"2","max-width":"100%"}},[a("div",[1==e.status?a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on,i=e.attrs;return[a("v-icon",t._g(t._b({attrs:{small:"",color:"success"}},"v-icon",i,!1),s),[t._v("mdi-sticker-check-outline")])]}}],null,!0)},[t._v(" "),a("span",[t._v("Read by admin")])]):t._e(),t._v("\n                                "+t._s(e.recommendation)),a("br"),t._v(" "),a("span",[t._v("2022/08/16")])],1)]),t._v(" "),a("v-avatar",{staticClass:"ml-2 mt-1",attrs:{size:"36",color:"blue-grey"}},[e.customer.images.length>0?a("v-img",{attrs:{src:"/images/customer/"+e.customer.images[0].file_name}}):a("v-icon",{attrs:{color:"white"}},[t._v("mdi-account")])],1)],1):t._e()]})),t._v(" "),a("v-divider")],2):a("empty"),t._v(" "),a("div",{staticClass:"mt-4"},[a("v-textarea",{attrs:{label:"Recommendation","hide-details":"",dense:"",outlined:""},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}})],1)],1),t._v(" "),a("v-card-actions",[a("v-spacer"),t._v(" "),a("v-btn",{attrs:{color:"primary"},on:{click:t.submit}},[t._v("\n                Submit\n                "),a("v-icon",{staticClass:"ml-2"},[t._v("mdi-send")])],1)],1)],1),t._v(" "),a("v-snackbar",{attrs:{"multi-line":"",elevation:"12",color:t.alert.color,transition:"scroll-x-reverse-transition",top:"",right:""},model:{value:t.alert.trigger,callback:function(e){t.$set(t.alert,"trigger",e)},expression:"alert.trigger"}},[a("div",{staticClass:"d-flex justify-space-between"},[a("div",{staticClass:"mr-2"},[a("v-icon",{attrs:{large:""}},[t._v("info")]),t._v("\n        "+t._s(t.alert.text)+"\n        ")],1),t._v(" "),a("v-btn",{on:{click:function(e){t.alert.trigger=!1}}},[t._v("\n        Close\n        ")])],1)])],1)}),[],!1,null,null,null);e.default=n.exports}}]);