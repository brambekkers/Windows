<script setup lang="ts">
import Tile from '../base/Tile.vue'
import Background from './personal/Background.vue'
import Colors from './personal/Colors.vue'

const currentTab = defineModel<[SettingsTitle] | [SettingsTitle, string]>({
  required: true,
})

const mainTab = currentTab.value[0]

const Tiles = [
  {
    title: 'Background',
    subtext: 'Background image, color, wallpaper',
    icon: 'image',
  },
  {
    title: 'Colors',
    subtext: 'Accent colors, transparency effects, color scheme',
    icon: 'color',
  },
  {
    title: 'Theme',
    subtext: 'Install, customize, and manage themes',
    icon: 'brush',
  },
  {
    title: 'Start menu',
    subtext: 'Recent apps, item, folders',
    icon: 'color',
  },
  {
    title: 'Taskbar',
    subtext: 'Behavior and settings of the taskbar',
    icon: 'color',
  },
] as const
</script>

<template>
  <section v-if="!currentTab[1]" class="tiles">
    <Tile v-for="{ title, subtext, icon } in Tiles" :key="title" :title :subtext :icon @click="currentTab = [mainTab, title]" />
  </section>
  <section v-else>
    <Background v-if="currentTab[1] === 'Background'" />
    <Colors v-if="currentTab[1] === 'Colors'" />
  </section>
</template>

<style scoped>
.tiles {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
</style>
