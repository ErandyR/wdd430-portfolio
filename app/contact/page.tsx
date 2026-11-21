export default function ContactPage() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
                <section className="text-center py-12">
                    <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
                        Contact Me
                    </h1>
                    <p className="text-lg text-gray-700">
                        If you would like to get in touch, please feel free to reach out via email or connect with me on LinkedIn.
                    </p>
                </section>
                <section className="text-center py-12">
                    <h2 className="max-w-xs text-2xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
                        Email
                    </h2>
                    <p className="text-lg text-gray-700">
                        You can reach me at: <a href="mailto:rerandy15@gmail.com" className="text-blue-600 hover:underline">
                            rerandy15@gmail.com
                        </a>
                    </p>
                </section>
                <section className="text-center py-12">
                    <h2 className="max-w-xs text-2xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
                        LinkedIn
                    </h2>
                    <p className="text-lg text-gray-700">
                        Connect with me on LinkedIn: <a href="https://www.linkedin.com/in/erandy-ramirez/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                            Erandy Ramirez
                        </a>
                    </p>
                </section>
            </main>
        </div>
    );
}   