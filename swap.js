
//akta veriable er man onno akta veriable er sathe change kore dewa
var first = 5;
var second = 7;
console.log(first, second);

var temp = first;
first = second;
second = temp;
console.log(first, second);

// the other way
var third = 10;
var fourth = 15;
console.log(third, fourth);

[third, fourth] = [fourth, third];
console.log(third, fourth);