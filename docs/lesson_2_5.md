# Получение данных из базы

Используем методы вроде findAll для получения всех данных, и findByPk для получения данных по id:

```js
// Найти всех пользователей
(async () => {
  const users = await User.findAll();
  console.log(users);
})();

// Найти пользователя по id 
(async () => {
  const user = await User.findByPk(1);
  console.log(user);  
})();
```

Получение определенных полей из полученного объекта: 

```js 
// Найти пользователя
(async () => {
  const user = await User.findByPk(1);
  console.log(user.firstName);   
})();
```

Получение определенных полей с фильтрацией:

```js
// Найти пользователей
(async () => {
  const users = await User.findAll({
    where: {
      lastName: 'John'
    }
  });
  console.log(users);
})();
```
