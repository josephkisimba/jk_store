<template>
  <div class="items">
    <div v-for="item in products" :key="item.products">
      <h3>{{ item.name }}</h3>
      <h3>{{ item.category }}</h3>
      <h3>{{ item.price }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "Products",
  data() {
    return {
      products: [
        {
          name: "Product 1",
          category: "Accessoir",
          price: "R50",
        },
        {
          name: "Product 2",
          category: "Accessoir",
          price: "R80",
        },
        {
          name: "Product 3",
          category: "Accessoir",
          price: "R100",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* 
* {
  box-sizing: border-box;
  font-weight: normal;
  margin: 0;
  padding: 0;
}
.product {
  border: 1px solid lightgray;
  border-radius: 10px;
  margin: 2rem;
  padding: 1rem;
}
.product_name {
  font-size: 2rem;
  text-align: center;
}
.image {
  display: block;
  margin: 1rem auto;
  object-fit: contain;
  width: 100%;
  height: 150px;
  border-radius: 40px;
}
.description {
  font-size: 1.3rem;
  margin-top: 1rem;
  text-align: center;
} */
</style>
