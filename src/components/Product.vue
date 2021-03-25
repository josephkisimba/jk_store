<template>
  <div>
    <div class="product">
      <div class="products_item">
        <img class="image" :src="productItem.image" />
        <div>{{ productItem.name }}</div>
        <div>{{ productItem.category }}</div>
        <div>{{ productItem.price }}</div>
        <button @click="addToCart">add to cart</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["productItem"],
  data() {
    return {};
  },

  methods: {
    addToCart(productItem) {
      alert("Product added to cart");
    },
  },
};
</script>

<style scoped>
.products_item {
  border: 1px solid lightgray;
  border-radius: 15px;
  margin: 1rem;
  padding: auto;
}
.image {
  display: block;
  padding: auto;
  margin: auto;
  width: 100%;
  height: 200px;
  object-fit: cover;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 15px;
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
