<template>
  <div class="home">
    <h1> {{msg}} </h1>
    
    <p> Click para ver alerts: </p>
    
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
    
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  setup(): { msg: string } {
    let msg = "Projeto criado com Vite + Element Plus"

    return { msg }
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
