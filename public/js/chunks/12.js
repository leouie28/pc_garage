(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{169:function(t,e,i){var n=i(221);"string"==typeof n&&(n=[[t.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};i(3)(n,o);n.locals&&(t.exports=n.locals)},220:function(t,e,i){"use strict";i(169)},221:function(t,e,i){(t.exports=i(2)(!1)).push([t.i,"\n.mw[data-v-6db5baac] {\n    max-width: 95%;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: -webkit-box;\n    -webkit-line-clamp: 1; \n            line-clamp: 1; \n    -webkit-box-orient: vertical;\n}\n",""])},304:function(t,e,i){"use strict";i.r(e);var n={data:function(){return{items:[],key:"",timer:null,searchWait:!1}},props:{component:{type:String,default:function(){return"Component"}}},methods:{available:function(){var t=this,e=this.component;this.key.length>1&&(e=e+"&search="+this.key),axios.get("/customer-api/compatibilities/available-item?key=".concat(e)).then((function(e){var i=e.data;t.items=i}))},search:function(){var t=this;this.key.length>1&&(clearTimeout(this.timer),this.timer=setTimeout((function(){t.available()}),1e3))}},watch:{component:{handler:function(t){t&&this.available()},immediate:!0,deep:!0},key:function(t){t.length>1?this.search():this.available()}}},o=i(1);function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var s={components:{CompatibleItem:Object(o.a)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-card",[i("v-card-title",[i("span",{staticClass:"mr-2 text-uppercase primary--text"},[t._v(t._s(t.component))]),t._v("LIST\n            "),i("v-spacer"),t._v(" "),i("v-btn",{attrs:{color:"secondary",icon:""},on:{click:function(e){t.$emit("close"),t.items=[]}}},[i("v-icon",[t._v("mdi-close")])],1)],1),t._v(" "),i("v-card-text",[i("div",[i("v-text-field",{attrs:{dense:"","hide-details":"",outlined:"",placeholder:"Search "+t.component+"...","append-icon":"mdi-magnify"},on:{"click:append":t.available,keyup:t.search},model:{value:t.key,callback:function(e){t.key=e},expression:"key"}})],1),t._v(" "),i("div",[t.items.length>0?i("v-list",[t._l(t.items,(function(e){return[i("v-list-item",{key:e.id},[i("v-list-item-avatar",{attrs:{tile:""}},[i("v-img",{attrs:{src:e.images&&e.images.length>0?"/images/products/"+e.id+"/"+e.images[0].file_name:"/images/default/noimage.png"}})],1),t._v(" "),i("v-list-item-content",[i("v-list-item-title",[t._v("\n                                    "+t._s(e.name)+"\n                                ")])],1),t._v(" "),i("v-list-item-action",[i("v-btn",{attrs:{small:"",color:"success"},on:{click:function(i){t.$emit("add",e),t.$emit("close"),t.items=[]}}},[t._v("\n                                    Add\n                                    "),i("v-icon",[t._v("mdi-plus")])],1)],1)],1),t._v(" "),i("v-divider",{key:e.name})]}))],2):i("empty")],1)])],1)],1)}),[],!1,null,null,null).exports},data:function(){return{showForm:!1,warningForm:!1,checkLoader:!0,resForm:!1,resLoader:!0,count:0,disable:!0,compatible:!1,selectedComponent:"",parts:[{component:"motherboard",item:""},{component:"cpu/processor",item:""},{component:"ram/memory",item:""},{component:"hard drive/storage",item:""},{component:"power supply",item:""},{component:"case",item:""},{component:"monitor",item:""},{component:"gpu/graphics card",item:""},{component:"peripherals",item:""}],invalid_ono:[{partA:"cpu/processor",partB:"ram/memory"},{partA:"power supply",partB:"cpu/processor"}],invalid_all:["monitor","peripherals","hard drive/storage"]}},mounted:function(){this.getMainItem()},methods:{getMainItem:function(){var t=this,e=this.$route.params.id;axios.get("/customer-api/compatibilities/main-item?id=".concat(e)).then((function(e){var i=e.data;t.parts.forEach((function(t){t.component==i.categories[0].name&&(t.item=i)}))}))},addItem:function(t){var e=this;this.parts.forEach((function(i){i.component==e.selectedComponent&&(i.item=t)}))},check:function(){var t=this;if(this.warningForm=!1,this.resLoader=!0,this.resForm=!0,1==this.validateBuild()){var e=[];this.parts.forEach((function(i){t.invalid_all.includes(i.component)||e.push(i)}));var i={data:e};axios.post("/customer-api/compatibilities/check-items",i).then((function(e){var i=e.data;t.compatible=i}))}else this.compatible=!0;setTimeout((function(){t.resLoader=!1}),4e3)},validateBuild:function(){var t=this,e=0,i=[];if(this.parts.forEach((function(t){"object"===a(t.item)&&null!=t.item&&(e++,i.push(t.component))})),2==e){var n=!1;if(i[0]==this.invalid_ono[0].partA&&i[1]==this.invalid_ono[0].partB)return!1;if(i[0]==this.invalid_ono[0].partB&&i[1]==this.invalid_ono[0].partA)return!1;if(i[0]==this.invalid_ono[1].partA&&i[1]==this.invalid_ono[1].partB)return!1;if(i[0]==this.invalid_ono[1].partB&&i[1]==this.invalid_ono[1].partA)return!1;if(i.forEach((function(e){t.invalid_all.includes(e)&&(n=!0)})),n)return!1}return!0}},watch:{parts:{handler:function(t){var e=0;t.forEach((function(t){(t.item||""!=t.item)&&e++})),this.disable=!(e>1),this.count=e},immediate:!0,deep:!0}}},r=(i(220),Object(o.a)(s,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-card",{staticClass:"mx-auto",attrs:{elevation:"0","max-width":"1000"}},[i("v-card-title",[t._v("\n            Compatibility Checker\n        ")]),t._v(" "),i("v-divider"),t._v(" "),i("v-card-text",{staticClass:"pt-0"},[i("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[i("thead",[i("tr",[i("th",{staticClass:"text-left"},[t._v("\n                        Component\n                    ")]),t._v(" "),i("th",{staticClass:"text-left"},[t._v("\n                        Item\n                    ")]),t._v(" "),i("th",{staticClass:"text-center"},[t._v("\n                        Available\n                    ")])])]),t._v(" "),i("tbody",[t._l(t.parts,(function(e){return[i("tr",{key:e.component},[i("td",[i("span",{staticClass:"primary--text text-decoration-underline text-uppercase"},[t._v("\n                                    "+t._s(e.component)+"\n                                ")]),t._v(" "),"peripherals"==e.component||"gpu/graphics card"==e.component?i("small",{staticClass:"ml-1"},[t._v("\n                                    (optional)\n                                ")]):t._e()]),t._v(" "),i("td",[e.item?i("v-chip",{attrs:{color:"secondary",label:"",close:""},on:{"click:close":function(t){e.item=!1}}},[i("span",{staticClass:"mw"},[t._v(t._s(e.item.name))])]):i("v-btn",{attrs:{small:"",color:"secondary",outlined:""},on:{click:function(i){t.selectedComponent=e.component,t.showForm=!0}}},[t._v("\n                                    "+t._s(e.component)+"\n                                    "),i("v-icon",{staticClass:"ml-1",attrs:{small:""}},[t._v("mdi-plus-circle")])],1)],1),t._v(" "),i("td",{staticClass:"text-center"},[e.item?i("v-icon",{attrs:{color:e.item.price?"success":"default"},domProps:{textContent:t._s(e.item.price?"mdi-checkbox-marked-circle-outline":"mdi-cancel")}}):t._e()],1)])]}))],2)]},proxy:!0}])})],1),t._v(" "),i("v-divider"),t._v(" "),i("v-card-actions",[i("v-spacer"),t._v(" "),i("v-btn",{attrs:{color:"success",disabled:t.disable},on:{click:function(e){t.warningForm=!0}}},[t._v("\n                Check Compatibility\n                "),i("v-icon",{staticClass:"ml-2"},[t._v("mdi-checkbox-marked-outline")])],1)],1)],1),t._v(" "),i("v-dialog",{attrs:{persistent:"","max-width":"700"},model:{value:t.showForm,callback:function(e){t.showForm=e},expression:"showForm"}},[i("compatible-item",{attrs:{component:t.selectedComponent},on:{close:function(e){t.showForm=!1,t.selectedComponent=""},add:t.addItem}})],1),t._v(" "),i("v-dialog",{attrs:{persistent:"","max-width":"500"},model:{value:t.warningForm,callback:function(e){t.warningForm=e},expression:"warningForm"}},[i("v-card",[i("v-card-title",[t._v("Warning")]),t._v(" "),i("v-card-text",{staticClass:"text-center"},[t._v("\n                Are you sure you want to check your build?"),i("br"),t._v("\n                You have "+t._s(t.count)+" selected priority items\n            ")]),t._v(" "),i("v-card-actions",[i("v-spacer"),t._v(" "),i("v-btn",{attrs:{text:"",color:"secondary"},on:{click:function(e){t.warningForm=!1}}},[t._v("\n                    Cancel\n                ")]),t._v(" "),i("v-btn",{attrs:{color:"success"},on:{click:t.check}},[t._v("\n                    Check build\n                ")])],1)],1)],1),t._v(" "),i("v-dialog",{attrs:{persistent:"","max-width":"600"},model:{value:t.resForm,callback:function(e){t.resForm=e},expression:"resForm"}},[i("v-card",[i("v-card-title",[t._v("\n                    Compatibility Result\n                ")]),t._v(" "),i("v-card-text",[t.resLoader?[i("v-expand-transition",[i("div",{staticClass:"text-center"},[i("v-progress-circular",{attrs:{size:50,width:5,color:"success",indeterminate:""}}),t._v(" "),i("br"),t._v(" "),i("div",{staticClass:"mt-4"},[t._v("Waiting the result...")])],1)])]:[i("v-expand-transition",[t.compatible?i("div",{staticClass:"text-center"},[i("v-icon",{staticClass:"success--text",attrs:{"x-large":""}},[t._v("mdi-checkbox-marked-circle-outline")]),t._v(" "),i("v-toolbar-title",[t._v("\n                                Based on our system, your build is Compatible!\n                            ")])],1):i("div",{staticClass:"text-center"},[i("v-icon",{staticClass:"error--text",attrs:{"x-large":""}},[t._v("mdi-close-circle-outline")]),t._v(" "),i("v-toolbar-title",{staticClass:"error--text"},[t._v("\n                                Based on our system, your build is not Compatible!\n                            ")])],1)])]],2),t._v(" "),i("v-card-actions",[i("v-spacer"),t._v(" "),i("v-btn",{attrs:{color:"secondary",disabled:t.resLoader},on:{click:function(e){t.resForm=!1}}},[t._v("\n                        Close\n                    ")])],1)],1)],1),t._v(" "),i("v-snackbar",{attrs:{"multi-line":"",elevation:"12",color:t.alert.color,transition:"scroll-x-reverse-transition",top:"",right:""},model:{value:t.alert.trigger,callback:function(e){t.$set(t.alert,"trigger",e)},expression:"alert.trigger"}},[i("div",{staticClass:"d-flex justify-space-between"},[i("div",{staticClass:"mr-2"},[i("v-icon",{attrs:{large:""}},[t._v("info")]),t._v("\n        "+t._s(t.alert.text)+"\n        ")],1),t._v(" "),i("v-btn",{on:{click:function(e){t.alert.trigger=!1}}},[t._v("\n        Close\n        ")])],1)])],1)}),[],!1,null,"6db5baac",null));e.default=r.exports}}]);