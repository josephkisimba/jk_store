import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        cart: [],
    },
    getters: {
        allProduct(state) {
            return state.cart;
        },
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
                item.quantity += 1;
            }
        },

        increment(state, id) {
            const item = state.cart.find((data) => data.id === id);

            if (item) {
                item.quantity += 1;
            }
        },

        decrement(state, id) {
            let itemIncart = state.cart.find((data) => data.id === id);
            // console.log(itemIncart);

            if (itemIncart && itemIncart.quantity > 1) {
                itemIncart.quantity = itemIncart.quantity - 1;
            } else if (itemIncart.quantity == 1) {
                itemIncart.quantity === 1;
            }
        },

        removeFromCart(state, id) {
            state.cart = state.cart.filter((itemCart) => {
                return itemCart.id !== id;
            });
        },
    },

    plugins: [createPersistedState()],
});