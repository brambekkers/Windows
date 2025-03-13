<script setup lang="ts">
import ChevronRight from '@/assets/icons/system/chevronRight.svg'

import Start from './tabs/Start.vue'
import Personal from './tabs/Personal.vue'

defineProps<{ currentTab: [SettingsTitle, string | undefined] }>()
</script>

<template>
  <main>
    <div class="tabs">
      <template v-for="(title, i) in currentTab" :key="title">
        <h1>{{ title }}</h1>
        <ChevronRight v-if="currentTab[i + 1]" width="25" height="25" />
      </template>
    </div>
    <Start v-if="currentTab[0] === 'Start'" />
    <Personal v-if="currentTab[0] === 'Personal settings'" />
  </main>
</template>

<style scoped>
main {
  flex: 1;
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
    }
  }
}
</style>
