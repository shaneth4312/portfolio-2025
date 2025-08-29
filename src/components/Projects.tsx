export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-slate-800/50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-blue-400">//</span> My Projects
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A showcase of agency work and personal projects that demonstrate my technical expertise and creativity
          </p>
        </div>

        {/* Agency Projects */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">
            <span className="text-blue-400">//</span> Agency Projects
          </h3>
                     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
             <div className="project-card">
               <div className="flex items-center justify-between mb-4">
                 <h4 className="text-xl font-bold">ORE Catapult</h4>
                 <span className="text-green-400 text-sm">LIVE</span>
               </div>
                               <p className="text-slate-400 mb-4">UK's leading technology innovation and research centre for offshore renewable energy.</p>
                <ul className="text-slate-400 mb-4 italic text-sm">
                  <li>• Led digital strategy and transformation initiatives</li>
                  <li>• Part of core development team</li>
                  <li>• Ongoing maintenance and technical support</li>
                </ul>
                               <div className="flex flex-wrap gap-2 mb-4">
                  <span className="tech-tag">Next.js</span>
                  <span className="tech-tag">TypeScript</span>
                  <span className="tech-tag">WordPress</span>
                  <span className="tech-tag">DevOps</span>
                  <span className="tech-tag">Security</span>
                </div>
               <div className="flex justify-between items-center">
                 <a href="https://ore.catapult.org.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">View Project →</a>
                 <div className="flex space-x-2">
                   <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                   <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                   <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                 </div>
               </div>
             </div>

             <div className="project-card">
               <div className="flex items-center justify-between mb-4">
                 <h4 className="text-xl font-bold">Liverpool City Region</h4>
                 <span className="text-green-400 text-sm">LIVE</span>
               </div>
                               <p className="text-slate-400 mb-4">Combined Authority website serving the Liverpool City Region.</p>
                <ul className="text-slate-400 mb-4 italic text-sm">
                  <li>• Part of core development team</li>
                  <li>• Led digital strategy implementation</li>
                  <li>• Lead security & DevOps engineer</li>
                  <li>• Ongoing maintenance and support</li>
                </ul>
                               <div className="flex flex-wrap gap-2 mb-4">
                  <span className="tech-tag">Next.js</span>
                  <span className="tech-tag">TypeScript</span>
                  <span className="tech-tag">WordPress</span>
                  <span className="tech-tag">DevOps</span>
                  <span className="tech-tag">Security</span>
                </div>
               <div className="flex justify-between items-center">
                 <a href="https://liverpoolcityregion-ca.gov.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">View Project →</a>
                 <div className="flex space-x-2">
                   <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                   <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                   <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
                 </div>
               </div>
             </div>

             <div className="project-card">
               <div className="flex items-center justify-between mb-4">
                 <h4 className="text-xl font-bold">Surevine</h4>
                 <span className="text-green-400 text-sm">LIVE</span>
               </div>
                               <p className="text-slate-400 mb-4">Secure collaboration solutions company specializing in government and enterprise clients.</p>
                <ul className="text-slate-400 mb-4 italic text-sm">
                  <li>• Led Payload 3.0 CMS setup and architecture</li>
                  <li>• Implemented security and DevOps infrastructure</li>
                  <li>• Part of core development team</li>
                </ul>
                               <div className="flex flex-wrap gap-2 mb-4">
                  <span className="tech-tag">Payload 3.0</span>
                  <span className="tech-tag">Next.js</span>
                  <span className="tech-tag">TypeScript</span>
                  <span className="tech-tag">DevOps</span>
                  <span className="tech-tag">Security</span>
                </div>
               <div className="flex justify-between items-center">
                 <a href="https://surevine.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">View Project →</a>
                 <div className="flex space-x-2">
                   <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                   <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                   <span className="w-3 h-3 bg-pink-500 rounded-full"></span>
                 </div>
               </div>
             </div>
          </div>
        </div>

        {/* Personal Projects */}
        <div>
          <h3 className="text-3xl font-bold mb-8 text-center">
            <span className="text-blue-400">//</span> Personal Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="project-card">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-xl font-bold">San Marino Restaurant</h4>
                <span className="text-green-400 text-sm">LIVE</span>
              </div>
              <p className="text-slate-400 mb-4">Personal project: Complete website redesign concept for a family-run Italian restaurant. Created as a design exercise and was never intended to replace the restaurant's existing website.</p>
              <ul className="text-slate-400 mb-4 italic text-sm">
                <li>• Modern responsive design with Italian aesthetic</li>
                <li>• Online ordering and reservation system</li>
                <li>• Location-specific information and menus</li>
                <li>• Mobile-first approach with WhatsApp integration</li>
              </ul>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="tech-tag">React</span>
                <span className="tech-tag">Next.js</span>
                <span className="tech-tag">TailwindCSS</span>
                <span className="tech-tag">Responsive Design</span>
                <span className="tech-tag">UX/UI</span>
              </div>
              <div className="flex justify-between items-center">
                <a href="https://sanmarinorestaurant.shanefarmer.co.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">View Project →</a>
                <div className="flex space-x-2">
                  <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                  <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                  <span className="w-3 h-3 bg-white rounded-full"></span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-xl font-bold">Innovation Portal Concept</h4>
                <span className="text-green-400 text-sm">LIVE</span>
              </div>
              <p className="text-slate-400 mb-4">Co-creation innovation portal designed to facilitate collaborative innovation processes and community engagement.</p>
              <ul className="text-slate-400 mb-4 italic text-sm">
                <li>• Collaborative innovation workspace</li>
                <li>• Community-driven project development</li>
                <li>• Advanced middleware and context management</li>
                <li>• Modern React architecture with custom hooks</li>
              </ul>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="tech-tag">Next.js</span>
                <span className="tech-tag">TypeScript</span>
                <span className="tech-tag">React</span>
                <span className="tech-tag">TailwindCSS</span>
                <span className="tech-tag">Custom Hooks</span>
              </div>
              <div className="flex justify-between items-center">
                <a href="https://github.com/shaneth4312/Innovation-Portal-Concept" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">View Project →</a>
                <div className="flex space-x-2">
                  <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
                  <span className="w-3 h-3 bg-cyan-500 rounded-full"></span>
                  <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-xl font-bold">Payload E-commerce Framework</h4>
                <span className="text-green-400 text-sm">LIVE</span>
              </div>
              <p className="text-slate-400 mb-4">Production-ready e-commerce framework built with Payload CMS featuring draft previews, SEO optimization, user authentication, and comprehensive admin panel.</p>
              <ul className="text-slate-400 mb-4 italic text-sm">
                <li>• Complete e-commerce solution with Payload CMS</li>
                <li>• Draft previews and live content editing</li>
                <li>• SEO optimization and search functionality</li>
                <li>• User authentication and role management</li>
              </ul>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="tech-tag">Payload CMS</span>
                <span className="tech-tag">Next.js</span>
                <span className="tech-tag">TypeScript</span>
                <span className="tech-tag">PostgreSQL</span>
                <span className="tech-tag">TailwindCSS</span>
              </div>
              <div className="flex justify-between items-center">
                <a href="https://github.com/shaneth4312/Payload-E-commerce-Framework" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">View Project →</a>
                <div className="flex space-x-2">
                  <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                  <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                  <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 