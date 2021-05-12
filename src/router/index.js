import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Home",
        component: () =>
            import ("../views/Home.vue"),
    },
    {
        path: "/product",
        name: "Products",
        component: () =>
            import ("../views/Products.vue"),
    },
    {
        path: "/about",
        name: "About",
        component: () =>
            import ("../views/About.vue"),
    },
    {
        path: "/contact",
        name: "Contact",
        component: () =>
            import ("../views/Contact.vue"),
    },
    {
        path: "/cart",
        name: "Cart",
        component: () =>
            import ("../views/cart.vue"),
    },
    {
        path: "/register",
        name: "Register",
        component: () =>
            import ("../views/Register.vue"),
    },
    {
        path: "/login",
        name: "Login",
        component: () =>
            import ("../views/Login.vue"),
    },
];

const router = new VueRouter({
    mode: "hash",
    base: process.env.BASE_URL,
    routes,
});

export default router;