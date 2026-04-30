# SubmitHub — Project Instructions

## Stack
- React 19 + Vite, TypeScript, Tailwind CSS, React Router, Framer Motion, Lucide React, Shadcn UI
- Dependencies not yet installed — run setup before coding (see README)

## File Structure
```
src/
├── components/   # Navbar, Footer, AssignmentCard, Button, StatusChip, ProfilePicture, GradesTable, UploadDrawer
├── pages/        # ActiveAssignments, PastSubmissions, Grades
├── hooks/        # Custom hooks
├── utils/        # Helpers
├── assets/       # Static assets
└── styles/       # Global styles / design tokens
```

## Design Rules (non-negotiable)
- All design tokens live in `tailwind.config.ts` — never use raw hex values in components
- 80% content width on desktop (`max-w-[80%] mx-auto`), responsive on smaller screens
- Inter font only; use exact font sizes from `DESIGN.md`
- Default letter-spacing: `-0.011em` on all text unless overridden
- No dark mode

## Code Style
- No comments unless the WHY is non-obvious
- Functional components + hooks only; no class components
- Each page has its own `constants.ts` for dummy data; shared constants in `src/constants.ts`
- Reusable components go in `src/components/`, never inline in pages
- Shadcn components: install via CLI, then modify to match design system

## Constraints
- Mock data only — no API calls, no real file upload
- No TODO stubs — implement everything fully
- No console errors or warnings in production
- All interactive elements need `aria-label`s
