export function Ganesh({ className, style }) {
  return (
    <svg className={className} style={style} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M42 18 C 42 10, 58 10, 58 18" />
        <path d="M38 24 C 38 18, 62 18, 62 24" />
        <path d="M35 35 C 15 35, 12 55, 25 68" />
        <path d="M65 35 C 85 35, 88 55, 75 68" />
        <path d="M35 35 C 35 20, 65 20, 65 35 C 65 48, 55 55, 50 55" />
        <path d="M50 55 C 50 75, 75 80, 75 65 C 75 52, 60 52, 53 65 C 48 78, 55 88, 65 92" />
        <circle cx="43" cy="40" r="1.2" fill="currentColor" stroke="none" />
        <circle cx="57" cy="40" r="1.2" fill="currentColor" stroke="none" />
        <path d="M48 28 L 52 28" strokeWidth="0.8" />
        <path d="M48 31 L 52 31" strokeWidth="0.8" />
        <circle cx="50" cy="24" r="1.5" fill="currentColor" stroke="none" />
        <path d="M42 52 L 38 58" strokeWidth="1.5" opacity="0.7" />
      </g>
    </svg>
  )
}

export function Leaf({ className, style }) {
  return (
    <svg className={className} style={style} viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M50 10 C 65 30 85 60 75 90 C 65 110 50 115 50 115 C 50 115 35 110 25 90 C 15 60 35 30 50 10Z" fill="#2E7D32" />
      <path d="M50 10 Q 52 60 50 115" stroke="#FFD700" strokeWidth="0.8" opacity="0.4" />
    </svg>
  )
}

export function Mandala({ className }) {
  return (
    <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
      <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      {Array.from({ length: 12 }, (_, index) => (
        <g key={index} transform={`rotate(${index * 30} 100 100)`}>
          <path d="M100 40 Q 110 20 100 10 Q 90 20 100 40" stroke="currentColor" strokeWidth="1" />
          <circle cx="100" cy="30" r="2" fill="currentColor" opacity="0.6" />
        </g>
      ))}
    </svg>
  )
}

export function Corner({ className }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M10 10 L 90 10 M 10 10 L 10 90" stroke="currentColor" strokeWidth="2" />
      <path d="M20 20 L 70 20 M 20 20 L 20 70" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <path d="M10 10 Q 40 10 40 40 Q 10 40 10 10" fill="currentColor" opacity="0.1" />
      <circle cx="10" cy="10" r="4" fill="currentColor" />
      <circle cx="90" cy="10" r="2" fill="currentColor" />
      <circle cx="10" cy="90" r="2" fill="currentColor" />
    </svg>
  )
}

export function MapPin() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: 10 }} aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}
