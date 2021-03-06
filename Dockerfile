FROM node:12.16.1-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY config config
COPY public public
COPY src src
COPY seed.json seed.json

EXPOSE 3030

CMD ["npm", "start", "seed"]