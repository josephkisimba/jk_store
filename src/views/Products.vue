<template>
  <div>
    <h1>PRODUCTS</h1>
    <div class="products">
      <div
        class="products_items"
        v-for="product in products"
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
  name: "Product",
  data() {
    return {
      cart: [],
      products: [
        {
          image:
            "https://images.unsplash.com/photo-1465453869711-7e174808ace9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80",
          name: "Shoes",
          category: "Accessoir",
          price: "R50",
        },
        {
          image:
            "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
          name: "watch",
          category: "Accessoir",
          price: "R80",
        },
        {
          image:
            "https://images.unsplash.com/photo-1598032895397-b9472444bf93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          name: "Shirt",
          category: "Clothes",
          price: "R100",
        },
        {
          image:
            "https://images.unsplash.com/photo-1553880414-5fe13d83ddb6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
          name: "Glass",
          category: "Kitchen",
          price: "R40",
        },
      ],
    };
  },

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
}
.image {
  display: block;
  max-width: 200px;
  object-fit: contain;
  padding: 0.5rem;
  margin: 1rem auto;
  width: 100%;
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
