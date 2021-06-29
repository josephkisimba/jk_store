<template>
  <div>
    <div class="product">
      <div class="products_item">
        <b-card
          no-body
          style="max-width: 20rem; object-fit: cover; "
          :img-src="productItem.image"
          img-alt="Image"
          img-top
          img-width="100%"
          img-height="200px"
        >
          <template #header>
            <h4 class="mb-0">{{ productItem.title }}</h4>
          </template>

          <b-card-body>
            <b-card-text> {{ productItem.category }}</b-card-text>

            <b-card-title>R{{ productItem.price }}</b-card-title>
            <button @click="addProduct">add to cart</button>
          </b-card-body>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Product",
  props: ["productItem"],
  data() {
    return {};
  },
  computed: {
    getUserLoggedIn() {
      return this.$store.getters.userLoggedIn;
    },
  },
  methods: {
    addProduct() {
      if (this.getUserLoggedIn) {
        this.$store.commit("addToCart", this.productItem);

        console.log("product", this.$store.state.cart);

        swal({
          text: "Product added to cart",
          icon: "success",
          button: "OK",
        });
      } else {
        this.$bvModal.show("my-modal_2");
        // console.log("login");
      }
    },
  },
};
</script>

<style scoped>
.products_item {
  margin: 1rem;
  padding: auto;
}

button {
  border: 1px, solid lightskyblue;
  background-color: grey;
  padding: 4px;
  border-radius: 10px;
  margin: 1rem;
  width: 6rem;
  cursor: pointer;
  box-shadow: 1px, 1px, 4px, lightskyblue;
  float: right;
}
button:focus {
  outline: none;
}
button:hover,
button:active {
  background-color: lightskyblue;
  border-color: blue;
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.26);
}
</style>
