import { About } from "@/components/sections/About";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
      <Hero />
      <Projects />
      <About />
    </main>
  );
}