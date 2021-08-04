module.exports = (sequelize, DataTypes) => {
  const dtDistricts = sequelize.define(
    `dtDistricts`,
    {
      State: {
        type: DataTypes.STRING(2),
        allowNull: false,
        primaryKey: true,
      },
      CongressionalDistrict: {
        type: DataTypes.STRING(3),
        allowNull: true,
      },
      LegislativeDistrict: {
        type: DataTypes.STRING(3),
        allowNull: true,
      },
      SenateDistrict: {
        type: DataTypes.STRING(3),
        allowNull: true,
      },
      Zipcode: { 
        type: DataTypes.STRING(5),
	allowNull: true
       },
    },
    {
      tableName: `dtDistricts`,
      timestamps: false,
      freezeTableName: true,
    },
  )
  return dtDistricts
}
