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

// Adding all the event listener for each button

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
    uOneSel.value = 'Decimal';
    uTwoSel.value = 'Binary';
    inputValueTxt.value = '';
    resultTxt.innerText = '';
})

uOneSel.addEventListener('change', function(){
    console.log(uTwoSel.options)
    convertTitle.innerText = 'Convert from ' + uOneSel.value + ' to ' + uTwoSel.value;
    askInputTxt.innerText = 'Enter the ' + uOneSel.value + ' value:'
    doesItMakeSense();
})

uTwoSel.addEventListener('change', function(){
    convertTitle.innerText = 'Convert from ' + uOneSel.value + ' to ' + uTwoSel.value;
    convertBtt.innerText = 'Convert to ' + uTwoSel.value;
    doesItMakeSense();
})



// Decimal to Binary function:
function decToBin(decNumber){
    var binNumberStr = '';
    var originalNumber = decNumber;

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

    return originalNumber + ' converted to binary is ' + binNumberStr.split("").reverse().join("");
}

// Binary to Decimal funciton:
function binToDec(binNumber){
    var decimalNumber = 0;
    var binSplitted = binNumber.split('');
    var binLenght = binSplitted.length - 1;

    for(let i = 0; i <= binLenght; i++){        
        decimalNumber += binSplitted[i] * (2 ** (binLenght - i));
    }

    return binNumber + 'converted to decimal is ' + decimalNumber;
}

// To check if the same unit option have selected
function doesItMakeSense(){
    if(uOneSel.value == uTwoSel.value){
        convertTitle.innerText += '?';
        resultTxt.innerText = 'Doesn\'t make any sense, does it?'
        convertBtt.disabled = true;

        setTimeout(function(){resultTxt.innerText = '';}, 4000)
        

    }
    else{
        convertBtt.disabled = false;
    }
}