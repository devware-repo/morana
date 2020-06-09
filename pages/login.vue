<template>
  <div class="container pt-4">
    <div class="row">
      <div class="col-12 text-center">
        <div class="row">
          <div class="col-12 col-md-8 col-lg-4 offset-md-2 offset-lg-4">
            <img class="w-100" src="/images/user-img.svg" alt="User img" />
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-12 col-md-8 col-lg-4 offset-md-2 offset-lg-4">
            <form class="needs-validation">
              <div class="login-input-wrapper text-left">
                <img
                  class="login-icon"
                  src="/images/login-user-icon.svg"
                  alt="Usuário"
                />
                <input
                  v-model="username"
                  type="text"
                  class="login-input"
                  placeholder="Usuário"
                  name="username"
                  required
                />
              </div>
              <div class="login-input-wrapper text-left mt-2">
                <img
                  class="login-icon"
                  src="/images/login-lock-icon.svg"
                  alt="Senha"
                />
                <input
                  v-model="senha"
                  type="password"
                  class="login-input"
                  placeholder="Senha"
                  name="senha"
                  required
                />
              </div>
              <button
                class="login-button mt-2"
                :disabled="loading"
                @click="login()"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'login',
  data() {
    return {
      username: '',
      senha: '',
      loading: false
    }
  },

  methods: {
    async login() {
      try {
        this.$nuxt.$loading.start()
        this.loading = true
        const { username, senha } = this
        const response = await this.$axios.post('/api/login', {
          username,
          senha
        })
        this.$store.commit('auth/setToken', response.headers.authorization)
        this.$cookies.set('accessToken', response.headers.authorization)
        window.location.href = '/admin'
        this.loading = false
        this.$nuxt.$loading.finish()
      } catch (err) {
        this.loading = false
        this.$nuxt.$loading.finish()
        alert('Email ou senha inválidos')
      }
    }
  }
}
</script>
