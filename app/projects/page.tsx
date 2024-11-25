"use client";

import { motion } from "framer-motion";
import { Clock, Play, Search } from "lucide-react";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-black bg-gradient-to-b from-purple-900/20 via-purple-950 to-black text-white relative">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto px-4 py-20 z-[2]"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6">My Portfolio</h1>
        <p className="text-xl text-purple-200 max-w-2xl">
          Explore my diverse range of voice-over projects spanning commercials,
          animation, corporate narration, and more.
        </p>
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
            />
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 9 }).map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="group relative bg-purple-900/30 rounded-3xl overflow-hidden"
            >
              <div className="relative aspect-video">
                <img
                  src="/api/placeholder/600/400"
                  alt={`Project ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900 to-transparent opacity-60" />

                <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-purple-500 p-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <Play size={24} />
                </button>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  Voice Over Project {index + 1}
                </h3>
                <div className="flex gap-4 text-sm text-purple-300 mb-4">
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    <span>1:30</span>
                  </div>
                </div>
                <p className="text-purple-200 line-clamp-2">
                  A compelling voice-over for a national brand campaign that
                  required a professional and engaging tone.
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="mt-12 mx-auto block bg-purple-900/30 border border-purple-700/50 px-8 py-3 rounded-full hover:bg-purple-800/50"
        >
          Load More Projects
        </motion.button>
      </div>

      <div className="container mx-auto px-4 py-20 border-t border-purple-800/30">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { label: "Total Projects", value: "50+" },
            { label: "Happy Clients", value: "30+" },
            { label: "Voice Styles", value: "15+" },
            { label: "Languages", value: "2" },
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

export default ProjectsPage;
