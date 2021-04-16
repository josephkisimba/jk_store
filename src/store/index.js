import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        cart: [],
    },
    getters: {
        productInCart(state) {
            return state.cart;
        },
    },

    mutations: {
        addToCart(state, product) {
            const item = state.cart.find((data) => data.id === product.id);

            if (!item) {
                state.cart.push(product);
            } else {
                item.quantity++;
            }
        },

        subtotal(state) {
            const subTot = state.cart.reduce(function(previous, current) {
                (previous + current.price) * current.quantity;
            }, 0);
            return subTot;
        },

        increment(state) {
            state.cart.quantity;
        },

        removeToCart(state, id) {
            state.cart = state.cart.filter((itemCart) => {
                return itemCart.id !== id;
            });
        },
    },

    actions: {},

    plugins: [createPersistedState()],
});