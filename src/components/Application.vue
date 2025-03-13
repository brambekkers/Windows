<script setup lang="ts">
import SystemBar from '@/components/application/SystemBar.vue'

// Apps
import ExplorerApp from '../apps/explorer/App.vue'
import SettingsApp from '../apps/settings/App.vue'
import WordApp from '../apps/word/App.vue'
import EdgeApp from '../apps/edge/App.vue'
import type { Application } from '@/types/Application'

const appMap = {
  edge: EdgeApp,
  explorer: ExplorerApp,
  settings: SettingsApp,
  word: WordApp,
}

const { mainApplication } = storeToRefs(useApplicationStore())
const { selectApp } = useApplicationStore()

const app = defineModel<Application>({
  required: true,
})

const applicationEl = ref(null)
const applicationHandle = ref(null)

const { style: positionStyle } = useDraggable(applicationEl, {
  initialValue: { x: app.value.style.left as number, y: app.value.style.top as number },
  handle: applicationHandle,
})

useResizeObserver(applicationEl, (entries) => {
  const entry = entries[0]
  const { width, height } = entry.contentRect
  if (app.value.isEnlarged) return
  app.value.style.width = `${width}px`
  app.value.style.height = `${height}px`
})

const parseStyleString = (string: string): { top?: string; left?: string } => {
  return string.split(';').reduce((obj, prop) => {
    const [key, value] = prop.split(':')
    const numericValue = parseFloat(value)
    if (!isNaN(numericValue)) {
      obj[key.trim()] = value.trim() // Include 'px' in the value
    }
    return obj
  }, {})
}

watch(
  positionStyle,
  (pos) => {
    const { top, left } = parseStyleString(pos)
    if (top) app.value.style.top = top
    if (left) app.value.style.left = left
  },
  { immediate: true },
)

watch([() => app.value.isSelected, mainApplication], ([sel, main]) => {
  app.value.style.zIndex = sel || main === app.value.id ? 6 : 5
})

onMounted(() => {
  const vueApp = appMap[app.value.type]
  if (vueApp) createApp(vueApp).mount(`#app_${app.value.id}`)
})
</script>

<template>
  <div
    ref="applicationEl"
    :style="!app.isEnlarged ? app.style : ''"
    class="application-frame"
    :class="{ enlarged: app.isEnlarged, minimized: app.isMinimized }"
    @mousedown="selectApp(app.id)"
  >
    <SystemBar ref="applicationHandle" v-model="app" />
    <main :id="`app_${app.id}`"></main>
  </div>
</template>

<style scoped>
.application-frame {
  background: rgb(230, 230, 230, 0.7);

  position: fixed;
  backdrop-filter: var(--app-backdrop-filter);

  min-width: 400px;
  min-height: 200px;
  resize: both;
  overflow: auto;
  border-radius: var(--app-border-radius);
  box-shadow: var(--app-box-shadow);
  z-index: 5;

  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: translate 200ms ease-in-out;

  & > main {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
  }

  &.enlarged {
    transition: all 50ms ease-in-out;
    border-radius: 0 !important;
    top: 0;
    left: 0;
    width: 100dvw;
    height: calc(100dvh - 64px);
  }

  &.minimized {
    z-index: 4;
    translate: -50% 200dvh;
    left: 50%;
  }

  &:active {
    z-index: 10;
  }
}
</style>
