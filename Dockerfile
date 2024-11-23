FROM  node:lts-alpine

WORKDIR /front_end_public/

COPY . .

RUN npm install
RUN apk add --no-cache curl
RUN apk add bind-tools

CMD ["npm", "start"]
