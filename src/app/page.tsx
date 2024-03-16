import { About } from "@/components/About";
import { Education } from "@/components/Education";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ProjectCarousel } from "@/components/Projects";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <>
      <div className="max-w-8xl mx-auto p-5">
        <Navbar />
        <About />
        <Services />
        <Education />
        <ProjectCarousel />
      </div>
      <Footer />
    </>
  );
}
