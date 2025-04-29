# Etapa 1: Build
FROM node:20.18.1-alpine AS builder

WORKDIR /app

# Instala dependencias
COPY package.json package-lock.json ./
RUN npm install --force

# Copia el resto del código
COPY . .

# Ejecuta el build
RUN npm run build

# Etapa 2: Servir con nginx
FROM nginx:alpine

# Copia el build al directorio de nginx
COPY --from=builder /dist /usr/share/nginx/html

# Copia configuración nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
