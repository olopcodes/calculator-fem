const calculatorBodyEl = document.querySelector('.calculator__body');
const calculatorOutputEl = document.querySelector('.calculator__output');
const calculatorResultEl = document.querySelector('.calculator__result');
const calculator = {
    arrNumber1: [],
    arrNumber2: [],
    operation: '',
    result: 0,
    number1: null,
    number2: null,
    
    sum() {
        this.result = this.number1 + this.number2;
    },

    subtract() {
        this.result = this.number1 - this.number2;
    },

    divide() {
        if(this.number2 === 0) console.log('not dividing by 0')
        this.result = this.number1 / this.number2;
    },

    multiply() {
        this.result = this.number1 * this.number2;
    },

    formatArrToNumber() {
        this.number1 = Number(this.arrNumber1.join(''))
        if(this.arrNumber2.length > 0) {
            this.number2 = Number(this.arrNumber2.join(''));
        } 
    },

    clearAll() {
        this.arrNumber1 = [];
        this.arrNumber2 = [];
        this.number1 = null;
        this.number2 = null;
        this.result = 0;
        this.operation = '';
    },

    compute() {
        if(this.operation === '+') this.sum();
        if(this.operation === '-') this.subtract();
        if(this.operation === '/') this.divide();
        if(this.operation === '*') this.multiply();
    }
};

calculatorBodyEl.addEventListener('click', e => {
    if(e.target.classList.contains('calculator__num')) {
        // add number clicked to first number array
        if(!calculator.operation) calculator.arrNumber1.push(e.target.textContent);

        // add number clickes to second number array
        if(calculator.operation) calculator.arrNumber2.push(e.target.textContent);

    } 
    
    if (e.target.classList.contains('calculator__operation')) {
        // if nothing is in number 1 array, do nothing
        if(calculator.arrNumber1.length === 0) return
        
        // allow no changes in operation, till computed
        if(calculator.operation) return

        // if number 2 has an explict value, then compute first
        if(calculator.number2) calculator.compute();

        calculator.operation = e.target.textContent;
    }

    if (e.target.classList.contains('calculator__equal')) {
        // format arrays to numbers first if possible
        calculator.formatArrToNumber();

        // check if all values needed for calcualtion are present
        if(
            calculator.number1 &&
            calculator.number2 &&
            calculator.operation
        ) {
            calculator.compute();
        }
    }

    if(e.target.classList.contains('calculator__decimal')) {
        
        if(!calculator.operation && calculator.arrNumber1.indexOf('.') === -1) {
            calculator.arrNumber1.push('.');
        }

        if(calculator.operation && calculator.arrNumber2.indexOf('.') === -1) {
            calculator.arrNumber2.push('.');
        }
    }

    if(e.target.classList.contains('calculator__backspace')) {
        if(
            !calculator.operation &&
            calculator.arrNumber1.length > 0
        ) {
            calculator.arrNumber1.pop();
        }

        if(
            calculator.operation &&
            calculator.arrNumber2.length > 0
        ) {
            calculator.arrNumber2.pop();
        }
    }

    if(e.target.classList.contains('calculator__clear')) {
       calculator.clearAll();
    }

    if(e.target.classList.contains('calculator__neg-pos') ||
        e.target.closest('div').classList.contains('calculator__neg-pos')
    ) {
        if(!calculator.operation && 
            calculator.arrNumber1.length === 0
        ) {
            calculator.arrNumber1.push('-')
        }

        if(calculator.operation && calculator.arrNumber2.length === 0){
            calculator.arrNumber2.push('-')
        }
    }
})