// function number( a, b) {
//     if (a < b) {
//         console.log(`Меньшее число ${a}`);
//     } else {
//         console.log(`Меньшее число ${b}`);
//     }
// };
// number(prompt('Введите первое число'), prompt('Введите второе число'));


// function evenOdd(c) {
//     if (c % 2 == 0) {
//         console.log(`${c} четное число`);
//     } else {
//         console.log(`${c} нечетное число`);
//     }

// }
// evenOdd(prompt('Введите число'));



// let sqNum = prompt('Введите число');
// function squareNumber(sqNum) {
//     return sqNum * sqNum;
// }
// console.log(squareNumber(sqNum));

// function squareNumberLog(sqNumLg) {
//     const result = Math.pow(sqNumLg, 2);
//     console.log(result);
// }
// squareNumberLog(prompt('Введите число'));


// function hello(howYears) {
//     if (howYears < 0) {
//         alert('Вы ввели неправильное значение')
//     } else if (howYears >= 0 && howYears <= 12 ) {
//         alert('Привет, друг!')
//     } else if (howYears > 12) {
//         alert('Добро пожаловать!')
//     }
    
// }
// hello(prompt('Укажите свой возраст'));


// multipNumbers(Number(prompt('Введите первое число')), Number(prompt('Введите второе число')));
// function multipNumbers(firstNum, secondNum) {
//     if (Number.isNaN(firstNum) == false && Number.isNaN(secondNum) == false) {
//         const result = firstNum * secondNum;
//         console.log(`произведение данных чисел ${result}`);
//     } else {
//         console.log('Одно или оба значения не являются числом');
//     }
// }



// cubeNumber(Number(prompt('Введите число')));
// function cubeNumber(Num) {
//     if (Number.isNaN(Num) == false) {
//         const result = Math.pow(Num, 3);
//             console.log(`${Num} в кубе равняется ${result}`);
//     } else {
//         console.log('Переданный параметр не является числом');
//     }
// }




const circle1 = {
    radius: prompt('введите радиус первого круга'),
    getArea: getRectangleArea,
    getPerimeter: getRectanglePerimeter
};
const circle2 = {
    radius: prompt('введите радиус второго круга'),
    getArea: getRectangleArea,
    getPerimeter: getRectanglePerimeter
};
function getRectangleArea() {
    return  Math.PI * this.radius * this.radius;
}
function getRectanglePerimeter() {
    return 2*Math.PI * this.radius;
}
console.log(`Плошадь первого круга ${circle1.getArea()}`);
console.log(`Периметр первого круга ${circle1.getPerimeter()}`);
console.log(`Плошадь второго круга ${circle2.getArea()}`);
console.log(`Периметр второго круга ${circle2.getPerimeter()}`);

