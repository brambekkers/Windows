<script setup lang="ts">
import Icon from '@/components/system/taskbar/Icon.vue'
import Start from '@/components/system/taskbar/Start.vue'

import MSWord from '@/assets/icons/MsWord.svg'
import MSFiles from '@/assets/icons/MsFiles.svg'
import MSSettings from '@/assets/icons/MsSettings.svg'
import MSPowerpoint from '@/assets/icons/MsPowerpoint.svg'
import Steam from '@/assets/icons/Steam.svg'

const { mainApplication } = storeToRefs(useApplicationStore())
const { addApplication, getApplicationByType } = useApplicationStore()

const word = computed(() => getApplicationByType('word'))
const files = computed(() => getApplicationByType('explorer'))
const settings = computed(() => getApplicationByType('settings'))
const powerpoint = computed(() => getApplicationByType('powerpoint'))
const steam = computed(() => getApplicationByType('steam'))

const clickApplication = (type: ApplicationTypes) => {
  const app = addApplication(type)
  mainApplication.value = app.id
  if (app.isMinimized) app.isMinimized = false
}
</script>

<template>
  <section id="taskbar">
    <nav class="icon-menu">
      <Start />
      <Icon :isActive="!!files" :is-main="mainApplication === files?.id" @click="clickApplication('explorer')">
        <MSFiles :height="30" />
      </Icon>
      <Icon :isActive="!!settings" :is-main="mainApplication === settings?.id" @click="clickApplication('settings')">
        <MSSettings :height="30" />
      </Icon>
      <Icon :isActive="!!word" :is-main="mainApplication === word?.id" @click="clickApplication('word')">
        <MSWord :height="30" />
      </Icon>
      <Icon :isActive="!!powerpoint" :is-main="mainApplication === powerpoint?.id" @click="clickApplication('powerpoint')">
        <MSPowerpoint :height="30" />
      </Icon>
      <Icon :isActive="!!steam" :is-main="mainApplication === steam?.id" @click="clickApplication('steam')">
        <Steam :height="30" />
      </Icon>
    </nav>
  </section>
</template>

<style scoped>
#taskbar {
  height: var(--taskbar-height);
  position: absolute;
  transform-style: preserve-3d;

  bottom: 0;
  width: 100%;
  background-color: var(--app-transparent-color);
  backdrop-filter: var(--app-backdrop-filter);
  z-index: 100;

  display: flex;
  justify-content: center;
  align-items: center;

  .icon-menu {
    display: flex;
    align-items: center;
    gap: 8px;

    .ms-logo {
      background: var(--app-transparent-color);
      backdrop-filter: var(--app-backdrop-filter);
      border-radius: 4px;
    }
  }
}
</style>
