<script setup lang="ts">
import MSWord from '@/assets/icons/MsWord.svg'
import MSEdge from '@/assets/icons/MSEdge.svg'
import MSSettings from '@/assets/icons/MsSettings.svg'
import MSPowerpoint from '@/assets/icons/MsPowerpoint.svg'
import Steam from '@/assets/icons/Steam.svg'
import Shortcut from '@/components/Shortcut.vue'

const apps = [
  {
    type: 'edge',
    title: 'Microsoft Edge',
    icon: MSEdge,
  },
  {
    type: 'settings',
    title: 'Settings',
    icon: MSSettings,
  },
  {
    type: 'word',
    title: 'Word',
    icon: MSWord,
  },
  {
    type: 'powerpoint',
    title: 'Powerpoint',
    icon: MSPowerpoint,
  },
  {
    type: 'steam',
    title: 'Steam',
    icon: Steam,
  },
]
</script>

<template>
  <div>
    <h3>Pinned</h3>
    <div id="apps">
      <Shortcut v-for="app in apps" :key="app.id" :title="app.title" :icon="app.icon" :type="app.type" />
    </div>
  </div>
</template>

<style scoped>
#apps {
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  container-name: apps;
  container-type: inline-size;
}
</style>
