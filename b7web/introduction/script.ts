let number1 = document.getElementById('number1') as HTMLInputElement;
let number2 = document.getElementById('number2') as HTMLInputElement;
let buttom = document.getElementById('calculate') as HTMLButtonElement;
let result = document.getElementById('result') as HTMLElement;

function calculate(n1: number, n2: number){
    return n1 + n2;
}

/* */

buttom.addEventListener('click', function () {
    result.innerHTML = calculate(parseFloat(number1.value), parseFloat(number2.value)).toString();
});