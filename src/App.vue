<script setup lang="ts">
import Application from '@/components/Application.vue'
import Taskbar from '@/components/system/Taskbar.vue'
import StartMenu from '@/components/system/StartMenu.vue'

const { applications } = storeToRefs(useApplicationStore())
</script>

<template>
  <template v-for="(app, i) of applications" :key="app.id">
    <Application v-model="applications[i]" />
  </template>
  <StartMenu />
  <Taskbar />
</template>
