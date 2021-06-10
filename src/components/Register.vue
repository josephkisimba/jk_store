<template>
  <div>
    <b-modal id="modal_1" title="REGISTER" hide-footer>
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
          <p @click="$bvModal.hide('modal_1')" v-b-modal.my-modal_2>
            Already have an account?
          </p>
        </b-col>
      </b-row>
    </b-modal>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBoWzvnEiow6wW0TRN_zXxlgINnKDoEPUQ",
  authDomain: "my-store-bcc41.firebaseapp.com",
  projectId: "my-store-bcc41",
  storageBucket: "my-store-bcc41.appspot.com",
  messagingSenderId: "117645143532",
  appId: "1:117645143532:web:ce791919b160eb0579e4c9",
  measurementId: "G-7W2N3MHHSW",
};
// Initialize Firebase
var firestore = firebase.initializeApp(firebaseConfig);
var db = firestore.firestore();
// var firestore = firebase.firestore();
// var db = firebase.firestore();

export default {
  name: "Register",
  data() {
    return {
      input: {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmation_password: "",
      },
    };
  },
  computed: {
    LoggedIn() {
      return this.$store.getters.userLoggedIn;
    },
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
        let firstname = this.input.firstname;
        let lastname = this.input.lastname;
        let email = this.input.email;
        let password = this.input.password;

        //----------SIGNUP-------------------------------
        firestore
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            // ...
          })
          .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;

            //console.log(error);
            // ..
          });
        //------------------------------------------------

        //-----------------------ADDING DATA TO DB------------------
        db.collection("users")
          .add({
            firstname: firstname,
            lastname: lastname,
            email: email,
          })
          .then(function() {
            console.log("saved");
          })
          .catch(function(error) {
            console.log("erro", error);
          });
        //------------------------------------------------------------

        //---------------------FEETCHING DATA  IN DB-----------------
        db.collection("users")
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              console.log(`${doc.id} => ${doc.data()}`);
            });
          });
        // usersRef
        //   .get()
        //   .then(function(doc) {
        //     if (doc && doc.exists) {
        //       const userData = doc.data();
        //       console.log("Firestore data", userData);
        //     }
        //   })
        //   .catch(function(error) {
        //     console.log("erro", error);
        //   });
        //---------------------------------

        this.$bvModal.hide("modal_1");

        alert("You have been Register");

        //===========================================================================
        // firebase
        //   .auth()
        //   .createUserWithEmailAndPassword(
        //     /*firstname,
        //      lastname, */
        //     email,
        //     password
        //   )
        //   .then((user) => {
        //     const newUser = {
        //       id: user.uid,
        //       firstname: user.firstname,
        //       lastname: user.lastname,
        //       email: user.email,
        //       password: user.password,
        //     };
        // console.log(cred.user);
        //     this.$store.commit("setUser", newUser);
        //   })
        //   .catch((error) => {
        //     console.log(error);
        //   });
      } else {
        alert("password incorrect");
      }
    },

    // userCollection() {
    //   let firstname = this.input.firstname;
    //   let lastname = this.input.lastname;
    //   let email = this.input.email;
    //   let password = this.input.password;
    // },
    valid() {
      return this.input.password === this.input.confirmation_password;
    },
  },
};
</script>
