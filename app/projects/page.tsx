
import Link from "next/link";

export default function ProjectsPage() {
    return (
        <div className="flex flex-col gap-8">

            {/* Page introduction */}
            <header>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Projects Overview
                </h2>

                <p className="mt-2 text-gray-600 dark:text-gray-300">
                    Welcome to my projects portfolio! Here you can explore
                    the applications and software projects I have developed
                    through personal learning and academic experiences.
                </p>
            </header>

            {/* Project categories */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">

                {/* Open Source Projects */}
                <Link
                    href="/projects/opensource"
                    className="rounded-xl border border-gray-200 bg-blue-50 p-6 shadow-sm transition hover:shadow-md dark:border-gray-700 dark:bg-gray-900"
                >
                    <h3 className="text-xl font-bold text-blue-700 dark:text-blue-400">
                        Open Source Projects
                    </h3>

                    <p className="mt-3 text-gray-700 dark:text-gray-300">
                        Explore my personal projects, experiments, and
                        contributions to open-source development.
                    </p>

                    <span className="mt-4 inline-block font-semibold text-blue-600">
                        Explore projects →
                    </span>
                </Link>

                {/* School Projects */}
                <Link
                    href="/projects/school"
                    className="rounded-xl border border-gray-200 bg-purple-50 p-6 shadow-sm transition hover:shadow-md dark:border-gray-700 dark:bg-gray-900"
                >
                    <h3 className="text-xl font-bold text-purple-700 dark:text-purple-400">
                        School Projects
                    </h3>

                    <p className="mt-3 text-gray-700 dark:text-gray-300">
                        Discover projects developed during my Software
                        Development studies, including coursework and
                        practical assignments.
                    </p>

                    <span className="mt-4 inline-block font-semibold text-purple-600">
                        Explore projects →
                    </span>
                </Link>

            </div>
        </div>
    );
}
