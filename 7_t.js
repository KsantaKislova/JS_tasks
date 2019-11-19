function func() {
    let r1 = parseInt(document.getElementById("in1").value);
    let r2 = parseInt(document.getElementById("in2").value);
    let a1 = r1 + r2;
    let a2 = (r1 + r2) / (r1 * r2);
    document.getElementById("out1").innerHTML = "Последовательное подключение: " + a1;
    document.getElementById("out2").innerHTML = "Параллельное подключение: " + a2;
}