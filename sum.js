var numbers = [54, 45, 62, 85, 75, 35, 47];
let sum = 0;
for(var i = 0; i < numbers.length; i++){
    var number = numbers[i];
    sum = sum + number;
}
console.log(sum);

function sumNumbers (numbers){
    var sum = 0;
    for(i = 0; i < numbers.length; i++){
        number = numbers[i];
        sum = sum + number;
    }
    return sum;
}
var numberList1 = [12, 10, 21, 32, 15, 21];
console.log(sumNumbers(numberList1));

function addition(digits){
    var add = 0;
    for (var i = 0; i < digits.length; i++){
        var digit = digits[i];
        add = add + digit;
    }
    return add;
}
var secondList = [100, 200, 300, 400];
var thirdList = [15465445, 5645454354, 654674564, 52457645];
console.log(addition(secondList));
console.log(addition(thirdList));