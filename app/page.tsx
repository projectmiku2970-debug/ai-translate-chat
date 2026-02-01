import Hero from "./Hero";
import Profile from "./profile";
import Skills from "./Skills";
import Projects from "./Projects";
import Values from "./Values";
import Links from "./Links";

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12 space-y-20">
      <Hero />
      <Profile />
      <Skills />
      <Projects />
      <Values />
      <Links />
    </main>
  );
}
