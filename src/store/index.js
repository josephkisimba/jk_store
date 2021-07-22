import Vue from "vue";
import Vuex from "vuex";
// import cartModule from "./cartModule";
// import authentication from "./authentication";
import createPersistedState from "vuex-persistedstate";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";
const db = firebase.firestore();

Vue.use(Vuex);
// export const store = new Vuex.Store({
//     modules: {
//         cartModule,
//         authentication,
//     },
//     plugins: [createPersistedState()],
// });

export default new Vuex.Store({
    state: () => ({
        cart: [],
        user: null,
    }),
    getters: {
        cartProducts(state) {
            console.log("cartProducts", state.cart);
            return state.cart;
        },
        subtotal(state) {
            let subtotalPrice = 0;
            state.cart.map((item) => {
                subtotalPrice += item.quantity * item.price;
            });
            return subtotalPrice;
        },

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

        // productInCart(state, product) {
        //     state.cart.splice(0, state.cart.length, ...product);
        //     // console.log(product.id);
        // },

        async addToCart(state, product) {
            const item = state.cart.find((data) => data.id === product.id);

            if (!item) {
                product.quantity = 1;
                state.cart.push(product);
            } else {
                item.quantity += 1;
            }

            if (this.getters.userLoggedIn) {
                console.log("create ID");
                var userRef = db.collection("users").doc(this.getters.user.email);

                userRef
                    .get()
                    .then((doc) => {
                        if (doc.exists) {
                            let found = doc.data();

                            console.log("found:", found.id);
                            console.log("start FB");

                            let cartUserRef = db.collection("carts").doc(found.id);

                            console.log("cartUserRef", cartUserRef);
                            cartUserRef.get().then((doc) => {
                                console.log("DocRef ", doc);
                                let products = null;
                                if (doc.exists) {
                                    try {
                                        console.log("saving to user cart");
                                        products = { cart: this.getters.cartProducts };

                                        cartUserRef.set(products);
                                    } catch (e) {
                                        console.log(e);
                                    }
                                } else {
                                    console.log("create user cart");
                                    products = { items: this.getters.cartProducts };
                                    cartUserRef.set(products);
                                }
                            });
                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document!");
                        }
                    })
                    .catch((error) => {
                        console.log("Error getting document:", error);
                    });
            } else {
                alert("user not loggedIn");
            }

            // if (this.getters.userLoggedIn) {
            //     alert(user_id);
            //     let product = this.getters.cartProducts;
            //     console.log("product", product);
            //     var userCartRef = db.collection("carts3").doc();

            //     console.log("userCartRef", userCartRef);

            //     // later...
            //     userCartRef.set(Object.assign({}, { cart: product }));
            //     console.log("product", product);
            // console.log("this.getters.userLoggedIn", this.getters.userLoggedIn);
            // console.log("start checking in DB");
            // let cartUserRef = db.collection("carts1").doc();
            // let docRef = docRef.id;
            // let doc = docRef.id;

            // doc = await cartUserRef.get();
            // let products = null;

            // if (doc.exists) {
            //     // If user cart exists
            //     try {
            //         console.log("saving to user cart");
            //         products = { Products: this.getters.cartProducts };

            //         cartUserRef.set(products);
            //     } catch (e) {
            //         console.log(e);
            //     }
            // } else {
            //     console.log("create user cart");
            //     products = { items: this.getters.cartProducts };
            //     console.log("items", products);
            //     cartUserRef.set(products);
            // }
            // }
            // addToCartDB();
            // if (this.getters.userLoggedIn) {
            // console.log("this.getters.userLoggedIn", this.getters.userLoggedIn);

            // let cartUserRef = db.collection("carts").doc();
            // let doc = (docRef.id = await cartUserRef.get());

            // if (doc.exists) {
            //     let product = null;
            //     try {
            //         // console.log("saving to user cart");
            //         let products = { Products: this.getters.cartProducts };

            //         cartUserRef.set(products);
            //     } catch (e) {
            //         console.log(e);
            //     }
            // } else {
            //     // console.log("create user cart");
            //     let products = { items: this.getters.cartProducts };
            //     console.log("items", products);
            //     cartUserRef.set(products);
            // }

            //     db.collection("cart")
            //         .add({
            //             products: { cart: this.getters.cartProducts },
            //         })
            //         .then((docRef) => {
            //             let doc = docRef.id;
            //             console.log("doc", doc);

            //             if (doc.exists) {
            //                 products = {
            //                     cart: this.getters.cartProducts,
            //                 };
            //             }

            //             console.log("Document written with ID: ", docRef.id);
            //         })
            //         .catch((error) => {
            //             console.error("Error adding document: ", error);
            //         });
            // } else {
            //     console.log("user not LoggedIn");
            // }

            // if (this.getters.userLoggedIn) {
            //     console.log("start FB");
            //     let cartUserRef = db.collection("carts").doc(this.getters.user.uid);

            //     console.log("cartUserRef", cartUserRef);
            //     cartUserRef.get().then((doc) => {

            //         let products = null;
            //         if (doc.exists) {
            //             try {
            //                 console.log("saving to user cart");
            //                 products = { cart: this.getters.cartProducts };

            //                 cartUserRef.set(products);
            //             } catch (e) {
            //                 console.log(e);
            //             }
            //         } else {
            //             console.log("create user cart");
            //             products = { items: this.getters.cartProducts };
            //             cartUserRef.set(products);
            //         }
            //     });
            // } else {
            //     console.log("user not LoggedIn");
            // }
        }, //end add

        //============================START INCREMENT========================
        increment(state, id) {
            const item = state.cart.find((data) => data.id === id);
            console.log("item", item);
            if (item) {
                item.quantity += 1;
            }

            if (this.getters.userLoggedIn) {
                console.log("create ID");
                var userRef = db.collection("users").doc(this.getters.user.email);

                userRef
                    .get()
                    .then((doc) => {
                        if (doc.exists) {
                            let found = doc.data();

                            console.log("found:", found.id);
                            console.log("start FB");

                            let cartUserRef = db.collection("carts").doc(found.id);

                            console.log("cartUserRef", cartUserRef);
                            cartUserRef.get().then((doc) => {
                                console.log("DocRef ", doc);
                                let products = null;
                                if (doc.exists) {
                                    try {
                                        console.log("saving to user cart");
                                        products = { cart: this.getters.cartProducts };

                                        cartUserRef.set(products);
                                    } catch (e) {
                                        console.log(e);
                                    }
                                } else {
                                    console.log("create user cart");
                                    products = { items: this.getters.cartProducts };
                                    cartUserRef.set(products);
                                }
                            });
                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document!");
                        }
                    })
                    .catch((error) => {
                        console.log("Error getting document:", error);
                    });
            } else {
                alert("user not loggedIn");
            }
        }, //END INCRMENT

        //================================START DECREMENT========================================

        decrement(state, id) {
            const item = state.cart.find((data) => data.id === id);

            if (item && item.quantity > 1) {
                item.quantity = item.quantity - 1;
            } else if (item.quantity === 1) {
                item.quantity = 1;
            }

            if (this.getters.userLoggedIn) {
                var userRef = db.collection("users").doc(this.getters.user.email);

                userRef
                    .get()
                    .then((doc) => {
                        if (doc.exists) {
                            let found = doc.data();
                            console.log("Document data:", found.id);
                            console.log("start removing FB");
                            let cartUserRef = db.collection("carts").doc(found.id);
                            console.log("cartUserRef", cartUserRef);

                            cartUserRef.get().then((doc) => {
                                let products = null;

                                try {
                                    if (doc.exists) {
                                        console.log("saving changes in user cart");
                                        products = { cart: this.getters.cartProducts };
                                        cartUserRef.set(products);
                                    }
                                } catch (e) {
                                    console.log(e);
                                }
                            });
                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document!");
                        }
                    })
                    .catch((error) => {
                        console.log("Error getting document:", error);
                    });

                //============================
            }
            // db.collection("cart")
            //     .doc(`${id}`)
            //     .update("quantity", firebase.firestore.FieldValue.increment(-1));
        }, //END DECREMENT

        //======================START REMOVE====================
        removeFromCart(state, product) {
            let findProductInCart = state.cart.find((data) => data.id === product.id);

            if (findProductInCart) {
                state.cart.splice(state.cart.indexOf(findProductInCart), 1);
            }

            if (this.getters.userLoggedIn) {
                var userRef = db.collection("users").doc(this.getters.user.email);

                userRef
                    .get()
                    .then((doc) => {
                        if (doc.exists) {
                            let found = doc.data();
                            console.log("Document data:", found.id);
                            console.log("start removing FB");
                            let cartUserRef = db.collection("carts").doc(found.id);
                            console.log("cartUserRef", cartUserRef);

                            cartUserRef.get().then((doc) => {
                                let products = null;

                                try {
                                    if (doc.exists) {
                                        console.log("saving changes in user cart");
                                        products = { cart: this.getters.cartProducts };
                                        cartUserRef.set(products);
                                    }
                                } catch (e) {
                                    console.log(e);
                                }
                            });
                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document!");
                        }
                    })
                    .catch((error) => {
                        console.log("Error getting document:", error);
                    });

                //============================
            }

            // if (userLoggedIn) {
            //     let cartUserRef = db.collection("carts").doc(getUser.email);
            //     cartUserRef.delete();
            // }
        }, // END REMOVE

        emptyCart(state, id) {
            state.cart = state.cart.filter((itemCart) => {
                return itemCart.id === !id;
            });
        },
    },

    plugins: [createPersistedState()],
});