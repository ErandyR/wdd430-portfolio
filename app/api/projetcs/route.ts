
import { getProjects } from "@/lib/projects-db";

export async function GET() {
    try {
        const projects = await getProjects();

        return Response.json(projects);
    } catch (error) {
        console.error("Failed to fetch projects:", error);

        return Response.json(
            { error: "Failed to fetch projects" },
            { status: 500 }
        );
    }
}
