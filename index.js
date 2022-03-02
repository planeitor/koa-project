import Koa from 'koa'
import { dbConnection } from './db.js'
import { router } from './routes/index.js'
import bodyParser from 'koa-bodyparser'

const app = new Koa();


const port = 7000
app.use(router.routes())

app.use(bodyParser())
dbConnection()

app.listen(port, () =>
  console.log(`Server running on port ${port}`)
)
// app.listen(7000)