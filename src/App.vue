<script setup lang="ts">
  import { storeToRefs } from 'pinia'
  import { useApplicationStore } from '@/store/applications'
  import Application from '@/components/Application.vue'
  import Taskbar from '@/components/system/Taskbar.vue'

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
    :type="app.type" />
  <Taskbar />
</template>
