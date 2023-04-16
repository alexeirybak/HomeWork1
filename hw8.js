
// arr = [7, 5, 2, 12];
// function mult(arr) {
//     result = arr[0] * arr[1] * arr[2] * arr[3];
//     console.log(result);
// }

// function sum(arr) {
//     result = arr[0] + arr[1] + arr[2] + arr[3];
//     console.log(result);
// }
// function getResult(callback, arr) {
//     callback(arr);
// }
// getResult(mult, arr);
// getResult(sum, arr);



// const users = [
// 	{name: 'Jon', age: 22},
// 	{name: 'Richard', age: 18},
// 	{name: 'Anton', age: 32},
// 	{name: 'Lida', age: 23},
// 	{name: 'Bob', age: 44},
// ];
// users.sort(compareNum);
// console.log(users);
// function compareNum(a, b) {
// 	if (a.age > b.age) return 1;
//     if (a.age < b.age) return -1;
//     return 0;
// }




// function each(callback) {
//     callback();
//     console.log(callback());
// }
// function reverseArr() {
//     let arr = [1, '4', 9, 'two'];
//     return arr.reverse();
// }
// each(reverseArr);

// function toNumberArr() {
//     let arr = [1, '4', false, 9, 'two'];
//     arr = arr.filter(item => !isNaN(item));
//     arr = arr.map(Number);
//     console.log(arr);
// };
// each(toNumberArr);




// const timer = () => {
//     let time = 30;
//     const interval = setInterval(() => {
//         let currentDate = new Date();
//         time -= 3;
//         console.log(currentDate);
//     }, 3000);

//     setTimeout(() => {
//         clearInterval(interval);
//         console.log('30 секунд прошло!')
//     }, 30 * 1000)
// };
// timer(30);




function calling() {
    console.log('Звоню!')
};

function beeps(callback) {
    setTimeout(() => {
        console.log('Идут гудки...');
        callback();
    }, 1000);


}

function talk() {
    console.log('Разговор')
}

calling();
beeps(talk);
