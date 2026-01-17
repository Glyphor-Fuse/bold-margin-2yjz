import { motion } from 'framer-motion';

export const Editorial = () => {
  return (
    <section className="relative py-32 px-6 md:px-12 bg-noir">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          
          {/* Text Column */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-display text-4xl md:text-6xl mb-8 leading-tight">
                THE ARCHITECTURE <br/> <span className="font-serif italic font-light text-white/60">of Cloth</span>
              </h2>
              <p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed mb-8">
                We believe that fashion is not merely about covering the body, but about constructing a narrative. Every seam is a sentence, every texture a tone of voice. Our latest collection explores the structural integrity of softness.
              </p>
              <p className="text-base text-zinc-500 leading-relaxed mb-12">
                Inspired by brutalist architecture and organic decay, the pieces stand as monuments to the fleeting nature of trends. We strip away the non-essential to reveal the stark beauty of form.
              </p>
              
              <button className="group relative px-6 py-3 border border-white/20 hover:border-white/100 transition-colors duration-300">
                <span className="relative z-10 text-sm uppercase tracking-widest group-hover:text-black transition-colors duration-300">Read the Manifesto</span>
                <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ease-out" />
              </button>
            </motion.div>
          </div>

          {/* Image Composition */}
          <div className="lg:col-span-7 order-1 lg:order-2 relative">
            <motion.div
              initial={{ clipPath: 'inset(100% 0 0 0)' }}
              whileInView={{ clipPath: 'inset(0% 0 0 0)' }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10"
            >
              <img 
                src="<div className="relative">
  <img 
    src="https://images.pexels.com/photos/4814061/pexels-photo-4814061.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" 
    alt="A detailed shot of a crumpled black fabric, showcasing its smooth and wrinkled texture in a monochromatic tone."
    width="4245"
    height="6368"
    className="w-full h-full object-cover"
  />
  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-2">
    <a href="https://www.pexels.com/photo/black-textile-with-creases-4814061/" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-400 hover:text-slate-300 transition-colors">
      Photo by Karola G on Pexels
    </a>
  </div>
</div>" 
                alt="Fabric Detail"
                className="w-full h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="absolute -bottom-12 -left-12 w-64 h-80 z-20 hidden md:block"
            >
              <img 
                src="<div className="relative">
  <img 
    src="https://images.pexels.com/photos/30720992/pexels-photo-30720992.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" 
    alt="Close-up of a woman's neck and wrist adorned with elegant gold jewelry, showcasing minimalist fashion."
    width="4160"
    height="6240"
    className="w-full h-full object-cover"
  />
  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-2">
    <a href="https://www.pexels.com/photo/elegant-gold-jewelry-on-woman-s-neck-and-wrist-30720992/" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-400 hover:text-slate-300 transition-colors">
      Photo by Ayşegül Delice on Pexels
    </a>
  </div>
</div>" 
                alt="Detail Shot"
                className="w-full h-full object-cover border-4 border-noir"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};