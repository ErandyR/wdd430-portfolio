import { sql } from "@vercel/postgres";

export interface Project {
    id: number;
    title: string;
    description: string;
    type: "opensource" | "school";
    technologies: string[];
    link: string | null;
    demo_link: string | null;
}

// Retrieve all projects
export async function getProjects(): Promise<Project[]> {
    const { rows } = await sql<Project>`
    SELECT *
    FROM projects
    ORDER BY id ASC
  `;

    return rows;
}

// Retrieve projects by type
export async function getProjectsByType(
    type: Project["type"]
): Promise<Project[]> {
    const { rows } = await sql<Project>`
    SELECT *
    FROM projects
    WHERE type = ${type}
    ORDER BY id ASC
  `;

    return rows;
}

// Retrieve a single project by ID
export async function getProjectById(
    id: number
): Promise<Project | null> {
    const { rows } = await sql<Project>`
    SELECT *
    FROM projects
    WHERE id = ${id}
    LIMIT 1
  `;

    return rows[0] ?? null;
}