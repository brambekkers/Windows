<script setup lang="ts">
defineProps<{
  currentFolder: Record<string, unknown>
  selectedFile: Record<string, unknown> | null
}>()
</script>

<template>
  <footer>
    <p>{{ Object.keys(currentFolder.sub).length }} files</p>
    <p v-if="selectedFile"><span>|</span> 1 file selected</p>
    <p v-if="selectedFile"><span>|</span> {{ selectedFile.size }}</p>
  </footer>
</template>

<style scoped>
footer {
  height: 32px;
  padding: 0 16px;
  display: flex;
  align-items: center;
  border-top: #e5e5e5 1px solid;
  background-color: rgb(249, 249, 249);

  p {
    font-size: 12px;
    line-height: 20px;
    opacity: 0.6;

    span {
      margin: 0 8px;
    }
  }
}
</style>
