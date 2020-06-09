<template>
  <div>
    <div class="site-wrap">
      <header
        class="site-navbar py-4 bg-white site-navbar-target position-fixed"
        role="banner"
      >
        <div class="container">
          <div class="row align-items-center">
            <div class="col-6 col-xl-2">
              <h1 class="mb-0 site-logo">
                <a href="/" class="text-black mb-0"
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
                    <a
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title="Encerrar Sessão"
                      @click="logout()"
                    >
                      <img
                        class="cart-menu-icon"
                        src="/images/log-off.svg"
                        alt="Log Off"
                      />
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
            <a @click="logout()">
              <img
                class="cart-menu-icon float-right"
                src="/images/log-off.svg"
                alt="Cart Icon"
              />
            </a>
          </div>
        </div>
      </header>

      <nuxt />
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="row pt-md-5 mt-md-5 text-center">
              <div class="col-md-12 text-center">
                <div class="border-top pt-5 text-center">
                  <p class="text-center">
                    Copyright &copy;
                    <script>
                      document.write(new Date().getFullYear())
                    </script>
                    All rights reserved | Made By Devware
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- .site-wrap -->
    </div>

    <!-- Modal Confirmar Pagamento -->
    <div
      id="confirmar-modal"
      class="modal fade"
      tabindex="-1"
      role="dialog"
      aria-labelledby="myLargeModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title">Confirmar Pagamento do Produto</h1>
          </div>
          <div class="modal-body">
            <div class="container">
              <div class="row">
                <div class="col-12">
                  <form
                    id="pagamento-form"
                    action="#"
                    method="POST"
                    class="needs-validation"
                    novalidate
                  ></form>
                  <div class="gui-validation" data-validation="pagamento-form">
                    <div class="form-group">
                      <label class="form-label" for="pagamento-name"
                        >Nome</label
                      >
                      <input
                        id="pagamento-name"
                        name="nome"
                        type="text"
                        class="form-control"
                        form="pagamento-form"
                        readonly
                      />
                      <div class="invalid-feedback">
                        Preencha este campo!
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="form-label" for="pagamento-description"
                        >Descrição</label
                      >
                      <input
                        id="pagamento-description"
                        name="descricao"
                        type="text"
                        class="form-control"
                        form="pagamento-form"
                        readonly
                      />
                      <div class="invalid-feedback">
                        Preencha este campo!
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="form-label" for="pagamento-price"
                        >Preço</label
                      >
                      <input
                        id="pagamento-price"
                        name="preco"
                        type="text"
                        class="form-control maskMoney"
                        data-symbol="R$ "
                        data-thousands="."
                        data-decimal=","
                        form="pagamento-form"
                        disabled
                      />
                      <div class="invalid-feedback">
                        Preencha este campo!
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="form-label" for="edpagamentoit-video"
                        >Url do vídeo (opcional)</label
                      >
                      <input
                        id="pagamento-video"
                        name="video"
                        type="text"
                        class="form-control"
                        form="pagamento-form"
                        readonly
                      />
                    </div>
                    <div class="form-group">
                      <label class="form-label" for="pagamento-ref"
                        >Referência</label
                      >
                      <input
                        id="pagamento-ref"
                        name="referencia"
                        type="number"
                        class="form-control"
                        form="pagamento-form"
                        readonly
                      />
                      <div class="invalid-feedback">
                        Preencha este campo!
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="form-label" for="pagamento-qtd"
                        >Quantidade</label
                      >
                      <input
                        id="pagamento-qtd"
                        name="quantidade"
                        type="number"
                        class="form-control"
                        form="pagamento-form"
                        required
                      />
                      <div class="invalid-feedback">
                        Preencha este campo!
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="form-label" for="pagamento-category"
                        >Categoria</label
                      >
                      <select
                        id="pagamento-category"
                        name="categoria"
                        class="form-control"
                        form="pagamento-form"
                        readonly
                      >
                        <div class="invalid-feedback">
                          Preencha este campo!
                        </div>
                        <option>Brinco</option>
                        <option>Colar</option>
                        <option>Pulseira</option>
                        <option>Anel</option>
                        <option>Conjunto</option>
                        <option>Acessórios</option>
                        <option>Berloques</option>
                        <option>Tornozeleira</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label class="form-label" for="pagamento-color"
                        >Cor</label
                      >
                      <select
                        id="pagamento-color"
                        name="cor"
                        class="form-control"
                        form="pagamento-form"
                        readonly
                      >
                        <div class="invalid-feedback">
                          Preencha este campo!
                        </div>
                        <option>Prata</option>
                        <option>Dourado</option>
                        <option>Grafite</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button class="cancel-btn" data-dismiss="modal">Cancelar</button>
            <button
              type="submit"
              class="send-btn"
              form="pagamento-form"
              data-validation="pagamento-form"
            >
              Confirmar
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Cancelar Pagamento -->
    <div id="cancelar-modal" class="modal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Pagamento não concluído</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>
              Você realmente deseja excluir este produto da lista de pagamento?
            </p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-info py-2"
              data-dismiss="modal"
            >
              Cancelar
            </button>
            <button type="button" class="btn btn-danger py-2">Excluir</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'authenticated',
  methods: {
    logout() {
      this.$store.commit('auth/setToken', null)
      this.$cookies.remove('accessToken')
      window.location.href = '/login'
    }
  },
  head() {
    return {
      title: 'Morana Taguatinga Shopping | Admin'
    }
  }
}
</script>
