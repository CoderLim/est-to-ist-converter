# Repository Guidelines

## Project Structure & Module Organization
The App Router lives in `app/`, where `layout.tsx` defines shared chrome and `page.tsx` assembles the converter, feature, and info sections. Feature components reside in `components/`, while shadcn primitives stay within `components/ui/`; reuse them through the `@/` aliases configured in `tsconfig.json`. Shared hooks (`hooks/`) and helpers (`lib/`, including `lib/i18n/` for locale strings and `lib/utils.ts` for Tailwind helpers) keep cross-cutting logic isolated. Static assets and favicons belong in `public/`, and global styles are consolidated in `app/globals.css` with Tailwind tokens in `styles/globals.css`.

## Build, Test, and Development Commands
Install once with `pnpm install`. Use `pnpm dev` for local development with hot reload, `pnpm lint` to enforce Next.js and shadcn lint rules, and `pnpm build` before merging to surface route or type regressions. Validate production locally via `pnpm start` after a successful build.

## Coding Style & Naming Conventions
Write TypeScript (`.ts`/`.tsx`) with strict mode in mind; surface types for component props and utility returns. Keep files in PascalCase for components (`components/Footer.tsx`) and camelCase for hooks (`hooks/use-toast.ts`). Follow the prevailing two-space indentation, prefer double quotes in TSX, omit trailing semicolons, and compose class strings with the `cn` helper to dedupe Tailwind tokens. Order Tailwind classes from layout → spacing → color to ease reviews, and document complex JSX blocks with purposeful comments only when necessary.

## Testing Guidelines
A formal automated suite is not yet wired up, so regression checks rely on `pnpm dev`: confirm time conversions for whole hours and half hours, viewport responsiveness, and translated copy in `lib/i18n/locales/en.ts`. When adding tests, colocate `.test.ts(x)` files beside the implementation or in a focused `__tests__/` folder, and favor Vitest plus React Testing Library to stay aligned with the React 19 stack. Record any new commands in `package.json` and target coverage of edge cases such as DST shifts and keyboard accessibility.

## Commit & Pull Request Guidelines
Adopt Conventional Commits for clarity (`feat: add daylight saving banner`) and write present-tense bodies when context is needed. Every PR should summarize the change, link related issues or tasks, and include before/after screenshots for UI updates. Confirm `pnpm lint` and `pnpm build` locally, call out modified locale files or environment variables in the description, and request review for edits that affect shared components or hooks.
