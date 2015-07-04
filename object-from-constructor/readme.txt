Создание профиля пользователя через класс конструктор
созданный объект должен иметь поля:
date_created
date_updated
surname
firstname
patronymic
age
wife: new Spouse() // внутри те же поля
Примерное использование:
var profile = new Profile();
profile.setData({ age: 123, name: 'vasya', lastname: 'Pupkin', patronymic: 'vasilich', hasSpouse: true  });
profile.hasSpouse&& profile.setSpouseData({ //set some data..});

Ну и соответственно метод, getProperty, который принимает название свойства и возвращает его значение
