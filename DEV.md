# Local development (memory-safe)

This app runs **Next.js + Payload CMS + Postgres**. Dev mode is heavy (~2–4 GB RAM is normal). These settings reduce spikes and wrong workspace detection.

## Before starting dev

1. **Parent lockfile (important)**  
   If you have `~/package-lock.json` (outside this repo), Next may treat your home folder as the workspace and watch far too many files. Either remove that lockfile or keep `turbopack.root` in `next.config.mjs` (already set).

2. **Environment**  
   ```bash
   cp .env.example .env.local
   ```
   Fill in `DATABASE_URL`, `PAYLOAD_SECRET`, and `NEXT_PUBLIC_SERVER_URL`.

3. **Database tables (required once)**  
   Payload tables (`users`, `leads`, etc.) must exist before `/admin` works:
   ```bash
   npm run db:migrate
   ```
   After you change collections in code, run `npm run db:migrate:create` (name your migration), then `npm run db:migrate`.

## Commands

| Command | Use when |
|--------|----------|
| `npm run dev` | **Default** — Webpack dev, lower RAM than Turbopack with Payload |
| `npm run dev:turbo` | Faster HMR if you have enough RAM |
| `npm run build` | Production check (no dev server) |

Dev is capped at **4 GB** heap via `NODE_OPTIONS` so Node cannot grow without bound and freeze your Mac.

## If RAM is still high

- Close other Chrome/Cursor windows; Payload admin is memory-heavy.
- Skip opening `/admin` unless you need CMS.
- Stop dev with `Ctrl+C` when done — do not leave it running.
- Clear cache: `rm -rf .next` then restart.
- On Apple Silicon, Activity Monitor → Node — expect 1–3 processes during dev.

## Do not run dev automatically

CI and agents should use `npm run build` only unless you explicitly ask to start the dev server.
