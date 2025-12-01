import { motion } from "framer-motion";
import { Search, Layout, Palette, Boxes, CheckCircle2 } from "lucide-react";

const WorkProcess = () => {
  const steps = [
    {
      number: "1",
      title: "Research",
      description: "Deep dive into user needs, market analysis, and competitive research to inform design decisions.",
      icon: Search,
    },
    {
      number: "2",
      title: "Wireframe",
      description: "Creating low-fidelity wireframes to establish structure, layout, and information architecture.",
      icon: Layout,
    },
    {
      number: "3",
      title: "Design",
      description: "Developing high-fidelity designs with careful attention to visual hierarchy, typography, and color.",
      icon: Palette,
    },
    {
      number: "4",
      title: "Prototype",
      description: "Building interactive prototypes to test user flows and validate design concepts before development.",
      icon: Boxes,
    },
    {
      number: "5",
      title: "Finalize",
      description: "Refining designs based on feedback, preparing assets, and ensuring smooth developer handoff.",
      icon: CheckCircle2,
    },
  ];

  return (
    <section id="process" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Work Process</h2>
          <p className="text-muted-foreground text-lg">
            A systematic approach to creating exceptional designs
          </p>
        </motion.div>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex gap-6 items-start"
            >
              <div className="flex-shrink-0 w-16 h-16 bg-accent text-accent-foreground rounded-2xl flex items-center justify-center text-2xl font-bold">
                {step.number}
              </div>
              <div className="flex-1 pt-2">
                <div className="flex items-center gap-3 mb-3">
                  <step.icon className="w-6 h-6 text-accent" />
                  <h3 className="text-2xl font-semibold">{step.title}</h3>
                </div>
                <p className="text-muted-foreground text-lg">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
