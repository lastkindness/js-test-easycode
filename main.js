// /*# Домашнее задание 2 неделя.

// 1. Дан объект **car**.
// Написать условие если поле **lastService** больше 5 месяцев (*из строки нужно достать число*) 
// то нужно вывести в консоль сообщение 'Need Repair' и свойство **needRepair** в объекте **car** 
// изменить на **true**; иначе изменить на **false**.

//     let car = { 
//       name: 'Lexus', 
//       age: 10, 
//       lastService: '1 month',
//       create: 2008, 
//       needRepair: false 
//     }*/

// let car = { 
//   name: 'Lexus', 
//   age: 10, 
//   lastService: '6 month',
//   create: 2008, 
//   needRepair: false 
// }

// function firstTask(car) {
//   if(parseInt(car.lastService)>5) {
//     car.needRepair = true;
//     return ["Need Repair", "car.needRepair: " + car.needRepair];
//   } else {
//     car.needRepair = false;
//     return ["NO Need Repair", "car.needRepair: " + car.needRepair];
//   }
// }

// console.log(firstTask(car));

// /*2. Дан следующий код:

//     let product = {
//         name: 'Яблоко',
//         price: '10$'
//     };
    
//     let min = 10; // минимальная цена
//     let max = 20; // максимальная цена

// Написать условие **если цена товара больше или равна минимальной цене и меньше или равна максимальной цене** 
// то вывести в консоль название этого товара, иначе вывести в консоль что товар не найден.*/

// let product = {
//     name: 'Яблоко',
//     price: '10$'
// };

// let min = 10; // минимальная цена
// let max = 20; // максимальная цена
// function secondTask(product, min, max) {
//   let result = parseInt(product.price)>=min&&parseInt(product.price)<=max ? product.name : "товар не найден";
//   return result;
// }

// console.log(secondTask(product, min, max));

// /*3. На основе строки
// *“JavaScript is a pretty good language”*
// Cделать новую строку, где каждое слово начинается с большой буквы, а пробелы удалены. Использовать цикл **for.***/

// let string = "JavaScript is a pretty good language";

// function thirdTask(string) {
//   let newString = "";
//   let arr = string.split(" ");
//   for(let i=arr.length-1; i>=0; i--) {
//     newString = arr[i][0].toUpperCase() + arr[i].substring(1) + newString;
//   }
//   return newString;
// }

// console.log(thirdTask(string));

// /*4. Создать функцию, которая принимает массив, а возвращает новый массив с дублированными элементами входного массива:
// *doubleArray([1,2,3]) // [1,2,3,1,2,3]**/
// let array = [1,2,3];

// function fourthTask(array) {
//   let doubleArray = array;
//   doubleArray = doubleArray.concat(array);
//   return doubleArray;
// }

// console.log(fourthTask(array));
// /*5. Создать функцию, которая принимает произвольное (любое) число массивов и удаляет из каждого массива первый элемент, а возвращает массив из оставшихся значений:
// *changeCollection([1,2,3], [‘a’, ’b’, ‘c’]) → [ [2,3], [‘b’, ‘c’] ],* 
// *changeCollection([1,2,3]) → [ [2,3] ]* и т.д*.**/

// function fifthTask() {
//   let arr = [];
//   for (var i = 0; i < arguments.length; i++) {
//     arr.push(arguments[i].slice(1, arguments[i].length));
//   }
//   return arr;
// }

// console.log(fifthTask([1,2,3], ["a", "b", "c"]));

// 6. Дан массив пользователей:
//     [
//       {
//         "_id": "5d1c3860aa841704d3245513",
//         "isActive": false,
//         "balance": 2764.35,
//         "age": 33,
//         "name": "Allie Blair",
//         "gender": "female",
//         "company": "PHOTOBIN",
//         "email": "allieblair@photobin.com",
//         "phone": "+1 (951) 566-2987",
//         "registered": "2018-11-30T02:29:00 -02:00"
//       },
//       {
//         "_id": "5d1c386095ffb689687f2db9",
//         "isActive": false,
//         "balance": 3276.25,
//         "age": 22,
//         "name": "Yesenia Leblanc",
//         "gender": "female",
//         "company": "SKINSERVE",
//         "email": "yesenialeblanc@skinserve.com",
//         "phone": "+1 (947) 446-2840",
//         "registered": "2015-10-31T01:10:31 -02:00"
//       },
//       {
//         "_id": "5d1c3860e73ff2a338722e81",
//         "isActive": true,
//         "balance": 1868.65,
//         "age": 38,
//         "name": "Mamie Kramer",
//         "gender": "female",
//         "company": "EARBANG",
//         "email": "mamiekramer@earbang.com",
//         "phone": "+1 (885) 564-3305",
//         "registered": "2014-06-03T09:36:40 -03:00"
//       },
//       {
//         "_id": "5d1c386000e4f2fc62be1b1e",
//         "isActive": true,
//         "balance": 1003.15,
//         "age": 32,
//         "name": "Crawford Bryant",
//         "gender": "male",
//         "company": "DIGIRANG",
//         "email": "crawfordbryant@digirang.com",
//         "phone": "+1 (889) 408-2141",
//         "registered": "2015-01-15T05:20:21 -02:00"
//       },
//       {
//         "_id": "5d1c386008ff236a315d638b",
//         "isActive": false,
//         "balance": 3045.41,
//         "age": 36,
//         "name": "Helene Holland",
//         "gender": "female",
//         "company": "HYDROCOM",
//         "email": "heleneholland@hydrocom.com",
//         "phone": "+1 (937) 554-2040",
//         "registered": "2014-09-15T08:22:59 -03:00"
//       },
//       {
//         "_id": "5d1c3860b4c27c4d5fdb6c1f",
//         "isActive": true,
//         "balance": 1693.51,
//         "age": 23,
//         "name": "Hernandez Osborn",
//         "gender": "male",
//         "company": "TERRASYS",
//         "email": "hernandezosborn@terrasys.com",
//         "phone": "+1 (965) 595-3942",
//         "registered": "2016-08-06T12:19:01 -03:00"
//       }
//     ]
// Создать функцию которая принимает массив пользователей, 
// поле которое по которому хочу фильтровать, значение на которое хочу фильтровать. 
// Возвращать новый массив с пользователями соответсвующие указанным параметрам. Пример результата:
//     funcGetUsers(users, "gender", "male"); 
//     // [ {name: “Denis”, age: “29”, gender: “male”} , {name: “Ivan”, age: “20”, gender: “male”} ]

// let users = [
//   {
//     "_id": "5d1c3860aa841704d3245513",
//     "isActive": false,
//     "balance": 2764.35,
//     "age": 33,
//     "name": "Allie Blair",
//     "gender": "female",
//     "company": "PHOTOBIN",
//     "email": "allieblair@photobin.com",
//     "phone": "+1 (951) 566-2987",
//     "registered": "2018-11-30T02:29:00 -02:00"
//   },
//   {
//     "_id": "5d1c386095ffb689687f2db9",
//     "isActive": false,
//     "balance": 3276.25,
//     "age": 22,
//     "name": "Yesenia Leblanc",
//     "gender": "female",
//     "company": "SKINSERVE",
//     "email": "yesenialeblanc@skinserve.com",
//     "phone": "+1 (947) 446-2840",
//     "registered": "2015-10-31T01:10:31 -02:00"
//   },
//   {
//     "_id": "5d1c3860e73ff2a338722e81",
//     "isActive": true,
//     "balance": 1868.65,
//     "age": 38,
//     "name": "Mamie Kramer",
//     "gender": "female",
//     "company": "EARBANG",
//     "email": "mamiekramer@earbang.com",
//     "phone": "+1 (885) 564-3305",
//     "registered": "2014-06-03T09:36:40 -03:00"
//   },
//   {
//     "_id": "5d1c386000e4f2fc62be1b1e",
//     "isActive": true,
//     "balance": 1003.15,
//     "age": 32,
//     "name": "Crawford Bryant",
//     "gender": "male",
//     "company": "DIGIRANG",
//     "email": "crawfordbryant@digirang.com",
//     "phone": "+1 (889) 408-2141",
//     "registered": "2015-01-15T05:20:21 -02:00"
//   },
//   {
//     "_id": "5d1c386008ff236a315d638b",
//     "isActive": false,
//     "balance": 3045.41,
//     "age": 36,
//     "name": "Helene Holland",
//     "gender": "female",
//     "company": "HYDROCOM",
//     "email": "heleneholland@hydrocom.com",
//     "phone": "+1 (937) 554-2040",
//     "registered": "2014-09-15T08:22:59 -03:00"
//   },
//   {
//     "_id": "5d1c3860b4c27c4d5fdb6c1f",
//     "isActive": true,
//     "balance": 1693.51,
//     "age": 23,
//     "name": "Hernandez Osborn",
//     "gender": "male",
//     "company": "TERRASYS",
//     "email": "hernandezosborn@terrasys.com",
//     "phone": "+1 (965) 595-3942",
//     "registered": "2016-08-06T12:19:01 -03:00"
//   }
// ]

// function sixthTask(users, key, value) {
//   let newArr = [];
//   users.forEach(function(item) {
//      if(item[key] == value) {
//         let newObj = {
//           name: item.name,
//           age: item.age,
//           [key]: item[key]
//         };
//         newArr.push(newObj);
//      }
//   });
//   return newArr;
// }

// console.log(sixthTask(users, "isActive", true));

// /*7. Проверить как изменится объект **obj** и найти объяснение*/

// function sevenTask() {
//   const obj = {};
  
//   (function(x) {
//     x.b = 1;
//     x = null;
//   })(obj);
//   return obj;
// };

// console.log(sevenTask());

// /*8. Создать объект, у которого будет цена товара и его скидка, а также

// два метода: для получения цены и для расчета цены с учетом скидки:

//     const price = {
//       price: 10,
//       discount: '15%',
//       ... 
//     };
    
//     price.getPrice(); // 10
//     price.getPriceWithDiscount(); // 8.5*/
// function eigthTask() {
// const price = {
//   price: 10,
//   discount: '15%',
//   getPrice() {
//     console.log("price: " + price.price);
//   },
//   getPriceWithDiscount() {
//     console.log("price with discount: " + (price.price-(price.price*parseInt(price.discount)/100)));
//   }};
//   price.getPrice();
//   price.getPriceWithDiscount();
// };

// eigthTask();

// /*9. Даны объект и функция:

//     let sizes = { width: 5, height: 10 },
//     getSquare = function () { return this.width * this.height };

// Не изменяя функцию или объект, получить результат функции
// *getSquare* для объекта sizes*/

// function nineTask() {
// let sizes = { width: 5, height: 10 },
//     getSquare = function () { return this.width * this.height },
//     clone = {};

// for (var key in sizes) {
//   clone[key] = sizes[key];
// };
// clone.getSquare = getSquare;

// return console.log(clone.getSquare());
// };

// nineTask();


/*1.На основе массива map и массива users собрать новый массив объектов где в каждом объекте будут только те свойства которые перечислены в массиве map*/
const map = ["_id", "name", "isActive", "balance"];
const users = [
  {
    "_id": "5d220b10e8265cc978e2586b",
    "isActive": true,
    "balance": 2853.33,
    "age": 20,
    "name": "Buckner Osborne",
    "gender": "male",
    "company": "EMPIRICA",
    "email": "bucknerosborne@empirica.com",
    "phone": "+1 (850) 411-2997",
    "registered": "2018-08-13T04:28:45 -03:00"
  },
  {
    "_id": "5d220b10144ef972f6c2b332",
    "isActive": true,
    "balance": 1464.63,
    "age": 38,
    "name": "Rosalie Smith",
    "gender": "female",
    "company": "KATAKANA",
    "email": "rosaliesmith@katakana.com",
    "phone": "+1 (943) 463-2496",
    "registered": "2016-12-09T05:15:34 -02:00"
  },
  {
    "_id": "5d220b1083a0494655cdecf6",
    "isActive": false,
    "balance": 2823.39,
    "age": 40,
    "name": "Estrada Davenport",
    "gender": "male",
    "company": "EBIDCO",
    "email": "estradadavenport@ebidco.com",
    "phone": "+1 (890) 461-2088",
    "registered": "2016-03-04T03:36:38 -02:00"
  }
];

function firstTask(map, users) {
  let newArr = [];
  users.forEach(function(item) {
    let obj = {};
    map.forEach(function(mapItem) {
        if(Object.keys(item).indexOf(mapItem)>=0) {
          obj[mapItem] = item[mapItem];
        }
    });
    newArr.push(obj);
  });
  return newArr;
}
console.log(firstTask(map, users));

/*JavaScript
На выходе мы должны получить массив вида: 
[ { _id: ..., name: ..., isActive: ..., balance: ... }, ... ];
JavaScript*/

/*2. Дан массив объектов, где каждый объект содержит информацию о букве и месте её положения в строке {буква: “a”, позиция_в_предложении: 1}:*/
var charArr = [{char:"a",index:12}, {char:"w",index:8}, {char:"Y",index:10}, {char:"p",index:3}, {char:"p",index:2},
{char:"N",index:6}, {char:" ",index:5}, {char:"y",index:4}, {char:"r",index:13}, {char:"H",index:0},
{char:"e",index:11}, {char:"a",index:1}, {char:" ",index:9}, {char:"!",index:14}, {char:"e",index:7}]
/*JavaScript
Напишите функцию, которая из элементов массива соберет и вернёт строку, основываясь на index каждой буквы. Например:
// [{char:"H",index:0}, {char:"i",index: 1}, {char:"!",index:2}] → "Hi!"
JavaScript*/

function secondTask(charArr) {
  var result = '';
  charArr.sort(function(a, b) {
    return a.index - b.index;
  });
  charArr.forEach(function(item) {
    result = result + item.char;
  });
  return result;
}
console.log(secondTask(charArr));

/*3. Организовать функцию getInfo, которая принимает объект вида{ name: ..., info: { employees: [...], partners: [ … ] } } и выводит в консоль имя (если имени нет, показывать ‘Unknown’) и первые две компании из массива partners:*/
const organisation = { 
  name: 'Google', 
  info: { 
    employees: ['Vlad', 'Olga'], 
    partners: ['Microsoft', 'Facebook', 'Xing'] 
} };
/*// getInfo(organisation); → Name: Google Partners: Microsoft Facebook
JavaScript*/

function thirdTask(organisation) {
  var result = '';
  organisation.name ? result = result + "Name: " + organisation.name + " " : result = result + "Name: Unknown ";
  result = result + "Partners: " + organisation.info.partners[0]  + " " + organisation.info.partners[1];
  return result;
}
console.log(thirdTask(organisation));

/*4. Дан объект:*/
const person = {
 name: 'Denis',
 age: 30,
 lastGet: '',
 lastUpdate: ''
};
/*JavaScript
Сделать так что-бы при получении или изменении свойства name в свойствах lastGet и lastUpdate сохранялась дата последнего получения или последнего обновления соответсвенно. */

function fourthTask(person) {
  Object.defineProperties(person, {
    name: {
      get: function() {
        console.log("get");
        enumerable: true;
        writable: true;
        person.lastGet = new Date()
      },
      set: function(val) {
        console.log("set");
        enumerable: true;
        writable: true;
        person.lastUpdate = new Date()
      }
    }
  });
  person.name = 'Denis2'; // Запускает сеттер
  console.log(person.name); // Запускает геттер
}
console.log(fourthTask(person));

/*5. Дан объект:*/
const product = {
 brand: 'Apple',
 model: 'iPhone 7',
 price: '$300'
};
/*JavaScript
сделать геттер который будет возвращать brand и model в виде строки "Apple iPhone 7" а также сделать сеттер в который будет передаваться строка например "Samsung S8 Gold" и в объекте в поле brand будет записано "Samsung" а в поле model будет записано "S8 Gold"*/