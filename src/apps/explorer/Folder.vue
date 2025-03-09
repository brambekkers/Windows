<script setup lang="ts">
import Folder from '@/assets/icons/Folder.svg'
import Docx from '@/assets/icons/docx.svg'
import Txt from '@/assets/icons/txt.svg'

type File = {
  name: string
  locked: boolean
  type: string
  size: string
  sub: Record<string, unknown>
}

const emit = defineEmits(['toFolder', 'select'])
const { file, selectedFile } = defineProps<{
  selectedFile: File | null
  file: File
}>()

const click = () => {
  if (file.locked) return
  if (file.type === 'folder' || file.type.includes('drive')) emit('toFolder')
}

const isSelected = computed(() => file.name === selectedFile?.name)
</script>

<template>
  <button :class="{ selected: isSelected }" @dblclick="click" @click.stop="$emit('select')">
    <Folder v-if="file.type === 'folder'" width="72" />
    <Docx v-else-if="file.type === 'docx'" width="72" />
    <Txt v-else-if="file.type === 'txt'" width="72" />
    <img v-else-if="file.type === 'drive'" src="@/assets/icons/drive.png" width="72" />
    <img v-else-if="file.type === 'drive_ms'" src="@/assets/icons/drive_ms.png" width="72" />
    <img v-else-if="file.type === 'drive_lock'" src="@/assets/icons/drive_lock.png" width="72" />
    <img v-else-if="file.type === 'file_music'" src="@/assets/icons/file_music.png" width="72" />
    <img v-else-if="file.type === 'file_video'" src="@/assets/icons/file_video.png" width="72" />
    <img v-else-if="file.type === 'file_image'" src="@/assets/icons/file_image.png" width="72" />
    <img v-else src="@/assets/icons/file_empty.png" width="72" />

    <p>{{ file.name }}</p>
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

  &.selected {
    background-color: rgba(0, 0, 0, 0.05);
    border: #e5e5e5 1px solid;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.02);
  }
}
</style>
