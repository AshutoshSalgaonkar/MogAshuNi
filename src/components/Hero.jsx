import { wedding } from '../wedding'
import { Akshata } from './Decorations'
import { Ganesh, Leaf, Mandala } from './Icons'
import { Countdown } from './Countdown'

export function Hero() {
  return (
    <header className="hero">
      <div className="botanical-accents" aria-hidden="true">
        <Leaf style={{ width: 40, transform: 'rotate(-25deg)', opacity: 0.8 }} />
        <Leaf style={{ width: 40, transform: 'rotate(25deg)', opacity: 0.8 }} />
      </div>
      <Akshata />
      <Mandala className="hero-mandala" />
      <div className="hero-content">
        <Ganesh className="ganesh-icon reveal" style={{ animationDelay: '0.2s' }} />
        <div className="blessings reveal" style={{ animationDelay: '0.4s' }}>
          {wedding.blessings.map((blessing) => (
            <p key={blessing.mr} className="blessing">
              <span className="blessing-mr" lang="mr">{blessing.mr}</span>
              <span className="blessing-en">{blessing.en}</span>
            </p>
          ))}
        </div>
        <p className="wedding-of reveal" style={{ animationDelay: '0.6s' }} lang="mr">
          {wedding.hero.blessing}
        </p>
        <h1 className="reveal couple-names" style={{ animationDelay: '0.9s' }}>
          <span lang="mr">{wedding.hero.groom}</span>
          <span className="ampersand">&</span>
          <span lang="mr">{wedding.hero.bride}</span>
        </h1>
        <p className="hero-english reveal" style={{ animationDelay: '1s' }}>{wedding.hero.namesEn}</p>
        <div className="hero-divider reveal" style={{ animationDelay: '1.1s' }} />
        <p className="date reveal" style={{ animationDelay: '1.2s' }}>{wedding.hero.dateLabel}</p>
        <p className="muhurt-time reveal" style={{ animationDelay: '1.35s' }}>{wedding.hero.timeLabel}</p>
        <Countdown />
      </div>
    </header>
  )
}
