FROM node:22-alpine AS base

FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN corepack enable pnpm && pnpm i --frozen-lockfile


FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY src src
COPY package.json pnpm-lock.yaml next.config.mjs tsconfig.json ./
ENV NEXT_TELEMETRY_DISABLED=1
RUN corepack enable pnpm && pnpm run build


FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup -S -g 1001 nodejs
RUN adduser -S -u 1001 -G nodejs nextjs

RUN mkdir .next
RUN chown nextjs:nodejs .next

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000

# server.js is created by next build from the standalone output
# https://nextjs.org/docs/pages/api-reference/next-config-js/output
CMD ["node", "server.js"]
