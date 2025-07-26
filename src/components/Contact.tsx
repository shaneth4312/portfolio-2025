export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-slate-800/50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-blue-400">//</span> Contact
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Ready to transform your business with cutting-edge technology? Let's discuss your next project.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="card-gradient p-8 rounded-xl shadow-2xl">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="text-center group">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-slate-400 font-mono">shane.farmer@example.com</p>
              </div>
              
              <div className="text-center group">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Location</h3>
                <p className="text-slate-400">Available Worldwide</p>
              </div>
            </div>
            
            <div className="text-center">
              <button className="btn-primary w-full group">
                <span className="mr-2 group-hover:animate-bounce">{'>'}</span> 
                Start a Conversation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 