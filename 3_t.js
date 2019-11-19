
let str = prompt('Введите фамилию: ');
let len_of_vowels = str.match(/[аоэиуыеёюя]/igm).length;
let len_of_consonants = str.match(/[йцкнгшщзхждлрпвфчсмтьб]/igm).length;

document.write('Количество гласных: ' + len_of_vowels);
document.write('\nКоличество согласных: ' + len_of_consonants);

