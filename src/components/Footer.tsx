import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-zinc-950 pt-24 pb-12 px-6 border-t border-white/5">
      <div className="max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24 mb-24">
          
          <div className="space-y-6">
            <h3 className="font-display text-2xl text-white">ÉTHER</h3>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
              A digital atelier redefining the intersection of technology and haute couture. Based in Paris, shipping worldwide.
            </p>
          </div>

          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest text-white/40 mb-8">Collections</h4>
            <ul className="space-y-4">
              {['Spring / Summer 25', 'Autumn / Winter 24', 'Archive', 'Accessories'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-zinc-400 hover:text-white transition-colors text-sm flex items-center gap-2 group">
                    {item}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest text-white/40 mb-8">Legal</h4>
            <ul className="space-y-4">
              {['Privacy Policy', 'Terms of Service', 'Shipping & Returns', 'Sustainability'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest text-white/40 mb-8">Newsletter</h4>
            <form className="space-y-4">
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full bg-transparent border-b border-white/20 py-2 text-white placeholder-zinc-700 focus:outline-none focus:border-white transition-colors"
                />
                <button type="submit" className="absolute right-0 top-2 text-xs uppercase tracking-widest text-white hover:text-zinc-400">
                  Join
                </button>
              </div>
              <p className="text-zinc-600 text-xs">
                Subscribe for exclusive access to drops and editorials.
              </p>
            </form>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-end pt-12 border-t border-white/5">
          <h2 className="font-display text-[15vw] leading-none text-zinc-900 select-none pointer-events-none">
            ÉTHER
          </h2>
          <div className="flex gap-8 pb-4 md:pb-8">
            <span className="text-zinc-600 text-xs">© 2024 ÉTHER STUDIOS</span>
            <span className="text-zinc-600 text-xs">PARIS — TOKYO — NY</span>
          </div>
        </div>
      </div>
    </footer>
  );
};