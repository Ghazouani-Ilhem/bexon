import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'
import useAnimations from '@/hooks/useAnimations'

export default function App({ Component, pageProps }: AppProps) {
  // Initialize animations
  useAnimations()

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