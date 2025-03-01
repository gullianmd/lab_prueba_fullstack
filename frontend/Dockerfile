FROM node:22.13-alpine3.20 AS stage_1

WORKDIR /frontend

COPY . .

RUN npm install
RUN npm run build

FROM node:22.13-alpine3.20 AS stage_2

WORKDIR /frontend

COPY --from=stage_1 /frontend /frontend

EXPOSE 3000

CMD ["npm", "run", "start"]
