<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand to="/home">Joseph</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/"> Home </b-nav-item>
          <b-nav-item to="/product"> Products </b-nav-item>
          <b-nav-item to="/about"> About </b-nav-item>
          <b-nav-item to="/contact"> Contact </b-nav-item>
          <div class="h2 mb-0">
            <b-button to="/cart" variant="black" style="float: right">
              <b-icon
                to="/cart"
                icon="cart"
                aria-hidden="true"
                shift-h="right"
              ></b-icon>
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
