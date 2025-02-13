


// // Створити масив з трьох чисел. Змінити значення другого елемента масиву на 10.

// const frstArray = ['3', '2', '1'];

// frstArray[1] = '10';
// console.log(frstArray);

// // Створити масив із трьох рядків. Додати до масиву ще одну рядків.

// const secTaskArray = ['cake', 'cookie', 'tea'];

// secTaskArray.push('cofee');

// console.log(secTaskArray);

// // Створити скрипт який поверне суму всіх чисел в масиві.

// const thirdArray = ['4', '2', '1'];
// let sum = 0;

// for (const arrayResult of thirdArray) {
//     sum += Number(arrayResult); 
// }

// console.log(`сума чисел ${sum}`); 

// // Створити масив з 5-ти чисел. Вивести на екран всі елементи масиву за допомогою циклу for.

// const fourthArray = ['123', '124', '454', '767', '111'];

// for (let i = 0; i < fourthArray.length; i++) {
//     console.log(`всi елементи масиву ${fourthArray[i]}`);

// }

// // Створити масив із 5-ти рядків. Вивести на екран кожен рядокз масиву, який містить більше 5-ти символів.

// const fifthArray = ['John', 'Alexa', 'Harper', 'Makson', 'Sanya']

// for (const fifthArrayResult of fifthArray) {
//     if (fifthArrayResult.length > 5) {
//         console.log(`бiльше 5 букв ${fifthArrayResult}`);
//     }


// }

// // Створити масив з 10-ти чисел. Знайти та вивести на екран максимальне значення з масиву.

// const SixthArray = [23, 45, 67, 89, 12, 56, 78, 90, 34, 10];
// let max = SixthArray[0];

// for (const SixthArrayResult of SixthArray) {
//     if (SixthArrayResult > max) {
//         max = SixthArrayResult;
//     }
// }

// console.log(`макс. значення ${max}`);

// // Створити масив з 10-ти чисел. Знайти всі парні числа в масиві та вивести їх на екран.

// const numbers2 = [23, 43, 67, 89, 12, 56, 78, 91, 35, 10];

// for (const number2Result of numbers2) {
//     if (number2Result % 2 === 0) {
//         console.log(`парнi числа ${number2Result}`);

//         continue
//     }
// }




//  Напиши скрипт, який об'єднує всі елементи массива в один рядок. Елементів може бути довільна кількість. Нехай елементи массива в рядку будут розділені комою.


// const friends = ["Mango", "Poly", "Kiwi", "Ajax"]

// let string = friends[0];

// for (let i = 1; i < friends.length; i++) {
//     string += ', ' + friends[i];
// }

// console.log(`через for: ${string}`);

// // 2

// const friendList = ["Mango", "Poly", "Kiwi", "Ajax"]

// let result = friendList[0];

// console.log(`через join: ${friendList.join(', ')}`);

// // Працюємо з колекцією карток в trello. Метод splice() (можна використати інші методи)

// // Видалити

// const cards = [
//     'Карточка-1',
//     ' Карточка-2',
//     ' Карточка-3',
//     ' Карточка-4',
//     ' Карточка-5',
// ];

// const cardToRemove = 'Карточка-3';

// cards.splice(cards.indexOf(cardToRemove), 1);

// console.log(`картка 3 була видалена: ${cards}`);

// // Додати

// const cards2 = [
//     'Карточка-1',
//     ' Карточка-2',
//     ' Карточка-3',
//     ' Карточка-4',
//     ' Карточка-5',
// ];

// const cardToInsert = ' Карточка-6';

// cards2.push(cardToInsert);

// console.log(`Карточка-6 була додана: ${cards2}`);

// // Оновити

// const cards3 = [
//     'Карточка-1',
//     ' Карточка-2',
//     ' Карточка-3',
//     ' Карточка-4',
//     ' Карточка-5',
// ];

// const cardToUpdate = ' Карточка-4_оновленна';

// cards3.splice(3, 1, cardToUpdate);

// console.log(` нова карточка 4: ${cards3}`);




// function loger(fn) {
//     console.log(msg);
// }


// function orderFunction(fn) {
//     const str = "hallo world"
//     loger(str)
// }

// orderFunction(loger)


//


// const repeade = function(n){
//     for (let i = 0; i < n; i+=1) {
//         console.log(i);    
//     }

// }

// repeade(3)

// 

// const logPrint = function(value){
//     console.log(value);
// };

// const goodFn = function(value){
//     console.log(`Login fn ${value+1}`, value);
// };

// const repeade = function(n, action){
//     for (let i = 0; i < n; i+=1) {
//         console.log(i);   
//         action(i) 
//     }

// };

// // repeade(3, goodFn);
// // repeade(3, logPrint);

// const labels = []

// // repeade(3, function goodFn(value) {
// //     console.log(`Login fn ${value+1}`, value);
// // })

// // // ()=>{} анон стрел. функция

// // repeade(4, ()=>{return labels.push(`label${value}value`) } )

// // console.log(labels);
// console.log('1:');
// // 1 Напиши функцію logItems(array), яка отримує масив і використовує цикл for, який для кожного елемента масиву буде виводити в консоль повідомлення в форматі [номер елемента] - [значення елемента].

// const array = ['Ajax', 'Mango', 'Sanya']

// const logItems = function (array) {
//     for (let i = 0; i < array.length; i++) {
//         console.log(`${i + 1} - ${array[i]}`);

//     }

// };

// logItems(array);

// console.log('2:');
// // 2 Напиши скрипт підрахунку вартості гравіювання прикрас. Для цього створи функцію calculateEngravingPrice(message, pricePerWord) приймаючу рядок (в рядку будуть тільки слова і прогалини) і ціну гравіювання одного слова, і повертає ціну гравіювання всіх слів в рядку.

// const calculateEngravingPrice = function (message, pricePerWord) {
//     const words = message.split(' ');
//     const totalPrice = words.length * pricePerWord;
//     return totalPrice
// }

// console.log(calculateEngravingPrice('Happy Birthday', 10))

// console.log('3:');

// // 3 напиши функцію findLongestWord(string), яка приймає параметром довільний рядок (в рядку будуть тільки слова і прогалини) і повертає найдовше слово в цьому рядку.

// const findLongestWord = function (string) {
//     const words = string.split(' ')
//     let longestWord = ''

//     for (const word of words) {
//         if (word.length > longestWord.length) {
//             longestWord = word;
//         }
//     }
//     return longestWord;
// }

// console.log(findLongestWord('Cats usually eats three times at day'));

// console.log('4:');
// // 4 Напиши функцію formatString(string) яка приймає рядок і форматує його якщо необхідно.



// // Якщо довжина рядка не перевищує 40 символів, функція повертає її в початковому вигляді.
// // Якщо довжина більше 40 символів, то функція обрізає рядок до 40-ка символів і додає в кінець рядка три крапки '...', після чого повертає укорочену версію.



// const formateString = function (string) {
//     if (string.length <= 40) {
//         console.log(string);
//     } else {
//         console.log(string.slice(0, 40) + '...');
//     }

// }

// formateString('коротка строка')

// formateString('Дуже довга строка, в якiй бiльш, нiж 40 символiв, та вона сократиться')

// console.log('5: ');
// // 5 Напиши функцію checkForSpam(message), приймаючу 1 параметр message — рядок. Функція перевіряє її на вміст слів spam і sale. Якщо знайшли заборонене слово, то функція повертає true, якщо заборонених слів немає функція повертає false. Слова в рядку можуть бути в довільному регістрі.

// const checkForSpam = function (message) {
//     if (message.includes('spam', 'sale')) {
//         console.log('спам');
//     } else {
//         console.log('ок');
//     }

// }

// checkForSpam('bla bla bla')

// checkForSpam('bla bla spam sale bla bla spam')

// console.log('6:');
// // 6 При завантаженні сторінки користувачеві пропонується в prompt ввести число. Введення зберігається в змінну input і додається в масив чисел numbers.
// // Операція введення числа користувачем і збереження в масив триває до тих пор, пір, поки користувач не натисне Cancel в prompt.
// // Після того як користувач припинив введення натиснувши Cancel, якщо масив не порожній, необхідно порахувати суму всіх елементів масиву і записати її в змінну total. Використовуй цикл for або for...of. Після чого в консоль виведи рядок 'Загальна сума чисел дорівнює [сума]'.


// // 🔔 Робити перевірку того, що користувач ввів саме число, а не довільний набір символів, не обов'язково. Якщо хочеш, в разі некоректного введення, показуй alert з текстом 'Було введено не число, попробуйте ще раз', при цьому результат promptзаписувати в масив чисел не потрібно, після чого знову користувачеві пропонується ввести число в prompt.

// let numbers = []
// let total = 0

// while (true) {
//     let input = prompt('Введіть число:');

//     if (input === null) {
//         break;
//     }

//     let num = parseFloat(input);

//         if (isNaN(num)) {
//             alert('Введiть коректне число')
//         } else {
//             numbers.push(num)
//         }
// }

// for (const num of numbers) {
//     total += num
// }

// console.log(`Сума введених чисел: ${total}`);

// 7 дз сделать функции





const hotel = {
    name: 'resolt hotel',

    stars: 5,

    capacity: 100,
};

hotel.name = 'Coastline resort';



// const car = {
//     mark: 'mazda',
//     year: 2014,
//     Mileage: 14232,
// }

// const propName = 'name'

// const user = {
//     age: 35
// }

// user[propName]

// const books = [
//     {
//         title: 'The last Kingdom',
//         author: 'Sanya',
//         genres: ['Historical', 'adv'],
//         isPublic: true,
//         rating: 8.38
//     }

// ]

// delete books.author

// const propName = 'name'

// const user = {
//     age: 35
// }

// Створіть об’єкт "сar", який буде мати властивості "brand", "model", "year" та "color". Додайте метод, який буде виводити на екран повідомлення про автомобіль зі значеннями всіх властивостей.

// const car = {
//     brand: 'Toyta',
//     model: 'Camri',
//     year: '2020',
//     color: 'black',

//     changeColor(newColor) {
//         this.color = newColor;

//     },
//     addPrice(price) {
//         return this[price]

//     },
//     getInfo() {
//         return `Автомобiль: ${this.brand}, рiк: ${this.year}, колiр: ${this.color}, модель: ${this.model} цiна: ${this.addPrice()}`;
//     },

// }



// // car.changeColor('yellow');
// // car.addPrice(300);

// // console.log(car.getInfo()); 

// // const btnValue = document.getElementById('btn');

// // btnValue.addEventListener('click', () =>) {
// //     alert('Hello world!')

// // }
// // Напиши скрипт який при кліку на кнопку буде виводити на екран повідомлення “Hello World!”. Використовуй колбек в вигляді стрілки
// const button = document.getElementById("button");
// const message = document.getElementById("message");

// button.addEventListener("click", () => {
//     message.textContent = "Hello World!";
// });
// // Створи програму, яка генерує випадкове число від 1 до 100. Користувач повинен вгадати число, введенням його в текстове поле. При кліку на кнопку "Перевірити" програма повинна повідомити користувача, чи є їх відповідь правильною.2

// const randomNumber = Math.floor(Math.random() * 100) + 1;
// document.getElementById("checkButton").addEventListener("click", () => {

//     const userGuess = parseInt(document.getElementById("userGuess").value);
//     document.getElementById("resultMessage").textContent =
//         userGuess === randomNumber ? "Ви вгадали!" : "Неправильно!";
// });

// // Створи програму, яка відображає повідомлення про те, скільки разів користувач клікнув на сторінці.

// let count = 0;
// document.addEventListener("click", () => {
//     count++;
//     document.getElementById("clickCount").textContent = count;
// });


// // Напиши функцію, яка приймає масив чисел і колбек-функцію. Функція повинна застосовувати колбек-функцію до кожного елементу масиву та повертати новий масив, 
// // що містить результати застосування колбек-функції до кожного елементу

// function callbackToArray(array, callback) {
//     let newArray = [];
//     for (let i = 0; i < array.length; i++) {
//         newArray.push(callback(array[i]));
//     }
//     return newArray;
// }

// const numbers = [1, 2, 3, 4, 5];
// const double = num => num * 2;
// console.log(callbackToArray(numbers, double)); 

// // Розрахунок дисконтної ціни

// // Створіть функцію, яка розраховує дисконтну ціну на товар з урахуванням знижки. Функція повинна приймати вартість товару та відсоток знижки як аргументи. 
// // Використайте стрілкову функцію та колбек.

// const calculatePrice = (price, discount, callback) => {
//     const discountPrice = price - (price * discount / 100);
//     callback(discountPrice);
// };

// const printPrice = (discountPrice) => {
//     console.log(`Дисконтна ціна: ${discountPrice}`);
// };


// const originalPrice = 1000; 
// const discount = 20; 

// calculatePrice(originalPrice, discount, printPrice);







// obj
// 1. Створіть об'єкт ""bankAccount"" з властивостями ""ownerName"", ""accountNumber"", ""balance"". Додайте до об'єкту метод ""deposit"", який дозволяє додавати гроші на рахунок, та метод ""withdraw"", який дозволяє знімати гроші з рахунку. Методи повинні
// зпрацьовувати при натисканні на кнопки “поповнити рахунок” та отримати ‘готівку’ відповідно. Після проведення операції виводити повідомлення про залишок на рахунку




const bankAccount = {
    ownerName: 'Sanya',
    accountNumber: 12,
    balance: 4000,


    deposit: function (amount, callback) {
        this.balance += amount;
        callback(`Ви поповнили рахунок на ${amount} грн. Новий баланс: ${this.balance} грн.`);
    },


    withdraw: function (amount, callback) {
        if (amount > this.balance) {
            callback("Недостатньо коштів на рахунку!");
        } else {
            this.balance -= amount;
            callback(`Ви зняли ${amount} грн. Новий баланс: ${this.balance} грн.`);
        }
    }
};


const updateBalance = (message) => {
    document.getElementById("balance").innerText = bankAccount.balance;
    alert(message);
};


document.getElementById("depositBtn").addEventListener("click", () => {
    let amount = Number(prompt("Введіть суму для поповнення:"));
    if (!isNaN(amount) && amount > 0) {
        bankAccount.deposit(amount, updateBalance);
    } else {
        alert("Невірна сума!");
    }
});

document.getElementById("withdrawBtn").addEventListener("click", () => {
    let amount = Number(prompt("Введіть суму для зняття:"));
    if (!isNaN(amount) && amount > 0) {
        bankAccount.withdraw(amount, updateBalance);
    } else {
        alert("Невірна сума!");
    }
});

// Створіть об'єкт ""weather"" з властивостями ""temperature"", ""humidity"", ""windSpeed"". Додайте до об'єкту метод, який повертає ""true"",
// якщо температура нижче 0 градусів Цельсія, та ""false"", якщо температура вище або рівна 0 градусів Цельсія. Температуру потрібно отримати з інпуту на сторінці. Якщо метод повернув ""true"" вивести повідомлення “температура нижче 0 градусів Цельсія” і навпаки

const weather = {
    temperature: null,
    humidity: 60,
    windSpeed: 5,

    isBelowZero: function () {
        if (this.temperature < 0) {
            return true;
        } else {
            return false;
        }
    }
};


document.getElementById("checkTemperatureBtn").addEventListener("click", () => {

    const temperatureInput = document.getElementById("temperatureInput").value;

    if (!isNaN(temperatureInput)) {
        weather.temperature = Number(temperatureInput);

        const isBelowZero = weather.isBelowZero();

        const message = isBelowZero
            ? "Температура нижче 0 градусів Цельсія."
            : "Температура вище або рівна 0 градусів Цельсія.";

        document.getElementById("temperatureMessage").innerText = message;
    } else {
        alert("Введіть правильну температуру!");
    }
});



// 3. Створіть об’єкт ""user"", якbq буде мати властивості ""name"", ""email"", ""password"". Додайте метод ""login"",
// який буде перевіряти правильність введеного email та password. Використайте інпути для запису значень властивостей в об’єкт

const user = {
    name: '',
    email: '',
    password: '',

    register: function (name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
        alert("Користувач успішно зареєстрований!");
    },

    login: function (email, password) {
        if (this.email === email && this.password === password) {
            return "Вітаємо, ви увійшли в систему!";
        } else {
            return "Невірний email або пароль!";
        }
    }
};

document.getElementById("registerBtn").addEventListener("click", () => {
    const name = document.getElementById("nameInput").value;
    const email = document.getElementById("emailInput").value;
    const password = document.getElementById("passwordInput").value;

    if (name && email && password) {
        user.register(name, email, password);
    } else {
        alert("Будь ласка, заповніть всі поля для реєстрації!");
    }
});

document.getElementById("loginBtn").addEventListener("click", () => {
    const email = document.getElementById("loginEmailInput").value;
    const password = document.getElementById("loginPasswordInput").value;
    const loginMessage = user.login(email, password);

    document.getElementById("loginMessage").innerText = loginMessage;
});

// Створіть об'єкт ""movie"" з властивостями ""title"", ""director"", ""year"", ""rating"". Додайте до об'єкту метод, який повертає ""true"", якщо рейтинг фільму вище 8, та ""false"", якщо рейтинг фільму 8 або нижче.
// Вивести значення властивостей на сторінку. Якщо метод повернув ""true"" то змінити колір тексту поля title на зелений.

const movie = {
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
    rating: 8.8,

    checkRating: function() {
        return this.rating > 8;
    }
};

document.getElementById("movieTitle").innerText = movie.title;
document.getElementById("movieDirector").innerText = movie.director;
document.getElementById("movieYear").innerText = movie.year;
document.getElementById("movieRating").innerText = movie.rating;

if (movie.checkRating()) {
    document.getElementById("movieTitle").style.color = "green";
}


// ДОДАТКОВЕ
// та гора тексту що там в мене тут весь екран займе, тому я не вставлю

const apartment = {
    imgUrl: "https://via.placeholder.com/640x480",
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
    tags: ["premium", "promoted", "top"],

    owner: {
        name: "Henry",
        phone: "982-126-1588",
        email: "henry.carter@aptmail.com"
    }
};


const aptRating = apartment.rating;
const aptDescr = apartment.descr;
const aptPrice = apartment.price;
const aptTags = apartment.tags;


const ownerName = apartment.owner.name;
const ownerPhone = apartment.owner.phone;
const ownerEmail = apartment.owner.email;
const numberOfTags = apartment.tags.length;
const firstTag = apartment.tags[0];
const lastTag = apartment.tags[apartment.tags.length - 1];


apartment.price = 5000;
apartment.rating = 4.7;
apartment.owner.name = "Henry Sibola";
apartment.tags.push("trusted");


apartment.area = 60;
apartment.rooms = 3;
apartment.location = {
    country: "Jamaica",
    city: "Kingston"
};

console.log(apartment);



// 6 ========= Методи об'єкту Object.keys(), Object.values(), Object.entries()

// 7 Object.keys (obj) - поверне масив, з ключами об'єкта obj у вигляді рядків.
// 7 Object.values (obj) - поверне масив, зі значеннями властивостей об'єкта obj.
// 7 Object.entries (obj) - поверне масив записів, кожним елементом якого буде ще один масив з 2-х елементів, ключа і значення цього ключа з об'єкта Obj.


