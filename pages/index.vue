<template>
  <div>
    <div
      class="site-blocks-cover overlay"
      style="background-image: url(/images/hero_2.jpg); background-position: 50% -20%;"
    >
      <div class="container">
        <div class="row align-items-center justify-content-center">
          <div class="col-md-12" data-aosw="fade-up" data-aosw-delay="400">
            <div class="row mb-4">
              <div class="col-md-7">
                <h1>Catálogo Morana Taguatinga</h1>
                <p class="mb-5 lead">
                  A Morana Taguatinga Shopping é uma das principais franquias da
                  Morana ao redor do mundo, e, agora, nosso atendimento de
                  qualidade finalmente chegou ao digital. Seja Bem-Vinda!
                </p>
                <div>
                  <a
                    href="#products-section"
                    class="btn btn-white btn-outline-white py-3 px-5 rounded-0 mb-lg-0 mb-2 d-block d-sm-inline-block"
                    >Pedir Agora</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="products-section" class="site-section">
      <div class="container">
        <div class="row mb-5 justify-content-center">
          <div class="col-md-6 text-center">
            <h3 class="section-sub-title">Produtos Preferidos</h3>
            <h2 class="section-title mb-3">Nossos Produtos</h2>
            <p>
              Este catálogo traz as peças mais desejadas, procuradas e amadas
              das nossas lojas físicas. Sem dúvida alguma a peça que faltava
              para completar o seu look está aqui, confira!
            </p>
          </div>
        </div>
        <div class="row">
          <!-- Produtos -->
          <div
            v-for="produto in produtos"
            :key="produto.id"
            class="col-lg-4 col-md-6 mb-5"
          >
            <div class="product-item">
              <figure>
                <img :src="produto.urlImagem" alt="Image" class="img-fluid" />
              </figure>
              <div class="px-4">
                <h3>
                  <a href="#">{{ produto.nome }}</a>
                </h3>
                <div class="mb-3">
                  <span class="meta-icons wishlist active"
                    ><a href="#" class="mr-2"
                      ><span class="icon-heart"></span
                    ></a>
                    {{ produto.numeroCurtidas }}
                  </span>
                </div>
                <p class="mb-4">
                  {{ produto.descricao }}
                </p>
                <div>
                  <a
                    v-if="!alreadyInCart(produto.id)"
                    href="#adicionar-ao-carrinho"
                    class="btn btn-black mr-1 rounded-0"
                    >Pedir</a
                  >
                  <a
                    v-else
                    href="#adicionar-ao-carrinho"
                    disabled
                    class="btn btn-black btn-outline-black mr-1 rounded-0 disabled"
                    ><span class="icon-check"></span
                  ></a>
                  <a
                    :href="'produto/' + produto.id"
                    class="btn btn-black btn-outline-black ml-1 rounded-0"
                    >Detalhes</a
                  >
                </div>
              </div>
            </div>
          </div>
          <!-- Fim Produtos -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  async asyncData({ $axios }) {
    const produtos = await $axios.$get('/api/produtos')
    return { produtos }
  },
  computed: {
    ...mapGetters({
      getCart: 'cart/get',
      cartLength: 'cart/getLength'
    })
  },
  methods: {
    alreadyInCart(id) {
      return (
        this.cartLength &&
        !!this.getCart.filter((item) => item.produto.id === id).length
      )
    },
    addToCart(id) {
      if (this.alreadyInCart) {
        return
      }
      const item = { quantidade: 1, produto: { id } }
      const newCart = [...this.getCart, item]
      this.$cookies.set('cart', newCart)
      const cookieCart = this.$cookies.get('cart')
      this.$store.commit('cart/setCart', cookieCart)
    }
  },

  head() {
    return {
      title:
        this.$nuxt.$route.name === 'catalogo'
          ? 'Morana Taguatinga Shopping | Catálogo'
          : 'Morana Taguatinga Shopping'
    }
  }
}
</script>
