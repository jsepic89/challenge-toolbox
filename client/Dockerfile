FROM node:16

WORKDIR /app/client

COPY package*.json ./
RUN npm install

COPY . .

CMD ["npm", "start"]