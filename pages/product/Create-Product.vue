<template>
  <div>
    <v-container>
      <v-row justify="center" align="center">
        <v-col cols="12" sm="8" md="6">
          <v-card>
            <v-card-title>
              <h1 class="my-4 text-center">Create Product</h1>
              <form action="" id="w-100" @submit.prevent="create">
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
      title: "",
      content: "",
      price: "",
    };
  },
  methods: {
    ...mapActions(["createProduct"]),
    create() {
      if (!this.title || !this.content || !this.price) {
        alert("Please fill all the field");
      } else {
        const data = {
          title: this.title,
          content: this.content,
          price: this.price,
        };
        this.createProduct(data);
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