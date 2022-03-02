import Koa from 'koa'
import Router from 'koa-router'

import persons from './personsEndpoints.js'
import { createController } from './personsControllers.js'

const app = new Koa()

var router = Router() //Instantiate the router

//Use the routes defined using the router

// router.get('/', persons)

router.get('/', async (ctx, next) => {
  ctx.body = 'Hello Koa'
})

router.post('/persons', createController)


// app.use('/', persons)

// app
//   .use(router.routes())
//   .use(router.allowedMethods());

export { router }
