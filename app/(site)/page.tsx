import { About } from "@/components/sections/About";
import { Hero } from "@/components/sections/Hero";
import { HowIWork } from "@/components/sections/HowIWork";
import { Projects } from "@/components/sections/Projects";
import { WhatIBuildWith } from "@/components/sections/WhatIBuildWith";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
      <Hero />
      <About />
      <Projects />
      <WhatIBuildWith />
      <HowIWork />
    </main>
  );
}