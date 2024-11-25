"use client";

import { motion } from "framer-motion";

import { Building2, Mic2, Radio, Trophy } from "lucide-react";
import { AudioVisualizer } from "./AudioVisualizer";

const achievements = [
  {
    icon: Radio,
    title: "Versatile Vocal Range",
    description: "Adapts to diverse tones with ease.",
    color: "bg-purple-500",
  },
  {
    icon: Trophy,
    title: "Early Recognition",
    description:
      "Gained praise for standout performances in local ad campaigns and short films.",
    color: "bg-cyan-500",
  },
  {
    icon: Building2,
    title: "Client-Focused Approach",
    description:
      "Known for a collaborative attitude and commitment to exceeding expectations.",
    color: "bg-pink-500",
  },
];

export function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen bg-gradient-to-br from-purple-900 via-black to-purple-900 py-24 px-4"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,0,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(6,182,212,0.1),transparent_50%)]" />
      </div>

      <div className="container mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <div className="relative">
              <AudioVisualizer />
              <motion.div
                className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-cyan-500 p-1 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="bg-black/50 text-white px-4 py-1 rounded-lg flex items-center">
                  <Mic2 className="w-4 h-4 mr-2 shrink-0" />
                  <span className="text-sm font-medium">
                    Professional Voice Artist
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="h-px bg-gradient-to-r from-purple-500 via-cyan-500 to-transparent mb-8"
              />
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold text-white mb-6"
              >
                About Me
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="text-lg text-gray-300"
              >
                Hi, I&apos;m Omar Grandy, a passionate and driven voice-over
                artist ready to make an impact in the industry. Specializing in
                commercials, corporate narration, and character voices, I bring
                energy and authenticity to every project. While I&apos;m at the
                start of my journey, my commitment to quality and storytelling
                shines through in my work.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-xl font-semibold text-white mb-4">
                Notable Highlights
              </h3>
              <div className="grid gap-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * (index + 1) }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-black/40 border border-gray-800 rounded-lg p-4 flex items-center gap-4 hover:bg-black/60 transition-colors glass">
                      <div className={`p-2 rounded-lg ${achievement.color}`}>
                        <achievement.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-medium text-white">
                          {achievement.title}
                        </h4>
                        <p className="text-sm text-gray-400">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
