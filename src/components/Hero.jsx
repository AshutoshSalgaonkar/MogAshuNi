import { side, wedding } from '../wedding'
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
        <p className="blessing-en reveal" style={{ animationDelay: '0.35s' }}>{wedding.blessing}</p>
        <p className="host-names reveal" style={{ animationDelay: '0.5s' }}>{side.hosts}</p>
        <p className="invite-line reveal" style={{ animationDelay: '0.65s' }}>{side.invite}</p>
        <h1 className="reveal couple-names" style={{ animationDelay: '0.85s' }}>
          <span>{side.first}</span>
          <span className="ampersand">&</span>
          <span>{side.second}</span>
        </h1>
        <p className="other-relation reveal" style={{ animationDelay: '1.05s' }}>{side.otherRelation}</p>
        <p className="other-parents reveal" style={{ animationDelay: '1.15s' }}>{side.otherParents}</p>
        <div className="hero-divider reveal" style={{ animationDelay: '1.3s' }} />
        <p className="date reveal" style={{ animationDelay: '1.4s' }}>{wedding.ceremony.dateLabel}</p>
        <p className="muhurt-time reveal" style={{ animationDelay: '1.5s' }}>{wedding.ceremony.timeLabel}</p>
        <Countdown />
      </div>
    </header>
  )
}
