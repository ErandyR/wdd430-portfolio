
import Link from "next/link";

export default function ProjectsLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <section className="min-h-screen w-full p-8">

            {/* Projects section heading */}
            <header className="mb-6">
                <h1 className="text-3xl font-bold text-brand">
                    My Projects
                </h1>

                <p className="mt-2 text-gray-600">
                    Explore my development projects.
                </p>
            </header>

            {/* Projects navigation */}
            <nav className="mb-8 flex gap-6 border-b pb-4">
                <Link
                    href="/projects"
                    className="font-medium text-blue-600 hover:text-blue-800"
                >
                    All Projects
                </Link>

                <Link
                    href="/projects/settings"
                    className="font-medium text-blue-600 hover:text-blue-800"
                >
                    Settings
                </Link>
            </nav>

            {/* Child pages will render here */}
            <main>
                {children}
            </main>

        </section>
    );
}
