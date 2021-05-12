<template>
  <div
    class="d-flex flex-column align-items-center justify-content-center mt-5"
  >
    <b-card>
      <template #header>
        <h4 class="mb-0">LOGIN</h4>
      </template>
      <b-row class="my-1">
        <b-col sm="4">
          <label for="input-small">Username</label>
        </b-col>
        <b-col sm="8">
          <b-form-input
            id="input-small"
            size="sm"
            placeholder="Enter your Username"
          ></b-form-input>
        </b-col>
      </b-row>
      <b-row class="my-1">
        <b-col sm="4">
          <label for="input-small">Password</label>
        </b-col>
        <b-col sm="8">
          <b-form-input
            id="input-small"
            size="sm"
            type="password"
            placeholder="Enter your Password"
          ></b-form-input>
        </b-col>
      </b-row>
      <b-button variant="success">LOGIN</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "Login",
};
</script>
