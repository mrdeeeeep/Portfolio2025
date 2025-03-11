
import { useEffect, useState } from 'react';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Training from "@/components/Training";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import CursorGradient from "@/components/CursorGradient";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from 'framer-motion';

const Index = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  // Add parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const parallaxElements = document.querySelectorAll('.parallax');
      const xValue = e.clientX / window.innerWidth - 0.5;
      const yValue = e.clientY / window.innerHeight - 0.5;
      
      parallaxElements.forEach((element) => {
        const depth = parseFloat((element as HTMLElement).dataset.depth || '0.1');
        const x = xValue * depth * 20;
        const y = yValue * depth * 20;
        (element as HTMLElement).style.transform = `translate3d(${x}px, ${y}px, 0)`;
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-background">
        <div className="flex flex-col items-center">
          <div className="relative w-16 h-16 mb-8">
            <div className="absolute inset-0 bg-gradient-to-br from-accent to-primary rounded-full opacity-70 animate-pulse-slow morph-animation"></div>
            <div className="absolute inset-[3px] bg-background rounded-full flex items-center justify-center">
              <div className="text-2xl font-bold text-gradient">DB</div>
            </div>
          </div>
          <p className="text-xl font-bold text-gradient animate-pulse">Loading Portfolio...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* {<CursorGradient />} */}
      <ScrollProgressBar />
      <Header />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Training />
      <Footer />
      
    

      <AnimatePresence>
        {showScrollToTop && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-8 right-8 z-50"
          >
            <Button 
              variant="default" 
              size="icon" 
              className="rounded-full shadow-lg" 
              onClick={scrollToTop}
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 w-5" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
