export default function Header({ scrollY }) {
  return (
    <header className="relative min-h-screen pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-circuit-pattern opacity-5"></div>
        <div 
          className="absolute inset-0 bg-gradient-to-b from-red-500/10 via-purple-500/5 to-transparent"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        ></div>
      </div>

      <div className="relative z-10 h-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center min-h-[calc(100vh-5rem)] gap-16">
          <div className="w-full mt-8 space-y-8 text-left md:w-1/2 md:mt-0">
            <div className="inline-flex items-center px-3 py-1 mb-4 text-sm text-red-500 border rounded-full bg-red-500/10 border-red-500/20 animate-fade-in">
              <span className="w-2 h-2 mr-2 bg-red-500 rounded-full animate-pulse"></span>
              Available for Work
            </div>

            <h1 className="text-6xl font-bold leading-tight tracking-tight md:text-7xl animate-fade-in">
              <span className="inline-block text-white transition-transform hover:scale-105">Web</span>{' '}
              <span className="inline-block text-transparent transition-transform bg-gradient-to-r from-red-500 to-purple-500 bg-clip-text hover:scale-105">Developer</span>
            </h1>
            
            <h2 className="relative text-4xl font-semibold tracking-wide text-transparent md:text-5xl font-playfair bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text">
              Emma Carter
              <div className="absolute left-0 w-24 h-1 rounded-full -bottom-2 bg-gradient-to-r from-red-500 to-purple-500"></div>
            </h2>
            
            <p className="max-w-2xl text-xl leading-relaxed text-gray-300">
              Crafting exceptional digital experiences through clean code and innovative solutions
            </p>
            
            <div className="flex flex-wrap gap-6 mt-10">
              <button className="relative px-6 py-3 overflow-hidden font-medium text-red-500 transition-all duration-300 border-2 border-red-500 rounded-lg shadow-lg group hover:bg-red-500 hover:text-white shadow-red-500/10 hover:shadow-red-500/20">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Learn More
                </span>
                <div className="absolute inset-0 transition-transform duration-300 transform -translate-x-full bg-red-500 group-hover:translate-x-0"></div>
              </button>
              <button className="relative px-6 py-3 overflow-hidden font-medium transition-all duration-300 rounded-lg shadow-lg group bg-gradient-to-r from-red-500 to-purple-500 shadow-red-500/20 hover:shadow-red-500/30">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <svg className="w-5 h-5 transition-transform duration-500 transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Play Video
                </span>
              </button>
            </div>

            <div className="flex gap-4 mt-8">
              {[
                {
                  name: 'GitHub',
                  href: '#github',
                  icon: (
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  )
                },
                {
                  name: 'LinkedIn',
                  href: '#linkedin',
                  icon: (
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  )
                },
                {
                  name: 'Twitter',
                  href: '#twitter',
                  icon: (
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  )
                },
                {
                  name: 'Medium',
                  href: '#medium',
                  icon: (
                    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                  )
                },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="relative flex items-center justify-center w-12 h-12 overflow-hidden transition-all duration-300 border group rounded-xl border-red-500/30 bg-gradient-to-br from-gray-900 to-gray-800 hover:from-red-500/20 hover:to-purple-500/20"
                  aria-label={social.name}
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                    <div className="absolute inset-0 transition-transform duration-500 transform bg-red-500/20 blur-xl group-hover:scale-150"></div>
                  </div>
                  
                  {/* Border gradient animation */}
                  <div className="absolute inset-0 overflow-hidden border border-red-500/30 rounded-xl group-hover:border-red-500/50">
                    <div className="absolute inset-0 transition-transform duration-1000 -translate-x-full bg-gradient-to-r from-red-500/30 to-purple-500/30 group-hover:translate-x-full"></div>
                  </div>

                  {/* Icon */}
                  <svg 
                    className="relative z-10 w-5 h-5 text-gray-400 transition-all duration-300 transform group-hover:text-white group-hover:scale-110" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    {social.icon}
                  </svg>

                  {/* Ripple effect */}
                  <div className="absolute inset-0 pointer-events-none">
                    <span className="absolute inset-0 transition-all duration-700 transform scale-0 opacity-0 rounded-xl bg-gradient-to-r from-red-500/10 to-purple-500/10 group-hover:opacity-100 group-hover:scale-150"></span>
                  </div>

                  {/* Corner accents */}
                  <div className="absolute top-0 right-0 w-2 h-2 transition-colors duration-300 border-t border-r border-red-500/30 group-hover:border-red-500"></div>
                  <div className="absolute bottom-0 left-0 w-2 h-2 transition-colors duration-300 border-b border-l border-red-500/30 group-hover:border-red-500"></div>
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center w-full md:w-1/2 md:justify-end">
            <div className="relative mx-auto group perspective-1000 md:mx-0">
              <div className="w-64 h-80 sm:w-72 sm:h-96 md:w-[28rem] md:h-[34rem] rounded-xl overflow-hidden border-2 border-red-500 relative
                          shadow-xl shadow-red-500/20 transform-gpu group-hover:scale-105  transition-all duration-500">
                <img
                  src="/profile.png"
                  alt="Ailkerson Hardin"
                  className="object-cover object-center w-full h-full transition-transform duration-500 transform group-hover:scale-101"
                />
                
                <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:opacity-100"></div>
                
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10"></div>

                <div className="absolute flex flex-wrap gap-2 transition-opacity duration-500 opacity-0 bottom-4 left-4 right-4 group-hover:opacity-100">
                  {['React', 'Next.js', 'Tailwind'].map((tech) => (
                    <span key={tech} className="px-2 py-1 text-xs font-medium text-white border rounded-md bg-black/50 backdrop-blur-sm border-white/10">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="absolute transition-all duration-500 border-2 -inset-4 border-red-500/20 rounded-xl -z-10 blur-sm group-hover:blur-md"></div>
              <div className="absolute transition-all duration-500 border-2 -inset-8 border-red-500/10 rounded-xl -z-20 blur-md group-hover:blur-lg"></div>
              
              <div className="absolute w-8 h-8 border-t-2 border-r-2 -top-2 -right-2 border-red-500/30 rounded-tr-xl"></div>
              <div className="absolute w-8 h-8 border-b-2 border-l-2 -bottom-2 -left-2 border-red-500/30 rounded-bl-xl"></div>

              {/* Experience circle */}
              <div className="absolute flex items-center justify-center w-32 h-32 transition-transform duration-500 border rounded-full -bottom-6 -right-6 bg-gradient-to-br from-red-500/10 to-purple-500/10 backdrop-blur-sm border-red-500/30 group-hover:scale-110">
                <div className="absolute inset-0.5 rounded-full bg-gray-900/90"></div>
                <div className="relative text-center">
                  <span className="block text-2xl font-bold text-transparent bg-gradient-to-r from-red-500 to-purple-500 bg-clip-text">5+</span>
                  <span className="block text-xs font-medium text-gray-300">Years of</span>
                  <span className="block text-xs font-medium text-gray-300">Experience</span>
                </div>
                {/* Animated border */}
                <div className="absolute inset-0 border rounded-full border-red-500/30 animate-spin-slow"></div>
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-500/5 to-purple-500/5 filter blur-md"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float-random"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            <div className="w-1 h-1 rounded-full bg-gradient-to-r from-red-500 to-purple-500 blur-sm"></div>
          </div>
        ))}
      </div>
    </header>
  )
} 