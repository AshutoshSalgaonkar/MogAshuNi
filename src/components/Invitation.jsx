import { side, wedding } from '../wedding'
import { Corner, MapPin } from './Icons'

export function Invitation({ visible }) {
  const { haldi } = side

  return (
    <section id="invitation" className={visible ? 'is-visible' : ''}>
      <div className="heritage-card">
        <Corner className="card-corner corner-tl" />
        <Corner className="card-corner corner-tr" />
        <Corner className="card-corner corner-bl" />
        <Corner className="card-corner corner-br" />
        <div className="haldi-info">
          <p className="venue-label">{haldi.label}</p>
          <h2 className="haldi-date">{haldi.dateLabel}</h2>
          <p className="haldi-time">{haldi.timeLabel}</p>
          <p className="haldi-address">{haldi.address}</p>
          <a className="home-directions" href={haldi.mapsUrl} target="_blank" rel="noopener noreferrer">
            <MapPin />
            Directions To Our Home
          </a>
        </div>
        <div className="venue-info">
          <p className="venue-label">{wedding.venue.label}</p>
          <h2 className="venue-name">{wedding.venue.name}</h2>
          <p className="venue-address">{wedding.venue.address}</p>
          <a className="map-button" href={wedding.venue.mapsUrl} target="_blank" rel="noopener noreferrer">
            <MapPin />
            Get Directions
          </a>
        </div>
      </div>
    </section>
  )
}
