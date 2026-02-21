# Multi-stage Dockerfile for Next.js Portfolio

# Stage 1: Build stage
FROM node:22.21.1-alpine AS builder

WORKDIR /app

# Copy package files
COPY package.json package-lock.json* ./

# Install dependencies (uses `npm i` as requested)
RUN npm i

# Copy project files
COPY . .

# Build the Next.js app
RUN npm run build

# Stage 2: Runtime stage
FROM node:22.21.1-alpine

WORKDIR /app

# Set NODE_ENV to production
ENV NODE_ENV=development

# Copy only necessary files from builder
COPY --from=builder /app/package.json package-lock.json* ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

# Expose port 3000 (Next.js default)
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3000', (r) => {if (r.statusCode !== 200) throw new Error(r.statusCode)})"

# Start the application (production)
CMD ["npm", "start"]
