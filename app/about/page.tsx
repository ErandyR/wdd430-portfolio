
import SkillCard from "@/components/SkillCard";

export default function About() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="mb-4 text-3xl font-bold text-gray-900">
        About Me
      </h1>

      <p className="mb-8 text-lg text-gray-600">
        I'm a software developer passionate about building
        useful applications and learning new technologies.
        My interests include web development, software
        engineering, and cloud computing.
      </p>

      <SkillCard
        title="Technical Skills"
        description="Technologies and tools I use to build modern web applications."
        skills={[
          "JavaScript",
          "TypeScript",
          "React",
          "Next.js",
          "HTML",
          "CSS",
          "Tailwind CSS",
          "Python",
          "SQL",
        ]}
      />
    </main>
  );
}
