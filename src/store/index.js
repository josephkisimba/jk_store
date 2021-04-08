import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

let cart = window.localStorage.getItem("cart");

export default new Vuex.Store({
    state: {
        cart: cart ? JSON.parse(cart) : [],
    },
    mutations: {
        addToCart(state, id) {
            const item = state.cart.find((product) => product.id === id.id);

            if (item) {
                item.quantity++;
            } else {
                state.cart.push(id);
            }
        },
        updateLocalStorage(state) {
            window.localStorage.setItem("cart", JSON.stringify(state.cart));
        },

        removeToCart(state, id) {
            // let index = state.cart.indexOf(id);
            // state.cart.splice(index, 1);

            state.cart = state.cart.filter((itemCart) => {
                return itemCart.id !== id;
            });
        },
    },

    actions: {},
});