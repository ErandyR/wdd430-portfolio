import SkillsCard from "@/components/SkillsCard";

export default function About() {
    return (
        <main className="max-w-4xl mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-lg text-gray-700">
                I am Erandy Ramirez, a passionate web developer with experience in building dynamic and responsive web applications. I enjoy learning new technologies and continuously improving my skills in front-end and back-end development.
            </p>
        </main>
    );
}

<SkillsCard
    title="Technical Skills"
    skills={[
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Tailwind CSS",
    ]}
/>