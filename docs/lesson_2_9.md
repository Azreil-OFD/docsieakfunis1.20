# Приложение "Телефонная книжка" на Node.js

## Описание приложения

Приложение "Телефонная книжка" позволяет хранить и управлять контактами - именами, телефонами, email и другой информацией.

Функционал приложения:

- Добавление контакта
- Редактирование контакта 
- Удаление контакта
- Поиск контактов
- Вывод списка контактов

Данные хранятся в базе данных PostgreSQL. Для работы с БД используется библиотека Sequelize.

## Модель данных

Опишем модель `Contact`, которая будет представлять контакт:

```javascript
sequelize.define('Contact', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING
  },
  phone: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  }
});
```

Поля модели:

- `id` - уникальный идентификатор контакта 
- `name` - имя контакта
- `phone` - телефон
- `email` - электронная почта

## Работа с контактами

Реализуем основные операции:

### Добавление контакта

```javascript
async function createContact(name, phone, email) {
  const contact = await Contact.create({
    name: name, 
    phone: phone,
    email: email
  });
  
  return contact.id;
}
```

### Редактирование контакта

```javascript  
async function updateContact(id, name, phone, email) {
  const contact = await Contact.findByPk(id);
  
  contact.name = name;
  contact.phone = phone; 
  contact.email = email;
  
  await contact.save();
}
```

### Удаление контакта

```javascript
async function deleteContact(id) {
  await Contact.destroy({
    where: {
      id: id
    }
  });
}
``` 

### Получение контакта по id

```javascript
async function getContact(id) {
  return await Contact.findByPk(id); 
}
```

### Поиск контактов

```javascript
async function searchContacts(query) {
  return await Contact.findAll({
    where: {
      name: {
        [Op.like]: `%${query}%` 
      }
    }
  });
}
```

### Получение списка контактов

```javascript 
async function getContacts() {
  return await Contact.findAll();
}
```

Таким образом, используя Sequelize можно реализовать основной функционал приложения "Телефонная книжка" на Node.js.

- [Прошлая статья](lesson_2_8.md)
- [Следующая статья](lesson_2_10.md)
