let currencyInputMenu;
let currencyOutputMenu;

//array of currency objects {base: name: symbol:}
let currencyList = [];
  
getcurr();

//retrieving currency base, name, symbol from JSON and putting it into array
async function getcurr(){
    const response = await fetch('currency_calculator/currencies.JSON');
    const currencies = await response.json();

    let paraIn;
    let paraOut;
    for(x in currencies.currencies){
        currencyList[x] = {base: currencies.currencies[x].base, name: currencies.currencies[x].name, symbol: currencies.currencies[x].symbol};
    }

    //populate menus with currencyList[] data
    for(let x = 0; x < currencyList.length; x++){
        paraIn = document.createElement('p');
        paraIn.innerText = currencyList[x].name;
        paraIn.id = currencyList[x].base;
        paraIn.className = 'inputCurrencies';
        document.getElementById('currency-input-menu-id').appendChild(paraIn);

        paraOut = document.createElement('p');
        paraOut.innerText = currencyList[x].name;
        paraOut.id = currencyList[x].base;
        paraOut.className = 'outputCurrencies';
        document.getElementById('currency-output-menu-id').appendChild(paraOut);
    }   
    
    
    //on click of item in menu data is displayed
    let inCurrs = document.querySelectorAll('.inputCurrencies');
    inCurrs.forEach(paraI => {
        paraI.addEventListener('click', () => {
        changeCurrencyInput(paraI.innerText);
            for(x in currencyList){
                if(currencyList[x].name == paraI.innerText){
                    document.getElementById('inCurrencySymbol').innerText = currencyList[x].symbol;
                }
            }
        })
    })

    //on click of item in menu data is displayed
    let outCurrs = document.querySelectorAll('.outputCurrencies');
    outCurrs.forEach(paraO => {
        paraO.addEventListener('click', () => {
        changeCurrencyOutput(paraO.innerText);
        document.getElementById('display-currency-out').innerText = '0';
            for(x in currencyList){
                if(currencyList[x].name == paraO.innerText){
                    document.getElementById('outCurrencySymbol').innerText = currencyList[x].symbol;
                }
            }
        })
    })
        
        
}

//api call to recieve latest exchange rate data
async function getExchangeRate(baseCurrency,exchangeCurrency){
    let eRate = 0;
    const url = 'https://api.exchangeratesapi.io/latest?base=' + baseCurrency;
    const response = await fetch(url);
    const data = await response.json();
    for(rate in data.rates){
        if(rate === exchangeCurrency){
            eRate = data.rates[rate];
        }
    }
    return eRate;
}


//open and close menu list of currencies
document.getElementById('change-currency-type-in').addEventListener('click', () =>{
    openCloseCurrencyTypeInputMenu();
})

//open and close menu list of currencies
function openCloseCurrencyTypeInputMenu(){
    if(document.getElementById('currency-input-menu-id').style.display === 'none'){
        document.getElementById('currency-input-menu-id').style.display = 'block';
    }
    else{
        document.getElementById('currency-input-menu-id').style.display = 'none';
    }
}

//changes innertext of button to value of currency chosen
function changeCurrencyInput(currencyTypeNameIn){
    document.getElementById('change-currency-type-in').innerHTML = currencyTypeNameIn  + " ⯆";
    openCloseCurrencyTypeInputMenu();
}

//open and close menu list of currencies
document.getElementById('change-currency-type-out').addEventListener('click', () =>{
    openCloseCurrencyTypeOutputMenu();
})

//open and close menu list of currencies
function openCloseCurrencyTypeOutputMenu(){
    
    if(document.getElementById('currency-output-menu-id').style.display === 'none'){
        document.getElementById('currency-output-menu-id').style.display = 'block';
    }
    else{
        document.getElementById('currency-output-menu-id').style.display = 'none';
    }
}

//changes innertext of button to value of currency chosen
function changeCurrencyOutput(currencyTypeNameOut){
    document.getElementById('change-currency-type-out').innerHTML = currencyTypeNameOut  + " ⯆";
    openCloseCurrencyTypeOutputMenu();
}



class CurrencyCalculator{
    constructor(currencyOutputDsply,currencyInputDsply){
        this.currencyOutputDsply = currencyOutputDsply;
        this.currencyInputDsply = currencyInputDsply;
        this.currencyReset();
    }

    currencyReset(){
        this.currencyInputDsply.innerText = '0';
        this.currencyOutputDsply.innerText = '0';
    }

    currencyDelete(){
        if(this.currencyInputDsply.innerText.toString().length == 2 && this.currencyInputDsply.innerText.includes('-')){
            this.currencyInputDsply.innerText = '0';
        }
        if(this.currencyInputDsply.innerText.toString().length == 1){
            this.currencyInputDsply.innerText = '0';
        }
        else{
            this.currencyInputDsply.innerText = this.currencyInputDsply.innerText.toString().slice(0, -1);
        }
    }

    currencyCompute(){
        let currencyInVal = parseFloat(currencyInputDsply.innerText);
        let currencyInType = document.getElementById('change-currency-type-in').innerText;
        currencyInType = currencyInType.substring(0, currencyInType.length - 2);
        let currencyOutType = document.getElementById('change-currency-type-out').innerText;
        currencyOutType = currencyOutType.substring(0, currencyOutType.length - 2);


        if(currencyInType === currencyOutType){
            currencyOutputDsply.innerText = currencyInVal.toString();
        }
        else{
            let inBase;
            let outBase;
            for(let z = 0; z < currencyList.length; z++){
                if(currencyList[z].name == currencyInType){
                    inBase = currencyList[z].base;
                }
                if(currencyList[z].name == currencyOutType){
                    outBase = currencyList[z].base;
                }
            }
            
            getExchangeRate(inBase,outBase).then(eRate => {
                currencyOutputDsply.innerText = (currencyInVal * eRate).toFixed(2);
            });

        }
    }

    currencyAppendNumber(number){
        if(this.currencyInputDsply.innerText.length != 9){
            if(this.currencyInputDsply.innerText.includes('.') && number === '.')
            return;
            if(this.currencyInputDsply.innerText === '0' && number === '0')
            return;
            if(this.currencyInputDsply.innerText === '0' && number !== '0' & number !=='.'){
                this.currencyInputDsply.innerText = '';
                this.currencyInputDsply.innerText = this.currencyInputDsply.innerText.toString() + number.toString();
            }
            else{
                this.currencyInputDsply.innerText = this.currencyInputDsply.innerText.toString() + number.toString();
            }
        }
    }
}



const currencyNumberBtns = document.querySelectorAll('[data-currency-number]');
const currencyDeleteBtn = document.querySelector('[data-currency-delete]');
const currencyResetBtn = document.querySelector('[data-currency-reset]');
const currencyOutputDsply = document.querySelector('[data-currency-output-display]');
const currencyInputDsply = document.querySelector('[data-currency-input-display]');
const currencyConvertBtn = document.querySelector('[data-currency-convert]');

   
const currencyCalculator = new CurrencyCalculator(currencyOutputDsply,currencyInputDsply);

currencyNumberBtns.forEach(button => {
    button.addEventListener('click', () => {
        currencyCalculator.currencyAppendNumber(button.innerText);
    })
})

currencyResetBtn.addEventListener('click', () => {
    currencyCalculator.currencyReset();
})

currencyDeleteBtn.addEventListener('click', () => {
    currencyCalculator.currencyDelete();
})

currencyConvertBtn.addEventListener('click', () =>{
    currencyCalculator.currencyCompute();
})



