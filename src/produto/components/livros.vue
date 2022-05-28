<template>
  <div id="Livros">
         <div class="columns is-desktop is-3-desktop">
        <div class="column" v-for="(produto, index) in produtos" :key="index"> 
                <div class="card" v-if="produto.categoria == 'Livro'">
                        <div class="card-image">
                            <figure class="image is-square">
                                <img v-bind:src="produto.imagem" alt="Foto produto">
                            </figure>
                        </div>
                        <div class="card-content is-right">
                            <div class="content">
                                <h1 class="is-size-4"><strong>{{ produto.descricao }}</strong></h1>
                                <hr>
                                <span>{{ produto.descricaoDetalhada}}</span>
                                <br>
                                <div>
                                    <p class="is-size-4 has-text-weight-bold">R$ {{ produto.preco }}</p>
                                    <router-link :to="`/Detalhes/${produto.id}/${produto.descricao}`" tag="button" class="button is-dark">Ver detalhes</router-link> 
                                </div>
                            </div>
                        </div>
                    </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    created() {
        this.$store.dispatch('initProdutos')
    },
    computed: {
        produtos() {
            return this.$store.getters.produtos.produtos
        },
    }
}
</script>

<style scoped> 
  #livros{
      display: flex;
      justify-content: center;
      align-items: center;
  }
  .card{
      width: 160px;
      height: 100%;
  }
</style>