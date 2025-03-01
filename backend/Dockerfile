FROM node:22.13-alpine3.20 AS build

WORKDIR /backend

COPY . .

RUN npm install

RUN npx tsc -b

FROM node:22.13-alpine3.20

WORKDIR /backend

COPY --from=build /backend /backend

EXPOSE 3250

CMD ["node", "./build/app.js"]
