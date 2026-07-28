import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Github, Linkedin } from "lucide-react";

export function Contact() {
  return (
    <section className="py-24 relative bg-card/30" id="contact">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6 uppercase">
            Initialize <span className="text-primary text-glow">Contact</span>
          </h2>
          <p className="text-base font-mono text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Currently looking for internships and entry-level opportunities. My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="grid sm:grid-cols-3 gap-6 mb-16">
            <a href="mailto:krish582005@gmail.com" className="bg-card border border-border p-6 hover:border-primary transition-colors flex flex-col items-center gap-4 group hover:glow-red">
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground border border-primary/20 transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold uppercase tracking-widest text-sm mb-1">Email</h4>
                <p className="text-sm font-mono text-primary">krish582005@gmail.com</p>
              </div>
            </a>
            
            <a href="tel:+916388976420" className="bg-card border border-border p-6 hover:border-primary transition-colors flex flex-col items-center gap-4 group hover:glow-red">
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground border border-primary/20 transition-colors">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold uppercase tracking-widest text-sm mb-1">Phone</h4>
                <p className="text-sm font-mono text-primary">+91 6388976420</p>
              </div>
            </a>
            
            <div className="bg-card border border-border p-6 flex flex-col items-center gap-4">
              <div className="w-12 h-12 bg-muted flex items-center justify-center text-foreground border border-border">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold uppercase tracking-widest text-sm mb-1">Location</h4>
                <p className="text-sm font-mono text-muted-foreground">Lucknow, India</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-6">
            <a 
              href="https://linkedin.com/in/krishna-yadav-56763a3aa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-14 h-14 bg-card border border-primary/50 text-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110 hover:glow-red"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="https://github.com/krish582005-eng" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-14 h-14 bg-card border border-primary/50 text-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110 hover:glow-red"
            >
              <Github className="w-6 h-6" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}