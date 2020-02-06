import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
const URL = 'http://localhost:3000/products';

Vue.use(Vuex);

let store = new Vuex.Store({
    state: {
        products: []
    },

    mutations: {
        SET_PRODUCTS_TO_STATE: (state, products) => {
            state.products = products
        }
    },

    actions: {
        GET_PRODUCTS_FROM_API({commit}) {
            return axios(URL, {
                method: "GET"
            })
                .then((products) => {
                    commit('SET_PRODUCTS_TO_STATE', products.data);
                    return products
                })
                .catch((onerror) => {
                    console.log(onerror);
                    return onerror
                })
        }
    },
    getters: {
        PRODUCTS(state) {
            return state.products
        }
    }
});

export default store
