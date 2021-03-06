FROM node:10-alpine3.10
WORKDIR /usr/src/app
COPY package.json pacage*.json ./
RUN npm install --only=production
COPY . .
CMD ["npm", "start"]
