import { motion } from "framer-motion";
import { BriefcaseBusiness, Calendar } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      title: "AI/ML Intern",
      company: "SRDT Pvt. Ltd",
      date: "Mar 2026 — Present",
      location: "India",
      description: [
        "Applied basic AI/ML concepts to small Python projects.",
        "Assisted in data preparation and model testing workflows."
      ]
    },
    {
      title: "Software Engineer Intern",
      company: "SRDT Pvt. Ltd",
      date: "Sep 2025 – Feb 2026",
      location: "India",
      description: [
        "Built and enhanced web applications in Python across the full development cycle — requirements, coding, testing, and debugging.",
        "Collaborated with senior engineers on code quality via peer review and troubleshooting."
      ]
    },
    {
      title: "Mobile Application Developer Course",
      company: "L&T EduTech Certified",
      date: "2024",
      location: "India",
      description: [
        "Built a mobile application applying core web and programming skills under mentor guidance."
      ]
    }
  ];

  return (
    <section className="py-24 relative bg-card/30" id="experience">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-end gap-4 mb-16">
            <div className="h-[2px] flex-grow bg-border relative">
               <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-primary" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }} />
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight uppercase text-foreground">
              Work <span className="text-primary text-glow">Logs</span>
            </h2>
          </div>

          <div className="relative border-l border-primary/50 ml-3 md:ml-6 space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative pl-8 md:pl-12"
              >
                {/* Timeline dot */}
                <div className="absolute w-6 h-6 bg-background border-2 border-primary -left-[13px] top-1 flex items-center justify-center glow-red" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}>
                  <div className="w-2 h-2 bg-primary" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}></div>
                </div>

                <div className="bg-card border-l-4 border-l-primary border-y border-r border-border p-6 shadow-sm hover:glow-red transition-all group relative overflow-hidden">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground uppercase tracking-wide">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 text-primary font-mono font-medium mt-1">
                        <BriefcaseBusiness className="w-4 h-4" />
                        {exp.company}
                      </div>
                    </div>
                    <div className="flex flex-col md:items-end text-sm text-primary font-mono bg-primary/10 px-3 py-1 border border-primary/20">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.date}
                      </div>
                      <span className="text-muted-foreground">{exp.location}</span>
                    </div>
                  </div>

                  <ul className="space-y-2 mt-4 font-mono text-sm">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-primary mt-1.5 text-xs">{">"}</span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}