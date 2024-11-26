"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";


const Portfolio = ({
  projects,
}: {
  projects: { id: string; title: string; videoUrl: string }[];
}) => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  useEffect(() => {
    if (activeVideo) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [activeVideo]);

  const handlePlay = (videoId: string) => {
    setActiveVideo(videoId);
  };

  const handleClose = () => {
    setActiveVideo(null);
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setActiveVideo(null);
    }
  };

  return (
    <section
      id="portfolio"
      className="relative min-h-screen bg-gradient-to-br from-black via-purple-900/20 to-black py-24 px-4"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,0,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(6,182,212,0.1),transparent_50%)]" />
      </div>

      <div className="container mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Portfolio
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-stretch gap-8 max-w-6xl mx-auto">
          {projects.slice(0, 3).map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-2xl transform group-hover:scale-105 transition-transform duration-300" />
              <div className="relative bg-black/40 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-colors justify-self-stretch h-[300px]">
                <div className="aspect-video relative">
                  <Image
                    src={`https://img.youtube.com/vi/${item.videoUrl}/hqdefault.jpg`}
                    alt={item.title}
                    fill
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={() => handlePlay(item.videoUrl)}
                      className="p-4 bg-purple-500 rounded-full text-white transform hover:scale-110 transition-transform duration-300"
                    >
                      <Play className="w-6 h-6" />
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-white text-center">
                    {item.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {activeVideo && (
          <div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            onClick={handleOverlayClick} // Close when clicking outside the modal
          >
            <div className="relative w-full max-w-7xl h-[80%] aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="w-full h-full rounded-lg"
              ></iframe>
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-white hover:text-purple-500"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
