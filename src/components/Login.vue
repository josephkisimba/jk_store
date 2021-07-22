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
import swal from "sweetalert";
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
      return this.$store.getters.userLoggedIn;
    },
  },

  methods: {
    async login() {
      let user = null;
      if (this.input.email == "" || this.input.password == "") {
        swal({
          icon: "error",
          text: "Check you credentials!!",
          button: "ok",
        });
      } else {
        user = await this.userSigningIn(this.input.email, this.input.password);

        if (user != null) {
          this.$store.commit("setUser", user);
          this.$bvModal.hide("my-modal_2");

          swal({
            icon: "success",
            text: "Signed in successfully",
            button: "ok",
          });
        } else {
          swal({
            icon: "error",
            text: "Couldn't authenticate Please check your email or password ",
            button: "ok",
          });
        }
      }
    },

    async userSigningIn(email, password) {
      try {
        let userCredential = await firebase
          .auth()
          .signInWithEmailAndPassword(email, password);

        let user = userCredential.user;

        //===========================================================
        if (user) {
          // User Profile
          user = {
            name: user.displayName,
            email: user.email,
            uid: user.uid,
          };
        }
        //======================================================
        console.log("userLog", user);
        return user;
      } catch (error) {
        console.log(error.message);
        return null;
      }
    },
  },
};
</script>
