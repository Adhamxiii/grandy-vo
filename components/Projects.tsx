"use client";

import { motion } from "framer-motion";
import { Clock, Play, Search } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface Project {
  createdAt: string;
  description: string;
  duration: string;
  id: string;
  title: string;
  videoUrl: string;
}

const Projects = ({
  about,
  projects,
}: {
  about: {
    clients: number;
    content: string;
    createdAt: string;
    id: string;
    imageUrl: string;
    imageUrl2: string;
    language: number;
    voiceStyles: number;
  };
  projects: Project[];
}) => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");

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

  const filteredProjects = projects.filter(
    (project: Project) =>
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-black bg-gradient-to-b from-purple-900/20 via-purple-950 to-black text-white relative">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto px-4 py-20 z-[2]"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6">My Portfolio</h1>
        <h2 className="text-xl text-purple-200 max-w-2xl">
          Explore my diverse range of voice-over projects spanning commercials,
          animation, corporate narration, and more.
        </h2>
      </motion.div>

      <div className="container mx-auto px-4 mb-12">
        <div className="flex flex-col md:flex-row gap-6 items-stretch md:items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="relative flex-1"
          >
            <Search
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search projects..."
              className="w-full bg-purple-900/30 border border-purple-700/50 rounded-full py-3 pl-12 pr-6 focus:outline-none focus:border-purple-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects?.map((item: Project, i: number) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-2xl transform group-hover:scale-105 transition-transform duration-300" />
              <div className="relative bg-black/40 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-colors justify-self-stretch max-h-[700px]">
                <div className="aspect-video relative">
                  <Image
                    priority
                    src={`https://img.youtube.com/vi/${item.videoUrl}/hqdefault.jpg`}
                    alt={item.title}
                    fill
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={() => handlePlay(item.videoUrl)}
                      className="p-4 bg-purple-500 rounded-full text-white transform hover:scale-110 transition-transform duration-300"
                      aria-label="Play"
                    >
                      <Play className="w-6 h-6" />
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <div className="flex gap-4 text-sm text-purple-300 mb-4">
                    <div className="flex items-center gap-1">
                      <Clock size={16} />
                      <span>{item.duration}</span>
                    </div>
                  </div>
                  <p className="text-purple-200 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {activeVideo && (
          <div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            onClick={handleOverlayClick}
          >
            <div className="relative w-full max-w-7xl h-[80%] aspect-video">
              <iframe
                loading="lazy"
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="w-full h-full rounded-lg"
                title="YouTube video player"
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

        {/* <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="mt-12 mx-auto block bg-purple-900/30 border border-purple-700/50 px-8 py-3 rounded-full hover:bg-purple-800/50"
        >
          Load More Projects
        </motion.button> */}
      </div>

      <div className="container mx-auto px-4 py-20 border-t border-purple-800/30">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { label: "Total Projects", value: projects.length },
            { label: "Happy Clients", value: about.clients },
            { label: "Voice Styles", value: about.voiceStyles },
            { label: "Languages", value: about.language },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="bg-purple-900/30 rounded-3xl p-6"
            >
              <h4 className="text-3xl font-bold mb-2">{stat.value}</h4>
              <p className="text-purple-300">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
