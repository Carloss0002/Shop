<template>
    <div id="erro">
        <h1>Ops, algo deu errado</h1>
        <p>Caso o erro Persista entre em contato com a nossa equipe</p>
        <router-link to="/Home" tag="button" class="button is-link is-justify-content-end">Voltar para Home</router-link>
    </div>
</template>

<style scoped>
  #erro{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
  }
  h1{
      font-size: 36px;
  }
</style>