<template>
  <div>
    <div class="mt-4 ml-2 mr-2">
      <b-card
        :img-src="cartItem.image"
        img-alt="Card image"
        img-left
        img-width="100"
        class="mb-3"
      >
        <div class="d-flex flex-row-reverse align-self-start mt-1 mr-1">
          <b-form-spinbutton
            id="sb-inline"
            v-model="value"
            inline
            class="myButton"
          ></b-form-spinbutton>
        </div>
        <b-card-text>{{ cartItem.name }}</b-card-text>
        <b-card-text>{{ cartItem.price }}</b-card-text>
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
  data() {
    return {
      value: 1,
    };
  },
  methods: {
    removeItem(id) {
      this.$store.commit("removeToCart", id);
      this.$store.commit("updateLocalStorage");

      alert("Product removed to cart");
    },

    cartFormatter(value) {
      // return this.cartItem[value];
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
