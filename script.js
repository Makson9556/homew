

// const field1 = document.getElementById('field1');

// const field2 = document.getElementById('field2');

// const btn = document.getElementById('checkBtn');

// checkBtn.addEventListener('click', () => {
//     if (field1.value.trim() && field2.value.trim()) {
//         alert('обидва поля заповненi')
//     } else {
//         alert('Не всі поля заповнені')
//     }
// })



// const field3 = document.getElementById('field3');

// const field4 = document.getElementById('field4');

// const btn2 = document.getElementById('checkBtn2')

// btn2.addEventListener('click', () => {
//     if (+field3.value + +field4.value > 10) {
//         alert('Сума більша за 10');
//     } else {
//         alert('Сума менша або дорівнює 10');
//     }
// });



// const field5 = document.getElementById('field5');

// const btn3 = document.getElementById('checkBtn3')

// btn3.addEventListener('click', () => {
//     if (field5.value.includes("JavaScript")) {
//         alert('Текст містить слово JavaScript');
//     } else {
//         alert('Текст не містить слово JavaScript');
//     }
// });



// const field6 = document.getElementById('field6');
// const btn4 = document.getElementById('checkBtn4');

// btn4.addEventListener('click', () => {
//     const number = Number(field6.value.trim());

//     if (number > 10 && number < 20) {
//         alert('Число входить в діапазон від 10 до 20');
//     } else {
//         alert('Число не входить в діапазон від 10 до 20');
//     }
// });


// const button = document.getElementById("button"); 

// button.addEventListener('click', () => {
//     const name1 = document.getElementById("name").value;
//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;

//     if (name1.length < 3) {
//         alert("Неправильно введенi данi");
//     } else if (!email.includes("@") || !email.includes(".", email.indexOf("@"))) {
//         alert("Невірний формат email. Він має містити символ '@' та крапку після нього.");
//     } else if (password.length < 6) {
//         alert("Пароль повинен містити не менше 6 символів.");
//     }else{
//         alert("Вас буде переведено на iншу сторiнку")
//     }
// });








// Створити розмітку з формою, що містить список (select) з трьома варіантами вибору: "Кава", "Чай" та "Сік". При виборі кожного варіанту виводити відповідне повідомлення в блок на сторінці.

const selectElement = document.getElementById('drinkSelect');

selectElement.addEventListener('change', (event) => {
    const selectedValue = event.target.value;

    switch (selectedValue) {
        case 'coffee':
            console.log('coffee');

            break;
        case 'tea':
            console.log('tea');
            break;
        case 'juice':
            console.log('juice');
            break;

        default:
            console.log('choose drink');

            break;
    }

})

// Створити розмітку з полем введення, що приймає рядок та кнопкою. При натисканні на кнопку перевіряти, чи введений рядок є днем тижня (наприклад: "понеділок", "вівторок" і т.д.), виводити відповідне повідомлення про робочий день або вихідний.

const inputValue = document.getElementById('input');
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    const inputText = inputValue.value


    switch (inputText) {
        case 'понедiлок':
        case 'вiвторок':
        case 'середа':
        case 'четвер':
        case 'п’ятниця':
        case 'субота':
        case 'неділя':
            console.log('введений текст - день тижня');

            break;

        default:
            console.log('введений текст - не день тижня');
            break;
    }




})



// Створити розмітку з полем введення, що приймає номер місяця та кнопкою. При натисканні на кнопку виводити повідомлення про пору року, до якої належить цей місяць.

const inputValue2 = document.getElementById('input2');
const buttonValue = document.getElementById('button');

buttonValue.addEventListener('click', () => {
    const monthNumber = inputValue2.value;

    switch (monthNumber) {
        case '12':
        case '1':
        case '2':
            console.log('winter');
            break;
        case '3':
        case '4':
        case '5':
            console.log('spring');
            break;
        case '6':
        case '7':
        case '8':
            console.log('summer');
            break;
        case '9':
        case '10':
        case '11':
            console.log('autumn');
            break;
        default:
            console.log('wrong number');

            break;
    }




})


// Створити розмітку з полем введення, що приймає номер місяця та кнопкою. При натисканні на кнопку виводити кількість днів у цьому місяці.


const inputValue3 = document.getElementById('input3');
const buttonValue1 = document.getElementById('button1');

buttonValue1.addEventListener('click', () => {
    const dayValue = inputValue3.value;

    switch (dayValue) {
        case '11':
        case '4':
        case '6':
        case '9':
            console.log('30d');
            break;
        case '2':
            console.log('28d');
            break;
        case '1':
        case '3':
        case '5':
        case '7':
        case '8':
        case '10':
        case '12':
            console.log('31d``');
            break;
        default:
            console.log('wrong month');
            break;
    }
});

// Створити розмітку з полем введення, що приймає назву кольору (наприклад, "червоний", "синій" і т.д.) та кнопкою. При натисканні на кнопку виводити відповідне повідомлення про дію: якщо це "червоний" — "стоп", якщо "зелений" — "йти", якщо "жовтий" — "чекати".

const inputValue4 = document.getElementById('input4');
const buttonValue2 = document.getElementById('button2');

buttonValue2.addEventListener('click', () => {
    const color = inputValue4.value;

    switch (color) {
        case 'червоний':
            console.log('stop');
            break;
        case 'зелений':
            console.log('йти');
            break;
        case 'жовтий':
            console.log('чекати');
            break;
        default:
            console.log('нi');
            break;
    }
});


// Створити розмітку з двома полями введення, що приймають числа та список (select) з варіантами вибору операцій: "+", "-", "*", "/". При натисканні на кнопку виводити результат обраної операції над цими числами. Користувач повинен бути попереджений про можливість ділення на нуль.


const frstNum = document.getElementById('input51');
const secNum = document.getElementById('input52');
const calculateBtn = document.getElementById('calculateBtn');
const operation = document.getElementById('operation');

let calculationResult;

calculateBtn.addEventListener('click', () => {
    const num1 = parseFloat(frstNum.value); 
    const num2 = parseFloat(secNum.value);
    const opValue = operation.value; 

    switch (opValue) {
        case '+':
            calculationResult = num1 + num2;
            break;
        case '-':
            calculationResult = num1 - num2;
            break;
        case '*':
            calculationResult = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                console.log('Помилка: ділення на нуль!');
                return;
            }
            calculationResult = num1 / num2;
            break;
        default:
            console.log('Напишiть правильне число');
            return;
    }
    console.log(`Результат: ${calculationResult}`);
});