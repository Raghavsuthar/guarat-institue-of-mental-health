# Multi-stage Dockerfile for Gujarat Institute of Mental Health Psychiatry Education Portal

# Stage 1: Build
FROM node:22-alpine AS builder

WORKDIR /app

# Install dependencies first for Docker caching
COPY package*.json ./
RUN npm ci

# Copy all source files
COPY . .

# Run validation, sitemap generation, and production builds
RUN npm run build

# Stage 2: Production Runtime
FROM node:22-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

# Copy built distribution, server bundle, and package manifests
COPY package*.json ./
RUN npm ci --omit=dev

COPY --from=builder /app/dist ./dist

# Expose container port
EXPOSE 3000

# Start production server
CMD ["node", "dist/server.cjs"]
