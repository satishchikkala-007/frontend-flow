import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg text-muted-foreground mb-4">Hello, I am</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Sartish Chikhale
          </h1>
          <p className="text-2xl md:text-3xl text-accent font-semibold mb-8">
            UI/UX Designer
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            Creating beautiful, functional, and user-centered digital experiences
            that make a lasting impact.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get In Touch <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => document.querySelector("#works")?.scrollIntoView({ behavior: "smooth" })}
            >
              View My Work
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
