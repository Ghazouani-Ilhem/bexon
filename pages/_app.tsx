import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Add global error handler
    const handleError = (error: ErrorEvent) => {
      console.error('Global error:', error)
      // Don't let the error crash the app
      return true
    }
    
    window.addEventListener('error', handleError)
    
    return () => {
      window.removeEventListener('error', handleError)
    }
  }, [])

  useEffect(() => {
    // Load external scripts
    const loadScript = (src: string) => {
      return new Promise((resolve, reject) => {
        // Check if script already exists
        const existingScript = document.querySelector(`script[src="${src}"]`)
        if (existingScript) {
          resolve(true)
          return
        }
        
        const script = document.createElement('script')
        script.src = src
        script.async = true
        script.onload = () => {
          console.log(`Loaded: ${src}`)
          resolve(true)
        }
        script.onerror = (error) => {
          console.error(`Failed to load: ${src}`, error)
          reject(error)
        }
        document.head.appendChild(script)
      })
    }

    // Load required scripts in proper order
    const loadScripts = async () => {
      try {
        // Load jQuery first
        await loadScript('/assets/js/jquery.min.js')
        
        // Wait for jQuery to be available
        await new Promise(resolve => {
          const checkJQuery = () => {
            if (typeof window !== 'undefined' && (window as any).jQuery) {
              resolve(true)
            } else {
              setTimeout(checkJQuery, 100)
            }
          }
          checkJQuery()
        })

        // Load other scripts in dependency order with delays
        await loadScript('/assets/js/bootstrap.bundle.min.js')
        await new Promise(resolve => setTimeout(resolve, 100))
        
        await loadScript('/assets/js/gsap.min.js')
        await new Promise(resolve => setTimeout(resolve, 100))
        
        await loadScript('/assets/js/ScrollSmoother.js')
        await loadScript('/assets/js/gsap-scroll-to-plugin.min.js')
        await loadScript('/assets/js/gsap-scroll-trigger.min.js')
        await loadScript('/assets/js/gsap-split-text.min.js')
        await new Promise(resolve => setTimeout(resolve, 100))
        
        await loadScript('/assets/js/jquery.nice-select.min.js')
        await loadScript('/assets/js/swiper.min.js')
        await loadScript('/assets/js/odometer.min.js')
        await loadScript('/assets/js/venobox.min.js')
        await new Promise(resolve => setTimeout(resolve, 100))
        
        await loadScript('/assets/js/appear.min.js')
        await new Promise(resolve => setTimeout(resolve, 200))
        
        await loadScript('/assets/js/wow.min.js')
        await loadScript('/assets/js/meanmenu.js')
        await new Promise(resolve => setTimeout(resolve, 100))
        
        // Load main.js last after all dependencies
        await loadScript('/assets/js/main.js')
        
        // Initialize components after all scripts are loaded
        setTimeout(() => {
          if (typeof window !== 'undefined' && (window as any).jQuery) {
            // Initialize any components that need manual initialization
            try {
              (window as any).jQuery(document).ready(function($) {
                // Check if appear plugin is loaded and initialize it properly
                if (typeof $.fn.appear === 'function') {
                  console.log('Appear plugin loaded successfully')
                  
                  // Ensure appear plugin is properly initialized
                  if (!$.fn.appear.checks) {
                    $.fn.appear.checks = []
                  }
                  if (!$.fn.appear.timeout) {
                    $.fn.appear.timeout = null
                  }
                  if (!$.fn.appear.checkAll) {
                    $.fn.appear.checkAll = function() {
                      var e = $.fn.appear.checks.length
                      if (0 < e) for (; e--;) {
                        try {
                          $.fn.appear.checks[e]()
                        } catch (err) {
                          console.warn('Error in appear check:', err)
                        }
                      }
                    }
                  }
                } else {
                  console.warn('Appear plugin not loaded properly')
                }
                
                // Initialize any components here if needed
                console.log('All scripts loaded and ready')
              })
            } catch (error) {
              console.error('Error initializing components:', error)
            }
          }
        }, 2000)
        
      } catch (error) {
        console.error('Error loading scripts:', error)
      }
    }

    loadScripts()
  }, [])

  return <Component {...pageProps} />
}