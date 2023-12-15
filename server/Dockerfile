#!/bin/bash

##
# Build
##
FROM node:18-alpine as build

# Create app folder
WORKDIR /usr/src/app

# Copy source code into app folder
COPY --chown=node:node package*.json ./
COPY --chown=node:node . . 

# Install npm packages
RUN --mount=type=secret,id=env,target=./.env \
    npm cache clean --force && \
    npm install -g npm@latest && \
    npm install

# Build our app for production
RUN npm run build

# Set Docker as a non-root user
USER node

##
# Production
##
FROM node:18-alpine as prod

WORKDIR /usr/src/app

# Copy only the necessary files
COPY --chown=node:node --from=build /usr/src/app/dist ./dist
COPY --chown=node:node --from=build /usr/src/app/node_modules ./node_modules

CMD ["node", "dist/main"]