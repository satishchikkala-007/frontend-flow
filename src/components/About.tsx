import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="section-padding dark-section">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="aspect-square bg-accent/10 rounded-3xl overflow-hidden border-4 border-accent/20">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About</h2>
            <div className="space-y-4 text-lg text-dark-foreground/90">
              <p>
                I'm a passionate UI/UX designer with over 5 years of experience
                creating digital products that users love. My approach combines
                aesthetic excellence with user-centered design principles.
              </p>
              <p>
                I specialize in transforming complex problems into simple,
                beautiful, and intuitive designs. Every project is an opportunity
                to push creative boundaries while maintaining focus on usability
                and business goals.
              </p>
              <p>
                When I'm not designing, you'll find me exploring the latest design
                trends, contributing to the design community, or enjoying a good
                cup of coffee while sketching new ideas.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
