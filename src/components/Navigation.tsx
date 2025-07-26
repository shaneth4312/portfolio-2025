export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm border-b border-slate-700/50 z-50">
      <div className="container-custom section-padding py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold gradient-text">
            &lt;Shane /&gt;
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-slate-300 hover:text-blue-400 transition-colors duration-300 hover:underline">$ home</a>
            <a href="#about" className="text-slate-300 hover:text-blue-400 transition-colors duration-300 hover:underline">$ about</a>
            <a href="#skills" className="text-slate-300 hover:text-blue-400 transition-colors duration-300 hover:underline">$ skills</a>
            {/* <a href="#projects" className="text-slate-300 hover:text-blue-400 transition-colors duration-300 hover:underline">$ projects</a> */}
            <a href="#services" className="text-slate-300 hover:text-blue-400 transition-colors duration-300 hover:underline">$ services</a>
            <a href="#contact" className="text-slate-300 hover:text-blue-400 transition-colors duration-300 hover:underline">$ contact</a>
          </div>
        </div>
      </div>
    </nav>
  )
} 