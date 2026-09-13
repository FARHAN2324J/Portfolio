import { Description } from "@/components/ui/Description";
import { Title } from "@/components/ui/Title";
import { WhatIWorkWith } from "./WhatIWorkWith";
import { HowIWork } from "./HowIWork";

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="mt-20 sm:mt-24"
    >
      <Title id="about-title" as="h2" className="text-xl">
        About me
      </Title>

      <Description className="mt-4 max-w-2xl text-lg leading-6">
        I’m a frontend developer focused on building modern, responsive, and
        accessible websites. I care about clean code, thoughtful user
        experiences, and turning ideas into simple and effective digital
        products.
      </Description>
      <WhatIWorkWith />
      <HowIWork />
    </section>
  );
}