class Calculator {
    constructor(secondaryDsply, mainDsply){
        this.secondaryDsply = secondaryDsply;
        this.mainDsply = mainDsply;
        this.reset();
        this.updateDsply();
        this.operatorClicked = false;
        this.numberClicked = false;
        this.equalClicked = false;
    }

    reset(){
        this.mainDsplyCurrent = '0';
        this.secondaryDsplyPrevious = '';
        this.operation = undefined;
    }

    delete(){
        if(this.mainDsplyCurrent.length == 2 && this.mainDsplyCurrent.includes('-')){
            this.mainDsplyCurrent = '0';
        }
        if(this.mainDsplyCurrent.length == 1){
            this.mainDsplyCurrent = '0';
        }
        else{
            this.mainDsplyCurrent = this.mainDsplyCurrent.toString().slice(0, -1);
        }
    }

    appendNumber(number){
        if(this.mainDsplyCurrent.length <= 11){
            this.numberClicked = true;
            if(this.operatorClicked === true || this.equalClicked === true){
                this.equalClicked = false;
                this.operatorClicked = false;
                this.mainDsplyCurrent = number;
            }
            else{
                
                if(this.mainDsplyCurrent.includes('.') && number === '.')
                return;
                if(this.mainDsplyCurrent === '0' && number === '0')
                return;
                if(this.mainDsplyCurrent === '0' && number !== '0' & number !=='.'){
                    this.mainDsplyCurrent = '';
                    this.mainDsplyCurrent = this.mainDsplyCurrent.toString() + number.toString();
                }
                else{
                    this.mainDsplyCurrent = this.mainDsplyCurrent.toString() + number.toString();
                }
            }
        }     
    }

    changePn(){
        if(this.mainDsplyCurrent === '0' || this.mainDsplyCurrent === '')
            return;
            if(this.mainDsplyCurrent[0] !== '-'){
                this.mainDsplyCurrent = '-' + this.mainDsplyCurrent.toString();
            }
            else{
                this.mainDsplyCurrent = this.mainDsplyCurrent.toString().substr(1);
            }
    }

    chooseOperation(operation){
        this.numberClicked = false;
        this.operatorClicked = true;
        if(this.mainDsplyCurrent === '')
        return;
        if(this.secondaryDsplyPrevious !== ''){
            this.compute();
        }
        this.operation = operation;
        this.secondaryDsplyPrevious = this.mainDsplyCurrent;
        this.mainDsplyCurrent = '';
    }

    compute(){
        let result;
        const prev = parseFloat(this.secondaryDsplyPrevious);
        const current = parseFloat(this.mainDsplyCurrent);
        if(isNaN(prev) || isNaN(current))
        return;
        switch(this.operation){
            case '+':
                result = prev + current;
                break;
            case '-':
                result = prev - current;
                break;
            case '÷':
                result = prev / current;
                break;
            case 'X':
                result = prev * current;
                break;
            default:
                return;   
        }
        if(result.toString().length > 11){
            this.mainDsplyCurrent = result.toExponential(4).toString();
        }
        else{
            this.mainDsplyCurrent = result.toString();
        }
        this.operation = undefined;
        this.secondaryDsplyPrevious = '';

    }

    updateDsply(){
        this.mainDsply.innerText = this.mainDsplyCurrent;
        if(this.operation != null){
            this.secondaryDsply.innerText = `${this.secondaryDsplyPrevious} ${this.operation}`;
        }
        else{
            this.secondaryDsply.innerText = this.secondaryDsplyPrevious;
        }
    }

}


const numberBtns = document.querySelectorAll('[data-number]');
const operatorBtns = document.querySelectorAll('[data-operation]');
const eqlBtn = document.querySelector('[data-equals]');
const deleteBtn = document.querySelector('[data-delete]');
const resetBtn = document.querySelector('[data-reset]');
const pnBtn = document.querySelector('[data-pn]');
const secondaryDsply = document.querySelector('[data-previous-number]');
const mainDsply = document.querySelector('[data-current-number]');

const calculator = new Calculator(secondaryDsply,mainDsply);

pnBtn.addEventListener('click', button => {
    calculator.changePn();
    calculator.updateDsply();
})

numberBtns.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDsply();
    })
})

operatorBtns.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText);
        calculator.updateDsply();
    })
})

resetBtn.addEventListener('click', button => {
    calculator.reset();
    calculator.updateDsply();
})


eqlBtn.addEventListener('click', button => {
    calculator.compute();
    calculator.updateDsply();
    calculator.equalClicked = true;
})

deleteBtn.addEventListener('click', button => {
    calculator.delete();
    calculator.updateDsply();
})

