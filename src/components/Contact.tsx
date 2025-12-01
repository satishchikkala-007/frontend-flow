import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's talk for<br />Something special
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              I'm always interested in hearing about new projects and opportunities.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="font-medium mb-1">Email</p>
                  <a href="mailto:sartishchikhale27@gmail.com" className="text-muted-foreground hover:text-accent transition-colors">
                    sartishchikhale27@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="font-medium mb-1">Location</p>
                  <p className="text-muted-foreground">Mumbai, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-secondary rounded-3xl p-8"
          >
            <form className="space-y-6">
              <div>
                <Input
                  placeholder="Your Name"
                  className="h-12 bg-background"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="h-12 bg-background"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  className="min-h-[150px] bg-background resize-none"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-20 pt-12 border-t"
        >
          <p className="text-3xl font-bold mb-4">Thank You.</p>
          <p className="text-muted-foreground">© 2024 Sartish Chikhale. All rights reserved.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
