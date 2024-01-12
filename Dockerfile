FROM node:20

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

USER node

CMD ["npm", "run", "start"]