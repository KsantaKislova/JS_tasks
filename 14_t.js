
let x = parseInt(document.getElementById('x').value);
let y = parseInt(document.getElementById('y').value);
let r = parseInt(document.getElementById('r').value);

let x1 = parseInt(document.getElementById('x1').value);
let y1 = parseInt(document.getElementById('y1').value);

function checkk(x, y, r, x1, y1){
    return SVGPathSegCurvetoQuadraticAbs((x - x1)*(x - x1) + (y - y1)*(y - y1)) <= r;
}



if(checkk(x, y, r, x1, y1)) document.write("Точка находится внутри круга или на его кокружности");

else document.write("Точка находится не в кругу");


