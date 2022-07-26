<template>
  <div class="home">
    <h1> {{msg}} </h1>
    
    <p> Click para ver alerts: </p>
    
    
    <el-button type="success" @click="mensagemUm">Success</el-button>
    <el-button type="info" @click="mensagemDois">Info</el-button>
    <el-button type="warning" @click="mensagemTres">Warning</el-button>
    <el-button type="danger" @click="mensagemQuatro">Error</el-button>
    
  </div>
</template>

<script lang="ts">
import { ElMessage } from "element-plus";
import { defineComponent } from "vue";
export default defineComponent({
  setup(): { msg: string } {
    let msg = "Projeto criado com Vite + Element Plus"

    const mensagemUm = () => {
      ElMessage({
        message: 'Parabens, essa é uma mensagem de sucesso',
         type: 'success',
      })
    }

    const mensagemDois = ():any => {
      ElMessage({
        message: 'Essa é uma mensagem de informação',
         type: 'info',
      })
    }

    const mensagemTres = () => {
      ElMessage({
        message: 'Ops, essa é uma mensagem de aviso',
         type: 'warning',
      })
    }

    const mensagemQuatro = () => {
      ElMessage({
        message: 'Alerta de Erro',
         type: 'error',
      })
    }
    
    return { msg, mensagemUm, mensagemDois, mensagemTres, mensagemQuatro }
  },
});
</script>
<style>

.home h1, p{
padding: 20px;

}

.el-button{
  color:black;
  
}

</style>
