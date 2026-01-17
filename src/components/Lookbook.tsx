import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const looks = [
  {
    id: 1,
    title: "The Void Coat",
    img: "https://images.pexels.com/photos/20478304/pexels-photo-20478304.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    price: "€2,400"
  },
  {
    id: 2,
    title: "Nebula Dress",
    img: "https://images.pexels.com/photos/31771373/pexels-photo-31771373.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    price: "€3,100"
  },
  {
    id: 3,
    title: "Carbon Trousers",
    img: "https://images.pexels.com/photos/6046228/pexels-photo-6046228.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    price: "€950"
  },
  {
    id: 4,
    title: "Onyx Blouse",
    img: "https://images.pexels.com/photos/4920012/pexels-photo-4920012.png?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    price: "€1,200"
  }
];

export const Lookbook = () => {
  return (
    <section className="py-32 bg-white text-black px-6">
      <div className="max-w-[1800px] mx-auto">
        <div className="flex justify-between items-end mb-16 border-b border-black/10 pb-8">
          <div>
            <span className="block text-xs uppercase tracking-widest mb-2 text-zinc-500">Collection 04</span>
            <h2 className="font-display text-5xl md:text-7xl">LOOKBOOK</h2>
          </div>
          <button className="hidden md:flex items-center gap-2 text-sm uppercase tracking-widest hover:gap-4 transition-all">
            View All Looks <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {looks.map((look, index) => (
            <motion.div
              key={look.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden mb-4 aspect-[3/4]">
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10" />
                <img 
                  src={look.img} 
                  alt={look.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-20 flex justify-between items-center bg-white/90 backdrop-blur-sm">
                  <span className="uppercase text-xs tracking-widest font-bold">Quick Shop</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
              <div className="flex justify-between items-baseline px-1">
                <h3 className="font-serif text-xl italic group-hover:text-zinc-600 transition-colors">{look.title}</h3>
                <span className="font-sans text-sm font-medium text-zinc-400">{look.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};