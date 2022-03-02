import { Sequelize } from 'sequelize'
// import { config } from './config/environment.js'
import dbConfig from './config/database.cjs'
// Top level await is now supported in node > 14
// https://github.com/tc39/proposal-top-level-await
// const dbConfig = await dbConfigPromise

class DB {
  constructor() {
    if (!DB.sequelize) {
      this.dbConfig = dbConfig
      this.sequelize = new Sequelize(dbConfig)
      this.__connectionTest()
    }
    return this.sequelize
  }

  async __connectionTest() {
    await this.sequelize.authenticate()
    console.log(`[Postgres]: connected to ${dbConfig.database} DB on port ${dbConfig.port} and host ${dbConfig.host}`)
  }
}

let dbInstance
const dbConnection = () => {
  dbInstance = new DB()
  return dbInstance
}

const connectAndReturnPromiseWithConnection = async () => {
  const sequelize = new Sequelize(dbConfig)
  await sequelize.authenticate()
  return sequelize
}

export { dbConnection, connectAndReturnPromiseWithConnection }
