import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Layout, Settings, ArrowRight } from 'lucide-react';
import electric from "../../assets/electric.png";
import mounting from "../../assets/mounting.png";
import accessories from "../../assets/accessories.png";

const categories = [
  {
    title: "Electrical Components",
    desc: "Core DC & AC components for efficient and safe energy flow.",
    items: ["DCDB & ACDB", "Inverters", "MC4 Connectors"],
    image: electric,
    icon: <Zap size={18} />,
  },
  {
    title: "Mounting Structure",
    desc: "Strong and weather-resistant structures for panel stability.",
    items: ["GI Structures", "Rails", "Clamps"],
    image: mounting,
    icon: <Layout size={18} />,
  },
  {
    title: "Accessories",
    desc: "Essential materials for clean and secure installations.",
    items: ["Cable Ties", "PVC Pipes", "Earthing Kit"],
    image: accessories,
    icon: <Settings size={18} />,
  }
];

// Container stagger
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2,
    },
  },
};

// Card animation
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1], // premium easing
    },
  },
};

const Category = () => {
  return (
    <section className="py-16 bg-white border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-[1px] w-8 bg-amber-400/40" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-500">
              Product Categories
            </span>
            <div className="h-[1px] w-8 bg-amber-400/40" />
          </div>
          
          <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900 tracking-tight">
            Everything for <span className="text-amber-400">Solar Installation</span>
          </h2>
          
          <p className="mt-3 text-neutral-600 text-sm max-w-md mx-auto leading-relaxed">
            Carefully selected components designed for durability, safety, and performance.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="group relative bg-white rounded-2xl p-6 border border-neutral-100 
                         shadow-sm hover:shadow-md overflow-hidden"
            >
              <div className="relative z-10 h-full flex flex-col">
                
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 
                             bg-amber-100 text-amber-500"
                >
                  {cat.icon}
                </motion.div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                  {cat.title}
                </h3>

                {/* Description */}
                <p className="text-neutral-600 text-sm leading-relaxed mb-4 mr-40">
                  {cat.desc}
                </p>

                {/* Items */}
                <ul className="space-y-2 mb-6">
                  {cat.items.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.05 }}
                      className="flex items-center gap-2 text-xs text-neutral-500"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      {item}
                    </motion.li>
                  ))}
                </ul>

                {/* CTA */}
                
              </div>

              {/* Image */}
              <motion.img 
                src={cat.image} 
                alt={cat.title}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="absolute bottom-0 right-0 w-[140px] object-contain 
                           group-hover:scale-105 transition-transform duration-500 origin-bottom-right"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Category;