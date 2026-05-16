import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const milestones = [
    {
        year: "2024",
        title: "Foundation",
        desc: "Sunray Energy was established in Gujarat with a focus on supplying reliable components for solar installations."
    },
    {
        year: "2025",
        title: "Product Expansion",
        desc: "Expanded into a complete range including DC/AC components, mounting structures, and essential accessories."
    },
    {
        year: "2026",
        title: "Growing Network",
        desc: "Began supplying installers across multiple states, building a strong and reliable distribution network."
    }
];

const itemVariants = {
  hiddenLeft: { opacity: 0, x: -40, scale: 0.97 },
  hiddenRight: { opacity: 0, x: 40, scale: 0.97 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const AboutTimeline = () => {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 120,
        damping: 25
    });

    return (
        <section ref={containerRef} className="py-16 bg-white border-t border-neutral-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="mb-12"
                >
                    <div className="flex items-center gap-2 mb-3">
                        <div className="w-6 h-[2px] bg-amber-400" />
                        <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-500">
                            Our Journey
                        </span>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900 tracking-tight">
                        Growing Step by <span className="text-amber-400">Step</span>
                    </h2>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    
                    {/* Base Line */}
                    <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 w-[2px] h-full bg-neutral-200" />

                    {/* Progress Line */}
                    <motion.div 
                        style={{ scaleY, originY: 0 }}
                        className="absolute left-6 md:left-1/2 md:-translate-x-1/2 w-[2px] h-full bg-amber-400"
                    />

                    <div className="space-y-12">
                        {milestones.map((item, index) => (
                            <div key={index} className="relative flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-16 items-start">
                                
                                {/* Dot */}
                                <motion.div 
                                    initial={{ scale: 0.6, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4 }}
                                    className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-white border-2 border-amber-400 rounded-full z-10"
                                />

                                {/* Content */}
                                <motion.div
                                    variants={itemVariants}
                                    initial={index % 2 === 0 ? "hiddenLeft" : "hiddenRight"}
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    className={`ml-10 md:ml-0 ${
                                        index % 2 === 0 ? "md:text-right md:pr-10" : "md:pl-10"
                                    }`}
                                >
                                    <motion.p 
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.1 }}
                                        className="text-sm text-amber-500 font-medium mb-1"
                                    >
                                        {item.year}
                                    </motion.p>

                                    <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                                        {item.title}
                                    </h3>

                                    <motion.p 
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.15 }}
                                        className="text-sm text-neutral-600 max-w-md"
                                    >
                                        {item.desc}
                                    </motion.p>
                                </motion.div>

                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutTimeline;