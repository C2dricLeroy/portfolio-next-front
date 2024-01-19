FROM alpine:latest

RUN apk add --update nodejs npm

WORKDIR usr/src/app

COPY . .

RUN NODE_ENV=development npm i

RUN npm run build

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]
