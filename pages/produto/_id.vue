<template>
  <div id="product-cover">
    <div class="container py-4">
      <div class="row">
        <div class="col-12 col-md-5">
          <div class="produto-img-wrapper w-100">
            <img
              class="produto-img w-100"
              :src="produto.urlImagem"
              :alt="produto.nome"
            />
          </div>
        </div>
        <div class="col-12 offset-md-2 col-md-5">
          <h1 class="produto-name mt-3 mt-md-0">{{ produto.nome }}</h1>
          <p class="produto-description mb-0">{{ produto.descricao }}</p>
          <span class="produto-curtidas active"
            ><span class="icon-heart"></span>
            {{ produto.numeroCurtidas }} Curtiram</span
          >
          <p class="produto-price mt-2">{{ getFormattedPrice }}</p>
          <button
            v-if="!alreadyInCart"
            class="adicionar-btn"
            @click="addToCart()"
          >
            Adicionar ao Carrinho
          </button>
          <button
            v-else
            class="adicionar-btn-disabled"
            disabled
            @click="addToCart()"
          >
            Adicionado ao Carrinho
            <span class="icon-check"></span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  async asyncData({ $axios, params }) {
    const produto = await $axios.$get(`/api/produtos/${params.id}`)
    return { produto }
  },
  data() {
    return {
      loading: false
    }
  },
  computed: {
    getFormattedPrice() {
      const { preco } = this.produto
      if (typeof preco !== 'number') {
        return preco
      }
      return preco.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL'
      })
    },

    ...mapGetters({
      getCart: 'cart/get',
      cartLength: 'cart/getLength'
    }),

    alreadyInCart() {
      return (
        this.cartLength &&
        !!this.getCart.filter((item) => item.produto.id === this.produto.id)
          .length
      )
    }
  },
  methods: {
    addToCart() {
      if (this.alreadyInCart) {
        return
      }
      const item = { quantidade: 1, produto: { id: this.produto.id } }
      const newCart = [...this.getCart, item]
      this.$cookies.set('cart', newCart)
      const cookieCart = this.$cookies.get('cart')
      this.$store.commit('cart/setCart', cookieCart)
    }
  },

  head() {
    return {
      title: `Morana Taguatinga Shopping | ${this.produto.nome || 'Produto'}`
    }
  }
}
</script>
