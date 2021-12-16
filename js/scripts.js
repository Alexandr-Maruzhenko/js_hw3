let count = 0,
    sum = 0,
    average = 0,
    string = '';

function clear_screen() {
    document.body.innerHTML = ''; // Заменяет содержимое тела документа пустой строкой
}

function task_item_1() {
    document.write('<h2>1. Выводим числа от 1 до 50 и от 35 до 8: </h2 \>');
    let string1 = '',
        string2 = '';
    for (let x = 1; x <= 50; x++) string1 = string1 + String(x) + ' ';
    for (let y = 35; y >= 8; y--) string2 = string2 + String(y) + ' ';
    document.write(string1 + '<br /\><br /\>' + string2);
}

function task_item_2() {
    document.write('<h2>2. Выводим столбец чисел от 89 до 11 циклом while: </h2 \>');
    let x = 89;
    while (x >= 11) {
        document.write(x + '<br /\>');
        x--;
    }
}

function task_item_3() {
    document.write('<h2>3. С помощью цикла находим сумму чисел от 0 до 100: </h2 \>');
    let sum = 0;
    for (let x = 0; x <= 100; x++) sum = sum + x;
        document.write('Сумма чисел от 0 до 100 = ' + sum + '<br /\>');
}

function task_item_4() {
    document.write('<h2>4. Находим сумму чисел в каждом числе от 1 до 5: </h2 \>');
    let sum = 0;
    for (let x = 1; x <= 5; x++){
        sum = 0;
        for (let y = 1; y <= x; y++){
            sum = sum + y;
        }
        document.write('Сумма числа ' + x + ' = ' + sum + '<br /\>');
    }
}

function task_item_5_1() {
    document.write('<h2>5.1 Выводим чётные числа от 8 до 56. Решение через while: </h2 \>');
    let x = 8;
    while (x <= 56){
        if (x % 2 === 0){
            document.write(x + '<br /\>');
        }
        x++;
    }
}

function task_item_5_2() {
    document.write('<h2>5.2 Выводим чётные числа от 8 до 56. Решение через for: </h2 \>');
    for (let x = 8; x <= 56; x++){
        if (x % 2 === 0){
            document.write(x + '<br /\>');
        }
    }
}

function task_item_6() {
    document.write('<h2>6. Полная таблица умножения (от 2 до 10): </h2 \>');
    for (let x = 2; x <= 10; x++){
        for (let y = 1; y <= 10; y++){
            if ( (x === 2) && (y === 1) ) continue;
            document.write(x + ' * ' + y + ' = ' + x * y +'<br /\>');
        }
        document.write('<br /\>');
    }
}

function task_item_7() {
    document.write('<h2>7. Делим n=1000 на 2 столько раз, пока результат деления не станет меньше 50: </h2 \>');
    let n = 1000,
        num = 0;
    while (n > 50){
        n = n / 2;
        num++;
    }
    document.write('n = ' + n + ', количество циклов - ' + num + '<br /\>');
}

function task_item_8() {
    let value;
    value = prompt('Введите любое число');
    value = Number(value);
    while ( (value !== 0) && !(isNaN(value)) ) {
        string = string + ' + ' + String(value);
        if (!count) string = string.substr(3, 3);
        sum = sum + value;
        count++
        average = sum / count;
        value = prompt('Введите любое число');
        value = Number(value);
    }
    if (value === 0) {
        alert('Ну, если Вы больше ничего не хотите, то тогда подведём итоги: \n\n'
            + 'Сумма введённых чисел ' + string + ' = ' + sum
            + '\nСреднее арифметическое введённых чисел = ' + (sum / count).toFixed(2));
    }else if (isNaN(value)){
        alert('Можно вводить только числа! Всего Вам доброго!');
    }
}

function task_item_8_1(value) {
    value = Number(value);
    if (value) {
        string = string + ' + ' + String(value);
        if (!count) string = string.substr(3, 3);
        sum = sum + value;
        count++
        average = sum / count;
        document.getElementById("myText").value = "";
        document.getElementById("output_sum").innerHTML = string + ' = ' + sum;
        document.getElementById("output_average").innerHTML = 'Среднее арифметическое введённых чисел = ' + (sum / count).toFixed(2);
    }else if (!value){
        alert('Ну, если Вы больше ничего не хотите, то тогда пока! ))');
        document.getElementById('myText').setAttribute('disabled', 'disabled');
    }else {
        alert('Можно вводить только числа! Всего Вам доброго!');
        document.getElementById('myText').setAttribute('disabled', 'disabled');
    }
}

function task_item_9() {
    document.write('<h2>9. Находим самое большое и маленькое число в строке чисел разделённых пробелами: </h2 \>');
    let string = '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57',
        min = 1000, max = -1000, x, y = 0, s = '';
    let string1 = string + " ";
    for (x = 0; x <= string1.length-1; x++){
        if (string1[x] !== ' '){
        s = s + string1[x];
        }else {
            y = Number(s);
            if (y < min) min = y;
            if (y > max) max = y;
            s = '';
        }
    }
    document.write('Строка с числами: ' + string + '<br /\>Минимальное значение = ' + min + '<br /\>Максимальное значение = ' + max);
}

function task_item_10() {
    document.write('<h2>10. У произвольного числа подсчитываем количество цифр, их сумму и меняем их порядок: </h2 \>');
    let num = 2565874521454,
        str = String(num),
        x = 0,
        sum = 0;
    document.write('Число = ');
    for (x; x <= str.length-1; x++){
        sum = sum + Number(str[x]);
        document.write(str[x]);
    }
    document.write(', цифр в числе = ' + x + ', сумма = ' + sum + ', обратный порядок = ');
    x = str.length-1;
    for (x; x >=0; x--){
        document.write(str[x]);
    }
    document.write('.');
}





