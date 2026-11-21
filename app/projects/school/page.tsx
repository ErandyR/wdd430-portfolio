
export default function SchoolProjectsPage() {
    return (
        <div className="flex flex-col gap-6">

            <header>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    School Projects
                </h2>

                <p className="mt-2 text-gray-600 dark:text-gray-300">
                    This section showcases projects developed as part of
                    my Software Development studies. These projects have
                    helped me strengthen my programming skills, understand
                    software architecture, and gain practical experience
                    working with different technologies.
                </p>
            </header>

            {/* Wellness Habit Tracker API */}
            <article className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">

                <h3 className="text-xl font-bold text-brand">
                    Wellness Habit Tracker API
                </h3>

                <p className="mt-3 text-gray-600 dark:text-gray-300">
                    A RESTful API designed to help users manage and track
                    their wellness habits. This project focuses on backend
                    development, database integration, authentication,
                    and API documentation.
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                    <span className="rounded-full bg-purple-100 px-3 py-1 text-sm text-purple-800">
                        Node.js
                    </span>
                    <span className="rounded-full bg-purple-100 px-3 py-1 text-sm text-purple-800">
                        Express
                    </span>
                    <span className="rounded-full bg-purple-100 px-3 py-1 text-sm text-purple-800">
                        MongoDB
                    </span>
                    <span className="rounded-full bg-purple-100 px-3 py-1 text-sm text-purple-800">
                        JavaScript
                    </span>
                </div>

                <a
                    href="https://github.com/ErandyR/wellness-habit-tracker-api"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-block font-semibold text-blue-600 hover:underline"
                >
                    View on GitHub →
                </a>

            </article>

        </div>
    );
}
