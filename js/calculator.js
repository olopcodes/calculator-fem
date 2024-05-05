const calculatorBodyEl = document.querySelector('.calculator__body');
const calculatorOutputEl = document.querySelector('.calculator__output');
const calculatorResultEl = document.querySelector('.calculator__result');

const calculator = {
    arrNumber1: [],
    arrNumber2: [],
    number1: 0,
    number2: 0,
    operation: '',
    result: 0,

    formatArrToNumber() {
        this.number1 = Number(this.arrNumber1.join())
        if(this.arrNumber2.length > 0) {
            this.number2 = Number(this.arrNumber2.join());
        } 
    },

    sum() {
       this.result = this.number1 + this.number2;
    },

    subtract() {
        this.result = this.number1 - this.number2;
    },

    divide() {
        if(this.number2 === 0) {
            console.log('no divinding by 0 silly goose');
            return
        }

        this.result = this.number1 / this.number2;
    },

    multiply() {
        this.result = this.number1 * this.number2;     
    },

    operate() {
        
        this.formatArrToNumber();

;        if(this.operation === '+') {
            this.sum();
        } else if (this.operation === '-') {
            this.subtract();
        } else if (this.operation === '/') {
            this.divide();
        } else if (this.operation === '*') {
            this.multiply();
        }

        // if number is a decimal, fixed 2 spots
        this.formatDecimalNumber();
    },

    formatDecimalNumber() {
        if(!Number.isInteger(this.number1)) {
            this.number1 = Number(this.number1.toFixed(2).split(",").join(""));
        } else if (!Number.isInteger(this.number2)) {
            this.number2 = Number(this.number1.toFixed(2).split(",").join(""));
        } else if (!Number(this.result)) {
            Number(this.result = this.result.toFixed(2).split(",").join(""));
        }
    },

    clearAll() {
        // clearing values
        this.arrNumber1 = [];
        this.arrNumber2 = [];
        this.number1 = 0;
        this.number2 = 0;
        this.operation = '';
        this.result = 0;
        calculatorOutputEl.textContent = '';
        calculatorResultEl.textContent = '';
    }
};


calculatorBodyEl.addEventListener('click', e => {
    // when number is clicked
    if(e.target.classList.contains('calculator__num')) {
        if(calculator.operation) {
            calculator.arrNumber2.push(e.target.textContent);
        } else {
            calculator.arrNumber1.push(e.target.textContent);
            console.log(calculator.arrNumber1, 'calc num when clicked')
        }
    } else if (e.target.classList.contains('calculator__operation')) {
        // operation should not work if num1 is empty
        if(calculator.arrNumber1.length === 0) return;
        // if number 2 already selected, perform operation after operation is clicked again
        if(calculator.arrNumber2.length === 0) {
            calculator.operation = e.target.textContent;
        } else {
            // console.log('add op')
            calculator.operate(e.target.textContent);
        }
    } else if (e.target.classList.contains('calculator__clear')) {
        calculator.clearAll();
    } else if (
        e.target.classList.contains('calculator__neg-pos') ||
        e.target.closest('div').classList.contains('calculator__neg-pos')
    ) {
        console.log('neg/pos')
    } else if (e.target.classList.contains('calculator__decimal')) {
        if(calculator.arrNumber1.length > 0) {
            // format arr to a number
            calculator.formatArrToNumber();

            if(Number.isInteger(calculator.number1)) {
                calculator.arrNumber1.push('.');
            } else {
                console.log('no more decimals');
                return
            }
            
            if (
                Number.isInteger(calculator.number2) &&
                calculator.operation
            ) {
                calculator.arrNumber2.push('.');
            } else {
                console.log('no more decimals');
                return
            }
        }
    } else if (e.target.classList.contains('calculator__equal')) {
        calculator.operate();
        
    }
})

