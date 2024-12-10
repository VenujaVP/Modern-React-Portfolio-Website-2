export default function About() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-circuit-pattern opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/95 to-gray-900"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Content Section */}
          <div className="w-full lg:w-1/2 space-y-8">
            {/* Section Title */}
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                Why hire me for your
                <span className="block mt-2 bg-gradient-to-r from-red-500 to-purple-500 bg-clip-text text-transparent">
                  next project?
                </span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-purple-500 rounded-full"></div>
            </div>

            {/* Key Points */}
            <div className="space-y-6">
              {[
                {
                  title: "Expert in Modern Technologies",
                  description: "Proficient in React, Next.js, and cutting-edge web technologies for optimal performance."
                },
                {
                  title: "Creative Problem Solver",
                  description: "Turning complex challenges into elegant solutions with clean, maintainable code."
                },
                {
                  title: "User-Centric Approach",
                  description: "Creating intuitive interfaces that prioritize user experience and engagement."
                }
              ].map((point, index) => (
                <div key={index} className="flex gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-red-500/10 to-purple-500/10 border border-red-500/20 flex items-center justify-center">
                    <div className="w-6 h-6 text-red-500 group-hover:scale-110 transition-transform duration-300">
                      {/* Icon paths for each point */}
                      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                          d={index === 0 
                            ? "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            : index === 1
                            ? "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                            : "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          }
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{point.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button className="group relative px-8 py-4 bg-gradient-to-r from-red-500 to-purple-500 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-red-500/20">
              <span className="relative z-10 flex items-center justify-center gap-2">
                Learn More About Me
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
} 