/*
1 Створіть об'єкт room з параметри:
ключ height зі значенням 3
ключ tv зі значенням samsung
ключ big зі значенням true
*/
let room = {
  height: 3,
  tv: 'samsung',
  big: true,
}
/*
2 Виведіть в alert тип даних параметра big
*/
alert(room.big);
/*
3 Перевірте, що цей об'єкт не є порожнім і що в ньому є ключ age.
*/
let user = {
  name: 'John',
  age: 30,
};
if ('age' in user) {
  console.log(user.age);
};
/*
4 Отримайте з цього об'єкту елемент, де name == "Bob" і збережіть це в будь-якій змінній.
*/
let users = {
  user_1: {
    name: 'John',
    age: 30,
  },
  user_2: {
    name: 'Bob',
    age: 21,
  },
  user_3: {
    name: 'Anna',
    age: 19,
  }
}
let userFirst ;
for (let key in users) {
  if (users[key].name == 'Bob') {
    userFirst = users[key];
    break;
  }
};
console.log(userFirst);
/*
5 Видаліть із об'єктів (завдання 4) об'єкт з name == "Anna".
Отримайте з об'єкта obj значення id у констанду id, не використовуючи вираз obj.id
const obj = {
  id: 5,
  token: 12343423
};
*/
for (let key in users) {
  if (users[key].name == 'Anna') {
    delete users[key];
    break;
  }
};
const obj = {
  id: 5,
  token: 12343423
};
let id = obj['id'];
/*
6 Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, 
  обсяг паливного баку, середня витрата палива на 100 км., водії),
   і наступні методи для роботи з цим об'єктом:
-Метод, який виводить на екран інформацію про автомобіль.
-Додавання ім’я водія у список
-Перевірка водія на наявність його ім’я у списку
-Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю.
 Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину. 
*/
let car = {
  manufacturer: 'Mercedes',
  model: 'E-Class',
  year: 2023,
  averageSpeed: 120, 
  fuelTankCapacity: 60, 
  fuelConsumption: 8.5,
  drivers: ['Jon', 'Den', 'Kate', 'Denis', 'Anna'],
  showInfo: function() {
    console.log(`manufacturer: ${this.manufacturer}`);
    console.log(`model: ${this.model}`);
    console.log(`year: ${this.year}`);
    console.log(`averageSpeed: ${this.averageSpeed} km/h`);
    console.log(`fuelTankCapacity: ${this.fuelTankCapacity} liters`);
    console.log(`fuelConsumption: ${this.fuelConsumption} liters per 100 km`);
    console.log(`drivers: ${this.drivers.join(' , ')}`);
  },
  addDriver: function(driverName) {
    this.drivers.push(driverName);
  },
  hasDriver: function(driverName) {
    return this.drivers.includes(driverName);
  },
  calc: function(distance) {
    const time = (distance / this.averageSpeed) + Math.floor(distance / (4 * this.averageSpeed));
    const fuelRequired = (distance / 100) * this.fuelConsumption;

    console.log(`Estimated Travel Time: ${time.toFixed(2)} hours`);
    console.log(`Estimated Fuel Required: ${fuelRequired.toFixed(2)} liters`);
  }
};
car.addDriver('Bob');
let isDriverPresent = car.hasDriver('Den');
if (isDriverPresent) {
  console.log(`driverName is present in the list of drivers`);
} else {
  console.log(`driverName is not present in the list of drivers`);
}
car.calc(1000);
