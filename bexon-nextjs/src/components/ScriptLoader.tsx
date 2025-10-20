'use client';

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react';

const ScriptLoader = () => {
  useEffect(() => {
    // Only load essential scripts for performance
    const essentialScripts = [
      '/assets/js/gsap.min.js',
      '/assets/js/gsap-scroll-trigger.min.js',
    ];

    // Load non-critical scripts with delay
    const nonCriticalScripts = [
      '/assets/js/swiper.min.js',
      '/assets/js/venobox.min.js',
      '/assets/js/wow.min.js',
    ];

    // Load essential scripts immediately
    essentialScripts.forEach((src) => {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      script.crossOrigin = 'anonymous';
      document.body.appendChild(script);
    });

    // Load non-critical scripts after a delay
    setTimeout(() => {
      nonCriticalScripts.forEach((src) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.crossOrigin = 'anonymous';
        document.body.appendChild(script);
      });
    }, 2000);

    // Initialize animations when GSAP is loaded
    const initAnimations = () => {
      if (typeof window !== 'undefined' && (window as any).gsap) {
        // Initialize GSAP animations
        (window as any).gsap.registerPlugin((window as any).ScrollTrigger);
        
        // Add scroll animations
        (window as any).gsap.utils.toArray('.animate-on-scroll').forEach((element: Element) => {
          (window as any).gsap.fromTo(element, 
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: element,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
              }
            }
          );
        });
      }
    };

    // Check if GSAP is loaded
    const checkGSAP = setInterval(() => {
      if (typeof window !== 'undefined' && (window as any).gsap) {
        clearInterval(checkGSAP);
        initAnimations();
      }
    }, 100);

    return () => {
      clearInterval(checkGSAP);
    };
  }, []);

  return null;
};

export default ScriptLoader;
