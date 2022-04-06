FROM node:lts-alpine as build-stage
WORKDIR /homepage

COPY . .
RUN npm install
RUN npm run build

EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]