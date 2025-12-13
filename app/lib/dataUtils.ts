import fs from "fs";
import path from "path";
import matter from "gray-matter";

const PROJECTS_DIR = path.join(process.cwd(), "data/projects");
const BLOGS_DIR = path.join(process.cwd(), "data/blogs");

export interface ProjectData {
    slug: string;
    title: string;
    date: string;
    summary: string;
    tags: string[];
    skills: string[];
    image: string;
    featured: boolean;
    content: string;
}

export interface BlogData {
    slug: string;
    title: string;
    date: string;
    topic: string;
    summary: string;
    tags: string[];
    content: string;
}

export function getAllProjects(): ProjectData[] {
    if (!fs.existsSync(PROJECTS_DIR)) return [];

    const files = fs.readdirSync(PROJECTS_DIR);
    const projects = files.map((filename) => {
        const slug = filename.replace(/\.md$/, "");
        const fullPath = path.join(PROJECTS_DIR, filename);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data, content } = matter(fileContents);

        return {
            slug,
            title: data.title,
            date: data.date,
            summary: data.summary,
            tags: data.tags || [],
            skills: data.skills || [],
            image: data.image || "",
            featured: data.featured || false,
            content,
        };
    });

    return projects.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getProjectBySlug(slug: string): ProjectData | null {
    try {
        const fullPath = path.join(PROJECTS_DIR, `${slug}.md`);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data, content } = matter(fileContents);
        return {
            slug,
            title: data.title,
            date: data.date,
            summary: data.summary,
            tags: data.tags || [],
            skills: data.skills || [],
            image: data.image || "",
            featured: data.featured || false,
            content,
        };
    } catch (error) {
        return null;
    }
}

export function getAllBlogs(): BlogData[] {
    if (!fs.existsSync(BLOGS_DIR)) return [];

    const files = fs.readdirSync(BLOGS_DIR);
    const blogs = files.map((filename) => {
        const slug = filename.replace(/\.md$/, "");
        const fullPath = path.join(BLOGS_DIR, filename);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data, content } = matter(fileContents);

        return {
            slug,
            title: data.title,
            date: data.date,
            topic: data.topic || "",
            summary: data.summary,
            tags: data.tags || [],
            content,
        };
    });

    return blogs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogBySlug(slug: string): BlogData | null {
    try {
        const fullPath = path.join(BLOGS_DIR, `${slug}.md`);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data, content } = matter(fileContents);
        return {
            slug,
            title: data.title,
            date: data.date,
            topic: data.topic || "",
            summary: data.summary,
            tags: data.tags || [],
            content,
        };
    } catch (error) {
        return null;
    }
}
