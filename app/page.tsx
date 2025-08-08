import AboutMe from "../components/pageComp/AboutMe";
import BlurFad from "../components/pageComp/BlurFad";
import Experience from "../components/pageComp/Experience";
import Hero from "../components/pageComp/Hero";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-center text-wrap  gap-y-5 sm:gap-y-16">
      {" "}
      <Hero />
      <BlurFad />
      <AboutMe />
      <Experience />
    </div>
  );
}
