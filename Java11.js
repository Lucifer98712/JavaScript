//Ternary operator
//condition?if-true:if-false;

function ternary(a,b){
    return a>b ? true : false;
    //same as return a>b;
}

console.log(ternary(5,4));

//else-if-ladder with ternary operator
//syntax : cond?true:cond?true:cond......;

function signCheck(num){
    return num > 0 ? 'Positive' : num < 0 ? 'Negative' : 'Neutral';
}

console.log(signCheck(-1));