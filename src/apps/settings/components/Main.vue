<script setup lang="ts">
import ChevronRight from '@/assets/icons/system/chevronRight.svg'

import Start from './tabs/Start.vue'
import Personal from './tabs/Personal.vue'

const currentTab = defineModel<[SettingsTitle] | [SettingsTitle, string]>({
  required: true,
})

const clickTitle = (title: SettingsTitle, i: number) => {
  if (i !== 0) return
  currentTab.value = [title]
}
</script>

<template>
  <main>
    <div class="tabs">
      <template v-for="(title, i) in currentTab" :key="title">
        <h1 :class="{ inactive: i === 0 && currentTab[1] }" @click="clickTitle(title, i)">{{ title }}</h1>
        <ChevronRight v-if="currentTab[i + 1]" width="25" height="25" />
      </template>
    </div>
    <Start v-if="currentTab[0] === 'Start'" />
    <Personal v-if="currentTab[0] === 'Personal settings'" v-model="currentTab" />
  </main>
</template>

<style scoped>
main {
  flex: 1;
  overflow-x: hidden;
  padding: 0 24px 8px 24px;
  .tabs {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 16px;

    h1 {
      font-weight: 500;
      font-size: 1.875rem;
      line-height: 2.25rem;
      margin-bottom: 0.4rem;

      &.inactive {
        opacity: 0.6;
      }
    }
  }
}
</style>
