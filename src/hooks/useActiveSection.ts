'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState('about')
  // The layout stays mounted across routes, so re-observe when the page changes.
  const pathname = usePathname()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-20% 0px -80% 0px', // More sensitive at top, less at bottom
        threshold: 0
      }
    )

    // Observe all sections
    const sections = document.querySelectorAll('section[id]')
    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [pathname])

  return activeSection
} 