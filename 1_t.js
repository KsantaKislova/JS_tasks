function foo(){ 
    let x = parseInt(document.getElementById('x').value);
    let y = (x*x - 7*x + 10) / (x*x - 8*x + 12);
    document.getElementById('x').innerHTML = x;
}

