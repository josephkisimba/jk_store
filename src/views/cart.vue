<template>
  <div>
    <div>
      <div class="container">
        <b-row class="p-2">
          <b-col cols="8">
            <b-card>
              <div v-for="item in getCartProducts" :key="item.id">
                <CartItem :cartItem="item" />
              </div>
            </b-card>
          </b-col>

          <b-col cols="4">
            <b-card
              class="ml-5 "
              header="featured"
              header-tag="header"
              footer-tag="footer"
            >
              <template #header>
                <h6 class="mb-0">Summary</h6>
              </template>
              <b-card-text> Subtotal: R{{ getSubTotal }} </b-card-text>
              <b-card-text> Tax: 14% </b-card-text>
              <b-card-text> Total: R{{ getTotal }} </b-card-text>

              <template #footer>
                <b-button href="#" variant="primary">PAY</b-button>
              </template>
            </b-card>
          </b-col>
        </b-row>
      </div>
    </div>
  </div>
</template>

<script>
import CartItem from "@/components/CartItem.vue";
export default {
  name: "cart",
  components: {
    CartItem,
  },
  computed: {
    getCartProducts() {
      // console.log("cartProduct", this.$store.getters.cartProducts);
      return this.$store.getters.cartProducts;
    },

    getSubTotal() {
      return this.roundingOffToTwo(this.$store.getters.subtotal);
    },

    getTotal() {
      let total = this.getSubTotal + this.getSubTotal * 0.14;
      return this.roundingOffToTwo(total);
    },
  },
  methods: {
    roundingOffToTwo(num) {
      return +(Math.round(num + "e+2") + "e-2");
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
</style>
