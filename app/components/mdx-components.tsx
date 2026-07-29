import Link from "next/link";
import Image from "next/image";

const SITE_ORIGIN = "https://www.alexeydronov.com";
const ALLOWED_LINK_PROTOCOLS = new Set(["http:", "https:", "mailto:", "tel:"]);

function getSafeHref(href: React.ComponentProps<typeof Link>["href"]) {
  if (typeof href !== "string") return "#";

  const trimmedHref = href.trim();

  try {
    const url = new URL(trimmedHref, SITE_ORIGIN);
    return ALLOWED_LINK_PROTOCOLS.has(url.protocol) ? trimmedHref : "#";
  } catch {
    return "#";
  }
}

const StyledLink = ({
  href,
  children,
  className,
  ...props
}: React.ComponentProps<typeof Link> & React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const safeHref = getSafeHref(href);
  const parsedHref = new URL(safeHref, SITE_ORIGIN);
  const isExternal =
    (parsedHref.protocol === "http:" || parsedHref.protocol === "https:") &&
    parsedHref.origin !== SITE_ORIGIN;

  return (
    <Link
      {...props}
      href={safeHref}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={`text-primary underline underline-offset-4 cursor-pointer font-sans ${className || ""
        }`}
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
  table: ({ children, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="overflow-x-auto my-8">
      <table className="w-full text-left border-collapse border border-slate-700 text-text-secondary font-sans" {...props}>
        {children}
      </table>
    </div>
  ),
  thead: ({ children, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <thead className="bg-slate-800/80 text-slate-100 font-mono text-sm border-b border-slate-700" {...props}>
      {children}
    </thead>
  ),
  tbody: ({ children, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <tbody className="divide-y divide-slate-700/50" {...props}>
      {children}
    </tbody>
  ),
  tr: ({ children, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr className="transition-colors hover:bg-slate-800/30" {...props}>
      {children}
    </tr>
  ),
  th: ({ children, ...props }: React.ThHTMLAttributes<HTMLTableHeaderCellElement>) => (
    <th className="px-4 py-3 font-semibold border-r border-slate-700 last:border-r-0" {...props}>
      {children}
    </th>
  ),
  td: ({ children, ...props }: React.TdHTMLAttributes<HTMLTableDataCellElement>) => (
    <td className="px-4 py-3 border-r border-slate-700 last:border-r-0" {...props}>
      {children}
    </td>
  ),
};
