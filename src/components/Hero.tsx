import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image Parallax */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-black/30 z-10" />
        <img 
          src="https://images.pexels.com/photos/32848906/pexels-photo-32848906.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" 
          alt="Hero Fashion"
          className="w-full h-full object-cover object-center scale-110"
        />
      </motion.div>

      {/* Main Content */}
      <motion.div 
        style={{ opacity }}
        className="relative z-20 flex flex-col items-center text-center px-4"
      >
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-sans text-sm md:text-base uppercase tracking-[0.5em] mb-6 text-white/80"
        >
          Spring / Summer 2025
        </motion.span>
        
        <div className="overflow-hidden">
          <motion.h1 
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-6xl md:text-9xl lg:text-[12rem] leading-none text-white mix-blend-overlay"
          >
            SILHOUETTE
          </motion.h1>
        </div>
        
        <div className="overflow-hidden mt-4">
          <motion.p 
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif italic text-2xl md:text-4xl text-white/90"
          >
            redefining the ephemeral
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-12 left-0 right-0 flex justify-center"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] uppercase tracking-widest text-white/60">Scroll to Explore</span>
            <div className="w-[1px] h-12 bg-white/20 overflow-hidden">
              <motion.div 
                animate={{ y: ["-100%", "100%"] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                className="w-full h-full bg-white"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};