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

function getFilesWithExtensions(dir: string, extensions: string[] = ['.md', '.mdx']) {
    if (!fs.existsSync(dir)) return [];
    return fs.readdirSync(dir).filter(file => extensions.includes(path.extname(file)));
}

export function getAllProjects(): ProjectData[] {
    if (!fs.existsSync(PROJECTS_DIR)) return [];

    const files = getFilesWithExtensions(PROJECTS_DIR);
    const projects = files.map((filename) => {
        const slug = filename.replace(/\.mdx?$/, "");
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
        // Try md first, then mdx
        let fullPath = path.join(PROJECTS_DIR, `${slug}.md`);
        if (!fs.existsSync(fullPath)) {
            fullPath = path.join(PROJECTS_DIR, `${slug}.mdx`);
        }

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

    const files = getFilesWithExtensions(BLOGS_DIR);
    const blogs = files.map((filename) => {
        const slug = filename.replace(/\.mdx?$/, "");
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
        let fullPath = path.join(BLOGS_DIR, `${slug}.md`);
        if (!fs.existsSync(fullPath)) {
            fullPath = path.join(BLOGS_DIR, `${slug}.mdx`);
        }

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
