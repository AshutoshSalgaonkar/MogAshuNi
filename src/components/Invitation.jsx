import { wedding } from '../wedding'
import { Corner, MapPin } from './Icons'

function Family({ person }) {
  return (
    <article className="family">
      <p className="family-role">
        <span lang="mr">{person.roleMr}</span>
        <span className="family-role-en">{person.roleEn}</span>
      </p>
      <h2 className="family-name-mr" lang="mr">{person.nameMr}</h2>
      <p className="family-name-en">{person.nameEn}</p>
      <p className="family-relation" lang="mr">{person.relationMr}</p>
      <p className="family-relation-en">{person.relationEn}</p>
      <p className="family-address" lang="mr">{person.addressMr}</p>
      <p className="family-address-en">{person.addressEn}</p>
    </article>
  )
}

export function Invitation({ visible }) {
  return (
    <section id="invitation" className={visible ? 'is-visible' : ''}>
      <div className="heritage-card">
        <Corner className="card-corner corner-tl" />
        <Corner className="card-corner corner-tr" />
        <Corner className="card-corner corner-bl" />
        <Corner className="card-corner corner-br" />
        <div className="family-grid">
          <Family person={wedding.groom} />
          <div className="family-split" aria-hidden="true">
            <span className="line" />
            <span className="dot" />
            <span className="line" />
          </div>
          <Family person={wedding.bride} />
        </div>
        <div className="divider-ornament" aria-hidden="true">
          <div className="line" />
          <div className="dot" />
          <div className="line" />
        </div>
        <div className="ceremony">
          <p className="time-box">
            {wedding.ceremony.time} <span className="ampm">{wedding.ceremony.ampm}</span>
          </p>
          <h2 className="event-name">
            <span lang="mr">{wedding.ceremony.nameMr}</span>
            <span className="event-name-en">{wedding.ceremony.nameEn}</span>
          </h2>
          <p className="event-desc" lang="mr">{wedding.ceremony.descMr}</p>
          <p className="event-desc-en">{wedding.ceremony.descEn}</p>
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
