function count() {
    let x = parseInt(document.getElementById("x").value);
    let y = parseInt(document.getElementById("y").value);
    let action = parseInt(document.getElementById("action").value);
    switch (action) {
        case 1:
            document.getElementById('result').innerHTML=x+y;
            break;
        case 2:
            document.getElementById('result').innerHTML=x-y;
            break;
        case 3:
            document.getElementById('result').innerHTML=x*y;
            break;
        case 4:
            document.getElementById('result').innerHTML=x/y;
            break;
        default:
            document.getElementById('result').innerHTML="Значение введено неверно";
            break;
    }
}