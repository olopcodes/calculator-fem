const calculatorBodyEl = document.querySelector('.calculator__body');
const calculatorDisplaytEl = document.querySelector('.calculator__display');
const calculatorResultEl = document.querySelector('.calculator__result');
const calculator = {
    result: 0,
    display: [],
    number1: [],
    number2: [],
    operation: '',

    getNumber() {
        // this.number = +this.number1.join();

    }


};


calculatorBodyEl.addEventListener('click', e => {
    if(
        calculator.display.length === 0 && 
        e.target.classList.contains('calculator__operation-only')
    ) {
        return
    } else if (
        e.target.classList.contains('calculator__neg-pos') ||
        e.target.closest('div').classList.contains('calculator__neg-pos')
    ) {
        // multiply number by -1
        calculator.operation ? calculator.number2 *= -1 : calculator.number1 *= -1;
    } else if (
        e.target.classList.contains('calculator__decimal')
    ) {
        // check if number already has a decimal
        console.log('decimal')

    } else {
        calculator.number1.push(e.target.textContent);
        calculator.setNumber()
        console.log(calculator.number1);
    }
})