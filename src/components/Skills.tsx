export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-blue-400">//</span> Technical Expertise
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A comprehensive skill set covering the full spectrum of modern web development and cloud technologies
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Digital Consulting */}
          <div className="card-gradient p-8 rounded-xl shadow-xl group hover:scale-105 transition-all duration-300">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Digital Consulting</h3>
            </div>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> Digital Transformation Strategy</li>
              <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> Technology Architecture Planning</li>
              <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> Process Optimization</li>
              <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> Team Leadership & Mentoring</li>
              <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> Project Management</li>
            </ul>
          </div>

          {/* Web Development */}
          <div className="card-gradient p-8 rounded-xl shadow-xl group hover:scale-105 transition-all duration-300">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Web Development</h3>
            </div>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> React, Next.js, TypeScript</li>
              <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> Node.js, Python, PHP</li>
              <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> RESTful APIs & GraphQL</li>
              <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> Database Design & Optimization</li>
              <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> Progressive Web Apps</li>
            </ul>
          </div>

          {/* DevOps */}
          <div className="card-gradient p-8 rounded-xl shadow-xl group hover:scale-105 transition-all duration-300">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">DevOps Engineering</h3>
            </div>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> AWS, Azure, Google Cloud</li>
              <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> Docker & Kubernetes</li>
              <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> CI/CD Pipeline Development</li>
              <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> Infrastructure as Code</li>
              <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> Monitoring & Security</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
} 