FROM node:20-alpine
RUN npm install -g pnpm
WORKDIR /app
COPY package*.json ./
COPY pnpm-lock.yaml* ./
RUN find . -name "._*" -type f -delete || true
RUN pnpm install
COPY . .
# 7. Exponemos el puerto que usa Vite por defecto
EXPOSE 5173
# 8. Comando para desarrollo con hot-reload
# --host es VITAL para que Docker permita ver la app desde fuera
CMD ["pnpm", "run", "dev", "--host"]
