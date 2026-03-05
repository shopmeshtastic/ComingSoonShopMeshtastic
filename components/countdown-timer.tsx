"use client"

import { useEffect, useState } from "react"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function calculateTimeLeft(targetDate: Date): TimeLeft {
  const difference = targetDate.getTime() - new Date().getTime()

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  }
}

const labels: Record<keyof TimeLeft, string> = {
  days: "Дней",
  hours: "Часов",
  minutes: "Минут",
  seconds: "Секунд",
}

export function CountdownTimer({ targetDate }: { targetDate: Date }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft(targetDate))
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate))
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  if (!mounted) {
    return (
      <div className="flex items-center gap-3 md:gap-5">
        {(["days", "hours", "minutes", "seconds"] as const).map((key) => (
          <div key={key} className="flex flex-col items-center">
            <div className="flex items-center justify-center w-16 h-20 md:w-24 md:h-28 rounded-xl bg-card border border-border">
              <span className="text-3xl md:text-5xl font-bold tracking-tight text-foreground font-sans tabular-nums">
                --
              </span>
            </div>
            <span className="mt-2 text-xs md:text-sm text-muted-foreground uppercase tracking-widest">
              {labels[key]}
            </span>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="flex items-center gap-3 md:gap-5">
      {(["days", "hours", "minutes", "seconds"] as const).map((key, index) => (
        <div key={key} className="flex items-center gap-3 md:gap-5">
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-16 h-20 md:w-24 md:h-28 rounded-xl bg-card border border-border transition-all duration-300">
              <span className="text-3xl md:text-5xl font-bold tracking-tight text-foreground font-sans tabular-nums">
                {String(timeLeft[key]).padStart(2, "0")}
              </span>
            </div>
            <span className="mt-2 text-xs md:text-sm text-muted-foreground uppercase tracking-widest">
              {labels[key]}
            </span>
          </div>
          {index < 3 && (
            <span className="text-2xl md:text-4xl font-bold text-muted-foreground mb-6">:</span>
          )}
        </div>
      ))}
    </div>
  )
}
