import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const CustomKitStrip = () => {

    const navigate = useNavigate();


    return (
        <section className="py-16 bg-white border-t border-neutral-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="bg-[#FFF9E6] border border-neutral-100 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6"
                >
                    
                    {/* Left Content */}
                    <div className="text-center md:text-left max-w-lg">
                        <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
                            <div className="w-6 h-[2px] bg-amber-400" />
                            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-500">
                                Custom Solutions
                            </span>
                        </div>

                        <h3 className="text-xl md:text-2xl font-semibold text-neutral-900">
                            Need a <span className="text-amber-400">Custom Solar Kit?</span>
                        </h3>

                        <p className="mt-2 text-sm text-neutral-600">
                            We bundle complete installation kits based on your project requirements — 
                            saving time and ensuring compatibility.
                        </p>
                    </div>

                    {/* Button */}
                    <div className="w-full md:w-auto">
                        <button onClick={() => navigate("/contact")} className="w-full md:w-auto bg-amber-400 hover:bg-amber-500 text-white px-6 py-3 rounded-lg font-semibold text-sm transition shadow-sm">
                            Request Custom Kit
                        </button>
                    </div>

                </motion.div>

                {/* Bottom Line */}
                <div className="mt-6 text-center">
                    <p className="text-xs text-neutral-500">
                        Tailored solutions for residential, commercial & industrial solar projects
                    </p>
                </div>

            </div>
        </section>
    );
};

export default CustomKitStrip;