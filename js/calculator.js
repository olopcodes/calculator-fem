const calculatorBodyEl = document.querySelector('.calculator__body');
const calculatorOutputEl = document.querySelector('.calculator__output');
const calculator = {
    number1: [],
    number2: [],
    operation: '',
    result: 0,

    sum() {
        this.result = +this.number1.join() + this.number2.join();
    },

    subtract() {
        this.result = +this.number1.join() - this.number2.join();

    },

    divide() {
        if(+this.number2.join() === 0) {
            console.log('no divinding by 0 silly goose');
            return
        }

        this.result = +this.number1.join() / this.number2.join();
    },

    multiply() {
        this.result = +this.number1.join() * this.number2.join();
    },

    operate() {

    }
};


calculatorBodyEl.addEventListener('click', e => {
    // when number is clicked
    if(e.target.classList.contains('calculator__num')) {
        if(calculator.operation) {
            calculator.number2.push(e.target.textContent);
        } else {
            calculator.number1.push(e.target.textContent);
        }
    } else if (e.target.classList.contains('calculator__operation')) {
        // operation should not work if num1 is empty
        if(calculator.number1.length === 0) return;
        // if number 2 already selected, perform operation after operation is clicked again
        calculator.operate();
    } else if (e.target.classList.contains('calculator__clear')) {
        calculator.number1 = [];
        calculator.number2 = [];
        calculator.result = 0;
    } else if (
        e.target.classList.contains('calculator__neg-pos') ||
        e.target.closest('div').classList.contains('calculator__neg-pos')
    ) {
        console.log('neg/pos')
    } else if (e.target.classList.contains('calculator__decimal')) {
        console.log('decimal')
    }
})