<script setup lang="ts">
import Card from '../base/Card.vue'
</script>

<template>
  <section>
    <Card />
    <Card />
    <Card />
  </section>
</template>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
</style>
