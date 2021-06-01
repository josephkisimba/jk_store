export default {
    // namespacd: true,
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
        },

        increment(state, id) {
            const item = state.cart.find((data) => data.id === id);

            if (item) {
                item.quantity += 1;
            }
        },
        decrement(state, id) {
            // console.log("Search existing product in store");
            // let findProduct = state.products.find((data) => data.id === product.id);
            const item = state.cart.find((data) => data.id === id);

            if (item && item.quantity > 1) {
                item.quantity = item.quantity - 1;
            } else if (item.quantity === 1) {
                item.quantity = 1;
            }
        },
        removeFromCart(state, id) {
            state.cart = state.cart.filter((itemCart) => {
                return itemCart.id !== id;
            });
        },
        // setUser(state, user) {
        //     state.user = user;
        //     console.log("setUser", user);
        // },
        // logOutUser(state) {
        //     state.user = null;
        // },
        // addToCart(state, product) {
        //     const item = state.cart.find((data) => data.id === product.id);
        //     if (!item) {
        //         product.quantity = 1;
        //         state.cart.push(product);
        //         // console.log("products added", product);
        //     } else {
        //         item.quantity += 1;
        //     }
        // },
        // increment(state, id) {
        //     const item = state.cart.find((data) => data.id === id);
        //     const itemIndex = state.cart.cart.findIndex((data) => data.id === id);
        //     // console.log("item", item);
        //     // console.log("itemIndex", itemIndex);
        //     if (item && itemIndex >= 0) {
        //         console.log("increment");
        //         item.quantity += 1;
        //         state.cart[itemIndex] = item;
        //         state.cart = state.cart;
        //         // console.log("cart", state.cart);
        //     }
        // },
        // decrement(state, id) {
        //     const item = state.cart.find((data) => data.id === id);
        //     const itemIndex = state.cart.cart.findIndex((data) => data.id === id);
        //     // console.log("item", item);
        //     // console.log("itemIndex", itemIndex);
        //     if (item && itemIndex >= 0) {
        //         console.log("decrement");
        //         item.quantity -= 1;
        //         if (item.quantity >= 1) {
        //             state.cart[itemIndex] = item;
        //         } else {
        //             state.cart.splice(itemIndex, 1);
        //         }
        //         state.cart = state.cart;
        //         // console.log("cart", state.cart);
        //     }
        // },
        // removeFromCart(state, id) {
        //     state.cart = state.cart.filter((itemCart) => {
        //         return itemCart.id !== id;
        //     });
        // },
    },
};