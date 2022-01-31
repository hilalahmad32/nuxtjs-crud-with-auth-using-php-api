<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card v-if="$store.state.token">
        <v-card-title class="headline"> Hi Hilal ahmad </v-card-title>
        <v-card-actions>
          <nuxt-link to="/product/"
            ><v-btn color="error">Products</v-btn></nuxt-link
          >
        </v-card-actions>
      </v-card>
      <v-card v-else>
        <v-card-title class="headline"> Please Login </v-card-title>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "IndexPage",
};
</script>
