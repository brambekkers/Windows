<script setup lang="ts">
const { type } = defineProps<{ icon: Component; title: string; type: string }>()

const { mainApplication } = storeToRefs(useApplicationStore())
const { addApplication } = useApplicationStore()

const click = () => {
  const app = addApplication(type)
  mainApplication.value = app.id
}
</script>

<template>
  <div class="app">
    <button @click="click">
      <component :is="icon" size="30" class="icon" />
      <span>{{ title }}</span>
    </button>
  </div>
</template>

<style lang="css" scoped>
.app {
  border: none;
  border-radius: 4px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  font-size: 14px;
  text-wrap: nowrap;
  text-align: center;
  text-overflow: ellipsis;

  button {
    height: 100%;
    border: none;
    border-radius: 4px;
    padding: 8px 25px;
    max-width: 110%;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    justify-content: space-between;
    background-color: rgba(0, 0, 0, 0);
    transition: all 200ms ease-in-out;

    &:hover {
      background-color: var(--button-hover-color);
    }

    .icon {
      width: 32px;
      height: 32px;
    }
  }
}
</style>
