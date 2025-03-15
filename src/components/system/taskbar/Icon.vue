<script setup lang="ts">
const { hideBadge = false } = defineProps<{
  isMain?: boolean
  isActive?: boolean
  hideBadge?: boolean
}>()
</script>

<template>
  <div class="icon" :class="{ 'is-main': isMain }" :style="`justify-content: ${isActive ? 'flex-end' : 'center'}`">
    <slot />
    <div v-if="isActive && !hideBadge" class="active-badge" :class="{ 'is-main': isMain }" />
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

  & > * {
    pointer-events: none;
  }

  &.is-main {
    background: var(--button-hover-color);
    box-shadow: rgba(0, 0, 0, 0.01) 4px 4px 8px;
  }
  &:hover {
    background: var(--button-hover-color);
  }
  .active-badge {
    background-color: var(--windows-accent-color);
    width: 8px;
    height: 3px;
    border-radius: 2px;
    transition: all 200ms ease-in-out;
    translate: 0 2px;

    &:not(.is-main) {
      filter: grayscale(0.6);
    }

    &.is-main {
      width: 16px;
      height: 3px;
    }
  }
}
</style>
