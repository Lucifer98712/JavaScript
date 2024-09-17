//Ordering of else if statement
const prompt = require('prompt-sync')({sigint: true});//Need to use this code to use prompt

//We need to order if else ladder according to our need of programming

function comparison(num){
    if(num < 5){
        return 'Less than 5';
    }else if(num < 7){
        return 'Less than 7';
    }else if(num < 10){
        return 'Less than 10';
    }else{
        return 'Greater than 10';
    }
}

console.log(comparison(70));

/*Write chained if/else if statements to fulfill the following conditions:

num < 5 - return Tiny
num < 10 - return Small
num < 15 - return Medium
num < 20 - return Large
num >= 20 - return Huge

 */

function size(num){
    if(num < 5){
        return 'Tiny';
    }else if(num <10){
        return 'Small';
    }else if(num < 15){
        return 'Medium';
    }else if(num < 20){
        return  'Large';
    }else{
        return 'Huge';
    }
}

console.log(size(19));

//Golf code stroke and par

var names = ['Hole-in-one!', 'Eagle', 'Birdie', 'Par', 'Bogey', 'Double Bogey', 'Go Home!'];

function golfScore(par,stroke){
    if(stroke == 1){
        return names[0];
    }else if(stroke <= par - 2){
        return names[1];
    }else if(stroke == par - 1){
        return names[2];
    }else if(stroke == par){
        return names[3];
    }else if(stroke == par + 1){
        return names[4];
    }else if(stroke == par + 2){
        return names[5];
    }else{
        return names[6];
    }             
}

console.log(golfScore(2,3));

//Switch case statement

function switchInCace(val){
    var answer = '';

    switch(val){
        case 1:
            answer = 'alpha';
            break;
        
        case 2:
            answer = 'beta';
            break;
        
        case 3:
            answer = 'gamma';
            break;
        
        case 4:
            answer = 'delta';
            break;
            
        default:
            answer = 'No Symbol!';
            break;    
    }
    return answer;
}

console.log(switchInCace('2'));

//For multiple cases having the same output, we can omit break and write the common output

function switchInLevel(val){
    var level = '';

    switch(val){
        case 1:
        case 2:
        case 3:
            level = 'low';
            break;
        case 4:
        case 5:
        case 6:
            level = 'mid';
            break;
        case 7:
        case 8:
        case 9:
            level = 'high';
            break;
        default:
            level = 'Unknown!';
            break;                            
    }
    return level;
}

console.log(switchInLevel(4));

