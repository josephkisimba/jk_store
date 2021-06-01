import Vue from "vue";
import Vuex from "vuex";
import cart from "./cart";
import authentication from "./authentication";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        cart,
        authentication,
    },
    plugins: [createPersistedState()],
});