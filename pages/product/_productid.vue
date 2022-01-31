<template>
  <div>
    <v-container>
      <v-row justify="center" align="center">
        <v-col cols="12" sm="8" md="6">
          <v-card>
            <v-card-title>
              <h1 class="my-4 text-center">Create Product</h1>
              <form action="" id="w-100" @submit.prevent="updatePro">
                <v-textField
                  label="Enter Your id"
                  v-model="id"
                  type="hidden"
                ></v-textField>
                <v-textField
                  label="Enter Your Title"
                  v-model="title"
                  type="text"
                ></v-textField>
                <v-textField
                  label="Enter Your Content"
                  type="text"
                  v-model="content"
                ></v-textField>
                <v-textField
                  label="Enter Your Price"
                  type="number"
                  v-model="price"
                ></v-textField>
                <v-btn color="primary" type="submit">Save</v-btn>
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
  middleware: ["auth"],
  data() {
    return {
      id: "",
      title: "",
      content: "",
      price: "",
    };
  },

  methods: {
    async getProductById() {
      const data = {
        id: this.$route.params.productid,
      };
      const res = await this.$axios.post(
        "https://nuxt-app123.000webhostapp.com/php-api-with-jwt-auth/crud-file/get-single-products.php",
        data
      );
      if (res.data.status == 1) {
        this.id = res.data.message[0].id;
        this.title = res.data.message[0].title;
        this.content = res.data.message[0].content;
        this.price = res.data.message[0].price;
      }
    },

    ...mapActions(["updateProduct"]),
    updatePro() {
      if (!this.id || !this.title || !this.price || !this.content) {
        alert("Please Fill the Field");
      } else {
        const data = {
          id: this.id,
          title: this.title,
          content: this.content,
          price: this.price,
        };
        this.updateProduct(data);
      }
    },
  },
  mounted() {
    this.getProductById();
  },
};
</script>
<style>
</style>