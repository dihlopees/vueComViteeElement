<template>
  <div class="home">
    <h1>{{ msg }}</h1>
    <div class="imagens">
      <Imagens />
    </div>
      <div class="envolverosdois">  
      <div class="botoes">
        <p>Click para ver alerts:</p>
        <el-button type="success" @click="mensagemUm">Success</el-button>
        <el-button type="info" @click="mensagemDois">Info</el-button>
        <el-button type="warning" @click="mensagemTres">Warning</el-button>
        <el-button type="danger" @click="mensagemQuatro">Error</el-button>
      </div>
        <div class="progresso">
          <Progresso />
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ElMessage } from "element-plus";
import { defineComponent, type DefineComponent } from "vue";
import Imagens from "../components/Imagens.vue";
import Progresso from "../components/Progresso.vue";
export default defineComponent({
  components: { Imagens, Progresso },
  setup(): { msg: string } {
    let msg = "Projeto criado com Vite + Element Plus";

    const mensagemUm:DefineComponent<string> = () => {
      ElMessage({
        message: "Parabens, essa é uma mensagem de sucesso",
        type: "success",
      });
    };

    const mensagemDois = (): any => {
      ElMessage({
        message: "Essa é uma mensagem de informação",
        type: "info",
      });
    };

    const mensagemTres = () => {
      ElMessage({
        message: "Ops, essa é uma mensagem de aviso",
        type: "warning",
      });
    };

    const mensagemQuatro = () => {
      ElMessage({
        message: "Alerta de Erro",
        type: "error",
      });
    };

    return { msg, mensagemUm, mensagemDois, mensagemTres, mensagemQuatro };
  },
});
</script>
<style>
.home p {
  padding: 20px;
}

.botoes {
  margin-left: 50px;
  padding: 20px;
}

.imagens {
  padding: 20px;
}

.home {
  display: grid;
}

.envolverosdois {
  display: grid;
 grid-template-columns: repeat(2,50%);
}
.progresso{
  padding: 50px;
  display: flex;
  flex-direction: row-reverse;
}
</style>
