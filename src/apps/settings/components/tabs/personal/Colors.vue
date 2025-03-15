<script setup lang="ts">
import Card from '../../base/Card.vue'
import Tile from '../../base/Tile.vue'
import Select from '@/components/base/Select.vue'

const { accentColorVar, colorMode } = storeToRefs(useLayoutStore())

const windowsColors = [
  '#ffb900',
  '#ff8c00',
  '#f7630c',
  '#ca5010',
  '#da3b01',
  '#ef6950',
  '#d13438',
  '#ff4343',
  '#e74856',
  '#e81123',
  '#ea005e',
  '#c30052',
  '#e3008c',
  '#bf0077',
  '#c239b3',
  '#9a0089',
  '#0078d4',
  '#0063b1',
  '#8e8cd8',
  '#6b69d6',
  '#8764b8',
  '#744da9',
  '#b146c2',
  '#881798',
  '#0099bc',
  '#2d7d9a',
  '#00b7c3',
  '#038387',
  '#00b294',
  '#018574',
  '#00cc6a',
  '#10893e',
  '#7a7574',
  '#5d5a58',
  '#68768a',
  '#515c6b',
  '#567c73',
  '#486860',
  '#498205',
  '#107c10',
  '#767676',
  '#4c4a48',
  '#69797e',
  '#4a5459',
  '#647c64',
  '#525e54',
  '#847545',
  '#7e735f',
] as const

type WindowsColor = (typeof windowsColors)[number]

const setColor = (color: WindowsColor) => (accentColorVar.value = color)
</script>

<template>
  <Tile id="dark-mode" title="Choose your mode" subtext="The color mode that will be applied in Windows and other apps" icon="brush">
    <template #end>
      <Select
        v-model="colorMode"
        :options="[
          { value: 'light', label: 'Light' },
          { value: 'dark', label: 'Dark' },
        ]"
      />
    </template>
  </Tile>

  <Card id="color-settings">
    <Tile id="accent-color" title="Accent color" icon="color" />

    <div class="colors-container">
      <p>Windows Colors</p>

      <div class="colors">
        <span
          v-for="color of windowsColors"
          :key="color"
          :style="{ background: color }"
          class="color"
          :class="{ active: color === accentColorVar }"
          @click="setColor(color)"
        >
          <div v-if="color === accentColorVar" class="selected">
            <!-- checkmark -->
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.5 4.5L8.5 11.5L4.5 7.5" stroke="white" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
        </span>
      </div>
    </div>
  </Card>
</template>

<style scoped>
#dark-mode {
  margin-bottom: 4px;
}
#color-settings {
  #accent-color {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-inline: none;
    border-top: none;
  }

  .colors-container {
    padding: 12px 48px;

    p {
      margin-bottom: 8px;
    }

    .colors {
      display: grid;
      grid-template-columns: repeat(9, 50px);
      padding-bottom: 8px;
      overflow-x: scroll;

      flex-wrap: wrap;
      gap: 4px;

      .color {
        position: relative;
        width: 50px;
        height: 50px;

        object-fit: cover;
        border-radius: 4px;

        &:hover {
          border: solid 1px var(--app-secondary-panel-color);
          display: flex;
        }

        &.active {
          border: solid 2px rgba(0, 0, 0, 0.8);
        }

        .selected {
          position: absolute;
          width: 18px;
          height: 18px;
          top: 0;
          right: 0;
          background: rgba(0, 0, 0, 0.8);
        }
      }
    }
  }
}
</style>
