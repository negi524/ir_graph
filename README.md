# ir_graph

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Docker

### イメージのビルド

```bash
$ docker build -t ir-graph:1.0 .
```

### コンテナの作成

```bash
$ docker container run -it --name "ir-graph-container" -d -p 8080:8080 ir-graph:1.0
```

### アプリケーションにアクセス

```bash
$ curl -XGET localhost:8080
```