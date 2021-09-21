# Build Image
FROM node:lts-alpine AS build

WORKDIR /app

COPY ./package.json ./package-lock.json /app/

RUN npm ci --only=production

# App Image
FROM node:lts-alpine

WORKDIR /app

ENV NODE_ENV production

COPY --chown=node:node --from=build /app/node_modules /app/node_modules

COPY --chown=node:node ./src /app

RUN apk add dumb-init

USER node

CMD ["dumb-init", "node", "init-db.js"]
