<script setup lang="ts">
const { hidePanel = false } = defineProps<{
  hidePanel?: boolean
}>()
</script>

<template>
  <section class="screen">
    <div class="background" />
    <div v-if="!hidePanel" class="panel" />
    <div v-if="!hidePanel" class="accent" />
  </section>
</template>

<style scoped>
.screen {
  position: relative;
  container-type: inline-size;
  container-name: preview-screen;
  aspect-ratio: 40/10;
  width: 100%;

  .background {
    width: 100cqw;
    aspect-ratio: 40/10;

    border-radius: 4cqw;
    border: black calc(1cqw + 2px) solid;
    background-color: red;

    transition: background-image 400ms ease-in-out;
    background-image: var(--windows-background-image);
    background-position: center;
    background-size: cover;
  }

  .panel {
    position: absolute;
    top: 1.5cqh;
    right: 1.5cqh;
    width: 25cqw;
    height: 12cqw;
    background: var(--app-panel-color);
    filter: blur(2);
  }

  .accent {
    position: absolute;
    top: 3.5cqh;
    right: 2.5cqh;
    width: 8cqw;
    height: 0.8cqh;
    border-radius: 1cqw;
    background: var(--windows-accent-color);
    filter: blur(2);
  }
}
</style>
