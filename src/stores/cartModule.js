import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
// import { addToCartDB } from "../firebase";
import { authentication } from "./authentication";
var db = firebase.firestore();
const getUser = authentication.getters.user;

const userLoggedIn = authentication.getters.userLoggedIn;

export const cartModule = {
    state: () => ({
        cart: [],
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
    },
    mutations: {
        // productListInCart(state, product) {
        //     state.cart.splice(0, state.cart.length, ...product);
        //     // console.log(product.id);
        // },
        addToCart(state, product) {
            const item = state.cart.find((data) => data.id === product.id);

            if (!item) {
                product.quantity = 1;
                state.cart.push(product);
            } else {
                item.quantity += 1;
            }

            if (userLoggedIn) {
                console.log("start FB");
                let cartUserRef = db.collection("carts").doc(getUser.email);

                console.log("cartUserRef", cartUserRef);
                cartUserRef.get().then((doc) => {
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
            }

            //=============================================================================
        }, //end add

        //============================START INCREMENT========================
        increment(state, id) {
            const item = state.cart.find((data) => data.id === id);
            console.log("item", item);
            if (item) {
                item.quantity += 1;
            }
            // db.collection("cart")
            //     .doc(`${id}`)
            //     .update("quantity", firebase.firestore.FieldValue.increment(1));
        }, //END INCRMENT

        //================================START DECREMENT========================================

        decrement(state, id) {
            const item = state.cart.find((data) => data.id === id);

            if (item && item.quantity > 1) {
                item.quantity = item.quantity - 1;
            } else if (item.quantity === 1) {
                item.quantity = 1;
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

            // if (userLoggedIn) {
            //     console.log("start removing FB");
            //     let cartUserRef = db.collection("carts").doc(getUser.email);
            //     console.log("cartUserRef", cartUserRef);

            //     cartUserRef.get().then((doc) => {
            //         let products = null;

            //         try {
            //             if (doc.exists) {
            //                 console.log("saving changes in user cart");
            //                 products = { cart: this.getters.cartProducts };
            //                 cartUserRef.set(products);
            //             }
            //         } catch (e) {
            //             console.log(e);
            //         }
            //     });
            // }

            if (userLoggedIn) {
                let cartUserRef = db.collection("carts").doc(getUser.email);
                cartUserRef.delete();
            }
        }, // END REMOVE

        emptyCart(state, id) {
            state.cart = state.cart.filter((itemCart) => {
                return itemCart.id === !id;
            });
        },
    },
};