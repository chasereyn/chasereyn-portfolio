'use client'

import { useEffect } from 'react'

const GlowingOrbs = () => {
  useEffect(() => {
    const root = document.documentElement
    const updateMousePosition = (ev: MouseEvent) => {
      const { clientX, clientY } = ev
      const x = Math.round((clientX / window.innerWidth) * 100)
      const y = Math.round((clientY / window.innerHeight) * 100)
      root.style.setProperty('--mouse-x', `${x}%`)
      root.style.setProperty('--mouse-y', `${y}%`)
    }
    window.addEventListener('mousemove', updateMousePosition)
    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
    }
  }, [])

  return (
    <div className="orbs-container absolute top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
      <div className="orb"></div>
      <div className="orb"></div>
      <div className="orb"></div>
      <div className="orb"></div>
      <div className="orb"></div>
    </div>
  )
}

export default GlowingOrbs 