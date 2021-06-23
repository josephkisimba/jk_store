import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// Initialize Firebase

var db = firebase.firestore();

export default {
    state: () => ({
        cart: [],
    }),
    getters: {
        cartProducts(state) {
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
        addToCart(state, product) {
            const item = state.cart.find((data) => data.id === product.id);

            if (!item) {
                product.quantity = 1;
                state.cart.push(product);
            } else {
                item.quantity += 1;
            }
            db.collection("cart")
                .doc(`${product.id}`)
                .set(product);
        },

        increment(state, id) {
            const item = state.cart.find((data) => data.id === id);
            console.log("item", item);
            if (item) {
                item.quantity += 1;
            }
            db.collection("cart")
                .doc(`${id}`)
                .update("quantity", firebase.firestore.FieldValue.increment(1));
        },

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
        },
        removeFromCart(state, id) {
            state.cart = state.cart.filter((itemCart) => {
                return itemCart.id !== id;
            });
            db.collection("cart")
                .doc(`${id}`)
                .delete();
        },
        emptyCart(state, id) {
            state.cart = state.cart.filter((itemCart) => {
                return itemCart.id === !id;
            });
        },
    },
};