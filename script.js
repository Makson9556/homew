// Вивести на екран всі числа від 1 до 10 за допомогою циклу while.

let counter = 0

while (counter <= 10) {
    console.log('first: ', counter);
    counter += 1;
}

// Вивести на екран всі парні числа від 2 до 20 за допомогою циклу for. Якщо число не парне, пропустити його за допомогою continue.


for (let number = 2; number <= 20; number++) {

}

for (let number = 2; number <= 20; number++) {
    if (number % 2 !== 0) {
        continue;
    }
    console.log('second: ', number);
}

// Вивести на екран таблицю множення числа 7 за допомогою циклу for.

for (let division = 0; division <= 70; division++) {
    if (division % 7 !== 0) {
        continue;
    }
    console.log('third: ',division);
}

// Створити масив з числами від 1 до 5. Вивести на екран кожен елемент масиву за допомогою циклу while.

const numbers = [1, 2, 3, 4, 5];
let i = 0;


while (i < numbers.length) {
    console.log('fourth: ', numbers[i]);
    i++;
}

// Створити масив із числами від 1 до 10. За допомогою циклу for пройтися по масиву та вивести на екран всі числа, крім числа 7. Якщо зустрінете число 7, закінчити виконання циклу за допомогою оператора break.

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let number = 1; number <= 10; number++) {
    if (number !== 7) {
        console.log('fifth: ', number);
    }else{
        break;

    }
}

// Створити скрипт, який виводить на екран всі числа, які менші за n. Якщо зустрічається число, що більше або дорівнює n, цикл повинен бути закінчений за допомогою break.

const n = 7;
let digit;

for (let digit = 0; digit < 13; digit++) {
    console.log('sixth', digit);

    if (digit >= n) {
        console.log('цикл буде прервано');
        break;
    }
    
}

// За допомогою циклу while вивести на екран всі числа від 1 до 20, крім чисел, кратних 3. Якщо зустрінете число, кратне 3, цикл повинен продовжити виконання за допомогою оператора continue.

let numberss = 1;

while (numberss <= 20) {
    if (numberss % 3 === 0) {
        numberss++;
        continue;
    }
    console.log('seventh: ', numberss);
    numberss++; 
}

