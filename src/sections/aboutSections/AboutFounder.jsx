import React from 'react';
import { motion } from 'framer-motion';
import sunil from "../../assets/SunilDabgar.png"

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.2,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const AboutFounder = () => {
    return (
        <section className="py-16 bg-[#FFF9E6] border-t border-neutral-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                    
                    {/* Image */}
                    <motion.div 
                        variants={imageVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02 }}
                        className="lg:col-span-5"
                    >
                        <div className="rounded-3xl overflow-hidden bg-neutral-100">
                            <img 
                                src={sunil}
                                alt="Founder"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>

                    {/* Content */}
                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="lg:col-span-7 space-y-6"
                    >

                        {/* Header */}
                        <motion.div variants={textVariants}>
                            <div className="flex items-center gap-2 mb-3">
                                <div className="w-6 h-[2px] bg-amber-400" />
                                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-500">
                                    Leadership
                                </span>
                            </div>

                            <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900">
                                Sunil Dabgar
                            </h2>

                            <p className="text-sm text-amber-500 font-medium mt-1">
                                Founder, Sunray Energy
                            </p>
                        </motion.div>

                        {/* Quote */}
                        <motion.p variants={textVariants} className="text-neutral-700 text-base leading-relaxed">
                            Our goal is simple — to make solar installations more reliable by supplying quality components that professionals can trust on every project.
                        </motion.p>

                        {/* Description */}
                        <motion.p variants={textVariants} className="text-neutral-600 text-sm leading-relaxed max-w-xl">
                            With a focus on practical solutions and consistent quality, Sunray Energy was built to support installers, contractors, and project teams with dependable products. Every component is selected to ensure durability, safety, and ease of installation in real-world conditions.
                        </motion.p>

                        {/* Small Highlight */}
                        <motion.div variants={textVariants} className="pt-4 flex items-center gap-6">
                            <div>
                                <p className="text-lg font-semibold text-neutral-900">Since 2024</p>
                                <div className="w-10 h-[2px] bg-amber-400 mt-1" />
                            </div>

                            <p className="text-xs text-neutral-500 uppercase tracking-[0.18em]">
                                Gujarat Based
                            </p>
                        </motion.div>

                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default AboutFounder;