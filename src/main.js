import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
// import * as firebase from "firebase";
Vue.use(BootstrapVueIcons);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App),
    // created() {
    //     var firebaseConfig = {
    //         apiKey: "AIzaSyBoWzvnEiow6wW0TRN_zXxlgINnKDoEPUQ",
    //         authDomain: "my-store-bcc41.firebaseapp.com",
    //         projectId: "my-store-bcc41",
    //         storageBucket: "my-store-bcc41.appspot.com",
    //         messagingSenderId: "117645143532",
    //         appId: "1:117645143532:web:ce791919b160eb0579e4c9",
    //         measurementId: "G-7W2N3MHHSW",
    //     };
    //     // Initialize Firebase
    //     firebase.initializeApp(firebaseConfig);
    //     firebase.analytics();
    // },
}).$mount("#app");