# ─── Stage 1: Install dependencies ───────────────────────────────────────────
# We use a lightweight Node.js image (alpine = stripped-down Linux, ~5MB)
FROM node:20-alpine AS deps

WORKDIR /app

# Copy only package files first — Docker caches this layer separately.
# If your code changes but package.json doesn't, Docker skips reinstalling.
COPY package.json package-lock.json ./
RUN npm ci --legacy-peer-deps

# ─── Stage 2: Build the app ───────────────────────────────────────────────────
FROM node:20-alpine AS builder

WORKDIR /app

# Copy installed node_modules from previous stage
COPY --from=deps /app/node_modules ./node_modules

# Copy the rest of the source code
COPY . .

# Build the Next.js app (runs `next build`)
# next.config.ts has output: "standalone" so the build produces a self-contained folder
RUN npm run build

# ─── Stage 3: Production image ────────────────────────────────────────────────
# This is the final image that actually runs. It's tiny because:
# - No node_modules (standalone build includes only what's needed)
# - No source code, only compiled output
FROM node:20-alpine AS runner

WORKDIR /app

# Don't run as root inside the container (security best practice)
RUN addgroup --system nodejs && adduser --system --ingroup nodejs nextjs

# Copy only the standalone build output from the builder stage
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

# Tell Next.js to listen on all network interfaces inside the container
ENV HOSTNAME="0.0.0.0"
ENV PORT=3000
ENV NODE_ENV=production

# Switch to non-root user
USER nextjs

# Expose port 3000 (doesn't actually open it — just documents it)
EXPOSE 3000

# Start the app
CMD ["node", "server.js"]
