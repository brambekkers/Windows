<script setup lang="ts">
  defineProps<{
    isActive?: boolean
  }>()
</script>

<template>
  <div
    class="icon"
    :style="`justify-content: ${isActive ? 'flex-end' : 'center'}`">
    <slot />
    <div
      v-if="isActive"
      class="active-badge" />
  </div>
</template>

<style scoped>
  .icon {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 48px;
    height: 48px;
    gap: 7px;
    border-radius: 4px;
    transition: all 200ms ease-in-out;
    cursor: pointer;

    &:hover {
      background: rgba(255, 255, 255, 0.46);
      /* backdrop-filter: blur(20px); */
    }
    .active-badge {
      background-color: #2f2f2f;
      width: 5px;
      height: 2.5px;
      border-radius: 2px;
    }
  }
</style>
