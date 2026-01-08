import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Linkedin, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "satyanarayana@email.com",
      href: "mailto:satyanarayana@email.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 98765 43210",
      href: "tel:+919876543210",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Hyderabad, India",
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
          <p className="text-[#D4FF00] font-semibold mb-2 text-sm tracking-wider uppercase">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Let's create something amazing together.
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
                Feel free to reach out through any of these channels. I typically respond within 24 hours.
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
