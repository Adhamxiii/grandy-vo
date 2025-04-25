import { About } from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import { SocialNavbar } from "@/components/SocialNavbar";
import { getAbout, getProjects } from "@/lib/actions";


export interface AboutData {
  clients: number;
  content: string;
  createdAt: string;
  id: string;
  imageUrl: string;
  imageUrl2: string;
  language: number;
  voiceStyles: number;
}

export interface ProjectData {
  createdAt: string;
  description: string;
  duration: string;
  id: string;
  title: string;
  videoUrl: string;
}

export const revalidate = 600;

export default async function Home() {
  const [aboutData, projectsData] = await Promise.all([
    getAbout(),
    getProjects()
  ]);

  return (
    <main className="min-h-screen max-w-screen overflow-hidden bg-gradient-to-br from-indigo-900 to-purple-900">
      <link
        rel="preload"
        href={aboutData?.imageUrl || "/logo.png"}
        as="image"
        fetchPriority="high"
      />
      <Hero image={aboutData?.imageUrl || "/logo.png"} />
      <SocialNavbar />
      {aboutData && <About about={{ imageUrl2: aboutData.imageUrl2, content: aboutData.content }} />}
      <Portfolio projects={projectsData} />
      <Contact />
      <Footer />
    </main>
  );
}
