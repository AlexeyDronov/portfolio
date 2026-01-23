import Link from "next/link";
import Image from "next/image";

const StyledLink = ({
  href,
  children,
  className,
  ...props
}: React.ComponentProps<typeof Link> & React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const isExternal = typeof href === "string" && href.startsWith("http");
  return (
    <Link
      href={href || "#"}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={`text-primary underline underline-offset-4 cursor-pointer font-sans ${className || ""
        }`}
      {...props}
    >
      {children}
    </Link>
  );
};

export const mdxComponents = {
  Link: StyledLink,
  Image: ({ alt, ...props }: React.ComponentProps<typeof Image>) => (
    <figure className="my-8">
      <div className="rounded-lg overflow-hidden border border-slate-700 shadow-lg">
        <Image alt={alt || "Blog image"} className="w-full h-auto" {...props} />
      </div>
      {alt && (
        <figcaption className="text-sm text-slate-400 text-center mt-3 italic font-sans">
          {alt}
        </figcaption>
      )}
    </figure>
  ),
  h1: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className="text-3xl md:text-4xl font-bold font-mono text-slate-100 mb-6 mt-10"
      {...props}
    >
      <span className="text-primary opacity-70"># </span>
      {children}
    </h1>
  ),
  h2: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className="text-2xl md:text-3xl font-bold font-mono text-slate-100 mb-4 mt-8"
      {...props}
    >
      <span className="text-secondary opacity-70">## </span>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className="text-xl md:text-2xl font-bold font-mono text-slate-100 mb-3 mt-6"
      {...props}
    >
      <span className="text-tertiary opacity-70">### </span>
      {children}
    </h3>
  ),
  p: ({ children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className="mb-4 text-text-secondary leading-relaxed font-sans text-lg"
      {...props}
    >
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
  a: StyledLink,
  ul: ({ children, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul
      className="list-disc list-outside mb-4 pl-8 text-text-secondary font-sans text-lg"
      {...props}
    >
      {children}
    </ul>
  ),
  ol: ({ children, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol
      className="list-decimal list-outside mb-4 pl-8 text-text-secondary font-sans text-lg"
      {...props}
    >
      {children}
    </ol>
  ),
  li: ({ children, ...props }: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="mb-2 font-sans pl-1" {...props}>
      {children}
    </li>
  ),
  code: ({
    children,
    className,
    ...props
  }: React.HTMLAttributes<HTMLElement>) => {
    // Check if it's an inline code block (no class usually or simple) or block
    // Simplified check: block code usually comes inside a <pre> which MDX handles separately often or passes class
    // But standard markdown `code` inline renders differently.
    // In MDXRemote, pre is usually the wrapper for code blocks.
    return (
      <code
        className="bg-slate-800 px-1.5 py-0.5 rounded text-sm font-mono text-primary"
        {...props}
      >
        {children}
      </code>
    );
  },
  pre: ({ children, ...props }: React.HTMLAttributes<HTMLPreElement>) => (
    <pre
      className="block bg-slate-800/50 p-4 rounded-md text-sm font-mono overflow-x-auto text-text-secondary my-4 border border-slate-700"
      {...props}
    >
      {children}
    </pre>
  ),
  blockquote: ({
    children,
    ...props
  }: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className="border-l-4 border-primary pl-4 py-3 bg-slate-900/50 rounded-r-md not-italic font-mono text-text-secondary my-6 [&_p:last-of-type]:mb-0"
      {...props}
    >
      {children}
    </blockquote>
  ),
};
