import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import Script from 'next/script'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Initialize animations after scripts are loaded
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
            live: true
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
          }
        })
      }, 2000)
    }

    // Initialize animations after scripts are loaded
    const checkAndInitialize = () => {
      if (window.jQuery && window.gsap && window.WOW) {
        initializeAnimations()
      } else {
        setTimeout(checkAndInitialize, 100)
      }
    }

    // Start checking after a short delay
    setTimeout(checkAndInitialize, 500)
  }, [])

  return (
    <>
      {/* Load scripts using Next.js Script component for better performance */}
      <Script 
        src="/assets/js/jquery.min.js" 
        strategy="beforeInteractive"
        onLoad={() => console.log('jQuery loaded')}
      />
      <Script 
        src="/assets/js/bootstrap.bundle.min.js" 
        strategy="afterInteractive"
        onLoad={() => console.log('Bootstrap loaded')}
      />
      <Script 
        src="/assets/js/gsap.min.js" 
        strategy="afterInteractive"
        onLoad={() => console.log('GSAP loaded')}
      />
      <Script 
        src="/assets/js/ScrollSmoother.js" 
        strategy="afterInteractive"
        onLoad={() => console.log('ScrollSmoother loaded')}
      />
      <Script 
        src="/assets/js/gsap-scroll-to-plugin.min.js" 
        strategy="afterInteractive"
        onLoad={() => console.log('ScrollToPlugin loaded')}
      />
      <Script 
        src="/assets/js/gsap-scroll-trigger.min.js" 
        strategy="afterInteractive"
        onLoad={() => console.log('ScrollTrigger loaded')}
      />
      <Script 
        src="/assets/js/gsap-split-text.min.js" 
        strategy="afterInteractive"
        onLoad={() => console.log('SplitText loaded')}
      />
      <Script 
        src="/assets/js/jquery.nice-select.min.js" 
        strategy="afterInteractive"
        onLoad={() => console.log('NiceSelect loaded')}
      />
      <Script 
        src="/assets/js/swiper.min.js" 
        strategy="afterInteractive"
        onLoad={() => console.log('Swiper loaded')}
      />
      <Script 
        src="/assets/js/odometer.min.js" 
        strategy="afterInteractive"
        onLoad={() => console.log('Odometer loaded')}
      />
      <Script 
        src="/assets/js/venobox.min.js" 
        strategy="afterInteractive"
        onLoad={() => console.log('VenoBox loaded')}
      />
      <Script 
        src="/assets/js/appear.min.js" 
        strategy="afterInteractive"
        onLoad={() => console.log('Appear loaded')}
      />
      <Script 
        src="/assets/js/wow.min.js" 
        strategy="afterInteractive"
        onLoad={() => console.log('WOW.js loaded')}
      />
      <Script 
        src="/assets/js/meanmenu.js" 
        strategy="afterInteractive"
        onLoad={() => console.log('MeanMenu loaded')}
      />
      <Script 
        src="/assets/js/main.js" 
        strategy="afterInteractive"
        onLoad={() => console.log('Main.js loaded')}
      />
      
      <Component {...pageProps} />
    </>
  )
}