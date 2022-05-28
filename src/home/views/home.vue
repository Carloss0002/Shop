<template>
    <div>

        <div class="filtro" v-for="check in email" :key="check.email">
           <router-link :to=" '/' " tag="button" class="button">Deslogar</router-link>
        </div>
        <div class="columns is-multiline is-mobile">
            <div class="column is-one-fifth">
                <aside class="menu">
                    <p class="menu-label">Categoria</p>
                    <ul class="menu-list">
                        <li><router-link to="/categorias/eletronicos" tag="a">Eletrônicos</router-link></li>
                        <li><router-link to="/categorias/livros" tag="a">Livros</router-link></li>
                    </ul>
                </aside>
            </div>
            
            <div class="column is-four-fifths pl-5">
                <ListagemProdutos/>
            </div>
           
             <div class="column is-four-fifths espaco">
               <Livros/>
             </div>
            
        </div>
    </div>
</template>

<script>
import ListagemProdutos from '@/produto/components/listagem_produtos'

import Livros from '../../produto/components/livros.vue'

export default {
    components: {
        ListagemProdutos,
        Livros,
    },
    data () {
        return {
            check: [],
            email: []
        }
    },
    created(){
        let checK = localStorage.getItem('meusDados')
        let email = JSON.parse(checK) || []

        this.email.push(email)
        
    },

}
</script>

<style lang="scss">
  .espaco{
      margin-left: 90px;
  }
  .filtro{
      width: 90%;
      height: 50px;
  }
  .filtro{
      button{
         margin-bottom: 20px;
         float: right;      
      }
  }
</style>