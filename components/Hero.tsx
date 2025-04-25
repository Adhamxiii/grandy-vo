"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Mic } from "lucide-react";

const Hero = ({ image }: { image: string }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative h-screen max-md:h-auto max-md:py-20 flex items-center justify-center bg-gradient-to-br from-indigo-900 to-purple-900"
      id="hero"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-white space-y-6 text-center md:text-left">
          {isClient ? (
            <motion.div
              className="space-y-6"
              initial="hidden"
              animate="visible"
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
                  onClick={() => scrollToSection("contact")}
                  className="px-8 py-3 bg-transparent border-2 border-purple-400 hover:bg-purple-800 rounded-full transition-colors"
                >
                  Contact Me
                </button>
              </motion.div>
            </motion.div>
          ) : (
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Bringing Your Words to Life with My Voice
              </h1>
              <h2 className="text-xl md:text-2xl text-purple-200">
                <span>Commercials</span> • <span>Narration</span> •{" "}
                <span>Animation</span>
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button
                  onClick={() => scrollToSection("portfolio")}
                  className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-full transition-colors flex items-center justify-center"
                >
                  <Mic className="mr-2 h-5 w-5" />
                  Listen to My Work
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="px-8 py-3 bg-transparent border-2 border-purple-400 hover:bg-purple-800 rounded-full transition-colors"
                >
                  Contact Me
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="md:w-1/2 mt-8 md:mt-0">
          <div className="relative w-72 h-72 mx-auto">
            {isClient && (
              <>
                <motion.div
                  className="absolute inset-0 z-0 flex items-center justify-center"
                  animate={{
                    scale: [1, 1.1, 1.2, 1.1, 1],
                    opacity: [0.2, 0.3, 0.2],
                  }}
                  transition={{
                    duration: 3,
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
                    scale: [1, 1.05, 1.1, 1.05, 1],
                    opacity: [0.1, 0.2, 0.1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    repeatType: "loop",
                    delay: 0.5,
                  }}
                >
                  <div className="absolute w-full h-full bg-purple-400/65 rounded-full opacity-60"></div>
                </motion.div>
              </>
            )}
            <div className="relative w-full h-full rounded-full bg-purple-600 overflow-hidden z-10">
              {isClient ? (
                <motion.div variants={imageVariants} initial="hidden" animate={isLoaded ? "visible" : "hidden"} className="w-full h-full">
                  <Image
                    src={image}
                    alt="Voice artist"
                    fill
                    className="object-cover rounded-full"
                    priority={true}
                    sizes="(max-width: 768px) 100vw, 288px"
                    onLoad={() => setIsLoaded(true)}
                  />
                </motion.div>
              ) : (
                <Image
                  src={image}
                  alt="logo"
                  fill
                  className="object-cover rounded-full"
                  priority 
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={80}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;