import Projects from "@/components/Projects";
import { getAbout, getProjects } from "@/lib/actions";

const ProjectsPage = async () => {
  const [aboutData, projectsData] = await Promise.all([
    getAbout(),
    getProjects(),
  ]);

  return <Projects about={aboutData} projects={projectsData} />;
};

export default ProjectsPage;