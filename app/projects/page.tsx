async function getProjects() {
    const res = await fetch("http://localhost:3000/api/projects", {
        cache: "no-store",
    });

    return res.json();
}

export default async function ProjectsPage() {
    const projects = await getProjects();

    return (
        <main className="max-w-5xl mx-auto p-8">
            <h1 className="text-4xl font-bold mb-6">
                Projects Overview
            </h1>

            <ul className="space-y-6">
                {projects.map((project: any) => (
                    <li
                        key={project.id}
                        className="border rounded-lg p-6 shadow"
                    >
                        <h2 className="text-2xl font-semibold">
                            {project.title}
                        </h2>

                        <p>{project.description}</p>

                        <p className="mt-2">
                            <strong>Technologies:</strong>{" "}
                            {project.technologies.join(", ")}
                        </p>
                    </li>
                ))}
            </ul>
        </main>
    );
}