import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  tech: string[];
  color: string;
  live?: string;
  code?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Smart PDF Q&A Bot",
    category: "AI / BACKEND",
    description:
      "A chatbot that extracts context-aware answers from uploaded PDFs using LangChain, OpenAI embeddings, and Streamlit. Deployed on GitHub with full backend functionality.",
    tech: ["Python", "LangChain", "Streamlit"],
    color: "sage",
    live: "https://smart-pdf-app-bot-3gwubr78brfpi8jufga6v4.streamlit.app/",
    code: "https://github.com/QuintessenceCoding/smart-pdf-qa-bot",
  },
  {
    id: 2,
    title: "Ethno Vibes",
    category: "COMPUTER VISION",
    description:
      "An ML-powered app that predicts fun ethnicity resemblance from selfies using the FairFace dataset and MediaPipe features. Improved accuracy with PCA and MLPClassifier.",
    tech: ["Python", "scikit-learn", "MediaPipe"],
    color: "rose",
    code: "https://github.com/QuintessenceCoding/ethno-vibes"
  },
  {
    id: 3,
    title: "Algorithm Visualizer",
    category: "WEB DEV",
    description:
      "A web-based interactive platform to visualize sorting algorithms step-by-step with animations and adjustable speeds, helping learners understand algorithm behavior intuitively. Built with React, TypeScript, and Tailwind for a smooth UI and educational experience.",
    tech: ["React", "TypeScript", "Tailwind"],
    color: "lavender",
  },
  {
  id: 4,
  title: "Savana E-commerce Platform",
  category: "FULL STACK",
  description:
    "A fully functional e-commerce web app featuring product listings, shopping cart, wishlist, and order management. Built with a custom React frontend and Express backend, styled with Tailwind, and deployed on Vercel.",
  tech: ["React", "Express", "Tailwind CSS"],
  color: "cream",
  live: "https://savana-redesign.vercel.app/",
  code: "https://github.com/QuintessenceCoding/savana-redesign",
},
];


const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const projectsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".project-card");
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("animate-brutal-entrance");
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getCardClass = (color: string) => {
    const baseClass = "project-card p-6 cursor-pointer transition-all duration-150 border-4 hover:translate-x-2 hover:translate-y-2";
    
    switch (color) {
      case "sage":
        return `${baseClass} bg-sage-light border-sage-dark`;
      case "rose":
        return `${baseClass} bg-rose-light border-rose-dark`;
      case "lavender":
        return `${baseClass} bg-lavender-light border-lavender-dark`;
      case "cream":
        return `${baseClass} bg-cream border-sage-dark`;
      default:
        return `${baseClass} bg-sage-light border-sage-dark`;
    }
  };

  const getShadowClass = (color: string) => {
    switch (color) {
      case "sage":
        return "shadow-[8px_8px_0px_hsl(var(--sage-dark))]";
      case "rose":
        return "shadow-[8px_8px_0px_hsl(var(--rose-dark))]";
      case "lavender":
        return "shadow-[8px_8px_0px_hsl(var(--lavender-dark))]";
      case "cream":
        return "shadow-[8px_8px_0px_hsl(var(--sage-dark))]";
      default:
        return "shadow-[8px_8px_0px_hsl(var(--sage-dark))]";
    }
  };

  return (
    <section id="projects" ref={projectsRef} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-rose asymmetric-3 animate-brutal-float"></div>
            <h2 className="heading-lg text-foreground relative z-10">
              SELECTED
              <br />
              <span className="text-sage">PROJECTS</span>
            </h2>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`${getCardClass(project.color)} ${getShadowClass(project.color)}`}
              onClick={() => setSelectedProject(project)}
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <span className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                    {project.category}
                  </span>
                  <div className="w-8 h-8 bg-foreground flex items-center justify-center">
                    <span className="text-background font-bold">→</span>
                  </div>
                </div>
                
                <h3 className="heading-md text-foreground">
                  {project.title}
                </h3>
                
                <p className="text-base text-foreground/80 leading-relaxed">
                  {project.description.substring(0, 100)}...
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-foreground text-background text-sm font-bold uppercase tracking-wider"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-foreground/90 z-50 flex items-center justify-center p-4">
            <div className="bg-background max-w-2xl w-full p-8 border-brutal animate-brutal-entrance">
              <div className="flex justify-between items-start mb-6">
                <h3 className="heading-lg text-foreground">
                  {selectedProject.title}
                </h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-12 h-12 bg-sage text-background font-bold text-xl hover:translate-x-1 hover:translate-y-1 transition-all duration-150"
                >
                  ×
                </button>
              </div>
              
              <div className="space-y-6">
                <div className="relative">
                  <div className="absolute -bottom-1 -right-1 w-full h-2 bg-sage-light asymmetric-1"></div>
                  <p className="text-lg leading-relaxed relative z-10 bg-cream-light p-4 border-sage-brutal">
                    {selectedProject.description}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-sage text-primary-foreground font-bold uppercase tracking-wider"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4 flex-wrap">
                  {selectedProject.live && (
                   <a href={selectedProject.live} target="_blank" rel="noopener noreferrer">
                   <Button variant="brutal">VIEW LIVE</Button>
                   </a>
                  )}
                   {selectedProject.code && (
                     <a href={selectedProject.code} target="_blank" rel="noopener noreferrer">
                       <Button variant="brutal-rose">VIEW CODE</Button>
                     </a>
                   )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;