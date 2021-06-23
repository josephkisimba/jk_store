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
            value="getFirstname"
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
            value="getLastname"
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
            value="getEmail"
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
            value="getAddress"
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
import swal from "sweetalert";

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
      return this.$store.getters.user;
    },
    LoggedIn() {
      return this.$store.getters.userLoggedIn;
    },
    getFirstname() {
      return this.input.firstname;
    },

    getLastname() {
      return this.input.lastname;
    },

    getEmail() {
      return this.input.email;
    },
    getAddress() {
      return this.input.address;
    },
  },
  methods: {
    async fetchUserData() {
      var userRef = db.collection("users").doc(this.getUser.email);
      console.log("UserRef0", userRef);
      var doc = await userRef.get();
      console.log("doc", doc);
      if (doc.exists) {
        this.input = doc.data();
      }
      console.log("docData", doc.data());
    },
    // fetchUserData() {
    //   var userRef = db.collection("users").doc(this.getUser.email);

    //   userRef
    //     .get()
    //     .then((doc) => {
    //       if (doc.exists) {
    //         this.input = doc.data();
    //         console.log("Document data:", doc.data());
    //       } else {
    //         // doc.data() will be undefined in this case
    //         console.log("No such document!");
    //       }
    //     })
    //     .catch((error) => {
    //       console.log("Error getting document:", error);
    //     });
    // },
    async updateUserDetails() {
      let userRef = await db.collection("users").doc(this.getUser.email);
      console.log("UserRef 1", userRef);
      userRef.update({
        firstname: this.input.firstname,
        lastname: this.input.lastname,
        email: this.input.email,
        address: this.input.address,
      });
      console.log("UserRef profile", userRef);

      let user = await firebase.auth().currentUser;
      console.log("User pro", user);
      console.log("input.email", this.input.email);
      console.log("update finished");
      swal({
        text: "Details Updated",
        icon: "success",
        button: "OK",
      });
    },
    // updateUserDetails() {
    //   let firstname = this.input.firstname;
    //   let lastname = this.input.lastname;
    //   let email = this.input.email;
    //   let address = this.input.address;

    //   db.collection("users")
    //     .doc(this.getUser.email)
    //     .update({
    //       firstname: firstname,
    //       lastname: lastname,
    //       email: email,
    //       address: address,
    //     })
    //     .then(() => {
    //       const user = firebase.auth().currentUser;
    //       console.log("User", user);
    //       console.log("input", this.input.email);
    //       user
    //         .updateEmail(this.input.email)
    //         .then(() => {
    //           // Update successful
    //           // ...
    //           console.log("Email updated");
    //         })
    //         .catch((error) => {
    //           // An error occurred
    //           // ...
    //           console.log("Error Email", error);
    //         });

    //       console.log("Data successfully updated!");
    //     });
    // },
  },
  mounted() {
    this.fetchUserData();
  },
};
</script>
