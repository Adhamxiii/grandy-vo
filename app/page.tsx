"use client";

import { useEffect, useState } from "react";
import { About } from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import { SocialNavbar } from "@/components/SocialNavbar";
import { Axios } from "@/lib/axios";

interface AboutData {
  clients: number;
  content: string;
  createdAt: string;
  id: string;
  imageUrl: string;
  imageUrl2: string;
  language: number;
  voiceStyles: number;
}

interface ProjectData {
  createdAt: string;
  description: string;
  duration: string;
  id: string;
  title: string;
  videoUrl: string;
}

export default function Home() {
  const [aboutData, setAboutData] = useState<AboutData>();
  const [projectsData, setProjectsData] = useState<ProjectData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [aboutRes, projectsRes] = await Promise.all([
          Axios.get("/about"),
          Axios.get("/projects"),
        ]);
        setAboutData(aboutRes.data);
        setProjectsData(projectsRes.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 to-purple-900">
        <div className="relative w-48 h-48">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="animate-spin rounded-full border-b-2 border-white h-48 w-48" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen max-w-screen overflow-hidden bg-gradient-to-br from-indigo-900 to-purple-900">
      <Hero image={aboutData?.imageUrl || "/logo.png"} />
      <SocialNavbar />
      {aboutData && <About about={{ imageUrl2: aboutData.imageUrl2, content: aboutData.content }} />}
      <Portfolio projects={projectsData} />
      <Contact />
      <Footer />
    </main>
  );
}
