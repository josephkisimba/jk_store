import Vue from "vue";
import Vuex from "vuex";
import cartModule from "./modules/cartModule";
import authentication from "./modules/authentication";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
    // state: () => ({
    //     cart: [],
    //     user: null,
    // }),
    // getters: {
    //     cartProducts(state) {
    //         return state.cart;
    //     },
    //     subtotal(state) {
    //         let subtotalPrice = 0;
    //         state.cart.map((item) => {
    //             subtotalPrice += item.quantity * item.price;
    //         });
    //         return subtotalPrice;
    //     },
    //     user(state) {
    //         return state.user;
    //     },

    //     userLoggedIn(state) {
    //         if (state.user !== null) {
    //             return true;
    //         } else {
    //             return false;
    //         }
    //     },
    // },
    // mutations: {
    //     addToCart(state, product) {
    //         const item = state.cart.find((data) => data.id === product.id);

    //         if (!item) {
    //             product.quantity = 1;
    //             state.cart.push(product);
    //         } else {
    //             item.quantity += 1;
    //         }
    //     },

    //     increment(state, id) {
    //         const item = state.cart.find((data) => data.id === id);

    //         if (item) {
    //             item.quantity += 1;
    //         }
    //     },

    //     decrement(state, id) {
    //         const item = state.cart.find((data) => data.id === id);

    //         if (item && item.quantity > 1) {
    //             item.quantity = item.quantity - 1;
    //         } else if (item.quantity === 1) {
    //             item.quantity = 1;
    //         }
    //     },
    //     removeFromCart(state, id) {
    //         state.cart = state.cart.filter((itemCart) => {
    //             return itemCart.id !== id;
    //         });
    //     },
    //     setUser(state, user) {
    //         state.user = user;
    //         console.log("setUser", user);
    //     },
    //     logOutUser(state) {
    //         state.user = null;
    //     },
    // },

    modules: {
        cartModule,
        authentication,
    },
    plugins: [createPersistedState()],
});