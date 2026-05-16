import React from "react";
import { motion } from "framer-motion";
import heroDesktop from "../../assets/hero-bg.png";
import heroMobile from "../../assets/hero-mobile.png";
import { useNavigate } from "react-router-dom";

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
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1], // premium ease (easeOutExpo feel)
    },
  },
};

const Hero = () => {

  const navigate = useNavigate();

  return (
    <section className="relative w-full min-h-[100svh] flex items-start justify-start bg-white overflow-hidden pt-24 pb-12 md:py-20">

      {/* Mobile Background */}
      <motion.div
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 z-0 md:hidden bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url(${heroMobile})` }}
      />

      {/* Desktop Background */}
      <motion.div
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 z-0 hidden md:block bg-no-repeat bg-right bg-cover"
        style={{ backgroundImage: `url(${heroDesktop})` }}
      />

      {/* Content */}
      <div className="relative z-20 w-full mt-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-lg md:max-w-xl lg:max-w-2xl px-4 sm:px-6 lg:px-8"
        >

          {/* Label */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-2 mb-3"
          >
            <div className="w-1 h-3 bg-amber-400 rounded-full shadow-sm shadow-amber-200" />
            <span className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
              Complete Solar Installation Solutions
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="font-bold text-neutral-900 leading-[1.1] tracking-tight text-[clamp(2rem,5vw,3.4rem)]"
          >
            Everything You Need <br className="hidden md:block" />
            to Install <span className="text-amber-400">Solar —</span> <br />
            In One Place
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={itemVariants}
            className="mt-4 text-sm md:text-base text-neutral-600 max-w-md leading-relaxed"
          >
            From DCDBs to mounting structures and accessories – 
            trusted by solar installers across India.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            className="mt-6 flex sm:flex-row gap-3 sm:items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              onClick={() => navigate("/products")}
              className="flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-500 text-neutral-900 px-6 py-2.5 rounded-full font-medium transition shadow-md shadow-amber-200 text-sm"
            >
              View Products
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              onClick={() => navigate("/contact")}
              className="flex items-center justify-center gap-2  border border-amber-400 text-amber-600 hover:bg-amber-50 px-6 py-2.5 rounded-full font-medium transition text-sm "
            >
              Contact Us
            </motion.button>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;