const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const User = sequelize.define(
    "User",
    {
      // Описываем поле firstName
      firstName: {
        // Указываем что это строка
        type: DataTypes.STRING,
        // Значение не может быть NULL
        allowNull: false,
      },

      // Описываем поле lastName
      lastName: {
        // Также строка
        type: DataTypes.STRING,
      },

      // Описываем поле email
      email: {
        // Тип - строка
        type: DataTypes.STRING,
        // Значение должно быть уникальным
        unique: true,
        // Добавляем валидатор для проверки формата email
        validate: {
          isEmail: true,
        },
      },
    },
    {
      // Указываем имя таблицы в БД
      tableName: "users",
    }
  );
  return User;
};
