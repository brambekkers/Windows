<script setup lang="ts">
import { fileSystem } from './constants/fileSystem.ts'
import Header from './layout/Header.vue'
import Footer from './layout/Footer.vue'
import Sidebar from './layout/Sidebar.vue'
import Folder from './Folder.vue'

const path = ref<string[]>([])
const { undo, redo } = useRefHistory(path, { deep: true })
const selectedFile = ref<null | Record<string, unknown>>(null)
const currentFolder = computed(() => {
  let lastFolder = fileSystem
  path.value.forEach((p) => {
    lastFolder = { ...lastFolder.sub[p] }
  })
  return lastFolder
})

const currentFiles = computed(() => {
  return Object.entries(currentFolder.value?.sub || {}).map(([name, file]) => ({ name, ...file }))
})

const changePath = (newPath: string[]) => {
  path.value = newPath
  selectedFile.value = null
}
</script>

<template>
  <Header :path @back="undo" @forward="redo" @up="changePath(path.slice(0, -1))" @to="changePath($event)" />
  <section class="container">
    <Sidebar @to="path = $event" />
    <main @click="selectedFile = null">
      <div class="folders">
        <Folder v-for="file in currentFiles" :key="file.name" :selectedFile :file @toFolder="changePath([...path, file.name])" @select="selectedFile = file" />
      </div>
    </main>
  </section>
  <Footer :selectedFile :currentFolder />
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
    padding: 8px;
    display: flex;
    flex-direction: column;

    .folders {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
    }
  }
}
</style>
