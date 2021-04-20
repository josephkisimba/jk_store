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
      products: [],
    };
  },

  mounted() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => console.log(json));
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
