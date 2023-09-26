# Приложение "Note" на Node.js

## Описание приложения

Приложение "Note" предназначено для создания и хранения заметок. 

Функционал приложения:

- Создание заметки
- Редактирование заметки
- Удаление заметки
- Поиск по заметкам
- Просмотр списка заметок

Данные хранятся в БД PostgreSQL с использованием ORM Sequelize.

## Модель данных

Опишем модель `Note` для хранения заметок:

```javascript
sequelize.define('Note', {
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
});
```

Поля модели:

- `id` - уникальный идентификатор заметки
- `title` - заголовок заметки
- `text` - текст заметки

## Основной функционал

Реализуем основные операции с заметками:

### Создание заметки

```javascript
async function createNote(title, text) {
  const note = await Note.create({
    title: title,
    text: text    
  });
  
  return note.id;
}
```

### Редактирование заметки

```javascript
async function updateNote(id, title, text) {
  const note = await Note.findByPk(id);

  note.title = title;
  note.text = text;

  await note.save(); 
}
```

### Удаление заметки

```javascript  
async function deleteNote(id) {
  await Note.destroy({
    where: {
      id: id 
    }
  });
}
```

### Получение заметки по id

```javascript
async function getNote(id) {
  return await Note.findByPk(id);
}
```

### Поиск заметок

```javascript
async function searchNotes(query) {
  return await Note.findAll({
    where: {
      title: {
        [Op.like]: `%${query}%`
      } 
    }
  });
}
```

### Получение списка заметок

```javascript
async function getNotes() {
  return await Note.findAll(); 
}
```

Таким образом на Node.js c использованием Sequelize можно реализовать приложение для работы с заметками.

- [Прошлая статья](lesson_2_9.md)
- [Следующая статья](lesson_2_11.md)