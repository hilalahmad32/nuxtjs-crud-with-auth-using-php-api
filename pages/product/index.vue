<template >
  <div>
    <v-container>
      <v-simple-table dark>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Id</th>
              <th class="text-left">Title</th>
              <th class="text-left">Name</th>
              <th class="text-left">Content</th>
              <th class="text-left">Price</th>
              <th class="text-left">Edit</th>
              <th class="text-left">Delete</th>
            </tr>
          </thead>
          <tbody v-if="$store.state.products.length > 0">
            <tr v-for="product in $store.state.products" :key="product.id">
              <td>{{ product.id }}</td>
              <td>{{ product.title }}</td>
              <td>{{ product.name }}</td>
              <td>{{ product.content }}</td>
              <td>{{ product.price }}</td>
              <td>
                <nuxt-link
                  :to="{
                    name: 'product-productid',
                    path: 'product/:productid',
                    params: { productid: product.id },
                  }"
                  ><v-btn class="secondary">Edit</v-btn></nuxt-link
                >
              </td>
              <td>
                <v-btn @click="deletePro(product.id)" class="error"
                  >Delete</v-btn
                >
              </td>
            </tr>
          </tbody>
          <tbody v-else>
            <h3>Record Not Found</h3>
          </tbody>
        </template>
      </v-simple-table>
    </v-container>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  middleware: ["auth"],

  methods: {
    ...mapActions(["getAllProduct"]),
    ...mapActions(["deleteProduct"]),
    deletePro(id) {
      const data = {
        id: id,
      };
      this.deleteProduct(data);
      this.getAllProduct();
    },
  },
  mounted() {
    this.getAllProduct();
  },
};
</script>
<style >
</style>