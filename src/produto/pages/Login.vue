<template>
   <div id="login">
      <div class="loginArea pb-2" v-if="login">
           <h1 class="login">Entrar</h1>
           <form @submit.prevent="handleLogin">
               <input id="email" type="email" placeholder="email@email.com" autocomplete="new-email" v-model="email">
               <input type="password" placeholder="Sua senha" autocomplete="new-password" v-model="password">
               <button class="button is-light">Acessar</button>
           </form>
           <a @click="toggleBtn">Criar conta</a>
      </div>

      <div class="loginArea pb-2" v-if="!login">

          <h1 class="login">Cadastrar</h1>
          <form @submit.prevent="handleRegister">
              <input type="text" placeholder="nome" v-model="nome">
              <input type="email" placeholder="email@email" v-model="email">
              <input type="password" placeholder="Sua senha" v-model="password">
              <button class="button is-light" type="submit">Cadastrar</button>
          </form>
          <a @click="toggleBtn">Já possuo uma conta</a>
      </div>
   </div>
</template>

<script>

export default {
    data(){
        return{
            login: true,
            email: '',
            password: '',
            nome:  ''
        }
    },
    methods:{
       toggleBtn(){
           this.login = !this.login
       },
       handleRegister(){
          const getEmail = localStorage.getItem('meusDados')
          const dados = {email: this.email,senha: this.password,nome: this.nome}
          const checkEmails = JSON.parse(getEmail) || []

          const hasEmail = checkEmails.some((email)=> email.email === this.email)
          
           if(hasEmail){
            alert('Este email já existe')
            return;
           }
          
          checkEmails.push(dados)
          localStorage.setItem('meusDados', JSON.stringify(checkEmails))  
          
          this.$router.push('/Home')
       },
       handleLogin(){
           const getDados = localStorage.getItem('meusDados')
           const check = JSON.parse(getDados) 
           if(check.some((email)=> email.email === this.email )){
               this.$router.push('/Home')
           } else {
               let erro = document.getElementById('email')

               erro.style.borderColor = 'red'
           }
       }
    }
}
</script>

<style scoped>
 @import 'login.css';
 .red{
     border: 1px solid red;
 }
</style>