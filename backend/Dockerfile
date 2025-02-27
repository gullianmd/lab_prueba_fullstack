FROM node:22.13-alpine3.20

WORKDIR /backend

COPY . .

RUN npm install && npm run build

EXPOSE 3250

CMD ["npm", "run", "start"]
