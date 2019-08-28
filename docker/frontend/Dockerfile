FROM node:10.13-alpine as node
WORKDIR /app/desafio
COPY desafio/package.json /app/
RUN npm install
ARG env=prod
RUN npm run build
COPY desafio/dist/desafio /app/

FROM nginx:1.13
COPY --from=node /app /usr/share/nginx/html

RUN ls