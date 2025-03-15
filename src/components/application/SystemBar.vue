<script setup lang="ts">
import Minimize from '@/assets/icons/system/minimize.svg'
import Enlarge from '@/assets/icons/system/enlarge.svg'
import Enlarged from '@/assets/icons/system/enlarged.svg'
import Close from '@/assets/icons/system/close.svg'
import Add from '@/assets/icons/system/add.svg'
import Documents from '@/assets/favicons/documents.svg'

const app = defineModel<Application>({
  required: true,
})

const { closeApplication } = useApplicationStore()
</script>

<template>
  <nav class="system-bar" @dblclick="app.isEnlarged = !app.isEnlarged">
    <div v-if="app.tabs.length" class="tabs">
      <div v-for="tab in app.tabs" :key="tab.id" class="tab">
        <Documents width="16" />

        {{ tab.title }}
      </div>
      <button class="new-tab"><Add /></button>
    </div>
    <div v-else>
      {{ app.name }}
    </div>

    <div class="system-icons">
      <span class="icon" @click="app.isMinimized = !app.isMinimized">
        <Minimize width="11" />
      </span>
      <span class="icon" @click="app.isEnlarged = !app.isEnlarged">
        <Enlarge v-if="!app.isEnlarged" width="11" />
        <Enlarged v-else width="11" />
      </span>
      <span class="icon close" @click="closeApplication(app.id)">
        <Close width="11" />
      </span>
    </div>
  </nav>
</template>

<style scoped>
.system-bar {
  border: rgba(0, 0, 0, 0.057);
  height: 44px;
  min-height: 44px;
  padding: 0 0 0 14px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .tabs {
    margin-top: auto;
    flex: 1;
    display: flex;
    gap: 10px;

    .tab {
      background-color: rgba(255, 255, 255, 0.7);
      height: 32px;
      display: flex;
      gap: 8px;
      align-items: center;
      padding: 0 8px;
      border-top-left-radius: 6px;
      border-top-right-radius: 6px;
      font-size: 14px;
      font-weight: 500;
      min-width: 200px;
    }

    .new-tab {
      height: 28px;
      width: 32px;
      display: flex;
      align-items: center;
      padding: 0 8px;
      border-radius: 6px;
      margin-bottom: 4px;
      border: none;
      background-color: transparent;
      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
        background-color: rgba(255, 255, 255, 0.46);
      }
    }
  }

  .system-icons {
    height: 100%;
    display: flex;

    .icon {
      filter: var(--filter-invert);
      height: 100%;
      padding: 0 18px;

      display: flex;
      align-items: center;

      &:hover {
        background: rgba(255, 255, 255, 0.12);
      }

      &.close {
        .system-close {
          stroke: black;
        }
        &:hover {
          background: #d52027;

          .system-close {
            stroke: white !important;
          }
        }
      }
    }
  }
}
</style>
