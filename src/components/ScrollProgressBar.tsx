
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Progress } from "@/components/ui/progress";

const ScrollProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate how far the user has scrolled down the page
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPosition = window.scrollY;
      const progress = (scrollPosition / totalHeight) * 100;
      setScrollProgress(progress);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Initial calculation
    handleScroll();
    
    // Clean up
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div 
      className="fixed top-0 left-0 right-0 z-[100] h-1"
      initial={{ opacity: 0 }}
      animate={{ opacity: scrollProgress > 0 ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <Progress value={scrollProgress} className="h-1 rounded-none" />
    </motion.div>
  );
};

export default ScrollProgressBar;
