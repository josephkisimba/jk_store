import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        cart: [],
    },
    getters: {
        subtotal(state) {
            let subtotalPrice = 0;
            state.cart.map((item) => {
                subtotalPrice += item.quantity * item.price;
            });
            return subtotalPrice;
        },
    },

    mutations: {
        addToCart(state, product) {
            const item = state.cart.find((data) => data.id === product.id);

            if (!item) {
                product.quantity = 1;
                state.cart.push(product);
            } else {
                item.quantity++;
            }
        },

        changeQuantityValue(state) {
            state.cart.quantity;
        },

        removeToCart(state, id) {
            state.cart = state.cart.filter((itemCart) => {
                return itemCart.id !== id;
            });
        },
    },

    plugins: [createPersistedState()],
});