FROM node:lts-alpine as build-stage
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH
COPY /frontend/package.json /app/package.json
RUN npm install

COPY /frontend/. ./


CMD ["npm", "start"]