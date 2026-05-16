import React from 'react';
import { ShieldCheck, Puzzle, Truck, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import solarman from "../../assets/solarman.png";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -40, scale: 0.98 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const featureVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2 + i * 0.1,
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const WhyChoose = () => {
    const features = [
        {
            icon: <ShieldCheck className="text-amber-500" size={24} />,
            title: "Reliable Quality",
            desc: "Tested, durable components designed for long-term performance and safety."
        },
        {
            icon: <Puzzle className="text-amber-500" size={24} />,
            title: "Complete Product Range",
            desc: "Everything required for solar installations in one place—no compatibility issues."
        },
        {
            icon: <Truck className="text-amber-500" size={24} />,
            title: "Fast Delivery",
            desc: "Quick dispatch and dependable delivery to keep your projects moving."
        }
    ];

    return (
        <section className="py-16 bg-[#FFF9E6] border-t border-neutral-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    
                    {/* Left Content */}
                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        {/* Header */}
                        <motion.div variants={itemVariants} className="space-y-4">
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-[2px] bg-amber-400" />
                                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-500">
                                    Why Choose Us
                                </span>
                            </div>

                            <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900 leading-tight">
                                Built for Fast & Reliable{" "}
                                <span className="text-amber-400">Solar Installations</span>
                            </h2>

                            <p className="text-neutral-600 max-w-md text-sm leading-relaxed">
                                We provide dependable, high-quality components that simplify installation and ensure long-term performance.
                            </p>
                        </motion.div>

                        {/* Features */}
                        <div className="space-y-6">
                            {features.map((item, index) => (
                                <motion.div 
                                    key={index}
                                    custom={index}
                                    variants={featureVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    whileHover={{ x: 6 }}
                                    className="flex gap-4 group"
                                >
                                    
                                    <motion.div 
                                        initial={{ scale: 0.85, opacity: 0 }}
                                        whileInView={{ scale: 1, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 + index * 0.1 }}
                                        className="flex-shrink-0 w-12 h-12 rounded-full bg-white border border-neutral-100 
                                                    flex items-center justify-center shadow-sm 
                                                    group-hover:bg-amber-50 transition"
                                    >
                                        {item.icon}
                                    </motion.div>

                                    <div>
                                        <h4 className="text-base font-semibold text-neutral-900">
                                            {item.title}
                                        </h4>
                                        <p className="text-neutral-600 text-sm leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>

                                </motion.div>
                            ))}
                        </div>

                        {/* Trust Block */}
                        <motion.div 
                            variants={itemVariants}
                            className="pt-6 flex flex-wrap items-center gap-6 border-t border-neutral-100"
                        >
                            
                            <div className="flex items-center gap-3">
                                <div className="bg-amber-400 p-2 rounded-full shadow-sm shadow-amber-200">
                                    <Users className="text-neutral-900" size={18} />
                                </div>
                                <div>
                                    <p className="font-semibold text-neutral-900 text-sm">Trusted by 500+</p>
                                    <p className="text-xs text-neutral-500">Installers Across India</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-2 text-sm text-neutral-600">
                                <ShieldCheck className="text-amber-500" size={18} />
                                <span className="font-medium">Safe. Reliable. Built to Perform.</span>
                            </div>

                        </motion.div>
                    </motion.div>

                    {/* Right Image */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 1.05, y: 30 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                        className="relative"
                    >
                        <div className="rounded-2xl overflow-hidden border border-neutral-100 shadow-md">
                            <img 
                                src={solarman} 
                                alt="Solar technician" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default WhyChoose;