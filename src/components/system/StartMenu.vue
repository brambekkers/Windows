<script setup lang="ts">
import Footer from '@/components/system/startMenu/Footer.vue'
import Pinned from '@/components/system/startMenu/Pinned.vue'
import Recommended from '@/components/system/startMenu/Recommended.vue'
const { isOpen } = storeToRefs(useStartMenuStore())

const startMenu = useTemplateRef<HTMLElement>('startMenu')
const { mainApplication } = storeToRefs(useApplicationStore())

onClickOutside(startMenu, (event) => {
  if (!isOpen.value) return
  isOpen.value = false
  mainApplication.value = ''
})
</script>

<template>
  <section id="start-menu" ref="startMenu" :class="{ visible: isOpen }">
    <main>
      <Pinned />
      <Recommended />
    </main>
    <Footer />
  </section>
</template>

<style scoped>
#start-menu {
  position: absolute;
  z-index: 90;

  bottom: calc(var(--taskbar-height) + 24px);
  left: 50%;
  translate: -50% 200% -10px;
  transition: translate 200ms ease-in-out;

  width: min(680px, 80dvw);
  height: min(800px, 80dvh);
  background-color: var(--transparent-color);
  backdrop-filter: blur(20px);

  border-radius: var(--app-border-radius);
  box-shadow:
    rgba(0, 0, 0, 0.18) 0px 32px 64px,
    rgba(0, 0, 0, 0.14) 0px 2px 21px;

  display: flex;
  flex-direction: column;

  main {
    flex: 1;
    padding: 70px;

    display: flex;
    flex-direction: column;

    & > div {
      display: flex;
      flex-direction: column;
      gap: 30px;
      flex: 1;
    }
  }

  &.visible {
    translate: -50% 0 -10px;
  }
}
</style>
