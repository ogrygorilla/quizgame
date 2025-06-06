# Use official Node image
FROM node:alpine AS builder

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

# Use lightweight nginx to serve build files
FROM nginx:stable-alpine

COPY --from=builder /app/dist /usr/share/nginx/html
COPY --from=builder /app/nginx.config /etc/nginx/conf.d/default.conf

EXPOSE 7777

CMD ["nginx", "-g", "daemon off;"]
