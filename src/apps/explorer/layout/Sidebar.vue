<script setup lang="ts">
import Home from '@/assets/favicons/home.svg'
import Gallery from '@/assets/favicons/gallery.svg'
import Onedrive from '@/assets/favicons/onedrive.svg'
import Desktop from '@/assets/favicons/desktop.svg'
import Documents from '@/assets/favicons/documents.svg'
import Downloads from '@/assets/favicons/downloads.svg'
import Music from '@/assets/favicons/music.svg'
import Pictures from '@/assets/favicons/pictures.svg'
import Videos from '@/assets/favicons/videos.svg'
import PC from '@/assets/favicons/pc.svg'
import Drive from '@/assets/favicons/drive.svg'
import DriveLocked from '@/assets/favicons/driveLocked.svg'

const sections = [
  [
    {
      name: 'Home',
      icon: Home,
      to: ['Local Disk (C:)', 'Users'],
    },
    {
      name: 'Gallery',
      icon: Gallery,
      to: ['Local Disk (C:)', 'Users', 'Bram Bekkers', 'Pictures'],
    },
    {
      name: 'Bram - Personal',
      icon: Onedrive,
      to: ['Local Disk (C:)', 'Users', 'Bram Bekkers'],
    },
  ],
  [
    {
      name: 'Desktop',
      icon: Desktop,
      to: ['Local Disk (C:)', 'Users', 'Bram Bekkers', 'Desktop'],
    },
    {
      name: 'Documents',
      icon: Documents,
      to: ['Local Disk (C:)', 'Users', 'Bram Bekkers', 'Documents'],
    },
    {
      name: 'Downloads',
      icon: Downloads,
      to: ['Local Disk (C:)', 'Users', 'Bram Bekkers', 'Downloads'],
    },
    {
      name: 'Music',
      icon: Music,
      to: ['Local Disk (C:)', 'Users', 'Bram Bekkers', 'Music'],
    },
    {
      name: 'Pictures',
      icon: Pictures,
      to: ['Local Disk (C:)', 'Users', 'Bram Bekkers', 'Pictures'],
    },
    {
      name: 'Videos',
      icon: Videos,
      to: ['Local Disk (C:)', 'Users', 'Bram Bekkers', 'Videos'],
    },
  ],
  [
    {
      name: 'This PC',
      icon: PC,
      to: [],
    },
    {
      name: 'Local Disk (C:)',
      icon: DriveLocked,
      to: ['Local Disk (C:)'],
    },
    {
      name: 'Dev Drive (F:)',
      icon: Drive,
      to: ['Dev Drive (F:)'],
    },
  ],
]
</script>

<template>
  <aside>
    <section v-for="(section, i) in sections" :key="i">
      <div v-for="item in section" class="item" @click="$emit('to', item.to)">
        <component :is="item.icon" width="16" />
        {{ item.name }}
      </div>
      <hr />
    </section>
  </aside>
</template>

<style scoped>
aside {
  width: 200px;
  height: 100%;
  border-right: #e5e5e5 1px solid;
  font-weight: 400;
  padding: 8px 0;

  section {
    padding: 0 8px;

    .item {
      padding: 7px;
      border-radius: 4px;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 8px;
      padding-left: 24px;

      &:hover {
        background-color: rgba(0, 0, 0, 0.02);
      }
    }

    hr {
      margin-top: 16px;
      border: none;
      border-bottom: #e5e5e5 1px solid;
    }
  }
}
</style>
