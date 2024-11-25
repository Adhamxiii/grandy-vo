"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants = {
    hidden: { opacity: 0, x: "-100%" },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <nav className="absolute w-full z-50 px-6 py-4">
      <div className="container mx-auto flex justify-between items-center h-12">
        <Link href="/" className="text-2xl font-bold text-white">
          <Image
            src="/logonav.png"
            width={200}
            height={100}
            alt="logo"
            className="object-cover max-md:w-[150px]"
          />
        </Link>
        <div className="space-x-8 hidden md:flex">
          <Link href="/" className="nav-link">
            Home
          </Link>
          <Link href="/projects" className="nav-link">
            Projects
          </Link>
        </div>
        <div className="space-x-8 flex md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <Menu className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
            transition={{ duration: 0.5 }}
            className="absolute top-0 left-0 w-full h-screen bg-black text-white flex flex-col items-center justify-center space-y-6 z-40"
          >
            <button
              onClick={toggleMenu}
              className="absolute top-6 right-6 focus:outline-none"
            >
              <X className="w-8 h-8 text-white hover:text-gray-400 transition-colors" />
            </button>

            <Link
              href="/"
              className="text-2xl font-bold"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/projects"
              className="text-2xl font-bold"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Header;
