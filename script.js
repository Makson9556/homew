


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

// // ()=>{} анон стрел. функция

// repeade(4, ()=>{return labels.push(`label${value}value`) } )

// console.log(labels);
console.log('1:');
// 1 Напиши функцію logItems(array), яка отримує масив і використовує цикл for, який для кожного елемента масиву буде виводити в консоль повідомлення в форматі [номер елемента] - [значення елемента].

const array = ['Ajax', 'Mango', 'Sanya']

const logItems = function (array) {
    for (let i = 0; i < array.length; i++) {
        console.log(`${i + 1} - ${array[i]}`);

    }

};

logItems(array);

console.log('2:');
// 2 Напиши скрипт підрахунку вартості гравіювання прикрас. Для цього створи функцію calculateEngravingPrice(message, pricePerWord) приймаючу рядок (в рядку будуть тільки слова і прогалини) і ціну гравіювання одного слова, і повертає ціну гравіювання всіх слів в рядку.

const calculateEngravingPrice = function (message, pricePerWord) {
    const words = message.split(' ');
    const totalPrice = words.length * pricePerWord;
    return totalPrice
}

console.log(calculateEngravingPrice('Happy Birthday', 10))

console.log('3:');

// 3 напиши функцію findLongestWord(string), яка приймає параметром довільний рядок (в рядку будуть тільки слова і прогалини) і повертає найдовше слово в цьому рядку.

const findLongestWord = function (string) {
    const words = string.split(' ')
    let longestWord = ''

    for (const word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}

console.log(findLongestWord('Cats usually eats three times at day'));

console.log('4:');
// 4 Напиши функцію formatString(string) яка приймає рядок і форматує його якщо необхідно.



// Якщо довжина рядка не перевищує 40 символів, функція повертає її в початковому вигляді.
// Якщо довжина більше 40 символів, то функція обрізає рядок до 40-ка символів і додає в кінець рядка три крапки '...', після чого повертає укорочену версію.



const formateString = function (string) {
    if (string.length <= 40) {
        console.log(string);
    } else {
        console.log(string.slice(0, 40) + '...');
    }

}

formateString('коротка строка')

formateString('Дуже довга строка, в якiй бiльш, нiж 40 символiв, та вона сократиться')

console.log('5: ');
// 5 Напиши функцію checkForSpam(message), приймаючу 1 параметр message — рядок. Функція перевіряє її на вміст слів spam і sale. Якщо знайшли заборонене слово, то функція повертає true, якщо заборонених слів немає функція повертає false. Слова в рядку можуть бути в довільному регістрі.

const checkForSpam = function (message) {
    if (message.includes('spam', 'sale')) {
        console.log('спам');
    } else {
        console.log('ок');
    }

}

checkForSpam('bla bla bla')

checkForSpam('bla bla spam sale bla bla spam')

console.log('6:');
// 6 При завантаженні сторінки користувачеві пропонується в prompt ввести число. Введення зберігається в змінну input і додається в масив чисел numbers.
// Операція введення числа користувачем і збереження в масив триває до тих пор, пір, поки користувач не натисне Cancel в prompt.
// Після того як користувач припинив введення натиснувши Cancel, якщо масив не порожній, необхідно порахувати суму всіх елементів масиву і записати її в змінну total. Використовуй цикл for або for...of. Після чого в консоль виведи рядок 'Загальна сума чисел дорівнює [сума]'.


// 🔔 Робити перевірку того, що користувач ввів саме число, а не довільний набір символів, не обов'язково. Якщо хочеш, в разі некоректного введення, показуй alert з текстом 'Було введено не число, попробуйте ще раз', при цьому результат promptзаписувати в масив чисел не потрібно, після чого знову користувачеві пропонується ввести число в prompt.

let numbers = []
let total = 0

while (true) {
    let input = prompt('Введіть число:');

    if (input === null) {
        break;
    }

    let num = parseFloat(input);

        if (isNaN(num)) {
            alert('Введiть коректне число')
        } else {
            numbers.push(num)
        }
}

for (const num of numbers) {
    total += num
}

console.log(`Сума введених чисел: ${total}`);

// сьоме не встигну до дедлайну, я його самостiйно буду робити, коли буде час