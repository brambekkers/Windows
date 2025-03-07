<script setup lang="ts">
import MSWord from '@/assets/icons/MsWord.svg'
import MSEdge from '@/assets/icons/MSEdge.svg'
import MSSettings from '@/assets/icons/MsSettings.svg'
import MSPowerpoint from '@/assets/icons/MsPowerpoint.svg'
import Steam from '@/assets/icons/Steam.svg'

const apps = [
  {
    id: 'edge',
    title: 'Microsoft Edge',
    icon: MSEdge,
  },
  {
    id: 'settings',
    title: 'Settings',
    icon: MSSettings,
  },
  {
    id: 'word',
    title: 'Word',
    icon: MSWord,
  },
  {
    id: 'powerpoint',
    title: 'Powerpoint',
    icon: MSPowerpoint,
  },
  {
    id: 'steam',
    title: 'Steam',
    icon: Steam,
  },
]
</script>

<template>
  <div>
    <h3>Pinned</h3>
    <div id="apps">
      <div v-for="app in apps" :key="app.id" class="app">
        <button>
          <component :is="app.icon" size="30" class="icon" />
          <span>{{ app.title }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
#apps {
  display: grid;
  grid-template-columns: repeat(6, auto);
  gap: 50px;
  container-name: apps;
  container-type: inline-size;

  font-size: 14px;
  text-wrap: nowrap;
  text-align: center;

  .app {
    border: none;
    border-radius: 4px;
    width: calc(calc(100cqw - 250px) / 6);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    button {
      height: 100%;
      border: none;
      border-radius: 4px;
      padding: 8px 8px;

      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
      justify-content: space-between;
      background-color: rgba(0, 0, 0, 0);
      transition: all 200ms ease-in-out;

      &:hover {
        background-color: rgba(255, 255, 255, 0.46);
      }

      .icon {
        width: 32px;
        height: 32px;
      }
    }
  }
}
</style>
