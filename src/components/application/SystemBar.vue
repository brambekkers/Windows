<script setup lang="ts">
  import Minimize from '@/assets/icons/system/minimize.svg'
  import Enlarge from '@/assets/icons/system/enlarge.svg'
  import Enlarged from '@/assets/icons/system/enlarged.svg'
  import Close from '@/assets/icons/system/close.svg'
  import { useApplicationStore } from '@/store/applications'

  defineProps<{
    id: number
    isEnlarged: boolean
  }>()
  const { closeApplication, toggleAppSize } = useApplicationStore()
</script>

<template>
  <nav class="system-bar">
    {{ id }}

    <div class="system-icons">
      <span class="icon">
        <Minimize width="11" />
      </span>
      <span
        class="icon"
        @click="toggleAppSize(id)">
        <Enlarge
          v-if="!isEnlarged"
          width="11" />
        <Enlarged
          v-else
          width="11" />
      </span>
      <span
        class="icon close"
        @click="closeApplication(id)">
        <Close width="11" />
      </span>
    </div>
  </nav>
</template>

<style scoped>
  .system-bar {
    background: rgba($color: #fff, $alpha: 0.85);

    backdrop-filter: blur(20px);
    height: 44px;

    padding: 0 0 0 14px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    .system-icons {
      height: 100%;
      display: flex;

      .icon {
        height: 100%;
        padding: 0 18px;

        display: flex;
        align-items: center;

        &:hover {
          background: rgba(0, 0, 0, 0.12);
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
