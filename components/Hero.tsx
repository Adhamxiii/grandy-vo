"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { Mic } from "lucide-react";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.4, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.section
      className="relative h-screen max-md:h-auto max-md:py-20 flex items-center justify-center bg-gradient-to-br from-indigo-900 to-purple-900"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <motion.div
          className="md:w-1/2 text-white space-y-6 text-center md:text-left"
          variants={containerVariants}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold leading-tight"
            variants={itemVariants}
          >
            Bringing Your Words to Life with My Voice
          </motion.h1>
          <motion.h2
            className="text-xl md:text-2xl text-purple-200"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.span variants={itemVariants}>Commercials</motion.span> •{" "}
            <motion.span variants={itemVariants}>Narration</motion.span> •{" "}
            <motion.span variants={itemVariants}>Animation</motion.span>
          </motion.h2>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            variants={itemVariants}
          >
            <button
              onClick={() => scrollToSection("portfolio")}
              className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-full transition-colors flex items-center justify-center"
            >
              <Mic className="mr-2 h-5 w-5" />
              Listen to My Work
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-3 bg-transparent border-2 border-purple-400 hover:bg-purple-800 rounded-full transition-colors"
            >
              Contact Me
            </button>
          </motion.div>
        </motion.div>

        <div className="md:w-1/2 mt-8 md:mt-0">
          <div className="relative w-72 h-72 mx-auto">
            <motion.div
              className="absolute inset-0 z-0 flex items-center justify-center"
              animate={{
                scale: [1, 1.2, 1.4, 1.5, 1.4, 1.2, 1],
                opacity: [0.2, 0.4, 0.5, 0.4, 0.2, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                repeatType: "loop",
              }}
            >
              <div className="absolute w-full h-full bg-purple-400 rounded-full opacity-20"></div>
            </motion.div>
            <motion.div
              className="absolute inset-0 z-0 flex items-center justify-center"
              animate={{
                scale: [1, 1.1, 1.3, 1.4, 1.3, 1.1, 1],
                opacity: [0.1, 0.3, 0.4, 0.3, 0.1, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                repeatType: "loop",
                delay: 0.5,
              }}
            >
              <div className="absolute w-full h-full bg-purple-400/65 rounded-full opacity-60"></div>
            </motion.div>
            <motion.div
              className="absolute inset-0 z-0 flex items-center justify-center"
              animate={{
                scale: [1, 1.05, 1.2, 1.3, 1.2, 1.05, 1],
                opacity: [0.05, 0.2, 0.3, 0.2, 0.05, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                repeatType: "loop",
                delay: 1,
              }}
            >
              <div className="absolute w-full h-full bg-purple-400 rounded-full opacity-20"></div>
            </motion.div>
            <motion.div
              className="relative w-full h-full rounded-full bg-purple-600 overflow-hidden z-10"
              variants={imageVariants}
            >
              <Image
                src={`/logo.png`}
                alt="logo"
                fill
                className="object-cover rounded-full"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
