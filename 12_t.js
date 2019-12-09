function palindrom() {
    let str = document.getElementById("in").value;
    let sReverse = str.split('').reverse().join('');
    if (sReverse === str){
        document.getElementById('res').innerHTML = "Введенная строка является палиндромом";
    } else {
        document.getElementById('res').innerHTML = "Введенная строка не является палиндромом";
    }
}