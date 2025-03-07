<script setup lang="ts">
  import Sidebar from './components/Sidebar.vue'
  import Main from './components/Main.vue'
</script>

<template>
  <div id="settings">
    <Sidebar />
    <Main />
  </div>
</template>

<style scoped>
  #settings {
    display: flex;
  }
</style>
