import { useEffect } from 'react'

export const useAnimations = () => {
  useEffect(() => {
    const initializeAnimations = () => {
      if (typeof window === 'undefined') return

      // Initialize WOW.js animations
      if (window.WOW) {
        try {
          new window.WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: true,
            live: true,
            callback: (box: Element) => {
              console.log('WOW animation triggered for:', box)
            }
          }).init()
          console.log('WOW.js initialized successfully')
        } catch (error) {
          console.error('Error initializing WOW.js:', error)
        }
      }
      
      // Initialize GSAP animations
      if (window.gsap && window.ScrollTrigger) {
        try {
          window.gsap.registerPlugin(window.ScrollTrigger, window.ScrollSmoother, window.ScrollToPlugin)
          
          // Call the gsapController function if it exists
          if (window.gsapController) {
            window.gsapController()
            console.log('GSAP animations initialized successfully')
          }
        } catch (error) {
          console.error('Error initializing GSAP:', error)
        }
      }

      // Fallback: Show all wow elements if WOW.js fails to load
      setTimeout(() => {
        const wowElements = document.querySelectorAll('.wow')
        wowElements.forEach((element) => {
          if (!element.classList.contains('animated')) {
            element.classList.add('animated')
            element.style.visibility = 'visible'
            console.log('Fallback animation applied to:', element)
          }
        })
      }, 3000)
    }

    // Check if all required scripts are loaded
    const checkAndInitialize = () => {
      if (window.jQuery && window.gsap && window.WOW) {
        initializeAnimations()
      } else {
        setTimeout(checkAndInitialize, 100)
      }
    }

    // Start checking after a short delay
    setTimeout(checkAndInitialize, 500)

    // Cleanup function
    return () => {
      // Clean up any running animations if needed
      if (window.gsap && window.ScrollTrigger) {
        window.ScrollTrigger.getAll().forEach(trigger => trigger.kill())
      }
    }
  }, [])
}

export default useAnimations