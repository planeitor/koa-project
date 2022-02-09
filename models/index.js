import { Sequelize } from 'sequelize'
import dbConfig from '../config/database.cjs'

import generatePersonModel from './person.js'

// Top level await is now supported in node > 14
// https://github.com/tc39/proposal-top-level-await
// const dbConfig = await dbConfigPromise

const sequelize = new Sequelize(dbConfig)

const db = {}
const models = [generatePersonModel]

for (const modelFn of models) {
  const model = modelFn(sequelize, Sequelize.DataTypes)
  db[model.name] = model
}

for (const modelName in db) {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
}

db.sequelize = sequelize

export default db
