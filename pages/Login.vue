<template>
  <div>
    <v-container>
      <v-row justify="center" align="center">
        <v-col cols="12" sm="8" md="6">
          <v-card>
            <v-card-title>
              <h1 class="my-4 text-center">Login Form</h1>
              <form action="" id="w-100" @submit.prevent="login">
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
                <v-btn color="primary" type="submit">Login</v-btn>
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
  data() {
    return {
      email: "",
      password: "",
    };
  },
  middleware: ["guest"],
  methods: {
    ...mapActions(["loginUser"]),
    login() {
      if (!this.email || !this.password) {
        alert("please fill the field");
      } else {
        const data = {
          email: this.email,
          password: this.password,
        };
        this.loginUser(data);
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