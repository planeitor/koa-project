
// async function getConfig() {
  

//   const dbConfig = {
//     "database": "postgres",
//     "username": "postgres",
//     "password": "koa",
//     "host":"localhost",
//     "port": 54111,
//     "dialect": "postgres",
//     "operatorsAliases": 0,
//     "pool": {
//       "max": 5,
//       "min": 0,
//       "acquire": 3000,
//       "idle": 10000
//     },
//     "migrationStorageTableName": "sequelize_meta_migrations"
    
    
//   }

//   // const env = dbConfig[config.environment]
//   return dbConfig
// }

  

  const dbConfig = {
    "database": "postgres",
    "username": "postgres",
    "password": "koa",
    "host":"localhost",
    "port": 54111,
    "dialect": "postgres",
    "operatorsAliases": 0,
    "pool": {
      "max": 5,
      "min": 0,
      "acquire": 3000,
      "idle": 10000
    },
    "migrationStorageTableName": "sequelize_meta_migrations"
    
    
  }

  module.exports = dbConfig

  // const env = dbConfig[config.environment]
//   return dbConfig
// module.exports = (async () => {
//   const config = await getConfig()
//   return config
// })()
