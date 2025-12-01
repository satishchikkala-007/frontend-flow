import { motion } from "framer-motion";
import { Figma, Palette, Layout, Smartphone, Code, Zap } from "lucide-react";

const Skills = () => {
  const skills = [
    { icon: Figma, label: "Figma", description: "UI Design" },
    { icon: Palette, label: "Design", description: "Visual Design" },
    { icon: Layout, label: "Wireframe", description: "Prototyping" },
    { icon: Smartphone, label: "Mobile", description: "App Design" },
    { icon: Code, label: "Web", description: "Web Design" },
    { icon: Zap, label: "UX", description: "User Experience" },
  ];

  return (
    <section id="skills" className="section-padding bg-secondary">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">My Skills</h2>
          <p className="text-muted-foreground text-lg">
            Expertise across multiple design disciplines
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-background rounded-2xl p-8 text-center hover:shadow-lg transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-xl mb-4">
                <skill.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{skill.label}</h3>
              <p className="text-sm text-muted-foreground">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
