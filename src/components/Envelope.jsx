import { wedding } from '../wedding'
import { Ganesh, Mandala } from './Icons'

export function Envelope({ isOpened, onOpen }) {
  return (
    <div className={`envelope-wrapper${isOpened ? ' opened' : ''}`} aria-hidden={isOpened}>
      <button
        type="button"
        className={`envelope${isOpened ? ' opened' : ''}`}
        onClick={onOpen}
        aria-label="Open invitation"
      >
        <span className="envelope-ribbon" />
        <span className="envelope-flap">
          <span className="flap-inner">
            <Mandala className="inner-mandala" />
          </span>
        </span>
        <span className="invitation-card-preview">
          <span className="preview-bottom">
            <p className="preview-heading">{wedding.envelope.heading}</p>
            <p className="preview-names">{wedding.envelope.names}</p>
          </span>
        </span>
        <span className="to-label">{wedding.envelope.to}</span>
        <span className="wax-seal">
          <Ganesh style={{ width: 45, height: 45 }} />
        </span>
        <span className="smudge-layer">
          <span className="smudge-circle s1" />
          <span className="smudge-circle s2" />
          <span className="smudge-circle s3" />
        </span>
        <span className="envelope-instruction">{wedding.envelope.instruction}</span>
      </button>
    </div>
  )
}
