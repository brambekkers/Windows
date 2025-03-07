<script setup lang="ts">
// Components
import SystemBar from '@/components/application/SystemBar.vue'

// Apps
import ExplorerApp from '../apps/explorer/App.vue'
import SettingsApp from '../apps/settings/App.vue'
import WordApp from '../apps/word/App.vue'
import EdgeApp from '../apps/edge/App.vue'

const appMap = {
  edge: EdgeApp,
  explorer: ExplorerApp,
  settings: SettingsApp,
  word: WordApp,
}

const { selectApp } = useApplicationStore()
const { width, height } = useWindowSize()

const appStyle = defineModel<ApplicationStyle>('appStyle', { required: true })
const enlargedStyle = computed(() => {
  return {
    top: 0,
    left: 0,
    width: `${width.value}px`,
    height: `${height.value - 64}px`,
  }
})

const { id, isEnlarged, isSelected, type } = defineProps<{
  id: string
  type: string
  isSelected: boolean
  isEnlarged: boolean
}>()

const applicationEl = ref(null)
const applicationHandle = ref(null)

const { style: positionStyle } = useDraggable(applicationEl, {
  initialValue: { x: appStyle.value.left as number, y: appStyle.value.top as number },
  handle: applicationHandle,
})

useResizeObserver(applicationEl, (entries) => {
  const entry = entries[0]
  const { width, height } = entry.contentRect
  if (isEnlarged) return
  appStyle.value.width = `${width}px`
  appStyle.value.height = `${height}px`
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
    if (top) appStyle.value.top = top
    if (left) appStyle.value.left = left
  },
  { immediate: true },
)

watch(
  () => isSelected,
  (sel) => {
    appStyle.value.zIndex = sel ? 6 : 5
  },
)

onMounted(() => {
  const app = appMap[type]
  if (app) createApp(app).mount(`#app_${id}`)
})
</script>

<template>
  <div
    ref="applicationEl"
    :style="isEnlarged ? enlargedStyle : appStyle"
    class="application-frame"
    :class="{ enlarged: isEnlarged }"
    @mousedown="selectApp(id)"
  >
    <SystemBar ref="applicationHandle" :isEnlarged="isEnlarged" :id="id" />
    <div :id="`app_${id}`"></div>
  </div>
</template>

<style scoped>
.application-frame {
  position: fixed;
  background: var(--app-background-color);
  backdrop-filter: var(--app-backdrop-filter);

  min-width: 400px;
  min-height: 200px;
  resize: both;
  overflow: auto;
  border-radius: var(--app-border-radius);
  box-shadow: var(--app-box-shadow);
  z-index: 5;

  &.enlarged {
    transition: all 50ms ease-in-out;
    border-radius: 0 !important;
  }

  &:active {
    z-index: 10;
  }
}
</style>
