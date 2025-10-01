# Repository Overview

- **Name**: Final-main
- **Primary Stack**: TypeScript, React, Vite, TailwindCSS, Node.js/Express
- **Client Directory**: `client/`
  - **Entry Point**: `client/src/main.tsx`
  - **Styling**: TailwindCSS configured via `tailwind.config.ts`
- **Server Directory**: `server/`
  - **Entrypoint**: `server/index.ts`
  - **Database**: MongoDB connection helpers in `server/db`
- **Shared Models**: `shared/schema.ts`
- **Build Output**: `dist/`

## Tooling

- **Package manager**: npm (see `package.json`).

## Common Tasks

1. **Install dependencies**
   ```bash
   npm install
   ```
2. **Run development server**
   ```bash
   npm run dev
   ```
3. **Build project**
   ```bash
   npm run build
   ```
4. **Preview production build**
   ```bash
   npm run preview
   ```

## Notes

- Ensure TailwindCSS classes are purged via `content` settings in `tailwind.config.ts`.
- Environment variables are stored in `.env` and loaded by both client and server as needed.
- Shared types should be placed in `shared/` to avoid duplication between client and server.
