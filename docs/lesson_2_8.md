# Написание программы для работы с редиректами на Node.js


## Создание модели Redirect

Опишем модель Redirect, которая будет хранить данные о редиректах:

```javascript
sequelize.define('Redirect', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  url: {
    type: Sequelize.STRING
  }
});
```
Скопируй файл `User.js` и переименуй в `Redirect.js`. В котором замени поля и наименование переменой.


Поля модели:

- id - уникальный идентификатор редиректа
- url - ссылка, на которую будет происходить редирект

## Подключение к БД

Создадим экземпляр Sequelize, передав параметры подключения:

```javascript 
const sequelize = new Sequelize('postgres', 'postgres', 'password', {
  host: 'localhost',
  dialect: 'postgres'
});
```

Проверим подключение:

```javascript
try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}
```

Синхронизируем модель Redirect с БД:

```javascript
sequelize.sync();
```

## Добавление редиректа 

Реализуем функцию для добавления нового редиректа:

```javascript
async function createRedirect(url) {
  const redirect = await Redirect.create({ 
    url: url
  });
  
  return redirect.id;
}
```

## Получение редиректа по id

Функция для получения данных редиректа по id:

```javascript
async function getUrl(id) {
  const redirect = await Redirect.findByPk(id);
  return redirect.url; 
}
```

## Использование

Теперь можно добавлять и получать редиректы:

```javascript
// Создать редирект
const id = await createRedirect("https://example.com");

// Получить по id
const url = await getUrl(id);
```

Вот таким образом можно реализовать программу для работы с редиректами на Node.js и PostgreSQL используя Sequelize.


- [Прошлая статья](lesson_2_1.md)
- [Следующая статья](lesson_2_3.md)