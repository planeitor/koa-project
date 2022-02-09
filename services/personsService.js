import models from '../models/index.js'

const { Person } = models

const createService = (data) => {
  return Person.create(data)
}

export { createService }
