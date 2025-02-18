"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Moon, Sun, Menu, X, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { items } = useSelector((state: RootState) => state.cart);
  const itemCount = items.reduce((total, item) => total + item.quantity, 0);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    // Update body class for dark mode
    document.documentElement.classList.toggle("dark");
  };

  return (
    <>
      <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xl font-bold"
            >
              <Link href="/">MarkShark INTERIORS</Link>
            </motion.div>

            <div className="hidden md:flex space-x-8">
              {[
                "Home",
                "About",
                "Services",
                "Shop",
                "Collections",
                "Contact",
              ].map((item) => (
                <motion.div key={item} whileHover={{ scale: 1.05 }}>
                  <Link
                    href={`/${
                      item.toLowerCase() === "home" ? "" : item.toLowerCase()
                    }`}
                    className="hover:text-cyan-500 transition-colors"
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2"
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.button>

              <Link href="/cart">
                <Button variant="ghost" size="icon" className="relative">
                  <ShoppingCart
                    className={`h-5 w-5 ${
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  />
                  {itemCount > 0 && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -top-2 -right-2 bg-cyan-700 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
                    >
                      {itemCount}
                    </motion.div>
                  )}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isMenuOpen ? "auto" : 0,
          opacity: isMenuOpen ? 1 : 0,
        }}
        className="md:hidden overflow-hidden fixed w-full bg-white 
        dark:bg-gray-900 z-40 top-16"
      >
        <div className="px-4 py-2">
          {["Home", "Collections", "About", "Contact"].map((item) => (
            <Link
              key={item}
              href={`/${
                item.toLowerCase() === "home" ? "" : item.toLowerCase()
              }`}
              className="block py-2 hover:text-cyan-500"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
