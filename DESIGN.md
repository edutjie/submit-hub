# SubmitHub — Design System

> Minimalist, solid, roundy. Academic-professional tone. No dark mode.

---

## Color Tokens

| Token | Hex | Usage |
|---|---|---|
| `primary-indigo` | `#3B32B5` | Primary brand color, icon fills |
| `dark-indigo` | `#332C7A` | H1, H2, section headings, logo text |
| `bright-indigo` | `#4A42D3` | CTA buttons (filled), interactive accents |
| `medium-purple` | `#6059D9` | Active nav links, hyperlinks, logo gradient end |
| `lavender` | `#DEE3FC` | Button borders (variant 2), background tints |
| `white` | `#FFFFFF` | Navbar, Page, and Card background, button text |
| `off-white` | `#F8F9FA` | Footer background |
| `light-gray` | `#E9EAED` | Card borders, separators |
| `dark-slate` | `#555B66` | Footer body text |
| `medium-gray` | `#6D727D` | Nav links (inactive), card metadata text |
| `black` | `#000000` | Card titles, file names |
| `mint-green` | `#D6F7E3` | "Submitted" status chip background |
| `cream` | `#FAF1C7` | "Pending" status chip background |
| `success-green` | `#53AA7B` | "Submitted" status dot |
| `dark-green` | `#37614E` | "Submitted" status chip text |
| `golden-amber` | `#E19A3F` | "Pending" status dot |
| `dark-amber` | `#7C4323` | "Pending" status chip text |

---

## Typography

Font: **Inter** (Google Fonts). Default letter-spacing: `-0.011em`.

| Scale | Size | Weight | Usage |
|---|---|---|---|
| `h1` | 37px | Bold (700) | Page titles |
| `h2` | 30px | Bold (700) | Navbar logo name |
| `h3` | 25px | Semi-bold (600) | Card titles, drawer headings |
| `2xl` | 23px | — | Footer section headings |
| `xl` | 20px | — | Nav links, button text |
| `lg` | 18px | — | Card buttons, hyperlinks, body |
| `md` | 17px | — | Card metadata, footer body |
| `sm` | 16px | — | Status chip labels |

---

## Spacing & Layout

- **Page horizontal padding**: content is `80%` of viewport width on desktop, centered.
  - Tailwind: `max-w-[80%] mx-auto` or `px-[10%]`
  - Tablet (768px): `px-8`; Mobile (375px): `px-4`
- **Card padding**: 32px all sides
- **Card border-radius**: 20px
- **Card border**: 2px solid `light-gray`
- **Card gap (list)**: 21px

---

## Shadows

| Name | Value |
|---|---|
| Navbar drop shadow | `0 8px 20px rgba(0,0,0,0.15)` |
| File chip shadow | `0 1px 3px rgba(0,0,0,0.08)` |

---

## Components

### ProfilePicture
Circle avatar with a letter inside.
- **Logo variant**: 43×43px, gradient bg (`medium-purple` → `primary-indigo`, bottom-left to top-right), letter "S", white, `lg`, bold, 8px inner padding.
- **User variant**: 51×51px, bg `lavender`, letter = user initials, `primary-indigo`, `lg`, bold, 10px inner padding.

### Button
Two variants, shared base: `rounded-[8px]`, `text-lg font-semibold tracking-[-0.005em]`, `min-w-[202px]`, `py-[9px] px-[11px]`.

| Variant | Background | Text | Border |
|---|---|---|---|
| 1 (filled) | `bright-indigo` | `white` | none |
| 2 (outline) | transparent | `bright-indigo` | 2px `lavender` |

- Navbar logout button: variant 1, `font-medium`, `text-xl`, `px-[19px] py-[10px]`, no min-width.

### StatusChip
Rounded-full pill. Left: 9×9px dot. Right: label. Gap: 6px. Padding: `px-[15px] py-[4px]`. Label: `text-sm font-semibold tracking-[-0.005em]`.

| Status | Bg | Dot color | Text color |
|---|---|---|---|
| Submitted | `mint-green` | `success-green` | `dark-green` |
| Pending | `cream` | `golden-amber` | `dark-amber` |

### AssignmentCard
Full-width card. Flex row, space between.
- **Left**: Assignment name (h3 black) + due date & description (md semi-bold medium-gray, space-y-10px).
- **Right**: Flex row, gap 22px — StatusChip + Button.
- **Accordion** (Submitted only): On "View Submission" click, expands below a separator to show submitted file list (name left, size right, with file-chip shadow, rounded, padded). Click to download.
- **Drawer** (Pending only): On "Upload Files" click, Shadcn Drawer slides from bottom with drag-and-drop zone (`cloud-upload` icon) + Submit + Cancel buttons.

### Navbar
Sticky, `drop-shadow([0_8px_20px_rgba(0,0,0,0.15)])`.
- Left: ProfilePicture (logo) + "SubmitHub" (h2 dark-indigo), gap 9px.
- Center: Nav links, gap 30px. Inactive: xl medium medium-gray. Active: xl semi-bold medium-purple.
- Right: User ProfilePicture + Logout button (variant 1 nav style).

### Footer
3-column equal grid. All text left-aligned. Top padding from content.
- **Column 1** — TA Emails: heading + 3 emails.
- **Column 2** — Professor Contact: heading + email + office hours.
- **Column 3** — Discord/Forum: heading + Discord hyperlink (medium-purple underline lg) + forum URL (md dark-slate).

### GradesTable
Shadcn Table, modified to design system. Columns: No., Assignment Name, Due Date, Grade (0–100), Comments. Includes CSV export button (variant 2 style).

---

## Interactions & Motion

- **Hover states**: buttons lighten/darken slightly (`opacity-90` or Tailwind `hover:` utilities).
- **Accordion**: Framer Motion `AnimatePresence` + `motion.div` with `height: 0 → auto` and `opacity: 0 → 1`.
- **Drawer**: Shadcn Drawer (Vaul-based), slides from bottom.
- **Nav active state**: no animation, just class swap.

---

## Responsive Breakpoints

| Breakpoint | Width | Notes |
|---|---|---|
| Mobile | 375px | Stack card rows vertically; hamburger nav |
| Tablet | 768px | Reduce padding; footer 1-col or 2-col |
| Desktop | 1280px+ | Full 3-col footer, horizontal cards |
