import { motion } from "framer-motion";
import { ChevronDown, Mail, Linkedin, Phone, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TerminalConsole } from "../interactive/TerminalConsole";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.03 } }
};

const letterVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
};

export function Hero({ onMatrixToggle }: { onMatrixToggle: () => void }) {
  const firstName = "Krishna".split("");
  const lastName = "Yadav".split("");

  return (
    <section
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
      id="hero"
    >
      {/* Red ambient particles */}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary/50 rounded-full pointer-events-none"
          style={{
            left: `${(i * 8.3) % 100}%`,
            top: `${(i * 13.7) % 100}%`,
          }}
          animate={{
            y: [-20, -80],
            opacity: [0.5, 0],
          }}
          transition={{
            duration: 4 + (i % 4),
            repeat: Infinity,
            delay: i * 0.6,
            ease: "linear",
          }}
        />
      ))}

      <div className="container mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 xl:grid-cols-2 gap-10 items-center">
        {/* Left: Text Content */}
        <div className="flex flex-col items-start text-left max-w-2xl mx-auto xl:mx-0 w-full">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 mb-6 border border-primary bg-primary/10 px-4 py-1.5 rounded-full"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="text-xs font-mono text-primary font-bold uppercase tracking-widest">
              Available for Internships
            </span>
          </motion.div>

          {/* Animated name — two words on one line each */}
          <div className="mb-2">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="flex flex-wrap text-5xl md:text-6xl lg:text-[4.5rem] font-black tracking-tight leading-none"
            >
              {firstName.map((letter, i) => (
                <motion.span
                  key={`f-${i}`}
                  variants={letterVariants}
                  className="inline-block text-foreground text-glow"
                >
                  {letter}
                </motion.span>
              ))}
              <span className="inline-block w-4" />
              {lastName.map((letter, i) => (
                <motion.span
                  key={`l-${i}`}
                  variants={letterVariants}
                  className="inline-block text-primary text-glow"
                >
                  {letter}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Typewriter role */}
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="text-lg md:text-xl lg:text-2xl text-muted-foreground font-mono mb-5 flex items-center gap-2"
          >
            <span className="text-primary">{">"}</span>
            <span className="typewriter-cycle text-foreground font-bold">
              Web Developer
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.7 }}
            className="text-muted-foreground mb-8 max-w-md font-mono text-sm leading-relaxed border-l-2 border-primary/40 pl-4"
          >
            Building intelligent systems. Writing powerful Python. NCC Cadet.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.9 }}
            className="flex flex-wrap gap-3 items-center mb-6"
          >
            <Button
              size="lg"
              className="h-11 px-7 bg-primary text-primary-foreground hover:bg-primary/80 glow-red font-mono font-bold rounded-sm tracking-wider"
              asChild
            >
              <a href="#contact" data-testid="hero-get-in-touch">
                [Get_in_touch()]
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-11 px-7 border-border text-foreground hover:border-primary hover:text-primary font-mono rounded-sm tracking-wider"
              asChild
            >
              <a href="#projects" data-testid="hero-view-work">
                [View_Work()]
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 1.1 }}
            className="flex items-center gap-5"
          >
            <a
              href="mailto:krish582005@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="hero-email-link"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/krishna-yadav-56763a3aa"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="hero-linkedin-link"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/krish582005-eng"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="hero-github-link"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="tel:+916388976420"
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="hero-phone-link"
            >
              <Phone className="w-5 h-5" />
            </a>
          </motion.div>
        </div>

        {/* Right: Terminal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="hidden xl:flex justify-center relative w-full"
        >
          <TerminalConsole onMatrixToggle={onMatrixToggle} />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4 text-primary drop-shadow-[0_0_8px_rgba(255,0,48,0.8)]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
