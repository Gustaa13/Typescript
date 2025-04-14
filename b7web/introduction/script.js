var number1 = document.getElementById('number1');
var number2 = document.getElementById('number2');
var buttom = document.getElementById('calculate');
var result = document.getElementById('result');
function calculate(n1, n2) {
    return n1 + n2;
}
buttom.addEventListener('click', function () {
    result.innerHTML = calculate(parseFloat(number1.value), parseFloat(number2.value)).toString();
});
