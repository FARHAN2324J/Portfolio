import { About } from "@/components/landing/sections/About";
import { Books } from "@/components/landing/sections/Books";
import { Hero } from "@/components/landing/sections/Hero";
import { HowIWork } from "@/components/landing/sections/HowIWork";
import { Projects } from "@/components/landing/sections/Projects";
import { WhatIBuildWith } from "@/components/landing/sections/WhatIBuildWith";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
      <Hero />
      <About />
      <Projects />
      <WhatIBuildWith />
      <HowIWork />
      <Books />
    </main>
  );
}