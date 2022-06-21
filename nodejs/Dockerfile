FROM node:16

RUN apt-get update \
    && apt install -y build-essential

WORKDIR /usr/src/app

COPY /src package.json package-lock.json /usr/src/app/

RUN npm install

EXPOSE 3000

CMD ["node", "index.js"]