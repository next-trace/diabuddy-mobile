FROM node:20-alpine

WORKDIR /app

RUN apk add --no-cache bash git
RUN corepack enable && corepack prepare pnpm@10.33.0 --activate

COPY pnpm-workspace.yaml package.json pnpm-lock.yaml tsconfig.base.json ./
COPY apps/mobile/package.json ./apps/mobile/package.json
COPY packages/ui/package.json ./packages/ui/package.json

RUN pnpm install --frozen-lockfile

COPY . .

EXPOSE 19006

CMD ["pnpm", "--filter", "@nexdoz/mobile", "exec", "expo", "start", "--web", "--port", "19006", "--host", "lan"]
