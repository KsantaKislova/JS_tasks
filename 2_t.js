function addition() {
    let a = parseInt(document.getElementById('a').value);
    let b = parseInt(document.getElementById('b').value);
    let c = parseInt(document.getElementById('c').value);

    if (isNaN(a)==true) a=0;
    if (isNaN(b)==true) b=0;
    if (isNaN(c)==true) c=0;
    

    let max=0;

    let arr = [a,b,c];

    let min = arr[0];
    sum = null;
    
    for (let i = 0; i < 3; i++)
        sum += Number(arr[i]);
    
    for (let i = 0; i < 3; i++)
        if (arr[i] > max) max = arr[i];
    
    for (let i = 0; i < 3; i++)
        if (arr[i] < min) min = arr[i];

 
    document.getElementById('sum').innerHTML = sum;
    document.getElementById('max').innerHTML = max;
    document.getElementById('min').innerHTML = min;
}
