// Homework 10

let counter=1;
let number= [];

let largest=0;

while (counter <= 10){

    number.push(Number(window.prompt("Enter Numbers 1-10 Number:"+counter+"."),10));

    counter++;
}

Array.prototype.max = function () {
    return Math.max.apply(Math, this);
};


largest = number.max();
document.writeln("Largest number is " +largest);