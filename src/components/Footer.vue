<template>
  <footer>
    <p>{{ footerText }}</p>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      footerText: "Copyright 2021",
    };
  },
};
</script>

<style scoped>
footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: rgba(0, 162, 255, 0.952);
  color: white;
  text-align: center;
}
</style>
