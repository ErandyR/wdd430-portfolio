import Link from "next/link";

export default function ProjectsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section className="p-6">
            <h2 className="text-2xl font-semibold mb-4">
                Projects Navigation
            </h2>

            <nav className="flex gap-6 mb-8">
                <Link href="/projects">Overview</Link>

                <Link href="/projects/opensource">
                    Open Source
                </Link>

                <Link href="/projects/school">
                    School Projects
                </Link>
            </nav>

            {children}
        </section>
    );
}