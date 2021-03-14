# Node 12 をベースイメージとする
FROM node:12

# アプリケーションディレクトリを作成する
WORKDIR /usr/src/app


COPY package*.json ./

# アプリケーションのソースをバンドルする
COPY . .

RUN npm install && \
  npm run generate

EXPOSE 8080

CMD npm run start:docker