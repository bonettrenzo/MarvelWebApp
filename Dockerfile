# Etapa 1: Construcción
FROM node:18-alpine AS builder

WORKDIR /app

# Copiamos los archivos necesarios
COPY package*.json ./
COPY vite.config.* ./
COPY . .

# Instalamos dependencias y construimos la app
RUN npm install
RUN npm run build

# Etapa 2: Servidor web
FROM nginx:alpine

# Copiamos los archivos de producción al directorio de Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Reemplazamos la configuración por defecto de Nginx (opcional)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exponemos el puerto
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
