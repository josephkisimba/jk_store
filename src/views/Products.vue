<template>
  <div>
    <div class="products">
      <div v-for="product in products" :key="product.id">
        <Product :productItem="product" />
      </div>
    </div>
  </div>
</template>

<script>
import Product from "@/components/Product.vue";
export default {
  name: "Products",
  components: {
    Product,
  },

  data() {
    return {
      currency: "R",
      products: [
        {
          id: 1,
          image:
            "https://images.unsplash.com/photo-1465453869711-7e174808ace9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80",
          name: "Shoes",
          category: "Accessoir",
          price: 50,
          quantity: 1,
        },
        {
          id: 2,
          image:
            "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
          name: "watch",
          category: "Accessoir",
          price: 80,
          quantity: 1,
        },
        {
          id: 3,
          image:
            "https://images.unsplash.com/photo-1598032895397-b9472444bf93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          name: "Shirt",
          category: "Clothes",
          price: 100,
          quantity: 1,
        },
        {
          id: 4,
          image:
            "https://images.unsplash.com/photo-1553880414-5fe13d83ddb6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
          name: "Glass",
          category: "Kitchen",
          price: 40,
          quantity: 1,
        },
      ],
    };
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
  width: 100%;
  height: auto;
}
</style>
