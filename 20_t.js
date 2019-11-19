function count(){
    let k = document.getElementById("in").value;
    let n = [];

        for( i = 0; i < k; i++){
        n.push(Math.round(Math.random() * 10)); //элементы значения 0-9
    }
    document.getElementById("out").innerHTML = n;

    let sum = 0;
    for (let i = 0; i < k; i++){
        sum += n[i];
    }
    document.getElementById("out2").innerHTML = sum;
}