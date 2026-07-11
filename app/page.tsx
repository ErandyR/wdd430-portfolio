import ProjectList from '@/components/ProjectList';
const projects = [
  {
    title: 'MandarinMe',
    description: 'MandarinMe is a web application designed to support self-taught Mandarin learners through the HSK1-HSK3 levels.',
    technologies: ['JavaScript', 'APIs', 'SCSS', 'Vite'],
    link: 'https://github.com/ErandyR/MandarinMe'
  },
  {
    title: 'Nanys Wellness',
    description: 'A wellness website for Nanys Wellness, provides dynamic genereted prompts for users to create their own wellness plans.',
    technologies: ['APIs', 'JavaScript', 'CSS'],
    link: 'https://erandyr.github.io/wdd231/final/index.html'
  }
];

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">My Portfolio</h1>
        <p className="text-lg text-gray-700">
          I'm a full-stack developer learning Next.js and React. Here are some of my recent projects.
        </p>
      </section>
      <ProjectList projects={projects} />
    </main>
  );
}