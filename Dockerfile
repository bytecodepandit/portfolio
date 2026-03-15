# Stage 1: build 

FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build


# Stage 2: Serve
FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD sh -c "sed -i 's/listen 80/listen $PORT/' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"