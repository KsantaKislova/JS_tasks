let n = prompt("Введите количество элементов последовательности Фибоначчи: ");

let array_fib = [0, 1];

for(let i = array_fib.length; i < n; i++){
    array_fib[i] = array_fib[i-2] + array_fib[i-1];
}


document.write("Последовательность Фибоначчи из " + n + " элементов равна: " + array_fib + "<br/>"); 

let sum = 0; 
for (let i = 0; i < n; i++){
    sum += array_fib[i];
}

document.write("Сумма элементов равна: " + sum + "<br/>"); 

//document.write(sum);