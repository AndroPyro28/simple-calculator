let tempValue = 0;
let calculatedBefore = false;
let decimal = false;
function operatorClicked(operator) {
    if (!calculatedBefore) {
        document.querySelector('.operator').innerText = operator;
        tempValue = document.querySelector('.show-window').innerText;
        document.querySelector('.temp').innerText = tempValue ;
        document.querySelector('.show-window').innerText = '';
        decimal = false;
       
    } else {
        document.querySelector('.operator').innerText = operator;
        tempValue = document.querySelector('.temp').innerText;
        document.querySelector('.show-label').innerText = '';
        decimal = false;
    }
}

function decimalPointClicked(){
    if(!decimal){
        const decimalPoint = document.querySelector('.btnD').innerText;
        document.querySelector('.show-window').innerText += decimalPoint;
        decimal = true;
    }

}

function calculate() {
  
    let currentValue = document.querySelector('.show-window').innerText;
    currentValue = Number.parseFloat(currentValue);
    tempValue = Number.parseFloat(tempValue);
    let operator = document.querySelector('.operator').innerText;
    if(currentValue == null) {
      document.querySelector('.temp').innerText = tempValue;
      return;
    }

    switch (operator) {
        case '+':
            document.querySelector('.temp').innerText = tempValue + currentValue;
            break;
        case '-':
            document.querySelector('.temp').innerText = tempValue - currentValue;
            break;
        case 'X':
            document.querySelector('.temp').innerText = tempValue * currentValue;
            break;
        case '/':
            document.querySelector('.temp').innerText = tempValue / currentValue;
            break;
    }
    document.querySelector('.show-window').innerText = '';
    document.querySelector('.operator').innerText = '';
    calculatedBefore = true;
    decimal = false;
}
function AC(){
    document.querySelector('.show-window').innerText ='';
    document.querySelector('.temp').innerText = '';
    document.querySelector('.operator').innerText = '';
    calculatedBefore = false;
    decimal = false;
}
function C(){
    document.querySelector('.show-window').innerText ='';
    decimal = false;
}