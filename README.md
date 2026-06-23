# MRJB Estate - Kunj Bihari Enclave

A premium real estate platform and landing page developed for **MRJB Group** showcasing **Kunj Bihari Enclave Phase 1** (premium residential plots near Vrindavan, Mathura). 

The project is structured as a modern monorepo using `pnpm` workspaces, with Tailwind CSS v4 and Vite powering the frontend application.

## Workspace Structure

```
├── artifacts/
│   ├── mrjb-website/       # Main React/Vite SPA frontend website (Tailwind CSS v4, wouter)
│   ├── mockup-sandbox/     # Isolated mockup preview sandbox
│   └── api-server/         # Minimal Express health check API server
├── lib/
│   ├── api-client-react/   # Auto-generated React Query API client
│   ├── api-spec/           # OpenAPI specs and code-generation configurations
│   ├── api-zod/            # Zod validation schemas shared between frontend/backend
│   └── db/                 # Shared database layer configurations (Drizzle ORM)
├── attached_assets/        # High-res static images and brochure assets
└── package.json            # Workspace root package definition
```

## Quick Start (Local Development)

### Prerequisites

Ensure you have **Node.js** and **pnpm** installed.

### 1. Install Dependencies

Install workspace dependencies and resolve catalogs:

```bash
pnpm install
```

### 2. Run the Development Server

To run the main landing page locally:

```bash
pnpm --filter @workspace/mrjb-website run dev
```

To run the mockup sandbox:

```bash
pnpm --filter @workspace/mockup-sandbox run dev
```

### 3. Typecheck and Lint

Run full compiler checks across all workspace libraries and applications:

```bash
pnpm run typecheck
```

### 4. Build for Production

Compile all libraries and build the production bundle for the website:

```bash
pnpm run build
```

The compiled assets will be written to `artifacts/mrjb-website/dist/public`.

## Vercel Deployment

This project is fully configured for direct deployment to Vercel.

### Deployment Instructions

1. Connect your GitHub/GitLab repository to **Vercel**.
2. Create a new project and select the root directory of this repository.
3. In the Vercel Project Settings, change the **Root Directory** to `artifacts/mrjb-website`.
4. Vercel will automatically detect the `pnpm` workspace, install dependencies at the root level, and run the build command.
5. The build settings should configure automatically as:
   - **Build Command**: `pnpm run build`
   - **Output Directory**: `dist/public`
6. The `vercel.json` file inside `artifacts/mrjb-website` handles clean URLs and rewrites all routes to `index.html` to support client-side SPA routing.
