# Accessibility Payload

Payload CMS backend for the accessibility site.

## Quick Start

### 1. Configure Environment

Create a local `.env` file from the example:

```sh
cp .env.example .env
```

Adjust values as needed. At minimum, set a real `PAYLOAD_SECRET` before using
the environment for anything shared.

### 2. Prepare Media

Copy the `media` directory from a running instance, or create an empty one for
a fresh local setup:

```sh
mkdir -p media
```

### 3. Activate Flox

Activate the development environment and start services:

```sh
flox activate -s
```

The activation hook initializes PostgreSQL on first use and creates the local
database if it does not exist.

### 4. Install Dependencies

```sh
pnpm install
```

Local development uses the `pnpm` package provided by Flox. Production image
builds use Corepack inside the Dockerfile, so Docker resolves pnpm from the
`packageManager` field in `package.json`.

### 5. Restore Data

For a fresh empty local setup, this step can be skipped. To restore a database
dump from another instance:

```sh
pg_restore -d "${PGDATABASE}" --no-owner payload.dump
```

Create that dump on the source instance with:

```sh
pg_dump -Fc -d "${PGDATABASE}" -f payload.dump
```

### 6. Run Locally

```sh
pnpm dev
```

Useful commands:

```sh
pnpm build
pnpm generate:types
pnpm generate:importmap
```

## Upgrading the Development Environment

### 1. Upgrade Flox Packages

```sh
flox upgrade toplevel
```

### 2. Reactivate Flox

Exit the active Flox shell, then activate it again so updated tools and
services are used:

```sh
exit
flox activate -s
```

### 3. Clean Up Old Package Installs

After confirming the upgraded environment works, remove old Flox package
installs:

```sh
flox gc
```

### 4. Align pnpm version

Keep the `packageManager` version in `package.json` aligned with the pnpm version
from Flox. This keeps local installs and Docker image builds on the same pnpm
major version:

```sh
pnpm --version
```

### 5. Align Docker Node.js

If the Node.js major version changes, update the Dockerfile base image to match
the Flox Node.js major version. For example, `nodejs_24` in Flox should use
`node:24-alpine` in `Dockerfile`.
