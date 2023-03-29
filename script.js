function add(n1,n2) {
    return n1+n2;
}

function substract(n1,n2) {
    return n1-n2;
}

function multiply(n1,n2) {
    return n1*n2;
}

function divide(n1,n2) {
    if (n2==0) {
        return "ERROR";
    } else {
        return n1/n2;
    }
}

function operate(operator,n1,n2) {
    let resu = 0;
    if (operator=="+") {
        resu = add(n1,n2);
    } else if (operator=="-") {
        resu = substract(n1,n2);
    } else if (operator=="x") {
        resu = multiply(n1,n2);
    } else if (operator=="/") {
        resu = divide(n1,n2);
    }
    return resu;
}

let n1 = 0;
let n2 = 0;
let operator = "";
let screen_update = document.querySelector(".screen");
let numbers = document.querySelectorAll(".number");
numbers.forEach((number) => {
    number.addEventListener('click', () => {
        if (screen_update.textContent==0 || screen_update.textContent=="") {
            screen_update.textContent = number.textContent;
        } else {
            screen_update.textContent = screen_update.textContent + number.textContent;
        }
    })
})

let operations = document.querySelectorAll(".operation");
operations.forEach((operation) => {
    operation.addEventListener('click', (operator,n1,n2) => {
        if (operator=="") {
            n1 = screen_update.textContent;
            operator = operation.textContent;
            screen_update.textContent = "";
        } else {
            n2 = screen_update.textContent;
            n1 = operate(operator,n1,n2);
            operator = operation.textContent;
            screen_update.textContent = "";
        }
    })
})

let enter = document.querySelector(".enter");
enter.addEventListener('click', (operator,n1,n2) => {
    console.log(n1);
    console.log(n2);
    console.log(operator);
    if (operator=="") {
        n1 = screen_update.textContent;
        n2 = 0;
    } else {
        screen_update.textContent = operate(operator,n1,n2);
    }
})

let clear = document.querySelector(".clear");
clear.addEventListener('click', (operator,n1,n2) => {
    screen_update.textContent = 0;
    n1 = 0;
    n2 = 0;
    operator = "";
})