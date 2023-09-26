const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Note = sequelize.define(
    "Note",
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
          title: {
            type: Sequelize.STRING
          },
          text: {
            type: Sequelize.TEXT
          }
    },
    {
      // Указываем имя таблицы в БД
      tableName: "note",
    }
  );
  return Note;
};
