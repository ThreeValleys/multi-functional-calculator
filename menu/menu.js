let isOpen;



function menu(){
    rotateBtn();
    openCloseMenu();
}

function changeCalc(calcName,calcId){
    document.getElementById('label-calc-type').innerHTML = calcName;
    document.getElementById('calc-container-id').style.display= 'none';
    document.getElementById('temperature-container-id').style.display= 'none';
    document.getElementById('speed-container-id').style.display= 'none';
    document.getElementById('currency-container-id').style.display= 'none';
    document.getElementById('date-container-id').style.display= 'none';
    document.getElementById(calcId).style.display = 'grid';

    rotateBtn();
    openCloseMenu();
}

function rotateBtn(){
    let element = document.getElementById('menuBtn');

		if (element.className === "menu-btn normal") {
            isOpen = true;
            element.className = "menu-btn rotate";
		}
		else if ( element.className === "menu-btn rotate") {
            isOpen = false;
            element.className = 'menu-btn normal';
		}
}

function openCloseMenu(){
    let listItems = document.getElementById('list-items');
    if(isOpen == true){
        listItems.style.height = '700px';
    }
    else{
        listItems.style.height = '0px';
    }
}



$(document).ready(function(){

    

    $("#stand-calc").hover(function(){
      $('#stand-calc-description').css("display", "block");
      }, function(){
      $('#stand-calc-description').css("display", "none");
    });

    $("#temp-calc").hover(function(){
        $('#tempuriture-calc-description').css("display", "block");
        }, function(){
        $('#tempuriture-calc-description').css("display", "none");
    });

    $("#speed-calc").hover(function(){
        $('#speed-calc-description').css("display", "block");
        }, function(){
        $('#speed-calc-description').css("display", "none");
    });


});

