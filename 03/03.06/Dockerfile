FROM node:13.10

# Create app directory
WORKDIR /code
COPY package.json package-lock.json /code/

RUN npm install

COPY src /code/src

EXPOSE 8080

CMD [ "npm", "start" ]