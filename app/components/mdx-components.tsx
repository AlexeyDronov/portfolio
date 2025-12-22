
import Link from 'next/link';

export const mdxComponents = {
    h1: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h1 className="text-3xl md:text-4xl font-bold font-mono text-white mb-6 mt-10" {...props}>
            {children}
        </h1>
    ),
    h2: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h2 className="text-2xl md:text-3xl font-bold font-mono text-white mb-4 mt-8" {...props}>
            {children}
        </h2>
    ),
    h3: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h3 className="text-xl md:text-2xl font-bold font-mono text-white mb-3 mt-6" {...props}>
            {children}
        </h3>
    ),
    p: ({ children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
        <p className="mb-4 text-text-secondary leading-relaxed font-sans text-lg" {...props}>
            {children}
        </p>
    ),
    strong: ({ children, ...props }: React.HTMLAttributes<HTMLElement>) => (
        <strong className="font-bold text-secondary font-sans" {...props}>
            {children}
        </strong>
    ),
    em: ({ children, ...props }: React.HTMLAttributes<HTMLElement>) => (
        <em className="italic text-secondary font-sans" {...props}>
            {children}
        </em>
    ),
    a: ({ children, href, ...props }: React.HTMLAttributes<HTMLAnchorElement> & { href?: string }) => (
        <Link
            href={href || "#"}
            target={href?.startsWith('http') ? "_blank" : undefined}
            rel={href?.startsWith('http') ? "noopener noreferrer" : undefined}
            className="text-primary hover:underline underline-offset-4 cursor-pointer font-sans"
            {...props}
        >
            {children}
        </Link>
    ),
    ul: ({ children, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
        <ul className="list-disc list-inside mb-4 pl-4 text-text-secondary font-sans" {...props}>
            {children}
        </ul>
    ),
    ol: ({ children, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
        <ol className="list-decimal list-inside mb-4 pl-4 text-text-secondary font-sans" {...props}>
            {children}
        </ol>
    ),
    li: ({ children, ...props }: React.HTMLAttributes<HTMLLIElement>) => (
        <li className="mb-2 font-sans" {...props}>
            {children}
        </li>
    ),
    code: ({ children, className, ...props }: React.HTMLAttributes<HTMLElement>) => {
        // Check if it's an inline code block (no class usually or simple) or block
        // Simplified check: block code usually comes inside a <pre> which MDX handles separately often or passes class
        // But standard markdown `code` inline renders differently.
        // In MDXRemote, pre is usually the wrapper for code blocks.
        return (
            <code className="bg-slate-800 px-1.5 py-0.5 rounded text-sm font-mono text-primary" {...props}>
                {children}
            </code>
        )
    },
    pre: ({ children, ...props }: React.HTMLAttributes<HTMLPreElement>) => (
        <pre className="block bg-slate-800/50 p-4 rounded-md text-sm font-mono overflow-x-auto text-text-secondary my-4 border border-slate-700" {...props}>
            {children}
        </pre>
    ),
    blockquote: ({ children, ...props }: React.HTMLAttributes<HTMLQuoteElement>) => (
        <blockquote className="border-l-4 border-primary pl-4 italic text-text-dim my-6 font-sans" {...props}>
            {children}
        </blockquote>
    ),
};
