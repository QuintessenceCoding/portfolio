import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  const aboutRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".animate-on-scroll");
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("animate-brutal-entrance");
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (aboutRef.current) observer.observe(aboutRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={aboutRef} className="py-20 bg-cream-light">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative animate-on-scroll">
            <div className="absolute -top-6 -left-6 w-full h-full bg-rose-light asymmetric-1"></div>
            <div className="relative bg-sage-light p-8 border-brutal">
              <div className="w-full h-80 bg-gradient-to-br from-sage to-lavender flex items-center justify-center">
                <div className="w-48 h-48 bg-background rounded-full flex items-center justify-center">
                  <span className="heading-md text-sage">PHOTO</span>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-lavender animate-brutal-float"></div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            <div className="animate-on-scroll">
              <div className="relative">
                <div className="absolute -top-2 -left-2 w-16 h-16 bg-rose asymmetric-2"></div>
                <h2 className="heading-lg text-foreground relative z-10">
                  ABOUT
                  <br />
                  <span className="text-lavender">ME</span>
                </h2>
              </div>
            </div>

            <div className="space-y-6 animate-on-scroll">
              {/* First Box */}
              <div className="relative">
                <div className="absolute -bottom-1 -right-1 w-full h-2 bg-sage-light asymmetric-1"></div>
                <p className="text-lg leading-relaxed relative z-10 bg-background p-4 border-sage-brutal">
                  I'm a BTech student who loves building{" "}
                  <span className="font-bold text-sage">functional</span> and{" "}
                  <span className="font-bold text-rose">creative</span> applications that solve real problems. 
                  I enjoy working across the stack, focusing on clean architecture and smooth user experiences.
                </p>
              </div>

              {/* Second Box */}
              <div className="relative">
                <div className="absolute -bottom-1 -left-1 w-full h-2 bg-lavender-light asymmetric-2"></div>
                <p className="text-lg leading-relaxed relative z-10 bg-cream p-4 border-rose-brutal">
                  Currently learning and experimenting with{" "}
                  <span className="font-bold text-lavender">modern web technologies</span>, 
                  I aim to create practical, scalable projects while constantly improving my 
                  problem-solving and development skills.
                </p>
              </div>
            </div>


            <div className="flex gap-4 flex-wrap animate-on-scroll">
              <Button variant="brutal-lavender">DOWNLOAD CV</Button>
              <Button variant="brutal">VIEW PROCESS</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
