import { motion } from "framer-motion";
import { 
  Figma, 
  Palette, 
  Layout, 
  Smartphone, 
  PenTool, 
  Layers,
  Monitor,
  Lightbulb
} from "lucide-react";

const Skills = () => {
  const skills = [
    { icon: Figma, label: "Figma", description: "UI Design & Prototyping", level: 95 },
    { icon: PenTool, label: "Adobe XD", description: "Interface Design", level: 90 },
    { icon: Palette, label: "Illustrator", description: "Vector Graphics", level: 85 },
    { icon: Layers, label: "Photoshop", description: "Image Editing", level: 88 },
    { icon: Smartphone, label: "Mobile Design", description: "iOS & Android", level: 92 },
    { icon: Monitor, label: "Web Design", description: "Responsive UI", level: 90 },
    { icon: Lightbulb, label: "UX Research", description: "User Studies", level: 85 },
    { icon: Layout, label: "Wireframing", description: "Low-fi Prototypes", level: 93 },
  ];

  const softSkills = [
    "User Research",
    "Design Thinking",
    "Prototyping",
    "Usability Testing",
    "Information Architecture",
    "Interaction Design",
    "Visual Design",
    "Responsive Design",
  ];

  return (
    <section id="skills" className="section-padding dark-section">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[#D4FF00] font-semibold mb-2 text-sm tracking-wider uppercase">What I Do</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">My Skills</h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for creating exceptional digital experiences
          </p>
        </motion.div>

        {/* Main Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-[#D4FF00]/30"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-[#D4FF00]/10 rounded-xl mb-4 group-hover:bg-[#D4FF00]/20 transition-colors">
                <skill.icon className="w-7 h-7 text-[#D4FF00]" />
              </div>
              <h3 className="text-lg font-semibold mb-1 text-white">{skill.label}</h3>
              <p className="text-sm text-white/60 mb-3">{skill.description}</p>
              
              {/* Skill Bar */}
              <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="h-full bg-gradient-to-r from-[#D4FF00] to-[#22C55E] rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-xl font-semibold mb-6 text-white/90">Core Competencies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {softSkills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-white/80 hover:bg-[#D4FF00]/10 hover:border-[#D4FF00]/30 hover:text-[#D4FF00] transition-all cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
