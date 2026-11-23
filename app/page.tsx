
import { Suspense } from 'react';
import ProjectList from '@/components/ProjectList';
import { getProjects } from '@/lib/projects-db';

async function Projects() {
  const projects = await getProjects();

  return <ProjectList projects={projects} />;
}

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

        <Suspense fallback={<p>Loading projects...</p>}>
          <Projects />
        </Suspense>
      </main>
    </div>
  );
}
