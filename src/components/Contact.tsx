import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Linkedin, Send, Github, Dribbble } from "lucide-react";

const Contact = () => {
  const socialIcons = {
    linkedin: Linkedin,
    behance: () => (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M2 3.5C2 2.67 2.67 2 3.5 2h17C21.33 2 22 2.67 22 3.5v17c0 .83-.67 1.5-1.5 1.5h-17C2.67 22 2 21.33 2 20.5v-17zM7 11h-3v9h3v-9zm1.5-4.5c0 1 .75 1.5 1.5 1.5s1.5-.5 1.5-1.5-.75-1.5-1.5-1.5-1.5.5-1.5 1.5zM18 20h3v-5c0-2-1.5-3.5-3.5-3.5-1 0-2 .5-2.5 1.5v-1h-3v9h3v-5c0-1 .5-1.5 1.5-1.5s1.5.5 1.5 1.5v5z" />
      </svg>
    ),
    dribbble: Dribbble,
    github: Github,
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "satishchikkala97@gmail.com",
      href: "mailto:satishchikkala97@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8096949567",
      href: "tel:+918096949567",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Amalapuram, India",
      href: null,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/satyanarayana",
      href: "https://linkedin.com",
    },
  ];

  return (
    <section id="contact" className="section-padding dark-section">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[#D4FF00] font-semibold mb-2 text-sm tracking-wider uppercase"></p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Talk for </h2>
             <h2 className="text-4xl md:text-5xl font-bold mb-4">Something Special</h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">Contact Information</h3>
              <p className="text-white/70 leading-relaxed">
              
              </p>
            </div>
            
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 bg-[#D4FF00]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#D4FF00]/20 transition-colors">
                    <item.icon className="w-5 h-5 text-[#D4FF00]" />
                  </div>
                  <div>
                    <p className="text-white/50 text-sm mb-0.5">{item.label}</p>
                    {item.href ? (
                      <a 
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-white hover:text-[#D4FF00] transition-colors font-medium"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-white font-medium">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-4">
              <p className="text-white/50 text-sm mb-4">Follow me on</p>
              <div className="flex gap-3">
                {["linkedin", "behance", "dribbble", "github"].map((social) => (
                  <a
                    key={social}
                    href={`https://${social}.com`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 bg-white/5 hover:bg-[#D4FF00]/20 rounded-xl flex items-center justify-center transition-colors group border border-white/10 hover:border-[#D4FF00]/30"
                  >
                    <span className="text-white/60 group-hover:text-[#D4FF00] text-xs font-semibold uppercase">
                      {social.charAt(0)}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10"
          >
            <h3 className="text-xl font-bold mb-6 text-white">Send a Message</h3>
            <form className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <Input
                  placeholder="Your Name"
                  className="h-12 bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-[#D4FF00]/50"
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="h-12 bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-[#D4FF00]/50"
                />
              </div>
              <Input
                placeholder="Subject"
                className="h-12 bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-[#D4FF00]/50"
              />
              <Textarea
                placeholder="Your Message"
                className="min-h-[140px] bg-white/5 border-white/10 text-white placeholder:text-white/40 resize-none focus:border-[#D4FF00]/50"
              />
              <Button
                type="submit"
                size="lg"
                className="w-full bg-[#D4FF00] hover:bg-[#D4FF00]/90 text-primary font-semibold"
              >
                Send Message
                <Send className="ml-2 w-4 h-4" />
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
          className="mt-24 pt-8 border-t border-white/10 text-center"
        >
          <p className="text-white/50 text-sm">
            © 2025 Chikkala Satyanarayana Murthy. All rights reserved.
          </p>
        </motion.footer>
      </div>
    </section>
  );
};

export default Contact;
