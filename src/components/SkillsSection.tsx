import { useEffect, useRef } from "react";

const skills = [
  { name: "JAVASCRIPT", level: 85, color: "sage" },
  { name: "TYPESCRIPT", level: 70, color: "rose" },
  { name: "REACT", level: 80, color: "lavender" },
  { name: "TAILWIND CSS", level: 85, color: "cream" },
  { name: "PYTHON", level: 65, color: "sage" },
  { name: "C/C++", level: 75, color: "rose" },
  { name: "JAVA", level: 70, color: "lavender" }
];

const tools = [
  "JavaScript",
  "TypeScript",
  "React",
  "Tailwind CSS",
  "Python",
  "C/C++",
  "Java",
  "Figma",
  "Git",
  "Blender"
];


const SkillsSection = () => {
  const skillsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".animate-on-scroll");
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("animate-brutal-entrance");
              }, index * 100);
            });

            // Animate skill bars
            const skillBars = entry.target.querySelectorAll(".skill-bar");
            skillBars.forEach((bar, index) => {
              setTimeout(() => {
                const level = bar.getAttribute("data-level");
                (bar as HTMLElement).style.width = level + "%";
              }, 500 + index * 100);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getSkillBarColor = (color: string) => {
    switch (color) {
      case "sage":
        return "bg-sage";
      case "rose":
        return "bg-rose";
      case "lavender":
        return "bg-lavender";
      case "cream":
        return "bg-cream-dark";
      default:
        return "bg-sage";
    }
  };

  return (
    <section id="skills" ref={skillsRef} className="py-20 bg-sage-light/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <div className="relative inline-block">
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-lavender asymmetric-2 animate-brutal-float"></div>
            <h2 className="heading-lg text-foreground relative z-10">
              SKILLS &
              <br />
              <span className="text-rose">EXPERTISE</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Technical Skills */}
          <div className="space-y-8">
            <div className="animate-on-scroll">
              <h3 className="heading-md text-foreground mb-8">
                TECHNICAL
                <span className="text-sage block">PROFICIENCY</span>
              </h3>
            </div>

            <div className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.name} className="animate-on-scroll">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold uppercase tracking-wider text-foreground">
                      {skill.name}
                    </span>
                    <span className="font-bold text-sm text-foreground">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="relative">
                    <div className="w-full h-4 bg-background border-2 border-foreground">
                      <div
                        className={`h-full transition-all duration-1000 ease-out ${getSkillBarColor(skill.color)} skill-bar`}
                        data-level={skill.level}
                        style={{ width: "0%" }}
                      ></div>
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-foreground"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Technologies */}
          <div className="space-y-8">
            <div className="animate-on-scroll">
              <h3 className="heading-md text-foreground mb-8">
                TOOLS &
                <span className="text-lavender block">TECHNOLOGIES</span>
              </h3>
            </div>

            <div className="animate-on-scroll">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full bg-rose-light asymmetric-3"></div>
                <div className="relative bg-background p-6 border-brutal">
                  <div className="flex flex-wrap gap-3">
                    {tools.map((tool, index) => (
                      <span
                        key={tool}
                        className="px-4 py-2 bg-foreground text-background font-bold uppercase tracking-wider text-sm hover:translate-x-1 hover:translate-y-1 transition-all duration-150 cursor-default"
                        style={{
                          animationDelay: `${index * 50}ms`
                        }}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* About Education */}
            <div className="animate-on-scroll mt-12">
              <p className="text-lg font-bold text-foreground">
                Currently pursuing <span className="text-sage">B.Tech in Computer Science</span>, 
                with focus on <span className="text-rose">AI/ML</span> and 
                <span className="text-lavender"> full-stack development</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
