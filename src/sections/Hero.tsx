"use client";

import { useEffect, useRef } from "react";
import Container from "@/components/Container";
import Button from "@/components/ui/Button";
import { revealOnScroll } from "@/lib/gsap";

export default function Hero() {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!rootRef.current) {
      return;
    }

    const elements = Array.from(
      rootRef.current.querySelectorAll<HTMLElement>("[data-reveal]")
    );

    const animations = revealOnScroll(elements, { y: 32 });

    return () => {
      animations.forEach((animation) => {
        animation.scrollTrigger?.kill();
        animation.kill();
      });
    };
  }, []);

  return (
    <section className="section hero" id="hero" ref={rootRef}>
      <Container>
        <div className="hero__content" data-reveal>
          <p className="hero__eyebrow">Dumatel Cloud</p>
          <h1>Ship reliable infrastructure without the overhead.</h1>
          <p className="hero__copy">
            A composable platform for teams that need speed, security, and
            ownership across every release cycle.
          </p>
          <div className="hero__actions" data-reveal>
            <Button href="#cta">Start free trial</Button>
            <Button href="#features" variant="ghost">
              Explore features
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
