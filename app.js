function sayHello(name){
    console.log('Hello ' + name);// global function
}

sayHello('Pratik');
/*Global functions */
//setTimeout();//Used to call functions after a delay
//clearTimeout(2);
//window//All function and variables declared globally can be called using window object
var msg = '';//Not defined globally
console.log(global.msg);//will show undefined
//window.sayHello;//window object doesn't run on Node.js
console.log(module);