import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Play } from 'reicon-react/icons/Play'
import { Pause } from 'reicon-react/icons/Pause'
import { Refresh } from 'reicon-react/icons/Refresh'
import { Timer as TimerIcon } from 'reicon-react/icons/Timer'
import type { TimerProps, TimerSize, TimerVariant } from '../../types/timer'

const sizeStyles: Record<
  TimerSize,
  {
    containerGap: string
    label: string
    badge: string
    digit: string
    digitSpacing: string
    iconSize: number
    btnSize: string
    controlGap: string
  }
> = {
  sm: {
    containerGap: 'gap-1',
    label: 'text-xs font-semibold',
    badge: 'px-3 py-1.5 rounded-[var(--radius-md)] border-[1.5px]',
    digit: 'text-sm font-semibold tracking-wide',
    digitSpacing: 'mx-0.5',
    iconSize: 13,
    btnSize: 'p-1 rounded-[var(--radius-xs)] text-xs',
    controlGap: 'gap-1',
  },
  md: {
    containerGap: 'gap-1.5',
    label: 'text-sm font-semibold',
    badge: 'px-4.5 py-2.5 rounded-[var(--radius-lg)] border-[1.5px]',
    digit: 'text-lg font-bold tracking-wider',
    digitSpacing: 'mx-1',
    iconSize: 16,
    btnSize: 'p-1.5 rounded-[var(--radius-sm)] text-sm',
    controlGap: 'gap-1.5',
  },
  lg: {
    containerGap: 'gap-2',
    label: 'text-base font-bold',
    badge: 'px-6 py-3.5 rounded-[var(--radius-xl)] border-2',
    digit: 'text-2xl font-bold tracking-widest',
    digitSpacing: 'mx-1.5',
    iconSize: 18,
    btnSize: 'p-2 rounded-[var(--radius-sm)] text-base',
    controlGap: 'gap-2',
  },
  xl: {
    containerGap: 'gap-2.5',
    label: 'text-xl font-extrabold',
    badge: 'px-8 py-4.5 rounded-[var(--radius-2xl)] border-2',
    digit: 'text-4xl font-extrabold tracking-widest',
    digitSpacing: 'mx-2',
    iconSize: 22,
    btnSize: 'p-2.5 rounded-[var(--radius-md)] text-lg',
    controlGap: 'gap-2.5',
  },
}

const variantStyles: Record<
  TimerVariant,
  {
    label: string
    badgeBg: string
    badgeBorder: string
    badgeText: string
    btnPrimary: string
    btnSecondary: string
    iconColor: string
  }
> = {
  secondary: {
    label: 'text-[var(--color-secondary)]',
    badgeBg: 'bg-[var(--color-cardbg)]',
    badgeBorder: 'border-[var(--color-secondary)]/30 hover:border-[var(--color-secondary)]/60',
    badgeText: 'text-[var(--color-secondary)]',
    btnPrimary:
      'bg-[var(--color-secondary)] text-[var(--color-text-inverse)] hover:bg-[var(--color-hover-secondary)]',
    btnSecondary:
      'bg-[var(--color-background)] text-[var(--color-secondary)] hover:bg-[var(--color-border-light)]/40',
    iconColor: 'text-[var(--color-secondary)]',
  },
  primary: {
    label: 'text-[var(--color-primary)]',
    badgeBg: 'bg-[var(--color-cardbg)]',
    badgeBorder: 'border-[var(--color-primary)]/30 hover:border-[var(--color-primary)]/60',
    badgeText: 'text-[var(--color-primary)]',
    btnPrimary:
      'bg-[var(--color-primary)] text-[var(--color-text-inverse)] hover:bg-[var(--color-hover-primary)]',
    btnSecondary:
      'bg-[var(--color-background)] text-[var(--color-primary)] hover:bg-[var(--color-border-light)]/40',
    iconColor: 'text-[var(--color-primary)]',
  },
  accent: {
    label: 'text-[var(--color-accent)]',
    badgeBg: 'bg-[var(--color-cardbg)]',
    badgeBorder: 'border-[var(--color-accent)]/30 hover:border-[var(--color-accent)]/60',
    badgeText: 'text-[var(--color-accent)]',
    btnPrimary:
      'bg-[var(--color-accent)] text-[var(--color-text-inverse)] hover:bg-[var(--color-hover-tertiary)]',
    btnSecondary:
      'bg-[var(--color-background)] text-[var(--color-accent)] hover:bg-[var(--color-border-light)]/40',
    iconColor: 'text-[var(--color-accent)]',
  },
  outline: {
    label: 'text-[var(--color-text-primary)]',
    badgeBg: 'bg-[var(--color-cardbg)]',
    badgeBorder: 'border-[var(--color-border)] hover:border-[var(--color-primary)]',
    badgeText: 'text-[var(--color-text-primary)]',
    btnPrimary:
      'bg-[var(--color-secondary)] text-[var(--color-text-inverse)] hover:bg-[var(--color-hover-secondary)]',
    btnSecondary:
      'bg-[var(--color-background)] text-[var(--color-text-primary)] hover:bg-[var(--color-border-light)]/40',
    iconColor: 'text-[var(--color-text-secondary)]',
  },
  ghost: {
    label: 'text-[var(--color-text-primary)]',
    badgeBg: 'bg-[var(--color-background)]',
    badgeBorder: 'border-transparent',
    badgeText: 'text-[var(--color-text-primary)]',
    btnPrimary:
      'bg-[var(--color-primary)] text-[var(--color-text-inverse)] hover:bg-[var(--color-hover-primary)]',
    btnSecondary:
      'bg-[var(--color-cardbg)] text-[var(--color-text-primary)] hover:bg-[var(--color-border-light)]/40',
    iconColor: 'text-[var(--color-text-secondary)]',
  },
}

export function Timer({
  hours,
  minutes,
  seconds: propSeconds,
  initialSeconds,
  mode = 'countdown',
  variant = 'secondary',
  size = 'md',
  label = 'Exam Timer',
  showLabel = true,
  showHours = true,
  showIcon = false,
  icon,
  showControls = false,
  playIcon,
  pauseIcon,
  resetIcon,
  autoStart = false,
  warningThresholdSeconds = 300,
  dangerThresholdSeconds = 60,
  onComplete,
  onTick,
  onPause,
  onResume,
  onReset,
  className = '',
  badgeClassName = '',
  labelClassName = '',
}: TimerProps) {
  const computedInitialSeconds = useMemo(() => {
    if (hours !== undefined || minutes !== undefined || propSeconds !== undefined) {
      return (hours || 0) * 3600 + (minutes || 0) * 60 + (propSeconds || 0)
    }
    if (initialSeconds !== undefined) {
      return initialSeconds
    }
    return 41400
  }, [hours, minutes, propSeconds, initialSeconds])

  const [seconds, setSeconds] = useState(mode === 'countdown' ? computedInitialSeconds : 0)
  const [isRunning, setIsRunning] = useState(autoStart)
  const intervalRef = useRef<number | null>(null)
  const onCompleteRef = useRef(onComplete)
  const onTickRef = useRef(onTick)


  useEffect(() => {
    onCompleteRef.current = onComplete
  }, [onComplete])

  useEffect(() => {
    onTickRef.current = onTick
  }, [onTick])

  const handleTick = useCallback(() => {
    if (mode === 'countdown') {
      setSeconds((prev) => {
        if (prev <= 1) {
          if (intervalRef.current) clearInterval(intervalRef.current)
          setIsRunning(false)
          onCompleteRef.current?.()
          return 0
        }
        const next = prev - 1
        onTickRef.current?.(next)
        return next
      })
    } else {
      setSeconds((prev) => {
        const next = prev + 1
        onTickRef.current?.(next)
        return next
      })
    }
  }, [mode])

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = window.setInterval(handleTick, 1000)
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isRunning, handleTick])

  const handleStartResume = () => {
    if (mode === 'countdown' && seconds === 0) {
      setSeconds(computedInitialSeconds)
    }
    setIsRunning(true)
    onResume?.(seconds)
  }

  const handlePause = () => {
    setIsRunning(false)
    onPause?.(seconds)
  }

  const handleReset = () => {
    setIsRunning(false)
    setSeconds(mode === 'countdown' ? computedInitialSeconds : 0)
    onReset?.()
  }

  const timeParts = useMemo(() => {
    const hrs = Math.floor(seconds / 3600)
    const mins = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60

    return {
      hours: String(hrs).padStart(2, '0'),
      minutes: String(mins).padStart(2, '0'),
      seconds: String(secs).padStart(2, '0'),
    }
  }, [seconds])

  const currentSize = sizeStyles[size]
  const currentVariant = variantStyles[variant]

  const alertState = useMemo(() => {
    if (mode === 'countdown') {
      if (seconds <= dangerThresholdSeconds && seconds > 0) {
        return {
          border: 'border-[var(--color-error)] ring-2 ring-[var(--color-error)]/20',
          text: 'text-[var(--color-error)]',
          badgeBg: 'bg-[var(--color-error)]/5',
          pulse: 'animate-pulse',
        }
      }
      if (seconds <= warningThresholdSeconds && seconds > 0) {
        return {
          border: 'border-[var(--color-warning)] ring-2 ring-[var(--color-warning)]/20',
          text: 'text-[var(--color-warning)]',
          badgeBg: 'bg-[var(--color-warning)]/5',
          pulse: '',
        }
      }
    }
    return {
      border: currentVariant.badgeBorder,
      text: currentVariant.badgeText,
      badgeBg: currentVariant.badgeBg,
      pulse: '',
    }
  }, [mode, seconds, dangerThresholdSeconds, warningThresholdSeconds, currentVariant])

  return (
    <div className={`inline-flex flex-col items-start ${currentSize.containerGap} font-manrope ${className}`}>
      {showLabel && label && (
        <span
          className={`${currentSize.label} ${currentVariant.label} tracking-tight select-none ${labelClassName}`}
        >
          {label}
        </span>
      )}

      <div className="flex items-center gap-2">
        <div
          className={`inline-flex items-center justify-center shadow-xs transition-all duration-300 ${currentSize.badge} ${alertState.badgeBg} ${alertState.border} ${alertState.pulse} ${badgeClassName}`}
        >
          {showIcon && (
            <span className={`mr-2 flex items-center ${currentVariant.iconColor}`}>
              {icon || <TimerIcon size={currentSize.iconSize} />}
            </span>
          )}

          <div
            className={`flex items-center font-mono ${currentSize.digit} ${alertState.text} select-all`}
          >
            {showHours && (
              <>
                <span>{timeParts.hours}</span>
                <span className={`font-sans font-light opacity-60 ${currentSize.digitSpacing}`}>:</span>
              </>
            )}
            <span>{timeParts.minutes}</span>
            <span className={`font-sans font-light opacity-60 ${currentSize.digitSpacing}`}>:</span>
            <span>{timeParts.seconds}</span>
          </div>
        </div>

        {showControls && (
          <div className={`flex items-center ${currentSize.controlGap}`}>
            {isRunning ? (
              <button
                type="button"
                onClick={handlePause}
                className={`${currentSize.btnSize} ${currentVariant.btnSecondary} transition-all duration-200 cursor-pointer flex items-center justify-center border border-[var(--color-border-light)] hover:scale-105 active:scale-95`}
                title="Pause"
              >
                {pauseIcon || <Pause size={currentSize.iconSize} />}
              </button>
            ) : (
              <button
                type="button"
                onClick={handleStartResume}
                className={`${currentSize.btnSize} ${currentVariant.btnPrimary} transition-all duration-200 cursor-pointer flex items-center justify-center hover:scale-105 active:scale-95 shadow-xs`}
                title="Start"
              >
                {playIcon || <Play size={currentSize.iconSize} />}
              </button>
            )}

            <button
              type="button"
              onClick={handleReset}
              className={`${currentSize.btnSize} ${currentVariant.btnSecondary} transition-all duration-200 cursor-pointer flex items-center justify-center border border-[var(--color-border-light)] hover:scale-105 active:scale-95`}
              title="Reset"
            >
              {resetIcon || <Refresh size={currentSize.iconSize} />}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
