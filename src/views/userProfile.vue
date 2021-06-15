<template>
  <div class="d-flex flex-column align-items-center justify-content-center">
    <b-card header="PROFILE" header-tag="header">
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
            v-model="input.email"
            type="email"
            placeholder="Enter your Email"
          ></b-form-input>
          <b-button @click="updateUserDetails" variant="success" class="mt-2">
            CHANGE
          </b-button>
        </b-col>
      </b-row>
      <!-- <b-row class="my-1">
        <b-col sm="4">
          <label for="input-lastname">Address</label>
        </b-col>
        <b-col sm="8">
          <b-form-input
            id="input-address"
            size="sm"
            v-model="input.address"
            placeholder="Enter your Address"
          ></b-form-input>
          
        </b-col>
      </b-row> -->
    </b-card>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var db = firebase.firestore();

export default {
  data() {
    return {
      input: {
        firstname: "",
        lastname: "",
        email: "",
        // address: "",
      },
    };
  },

  computed: {
    getUser() {
      // console.log(this.getUser);
      return this.$store.getters.user;
    },
    LoggedIn() {
      return this.$store.getters.userLoggedIn;
    },
  },
  methods: {
    updateUserDetails() {
      let firstname = this.input.firstname;
      let lastname = this.input.lastname;
      let email = this.input.email;
      // let address = this.input.address;

      if (
        this.input.firstname === "" ||
        this.input.lastname === "" ||
        this.input.email === "" ||
        this.input.password === ""
      ) {
        alert("Fill all the inputfield");
      } else {
        db.collection("cities")
          .doc(this.getUser.email)
          .update({
            firstname: firstname,
            lastname: lastname,
            email: email,
            // address: address,
          });
      }
    },
  },
};
</script>
