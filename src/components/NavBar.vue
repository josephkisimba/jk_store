<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info" sticky="true">
      <b-navbar-brand href="#">JOSEPH </b-navbar-brand>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/"> Home </b-nav-item>
          <b-nav-item to="/product"> Products </b-nav-item>
          <b-nav-item to="/About"> About </b-nav-item>
          <b-nav-item to="/contact"> Contact </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>
