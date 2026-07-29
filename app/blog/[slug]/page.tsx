import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllBlogs, getBlogBySlug } from "@/app/lib/dataUtils";
import { MDXRemote } from 'next-mdx-remote/rsc';
import { mdxComponents } from "@/app/components/mdx-components";
import ContextualBackButton from "@/app/components/ContextualBackButton";

interface BlogPostPageProps {
    params: { slug: string };
}

export const dynamicParams = false;

export function generateStaticParams() {
    return getAllBlogs().map(({ slug }) => ({ slug }));
}

export default async function BlogPostPage(props: BlogPostPageProps) {
    const { slug } = await props.params;
    const blog = getBlogBySlug(slug);

    if (!blog) {
        notFound();
    }

    return (
        <main className="min-h-screen w-full max-w-[800px] mx-auto pt-32 pb-24 px-4 font-mono">

            {/* Back Button */}
            <ContextualBackButton
                defaultHref="/blog"
                className="inline-flex items-center gap-2 text-text-secondary border-b border-transparent hover:border-primary hover:text-primary mb-12 transition-colors"
                label="Back to Blog"
                homeLabel="Back Home"
                icon="arrow"
            />

            <article>
                {/* Header */}
                <header className="mb-12 pb-12 border-b border-slate-800">
                    <div className="flex flex-wrap gap-2 mb-6">
                        {blog.tags.map(tag => (
                            <span key={tag} className="text-xs text-primary border border-primary/30 px-2 py-1 rounded-(--border-radius-sm) bg-primary/5 uppercase tracking-wide">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <h1 className="text-3xl md:text-5xl font-bold font-mono text-white mb-6 leading-tight">
                        {blog.title}
                    </h1>

                    <div className="flex items-center gap-4 text-text-dim text-sm">
                        <span>{blog.date}</span>
                        <span>•</span>
                        <span>{blog.topic}</span>
                    </div>
                </header>

                {/* Content */}
                <div className="prose prose-invert prose-slate max-w-none">
                    <MDXRemote source={blog.content} components={mdxComponents} />
                </div>
            </article>

        </main>
    );
}

export async function generateMetadata(
    props: BlogPostPageProps
): Promise<Metadata> {
    const { slug } = await props.params;
    const blog = getBlogBySlug(slug);

    if (!blog) {
        return {
            title: 'Blog Not Found',
        };
    }

    const { title, summary, date, ogImage } = blog;

    // Construct the absolute URL for the OG image
    // Priority:
    // 1. ogImage from frontmatter (if provided)
    // 2. /images/${slug}-og.png (convention)
    // 3. /images/default-og.png (fallback)

    const siteUrl = 'https://www.alexeydronov.com';
    let ogUrl: string;

    if (ogImage) {
        // If ogImage is absolute, use it. If relative, prepend siteUrl
        if (ogImage.startsWith('http')) {
            ogUrl = ogImage;
        } else {
            ogUrl = `${siteUrl}${ogImage.startsWith('/') ? '' : '/'}${ogImage}`;
        }
    } else {
        // Check if the slug-based image exists in public/images
        // Note: In a production environment (Vercel/Next.js), checking file system might behave differently 
        // depending on how assets are bundled, but for SSG/SSR reading from public is often tricky or not recommended at runtime.
        // However, since we are fetching metadata, assuming the image exists at that path is a common pattern.
        // A robust way is to just assume it exists if we follow convention, or check via fs if needed.
        // For simplicity and performance, we can construct the URL.
        // If the user ensures the image exists, it will work.
        ogUrl = `${siteUrl}/images/${slug}-og.png`;
    }

    return {
        title: title,
        description: summary,
        openGraph: {
            title: title,
            description: summary,
            url: `${siteUrl}/blog/${slug}`,
            type: 'article',
            publishedTime: date,
            images: [
                {
                    url: ogUrl,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: title,
            description: summary,
            images: [ogUrl],
        },
    };
}
