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
    }
}

export const mutations = {
    setUser(state, user) {
        state.user = user;
    },
    setToken(state, token) {
        state.token = token
    }
}


export const actions = {
    async createUser(_, data) {
        const res = await this.$axios.post('http://localhost/php-api-with-jwt-auth/auth-file/create-user.php', data);

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
        const res = await this.$axios.post('http://localhost/php-api-with-jwt-auth/auth-file/login-user.php', data);
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
    }
}