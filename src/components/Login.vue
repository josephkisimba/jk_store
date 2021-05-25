<template>
  <div>
    <b-modal id="modal-2" title="LOGIN" hide-footer>
      <b-row class="my-1">
        <b-col sm="4">
          <label for="input-username">Username</label>
        </b-col>
        <b-col sm="8">
          <b-form-input
            id="input-username"
            size="sm"
            v-model="input.email"
            placeholder="Enter your Username"
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
          <b-button @click="login" variant="outline-primary" class="mt-2">
            LOGIN
          </b-button>
        </b-col>
      </b-row>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      input: {
        email: "",
        password: "",
      },
    };
  },
  computed: {
    LoggedIn() {
      // console.log("getLogin", this.LoggedIn);
      return this.$store.getters.userLoggedIn;
    },
  },
  methods: {
    login() {
      if (this.input.email === "" || this.input.password === "") {
        alert("please enter your email and your password");
      } else {
        let em = this.input.email;
        let pass = this.input.password;
        this.$store.commit("setUser", { em, pass });

        alert("Login successfull");
      }
    },
  },
};
</script>
