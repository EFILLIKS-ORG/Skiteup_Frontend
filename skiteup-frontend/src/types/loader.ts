export type LoaderSize = 'sm' | 'md' | 'lg' | 'xl'
export type LoaderVariant = 'primary' | 'secondary' | 'accent' | 'white'

export interface LoaderProps {
  size?: LoaderSize
  variant?: LoaderVariant
  label?: string
  fullScreen?: boolean
  blur?: boolean
  className?: string
}
