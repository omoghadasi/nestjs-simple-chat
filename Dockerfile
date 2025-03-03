
FROM node:latest

WORKDIR /app

COPY package.json package-lock.json ./
COPY tsconfig.build.json ./
COPY tsconfig.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm","run","start:dev"]
