import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { FaUser, FaCode, FaLaptopCode, FaBriefcase } from 'react-icons/fa';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#hero', icon: FaUser },
    { name: 'Skills', href: '#skills', icon: FaCode },
    { name: 'Projects', href: '#projects', icon: FaLaptopCode },
    { name: 'Experience', href: '#experience', icon: FaBriefcase },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-dark/80 backdrop-blur-md py-4' : 'bg-transparent py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-xl font-bold font-mono tracking-tighter">
          HD.
        </a>
        <ul className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Bottom Navbar */}
        <div className="fixed bottom-0 left-0 right-0 md:hidden z-50">
          <div className="bg-black/90 backdrop-blur-md border-t border-white/10 px-6 py-3 flex justify-around items-center">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex flex-col items-center justify-center text-gray-400 hover:text-white transition-colors gap-1 group"
                >
                  <Icon className="text-xl group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] font-medium opacity-0 group-hover:opacity-100 transition-opacity absolute -top-8 bg-black/80 px-2 py-1 rounded border border-white/10">{link.name}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
