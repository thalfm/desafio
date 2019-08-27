FROM node:10.13-alpine as node
WORKDIR /app/desafio
COPY package.json /app/
RUN npm i npm@latest -g
RUN npm install
COPY ./ /app/
ARG env=prod
RUN npm run build

FROM nginx:1.13
COPY --from=node /app/desafio/dist /usr/share/nginx/html
COPY /nginx/default.conf /etc/nginx/conf.d/default.conf