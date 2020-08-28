let speedInputMenu;
let speedOutputMenu;


class SpeedCalculator{
    constructor(speedOutputDsply,speedInputDsply){
        this.speedOutputDsply = speedOutputDsply;
        this.speedInputDsply = speedInputDsply;
        this.speedReset();
    }

    speedReset(){
        this.speedInputDsply.innerText = '0';
        this.speedCompute();
    }

    speedDelete(){
        if(this.speedInputDsply.innerText.toString().length == 2 && this.speedInputDsply.innerText.includes('-')){
            this.speedInputDsply.innerText = '0';
        }
        if(this.speedInputDsply.innerText.toString().length == 1){
            this.speedInputDsply.innerText = '0';
        }
        else{
            this.speedInputDsply.innerText = this.speedInputDsply.innerText.toString().slice(0, -1);
        }
    }

    speedCompute(){
        let speedInVal = parseFloat(speedInputDsply.innerText);
        let speedInType = document.getElementById('change-speed-type-in').innerText;
        let speedOutType = document.getElementById('change-speed-type-out').innerText;

        if(speedInType === speedOutType){
            speedOutputDsply.innerText = speedInVal.toString();
        }
        else{
            if(speedInType === 'Centimetres per second ⯆' && speedOutType === 'Metres per second ⯆'){
                speedOutputDsply.innerText = (speedInVal / 100).toFixed(2);
            }
            else if(speedInType === 'Centimetres per second ⯆' && speedOutType === 'Kilometres per hour ⯆'){
                speedOutputDsply.innerText = (speedInVal / 27.778).toFixed(2);
            }
            else if(speedInType === 'Centimetres per second ⯆' && speedOutType === 'Feet per second ⯆'){
                speedOutputDsply.innerText = (speedInVal / 30.48).toFixed(2);
            }
            else if(speedInType === 'Centimetres per second ⯆' && speedOutType === 'Miles per hour ⯆'){
                speedOutputDsply.innerText = (speedInVal / 44.704).toFixed(2);
            }
            else if(speedInType === 'Centimetres per second ⯆' && speedOutType === 'Knots ⯆'){
                speedOutputDsply.innerText = (speedInVal / 51.444).toFixed(2);
            }
            else if(speedInType === 'Centimetres per second ⯆' && speedOutType === 'Mach ⯆'){
                speedOutputDsply.innerText = (speedInVal / 34300).toFixed(2);
            }
            else if(speedInType === 'Metres per second ⯆' && speedOutType === 'Centimetres per second ⯆'){
                speedOutputDsply.innerText = (speedInVal * 100).toFixed(2);
            }
            else if(speedInType === 'Metres per second ⯆' && speedOutType === 'Kilometres per hour ⯆'){
                speedOutputDsply.innerText = (speedInVal * 3.6).toFixed(2);
            }
            else if(speedInType === 'Metres per second ⯆' && speedOutType === 'Feet per second ⯆'){
                speedOutputDsply.innerText = (speedInVal * 3.281).toFixed(2);
            }
            else if(speedInType === 'Metres per second ⯆' && speedOutType === 'Miles per hour ⯆'){
                speedOutputDsply.innerText = (speedInVal * 2.237).toFixed(2);
            }
            else if(speedInType === 'Metres per second ⯆' && speedOutType === 'Knots ⯆'){
                speedOutputDsply.innerText = (speedInVal * 1.944).toFixed(2);
            }
            else if(speedInType === 'Metres per second ⯆' && speedOutType === 'Mach ⯆'){
                speedOutputDsply.innerText = (speedInVal / 343).toFixed(2);
            }
            else if(speedInType === 'Kilometres per hour ⯆' && speedOutType === 'Centimetres per second ⯆'){
                speedOutputDsply.innerText = (speedInVal * 27.778).toFixed(2);
            }
            else if(speedInType === 'Kilometres per hour ⯆' && speedOutType === 'Metres per second ⯆'){
                speedOutputDsply.innerText = (speedInVal / 3.6).toFixed(2);
            }
            else if(speedInType === 'Kilometres per hour ⯆' && speedOutType === 'Feet per second ⯆'){
                speedOutputDsply.innerText = (speedInVal / 1.097).toFixed(2);
            }
            else if(speedInType === 'Kilometres per hour ⯆' && speedOutType === 'Miles per hour ⯆'){
                speedOutputDsply.innerText = (speedInVal / 1.609).toFixed(2);
            }
            else if(speedInType === 'Kilometres per hour ⯆' && speedOutType === 'Knots ⯆'){
                speedOutputDsply.innerText = (speedInVal / 1.852).toFixed(2);
            }
            else if(speedInType === 'Kilometres per hour ⯆' && speedOutType === 'Mach ⯆'){
                speedOutputDsply.innerText = (speedInVal / 1235).toFixed(2);
            }
            else if(speedInType === 'Feet per second ⯆' && speedOutType === 'Centimetres per second ⯆'){
                speedOutputDsply.innerText = (speedInVal * 30.48).toFixed(2);
            }
            else if(speedInType === 'Feet per second ⯆' && speedOutType === 'Metres per second ⯆'){
                speedOutputDsply.innerText = (speedInVal / 3.281).toFixed(2);
            }
            else if(speedInType === 'Feet per second ⯆' && speedOutType === 'Kilometres per hour ⯆'){
                speedOutputDsply.innerText = (speedInVal / 1.097).toFixed(2);
            }
            else if(speedInType === 'Feet per second ⯆' && speedOutType === 'Miles per hour ⯆'){
                speedOutputDsply.innerText = (speedInVal / 1.609).toFixed(2);
            }
            else if(speedInType === 'Feet per second ⯆' && speedOutType === 'Knots ⯆'){
                speedOutputDsply.innerText = (speedInVal / 1.688).toFixed(2);
            }
            else if(speedInType === 'Feet per second ⯆' && speedOutType === 'Mach ⯆'){
                speedOutputDsply.innerText = (speedInVal / 1125).toFixed(2);
            }
            else if(speedInType === 'Miles per hour ⯆' && speedOutType === 'Centimetres per second ⯆'){
                speedOutputDsply.innerText = (speedInVal * 44.704).toFixed(2);
            }
            else if(speedInType === 'Miles per hour ⯆' && speedOutType === 'Metres per second ⯆'){
                speedOutputDsply.innerText = (speedInVal / 2.237).toFixed(2);
            }
            else if(speedInType === 'Miles per hour ⯆' && speedOutType === 'Kilometres per hour ⯆'){
                speedOutputDsply.innerText = (speedInVal * 1.609).toFixed(2);
            }
            else if(speedInType === 'Miles per hour ⯆' && speedOutType === 'Feet per second ⯆'){
                speedOutputDsply.innerText = (speedInVal * 1.467).toFixed(2);
            }
            else if(speedInType === 'Miles per hour ⯆' && speedOutType === 'Knots ⯆'){
                speedOutputDsply.innerText = (speedInVal / 1.151).toFixed(2);
            }
            else if(speedInType === 'Miles per hour ⯆' && speedOutType === 'Mach ⯆'){
                speedOutputDsply.innerText = (speedInVal / 767).toFixed(2);
            }
            else if(speedInType === 'Knots ⯆' && speedOutType === 'Centimetres per second ⯆'){
                speedOutputDsply.innerText = (speedInVal * 51.444).toFixed(2);
            }
            else if(speedInType === 'Knots ⯆' && speedOutType === 'Metres per second ⯆'){
                speedOutputDsply.innerText = (speedInVal / 1.944).toFixed(2);
            }
            else if(speedInType === 'Knots ⯆' && speedOutType === 'Kilometres per hour ⯆'){
                speedOutputDsply.innerText = (speedInVal * 1.852).toFixed(2);
            }
            else if(speedInType === 'Knots ⯆' && speedOutType === 'Feet per second ⯆'){
                speedOutputDsply.innerText = (speedInVal * 1.688).toFixed(2);
            }
            else if(speedInType === 'Knots ⯆' && speedOutType === 'Miles per hour ⯆'){
                speedOutputDsply.innerText = (speedInVal * 1.151).toFixed(2);
            }
            else if(speedInType === 'Knots ⯆' && speedOutType === 'Mach ⯆'){
                speedOutputDsply.innerText = (speedInVal / 667).toFixed(2);
            }
            else if(speedInType === 'Mach ⯆' && speedOutType === 'Centimetres per second ⯆'){
                speedOutputDsply.innerText = (speedInVal * 34300).toFixed(2);
            }
            else if(speedInType === 'Mach ⯆' && speedOutType === 'Metres per second ⯆'){
                speedOutputDsply.innerText = (speedInVal * 343).toFixed(2);
            }
            else if(speedInType === 'Mach ⯆' && speedOutType === 'Kilometres per hour ⯆'){
                speedOutputDsply.innerText = (speedInVal * 1235).toFixed(2);
            }
            else if(speedInType === 'Mach ⯆' && speedOutType === 'Feet per second ⯆'){
                speedOutputDsply.innerText = (speedInVal * 1125).toFixed(2);
            }
            else if(speedInType === 'Mach ⯆' && speedOutType === 'Miles per hour ⯆'){
                speedOutputDsply.innerText = (speedInVal * 767).toFixed(2);
            }
            else if(speedInType === 'Mach ⯆' && speedOutType === 'Knots ⯆'){
                speedOutputDsply.innerText = (speedInVal * 667).toFixed(2);
            }
        }
    }

    speedAppendNumber(number){
        if(this.speedInputDsply.innerText.length != 9){
            if(this.speedInputDsply.innerText.includes('.') && number === '.')
            return;
            if(this.speedInputDsply.innerText === '0' && number === '0')
            return;
            if(this.speedInputDsply.innerText === '0' && number !== '0' & number !=='.'){
                this.speedInputDsply.innerText = '';
                this.speedInputDsply.innerText = this.speedInputDsply.innerText.toString() + number.toString();
                this.speedCompute();
            }
            else{
                this.speedInputDsply.innerText = this.speedInputDsply.innerText.toString() + number.toString();
                this.speedCompute();
            }
        }
    }
}



const speedNumberBtns = document.querySelectorAll('[data-speed-number]');
const speedDeleteBtn = document.querySelector('[data-speed-delete]');
const speedResetBtn = document.querySelector('[data-speed-reset]');
const speedPnBtn = document.querySelector('[data-speed-pn]');
const speedOutputDsply = document.querySelector('[data-speed-output-display]');
const speedInputDsply = document.querySelector('[data-speed-input-display]');

   
const speedCalculator = new SpeedCalculator(speedOutputDsply,speedInputDsply);

speedNumberBtns.forEach(button => {
    button.addEventListener('click', () => {
        speedCalculator.speedAppendNumber(button.innerText);
    })
})

speedResetBtn.addEventListener('click', () => {
    speedCalculator.speedReset();
})

speedDeleteBtn.addEventListener('click', () => {
    speedCalculator.speedDelete();
    speedCalculator.speedCompute();
})

function openCloseSpeedTypeInputMenu(){
    
    if(document.getElementById('speed-input-menu-id').style.display === 'none'){
        document.getElementById('speed-input-menu-id').style.display = 'block';
    }
    else{
        document.getElementById('speed-input-menu-id').style.display = 'none';
    }
}

function openCloseSpeedTypeOutputMenu(){
    
    if(document.getElementById('speed-output-menu-id').style.display === 'none'){
        document.getElementById('speed-output-menu-id').style.display = 'block';
    }
    else{
        document.getElementById('speed-output-menu-id').style.display = 'none';
    }
}

function changeSpeedInput(speedTypeName){
    document.getElementById('change-speed-type-in').innerHTML = speedTypeName;
    openCloseSpeedTypeInputMenu();
    speedCalculator.speedCompute();
}

function changeSpeedOutput(speedTypeName){
    document.getElementById('change-speed-type-out').innerHTML = speedTypeName;
    openCloseSpeedTypeOutputMenu();
    speedCalculator.speedCompute();
}