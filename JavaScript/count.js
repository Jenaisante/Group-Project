var number1 = 10;
var number2 = 20;
var myNumber1 = '3';
var myNumber2 = '4';

var count1 = number1 + number2;
var count2 = myNumber1 + myNumber2;

//var el = document.getElementById('one');
//var el = document.getElementsByClassName("result");
//var el = document.getElementsByTagName("span");
//var el = document.querySelector("#one");
var el = document.querySelectorAll("span");
el[0].textContent = count1;

//var el = document.getElementById('two');
//var el = document.getElementsByClassName("result");
//var el = document.getElementsByTagName("span");
//var el = document.querySelector("#two");
var el = document.querySelectorAll("span");
el[1].textContent = count2;


var num =  47 ;
var address = ' Jalan Gombak'; 

var add = num + address; 
var el = document.getElementById('address').textContent = add;
 