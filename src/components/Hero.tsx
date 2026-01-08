import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center section-padding dark-section relative pt-24">

      {/* Main Content with Decorative Border */}
      <div className="max-w-5xl mx-auto text-center relative mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative border-2 border-white/20 rounded-3xl p-16 md:p-20"
        >
          {/* Corner Decorations */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-sm" />
          <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 w-4 h-4 bg-white rounded-sm" />
          <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-4 h-4 bg-white rounded-sm" />
          <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-sm" />
          <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-sm" />

          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-6xl font-medium mb-4">
                Hello I'am{" "}
                <span className="text-[#D4FF00] font-bold">
                  Satish<br />Chikkala
                </span>
              </h1>
              <p className="text-2xl md:text-4xl font-light text-white mt-6">
                UI UX Designer
              </p>
            </div>

            <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
              A passionate UI/UX designer focused on growth, innovation, and
              human-centered design. I create seamless digital journeys that move
              ideas into action.
            </p>

            <div className="flex gap-6 justify-center flex-wrap pt-8">
              <Button
                size="lg"
                className="bg-white hover:bg-white/90 text-primary px-10 py-6 text-base font-medium rounded-xl"
                onClick={() => document.querySelector("#works")?.scrollIntoView({ behavior: "smooth" })}
              >
                View My Work
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-primary px-10 py-6 text-base font-medium rounded-xl bg-transparent"
              >
                Resume
              </Button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        onClick={() => document.querySelector("#skills")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors cursor-pointer"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default Hero;
