import React, { useEffect, useRef } from 'react'

interface AnimationTestProps {
  animationType: 'fadeInUp' | 'fadeInDown' | 'fadeInLeft' | 'fadeInRight' | 'slideInUp' | 'slideInDown'
  delay?: string
  children: React.ReactNode
  className?: string
}

const AnimationTest: React.FC<AnimationTestProps> = ({ 
  animationType, 
  delay = '0s', 
  children, 
  className = '' 
}) => {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Fallback animation if WOW.js doesn't work
    const timer = setTimeout(() => {
      if (elementRef.current && !elementRef.current.classList.contains('animated')) {
        elementRef.current.classList.add('animated')
        elementRef.current.style.visibility = 'visible'
        elementRef.current.style.opacity = '1'
        console.log(`Fallback animation applied to ${animationType}`)
      }
    }, 2000)

    return () => clearTimeout(timer)
  }, [animationType])

  return (
    <div
      ref={elementRef}
      className={`wow ${animationType} ${className}`}
      data-wow-delay={delay}
      style={{
        visibility: 'visible',
        opacity: 1
      }}
    >
      {children}
    </div>
  )
}

export default AnimationTest