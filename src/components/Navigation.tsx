import { useState, useEffect } from "react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md border-b-4 border-sage"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <button
            onClick={() => scrollToSection("hero")}
            className="heading-brutal text-xl hover:text-sage transition-colors duration-150"
          >
            PORTFOLIO
          </button>

          <div className="hidden md:flex space-x-8">
            {["about", "projects", "skills", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="heading-brutal text-lg hover:text-sage transition-all duration-150 hover:translate-x-1 hover:translate-y-1"
              >
                {item.toUpperCase()}
              </button>
            ))}
          </div>

          <div className="md:hidden">
            <button className="heading-brutal text-lg hover:text-sage">
              MENU
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;