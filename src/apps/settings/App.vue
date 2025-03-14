<script setup lang="ts">
import Sidebar from './components/Sidebar.vue'
import Main from './components/Main.vue'

const currentTab = ref<[SettingsTitle] | [SettingsTitle, string]>(['Start'])
</script>

<template>
  <div id="settings">
    <Sidebar v-model="currentTab" />
    <Main v-model="currentTab" />
  </div>
</template>

<style scoped>
#settings {
  display: flex;
}
</style>
