"use client";

import Projects from "@/components/Projects";
import { Axios } from "@/lib/axios";
import { useEffect, useState } from "react";
import { AboutData, ProjectData } from "../page";

const ProjectsPage = () => {
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

  return aboutData && <Projects about={aboutData} projects={projectsData} />;
};

export default ProjectsPage;
