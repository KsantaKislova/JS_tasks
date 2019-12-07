function ugol(){
    let t = document.getElementById("time_").value;
    let v = document.getElementById("speed_").value;

    let x = ((5 * t) / v);
    let grd = Math.round(x * 180 / Math.PI);
    

    if (grd < 361)  {
        document.getElementById("out").innerHTML = "Ответ: " + grd;
    }
    else document.getElementById("out").innerHTML = "Недействительные значения";
}