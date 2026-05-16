import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ===== IMPORT IMAGES =====

import e1 from '../../assets/productsImage/electrical/e1.jpg';
import e2 from '../../assets/productsImage/electrical/e2.jpg';
import e3 from '../../assets/productsImage/electrical/e3.png';
import e4 from '../../assets/productsImage/electrical/e4.png';
import e5 from '../../assets/productsImage/electrical/e5.jpg';
import e6 from '../../assets/productsImage/electrical/e6.jpg';
import e7 from '../../assets/productsImage/electrical/e7.png';

import m1 from '../../assets/productsImage/mounting/m1.jpg';
import m2 from '../../assets/productsImage/mounting/m2.jpg';
import m3 from '../../assets/productsImage/mounting/m3.jpg';
import m4 from '../../assets/productsImage/mounting/m4.jpg';
import m5 from '../../assets/productsImage/mounting/m5.png';
import m6 from '../../assets/productsImage/mounting/m6.jpg';
import m7 from '../../assets/productsImage/mounting/m7.png';

import a1 from '../../assets/productsImage/accessories/a1.jpg';
import a2 from '../../assets/productsImage/accessories/a2.png';
import a3 from '../../assets/productsImage/accessories/a3.png';
import a4 from '../../assets/productsImage/accessories/a4.jpg';
import a5 from '../../assets/productsImage/accessories/a5.jpg';
import a6 from '../../assets/productsImage/accessories/a6.jpg';
import a7 from '../../assets/productsImage/accessories/a7.jpg';

const categories = ["All", "Electrical", "Mounting", "Accessories"];

// ===== SIMPLE PRODUCT ARRAY (image directly inside) =====
const products = [
  { id: 1, name: "ACDB - DCDB", category: "Electrical", image: e1, desc: "Reliable protection for DC & AC systems." },
  { id: 2, name: "Inverter", category: "Electrical", image: e2, desc: "High performance for maximum energy output." },
  { id: 3, name: "Cable", category: "Electrical", image: e3, desc: "Durable PV cables for safe power transmission." },
  { id: 4, name: "Isolation Switch with Box", category: "Electrical", image: e4, desc: "Enhanced safety & easy operation." },
  { id: 5, name: "Lugs", category: "Electrical", image: e5, desc: "High conductivity for secure connections." },
  { id: 6, name: "MC4 Connector", category: "Electrical", image: e6, desc: "Waterproof connectors for reliability." },
  { id: 7, name: "Earthing Kit", category: "Electrical", image: e7, desc: "Complete grounding solution." },

  { id: 8, name: "GI Pipe", category: "Mounting", image: m1, desc: "Galvanized pipes for strong structure." },
  { id: 9, name: "J Bolts (SS 304)", category: "Mounting", image: m2, desc: "Rust-resistant anchoring bolts." },
  { id: 10, name: "MS-GI Base Plate", category: "Mounting", image: m3, desc: "Stable base for mounting." },
  { id: 11, name: "Wedge Anchor Fastener", category: "Mounting", image: m4, desc: "Strong grip in concrete fixing." },
  { id: 12, name: "Nut & Bolt", category: "Mounting", image: m5, desc: "Secure and durable fastening." },
  { id: 13, name: "Aluminium Monorail", category: "Mounting", image: m6, desc: "Lightweight mounting rails." },
  { id: 14, name: "Mid-End Clamp / Spring Nut / Allen Bolt", category: "Mounting", image: m7, desc: "Firm panel clamping solution." },

  { id: 15, name: "Self Drilling Screw", category: "Accessories", image: a1, desc: "Rust-resistant screws for quick fastening." },
  { id: 16, name: "PVC Pipe", category: "Accessories", image: a2, desc: "Durable pipes for cable protection." },
  { id: 17, name: "PVC Elbow / Tee", category: "Accessories", image: a3, desc: "Smooth connectors for wiring." },
  { id: 18, name: "PVC Nail Clip", category: "Accessories", image: a4, desc: "Secure cable fixing." },
  { id: 19, name: "Cable Tie", category: "Accessories", image: a5, desc: "Flexible cable organization." },
  { id: 20, name: "Zinc Spray", category: "Accessories", image: a6, desc: "Protective anti-corrosion coating." },
  { id: 21, name: "Foundation Bag", category: "Accessories", image: a7, desc: "High-strength material for foundations." },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -60,
    scale: 0.6,
    transition: {
      duration: 0.25,
      ease: "easeInOut",
    },
  },
};

const ProductGrid = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProducts =
    activeTab === "All"
      ? products
      : products.filter((p) => p.category === activeTab);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-[2px] bg-amber-400" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-500">
              Our Products
            </span>
          </div>

          <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900">
            Browse by <span className="text-amber-400">Category</span>
          </h2>
        </div>

        <div className="flex flex-wrap gap-3 mb-10">
          {categories.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition ${
                activeTab === tab
                  ? "bg-amber-400 text-white shadow-sm"
                  : "bg-neutral-100 text-neutral-600 hover:bg-amber-50 hover:text-amber-500"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <motion.div
          layout
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-6 gap-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                layout
                key={product.id}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 180, damping: 18 }}
                className="group bg-white rounded-2xl p-4 pb-6 border border-neutral-200 hover:shadow-md hover:ring-1 hover:ring-amber-200"
              >
                <div className="aspect-square bg-neutral-50 rounded-xl mb-4 flex items-center justify-center overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain p-4"
                  />
                </div>

                <p className="text-[10px] font-semibold uppercase tracking-wider text-amber-500 mb-1">
                  {product.category}
                </p>

                <h3 className="text-sm font-semibold text-neutral-900 leading-tight">
                  {product.name}
                </h3>

                <p className="text-xs text-neutral-500 mt-1 leading-relaxed">
                  {product.desc}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default ProductGrid;
