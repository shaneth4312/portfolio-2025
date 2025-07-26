'use client'

import {
  Navigation,
  MatrixRain,
  Hero,
  About,
  Skills,
  Projects,
  Services,
  Contact,
  Footer
} from '@/components'

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 relative overflow-hidden">
      {/* Matrix Background */}
      <MatrixRain />

      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Skills Section */}
      <Skills />

      {/* Projects Section */}
      <Projects />

      {/* Services Section */}
      <Services />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  )
} 