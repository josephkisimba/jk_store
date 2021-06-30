import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";
import { cartModule } from "./stores/cartModule";
import { authentication } from "./stores/authentication";

// const auth = firebase.auth();
// const storage = firebase.storage();
const db = firebase.firestore();
// const fs = firebase;

const getUser = authentication.getters.user;
const userLoggedIn = authentication.getters.userLoggedIn;
// const getProductsInCart = cartModule.getters.cartProducts;
//

export const addToCartDB = async() => {
    const getProductsInCart = cartModule.getters.cartProducts;
    console.log("cartModule", cartModule.getters.cartProducts);
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
};

// export { auth, storage, db, fs };