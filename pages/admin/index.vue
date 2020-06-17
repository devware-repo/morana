<template>
  <div>
    <span
      v-show="!showForm"
      class="add-button"
      data-toggle="modal"
      data-target="#cadastro-modal"
      @click="create()"
    >
      <img
        class="add-icon"
        src="/images/add-icon.svg"
        alt="Cadastrar Produto"
        data-toggle="tooltip"
        data-placement="left"
        title="Cadastrar Produto"
      />
    </span>
    <div id="admin-cover" class="position-relative">
      <!-- Menu Desktop -->
      <div class="d-none d-lg-block menu-lateral">
        <div class="container mt-3">
          <div class="row mb-3">
            <div class="col-10 menu-text">
              <h1 class="admin-title">Admin</h1>
            </div>
            <div class="col-2 menu-icon-admin">
              <img
                id="menu-icon"
                class="admin-icon"
                src="/images/menu-icon.svg"
                alt="menu-icon"
              />
            </div>
          </div>
          <a class="menu-lateral-link" href="/admin">
            <div class="row py-2">
              <div class="col-2 pr-0 text-right menu-icon">
                <img
                  class="menu-lateral-icon"
                  src="/images/gerenciar-prdutos-icon.svg"
                  alt="Gerenciar Produtos"
                />
              </div>
              <div class="col-10 text-left menu-text">
                <p>Gerenciar Produtos</p>
              </div>
            </div>
          </a>
          <a class="menu-lateral-link" href="/admin/pagamentos">
            <div class="row py-2">
              <div class="col-2 pr-0 text-right menu-icon">
                <img
                  class="menu-lateral-icon"
                  src="/images/gerenciar-pagamentos-icon.svg"
                  alt="Gerenciar Pagamentos"
                />
              </div>
              <div class="col-10 text-left menu-text">
                <p>Confirmar Pagamentos</p>
              </div>
            </div>
          </a>
        </div>
      </div>

      <!-- Menu Mobile -->
      <div class="d-block d-lg-none container mobile-spacer">
        <div class="row">
          <div class="col-4 text-left">
            <img
              id="menu-icon-mobile"
              class="admin-icon"
              src="/images/menu-icon.svg"
              alt="menu-icon"
            />
          </div>
          <div class="col-8 d-flex justify-content-end">
            <div class="search-wrapper">
              <img
                class="search-icon"
                src="/images/search-icon.svg"
                alt="Pesquisar produto cadastrado "
              />
              <input
                v-model="search"
                class="search-input"
                type="text"
                placeholder="Pesquisar Produto"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="d-none menu-overlay"></div>
      <div class="d-none d-lg-none menu-lateral-mobile">
        <div class="container mt-3">
          <div class="row mb-3">
            <div class="col-12 menu-icon-admin text-left">
              <img
                id="menu-close-mobile"
                class="admin-icon"
                src="/images/menu-close.svg"
                alt="menu-icon"
              />
            </div>
          </div>
          <a class="menu-lateral-link" href="/admin">
            <div class="row py-2">
              <div class="col-2 pr-0 text-right menu-icon">
                <img
                  class="menu-lateral-icon-mobile"
                  src="/images/gerenciar-prdutos-icon.svg"
                  alt="Gerenciar Produtos"
                />
              </div>
              <div class="col-10 text-left menu-text-mobile">
                <p>Gerenciar Produtos</p>
              </div>
            </div>
          </a>
          <a class="menu-lateral-link" href="/admin/pagamentos">
            <div class="row py-2">
              <div class="col-2 pr-0 text-right menu-icon">
                <img
                  class="menu-lateral-icon-mobile"
                  src="/images/gerenciar-pagamentos-icon.svg"
                  alt="Gerenciar Pagamentos"
                />
              </div>
              <div class="col-10 text-left menu-text-mobile">
                <p>Confirmar Pagamentos</p>
              </div>
            </div>
          </a>
        </div>
      </div>

      <div class="produtos-tela position-relative">
        <div class="container-fluid">
          <div v-show="!showForm" class="row">
            <div class="col-12 col-md-6">
              <h1 class="page-title">Produtos Cadastrados</h1>
            </div>
            <div class="col-6 d-none d-lg-flex justify-content-end">
              <div class="search-wrapper">
                <img
                  class="search-icon"
                  src="/images/search-icon.svg"
                  alt="Pesquisar produto cadastrado "
                />
                <input
                  v-model="search"
                  class="search-input"
                  type="text"
                  placeholder="Pesquisar Produto"
                />
              </div>
            </div>
          </div>
          <div v-if="loading" class="container-loading">
            <div class="loader">Loading...</div>
          </div>
          <div v-else>
            <div v-if="!showForm">
              <ProductsList
                :produtos="getProdutos"
                :on-edit="edit"
                :on-form-open="openForm"
              />
            </div>
            <div v-else>
              <ProductsForm
                :item="item"
                :action="action"
                :loading="loadingForm"
                :on-submit="submit"
                :on-cancel="closeForm"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal Remover -->
    <div id="remover-modal" class="modal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Este produto será excluído</h5>
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
            <p>Você realmente deseja excluir este produto?</p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-info py-2"
              data-dismiss="modal"
            >
              Cancelar
            </button>
            <button
              type="button"
              class="btn btn-danger py-2"
              @click="deleteItem()"
            >
              Excluir
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductsList from '~/components/ProductsList'
import ProductsForm from '~/components/ProductsForm'

export default {
  layout: 'admin',
  components: { ProductsList, ProductsForm },
  async asyncData({ $axios }) {
    const produtos = await $axios.$get('/api/produtos')
    return { produtos }
  },
  data() {
    return {
      search: '',
      showForm: false,
      item: {
        nome: null,
        descricao: null,
        preco: null,
        urlVideo: null,
        numeroRegistro: null,
        quantidadeEstoque: null,
        categoria: null,
        cor: null
      },
      action: 'create',
      loading: false,
      loadingForm: false
    }
  },
  computed: {
    getProdutos() {
      if (!this.produtos || !this.produtos.length) {
        return []
      }

      const searchToLower = this.search.toLowerCase()

      return this.produtos.filter(
        (produto) =>
          !this.search ||
          produto.nome.toLowerCase().includes(searchToLower) ||
          produto.cor.toLowerCase().includes(searchToLower) ||
          produto.preco
            .toString()
            .toLowerCase()
            .includes(searchToLower) ||
          produto.dataRegistro.toLowerCase().includes(searchToLower)
      )
    }
  },
  methods: {
    capitalize(s) {
      if (typeof s !== 'string') return ''
      return s.charAt(0).toUpperCase() + s.slice(1)
    },
    async loadData() {
      this.loading = true
      this.produtos = await this.$axios.$get('/api/produtos')
      this.loading = false
    },
    openForm() {
      this.showForm = true
    },
    closeForm() {
      this.showForm = false
      this.item = {
        nome: null,
        descricao: null,
        preco: null,
        urlVideo: null,
        numeroRegistro: null,
        quantidadeEstoque: null,
        categoria: null,
        cor: null
      }
    },
    edit(produto, deleteAction = false) {
      this.item = produto
      this.action = 'edit'
      if (!deleteAction) {
        this.openForm()
      }
    },
    create() {
      this.action = 'create'
      this.openForm()
    },
    async submit() {
      try {
        this.loadingForm = true
        this.$nuxt.$loading.start()
        if (this.action === 'create') {
          await this.$axios.post('/api/produtos', this.item)
        } else if (this.action === 'edit') {
          await this.$axios.put(`/api/produtos/${this.item.id}`, this.item)
        }
        this.showForm = false
        this.loadingForm = false
        this.$nuxt.$loading.finish()
        this.loadData()
      } catch (err) {
        this.loadingForm = false
        this.$nuxt.$loading.finish()
        alert('Não foi possivel salvar! Tente novamente')
      }
    },
    async deleteItem(id) {
      try {
        this.loadingForm = true
        this.$nuxt.$loading.start()
        await this.$axios.delete(`/api/produtos/${this.item.id}`)
        this.loadingForm = false
        this.$nuxt.$loading.finish()
        this.loadData()
      } catch (err) {
        this.loadingForm = false
        this.$nuxt.$loading.finish()
        alert('Não foi possivel deletar! Tente novamente')
      }
    }
  }
}
</script>
