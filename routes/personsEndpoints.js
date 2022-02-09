import router from 'koa-router'

import { createController } from './personsControllers.js'

var _ = router() //Instantiate the router

_.post('/persons', createController)

function *createController() {
	this.body = body
}
