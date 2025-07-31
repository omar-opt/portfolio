import AboutMe from "../components/pageComp/AboutMe";
import Experience from "../components/pageComp/Experience";
import Hero from "../components/pageComp/Hero";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-center text-wrap">
      {" "}
      <Hero />
      <AboutMe />
      <Experience />
    </div>
  );
}
