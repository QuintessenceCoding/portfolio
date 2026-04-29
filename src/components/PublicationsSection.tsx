import { useEffect, useRef } from "react";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const highlights = [
  "Co-authored a research paper proposing a hybrid architecture with 3D CNN and XGBoost for early Alzheimer's detection.",
  "Achieved 0.92 AUC by integrating multimodal neuroimaging and genomic data with attention-based fusion.",
  "Implemented Explainable AI techniques including SHAP and LRP to interpret model decisions and enhance clinical trust.",
];

const PublicationsSection = () => {
  const publicationsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".animate-on-scroll");
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("animate-brutal-entrance");
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (publicationsRef.current) {
      observer.observe(publicationsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="publications"
      ref={publicationsRef}
      className="py-20 bg-cream-light"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="relative inline-block">
            <div className="absolute -top-5 -right-6 w-28 h-28 bg-sage asymmetric-1 animate-brutal-float"></div>
            <h2 className="heading-lg text-foreground relative z-10">
              RESEARCH
              <br />
              <span className="text-rose">PUBLICATIONS</span>
            </h2>
          </div>
        </div>

        <div className="max-w-5xl mx-auto animate-on-scroll">
          <div className="relative">
            <div className="absolute -bottom-3 -right-3 w-full h-full bg-lavender-light asymmetric-3"></div>
            <article className="relative bg-background p-6 md:p-8 border-brutal shadow-[8px_8px_0px_hsl(var(--rose-dark))]">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-sage text-primary-foreground text-sm font-bold uppercase tracking-wider">
                      Scopus Indexed
                    </span>
                    <span className="px-3 py-1 bg-rose text-secondary-foreground text-sm font-bold uppercase tracking-wider">
                      IEEE
                    </span>
                    <span className="px-3 py-1 bg-lavender text-accent-foreground text-sm font-bold uppercase tracking-wider">
                      ICRITO 2025
                    </span>
                  </div>

                  <div>
                    <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-3">
                      2025 12th International Conference on Reliability,
                      Infocom Technologies and Optimization
                    </p>
                    <h3 className="heading-md text-foreground">
                      Explainable AI for Detecting Early-Stage Alzheimer's
                      Disease
                    </h3>
                  </div>
                </div>

                <Button variant="brutal-rose" asChild>
                  <a
                    href="https://ieeexplore.ieee.org/document/11241548"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0"
                  >
                    VIEW PAPER
                    <ExternalLink aria-hidden="true" />
                  </a>
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="bg-cream p-4 border-4 border-sage-dark min-h-40"
                  >
                    <p className="text-base leading-relaxed text-foreground/85">
                      {highlight}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;
