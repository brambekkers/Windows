<script setup lang="ts">
import Tile from '../base/Tile.vue'
</script>

<template>
  <section class="tiles">
    <Tile title="Background" subtext="Background image, color, wallpaper" icon="image" />
    <Tile title="Colors" subtext=" Accent colors, transparency effects, color scheme" icon="color" />
    <Tile title="Theme" subtext="Install, customize, and manage themes" icon="brush" />
    <Tile title="Start menu" subtext="Recent apps, item, folders" icon="color" />
    <Tile title="Taskbar" subtext="Behavior and settings of the taskbar" icon="color" />
  </section>
</template>

<style scoped>
.tiles {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
</style>
