(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{16:function(t,e,a){"use strict";var n={data:function(){return{isEdit:!1,datePicker:!1,newPayload:{},required:[function(t){return!!t||"This field is required!"}],payload:{name:"",color:"",icon:""}}},props:{selectedItem:{type:Object,default:function(){}}},created:function(){},methods:{close:function(){this.isEdit=!1,this.$emit("cancel"),this.payload=JSON.parse(JSON.stringify(this.newPayload))},save:function(){this.payload.name?(this.isEdit?this.$emit("update",this.payload):this.$emit("save",this.payload),this.isEdit=!1,this.payload=JSON.parse(JSON.stringify(this.newPayload))):alert("Important field need to fillup...")}},watch:{selectedItem:{handler:function(t){0!==Object.keys(t).length?(this.payload=JSON.parse(JSON.stringify(t)),this.isEdit=!0):this.isEdit=!1},deep:!0,immediate:!0}}},i=a(1),o=Object(i.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-card",[a("v-card-title",[a("span",{staticClass:"text-h5"},[t._v("Compatibility Info")])]),t._v(" "),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{md:"12",cols:"12"}},[a("v-text-field",{attrs:{label:"Name*",dense:"",placeholder:"Set A Compatibility",filled:"","hide-details":"",rules:t.required},model:{value:t.payload.name,callback:function(e){t.$set(t.payload,"name",e)},expression:"payload.name"}})],1),t._v(" "),a("v-col",{attrs:{md:"12",cols:"12"}},[a("span",[t._v("Find color "),a("a",{attrs:{href:"https://vuetifyjs.com/en/styles/colors/#material-colors",target:"_blank"}},[t._v("here..")])]),t._v(" "),a("v-text-field",{attrs:{label:"Color (optional)",dense:"",placeholder:"Hex code or color name..",filled:"","hide-details":""},model:{value:t.payload.color,callback:function(e){t.$set(t.payload,"color",e)},expression:"payload.color"}})],1),t._v(" "),a("v-col",{attrs:{md:"12",cols:"12"}},[a("span",[t._v("Find icon "),a("a",{attrs:{href:"https://materialdesignicons.com",target:"_blank"}},[t._v("here..")])]),t._v(" "),a("v-text-field",{attrs:{label:"Icon (optional)",dense:"",placeholder:"Icon name..",filled:"","hide-details":""},model:{value:t.payload.icon,callback:function(e){t.$set(t.payload,"icon",e)},expression:"payload.icon"}})],1)],1),t._v(" "),a("v-row",{attrs:{justify:"end"}},[a("v-btn",{attrs:{color:"secondary"},on:{click:t.close}},[t._v("\n                    Cancel\n                ")]),t._v(" "),a("v-btn",{staticClass:"mx-2",attrs:{color:"success"},on:{click:t.save}},[t._v("\n                    "+t._s(t.isEdit?"Update":"Create")+"\n                ")])],1)],1)],1),t._v(" "),a("v-card-actions",[a("v-spacer")],1)],1)],1)}),[],!1,null,null,null);e.a=o.exports},306:function(t,e,a){"use strict";a.r(e);a(0);var n=a(5),i=a(16),o=a(6),s={components:{DeleteDialog:n.a,DataForm:i.a,TableHeader:o.a},data:function(){return{data:{title:"Categories",isFetching:!1,keyword:"",filter:{}},footerPages:{"items-per-page-options":[5,10,15,20,30,40,50,100,-1]},options:{itemsPerPage:15},total:0,deleteForm:!1,showForm:!1,dialogDelete:!1,categories:[],selectedItem:{},item:{},selected:[],title:"Categories",headers:[{text:"ID",align:"start",sortable:!0,value:"id"},{text:"Name",align:"start",sortable:!0,value:"name"},{text:"Color",align:"start",sortable:!1,value:"color"},{text:"Icon",align:"start",sortable:!1,value:"icon"},{text:"Products",align:"start",sortable:!1,value:"products_count"},{text:"Date Added",align:"start",sortable:!1,value:"created_at"},{text:"Actions",align:"center",sortable:!1,value:"action"}]}},methods:{viewProduct:function(){},resetFilter:function(){},fetchPage:function(){var t=this;this.data.isFetching=!0;var e=this._createParams(this.options);e+=this._createFilterParams(this.data.filter),this.data.keyword&&(e=e+"&keyword="+this.data.keyword),axios.get("/admin-api/category?".concat(e)).then((function(e){var a=e.data;t.categories=a.data,t.total=a.total,t.data.isFetching=!1}))},editItem:function(t){this.selectedItem=t,this.showForm=!0},save:function(t){var e=this;axios.post("/admin-api/category",t).then((function(t){var a=t.data;e.fetchPage(),e.newAlert(!0,a.type,a.message)})).finally((function(){e.showForm=!1,e.payload={}}))},update:function(t){var e=this;axios.put("/admin-api/category/".concat(this.selectedItem.id),t).then((function(t){var a=t.data;e.showForm=!1,e.fetchPage(),e.newAlert(!0,a.type,a.message),e.payload={}}))},addNew:function(){this.showForm=!0},close:function(){this.selectedItem={},this.showForm=!1,this.deleteForm=!1},warning:function(t){this.item={id:t.id,text:t.name,model:"category"},this.deleteForm=!0},confirm:function(){var t=this;axios.delete("/admin-api/".concat(this.item.model,"/").concat(this.item.id)).then((function(e){var a=e.data;t.deleteForm=!1,t.fetchPage(),t.newAlert(!0,a.type,a.message)}))}}},r=a(1),l=Object(r.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-card",{staticClass:"pa-2",attrs:{elevation:"0"}},[a("table-header",{attrs:{data:t.data,hide:["filter","download"]},on:{addNew:t.addNew,refresh:t.fetchPage,search:t.fetchPage,resetFilters:t.resetFilter,filterRecord:t.fetchPage},scopedSlots:t._u([{key:"custom_filter",fn:function(){return[a("admin-filter",{attrs:{filter:t.data.filter}})]},proxy:!0}])}),t._v(" "),a("v-data-table",{staticClass:"cursor-pointer table-fix-height",attrs:{headers:t.headers,items:t.categories,"max-height":"100%",search:t.data.keyword,loading:t.data.isFetching,"server-items-length":t.total,"footer-props":t.footerPages,options:t.options,"items-per-page":t.options.itemsPerPage,"fixed-header":""},on:{"update:options":[function(e){t.options=e},t.fetchPage],"click:row":t.viewProduct},scopedSlots:t._u([{key:"item.name",fn:function(e){var n=e.item;return[a("span",{staticClass:"text-capitalize"},[t._v(t._s(n.name))])]}},{key:"item.color",fn:function(e){var n=e.item;return[null!=n.color?a("v-chip",{attrs:{small:"",color:n.color}},[a("span",{staticClass:"text-capitalize"},[t._v(t._s(n.color))])]):a("span",[t._v("...")])]}},{key:"item.icon",fn:function(e){var n=e.item;return[null!=n.icon?a("v-chip",{attrs:{label:"",small:""}},[a("v-icon",{staticClass:"mr-1",attrs:{small:""}},[t._v("mdi-"+t._s(n.icon))]),t._v("\n              "+t._s(n.icon)+"\n          ")],1):a("span",[t._v("...")])]}},{key:"item.created_at",fn:function(e){var a=e.item;return[t._v("\n        "+t._s(t.moment(a.created_at).format("MMMM DD YYYY"))+"\n      ")]}},{key:"item.action",fn:function(e){var n=e.item;return[a("v-btn",{staticClass:"px-2",attrs:{small:"",elevation:"0",color:"primary"},on:{click:function(e){return t.editItem(n)}}},[a("v-icon",{attrs:{small:""}},[t._v("mdi-square-edit-outline")])],1),t._v(" "),a("v-btn",{staticClass:"px-2",attrs:{small:"",elevation:"0",color:"error"},on:{click:function(e){return t.warning(n)}}},[a("v-icon",{attrs:{small:""}},[t._v("mdi-trash-can")])],1)]}},{key:"no-data",fn:function(){return[a("div",[t._v("No Data")])]},proxy:!0}],null,!0)})],1),t._v(" "),a("v-dialog",{attrs:{persistent:"","max-width":"500"},model:{value:t.showForm,callback:function(e){t.showForm=e},expression:"showForm"}},[a("data-form",{attrs:{selectedItem:t.selectedItem},on:{cancel:t.close,save:t.save,update:t.update}})],1),t._v(" "),a("v-dialog",{attrs:{persistent:"",width:"500"},model:{value:t.deleteForm,callback:function(e){t.deleteForm=e},expression:"deleteForm"}},[a("delete-dialog",{attrs:{data:t.item},on:{close:t.close,confirm:t.confirm}})],1),t._v(" "),a("v-snackbar",{attrs:{"multi-line":"",elevation:"12",color:t.alert.color,transition:"scroll-x-reverse-transition",top:"",right:""},model:{value:t.alert.trigger,callback:function(e){t.$set(t.alert,"trigger",e)},expression:"alert.trigger"}},[a("div",{staticClass:"d-flex justify-space-between"},[a("div",{staticClass:"mr-2"},[a("v-icon",{attrs:{large:""}},[t._v("info")]),t._v("\n        "+t._s(t.alert.text)+"\n      ")],1),t._v(" "),a("v-btn",{on:{click:function(e){t.alert.trigger=!1}}},[t._v("\n        Close\n      ")])],1)])],1)}),[],!1,null,null,null);e.default=l.exports},5:function(t,e,a){"use strict";var n={data:function(){return{dialog:!1}},props:{data:{}},methods:{cancel:function(){this.$emit("close")},confirm:function(){this.$emit("confirm")}}},i=a(1),o=Object(i.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-card",[a("v-card-title",{staticClass:"text-h5"},[t._v("\n            Delete "),a("span",{staticClass:"ml-2 text-capitalize"},[t._v(t._s(t.data.model))]),t._v("!\n        ")]),t._v(" "),a("v-card-text",{staticClass:"text-center"},[a("span",{staticClass:"text-subtitle-1",staticStyle:{size:"'30px'","font-weight":"500"}},[t._v("\n                Are you sure you want to delete\n                "),a("strong",{staticClass:"red--text"},[t._v('"'+t._s(t.data.text)+'"')]),t._v("\n                "+t._s(t.data.model)+"?\n            ")])]),t._v(" "),a("v-card-actions",{staticClass:"mr-4"},[a("v-spacer"),t._v(" "),a("v-btn",{attrs:{elevation:"0",color:"secondary"},on:{click:t.cancel}},[t._v("\n            Cancel\n            "),a("v-icon",[t._v("mdi-close")])],1),t._v(" "),a("v-btn",{attrs:{color:"error",elevation:"0"},on:{click:t.confirm}},[t._v("\n            Delete\n            "),a("v-icon",[t._v("mdi-delete")])],1)],1)],1)],1)}),[],!1,null,null,null);e.a=o.exports},6:function(t,e,a){"use strict";var n={props:{data:{type:Object,default:function(){return{title:"Table Header",isFetching:!1,keyword:""}}},options:{type:Boolean,default:function(){return!1}},hide:{type:Array,default:function(){return[]}},disable:{type:Array,default:function(){return[]}},searchWidth:{type:String}}},i=a(1),o=Object(i.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-toolbar",{staticClass:"mb-4",attrs:{flat:""}},[a("div",{staticClass:"table-header-main-container",attrs:{cols:"12"}},[a("v-toolbar-title",[t._v("\n            "+t._s(t.data.title)+"\n        ")]),t._v(" "),a("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),t._v(" "),t.hide.includes("refresh")?t._e():a("v-icon",{on:{click:function(e){return e.stopPropagation(),t.$emit("refresh")}}},[t._v("\n            mdi-autorenew\n            "+t._s(t.data.isFetching?"mdi-spin":"")+"\n        ")]),t._v(" "),t._t("custom_details"),t._v(" "),t.options?a("div",{staticClass:"ml-10 px-10 border rounded-full shadow-md"},[a("div",{staticClass:" table-header-main-container gap-5 items-center"},[a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,i=e.attrs;return[a("v-btn",t._g(t._b({attrs:{plain:"",icon:"",color:"red",disabled:t.disable.includes("delete")},on:{click:function(e){return e.stopPropagation(),t.$emit("batchDelete")}}},"v-btn",i,!1),n),[a("v-icon",[t._v("mdi-delete")])],1)]}}],null,!1,2368894006)},[t._v(" "),a("span",[t._v("delete selected")])]),t._v(" "),a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,i=e.attrs;return[t.hide.includes("batchCopy")?t._e():a("v-btn",t._g(t._b({attrs:{plain:"",icon:"",color:"success"},on:{click:function(e){return e.stopPropagation(),t.$emit("batchCopy")}}},"v-btn",i,!1),n),[a("v-icon",[t._v("mdi-content-copy")])],1)]}}],null,!1,734942094)},[t._v(" "),a("span",[t._v("duplicate selected")])])],1)]):t._e()],2),t._v(" "),a("v-spacer"),t._v(" "),a("div",{class:"d-flex jutify-end align-end "+t.searchWidth,attrs:{"gap-3":""}},[a("v-spacer"),t._v(" "),t.hide.includes("search")?t._e():a("div",{staticClass:"table-header-search"},[a("v-text-field",{staticClass:"mx-5 mt-5",attrs:{"append-icon":"mdi-magnify",label:"search","single-line":"","hide-details":""},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.$emit("search")},"click:append":function(e){return t.$emit("search")}},model:{value:t.data.keyword,callback:function(e){t.$set(t.data,"keyword",e)},expression:"data.keyword"}})],1),t._v(" "),a("div",{},[t._t("custom_actions")],2),t._v(" "),t.hide.includes("filter")?t._e():a("v-menu",{attrs:{"offset-y":"",left:"","nudge-bottom":"5","close-on-content-click":!1},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,i=e.attrs;return[a("v-tooltip",{attrs:{color:"success",bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[t.hide.includes("filter")?t._e():a("v-btn",t._g(t._b({attrs:{fab:"",tile:"",color:"success"},on:{click:function(e){e.stopPropagation(),t.drawer=!0}}},"v-btn",i,!1),Object.assign({},o,n)),[a("v-icon",[t._v("mdi-filter-plus-outline")])],1)]}}],null,!0)},[t._v(" "),a("span",[t._v("Filter")])])]}}],null,!1,3023998152)},[t._v(" "),a("v-card",{attrs:{"min-width":"300"}},[a("v-card-text",[t._t("custom_filter")],2),t._v(" "),a("v-card-actions",[a("v-spacer"),t._v(" "),a("v-btn",{attrs:{color:"error",text:""},on:{click:function(e){return t.$emit("resetFilters")}}},[t._v("\n                       reset\n                    ")]),t._v(" "),a("v-btn",{attrs:{color:"success",depressed:""},on:{click:function(e){return t.$emit("filterRecord")}}},[t._v("\n                        filter\n                    ")])],1)],1)],1),t._v(" "),a("v-tooltip",{attrs:{color:"success",bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,i=e.attrs;return[t.hide.includes("addNew")?t._e():a("v-btn",t._g(t._b({staticClass:"ml-3",attrs:{color:"success",disabled:t.disable.includes("addNew")},on:{click:function(e){return e.stopPropagation(),t.$emit("addNew")}}},"v-btn",i,!1),n),[t._v("\n                Add\n                    "),a("v-icon",[t._v("mdi-plus")])],1)]}}])},[t._v(" "),a("span",[t._v("Add new")])]),t._v(" "),a("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,i=e.attrs;return[t.hide.includes("download")?t._e():a("v-btn",t._g(t._b({staticClass:"ml-3",attrs:{color:"primary",disabled:t.disable.includes("download")},on:{click:function(e){return e.stopPropagation(),t.$emit("download")}}},"v-btn",i,!1),n),[t._v("\n                    Download\n                    "),a("v-icon",[t._v("mdi-download")])],1)]}}])},[t._v(" "),a("span",[t._v("Download Record as pdf")])])],1)],1)}),[],!1,null,null,null);e.a=o.exports}}]);