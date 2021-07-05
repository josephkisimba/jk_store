// const state = {
//     user: null,
// };

// const getters = {
//     user(state) {
//         console.log("UserState", state.user);
//         return state.user;
//     },

//     userLoggedIn(state) {
//         if (state.user !== null) {
//             return true;
//         } else {
//             return false;
//         }
//     },
// };

// const mutations = {
//     setUser(state, user) {
//         state.user = user;
//         console.log("setUser", user);
//     },
//     logOutUser(state) {
//         state.user = null;
//     },
// };

// export default {
//     state,
//     getters,
//     mutations,
// };

export default {
    state: () => ({
        user: null,
    }),
    getters: {
        user(state) {
            console.log("UserState", state.user);
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