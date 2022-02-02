const Persons = (sequelize, DataTypes) => {
  const personSchema = {
    attributes: {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
        field: 'id',
      },
      names: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'names',
      },
      lastnames: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'lastnames',
      },
      documentType: {
        allowNull: false,
        type: DataTypes.ENUM,
        values: ['CC', 'CE', 'CD', 'PA', 'SC', 'PT', 'PE', 'RC', 'TI', 'CN', 'AS', 'NS', 'DE', 'SI'],
        field: 'document_type',
      },
      document: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'document',
      },
      birthdate: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'birthdate',
      },
      sex: {
        allowNull: false,
        type: DataTypes.ENUM,
        values: ['01', '02', '03'],
        field: 'sex',
      },
      address: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'address',
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at',
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'updated_at',
      },
      deletedAt: {
        allowNull: true,
        type: DataTypes.DATE,
        field: 'deleted_at',
      },
    },
    options: {
      tableName: 'persons',
      paranoid: true,
      timestamps: true,
    },
  }

  const Person = sequelize.define('Person', personSchema.attributes, personSchema.options)

  Person.associate = (models) => {
    models.Person.hasMany(models.Patient, { foreignKey: 'personId', as: 'patients' })
  }

  return Person
}

export default Persons
