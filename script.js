
function game1(userNum) {
    userNum = prompt('Введите номер месяца');
    if (userNum >= 1 && userNum <= 2 || userNum == 12) {
        alert('Зима');
    } else if (userNum >= 3 && userNum <= 5) {
        alert('Весна');
    }
    else if (userNum >= 6 && userNum <= 8) {
        alert('Лето');
    }
    else if (userNum >= 9 && userNum <= 11) {
        alert('Осень');
    }
    else {
        alert('нет такого месяца')
    }
}

function game2() {
    let fruits = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    fruits = fruits.sort(() => Math.random() - 0.5);
    alert(fruits);
    let first = prompt('Введите первый фрукт');
    let second = prompt('Введите второй фрукт');

    if (fruits[0].toLowerCase() == first.toLowerCase() && fruits[6].toLowerCase() == second.toLowerCase()) {
        alert('Поздравляю! Вы угадали!');
    } else if (fruits[0].toLowerCase() == first.toLowerCase() || fruits[6].toLowerCase() == second.toLowerCase()) {
        alert('Вы были близки к победе!');
    } else {
        alert('Не угадал ни разу! Попробуй еще');
    }
}