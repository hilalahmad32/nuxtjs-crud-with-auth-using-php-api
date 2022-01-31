export const state = () => ({
    token: localStorage.getItem('token') || '',
    user: {},
    products: []
})

export const getters = {
    user: (state) => {
        return state.user
    },
    token: (state) => {
        return state.token
    },
    products: (state) => {
        return state.products;
    }
}

export const mutations = {
    setUser(state, user) {
        state.user = user;
    },
    setToken(state, token) {
        state.token = token
    },
    setProducts(state, products) {
        state.products = products;
    }
}


export const actions = {
    async createUser(_, data) {
        const res = await this.$axios.post('https://nuxt-app123.000webhostapp.com/php-api-with-jwt-auth/auth-file/create-user.php', data);

        if (res.data.status == 1) {
            alert(res.data.message);
            data.name = "";
            data.email = "";
            data.password = "";
            this.$router.push('/login')
        } else {
            alert(res.data.message)
        }
    },

    async loginUser({ commit }, data) {
        const res = await this.$axios.post('https://nuxt-app123.000webhostapp.com/php-api-with-jwt-auth/auth-file/login-user.php', data);
        if (res.data.status == 1) {
            data.email = "";
            data.password = "";
            localStorage.setItem('token', res.data.jwt);
            commit('setToken', res.data.jwt);
            alert(res.data.message)
            this.$router.push("/");

        } else {
            alert(res.data.message)
        }
    },

    async logoutUser({ commit }) {
        commit('setToken', '');
        localStorage.removeItem('token');
        this.$router.push("/login")
    },


    async readUser({ commit }) {
        const config = {
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        };
        const res = await this.$axios.get('https://nuxt-app123.000webhostapp.com/php-api-with-jwt-auth/auth-file/read-user.php', config);
        if (res.data.status == 1) {
            commit('setUser', res.data.message);
        } else {
            alert(res.data.message);
        }
    },

    async createProduct(_, data) {
        const config = {
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        };
        const res = await this.$axios.post('https://nuxt-app123.000webhostapp.com/php-api-with-jwt-auth/crud-file/create-product.php', data, config);
        if (res.data.status == 1) {
            alert(res.data.message);
            this.$router.push('/product/');
        } else {
            alert(res.data.message);
        }
    },

    async deleteProduct({ commit, state }, data) {
        const res = await this.$axios.post('https://nuxt-app123.000webhostapp.com/php-api-with-jwt-auth/crud-file/delete-products.php', data);
        const newProducts = state.products.filter(item => item.id !== data.id);
        if (res.data.status == 1) {
            alert(res.data.message);
            commit('setProducts', newProducts);
        } else {
            alert(res.data.message);

        }
    },
    async getAllProduct({ commit }) {
        const res = await this.$axios.get('https://nuxt-app123.000webhostapp.com/php-api-with-jwt-auth/crud-file/get-all-products.php');
        if (res.data.status == 1) {
            commit('setProducts', res.data.message);
        }
    },

    async updateProduct(_, data) {
        const res = await this.$axios.post('https://nuxt-app123.000webhostapp.com/php-api-with-jwt-auth/crud-file/update-products.php', data);
        if (res.data.status == 1) {
            alert(res.data.message);
            this.$router.push('/product/')
        } else {
            alert(res.data.message);
        }
    }
}