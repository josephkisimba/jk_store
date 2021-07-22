import { store } from "./store/authentication";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

console.log("store", store);
// const auth = firebase.auth();
// const storage = firebase.storage();
const db = firebase.firestore();
// const fs = firebase;

// const getUser = store.getters.cartModule;
// console.log("getUser", getUser);
// const userLoggedIn = store.getters.userLoggedIn;
// console.log("userLoggedIn", userLoggedIn);
// const getProductsInCart = store.getters.cartProducts;

export const addToCartDB = () => {
    if (userLoggedIn) {
        console.log("start FB");
        let cartUserRef = db.collection("carts").doc(getUser.email);
        console.log("getUser", getUser);
        console.log("getUserEmail", authentication.getters.user);

        console.log("cartUserRef", cartUserRef);
        cartUserRef.get().then((doc) => {
            let products = null;
            if (doc.exists) {
                try {
                    console.log("saving to user cart");
                    products = { cart: getProductsInCart };

                    cartUserRef.set(products);
                } catch (e) {
                    console.log(e);
                }
            } else {
                console.log("create user cart");
                products = { items: getProductsInCart };
                cartUserRef.set(products);
            }
        });
    } else {
        console.log("user not LoggedIn");
    }
};

// export { auth, storage, db, fs };