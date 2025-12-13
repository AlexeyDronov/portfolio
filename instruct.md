# Section 1: Instructions for Implementation

## Phase 1: Setup
1. Install dependencies: tailwindcss, lucide-react, react-markdown, remark-gfm, framer-motion, gray-matter
2. Set up folder structure exactly as specified
3. Configure JetBrains Mono font in layout.tsx

## Phase 2: Styling Foundation
1. Implement color system in globals.css
2. Create reusable Tailwind classes for card styles, buttons
3. Set up responsive breakpoints

## Phase 3: Components (Build in this order)
1. Navbar (needed for all pages)
2. Hero with typing animation
3. About section
4. Recent Work section
5. Contact section
6. ProjectCard component
7. BlogCard component

## Phase 4: Routes
1. Blog listing page
2. Blog [slug] page
3. Projects listing page
4. Projects [slug] page with modal

## Phase 5: Data
1. Create template markdown files
2. Implement data fetching utilities
3. Test with dummy content

## Testing Checklist
- [ ] Typing animation plays once per session
- [ ] All navigation links work
- [ ] Project modals open/close correctly
- [ ] Responsive design works on mobile
- [ ] Hover effects consistent throughout
- [ ] Markdown renders correctly in blog posts



# Section 2: Visual and Stylistic Requirements

Overall, the design should follow cyberpunk-minimal aesthetic. Geometric, high contrast colour, and modern, mono font.

## Colours
Defined in globals.css and reused throughout the project as variables.

1. Define the following colours:
	- Primary accent: #a855f7 (purple) 
	- Secondary accent: #ec4899 (magenta) 
	- Tertiary accent: #06b6d4 (cyan) 
	- Background: Keep existing dark gradient 
	- Text primary: #ffffff (pure white) 
	- Text secondary: #94a3b8 (muted) 
	- Text dim: #475569 (very dim)
2. Use the colours in the following order:
	- Primary – applied to the name in the hero section, and throughout the page as an accent upon hovering. Only the most important pieces of the website should be highlighted in this (10%)
	- Secondary – Used for creating a glow effect around components on hovering, and for skills in projects

## Typography
- Font: JetBrains Mono (import from Google Fonts)
- Apply monospace throughout the entire site
- Heading sizes:
  - h1: text-4xl md:text-5xl (Hero name, section titles)
  - h2: text-2xl md:text-3xl (Project titles)
  - h3: text-lg md:text-xl (Company names, dates)
  - p: text-base (Body text)
- Letter spacing: tracking-tight for headings, normal for body

## Responsive Design
- Mobile: < 768px (1 column everywhere)
- Tablet: 768px - 1024px (2 columns for projects)
- Desktop: > 1024px (3 columns for recent work, 2 for about)
- Max content width: 1200px (centered)

## Project Card

1. Overall cyberpunk aesthetic – sharp corners, mono font throughout
2. The card should contain the image associated with the project at the top, followed by the project title in primary colour, followed by a short summary in text secondary, a line separator, and skills.
3. Each skill is a box with sharp corners and skill in secondary colour
4. The card should be "cursor-pointer" and upon clicking should open a modal window with the md content
5. Modal should be a sharp box with a secondary colour outline. Background outside the modal should be blurred and darkened. There should be a cross to prompt the user to close the card. Clicking outside the modal area should also close the modal.

## Blog Post

1. When a blog is clicked, a new slug page should be opened displaying the contents of the post. 
2. At the top should be a list of skills (in a box following the same cyberpunk aesthetic) followed by the title, date, and a separator from the main content of the post
3. The remainder of the page should be a properly rendered markdown file with global font applied throughout

## Navigation Bar

1. Navigation bar should be a header and persist throughout all the pages
2. It should include elements in the following order: Home, Projects, Blog, Contact. Contact here indicates the three icons that would immediately redirect the person to social media or the email
3. The navbar should stretch the whole width of the screen and should have sharp corners in a secondary colour.
4. Each element of the navbar should redirect the visitor to the corresponding route of the website
5. On large screens, the elements should be text-only with a main colour square indicating which page the visitor is on. On small screens, the text should be replaced by the icons with the open route icon highlighted.
6. Position: Sticky top (stays visible on scroll)
7. Height: 64px (80px on desktop)
8. Background: bg-slate-950/80 with backdrop-blur-lg
9. Border bottom: 1px slate-700
10. Active indicator: 
   - Desktop: 4px square to the left of text in primary accent
   - Mobile: Icon highlighted in primary accent
11. Smooth scroll behavior when clicking navigation items
12. On home page, clicking nav items should scroll to sections (not reload)

## Component Styling Standards

### Cards (Projects, Blogs, Experience)
- Border radius: 4px (sharp corners)
- Border: 1px solid rgba(148, 163, 184, 0.2)
- Background: rgba(15, 23, 42, 0.5)
- Hover state: 
  - Border color: rgba(168, 85, 247, 0.5)
  - Box shadow: 0 0 20px rgba(168, 85, 247, 0.2)
  - Transition: all 300ms ease

### Buttons & Interactive Elements
- Border radius: 4px
- Padding: px-6 py-3
- Primary button: bg-purple-600, hover:bg-purple-500
- Ghost button: border-purple-500, hover:bg-purple-500/10
- Cursor: cursor-pointer

### Spacing System
- Section vertical padding: py-16 md:py-24
- Card gaps: gap-6 (24px)
- Text spacing: space-y-4 for paragraphs

### Hover Effects
- Scale: NO scaling on hover (breaks geometric aesthetic)
- Opacity: Can reduce to 80% for secondary elements
- Glow: Purple shadow on primary interactive elements
- Border: Color shift from slate to purple


# Technology Stack 
- Framework: Next.js 14+ (App Router) 
- Styling: Tailwind CSS 
- Fonts: JetBrains Mono (monospace throughout) 
- Animations: Framer Motion for typing effect 
- Markdown: react-markdown with remark-gfm 
- Icons: lucide-react

# Project Structure
```
app/
  layout.tsx
  page.tsx (home page with all sections)
  blog/
    page.tsx (all blogs)
    [slug]/page.tsx (individual blog)
  projects/
    page.tsx (all projects)
    [slug]/page.tsx (individual project)
  components/
    Hero.tsx
    About.tsx
    RecentWork.tsx
    Contact.tsx
    ProjectCard.tsx
    BlogCard.tsx
    Navbar.tsx
  globals.css
data/
  blogs/
    blog-1.md
    blog-2.md
  projects/
    project-1.md
    project-2.md
public/
  projects/
    project-1.jpg
    project-2.jpg
```

# Layout Requirements

The following document outlines the core components needed for making a main web page.

## Hero Section

1. This section should be full screen height via `min-h-screen`.
2. The contents should include an \<h1> heading containing "> Hi, I'm Alexey" and Lorem Ipsum text underneath as a placeholder with an \<h3> tag.
3. The hero section should include a typing animation applicable only to the \<h1> tag. The other text should be visible immediately
4. Name and lorem ipsum should be centred.

## Hero Section - Typing Animation Details
- Use sessionStorage to play animation only once per session
- Typing speed: 100ms per character
- Blinking cursor: 500ms interval, purple color (#a855f7)
- Cursor style: "|" character in primary accent color
- After typing completes: cursor fades out over 500ms
- Text below hero (h3) should fade in AFTER typing completes


## About Section
1. Desktop layout: 2/3 width for left (experiences/education), 1/3 for right (about/skills)
2. Left side should contain:
   - 2-3 experience cards (most recent)
   - Line separator with centered square (1px line, 8px square, purple accent)
   - 1-2 education cards
3. Right side should contain:
   - About paragraph (text-secondary, leading-relaxed)
   - Skills carousel (auto-rotating every 3s, manual navigation with arrows)
4. Experience/Education card structure:
   - Border: 1px, slate-700, hover: purple-500/50 with glow
   - Padding: p-6
   - Layout: Company logo (if available) + text content
5. Mobile: Stack in order: About → Skills → Experiences → Education

## Recent Work

1. This section follows the about section. It should detail the most recent projects I have worked on and the latest blog post I have written.
2. The section should start with the highlighted projects (2-3 items), where each project is in a grid layout (3 columns) – one column is occupied by a clickable card containing the project image, and the other two columns are occupied by text. For each project, the positioning alternates, i.e., first project has an image on the left, while the next one has an image on the right.
3. Finally, at the bottom of the section, there should be 2-3 cards with the most recent blog posts. Each card should contain the title of the post, date and a short summary
4. Highlighted projects (2-3 only):
   - Image aspect ratio: 16:9
   - Image container: fixed height 300px on desktop, 200px on mobile
   - Image should have gradient overlay (bottom to top, dark to transparent)
   - Alternating layout: odd projects (image left), even projects (image right)
2. Blog post cards at bottom:
   - Display: 3 cards in row on desktop, 1 column on mobile
   - Each card: min-height 200px
   - Border: 1px slate-700, hover: purple glow

## Contact

At the very bottom of the main page, there should be a section with a short paragraph inviting the visitor to find me on social media or send an email and three icons – github, linkedIn and email.



# Extra Routes

There should be two extra routes – `app/blog` with `app/blog/[slug]` and `app/projects` with `app/projects/[slug]`. They should provide a full view into all the posted blogs and projects

## Blog Route

1. Contains all the blogs written by me. The blogs themselves should be in `data/blogs` folder as markdown elements. 
2. Each blog entry should have the following entries in the metadata: title, date, topic, summary, tags. To start with, populate the data folder with some blog templates.
3. The layout is a simple list of blogs sorted from newest to oldest blogs. Each blog is a card without any borders showing only the title and summary on the left (summary is under the title) and the date on the right.
4. Clicking on the title of the blog opens up a new slug page, where the user can read the contents of the markdown file.

## Projects Route

1. Contains all the projects that I have decided to include. The project descriptions live in `data/projects` folder as markdown elements. The images associated with the projects live in `public/projects`.
2. Each project md document entry should have the following in the metadata: title, date, summary, tags, skills. To start with, populate those with some project templates.
3. The layout is a grid of containers for the projects. On large displays, there should be 2 columns, and on small displays one. 


# Data File Templates

## Project Markdown Template (data/projects/project-1.md)
```
---
title: "Project Title"
date: "2024-12-15"
summary: "One-line impactful description under 150 characters"
tags: ["machine-learning", "python", "api"]
skills: ["PyTorch", "FastAPI", "Docker", "PostgreSQL"]
image: "/projects/project-1.jpg"
featured: true
---

## Overview
What problem does this solve?

## Technical Approach
How did you build it?

## Results
Quantified impact and outcomes.

## Links
- [GitHub](url)
- [Demo](url)
```
```

## Blog Markdown Template (data/blogs/blog-1.md)
```
---
title: "Blog Post Title"
date: "2024-12-15"
topic: "Machine Learning"
summary: "Brief summary under 200 characters"
tags: ["tutorial", "python", "ml"]
---

# Main content starts here
Your markdown content...
```
```