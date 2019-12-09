function triangleSquare() {
    let id = parseInt(document.getElementById("id").value);
    let s;
    switch (id) {
        case 1:
            s = method1();
            break;
        case 2:
            s = method2();
            break;
        case 3:
            s = method3();
            break;
        case 4:
            s = method4();
            break;
        case 5:
            s = method5();
            break;
        case 6:
            s = method6();
            break;
        default:
            document.getElementById("forText").innerHTML = "Такого варианта нет!";
    }


    function method1() {
        let a = parseInt(prompt("Введите сторону a:"));
        let b = parseInt(prompt("Введите сторону b:"));
        let c = parseInt(prompt("Введите сторону c:"));
        if (a + b < c || a + c < b || b + c < a) alert("Такой треугольник не существует");
        let p = (a + b + c) / 2;
        return Math.sqrt((p * (p - a) * (p - b) * (p - c)));
    }

    function method2() {
        let a = parseInt(prompt("Введите сторону a:"));
        let a1 = parseInt(prompt("Введите угл альфа:"));
        let a2 = parseInt(prompt("Введите угл бета:"));
        let a3 = parseInt(prompt("Введите угл гамма:"));
        if (a1 < -1 || a1 > 1 || a2 < -1 || a2 > 1 || a3 < -1 || a3 > 1) alert("Такой треугольник не существует");
        let p = 0.5 * Math.pow(a, 2) * (a2 * a3 / a1);
        return p;
    }

    function method3() {
        let a = parseInt(prompt("Введите сторону a:"));
        let b = parseInt(prompt("Введите сторону b:"));
        let a1 = parseInt(prompt("Введите угл альфа:"));
        return (a * b * Math.sin(a1)) / 2;
    }

    function method4() {
        alert("Треугольник должен быть прямоугольным");
        let a = parseInt(prompt("Введите сторону a:"));
        let b = parseInt(prompt("Введите сторону b:"));
        return (a * b) / 2;
    }

    function method5() {
        let h = parseInt(prompt("Введите высоту:"));
        let c = parseInt(prompt("Введите основание:"));
        return (h * c) / 2;
    }

    function method6() {
        let a = parseInt(prompt("Введите сторону a:"));
        let a1 = parseInt(prompt("Введите угл альфа:"));
        let a2 = parseInt(prompt("Введите угл бета:"));
        let a3 = parseInt(prompt("Введите угл гамма:"));
        return 0.5 * Math.pow(a1, 2) * (Math.sin(a1) * Math.sin(a3) / Math.sin(a2));
    }

    document.getElementById("forText").innerHTML = "Площадь треугольника равна: " + s;
}