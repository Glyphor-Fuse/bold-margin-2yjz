import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const BigQuote = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

  return (
    <section ref={ref} className="py-40 bg-noir flex items-center justify-center overflow-hidden">
      <motion.div 
        style={{ scale, opacity }}
        className="max-w-5xl mx-auto px-6 text-center"
      >
        <p className="font-serif text-3xl md:text-5xl lg:text-7xl leading-tight text-white">
          "Fashion is the armor to survive the reality of everyday life. We do not design for the moment, but for the memory."
        </p>
        <div className="mt-12 flex justify-center">
          <div className="h-[1px] w-24 bg-white/30" />
        </div>
        <p className="mt-6 font-sans text-xs uppercase tracking-[0.3em] text-zinc-500">
          Creative Director, Éther
        </p>
      </motion.div>
    </section>
  );
};