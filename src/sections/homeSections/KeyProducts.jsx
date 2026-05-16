import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight, Zap, Cable, Box, Layers } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Autoplay } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';

import isolation from "../../assets/isolationSwitch.png";
import inverter from "../../assets/inverter.jpg";
import giPipe from "../../assets/giPipe.jpg"
import elbow from "../../assets/elbow.png"


import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

const products = [
    { name: "Isolation Switch With Box", category: "Electrical Components", icon: <Zap size={18}/>, image: isolation },
    { name: "Inverter", category: "Electrical Components", icon: <Cable size={18}/>, image: inverter },
    { name: "GI Pipe", category: "Mounting Structure", icon: <Box size={18}/>, image: giPipe },
    { name: "PVC Elbow / Tee", category: "Accessories", icon: <Layers size={18}/>, image: elbow }
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

const KeyProducts = () => {

    const navigate = useNavigate();

    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <section className="py-16 bg-white border-t border-neutral-100 overflow-hidden">
            
            {/* Header */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-end justify-between mb-10"
            >
                <motion.div variants={itemVariants} className="space-y-4">
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-[2px] bg-amber-400" />
                        <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-500">
                            Why Choose Us
                        </span>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900 tracking-tight">
                        Key Product <span className="text-amber-400">Range</span>
                    </h2>
                </motion.div>
                
                <motion.div variants={itemVariants} className="hidden sm:flex gap-3">
                    <motion.button 
                        ref={prevRef}
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center 
                                   hover:bg-amber-400 hover:text-neutral-900 transition shadow-sm"
                    >
                        <ChevronLeft size={18} />
                    </motion.button>

                    <motion.button 
                        ref={nextRef}
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center 
                                   hover:bg-amber-400 hover:text-neutral-900 transition shadow-sm"
                    >
                        <ChevronRight size={18} />
                    </motion.button>
                </motion.div>
            </motion.div>

            {/* Slider */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
            >
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    loopAdditionalSlides={3}
                    speed={800}
                    touchEventsTarget="container"
                    resistance={true}
                    resistanceRatio={0.85}
                    
                    coverflowEffect={{
                        rotate: 8,
                        stretch: 0,
                        depth: 300,
                        modifier: 1,
                        slideShadows: false,
                    }}
                    onInit={(swiper) => {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                        swiper.navigation.init();
                        swiper.navigation.update();
                    }}
                    modules={[EffectCoverflow, Navigation, Autoplay]}
                    className="!pb-16"
                >
                    {products.map((product, index) => (
                        <SwiperSlide key={index} className="max-w-[280px] sm:max-w-[320px]">
                            
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08 }}
                                whileHover={{ y: -6 }}
                                className="group bg-white rounded-2xl p-4 border border-neutral-100 
                                           shadow-sm hover:shadow-md"
                            >

                                {/* Image */}
                                <div className="h-64 bg-neutral-100 rounded-xl mb-4 overflow-hidden relative">
                                    <img 
                                        src={product.image} 
                                        alt={product.name} 
                                        className="w-full h-full bg-white object-contain 
                                                   group-hover:scale-105 transition duration-500"
                                    />

                                    <motion.div 
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        whileInView={{ scale: 1, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 }}
                                        className="absolute top-3 left-3 bg-white p-2 rounded-full border border-neutral-100 shadow-sm text-amber-500"
                                    >
                                        {product.icon}
                                    </motion.div>
                                </div>

                                {/* Content */}
                                <div>
                                    <p className="text-[11px] text-neutral-500 mb-1">
                                        {product.category}
                                    </p>

                                    <h3 className="text-base font-semibold text-neutral-900">
                                        {product.name}
                                    </h3>

                                    <div className="mt-4 flex items-center justify-between">
                                        
                                        <button onClick={() => navigate("./products")} className="text-sm font-medium text-amber-500 flex items-center gap-2 group/btn">
                                            View Details
                                            <span className="w-1.5 h-1.5 bg-amber-400 rounded-full group-hover/btn:w-4 transition-all"></span>
                                        </button>

                                        <motion.div
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => navigate("./products")}
                                            className="w-9 h-9 rounded-full bg-amber-400 flex items-center justify-center 
                                                       text-neutral-900 shadow-sm shadow-amber-200"
                                        >
                                            <ArrowRight size={16} />
                                        </motion.div>

                                    </div>
                                </div>

                            </motion.div>

                        </SwiperSlide>
                    ))}
                </Swiper>
            </motion.div>

            {/* CTA */}
            <div className="flex justify-center mt-10">
                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.5 }}
                    onClick={() => navigate("./products")}
                    className="bg-amber-400 hover:bg-amber-500 text-neutral-900 px-8 py-3 rounded-full 
                               font-medium flex items-center gap-3 shadow-md shadow-amber-200"
                >
                    Explore All Products
                    <ArrowRight size={18} />
                </motion.button>
            </div>
        </section>
    );
};

export default KeyProducts;