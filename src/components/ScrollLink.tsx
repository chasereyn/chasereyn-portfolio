'use client'

import { ReactNode } from 'react'

interface ScrollLinkProps {
  href: string
  children: ReactNode
  className?: string
}

const ScrollLink = ({ href, children, className = '' }: ScrollLinkProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
      
      // Update URL without a page reload
      window.history.pushState({}, '', href)
    }
  }

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  )
}

export default ScrollLink 