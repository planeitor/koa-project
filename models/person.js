const Persons = (sequelize, DataTypes) => {
  const personSchema = {
    attributes: {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
        field: "id",
      },
      names: {
        allowNull: false,
        type: DataTypes.STRING,
        field: "names",
      },
      lastnames: {
        allowNull: false,
        type: DataTypes.STRING,
        field: "lastnames",
      },
      document: {
        allowNull: false,
        type: DataTypes.STRING,
        field: "document",
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: "created_at",
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: "updated_at",
      },
      deletedAt: {
        allowNull: true,
        type: DataTypes.DATE,
        field: "deleted_at",
      },
    },
    options: {
      tableName: "persons",
      paranoid: true,
      timestamps: true,
    },
  };

  const Person = sequelize.define(
    "Person",
    personSchema.attributes,
    personSchema.options
  );

  return Person
}

export default Persons
