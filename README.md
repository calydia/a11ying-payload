# Quick start

1. Create `.env` file either copying from a running instance, or by using
`.env.example` as a template.
1. Copy over `media` directory from a running instance, or just with
`mkdir media`.
1. Activate dev environment with `flox activate -s`.
1. Install packages with `pnpm install`
1. Import DB dump from a running instance with
`pg_restore -d "${PGDATABASE}" --no-owner payload.dump` (created with `
pg_dump -Fc -d "${PGDATABASE}" -f payload.dump`).
1. Start the dev server with `pnpm dev`.
