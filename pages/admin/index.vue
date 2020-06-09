<template>
  <div>
    <span class="add-button" data-toggle="modal" data-target="#cadastro-modal">
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
          <div class="row">
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
          <!-- Listagem dos Produtos Desktop -->
          <div
            v-for="produto in getProdutos"
            :key="produto.id"
            class="d-none d-md-flex row mt-4 product-parent"
            data-product-id="1"
          >
            <div class="col">
              <h1 class="admin-type mb-3">Produto</h1>
              <img
                class="admin-produto-img"
                data-modalInputName="image"
                :src="produto.urlImagem"
                :alt="produto.nome"
              />
            </div>
            <div class="col">
              <h1 class="admin-type mb-3">Nome</h1>
              <p class="admin-produto-description" data-modalInputName="nome">
                {{ produto.nome }}
              </p>
              <p
                class="admin-produto-description d-none"
                data-modalInputName="descricao"
              >
                {{ produto.descricao }}
              </p>
            </div>
            <div class="col">
              <h1 class="admin-type mb-3">Ref</h1>
              <p class="admin-produto-description" data-modalInputName="ref">
                {{ produto.numeroRegistro }}
              </p>
            </div>
            <div class="col">
              <h1 class="admin-type mb-3">Qtd</h1>
              <p
                class="admin-produto-description"
                data-modalInputName="quantidade"
              >
                x{{ produto.quantidadeEstoque }}
              </p>
            </div>
            <div class="col">
              <h1 class="admin-type mb-3">Cor</h1>
              <p
                class="admin-produto-description"
                style="text-transform: capitalize"
                data-modalInputName="cor"
              >
                {{ produto.cor }}
              </p>
            </div>
            <div class="col">
              <h1 class="admin-type mb-3">Categoria</h1>
              <p
                class="admin-produto-description"
                data-modalInputName="categoria"
              >
                {{ produto.categoria }}
              </p>
            </div>
            <div class="col">
              <h1 class="admin-type mb-3">Preço</h1>
              <p class="admin-produto-description" data-modalInputName="preco">
                {{ produto.preco }}
              </p>
            </div>
            <div class="col">
              <h1 class="admin-type mb-3">Criado em:</h1>
              <p
                class="admin-produto-description"
                data-modalInputName="pedidoEm"
              >
                {{ produto.dataRegistro }}
              </p>
            </div>
            <div class="col d-flex d-md-block d-lg-flex align-items-end">
              <div class="row">
                <div class="col-6">
                  <span
                    class="passContent"
                    data-toggle="modal"
                    data-target="#editar-modal"
                  >
                    <img
                      class="admin-options-icon"
                      src="/images/edit-icon.svg"
                      alt="Editar Produto"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title="Editar Produto"
                    />
                  </span>
                </div>
                <div class="col-6">
                  <span
                    class="passContent"
                    data-toggle="modal"
                    data-target="#remover-modal"
                  >
                    <img
                      class="admin-options-icon"
                      src="/images/remove-icon.svg"
                      alt="Remover Produto"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title="Remover Produto"
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!-- Listagem dos Produtos Mobile -->
          <div class="d-flex d-md-none row no-gutters mt-4" data-product-id="1">
            <div class="col-3">
              <img
                class="admin-produto-img"
                src="/images/colar-coracao.jpg"
                alt="Colar Morana Taguatinga"
              />
            </div>
            <div class="col-3">
              <p class="admin-produto-description">
                Nome: Colar Coração Dourado
              </p>
              <p class="admin-produto-description">R$27,90</p>
              <p class="admin-produto-description">Qtd: x3</p>
            </div>
            <div class="col-3">
              <p class="admin-produto-description">Cat: Colar</p>
              <p class="admin-produto-description">Cor: Dourado</p>
              <p class="admin-produto-description">Venda: 27/11/2019</p>
            </div>
            <div class="col-3">
              <p class="admin-produto-description">Ref:</p>
              <p class="admin-produto-description">12345678912</p>
            </div>
            <div class="col-3 d-flex align-items-end">
              <div class="row">
                <div class="col-6">
                  <span
                    class="passContent"
                    data-toggle="modal"
                    data-target="#editar-modal"
                  >
                    <img
                      class="admin-options-icon"
                      src="/images/edit-icon.svg"
                      alt="Editar Produto"
                    />
                  </span>
                </div>
                <div class="col-6">
                  <span
                    class="passContent"
                    data-toggle="modal"
                    data-target="#remover-modal"
                  >
                    <img
                      class="admin-options-icon"
                      src="/images/remove-icon.svg"
                      alt="Remover Produto"
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      id="cadastro-modal"
      class="modal fade"
      tabindex="-1"
      role="dialog"
      aria-labelledby="myLargeModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title">Cadastrar Produto</h1>
          </div>
          <div class="modal-body">
            <div class="container">
              <div class="row">
                <div class="col-12">
                  <form
                    id="send-form"
                    class="needs-validation"
                    novalidate
                  ></form>
                  <div class="gui-validation" data-validation="cadastro-form">
                    <div class="form-group">
                      <label class="form-label" for="input-name">Nome</label>
                      <input
                        id="input-name"
                        v-model="item.nome"
                        name="nome"
                        type="text"
                        class="form-control"
                        form="send-form"
                        required
                      />
                      <div class="invalid-feedback">
                        Preencha este campo!
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="form-label" for="input-description"
                        >Descrição</label
                      >
                      <input
                        id="input-description"
                        v-model="item.descricao"
                        name="descricao"
                        type="text"
                        class="form-control"
                        form="send-form"
                        required
                      />
                      <div class="invalid-feedback">
                        Preencha este campo!
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="form-label" for="input-price">Preço</label>
                      <input
                        id="input-price"
                        v-model="item.preco"
                        name="preco"
                        type="text"
                        class="form-control maskMoney"
                        data-symbol="R$ "
                        data-thousands="."
                        data-decimal=","
                        form="send-form"
                        required
                      />
                      <div class="invalid-feedback">
                        Preencha este campo!
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="form-label" for="input-video"
                        >Url do vídeo (opcional)</label
                      >
                      <input
                        id="input-video"
                        v-model="item.urlVideo"
                        name="video"
                        type="text"
                        class="form-control"
                      />
                    </div>
                    <div class="form-group">
                      <label class="form-label" for="input-ref"
                        >Referência</label
                      >
                      <input
                        id="input-ref"
                        v-model="item.codigoCadastro"
                        name="referencia"
                        type="number"
                        class="form-control"
                        form="send-form"
                        required
                      />
                      <div class="invalid-feedback">
                        Preencha este campo!
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="form-label" for="input-qtd"
                        >Quantidade</label
                      >
                      <input
                        id="input-qtd"
                        v-model="item.quantidadeEstoque"
                        name="quantidade"
                        type="number"
                        class="form-control"
                        form="send-form"
                        required
                      />
                      <div class="invalid-feedback">
                        Preencha este campo!
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="form-label" for="input-category"
                        >Categoria</label
                      >
                      <select
                        id="input-category"
                        v-model="item.categoria"
                        name="categoria"
                        class="form-control"
                        form="send-form"
                        required
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
                      <label class="form-label" for="input-color">Cor</label>
                      <select
                        id="input-color"
                        v-model="item.cor"
                        name="color"
                        class="form-control"
                        form="send-form"
                        required
                      >
                        <div class="invalid-feedback">
                          Preencha este campo!
                        </div>
                        <option>Prata</option>
                        <option>Dourado</option>
                        <option>Grafite</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label class="form-label" for="send-img">Imagem</label>
                      <form
                        id="send-image-form"
                        action="#"
                        method="POST"
                        class="needs-validation dropzone"
                        enctype="multipart/form-data"
                        novalidate
                      ></form>
                      <div class="invalid-feedback">
                        Envie a Imagem do Produto!
                      </div>
                      <button
                        type="submit"
                        form="send-image-form"
                        data-image="edit"
                        class="send-btn mt-2"
                      >
                        Salvar Imagem
                      </button>
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
              form="send-form"
              class="send-btn"
              value="Salvar"
              data-validation="cadastro-form"
            >
              Cadastrar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'admin',
  async asyncData({ $axios }) {
    const produtos = await $axios.$get('produtos')
    return { produtos }
  },
  data() {
    return {
      search: '',
      item: {
        nome: '',
        descricao: '',
        preco: 0,
        urlVideo: '',
        codigoCadastro: '',
        quantidade: 0,
        quantidadeEstoque: '',
        categoria: '',
        cor: ''
      },
      action: 'create'
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
    edit(produto) {
      this.produto = produto
      this.action = 'edit'
    },
    create() {
      this.produto = {}
      this.action = 'create'
    }
  }
}
</script>
