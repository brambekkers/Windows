import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Application } from '@/types/Application'

export const useApplicationStore = defineStore('applications', () => {
  const applications = ref<Application[]>([])

  const selectApp = (id: number) => {
    applications.value.forEach((app) => {
      if (app.id !== id) app.isSelected = false
      else app.isSelected = true
    })
  }

  const addApplication = (type: string, forceOpen = false) => {
    // Get the height of the window
    const windowHeight = window.innerHeight
    const windowWidth = window.innerWidth

    // Generate a random number within the range of the window height
    const randomHeight = Math.abs(Math.floor(Math.random() * (windowHeight - 250)))
    const randomWidth = Math.abs(Math.floor(Math.random() * (windowWidth - 500)))

    if (!forceOpen) {
      const currentApp = applications.value.find((app) => app.type === type)
      if (currentApp) {
        selectApp(currentApp.id)
        return
      }
    }

    applications.value.push({
      id: new Date().valueOf(),
      isSelected: false,
      isEnlarged: false,
      type,
      style: {
        top: randomHeight,
        left: randomWidth,
        height: '500px',
        width: '500px',
        zIndex: 5
      }
    })
  }

  const closeApplication = (id: number) => {
    const index = applications.value.findIndex((app) => app.id === id)
    applications.value.splice(index, 1)
  }

  const getApplicationByType = (type: string) => {
    return applications.value.find((app) => app.type === type)
  }

  const getApplicationById = (id: number) => {
    return applications.value.find((app) => app.id === id)
  }

  const toggleAppSize = (id: number) => {
    const app = getApplicationById(id)
    if (!app) return
    app.isEnlarged = !app.isEnlarged
  }

  return {
    applications,
    addApplication,
    closeApplication,
    getApplicationByType,
    toggleAppSize,
    selectApp
  }
})
