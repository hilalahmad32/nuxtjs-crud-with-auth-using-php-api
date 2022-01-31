<template>
  <v-app dark>
    <v-app-bar :clipped-left="clipped" fixed app>
      <nuxt-link to="/"> <v-toolbar-title v-text="title" /></nuxt-link>
      <v-spacer />
      <v-toolbar-title v-if="$store.state.token">
        <nuxt-link to="/" class="mx-4 text--white">Home</nuxt-link>
        <nuxt-link to="/product/create-product" class="mr-4 text--white"
          >Create</nuxt-link
        >
        <v-btn color="error" @click="logout">Logout</v-btn>
      </v-toolbar-title>
      <v-toolbar-title v-else>
        <nuxt-link to="/login" class="text--white">Login</nuxt-link>
        <nuxt-link to="/signup" class="mx-4 text--white">Signup</nuxt-link>
      </v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "DefaultLayout",
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "/",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Inspire",
          to: "/inspire",
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Crud App",
    };
  },

  methods: {
    ...mapActions(["logoutUser"]),
    logout() {
      this.logoutUser();
    },
  },
};
</script>

<style>
a {
  text-decoration: none !important;
}
.text--white {
  color: white !important;
}
</style>