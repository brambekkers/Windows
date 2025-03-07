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

  const createNewApp = (type: string) => {
    // Get the height of the window
    const windowHeight = window.innerHeight
    const windowWidth = window.innerWidth

    // Generate a random number within the range of the window height
    const randomHeight = Math.abs(Math.floor(Math.random() * (windowHeight - 250)))
    const randomWidth = Math.abs(Math.floor(Math.random() * (windowWidth - 500)))

    return {
      id: uniqueId('app_'),
      isSelected: false,
      isEnlarged: false,
      type,
      style: {
        top: randomHeight,
        left: randomWidth,
        height: '500px',
        width: '500px',
        zIndex: 5,
      },
    }
  }

  const addApplication = (type: string, forceOpen = false) => {
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

  const getApplicationByType = (type: string) => {
    return applications.value.find((app) => app.type === type)
  }

  const getApplicationById = (id: string) => {
    return applications.value.find((app) => app.id === id)
  }

  const toggleAppSize = (id: string) => {
    const app = getApplicationById(id)
    if (!app) return
    app.isEnlarged = !app.isEnlarged
  }

  return {
    applications,
    mainApplication,
    addApplication,
    closeApplication,
    getApplicationByType,
    toggleAppSize,
    selectApp,
  }
})
