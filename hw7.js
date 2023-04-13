// let str = 'js';
// console.log(str.toUpperCase());




// let mass = [
//     'Вода',
//     'Лес',
//     'Вино',
//     'Виноград',
//     'Зелень',
//     'Кофе',
//     'Кокос',
//     'Мышь',
//     'Монитор',
//     'корова',
//     'Волна',
//     'Ампер',
//     'Ракета'
// ];
// let search = 'Ко';
// let result = mass.filter((item) => {
//     if (item.toLowerCase().includes(search.toLowerCase())) {
//         return item;
//     }
// });
// console.log(result);



// let value = 32.58884;
// console.log(Math.floor(value));
// console.log(Math.ceil(value));
// console.log(Math.round(value));




// let massNumbers = [ 52, 53, 49, 77, 21, 32 ];
// console.log(Math.min(...massNumbers));
// console.log(Math.max(...massNumbers));



// function value (min, max) {
//     return  Math.round(Math.random() * (max - min)) + min;
// };
// console.log(value(1, 10));




// let value = Number(prompt('Введите число'));
// let size = Math.floor(value / 2);
// let randomMassive = [];
// for (let i = 0; i < 1; i++) {
//     randomMassive[i] = [];
//     for (let n = 0; n < size; n++ ) {
//         randomMassive[i].push(Math.round((Math.random() * value)));
//     }
    
// };
// console.log(randomMassive);

let value = Number(prompt('Введите число'));
let size = Math.floor(value / 2);
function getNum(value) {

    let randomMassive = [];
    for (let i = 0; i < size; i++) {
        randomMassive[i] = Math.round((Math.random() * value));
    }
    return randomMassive;
}

console.log(getNum(value));




// function around(a, b) { 
//     if (a < b) {
//         return Math.round(Math.random() * (b - a)) + a;
//     } else {
//         return Math.round(Math.random() * (a - b)) + b;
//     }

    
// }

// console.log(around(Number(prompt('введите первое число')),Number(prompt('введите второе число'))));





// let myDate = new Date();
// console.log(myDate); 



let currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);
console.log(currentDate);


// const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
// const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
// "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
// let myDate = new Date();
// let fullDate = "Дата: " + myDate.getDate() + " " + months[myDate.getMonth()] +
// " " + myDate.getFullYear() + ", это " + days[myDate.getDay()];

// let hour = myDate.getHours();
// let min = myDate.getMinutes();
// let sec = myDate.getSeconds();
// if (hour < 10) {
//     hour = '0' + hour;
// }
// if (min < 10) {
//     min = '0' + min;
// }
// if (sec < 10) {
//     sec = '0' + sec;
// }
// let fullTime = 'Время: ' + hour + " : " + min + " : " 
// + sec;

// console.log(fullDate);
// console.log(fullTime);

// let date = {};
// date.hour = hour;
// date.minute = min;
// date.second = sec;
// console.log(date);


