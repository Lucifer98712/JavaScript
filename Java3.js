//Madlib game
function wordBlanks(myNoun, myVerb, myAdjective, myAdverb){
    var sentence = 'The ' + myAdjective + ' ' + myNoun + ' ' + myVerb + ' to the garden ' + myAdverb + '.';
    return sentence;
}

console.log(wordBlanks('dog','ran','small','quickly'));
console.log(wordBlanks('elephant','walked','giant','slowly'));

