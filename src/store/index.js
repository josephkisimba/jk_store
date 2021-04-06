import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        cart: [],
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
    removeToCart(state, prod) {
        state.cart.splice(prod);
    },
    actions: {},
});