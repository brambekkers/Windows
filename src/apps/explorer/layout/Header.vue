<script setup lang="ts">
import Left from '@/assets/icons/system/left.svg'
import Right from '@/assets/icons/system/right.svg'
import Up from '@/assets/icons/system/up.svg'
import Refresh from '@/assets/icons/system/refresh.svg'
import PC from '@/assets/icons/system/pc.svg'
import Crumb from '@/assets/icons/system/chevronRight.svg'

defineProps<{
  path: string[]
}>()
</script>

<template>
  <nav>
    <section class="navigation">
      <button>
        <Left width="16" @click="$emit('back')" class="icon" />
      </button>
      <button>
        <Right width="16" @click="$emit('forward')" class="icon" />
      </button>
      <button>
        <Up width="16" @click="$emit('up')" class="icon" />
      </button>
      <button>
        <Refresh width="16" class="icon" />
      </button>
    </section>
    <section class="path">
      <PC height="16" @click="$emit('to', [])" class="icon" />
      <Crumb height="16" class="icon" />
      <p @click="$emit('to', [])">This PC</p>
      <template v-for="p in path" :key="p">
        <Crumb height="16" class="icon" />
        <p @click="$emit('to', path.slice(0, path.indexOf(p) + 1))">
          {{ p }}
        </p>
      </template>
    </section>
  </nav>
</template>

<style scoped>
nav {
  background-color: var(--app-secondary-panel-color);
  display: flex;
  align-items: center;
  height: 48px;
  padding-right: 8px;

  .navigation {
    display: flex;
    height: 100%;

    button {
      width: 48px;
      height: 48px;
      border: none;
      background-color: transparent;

      .icon {
        filter: var(--filter-invert);
      }
      &:hover {
        background-color: var(--button-hover-color);
      }
    }
  }

  .path {
    max-height: 32px;
    flex: 1;
    background-color: var(--input-background-color);
    border-radius: 4px;

    padding: 8px 12px;
    display: flex;
    align-items: center;
    gap: 12px;

    text-wrap: nowrap;

    .icon {
      filter: var(--filter-invert);
    }
  }
}
</style>
