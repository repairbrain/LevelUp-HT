/*Создание профиля пользователя через класс конструктор
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
profile.hasSpouse&& profile.setSpouseData({ //set some data..});*/

/*Ну и соответственно метод, getProperty, который принимает название свойства и возвращает его значение*/

function Profile () {
	this.setData = function (obj) {
		this.age = obj.age;
		this.name = obj.name;
		this.lastname = obj.lastname;
		this.patronymic = obj.patronymic;
		this.hasSpouse = obj.hasSpouse;
	}

	this.wife = new Spouse();

	function Spouse () {
		this.setSpouseData = function (obj) {
			this.age = obj.age;
			this.name = obj.name;
			this.lastname = obj.lastname;
			this.patronymic = obj.patronymic;
			this.hasSpouse = obj.hasSpouse;
		}
	}

	this.getProperty = function (prop) {
		for (var key in this) {
			if (key === prop) {
				return this[prop];
			}
		}
	}
}

/*например:*/

var profile = new Profile();
profile.setData({ age: 123, name: 'vasya', lastname: 'Pupkin', patronymic: 'vasilich', hasSpouse: true  });
profile.wife.setSpouseData({ age: 345, name: 'alena', lastname: 'Kakina', patronymic: 'aleksandrovna', hasSpouse: false  });

console.log(profile);
console.log(profile.getProperty("lastname"));