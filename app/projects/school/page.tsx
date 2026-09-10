async function getProjects() {
    const res = await fetch(
        "http://localhost:3000/api/projects?type=school",
        {
            cache: "no-store",
        }
    );

    return res.json();
}

export default async function SchoolProjectsPage() {
    const projects = await getProjects();

    return (
        <main className="p-8">
            <h1 className="text-4xl font-bold mb-6">
                School Projects
            </h1>

            {projects.map((project: any) => (
                <div key={project.id} className="mb-6">
                    <h2 className="text-2xl font-semibold">
                        {project.title}
                    </h2>

                    <p>{project.description}</p>
                </div>
            ))}
        </main>
    );
}