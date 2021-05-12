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
          <b-nav-item to="/contact"> Contact </b-nav-item>
          <b-nav-item to="/register"> register </b-nav-item>
          <b-nav-item to="/login"> login </b-nav-item>
          <div>
            <b-button to="/cart" variant="black">
              <b-icon icon="cart" aria-hidden="true"></b-icon>
              cart {{ cart.length }}
            </b-button>
          </div>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "NavBar",

  computed: {
    cart() {
      return this.$store.state.cart;
    },
  },
};
</script>
