FROM node:lts-alpine as build-stage
RUN mkdir /app
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH
COPY /package.json /app/package.json
RUN npm install
RUN npm install react-scripts@2.1.3 -g --silent
COPY . ./app


CMD ["npm", "start"]