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
          <P @click="$bvModal.hide('my-modal_2')" v-b-modal.modal_1>
            Don't have an account?
          </P>
        </b-col>
      </b-row>
    </b-modal>
  </div>
</template>

<script>
import firebase from "firebase/app";
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
    async login() {
      let user = null;
      if (this.input.email === "" || this.input.password === "") {
        alert("fill all the field");
      } else {
        user = await this.signIn(this.input.email, this.input.password);

        if (user != null) {
          this.$store.commit("setUser", user);

          alert("Welcome");
          this.$bvModal.hide("my-modal_2");
          // this.$router.push("/product");
        } else {
          alert("check your email or password");
        }
      }
    },

    async signIn() {
      let email = this.input.email;
      let password = this.input.password;
      try {
        let userCredential = await firebase
          .auth()
          .signInWithEmailAndPassword(email, password);
        let user = userCredential.user;

        if (user) {
          user = {
            uid: user.uid,

            firstname: user.displayName,
            email: user.email,
          };
          console.log("userLog", user.uid);
        }
        console.log("userLog", user);
        return user;
      } catch (e) {
        console.log(e.message);
        return null;
      }
    },
  },
};
</script>
