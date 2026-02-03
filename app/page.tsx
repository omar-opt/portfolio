import Hero from "../components/pageComp/Hero";
import BlurFad from "../components/pageComp/BlurFad";
import AboutMe from "../components/pageComp/AboutMe";
import Experience from "../components/pageComp/Experience";
import Skills from "../components/pageComp/Skills";
import Projects from "../components/pageComp/Projects";
import Solve from "@/components/pageComp/Solve";
import Footer from "@/components/pageComp/Footer";
const sections = [Hero, BlurFad, AboutMe, Experience, Skills, Projects, Solve];

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-center relative text-wrap gap-y-5 sm:gap-y-16">
      {sections.map((Section, index) => (
        <Section key={index} />
      ))}
      <Footer />
    </div>
  );
}
