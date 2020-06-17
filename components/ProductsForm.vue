<template>
  <div>
    <div class="modal-header">
      <h1 class="modal-title" style="display: flex; align-items: center">
        <img
          id="back-icon"
          src="/images/back.svg"
          alt="back-icon"
          style="width: 24px; margin-right: 15px; cursor: pointer"
          @click="onCancel()"
        />
        {{ getTitle }}
      </h1>
    </div>
    <div class="modal-body">
      <div>
        <div class="row">
          <div class="col-md-8">
            <form id="send-form" class="needs-validation" novalidate></form>
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
                <label class="form-label" for="input-ref">Referência</label>
                <input
                  id="input-ref"
                  v-model="item.numeroRegistro"
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
                <label class="form-label" for="input-qtd">Quantidade</label>
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
                <label class="form-label" for="input-category">Categoria</label>
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
                  <option>brinco</option>
                  <option>colar</option>
                  <option>pulseira</option>
                  <option>anel</option>
                  <option>conjunto</option>
                  <option>acessorios</option>
                  <option>berloques</option>
                  <option>tornozeleira</option>
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
                  <option>prata</option>
                  <option>dourado</option>
                  <option>grafite</option>
                </select>
              </div>
              <div v-if="item.id" class="form-group">
                <label class="form-label" for="send-img">Imagem</label>
                <dropzone
                  id="dropzone"
                  ref="el"
                  :options="options"
                  @vdropzone-success="onSuccess"
                ></dropzone>
                <button class="send-btn mt-2" @click="removeAllImages()">
                  Trocar imagem
                </button>
                <div class="invalid-feedback">
                  Envie a Imagem do Produto!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal-footer col-md-8">
      <button class="cancel-btn" @click="onCancel()">Cancelar</button>
      <button
        value="Salvar"
        class="send-btn"
        data-validation="cadastro-form"
        :disabled="loading || loadingImg"
        @click="onSubmit()"
      >
        Salvar
      </button>
    </div>
  </div>
</template>

<script>
import Dropzone from 'nuxt-dropzone'
import 'nuxt-dropzone/dropzone.css'

export default {
  components: {
    Dropzone
  },
  props: {
    item: {
      type: Object,
      required: true
    },
    action: {
      type: String,
      default: 'create',
      validator(val) {
        return ['create', 'edit'].includes(val)
      }
    },
    loading: {
      type: Boolean,
      default: false
    },
    onCancel: {
      type: Function,
      required: true
    },
    onSubmit: {
      type: Function,
      required: true
    }
  },
  data({ $cookies }) {
    return {
      loadingImg: false,
      options: {
        url: `/api/produtos/picture/${this.item.id}`,
        maxFiles: 1,
        headers: {
          Authorization: $cookies.get('accessToken')
        }
      }
    }
  },
  computed: {
    getTitle() {
      return this.action === 'create' ? 'Cadastrar Produto' : 'Editar Produto'
    }
  },
  async mounted() {
    if (this.item.urlImagem) {
      const res = await fetch(this.item.urlImagem)
      const fileData = await res.blob()
      const metadata = {
        type: 'image/jpeg'
      }
      const file = new File([fileData], this.item.nome, metadata)
      this.$refs.el.manuallyAddFile(file, this.item.urlImagem)
    }
  },
  methods: {
    removeAllImages() {
      this.$refs.el.removeAllFiles()
    },
    async onSuccess(file, response) {
      try {
        this.loadingImg = true
        this.$nuxt.$loading.start()
        const produto = await this.$axios.$get(`/api/produtos/${this.item.id}`)
        this.item.urlImagem = produto.urlImagem
        this.loadingImg = false
        this.$nuxt.$loading.finish()
      } catch (err) {
        this.loadingImg = false
        this.$nuxt.$loading.finish()
        alert('Não foi possivel salvar a imagem!')
      }
    }
  }
}
</script>
