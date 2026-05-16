import React from 'react';
import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

const ContactHero = () => {
    return (
        <section className="relative min-h-[45vh] flex items-center bg-white border-b border-neutral-100 overflow-hidden pt-28 pb-20">
            
            {/* Background shape */}
            <motion.div 
                initial={{ opacity: 0, x: 80, skewX: -12 }}
                animate={{ opacity: 1, x: 0, skewX: -12 }}
                transition={{ duration: 1.2, ease }}
                className="absolute top-0 right-0 w-[35%] h-full bg-neutral-50 -skew-x-12 translate-x-24 -z-10 hidden md:block"
            />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
                    
                    {/* Left */}
                    <div className="md:col-span-8">
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, ease }}
                            className="flex items-center gap-2 mb-4"
                        >
                            <div className="w-6 h-[2px] bg-amber-400" />
                            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-500">
                                Contact Us
                            </span>
                        </motion.div>

                        <motion.h1 
                            initial={{ opacity: 0, y: 30, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ delay: 0.1, duration: 0.9, ease }}
                            className="text-2xl md:text-4xl font-semibold text-neutral-900 leading-tight"
                        >
                            Let’s Discuss Your <br />
                            <span className="text-amber-400">Solar Requirements</span>
                        </motion.h1>

                        <motion.p 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.7, ease }}
                            className="mt-4 text-sm md:text-base text-neutral-600 max-w-xl"
                        >
                            Reach out for product inquiries, bulk orders, or custom solar kit solutions.
                        </motion.p>
                    </div>

                    {/* Right */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ delay: 0.4, duration: 0.9, ease }}
                        className="md:col-span-4 flex md:justify-end"
                    >
                        <motion.div 
                            whileHover={{ y: -4, scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 180, damping: 18 }}
                            className="bg-[#FFF9E6] border border-neutral-100 rounded-2xl px-6 py-5 text-left md:text-right"
                        >
                            <p className="text-[10px] font-semibold text-neutral-500 uppercase tracking-widest mb-1">
                                Response Time
                            </p>
                            <h2 className="text-3xl md:text-4xl font-semibold text-neutral-900">
                                &lt; 24h
                            </h2>
                            <p className="text-amber-500 text-xs mt-1">
                                Quick Support
                            </p>
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default ContactHero;