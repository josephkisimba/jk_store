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
        </b-col>
      </b-row>
      <b-row class="my-1">
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
          <b-button @click="updateUserDetails" variant="success" class="mt-2">
            CHANGE
          </b-button>
        </b-col>
      </b-row>
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
        firstname: null,
        lastname: null,
        email: null,
        address: null,
      },
    };
  },

  computed: {
    getUser() {
      // console.log(this.getUser);
      return this.$store.getters.user;
    },
  },

  methods: {
    fetchUserData() {
      var userRef = db.collection("users").doc(this.getUser.email);

      userRef
        .get()
        .then((doc) => {
          if (doc.exists) {
            this.input = doc.data();
            console.log("Document data:", doc.data());
          } else {
            // doc.data() will be undefined in this case
            console.log("No such user!");
          }
        })
        .catch((error) => {
          console.log("Error getting document:", error);
        });
    },

    updateUserDetails() {
      let firstname = this.input.firstname;
      let lastname = this.input.lastname;
      let email = this.input.email;
      let address = this.input.address;

      db.collection("users")
        .doc(this.getUser.email)
        .update({
          firstname: firstname,
          lastname: lastname,
          email: email,
          address: address,
        })
        .then((user) => {
          user = firebase.auth().currentUser;
          console.log("Current user", this.currentUser);
          user.updateEmail(this.input.email);
          console.log("Document successfully updated!");
        });
      alert("Details updated");
    },
  },

  mounted() {
    this.fetchUserData();
  },
};
</script>
