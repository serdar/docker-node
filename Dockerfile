FROM node:latest

RUN mkdir /app

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3000 9229

CMD ["npm", "run", "start"]