# Подключение к PostgreSQL с помощью Sequelize в Node.js

Sequelize - это популярный ORM для Node.js, который позволяет легко работать с разными реляционными базами данных, в том числе с PostgreSQL. Рассмотрим как подключиться к PostgreSQL используя Sequelize.

## Установка Sequelize

Чтобы начать использовать Sequelize, нужно установить пакет через npm:

```
npm install sequelize pg pg-hstore
```

Эта команда установит последнюю стабильную версию Sequelize в ваш проект.

## Подключение к БД

Для подключения к БД PostgreSQL необходимо создать экземпляр объекта Sequelize, передав параметры подключения:

```js
// Импортируем объект Sequelize из библиотеки
const { Sequelize } = require('sequelize');
```

Здесь мы импортируем класс Sequelize из установленной библиотеки sequelize.

```js
// Создаем экземпляр Sequelize, передавая параметры подключения  
const sequelize = new Sequelize('database', 'user', 'password', {
  host: 'localhost', // хост
  dialect: 'postgres' // СУБД PostgreSQL 
});
```

Создаем экземпляр Sequelize, передавая название базы данных, пользователя, пароль, хост и диалект БД.

Здесь указываем:
- Название БД
- Имя пользователя БД  
- Пароль
- Хост и диалект БД (postgres для PostgreSQL)

Далее можно проверить подключение:

```js 
// Выполняем проверку подключения
try {
 sequelize.authenticate(); // вызываем метод authenticate
  console.log('Connection has been established successfully.'); 
} catch (error) {
  console.error('Unable to connect to the database:', error);
}
```

Метод `authenticate()` попытается подключиться к БД и выбросит ошибку в случае проблем с доступом или конфигурацией.

## Итог

Используя Sequelize можно довольно просто установить соединение с PostgreSQL из Node.js. Дальше ORM позволит объектно-моделировать данные и выполнять запросы, избегая сложностей работы с SQL напрямую.

- [Прошлая статья](lesson_2_1.md)
- [Следующая статья](lesson_2_3.md)
