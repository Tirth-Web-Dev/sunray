import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

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
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const AboutCTA = () => {

  const navigate = useNavigate();

    return (
        <section className="py-16 bg-white border-t border-neutral-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                    className="relative bg-[#FFF9E6] border border-neutral-100 rounded-3xl p-8 md:p-12 text-center overflow-hidden"
                >
                    
                    {/* Subtle background glow */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 0.4, scale: 1 }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute inset-0 bg-gradient-to-br from-amber-200/20 to-transparent"
                    />

                    {/* Content */}
                    <div className="relative z-10 space-y-4">
                        
                        <motion.div variants={itemVariants} className="flex items-center justify-center gap-2">
                            <div className="w-6 h-[2px] bg-amber-400" />
                            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-500">
                                Get Started
                            </span>
                        </motion.div>

                        <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl font-semibold text-neutral-900">
                            Ready to Start Your <span className="text-amber-400">Solar Project?</span>
                        </motion.h2>

                        <motion.p variants={itemVariants} className="text-sm md:text-base text-neutral-600 max-w-xl mx-auto">
                            Get reliable solar installation components delivered on time. 
                            We support contractors and installers with quality products across India.
                        </motion.p>

                        {/* Buttons */}
                        <motion.div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
                            
                            <motion.button 
                                variants={buttonVariants}
                                whileHover={{ y: -3 }}
                                whileTap={{ scale: 0.97 }}
                                onClick={() =>  navigate("/contact")}
                                className="bg-amber-400 hover:bg-amber-500 text-white px-6 py-3 rounded-lg font-semibold text-sm shadow-sm cursor-pointer"
                            >
                                Get a Quote
                            </motion.button>

                            <motion.button 
                                variants={buttonVariants}
                                whileHover={{ y: -3 }}
                                whileTap={{ scale: 0.97 }}
                                onClick={() =>  navigate("/products")}
                                className="border border-neutral-200 hover:border-amber-400 text-neutral-700 px-6 py-3 rounded-lg font-semibold text-sm  bg-white cursor-pointer"
                            >
                                View Products
                            </motion.button>

                        </motion.div>

                        {/* Trust line */}
                        <motion.div variants={itemVariants} className="mt-8 pt-6 border-t border-neutral-100">
                            <p className="text-xs text-neutral-500">
                                Based in Gujarat • Serving installers across India
                            </p>
                        </motion.div>

                    </div>

                </motion.div>

            </div>
        </section>
    );
};

export default AboutCTA;