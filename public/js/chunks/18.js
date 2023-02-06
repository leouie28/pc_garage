(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{298:function(t,e,a){"use strict";a.r(e);a(0);var s=a(5),i={data:function(){return{isEdit:!1,qty:1,itemPrice:"",img:null,products:[],datePicker:!1,customers:[],status:[{id:0,text:"Inactive"},{id:1,text:"Active"}],gender:["Male","Female","Hidden"],newPayload:{},required:[function(t){return!!t||"This field is required!"}],payload:{first_name:"",last_name:"",birthday:(new Date).toISOString().slice(0,7),genger:"",address:"",status:1,phone:"",email:"",password:""}}},props:{selectedItem:{type:Object,default:function(){}}},created:function(){},methods:{close:function(){this.isEdit=!1,this.$emit("cancel"),this.payload=JSON.parse(JSON.stringify(this.newPayload))},save:function(){this.isEdit?this.$emit("update",this.payload):this.$emit("save",this.payload),this.isEdit=!1,this.payload=JSON.parse(JSON.stringify(this.newPayload))}},watch:{selectedItem:{handler:function(t){0!==Object.keys(t).length?(this.payload=JSON.parse(JSON.stringify(t)),this.isEdit=!0,console.log(this.isEdit)):this.isEdit=!1},deep:!0,immediate:!0}}},r=a(1),n=Object(r.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-card",[a("v-card-title",[a("span",{staticClass:"text-h5"},[t._v("Customer Info")])]),t._v(" "),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{md:"6",cols:"12"}},[a("v-text-field",{attrs:{label:"First Name*",dense:"",filled:"","hide-details":"",rules:t.required},model:{value:t.payload.first_name,callback:function(e){t.$set(t.payload,"first_name",e)},expression:"payload.first_name"}})],1),t._v(" "),a("v-col",{attrs:{md:"6",cols:"12"}},[a("v-text-field",{attrs:{label:"Last Name*",dense:"",filled:"","hide-details":"",rules:t.required,required:""},model:{value:t.payload.last_name,callback:function(e){t.$set(t.payload,"last_name",e)},expression:"payload.last_name"}})],1),t._v(" "),a("v-col",{attrs:{md:"6",cols:"12"}},[a("v-text-field",{attrs:{filled:"",label:"Birthday","prepend-inner-icon":"mdi-calendar",readonly:"","hide-details":"",rules:t.required},on:{click:function(e){e.stopPropagation(),t.datePicker=!0}},model:{value:t.payload.birthday,callback:function(e){t.$set(t.payload,"birthday",e)},expression:"payload.birthday"}})],1),t._v(" "),a("v-dialog",{attrs:{persistent:"","max-width":"300"},model:{value:t.datePicker,callback:function(e){t.datePicker=e},expression:"datePicker"}},[a("v-date-picker",{attrs:{scrollable:""},model:{value:t.payload.birthday,callback:function(e){t.$set(t.payload,"birthday",e)},expression:"payload.birthday"}},[a("v-spacer"),t._v(" "),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){t.datePicker=!1}}},[t._v("\n                        Cancel\n                    ")]),t._v(" "),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){t.datePicker=!1}}},[t._v("\n                        OK\n                    ")])],1)],1),t._v(" "),a("v-col",{attrs:{md:"6",cols:"12"}},[a("v-select",{attrs:{label:"Gender*",items:t.gender,"item-value":"value",dense:"",filled:"","hide-details":"auto",rules:t.required,required:""},model:{value:t.payload.gender,callback:function(e){t.$set(t.payload,"gender",e)},expression:"payload.gender"}})],1),t._v(" "),a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{label:"Address*",dense:"",filled:"","hide-details":"",rules:t.required,required:""},model:{value:t.payload.address,callback:function(e){t.$set(t.payload,"address",e)},expression:"payload.address"}})],1),t._v(" "),a("v-col",{attrs:{md:"8",cols:"12"}},[a("v-text-field",{attrs:{label:"Phone Number*",dense:"",filled:"","hide-details":"",rules:t.required,required:""},model:{value:t.payload.phone,callback:function(e){t.$set(t.payload,"phone",e)},expression:"payload.phone"}})],1),t._v(" "),a("v-col",{attrs:{md:"4",cols:"12"}},[a("v-select",{attrs:{label:"Status*",items:t.status,"item-text":"text","item-value":"id",dense:"",filled:"","hide-details":"",rules:t.required,required:""},model:{value:t.payload.status,callback:function(e){t.$set(t.payload,"status",e)},expression:"payload.status"}})],1),t._v(" "),a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{label:"Email*",dense:"",filled:"","hide-details":"",rules:t.required,required:""},model:{value:t.payload.email,callback:function(e){t.$set(t.payload,"email",e)},expression:"payload.email"}})],1),t._v(" "),a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{label:"Password*",dense:"",filled:"","hide-details":"",rules:t.isEdit?[]:t.required,required:""},model:{value:t.payload.password,callback:function(e){t.$set(t.payload,"password",e)},expression:"payload.password"}})],1)],1),t._v(" "),a("v-row",{attrs:{justify:"end"}},[a("v-btn",{attrs:{color:"secondary"},on:{click:t.close}},[t._v("\n                    Cancel\n                ")]),t._v(" "),a("v-btn",{staticClass:"mx-2",attrs:{color:"success"},on:{click:t.save}},[t._v("\n                    "+t._s(t.isEdit?"Update":"Create")+"\n                ")])],1)],1)],1),t._v(" "),a("v-card-actions",[a("v-spacer")],1)],1)],1)}),[],!1,null,null,null).exports,o=a(6),l={components:{DeleteDialog:s.a,CustomerForm:n,TableHeader:o.a},data:function(){return{data:{title:"Customers",isFetching:!1,keyword:"",filter:{}},footerPages:{"items-per-page-options":[5,10,15,20,30,40,50,100,-1]},options:{itemsPerPage:15},total:0,deleteForm:!1,showForm:!1,dialogDelete:!1,user:{},customers:[],selectedItem:{},selected:[],title:"Customers",headers:[{text:"ID",align:"start",sortable:!0,value:"id"},{text:"Name",align:"start",sortable:!0,value:"name"},{text:"Gender",align:"start",sortable:!1,value:"gender"},{text:"Birthday",align:"start",sortable:!1,value:"birthday"},{text:"Address",align:"start",sortable:!1,value:"address"},{text:"Phone",align:"start",sortable:!0,value:"phone"},{text:"Email",align:"start",sortable:!0,value:"email"},{text:"Orders",align:"center",sortable:!1,value:"orders_count"},{text:"Date Joined",align:"start",sortable:!1,value:"created_at"},{text:"Actions",align:"center",sortable:!1,value:"action"}]}},methods:{viewProduct:function(){},resetFilter:function(){},fetchPage:function(){var t=this;this.data.isFetching=!0;var e=this._createParams(this.options);e+=this._createFilterParams(this.data.filter),this.data.keyword&&(e=e+"&keyword="+this.data.keyword),axios.get("/admin-api/customer?".concat(e)).then((function(e){var a=e.data;t.customers=a.data,t.total=a.total,t.data.isFetching=!1}))},editItem:function(t){console.log(this.alert.trigger,"trigger"),this.selectedItem=t,this.showForm=!0},save:function(t){var e=this;axios.post("/admin-api/customer",t).then((function(t){var a=t.data;e.fetchPage(),e.newAlert(!0,a.type,a.message)})).finally((function(){e.showForm=!1,e.payload=null}))},update:function(t){var e=this;axios.put("/admin-api/customer/".concat(this.selectedItem.id),t).then((function(t){var a=t.data;e.showForm=!1,e.fetchPage(),e.newAlert(!0,a.type,a.message),e.payload=null}))},addNew:function(){this.showForm=!0},close:function(){this.selectedItem={},this.showForm=!1,this.deleteForm=!1},warning:function(t){this.user={id:t.id,text:t.first_name+" "+t.last_name,model:"customer"},this.deleteForm=!0},confirm:function(){var t=this;axios.delete("/admin-api/".concat(this.user.model,"/").concat(this.user.id)).then((function(e){var a=e.data;t.deleteForm=!1,t.fetchPage(),t.newAlert(!0,a.type,a.message)}))}}},d=Object(r.a)(l,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-card",{staticClass:"pa-2",attrs:{elevation:"0"}},[a("table-header",{attrs:{data:t.data,hide:["filter","download"]},on:{addNew:t.addNew,refresh:t.fetchPage,search:t.fetchPage,resetFilters:t.resetFilter,filterRecord:t.fetchPage},scopedSlots:t._u([{key:"custom_filter",fn:function(){return[a("admin-filter",{attrs:{filter:t.data.filter}})]},proxy:!0}])}),t._v(" "),a("v-data-table",{staticClass:"cursor-pointer table-fix-height",attrs:{headers:t.headers,items:t.customers,"max-height":"100%",search:t.data.keyword,loading:t.data.isFetching,"server-items-length":t.total,"footer-props":t.footerPages,options:t.options,"items-per-page":t.options.itemsPerPage,"fixed-header":""},on:{"update:options":[function(e){t.options=e},t.fetchPage],"click:row":t.viewProduct},scopedSlots:t._u([{key:"item.name",fn:function(e){var s=e.item;return[a("v-avatar",{staticStyle:{border:"1px solid #ccc"},attrs:{size:"35"}},[a("img",{attrs:{alt:"image",src:s.images.length?"/images/customer/"+s.images[0].file_name:"/images/default/person.png"}})]),t._v("\n        "+t._s(s.first_name+" "+s.last_name)+"\n      ")]}},{key:"item.created_at",fn:function(e){var a=e.item;return[t._v("\n        "+t._s(t.moment(a.created_at).format("MMMM DD YYYY"))+"\n      ")]}},{key:"item.action",fn:function(e){var s=e.item;return[a("v-btn",{staticClass:"px-2",attrs:{small:"",elevation:"0",color:"primary"},on:{click:function(e){return t.editItem(s)}}},[a("v-icon",{attrs:{small:""}},[t._v("mdi-square-edit-outline")])],1),t._v(" "),a("v-btn",{staticClass:"px-2",attrs:{small:"",elevation:"0",color:"error"},on:{click:function(e){return t.warning(s)}}},[a("v-icon",{attrs:{small:""}},[t._v("mdi-trash-can")])],1)]}},{key:"no-data",fn:function(){return[a("div",[t._v("No Data")])]},proxy:!0}],null,!0)})],1),t._v(" "),a("v-dialog",{attrs:{persistent:"","max-width":"600"},model:{value:t.showForm,callback:function(e){t.showForm=e},expression:"showForm"}},[a("customer-form",{attrs:{selectedItem:t.selectedItem},on:{cancel:t.close,save:t.save,update:t.update}})],1),t._v(" "),a("v-dialog",{attrs:{persistent:"",width:"500"},model:{value:t.deleteForm,callback:function(e){t.deleteForm=e},expression:"deleteForm"}},[a("delete-dialog",{attrs:{data:t.user},on:{close:t.close,confirm:t.confirm}})],1),t._v(" "),a("v-snackbar",{attrs:{"multi-line":"",elevation:"12",color:t.alert.color,transition:"scroll-x-reverse-transition",top:"",right:""},model:{value:t.alert.trigger,callback:function(e){t.$set(t.alert,"trigger",e)},expression:"alert.trigger"}},[a("div",{staticClass:"d-flex justify-space-between"},[a("div",{staticClass:"mr-2"},[a("v-icon",{attrs:{large:""}},[t._v("info")]),t._v("\n        "+t._s(t.alert.text)+"\n      ")],1),t._v(" "),a("v-btn",{on:{click:function(e){t.alert.trigger=!1}}},[t._v("\n        Close\n      ")])],1)])],1)}),[],!1,null,null,null);e.default=d.exports},5:function(t,e,a){"use strict";var s={data:function(){return{dialog:!1}},props:{data:{}},methods:{cancel:function(){this.$emit("close")},confirm:function(){this.$emit("confirm")}}},i=a(1),r=Object(i.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-card",[a("v-card-title",{staticClass:"text-h5"},[t._v("\n            Delete "),a("span",{staticClass:"ml-2 text-capitalize"},[t._v(t._s(t.data.model))]),t._v("!\n        ")]),t._v(" "),a("v-card-text",{staticClass:"text-center"},[a("span",{staticClass:"text-subtitle-1",staticStyle:{size:"'30px'","font-weight":"500"}},[t._v("\n                Are you sure you want to delete\n                "),a("strong",{staticClass:"red--text"},[t._v('"'+t._s(t.data.text)+'"')]),t._v("\n                "+t._s(t.data.model)+"?\n            ")])]),t._v(" "),a("v-card-actions",{staticClass:"mr-4"},[a("v-spacer"),t._v(" "),a("v-btn",{attrs:{elevation:"0",color:"secondary"},on:{click:t.cancel}},[t._v("\n            Cancel\n            "),a("v-icon",[t._v("mdi-close")])],1),t._v(" "),a("v-btn",{attrs:{color:"error",elevation:"0"},on:{click:t.confirm}},[t._v("\n            Delete\n            "),a("v-icon",[t._v("mdi-delete")])],1)],1)],1)],1)}),[],!1,null,null,null);e.a=r.exports},6:function(t,e,a){"use strict";var s={props:{data:{type:Object,default:function(){return{title:"Table Header",isFetching:!1,keyword:""}}},options:{type:Boolean,default:function(){return!1}},hide:{type:Array,default:function(){return[]}},disable:{type:Array,default:function(){return[]}},searchWidth:{type:String}}},i=a(1),r=Object(i.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-toolbar",{staticClass:"mb-4",attrs:{flat:""}},[a("div",{staticClass:"table-header-main-container",attrs:{cols:"12"}},[a("v-toolbar-title",[t._v("\n            "+t._s(t.data.title)+"\n        ")]),t._v(" "),a("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),t._v(" "),t.hide.includes("refresh")?t._e():a("v-icon",{on:{click:function(e){return e.stopPropagation(),t.$emit("refresh")}}},[t._v("\n            mdi-autorenew\n            "+t._s(t.data.isFetching?"mdi-spin":"")+"\n        ")]),t._v(" "),t._t("custom_details"),t._v(" "),t.options?a("div",{staticClass:"ml-10 px-10 border rounded-full shadow-md"},[a("div",{staticClass:" table-header-main-container gap-5 items-center"},[a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on,i=e.attrs;return[a("v-btn",t._g(t._b({attrs:{plain:"",icon:"",color:"red",disabled:t.disable.includes("delete")},on:{click:function(e){return e.stopPropagation(),t.$emit("batchDelete")}}},"v-btn",i,!1),s),[a("v-icon",[t._v("mdi-delete")])],1)]}}],null,!1,2368894006)},[t._v(" "),a("span",[t._v("delete selected")])]),t._v(" "),a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on,i=e.attrs;return[t.hide.includes("batchCopy")?t._e():a("v-btn",t._g(t._b({attrs:{plain:"",icon:"",color:"success"},on:{click:function(e){return e.stopPropagation(),t.$emit("batchCopy")}}},"v-btn",i,!1),s),[a("v-icon",[t._v("mdi-content-copy")])],1)]}}],null,!1,734942094)},[t._v(" "),a("span",[t._v("duplicate selected")])])],1)]):t._e()],2),t._v(" "),a("v-spacer"),t._v(" "),a("div",{class:"d-flex jutify-end align-end "+t.searchWidth,attrs:{"gap-3":""}},[a("v-spacer"),t._v(" "),t.hide.includes("search")?t._e():a("div",{staticClass:"table-header-search"},[a("v-text-field",{staticClass:"mx-5 mt-5",attrs:{"append-icon":"mdi-magnify",label:"search","single-line":"","hide-details":""},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.$emit("search")},"click:append":function(e){return t.$emit("search")}},model:{value:t.data.keyword,callback:function(e){t.$set(t.data,"keyword",e)},expression:"data.keyword"}})],1),t._v(" "),a("div",{},[t._t("custom_actions")],2),t._v(" "),t.hide.includes("filter")?t._e():a("v-menu",{attrs:{"offset-y":"",left:"","nudge-bottom":"5","close-on-content-click":!1},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on,i=e.attrs;return[a("v-tooltip",{attrs:{color:"success",bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[t.hide.includes("filter")?t._e():a("v-btn",t._g(t._b({attrs:{fab:"",tile:"",color:"success"},on:{click:function(e){e.stopPropagation(),t.drawer=!0}}},"v-btn",i,!1),Object.assign({},r,s)),[a("v-icon",[t._v("mdi-filter-plus-outline")])],1)]}}],null,!0)},[t._v(" "),a("span",[t._v("Filter")])])]}}],null,!1,3023998152)},[t._v(" "),a("v-card",{attrs:{"min-width":"300"}},[a("v-card-text",[t._t("custom_filter")],2),t._v(" "),a("v-card-actions",[a("v-spacer"),t._v(" "),a("v-btn",{attrs:{color:"error",text:""},on:{click:function(e){return t.$emit("resetFilters")}}},[t._v("\n                       reset\n                    ")]),t._v(" "),a("v-btn",{attrs:{color:"success",depressed:""},on:{click:function(e){return t.$emit("filterRecord")}}},[t._v("\n                        filter\n                    ")])],1)],1)],1),t._v(" "),a("v-tooltip",{attrs:{color:"success",bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on,i=e.attrs;return[t.hide.includes("addNew")?t._e():a("v-btn",t._g(t._b({staticClass:"ml-3",attrs:{color:"success",disabled:t.disable.includes("addNew")},on:{click:function(e){return e.stopPropagation(),t.$emit("addNew")}}},"v-btn",i,!1),s),[t._v("\n                Add\n                    "),a("v-icon",[t._v("mdi-plus")])],1)]}}])},[t._v(" "),a("span",[t._v("Add new")])]),t._v(" "),a("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on,i=e.attrs;return[t.hide.includes("download")?t._e():a("v-btn",t._g(t._b({staticClass:"ml-3",attrs:{color:"primary",disabled:t.disable.includes("download")},on:{click:function(e){return e.stopPropagation(),t.$emit("download")}}},"v-btn",i,!1),s),[t._v("\n                    Download\n                    "),a("v-icon",[t._v("mdi-download")])],1)]}}])},[t._v(" "),a("span",[t._v("Download Record as pdf")])])],1)],1)}),[],!1,null,null,null);e.a=r.exports}}]);