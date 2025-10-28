declare global {
  interface Window {
    gsap: {
      registerPlugin: (plugin: unknown) => void;
      utils: {
        toArray: (selector: string) => Element[];
      };
    };
    ScrollTrigger: unknown;
  }
}

export {};