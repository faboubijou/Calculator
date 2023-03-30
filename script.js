function add(n1,n2) {
    return Number(n1)+Number(n2);
}

function substract(n1,n2) {
    return Number(n1)-Number(n2);
}

function multiply(n1,n2) {
    return Number(n1)*Number(n2);
}

function divide(n1,n2) {
    if (n2==0) {
        return "ERROR";
    } else {
        return Number(n1)/Number(n2);
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
let operator = 0;
let screen_update = document.querySelector(".screen");
let numbers = document.querySelectorAll(".number");
numbers.forEach((number) => {
    number.addEventListener('click', () => {
        let regex = /[.]/g;
        if (screen_update.textContent==0 || screen_update.textContent=="") {
            screen_update.textContent = number.textContent;
        } else if (screen_update.textContent.search(regex)!=-1 && number.textContent==".") {
            console.log("Et non");
        } else {
            screen_update.textContent = screen_update.textContent + number.textContent;
        }
    })
})

let operations = document.querySelectorAll(".operation");
operations.forEach((operation) => {
    operation.addEventListener('click', () => {
        if (operator==0) {
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
enter.addEventListener('click', () => {
    if (operator==0) {
        n1 = screen_update.textContent;
        n2 = 0;
    } else {
        n2 = screen_update.textContent;
        screen_update.textContent = operate(operator,n1,n2);
        n1 = screen_update.textContent;
        n2 = 0;
        operator = 0;
    }
})

let clear = document.querySelector(".clear");
clear.addEventListener('click', () => {
    screen_update.textContent = 0;
    n1 = 0;
    n2 = 0;
    operator = 0;
})

let suppr = document.querySelector(".suppr");
suppr.addEventListener('click', () => {
    screen_update.textContent = screen_update.textContent.slice(0,-1);
})