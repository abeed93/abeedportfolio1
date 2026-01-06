import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, ArrowUpRight } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "abeed9633@gmail.com",
      href: "mailto:abeed9633@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9618087811",
      href: "tel:+919618087811"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Kuppam, Andhra Pradesh",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/abeed93",
      href: "https://github.com/abeed93"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/j-abeed9633",
      href: "https://linkedin.com/in/j-abeed9633"
    }
  ];

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container relative z-10 px-6">
        <div className="max-w-5xl mx-auto" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="font-mono text-sm text-primary tracking-wider">
              // let's connect
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold mt-4 mb-6">
              Get In Touch
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Open to opportunities, collaborations, and conversations about 
              technology, systems, and building meaningful software.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-panel p-8 space-y-6"
            >
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <a 
                        href={item.href}
                        className="font-medium hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-panel p-8"
            >
              <h3 className="text-xl font-semibold mb-6">Social Profiles</h3>
              <div className="space-y-4">
                {socialLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-xl bg-muted/30 hover:bg-muted/50 border border-transparent hover:border-primary/30 transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-4">
                      <item.icon className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-medium group-hover:text-primary transition-colors">
                          {item.label}
                        </p>
                        <p className="text-sm text-muted-foreground">{item.value}</p>
                      </div>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                ))}
              </div>

              <div className="mt-8 p-6 rounded-xl bg-gradient-to-br from-primary/10 to-glow-muted/10 border border-primary/20">
                <p className="text-sm text-muted-foreground mb-2">Preferred Contact</p>
                <p className="font-semibold text-primary">Email or LinkedIn</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;