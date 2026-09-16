import { Card } from "@/components/ui/Card";
import { Description } from "@/components/ui/Description";
import { Title } from "@/components/ui/Title";

const workPrinciples = [
  {
    title: "I care about the work.",
    description:
      "Finishing a project is not the only thing that matters to me. I care about the quality of what gets built.",
  },
  {
    title: "I respect your time and budget.",
    description:
      "Your time and budget are part of the problem, not something separate from the development process.",
  },
  {
    title: "I build for maintainability.",
    description:
      "I care about architecture, clean code, reusable components, and building a structure that can be extended over time.",
  },
  {
    title: "I keep learning.",
    description:
      "I study open-source projects, read code, and keep looking for better ways to build.",
  },
];

export function HowIWork() {
  return (
    <section
      aria-labelledby="how-i-work-title"
      className="mt-20"
    >
      <Title id="how-i-work-title" as="h2" className="text-xl">
        How I work
      </Title>

      <div className="mt-6 space-y-9">
        {workPrinciples.map((principle) => (
          <Card
            key={principle.title}
            className="rounded-none border-y-0 border-r-0 border-l-2 border-border px-3 bg-transparent"
          >
            <Title as="h3" className="text-[18px]">
              {principle.title}
            </Title>

            <Description className="mt-3.5 text-base font-medium leading-6">
              {principle.description}
            </Description>
          </Card>
        ))}
      </div>
    </section>
  );
}
