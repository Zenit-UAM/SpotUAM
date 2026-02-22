FROM node:20-alpine
RUN npm install -g pnpm
WORKDIR /app
COPY package*.json ./
COPY pnpm-lock.yaml* ./
RUN find . -name "._*" -type f -delete || true
RUN pnpm install
COPY . .
CMD [ "pnpm", "run", "dev" ]
