function text() {
    let str = document.getElementById("in").value;

    let arr = str.split(" ");
    let max, min, av = 0;
    max = arr[0].length;
    min = arr[0].length;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > max) max = arr[i].length;
        if (arr[i].length < min) min = arr[i].length;
        av += arr[i].length;
    }
    av /= arr.length;

    
    document.getElementById("out").innerHTML = "Наибольшее слово: " + max +'<br \/>' + "Наименьшее слово: "+ min + '<br \/>'+ "Средняя длина: " + av;
    
}

function count_words(){
    str = document.getElementById("in").value;

    str = str.replace(/(^\s*)|(\s*$)/gi,""); //convert 2 or more spaces to 1  
    str = str.replace(/[ ]{2,}/gi," ");// exclude newline with a start spacing  
    str = str.replace(/\n /,"\n");

    document.getElementById("out2").value = str.split(' ').length;

}