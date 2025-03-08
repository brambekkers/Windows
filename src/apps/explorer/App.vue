<script setup lang="ts">
import { fileSystem } from './constants/fileSystem.ts'
import Header from './layout/Header.vue'
import Sidebar from './layout/Sidebar.vue'
import Folder from './Folder.vue'

const path = ref([])
const { undo, redo } = useRefHistory(path, { deep: true })
const currentFolder = computed(() => {
  let lastFolder = fileSystem
  path.value.forEach((p) => {
    lastFolder = { ...lastFolder.sub[p] }
  })
  return lastFolder
})

const currentFiles = computed(() => {
  return Object.entries(currentFolder.value.sub)
})
</script>

<template>
  <Header :path @back="undo" @forward="redo" @up="path.pop()" @to="path = $event" />
  <section class="container">
    <Sidebar @to="path = $event" />
    <main>
      <div class="folders">
        <Folder v-for="[name, file] in currentFiles" :key="name" :name :file @toFolder="path.push(name)" />
      </div>
    </main>
  </section>
</template>

<style scoped>
.container {
  background-color: rgb(249, 249, 249);
  flex: 1;
  border-top: #e5e5e5 1px solid;
  display: flex;

  aside {
    width: 200px;
    height: 100%;
    border-right: #e5e5e5 1px solid;
  }
  main {
    flex: 1;
    height: 100%;
    overflow: auto;

    .folders {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: flex-start;
    }
  }
}
</style>
