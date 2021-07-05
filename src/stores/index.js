import Vue from "vue";
import Vuex from "vuex";
import cartModule from "./cartModule";
import authentication from "./authentication";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        cartModule,
        authentication,
    },
    plugins: [createPersistedState()],
});