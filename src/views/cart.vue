<template>
  <div>
    <div>
      <div class="container">
        <b-row class="p-2">
          <b-col cols="8">
            <b-card>
              <div v-for="crt in cart" :key="crt.name">
                <CartItem :cartItem="crt" />
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
              <b-card-text> Subtotal: </b-card-text>
              <b-card-text> Tax: </b-card-text>
              <b-card-text> Total: </b-card-text>

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
    cart() {
      return this.$store.state.cart;
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
