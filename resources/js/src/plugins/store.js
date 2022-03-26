import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

const module = {
    state: {},
    getters: {},
    mutations: {},
};


export const store = new Vuex.Store({
    strict: true,
    modules: {
        module
    }
});