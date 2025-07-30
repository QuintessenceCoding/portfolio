import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const contactRef = useRef<HTMLElement>(null);

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

    if (contactRef.current) observer.observe(contactRef.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/mpwllpql", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        toast.success("✅ Message sent! I'll get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("❌ Failed to send. Try again later.");
      }
    } catch {
      toast.error("⚠️ Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const socialLinks = [
    { name: "EMAIL", value: "ishika200515@gmail.com", href: "mailto:ishika200515@gmail.com" },
    { name: "LINKEDIN", value: "ishika-vashisht", href: "https://www.linkedin.com/in/ishika-vashisht" },
    { name: "GITHUB", value: "QuintessenceCoding", href: "https://github.com/QuintessenceCoding" },
    { name: "TWITTER", value: "@_ishikavashisht", href: "https://x.com/_ishikavashisht" }
  ];

  return (
    <section id="contact" ref={contactRef} className="py-20 bg-cream-light">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <div className="relative inline-block">
            <div className="absolute -top-8 -right-8 w-40 h-40 bg-rose asymmetric-1 animate-brutal-float"></div>
            <h2 className="heading-lg text-foreground relative z-10">
              LET'S
              <br />
              <span className="text-lavender">COLLABORATE</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="animate-on-scroll">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-2 bg-sage asymmetric-2"></div>
                <p className="text-xl leading-relaxed relative z-10 bg-background p-6 border-brutal font-medium">
                  Ready to create something{" "}
                  <span className="font-bold text-sage">extraordinary</span> together? 
                  I'm always excited to discuss new projects and creative challenges.
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4 animate-on-scroll">
              <h3 className="heading-md text-foreground mb-6">
                CONNECT
                <span className="text-rose block">WITH ME</span>
              </h3>

              <div className="space-y-4">
                {socialLinks.map((link) => (
                  <div key={link.name} className="relative group">
                    <div className="absolute -bottom-1 -right-1 w-full h-1 bg-lavender-light asymmetric-1 group-hover:h-2 transition-all duration-150"></div>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex justify-between items-center p-4 bg-background border-2 border-foreground relative z-10 group-hover:translate-x-1 group-hover:translate-y-1 transition-all duration-150"
                    >
                      <span className="font-bold uppercase tracking-wider text-foreground">
                        {link.name}
                      </span>
                      <span className="text-foreground/70">{link.value}</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Response Time */}
            <div className="animate-on-scroll">
              <div className="relative">
                <div className="absolute top-0 right-0 w-24 h-24 bg-sage-light asymmetric-3 animate-brutal-float"></div>
                <div className="space-y-2">
                  <p className="text-4xl font-black text-lavender leading-none">48H</p>
                  <p className="text-base font-bold uppercase tracking-wider text-foreground">
                    RESPONSE TIME
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-on-scroll">
            <div className="relative">
              <div className="absolute -top-6 -right-6 w-full h-full bg-rose-light asymmetric-2"></div>
              <form onSubmit={handleSubmit} className="relative bg-background p-8 border-brutal space-y-6">
                <h3 className="heading-md text-foreground mb-6">
                  SEND A
                  <span className="text-sage block">MESSAGE</span>
                </h3>

                <div className="space-y-4">
                  <Input
                    name="name"
                    placeholder="YOUR NAME"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="border-2 border-foreground bg-background text-foreground placeholder:text-foreground/50 font-bold uppercase tracking-wider px-4 py-3 focus:border-sage focus:ring-0"
                  />

                  <Input
                    name="email"
                    type="email"
                    placeholder="YOUR EMAIL"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border-2 border-foreground bg-background text-foreground placeholder:text-foreground/50 font-bold uppercase tracking-wider px-4 py-3 focus:border-rose focus:ring-0"
                  />

                  <Textarea
                    name="message"
                    placeholder="YOUR MESSAGE (let's build something cool!)"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="border-2 border-foreground bg-background text-foreground placeholder:text-foreground/50 font-bold uppercase tracking-wider px-4 py-3 focus:border-lavender focus:ring-0 resize-none"
                  />
                </div>

                <div className="flex gap-4">
                  <Button type="submit" variant="brutal" className="flex-1" disabled={loading}>
                    {loading ? "SENDING..." : "SEND MESSAGE"}
                  </Button>
                  <Button
                    type="button"
                    variant="brutal-rose"
                    onClick={() => setFormData({ name: "", email: "", message: "" })}
                  >
                    CLEAR
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 text-center animate-on-scroll">
          <div className="relative inline-block">
            <div className="absolute -bottom-2 -left-2 w-full h-4 bg-multi-gradient asymmetric-3"></div>
            <p className="text-lg font-bold uppercase tracking-wider text-foreground relative z-10 bg-background px-8 py-4 border-brutal">
              © 2025 Ishika Vashisht - Crafted with ❤️ and lots of ☕
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
