import { useEffect, useState } from 'react'
import { Envelope } from './components/Envelope'
import { Hero } from './components/Hero'
import { Invitation } from './components/Invitation'
import { Petals } from './components/Decorations'
import { Mandala } from './components/Icons'
import { invitationSide } from './wedding'

export default function App() {
  const [opened, setOpened] = useState(false)
  const [visible, setVisible] = useState({})

  useEffect(() => {
    if (invitationSide === 'bride' && window.location.hash !== '#MogAshuNi') {
      const { pathname, search } = window.location
      window.history.replaceState(null, '', `${pathname}${search}#MogAshuNi`)
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible((current) => ({ ...current, [entry.target.id]: true }))
          }
        })
      },
      { threshold: 0.1 },
    )
    const sections = document.querySelectorAll('section')
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [opened])

  return (
    <div className="app-container">
      <Petals />
      <Envelope isOpened={opened} onOpen={() => setOpened(true)} />
      <Hero />
      <Invitation visible={Boolean(visible.invitation)} />
      <footer className="footer-ornament">
        <Mandala className="footer-mandala" />
      </footer>
    </div>
  )
}
