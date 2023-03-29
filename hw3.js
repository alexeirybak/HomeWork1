let password = 'password';
let answer = prompt('введите пароль');
if (password === answer) {
    alert("Пароль введен верно");
} else {
    alert("Пароль введен неправильно");
}

let c = prompt('Введите число');
if (c > 0 && c < 10) {
    console.log('верно');
} else {
    console.log('не верно');
}

let d = prompt('Введите первое число')
let e = prompt('Введите второе число')
let result = d > 100 || e > 100 ? 'Верно' : 'Неверно';
console.log(result);

let a = Number('2');
let b = Number('3');
alert(a + b);

// let a = '2';
// let b = '3';
// a = Number(a)
// b = Number(b)
// alert(a + b);

let monthNumber = prompt('напишите порядковый номер месяца');
if (monthNumber <= 12 && monthNumber >= 1) {
    switch (monthNumber) {
        case '1':
        case '2':
        case '12':
            console.log('Зима');
            break;
        case '3':
        case '4':
        case '5':
            console.log('Весна');
            break;
        case '6':
        case '7':
        case '8':
            console.log('Лето');
            break;
        case '9':
        case '10':
        case '11':
            console.log('Осень');
            break;
        default:
            break;
    }
} else {
    console.log('нет такого месяца');
}
