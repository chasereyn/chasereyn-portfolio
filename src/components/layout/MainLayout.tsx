'use client'

import Image from "next/image"
import { SocialLinks } from "@/components/SocialIcons"
import NoiseBackground from "@/components/NoiseBackground"
import MouseGlow from "@/components/MouseGlow"
import GlowingOrbs from "@/components/GlowingOrbs"
import ScrollLink from "@/components/ScrollLink"
import { useActiveSection } from "@/hooks/useActiveSection"
import { cn } from "@/lib/utils"

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const activeSection = useActiveSection()

  const navItems = [
    { href: '#about', label: 'ABOUT' },
    { href: '#experience', label: 'EXPERIENCE' },
    { href: '#projects', label: 'PROJECTS' },
    { href: '#contact', label: 'CONTACT' }
  ]

  return (
    <div className="min-h-screen bg-zinc-950 relative">
      <NoiseBackground />
      <MouseGlow />
      <div className="max-w-[1440px] mx-auto lg:flex relative z-40">
        {/* Sidebar - fixed on desktop, normal scroll on mobile */}
        <aside className="w-full lg:w-[400px] lg:fixed lg:h-screen p-8 lg:p-12 pt-12">
          <div className="h-full flex flex-col">
            <div className="flex-1">
              <div className="relative w-24 h-24 mb-6">
                <div className="absolute w-32 h-32 -left-4 -top-4 overflow-hidden">
                  <GlowingOrbs />
                </div>
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image
                    src="/images/profile.JPG"
                    alt="Chase Reynolds"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold mb-2 text-zinc-100">Chase Reynolds</h1>
              <h2 className="text-md lg:text-lg text-zinc-300 mb-3">Software Engineer & AI Developer</h2>
              <p className="text-sm text-zinc-400 mb-12 leading-relaxed">
                Building intelligent systems that bridge the gap between AI innovation and practical solutions.
              </p>
              
              <nav className="space-y-4 lg:space-y-6">
                {navItems.map((item) => {
                  const isActive = activeSection === item.href.slice(1)
                  return (
                    <div key={item.href} className="relative">
                      <div 
                        className={cn(
                          "absolute left-0 h-full w-1 bg-purple-400/60 transition-all duration-300 rounded-r",
                          isActive ? "opacity-100" : "opacity-0"
                        )}
                      />
                      <ScrollLink 
                        href={item.href} 
                        className={cn(
                          "block text-zinc-400 hover:text-purple-300 transition-colors text-sm tracking-widest pl-4",
                          isActive && "text-purple-300"
                        )}
                      >
                        {item.label}
                      </ScrollLink>
                    </div>
                  )
                })}
              </nav>
            </div>

            <div className="flex justify-between items-center pt-8 lg:pt-0">
              <SocialLinks />
            </div>
          </div>
        </aside>

        {/* Main Content - adjusts margin based on screen size */}
        <main className="w-full lg:ml-[400px] min-h-screen">
          <div className="max-w-[900px] py-8 lg:py-16 px-8 lg:px-12 text-sm">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}

export default MainLayout 