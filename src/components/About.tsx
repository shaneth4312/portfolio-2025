export default function About() {
  return (
    <section id="about" className="section-padding bg-slate-800/50 relative">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-blue-400">//</span> About Me
            </h2>
            <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
              <p>
                With over a decade of experience in the technology industry, I specialize in helping businesses 
                navigate their digital transformation journey. As a Senior Digital Consultant, I combine deep 
                technical expertise with strategic thinking to deliver solutions that drive real business value.
              </p>
              <p>
                My expertise spans full-stack web development, cloud architecture, DevOps practices, and 
                digital strategy. I've successfully led teams, architected scalable systems, and consulted 
                for organizations ranging from startups to enterprise-level companies.
              </p>
              <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-700 font-mono">
                <div className="text-green-400 mb-2">const shane = &#123;</div>
                <div className="ml-4 space-y-1">
                  <div><span className="text-blue-400">experience:</span> <span className="text-yellow-400">"10+ years"</span>,</div>
                  <div><span className="text-blue-400">passion:</span> <span className="text-yellow-400">"Problem solving"</span>,</div>
                  <div><span className="text-blue-400">specialty:</span> <span className="text-yellow-400">"Full-stack & DevOps"</span>,</div>
                  <div><span className="text-blue-400">mission:</span> <span className="text-yellow-400">"Digital transformation"</span></div>
                </div>
                <div className="text-green-400">&#125;</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">10+</div>
                <div className="text-slate-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">100+</div>
                <div className="text-slate-400">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">50+</div>
                <div className="text-slate-400">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">24/7</div>
                <div className="text-slate-400">Availability</div>
              </div>
            </div>
            
            <div className="mt-8 card-gradient p-6 rounded-xl">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-slate-300">Open to enquiries</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 