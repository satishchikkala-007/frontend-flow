import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import About from "@/components/About";
import WorkProcess from "@/components/WorkProcess";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Skills />
      <About />
      <WorkProcess />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default Index;
