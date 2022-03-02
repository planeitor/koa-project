import { createService } from '../services/personsService.js'
const time = new Date().toISOString()

const createController = async (ctx, next) => {
  console.log('aquí');
  console.log('ctx: ', ctx);
  const persons = await createService(ctx.req.body)
  next()

  return persons
}

const test = async (ctx, next) => {
  ctx.body = 'Hello Koa'
}

export { createController, test }