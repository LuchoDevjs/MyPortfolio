import { About } from "@/components/About";
import { Education } from "@/components/Education";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <>
      <div className="max-w-8xl mx-auto p-5">
        <Navbar />
        <About />
        <Services />
        <Education />
        <Projects />
      </div>
      <Footer />
    </>
  );
}
