import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const statVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.4,
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const ProductHero = () => {
    return (
        <section className="relative min-h-[45vh] flex items-center bg-white border-b border-neutral-100 overflow-hidden pt-28 pb-20">
            
            {/* Background Shape */}
            <motion.div 
                initial={{ opacity: 0, x: 80, skewX: -12 }}
                animate={{ opacity: 1, x: 0, skewX: -12 }}
                transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                className="absolute top-0 right-0 w-[35%] h-full bg-neutral-50 -skew-x-12 translate-x-24 -z-10 hidden md:block"
            />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
                    
                    {/* Left Content */}
                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="md:col-span-8"
                    >
                        
                        {/* Label */}
                        <motion.div 
                            variants={itemVariants}
                            className="flex items-center gap-2 mb-4"
                        >
                            <div className="w-6 h-[2px] bg-amber-400" />
                            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-500">
                                Product Catalog
                            </span>
                        </motion.div>

                        {/* Heading */}
                        <motion.h1 
                            variants={itemVariants}
                            className="text-2xl md:text-4xl font-semibold text-neutral-900 leading-tight tracking-tight"
                        >
                            Explore Our Complete Range of <br />
                            <span className="text-amber-400">Solar Installation Products</span>
                        </motion.h1>

                        {/* Description */}
                        <motion.p 
                            variants={itemVariants}
                            className="mt-4 text-sm md:text-base text-neutral-600 max-w-xl leading-relaxed"
                        >
                            From DCDBs and inverters to mounting structures and accessories — 
                            everything you need for efficient and reliable solar installations.
                        </motion.p>
                    </motion.div>

                    {/* Right Stat */}
                    <motion.div 
                        variants={statVariants}
                        initial="hidden"
                        animate="visible"
                        className="md:col-span-4 flex md:justify-end"
                    >
                        <div className="bg-[#FFF9E6] border border-neutral-100 rounded-2xl px-6 py-5 text-left md:text-right">
                            <p className="text-[10px] font-semibold text-neutral-500 uppercase tracking-widest mb-1">
                                Product Range
                            </p>
                            <h2 className="text-4xl md:text-5xl font-semibold text-neutral-900 leading-none">
                                25+
                            </h2>
                            <p className="text-amber-500 font-medium text-xs mt-1">
                                Ready for Dispatch
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default ProductHero;