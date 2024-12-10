import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'

function App() {
  const [scrollY, setScrollY] = useState(0)
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Custom cursor effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      {/* Custom cursor */}
      <div 
        className="fixed w-8 h-8 pointer-events-none z-50 mix-blend-difference"
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
          transform: 'translate(-50%, -50%)'
        }}
      >
        <div className="absolute inset-0 bg-white rounded-full scale-50 animate-pulse"></div>
        <div className="absolute inset-0 border-2 border-white rounded-full animate-ping"></div>
      </div>

      {/* Background effects */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-gray-900 to-black"></div>
      <div className="fixed inset-0 bg-grid-pattern opacity-10"></div>
      <div className="fixed inset-0 backdrop-blur-[1px]"></div>

      {/* Animated shapes */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-[40vmax] h-[40vmax] animate-floating-shapes"
            style={{
              background: `radial-gradient(circle, rgba(239,68,68,0.1) 0%, rgba(239,68,68,0) 70%)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 2}s`,
              transform: `scale(${0.5 + Math.random()})`,
            }}
          />
        ))}
      </div>

      <Navbar />
      <Header scrollY={scrollY} />
      <About />
    </div>
  )
}

export default App
