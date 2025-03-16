<script setup lang="ts">
import Card from '../base/Card.vue'
import Tile from '../base/Tile.vue'
import Screen from '../base/Screen.vue'

const Tiles = [
  {
    title: 'Screen',
    icon: 'laptop',
  },
  {
    title: 'Sound',
    icon: 'volumeFull',
  },
  {
    title: 'Mouse cursor and touch',
    icon: 'touchPointer',
  },
] as const
</script>

<template>
  <div class="overview">
    <Screen hide-panel />

    <div class="pc-info">
      <h2>Bram's PC</h2>
      <p>Windows 11 Pro</p>
    </div>
  </div>
  <section>
    <Card id="recommend-settings">
      <div class="header">
        <h1>Recommended settings</h1>
        <p>Recent and frequently used settings</p>
      </div>
      <div class="tiles">
        <Tile v-for="{ title, icon } of Tiles" :key="title" :title :icon />
      </div>
    </Card>
  </section>
</template>

<style scoped>
.overview {
  display: flex;
  align-items: center;
  padding-bottom: 24px;
  gap: 16px;

  .screen {
    width: 20%;
    min-width: 100px;
    max-width: 150px;
  }

  .pc-info {
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 0px;

    h2 {
      font-size: 1.2rem;
    }
  }
}

#recommend-settings {
  .header {
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 24px 16px;

    h1 {
      font-weight: 500;
      font-size: 1.375rem;
      margin-bottom: 4px;
    }

    p {
      font-size: 0.875rem;
      opacity: 0.8;
      font-weight: 400;
    }
  }

  .tiles {
    display: flex;
    flex-direction: column;
    gap: 0px;

    > * {
      border-radius: 0;
      background-color: transparent;
      border-inline: none;

      &:hover {
        background-color: var(--app-panel-hover-color);
      }
    }
  }
}
</style>
