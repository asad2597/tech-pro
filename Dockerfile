# Stage 1: Build Angular app
FROM node:20 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install -g @angular/cli
RUN npm install
COPY . .
RUN ng build --configuration production

# Stage 2: Nginx for serving Angular app
FROM nginx:alpine
COPY --from=build /app/dist/techpro/browser /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
