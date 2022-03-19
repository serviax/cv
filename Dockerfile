FROM node:lts-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app


LABEL maintainer="Servaas Phlips"

COPY ["server/package.json", "server/package-lock.json*", "server/npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../

COPY server/build/ build/
ARG PORT=8080
ENV PORT=${PORT}
EXPOSE ${PORT}

COPY client/build static/

RUN chown -R node /usr/src/app
USER node
CMD ["npm", "start"]
