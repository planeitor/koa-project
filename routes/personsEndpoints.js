import Router from 'koa-router'

import { createController, test } from './personsControllers.js'

var router = Router() //Instantiate the router


router.post('/persons', createController)



// router.get('/', test)

router.get('/', async (ctx, next) => {
  ctx.body = 'Hello Koa'
})

export default router


// function *createController() {
// 	this.body = body
// }
