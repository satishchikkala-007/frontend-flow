import { motion } from "framer-motion";

const WorkProcess = () => {
  const steps = [
    {
      number: "1",
      title: "Research",
      description: "I begin by understanding the user's needs, project goals, and target audience. This stage involves collecting insights, studying competitors, and defining key problems to solve.",
    },
    {
      number: "2",
      title: "Wireframe",
      description: "Next, I create low-fidelity sketches and layouts to map out user flows. This helps visualize the structure and ensure every element supports usability and function.",
    },
    {
      number: "3",
      title: "Design",
      description: "Using Figma and design systems, I bring ideas to life with clean visuals, color palettes, and typography — focusing on clarity, consistency, and modern aesthetics.",
    },
    {
      number: "4",
      title: "Feedback",
      description: "I collaborate with teammates and mentors to review designs, refine user journeys, and improve visual hierarchy based on feedback and usability insights.",
    },
    {
      number: "5",
      title: "Prototype",
      description: "Finally, I create interactive prototypes to simulate real user experiences. These help test interactions, improve engagement, and prepare the design for development handoff.",
    },
  ];

  return (
    <section id="process" className="section-padding bg-secondary">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Work Process</h2>
          <p className="text-foreground/70 text-base italic">
            " From research to reality — my creative workflow "
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start mt-16">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square bg-background rounded-2xl overflow-hidden shadow-lg transform rotate-2">
              <img
                src="https://images.unsplash.com/photo-1559028012-481c04fa702d?w=600&h=600&fit=crop"
                alt="Design mockups and wireframes"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Right Side - Process Steps */}
          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="text-6xl md:text-7xl font-bold text-foreground mb-3">
                  {step.number}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{step.title}</h3>
                <p className="text-foreground/70 text-base leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
