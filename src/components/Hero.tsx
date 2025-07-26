'use client'

import { useEffect, useState } from 'react'

export default function Hero() {
  const [typedText, setTypedText] = useState('')
  const fullText = 'console.log("Hello, World!");'

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  return (
    <section id="home" className="section-padding pt-32 relative">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700 font-mono text-sm">
              <div className="text-green-400 mb-2">~/shane-farmer $</div>
              <div className="text-blue-400 typing-animation">
                {typedText}
                <span className="terminal-cursor">|</span>
              </div>
            </div>
            
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold">
                Hi, I'm <span className="gradient-text">Shane Farmer</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-slate-300 font-light">
                Senior <span className="text-blue-400">Digital Consultant</span>,<br />
                <span className="text-purple-400">Web Developer</span> & <span className="text-green-400">DevOps Engineer</span>
              </h2>
              <p className="text-xl text-slate-400 leading-relaxed">
                Transforming businesses through innovative digital solutions with over 10 years of expertise in web development, cloud infrastructure, and strategic technology consulting.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-primary">
                  <span className="mr-2">{'>'}</span> Let's Connect
                </button>
                <button className="btn-secondary">
                  <span className="mr-2">$</span> View Projects
                </button>
              </div>
            </div>
          </div>

          {/* Profile Picture */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-xl opacity-30 floating-animation"></div>
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-slate-700 shadow-2xl floating-animation">
                                 <img 
                   src="/profile_picture.jpg" 
                   alt="Shane Farmer - Senior Digital Consultant" 
                   className="w-full h-full object-cover"
                 />
              </div>
              {/* Decorative Code Elements */}
              <div className="absolute -top-4 -left-4 bg-slate-800 text-green-400 px-3 py-1 rounded font-mono text-sm border border-green-500/50">
                &lt;dev&gt;
              </div>
              <div className="absolute -bottom-4 -right-4 bg-slate-800 text-blue-400 px-3 py-1 rounded font-mono text-sm border border-blue-500/50">
                &lt;/senior&gt;
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 