//returning boolean values from functions

function compLess(a,b){
    return a<b;
}

console.log(compLess(13,11));

function count(a,b){
    if (a < 0 || b < 0){
        return undefined;
    }

    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b),2));
}

console.log(count(2,-3));

//counting card

function countCard(card){
    var count = 0;
    switch(card){
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case 'J':
        case 'Q':
        case 'K':
        case 'A':
            count--;
            break;    
    }
    var holdbet = '';
    if(count > 0){
        holdbet = 'Hold!';
    }else{
        holdbet = 'Bet!';
    }
    return count + ' ' + holdbet;
}

countCard(2); countCard('K'); countCard('A'); countCard(0);
console.log(countCard(4));

