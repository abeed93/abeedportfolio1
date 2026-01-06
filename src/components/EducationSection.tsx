import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, MapPin } from "lucide-react";

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const education = [
    {
      institution: "Viswam Engineering College",
      degree: "B.Tech in Computer Science and Engineering",
      location: "Madanapalle, AP",
      period: "2022 – 2026",
      score: "CGPA: 77%",
      current: true
    },
    {
      institution: "Kuppam Junior College",
      degree: "Intermediate (12th)",
      location: "Kuppam, AP",
      period: "2020 – 2022",
      score: "86.4%",
      current: false
    },
    {
      institution: "Saraswathi EM High School",
      degree: "SSC (10th)",
      location: "Kuppam, AP",
      period: "2020",
      score: "93.5%",
      current: false
    }
  ];

  return (
    <section id="education" className="relative py-32 overflow-hidden bg-surface">
      <div className="absolute inset-0 subtle-grid opacity-40" />
      
      <div className="container relative z-10 px-6">
        <div className="max-w-5xl mx-auto" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <span className="font-mono text-sm text-primary tracking-wider">
              // academic background
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold mt-4 mb-6">
              Education
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
              Building a strong foundation in computer science and engineering.
            </p>
          </motion.div>

          <div className="grid gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className={`glass-panel p-8 relative overflow-hidden group hover:border-primary/30 transition-all duration-500 ${
                  edu.current ? "border-primary/20" : ""
                }`}
              >
                {edu.current && (
                  <div className="absolute top-0 right-0">
                    <span className="inline-block px-4 py-1 text-xs font-mono text-primary-foreground bg-primary rounded-bl-lg">
                      Current
                    </span>
                  </div>
                )}
                
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <GraduationCap className="w-7 h-7 text-primary" />
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                        {edu.institution}
                      </h3>
                      <p className="text-muted-foreground mb-2">{edu.degree}</p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:text-right space-y-2 pl-20 lg:pl-0">
                    <p className="font-mono text-sm text-muted-foreground">{edu.period}</p>
                    <p className="inline-block px-4 py-2 text-sm font-semibold text-primary bg-primary/10 rounded-lg">
                      {edu.score}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;