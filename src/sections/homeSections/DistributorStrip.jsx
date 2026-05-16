import React from 'react';
import { motion } from 'framer-motion';

import sunlight from "../../assets/sunlightGreenEnergy.png"
import sunPipe from "../../assets/SunPipe.png"
import pvblink from "../../assets/PvBlink.png"


const distributors = [
    { 
        name: "Polycab", 
        logo: sunlight,
        link:"https://sunlightgreenenergy.in"
    },
    { 
        name: "Havells", 
        logo: sunPipe ,
        link:"https://sunlightgreenenergy.in"
    },
    { 
        name: "Schneider Electric", 
        logo: pvblink ,
        link:"https://pvblink.com"
    }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const DistributorStrip = () => {
    return (
        <section className="py-12 bg-white border-t border-neutral-100">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            >
                
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    
                    {/* Left */}
                    <motion.div variants={itemVariants} className="space-y-3 text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-2">
                            <div className="w-6 h-[2px] bg-amber-400" />
                            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-500">
                                Authorized Brands
                            </span>
                        </div>

                        <p className="text-sm text-neutral-600 max-w-xs">
                            We supply trusted components from leading electrical and solar brands.
                        </p>
                    </motion.div>

                    {/* Logos */}
                    <motion.div 
                        variants={containerVariants}
                        className="flex flex-wrap items-center justify-center md:justify-end gap-10 md:gap-12 opacity-90"
                    >
                        {distributors.map((brand, index) => (
                            <motion.a
                                key={index}
                                href={brand.link}
                                target='_blank'
                                variants={itemVariants}
                                whileHover={{ y: -4, scale: 1.06 }}
                                transition={{ type: "spring", stiffness: 220, damping: 18 }}
                                className="h-15 md:h-18 cursor-pointer"
                            >
                                <img 
                                    src={brand.logo} 
                                    alt={brand.name} 
                                    className="h-full w-auto object-contain"
                                />
                            </motion.a>
                        ))}
                    </motion.div>

                </div>

            </motion.div>
        </section>
    );
};

export default DistributorStrip;