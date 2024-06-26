FROM node:latest AS build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

FROM nginx:alpine
COPY --from=build /app/dist/* /usr/share/nginx/html/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
