import fs from "fs";
import path from "path";
import matter from "gray-matter";

const PROJECTS_DIR = path.join(
    process.cwd(),
    "data",
    "projects",
);
const BLOGS_DIR = path.join(
    process.cwd(),
    "data",
    "blogs",
);
const SAFE_SLUG_PATTERN = /^[a-z0-9_-]{1,100}$/i;

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
    ogImage?: string;
    content: string;
}

function getFilesWithExtensions(dir: string, extensions: string[] = ['.md', '.mdx']) {
    if (!fs.existsSync(dir)) return [];
    return fs.readdirSync(dir, { withFileTypes: true })
        .filter(entry => entry.isFile() && extensions.includes(path.extname(entry.name)))
        .map(entry => entry.name);
}

function getContentPath(
    directory: string,
    slug: string,
    extensions: string[] = [".md", ".mdx"],
): string | null {
    if (!SAFE_SLUG_PATTERN.test(slug) || !fs.existsSync(directory)) {
        return null;
    }

    const realDirectory = fs.realpathSync(directory);

    for (const extension of extensions) {
        const candidate = path.join(directory, `${slug}${extension}`);

        if (path.dirname(candidate) !== directory || !fs.existsSync(candidate)) {
            continue;
        }

        const realCandidate = fs.realpathSync(candidate);
        if (path.dirname(realCandidate) === realDirectory && fs.statSync(realCandidate).isFile()) {
            return realCandidate;
        }
    }

    return null;
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
        const fullPath = getContentPath(PROJECTS_DIR, slug);
        if (!fullPath) return null;

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
    } catch {
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
            ogImage: data.ogImage,
            content,
        };
    });

    return blogs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogBySlug(slug: string): BlogData | null {
    try {
        const fullPath = getContentPath(BLOGS_DIR, slug);
        if (!fullPath) return null;

        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data, content } = matter(fileContents);
        return {
            slug,
            title: data.title,
            date: data.date,
            topic: data.topic || "",
            summary: data.summary,
            tags: data.tags || [],
            ogImage: data.ogImage,
            content,
        };
    } catch {
        return null;
    }
}
