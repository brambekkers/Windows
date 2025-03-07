export const useStartMenuStore = defineStore('start', () => {
  const isOpen = ref(false)

  const { mainApplication } = storeToRefs(useApplicationStore())

  watch(mainApplication, (app) => {
    if (app === 'start-menu') return
    // isOpen.value = false
  })

  return { isOpen }
})
