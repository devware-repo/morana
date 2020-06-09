<template>
  <div>
    <div v-if="!produtos.length" class="container-loading">
      <div>
        <h2>Seu carrinho está vazio :(</h2>
        <button
          class="cart-keep-shopping"
          onclick="window.location.href = '/catalogo'"
        >
          Continuar Comprando
        </button>
      </div>
    </div>
    <div v-else id="carrinho-cover">
      <!-- Desktop -->
      <div class="container d-none d-md-block">
        <div
          v-for="produto in produtos"
          :key="produto.id"
          class="row cart-product mb-3"
        >
          <div class="col-md-6 col-lg-5 offset-lg-1">
            <div class="row">
              <div class="col-md-4 col-lg-3">
                <img
                  class="cart-description-img"
                  src="/images/colar-coracao.jpg"
                  alt="Colar Dourado Morana Taguatinga"
                />
              </div>
              <div class="col-8">
                <h1 class="cart-title">{{ produto.nome }}</h1>
                <p class="cart-description">{{ produto.descricao }}</p>
              </div>
            </div>
          </div>
          <div class="col-2">
            <h1 class="cart-title  mb-3">Preço</h1>
            <div class="cart-data">{{ formattedPrice(produto.preco) }}</div>
          </div>
          <div class="col-2">
            <h1 class="cart-title  mb-3">Qtd.</h1>
            <div class="row align-items-center no-gutters">
              <div class="col-3">
                <p class="cart-data mb-0">x{{ produto.quantidade }}</p>
              </div>
              <div class="col-3">
                <span class="cart-add-qtd" @click="addQtd(produto.id)">+</span>
                <span class="cart-remove-qtd" @click="removeQtd(produto.id)"
                  >-</span
                >
              </div>
            </div>
          </div>
          <div class="col-2">
            <h1 class="cart-title  mb-3">Total</h1>
            <div class="cart-data">{{ getTotalPrice(produto.id) }}</div>
          </div>
        </div>
        <div class="row cart-finish mt-4 pt-3">
          <div class="col-12">
            <h1 class="cart-total-title">Total do Pedido</h1>
            <h1 class="cart-total-price">{{ getTotalPriceAll }}</h1>
          </div>
          <div class="col-9 col-lg-8 mt-4">
            <div class="row">
              <div class="col-12">
                <div class="row">
                  <div class="col-6">
                    <button
                      class="cart-keep-shopping"
                      onclick="window.location.href = '/catalogo'"
                    >
                      Continuar Comprando
                    </button>
                  </div>
                  <div class="col-6">
                    <button class="cart-finish-order" @click="sendMessage()">
                      Finalizar Pedido
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile -->
      <div class="container d-block d-md-none">
        <div
          v-for="produto in produtos"
          :key="'mobile_' + produto.id"
          class="row cart-product mb-3"
        >
          <div class="col-3">
            <img
              class="cart-description-img"
              src="/images/colar-coracao.jpg"
              alt="Colar Dourado Morana Taguatinga"
            />
          </div>
          <div class="col-6">
            <div class="row">
              <div class="col-12">
                <p class="cart-description">{{ produto.descricao }}</p>
              </div>
              <div class="col-6">
                <div class="cart-data">{{ formattedPrice(produto.preco) }}</div>
              </div>
              <div class="col-5">
                <div class="row">
                  <div class="col-6">
                    <p class="cart-data mb-0">x{{ produto.quantidade }}</p>
                  </div>
                  <div class="col-6 d-flex">
                    <span class="cart-add-qtd" @click="addQtd(produto.id)"
                      >+</span
                    >
                    <span
                      class="cart-remove-qtd ml-2"
                      @click="removeQtd(produto.id)"
                      >-</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-3 d-flex align-items-end">
            <h1 class="cart-title mb-3">Total</h1>
            <p class="cart-final-price mb-0">{{ getTotalPrice(produto.id) }}</p>
          </div>
        </div>
        <div class="row cart-finish mt-4 pt-3">
          <div class="col-12">
            <h1 class="cart-total-title">Total do Pedido</h1>
            <h1 class="cart-total-price">{{ getTotalPriceAll }}</h1>
          </div>
          <div class="col-12 mt-3">
            <button
              class="cart-keep-shopping"
              onclick="window.location.href = '/catalogo'"
            >
              Continuar Comprando
            </button>
            <button class="cart-finish-order mt-3" @click="sendMessage()">
              Finalizar Pedido
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, app: { $cookies } }) {
    const cart = $cookies.get('cart')
    const produtos = await Promise.all(
      cart.map(async (item) => {
        const produto = await $axios.$get(`produtos/${item.produto.id}`)
        return { ...produto, quantidade: item.quantidade }
      })
    )
    return { produtos }
  },

  computed: {
    getTotalPriceAll() {
      let sum = 0
      for (const produto of this.produtos) {
        sum = sum + produto.quantidade * produto.preco
      }

      return sum.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL'
      })
    }
  },

  methods: {
    sendMessage() {
      const parsedProductsInfo = this.produtos.map((produto) => {
        return `%0Ax${produto.quantidade} ${produto.nome} (n°${produto.numeroRegistro})%0A`
      })
      const url = 'https://api.whatsapp.com/send?'
      const numero = 'phone=5561999622175&'
      const mensagem = `text=Olá! eu passei pelo catálogo da Morana Taguatinga e decidi que quero comprar algumas peças... Eu vou querer:${parsedProductsInfo.join(
        ''
      )}`
      const link = url + numero + mensagem

      window.open(link)
    },

    addQtd(id) {
      this.produtos = this.produtos.map((produto) => {
        if (produto.id === id) {
          const { quantidade, quantidadeEstoque } = produto
          if (quantidade >= quantidadeEstoque) {
            alert('Quantidade máxima em estoque')
            return produto
          }
          return { ...produto, quantidade: quantidade + 1 }
        }
        return produto
      })
    },

    removeQtd(id) {
      this.produtos = this.produtos.map((produto) => {
        if (produto.id === id) {
          const { quantidade } = produto
          if (quantidade < 2) {
            return produto
          }
          return { ...produto, quantidade: quantidade - 1 }
        }
        return produto
      })
    },

    formattedPrice(val) {
      if (typeof val !== 'number') {
        return val
      }
      return val.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL'
      })
    },

    getTotalPrice(id) {
      const produto = this.produtos.filter((produto) => produto.id === id)[0]
      return this.formattedPrice(produto.preco * produto.quantidade)
    }
  }
}
</script>
