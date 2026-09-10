// lib/projects-db.ts

export interface Project {
    id: number;
    title: string;
    description: string;
    type: "opensource" | "school";
    technologies: string[];
    link?: string;
}

export const projects: Project[] = [
    {
        id: 1,
        title: "MandarinMe",
        description:
            "A web application designed to help self-taught Mandarin learners through the HSK1-HSK3 levels.",
        type: "school",
        technologies: ["JavaScript", "APIs", "SCSS", "Vite"],
        link: "https://github.com/ErandyR/MandarinMe",
    },
    {
        id: 2,
        title: "Nanys Wellness",
        description:
            "A wellness web application that generates personalized wellness plans for users.",
        type: "school",
        technologies: ["JavaScript", "CSS", "APIs"],
        link: "https://erandyr.github.io/wdd231/final/index.html",
    },
    {
        id: 3,
        title: "Portfolio Website",
        description:
            "A personal portfolio built with Next.js and Tailwind CSS.",
        type: "opensource",
        technologies: ["Next.js", "React", "Tailwind CSS"],
        link: "https://github.com/ErandyR",
    },
];

export function getProjects(type?: string | null): Project[] {
    if (type) {
        return projects.filter((project) => project.type === type);
    }

    return projects;
}

export function getProjectById(id: number): Project | null {
    return projects.find((project) => project.id === id) ?? null;
}