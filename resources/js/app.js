require('./bootstrap');
window.Vue = require('vue');

import router from './router/index'
import Vue from 'vue';
// import { store } from "./src/plugins/store";
import vuetify from './plugins/vuetify';
import "./mixins/index";
import moment from 'moment';

// import VueToast from 'vue-toast-notification';
// import 'vue-toast-notification/dist/index.css';

Vue.component('main-app', require('./layout/Main').default);
// Vue.use(VueToast);

const app = new Vue({
    el: '#app',
    vuetify,
    router,
    // store,
    // VueToast,
});
Vue.prototype.moment = moment;
