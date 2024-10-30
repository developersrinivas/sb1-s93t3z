import { motion } from 'framer-motion';
import { Apple, Carrot, Cookie, Wheat } from 'lucide-react';

const categories = [
  {
    id: 'fruits',
    name: 'Fruits',
    icon: Apple,
    description: 'Fresh and seasonal fruits',
    image: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&q=80&w=640'
  },
  {
    id: 'vegetables',
    name: 'Vegetables',
    icon: Carrot,
    description: 'Farm-fresh vegetables',
    image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?auto=format&fit=crop&q=80&w=640'
  },
  {
    id: 'grains',
    name: 'Grains',
    icon: Wheat,
    description: 'Premium quality grains',
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&q=80&w=640'
  },
  {
    id: 'snacks',
    name: 'Snacks',
    icon: Cookie,
    description: 'Delicious snacks',
    image: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?auto=format&fit=crop&q=80&w=640'
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 }
};

export function Categories() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          Shop by Category
        </motion.h2>
        
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.id}
                variants={item}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-2xl shadow-lg"
              >
                <div className="aspect-square">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                    <Icon className="w-12 h-12 mb-4" />
                    <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                    <p className="text-center text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      {category.description}
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-4 px-6 py-2 bg-white text-gray-900 rounded-full font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      Browse All
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}