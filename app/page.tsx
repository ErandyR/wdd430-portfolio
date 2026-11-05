import Image from "next/image";
import ProjectList from '@/components/ProjectList';
const projects = [
  {
    title: 'Wellness Habit Tracker API',
    description: 'A RESTful API designed to manage wellness habits and track personal progress. It provides CRUD operations for users, habits, progress records, and journal entries, with secure authentication and interactive API documentation.',
    technologies: ['Node.js', 'Express 5', 'MongoDB', 'JWT', 'Passport.js', 'GitHub OAuth', 'Swagger', 'Jest', 'Supertest'],
    link: 'https://github.com/ErandyR/wellness-habit-tracker-api'
  },
  {
    title: 'MandarinMe – Mandarin Learning Platform',
    description: "A web application designed to help self-taught Mandarin learners study from HSK 1 to HSK 3, featuring vocabulary practice, flashcards, a dictionary, and interactive learning tools.",
    technologies: [
      "JavaScript",
      "Vite",
      "Bootstrap 5",
      "Sass",
      "Node.js",
      "Express",
      "OpenAI API",
      "ElevenLabs API",
      "Web Speech API",
    ],
    link: 'https://github.com/ErandyR/MandarinMe',
    demoLink: 'https://mandarinme.netlify.app/'
  }
];

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <section className="text-center py-12">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            My Portfolio
          </h1>
          <p className="text-lg text-gray-700">
            I'm a full-stack developer learning Next.js and React. Here are some of my recent projects.
          </p>
        </section>
        <ProjectList projects={projects} />
      </main>
    </div>
  );
}
