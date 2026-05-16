import React from 'react';
import { motion } from 'framer-motion';
import { Target, ShieldCheck, Zap, Globe, ArrowUpRight } from 'lucide-react';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.2,
    },
  },
};

const largeCard = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
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

const smallCard = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const AboutBento = () => {
    return (
        <section className="py-16 bg-white border-t border-neutral-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <motion.div variants={smallCard} className="flex items-center gap-2 mb-3">
                        <div className="w-6 h-[2px] bg-amber-400" />
                        <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-500">
                            Our Core
                        </span>
                    </motion.div>

                    <motion.h2 variants={smallCard} className="text-2xl md:text-3xl font-semibold text-neutral-900 tracking-tight">
                        Built on Values that <span className="text-amber-400">Drive Every Project</span>
                    </motion.h2>
                </motion.div>

                {/* Bento Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-6 gap-4"
                >
                    
                    {/* Mission (large) */}
                    <motion.div 
                        variants={largeCard}
                        whileHover={{ y: -6 }}
                        transition={{ type: "spring", stiffness: 180, damping: 18 }}
                        className="md:col-span-4 bg-[#FFF9E6] border border-neutral-100 rounded-3xl p-6 md:p-8 flex flex-col justify-between relative overflow-hidden"
                    >
                        <div>
                            <div className="w-10 h-10 bg-amber-400/20 text-amber-500 rounded-lg flex items-center justify-center mb-4">
                                <Target size={20} />
                            </div>

                            <h3 className="text-xl md:text-2xl font-semibold text-neutral-900 mb-3">
                                Our Mission
                            </h3>

                            <p className="text-sm md:text-base text-neutral-600 max-w-md leading-relaxed">
                                To simplify solar installations by providing reliable, high-quality components that ensure safety, efficiency, and long-term performance on every site.
                            </p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4 }}
                            className="absolute top-6 right-6 text-amber-200"
                        >
                            <ArrowUpRight size={28} />
                        </motion.div>
                    </motion.div>

                    {/* Quality */}
                    <motion.div 
                        variants={smallCard}
                        whileHover={{ y: -4 }}
                        transition={{ type: "spring", stiffness: 200, damping: 18 }}
                        className="md:col-span-2 bg-white border border-neutral-100 rounded-3xl p-6 flex flex-col justify-between"
                    >
                        <ShieldCheck className="text-amber-400" size={26} />

                        <div>
                            <h3 className="text-lg font-semibold text-neutral-900 mb-1">
                                Quality First
                            </h3>
                            <p className="text-xs text-neutral-600">
                                Tested components built for durability and safe installations.
                            </p>
                        </div>
                    </motion.div>

                    {/* Network */}
                    <motion.div 
                        variants={smallCard}
                        whileHover={{ y: -4 }}
                        transition={{ type: "spring", stiffness: 200, damping: 18 }}
                        className="md:col-span-3 bg-neutral-50 border border-neutral-100 rounded-3xl p-6 flex items-center gap-4"
                    >
                        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center border border-neutral-100">
                            <Globe className="text-amber-400" size={22} />
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-neutral-900">
                                Pan India Supply
                            </h3>
                            <p className="text-xs text-neutral-600">
                                Supporting installers across multiple states with fast dispatch.
                            </p>
                        </div>
                    </motion.div>

                    {/* Innovation */}
                    <motion.div 
                        variants={smallCard}
                        whileHover={{ y: -4 }}
                        transition={{ type: "spring", stiffness: 200, damping: 18 }}
                        className="md:col-span-3 bg-amber-400/10 border border-amber-200 rounded-3xl p-6 flex items-center justify-between"
                    >
                        <div>
                            <h3 className="text-lg font-semibold text-neutral-900 mb-1">
                                Practical Innovation
                            </h3>
                            <p className="text-xs text-neutral-600">
                                Products designed to reduce installation time and effort.
                            </p>
                        </div>

                        <div className="w-10 h-10 rounded-full bg-amber-400 flex items-center justify-center text-white">
                            <Zap size={18} />
                        </div>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
};

export default AboutBento;