class TempCalculator{
    constructor(tempOutputDsply, tempInputDsply){
        this.tempOutputDsply = tempOutputDsply;
        this.tempInputDsply = tempInputDsply;
        this.tempReset();
    }

    tempReset(){
        this.tempInputDsply.innerText = '0';
        this.tempCompute();
    }

    tempDelete(){
        if(this.tempInputDsply.innerText.toString().length == 2 && this.tempInputDsply.innerText.includes('-')){
            this.tempInputDsply.innerText = '0';
        }
        if(this.tempInputDsply.innerText.toString().length == 1){
            this.tempInputDsply.innerText = '0';
        }
        else{
            this.tempInputDsply.innerText = this.tempInputDsply.innerText.toString().slice(0, -1);
        }
    }

    tempCompute(){
        let tempInVal = parseFloat(tempInputDsply.innerText);
        let tempInTypes = document.getElementsByName('temperature-type-input');
        let tempOutTypes = document.getElementsByName('temperature-type-output');
        let tempInType = '';
        let tempOutType = '';

        for(let i = 0; i < tempInTypes.length; i++) { 
            if(tempInTypes[i].checked){
                tempInType = tempInTypes[i].value;
            } 
        }
        for(let i = 0; i < tempOutTypes.length; i++) { 
            if(tempOutTypes[i].checked){
                tempOutType = tempOutTypes[i].value;
            } 
        }

        if(tempInType == tempOutType){// same temp types
            if(tempInType === 'celsius'){
                tempOutputDsply.innerText = tempInputDsply.innerText.toString() + '°C';
            }
            else if(tempInType === 'fahrenheit'){
                tempOutputDsply.innerText = tempInputDsply.innerText.toString() + '°F';
            }
            else{
                tempOutputDsply.innerText = tempInputDsply.innerText.toString() + 'K';
            }
        }
        else if(tempInType === 'celsius' && tempOutType === 'fahrenheit'){//C to F
            tempOutputDsply.innerText = ((tempInVal * 1.8) + 32).toFixed(2) + '°F';
        }
        else if(tempInType === 'celsius' && tempOutType === 'kelvin'){//C to K
            tempOutputDsply.innerText = tempInVal + 273.15 + 'K';
        }
        else if(tempInType === 'fahrenheit' && tempOutType === 'celsius'){//F to C
            tempOutputDsply.innerText = ((tempInVal - 32) * (5/9)).toFixed(2) + '°C';
        }
        else if(tempInType === 'fahrenheit' && tempOutType === 'kelvin'){//F to K
            tempOutputDsply.innerText = ((tempInVal - 32) * (5/9) + 273.15).toFixed(2) + 'K';   
        }
        else if(tempInType === 'kelvin' && tempOutType === 'celsius'){//K to C
            tempOutputDsply.innerText = (tempInVal - 273.15).toFixed(4) + '°C';   
        }
        else if(tempInType === 'kelvin' && tempOutType === 'fahrenheit'){//K to F
            tempOutputDsply.innerText = ((tempInVal - 273.15) * (9/5) + 32).toFixed(2) + '°F';   
        }  
    }

    tempAppendNumber(number){
        if(this.tempInputDsply.innerText.length != 9){
            if(this.tempInputDsply.innerText.includes('.') && number === '.')
            return;
            if(this.tempInputDsply.innerText === '0' && number === '0')
            return;
            if(this.tempInputDsply.innerText === '0' && number !== '0' & number !=='.'){
                this.tempInputDsply.innerText = '';
                this.tempInputDsply.innerText = this.tempInputDsply.innerText.toString() + number.toString();
                this.tempCompute();
            }
            else{
                this.tempInputDsply.innerText = this.tempInputDsply.innerText.toString() + number.toString();
                this.tempCompute();
            }
        }
    }

    tempChangePn(){
        if(this.tempInputDsply.innerText === '0' || this.tempInputDsply.innerText === '')
        return;
        if(this.tempInputDsply.innerText.toString()[0] !== '-'){
            this.tempInputDsply.innerText = '-' + this.tempInputDsply.innerText.toString();
        }
        else{
            this.tempInputDsply.innerText = this.tempInputDsply.innerText.toString().substr(1);
        }
    }
}


document.getElementById('input-celsius').checked = true;
document.getElementById('output-fahrenheit').checked = true;


const tempInputTypes = document.querySelectorAll('[data-temp-in-radio]');
const tempOutputTypes = document.querySelectorAll('[data-temp-out-radio]');

const tempNumberBtns = document.querySelectorAll('[data-temp-number]');
const tempDeleteBtn = document.querySelector('[data-temp-delete]');
const tempResetBtn = document.querySelector('[data-temp-reset]');
const tempPnBtn = document.querySelector('[data-temp-pn]');
const tempOutputDsply = document.querySelector('[data-temp-output-display]');
const tempInputDsply = document.querySelector('[data-temp-input-display]');

   
const tempCalculator = new TempCalculator(tempOutputDsply,tempInputDsply);

tempResetBtn.addEventListener('click', button => {
    tempCalculator.tempReset();
})

tempDeleteBtn.addEventListener('click', button => {
    tempCalculator.tempDelete();
    tempCalculator.tempCompute();
})

tempNumberBtns.forEach(button => {
    button.addEventListener('click', () => {
        tempCalculator.tempAppendNumber(button.innerText);
    })
})

tempPnBtn.addEventListener('click', button => {
    tempCalculator.tempChangePn();
    tempCalculator.tempCompute();
})

tempInputTypes.forEach(button => {
    button.addEventListener('click', () => {
        tempCalculator.tempCompute();
    })
})

tempOutputTypes.forEach(button => {
    button.addEventListener('click', () => {
        tempCalculator.tempCompute();
    })
})