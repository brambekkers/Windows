export const useLayoutStore = defineStore('layout', () => {
  const colorMode = useLocalStorage('colorMode', 'light')
  const accentColor = useLocalStorage('accentColor', `#0078d4`)
  const background = useLocalStorage('backgroundImage', `url(${new URL(`@/assets/wallpaper/wallpaper1.webp`, import.meta.url)})`)
  const backgroundVar = useCssVar('--windows-background-image', null, { initialValue: background.value })
  const accentColorVar = useCssVar('--windows-accent-color', null, { initialValue: accentColor.value })

  watch(backgroundVar, (bg) => (background.value = bg), { immediate: true })
  watch(accentColorVar, (color) => (accentColor.value = color), { immediate: true })

  return { backgroundVar, accentColorVar, colorMode }
})
