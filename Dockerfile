FROM alpine:latest

RUN apk add --update nodejs npm

WORKDIR /usr/src/app

COPY . ./

RUN npm install

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
