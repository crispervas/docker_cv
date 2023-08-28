FROM node:14.4.0 as cv-server
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install
RUN npm audit fix --force

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start"]