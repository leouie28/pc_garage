require('./bootstrap');
window.Vue = require('vue');

import router from './src/router/index'
import Vue from 'vue';
import vuetify from '@/plugins/vuetify';
// import VueToast from 'vue-toast-notification';
// import 'vue-toast-notification/dist/index.css';

Vue.component('main-app', require('@/layout/Main.vue').default);
// Vue.use(VueToast);

const app = new Vue({
    el: '#app',
    vuetify,
    router,
    // VueToast,
});
