import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

import Home from '../home/views/home.vue'
import Erro from '../error/views/error.vue'
import Detalhe from '../produto/components/detalhes/Detalhes.vue'
import Eletronicos from '../produto/components/listagem_produtos.vue'
import Livros from '../produto/components/livros.vue'
import Login from '@/produto/pages/Login.vue'
import Salvos from '@/produto/pages/salvos.vue'
import Finalizar from '@/produto/pages/pagar.vue'


Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Detalhes/:id/:produto',
      name: 'Detalhes',
      component: Detalhe,
      props: true
    },
    {
      path: '/categorias/eletronicos',
      name: 'Eletronicos',
      component: Eletronicos,
    },
    {
      path: '/categorias/livros',
      name:   'Livro',
      component: Livros,
    },
    {
      path: '/Salvos',
      name: 'Salvos',
      component: Salvos,
    },
    {
      path: '/comprar/:id/:quantidade/:chave',
      name: 'Pagar',
      component: Finalizar,
      props: true
    },
  
  {
    path: '*',
    name: 'error',
    component: Erro
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
