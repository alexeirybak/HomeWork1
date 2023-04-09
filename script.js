
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