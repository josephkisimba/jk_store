<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand to="/">Joseph</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/"> Home </b-nav-item>
          <b-nav-item to="/product"> Products </b-nav-item>
          <b-nav-item to="/about"> About </b-nav-item>
          <b-nav-item to="/contact">Contact </b-nav-item>
          <b-nav-item v-if="!LoggedIn" v-b-modal.modal_1>
            Register
          </b-nav-item>
          <b-nav-item v-if="!LoggedIn" v-b-modal.my-modal_2> Login </b-nav-item>
          <b-nav-item v-if="LoggedIn">
            <b-icon icon="person-fill"></b-icon> {{ getUser.name }}
          </b-nav-item>
          <b-nav-item v-if="LoggedIn" @click="logOut"> Logout </b-nav-item>

          <b-nav-item>
            <div>
              <b-button to="/cart" variant="black">
                <b-icon icon="cart" aria-hidden="true"></b-icon>
                cart {{ cart.length }}
              </b-button>
            </div>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "NavBar",

  computed: {
    getUser() {
      // console.log(this.getUser);
      return this.$store.getters.user;
    },
    LoggedIn() {
      return this.$store.getters.userLoggedIn;
    },
    cart() {
      // console.log(this.$store.getters.cart);
      return this.$store.getters.cartProducts;
    },
  },
  methods: {
    logOut() {
      this.$store.commit("logOutUser");
      this.$store.commit("emptyCart");
    },
  },
};
</script>
