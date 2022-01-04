<template>
  <div id="app">
    <navbar v-bind:ser="search" :inputData="search" @update="search = $event;" />
    <router-view  />
  </div>
</template>

<script>
import navbar from "@/components/MainComp/navbar";
export default {
  components: {
    navbar
  },
  data() {
    return {
      search: "",
    }
  }
};
</script>

<style>
/* Главна чтраница тут ничего менять нельзя */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
