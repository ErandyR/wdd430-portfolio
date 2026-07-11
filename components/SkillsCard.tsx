interface SkillsCardProps {
    title: string;
    skills: string[];
}

export default function SkillsCard({
    title,
    skills,
}: SkillsCardProps) {
    return (
        <div className="rounded-xl border border-gray-300 bg-white p-6 shadow-md">
            <h2 className="mb-4 text-2xl font-bold text-blue-700">
                {title}
            </h2>

            <ul className="list-disc space-y-2 pl-5">
                {skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                ))}
            </ul>
        </div>
    );
}