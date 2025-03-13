<script setup lang="ts">
import Sidebar from './components/Sidebar.vue'
import Main from './components/Main.vue'

const currentTab = ref<[SettingsTitle, string | undefined]>(['Personal settings', 'Colors'])
</script>

<template>
  <div id="settings">
    <Sidebar v-model="currentTab" />
    <Main :currentTab />
  </div>
</template>

<style scoped>
#settings {
  display: flex;
}
</style>
