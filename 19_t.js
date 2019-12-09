function check() {
    let str = document.getElementById("in").value;
    let arr = [];
    let k = 0;
    let count = 0;
    for (let i = 0; i < str.length; i++){
        for(let j = 0; j < str.length; j++){
            if (str[i] === arr[j]) k++;
        }
        if (k === 0){
            arr[count] = str[i];
            count++;
        }
        k = 0;
    }
    document.getElementById("out").innerHTML = arr;
}