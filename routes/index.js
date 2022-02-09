import koa from 'koa'
import router from 'koa-router'

const app = koa()

var _ = router() //Instantiate the router

app.use(_.routes()) //Use the routes defined using the router
