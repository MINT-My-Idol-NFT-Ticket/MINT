FROM node:lts-alpine as build-stage
RUN mkdir /app
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH
COPY /package.json /app/package.json
RUN npm install

COPY . ./app


CMD ["npm", "start"]