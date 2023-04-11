const num = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < num.length; i++) {
    if (num[i] == 0) break;
    console.log(num[i]);
}



// const num = [1, 5, 4, 10, 0, 3];
// console.log(num.indexOf(4));



// let num = [1, 3, 5, 10, 20];
// num = num.join(' ');
// console.log(num);



// let nums = [];
// for (let i = 0; i < 3; i++) {
//     nums[i] = [];
//     for (let meter = 0; meter < 3; meter++ ) {
//         nums[i].push(1)
//     }
    
// };
// console.log(nums);




// let arr = [1, 1, 1];
// for (let meter = 0; meter < 3; meter++) {
//     arr.push(2)
// };
// console.log(arr);




// let arr = [9, 8, 7, 'a', 6, 5];
// arr = arr.sort();
// console.log(arr);
// arr.pop()
// // arr.splice(5, 1)
// console.log(arr);



// const arr = [9, 8, 7, 6, 5];
// let userNum = Number(prompt('Введите число от 1 до 10'));
// if (userNum <= 10 && userNum >= 1) {
//     let search = arr.includes(userNum);
//     console.log(search);
//     if (search == true) { 
//     alert('Есть такая цифра')
        
//     } else {
//         alert('Нет такой цифры')
//     }
// } else {
//     alert('Нужно ввести значение от 1 до 10! Попробуй снова!')
// }




// let str = 'abcdef';
// str = str.split('');
// str = str.reverse();
// str = str.join('');
// console.log(str);

// const str = 'abcdef';
// const reverse = [...str].reverse().join('');
// console.log(reverse);




// let arr = [
//     [1, 2, 3,],
//     [4, 5, 6],
// ];
// const result = [...arr[0],...arr[1]];
// console.log(result);



// let arr = [3, 2, 4, 8, 1, 6, 9, 5, 10, 7];
// for (let i = 0; i < arr.length - 1; i++) {
//     console.log(arr[i] + arr[i + 1]);
    
// }




// let arr = [2, 4, 6, 8, 5, 2];
// for (let i = 0; i < arr.length; i++) {
//     arr[i] = Math.pow(arr[i], 2);   
// }
// console.log(arr);

// let arr = [2, 4, 6, 8, 5, 2];
// let sqrArr = arr.map(item=> ( item * item));
// console.log(sqrArr);




// const array = ['fallout2', 'baldursGate', "cyberpunk2077", 'RDR2', "redAlert"];
// for (let i = 0; i < array.length; i++) {
//     array[i] = array[i].length;   
// }
// console.log(array);

// const array = ['fallout2', 'baldursGate', "cyberpunk2077", 'RDR2', "redAlert"];
// let symbArr = array.map(item=> item.length);
// console.log(symbArr);




// let numb = [0, 9, -3, 3, -2, -9, 7, 3, -8, -32, -67, 89, 40];
// const negativeNumber = numb.filter (el => el < 0);
// console.log(negativeNumber);