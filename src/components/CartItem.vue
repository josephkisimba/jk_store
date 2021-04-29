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
        <div style="float: right" class="mr-2">
          <b-button
            class="mt-2"
            style="width: 40px"
            squared
            variant="outline-secondary"
            @click="incrementQuantity"
          >
            +
          </b-button>
          <b-button
            class="mt-2"
            disabled
            squared
            variant="outline-secondary"
            style="width: 40px"
            >{{ cartItem.quantity }}</b-button
          >
          <b-button
            class="mt-2"
            style="width: 40px"
            squared
            variant="outline-secondary"
            @click="decrementQuantity"
          >
            -
          </b-button>
        </div>

        <b-card-body>
          <b-card-title>{{ cartItem.title }}</b-card-title>
          <b-card-text> {{ cartItem.category }}</b-card-text>
          <b-card-title> R{{ cartItem.price }} </b-card-title>
        </b-card-body>

        <b-button
          class="mb-1 mr-1"
          pill
          variant="outline-danger"
          @click="removeItem"
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
    removeItem() {
      this.$store.commit("removeFromCart", this.cartItem.id);
      alert("Product removed from cart");
    },
    incrementQuantity() {
      this.$store.commit("increment", this.cartItem.id);
      console.log("quantity", this.cartItem.quantity);
    },

    decrementQuantity() {
      this.$store.commit("decrement", this.cartItem.id);
      console.log("quantity", this.cartItem.quantity);
    },
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
