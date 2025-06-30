'use client'

import { useEffect, useState } from 'react'

export default function MouseGlow() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', updateMousePosition)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
    }
  }, [])

  return (
    <div
      className="pointer-events-none fixed inset-0 z-20 transition-opacity duration-300"
      style={{
        background: `radial-gradient(1200px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(244, 244, 245, 0.07), transparent 40%)`,
      }}
    />
  )
} 