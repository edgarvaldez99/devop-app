FROM node:10.7
EXPOSE 3000

WORKDIR /app
ADD package* /app/
RUN npm i

ADD . /app

CMD ["node", "server"]
