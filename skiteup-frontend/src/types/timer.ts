import type { ReactNode } from 'react'

export type TimerVariant = 'secondary' | 'primary' | 'accent' | 'outline' | 'ghost'
export type TimerSize = 'sm' | 'md' | 'lg' | 'xl'
export type TimerMode = 'countdown' | 'stopwatch'

export interface TimerProps {
  hours?: number
  minutes?: number
  seconds?: number
  initialSeconds?: number
  mode?: TimerMode
  variant?: TimerVariant
  size?: TimerSize
  label?: string
  showLabel?: boolean
  showHours?: boolean
  showIcon?: boolean
  icon?: ReactNode
  showControls?: boolean
  playIcon?: ReactNode
  pauseIcon?: ReactNode
  resetIcon?: ReactNode
  autoStart?: boolean
  warningThresholdSeconds?: number
  dangerThresholdSeconds?: number
  onComplete?: () => void
  onTick?: (remainingSeconds: number) => void
  onPause?: (remainingSeconds: number) => void
  onResume?: (remainingSeconds: number) => void
  onReset?: () => void
  className?: string
  badgeClassName?: string
  labelClassName?: string
}
