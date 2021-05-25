<template>
  <div id="app">
    <NavBar />
    <Login />
    <Register />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
import Login from "./components/Login.vue";
import Register from "./components/Register.vue";

export default {
  name: "App",
  components: {
    NavBar,
    Footer,
    Login,
    Register,
  },
};
</script>
