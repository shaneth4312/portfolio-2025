export default function Services() {
  return (
    <section id="services" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-blue-400">//</span> Services
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="card-gradient p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 group">
            <div className="mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Technology Consulting</h3>
            </div>
            <p className="text-slate-400 mb-4">Strategic guidance on technology decisions, architecture planning, and digital transformation initiatives.</p>
            <div className="text-sm text-blue-400 group-hover:text-blue-300 transition-colors">Learn More →</div>
          </div>
          
          <div className="card-gradient p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 group">
            <div className="mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Digital Solutions Development</h3>
            </div>
            <p className="text-slate-400 mb-4">Custom web applications, intranets, and CMS systems tailored specifically to your business requirements and workflows.</p>
            <div className="text-sm text-blue-400 group-hover:text-blue-300 transition-colors">Learn More →</div>
          </div>
          
          <div className="card-gradient p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 group">
            <div className="mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Website DevOps & Security</h3>
            </div>
            <p className="text-slate-400 mb-4">Comprehensive website security, cloud hosting, and infrastructure automation for optimal performance.</p>
            <div className="text-sm text-blue-400 group-hover:text-blue-300 transition-colors">Learn More →</div>
          </div>
          
          <div className="card-gradient p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 group">
            <div className="mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">CMS Migration & Implementation</h3>
            </div>
            <p className="text-slate-400 mb-4">Expert migration between CMS platforms and implementation of WordPress, Payload CMS, and other content management solutions.</p>
            <div className="text-sm text-blue-400 group-hover:text-blue-300 transition-colors">Learn More →</div>
          </div>
          
          <div className="card-gradient p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 group">
            <div className="mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Legacy System Modernization</h3>
            </div>
            <p className="text-slate-400 mb-4">Transform outdated websites and systems into modern, scalable solutions using contemporary frameworks and best practices.</p>
            <div className="text-sm text-blue-400 group-hover:text-blue-300 transition-colors">Learn More →</div>
          </div>
          
          <div className="card-gradient p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 group">
            <div className="mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-600 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Website Maintenance & Support</h3>
            </div>
            <p className="text-slate-400 mb-4">Ongoing maintenance, updates, security monitoring, and technical support to keep your digital assets running smoothly.</p>
            <div className="text-sm text-blue-400 group-hover:text-blue-300 transition-colors">Learn More →</div>
          </div>
          
          <div className="card-gradient p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 group">
            <div className="mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-600 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Digital Strategy Planning</h3>
            </div>
            <p className="text-slate-400 mb-4">Comprehensive digital roadmaps and strategic planning to align technology initiatives with business objectives and growth goals.</p>
            <div className="text-sm text-blue-400 group-hover:text-blue-300 transition-colors">Learn More →</div>
          </div>
          
          <div className="card-gradient p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 group">
            <div className="mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-600 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 8l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Technical Due Diligence</h3>
            </div>
            <p className="text-slate-400 mb-4">Professional evaluation of technology stacks, code quality, and technical assets for acquisitions, investments, and partnerships.</p>
            <div className="text-sm text-blue-400 group-hover:text-blue-300 transition-colors">Learn More →</div>
          </div>
        </div>
      </div>
    </section>
  )
} 