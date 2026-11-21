
export default function OpenSourcePage() {
    return (
        <div className="flex flex-col gap-6">

            <header>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Open Source Projects
                </h2>

                <p className="mt-2 text-gray-600 dark:text-gray-300">
                    Here are some of my personal projects, where I explore
                    new technologies, practice programming, and turn ideas
                    into functional applications.
                </p>
            </header>

            {/* MandarinMe Project */}
            <article className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">

                <h3 className="text-xl font-bold text-brand">
                    MandarinMe
                </h3>

                <p className="mt-3 text-gray-600 dark:text-gray-300">
                    MandarinMe is a language-learning application designed
                    to help beginners study Mandarin Chinese. It includes
                    vocabulary tools, flashcards, a dictionary, and a
                    phrasebook to support independent learning.
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800">
                        JavaScript
                    </span>
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800">
                        Vite
                    </span>
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800">
                        Bootstrap
                    </span>
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800">
                        Sass
                    </span>
                </div>

                <a
                    href="https://github.com/ErandyR/MandarinMe"
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
