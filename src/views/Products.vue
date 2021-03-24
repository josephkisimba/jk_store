<template>
  <div>
    <Product :products_list="products" />
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
      // cart: [],
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
