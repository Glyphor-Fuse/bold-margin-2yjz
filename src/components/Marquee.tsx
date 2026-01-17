import { motion } from 'framer-motion';

export const Marquee = () => {
  return (
    <div className="py-24 overflow-hidden border-y border-white/10 bg-zinc-950">
      <motion.div 
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="flex items-center gap-16 px-8">
            <span className="font-display text-8xl md:text-[10rem] text-transparent stroke-text leading-none opacity-30">
              AVANT GARDE
            </span>
            <span className="font-serif italic text-6xl md:text-8xl text-white/80">
              2025
            </span>
          </div>
        ))}
      </motion.div>
      <style>{`
        .stroke-text {
          -webkit-text-stroke: 2px rgba(255, 255, 255, 0.5);
        }
      `}</style>
    </div>
  );
};