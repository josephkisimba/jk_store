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
          text: "Fill all the imputfield",
          icon: "error",
          button: "OK",
        });
      } else {
        user = await this.userSignIn(this.input.email, this.input.password);

        if (user != null) {
          this.$store.commit("setUser", user);
          console.log("userP", user);
          this.$bvModal.hide("my-modal_2");

          swal({
            icon: "success",
            text: "Signed in successfully",
            button: "ok",
          });
        } else {
          Toast.fire({
            icon: "error",
            text: "Please check your email or password ",
            button: "ok",
          });
        }
      }
    },
    async userSignIn() {
      let email = this.input.email;
      let password = this.input.password;
      try {
        let userSigninIn = await firebase
          .auth()
          .signInWithEmailAndPassword(email, password);
        const user = userSigninIn.user;

        if (user) {
          user = {
            firstname: user.displayName,
            email: user.email,
            uid: user.uid,
          };
        }
        return user;
      } catch (error) {
        console.log("ErrorMessage", error.message);
        return null;
      }
    },

    // async login() {
    //   let user = null;
    //   if (this.input.email === "" || this.input.password === "") {
    //     alert("fill all the field");
    //   } else {
    //     let email = this.input.email;
    //     let password = this.input.password;
    //     console.log("Start login");
    //     try {
    //       console.log("Start ");
    //       let userCredential = await firebase
    //         .auth()
    //         .signInWithEmailAndPassword(email, password);
    //       console.log("userCredential", userCredential);

    //       const user = userCredential.user;
    //       console.log("user", user);

    //       if (user) {
    //         user = {
    //           uid: user.uid,
    //           firstname: user.firstname,
    //           email: user.email,
    //         };
    //         this.$store.commit("setUser", user);
    //         console.log("userP", user);
    //         this.$bvModal.hide("my-modal_2");
    //         swal({
    //           text: "Loggin successful",
    //           icon: "success",
    //           button: "OK",
    //         });
    //         console.log("userLog", user.uid);
    //       } else {
    //         swal({
    //           text: "check your email or password",
    //           icon: "error",
    //           button: "OK",
    //         });
    //       }
    //       console.log("userLog", user);
    //       return user;
    //     } catch (error) {
    //       var errorMessage = error.message;
    //       console.log("errorMessage", errorMessage);
    //       return null;
    //     }
    //     //=========================END======================================
    //   }
    // },
  },
};
</script>
