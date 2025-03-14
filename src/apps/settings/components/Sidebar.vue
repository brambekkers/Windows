<script setup lang="ts">
const currentTab = defineModel<[SettingsTitle] | [SettingsTitle, string]>({
  required: true,
})

const items = [
  { title: 'Start', icon: new URL('@/assets/favicons/home.png', import.meta.url).href },
  { title: 'System', icon: new URL('@/assets/favicons/system.png', import.meta.url).href },
  { title: 'Bluetooth and devices', icon: new URL('@/assets/favicons/bluetooth.png', import.meta.url).href },
  { title: 'Network and Internet', icon: new URL('@/assets/favicons/network.png', import.meta.url).href },
  { title: 'Personal settings', icon: new URL('@/assets/favicons/personal.png', import.meta.url).href },
  { title: 'Apps', icon: new URL('@/assets/favicons/apps.png', import.meta.url).href },
  { title: 'Accounts', icon: new URL('@/assets/favicons/account.png', import.meta.url).href },
  { title: 'Language and time', icon: new URL('@/assets/favicons/time.png', import.meta.url).href },
  { title: 'Gaming', icon: new URL('@/assets/favicons/game.png', import.meta.url).href },
  { title: 'Accessibility', icon: new URL('@/assets/favicons/accessible.png', import.meta.url).href },
  { title: 'Privacy and security', icon: new URL('@/assets/favicons/privacy.png', import.meta.url).href },
  { title: 'Windows Update', icon: new URL('@/assets/favicons/sync.png', import.meta.url).href },
] as const
</script>

<template>
  <aside>
    <input id="search" type="search" placeholder="Search settings" />
    <ul>
      <li v-for="item in items" :key="item.title" :class="{ active: currentTab.includes(item.title) }" @click="currentTab = [item.title, undefined]">
        <img :src="item.icon" width="16" />
        {{ item.title }}
      </li>
    </ul>
  </aside>
</template>

<style scoped>
aside {
  width: 250px;
  min-width: 250px;
  height: 100%;
  font-weight: 400;
  padding: 8px;

  #search {
    width: 100%;
    margin: 0 4px;
    padding: 8px;
    border-radius: 4px;
    background-color: rgba(255, 255, 255, 0.7);
    border: none;
    border-bottom: #888888 1px solid;
    margin-bottom: 24px;
    border-radius: 4px;
  }

  ul {
    list-style: none;
    padding: 0 4px;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
    overflow-y: auto;
    height: 100%;

    li {
      padding: 7px;
      border-radius: 4px;
      display: flex;
      align-items: center;
      gap: 8px;
      border-radius: 4px;

      &:hover {
        background-color: rgba(0, 0, 0, 0.05);
      }
    }
  }
}
</style>
