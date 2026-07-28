import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Education } from "@/components/sections/Education";
import { Achievements } from "@/components/sections/Achievements";
import { Resume } from "@/components/sections/Resume";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";
import { MatrixRain } from "@/components/interactive/MatrixRain";
import { CursorGlow } from "@/components/interactive/CursorGlow";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  X,
  MapPin,
  Mail,
  Linkedin,
  Phone,
  Terminal,
  User,
  Briefcase,
  Code,
  Award,
  GraduationCap,
  Trophy,
  FileText,
  Github
} from "lucide-react";

function SidebarContent({
  activeSection,
  onItemClick
}: {
  activeSection: string;
  onItemClick: (id: string) => void;
}) {
  const navItems = [
    { id: "hero", label: "Home", icon: Terminal },
    { id: "about", label: "Identity", icon: User },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "projects", label: "Projects", icon: Code },
    { id: "skills", label: "Tech Stack", icon: Award },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "achievements", label: "Achievements", icon: Trophy },
    { id: "resume", label: "System CV", icon: FileText },
    { id: "contact", label: "Contact", icon: Mail }
  ];

  return (
    <div className="flex flex-col h-full justify-between p-6 bg-card border-r border-border">
      {/* Top Part: Profile Info */}
      <div className="space-y-6">
        {/* Profile Image with Cyber Corner Frame */}
        <div className="relative group mx-auto w-36 h-36 mt-4">
          {/* Tech frame corners */}
          <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-primary z-20" />
          <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-primary z-20" />
          <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-primary z-20" />
          <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-primary z-20" />

          <div className="absolute inset-0 bg-primary/5 blur-[5px] rounded-sm" />

          <div className="relative border border-primary bg-card p-1 rounded-sm overflow-hidden z-10 w-full h-full shadow-[inset_0_0_15px_rgba(255,0,48,0.15)]">
            <img
              src={`${import.meta.env.BASE_URL}profile.jpg`}
              alt="Krishna Yadav"
              className="w-full h-full object-cover grayscale contrast-[1.05] brightness-[0.95] group-hover:grayscale-0 transition-all duration-500 rounded-sm"
            />
            {/* Scanline overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent h-[20%] w-full animate-scan pointer-events-none" />
          </div>
        </div>

        {/* Profile Info Text */}
        <div className="text-center space-y-1.5">
          <h1 className="text-xl font-bold tracking-tight text-foreground font-mono">
            KRISHNA YADAV
          </h1>
          <div className="text-xs font-mono text-primary flex items-center justify-center gap-1">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
            <span>Web Developer</span>
          </div>
          <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest flex items-center justify-center gap-1.5">
            <MapPin className="w-3 h-3 text-primary animate-pulse" /> Lucknow, India
          </div>
          <div className="inline-block border border-primary/30 bg-primary/5 px-2.5 py-0.5 rounded-full text-[9px] font-mono text-primary uppercase font-bold tracking-wider">
            NCC Cadet
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="space-y-1 pt-4 border-t border-border/60">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onItemClick(item.id)}
                className={`sidebar-tab w-full text-left flex items-center gap-3 py-2 px-4 font-mono text-xs border-l-2 hover:bg-primary/5 hover:text-foreground transition-all cursor-none ${
                  isActive
                    ? "sidebar-tab-active"
                    : "text-muted-foreground border-transparent"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Bottom Part: Socials & Fast CV Actions */}
      <div className="space-y-4 pt-6 border-t border-border/60">
        {/* Social Icons */}
        <div className="flex justify-center gap-4">
          <a
            href="mailto:krish582005@gmail.com"
            className="p-2 border border-border bg-background hover:border-primary hover:text-primary transition-colors text-muted-foreground cursor-none"
            title="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com/in/krishna-yadav-56763a3aa"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 border border-border bg-background hover:border-primary hover:text-primary transition-colors text-muted-foreground cursor-none"
            title="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="https://github.com/krish582005-eng"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 border border-border bg-background hover:border-primary hover:text-primary transition-colors text-muted-foreground cursor-none"
            title="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="tel:+916388976420"
            className="p-2 border border-border bg-background hover:border-primary hover:text-primary transition-colors text-muted-foreground cursor-none"
            title="Phone"
          >
            <Phone className="w-4 h-4" />
          </a>
        </div>

        {/* Action button */}
        <a
          href={`${import.meta.env.BASE_URL}resume.pdf`}
          download="Krishna_Yadav_Resume.pdf"
          className="flex items-center justify-center gap-2 py-2 px-3 border border-primary/40 bg-primary/5 hover:bg-primary hover:text-primary-foreground hover:glow-red text-primary font-mono text-[10px] font-bold uppercase tracking-wider rounded-sm transition-all cursor-none"
        >
          <FileText className="w-3.5 h-3.5" /> [Download_CV]
        </a>
      </div>
    </div>
  );
}

export default function Home() {
  const [matrixActive, setMatrixActive] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sections = [
      "hero",
      "about",
      "experience",
      "projects",
      "skills",
      "education",
      "achievements",
      "resume",
      "contact"
    ];

    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -55% 0px",
      threshold: 0.1
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const handleNavClick = (id: string) => {
    setIsSidebarOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30 selection:text-primary relative z-0">
      <CursorGlow />
      <MatrixRain isActive={matrixActive} />
      <Navbar onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

      <div className="split-layout-container">
        {/* Desktop Fixed Sidebar */}
        <aside className="fixed-sidebar hidden lg:block">
          <SidebarContent activeSection={activeSection} onItemClick={handleNavClick} />
        </aside>

        {/* Mobile Sidebar Drawer */}
        <AnimatePresence>
          {isSidebarOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsSidebarOpen(false)}
                className="fixed inset-0 bg-black/90 z-40 lg:hidden"
              />

              {/* Drawer panel */}
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ type: "tween", duration: 0.3 }}
                className="fixed top-0 left-0 bottom-0 w-[300px] z-50 lg:hidden overflow-y-auto"
              >
                <div className="absolute top-4 right-4 z-50">
                  <button
                    onClick={() => setIsSidebarOpen(false)}
                    className="p-1.5 border border-border bg-background text-foreground hover:text-primary transition-colors cursor-none"
                    aria-label="Close menu"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <SidebarContent activeSection={activeSection} onItemClick={handleNavClick} />
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Right scrollable content */}
        <div className="scrollable-content pt-16 lg:pt-0">
          <main>
            <Hero onMatrixToggle={() => setMatrixActive(!matrixActive)} />
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Education />
            <Achievements />
            <Resume />
            <Contact />
          </main>

          <Footer />
        </div>
      </div>
    </div>
  );
}