<script setup lang="ts">
import Card from '../../base/Card.vue'

const wallpapers = ref([])
const { backgroundVar } = storeToRefs(useLayoutStore())

for (let i = 1; i <= 17; i++) {
  wallpapers.value.push(new URL(`../../../../../assets/wallpaper/wallpaper${i}.webp`, import.meta.url))
}

const setWallpaper = (i: number) => (backgroundVar.value = `url(${wallpapers.value[i - 1]})`)
</script>

<template>
  <Card id="background-settings">
    <p>Recent images</p>

    <div class="wallpapers">
      <img v-for="i of wallpapers.length" :key="i" :src="wallpapers[i - 1]" @click="setWallpaper(i)" />
    </div>
  </Card>
</template>

<style scoped>
#background-settings {
  padding: 12px;
  max-width: 100%;

  .wallpapers {
    display: flex;
    padding-bottom: 8px;
    overflow-x: scroll;

    /* flex-wrap: wrap; */
    gap: 4px;

    img {
      width: 100px;
      height: 100px;
      object-fit: cover;
      border-radius: 8px;

      &:hover {
        border: solid 1px rgba(255, 255, 255, 0.7);
      }
    }
  }
}
</style>
