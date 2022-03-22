FROM node:17.7.2-buster-slim

ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

WORKDIR /app

ARG PORT=80
ENV PORT $PORT

COPY package.json package-lock.json ./

RUN npm ci

COPY . /app

CMD ["node", "src/server.js"]

