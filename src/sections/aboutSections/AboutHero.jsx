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
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const AboutHero = () => {
    return (
        <section className="relative min-h-[50vh] flex items-center bg-white border-b border-neutral-100 overflow-hidden pt-28 pb-12">
            
            {/* Subtle Background Accent */}
            <motion.div 
                initial={{ opacity: 0, x: 80, skewX: 12 }}
                animate={{ opacity: 1, x: 0, skewX: 12 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="absolute top-0 right-0 w-[40%] h-full bg-[#FFF9E6] skew-x-12 translate-x-24 -z-10 hidden md:block"
            />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                    
                    {/* Left Content */}
                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="lg:col-span-8"
                    >
                        
                        {/* Label */}
                        <motion.div 
                            variants={itemVariants}
                            className="flex items-center gap-2 mb-4"
                        >
                            <div className="w-6 h-[2px] bg-amber-400" />
                            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-500">
                                About Sunray Energy
                            </span>
                        </motion.div>

                        {/* Heading */}
                        <motion.h1 
                            variants={itemVariants}
                            className="text-3xl sm:text-4xl md:text-5xl font-semibold text-neutral-900 tracking-tight leading-tight"
                        >
                            Powering Reliable <br className="hidden sm:block" />
                            <span className="text-amber-400">Solar Installations</span> Across India
                        </motion.h1>

                        {/* Description */}
                        <motion.p 
                            variants={itemVariants}
                            className="mt-5 text-neutral-600 text-sm md:text-base max-w-xl leading-relaxed"
                        >
                            Sunray Energy is focused on supplying high-quality solar installation components — from electrical systems to mounting structures and accessories. 
                            Based in Gujarat, we support installers and contractors with reliable products that simplify execution and ensure long-term performance.
                        </motion.p>
                    </motion.div>

                    {/* Right Info Block */}
                    <motion.div 
                        initial={{ opacity: 0, y: 40, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center"
                    >
                        <div className="text-left lg:text-right border-l lg:border-l-0 lg:border-r border-neutral-100 pl-4 lg:pl-0 lg:pr-4">
                            
                            <p className="text-xs font-medium text-neutral-500 uppercase tracking-[0.18em] mb-1">
                                Established
                            </p>

                            <h2 className="text-5xl md:text-6xl font-semibold text-neutral-900 leading-none">
                                2024
                            </h2>

                            <p className="text-amber-500 text-sm font-medium mt-2">
                                Quality First Approach
                            </p>

                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default AboutHero;