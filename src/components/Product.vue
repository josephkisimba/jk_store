<template>
  <div>
    <h1>PRODUCTS</h1>
    <div class="products">
      <div
        class="products_items"
        v-for="product in products_list"
        :key="product.name"
      >
        <img class="image" :src="product.image" />
        <div>{{ product.name }}</div>
        <div>{{ product.category }}</div>
        <div>{{ product.price }}</div>
        <button @click="addToCart">add to cart</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["products_list"],

  methods: {
    addToCart(product) {
      alert("Product added to cart");
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
.products {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: auto;
  margin: 0px auto;

  height: auto;
}
.image {
  display: block;
  max-width: 200px;
  padding: 0.5rem;
  margin: 1rem auto;
  width: 200px;
  height: 200px;
  object-fit: cover;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 15px;
}
.products_items {
  border: 1px solid lightgray;
  border-radius: 5px;
  margin: 1rem;
  padding: 1rem;
}
.products_text {
  font-weight: bold;
}
button {
  float: right;
  border: 1px, solid lightskyblue;
  background-color: grey;
  padding: 4px;
  border-radius: 12px;
  margin: 1rem;
  width: 7rem;
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
