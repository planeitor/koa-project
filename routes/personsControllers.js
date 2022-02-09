import { createService } from '../services/personsService.js'

const createController = () => {
  const persons = await createService(body)
  return persons
}

export { createController }
