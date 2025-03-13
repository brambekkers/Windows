export type ApplicationTypes = 'explorer' | 'settings' | 'word' | 'edge' | 'powerpoint' | 'steam'

export type Tab = {
  title: string
  active: boolean
  id: string
}

export interface ApplicationStyle {
  top: string | number
  left: string | number
  width: string
  height: string
  zIndex: number
}

export interface Application {
  id: string
  type: ApplicationTypes
  name: string
  isSelected: boolean
  isMinimized: boolean
  isEnlarged: boolean
  tabs: Tab[]
  style: ApplicationStyle
}
