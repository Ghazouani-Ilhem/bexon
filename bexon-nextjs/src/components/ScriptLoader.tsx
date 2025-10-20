'use client';

import { useEffect } from 'react';

const ScriptLoader = () => {
  useEffect(() => {
    // Load scripts after component mounts
    const scripts = [
      '/assets/js/jquery.min.js',
      '/assets/js/bootstrap.bundle.min.js',
      '/assets/js/gsap.min.js',
      '/assets/js/ScrollSmoother.js',
      '/assets/js/gsap-scroll-to-plugin.min.js',
      '/assets/js/gsap-scroll-trigger.min.js',
      '/assets/js/gsap-split-text.min.js',
      '/assets/js/jquery.nice-select.min.js',
      '/assets/js/swiper.min.js',
      '/assets/js/odometer.min.js',
      '/assets/js/venobox.min.js',
      '/assets/js/appear.min.js',
      '/assets/js/wow.min.js',
      '/assets/js/meanmenu.js',
      '/assets/js/main.js'
    ];

    scripts.forEach((src) => {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      document.body.appendChild(script);
    });
  }, []);

  return null;
};

export default ScriptLoader;
