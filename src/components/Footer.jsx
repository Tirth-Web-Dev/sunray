import React from 'react';
import { motion } from 'framer-motion';
import logo from "../assets/logo.jpeg";
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white text-neutral-900 pt-20 pb-10 border-t border-neutral-100 relative overflow-hidden">

            {/* Subtle Top Divider */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />

            <div className="max-w-7xl mx-auto px-6">

                {/* MAIN GRID */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">

                    {/* --- BRAND --- */}
                    <div className="md:col-span-5 space-y-6">
                        <img src={logo} alt="Sunray Energy" className="h-13" />

                        <p className="text-neutral-500 text-sm leading-relaxed max-w-sm">
                            Sunray Energy supplies complete solar installation kits —
                            from electrical components to mounting hardware — built for
                            fast, reliable execution across India.
                        </p>

                        {/* CTA */}
                        <Link to="/contact">
                            <button className="mt-4 px-6 py-3 bg-yellow-500 text-neutral-900 text-xs font-bold rounded-xl uppercase tracking-wider hover:scale-105 transition-all">
                                Get a Quote
                            </button>
                        </Link>
                    </div>

                    {/* --- LINKS --- */}
                    <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">

                        {/* Navigation */}
                        <div>
                            <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-yellow-500 mb-4">
                                Navigation
                            </h4>
                            <ul className="space-y-3 text-sm text-neutral-500">
                                <li><Link to="/" className="hover:text-neutral-900 transition-colors">Home</Link></li>
                                <li><Link to="/about" className="hover:text-neutral-900 transition-colors">About</Link></li>
                                <li><Link to="/products" className="hover:text-neutral-900 transition-colors">Products</Link></li>
                                <li><Link to="/contact" className="hover:text-neutral-900 transition-colors">Contact</Link></li>
                            </ul>
                        </div>

                        {/* Products */}
                        <div>
                            <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-yellow-500 mb-4">
                                Product Range
                            </h4>
                            <ul className="space-y-3 text-sm text-neutral-500">
                                <li>ACDB / DCDB</li>
                                <li>Solar Cables</li>
                                <li>Mounting Structures</li>
                                <li>Earthing Kits</li>
                                <li>Accessories</li>
                            </ul>
                        </div>

                        {/* Contact */}
                        <div>
  <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-yellow-500 mb-4">
    Contact
  </h4>

  <div className="space-y-3 text-sm text-neutral-500">
    <p>
      409, Silicon Sponta opp. Shubh Residency, Radhanpur road, Mehsana-384002
    </p>

    {/* Phone */}
    <a 
      href="tel:+919328343385"
      className="block text-neutral-900 font-medium hover:underline hover:bg-amber-100 "
    >
      +91 93283 43385
    </a>

    {/* Email */}
    <a 
      href="mailto:sunrayenergymeh@gmail.com"
      className="block text-neutral-900 font-medium hover:underline hover:bg-amber-100"
    >
      sunrayenergymeh@gmail.com
    </a>
  </div>
</div>

                    </div>
                </div>

                {/* BOTTOM BAR */}
                <div className="pt-8 border-t border-neutral-100 flex flex-col md:flex-row justify-between items-center gap-4">

                    <p className="text-[10px] text-neutral-400 uppercase tracking-widest">
                        © {currentYear} Sunray Energy. All rights reserved.
                    </p>

                  

                </div>
            </div>

            {/* Background Branding (Very Subtle) */}
            <div className="absolute -bottom-16 -right-0 opacity-[0.07] pointer-events-none">
                <h2 className="text-[14rem] font-black text-neutral-900">SUNRAY</h2>
            </div>
        </footer>
    );
};

export default Footer;