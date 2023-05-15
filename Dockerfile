FROM node:16.18.0-alpine

WORKDIR /usr/src/app

COPY ./package*.json ./

RUN npm i

COPY . .

RUN sh ./setenv.sh

RUN npm run build