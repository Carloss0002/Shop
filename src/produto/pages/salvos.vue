<template>
    <div id="carrinho">
       <div class="vazio" v-if="carrinho.length === 0">
          <h1>Ops...</h1>
          <p>Você não tem nada salvo</p>
       </div>

       <div class="card mb-5" v-for="salvos in carrinho" :key="salvos.id">
           <div class="columns">

             <div class="column is-one-fifth">
                <img :src="salvos.produtos.categoria == 'Celular'?'data:image/jpeg;base64,'+ salvos.produtos.imagem: salvos.produtos.imagem" alt="Foto produto" width="200" height="200">
       
             </div> 
             <div class="card-content column">
                <h1>{{salvos.produtos.descricao}}</h1>
                <h2>R$ {{ salvos.produtos.preco }}</h2>
                <div>
                  <p>Estoque: {{salvos.produtos.qtdEstoque - quantidade}}</p>  
                  <p>Quantidade: {{quantidade = salvos.quantidade}}</p>
                  <button 
                  @click="
                  if(salvos.produtos.qtdEstoque > quantidade){
                      salvos.quantidade++
                  }"
                  class="button is-dark formBtn"
                     >
                     +
                  </button>

                  <input class="form" type="number" v-model="quantidade">

                  <button 
                   @click="
                     if(quantidade > 0){
                         salvos.quantidade--
                     }
                   "
                   class="button is-dark formBtn"
                  >
                      -
                  </button>
                  
                </div>
                <div class="card-footer">
                   <div class="buttons are-medium direction"> 
                     <button class="button" @click="excluir(salvos.produtos.id)">Excluir</button>
                   </div> 
                </div>
             </div> 
            
           </div>
        </div>
        <div class="buttons">
          <router-link class="button is-danger is-large is-fullwidth" :to="`/comprar/${800839230}/${quantidade}/${10}`">Finalizar</router-link>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            carrinho: [],
            quantidade: 0
        }
    },
         methods:{
            excluir(id){
                 let favoritesFilter = this.carrinho.filter((salvos) => {
                    return(salvos.produtos.id !== id);
                  });
                  console.log(favoritesFilter)
                  return this.carrinho = favoritesFilter;
            }
         },
     created(){
         const favoritesList = localStorage.getItem('meusProdutos')
         this.carrinho = JSON.parse(favoritesList) || []    
     },
     watch:{
        carrinho(){
          localStorage.setItem('meusProdutos', JSON.stringify(this.carrinho));
        }
     }
}
</script>

<style lang="scss" scoped>
@import 'input.css';
  #carrinho{
      height: 100vh;
  }
  h1{
    font-size: 2.25em;
   }
   .card-footer{
       display: flex;
       flex-wrap: wrap;
       justify-content: space-between;
   }
   .vazio{
       display: flex;
       flex-direction: column;
       height: 50vh;
   }
   .vazio{
       h1{
           font-size: 5rem;
       }
       p{
           font-size: 2.25rem;
       }
   }
</style>