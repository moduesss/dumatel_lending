import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let isInitialized = false;

export const initGsap = () => {
  if (isInitialized || typeof window === "undefined") {
    return;
  }

  gsap.registerPlugin(ScrollTrigger);
  isInitialized = true;
};

type RevealOptions = {
  y?: number;
  duration?: number;
  delay?: number;
};

export const revealOnScroll = (
  targets: Element | Element[] | string,
  options: RevealOptions = {}
) => {
  if (typeof window === "undefined") {
    return [];
  }

  initGsap();

  const elements =
    typeof targets === "string"
      ? gsap.utils.toArray(targets)
      : Array.isArray(targets)
        ? targets
        : [targets];

  return elements
    .filter(Boolean)
    .map((element) =>
      gsap.fromTo(
        element,
        { autoAlpha: 0, y: options.y ?? 24 },
        {
          autoAlpha: 1,
          y: 0,
          duration: options.duration ?? 0.8,
          delay: options.delay ?? 0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
          },
        }
      )
    );
};
