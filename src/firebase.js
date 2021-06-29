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
    // console.log("cartModule", cartModule.getters.cartProducts);
    if (userLoggedIn) {
        console.log("DB check");
        let cartUserRef = db.collection("carts").doc(getUser.email);
        console.log("cartUserRef", cartUserRef);
        let doc = await cartUserRef.get();
        console.log("doc", doc);
        let products = null;

        if (doc.exists) {
            try {
                console.log("user cart saving");
                products = { cart: getProductsInCart };
                console.log("products", products);

                cartUserRef.set(products);
            } catch (e) {
                console.log(e);
            }
        }
        // else {
        //     console.log("user cart ");
        //     products = { cart: getProductsInCart };
        //     console.log("products0", products);
        //     cartUserRef.set(products);
        // }
    }
};

// export { auth, storage, db, fs };