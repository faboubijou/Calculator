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
    } else if (operator=="*") {
        resu = multiply(n1,n2);
    } else if (operator=="/") {
        resu = divide(n1,n2);
    }
    return resu;
}