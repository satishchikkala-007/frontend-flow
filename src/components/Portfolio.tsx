import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "Grocery App Design",
      category: "Mobile App",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&h=400&fit=crop",
      color: "from-green-500 to-emerald-600",
    },
    {
      title: "Restaurant & Delivery App",
      category: "UI/UX Design",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=400&fit=crop",
      color: "from-orange-500 to-amber-600",
    },
    {
      title: "Branding Design",
      category: "Brand Identity",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
      color: "from-orange-400 to-pink-500",
    },
    {
      title: "Dashboard Design",
      category: "Web Application",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      color: "from-blue-500 to-cyan-600",
    },
  ];

  return (
    <section id="works" className="section-padding dark-section">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">My Works</h2>
          <p className="text-dark-foreground/80 text-lg">
            A selection of projects that showcase my design expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br cursor-pointer"
              style={{ background: `linear-gradient(135deg, ${project.color})` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-8">
                <div className="transform transition-transform duration-300 group-hover:translate-y-[-8px]">
                  <p className="text-white/80 text-sm mb-2">{project.category}</p>
                  <h3 className="text-white text-2xl font-bold mb-4">{project.title}</h3>
                  <div className="inline-flex items-center gap-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm font-medium">View Project</span>
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
