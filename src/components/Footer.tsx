import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-gradient mb-6"
          >
            Contact Me
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center text-muted-foreground mb-8"
          >
            Let's connect! I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex justify-center space-x-6 mb-8"
          >
            <a href="https://github.com/mrdeeeeep" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/deep-baro-863386239/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="mailto:de3p.me@gmail.com" className="text-muted-foreground hover:text-accent transition-colors">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm text-muted-foreground text-center"
          >
            <p>&copy; {year} Deep Baro. All rights reserved.</p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
