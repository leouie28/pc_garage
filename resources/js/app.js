require('./bootstrap');
window.Vue = require('vue');

import router from './src/router/index'
import Vue from 'vue';
import vuetify from '@/plugins/vuetify';


Vue.component('main-app', require('@/layout/Main.vue').default);

const app = new Vue({
    el: '#app',
    vuetify,
    router
});
