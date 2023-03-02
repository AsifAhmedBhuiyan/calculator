'use strict';
/* 

  JavaScript basics
  Asif Ahmed Bhuiyan

  Final Project
*/

const result = document.getElementById("result");
const clear = document.getElementById("clear");
const equals = document.getElementById("equals");
const operator = document.getElementsByClassName("operator");
const number = document.getElementsByClassName("number");
const zero = document.getElementsByClassName("zero");

let currentInput = '';
let previousInput = '';
let operation = null;
let shouldReset = false;

function blankDisplay() {
    result.value = currentInput;
}

function clearAll() {
    currentInput = '';
    previousInput = '';
    operation = null;
    blankDisplay();
}

function numberClick(element) {
    const value = element.target.innerText;
    if (currentInput === ''|| shouldReset) {
        currentInput = value;
        shouldReset = false;
    } else {
        currentInput += value;
    }
    blankDisplay();
}

function executeOperation() {
    const previous = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    if (operation === "+") {
        currentInput = previous + current;
    } else if (operation === "-") {
        currentInput = previous - current;
    } else if (operation === "X") {
        currentInput = previous * current;
    } else if (operation === "÷") {
        currentInput = previous / current;
    }
    previousInput = currentInput;
    blankDisplay();
}

function operatorClick(element) {
    const value = element.target.innerText;
    shouldReset = true;
    if (operation === null) {
        previousInput = currentInput;
    } else {
        executeOperation();
    }
    operation = value;
}

for (let i = 0; i < number.length; i++) {
    number[i].addEventListener("click", numberClick);   
}

for (let i = 0; i < zero.length; i++) {
    zero[i].addEventListener("click", numberClick);
}

for (let i = 0; i < operator.length; i++) {
    operator[i].addEventListener("click", operatorClick);
}

clear.addEventListener("click", function() {
    clearAll();
});

equals.addEventListener('click', function() {
    shouldReset = true;
    executeOperation();
    operation = null;
});
  

  