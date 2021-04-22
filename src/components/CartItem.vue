<template>
  <div>
    <div class="mt-4 ml-2 mr-2">
      <b-card
        :img-src="cartItem.image"
        img-alt="image"
        img-left
        img-width="100"
        class="mb-3"
      >
        <div class="d-flex flex-row-reverse align-self-start mt-1 mr-1">
          <b-form-spinbutton
            id="sb-inline"
            v-model="cartItem.quantity"
            inline
            class="myButton"
          ></b-form-spinbutton>
        </div>

        <b-card-body>
          <b-card-title>{{ cartItem.name }}</b-card-title>
          <b-card-text> {{ cartItem.category }}</b-card-text>
          <b-card-title> R{{ cartItem.price }} </b-card-title>
        </b-card-body>

        <b-button
          class="mb-1 mr-1"
          pill
          variant="outline-danger"
          @click="removeItem(cartItem.id)"
        >
          REMOVE
        </b-button>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartItem",
  props: ["cartItem"],
  methods: {
    removeItem(id) {
      this.$store.commit("removeToCart", id);
      // alert("Product removed from cart");
    },
    // changeQuantity(quantity) {
    //   this.$store.commit("changeQuantityValue", quantity);
    //   console.log("change", this.cartItem.quantity);
    // },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  font-weight: normal;
  margin: 0;
  padding: 0;
}

button {
  float: right;
}
</style>
