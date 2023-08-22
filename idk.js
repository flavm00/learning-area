var button = document.querySelector('button');

button.onclick = function(){
    alert("It's gonna be intense! Ohh, uhh, aah!");
}

//Exercises

//1. Write a JavaScript function that reverses a number.


var reverseNumber = function(number){
    var x=0;
    while(number!=0){
        x=x*10+number%10;
        number = Math.floor(number/10);
    }
    return x;
}

var button1 = document.getElementById('buttonEx1');
var inputElemEx1 = document.getElementById('inputElementEx1');

button1.addEventListener("click",function(){
    var inputValue = inputElemEx1.value;
    console.log(reverseNumber(inputValue));
});


