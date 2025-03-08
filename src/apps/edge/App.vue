<template>
  <div class="browser-window">
    <!-- Top Bar -->
    <div class="top-bar">
      <div class="nav-buttons">
        <button @click="goBack" :disabled="history.length <= 1" title="Back">⬅️</button>
        <button @click="goForward" :disabled="forwardHistory.length === 0" title="Forward">➡️</button>
        <button @click="reloadPage" title="Refresh">🔄</button>
      </div>
      <input v-model="url" @keyup.enter="navigate" placeholder="Search or enter URL" class="address-bar" />
      <button @click="navigate">Go</button>
    </div>

    <!-- Browser View -->
    <iframe :src="'http://localhost:8080?url=' + encodeURIComponent(currentSite.url)" class="webview" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const currentSite = ref({ url: 'https://www.github.com/BramBekkers', title: 'Bing' })
const url = ref(currentSite.value.url)

const history = ref([url.value])
const forwardHistory = ref([])

const navigate = () => {
  if (!url.value.startsWith('http')) {
    url.value = 'https://' + url.value
  }
  currentSite.value.url = url.value
  history.value.push(url.value)
  forwardHistory.value = []
}

const goBack = () => {
  if (history.value.length > 1) {
    forwardHistory.value.unshift(history.value.pop())
    url.value = history.value[history.value.length - 1]
    currentSite.value.url = url.value
  }
}

const goForward = () => {
  if (forwardHistory.value.length > 0) {
    history.value.push(forwardHistory.value.shift())
    url.value = history.value[history.value.length - 1]
    currentSite.value.url = url.value
  }
}

const reloadPage = () => {
  currentSite.value.url += ''
}
</script>

<style scoped>
.browser-window {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  overflow: hidden;

  .top-bar {
    display: flex;
    align-items: center;
    padding: 8px;
    background: #f1f1f1;
    border-bottom: 1px solid #ccc;

    .nav-buttons button {
      background: none;
      border: none;
      padding: 5px;
      margin-right: 5px;
      cursor: pointer;
    }

    .address-bar {
      flex-grow: 1;
      padding: 5px;
      border-radius: 5px;
      border: 1px solid #ccc;
      margin: 0 5px;
    }
  }

  .webview {
    flex: 1;
    width: 100%;
    height: 100%;
    border: none;
  }
}
</style>
