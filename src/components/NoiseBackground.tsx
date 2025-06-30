'use client'

import { useEffect, useState } from 'react'

function generateNoise(opacity: number): string {
  const baseFrequency = '2'
  return `
    <svg viewBox="0 0 200 200" xmlns='http://www.w3.org/2000/svg'>
      <filter id='noiseFilter'>
        <feTurbulence 
          type='fractalNoise' 
          baseFrequency='${baseFrequency}' 
          numOctaves='32' 
          stitchTiles='stitch'/>
      </filter>
      <rect width='100%' height='100%' filter='url(#noiseFilter)' opacity='${opacity}'/>
    </svg>
  `
}

export default function NoiseBackground() {
  const [dataUrl, setDataUrl] = useState<string>('')

  useEffect(() => {
    const svg = generateNoise(0.25)
    const dataUrl = `data:image/svg+xml;base64,${btoa(svg)}`
    setDataUrl(dataUrl)
  }, [])

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 opacity-25"
      style={{
        backgroundImage: dataUrl ? `url(${dataUrl})` : 'none',
        backgroundColor: 'transparent',
        mask: 'linear-gradient(to bottom, white, white)',
      }}
    />
  )
} 