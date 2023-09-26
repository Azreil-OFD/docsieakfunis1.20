const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Redirect = sequelize.define(
    "Redirect",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      url: {
        type: DataTypes.STRING,
      },
    },
    {
      // Указываем имя таблицы в БД
      tableName: "redirect",
    }
  );
  return Redirect;
};
