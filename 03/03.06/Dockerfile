FROM node:17.7.2-buster-slim

# Create app directory
WORKDIR /code
COPY package.json package-lock.json /code/

RUN npm install

COPY src /code/src

EXPOSE 8080

CMD [ "npm", "start" ]