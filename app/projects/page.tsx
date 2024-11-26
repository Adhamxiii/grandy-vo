import Projects from "@/components/Projects";
import { Axios } from "@/lib/axios";

const ProjectsPage = async () => {
  const about = await Axios.get("/about");
  const projects = await Axios.get("/projects");
  return <Projects about={about.data} projects={projects.data} />;
};

export default ProjectsPage;
