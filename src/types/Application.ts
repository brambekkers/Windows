export interface ApplicationStyle {
  top: string | number
  left: string | number
  width: string
  height: string
  zIndex: number
}

export interface Application {
  id: string
  type: string
  isSelected: boolean
  isEnlarged: boolean
  style: ApplicationStyle
}
