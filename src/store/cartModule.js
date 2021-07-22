import authent from "../store/authentication";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
// import { addToCartDB } from "../firebase";
console.log("authent", authent);

// const getUser = authent.getters["/user"];
// console.log("getUser", getUser);
const userLoggedIn = authent.getters.userLoggedIn;
console.log("userLoggedIn", userLoggedIn);

var db = firebase.firestore();

export default {
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
        productInCart(state, product) {
            state.cart.splice(0, state.cart.length, ...product);
            // console.log(product.id);
        },
        async addToCart(state, product) {
            const item = state.cart.find((data) => data.id === product.id);

            if (!item) {
                product.quantity = 1;
                state.cart.push(product);
            } else {
                item.quantity += 1;
            }
            addToCartDB();

            // if (userLoggedIn) {
            //     console.log("start firebase");
            //     let cartUserRef = db.collection("carts").doc(getUser.email);
            //     console.log("getUser", getUser.email);
            //     let doc = await cartUserRef.get();
            //     let products = null;

            //     if (doc.exists) {
            //         // If user cart exists
            //         try {
            //             console.log("saving to user cart");
            //             products = { cart: this.getters.cartProducts };

            //             cartUserRef.set(products);
            //         } catch (e) {
            //             console.log(e);
            //         }
            //     } else {
            //         console.log("creating user cart");
            //         products = { items: this.getters.cartProducts };
            //         cartUserRef.set(products);
            //     }
            // } else {
            //     console.log("user not LoggedIn");
            // }

            // if (userLoggedIn) {
            //     console.log("start FB");
            //     // console.log("authentication.getters", authentication.getters.uid);

            //     let cartUserRef = db.collection("carts").doc(getUser.email);
            //     console.log("getUser", getUser);
            //     console.log("getUserEmail", authentication.getters.user);

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
};