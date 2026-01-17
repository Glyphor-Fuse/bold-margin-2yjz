import { motion } from 'framer-motion';
import { Menu, Search, ShoppingBag } from 'lucide-react';

export const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-40 flex justify-between items-center px-6 py-6 mix-blend-difference text-white"
    >
      <div className="flex items-center gap-6">
        <button className="group flex items-center gap-2 text-sm uppercase tracking-widest hover:opacity-70 transition-opacity">
          <Menu className="w-5 h-5" />
          <span className="hidden md:inline-block">Menu</span>
        </button>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2">
        <h1 className="font-display text-2xl font-bold tracking-[0.2em]">ÉTHER</h1>
      </div>

      <div className="flex items-center gap-6">
        <button className="hover:opacity-70 transition-opacity">
          <Search className="w-5 h-5" />
        </button>
        <button className="hover:opacity-70 transition-opacity">
          <ShoppingBag className="w-5 h-5" />
        </button>
      </div>
    </motion.nav>
  );
};