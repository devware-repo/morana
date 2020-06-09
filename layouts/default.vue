<template>
  <div class="site-wrap">
    <div id="home-section" class="top-bar py-3 bg-light">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-6 text-left">
            <ul class="social-media">
              <li>
                <a
                  href="https://www.facebook.com/Morana-Acess%C3%B3rios-189015681627944/"
                  target="_blank"
                  ><span class="icon-facebook"></span
                ></a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/morana.taguatinga/?hl=pt"
                  target="_blank"
                  ><span class="icon-instagram"></span
                ></a>
              </li>
            </ul>
          </div>
          <div class="col-6">
            <p class="mb-0 float-right">
              <span class="mr-3"
                ><a href="tel://#">
                  <span
                    class="icon-phone mr-2"
                    style="position: relative; top: 2px;"
                  ></span
                  ><span class="d-none d-lg-inline-block text-black"
                    >(61) 98110-7359</span
                  ></a
                ></span
              >
              <span
                ><a href="#"
                  ><span
                    class="icon-envelope mr-2"
                    style="position: relative; top: 2px;"
                  ></span
                  ><span class="d-none d-lg-inline-block text-black"
                    >taguatinga@morana.com.br</span
                  ></a
                ></span
              >
            </p>
          </div>
        </div>
      </div>
    </div>

    <header
      class="site-navbar py-4 bg-white js-sticky-header site-navbar-target"
      role="banner"
    >
      <div class="container">
        <div class="row align-items-center">
          <div class="col-6 col-xl-2">
            <h1 class="mb-0 site-logo">
              <a href="/catalogo" class="text-black mb-0"
                >Morana Taguatinga<span class="text-primary">.</span>
              </a>
            </h1>
          </div>
          <div class="col-12 col-md-10 d-none d-xl-block">
            <nav
              class="site-navigation position-relative text-right"
              role="navigation"
            >
              <ul
                class="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block"
              >
                <li>
                  <a href="/carrinho">
                    <img
                      class="cart-menu-icon"
                      src="/images/cart-icon.svg"
                      alt="Cart Icon"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title="Ver Carrinho"
                    />
                    <div v-if="cartLength > 0" class="cart-badge">
                      {{ cartLength }}
                    </div>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div
          class="col-6 d-inline-block d-xl-none ml-md-0 py-3"
          style="position: relative; top: 3px;"
        >
          <a href="/carrinho">
            <img
              class="cart-menu-icon float-right"
              src="/images/cart-icon.svg"
              alt="Cart Icon"
            />
          </a>
        </div>
      </div>
    </header>

    <nuxt />
    <!-- App injection here -->

    <footer class="site-footer bg-white position-relative">
      <div class="container">
        <div class="row">
          <div class="col col-md-12">
            <div class="row">
              <div class="col-12 col-md-5">
                <h2 class="footer-heading mb-4">Sobre nós</h2>
                <p>
                  A Morana Taguatinga Shopping é uma das maiores franquias da
                  Morana em todo o mundo. Estamos localizados no Taguatinga
                  Shopping e desde 2008 atendemos nossas clientes com carinho,
                  dedicação e um delicioso cafézinho quente.
                </p>
              </div>
              <div class="col-12 col-md-3 ">
                <h2 class="footer-heading mb-4">Navegue:</h2>
                <ul class="list-unstyled">
                  <li><a href="#">Catálogo</a></li>
                  <li><a href="#products-section">Produtos</a></li>
                  <li><a href="/carrinho">Carrinho</a></li>
                </ul>
              </div>
              <div class="col-12 col-md-4">
                <h2 class="footer-heading mb-4">Nos Acompanhe!</h2>
                <a
                  href="https://www.facebook.com/Morana-Acess%C3%B3rios-189015681627944/"
                  target="_blank"
                  class="pl-0 pr-3"
                  ><span class="icon-facebook" style="font-size: 23px"></span
                ></a>
                <a
                  href="https://www.instagram.com/morana.taguatinga/?hl=pt"
                  target="_blank"
                  class="pl-3 pr-3"
                  ><span class="icon-instagram" style="font-size: 23px"></span
                ></a>
              </div>
            </div>
          </div>
          <div class="col-12">
            <div class="row pt-md-5 mt-md-5 text-center">
              <div class="col-md-12">
                <div class="border-top pt-5">
                  <p>
                    <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
                    Copyright &copy;
                    <script>
                      document.write(new Date().getFullYear())
                    </script>
                    All rights reserved | This template is made with
                    <i class="icon-heart" aria-hidden="true"></i> by
                    <a href="https://colorlib.com" target="_blank">Colorlib</a>
                    <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      cartLength: 'cart/getLength'
    })
  },

  mounted() {
    const cart = this.$cookies.get('cart')
    if (!cart) {
      return
    }
    this.$store.commit('cart/setCart', cart)
  }
}
</script>
