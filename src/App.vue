<script setup lang="ts">
import Application from '@/components/Application.vue'
import Taskbar from '@/components/system/Taskbar.vue'
import StartMenu from '@/components/system/StartMenu.vue'

const { applications } = storeToRefs(useApplicationStore())
</script>

<template>
  <Application
    v-for="app of applications"
    v-model:appStyle="app.style"
    :id="app.id"
    :key="app.id"
    :isSelected="app.isSelected"
    :isEnlarged="app.isEnlarged"
    :type="app.type"
  />
  <StartMenu />
  <Taskbar />
</template>
