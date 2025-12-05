# Website Spacing and Layout Guide

This guide explains how to manually adjust the spacing, dimensions, and layout of your portfolio website. The project uses **Tailwind CSS**, so most adjustments involve changing utility classes in the code.

## 1. Global Section Spacing & Height

To change the spacing and height common to *all* sections (Hero, Projects, Blog), you need to edit `app/components/ClientHome.tsx`.

Look for the `baseSectionClasses` constant:

```tsx
// app/components/ClientHome.tsx

const baseSectionClasses = "flex min-h-[80vh] w-full flex-col justify-center px-6 md:px-12 py-12";
```

### Parameters to Adjust:

*   **Section Height (`min-h-[80vh]`)**:
    *   This sets the *minimum* height of each section to 80% of the viewport height.
    *   **To make sections taller**: Change to `min-h-[90vh]` or `min-h-screen` (100%).
    *   **To make sections shorter**: Change to `min-h-[50vh]` or remove it entirely to let content dictate height.

*   **Vertical Padding (`py-12`)**:
    *   This adds space inside the top and bottom of each section.
    *   **To increase space**: Change to `py-16`, `py-20`, or `py-24`.
    *   **To decrease space**: Change to `py-8` or `py-4`.

*   **Horizontal Padding (`px-6 md:px-12`)**:
    *   `px-6`: Padding on mobile devices.
    *   `md:px-12`: Padding on desktop devices (screens wider than 768px).
    *   Adjust these values to change how close content gets to the edge of the screen.

---

## 2. Global Content Width

To change how wide the content area is (how much it stretches across the screen), edit the `<main>` tag in `app/components/ClientHome.tsx`.

```tsx
// app/components/ClientHome.tsx

<main className="flex w-full max-w-3xl flex-col items-center">
```

### Parameters to Adjust:

*   **Maximum Width (`max-w-3xl`)**:
    *   This constrains the content width to keep it readable.
    *   **Wider**: Change to `max-w-4xl`, `max-w-5xl`, `max-w-6xl`, or `max-w-7xl`.
    *   **Full Width**: Remove `max-w-3xl` (though you might want to keep `container` or padding).
    *   **Narrower**: Change to `max-w-2xl`.

---

## 3. Adjusting Specific Sections

You can tune spacing within specific sections by editing their respective files in `app/components/Sections/`.

### Projects Section (`app/components/Sections/Projects.tsx`)

```tsx
// Main container gap
<div className="flex flex-col w-full gap-12 justify-center">

// Grid gap (space between cards)
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
```

*   **`gap-12`**: Space between the "Featured Projects" title and the grid of cards.
*   **`gap-8`**: Space between individual project cards in the grid.

### Blog Section (`app/components/Sections/Blog.tsx`)

```tsx
<div className="flex flex-col w-full gap-12">
```

*   **`gap-12`**: Space between the "Latest Posts" title and the list of blog posts.

### Hero & About Sections (`app/components/Sections/Hero.tsx`, `About.tsx`)

These sections are simple and use `gap-6` for internal spacing.

```tsx
<section className="... gap-6 ... py-8">
```

*   **`gap-6`**: Space between elements (e.g., if you add more text).
*   **`py-8`**: Additional vertical padding specific to these components.

---

## 4. Card Spacing (Projects & Blog)

To adjust the size and spacing *inside* the cards, edit the files in `app/components/UI/`.

### Project Card (`app/components/UI/ProjectCard.tsx`)

```tsx
<div className="... p-6 ...">
    {/* ... */}
    <div className="flex flex-col gap-2">
```

*   **`p-6`**: Padding inside the card (space between the border and the text/image).
*   **`gap-2`**: Space between the title and the description.
*   **`aspect-video`**: Controls the image aspect ratio (16:9). Change to `aspect-square` or `aspect-[4/3]` for different shapes.

### Blog Card (`app/components/UI/BlogCard.tsx`)

```tsx
<div className="... p-6 ... gap-2">
```

*   **`p-6`**: Padding inside the card.
*   **`gap-2`**: Space between the date, title, and description.

---

## Summary of Common Tailwind Spacing Values

Tailwind uses a scale where **1 unit = 0.25rem (usually 4px)**.

*   `1` = 4px
*   `2` = 8px
*   `4` = 16px
*   `6` = 24px
*   `8` = 32px
*   `12` = 48px
*   `16` = 64px
*   `24` = 96px
*   `32` = 128px

Use these numbers in classes like `p-4`, `m-8`, `gap-12`, `h-16`, etc.
