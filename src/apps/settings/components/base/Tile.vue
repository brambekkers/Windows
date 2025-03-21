<script setup lang="ts">
import ChevronRight from '@/assets/icons/system/chevronRight.svg'
import Image from '@/assets/fluent/image.svg'
import Brush from '@/assets/fluent/brush.svg'
import Color from '@/assets/fluent/color.svg'
import Keyboard from '@/assets/fluent/keyboard.svg'
import Laptop from '@/assets/fluent/laptop.svg'
import VolumeFull from '@/assets/fluent/volumeFull.svg'
import VolumeHalf from '@/assets/fluent/volumeHalf.svg'
import TouchPointer from '@/assets/fluent/touchPointer.svg'

const { subtext = '' } = defineProps<{
  icon: 'color' | 'image' | 'brush' | 'keyboard' | 'laptop' | 'volumeFull' | 'volumeHalf' | 'touchPointer'
  title: string
  subtext?: string
}>()
</script>

<template>
  <section>
    <Image v-if="icon === 'image'" width="24" height="24" class="icon" />
    <Brush v-if="icon === 'brush'" width="24" height="24" class="icon" />
    <Keyboard v-if="icon === 'keyboard'" width="24" height="24" class="icon" />
    <Color v-if="icon === 'color'" width="24" height="24" class="icon" />
    <Laptop v-if="icon === 'laptop'" width="24" height="24" class="icon" />
    <VolumeFull v-if="icon === 'volumeFull'" width="18" height="18" class="icon" />
    <VolumeHalf v-if="icon === 'volumeHalf'" width="18" height="18" class="icon" />
    <TouchPointer v-if="icon === 'touchPointer'" width="20" height="20" class="icon" />

    <div class="content">
      <p class="title">{{ title }}</p>
      <p class="subtext">{{ subtext }}</p>
    </div>

    <div v-if="$slots.end">
      <slot name="end" />
    </div>
    <ChevronRight v-else width="22" height="22" class="icon" />
  </section>
</template>

<style scoped>
section {
  background-color: var(--app-panel-color);
  height: 66px;
  width: 100%;
  border-radius: 4px;
  border: var(--app-border);

  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 12px;
  transition: all 100ms ease-in-out;

  &:hover {
    background-color: var(--app-panel-hover-color);
  }

  .icon {
    margin-right: 16px;
    filter: var(--filter-invert);
  }

  .content {
    display: flex;
    flex-direction: column;
    flex-grow: 1;

    .title {
      font-size: 0.9rem;
    }

    .subtext {
      font-size: 0.7rem;
      opacity: 0.8;
    }
  }
}
</style>
