import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { addToCartDB } from "../firebase";
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
        async addToCart(state, product) {
            const item = state.cart.find((data) => data.id === product.id);

            if (!item) {
                product.quantity = 1;
                state.cart.push(product);
            } else {
                item.quantity += 1;
            }
            // addToCartDB();
            console.log("END LS");

            // addToCartDB();

            // if (userLoggedIn === true) {
            //     console.log("start FB");
            //     let cartUserRef = db.collection("carts").doc(getUser.email);

            //     console.log("cartUserRef", cartUserRef);
            //     cartUserRef.get().then((doc) => {
            //         let cart = null;
            //         if (doc.exists) {
            //             try {
            //                 // console.log("saving to user cart");
            //                 cart = { cart: this.cartProducts };

            //                 cartUserRef.set(cart);
            //             } catch (e) {
            //                 console.log(e);
            //             }
            //         } else {
            //             // console.log("create user cart");
            //             products = { items: this.cartProducts };
            //             cartUserRef.set(cart);
            //         }
            //     });
            // }
            if (userLoggedIn) {
                // db.collection('cart').doc(`${product.id}`).set(product, { merge: true })
                let cartUserRef = db.collection("cart").doc(`${product.id}`);
                cartUserRef.set(product, { merge: true }).then(() => {
                    console.log("productDB", product);
                });
                db.collection("cart")
                    .get()
                    .then((querySnapshot) => {
                        querySnapshot.forEach((doc) => {
                            console.log(`${doc.id} => ${doc.data()}`);
                        });
                    });
            }
            //console.log("Start addToCartDB");
            // addToCartDB();
            //console.log("End saving");

            //=============================================================================
        }, //end add

        //============================START INCREMENT========================
        increment(state, id) {
            const item = state.cart.find((data) => data.id === id);
            console.log("item", item);
            if (item) {
                item.quantity += 1;
            }
            db.collection("cart")
                .doc(`${id}`)
                .update("quantity", firebase.firestore.FieldValue.increment(1));
        }, //END INCRMENT

        //================================START DECREMENT========================================

        decrement(state, id) {
            const item = state.cart.find((data) => data.id === id);

            if (item && item.quantity > 1) {
                item.quantity = item.quantity - 1;
            } else if (item.quantity === 1) {
                item.quantity = 1;
            }
            db.collection("cart")
                .doc(`${id}`)
                .update("quantity", firebase.firestore.FieldValue.increment(-1));
        }, //END DECREMENT

        //======================START REMOVE====================
        removeFromCart(state, id) {
            state.cart = state.cart.filter((itemCart) => {
                return itemCart.id !== id;
            });
            db.collection("cart")
                .doc(`${id}`)
                .delete();
        }, // END REMOVE

        emptyCart(state, id) {
            state.cart = state.cart.filter((itemCart) => {
                return itemCart.id === !id;
            });
        },
    },

    // async addToCartDB() {
    //     console.log("Start addToCartDB");
    //     //if (userLoggedIn == true) {
    //     console.log("start checking in DB");
    //     let cartUserRef = db.collection("carts").doc(getUser.email);
    //     console.log("cartUserRef", cartUserRef);
    //     let doc = await cartUserRef.get();
    //     console.log("doc", doc);
    //     let products = null;
    //     console.log("products", products);

    //     if (doc.exists) {
    //         // If user cart exists
    //         try {
    //             console.log("saving to user cart");
    //             products = { Products: this.cartProducts };

    //             cartUserRef.set(products);
    //         } catch (e) {
    //             console.log(e);
    //         }
    //     } else {
    //         console.log("create user cart");
    //         products = { items: this.cartProducts };
    //         cartUserRef.set(products);
    //     }
    //     // }
    // },
};

// export const addToCartDB = async() => {
//     console.log("Start addToCartDB");
//     console.log("userLoggedIn", userLoggedIn);
//     if (userLoggedIn) {
//         console.log("start checking in DB");
//         console.log("getUser", getUser);
//         let cartUserRef = db.collection("carts").doc(getUser.email);
//         console.log("cartUserRef", cartUserRef);
//         let doc = await cartUserRef.get();
//         console.log("doc", doc);
//         let products = null;
//         console.log("products", products);
//         // console.log("doc.exists", doc.exists);

//         if (doc.exists) {
//             console.log("doc.exists", doc.exists);
//             // If user cart exists
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
//     } else {
//         console.log("NOT USER LOGGEDIN");
//     }
// };