<template>
  <div id="detalhes">
    <div class="columns">
      
      <div class="column">
        <img :src="produtos.categoria == 'Celular'?'data:image/jpeg;base64,'+ produtos.imagem: produtos.imagem" alt="Foto produto" width="256" height="256">
      </div>  

       <div class="card column">
        <header>
          <h1 class="card-header-title">{{ produtos.descricao }}</h1> 
          <small>{{produtos.descricaoDetalhada}}</small>
        </header>

        <div class="card-content">
          <h2>R$ {{produtos.preco}}</h2>

          <p>Em até 3x de {{(produtos.preco/3).toFixed(2)}}</p>

          <span>{{produtos.categoria}}</span>

          <span>Estoque: <small class="quantidade">{{quantidade > 0? produtos.qtdEstoque - quantidade : produtos.qtdEstoque}}</small></span>

        </div>

        <footer class="card-footer">

           <div>
            <button class="formBtn button is-dark" @click="incrementar">+</button>
            <input class="form" type="number" v-model="quantidade" style="text-align: center;" disabled>
            <button class="formBtn button is-dark" @click="decrementar">-</button>
           </div>

           <div class="buttons are-medium direction">
             <button class="button" :disabled="!quantidade" @click="saveItems">Salvar no Carrinho</button>
             <router-link  tag="button" :disabled="!quantidade" class="button is-danger" :to="`/comprar/${produtos.id}/${quantidade}/${chave}`">Finalizar</router-link>
           </div>
        </footer>
        <span class="erro"></span>
      </div>
 
    </div>
  
    
  </div>
</template>

<script>


export default {
   props:['id'],
   data(){
     return{
       quantidade: 0,
       chave: 1
     }
   },
   created(){
       this.$store.dispatch('initProdutos')    
      
   },
   computed:{
     produtos(){
       return this.$store.getters.produtos.produtos.find(produtos => produtos.id === Number(this.id))
     },
   },
   methods:{
     incrementar(){
       if(this.quantidade >= 0 && this.quantidade < this.produtos.qtdEstoque){
         this.quantidade++
       }
     },
     decrementar(){
       if(this.quantidade > 0){
         this.quantidade--
       }
     },
     saveItems(){
       const meusFavoritos = localStorage.getItem('meusProdutos')

       let favorites = JSON.parse(meusFavoritos) || []

       const busy = favorites.some((item)=> item.id === this.id)

       if(busy){
          let mensage = document.querySelector('span.erro')

          return  mensage.innerHTML= 'Elemento já salvo'
       }

       favorites.push({produtos: this.$store.getters.produtos.produtos.find(produtos => produtos.id === Number(this.id)), quantidade: this.quantidade})
       localStorage.setItem('meusProdutos', JSON.stringify(favorites))
     },
    
   }
}
</script>

<style lang="scss" scoped>

  #detalhes{
    margin-bottom: 110px;
  }

  .column{
    img{
         width: 300px;
    }
  }
   .card{
     h1{
       font-size: 2.5em;
     }
     h2{
       font-size: 1.8em;
     }
     p{
       font-size: 1.1em;
     }
     span{
       color: red;
       font-weight: bold;
     }
     .quantidade{
       color: black;
     }
   }
   .card{
     width: 50%;
   }
   .card-footer{
     display: flex;
     flex-wrap: wrap;
     justify-content: space-around;
   }
   .card-footer{
     .form{
       width: 60px;
       height: 40px;
       text-align: center;
     }
     .formBtn{
       width: 30px;
     }
   }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        
        -webkit-appearance: none;
        margin: 0; 
    }

    input[type=number] {
        -moz-appearance:textfield;
    }
</style>