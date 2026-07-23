import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Home, Bot, Code2, Download, BookOpen, Mail } from 'lucide-react';
import JavaLogo from './JavaLogo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'AI Assistant', path: '/bytecode-ai', icon: Bot },
    { name: 'Code Examples', path: '/examples', icon: Code2 },
    { name: 'Setup Guide', path: '/downloads', icon: Download },
    { name: 'About', path: '/about', icon: BookOpen },
    { name: 'Contact', path: '/contact', icon: Mail },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu when navigating
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      <nav className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-[#0B0B0F]/85 backdrop-blur-md transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-[#FF0800] to-rose-600 shadow-lg shadow-[#FF0800]/25 group-hover:scale-105 transition-transform duration-300">
                <JavaLogo className="w-6.5 h-6.5" steamColor="#FFFFFF" cupColor="#FFFFFF" saucerColor="#FFFFFF" />
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-white group-hover:text-[#FF0800] transition-colors">
                  Byte<span className="text-[#FF0800]">Academy</span>
                </span>
                <span className="hidden sm:block text-[9px] font-medium text-zinc-400 tracking-wider uppercase">
                  Java Mastery
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <div className="flex gap-6">
                {navItems.map((item) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <Link
                      key={item.name}
                      to={item.path}
                      className={`relative py-2 text-sm font-semibold transition-colors duration-300 ${
                        isActive
                          ? 'text-[#FF0800]'
                          : 'text-zinc-300 hover:text-[#FF0800]'
                      }`}
                    >
                      {item.name}
                      {isActive && (
                        <motion.span
                          layoutId="activeNavLine"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF0800] rounded-full"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </Link>
                  );
                })}
              </div>

              {/* Start Learning CTA */}
              <div className="flex items-center gap-4 border-l border-zinc-800 pl-6">
                <Link
                  to="/learn-java"
                  className="px-4 py-2 text-xs font-bold tracking-wide uppercase bg-[#FF0800] hover:bg-rose-700 text-white rounded-xl shadow-md hover:shadow-lg hover:shadow-[#FF0800]/15 active:scale-95 transition-all cursor-pointer"
                >
                  Start Learning
                </Link>
              </div>
            </div>

            {/* Mobile Nav Button */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                onClick={toggleMenu}
                className="p-2 rounded-lg text-zinc-300 hover:bg-zinc-800 focus:outline-none cursor-pointer"
                aria-label="Toggle Menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Slide-down Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Blur Layer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-md md:hidden"
            />

            {/* Slide Down Drawer */}
            <motion.div
              initial={{ y: '-100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '-100%', opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-16 left-0 right-0 z-40 bg-[#0B0B0F] border-b border-zinc-800 shadow-2xl md:hidden px-6 py-8"
            >
              <div className="flex flex-col gap-4">
                {navItems.map((item, idx) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                    >
                      <Link
                        to={item.path}
                        className={`flex items-center gap-3 py-2 text-lg font-bold transition-colors group ${
                          isActive
                            ? 'text-[#FF0800]'
                            : 'text-zinc-200 hover:text-[#FF0800]'
                        }`}
                      >
                        <item.icon className={`w-5 h-5 transition-colors ${
                          isActive ? 'text-[#FF0800]' : 'text-zinc-400 group-hover:text-[#FF0800]'
                        }`} />
                        <span>{item.name}</span>
                      </Link>
                    </motion.div>
                  );
                })}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navItems.length * 0.05 }}
                  className="mt-4 pt-6 border-t border-zinc-800"
                >
                  <Link
                    to="/learn-java"
                    className="flex justify-center items-center w-full py-3 text-center text-sm font-bold tracking-wide uppercase bg-[#FF0800] hover:bg-rose-700 text-white rounded-xl shadow-lg shadow-[#FF0800]/25 transition-all"
                  >
                    Start Learning Now
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
