import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-brutal-entrance");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/60"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Name and Title */}
          <div className="space-y-6">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-sage asymmetric-1 animate-brutal-float"></div>
              <h1 className="heading-xl text-foreground relative z-10">
                ISHIKA
                <br />
                <span className="text-sage">VASHISHT</span>
              </h1>
            </div>

            <div className="relative">
              <div className="absolute -bottom-2 -right-2 w-32 h-16 bg-rose asymmetric-2"></div>
              <p className="text-xl font-bold uppercase tracking-wide relative z-10 bg-cream p-4">
                  Passionate Developer & Tech Enthusiast
              </p>
            </div>

            <div className="flex gap-4 flex-wrap">
              <Button variant="brutal" onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
                VIEW WORK
              </Button>
              <Button variant="brutal-rose" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
                GET IN TOUCH
              </Button>
            </div>
          </div>

          {/* Geometric Elements */}
          <div className="relative h-96 hidden lg:block">
            <div className="absolute top-0 right-0 w-32 h-32 bg-lavender-gradient rotate-12 animate-brutal-float"></div>
            <div className="absolute bottom-0 left-0 w-24 h-48 bg-sage-gradient asymmetric-3 animation-delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-20 bg-rose-gradient skew-x-12"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-sage rounded-full flex justify-center">
          <div className="w-1 h-3 bg-sage rounded-full mt-2 animate-brutal-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;