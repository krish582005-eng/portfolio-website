import { motion } from "framer-motion";
import { Award, Trophy } from "lucide-react";

export function Achievements() {
  const items = [
    {
      title: "Mobile Application Developer",
      issuer: "L&T Edutech Certified",
      icon: Award
    },
    {
      title: "Full Stack Python",
      issuer: "Summer Training Program",
      icon: Trophy
    },
    {
      title: "Python Full Stack Developer",
      issuer: "Udemy Certified",
      icon: Award
    }
  ];

  return (
    <section className="py-24 relative bg-background" id="achievements">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight uppercase text-foreground">
              Verified <span className="text-primary text-glow">Credentials</span>
            </h2>
            <div className="h-[2px] flex-grow bg-border relative">
               <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-primary" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }} />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="bg-card border border-border p-6 hover:border-primary transition-all hover:-translate-y-1 group hover:glow-red"
              >
                <div className="w-12 h-12 bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground border border-primary/20 transition-colors">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground uppercase">{item.title}</h3>
                <p className="text-primary font-mono text-sm before:content-['//_']">{item.issuer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}