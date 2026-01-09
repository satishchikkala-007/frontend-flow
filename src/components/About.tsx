import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Briefcase,
      title: "Experience",
      description: "1+ Year in UI/UX Design",
    },
    {
      icon: GraduationCap,
      title: "Education",
      description: "B.Tech in Computer Science",
    },
    {
      icon: Award,
      title: "Expertise",
      description: "Mobile & Web Design",
    },
  ];

  return (
    <section id="about" className="section-padding bg-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
              <img
                src="profilee.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
              {/* Decorative overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#D4FF00]/20 rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 border-2 border-[#D4FF00]/30 rounded-xl -z-10" />
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <p className="text-[#22C55E] font-semibold mb-2 text-sm tracking-wider uppercase"></p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                About Me
              </h2>
            </div>
            
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                I’m a UI/UX designer who enjoys creating simple, user-friendly digital experiences. I like turning complex ideas into clear and intuitive designs by relying on strong design fundamentals and attention to detail.
              </p>
              <p>
                I approach design by balancing creative thinking with data-informed decisions, making sure the work not only looks good but also works well. I’ve designed for mobile apps, responsive websites, and web platforms, along with brand identity systems, always focusing on usability, consistency, and clarity.
              </p>
              <p>
                At the moment, I focus on building mobile and web experiences that make everyday interactions easier and more meaningful through thoughtful, accessible, and scalable design.
              </p>
            </div>

            {/* Highlights Grid */}
            {/* <div className="grid grid-cols-3 gap-4 pt-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-background rounded-2xl p-4 text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-[#D4FF00]/10 rounded-xl mb-3">
                    <item.icon className="w-6 h-6 text-[#22C55E]" />
                  </div>
                  <h4 className="font-semibold text-sm mb-1">{item.title}</h4>
                  <p className="text-xs text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
