const { Sequelize } = require('sequelize')
// import { Sequelize } from 'sequelize'
// const { Sequelize } = await import('sequelize')

const tableName = 'persons'
const attributes = {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    allowNull: false,
    defaultValue: Sequelize.UUIDV4,
    field: 'id',
  },
  names: {
    allowNull: false,
    type: Sequelize.STRING,
    field: 'names',
  },
  lastnames: {
    allowNull: false,
    type: Sequelize.STRING,
    field: 'lastnames',
  },
  documentType: {
    allowNull: false,
    type: Sequelize.ENUM,
    values: ['CC', 'CE', 'CD', 'PA', 'SC', 'PT', 'PE', 'RC', 'TI', 'CN', 'AS', 'NS', 'DE', 'SI'],
    field: 'document_type',
  },
  document: {
    allowNull: false,
    type: Sequelize.STRING,
    field: 'document',
  },
  birthdate: {
    allowNull: false,
    type: Sequelize.DATE,
    field: 'birthdate',
  },
  sex: {
    allowNull: false,
    type: Sequelize.ENUM,
    values: ['01', '02', '03'],
    field: 'sex',
  },
  address: {
    allowNull: false,
    type: Sequelize.STRING,
    field: 'address',
  },
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE,
    field: 'created_at',
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE,
    field: 'updated_at',
  },
  deletedAt: {
    allowNull: true,
    type: Sequelize.DATE,
    field: 'deleted_at',
  },
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(tableName, attributes)
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable(tableName)
  }
}
