export default {
    namespacd: true,

    state: () => ({
        user: null,
    }),

    getters: {
        user(state) {
            return state.user;
        },

        userLoggedIn(state) {
            if (state.user !== null) {
                return true;
            } else {
                return false;
            }
        },
    },

    mutations: {
        setUser(state, user) {
            state.user = user;
            console.log("setUser", user);
        },
        logOutUser(state) {
            state.user = null;
        },
    },
};