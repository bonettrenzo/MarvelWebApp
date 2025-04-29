FROM node:20.18.1 AS builder
WORKDIR /app
COPY package*.json ./
COPY . .
RUN npm install && npm run build
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

