import Koa from 'koa'

import { dbConnection } from './db.js'

const app = new Koa()

app.use(ctx => {
  ctx.body = 'Hello Koa'
})

dbConnection()

app.listen(7000)