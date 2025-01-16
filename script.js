


// Створити масив з трьох чисел. Змінити значення другого елемента масиву на 10.

const frstArray = ['3', '2', '1'];

frstArray[1] = '10';
console.log(frstArray);

// Створити масив із трьох рядків. Додати до масиву ще одну рядків.

const secTaskArray = ['cake', 'cookie', 'tea'];

secTaskArray.push('cofee');

console.log(secTaskArray);

// Створити скрипт який поверне суму всіх чисел в масиві.

const thirdArray = ['4', '2', '1'];
let sum = 0;

for (const arrayResult of thirdArray) {
    sum += Number(arrayResult); 
}

console.log(sum); 

// Створити масив з 5-ти чисел. Вивести на екран всі елементи масиву за допомогою циклу for.

const fourthArray = ['123', '124', '454', '767', '111'];

for (let i = 0; i < fourthArray.length; i++) {
    console.log(fourthArray[i]);
    
}

// Створити масив із 5-ти рядків. Вивести на екран кожен рядокз масиву, який містить більше 5-ти символів.

const fifthArray = ['John', 'Alexa', 'Harper', 'Makson', 'Sanya']

for (const fifthArrayResult of fifthArray) {
    if (fifthArrayResult.length > 5) {
        console.log(fifthArrayResult);
    }


}

// Створити масив з 10-ти чисел. Знайти та вивести на екран максимальне значення з масиву.

const SixthArray = [23, 45, 67, 89, 12, 56, 78, 90, 34, 10];
let max = SixthArray[0];

for (const SixthArrayResult of SixthArray) {
    if (SixthArrayResult > max) {
        max = SixthArrayResult;
    }
}

console.log(max);

// Створити масив з 10-ти чисел. Знайти всі парні числа в масиві та вивести їх на екран.

const numbers2 = [23, 43, 67, 89, 12, 56, 78, 91, 35, 10];

for (const number2Result of numbers2) {
    if (number2Result % 2 === 0) {
        console.log(number2Result);

        continue
    }
}