import fs from "fs";
import path from "path";
import matter from "gray-matter";

const projectsDirectory = path.join(process.cwd(), "data/projects");

export interface Project {
    slug: string;
    title: string;
    description: string;
    image: string;
    skills: string[];
    featured: boolean;
    date: string;
    content: string;
}

export function getAllProjects(): Project[] {
    // Create directory if it doesn't exist
    if (!fs.existsSync(projectsDirectory)) {
        return [];
    }

    const fileNames = fs.readdirSync(projectsDirectory);
    const allProjectsData = fileNames.map((fileName) => {
        const slug = fileName.replace(/\.md$/, "");
        const fullPath = path.join(projectsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");

        const { data, content } = matter(fileContents);

        return {
            slug,
            title: data.title || "Untitled",
            description: data.description || "",
            image: data.image || "",
            skills: data.skills || [],
            featured: data.featured || false,
            date: data.date || "",
            content,
        };
    });

    // Sort projects by date
    return allProjectsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}

export function getFeaturedProjects(): Project[] {
    const allProjects = getAllProjects();
    return allProjects.filter((project) => project.featured);
}

export function getProjectBySlug(slug: string): Project | null {
    const fullPath = path.join(projectsDirectory, `${slug}.md`);

    if (!fs.existsSync(fullPath)) {
        return null;
    }

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
        slug,
        title: data.title || "Untitled",
        description: data.description || "",
        image: data.image || "",
        skills: data.skills || [],
        featured: data.featured || false,
        date: data.date || "",
        content,
    };
}
