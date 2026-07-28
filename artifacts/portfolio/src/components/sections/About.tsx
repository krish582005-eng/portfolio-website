import { motion } from "framer-motion";
import { User, ShieldAlert } from "lucide-react";

export function About() {
  return (
    <section className="py-24 relative bg-background" id="about">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground uppercase">
              System <span className="text-primary text-glow">Identity</span>
            </h2>
            <div className="h-[2px] flex-grow bg-border relative">
               <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-primary" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }} />
            </div>
          </div>

          <div className="grid md:grid-cols-12 gap-12 items-center">
            {/* Left: Cybernetic Profile Picture */}
            <div className="md:col-span-5 relative group mx-auto md:mx-0 max-w-[280px] md:max-w-full w-full">
              {/* Tech frame corners */}
              <div className="absolute -top-2 -left-2 w-5 h-5 border-t-2 border-l-2 border-primary z-20" />
              <div className="absolute -top-2 -right-2 w-5 h-5 border-t-2 border-r-2 border-primary z-20" />
              <div className="absolute -bottom-2 -left-2 w-5 h-5 border-b-2 border-l-2 border-primary z-20" />
              <div className="absolute -bottom-2 -right-2 w-5 h-5 border-b-2 border-r-2 border-primary z-20" />
              
              {/* Neon red glow shadow */}
              <div className="absolute inset-0 bg-primary/5 blur-[10px] rounded-sm group-hover:bg-primary/15 transition-all duration-300" />
              
              {/* Image box */}
              <div className="relative border border-primary bg-card p-2 rounded-sm overflow-hidden z-10 shadow-[inset_0_0_20px_rgba(255,0,48,0.1)]">
                <img
                  src={`${import.meta.env.BASE_URL}profile.jpg`}
                  alt="Krishna Yadav"
                  className="w-full h-auto object-cover grayscale contrast-[1.05] brightness-[0.95] group-hover:grayscale-0 transition-all duration-500 rounded-sm"
                />
                {/* Scanline overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent h-[20%] w-full animate-scan pointer-events-none" />
              </div>
            </div>

            {/* Right: Bio & Info */}
            <div className="md:col-span-7 space-y-6">
              <div className="space-y-4 text-base text-muted-foreground leading-relaxed font-mono">
                <p>
                  <span className="text-primary">{">"}</span> I am a Computer Science undergraduate in my fourth year with a strong interest in Frontend Development and Python Full Stack Development. I'm passionate about building clean, responsive user interfaces and continuously learning new technologies.
                </p>
                <p>
                  <span className="text-primary">{">"}</span> My technical journey is grounded in solid core concepts—Data Structures, Algorithms, Operating Systems, and DBMS—paired with practical skills in HTML, CSS, JavaScript, and Python. I love bridging the gap between elegant design and robust backend logic.
                </p>
                <p>
                  <span className="text-primary">{">"}</span> I've applied basic AI/ML concepts to real Python projects and have hands-on experience in full-stack web development, mobile app development, and data preparation — seeking an entry-level Software Developer role.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 items-start mt-6">
                <div className="grid grid-cols-2 gap-4">
                   <div className="border border-primary bg-card p-4 flex flex-col items-center justify-center text-center shadow-[inset_0_0_20px_rgba(255,0,48,0.05)]">
                      <span className="text-2xl md:text-3xl font-black text-primary mb-1">7.5</span>
                      <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-mono">CGPA</span>
                   </div>
                   <div className="border border-primary bg-card p-4 flex flex-col items-center justify-center text-center shadow-[inset_0_0_20px_rgba(255,0,48,0.05)]">
                      <span className="text-2xl md:text-3xl font-black text-primary mb-1">3</span>
                      <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-mono">Certifications</span>
                   </div>
                   <div className="col-span-2 border border-primary bg-card p-4 flex flex-col items-center justify-center text-center shadow-[inset_0_0_20px_rgba(255,0,48,0.05)]">
                      <span className="text-2xl md:text-3xl font-black text-primary mb-1">4th Year</span>
                      <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-mono">B.Tech CSE Student</span>
                   </div>
                </div>

                <div className="flex items-start gap-4 p-5 border-l-4 border-l-primary bg-card/50 relative overflow-hidden group h-full">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-[30px]" />
                  <div className="p-2 border border-primary/50 text-primary mt-1 bg-background z-10">
                    <ShieldAlert className="w-5 h-5" />
                  </div>
                  <div className="z-10">
                    <h4 className="font-bold text-foreground mb-1 uppercase tracking-wider text-xs font-mono text-glow">NCC Cadet Status</h4>
                    <p className="text-[10px] leading-normal text-muted-foreground font-mono">
                      Disciplined cadet with proven leadership, teamwork, and organizational skills. Trained in drill, discipline, and responsibility. Strong commitment to integrity and service.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}