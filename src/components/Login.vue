<template>
  <div>
    <b-modal ref="my-modal_2" id="my-modal_2" title="LOGIN" hide-footer>
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
          <P @click="$bvModal.hide('my-modal_2')" v-b-modal.modal_1
            >Don't have an account?</P
          >
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
        let email = this.input.email;
        let password = this.input.password;
        this.$store.commit("setUser", { email, password });
        this.$bvModal.hide("my-modal_2");
        alert("Login successfull");
      }
    },
  },
};
</script>
