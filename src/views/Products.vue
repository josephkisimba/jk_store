<template>
  <div>
    <div class="product">
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
Vue.prototype.$ajax = Axios;

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
.product {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: 100%;
  height: auto;
}
</style>
