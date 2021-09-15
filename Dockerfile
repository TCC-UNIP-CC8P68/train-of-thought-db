FROM node:current-buster

EXPOSE 3001

COPY ./src /app

COPY ./util /app

WORKDIR /app

RUN chmod +x ./wait-for-postgres.sh && chmod +x ./psql && chmod +x ./psql.bin

RUN npm install i npm@latest -g 

RUN npm install

CMD ["node", "init-db.js"]
