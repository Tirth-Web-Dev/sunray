import React, { useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';

// Premium Counter (spring-based, smoother than setInterval)
const Counter = ({ value, duration = 2 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const motionValue = useMotionValue(0);
    const spring = useSpring(motionValue, {
        duration: duration * 1000,
        bounce: 0,
    });

    const display = useTransform(spring, (latest) =>
        Math.floor(latest)
    );

    React.useEffect(() => {
        if (isInView) {
            motionValue.set(parseInt(value));
        }
    }, [isInView, value, motionValue]);

    return <motion.span ref={ref}>{display}</motion.span>;
};

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
  hidden: { opacity: 0, y: 30, scale: 0.96 },
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

const AboutStats = () => {
    const stats = [
        { label: "Projects Completed", value: "150", suffix: "+" },
        { label: "Installers Served", value: "80", suffix: "+" },
        { label: "States Covered", value: "12", suffix: "" },
        { label: "On-Time Delivery", value: "95", suffix: "%" },
    ];

    return (
        <section className="py-16 bg-[#FFF9E6] border-t border-neutral-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Heading */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mb-12 text-center md:text-left"
                >
                    <motion.div variants={itemVariants} className="flex items-center justify-center md:justify-start gap-2 mb-3">
                        <div className="w-6 h-[2px] bg-amber-400" />
                        <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-500">
                            Our Impact
                        </span>
                    </motion.div>

                    <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl font-semibold text-neutral-900 tracking-tight">
                        Growing with <span className="text-amber-400">Every Installation</span>
                    </motion.h2>
                </motion.div>

                {/* Stats Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10"
                >
                    {stats.map((stat, index) => (
                        <motion.div 
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -4 }}
                            transition={{ type: "spring", stiffness: 200, damping: 18 }}
                            className="flex flex-col items-center md:items-start text-center md:text-left"
                        >
                            {/* Number */}
                            <div className="flex items-baseline text-neutral-900">
                                <h3 className="text-3xl md:text-4xl font-semibold">
                                    <Counter value={stat.value} />
                                </h3>
                                <span className="text-base font-medium ml-1 text-amber-500">
                                    {stat.suffix}
                                </span>
                            </div>

                            {/* Label */}
                            <p className="text-xs text-neutral-600 mt-2">
                                {stat.label}
                            </p>

                            {/* Accent */}
                            <div className="w-8 h-[2px] bg-amber-400/40 mt-3 hidden md:block" />
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default AboutStats;