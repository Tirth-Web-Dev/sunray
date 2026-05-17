import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.jpeg";

const navItems = ["Home", "About", "Products", "Contact"];
const socials = ["Instagram", "LinkedIn", "Twitter"];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "unset";
  }, [menuOpen]);

  // Route-based active check (scalable)
  const isActive = (item) => {
    const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
    return location.pathname === path || location.pathname.startsWith(path + "/");
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-[99] flex items-center justify-between px-6 md:px-8 py-2 bg-white border-b border-neutral-100">

        {/* Logo */}
        <Link to="/" className="z-[110] flex items-center gap-2">
          <img src={logo} className="w-32 md:w-36" alt="Sunray Energy" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex gap-1 items-center">
          {navItems.map((item) => (
            <li key={item} className="relative">
              <Link
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="relative z-10 px-5 py-2 block text-sm font-semibold text-neutral-900"
              >
                {item}
              </Link>

              {/* Active Pill */}
              {isActive(item) && (
                <motion.div
                  layoutId="pill"
                  className="absolute inset-0 bg-amber-400 rounded-full"
                  transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                />
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          className="sm:hidden z-[110] flex flex-col gap-1.5 p-2 bg-yellow-500 rounded-full w-10 h-10 items-center justify-center shadow-md"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <motion.div
            animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 4 : 0 }}
            className="w-5 h-0.5 bg-white"
          />
          <motion.div
            animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -4 : 0 }}
            className="w-5 h-0.5 bg-white"
          />
        </button>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
            className="sm:hidden fixed inset-0 z-[90] bg-white flex flex-col justify-between pt-28 pb-12 px-8"
          >
            {/* Nav Links */}
            <div className="flex flex-col gap-6">
              <p className="text-xs font-bold uppercase tracking-widest text-yellow-500">
                Navigation
              </p>

              {navItems.map((item, i) => (
                <div key={item} className="overflow-hidden">
                  <motion.div
                    initial={{ y: 80 }}
                    animate={{ y: 0 }}
                    exit={{ y: 80 }}
                    transition={{ delay: i * 0.05, duration: 0.6 }}
                  >
                    <Link
                      to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                      className={`text-5xl font-black uppercase tracking-tighter block ${
                        isActive(item) ? "text-yellow-500" : "text-neutral-800"
                      }`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {item}
                    </Link>
                  </motion.div>
                </div>
              ))}
            </div>

            {/* Social */}
            <div className="border-t border-neutral-100 pt-8">
              <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4">
                Connect
              </p>

              <div className="flex flex-wrap gap-x-8 gap-y-2">
                {socials.map((link, i) => (
                  <motion.a
                    key={link}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    href="#"
                    className="text-lg font-medium text-neutral-600 hover:text-yellow-500 transition-colors"
                  >
                    {link}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;