import { useEffect, useState } from 'react'
import { wedding } from '../wedding'

function remaining(target) {
  const diff = new Date(target).getTime() - Date.now()
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

function pad(value) {
  return String(value).padStart(2, '0')
}

export function Countdown() {
  const [time, setTime] = useState(() => remaining(wedding.hero.countdownIso))

  useEffect(() => {
    const id = setInterval(() => {
      setTime(remaining(wedding.hero.countdownIso))
    }, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="countdown-container reveal" style={{ animationDelay: '1.8s' }} role="timer" aria-label="Countdown to the wedding">
      <div className="countdown-item">
        <span className="countdown-value">{time.days}</span>
        <span className="countdown-label">Days</span>
      </div>
      <div className="countdown-divider" aria-hidden="true">:</div>
      <div className="countdown-item">
        <span className="countdown-value">{pad(time.hours)}</span>
        <span className="countdown-label">Hours</span>
      </div>
      <div className="countdown-divider" aria-hidden="true">:</div>
      <div className="countdown-item">
        <span className="countdown-value">{pad(time.minutes)}</span>
        <span className="countdown-label">Minutes</span>
      </div>
      <div className="countdown-divider" aria-hidden="true">:</div>
      <div className="countdown-item">
        <span className="countdown-value">{pad(time.seconds)}</span>
        <span className="countdown-label">Seconds</span>
      </div>
    </div>
  )
}
