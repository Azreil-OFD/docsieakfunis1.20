// Импортируем объект Sequelize из библиотеки
const { Sequelize } = require("sequelize");

// Импортируем модели
const UserInitiator = require("./models/User");

// Создаем экземпляр Sequelize, передавая параметры подключения
const sequelize = new Sequelize("postgres", "postgres", "password", {
  host: "localhost", // хост
  dialect: "postgres", // СУБД PostgreSQL
});

// Выполняем асинхронную проверку подключения
try {
  sequelize.authenticate(); // вызываем метод authenticate
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

const User = UserInitiator(sequelize);
sequelize.sync().then(() => {
  console.log("БД и таблицы созданы");
});

const newUser = {
  firstName: "John",
  lastName: "Doe",
  email: "john@example.com",
};

// Добавляем пользователя в БД
User.create(newUser)
  .then((user) => {
    console.log("Пользователь создан:", user.id);
  })
  .catch((err) => {
    console.log("Ошибка создания пользователя:", err);
  });

(async () => {
  let users = await User.findAll();

  console.log(users);
})();

(async () => {
  let user = await User.findByPk(1);

  console.log(user);
})();

(async () => {
  let user = await User.findByPk(1);

  console.log(user["firstName"]);
})();
