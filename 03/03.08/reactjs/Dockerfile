# Stage 1
FROM node:13.10 as development

ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

WORKDIR /code
COPY package.json package-lock.json /code/
RUN npm ci
COPY src /code/src
COPY public /code/public

CMD [ "npm", "start" ]

# Stage 2 - builder
FROM development AS builder

RUN npm run build

# Stage 3 - the production environment
FROM nginx:1.17.9 AS production
COPY --from=builder /code/build /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]