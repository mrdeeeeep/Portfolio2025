import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CursorGradient = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add small delay before showing to prevent initial flash
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      clearTimeout(timeout);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed pointer-events-none inset-0 z-0 overflow-hidden"
      style={{ opacity: 0.8 }}
    >
      <motion.div
        className="absolute w-[4000px] h-[4000px] rounded-full blur-[60px] mix-blend-normal opacity-60" // Increased size
        animate={{
          x: mousePosition.x - 3000, // Adjusted to center the larger circle
          y: mousePosition.y - 3000, // Adjusted to center the larger circle
        }}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 250,
          mass: 0.4,
        }}
        style={{
          background: "linear-gradient(45deg, #8B5CF6, #0EA5E9, #D946EF)",
          backgroundSize: "200% 200%",
          animation: "gradientShift 6s ease infinite",
        }}
      />
    </motion.div>
  );
};

export default CursorGradient;