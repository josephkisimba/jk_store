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
import swal from "sweetalert";

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
  //===============================================================
  methods: {
    register() {
      if (
        this.input.firstname === "" ||
        this.input.lastname === "" ||
        this.input.email === "" ||
        this.input.password === "" ||
        this.confirmation_password === ""
      ) {
        console.log("Fill all the input field");
      } else if (this.valid()) {
        let firstname = this.input.firstname;
        let lastname = this.input.lastname;
        let email = this.input.email;
        let password = this.input.password;

        console.log("CHECKING");

        let user = db.collection("users").doc(email);

        user.get().then((doc) => {
          let userFound = doc.data();
          if (userFound) {
            return null;
          }
        });
        console.log("Saving");
        let userSignIn = firebase
          .auth()
          .createUserWithEmailAndPassword(email, password);

        console.log("create profile");
        let userRef = db.collection("users").doc(email);

        userRef.set({
          firstname: firstname,
          lastname: lastname,
          email: email,
          id: this.generateUCID(),
        });

        let userProf = firebase.auth().currentUser;
        console.log("userProf", userProf);
        userProf.updateProfile({
          displayName: firstname + " " + lastname,
        });
        this.$bvModal.hide("modal_1");
        swal({
          icon: "success",
          text: "Welcome",
          button: "ok",
        });

        var userFetched = db.collection("users").doc(email);

        userFetched
          .get()
          .then((doc) => {
            if (doc.exists) {
              let found = doc.data();
              console.log("Document data:", found);
              console.log("ID:", found.id);
            } else {
              // doc.data() will be undefined in this case
              console.log("No such document!");
            }
          })
          .catch((error) => {
            console.log("Error getting document:", error);
          });
      } else {
        alert("password incorrect");
      }
    },
    generateUCID() {
      console.log("Starte generating UUID");
      let d = new Date().getTime();
      let ucid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
        /[xy]/g,
        function(c) {
          let r = (d + Math.random() * 16) % 16 | 0;
          d = Math.floor(d / 16);
          return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
        }
      );
      console.log("UCID", ucid);
      return ucid;
    },
    valid() {
      return this.input.password === this.input.confirmation_password;
    },
  },
};
</script>
