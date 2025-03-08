<script setup lang="ts">
import Folder from '@/assets/icons/Folder.svg'
import Docx from '@/assets/icons/docx.svg'
import Txt from '@/assets/icons/txt.svg'

const emit = defineEmits(['toFolder'])
const { file } = defineProps<{
  name: string
  file: {
    locked: boolean
    type: string
    size: string
    sub: Record<string, unknown>
  }
}>()

const click = () => {
  if (file.type === 'folder') emit('toFolder')
}
</script>

<template>
  <button @dblclick="click">
    <Folder v-if="file.type === 'folder'" width="72" />
    <Docx v-if="file.type === 'docx'" width="72" />
    <Txt v-if="file.type === 'txt'" width="72" />
    <p>{{ name }}</p>
  </button>
</template>

<style scoped>
button {
  border: none;
  border-radius: 4px;
  width: 145px;
  height: 128px;
  background-color: transparent;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;

  font-size: 14px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.46);
  }
}
</style>
