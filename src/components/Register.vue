<template>
  <div>
    <b-modal id="modal1" title="REGISTER" hide-footer>
      <b-row class="my-1">
        <b-col sm="4">
          <label for="input-firstname input-live">FirstName</label>
        </b-col>
        <b-col sm="8">
          <b-form-input
            id="input-firstname"
            size="sm"
            v-model="input.firstname"
            placeholder="Enter your FirstName"
          ></b-form-input>
        </b-col>
      </b-row>
      <b-row class="my-1">
        <b-col sm="4">
          <label for="input-lastname">LastName</label>
        </b-col>
        <b-col sm="8">
          <b-form-input
            id="input-lastname"
            size="sm"
            v-model="input.lastname"
            placeholder="Enter your LastName"
          ></b-form-input>
        </b-col>
      </b-row>
      <b-row class="my-1">
        <b-col sm="4">
          <label for="input-email">Email</label>
        </b-col>
        <b-col sm="8">
          <b-form-input
            id="input-email"
            size="sm"
            type="email"
            v-model="input.email"
            placeholder="Enter your Email"
          ></b-form-input>
        </b-col>
      </b-row>
      <b-row class="my-1">
        <b-col sm="4">
          <label for="input-password">Password</label>
        </b-col>
        <b-col sm="8">
          <b-form-input
            id="input-password"
            size="sm"
            type="password"
            v-model="input.password"
            placeholder="Enter your Password"
          ></b-form-input>
        </b-col>
      </b-row>
      <b-row class="my-1">
        <b-col sm="4">
          <label for="input-ConfPassword">Password</label>
        </b-col>
        <b-col sm="8">
          <b-form-input
            id="input-ConfPassword"
            size="sm"
            type="password"
            v-model="input.confirmation_password"
            placeholder="Confirm password"
          ></b-form-input>
          <b-button @click="register" variant="success" class="mt-2">
            REGISTER
          </b-button>
        </b-col>
      </b-row>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "Register",
  computed: {},
  data() {
    return {
      input: {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmation_password: "",
        close: "",
      },
    };
  },
  methods: {
    register() {
      if (
        this.input.firstname === "" ||
        this.input.lastname === "" ||
        this.input.email === "" ||
        this.input.password === "" ||
        this.confirmation_password === ""
      ) {
        alert("Fill all the inputfield");
      } else if (this.valid()) {
        alert("You have been Register");
      } else {
        alert("password incorrect");
      }
    },
    valid() {
      return this.input.password === this.input.confirmation_password;
    },
  },
};
</script>
