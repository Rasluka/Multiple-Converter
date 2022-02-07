'use strict';

const convertTitle = document.getElementById('covertTitle');
const inputValueTxt = document.getElementById('inputValueTxt');
const convertBtt = document.getElementById('convertBtt');
const resultTxt = document.getElementById('result');
const resetBtt = document.getElementById('resetBtt');
const swapBtt = document.getElementById('swapBtt');
const uOneSel = document.getElementById('unitOne');
const uTwoSel = document.getElementById('unitTwo');
const askInputTxt = document.getElementById('askInputTitle');

convertBtt.addEventListener('click', function(){

    if(inputValueTxt.value != ''){
        if(uOneSel.value == 'Decimal' && uTwoSel.value == 'Binary'){
            resultTxt.innerText = decToBin(parseInt(inputValueTxt.value));
        }
        else if(uOneSel.value == 'Binary' && uTwoSel.value == 'Decimal'){
            resultTxt.innerText = binToDec(inputValueTxt.value);
        }
    } else  {
        resultTxt.innerText = 'No value to convert';
    }

})

resetBtt.addEventListener('click', function(){
    decNumberTxt.value = '';
})

uOneSel.addEventListener('change', function(){
    convertTitle.innerText = 'Convert from ' + uOneSel.value + ' to ' + uTwoSel.value;
    askInputTxt.innerText = 'Enter the ' + uOneSel.value + ' value:'
})

uTwoSel.addEventListener('change', function(){
    convertTitle.innerText = 'Convert from ' + uOneSel.value + ' to ' + uTwoSel.value;
    convertBtt.innerText = 'Convert to ' + uTwoSel.value;
})


// Decimal to Binary function:
function decToBin(decNumber){
    var binNumberStr = '';

    while ((decNumber / 2 )  >= 1) {

        if (decNumber % 2 == 1){
            decNumber = (decNumber - 1) / 2;
            binNumberStr += '1';
        } else {
            decNumber = decNumber / 2;
            binNumberStr += '0';
        }

    }

    if (decNumber/2 < 1){
        if (decNumber%2 == 1){
            binNumberStr += '1';
        }
        else {
            binNumberStr += '0';
        }
    }

    return 'The result is ' + binNumberStr.split("").reverse().join("");
}

// Binary to Decimal funciton:
function binToDec(binNumber){
    var decimalNumber = 0;
    var binSplitted = binNumber.split('');
    var binLenght = binSplitted.length - 1;

    for(let i = 0; i <= binLenght; i++){        
        decimalNumber += binSplitted[i] * (2 ** (binLenght - i));
    }

    return 'The final result is: ' + decimalNumber;
}
