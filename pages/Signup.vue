<template>
  <div>
    <v-container>
      <v-row justify="center" align="center">
        <v-col cols="12" sm="8" md="6">
          <v-card>
            <v-card-title>
              <h1 class="my-4 text-center">Signup Form</h1>
              <form action="" id="w-100" @submit.prevent="signup">
                <v-textField
                  v-model="name"
                  label="Enter Your Name"
                  type="text"
                ></v-textField>
                <v-textField
                  label="Enter Your Email"
                  type="email"
                  v-model="email"
                ></v-textField>
                <v-textField
                  label="Enter Your Password"
                  type="password"
                  v-model="password"
                ></v-textField>
                <v-btn color="primary" type="submit">Signup</v-btn>
              </form>
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  middleware: "guest",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    ...mapActions(["createUser"]),
    signup() {
      if (!this.name || !this.email || !this.password) {
        alert("Please Fill the Field");
      } else {
        const data = {
          name: this.name,
          email: this.email,
          password: this.password,
        };
        this.createUser(data);
      }
    },
  },
};
</script>
<style>
#w-100 {
  width: 100%;
}
.text-center {
  text-align: center !important;
}
</style>