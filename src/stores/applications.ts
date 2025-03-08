import NewApplications from '@/constants/applications'
import type { Application } from '@/types/Application'

export const useApplicationStore = defineStore('applications', () => {
  const applications = ref<Application[]>([])
  const mainApplication = ref<string | null>(null)

  const selectApp = (id: string) => {
    applications.value.forEach((app) => {
      if (app.id !== id) app.isSelected = false
      else {
        app.isSelected = true
        mainApplication.value = id
      }
    })
  }

  const randomAppPosition = (appWidth: `${string}px`, appHeight: `${string}px`) => {
    const windowWidth = window.innerWidth - +appWidth.split('px')[0]
    const windowHeight = window.innerHeight - +appHeight.split('px')[0]
    const randomHeight = Math.abs(Math.floor(Math.random() * windowHeight))
    const randomWidth = Math.abs(Math.floor(Math.random() * windowWidth))
    return {
      top: randomHeight,
      left: randomWidth,
    }
  }

  const createNewApp = (type: ApplicationTypes) => {
    const newApp = NewApplications[type] || {}
    const { top, left } = randomAppPosition(newApp.style.width, newApp.style.height)
    return {
      ...newApp,
      id: uniqueId('app_'),
      style: {
        ...newApp.style,
        top,
        left,
      },
    }
  }

  const addApplication = (type: ApplicationTypes, forceOpen = false) => {
    if (!forceOpen) {
      const currentApp = applications.value.find((app) => app.type === type)
      if (currentApp) {
        selectApp(currentApp.id)
        return currentApp
      }
    }

    const newApp = createNewApp(type)
    applications.value.push(newApp)
    return newApp
  }

  const closeApplication = (id: string) => {
    const index = applications.value.findIndex((app) => app.id === id)
    applications.value.splice(index, 1)
  }

  const getApplicationByType = (type: ApplicationTypes) => {
    return applications.value.find((app) => app.type === type)
  }

  return {
    applications,
    mainApplication,
    addApplication,
    closeApplication,
    getApplicationByType,
    selectApp,
  }
})
