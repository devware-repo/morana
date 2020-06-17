<template>
  <div>
    <div
      v-for="produto in produtos"
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
        <p class="admin-produto-description" data-modalInputName="quantidade">
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
        <p class="admin-produto-description" data-modalInputName="categoria">
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
        <p class="admin-produto-description" data-modalInputName="pedidoEm">
          {{ produto.dataRegistro }}
        </p>
      </div>
      <div class="col d-flex d-md-block d-lg-flex align-items-end">
        <div class="row">
          <div class="col-6">
            <span
              class="passContent"
              data-toggle="modal"
              data-target="#cadastro-modal"
              @click="onEdit(produto)"
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
              @click="onEdit(produto, true)"
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
</template>

<script>
export default {
  name: 'ProductsList',
  props: {
    produtos: {
      type: Array,
      default() {
        return []
      }
    },
    onEdit: {
      type: Function,
      required: true
    }
  }
}
</script>
