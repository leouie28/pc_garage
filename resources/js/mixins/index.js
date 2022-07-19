import Vue from "vue";
import PageHelper from "./PageHelper.vue";
import FileUploadHelper from "./FileUploadHelper.vue";
import Alert from "./Alert.vue";

Vue.mixin(Alert);
Vue.mixin(PageHelper);
Vue.mixin(FileUploadHelper);