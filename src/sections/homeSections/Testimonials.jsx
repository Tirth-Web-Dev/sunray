import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ArrowUp, ArrowDown } from 'lucide-react';

const testimonials = [
    {
        name: "Rohit Patel",
        role: "Solar Installer, Ahmedabad",
        text: "We’ve been sourcing DCDBs and cables from Sunray Energy for over a year. The quality is consistent and installation becomes much smoother.",
        rating: 5,
        stat: "Consistent Quality"
    },
    {
        name: "Amit Verma",
        role: "EPC Contractor, Jaipur",
        text: "Fast dispatch and proper packaging make a big difference in large projects. Their support team is also very responsive.",
        rating: 5,
        stat: "Fast Delivery"
    },
    {
        name: "Nikhil Shah",
        role: "Residential Installer, Surat",
        text: "Mounting structures and accessories are reliable and easy to work with. It saves time on-site and reduces rework.",
        rating: 4,
        stat: "Easy Installation"
    }
];

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
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const Testimonials = () => {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const nextStep = () => {
        setDirection(1);
        setIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevStep = () => {
        setDirection(-1);
        setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    useEffect(() => {
        const timer = setTimeout(nextStep, 5000);
        return () => clearTimeout(timer);
    }, [index]);

    const variants = {
        enter: (direction) => ({
            y: direction > 0 ? 50 : -50,
            opacity: 0,
            scale: 0.96,
        }),
        center: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
            }
        },
        exit: (direction) => ({
            y: direction > 0 ? -50 : 50,
            opacity: 0,
            scale: 0.96,
            transition: {
                duration: 0.35,
                ease: [0.4, 0, 1, 1],
            }
        })
    };

    return (
        <section className="py-16 bg-white border-t border-neutral-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    
                    {/* Left */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-8"
                    >

                        {/* Heading */}
                        <motion.div variants={itemVariants} className="space-y-4">
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-[2px] bg-amber-400" />
                                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-500">
                                    Client Feedback
                                </span>
                            </div>

                            <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900 tracking-tight">
                                Trusted by <span className="text-amber-400">Solar Professionals</span>
                            </h2>

                            <p className="text-neutral-600 text-sm max-w-md leading-relaxed">
                                Installers and contractors across India rely on our components for quality, reliability, and faster project execution.
                            </p>
                        </motion.div>

                        {/* Controls */}
                        <motion.div variants={itemVariants} className="flex items-center gap-3">
                            <motion.button 
                                onClick={prevStep}
                                whileHover={{ scale: 1.08 }}
                                whileTap={{ scale: 0.94 }}
                                className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center 
                                           hover:bg-amber-400 hover:text-neutral-900 transition"
                            >
                                <ArrowUp size={16} />
                            </motion.button>

                            <motion.button 
                                onClick={nextStep}
                                whileHover={{ scale: 1.08 }}
                                whileTap={{ scale: 0.94 }}
                                className="w-10 h-10 rounded-full bg-amber-400 flex items-center justify-center 
                                           text-neutral-900 shadow-sm shadow-amber-200"
                            >
                                <ArrowDown size={16} />
                            </motion.button>
                        </motion.div>

                        {/* Stat */}
                        <motion.div 
                            key={testimonials[index].stat}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className="pt-4 border-t border-neutral-100"
                        >
                            <p className="text-lg font-semibold text-neutral-900">
                                {testimonials[index].stat}
                            </p>
                            <p className="text-xs text-neutral-500">
                                Real outcome from our customers
                            </p>
                        </motion.div>

                    </motion.div>

                    {/* Right */}
                    <div className="relative min-h-[260px]">
                        <AnimatePresence initial={false} custom={direction} mode="wait">
                            <motion.div
                                key={index}
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                className="bg-white border border-neutral-100 rounded-2xl p-6 shadow-sm"
                            >
                                
                                {/* Rating */}
                                <motion.div 
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.15 }}
                                    className="flex gap-1 mb-4"
                                >
                                    {[...Array(5)].map((_, i) => (
                                        <Star 
                                            key={i} 
                                            size={14} 
                                            className={i < testimonials[index].rating 
                                                ? "fill-amber-400 text-amber-400" 
                                                : "text-neutral-300"} 
                                        />
                                    ))}
                                </motion.div>

                                {/* Text */}
                                <motion.p 
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                    className="text-neutral-700 text-sm leading-relaxed mb-6"
                                >
                                    {testimonials[index].text}
                                </motion.p>

                                {/* User */}
                                <motion.div 
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.25 }}
                                    className="flex items-center gap-3 pt-4 border-t border-neutral-100"
                                >
                                    <div className="w-10 h-10 rounded-full bg-amber-400 flex items-center justify-center 
                                                    text-neutral-900 font-semibold">
                                        {testimonials[index].name.charAt(0)}
                                    </div>

                                    <div>
                                        <p className="text-sm font-semibold text-neutral-900">
                                            {testimonials[index].name}
                                        </p>
                                        <p className="text-xs text-neutral-500">
                                            {testimonials[index].role}
                                        </p>
                                    </div>
                                </motion.div>

                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Testimonials;