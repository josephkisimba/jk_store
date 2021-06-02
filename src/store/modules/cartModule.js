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
        },

        increment(state, id) {
            const item = state.cart.find((data) => data.id === id);
            console.log("item", item);
            if (item) {
                item.quantity += 1;
            }
        },

        decrement(state, id) {
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
        emptyCart(state, id) {
            state.cart = state.cart.filter((itemCart) => {
                return itemCart.id === !id;
            });
        },
    },
};