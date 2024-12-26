// 1

const field1 = document.getElementById('field1');

const field2 = document.getElementById('field2');

const btn = document.getElementById('checkBtn');

checkBtn.addEventListener('click', () => {
    if (field1.value.trim() && field2.value.trim()) {
        alert('обидва поля заповненi')
    } else {
        alert('Не всі поля заповнені')
    }
})

// 2

const field3 = document.getElementById('field3');

const field4 = document.getElementById('field4');

const btn2 = document.getElementById('checkBtn2')

btn2.addEventListener('click', () => {
    if (+field3.value + +field4.value > 10) {
        alert('Сума більша за 10');
    } else {
        alert('Сума менша або дорівнює 10');
    }
});

// 3

const field5 = document.getElementById('field5');

const btn3 = document.getElementById('checkBtn3')

btn3.addEventListener('click', () => {
    if (field5.value.includes("JavaScript")) {
        alert('Текст містить слово JavaScript');
    } else {
        alert('Текст не містить слово JavaScript');
    }
});

// 4

const field6 = document.getElementById('field6');
const btn4 = document.getElementById('checkBtn4');

btn4.addEventListener('click', () => {
    const number = Number(field6.value.trim());

    if (number > 10 && number < 20) {
        alert('Число входить в діапазон від 10 до 20');
    } else {
        alert('Число не входить в діапазон від 10 до 20');
    }
});

// 5

const button = document.getElementById("button"); 

button.addEventListener('click', () => {
    const name1 = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (name1.length < 3) {
        alert("Неправильно введенi данi");
    } else if (!email.includes("@") || !email.includes(".", email.indexOf("@"))) {
        alert("Невірний формат email. Він має містити символ '@' та крапку після нього.");
    } else if (password.length < 6) {
        alert("Пароль повинен містити не менше 6 символів.");
    }else{
        alert("Вас буде переведено на iншу сторiнку")
    }
});

