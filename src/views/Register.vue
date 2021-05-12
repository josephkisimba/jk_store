<template>
  <div
    class="d-flex flex-column align-items-center justify-content-center mt-5"
  >
    <b-card>
      <template #header>
        <h4 class="mb-0">REGISTER</h4>
      </template>
      <b-row class="my-1">
        <b-col sm="4">
          <label for="input-small">FirstName</label>
        </b-col>
        <b-col sm="8">
          <b-form-input
            id="input-small"
            size="sm"
            placeholder="Enter your FirstName"
          ></b-form-input>
        </b-col>
      </b-row>
      <b-row class="my-1">
        <b-col sm="4">
          <label for="input-small">LastName</label>
        </b-col>
        <b-col sm="8">
          <b-form-input
            id="input-small"
            size="sm"
            placeholder="Enter your LastName"
          ></b-form-input>
        </b-col>
      </b-row>
      <b-row class="my-1">
        <b-col sm="4">
          <label for="input-small">Email</label>
        </b-col>
        <b-col sm="8">
          <b-form-input
            id="input-small"
            size="sm"
            type="email"
            placeholder="Enter your Email"
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
          <b-button variant="success" class="mt-3">REGISTER</b-button>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "Register",
};
</script>
