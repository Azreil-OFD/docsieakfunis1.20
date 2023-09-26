// Импортируем объект Sequelize из библиотеки
const { Sequelize } = require("sequelize");

// Импортируем модели
const NoteInitiator = require("./models/Note");

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

const Note = ContactInitiator(sequelize);

sequelize.sync().then(() => {
  console.log("БД и таблицы созданы");
});

async function createNote(title, text) {
  const note = await Note.create({
    title: title,
    text: text,
  });

  return note.id;
}

async function updateNote(id, title, text) {
  const note = await Note.findByPk(id);

  note.title = title;
  note.text = text;

  await note.save();
}

async function deleteNote(id) {
  await Note.destroy({
    where: {
      id: id,
    },
  });
}

async function getNote(id) {
  return await Note.findByPk(id);
}

async function searchNotes(query) {
  return await Note.findAll({
    where: {
      title: {
        [Op.like]: `%${query}%`,
      },
    },
  });
}

async function getNotes() {
  return await Note.findAll();
}

// Создать контакт и получить по id
(async () => {
  const id = await createNote("title", "text");

  const note = await getNote(id);
  console.log(note);
})();
