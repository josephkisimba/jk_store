import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        cart: [{
                image: "https://images.unsplash.com/photo-1465453869711-7e174808ace9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80",
                name: "shoes",
                price: "80",
            },

            {
                image: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
                name: "watch",
                price: "50",
            },
        ],
    },
    mutations: {
        addToCart(state, product) {
            const item = state.cart.find((crt) => crt.product === product);
            if (!item) {
                state.cart.push(product);
            } else {
                item.product++;
            }

            // state.cart.push(product);
        },
    },
    removeToCart() {
        // state.cart.splice();
    },
    actions: {},
});