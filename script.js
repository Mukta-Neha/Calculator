function calculate(op) {
    let a = Number(document.getElementById("n1").value);
    let b = Number(document.getElementById("n2").value);
    let result;

    if (op === '+') result = a + b;
    else if (op === '-') result = a - b;
    else if (op === '*') result = a * b;
    else if (op === '/') {
        if (b === 0) {
            alert("Cannot divide by zero");
            return;
        }
        result = a / b;
    }

    document.getElementById("result").value = result;
}
