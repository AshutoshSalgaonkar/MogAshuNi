const grainColors = ['#FFD700', '#FF8C00', '#FFFDD0', '#F0E68C']

function random(seed) {
  let value = seed
  return () => {
    value = (value * 1664525 + 1013904223) % 4294967296
    return value / 4294967296
  }
}

const grainRandom = random(20261203)
export const grains = Array.from({ length: 100 }, (_, index) => ({
  i: index,
  startX: grainRandom() * 100,
  midX: (grainRandom() - 0.5) * 400,
  midY: (grainRandom() - 0.5) * 300,
  throwX: (grainRandom() - 0.5) * 1000,
  duration: 5 + grainRandom() * 5,
  delay: grainRandom() * 15,
  width: 1.5 + grainRandom() * 2.5,
  height: 3 + grainRandom() * 4,
  color: grainColors[index % grainColors.length],
}))

const petalRandom = random(1203)
export const petals = Array.from({ length: 30 }, (_, index) => ({
  id: index,
  left: petalRandom() * 100,
  delay: petalRandom() * 10,
  duration: 10 + petalRandom() * 15,
  size: 15 + petalRandom() * 20,
  rotation: petalRandom() * 360,
}))

export function Petals() {
  return (
    <div className="petal-container" aria-hidden="true">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="petal"
          style={{
            left: `${petal.left}%`,
            animationDuration: `${petal.duration}s`,
            animationDelay: `${petal.delay}s`,
            width: `${petal.size}px`,
            height: `${petal.size * 0.8}px`,
            transform: `rotate(${petal.rotation}deg)`,
          }}
        />
      ))}
    </div>
  )
}

export function Akshata() {
  return (
    <div className="akshata-container" aria-hidden="true">
      {grains.map((grain) => (
        <div
          key={grain.i}
          className="akshata"
          style={{
            left: `${grain.startX}%`,
            background: grain.color,
            animationDelay: `${grain.delay}s`,
            animationDuration: `${grain.duration}s`,
            width: `${grain.width}px`,
            height: `${grain.height}px`,
            '--mid-x': `${grain.midX}px`,
            '--mid-y': `${grain.midY}px`,
            '--throw-x': `${grain.throwX}px`,
          }}
        />
      ))}
    </div>
  )
}
