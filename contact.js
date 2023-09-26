// Импортируем объект Sequelize из библиотеки
const { Sequelize } = require("sequelize");

// Импортируем модели
const ContactInitiator = require("./models/Contact");

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

const Contact = ContactInitiator(sequelize);

sequelize.sync().then(() => {
  console.log("БД и таблицы созданы");
});

async function createContact(name, phone, email) {
  const contact = await Contact.create({
    name: name,
    phone: phone,
    email: email,
  });

  return contact.id;
}

async function updateContact(id, name, phone, email) {
  const contact = await Contact.findByPk(id);

  contact.name = name;
  contact.phone = phone;
  contact.email = email;

  await contact.save();
}

async function deleteContact(id) {
  await Contact.destroy({
    where: {
      id: id,
    },
  });
}

async function getContact(id) {
  return await Contact.findByPk(id);
}

async function searchContacts(query) {
  return await Contact.findAll({
    where: {
      name: {
        [Op.like]: `%${query}%`,
      },
    },
  });
}

async function getContacts() {
  return await Contact.findAll();
}

// Создать контакт и получить по id
(async () => {
  const id = await createContact("name", "phone", "email@mail.ru");

  const contact = await getContact(id);
  console.log(contact);
})();
