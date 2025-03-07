<script setup lang="ts">
import Icon from '@/components/system/taskbar/Icon.vue'
import MSLogo from '@/assets/icons/MsLogo.svg'

const { mainApplication } = storeToRefs(useApplicationStore())
const { isOpen } = storeToRefs(useStartMenuStore())

const clickStart = () => {
  isOpen.value = !isOpen.value
  mainApplication.value = 'start-menu'
}
</script>

<template>
  <Icon :isActive="isOpen" hide-badge :is-main="mainApplication === 'start-menu'" @click="clickStart">
    <MSLogo class="ms-logo" :height="48" />
  </Icon>
</template>
