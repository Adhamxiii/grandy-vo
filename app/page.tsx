import { About } from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";

import { SocialNavbar } from "@/components/SocialNavbar";
import { Axios } from "@/lib/axios";

export default async function Home() {
  const about = await Axios.get("/about");
  const projects = await Axios.get("/projects");

  console.log(about.data);

  return (
    <main className="min-h-screen max-w-screen overflow-hidden bg-black">
      <Hero image={about.data.imageUrl} />
      <SocialNavbar />
      <About about={about.data} />
      <Portfolio projects={projects.data} />
      <Contact />
      <Footer />
    </main>
  );
}
