import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';


Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        count: 0,
    },
    getters: {
        CART_COUNT: state => {
            return state.count
        },

    },
    mutations: {
        SET_CART_COUNT: (state, count) => {
            state.count = count
        },

    },
    actions: {
        GET_CART_COUNT: async (context, count) => {
            context.commit('SET_CART_COUNT', count)
        },
    },
})