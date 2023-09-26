// Импортируем объект Sequelize из библиотеки
const { Sequelize } = require("sequelize");

// Импортируем модели
const RedirectInitiator = require("./models/Redirect");

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

const Redirect = RedirectInitiator(sequelize);

sequelize.sync().then(() => {
  console.log("БД и таблицы созданы");
});

// Функция добавления redirect
async function createRedirect(url) {
  try {
    // Создаем запись
    const redirect = await Redirect.create({
      url: url,
    });

    // Возвращаем id
    return redirect.id;
  } catch (err) {
    // В случае ошибки возвращаем -1
    return -1;
  }
}

async function getUrl(id) {
  try {
    // Ищем запись
    const redirect = await Redirect.findByPk(id);

    // Возвращаем url
    return redirect.url;
  } catch (err) {
    // В случае ошибки возвращаем -1
    return -1;
  }
}

// Создать редирект и получить id
(async () => {
  const id = await createRedirect("https://example.com");
  console.log(id);

  // Получить по id ссылку для редиректа
  const url = await getUrl(id); // получит url по id
  console.log(url); // 'https://example.com'
})();
