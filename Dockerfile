FROM node:17.9.1-alpine
EXPOSE 2333/tcp
WORKDIR /usr/src/app
COPY . .
RUN npm install
RUN npm run deploy
CMD [ "node", "index.js" ]
