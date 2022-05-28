<template>
  <div id="finalizar">
     <div class="card" v-if="appear">
       <div class="columns">
         <div class="card-image column is-one-fifth">
            <img :src="produtos.categoria == 'Celular'?'data:image/jpeg;base64,'+ produtos.imagem: produtos.imagem" alt="Foto produto" width="100" height="100">
         </div>
         <div class="card-content column">
            <h1 class="is-size-4">{{ produtos.descricao }}</h1>
            <p>{{produtos.descricaoDetalhada}}</p>
            <p class="is-size-5 has-text-weight-bold">R${{ produtos.preco }}</p>
         </div>
         <div class="column">
            <router-link to="/Home" tag="button" class="button is-danger">Finalizar pedido</router-link>
         </div>
       </div>  
     </div>


     <div v-else>
         <div v-for="produtos in finalizePurchase" :key="produtos.produtos.id">
            <div class="card mb-5">
                <div class="columns">
                    <div class="card-image column is-one-fifth">
                        <img :src="produtos.produtos.categoria == 'Celular'?'data:image/jpeg;base64,'+ produtos.produtos.imagem: produtos.produtos.imagem" alt="Foto produto" width="100" height="100">
                    </div>
                    <div class="card-content column">
                        <h1 class="is-size-4">{{ produtos.produtos.descricao }}</h1>
                        <p>{{produtos.produtos.descricaoDetalhada}}</p>
                        <p class="is-size-5 has-text-weight-bold">R${{ produtos.produtos.preco }}</p>
                    </div>
                </div>  
            </div>
         </div>
        <div class="buttons">
          <router-link tag="button" to="/Home" class="button is-danger is-large is-fullwidth">Finalizar</router-link>
        </div>
     </div>
  </div>
</template>

<script>
export default {
   props:['id', 'quantidade', 'chave'],
   data(){
       return{
           appear: false,
           finalizePurchase: []
       }
   },
    created(){
       this.$store.dispatch('initProdutos')    
       if(this.chave == 1){
           this.appear = true
       } else{
           let purchaseCompleted = localStorage.getItem('meusProdutos')
           this.finalizePurchase = JSON.parse(purchaseCompleted)    
       }
   },
   computed:{
     produtos(){
       return this.$store.getters.produtos.produtos.find(produtos => produtos.id === Number(this.id))
     },
   }
}
</script>

<style scoped>
  #finalizar{
      display: flex;
      flex-direction: column;
      justify-items: center;
      align-items: center;
      height: 50vh;
  }
  .card{
      width: 50vw;
  }
  
</style>