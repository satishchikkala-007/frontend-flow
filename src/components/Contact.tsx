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

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-24 pt-16 border-t border-border dark-section -mx-6 md:-mx-12 lg:-mx-24 px-6 md:px-12 lg:px-24 pb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Brand Section */}
            <div>
              <h3 className="text-3xl font-bold mb-4">
                BS<span className="text-[#D4FF00]">V</span>
              </h3>
              <p className="text-dark-foreground/70 text-base leading-relaxed">
                Experienced UI/UX Designer passionate about creating beautiful & intuitive digital experiences
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-semibold mb-6 text-dark-foreground">Quick Links</h4>
              <ul className="space-y-4">
                <li>
                  <button
                    onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
                    className="text-dark-foreground/70 hover:text-[#D4FF00] transition-colors text-base"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.querySelector("#skills")?.scrollIntoView({ behavior: "smooth" })}
                    className="text-dark-foreground/70 hover:text-[#D4FF00] transition-colors text-base"
                  >
                    Skills
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.querySelector("#works")?.scrollIntoView({ behavior: "smooth" })}
                    className="text-dark-foreground/70 hover:text-[#D4FF00] transition-colors text-base"
                  >
                    Portfolio
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                    className="text-dark-foreground/70 hover:text-[#D4FF00] transition-colors text-base"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xl font-semibold mb-6 text-dark-foreground">Follow Me</h4>
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-white/10 hover:bg-[#D4FF00]/20 rounded-xl flex items-center justify-center transition-colors group"
                >
                  <svg className="w-6 h-6 text-dark-foreground group-hover:text-[#D4FF00] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a
                  href="https://behance.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-white/10 hover:bg-[#D4FF00]/20 rounded-xl flex items-center justify-center transition-colors group"
                >
                  <svg className="w-6 h-6 text-dark-foreground group-hover:text-[#D4FF00] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/>
                  </svg>
                </a>
                <a
                  href="https://dribbble.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-white/10 hover:bg-[#D4FF00]/20 rounded-xl flex items-center justify-center transition-colors group"
                >
                  <svg className="w-6 h-6 text-dark-foreground group-hover:text-[#D4FF00] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.628 0-12 5.373-12 12s5.372 12 12 12 12-5.373 12-12-5.372-12-12-12zm9.885 11.441c-2.575-.422-4.943-.445-7.103-.073-.244-.563-.497-1.125-.767-1.68 2.31-1 4.165-2.358 5.548-4.082 1.35 1.594 2.197 3.619 2.322 5.835zm-3.842-7.282c-1.205 1.554-2.868 2.783-4.986 3.68-1.016-1.861-2.178-3.676-3.488-5.438.779-.197 1.591-.314 2.431-.314 2.275 0 4.368.779 6.043 2.072zm-10.516-.993c1.331 1.742 2.511 3.538 3.537 5.381-2.43.715-5.331 1.082-8.684 1.105.692-2.835 2.601-5.193 5.147-6.486zm-5.44 8.834l.013-.256c3.849-.005 7.169-.448 9.95-1.322.233.475.456.952.67 1.432-3.38 1.057-6.165 3.222-8.337 6.48-1.432-1.719-2.296-3.927-2.296-6.334zm3.829 7.81c1.969-3.088 4.482-5.098 7.598-6.027.928 2.42 1.609 4.91 2.043 7.46-3.349 1.291-7.21.651-9.641-1.433zm11.586.43c-.438-2.353-1.08-4.653-1.92-6.897 1.876-.265 3.94-.196 6.199.196-.437 2.786-2.028 5.192-4.279 6.701z"/>
                  </svg>
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-white/10 hover:bg-[#D4FF00]/20 rounded-xl flex items-center justify-center transition-colors group"
                >
                  <svg className="w-6 h-6 text-dark-foreground group-hover:text-[#D4FF00] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-dark-foreground/70 text-sm mb-2">
              Made with <span className="text-red-500">❤️</span> by Britram Satish Vishwakarma
            </p>
            <p className="text-dark-foreground/50 text-sm">
              © 2025 All rights reserved.
            </p>
          </div>
        </motion.footer>
      </div>
    </section>
  );
};

export default Contact;
