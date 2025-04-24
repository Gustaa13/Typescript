"use strict";
let number1 = document.getElementById('number1');
let number2 = document.getElementById('number2');
let buttom = document.getElementById('calculate');
let result = document.getElementById('result');
function calculate(n1, n2) {
    return n1 + n2;
}
buttom.addEventListener('click', function () {
    result.innerHTML = calculate(parseFloat(number1.value), parseFloat(number2.value)).toString();
});
