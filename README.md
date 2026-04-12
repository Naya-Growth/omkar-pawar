# Omkar Pawar

Standalone Vite + React website for **Omkar Pawar / Freedom Innerwellbeing**.

## Stack

- Vite + React 19 + TypeScript
- Tailwind CSS v4
- Docker + Nginx production runtime
- `/api/lead` proxy into `naya-api`
- GitHub Actions validation and `production` deploy

## Local Development

1. Install dependencies:
   `npm ci`
2. Start the dev server:
   `npm run dev`
3. Run validation:
   - `npm test`
   - `npm run lint`
   - `npm run verify:assets`
   - `npm run build`

## Deployment

- Live host: `omkarpawar.com`
- `production` branch auto-deploys through `.github/workflows/deploy-production.yml`
- Container health endpoint: `/healthz`

## Notes

- Lead capture posts to `/api/lead` and is proxied to `naya-api`
- Naya project ownership, notifications, and portal visibility are configured on the live platform side
