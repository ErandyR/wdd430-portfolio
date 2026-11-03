
interface SkillCardProps {
  title: string;
  description: string;
  skills: string[];
}

export default function SkillCard({
  title,
  description,
  skills,
}: SkillCardProps) {
  return (
    <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <h3 className="mb-2 text-xl font-bold text-gray-900">
        {title}
      </h3>

      <p className="mb-4 text-gray-600">
        {description}
      </p>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
