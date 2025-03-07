<script setup lang="ts">
  import { computed } from 'vue'
  import { useApplicationStore } from '@/store/applications'

  import Icon from '@/components/system/taskbar/Icon.vue'

  import MSWord from '@/assets/icons/MsWord.svg'
  import MSLogo from '@/assets/icons/MsLogo.svg'
  import MSFiles from '@/assets/icons/MsFiles.svg'
  import MSSettings from '@/assets/icons/MsSettings.svg'
  import MSPowerpoint from '@/assets/icons/MsPowerpoint.svg'
  import Steam from '@/assets/icons/Steam.svg'

  const { addApplication, getApplicationByType } = useApplicationStore()
  const wordExists = computed(() => !!getApplicationByType('word'))
  const filesExists = computed(() => !!getApplicationByType('files'))
  const settingsExists = computed(() => !!getApplicationByType('settings'))
  const powerpointExists = computed(() => !!getApplicationByType('powerpoint'))
  const steamExists = computed(() => !!getApplicationByType('steamExists'))
</script>

<template>
  <section id="taskbar">
    <nav class="icon-menu">
      <MSLogo
        class="ms-logo"
        :width="48"
        :height="48" />
      <Icon
        :isActive="filesExists"
        @click="addApplication('explorer')">
        <MSFiles :height="30" />
      </Icon>
      <Icon
        :isActive="settingsExists"
        @click="addApplication('settings')">
        <MSSettings :height="30" />
      </Icon>
      <Icon
        :isActive="wordExists"
        @click="addApplication('word')">
        <MSWord :height="30" />
      </Icon>
      <Icon
        :isActive="powerpointExists"
        @click="addApplication('powerpoint')">
        <MSPowerpoint :height="30" />
      </Icon>
      <Icon
        :isActive="steamExists"
        @click="addApplication('steam')">
        <Steam :height="30" />
      </Icon>
    </nav>
  </section>
</template>

<style scoped>
  #taskbar {
    height: 64px;
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.86);
    backdrop-filter: blur(20px);
    z-index: 100;

    display: flex;
    justify-content: center;
    align-items: center;

    .icon-menu {
      display: flex;
      align-items: center;
      gap: 8px;

      .ms-logo {
        background: rgba(255, 255, 255, 0.86);
        backdrop-filter: blur(20px);
        border-radius: 4px;
      }
    }
  }
</style>
