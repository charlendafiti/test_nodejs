FROM node:alpine3.16 AS base
WORKDIR /app
ENTRYPOINT [ "node", "/app/index.js" ]