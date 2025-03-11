
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Github, Linkedin } from "lucide-react";

import profileImg from "@/assets/image/picofme.png"; 


const Hero = () => {
  return (
    <section id="about" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="hero-animation w-[500px] h-[500px] top-[-100px] right-[-100px]"></div>
      <div className="hero-animation w-[400px] h-[400px] bottom-[-150px] left-[-150px]"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 staggered-fade-in">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Hello, I'm <span className="text-gradient">Deep Baro</span>
              </h1>
              <h2 className="text-xl md:text-2xl font-medium text-muted-foreground">
                Developer &amp; Machine Learning Engineer
              </h2>
              <p className="text-lg max-w-2xl text-muted-foreground">
                Computer Science undergraduate with a strong foundation in AI, machine learning, and software development. 
                Experienced in projects and internships, demonstrating problem-solving skills, team work, and leadership in dynamic environments.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>de3p.me@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Kokrajhar, Assam</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3 pt-2">
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                  <Button className="rounded-full">
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </Button>
                </a>
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="rounded-full">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                </a>
                <a href="#contact">
                  <Button variant="secondary" className="rounded-full">
                    Contact Me
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[400px] md:h-[400px]">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full animate-pulse-slow"></div>
              <div className="absolute inset-2 bg-background rounded-full flex items-center justify-center">
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-accent/70 to-primary/70 animate-float"></div>
                  <div className="absolute inset-1.5 bg-background rounded-full flex items-center justify-center">
                  <div className="absolute inset-1.5 bg-background rounded-full flex items-center justify-center">
                    <img 
                      src={profileImg} 
                      alt="Deep Baro" 
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>

                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
