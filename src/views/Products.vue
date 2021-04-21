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
import Vue from "vue";
import Axios from "axios";
import Product from "@/components/Product.vue";

Vue.use(Axios);
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
    Axios.get("https://fakestoreapi.com/products").then(
      (response) => (this.products = response.data)
    );
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
